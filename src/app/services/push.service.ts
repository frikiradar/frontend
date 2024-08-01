import { Injectable } from "@angular/core";
import { isPlatform } from "@ionic/angular";
import { Router } from "@angular/router";
import { LocalNotifications } from "@capacitor/local-notifications";
import { PushNotifications } from "@capacitor/push-notifications";
import { getMessaging } from "firebase/messaging";
import { getToken, onMessage } from "firebase/messaging";
import { FirebaseMessaging, Visibility } from "@capacitor-firebase/messaging";
import { FirebaseAnalytics } from "@capacitor-firebase/analytics";
import { getAnalytics } from "firebase/analytics";
import { SwPush } from "@angular/service-worker";
import { initializeApp } from "firebase/app";

import { AuthService } from "./auth.service";
import { DeviceService } from "./device.service";
import {
  NotificationCounters,
  NotificationService,
} from "./notification.service";
import { environment } from "src/environments/environment";
import { I18nService } from "./i18n.service";
import { ChatService } from "./chat.service";

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
    private i18n: I18nService,
    private chatSvc: ChatService
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
        id: "suggestions",
        name: this.i18n.translate("suggestions-notifications"),
        description: this.i18n.translate("receive-suggestions-notifications"),
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
    const userId = +notification?.data?.fromUser;
    if (
      !this.router.url.includes("chat") ||
      (this.chatSvc.selectedUserId.value !== null &&
        userId !== this.chatSvc.selectedUserId.value)
    ) {
      if (isPlatform("capacitor")) {
        LocalNotifications.schedule({
          notifications: [
            {
              id: +`${notification.data.fromUser}${Math.floor(
                Math.random() * (10000 - 1000) + 1000
              )}`,
              title: notification?.title,
              body: notification?.body,
              smallIcon: "ic_stat_notification",
              iconColor: "#e91e63",
              largeIcon: notification?.data.icon,
              // attachments: notification?.attachments,
              channelId: notification?.data.topic,
              extra: notification?.data,
              threadIdentifier: notification?.data.topic,
              group:
                notification?.data.topic + "_" + notification?.data.fromUser,
              // actions
            },
          ],
        });
      } else {
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
    await this.requestPermissions();

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
    await this.requestPermissions();

    const result = await FirebaseMessaging.getToken();
    await this.device.setDevice(result.token);
    this.setChannels();

    PushNotifications.addListener("pushNotificationReceived", (payload) => {
      console.log("Push Notification received", payload);
    });

    FirebaseMessaging.addListener("notificationReceived", (payload) => {
      console.log("Notification received", payload);
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

    /*
    /*  Remplazado por PushNotifications.addListener("pushNotificationActionPerformed", (payload) => {});
    /*
    FirebaseMessaging.addListener("notificationActionPerformed", (payload) => {
      console.log("Notification action performed", payload);
      const notification = payload.notification;
      const data = notification.data as {
        message: string;
        topic: string;
        notify: string;
        url: string;
      };
      if (payload.actionId == "tap") {
        let url = data.url;
        this.router.navigate([url]);

        FirebaseMessaging.removeDeliveredNotifications({
          notifications: [notification],
        });
      }
    });*/

    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (payload) => {
        console.log("Push Notification action performed", payload);
        if (payload.actionId == "tap") {
          let url = payload.notification.data.url;
          this.router.navigate([url]);

          FirebaseMessaging.removeDeliveredNotifications({
            notifications: [payload.notification],
          });
        }
      }
    );

    LocalNotifications.addListener(
      "localNotificationActionPerformed",
      (payload) => {
        console.log("Local Notification action performed", payload);
        if (payload.actionId == "tap") {
          let url = payload.notification.extra.url;
          this.router.navigate([url]);

          LocalNotifications.cancel({
            notifications: [payload.notification],
          });
        }
      }
    );
  }

  removeChatNotifications(fromUserid: number, username: string) {
    if (isPlatform("capacitor")) {
      LocalNotifications.getDeliveredNotifications().then((payload) => {
        const notifications = payload.notifications;
        notifications.forEach((notification) => {
          const findNotification = notification?.group == `chat_${fromUserid}`;
          if (findNotification) {
            LocalNotifications.cancel({
              notifications: [notification],
            });
          }
        });
      });

      FirebaseMessaging.getDeliveredNotifications().then((payload) => {
        const notifications = payload.notifications;
        notifications.forEach((notification) => {
          const findNotification = notification?.tag == `chat_${username}`;
          if (findNotification) {
            FirebaseMessaging.removeDeliveredNotifications({
              notifications: [notification],
            });
          }
        });
      });
    } else {
      /*navigator.serviceWorker.getRegistration().then((registration) => {
        registration.getNotifications().then((notifications) => {
          console.log("Notifications", notifications);
          notifications.forEach((notification) => {
            // notification.close();
          });
        });
      });*/
    }
  }

  async requestPermissions() {
    if (isPlatform("capacitor")) {
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === "prompt") {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== "granted") {
        throw new Error("User denied permissions!");
      }
    } else {
      // no es necesario
    }
  }
}
