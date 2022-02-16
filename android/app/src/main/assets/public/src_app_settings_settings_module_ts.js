"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 7777:
/*!***********************************************************!*\
  !*** ./src/app/settings/block-users/block-users.modal.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockUsersModal": () => (/* binding */ BlockUsersModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _block_users_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-users.modal.html?ngResource */ 38370);
/* harmony import */ var _block_users_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-users.modal.scss?ngResource */ 38145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 73071);






let BlockUsersModal = class BlockUsersModal {
    constructor(modal, userSvc, toast) {
        this.modal = modal;
        this.userSvc = userSvc;
        this.toast = toast;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.users = yield this.userSvc.getBlocks();
        });
    }
    unblock(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.users = yield this.userSvc.unblock(user.id);
            (yield this.toast.create({
                message: "Usuario desbloqueado correctamente",
                duration: 2000,
                position: "bottom"
            })).present();
        });
    }
    close() {
        this.modal.dismiss();
    }
};
BlockUsersModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
BlockUsersModal = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "block-users-modal",
        template: _block_users_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_block_users_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController])
], BlockUsersModal);



/***/ }),

/***/ 33484:
/*!*************************************************************!*\
  !*** ./src/app/settings/change-email/change-email.modal.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailModal": () => (/* binding */ ChangeEmailModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_email_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-email.modal.html?ngResource */ 90887);
/* harmony import */ var _change_email_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-email.modal.scss?ngResource */ 63159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ 73071);








let ChangeEmailModal = class ChangeEmailModal {
    constructor(fb, modal, userSvc, auth, alert, toast) {
        this.fb = fb;
        this.modal = modal;
        this.userSvc = userSvc;
        this.auth = auth;
        this.alert = alert;
        this.toast = toast;
        this.clearOldPassword = false;
        this.clearPassword = false;
        this.user = this.auth.currentUserValue;
        this.emailForm = fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
            ])
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.userSvc.changeEmail(this.user.email, this.emailForm.get("email").value);
                this.auth.setAuthUser(user);
                (yield this.toast.create({
                    message: "¡Cuenta de correo cambiada correctamente!",
                    duration: 2000,
                    position: "bottom"
                })).present();
                this.modal.dismiss();
            }
            catch (e) {
                const alert = yield this.alert.create({
                    header: "Ha habido un error",
                    message: "¿Es posible que este correo ya esté en uso? Vuelve a intentarlo transcurridos unos minutos.",
                    buttons: ["¡De acuerdo!"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    close() {
        this.modal.dismiss();
    }
};
ChangeEmailModal.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ChangeEmailModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "change-email-modal",
        template: _change_email_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_email_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController])
], ChangeEmailModal);



/***/ }),

/***/ 10646:
/*!*******************************************************************!*\
  !*** ./src/app/settings/change-password/change-password.modal.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModal": () => (/* binding */ ChangePasswordModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_password_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.modal.html?ngResource */ 15520);
/* harmony import */ var _change_password_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.modal.scss?ngResource */ 8286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ 73071);








let ChangePasswordModal = class ChangePasswordModal {
    constructor(fb, modal, userSvc, auth, alert, toast) {
        this.fb = fb;
        this.modal = modal;
        this.userSvc = userSvc;
        this.auth = auth;
        this.alert = alert;
        this.toast = toast;
        this.clearOldPassword = false;
        this.clearPassword = false;
        this.passForm = fb.group({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)
            ])
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.userSvc.changePassword(this.passForm.get("oldPassword").value, this.passForm.get("password").value);
                this.auth.setAuthUser(user);
                (yield this.toast.create({
                    message: "¡Contraseña cambiada correctamente!",
                    duration: 2000,
                    position: "bottom"
                })).present();
                this.modal.dismiss();
            }
            catch (e) {
                const alert = yield this.alert.create({
                    header: "La contraseña actual introducida no es válida",
                    message: "Revísala y vuelve a intentarlo.",
                    buttons: ["¡Vale!"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    close() {
        this.modal.dismiss();
    }
};
ChangePasswordModal.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ChangePasswordModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "change-password-modal",
        template: _change_password_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController])
], ChangePasswordModal);



/***/ }),

/***/ 76839:
/*!*******************************************************************!*\
  !*** ./src/app/settings/change-username/change-username.modal.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeUsernameModal": () => (/* binding */ ChangeUsernameModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_username_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-username.modal.html?ngResource */ 26123);
/* harmony import */ var _change_username_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-username.modal.scss?ngResource */ 51674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ 73071);








let ChangeUsernameModal = class ChangeUsernameModal {
    constructor(fb, modal, userSvc, auth, alert, toast) {
        this.fb = fb;
        this.modal = modal;
        this.userSvc = userSvc;
        this.auth = auth;
        this.alert = alert;
        this.toast = toast;
        this.clearOldPassword = false;
        this.clearPassword = false;
        this.user = this.auth.currentUserValue;
        this.usernameForm = fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+")
            ])
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.userSvc.changeUsername(this.usernameForm.get("username").value);
                this.auth.setAuthUser(user);
                (yield this.toast.create({
                    message: "¡Nombre de usuario cambiado correctamente! Vuelve a iniciar sesión.",
                    duration: 2000,
                    position: "bottom"
                })).present();
                this.modal.dismiss();
                this.auth.logout();
            }
            catch (e) {
                const alert = yield this.alert.create({
                    header: "Ha habido un error",
                    message: "Ya hay alguien utilizando este nombre de usuario.",
                    buttons: ["¡Ok, probaré otro!"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    close() {
        this.modal.dismiss();
    }
};
ChangeUsernameModal.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ChangeUsernameModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "change-username-modal",
        template: _change_username_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_username_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController])
], ChangeUsernameModal);



