"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_patreon_patreon_module_ts"],{

/***/ 46898:
/*!***************************************************!*\
  !*** ./src/app/patreon/patreon-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatreonPageRoutingModule": () => (/* binding */ PatreonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _patreon_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patreon.page */ 43359);




const routes = [
    {
        path: '',
        component: _patreon_page__WEBPACK_IMPORTED_MODULE_0__.PatreonPage
    }
];
let PatreonPageRoutingModule = class PatreonPageRoutingModule {
};
PatreonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PatreonPageRoutingModule);



/***/ }),

/***/ 56919:
/*!*******************************************!*\
  !*** ./src/app/patreon/patreon.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatreonPageModule": () => (/* binding */ PatreonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _patreon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patreon-routing.module */ 46898);
/* harmony import */ var _patreon_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patreon.page */ 43359);







let PatreonPageModule = class PatreonPageModule {
};
PatreonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _patreon_routing_module__WEBPACK_IMPORTED_MODULE_0__.PatreonPageRoutingModule
        ],
        declarations: [_patreon_page__WEBPACK_IMPORTED_MODULE_1__.PatreonPage]
    })
], PatreonPageModule);



/***/ }),

/***/ 43359:
/*!*****************************************!*\
  !*** ./src/app/patreon/patreon.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatreonPage": () => (/* binding */ PatreonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _patreon_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patreon.page.html?ngResource */ 26446);
/* harmony import */ var _patreon_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patreon.page.scss?ngResource */ 17756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/url.service */ 90925);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ 73071);









let PatreonPage = class PatreonPage {
    // private state: string;
    constructor(urlSvc, route, nav, router, userSvc, auth) {
        this.urlSvc = urlSvc;
        this.route = route;
        this.nav = nav;
        this.router = router;
        this.userSvc = userSvc;
        this.auth = auth;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.code = this.route.snapshot.queryParamMap.get("code");
            // this.state = this.route.snapshot.queryParamMap.get("state");
            if (this.code) {
                try {
                    yield this.userSvc.linkToPatreon(this.code);
                }
                catch (e) {
                    console.error("error al vincular");
                }
                this.router.navigate(["/patreon"]);
            }
        });
    }
    link() {
        const client_id = "T6KMsWw673-ffH__MVNHOkzEMMavJ6IP_TMv1UHmNqv96PHC-_DsDmiYOyOvwloj";
        //const client_secret = "_dyBkMG-HQB4uPIZD4mYdFNOBMPGCnqMIDvmvJkJxTYpFxdz_qYSf1ZEPiooZO7Q";
        const url = "https://www.patreon.com/oauth2/authorize?response_type=code&client_id=" +
            client_id;
        this.urlSvc.openUrl(url);
    }
    close() {
        this.nav.navigateRoot("/");
    }
};
PatreonPage.ctorParameters = () => [
    { type: _services_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
PatreonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-patreon",
        template: _patreon_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_patreon_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService])
], PatreonPage);



/***/ }),

/***/ 17756:
/*!******************************************************!*\
  !*** ./src/app/patreon/patreon.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label {\n  --color: white !important;\n}\nion-item ion-icon {\n  color: white;\n}\nion-item ion-label p {\n  white-space: normal;\n  color: #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdHJlb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBS0k7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFITiIsImZpbGUiOiJwYXRyZW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgaW9uLWxhYmVsIHtcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgY29sb3I6ICNiYmI7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 26446:
/*!******************************************************!*\
  !*** ./src/app/patreon/patreon.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Patreon x FrikiRadar</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"!auth.currentUserValue?.patreon\">\n    <p class=\"ion-text-center\">\n      Vincula tu cuenta de FrikiRadar con Patreon para tener acceso a todas las\n      ventajas exclusivas.\n    </p>\n    <ion-button (click)=\"link()\" shape=\"round\" expand=\"block\" class=\"patreon\"\n      >Vincular con Patreon</ion-button\n    >\n  </div>\n  <div *ngIf=\"auth.currentUserValue?.patreon\">\n    <p class=\"ion-text-center\">\n      ¡Enhorabuena, tu cuenta está vinculada correctamente con Patreon!\n    </p>\n    <ion-item>\n      <ion-icon\n        src=\"/assets/icon/patreon_coral.svg\"\n        slot=\"start\"\n        color=\"secondary\"\n      ></ion-icon>\n      <ion-label>\n        <h2>Estado:</h2>\n        <h1>\n          Suscripción {{ auth.currentUserValue.patreon.patron_status ===\n          'active_patron' ? \"activa\" : \"inactiva\" }}\n        </h1>\n      </ion-label>\n    </ion-item>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-icon\n        name=\"checkmark-circle\"\n        slot=\"start\"\n        color=\"secondary\"\n      ></ion-icon>\n      <ion-label>\n        <p>\n          <strong>VERIFICA TU CUENTA.</strong> Al vincular tu cuenta de patreon\n          con FrikiRadar podemos verificar tu perfil y se mostrará una marca de\n          verificación junto a tu nombre para que los usuarios sepan que eres\n          real.\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"chatbubbles\" slot=\"start\" color=\"tertiary\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>SALAS DE CHAT.</strong> Accede a las salas de chat y canal de\n          Discord exclusivos para patreons donde podrás consultar dudas o\n          realizar sugerencias a los creadores. Además de ser de los primeros en\n          enterarte de todas las novedades.\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"color-palette\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>TEMAS EXCLUSIVOS.</strong> Cambia el estilo de FrikiRadar con\n          los temas exclusivos para miembros de Patreon.\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"flame\" slot=\"start\" color=\"danger\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>ACCESO BETA.</strong> Prueba las nuevas actualizaciones antes\n          que nadie con las versiones beta exclusivas para miembros de Patreon.\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"document-text\" slot=\"start\" color=\"warning\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>APARECE EN LOS CRÉDITOS.</strong> Con tu apoyo formarás parte\n          de la creación de FrikiRadar y tu nombre aparecerá en los créditos de\n          la aplicación como colaborador.\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"gift\" slot=\"start\" color=\"secondary\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>SORTEOS Y EVENTOS EXCLUSIVAS.</strong> Al formar parte de\n          Patreon podrás participar en exclusiva en sorteos y eventos que\n          realizaremos tanto nacional como mundialmente (próximamente).\n        </p></ion-label\n      >\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"heart\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label\n        ><p>\n          <strong>AMOR INCONDICIONAL.</strong> Los creadores de FrikiRadar te\n          daremos amor ilimitado incondicional por ayudarnos a crecer y serás de\n          las primeras personas en enterarte de todo lo que sucede.\n        </p></ion-label\n      >\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_patreon_patreon_module_ts.js.map