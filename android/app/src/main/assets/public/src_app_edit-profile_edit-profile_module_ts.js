"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-profile_edit-profile_module_ts"],{

/***/ 71241:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 62613);








const routes = [
    {
        path: "",
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage
    }
];
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 62613:
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page.html?ngResource */ 31481);
/* harmony import */ var _edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss?ngResource */ 38481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/auth.service */ 37556);
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/tag.service */ 3294);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/utils.service */ 88270);












let EditProfilePage = class EditProfilePage {
    constructor(fb, userSvc, tagSvc, auth, picker, sheet, utils, toast, platform, androidPermissions, nav) {
        this.fb = fb;
        this.userSvc = userSvc;
        this.tagSvc = tagSvc;
        this.auth = auth;
        this.picker = picker;
        this.sheet = sheet;
        this.utils = utils;
        this.toast = toast;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.nav = nav;
        this.showToolbar = false;
        this.today = Date.now();
        this.tags = [];
        this.activeImage = 0;
        this.profileForm = this.fb.group({
            name: [""],
            description: [""],
            location: [""],
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({ value: "", disabled: true }),
            gender: [""],
            orientation: [""],
            pronoun: [""],
            relationship: [""],
            status: [""],
            lovegender: [""],
            minage: [""],
            maxage: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({ value: "", disabled: true }),
            connection: [""],
            tags: [""]
        });
    }
    get minage() {
        return this.profileForm.get("minage");
    }
    get maxage() {
        return this.profileForm.get("maxage");
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.auth.getAuthUser();
            this.profileForm.patchValue({
                name: this.user.name,
                description: this.user.description,
                location: this.user.location,
                birthday: this.user.birthday.split("T")[0],
                gender: this.user.gender,
                orientation: this.user.orientation,
                pronoun: this.user.pronoun,
                relationship: this.user.relationship,
                status: this.user.status,
                lovegender: this.user.lovegender,
                minage: this.user.minage,
                maxage: this.user.maxage,
                connection: this.user.connection
            });
            this.tags = this.user.tags ? this.user.tags : [];
            if (this.minage.value) {
                this.profileForm.get("maxage").enable();
            }
        });
    }
    submitProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.user = Object.assign(Object.assign(Object.assign({}, this.user), this.profileForm.getRawValue()), { tags: this.tags });
            // this.user.birthday = this.user.birthday.split("T")[0];
            try {
                this.user = yield this.userSvc.updateUser(this.user);
                this.tags = this.user.tags;
                (yield this.toast.create({
                    message: "Cambios guardados correctamente.",
                    duration: 5000,
                    position: "middle"
                })).present();
            }
            catch (e) {
                (yield this.toast.create({
                    message: `Error al guardar los cambios ${e}.`,
                    duration: 5000,
                    color: "danger",
                    position: "middle"
                })).present();
            }
            this.back();
        });
    }
    openPicker(typeage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let ages = [];
            let min = 18;
            const max = 65;
            if (typeage === "maxage") {
                min = this.minage.value;
            }
            for (let i = min; i <= max; i++) {
                ages = [...ages, { value: i, text: `${i}` }];
            }
            const picker = yield this.picker.create({
                buttons: [
                    {
                        text: "Hecho",
                        handler: (data) => {
                            if (typeage === "minage") {
                                this.profileForm.get("maxage").enable();
                                if (data.age.value > this.maxage.value) {
                                    this.profileForm.get("maxage").setValue(data.age.value);
                                }
                            }
                            this.profileForm.get(typeage).setValue(data.age.value);
                        }
                    }
                ],
                columns: [
                    {
                        name: "age",
                        options: ages
                    }
                ]
            });
            yield picker.present();
        });
    }
    searchTag(query, category) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.sheet.dismiss();
            if (query) {
                this.list = (yield this.tagSvc.searchTag(query, category));
                if (this.list.length) {
                    let buttons = [];
                    this.list.forEach(op => {
                        buttons = [
                            ...buttons,
                            {
                                text: `${op.name} (${op.total})`,
                                handler: () => {
                                    this.addTag(op.name, category);
                                }
                            }
                        ];
                    });
                    const actionSheet = yield this.sheet.create({
                        keyboardClose: false,
                        buttons
                    });
                    yield actionSheet.present();
                }
            }
        });
    }
    addTag(name, catName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (name &&
                !this.tags.some(t => t.name === name && t.category.name === catName)) {
                const tags = name.split(",").map((t) => {
                    return { name: t.trim(), category: { name: catName } };
                });
                tags.forEach((t) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        const tag = yield this.tagSvc.addTag(t.name, t.category.name);
                        this.tags = [...[tag], ...this.tags];
                        this.user.tags = this.tags;
                        this.auth.setAuthUser(this.user);
                    }
                    catch (e) {
                        (yield this.toast.create({
                            message: `Error al añadir la etiqueta ${t.name}.`,
                            color: "danger",
                            duration: 5000,
                            position: "middle"
                        })).present();
                        console.error(e);
                    }
                }));
            }
            this.role.value = this.music.value = this.games.value = this.films.value = this.books.value =
                "";
        });
    }
    removeTag(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.tags.splice(this.tags.findIndex(t => t.id === id), 1);
            try {
                yield this.tagSvc.removeTag(id);
            }
            catch (e) {
                (yield this.toast.create({
                    message: `Error al eliminar la etiqueta.`,
                    color: "danger",
                    duration: 5000,
                    position: "middle"
                })).present();
                console.error(e);
            }
        });
    }
    getTagsCategory(category) {
        if (!this.tags) {
            return;
        }
        return this.tags.filter(t => t.category.name === category);
    }
    openPictureSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("android") && this.platform.is("cordova")) {
                yield this.androidPermissions.requestPermissions([
                    this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
                    this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
                ]);
            }
            const actionSheet = yield this.sheet.create({
                header: "Consejo: Recuerda que subir fotos con contenido explícito puede ser motivo de expulsión.",
                buttons: [
                    {
                        text: "Desde la cámara",
                        icon: "camera",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.platform.is("cordova")) {
                                const avatar = (yield this.utils.takePicture("camera", true, "avatar", false));
                                this.uploadPicture(avatar);
                            }
                            else {
                                const avatar = yield this.utils.webcamImage("avatar", true);
                                if (!avatar || typeof avatar === "boolean") {
                                    actionSheet.dismiss();
                                    return false;
                                }
                                this.uploadPicture(avatar);
                            }
                        })
                    },
                    {
                        text: "Desde la galería",
                        icon: "images",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.platform.is("cordova")) {
                                const avatar = yield this.utils.takePicture("gallery", true, "avatar", false);
                                if (!avatar || typeof avatar == "string") {
                                    actionSheet.dismiss();
                                    return false;
                                }
                                this.uploadPicture(avatar);
                            }
                            else {
                                this.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
                            }
                        })
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    cropImagebyEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const src = yield this.utils.cropImage(event);
                if (typeof src == "string") {
                    const imageFile = yield this.utils.urltoBlob(src);
                    this.uploadPicture(imageFile);
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    uploadPicture(avatar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.userSvc.uploadAvatar(avatar);
                this.auth.setAuthUser(user);
                this.user = this.auth.currentUserValue;
                (yield this.toast.create({
                    message: `Imagen actualizada correctamente.`,
                    duration: 5000,
                    position: "middle"
                })).present();
            }
            catch (e) {
                (yield this.toast.create({
                    message: `Error al actualizar la imagen.`,
                    duration: 5000,
                    position: "middle"
                })).present();
                console.error(e);
            }
        });
    }
    setAvatar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const image = this.user.images[this.activeImage - 1];
            const user = yield this.userSvc.setAvatar(image);
            this.auth.setAuthUser(user);
            this.user = this.auth.currentUserValue;
            this.imageSlider.slideTo(0);
        });
    }
    deleteImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let image = undefined;
            if (this.activeImage === 0) {
                image = this.user.avatar;
            }
            else {
                image = this.user.images[this.activeImage - 1];
            }
            const user = yield this.userSvc.deleteAvatar(image);
            this.auth.setAuthUser(user);
            this.user = this.auth.currentUserValue;
            yield this.imageSlider.update();
            this.imageSlider.slideTo(0);
        });
    }
    setActiveImage(i) {
        i.then(index => {
            this.activeImage = index;
        });
    }
    back() {
        this.nav.back();
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _services_tag_service__WEBPACK_IMPORTED_MODULE_6__.TagService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PickerController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService }
];
EditProfilePage.propDecorators = {
    imageSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["imageSlider", { static: true },] }],
    segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["segment", { static: true },] }],
    games: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["games", { static: true },] }],
    films: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["films", { static: true },] }],
    books: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["books", { static: true },] }],
    music: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["music", { static: true },] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["role", { static: true },] }],
    imageInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["imageInput", { static: true },] }]
};
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-edit-profile",
        template: _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder,
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService,
        _services_tag_service__WEBPACK_IMPORTED_MODULE_6__.TagService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PickerController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform,
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService])
], EditProfilePage);



