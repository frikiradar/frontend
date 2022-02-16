"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 3619:
/*!*****************************************************************!*\
  !*** ./src/app/login/activate-account/activate-account.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateAccountPage": () => (/* binding */ ActivateAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _activate_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-account.page.html?ngResource */ 43021);
/* harmony import */ var _activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activate-account.page.scss?ngResource */ 49439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ 70946);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ 73071);










let ActivateAccountPage = class ActivateAccountPage {
    constructor(fb, userSvc, auth, alert, nav, toast, config) {
        this.fb = fb;
        this.userSvc = userSvc;
        this.auth = auth;
        this.alert = alert;
        this.nav = nav;
        this.toast = toast;
        this.config = config;
        this.changingEmail = false;
        this.user = this.auth.currentUserValue;
        this.codeForm = fb.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(6)
            ])
        });
        this.emailForm = fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
            ])
        });
    }
    submitCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.user = yield this.userSvc.activateUser(this.codeForm.get("code").value.toUpperCase());
                this.auth.setAuthUser(this.user);
                this.config.getConfig(true);
                const alert = yield this.alert.create({
                    header: `¡Cuenta activada correctamente!`,
                    message: "¿Qué te gustaría hacer ahora? ¿Configurar tu perfil (fotos, descripción, gustos y pasatiempos...) o comenzar a buscar personas?",
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: "¡Comenzar!",
                            handler: () => {
                                this.nav.navigateRoot(["/"]);
                            }
                        },
                        {
                            text: "Configurar mi perfil",
                            handler: () => {
                                this.nav.navigateRoot(["/edit-profile"]);
                            }
                        }
                    ],
                    cssClass: "round-alert"
                });
                alert.present();
            }
            catch (e) {
                this.codeForm.get("code").setValue("");
                const alert = yield this.alert.create({
                    header: "Código de seguridad no válido",
                    message: "Revisa el código introducido y vuelve a intentarlo.",
                    buttons: ["Ok, gracias"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    resendCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userSvc.resendActivationEmail().toPromise();
            (yield this.toast.create({
                message: "Te hemos enviado un nuevo código de verificación al email",
                duration: 2000,
                position: "bottom"
            })).present();
        });
    }
    changeEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.user = yield this.userSvc.changeEmail(this.user.email, this.emailForm.get("email").value);
                this.auth.setAuthUser(this.user);
                this.resendCode();
                this.changingEmail = false;
            }
            catch (e) {
                const alert = yield this.alert.create({
                    header: "Error al cambiar el email",
                    message: "Revisa el email introducido y vuelve a intentarlo.",
                    buttons: ["Ok, gracias"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    back() {
        this.changingEmail = false;
    }
    close() {
        this.auth.logout();
    }
};
ActivateAccountPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
ActivateAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "activate-account-app",
        template: _activate_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_activate_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController,
        src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController,
        src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService])
], ActivateAccountPage);



/***/ }),

/***/ 36450:
/*!*************************************************************!*\
  !*** ./src/app/login/banned-account/banned-account.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannedAccountPage": () => (/* binding */ BannedAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _banned_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banned-account.page.html?ngResource */ 45040);
/* harmony import */ var _banned_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banned-account.page.scss?ngResource */ 81256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ 9014);
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/url.service */ 90925);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 37556);









let BannedAccountPage = class BannedAccountPage {
    constructor(auth, chatSvc, formBuilder, urlSvc) {
        this.auth = auth;
        this.chatSvc = chatSvc;
        this.formBuilder = formBuilder;
        this.urlSvc = urlSvc;
        this.messages = [];
        this.countDownString = "";
        this.chatForm = formBuilder.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
        });
        this.user = this.auth.currentUserValue;
        if (this.user.ban_end) {
            setInterval(() => {
                this.countDown();
            }, 1000);
        }
        else {
            this.countDownString = "∞";
        }
    }
    get message() {
        return this.chatForm.get("message");
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const messages = (yield this.chatSvc.getMessages(1, true)).reverse();
            const topMessages = [
                {
                    text: "Recapacita lo que has hecho, reflexiona y mejora tu actitud, esto es una advertencia. Estás castigado el tiempo mostrado, muestra respeto tal y como te gustaría recibirlo.",
                    touser: { id: this.user.id },
                    fromuser: { id: 1 }
                },
                {
                    text: "Una vez hayas recapacitado... si crees que ha sido un error, quieres disculparte o aportar sugerencias para la aplicación escribe a continuación.",
                    touser: { id: this.user.id },
                    fromuser: { id: 1 }
                }
            ];
            this.messages = [
                messages[0],
                ...topMessages,
                ...messages.filter(m => m.id !== messages[0].id)
            ];
        });
    }
    sendMessage(event) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (event) {
                event.preventDefault();
            }
            if (this.message.value && this.message.value.trim()) {
                const text = this.message.value ? this.message.value.trim() : "";
                this.message.setValue("");
                (_a = this.textarea) === null || _a === void 0 ? void 0 : _a.setFocus();
                this.messages = [
                    ...this.messages,
                    ...[
                        {
                            touser: { id: 1 },
                            fromuser: { id: this.user.id },
                            text,
                            time_creation: new Date()
                        }
                    ]
                ].filter((m) => m.text || m.image);
                this.scrollDown();
                try {
                    yield this.chatSvc.sendMessage(1, text).then();
                }
                catch (e) {
                    this.messages = this.messages.filter(m => m.sending !== true);
                    console.error(e);
                }
            }
        });
    }
    scrollDown(delay = 1) {
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
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.countDownString =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        // If the count down is finished, write some text
        if (distance < 0) {
            this.auth.logout();
        }
    }
    close() {
        this.auth.logout();
    }
};
BannedAccountPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService }
];
BannedAccountPage.propDecorators = {
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["textarea", { static: true },] }],
    chatlist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["chatlist", { static: true },] }]
};
BannedAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "banned-account-app",
        template: _banned_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_banned_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder,
        src_app_services_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService])
], BannedAccountPage);



/***/ }),

/***/ 22301:
/*!****************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.modal.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordModal": () => (/* binding */ ForgotPasswordModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgot_password_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.modal.html?ngResource */ 51363);
/* harmony import */ var _forgot_password_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.modal.scss?ngResource */ 4191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);








