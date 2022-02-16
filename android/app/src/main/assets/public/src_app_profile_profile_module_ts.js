"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 72919);








const routes = [
    {
        path: "",
        component: _profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 36611);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 59076);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var cupertino_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cupertino-pane */ 25990);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-animate */ 54887);
/* harmony import */ var _options_popover_options_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../options-popover/options-popover */ 49308);
/* harmony import */ var _services_like_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/like.service */ 89453);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/page.service */ 49450);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/story.service */ 78934);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/url.service */ 90925);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/utils.service */ 88270);
/* harmony import */ var _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../story/view-stories/view-stories.modal */ 62651);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../services/auth.service */ 37556);





















let ProfilePage = class ProfilePage {
    constructor(popover, userSvc, route, router, utils, toast, vibration, alert, auth, storiesSvc, modal, pageSvc, likeSvc, urlSvc, meta, title, nav) {
        this.popover = popover;
        this.userSvc = userSvc;
        this.route = route;
        this.router = router;
        this.utils = utils;
        this.toast = toast;
        this.vibration = vibration;
        this.alert = alert;
        this.auth = auth;
        this.storiesSvc = storiesSvc;
        this.modal = modal;
        this.pageSvc = pageSvc;
        this.likeSvc = likeSvc;
        this.urlSvc = urlSvc;
        this.meta = meta;
        this.title = title;
        this.nav = nav;
        this.likes = {
            delivered: undefined,
            received: undefined
        };
        this.loading = true;
        this.paneSettings = {
            backdrop: true,
            bottomClose: true,
            buttonDestroy: false,
            handleKeyboard: false,
            initialBreak: "middle",
            onBackdropTap: () => {
                this.pane.destroy({ animate: true });
            }
        };
    }
    ngAfterViewInit() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const param = this.route.snapshot.paramMap.get("id");
            let id = undefined;
            if (!param) {
                id = this.auth.currentUserValue.id;
                this.auth.currentUser.subscribe((authUser) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                    this.user = Object.assign(Object.assign({}, this.user), authUser);
                }));
            }
            else {
                if (param.toLowerCase() === "frikiradar" || +param == 1) {
                    this.router.navigate(["/profile"]);
                }
                else {
                    id = param;
                }
            }
            try {
                this.loading = true;
                if (this.auth.currentUserValue) {
                    this.user = yield this.userSvc.getUser(id);
                }
                else {
                    this.user = yield this.userSvc.getPublicUser(id);
                    // si no recibe entonces poner que no es public
                }
                this.meta.addTags([
                    {
                        name: "keywords",
                        content: "frikiradar, friki, red social, " + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.name)
                    },
                    { name: "robots", content: "index, follow" },
                    { name: "author", content: "FrikiRadar" },
                    { charset: "UTF-8" }
                ]);
                this.title.setTitle("Perfil de " + ((_b = this.user) === null || _b === void 0 ? void 0 : _b.name) + " en FrikiRadar");
                this.meta.updateTag({
                    name: "description",
                    content: (_c = this.user) === null || _c === void 0 ? void 0 : _c.description
                });
                if (typeof this.user.connection === "string") {
                    this.user.connection = [this.user.connection];
                }
                this.loading = false;
                if (this.auth.currentUserValue) {
                    this.stories = yield this.storiesSvc.getUserStories(this.user.id);
                    this.story = this.stories[this.stories.length - 1];
                }
            }
            catch (e) {
                this.loading = false;
            }
        });
    }
    editProfile() {
        this.router.navigate(["/edit-profile"]);
    }
    openUrl(event) {
        this.urlSvc.openUrl(event);
        return false;
    }
    getTagsCategory(category) {
        if (this.user && this.user.tags) {
            return this.user.tags.filter(t => t.category.name === category);
        }
    }
    showChat() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.auth.currentUserValue) {
                this.nav.navigateRoot(["/login"], {
                    queryParams: { returnUrl: this.router.url }
                });
                return;
            }
            if (this.user.chat && !this.user.block) {
                this.router.navigate(["/chat", this.user.id]);
            }
            else {
                if (this.user.match > 0 ||
                    this.user.from_like ||
                    ((_a = this.auth) === null || _a === void 0 ? void 0 : _a.isVerified())) {
                    this.router.navigate(["/chat", this.user.id]);
                }
                else {
                    const alert = yield this.alert.create({
                        header: "No puedes iniciar un chat con esta persona",
                        message: `Para poder iniciar una conversación es necesario tener temas de conversación en común o haber recibido su kokoro ❤️.`,
                        buttons: ["Entendido, gracias!"],
                        cssClass: "round-alert"
                    });
                    yield alert.present();
                }
            }
        });
    }
    switchLike() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.auth.currentUserValue) {
                this.nav.navigateRoot(["/login"], {
                    queryParams: { returnUrl: this.router.url }
                });
                return;
            }
            try {
                if (!this.user.like) {
                    this.vibration.vibrate(5);
                    this.userSvc.like(this.user.id);
                    this.user.like = true;
                    if (this.user.block_messages ||
                        !this.user.match ||
                        !this.auth.isVerified()) {
                        let message = "";
                        if (this.user.from_like) {
                            message = `¡Felicidades por el match! Ya puedes chatear con ${this.user.name}.`;
                        }
                        else {
                            message = `¡Le has entregado tu kokoro a ${this.user.name}! No podrás iniciar un chat hasta que te entregue el suyo también.`;
                        }
                        (yield this.toast.create({
                            message,
                            duration: 5000,
                            position: "middle"
                        })).present();
                    }
                    else {
                        (yield this.toast.create({
                            message: `¡Le has entregado tu kokoro a ${this.user.name}!`,
                            duration: 5000,
                            position: "middle"
                        })).present();
                    }
                }
                else {
                    this.userSvc.unlike(this.user.id);
                    this.user.like = false;
                    (yield this.toast.create({
                        message: `Le has retirado tu kokoro a ${this.user.name}`,
                        duration: 5000,
                        position: "middle"
                    })).present();
                }
            }
            catch (e) {
                (yield this.toast.create({
                    message: `Error al entregar o retirar el kokoro`,
                    duration: 5000,
                    position: "middle",
                    color: "danger"
                })).present();
            }
        });
    }
    hideProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/"]);
            const toast = yield this.toast.create({
                message: "Has ocultado al usuario. No volverá a aparecerte como sugerencia.",
                duration: 3000,
                position: "bottom",
                buttons: [
                    {
                        text: "Deshacer",
                        handler: () => {
                            this.router.navigate(["/profile/" + this.user.id]);
                        }
                    }
                ]
            });
            toast.present();
            const log = yield toast.onDidDismiss();
            if (log.role === "timeout") {
                this.userSvc.hide(this.user.id);
            }
        });
    }
    showOptions(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popover.create({
                component: _options_popover_options_popover__WEBPACK_IMPORTED_MODULE_4__.OptionsPopover,
                cssClass: "options-popover",
                event: event,
                translucent: true,
                componentProps: {
                    user: this.user,
                    page: "profile"
                }
            });
            return yield popover.present();
        });
    }
    showTag(tag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (tag.category.name === "games" || tag.category.name === "films") {
                try {
                    if (tag.slug) {
                        this.router.navigate(["/page", tag.slug]);
                    }
                    else {
                        (yield this.toast.create({
                            message: "Creando página...",
                            position: "middle"
                        })).present();
                        const page = yield this.pageSvc.setPage(tag.id);
                        this.toast.dismiss();
                        this.user.tags.map(t => {
                            if (t.id === tag.id) {
                                t.slug = page.slug;
                            }
                        });
                        if (this.auth.currentUserValue.id === this.user.id) {
                            this.auth.setAuthUser(this.user);
                        }
                        this.router.navigate(["/page", page.slug]);
                    }
                }
                catch (e) {
                    this.toast.dismiss();
                    this.router.navigate(["/search", tag.name]);
                }
            }
            else {
                this.router.navigate(["/search", tag.name]);
            }
        });
    }
    showStories(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let stories = this.stories.filter(s => s.user.id === id);
            stories = [...stories, ...this.stories.filter(s => s.user.id !== id)];
            const modal = yield this.modal.create({
                component: _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_12__.ViewStoriesModal,
                componentProps: { stories },
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal"
            });
            yield modal.present();
            yield modal.onDidDismiss();
            this.stories = yield this.storiesSvc.getUserStories(+id);
        });
    }
    showLikes(param) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.param = param;
            this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_3__.CupertinoPane(".likes-pane", this.paneSettings);
            this.pane.present({ animate: true });
            if (!((_a = this.likes[param]) === null || _a === void 0 ? void 0 : _a.length)) {
                this.likes[param] = yield this.likeSvc.getLikes(param, 1, this.user.id);
            }
        });
    }
    viewProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.pane.destroy({ animate: true });
            if (this.param === "received" &&
                this.user.id === this.auth.currentUserValue.id) {
                if (!this.likes[this.param].find(l => l.user.id === id).time_read) {
                    yield this.likeSvc.readLike(id);
                }
            }
            this.nav.navigateRoot(["/profile/", id]);
        });
    }
    back() {
        this.nav.back();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PopoverController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService },
    { type: _services_story_service__WEBPACK_IMPORTED_MODULE_8__.StoryService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _services_page_service__WEBPACK_IMPORTED_MODULE_7__.PageService },
    { type: _services_like_service__WEBPACK_IMPORTED_MODULE_5__.LikeService },
    { type: _services_url_service__WEBPACK_IMPORTED_MODULE_9__.UrlService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.Meta },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.Title },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__.NavService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: "app-profile",
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.trigger)("pulse", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.transition)("* => *", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_19__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_20__.pulse))])],
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PopoverController,
        _services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController,
        _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_2__.Vibration,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService,
        _services_story_service__WEBPACK_IMPORTED_MODULE_8__.StoryService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController,
        _services_page_service__WEBPACK_IMPORTED_MODULE_7__.PageService,
        _services_like_service__WEBPACK_IMPORTED_MODULE_5__.LikeService,
        _services_url_service__WEBPACK_IMPORTED_MODULE_9__.UrlService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.Meta,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.Title,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__.NavService])
], ProfilePage);



