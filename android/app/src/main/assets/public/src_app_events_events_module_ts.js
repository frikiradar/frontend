"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_events_events_module_ts"],{

/***/ 39187:
/*!*************************************************!*\
  !*** ./src/app/events/events-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageRoutingModule": () => (/* binding */ EventsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.page */ 42215);




const routes = [
    {
        path: "",
        component: _events_page__WEBPACK_IMPORTED_MODULE_0__.EventsPage
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], EventsPageRoutingModule);



/***/ }),

/***/ 12734:
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPageModule": () => (/* binding */ EventsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events-routing.module */ 39187);
/* harmony import */ var _events_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page */ 42215);







let EventsPageModule = class EventsPageModule {
};
EventsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _events_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventsPageRoutingModule
        ],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_1__.EventsPage]
    })
], EventsPageModule);



/***/ }),

/***/ 42215:
/*!***************************************!*\
  !*** ./src/app/events/events.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsPage": () => (/* binding */ EventsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _events_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.page.html?ngResource */ 98845);
/* harmony import */ var _events_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.page.scss?ngResource */ 3218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var cupertino_pane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cupertino-pane */ 25990);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event.service */ 19426);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utils.service */ 88270);
/* harmony import */ var _event_modal_event_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-modal/event.modal */ 55713);













let EventsPage = class EventsPage {
    constructor(auth, modal, eventSvc, router, utils, userSvc, nav) {
        this.auth = auth;
        this.modal = modal;
        this.eventSvc = eventSvc;
        this.router = router;
        this.utils = utils;
        this.userSvc = userSvc;
        this.nav = nav;
        this.type = "suggested";
        this.loading = true;
        this.my = false;
        this.paneSettings = {
            backdrop: true,
            bottomClose: true,
            buttonDestroy: false,
            handleKeyboard: false,
            breaks: {
                middle: { enabled: true, height: 500, bounce: true },
                bottom: { enabled: true, height: 300, bounce: true }
            },
            initialBreak: "bottom",
            onBackdropTap: () => {
                this.pane.destroy({ animate: true });
            },
            onDidDismiss: () => {
                // Guardamos cambios
                this.userSvc.updateUser(this.user);
            }
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.changeTab("suggested");
            this.user = this.auth.currentUserValue;
            // console.log(events);
        });
    }
    newEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _event_modal_event_modal__WEBPACK_IMPORTED_MODULE_8__.EventModal,
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal"
            });
            yield modal.present();
            yield modal.onDidDismiss();
            this.changeTab("suggested");
        });
    }
    showEvent(event) {
        this.nav.navigateRoot("/event/" + event.id);
    }
    myEvents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            const events = yield this.eventSvc.getMyEvents();
            const now = new Date();
            events.map(e => {
                if (new Date(e.date) < now) {
                    e.past = true;
                }
            });
            events.sort((a, b) => {
                if (a.past || b.past) {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                }
                else {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                }
            });
            this.setEvents(events);
            this.my = true;
            this.loading = false;
        });
    }
    back() {
        this.my = false;
        this.changeTab("suggested");
    }
    showOptions() {
        this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_2__.CupertinoPane(".events-pane", this.paneSettings);
        this.pane.present({ animate: true });
    }
    changeTab(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.type = type;
            this.events = undefined;
            this.loading = true;
            let events = null;
            switch (type) {
                case "suggested":
                    events = yield this.eventSvc.getSuggestedEvents();
                    break;
                case "online":
                    events = yield this.eventSvc.getOnlineEvents();
                    break;
                case "near":
                    events = yield this.eventSvc.getNearEvents();
                    break;
            }
            this.setEvents(events);
            this.loading = false;
        });
    }
    changePreferences(property, value) {
        if (property === "country") {
            this.user.country = value;
        }
        if (property === "city") {
            this.user.city = value;
        }
    }
    setEvents(events) {
        events.map(e => {
            if (e.participants.some(p => p.id === this.auth.currentUserValue.id)) {
                e.participate = true;
            }
        });
        this.events = events;
    }
};
EventsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService }
];
EventsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-events",
        template: _events_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_events_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController,
        _services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService,
        _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService])
], EventsPage);



/***/ }),

/***/ 3218:
/*!****************************************************!*\
  !*** ./src/app/events/events.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  border-radius: 20px;\n  --color: var(--ion-color-light) !important;\n  --background: var(--ion-color-medium-dark) !important;\n}\nion-card ion-img {\n  height: 220px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\nion-card ion-card-title {\n  --color: var(--ion-color-light) !important;\n}\n.events-pane {\n  display: none;\n}\n.center {\n  display: table;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EscURBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBQ0o7QUFFRTtFQUNFLDBDQUFBO0FBQUo7QUFJQTtFQUNFLGFBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJldmVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1kYXJrKSAhaW1wb3J0YW50O1xuXG4gIGlvbi1pbWcge1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5ldmVudHMtcGFuZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiJdfQ== */";

/***/ }),

