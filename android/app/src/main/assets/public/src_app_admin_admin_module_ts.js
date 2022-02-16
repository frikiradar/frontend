"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_linky__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-linky */ 74802);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 60153);
/* harmony import */ var _banned_users_banned_messages_banned_messages_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banned-users/banned-messages/banned-messages.modal */ 41545);
/* harmony import */ var _banned_users_banned_users_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banned-users/banned-users.modal */ 45550);
/* harmony import */ var _rooms_create_room_create_room_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms/create-room/create-room.modal */ 86264);
/* harmony import */ var _global_notifications_global_notifications_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-notifications/global-notifications.modal */ 32136);
/* harmony import */ var _rooms_edit_rooms_edit_rooms_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rooms/edit-rooms/edit-rooms.modal */ 29471);














const routes = [
    {
        path: "",
        component: _admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage
    }
];
let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ngx_linky__WEBPACK_IMPORTED_MODULE_13__.LinkyModule
        ],
        declarations: [
            _admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage,
            _banned_users_banned_users_modal__WEBPACK_IMPORTED_MODULE_3__.BannedUsersModal,
            _global_notifications_global_notifications_modal__WEBPACK_IMPORTED_MODULE_5__.GlobalNotificationsModal,
            _rooms_create_room_create_room_modal__WEBPACK_IMPORTED_MODULE_4__.CreateRoomModal,
            _rooms_edit_rooms_edit_rooms_modal__WEBPACK_IMPORTED_MODULE_6__.EditRoomsModal,
            _banned_users_banned_messages_banned_messages_modal__WEBPACK_IMPORTED_MODULE_2__.BannedMessagesModal
        ]
    })
], AdminPageModule);



/***/ }),

/***/ 60153:
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page.html?ngResource */ 60376);
/* harmony import */ var _admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss?ngResource */ 61162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ 37556);
/* harmony import */ var _banned_users_banned_users_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banned-users/banned-users.modal */ 45550);
/* harmony import */ var _global_notifications_global_notifications_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-notifications/global-notifications.modal */ 32136);
/* harmony import */ var _rooms_edit_rooms_edit_rooms_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rooms/edit-rooms/edit-rooms.modal */ 29471);










let AdminPage = class AdminPage {
    constructor(modal, auth, nav) {
        this.modal = modal;
        this.auth = auth;
        this.nav = nav;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = this.auth.currentUserValue;
        });
    }
    bannedUsersModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _banned_users_banned_users_modal__WEBPACK_IMPORTED_MODULE_4__.BannedUsersModal
            });
            return yield modal.present();
        });
    }
    globalNotificationsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _global_notifications_global_notifications_modal__WEBPACK_IMPORTED_MODULE_5__.GlobalNotificationsModal
            });
            return yield modal.present();
        });
    }
    editRoomsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _rooms_edit_rooms_edit_rooms_modal__WEBPACK_IMPORTED_MODULE_6__.EditRoomsModal
            });
            return yield modal.present();
        });
    }
    back() {
        this.nav.back();
    }
};
AdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavService }
];
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-admin",
        template: _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavService])
], AdminPage);



/***/ }),

/***/ 41545:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/banned-users/banned-messages/banned-messages.modal.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannedMessagesModal": () => (/* binding */ BannedMessagesModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _banned_messages_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banned-messages.modal.html?ngResource */ 46462);
/* harmony import */ var _banned_messages_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banned-messages.modal.scss?ngResource */ 96996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ 87501);
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/url.service */ 90925);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 73071);









