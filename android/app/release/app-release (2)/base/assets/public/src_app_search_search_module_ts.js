"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_search_search_module_ts"],{

/***/ 39045:
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPageModule: () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 72702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _SearchPageModule;








const routes = [{
  path: "",
  component: _search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage
}];
class SearchPageModule {}
_SearchPageModule = SearchPageModule;
_SearchPageModule.ɵfac = function SearchPageModule_Factory(t) {
  return new (t || _SearchPageModule)();
};
_SearchPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _SearchPageModule
});
_SearchPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchPageModule, {
    declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 72702:
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPage: () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 29885);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/i18n.service */ 98898);
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/page.service */ 77377);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 43696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/image-preload.directive */ 89024);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _SearchPage;
















const _c0 = ["searchBar"];
const _c1 = () => [];
const _c2 = a0 => ({
  distance: a0
});
function SearchPage_ion_progress_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-progress-bar", 13);
  }
}
function SearchPage_ion_progress_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ion-progress-bar", 14);
  }
}
function SearchPage_div_16_ion_list_1_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item", 16)(1, "ion-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-skeleton-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ion-skeleton-text", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ion-skeleton-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-skeleton-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function SearchPage_div_16_ion_list_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SearchPage_div_16_ion_list_1_ion_item_1_Template, 10, 0, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c1).constructor(8));
  }
}
function SearchPage_div_16_ng_template_2_ion_item_sliding_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "km-distancia", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, user_r4.distance)));
  }
}
function SearchPage_div_16_ng_template_2_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-item-sliding", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionDrag", function SearchPage_div_16_ng_template_2_ion_item_sliding_1_Template_ion_item_sliding_ionDrag_0_listener($event) {
      const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.dragItem($event, user_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-item-options", 25)(2, "ion-item-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchPage_div_16_ng_template_2_ion_item_sliding_1_Template_ion_item_option_click_2_listener() {
      const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.showProfile(user_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchPage_div_16_ng_template_2_ion_item_sliding_1_Template_ion_item_click_4_listener() {
      const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.showProfile(user_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-label")(8, "h2")(9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, SearchPage_div_16_ng_template_2_ion_item_sliding_1_span_14_Template, 3, 6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "ion-item-options", 34)(20, "ion-item-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchPage_div_16_ng_template_2_ion_item_sliding_1_Template_ion_item_option_click_20_listener() {
      const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.hideProfile(user_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "ion-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", user_r4 == null ? null : user_r4.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](", ", user_r4.age, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r4.distance !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", user_r4.match, "%");
  }
}
function SearchPage_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SearchPage_div_16_ng_template_2_ion_item_sliding_1_Template, 22, 6, "ion-item-sliding", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ion-infinite-scroll", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionInfinite", function SearchPage_div_16_ng_template_2_Template_ion_infinite_scroll_ionInfinite_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.search($event, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-infinite-scroll-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.users);
  }
}
function SearchPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SearchPage_div_16_ion_list_1_Template, 2, 2, "ion-list", 12)(2, SearchPage_div_16_ng_template_2_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const radarItems_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.showSkeleton)("ngIfElse", radarItems_r6);
  }
}
function SearchPage_ng_template_17_div_0_ion_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-chip", 42)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchPage_ng_template_17_div_0_ion_chip_5_Template_ion_label_click_3_listener() {
      const page_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.showPage(page_r8.slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", page_r8.cover, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", page_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](page_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](page_r8.likes);
  }
}
function SearchPage_ng_template_17_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SearchPage_ng_template_17_div_0_ion_chip_5_Template, 7, 4, "ion-chip", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "my-interests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.pages);
  }
}
function SearchPage_ng_template_17_div_1_ion_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-chip", 42)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchPage_ng_template_17_div_1_ion_chip_5_Template_ion_label_click_3_listener() {
      const page_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.showPage(page_r11.slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", page_r11.cover, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", page_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](page_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](page_r11.likes);
  }
}
function SearchPage_ng_template_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SearchPage_ng_template_17_div_1_ion_chip_5_Template, 7, 4, "ion-chip", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-infinite-scroll", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionInfinite", function SearchPage_ng_template_17_div_1_Template_ion_infinite_scroll_ionInfinite_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.addOtherPages($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "ion-infinite-scroll-content", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "explore-interests"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.otherPages);
  }
}
function SearchPage_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, SearchPage_ng_template_17_div_0_Template, 6, 4, "div", 37)(1, SearchPage_ng_template_17_div_1_Template, 8, 4, "div", 38);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.pages == null ? null : ctx_r4.pages.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.otherPages == null ? null : ctx_r4.otherPages.length);
  }
}
class SearchPage {
  constructor(pagesSvc, config, userSvc, router, route, toast, nav, i18n) {
    this.pagesSvc = pagesSvc;
    this.config = config;
    this.userSvc = userSvc;
    this.router = router;
    this.route = route;
    this.toast = toast;
    this.nav = nav;
    this.i18n = i18n;
    this.loading = true;
    this.page = 1;
    this.showSkeleton = false;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.route.snapshot.paramMap.get("query")) {
        _this.query = _this.route.snapshot.paramMap.get("query");
        _this.searchBar.value = _this.query;
        _this.search();
      } else {
        _this.getPages();
      }
      _this.loading = false;
      setTimeout(() => {
        _this.searchBar.setFocus();
      }, 250);
    })();
  }
  getPages() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.pages = yield _this2.pagesSvc.getPages();
      _this2.notFilteredPages = _this2.pages;
      _this2.config.set("pages", _this2.pages);
      _this2.otherPages = yield _this2.pagesSvc.getOtherPages(15, 1);
      _this2.notFilteredOtherPages = _this2.otherPages;
    })();
  }
  search(event, addpage = false) {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.query && _this3.query.trim()) {
        if (addpage) {
          _this3.page++;
        }
        if (_this3.page === 1) {
          _this3.showSkeleton = true;
        }
        let users = yield _this3.userSvc.searchUsers(_this3.query.trim(), "distance", _this3.page);
        users = users.filter(u => !u.hide);
        _this3.showSkeleton = false;
        _this3.users = _this3.page === 1 ? _this3.users = users : [..._this3.users, ...users];
        if (event) {
          event.target.complete();
          if (users.length < 15) {
            event.target.disabled = true;
          }
        }
      }
    })();
  }
  showProfile(id) {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.router.navigate(["/profile", id]);
    })();
  }
  hideProfile(id) {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const users = _this5.users;
      _this5.users = _this5.users.filter(u => u.id !== id);
      const toast = yield _this5.toast.create({
        message: _this5.i18n.translate("user-hidden"),
        duration: 3000,
        position: "bottom",
        buttons: [{
          text: _this5.i18n.translate("undo"),
          handler: () => {
            _this5.users = users;
          }
        }]
      });
      toast.present();
      const log = yield toast.onDidDismiss();
      if (log.role === "timeout") {
        _this5.userSvc.hide(id);
      }
    })();
  }
  addOtherPages(event) {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.query) {
        _this6.page++;
        const otherPages = yield _this6.pagesSvc.getOtherPages(15, _this6.page);
        _this6.otherPages = [..._this6.otherPages, ...otherPages];
        if (event) {
          event.target.complete();
          if (otherPages.length < 15) {
            event.target.disabled = true;
          }
        }
      }
    })();
  }
  filterPages(value) {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (value) {
        _this7.pages = _this7.notFilteredPages.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
        _this7.otherPages = _this7.notFilteredOtherPages.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
        let searchPages = yield _this7.pagesSvc.searchPages(value);
        searchPages = searchPages.filter(p => !_this7.otherPages.find(op => op.id === p.id));
        _this7.otherPages = [..._this7.otherPages, ...searchPages];
      } else {
        _this7.pages = _this7.notFilteredPages;
        _this7.otherPages = _this7.notFilteredOtherPages;
      }
    })();
  }
  newSearch(query) {
    this.query = query;
    this.page = 1;
    this.search();
  }
  dragItem(event, id) {
    var _this8 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event.detail.ratio > 1.8) {
        _this8.hideProfile(id);
      } else if (event.detail.ratio < -1.8) {
        yield event.target.close();
        _this8.showProfile(id);
      }
    })();
  }
  showPage(slug) {
    var _this9 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.router.navigate(["/page", slug]);
    })();
  }
  back() {
    this.nav.back();
  }
}
_SearchPage = SearchPage;
_SearchPage.ɵfac = function SearchPage_Factory(t) {
  return new (t || _SearchPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_3__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService));
};
_SearchPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _SearchPage,
  selectors: [["app-search"]],
  viewQuery: function SearchPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchBar = _t.first);
    }
  },
  decls: 19,
  vars: 10,
  consts: [["searchBar", ""], ["noUsers", ""], ["radarItems", ""], [1, "ion-no-border"], ["type", "indeterminate", 4, "ngIf"], ["type", "determinate", "color", "dark", 4, "ngIf"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["id", "search-input", "lines", "none"], ["slot", "start", "name", "search-outline"], ["aria-label", "", "type", "search", "debounce", "500", "spellcheck", "false", "color", "light", "clearInput", "", 3, "ionInput", "keyup.enter", "placeholder"], [4, "ngIf", "ngIfElse"], ["type", "indeterminate"], ["type", "determinate", "color", "dark"], ["lines", "full", 4, "ngFor", "ngForOf"], ["lines", "full"], ["animated", ""], ["animated", "", 2, "width", "50%"], ["animated", "", 2, "width", "80%"], ["animated", "", 2, "width", "60%"], [3, "ionDrag", 4, "ngFor", "ngForOf"], ["threshold", "50%", "position", "bottom", 3, "ionInfinite"], ["loadingSpinner", "dots"], [3, "ionDrag"], ["side", "start"], ["slot", "icon-only", "name", "heart"], ["button", "", "lines", "full", 3, "click"], ["default", "/assets/img/users/default.png", 3, "src"], [1, "name"], [1, "age"], [4, "ngIf"], [1, "description"], ["slot", "end", 1, "match", "full-center"], ["side", "end"], ["color", "danger", "expandable", "", 3, "click"], ["slot", "icon-only", "name", "close-circle"], ["id", "my-interests", "class", "ion-padding", 4, "ngIf"], ["id", "other-interests", "class", "ion-padding", 4, "ngIf"], ["id", "my-interests", 1, "ion-padding"], [1, "ion-text-wrap"], ["color", "secondary", 4, "ngFor", "ngForOf"], ["color", "secondary"], ["default", "/assets/img/pages/default-games-page.jpg", 3, "src", "alt"], ["id", "other-interests", 1, "ion-padding"]],
  template: function SearchPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SearchPage_ion_progress_bar_1_Template, 1, 0, "ion-progress-bar", 4)(2, SearchPage_ion_progress_bar_2_Template, 1, 0, "ion-progress-bar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-toolbar")(4, "ion-buttons", 6)(5, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchPage_Template_ion_button_click_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.back());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-content")(11, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ion-input", 11, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionInput", function SearchPage_Template_ion_input_ionInput_13_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.filterPages($event.target.value));
      })("keyup.enter", function SearchPage_Template_ion_input_keyup_enter_13_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.newSearch($event.target.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SearchPage_div_16_Template, 4, 2, "div", 12)(17, SearchPage_ng_template_17_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const noUsers_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 6, "search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 8, "busca-intereses"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.users == null ? null : ctx.users.length) || ctx.showSkeleton)("ngIfElse", noUsers_r12);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.TextValueAccessor, _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_5__.ImagePreloadDirective, _i18n_pipe__WEBPACK_IMPORTED_MODULE_6__.I18nPipe],
  styles: ["ion-header[_ngcontent-%COMP%] {\n  background: var(--ion-color-dark);\n}\n\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-color-dark);\n  --border-color: var(--ion-color-primary);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar.md[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar.ios[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 70px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 15px;\n  height: 15px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  width: 150px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.ios[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  max-height: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.md[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  max-height: 36px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  color: #bbbbbb;\n  white-space: initial;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .match[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  border: 2px solid white;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-left: 10px;\n  background-color: var(--ion-color-primary);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]:first-child   ion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]:first-child   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]:first-child   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]:first-child   ion-item[_ngcontent-%COMP%]   .match[_ngcontent-%COMP%] {\n  background-color: white;\n  color: var(--ion-color-primary);\n  border: 2px solid var(--ion-color-light);\n  height: 60px;\n  width: 60px;\n  font-size: 13px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   .item-options-end[_ngcontent-%COMP%] {\n  background-color: #f04041;\n}\n\n#search-input[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-light);\n  border-radius: 50px;\n  margin: 20px;\n}\n#search-input[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n#my-interests[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n#my-interests[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%], \n#other-interests[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--ion-color-light);\n}\n#my-interests[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], \n#other-interests[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: var(--ion-color-light) !important;\n  min-height: 15px;\n}\n#my-interests[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%], \n#other-interests[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQUNGOztBQUdFO0VBQ0Usb0NBQUE7QUFBSjtBQUVJO0VBQ0UsbUNBQUE7RUFDQSx3Q0FBQTtBQUFOO0FBR1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURWO0FBSVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZWO0FBS1E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBSFY7QUFPTTtFQUNFLFlBQUE7QUFMUjtBQU1RO0VBQ0UsZUFBQTtBQUpWO0FBT1E7RUFDRSxnQkFBQTtBQUxWO0FBUVE7RUFDRSxnQkFBQTtBQU5WO0FBU1E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVJWO0FBWU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQVZSO0FBY0k7RUFDRSxzQ0FBQTtBQVpOO0FBYU07O0VBRUUsdUJBQUE7QUFYUjtBQWNNO0VBQ0UsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWlI7QUFnQkk7RUFDRSx5QkFBQTtBQWROOztBQW1CQTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBaEJGO0FBa0JFO0VBQ0Usa0JBQUE7QUFoQko7O0FBb0JBO0VBQ0UsZ0JBQUE7QUFqQkY7O0FBc0JFOztFQUNFLHVCQUFBO0VBQ0Esd0NBQUE7QUFsQko7QUFtQkk7O0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtBQWhCTjtBQW1CSTs7RUFDRSxnQkFBQTtBQWhCTiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3QgaW9uLWl0ZW0tc2xpZGluZyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgJi5tZCB7XG4gICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pb3Mge1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDcwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlvcyAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1kIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogI2JiYmJiYjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWF0Y2gge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpmaXJzdC1jaGlsZCBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGgyLFxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAubWF0Y2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLW9wdGlvbnMtZW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDQwNDE7XG4gICAgfVxuICB9XG59XG5cbiNzZWFyY2gtaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IDIwcHg7XG5cbiAgaW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuXG4jbXktaW50ZXJlc3RzIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuI215LWludGVyZXN0cyxcbiNvdGhlci1pbnRlcmVzdHMge1xuICBpb24tY2hpcCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBpb24tbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgICAgIG1pbi1oZWlnaHQ6IDE1cHg7XG4gICAgfVxuXG4gICAgaW9uLW5vdGUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_search_search_module_ts.js.map