import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Platform } from "@ionic/angular";

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
    private platform: Platform,
    private auth: AuthService,
    private swPush: SwPush
  ) {}

  async ngOnInit() {
    if (this.platform.is("capacitor")) {
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
    if (this.platform.is("capacitor")) {
      await this.initCapacitor();
    } else {
      await this.initWeb();
    }

    /*if (this.platform.is("capacitor")) {
      PushNotifications.requestPermissions().then(async (result) => {
        if (result.receive === "granted") {
          await PushNotifications.register();
        } else {
          throw new Error("User denied permissions!");
        }
      });

      // On success, we should be able to receive notifications
      PushNotifications.addListener("registration", async (token: Token) => {
        // console.log("Push registration success, token", token);
        await this.device.setDevice(token.value);
      });

      await PushNotifications.addListener(
        "pushNotificationReceived",
        (notification) => {
          // console.log("Push notification received", notification);
          if (notification?.data.notify === "true") {
            this.localNotification(notification);
          }
        }
      );

      this.setChannels();

      FCM.subscribeTo({ topic: "frikiradar" })
        .then((response) => {
          // console.log("Successfully subscribed to topic:", response.message)
        })
        .catch((error) => {
          console.log("Error subscribing to topic:", error);
        });

      if (this.auth.isAdmin() || this.auth.isMaster()) {
        FCM.subscribeTo({ topic: "test" })
          .then((response) => {
            // console.log("Successfully subscribed to topic:", response.message);
          })
          .catch((error) => {
            console.log("Error subscribing to topic:", error);
          });
      }

      LocalNotifications.addListener(
        "localNotificationActionPerformed",
        (actionPerformed) => {
          console.log(actionPerformed);
          if (actionPerformed.actionId === "tap") {
            this.router.navigate([actionPerformed.notification.extra.url]);
          }
        }
      );

      PushNotifications.addListener(
        "pushNotificationActionPerformed",
        (actionPerformed) => {
          console.log(actionPerformed);
          if (actionPerformed.actionId === "tap") {
            this.router.navigate([actionPerformed.notification.data.url]);
          }
        }
      );
    } else {
      try {
        await this.requestPermission();
        this.afMessaging.messages.subscribe((payload: any) => {
          // console.log("new message received. ", payload);
          if (payload?.notification) {
            if (payload?.data.notify === "true") {
              this.localNotification(payload);
            }

            if (!this.router.url.includes("chat")) {
              this.notificationSvc
                .getUnread()
                .then((notification: NotificationCounters) => {
                  this.notificationSvc.setNotification(notification);
                });
            }
          }
        });
      } catch (e) {
        // console.log("Notificaciones no permitidas")
      }
    }*/
  }

  setChannels() {
    const channels = [
      {
        id: "chat",
        name: "Notificaciones de Chat",
        description: "Recibe notificaciones de chat cuando alguien te escribe.",
        visibility: 0,
      },
      {
        id: "radar",
        name: "Notificaciones de Radar",
        description:
          "Recibe notificaciones cuando hay un usuario interesante cerca de ti.",
      },
      {
        id: "like",
        name: "Notificaciones de Kokoros",
        description:
          "Recibe notificaciones cuando un usuario te entregue su kokoro.",
      },
      {
        id: "frikiradar",
        name: "Notificaciones de FrikiRadar",
        description:
          "Canal de información sobre FrikiRadar, novedades y actualizaciones.",
      },
      {
        id: "test",
        name: "Notificaciones de testeo",
        description: "Canal de testeo, exclusivo para masters.",
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
        sound: "default",
        description: channel.description,
        importance: 3,
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
    /*let actions = null;
    if (notification.topic == "chat") {
      actions = [
        {
          id: "reply",
          type: "input",
          title: "Responder",
          emptyText: "Escribe tu mensaje"
        }
      ] as any[];
    }*/
    if (this.platform.is("capacitor")) {
      if (this.router.url !== notification.data.url) {
        LocalNotifications.schedule({
          notifications: [
            {
              id: Math.random() * (1000000 - 1) + 1,
              title: notification?.title,
              body: notification?.body,
              sound: "default",
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
      if (this.router.url !== notification.data.url) {
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
      };
      if (data?.notify === "true") {
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
}