let ForgotPasswordModal = class ForgotPasswordModal {
    constructor(navParams, fb, modal, alert, auth, router, toast) {
        this.fb = fb;
        this.modal = modal;
        this.alert = alert;
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.step = 1;
        this.clearPassword = false;
        this.requestForm = fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)
            ])
        });
        this.passwordForm = fb.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(6)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)
            ])
        });
        if (navParams && navParams.get("username")) {
            this.requestForm
                .get("username")
                .setValue(navParams.get("username").value);
        }
    }
    submitRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.auth.requestPassword(this.requestForm.get("username").value);
                this.step = 2;
            }
            catch (e) {
                const alert = yield this.alert.create({
                    header: "Nombre de usuario o email no válido",
                    message: "No existe ninguna cuenta asociada a esta información.",
                    buttons: ["Ok, gracias"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    submitPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.auth.recoverPassword(this.requestForm.get("username").value, this.passwordForm.get("password").value, this.passwordForm.get("code").value.toUpperCase());
                const user = yield this.auth.login(this.requestForm.get("username").value, this.passwordForm.get("password").value);
                this.recoverSuccess(user);
                this.passwordForm.reset();
            }
            catch (e) {
                const alert = yield this.alert.create({
                    header: "Código de seguridad no válido",
                    message: "Revisa el código introducido y vuelve a intentarlo.",
                    buttons: ["Ok, gracias"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    recoverSuccess(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.auth.setAuthUser(user);
            (yield this.toast.create({
                message: "Acceso concedido",
                duration: 2000,
                position: "bottom"
            })).present();
            this.router.navigate(["/"]);
            this.close();
        });
    }
    close() {
        this.modal.dismiss();
    }
};
ForgotPasswordModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
ForgotPasswordModal = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "forgot-password-modal",
        template: _forgot_password_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_password_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController])
], ForgotPasswordModal);



/***/ }),

/***/ 34654:
/*!**********************************************************!*\
  !*** ./src/app/login/login-info/login-info.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginInfoComponent": () => (/* binding */ LoginInfoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-info.component.html?ngResource */ 96212);
/* harmony import */ var _login_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-info.component.scss?ngResource */ 54794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LoginInfoComponent = class LoginInfoComponent {
    constructor() { }
    ngOnInit() { }
};
LoginInfoComponent.ctorParameters = () => [];
LoginInfoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-login-info",
        template: _login_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_info_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])
], LoginInfoComponent);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_linky__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-linky */ 74802);
/* harmony import */ var _login_login_info_login_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login-info/login-info.component */ 34654);
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/register/register.component */ 44376);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _activate_account_activate_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activate-account/activate-account.page */ 3619);
/* harmony import */ var _banned_account_banned_account_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banned-account/banned-account.page */ 36450);
/* harmony import */ var _forgot_password_forgot_password_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.modal */ 22301);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var _two_step_two_step_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./two-step/two-step.page */ 14571);















const routes = [
    {
        path: "",
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__.LoginPage
    },
    {
        path: "activate-account",
        component: _activate_account_activate_account_page__WEBPACK_IMPORTED_MODULE_3__.ActivateAccountPage
    },
    {
        path: "banned-account",
        component: _banned_account_banned_account_page__WEBPACK_IMPORTED_MODULE_4__.BannedAccountPage
    },
    {
        path: "two-step",
        component: _two_step_two_step_page__WEBPACK_IMPORTED_MODULE_7__.TwoStepPage
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ngx_linky__WEBPACK_IMPORTED_MODULE_14__.LinkyModule
        ],
        declarations: [
            _login_page__WEBPACK_IMPORTED_MODULE_6__.LoginPage,
            _forgot_password_forgot_password_modal__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordModal,
            _activate_account_activate_account_page__WEBPACK_IMPORTED_MODULE_3__.ActivateAccountPage,
            _banned_account_banned_account_page__WEBPACK_IMPORTED_MODULE_4__.BannedAccountPage,
            _two_step_two_step_page__WEBPACK_IMPORTED_MODULE_7__.TwoStepPage,
            _login_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent,
            _login_login_info_login_info_component__WEBPACK_IMPORTED_MODULE_0__.LoginInfoComponent
        ],
        exports: [_login_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _login_login_info_login_info_component__WEBPACK_IMPORTED_MODULE_0__.LoginInfoComponent]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 87047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 70946);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/auth.service */ 37556);
/* harmony import */ var _forgot_password_forgot_password_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.modal */ 22301);