/***/ }),

/***/ 89453:
/*!******************************************!*\
  !*** ./src/app/services/like.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikeService": () => (/* binding */ LikeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest.service */ 43006);



let LikeService = class LikeService {
    constructor(rest) {
        this.rest = rest;
    }
    getLikes(param, page = 1, user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const likes = (yield this.rest
                .get(`likes?param=${param}&page=${page}&user=${user}`)
                .toPromise());
            return likes;
        });
    }
    readLike(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`read-like/${id}`).toPromise());
        });
    }
};
LikeService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService }
];
LikeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService])
], LikeService);



/***/ }),

/***/ 54887:
/*!*********************************************************************!*\
  !*** ./node_modules/ng-animate/__ivy_ngcc__/fesm2015/ng-animate.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bounce": () => (/* binding */ bounce),
/* harmony export */   "bounceIn": () => (/* binding */ bounceIn),
/* harmony export */   "bounceInDown": () => (/* binding */ bounceInDown),
/* harmony export */   "bounceInLeft": () => (/* binding */ bounceInLeft),
/* harmony export */   "bounceInRight": () => (/* binding */ bounceInRight),
/* harmony export */   "bounceInUp": () => (/* binding */ bounceInUp),
/* harmony export */   "bounceInX": () => (/* binding */ bounceInX),
/* harmony export */   "bounceInY": () => (/* binding */ bounceInY),
/* harmony export */   "bounceOut": () => (/* binding */ bounceOut),
/* harmony export */   "bounceOutDown": () => (/* binding */ bounceOutDown),
/* harmony export */   "bounceOutLeft": () => (/* binding */ bounceOutLeft),
/* harmony export */   "bounceOutRight": () => (/* binding */ bounceOutRight),
/* harmony export */   "bounceOutUp": () => (/* binding */ bounceOutUp),
/* harmony export */   "bounceOutX": () => (/* binding */ bounceOutX),
/* harmony export */   "bounceOutY": () => (/* binding */ bounceOutY),
/* harmony export */   "fadeIn": () => (/* binding */ fadeIn),
/* harmony export */   "fadeInDown": () => (/* binding */ fadeInDown),
/* harmony export */   "fadeInLeft": () => (/* binding */ fadeInLeft),
/* harmony export */   "fadeInRight": () => (/* binding */ fadeInRight),
/* harmony export */   "fadeInUp": () => (/* binding */ fadeInUp),
/* harmony export */   "fadeInX": () => (/* binding */ fadeInX),
/* harmony export */   "fadeInY": () => (/* binding */ fadeInY),
/* harmony export */   "fadeOut": () => (/* binding */ fadeOut),
/* harmony export */   "fadeOutDown": () => (/* binding */ fadeOutDown),
/* harmony export */   "fadeOutLeft": () => (/* binding */ fadeOutLeft),
/* harmony export */   "fadeOutRight": () => (/* binding */ fadeOutRight),
/* harmony export */   "fadeOutUp": () => (/* binding */ fadeOutUp),
/* harmony export */   "fadeOutX": () => (/* binding */ fadeOutX),
/* harmony export */   "fadeOutY": () => (/* binding */ fadeOutY),
/* harmony export */   "flash": () => (/* binding */ flash),
/* harmony export */   "flip": () => (/* binding */ flip),
/* harmony export */   "flipIn": () => (/* binding */ flipIn),
/* harmony export */   "flipInX": () => (/* binding */ flipInX),
/* harmony export */   "flipInY": () => (/* binding */ flipInY),
/* harmony export */   "flipOut": () => (/* binding */ flipOut),
/* harmony export */   "flipOutX": () => (/* binding */ flipOutX),
/* harmony export */   "flipOutY": () => (/* binding */ flipOutY),
/* harmony export */   "hinge": () => (/* binding */ hinge),
/* harmony export */   "jackInTheBox": () => (/* binding */ jackInTheBox),
/* harmony export */   "jello": () => (/* binding */ jello),
/* harmony export */   "lightSpeedIn": () => (/* binding */ lightSpeedIn),
/* harmony export */   "lightSpeedOut": () => (/* binding */ lightSpeedOut),
/* harmony export */   "pulse": () => (/* binding */ pulse),
/* harmony export */   "rollIn": () => (/* binding */ rollIn),
/* harmony export */   "rollOut": () => (/* binding */ rollOut),
/* harmony export */   "rotateIn": () => (/* binding */ rotateIn),
/* harmony export */   "rotateInDirection": () => (/* binding */ rotateInDirection),
/* harmony export */   "rotateInDownLeft": () => (/* binding */ rotateInDownLeft),
/* harmony export */   "rotateInDownRight": () => (/* binding */ rotateInDownRight),
/* harmony export */   "rotateInUpLeft": () => (/* binding */ rotateInUpLeft),
/* harmony export */   "rotateInUpRight": () => (/* binding */ rotateInUpRight),
/* harmony export */   "rotateOut": () => (/* binding */ rotateOut),
/* harmony export */   "rotateOutDirection": () => (/* binding */ rotateOutDirection),
/* harmony export */   "rotateOutDownLeft": () => (/* binding */ rotateOutDownLeft),
/* harmony export */   "rotateOutDownRight": () => (/* binding */ rotateOutDownRight),
/* harmony export */   "rotateOutUpLeft": () => (/* binding */ rotateOutUpLeft),
/* harmony export */   "rotateOutUpRight": () => (/* binding */ rotateOutUpRight),
/* harmony export */   "rubberBand": () => (/* binding */ rubberBand),
/* harmony export */   "shake": () => (/* binding */ shake),
/* harmony export */   "slideInDown": () => (/* binding */ slideInDown),
/* harmony export */   "slideInLeft": () => (/* binding */ slideInLeft),
/* harmony export */   "slideInRight": () => (/* binding */ slideInRight),
/* harmony export */   "slideInUp": () => (/* binding */ slideInUp),
/* harmony export */   "slideOutDown": () => (/* binding */ slideOutDown),
/* harmony export */   "slideOutLeft": () => (/* binding */ slideOutLeft),
/* harmony export */   "slideOutRight": () => (/* binding */ slideOutRight),
/* harmony export */   "slideOutUp": () => (/* binding */ slideOutUp),
/* harmony export */   "slideX": () => (/* binding */ slideX),
/* harmony export */   "slideY": () => (/* binding */ slideY),
/* harmony export */   "swing": () => (/* binding */ swing),
/* harmony export */   "tada": () => (/* binding */ tada),
/* harmony export */   "wobble": () => (/* binding */ wobble),
/* harmony export */   "zoomIn": () => (/* binding */ zoomIn),
/* harmony export */   "zoomInDown": () => (/* binding */ zoomInDown),
/* harmony export */   "zoomInLeft": () => (/* binding */ zoomInLeft),
/* harmony export */   "zoomInRight": () => (/* binding */ zoomInRight),
/* harmony export */   "zoomInUp": () => (/* binding */ zoomInUp),
/* harmony export */   "zoomInX": () => (/* binding */ zoomInX),
/* harmony export */   "zoomInY": () => (/* binding */ zoomInY),
/* harmony export */   "zoomOut": () => (/* binding */ zoomOut),
/* harmony export */   "zoomOutDown": () => (/* binding */ zoomOutDown),
/* harmony export */   "zoomOutLeft": () => (/* binding */ zoomOutLeft),
/* harmony export */   "zoomOutRight": () => (/* binding */ zoomOutRight),
/* harmony export */   "zoomOutUp": () => (/* binding */ zoomOutUp),
/* harmony export */   "zoomOutX": () => (/* binding */ zoomOutX),
/* harmony export */   "zoomOutY": () => (/* binding */ zoomOutY),
/* harmony export */   "ɵa": () => (/* binding */ DEFAULT_TIMING)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);


