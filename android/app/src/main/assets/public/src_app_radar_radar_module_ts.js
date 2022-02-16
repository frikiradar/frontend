"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_radar_radar_module_ts"],{

/***/ 81914:
/*!***************************************!*\
  !*** ./src/app/radar/radar.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadarPageModule": () => (/* binding */ RadarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 44466);
/* harmony import */ var _radar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radar.page */ 37446);








const routes = [
    {
        path: "",
        component: _radar_page__WEBPACK_IMPORTED_MODULE_1__.RadarPage
    }
];
let RadarPageModule = class RadarPageModule {
};
RadarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_radar_page__WEBPACK_IMPORTED_MODULE_1__.RadarPage]
    })
], RadarPageModule);



/***/ }),

/***/ 37446:
/*!*************************************!*\
  !*** ./src/app/radar/radar.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadarPage": () => (/* binding */ RadarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _radar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radar.page.html?ngResource */ 22126);
/* harmony import */ var _radar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radar.page.scss?ngResource */ 16800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 71695);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 45050);
/* harmony import */ var cupertino_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cupertino-pane */ 25990);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deep-equal */ 15541);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/geolocation.service */ 74375);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/auth.service */ 37556);
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/device.service */ 34811);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/utils.service */ 88270);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/config.service */ 70946);
/* harmony import */ var _services_push_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/push.service */ 52314);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/notification.service */ 12013);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/story.service */ 78934);
/* harmony import */ var _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../story/story-modal/story.modal */ 62915);
/* harmony import */ var _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../story/view-stories/view-stories.modal */ 62651);





















