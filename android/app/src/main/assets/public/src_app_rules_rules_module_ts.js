"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_rules_rules_module_ts"],{

/***/ 44431:
/*!***********************************************!*\
  !*** ./src/app/rules/rules-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesPageRoutingModule": () => (/* binding */ RulesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules.page */ 45921);




const routes = [
    {
        path: '',
        component: _rules_page__WEBPACK_IMPORTED_MODULE_0__.RulesPage
    }
];
let RulesPageRoutingModule = class RulesPageRoutingModule {
};
RulesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RulesPageRoutingModule);



/***/ }),

/***/ 58869:
/*!***************************************!*\
  !*** ./src/app/rules/rules.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesPageModule": () => (/* binding */ RulesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _rules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules-routing.module */ 44431);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);







let RulesPageModule = class RulesPageModule {
};
RulesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rules_routing_module__WEBPACK_IMPORTED_MODULE_0__.RulesPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]
    })
], RulesPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_rules_rules_module_ts.js.map