const DEFAULT_TIMING = 1;

const bounce = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)' }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, -15px, 0)', offset: 0.7 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])),
], { params: { timing: DEFAULT_TIMING, delay: 0 } });
const flash = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });
const pulse = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)' }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)' }),
])), { params: { scale: 1.25, timing: DEFAULT_TIMING, delay: 0 } });
const rubberBand = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.05, .95, 1)', offset: 0.75 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });
const shake = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });
const swing = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }),
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });
const tada = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.1,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)',
        offset: 0.2,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.4,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.5,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.6,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.7,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
        offset: 0.8,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
        offset: 0.9,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });
const wobble = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'none', offset: 0 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
        offset: 0.15,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
        offset: 0.3,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
        offset: 0.45,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
        offset: 0.6,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
        offset: 0.75,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'none', offset: 1 }),
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });
const jello = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'none', offset: 0 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'none', offset: 0.11 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.22 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.44 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.55 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
        offset: 0.66,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'skewX(0.390625deg) skewY(0.390625deg)',
        offset: 0.77,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
        offset: 0.88,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'none', offset: 1 }),
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });

const bounceIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 1,
        transform: 'scale3d(1.03, 1.03, 1.03)',
        offset: 0.6
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
])), { params: { timing: DEFAULT_TIMING, delay: 0 } });
function bounceInY(a, b, c, d) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d(0, {{ a }}, 0)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d(0, {{ b }}, 0)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, {{ c }}, 0)', offset: 0.75 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, {{ d }}, 0)', offset: 0.9 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'none', offset: 1 })
    ])), {
        params: {
            timing: DEFAULT_TIMING,
            delay: 0,
            a,
            b,
            c,
            d
        }
    });
}
function bounceInX(a, b, c, d) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s cubic-bezier(0.215, 0.610, 0.355, 1.000)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d({{ a }}, 0, 0)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d({{ b }}, 0, 0)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d({{ c }}, 0, 0)', offset: 0.75 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d({{ d }}, 0, 0)', offset: 0.9 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'none', offset: 1 })
    ])), {
        params: {
            timing: DEFAULT_TIMING,
            delay: 0,
            a,
            b,
            c,
            d
        }
    });
}
const bounceInDown = bounceInY('-3000px', '25px', '-10px', '5px');
const bounceInUp = bounceInY('3000px', '-25px', '10px', '-5px');
const bounceInLeft = bounceInX('-3000px', '25px', '-10px', '5px');
const bounceInRight = bounceInX('3000px', '-25px', '10px', '-5px');
const bounceOut = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 1,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
        offset: 0.5
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 1,
        transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})',
        offset: 0.55
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 })
])), { params: { timing: DEFAULT_TIMING, delay: 0, scale: 1.1 } });
function bounceOutY(a, b, c, d) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, {{ a }}, 0)', offset: 0.2 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d(0, {{ b }}, 0)',
            offset: 0.4
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d(0, {{ c }}, 0)',
            offset: 0.45
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d(0, {{ d }}, 0)',
            offset: 1
        })
    ])), {
        params: {
            timing: DEFAULT_TIMING,
            delay: 0,
            a,
            b,
            c,
            d
        }
    });
}
function bounceOutX(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d({{ a }}, 0, 0)',
            offset: 0.2
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d({{ b }}, 0, 0)',
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
const bounceOutDown = bounceOutY('10px', '-20px', '-20px', '2000px');
const bounceOutUp = bounceOutY('-10px', '20px', '20px', '-2000px');
const bounceOutLeft = bounceOutX('20px', '-2000px');
const bounceOutRight = bounceOutX('-20px', '2000px');

function fadeInX(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d({{ a }}, 0, 0)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d({{ b }}, 0, 0)',
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
function fadeInY(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d(0, {{ a }}, 0)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d(0, {{ b }}, 0)',
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
const fadeIn = fadeInX(0, 0);
const fadeInDown = fadeInY('-100%', 0);
const fadeInUp = fadeInY('100%', 0);
const fadeInLeft = fadeInX('-100%', 0);
const fadeInRight = fadeInX('100%', 0);
function fadeOutX(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d({{ a }}, 0, 0)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d({{ b }}, 0, 0)',
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
function fadeOutY(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'translate3d(0, {{ a }}, 0)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d(0, {{ b }}, 0)',
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
const fadeOut = fadeOutX(0, 0);
const fadeOutDown = fadeOutY('-100%', 0);
const fadeOutUp = fadeOutY('100%', 0);
const fadeOutLeft = fadeOutX('-100%', 0);
const fadeOutRight = fadeOutX('100%', 0);
function slideX(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translate3d({{ a }}, 0, 0)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translate3d({{ b }}, 0, 0)',
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
function slideY(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translate3d(0, {{ a }}, 0)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translate3d(0, {{ b }}, 0)',
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
const slideInUp = slideY('-100%', 0);
const slideInDown = slideY('100%', 0);
const slideInLeft = slideX('-100%', 0);
const slideInRight = slideX('100%', 0);
const slideOutUp = slideY(0, '-100%');
const slideOutDown = slideY(0, '100%');
const slideOutLeft = slideX(0, '-100%');
const slideOutRight = slideX(0, '100%');

const flip = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ 'backface-visibility': 'visible' }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotate3d(0, 1, 0, -190deg)',
            offset: 0.4
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'perspective(400px) scale3d(1.5, 1.5, 1.5) rotate3d(0, 1, 0, -170deg)',
            offset: 0.5
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'perspective(400px) scale3d(.95, .95, .95)',
            offset: 0.8
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'perspective(400px)',
            offset: 1
        })
    ]))
], {
    params: { timing: DEFAULT_TIMING, delay: 0 }
});
function flipIn(rotateX, rotateY) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ 'backface-visibility': 'visible' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                opacity: 0,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
                offset: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                opacity: 1,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
                offset: 0.4
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
                offset: 0.6
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
                offset: 0.8
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
                offset: 1
            })
        ]))
    ], { params: { timing: DEFAULT_TIMING, delay: 0, rotateX, rotateY } });
}
const flipInX = flipIn(1, 0);
const flipInY = flipIn(0, 1);
function flipOut(rotateX, rotateY) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ 'backface-visibility': 'visible' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px)',
                offset: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                opacity: 1,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
                offset: 0.3
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                opacity: 0,
                transform: 'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
                offset: 1
            })
        ]))
    ], { params: { timing: DEFAULT_TIMING, delay: 0, rotateX, rotateY } });
}
const flipOutX = flipOut(1, 0);
const flipOutY = flipOut(0, 1);

const lightSpeedIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
        offset: 0,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 1,
        transform: 'translate3d(0, 0, 0) skewX(0)',
        offset: 1,
    }),
])), {
    params: { timing: DEFAULT_TIMING, delay: 0 },
});
const lightSpeedOut = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 1,
        offset: 0,
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 0,
        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
        offset: 1,
    }),
])), {
    params: { timing: DEFAULT_TIMING, delay: 0 },
});

function rotateInDirection(origin, degrees) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            'transform-origin': '{{ origin }}',
            opacity: 0,
            transform: 'rotate3d(0, 0, 1, {{ degrees }})',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            'transform-origin': '{{ origin }}',
            opacity: 1,
            transform: 'none',
            offset: 1
        })
    ])), {
        params: { timing: DEFAULT_TIMING, delay: 0, origin, degrees }
    });
}
const rotateIn = rotateInDirection('center', '-200deg');
const rotateInDownLeft = rotateInDirection('left bottom', '-45deg');
const rotateInDownRight = rotateInDirection('right bottom', '45deg');
const rotateInUpLeft = rotateInDirection('left bottom', '45deg');
const rotateInUpRight = rotateInDirection('right bottom', '-90deg');
function rotateOutDirection(origin, degrees) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            'transform-origin': '{{ origin }}',
            opacity: 1,
            transform: 'none',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            'transform-origin': '{{ origin }}',
            opacity: 0,
            transform: 'rotate3d(0, 0, 1, {{ degrees }})',
            offset: 1
        })
    ])), {
        params: { timing: DEFAULT_TIMING, delay: 0, origin, degrees }
    });
}
const rotateOut = rotateOutDirection('center', '200deg');
const rotateOutDownLeft = rotateOutDirection('left bottom', '45deg');
const rotateOutDownRight = rotateOutDirection('right bottom', '-45deg');
const rotateOutUpLeft = rotateOutDirection('left bottom', '-45deg');
const rotateOutUpRight = rotateOutDirection('right bottom', '90deg');

