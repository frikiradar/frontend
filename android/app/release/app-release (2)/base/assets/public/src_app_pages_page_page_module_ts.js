"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_page_page_module_ts"],{

/***/ 63919:
/*!***************************************************!*\
  !*** ./src/app/pages/page/page-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagePageRoutingModule: () => (/* binding */ PagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.page */ 75585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
var _PagePageRoutingModule;




const routes = [{
  path: '',
  component: _page_page__WEBPACK_IMPORTED_MODULE_0__.PagePage
}];
class PagePageRoutingModule {}
_PagePageRoutingModule = PagePageRoutingModule;
_PagePageRoutingModule.ɵfac = function PagePageRoutingModule_Factory(t) {
  return new (t || _PagePageRoutingModule)();
};
_PagePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _PagePageRoutingModule
});
_PagePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98878:
/*!*******************************************!*\
  !*** ./src/app/pages/page/page.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagePageModule: () => (/* binding */ PagePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-routing.module */ 63919);
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.page */ 75585);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
var _PagePageModule;







class PagePageModule {}
_PagePageModule = PagePageModule;
_PagePageModule.ɵfac = function PagePageModule_Factory(t) {
  return new (t || _PagePageModule)();
};
_PagePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _PagePageModule
});
_PagePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _page_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagePageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PagePageModule, {
    declarations: [_page_page__WEBPACK_IMPORTED_MODULE_1__.PagePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _page_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagePageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 75585:
/*!*****************************************!*\
  !*** ./src/app/pages/page/page.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagePage: () => (/* binding */ PagePage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page.service */ 77377);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/story.service */ 92395);
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ 46538);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/navigation.service */ 99260);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ 29885);
/* harmony import */ var src_app_image_viewer_image_viewer_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/image-viewer/image-viewer.modal */ 29172);
/* harmony import */ var src_app_post_post_modal_post_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/post/post-modal/post.modal */ 85571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/image-preload.directive */ 89024);
/* harmony import */ var _story_story_slider_story_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../story/story-slider/story-slider.component */ 59562);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _PagePage;

