/***/ }),

/***/ 38774:
/*!***************************************************!*\
  !*** ./src/app/settings/devices/devices.modal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesSettingsModal": () => (/* binding */ DevicesSettingsModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _devices_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices.modal.html?ngResource */ 6228);
/* harmony import */ var _devices_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices.modal.scss?ngResource */ 60956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/device.service */ 34811);








let DevicesSettingsModal = class DevicesSettingsModal {
    constructor(modal, alert, devicesSvc, auth, toast, userSvc) {
        this.modal = modal;
        this.alert = alert;
        this.devicesSvc = devicesSvc;
        this.auth = auth;
        this.toast = toast;
        this.userSvc = userSvc;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = this.auth.currentUserValue;
            this.devices = yield this.devicesSvc.getDevices(true);
            const currentDevice = yield this.devicesSvc.getCurrentDevice();
            if (currentDevice) {
                this.devices.map(device => {
                    device.current =
                        device.device_id === currentDevice.device_id ||
                            device.token === currentDevice.token;
                });
            }
        });
    }
    removeDevice(device) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!device.current) {
                this.devices = this.devices.filter(d => d.id !== device.id);
                const user = yield this.devicesSvc.removeDevice(device);
                this.auth.setAuthUser(user);
                (yield this.toast.create({
                    message: "¡Dispositivo eliminado!",
                    duration: 2000,
                    position: "bottom"
                })).present();
            }
            else {
                (yield this.alert.create({
                    message: "¡No puedes eliminar tu dispositivo actual!",
                    buttons: ["Entendido"],
                    cssClass: "round-alert"
                })).present();
            }
        });
    }
    switchNotifications(device) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.devices.map(d => {
                if (device.id === d.id) {
                    d.active = !device.active;
                }
            });
            const user = yield this.devicesSvc.switchDevice(device);
            this.auth.setAuthUser(user);
            if (!device.active) {
                (yield this.toast.create({
                    message: "¡Notificaciones silenciadas!",
                    duration: 2000,
                    position: "bottom"
                })).present();
            }
            else {
                (yield this.toast.create({
                    message: "¡Notificaciones activadas!",
                    duration: 2000,
                    position: "bottom"
                })).present();
            }
        });
    }
    switchMailing() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user.mailing = !this.user.mailing;
            this.user = yield this.userSvc.updateUser(this.user);
        });
    }
    close() {
        this.modal.dismiss();
    }
};
DevicesSettingsModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _services_device_service__WEBPACK_IMPORTED_MODULE_4__.DeviceService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
DevicesSettingsModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "devices-modal",
        template: _devices_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_devices_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController,
        _services_device_service__WEBPACK_IMPORTED_MODULE_4__.DeviceService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController,
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService])
], DevicesSettingsModal);



/***/ }),

/***/ 53487:
/*!*******************************************************************!*\
  !*** ./src/app/settings/disable-account/disable-account.modal.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisableAccountModal": () => (/* binding */ DisableAccountModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _disable_account_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disable-account.modal.html?ngResource */ 96807);
/* harmony import */ var _disable_account_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disable-account.modal.scss?ngResource */ 4127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/user.service */ 73071);








let DisableAccountModal = class DisableAccountModal {
    constructor(fb, modal, userSvc, auth, alert, toast) {
        this.fb = fb;
        this.modal = modal;
        this.userSvc = userSvc;
        this.auth = auth;
        this.alert = alert;
        this.toast = toast;
        this.clearPassword = false;
        this.type = "disable";
        this.showBackdrop = false;
        this.disableForm = fb.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)
            ]),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl()
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.type === "disable") {
                    this.showBackdrop = true;
                    (yield this.toast.create({
                        message: "Desactivando cuenta...",
                        duration: 5000,
                        position: "bottom"
                    })).present();
                    const user = yield this.userSvc.disableUser(this.disableForm.get("password").value, this.disableForm.get("note").value);
                    this.auth.setAuthUser(user);
                    this.showBackdrop = false;
                    (yield this.toast.create({
                        message: "¡Cuenta desactivada correctamente!",
                        duration: 5000,
                        position: "bottom"
                    })).present();
                }
                else if (this.type === "remove") {
                    this.showBackdrop = true;
                    (yield this.toast.create({
                        message: "Eliminando cuenta...",
                        duration: 5000,
                        position: "bottom"
                    })).present();
                    const user = yield this.userSvc.removeAccount(this.disableForm.get("password").value, this.disableForm.get("note").value);
                    this.showBackdrop = false;
                    this.auth.setAuthUser(user);
                    (yield this.toast.create({
                        message: "¡Cuenta eliminada correctamente!",
                        duration: 5000,
                        position: "bottom"
                    })).present();
                }
                this.modal.dismiss();
                this.auth.logout();
            }
            catch (e) {
                this.showBackdrop = false;
                const alert = yield this.alert.create({
                    header: "La contraseña introducida no es válida",
                    message: "Revísala y vuelve a intentarlo.",
                    buttons: ["¡Vale!"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    changeType(type) {
        this.type = type;
    }
    close() {
        this.modal.dismiss();
    }
};
DisableAccountModal.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
DisableAccountModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "disable-account-modal",
        template: _disable_account_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_disable_account_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController])
], DisableAccountModal);



/***/ }),

/***/ 90936:
/*!*********************************************************!*\
  !*** ./src/app/settings/hide-users/hide-users.modal.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideUsersModal": () => (/* binding */ HideUsersModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _hide_users_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hide-users.modal.html?ngResource */ 69809);
/* harmony import */ var _hide_users_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hide-users.modal.scss?ngResource */ 33464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 73071);






