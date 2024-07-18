"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 13082:
/*!*****************************************************************!*\
  !*** ./src/app/login/activate-account/activate-account.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivateAccountPage: () => (/* binding */ ActivateAccountPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/config.service */ 43696);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 99260);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 29885);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _ActivateAccountPage;

















const _c0 = a0 => ({
  email: a0
});
function ActivateAccountPage_ion_toolbar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-toolbar")(1, "ion-buttons", 3)(2, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActivateAccountPage_ion_toolbar_1_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 1, "cuenta-inactiva"));
  }
}
function ActivateAccountPage_ion_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-toolbar")(1, "ion-buttons", 3)(2, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActivateAccountPage_ion_toolbar_2_Template_ion_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.back());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 1, "cambiar-correo-electrnico"));
  }
}
function ActivateAccountPage_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function ActivateAccountPage_div_4_Template_form_submit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.submitCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "ion-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActivateAccountPage_div_4_Template_p_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.sendCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 7, "te-hemos-enviado-email-code", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](18, _c0, ctx_r1.user.email)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 10, "introduce-cdigo-seguridad-para-activar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.codeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 12, "codigo-seguridad"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.codeForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 14, "activar-cuenta"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 16, "no-he-recibido-mi-cdigocdigo"), " ");
  }
}
function ActivateAccountPage_div_5_form_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "introduce-una-direccin-correo-electrnico"), " ");
  }
}
function ActivateAccountPage_div_5_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function ActivateAccountPage_div_5_form_7_Template_form_submit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.changeEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "ion-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ActivateAccountPage_div_5_form_7_div_3_Template, 4, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.emailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r1.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.emailForm.get("email").invalid && ctx_r1.emailForm.get("email").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.emailForm.invalid || ctx_r1.emailForm.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 5, "confirmar-cambio"));
  }
}
function ActivateAccountPage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ActivateAccountPage_div_5_form_7_Template, 7, 7, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "revisa-tu-direccin-correo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 5, "asegrate-introducirla-correctamente"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.changingEmail);
  }
}
function ActivateAccountPage_ion_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-footer")(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ActivateAccountPage_ion_footer_6_Template_p_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.changingEmail = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 1, "tu-email-no-es", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c0, ctx_r1.user.email)), " ");
  }
}
class ActivateAccountPage {
  constructor(fb, userSvc, auth, alert, nav, toast, config, i18n) {
    this.fb = fb;
    this.userSvc = userSvc;
    this.auth = auth;
    this.alert = alert;
    this.nav = nav;
    this.toast = toast;
    this.config = config;
    this.i18n = i18n;
    this.changingEmail = false;
    this.user = this.auth.currentUserValue;
    if (this.user.active) {
      this.nav.navigateRoot(["/"]);
    }
    this.codeForm = fb.group({
      code: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(6)])
    });
    this.emailForm = fb.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")])
    });
    // No descomentes la siguiente línea.
    // Backend enviará un código de activación al email automáticamente
    // en la función checkPostAuth() de UserChecker
    // si lo descomentas se enviará doble código de activación
    // this.sendCode();
  }
  submitCode() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.user = yield _this.userSvc.activateUser(_this.codeForm.get("code").value.toUpperCase());
        _this.auth.setAuthUser(_this.user);
        _this.config.getConfig(true);
        const alert = yield _this.alert.create({
          header: _this.i18n.translate(`account-activated-successfully`),
          message: _this.i18n.translate("what-would-you-like-to-do-now"),
          backdropDismiss: false,
          buttons: [{
            text: _this.i18n.translate("start"),
            handler: () => {
              _this.nav.navigateRoot(["/"]);
            }
          }, {
            text: _this.i18n.translate("configure-my-profile"),
            handler: () => {
              _this.nav.navigateRoot(["/edit-profile"]);
            }
          }],
          cssClass: "round-alert"
        });
        alert.present();
      } catch (e) {
        _this.codeForm.get("code").setValue("");
        const alert = yield _this.alert.create({
          header: _this.i18n.translate("invalid-security-code"),
          message: _this.i18n.translate("check-the-code-and-try-again"),
          buttons: [_this.i18n.translate("ok-thanks")],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  sendCode() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.auth.sendVerification();
      (yield _this2.toast.create({
        message: _this2.i18n.translate("verification-code-sent-to-email"),
        duration: 2000,
        position: "bottom"
      })).present();
    })();
  }
  changeEmail() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.user = yield _this3.userSvc.changeEmail(_this3.user.email, _this3.emailForm.get("email").value);
        _this3.auth.setAuthUser(_this3.user);
        _this3.sendCode();
        _this3.changingEmail = false;
      } catch (e) {
        const alert = yield _this3.alert.create({
          header: _this3.i18n.translate("error-changing-email"),
          message: _this3.i18n.translate("check-the-introduced-email-and-try-again"),
          buttons: [_this3.i18n.translate("ok-thanks")],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  back() {
    this.changingEmail = false;
  }
  close() {
    this.auth.logout();
  }
}
_ActivateAccountPage = ActivateAccountPage;
_ActivateAccountPage.ɵfac = function ActivateAccountPage_Factory(t) {
  return new (t || _ActivateAccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService));
};
_ActivateAccountPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _ActivateAccountPage,
  selectors: [["activate-account-app"]],
  decls: 7,
  vars: 5,
  consts: [[1, "ion-no-border"], [4, "ngIf"], [1, "ion-padding"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], ["name", "arrow-back"], ["autocomplete", "off", 3, "submit", "formGroup"], [1, "code"], ["autocomplete", "off", "formControlName", "code", "maxlength", "6", "type", "text", 3, "placeholder"], ["color", "primary", "expand", "block", "type", "submit", "shape", "round", 3, "disabled"], ["color", "primary", 1, "ion-text-center", 3, "click"], ["autocomplete", "off", 3, "formGroup", "submit", 4, "ngIf"], ["labelPlacement", "floating", "label", "Correo electr\u00F3nico", "required", "", "type", "email", "autocomplete", "email", "formControlName", "email", "debounce", "500", "name", "email", 3, "value"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["name", "information-circle-outline"]],
  template: function ActivateAccountPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ActivateAccountPage_ion_toolbar_1_Template, 7, 3, "ion-toolbar", 1)(2, ActivateAccountPage_ion_toolbar_2_Template, 7, 3, "ion-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ion-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ActivateAccountPage_div_4_Template, 17, 20, "div", 1)(5, ActivateAccountPage_div_5_Template, 8, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ActivateAccountPage_ion_footer_6_Template, 4, 6, "ion-footer", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.changingEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.changingEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.changingEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.changingEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.changingEmail);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.TextValueAccessor, _i18n_pipe__WEBPACK_IMPORTED_MODULE_6__.I18nPipe],
  styles: ["form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-color: white;\n}\nform[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  --color: #9c2c51 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vYWN0aXZhdGUtYWNjb3VudC9hY3RpdmF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLDJCQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogIzljMmM1MSAhaW1wb3J0YW50O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 98156:
/*!*************************************************************!*\
  !*** ./src/app/login/banned-account/banned-account.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannedAccountPage: () => (/* binding */ BannedAccountPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat.service */ 40856);
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/url.service */ 53167);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);
/* harmony import */ var ngx_linky__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-linky */ 96663);

var _BannedAccountPage;














