"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_explore_explore_module_ts"],{

/***/ 90983:
/*!*******************************************!*\
  !*** ./src/app/explore/explore.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorePageModule: () => (/* binding */ ExplorePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore.page */ 45824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _ExplorePageModule;








const routes = [{
  path: "",
  component: _explore_page__WEBPACK_IMPORTED_MODULE_1__.ExplorePage
}];
class ExplorePageModule {}
_ExplorePageModule = ExplorePageModule;
_ExplorePageModule.ɵfac = function ExplorePageModule_Factory(t) {
  return new (t || _ExplorePageModule)();
};
_ExplorePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ExplorePageModule
});
_ExplorePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExplorePageModule, {
    declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_1__.ExplorePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 45824:
/*!*****************************************!*\
  !*** ./src/app/explore/explore.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorePage: () => (/* binding */ ExplorePage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ 43696);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 44796);
/* harmony import */ var _services_animate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/animate.service */ 29169);
/* harmony import */ var _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../story/story-modal/story.modal */ 79424);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/story.service */ 92395);
/* harmony import */ var _rules_rules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/rules.page */ 39312);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/navigation.service */ 99260);
/* harmony import */ var _post_post_modal_post_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post/post-modal/post.modal */ 85571);
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/page.service */ 77377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/image-preload.directive */ 89024);
/* harmony import */ var _story_story_slider_story_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../story/story-slider/story-slider.component */ 59562);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post/post.component */ 58378);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _ExplorePage;

























