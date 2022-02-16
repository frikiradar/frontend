"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.router.module */ 34974);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 94710);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/user.service */ 73071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var cupertino_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cupertino-pane */ 25990);
/* harmony import */ var _credits_credits_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../credits/credits.modal */ 78137);
/* harmony import */ var _rules_rules_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rules/rules.page */ 45921);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/notification.service */ 12013);












let TabsPage = class TabsPage {
    constructor(notificationSvc, detectorRef, auth, router, platform, modal, userSvc) {
        this.notificationSvc = notificationSvc;
        this.detectorRef = detectorRef;
        this.auth = auth;
        this.router = router;
        this.platform = platform;
        this.modal = modal;
        this.userSvc = userSvc;
        this.paneSettings = {
            backdrop: true,
            bottomClose: true,
            buttonDestroy: false,
            handleKeyboard: false,
            breaks: {
                middle: { enabled: true, height: 600, bounce: true }
            },
            initialBreak: "middle",
            onBackdropTap: () => {
                this.pane.destroy({ animate: true });
            }
        };
        this.router.events.subscribe((event) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            event.url = event.url === "/" ? "/tabs/radar" : event.url;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd && event.url.includes("/tabs/")) {
                this.selected = event.url.split("/")[2];
            }
        }));
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.notificationSvc.notification.subscribe(notification => {
                this.counters = notification;
                if (!this.detectorRef["destroyed"]) {
                    this.detectorRef.detectChanges();
                }
            });
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.counters =
                (yield this.notificationSvc.getUnread());
            this.notificationSvc.setNotification(this.counters);
        });
    }
    openChat() {
        this.router.navigate(["/chat"]);
    }
    menu() {
        this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_3__.CupertinoPane(".menu-pane", this.paneSettings);
        this.pane.present({ animate: true });
    }
    viewProfile() {
        this.router.navigate(["/profile"]);
        this.paneClose();
    }
    settings() {
        this.router.navigate(["/settings"]);
        this.paneClose();
    }
    admin() {
        this.router.navigate(["/admin"]);
        this.paneClose();
    }
    showAmbassador() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/ambassador"]);
            this.paneClose();
        });
    }
    credits() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _credits_credits_modal__WEBPACK_IMPORTED_MODULE_4__.CreditsModal,
                cssClass: "full-modal"
            });
            return yield modal.present();
        });
    }
    rules() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _rules_rules_page__WEBPACK_IMPORTED_MODULE_5__.RulesPage,
                cssClass: "full-modal"
            });
            return yield modal.present();
        });
    }
    bugs() {
        this.router.navigate(["/room/frikiradar-bugs"]);
        this.paneClose();
    }
    logout() {
        this.auth.logout();
        this.paneClose();
    }
    paneClose() {
        this.pane.destroy({ animate: true });
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-tabs",
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService,
        _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService])
], TabsPage);



/***/ }),

