"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_events_event_event_module_ts"],{

/***/ 37196:
/*!******************************************************!*\
  !*** ./src/app/events/event/event-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventPageRoutingModule": () => (/* binding */ EventPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.page */ 50679);




const routes = [
    {
        path: '',
        component: _event_page__WEBPACK_IMPORTED_MODULE_0__.EventPage
    }
];
let EventPageRoutingModule = class EventPageRoutingModule {
};
EventPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventPageRoutingModule);



/***/ }),

/***/ 59097:
/*!**********************************************!*\
  !*** ./src/app/events/event/event.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventPageModule": () => (/* binding */ EventPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _event_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-routing.module */ 37196);
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.page */ 50679);








let EventPageModule = class EventPageModule {
};
EventPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _event_routing_module__WEBPACK_IMPORTED_MODULE_1__.EventPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_event_page__WEBPACK_IMPORTED_MODULE_2__.EventPage]
    })
], EventPageModule);



/***/ }),

/***/ 50679:
/*!********************************************!*\
  !*** ./src/app/events/event/event.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventPage": () => (/* binding */ EventPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.page.html?ngResource */ 66435);
/* harmony import */ var _event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.page.scss?ngResource */ 16851);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/url.service */ 90925);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/utils.service */ 88270);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/navigation.service */ 89565);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/event.service */ 19426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _event_modal_event_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-modal/event.modal */ 55713);
/* harmony import */ var cupertino_pane__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cupertino-pane */ 25990);














let EventPage = class EventPage {
    constructor(route, router, eventSvc, nav, sanitizer, utils, auth, urlSvc, modal, toast) {
        this.route = route;
        this.router = router;
        this.eventSvc = eventSvc;
        this.nav = nav;
        this.sanitizer = sanitizer;
        this.utils = utils;
        this.auth = auth;
        this.urlSvc = urlSvc;
        this.modal = modal;
        this.toast = toast;
        this.mapSrc = "";
        this.participant = false;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const param = this.route.snapshot.paramMap.get("id");
            this.getEvent(+param);
        });
    }
    getEvent(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let event = null;
            if (this.auth.currentUserValue) {
                event = yield this.eventSvc.getEvent(id);
            }
            else {
                event = yield this.eventSvc.getPublicEvent(id);
            }
            if (new Date(event.date) < new Date()) {
                event.past = true;
            }
            this.event = event;
            if (this.event.type === "offline") {
                this.setMap();
            }
            this.participant = this.event.participants.some(p => p.id === this.auth.currentUserValue.id);
        });
    }
    setMap() {
        if (this.event.country && this.event.city && this.event.address) {
            const query = `${this.event.country} ${this.event.city} ${this.event.address} ${this.event.postal_code}`;
            const search = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBdyInAg-2KUZtQFnrQ5ra7wjf2S4q4GTQ&q=" +
                query.replace(/\s|,/g, "+");
            this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(search);
        }
    }
    participate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.event = yield this.eventSvc.participateEvent(this.event.id);
                this.participant = true;
            }
            catch (e) {
                (yield this.toast.create({
                    message: this.auth.currentUserValue
                        ? e
                        : "Tienes que iniciar sesión o registrarte para apuntarte al evento",
                    duration: 2000,
                    position: "bottom",
                    color: "danger"
                })).present();
            }
        });
    }
    unparticipate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.event = yield this.eventSvc.unparticipateEvent(this.event.id);
                this.participant = false;
            }
            catch (e) {
                (yield this.toast.create({
                    message: e,
                    duration: 2000,
                    position: "bottom",
                    color: "danger"
                })).present();
            }
        });
    }
    showRoom() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let slug = "event-" + this.event.id;
            if (this.auth.currentUserValue) {
                this.router.navigate(["/room", slug]);
            }
            else {
                this.nav.navigateRoot(["/login"], {
                    queryParams: { returnUrl: this.router.url }
                });
            }
        });
    }
    showPage(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/page", slug]);
        });
    }
    showParticipants() {
        this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_8__.CupertinoPane(".participants-pane", this.paneSettings);
        this.pane.present({ animate: true });
    }
    showProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (id !== 1) {
                this.router.navigate(["/profile", id]);
            }
        });
    }
    share() {
        const url = `https://frikiradar.app/event/${this.event.id}`;
        this.utils.share(url, "¡Ey, echa un vistazo a este evento en FrikiRadar! " + this.event.title);
    }
    openUrl(event) {
        this.urlSvc.openUrl(event);
        return false;
    }
    cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.event = yield this.eventSvc.cancelEvent(this.event.id);
        });
    }
    remove() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.eventSvc.deleteEvent(this.event);
                this.back();
            }
            catch (e) {
                (yield this.toast.create({
                    message: "Error al eliminar el evento",
                    duration: 2000,
                    position: "bottom",
                    color: "danger"
                })).present();
            }
        });
    }
    edit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _event_modal_event_modal__WEBPACK_IMPORTED_MODULE_7__.EventModal,
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal",
                componentProps: { event: this.event, user: (_a = this.event) === null || _a === void 0 ? void 0 : _a.user }
            });
            yield modal.present();
            yield modal.onDidDismiss();
            this.getEvent(this.event.id);
        });
    }
    back() {
        this.nav.back();
    }
};
EventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_6__.EventService },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController }
];
EventPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-event",
        template: _event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router,
        _services_event_service__WEBPACK_IMPORTED_MODULE_6__.EventService,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _services_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController])
], EventPage);