const hinge = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ 'transform-origin': 'top left' }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'rotate3d(0, 0, 1, 80deg)',
            offset: 0.2,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'rotate3d(0, 0, 1, 60deg)',
            offset: 0.4,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'rotate3d(0, 0, 1, 80deg)',
            offset: 0.6,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'rotate3d(0, 0, 1, 60deg)',
            offset: 0.8,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d(0, 700px, 0)',
            offset: 1,
        }),
    ])),
], {
    params: { timing: DEFAULT_TIMING, delay: 0 },
});
const jackInTheBox = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.1) rotate(30deg)',
            'transform-origin': 'center bottom',
            offset: 0,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0.5,
            transform: 'rotate(-10deg)',
            offset: 0.5,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0.7,
            transform: 'rotate(3deg)',
            offset: 0.7,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(1)',
            offset: 1,
        }),
    ])),
], {
    params: { timing: DEFAULT_TIMING, delay: 0 },
});
const rollIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
            offset: 0,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'none',
            offset: 1,
        }),
    ])),
], {
    params: { timing: DEFAULT_TIMING, delay: 0 },
});
const rollOut = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            offset: 0,
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
            offset: 1,
        }),
    ])),
], {
    params: { timing: DEFAULT_TIMING, delay: 0 },
});

const zoomIn = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale3d(1, 1, 1)',
            offset: 0.5
        })
    ]))
], {
    params: { timing: DEFAULT_TIMING, delay: 0 }
});
function zoomInY(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: `scale3d(.1, .1, .1) translate3d(0, {{ a }}, 0)`,
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: `scale3d(.475, .475, .475) translate3d(0, {{ b }}, 0)`,
            offset: 0.6
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
function zoomInX(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: `scale3d(.1, .1, .1) translate3d({{ a }}, 0, 0)`,
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: `scale3d(.475, .475, .475) translate3d({{ b }}, 0, 0)`,
            offset: 0.6
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
const zoomInDown = zoomInY('-1000px', '10px');
const zoomInUp = zoomInY('1000px', '-10px');
const zoomInLeft = zoomInX('-1000px', '10px');
const zoomInRight = zoomInX('1000px', '-10px');
const zoomOut = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)([
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)',
            offset: 0.5
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            offset: 1
        })
    ]))
], {
    params: { timing: DEFAULT_TIMING, delay: 0 }
});
function zoomOutY(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: `scale3d(.475, .475, .475) translate3d(0, {{ a }}, 0)`,
            offset: 0.4
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: `scale3d(.1, .1, .1) translate3d(0, {{ b }}, 0)`,
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
function zoomOutX(a, b) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animation)((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{ timing }}s {{ delay }}s cubic-bezier(0.550, 0.055, 0.675, 0.190)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: `scale3d(.475, .475, .475) translate3d({{ a }}, 0, 0)`,
            offset: 0.4
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: `scale3d(.1, .1, .1) translate3d({{ b }}, 0, 0)`,
            offset: 1
        })
    ])), { params: { timing: DEFAULT_TIMING, delay: 0, a, b } });
}
const zoomOutDown = zoomOutY('-60px', '2000px');
const zoomOutUp = zoomOutY('60px', '-2000px');
const zoomOutLeft = zoomOutX('42px', '-2000px');
const zoomOutRight = zoomOutX('-42px', '2000px');