let LoginPage = class LoginPage {
    constructor(router, route, auth, alert, modal, toast, fb, nav, platform, config) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.alert = alert;
        this.modal = modal;
        this.toast = toast;
        this.fb = fb;
        this.nav = nav;
        this.platform = platform;
        this.config = config;
        this.clearPassword = false;
        this.activeView = "login";
        if (localStorage.getItem("currentUser")) {
            this.router.navigate(["/"]);
        }
        this.loginForm = fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)
            ])
        });
    }
    get username() {
        return this.loginForm.get("username");
    }
    get password() {
        return this.loginForm.get("password");
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    }
    submitLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loginForm.valid) {
                try {
                    const user = yield this.auth.login(this.username.value, this.password.value);
                    this.loginSuccess(user);
                    this.loginForm.reset();
                }
                catch (e) {
                    if (e.message) {
                        this.loginError(e.message);
                    }
                    else if (e.detail) {
                        this.loginError(e.detail);
                    }
                    else {
                        this.loginError(e);
                    }
                }
            }
            else {
                if (!this.username.value) {
                    const alert = yield this.alert.create({
                        header: "¿Te has dado cuenta?",
                        message: "Para dos cosas que te pedimos y las pones mal... 🤭",
                        buttons: ["Tendré más cuidado"],
                        cssClass: "round-alert"
                    });
                    yield alert.present();
                }
            }
        });
    }
    loginSuccess(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.config.getConfig(true);
            if (user && user.two_step) {
                this.nav.navigateRoot(["/login/two-step"], {
                    queryParams: { returnUrl: this.returnUrl }
                });
            }
            else {
                this.auth.setAuthUser(user);
                (yield this.toast.create({
                    message: "¡Acceso concedido!",
                    duration: 2000,
                    position: "bottom"
                })).present();
                this.nav.navigateRoot(this.returnUrl);
            }
        });
    }
    loginError(message) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let header = "";
            if (message.includes("Invalid credentials.")) {
                header = "Error de autenticación";
                message =
                    "El nombre/email o contraseña que has introducido no son correctos.";
            }
            else if (message.includes("Banned account.")) {
                header = "¡Estás baneado!";
                const data = JSON.parse(message);
                const date = (_a = data.end) === null || _a === void 0 ? void 0 : _a.date;
                message =
                    "Motivo: " +
                        data.reason +
                        "." +
                        "<br />" +
                        "Fin del baneo: " +
                        (date ? date.split(" ")[0] : "Indefinido");
            }
            else if (message === "Internal Server Error" || message === "OK") {
                header = "Error del sistema";
                message =
                    "Escríbenos a hola@frikiradar si te aparece este error para que lo revisemos.";
            }
            else {
                header = "Error desconocido";
                message =
                    "Escríbenos a hola@frikiradar si te aparece este error para que lo revisemos.";
            }
            const alert = yield this.alert.create({
                header,
                message,
                buttons: ["Oki doki"],
                cssClass: "round-alert"
            });
            yield alert.present();
        });
    }
    forgotPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _forgot_password_forgot_password_modal__WEBPACK_IMPORTED_MODULE_5__.ForgotPasswordModal,
                componentProps: { username: this.username }
            });
            return yield modal.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-login",
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform,
        _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService])
], LoginPage);



/***/ }),

/***/ 44376:
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 65985);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 51277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/url.service */ 90925);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 73071);









let RegisterComponent = class RegisterComponent {
    constructor(alert, auth, fb, nav, toast, userSvc, ngZone, platform, urlSvc) {
        this.alert = alert;
        this.auth = auth;
        this.fb = fb;
        this.nav = nav;
        this.toast = toast;
        this.userSvc = userSvc;
        this.ngZone = ngZone;
        this.platform = platform;
        this.urlSvc = urlSvc;
        this.today = Date.now();
        this.clearPassword = false;
        this.usernameSuggestion = "";
        this.adult = false;
        this.registerForm = fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+")
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)
            ]),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            gender: [""],
            lovegender: [""],
            meet: [""],
            referral: [""],
            acceptos: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue)
        });
        this.registerForm.get("username").valueChanges.subscribe((username) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (username.trim() !== "") {
                const u = yield this.auth.checkUsername(username);
                if (u !== true) {
                    this.registerForm.get("username").setErrors({ incorrect: true });
                    this.usernameSuggestion = u;
                }
                else {
                    this.usernameSuggestion = "";
                }
            }
        }));
    }
    changeAge(event) {
        if (this.auth.isAdult(event.detail.value)) {
            this.adult = true;
        }
        else {
            this.adult = false;
        }
    }
    submitRegister() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.registerForm.valid) {
                const alert = yield this.alert.create({
                    header: `Aviso`,
                    message: `Te llegará un email con un código de confirmación a la dirección ${this.registerForm
                        .get("email")
                        .value.trim()} ¿Es correcta?`,
                    buttons: [
                        {
                            text: "Ups, me confundí",
                            role: "cancel",
                            cssClass: "secondary"
                        },
                        {
                            text: "¡Es correcta!",
                            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                                try {
                                    yield this.auth.register(this.registerForm.get("username").value.trim(), this.registerForm
                                        .get("email")
                                        .value.trim()
                                        .toLowerCase(), this.registerForm.get("password").value.trim(), this.registerForm.get("birthday").value.split("T")[0], this.registerForm.get("gender").value.trim(), this.registerForm.get("lovegender").value, this.registerForm.get("meet").value, this.registerForm.get("referral").value);
                                    const user = yield this.auth.login(this.registerForm.get("username").value.trim(), this.registerForm.get("password").value.trim());
                                    this.registerSuccess(user);
                                }
                                catch (error) {
                                    this.registerError(error);
                                }
                            })
                        }
                    ],
                    cssClass: "round-alert"
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alert.create({
                    header: "Revisa la información",
                    message: "Es necesario rellenar todos los campos.",
                    buttons: ["Ok, Tendré más cuidado"],
                    cssClass: "round-alert"
                });
                yield alert.present();
            }
        });
    }
    registerSuccess(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.auth.setAuthUser(user);
            (yield this.toast.create({
                message: "Registro realizado correctamente",
                duration: 2000,
                position: "bottom"
            })).present();
            this.ngZone.run(() => this.nav.navigateRoot(["/"])).then();
        });
    }
    registerError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: "Error de registro",
                message: error,
                buttons: ["Ok"],
                cssClass: "round-alert"
            });
            yield alert.present();
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-register",
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService,
        _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform,
        src_app_services_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService])
], RegisterComponent);



/***/ }),

/***/ 14571:
/*!*************************************************!*\
  !*** ./src/app/login/two-step/two-step.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwoStepPage": () => (/* binding */ TwoStepPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _two_step_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./two-step.page.html?ngResource */ 27524);
/* harmony import */ var _two_step_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-step.page.scss?ngResource */ 55529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);







let TwoStepPage = class TwoStepPage {
    constructor(fb, auth, alert, nav) {
        this.fb = fb;
        this.auth = auth;
        this.alert = alert;
        this.nav = nav;
        this.codeForm = fb.group({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(6)
            ])
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.twoStepCode().toPromise();
        });
    }
    submitCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.auth.verifyLogin(this.codeForm.get("code").value.toUpperCase());
                this.auth.setAuthUser(user);
                this.nav.navigateRoot(["/"]);
            }
            catch (e) {
                this.codeForm.get("code").setValue("");
                const alert = yield this.alert.create({
                    header: "Código de seguridad no válido",
                    message: "Revisa el código introducido y vuelve a intentarlo.",
                    buttons: ["Ok, gracias"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    close() {
        this.auth.logout();
    }
};
TwoStepPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
TwoStepPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "two-step-app",
        template: _two_step_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_two_step_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController])
], TwoStepPage);



