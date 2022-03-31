import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { FCM } from "@capacitor-community/fcm";
import { PushNotifications, Token } from "@capacitor/push-notifications";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Platform } from "@ionic/angular";
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import { takeWhile } from "rxjs/operators";

import { AuthService } from "./auth.service";
import { DeviceService } from "./device.service";
import {
  NotificationCounters,
  NotificationService,
} from "./notification.service";
import { SwPush } from "@angular/service-worker";
import { Local } from "protractor/built/driverProviders";

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
    private afMessaging: AngularFireMessaging,
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
      PushNotifications.requestPermissions().then(async (result) => {
        if (result.receive === "granted") {
          await PushNotifications.register();
        } else {
          throw new Error("User denied permissions!");
        }
      });

      // Request permission to use push notifications
      // iOS will prompt user and return if they granted permission or not
      // Android will just grant without prompting
      PushNotifications.requestPermissions().then((result) => {
        if (result.receive === "granted") {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          console.error("User denied permissions!");
        }
      });

      // On success, we should be able to receive notifications
      PushNotifications.addListener("registration", async (token: Token) => {
        console.log("Push registration success, token", token.value);
        await this.device.setDevice(token.value);
      });

      /*await PushNotifications.addListener(
        "pushNotificationReceived",
        (notification) => {
          this.localNotification(notification.data);
          console.log("Push notification received: ", notification);
        }
      );*/

      this.setChannels();

      FCM.subscribeTo({ topic: "frikiradar" })
        .then((response) =>
          console.log("Successfully subscribed to topic:", response.message)
        )
        .catch((error) => {
          console.log("Error subscribing to topic:", error);
        });

      if (this.auth.isAdmin() || this.auth.isMaster()) {
        FCM.subscribeTo({ topic: "test" })
          .then((response) =>
            console.log("Successfully subscribed to topic:", response.message)
          )
          .catch((error) => {
            console.log("Error subscribing to topic:", error);
          });
      }

      LocalNotifications.addListener(
        "localNotificationReceived",
        (notification) => {
          console.log("Local notification received: ", notification);
        }
      );

      LocalNotifications.addListener(
        "localNotificationActionPerformed",
        (actionPerformed) => {
          console.log("Local notification action performed: ", actionPerformed);
        }
      );

      PushNotifications.addListener(
        "pushNotificationActionPerformed",
        (actionPerformed) => {
          console.log(actionPerformed);
          if (actionPerformed.actionId === "tap") {
            this.router.navigate([actionPerformed.notification.data.url]);
          } else {
            this.localNotification(actionPerformed.notification);

            if (!this.router.url.includes("chat")) {
              this.notificationSvc
                .getUnread()
                .then((notification: NotificationCounters) => {
                  this.notificationSvc.setNotification(notification);
                });
            }
            // console.log("Received in foreground");
          }
        }
      );
    } else {
      try {
        await this.requestPermission();
        this.afMessaging.messages.subscribe((payload: any) => {
          console.log("new message received. ", payload);
          if (payload?.notification) {
            this.localNotification(payload);

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
    }
  }

  setChannels() {
    const channels = [
      {
        id: "chat",
        name: "Notificaciones de Chat",
        description: "Recibe notificaciones de chat cuando alguien te escribe.",
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
        id: "rooms",
        name: "Notificaciones de salas de chat",
        description:
          "Recibe notificaciones de nuevos mensajes en salas de chat.",
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

      PushNotifications.createChannel({
        id: channel.id,
        name: channel.name,
        sound: "bipbip",
        description: channel.description,
        importance: 1,
      })
        .then((response) => {
          // console.log("Notification Channel created", channel, response);
        })
        .catch((error) => {
          console.log("Create notification channel error: " + error);
        });
    }

    /*PushNotifications
      .deleteChannel("fcm_default_channel")
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting channel", error);
      });*/

    /*PushNotifications
      .listChannels()
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });*/
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
      if (
        !this.router.url.includes("chat") &&
        notification?.notify === "true"
      ) {
        console.log("Lanzamos notificación local");
      }
    } else {
      if (
        !this.router.url.includes("chat") &&
        notification?.data?.notify === "true"
      ) {
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

  async requestPermission(): Promise<void> {
    await this.afMessaging.requestPermission.toPromise();

    this.afMessaging.tokenChanges
      .pipe(takeWhile((token) => this.token !== token))
      .subscribe(
        async (token) => {
          this.token = token;
          // console.log("Notification token:", token);
          await this.device.setDevice(token);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
