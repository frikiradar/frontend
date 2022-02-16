"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 39730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageRoutingModule": () => (/* binding */ PagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.page */ 88886);




const routes = [
    {
        path: '',
        component: _pages_page__WEBPACK_IMPORTED_MODULE_0__.PagesPage
    }
];
let PagesPageRoutingModule = class PagesPageRoutingModule {
};
PagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagesPageRoutingModule);



/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPageModule": () => (/* binding */ PagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 39730);
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page */ 88886);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








let PagesPageModule = class PagesPageModule {
};
PagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_pages_page__WEBPACK_IMPORTED_MODULE_1__.PagesPage]
    })
], PagesPageModule);



/***/ }),

/***/ 88886:
/*!*************************************!*\
  !*** ./src/app/pages/pages.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesPage": () => (/* binding */ PagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.page.html?ngResource */ 61664);
/* harmony import */ var _pages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.page.scss?ngResource */ 38358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-equal */ 15541);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ 70946);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/page.service */ 49450);









let PagesPage = class PagesPage {
    constructor(pagesSvc, router, nav, config) {
        this.pagesSvc = pagesSvc;
        this.router = router;
        this.nav = nav;
        this.config = config;
        this.loading = true;
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.pages = (yield this.config.get("pages"));
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const pages = yield this.pagesSvc.getPages();
            if (this.pages) {
                if (!deep_equal__WEBPACK_IMPORTED_MODULE_2__(this.pages, pages)) {
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
    showPage(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/page", slug]);
        });
    }
    back() {
        this.nav.back();
    }
};
PagesPage.ctorParameters = () => [
    { type: _services_page_service__WEBPACK_IMPORTED_MODULE_5__.PageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService }
];
PagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-pages",
        template: _pages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_page_service__WEBPACK_IMPORTED_MODULE_5__.PageService,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavService,
        _services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService])
], PagesPage);



/***/ }),

/***/ 38358:
/*!**************************************************!*\
  !*** ./src/app/pages/pages.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-thumbnail {\n  --border-radius: 5px;\n  height: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InBhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNzVweDtcbn0iXX0= */";

/***/ }),

/***/ 61664:
/*!**************************************************!*\
  !*** ./src/app/pages/pages.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Páginas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"loading\"></ion-progress-bar>\n  <ion-list id=\"all-pages\" *ngIf=\"!pages\">\n    <ion-item\n      button\n      detail=\"false\"\n      *ngFor=\"let i of [].constructor(8)\"\n      lines=\"none\"\n    >\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </h2>\n        <p>\n          <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list id=\"all-pages\" *ngIf=\"pages\">\n    <ion-item\n      button\n      detail=\"false\"\n      *ngFor=\"let page of pages\"\n      lines=\"none\"\n      (click)=\"showPage(page.slug)\"\n    >\n      <ion-thumbnail slot=\"start\">\n        <img\n          [src]=\"page.cover\"\n          [alt]=\"page.name\"\n          default=\"/assets/img/pages/default-games-page.jpg\"\n        />\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{page.name}}</h2>\n        <p>#{{page.slug}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map