/***/ 34974:
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: "tabs",
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: "radar",
                children: [
                    {
                        path: "",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_deep-equal_index_js"), __webpack_require__.e("src_app_radar_radar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../radar/radar.module */ 81914)).then(m => m.RadarPageModule)
                    }
                ]
            },
            {
                path: "events",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_events_events_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../events/events.module */ 12734)).then(m => m.EventsPageModule)
                    }
                ]
            },
            {
                path: "community",
                children: [
                    {
                        path: "",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_deep-equal_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_community_community_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../community/community.module */ 74518)).then(m => m.CommunityPageModule)
                    },
                    {
                        path: "story/:id",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_deep-equal_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_community_community_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../community/community.module */ 74518)).then(m => m.CommunityPageModule)
                    }
                ]
            },
            {
                path: "",
                redirectTo: "/tabs/radar",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "",
        redirectTo: "/tabs/radar",
        pathMatch: "full"
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 94710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar {\n  background-color: var(--ion-color-dark);\n}\nion-tab-bar ion-tab-button {\n  color: white;\n  height: 80%;\n  margin-left: 5px;\n  margin-right: 5px;\n}\nion-tab-bar ion-tab-button.tab-selected {\n  color: #e91e63;\n  background: var(--ion-color-medium-dark);\n  border-radius: 20px;\n}\nion-tab-bar ion-avatar {\n  display: inline;\n  display: initial;\n  bottom: -6px;\n  position: relative;\n}\nion-tab-bar ion-avatar img {\n  width: 32px;\n  height: 32px;\n}\n.menu-pane {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBQ047QUFHRTtFQUNFLGVBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUROO0FBTUE7RUFDRSxhQUFBO0FBSEYiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cbiAgICAmLnRhYi1zZWxlY3RlZCB7XG4gICAgICBjb2xvcjogI2U5MWU2MztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyayk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1hdmF0YXIge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgYm90dG9tOiAtNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG4gIH1cbn1cblxuLm1lbnUtcGFuZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 65230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"radar\" *ngIf=\"auth.isAdult()\">\n      <ion-icon\n        [color]=\"selected === 'radar' ? 'primary' : 'light'\"\n        [name]=\"selected === 'radar' ? 'location-sharp' : 'location-outline'\"\n      ></ion-icon>\n      <ion-badge color=\"primary\" *ngIf=\"counters?.radar > 0\"\n        >{{ counters.radar }}</ion-badge\n      >\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"community\">\n      <ion-icon\n        [color]=\"selected === 'community' ? 'primary' : 'light'\"\n        [name]=\"'people' + (selected === 'community' ? '' : '-outline')\"\n      ></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"events\">\n      <ion-icon\n        [color]=\"selected === 'events' ? 'primary' : 'light'\"\n        [name]=\"'calendar' + (selected === 'events' ? '' : '-outline')\"\n      ></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"openChat()\">\n      <ion-icon\n        [color]=\"selected === 'chat' ? 'primary' : 'light'\"\n        [name]=\"'chatbubbles' + (selected === 'chat' ? '' : '-outline')\"\n      ></ion-icon>\n      <ion-badge color=\"primary\" *ngIf=\"counters?.chats > 0\"\n        >{{ counters.chats }}</ion-badge\n      >\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"menu()\">\n      <ion-avatar>\n        <img\n          [src]=\"auth.currentUserValue?.thumbnail\"\n          [alt]=\"auth.currentUserValue?.username\"\n          default=\"/assets/img/users/default.jpg\"\n        />\n      </ion-avatar>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n<!-- panes -->\n<div class=\"menu-pane\">\n  <ion-item id=\"info\" button (click)=\"viewProfile()\">\n    <ion-avatar slot=\"start\">\n      <img\n        [src]=\"auth.currentUserValue?.thumbnail\"\n        [alt]=\"auth.currentUserValue?.username\"\n        default=\"/assets/img/users/default.jpg\"\n      />\n    </ion-avatar>\n    <ion-label>\n      <h2>\n        {{ auth.currentUserValue?.name }}\n        <span>\n          <ion-icon\n            size=\"15px\"\n            *ngIf=\"userSvc.getRoleIcon()\"\n            [name]=\"userSvc.getRoleIcon()\"\n            ç\n            [src]=\"userSvc.getRoleIcon()\"\n            slot=\"icon-only\"\n            [color]=\"userSvc.getRoleColor()\"\n          ></ion-icon>\n        </span>\n      </h2>\n      <p>@{{ auth.currentUserValue?.username }}</p>\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-item\n      button\n      lines=\"none\"\n      (click)=\"viewProfile()\"\n      [ngClass]=\"selected?.includes('profile') ? 'selected' : ''\"\n      color=\"dark\"\n    >\n      <ion-icon\n        name=\"person-circle-outline\"\n        slot=\"start\"\n        color=\"light\"\n      ></ion-icon>\n      <ion-label color=\"light\"> Mi perfil </ion-label>\n    </ion-item>\n    <ion-item\n      color=\"dark\"\n      button\n      (click)=\"settings()\"\n      [ngClass]=\"selected == '/settings' ? 'selected' : ''\"\n    >\n      <ion-icon color=\"light\" name=\"settings-outline\" slot=\"start\"></ion-icon>\n      <ion-label color=\"light\"> Configuración y privacidad </ion-label>\n    </ion-item>\n    <ion-item\n      color=\"dark\"\n      button\n      (click)=\"showAmbassador()\"\n      *ngIf=\"!platform.is('ios')\"\n      [ngClass]=\"selected == '/ambassador' ? 'selected' : ''\"\n    >\n      <ion-icon src=\"/assets/icon/patreon_coral.svg\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2><ion-text color=\"patreon\">Patreon de embajador</ion-text></h2>\n        <p>Ayúdanos y consigue ventajas exclusivas</p>\n      </ion-label>\n    </ion-item>\n    <ion-item color=\"dark\" button lines=\"none\" (click)=\"credits()\">\n      <ion-icon color=\"light\" name=\"rocket-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Créditos</h2>\n        <p>Las personas que hacemos posible FrikiRadar</p>\n      </ion-label>\n    </ion-item>\n    <ion-item\n      color=\"dark\"\n      button\n      (click)=\"rules()\"\n      [ngClass]=\"selected?.includes('rules') ? 'selected' : ''\"\n    >\n      <ion-icon name=\"receipt-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Normas de la comunidad</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item\n      color=\"dark\"\n      button\n      lines=\"full\"\n      (click)=\"bugs()\"\n      [ngClass]=\"selected?.includes('frikiradar-bugs') ? 'selected' : ''\"\n    >\n      <ion-icon name=\"bug-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Reporte de errores</h2>\n        <p>Si encuentras cualquier problema escríbenos por aquí</p>\n      </ion-label>\n    </ion-item>\n    <ion-item\n      color=\"dark\"\n      button\n      lines=\"full\"\n      (click)=\"admin()\"\n      *ngIf=\"auth.isMaster()\"\n      [ngClass]=\"selected == '/admin' ? 'selected' : ''\"\n    >\n      <ion-icon name=\"bonfire-outline\" color=\"danger\" slot=\"start\"></ion-icon>\n      <ion-label color=\"danger\">Administración</ion-label>\n    </ion-item>\n    <ion-item button lines=\"none\" (click)=\"logout()\">\n      <ion-icon name=\"log-out-outline\" color=\"danger\" slot=\"start\"></ion-icon>\n      <ion-label color=\"danger\">Cerrar sesión</ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map