let HideUsersModal = class HideUsersModal {
    constructor(modal, userSvc, toast) {
        this.modal = modal;
        this.userSvc = userSvc;
        this.toast = toast;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.users = yield this.userSvc.getHides();
        });
    }
    unhide(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.users = yield this.userSvc.unhide(user.id);
            (yield this.toast.create({
                message: "Usuario desocultado correctamente",
                duration: 2000,
                position: "bottom"
            })).present();
        });
    }
    close() {
        this.modal.dismiss();
    }
};
HideUsersModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
HideUsersModal = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "hide-users-modal",
        template: _hide_users_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_hide_users_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController])
], HideUsersModal);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _block_users_block_users_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-users/block-users.modal */ 7777);
/* harmony import */ var _change_email_change_email_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-email/change-email.modal */ 33484);
/* harmony import */ var _change_password_change_password_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.modal */ 10646);
/* harmony import */ var _change_username_change_username_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-username/change-username.modal */ 76839);
/* harmony import */ var _devices_devices_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devices/devices.modal */ 38774);
/* harmony import */ var _disable_account_disable_account_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disable-account/disable-account.modal */ 53487);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.page */ 7162);
/* harmony import */ var _verification_verification_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verification/verification.modal */ 15709);
/* harmony import */ var _hide_users_hide_users_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hide-users/hide-users.modal */ 90936);
















const routes = [
    {
        path: "",
        component: _settings_page__WEBPACK_IMPORTED_MODULE_7__.SettingsPage
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [
            _settings_page__WEBPACK_IMPORTED_MODULE_7__.SettingsPage,
            _change_password_change_password_modal__WEBPACK_IMPORTED_MODULE_3__.ChangePasswordModal,
            _change_email_change_email_modal__WEBPACK_IMPORTED_MODULE_2__.ChangeEmailModal,
            _change_username_change_username_modal__WEBPACK_IMPORTED_MODULE_4__.ChangeUsernameModal,
            _disable_account_disable_account_modal__WEBPACK_IMPORTED_MODULE_6__.DisableAccountModal,
            _devices_devices_modal__WEBPACK_IMPORTED_MODULE_5__.DevicesSettingsModal,
            _block_users_block_users_modal__WEBPACK_IMPORTED_MODULE_1__.BlockUsersModal,
            _hide_users_hide_users_modal__WEBPACK_IMPORTED_MODULE_9__.HideUsersModal,
            _verification_verification_modal__WEBPACK_IMPORTED_MODULE_8__.VerificationModal
        ]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 75375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ 37556);
/* harmony import */ var _block_users_block_users_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-users/block-users.modal */ 7777);
/* harmony import */ var _change_email_change_email_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-email/change-email.modal */ 33484);
/* harmony import */ var _change_password_change_password_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password/change-password.modal */ 10646);
/* harmony import */ var _change_username_change_username_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-username/change-username.modal */ 76839);
/* harmony import */ var _devices_devices_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./devices/devices.modal */ 38774);
/* harmony import */ var _disable_account_disable_account_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disable-account/disable-account.modal */ 53487);
/* harmony import */ var _verification_verification_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verification/verification.modal */ 15709);
/* harmony import */ var _hide_users_hide_users_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hide-users/hide-users.modal */ 90936);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/utils.service */ 88270);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/config.service */ 70946);



















let SettingsPage = class SettingsPage {
    constructor(modal, auth, userSvc, alert, nav, router, utils, config) {
        this.modal = modal;
        this.auth = auth;
        this.userSvc = userSvc;
        this.alert = alert;
        this.nav = nav;
        this.router = router;
        this.utils = utils;
        this.config = config;
        this.themesOpts = {
            slidesPerView: 3.5,
            breakpoints: {
                1024: {
                    slidesPerView: 8.5
                }
            },
            grabCursor: true
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.user = this.auth.currentUserValue;
        });
    }
    passwordModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _change_password_change_password_modal__WEBPACK_IMPORTED_MODULE_6__.ChangePasswordModal
            });
            return yield modal.present();
        });
    }
    devicesSettingsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _devices_devices_modal__WEBPACK_IMPORTED_MODULE_8__.DevicesSettingsModal
            });
            return yield modal.present();
        });
    }
    blockUsersModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _block_users_block_users_modal__WEBPACK_IMPORTED_MODULE_4__.BlockUsersModal
            });
            return yield modal.present();
        });
    }
    hideUsersModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _hide_users_hide_users_modal__WEBPACK_IMPORTED_MODULE_11__.HideUsersModal
            });
            return yield modal.present();
        });
    }
    clearLocalStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.removeItem("config");
            yield caches.keys().then(keyList => {
                keyList.forEach(cache => {
                    caches.delete(cache);
                });
            });
            const alert = yield this.alert.create({
                header: "Eliminado correctamente",
                message: "Datos de configuración local y cache eliminados.",
                buttons: [
                    {
                        text: "¡Ok!",
                        handler: () => {
                            window.location.reload();
                        }
                    }
                ],
                cssClass: "round-alert"
            });
            alert.present();
        });
    }
    usernameModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _change_username_change_username_modal__WEBPACK_IMPORTED_MODULE_7__.ChangeUsernameModal
            });
            return yield modal.present();
        });
    }
    emailModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _change_email_change_email_modal__WEBPACK_IMPORTED_MODULE_5__.ChangeEmailModal
            });
            return yield modal.present();
        });
    }
    disableAccountModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _disable_account_disable_account_modal__WEBPACK_IMPORTED_MODULE_9__.DisableAccountModal,
                cssClass: "full-modal"
            });
            return yield modal.present();
        });
    }
    verificationModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _verification_verification_modal__WEBPACK_IMPORTED_MODULE_10__.VerificationModal
            });
            return yield modal.present();
        });
    }
    onChangeCheck(property, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.user[property] = !value;
            try {
                this.user = yield this.userSvc.updateUser(this.user);
            }
            catch (e) {
                const alert = yield this.alert.create({
                    header: "Error al guardar los cambios",
                    message: "Vuelve a intentarlo transcurridos unos minutos.",
                    buttons: ["¡Ok!"],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    patreon() {
        this.router.navigate(["/patreon"]);
    }
    toggleTheme(theme) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth.isPatreon() || theme === "dark" || theme === "light") {
                const oldTheme = (yield this.config.get("theme"));
                this.utils.toggleTheme(theme, oldTheme);
                yield this.config.set("theme", theme);
            }
            else {
                const alert = yield this.alert.create({
                    header: "Tema exlusivo para miembros de Patreon",
                    message: "Conviértete en embajador Patreon de FrikiRadar y accede a ventajas exclusivas.",
                    buttons: [
                        {
                            text: "¡Quiero informarme!",
                            handler: () => {
                                this.patreon();
                            }
                        }
                    ],
                    cssClass: "round-alert"
                });
                alert.present();
            }
        });
    }
    back() {
        this.nav.back();
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_12__.NavService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_13__.UtilsService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_14__.ConfigService }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: "app-settings",
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_12__.NavService,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_13__.UtilsService,
        _services_config_service__WEBPACK_IMPORTED_MODULE_14__.ConfigService])
], SettingsPage);