let BannedMessagesModal = class BannedMessagesModal {
    constructor(modal, admin, formBuilder, urlSvc, userSvc) {
        this.modal = modal;
        this.admin = admin;
        this.formBuilder = formBuilder;
        this.urlSvc = urlSvc;
        this.userSvc = userSvc;
        this.messages = [];
        this.countDownString = "";
        this.chatForm = formBuilder.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
        });
    }
    get message() {
        return this.chatForm.get("message");
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.userSvc.getUser(this.id);
            this.messages = (yield this.admin.getBannedMessages(this.id)).reverse();
            if (this.user.ban_end) {
                setInterval(() => {
                    this.countDown();
                }, 1000);
            }
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
                    yield this.admin.sendMessage(this.user.id, text).then();
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
    }
    openUrl(event) {
        this.urlSvc.openUrl(event);
        return false;
    }
    close() {
        this.modal.dismiss();
    }
};
BannedMessagesModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
BannedMessagesModal.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["textarea", { static: true },] }],
    chatlist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["chatlist", { static: true },] }]
};
BannedMessagesModal = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-banned-messages",
        template: _banned_messages_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_banned_messages_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController,
        src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder,
        src_app_services_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService,
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService])
], BannedMessagesModal);



/***/ }),

/***/ 45550:
/*!**********************************************************!*\
  !*** ./src/app/admin/banned-users/banned-users.modal.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannedUsersModal": () => (/* binding */ BannedUsersModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _banned_users_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banned-users.modal.html?ngResource */ 54405);
/* harmony import */ var _banned_users_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banned-users.modal.scss?ngResource */ 4480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ 87501);
/* harmony import */ var _banned_messages_banned_messages_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banned-messages/banned-messages.modal */ 41545);







let BannedUsersModal = class BannedUsersModal {
    constructor(modal, modalMessages, admin, toast) {
        this.modal = modal;
        this.modalMessages = modalMessages;
        this.admin = admin;
        this.toast = toast;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.users = yield this.admin.getBans();
        });
    }
    viewMessages(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalMessages.create({
                component: _banned_messages_banned_messages_modal__WEBPACK_IMPORTED_MODULE_3__.BannedMessagesModal,
                componentProps: { id }
            });
            return yield modal.present();
        });
    }
    unban(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.users = yield this.admin.unban(user.id);
            (yield this.toast.create({
                message: "Baneo eliminado correctamente",
                duration: 2000,
                position: "bottom"
            })).present();
        });
    }
    close() {
        this.modal.dismiss();
    }
};
BannedUsersModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
BannedUsersModal = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "banned-users-modal",
        template: _banned_users_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_banned_users_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController])
], BannedUsersModal);



/***/ }),

/***/ 32136:
/*!**************************************************************************!*\
  !*** ./src/app/admin/global-notifications/global-notifications.modal.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalNotificationsModal": () => (/* binding */ GlobalNotificationsModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _global_notifications_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-notifications.modal.html?ngResource */ 67686);
/* harmony import */ var _global_notifications_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-notifications.modal.scss?ngResource */ 63236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ 87501);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);








let GlobalNotificationsModal = class GlobalNotificationsModal {
    constructor(auth, formBuilder, admin, toast, modal) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.admin = admin;
        this.toast = toast;
        this.modal = modal;
        this.test = true;
        this.messageForm = formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            test: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl()
        });
    }
    get message() {
        return this.messageForm.get("message");
    }
    get title() {
        return this.messageForm.get("title");
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = this.auth.currentUserValue;
        });
    }
    sendMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const message = this.message.value.trim();
            let title = this.title.value ? this.title.value.trim() : "";
            if (!this.test) {
                this.message.setValue("");
                this.title.setValue("");
            }
            else {
                title = title + " (test)";
            }
            try {
                const topic = this.test ? "test" : "frikiradar";
                yield this.admin.sendTopicMessage(topic, message, title);
                (yield this.toast.create({
                    message: "Mensaje enviado correctamente.",
                    duration: 5000,
                    position: "middle"
                })).present();
            }
            catch (e) {
                (yield this.toast.create({
                    message: "Error al enviar el mensaje.",
                    duration: 5000,
                    position: "middle"
                })).present();
            }
        });
    }
    close() {
        this.modal.dismiss();
    }
};
GlobalNotificationsModal.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
GlobalNotificationsModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "global-notifications",
        template: _global_notifications_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_global_notifications_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController])
], GlobalNotificationsModal);