/***/ }),

/***/ 49439:
/*!******************************************************************************!*\
  !*** ./src/app/login/activate-account/activate-account.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "form ion-item {\n  --border-color: white;\n}\nform ion-label {\n  --color: #9c2c51 !important;\n}\nform #code {\n  text-align: center;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  --highlight-color-invalid: white;\n  --highlight-color-valid: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2YXRlLWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsMkJBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FBRkoiLCJmaWxlIjoiYWN0aXZhdGUtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogIzljMmM1MSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2NvZGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiB3aGl0ZTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogd2hpdGU7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 81256:
/*!**************************************************************************!*\
  !*** ./src/app/login/banned-account/banned-account.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-label p,\nion-label h2 {\n  text-transform: none;\n  letter-spacing: normal;\n  margin: 0 0 0 10px;\n  text-align: left;\n}\nion-label p {\n  font-size: 12px;\n}\nion-label p ion-badge {\n  margin-right: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\n.bubble ion-card {\n  border-radius: 25px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.bubble.from ion-card {\n  margin-left: 40px;\n  --color: white;\n  --background: none;\n  float: right;\n  clear: both;\n}\n.bubble.from ion-card-content {\n  background: #6d0b28;\n}\n.bubble.from + .to ion-card {\n  margin-top: 8px;\n}\n.bubble.to ion-card {\n  margin-right: 40px;\n  --color: white;\n  --background: none;\n  float: left;\n  clear: both;\n}\n.bubble.to ion-card-content {\n  background: #9a1c42;\n}\n.bubble.to + .from ion-card {\n  margin-top: 8px;\n}\n.bubble .text {\n  margin-right: 10px;\n  word-break: break-word;\n  white-space: pre-line;\n}\n.bubble ion-note {\n  font-size: 10px;\n  position: relative;\n  bottom: -8px;\n  color: #bbbbbb;\n}\n.bubble ion-note ion-icon {\n  font-size: 14px;\n  vertical-align: text-bottom;\n}\nion-chip {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  clear: both;\n}\nion-footer ion-item {\n  background: white;\n  border-radius: 30px;\n  margin-left: 8px;\n}\nion-footer ion-textarea {\n  --placeholder-color: #555555 !important;\n  color: #353535 !important;\n  padding: 5px 0 4px 15px;\n  margin: 0;\n  font-size: 12pt;\n}\nion-footer ion-label {\n  position: absolute;\n  z-index: 2;\n  right: 20px;\n  width: 30px !important;\n  min-width: 0px !important;\n  margin: 2px 0 !important;\n}\nion-footer ion-label ion-icon {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lZC1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUROO0FBT0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpKO0FBUUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTk47QUFTSTtFQUNFLG1CQUFBO0FBUE47QUFVSTtFQUNFLGVBQUE7QUFSTjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVhOO0FBY0k7RUFDRSxtQkFBQTtBQVpOO0FBZUk7RUFDRSxlQUFBO0FBYk47QUFpQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFmSjtBQWtCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBaEJKO0FBa0JJO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBaEJOO0FBcUJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWxCRjtBQXNCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXNCRTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBcEJKO0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQXJCSjtBQXVCSTtFQUNFLGVBQUE7QUFyQk4iLCJmaWxlIjoiYmFubmVkLWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgcCxcbiAgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICBpb24tYmFkZ2Uge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgfVxuICB9XG59XG5cbi5idWJibGUge1xuICBpb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG5cbiAgJi5mcm9tIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjNmQwYjI4O1xuICAgIH1cblxuICAgICYgKyAudG8gaW9uLWNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cbiAgfVxuXG4gICYudG8ge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICB9XG5cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6ICM5YTFjNDI7XG4gICAgfVxuXG4gICAgJiArIC5mcm9tIGlvbi1jYXJkIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gIH1cblxuICAudGV4dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB9XG5cbiAgaW9uLW5vdGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAtOHB4O1xuICAgIGNvbG9yOiAjYmJiYmJiO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgIH1cbiAgfVxufVxuXG5pb24tY2hpcCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgaW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuXG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzU1NTU1NSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzUzNTM1ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNXB4IDAgNHB4IDE1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMnB4IDAgIWltcG9ydGFudDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 4191:
/*!*****************************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.modal.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "form ion-item {\n  --border-color: white;\n}\nform ion-label {\n  --color: #9c2c51 !important;\n}\nform #code {\n  text-align: center;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  --highlight-color-invalid: white;\n  --highlight-color-valid: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UsMkJBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FBRkoiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogIzljMmM1MSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2NvZGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiB3aGl0ZTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogd2hpdGU7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 54794:
/*!***********************************************************************!*\
  !*** ./src/app/login/login-info/login-info.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 87047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  display: flex;\n  flex-direction: column;\n}\nion-content ion-grid {\n  padding: 0;\n}\nion-content ion-img {\n  margin-top: 3vh;\n  width: 20vh;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-footer {\n  text-align: center;\n}\nion-footer img {\n  width: 50px;\n}\nion-footer.footer-md::before {\n  background-image: none;\n}\nion-button {\n  --color: red;\n  text-transform: unset;\n}\n.login {\n  width: 50%;\n  max-width: 500px;\n}\n.login form ion-label {\n  --color: #9c2c51 !important;\n}\n.login form .sc-ion-buttons-md-h {\n  margin-bottom: -14px;\n  margin-right: -12px;\n  color: #e91e63;\n}\n.login form .sc-ion-buttons-ios-h {\n  position: relative;\n  top: 20px;\n  left: 20px;\n}\n.login form .sc-ion-buttons-ios-h ion-icon {\n  color: #e91e63 !important;\n}\n.info {\n  background: #222222;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n.register p {\n  font-size: 14px;\n  margin-top: 20px;\n  margin-bottom: 5px;\n}\n.register ion-button {\n  text-transform: unset;\n}\n#forgot-password {\n  font-size: 14px;\n}\n#forgot-password a {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUlBO0VBQ0Usa0JBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtBQURKO0FBSUU7RUFDRSxzQkFBQTtBQUZKO0FBTUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFIRjtBQU1BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBSEY7QUFLSTtFQUNFLDJCQUFBO0FBSE47QUFNSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSk47QUFPSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFMTjtBQU9NO0VBQ0UseUJBQUE7QUFMUjtBQVdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFSRjtBQVlFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQVlFO0VBQ0UscUJBQUE7QUFWSjtBQWNBO0VBQ0UsZUFBQTtBQVhGO0FBWUU7RUFDRSxlQUFBO0FBVkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgaW9uLWltZyB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIHdpZHRoOiAyMHZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICAmLmZvb3Rlci1tZDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWNvbG9yOiByZWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbn1cblxuLmxvZ2luIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgZm9ybSB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIC0tY29sb3I6ICM5YzJjNTEgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTEycHg7XG4gICAgICBjb2xvcjogI2U5MWU2MztcbiAgICB9XG5cbiAgICAuc2MtaW9uLWJ1dHRvbnMtaW9zLWgge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgbGVmdDogMjBweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI2U5MWU2MyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW5mbyB7XG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICB9XG59XG5cbiNmb3Jnb3QtcGFzc3dvcmQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 51277:
/*!*******************************************************************!*\
  !*** ./src/app/login/register/register.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  padding: 0;\n}\n\n.info {\n  background: #222222;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n.register {\n  width: 50%;\n  max-width: 500px;\n}\n\n.register form ion-slide {\n  display: block;\n  text-align: inherit;\n  height: 85vh;\n}\n\n.register form ion-item {\n  --border-color: white;\n}\n\n.register form ion-label {\n  --color: #9c2c51 !important;\n  white-space: inherit;\n}\n\n.register form ion-label p {\n  color: white !important;\n}\n\nform .sc-ion-buttons-md-h {\n  margin-bottom: -14px;\n  margin-right: -12px;\n  color: #e91e63;\n}\n\nform .sc-ion-buttons-ios-h {\n  position: relative;\n  top: 20px;\n  left: 20px;\n}\n\nform .sc-ion-buttons-ios-h ion-icon {\n  color: #e91e63 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVJO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUdJO0VBQ0UscUJBQUE7QUFETjs7QUFJSTtFQUNFLDJCQUFBO0VBQ0Esb0JBQUE7QUFGTjs7QUFJTTtFQUNFLHVCQUFBO0FBRlI7O0FBU0U7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVBKOztBQVNJO0VBQ0UseUJBQUE7QUFQTiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmluZm8ge1xuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yZWdpc3RlciB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG5cbiAgZm9ybSB7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgIGhlaWdodDogODV2aDtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIC0tY29sb3I6ICM5YzJjNTEgIWltcG9ydGFudDtcbiAgICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZvcm0ge1xuICAuc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbiAgICBjb2xvcjogI2U5MWU2MztcbiAgfVxuXG4gIC5zYy1pb24tYnV0dG9ucy1pb3MtaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn0iXX0= */";

