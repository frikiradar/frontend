"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_room_room_module_ts"],{

/***/ 82036:
/*!*************************************!*\
  !*** ./src/app/room/room.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomPageModule": () => (/* binding */ RoomPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 25033);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _room_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room.page */ 82638);









const routes = [
    {
        path: "",
        component: _room_page__WEBPACK_IMPORTED_MODULE_1__.RoomPage
    }
];
let RoomPageModule = class RoomPageModule {
};
RoomPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__.PickerModule
        ],
        declarations: [_room_page__WEBPACK_IMPORTED_MODULE_1__.RoomPage]
    })
], RoomPageModule);



/***/ }),

/***/ 82638:
/*!***********************************!*\
  !*** ./src/app/room/room.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomPage": () => (/* binding */ RoomPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _room_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room.page.html?ngResource */ 21046);
/* harmony import */ var _room_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room.page.scss?ngResource */ 94538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 42697);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var cupertino_pane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cupertino-pane */ 25990);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 71695);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/chat.service */ 9014);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/config.service */ 70946);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/url.service */ 90925);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/utils.service */ 88270);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 27353);
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/room.service */ 51037);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _rules_rules_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rules/rules.page */ 45921);
/* harmony import */ var _events_event_modal_event_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../events/event-modal/event.modal */ 55713);