/***/ }),

/***/ 86264:
/*!**************************************************************!*\
  !*** ./src/app/admin/rooms/create-room/create-room.modal.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateRoomModal": () => (/* binding */ CreateRoomModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_room_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-room.modal.html?ngResource */ 10345);
/* harmony import */ var _create_room_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-room.modal.scss?ngResource */ 9025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ 87501);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils.service */ 88270);








let CreateRoomModal = class CreateRoomModal {
    constructor(formBuilder, admin, toast, modal, utils) {
        this.formBuilder = formBuilder;
        this.admin = admin;
        this.toast = toast;
        this.modal = modal;
        this.utils = utils;
        this.editing = false;
        this.src = "";
        this.slug = "";
        this.roomForm = formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
            permissions: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            visible: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl()
        });
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if ((_a = this.room) === null || _a === void 0 ? void 0 : _a.id) {
                this.editing = true;
                this.roomForm.get("name").setValue(this.room.name);
                this.roomForm.get("description").setValue(this.room.description);
                this.roomForm.get("permissions").setValue(this.room.permissions[0]);
                this.roomForm.get("visible").setValue(this.room.visible);
            }
        });
    }
    submitRoom() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.roomForm.valid) {
                if ((_a = this.room) === null || _a === void 0 ? void 0 : _a.id) {
                    try {
                        yield this.admin.editRoom(this.room.id, this.roomForm.get("name").value.trim(), this.roomForm.get("description").value.trim(), this.roomForm.get("permissions").value.trim(), this.roomForm.get("visible").value, this.imageFile);
                        (yield this.toast.create({
                            message: `Sala editada correctamente.`,
                            duration: 5000,
                            position: "middle"
                        })).present();
                        this.close();
                    }
                    catch (e) {
                        (yield this.toast.create({
                            message: `Error al editar la sala.`,
                            duration: 5000,
                            position: "middle"
                        })).present();
                        console.error(e);
                    }
                }
                else {
                    try {
                        yield this.admin.createRoom(this.roomForm.get("name").value.trim(), this.roomForm.get("description").value.trim(), this.roomForm.get("permissions").value.trim(), this.roomForm.get("visible").value, this.imageFile);
                        (yield this.toast.create({
                            message: `Sala creada correctamente.`,
                            duration: 5000,
                            position: "middle"
                        })).present();
                        this.close();
                    }
                    catch (e) {
                        (yield this.toast.create({
                            message: `Error al crear la sala.`,
                            duration: 5000,
                            position: "middle"
                        })).present();
                        console.error(e);
                    }
                }
            }
        });
    }
    cropImagebyEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const src = yield this.utils.cropImage(event);
                if (typeof src == "string") {
                    this.src = src;
                    this.imageFile = yield this.utils.urltoBlob(src);
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    removeImage(event) {
        if (event.detail.value === "") {
            this.src = "";
            this.imageFile = null;
        }
    }
    generateSlug(event) {
        const name = event.detail.value;
        this.slug = name.toLowerCase().replaceAll(" ", "-");
    }
    close() {
        this.modal.dismiss();
    }
};
CreateRoomModal.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
CreateRoomModal.propDecorators = {
    room: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
CreateRoomModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "create-room",
        template: _create_room_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_room_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder,
        src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService])
], CreateRoomModal);



/***/ }),

/***/ 29471:
/*!************************************************************!*\
  !*** ./src/app/admin/rooms/edit-rooms/edit-rooms.modal.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRoomsModal": () => (/* binding */ EditRoomsModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_rooms_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-rooms.modal.html?ngResource */ 38486);
/* harmony import */ var _edit_rooms_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-rooms.modal.scss?ngResource */ 3743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ 87501);
/* harmony import */ var _create_room_create_room_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-room/create-room.modal */ 86264);







