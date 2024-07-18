"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 77170:
/*!***********************************************************!*\
  !*** ./src/app/settings/block-users/block-users.modal.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockUsersModal: () => (/* binding */ BlockUsersModal)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 29885);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/image-preload.directive */ 89024);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _BlockUsersModal;










function BlockUsersModal_div_9_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 7)(1, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-buttons")(7, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlockUsersModal_div_9_ion_item_2_Template_ion_button_click_7_listener() {
      const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.unblock(user_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", user_r3.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r3.name);
  }
}
function BlockUsersModal_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BlockUsersModal_div_9_ion_item_2_Template, 9, 2, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.users);
  }
}
function BlockUsersModal_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "sin-resultados"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "no-has-bloqueado-ningn-usuario"));
  }
}
class BlockUsersModal {
  constructor(modalController, userSvc, toast, i18n) {
    this.modalController = modalController;
    this.userSvc = userSvc;
    this.toast = toast;
    this.i18n = i18n;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.users = yield _this.userSvc.getBlocks();
    })();
  }
  unblock(user) {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.users = yield _this2.userSvc.unblock(user.id);
      (yield _this2.toast.create({
        message: _this2.i18n.translate("user-unblocked-successfully"),
        duration: 2000,
        position: "bottom"
      })).present();
    })();
  }
  close() {
    this.modalController.dismiss();
  }
}
_BlockUsersModal = BlockUsersModal;
_BlockUsersModal.ɵfac = function BlockUsersModal_Factory(t) {
  return new (t || _BlockUsersModal)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService));
};
_BlockUsersModal.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _BlockUsersModal,
  selectors: [["block-users-modal"]],
  decls: 12,
  vars: 5,
  consts: [["noUsers", ""], [1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], [4, "ngIf", "ngIfElse"], ["lines", "full", 4, "ngFor", "ngForOf"], ["lines", "full"], ["default", "/assets/img/users/default.png", 3, "src"], ["slot", "icon-only", "color", "primary", "name", "trash"], [1, "full-center", "ion-padding"], ["name", "body"]],
  template: function BlockUsersModal_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlockUsersModal_Template_ion_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BlockUsersModal_div_9_Template, 3, 1, "div", 5)(10, BlockUsersModal_ng_template_10_Template, 8, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const noUsers_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "usuarios-bloqueados"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.users == null ? null : ctx.users.length)("ngIfElse", noUsers_r5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_3__.ImagePreloadDirective, _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23762:
/*!*************************************************************!*\
  !*** ./src/app/settings/change-email/change-email.modal.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeEmailModal: () => (/* binding */ ChangeEmailModal)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ 44796);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 29885);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _ChangeEmailModal;













function ChangeEmailModal_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "introduce-una-direccin-correo-electrnico"), " ");
  }
}
class ChangeEmailModal {
  constructor(fb, modalController, userSvc, auth, alert, toast, i18n) {
    this.fb = fb;
    this.modalController = modalController;
    this.userSvc = userSvc;
    this.auth = auth;
    this.alert = alert;
    this.toast = toast;
    this.i18n = i18n;
    this.clearOldPassword = false;
    this.clearPassword = false;
    this.user = this.auth.currentUserValue;
    this.emailForm = fb.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")])
    });
  }
  submitForm() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this.userSvc.changeEmail(_this.user.email, _this.emailForm.get("email").value);
        _this.auth.setAuthUser(user);
        (yield _this.toast.create({
          message: _this.i18n.translate("email-changed-successfully"),
          duration: 2000,
          position: "bottom"
        })).present();
        _this.modalController.dismiss();
      } catch (e) {
        const alert = yield _this.alert.create({
          header: _this.i18n.translate("there-has-been-an-error"),
          message: _this.i18n.translate("email-already-in-use"),
          buttons: [_this.i18n.translate("okay")],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  close() {
    this.modalController.dismiss();
  }
}
_ChangeEmailModal = ChangeEmailModal;
_ChangeEmailModal.ɵfac = function ChangeEmailModal_Factory(t) {
  return new (t || _ChangeEmailModal)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService));
};
_ChangeEmailModal.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _ChangeEmailModal,
  selectors: [["change-email-modal"]],
  decls: 23,
  vars: 19,
  consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding"], ["autocomplete", "off", 3, "submit", "formGroup"], ["labelPlacement", "floating", "required", "", "type", "email", "autocomplete", "email", "formControlName", "email", "debounce", "500", "name", "email", 3, "label", "value"], ["class", "error-message", 4, "ngIf"], ["color", "primary", "expand", "block", "type", "submit", "shape", "round", 3, "disabled"], [1, "error-message"], ["name", "information-circle-outline"]],
  template: function ChangeEmailModal_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangeEmailModal_Template_ion_button_click_3_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content", 4)(9, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function ChangeEmailModal_Template_form_submit_15_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ChangeEmailModal_div_19_Template, 4, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 9, "cambiar-correo-electrnico"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 11, "quieres-cambiar-tu-correo-electrnico"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 13, "asegrate-introducir-una-nueva-direccin"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.emailForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 15, "email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.emailForm.get("email").invalid && ctx.emailForm.get("email").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.emailForm.invalid || ctx.emailForm.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 17, "confirmar-cambio"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 11246:
