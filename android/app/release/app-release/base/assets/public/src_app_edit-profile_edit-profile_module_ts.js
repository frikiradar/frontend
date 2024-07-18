"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-profile_edit-profile_module_ts"],{

/***/ 56845:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfilePageModule: () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 90358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _EditProfilePageModule;








const routes = [{
  path: "",
  component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage
}];
class EditProfilePageModule {}
_EditProfilePageModule = EditProfilePageModule;
_EditProfilePageModule.ɵfac = function EditProfilePageModule_Factory(t) {
  return new (t || _EditProfilePageModule)();
};
_EditProfilePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _EditProfilePageModule
});
_EditProfilePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditProfilePageModule, {
    declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 90358:
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditProfilePage: () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 3920);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/keyboard */ 90004);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation.service */ 99260);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 29885);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/auth.service */ 44796);
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/tag.service */ 46538);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/utils.service */ 54171);
/* harmony import */ var _rules_rules_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rules/rules.page */ 39312);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/config.service */ 43696);
/* harmony import */ var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/haptics */ 47115);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/image-preload.directive */ 89024);
/* harmony import */ var _nice_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../nice-date.pipe */ 45982);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _EditProfilePage;





























const _c0 = ["segment"];
const _c1 = ["games"];
const _c2 = ["films"];
const _c3 = ["books"];
const _c4 = ["music"];
const _c5 = ["food"];
const _c6 = ["role"];
const _c7 = ["imageInput"];
const _c8 = () => [0, 0.4, 0.6];
const _c9 = () => [0, 0.6];
const _c10 = () => [];
function EditProfilePage_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ion_button_7_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.openPictureSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function EditProfilePage_ion_list_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-skeleton-text", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-skeleton-text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function EditProfilePage_ion_list_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-list")(1, "ion-item", 26)(2, "ion-label")(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-skeleton-text", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "ion-skeleton-text", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-item", 26)(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, EditProfilePage_ion_list_14_span_9_Template, 5, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c10).constructor(20));
  }
}
function EditProfilePage_div_15_swiper_slide_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "swiper-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", image_r6, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function EditProfilePage_div_15_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ion-datetime", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "date");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate3"]("max", "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](1, 6, ctx_r2.today, "y") - 18, "-", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 9, ctx_r2.today, "MM"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 12, ctx_r2.today, "dd"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("locale", ctx_r2.user.language)("first-day-of-week", ctx_r2.user.language == "es" ? 1 : 0);
  }
}
function EditProfilePage_div_15_ion_select_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const language_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", language_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, language_r7.name));
  }
}
function EditProfilePage_div_15_ion_select_option_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gender_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", gender_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, gender_r8), " ");
  }
}
function EditProfilePage_div_15_ion_select_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const orientation_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", orientation_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, orientation_r9), "");
  }
}
function EditProfilePage_div_15_ion_select_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pronoun_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", pronoun_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, pronoun_r10), " ");
  }
}
function EditProfilePage_div_15_ion_select_option_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", type_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, type_r11), " ");
  }
}
function EditProfilePage_div_15_ion_select_option_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", status_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, status_r12), " ");
  }
}
function EditProfilePage_div_15_ion_select_option_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const likegender_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", likegender_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, likegender_r13), " ");
  }
}
function EditProfilePage_div_15_ion_select_option_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const connection_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", connection_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, connection_r14), "");
  }
}
function EditProfilePage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "swiper-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_div_15_Template_swiper_container_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.tap($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "swiper-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, EditProfilePage_div_15_swiper_slide_4_Template, 2, 1, "swiper-slide", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "form", 48)(6, "ion-list")(7, "ion-item-group")(8, "ion-item-divider", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-label")(11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "ion-icon", 50)(16, "ion-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](17, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "ion-item", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "ion-icon", 53)(20, "ion-textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "ion-icon", 55)(24, "ion-input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](25, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "ion-item", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](30, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](33, "niceDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "ion-modal", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, EditProfilePage_div_15_ng_template_35_Template, 4, 15, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "ion-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](39, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](40, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, EditProfilePage_div_15_ion_select_option_41_Template, 3, 4, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "ion-item-group")(43, "ion-item-divider", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](44, "ion-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "ion-label")(46, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](48, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](51, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "ion-item")(53, "ion-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](54, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](55, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](56, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, EditProfilePage_div_15_ion_select_option_57_Template, 3, 4, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "ion-item")(59, "ion-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](60, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](61, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](62, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, EditProfilePage_div_15_ion_select_option_63_Template, 3, 4, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "ion-item")(65, "ion-select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](66, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](67, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](68, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "ion-select-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](71, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](72, EditProfilePage_div_15_ion_select_option_72_Template, 3, 4, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "ion-item")(74, "ion-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](75, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](76, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](77, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "ion-select-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](80, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](81, EditProfilePage_div_15_ion_select_option_81_Template, 3, 4, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "ion-item")(83, "ion-select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](84, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](85, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](86, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "ion-select-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](89, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](90, EditProfilePage_div_15_ion_select_option_90_Template, 3, 4, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "ion-item-group")(92, "ion-item-divider", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](93, "ion-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "ion-label")(95, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](97, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](100, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "ion-item")(102, "ion-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](103, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](104, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](105, EditProfilePage_div_15_ion_select_option_105_Template, 3, 4, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](106, "ion-item", 72)(107, "ion-input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](108, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](109, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_div_15_Template_ion_input_click_107_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.openPicker("minage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "ion-input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](111, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](112, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_div_15_Template_ion_input_click_110_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.openPicker("maxage"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](113, "ion-item")(114, "ion-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](115, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](116, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](117, EditProfilePage_div_15_ion_select_option_117_Template, 3, 4, "ion-select-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r2.user == null ? null : ctx_r2.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.user == null ? null : ctx_r2.user.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r2.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 55, "mi-informacin-personal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](17, 57, "name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("autoGrow", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](21, 59, "mensaje-presentacin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("autoGrow", true)("counter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](25, 61, "vivo-en"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("autoGrow", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](30, 63, "fecha-nacimiento"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](33, 65, ctx_r2.profileForm.get("birthday").value));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](39, 67, "idiomas-que-hablo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](40, 69, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](48, 71, "informacin-radar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](51, 73, "informacin-necesaria-para-que-usuarios"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](54, 75, "identidad-gnero"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](55, 77, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](56, 79, "selecciona-uno"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.userSvc.getGenders());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](60, 81, "orientacion-sexual"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](61, 83, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](62, 85, "selecciona-uno"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.userSvc.getOrientations());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](66, 87, "pronombre"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](67, 89, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](68, 91, "selecciona-uno"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](71, 93, "sin-indicar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.userSvc.getPronouns());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](75, 95, "tipo-de-relacion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](76, 97, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](77, 99, "selecciona-uno"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](80, 101, "sin-indicar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.userSvc.getRelationships());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](84, 103, "estado"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](85, 105, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](86, 107, "selecciona-uno"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](89, 109, "sin-indicar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.userSvc.getStatus());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](97, 111, "estoy-buscando"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](100, 113, "elige-tipo-persona-que-ests"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](103, 115, "identidad-gnero"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](104, 117, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.userSvc.getGenders());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("label", "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](108, 119, "edad-desde"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](109, 121, "aos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("label", "- ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](111, 123, "edad-hasta"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](112, 125, "aos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](115, 127, "tipo-conexin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](116, 129, "cancelar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.userSvc.getConnections());
  }
}
function EditProfilePage_ion_chip_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-chip", 78)(1, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ion_chip_36_Template_ion_icon_click_1_listener() {
      const tag_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.removeTag(tag_r17.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](tag_r17.name);
  }
}
function EditProfilePage_ion_chip_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-chip", 78)(1, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ion_chip_46_Template_ion_icon_click_1_listener() {
      const tag_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.removeTag(tag_r20.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](tag_r20.name);
  }
}
function EditProfilePage_ion_chip_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-chip", 78)(1, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ion_chip_56_Template_ion_icon_click_1_listener() {
      const tag_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.removeTag(tag_r23.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](tag_r23.name);
  }
}
function EditProfilePage_ion_chip_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-chip", 78)(1, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ion_chip_66_Template_ion_icon_click_1_listener() {
      const tag_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.removeTag(tag_r26.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](tag_r26.name);
  }
}
function EditProfilePage_ion_chip_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-chip", 78)(1, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ion_chip_76_Template_ion_icon_click_1_listener() {
      const tag_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.removeTag(tag_r29.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](tag_r29.name);
  }
}
function EditProfilePage_ion_chip_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-chip", 78)(1, "ion-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ion_chip_86_Template_ion_icon_click_1_listener() {
      const tag_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.removeTag(tag_r32.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](tag_r32.name);
  }
}
function EditProfilePage_ion_footer_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-footer")(1, "ion-button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ion_footer_87_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.submitProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r2.profileForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "guardar-salir"), " ");
  }
}
function EditProfilePage_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-content", 81)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-list")(5, "ion-item", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ng_template_89_Template_ion_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.selectPictureFromCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "ion-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-item", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ng_template_89_Template_ion_item_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.selectPictureFromGallery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, "consejo-recuerda-que-subir-fotos"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 5, "desde-cmara"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 7, "desde-galera"));
  }
}
function EditProfilePage_ng_template_91_ion_item_5_ion_thumbnail_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-thumbnail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", tag_r36.image, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function EditProfilePage_ng_template_91_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_ng_template_91_ion_item_5_Template_ion_item_click_0_listener() {
      const tag_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r35).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.addTag(tag_r36.name, tag_r36.category));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, EditProfilePage_ng_template_91_ion_item_5_ion_thumbnail_1_Template, 2, 1, "ion-thumbnail", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-badge", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", tag_r36.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](tag_r36.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](tag_r36.total);
  }
}
function EditProfilePage_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-content", 81)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, EditProfilePage_ng_template_91_ion_item_5_Template, 6, 3, "ion-item", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "elige-una-sugerencias-sigue-escribiendo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.suggestedTags);
  }
}
class EditProfilePage {
  get minage() {
    return this.profileForm.get("minage");
  }
  get maxage() {
    return this.profileForm.get("maxage");
  }
  constructor(fb, userSvc, tagSvc, auth, picker, sheet, utils, toast, nav, modalController, config, i18n) {
    this.fb = fb;
    this.userSvc = userSvc;
    this.tagSvc = tagSvc;
    this.auth = auth;
    this.picker = picker;
    this.sheet = sheet;
    this.utils = utils;
    this.toast = toast;
    this.nav = nav;
    this.modalController = modalController;
    this.config = config;
    this.i18n = i18n;
    this.sliderOpts = {
      keyboard: true,
      grabCursor: true,
      centeredSlides: true
    };
    this.showToolbar = false;
    this.showFooter = true;
    this.today = Date.now();
    this.tags = [];
    this.openSuggestions = false;
    this.loading = true;
    this.isPictureSheetOpen = false;
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this.languages = this.userSvc.getLanguages();
    this.profileForm = this.fb.group({
      name: [""],
      description: [""],
      location: [""],
      birthday: [""],
      languages: [""],
      gender: [""],
      orientation: [""],
      pronoun: [""],
      relationship: [""],
      status: [""],
      lovegender: [""],
      minage: [""],
      maxage: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({
        value: "",
        disabled: true
      }),
      connection: [""],
      tags: [""]
    });
    if ((0,_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.isPlatform)("capacitor")) {
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.addListener("keyboardDidShow", () => {
        this.showFooter = false;
      });
      _capacitor_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.addListener("keyboardWillHide", () => {
        this.showFooter = true;
      });
    }
  }
  ngOnInit() {
    this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(800) // espera 300ms después de la última emisión antes de llamar a performSearch
    ).subscribe(({
      query,
      category
    }) => this.performSearch(query, category));
  }
  ionViewWillEnter() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = yield _this.auth.getAuthUser();
      _this.profileForm.patchValue({
        name: _this.user.name,
        description: _this.user.description,
        location: _this.user.location,
        birthday: _this.user.birthday.split("T")[0],
        languages: _this.user.languages,
        gender: _this.user.gender,
        orientation: _this.user.orientation,
        pronoun: _this.user.pronoun,
        relationship: _this.user.relationship,
        status: _this.user.status,
        lovegender: _this.user.lovegender,
        minage: _this.user.minage,
        maxage: _this.user.maxage,
        connection: _this.user.connection
      });
      _this.tags = _this.user.tags ? _this.user.tags : [];
      if (_this.minage.value) {
        _this.profileForm.get("maxage").enable();
      }
      _this.loading = false;
      const rules = yield _this.config.get("rules");
      if (!rules) {
        const modal = yield _this.modalController.create({
          component: _rules_rules_page__WEBPACK_IMPORTED_MODULE_7__.RulesPage,
          cssClass: "vertical-modal",
          backdropDismiss: false
        });
        return yield modal.present();
      }
      yield _this.utils.delay(500);
      _this.initSwiper();
    })();
  }
  initSwiper() {
    const swiperContainer = document.querySelector("#swiper-edit-profile");
    Object.assign(swiperContainer, this.sliderOpts);
    this.slides = swiperContainer.swiper;
    this.slides.on("slideChange", /*#__PURE__*/(0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_9__.Haptics.vibrate({
        duration: 10
      });
    }));
  }
  tap(event) {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event.x > screen.width / 2) {
        _this2.slides.slideNext();
      } else {
        _this2.slides.slidePrev();
      }
    })();
  }
  submitProfile() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.user = {
        ..._this3.user,
        ..._this3.profileForm.getRawValue(),
        ...{
          tags: _this3.tags
        }
      };
      _this3.user.birthday = _this3.user.birthday.split("T")[0];
      try {
        _this3.user = yield _this3.userSvc.updateUser(_this3.user);
        _this3.tags = _this3.user.tags;
        (yield _this3.toast.create({
          message: _this3.i18n.translate("changes-saved-successfully"),
          duration: 5000,
          position: "middle"
        })).present();
      } catch (e) {
        (yield _this3.toast.create({
          message: _this3.i18n.translate("error-saving-changes") + e,
          duration: 5000,
          color: "danger",
          position: "middle"
        })).present();
      }
      _this3.back();
    })();
  }
  openPicker(typeage) {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let ages = [];
      let min = 18;
      const max = 65;
      if (typeage === "maxage") {
        min = _this4.minage.value;
      }
      for (let i = min; i <= max; i++) {
        ages = [...ages, {
          value: i,
          text: `${i}`
        }];
      }
      const picker = yield _this4.picker.create({
        buttons: [{
          text: "Hecho",
          handler: data => {
            if (typeage === "minage") {
              _this4.profileForm.get("maxage").enable();
              if (data.age.value > _this4.maxage.value) {
                _this4.profileForm.get("maxage").setValue(data.age.value);
              }
            }
            _this4.profileForm.get(typeage).setValue(data.age.value);
          }
        }],
        columns: [{
          name: "age",
          options: ages
        }]
      });
      yield picker.present();
    })();
  }
  searchTag(query, category) {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.searchSubject.next({
        query,
        category
      });
    })();
  }
  performSearch(query, category) {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.openSuggestions = false;
      if (query) {
        _this6.suggestedTags = yield _this6.tagSvc.searchTag(query, category);
        if (_this6.suggestedTags.length > 0) {
          _this6.openSuggestions = true;
        }
      }
    })();
  }
  addTag(name, catName) {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.openSuggestions = false;
      if (name && !_this7.tags.some(t => t.name === name && t.category.name === catName)) {
        const tags = name.split(",").map(t => {
          return {
            name: t.trim(),
            category: {
              name: catName
            }
          };
        });
        tags.forEach( /*#__PURE__*/function () {
          var _ref2 = (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (t) {
            try {
              const tag = yield _this7.tagSvc.addTag(t.name, t.category.name);
              _this7.tags = [...[tag], ..._this7.tags];
              _this7.user.tags = _this7.tags;
              _this7.auth.setAuthUser(_this7.user);
            } catch (e) {
              (yield _this7.toast.create({
                message: _this7.i18n.translate("error-adding-tag") + t.name,
                color: "danger",
                duration: 5000,
                position: "middle"
              })).present();
              console.error(e);
            }
          });
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
      _this7.role.value = _this7.music.value = _this7.games.value = _this7.films.value = _this7.books.value = _this7.food.value = "";
    })();
  }
  removeTag(id) {
    var _this8 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.tags.splice(_this8.tags.findIndex(t => t.id === id), 1);
      try {
        yield _this8.tagSvc.removeTag(id);
      } catch (e) {
        (yield _this8.toast.create({
          message: _this8.i18n.translate("error-removing-tag"),
          color: "danger",
          duration: 5000,
          position: "middle"
        })).present();
        console.error(e);
      }
    })();
  }
  getTagsCategory(category) {
    if (!this.tags) {
      return;
    }
    return this.tags.filter(t => t.category.name === category);
  }
  selectPictureFromCamera() {
    var _this9 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.closePictureSheet();
      if ((0,_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.isPlatform)("capacitor")) {
        const avatar = yield _this9.utils.takePicture("camera", true, "avatar", false);
        _this9.uploadPicture(avatar);
      } else {
        const avatar = yield _this9.utils.webcamImage("avatar", true);
        if (!avatar || typeof avatar === "boolean") {
          return false;
        }
        _this9.uploadPicture(avatar);
      }
    })();
  }
  selectPictureFromGallery() {
    var _this10 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.closePictureSheet();
      if ((0,_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.isPlatform)("capacitor")) {
        const avatar = yield _this10.utils.takePicture("gallery", true, "avatar", false);
        if (!avatar || typeof avatar == "string") {
          return false;
        }
        _this10.uploadPicture(avatar);
      } else {
        _this10.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
      }
    })();
  }
  openPictureSheet() {
    this.isPictureSheetOpen = true;
  }
  closePictureSheet() {
    this.isPictureSheetOpen = false;
  }
  cropImagebyEvent(event) {
    var _this11 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const src = yield _this11.utils.cropImage(event);
        if (typeof src == "string") {
          const imageFile = yield _this11.utils.urltoBlob(src);
          _this11.uploadPicture(imageFile);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }
  uploadPicture(avatar) {
    var _this12 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this12.userSvc.uploadAvatar(avatar);
        _this12.auth.setAuthUser(user);
        _this12.user = _this12.auth.currentUserValue;
        (yield _this12.toast.create({
          message: _this12.i18n.translate("image-updated-successfully"),
          duration: 5000,
          position: "middle"
        })).present();
      } catch (e) {
        (yield _this12.toast.create({
          message: _this12.i18n.translate("error-updating-image"),
          duration: 5000,
          position: "middle"
        })).present();
        console.error(e);
      }
    })();
  }
  setAvatar() {
    var _this13 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this13.slides.activeIndex > 0) {
        const image = _this13.user.images[_this13.slides.activeIndex - 1];
        const user = yield _this13.userSvc.setAvatar(image);
        _this13.auth.setAuthUser(user);
        _this13.user = _this13.auth.currentUserValue;
        _this13.slides.slideTo(0);
      }
    })();
  }
  deleteImage() {
    var _this14 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let image = undefined;
      if (_this14.slides.activeIndex === 0) {
        image = _this14.user.avatar;
      } else {
        image = _this14.user.images[_this14.slides.activeIndex - 1];
      }
      const user = yield _this14.userSvc.deleteAvatar(image);
      _this14.auth.setAuthUser(user);
      _this14.user = _this14.auth.currentUserValue;
      _this14.slides.update();
      _this14.slides.slideTo(0);
    })();
  }
  back() {
    this.nav.back();
  }
}
_EditProfilePage = EditProfilePage;
_EditProfilePage.ɵfac = function EditProfilePage_Factory(t) {
  return new (t || _EditProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_tag_service__WEBPACK_IMPORTED_MODULE_5__.TagService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.PickerController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_10__.I18nService));
};
_EditProfilePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: _EditProfilePage,
  selectors: [["app-edit-profile"]],
  viewQuery: function EditProfilePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c5, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c7, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.segment = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.games = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.films = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.books = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.music = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.food = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.role = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.imageInput = _t.first);
    }
  },
  decls: 92,
  vars: 48,
  consts: [["imageInput", ""], ["games", ""], ["films", ""], ["books", ""], ["role", ""], ["music", ""], ["food", ""], [3, "fullscreen"], [1, "ion-no-border"], ["slot", "start"], [1, "back", 3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["slot", "end"], [3, "click", 4, "ngIf"], [3, "click"], ["slot", "icon-only", "name", "trash-outline"], ["slot", "icon-only", "name", "star-outline"], ["type", "file", "accept", "image/*", "name", "avatar", 2, "display", "none", 3, "change", "click"], [4, "ngIf"], ["color", "primary"], ["name", "pricetags", "slot", "start"], [1, "ion-text-wrap"], ["lines", "full", 1, "category-header"], ["slot", "start", "name", "game-controller"], ["aria-label", "Videojuegos favoritos", "clearInput", "true", "autocapitalize", "words", "spellcheck", "false", 3, "ionInput", "keyup.enter", "placeholder"], ["name", "add-circle", "slot", "end", 3, "click"], ["lines", "none"], ["color", "secondary", 4, "ngFor", "ngForOf"], ["name", "film", "slot", "start"], ["aria-label", "Pel\u00EDculas, series o animes favoritos", "clearInput", "true", "autocapitalize", "words", 3, "ionInput", "keyup.enter", "placeholder", "debounce"], ["name", "book", "slot", "start"], ["aria-label", "C\u00F3mics, mangas o libros", "clearInput", "true", "autocapitalize", "words", 3, "ionInput", "keyup.enter", "placeholder", "debounce"], ["name", "dice", "slot", "start"], ["aria-label", "Juegos de mesa, rol y cartas frikis", "clearInput", "true", "autocapitalize", "words", 3, "ionInput", "keyup.enter", "placeholder", "debounce"], ["name", "headset", "slot", "start"], ["aria-label", "M\u00FAsica, artistas o canciones favoritas", "clearInput", "true", "autocapitalize", "words", 3, "ionInput", "keyup.enter", "placeholder", "debounce"], ["src", "/assets/icon/ramen_dining.svg"], ["aria-label", "Comida, bebida o restaurantes favoritos", "clearInput", "true", "autocapitalize", "words", 3, "ionInput", "keyup.enter", "placeholder", "debounce"], ["cssClass", "sheet-modal", 3, "ionModalDidDismiss", "initialBreakpoint", "breakpoints", "isOpen"], ["cssClass", "sheet-modal", "id", "suggested-tags-sheet", 3, "breakpoints", "initialBreakpoint", "isOpen"], ["slot", "icon-only", "src", "/assets/icon/add_a_photo_white_24dp.svg", "size", "large"], ["animated", "", 2, "width", "75%"], ["animated", "", 2, "width", "50%"], [4, "ngFor", "ngForOf"], ["animated", "", 2, "width", "100%"], ["animated", "", 2, "width", "95%"], ["id", "swiper-edit-profile", "scrollbar", "true", "modules", "Scrollbar", 3, "click"], ["default", "/assets/img/users/default.png", 3, "src"], [3, "formGroup"], ["name", "person-circle", "slot", "start"], ["name", "person", "slot", "start"], ["labelPlacement", "floating", "formControlName", "name", "autocapitalize", "on", 3, "label", "autoGrow"], ["id", "description", "lines", "none"], ["name", "document-text", "slot", "start"], ["labelPlacement", "floating", "formControlName", "description", "autocapitalize", "on", "maxlength", "500", 3, "label", "autoGrow", "counter"], ["name", "home", "slot", "start"], ["labelPlacement", "floating", "formControlName", "location", "autocapitalize", "on", 3, "label", "autoGrow"], ["button", "", "id", "open-calendar"], ["name", "calendar", "slot", "start"], ["trigger", "open-calendar", "cssClass", "date-modal"], ["name", "language", "slot", "start"], ["labelPlacement", "floating", "placeholder", "Selecciona", "formControlName", "languages", "multiple", "", 3, "label", "cancelText"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "location", "slot", "start"], ["labelPlacement", "floating", "interface", "action-sheet", "formControlName", "gender", 3, "label", "cancelText", "placeholder"], ["labelPlacement", "floating", "interface", "action-sheet", "formControlName", "orientation", 3, "label", "cancelText", "placeholder"], ["labelPlacement", "floating", "interface", "action-sheet", "formControlName", "pronoun", "value", "", 3, "label", "cancelText", "placeholder"], ["value", ""], ["labelPlacement", "floating", "interface", "action-sheet", "formControlName", "relationship", "value", "", 3, "label", "cancelText", "placeholder"], ["labelPlacement", "floating", "interface", "action-sheet", "formControlName", "status", "value", "", 3, "label", "cancelText", "placeholder"], ["name", "search", "slot", "start"], ["labelPlacement", "floating", "placeholder", "Selecciona", "formControlName", "lovegender", "multiple", "", 3, "label", "cancelText"], ["lines", "full", 1, "ages"], ["slot", "start", "labelPlacement", "floating", "type", "text", "formControlName", "minage", "readonly", "", 3, "click", "label", "placeholder"], ["labelPlacement", "floating", "type", "text", "formControlName", "maxage", "readonly", "", 3, "click", "label", "placeholder"], ["labelPlacement", "floating", "placeholder", "Selecciona", "formControlName", "connection", "multiple", "", 3, "label", "cancelText"], ["formControlName", "birthday", "presentation", "date", "min", "1900-01-01", 3, "locale", "first-day-of-week", "max"], [3, "value"], ["color", "secondary"], ["name", "close-circle", 3, "click"], ["color", "primary", "expand", "block", "shape", "round", 1, "ion-padding", 3, "click", "disabled"], [1, "ion-padding"], ["button", "", "detail", "false", "lines", "none", 3, "click"], ["slot", "start", "name", "camera", "color", "light"], ["lines", "none", "button", "", "detail", "false", 3, "click"], ["slot", "start", "name", "images", "color", "light"], ["button", "", "detail", "false", "lines", "none", 3, "click", 4, "ngFor", "ngForOf"], ["slot", "start", 4, "ngIf"], [3, "src"]],
  template: function EditProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-content", 7)(1, "ion-header", 8)(2, "ion-toolbar")(3, "ion-buttons", 9)(4, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_button_click_4_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.back());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-buttons", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, EditProfilePage_ion_button_7_Template, 2, 0, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_button_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.deleteImage());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_button_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.setAvatar());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "input", 17, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function EditProfilePage_Template_input_change_12_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.cropImagebyEvent($event));
      })("click", function EditProfilePage_Template_input_click_12_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const imageInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](imageInput_r4.value = null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, EditProfilePage_ion_list_14_Template, 10, 2, "ion-list", 18)(15, EditProfilePage_div_15_Template, 118, 131, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-list")(17, "ion-item-group")(18, "ion-item-divider", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "ion-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "ion-label")(21, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](26, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ion-item-group")(28, "ion-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "ion-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "ion-input", 24, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](32, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function EditProfilePage_Template_ion_input_ionInput_30_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.searchTag($event.detail.value, "games"));
      })("keyup.enter", function EditProfilePage_Template_ion_input_keyup_enter_30_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const games_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](31);
        ctx.addTag($event.target.value, "games");
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](games_r15.value = "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_icon_click_33_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const games_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](31);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.addTag(games_r15.value, "games"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "ion-item", 26)(35, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, EditProfilePage_ion_chip_36_Template, 4, 1, "ion-chip", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "ion-item-group")(38, "ion-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "ion-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "ion-input", 29, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](42, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function EditProfilePage_Template_ion_input_ionInput_40_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.searchTag($event.detail.value, "films"));
      })("keyup.enter", function EditProfilePage_Template_ion_input_keyup_enter_40_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const films_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](41);
        ctx.addTag($event.target.value, "films");
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](films_r18.value = "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_icon_click_43_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const films_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](41);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.addTag(films_r18.value, "films"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "ion-item", 26)(45, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](46, EditProfilePage_ion_chip_46_Template, 4, 1, "ion-chip", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "ion-item-group")(48, "ion-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](49, "ion-icon", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "ion-input", 31, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](52, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function EditProfilePage_Template_ion_input_ionInput_50_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.searchTag($event.detail.value, "books"));
      })("keyup.enter", function EditProfilePage_Template_ion_input_keyup_enter_50_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const books_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](51);
        ctx.addTag($event.target.value, "books");
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](books_r21.value = "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_icon_click_53_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const books_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](51);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.addTag(books_r21.value, "books"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "ion-item", 26)(55, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](56, EditProfilePage_ion_chip_56_Template, 4, 1, "ion-chip", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "ion-item-group")(58, "ion-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](59, "ion-icon", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "ion-input", 33, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](62, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function EditProfilePage_Template_ion_input_ionInput_60_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.searchTag($event.detail.value, "role"));
      })("keyup.enter", function EditProfilePage_Template_ion_input_keyup_enter_60_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const role_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](61);
        ctx.addTag($event.target.value, "role");
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](role_r24.value = "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_icon_click_63_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const role_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](61);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.addTag(role_r24.value, "role"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "ion-item", 26)(65, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](66, EditProfilePage_ion_chip_66_Template, 4, 1, "ion-chip", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "ion-item-group")(68, "ion-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](69, "ion-icon", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "ion-input", 35, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](72, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function EditProfilePage_Template_ion_input_ionInput_70_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.searchTag($event.detail.value, "music"));
      })("keyup.enter", function EditProfilePage_Template_ion_input_keyup_enter_70_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const music_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](71);
        ctx.addTag($event.target.value, "music");
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](music_r27.value = "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_icon_click_73_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const music_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](71);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.addTag(music_r27.value, "music"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "ion-item", 26)(75, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, EditProfilePage_ion_chip_76_Template, 4, 1, "ion-chip", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "ion-item-group")(78, "ion-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](79, "ion-icon", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "ion-input", 37, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](82, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function EditProfilePage_Template_ion_input_ionInput_80_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.searchTag($event.detail.value, "food"));
      })("keyup.enter", function EditProfilePage_Template_ion_input_keyup_enter_80_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const food_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](81);
        ctx.addTag($event.target.value, "food");
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](food_r30.value = "");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditProfilePage_Template_ion_icon_click_83_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        const food_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](81);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.addTag(food_r30.value, "food"));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "ion-item", 26)(85, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](86, EditProfilePage_ion_chip_86_Template, 4, 1, "ion-chip", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](87, EditProfilePage_ion_footer_87_Template, 4, 4, "ion-footer", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "ion-modal", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionModalDidDismiss", function EditProfilePage_Template_ion_modal_ionModalDidDismiss_88_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.closePictureSheet());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](89, EditProfilePage_ng_template_89_Template, 15, 9, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "ion-modal", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](91, EditProfilePage_ng_template_91_Template, 6, 4, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.images == null ? null : ctx.user.images.length) < 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 30, "etiquetas-gustos-frikis"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](26, 32, "selecciona-uno-por-cada-etiqueta"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](32, 34, "videojuegos-favoritos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.getTagsCategory("games"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](42, 36, "peliculas-series-animes-favoritos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("debounce", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.getTagsCategory("films"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](52, 38, "comics-mangas-libros"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("debounce", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.getTagsCategory("books"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](62, 40, "juegos-de-mesa"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("debounce", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.getTagsCategory("role"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](72, 42, "musica-favorita"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("debounce", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.getTagsCategory("music"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](82, 44, "food"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("debounce", 500);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.getTagsCategory("food"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("initialBreakpoint", 0.4)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](46, _c8))("isOpen", ctx.isPictureSheetOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](47, _c9))("initialBreakpoint", 0.6)("isOpen", ctx.openSuggestions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.TextValueAccessor, _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_11__.ImagePreloadDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _nice_date_pipe__WEBPACK_IMPORTED_MODULE_12__.NiceDatePipe, _i18n_pipe__WEBPACK_IMPORTED_MODULE_13__.I18nPipe],
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  --background: transparent !important;\n}\nion-toolbar[_ngcontent-%COMP%]   ion-button.back[_ngcontent-%COMP%] {\n  background: rgba(47, 47, 47, 0.5294117647);\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n}\nion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\nswiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-grid[_ngcontent-%COMP%] {\n  --ion-grid-padding: 0px;\n  --ion-grid-column-padding: 0px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\nion-list[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\nion-segment.md[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\nion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  min-height: 15px;\n  white-space: normal;\n}\n\nion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\nion-item-divider[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\nion-item-divider[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n#file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.fav-icon[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  margin-top: -100px;\n  padding: 10px;\n  color: #ffffff;\n  opacity: 0.8;\n  z-index: 1;\n}\n\n.del-icon[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  margin-top: -140px;\n  padding: 10px;\n  color: #ffffff;\n  opacity: 0.8;\n  z-index: 1;\n}\n\nion-item-group[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\nion-item-group[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nion-item-group[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n}\nion-item-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n#description[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: 18px;\n}\n#description[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-light);\n  --padding-top: 18px;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  background: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0FBQ0Y7QUFDRTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtBQURKOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUZGOztBQU1FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU9BO0VBQ0UsbUJBQUE7QUFKRjs7QUFRRTtFQUNFLGtCQUFBO0FBTEo7QUFPRTtFQUNFLG1CQUFBO0FBTEo7O0FBU0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQU5GOztBQVVFO0VBQ0UsZ0JBQUE7QUFQSjtBQVNJOztFQUVFLFlBQUE7QUFQTjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVRKOztBQWNFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQVhKO0FBYUU7RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0FBWEo7O0FBZUE7RUFDRSxpQ0FBQTtBQVpGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICBpb24tYnV0dG9uLmJhY2sge1xuICAgIGJhY2tncm91bmQ6ICMyZjJmMmY4NztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5zd2lwZXItc2xpZGUgaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMHB4O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgLmNhdGVnb3J5LWhlYWRlciBpb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbn1cblxuaW9uLXNlZ21lbnQubWQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbmlvbi1jaGlwIHtcbiAgaW9uLWxhYmVsIHtcbiAgICBtaW4taGVpZ2h0OiAxNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgaW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBpb24tbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbn1cblxuI2ZpbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmF2LWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAxO1xufVxuXG4uZGVsLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTE0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAxO1xufVxuXG5pb24taXRlbS1ncm91cCB7XG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICBoMixcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG59XG5cbiNkZXNjcmlwdGlvbiB7XG4gIGlvbi1pY29uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gIH1cbiAgaW9uLXRleHRhcmVhIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLXBhZGRpbmctdG9wOiAxOHB4O1xuICB9XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 52575:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 91687);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_edit-profile_edit-profile_module_ts.js.map