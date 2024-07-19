"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_unsubscribe_unsubscribe_module_ts"],{

/***/ 81602:
/*!***********************************************************!*\
  !*** ./src/app/unsubscribe/unsubscribe-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscribePageRoutingModule: () => (/* binding */ UnsubscribePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _unsubscribe_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsubscribe.page */ 4004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
var _UnsubscribePageRoutingModule;




const routes = [{
  path: '',
  component: _unsubscribe_page__WEBPACK_IMPORTED_MODULE_0__.UnsubscribePage
}];
class UnsubscribePageRoutingModule {}
_UnsubscribePageRoutingModule = UnsubscribePageRoutingModule;
_UnsubscribePageRoutingModule.ɵfac = function UnsubscribePageRoutingModule_Factory(t) {
  return new (t || _UnsubscribePageRoutingModule)();
};
_UnsubscribePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _UnsubscribePageRoutingModule
});
_UnsubscribePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UnsubscribePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 18795:
/*!***************************************************!*\
  !*** ./src/app/unsubscribe/unsubscribe.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscribePageModule: () => (/* binding */ UnsubscribePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _unsubscribe_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsubscribe-routing.module */ 81602);
/* harmony import */ var _unsubscribe_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsubscribe.page */ 4004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _UnsubscribePageModule;






class UnsubscribePageModule {}
_UnsubscribePageModule = UnsubscribePageModule;
_UnsubscribePageModule.ɵfac = function UnsubscribePageModule_Factory(t) {
  return new (t || _UnsubscribePageModule)();
};
_UnsubscribePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _UnsubscribePageModule
});
_UnsubscribePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _unsubscribe_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnsubscribePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UnsubscribePageModule, {
    declarations: [_unsubscribe_page__WEBPACK_IMPORTED_MODULE_1__.UnsubscribePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _unsubscribe_routing_module__WEBPACK_IMPORTED_MODULE_0__.UnsubscribePageRoutingModule]
  });
})();

/***/ }),

/***/ 4004:
/*!*************************************************!*\
  !*** ./src/app/unsubscribe/unsubscribe.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscribePage: () => (/* binding */ UnsubscribePage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 29885);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);

var _UnsubscribePage;








class UnsubscribePage {
  constructor(route, userSvc, i18n) {
    this.route = route;
    this.userSvc = userSvc;
    this.i18n = i18n;
    this.title = "";
    this.text = "";
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const code = _this.route.snapshot.paramMap.get("code");
      try {
        yield _this.userSvc.unsubscribe(code);
        _this.title = _this.i18n.translate("you-have-unsubscribed-successfully");
        _this.text = _this.i18n.translate("you-will-no-longer-receive-notifications");
      } catch (e) {
        _this.title = _this.i18n.translate("could-not-unsubscribe");
        _this.text = _this.i18n.translate("please-reply-to-the-email");
      }
    })();
  }
}
_UnsubscribePage = UnsubscribePage;
_UnsubscribePage.ɵfac = function UnsubscribePage_Factory(t) {
  return new (t || _UnsubscribePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService));
};
_UnsubscribePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _UnsubscribePage,
  selectors: [["app-unsubscribe"]],
  decls: 5,
  vars: 2,
  consts: [[1, "ion-padding"]],
  template: function UnsubscribePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.text);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_unsubscribe_unsubscribe_module_ts.js.map