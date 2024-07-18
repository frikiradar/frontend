"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 20637:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.router.module */ 63324);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 70054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _TabsPageModule;






class TabsPageModule {}
_TabsPageModule = TabsPageModule;
_TabsPageModule.ɵfac = function TabsPageModule_Factory(t) {
  return new (t || _TabsPageModule)();
};
_TabsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _TabsPageModule
});
_TabsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_router_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
  });
})();

/***/ }),

/***/ 70054:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _menu_menu_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../menu/menu.modal */ 71706);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 44796);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification.service */ 87473);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);

var _TabsPage;
















function TabsPage_ion_tab_bar_1_ion_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.counters.radar);
  }
}
function TabsPage_ion_tab_bar_1_ion_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.counters.chats);
  }
}
function TabsPage_ion_tab_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-tab-bar", 1)(1, "ion-tab-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TabsPage_ion_tab_bar_1_ion_badge_3_Template, 2, 1, "ion-badge", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-tab-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-tab-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TabsPage_ion_tab_bar_1_ion_badge_8_Template, 2, 1, "ion-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-tab-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TabsPage_ion_tab_bar_1_Template_ion_tab_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.menu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r1.selected === "radar" ? "primary" : "light")("name", ctx_r1.selected === "radar" ? "location-sharp" : "location-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.counters == null ? null : ctx_r1.counters.radar) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r1.selected === "explore" ? "primary" : "light")("name", "compass" + (ctx_r1.selected === "explore" ? "" : "-outline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx_r1.selected === "chat" ? "primary" : "light")("name", "chatbubbles" + (ctx_r1.selected === "chat" ? "" : "-outline"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r1.counters == null ? null : ctx_r1.counters.chats) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r1.auth.currentUserValue == null ? null : ctx_r1.auth.currentUserValue.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", ctx_r1.auth.currentUserValue == null ? null : ctx_r1.auth.currentUserValue.username);
  }
}
class TabsPage {
  constructor(notificationSvc, detectorRef, auth, router, platform, modalController, meta, title, i18n) {
    this.notificationSvc = notificationSvc;
    this.detectorRef = detectorRef;
    this.auth = auth;
    this.router = router;
    this.platform = platform;
    this.modalController = modalController;
    this.meta = meta;
    this.title = title;
    this.i18n = i18n;
    this.showTabs = true;
    this.router.events.subscribe(event => {
      event.url = event.url === "/" ? "/tabs/radar" : event.url;
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && event.url.includes("/tabs/")) {
        this.selected = event.url.split("/")[2];
      }
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.notificationSvc.notification.subscribe(notification => {
        _this.counters = notification;
        if (!_this.detectorRef["destroyed"]) {
          _this.detectorRef.detectChanges();
        }
      });
      _this.meta.addTags([{
        name: "keywords",
        content: "frikiradar, friki, red social, citas, radar, geolocalización, chat, conocer, gente, amigos, amigas, amor, pareja, ligar, frikis, otakus, gamers, anime, manga, cómics, cosplay"
      }, {
        name: "robots",
        content: "index, follow"
      }, {
        name: "author",
        content: "frikiradar"
      }, {
        charset: "UTF-8"
      }]);
      _this.title.setTitle(_this.i18n.translate("main-page-frikiradar-dating-app-for-geeks"));
      _this.meta.updateTag({
        name: "description",
        content: _this.i18n.translate("find-people-nearby-with-same-tastes")
      });
    })();
  }
  ionViewWillEnter() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.counters = yield _this2.notificationSvc.getUnread();
      _this2.notificationSvc.setNotification(_this2.counters);
    })();
  }
  menu() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _menu_menu_modal__WEBPACK_IMPORTED_MODULE_1__.MenuModal,
        initialBreakpoint: 0.8,
        breakpoints: [0, 0.8],
        cssClass: "sheet-modal",
        showBackdrop: true
      });
      return yield modal.present();
    })();
  }
}
_TabsPage = TabsPage;
_TabsPage.ɵfac = function TabsPage_Factory(t) {
  return new (t || _TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService));
};
_TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _TabsPage,
  selectors: [["app-tabs"]],
  decls: 2,
  vars: 1,
  consts: [["slot", "bottom", 4, "ngIf"], ["slot", "bottom"], ["tab", "radar"], [3, "color", "name"], ["color", "primary", 4, "ngIf"], ["tab", "explore"], ["tab", "chat"], ["color", "primary", "mode", "ios", 4, "ngIf"], [3, "click"], ["default", "/assets/img/users/default.png", 3, "src", "alt"], ["color", "primary"], ["color", "primary", "mode", "ios"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-tabs");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TabsPage_ion_tab_bar_1_Template, 12, 10, "ion-tab-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showTabs);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTabs, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf],
  styles: ["ion-tab-bar[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-dark);\n}\nion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%] {\n  color: white;\n  height: 80%;\n  margin-left: 5px;\n  margin-right: 5px;\n}\nion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%] {\n  color: #e91e63;\n  background: var(--ion-color-medium-dark);\n  border-radius: 20px;\n}\nion-tab-bar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  display: initial;\n  bottom: -6px;\n  position: relative;\n}\nion-tab-bar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\nion-tab-bar.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDRSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQUNOO0FBR0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUROOztBQU1BO0VBQ0UsYUFBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG5cbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuXG4gICAgJi50YWItc2VsZWN0ZWQge1xuICAgICAgY29sb3I6ICNlOTFlNjM7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWRhcmspO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cblxuICBpb24tYXZhdGFyIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIGJvdHRvbTogLTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxuICB9XG59XG5cbmlvbi10YWItYmFyLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 63324:
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 70054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
var _TabsPageRoutingModule;




const routes = [{
  path: "tabs",
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: "radar",
    children: [{
      path: "",
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_radar_radar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../radar/radar.module */ 52071)).then(m => m.RadarPageModule)
    }]
  }, {
    path: "events",
    children: [{
      path: "",
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_events_events_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../events/events.module */ 4647)).then(m => m.EventsPageModule)
    }]
  }, {
    path: "explore",
    children: [{
      path: "",
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore_explore_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../explore/explore.module */ 90983)).then(m => m.ExplorePageModule)
    }, {
      path: "story/:id",
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore_explore_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../explore/explore.module */ 90983)).then(m => m.ExplorePageModule)
    }, {
      path: "post/:id",
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_explore_explore_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../explore/explore.module */ 90983)).then(m => m.ExplorePageModule)
    }]
  }, {
    path: "chat",
    children: [{
      path: "",
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/chat.module */ 54917)).then(m => m.ChatPageModule)
    }, {
      path: ":id",
      loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/chat.module */ 54917)).then(m => m.ChatPageModule)
    }]
  }, {
    path: "",
    redirectTo: "/tabs/radar",
    pathMatch: "full"
  }]
}, {
  path: "",
  redirectTo: "/tabs/radar",
  pathMatch: "full"
}];
class TabsPageRoutingModule {}
_TabsPageRoutingModule = TabsPageRoutingModule;
_TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) {
  return new (t || _TabsPageRoutingModule)();
};
_TabsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TabsPageRoutingModule
});
_TabsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map