/*!*******************************************************************!*\
  !*** ./src/app/settings/change-password/change-password.modal.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordModal: () => (/* binding */ ChangePasswordModal)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ 44796);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 29885);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _ChangePasswordModal;













function ChangePasswordModal_ion_buttons_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 11)(1, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordModal_ion_buttons_19_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearOldPassword = !ctx_r1.clearOldPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx_r1.clearOldPassword ? "eye" : "eye-off");
  }
}
function ChangePasswordModal_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Introduce un m\u00EDnimo de 8 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ChangePasswordModal_ion_buttons_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 11)(1, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordModal_ion_buttons_24_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearPassword = !ctx_r1.clearPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx_r1.clearPassword ? "eye" : "eye-off");
  }
}
function ChangePasswordModal_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Introduce un m\u00EDnimo de 8 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class ChangePasswordModal {
  constructor(fb, modalController, userSvc, auth, alert, toast, i18n) {
    this.fb = fb;
    this.modalController = modalController;
    this.userSvc = userSvc;
    this.auth = auth;
    this.alert = alert;
    this.toast = toast;
    this.i18n = i18n;
    this.clearOldPassword = false;
    this.clearPassword = false;
    this.passForm = fb.group({
      oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)])
    });
  }
  submitForm() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this.userSvc.changePassword(_this.passForm.get("oldPassword").value, _this.passForm.get("password").value);
        _this.auth.setAuthUser(user);
        (yield _this.toast.create({
          message: _this.i18n.translate("password-changed-successfully"),
          duration: 2000,
          position: "bottom"
        })).present();
        _this.modalController.dismiss();
      } catch (e) {
        const alert = yield _this.alert.create({
          header: _this.i18n.translate("current-password-not-valid"),
          message: _this.i18n.translate("check-and-try-again"),
          buttons: [_this.i18n.translate("okay")],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  close() {
    this.modalController.dismiss();
  }
}
_ChangePasswordModal = ChangePasswordModal;
_ChangePasswordModal.ɵfac = function ChangePasswordModal_Factory(t) {
  return new (t || _ChangePasswordModal)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService));
};
_ChangePasswordModal.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _ChangePasswordModal,
  selectors: [["change-password-modal"]],
  decls: 29,
  vars: 26,
  consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding"], ["autocomplete", "off", 3, "submit", "formGroup"], ["labelPlacement", "floating", "required", "", "formControlName", "oldPassword", "debounce", "500", "name", "password", 3, "label", "type"], ["slot", "end", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["labelPlacement", "floating", "required", "", "formControlName", "password", "debounce", "500", "name", "password", 3, "label", "type"], ["color", "primary", "type", "submit", "expand", "block", "shape", "round", 3, "disabled"], ["slot", "end"], ["slot", "icon-only", 3, "name"], [1, "error-message"], ["name", "information-circle-outline"]],
  template: function ChangePasswordModal_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangePasswordModal_Template_ion_button_click_3_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content", 4)(9, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function ChangePasswordModal_Template_form_submit_15_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ChangePasswordModal_ion_buttons_19_Template, 3, 1, "ion-buttons", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ChangePasswordModal_div_20_Template, 3, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ChangePasswordModal_ion_buttons_24_Template, 3, 1, "ion-buttons", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ChangePasswordModal_div_25_Template, 3, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 14, "cambiar-contrasea"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 16, "quieres-cambiar-tu-contrasea"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 18, "primero-introduce-tu-contrasea-actual"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.passForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 20, "contrasena-actual"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.clearOldPassword ? "text" : "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.passForm.get("oldPassword").pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passForm.get("oldPassword").invalid && ctx.passForm.get("oldPassword").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 22, "nueva-contrasena"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.clearPassword ? "text" : "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.passForm.get("password").pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passForm.get("password").invalid && ctx.passForm.get("password").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.passForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 24, "cambiar-contrasea"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 18418:
/*!*******************************************************************!*\
  !*** ./src/app/settings/change-username/change-username.modal.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeUsernameModal: () => (/* binding */ ChangeUsernameModal)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ 44796);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 29885);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _ChangeUsernameModal;