/***/ }),

/***/ 55529:
/*!**************************************************************!*\
  !*** ./src/app/login/two-step/two-step.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "form ion-item {\n  --border-color: white;\n}\nform ion-label {\n  --color: #9c2c51 !important;\n}\nform #code {\n  text-align: center;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  --highlight-color-invalid: white;\n  --highlight-color-valid: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3by1zdGVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLDJCQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQUZKIiwiZmlsZSI6InR3by1zdGVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICAtLWNvbG9yOiAjOWMyYzUxICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjY29kZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHdoaXRlO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiB3aGl0ZTtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 43021:
/*!******************************************************************************!*\
  !*** ./src/app/login/activate-account/activate-account.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar *ngIf=\"!changingEmail\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cuenta inactiva</ion-title>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"changingEmail\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cambiar correo electrónico</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"!changingEmail\">\n    <h4>\n      Te hemos enviado un código de seguridad a {{ user.email }}. Revisa tu\n      carpeta de spam/no deseado si no lo encuentras.\n    </h4>\n    <p>Introduce el código de seguridad para activar tu cuenta.</p>\n    <form (submit)=\"submitCode()\" [formGroup]=\"codeForm\" autocomplete=\"off\">\n      <ion-item id=\"code\">\n        <ion-input\n          autocomplete=\"off\"\n          formControlName=\"code\"\n          maxlength=\"6\"\n          autocapitalize=\"characters\"\n          placeholder=\"Código de seguridad\"\n          type=\"text\"\n        ></ion-input>\n      </ion-item>\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        type=\"submit\"\n        [disabled]=\"codeForm.invalid\"\n        >Activar la cuenta</ion-button\n      >\n    </form>\n    <p color=\"primary\" class=\"ion-text-center\" (click)=\"resendCode()\">\n      No he recibido mi código/código no válido\n    </p>\n  </div>\n  <div *ngIf=\"changingEmail\">\n    <h4>¡Revisa tu dirección de correo!</h4>\n    <p>Asegúrate de introducirla correctamente.</p>\n    <form\n      (submit)=\"changeEmail()\"\n      [formGroup]=\"emailForm\"\n      autocomplete=\"off\"\n      *ngIf=\"changingEmail\"\n    >\n      <ion-item>\n        <ion-label position=\"floating\">Correo electrónico</ion-label>\n        <ion-input\n          required\n          type=\"email\"\n          autocomplete=\"email\"\n          formControlName=\"email\"\n          debounce=\"500\"\n          name=\"email\"\n          [value]=\"user.email\"\n        >\n        </ion-input>\n      </ion-item>\n      <div\n        class=\"error-message\"\n        *ngIf=\"emailForm.get('email').invalid && emailForm.get('email').value\"\n      >\n        <ion-icon name=\"information-circle-outline\"></ion-icon>Introduce una\n        dirección de correo electrónico válida.\n      </div>\n      <ion-button\n        color=\"primary\"\n        expand=\"block\"\n        type=\"submit\"\n        [disabled]=\"emailForm.invalid || emailForm.pristine\"\n        shape=\"round\"\n        >Confirmar cambio</ion-button\n      >\n    </form>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"!changingEmail\">\n  <p color=\"primary\" class=\"ion-text-center\" (click)=\"changingEmail = true\">\n    ¿Tu email no es {{user.email}}?\n  </p>\n</ion-footer>\n";

/***/ }),

