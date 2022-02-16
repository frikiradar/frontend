"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_community_community_module_ts"],{

/***/ 74518:
/*!***********************************************!*\
  !*** ./src/app/community/community.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunityPageModule": () => (/* binding */ CommunityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _community_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community.page */ 67197);








const routes = [
    {
        path: "",
        component: _community_page__WEBPACK_IMPORTED_MODULE_1__.CommunityPage
    },
    {
        path: "story/:id",
        component: _community_page__WEBPACK_IMPORTED_MODULE_1__.CommunityPage
    }
];
let CommunityPageModule = class CommunityPageModule {
};
CommunityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_community_page__WEBPACK_IMPORTED_MODULE_1__.CommunityPage]
    })
], CommunityPageModule);



/***/ }),

/***/ 67197:
/*!*********************************************!*\
  !*** ./src/app/community/community.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunityPage": () => (/* binding */ CommunityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _community_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./community.page.html?ngResource */ 48322);
/* harmony import */ var _community_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community.page.scss?ngResource */ 29816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 59076);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deep-equal */ 15541);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 71695);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ 70946);
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/room.service */ 51037);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/auth.service */ 37556);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/story.service */ 78934);
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/page.service */ 49450);
/* harmony import */ var _services_animate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/animate.service */ 74958);
















let CommunityPage = class CommunityPage {
    constructor(router, auth, menu, roomSvc, storySvc, config, vibration, modal, route, pageSvc, animate, afMessaging, firebase, platform) {
        this.router = router;
        this.auth = auth;
        this.menu = menu;
        this.roomSvc = roomSvc;
        this.storySvc = storySvc;
        this.config = config;
        this.vibration = vibration;
        this.modal = modal;
        this.route = route;
        this.pageSvc = pageSvc;
        this.animate = animate;
        this.afMessaging = afMessaging;
        this.firebase = firebase;
        this.platform = platform;
        this.groupedStories = [];
        this.loading = true;
        this.storiesOpts = {
            preloadImages: false,
            lazy: true,
            slidesPerView: 4.5,
            breakpoints: {
                1024: {
                    slidesPerView: 10.5,
                },
            },
            grabCursor: true,
        };
        this.pagesOpts = {
            preloadImages: false,
            lazy: true,
            slidesPerView: 3.5,
            breakpoints: {
                1024: {
                    slidesPerView: 8.5,
                },
            },
            grabCursor: true,
        };
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.animate.animateSections("section", 600, 500);
            this.pages = (yield this.config.get("pages"));
            this.rooms = (yield this.config.get("rooms"));
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.getRooms();
            this.getPages();
        });
    }
    getRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.rooms = undefined;
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
                if (!deep_equal__WEBPACK_IMPORTED_MODULE_3__(this.rooms.slice(0, 3), rooms.slice(0, 3))) {
                    this.rooms = rooms;
                    this.config.set("rooms", rooms);
                }
            }
            else {
                this.rooms = rooms;
                this.config.set("rooms", rooms);
            }
            this.connectSSE();
        });
    }
    getPages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const pages = yield this.pageSvc.getPages();
            if (this.pages) {
                if (!deep_equal__WEBPACK_IMPORTED_MODULE_3__(this.pages, pages)) {
                    this.pages = pages;
                    this.config.set("pages", pages);
                }
            }
            else {
                this.pages = pages;
                this.config.set("pages", pages);
            }
            this.loading = false;
        });
    }
    showAllRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/rooms"]);
        });
    }
    showRoom(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/room", slug]);
            this.rooms.map((r) => {
                if (r.slug === slug) {
                    r.unread = false;
                }
            });
        });
    }
    showPages() {
        this.router.navigate(["/pages"]);
    }
    showPage(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/page", slug]);
        });
    }
    connectSSE() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
                        console.log(message);
                        this.messageReceived(message);
                    }
                });
            }
        });
    }
    messageReceived(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.rooms.map((m) => {
                if (m.slug === message.conversationId) {
                    if (message.fromuser.id !== this.auth.currentUserValue.id) {
                        m.unread = true;
                    }
                }
            });
        });
    }
    openChat() {
        this.router.navigate(["/chat"]);
    }
};
CommunityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController },
    { type: _services_room_service__WEBPACK_IMPORTED_MODULE_6__.RoomService },
    { type: _services_story_service__WEBPACK_IMPORTED_MODULE_8__.StoryService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_page_service__WEBPACK_IMPORTED_MODULE_9__.PageService },
    { type: _services_animate_service__WEBPACK_IMPORTED_MODULE_10__.AnimateService },
    { type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_14__.AngularFireMessaging },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_4__.FirebaseX },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform }
];
CommunityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: "app-community",
        template: _community_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_community_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController,
        _services_room_service__WEBPACK_IMPORTED_MODULE_6__.RoomService,
        _services_story_service__WEBPACK_IMPORTED_MODULE_8__.StoryService,
        _services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService,
        _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute,
        _services_page_service__WEBPACK_IMPORTED_MODULE_9__.PageService,
        _services_animate_service__WEBPACK_IMPORTED_MODULE_10__.AnimateService,
        _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_14__.AngularFireMessaging,
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_4__.FirebaseX,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform])
], CommunityPage);



