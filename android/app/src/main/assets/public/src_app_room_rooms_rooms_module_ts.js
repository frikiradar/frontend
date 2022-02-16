"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_room_rooms_rooms_module_ts"],{

/***/ 53333:
/*!****************************************************!*\
  !*** ./src/app/room/rooms/rooms-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsPageRoutingModule": () => (/* binding */ RoomsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rooms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rooms.page */ 17716);




const routes = [
    {
        path: '',
        component: _rooms_page__WEBPACK_IMPORTED_MODULE_0__.RoomsPage
    }
];
let RoomsPageRoutingModule = class RoomsPageRoutingModule {
};
RoomsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoomsPageRoutingModule);



/***/ }),

/***/ 60946:
/*!********************************************!*\
  !*** ./src/app/room/rooms/rooms.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsPageModule": () => (/* binding */ RoomsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rooms-routing.module */ 53333);
/* harmony import */ var _rooms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms.page */ 17716);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let RoomsPageModule = class RoomsPageModule {
};
RoomsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoomsPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_rooms_page__WEBPACK_IMPORTED_MODULE_1__.RoomsPage]
    })
], RoomsPageModule);



/***/ }),

/***/ 17716:
/*!******************************************!*\
  !*** ./src/app/room/rooms/rooms.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsPage": () => (/* binding */ RoomsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rooms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rooms.page.html?ngResource */ 46367);
/* harmony import */ var _rooms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms.page.scss?ngResource */ 55991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 71695);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deep-equal */ 15541);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ 70946);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/room.service */ 51037);













let RoomsPage = class RoomsPage {
    constructor(roomSvc, auth, router, nav, config, afMessaging, firebase, platform) {
        this.roomSvc = roomSvc;
        this.auth = auth;
        this.router = router;
        this.nav = nav;
        this.config = config;
        this.afMessaging = afMessaging;
        this.firebase = firebase;
        this.platform = platform;
        this.loading = true;
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.rooms = (yield this.config.get("rooms"));
        });
    }
    ngOnInit() {
        this.getRooms();
        this.connectSSE();
    }
    getRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let rooms = yield this.roomSvc.getRooms();
            const rooms_config = yield this.roomSvc.getRoomsConfig();
            rooms.map((r) => {
                let configRoom = rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.find((room) => room.slug === r.slug);
                if ((configRoom === null || configRoom === void 0 ? void 0 : configRoom.last_message) < (r === null || r === void 0 ? void 0 : r.last_message) ||
                    (!(configRoom === null || configRoom === void 0 ? void 0 : configRoom.last_message) && (r === null || r === void 0 ? void 0 : r.last_message))) {
                    r.unread = true;
                }
            });
            rooms = rooms.filter((r) => {
                var _a, _b;
                if ((_b = (_a = this.auth.currentUserValue) === null || _a === void 0 ? void 0 : _a.roles) === null || _b === void 0 ? void 0 : _b.includes(r.permissions[0])) {
                    return r;
                }
            });
            rooms = yield this.roomSvc.orderRooms(rooms);
            if (this.rooms) {
                if (!deep_equal__WEBPACK_IMPORTED_MODULE_3__(this.rooms, rooms)) {
                    this.rooms = rooms;
                    this.config.set("rooms", rooms);
                }
            }
            else {
                this.rooms = rooms;
                this.config.set("rooms", rooms);
            }
            this.loading = false;
        });
    }
    showRoom(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/room", slug]);
            this.rooms.map((r) => {
                if (r.slug === slug) {
                    r.unread = false;
                }
            });
        });
    }
    reorderRooms(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.roomSvc.reorderRooms(event.detail.from, event.detail.to);
            event.detail.complete();
            const rooms = yield this.roomSvc.orderRooms(this.rooms);
            this.config.set("rooms", rooms);
        });
    }
    connectSSE() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                this.firebase.onMessageReceived().subscribe((notification) => {
                    if (notification === null || notification === void 0 ? void 0 : notification.message) {
                        const message = JSON.parse(notification.message);
                        // console.log(message);
                        this.messageReceived(message);
                    }
                });
            }
            else {
                this.afMessaging.messages.subscribe((payload) => {
                    var _a;
                    if ((_a = payload === null || payload === void 0 ? void 0 : payload.data) === null || _a === void 0 ? void 0 : _a.message) {
                        const message = JSON.parse(payload.data.message);
                        this.messageReceived(message);
                    }
                });
            }
        });
    }
    messageReceived(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(message);
            this.rooms.map((m) => {
                if (m.slug === message.conversationId) {
                    if (message.fromuser.id !== this.auth.currentUserValue.id) {
                        m.unread = true;
                    }
                }
            });
        });
    }
    back() {
        this.nav.back();
    }
};
RoomsPage.ctorParameters = () => [
    { type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_7__.RoomService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__.NavService },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_10__.AngularFireMessaging },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseX },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform }
];
RoomsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-rooms",
        template: _rooms_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rooms_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [src_app_services_room_service__WEBPACK_IMPORTED_MODULE_7__.RoomService,
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__.NavService,
        src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService,
        _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_10__.AngularFireMessaging,
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseX,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform])
], RoomsPage);



