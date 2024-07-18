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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _story_story_slider_story_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../story/story-slider/story-slider.component */ 59562);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post/post.component */ 58378);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _ExplorePage;






















function ExplorePage_ion_progress_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 17);
  }
}
function ExplorePage_ion_progress_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ion-progress-bar", 18);
  }
}
function ExplorePage_section_24_app_post_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-post", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("deletePost", function ExplorePage_section_24_app_post_7_Template_app_post_deletePost_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.removePost($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("post", post_r4);
  }
}
function ExplorePage_section_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 19)(1, "ion-item", 7)(2, "ion-label", 8)(3, "h2", 9)(4, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ExplorePage_section_24_app_post_7_Template, 1, 1, "app-post", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ion-infinite-scroll", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ionInfinite", function ExplorePage_section_24_Template_ion_infinite_scroll_ionInfinite_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.getMorePosts($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "ion-infinite-scroll-content", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 2, "posts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.posts);
  }
}
class ExplorePage {
  constructor(router, route, auth, config, animate, storySvc, modalController, nav) {
    this.router = router;
    this.route = route;
    this.auth = auth;
    this.config = config;
    this.animate = animate;
    this.storySvc = storySvc;
    this.modalController = modalController;
    this.nav = nav;
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
  getPosts() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.posts = yield _this4.storySvc.getPosts();
    })();
  }
  getMorePosts(event) {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.page++;
      const posts = yield _this5.storySvc.getPosts(_this5.page);
      _this5.posts = [..._this5.posts, ...posts];
      event.target.complete();
      if (posts.length === 0) {
        event.target.disabled = true;
        return;
      }
    })();
  }
  newStory() {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this6.modalController.create({
        component: _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_4__.StoryModal,
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
      yield modal.onDidDismiss();
      yield _this6.getStories();
    })();
  }
  newPost() {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: _post_post_modal_post_modal__WEBPACK_IMPORTED_MODULE_8__.PostModal,
        keyboardClose: true,
        showBackdrop: true,
        cssClass: "vertical-modal"
      });
      yield modal.present();
      yield modal.onDidDismiss();
      yield _this7.getPosts();
    })();
  }
  showPages() {
    this.router.navigate(["/pages"]);
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
  return new (t || _ExplorePage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_animate_service__WEBPACK_IMPORTED_MODULE_3__.AnimateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_story_service__WEBPACK_IMPORTED_MODULE_5__.StoryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__.NavService));
};
_ExplorePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: _ExplorePage,
  selectors: [["app-explore"]],
  decls: 28,
  vars: 13,
  consts: [[1, "ion-no-border"], ["type", "indeterminate", 4, "ngIf"], ["type", "determinate", "color", "dark", 4, "ngIf"], ["name", "compass"], ["slot", "end", "id", "search"], ["shape", "round", 3, "click"], ["slot", "end", "name", "search"], ["lines", "none", "detail", "false", 1, "section-header"], ["color", "light"], [1, "section"], ["color", "ligth"], ["id", "stories"], [3, "refresh", "stories"], ["id", "posts", 4, "ngIf"], ["slot", "fixed", "horizontal", "end", "vertical", "bottom"], ["color", "primary", 3, "click"], ["name", "add"], ["type", "indeterminate"], ["type", "determinate", "color", "dark"], ["id", "posts"], [3, "post", "deletePost", 4, "ngFor", "ngForOf"], ["position", "top", 3, "ionInfinite"], ["loadingSpinner", "dots"], [3, "deletePost", "post"]],
  template: function ExplorePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ExplorePage_ion_progress_bar_1_Template, 1, 0, "ion-progress-bar", 1)(2, ExplorePage_ion_progress_bar_2_Template, 1, 0, "ion-progress-bar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-toolbar")(4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ion-buttons", 4)(10, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ExplorePage_Template_ion_button_click_10_listener() {
        return ctx.search();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "ion-content")(16, "ion-item", 7)(17, "ion-label", 8)(18, "h2", 9)(19, "ion-text", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "section", 11)(23, "app-story-slider", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("refresh", function ExplorePage_Template_app_story_slider_refresh_23_listener() {
        return ctx.getStories();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, ExplorePage_section_24_Template, 10, 4, "section", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "ion-fab", 14)(26, "ion-fab-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ExplorePage_Template_ion_fab_button_click_26_listener() {
        return ctx.newPost();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](27, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 7, "explorar"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 9, "search"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 11, "historias-frikis"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("stories", ctx.stories);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.posts == null ? null : ctx.posts.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInfiniteScroll, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInfiniteScrollContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonToolbar, _story_story_slider_story_slider_component__WEBPACK_IMPORTED_MODULE_9__.StorySliderComponent, _post_post_component__WEBPACK_IMPORTED_MODULE_10__.PostComponent, _i18n_pipe__WEBPACK_IMPORTED_MODULE_11__.I18nPipe],
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