/***/ 45040:
/*!**************************************************************************!*\
  !*** ./src/app/login/banned-account/banned-account.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n      <ion-avatar>\n        <ion-img\n          *ngIf=\"user\"\n          src=\"/assets/img/users/banned.jpg\"\n          [alt]=\"user?.username\"\n        ></ion-img>\n        <ion-skeleton-text animated *ngIf=\"!user\"></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h2>Cuenta baneada</h2>\n      </ion-label>\n    </ion-buttons>\n    <ion-label class=\"ion-padding\" slot=\"end\">{{countDownString}}</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #chatlist>\n  <span\n    class=\"bubble {{ message.fromuser?.id == 1 ? 'to' : 'from' }}\"\n    *ngFor=\"let message of messages; let i = index\"\n  >\n    <ion-chip\n      color=\"primary\"\n      class=\"center\"\n      *ngIf=\"message?.time_creation &&\n        (message?.time_creation | date: 'shortDate') !==\n        (messages[i - 1]?.time_creation | date: 'shortDate')\n      \"\n    >\n      <ion-label color=\"secondary\"\n        >{{ message.time_creation | date: \"fullDate\" }}</ion-label\n      >\n    </ion-chip>\n    <ion-card button>\n      <ion-card-content *ngIf=\"message.text\">\n        <span\n          class=\"text\"\n          [innerHTML]=\"message.text | linky:{className: 'linkified'}\"\n          (click)=\"$event.stopImmediatePropagation(); openUrl($event);\"\n        ></span>\n        <ion-note>\n          {{ message.time_creation | date: \"shortTime\" }}\n          <span *ngIf=\"message.fromuser?.id == user?.id\">\n            <ion-icon *ngIf=\"message.sending\" name=\"time\"></ion-icon>\n            <ion-icon\n              *ngIf=\"!message.sending && !message.time_read\"\n              name=\"checkmark\"\n            ></ion-icon>\n            <ion-icon\n              *ngIf=\"message.time_read\"\n              color=\"secondary\"\n              name=\"checkmark-done\"\n            ></ion-icon>\n          </span>\n        </ion-note>\n      </ion-card-content>\n    </ion-card>\n  </span>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <form [formGroup]=\"chatForm\" autocomplete=\"off\">\n      <ion-item lines=\"none\">\n        <ion-textarea\n          placeholder=\"書く！\"\n          autocapitalize=\"on\"\n          (keydown.enter)=\"sendMessage($event)\"\n          formControlName=\"message\"\n          #textarea\n          autofocus\n          autoGrow\n          rows=\"1\"\n        >\n        </ion-textarea>\n      </ion-item>\n    </form>\n    <ion-buttons ion-activatable slot=\"end\">\n      <ion-button\n        color=\"primary\"\n        [disabled]=\"!message.value\"\n        (click)=\"sendMessage()\"\n      >\n        <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 51363:
/*!*****************************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.modal.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Contraseña olvidada</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"step === 1; else step2\">\n    <h4>¡Vaya!, ¿Has olvidado tu contraseña?</h4>\n    <p>\n      No te preocupes, rellena este formulario y te enviaremos un email con un\n      código para poder generar una nueva.\n    </p>\n    <form\n      (submit)=\"submitRequest()\"\n      [formGroup]=\"requestForm\"\n      autocomplete=\"off\"\n    >\n      <ion-item>\n        <ion-label position=\"floating\"\n          >Nombre de usuario o correo electrónico</ion-label\n        >\n        <ion-input\n          required\n          type=\"text\"\n          formControlName=\"username\"\n          name=\"username\"\n          autocomplete=\"off\"\n        ></ion-input>\n      </ion-item>\n      <ion-button color=\"primary\" type=\"submit\" expand=\"block\" shape=\"round\"\n        >Solicitar</ion-button\n      >\n    </form>\n  </div>\n  <ng-template #step2>\n    <h4>\n      ¡Te hemos enviado un código de seguridad al email! Revisa tu carpeta de\n      spam/no deseado si no lo encuentras.\n    </h4>\n    <p>\n      Introduce el código de seguridad y tu nueva contraseña para cambiarla.\n    </p>\n    <form\n      (submit)=\"submitPassword()\"\n      [formGroup]=\"passwordForm\"\n      autocomplete=\"off\"\n    >\n      <ion-item id=\"code\">\n        <ion-input\n          required\n          maxlength=\"6\"\n          autocapitalize=\"characters\"\n          type=\"text\"\n          placeholder=\"Código de seguridad\"\n          formControlName=\"code\"\n          name=\"code\"\n          autocomplete=\"off\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Nueva contraseña</ion-label>\n        <ion-input\n          required\n          [type]=\"clearPassword ? 'text' : 'password'\"\n          formControlName=\"password\"\n          name=\"password\"\n          autocomplete=\"off\"\n        >\n        </ion-input>\n        <ion-buttons slot=\"end\" *ngIf=\"!passwordForm.get('password').pristine\">\n          <ion-button (click)=\"clearPassword = !clearPassword\">\n            <ion-icon\n              slot=\"icon-only\"\n              [name]=\"clearPassword ? 'eye' : 'eye-off'\"\n            ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n      <ion-button\n        color=\"primary\"\n        type=\"submit\"\n        expand=\"block\"\n        shape=\"round\"\n        [disabled]=\"\n          passwordForm.get('password').invalid ||\n          passwordForm.get('code').invalid\n        \"\n        >Cambiar contraseña</ion-button\n      >\n    </form>\n  </ng-template>\n</ion-content>\n";

/***/ }),