const _c0 = ["textarea"];
const _c1 = ["chatlist"];
const _c2 = () => ({
  className: "linkified"
});
function BannedAccountPage_ion_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-img", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("alt", ctx_r1.user == null ? null : ctx_r1.user.username);
  }
}
function BannedAccountPage_ion_skeleton_text_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-skeleton-text", 16);
  }
}
function BannedAccountPage_span_16_ion_chip_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-chip", 20)(1, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 1, message_r3.time_creation, "fullDate"));
  }
}
function BannedAccountPage_span_16_ion_card_content_5_span_6_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 26);
  }
}
function BannedAccountPage_span_16_ion_card_content_5_span_6_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 27);
  }
}
function BannedAccountPage_span_16_ion_card_content_5_span_6_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 28);
  }
}
function BannedAccountPage_span_16_ion_card_content_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BannedAccountPage_span_16_ion_card_content_5_span_6_ion_icon_1_Template, 1, 0, "ion-icon", 23)(2, BannedAccountPage_span_16_ion_card_content_5_span_6_ion_icon_2_Template, 1, 0, "ion-icon", 24)(3, BannedAccountPage_span_16_ion_card_content_5_span_6_ion_icon_3_Template, 1, 0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", message_r3.sending);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !message_r3.sending && !message_r3.time_read);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", message_r3.time_read);
  }
}
function BannedAccountPage_span_16_ion_card_content_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-content")(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "linky");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BannedAccountPage_span_16_ion_card_content_5_Template_span_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopImmediatePropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openUrl($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BannedAccountPage_span_16_ion_card_content_5_span_6_Template, 4, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 3, message_r3.text, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c2)), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 6, message_r3.time_creation, "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (message_r3.fromuser == null ? null : message_r3.fromuser.id) == (ctx_r1.user == null ? null : ctx_r1.user.id));
  }
}
function BannedAccountPage_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BannedAccountPage_span_16_ion_chip_1_Template, 4, 4, "ion-chip", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, BannedAccountPage_span_16_ion_card_content_5_Template, 7, 10, "ion-card-content", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bubble ", (message_r3.fromuser == null ? null : message_r3.fromuser.id) == 1 ? "to" : "from", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (message_r3 == null ? null : message_r3.time_creation) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 5, message_r3 == null ? null : message_r3.time_creation, "shortDate") !== _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 8, ctx_r1.messages[i_r5 - 1] == null ? null : ctx_r1.messages[i_r5 - 1].time_creation, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", message_r3.text);
  }
}
class BannedAccountPage {
  get message() {
    return this.chatForm.get("message");
  }
  constructor(auth, chatSvc, formBuilder, urlSvc) {
    this.auth = auth;
    this.chatSvc = chatSvc;
    this.formBuilder = formBuilder;
    this.urlSvc = urlSvc;
    this.messages = [];
    this.countDownString = "";
    this.chatForm = formBuilder.group({
      message: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
    this.user = this.auth.currentUserValue;
    if (this.user.ban_end) {
      setInterval(() => {
        this.countDown();
      }, 1000);
    } else {
      this.countDownString = "∞";
    }
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messages = (yield _this.chatSvc.getMessages(1, true)).reverse();
      const topMessages = [{
        text: "Recapacita lo que has hecho, reflexiona y mejora tu actitud, esto es una advertencia. Estás castigado el tiempo mostrado, muestra respeto tal y como te gustaría recibirlo.",
        touser: {
          id: _this.user.id
        },
        fromuser: {
          id: 1
        }
      }, {
        text: "Una vez hayas recapacitado... si crees que ha sido un error, quieres disculparte o aportar sugerencias para la aplicación escribe a continuación.",
        touser: {
          id: _this.user.id
        },
        fromuser: {
          id: 1
        }
      }];
      _this.messages = [messages[0], ...topMessages, ...messages.filter(m => m.id !== messages[0].id)];
    })();
  }
  sendMessage(event) {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event) {
        event.preventDefault();
      }
      if (_this2.message.value && _this2.message.value.trim()) {
        var _this2$textarea;
        const text = _this2.message.value ? _this2.message.value.trim() : "";
        _this2.message.setValue("");
        (_this2$textarea = _this2.textarea) === null || _this2$textarea === void 0 || _this2$textarea.setFocus();
        _this2.messages = [..._this2.messages, ...[{
          touser: {
            id: 1
          },
          fromuser: {
            id: _this2.user.id
          },
          text,
          time_creation: new Date()
        }]].filter(m => m.text || m.image);
        _this2.scrollDown();
        try {
          yield _this2.chatSvc.sendMessage(1, text).then();
        } catch (e) {
          _this2.messages = _this2.messages.filter(m => m.sending !== true);
          console.error(e);
        }
      }
    })();
  }
  scrollDown(delay = 0) {
    if (!this.chatlist) {
      return;
    }
    setTimeout(() => {
      this.chatlist.scrollToBottom(0);
    }, delay);
  }
  openUrl(event) {
    this.urlSvc.openUrl(event);
    return false;
  }
  countDown() {
    const countDownDate = new Date(this.user.ban_end).getTime();
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    this.countDownString = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    // If the count down is finished, write some text
    if (distance < 0) {
      this.auth.logout();
    }
  }
  close() {
    this.auth.logout();
  }
}
_BannedAccountPage = BannedAccountPage;
_BannedAccountPage.ɵfac = function BannedAccountPage_Factory(t) {
  return new (t || _BannedAccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService));
};
_BannedAccountPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _BannedAccountPage,
  selectors: [["banned-account-app"]],
  viewQuery: function BannedAccountPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.textarea = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.chatlist = _t.first);
    }
  },
  decls: 26,
  vars: 10,
  consts: [["chatlist", ""], ["textarea", ""], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], ["src", "/assets/img/users/banned.jpg", 3, "alt", 4, "ngIf"], ["animated", "", 4, "ngIf"], ["slot", "end", 1, "ion-padding"], [3, "class", 4, "ngFor", "ngForOf"], ["autocomplete", "off", 3, "formGroup"], ["lines", "none"], ["placeholder", "\u66F8\u304F\uFF01", "autocapitalize", "on", "formControlName", "message", "autofocus", "", "rows", "1", 3, "keydown.enter", "autoGrow"], ["ion-activatable", "", "slot", "end"], ["color", "primary", 3, "click", "disabled"], ["slot", "icon-only", "name", "send"], ["src", "/assets/img/users/banned.jpg", 3, "alt"], ["animated", ""], ["color", "primary", "class", "center", 4, "ngIf"], ["button", ""], [4, "ngIf"], ["color", "primary", 1, "center"], ["color", "secondary"], [1, "text", 3, "click", "innerHTML"], ["name", "time", 4, "ngIf"], ["name", "checkmark", 4, "ngIf"], ["color", "secondary", "name", "checkmark-done", 4, "ngIf"], ["name", "time"], ["name", "checkmark"], ["color", "secondary", "name", "checkmark-done"]],
  template: function BannedAccountPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BannedAccountPage_Template_ion_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-avatar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, BannedAccountPage_ion_img_6_Template, 1, 1, "ion-img", 5)(7, BannedAccountPage_ion_skeleton_text_7_Template, 1, 0, "ion-skeleton-text", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-label")(9, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-content", null, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, BannedAccountPage_span_16_Template, 6, 11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "ion-footer")(18, "ion-toolbar")(19, "form", 9)(20, "ion-item", 10)(21, "ion-textarea", 11, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function BannedAccountPage_Template_ion_textarea_keydown_enter_21_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.sendMessage($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-buttons", 12)(24, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BannedAccountPage_Template_ion_button_click_24_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.sendMessage());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 8, "cuenta-baneada"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.countDownString);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.messages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.chatForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("autoGrow", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.message.value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe, ngx_linky__WEBPACK_IMPORTED_MODULE_9__.LinkyPipe],
  styles: ["ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \nion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: none;\n  letter-spacing: normal;\n  margin: 0 0 0 10px;\n  text-align: left;\n}\nion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\nion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\n\n.bubble[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.bubble.from[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  --color: white;\n  --background: none;\n  float: right;\n  clear: both;\n}\n.bubble.from[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  background: #6d0b28;\n}\n.bubble.from[_ngcontent-%COMP%]    + .to[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.bubble.to[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  --color: white;\n  --background: none;\n  float: left;\n  clear: both;\n}\n.bubble.to[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  background: #9a1c42;\n}\n.bubble.to[_ngcontent-%COMP%]    + .from[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.bubble[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  word-break: break-word;\n  white-space: pre-line;\n}\n.bubble[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n  position: relative;\n  bottom: -8px;\n  color: #bbbbbb;\n}\n.bubble[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  vertical-align: text-bottom;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  clear: both;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 30px;\n  margin-left: 8px;\n}\nion-footer[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  --placeholder-color: #555555 !important;\n  color: #353535 !important;\n  padding: 5px 0 4px 15px;\n  margin: 0;\n  font-size: 12pt;\n}\nion-footer[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  right: 20px;\n  width: 30px !important;\n  min-width: 0px !important;\n  margin: 2px 0 !important;\n}\nion-footer[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vYmFubmVkLWFjY291bnQvYmFubmVkLWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7QUFESjtBQUdJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBRE47O0FBT0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpKO0FBUUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTk47QUFTSTtFQUNFLG1CQUFBO0FBUE47QUFVSTtFQUNFLGVBQUE7QUFSTjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVhOO0FBY0k7RUFDRSxtQkFBQTtBQVpOO0FBZUk7RUFDRSxlQUFBO0FBYk47QUFpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFmSjtBQWtCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBaEJKO0FBa0JJO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBaEJOOztBQXFCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFsQkY7O0FBc0JFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBbkJKO0FBc0JFO0VBQ0UsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFwQko7QUF1QkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBckJKO0FBdUJJO0VBQ0UsZUFBQTtBQXJCTiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gIHAsXG4gIGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgaW9uLWJhZGdlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIH1cbiAgfVxufVxuXG4uYnViYmxlIHtcbiAgaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuXG4gICYuZnJvbSB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogIzZkMGIyODtcbiAgICB9XG5cbiAgICAmICsgLnRvIGlvbi1jYXJkIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gIH1cblxuICAmLnRvIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjOWExYzQyO1xuICAgIH1cblxuICAgICYgKyAuZnJvbSBpb24tY2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICB9XG5cbiAgLnRleHQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgfVxuXG4gIGlvbi1ub3RlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLThweDtcbiAgICBjb2xvcjogI2JiYmJiYjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNoaXAge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGlvbi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuICBpb24tdGV4dGFyZWEge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1NTU1NTUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzM1MzUzNSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAwIDRweCAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHQ7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDJweCAwICFpbXBvcnRhbnQ7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 36652:
/*!****************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.modal.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordModal: () => (/* binding */ ForgotPasswordModal)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ 44796);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _ForgotPasswordModal;













function ForgotPasswordModal_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ForgotPasswordModal_div_9_Template_form_submit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.submitRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ion-icon", 9)(10, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, "vaya-problemas-para-iniciar-sesin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "no-te-preocupes-si-ya"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.requestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 9, "nombre-usuario-o-email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 11, "solicitar"));
  }
}
function ForgotPasswordModal_ng_template_10_ion_buttons_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-buttons", 18)(1, "ion-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ForgotPasswordModal_ng_template_10_ion_buttons_14_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.clearPassword = !ctx_r2.clearPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", ctx_r2.clearPassword ? "eye" : "eye-off");
  }
}
function ForgotPasswordModal_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ForgotPasswordModal_ng_template_10_Template_form_submit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.submitPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ion-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ion-icon", 14)(13, "ion-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ForgotPasswordModal_ng_template_10_ion_buttons_14_Template, 3, 1, "ion-buttons", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, "te-hemos-enviado-un-cdigo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 10, "introduce-cdigo-seguridad-tu-nueva"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 12, "codigo-seguridad"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r2.clearPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.passwordForm.get("password").pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r2.passwordForm.get("password").invalid || ctx_r2.passwordForm.get("code").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 14, "cambiar-contrasea"));
  }
}
class ForgotPasswordModal {
  constructor(navParams, fb, modalController, alert, auth, router, toast, i18n) {
    this.fb = fb;
    this.modalController = modalController;
    this.alert = alert;
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.i18n = i18n;
    this.step = 1;
    this.clearPassword = false;
    this.requestForm = fb.group({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)])
    });
    this.passwordForm = fb.group({
      code: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(6)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)])
    });
    if (navParams && navParams.get("username")) {
      this.requestForm.get("username").setValue(navParams.get("username").value);
    }
  }
  submitRequest() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.auth.requestPassword(_this.requestForm.get("username").value);
        _this.step = 2;
      } catch (e) {
        const alert = yield _this.alert.create({
          header: "Nombre de usuario o email no válido",
          message: "No existe ninguna cuenta asociada a esta información.",
          buttons: ["Ok, gracias"],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  submitPassword() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.auth.recoverPassword(_this2.requestForm.get("username").value, _this2.passwordForm.get("password").value, _this2.passwordForm.get("code").value.toUpperCase());
        const user = yield _this2.auth.login(_this2.requestForm.get("username").value, _this2.passwordForm.get("password").value);
        _this2.i18n.setLanguage(user.language);
        _this2.recoverSuccess(user);
        _this2.passwordForm.reset();
      } catch (e) {
        const alert = yield _this2.alert.create({
          header: "Código de seguridad no válido",
          message: "Revisa el código introducido y vuelve a intentarlo.",
          buttons: ["Ok, gracias"],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  recoverSuccess(user) {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.auth.setAuthUser(user);
      (yield _this3.toast.create({
        message: "Acceso concedido",
        duration: 2000,
        position: "bottom"
      })).present();
      _this3.router.navigate(["/"]);
      _this3.close();
    })();
  }
  close() {
    this.modalController.dismiss();
  }
}
_ForgotPasswordModal = ForgotPasswordModal;
_ForgotPasswordModal.ɵfac = function ForgotPasswordModal_Factory(t) {
  return new (t || _ForgotPasswordModal)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService));
};
_ForgotPasswordModal.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _ForgotPasswordModal,
  selectors: [["forgot-password-modal"]],
  decls: 12,
  vars: 5,
  consts: [["step2", ""], [1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding"], ["class", "ion-padding", 4, "ngIf", "ngIfElse"], ["autocomplete", "off", 3, "submit", "formGroup"], ["lines", "full"], ["name", "person-outline", "slot", "start"], ["labelPlacement", "floating", "required", "", "type", "text", "formControlName", "username", "name", "username", "autocomplete", "username", "appAutofill", "", 3, "label"], ["color", "primary", "type", "submit", "expand", "block", "shape", "round"], [1, "code"], ["required", "", "maxlength", "6", "type", "text", "formControlName", "code", "name", "code", "autocomplete", "off", 3, "placeholder"], ["name", "lock-closed-outline", "slot", "start"], ["labelPlacement", "floating", "label", "Nueva contrase\u00F1a", "required", "", "formControlName", "password", "name", "password", "autocomplete", "off", 3, "type"], ["slot", "end", 4, "ngIf"], ["color", "primary", "type", "submit", "expand", "block", "shape", "round", 3, "disabled"], ["slot", "end"], ["slot", "icon-only", 3, "name"]],
  template: function ForgotPasswordModal_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-buttons", 2)(3, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ForgotPasswordModal_Template_ion_button_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ForgotPasswordModal_div_9_Template, 15, 13, "div", 6)(10, ForgotPasswordModal_ng_template_10_Template, 18, 16, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const step2_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "generar-nueva-contrasea"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.step === 1)("ngIfElse", step2_r6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _i18n_pipe__WEBPACK_IMPORTED_MODULE_3__.I18nPipe],
  styles: ["form[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  --color: #9c2c51 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBpb24tbGFiZWwge1xuICAgIC0tY29sb3I6ICM5YzJjNTEgIWltcG9ydGFudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 77076:
/*!**********************************************************!*\
  !*** ./src/app/login/login-info/login-info.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginInfoComponent: () => (/* binding */ LoginInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);
var _LoginInfoComponent;



class LoginInfoComponent {
  constructor() {}
  ngOnInit() {}
}
_LoginInfoComponent = LoginInfoComponent;
_LoginInfoComponent.ɵfac = function LoginInfoComponent_Factory(t) {
  return new (t || _LoginInfoComponent)();
};
_LoginInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _LoginInfoComponent,
  selectors: [["app-login-info"]],
  decls: 7,
  vars: 3,
  consts: [[1, "full-center", "ion-padding"], ["name", "location-sharp"]],
  template: function LoginInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Conoce y liga con frikis, otakus, gamers, geek o nerds a los que le guste tu videojuego, serie, manga, anime, c\u00F3mic o m\u00FAsica favorita. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "frikiradar-conoce-personas-frikis-como"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _i18n_pipe__WEBPACK_IMPORTED_MODULE_0__.I18nPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 91307:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var ngx_linky__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-linky */ 96663);
/* harmony import */ var _login_login_info_login_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login-info/login-info.component */ 77076);
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/register/register.component */ 33706);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _activate_account_activate_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activate-account/activate-account.page */ 13082);
/* harmony import */ var _banned_account_banned_account_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banned-account/banned-account.page */ 98156);
/* harmony import */ var _forgot_password_forgot_password_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.modal */ 36652);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ 49444);
/* harmony import */ var _two_step_two_step_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./two-step/two-step.page */ 1438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
var _LoginPageModule;