const _c0 = () => [];
const _c1 = a0 => ({
  distance: a0
});
function PagePage_ion_content_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PagePage_ion_content_0_div_11_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.addTag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-chip", 19)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.page == null ? null : ctx_r1.page.likes, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "likes"), "");
  }
}
function PagePage_ion_content_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PagePage_ion_content_0_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.search());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r1.page == null ? null : ctx_r1.page.likes, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 2, "likes"), "");
  }
}
function PagePage_ion_content_0_ion_item_16_ion_text_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-text", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "informacin-obtenida"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "igdb"));
  }
}
function PagePage_ion_content_0_ion_item_16_ion_text_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "informacin-obtenida"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "tmdb"));
  }
}
function PagePage_ion_content_0_ion_item_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PagePage_ion_content_0_ion_item_16_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.showDescription = !ctx_r1.showDescription);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-label")(2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "br")(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, PagePage_ion_content_0_ion_item_16_ion_text_6_Template, 6, 6, "ion-text", 25)(7, PagePage_ion_content_0_ion_item_16_ion_text_7_Template, 6, 6, "ion-text", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ion-buttons", 27)(9, "ion-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r1.showDescription ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.page.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r1.page == null ? null : ctx_r1.page.category) === "games");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r1.page == null ? null : ctx_r1.page.category) === "films");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("name", ctx_r1.showDescription ? "chevron-up" : "chevron-down");
  }
}
function PagePage_ion_content_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 32)(1, "app-story-slider", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("refresh", function PagePage_ion_content_0_div_17_Template_app_story_slider_refresh_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.getStories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("stories", ctx_r1.stories)("selected", ctx_r1.selectedStory)("slug", ctx_r1.page.slug);
  }
}
function PagePage_ion_content_0_div_18_ion_list_1_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 37)(1, "ion-avatar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "ion-skeleton-text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "ion-skeleton-text", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "ion-skeleton-text", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ion-skeleton-text", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function PagePage_ion_content_0_div_18_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PagePage_ion_content_0_div_18_ion_list_1_ion_item_1_Template, 10, 0, "ion-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](1, _c0).constructor(8));
  }
}
function PagePage_ion_content_0_div_18_ng_template_2_ion_item_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, "km-distancia", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c1, user_r9 == null ? null : user_r9.distance)));
  }
}
function PagePage_ion_content_0_div_18_ng_template_2_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PagePage_ion_content_0_div_18_ng_template_2_ion_item_1_Template_ion_item_click_0_listener() {
      const user_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.showProfile(user_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-avatar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-label")(4, "h2")(5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, PagePage_ion_content_0_div_18_ng_template_2_ion_item_1_span_10_Template, 3, 6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", user_r9 == null ? null : user_r9.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](user_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](", ", user_r9.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", user_r9.distance !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](user_r9.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", user_r9.match, "%");
  }
}
function PagePage_ion_content_0_div_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PagePage_ion_content_0_div_18_ng_template_2_ion_item_1_Template, 15, 6, "ion-item", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-infinite-scroll", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ionInfinite", function PagePage_ion_content_0_div_18_ng_template_2_Template_ion_infinite_scroll_ionInfinite_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.searchProfiles($event, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-infinite-scroll-content", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.users);
  }
}
function PagePage_ion_content_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PagePage_ion_content_0_div_18_ion_list_1_Template, 2, 2, "ion-list", 35)(2, PagePage_ion_content_0_div_18_ng_template_2_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const radarItems_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.showSkeleton)("ngIfElse", radarItems_r10);
  }
}
function PagePage_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-content", 5)(1, "ion-header", 6)(2, "ion-toolbar")(3, "ion-buttons", 7)(4, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PagePage_ion_content_0_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ion-thumbnail", 11)(10, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PagePage_ion_content_0_Template_img_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.openViewer(ctx_r1.page.cover ? ctx_r1.page.cover : "/assets/img/pages/default-games-page.jpg", ctx_r1.page.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, PagePage_ion_content_0_div_11_Template, 6, 4, "div", 13)(12, PagePage_ion_content_0_div_12_Template, 7, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, PagePage_ion_content_0_ion_item_16_Template, 11, 5, "ion-item", 15)(17, PagePage_ion_content_0_div_17_Template, 2, 3, "div", 16)(18, PagePage_ion_content_0_div_18_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("fullscreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.page == null ? null : ctx_r1.page.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.page.artwork, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("alt", ctx_r1.page == null ? null : ctx_r1.page.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r1.page.cover, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("alt", ctx_r1.page == null ? null : ctx_r1.page.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](15, 14, ctx_r1.page.release_date, "Y"), "", (ctx_r1.page == null ? null : ctx_r1.page.developer) ? " \u2022 " + ctx_r1.page.developer : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.page.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.auth.currentUserValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r1.users == null ? null : ctx_r1.users.length) || ctx_r1.showSkeleton)("ngIfElse", ctx_r1.noUsers);
  }
}
class PagePage {
  constructor(route, pageSvc, storySvc, auth, tagSvc, toast, modalController, router, nav, meta, title, userSvc) {
    this.route = route;
    this.pageSvc = pageSvc;
    this.storySvc = storySvc;
    this.auth = auth;
    this.tagSvc = tagSvc;
    this.toast = toast;
    this.modalController = modalController;
    this.router = router;
    this.nav = nav;
    this.meta = meta;
    this.title = title;
    this.userSvc = userSvc;
    this.showDescription = false;
    this.scrollPage = 1;
    this.showSkeleton = false;
    this.storiesOpts = {
      slidesPerView: 6.5,
      breakpoints: {
        1024: {
          slidesPerView: 10.5
        }
      }
    };
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this$page, _this$page2, _this$page3, _this$page4;
      const slug = _this.route.snapshot.paramMap.get("slug");
      if (_this.auth.currentUserValue) {
        _this.page = yield _this.pageSvc.getPage(slug);
        _this.tag = _this.auth.currentUserValue.tags.find(t => t.slug === slug);
        _this.getStories();
      } else {
        _this.page = yield _this.pageSvc.getPublicPage(slug);
      }
      _this.searchProfiles();
      _this.meta.addTags([{
        name: "keywords",
        content: "frikiradar, friki, red social, citas, " + ((_this$page = _this.page) === null || _this$page === void 0 ? void 0 : _this$page.name) + ", " + ((_this$page2 = _this.page) === null || _this$page2 === void 0 ? void 0 : _this$page2.category)
      }, {
        name: "robots",
        content: "index, follow"
      }, {
        name: "author",
        content: "frikiradar"
      }, {
        charset: "UTF-8"
      }]);
      _this.title.setTitle("Página de " + ((_this$page3 = _this.page) === null || _this$page3 === void 0 ? void 0 : _this$page3.name) + " en frikiradar");
      _this.meta.updateTag({
        name: "description",
        content: (_this$page4 = _this.page) === null || _this$page4 === void 0 ? void 0 : _this$page4.description
      });
    })();
  }
  getStories() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const stories = yield _this2.storySvc.getStoriesSlug(_this2.page.slug);
      _this2.stories = _this2.storySvc.orderStories(stories);
    })();
  }
  openViewer() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: src_app_image_viewer_image_viewer_modal__WEBPACK_IMPORTED_MODULE_7__.ImageViewerModal,
        componentProps: {
          params: {
            src: _this3.page.cover,
            title: _this3.page.name,
            description: _this3.page.description
          }
        },
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
    })();
  }
  addTag() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.auth.currentUserValue) {
        try {
          const toast = yield _this4.toast.create({
            message: `Añadiendo etiqueta ${_this4.page.name}.`,
            duration: 5000,
            position: "top",
            buttons: [{
              text: "Deshacer",
              handler: () => {}
            }]
          });
          toast.present();
          const log = yield toast.onDidDismiss();
          if (log.role === "timeout") {
            _this4.tag = yield _this4.tagSvc.addTag(_this4.page.name, _this4.page.category, _this4.page.slug);
            (yield _this4.toast.create({
              message: `Etiqueta añadida ${_this4.page.name}.`,
              duration: 5000,
              position: "bottom"
            })).present();
          }
          const user = _this4.auth.currentUserValue;
          user.tags = [...[_this4.tag], ...user.tags];
          _this4.auth.setAuthUser(user);
        } catch (e) {
          (yield _this4.toast.create({
            message: `Error al añadir la etiqueta ${_this4.page.name}.`,
            color: "danger",
            duration: 5000,
            position: "middle"
          })).present();
          console.error(e);
        }
      } else {
        _this4.nav.navigateRoot(["/login"], {
          queryParams: {
            returnUrl: _this4.router.url
          }
        });
      }
    })();
  }
  search() {
    this.router.navigate(["/search", this.page.name]);
  }
  searchProfiles(event, addpage = false) {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (addpage) {
        _this5.scrollPage++;
      }
      if (_this5.scrollPage === 1) {
        _this5.showSkeleton = true;
      }
      let users = yield _this5.userSvc.searchUsersBySlug(_this5.page.slug, "distance", _this5.scrollPage);
      users = users.filter(u => !u.hide);
      _this5.showSkeleton = false;
      _this5.users = _this5.scrollPage === 1 ? _this5.users = users : [..._this5.users, ...users];
      if (event) {
        event.target.complete();
        if (users.length < 15) {
          event.target.disabled = true;
        }
      }
    })();
  }
  showProfile(id) {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.router.navigate(["/profile", id]);
    })();
  }
  newPost() {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: src_app_post_post_modal_post_modal__WEBPACK_IMPORTED_MODULE_8__.PostModal,
        componentProps: {
          slug: _this7.page.slug
        },
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
      yield modal.onDidDismiss();
    })();
  }
  back() {
    this.nav.back();
  }
}
_PagePage = PagePage;
_PagePage.ɵfac = function PagePage_Factory(t) {
  return new (t || _PagePage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_2__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_story_service__WEBPACK_IMPORTED_MODULE_3__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_tag_service__WEBPACK_IMPORTED_MODULE_4__.TagService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService));
};
_PagePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: _PagePage,
  selectors: [["app-page"]],
  decls: 4,
  vars: 1,
  consts: [["radarItems", ""], [3, "fullscreen", 4, "ngIf"], ["slot", "fixed", "horizontal", "end", "vertical", "bottom"], ["color", "primary", 3, "click"], ["name", "add"], [3, "fullscreen"], [1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["id", "artwork", "default", "/assets/img/pages/default-games-page.jpg", 3, "src", "alt"], ["id", "cover"], ["default", "/assets/img/pages/default-games-page.jpg", 3, "click", "src", "alt"], ["id", "add-tag", 3, "click", 4, "ngIf"], ["id", "release"], ["lines", "none", "id", "description", "button", "", "detail", "false", 3, "ngClass", "click", 4, "ngIf"], ["id", "stories", 4, "ngIf"], ["id", "search", 4, "ngIf", "ngIfElse"], ["id", "add-tag", 3, "click"], ["color", "secondary"], ["name", "heart-outline"], ["name", "search"], ["name", "heart"], ["lines", "none", "id", "description", "button", "", "detail", "false", 3, "click", "ngClass"], [1, "ion-text-wrap"], ["color", "light", 4, "ngIf"], [4, "ngIf"], ["slot", "end"], ["slot", "icon-only", "color", "light", 3, "name"], ["color", "light"], ["href", "https://www.igdb.com/"], ["href", "https://www.themoviedb.org/"], ["id", "stories"], [3, "refresh", "stories", "selected", "slug"], ["id", "search"], [4, "ngIf", "ngIfElse"], ["lines", "full", 4, "ngFor", "ngForOf"], ["lines", "full"], ["animated", ""], ["animated", "", 2, "width", "50%"], ["animated", "", 2, "width", "80%"], ["animated", "", 2, "width", "60%"], ["button", "", "lines", "full", 3, "click", 4, "ngFor", "ngForOf"], ["threshold", "50%", "position", "bottom", 3, "ionInfinite"], ["loadingSpinner", "dots"], ["button", "", "lines", "full", 3, "click"], ["default", "/assets/img/users/default.png", 3, "src"], [1, "name"], [1, "age"], [1, "description"], ["slot", "end", 1, "match", "full-center"]],
  template: function PagePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, PagePage_ion_content_0_Template, 19, 17, "ion-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-fab", 2)(2, "ion-fab-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PagePage_Template_ion_fab_button_click_2_listener() {
        return ctx.newPost();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.page);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_9__.ImagePreloadDirective, _story_story_slider_story_slider_component__WEBPACK_IMPORTED_MODULE_10__.StorySliderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe, _i18n_pipe__WEBPACK_IMPORTED_MODULE_11__.I18nPipe],
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  --background: transparent;\n}\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  background: var(--ion-color-medium-dark);\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n}\nion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 1px 1px 1px black;\n}\n\n#artwork[_ngcontent-%COMP%] { \n\n  filter: blur(1px);\n  height: 230px;\n  width: 100%;\n  object-fit: cover;\n}\n\nion-thumbnail#cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 120px;\n  left: 20px;\n  display: inline-flex;\n  --border-radius: 5px;\n  padding: 5px;\n  --size: 120px;\n  height: auto;\n}\nion-thumbnail#cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 8px;\n  max-height: 150px;\n}\n\n#add-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 180px;\n  right: 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n#add-tag[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n#release[_ngcontent-%COMP%] {\n  color: var(--ion-color-light);\n  position: relative;\n  left: 150px;\n  top: 8px;\n  min-height: 40px;\n}\n\n#description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 13px;\n}\n\n#description.collapsed[_ngcontent-%COMP%] {\n  height: 70px;\n}\n#description.collapsed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal !important;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n#description.expanded[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n#description.expanded[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal !important;\n}\n\n#stories[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 10px 0 10px 10px;\n  background: var(--ion-color-medium-dark);\n  border-radius: 25px 0 0 25px;\n}\n#stories[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], \n#stories[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n#stories[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  left: 35px;\n  bottom: 5px;\n}\n#stories[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  width: 72px;\n}\n\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-color-dark);\n  --border-color: var(--ion-color-primary);\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar.md[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar.ios[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 70px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 15px;\n  height: 15px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  width: 150px;\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.ios[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  max-height: 30px;\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.md[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  max-height: 36px;\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  color: #bbbbbb;\n  white-space: initial;\n}\n#search[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .match[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  border: 2px solid var(--ion-color-light);\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-left: 10px;\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZS9wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUlBLFdBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUVBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRkY7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFIRjtBQUtFO0VBQ0UsWUFBQTtBQUhKOztBQU9BO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVNBO0VBQ0UsWUFBQTtBQU5GO0FBT0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFMSjs7QUFTQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQU5GO0FBT0U7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUFMSjs7QUFTQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7QUFORjtBQVFFOztFQUVFLFdBQUE7RUFDQSxZQUFBO0FBTko7QUFTRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBUEo7QUFVRTtFQUNFLFdBQUE7QUFSSjs7QUFjSTtFQUNFLG1DQUFBO0VBQ0Esd0NBQUE7QUFYTjtBQWNRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFaVjtBQWVRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFiVjtBQWdCUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7QUFkVjtBQWtCTTtFQUNFLFlBQUE7QUFoQlI7QUFpQlE7RUFDRSxlQUFBO0FBZlY7QUFrQlE7RUFDRSxnQkFBQTtBQWhCVjtBQW1CUTtFQUNFLGdCQUFBO0FBakJWO0FBb0JRO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFuQlY7QUF1Qk07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQXJCUiIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyayk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XG4gIH1cbn1cblxuI2FydHdvcmsge1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigxcHgpOyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gIGZpbHRlcjogYmx1cigxcHgpO1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmlvbi10aHVtYm5haWwjY292ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIC0tc2l6ZTogMTIwcHg7XG4gIGhlaWdodDogYXV0bztcblxuICBpbWcge1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICB9XG59XG5cbiNhZGQtdGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4MHB4O1xuICByaWdodDogMjBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuI3JlbGVhc2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxNTBweDtcbiAgdG9wOiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbiNkZXNjcmlwdGlvbiB7XG4gIHAge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbiNkZXNjcmlwdGlvbi5jb2xsYXBzZWQge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB9XG59XG5cbiNkZXNjcmlwdGlvbi5leHBhbmRlZCB7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHAge1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuI3N0b3JpZXMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyayk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMCAwIDI1cHg7XG5cbiAgaW9uLWF2YXRhcixcbiAgaW9uLWF2YXRhciBpbWcge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgfVxuXG4gIGlvbi1iYWRnZSB7XG4gICAgbGVmdDogMzVweDtcbiAgICBib3R0b206IDVweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgd2lkdGg6IDcycHg7XG4gIH1cbn1cblxuI3NlYXJjaCB7XG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAmLm1kIHtcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlvcyB7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaW9zIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWQgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiAjYmJiYmJiO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tYXRjaCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page_page_module_ts.js.map