/***/ }),

/***/ 74958:
/*!*********************************************!*\
  !*** ./src/app/services/animate.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateService": () => (/* binding */ AnimateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 93819);



let AnimateService = class AnimateService {
    constructor(animationCtrl) {
        this.animationCtrl = animationCtrl;
    }
    animateSections(selector, duration, delayBetweenItems, easing) {
        const animationArray = [];
        const elemArray = document.querySelectorAll(selector);
        for (let i = 0; i <= elemArray.length; i++) {
            // console.log('aqui: ', elemArray[i]);
            const animation = this.animationCtrl
                .create()
                .addElement(elemArray[i])
                .easing(easing ? easing : "cubic-bezier(0.55, 0, 1, 0.45)")
                .duration(duration)
                .delay(i * delayBetweenItems)
                .fromTo("opacity", "0", "1");
            // .fromTo("width", "0", "100%");
            animationArray.push(animation);
        }
        animationArray.forEach((animation) => {
            animation.play();
        });
    }
};
AnimateService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.AnimationController }
];
AnimateService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.AnimationController])
], AnimateService);



/***/ }),

/***/ 29816:
/*!**********************************************************!*\
  !*** ./src/app/community/community.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".subtitle {\n  font-size: 10pt;\n  color: #acacac;\n}\n\nion-thumbnail {\n  --border-radius: 8px;\n  margin-right: 10px;\n}\n\n#rooms {\n  background: var(--ion-color-medium-dark);\n  margin: 0 10px 10px 10px;\n  border-radius: 25px;\n  padding: 10px 0;\n}\n\n#rooms .room-name.unread {\n  font-weight: bolder;\n}\n\n#rooms .room-description {\n  white-space: normal;\n  white-space: initial;\n  color: #acacac;\n}\n\n#rooms ion-badge {\n  position: relative;\n  left: 45px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  bottom: 12px;\n  border: 2px solid var(--ion-color-medium-dark);\n}\n\n#pages {\n  background: var(--ion-color-medium-dark);\n  margin: 0 0 10px 10px;\n  border-radius: 25px 0 0 25px;\n  padding: 15px 0 15px 0px;\n}\n\n#pages .swiper-slide img {\n  height: 130px;\n  width: auto;\n}\n\n@media (min-width: 1920px) {\n  #pages .swiper-slide img {\n    height: 170px;\n  }\n}\n\n#pages ion-thumbnail {\n  --border-radius: 5px;\n  padding: 5px;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#pages ion-label {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0VBQUEsb0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtBQURKOztBQUtBO0VBQ0Usd0NBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFGRjs7QUFJRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0U7RUFDRTtJQUNFLGFBQUE7RUFISjtBQUNGOztBQU1FO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxKIiwiZmlsZSI6ImNvbW11bml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiByZ2IoMTcyLCAxNzIsIDE3Mik7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4jcm9vbXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWRhcmspO1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcblxuICAucm9vbS1uYW1lLnVucmVhZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIC5yb29tLWRlc2NyaXB0aW9uIHtcbiAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICBjb2xvcjogcmdiKDE3MiwgMTcyLCAxNzIpO1xuICB9XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWRhcmspO1xuICB9XG59XG5cbiNwYWdlcyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyayk7XG4gIG1hcmdpbjogMCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAwIDAgMjVweDtcbiAgcGFkZGluZzogMTVweCAwIDE1cHggMHB4O1xuXG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAgIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgfVxuICB9XG5cbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 48322:
/*!**********************************************************!*\
  !*** ./src/app/community/community.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Comunidad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"loading\"></ion-progress-bar>\n  <ion-item lines=\"none\" (click)=\"showAllRooms()\" button detail=\"false\">\n    <ion-label color=\"light\">\n      <h2 class=\"section\">\n        <ion-text color=\"ligth\">Salas de chat</ion-text>\n      </h2>\n      <p class=\"subtitle\">\n        <ion-text color=\"ligth\">\n          ¡Entra y habla con la comunidad FrikiRadar!\n        </ion-text>\n      </p>\n    </ion-label>\n    <ion-icon\n      md=\"arrow-forward\"\n      ios=\"chevron-forward\"\n      slot=\"end\"\n      color=\"light\"\n    ></ion-icon>\n  </ion-item>\n  <section id=\"rooms\">\n    <div *ngIf=\"!rooms\">\n      <ion-item *ngFor=\"let i of [].constructor(3)\" lines=\"none\">\n        <ion-thumbnail>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h2 class=\"room-name\">\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h2>\n          <p class=\"room-description\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf=\"rooms\">\n      <ion-item\n        button\n        lines=\"none\"\n        (click)=\"showRoom(room.slug)\"\n        *ngFor=\"let room of rooms.slice(0,3)\"\n      >\n        <ion-thumbnail>\n          <ion-img\n            [src]=\"room.image ? room.image : '/assets/img/pages/default-games-page.jpg'\"\n            [alt]=\"room.name\"\n          >\n          </ion-img>\n          <ion-badge color=\"primary\" *ngIf=\"room?.unread\">&nbsp;</ion-badge>\n        </ion-thumbnail>\n        <ion-label>\n          <h2 class=\"room-name\" [ngClass]=\"room?.unread ? 'unread' : ''\">\n            {{ room?.name }}\n          </h2>\n          <p class=\"room-description\">{{room?.description}}</p>\n        </ion-label>\n      </ion-item>\n    </div>\n    <ion-item button lines=\"none\" class=\"show-more\" (click)=\"showAllRooms()\">\n      <ion-label>Ver las {{rooms?.length}} salas</ion-label>\n    </ion-item>\n  </section>\n\n  <ion-item\n    lines=\"none\"\n    (click)=\"showPages()\"\n    button\n    detail=\"false\"\n    *ngIf=\"pages\"\n  >\n    <ion-label color=\"light\">\n      <h2 class=\"section\">\n        <ion-text color=\"ligth\"> Páginas </ion-text>\n      </h2>\n      <p class=\"subtitle\">\n        <ion-text color=\"ligth\">\n          Habla y comparte tus aficiones con todo el mundo\n        </ion-text>\n      </p>\n    </ion-label>\n    <ion-icon\n      md=\"arrow-forward\"\n      ios=\"chevron-forward\"\n      slot=\"end\"\n      color=\"light\"\n    ></ion-icon>\n  </ion-item>\n  <section id=\"pages\">\n    <ion-slides [options]=\"pagesOpts\" mode=\"md\">\n      <ion-slide *ngFor=\"let page of pages\">\n        <div>\n          <ion-item button lines=\"none\" (click)=\"showPage(page.slug)\">\n            <ion-thumbnail>\n              <img [src]=\"page.cover\" [alt]=\"page.name\" />\n            </ion-thumbnail>\n          </ion-item>\n          <ion-label>{{page.name}}</ion-label>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </section>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_community_community_module_ts.js.map