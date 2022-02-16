"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notification_notification_module_ts"],{

/***/ 89753:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageRoutingModule": () => (/* binding */ NotificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page */ 13320);




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ 22154:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPageModule": () => (/* binding */ NotificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 89753);
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page */ 13320);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
    })
], NotificationPageModule);



/***/ }),

/***/ 13320:
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationPage": () => (/* binding */ NotificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.page.html?ngResource */ 25224);
/* harmony import */ var _notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.page.scss?ngResource */ 88521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var cupertino_pane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cupertino-pane */ 25990);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification.service */ 12013);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/url.service */ 90925);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/navigation.service */ 89565);








let NotificationPage = class NotificationPage {
    constructor(notificationSvc, url, nav) {
        this.notificationSvc = notificationSvc;
        this.url = url;
        this.nav = nav;
        this.notifications = undefined;
        this.paneSettings = {
            backdrop: true,
            bottomClose: true,
            buttonDestroy: false,
            handleKeyboard: false,
            initialBreak: "middle",
            onBackdropTap: () => {
                this.pane.destroy({ animate: true });
            }
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.notifications = yield this.notificationSvc.getNotifications();
        });
    }
    showNotification(notification) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.readNotification(notification);
            this.url.openUrl(notification.url);
        });
    }
    showOptions(event, notification) {
        event.stopPropagation();
        this.notification = notification;
        this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_2__.CupertinoPane(".notifications-pane", this.paneSettings);
        this.pane.present({ animate: true });
    }
    readNotification(notification) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                notification = yield this.notificationSvc.readNotification(notification.id);
                this.notifications.map(n => {
                    if (n.id === notification.id) {
                        n.time_read = notification.time_read;
                    }
                });
                this.pane.destroy({ animate: true });
                yield this.notificationSvc.getUnread();
            }
            catch (e) {
                console.error(`Error al marcar como leída`);
            }
        });
    }
    unreadNotification(notification) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                notification = yield this.notificationSvc.unreadNotification(notification.id);
                this.notifications.map(n => {
                    if (n.id === notification.id) {
                        n.time_read = notification.time_read;
                    }
                });
                this.pane.destroy({ animate: true });
                yield this.notificationSvc.getUnread();
            }
            catch (e) {
                console.error(`Error al desmarcar como leída`);
            }
        });
    }
    removeNotifications() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.notificationSvc.removeNotifications();
                this.notifications = [];
                yield this.notificationSvc.getUnread();
            }
            catch (e) {
                console.error(`Error al eliminar las notificaciones`);
            }
        });
    }
    removeNotification(notification) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.notificationSvc.removeNotification(notification.id);
                this.notifications = this.notifications.filter(n => n.id !== notification.id);
                this.pane.destroy({ animate: true });
                yield this.notificationSvc.getUnread();
            }
            catch (e) {
                console.error(`Error al eliminar la notificación`);
            }
        });
    }
    back() {
        this.nav.back();
    }
};
NotificationPage.ctorParameters = () => [
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService },
    { type: _services_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService }
];
NotificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-notification",
        template: _notification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService,
        _services_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService])
], NotificationPage);



/***/ }),

/***/ 88521:
/*!****************************************************************!*\
  !*** ./src/app/notification/notification.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-item.unread {\n  --background: var(--ion-color-dark-shade) !important;\n}\n\nion-label p {\n  white-space: normal;\n  white-space: initial;\n  color: #acacac;\n}\n\nion-label h2 {\n  white-space: normal;\n  white-space: initial;\n}\n\n.notifications-pane {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvREFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFBQSxvQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQUEsb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0udW5yZWFkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHAge1xuICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgY29sb3I6ICNhY2FjYWM7XG59XG5cbmlvbi1sYWJlbCBoMiB7XG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xufVxuXG4ubm90aWZpY2F0aW9ucy1wYW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 25224:
/*!****************************************************************!*\
  !*** ./src/app/notification/notification.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Notificaciones</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"removeNotifications()\" *ngIf=\"notifications?.length\">\n        <ion-icon\n          slot=\"icon-only\"\n          src=\"/assets/icon/delete_sweep_white_24dp.svg\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list *ngIf=\"!notifications\">\n    <ion-item *ngFor=\"let i of [].constructor(15)\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h2>\n          <ion-skeleton-text animated style=\"width: 50%;\"></ion-skeleton-text>\n        </h2>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%;\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <div *ngIf=\"notifications?.length || !notifications; else noNotifications\">\n    <ion-list>\n      <ion-item\n        button\n        *ngFor=\"let notification of notifications\"\n        (click)=\"showNotification(notification)\"\n        [ngClass]=\"!notification?.time_read ? 'unread' : ''\"\n      >\n        <ion-avatar slot=\"start\">\n          <img\n            [src]=\"notification.fromuser.thumbnail\"\n            default=\"/assets/img/users/default.jpg\"\n          />\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ notification.title }}</h2>\n          <p>{{notification.body}}</p>\n          <ion-note>{{notification.date | niceDate}}</ion-note>\n        </ion-label>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"showOptions($event, notification)\">\n            <ion-icon\n              slot=\"icon-only\"\n              color=\"primary\"\n              name=\"ellipsis-vertical\"\n            ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ng-template #noNotifications>\n    <div class=\"full-center ion-padding\">\n      <ion-icon name=\"notifications-off\"></ion-icon>\n      <h2>Sin notificaciones</h2>\n      <p>\n        No tienes ninguna notificación.\n      </p>\n    </div>\n  </ng-template>\n</ion-content>\n\n<!-- panes -->\n\n<div class=\"notifications-pane\">\n  <ion-item *ngIf=\"notification\" lines=\"full\">\n    <ion-avatar slot=\"start\">\n      <img\n        [src]=\"notification.fromuser.thumbnail\"\n        default=\"/assets/img/users/default.jpg\"\n      />\n    </ion-avatar>\n    <ion-label>\n      <h2>{{ notification.title }}</h2>\n      <p>{{notification.body}}</p>\n      <ion-note>{{notification.date | niceDate}}</ion-note>\n    </ion-label>\n  </ion-item>\n  <ion-list *ngIf=\"notification\">\n    <ion-item\n      button\n      detail=\"false\"\n      (click)=\"removeNotification(notification)\"\n      lines=\"none\"\n    >\n      <ion-icon slot=\"start\" name=\"close-outline\" color=\"light\"></ion-icon>\n      <ion-label>Eliminar la notificación</ion-label>\n    </ion-item>\n    <ion-item\n      button\n      detail=\"false\"\n      (click)=\"readNotification(notification)\"\n      lines=\"none\"\n      *ngIf=\"!notification?.time_read\"\n    >\n      <ion-icon slot=\"start\" name=\"mail-open-outline\" color=\"light\"></ion-icon>\n      <ion-label>Marcar como leída</ion-label>\n    </ion-item>\n    <ion-item\n      button\n      detail=\"false\"\n      (click)=\"unreadNotification(notification)\"\n      lines=\"none\"\n      *ngIf=\"notification?.time_read\"\n    >\n      <ion-icon\n        slot=\"start\"\n        name=\"mail-unread-outline\"\n        color=\"light\"\n      ></ion-icon>\n      <ion-label>Marcar como no leída</ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_notification_notification_module_ts.js.map