let RoomPage = class RoomPage {
    constructor(auth, router, route, nav, roomSvc, chatSvc, toast, alert, clipboard, keyboard, platform, config, urlSvc, androidPermissions, sheet, utils, modalController, popover, userSvc, afMessaging, firebase, cd) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.nav = nav;
        this.roomSvc = roomSvc;
        this.chatSvc = chatSvc;
        this.toast = toast;
        this.alert = alert;
        this.clipboard = clipboard;
        this.keyboard = keyboard;
        this.platform = platform;
        this.config = config;
        this.urlSvc = urlSvc;
        this.androidPermissions = androidPermissions;
        this.sheet = sheet;
        this.utils = utils;
        this.modalController = modalController;
        this.popover = popover;
        this.userSvc = userSvc;
        this.afMessaging = afMessaging;
        this.firebase = firebase;
        this.cd = cd;
        this.toggled = false;
        this.messages = [];
        this.page = 1;
        this.pressOptions = false;
        this.replying = false;
        this.editing = false;
        this.writing = false;
        this.toUserWriting = "";
        this.realtimeChat = true;
        this.paneSettings = {
            backdrop: true,
            bottomClose: true,
            buttonDestroy: false,
            handleKeyboard: false,
            initialBreak: "middle",
            onBackdropTap: () => {
                this.pane.destroy({ animate: true });
                this.selectedMessage = undefined;
                this.pressOptions = false;
            },
        };
    }
    onFocus() {
        this.getLastMessages();
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const config = (yield this.config.getConfig());
            this.alertError = yield this.alert.create({
                header: `Ups, error al conectar`,
                message: "Es posible que el servicio de chat esté en mantenimiento en estos momentos.",
                backdropDismiss: false,
                buttons: [
                    {
                        text: "Intentar reconectar",
                    },
                    {
                        text: "Ok, seré paciente",
                        handler: () => {
                            this.back();
                        },
                    },
                ],
                cssClass: "round-alert",
            });
            if (!config.chat && !this.auth.isAdmin()) {
                this.alertError.present();
            }
            this.slug = this.route.snapshot.paramMap.get("slug");
            try {
                this.room = yield this.roomSvc.getRoom(this.slug);
                const rooms_config = yield this.roomSvc.getRoomsConfig();
                if (this.room.last_message >
                    ((_a = rooms_config.find((r) => r.slug === this.room.slug)) === null || _a === void 0 ? void 0 : _a.last_message)) {
                    this.oldLastMessage = (_b = rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.find((r) => r.slug === this.room.slug)) === null || _b === void 0 ? void 0 : _b.last_message;
                }
                this.roomPage = this.room.page;
            }
            catch (e) {
                console.error(`No se ha podido cargar la sala. Error: ${e}`);
            }
            if (this.room &&
                !((_d = (_c = this.auth.currentUserValue) === null || _c === void 0 ? void 0 : _c.roles) === null || _d === void 0 ? void 0 : _d.includes((_e = this.room) === null || _e === void 0 ? void 0 : _e.permissions[0]))) {
                this.auth.logout();
            }
            const rules = yield this.config.get("rules");
            if (!rules) {
                const modal = yield this.modalController.create({
                    component: _rules_rules_page__WEBPACK_IMPORTED_MODULE_15__.RulesPage,
                    cssClass: "full-modal",
                    backdropDismiss: false,
                });
                return yield modal.present();
            }
            this.getLastMessages();
            if (!this.platform.is("cordova")) {
                try {
                    yield this.afMessaging.requestPermission.toPromise();
                }
                catch (e) {
                    this.realtimeChat = false;
                }
            }
        });
    }
    getLastMessages() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let messages = (yield this.roomSvc.getMessages(this.slug, 1))
                    .filter((m) => m.text || m.image || m.audio)
                    .reverse();
                if (messages.length && (((_a = this.room) === null || _a === void 0 ? void 0 : _a.visible) || this.roomPage)) {
                    this.room.last_message = messages[messages.length - 1].id;
                    this.roomSvc.setLastMessage(this.room);
                }
                messages = messages.filter((m) => {
                    if (!this.messages.some((me) => me.id === m.id)) {
                        return m;
                    }
                });
                messages.map((m) => {
                    if (m.event) {
                        if (m.event.participants.some((p) => p.id === this.auth.currentUserValue.id)) {
                            m.event.participate = true;
                        }
                    }
                });
                if (this.messages.length) {
                    messages.forEach((message) => {
                        this.messageReceived(message);
                    });
                }
                else {
                    this.messages = messages;
                }
                if (this.messages.length < 15) {
                    this.infiniteScroll.disabled = true;
                }
                this.scrollDown(1000);
                this.connectSSE();
                window.addEventListener("keyboardDidShow", (event) => {
                    this.scrollDown();
                });
                window.addEventListener("keyboardDidHide", (event) => {
                    this.scrollDown();
                });
                this.platform.backButton.subscribe(() => {
                    var _a;
                    (_a = this.source) === null || _a === void 0 ? void 0 : _a.close();
                });
            }
            catch (e) {
                console.error(e);
                yield this.alertError.present();
            }
        });
    }
    sendMessage(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const text = message.text;
            const image = message.image;
            const mentions = message.mentions;
            if (this.editing) {
                const chat = yield this.chatSvc
                    .updateMessage(this.selectedMessage.id, text)
                    .then();
                this.messages.map((m) => {
                    if (m.id === this.selectedMessage.id) {
                        m.text = text;
                    }
                });
                this.editing = false;
            }
            else {
                const tmpId = this.utils.makeId(6);
                const message = {
                    tmp_id: tmpId,
                    slug: this.slug,
                    fromuser: this.auth.currentUserValue,
                    text,
                    image,
                    time_creation: new Date(),
                    sending: true,
                    mentions,
                };
                this.messages = [...this.messages, ...[message]].filter((m) => m.text || m.image || m.audio);
                this.scrollDown(1, true);
                let replyToId = this.selectedMessage && this.replying ? this.selectedMessage.id : null;
                this.replying = false;
                try {
                    let chat = null;
                    if (!image) {
                        chat = yield this.roomSvc
                            .sendMessage(this.slug, this.room.name, text, replyToId, tmpId, mentions)
                            .then();
                    }
                    else if (image) {
                        const imageFile = yield this.utils.urltoBlob(image);
                        chat = yield this.roomSvc
                            .sendImage(this.slug, this.room.name, imageFile, text, tmpId, mentions)
                            .then();
                    }
                    yield this.messageReceived(chat);
                    this.room.last_message = chat.id;
                    this.roomSvc.setLastMessage(this.room);
                    replyToId = null;
                }
                catch (e) {
                    this.messages = this.messages.filter((m) => m.sending !== true);
                    console.error(e);
                }
            }
        });
    }
    scrollDown(delay = 500, force = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const scroll = yield this.chatlist.getScrollElement();
            if (scroll.scrollTop +
                scroll.offsetHeight +
                (scroll.offsetHeight - 200) / 2 >=
                scroll.scrollHeight ||
                force) {
                if (!this.chatlist) {
                    return;
                }
                setTimeout(() => {
                    this.chatlist.scrollToBottom(0);
                }, delay);
            }
        });
    }
    loadChats(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.messages.length) {
                return;
            }
            this.page++;
            const messages = (yield this.roomSvc.getMessages(this.slug, this.page))
                .filter((m) => m.text || m.image || m.audio)
                .reverse();
            this.messages = [...messages, ...this.messages];
            this.messages.map((m) => {
                if (m.event) {
                    if (m.event.participants.some((p) => p.id === this.auth.currentUserValue.id)) {
                        m.event.participate = true;
                    }
                }
            });
            event.target.complete();
            if (this.messages.length < 15) {
                event.target.disabled = true;
            }
        });
    }
    showProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (id !== 1) {
                this.router.navigate(["/profile", id]);
            }
        });
    }
    selectMessage(event, message) {
        event.preventDefault();
        this.selectedMessage = message;
        this.pressOptions = true;
    }
    copy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.pressOptions = false;
            try {
                if (this.platform.is("cordova")) {
                    yield this.clipboard.copy(this.selectedMessage.text);
                }
                else {
                    yield navigator.clipboard.writeText(this.selectedMessage.text);
                }
                (yield this.toast.create({
                    message: "Mensaje copiado",
                    duration: 2000,
                    position: "middle",
                })).present();
            }
            catch (e) {
                (yield this.toast.create({
                    message: "Error al copiar el mensaje",
                    duration: 2000,
                    position: "middle",
                })).present();
            }
        });
    }
    reply() {
        this.replying = true;
        this.pressOptions = false;
        this.scrollDown();
    }
    edit() {
        this.editing = true;
        this.pressOptions = false;
        this.scrollDown();
    }
    deleteMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.pane.destroy({ animate: true });
            try {
                yield this.chatSvc.deleteMessage(this.selectedMessage.id);
                if (this.selectedMessage.fromuser.id === this.auth.currentUserValue.id) {
                    this.messages = this.messages.filter((m) => m.id !== this.selectedMessage.id);
                }
            }
            catch (e) {
                (yield this.toast.create({
                    message: "Error al eliminar el mensaje",
                    duration: 2000,
                    position: "middle",
                })).present();
                console.error(e);
            }
        });
    }
    reportMessage() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: `¿Quieres reportar a el mensaje de ${(_b = (_a = this.selectedMessage) === null || _a === void 0 ? void 0 : _a.fromuser) === null || _b === void 0 ? void 0 : _b.username}?`,
                message: "Nos llegará un aviso para que revisemos el caso y actuemos en consecuencia.",
                inputs: [
                    {
                        name: "note",
                        type: "text",
                        placeholder: "Motivo del reporte (opcional)",
                    },
                ],
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary",
                    },
                    {
                        text: "Reportar",
                        role: "block",
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.chatSvc.report(this.selectedMessage, data.note);
                                (yield this.toast.create({
                                    message: "Mensaje reportado correctamente",
                                    duration: 2000,
                                    position: "bottom",
                                })).present();
                            }
                            catch (e) {
                                (yield this.toast.create({
                                    message: `Error al reportar el mensaje ${e}`,
                                    duration: 2000,
                                    position: "bottom",
                                    color: "danger",
                                })).present();
                                alert.present();
                            }
                        }),
                    },
                ],
                cssClass: "round-alert",
            });
            yield alert.present();
            this.pane.destroy({ animate: true });
        });
    }
    dragItem(event, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedMessage = message;
            if (event.detail.ratio < -0.9) {
                event.target.close();
                this.reply();
            }
        });
    }
    openUrl(event) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if ((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.href) {
                event.stopImmediatePropagation();
                this.urlSvc.openUrl(event);
            }
            return false;
        });
    }
    openPictureSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("android") && this.platform.is("cordova")) {
                yield this.androidPermissions.requestPermissions([
                    this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
                    this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
                ]);
            }
            if (this.platform.is("cordova")) {
                const actionSheet = yield this.sheet.create({
                    buttons: [
                        {
                            text: "Desde la cámara",
                            icon: "camera",
                            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                                const image = (yield this.utils.takePicture("camera", false, "default", true));
                                this.addPicture(image);
                            }),
                        },
                        {
                            text: "Desde la galería",
                            icon: "images",
                            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                                const image = (yield this.utils.takePicture("gallery", false, "default", true));
                                this.addPicture(image);
                            }),
                        },
                    ],
                });
                yield actionSheet.present();
            }
            else {
                this.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
            }
        });
    }
    addPicture(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (typeof image !== "string") {
                image = yield this.utils.fileToBase64(image);
            }
            this.image = image;
        });
    }
    openViewer(src, title, text, scheme = "dark") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            let componentProps = {};
            if (text) {
                componentProps = {
                    src,
                    title,
                    text,
                    scheme,
                };
            }
            else {
                componentProps = {
                    src,
                    title,
                    scheme,
                };
            }
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_18__.ViewerModalComponent,
                componentProps,
                cssClass: "ion-img-viewer",
                keyboardClose: true,
                showBackdrop: true,
            });
            return yield modal.present();
        });
    }
    showOptions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_5__.CupertinoPane(".options-pane", this.paneSettings);
            this.pane.present({ animate: true });
        });
    }
    setWriting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (this.writing || this.editing) {
                return;
            }
            this.writing = true;
            yield this.roomSvc.writing(this.auth.currentUserValue.username, this.slug);
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                this.writing = false;
            }), 15000);
        });
    }
    showPage(slug) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if ((_a = this.roomPage) === null || _a === void 0 ? void 0 : _a.slug) {
                this.router.navigate(["/page", slug]);
            }
        });
    }
    connectSSE() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                this.firebase.onMessageReceived().subscribe((notification) => {
                    if (notification === null || notification === void 0 ? void 0 : notification.message) {
                        const message = JSON.parse(notification.message);
                        // console.log(message);
                        this.messageReceived(message);
                    }
                });
            }
            else {
                this.afMessaging.messages.subscribe((payload) => {
                    var _a;
                    if ((_a = payload === null || payload === void 0 ? void 0 : payload.data) === null || _a === void 0 ? void 0 : _a.message) {
                        const message = JSON.parse(payload.data.message);
                        this.messageReceived(message);
                    }
                });
            }
        });
    }
    messageReceived(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (message.conversationId === this.slug) {
                if (message.writing &&
                    message.fromuser.username !== this.auth.currentUserValue.username) {
                    this.toUserWriting = message.fromuser.name + " está escribiendo...";
                    this.cd.detectChanges();
                    setTimeout(() => {
                        this.toUserWriting = "";
                        this.cd.detectChanges();
                    }, 10000);
                }
                else if (!message.writing) {
                    this.toUserWriting = "";
                    if (this.messages.some((m) => (m.id === message.id && !!m.id) ||
                        (m.tmp_id === message.tmp_id && !!m.tmp_id))) {
                        // Si ya existe el mensaje lo actualizamos
                        this.messages.map((m) => {
                            if ((m.id === message.id && !!m.id) ||
                                (m.tmp_id === message.tmp_id && !!m.tmp_id)) {
                                m.id = message.id;
                                m.text = message.text;
                                m.time_read = message.time_read;
                                m.edited = message.edited;
                                m.deleted = message.deleted;
                                m.sending = false;
                                m.modded = message.modded;
                                m.reply_to = message.reply_to;
                            }
                        });
                    }
                    else {
                        this.messages = [...this.messages, message];
                    }
                    // Borramos los deleted
                    this.messages = this.messages.filter((m) => !m.deleted);
                    this.cd.detectChanges();
                    this.scrollDown();
                }
            }
        });
    }
    goToMessage(message) {
        var _a;
        if ((_a = message === null || message === void 0 ? void 0 : message.reply_to) === null || _a === void 0 ? void 0 : _a.id) {
            const el = document.getElementById("" + message.reply_to.id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.classList.add("clicked");
                setTimeout(() => {
                    el.classList.remove("clicked");
                }, 1000);
            }
        }
    }
    createEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _events_event_modal_event_modal__WEBPACK_IMPORTED_MODULE_16__.EventModal,
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal",
                componentProps: { page: this.roomPage },
            });
            yield modal.present();
            yield modal.onDidDismiss();
        });
    }
    showEvent(event) {
        this.router.navigate(["/event", event.id]);
    }
    back() {
        var _a;
        this.nav.back();
        (_a = this.source) === null || _a === void 0 ? void 0 : _a.close();
    }
    ngOnDestroy() {
        var _a, _b;
        if (((_a = this.room) === null || _a === void 0 ? void 0 : _a.visible) || this.roomPage) {
            this.room.last_message = (_b = this.messages[this.messages.length - 1]) === null || _b === void 0 ? void 0 : _b.id;
            this.roomSvc.setLastMessage(this.room);
        }
    }
};
RoomPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_13__.NavService },
    { type: _services_room_service__WEBPACK_IMPORTED_MODULE_12__.RoomService },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_7__.ChatService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Clipboard },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService },
    { type: _services_url_service__WEBPACK_IMPORTED_MODULE_9__.UrlService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ActionSheetController },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.PopoverController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_14__.UserService },
    { type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_21__.AngularFireMessaging },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__.FirebaseX },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ChangeDetectorRef }
];
RoomPage.propDecorators = {
    chatlist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild, args: ["chatlist", { static: false },] }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonInfiniteScroll, { static: false },] }],
    imageInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild, args: ["imageInput", { static: false },] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.HostListener, args: ["window:focus",] }]
};
RoomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: "app-room",
        template: _room_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_room_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService,
        _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_13__.NavService,
        _services_room_service__WEBPACK_IMPORTED_MODULE_12__.RoomService,
        _services_chat_service__WEBPACK_IMPORTED_MODULE_7__.ChatService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController,
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Clipboard,
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform,
        _services_config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService,
        _services_url_service__WEBPACK_IMPORTED_MODULE_9__.UrlService,
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ActionSheetController,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.PopoverController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_14__.UserService,
        _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_21__.AngularFireMessaging,
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_6__.FirebaseX,
        _angular_core__WEBPACK_IMPORTED_MODULE_22__.ChangeDetectorRef])
], RoomPage);