let RadarPage = class RadarPage {
    constructor(userSvc, menu, auth, router, geolocationSvc, deviceSvc, platform, alert, utils, toast, config, firebase, push, notificationSvc, detectorRef, storySvc, modal) {
        this.userSvc = userSvc;
        this.menu = menu;
        this.auth = auth;
        this.router = router;
        this.geolocationSvc = geolocationSvc;
        this.deviceSvc = deviceSvc;
        this.platform = platform;
        this.alert = alert;
        this.utils = utils;
        this.toast = toast;
        this.config = config;
        this.firebase = firebase;
        this.push = push;
        this.notificationSvc = notificationSvc;
        this.detectorRef = detectorRef;
        this.storySvc = storySvc;
        this.modal = modal;
        this.slideOpts = {
            slidesPerView: 1,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    centeredSlides: true
                }
            },
            grabCursor: true,
            lazy: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate() {
                    const swiper = this;
                    const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $ } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform$$1 = swiper.translate;
                    const center = isHorizontal
                        ? -transform$$1 + swiperWidth / 2
                        : -transform$$1 + swiperHeight / 2;
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth;
                    // Each slide offset from center
                    for (let i = 0, length = slides.length; i < length; i += 1) {
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const offsetMultiplier = ((center - slideOffset - slideSize / 2) / slideSize) *
                            params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
                        let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex =
                            -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal
                                ? $slideEl.find(".swiper-slide-shadow-left")
                                : $slideEl.find(".swiper-slide-shadow-top");
                            let $shadowAfterEl = isHorizontal
                                ? $slideEl.find(".swiper-slide-shadow-right")
                                : $slideEl.find(".swiper-slide-shadow-bottom");
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity =
                                    offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity =
                                    -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents ||
                        swiper.support.prefixedPointerEvents) {
                        const ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = `${center}px 50%`;
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left")
                        .transition(duration);
                }
            }
        };
        this.storiesOpts = {
            preloadImages: false,
            lazy: true,
            slidesPerView: 4.5,
            breakpoints: {
                1024: {
                    slidesPerView: 14.5
                }
            },
            grabCursor: true
        };
        this.groupedStories = [];
        this.hide = false;
        this.page = 0;
        this.ratio = -1;
        this.automatic = true;
        this.rangeValue = 1;
        this.users = undefined;
        this.showBackdrop = false;
        this.loading = true;
        this.extended = true;
        this.searchOptions = {
            identity: true,
            range: false,
            connection: false
        };
        this.searchOptionsChanged = false;
        this.paneSettings = {
            backdrop: true,
            bottomClose: true,
            buttonDestroy: false,
            handleKeyboard: false,
            breaks: {
                middle: { enabled: true, height: 500, bounce: true },
                bottom: { enabled: true, height: 300, bounce: true }
            },
            initialBreak: "middle",
            onBackdropTap: () => {
                var _a;
                this.pane.destroy({ animate: true });
                if (this.searchOptionsChanged) {
                    this.searchOptionsChanged = false;
                    this.loading = true;
                    this.page = 0;
                    this.users = undefined;
                    (_a = this.radarlist) === null || _a === void 0 ? void 0 : _a.scrollToTop(0);
                    this.getRadarUsers();
                }
            }
        };
        this.notificationSvc.notification.subscribe(notification => {
            this.counters = notification;
        });
        this.router.events.subscribe((event) => (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_17__.NavigationStart) {
                if (event.url === "/tabs/radar") {
                    this.getStories();
                }
            }
        }));
    }
    handleKeyboardEvent(event) {
        var _a;
        if (((_a = this.users) === null || _a === void 0 ? void 0 : _a.length) && this.router.url === "/tabs/radar") {
            switch (event.key) {
                case "ArrowRight":
                    this.slides.slideNext();
                    break;
                case "ArrowLeft":
                    this.slides.slidePrev();
                    break;
                case "Enter":
                    this.showProfile(this.user.id);
                    break;
            }
        }
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.users = (yield this.config.get("radar"));
        });
    }
    ngOnInit() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.authUser = this.auth.currentUserValue;
            // Una vez logueado iniciamos notificaciones si no están
            const device = yield this.deviceSvc.getCurrentDevice();
            if (!(device === null || device === void 0 ? void 0 : device.token)) {
                this.push.init();
            }
            // Y despues iniciamos la geolocalización
            if (!((_a = this.authUser.roles) === null || _a === void 0 ? void 0 : _a.includes("ROLE_DEMO"))) {
                try {
                    this.showBackdrop = true;
                    this.coordinates = yield this.geolocationSvc.getGeolocation();
                    this.showBackdrop = false;
                    const oldCoordinates = this.authUser.coordinates;
                    if (oldCoordinates === undefined ||
                        oldCoordinates.latitude === undefined ||
                        this.coordinates.latitude.toFixed(3) !==
                            (oldCoordinates === null || oldCoordinates === void 0 ? void 0 : oldCoordinates.latitude.toFixed(3)) ||
                        this.coordinates.longitude.toFixed(3) !==
                            (oldCoordinates === null || oldCoordinates === void 0 ? void 0 : oldCoordinates.longitude.toFixed(3))) {
                        const coordinates = yield this.userSvc.setCoordinates(this.coordinates.longitude, this.coordinates.latitude);
                        this.authUser.coordinates = coordinates;
                        this.auth.setAuthUser(this.authUser);
                    }
                }
                catch (e) {
                    console.error(e);
                    // tienes que aprobar permisos
                }
                this.authUser = this.auth.currentUserValue;
            }
            if (this.platform.is("cordova")) {
                this.firebase
                    .setUserId("" + this.authUser.id)
                    .then(() => console.log("User id successfully set"))
                    .catch(err => console.log("Error setting user id:", err));
                this.firebase
                    .setUserProperty("username", this.authUser.username)
                    .then(() => console.log("Username successfully set"))
                    .catch(err => console.log("Error setting username:", err));
                this.firebase
                    .setScreenName("radar")
                    .then(() => console.log("View successfully tracked"))
                    .catch(err => console.log("Error tracking view:", err));
            }
            const radar_config = (yield this.config.get("radar_config"));
            if ((radar_config === null || radar_config === void 0 ? void 0 : radar_config.extended) !== undefined) {
                this.extended = radar_config.extended;
            }
            if ((radar_config === null || radar_config === void 0 ? void 0 : radar_config.options) !== undefined) {
                this.searchOptions = radar_config.options;
            }
            if ((radar_config === null || radar_config === void 0 ? void 0 : radar_config.view) === "list") {
                this.view = "list";
                const range = radar_config === null || radar_config === void 0 ? void 0 : radar_config.range;
                if (range !== undefined) {
                    this.rangeValue = range;
                    this.ratio = this.getRatio(range);
                }
                else {
                    this.ratio = 50;
                }
            }
            else {
                this.view = "cards";
                this.ratio = -1;
                yield this.utils.delay(500);
                yield ((_b = this.slides) === null || _b === void 0 ? void 0 : _b.slideTo(0));
            }
            this.getRadarUsers();
            this.getStories();
        });
    }
    ionViewWillEnter() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (!((_a = this.users) === null || _a === void 0 ? void 0 : _a.length)) {
                if (this.authUser && this.authUser.id) {
                    this.auth.currentUser
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeWhile)(u => !!(u === null || u === void 0 ? void 0 : u.id)))
                        .subscribe((authUser) => (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
                        var _b, _c;
                        if ((_b = this.users) === null || _b === void 0 ? void 0 : _b.length) {
                            this.authUser = authUser;
                            this.page = 0;
                            const radar_config = (yield this.config.get("radar_config"));
                            if ((radar_config === null || radar_config === void 0 ? void 0 : radar_config.view) === "list") {
                                this.view = "list";
                                const range = radar_config === null || radar_config === void 0 ? void 0 : radar_config.range;
                                if (range) {
                                    this.range.value = range;
                                }
                                else {
                                    this.ratio = 50;
                                }
                            }
                            else {
                                yield ((_c = this.slides) === null || _c === void 0 ? void 0 : _c.slideTo(0));
                            }
                            this.getRadarUsers();
                        }
                    }));
                }
            }
        });
    }
    getRadarUsers(event) {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.page++;
                let resUsers = [];
                if (!this.extended) {
                    resUsers = yield this.userSvc.getRadarUsers(this.page, this.ratio);
                }
                else {
                    resUsers = yield this.userSvc.getRadarUsers(this.page, this.ratio, this.searchOptions);
                }
                this.loading = false;
                if (this.page === 1) {
                    this.config.set("radar", resUsers);
                }
                let users = resUsers;
                this.users =
                    this.page === 1 ? (this.users = users) : [...this.users, ...users];
                if (((_a = this.users) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    if (this.ratio === -1) {
                        if ((resUsers === null || resUsers === void 0 ? void 0 : resUsers.length) > 0 && !((_b = this.users) === null || _b === void 0 ? void 0 : _b.length)) {
                            this.users = [...this.users, ...resUsers];
                        }
                        if ((_c = this.users[0]) === null || _c === void 0 ? void 0 : _c.id) {
                            this.user = this.users[0];
                            this.userSvc.view(this.user.id);
                        }
                    }
                    else {
                        if (event) {
                            event.target.complete();
                            if (users.length < 15) {
                                event.target.disabled = true;
                            }
                        }
                    }
                }
                else if (this.range.value > -1 &&
                    this.range.value < 5 &&
                    this.automatic) {
                    let value = this.range.value;
                    value++;
                    this.range.value = value;
                }
                if (yield this.toast.getTop()) {
                    this.toast.dismiss();
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    getStories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            let stories = yield this.storySvc.getAllStories();
            stories = this.storySvc.orderStories(stories);
            if (!deep_equal__WEBPACK_IMPORTED_MODULE_4__(this.stories, stories)) {
                this.stories = stories;
                const groupedStories = this.storySvc.groupStories(stories);
                this.groupedStories = groupedStories;
            }
        });
    }
    newStory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_14__.StoryModal,
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal"
            });
            yield modal.present();
            yield modal.onDidDismiss();
            yield this.getStories();
        });
    }
    showStories(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            let stories = this.stories.reverse().filter(s => s.user.id === id);
            stories = [
                ...stories,
                ...this.stories.reverse().filter(s => s.user.id !== id)
            ];
            yield this.showStoriesModal(stories);
            yield this.getStories();
        });
    }
    showStory(story) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const stories = [story];
            yield this.showStoriesModal(stories);
            yield this.getStories();
        });
    }
    showStoriesModal(stories) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_15__.ViewStoriesModal,
                componentProps: { stories },
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal"
            });
            yield modal.present();
            yield modal.onDidDismiss();
        });
    }
    showAllStories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/story"]);
        });
    }
    showProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/profile", id]);
        });
    }
    search() {
        this.router.navigate(["/search"]);
    }
    notifications() {
        this.router.navigate(["/notification"]);
    }
    changeView() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.page = 0;
            this.users = undefined;
            let radar_config = (yield this.config.get("radar_config"));
            if (this.view === "cards") {
                this.view = "list";
                this.ratio = 50;
                if (radar_config) {
                    radar_config.view = this.view;
                    radar_config.range = this.rangeValue;
                }
                else {
                    radar_config = { view: this.view, range: this.rangeValue };
                }
            }
            else {
                this.view = "cards";
                this.ratio = -1;
                radar_config.view = this.view;
                radar_config.range = -1;
            }
            this.config.set("radar_config", radar_config);
            this.getRadarUsers();
        });
    }
    changeRatio(value) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (value !== this.range.value) {
                this.range.value = value;
            }
            else {
                if (((_a = this.users) === null || _a === void 0 ? void 0 : _a.length) < 15) {
                    this.radarAdv();
                }
                this.loading = true;
                this.ratio = this.getRatio(value);
                let radar_config = (yield this.config.get("radar_config"));
                radar_config.view = this.view;
                radar_config.range = value;
                this.config.set("radar_config", radar_config);
                (yield this.toast.create({
                    message: this.ratio < 25000
                        ? "Buscando personas a " + this.ratio + "km"
                        : "Buscando personas mundialmente",
                    position: "middle",
                    color: "secondary"
                })).present();
                this.page = 0;
                this.users = undefined;
                (_b = this.radarlist) === null || _b === void 0 ? void 0 : _b.scrollToTop(0);
                this.getRadarUsers();
            }
        });
    }
    hideProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const nextIndex = this.users.findIndex(u => u.id === id) + 1;
            this.user = this.users[nextIndex];
            const users = this.users;
            this.users = this.users.filter(u => u.id !== id);
            const toast = yield this.toast.create({
                message: "Has ocultado el usuario",
                duration: 3000,
                position: "bottom",
                buttons: [
                    {
                        text: "Deshacer",
                        handler: () => {
                            this.users = users;
                        }
                    }
                ]
            });
            toast.present();
            const log = yield toast.onDidDismiss();
            if (log.role === "timeout") {
                this.userSvc.hide(id);
            }
        });
    }
    onScroll($event) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if ($event && $event.detail && $event.detail.deltaY) {
                this.hide =
                    !($event.detail.deltaY < 0) &&
                        ((_a = this.users) === null || _a === void 0 ? void 0 : _a.length) > 10 &&
                        $event.detail.scrollTop > 200;
            }
        });
    }
    slide() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.slides.getActiveIndex().then(index => {
                var _a, _b, _c;
                this.user = this.users[index];
                if ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id) {
                    this.userSvc.view((_b = this.user) === null || _b === void 0 ? void 0 : _b.id);
                }
                if (index >= ((_c = this.users) === null || _c === void 0 ? void 0 : _c.length) - 10) {
                    this.getRadarUsers();
                }
                if (this.view === "cards" &&
                    this.page === 0 &&
                    this.user.distance >= 100) {
                    this.radarAdv();
                }
            });
        });
    }
    dragItem(event, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (event.detail.ratio > 1.8) {
                this.hideProfile(id);
            }
            else if (event.detail.ratio < -1.8) {
                yield event.target.close();
                this.showProfile(id);
            }
        });
    }
    getRatio(value) {
        switch (value) {
            case 0:
                return 10;
            case 1:
                return 50;
            case 2:
                return 100;
            case 3:
                return 500;
            case 4:
                return 1000;
            case 5:
                return 25000;
        }
    }
    radarAdv() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const radarAdv = this.config.get("radarAdv");
            if (!radarAdv) {
                const alert = yield this.alert.create({
                    header: "¿Pocas personas cerca tuya?",
                    message: "No llores, acabamos de lanzar la aplicación y aún no hemos llegado a todas partes. ¡Ayúdanos a crecer y conviértete en embajador de FrikiRadar compartiendo con tus amigas y amigos!",
                    buttons: [
                        {
                            text: "¡Compartir!",
                            handler: () => {
                                this.utils.share();
                            }
                        }
                    ],
                    cssClass: "round-alert"
                });
                this.config.set("radarAdv", true);
                yield alert.present();
            }
        });
    }
    filter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_3__.CupertinoPane(".radar-pane", this.paneSettings);
            const radar_config = (yield this.config.get("radar_config"));
            if (radar_config) {
                if (radar_config === null || radar_config === void 0 ? void 0 : radar_config.options) {
                    this.searchOptions = radar_config.options;
                }
                if (radar_config === null || radar_config === void 0 ? void 0 : radar_config.extended) {
                    this.extended = radar_config.extended;
                }
            }
            if (this.extended) {
                this.pane.present({ animate: true });
            }
            else {
                this.pane.present({ animate: true });
                yield this.utils.delay(100);
                this.pane.moveToBreak("bottom");
            }
        });
    }
    radarSearchChange(extended) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.searchOptionsChanged = true;
            this.extended = extended;
            let radar_config = (yield this.config.get("radar_config"));
            if (radar_config) {
                radar_config.extended = extended;
            }
            else {
                radar_config = { extended };
            }
            this.config.set("radar_config", radar_config);
            if (extended) {
                this.pane.moveToBreak("middle");
            }
            else {
                this.pane.moveToBreak("bottom");
            }
        });
    }
    radarSearchOptions(property, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.searchOptionsChanged = true;
            let radar_config = (yield this.config.get("radar_config"));
            if (radar_config === null || radar_config === void 0 ? void 0 : radar_config.options) {
                radar_config.options = this.searchOptions;
            }
            else {
                radar_config = { options: this.searchOptions };
            }
            radar_config.options[property] = value;
            this.config.set("radar_config", radar_config);
            this.searchOptions = radar_config.options;
        });
    }
};
RadarPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.MenuController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_5__.GeolocationService },
    { type: _services_device_service__WEBPACK_IMPORTED_MODULE_8__.DeviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ToastController },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_10__.ConfigService },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseX },
    { type: _services_push_service__WEBPACK_IMPORTED_MODULE_11__.PushService },
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_12__.NotificationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef },
    { type: _services_story_service__WEBPACK_IMPORTED_MODULE_13__.StoryService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController }
];
RadarPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: ["slides", { static: false },] }],
    range: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: ["range", { static: false },] }],
    radarlist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild, args: ["radarlist", { static: true },] }],
    handleKeyboardEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.HostListener, args: ["document:keydown", ["$event"],] }]
};
RadarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: "app-radar",
        template: _radar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_radar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__metadata)("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.MenuController,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router,
        _services_geolocation_service__WEBPACK_IMPORTED_MODULE_5__.GeolocationService,
        _services_device_service__WEBPACK_IMPORTED_MODULE_8__.DeviceService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ToastController,
        _services_config_service__WEBPACK_IMPORTED_MODULE_10__.ConfigService,
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseX,
        _services_push_service__WEBPACK_IMPORTED_MODULE_11__.PushService,
        _services_notification_service__WEBPACK_IMPORTED_MODULE_12__.NotificationService,
        _angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef,
        _services_story_service__WEBPACK_IMPORTED_MODULE_13__.StoryService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController])
], RadarPage);



