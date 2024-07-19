"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_radar_radar_module_ts"],{

/***/ 52071:
/*!***************************************!*\
  !*** ./src/app/radar/radar.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadarPageModule: () => (/* binding */ RadarPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 93887);
/* harmony import */ var _radar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radar.page */ 93440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _RadarPageModule;








const routes = [{
  path: "",
  component: _radar_page__WEBPACK_IMPORTED_MODULE_1__.RadarPage
}, {
  path: "story/:id",
  component: _radar_page__WEBPACK_IMPORTED_MODULE_1__.RadarPage
}];
class RadarPageModule {}
_RadarPageModule = RadarPageModule;
_RadarPageModule.ɵfac = function RadarPageModule_Factory(t) {
  return new (t || _RadarPageModule)();
};
_RadarPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _RadarPageModule
});
_RadarPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RadarPageModule, {
    declarations: [_radar_page__WEBPACK_IMPORTED_MODULE_1__.RadarPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 93440:
/*!*************************************!*\
  !*** ./src/app/radar/radar.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadarPage: () => (/* binding */ RadarPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 2435);
/* harmony import */ var swiper_new_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper-new/modules */ 35314);
/* harmony import */ var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/haptics */ 47115);
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/geolocation.service */ 92304);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 29885);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/auth.service */ 44796);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils.service */ 54171);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/config.service */ 43696);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/notification.service */ 87473);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/navigation.service */ 99260);
/* harmony import */ var _services_ad_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/ad.service */ 90827);
/* harmony import */ var _unlimited_unlimited_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../unlimited/unlimited.modal */ 94530);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/image-preload.directive */ 89024);
/* harmony import */ var _ad_ad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ad/ad.component */ 63368);
/* harmony import */ var _nice_date_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../nice-date.pipe */ 45982);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _RadarPage;


