let EditRoomsModal = class EditRoomsModal {
    constructor(admin, toast, modal, modalCreate, modalEdit) {
        this.admin = admin;
        this.toast = toast;
        this.modal = modal;
        this.modalCreate = modalCreate;
        this.modalEdit = modalEdit;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.rooms = yield this.admin.getRooms();
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCreate.create({
                component: _create_room_create_room_modal__WEBPACK_IMPORTED_MODULE_3__.CreateRoomModal
            });
            yield modal.present();
            yield modal.onDidDismiss();
            this.rooms = yield this.admin.getRooms();
        });
    }
    remove(room) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const rooms = this.rooms;
                this.rooms = this.rooms.filter(r => r.id !== room.id);
                const toast = yield this.toast.create({
                    message: "Eliminando sala " + room.name + "...",
                    duration: 3000,
                    position: "bottom",
                    buttons: [
                        {
                            text: "Deshacer",
                            handler: () => {
                                this.rooms = rooms;
                            }
                        }
                    ]
                });
                toast.present();
                const log = yield toast.onDidDismiss();
                if (log.role === "timeout") {
                    yield this.admin.removeRoom(room.id);
                    (yield this.toast.create({
                        message: `Sala eliminada correctamente.`,
                        duration: 5000,
                        position: "middle"
                    })).present();
                }
            }
            catch (e) {
                (yield this.toast.create({
                    message: `Error al eliminar la sala.`,
                    duration: 5000,
                    position: "middle"
                })).present();
            }
        });
    }
    edit(room) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalEdit.create({
                component: _create_room_create_room_modal__WEBPACK_IMPORTED_MODULE_3__.CreateRoomModal,
                componentProps: { room }
            });
            yield modal.present();
            yield modal.onDidDismiss();
            this.rooms = yield this.admin.getRooms();
        });
    }
    close() {
        this.modal.dismiss();
    }
};
EditRoomsModal.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
EditRoomsModal = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "edit-rooms",
        template: _edit_rooms_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_rooms_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController])
], EditRoomsModal);



/***/ }),