const routes = [{
  path: "",
  component: _login_page__WEBPACK_IMPORTED_MODULE_6__.LoginPage
}, {
  path: "activate-account",
  component: _activate_account_activate_account_page__WEBPACK_IMPORTED_MODULE_3__.ActivateAccountPage
}, {
  path: "banned-account",
  component: _banned_account_banned_account_page__WEBPACK_IMPORTED_MODULE_4__.BannedAccountPage
}, {
  path: "two-step",
  component: _two_step_two_step_page__WEBPACK_IMPORTED_MODULE_7__.TwoStepPage
}];
class LoginPageModule {}
_LoginPageModule = LoginPageModule;
_LoginPageModule.ɵfac = function LoginPageModule_Factory(t) {
  return new (t || _LoginPageModule)();
};
_LoginPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _LoginPageModule
});
_LoginPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_linky__WEBPACK_IMPORTED_MODULE_13__.LinkyModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__.LoginPage, _forgot_password_forgot_password_modal__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordModal, _activate_account_activate_account_page__WEBPACK_IMPORTED_MODULE_3__.ActivateAccountPage, _banned_account_banned_account_page__WEBPACK_IMPORTED_MODULE_4__.BannedAccountPage, _two_step_two_step_page__WEBPACK_IMPORTED_MODULE_7__.TwoStepPage, _login_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _login_login_info_login_info_component__WEBPACK_IMPORTED_MODULE_0__.LoginInfoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_linky__WEBPACK_IMPORTED_MODULE_13__.LinkyModule],
    exports: [_login_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _login_login_info_login_info_component__WEBPACK_IMPORTED_MODULE_0__.LoginInfoComponent]
  });
})();