/***/ }),

/***/ 15709:
/*!*************************************************************!*\
  !*** ./src/app/settings/verification/verification.modal.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationModal": () => (/* binding */ VerificationModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _verification_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.modal.html?ngResource */ 48261);
/* harmony import */ var _verification_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.modal.scss?ngResource */ 73581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);






let VerificationModal = class VerificationModal {
    constructor(modal, auth) {
        this.modal = modal;
        this.auth = auth;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.user = this.auth.currentUserValue;
        });
    }
    close() {
        this.modal.dismiss();
    }
};
VerificationModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
VerificationModal = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "verification-modal",
        template: _verification_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verification_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService])
], VerificationModal);



/***/ }),

/***/ 38145:
/*!************************************************************************!*\
  !*** ./src/app/settings/block-users/block-users.modal.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay11c2Vycy5tb2RhbC5zY3NzIn0= */";

/***/ }),

/***/ 63159:
/*!**************************************************************************!*\
  !*** ./src/app/settings/change-email/change-email.modal.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtZW1haWwubW9kYWwuc2NzcyJ9 */";

/***/ }),

/***/ 8286:
/*!********************************************************************************!*\
  !*** ./src/app/settings/change-password/change-password.modal.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQubW9kYWwuc2NzcyJ9 */";

/***/ }),

/***/ 51674:
/*!********************************************************************************!*\
  !*** ./src/app/settings/change-username/change-username.modal.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtdXNlcm5hbWUubW9kYWwuc2NzcyJ9 */";

/***/ }),

/***/ 60956:
/*!****************************************************************!*\
  !*** ./src/app/settings/devices/devices.modal.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2VzLm1vZGFsLnNjc3MifQ== */";

/***/ }),

/***/ 4127:
/*!********************************************************************************!*\
  !*** ./src/app/settings/disable-account/disable-account.modal.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNhYmxlLWFjY291bnQubW9kYWwuc2NzcyJ9 */";

/***/ }),

/***/ 33464:
/*!**********************************************************************!*\
  !*** ./src/app/settings/hide-users/hide-users.modal.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaWRlLXVzZXJzLm1vZGFsLnNjc3MifQ== */";

/***/ }),

/***/ 2282:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-item-divider h2,\nion-item-divider ion-icon {\n  color: white;\n}\n\nion-item ion-label p {\n  white-space: normal;\n}\n\n#themes ion-slide ion-icon {\n  color: var(--ion-color-light);\n  position: absolute;\n  z-index: 2;\n  background: var(--ion-color-patreon);\n  padding: 2px;\n  border-radius: 20px;\n  border: 2px solid var(--ion-color-dark);\n  left: 0;\n}\n\n#themes ion-slide ion-label {\n  font-size: 12px;\n}\n\n#themes ion-slide ion-thumbnail {\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxZQUFBO0FBQUo7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQU1JO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsT0FBQTtBQUhOOztBQU1JO0VBQ0UsZUFBQTtBQUpOOztBQU9JO0VBQ0Usb0JBQUE7QUFMTiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1kaXZpZGVyIHtcbiAgaDIsXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4jdGhlbWVzIHtcbiAgaW9uLXNsaWRlIHtcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcGF0cmVvbik7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 73581:
/*!**************************************************************************!*\
  !*** ./src/app/settings/verification/verification.modal.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZmljYXRpb24ubW9kYWwuc2NzcyJ9 */";

/***/ }),

/***/ 38370:
/*!************************************************************************!*\
  !*** ./src/app/settings/block-users/block-users.modal.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Usuarios bloqueados</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"users?.length; else noUsers\">\n    <ion-list>\n      <ion-item lines=\"full\" *ngFor=\"let user of users\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"user.thumbnail\" default=\"/assets/img/users/default.jpg\" />\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ user.name }}</h2>\n        </ion-label>\n        <ion-buttons>\n          <ion-button (click)=\"unblock(user)\">\n            <ion-icon slot=\"icon-only\" color=\"primary\" name=\"trash\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ng-template #noUsers>\n    <div class=\"full-center ion-padding\">\n      <ion-icon name=\"body\"></ion-icon>\n      <h2>Sin resultados</h2>\n      <p>\n        No has bloqueado a ningún usuario.\n      </p>\n    </div>\n  </ng-template>\n</ion-content>\n";

/***/ }),

