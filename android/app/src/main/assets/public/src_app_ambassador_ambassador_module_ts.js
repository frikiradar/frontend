"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ambassador_ambassador_module_ts"],{

/***/ 86414:
/*!*********************************************************!*\
  !*** ./src/app/ambassador/ambassador-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmbassadorPageRoutingModule": () => (/* binding */ AmbassadorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ambassador_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ambassador.page */ 65326);




const routes = [
    {
        path: '',
        component: _ambassador_page__WEBPACK_IMPORTED_MODULE_0__.AmbassadorPage
    }
];
let AmbassadorPageRoutingModule = class AmbassadorPageRoutingModule {
};
AmbassadorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AmbassadorPageRoutingModule);



/***/ }),

/***/ 63496:
/*!*************************************************!*\
  !*** ./src/app/ambassador/ambassador.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmbassadorPageModule": () => (/* binding */ AmbassadorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ambassador_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ambassador-routing.module */ 86414);
/* harmony import */ var _ambassador_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ambassador.page */ 65326);







let AmbassadorPageModule = class AmbassadorPageModule {
};
AmbassadorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ambassador_routing_module__WEBPACK_IMPORTED_MODULE_0__.AmbassadorPageRoutingModule
        ],
        declarations: [_ambassador_page__WEBPACK_IMPORTED_MODULE_1__.AmbassadorPage]
    })
], AmbassadorPageModule);



/***/ }),

/***/ 65326:
/*!***********************************************!*\
  !*** ./src/app/ambassador/ambassador.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmbassadorPage": () => (/* binding */ AmbassadorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ambassador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ambassador.page.html?ngResource */ 55275);
/* harmony import */ var _ambassador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ambassador.page.scss?ngResource */ 36481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/url.service */ 90925);







let AmbassadorPage = class AmbassadorPage {
    constructor(auth, urlSvc, nav) {
        this.auth = auth;
        this.urlSvc = urlSvc;
        this.nav = nav;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = this.auth.currentUserValue;
        });
    }
    goToPatreon() {
        const url = "https://patreon.com/frikiradar";
        this.urlSvc.openUrl(url);
    }
    close() {
        this.nav.back();
    }
};
AmbassadorPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService }
];
AmbassadorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "ambassador-modal",
        template: _ambassador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ambassador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _services_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService])
], AmbassadorPage);



/***/ }),

/***/ 36481:
/*!************************************************************!*\
  !*** ./src/app/ambassador/ambassador.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label {\n  --color: white !important;\n}\nion-item ion-icon {\n  color: white;\n}\nion-item ion-label p {\n  white-space: normal;\n  color: #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFtYmFzc2Fkb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBS0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFITiIsImZpbGUiOiJhbWJhc3NhZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgaW9uLWxhYmVsIHtcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgY29sb3I6ICNiYmI7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 55275:
/*!************************************************************!*\
  !*** ./src/app/ambassador/ambassador.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Patreon de Embajador</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <p class=\"ion-text-center\">\n    ¿Quieres ayudar a que FrikiRadar siga creciendo? Échanos una mano\n    económicamente para que podamos seguir manteniendo los servidores y\n    añadiendo nuevas funcionalidades a la aplicación.\n  </p>\n  <p class=\"ion-text-center\">\n    ¡Y como agradecimiento por la ayuda te daremos todas estas recompensas!\n  </p>\n  <ion-button\n    (click)=\"goToPatreon()\"\n    shape=\"round\"\n    expand=\"block\"\n    class=\"patreon\"\n    >Unirme a Patreon</ion-button\n  >\n  <ion-list>\n    <ion-item>\n      <ion-icon\n        name=\"checkmark-circle\"\n        slot=\"start\"\n        color=\"secondary\"\n      ></ion-icon>\n      <ion-label>\n        <p>\n          <strong>VERIFICA TU CUENTA.</strong> Al vincular tu cuenta de patreon\n          con FrikiRadar podemos verificar tu perfil y se mostrará una marca de\n          verificación junto a tu nombre para que los usuarios sepan que eres\n          real.\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"chatbubbles\" slot=\"start\" color=\"tertiary\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>SALA DE CHAT EXCLUSIVA.</strong> Accede a la sala de chat\n          exclusiva para patreons donde podrás consultar dudas o realizar\n          sugerencias a los creadores. Además de ser de los primeros en\n          enterarte de todas las novedades.\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"color-palette\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>TEMAS EXCLUSIVOS.</strong> Cambia el estilo de FrikiRadar con\n          los temas exclusivos para miembros de Patreon.\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"flame\" slot=\"start\" color=\"danger\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>ACCESO BETA.</strong> Prueba las nuevas actualizaciones antes\n          que nadie con las versiones beta exclusivas para miembros de Patreon.\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"document-text\" slot=\"start\" color=\"warning\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>APARECE EN LOS CRÉDITOS.</strong> Con tu apoyo formarás parte\n          de la creación de FrikiRadar y tu nombre aparecerá en los créditos de\n          la aplicación como colaborador.\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"heart\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>AMOR INCONDICIONAL.</strong> Los creadores de FrikiRadar te\n          daremos amor ilimitado incondicional por ayudarnos a crecer y serás de\n          las primeras personas en enterarte de todo lo que sucede.\n        </p></ion-label\n      >\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ambassador_ambassador_module_ts.js.map