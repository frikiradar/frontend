import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { Platform } from "@ionic/angular";
import { Subscription } from "rxjs";

import { AuthService } from "./auth.service";
import { DeviceService } from "./device.service";
import { Notification, NotificationService } from "./notification.service";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class PushService {
  notifications: any = [];

  constructor(
    private device: DeviceService,
    private firebase: FirebaseX,
    private router: Router,
    private notificationSvc: NotificationService,
    private localNotifications: LocalNotifications,
    private platform: Platform,
    private rest: RestService,
    private auth: AuthService
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
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
      }
    });
  }

  async init() {
    this.setChannels();

    this.firebase.getToken().then(async token => {
      await this.device.setDevice(token);
    });

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
      data => {
        console.log("data", data);
        if (data.tap) {
          // console.log("tap", data.tap);
          this.router.navigate([data.url]);
        } else {
          if (this.router.url !== data.url) {
            this.localNotification(data);
          }

          this.notificationSvc
            .getUnread()
            .then((notification: Notification) => {
              this.notificationSvc.setNotification(notification);
            });
          // console.log("Received in foreground");
        }
      },
      error => {
        console.error("Error in notification", error);
      }
    );
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

  async sendTopicMessage(topic: string, message: string, title: string) {
    return await this.rest
      .put("topic-message", { topic, message, title })
      .toPromise();
  }

  async localNotification(data: any) {
    let actions = null;
    if (data.topic == "chat") {
      actions = [
        {
          id: "reply",
          type: "input",
          title: "Responder",
          emptyText: "Escribe tu mensaje"
        }
      ] as any[];
    }
    this.localNotifications.schedule({
      title: data?.title,
      text: data?.body,
      sound: "file://assets/audio/bipbip.mp3",
      smallIcon: "res://notification_icon",
      color: "#e91e63",
      icon: data?.icon,
      attachments: data?.attachments,
      // foreground: true,
      data: data
      // launch: true,
      // actions
    });
  }
}
