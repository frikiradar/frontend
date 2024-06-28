import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LocalNotifications } from "@capacitor/local-notifications";
import { isPlatform } from "@ionic/angular";

import { AuthService } from "./auth.service";
import { DeviceService } from "./device.service";
import {
  NotificationCounters,
  NotificationService,
} from "./notification.service";
import { SwPush } from "@angular/service-worker";
import { initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";
import { getMessaging } from "firebase/messaging";
import { getToken, onMessage } from "firebase/messaging";
import { FirebaseMessaging, Visibility } from "@capacitor-firebase/messaging";
import { FirebaseAnalytics } from "@capacitor-firebase/analytics";
import { getAnalytics } from "firebase/analytics";
import { I18nService } from "./i18n.service";

@Injectable({
  providedIn: "root",
})
export class PushService {
  notifications: any = [];
  token: string = "";

  constructor(
    private device: DeviceService,
    private router: Router,
    private notificationSvc: NotificationService,
    private auth: AuthService,
    private swPush: SwPush,
    private i18n: I18nService
  ) {}

  async ngOnInit() {
    if (isPlatform("capacitor")) {
    } else {
      if (!navigator.serviceWorker) {
        return console.error("Service Worker not supported");
      }

      this.swPush.notificationClicks.subscribe((payload) => {
        this.router.navigate([payload.notification.data.url]);
      });
    }
  }

  async init() {
    if (isPlatform("capacitor")) {
      await this.initCapacitor();
    } else {
      await this.initWeb();
    }

    await FirebaseAnalytics.setEnabled({ enabled: true });

    await FirebaseAnalytics.setUserId({
      userId: "" + this.auth.currentUserValue.id,
    });

    await FirebaseAnalytics.setUserProperty({
      key: "username",
      value: this.auth.currentUserValue.username,
    });
  }

  setChannels() {
    const channels = [
      {
        id: "chat",
        name: this.i18n.translate("chat-notifications"),
        description: this.i18n.translate("receive-chat-notifications"),
        visibility: 0,
      },
      {
        id: "radar",
        name: this.i18n.translate("radar-notifications"),
        description: this.i18n.translate("receive-radar-notifications"),
      },
      {
        id: "like",
        name: this.i18n.translate("kokoros-notifications"),
        description: this.i18n.translate("receive-kokoros-notifications"),
      },
      {
        id: "frikiradar",
        name: this.i18n.translate("frikiradar-notifications"),
        description: this.i18n.translate("frikiradar-info-notifications"),
      },
      {
        id: "test",
        name: this.i18n.translate("testing-notifications"),
        description: this.i18n.translate("testing-channel-notifications"),
      },
    ];

    for (let channel of channels) {
      if (
        channel.id == "test" &&
        !(this.auth.isAdmin() || this.auth.isMaster())
      ) {
        continue;
      }

      FirebaseMessaging.createChannel({
        id: channel.id,
        name: channel.name,
        description: channel.description,
        vibration: true,
        importance: 4,
        visibility: (channel.visibility ?? 1) as Visibility,
      })
        .then((response) => {
          // console.log("Notification Channel created", channel, response);
        })
        .catch((error) => {
          console.log("Create notification channel error: " + error);
        });
    }
  }

  async localNotification(notification: any) {
    if (isPlatform("capacitor")) {
      if (location.pathname !== notification.data.url) {
        LocalNotifications.schedule({
          notifications: [
            {
              id: Math.random() * (1000000 - 1) + 1,
              title: notification?.title,
              body: notification?.body,
              smallIcon: "ic_stat_notification",
              iconColor: "#e91e63",
              largeIcon: notification?.data.icon,
              // attachments: notification?.attachments,
              channelId: notification?.data.topic,
              extra: notification?.data,
              // actions
            },
          ],
        });
      }
    } else {
      if (location.pathname !== notification.data.url) {
        try {
          const registration = await navigator.serviceWorker.ready;
          // Customize notification here
          const notificationTitle = notification?.title;
          const notificationOptions = {
            body: notification?.body,
            icon: notification?.data?.icon,
            image: notification?.data?.attachments
              ? notification?.data.attachments[0]
              : null,
            badge: notification?.data?.badge,
          };
          await registration.showNotification(
            notificationTitle,
            notificationOptions
          );
        } catch (e) {
          console.error(e);
        }
      }
    }
  }

  async initWeb() {
    const firebaseApp = initializeApp(environment.firebase);
    const analytics = getAnalytics(firebaseApp);
    const messaging = getMessaging(firebaseApp);
    const token = await getToken(messaging);
    await this.device.setDevice(token);

    onMessage(messaging, (payload) => {
      if (payload?.data?.notify === "true") {
        this.localNotification(payload);
      }
      if (!this.router.url.includes("chat")) {
        this.notificationSvc
          .getUnread()
          .then((notification: NotificationCounters) => {
            this.notificationSvc.setNotification(notification);
          });
      }
    });
  }

  async initCapacitor() {
    await FirebaseMessaging.requestPermissions();
    const result = await FirebaseMessaging.getToken();
    await this.device.setDevice(result.token);
    this.setChannels();

    FirebaseMessaging.addListener("notificationReceived", (payload) => {
      const notification = payload.notification;
      const data = notification.data as {
        message: string;
        topic: string;
        notify: string;
        url: string;
      };
      if (data?.notify === "true") {
        this.localNotification(notification);
      }
      if (!this.router.url.includes("chat")) {
        this.notificationSvc
          .getUnread()
          .then((notification: NotificationCounters) => {
            this.notificationSvc.setNotification(notification);
          });
      }
    });

    FirebaseMessaging.addListener("notificationActionPerformed", (payload) => {
      const notification = payload.notification;
      const data = notification.data as {
        message: string;
        topic: string;
        notify: string;
        url: string;
      };
      if (payload.actionId == "tap") {
        this.router.navigate([data.url]);

        FirebaseMessaging.removeDeliveredNotifications({
          notifications: [notification],
        });
      }
    });

    LocalNotifications.addListener(
      "localNotificationActionPerformed",
      (payload) => {
        if (payload.actionId == "tap") {
          this.router.navigate([payload.notification.extra.url]);

          LocalNotifications.cancel({
            notifications: [payload.notification],
          });
        }
      }
    );
  }
}
