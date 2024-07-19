"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 4219:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePageModule: () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 76980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _ProfilePageModule;








const routes = [{
  path: "",
  component: _profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage
}];
class ProfilePageModule {}
_ProfilePageModule = ProfilePageModule;
_ProfilePageModule.ɵfac = function ProfilePageModule_Factory(t) {
  return new (t || _ProfilePageModule)();
};
_ProfilePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ProfilePageModule
});
_ProfilePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfilePageModule, {
    declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 76980:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfilePage: () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/haptics */ 47115);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-animate */ 50371);
/* harmony import */ var _options_popover_options_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options-popover/options-popover */ 94873);
/* harmony import */ var _services_like_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/like.service */ 98289);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/navigation.service */ 99260);
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/page.service */ 77377);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/story.service */ 92395);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/url.service */ 53167);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ 29885);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/utils.service */ 54171);
/* harmony import */ var _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../story/view-stories/view-stories.modal */ 19260);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../services/auth.service */ 44796);
/* harmony import */ var _likes_modal_likes_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./likes-modal/likes.modal */ 32148);
/* harmony import */ var _services_ad_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/ad.service */ 90827);
/* harmony import */ var _unlimited_unlimited_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../unlimited/unlimited.modal */ 94530);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/i18n.service */ 98898);
/* harmony import */ var _chat_chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../chat/chat-modal/chat-modal.component */ 13393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/image-preload.directive */ 89024);
/* harmony import */ var _nice_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../nice-date.pipe */ 45982);
/* harmony import */ var _mentions_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../mentions.pipe */ 43337);
/* harmony import */ var _hashtag_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../hashtag.pipe */ 6926);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../i18n.pipe */ 4504);
/* harmony import */ var ngx_linky__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-linky */ 96663);

var _ProfilePage;










