/***/ 90887:
/*!**************************************************************************!*\
  !*** ./src/app/settings/change-email/change-email.modal.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cambiar correo electrónico</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <h4>¿Quieres cambiar tu correo electrónico?</h4>\n  <p>Asegúrate de introducir una nueva dirección correo electrónico válida.</p>\n\n  <form (submit)=\"submitForm()\" [formGroup]=\"emailForm\" autocomplete=\"off\">\n    <ion-item>\n      <ion-label position=\"floating\">Correo electrónico</ion-label>\n      <ion-input\n        required\n        type=\"email\"\n        autocomplete=\"email\"\n        formControlName=\"email\"\n        debounce=\"500\"\n        name=\"email\"\n        [value]=\"user.email\"\n      >\n      </ion-input>\n    </ion-item>\n    <div\n      class=\"error-message\"\n      *ngIf=\"emailForm.get('email').invalid && emailForm.get('email').value\"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Introduce una\n      dirección de correo electrónico válida.\n    </div>\n    <ion-button\n      color=\"primary\"\n      expand=\"block\"\n      type=\"submit\"\n      [disabled]=\"emailForm.invalid || emailForm.pristine\"\n      shape=\"round\"\n      >Confirmar cambio</ion-button\n    >\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 15520:
/*!********************************************************************************!*\
  !*** ./src/app/settings/change-password/change-password.modal.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cambiar contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <h4>¿Quieres cambiar tu contraseña?</h4>\n  <p>\n    Primero introduce tu contraseña actual y a continuación la nueva que quieres\n    tener.\n  </p>\n\n  <form (submit)=\"submitForm()\" [formGroup]=\"passForm\" autocomplete=\"off\">\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña actual</ion-label>\n      <ion-input\n        required\n        [type]=\"clearOldPassword ? 'text' : 'password'\"\n        formControlName=\"oldPassword\"\n        debounce=\"500\"\n        name=\"password\"\n      ></ion-input>\n      <ion-buttons slot=\"end\" *ngIf=\"!passForm.get('oldPassword').pristine\">\n        <ion-button (click)=\"clearOldPassword = !clearOldPassword\">\n          <ion-icon\n            slot=\"icon-only\"\n            [name]=\"clearOldPassword ? 'eye' : 'eye-off'\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        passForm.get('oldPassword').invalid && passForm.get('oldPassword').value\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Introduce un mínimo\n      de 8 caracteres.\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Nueva contraseña</ion-label>\n      <ion-input\n        required\n        [type]=\"clearPassword ? 'text' : 'password'\"\n        formControlName=\"password\"\n        debounce=\"500\"\n        name=\"password\"\n      ></ion-input>\n      <ion-buttons slot=\"end\" *ngIf=\"!passForm.get('password').pristine\">\n        <ion-button (click)=\"clearPassword = !clearPassword\">\n          <ion-icon\n            slot=\"icon-only\"\n            [name]=\"clearPassword ? 'eye' : 'eye-off'\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <div\n      class=\"error-message\"\n      *ngIf=\"passForm.get('password').invalid && passForm.get('password').value\"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Introduce un mínimo\n      de 8 caracteres.\n    </div>\n    <ion-button\n      color=\"primary\"\n      type=\"submit\"\n      expand=\"block\"\n      [disabled]=\"passForm.invalid\"\n      shape=\"round\"\n      >Cambiar contraseña</ion-button\n    >\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 26123:
/*!********************************************************************************!*\
  !*** ./src/app/settings/change-username/change-username.modal.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Cambiar nombre de usuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <h4>¿Quieres cambiar tu correo nombre de usuario?</h4>\n  <p>\n    Indica a continuación el nuevo nombre que deseas y te confirmaremos el\n    cambio si está disponible.\n  </p>\n\n  <form (submit)=\"submitForm()\" [formGroup]=\"usernameForm\" autocomplete=\"off\">\n    <ion-item>\n      <ion-label position=\"floating\">Nombre de usuario</ion-label>\n      <ion-input\n        required\n        type=\"text\"\n        autocapitalize=\"words\"\n        formControlName=\"username\"\n        debounce=\"500\"\n        [value]=\"user.username\"\n        name=\"username\"\n      >\n      </ion-input>\n    </ion-item>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        usernameForm.get('username').invalid &&\n        usernameForm.get('username').value\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Mínimo de 3\n      caracteres y máximo de 15.\n    </div>\n    <div\n      class=\"error-message\"\n      *ngIf=\"\n        usernameForm.get('username').invalid &&\n        usernameForm.get('username').value\n      \"\n    >\n      <ion-icon name=\"information-circle-outline\"></ion-icon>Letras, números,\n      guiones (-_) y puntos(.).\n    </div>\n    <ion-button\n      color=\"primary\"\n      expand=\"block\"\n      type=\"submit\"\n      [disabled]=\"usernameForm.invalid || usernameForm.pristine\"\n      shape=\"round\"\n      >Confirmar cambio</ion-button\n    >\n  </form>\n</ion-content>\n";

/***/ }),

