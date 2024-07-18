"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 54917:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatPageModule: () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 93887);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 60510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
var _ChatPageModule;








const routes = [{
  path: "",
  component: _chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage
}];
class ChatPageModule {}
_ChatPageModule = ChatPageModule;
_ChatPageModule.ɵfac = function ChatPageModule_Factory(t) {
  return new (t || _ChatPageModule)();
};
_ChatPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ChatPageModule
});
_ChatPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChatPageModule, {
    declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 60510:
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatPage: () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ 44796);
/* harmony import */ var _rules_rules_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/rules.page */ 39312);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ 43696);
/* harmony import */ var _chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-modal/chat-modal.component */ 13393);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chat.service */ 40856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-list/chat-list.component */ 29339);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _ChatPage;


















function ChatPage_app_chat_modal_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-chat-modal", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("backToList", function ChatPage_app_chat_modal_1_Template_app_chat_modal_backToList_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.backToList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("userId", ctx_r1.userId);
  }
}
function ChatPage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "no-hay-mensajes"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 4, "selecciona-un-chat"));
  }
}
class ChatPage {
  constructor(route, auth, modalController, config, chatSvc) {
    this.route = route;
    this.auth = auth;
    this.modalController = modalController;
    this.config = config;
    this.chatSvc = chatSvc;
    this.userChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.desktop = window.innerWidth > 991;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      window.onresize = /*#__PURE__*/(0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.desktop = window.innerWidth > 991;
      });
      _this.routeSub = _this.route.paramMap.subscribe(params => {
        const id = +params.get("id");
        if (id) {
          history.pushState(null, null, "/tabs/chat");
          _this.showChat(id);
        }
      });
      const rules = yield _this.config.get("rules");
      if (!rules) {
        const modal = yield _this.modalController.create({
          component: _rules_rules_page__WEBPACK_IMPORTED_MODULE_2__.RulesPage,
          cssClass: "vertical-modal",
          backdropDismiss: false
        });
        return yield modal.present();
      }
    })();
  }
  showChat(id) {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.chatSvc.selectUser(id);
      if (_this2.desktop) {
        _this2.userId = id;
      } else {
        const modal = yield _this2.modalController.create({
          component: _chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_4__.ChatModalComponent,
          componentProps: {
            userId: id
          },
          cssClass: "vertical-modal"
        });
        yield modal.present();
        yield modal.onDidDismiss().then(data => {
          _this2.backToList();
        });
      }
    })();
  }
  backToList() {
    this.userId = null;
    this.chatSvc.selectUser(null);
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
_ChatPage = ChatPage;
_ChatPage.ɵfac = function ChatPage_Factory(t) {
  return new (t || _ChatPage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService));
};
_ChatPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _ChatPage,
  selectors: [["app-chat"]],
  inputs: {
    userChangeEvent: "userChangeEvent"
  },
  decls: 3,
  vars: 2,
  consts: [[3, "userChangeEvent"], [3, "userId", "backToList", 4, "ngIf"], ["class", "full-center ion-padding", 4, "ngIf"], [3, "backToList", "userId"], [1, "full-center", "ion-padding"], ["name", "chatbubbles"]],
  template: function ChatPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-chat-list", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("userChangeEvent", function ChatPage_Template_app_chat_list_userChangeEvent_0_listener($event) {
        return ctx.showChat($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ChatPage_app_chat_modal_1_Template, 1, 1, "app-chat-modal", 1)(2, ChatPage_div_2_Template, 8, 6, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userId);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.userId && ctx.desktop);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_6__.ChatListComponent, _chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_4__.ChatModalComponent, _i18n_pipe__WEBPACK_IMPORTED_MODULE_7__.I18nPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\napp-chat-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\napp-chat-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 991px) {\n  app-chat-list[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n  }\n}\n@media (min-width: 992px) {\n  app-chat-list[_ngcontent-%COMP%] {\n    max-width: 350px;\n  }\n  app-chat-list[_ngcontent-%COMP%]     ion-list, \n   app-chat-list[_ngcontent-%COMP%]     ion-item, \n   app-chat-list[_ngcontent-%COMP%]     ion-content {\n    --background: var(--ion-color-medium-dark) !important;\n    background: var(--ion-color-medium-dark) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsT0FBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQUE7RUFBRjtFQUdJOzs7SUFHRSxxREFBQTtJQUNBLG1EQUFBO0VBRE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYXBwLWNoYXQtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtY2hhdC1tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgYXBwLWNoYXQtbGlzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgYXBwLWNoYXQtbGlzdCB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcblxuICAgIDo6bmctZGVlcCB7XG4gICAgICBpb24tbGlzdCxcbiAgICAgIGlvbi1pdGVtLFxuICAgICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyaykgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1kYXJrKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts.js.map