/***/ 61162:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label,\nion-item-divider ion-label {\n  --color: white !important;\n}\nion-item ion-icon,\nion-item-divider ion-icon {\n  color: white;\n}\nion-item ion-label p,\nion-item-divider ion-label p {\n  white-space: normal;\n  color: white;\n}\nion-item form {\n  width: 100%;\n}\nion-item ion-buttons {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTs7RUFDRSx5QkFBQTtBQUFKO0FBR0U7O0VBQ0UsWUFBQTtBQUFKO0FBSUk7O0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBRE47QUFPRTtFQUNFLFdBQUE7QUFKSjtBQU9FO0VBQ0UsU0FBQTtBQUxKIiwiZmlsZSI6ImFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLFxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIHAge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGlvbi1idXR0b25zIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 96996:
/*!******************************************************************************************!*\
  !*** ./src/app/admin/banned-users/banned-messages/banned-messages.modal.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "ion-label p,\nion-label h2 {\n  text-transform: none;\n  letter-spacing: normal;\n  margin: 0 0 0 10px;\n  text-align: left;\n}\nion-label p {\n  font-size: 12px;\n}\nion-label p ion-badge {\n  margin-right: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\n.bubble ion-card {\n  border-radius: 25px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n.bubble.from ion-card {\n  margin-left: 40px;\n  --color: white;\n  --background: none;\n  float: right;\n  clear: both;\n}\n.bubble.from ion-card-content {\n  background: #6d0b28;\n}\n.bubble.from + .to ion-card {\n  margin-top: 8px;\n}\n.bubble.to ion-card {\n  margin-right: 40px;\n  --color: white;\n  --background: none;\n  float: left;\n  clear: both;\n}\n.bubble.to ion-card-content {\n  background: #9a1c42;\n}\n.bubble.to + .from ion-card {\n  margin-top: 8px;\n}\n.bubble .text {\n  margin-right: 10px;\n  word-break: break-word;\n  white-space: pre-line;\n}\n.bubble ion-note {\n  font-size: 10px;\n  position: relative;\n  bottom: -8px;\n  color: #bbbbbb;\n}\n.bubble ion-note ion-icon {\n  font-size: 14px;\n  vertical-align: text-bottom;\n}\nion-chip {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  clear: both;\n}\nion-footer ion-item {\n  background: white;\n  border-radius: 30px;\n  margin-left: 8px;\n}\nion-footer ion-textarea {\n  --placeholder-color: #555555 !important;\n  color: #353535 !important;\n  padding: 5px 0 4px 15px;\n  margin: 0;\n  font-size: 12pt;\n}\nion-footer ion-label {\n  position: absolute;\n  z-index: 2;\n  right: 20px;\n  width: 30px !important;\n  min-width: 0px !important;\n  margin: 2px 0 !important;\n}\nion-footer ion-label ion-icon {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lZC1tZXNzYWdlcy5tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztFQUVFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFHSTtFQUNFLGVBQUE7QUFETjtBQUdNO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0FBRFI7QUFPSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSk47QUFRTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOUjtBQVNNO0VBQ0UsbUJBQUE7QUFQUjtBQVVNO0VBQ0UsZUFBQTtBQVJSO0FBYU07RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBWFI7QUFjTTtFQUNFLG1CQUFBO0FBWlI7QUFlTTtFQUNFLGVBQUE7QUFiUjtBQWlCSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQWZOO0FBa0JJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFoQk47QUFrQk07RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUFoQlI7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBbEJKO0FBc0JJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBbkJOO0FBc0JJO0VBQ0UsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFwQk47QUF1Qkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBckJOO0FBdUJNO0VBQ0UsZUFBQTtBQXJCUiIsImZpbGUiOiJiYW5uZWQtbWVzc2FnZXMubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gICAgcCxcbiAgICBoMiB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gIFxuICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmJ1YmJsZSB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB9XG4gIFxuICAgICYuZnJvbSB7XG4gICAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuICBcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNmQwYjI4O1xuICAgICAgfVxuICBcbiAgICAgICYgKyAudG8gaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAmLnRvIHtcbiAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICB9XG4gIFxuICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5YTFjNDI7XG4gICAgICB9XG4gIFxuICAgICAgJiArIC5mcm9tIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnRleHQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICB9XG4gIFxuICAgIGlvbi1ub3RlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogLThweDtcbiAgICAgIGNvbG9yOiAjYmJiYmJiO1xuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpb24tY2hpcCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgXG4gIGlvbi1mb290ZXIge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuICBcbiAgICBpb24tdGV4dGFyZWEge1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzU1NTU1NSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMzNTM1MzUgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDVweCAwIDRweCAxNXB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgIH1cbiAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICByaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtaW4td2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAycHggMCAhaW1wb3J0YW50O1xuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */";

/***/ }),

/***/ 4480:
/*!***********************************************************************!*\
  !*** ./src/app/admin/banned-users/banned-users.modal.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-label p {\n  white-space: normal;\n  white-space: initial;\n}\n\nion-badge {\n  position: absolute;\n  left: 45px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 20px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lZC11c2Vycy5tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFBQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0FBQ0oiLCJmaWxlIjoiYmFubmVkLXVzZXJzLm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwgcCB7XG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG59XG5cbmlvbi1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB9Il19 */";

/***/ }),