/***/ }),

/***/ 49444:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ 43696);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation.service */ 99260);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ 44796);
/* harmony import */ var _forgot_password_forgot_password_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.modal */ 36652);
/* harmony import */ var _services_google_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/google-auth.service */ 88802);
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ 33706);
/* harmony import */ var _login_info_login_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-info/login-info.component */ 77076);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../i18n.pipe */ 4504);

var _LoginPage;






















function LoginPage_div_6_ion_item_14_ion_buttons_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-buttons", 22)(1, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_div_6_ion_item_14_ion_buttons_4_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearPassword = !ctx_r1.clearPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx_r1.clearPassword ? "eye" : "eye-off");
  }
}
function LoginPage_div_6_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup.enter", function LoginPage_div_6_ion_item_14_Template_ion_input_keyup_enter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.submitLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, LoginPage_div_6_ion_item_14_ion_buttons_4_Template, 3, 1, "ion-buttons", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx_r1.clearPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.passwordInput.pristine);
  }
}
function LoginPage_div_6_ion_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_div_6_ion_button_15_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.checkLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "continuar-con-email"));
  }
}
function LoginPage_div_6_ion_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_div_6_ion_button_16_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.submitLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "iniciar-sesin"));
  }
}
function LoginPage_div_6_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_div_6_ion_button_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.insertPassword = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "volver"));
  }
}
function LoginPage_div_6_ion_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_div_6_ion_button_18_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.loginWithGoogle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "iniciar-sesin-con-google"));
  }
}
function LoginPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 7)(9, "form", 8)(10, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup.enter", function LoginPage_div_6_Template_ion_input_keyup_enter_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.checkLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, LoginPage_div_6_ion_item_14_Template, 5, 5, "ion-item", 12)(15, LoginPage_div_6_ion_button_15_Template, 5, 3, "ion-button", 13)(16, LoginPage_div_6_ion_button_16_Template, 5, 3, "ion-button", 14)(17, LoginPage_div_6_ion_button_17_Template, 5, 3, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, LoginPage_div_6_ion_button_18_Template, 5, 3, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "p", 17)(20, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_div_6_Template_a_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 10, "hola"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 12, "te-doy-bienvenida-frikiradar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 14, "nombre-usuario-o-email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.insertPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.insertPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.insertPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.insertPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.insertPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 16, "no-puedo-iniciar-sesin"));
  }
}
function LoginPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "ion-header", 33)(2, "ion-toolbar")(3, "ion-buttons", 34)(4, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_div_7_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.backToLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "app-register", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 5, "registro"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("username", ctx_r1.username)("email", ctx_r1.email)("provider", ctx_r1.provider)("credential", ctx_r1.credential);
  }
}
function LoginPage_ion_footer_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-footer", 33)(1, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_ion_footer_8_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.changeLanguage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 1, "change-login-language"), " ");
  }
}
class LoginPage {
  get usernameInput() {
    return this.loginForm.get("username");
  }
  get passwordInput() {
    return this.loginForm.get("password");
  }
  constructor(router, route, auth, alert, modalController, toast, fb, nav, platform, config, googleAuth, i18n) {
    this.router = router;
    this.route = route;
    this.auth = auth;
    this.alert = alert;
    this.modalController = modalController;
    this.toast = toast;
    this.fb = fb;
    this.nav = nav;
    this.platform = platform;
    this.config = config;
    this.googleAuth = googleAuth;
    this.i18n = i18n;
    this.insertPassword = false;
    this.clearPassword = false;
    this.activeView = "login";
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(["/"]);
    }
    this.loginForm = fb.group({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(3)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl("", [this.insertPassword ? _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8)])
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.returnUrl = _this.route.snapshot.queryParams["returnUrl"] || "/";
      _this.language = yield _this.config.get("language");
    })();
  }
  checkLogin() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.insertPassword && _this2.usernameInput.valid) {
        try {
          yield _this2.auth.checkLogin(_this2.usernameInput.value);
          _this2.insertPassword = true;
          return;
        } catch (e) {
          if (_this2.usernameInput.value.includes("@")) {
            _this2.email = _this2.usernameInput.value;
          } else {
            _this2.username = _this2.usernameInput.value;
          }
          _this2.showRegister();
          return;
        }
      }
      _this2.showRegister();
    })();
  }
  submitLogin() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.loginForm.valid) {
        try {
          const user = yield _this3.auth.login(_this3.usernameInput.value, _this3.passwordInput.value);
          _this3.loginSuccess(user);
        } catch (e) {
          if (e.message) {
            _this3.loginError(e.message);
          } else if (e.detail) {
            _this3.loginError(e.detail);
          } else {
            _this3.loginError(e);
          }
        }
      }
    })();
  }
  loginWithGoogle() {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.googleAuth.logout();
      } catch (e) {
        console.error(e);
      }
      try {
        const googleUser = yield _this4.googleAuth.signIn();
        if (googleUser.authentication.idToken) {
          var _googleUser$name;
          _this4.credential = googleUser.authentication.idToken;
          _this4.provider = "google";
          _this4.username = (_googleUser$name = googleUser.name) !== null && _googleUser$name !== void 0 ? _googleUser$name : `${googleUser.givenName} ${googleUser.familyName}`;
          _this4.email = googleUser.email;
          try {
            yield _this4.auth.checkLogin(_this4.email);
            try {
              const user = yield _this4.auth.loginWithProvider(_this4.provider, _this4.credential);
              _this4.loginSuccess(user);
            } catch (e) {
              _this4.insertPassword = true;
            }
          } catch (e) {
            _this4.showRegister();
            return;
          }
        }
      } catch (error) {
        console.error(error);
        if (error.toString().includes("popup_closed_by_user") || error.toString().includes("12501")) {
          const alert = yield _this4.alert.create({
            header: _this4.i18n.translate("google-sign-in-error"),
            message: _this4.i18n.translate("google-sign-in-failed"),
            buttons: [_this4.i18n.translate("oki-doki")],
            cssClass: "round-alert"
          });
          yield alert.present();
        }
      }
    })();
  }
  loginSuccess(user) {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.loginForm.reset();
      _this5.config.getConfig(true);
      if (user && user.two_step) {
        _this5.nav.navigateRoot(["/login/two-step"], {
          queryParams: {
            returnUrl: _this5.returnUrl
          }
        });
      } else {
        _this5.auth.setAuthUser(user);
        (yield _this5.toast.create({
          message: "¡Acceso concedido!",
          duration: 2000,
          position: "bottom"
        })).present();
        _this5.nav.navigateRoot(_this5.returnUrl);
      }
      yield _this5.i18n.setLanguage(user.language);
    })();
  }
  loginError(message) {
    var _this6 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let header = "";
      if (message.includes("Invalid credentials.")) {
        _this6.showRegister();
        header = _this6.i18n.translate("authentication-error");
        message = _this6.i18n.translate("incorrect-username-or-password");
      } else if (message.includes("Banned account.")) {
        var _data$end;
        header = _this6.i18n.translate("you-are-banned");
        const data = JSON.parse(message);
        const date = (_data$end = data.end) === null || _data$end === void 0 ? void 0 : _data$end.date;
        message = _this6.i18n.translate("reason") + data.reason + "." + "<br />" + _this6.i18n.translate("end-of-ban") + (date ? date.split(" ")[0] : _this6.i18n.translate("indefinite"));
      } else if (message === "Internal Server Error" || message === "OK") {
        header = _this6.i18n.translate("system-error");
        message = _this6.i18n.translate("write-us-error");
      } else {
        header = _this6.i18n.translate("unknown-error");
        message = _this6.i18n.translate("write-us-error");
      }
      const alert = yield _this6.alert.create({
        header,
        message,
        buttons: [_this6.i18n.translate("oki-doki")],
        cssClass: "round-alert"
      });
      yield alert.present();
    })();
  }
  forgotPassword() {
    var _this7 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: _forgot_password_forgot_password_modal__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordModal,
        componentProps: {
          username: _this7.username
        }
      });
      return yield modal.present();
    })();
  }
  backToLogin() {
    this.activeView = "login";
  }
  showRegister() {
    this.activeView = "register";
  }
  changeLanguage() {
    var _this8 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.language === "es") {
        _this8.language = "en";
      } else {
        _this8.language = "es";
      }
      yield _this8.i18n.setLanguage(_this8.language);
    })();
  }
}
_LoginPage = LoginPage;
_LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || _LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_google_auth_service__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_i18n_service__WEBPACK_IMPORTED_MODULE_6__.I18nService));
};
_LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _LoginPage,
  selectors: [["app-login"]],
  decls: 9,
  vars: 3,
  consts: [[1, "info"], [1, "login"], ["class", "ion-padding", 4, "ngIf"], [4, "ngIf"], ["class", "ion-no-border", 4, "ngIf"], [1, "ion-padding"], ["alt", "frikiradar", "src", "/assets/icon/icon.svg"], ["id", "login-content"], ["autocomplete", "off", 3, "formGroup"], ["lines", "full", 1, "login-input"], ["name", "person-outline", "slot", "start"], ["labelPlacement", "floating", "outline", "", "required", "", "type", "text", "formControlName", "username", "name", "username", "autocomplete", "username", "appAutofill", "", "clearOnEdit", "true", 3, "keyup.enter", "label"], ["lines", "full", "class", "login-input", 4, "ngIf"], ["color", "primary", "shape", "round", "expand", "block", "size", "large", "class", "login-button", 3, "click", 4, "ngIf"], ["color", "primary", "shape", "round", "size", "large", "expand", "block", "class", "login-button", 3, "click", 4, "ngIf"], ["color", "light", "shape", "round", "size", "large", "expand", "block", "class", "login-button", 3, "click", 4, "ngIf"], ["color", "light", "shape", "round", "expand", "block", "size", "large", "class", "login-button", 3, "click", 4, "ngIf"], ["id", "forgot-password", 1, "ion-text-center"], [3, "click"], ["name", "lock-closed-outline", "slot", "start"], ["labelPlacement", "floating", "required", "", "formControlName", "password", "name", "password", "id", "password-input", "autocomplete", "current-password", "appAutofill", "", "clearOnEdit", "true", 3, "keyup.enter", "label", "type"], ["slot", "end", 4, "ngIf"], ["slot", "end"], ["slot", "icon-only", 3, "name"], ["color", "primary", "shape", "round", "expand", "block", "size", "large", 1, "login-button", 3, "click"], ["slot", "start", "name", "mail"], ["color", "primary", "shape", "round", "size", "large", "expand", "block", 1, "login-button", 3, "click"], ["slot", "start", "name", "log-in-outline"], ["color", "light", "shape", "round", "size", "large", "expand", "block", 1, "login-button", 3, "click"], ["color", "dark", "name", "arrow-back-outline"], ["color", "dark"], ["color", "light", "shape", "round", "expand", "block", "size", "large", 1, "login-button", 3, "click"], ["src", "/assets/icon/google.svg", "slot", "start"], [1, "ion-no-border"], ["slot", "start"], ["slot", "icon-only", "name", "arrow-back"], [3, "username", "email", "provider", "credential"], ["button", "", "lines", "none", 3, "click"], ["name", "language"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-content")(1, "ion-grid")(2, "ion-row")(3, "ion-col", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-login-info");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-col", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, LoginPage_div_6_Template, 23, 18, "div", 2)(7, LoginPage_div_7_Template, 10, 7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, LoginPage_ion_footer_8_Template, 6, 3, "ion-footer", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeView == "login");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeView == "register");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.activeView == "login");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.TextValueAccessor, _register_register_component__WEBPACK_IMPORTED_MODULE_7__.RegisterComponent, _login_info_login_info_component__WEBPACK_IMPORTED_MODULE_8__.LoginInfoComponent, _i18n_pipe__WEBPACK_IMPORTED_MODULE_9__.I18nPipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0;\n}\nion-content[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  margin-top: 3vh;\n  width: 20vh;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\nion-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\nion-footer.footer-md[_ngcontent-%COMP%]::before {\n  background-image: none;\n}\n\nion-button[_ngcontent-%COMP%] {\n  text-transform: unset;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  --color: #9c2c51 !important;\n}\n.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .sc-ion-buttons-md-h[_ngcontent-%COMP%] {\n  margin-bottom: -14px;\n  margin-right: -12px;\n  color: #e91e63;\n}\n.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .sc-ion-buttons-ios-h[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20px;\n  left: 20px;\n}\n.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .sc-ion-buttons-ios-h[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #e91e63 !important;\n}\n\n.info[_ngcontent-%COMP%] {\n  background: #222222;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n@media (max-width: 667px) {\n  .info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 668px) {\n  .login[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n}\n.register[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 20px;\n  margin-bottom: 5px;\n}\n.register[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  text-transform: unset;\n}\n\n#forgot-password[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n#forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n#login-content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.login-input[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-light);\n  margin-bottom: 20px;\n}\n\n.login-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n}\n.login-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: 16px;\n  font-weight: 500 !important;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-block;\n  width: 230px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtBQURKO0FBSUU7RUFDRSxzQkFBQTtBQUZKOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBUUk7RUFDRSwyQkFBQTtBQUxOO0FBUUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBTk47QUFTSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUE47QUFVSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFSTjtBQVVNO0VBQ0UseUJBQUE7QUFSUjs7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBWEY7O0FBY0E7RUFDRTtJQUNFLGFBQUE7RUFYRjtBQUNGO0FBY0E7RUFDRTtJQUNFLGdCQUFBO0VBWkY7QUFDRjtBQWdCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZEo7QUFpQkU7RUFDRSxxQkFBQTtBQWZKOztBQW1CQTtFQUNFLGVBQUE7QUFoQkY7QUFpQkU7RUFDRSxlQUFBO0FBZko7O0FBbUJBO0VBQ0UsZ0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtBQWhCRjs7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFqQko7QUFtQkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUVBLDJCQUFBO0FBbEJKOztBQXNCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBbkJGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgaW9uLWltZyB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIHdpZHRoOiAyMHZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICAmLmZvb3Rlci1tZDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2dpbiB7XG4gIGZvcm0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAtLWNvbG9yOiAjOWMyYzUxICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbiAgICAgIGNvbG9yOiAjZTkxZTYzO1xuICAgIH1cblxuICAgIC5zYy1pb24tYnV0dG9ucy1pb3MtaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDIwcHg7XG4gICAgICBsZWZ0OiAyMHB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5pbmZvIHtcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgLmluZm8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDY2OHB4KSB7XG4gIC5sb2dpbiB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxufVxuXG4ucmVnaXN0ZXIge1xuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gIH1cbn1cblxuI2ZvcmdvdC1wYXNzd29yZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbiNsb2dpbi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxvZ2luLWlucHV0IHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC8vIGZvbnQgd2VpZ2h0IG1lZGl1bVxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tZm9vdGVyIGlvbi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMzBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 33706:
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/url.service */ 53167);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 29885);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/config.service */ 43696);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _nice_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../nice-date.pipe */ 45982);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _RegisterComponent;



















function RegisterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "oops-username-not-available"), " ", ctx_r0.usernameSuggestion, " ");
  }
}
function RegisterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "mnimo-3-caracteres-mximo-15"), " ");
  }
}
function RegisterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "letras-nmeros-guiones-puntos"), " ");
  }
}
function RegisterComponent_ion_item_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 33)(2, "ion-input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "email"));
  }
}
function RegisterComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "introduce-una-direccin-correo-electrnico"), " ");
  }
}
function RegisterComponent_ion_item_17_ion_buttons_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-buttons", 38)(1, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegisterComponent_ion_item_17_ion_buttons_4_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.clearPassword = !ctx_r0.clearPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", ctx_r0.clearPassword ? "eye" : "eye-off");
  }
}
function RegisterComponent_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 35)(2, "ion-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RegisterComponent_ion_item_17_ion_buttons_4_Template, 3, 1, "ion-buttons", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r0.clearPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.registerForm.get("password").pristine);
  }
}
function RegisterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "introduce-un-mnimo-8-caracteres"), " ");
  }
}
function RegisterComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-datetime", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate3"]("max", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](1, 6, ctx_r0.today, "y") - 18, "-", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 9, ctx_r0.today, "MM"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 12, ctx_r0.today, "dd"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("locale", ctx_r0.language)("first-day-of-week", ctx_r0.language == "es" ? 1 : 0);
  }
}
function RegisterComponent_ion_select_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gender_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", gender_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, gender_r3), " ");
  }
}
function RegisterComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "debes-seleccionar-una-opcin"), " ");
  }
}
function RegisterComponent_ion_select_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-select-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const likegender_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", likegender_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, likegender_r4), " ");
  }
}
function RegisterComponent_ion_item_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate7"](" ", ctx_r0.registerForm.get("meet").value === "friend" ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 7, "nombre-o-email-amigo") : "", " ", ctx_r0.registerForm.get("meet").value === "youtube" ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 9, "nombre-youtuber") : "", " ", ctx_r0.registerForm.get("meet").value === "blog" ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 11, "nombre-blog") : "", " ", ctx_r0.registerForm.get("meet").value === "social" ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 13, "nombre-red-social") : "", " ", ctx_r0.registerForm.get("meet").value === "event" ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 15, "nombre-evento") : "", " ", ctx_r0.registerForm.get("meet").value === "contest" ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 17, "nombre-organizador") : "", " ", ctx_r0.registerForm.get("meet").value === "store" ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 19, "nombre-tienda") : "", " ");
  }
}
function RegisterComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "no-encontramos-usuario-est-bien"), " ");
  }
}
function RegisterComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "debes-seleccionar-una-opcin"), " ");
  }
}
class RegisterComponent {
  constructor(alert, auth, fb, nav, toast, userSvc, ngZone, platform, urlSvc, config, i18n) {
    var _this = this;
    this.alert = alert;
    this.auth = auth;
    this.fb = fb;
    this.nav = nav;
    this.toast = toast;
    this.userSvc = userSvc;
    this.ngZone = ngZone;
    this.platform = platform;
    this.urlSvc = urlSvc;
    this.config = config;
    this.i18n = i18n;
    this.today = Date.now();
    this.clearPassword = false;
    this.usernameSuggestion = "";
    this.referralFailed = false;
    this.birthdayValue = "";
    this.language = "es";
    this.registerForm = fb.group({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+")]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", [this.email ? _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", [this.credential ? _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required : _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.nullValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(8)]),
      birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(new Date(new Date().getFullYear() - 18 + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()).toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      gender: [""],
      lovegender: [""],
      meet: [""],
      referral: [""],
      acceptos: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.requiredTrue),
      age: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.requiredTrue)
    });
    this.registerForm.get("username").valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (username) {
        if ((username === null || username === void 0 ? void 0 : username.trim()) !== "") {
          const u = yield _this.auth.checkUsername(username);
          if (u !== true) {
            _this.registerForm.get("username").setErrors({
              incorrect: true
            });
            _this.usernameSuggestion = u;
          } else {
            _this.usernameSuggestion = "";
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.registerForm.get("referral").valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (referral) {
        _this.referralFailed = false;
        if ((referral === null || referral === void 0 ? void 0 : referral.trim()) !== "" && _this.registerForm.get("meet").value == "friend") {
          try {
            yield _this.auth.checkLogin(referral);
          } catch (error) {
            _this.registerForm.get("referral").setErrors({
              incorrect: true
            });
            _this.referralFailed = true;
          }
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  ngOnInit() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.language = yield _this2.config.get("language");
      if (_this2.username) {
        _this2.registerForm.get("username").setValue(_this2.username);
      }
      if (_this2.email) {
        _this2.registerForm.get("email").setValue(_this2.email);
      }
      /*if (this.birthday) {
        this.registerForm.get("birthday").setValue(this.birthday);
      }
      if (this.gender) {
        this.registerForm.get("gender").setValue(this.gender);
      }*/
    })();
  }
  submitRegister() {
    var _this3 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.registerForm.valid) {
        const alert = yield _this3.alert.create({
          header: _this3.i18n.translate(`notice`),
          message: _this3.i18n.translate(`confirmation-code-will-be-sent-to-email`, {
            email: _this3.registerForm.get("email").value
          }),
          buttons: [{
            text: _this3.i18n.translate("oops-i-made-a-mistake"),
            role: "cancel",
            cssClass: "secondary"
          }, {
            text: _this3.i18n.translate("it-is-correct"),
            handler: function () {
              var _ref3 = (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                var _this3$registerForm$g, _this3$registerForm$g3;
                if ((_this3$registerForm$g = _this3.registerForm.get("email").value) !== null && _this3$registerForm$g !== void 0 && _this3$registerForm$g.trim()) {
                  var _this3$registerForm$g2;
                  _this3.email = (_this3$registerForm$g2 = _this3.registerForm.get("email").value) === null || _this3$registerForm$g2 === void 0 ? void 0 : _this3$registerForm$g2.trim();
                }
                if ((_this3$registerForm$g3 = _this3.registerForm.get("username").value) !== null && _this3$registerForm$g3 !== void 0 && _this3$registerForm$g3.trim()) {
                  var _this3$registerForm$g4;
                  _this3.username = (_this3$registerForm$g4 = _this3.registerForm.get("username").value) === null || _this3$registerForm$g4 === void 0 ? void 0 : _this3$registerForm$g4.trim();
                }
                try {
                  var _this3$registerForm$g5, _this3$registerForm$g6, _this3$registerForm$g7;
                  yield _this3.auth.register(_this3.username, _this3.email, (_this3$registerForm$g5 = (_this3$registerForm$g6 = _this3.registerForm.get("password").value) === null || _this3$registerForm$g6 === void 0 ? void 0 : _this3$registerForm$g6.trim()) !== null && _this3$registerForm$g5 !== void 0 ? _this3$registerForm$g5 : undefined, _this3.registerForm.get("birthday").value.split("T")[0], (_this3$registerForm$g7 = _this3.registerForm.get("gender").value) === null || _this3$registerForm$g7 === void 0 ? void 0 : _this3$registerForm$g7.trim(), _this3.registerForm.get("lovegender").value, _this3.registerForm.get("meet").value, _this3.registerForm.get("referral").value, _this3.provider, _this3.credential, _this3.language);
                  let user;
                  if (!_this3.provider) {
                    var _this3$registerForm$g8, _this3$registerForm$g9;
                    user = yield _this3.auth.login((_this3$registerForm$g8 = _this3.registerForm.get("username").value) === null || _this3$registerForm$g8 === void 0 ? void 0 : _this3$registerForm$g8.trim(), (_this3$registerForm$g9 = _this3.registerForm.get("password").value) === null || _this3$registerForm$g9 === void 0 ? void 0 : _this3$registerForm$g9.trim());
                  } else {
                    user = yield _this3.auth.loginWithProvider(_this3.provider, _this3.credential);
                  }
                  _this3.registerSuccess(user);
                } catch (error) {
                  _this3.registerError(error);
                }
              });
              return function handler() {
                return _ref3.apply(this, arguments);
              };
            }()
          }],
          cssClass: "round-alert"
        });
        yield alert.present();
      } else {
        const alert = yield _this3.alert.create({
          header: "Revisa la información",
          message: "Es necesario rellenar todos los campos.",
          buttons: ["Ok, Tendré más cuidado"],
          cssClass: "round-alert"
        });
        yield alert.present();
      }
    })();
  }
  registerSuccess(user) {
    var _this4 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.auth.setAuthUser(user);
      (yield _this4.toast.create({
        message: "Registro realizado correctamente",
        duration: 2000,
        position: "bottom"
      })).present();
      _this4.ngZone.run(() => _this4.nav.navigateRoot(["/"])).then();
    })();
  }
  registerError(error) {
    var _this5 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alert.create({
        header: "Error de registro",
        message: error,
        buttons: ["Ok"],
        cssClass: "round-alert"
      });
      yield alert.present();
    })();
  }
}
_RegisterComponent = RegisterComponent;
_RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || _RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_url_service__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService));
};
_RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _RegisterComponent,
  selectors: [["app-register"]],
  inputs: {
    username: "username",
    email: "email",
    birthday: "birthday",
    gender: "gender",
    provider: "provider",
    credential: "credential"
  },
  decls: 101,
  vars: 99,
  consts: [[1, "ion-padding"], [3, "submit", "formGroup"], ["name", "person-outline", "slot", "start"], ["labelPlacement", "floating", "required", "", "type", "text", "autocapitalize", "words", "formControlName", "username", "debounce", "500", "name", "username", 3, "label"], ["class", "error-message", 4, "ngIf"], [4, "ngIf"], ["button", "", "id", "open-calendar"], ["name", "calendar-outline", "slot", "start"], [1, "ion-text-wrap"], ["color", "primary"], ["trigger", "open-calendar", "cssClass", "date-modal"], ["name", "body-outline", "slot", "start"], ["labelPlacement", "floating", "interface", "action-sheet", "formControlName", "gender", 3, "label", "cancelText", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "search-outline", "slot", "start"], ["labelPlacement", "floating", "placeholder", "Selecciona", "formControlName", "lovegender", "multiple", "", 3, "label", "cancelText"], ["name", "people-outline", "slot", "start"], ["labelPlacement", "floating", "interface", "action-sheet", "formControlName", "meet", 3, "label", "cancelText", "placeholder"], ["value", "friend"], ["value", "youtube"], ["value", "blog"], ["value", "social"], ["value", "store"], ["value", "event"], ["value", "contest"], [3, "value"], ["lines", "none"], [3, "click"], ["aria-label", "", "slot", "start", "formControlName", "acceptos"], ["aria-label", "", "slot", "start", "formControlName", "age"], ["color", "primary", "type", "submit", "expand", "block", "shape", "round"], [1, "error-message"], ["name", "information-circle-outline"], ["name", "mail-outline", "slot", "start"], ["labelPlacement", "floating", "required", "", "type", "email", "autocomplete", "email", "formControlName", "email", "debounce", "500", "name", "email", 3, "label"], ["name", "lock-closed-outline", "slot", "start"], ["labelPlacement", "floating", "required", "", "formControlName", "password", "debounce", "500", "name", "password", 3, "label", "type"], ["slot", "end", 4, "ngIf"], ["slot", "end"], ["slot", "icon-only", 3, "name"], ["formControlName", "birthday", "presentation", "date", "min", "1900-01-01", 3, "locale", "first-day-of-week", "max"], ["position", "floating"], ["aria-label", "Nombre de usuario", "type", "text", "autocapitalize", "words", "formControlName", "referral", "debounce", "500", "name", "referral"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_1_listener() {
        return ctx.submitRegister();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "ion-icon", 2)(10, "ion-input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 4, 4, "div", 4)(13, RegisterComponent_div_13_Template, 4, 3, "div", 4)(14, RegisterComponent_div_14_Template, 4, 3, "div", 4)(15, RegisterComponent_ion_item_15_Template, 4, 3, "ion-item", 5)(16, RegisterComponent_div_16_Template, 4, 3, "div", 4)(17, RegisterComponent_ion_item_17_Template, 5, 5, "ion-item", 5)(18, RegisterComponent_div_18_Template, 4, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "ion-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "ion-text", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "niceDate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ion-modal", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, RegisterComponent_ng_template_28_Template, 4, 15, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "ion-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, RegisterComponent_ion_select_option_35_Template, 3, 4, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, RegisterComponent_div_36_Template, 4, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "ion-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, RegisterComponent_ion_select_option_42_Template, 3, 4, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "ion-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](46, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](48, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "ion-select-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "ion-select-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](54, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "ion-select-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](57, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "ion-select-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "ion-select-option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "ion-select-option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](66, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "ion-select-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](69, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "ion-select-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, RegisterComponent_ion_item_73_Template, 11, 21, "ion-item", 5)(74, RegisterComponent_div_74_Template, 4, 3, "div", 4)(75, RegisterComponent_div_75_Template, 4, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "ion-item", 26)(77, "ion-label")(78, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](80, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_81_listener() {
        return ctx.urlSvc.openUrl("https://frikiradar.com/tos");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](83, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](85, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_86_listener() {
        return ctx.urlSvc.openUrl("https://frikiradar.com/politica-de-privacidad/");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](88, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](90, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](91, "ion-checkbox", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "ion-item", 26)(93, "ion-label")(94, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](96, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](97, "ion-checkbox", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "ion-button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](100, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 43, "cmo-an-no-tienes-una"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 45, "pasa-ya-te-queda-muy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 47, "username"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.usernameSuggestion);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.registerForm.get("username").invalid && ctx.registerForm.get("username").value && !ctx.usernameSuggestion);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.registerForm.get("username").invalid && ctx.registerForm.get("username").value && !ctx.usernameSuggestion);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.credential);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").invalid && ctx.registerForm.get("email").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.credential);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").invalid && ctx.registerForm.get("password").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 49, "fecha-nacimiento"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 51, ctx.registerForm.get("birthday").value));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 53, "gender"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 55, "cancelar"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 57, "selecciona-uno"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.userSvc.getGenders());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").invalid && ctx.registerForm.get("password").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 59, "looking-for"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 61, "cancelar"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.userSvc.getGenders());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](46, 63, "how-did-you-find-us"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 65, "cancelar"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](48, 67, "selecciona-uno"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 69, "travs-un-amigo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](54, 71, "por-un-youtuber"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](57, 73, "un-blog-web-noticias"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 75, "una-red-social"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](63, 77, "un-buscador-tienda-aplicaciones"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](66, 79, "un-eventoconvencin"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](69, 81, "participando-un-sorteo-concurso"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](72, 83, "otro-no-se-no-quiero"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.registerForm.get("meet").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.referralFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").invalid && ctx.registerForm.get("password").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](80, 85, "acepto"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](83, 87, "aviso-legal"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](85, 89, ""), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](88, 91, "poltica-privacidad"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](90, 93, "frikiradar"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](96, 95, "fecha-nacimiento-indicada-es-correcta"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](100, 97, "registrarme"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _nice_date_pipe__WEBPACK_IMPORTED_MODULE_6__.NiceDatePipe, _i18n_pipe__WEBPACK_IMPORTED_MODULE_7__.I18nPipe],
  styles: ["ion-grid[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.info[_ngcontent-%COMP%] {\n  background: #222222;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 500px;\n}\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-color: white;\n}\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  --color: #9c2c51 !important;\n  white-space: inherit;\n}\n.register[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\nform[_ngcontent-%COMP%]   .sc-ion-buttons-md-h[_ngcontent-%COMP%] {\n  margin-bottom: -14px;\n  margin-right: -12px;\n  color: #e91e63;\n}\nform[_ngcontent-%COMP%]   .sc-ion-buttons-ios-h[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20px;\n  left: 20px;\n}\nform[_ngcontent-%COMP%]   .sc-ion-buttons-ios-h[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #e91e63 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFSTtFQUNFLHFCQUFBO0FBQU47QUFHSTtFQUNFLDJCQUFBO0VBQ0Esb0JBQUE7QUFETjtBQUdNO0VBQ0UsdUJBQUE7QUFEUjs7QUFRRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTEo7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFOSjtBQVFJO0VBQ0UseUJBQUE7QUFOTiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yZWdpc3RlciB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG5cbiAgZm9ybSB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAtLWNvbG9yOiAjOWMyYzUxICFpbXBvcnRhbnQ7XG4gICAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mb3JtIHtcbiAgLnNjLWlvbi1idXR0b25zLW1kLWgge1xuICAgIG1hcmdpbi1ib3R0b206IC0xNHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTEycHg7XG4gICAgY29sb3I6ICNlOTFlNjM7XG4gIH1cblxuICAuc2MtaW9uLWJ1dHRvbnMtaW9zLWgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogMjBweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1438:
/*!*************************************************!*\
  !*** ./src/app/login/two-step/two-step.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStepPage: () => (/* binding */ TwoStepPage)
/* harmony export */ });
/* harmony import */ var _home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 44796);
/* harmony import */ var src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/i18n.service */ 98898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _i18n_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n.pipe */ 4504);