/***/ }),

/***/ 55991:
/*!*******************************************************!*\
  !*** ./src/app/room/rooms/rooms.page.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "#rooms ion-thumbnail {\n  --border-radius: 8px;\n  margin-right: 10px;\n}\n#rooms .room-name.unread {\n  font-weight: bolder;\n}\n#rooms .room-description {\n  white-space: normal;\n  white-space: initial;\n  color: #acacac;\n}\n#rooms ion-badge {\n  position: relative;\n  left: 45px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  bottom: 18px;\n  border: 2px solid #1f1f1f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb21zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7RUFBQSxvQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFISiIsImZpbGUiOiJyb29tcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vbXMge1xuICBpb24tdGh1bWJuYWlsIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAucm9vbS1uYW1lLnVucmVhZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIC5yb29tLWRlc2NyaXB0aW9uIHtcbiAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICBjb2xvcjogcmdiKDE3MiwgMTcyLCAxNzIpO1xuICB9XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMThweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWYxZjFmO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 46367:
/*!*******************************************************!*\
  !*** ./src/app/room/rooms/rooms.page.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Salas de chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"loading\"></ion-progress-bar>\n  <div *ngIf=\"!rooms\" id=\"rooms\">\n    <ion-item *ngFor=\"let i of [].constructor(12)\">\n      <ion-thumbnail>\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h2 class=\"room-name\">\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h2>\n        <p class=\"room-description\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </div>\n  <div *ngIf=\"rooms\" id=\"rooms\">\n    <ion-reorder-group\n      [disabled]=\"false\"\n      (ionItemReorder)=\"reorderRooms($event)\"\n    >\n      <ion-item\n        button\n        lines=\"none\"\n        (click)=\"showRoom(room.slug)\"\n        *ngFor=\"let room of rooms\"\n      >\n        <ion-thumbnail>\n          <img\n            [src]=\"room.image\"\n            default=\"/assets/img/pages/default-games-page.jpg\"\n            [alt]=\"room.name\"\n          />\n          <ion-badge color=\"primary\" *ngIf=\"room?.unread\">&nbsp;</ion-badge>\n        </ion-thumbnail>\n        <ion-label>\n          <h2 class=\"room-name\" [ngClass]=\"room?.unread ? 'unread' : ''\">\n            {{ room?.name }}\n          </h2>\n          <p class=\"room-description\">{{room?.description}}</p>\n        </ion-label>\n        <ion-reorder slot=\"end\" (click)=\"vibration.vibrate(5)\">\n          <ion-icon color=\"light\" name=\"reorder-two\"></ion-icon>\n        </ion-reorder>\n      </ion-item>\n    </ion-reorder-group>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_room_rooms_rooms_module_ts.js.map