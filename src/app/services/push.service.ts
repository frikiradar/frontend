import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { Platform } from "@ionic/angular";
import { AngularFireMessaging } from "@angular/fire/messaging";
import { takeWhile } from "rxjs/operators";
import { SwPush } from "@angular/service-worker";

import { AuthService } from "./auth.service";
import { DeviceService } from "./device.service";
import {
  NotificationCounters,
  NotificationService
} from "./notification.service";

@Injectable({
  providedIn: "root"
})
export class PushService {
  notifications: any = [];
  token: string = "";

  constructor(
    private device: DeviceService,
    private firebase: FirebaseX,
    private router: Router,
    private notificationSvc: NotificationService,
    private localNotifications: LocalNotifications,
    private platform: Platform,
    private auth: AuthService,
    private afMessaging: AngularFireMessaging,
    private swPush: SwPush
  ) {
    this.platform.ready().then(async () => {
      if (this.platform.is("cordova")) {
        try {
          await this.firebase.hasPermission();
          this.localNotifications.on("click").subscribe(notification => {
            console.log("click", notification);
            const data = notification.data;
            this.router.navigate([data.url]);
          });

          this.localNotifications.on("trigger").subscribe(notification => {
            console.log("trigger", notification);
            const data = notification.data;
          });

          this.localNotifications.on("reply").subscribe(notification => {
            console.log("onreply", notification);
          });
        } catch (e) {
          console.error(e);
        }
      } else {
        this.swPush.notificationClicks.subscribe(payload => {
          this.router.navigate([payload.notification.data.url]);
        });
      }
    });
  }

  async init() {
    if (this.platform.is("cordova")) {
      this.setChannels();

      this.firebase.getToken().then(async token => {
        // console.log("Notification token:", token);
        await this.device.setDevice(token);
      });

      /*this.firebase.onTokenRefresh().subscribe(async token => {
        // console.log("Notification token refreshed:", token);
        await this.device.setDevice(token);
      });*/

      this.firebase
        .subscribe("frikiradar")
        .then(response =>
          console.log("Successfully subscribed to topic:", response)
        )
        .catch(error => {
          console.log("Error subscribing to topic:", error);
        });

      if (this.auth.isAdmin() || this.auth.isMaster()) {
        this.firebase
          .subscribe("test")
          .then(response =>
            console.log("Successfully subscribed to topic:", response)
          )
          .catch(error => {
            console.log("Error subscribing to topic:", error);
          });
      }

      this.firebase.onMessageReceived().subscribe(
        payload => {
          // console.log("payload", payload);
          if (payload.tap) {
            this.router.navigate([payload.url]);
          } else {
            this.localNotification(payload);

            if (!this.router.url.includes("chat")) {
              this.notificationSvc
                .getUnread()
                .then((notification: NotificationCounters) => {
                  this.notificationSvc.setNotification(notification);
                });
            }
            // console.log("Received in foreground");
          }
        },
        error => {
          console.error("Error in notification", error);
        }
      );
    } else {
      await this.requestPermission();
      this.afMessaging.messages.subscribe((payload: any) => {
        if (payload?.notification) {
          // console.log("new message received. ", payload);
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
    }
  }

  setChannels() {
    const channels = [
      {
        id: "chat",
        name: "Notificaciones de Chat",
        description: "Recibe notificaciones de chat cuando alguien te escribe."
      },
      {
        id: "radar",
        name: "Notificaciones de Radar",
        description:
          "Recibe notificaciones cuando hay un usuario interesante cerca de ti."
      },
      {
        id: "like",
        name: "Notificaciones de Kokoros",
        description:
          "Recibe notificaciones cuando un usuario te entregue su kokoro."
      },
      {
        id: "frikiradar",
        name: "Notificaciones de FrikiRadar",
        description:
          "Canal de información sobre FrikiRadar, novedades y actualizaciones."
      },
      {
        id: "test",
        name: "Notificaciones de testeo",
        description: "Canal de testeo, exclusivo para masters."
      }
    ];

    for (let channel of channels) {
      if (
        channel.id == "test" &&
        !(this.auth.isAdmin() || this.auth.isMaster())
      ) {
        continue;
      }

      this.firebase
        .createChannel({
          id: channel.id,
          name: channel.name,
          sound: "bipbip",
          description: channel.description
        })
        .then(response => {
          // console.log("Notification Channel created", channel, response);
        })
        .catch(error => {
          console.log("Create notification channel error: " + error);
        });
    }

    this.firebase
      .deleteChannel("fcm_default_channel")
      .then(response => {
        // console.log(response);
      })
      .catch(error => {
        console.error("Error deleting channel", error);
      });

    /*this.firebase
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
    if (this.platform.is("cordova")) {
      if (this.router.url !== notification?.url) {
        this.localNotifications.schedule({
          title: notification?.title,
          text: notification?.body,
          sound: "file://assets/audio/bipbip.mp3",
          smallIcon: "res://notification_icon",
          color: "#e91e63",
          icon: notification?.icon,
          // attachments: notification?.attachments,
          channel: notification?.topic,
          data: notification
          // actions
        });
      }
    } else {
      if (this.router.url !== notification?.data?.url) {
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
            badge: notification?.data?.badge
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

  setChannel(slug: string, name: string, description: string) {
    if (this.platform.is("cordova")) {
      this.firebase
        .createChannel({
          id: slug,
          name: name,
          sound: "bipbip",
          description: description
        })
        .then(response => {
          console.log("Notification Channel created", slug, response);
        })
        .catch(error => {
          console.error("Create notification channel error: " + error);
        });
    }
  }

  removeChannel(slug: string) {
    if (this.platform.is("cordova")) {
      this.firebase
        .deleteChannel(slug)
        .then(response => {
          console.log("Notification Chanel deleted", slug, response);
        })
        .catch(error => {
          console.error("Error deleting channel", error);
        });
    }
  }

  async requestPermission(): Promise<void> {
    await this.afMessaging.requestPermission.toPromise();

    this.afMessaging.tokenChanges
      .pipe(takeWhile(token => this.token !== token))
      .subscribe(
        async token => {
          this.token = token;
          // console.log("Notification token:", token);
          await this.device.setDevice(token);
        },
        error => {
          console.error(error);
        }
      );
  }
}