/***/ }),

/***/ 74375:
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationService": () => (/* binding */ GeolocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 40287);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 55846);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _radar_request_geolocation_modal_request_geolocation_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../radar/request-geolocation-modal/request-geolocation.modal */ 33013);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ 70946);







let GeolocationService = class GeolocationService {
    constructor(modal, geolocation, config, locationAccuracy, platform, toastController) {
        this.modal = modal;
        this.geolocation = geolocation;
        this.config = config;
        this.locationAccuracy = locationAccuracy;
        this.platform = platform;
        this.toastController = toastController;
        this.notifications = [];
    }
    requestPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _radar_request_geolocation_modal_request_geolocation_modal__WEBPACK_IMPORTED_MODULE_2__.RequestGeolocationModal,
                backdropDismiss: false
            });
            yield modal.present();
            return yield modal.onDidDismiss();
        });
    }
    forcePermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _radar_request_geolocation_modal_request_geolocation_modal__WEBPACK_IMPORTED_MODULE_2__.RequestGeolocationModal,
                componentProps: { view: "force" },
                backdropDismiss: false
            });
            yield modal.present();
            return yield modal.onDidDismiss();
        });
    }
    getGeolocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const geoconfig = yield this.config.get("geolocation");
            if (geoconfig === true) {
                return yield this.getCoordinates();
            }
            else {
                yield this.requestPermission();
                return yield this.getCoordinates();
            }
        });
    }
    getCoordinates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                (yield this.toastController.create({
                    message: "Obteniendo tu ubicación",
                    position: "middle",
                    color: "secondary"
                })).present();
                if (this.platform.is("cordova")) {
                    yield this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_LOW_POWER);
                }
                const coordinates = yield this.geolocation.getCurrentPosition({
                    timeout: 15000,
                    maximumAge: 15000
                });
                const longitude = coordinates.coords.longitude;
                const latitude = coordinates.coords.latitude;
                this.config.set("geolocation", true);
                this.toastController.dismiss();
                return { longitude, latitude };
            }
            catch (e) {
                // this.config.set("geolocation", false);
                this.config.set("geolocation", true);
                this.toastController.dismiss();
                // await this.forcePermission();
                // return await this.getCoordinates();
                return { longitude: 0, latitude: 0 };
            }
        });
    }
};
GeolocationService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_1__.LocationAccuracy },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
GeolocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation,
        _config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService,
        _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_1__.LocationAccuracy,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController])
], GeolocationService);