/***/ 6228:
/*!****************************************************************!*\
  !*** ./src/app/settings/devices/devices.modal.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Dispositivos y notificaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item lines=\"full\">\n    <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n    <ion-checkbox\n      slot=\"end\"\n      [checked]=\"user.mailing\"\n      (ionChange)=\"switchMailing()\"\n    >\n    </ion-checkbox>\n    <ion-label>\n      <h2>Notificaciones promocionales</h2>\n      <p>\n        Me gustaría recibir información por correo electrónico sobre promociones\n        y descuentos exclusivos de FrikiRadar.\n      </p>\n    </ion-label>\n  </ion-item>\n  <p class=\"ion-padding\">\n    Estos son los dispositivos con los que has iniciado sesión alguna vez en\n    FrikiRadar. Puedes eliminarlos o pausar las notificaciones.\n  </p>\n  <ion-list>\n    <ion-item *ngFor=\"let device of devices\" lines=\"full\">\n      <ion-buttons>\n        <ion-button\n          (click)=\"switchNotifications(device)\"\n          [disabled]=\"!device.token\"\n        >\n          <ion-icon\n            [name]=\"\n              device.active && device.token\n                ? 'notifications'\n                : 'notifications-off'\n            \"\n            slot=\"icon-only\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-label>{{ device.device_name }}</ion-label>\n      <ion-buttons>\n        <ion-button (click)=\"removeDevice(device)\">\n          <ion-icon\n            [color]=\"device.current ? 'primary' : 'light'\"\n            [name]=\"device.current ? 'phone-portrait' : 'trash'\"\n            slot=\"icon-only\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 96807:
/*!********************************************************************************!*\
  !*** ./src/app/settings/disable-account/disable-account.modal.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Desactivar/eliminar cuenta</ion-title>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"changeType($event.detail.value)\" value=\"disable\">\n    <ion-segment-button layout=\"icon-start\" value=\"disable\">\n      <ion-label>Desactivar cuenta</ion-label>\n      <ion-icon name=\"close-circle-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button layout=\"icon-start\" value=\"remove\">\n      <ion-label>Eliminar cuenta</ion-label>\n      <ion-icon name=\"skull-outline\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"type === 'disable'\">\n    <h4>¿Quieres desactivar tu cuenta?</h4>\n    <p>Antes de desactivar la cuenta lee estos puntos:</p>\n    <ul>\n      <li>\n        Recuerda que la aplicación está en desarrollo y aún no hemos llegado a\n        todos los lugares. Gracias a tu ayuda podremos llegar a más personas.\n        ¡Háblale a todo el mundo de FrikiRadar!\n      </li>\n      <li>\n        Si un usuario es molesto puedes bloquearlo entrando en las opciones de\n        su perfil.\n      </li>\n      <li>\n        Puedes realizar ajustes en tu privacidad para evitar sentirte\n        espiado/acosado.\n      </li>\n      <li>\n        Si quieres cambiar tu nombre de usuario puedes hacerlo con la opción\n        correspondiente.\n      </li>\n    </ul>\n    <p>\n      Si aún así sigues queriendo desactivar tu cuenta, introduce de nuevo tu\n      contraseña como medida de seguridad adicional para desactivar la cuenta.\n    </p>\n\n    <form (submit)=\"submitForm()\" [formGroup]=\"disableForm\" autocomplete=\"off\">\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input\n          required\n          autocomplete=\"off\"\n          [type]=\"clearPassword ? 'text' : 'password'\"\n          formControlName=\"password\"\n          debounce=\"500\"\n          name=\"password\"\n        ></ion-input>\n        <ion-buttons slot=\"end\" *ngIf=\"!disableForm.get('password').pristine\">\n          <ion-button (click)=\"clearPassword = !clearPassword\">\n            <ion-icon\n              slot=\"icon-only\"\n              [name]=\"clearPassword ? 'eye' : 'eye-off'\"\n            ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n      <div\n        class=\"error-message\"\n        *ngIf=\"\n        disableForm.get('password').invalid && disableForm.get('password').value\n      \"\n      >\n        <ion-icon name=\"information-circle-outline\"></ion-icon>Introduce un\n        mínimo de 8 caracteres.\n      </div>\n      <ion-item>\n        <ion-label position=\"floating\">Motivo de la desactivación</ion-label>\n        <ion-textarea formControlName=\"note\" autocapitalize=\"on\"></ion-textarea>\n      </ion-item>\n      <ion-button\n        color=\"primary\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"disableForm.invalid\"\n        shape=\"round\"\n      >\n        Desactivar cuenta</ion-button\n      >\n    </form>\n  </div>\n  <div *ngIf=\"type === 'remove'\">\n    <h4>¿Quieres eliminar tu cuenta?</h4>\n    <p>Antes de eliminar la cuenta lee estos puntos:</p>\n    <ul>\n      <li>\n        Recuerda que la aplicación está en desarrollo y aún no hemos llegado a\n        todos los lugares. Gracias a tu ayuda podremos llegar a más personas.\n        ¡Háblale a todo el mundo de FrikiRadar!\n      </li>\n      <li>\n        Si un usuario es molesto puedes bloquearlo entrando en las opciones de\n        su perfil.\n      </li>\n      <li>\n        Puedes realizar ajustes en tu privacidad para evitar sentirte\n        espiado/acosado.\n      </li>\n      <li>\n        Si quieres cambiar tu nombre de usuario puedes hacerlo con la opción\n        correspondiente.\n      </li>\n      <li>\n        También tienes la opción de desactivar la cuenta si es posible que\n        vuelvas más adelante.\n      </li>\n      <li>\n        Una vez eliminada tu cuenta todo registro en nuestra base de datos y tus\n        archivos multimedia serán borrados completamente y no habrá opción de\n        recuperarlos.\n      </li>\n    </ul>\n    <p>\n      Si aún así sigues queriendo eliminar tu cuenta, introduce de nuevo tu\n      contraseña como medida de seguridad adicional para eliminar la cuenta.\n    </p>\n\n    <form (submit)=\"submitForm()\" [formGroup]=\"disableForm\" autocomplete=\"off\">\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input\n          required\n          autocomplete=\"off\"\n          [type]=\"clearPassword ? 'text' : 'password'\"\n          formControlName=\"password\"\n          debounce=\"500\"\n          name=\"password\"\n        ></ion-input>\n        <ion-buttons slot=\"end\" *ngIf=\"!disableForm.get('password').pristine\">\n          <ion-button (click)=\"clearPassword = !clearPassword\">\n            <ion-icon\n              slot=\"icon-only\"\n              [name]=\"clearPassword ? 'eye' : 'eye-off'\"\n            ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n      <div\n        class=\"error-message\"\n        *ngIf=\"\n          disableForm.get('password').invalid && disableForm.get('password').value\n        \"\n      >\n        <ion-icon name=\"information-circle-outline\"></ion-icon>Introduce un\n        mínimo de 8 caracteres.\n      </div>\n      <ion-item>\n        <ion-label position=\"floating\">Motivo de la eliminación</ion-label>\n        <ion-textarea formControlName=\"note\" autocapitalize=\"on\"></ion-textarea>\n      </ion-item>\n      <ion-button\n        color=\"primary\"\n        type=\"submit\"\n        expand=\"block\"\n        [disabled]=\"disableForm.invalid\"\n        shape=\"round\"\n      >\n        Eliminar cuenta</ion-button\n      >\n    </form>\n  </div>\n</ion-content>\n<ion-backdrop visible=\"true\" *ngIf=\"showBackdrop\"></ion-backdrop>\n";

/***/ }),