const _c0 = () => [];
const _c1 = a0 => ({
  distance: a0
});
const _c2 = () => ({
  className: "linkified"
});
function ProfilePage_ion_buttons_5_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_ion_buttons_5_ion_button_1_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.editProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 1, "editar-perfil"));
  }
}
function ProfilePage_ion_buttons_5_ion_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_ion_buttons_5_ion_button_2_Template_ion_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showOptions($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_buttons_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-buttons", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ProfilePage_ion_buttons_5_ion_button_1_Template, 5, 3, "ion-button", 9)(2, ProfilePage_ion_buttons_5_ion_button_2_Template, 2, 0, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r2.user == null ? null : ctx_r2.user.id) === (ctx_r2.auth.currentUserValue == null ? null : ctx_r2.auth.currentUserValue.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r2.user == null ? null : ctx_r2.user.active) && (ctx_r2.user == null ? null : ctx_r2.user.id) !== 1);
  }
}
function ProfilePage_div_7_ion_list_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "ion-skeleton-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "ion-skeleton-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function ProfilePage_div_7_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-list")(1, "ion-item", 16)(2, "ion-label")(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "ion-skeleton-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "ion-skeleton-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "ion-item", 16)(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, ProfilePage_div_7_ion_list_1_span_9_Template, 5, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](1, _c0).constructor(20));
  }
}
function ProfilePage_div_7_div_2_swiper_slide_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "swiper-slide")(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", image_r6, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function ProfilePage_div_7_div_2_ion_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_icon_9_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.userSvc.showRole(ctx_r2.user));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("name", ctx_r2.userSvc.getRoleIcon(ctx_r2.user))("src", ctx_r2.userSvc.getRoleIcon(ctx_r2.user))("color", ctx_r2.userSvc.getRoleColor(ctx_r2.user));
  }
}
function ProfilePage_div_7_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](", ", ctx_r2.user.age, "");
  }
}
function ProfilePage_div_7_div_2_ion_badge_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function ProfilePage_div_7_div_2_div_19_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "img", 45);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r2.story.image, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"])("alt", ctx_r2.story == null ? null : ctx_r2.story.text);
  }
}
function ProfilePage_div_7_div_2_div_19_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "img", 45);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r2.story.user.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"])("alt", ctx_r2.story.user.username);
  }
}
function ProfilePage_div_7_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 42)(1, "ion-avatar", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_div_19_Template_ion_avatar_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showStories(ctx_r2.story.user.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProfilePage_div_7_div_2_div_19_img_2_Template, 1, 2, "img", 44)(3, ProfilePage_div_7_div_2_div_19_img_3_Template, 1, 2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngClass", ctx_r2.story.viewed ? "" : "not-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.story.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r2.story.image);
  }
}
function ProfilePage_div_7_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r2.user.match, "% ");
  }
}
function ProfilePage_div_7_div_2_ion_item_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label")(3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_23_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showLikes("received"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](8, " \u00A0\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_23_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showLikes("delivered"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](13, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.user.likes.received);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 4, "recibidos"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.user.likes.delivered);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](13, 6, "entregados"), "");
  }
}
function ProfilePage_div_7_div_2_ion_item_24_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 1, "km-distancia", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](4, _c1, ctx_r2.user == null ? null : ctx_r2.user.distance)), " ");
  }
}
function ProfilePage_div_7_div_2_ion_item_24_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" (", ctx_r2.user == null ? null : ctx_r2.user.ip, ")");
  }
}
function ProfilePage_div_7_div_2_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_24_span_3_Template, 3, 6, "span", 15)(4, ProfilePage_div_7_div_2_ion_item_24_span_4_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r2.user == null ? null : ctx_r2.user.distance) !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.ip);
  }
}
function ProfilePage_div_7_div_2_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "linky");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "mentions");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "hashtag");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_25_Template_ion_label_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      $event.stopImmediatePropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.openUrl($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](3, 1, ctx_r2.user == null ? null : ctx_r2.user.description, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](8, _c2)))), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
  }
}
function ProfilePage_div_7_div_2_ion_item_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16)(1, "ion-label")(2, "h1")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](5, 2, "usuario-bloqueado"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](8, 4, "no-puedes-interactuar-con-esta"));
  }
}
function ProfilePage_div_7_div_2_ion_item_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "niceDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](8, "niceDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 2, "ltima-conexin"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](5, 4, ctx_r2.user == null ? null : ctx_r2.user.last_login) === _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](6, 6, "just-now") ? _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 8, "online") : _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](8, 10, ctx_r2.user == null ? null : ctx_r2.user.last_login), "");
  }
}
function ProfilePage_div_7_div_2_ion_item_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "niceDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 2, "fecha-registro"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](5, 4, ctx_r2.user == null ? null : ctx_r2.user.register_date), "");
  }
}
function ProfilePage_div_7_div_2_ion_item_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.user.location);
  }
}
function ProfilePage_div_7_div_2_ion_item_30_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const language_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](language_r11);
  }
}
function ProfilePage_div_7_div_2_ion_item_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_30_ion_chip_3_Template, 3, 1, "ion-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.languages);
  }
}
function ProfilePage_div_7_div_2_ion_item_31_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 1, ctx_r2.user.orientation));
  }
}
function ProfilePage_div_7_div_2_ion_item_31_ion_chip_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 1, ctx_r2.user.gender));
  }
}
function ProfilePage_div_7_div_2_ion_item_31_ion_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 1, ctx_r2.user.pronoun));
  }
}
function ProfilePage_div_7_div_2_ion_item_31_ion_chip_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 1, ctx_r2.user.status));
  }
}
function ProfilePage_div_7_div_2_ion_item_31_ion_chip_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 1, ctx_r2.user.relationship));
  }
}
function ProfilePage_div_7_div_2_ion_item_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_31_ion_chip_3_Template, 4, 3, "ion-chip", 15)(4, ProfilePage_div_7_div_2_ion_item_31_ion_chip_4_Template, 4, 3, "ion-chip", 15)(5, ProfilePage_div_7_div_2_ion_item_31_ion_chip_5_Template, 4, 3, "ion-chip", 15)(6, ProfilePage_div_7_div_2_ion_item_31_ion_chip_6_Template, 4, 3, "ion-chip", 15)(7, ProfilePage_div_7_div_2_ion_item_31_ion_chip_7_Template, 4, 3, "ion-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user.pronoun);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user.relationship);
  }
}
function ProfilePage_div_7_div_2_ion_item_35_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const connection_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](connection_r12);
  }
}
function ProfilePage_div_7_div_2_ion_item_35_ion_chip_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lovegender_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](3, 1, lovegender_r13));
  }
}
function ProfilePage_div_7_div_2_ion_item_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_35_ion_chip_3_Template, 3, 1, "ion-chip", 19)(4, ProfilePage_div_7_div_2_ion_item_35_ion_chip_4_Template, 4, 3, "ion-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.connections);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.user.lovegender);
  }
}
function ProfilePage_div_7_div_2_ion_item_40_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip", 41)(1, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_40_ion_chip_3_Template_ion_label_click_1_listener() {
      const tag_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showTag(tag_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](tag_r15.name);
  }
}
function ProfilePage_div_7_div_2_ion_item_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_40_ion_chip_3_Template, 3, 1, "ion-chip", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.getTagsCategory("games"));
  }
}
function ProfilePage_div_7_div_2_ion_item_41_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip", 41)(1, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_41_ion_chip_3_Template_ion_label_click_1_listener() {
      const tag_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showTag(tag_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](tag_r17.name);
  }
}
function ProfilePage_div_7_div_2_ion_item_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_41_ion_chip_3_Template, 3, 1, "ion-chip", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.getTagsCategory("films"));
  }
}
function ProfilePage_div_7_div_2_ion_item_42_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip", 41)(1, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_42_ion_chip_3_Template_ion_label_click_1_listener() {
      const tag_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showTag(tag_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](tag_r19.name);
  }
}
function ProfilePage_div_7_div_2_ion_item_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_42_ion_chip_3_Template, 3, 1, "ion-chip", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.getTagsCategory("books"));
  }
}
function ProfilePage_div_7_div_2_ion_item_43_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip", 41)(1, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_43_ion_chip_3_Template_ion_label_click_1_listener() {
      const tag_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r20).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showTag(tag_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](tag_r21.name);
  }
}
function ProfilePage_div_7_div_2_ion_item_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_43_ion_chip_3_Template, 3, 1, "ion-chip", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.getTagsCategory("role"));
  }
}
function ProfilePage_div_7_div_2_ion_item_44_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip", 41)(1, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_44_ion_chip_3_Template_ion_label_click_1_listener() {
      const tag_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showTag(tag_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](tag_r23.name);
  }
}
function ProfilePage_div_7_div_2_ion_item_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_44_ion_chip_3_Template, 3, 1, "ion-chip", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.getTagsCategory("music"));
  }
}
function ProfilePage_div_7_div_2_ion_item_45_ion_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-chip", 41)(1, "ion-label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_ion_item_45_ion_chip_3_Template_ion_label_click_1_listener() {
      const tag_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showTag(tag_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](tag_r25.name);
  }
}
function ProfilePage_div_7_div_2_ion_item_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, ProfilePage_div_7_div_2_ion_item_45_ion_chip_3_Template, 3, 1, "ion-chip", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.getTagsCategory("food"));
  }
}
function ProfilePage_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "ion-card")(2, "swiper-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_div_7_div_2_Template_swiper_container_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.tap($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "swiper-slide")(4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](6, ProfilePage_div_7_div_2_swiper_slide_6_Template, 3, 1, "swiper-slide", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "ion-card-content", 25)(8, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, ProfilePage_div_7_div_2_ion_icon_9_Template, 1, 3, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "ion-label")(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](15, ProfilePage_div_7_div_2_span_15_Template, 2, 1, "span", 28)(16, ProfilePage_div_7_div_2_ion_badge_16_Template, 2, 0, "ion-badge", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](17, "niceDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](18, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](19, ProfilePage_div_7_div_2_div_19_Template, 4, 3, "div", 30)(20, ProfilePage_div_7_div_2_div_20_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "div", 32)(22, "ion-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, ProfilePage_div_7_div_2_ion_item_23_Template, 14, 8, "ion-item", 33)(24, ProfilePage_div_7_div_2_ion_item_24_Template, 5, 2, "ion-item", 34)(25, ProfilePage_div_7_div_2_ion_item_25_Template, 6, 9, "ion-item", 35)(26, ProfilePage_div_7_div_2_ion_item_26_Template, 9, 6, "ion-item", 36)(27, ProfilePage_div_7_div_2_ion_item_27_Template, 9, 12, "ion-item", 36)(28, ProfilePage_div_7_div_2_ion_item_28_Template, 6, 6, "ion-item", 36)(29, ProfilePage_div_7_div_2_ion_item_29_Template, 4, 1, "ion-item", 36)(30, ProfilePage_div_7_div_2_ion_item_30_Template, 4, 1, "ion-item", 36)(31, ProfilePage_div_7_div_2_ion_item_31_Template, 8, 5, "ion-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](34, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](35, ProfilePage_div_7_div_2_ion_item_35_Template, 5, 2, "ion-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](38, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "ion-list", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](40, ProfilePage_div_7_div_2_ion_item_40_Template, 4, 1, "ion-item", 36)(41, ProfilePage_div_7_div_2_ion_item_41_Template, 4, 1, "ion-item", 36)(42, ProfilePage_div_7_div_2_ion_item_42_Template, 4, 1, "ion-item", 36)(43, ProfilePage_div_7_div_2_ion_item_43_Template, 4, 1, "ion-item", 36)(44, ProfilePage_div_7_div_2_ion_item_44_Template, 4, 1, "ion-item", 36)(45, ProfilePage_div_7_div_2_ion_item_45_Template, 4, 1, "ion-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r2.user == null ? null : ctx_r2.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"])("alt", ctx_r2.user == null ? null : ctx_r2.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r2.user == null ? null : ctx_r2.user.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.userSvc.getRoleIcon(ctx_r2.user));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("@", ctx_r2.user.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](ctx_r2.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](17, 28, ctx_r2.user == null ? null : ctx_r2.user.last_login) === _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](18, 30, "just-now"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.story);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user.match && ctx_r2.user.id !== ctx_r2.auth.currentUserValue.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.auth.currentUserValue && (ctx_r2.user == null ? null : ctx_r2.user.likes));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r2.user == null ? null : ctx_r2.user.distance) !== undefined || (ctx_r2.user == null ? null : ctx_r2.user.ip));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.block);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.last_login);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.register_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.languages == null ? null : ctx_r2.languages.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx_r2.user == null ? null : ctx_r2.user.gender) || (ctx_r2.user == null ? null : ctx_r2.user.pronoun) || (ctx_r2.user == null ? null : ctx_r2.user.orientation) || (ctx_r2.user == null ? null : ctx_r2.user.relationship));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](34, 32, "buscando"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.connection == null ? null : ctx_r2.user.connection.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](38, 34, "interests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (tmp_25_0 = ctx_r2.getTagsCategory("games")) == null ? null : tmp_25_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (tmp_26_0 = ctx_r2.getTagsCategory("films")) == null ? null : tmp_26_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (tmp_27_0 = ctx_r2.getTagsCategory("books")) == null ? null : tmp_27_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (tmp_28_0 = ctx_r2.getTagsCategory("role")) == null ? null : tmp_28_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (tmp_29_0 = ctx_r2.getTagsCategory("music")) == null ? null : tmp_29_0.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (tmp_30_0 = ctx_r2.getTagsCategory("food")) == null ? null : tmp_30_0.length);
  }
}
function ProfilePage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, ProfilePage_div_7_ion_list_1_Template, 10, 2, "ion-list", 15)(2, ProfilePage_div_7_div_2_Template, 46, 36, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
  }
}
function ProfilePage_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](4, 2, "no-encontrado"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](7, 4, "perfil-usuario-que-intentas-ver"));
  }
}
function ProfilePage_ion_footer_10_ion_buttons_2_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_ion_footer_10_ion_buttons_2_ion_button_7_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.showChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "ion-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function ProfilePage_ion_footer_10_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-buttons")(1, "ion-grid")(2, "ion-row", 71)(3, "ion-col", 72)(4, "ion-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_ion_footer_10_ion_buttons_2_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.hideProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "ion-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "ion-col", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, ProfilePage_ion_footer_10_ion_buttons_2_ion_button_7_Template, 2, 0, "ion-button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "ion-col", 72)(9, "ion-button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_ion_footer_10_ion_buttons_2_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r2.switchLike());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](10, "ion-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !(ctx_r2.user == null ? null : ctx_r2.user.block_messages) || ctx_r2.user.from_like);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@pulse", ctx_r2.user.like)("color", (ctx_r2.user == null ? null : ctx_r2.user.like) ? "primary" : "light")("name", (ctx_r2.user == null ? null : ctx_r2.user.like) ? "heart" : "heart-outline");
  }
}
function ProfilePage_ion_footer_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-footer", 1)(1, "ion-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, ProfilePage_ion_footer_10_ion_buttons_2_Template, 11, 4, "ion-buttons", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.user);
  }
}
class ProfilePage {
  constructor(popover, userSvc, route, router, utils, toast, alert, auth, storiesSvc, modalController, pageSvc, likeSvc, urlSvc, meta, title, nav, ad, i18n) {
    this.popover = popover;
    this.userSvc = userSvc;
    this.route = route;
    this.router = router;
    this.utils = utils;
    this.toast = toast;
    this.alert = alert;
    this.auth = auth;
    this.storiesSvc = storiesSvc;
    this.modalController = modalController;
    this.pageSvc = pageSvc;
    this.likeSvc = likeSvc;
    this.urlSvc = urlSvc;
    this.meta = meta;
    this.title = title;
    this.nav = nav;
    this.ad = ad;
    this.i18n = i18n;
    this.likes = {
      delivered: undefined,
      received: undefined
    };
    this.loading = true;
    this.sliderOpts = {
      keyboard: true,
      grabCursor: true,
      centeredSlides: true
    };
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const param = _this.route.snapshot.paramMap.get("id");
      let id = undefined;
      if (!param) {
        id = _this.auth.currentUserValue.id;
        _this.auth.currentUser.subscribe( /*#__PURE__*/function () {
          var _ref = (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (authUser) {
            _this.user = {
              ..._this.user,
              ...authUser
            };
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } else {
        if (param.toLowerCase() === "frikiradar" || +param == 1) {
          _this.router.navigate(["/profile"]);
        } else {
          id = param;
        }
      }
      try {
        var _this$user, _this$user2, _this$user3;
        _this.loading = true;
        if (_this.auth.currentUserValue) {
          _this.user = yield _this.userSvc.getUser(id);
        } else {
          _this.user = yield _this.userSvc.getPublicUser(id);
          // si no recibe entonces poner que no es public
        }
        _this.meta.addTags([{
          name: "keywords",
          content: "frikiradar, friki, red social, citas, " + ((_this$user = _this.user) === null || _this$user === void 0 ? void 0 : _this$user.name)
        }, {
          name: "robots",
          content: "index, follow"
        }, {
          name: "author",
          content: "frikiradar"
        }, {
          charset: "UTF-8"
        }]);
        _this.title.setTitle("Perfil de " + ((_this$user2 = _this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.name) + " en frikiradar");
        _this.meta.updateTag({
          name: "description",
          content: (_this$user3 = _this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.description
        });
        if (typeof _this.user.connection === "string") {
          _this.user.connection = [_this.user.connection];
        }
        _this.loading = false;
        if (_this.auth.currentUserValue) {
          _this.stories = yield _this.storiesSvc.getUserStories(_this.user.id);
          _this.story = _this.stories[_this.stories.length - 1];
        }
        if (_this.user.languages) {
          const languages = _this.userSvc.getLanguages();
          _this.languages = _this.user.languages.map(l => _this.i18n.translate(languages.find(l2 => l2.value === l).name));
        }
        if (_this.user.connection) {
          _this.connections = _this.user.connection.map(c => {
            return _this.i18n.translate(c);
          });
        }
      } catch (e) {
        _this.loading = false;
      }
      yield _this.utils.delay(500);
      _this.initSwiper();
      _this.ad.resetReward();
    })();
  }
  initSwiper() {
    const swiperContainer = document.querySelector("#swiper-profile");
    Object.assign(swiperContainer, this.sliderOpts);
    this.slides = swiperContainer.swiper;
    this.slides.on("slideChange", /*#__PURE__*/(0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_1__.Haptics.vibrate({
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
  editProfile() {
    this.nav.navigateRoot("/edit-profile");
  }
  openUrl(event) {
    this.urlSvc.openUrl(event);
    return false;
  }
  getTagsCategory(category) {
    if (this.user && this.user.tags) {
      return this.user.tags.filter(t => t.category.name === category);
    }
  }
  showChat() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.auth.currentUserValue) {
        _this3.nav.navigateRoot(["/login"], {
          queryParams: {
            returnUrl: _this3.router.url
          }
        });
        return;
      }
      let showChat = false;
      if (_this3.user.chat && !_this3.user.block) {
        const data = yield _this3.doAction();
        if (data) {
          showChat = true;
        }
      } else {
        var _this3$auth, _this3$user$roles;
        if (_this3.user.match > 0 || _this3.user.from_like || (_this3$auth = _this3.auth) !== null && _this3$auth !== void 0 && _this3$auth.isVerified() || (_this3$user$roles = _this3.user.roles) !== null && _this3$user$roles !== void 0 && _this3$user$roles.includes("ROLE_MASTER")) {
          const data = yield _this3.doAction();
          if (data) {
            showChat = true;
          }
        } else {
          const alert = yield _this3.alert.create({
            header: _this3.i18n.translate("cannot-start-chat"),
            message: _this3.i18n.translate("start-chat-requirements"),
            buttons: [_this3.i18n.translate("understood-thanks")],
            cssClass: "round-alert"
          });
          yield alert.present();
        }
      }
      _this3.modalController.create({
        component: _chat_chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_16__.ChatModalComponent,
        componentProps: {
          userId: _this3.user.id
        },
        cssClass: "vertical-modal"
      }).then(modal => {
        modal.present();
      });
    })();
  }
  switchLike() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.auth.currentUserValue) {
        _this4.nav.navigateRoot(["/login"], {
          queryParams: {
            returnUrl: _this4.router.url
          }
        });
        return;
      }
      try {
        if (!_this4.user.like) {
          const data = yield _this4.doAction();
          if (data) {
            yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_1__.Haptics.notification({
              type: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Success
            });
            _this4.userSvc.like(_this4.user.id);
            _this4.user.like = true;
            if (_this4.user.block_messages || !_this4.user.match || !_this4.auth.isVerified()) {
              let message = "";
              if (_this4.user.from_like) {
                message = _this4.i18n.translate("congratulations-on-match") + _this4.user.name + ".";
              } else {
                message = _this4.i18n.translate("you-have-given-your-kokoro") + _this4.user.name + _this4.i18n.translate("cannot-start-chat-until-kokoro");
              }
              (yield _this4.toast.create({
                message,
                duration: 5000,
                position: "middle"
              })).present();
            } else {
              (yield _this4.toast.create({
                message: _this4.i18n.translate("you-have-given-your-kokoro") + _this4.user.name + "!",
                duration: 5000,
                position: "middle"
              })).present();
            }
          }
        } else {
          yield _capacitor_haptics__WEBPACK_IMPORTED_MODULE_1__.Haptics.notification({
            type: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Error
          });
          _this4.userSvc.unlike(_this4.user.id);
          _this4.user.like = false;
          (yield _this4.toast.create({
            message: _this4.i18n.translate("you-have-removed-your-kokoro") + _this4.user.name,
            duration: 5000,
            position: "middle"
          })).present();
        }
      } catch (e) {
        (yield _this4.toast.create({
          message: _this4.i18n.translate("error-giving-or-removing-kokoro"),
          duration: 5000,
          position: "middle",
          color: "danger"
        })).present();
      }
    })();
  }
  doAction() {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.auth.isPremium()) {
        const showPromo = yield _this5.ad.showRandomAd();
        if (!showPromo) {
          // Modal hazte premium
          const modal = yield _this5.modalController.create({
            component: _unlimited_unlimited_modal__WEBPACK_IMPORTED_MODULE_14__.UnlimitedModal,
            cssClass: "vertical-modal",
            componentProps: {
              topic: "ad"
            }
          });
          yield modal.present();
          return false;
        }
      }
      return true;
    })();
  }
  hideProfile() {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.router.navigate(["/"]);
      const toast = yield _this6.toast.create({
        message: _this6.i18n.translate("user-hidden"),
        duration: 3000,
        position: "bottom",
        buttons: [{
          text: _this6.i18n.translate("undo"),
          handler: () => {
            _this6.router.navigate(["/profile/" + _this6.user.id]);
          }
        }]
      });
      toast.present();
      const log = yield toast.onDidDismiss();
      if (log.role === "timeout") {
        _this6.userSvc.hide(_this6.user.id);
      }
    })();
  }
  showOptions(event) {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this7.popover.create({
        component: _options_popover_options_popover__WEBPACK_IMPORTED_MODULE_2__.OptionsPopover,
        cssClass: "options-popover",
        event: event,
        translucent: true,
        componentProps: {
          user: _this7.user,
          page: "profile"
        }
      });
      return yield popover.present();
    })();
  }
  showTag(tag) {
    var _this8 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (tag.category.name === "games" || tag.category.name === "films") {
        try {
          if (tag.slug) {
            _this8.router.navigate(["/page", tag.slug]);
          } else {
            (yield _this8.toast.create({
              message: _this8.i18n.translate("creating-page"),
              position: "middle"
            })).present();
            const page = yield _this8.pageSvc.setPage(tag.id);
            _this8.toast.dismiss();
            _this8.user.tags.map(t => {
              if (t.id === tag.id) {
                t.slug = page.slug;
              }
            });
            if (_this8.auth.currentUserValue.id === _this8.user.id) {
              _this8.auth.setAuthUser(_this8.user);
            }
            _this8.router.navigate(["/page", page.slug]);
          }
        } catch (e) {
          _this8.toast.dismiss();
          _this8.router.navigate(["/search", tag.name]);
        }
      } else {
        _this8.router.navigate(["/search", tag.name]);
      }
    })();
  }
  showStories(id) {
    var _this9 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let stories = _this9.stories.filter(s => s.user.id === id);
      stories = [...stories, ..._this9.stories.filter(s => s.user.id !== id)];
      const modal = yield _this9.modalController.create({
        component: _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_10__.ViewStoriesModal,
        componentProps: {
          stories
        },
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
      yield modal.onDidDismiss();
      _this9.stories = yield _this9.storiesSvc.getUserStories(+id);
    })();
  }
  showLikes(param) {
    var _this10 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this10$likes$param;
      _this10.param = param;
      if (!((_this10$likes$param = _this10.likes[param]) !== null && _this10$likes$param !== void 0 && _this10$likes$param.length)) {
        _this10.likes[param] = yield _this10.likeSvc.getLikes(param, 1, _this10.user.id);
      }
      const modal = yield _this10.modalController.create({
        component: _likes_modal_likes_modal__WEBPACK_IMPORTED_MODULE_12__.LikesModal,
        componentProps: {
          likes: _this10.likes,
          param: _this10.param,
          user: _this10.user
        },
        initialBreakpoint: 1,
        breakpoints: [0, 1],
        cssClass: "sheet-modal",
        showBackdrop: true
      });
      return yield modal.present();
    })();
  }
  back() {
    this.nav.back();
  }
}
_ProfilePage = ProfilePage;
_ProfilePage.ɵfac = function ProfilePage_Factory(t) {
  return new (t || _ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.PopoverController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_story_service__WEBPACK_IMPORTED_MODULE_6__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_5__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_like_service__WEBPACK_IMPORTED_MODULE_3__.LikeService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_7__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_ad_service__WEBPACK_IMPORTED_MODULE_13__.AdService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_15__.I18nService));
};
_ProfilePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
  type: _ProfilePage,
  selectors: [["app-profile"]],
  decls: 11,
  vars: 4,
  consts: [["noUser", ""], [1, "ion-no-border"], ["slot", "start"], [1, "back", 3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["slot", "end", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "ion-no-border", 4, "ngIf"], ["slot", "end"], ["id", "edit-profile", "shape", "round", 3, "click", 4, "ngIf"], ["class", "options", 3, "click", 4, "ngIf"], ["id", "edit-profile", "shape", "round", 3, "click"], ["name", "create-outline"], [1, "options", 3, "click"], ["slot", "icon-only", "name", "ellipsis-vertical"], [4, "ngIf"], ["lines", "none"], ["animated", "", 2, "width", "75%"], ["animated", "", 2, "width", "50%"], [4, "ngFor", "ngForOf"], ["animated", "", 2, "width", "100%"], ["animated", "", 2, "width", "95%"], ["id", "swiper-profile", "scrollbar", "true", "modules", "Scrollbar", 1, "images-slide", 3, "click"], [1, "background-image"], ["default", "/assets/img/users/default.png", 3, "src", "alt"], [1, "resume"], ["slot", "start", 3, "name", "src", "color", "click", 4, "ngIf"], [1, "name"], ["class", "age", 4, "ngIf"], ["color", "secondary", 4, "ngIf"], ["id", "stories", 4, "ngIf"], ["class", "match full-center", 4, "ngIf"], [1, "ion-padding"], ["lines", "none", "id", "kokoro", 4, "ngIf"], ["lines", "none", "class", "location", 4, "ngIf"], ["lines", "none", "id", "description", 4, "ngIf"], ["lines", "none", 4, "ngIf"], [1, "tags"], ["default", "/assets/img/users/default.png", 3, "src"], ["slot", "start", 3, "click", "name", "src", "color"], [1, "age"], ["color", "secondary"], ["id", "stories"], [3, "click", "ngClass"], [3, "src", "alt", 4, "ngIf"], [3, "src", "alt"], [1, "match", "full-center"], ["lines", "none", "id", "kokoro"], ["name", "heart", "slot", "start", "color", "primary"], [1, "likes", 3, "click"], ["lines", "none", 1, "location"], ["name", "location-sharp", "slot", "start", "color", "secondary"], ["lines", "none", "id", "description"], ["name", "document-text"], [3, "click", "innerHTML"], ["name", "time"], ["name", "calendar"], ["name", "home"], ["name", "language"], [1, "ion-text-wrap"], ["name", "body"], ["name", "search-outline"], ["name", "game-controller-outline"], ["color", "secondary", 4, "ngFor", "ngForOf"], [3, "click"], ["name", "film-outline"], ["name", "book-outline"], ["name", "dice-outline"], ["name", "headset-outline"], ["src", "/assets/icon/ramen_dining.svg"], [1, "full-center", "ion-padding"], [1, "ion-align-items-center"], [1, "ion-text-center"], ["slot", "icon-only", "name", "eye-off", "color", "danger"], [3, "click", 4, "ngIf"], ["slot", "icon-only", 3, "color", "name"], ["slot", "icon-only", "name", "chatbubbles-outline"]],
  template: function ProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function ProfilePage_Template_ion_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx.back());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, ProfilePage_ion_buttons_5_Template, 3, 2, "ion-buttons", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, ProfilePage_div_7_Template, 3, 2, "div", 6)(8, ProfilePage_ng_template_8_Template, 8, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](10, ProfilePage_ion_footer_10_Template, 3, 1, "ion-footer", 7);
    }
    if (rf & 2) {
      const noUser_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.auth.currentUserValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.user || ctx.loading)("ngIfElse", noUser_r28);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (ctx.auth.currentUserValue == null ? null : ctx.auth.currentUserValue.id) !== (ctx.user == null ? null : ctx.user.id) && (ctx.user == null ? null : ctx.user.id) !== 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonToolbar, _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_17__.ImagePreloadDirective, _nice_date_pipe__WEBPACK_IMPORTED_MODULE_18__.NiceDatePipe, _mentions_pipe__WEBPACK_IMPORTED_MODULE_19__.MentionsPipe, _hashtag_pipe__WEBPACK_IMPORTED_MODULE_20__.HashtagPipe, _i18n_pipe__WEBPACK_IMPORTED_MODULE_21__.I18nPipe, ngx_linky__WEBPACK_IMPORTED_MODULE_27__.LinkyPipe],
  styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  --background: transparent !important;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], \nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: rgba(47, 47, 47, 0.5294117647);\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\nion-card[_ngcontent-%COMP%] {\n  height: 600px;\n  --background: transparent;\n  overflow: auto;\n  margin: 0;\n  border-radius: 0 0 50px 50px;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  padding: 0;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding-bottom: 20px;\n  padding-top: 40px;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(27%, rgba(0, 0, 0, 0.27)), color-stop(100%, rgb(19, 19, 19)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 27%, rgb(19, 19, 19) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#000000\", endColorstr=\"#131313\", GradientType=0 );\n}\nion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nion-card-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.background-image[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  bottom: 2px;\n  left: 0;\n  right: 0;\n  overflow-y: hidden;\n}\n.background-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover !important;\n  height: 100%;\n  width: 100%;\n}\n\nswiper-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.images-slide[_ngcontent-%COMP%]::part(scrollbar) {\n  position: absolute;\n  left: 25px;\n  height: 5px;\n  width: 85%;\n  bottom: 110px;\n}\n\nswiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin: 0;\n  background: transparent;\n}\nion-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-light);\n  margin-right: 15px;\n}\n\n.match[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -94px;\n  color: white;\n  font-size: 14px;\n  border: 2px solid white;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-left: 10px;\n  background-color: #e91e63;\n  z-index: 1;\n  right: 10px;\n}\n\nion-grid[_ngcontent-%COMP%] {\n  --ion-grid-padding: 0px;\n  --ion-grid-column-padding: 0px;\n}\n\n.resume[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n}\n.resume[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--ion-color-light);\n}\n.resume[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: var(--ion-color-light) !important;\n  min-height: 15px;\n}\n.resume[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.resume[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.resume[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.resume[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.resume[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.resume[_ngcontent-%COMP%]   .unread-likes[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 84px;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  display: inline-grid;\n}\nion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  min-height: 15px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --border-color: #e91e63;\n}\n\n.likes[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n#stories[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 420px;\n  text-align: right;\n  right: 8px;\n}\n#stories[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid white;\n}\n\n#description[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n#description[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: 10px;\n}\n#description[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n#edit-profile[_ngcontent-%COMP%] {\n  background: rgba(47, 47, 47, 0.7215686275);\n  border-radius: 50px;\n  text-transform: none;\n  height: 50px;\n}\n#edit-profile[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white !important;\n  margin-right: 5px;\n}\n#edit-profile[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7QUFDRjtBQUNFOztFQUVFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtBQURGOztBQUlBO0VBS0UscUJBQUE7RUFFQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBRUEsVUFBQTtFQUNBLDRCQUFBO0VBT0EsOEpBQUE7RUF5QkEsMEdBQUE7RUFNQSxvSEFBQTtBQXRDRjtBQWZFOztFQUVFLHVCQUFBO0FBaUJKOztBQXFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQWxDRjtBQW9DRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFsQ0o7O0FBc0NBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBbkNGOztBQXNDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQW5DRjs7QUFzQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0FBbkNGO0FBcUNFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQW5DSjs7QUF1Q0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXBDRjs7QUF1Q0E7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FBcENGOztBQXdDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBckNKO0FBd0NFO0VBQ0UsdUJBQUE7RUFDQSx3Q0FBQTtBQXRDSjtBQXVDSTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7QUFyQ047QUEwQ0k7RUFDRSxlQUFBO0FBeENOO0FBMkNJO0VBQ0UsZUFBQTtBQXpDTjtBQTRDSTtFQUNFLGdCQUFBO0FBMUNOO0FBOENFOztFQUVFLFNBQUE7QUE1Q0o7QUErQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBN0NKOztBQWlEQTtFQUNFLG9CQUFBO0FBOUNGO0FBZ0RFO0VBQ0UsZ0JBQUE7QUE5Q0o7O0FBa0RBO0VBQ0UsdUJBQUE7QUEvQ0Y7O0FBa0RBO0VBQ0UsZUFBQTtBQS9DRjs7QUFrREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBL0NGO0FBaURFO0VBQ0UsdUJBQUE7QUEvQ0o7O0FBbURBO0VBQ0UsY0FBQTtBQWhERjtBQWlERTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUEvQ0o7QUFpREU7RUFDRSxTQUFBO0FBL0NKOztBQW1EQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFoREY7QUFrREU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FBaERKO0FBbURFO0VBQ0UsdUJBQUE7QUFqREoiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgLmJhY2ssXG4gIC5vcHRpb25zIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmYyZjJmODc7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWNhcmQge1xuICBoZWlnaHQ6IDYwMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNTBweCA1MHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcCxcbiAgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG5cbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoMCwgMCwgMCwgMCkgMCUsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjI3KSAyNyUsXG4gICAgcmdiYSgxOSwgMTksIDE5LCAxKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgbGVmdCB0b3AsXG4gICAgbGVmdCBib3R0b20sXG4gICAgY29sb3Itc3RvcCgwJSwgcmdiYSgwLCAwLCAwLCAwKSksXG4gICAgY29sb3Itc3RvcCgyNyUsIHJnYmEoMCwgMCwgMCwgMC4yNykpLFxuICAgIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgxOSwgMTksIDE5LCAxKSlcbiAgKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgdG9wLFxuICAgIHJnYmEoMCwgMCwgMCwgMCkgMCUsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjI3KSAyNyUsXG4gICAgcmdiYSgxOSwgMTksIDE5LCAxKSAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChcbiAgICB0b3AsXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjcpIDI3JSxcbiAgICByZ2JhKDE5LCAxOSwgMTksIDEpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChcbiAgICB0b3AsXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAwJSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjcpIDI3JSxcbiAgICByZ2JhKDE5LCAxOSwgMTksIDEpIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGJvdHRvbSxcbiAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yNykgMjclLFxuICAgIHJnYmEoMTksIDE5LCAxOSwgMSkgMTAwJVxuICApO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMCcsIGVuZENvbG9yc3RyPScjMTMxMzEzJywgR3JhZGllbnRUeXBlPTAgKTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuXG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uaW1hZ2VzLXNsaWRlOjpwYXJ0KHNjcm9sbGJhcikge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI1cHg7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogODUlO1xuICBib3R0b206IDExMHB4O1xufVxuXG5zd2lwZXItc2xpZGUgaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuXG4ubWF0Y2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC05NHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xuICB6LWluZGV4OiAxO1xuICByaWdodDogMTBweDtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDBweDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuXG4ucmVzdW1lIHtcbiAgaW9uLWJhZGdlIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGlvbi1jaGlwIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgbWluLWhlaWdodDogMTVweDtcbiAgICB9XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIGgxLFxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnVucmVhZC1saWtlcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiA4NHB4O1xuICB9XG59XG5cbmlvbi1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtaW4taGVpZ2h0OiAxNXB4O1xuICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6ICNlOTFlNjM7XG59XG5cbi5saWtlcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3N0b3JpZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICByaWdodDogOHB4O1xuXG4gIGlvbi1hdmF0YXIgaW1nIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgfVxufVxuXG4jZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDEwcHggMDtcbiAgaW9uLWljb24ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4jZWRpdC1wcm9maWxlIHtcbiAgYmFja2dyb3VuZDogIzJmMmYyZmI4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.trigger)("pulse", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.transition)("* => *", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_29__.pulse))])]
  }
});

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map