/***/ }),

/***/ 16851:
/*!*********************************************************!*\
  !*** ./src/app/events/event/event.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  position: absolute;\n  --background: transparent;\n}\nion-toolbar ion-button {\n  background: var(--ion-color-medium-dark);\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n}\nion-toolbar ion-title {\n  color: white;\n  text-shadow: 1px 1px 1px black;\n}\n#artwork {\n  height: 230px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.description ion-label {\n  white-space: pre-wrap;\n}\n.cancelled {\n  background: var(--ion-color-danger);\n}\n.room {\n  margin: 10px;\n  background: var(--ion-color-medium-dark);\n  border-radius: 25px;\n}\n.room ion-thumbnail {\n  --border-radius: 8px;\n  margin-right: 10px;\n}\n.room .room-description {\n  white-space: normal;\n  white-space: initial;\n  color: #acacac;\n}\n.room ion-badge {\n  position: relative;\n  left: 45px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  bottom: 12px;\n  border: 2px solid #1f1f1f;\n}\niframe {\n  border-radius: 32px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\nion-footer {\n  background: var(--ion-color-dark);\n}\nion-footer ion-col {\n  text-align: center;\n}\nion-footer ion-col ion-label {\n  display: block;\n  font-size: 12px;\n}\n.participants-pane {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtBQUFKO0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFERjtBQUlBO0VBQ0UscUJBQUE7QUFERjtBQUlBO0VBQ0UsbUNBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUFBLG9CQUFBO0VBQ0EsY0FBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUhKO0FBT0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsaUNBQUE7QUFKRjtBQUtFO0VBQ0Usa0JBQUE7QUFISjtBQUtJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFITjtBQVFBO0VBQ0UsYUFBQTtBQUxGIiwiZmlsZSI6ImV2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyayk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XG4gIH1cbn1cblxuI2FydHdvcmsge1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5jYW5jZWxsZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLnJvb20ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyayk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLnJvb20tZGVzY3JpcHRpb24ge1xuICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgIGNvbG9yOiByZ2IoMTcyLCAxNzIsIDE3Mik7XG4gIH1cblxuICBpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAxMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZjFmMWY7XG4gIH1cbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgaW9uLWNvbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG4ucGFydGljaXBhbnRzLXBhbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 66435:
/*!*********************************************************!*\
  !*** ./src/app/events/event/event.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\" *ngIf=\"event\">\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{event?.title}}</ion-title>\n      <ion-buttons\n        slot=\"end\"\n        *ngIf=\"auth.currentUserValue && auth.currentUserValue?.id === event?.creator?.id || auth.isAdmin()\"\n      >\n        <ion-button (click)=\"edit()\">\n          <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-img id=\"artwork\" [src]=\"event?.image\" [alt]=\"event?.title\"></ion-img>\n  <ion-item\n    *ngIf=\"event?.status === 'cancelled'\"\n    lines=\"none\"\n    class=\"cancelled\"\n  >\n    <ion-icon name=\"timer-outline\" slot=\"start\"></ion-icon>\n    <ion-label>Evento cancelado</ion-label>\n  </ion-item>\n  <ion-item\n    lines=\"none\"\n    *ngIf=\"!event.user && event?.participants\"\n    button\n    (click)=\"showParticipants()\"\n  >\n    <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n    <ion-label class=\"ion-text-wrap\"\n      >{{event?.participants?.length}} personas han confirmado\n      asistencia</ion-label\n    >\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-icon\n      [name]=\"event?.past ? 'timer-outline' : 'calendar'\"\n      slot=\"start\"\n    ></ion-icon>\n    <ion-label class=\"ion-text-wrap\"\n      >{{(event?.date) | date:'E d MMM y, HH:mm'}} {{event?.date_end ? ' - ' +\n      (event?.date_end | date:'E d MMM y, HH:mm') : ''}} {{event?.past ? '\n      (Evento pasado)' : ''}}</ion-label\n    >\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\"></ion-icon>\n    <ion-label>{{event?.title}}</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" class=\"description\" *ngIf=\"event?.description\">\n    <ion-icon name=\"document-text\" slot=\"start\"></ion-icon>\n    <ion-label\n      [innerHTML]=\"\n            event?.description | linky: { className: 'linkified' } | mentions | hashtag\n          \"\n      (click)=\"$event.stopImmediatePropagation(); openUrl($event)\"\n    ></ion-label>\n  </ion-item>\n  <ion-item-group *ngIf=\"event?.type === 'offline'\">\n    <ion-item lines=\"none\">\n      <ion-icon name=\"earth\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\"\n        >{{event?.city}}, {{event?.postal_code}} {{event?.country}}</ion-label\n      >\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"location-sharp\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">{{event?.address}}</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"event.contact_phone\">\n      <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Teléfono de contacto</h2>\n        <p\n          [innerHTML]=\"event?.contact_phone | linky: { className: 'linkified' } \"\n        ></p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" *ngIf=\"event.contact_email\">\n      <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>Email de contacto</h2>\n        <p\n          [innerHTML]=\"event?.contact_email | linky: { className: 'linkified' } \"\n        ></p>\n      </ion-label>\n    </ion-item>\n  </ion-item-group>\n  <ion-item lines=\"none\" *ngIf=\"event.url\">\n    <ion-icon name=\"link\" slot=\"start\"></ion-icon>\n    <ion-label>\n      <h2 *ngIf=\"event.type === 'offline'\">\n        Más información o compra de entradas\n      </h2>\n      <h2 *ngIf=\"event.type === 'online'\">Enlace de acceso al evento</h2>\n      <p\n        (click)=\"$event.stopImmediatePropagation(); openUrl($event)\"\n        [innerHTML]=\"event?.url | linky: { className: 'linkified' } \"\n      ></p>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"none\" *ngIf=\"event.price\">\n    <ion-icon name=\"price-tag\" slot=\"start\"></ion-icon>\n    <ion-label>\n      <h2>Precio en moneda local</h2>\n      <p>{{event?.price}}</p>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <iframe\n      *ngIf=\"mapSrc\"\n      width=\"100%\"\n      height=\"300\"\n      style=\"border: 0\"\n      loading=\"lazy\"\n      allowfullscreen\n      [src]=\"mapSrc\"\n    ></iframe>\n  </ion-item>\n  <ion-item-group *ngIf=\"!event?.user\">\n    <ion-item lines=\"none\">\n      <ion-label>Información adicional relacionada</ion-label>\n    </ion-item>\n    <ion-item class=\"room\" button lines=\"none\" (click)=\"showRoom()\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"/assets/img/layout/room.png\" alt=\"sala de chat\"></ion-img>\n        <ion-badge color=\"primary\" *ngIf=\"event?.room?.unread\"\n          >&nbsp;</ion-badge\n        >\n      </ion-thumbnail>\n      <ion-label>\n        <h2 class=\"room-name\">Sala de chat</h2>\n        <p class=\"room-description\">\n          Entra y habla con la comunidad de FrikiRadar sobre este evento\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item\n      class=\"room\"\n      button\n      lines=\"none\"\n      (click)=\"showPage(event?.slug)\"\n      *ngIf=\"event?.page\"\n    >\n      <ion-thumbnail>\n        <ion-img [src]=\"event?.page?.cover\" alt=\"página\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2 class=\"room-name\">{{event?.page?.name}}</h2>\n        <p class=\"room-description\">Página relacionada con el evento</p>\n      </ion-label>\n    </ion-item>\n    <ion-item class=\"room\" lines=\"none\" *ngIf=\"event?.creator\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"event?.creator?.thumbnail\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>Evento organizado por {{event?.creator?.name}}</h2>\n        <p\n          *ngIf=\"!event?.creator?.roles.includes('ROLE_DEMO')\"\n          [innerHTML]=\"'@' + event?.creator?.username | mentions\"\n          (click)=\"$event.stopImmediatePropagation(); openUrl($event)\"\n        ></p>\n      </ion-label>\n    </ion-item>\n  </ion-item-group>\n  <ion-item\n    *ngIf=\"auth.currentUserValue && auth.currentUserValue?.id === event?.creator?.id\"\n    lines=\"none\"\n  >\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          class=\"ion-align-items-center\"\n          *ngIf=\"event?.status === 'active'\"\n        >\n          <ion-button expand=\"full\" fill=\"clear\" (click)=\"cancel()\"\n            >{{event?.user ? 'Cancelar cita': 'Cancelar evento'}}</ion-button\n          >\n        </ion-col>\n        <ion-col class=\"ion-align-items-center\">\n          <ion-button expand=\"full\" fill=\"clear\" (click)=\"remove()\"\n            >{{event?.user ? 'Eliminar cita': 'Eliminar evento'}}</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n\n<ion-footer *ngIf=\"event && !event?.user\">\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          class=\"ion-align-items-center\"\n          (click)=\"participate()\"\n          *ngIf=\"!event?.past && event?.status !== 'cancelled' && !participant\"\n        >\n          <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"calendar-outline\"></ion-icon>\n          </ion-button>\n          <ion-label>Quiero asistir</ion-label>\n        </ion-col>\n        <ion-col\n          class=\"ion-align-items-center\"\n          (click)=\"unparticipate()\"\n          *ngIf=\"!event?.past && event?.status !== 'cancelled' && participant\"\n        >\n          <ion-button>\n            <ion-icon\n              slot=\"icon-only\"\n              name=\"checkmark-circle-outline\"\n              color=\"success\"\n            ></ion-icon>\n          </ion-button>\n          <ion-label color=\"success\">Asistiré</ion-label>\n        </ion-col>\n        <ion-col\n          class=\"ion-align-items-center\"\n          *ngIf=\"event?.past && event?.status !== 'cancelled'\"\n        >\n          <ion-button disabled>\n            <ion-icon slot=\"icon-only\" name=\"timer-outline\"></ion-icon>\n          </ion-button>\n          <ion-label color=\"medium\">Evento pasado</ion-label>\n        </ion-col>\n        <ion-col\n          class=\"ion-align-items-center\"\n          *ngIf=\"event?.status === 'cancelled'\"\n        >\n          <ion-button disabled>\n            <ion-icon slot=\"icon-only\" name=\"timer-outline\"></ion-icon>\n          </ion-button>\n          <ion-label color=\"medium\">Evento cancelado</ion-label>\n        </ion-col>\n        <ion-col class=\"ion-align-items-center\" (click)=\"showRoom()\">\n          <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"chatbubbles-outline\"></ion-icon>\n          </ion-button>\n          <ion-label>Chat del evento</ion-label>\n        </ion-col>\n        <ion-col class=\"ion-align-items-center\" (click)=\"share()\">\n          <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"share-social\"></ion-icon>\n          </ion-button>\n          <ion-label>Compartir</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n\n<!-- panes -->\n\n<div class=\"participants-pane\">\n  <p>Asistentes</p>\n  <ion-list *ngIf=\"event?.participants?.length > 0\">\n    <ion-item\n      *ngFor=\"let participant of event?.participants\"\n      button\n      detail=\"false\"\n      (click)=\"showProfile(participant.id)\"\n    >\n      <ion-avatar slot=\"start\">\n        <img [src]=\"participant?.thumbnail\" />\n      </ion-avatar>\n      <ion-label>{{participant?.username}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-item *ngIf=\"event?.participants?.length == 0\">\n    <p>No hay asistentes</p>\n  </ion-item>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_events_event_event_module_ts.js.map