/***/ 96212:
/*!***********************************************************************!*\
  !*** ./src/app/login/login-info/login-info.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"full-center ion-padding\">\n  <ion-icon name=\"location-sharp\"></ion-icon>\n  <h1>FrikiRadar, conoce a personas frikis como tú</h1>\n  <p>\n    Conoce y liga con frikis, otakus, gamers, geek o nerds a los que le guste tu\n    videojuego, serie, manga, anime, cómic o música favorita.\n  </p>\n</div>\n";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngIf=\"platform.is('desktop')\" class=\"info\">\n        <app-login-info></app-login-info>\n      </ion-col>\n      <ion-col class=\"login\">\n        <div *ngIf=\"activeView == 'login'\" class=\"ion-padding\">\n          <ion-img\n            alt=\"frikiradar\"\n            src=\"./assets/img/logo/logo_transparente.png\"\n          ></ion-img>\n          <h2>Hola,</h2>\n          <h3>Te doy la bienvenida a FrikiRadar</h3>\n          <div id=\"login-content\">\n            <form\n              (submit)=\"submitLogin()\"\n              [formGroup]=\"loginForm\"\n              autocomplete=\"off\"\n            >\n              <ion-item>\n                <ion-label position=\"floating\"\n                  >Nombre de usuario o correo electrónico</ion-label\n                >\n                <ion-input\n                  outline\n                  required\n                  type=\"text\"\n                  formControlName=\"username\"\n                  name=\"username\"\n                  autocomplete=\"username\"\n                  (keyup.enter)=\"submitLogin()\"\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Contraseña</ion-label>\n                <ion-input\n                  required\n                  [type]=\"clearPassword ? 'text' : 'password'\"\n                  formControlName=\"password\"\n                  name=\"password\"\n                  autocomplete=\"current-password\"\n                  (keyup.enter)=\"submitLogin()\"\n                >\n                </ion-input>\n                <ion-buttons slot=\"end\" *ngIf=\"!password.pristine\">\n                  <ion-button (click)=\"clearPassword = !clearPassword\">\n                    <ion-icon\n                      slot=\"icon-only\"\n                      [name]=\"clearPassword ? 'eye' : 'eye-off'\"\n                    ></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-item>\n              <ion-button\n                color=\"primary\"\n                type=\"submit\"\n                shape=\"round\"\n                expand=\"block\"\n                >Iniciar sesión</ion-button\n              >\n            </form>\n            <p class=\"ion-text-center\" id=\"forgot-password\">\n              <a (click)=\"forgotPassword()\">He olvidado mi contraseña</a>\n            </p>\n            <div class=\"ion-text-center register\">\n              <p>No tengo una cuenta,</p>\n              <ion-button\n                color=\"primary\"\n                (click)=\"activeView = 'register'\"\n                shape=\"round\"\n                >Quiero registrarme</ion-button\n              >\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"activeView == 'register'\">\n          <ion-header class=\"ion-no-border\">\n            <ion-toolbar>\n              <ion-buttons slot=\"start\">\n                <ion-button (click)=\"activeView = 'login'\">\n                  <ion-icon name=\"arrow-back\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n              <ion-title>Registro</ion-title>\n            </ion-toolbar>\n          </ion-header>\n          <app-register></app-register>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!--<ion-footer class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item button lines=\"none\">\n          <img src=\"./assets/img/layout/google.png\" />\n        </ion-item>\n      </ion-col>\n      <ion-col button lines=\"none\" (click)=\"loginFacebook()\">\n        <img src=\"./assets/img/layout/facebook.png\" />\n      </ion-col>\n      <ion-col>\n        <a href=\"#\"> <img src=\"./assets/img/layout/twitch.png\" /> </a>\n      </ion-col>\n      <ion-col>\n        <a href=\"#\"> <img src=\"./assets/img/layout/steam.png\" /> </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>-->\n";

/***/ }),