/***/ }),

/***/ 94538:
/*!************************************************!*\
  !*** ./src/app/room/room.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-label p,\nion-label h2 {\n  text-transform: none;\n  letter-spacing: normal;\n  margin: 0 0 0 10px;\n  text-align: left;\n}\nion-label p {\n  font-size: 12px;\n  color: #666666;\n}\nion-label p ion-badge {\n  margin-right: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\n.bubble {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n.bubble .message-item {\n  --background-hover: #9a1c424d;\n  --background-hover-opacity: 0.5;\n  transition: background 400ms;\n}\n.bubble .message-item ion-avatar {\n  margin-bottom: auto;\n}\n.bubble .replyfrom {\n  font-size: 12px;\n}\n.bubble .replyfrom ion-icon {\n  font-size: 12px;\n}\n.bubble .replyfrom ion-avatar {\n  min-height: 20px;\n  min-width: 20px;\n  height: 20px;\n  width: 20px;\n}\n.bubble .replyfrom ion-thumbnail {\n  margin-right: 5px;\n  --border-radius: 5px;\n  width: 25px;\n  height: 25px;\n}\n.bubble .replyfrom .replyfrom-text {\n  margin-left: 0;\n  margin-top: 5px;\n  margin-right: 15px;\n  margin-bottom: 0;\n  color: #777777;\n}\n.bubble .replyfrom ion-label {\n  margin-left: 20px;\n}\n.bubble.same-user {\n  margin-top: 0;\n  position: relative;\n  margin-bottom: 0px;\n}\n.bubble ion-card {\n  border-radius: 20px;\n  --background: none;\n  box-shadow: none;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.bubble ion-card img {\n  max-width: 250px;\n}\n.bubble ion-card ion-card-content {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.bubble .message-event {\n  width: 100%;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  --color: var(--ion-color-light) !important;\n  --background: var(--ion-color-medium-dark) !important;\n}\n.bubble .message-event ion-img {\n  height: 220px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.bubble .message-event ion-card-title {\n  --color: var(--ion-color-light) !important;\n}\n.bubble .message-event ion-button {\n  margin-bottom: 10px;\n}\n.bubble .text-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.bubble .text-name a {\n  color: var(--ion-color-light) !important;\n}\n.bubble .text-name a.verified {\n  color: #c4d83b !important;\n}\n.bubble .text-name a.master {\n  color: #5260ff !important;\n}\n.bubble .text-name ion-icon {\n  font-size: 12px;\n  margin-left: 5px;\n  vertical-align: baseline;\n}\n.bubble .text-name .note-time {\n  font-size: 12px;\n  color: #777;\n}\n.bubble .text {\n  margin-right: 10px;\n  word-break: break-word;\n  white-space: pre-line;\n  color: var(--ion-color-light);\n}\n.bubble .text .edited,\n.bubble .text .text-note-time {\n  font-size: 12px;\n  color: #777;\n  display: none;\n}\n.bubble .note-image {\n  font-size: 10px;\n  position: absolute;\n  color: white;\n  bottom: 15px;\n  right: 15px;\n  background: #1f1f1fbb;\n  padding: 5px;\n  border-radius: 10px;\n}\n.bubble .note-image ion-icon {\n  font-size: 14px;\n  vertical-align: text-bottom;\n}\n.bubble ion-item.pressed {\n  background: #9a1c424d;\n}\n.bubble ion-item:hover .text-note-time {\n  display: inline !important;\n  display: initial !important;\n}\n.bubble ion-item.clicked {\n  background: #9a1c424d;\n  -webkit-animation: ripple 600ms linear;\n          animation: ripple 600ms linear;\n  transition: background 400ms;\n}\n.bubble ion-avatar {\n  min-width: 40px;\n  min-height: 40px;\n}\n.bubble div {\n  min-width: 40px;\n}\n/*.from ion-card {\n  @media (max-width: 991px) {\n    margin-left: auto;\n  }\n}*/\nion-chip {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  clear: both;\n}\n.options-pane {\n  display: none;\n}\n.options-pane ion-label p {\n  white-space: normal;\n  white-space: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUROO0FBTUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUhGO0FBS0U7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUFISjtBQUtJO0VBQ0UsbUJBQUE7QUFITjtBQU9FO0VBQ0UsZUFBQTtBQUxKO0FBT0k7RUFDRSxlQUFBO0FBTE47QUFRSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTk47QUFTSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBOO0FBVUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUk47QUFXSTtFQUNFLGlCQUFBO0FBVE47QUFhRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBWEo7QUFjRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVpKO0FBY0k7RUFDRSxnQkFBQTtBQVpOO0FBZUk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFiTjtBQWlCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxxREFBQTtBQWZKO0FBaUJJO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBZk47QUFrQkk7RUFDRSwwQ0FBQTtBQWhCTjtBQW1CSTtFQUNFLG1CQUFBO0FBakJOO0FBcUJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBbkJKO0FBcUJJO0VBQ0Usd0NBQUE7QUFuQk47QUFzQkk7RUFDRSx5QkFBQTtBQXBCTjtBQXVCSTtFQUNFLHlCQUFBO0FBckJOO0FBd0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUF0Qk47QUF5Qkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQXZCTjtBQTJCRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBekJKO0FBMkJJOztFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQXpCTjtBQTZCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBM0JKO0FBNkJJO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBM0JOO0FBK0JFO0VBQ0UscUJBQUE7QUE3Qko7QUFpQ0k7RUFDRSwwQkFBQTtFQUFBLDJCQUFBO0FBL0JOO0FBbUNFO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsNEJBQUE7QUFqQ0o7QUFvQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQ0o7QUFxQ0U7RUFDRSxlQUFBO0FBbkNKO0FBdUNBOzs7O0VBQUE7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFyQ0Y7QUF3Q0E7RUFDRSxhQUFBO0FBckNGO0FBdUNFO0VBQ0UsbUJBQUE7RUFBQSxvQkFBQTtBQXJDSiIsImZpbGUiOiJyb29tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gIHAsXG4gIGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuXG4gICAgaW9uLWJhZGdlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIH1cbiAgfVxufVxuXG4uYnViYmxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLm1lc3NhZ2UtaXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjOWExYzQyNGQ7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zO1xuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5yZXBseWZyb20ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG5cbiAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAucmVwbHlmcm9tLXRleHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gICYuc2FtZS11c2VyIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICB9XG5cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLm1lc3NhZ2UtZXZlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWRhcmspICFpbXBvcnRhbnQ7XG5cbiAgICBpb24taW1nIHtcbiAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnRleHQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGEudmVyaWZpZWQge1xuICAgICAgY29sb3I6ICNjNGQ4M2IgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBhLm1hc3RlciB7XG4gICAgICBjb2xvcjogIzUyNjBmZiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgfVxuXG4gICAgLm5vdGUtdGltZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICB9XG4gIH1cblxuICAudGV4dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gICAgLmVkaXRlZCxcbiAgICAudGV4dC1ub3RlLXRpbWUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5ub3RlLWltYWdlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogIzFmMWYxZmJiO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtLnByZXNzZWQge1xuICAgIGJhY2tncm91bmQ6ICM5YTFjNDI0ZDtcbiAgfVxuXG4gIGlvbi1pdGVtOmhvdmVyIHtcbiAgICAudGV4dC1ub3RlLXRpbWUge1xuICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtLmNsaWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICM5YTFjNDI0ZDtcbiAgICBhbmltYXRpb246IHJpcHBsZSA2MDBtcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA0MDBtcztcbiAgfVxuXG4gIGlvbi1hdmF0YXIge1xuICAgIG1pbi13aWR0aDogNDBweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgZGl2IHtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gIH1cbn1cblxuLyouZnJvbSBpb24tY2FyZCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59Ki9cblxuaW9uLWNoaXAge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuLm9wdGlvbnMtcGFuZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgaW9uLWxhYmVsIHAge1xuICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 21046:
/*!************************************************!*\
  !*** ./src/app/room/room.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"!pressOptions\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"showPage(room.slug)\" shape=\"round\">\n        <ion-avatar>\n          <img\n            *ngIf=\"room\"\n            [src]=\"room?.image\"\n            [alt]=\"room?.name\"\n            default=\"/assets/img/pages/default-games-page.jpg\"\n          />\n          <ion-skeleton-text animated *ngIf=\"!room\"></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label *ngIf=\"room\">\n          <h2>{{ room?.name || roomPage?.name }}</h2>\n          <p *ngIf=\"toUserWriting\">{{ toUserWriting}}</p>\n          <p *ngIf=\"!toUserWriting\">#{{room?.slug}}</p>\n        </ion-label>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" *ngIf=\"pressOptions\">\n      <ion-button (click)=\"pressOptions = false\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"pressOptions && !selectedMessage?.modded\">\n      <ion-button\n        (click)=\"edit()\"\n        *ngIf=\"selectedMessage?.fromuser?.id == auth.currentUserValue.id\"\n      >\n        <ion-icon slot=\"icon-only\" name=\"pencil-sharp\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"copy()\">\n        <ion-icon slot=\"icon-only\" name=\"copy-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"reply()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-undo-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"showOptions($event)\">\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"!pressOptions && !realtimeChat\">\n      <ion-button (click)=\"chatSvc.realtimeChatInfo()\">\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"timer-outline\"\n          color=\"danger\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #chatlist (tap)=\"pressOptions = false\">\n  <ion-infinite-scroll (ionInfinite)=\"loadChats($event)\" position=\"top\">\n    <ion-infinite-scroll-content loadingSpinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <span\n    class=\"bubble\"\n    [ngClass]=\"message?.fromuser?.id !== messages[i - 1]?.fromuser?.id || message?.reply_to || (message?.time_creation | date: 'shortDate') !==\n        (messages[i - 1]?.time_creation | date: 'shortDate') ? '' : 'same-user'\"\n    *ngFor=\"let message of messages; let i = index\"\n  >\n    <ion-chip\n      color=\"primary\"\n      class=\"center\"\n      *ngIf=\"\n        (message?.time_creation | date: 'shortDate') !==\n        (messages[i - 1]?.time_creation | date: 'shortDate')\n      \"\n    >\n      <ion-label color=\"secondary\"\n        >{{ message.time_creation | date: \"fullDate\" }}</ion-label\n      >\n    </ion-chip>\n    <ion-item\n      *ngIf=\"message.reply_to\"\n      class=\"replyfrom\"\n      lines=\"none\"\n      button\n      (click)=\"goToMessage(message)\"\n    >\n      <ion-icon name=\"arrow-undo\" color=\"light\" slot=\"start\"></ion-icon>\n      <ion-thumbnail *ngIf=\"message?.reply_to?.image\">\n        <img [src]=\"message?.reply_to?.image\" />\n      </ion-thumbnail>\n      <ion-label class=\"replyfrom-message\">\n        <p class=\"replyfrom-text\">\n          @{{message?.reply_to?.fromuser?.username}} {{message?.reply_to?.text}}\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item-sliding (ionDrag)=\"dragItem($event, message);\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"#1f1f1f\">\n          <ion-icon\n            slot=\"icon-only\"\n            name=\"arrow-undo-outline\"\n            color=\"light\"\n          ></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item\n        [id]=\"message.id\"\n        lines=\"none\"\n        button\n        detail=\"false\"\n        (press)=\"selectMessage($event, message)\"\n        class=\"message-item\"\n        [ngClass]=\"selectedMessage?.id == message?.id && pressOptions ? 'pressed' : ''\"\n      >\n        <ion-avatar\n          *ngIf=\"message?.fromuser?.id !== messages[i - 1]?.fromuser?.id || message?.reply_to || (message?.time_creation | date: 'shortDate') !==\n        (messages[i - 1]?.time_creation | date: 'shortDate')\"\n        >\n          <img\n            (click)=\"showProfile(message.fromuser.id)\"\n            [src]=\"message.fromuser.thumbnail\"\n            default=\"/assets/img/users/default.jpg\"\n          />\n        </ion-avatar>\n        <div\n          *ngIf=\"message?.fromuser?.id === messages[i - 1]?.fromuser?.id && !message?.reply_to && (message?.time_creation | date: 'shortDate') ===\n        (messages[i - 1]?.time_creation | date: 'shortDate')\"\n        ></div>\n\n        <ion-card\n          (click)=\"showEvent(message.event)\"\n          *ngIf=\"message.event\"\n          class=\"message-event\"\n        >\n          <ion-img\n            [src]=\"message.event?.image\"\n            [alt]=\"message.event?.title\"\n          ></ion-img>\n          <ion-card-header>\n            <ion-card-subtitle\n              >{{ message.event?.date | date: \"E d MMM y, HH:mm\" }} {{\n              message.event?.date_end ? \" - \" + (message.event?.date_end | date:\n              \"E d MMM y, HH:mm\") : \"\" }}</ion-card-subtitle\n            >\n            <ion-card-title>{{ message.event?.title }}</ion-card-title>\n            <ion-text>\n              {{ message.event?.type === \"online\" ? \"Online\" :\n              message.event?.address + \", \" + message.event?.country }}\n            </ion-text>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <!--Si cancelado o pasado-->\n                <ion-col\n                  *ngIf=\"\n                    message.event?.past || message.event.status == 'cancelled'\n                  \"\n                >\n                  <ion-button\n                    shape=\"round\"\n                    expand=\"full\"\n                    disabled\n                    *ngIf=\"\n                      !message.event?.past &&\n                      message.event.status == 'cancelled'\n                    \"\n                  >\n                    <ion-icon\n                      name=\"close-circle-outline\"\n                      slot=\"start\"\n                    ></ion-icon>\n                    Evento cancelado\n                  </ion-button>\n                  <ion-button\n                    shape=\"round\"\n                    expand=\"full\"\n                    *ngIf=\"\n                      message.event?.past &&\n                      message.event.status !== 'cancelled'\n                    \"\n                    disabled\n                  >\n                    <ion-icon name=\"timer-outline\" slot=\"start\"></ion-icon>\n                    Evento pasado\n                  </ion-button>\n                </ion-col>\n\n                <ion-col\n                  *ngIf=\"\n                    !message.event?.past &&\n                    message.event.status !== 'cancelled' &&\n                    !message.event.participate\n                  \"\n                >\n                  <ion-button shape=\"round\" expand=\"full\">\n                    <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n                    Confirmar participación\n                  </ion-button>\n                </ion-col>\n                <ion-col\n                  *ngIf=\"\n                    !message.event?.past &&\n                    message.event.status !== 'cancelled' &&\n                    message.event.participate\n                  \"\n                >\n                  <ion-button shape=\"round\" expand=\"full\">\n                    <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n                    Participación confirmada\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card *ngIf=\"!message?.event\">\n          <div *ngIf=\"message.image\">\n            <img\n              (click)=\"openViewer(message.image, message.fromuser.username + ', ' + utils.niceDate(message.time_creation), message.text)\"\n              [src]=\"message.image\"\n            />\n            <ion-note class=\"note-image\" *ngIf=\"!message?.text\">\n              <span *ngIf=\"message?.edited\">Editado</span>\n              {{ message.time_creation | date: \"shortTime\" }}\n              <span *ngIf=\"message.fromuser?.id == auth.currentUserValue?.id\">\n                <ion-icon *ngIf=\"message.sending\" name=\"time\"></ion-icon>\n                <ion-icon\n                  *ngIf=\"!message.sending && !message.time_read\"\n                  name=\"checkmark\"\n                ></ion-icon>\n                <ion-icon\n                  *ngIf=\"message.time_read\"\n                  color=\"secondary\"\n                  name=\"checkmark-done\"\n                ></ion-icon>\n              </span>\n            </ion-note>\n          </div>\n          <ion-card-content *ngIf=\"message.text\">\n            <p\n              class=\"text-name\"\n              *ngIf=\"(message?.fromuser?.id !== messages[i - 1]?.fromuser?.id)  || message?.reply_to || (message?.time_creation | date: 'shortDate') !==\n        (messages[i - 1]?.time_creation | date: 'shortDate')\"\n            >\n              <a (click)=\"showProfile(message.fromuser.id)\">\n                <ion-text [color]=\"userSvc.getRoleColor(message.fromuser)\"\n                  >{{message.fromuser.username}}</ion-text\n                >\n              </a>\n              <ion-icon\n                *ngIf=\"userSvc.getRoleIcon(message.fromuser)\"\n                [name]=\"userSvc.getRoleIcon(message.fromuser)\"\n                [src]=\"userSvc.getRoleIcon(message.fromuser)\"\n                slot=\"icon-only\"\n                [color]=\"userSvc.getRoleColor(message.fromuser)\"\n                (click)=\"userSvc.showRole(message.fromuser)\"\n              >\n              </ion-icon>\n\n              <span class=\"note-time\">\n                · {{ message.time_creation | chatDate }}\n              </span>\n              <span *ngIf=\"message.fromuser?.id == auth.currentUserValue?.id\">\n                <ion-icon *ngIf=\"message.sending\" name=\"time\"></ion-icon>\n                <ion-icon\n                  *ngIf=\"!message.sending && !message.time_read\"\n                  name=\"checkmark\"\n                ></ion-icon>\n              </span>\n            </p>\n            <ion-text class=\"text\">\n              <span\n                [innerHTML]=\"message.text | linky:{className: 'linkified'} | mentions:{mentions: message.mentions} | hashtag\"\n                (click)=\"openUrl($event);\"\n              ></span>\n              <span class=\"edited\" *ngIf=\"message?.edited\"> · Editado</span>\n              <span class=\"text-note-time\">\n                · {{ message.time_creation | date: \"shortTime\" }}\n              </span>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item\n      lines=\"none\"\n      color=\"dark\"\n      *ngIf=\"message?.id === oldLastMessage && oldLastMessage !== undefined\"\n      style=\"margin: 15px 0 15px 0\"\n    >\n      <ion-label class=\"ion-text-center\" color=\"primary\">\n        Mensajes sin leer\n      </ion-label>\n    </ion-item>\n  </span>\n</ion-content>\n<ion-footer>\n  <app-chat-input\n    (onWriting)=\"setWriting()\"\n    (onSubmit)=\"sendMessage($event)\"\n    (onCreateEvent)=\"createEvent()\"\n    [(replying)]=\"replying\"\n    [(editing)]=\"editing\"\n    [selectedMessage]=\"selectedMessage\"\n    [mentions]=\"true\"\n    [events]=\"roomPage ? true : false\"\n  ></app-chat-input>\n</ion-footer>\n\n<!-- panes -->\n\n<div class=\"options-pane\">\n  <ion-item *ngIf=\"selectedMessage\" lines=\"full\">\n    <ion-avatar slot=\"start\">\n      <img\n        [src]=\"selectedMessage?.fromuser.thumbnail\"\n        default=\"/assets/img/users/default.jpg\"\n      />\n    </ion-avatar>\n    <ion-label>\n      <h2>{{ selectedMessage?.fromuser.username }}</h2>\n      <p>{{selectedMessage?.text}}</p>\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-item\n      button\n      detail=\"false\"\n      (click)=\"deleteMessage()\"\n      lines=\"none\"\n      *ngIf=\"selectedMessage?.fromuser?.id == auth.currentUserValue.id || auth.isMaster()\"\n    >\n      <ion-icon slot=\"start\" name=\"trash-outline\" color=\"light\"></ion-icon>\n      <ion-label>Eliminar el mensaje</ion-label>\n    </ion-item>\n    <ion-item\n      button\n      detail=\"false\"\n      (click)=\"reportMessage()\"\n      lines=\"none\"\n      *ngIf=\"selectedMessage?.fromuser?.id !== auth.currentUserValue.id\"\n    >\n      <ion-icon slot=\"start\" name=\"warning-outline\" color=\"light\"></ion-icon>\n      <ion-label>Reportar el mensaje</ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_room_room_module_ts.js.map