/***/ }),

/***/ 38481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  position: absolute;\n  --background: transparent !important;\n}\nion-toolbar ion-button.back {\n  background: #2f2f2f87;\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n}\nion-toolbar ion-icon {\n  color: white !important;\n}\nion-grid {\n  --ion-grid-padding: 0px;\n  --ion-grid-column-padding: 0px;\n}\nion-item {\n  --border-color: var(--ion-color-light);\n}\nion-list {\n  background: transparent;\n}\nion-list .category-header ion-icon {\n  margin-right: 5px;\n}\nion-segment.md {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\nion-chip ion-label {\n  min-height: 15px;\n  white-space: normal;\n}\n.swiper-slide {\n  text-align: left;\n}\nform {\n  width: 100%;\n}\nform ion-icon {\n  color: white;\n  margin-right: 10px;\n}\n#file-input {\n  display: none;\n}\n.fav-icon {\n  position: relative;\n  float: right;\n  margin-top: -100px;\n  padding: 10px;\n  color: #ffffff;\n  opacity: 0.8;\n  z-index: 1;\n}\n.del-icon {\n  position: relative;\n  float: right;\n  margin-top: -140px;\n  padding: 10px;\n  color: #ffffff;\n  opacity: 0.8;\n  z-index: 1;\n}\n#description {\n  --border-color: white;\n}\nion-item-group ion-item-divider {\n  margin-top: 20px;\n}\nion-item-group ion-item-divider h2,\nion-item-group ion-item-divider ion-icon {\n  color: white;\n}\nion-item-group ion-item {\n  padding-left: 15px;\n  padding-right: 15px;\n}\nion-item ion-label p {\n  color: #b9b9b9;\n  white-space: normal;\n}\nion-footer {\n  background: var(--ion-color-dark);\n}\nion-footer ion-button {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0FBQ0Y7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtBQUFKO0FBSUE7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FBREY7QUFJQTtFQUNFLHNDQUFBO0FBREY7QUFJQTtFQUNFLHVCQUFBO0FBREY7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFLQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUZGO0FBTUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFPQTtFQUNFLGdCQUFBO0FBSkY7QUFPQTtFQUNFLFdBQUE7QUFKRjtBQUtFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBSEo7QUFPQTtFQUNFLGFBQUE7QUFKRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSkY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUpGO0FBT0E7RUFDRSxxQkFBQTtBQUpGO0FBUUU7RUFDRSxnQkFBQTtBQUxKO0FBT0k7O0VBRUUsWUFBQTtBQUxOO0FBU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFZRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQVRKO0FBYUE7RUFDRSxpQ0FBQTtBQVZGO0FBV0U7RUFDRSxtQkFBQTtBQVRKIiwiZmlsZSI6ImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gIGlvbi1idXR0b24uYmFjayB7XG4gICAgYmFja2dyb3VuZDogIzJmMmYyZjg3O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAuY2F0ZWdvcnktaGVhZGVyIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufVxuXG5pb24tc2VnbWVudC5tZCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbn1cblxuaW9uLWNoaXAge1xuICBpb24tbGFiZWwge1xuICAgIG1pbi1oZWlnaHQ6IDE1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuXG4jZmlsZS1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mYXYtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kZWwtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMTQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNkZXNjcmlwdGlvbiB7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0tZ3JvdXAge1xuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgaDIsXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICBwIHtcbiAgICBjb2xvcjogI2I5YjliOTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 31481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button class=\"back\" (click)=\"back()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button\n          *ngIf=\"user?.images?.length < 9\"\n          (click)=\"openPictureSheet()\"\n        >\n          <ion-icon\n            slot=\"icon-only\"\n            src=\"/assets/icon/add_a_photo_white_24dp.svg\"\n            size=\"large\"\n          ></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"deleteImage()\">\n          <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"setAvatar()\" *ngIf=\"activeImage > 0\">\n          <ion-icon slot=\"icon-only\" name=\"star-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-slides\n    #imageSlider\n    [pager]=\"true\"\n    (ionSlideDidChange)=\"setActiveImage(imageSlider.getActiveIndex())\"\n  >\n    <ion-slide>\n      <img [src]=\"user?.avatar\" default=\"/assets/img/users/default.jpg\" />\n    </ion-slide>\n    <ion-slide *ngFor=\"let image of user?.images\">\n      <img [src]=\"image\" default=\"/assets/img/users/default.jpg\" />\n    </ion-slide>\n  </ion-slides>\n\n  <input\n    type=\"file\"\n    accept=\"image/*\"\n    #imageInput\n    style=\"display: none;\"\n    name=\"avatar\"\n    (change)=\"cropImagebyEvent($event)\"\n  />\n  <form [formGroup]=\"profileForm\">\n    <ion-list>\n      <ion-item-group>\n        <ion-item-divider color=\"primary\">\n          <ion-icon name=\"person-circle\" slot=\"start\"></ion-icon>\n          <ion-label><h2>Mi información personal</h2></ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n          <ion-label position=\"floating\">Nombre</ion-label>\n          <ion-input\n            formControlName=\"name\"\n            autocapitalize=\"on\"\n            autoGrow\n          ></ion-input>\n        </ion-item>\n        <ion-item id=\"description\">\n          <ion-icon name=\"document-text-outline\" slot=\"start\"></ion-icon>\n          <ion-label position=\"floating\">Mensaje de presentación</ion-label>\n          <ion-textarea\n            formControlName=\"description\"\n            autocapitalize=\"on\"\n            autoGrow\n          ></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n          <ion-label position=\"floating\">Vivo en</ion-label>\n          <ion-input\n            formControlName=\"location\"\n            autocapitalize=\"on\"\n            autoGrow\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Fecha de nacimiento</ion-label>\n          <ion-datetime\n            min=\"1900-01\"\n            max=\"{{ (today | date: 'y') - 14 }}-{{ today | date: 'MM' }}-{{\n                  today | date: 'dd'\n                }}\"\n            cancel-text=\"Cancelar\"\n            done-text=\"Hecho\"\n            displayFormat=\"DD MMM de YYYY\"\n            monthShortNames=\"ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic\"\n            formControlName=\"birthday\"\n          >\n          </ion-datetime>\n        </ion-item>\n      </ion-item-group>\n      <ion-item-group *ngIf=\"auth.isAdult()\">\n        <ion-item-divider color=\"primary\">\n          <ion-icon name=\"location\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h2>Información de radar</h2>\n          </ion-label>\n        </ion-item-divider>\n        <ion-item lines=\"none\">\n          <ion-label>\n            <p>\n              Información necesaria para que los usuarios te encuentren usando\n              el radar o la búsqueda.\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Identidad de género</ion-label>\n          <ion-select\n            interface=\"action-sheet\"\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona uno\"\n            formControlName=\"gender\"\n          >\n            <ion-select-option\n              *ngFor=\"let gender of userSvc.getGenders()\"\n              [value]=\"gender\"\n              >{{ gender }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Orientación sexual</ion-label>\n          <ion-select\n            interface=\"action-sheet\"\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona uno\"\n            formControlName=\"orientation\"\n          >\n            <ion-select-option\n              *ngFor=\"let orientation of userSvc.getOrientations()\"\n              [value]=\"orientation\"\n            >\n              {{ orientation }}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Pronombre</ion-label>\n          <ion-select\n            interface=\"action-sheet\"\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona uno\"\n            formControlName=\"pronoun\"\n            value=\"\"\n          >\n            <ion-select-option value=\"\">Sin indicar</ion-select-option>\n            <ion-select-option\n              *ngFor=\"let pronoun of userSvc.getPronouns()\"\n              [value]=\"pronoun\"\n              >{{ pronoun }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Tipo de relación</ion-label>\n          <ion-select\n            interface=\"action-sheet\"\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona uno\"\n            formControlName=\"relationship\"\n            value=\"\"\n          >\n            <ion-select-option value=\"\">Sin indicar</ion-select-option>\n            <ion-select-option\n              *ngFor=\"let type of userSvc.getRelationships()\"\n              [value]=\"type\"\n              >{{ type }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label>Estado</ion-label>\n          <ion-select\n            interface=\"action-sheet\"\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona uno\"\n            formControlName=\"status\"\n            value=\"\"\n          >\n            <ion-select-option value=\"\">Sin indicar</ion-select-option>\n            <ion-select-option\n              *ngFor=\"let status of userSvc.getStatus()\"\n              [value]=\"status\"\n              >{{ status }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-item-group>\n      <ion-item-group *ngIf=\"auth.isAdult()\">\n        <ion-item-divider color=\"primary\">\n          <ion-icon name=\"search\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h2>Estoy buscando...</h2>\n          </ion-label>\n        </ion-item-divider>\n        <ion-item lines=\"none\">\n          <ion-label>\n            <p>\n              Elige el tipo de persona que estás buscando. Esto afectará a los\n              resultados de búsqueda y filtrado para el radar.\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Identidad de género</ion-label>\n          <ion-select\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona\"\n            formControlName=\"lovegender\"\n            multiple\n          >\n            <ion-select-option\n              *ngFor=\"let likegender of userSvc.getGenders()\"\n              [value]=\"likegender\"\n              >{{ likegender }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ages\">\n          <ion-label>Edad desde </ion-label>\n          <ion-input\n            type=\"text\"\n            formControlName=\"minage\"\n            readonly\n            placeholder=\"Años\"\n            (click)=\"openPicker('minage')\"\n          >\n          </ion-input>\n\n          <ion-label>- hasta</ion-label>\n          <ion-input\n            type=\"text\"\n            formControlName=\"maxage\"\n            readonly\n            placeholder=\"Años\"\n            (click)=\"openPicker('maxage')\"\n          >\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Tipo de conexión</ion-label>\n          <ion-select\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona uno\"\n            formControlName=\"connection\"\n            multiple\n          >\n            <ion-select-option\n              *ngFor=\"let connection of userSvc.getConnections()\"\n              [value]=\"connection\"\n            >\n              {{ connection }}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n  </form>\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider color=\"primary\">\n        <ion-icon name=\"pricetags\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h2>Etiquetas de gustos frikis</h2>\n        </ion-label>\n      </ion-item-divider>\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p>\n            Indica un videojuego, anime, serie, película, manga... por cada\n            etiqueta. Tu porcentaje(%) de afinidad con los usuarios depende de\n            esta información.\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item class=\"category-header\">\n        <ion-icon name=\"game-controller-outline\"></ion-icon>\n        <ion-input\n          #games\n          placeholder=\"Videojuegos favoritos\"\n          clearInput=\"true\"\n          autocapitalize=\"words\"\n          (ionChange)=\"searchTag($event.detail.value, 'games')\"\n          [debounce]=\"500\"\n          (keyup.enter)=\"\n                        addTag($event.target.value, 'games'); games.value = ''\n                      \"\n          spellcheck=\"false\"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <ion-chip\n            *ngFor=\"let tag of getTagsCategory('games')\"\n            color=\"secondary\"\n          >\n            <ion-icon\n              name=\"close-circle\"\n              (click)=\"removeTag(tag.id)\"\n            ></ion-icon>\n            <ion-label>{{ tag.name }}</ion-label>\n          </ion-chip>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item class=\"category-header\">\n        <ion-icon name=\"film-outline\"></ion-icon>\n        <ion-input\n          #films\n          placeholder=\"Películas, series o animes favoritos\"\n          clearInput=\"true\"\n          autocapitalize=\"words\"\n          (ionChange)=\"searchTag($event.detail.value, 'films')\"\n          [debounce]=\"500\"\n          (keyup.enter)=\"\n                        addTag($event.target.value, 'films'); films.value = ''\n                      \"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <ion-chip\n            *ngFor=\"let tag of getTagsCategory('films')\"\n            color=\"secondary\"\n          >\n            <ion-icon\n              name=\"close-circle\"\n              (click)=\"removeTag(tag.id)\"\n            ></ion-icon>\n            <ion-label>{{ tag.name }}</ion-label>\n          </ion-chip>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item class=\"category-header\">\n        <ion-icon name=\"book-outline\"></ion-icon>\n        <ion-input\n          #books\n          placeholder=\"Cómics, mangas o libros\"\n          clearInput=\"true\"\n          autocapitalize=\"words\"\n          (ionChange)=\"searchTag($event.detail.value, 'books')\"\n          [debounce]=\"500\"\n          (keyup.enter)=\"\n                        addTag($event.target.value, 'books'); books.value = ''\n                      \"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <ion-chip\n            *ngFor=\"let tag of getTagsCategory('books')\"\n            color=\"secondary\"\n          >\n            <ion-icon\n              name=\"close-circle\"\n              (click)=\"removeTag(tag.id)\"\n            ></ion-icon>\n            <ion-label>{{ tag.name }}</ion-label>\n          </ion-chip>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item class=\"category-header\">\n        <ion-icon name=\"dice-outline\"></ion-icon>\n        <ion-input\n          #role\n          placeholder=\"Juegos de mesa, rol y cartas frikis\"\n          clearInput=\"true\"\n          autocapitalize=\"words\"\n          (ionChange)=\"searchTag($event.detail.value, 'role')\"\n          [debounce]=\"500\"\n          (keyup.enter)=\"\n                        addTag($event.target.value, 'role'); role.value = ''\n                      \"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <ion-chip\n            *ngFor=\"let tag of getTagsCategory('role')\"\n            color=\"secondary\"\n          >\n            <ion-icon\n              name=\"close-circle\"\n              (click)=\"removeTag(tag.id)\"\n            ></ion-icon>\n            <ion-label>{{ tag.name }}</ion-label>\n          </ion-chip>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item class=\"category-header\">\n        <ion-icon name=\"headset-outline\"></ion-icon>\n        <ion-input\n          #music\n          placeholder=\"Música, artistas o canciones favoritas\"\n          clearInput=\"true\"\n          autocapitalize=\"words\"\n          (ionChange)=\"searchTag($event.detail.value, 'music')\"\n          [debounce]=\"500\"\n          (keyup.enter)=\"\n                        addTag($event.target.value, 'music'); music.value = ''\n                      \"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <ion-chip\n            *ngFor=\"let tag of getTagsCategory('music')\"\n            color=\"secondary\"\n          >\n            <ion-icon\n              name=\"close-circle\"\n              (click)=\"removeTag(tag.id)\"\n            ></ion-icon>\n            <ion-label>{{ tag.name }}</ion-label>\n          </ion-chip>\n        </ion-label>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-button\n    (click)=\"submitProfile()\"\n    class=\"ion-padding\"\n    color=\"primary\"\n    [disabled]=\"!profileForm.valid\"\n    expand=\"block\"\n    shape=\"round\"\n    >Guardar y salir\n  </ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-profile_edit-profile_module_ts.js.map