/***/ 63236:
/*!***************************************************************************************!*\
  !*** ./src/app/admin/global-notifications/global-notifications.modal.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label,\nion-item-divider ion-label {\n  --color: white !important;\n}\nion-item ion-icon,\nion-item-divider ion-icon {\n  color: white;\n}\nion-item ion-label p,\nion-item-divider ion-label p {\n  white-space: normal;\n  color: white;\n}\nion-item form {\n  width: 100%;\n}\nion-item ion-buttons {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1ub3RpZmljYXRpb25zLm1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7O0VBQ0UseUJBQUE7QUFBSjtBQUdFOztFQUNFLFlBQUE7QUFBSjtBQUlJOztFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUROO0FBT0U7RUFDRSxXQUFBO0FBSko7QUFPRTtFQUNFLFNBQUE7QUFMSiIsImZpbGUiOiJnbG9iYWwtbm90aWZpY2F0aW9ucy5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0sXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgaW9uLWxhYmVsIHtcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG5pb24taXRlbSB7XG4gIGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaW9uLWJ1dHRvbnMge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 9025:
/*!***************************************************************************!*\
  !*** ./src/app/admin/rooms/create-room/create-room.modal.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-thumbnail {\n  --border-radius: 5px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1yb29tLm1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiY3JlYXRlLXJvb20ubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */";

/***/ }),

/***/ 3743:
/*!*************************************************************************!*\
  !*** ./src/app/admin/rooms/edit-rooms/edit-rooms.modal.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXJvb21zLm1vZGFsLnNjc3MifQ== */";

/***/ }),