const _c0 = ["range"];
const _c1 = ["radarlist"];
const _c2 = () => [0, 0.9];
const _c3 = a0 => ({
  distance: a0
});
const _c4 = () => [];
function RadarPage_ion_progress_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "ion-progress-bar", 22);
  }
}
function RadarPage_ion_progress_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "ion-progress-bar", 23);
  }
}
function RadarPage_ion_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_ion_button_9_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.changeView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ion-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("name", ctx_r2.view === "cards" ? "list" : "albums");
  }
}
function RadarPage_ion_badge_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-badge", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.counters.notifications > 9 ? "+9" : ctx_r2.counters.notifications);
  }
}
function RadarPage_div_17_swiper_slide_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "swiper-slide")(1, "ion-card", 31)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", "/assets/img/layout/tutorial/tutorial-" + ctx_r2.language + "-1.svg", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function RadarPage_div_17_swiper_slide_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "swiper-slide", 34)(1, "ion-card", 31)(2, "swiper-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_17_swiper_slide_4_Template_swiper_container_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.tapTutorial($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "swiper-slide")(4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "swiper-slide")(7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", "/assets/img/layout/tutorial/tutorial-" + ctx_r2.language + "-2.svg", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", "/assets/img/layout/tutorial/tutorial-" + ctx_r2.language + "-3.svg", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function RadarPage_div_17_swiper_slide_5_ion_card_1_swiper_slide_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "swiper-slide")(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", image_r7, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"])("alt", ctx_r2.users == null ? null : ctx_r2.users.username);
  }
}
function RadarPage_div_17_swiper_slide_5_ion_card_1_ion_badge_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-badge", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function RadarPage_div_17_swiper_slide_5_ion_card_1_ion_item_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "ion-label")(3, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](5, 1, "km-distancia", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](4, _c3, user_r6.distance)));
  }
}
function RadarPage_div_17_swiper_slide_5_ion_card_1_div_23_ion_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-chip", 52)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](tag_r8);
  }
}
function RadarPage_div_17_swiper_slide_5_ion_card_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_div_17_swiper_slide_5_ion_card_1_div_23_ion_chip_1_Template, 3, 1, "ion-chip", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", user_r6.common_tags);
  }
}
function RadarPage_div_17_swiper_slide_5_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-card", 31)(1, "swiper-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_17_swiper_slide_5_ion_card_1_Template_swiper_container_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.tap($event, user_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "swiper-slide")(4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, RadarPage_div_17_swiper_slide_5_ion_card_1_swiper_slide_6_Template, 3, 2, "swiper-slide", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_17_swiper_slide_5_ion_card_1_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.showProfile(user_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "ion-card-header")(9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, RadarPage_div_17_swiper_slide_5_ion_card_1_ion_badge_12_Template, 2, 0, "ion-badge", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "niceDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](14, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "ion-text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "ion-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, RadarPage_div_17_swiper_slide_5_ion_card_1_ion_item_20_Template, 6, 6, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "ion-text", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, RadarPage_div_17_swiper_slide_5_ion_card_1_div_23_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "ion-item", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", user_r6 == null ? null : user_r6.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"])("alt", ctx_r2.users == null ? null : ctx_r2.users.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", user_r6.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", user_r6.match, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 10, user_r6 == null ? null : user_r6.last_login) === _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](14, 12, "just-now"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](user_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](", ", user_r6.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", user_r6.distance !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](user_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", user_r6 == null ? null : user_r6.common_tags == null ? null : user_r6.common_tags.length);
  }
}
function RadarPage_div_17_swiper_slide_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-ad", 57);
  }
  if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ad", user_r6);
  }
}
function RadarPage_div_17_swiper_slide_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "swiper-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_div_17_swiper_slide_5_ion_card_1_Template, 26, 14, "ion-card", 38)(2, RadarPage_div_17_swiper_slide_5_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const adContainer_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", user_r6 == null ? null : user_r6.username)("ngIfElse", adContainer_r9);
  }
}
function RadarPage_div_17_swiper_slide_6_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "sin-resultados"), " ");
  }
}
function RadarPage_div_17_swiper_slide_6_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "no-hay-ms-resultados"), " ");
  }
}
function RadarPage_div_17_swiper_slide_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "swiper-slide")(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "ion-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, RadarPage_div_17_swiper_slide_6_h2_3_Template, 3, 3, "h2", 28)(4, RadarPage_div_17_swiper_slide_6_h2_4_Template, 3, 3, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_17_swiper_slide_6_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.filterOptions = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_17_swiper_slide_6_Template_ion_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.changeView());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](19, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.users && ctx_r2.users.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.users && ctx_r2.users.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 6, "modifica-tus-filtros-bsqueda-suscrbete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](11, 8, "modificar-filtros-bsqueda"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](15, 10, "tambin-puedes-probar-suerte-cambiando"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](19, 12, "cambiar-vista-por-kilmetros"));
  }
}
function RadarPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 26)(1, "swiper-container", 27, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, RadarPage_div_17_swiper_slide_3_Template, 4, 1, "swiper-slide", 28)(4, RadarPage_div_17_swiper_slide_4_Template, 9, 2, "swiper-slide", 29)(5, RadarPage_div_17_swiper_slide_5_Template, 4, 2, "swiper-slide", 30)(6, RadarPage_div_17_swiper_slide_6_Template, 20, 14, "swiper-slide", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.tutorial);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.tutorial);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r2.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
  }
}
function RadarPage_div_18_ion_list_1_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item", 66)(1, "ion-avatar", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "ion-skeleton-text", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "ion-skeleton-text", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "ion-skeleton-text", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "ion-skeleton-text", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function RadarPage_div_18_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_div_18_ion_list_1_ion_item_1_Template, 10, 0, "ion-item", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](1, _c4).constructor(8));
  }
}
function RadarPage_div_18_ion_list_2_ion_item_sliding_1_ion_badge_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-badge", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function RadarPage_div_18_ion_list_2_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item-sliding", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ionDrag", function RadarPage_div_18_ion_list_2_ion_item_sliding_1_Template_ion_item_sliding_ionDrag_0_listener($event) {
      const user_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.dragItem($event, user_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-item-options", 76)(2, "ion-item-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_18_ion_list_2_ion_item_sliding_1_Template_ion_item_option_click_2_listener() {
      const user_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.showProfile(user_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "ion-icon", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "ion-item", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_18_ion_list_2_ion_item_sliding_1_Template_ion_item_click_4_listener() {
      const user_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.showProfile(user_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "ion-avatar", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, RadarPage_div_18_ion_list_2_ion_item_sliding_1_ion_badge_7_Template, 2, 0, "ion-badge", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "niceDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "ion-label")(11, "h2")(12, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "ion-item-options", 81)(21, "ion-item-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_18_ion_list_2_ion_item_sliding_1_Template_ion_item_option_click_21_listener() {
      const user_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.hideProfile(user_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](22, "ion-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("src", user_r13 == null ? null : user_r13.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 6, user_r13 == null ? null : user_r13.last_login) === _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](9, 8, "just-now"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](user_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](", ", user_r13.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](user_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", user_r13.match, "%");
  }
}
function RadarPage_div_18_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_div_18_ion_list_2_ion_item_sliding_1_Template, 23, 10, "ion-item-sliding", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "ion-infinite-scroll", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ionInfinite", function RadarPage_div_18_ion_list_2_Template_ion_infinite_scroll_ionInfinite_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.getRadarUsers($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "ion-infinite-scroll-content", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r2.users);
  }
}
function RadarPage_div_18_div_3_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "sin-resultados"));
  }
}
function RadarPage_div_18_div_3_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "no-hay-ms-resultados"));
  }
}
function RadarPage_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ion-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, RadarPage_div_18_div_3_h2_2_Template, 3, 3, "h2", 28)(3, RadarPage_div_18_div_3_h2_3_Template, 3, 3, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_div_18_div_3_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.filterOptions = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.users.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.users.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 4, "modifica-tus-filtros-bsqueda-suscrbete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 6, "modificar-filtros-bsqueda"), " ");
  }
}
function RadarPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_div_18_ion_list_1_Template, 2, 2, "ion-list", 28)(2, RadarPage_div_18_ion_list_2_Template, 4, 1, "ion-list", 28)(3, RadarPage_div_18_div_3_Template, 11, 8, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r2.users.length && !ctx_r2.allUsersLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (ctx_r2.users == null ? null : ctx_r2.users.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (ctx_r2.users == null ? null : ctx_r2.users.length) === 0 && (!ctx_r2.automatic || ctx_r2.ratio === 25000));
  }
}
function RadarPage_ion_footer_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-footer", 84)(1, "ion-range", 85, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ionChange", function RadarPage_ion_footer_19_Template_ion_range_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.changeRatio($event.detail.value));
    })("click", function RadarPage_ion_footer_19_Template_ion_range_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.automatic = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "ion-icon", 86)(4, "ion-icon", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "ion-grid", 88)(6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "100km");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "500km");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "1000km");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassProp"]("hide-background", ctx_r2.hide || ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("snaps", true)("ticks", true)("debounce", 250)("value", ctx_r2.rangeValue);
  }
}
function RadarPage_ng_template_21_h2_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "bsqueda-ampliada"));
  }
}
function RadarPage_ng_template_21_h2_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "bsqueda-estricta"));
  }
}
function RadarPage_ng_template_21_ion_label_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-label", 98)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 1, "se-tiene-cuenta-tu-configuracin"));
  }
}
function RadarPage_ng_template_21_ion_label_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-label", 98)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 1, "no-se-tiene-cuenta-tu"));
  }
}
function RadarPage_ng_template_21_ion_item_group_13_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item", 66)(1, "ion-toggle", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function RadarPage_ng_template_21_ion_item_group_13_ion_item_1_Template_ion_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.radarSearchOptions("identity", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.identity);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 3, "identidad-gnero"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 5, ctx_r2.auth.currentUserValue == null ? null : ctx_r2.auth.currentUserValue.lovegender));
  }
}
function RadarPage_ng_template_21_ion_item_group_13_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item", 66)(1, "ion-toggle", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function RadarPage_ng_template_21_ion_item_group_13_ion_item_2_Template_ion_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.radarSearchOptions("range", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.range);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 4, "rango-edad"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", ctx_r2.auth.currentUserValue == null ? null : ctx_r2.auth.currentUserValue.minage, " - ", ctx_r2.auth.currentUserValue == null ? null : ctx_r2.auth.currentUserValue.maxage, " ");
  }
}
function RadarPage_ng_template_21_ion_item_group_13_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item", 90)(1, "ion-toggle", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function RadarPage_ng_template_21_ion_item_group_13_ion_item_3_Template_ion_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.radarSearchOptions("connection", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.connection);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 3, "tipo-conexin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.connections == null ? null : ctx_r2.connections.join(", "));
  }
}
function RadarPage_ng_template_21_ion_item_group_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_ng_template_21_ion_item_group_13_ion_item_1_Template, 8, 7, "ion-item", 99)(2, RadarPage_ng_template_21_ion_item_group_13_ion_item_2_Template, 7, 6, "ion-item", 99)(3, RadarPage_ng_template_21_ion_item_group_13_ion_item_3_Template, 7, 5, "ion-item", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.auth.currentUserValue == null ? null : ctx_r2.auth.currentUserValue.lovegender);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", (ctx_r2.auth.currentUserValue == null ? null : ctx_r2.auth.currentUserValue.minage) && (ctx_r2.auth.currentUserValue == null ? null : ctx_r2.auth.currentUserValue.maxage));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.auth.currentUserValue == null ? null : ctx_r2.auth.currentUserValue.connection == null ? null : ctx_r2.auth.currentUserValue.connection.length);
  }
}
function RadarPage_ng_template_21_ion_label_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 2, "bsqueda-mundial"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 4, "muestra-personas-todo-mundo"));
  }
}
function RadarPage_ng_template_21_ion_label_26_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "bsqueda-local"), " ");
  }
}
function RadarPage_ng_template_21_ion_label_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_ng_template_21_ion_label_26_h2_1_Template, 3, 3, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !(ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.worldwide));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 2, "muestra-personas-cercanas"));
  }
}
function RadarPage_ng_template_21_ion_label_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-label")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 2, "ubicacin-manual"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 4, "te-aparecen-personas-cercanas-al"));
  }
}
function RadarPage_ng_template_21_ion_label_30_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "ubicacin-automtica"), " ");
  }
}
function RadarPage_ng_template_21_ion_label_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_ng_template_21_ion_label_30_h2_1_Template, 3, 3, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !(ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.fake_location));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 2, "te-aparecen-personas-cercanas-tu"));
  }
}
function RadarPage_ng_template_21_ion_list_31_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-select-option", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", country_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", country_r21, " ");
  }
}
function RadarPage_ng_template_21_ion_list_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-list")(1, "ion-item", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "ion-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "ion-select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ionChange", function RadarPage_ng_template_21_ion_list_31_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.changeLocation("country", $event.detail.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, RadarPage_ng_template_21_ion_list_31_ion_select_option_6_Template, 2, 2, "ion-select-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "ion-item", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "ion-icon", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "ion-input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ionInput", function RadarPage_ng_template_21_ion_list_31_Template_ion_input_ionInput_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.changeLocation("city", $event.detail.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 5, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 7, "selecciona-uno"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r2.location == null ? null : ctx_r2.location.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r2.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r2.location == null ? null : ctx_r2.location.city);
  }
}
function RadarPage_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-content", 89)(1, "ion-item", 90)(2, "ion-label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "ion-list")(6, "ion-item", 66)(7, "ion-toggle", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function RadarPage_ng_template_21_Template_ion_toggle_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.radarSearchChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, RadarPage_ng_template_21_h2_8_Template, 3, 3, "h2", 28)(9, RadarPage_ng_template_21_h2_9_Template, 3, 3, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "ion-item", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, RadarPage_ng_template_21_ion_label_11_Template, 4, 3, "ion-label", 94)(12, RadarPage_ng_template_21_ion_label_12_Template, 4, 3, "ion-label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, RadarPage_ng_template_21_ion_item_group_13_Template, 4, 3, "ion-item-group", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "ion-item-group")(15, "ion-item", 66)(16, "ion-toggle", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function RadarPage_ng_template_21_Template_ion_toggle_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.radarSearchOptions("online", $event));
    })("click", function RadarPage_ng_template_21_Template_ion_toggle_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](!ctx_r2.auth.isPremium() ? ctx_r2.showPremium("filter") : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](19, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](22, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "ion-item", 66)(24, "ion-toggle", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function RadarPage_ng_template_21_Template_ion_toggle_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.radarSearchOptions("worldwide", $event));
    })("click", function RadarPage_ng_template_21_Template_ion_toggle_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](!ctx_r2.auth.isPremium() ? ctx_r2.showPremium("radar") : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, RadarPage_ng_template_21_ion_label_25_Template, 7, 6, "ion-label", 28)(26, RadarPage_ng_template_21_ion_label_26_Template, 5, 4, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "ion-item", 66)(28, "ion-toggle", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function RadarPage_ng_template_21_Template_ion_toggle_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r2.radarSearchOptions("fake_location", $event));
    })("click", function RadarPage_ng_template_21_Template_ion_toggle_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](!ctx_r2.auth.isPremium() ? ctx_r2.showPremium("location") : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, RadarPage_ng_template_21_ion_label_29_Template, 7, 6, "ion-label", 28)(30, RadarPage_ng_template_21_ion_label_30_Template, 5, 4, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](31, RadarPage_ng_template_21_ion_list_31_Template, 10, 9, "ion-list", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 20, "filtros-radar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.extended);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.extended);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r2.extended);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r2.extended);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.extended);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.extended);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.online)("disabled", !ctx_r2.auth.isPremium());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](19, 22, "solo-personas-lnea"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](22, 24, "mostrar-solamente-personas-conectadas"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.worldwide)("disabled", !ctx_r2.auth.isPremium());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.worldwide);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !(ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.worldwide));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.fake_location)("disabled", !ctx_r2.auth.isPremium());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.fake_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !(ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.fake_location));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.searchOptions == null ? null : ctx_r2.searchOptions.fake_location);
  }
}
function RadarPage_ion_backdrop_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "ion-backdrop", 108);
  }
}
class RadarPage {
  constructor(userSvc, auth, router, geolocationSvc, alert, utils, toast, config, notificationSvc, detectorRef, nav, ngZone, adService, modalController, i18n) {
    this.userSvc = userSvc;
    this.auth = auth;
    this.router = router;
    this.geolocationSvc = geolocationSvc;
    this.alert = alert;
    this.utils = utils;
    this.toast = toast;
    this.config = config;
    this.notificationSvc = notificationSvc;
    this.detectorRef = detectorRef;
    this.nav = nav;
    this.ngZone = ngZone;
    this.adService = adService;
    this.modalController = modalController;
    this.i18n = i18n;
    this.allUsersLoaded = false;
    this.filterOptions = false;
    this.language = this.i18n.currentLanguage;
    this.slideOpts = {
      modules: [swiper_new_modules__WEBPACK_IMPORTED_MODULE_1__.EffectCoverflow],
      slidesPerView: 1,
      breakpoints: {
        1920: {
          slidesPerView: 4,
          centeredSlides: true
        },
        1280: {
          slidesPerView: 3,
          centeredSlides: true
        },
        780: {
          slidesPerView: 2,
          centeredSlides: true
        }
      },
      grabCursor: true,
      effect: "coverflow"
    };
    this.hide = false;
    this.page = 0;
    this.ratio = -1;
    this.automatic = true;
    this.rangeValue = 0;
    this.previousRangeValue = 0;
    this.tutorial = true;
    this.users = [];
    this.showBackdrop = false;
    this.loading = true;
    this.extended = true;
    this.searchOptions = {
      identity: true,
      range: false,
      connection: false,
      online: false,
      worldwide: this.auth.isPremium() ? true : false,
      fake_location: false
    };
    this.location = {
      country: "",
      city: ""
    };
    this.searchOptionsChanged = false;
    this.countries = [];
    this.notificationSvc.notification.subscribe(notification => {
      this.counters = notification;
    });
  }
  tap(event, user) {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event.target.parentElement.parentElement.parentElement.tagName == "SWIPER-CONTAINER") {
        var _user$images;
        const swiperContainer = event.target.parentElement.parentElement.parentElement;
        const swiper = swiperContainer.swiper;
        const imageElement = event.target;
        const imageRect = imageElement.getBoundingClientRect();
        const centerStart = imageRect.left + imageRect.width / 2;
        const centerEnd = imageRect.left + imageRect.width / 2;
        let currentX = swiper.touches.currentX;
        if (((_user$images = user.images) === null || _user$images === void 0 ? void 0 : _user$images.length) > 0 && currentX !== undefined) {
          if (currentX > centerEnd) {
            if (!swiper.isEnd) {
              swiper.slideNext();
              yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__.Haptics.vibrate({
                duration: 10
              });
            }
          } else if (currentX < centerStart) {
            if (!swiper.isBeginning) {
              swiper.slidePrev();
              yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__.Haptics.vibrate({
                duration: 10
              });
            }
          }
        } else {
          _this.showProfile(user.id);
        }
      } else {
        _this.showProfile(user.id);
      }
    })();
  }
  tapTutorial(event) {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event.target.parentElement.parentElement.parentElement.tagName == "SWIPER-CONTAINER") {
        const swiperContainer = event.target.parentElement.parentElement.parentElement;
        const swiper = swiperContainer.swiper;
        const imageElement = event.target;
        const imageRect = imageElement.getBoundingClientRect();
        let currentX = swiper.touches.currentX;
        let currentY = swiper.touches.currentY;
        let centerStart = imageRect.left + imageRect.width / 3;
        let centerEnd = imageRect.left + imageRect.width / 3 * 2;
        if (currentY < screen.height / 2) {
          if (currentX > centerEnd) {
            if (!swiper.isEnd) {
              swiper.slideNext();
              yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__.Haptics.vibrate({
                duration: 10
              });
            }
          } else if (currentX < centerStart) {
            if (!swiper.isBeginning) {
              swiper.slidePrev();
              yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_2__.Haptics.vibrate({
                duration: 10
              });
            }
          }
        } else {
          _this2.alert.create({
            header: _this2.i18n.translate("well-done"),
            message: _this2.i18n.translate("how-to-enter-profile"),
            buttons: [_this2.i18n.translate("lets-go")],
            cssClass: "round-alert"
          }).then(alert => alert.present());
        }
      }
    })();
  }
  ngAfterViewInit() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.users = yield _this3.config.get("radar");
      if (_this3.auth.currentUserValue.connection) {
        _this3.connections = _this3.auth.currentUserValue.connection.map(c => {
          return _this3.i18n.translate(c);
        });
      }
    })();
  }
  ngOnInit() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.auth.currentUser.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.first)(user => !!user && user.active)).subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
          _this4.authUser = user;
          yield _this4.initGeolocation();
          _this4.initSwiper();
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  initGeolocation() {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.auth.isDemo()) {
        try {
          _this5.showBackdrop = true;
          const geolocation = yield _this5.geolocationSvc.getGeolocation();
          _this5.showBackdrop = false;
          const oldCoordinates = _this5.authUser.coordinates;
          const oldCountry = _this5.authUser.country;
          const oldCity = _this5.authUser.city;
          if (geolocation.longitude && geolocation.latitude) {
            // Geolocalización disponible
            if (oldCoordinates === undefined || oldCoordinates.latitude === undefined || geolocation.latitude.toFixed(3) !== (oldCoordinates === null || oldCoordinates === void 0 ? void 0 : oldCoordinates.latitude.toFixed(3)) || geolocation.longitude.toFixed(3) !== (oldCoordinates === null || oldCoordinates === void 0 ? void 0 : oldCoordinates.longitude.toFixed(3))) {
              const coordinates = yield _this5.userSvc.setCoordinates(geolocation.longitude, geolocation.latitude);
              const user = _this5.auth.currentUserValue;
              user.coordinates = coordinates;
              _this5.auth.setAuthUser(_this5.auth.currentUserValue);
            }
          } else {
            // Geolocalización no disponible, la hacemos manual
            if (oldCountry === undefined || oldCity === undefined || oldCountry !== geolocation.country || oldCity !== geolocation.city) {
              const coordinates = yield _this5.userSvc.setManualGeolocation(geolocation.country, geolocation.city);
              const user = _this5.auth.currentUserValue;
              user.coordinates = coordinates;
              user.country = geolocation.country;
              user.city = geolocation.city;
              _this5.auth.setAuthUser(_this5.auth.currentUserValue);
            }
          }
        } catch (e) {
          console.error(e);
          // tienes que aprobar permisos
        }
        _this5.authUser = _this5.auth.currentUserValue;
      }
      // --------------------------------------------------
      const radar_config = yield _this5.config.get("radar_config");
      if ((radar_config === null || radar_config === void 0 ? void 0 : radar_config.extended) !== undefined) {
        _this5.extended = radar_config.extended;
      }
      if ((radar_config === null || radar_config === void 0 ? void 0 : radar_config.options) !== undefined) {
        _this5.searchOptions = radar_config.options;
        if (!_this5.auth.isPremium()) {
          radar_config.options.online = false;
          radar_config.options.fake_location = false;
          radar_config.options.worldwide = false;
          if (radar_config.range === 4) {
            radar_config.range = 2;
          }
        } else if (radar_config.options.worldwide === undefined) {
          radar_config.options.worldwide = true;
        }
        _this5.config.set("radar_config", radar_config);
        _this5.searchOptions = radar_config.options;
      }
      if ((radar_config === null || radar_config === void 0 ? void 0 : radar_config.location) !== undefined) {
        _this5.location = radar_config.location;
      }
      _this5.countries = _this5.utils.getCountries();
      if ((radar_config === null || radar_config === void 0 ? void 0 : radar_config.view) === "list") {
        _this5.view = "list";
        const range = radar_config === null || radar_config === void 0 ? void 0 : radar_config.range;
        if (range !== undefined) {
          _this5.rangeValue = range;
          _this5.previousRangeValue = range;
          _this5.ratio = _this5.getRatio(range);
        } else {
          _this5.ratio = 50;
        }
      } else {
        var _this5$auth$currentUs, _this5$auth$currentUs2, _this5$slides;
        _this5.view = "cards";
        _this5.tutorial = (_this5$auth$currentUs = (_this5$auth$currentUs2 = _this5.auth.currentUserValue) === null || _this5$auth$currentUs2 === void 0 ? void 0 : _this5$auth$currentUs2.config.tutorial) !== null && _this5$auth$currentUs !== void 0 ? _this5$auth$currentUs : true;
        _this5.ratio = -1;
        yield _this5.utils.delay(500);
        (_this5$slides = _this5.slides) === null || _this5$slides === void 0 || _this5$slides.slideTo(0);
      }
      yield _this5.getRadarUsers();
    })();
  }
  initSwiper() {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const swiperContainer = document.querySelector("#radar-slide");
      Object.assign(swiperContainer, _this6.slideOpts);
      swiperContainer.initialize();
      _this6.slides = swiperContainer.swiper;
      _this6.slides.on("slideNextTransitionEnd", /*#__PURE__*/(0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this6.slide();
      }));
    })();
  }
  getRadarUsers(event) {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this7$slides;
      try {
        _this7.loading = true;
        _this7.detectorRef.detectChanges();
        _this7.page++;
        let resUsers = [];
        if (!_this7.extended) {
          resUsers = yield _this7.userSvc.getRadarUsers(_this7.page, _this7.ratio);
        } else {
          resUsers = yield _this7.userSvc.getRadarUsers(_this7.page, _this7.ratio, _this7.searchOptions, _this7.location);
        }
        _this7.loading = false;
        _this7.detectorRef.detectChanges();
        if (_this7.page === 1) {
          _this7.config.set("radar", resUsers);
        }
        if (resUsers.length > 0) {
          let users = resUsers;
          if (_this7.view === "cards") {
            // TODO: que tambien se vea en la vista de lista
            let mixedList = [];
            let adCounter = 0;
            for (let i = 0; i < users.length; i++) {
              mixedList.push(users[i]);
              adCounter++;
              if (adCounter === 5) {
                const ad = _this7.adService.getRandomAd();
                if (ad) {
                  mixedList.push(ad);
                  break;
                }
                adCounter = 0;
              }
            }
            _this7.users = _this7.page === 1 ? _this7.users = mixedList : [..._this7.users, ...mixedList];
          } else {
            _this7.users = _this7.page === 1 ? _this7.users = users : [..._this7.users, ...users];
          }
          _this7.detectorRef.detectChanges();
          if (_this7.ratio === -1) {
            var _resUsers, _this7$users;
            if (((_resUsers = resUsers) === null || _resUsers === void 0 ? void 0 : _resUsers.length) > 0 && !((_this7$users = _this7.users) !== null && _this7$users !== void 0 && _this7$users.length)) {
              _this7.users = [..._this7.users, ...resUsers];
            }
            if ("username" in _this7.users[0]) {
              _this7.user = _this7.users[0];
              if (!_this7.user.viewed) {
                _this7.userSvc.view(_this7.user.id);
              }
            }
          } else {
            if (event) {
              event.target.complete();
              if (users.length < 15) {
                event.target.disabled = true;
              }
            }
          }
        } else if (_this7.range && _this7.range.value > -1 && _this7.range.value < 3 && _this7.automatic && _this7.view === "list") {
          let value = _this7.range.value;
          value++;
          _this7.range.value = value;
          _this7.changeRatio(value);
        } else {
          _this7.automatic = false;
          _this7.loading = false;
          _this7.allUsersLoaded = true;
        }
        if (yield _this7.toast.getTop()) {
          _this7.toast.dismiss();
        }
      } catch (e) {
        console.error(e);
      }
      (_this7$slides = _this7.slides) === null || _this7$slides === void 0 || _this7$slides.update();
    })();
  }
  showProfile(id) {
    var _this8 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.ngZone.run(() => {
        _this8.router.navigate(["/profile", id]);
      });
    })();
  }
  editProfile() {
    this.nav.navigateRoot("/edit-profile");
  }
  notifications() {
    this.router.navigate(["/notification"]);
  }
  changeView() {
    var _this9 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.page = 0;
      _this9.users = [];
      _this9.allUsersLoaded = false;
      let radar_config = yield _this9.config.get("radar_config");
      if (_this9.view === "cards") {
        _this9.automatic = true;
        _this9.view = "list";
        _this9.ratio = _this9.getRatio(_this9.rangeValue);
        if (radar_config) {
          radar_config.view = _this9.view;
          radar_config.range = _this9.rangeValue;
        } else {
          radar_config = {
            view: _this9.view,
            range: _this9.rangeValue
          };
        }
      } else {
        _this9.view = "cards";
        _this9.ratio = -1;
        radar_config.view = _this9.view;
        radar_config.range = -1;
        yield _this9.utils.delay(500);
        _this9.initSwiper();
      }
      _this9.config.set("radar_config", radar_config);
      yield _this9.getRadarUsers();
    })();
  }
  changeRatio(value) {
    var _this10 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (value === 4 && !_this10.auth.isPremium()) {
        _this10.showPremium("radar");
        _this10.rangeValue = _this10.previousRangeValue;
        _this10.range.value = _this10.previousRangeValue;
        _this10.ratio = _this10.getRatio(_this10.previousRangeValue);
      } else {
        var _this10$users, _this10$radarlist;
        if (value === 4) {
          _this10.searchOptions.worldwide = true;
        }
        if (((_this10$users = _this10.users) === null || _this10$users === void 0 ? void 0 : _this10$users.length) < 15) {
          _this10.radarAdv();
        }
        _this10.loading = true;
        _this10.detectorRef.detectChanges();
        _this10.ratio = _this10.getRatio(value);
        let radar_config = yield _this10.config.get("radar_config");
        radar_config.view = _this10.view;
        radar_config.range = value;
        _this10.rangeValue = value;
        _this10.previousRangeValue = value;
        _this10.config.set("radar_config", radar_config);
        let message = "";
        if (_this10.ratio === 50) {
          message = _this10.i18n.translate("searching-people-nearby");
        } else if (_this10.ratio === 25000) {
          message = _this10.i18n.translate("searching-people-worldwide");
        } else {
          message = _this10.i18n.translate("searching-people-at") + _this10.ratio + _this10.i18n.translate("km");
        }
        (yield _this10.toast.create({
          message,
          position: "middle",
          color: "secondary"
        })).present();
        _this10.page = 0;
        _this10.users = [];
        _this10.allUsersLoaded = false;
        (_this10$radarlist = _this10.radarlist) === null || _this10$radarlist === void 0 || _this10$radarlist.scrollToTop(0);
        yield _this10.getRadarUsers();
      }
    })();
  }
  hideProfile(id) {
    var _this11 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const nextIndex = _this11.users.findIndex(u => u.id === id) + 1;
      const user = _this11.users[nextIndex];
      if (user && "username" in user) {
        _this11.user = user;
        const users = _this11.users;
        _this11.users = _this11.users.filter(u => u.id !== id);
        const toast = yield _this11.toast.create({
          message: _this11.i18n.translate("user-hidden"),
          duration: 3000,
          position: "bottom",
          buttons: [{
            text: _this11.i18n.translate("undo"),
            handler: () => {
              _this11.users = users;
            }
          }]
        });
        toast.present();
        const log = yield toast.onDidDismiss();
        if (log.role === "timeout") {
          _this11.userSvc.hide(id);
        }
      }
    })();
  }
  onScroll($event) {
    var _this12 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ($event && $event.detail && $event.detail.deltaY) {
        var _this12$users;
        _this12.hide = !($event.detail.deltaY < 0) && ((_this12$users = _this12.users) === null || _this12$users === void 0 ? void 0 : _this12$users.length) > 10 && $event.detail.scrollTop > 200;
      }
    })();
  }
  slide() {
    var _this13 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this13$users$index;
      yield new Promise(resolve => setTimeout(resolve, 100)); // Agrega un pequeño retraso
      let index = _this13.slides.activeIndex;
      if (_this13.tutorial) {
        index = index - 2;
      }
      const user = (_this13$users$index = _this13.users[index]) !== null && _this13$users$index !== void 0 ? _this13$users$index : _this13.users[index];
      if (user && "username" in user && _this13.tutorial) {
        _this13.detectorRef.detectChanges();
        _this13.userSvc.setTutorialConfig(false);
      }
      if (user && "username" in user) {
        var _this13$user, _this13$users;
        _this13.user = user;
        if ((_this13$user = _this13.user) !== null && _this13$user !== void 0 && _this13$user.id && !_this13.user.viewed) {
          var _this13$user2;
          _this13.userSvc.view((_this13$user2 = _this13.user) === null || _this13$user2 === void 0 ? void 0 : _this13$user2.id);
        }
        if (index >= ((_this13$users = _this13.users) === null || _this13$users === void 0 ? void 0 : _this13$users.length) - 10 && !_this13.loading && !_this13.allUsersLoaded) {
          yield _this13.getRadarUsers();
        }
        if (_this13.view === "cards" && _this13.page === 0 && _this13.user.distance >= 100) {
          _this13.radarAdv();
        }
      } else if (user) {
        const ad = user;
        _this13.adService.viewAd(ad);
      }
    })();
  }
  dragItem(event, id) {
    var _this14 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event.detail.ratio > 1.8) {
        _this14.hideProfile(id);
      } else if (event.detail.ratio < -1.8) {
        yield event.target.close();
        _this14.showProfile(id);
      }
    })();
  }
  getRatio(value) {
    switch (value) {
      case 0:
        return 50;
      case 1:
        return 100;
      case 2:
        return 500;
      case 3:
        return 1000;
      case 4:
        return 25000;
    }
  }
  radarAdv() {
    var _this15 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const radarAdv = yield _this15.config.get("radarAdv");
      if (!radarAdv) {
        const alert = yield _this15.alert.create({
          header: _this15.i18n.translate("few-people-nearby"),
          message: _this15.i18n.translate("help-us-grow"),
          buttons: [{
            text: _this15.i18n.translate("i-want-to-know-more"),
            handler: function () {
              var _ref3 = (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this15.nav.navigateRoot("/recruit");
              });
              return function handler() {
                return _ref3.apply(this, arguments);
              };
            }()
          }],
          cssClass: "round-alert"
        });
        _this15.config.set("radarAdv", true);
        yield alert.present();
      }
    })();
  }
  radarSearchChange(extended) {
    var _this16 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this16.searchOptionsChanged = true;
      _this16.extended = extended;
      let radar_config = yield _this16.config.get("radar_config");
      if (radar_config) {
        radar_config.extended = extended;
      } else {
        radar_config = {
          extended
        };
      }
      _this16.config.set("radar_config", radar_config);
    })();
  }
  radarSearchOptions(property, value) {
    var _this17 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _radar_config;
      _this17.searchOptionsChanged = true;
      let radar_config = yield _this17.config.get("radar_config");
      if ((_radar_config = radar_config) !== null && _radar_config !== void 0 && _radar_config.options) {
        radar_config.options = _this17.searchOptions;
      } else {
        radar_config = {
          options: _this17.searchOptions
        };
      }
      radar_config.options[property] = value;
      _this17.config.set("radar_config", radar_config);
      _this17.searchOptions = radar_config.options;
    })();
  }
  dismissFilterOptions() {
    var _this18 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this18.filterOptions = false;
      if (_this18.searchOptionsChanged) {
        _this18.searchOptionsChanged = false;
        _this18.loading = true;
        _this18.page = 0;
        _this18.users = [];
        _this18.allUsersLoaded = false;
        if (_this18.view === "list") {
          var _this18$radarlist;
          (_this18$radarlist = _this18.radarlist) === null || _this18$radarlist === void 0 || _this18$radarlist.scrollToTop(0);
          _this18.automatic = true;
        } else {
          _this18.slides.activeIndex = 0;
        }
        yield _this18.getRadarUsers();
      }
    })();
  }
  changeLocation(property, value) {
    var _this19 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _radar_config2;
      _this19.searchOptionsChanged = true;
      let radar_config = yield _this19.config.get("radar_config");
      if ((_radar_config2 = radar_config) !== null && _radar_config2 !== void 0 && _radar_config2.location) {
        radar_config.location = _this19.location;
      } else {
        radar_config = {
          location: _this19.location
        };
      }
      radar_config.location[property] = value;
      _this19.config.set("radar_config", radar_config);
      _this19.location = radar_config.location;
    })();
  }
  showPremium(topic = "default") {
    var _this20 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this20.modalController.create({
        component: _unlimited_unlimited_modal__WEBPACK_IMPORTED_MODULE_11__.UnlimitedModal,
        cssClass: "vertical-modal",
        componentProps: {
          topic
        }
      });
      yield modal.present();
    })();
  }
}
_RadarPage = RadarPage;
_RadarPage.ɵfac = function RadarPage_Factory(t) {
  return new (t || _RadarPage)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_ad_service__WEBPACK_IMPORTED_MODULE_10__.AdService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_12__.I18nService));
};
_RadarPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: _RadarPage,
  selectors: [["app-radar"]],
  viewQuery: function RadarPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.range = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.radarlist = _t.first);
    }
  },
  decls: 23,
  vars: 13,
  consts: [["radarlist", ""], ["slides", ""], ["adContainer", ""], ["range", ""], [1, "ion-no-border"], ["type", "indeterminate", 4, "ngIf"], ["type", "determinate", "color", "dark", 4, "ngIf"], ["mode", "md"], ["src", "/assets/icon/icon.svg"], ["slot", "end"], [3, "click", 4, "ngIf"], ["id", "filter-options"], ["slot", "icon-only", "name", "filter"], [3, "click"], ["name", "notifications-outline"], ["mode", "ios", "color", "primary", 4, "ngIf"], [3, "ionScroll", "scrollEvents"], ["id", "radar-container", 4, "ngIf"], ["style", "height: 100%", 4, "ngIf"], ["id", "radar-range", 3, "hide-background", 4, "ngIf"], ["trigger", "filter-options", "cssClass", "sheet-modal", 3, "didDismiss", "initialBreakpoint", "breakpoints", "isOpen"], ["visible", "true", 4, "ngIf"], ["type", "indeterminate"], ["type", "determinate", "color", "dark"], ["slot", "icon-only", 3, "name"], ["mode", "ios", "color", "primary"], ["id", "radar-container"], ["id", "radar-slide", "init", "false"], [4, "ngIf"], ["class", "tutorial", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["button", "", 1, "no-scroll"], [1, "background-image"], ["alt", "tutorial-1", 3, "src"], [1, "tutorial"], ["scrollbar", "true", "allow-touch-move", "false", "slides-per-view", "1", 1, "images-slide", 3, "click"], ["alt", "tutorial-2", 3, "src"], ["alt", "tutorial-3", 3, "src"], ["class", "no-scroll", "button", "", 4, "ngIf", "ngIfElse"], ["scrollbar", "true", "allow-touch-move", "false", "slides-per-view", "1", "modules", "Scrollbar", 1, "images-slide", 3, "click"], [1, "swiper-scrollbar"], ["default", "/assets/img/users/default.png", 3, "src", "alt"], ["button", "", 1, "info", 3, "click"], [1, "match", "full-center"], ["color", "secondary", 4, "ngIf"], [1, "name"], [1, "age"], ["class", "info-distance ion-no-padding", "lines", "none", 4, "ngIf"], [1, "description"], ["class", "tags", 4, "ngIf"], ["lines", "none", "button", "", 1, "more"], ["name", "chevron-down-outline"], ["color", "secondary"], ["lines", "none", 1, "info-distance", "ion-no-padding"], ["name", "location-sharp", "slot", "start", "color", "secondary", 1, "ion-margin-end"], [1, "tags"], ["color", "secondary", 4, "ngFor", "ngForOf"], [3, "ad"], [1, "full-center", "ion-padding"], ["name", "location"], ["shape", "round", 1, "ion-padding", 3, "click"], ["name", "filter", "slot", "start", "size", "small"], ["name", "list", "slot", "start", "size", "small"], [2, "height", "100%"], ["class", "full-center ion-padding", 4, "ngIf"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], ["slot", "start"], ["animated", ""], ["animated", "", 2, "width", "50%"], ["animated", "", 2, "width", "80%"], ["animated", "", 2, "width", "60%"], [3, "ionDrag", 4, "ngFor", "ngForOf"], ["threshold", "50%", "position", "bottom", 3, "ionInfinite"], ["loadingSpinner", "dots"], [3, "ionDrag"], ["side", "start"], ["slot", "icon-only", "name", "heart"], ["button", "", 3, "click"], ["default", "/assets/img/users/default.png", 3, "src"], ["slot", "end", 1, "match-list", "full-center"], ["side", "end"], ["color", "danger", "expandable", "", 3, "click"], ["slot", "icon-only", "name", "close-circle"], ["id", "radar-range"], ["mode", "ios", "min", "0", "max", "4", "step", "1", 3, "ionChange", "click", "snaps", "ticks", "debounce", "value"], ["slot", "start", "name", "radio"], ["slot", "end", "name", "globe"], ["id", "range-distance"], [1, "ion-padding"], ["lines", "full"], [1, "ion-text-center"], [3, "ngModelChange", "ngModel"], ["color", "dark"], ["class", "ion-text-wrap", 4, "ngIf"], ["aria-label", "Solo personas en l\u00EDnea", 3, "ngModelChange", "click", "ngModel", "disabled"], ["aria-label", "B\u00FAsqueda mundial", 3, "ngModelChange", "click", "ngModel", "disabled"], ["aria-label", "Ubicaci\u00F3n manual", 3, "ngModelChange", "click", "ngModel", "disabled"], [1, "ion-text-wrap"], ["lines", "none", 4, "ngIf"], ["lines", "full", 4, "ngIf"], ["aria-label", "Tipo de conexi\u00F3n", 3, "ngModelChange", "ngModel"], ["name", "earth", "slot", "start"], ["label", "Pa\u00EDs", "labelPlacement", "floating", "interface", "action-sheet", "debounce", "2000", 3, "ionChange", "cancelText", "placeholder", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "location-outline", "slot", "start"], ["label", "Municipio o C.P.", "labelPlacement", "floating", "clearOnEdit", "true", 3, "ionInput", "value"], [3, "value"], ["visible", "true"]],
  template: function RadarPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-header", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, RadarPage_ion_progress_bar_1_Template, 1, 0, "ion-progress-bar", 5)(2, RadarPage_ion_progress_bar_2_Template, 1, 0, "ion-progress-bar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "ion-toolbar")(4, "ion-title", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "frikiradar");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "ion-buttons", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, RadarPage_ion_button_9_Template, 2, 1, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "ion-tab-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function RadarPage_Template_ion_tab_button_click_12_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.notifications());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, RadarPage_ion_badge_14_Template, 2, 1, "ion-badge", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "ion-content", 16, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ionScroll", function RadarPage_Template_ion_content_ionScroll_15_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.onScroll($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, RadarPage_div_17_Template, 7, 4, "div", 17)(18, RadarPage_div_18_Template, 4, 3, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, RadarPage_ion_footer_19_Template, 15, 6, "ion-footer", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "ion-modal", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("didDismiss", function RadarPage_Template_ion_modal_didDismiss_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.dismissFilterOptions());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, RadarPage_ng_template_21_Template, 32, 26, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](22, RadarPage_ion_backdrop_22_Template, 1, 0, "ion-backdrop", 21);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.users);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.counters == null ? null : ctx.counters.notifications);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("scrollEvents", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.view === "cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.view === "list");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.view === "list");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("initialBreakpoint", 0.9)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](12, _c2))("isOpen", ctx.filterOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showBackdrop);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonBackdrop, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.TextValueAccessor, _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_13__.ImagePreloadDirective, _ad_ad_component__WEBPACK_IMPORTED_MODULE_14__.AdComponent, _nice_date_pipe__WEBPACK_IMPORTED_MODULE_15__.NiceDatePipe, _i18n_pipe__WEBPACK_IMPORTED_MODULE_16__.I18nPipe],
  styles: ["ion-toolbar[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 12px;\n}\n\n#radar-container[_ngcontent-%COMP%] {\n  display: unset;\n}\n\n#radar-slide[_ngcontent-%COMP%] {\n  display: unset;\n}\n#radar-slide[_ngcontent-%COMP%]     .swiper-slide.swiper-slide-prev, #radar-slide[_ngcontent-%COMP%]     .swiper-slide.swiper-slide-next {\n  opacity: 0.4;\n}\n\n.images-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.background-image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  bottom: 2px;\n  left: 0;\n  right: 0;\n  overflow-y: hidden;\n}\n.background-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover !important;\n  height: 100%;\n  width: 100%;\n}\n\nion-card[_ngcontent-%COMP%] {\n  --background: var(--ion-color-medium-dark);\n  overflow: auto;\n  border-radius: 50px;\n}\nion-card.md[_ngcontent-%COMP%] {\n  height: 97%;\n}\nion-card.ios[_ngcontent-%COMP%] {\n  height: 95%;\n}\n\n.images-slide[_ngcontent-%COMP%]::part(scrollbar) {\n  position: absolute;\n  left: 25px;\n  z-index: 50;\n  height: 5px;\n  width: 85%;\n  top: 10px;\n}\n\nion-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  z-index: 1;\n  background: rgba(0, 0, 0, 0);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(27%, rgba(0, 0, 0, 0.27)), color-stop(100%, rgb(19, 19, 19)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 27%, rgb(19, 19, 19) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#000000\", endColorstr=\"#131313\", GradientType=0 );\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.more[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  color: white;\n}\n\nion-card-header[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-bottom: 5px;\n}\nion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n}\nion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n}\nion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\nion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  min-height: 50%;\n  text-align: left;\n  width: 100%;\n  max-height: 250px;\n  overflow-y: auto;\n  scrollbar-width: none;\n}\nion-card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: white;\n  max-height: 45px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 15px;\n  white-space: initial;\n  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n}\nion-card-content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nion-card-content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  color: white;\n}\nion-card-content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.match[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  border: 2px solid white;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  font-weight: bold;\n  background-color: var(--ion-color-primary);\n  z-index: 1;\n  position: absolute;\n  right: 15px;\n  bottom: 5px;\n}\n\n.info-distance[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n}\n\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-color-dark);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar.md[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar.ios[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  position: relative;\n  left: 45px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #111111;\n  bottom: 25px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  width: 150px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.ios[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  max-height: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.md[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  max-height: 36px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  color: #bbbbbb;\n  white-space: initial;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .match-list[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  border: 2px solid var(--ion-color-light);\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-left: 10px;\n  background-color: var(--ion-color-primary);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]:first-child   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]:first-child   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]:first-child   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]:first-child   ion-item[_ngcontent-%COMP%]   .match-list[_ngcontent-%COMP%] {\n  background-color: white;\n  color: var(--ion-color-primary);\n  height: 60px;\n  width: 60px;\n  font-size: 13px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   .item-options-end[_ngcontent-%COMP%] {\n  background-color: #f04041;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n#radar-range[_ngcontent-%COMP%] {\n  color: white;\n  background: rgba(var(--ion-color-medium-dark-rgb), 0.98);\n  border-radius: 50px;\n  width: 97%;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  padding: 5px 15px;\n}\n#radar-range[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::part(tick), \n#radar-range[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::part(tick-active) {\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n}\n#radar-range[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], \n#radar-range[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], \n#radar-range[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  color: var(--ion-color-light) !important;\n}\n#radar-range[_ngcontent-%COMP%]   ion-range[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n  --knob-size: 20px;\n  --bar-background: white;\n  --bar-background-active: white;\n  --knob-background: var(--ion-color-primary);\n}\n#radar-range[_ngcontent-%COMP%]   #range-distance[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: end;\n  padding: 0;\n}\n#radar-range[_ngcontent-%COMP%]   #range-distance[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding-top: 0;\n  text-align: center;\n}\n\n#radar-range.md[_ngcontent-%COMP%] {\n  transition: max-height 0.5s;\n  max-height: 100px;\n}\n#radar-range.md.hide-background[_ngcontent-%COMP%] {\n  max-height: 0;\n  padding: 0 15px;\n}\n\nion-toggle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nion-toggle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\nion-toggle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nion-toggle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\napp-ad[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmFkYXIvcmFkYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGO0FBS007RUFFRSxZQUFBO0FBSlI7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUEo7O0FBV0E7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVJGO0FBVUU7RUFDRSxXQUFBO0FBUko7QUFXRTtFQUNFLFdBQUE7QUFUSjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFWRjs7QUFhQTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQU9BLDhKQUFBO0VBeUJBLDBHQUFBO0VBTUEsb0hBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQXpDRjs7QUE0Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXpDRjs7QUE0Q0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBekNGO0FBMkNFO0VBQ0UsWUFBQTtFQUNBLDRDQUFBO0FBekNKO0FBMkNJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUF6Q047QUE0Q0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBMUNOO0FBNkNJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUEzQ047O0FBZ0RBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQTdDRjtBQStDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtBQTdDSjtBQWdERTtFQUlFLGdCQUFBO0FBakRKO0FBOENJO0VBQ0UsWUFBQTtBQTVDTjtBQStDSTtFQUNFLGNBQUE7QUE3Q047O0FBa0RBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUEvQ0Y7O0FBa0RBO0VBQ0UsWUFBQTtFQUNBLDRDQUFBO0FBL0NGOztBQW9ESTtFQUNFLG1DQUFBO0FBakROO0FBb0RRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFsRFY7QUFxRFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQW5EVjtBQXNEUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBcERWO0FBd0RNO0VBQ0UsWUFBQTtBQXREUjtBQXVEUTtFQUNFLGVBQUE7QUFyRFY7QUF3RFE7RUFDRSxnQkFBQTtBQXREVjtBQXlEUTtFQUNFLGdCQUFBO0FBdkRWO0FBMERRO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUF6RFY7QUE2RE07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQTNEUjtBQStESTtFQUNFLHNDQUFBO0FBN0ROO0FBOERNOztFQUVFLHVCQUFBO0FBNURSO0FBK0RNO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQTdEUjtBQWlFSTtFQUNFLHlCQUFBO0FBL0ROO0FBa0VJO0VBQ0UsWUFBQTtBQWhFTjs7QUFxRUE7RUFDRSxZQUFBO0VBQ0Esd0RBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQWxFRjtBQW9FRTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbEVKO0FBcUVFOzs7RUFHRSx3Q0FBQTtBQW5FSjtBQXNFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0FBcEVKO0FBdUVFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBckVKO0FBdUVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBckVOOztBQTBFQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7QUF2RUY7QUF3RUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQXRFSjs7QUEyRUU7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBeEVKO0FBMkVFO0VBQ0UsZUFBQTtBQXpFSjtBQTRFRTtFQUNFLGVBQUE7QUExRUo7O0FBOEVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUEzRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIGlvbi1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbn1cblxuI3JhZGFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuXG4jcmFkYXItc2xpZGUge1xuICBkaXNwbGF5OiB1bnNldDtcblxuICA6Om5nLWRlZXAge1xuICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgJi5zd2lwZXItc2xpZGUtcHJldixcbiAgICAgICYuc3dpcGVyLXNsaWRlLW5leHQge1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5pbWFnZXMtc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuXG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyayk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuXG4gICYubWQge1xuICAgIGhlaWdodDogOTclO1xuICB9XG5cbiAgJi5pb3Mge1xuICAgIGhlaWdodDogOTUlO1xuICB9XG59XG5cbi5pbWFnZXMtc2xpZGU6OnBhcnQoc2Nyb2xsYmFyKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjVweDtcbiAgei1pbmRleDogNTA7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogODUlO1xuICB0b3A6IDEwcHg7XG59XG5cbmlvbi1jYXJkIC5pbmZvIHtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoMCwgMCwgMCwgMCkgMCUsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjI3KSAyNyUsXG4gICAgcmdiYSgxOSwgMTksIDE5LCAxKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgbGVmdCB0b3AsXG4gICAgbGVmdCBib3R0b20sXG4gICAgY29sb3Itc3RvcCgwJSwgcmdiYSgwLCAwLCAwLCAwKSksXG4gICAgY29sb3Itc3RvcCgyNyUsIHJnYmEoMCwgMCwgMCwgMC4yNykpLFxuICAgIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgxOSwgMTksIDE5LCAxKSlcbiAgKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoMCwgMCwgMCwgMCkgMCUsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjI3KSAyNyUsXG4gICAgcmdiYSgxOSwgMTksIDE5LCAxKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChcbiAgICB0b3AsXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjcpIDI3JSxcbiAgICByZ2JhKDE5LCAxOSwgMTksIDEpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChcbiAgICB0b3AsXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjcpIDI3JSxcbiAgICByZ2JhKDE5LCAxOSwgMTksIDEpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGJvdHRvbSxcbiAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yNykgMjclLFxuICAgIHJnYmEoMTksIDE5LCAxOSwgMSkgMTAwJVxuICApO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMCcsIGVuZENvbG9yc3RyPScjMTMxMzEzJywgR3JhZGllbnRUeXBlPTAgKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ubW9yZSBpb24taWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcblxuICAgIGlvbi1iYWRnZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5hZ2Uge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogNTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB9XG5cbiAgLnRhZ3Mge1xuICAgIGlvbi10ZXh0IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBpb24tY2hpcCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cblxuLm1hdGNoIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogNXB4O1xufVxuXG4uaW5mby1kaXN0YW5jZSBpb24tdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3QgaW9uLWl0ZW0tc2xpZGluZyB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAmLm1kIHtcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlvcyB7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbGVmdDogNDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMTExMTE7XG4gICAgICAgICAgYm90dG9tOiAyNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaW9zIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWQgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiAjYmJiYmJiO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tYXRjaC1saXN0IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGgyLFxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAubWF0Y2gtbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tb3B0aW9ucy1lbmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNDA0MTtcbiAgICB9XG5cbiAgICBpb24taXRlbS1vcHRpb24gaW9uLWljb24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4jcmFkYXItcmFuZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1kYXJrLXJnYiksIDAuOTgpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogOTclO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuXG4gIDo6cGFydCh0aWNrKSxcbiAgOjpwYXJ0KHRpY2stYWN0aXZlKSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICBpb24tbGFiZWwsXG4gIGlvbi1pY29uLFxuICBpb24tY29sIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXJhbmdlIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLWtub2Itc2l6ZTogMjBweDtcbiAgICAtLWJhci1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogd2hpdGU7XG4gICAgLS1rbm9iLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gICNyYW5nZS1kaXN0YW5jZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuI3JhZGFyLXJhbmdlLm1kIHtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgJi5oaWRlLWJhY2tncm91bmQge1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG59XG5cbmlvbi10b2dnbGUge1xuICBwLFxuICBoMiB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuYXBwLWFkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 92304:
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeolocationService: () => (/* binding */ GeolocationService)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 78321);
/* harmony import */ var _radar_request_geolocation_modal_request_geolocation_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../radar/request-geolocation-modal/request-geolocation.modal */ 51013);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ 43696);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ 44796);
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 21507);