/*
 * Public API Surface of ng-animate
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 36611:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  position: absolute;\n  --background: transparent !important;\n}\nion-header ion-toolbar .back {\n  background: #2f2f2f87;\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n}\nion-header ion-toolbar ion-icon {\n  color: white !important;\n}\nion-list {\n  margin: 0;\n  background: transparent;\n}\nion-list ion-icon {\n  color: var(--ion-color-light);\n  margin-right: 15px;\n}\nion-list.resume ion-label {\n  --color: var(--ion-color-light);\n  white-space: pre-wrap;\n}\n.match {\n  position: absolute;\n  margin-top: -70px;\n  color: white;\n  font-size: 14px;\n  border: 2px solid white;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-left: 10px;\n  background-color: #e91e63;\n  z-index: 1;\n  right: 10px;\n}\nion-grid {\n  --ion-grid-padding: 0px;\n  --ion-grid-column-padding: 0px;\n}\n.resume {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.resume ion-badge {\n  margin-left: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n}\n.resume ion-label {\n  color: var(--ion-color-light);\n}\n.resume ion-label p {\n  color: #666666;\n}\n.resume ion-label .name {\n  font-size: 24px;\n}\n.resume ion-label .age {\n  font-size: 20px;\n}\n.resume ion-label ion-icon {\n  margin-left: 5px;\n}\n.resume h1,\n.resume h3 {\n  margin: 0;\n}\n.resume .unread-likes {\n  position: absolute;\n  top: 12px;\n  left: 84px;\n}\nion-chip {\n  display: inline-grid;\n}\nion-chip ion-label {\n  min-height: 15px;\n}\nion-item {\n  --border-color: #e91e63;\n}\n.likes {\n  cursor: pointer;\n}\n#stories {\n  position: absolute;\n  margin-top: -75px;\n  left: 15px;\n  z-index: 1;\n}\n#stories ion-avatar img {\n  border: 2px solid white;\n}\n#edit-profile {\n  background: #2f2f2fb8;\n  border-radius: 50px;\n  text-transform: none;\n}\n#edit-profile ion-icon {\n  color: white !important;\n  margin-right: 5px;\n}\n#edit-profile ion-label {\n  color: white !important;\n}\n.likes-pane {\n  display: none;\n}\n.likes-pane ion-badge {\n  position: absolute;\n  left: 47px;\n  border-radius: 15px;\n  z-index: 1;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsdUJBQUE7QUFBSjtBQUlBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0FBREY7QUFHRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtBQUZKO0FBTUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FBSEY7QUFNQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUhKO0FBTUU7RUFDRSw2QkFBQTtBQUpKO0FBS0k7RUFDRSxjQUFBO0FBSE47QUFNSTtFQUNFLGVBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBUUk7RUFDRSxnQkFBQTtBQU5OO0FBVUU7O0VBRUUsU0FBQTtBQVJKO0FBV0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBVEo7QUFhQTtFQUNFLG9CQUFBO0FBVkY7QUFZRTtFQUNFLGdCQUFBO0FBVko7QUFjQTtFQUNFLHVCQUFBO0FBWEY7QUFjQTtFQUNFLGVBQUE7QUFYRjtBQWNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBWEY7QUFhRTtFQUNFLHVCQUFBO0FBWEo7QUFlQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVpGO0FBY0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FBWko7QUFlRTtFQUNFLHVCQUFBO0FBYko7QUFpQkE7RUFDRSxhQUFBO0FBZEY7QUFnQkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZEoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgLmJhY2sge1xuICAgIGJhY2tncm91bmQ6ICMyZjJmMmY4NztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuXG4gICYucmVzdW1lIGlvbi1sYWJlbCB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIH1cbn1cblxuLm1hdGNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwcHg7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cblxuLnJlc3VtZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcblxuICBpb24tYmFkZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgfVxuXG4gIGgxLFxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnVucmVhZC1saWtlcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiA4NHB4O1xuICB9XG59XG5cbmlvbi1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtaW4taGVpZ2h0OiAxNXB4O1xuICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6ICNlOTFlNjM7XG59XG5cbi5saWtlcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3N0b3JpZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC03NXB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuXG4gIGlvbi1hdmF0YXIgaW1nIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgfVxufVxuXG4jZWRpdC1wcm9maWxlIHtcbiAgYmFja2dyb3VuZDogIzJmMmYyZmI4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5saWtlcy1wYW5lIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICBpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"back\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"auth.currentUserValue\">\n      <ion-button\n        id=\"edit-profile\"\n        (click)=\"editProfile()\"\n        *ngIf=\"user?.id === auth.currentUserValue?.id\"\n        shape=\"round\"\n      >\n        <ion-icon name=\"create-outline\"></ion-icon>\n        <ion-label>Editar perfil</ion-label>\n      </ion-button>\n      <ion-button\n        (click)=\"showOptions($event)\"\n        *ngIf=\"user?.active && user?.id !== 1\"\n      >\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"user || loading; else noUser\">\n    <ion-list *ngIf=\"loading; else profile\">\n      <ion-item lines=\"none\">\n        <ion-label>\n          <h1>\n            <ion-skeleton-text animated style=\"width: 75%\"></ion-skeleton-text>\n          </h1>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>\n          <span *ngFor=\"let i of [].constructor(20)\">\n            <p>\n              <ion-skeleton-text\n                animated\n                style=\"width: 100%\"\n              ></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text\n                animated\n                style=\"width: 95%\"\n              ></ion-skeleton-text>\n            </p>\n          </span>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ng-template #profile>\n      <ion-slides [pager]=\"user?.images?.length\">\n        <ion-slide>\n          <img\n            [src]=\"user?.avatar\"\n            [alt]=\"user?.username\"\n            default=\"/assets/img/users/default.jpg\"\n          />\n        </ion-slide>\n        <ion-slide *ngFor=\"let image of user?.images\">\n          <img [src]=\"image\" default=\"/assets/img/users/default.jpg\" />\n        </ion-slide>\n      </ion-slides>\n      <div *ngIf=\"story\" id=\"stories\">\n        <ion-avatar\n          [ngClass]=\"story.viewed ? '' : 'not-view'\"\n          (click)=\"showStories(story.user.id)\"\n        >\n          <img [src]=\"story.image\" [alt]=\"story?.text\" />\n        </ion-avatar>\n      </div>\n\n      <div *ngIf=\"user.match\" class=\"match full-center\">{{ user.match }}%</div>\n\n      <div class=\"ion-padding\">\n        <ion-list class=\"resume\">\n          <ion-item lines=\"none\">\n            <ion-icon\n              slot=\"start\"\n              *ngIf=\"userSvc.getRoleIcon(user)\"\n              [name]=\"userSvc.getRoleIcon(user)\"\n              [src]=\"userSvc.getRoleIcon(user)\"\n              [color]=\"userSvc.getRoleColor(user)\"\n              (click)=\"userSvc.showRole(user)\"\n            ></ion-icon>\n            <ion-label color=\"light\">\n              <span class=\"name\">{{ user.name }}</span>\n              <span *ngIf=\"user?.age\" class=\"age\">, {{ user.age }}</span>\n              <ion-badge\n                color=\"secondary\"\n                *ngIf=\"(user?.last_login | niceDate) === 'Ahora mismo'\"\n                >&nbsp;</ion-badge\n              >\n              <p>@{{user.username}}</p>\n            </ion-label>\n          </ion-item>\n          <ion-item\n            lines=\"none\"\n            id=\"kokoro\"\n            *ngIf=\"auth.currentUserValue && user?.likes && auth.isAdult()\"\n          >\n            <ion-icon name=\"heart\" slot=\"start\" color=\"primary\"></ion-icon>\n            <ion-label>\n              <span class=\"likes\" (click)=\"showLikes('received')\"\n                ><strong>{{user.likes.received}}</strong> recibidos</span\n              >\n              &nbsp;&nbsp;&nbsp;&nbsp;\n              <span class=\"likes\" (click)=\"showLikes('delivered')\"\n                ><strong>{{user.likes.delivered}}</strong> entregados</span\n              >\n            </ion-label>\n          </ion-item>\n          <ion-item\n            lines=\"none\"\n            class=\"location\"\n            *ngIf=\"auth.isAdult() && (user?.distance !== undefined || user?.ip)\"\n          >\n            <ion-icon\n              name=\"location-sharp\"\n              slot=\"start\"\n              color=\"secondary\"\n            ></ion-icon>\n            <ion-label>\n              <span *ngIf=\"user?.distance !== undefined\"\n                >A {{ user?.distance }}km de distancia\n              </span>\n              <span *ngIf=\"user?.ip\"> ({{user?.ip}})</span>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"description\" *ngIf=\"user?.description\">\n            <ion-icon name=\"document-text\"></ion-icon>\n            <ion-label\n              [innerHTML]=\"\n            user?.description | linky: { className: 'linkified' } | mentions | hashtag\n          \"\n              (click)=\"$event.stopImmediatePropagation(); openUrl($event)\"\n            ></ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"user?.last_login\">\n            <ion-icon name=\"time\"></ion-icon>\n            <ion-label\n              >Última conexión: {{ (user?.last_login | niceDate) === 'Ahora\n              mismo' ? 'En línea' : (user?.last_login | niceDate) }}</ion-label\n            >\n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"user?.register_date\">\n            <ion-icon name=\"calendar\"></ion-icon>\n            <ion-label\n              >Fecha de registro: {{user?.register_date | niceDate }}</ion-label\n            >\n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"user?.location\">\n            <ion-icon name=\"home\"></ion-icon>\n            <ion-label>{{ user.location }}</ion-label>\n          </ion-item>\n          <ion-item\n            *ngIf=\"auth.isAdult() && (user?.gender || user?.pronoun || user?.orientation || user?.relationship)\"\n            lines=\"none\"\n          >\n            <ion-icon name=\"body\"></ion-icon>\n            <ion-label>\n              {{user?.orientation ? user.orientation + ' | ' : ''}} {{\n              user?.gender ? user.gender : '' }} {{ user?.pronoun ? '(' +\n              user.pronoun.toLowerCase() + ') | ' : '|'}} {{ user?.status ?\n              user.status + ' | ' : ''}} {{ user?.relationship ?\n              user.relationship : ''}}\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"auth.isAdult() && user?.connection?.length\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <ion-label>Buscando: {{ user?.connection?.join(\", \") }}</ion-label>\n          </ion-item>\n        </ion-list>\n        <ion-list class=\"tags\">\n          <ion-item *ngIf=\"getTagsCategory('games')?.length\">\n            <ion-icon name=\"game-controller-outline\"></ion-icon>\n            <ion-label class=\"ion-text-wrap\">\n              <ion-chip\n                *ngFor=\"let tag of getTagsCategory('games')\"\n                color=\"secondary\"\n              >\n                <ion-label (click)=\"showTag(tag)\">{{ tag.name }}</ion-label>\n              </ion-chip>\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"getTagsCategory('films')?.length\">\n            <ion-icon name=\"film-outline\"></ion-icon>\n            <ion-label class=\"ion-text-wrap\">\n              <ion-chip\n                *ngFor=\"let tag of getTagsCategory('films')\"\n                color=\"secondary\"\n              >\n                <ion-label (click)=\"showTag(tag)\">{{ tag.name }}</ion-label>\n              </ion-chip>\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"getTagsCategory('books')?.length\">\n            <ion-icon name=\"book-outline\"></ion-icon>\n            <ion-label class=\"ion-text-wrap\">\n              <ion-chip\n                *ngFor=\"let tag of getTagsCategory('books')\"\n                color=\"secondary\"\n              >\n                <ion-label (click)=\"showTag(tag)\">{{ tag.name }}</ion-label>\n              </ion-chip>\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"getTagsCategory('role')?.length\">\n            <ion-icon name=\"dice-outline\"></ion-icon>\n            <ion-label class=\"ion-text-wrap\">\n              <ion-chip\n                *ngFor=\"let tag of getTagsCategory('role')\"\n                color=\"secondary\"\n              >\n                <ion-label (click)=\"showTag(tag)\">{{ tag.name }}</ion-label>\n              </ion-chip>\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"getTagsCategory('music')?.length\">\n            <ion-icon name=\"headset-outline\"></ion-icon>\n            <ion-label class=\"ion-text-wrap\">\n              <ion-chip\n                *ngFor=\"let tag of getTagsCategory('music')\"\n                color=\"secondary\"\n              >\n                <ion-label (click)=\"showTag(tag)\">{{ tag.name }}</ion-label>\n              </ion-chip>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ng-template>\n  </div>\n  <ng-template #noUser>\n    <div class=\"full-center ion-padding\">\n      <ion-icon name=\"body\"></ion-icon>\n      <h2>No encontrado</h2>\n      <p>\n        El perfil de usuario que intentas ver no existe o se encuentra inactivo.\n      </p>\n    </div>\n  </ng-template>\n</ion-content>\n\n<ion-footer\n  class=\"ion-no-border\"\n  *ngIf=\"auth.currentUserValue?.id !== user?.id && user?.id !== 1\"\n>\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"user\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col\n            class=\"ion-text-center\"\n            *ngIf=\"auth.currentUserValue && auth.isAdult() && user?.age >= 18\"\n          >\n            <ion-button (click)=\"hideProfile()\">\n              <ion-icon\n                slot=\"icon-only\"\n                name=\"eye-off\"\n                color=\"danger\"\n              ></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col class=\"ion-text-center\">\n            <ion-button\n              *ngIf=\"!user?.block_messages || user.from_like\"\n              (click)=\"showChat()\"\n            >\n              <ion-icon slot=\"icon-only\" name=\"chatbubbles-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col\n            class=\"ion-text-center\"\n            *ngIf=\"!auth.currentUserValue || (auth.isAdult() && user?.age >= 18)\"\n          >\n            <ion-button (click)=\"switchLike()\">\n              <ion-icon\n                [@pulse]=\"user.like\"\n                slot=\"icon-only\"\n                [color]=\"user?.like ? 'primary' : 'light'\"\n                [name]=\"user?.like ? 'heart' : 'heart-outline'\"\n              ></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n<!-- panes -->\n\n<div class=\"likes-pane\">\n  <p>Kokoros {{param === 'received' ? 'recibidos' : 'entregados'}}</p>\n  <ion-list *ngIf=\"!likes[param]\">\n    <ion-item *ngFor=\"let i of [].constructor(8)\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h2>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h2>\n        <p>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"likes[param]?.length > 0\">\n    <ion-item\n      *ngFor=\"let like of likes[param]\"\n      button\n      detail=\"false\"\n      (click)=\"viewProfile(like.user.id)\"\n      lines=\"none\"\n    >\n      <ion-avatar slot=\"start\">\n        <img\n          [src]=\"like.user.thumbnail\"\n          [alt]=\"like.user.username\"\n          default=\"/assets/img/users/default.jpg\"\n        />\n        <ion-badge\n          color=\"primary\"\n          *ngIf=\"!like?.time_read && param == 'received' && auth.currentUserValue.id === user.id\"\n          >&nbsp;</ion-badge\n        >\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ like.user.name }}</h2>\n        <p>{{ like.user.description }}</p>\n      </ion-label>\n      <ion-icon\n        name=\"heart\"\n        color=\"primary\"\n        *ngIf=\"auth.currentUserValue.id === like.user.id\"\n      ></ion-icon>\n      <ion-note slot=\"end\">{{ like.date | niceDate }}</ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-item lines=\"none\" *ngIf=\"likes[param]?.length == 0\">\n    <p>No hay kokoros</p>\n  </ion-item>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map