function ChangeUsernameModal_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "mnimo-3-caracteres-mximo-15"), " ");
  }
}
function ChangeUsernameModal_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "letras-nmeros-guiones-puntos"), " ");
  }
}
class ChangeUsernameModal {
  constructor(fb, modalController, userSvc, auth, alert, toast, i18n) {
    this.fb = fb;
    this.modalController = modalController;
    this.userSvc = userSvc;
    this.auth = auth;
    this.alert = alert;
    this.toast = toast;
    this.i18n = i18n;
    this.clearOldPassword = false;
    this.clearPassword = false;
    this.user = this.auth.currentUserValue;
    this.usernameForm = fb.group({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+")])
    });
  }
  submitForm() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this.userSvc.changeUsername(_this.usernameForm.get("username").value);
        _this.auth.setAuthUser(user);
        (yield _this.toast.create({
          message: _this.i18n.translate("username-changed-successfully"),
          duration: 2000,
          position: "bottom"
        })).present();
        _this.modalController.dismiss();
        _this.auth.logout();
      } catch (e) {
        const alert = yield _this.alert.create({
          header: _this.i18n.translate("there-has-been-an-error"),
          message: _this.i18n.translate("username-already-in-use"),
          buttons: [_this.i18n.translate("okay-try-another")],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  close() {
    this.modalController.dismiss();
  }
}
_ChangeUsernameModal = ChangeUsernameModal;
_ChangeUsernameModal.ɵfac = function ChangeUsernameModal_Factory(t) {
  return new (t || _ChangeUsernameModal)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService));
};
_ChangeUsernameModal.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _ChangeUsernameModal,
  selectors: [["change-username-modal"]],
  decls: 24,
  vars: 20,
  consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding"], ["autocomplete", "off", 3, "submit", "formGroup"], ["labelPlacement", "floating", "required", "", "type", "text", "autocapitalize", "words", "formControlName", "username", "debounce", "500", "name", "username", 3, "label", "value"], ["class", "error-message", 4, "ngIf"], ["color", "primary", "expand", "block", "type", "submit", "shape", "round", 3, "disabled"], [1, "error-message"], ["name", "information-circle-outline"]],
  template: function ChangeUsernameModal_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChangeUsernameModal_Template_ion_button_click_3_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content", 4)(9, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function ChangeUsernameModal_Template_form_submit_15_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ChangeUsernameModal_div_19_Template, 4, 3, "div", 7)(20, ChangeUsernameModal_div_20_Template, 4, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 10, "cambiar-nombre-usuario"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 12, "quieres-cambiar-tu-correo-nombre"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 14, "indica-continuacin-nuevo-nombre-que"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.usernameForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 16, "username"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.user.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.usernameForm.get("username").invalid && ctx.usernameForm.get("username").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.usernameForm.get("username").invalid && ctx.usernameForm.get("username").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.usernameForm.invalid || ctx.usernameForm.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 18, "confirmar-cambio"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 80866:
/*!***************************************************!*\
  !*** ./src/app/settings/devices/devices.modal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevicesSettingsModal: () => (/* binding */ DevicesSettingsModal)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 29885);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ 44796);
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/device.service */ 93560);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _DevicesSettingsModal;













function DevicesSettingsModal_ion_item_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item", 4)(1, "ion-buttons")(2, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DevicesSettingsModal_ion_item_23_Template_ion_button_click_2_listener() {
      const device_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.switchNotifications(device_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-buttons")(7, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DevicesSettingsModal_ion_item_23_Template_ion_button_click_7_listener() {
      const device_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.removeDevice(device_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const device_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !device_r2.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", device_r2.active && device_r2.token ? "notifications" : "notifications-off");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](device_r2.device_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("color", device_r2.current ? "primary" : "light")("name", device_r2.current ? "phone-portrait" : "trash");
  }
}
class DevicesSettingsModal {
  constructor(modalController, alert, devicesSvc, auth, toast, userSvc, i18n) {
    this.modalController = modalController;
    this.alert = alert;
    this.devicesSvc = devicesSvc;
    this.auth = auth;
    this.toast = toast;
    this.userSvc = userSvc;
    this.i18n = i18n;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = _this.auth.currentUserValue;
      _this.devices = yield _this.devicesSvc.getDevices(true);
      const currentDevice = yield _this.devicesSvc.getCurrentDevice();
      if (currentDevice) {
        _this.devices.map(device => {
          device.current = device.device_id === currentDevice.device_id || device.token === currentDevice.token;
        });
      }
    })();
  }
  removeDevice(device) {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!device.current) {
        _this2.devices = _this2.devices.filter(d => d.id !== device.id);
        const user = yield _this2.devicesSvc.removeDevice(device);
        _this2.auth.setAuthUser(user);
        (yield _this2.toast.create({
          message: _this2.i18n.translate("device-removed"),
          duration: 2000,
          position: "bottom"
        })).present();
      } else {
        (yield _this2.alert.create({
          message: _this2.i18n.translate("cannot-remove-current-device"),
          buttons: [_this2.i18n.translate("understood")],
          cssClass: "round-alert"
        })).present();
      }
    })();
  }
  switchNotifications(device) {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.devices.map(d => {
        if (device.id === d.id) {
          d.active = !device.active;
        }
      });
      const user = yield _this3.devicesSvc.switchDevice(device);
      _this3.auth.setAuthUser(user);
      if (!device.active) {
        (yield _this3.toast.create({
          message: _this3.i18n.translate("notifications-muted"),
          duration: 2000,
          position: "bottom"
        })).present();
      } else {
        (yield _this3.toast.create({
          message: _this3.i18n.translate("notifications-activated"),
          duration: 2000,
          position: "bottom"
        })).present();
      }
    })();
  }
  switchMailing() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.user.mailing = !_this4.user.mailing;
      _this4.user = yield _this4.userSvc.updateUser(_this4.user);
    })();
  }
  close() {
    this.modalController.dismiss();
  }
}
_DevicesSettingsModal = DevicesSettingsModal;
_DevicesSettingsModal.ɵfac = function DevicesSettingsModal_Factory(t) {
  return new (t || _DevicesSettingsModal)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_device_service__WEBPACK_IMPORTED_MODULE_3__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService));
};
_DevicesSettingsModal.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _DevicesSettingsModal,
  selectors: [["devices-modal"]],
  decls: 24,
  vars: 14,
  consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], ["lines", "full"], ["name", "mail", "slot", "start"], ["slot", "end", "aria-label", "Notificaciones promocionales", 3, "ionChange", "checked"], [1, "ion-text-wrap"], [1, "ion-padding"], ["lines", "full", 4, "ngFor", "ngForOf"], [3, "click", "disabled"], ["slot", "icon-only", 3, "name"], ["slot", "icon-only", 3, "color", "name"]],
  template: function DevicesSettingsModal_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DevicesSettingsModal_Template_ion_button_click_3_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-content")(9, "ion-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-checkbox", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function DevicesSettingsModal_Template_ion_checkbox_ionChange_11_listener() {
        return ctx.switchMailing();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-label")(13, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DevicesSettingsModal_ion_item_23_Template, 9, 5, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 6, "dispositivos-notificaciones"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.user.mailing);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 8, "notificaciones-promocionales"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 10, "me-gustara-recibir-informacin-por"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 12, "estos-son-dispositivos-con-que"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.devices);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _i18n_pipe__WEBPACK_IMPORTED_MODULE_5__.I18nPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 81202:
/*!*********************************************************!*\
  !*** ./src/app/settings/hide-users/hide-users.modal.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HideUsersModal: () => (/* binding */ HideUsersModal)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 29885);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/image-preload.directive */ 89024);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _HideUsersModal;










function HideUsersModal_div_9_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 7)(1, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-buttons")(7, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HideUsersModal_div_9_ion_item_2_Template_ion_button_click_7_listener() {
      const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.unhide(user_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", user_r3.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r3.name);
  }
}
function HideUsersModal_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HideUsersModal_div_9_ion_item_2_Template, 9, 2, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.users);
  }
}
function HideUsersModal_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "sin-resultados"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "no-has-ocultado-ningn-usuario"));
  }
}
class HideUsersModal {
  constructor(modalController, userSvc, toast, i18n) {
    this.modalController = modalController;
    this.userSvc = userSvc;
    this.toast = toast;
    this.i18n = i18n;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.users = yield _this.userSvc.getHides();
    })();
  }
  unhide(user) {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.users = yield _this2.userSvc.unhide(user.id);
      (yield _this2.toast.create({
        message: _this2.i18n.translate("user-unhidden-successfully"),
        duration: 2000,
        position: "bottom"
      })).present();
    })();
  }
  close() {
    this.modalController.dismiss();
  }
}
_HideUsersModal = HideUsersModal;
_HideUsersModal.ɵfac = function HideUsersModal_Factory(t) {
  return new (t || _HideUsersModal)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService));
};
_HideUsersModal.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _HideUsersModal,
  selectors: [["hide-users-modal"]],
  decls: 12,
  vars: 5,
  consts: [["noUsers", ""], [1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], [4, "ngIf", "ngIfElse"], ["lines", "full", 4, "ngFor", "ngForOf"], ["lines", "full"], ["default", "/assets/img/users/default.png", 3, "src"], ["slot", "icon-only", "color", "primary", "name", "trash"], [1, "full-center", "ion-padding"], ["name", "body"]],
  template: function HideUsersModal_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HideUsersModal_Template_ion_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HideUsersModal_div_9_Template, 3, 1, "div", 5)(10, HideUsersModal_ng_template_10_Template, 8, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const noUsers_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "usuarios-ocultos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.users == null ? null : ctx.users.length)("ngIfElse", noUsers_r5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_3__.ImagePreloadDirective, _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 58951:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPageModule: () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _block_users_block_users_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-users/block-users.modal */ 77170);
/* harmony import */ var _change_email_change_email_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-email/change-email.modal */ 23762);
/* harmony import */ var _change_password_change_password_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.modal */ 11246);
/* harmony import */ var _change_username_change_username_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-username/change-username.modal */ 18418);
/* harmony import */ var _devices_devices_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devices/devices.modal */ 80866);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ 97984);
/* harmony import */ var _verification_verification_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verification/verification.modal */ 42366);
/* harmony import */ var _hide_users_hide_users_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hide-users/hide-users.modal */ 81202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
var _SettingsPageModule;















const routes = [{
  path: "",
  component: _settings_page__WEBPACK_IMPORTED_MODULE_6__.SettingsPage
}];
class SettingsPageModule {}
_SettingsPageModule = SettingsPageModule;
_SettingsPageModule.ɵfac = function SettingsPageModule_Factory(t) {
  return new (t || _SettingsPageModule)();
};
_SettingsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _SettingsPageModule
});
_SettingsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SettingsPageModule, {
    declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__.SettingsPage, _change_password_change_password_modal__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordModal, _change_email_change_email_modal__WEBPACK_IMPORTED_MODULE_2__.ChangeEmailModal, _change_username_change_username_modal__WEBPACK_IMPORTED_MODULE_4__.ChangeUsernameModal, _devices_devices_modal__WEBPACK_IMPORTED_MODULE_5__.DevicesSettingsModal, _block_users_block_users_modal__WEBPACK_IMPORTED_MODULE_1__.BlockUsersModal, _hide_users_hide_users_modal__WEBPACK_IMPORTED_MODULE_8__.HideUsersModal, _verification_verification_modal__WEBPACK_IMPORTED_MODULE_7__.VerificationModal],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 97984:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 29885);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/auth.service */ 44796);