var _TwoStepPage;










class TwoStepPage {
  constructor(fb, auth, alert, nav, i18n) {
    this.fb = fb;
    this.auth = auth;
    this.alert = alert;
    this.nav = nav;
    this.i18n = i18n;
    this.codeForm = fb.group({
      code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(6)])
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.auth.sendVerification();
    })();
  }
  submitCode() {
    var _this2 = this;
    return (0,_home_albertomerino_frikiradar_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield _this2.auth.verifyCode(_this2.codeForm.get("code").value.toUpperCase());
        _this2.auth.setAuthUser(user);
        _this2.nav.navigateRoot(["/"]);
      } catch (e) {
        _this2.codeForm.get("code").setValue("");
        const alert = yield _this2.alert.create({
          header: _this2.i18n.translate("invalid-security-code"),
          message: _this2.i18n.translate("check-the-introduced-code-and-try-again"),
          buttons: [_this2.i18n.translate("ok-thanks")],
          cssClass: "round-alert"
        });
        alert.present();
      }
    })();
  }
  close() {
    this.auth.logout();
  }
}
_TwoStepPage = TwoStepPage;
_TwoStepPage.ɵfac = function TwoStepPage_Factory(t) {
  return new (t || _TwoStepPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService));
};
_TwoStepPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _TwoStepPage,
  selectors: [["two-step-app"]],
  decls: 22,
  vars: 17,
  consts: [[1, "ion-no-border"], ["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "close"], [1, "ion-padding"], ["autocomplete", "off", 3, "submit", "formGroup"], [1, "code"], ["aria-label", "", "autocomplete", "off", "formControlName", "code", "maxlength", "6", "name", "code", "required", "", "type", "text", 3, "placeholder"], ["color", "primary", "expand", "block", "type", "submit", "shape", "round", 3, "disabled"]],
  template: function TwoStepPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TwoStepPage_Template_ion_button_click_3_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function TwoStepPage_Template_form_submit_15_listener() {
        return ctx.submitCode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "i18n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 7, "verificacin-dos-pasos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 9, "te-hemos-enviado-un-cdigo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 11, "introduce-cdigo-seguridad-para-verificar"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.codeForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 13, "codigo-seguridad"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.codeForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 15, "verificar"), " ");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _i18n_pipe__WEBPACK_IMPORTED_MODULE_3__.I18nPipe],
  styles: ["form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-color: white;\n}\nform[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  --color: #9c2c51 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vdHdvLXN0ZXAvdHdvLXN0ZXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsMkJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICAtLWNvbG9yOiAjOWMyYzUxICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map