/***/ 69809:
/*!**********************************************************************!*\
  !*** ./src/app/settings/hide-users/hide-users.modal.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Usuarios ocultos</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"users?.length; else noUsers\">\n    <ion-list>\n      <ion-item lines=\"full\" *ngFor=\"let user of users\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"user.thumbnail\" default=\"/assets/img/users/default.jpg\" />\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ user.name }}</h2>\n        </ion-label>\n        <ion-buttons>\n          <ion-button (click)=\"unhide(user)\">\n            <ion-icon slot=\"icon-only\" color=\"primary\" name=\"trash\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ng-template #noUsers>\n    <div class=\"full-center ion-padding\">\n      <ion-icon name=\"body\"></ion-icon>\n      <h2>Sin resultados</h2>\n      <p>\n        No has ocultado a ningún usuario.\n      </p>\n    </div>\n  </ng-template>\n</ion-content>\n";

/***/ }),

/***/ 75375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Configuración</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider color=\"primary\">\n        <ion-icon name=\"lock-closed\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Seguridad</h2>\n        </ion-label>\n      </ion-item-divider>\n      <!--<ion-item (click)=\"router.navigate(['settings/account'])\" button lines=\"full\">\n                <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n                <ion-label>Mi cuenta</ion-label>\n            </ion-item>-->\n      <ion-item (click)=\"passwordModal()\" button lines=\"full\">\n        <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Cambiar contraseña</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item (click)=\"devicesSettingsModal()\" button lines=\"full\">\n        <ion-icon name=\"notifications-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Dispositivos y notificaciones</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-icon name=\"checkmark-done-circle-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Autenticación en dos pasos</h2>\n          <p>\n            Te enviaremos un email con un código de autenticación cada vez que\n            inicies una nueva sesión.\n          </p>\n        </ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"user.two_step\" (ngModelChange)=\"onChangeCheck('two_step', !$event)\">\n        </ion-checkbox>\n      </ion-item>\n      <ion-item button (click)=\"verificationModal()\" lines=\"full\" *ngIf=\"user.verified\">\n        <ion-icon name=\"ribbon-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Verificación de la cuenta</h2>\n          <p *ngIf=\"user?.verified\">\n            Comprueba el estado de verificación de tu cuenta.\n          </p>\n          <p *ngIf=\"!user?.verified\">\n            Verifica tu cuenta para mejorar la seguridad.\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color=\"primary\">\n        <ion-icon name=\"eye\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Privacidad</h2>\n        </ion-label>\n      </ion-item-divider>\n      <ion-item lines=\"full\">\n        <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Localización exacta</h2>\n          <p>Mostrar mi distancia en kilómetros.</p>\n        </ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"!user.hide_location\"\n          (ngModelChange)=\"onChangeCheck('hide_location', $event)\"></ion-checkbox>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-icon name=\"chatbubbles-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Mensajes directos</h2>\n          <p>\n            Poder recibir mensajes de cualquier usuario, aunque no haya indicado\n            que me gusta.\n          </p>\n        </ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"!user.block_messages\"\n          (ngModelChange)=\"onChangeCheck('block_messages', $event)\"></ion-checkbox>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-icon name=\"time-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Última conexión</h2>\n          <p>\n            Mostrar el momento de la última vez que entré a la aplicación o al\n            chat.\n          </p>\n        </ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"!user.hide_connection\"\n          (ngModelChange)=\"onChangeCheck('hide_connection', $event)\"></ion-checkbox>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-icon name=\"heart-dislike-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Ocultar kokoros</h2>\n          <p>\n            No quiero que puedan ver quien me ha dado o a quien le he entregado\n            kokoro.\n          </p>\n        </ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"user.hide_likes\" (ngModelChange)=\"onChangeCheck('hide_likes', !$event)\">\n        </ion-checkbox>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Perfil público</h2>\n          <p>\n            Mi perfil es visible públicamente desde internet compartiendo una\n            URL (solamente nombre, avatar, descripción y gustos).\n          </p>\n        </ion-label>\n        <ion-checkbox slot=\"end\" [(ngModel)]=\"user.public\" (ngModelChange)=\"onChangeCheck('public', !$event)\">\n        </ion-checkbox>\n      </ion-item>\n      <ion-item (click)=\"blockUsersModal()\" button lines=\"full\">\n        <ion-icon name=\"hand-left-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Usuarios bloqueados</ion-label>\n      </ion-item>\n      <ion-item (click)=\"hideUsersModal()\" button lines=\"full\">\n        <ion-icon name=\"eye-off-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Usuarios ocultos</ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color=\"primary\">\n        <ion-icon name=\"apps\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Aplicación</h2>\n        </ion-label>\n      </ion-item-divider>\n      <ion-item lines=\"full\" (click)=\"patreon()\" button>\n        <ion-icon src=\"/assets/icon/patreon_coral.svg\" slot=\"start\"></ion-icon>\n        <ion-label class=\"patreon\">\n          <h2>Vincular con Patreon</h2>\n          <p>\n            Vincula tu cuenta de FrikiRadar con Patreon para obtener acceso a\n            todas las funciones exclusivas.\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"full\" button id=\"themes\">\n        <ion-icon name=\"color-palette-outline\" slot=\"start\"></ion-icon>\n        <ion-label class=\"patreon\">\n          <h2>Seleccionar tema</h2>\n          <ion-slides [options]=\"themesOpts\" mode=\"md\">\n            <ion-slide>\n              <div>\n                <ion-item button lines=\"none\" (click)=\"toggleTheme('dark')\">\n                  <ion-thumbnail>\n                    <img src=\"/assets/img/layout/theme-dark.png\" alt=\"dark\" />\n                  </ion-thumbnail>\n                </ion-item>\n                <ion-label>Oscuro</ion-label>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div>\n                <ion-item button lines=\"none\" (click)=\"toggleTheme('light')\">\n                  <ion-thumbnail>\n                    <img src=\"/assets/img/layout/theme-light.png\" alt=\"light\" />\n                  </ion-thumbnail>\n                </ion-item>\n                <ion-label>Claro</ion-label>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div>\n                <ion-icon [name]=\"auth.isPatreon() ? 'lock-open' : 'lock-closed'\"></ion-icon>\n                <ion-item button lines=\"none\" (click)=\"toggleTheme('cyberpunk')\">\n                  <ion-thumbnail>\n                    <img src=\"/assets/img/layout/theme-cyberpunk.png\" alt=\"cyberpunk\" />\n                  </ion-thumbnail>\n                </ion-item>\n                <ion-label>Cyberpunk</ion-label>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div>\n                <ion-icon [name]=\"auth.isPatreon() ? 'lock-open' : 'lock-closed'\"></ion-icon>\n                <ion-item button lines=\"none\" (click)=\"toggleTheme('fire')\">\n                  <ion-thumbnail>\n                    <img src=\"/assets/img/layout/theme-fire.png\" alt=\"fire\" />\n                  </ion-thumbnail>\n                </ion-item>\n                <ion-label>Fuego</ion-label>\n              </div>\n            </ion-slide>\n            <ion-slide>\n              <div>\n                <ion-icon [name]=\"auth.isPatreon() ? 'lock-open' : 'lock-closed'\"></ion-icon>\n                <ion-item button lines=\"none\" (click)=\"toggleTheme('black')\">\n                  <ion-thumbnail>\n                    <img src=\"/assets/img/layout/theme-black.png\" alt=\"black\" />\n                  </ion-thumbnail>\n                </ion-item>\n                <ion-label>100% Negro</ion-label>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"full\" (click)=\"clearLocalStorage()\" button>\n        <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Restablecer valores predeterminados</h2>\n          <p>\n            Esto eliminará los datos de configuración almacenados en tu\n            dispositivo actual. Úsalo solamente si sabes lo que haces.\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color=\"primary\">\n        <ion-icon name=\"person-circle\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Cuenta</h2>\n        </ion-label>\n      </ion-item-divider>\n      <ion-item lines=\"full\" (click)=\"usernameModal()\" button>\n        <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Cambiar nombre de usuario</h2>\n          <p>{{ user.username }}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"full\" (click)=\"emailModal()\" button>\n        <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Cambiar correo electrónico</h2>\n          <p>{{ user.email }}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"full\" (click)=\"disableAccountModal()\" button>\n        <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Desactivar/eliminar la cuenta</h2>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>";