/***/ }),

/***/ 16800:
/*!**************************************************!*\
  !*** ./src/app/radar/radar.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-slides {\n  display: flex;\n  height: 100%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-slide.swiper-slide-prev, ion-slide.swiper-slide-next {\n  opacity: 0.4;\n}\n\n#stories {\n  margin-bottom: 15px;\n}\n\nion-card {\n  --background: var(--ion-color-medium-dark);\n  overflow: auto;\n  border-radius: 25px;\n}\n\nion-card.md {\n  height: 97%;\n}\n\nion-card.ios {\n  height: 95%;\n}\n\nion-card-header {\n  text-align: left;\n  padding-bottom: 5px;\n}\n\nion-card-header ion-card-title {\n  color: white;\n}\n\nion-card-header ion-card-title ion-badge {\n  margin-right: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n}\n\nion-card-header ion-card-title .name {\n  font-size: 24px;\n}\n\nion-card-header ion-card-title .age {\n  font-size: 16px;\n}\n\nion-card-content {\n  min-height: 50%;\n  text-align: left;\n}\n\nion-card-content .description {\n  max-height: 37px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  white-space: normal;\n  white-space: initial;\n}\n\nion-card-content .tags {\n  margin-top: 10px;\n}\n\nion-card-content .tags ion-chip {\n  margin-left: 0;\n}\n\n.card-footer {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: -1px;\n  background: var(--ion-color-medium-dark);\n}\n\n.card-footer ion-icon {\n  margin-right: 15px;\n}\n\n.card-footer ion-label {\n  color: white;\n}\n\n.match {\n  position: absolute;\n  margin-top: -34px;\n  color: white;\n  font-size: 12px;\n  border: 2px solid white;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-left: 10px;\n  background-color: var(--ion-color-primary);\n  z-index: 1;\n  float: right;\n  right: 10px;\n}\n\nion-content ion-list ion-item-sliding ion-item {\n  --background: var(--ion-color-dark);\n}\n\nion-content ion-list ion-item-sliding ion-item ion-avatar.md {\n  width: 64px;\n  height: 64px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-avatar.ios {\n  width: 48px;\n  height: 48px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-avatar ion-badge {\n  position: relative;\n  left: 45px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #1f1f1f;\n  bottom: 25px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label {\n  width: 150px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label .name {\n  font-size: 24px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label.ios .description {\n  max-height: 30px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label.md .description {\n  max-height: 36px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label .description {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  color: #bbbbbb;\n  white-space: normal;\n  white-space: initial;\n}\n\nion-content ion-list ion-item-sliding ion-item .match-list {\n  color: white;\n  font-size: 12px;\n  border: 2px solid white;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-left: 10px;\n  background-color: var(--ion-color-primary);\n}\n\nion-content ion-list ion-item-sliding:first-child ion-item {\n  --background: var(--ion-color-primary);\n}\n\nion-content ion-list ion-item-sliding:first-child ion-item h2,\nion-content ion-list ion-item-sliding:first-child ion-item p {\n  color: white !important;\n}\n\nion-content ion-list ion-item-sliding:first-child ion-item .match-list {\n  background-color: white;\n  color: var(--ion-color-primary);\n  height: 60px;\n  width: 60px;\n  font-size: 13px;\n}\n\nion-content ion-list ion-item-sliding .item-options-end {\n  background-color: #f04041;\n}\n\nion-content ion-list ion-item-sliding ion-item-option ion-icon {\n  color: white;\n}\n\n#radar-range {\n  color: white;\n  background: rgba(var(--ion-color-medium-dark-rgb), 0.98);\n  border-radius: 30px;\n  width: 97%;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n}\n\n#radar-range ion-label,\n#radar-range ion-icon,\n#radar-range ion-col {\n  color: var(--ion-color-light) !important;\n}\n\n#radar-range ion-range {\n  padding-top: 0;\n  padding-bottom: 0;\n  --knob-size: 25px;\n}\n\n#radar-range #range-distance {\n  font-size: 12px;\n  text-align: end;\n  padding: 0;\n}\n\n#radar-range #range-distance ion-col {\n  padding-top: 0;\n}\n\n#radar-range.md {\n  transition: max-height 0.5s;\n  max-height: 100px;\n}\n\n#radar-range.md.hide-background {\n  max-height: 0;\n}\n\n.radar-pane {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0U7RUFFRSxZQUFBO0FBQUo7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsMENBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHRTtFQUNFLFdBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7QUFGSjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFLRTtFQUNFLFlBQUE7QUFISjs7QUFLSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSE47O0FBTUk7RUFDRSxlQUFBO0FBSk47O0FBT0k7RUFDRSxlQUFBO0FBTE47O0FBVUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFTRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUFBLG9CQUFBO0FBUEo7O0FBVUU7RUFDRSxnQkFBQTtBQVJKOztBQVNJO0VBQ0UsY0FBQTtBQVBOOztBQVlBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQVRGOztBQVdFO0VBQ0Usa0JBQUE7QUFUSjs7QUFZRTtFQUNFLFlBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWdCSTtFQUNFLG1DQUFBO0FBYk47O0FBZ0JRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFkVjs7QUFpQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWZWOztBQWtCUTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBaEJWOztBQW9CTTtFQUNFLFlBQUE7QUFsQlI7O0FBbUJRO0VBQ0UsZUFBQTtBQWpCVjs7QUFvQlE7RUFDRSxnQkFBQTtBQWxCVjs7QUFxQlE7RUFDRSxnQkFBQTtBQW5CVjs7QUFzQlE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUFBLG9CQUFBO0FBckJWOztBQXlCTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0FBdkJSOztBQTJCSTtFQUNFLHNDQUFBO0FBekJOOztBQTBCTTs7RUFFRSx1QkFBQTtBQXhCUjs7QUEyQk07RUFDRSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBekJSOztBQTZCSTtFQUNFLHlCQUFBO0FBM0JOOztBQThCSTtFQUNFLFlBQUE7QUE1Qk47O0FBaUNBO0VBQ0UsWUFBQTtFQUNBLHdEQUFBO0VBRUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBL0JGOztBQWlDRTs7O0VBR0Usd0NBQUE7QUEvQko7O0FBa0NFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFoQ0o7O0FBbUNFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBakNKOztBQW1DSTtFQUNFLGNBQUE7QUFqQ047O0FBc0NBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQW5DRjs7QUFvQ0U7RUFDRSxhQUFBO0FBbENKOztBQXNDQTtFQUNFLGFBQUE7QUFuQ0YiLCJmaWxlIjoicmFkYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgJi5zd2lwZXItc2xpZGUtcHJldixcbiAgJi5zd2lwZXItc2xpZGUtbmV4dCB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbiNzdG9yaWVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyayk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gICYubWQge1xuICAgIGhlaWdodDogOTclO1xuICB9XG5cbiAgJi5pb3Mge1xuICAgIGhlaWdodDogOTUlO1xuICB9XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGlvbi1iYWRnZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAuZGVzY3JpcHRpb24ge1xuICAgIG1heC1oZWlnaHQ6IDM3cHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gIH1cblxuICAudGFncyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBpb24tY2hpcCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWRhcmspO1xuXG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4ubWF0Y2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0zNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHotaW5kZXg6IDE7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3QgaW9uLWl0ZW0tc2xpZGluZyB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG5cbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAmLm1kIHtcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlvcyB7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbGVmdDogNDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZjFmMWY7XG4gICAgICAgICAgYm90dG9tOiAyNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaW9zIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWQgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGNvbG9yOiAjYmJiYmJiO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tYXRjaC1saXN0IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBoMixcbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLm1hdGNoLWxpc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLW9wdGlvbnMtZW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDQwNDE7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0tb3B0aW9uIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuI3JhZGFyLXJhbmdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tZGFyay1yZ2IpLCAwLjk4KTtcbiAgLy8gYmFja2dyb3VuZDogIzI5MjkyOWY4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogOTclO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgaW9uLWxhYmVsLFxuICBpb24taWNvbixcbiAgaW9uLWNvbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1yYW5nZSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgLS1rbm9iLXNpemU6IDI1cHg7XG4gIH1cblxuICAjcmFuZ2UtZGlzdGFuY2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGlvbi1jb2wge1xuICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICB9XG59XG5cbiNyYWRhci1yYW5nZS5tZCB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cztcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gICYuaGlkZS1iYWNrZ3JvdW5kIHtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICB9XG59XG5cbi5yYWRhci1wYW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 22126:
/*!**************************************************!*\
  !*** ./src/app/radar/radar.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>frikiradar</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"changeView()\" *ngIf=\"users\">\n        <ion-icon\n          slot=\"icon-only\"\n          [name]=\"view === 'cards' ? 'list' : 'albums'\"\n        ></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"filter()\">\n        <ion-icon slot=\"icon-only\" name=\"filter\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"search()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"notifications()\">\n        <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n        <ion-badge slot=\"end\" color=\"primary\" *ngIf=\"counters?.notifications\"\n          >{{ counters.notifications }}</ion-badge\n        >\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content #radarlist [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <section>\n    <ion-slides id=\"stories\" [options]=\"storiesOpts\" mode=\"md\">\n      <ion-slide>\n        <div>\n          <ion-item button lines=\"none\" (click)=\"newStory()\">\n            <ion-avatar>\n              <img\n                [src]=\"auth.currentUserValue?.thumbnail\"\n                alt=\"auth.currentUserValue?.name\"\n              />\n              <ion-badge color=\"tertiary\">+</ion-badge>\n            </ion-avatar>\n          </ion-item>\n          <ion-label>Añadir</ion-label>\n        </div>\n      </ion-slide>\n      <ion-slide *ngFor=\"let story of groupedStories; let i = index\">\n        <div>\n          <ion-item button lines=\"none\" (click)=\"showStories(story.user.id)\">\n            <ion-avatar [ngClass]=\"story?.viewed ? '' : 'not-view'\">\n              <img [src]=\"story.image\" [alt]=\"story.text\" />\n            </ion-avatar>\n          </ion-item>\n          <ion-label>{{story.user.username}}</ion-label>\n        </div>\n      </ion-slide>\n      <ion-slide *ngIf=\"groupedStories?.length\">\n        <div>\n          <ion-item button lines=\"none\" (click)=\"showAllStories()\">\n            <ion-avatar>\n              <img\n                [src]=\"auth.currentUserValue?.thumbnail\"\n                alt=\"auth.currentUserValue?.name\"\n              />\n            </ion-avatar>\n          </ion-item>\n          <ion-label>Ver todas</ion-label>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </section>\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"loading\"></ion-progress-bar>\n  <div *ngIf=\"view === 'cards'\" style=\"height: 100%\">\n    <ion-slides #slides (ionSlideDidChange)=\"slide()\" [options]=\"slideOpts\">\n      <ion-slide *ngIf=\"!users || loading\">\n        <ion-card button>\n          <ion-card-header>\n            <ion-skeleton-text\n              animated\n              style=\"height: 400px; width: 100%\"\n            ></ion-skeleton-text>\n            <ion-card-title>\n              <ion-skeleton-text\n                animated\n                style=\"height: 20px; width: 50%\"\n              ></ion-skeleton-text>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content\n            ><p>\n              <ion-skeleton-text\n                animated\n                style=\"width: 100%\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\"width: 100%\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\"width: 100%\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\"width: 50%\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\"width: 50%\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\"width: 50%\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\"width: 80%\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\"width: 100%\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\"width: 100%\"\n              ></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide *ngFor=\"let user of users;\">\n        <ion-card (click)=\"showProfile(user.id)\" class=\"no-scroll\" button>\n          <img\n            [src]=\"user?.avatar\"\n            [alt]=\"users?.username\"\n            default=\"/assets/img/users/default.jpg\"\n          />\n          <div class=\"match full-center\">{{ user.match }}%</div>\n          <ion-card-header>\n            <ion-card-title>\n              <ion-badge\n                *ngIf=\"(user?.last_login | niceDate) === 'Ahora mismo'\"\n                color=\"secondary\"\n                >&nbsp;</ion-badge\n              >\n              <ion-text class=\"name\" color=\"light\">{{ user.name }}</ion-text>\n              <ion-text class=\"age\" color=\"light\">, {{ user.age }}</ion-text>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p class=\"description\">\n              <ion-text color=\"light\">{{user.description}}</ion-text>\n            </p>\n            <div class=\"tags\" *ngIf=\"user?.common_tags?.length\">\n              <p><ion-text color=\"light\">Gustos en común:</ion-text></p>\n              <ion-chip *ngFor=\"let tag of user.common_tags\" color=\"secondary\">\n                <ion-label>{{ tag }}</ion-label>\n              </ion-chip>\n            </div>\n            <!--<div>\n              <h2>Buscando:</h2>\n              <p>{{user?.connection}}</p>\n            </div>-->\n          </ion-card-content>\n          <ion-row class=\"card-footer\">\n            <ion-col>\n              <ion-item *ngIf=\"user.distance !== undefined\" lines=\"none\">\n                <ion-icon\n                  name=\"location-sharp\"\n                  slot=\"start\"\n                  color=\"secondary\"\n                ></ion-icon>\n                <ion-label>\n                  <ion-text color=\"light\"\n                    >A {{ user.distance }}km de distancia</ion-text\n                  >\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-slide>\n      <ion-slide *ngIf=\"!loading\">\n        <div class=\"full-center ion-padding\">\n          <ion-icon name=\"location\"></ion-icon>\n          <h2>Sin resultados</h2>\n          <p>\n            Modifica tus ajustes de \"Estoy buscando...\" en tu configuración de\n            perfil y añade más \"Gustos frikis\" para mejorar los resultados.\n          </p>\n          <ion-button shape=\"round\" (click)=\"router.navigate(['/edit-profile'])\"\n            >Editar mi perfil</ion-button\n          >\n          <br />\n          <p>\n            También puedes probar suerte cambiando a la vista por kilómetros\n          </p>\n          <ion-button shape=\"round\" (click)=\"changeView()\"\n            ><ion-icon name=\"list\" slot=\"start\" size=\"small\"></ion-icon>Cambiar\n            a vista por kilómetros</ion-button\n          >\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div *ngIf=\"view === 'list'\" style=\"height: 100%\">\n    <!--<p class=\"ion-padding\">\n        Estos son los resultados obtenidos\n        <span *ngIf=\"ratio <= 1000\"> un radio de {{ ratio }}km</span><span *ngIf=\"ratio > 1000\">mundialmente</span> con un\n        porcentaje de\n        coincidencia más alto.\n      </p>-->\n    <ion-list *ngIf=\"!users\">\n      <ion-item *ngFor=\"let i of [].constructor(8)\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h2>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h2>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"users?.length > 0\">\n      <ion-item-sliding\n        *ngFor=\"let user of users; \"\n        (ionDrag)=\"dragItem($event, user.id)\"\n      >\n        <ion-item-options side=\"start\">\n          <ion-item-option (click)=\"showProfile(user.id)\">\n            <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n        <ion-item button (click)=\"showProfile(user.id)\">\n          <ion-avatar slot=\"start\">\n            <img\n              [src]=\"user?.thumbnail\"\n              default=\"/assets/img/users/default.jpg\"\n            />\n            <ion-badge\n              *ngIf=\"(user?.last_login | niceDate) === 'Ahora mismo'\"\n              color=\"secondary\"\n              >&nbsp;</ion-badge\n            >\n          </ion-avatar>\n          <ion-label>\n            <h2>\n              <span class=\"name\">{{ user.name }}</span>\n              <span class=\"age\">, {{ user.age }}</span>\n            </h2>\n            <p class=\"description\">{{ user.description }}</p>\n          </ion-label>\n          <div class=\"match-list full-center\" slot=\"end\">{{ user.match }}%</div>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option\n            color=\"danger\"\n            (click)=\"hideProfile(user.id)\"\n            expandable\n          >\n            <ion-icon slot=\"icon-only\" name=\"close-circle\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n      <ion-infinite-scroll\n        threshold=\"50%\"\n        (ionInfinite)=\"getRadarUsers($event)\"\n        position=\"bottom\"\n      >\n        <ion-infinite-scroll-content loadingSpinner=\"dots\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n    <div\n      class=\"full-center ion-padding\"\n      *ngIf=\"users?.length === 0 && (!automatic || ratio === 25000)\"\n    >\n      <ion-icon name=\"location\"></ion-icon>\n      <h2>Sin resultados</h2>\n      <p>\n        Modifica tus ajustes de \"Estoy buscando...\" en tu configuración de\n        perfil y añade tus \"Gustos frikis\" para mejorar los resultados.\n      </p>\n      <ion-button shape=\"round\" (click)=\"router.navigate(['/edit-profile'])\"\n        >Editar perfil</ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n<ion-footer\n  id=\"radar-range\"\n  *ngIf=\"view === 'list'\"\n  [class.hide-background]=\"hide || loading\"\n>\n  <ion-range\n    mode=\"md\"\n    #range\n    min=\"0\"\n    max=\"5\"\n    step=\"1\"\n    snaps=\"true\"\n    [debounce]=\"250\"\n    [value]=\"rangeValue\"\n    (ionChange)=\"changeRatio($event.detail.value)\"\n    (click)=\"automatic = false\"\n  >\n    <ion-label slot=\"start\">10km</ion-label>\n    <ion-icon slot=\"end\" name=\"globe\" size=\"small\"></ion-icon>\n  </ion-range>\n  <ion-grid id=\"range-distance\">\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>50km</ion-col>\n      <ion-col>100km</ion-col>\n      <ion-col>500km</ion-col>\n      <ion-col>1000km</ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n<!-- panes -->\n\n<div class=\"radar-pane\">\n  <ion-item lines=\"full\">\n    <ion-label class=\"ion-text-center\">Filtros de radar</ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-label *ngIf=\"!extended\">Búsqueda estricta</ion-label>\n      <ion-label *ngIf=\"extended\">Búsqueda ampliada</ion-label>\n      <ion-toggle\n        [ngModel]=\"extended\"\n        (ngModelChange)=\"radarSearchChange($event)\"\n      ></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\" *ngIf=\"!extended\">\n        <p>\n          Se tiene en cuenta tu configuración del perfil en la búsqueda\n          (identidad de género, rango de edad y tipo de conexión).\n        </p>\n      </ion-label>\n      <ion-label class=\"ion-text-wrap\" *ngIf=\"extended\">\n        <p>\n          No se tiene en cuenta tu configuración del perfil en la búsqueda. Se\n          obtienen todos los resultados posibles.\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item-group *ngIf=\"extended\">\n      <ion-item lines=\"none\" *ngIf=\"auth.currentUserValue?.lovegender\">\n        <ion-label>\n          <h2>Identidad de género</h2>\n          <p>{{auth.currentUserValue?.lovegender}}</p>\n        </ion-label>\n        <ion-toggle\n          [ngModel]=\"searchOptions?.identity\"\n          (ngModelChange)=\"radarSearchOptions('identity', $event)\"\n        ></ion-toggle>\n      </ion-item>\n      <ion-item\n        lines=\"none\"\n        *ngIf=\"auth.currentUserValue?.minage && auth.currentUserValue?.maxage\"\n      >\n        <ion-label>\n          <h2>Rango de edad</h2>\n          <p>\n            {{auth.currentUserValue?.minage}} -\n            {{auth.currentUserValue?.maxage}}\n          </p>\n        </ion-label>\n        <ion-toggle\n          [ngModel]=\"searchOptions?.range\"\n          (ngModelChange)=\"radarSearchOptions('range', $event)\"\n        ></ion-toggle>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"auth.currentUserValue?.connection?.length\">\n        <ion-label>\n          <h2>Tipo de conexión</h2>\n          <p>{{auth.currentUserValue?.connection}}</p>\n        </ion-label>\n        <ion-toggle\n          [ngModel]=\"searchOptions?.connection\"\n          (ngModelChange)=\"radarSearchOptions('connection', $event)\"\n        ></ion-toggle>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</div>\n\n<ion-backdrop visible=\"true\" *ngIf=\"showBackdrop\"></ion-backdrop>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_radar_radar_module_ts.js.map