/* harmony import */ var _block_users_block_users_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-users/block-users.modal */ 77170);
/* harmony import */ var _change_email_change_email_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-email/change-email.modal */ 23762);
/* harmony import */ var _change_password_change_password_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.modal */ 11246);
/* harmony import */ var _change_username_change_username_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-username/change-username.modal */ 18418);
/* harmony import */ var _devices_devices_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devices/devices.modal */ 80866);
/* harmony import */ var _disable_account_disable_account_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disable-account/disable-account.page */ 76232);
/* harmony import */ var _verification_verification_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verification/verification.modal */ 42366);
/* harmony import */ var _hide_users_hide_users_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hide-users/hide-users.modal */ 81202);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/navigation.service */ 99260);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/utils.service */ 54171);
/* harmony import */ var _payments_payments_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payments/payments.modal */ 43302);
/* harmony import */ var _unlimited_unlimited_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../unlimited/unlimited.modal */ 94530);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/config.service */ 43696);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! swiper/angular */ 72443);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _SettingsPage;






























function SettingsPage_p_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "comprueba-estado-verificacin-tu-cuenta"), " ");
  }
}
function SettingsPage_p_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "verifica-tu-cuenta-para-mejorar"), " ");
  }
}
function SettingsPage_ng_template_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_ng_template_137_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.toggleTheme("dark"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 1, "oscuro"));
  }
}
function SettingsPage_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_ng_template_138_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.toggleTheme("light"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 1, "claro"));
  }
}
function SettingsPage_ng_template_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_ng_template_139_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.toggleTheme("cyberpunk"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("name", ctx_r1.auth.isPremium() ? "lock-open" : "lock-closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 2, "cyberpunk"));
  }
}
function SettingsPage_ng_template_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_ng_template_140_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.toggleTheme("fire"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("name", ctx_r1.auth.isPremium() ? "lock-open" : "lock-closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 2, "fuego"));
  }
}
function SettingsPage_ng_template_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_ng_template_141_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.toggleTheme("black"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("name", ctx_r1.auth.isPremium() ? "lock-open" : "lock-closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 2, "100-negro"));
  }
}
function SettingsPage_ng_template_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "ion-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_ng_template_142_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.toggleTheme("strawberries-and-cream"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "ion-thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("name", ctx_r1.auth.isPremium() ? "lock-open" : "lock-closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 2, "fresas-con-crema"));
  }
}
class SettingsPage {
  constructor(modalController, auth, userSvc, alert, nav, utils, config, i18n, cd) {
    this.modalController = modalController;
    this.auth = auth;
    this.userSvc = userSvc;
    this.alert = alert;
    this.nav = nav;
    this.utils = utils;
    this.config = config;
    this.i18n = i18n;
    this.cd = cd;
    this.themesOpts = {
      slidesPerView: 3.5,
      breakpoints: {
        1024: {
          slidesPerView: 5.5
        }
      },
      grabCursor: true
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = _this.auth.currentUserValue;
      _this.language = yield _this.config.get("language");
    })();
  }
  passwordModal() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalController.create({
        component: _change_password_change_password_modal__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordModal
      });
      return yield modal.present();
    })();
  }
  devicesSettingsModal() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalController.create({
        component: _devices_devices_modal__WEBPACK_IMPORTED_MODULE_7__.DevicesSettingsModal
      });
      return yield modal.present();
    })();
  }
  blockUsersModal() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _block_users_block_users_modal__WEBPACK_IMPORTED_MODULE_3__.BlockUsersModal
      });
      return yield modal.present();
    })();
  }
  hideUsersModal() {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this5.modalController.create({
        component: _hide_users_hide_users_modal__WEBPACK_IMPORTED_MODULE_10__.HideUsersModal
      });
      return yield modal.present();
    })();
  }
  get showConnection() {
    return !this.user.hide_connection;
  }
  set showConnection(value) {
    this.user.hide_connection = !value;
  }
  get showLocation() {
    return !this.user.hide_location;
  }
  set showLocation(value) {
    this.user.hide_location = !value;
  }
  get allowMessages() {
    return !this.user.block_messages;
  }
  set allowMessages(value) {
    this.user.block_messages = !value;
  }
  clearLocalStorage() {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.removeItem("config");
      yield caches.keys().then(keyList => {
        keyList.forEach(cache => {
          caches.delete(cache);
        });
      });
      const alert = yield _this6.alert.create({
        header: _this6.i18n.translate("successfully-deleted"),
        message: _this6.i18n.translate("local-settings-and-cache-deleted"),
        buttons: [{
          text: _this6.i18n.translate("okay"),
          handler: () => {
            window.location.reload();
          }
        }],
        cssClass: "round-alert"
      });
      alert.present();
    })();
  }
  usernameModal() {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: _change_username_change_username_modal__WEBPACK_IMPORTED_MODULE_6__.ChangeUsernameModal
      });
      return yield modal.present();
    })();
  }
  emailModal() {
    var _this8 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this8.modalController.create({
        component: _change_email_change_email_modal__WEBPACK_IMPORTED_MODULE_4__.ChangeEmailModal
      });
      return yield modal.present();
    })();
  }
  disableAccountModal() {
    var _this9 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this9.modalController.create({
        component: _disable_account_disable_account_page__WEBPACK_IMPORTED_MODULE_8__.DisableAccountPage,
        cssClass: "full-modal"
      });
      return yield modal.present();
    })();
  }
  premiumModal() {
    var _this10 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this10.modalController.create({
        component: _unlimited_unlimited_modal__WEBPACK_IMPORTED_MODULE_14__.UnlimitedModal,
        cssClass: "vertical-modal"
      });
      return yield modal.present();
    })();
  }
  paymentsModal() {
    var _this11 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this11.modalController.create({
        component: _payments_payments_modal__WEBPACK_IMPORTED_MODULE_13__.PaymentsModal,
        cssClass: "vertical-modal"
      });
      return yield modal.present();
    })();
  }
  verificationModal() {
    var _this12 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this12.modalController.create({
        component: _verification_verification_modal__WEBPACK_IMPORTED_MODULE_9__.VerificationModal
      });
      return yield modal.present();
    })();
  }
  onChangeCheck(property, value) {
    var _this13 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this13.user[property] = !value;
      try {
        _this13.user = yield _this13.userSvc.updateUser(_this13.user);
      } catch (e) {
        const alert = yield _this13.alert.create({
          header: _this13.i18n.translate("error-saving-changes"),
          message: _this13.i18n.translate("try-again-in-a-few-minutes"),
          buttons: [_this13.i18n.translate("okay")],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  premium() {
    var _this14 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this14.modalController.create({
        component: _unlimited_unlimited_modal__WEBPACK_IMPORTED_MODULE_14__.UnlimitedModal,
        cssClass: "vertical-modal",
        componentProps: {
          topic: "theme"
        }
      });
      yield modal.present();
    })();
  }
  toggleTheme(theme) {
    var _this15 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this15.auth.isPremium() || theme === "dark" || theme === "light") {
        _this15.utils.toggleTheme(theme);
      } else {
        const alert = yield _this15.alert.create({
          header: _this15.i18n.translate("exclusive-theme-for-unlimited-members"),
          message: _this15.i18n.translate("join-unlimited-and-get-exclusive-advantages"),
          buttons: [{
            text: _this15.i18n.translate("i-want-to-know-more"),
            handler: () => {
              _this15.premium();
            }
          }],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  changeLanguage(value) {
    var _this16 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this16.user.language = value;
        _this16.user = yield _this16.userSvc.updateUser(_this16.user);
        _this16.i18n.setLanguage(value);
        _this16.cd.detectChanges();
      } catch (e) {
        const alert = yield _this16.alert.create({
          header: _this16.i18n.translate("error-saving-changes"),
          message: _this16.i18n.translate("try-again-in-a-few-minutes"),
          buttons: [_this16.i18n.translate("okay")],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  back() {
    this.nav.back();
  }
}
_SettingsPage = SettingsPage;
_SettingsPage.ɵfac = function SettingsPage_Factory(t) {
  return new (t || _SettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_11__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_utils_service__WEBPACK_IMPORTED_MODULE_12__.UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_15__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_16__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef));
};
_SettingsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: _SettingsPage,
  selectors: [["app-settings"]],
  decls: 196,
  vars: 108,
  consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["color", "primary"], ["name", "lock-closed", "slot", "start"], ["button", "", "lines", "full", 3, "click"], ["name", "key-outline", "slot", "start"], ["name", "notifications-outline", "slot", "start"], ["lines", "full"], ["name", "checkmark-done-circle-outline", "slot", "start"], ["slot", "end", "aria-label", "Autenticaci\u00F3n en dos pasos", 3, "ngModelChange", "ngModel"], ["name", "ribbon-outline", "slot", "start"], [4, "ngIf"], ["name", "eye", "slot", "start"], ["name", "location-outline", "slot", "start"], ["slot", "end", "aria-label", "Localizaci\u00F3n exacta", 3, "ngModelChange", "ngModel"], ["name", "chatbubbles-outline", "slot", "start"], ["slot", "end", "aria-label", "Mensajes directos", 3, "ngModelChange", "ngModel"], ["name", "time-outline", "slot", "start"], ["slot", "end", "aria-label", "\u00DAltima conexi\u00F3n", 3, "ngModelChange", "ngModel"], ["name", "heart-dislike-outline", "slot", "start"], ["slot", "end", "aria-label", "Ocultar kokoros", 3, "ngModelChange", "ngModel"], ["name", "people-outline", "slot", "start"], ["slot", "end", "aria-label", "Perfil p\u00FAblico", 3, "ngModelChange", "ngModel"], ["name", "hand-left-outline", "slot", "start"], ["name", "eye-off-outline", "slot", "start"], ["name", "apps", "slot", "start"], ["lines", "none"], ["name", "language-outline", "slot", "start"], ["aria-label", "", 3, "ngModelChange", "ionChange", "label", "ngModel"], ["value", "es"], ["value", "en"], ["name", "color-palette-outline", "slot", "start"], ["button", "", "id", "themes"], ["mode", "md", 3, "config"], ["swiperSlide", ""], ["lines", "full", "button", "", 3, "click"], ["name", "refresh-outline", "slot", "start"], ["name", "person-circle", "slot", "start"], ["name", "infinite", "slot", "start"], ["name", "card-outline", "slot", "start"], ["name", "person-outline", "slot", "start"], ["name", "mail-outline", "slot", "start"], ["name", "close-circle-outline", "slot", "start"], ["button", "", "lines", "none", 3, "click"], ["src", "/assets/img/layout/themes/theme-dark.png", "alt", "dark"], ["src", "/assets/img/layout/themes/theme-light.png", "alt", "light"], [3, "name"], ["src", "/assets/img/layout/themes/theme-cyberpunk.png", "alt", "cyberpunk"], ["src", "/assets/img/layout/themes/theme-fire.png", "alt", "fire"], ["src", "/assets/img/layout/themes/theme-black.png", "alt", "black"], ["src", "/assets/img/layout/themes/theme-strawberries-and-cream.png", "alt", "strawberries-and-cream"]],
  template: function SettingsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_button_click_3_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "ion-content")(9, "ion-list")(10, "ion-item-group")(11, "ion-item-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "ion-label")(14, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_17_listener() {
        return ctx.passwordModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "ion-label")(20, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_23_listener() {
        return ctx.devicesSettingsModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](24, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "ion-label")(26, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](28, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](30, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "ion-label")(32, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](34, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](37, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "ion-checkbox", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_38_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.user.two_step, $event) || (ctx.user.two_step = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_38_listener($event) {
        return ctx.onChangeCheck("two_step", !$event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_39_listener() {
        return ctx.verificationModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](40, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "ion-label")(42, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](44, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](45, SettingsPage_p_45_Template, 3, 3, "p", 13)(46, SettingsPage_p_46_Template, 3, 3, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "ion-item-group")(48, "ion-item-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](49, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "ion-label")(51, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](53, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](55, "ion-icon", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "ion-label")(57, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](59, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](62, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](63, "ion-checkbox", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_63_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.showLocation, $event) || (ctx.showLocation = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_63_listener($event) {
        return ctx.onChangeCheck("hide_location", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](65, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "ion-label")(67, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](69, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](72, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](73, "ion-checkbox", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_73_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.allowMessages, $event) || (ctx.allowMessages = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_73_listener($event) {
        return ctx.onChangeCheck("block_messages", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](75, "ion-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](76, "ion-label")(77, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](79, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](80, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](82, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](83, "ion-checkbox", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_83_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.showConnection, $event) || (ctx.showConnection = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_83_listener($event) {
        return ctx.onChangeCheck("hide_connection", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](84, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](85, "ion-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](86, "ion-label")(87, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](89, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](90, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](92, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](93, "ion-checkbox", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_93_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.user.hide_likes, $event) || (ctx.user.hide_likes = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_93_listener($event) {
        return ctx.onChangeCheck("hide_likes", !$event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](94, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](95, "ion-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](96, "ion-label")(97, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](99, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](100, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](102, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](103, "ion-checkbox", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_103_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.user.public, $event) || (ctx.user.public = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function SettingsPage_Template_ion_checkbox_ngModelChange_103_listener($event) {
        return ctx.onChangeCheck("public", !$event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](104, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_104_listener() {
        return ctx.blockUsersModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](105, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](106, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](108, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](109, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_109_listener() {
        return ctx.hideUsersModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](110, "ion-icon", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](111, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](112);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](113, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](114, "ion-item-group")(115, "ion-item-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](116, "ion-icon", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](117, "ion-label")(118, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](120, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](121, "ion-item", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](122, "ion-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](123, "ion-select", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](124, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function SettingsPage_Template_ion_select_ngModelChange_123_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.language, $event) || (ctx.language = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ionChange", function SettingsPage_Template_ion_select_ionChange_123_listener($event) {
        return ctx.changeLanguage($event.detail.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](125, "ion-select-option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](126, "Espa\u00F1ol");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](127, "ion-select-option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](128, "English");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](129, "ion-item", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](130, "ion-icon", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](131, "ion-label")(132, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](133);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](134, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](135, "ion-item", 34)(136, "swiper", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](137, SettingsPage_ng_template_137_Template, 7, 3, "ng-template", 36)(138, SettingsPage_ng_template_138_Template, 7, 3, "ng-template", 36)(139, SettingsPage_ng_template_139_Template, 8, 4, "ng-template", 36)(140, SettingsPage_ng_template_140_Template, 8, 4, "ng-template", 36)(141, SettingsPage_ng_template_141_Template, 8, 4, "ng-template", 36)(142, SettingsPage_ng_template_142_Template, 8, 4, "ng-template", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](143, "ion-item", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_143_listener() {
        return ctx.clearLocalStorage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](144, "ion-icon", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](145, "ion-label")(146, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](147);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](148, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](149, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](150);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](151, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](152, "ion-item-group")(153, "ion-item-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](154, "ion-icon", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](155, "ion-label")(156, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](157);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](158, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](159, "ion-item", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_159_listener() {
        return ctx.premiumModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](160, "ion-icon", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](161, "ion-label")(162, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](163);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](164, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](165, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](166);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](167, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](168, "ion-item", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_168_listener() {
        return ctx.paymentsModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](169, "ion-icon", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](170, "ion-label")(171, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](172);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](173, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](174, "ion-item", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_174_listener() {
        return ctx.usernameModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](175, "ion-icon", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](176, "ion-label")(177, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](178);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](179, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](180, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](181);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](182, "ion-item", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_182_listener() {
        return ctx.emailModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](183, "ion-icon", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](184, "ion-label")(185, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](186);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](187, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](188, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](189);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](190, "ion-item", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_190_listener() {
        return ctx.disableAccountModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](191, "ion-icon", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](192, "ion-label")(193, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](194);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](195, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 44, "configuracin"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 46, "seguridad"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 48, "cambiar-contrasea"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](28, 50, "dispositivos-notificaciones"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](34, 52, "autenticacin-dos-pasos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](37, 54, "te-enviaremos-un-email-con"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.user.two_step);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](44, 56, "verificacin-cuenta"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.verified);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !(ctx.user == null ? null : ctx.user.verified));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](53, 58, "privacidad"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](59, 60, "localizacin-exacta"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](62, 62, "mostrar-mi-distancia-kilmetros"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.showLocation);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](69, 64, "mensajes-directos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](72, 66, "poder-recibir-mensajes-cualquier-usuario"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.allowMessages);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](79, 68, "ltima-conexin"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](82, 70, "mostrar-momento-ltima-vez-que"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.showConnection);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](89, 72, "ocultar-kokoros"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](92, 74, "no-quiero-que-puedan-ver"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.user.hide_likes);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](99, 76, "perfil-pblico"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](102, 78, "mi-perfil-es-visible-pblicamente"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.user.public);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](108, 80, "usuarios-bloqueados"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](113, 82, "usuarios-ocultos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](120, 84, "aplicacin"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](124, 86, "seleccionar-idioma"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.language);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](134, 88, "seleccionar-tema"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("config", ctx.themesOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](148, 90, "restablecer-valores-predeterminados"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](151, 92, "esto-eliminar-datos-configuracin-almacenados"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](158, 94, "cuenta"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](164, 96, "frikiradar-unlimited"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](167, 98, "configurar-mi-suscripcin"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](173, 100, "historial-pagos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](179, 102, "cambiar-nombre-usuario"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.user.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](187, 104, "cambiar-correo-electrnico"));
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.user.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](195, 106, "desactivareliminar-cuenta"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.SelectValueAccessor, swiper_angular__WEBPACK_IMPORTED_MODULE_22__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_22__.SwiperSlideDirective, _i18n_pipe__WEBPACK_IMPORTED_MODULE_17__.I18nPipe],
  styles: ["ion-item[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-dark-shade);\n}\n\nion-item-divider[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nion-item-divider[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\nion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n#themes[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-light);\n  position: absolute;\n  z-index: 2;\n  background: var(--ion-color-patreon);\n  padding: 2px;\n  border-radius: 20px;\n  border: 2px solid var(--ion-color-dark);\n  left: 0;\n}\n#themes[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n#themes[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7QUFDRjs7QUFHRTs7RUFFRSxZQUFBO0FBQUo7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQU1JO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsT0FBQTtBQUhOO0FBTUk7RUFDRSxlQUFBO0FBSk47QUFPSTtFQUNFLG9CQUFBO0FBTE4iLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICBoMixcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG5pb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbiN0aGVtZXMge1xuICBzd2lwZXIge1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wYXRyZW9uKTtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 42366:
/*!*************************************************************!*\
  !*** ./src/app/settings/verification/verification.modal.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationModal: () => (/* binding */ VerificationModal)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _VerificationModal;







function VerificationModal_ion_item_9_h1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "cuenta-verificada"));
  }
}
function VerificationModal_ion_item_9_h1_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "cuenta-no-verificada"));
  }
}
function VerificationModal_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, VerificationModal_ion_item_9_h1_6_Template, 3, 3, "h1", 12)(7, VerificationModal_ion_item_9_h1_7_Template, 3, 3, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "estado"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.user == null ? null : ctx_r0.user.verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r0.user == null ? null : ctx_r0.user.verified));
  }
}
class VerificationModal {
  constructor(modalController, auth) {
    this.modalController = modalController;
    this.auth = auth;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.user = _this.auth.currentUserValue;
    })();
  }
  close() {
    this.modalController.dismiss();
  }
}
_VerificationModal = VerificationModal;
_VerificationModal.ɵfac = function VerificationModal_Factory(t) {
  return new (t || _VerificationModal)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_VerificationModal.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _VerificationModal,
  selectors: [["verification-modal"]],
  decls: 32,
  vars: 19,
  consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], ["lines", "full", 4, "ngIf"], [1, "ion-padding"], ["name", "id-card", "slot", "start"], [1, "ion-text-wrap"], ["href", "mailto:hola@frikiradar.com"], ["name", "infinite", "slot", "start"], ["lines", "full"], ["name", "checkmark-circle", "slot", "start", "color", "secondary"], [4, "ngIf"]],
  template: function VerificationModal_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerificationModal_Template_ion_button_click_3_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VerificationModal_ion_item_9_Template, 8, 5, "ion-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-list")(14, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-label", 7)(17, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "hola@frikiradar.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-label", 7)(27, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, "verificacin-cuenta"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user.verified);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, "tu-seguridad-es-muy-importante"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 11, "identificacin-oficial"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 13, "manera-ms-fiable-verificar-tu"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 15, "realizar-un-pago"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 17, "realizar-un-pago-para-suscribirte"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _i18n_pipe__WEBPACK_IMPORTED_MODULE_2__.I18nPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map