/***/ }),

/***/ 48261:
/*!**************************************************************************!*\
  !*** ./src/app/settings/verification/verification.modal.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Verificación de la cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item lines=\"full\" *ngIf=\"user.verified\">\n    <ion-icon name=\"checkmark-circle\" slot=\"start\" color=\"secondary\"></ion-icon>\n    <ion-label>\n      <h2>Estado:</h2>\n      <h1>\n        Cuenta {{ user?.verified ? \"verificada\" : \"no verificada\" }}\n      </h1>\n    </ion-label>\n  </ion-item>\n  <p class=\"ion-padding\">\n    Tu seguridad es muy importante, es por eso que te proponemos validar tu\n    cuenta para aumentar la confianza con los demás usuarios completando una de\n    las siguientes opciones:\n  </p>\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\"id-card\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>\n          <strong>IDENTIFICACIÓN OFICIAL.</strong> La manera más fiable de\n          verificar tu identidad. Envíanos una foto selfie, que coincida con tu\n          imagen de perfil, con identificación oficial en mano (NIE, DNI,\n          cédula, pasaporte, licencia de conducir...) claramente visible a\n          <a href=\"mailto:hola@frikiradar.com\">hola@frikiradar.com</a>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon src=\"/assets/icon/patreon_coral.svg\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p>\n          <strong>PATREON.</strong> Únete como embajador al Patreon de\n          FrikiRadar y envíanos un correo a\n          <a href=\"mailto:hola@frikiradar.com\">hola@frikiradar.com</a>\n          indicando tu nombre y correo electrónico de patreon para que podamos\n          verificarlo.\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map