var _GeolocationService;











class GeolocationService {
  constructor(modalController, config, toastController, auth, i18n) {
    this.modalController = modalController;
    this.config = config;
    this.toastController = toastController;
    this.auth = auth;
    this.i18n = i18n;
    this.notifications = [];
  }
  requestPermission() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalController.create({
        component: _radar_request_geolocation_modal_request_geolocation_modal__WEBPACK_IMPORTED_MODULE_2__.RequestGeolocationModal,
        backdropDismiss: false
      });
      yield modal.present();
      return yield modal.onDidDismiss();
    })();
  }
  forcePermission() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _radar_request_geolocation_modal_request_geolocation_modal__WEBPACK_IMPORTED_MODULE_2__.RequestGeolocationModal,
        componentProps: {
          view: "force"
        },
        backdropDismiss: false
      });
      yield modal.present();
      return yield modal.onDidDismiss();
    })();
  }
  getGeolocation() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const geoconfig = yield _this3.config.get("geolocation");
      if (geoconfig === true) {
        return yield _this3.getCoordinates();
      } else {
        yield _this3.requestPermission();
        return yield _this3.getCoordinates();
      }
    })();
  }
  getCoordinates() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        (yield _this4.toastController.create({
          message: _this4.i18n.translate("getting-your-location"),
          position: "middle",
          color: "secondary"
        })).present();
        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 15000
        });
        const longitude = coordinates.coords.longitude;
        const latitude = coordinates.coords.latitude;
        _this4.config.set("geolocation", true);
        _this4.toastController.dismiss();
        return {
          longitude,
          latitude
        };
      } catch (e) {
        let data = {};
        const geoconfig = yield _this4.config.get("geolocation");
        // falla la geolocalización pero tiene activada la manual, entonces se usa la manual
        const user = _this4.auth.currentUserValue;
        if (geoconfig === true && user.city && user.country) {
          const user = _this4.auth.currentUserValue;
          return {
            city: user.city,
            country: user.country
          };
        } else {
          _this4.config.set("geolocation", false);
          _this4.toastController.dismiss();
          const res = yield _this4.forcePermission();
          data = res.data;
          if (data.city && data.country) {
            _this4.config.set("geolocation", true);
            _this4.toastController.dismiss();
            return data;
          }
        }
        return yield _this4.getCoordinates();
      }
    })();
  }
}
_GeolocationService = GeolocationService;
_GeolocationService.ɵfac = function GeolocationService_Factory(t) {
  return new (t || _GeolocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService));
};
_GeolocationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _GeolocationService,
  factory: _GeolocationService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 35314:
/*!***************************************************!*\
  !*** ./node_modules/swiper-new/modules/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ 17983);
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ 5577);
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ 13704);
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ 6144);
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ 70102);
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ 42916);
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ 3715);
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ 31407);
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ 11334);
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ 49210);
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ 71734);
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ 76765);
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ 97089);
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ 81277);
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ 84604);
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ 27534);
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ 28645);
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ 37968);
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ 70973);
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ 54811);
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ 36335);
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ 10317);
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ 5967);
























/***/ })

}]);
//# sourceMappingURL=src_app_radar_radar_module_ts.js.map