function ExplorePage_ion_progress_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ion-progress-bar", 18);
  }
}
function ExplorePage_ion_progress_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ion-progress-bar", 19);
  }
}
function ExplorePage_section_24_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ExplorePage_section_24_ion_item_13_Template_ion_item_click_0_listener() {
      const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showPage(page_r4.slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-thumbnail", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-badge", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", page_r4.cover, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"])("alt", page_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](page_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("#", page_r4.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", page_r4.likes, " ");
  }
}
function ExplorePage_section_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 20)(1, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ExplorePage_section_24_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showPages());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label", 8)(3, "h2", 9)(4, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p", 22)(8, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, ExplorePage_section_24_ion_item_13_Template, 10, 5, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 3, "pginas"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 5, "conoce-personas-con-que-compartes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.pages);
  }
}
function ExplorePage_section_25_app_post_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-post", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("deletePost", function ExplorePage_section_25_app_post_7_Template_app_post_deletePost_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.removePost($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("post", post_r7);
  }
}
function ExplorePage_section_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 29)(1, "ion-item", 7)(2, "ion-label", 8)(3, "h2", 9)(4, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, ExplorePage_section_25_app_post_7_Template, 1, 1, "app-post", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-infinite-scroll", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInfinite", function ExplorePage_section_25_Template_ion_infinite_scroll_ionInfinite_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.getMorePosts($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-infinite-scroll-content", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 2, "posts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.posts);
  }
}
class ExplorePage {
  constructor(router, route, auth, config, animate, storySvc, modalController, nav, pageSvc) {
    this.router = router;
    this.route = route;
    this.auth = auth;
    this.config = config;
    this.animate = animate;
    this.storySvc = storySvc;
    this.modalController = modalController;
    this.nav = nav;
    this.pageSvc = pageSvc;
    this.loading = true;
    this.page = 1;
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.animate.animateSections("section", 600, 500);
      const rules = yield _this.config.get("rules");
      if (!rules) {
        const modal = yield _this.modalController.create({
          component: _rules_rules_page__WEBPACK_IMPORTED_MODULE_6__.RulesPage,
          cssClass: "vertical-modal",
          backdropDismiss: false
        });
        return yield modal.present();
      }
    })();
  }
  ngOnInit() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.getStories();
      yield _this2.getPages();
      yield _this2.getPosts();
      const id = _this2.route.snapshot.paramMap.get("id");
      if (id) {
        try {
          const story = yield _this2.storySvc.getStory(+id);
          if (story.type === "story") {
            _this2.storySvc.showStoriesModal([story]);
          } else {
            _this2.storySvc.showPostModal(story);
          }
        } catch (e) {
          console.error("Historia no encontrada");
        }
      }
      _this2.loading = false;
    })();
  }
  getStories() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let stories = yield _this3.storySvc.getStories();
      _this3.stories = _this3.storySvc.orderStories(stories);
    })();
  }
  getPages() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.pages = yield _this4.pageSvc.getPages(2);
    })();
  }
  getPosts() {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.posts = yield _this5.storySvc.getPosts();
    })();
  }
  getMorePosts(event) {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.page++;
      const posts = yield _this6.storySvc.getPosts(_this6.page);
      _this6.posts = [..._this6.posts, ...posts];
      event.target.complete();
      if (posts.length === 0) {
        event.target.disabled = true;
        return;
      }
    })();
  }
  newStory() {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_4__.StoryModal,
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
      yield modal.onDidDismiss();
      yield _this7.getStories();
    })();
  }
  newPost() {
    var _this8 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this8.modalController.create({
        component: _post_post_modal_post_modal__WEBPACK_IMPORTED_MODULE_8__.PostModal,
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
      yield modal.onDidDismiss();
      yield _this8.getPosts();
    })();
  }
  showPages() {
    this.router.navigate(["/pages"]);
  }
  showPage(id) {
    this.router.navigate(["/page", id]);
  }
  search() {
    this.router.navigate(["/search"]);
  }
  editProfile() {
    this.nav.navigateRoot("/edit-profile");
  }
  removePost(post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
  }
}
_ExplorePage = ExplorePage;
_ExplorePage.ɵfac = function ExplorePage_Factory(t) {
  return new (t || _ExplorePage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_animate_service__WEBPACK_IMPORTED_MODULE_3__.AnimateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_story_service__WEBPACK_IMPORTED_MODULE_5__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_page_service__WEBPACK_IMPORTED_MODULE_9__.PageService));
};
_ExplorePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: _ExplorePage,
  selectors: [["app-explore"]],
  decls: 29,
  vars: 14,
  consts: [[1, "ion-no-border"], ["type", "indeterminate", 4, "ngIf"], ["type", "determinate", "color", "dark", 4, "ngIf"], ["name", "compass"], ["slot", "end", "id", "search"], ["shape", "round", 3, "click"], ["slot", "end", "name", "search"], ["lines", "none", "detail", "false", 1, "section-header"], ["color", "light"], [1, "section"], ["color", "ligth"], ["id", "stories"], [3, "refresh", "stories"], ["id", "pages", 4, "ngIf"], ["id", "posts", 4, "ngIf"], ["slot", "fixed", "horizontal", "end", "vertical", "bottom"], ["color", "primary", 3, "click"], ["name", "add"], ["type", "indeterminate"], ["type", "determinate", "color", "dark"], ["id", "pages"], ["lines", "none", "button", "", "detail", "false", 1, "section-header", 3, "click"], [1, "subtitle"], ["md", "arrow-forward", "ios", "chevron-forward", "slot", "end", "color", "light"], ["button", "", "detail", "false", "lines", "none", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "false", "lines", "none", 3, "click"], ["slot", "start"], ["default", "/assets/img/pages/default-games-page.jpg", 3, "src", "alt"], ["slot", "end", "mode", "ios"], ["id", "posts"], [3, "post", "deletePost", 4, "ngFor", "ngForOf"], ["position", "top", 3, "ionInfinite"], ["loadingSpinner", "dots"], [3, "deletePost", "post"]],
  template: function ExplorePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ExplorePage_ion_progress_bar_1_Template, 1, 0, "ion-progress-bar", 1)(2, ExplorePage_ion_progress_bar_2_Template, 1, 0, "ion-progress-bar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-toolbar")(4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "ion-buttons", 4)(10, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ExplorePage_Template_ion_button_click_10_listener() {
        return ctx.search();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-content")(16, "ion-item", 7)(17, "ion-label", 8)(18, "h2", 9)(19, "ion-text", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](21, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "section", 11)(23, "app-story-slider", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("refresh", function ExplorePage_Template_app_story_slider_refresh_23_listener() {
        return ctx.getStories();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, ExplorePage_section_24_Template, 14, 7, "section", 13)(25, ExplorePage_section_25_Template, 10, 4, "section", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "ion-fab", 15)(27, "ion-fab-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ExplorePage_Template_ion_fab_button_click_27_listener() {
        return ctx.newPost();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 8, "explorar"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 10, "search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](21, 12, "historias-frikis"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("stories", ctx.stories);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.pages == null ? null : ctx.pages.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.posts == null ? null : ctx.posts.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonToolbar, _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_10__.ImagePreloadDirective, _story_story_slider_story_slider_component__WEBPACK_IMPORTED_MODULE_11__.StorySliderComponent, _post_post_component__WEBPACK_IMPORTED_MODULE_12__.PostComponent, _i18n_pipe__WEBPACK_IMPORTED_MODULE_13__.I18nPipe],
  styles: ["#posts[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 10pt;\n  color: rgb(172, 172, 172);\n}\n\nion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 8px;\n  margin-right: 10px;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n#search[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\nion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwbG9yZS9leHBsb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFJQTtFQUNFLFlBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIiNwb3N0cyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuI3NlYXJjaCB7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cblxuaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 29169:
/*!*********************************************!*\
  !*** ./src/app/services/animate.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimateService: () => (/* binding */ AnimateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 21507);
var _AnimateService;



class AnimateService {
  constructor(animationCtrl) {
    this.animationCtrl = animationCtrl;
  }
  animateSections(selector, duration, delayBetweenItems, easing) {
    const animationArray = [];
    const elemArray = document.querySelectorAll(selector);
    for (let i = 0; i <= elemArray.length; i++) {
      // console.log('aqui: ', elemArray[i]);
      const animation = this.animationCtrl.create().addElement(elemArray[i]).easing(easing ? easing : "cubic-bezier(0.55, 0, 1, 0.45)").duration(duration).delay(i * delayBetweenItems).fromTo("opacity", "0", "1");
      // .fromTo("width", "0", "100%");
      animationArray.push(animation);
    }
    animationArray.forEach(animation => {
      animation.play();
    });
  }
}
_AnimateService = AnimateService;
_AnimateService.ɵfac = function AnimateService_Factory(t) {
  return new (t || _AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AnimationController));
};
_AnimateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _AnimateService,
  factory: _AnimateService.ɵfac,
  providedIn: "root"
});

/***/ })

}]);
//# sourceMappingURL=src_app_explore_explore_module_ts.js.map