/***/ 65985:
/*!*******************************************************************!*\
  !*** ./src/app/login/register/register.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-padding\">\n  <form (submit)=\"submitRegister()\" [formGroup]=\"registerForm\">\n    <h2>¿Cómo? ¿Aún no tienes una cuenta?</h2>\n    <p>\n      Pasa, ¡ya te queda muy muy poco para comenzar a conocer frikis en tu zona!\n    </p>\n\n    <ion-item>\n      <ion-label position=\"floating\">Nombre de usuario</ion-label>\n      <ion-input\n        required\n        type=\"text\"\n        autocapitalize=\"words\"\n        formControlName=\"username\"\n        debounce=\"500\"\n        name=\"username\"\n      >\n      </ion-input>\n    </ion-item>\n    <div class=\"error-message\" *ngIf=\"usernameSuggestion\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Ups! Nombre de\n      usuario no disponible. Sugerencia {{ usernameSuggestion }}\n    </div>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        registerForm.get('username').invalid &&\n        registerForm.get('username').value &&\n        !usernameSuggestion\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Mínimo de 3\n      caracteres y máximo de 15.\n    </div>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        registerForm.get('username').invalid &&\n        registerForm.get('username').value &&\n        !usernameSuggestion\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Letras, números,\n      guiones (-_) y puntos(.).\n    </div>\n    <ion-item>\n      <ion-label position=\"floating\">Correo electrónico</ion-label>\n      <ion-input\n        required\n        type=\"email\"\n        autocomplete=\"email\"\n        formControlName=\"email\"\n        debounce=\"500\"\n        name=\"email\"\n      >\n      </ion-input>\n    </ion-item>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        registerForm.get('email').invalid && registerForm.get('email').value\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Introduce una\n      dirección de correo electrónico válida.\n    </div>\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input\n        required\n        [type]=\"clearPassword ? 'text' : 'password'\"\n        formControlName=\"password\"\n        debounce=\"500\"\n        name=\"password\"\n      ></ion-input>\n      <ion-buttons slot=\"end\" *ngIf=\"!registerForm.get('password').pristine\">\n        <ion-button (click)=\"clearPassword = !clearPassword\">\n          <ion-icon\n            slot=\"icon-only\"\n            [name]=\"clearPassword ? 'eye' : 'eye-off'\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        registerForm.get('password').invalid &&\n        registerForm.get('password').value\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Introduce un mínimo\n      de 8 caracteres.\n    </div>\n    <ion-item>\n      <ion-label>Fecha de nacimiento</ion-label>\n      <ion-datetime\n        min=\"1900-01\"\n        max=\"{{ (today | date: 'y') - 14 }}-{{ today | date: 'MM' }}-{{\n          today | date: 'dd'\n        }}\"\n        cancel-text=\"Cancelar\"\n        done-text=\"Hecho\"\n        pickerFormat=\"YYYY DD MMM\"\n        displayFormat=\"DD MMM de YYYY\"\n        monthShortNames=\"ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic\"\n        formControlName=\"birthday\"\n        (ionChange)=\"changeAge($event)\"\n      ></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf=\"adult\">\n      <ion-label\n        >Mi identidad de género\n        {{ platform.is(\"ios\") ? \"(opcional)\" : \"\" }}</ion-label\n      >\n      <ion-select\n        interface=\"action-sheet\"\n        cancel-text=\"Cancelar\"\n        placeholder=\"Selecciona uno\"\n        formControlName=\"gender\"\n      >\n        <ion-select-option\n          *ngFor=\"let gender of userSvc.getGenders()\"\n          [value]=\"gender\"\n          >{{ gender }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        registerForm.get('password').invalid &&\n        registerForm.get('password').value\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Debes seleccionar\n      una opción\n    </div>\n    <ion-item *ngIf=\"adult\">\n      <ion-label>Estoy buscando (opcional)</ion-label>\n      <ion-select\n        cancel-text=\"Cancelar\"\n        placeholder=\"Selecciona\"\n        formControlName=\"lovegender\"\n        multiple\n      >\n        <ion-select-option\n          *ngFor=\"let likegender of userSvc.getGenders()\"\n          [value]=\"likegender\"\n          >{{ likegender }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>¿Cómo nos has conocido?</ion-label>\n      <ion-select\n        interface=\"action-sheet\"\n        cancel-text=\"Cancelar\"\n        placeholder=\"Selecciona uno\"\n        formControlName=\"meet\"\n      >\n        <ion-select-option value=\"friend\"\n          >A través de un amigo</ion-select-option\n        >\n        <ion-select-option value=\"youtube\">Por un youtuber</ion-select-option>\n        <ion-select-option value=\"blog\"\n          >En un blog o web de noticias</ion-select-option\n        >\n        <ion-select-option value=\"social\">En una red social</ion-select-option>\n        <ion-select-option value=\"store\"\n          >En un buscador o tienda de aplicaciones</ion-select-option\n        >\n        <ion-select-option value=\"event\"\n          >En un evento/convención</ion-select-option\n        >\n        <ion-select-option value=\"contest\"\n          >Participando en un sorteo o concurso</ion-select-option\n        >\n        <ion-select-option [value]=\"false\"\n          >Otro, no se o no quiero decirlo</ion-select-option\n        >\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf=\"registerForm.get('meet').value\">\n      <ion-label position=\"floating\">\n        {{\n          registerForm.get(\"meet\").value === \"friend\"\n            ? \"Nombre de\n              usuario tu amigo\"\n            : \"\"\n        }}\n        {{\n          registerForm.get(\"meet\").value === \"youtube\"\n            ? \"¿Cuál es el nombre del youtuber?\"\n            : \"\"\n        }}\n        {{\n          registerForm.get(\"meet\").value === \"blog\"\n            ? \"¿Cómo se llama el\n              blog o la web?\"\n            : \"\"\n        }}\n        {{\n          registerForm.get(\"meet\").value === \"social\"\n            ? \"¿En cuál red social, página o perfil?\"\n            : \"\"\n        }}\n        {{\n          registerForm.get(\"meet\").value === \"event\"\n            ? \"Nombre del evento o\n              convención\"\n            : \"\"\n        }}\n        {{\n          registerForm.get(\"meet\").value === \"contest\"\n            ? \"Nombre del organizador\"\n            : \"\"\n        }}\n        {{\n          registerForm.get(\"meet\").value === \"store\"\n            ? \"Nombre del buscador o tienda\"\n            : \"\"\n        }}\n      </ion-label>\n      <ion-input\n        type=\"text\"\n        autocapitalize=\"words\"\n        formControlName=\"referral\"\n        debounce=\"500\"\n        name=\"referral\"\n      >\n      </ion-input>\n    </ion-item>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        registerForm.get('password').invalid &&\n        registerForm.get('password').value\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Debes seleccionar\n      una opción\n    </div>\n    <ion-item lines=\"none\">\n      <ion-label\n        ><p>\n          Acepto el\n          <a (click)=\"urlSvc.openUrl('https://frikiradar.com/tos')\"\n            >Aviso legal</a\n          >\n          y la\n          <a\n            (click)=\"\n              urlSvc.openUrl('https://frikiradar.com/politica-de-privacidad/')\n            \"\n            >Política de privacidad</a\n          >\n          de FrikiRadar.\n        </p></ion-label\n      >\n      <ion-checkbox slot=\"start\" formControlName=\"acceptos\"></ion-checkbox>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label><p>La fecha de nacimiento indicada es correcta.</p></ion-label>\n      <ion-checkbox slot=\"start\" formControlName=\"age\"></ion-checkbox>\n    </ion-item>\n    <ion-button color=\"primary\" type=\"submit\" expand=\"block\" shape=\"round\"\n      >Registrarme</ion-button\n    >\n  </form>\n</div>\n";

/***/ }),

/***/ 27524:
/*!**************************************************************!*\
  !*** ./src/app/login/two-step/two-step.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Verificación en dos pasos</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <h4>\n    ¡Te hemos enviado un código de seguridad al email! Revisa tu carpeta de\n    spam/no deseado si no lo encuentras.\n  </h4>\n  <p>\n    Introduce el código de seguridad para verificar tu inicio de sesión.\n  </p>\n  <form (submit)=\"submitCode()\" [formGroup]=\"codeForm\" autocomplete=\"off\">\n    <ion-item id=\"code\">\n      <ion-input\n        autocapitalize=\"characters\"\n        autocomplete=\"off\"\n        formControlName=\"code\"\n        maxlength=\"6\"\n        name=\"code\"\n        placeholder=\"Código de seguridad\"\n        required\n        type=\"text\"\n      ></ion-input>\n    </ion-item>\n    <ion-button\n      [disabled]=\"codeForm.invalid\"\n      color=\"primary\"\n      expand=\"block\"\n      type=\"submit\"\n      >Verificar\n    </ion-button>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map