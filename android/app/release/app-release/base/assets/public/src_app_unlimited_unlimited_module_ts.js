"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_unlimited_unlimited_module_ts"],{

/***/ 82798:
/*!*******************************************************!*\
  !*** ./src/app/unlimited/unlimited-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnlimitedModalRoutingModule: () => (/* binding */ UnlimitedModalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _unlimited_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unlimited.modal */ 94530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
var _UnlimitedModalRoutingModule;




const routes = [{
  path: "",
  component: _unlimited_modal__WEBPACK_IMPORTED_MODULE_0__.UnlimitedModal
}];
class UnlimitedModalRoutingModule {}
_UnlimitedModalRoutingModule = UnlimitedModalRoutingModule;
_UnlimitedModalRoutingModule.ɵfac = function UnlimitedModalRoutingModule_Factory(t) {
  return new (t || _UnlimitedModalRoutingModule)();
};
_UnlimitedModalRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _UnlimitedModalRoutingModule
});
_UnlimitedModalRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UnlimitedModalRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98391:
/*!***********************************************!*\
  !*** ./src/app/unlimited/unlimited.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnlimitedModalModule: () => (/* binding */ UnlimitedModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _unlimited_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unlimited-routing.module */ 82798);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _UnlimitedModalModule;






class UnlimitedModalModule {}
_UnlimitedModalModule = UnlimitedModalModule;
_UnlimitedModalModule.ɵfac = function UnlimitedModalModule_Factory(t) {
  return new (t || _UnlimitedModalModule)();
};
_UnlimitedModalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _UnlimitedModalModule
});
_UnlimitedModalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _unlimited_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnlimitedModalRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UnlimitedModalModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _unlimited_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnlimitedModalRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_unlimited_unlimited_module_ts.js.map