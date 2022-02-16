"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 20818:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 24099);








const routes = [
    {
        path: "",
        component: _chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage
    }
];
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 24099:
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page.html?ngResource */ 59910);
/* harmony import */ var _chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss?ngResource */ 46232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 71695);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17265);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/auth.service */ 37556);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/navigation.service */ 89565);












let ChatPage = class ChatPage {
    constructor(route, router, auth, afMessaging, firebase, platform, localNotifications, nav) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.afMessaging = afMessaging;
        this.firebase = firebase;
        this.platform = platform;
        this.localNotifications = localNotifications;
        this.nav = nav;
        this.desktop = false;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.route.snapshot.paramMap.get("id")) {
                this.userId = +this.route.snapshot.paramMap.get("id");
            }
            if (window.innerWidth > 991) {
                this.desktop = true;
            }
            window.onresize = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                this.desktop = window.innerWidth > 991;
            });
            this.firebaseListener();
        });
    }
    showChat(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.nav.navigateRoot("/chat/" + id);
        });
    }
    backToList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.nav.navigateRoot("/chat");
        });
    }
    firebaseListener() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                this.firebase.onMessageReceived().subscribe((notification) => {
                    var _a;
                    if ((notification === null || notification === void 0 ? void 0 : notification.message) && (notification === null || notification === void 0 ? void 0 : notification.topic) === "chat") {
                        const message = JSON.parse(notification.message);
                        // console.log(message);
                        this.messageEvent.emit(message);
                        if (this.router.url.includes("chat") &&
                            ((_a = message === null || message === void 0 ? void 0 : message.fromuser) === null || _a === void 0 ? void 0 : _a.id) !== this.userId &&
                            (notification === null || notification === void 0 ? void 0 : notification.notify) === "true") {
                            this.localNotifications.schedule({
                                title: notification === null || notification === void 0 ? void 0 : notification.title,
                                text: notification === null || notification === void 0 ? void 0 : notification.body,
                                sound: "file://assets/audio/bipbip.mp3",
                                smallIcon: "res://notification_icon",
                                color: "#e91e63",
                                icon: notification === null || notification === void 0 ? void 0 : notification.icon,
                                // attachments: notification?.attachments,
                                channel: notification === null || notification === void 0 ? void 0 : notification.topic,
                                data: notification,
                                // actions
                            });
                        }
                    }
                }, (error) => {
                    console.error("Error in notification", error);
                });
            }
            else {
                this.afMessaging.messages.subscribe((payload) => {
                    var _a, _b;
                    // console.log(payload);
                    if (((_a = payload === null || payload === void 0 ? void 0 : payload.data) === null || _a === void 0 ? void 0 : _a.message) && ((_b = payload === null || payload === void 0 ? void 0 : payload.data) === null || _b === void 0 ? void 0 : _b.topic) === "chat") {
                        const message = JSON.parse(payload.data.message);
                        // console.log(payload.data);
                        this.messageEvent.emit(message);
                    }
                });
            }
        });
    }
    messageChange(message) {
        this.messageEvent.emit(message);
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_9__.AngularFireMessaging },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseX },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService }
];
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-chat",
        template: _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_9__.AngularFireMessaging,
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseX,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform,
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService])
], ChatPage);



/***/ }),

/***/ 46232:
/*!************************************************!*\
  !*** ./src/app/chat/chat.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n\n.hide {\n  display: none;\n}\n\napp-chat-list {\n  width: 100%;\n}\n\napp-chat-modal {\n  width: 100%;\n}\n\n@media (max-width: 991px) {\n  app-chat-list {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n  }\n}\n\n@media (min-width: 992px) {\n  app-chat-list {\n    max-width: 350px;\n  }\n  app-chat-list ::ng-deep ion-list,\napp-chat-list ::ng-deep ion-item,\napp-chat-list ::ng-deep ion-content {\n    --background: var(--ion-color-medium-dark) !important;\n    background: var(--ion-color-medium-dark) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxPQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQUE7RUFBRjtFQUdJOzs7SUFHRSxxREFBQTtJQUNBLG1EQUFBO0VBRE47QUFDRiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYXBwLWNoYXQtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtY2hhdC1tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgYXBwLWNoYXQtbGlzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgYXBwLWNoYXQtbGlzdCB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcblxuICAgIDo6bmctZGVlcCB7XG4gICAgICBpb24tbGlzdCxcbiAgICAgIGlvbi1pdGVtLFxuICAgICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyaykgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1kYXJrKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 59910:
/*!************************************************!*\
  !*** ./src/app/chat/chat.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-chat-list\n  [ngClass]=\"!userId || desktop ? '' : 'hide'\"\n  (userChange)=\"showChat($event)\"\n  [selected]=\"userId\"\n  [messageEvent]=\"messageEvent\"\n></app-chat-list>\n<app-chat-modal\n  [ngClass]=\"userId ? '' : 'hide'\"\n  (backToList)=\"backToList()\"\n  [userId]=\"userId\"\n  [messageEvent]=\"messageEvent\"\n  (messageChange)=\"messageChange($event)\"\n></app-chat-modal>\n<div class=\"full-center ion-padding\" *ngIf=\"!userId && desktop\">\n  <ion-icon name=\"chatbubbles\"></ion-icon>\n  <h2>No hay mensajes</h2>\n  <p>Selecciona un chat</p>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts.js.map