/***/ 98845:
/*!****************************************************!*\
  !*** ./src/app/events/events.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Eventos (beta)</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showOptions()\">\n        <ion-icon slot=\"icon-only\" name=\"location-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item lines=\"none\">\n    <ion-button (click)=\"back()\" *ngIf=\"my === true\" shape=\"round\" fill=\"clear\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-chip\n      color=\"secondary\"\n      (click)=\"newEvent()\"\n      button\n      *ngIf=\"my === false\"\n    >\n      <ion-icon name=\"add-circle\"></ion-icon>\n      <ion-label>Crear evento</ion-label>\n    </ion-chip>\n    <ion-chip color=\"secondary\" (click)=\"myEvents()\" button [disabled]=\"my\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Mis eventos y citas</ion-label>\n    </ion-chip>\n  </ion-item>\n\n  <ion-segment\n    [value]=\"type\"\n    (ionChange)=\"changeTab($event.detail.value)\"\n    *ngIf=\"my === false\"\n  >\n    <ion-segment-button value=\"suggested\">\n      <ion-label color=\"light\">Eventos sugeridos</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"online\">\n      <ion-label color=\"light\">Online destacados</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"near\">\n      <ion-label color=\"light\">Cerca de ti</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-item *ngIf=\"my === true\">\n    <ion-label color=\"light\" class=\"ion-text-wrap\"\n      >Aquí se muestran los eventos que has creado y a los que quieres\n      asistir.</ion-label\n    >\n  </ion-item>\n  <ion-grid *ngIf=\"events?.length > 0 && !loading\">\n    <ion-row>\n      <ion-col\n        sizeXs=\"12\"\n        sizeSm=\"6\"\n        sizeLg=\"6\"\n        sizeXl=\"4\"\n        sizeMd=\"4\"\n        *ngFor=\"let event of events; let i = index\"\n      >\n        <ion-card button (click)=\"showEvent(event)\">\n          <ion-img [src]=\"event?.image\" [alt]=\"event?.title\"></ion-img>\n          <ion-card-header>\n            <ion-card-subtitle\n              >{{(event?.date) | date:'E d MMM y, HH:mm'}} {{event?.date_end ? '\n              - ' + (event?.date_end | date:'E d MMM y, HH:mm') :\n              ''}}</ion-card-subtitle\n            >\n            <ion-card-title>{{event?.title}}</ion-card-title>\n            <ion-text>\n              {{event?.type === 'online' ? 'Online' : event?.address + ', ' +\n              event?.country}}\n            </ion-text>\n          </ion-card-header>\n          <ion-card-content>\n            <p>{{event?.participants?.length}} personas apuntadas</p>\n            <ion-button\n              shape=\"round\"\n              expand=\"full\"\n              *ngIf=\"!event?.past && !event?.participate\"\n            >\n              <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n              Quiero asistir\n            </ion-button>\n            <ion-button\n              shape=\"round\"\n              expand=\"full\"\n              *ngIf=\"!event?.past && event?.participate && event.status == 'active'\"\n            >\n              <ion-icon name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>\n              Asistiré\n            </ion-button>\n            <ion-button\n              shape=\"round\"\n              expand=\"full\"\n              disabled\n              *ngIf=\"!event?.past && event?.participate && event.status == 'cancelled'\"\n            >\n              <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n              Evento cancelado\n            </ion-button>\n            <ion-button\n              shape=\"round\"\n              expand=\"full\"\n              *ngIf=\"event?.past\"\n              disabled\n            >\n              <ion-icon name=\"timer-outline\" slot=\"start\"></ion-icon>\n              Evento pasado\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"full-center ion-padding\" *ngIf=\"!events?.length && !loading\">\n    <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n    <h2>Sin resultados</h2>\n    <div *ngIf=\"type === 'near'\">\n      <p>\n        Puedes ajustar tus opciones de eventos cercanos cambiando tu país y\n        municipio para recomendarte eventos en tu zona.\n      </p>\n      <ion-button shape=\"round\" (click)=\"showOptions()\"\n        >Mostrar opciones</ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n\n<!-- panes -->\n\n<div class=\"events-pane\">\n  <ion-item lines=\"full\">\n    <ion-label class=\"ion-text-center\">\n      <h2>Configuración de eventos cercanos</h2>\n      <p class=\"ion-text-wrap\">\n        Selecciona tu país y municipio para poder recomendarte eventos\n        presenciales en tu zona.\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\"earth\" slot=\"start\"></ion-icon>\n      <ion-label>Tu país</ion-label>\n      <ion-select\n        interface=\"action-sheet\"\n        cancel-text=\"Cancelar\"\n        placeholder=\"Selecciona uno\"\n        [value]=\"user?.country\"\n        debounce=\"2000\"\n        (ionChange)=\"changePreferences('country', $event.detail.value)\"\n      >\n        <ion-select-option\n          *ngFor=\"let country of utils.getCountries()\"\n          [value]=\"country\"\n          >{{ country }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Municipio</ion-label>\n      <ion-input\n        (ionChange)=\"changePreferences('city', $event.detail.value)\"\n        [value]=\"user?.city\"\n      ></ion-input>\n    </ion-item>\n  </ion-list>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_events_events_module_ts.js.map