/***/ 60376:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-button (click)=\"back()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Administración</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider color=\"primary\">\n        <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n        <ion-label><h2>Usuarios</h2></ion-label>\n      </ion-item-divider>\n      <ion-item (click)=\"bannedUsersModal()\" button lines=\"full\">\n        <ion-icon name=\"skull-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Usuarios baneados</h2>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color=\"primary\">\n        <ion-icon name=\"chatbubbles\" slot=\"start\"></ion-icon>\n        <ion-label><h2>Salas grupales</h2></ion-label>\n      </ion-item-divider>\n      <ion-item (click)=\"editRoomsModal()\" button lines=\"full\">\n        <ion-icon name=\"create-outline\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Editar salas</h2>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color=\"primary\">\n        <ion-icon name=\"megaphone\" slot=\"start\"></ion-icon>\n        <ion-label><h2>Marketing</h2></ion-label>\n      </ion-item-divider>\n      <ion-item (click)=\"globalNotificationsModal()\" button lines=\"full\">\n        <ion-icon name=\"notifications-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Notificaciones globales</ion-label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 46462:
/*!******************************************************************************************!*\
  !*** ./src/app/admin/banned-users/banned-messages/banned-messages.modal.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-avatar>\n        <ion-img\n          *ngIf=\"user\"\n          [src]=\"user?.avatar\"\n          [alt]=\"user?.username\"\n        ></ion-img>\n        <ion-skeleton-text animated *ngIf=\"!user\"></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{user?.name}}</h2>\n      </ion-label>\n    </ion-buttons>\n    <ion-label class=\"ion-padding\" slot=\"end\">{{countDownString}}</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #chatlist>\n  <span\n    class=\"bubble {{ message.fromuser?.id == 1 ? 'to' : 'from' }}\"\n    *ngFor=\"let message of messages; let i = index\"\n  >\n    <ion-chip\n      color=\"primary\"\n      class=\"center\"\n      *ngIf=\"\n        (message?.time_creation | date: 'shortDate') !==\n        (messages[i - 1]?.time_creation | date: 'shortDate')\n      \"\n    >\n      <ion-label color=\"secondary\"\n        >{{ message.time_creation | date: \"fullDate\" }}</ion-label\n      >\n    </ion-chip>\n    <ion-card button>\n      <ion-card-content *ngIf=\"message.text\">\n        <span\n          class=\"text\"\n          [innerHTML]=\"message.text | linky:{className: 'linkified'}\"\n          (click)=\"$event.stopImmediatePropagation(); openUrl($event);\"\n        ></span>\n        <ion-note>\n          {{ message.time_creation | date: \"shortTime\" }}\n          <span *ngIf=\"message.fromuser?.id == user?.id\">\n            <ion-icon *ngIf=\"message.sending\" name=\"time\"></ion-icon>\n            <ion-icon\n              *ngIf=\"!message.sending && !message.time_read\"\n              name=\"checkmark\"\n            ></ion-icon>\n            <ion-icon\n              *ngIf=\"message.time_read\"\n              color=\"secondary\"\n              name=\"checkmark-done\"\n            ></ion-icon>\n          </span>\n        </ion-note>\n      </ion-card-content>\n    </ion-card>\n  </span>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <form [formGroup]=\"chatForm\" autocomplete=\"off\">\n      <ion-item lines=\"none\">\n        <ion-textarea\n          placeholder=\"書く！\"\n          autocapitalize=\"on\"\n          (keydown.enter)=\"sendMessage($event)\"\n          formControlName=\"message\"\n          #textarea\n          autofocus\n          autoGrow\n          rows=\"1\"\n        >\n        </ion-textarea>\n      </ion-item>\n    </form>\n    <ion-buttons ion-activatable slot=\"end\">\n      <ion-button\n        color=\"primary\"\n        [disabled]=\"!message.value\"\n        (click)=\"sendMessage()\"\n      >\n        <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 54405:
/*!***********************************************************************!*\
  !*** ./src/app/admin/banned-users/banned-users.modal.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Usuarios baneados</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"users?.length; else noUsers\">\n    <ion-list>\n      <ion-item lines=\"full\" *ngFor=\"let user of users\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"user.thumbnail\" default=\"/assets/img/users/default.jpg\" />\n          <ion-badge color=\"primary\" *ngIf=\"user?.count > 0\"\n            >{{ user?.count }}</ion-badge\n          >\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ user.name }}</h2>\n          <p>\n            <ion-text color=\"light\">{{user.ban_reason}} - </ion-text>\n            <ion-text color=\"secondary\">\n              {{user?.ban_end ? user.ban_end : 'Indefinido'}}\n            </ion-text>\n          </p>\n        </ion-label>\n        <ion-buttons>\n          <ion-button (click)=\"viewMessages(user?.id)\">\n            <ion-icon\n              slot=\"icon-only\"\n              color=\"primary\"\n              name=\"chatbubbles\"\n            ></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"unban(user)\">\n            <ion-icon slot=\"icon-only\" color=\"primary\" name=\"trash\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ng-template #noUsers>\n    <div class=\"full-center ion-padding\">\n      <ion-icon name=\"body\"></ion-icon>\n      <h2>Sin resultados</h2>\n      <p>\n        No hay ningún usuario baneado.\n      </p>\n    </div>\n  </ng-template>\n</ion-content>\n";

/***/ }),

