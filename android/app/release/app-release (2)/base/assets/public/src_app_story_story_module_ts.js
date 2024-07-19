"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_story_story_module_ts"],{

/***/ 28522:
/*!***********************************************!*\
  !*** ./src/app/story/story-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryPageRoutingModule: () => (/* binding */ StoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _story_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.page */ 68188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
var _StoryPageRoutingModule;




const routes = [{
  path: '',
  component: _story_page__WEBPACK_IMPORTED_MODULE_0__.StoryPage
}];
class StoryPageRoutingModule {}
_StoryPageRoutingModule = StoryPageRoutingModule;
_StoryPageRoutingModule.ɵfac = function StoryPageRoutingModule_Factory(t) {
  return new (t || _StoryPageRoutingModule)();
};
_StoryPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _StoryPageRoutingModule
});
_StoryPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StoryPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 38291:
/*!***************************************!*\
  !*** ./src/app/story/story.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryPageModule: () => (/* binding */ StoryPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _story_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story-routing.module */ 28522);
/* harmony import */ var _story_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.page */ 68188);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
var _StoryPageModule;







class StoryPageModule {}
_StoryPageModule = StoryPageModule;
_StoryPageModule.ɵfac = function StoryPageModule_Factory(t) {
  return new (t || _StoryPageModule)();
};
_StoryPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _StoryPageModule
});
_StoryPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _story_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoryPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StoryPageModule, {
    declarations: [_story_page__WEBPACK_IMPORTED_MODULE_1__.StoryPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _story_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoryPageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 68188:
/*!*************************************!*\
  !*** ./src/app/story/story.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryPage: () => (/* binding */ StoryPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 44796);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 43696);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation.service */ 99260);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/story.service */ 92395);
/* harmony import */ var _story_modal_story_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story-modal/story.modal */ 79424);
/* harmony import */ var _view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-stories/view-stories.modal */ 19260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _nice_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nice-date.pipe */ 45982);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _StoryPage;
















function StoryPage_ion_progress_bar_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-progress-bar", 11);
  }
}
function StoryPage_ion_item_20_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const story_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", story_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", story_r2.text);
  }
}
function StoryPage_ion_item_20_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 16);
  }
  if (rf & 2) {
    const story_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", story_r2.user.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"])("alt", story_r2.user.username);
  }
}
function StoryPage_ion_item_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StoryPage_ion_item_20_Template_ion_item_click_0_listener() {
      const story_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.showStories(story_r2.user.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, StoryPage_ion_item_20_img_2_Template, 1, 2, "img", 14)(3, StoryPage_ion_item_20_img_3_Template, 1, 2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-label")(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-note", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "niceDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const story_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", (story_r2 == null ? null : story_r2.viewed) ? "" : "not-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", story_r2.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !story_r2.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](story_r2.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](story_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 6, story_r2.time_creation), " ");
  }
}
class StoryPage {
  constructor(storySvc, modalController, auth, nav, config) {
    this.storySvc = storySvc;
    this.modalController = modalController;
    this.auth = auth;
    this.nav = nav;
    this.config = config;
    this.loading = true;
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.groupedStories = yield _this.config.get("stories");
    })();
  }
  ngOnInit() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.getStories();
    })();
  }
  getStories() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const stories = yield _this3.storySvc.getStories();
      _this3.stories = _this3.storySvc.orderStories(stories);
      _this3.groupedStories = _this3.storySvc.groupStories(_this3.stories);
      _this3.config.set("stories", _this3.groupedStories);
      _this3.loading = false;
    })();
  }
  showStories(id) {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let stories = _this4.stories.reverse().filter(s => s.user.id === id);
      stories = [...stories, ..._this4.stories.reverse().filter(s => s.user.id !== id)];
      const modal = yield _this4.modalController.create({
        component: _view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_6__.ViewStoriesModal,
        componentProps: {
          stories
        },
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
      yield modal.onDidDismiss();
      _this4.getStories();
    })();
  }
  newStory() {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modalController.create({
        component: _story_modal_story_modal__WEBPACK_IMPORTED_MODULE_5__.StoryModal,
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
      yield modal.onDidDismiss();
      yield _this5.getStories();
    })();
  }
  back() {
    this.nav.back();
  }
}
_StoryPage = StoryPage;
_StoryPage.ɵfac = function StoryPage_Factory(t) {
  return new (t || _StoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_story_service__WEBPACK_IMPORTED_MODULE_4__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
};
_StoryPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: _StoryPage,
  selectors: [["app-story"]],
  decls: 21,
  vars: 9,
  consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["type", "indeterminate", 4, "ngIf"], ["id", "all-stories"], ["button", "", "detail", "false", "lines", "none", "mode", "md", 3, "click"], ["alt", "auth.currentUserValue?.name", 3, "src"], ["slot", "start", "color", "primary"], ["name", "add"], ["button", "", "detail", "false", "lines", "none", 3, "click", 4, "ngFor", "ngForOf"], ["type", "indeterminate"], ["button", "", "detail", "false", "lines", "none", 3, "click"], ["slot", "start", 3, "ngClass"], [3, "src", "alt", 4, "ngIf"], ["slot", "end"], [3, "src", "alt"]],
  template: function StoryPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StoryPage_Template_ion_button_click_3_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, StoryPage_ion_progress_bar_9_Template, 1, 0, "ion-progress-bar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-list", 5)(11, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StoryPage_Template_ion_item_click_11_listener() {
        return ctx.newStory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-avatar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-badge", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-label")(17, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, StoryPage_ion_item_20_Template, 12, 8, "ion-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 5, "historias-frikis"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.auth.currentUserValue == null ? null : ctx.auth.currentUserValue.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 7, "your-story"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.groupedStories);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _nice_date_pipe__WEBPACK_IMPORTED_MODULE_7__.NiceDatePipe, _i18n_pipe__WEBPACK_IMPORTED_MODULE_8__.I18nPipe],
  styles: ["ion-item[_ngcontent-%COMP%] {\n  --border-color: #e91e63;\n}\nion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #dddddd;\n}\n\n#all-stories[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n}\n#all-stories[_ngcontent-%COMP%]   ion-avatar.not-view[_ngcontent-%COMP%] {\n  border: 2px solid #e91e63;\n}\n#all-stories[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 100%;\n  z-index: 1;\n  border: 2px solid var(--ion-color-dark);\n  font-size: 10pt;\n  bottom: 0.5rem;\n  padding: 0;\n  height: 20px;\n  width: 20px;\n  text-align: center;\n  left: 54px;\n}\n#all-stories[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3Rvcnkvc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0UseUJBQUE7QUFETjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSEo7QUFLSTtFQUNFLHNCQUFBO0FBSE4iLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZTkxZTYzO1xuXG4gIHAge1xuICAgIGNvbG9yOiAjZGRkZGRkO1xuICB9XG59XG5cbiNhbGwtc3RvcmllcyB7XG4gIGlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogNTVweDtcblxuICAgICYubm90LXZpZXcge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U5MWU2MztcbiAgICB9XG4gIH1cblxuICBpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBib3R0b206IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogNTRweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_story_story_module_ts.js.map