/***/ 67686:
/*!***************************************************************************************!*\
  !*** ./src/app/admin/global-notifications/global-notifications.modal.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Notificaciones globales</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <p class=\"ion-padding\">\n    Envía notificaciones globales a todos los usuarios avisando de alguna\n    novedad o algo interesante.\n  </p>\n  <ion-list>\n    <form [formGroup]=\"messageForm\" autocomplete=\"off\" class=\"ion-padding\">\n      <div>\n        <ion-item>\n          <ion-input\n            formControlName=\"title\"\n            placeholder=\"Escribe aquí el título\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-textarea\n            placeholder=\"Escribe aquí el mensaje\"\n            rows=\"3\"\n            formControlName=\"message\"\n          ></ion-textarea>\n          <ion-buttons slot=\"end\">\n            <ion-button\n              color=\"primary\"\n              (click)=\"sendMessage()\"\n              [disabled]=\"messageForm.invalid\"\n            >\n              <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-item>\n      </div>\n\n      <ion-item>\n        <ion-label>Activa la casilla para enviar a todos</ion-label>\n        <ion-checkbox checked=\"false\" (ionChange)=\"test = !test\"></ion-checkbox>\n      </ion-item>\n      <p>\n        {{test ? 'Se enviará solo a admins y mods (para test).' : 'Se enviará a\n        TODOS los usuarios (envío real).'}}\n      </p>\n    </form>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 10345:
/*!***************************************************************************!*\
  !*** ./src/app/admin/rooms/create-room/create-room.modal.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title\n      >{{editing ? 'Editando sala '+room.name : 'Crea una nueva\n      sala'}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <p class=\"ion-padding\" *ngIf=\"!editing\">\n    Al crear una nueva sala se añadirá al listado de salas de la pestaña\n    comunidad.\n  </p>\n  <ion-list>\n    <form\n      [formGroup]=\"roomForm\"\n      (submit)=\"submitRoom()\"\n      autocomplete=\"off\"\n      class=\"ion-padding\"\n    >\n      <div>\n        <ion-item>\n          <ion-input\n            formControlName=\"name\"\n            placeholder=\"Escribe aquí el nombre\"\n            (ionChange)=\"generateSlug($event)\"\n          ></ion-input>\n          <p>Slug: {{room?.slug || slug}}</p>\n        </ion-item>\n        <ion-item>\n          <ion-textarea\n            placeholder=\"Escribe aquí la descripción\"\n            rows=\"3\"\n            formControlName=\"description\"\n          ></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label>Roles permitidos</ion-label>\n          <ion-select\n            interface=\"action-sheet\"\n            required\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona uno\"\n            formControlName=\"permissions\"\n          >\n            <ion-select-option value=\"ROLE_USER\"\n              >Todos los usuarios</ion-select-option\n            >\n            <ion-select-option value=\"ROLE_MASTER\"\n              >Solo moderadores/administradores\n            </ion-select-option>\n            <ion-select-option value=\"ROLE_PATREON\"\n              >Embajadores de Patreon\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>Quiero que esta sala sea visible</ion-label>\n          <ion-checkbox slot=\"start\" formControlName=\"visible\"></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-thumbnail *ngIf=\"src || room?.image\">\n            <img [src]=\"src ? src : room?.image\" />\n          </ion-thumbnail>\n          <ion-input\n            type=\"file\"\n            accept=\"image/*\"\n            formControlName=\"image\"\n            placeholder=\"Elige una imagen\"\n            clearInput=\"true\"\n            (change)=\"cropImagebyEvent($event)\"\n            (ionChange)=\"removeImage($event)\"\n          ></ion-input>\n        </ion-item>\n        <ion-button\n          color=\"primary\"\n          type=\"submit\"\n          shape=\"round\"\n          expand=\"block\"\n          [disabled]=\"roomForm.invalid\"\n          >{{editing ? 'Editar sala' : 'Crear nueva sala'}}</ion-button\n        >\n      </div>\n    </form>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 38486:
/*!*************************************************************************!*\
  !*** ./src/app/admin/rooms/edit-rooms/edit-rooms.modal.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Salas creadas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"create()\">\n        <ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"rooms?.length; else noRooms\">\n    <ion-list>\n      <ion-item lines=\"full\" *ngFor=\"let room of rooms\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"room.image\" default=\"/assets/img/users/default.jpg\" />\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ room.name }}</h2>\n          <p>{{room.description}}</p>\n        </ion-label>\n        <ion-buttons>\n          <ion-button (click)=\"edit(room)\">\n            <ion-icon slot=\"icon-only\" color=\"primary\" name=\"create\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"remove(room)\">\n            <ion-icon slot=\"icon-only\" color=\"primary\" name=\"trash\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ng-template #noRooms>\n    <div class=\"full-center ion-padding\">\n      <ion-icon name=\"body\"></ion-icon>\n      <h2>Sin resultados</h2>\n      <p>\n        No hay salas creadas.\n      </p>\n    </div>\n  </ng-template>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map