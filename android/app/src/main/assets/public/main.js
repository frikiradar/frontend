(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/admin.guard */ 31896);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _guards_tab_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/tab.guard */ 77458);






const routes = [
    {
        path: "",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _guards_tab_guard__WEBPACK_IMPORTED_MODULE_2__.TabGuard]
    },
    {
        path: "login",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: "edit-profile",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-profile_edit-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-profile/edit-profile.module */ 71241)).then(m => m.EditProfilePageModule)
    },
    {
        path: "profile",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    },
    {
        path: "profile/:id",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    },
    {
        path: "notification",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 22154)).then(m => m.NotificationPageModule)
    },
    {
        path: "chat",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chat/chat.module */ 20818)).then(m => m.ChatPageModule)
    },
    {
        path: "chat/:id",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chat/chat.module */ 20818)).then(m => m.ChatPageModule)
    },
    {
        path: "rooms",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_deep-equal_index_js"), __webpack_require__.e("src_app_room_rooms_rooms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./room/rooms/rooms.module */ 60946)).then(m => m.RoomsPageModule)
    },
    {
        path: "room/:slug",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_room_room_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./room/room.module */ 82036)).then(m => m.RoomPageModule)
    },
    {
        path: "search",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 24682)).then(m => m.SearchPageModule)
    },
    {
        path: "search/:query",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 24682)).then(m => m.SearchPageModule)
    },
    {
        path: "settings",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
    },
    {
        path: "admin",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 77095)).then(m => m.AdminPageModule),
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AdminGuard]
    },
    {
        path: "story",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_deep-equal_index_js"), __webpack_require__.e("src_app_story_story_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./story/story.module */ 86032)).then(m => m.StoryPageModule)
    },
    {
        path: "page/:slug",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_page_page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/page/page.module */ 47311)).then(m => m.PagePageModule)
    },
    {
        path: "pages",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_deep-equal_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(m => m.PagesPageModule)
    },
    {
        path: "ambassador",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ambassador_ambassador_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ambassador/ambassador.module */ 63496)).then(m => m.AmbassadorPageModule)
    },
    {
        path: "patreon",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_patreon_patreon_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./patreon/patreon.module */ 56919)).then(m => m.PatreonPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    },
    {
        path: "patreon/",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_patreon_patreon_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./patreon/patreon.module */ 56919)).then(m => m.PatreonPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    },
    {
        path: "rules",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_rules_rules_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rules/rules.module */ 58869)).then(m => m.RulesPageModule)
    },
    {
        path: "event/:id",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_events_event_event_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./events/event/event.module */ 59097)).then(m => m.EventPageModule)
    },
    {
        path: ":id",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
                relativeLinkResolution: "legacy",
                useHash: false
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ 12115);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/code-push/ngx */ 91637);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/config.service */ 70946);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/utils.service */ 88270);
/* harmony import */ var _services_push_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/push.service */ 52314);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/navigation.service */ 89565);
/* harmony import */ var _services_sw_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/sw.service */ 70018);
















let AppComponent = class AppComponent {
    constructor(auth, alert, router, network, splashScreen, platform, utils, config, launchReview, appVersion, push, codePush, nav, sw, toast, toastUpdate) {
        this.auth = auth;
        this.alert = alert;
        this.router = router;
        this.network = network;
        this.splashScreen = splashScreen;
        this.platform = platform;
        this.utils = utils;
        this.config = config;
        this.launchReview = launchReview;
        this.appVersion = appVersion;
        this.push = push;
        this.codePush = codePush;
        this.nav = nav;
        this.sw = sw;
        this.toast = toast;
        this.toastUpdate = toastUpdate;
        this.internet = true;
        this.initializeApp();
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                if (this.platform.is("cordova")) {
                    this.push.init();
                    this.splashScreen.hide();
                    this.checkCodePush();
                }
                else {
                    if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
                        this.push.init();
                    }
                    this.sw.init();
                }
                this.loadConfig();
                this.networkStatus();
                this.nav.backButtonStatus();
                // Obtenemos tema en configuración local. Si no hay le mandamos el dark
                let theme = (yield this.config.get("theme"));
                if (!theme) {
                    theme = "dark";
                }
                this.utils.toggleTheme(theme);
                if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
                    const user = yield this.auth.getAuthUser();
                    this.auth.setAuthUser(user);
                    // Contar veces abierto
                    this.countOpenTimes();
                }
                else {
                    // this.betaAdvertisement();
                }
            }));
        });
    }
    networkStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.network.onConnect().subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                if (!this.internet) {
                    (yield this.toast.create({
                        message: "¡Conexión a internet restablecida!",
                        duration: 2000,
                        position: "bottom",
                        color: "success"
                    })).present();
                    this.internet = true;
                }
            }));
            this.network.onDisconnect().subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.toast.create({
                    message: "¡Te has quedado sin internet!",
                    duration: 5000,
                    position: "bottom",
                    color: "danger"
                })).present();
                this.internet = false;
            }));
        });
    }
    checkCodePush() {
        let syncOptions;
        if (this.auth.isAdmin()) {
            syncOptions = {
                updateDialog: {
                    updateTitle: "¡Nueva actualización!",
                    optionalUpdateMessage: "Hay una actualización disponible. ¿Quieres actualizar?",
                    mandatoryUpdateMessage: "Hay una actualización obligatoria disponible",
                    descriptionPrefix: "",
                    mandatoryContinueButtonLabel: "Instalar",
                    optionalIgnoreButtonLabel: "Más tarde",
                    optionalInstallButtonLabel: "Instalar",
                    appendReleaseDescription: false
                },
                installMode: _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_5__.InstallMode.IMMEDIATE
            };
        }
        else {
            syncOptions = {
                updateDialog: false,
                installMode: _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_5__.InstallMode.ON_NEXT_RESTART
            };
        }
        this.codePush.sync(syncOptions).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log("CODE PUSH SUCCESSFUL: " + data);
        }), err => {
            console.log("CODE PUSH ERROR: " + err);
        });
    }
    countOpenTimes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const config = yield this.config.getConfig();
            this.config.setConfig(config);
            let openTimes;
            if (config) {
                openTimes = config.openTimes ? ++config.openTimes : 1;
            }
            else {
                openTimes = this.auth.currentUserValue.num_logins++;
            }
            this.config.set("openTimes", openTimes);
            if (openTimes === 7) {
                const alert = yield this.alert.create({
                    header: "¡Conviértete en embajador 🐲!",
                    message: "Únete al Patreon de embajadores de FrikiRadar y conseguirás ventajas exclusivas. ¡Infórmate!",
                    buttons: [
                        {
                            text: "¡Quiero informarme!",
                            handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                                this.router.navigate(["/ambassador"]);
                            })
                        }
                    ],
                    cssClass: "round-alert"
                });
                yield alert.present();
            }
            else if (openTimes >= 3 &&
                !config.review &&
                this.platform.is("cordova")) {
                const alert = yield this.alert.create({
                    header: "¡Únete a la batalla!",
                    message: "¿Qué te parece FrikiRadar? Déjanos tu valoración de 5 estrellas y una sugerencia para que cada vez más personas formen parte de esta gran comunidad.",
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: "Sí, ¡cuenta conmigo! 🏹",
                            handler: () => {
                                config.review = true;
                                this.config.setConfig(config);
                                if (this.launchReview.isRatingSupported()) {
                                    this.launchReview.rating().toPromise().then();
                                }
                                else {
                                    this.launchReview.launch();
                                }
                            }
                        },
                        {
                            text: "La próxima vez mejor 🙏"
                        },
                        {
                            text: "Mmm, mejor no 🙈",
                            handler: () => {
                                config.review = true;
                                this.config.setConfig(config);
                            }
                        }
                    ],
                    cssClass: "round-alert"
                });
                yield alert.present();
            }
        });
    }
    betaAdvertisement() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: "¡Con tu ayuda seguiremos creciendo!",
                message: "FrikiRadar acaba de comenzar su andadura y aún le queda un largo camino por delante. Por eso agradecemos tu ayuda dando a conocer FrikiRadar y compartiendo con tus amigos.",
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
            yield alert.present();
        });
    }
    loadConfig() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const maintenanceAlert = yield this.alert.create({
                header: "En mantenimiento",
                message: "😅 Ups... Estamos haciendo ajustes en nuestros servidores. Por favor, regresa en unos minutos. No te preocupes, todo continuará tal y como estaba.",
                backdropDismiss: false,
                buttons: [
                    {
                        text: "Oki doki",
                        handler: () => {
                            if (this.platform.is("cordova")) {
                                navigator["app"].exitApp();
                            }
                            else {
                                window.open("", "_parent", "");
                                window.close();
                            }
                        }
                    }
                ],
                cssClass: "round-alert"
            });
            try {
                const config = yield this.config.getConfig(true);
                if (this.platform.is("cordova")) {
                    let version = +(yield this.appVersion.getVersionNumber()).replace(".", "");
                    // Debe tener 3 digitos, por eso mayor o igual a 100
                    version = version >= 100 ? version : version * 10;
                    if (version < +config.min_version) {
                        const versionAlert = yield this.alert.create({
                            header: "Versión obsoleta",
                            message: "La versión de FrikiRadar que tienes instalada no soporta las últimas funcionalidades. Es necesario actualizar la app para seguir utilizándola.",
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: "ACTUALIZAR",
                                    handler: () => {
                                        this.launchReview.launch().then();
                                    }
                                }
                            ],
                            cssClass: "round-alert"
                        });
                        versionAlert.present();
                    }
                    else {
                        const oldVersion = yield this.config.get("version");
                        if (+version > (!Number.isNaN(oldVersion) ? +oldVersion : 0)) {
                            this.config.set("version", version);
                        }
                    }
                }
                else if (config.maintenance) {
                    maintenanceAlert.present();
                }
            }
            catch (e) {
                maintenanceAlert.present();
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__.Network },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService },
    { type: _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_2__.LaunchReview },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_1__.AppVersion },
    { type: _services_push_service__WEBPACK_IMPORTED_MODULE_9__.PushService },
    { type: _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_5__.CodePush },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavService },
    { type: _services_sw_service__WEBPACK_IMPORTED_MODULE_11__.SwService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: "app-root",
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router,
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__.Network,
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService,
        _services_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService,
        _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_2__.LaunchReview,
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_1__.AppVersion,
        _services_push_service__WEBPACK_IMPORTED_MODULE_9__.PushService,
        _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_5__.CodePush,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavService,
        _services_sw_service__WEBPACK_IMPORTED_MODULE_11__.SwService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController])
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/es */ 92403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 85209);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 42697);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ 34344);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 20593);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 40287);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 82027);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ 12115);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17265);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 55846);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 96772);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 59076);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ 58195);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var ngx_linky__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-linky */ 74802);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 25033);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 27353);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 71695);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-image-cropper */ 67545);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_fire_compat_messaging___WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/fire/compat/messaging/ */ 76637);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-webcam */ 19839);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/service-worker */ 64933);
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/media/ngx */ 21295);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/code-push/ngx */ 91637);
/* harmony import */ var src_helpers_ionicgesture_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/helpers/ionicgesture.config */ 49067);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../helpers/error.interceptor */ 99934);
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../helpers/jwt.interceptor */ 56638);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _options_popover_options_popover__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./options-popover/options-popover */ 49308);
















































// registrar los locales con el nombre que quieras utilizar a la hora de proveer
(0,_angular_common__WEBPACK_IMPORTED_MODULE_31__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_0__["default"], "es");
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_32__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_33__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_28__.AppComponent, _options_popover_options_popover__WEBPACK_IMPORTED_MODULE_30__.OptionsPopover],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_35__.IonicModule.forRoot({ animated: true }),
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_36__.PickerModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_27__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__.SharedModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_39__.BrowserAnimationsModule,
            ngx_linky__WEBPACK_IMPORTED_MODULE_40__.LinkyModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.HammerModule,
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_41__.NgxIonicImageViewerModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_42__.ImageCropperModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__.ServiceWorkerModule.register("ngsw-worker.js", {
                enabled: true,
            }),
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_44__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_24__.environment.firebase),
            _angular_fire_compat_messaging___WEBPACK_IMPORTED_MODULE_45__.AngularFireMessagingModule,
            ngx_webcam__WEBPACK_IMPORTED_MODULE_46__.WebcamModule,
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_15__.StatusBar,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_47__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_35__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HTTP_INTERCEPTORS, useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_26__.JwtInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HTTP_INTERCEPTORS, useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_25__.ErrorInterceptor, multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_33__.LOCALE_ID, useValue: "es" },
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.HAMMER_GESTURE_CONFIG, useClass: src_helpers_ionicgesture_config__WEBPACK_IMPORTED_MODULE_23__.IonicGestureConfig },
            {
                provide: _angular_service_worker__WEBPACK_IMPORTED_MODULE_43__.SwRegistrationOptions,
                useFactory: () => ({ enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_24__.environment.production }),
            },
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device,
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__.Network,
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_16__.Vibration,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__.Geolocation,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_14__.SplashScreen,
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Clipboard,
            _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_9__.LaunchReview,
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__.Keyboard,
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__.LocalNotifications,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_1__.AndroidPermissions,
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__.SocialSharing,
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__.AppVersion,
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__.WebView,
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__.Diagnostic,
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_11__.LocationAccuracy,
            _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_17__.BrowserTab,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_18__.InAppBrowser,
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_19__.FirebaseX,
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_20__.Media,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_21__.File,
            _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_22__.CodePush,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_28__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 87209:
/*!********************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlayerComponent": () => (/* binding */ AudioPlayerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _audio_player_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio-player.component.html?ngResource */ 13680);
/* harmony import */ var _audio_player_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio-player.component.scss?ngResource */ 35253);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! howler */ 71960);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils.service */ 88270);







let AudioPlayerComponent = class AudioPlayerComponent {
    constructor(utils) {
        this.utils = utils;
        this.player = null;
        this.downloading = false;
        this.downloaded = false;
        this.isPlaying = false;
        this.progress = 0;
        this.duration = 0;
    }
    ngOnInit() { }
    download() {
        this.downloading = true;
        this.start();
    }
    start() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.player) {
                this.player.stop();
            }
            const src = yield this.utils.getDataURI(this.src);
            this.player = new howler__WEBPACK_IMPORTED_MODULE_2__.Howl({
                src,
                html5: true,
                onplay: () => {
                    this.isPlaying = true;
                    this.updateProgress();
                },
                onend: () => {
                    this.isPlaying = false;
                    this.progress = 0;
                }
            });
            setTimeout(() => {
                this.duration = this.player.duration();
                this.timeDuration = this.timeToString(this.duration);
                this.timeProgress = this.timeDuration;
                this.downloading = false;
                this.downloaded = true;
            }, 2000);
        });
    }
    togglePlayer(pause) {
        if (!this.player) {
            return;
        }
        this.isPlaying = !pause;
        if (pause) {
            this.player.pause();
        }
        else {
            this.player.play();
            this.duration = this.player.duration();
        }
    }
    seek() {
        let newValue = this.range.value;
        this.player.seek(this.duration * (newValue / 100));
    }
    updateProgress() {
        let seek = this.player.seek();
        this.progress = (seek / this.player.duration()) * 100 || 0;
        this.timeProgress = this.timeToString(seek);
        setTimeout(() => {
            if (this.isPlaying) {
                this.updateProgress();
            }
        }, 100);
    }
    timeToString(time) {
        const duration = Math.round(time);
        const minutes = Math.floor(duration / 60);
        const seconds = duration - minutes * 60;
        let minutesString = "" + minutes;
        if (minutes < 10) {
            minutesString = "0" + minutesString;
        }
        let secondsString = "" + seconds;
        if (seconds < 10) {
            secondsString = "0" + seconds;
        }
        return minutesString + ":" + secondsString;
    }
};
AudioPlayerComponent.ctorParameters = () => [
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
AudioPlayerComponent.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    range: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["range", { static: false },] }]
};
AudioPlayerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "audio-player",
        template: _audio_player_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_audio_player_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService])
], AudioPlayerComponent);



/***/ }),

/***/ 64581:
/*!***********************************!*\
  !*** ./src/app/chat-date.pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatDatePipe": () => (/* binding */ ChatDatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



let ChatDatePipe = class ChatDatePipe {
    transform(value) {
        return convertToChatDate(value);
    }
};
ChatDatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "chatDate"
    })
], ChatDatePipe);

function convertToChatDate(time) {
    const date = new Date(time);
    const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe("es-ES");
    const today = new Date();
    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const daydiff = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) /
        (1000 * 60 * 60 * 24));
    return ((daydiff === 0 &&
        ((diff < 300 && "Ahora mismo") ||
            (diff >= 300 && "Hoy, " + datePipe.transform(time, "HH:mm")))) ||
        (daydiff === 1 && "Ayer, " + datePipe.transform(time, "HH:mm")) ||
        (daydiff < 8 &&
            "Hace " + daydiff + " días, " + datePipe.transform(time, "HH:mm")) ||
        (daydiff < 30 &&
            datePipe.transform(time, "d 'de' MMMM', '" + datePipe.transform(time, "HH:mm"))) ||
        datePipe.transform(time, "d MMM 'de' yyyy', '" + datePipe.transform(time, "HH:mm")));
}


/***/ }),

/***/ 45999:
/*!*********************************************************!*\
  !*** ./src/app/chat/chat-input/chat-input.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatInputComponent": () => (/* binding */ ChatInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chat_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-input.component.html?ngResource */ 47622);
/* harmony import */ var _chat_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-input.component.scss?ngResource */ 35900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ 21295);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 82027);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ 88270);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/// <reference types="@types/dom-mediacapture-record" />















let ChatInputComponent = class ChatInputComponent {
    constructor(formBuilder, auth, keyboard, platform, androidPermissions, sheet, utils, userSvc, sanitizer, file, webview, media) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.keyboard = keyboard;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.sheet = sheet;
        this.utils = utils;
        this.userSvc = userSvc;
        this.sanitizer = sanitizer;
        this.file = file;
        this.webview = webview;
        this.media = media;
        this.onWriting = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.editingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter(true);
        this.replyingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter(true);
        this.onCreateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.emojis = false;
        this.recording = false;
        this.countRecordingString = "0m 0s";
        this.recorded = false;
        this.replying = false;
        this.editing = false;
        this.inputAt = false;
        this.userMentions = [];
        this.writing = false;
        this.chatForm = formBuilder.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])
        });
    }
    get message() {
        return this.chatForm.get("message");
    }
    onPaste(event) {
        console.log(event);
    }
    ngOnChanges(changes) {
        // console.log(changes);
        if (changes["editing"] &&
            !changes["editing"].firstChange &&
            changes["editing"].currentValue) {
            if (this.replying) {
                this.closeReplying();
            }
            this.message.setValue(this.selectedMessage.text);
            this.focusTextArea();
        }
        if (changes["replying"] &&
            !changes["replying"].firstChange &&
            changes["replying"].currentValue) {
            if (this.editing) {
                this.closeEdit();
            }
            this.focusTextArea();
        }
        if (changes["selectedMessage"] && !changes["selectedMessage"].firstChange) {
            if (this.editing) {
                this.closeEdit();
            }
            if (this.replying) {
                this.closeReplying();
            }
        }
    }
    openEmojis() {
        this.keyboard.setKeyboardStyle;
        this.emojis = !this.emojis;
        if (this.emojis) {
            if (this.platform.is("cordova")) {
                this.keyboard.hide();
            }
        }
        else {
            this.focusTextArea();
        }
    }
    addEmoji(event) {
        this.message.setValue((this.message.value ? this.message.value : "") + event.emoji.native);
    }
    closeEdit() {
        this.editing = false;
        this.message.setValue("");
        this.editingChange.emit(this.editing);
    }
    closeReplying() {
        this.replying = false;
        this.replyingChange.emit(this.replying);
    }
    sendMessage() {
        var _a;
        this.recorded = false;
        this.emojis = false;
        const message = {
            text: this.message.value ? this.message.value.trim() : "",
            image: this.image,
            audio: this.audio,
            mentions: this.userMentions
        };
        this.onSubmit.emit(message);
        this.message.setValue("");
        (_a = this.audioMedia) === null || _a === void 0 ? void 0 : _a.release();
        this.image = "";
        this.audio = "";
        this.focusTextArea();
    }
    openPictureSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("android") && this.platform.is("cordova")) {
                yield this.androidPermissions.requestPermissions([
                    this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
                    this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
                ]);
            }
            const actionSheet = yield this.sheet.create({
                header: "Enviar contenido explícito sin el consentimiento del receptor puede ser motivo de expulsión.",
                buttons: [
                    {
                        text: "Desde la cámara",
                        icon: "camera",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.platform.is("cordova")) {
                                const image = (yield this.utils.takePicture("camera", false, "default", true));
                                this.addPicture(image);
                            }
                            else {
                                const image = yield this.utils.webcamImage("default");
                                if (!image || typeof image === "boolean") {
                                    actionSheet.dismiss();
                                    return false;
                                }
                                this.addPicture(image);
                            }
                        })
                    },
                    {
                        text: "Desde la galería",
                        icon: "images",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            if (this.platform.is("cordova")) {
                                const image = (yield this.utils.takePicture("gallery", false, "default", true));
                                this.addPicture(image);
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
    openMic() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                if (this.platform.is("android")) {
                    yield this.androidPermissions.requestPermissions([
                        this.androidPermissions.PERMISSION.RECORD_AUDIO,
                        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
                        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
                    ]);
                }
                try {
                    let path = this.file.dataDirectory;
                    let extension = "";
                    if (this.platform.is("ios")) {
                        // path = this.file.dataDirectory;
                        extension = ".m4a";
                    }
                    else {
                        // path = this.file.dataDirectory;
                        extension = ".mp3";
                    }
                    const name = `record_${new Date().getTime() + extension}`;
                    this.audioFile = yield this.file.createFile(path, name, true);
                    // const audioMediaSrc = this.audioFile.nativeURL.replace(/^file:[\/]+/, "");
                    this.audioMedia = this.media.create(this.audioFile.toInternalURL());
                    this.audioMedia.startRecord();
                    this.recording = true;
                }
                catch (error) {
                    console.log(error);
                }
            }
            else if (navigator.mediaDevices) {
                let chunks = [];
                navigator.mediaDevices
                    .getUserMedia({ audio: true, video: false })
                    .then(stream => {
                    const tracks = stream.getTracks();
                    this.mediaRecorder = new MediaRecorder(stream);
                    this.mediaRecorder.start();
                    this.recording = true;
                    this.mediaRecorder.addEventListener("stop", (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        this.recording = false;
                        this.recorded = true;
                        tracks.forEach(track => {
                            track.stop();
                        });
                        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
                        chunks = [];
                        this.audio = URL.createObjectURL(blob);
                        this.audioPreview = this.sanitizer.bypassSecurityTrustUrl(this.audio);
                    }));
                    this.mediaRecorder.addEventListener("dataavailable", (e) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                        chunks.push(e.data);
                    }));
                });
            }
            this.countRecording();
        });
    }
    stopMic() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("cordova") && this.audioFile) {
                try {
                    this.audioMedia.stopRecord();
                    this.recording = false;
                    this.recorded = true;
                    yield this.utils.delay(200);
                    // this.audioMedia.play();
                    this.audio = this.webview.convertFileSrc(this.audioFile.nativeURL);
                    this.audioPreview = this.sanitizer.bypassSecurityTrustUrl(this.audio);
                }
                catch (e) {
                    console.error(e);
                }
            }
            else {
                this.mediaRecorder.stop();
                // console.log(this.mediaRecorder.state);
            }
            this.stopCountRecording();
        });
    }
    removeRecorded() {
        var _a;
        this.recorded = false;
        if (this.platform.is("cordova")) {
            (_a = this.audioMedia) === null || _a === void 0 ? void 0 : _a.release();
        }
    }
    addPicture(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (typeof image !== "string") {
                image = yield this.utils.fileToBase64(image);
            }
            this.image = image;
            this.imagePreview = this.sanitizer.bypassSecurityTrustUrl(image);
        });
    }
    setMention(username) {
        this.usernames = [];
        this.inputAt = false;
        this.message.setValue(this.message.value.replace(this.mention, `@${username} `));
        this.userMentions = [...this.userMentions, username];
        this.focusTextArea();
    }
    setWriting(text) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.message.value) {
                if (this.mentions) {
                    if (text.charAt(text.length - 1) == "@") {
                        this.inputAt = true;
                    }
                    if (this.inputAt) {
                        const pattern = /\B@[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+/gi;
                        const matches = text.match(pattern);
                        if (matches) {
                            this.mention = matches[matches.length - 1];
                        }
                    }
                }
                if (this.writing) {
                    return;
                }
                this.writing = true;
                if (!this.editing) {
                    this.onWriting.emit(true);
                }
                if (this.inputAt &&
                    ((_a = this.mention) === null || _a === void 0 ? void 0 : _a.length) > 3 &&
                    this.message.value.length > 3) {
                    this.usernames = yield this.userSvc.searchUsernames(this.mention.replace("@", ""));
                }
                else {
                    this.usernames = [];
                }
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    this.writing = false;
                }), 500);
            }
            else {
                this.usernames = [];
            }
        });
    }
    keydownEnter(event) {
        if (!this.platform.is("hybrid")) {
            event.preventDefault();
            this.sendMessage();
        }
    }
    focusTextArea() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            (_a = this.textarea) === null || _a === void 0 ? void 0 : _a.setFocus();
            if (this.platform.is("cordova")) {
                this.keyboard.show();
            }
        });
    }
    createEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.onCreateEvent.emit();
        });
    }
    countRecording() {
        let time = 0;
        this.countInterval = setInterval(() => {
            time++;
            let minutes = Math.floor((time % (60 * 60)) / 60);
            let seconds = Math.floor(time % 60);
            this.countRecordingString = minutes + "m " + seconds + "s";
        }, 1000);
    }
    stopCountRecording() {
        clearInterval(this.countInterval);
        this.countRecordingString = "";
    }
};
ChatInputComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__.WebView },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__.Media }
];
ChatInputComponent.propDecorators = {
    onWriting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    onSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    editingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    replyingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    onCreateEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output }],
    imageInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ["imageInput", { static: false },] }],
    player: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ["player", { static: false },] }],
    replying: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    editing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    mentions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    microphone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ["textarea", { static: false },] }]
};
ChatInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-chat-input",
        template: _chat_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder,
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Keyboard,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform,
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController,
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService,
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File,
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__.WebView,
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__.Media])
], ChatInputComponent);



/***/ }),

/***/ 12581:
/*!*******************************************************!*\
  !*** ./src/app/chat/chat-list/chat-list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListComponent": () => (/* binding */ ChatListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chat_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-list.component.html?ngResource */ 17146);
/* harmony import */ var _chat_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-list.component.scss?ngResource */ 46379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/config.service */ 70946);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ 37556);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/chat.service */ 9014);









let ChatListComponent = class ChatListComponent {
    constructor(chatSvc, auth, menu, toast, config, cd, router) {
        this.chatSvc = chatSvc;
        this.auth = auth;
        this.menu = menu;
        this.toast = toast;
        this.config = config;
        this.cd = cd;
        this.router = router;
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.loading = false;
        this.showOptions = false;
        this.allChats = null;
        this.showingArchived = false;
        this.chats = null;
    }
    onFocus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getLastMessages();
        });
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.router.url === "/chat" || window.innerWidth > 991) {
                yield this.getLastMessages();
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.messageEvent.subscribe(message => {
                var _a, _b;
                if (!message) {
                    return;
                }
                if ((_a = this.chats) === null || _a === void 0 ? void 0 : _a.some(m => m.conversationId === (message === null || message === void 0 ? void 0 : message.conversationId))) {
                    this.chats.map(m => {
                        if (m.conversationId === message.conversationId) {
                            if (m.writing && !message.writing) {
                                m.writing = false;
                            }
                            if (message.writing) {
                                m.writing = true;
                                this.cd.detectChanges();
                                setTimeout(() => {
                                    m.writing = false;
                                    this.cd.detectChanges();
                                }, 10000);
                            }
                            else if (message.id > m.id) {
                                m.text = message.text;
                                m.time_creation = message.time_creation;
                                m.time_read = message.time_read;
                                if (message.time_read) {
                                    if (m.count > 0) {
                                        m.count--;
                                    }
                                }
                                else if (message.fromuser.id !== this.auth.currentUserValue.id) {
                                    m.count++;
                                }
                            }
                        }
                    });
                }
                else if (!message.writing) {
                    message.user =
                        message.fromuser.id === this.auth.currentUserValue.id
                            ? message.touser
                            : message.fromuser;
                    if (this.chats) {
                        this.chats = [message, ...this.chats];
                    }
                }
                if (!message.writing) {
                    (_b = this.chats) === null || _b === void 0 ? void 0 : _b.sort((a, b) => {
                        return (new Date(b.time_creation).getTime() -
                            new Date(a.time_creation).getTime());
                    });
                    this.setChats();
                }
            });
        });
    }
    getCachedMessages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.allChats = (yield this.config.get("chats"));
            yield this.setChats();
        });
    }
    getLastMessages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.getCachedMessages();
            const allChats = yield this.chatSvc.getChats();
            this.allChats = allChats;
            yield this.setChats();
            this.loading = false;
        });
    }
    setChats() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.config.set("chats", this.allChats);
            const config = yield this.chatSvc.getChatsConfig();
            let chats = (_a = this.allChats) === null || _a === void 0 ? void 0 : _a.filter(c => {
                return !(config === null || config === void 0 ? void 0 : config.some(cc => cc.conversationId === c.conversationId && cc.archived));
            });
            if (this.chats) {
                if (this.chats[0].id === chats[0].id) {
                    this.chats[0].time_read = chats[0].time_read;
                    this.chats[0].count = chats[0].count;
                    this.chats[0].user.last_login = chats[0].user.last_login;
                }
                else {
                    // TODO: Actualizar cada user del listado, comprobando si algún user nuevo y añadiendolo
                    this.chats = chats;
                }
            }
            else {
                this.chats = chats;
            }
            this.archivedChats = config === null || config === void 0 ? void 0 : config.filter(cc => cc.archived);
            this.selectedChat = (_b = this.chats) === null || _b === void 0 ? void 0 : _b.find(c => { var _a; return +((_a = c.user) === null || _a === void 0 ? void 0 : _a.id) === this.selected; });
            this.cd.detectChanges();
        });
    }
    ngOnChanges(changes) {
        var _a, _b;
        if ((_a = changes === null || changes === void 0 ? void 0 : changes.selected) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.selectedChat = (_b = this.chats) === null || _b === void 0 ? void 0 : _b.find(c => { var _a; return +c.user.id === +((_a = changes === null || changes === void 0 ? void 0 : changes.selected) === null || _a === void 0 ? void 0 : _a.currentValue); });
        }
    }
    showChat(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.userChange.emit(id);
        });
    }
    deleteChat(chat) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.selected = undefined;
            this.selectedChat = undefined;
            this.showOptions = false;
            const chats = this.chats;
            this.chats = this.chats.filter(c => c.user.id !== chat.user.id);
            const toast = yield this.toast.create({
                message: "Has eliminado el chat con " + chat.user.name,
                duration: 3000,
                position: "bottom",
                buttons: [
                    {
                        text: "Deshacer",
                        handler: () => {
                            this.chats = chats;
                        }
                    }
                ]
            });
            toast.present();
            const log = yield toast.onDidDismiss();
            if (log.role === "timeout") {
                yield this.chatSvc.deleteChat(chat.user.id);
            }
        });
    }
    archiveChat(chat) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.selected = undefined;
            this.selectedChat = undefined;
            this.showOptions = false;
            try {
                yield this.chatSvc.archiveChat(chat);
                const config = yield this.chatSvc.getChatsConfig();
                this.archivedChats = config.filter(cc => cc.archived);
                this.chats = this.chats.filter(c => c.user.id !== chat.user.id);
                const toast = yield this.toast.create({
                    message: "Has archivado el chat con " + chat.user.name,
                    duration: 3000,
                    position: "bottom"
                });
                toast.present();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    unarchiveChat(chat) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.selected = undefined;
            this.selectedChat = undefined;
            this.showOptions = false;
            const chats = this.chats;
            try {
                yield this.chatSvc.unarchiveChat(chat);
                const config = yield this.chatSvc.getChatsConfig();
                this.archivedChats = config.filter(cc => cc.archived);
                this.chats = this.chats.filter(c => c.user.id !== chat.user.id);
                const toast = yield this.toast.create({
                    message: "Has desarchivado el chat con " + chat.user.name,
                    duration: 3000,
                    position: "bottom"
                });
                toast.present();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    dragItem(event, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (event.detail.ratio < -1.8) {
                yield event.target.close();
                this.showChat(id);
            }
        });
    }
    openItem(event, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
            const element = event.target.parentElement;
            element.open("end");
        });
    }
    selectChat(chat) {
        if (chat.user.username !== "frikiradar") {
            this.selected = chat.user.id;
            this.selectedChat = chat;
            this.showOptions = true;
        }
    }
    hideOptions() {
        this.showOptions = false;
        this.selectedChat = undefined;
    }
    showArchivedChats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.showingArchived = true;
            const config = yield this.chatSvc.getChatsConfig();
            this.chats = this.allChats.filter(c => {
                return config === null || config === void 0 ? void 0 : config.some(cc => cc.conversationId === c.conversationId && cc.archived);
            });
        });
    }
    showUnarchivedChats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.showingArchived = false;
            const config = yield this.chatSvc.getChatsConfig();
            this.chats = this.allChats.filter(c => {
                return !(config === null || config === void 0 ? void 0 : config.some(cc => cc.conversationId === c.conversationId && cc.archived));
            });
        });
    }
    back() {
        this.router.navigateByUrl("/tabs/community");
    }
};
ChatListComponent.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
ChatListComponent.propDecorators = {
    userChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    messageEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener, args: ["window:focus",] }]
};
ChatListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-chat-list",
        template: _chat_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController,
        src_app_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService,
        _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router])
], ChatListComponent);



/***/ }),

/***/ 72620:
/*!*********************************************************!*\
  !*** ./src/app/chat/chat-modal/chat-modal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatModalComponent": () => (/* binding */ ChatModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _chat_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-modal.component.html?ngResource */ 79632);
/* harmony import */ var _chat_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-modal.component.scss?ngResource */ 73371);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 19426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 42697);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ 59076);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/chat.service */ 9014);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/config.service */ 70946);
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/url.service */ 90925);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/user.service */ 73071);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/utils.service */ 88270);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 27353);
/* harmony import */ var _options_popover_options_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../options-popover/options-popover */ 49308);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var src_app_events_event_modal_event_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/events/event-modal/event.modal */ 55713);





















let ChatModalComponent = class ChatModalComponent {
    constructor(auth, userSvc, router, chatSvc, toast, alert, clipboard, keyboard, platform, config, urlSvc, utils, modalController, popover, vibration, nav, dc, afMessaging, eventSvc) {
        this.auth = auth;
        this.userSvc = userSvc;
        this.router = router;
        this.chatSvc = chatSvc;
        this.toast = toast;
        this.alert = alert;
        this.clipboard = clipboard;
        this.keyboard = keyboard;
        this.platform = platform;
        this.config = config;
        this.urlSvc = urlSvc;
        this.utils = utils;
        this.modalController = modalController;
        this.popover = popover;
        this.vibration = vibration;
        this.nav = nav;
        this.dc = dc;
        this.afMessaging = afMessaging;
        this.eventSvc = eventSvc;
        this.messageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.backToList = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.messages = [];
        this.page = 1;
        this.pressOptions = false;
        this.replying = false;
        this.editing = false;
        this.writing = false;
        this.toUserWriting = "";
        this.realtimeChat = true;
    }
    onFocus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getLastMessages();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (this.userId) {
                const min = Math.min(this.auth.currentUserValue.id, this.userId);
                const max = Math.max(this.auth.currentUserValue.id, this.userId);
                this.conversationId = `${min}_${max}`;
                this.getLastMessages();
            }
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
                            this.nav.back();
                        },
                    },
                ],
                cssClass: "round-alert",
            });
            if (!config.chat && !this.auth.isAdmin()) {
                this.alertError.present();
            }
            this.messageEvent.subscribe((message) => (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
                var _a, _b;
                if (!message) {
                    return;
                }
                if (message.conversationId === this.conversationId) {
                    if (message.writing && ((_a = message.fromuser) === null || _a === void 0 ? void 0 : _a.id) === ((_b = this.user) === null || _b === void 0 ? void 0 : _b.id)) {
                        this.getWriting();
                    }
                    else if (!message.writing) {
                        this.toUserWriting = "";
                        yield this.newMessage(message);
                    }
                }
            }));
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.userId) {
                return;
            }
            try {
                let messages = (yield this.chatSvc.getMessages(this.userId, true, 1))
                    .filter((m) => m.text || m.image || m.audio)
                    .reverse();
                messages = messages.filter((m) => {
                    if (!this.messages.some((me) => me.id === m.id)) {
                        return m;
                    }
                });
                messages.map((m) => {
                    var _a;
                    if (new Date((_a = m === null || m === void 0 ? void 0 : m.event) === null || _a === void 0 ? void 0 : _a.date) < new Date()) {
                        m.event.past = true;
                    }
                });
                if (this.messages.length) {
                    messages.forEach((message) => (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
                        yield this.newMessage(message);
                    }));
                }
                else {
                    this.messages = messages;
                }
                if (this.messages.length < 15) {
                    this.infiniteScroll.complete();
                }
                else {
                    this.infiniteScroll.complete();
                    this.infiniteScroll.disabled = false;
                    this.infiniteScroll.ionInfinite;
                }
                if (this.messages.length > 0) {
                    if (this.userId == this.messages[0].fromuser.id) {
                        this.user = this.messages[0].fromuser;
                    }
                    else {
                        this.user = this.messages[0].touser;
                    }
                }
                else {
                    try {
                        this.user = yield this.userSvc.getUser(this.userId);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                window.addEventListener("keyboardDidShow", (event) => {
                    this.scrollDown();
                });
                window.addEventListener("keyboardDidHide", (event) => {
                    this.scrollDown();
                });
                this.scrollDown(200);
            }
            catch (e) {
                console.error(e);
                yield this.alertError.present();
            }
        });
    }
    newMessage(message) {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            console.log(message);
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
                        m.event = message.event;
                        m.reply_to = message.reply_to;
                    }
                });
                // this.messageChange.emit(message);
            }
            else {
                this.messages = [...this.messages, message];
                // this.messageChange.emit(message);
                /* //Opción para ordenar por orden de creación en lugar de recepción
                this.messages = messages.sort((a, b) => {
                  return (
                    new Date(a.time_creation).getTime() -
                    new Date(b.time_creation).getTime()
                  );
                });*/
            }
            if (((_a = message.fromuser) === null || _a === void 0 ? void 0 : _a.id) === ((_b = this.user) === null || _b === void 0 ? void 0 : _b.id) &&
                (message.text || message.image || message.audio)) {
                // marcamos como leido
                try {
                    if (((_c = this.user) === null || _c === void 0 ? void 0 : _c.id) !== this.auth.currentUserValue.id) {
                        message = yield this.chatSvc.readChat(message.id);
                    }
                }
                catch (e) {
                    console.error(e);
                    yield this.alertError.present();
                }
            }
            if (((_d = message.fromuser) === null || _d === void 0 ? void 0 : _d.id) === ((_e = this.user) === null || _e === void 0 ? void 0 : _e.id)) {
                this.user = message.fromuser;
            }
            // Borramos los deleted
            this.messages = this.messages.filter((m) => {
                if (!m.deleted) {
                    return m;
                }
            });
            this.messages.map((m) => {
                var _a;
                if (new Date((_a = m === null || m === void 0 ? void 0 : m.event) === null || _a === void 0 ? void 0 : _a.date) < new Date()) {
                    m.event.past = true;
                }
            });
            this.dc.detectChanges();
            this.scrollDown();
        });
    }
    sendMessage(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const text = message.text;
            const image = message.image;
            const audio = message.audio;
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
                    touser: this.user,
                    fromuser: this.auth.currentUserValue,
                    text,
                    image,
                    audio,
                    time_creation: new Date(),
                    sending: true,
                };
                this.messages = [...this.messages, ...[message]].filter((m) => m.text || m.image || m.audio);
                this.scrollDown(1, true);
                let replyToId = this.selectedMessage && this.replying ? this.selectedMessage.id : null;
                this.replying = false;
                try {
                    let chat = null;
                    if (!image && !audio) {
                        chat = yield this.chatSvc
                            .sendMessage(this.user.id, text, replyToId, tmpId)
                            .then();
                    }
                    else if (image) {
                        const imageFile = yield this.utils.urltoBlob(image);
                        chat = yield this.chatSvc
                            .sendImage(this.user.id, imageFile, text, tmpId)
                            .then();
                    }
                    else if (audio) {
                        const audioFile = yield this.utils.urltoBlob(audio);
                        chat = yield this.chatSvc
                            .sendAudio(this.user.id, audioFile, tmpId)
                            .then();
                    }
                    yield this.newMessage(chat);
                    // this.messageChange.emit(chat);
                    replyToId = null;
                }
                catch (e) {
                    this.messages = this.messages.filter((m) => m.sending !== true);
                    console.error(e);
                }
            }
        });
    }
    scrollDown(delay = 1, force = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.messages.length) {
                return;
            }
            this.page++;
            const messages = (yield this.chatSvc.getMessages(this.userId, false, this.page))
                .filter((m) => m.text || m.image || m.audio)
                .reverse();
            this.messages = [...messages, ...this.messages];
            this.messages.map((m) => {
                var _a;
                if (new Date((_a = m === null || m === void 0 ? void 0 : m.event) === null || _a === void 0 ? void 0 : _a.date) < new Date()) {
                    m.event.past = true;
                }
            });
            this.infiniteScroll.complete();
            if (messages.length < 15) {
                event.target.disabled = true;
            }
        });
    }
    showProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (id !== 1) {
                this.router.navigate(["/profile", id]);
                if (yield this.modalController.getTop()) {
                    this.modalController.dismiss();
                }
            }
        });
    }
    selectMessage(event, message) {
        event.preventDefault();
        this.vibration.vibrate(5);
        this.selectedMessage = message;
        this.pressOptions = true;
    }
    copy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
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
    }
    edit() {
        this.editing = true;
        this.pressOptions = false;
    }
    deleteMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.pressOptions = false;
            try {
                yield this.chatSvc.deleteMessage(this.selectedMessage.id);
                this.messages = this.messages.filter((m) => m.id !== this.selectedMessage.id);
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
    dragItem(event, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedMessage = message;
            if (event.detail.ratio < -0.9) {
                event.target.close();
                this.reply();
            }
        });
    }
    openUrl(event) {
        this.urlSvc.openUrl(event);
        return false;
    }
    openViewer(src, title, text, scheme = "dark") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
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
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_17__.ViewerModalComponent,
                componentProps,
                cssClass: "ion-img-viewer",
                keyboardClose: true,
                showBackdrop: true,
            });
            return yield modal.present();
        });
    }
    showOptions(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popover.create({
                component: _options_popover_options_popover__WEBPACK_IMPORTED_MODULE_12__.OptionsPopover,
                cssClass: "options-popover",
                event: event,
                translucent: true,
                componentProps: {
                    user: this.user,
                    page: "chat",
                },
            });
            return yield popover.present();
        });
    }
    setWriting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            if (this.writing || this.editing) {
                return;
            }
            this.writing = true;
            yield this.chatSvc.writing(this.auth.currentUserValue.id, this.userId);
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
                this.writing = false;
            }), 15000);
        });
    }
    getWriting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.toUserWriting = "Escribiendo...";
            setTimeout(() => {
                this.toUserWriting = "";
            }, 10000);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_events_event_modal_event_modal__WEBPACK_IMPORTED_MODULE_14__.EventModal,
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal",
                componentProps: { user: this.user },
            });
            yield modal.present();
            yield modal.onDidDismiss();
        });
    }
    confirmDate(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            yield this.eventSvc.confirmDate(message.id);
        });
    }
    declineDate(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            yield this.eventSvc.declineDate(message.id);
        });
    }
    showEvent(event) {
        this.router.navigate(["/event", event.id]);
    }
    back() {
        this.backToList.emit();
    }
};
ChatModalComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_6__.ChatService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Clipboard },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService },
    { type: _services_url_service__WEBPACK_IMPORTED_MODULE_8__.UrlService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.PopoverController },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__.Vibration },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_13__.NavService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_20__.AngularFireMessaging },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService }
];
ChatModalComponent.propDecorators = {
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    messageEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    messageChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }],
    backToList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }],
    chatlist: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ["chatlist", { static: false },] }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonInfiniteScroll, { static: false },] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.HostListener, args: ["window:focus",] }]
};
ChatModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: "app-chat-modal",
        template: _chat_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService,
        _services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService,
        _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router,
        _services_chat_service__WEBPACK_IMPORTED_MODULE_6__.ChatService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController,
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Clipboard,
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__.Keyboard,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.Platform,
        _services_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService,
        _services_url_service__WEBPACK_IMPORTED_MODULE_8__.UrlService,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.PopoverController,
        _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_5__.Vibration,
        src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_13__.NavService,
        _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef,
        _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_20__.AngularFireMessaging,
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService])
], ChatModalComponent);



/***/ }),

/***/ 78137:
/*!******************************************!*\
  !*** ./src/app/credits/credits.modal.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditsModal": () => (/* binding */ CreditsModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _credits_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credits.modal.html?ngResource */ 84945);
/* harmony import */ var _credits_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credits.modal.scss?ngResource */ 2393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 70946);






let CreditsModal = class CreditsModal {
    constructor(modal, config) {
        this.modal = modal;
        this.config = config;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.patreon = (yield this.config.get("patreon"));
        });
    }
    close() {
        this.modal.dismiss();
    }
};
CreditsModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
CreditsModal = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "credits-modal",
        template: _credits_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_credits_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController, _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService])
], CreditsModal);



/***/ }),

/***/ 31811:
/*!******************************************!*\
  !*** ./src/app/cropper/cropper.modal.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropperModal": () => (/* binding */ CropperModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cropper_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cropper.modal.html?ngResource */ 74545);
/* harmony import */ var _cropper_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cropper.modal.scss?ngResource */ 97038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);





let CropperModal = class CropperModal {
    constructor(modal) {
        this.modal = modal;
        this.aspectRatio = 1 / 1;
        this.imageChangedEvent = "";
        this.croppedImage = "";
        this.transform = {};
        this.maintainAspectRatio = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.imageChangedEvent = this.event;
        });
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // imagen cargada
        });
    }
    loadImageFailed() {
        // show message
    }
    rotateRight() {
        this.transform = Object.assign(Object.assign({}, this.transform), { rotate: this.transform.rotate ? this.transform.rotate + 90 : 90 });
    }
    flipH() {
        this.transform = Object.assign(Object.assign({}, this.transform), { flipH: !this.transform.flipH });
    }
    flipV() {
        this.transform = Object.assign(Object.assign({}, this.transform), { flipV: !this.transform.flipV });
    }
    zoomIn() {
        this.transform = Object.assign(Object.assign({}, this.transform), { scale: this.transform.scale ? this.transform.scale + 0.1 : 1.1 });
    }
    zoomOut() {
        this.transform = Object.assign(Object.assign({}, this.transform), { scale: this.transform.scale ? this.transform.scale - 0.1 : 0.99 });
    }
    toggleAspect() {
        this.maintainAspectRatio = !this.maintainAspectRatio;
    }
    ok() {
        this.modal.dismiss(this.croppedImage);
    }
    cancel() {
        this.modal.dismiss();
    }
};
CropperModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
CropperModal.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    square: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    aspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CropperModal = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "cropper-modal",
        template: _cropper_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cropper_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController])
], CropperModal);



/***/ }),

/***/ 55713:
/*!***************************************************!*\
  !*** ./src/app/events/event-modal/event.modal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventModal": () => (/* binding */ EventModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _event_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.modal.html?ngResource */ 77241);
/* harmony import */ var _event_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.modal.scss?ngResource */ 81982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ 19426);
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils.service */ 88270);










let EventModal = class EventModal {
    constructor(formBuilder, toast, modal, utils, sanitizer, eventSvc, auth) {
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.modal = modal;
        this.utils = utils;
        this.sanitizer = sanitizer;
        this.eventSvc = eventSvc;
        this.auth = auth;
        this.editing = false;
        this.src = "";
        this.slug = "";
        this.endDate = false;
        this.showMore = false;
        this.mapSrc = "";
        this.type = "online";
        this.eventForm = formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            // repeat: new FormControl(),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            contact_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            contact_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            minage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            official: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
        });
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user) {
                this.eventForm.get("title").setValue("Cita con " + this.user.name);
            }
            if ((_a = this.event) === null || _a === void 0 ? void 0 : _a.id) {
                this.editing = true;
                this.type = this.event.type;
                this.eventForm.get("title").setValue(this.event.title);
                this.eventForm.get("description").setValue(this.event.description);
                this.eventForm.get("date").setValue(this.event.date);
                this.eventForm.get("url").setValue(this.event.url);
                this.eventForm.get("country").setValue(this.event.country);
                this.eventForm.get("city").setValue(this.event.city);
                this.eventForm.get("address").setValue(this.event.address);
                this.eventForm.get("postal_code").setValue(this.event.postal_code);
                this.eventForm.get("contact_phone").setValue(this.event.contact_phone);
                this.eventForm.get("contact_email").setValue(this.event.contact_email);
                this.eventForm.get("minage").setValue(this.event.minage);
                this.eventForm.get("price").setValue(this.event.price);
            }
        });
    }
    changeLocation() {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const country = (_a = this.eventForm.get("country").value) === null || _a === void 0 ? void 0 : _a.trim();
            const city = (_b = this.eventForm.get("city").value) === null || _b === void 0 ? void 0 : _b.trim();
            const address = (_c = this.eventForm.get("address").value) === null || _c === void 0 ? void 0 : _c.trim();
            const postal_code = (_d = this.eventForm.get("postal_code").value) === null || _d === void 0 ? void 0 : _d.trim();
            if (country && city && address) {
                const query = `${country} ${city} ${address} ${postal_code}`;
                const search = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBdyInAg-2KUZtQFnrQ5ra7wjf2S4q4GTQ&q=" +
                    query.replace(/\s|,/g, "+");
                this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(search);
            }
        });
    }
    submitEvent() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.eventForm.valid) {
                const title = this.eventForm.get("title").value.trim();
                const description = this.eventForm.get("description").value.trim();
                const date = new Date(this.eventForm.get("date").value).toUTCString();
                let endDate = null;
                if (this.eventForm.get("endDate").value) {
                    endDate = new Date(this.eventForm.get("endDate").value).toUTCString();
                }
                const url = (_c = (_b = (_a = this.eventForm.get("url")) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : "";
                const price = (_e = (_d = this.eventForm.get("price")) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : 0;
                const minage = (_g = (_f = this.eventForm.get("minage")) === null || _f === void 0 ? void 0 : _f.value) !== null && _g !== void 0 ? _g : 0;
                const official = (_j = (_h = this.eventForm.get("official")) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : false;
                let country = null;
                let city = null;
                let address = null;
                let postal_code = null;
                let contact_phone = null;
                let contact_email = null;
                if (this.type === "offline") {
                    country = (_k = this.eventForm.get("country").value) === null || _k === void 0 ? void 0 : _k.trim();
                    city = (_l = this.eventForm.get("city").value) === null || _l === void 0 ? void 0 : _l.trim();
                    address = (_m = this.eventForm.get("address").value) === null || _m === void 0 ? void 0 : _m.trim();
                    postal_code = (_o = this.eventForm.get("postal_code").value) === null || _o === void 0 ? void 0 : _o.trim();
                    contact_phone = (_p = this.eventForm.get("contact_phone").value) === null || _p === void 0 ? void 0 : _p.trim();
                    contact_email = (_q = this.eventForm.get("contact_email").value) === null || _q === void 0 ? void 0 : _q.trim();
                }
                if ((_r = this.event) === null || _r === void 0 ? void 0 : _r.id) {
                    try {
                        yield this.eventSvc.editEvent(this.event.id, title, description, date, endDate, url, price, this.type, country, city, address, postal_code, contact_phone, contact_email, minage, this.imageFile);
                        (yield this.toast.create({
                            message: `Evento editado correctamente.`,
                            duration: 5000,
                            position: "middle"
                        })).present();
                        this.close();
                    }
                    catch (e) {
                        (yield this.toast.create({
                            message: `Error al editar el evento.`,
                            duration: 5000,
                            position: "middle"
                        })).present();
                        console.error(e);
                    }
                }
                else {
                    try {
                        yield this.eventSvc.setEvent(title, description, date, endDate, url, price, this.type, country, city, address, postal_code, contact_phone, contact_email, minage, this.imageFile, (_s = this.user) === null || _s === void 0 ? void 0 : _s.id, (_t = this.page) === null || _t === void 0 ? void 0 : _t.slug, official);
                        (yield this.toast.create({
                            message: `Evento publicado correctamente.`,
                            duration: 5000,
                            position: "middle"
                        })).present();
                        this.close();
                    }
                    catch (e) {
                        (yield this.toast.create({
                            message: `Error al publicar el evento.`,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const src = yield this.utils.cropImage(event, "", true, 16 / 9);
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
    changeType(type) {
        this.type = type;
        if (this.type === "offline") {
            this.eventForm.get("url").setValidators([]);
            this.eventForm.get("url").updateValueAndValidity();
            this.eventForm.get("country").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            this.eventForm.get("country").setValidators([]);
            this.eventForm.get("city").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            this.eventForm.get("city").updateValueAndValidity();
            this.eventForm.get("address").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            this.eventForm.get("address").updateValueAndValidity();
        }
        else {
            this.eventForm.get("url").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
            this.eventForm.get("url").updateValueAndValidity();
            this.eventForm.get("country").setValidators([]);
            this.eventForm.get("country").updateValueAndValidity();
            this.eventForm.get("city").setValidators([]);
            this.eventForm.get("city").updateValueAndValidity();
            this.eventForm.get("address").setValidators([]);
            this.eventForm.get("address").updateValueAndValidity();
        }
        this.eventForm.updateValueAndValidity();
    }
    removeImage(event) {
        if (event.detail.value === "") {
            this.src = "";
            this.imageFile = null;
        }
    }
    close() {
        this.modal.dismiss();
    }
};
EventModal.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
EventModal.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
EventModal = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "event-modal",
        template: _event_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_event_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController,
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer,
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService,
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService])
], EventModal);



/***/ }),

/***/ 31896:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ 37556);



let AdminGuard = class AdminGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // logged in so return true
            if (!this.auth.isAdmin() && !this.auth.isMaster()) {
                // El usuario no está activo
                yield this.auth.logout();
                return false;
            }
            else {
                return true;
            }
        });
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AdminGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: "root" }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService])
], AdminGuard);



/***/ }),

/***/ 95107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth.service */ 37556);




let AuthGuard = class AuthGuard {
    constructor(auth, nav, ngZone) {
        this.auth = auth;
        this.nav = nav;
        this.ngZone = ngZone;
    }
    canActivate(route, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const currentUser = this.auth.currentUserValue;
            if (currentUser) {
                // logged in so return true
                if (!currentUser.active) {
                    // El usuario no está activo
                    this.ngZone
                        .run(() => this.nav.navigateRoot(["/login/activate-account"]))
                        .then();
                    return false;
                }
                else if (currentUser.banned) {
                    // El usuario está baneado
                    this.ngZone
                        .run(() => this.nav.navigateRoot(["/login/banned-account"]))
                        .then();
                    return false;
                }
                else {
                    return true;
                }
            }
            else if (state.url.includes("/profile") || state.url.includes("/page")) {
                return true;
            }
            // not logged in so redirect to login page with the return url
            this.nav.navigateRoot(["/login"], {
                queryParams: { returnUrl: state.url }
            });
            return false;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: "root" }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController,
        _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone])
], AuthGuard);



/***/ }),

/***/ 77458:
/*!*************************************!*\
  !*** ./src/app/guards/tab.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabGuard": () => (/* binding */ TabGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 37556);




let TabGuard = class TabGuard {
    constructor(auth, nav, ngZone) {
        this.auth = auth;
        this.nav = nav;
        this.ngZone = ngZone;
    }
    canActivate(route, state) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth.currentUserValue &&
                !((_a = this.auth) === null || _a === void 0 ? void 0 : _a.isAdult()) &&
                (state.url === "/" || state.url === "/tabs/radar")) {
                this.ngZone.run(() => this.nav.navigateRoot(["/tabs/community"])).then();
                return false;
            }
            else {
                return true;
            }
        });
    }
};
TabGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone }
];
TabGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: "root" }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController,
        _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone])
], TabGuard);



/***/ }),

/***/ 56455:
/*!*********************************!*\
  !*** ./src/app/hashtag.pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashtagPipe": () => (/* binding */ HashtagPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let HashtagPipe = class HashtagPipe {
    transform(value) {
        value = value === null || value === void 0 ? void 0 : value.replace(/(^|\s)(#[a-z\d-]+)/gi, "$1<a href='#' class='hashtag'>$2</a>");
        return value;
    }
};
HashtagPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "hashtag"
    })
], HashtagPipe);



/***/ }),

/***/ 41462:
/*!**********************************!*\
  !*** ./src/app/mentions.pipe.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentionsPipe": () => (/* binding */ MentionsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let MentionsPipe = class MentionsPipe {
    transform(value, data) {
        var _a;
        if ((_a = data === null || data === void 0 ? void 0 : data.mentions) === null || _a === void 0 ? void 0 : _a.length) {
            const mentions = data.mentions;
            mentions.forEach((mention) => {
                value = value === null || value === void 0 ? void 0 : value.replace(`@${mention}`, `<a href='#' class="mention">@${mention}</a>`);
            });
        }
        else {
            value = value === null || value === void 0 ? void 0 : value.replace(/@([a-z\d_]+)/gi, `<a href='#' class="mention">@$1</a>`);
        }
        return value;
    }
};
MentionsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: "mentions"
    })
], MentionsPipe);



/***/ }),

/***/ 46500:
/*!***********************************!*\
  !*** ./src/app/nice-date.pipe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NiceDatePipe": () => (/* binding */ NiceDatePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let NiceDatePipe = class NiceDatePipe {
    transform(value) {
        const date = Number(new Date(value));
        const dif = Math.floor((Date.now() - date) / 1000 / 86400);
        if (dif < 60) {
            return convertToNiceDate(value);
        }
        else {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe("es-ES");
            return dif <= 30
                ? datePipe.transform(value, "d 'de' MMMM")
                : datePipe.transform(value, "d MMM 'de' yyyy");
        }
    }
};
NiceDatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: "niceDate"
    })
], NiceDatePipe);

function convertToNiceDate(time) {
    const date = new Date(time);
    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const daydiff = Math.floor(diff / 86400);
    if (isNaN(daydiff) || daydiff < 0 || daydiff >= 60) {
        return "";
    }
    return ((daydiff === 0 &&
        ((diff < 300 && "Ahora mismo") ||
            (diff < 3600 && "Hace " + Math.floor(diff / 60) + " minutos") ||
            (diff < 7200 && "Hace 1 hora") ||
            (diff < 86400 && "Hace " + Math.floor(diff / 3600) + " horas"))) ||
        (daydiff === 1 && "Ayer") ||
        (daydiff < 14 && "Hace " + daydiff + " días") ||
        (daydiff < 30 && "Hace " + Math.ceil(daydiff / 7) + " semanas") ||
        (daydiff < 60 && "Hace 1 mes"));
}


/***/ }),

/***/ 49308:
/*!****************************************************!*\
  !*** ./src/app/options-popover/options-popover.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsPopover": () => (/* binding */ OptionsPopover)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _options_popover_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options-popover.html?ngResource */ 69865);
/* harmony import */ var _options_popover_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options-popover.scss?ngResource */ 48973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 42697);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ 87501);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils.service */ 88270);











let OptionsPopover = class OptionsPopover {
    constructor(popover, router, auth, userSvc, alert, toast, admin, utils, platform, clipboard) {
        this.popover = popover;
        this.router = router;
        this.auth = auth;
        this.userSvc = userSvc;
        this.alert = alert;
        this.toast = toast;
        this.admin = admin;
        this.utils = utils;
        this.platform = platform;
        this.clipboard = clipboard;
    }
    close() {
        this.popover.dismiss();
    }
    showProfile(id) {
        if (id !== 1) {
            this.router.navigate(["/profile", id]);
        }
        this.close();
    }
    report(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: `¿Quieres reportar a ${user.username}?`,
                message: "Nos llegará un aviso para que revisemos el caso y actuemos en consecuencia. Describe a continuación el motivo del reporte.",
                inputs: [
                    {
                        name: "note",
                        type: "text",
                        placeholder: "Motivo del reporte"
                    }
                ],
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary"
                    },
                    {
                        text: "Reportar",
                        role: "block",
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            if (data.note.trim().length) {
                                try {
                                    yield this.userSvc.report(user.id, data.note);
                                    (yield this.toast.create({
                                        message: "Usuario reportado correctamente",
                                        duration: 2000,
                                        position: "bottom"
                                    })).present();
                                }
                                catch (e) {
                                    (yield this.toast.create({
                                        message: `Error al reportar al usuario ${e}`,
                                        duration: 2000,
                                        position: "bottom",
                                        color: "danger"
                                    })).present();
                                    alert.present();
                                }
                            }
                            else {
                                (yield this.toast.create({
                                    message: `El mensaje de reporte no puede estar en blanco`,
                                    duration: 2000,
                                    position: "middle",
                                    color: "danger"
                                })).present();
                                this.report(this.user);
                            }
                        })
                    }
                ],
                cssClass: "round-alert"
            });
            yield alert.present();
            this.close();
        });
    }
    block(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: `¿Quieres bloquear a ${user.username}?`,
                message: "Ya no podrá volver a verte, escribirte o interactuar contigo en FrikiRadar a menos que lo desbloquees. Si lo deseas puedes indicarnos el motivo del bloqueo.",
                inputs: [
                    {
                        name: "note",
                        type: "text",
                        placeholder: "Motivo del bloqueo (opcional)"
                    }
                ],
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary"
                    },
                    {
                        text: "Bloquear",
                        role: "block",
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.userSvc.block(user.id, data.note);
                                (yield this.toast.create({
                                    message: "Usuario bloqueado correctamente",
                                    duration: 2000,
                                    position: "bottom"
                                })).present();
                                this.router.navigate(["/"]);
                            }
                            catch (e) {
                                (yield this.toast.create({
                                    message: `Error al bloquear al usuario ${e}`,
                                    duration: 2000,
                                    position: "bottom"
                                })).present();
                                alert.present();
                            }
                        })
                    }
                ],
                cssClass: "round-alert"
            });
            yield alert.present();
            this.close();
        });
    }
    copyProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const referrer = this.auth.currentUserValue
                ? this.auth.currentUserValue.username
                : "app";
            const url = `https://frikiradar.app/${this.user.username.replace(" ", "+")}?referrer=${referrer}`;
            try {
                if (this.platform.is("cordova")) {
                    yield this.clipboard.copy(url);
                }
                else {
                    yield navigator.clipboard.writeText(url);
                }
                (yield this.toast.create({
                    message: "URL copiada correctamente",
                    duration: 2000,
                    position: "middle"
                })).present();
            }
            catch (e) {
                (yield this.toast.create({
                    message: "Error al copiar la URL",
                    duration: 2000,
                    position: "middle"
                })).present();
            }
            this.close();
        });
    }
    shareProfile() {
        const url = `https://frikiradar.app/${this.user.username.replace(" ", "+")}`;
        this.utils.share(url);
        this.close();
    }
    warn(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: `¿Quieres enviar una advertencia a ${user.username}?`,
                message: "Se enviará un mensaje al usuario desde la cuenta de FrikiRadar advirtiéndole de su falta.",
                inputs: [
                    {
                        name: "note",
                        type: "text",
                        placeholder: "Mensaje del moderador"
                    }
                ],
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary"
                    },
                    {
                        text: "Enviar advertencia",
                        role: "warn",
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.admin.warn(user.id, data.note);
                                (yield this.toast.create({
                                    message: "Usuario avisado correctamente",
                                    duration: 2000,
                                    position: "middle"
                                })).present();
                            }
                            catch (e) {
                                (yield this.toast.create({
                                    message: `Error al avisar al usuario ${e}`,
                                    duration: 2000,
                                    position: "middle"
                                })).present();
                                alert.present();
                            }
                        })
                    }
                ],
                cssClass: "round-alert"
            });
            yield alert.present();
            this.close();
        });
    }
    ban(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: `¿Quieres banear al usuario ${user.username}?`,
                message: "Indícale al usuario el motivo por el cual le baneas. Añade el tiempo (días/horas) si el baneo es temporal o déjalo en blanco si es indefinido.",
                inputs: [
                    {
                        name: "note",
                        type: "text",
                        placeholder: "Motivo del baneo"
                    },
                    {
                        name: "hours",
                        type: "number",
                        attributes: {
                            min: 0,
                            max: 24
                        },
                        placeholder: "Horas"
                    },
                    {
                        name: "days",
                        type: "number",
                        placeholder: "Dias"
                    }
                ],
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary"
                    },
                    {
                        text: "Banear al usuario",
                        role: "ban",
                        handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.admin.ban(user.id, data.note, data.days, data.hours);
                                (yield this.toast.create({
                                    message: "Usuario baneado correctamente",
                                    duration: 2000,
                                    position: "middle"
                                })).present();
                            }
                            catch (e) {
                                (yield this.toast.create({
                                    message: `Error al banear al usuario ${e}`,
                                    duration: 2000,
                                    position: "middle"
                                })).present();
                                alert.present();
                            }
                        })
                    }
                ],
                cssClass: "round-alert"
            });
            yield alert.present();
            this.close();
        });
    }
};
OptionsPopover.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Clipboard }
];
OptionsPopover = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "options-popover",
        template: _options_popover_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_options_popover_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController,
        _services_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform,
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Clipboard])
], OptionsPopover);



/***/ }),

/***/ 33013:
/*!******************************************************************************!*\
  !*** ./src/app/radar/request-geolocation-modal/request-geolocation.modal.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestGeolocationModal": () => (/* binding */ RequestGeolocationModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _request_geolocation_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-geolocation.modal.html?ngResource */ 76582);
/* harmony import */ var _request_geolocation_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-geolocation.modal.scss?ngResource */ 21115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 20593);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 55846);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);








let RequestGeolocationModal = class RequestGeolocationModal {
    constructor(modal, platform, diagnostic, androidPermissions, locationAccuracy) {
        this.modal = modal;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.androidPermissions = androidPermissions;
        this.locationAccuracy = locationAccuracy;
        this.view = "request";
    }
    changeSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("android")) {
                const check = yield this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION);
                if (check.hasPermission) {
                    yield this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_LOW_POWER);
                }
                else {
                    yield this.diagnostic.switchToSettings();
                }
            }
            else {
                yield this.diagnostic.switchToSettings();
            }
            this.view = "request";
        });
    }
    close(data) {
        this.modal.dismiss(data);
    }
};
RequestGeolocationModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_4__.LocationAccuracy }
];
RequestGeolocationModal = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "request-geolocation-modal",
        template: _request_geolocation_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_geolocation_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform,
        _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__.Diagnostic,
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions,
        _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_4__.LocationAccuracy])
], RequestGeolocationModal);



/***/ }),

/***/ 45921:
/*!*************************************!*\
  !*** ./src/app/rules/rules.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesPage": () => (/* binding */ RulesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _rules_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules.page.html?ngResource */ 30402);
/* harmony import */ var _rules_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules.page.scss?ngResource */ 39907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 70946);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigation.service */ 89565);







let RulesPage = class RulesPage {
    constructor(nav, modal, config) {
        this.nav = nav;
        this.modal = modal;
        this.config = config;
        this.accepted = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.accepted = (yield this.config.get("rules"));
        });
    }
    deny() {
        this.close();
        this.nav.back();
    }
    accept() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.config.set("rules", true);
            this.close();
            location.reload();
        });
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.modal.dismiss();
        });
    }
};
RulesPage.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService }
];
RulesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-rules",
        template: _rules_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rules_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController,
        _services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService])
], RulesPage);



/***/ }),

/***/ 87501:
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 70946);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ 43006);
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.service */ 36705);





let AdminService = class AdminService {
    constructor(rest, config, uploadSvc) {
        this.rest = rest;
        this.config = config;
        this.uploadSvc = uploadSvc;
    }
    warn(id, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return this.rest.put("warn", { touser: id, message }).toPromise();
        });
    }
    getBans() {
        return this.rest.get("bans").toPromise();
    }
    ban(id, message, days, hours) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return this.rest
                .put("ban", { touser: id, message, days, hours })
                .toPromise();
        });
    }
    unban(id) {
        return this.rest.delete(`ban/${id}`).toPromise();
    }
    sendTopicMessage(topic, message, title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.rest
                .put("topic-message", { topic, message, title })
                .toPromise();
        });
    }
    getBannedMessages(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`banned-messages/${id}`).toPromise());
        });
    }
    sendMessage(id, text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .put("banned-message", { touser: id, text })
                .toPromise());
        });
    }
    createRoom(name, description, permissions, visible, image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("name", name);
            formData.set("description", description);
            formData.set("permissions", permissions);
            formData.set("visible", visible ? "true" : "false");
            formData.set("image", image);
            return (yield this.uploadSvc.upload("room", formData));
        });
    }
    editRoom(id, name, description, permissions, visible, image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("id", "" + id);
            formData.set("name", name);
            formData.set("description", description);
            formData.set("permissions", permissions);
            formData.set("visible", visible ? "true" : "false");
            formData.set("image", image);
            return (yield this.uploadSvc.upload("edit-room", formData));
        });
    }
    getRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get("admin-rooms").toPromise());
        });
    }
    removeRoom(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return this.rest.delete(`delete-room/${id}`).toPromise();
        });
    }
};
AdminService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService },
    { type: _upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService }
];
AdminService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService,
        _config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService,
        _upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService])
], AdminService);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/device/ngx */ 34344);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fingerprintjs/fingerprintjs */ 4889);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ 43006);











const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ "Content-Type": "application/json" })
};
let AuthService = class AuthService {
    constructor(http, rest, nav, device, platform) {
        this.http = http;
        this.rest = rest;
        this.nav = nav;
        this.device = device;
        this.platform = platform;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    register(username, email, password, birthday, gender, lovegender, meet, referral) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.http
                    .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.root}api/register`, {
                    username,
                    email,
                    password,
                    birthday,
                    gender,
                    lovegender,
                    meet,
                    referral
                }, httpOptions)
                    .toPromise();
            }
            catch (e) {
                throw new Error("Ya hay un usuario registrado con este nombre de usuario o email.");
            }
        });
    }
    login(username, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const token = yield this.http
                    .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.root}api/login`, { username, password }, httpOptions)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
                    return data.token;
                }))
                    .toPromise();
                localStorage.setItem("currentUser", JSON.stringify({ token }));
                this.currentUserSubject.next({ token });
                return yield this.getAuthUser();
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    checkUsername(username) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const u = (yield this.http
                    .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.root}api/username/${username}`)
                    .toPromise());
                if (u === username) {
                    return true;
                }
                else {
                    return u;
                }
            }
            catch (e) {
                throw new Error("Error al comprobar el nombre de usuario");
            }
        });
    }
    getAuthUser() {
        if (!this.currentUserValue) {
            return;
        }
        const token = this.currentUserValue.token;
        return this.rest
            .get("user")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((user) => {
            localStorage.setItem("currentUser", JSON.stringify(Object.assign(Object.assign({}, user), { token })));
            return user;
        }))
            .toPromise();
    }
    setAuthUser(user) {
        if (!user) {
            return false;
        }
        user = Object.assign(Object.assign({}, this.currentUserValue), user);
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.currentUserSubject.next(user);
    }
    twoStepCode() {
        return this.rest.get("two-step");
    }
    verifyLogin(verification_code) {
        return this.rest
            .put("two-step", { verification_code })
            .toPromise();
    }
    requestPassword(username) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.root}api/recover`, { username }, httpOptions)
            .toPromise();
    }
    recoverPassword(username, password, verification_code) {
        return this.http
            .put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.root}api/recover`, {
            username,
            password,
            verification_code
        }, httpOptions)
            .toPromise();
    }
    isAdmin(user) {
        var _a;
        if (!user) {
            user = this.currentUserValue;
        }
        return (_a = user === null || user === void 0 ? void 0 : user.roles) === null || _a === void 0 ? void 0 : _a.includes("ROLE_ADMIN");
    }
    isMaster(user) {
        var _a;
        if (!user) {
            user = this.currentUserValue;
        }
        return (_a = user === null || user === void 0 ? void 0 : user.roles) === null || _a === void 0 ? void 0 : _a.includes("ROLE_MASTER");
    }
    isPatreon(user) {
        var _a;
        if (!user) {
            user = this.currentUserValue;
        }
        return (_a = user === null || user === void 0 ? void 0 : user.roles) === null || _a === void 0 ? void 0 : _a.includes("ROLE_PATREON");
    }
    isDemo(user) {
        var _a;
        if (!user) {
            user = this.currentUserValue;
        }
        return (_a = user === null || user === void 0 ? void 0 : user.roles) === null || _a === void 0 ? void 0 : _a.includes("ROLE_DEMO");
    }
    isVerified(user) {
        if (!user) {
            user = this.currentUserValue;
        }
        return user.verified;
    }
    isAdult(birthday) {
        var _a;
        if (!birthday) {
            birthday = (_a = this.currentUserValue) === null || _a === void 0 ? void 0 : _a.birthday;
        }
        const today = Date.now();
        const date = new Date(birthday).getTime();
        const ms = today - date;
        const age = +(ms / 1000 / 3600 / 24 / 365).toFixed(0);
        return age >= 18;
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let uuid = null;
            if (this.platform.is("cordova")) {
                uuid = this.device.uuid;
            }
            else {
                const fp = yield _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_7__["default"].load();
                const fingerprint = yield fp.get();
                uuid = fingerprint.visitorId;
            }
            // Desactivamos las notificaciones
            if (uuid && this.currentUserValue) {
                try {
                    yield this.rest.get(`turnoff-device/${uuid}`).toPromise();
                }
                catch (e) {
                    console.error(e);
                }
            }
            // Eliminamos la sesión y configuraciones
            localStorage.clear();
            sessionStorage.clear();
            this.currentUserSubject.next(undefined);
            // Regresamos a la página de login
            this.nav.navigateRoot(["/login"]);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_0__.Device },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({ providedIn: "root" }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient,
        _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController,
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_0__.Device,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform])
], AuthService);



/***/ }),

/***/ 9014:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ 43006);
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.service */ 36705);







let ChatService = class ChatService {
    constructor(rest, uploadSvc, auth, alert, afMessaging) {
        this.rest = rest;
        this.uploadSvc = uploadSvc;
        this.auth = auth;
        this.alert = alert;
        this.afMessaging = afMessaging;
    }
    getChats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const chats = (yield this.rest.get(`chats`).toPromise());
            return chats;
        });
    }
    getMessages(id, read, page = 1, lastId = 0) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .get(`chat/${id}?read=${read}&page=${page}&lastid=${lastId}`)
                .toPromise());
        });
    }
    sendMessage(id, text, replyto, tmp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .put("chat", { touser: id, text, replyto, tmp_id })
                .toPromise());
        });
    }
    sendImage(id, image, text, tmp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("image", image);
            formData.set("touser", "" + id);
            formData.set("text", text);
            formData.set("tmp_id", tmp_id);
            return (yield this.uploadSvc.upload("chat-upload", formData));
        });
    }
    sendAudio(id, audio, tmp_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("audio", audio);
            formData.set("touser", "" + id);
            formData.set("tmp_id", tmp_id);
            return (yield this.uploadSvc.upload("chat-upload", formData));
        });
    }
    writing(fromuser, touser) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .put("writing-chat", { fromuser, touser })
                .toPromise());
        });
    }
    updateMessage(id, text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .put("update-message", { id, text })
                .toPromise());
        });
    }
    readChat(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`read-chat/${id}`).toPromise());
        });
    }
    deleteMessage(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.rest.delete(`chat-message/${id}`).toPromise();
        });
    }
    deleteChat(touserid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.rest.delete(`chat/${touserid}`).toPromise();
        });
    }
    archiveChat(chat) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let chats_config = yield this.getChatsConfig();
            if (chats_config) {
                if (chats_config === null || chats_config === void 0 ? void 0 : chats_config.some((c) => c.conversationId === chat.conversationId)) {
                    chats_config.map((c) => {
                        if (c.conversationId === chat.conversationId) {
                            c.archived = true;
                        }
                    });
                }
                else {
                    chats_config = [
                        ...chats_config,
                        {
                            conversationId: chat.conversationId,
                            archived: true,
                        },
                    ];
                }
            }
            else {
                chats_config = [
                    {
                        conversationId: chat.conversationId,
                        archived: true,
                    },
                ];
            }
            yield this.setChatsConfig(chats_config);
        });
    }
    unarchiveChat(chat) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let chats_config = yield this.getChatsConfig();
            if (chats_config) {
                if (chats_config === null || chats_config === void 0 ? void 0 : chats_config.some((c) => c.conversationId === chat.conversationId)) {
                    chats_config.map((c) => {
                        if (c.conversationId === chat.conversationId) {
                            c.archived = false;
                        }
                    });
                }
                else {
                    chats_config = [
                        ...chats_config,
                        {
                            conversationId: chat.conversationId,
                            archived: false,
                        },
                    ];
                }
            }
            else {
                chats_config = [
                    {
                        conversationId: chat.conversationId,
                        archived: false,
                    },
                ];
            }
            yield this.setChatsConfig(chats_config);
        });
    }
    setChatsConfig(chats_config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const user = (yield this.rest
                .put("chats-config", { chats_config })
                .toPromise());
            this.auth.setAuthUser(user);
        });
    }
    getChatsConfig() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const config = (_a = this.auth.currentUserValue) === null || _a === void 0 ? void 0 : _a.config;
            return config === null || config === void 0 ? void 0 : config.chats;
        });
    }
    report(message, note) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.rest.put("report-chat", { message, note }).toPromise();
        });
    }
    realtimeChatInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.alert.create({
                header: "Notificaciones desactivadas",
                message: "Para tener chat en tiempo real es necesario activar las notificaciones. Actívalas para tener esta función.",
                buttons: [
                    {
                        text: "Entendido!",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.afMessaging.requestPermission.toPromise();
                        }),
                    },
                ],
                cssClass: "round-alert",
            })).present();
        });
    }
};
ChatService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService },
    { type: _upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_5__.AngularFireMessaging }
];
ChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root",
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService,
        _upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService,
        _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController,
        _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_5__.AngularFireMessaging])
], ChatService);



/***/ }),

/***/ 70946:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let ConfigService = class ConfigService {
    constructor(http) {
        this.http = http;
        this.root = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.root;
    }
    getConfig(force) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let config = JSON.parse(localStorage.getItem("config"));
            if (force || JSON.parse(localStorage.getItem("config")) === undefined) {
                config = (yield this.http
                    .get(`${this.root}api/config`)
                    .toPromise());
                this.setConfig(config);
            }
            if (!config) {
                config = {};
            }
            return config;
        });
    }
    get(parameter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const config = yield this.getConfig();
            return config[parameter];
        });
    }
    setConfig(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let currentConfig = yield this.getConfig();
            if (!currentConfig) {
                currentConfig = {};
            }
            config = Object.assign(Object.assign({}, currentConfig), config);
            localStorage.setItem("config", JSON.stringify(config));
        });
    }
    set(parameter, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let config = yield this.getConfig();
            if (!config) {
                config = {};
            }
            config[parameter] = value;
            yield this.setConfig(config);
        });
    }
};
ConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient])
], ConfigService);



/***/ }),

/***/ 34811:
/*!********************************************!*\
  !*** ./src/app/services/device.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceService": () => (/* binding */ DeviceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/device/ngx */ 34344);
/* harmony import */ var _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fingerprintjs/fingerprintjs */ 4889);
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! platform */ 50834);
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest.service */ 43006);








let DeviceService = class DeviceService {
    constructor(rest, auth, device, platform) {
        this.rest = rest;
        this.auth = auth;
        this.device = device;
        this.platform = platform;
    }
    getDevices(forceApi = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth.currentUserValue.devices &&
                this.auth.currentUserValue.devices.length &&
                !forceApi) {
                return this.auth.currentUserValue.devices;
            }
            else {
                return (yield this.rest.get(`devices`).toPromise());
            }
        });
    }
    setDevice(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth.currentUserValue && this.auth.currentUserValue.id) {
                const device = yield this.getCurrentDevice(token);
                // console.log("device", device);
                let uuid = null;
                if (this.platform.is("cordova")) {
                    uuid = this.device.uuid;
                }
                else {
                    const fp = yield _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_5__["default"].load();
                    const fingerprint = yield fp.get();
                    uuid = fingerprint.visitorId;
                }
                if (uuid !== null) {
                    const devices = yield this.getDevices();
                    if (devices.length &&
                        !devices.some(d => d.device_id === device.device_id || d.token === device.token)) {
                        // log("devices", devices);
                        console.log("dispositivo desconocido", devices, device);
                        // dispositivo desconocido, enviar email avisando
                        yield this.unknownDevice(device).toPromise();
                    }
                    let platform = '';
                    if (this.platform.is("cordova")) {
                        if (this.platform.is("android")) {
                            platform = 'android';
                        }
                        else if (this.platform.is("ios")) {
                            platform = 'ios';
                        }
                    }
                    else {
                        platform = 'web';
                    }
                    const user = (yield this.rest
                        .put("device", {
                        id: uuid,
                        name: device.device_name,
                        token,
                        platform
                    })
                        .toPromise());
                    // this.auth.setAuthUser(user);
                }
            }
        });
    }
    getCurrentDevice(token) {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let uuid = null;
            let device;
            if (this.platform.is("cordova")) {
                uuid = this.device.uuid;
                device = {
                    device_id: uuid,
                    device_name: `${this.device.manufacturer} ${this.device.model} (${((_b = (_a = this.device) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.charAt(0).toUpperCase()) +
                        ((_d = (_c = this.device) === null || _c === void 0 ? void 0 : _c.platform) === null || _d === void 0 ? void 0 : _d.slice(1))} ${(_e = this.device) === null || _e === void 0 ? void 0 : _e.version})`,
                    token
                };
            }
            else {
                const fp = yield _fingerprintjs_fingerprintjs__WEBPACK_IMPORTED_MODULE_5__["default"].load();
                const fingerprint = yield fp.get();
                device = {
                    device_id: fingerprint.visitorId,
                    device_name: platform__WEBPACK_IMPORTED_MODULE_1__.description,
                    token
                };
            }
            const devices = yield this.getDevices();
            if (devices.some(d => d.device_id === device.device_id ||
                d.token === device.token ||
                d.device_name === device.device_name)) {
                return devices.find(d => d.device_id === device.device_id ||
                    d.token === device.token ||
                    d.device_name === device.device_name);
            }
            else {
                return device;
            }
        });
    }
    unknownDevice(device) {
        return this.rest.put("unknown-device", { device });
    }
    removeDevice(device) {
        return this.rest.delete(`device/${device.id}`).toPromise();
    }
    switchDevice(device) {
        return this.rest.get(`switch-device/${device.id}`).toPromise();
    }
};
DeviceService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_0__.Device },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
DeviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService,
        _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_0__.Device,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform])
], DeviceService);



/***/ }),

/***/ 19426:
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ 43006);
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.service */ 36705);






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ "Content-Type": "application/json" })
};
let EventService = class EventService {
    constructor(rest, uploadSvc, http) {
        this.rest = rest;
        this.uploadSvc = uploadSvc;
        this.http = http;
    }
    getEvent(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return (yield this.rest.get(`event/${id}`).toPromise());
            }
            catch (e) {
                throw new Error("No se puede obtener el evento");
            }
        });
    }
    getPublicEvent(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return (yield this.http
                    .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.root}api/event/${id}`, httpOptions)
                    .toPromise());
            }
            catch (e) {
                throw new Error("No se puede obtener el evento");
            }
        });
    }
    setEvent(title, description, date, endDate, url, price, type, country, city, address, postal_code, contact_phone, contact_email, minage, image, user, slug, official) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("title", title);
            formData.set("description", description);
            formData.set("date", date);
            if (endDate) {
                formData.set("end_date", endDate);
            }
            formData.set("url", url);
            formData.set("price", "" + price);
            formData.set("minage", "" + minage);
            formData.set("image", image);
            formData.set("type", type);
            if (user) {
                formData.set("user", "" + user);
            }
            if (slug) {
                formData.set("slug", slug);
            }
            if (type === "offline") {
                formData.set("country", country);
                formData.set("city", city);
                formData.set("address", address);
                if (postal_code) {
                    formData.set("postal_code", postal_code);
                }
                if (contact_phone) {
                    formData.set("contact_phone", contact_phone);
                }
                if (contact_email) {
                    formData.set("contact_email", contact_email);
                }
            }
            const event = (yield this.uploadSvc.upload("event", formData));
            return event;
        });
    }
    editEvent(id, title, description, date, endDate, url, price, type, country, city, address, postal_code, contact_phone, contact_email, minage, image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("id", "" + id);
            formData.set("title", title);
            formData.set("description", description);
            formData.set("date", date);
            if (endDate) {
                formData.set("end_date", endDate);
            }
            formData.set("url", url);
            formData.set("price", "" + price);
            formData.set("minage", "" + minage);
            formData.set("image", image);
            formData.set("type", type);
            if (type === "offline") {
                formData.set("country", country);
                formData.set("city", city);
                formData.set("address", address);
                if (postal_code) {
                    formData.set("postal_code", postal_code);
                }
                if (contact_phone) {
                    formData.set("contact_phone", contact_phone);
                }
                if (contact_email) {
                    formData.set("contact_email", contact_email);
                }
            }
            return (yield this.uploadSvc.upload("edit-event", formData));
        });
    }
    getMyEvents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`my-events`).toPromise());
        });
    }
    getSuggestedEvents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`suggested-events`).toPromise());
        });
    }
    getOnlineEvents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`online-events`).toPromise());
        });
    }
    getNearEvents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`near-events`).toPromise());
        });
    }
    getEventsSlug(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`slug-events/${slug}`).toPromise());
        });
    }
    cancelEvent(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const event = (yield this.rest
                    .put("cancel-event", { id })
                    .toPromise());
                return event;
            }
            catch (e) {
                throw new Error("No se puede cancelar el evento");
            }
        });
    }
    deleteEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.rest.delete(`delete-event/${event.id}`).toPromise();
            }
            catch (e) {
                throw new Error("No se puede eliminar el evento");
            }
        });
    }
    participateEvent(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const event = (yield this.rest
                    .post("participate-event", { id })
                    .toPromise());
                return event;
            }
            catch (e) {
                throw new Error("Error al participar en el evento");
            }
        });
    }
    unparticipateEvent(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const event = (yield this.rest
                    .delete(`remove-participant-event/${id}`)
                    .toPromise());
                return event;
            }
            catch (e) {
                throw new Error("Error al quitar participación en el evento");
            }
        });
    }
    confirmDate(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const event = (yield this.rest
                    .post("confirm-date", { id })
                    .toPromise());
                return event;
            }
            catch (e) {
                throw new Error("Error al confirmar la cita");
            }
        });
    }
    declineDate(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const event = (yield this.rest
                    .put("decline-date", { id })
                    .toPromise());
                return event;
            }
            catch (e) {
                throw new Error("No se puede rechazar la cita");
            }
        });
    }
};
EventService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService },
    { type: _upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
EventService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService,
        _upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient])
], EventService);



/***/ }),

/***/ 89565:
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavService": () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);




let NavService = class NavService {
    constructor(router, nav, platform, toast, modal) {
        this.router = router;
        this.nav = nav;
        this.platform = platform;
        this.toast = toast;
        this.modal = modal;
        this.history = [];
        this.backButtonCount = 0;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                this.history.push(event.urlAfterRedirects);
                this.backButtonCount = 0;
            }
        });
    }
    back() {
        this.history.pop();
        if (this.history.length > 0) {
            this.nav.back();
        }
        else {
            this.router.navigateByUrl("/");
        }
    }
    navigateRoot(url, options) {
        this.nav.navigateRoot(url, options);
    }
    backButtonStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.backButton.subscribeWithPriority(1, () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                if (!!document.querySelector(".cupertino-pane-wrapper")) {
                    this.backButtonCount = 0;
                }
                else if (this.router.url.includes("chat") &&
                    (yield this.modal.getTop())) {
                    this.modal.dismiss();
                }
                else if (this.router.url.includes("/tabs/") ||
                    this.router.url === "/") {
                    this.backButtonCount++;
                    if (this.backButtonCount === 1) {
                        (yield this.toast.create({
                            message: "Pulsa de nuevo para salir de la aplicación",
                            duration: 2000,
                            position: "bottom"
                        })).present();
                    }
                    else if (this.backButtonCount >= 2) {
                        navigator["app"].exitApp();
                    }
                }
                else {
                    this.back();
                    this.backButtonCount = 0;
                }
            }));
        });
    }
};
NavService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
NavService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: "root" }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController])
], NavService);



/***/ }),

/***/ 12013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest.service */ 43006);




let NotificationService = class NotificationService {
    constructor(rest) {
        this.rest = rest;
        this.notificationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem("notification")));
        this.notification = this.notificationSubject.asObservable();
    }
    get notificationValue() {
        return this.notificationSubject.value;
    }
    setNotification(notification) {
        localStorage.setItem("notification", JSON.stringify(notification));
        this.notificationSubject.next(notification);
    }
    getUnread() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.rest.get(`notifications`).toPromise();
        });
    }
    getNotifications() {
        return this.rest.get(`notifications-list`).toPromise();
    }
    readNotification(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .get(`read-notification/${id}`)
                .toPromise());
        });
    }
    unreadNotification(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .get(`unread-notification/${id}`)
                .toPromise());
        });
    }
    removeNotification(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.rest.delete(`remove-notification/${id}`).toPromise();
        });
    }
    removeNotifications() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.rest.delete(`remove-notifications`).toPromise();
        });
    }
};
NotificationService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService])
], NotificationService);



/***/ }),

/***/ 52314:
/*!******************************************!*\
  !*** ./src/app/services/push.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushService": () => (/* binding */ PushService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ 71695);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17265);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 76637);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45050);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 64933);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device.service */ 34811);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification.service */ 12013);












let PushService = class PushService {
    constructor(device, firebasex, router, notificationSvc, localNotifications, platform, auth, afMessaging, swPush) {
        this.device = device;
        this.firebasex = firebasex;
        this.router = router;
        this.notificationSvc = notificationSvc;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.auth = auth;
        this.afMessaging = afMessaging;
        this.swPush = swPush;
        this.notifications = [];
        this.token = "";
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                try {
                    yield this.firebasex.hasPermission();
                    this.localNotifications.on("click").subscribe((notification) => {
                        console.log("click", notification);
                        const data = notification.data;
                        this.router.navigate([data.url]);
                    });
                    this.localNotifications.on("trigger").subscribe((notification) => {
                        console.log("trigger", notification);
                        const data = notification.data;
                    });
                    this.localNotifications.on("reply").subscribe((notification) => {
                        console.log("onreply", notification);
                    });
                }
                catch (e) {
                    console.error(e);
                }
            }
            else {
                if (!navigator.serviceWorker) {
                    return console.error("Service Worker not supported");
                }
                /*this.afMessaging.onBackgroundMessage(p => {
                  console.log(p)
                })*/
                this.swPush.notificationClicks.subscribe((payload) => {
                    this.router.navigate([payload.notification.data.url]);
                });
            }
        }));
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("cordova")) {
                this.setChannels();
                this.firebasex.getToken().then((token) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    // console.log("Notification token:", token);
                    yield this.device.setDevice(token);
                }));
                /*this.firebase.onTokenRefresh().subscribe(async token => {
                  // console.log("Notification token refreshed:", token);
                  await this.device.setDevice(token);
                });*/
                this.firebasex
                    .subscribe("frikiradar")
                    .then((response) => console.log("Successfully subscribed to topic:", response))
                    .catch((error) => {
                    console.log("Error subscribing to topic:", error);
                });
                if (this.auth.isAdmin() || this.auth.isMaster()) {
                    this.firebasex
                        .subscribe("test")
                        .then((response) => console.log("Successfully subscribed to topic:", response))
                        .catch((error) => {
                        console.log("Error subscribing to topic:", error);
                    });
                }
                this.firebasex.onMessageReceived().subscribe((payload) => {
                    // console.log("payload", payload);
                    if (payload.tap) {
                        this.router.navigate([payload.url]);
                    }
                    else {
                        this.localNotification(payload);
                        if (!this.router.url.includes("chat")) {
                            this.notificationSvc
                                .getUnread()
                                .then((notification) => {
                                this.notificationSvc.setNotification(notification);
                            });
                        }
                        // console.log("Received in foreground");
                    }
                }, (error) => {
                    console.error("Error in notification", error);
                });
            }
            else {
                try {
                    yield this.requestPermission();
                    this.afMessaging.messages.subscribe((payload) => {
                        console.log("new message received. ", payload);
                        if (payload === null || payload === void 0 ? void 0 : payload.notification) {
                            this.localNotification(payload);
                            if (!this.router.url.includes("chat")) {
                                this.notificationSvc
                                    .getUnread()
                                    .then((notification) => {
                                    this.notificationSvc.setNotification(notification);
                                });
                            }
                        }
                    });
                }
                catch (e) {
                    // console.log("Notificaciones no permitidas")
                }
            }
        });
    }
    setChannels() {
        const channels = [
            {
                id: "chat",
                name: "Notificaciones de Chat",
                description: "Recibe notificaciones de chat cuando alguien te escribe.",
            },
            {
                id: "radar",
                name: "Notificaciones de Radar",
                description: "Recibe notificaciones cuando hay un usuario interesante cerca de ti.",
            },
            {
                id: "like",
                name: "Notificaciones de Kokoros",
                description: "Recibe notificaciones cuando un usuario te entregue su kokoro.",
            },
            {
                id: "rooms",
                name: "Notificaciones de salas de chat",
                description: "Recibe notificaciones de nuevos mensajes en salas de chat.",
            },
            {
                id: "frikiradar",
                name: "Notificaciones de FrikiRadar",
                description: "Canal de información sobre FrikiRadar, novedades y actualizaciones.",
            },
            {
                id: "test",
                name: "Notificaciones de testeo",
                description: "Canal de testeo, exclusivo para masters.",
            },
        ];
        for (let channel of channels) {
            if (channel.id == "test" &&
                !(this.auth.isAdmin() || this.auth.isMaster())) {
                continue;
            }
            this.firebasex
                .createChannel({
                id: channel.id,
                name: channel.name,
                sound: "bipbip",
                description: channel.description,
            })
                .then((response) => {
                // console.log("Notification Channel created", channel, response);
            })
                .catch((error) => {
                console.log("Create notification channel error: " + error);
            });
        }
        this.firebasex
            .deleteChannel("fcm_default_channel")
            .then((response) => {
            // console.log(response);
        })
            .catch((error) => {
            console.error("Error deleting channel", error);
        });
        /*this.firebase
          .listChannels()
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });*/
    }
    localNotification(notification) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            /*let actions = null;
            if (notification.topic == "chat") {
              actions = [
                {
                  id: "reply",
                  type: "input",
                  title: "Responder",
                  emptyText: "Escribe tu mensaje"
                }
              ] as any[];
            }*/
            if (this.platform.is("cordova")) {
                if (!this.router.url.includes("chat") &&
                    (notification === null || notification === void 0 ? void 0 : notification.notify) === "true") {
                    this.localNotifications.schedule({
                        title: notification === null || notification === void 0 ? void 0 : notification.title,
                        text: notification === null || notification === void 0 ? void 0 : notification.body,
                        sound: "file://assets/audio/bipbip.mp3",
                        smallIcon: "res://notification_icon",
                        color: "#e91e63",
                        icon: notification === null || notification === void 0 ? void 0 : notification.icon,
                        // attachments: notification?.attachments,
                        channel: notification === null || notification === void 0 ? void 0 : notification.topic,
                        data: notification,
                        // actions
                    });
                }
            }
            else {
                if (!this.router.url.includes("chat") &&
                    ((_a = notification === null || notification === void 0 ? void 0 : notification.data) === null || _a === void 0 ? void 0 : _a.notify) === "true") {
                    try {
                        const registration = yield navigator.serviceWorker.ready;
                        // Customize notification here
                        const notificationTitle = notification === null || notification === void 0 ? void 0 : notification.title;
                        const notificationOptions = {
                            body: notification === null || notification === void 0 ? void 0 : notification.body,
                            icon: (_b = notification === null || notification === void 0 ? void 0 : notification.data) === null || _b === void 0 ? void 0 : _b.icon,
                            image: ((_c = notification === null || notification === void 0 ? void 0 : notification.data) === null || _c === void 0 ? void 0 : _c.attachments)
                                ? notification === null || notification === void 0 ? void 0 : notification.data.attachments[0]
                                : null,
                            badge: (_d = notification === null || notification === void 0 ? void 0 : notification.data) === null || _d === void 0 ? void 0 : _d.badge,
                        };
                        yield registration.showNotification(notificationTitle, notificationOptions);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
            }
        });
    }
    requestPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.afMessaging.requestPermission.toPromise();
            this.afMessaging.tokenChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeWhile)((token) => this.token !== token))
                .subscribe((token) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.token = token;
                // console.log("Notification token:", token);
                yield this.device.setDevice(token);
            }), (error) => {
                console.error(error);
            });
        });
    }
};
PushService.ctorParameters = () => [
    { type: _device_service__WEBPACK_IMPORTED_MODULE_3__.DeviceService },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_0__.FirebaseX },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_1__.LocalNotifications },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_9__.AngularFireMessaging },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.SwPush }
];
PushService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: "root",
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_device_service__WEBPACK_IMPORTED_MODULE_3__.DeviceService,
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_0__.FirebaseX,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router,
        _notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService,
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_1__.LocalNotifications,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform,
        _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_9__.AngularFireMessaging,
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.SwPush])
], PushService);



/***/ }),

/***/ 43006:
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": () => (/* binding */ RestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Content-Type": "application/json" })
};
let RestService = class RestService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get(endpoint) {
        return this.http.get(`${this.apiUrl}${endpoint}`, httpOptions);
    }
    post(endpoint, data) {
        return this.http.post(`${this.apiUrl}${endpoint}`, JSON.stringify(data), httpOptions);
    }
    put(endpoint, data) {
        return this.http.put(`${this.apiUrl}${endpoint}`, JSON.stringify(data), httpOptions);
    }
    delete(endpoint) {
        if (!localStorage.getItem("currentUser")) {
            return;
        }
        return this.http.delete(`${this.apiUrl}${endpoint}`, httpOptions);
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RestService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient])
], RestService);



/***/ }),

/***/ 51037:
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomService": () => (/* binding */ RoomService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ 70946);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ 43006);
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.service */ 36705);







let RoomService = class RoomService {
    constructor(rest, config, uploadSvc, // private push: PushService
    auth) {
        this.rest = rest;
        this.config = config;
        this.uploadSvc = uploadSvc;
        this.auth = auth;
    }
    getRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get("rooms").toPromise());
        });
    }
    getRoom(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`room/${slug}`).toPromise());
        });
    }
    sseRegister(channel) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const config = yield this.config.getConfig();
            this.source = new EventSource(`${config.push_url}?topic=${channel}`);
        });
    }
    sseListener() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.source || this.source.readyState === 2) {
                this.sseRegister("rooms");
            }
            return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
                this.source.onmessage = x => observer.next(JSON.parse(x.data));
                this.source.onerror = x => {
                    this.source.close();
                    observer.error(x);
                };
                return () => {
                    this.source.close();
                };
            });
        });
    }
    getMessages(slug, page = 1) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .get(`room-messages/${slug}?page=${page}`)
                .toPromise());
        });
    }
    writing(name, slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .put("writing-room", { name, slug })
                .toPromise());
        });
    }
    sendMessage(slug, name, text, replyto, tmp_id, mentions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .put("room-message", { slug, name, text, replyto, tmp_id, mentions })
                .toPromise());
        });
    }
    sendImage(slug, name, image, text, tmp_id, mentions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("image", image);
            formData.set("slug", "" + slug);
            formData.set("name", "" + name);
            formData.set("text", text);
            formData.set("tmp_id", tmp_id);
            formData.set("mentions", JSON.stringify(mentions));
            return (yield this.uploadSvc.upload("room-upload", formData));
        });
    }
    setLastMessage(room) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const value = room.last_message;
            const slug = room.slug;
            let rooms_config = yield this.getRoomsConfig();
            let last_message = 0;
            if ((_a = rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.find(c => c.slug === slug)) === null || _a === void 0 ? void 0 : _a.last_message) {
                last_message = rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.find(c => c.slug === slug).last_message;
            }
            if (value > last_message) {
                if (rooms_config) {
                    if (rooms_config.some(r => r.slug === slug)) {
                        rooms_config.map(r => {
                            if (r.slug === slug) {
                                r.last_message = value;
                            }
                        });
                    }
                    else {
                        rooms_config = [
                            ...rooms_config,
                            {
                                slug,
                                last_message: value
                            }
                        ];
                    }
                }
                else {
                    rooms_config = [
                        {
                            slug,
                            last_message: value
                        }
                    ];
                }
                yield this.setRoomsConfig(rooms_config);
            }
        });
    }
    reorderRooms(from, to) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let rooms_config = yield this.getRoomsConfig();
            rooms_config.map((r, index) => {
                if (r.order === from) {
                    r.order = to;
                }
                else if (r.order > from && r.order <= to) {
                    r.order--;
                }
                else if (r.order < from && r.order >= to) {
                    r.order++;
                }
            });
            yield this.setRoomsConfig(rooms_config);
        });
    }
    orderRooms(rooms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let rooms_config = yield this.getRoomsConfig();
            rooms_config = rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.filter(r => {
                if (rooms.find(room => room.slug === r.slug)) {
                    return r;
                }
            });
            if (rooms_config &&
                !(rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.some(r => r.order === undefined)) &&
                !(rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.some(r => {
                    if (rooms_config.some(r1 => r1.slug !== r.slug && r1.order === r.order)) {
                        return true;
                    }
                })) &&
                (rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.length) === rooms.length) {
                // Ordename según la config
                rooms.sort((a, b) => {
                    var _a, _b;
                    return (((_a = rooms_config.find(r => r.slug === a.slug)) === null || _a === void 0 ? void 0 : _a.order) -
                        ((_b = rooms_config.find(r => r.slug === b.slug)) === null || _b === void 0 ? void 0 : _b.order));
                });
            }
            else {
                yield this.initOrderRoom(rooms);
            }
            return rooms;
        });
    }
    initOrderRoom(rooms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let rooms_config = yield this.getRoomsConfig();
            rooms.forEach((room, index) => {
                if (rooms_config) {
                    if (rooms_config.some(r => r.slug === room.slug)) {
                        rooms_config.map(r => {
                            if (r.slug === room.slug) {
                                r.order = index;
                            }
                        });
                    }
                    else {
                        rooms_config = [
                            ...rooms_config,
                            {
                                slug: room.slug,
                                order: index
                            }
                        ];
                    }
                }
                else {
                    rooms_config = [
                        {
                            slug: room.slug,
                            order: index
                        }
                    ];
                }
            });
            yield this.setRoomsConfig(rooms_config);
        });
    }
    setRoomsConfig(rooms_config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = (yield this.rest
                .put("rooms-config", { rooms_config })
                .toPromise());
            this.auth.setAuthUser(user);
        });
    }
    getRoomsConfig() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const config = (_a = this.auth.currentUserValue) === null || _a === void 0 ? void 0 : _a.config;
            return config === null || config === void 0 ? void 0 : config.rooms;
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.source) === null || _a === void 0 ? void 0 : _a.close();
        // console.log("Conexión cerrada", this.source.url);
    }
};
RoomService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService },
    { type: _upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
RoomService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService,
        _config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService,
        _upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService,
        _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService])
], RoomService);



/***/ }),

/***/ 78934:
/*!*******************************************!*\
  !*** ./src/app/services/story.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryService": () => (/* binding */ StoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest.service */ 43006);
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.service */ 36705);





let StoryService = class StoryService {
    constructor(rest, uploadSvc, auth) {
        this.rest = rest;
        this.uploadSvc = uploadSvc;
        this.auth = auth;
    }
    getStory(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest.get(`story/${id}`).toPromise());
        });
    }
    getUserStories(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const stories = (yield this.rest
                .get(`user-stories/${id}`)
                .toPromise());
            stories.map(s => {
                if (s.viewStories.some(v => v.user.id === this.auth.currentUserValue.id) ||
                    s.user.id === this.auth.currentUserValue.id) {
                    s.viewed = true;
                }
            });
            return stories;
        });
    }
    getStories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const stories = (yield this.rest.get("stories").toPromise());
            stories.map(s => {
                if (s.viewStories.some(v => v.user.id === this.auth.currentUserValue.id) ||
                    s.user.id === this.auth.currentUserValue.id) {
                    s.viewed = true;
                }
            });
            return stories;
        });
    }
    getStoriesSlug(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const stories = (yield this.rest
                .get(`stories-slug/${slug}`)
                .toPromise());
            stories.map(s => {
                if (s.viewStories.some(v => v.user.id === this.auth.currentUserValue.id) ||
                    s.user.id === this.auth.currentUserValue.id) {
                    s.viewed = true;
                }
            });
            return stories;
        });
    }
    getAllStories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const stories = (yield this.rest.get("all-stories").toPromise());
            stories.map(s => {
                if (s.viewStories.some(v => v.user.id === this.auth.currentUserValue.id) ||
                    s.user.id === this.auth.currentUserValue.id) {
                    s.viewed = true;
                }
            });
            return stories;
        });
    }
    orderStories(stories) {
        stories.sort((a, b) => {
            return (new Date(a.time_creation).getTime() -
                new Date(b.time_creation).getTime());
        });
        return stories;
    }
    groupStories(stories) {
        const groupedStories = [];
        stories = stories.reverse();
        stories.forEach(s => {
            if (!groupedStories.some(g => g.user.id === s.user.id)) {
                const filterStories = stories.filter(sf => sf.user.id === s.user.id);
                groupedStories.push(filterStories[0]);
            }
        });
        return [
            ...groupedStories.filter(s => s.user.id === this.auth.currentUserValue.id),
            ...groupedStories.filter(s => s.user.id !== this.auth.currentUserValue.id)
        ];
    }
    sendStory(image, text, mentions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("image", image);
            formData.set("text", text);
            formData.set("mentions", JSON.stringify(mentions));
            return (yield this.uploadSvc.upload("story-upload", formData));
        });
    }
    viewStory(id) {
        this.rest.put("view-story", { story: id }).toPromise();
    }
    deleteStory(id) {
        return this.rest.delete(`delete-story/${id}`).toPromise();
    }
    like(id) {
        return this.rest.put("like-story", { story: id }).toPromise();
    }
    unlike(id) {
        return this.rest.delete(`like-story/${id}`).toPromise();
    }
    commentStory(id, text, mentions) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .put("comment-story", { story: id, text, mentions })
                .toPromise());
        });
    }
    likeComment(id) {
        return this.rest
            .put("like-comment", { comment: id })
            .toPromise();
    }
    unlikeComment(id) {
        return this.rest.delete(`like-comment/${id}`).toPromise();
    }
    deleteComment(id) {
        return this.rest.delete(`delete-comment/${id}`).toPromise();
    }
};
StoryService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService },
    { type: _upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
StoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService,
        _upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService,
        _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService])
], StoryService);



/***/ }),

/***/ 70018:
/*!****************************************!*\
  !*** ./src/app/services/sw.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwService": () => (/* binding */ SwService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ 64933);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);




let SwService = class SwService {
    constructor(swUpdate, toast) {
        this.swUpdate = swUpdate;
        this.toast = toast;
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.swUpdate.available.subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toast.create({
                    message: "¡Nueva actualización disponible!",
                    buttons: [
                        {
                            text: "Instalar",
                            handler: () => {
                                window.location.reload();
                            }
                        }
                    ],
                    position: "bottom"
                });
                yield toast.present();
                toast
                    .onDidDismiss()
                    .then(() => this.swUpdate.activateUpdate())
                    .then(() => window.location.reload());
            }));
        });
    }
};
SwService.ctorParameters = () => [
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__.SwUpdate },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController }
];
SwService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: "root" }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__.SwUpdate, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController])
], SwService);



/***/ }),

/***/ 36705:
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadService": () => (/* binding */ UploadService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let UploadService = class UploadService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    upload(endpoint, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            return yield this.http
                .post(`${this.apiUrl}${endpoint}`, data, {
                params,
                reportProgress: true
            })
                .toPromise();
        });
    }
};
UploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient])
], UploadService);



/***/ }),

/***/ 90925:
/*!*****************************************!*\
  !*** ./src/app/services/url.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlService": () => (/* binding */ UrlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/browser-tab/ngx */ 58195);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 49048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room.service */ 51037);







let UrlService = class UrlService {
    constructor(browserTab, iab, platform, router, roomSvc) {
        this.browserTab = browserTab;
        this.iab = iab;
        this.platform = platform;
        this.router = router;
        this.roomSvc = roomSvc;
    }
    openUrl(event) {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let url = "";
            if (typeof event !== "string" && ((_a = event === null || event === void 0 ? void 0 : event.srcElement) === null || _a === void 0 ? void 0 : _a.href)) {
                event.preventDefault();
            }
            if (((_b = event === null || event === void 0 ? void 0 : event.srcElement) === null || _b === void 0 ? void 0 : _b.href) &&
                ((_c = event === null || event === void 0 ? void 0 : event.target) === null || _c === void 0 ? void 0 : _c.className.includes("linkified"))) {
                url = event.srcElement.href;
            }
            else if (typeof event === "string") {
                url = event;
            }
            if (url) {
                url = this.convertUrl(url);
                if (url.charAt(0) == "/") {
                    this.router.navigate([url]);
                }
                else {
                    if (this.platform.is("cordova")) {
                        this.browserTab.isAvailable().then(isAvailable => {
                            if (isAvailable) {
                                this.browserTab.openUrl(url);
                            }
                            else {
                                const browser = this.iab.create(url);
                                browser.show();
                            }
                        });
                    }
                    else {
                        const browser = this.iab.create(url);
                        browser.show();
                    }
                    return;
                }
            }
            if (((_d = event.srcElement) === null || _d === void 0 ? void 0 : _d.href) && event.target.className.includes("mention")) {
                const id = event.target.innerHTML.replace("@", "");
                if (id !== 1) {
                    this.router.navigate(["/profile", id]);
                }
                return;
            }
            if (((_e = event.srcElement) === null || _e === void 0 ? void 0 : _e.href) && event.target.className.includes("hashtag")) {
                let slug = event.target.innerHTML.replace("#", "");
                slug = slug === "frikiradar" ? "frikiradar-room" : slug;
                const room = yield this.roomSvc.getRoom(slug);
                if (room.page) {
                    this.router.navigate(["/page", slug]);
                }
                else {
                    this.router.navigate(["/room", slug]);
                }
                return;
            }
        });
    }
    convertUrl(url) {
        // si estoy en app y recibo https://frikiradar.app/albertoi -> convierto a /albertoi
        if (url.includes("https://frikiradar.app/")) {
            url = url.replace("https://frikiradar.app/", "/");
        }
        return url;
    }
};
UrlService.ctorParameters = () => [
    { type: _ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_0__.BrowserTab },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__.InAppBrowser },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _room_service__WEBPACK_IMPORTED_MODULE_2__.RoomService }
];
UrlService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_ionic_native_browser_tab_ngx__WEBPACK_IMPORTED_MODULE_0__.BrowserTab,
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__.InAppBrowser,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router,
        _room_service__WEBPACK_IMPORTED_MODULE_2__.RoomService])
], UrlService);



/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ 43006);
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.service */ 36705);








const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ "Content-Type": "application/json" })
};
let UserService = class UserService {
    constructor(rest, uploadSvc, auth, toast, http) {
        this.rest = rest;
        this.uploadSvc = uploadSvc;
        this.auth = auth;
        this.toast = toast;
        this.http = http;
    }
    getUser(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return (yield this.rest.get(`user/${id}`).toPromise());
            }
            catch (e) {
                throw new Error("No se puede obtener el usuario");
            }
        });
    }
    getPublicUser(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return (yield this.http
                    .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.root}api/public-user/${id}`, httpOptions)
                    .toPromise());
            }
            catch (e) {
                throw new Error("No se puede obtener el usuario");
            }
        });
    }
    updateUser(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                user = (yield this.rest.put("user", user).toPromise());
                this.auth.setAuthUser(user);
                return user;
            }
            catch (e) {
                throw new Error("No se puede actualizar el usuario");
            }
        });
    }
    uploadAvatar(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.set("avatar", file);
            const user = (yield this.uploadSvc.upload("avatar", formData));
            localStorage.setItem("currentUser", JSON.stringify(user));
            return user;
        });
    }
    setAvatar(src) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = (yield this.rest
                    .put("avatar", { avatar: src })
                    .toPromise());
                this.auth.setAuthUser(user);
                return user;
            }
            catch (e) {
                throw new Error("No se puede actualizar el usuario");
            }
        });
    }
    deleteAvatar(src) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = (yield this.rest
                    .put("delete-avatar", { avatar: src })
                    .toPromise());
                this.auth.setAuthUser(user);
                return user;
            }
            catch (e) {
                throw new Error("No se puede actualizar el usuario");
            }
        });
    }
    setCoordinates(longitude, latitude) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.rest
                .put("coordinates", { longitude, latitude })
                .toPromise());
        });
    }
    getRadarUsers(page = 1, ratio = -1, options) {
        return this.rest
            .put("radar", { page, ratio, options })
            .toPromise();
    }
    searchUsers(query, order, page) {
        return this.rest
            .post(`search?page=${page}`, { query, order })
            .toPromise();
    }
    searchUsernames(query) {
        return this.rest.get(`search-usernames/${query}`).toPromise();
    }
    activateUser(verification_code) {
        return this.rest
            .put("activation", { verification_code })
            .toPromise();
    }
    resendActivationEmail() {
        return this.rest.get("activation");
    }
    disableUser(password, note) {
        return this.rest
            .put("disable", {
            password,
            note
        })
            .toPromise();
    }
    removeAccount(password, note) {
        return this.rest
            .put("remove-account", {
            password,
            note
        })
            .toPromise();
    }
    changePassword(old_password, new_password) {
        return this.rest
            .put("password", {
            old_password,
            new_password
        })
            .toPromise();
    }
    changeEmail(old_email, new_email) {
        return this.rest
            .put("email", {
            old_email,
            new_email
        })
            .toPromise();
    }
    changeUsername(new_username) {
        return this.rest
            .put("username", {
            new_username
        })
            .toPromise();
    }
    getLikes() {
        return this.rest.get("likes").toPromise();
    }
    like(id) {
        return this.rest.put("like", { user: id }).toPromise();
    }
    unlike(id) {
        return this.rest.delete(`like/${id}`).toPromise();
    }
    getBlocks() {
        return this.rest.get("blocks").toPromise();
    }
    block(id, note) {
        return this.rest.put("block", { user: id, note }).toPromise();
    }
    unblock(id) {
        return this.rest.delete(`block/${id}`).toPromise();
    }
    report(id, note) {
        return this.rest.put("report", { user: id, note }).toPromise();
    }
    getHides() {
        return this.rest.get("hides").toPromise();
    }
    hide(id) {
        return this.rest.put("hide", { user: id }).toPromise();
    }
    view(id) {
        this.rest.put("view", { user: id }).toPromise();
    }
    unhide(id) {
        return this.rest.delete(`hide/${id}`).toPromise();
    }
    showRole(user) {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let message = "";
            if ((_a = user.roles) === null || _a === void 0 ? void 0 : _a.includes("ROLE_ADMIN")) {
                message = "Administrador";
            }
            else if ((_b = user.roles) === null || _b === void 0 ? void 0 : _b.includes("ROLE_MASTER")) {
                message = "Moderador";
            }
            else if ((_c = user.roles) === null || _c === void 0 ? void 0 : _c.includes("ROLE_PATREON")) {
                message = "Patreon";
            }
            else if (user.roles.includes("ROLE_DEMO")) {
                message = "FrikiBot";
            }
            else if (user.verified) {
                message = "Usuario verificado";
            }
            (yield this.toast.create({
                message,
                duration: 1500,
                position: "middle",
                color: this.getRoleColor(user)
            })).present();
        });
    }
    getRoleColor(user) {
        if (!user) {
            user = this.auth.currentUserValue;
        }
        if (user.roles.includes("ROLE_ADMIN")) {
            return "danger";
        }
        else if (user.roles.includes("ROLE_MASTER")) {
            return "tertiary";
        }
        else if (user.roles.includes("ROLE_PATREON")) {
            return "patreon";
        }
        else if (user.roles.includes("ROLE_DEMO")) {
            return "medium";
        }
        else if (user.verified) {
            return "secondary";
        }
        return "light";
    }
    getRoleIcon(user) {
        if (!user) {
            user = this.auth.currentUserValue;
        }
        if (user.roles.includes("ROLE_ADMIN")) {
            return "shield-checkmark";
        }
        else if (user.roles.includes("ROLE_MASTER")) {
            return "shield-checkmark";
        }
        else if (user.roles.includes("ROLE_PATREON")) {
            return "/assets/icon/patreon_coral.svg";
        }
        else if (user.roles.includes("ROLE_DEMO")) {
            return "/assets/icon/smart_toy_white_24dp.svg";
        }
        else if (user.verified) {
            return "checkmark-circle";
        }
        return false;
    }
    linkToPatreon(code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.rest.put("link-patreon", { oauth_code: code }).toPromise();
        });
    }
    getOrientations() {
        return [
            "Heterosexual",
            "Homosexual",
            "Bisexual",
            "Pansexual",
            "Queer",
            "Demisexual",
            "Sapiosexual",
            "Asexual"
        ];
    }
    getPronouns() {
        return ["El", "Ella", "Elle", "Elli"];
    }
    getRelationships() {
        return ["Monógama", "No-monógama"];
    }
    getStatus() {
        return ["Soltero", "Saliendo con alguien", "Pareja estable", "Casado"];
    }
    getGenders() {
        return [
            "Mujer",
            "Hombre",
            "Mujer transgénero",
            "Hombre transgénero",
            "Agénero",
            "Andrógino",
            "Género fluido",
            "Bigénero",
            "No-binario",
            "No conforme",
            "Pangénero",
            "Poligénero",
            "Intergénero"
        ];
    }
    getConnections() {
        return [
            "Amistad",
            "Sexo ocasional",
            "Amistad con derechos",
            "Pareja formal"
        ];
    }
};
UserService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({ providedIn: "root" }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService,
        _upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService,
        _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient])
], UserService);



/***/ }),

/***/ 88270:
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 82027);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 96772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _cropper_cropper_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cropper/cropper.modal */ 31811);
/* harmony import */ var _webcam_webcam_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webcam/webcam.modal */ 74543);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ 37556);











let UtilsService = class UtilsService {
    constructor(http, alert, auth, socialSharing, platform, webview, camera, modal, statusBar, // private navigationBar: NavigationBarColor
    toast) {
        this.http = http;
        this.alert = alert;
        this.auth = auth;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.webview = webview;
        this.camera = camera;
        this.modal = modal;
        this.statusBar = statusBar;
        this.toast = toast;
    }
    takePicture(mode, crop, name, returnsrc = false, square = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const fileUri = yield this.camera.getPicture({
                quality: 70,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                sourceType: mode === "camera"
                    ? this.camera.PictureSourceType.CAMERA
                    : this.camera.PictureSourceType.PHOTOLIBRARY,
                mediaType: this.camera.MediaType.PICTURE,
                cameraDirection: 1,
                correctOrientation: true
            });
            let src = this.webview.convertFileSrc(fileUri);
            try {
                if (crop) {
                    const res = yield this.cropImage("", src, square);
                    if (typeof res == "string") {
                        src = res;
                    }
                    else {
                        return;
                    }
                }
                // console.log(src);
                if (returnsrc) {
                    return src;
                }
                const blob = yield this.urltoBlob(src);
                return blob;
            }
            catch (e) {
                console.error("Error al recortar la imagen.", e);
            }
        });
    }
    cropImage(event = "", src = "", square = true, aspectRatio = 1 / 1) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _cropper_cropper_modal__WEBPACK_IMPORTED_MODULE_4__.CropperModal,
                componentProps: {
                    event,
                    src,
                    square,
                    aspectRatio
                },
                cssClass: "full-modal"
            });
            yield modal.present();
            try {
                const data = yield modal.onDidDismiss();
                if (data.data) {
                    return data.data;
                }
            }
            catch (e) {
                console.error(e);
            }
            return false;
        });
    }
    webcamImage(name = "default", crop, square = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _webcam_webcam_modal__WEBPACK_IMPORTED_MODULE_5__.WebcamModal,
                cssClass: "full-modal"
            });
            yield modal.present();
            try {
                const data = yield modal.onDidDismiss();
                if (data.data) {
                    let src = data.data;
                    if (crop) {
                        src = yield this.cropImage("", src, square);
                    }
                    if (typeof src == "string") {
                        const blob = yield this.urltoBlob(src);
                        return blob;
                    }
                    else {
                        return;
                    }
                }
            }
            catch (e) {
                console.error(e);
            }
            return false;
        });
    }
    base64toBlob(dataURI) {
        const bytes = atob(dataURI.split(",")[1]);
        // .replace(/^data:image\/(png|jpg|jpeg|\*);charset=utf-8;base64,/, "")
        const byteNumbers = new Array(bytes.length);
        for (let i = 0; i < bytes.length; i++) {
            byteNumbers[i] = bytes.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: "image/png" });
    }
    urltoBlob(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const blob = yield response.blob();
            return blob;
        });
    }
    blobToUrl(blob) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const src = URL.createObjectURL(blob);
            return src;
        });
    }
    fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    getBase64Image(imgUrl) {
        return new Promise(resolve => {
            const img = new Image();
            img.src = imgUrl;
            img.setAttribute("crossOrigin", "anonymous");
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                const dataURL = canvas.toDataURL("image/png");
                // resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
                resolve(dataURL);
            };
        });
    }
    getDataURI(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const blob = yield this.urltoBlob(url);
            return yield this.fileToBase64(blob);
        });
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: "Función aún no disponible",
                message: "Esta acción se encuentra aún en desarrollo.",
                buttons: ["Gracias por avisar"],
                cssClass: "round-alert"
            });
            yield alert.present();
        });
    }
    share(url = "", message = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!url) {
                url = "https://frikiradar.com";
            }
            if (!message) {
                message =
                    "Conoce a personas con tus mismos gustos con FrikiRadar, la red social para frikis";
            }
            const referrer = this.auth.currentUserValue
                ? this.auth.currentUserValue.username
                : this.platform.is("cordova")
                    ? "app"
                    : "web";
            if (this.platform.is("hybrid")) {
                const options = {
                    message,
                    subject: "FrikiRadar, conoce a personas frikis como tú",
                    url: `${url}?referrer=${referrer}`,
                    chooserTitle: "Elige una app y ayúdanos a seguir creciendo" // Android only, you can override the default share sheet title,
                };
                this.socialSharing.shareWithOptions(options);
            }
            else if (window.navigator && window.navigator["share"]) {
                window.navigator["share"]({
                    title: "FrikiRadar, conoce a personas frikis como tú",
                    text: message,
                    url: `${url}?referrer=${referrer}`
                })
                    .then(() => {
                    console.log("Thanks for sharing!");
                })
                    .catch(console.error);
            }
            else {
                // fallback
                try {
                    yield navigator.clipboard.writeText(`${message} ${url}?referrer=${referrer}`);
                    (yield this.toast.create({
                        message: "Link copiado al portapapeles",
                        duration: 2000,
                        position: "middle"
                    })).present();
                }
                catch (e) {
                    (yield this.toast.create({
                        message: "Error al copiar el link",
                        duration: 2000,
                        position: "middle"
                    })).present();
                }
            }
        });
    }
    niceDate(time) {
        const date = new Date(time);
        const hours = this.format_two_digits(date.getHours());
        const minutes = this.format_two_digits(date.getMinutes());
        const diff = (new Date().getTime() - date.getTime()) / 1000;
        const daydiff = Math.floor(diff / 86400);
        if (isNaN(daydiff) || daydiff < 0 || daydiff >= 31) {
            return "";
        }
        return ((daydiff === 0 &&
            ((diff < 300 && "ahora mismo") ||
                (diff < 3600 && "hace " + Math.floor(diff / 60) + " minutos") ||
                (diff < 7200 && "hace 1 hora") ||
                (diff < 86400 && "hace " + Math.floor(diff / 3600) + " horas"))) ||
            (daydiff === 1 && "ayer a las " + hours + ":" + minutes) ||
            (daydiff < 14 && "hace " + daydiff + " días") ||
            (daydiff < 30 && "hace " + Math.ceil(daydiff / 7) + " semanas") ||
            (daydiff < 60 && "hace 1 mes"));
    }
    format_two_digits(n) {
        return n < 10 ? "0" + n : n;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    toggleTheme(theme, oldTheme) {
        if (oldTheme) {
            document.body.classList.toggle(oldTheme, false);
        }
        document.body.classList.toggle(theme, true);
        if (this.platform.is("cordova")) {
            switch (theme) {
                case "dark":
                    this.statusBar.backgroundColorByHexString("#1f1f1f");
                    this.statusBar.styleBlackTranslucent();
                    // this.navigationBar.backgroundColorByHexString("#1f1f1f");
                    break;
                case "light":
                    this.statusBar.backgroundColorByHexString("#fafafa");
                    this.statusBar.styleDefault();
                    // this.navigationBar.backgroundColorByHexString("#fafafa");
                    break;
                case "cyberpunk":
                    this.statusBar.backgroundColorByHexString("#0c1340");
                    this.statusBar.styleBlackTranslucent();
                    // this.navigationBar.backgroundColorByHexString("#0c1340");
                    break;
                case "black":
                    this.statusBar.backgroundColorByHexString("#000000");
                    this.statusBar.styleBlackTranslucent();
                    break;
                case "fire":
                    this.statusBar.backgroundColorByHexString("#000000");
                    this.statusBar.styleBlackTranslucent();
                    // this.navigationBar.backgroundColorByHexString("#0c1340");
                    break;
                default:
                    this.statusBar.backgroundColorByHexString("#1f1f1f");
                    this.statusBar.styleBlackTranslucent();
                // this.navigationBar.backgroundColorByHexString("#1f1f1f");
            }
        }
    }
    makeId(length) {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    getCountries() {
        return [
            "España",
            "México",
            "Argentina",
            "Chile",
            "Perú",
            "Afganistán",
            "Albania",
            "Alemania",
            "Andorra",
            "Angola",
            "Antigua y Barbuda",
            "Arabia Saudita",
            "Argelia",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaiyán",
            "Bahamas",
            "Bangladés",
            "Barbados",
            "Baréin",
            "Bélgica",
            "Belice",
            "Benín",
            "Bielorrusia",
            "Birmania",
            "Bolivia",
            "Bosnia y Herzegovina",
            "Botsuana",
            "Brasil",
            "Brunéi",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Bután",
            "Cabo Verde",
            "Camboya",
            "Camerún",
            "Canadá",
            "Catar",
            "Chad",
            "China",
            "Chipre",
            "Ciudad del Vaticano",
            "Colombia",
            "Comoras",
            "Corea del Norte",
            "Corea del Sur",
            "Costa de Marfil",
            "Costa Rica",
            "Croacia",
            "Cuba",
            "Dinamarca",
            "Dominica",
            "Ecuador",
            "Egipto",
            "El Salvador",
            "Emiratos Árabes Unidos",
            "Eritrea",
            "Eslovaquia",
            "Eslovenia",
            "Estados Unidos",
            "Estonia",
            "Etiopía",
            "Filipinas",
            "Finlandia",
            "Fiyi",
            "Francia",
            "Gabón",
            "Gambia",
            "Georgia",
            "Ghana",
            "Granada",
            "Grecia",
            "Guatemala",
            "Guyana",
            "Guinea",
            "Guinea ecuatorial",
            "Guinea-Bisáu",
            "Haití",
            "Honduras",
            "Hungría",
            "India",
            "Indonesia",
            "Irak",
            "Irán",
            "Irlanda",
            "Islandia",
            "Islas Marshall",
            "Islas Salomón",
            "Israel",
            "Italia",
            "Jamaica",
            "Japón",
            "Jordania",
            "Kazajistán",
            "Kenia",
            "Kirguistán",
            "Kiribati",
            "Kuwait",
            "Laos",
            "Lesoto",
            "Letonia",
            "Líbano",
            "Liberia",
            "Libia",
            "Liechtenstein",
            "Lituania",
            "Luxemburgo",
            "Madagascar",
            "Malasia",
            "Malaui",
            "Maldivas",
            "Malí",
            "Malta",
            "Marruecos",
            "Mauricio",
            "Mauritania",
            "Micronesia",
            "Moldavia",
            "Mónaco",
            "Mongolia",
            "Montenegro",
            "Mozambique",
            "Namibia",
            "Nauru",
            "Nepal",
            "Nicaragua",
            "Níger",
            "Nigeria",
            "Noruega",
            "Nueva Zelanda",
            "Omán",
            "Países Bajos",
            "Pakistán",
            "Palaos",
            "Panamá",
            "Papúa Nueva Guinea",
            "Paraguay",
            "Polonia",
            "Portugal",
            "Reino Unido",
            "República Centroafricana",
            "República Checa",
            "República de Macedonia",
            "República del Congo",
            "República Democrática del Congo",
            "República Dominicana",
            "República Sudafricana",
            "Ruanda",
            "Rumanía",
            "Rusia",
            "Samoa",
            "San Cristóbal y Nieves",
            "San Marino",
            "San Vicente y las Granadinas",
            "Santa Lucía",
            "Santo Tomé y Príncipe",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leona",
            "Singapur",
            "Siria",
            "Somalia",
            "Sri Lanka",
            "Suazilandia",
            "Sudán",
            "Sudán del Sur",
            "Suecia",
            "Suiza",
            "Surinam",
            "Tailandia",
            "Tanzania",
            "Tayikistán",
            "Timor Oriental",
            "Togo",
            "Tonga",
            "Trinidad y Tobago",
            "Túnez",
            "Turkmenistán",
            "Turquía",
            "Tuvalu",
            "Ucrania",
            "Uganda",
            "Uruguay",
            "Uzbekistán",
            "Vanuatu",
            "Venezuela",
            "Vietnam",
            "Yemen",
            "Yibuti",
            "Zambia",
            "Zimbabue"
        ];
    }
    getDeviceSymbols() {
        return ["$", "€", "S/.", "¥", "£", ""];
    }
};
UtilsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
UtilsService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: "root"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController,
        _auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService,
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform,
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_1__.WebView,
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController,
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController])
], UtilsService);



/***/ }),

/***/ 91276:
/*!***************************************************!*\
  !*** ./src/app/shared/image-preload.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePreloadDirective": () => (/* binding */ ImagePreloadDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let ImagePreloadDirective = class ImagePreloadDirective {
    constructor(defaultSrc, renderer, el) {
        this.defaultSrc = defaultSrc;
        this.renderer = renderer;
        this.el = el;
        renderer.setAttribute(this.el.nativeElement, "src", this.defaultSrc);
    }
    onError() {
        this.renderer.setAttribute(this.el.nativeElement, "src", this.defaultSrc);
    }
};
ImagePreloadDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ["default",] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ImagePreloadDirective.propDecorators = {
    onError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ["error",] }]
};
ImagePreloadDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: "img[default]"
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])
], ImagePreloadDirective);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 27353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-image-cropper */ 67545);
/* harmony import */ var _webcam_webcam_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webcam/webcam.modal */ 74543);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-webcam */ 19839);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 25033);
/* harmony import */ var ngx_linky__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-linky */ 74802);
/* harmony import */ var _cropper_cropper_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cropper/cropper.modal */ 31811);
/* harmony import */ var _credits_credits_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../credits/credits.modal */ 78137);
/* harmony import */ var _nice_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nice-date.pipe */ 46500);
/* harmony import */ var _radar_request_geolocation_modal_request_geolocation_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../radar/request-geolocation-modal/request-geolocation.modal */ 33013);
/* harmony import */ var _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/image-preload.directive */ 91276);
/* harmony import */ var _chat_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chat/chat-input/chat-input.component */ 45999);
/* harmony import */ var _mentions_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mentions.pipe */ 41462);
/* harmony import */ var _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../story/story-modal/story.modal */ 62915);
/* harmony import */ var _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../story/view-stories/view-stories.modal */ 62651);
/* harmony import */ var _story_comment_likes_comment_likes_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../story/comment-likes/comment-likes.modal */ 6436);
/* harmony import */ var _hashtag_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hashtag.pipe */ 56455);
/* harmony import */ var _chat_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../chat/chat-list/chat-list.component */ 12581);
/* harmony import */ var _chat_chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../chat/chat-modal/chat-modal.component */ 72620);
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../audio-player/audio-player.component */ 87209);
/* harmony import */ var _chat_date_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../chat-date.pipe */ 64581);
/* harmony import */ var _events_event_modal_event_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../events/event-modal/event.modal */ 55713);
/* harmony import */ var _rules_rules_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rules/rules.page */ 45921);





























let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgModule)({
        declarations: [
            _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_6__.ImagePreloadDirective,
            _nice_date_pipe__WEBPACK_IMPORTED_MODULE_4__.NiceDatePipe,
            _chat_date_pipe__WEBPACK_IMPORTED_MODULE_16__.ChatDatePipe,
            _mentions_pipe__WEBPACK_IMPORTED_MODULE_8__.MentionsPipe,
            _hashtag_pipe__WEBPACK_IMPORTED_MODULE_12__.HashtagPipe,
            _credits_credits_modal__WEBPACK_IMPORTED_MODULE_3__.CreditsModal,
            _radar_request_geolocation_modal_request_geolocation_modal__WEBPACK_IMPORTED_MODULE_5__.RequestGeolocationModal,
            _cropper_cropper_modal__WEBPACK_IMPORTED_MODULE_2__.CropperModal,
            _webcam_webcam_modal__WEBPACK_IMPORTED_MODULE_1__.WebcamModal,
            _chat_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_7__.ChatInputComponent,
            _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_15__.AudioPlayerComponent,
            _chat_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_13__.ChatListComponent,
            _chat_chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_14__.ChatModalComponent,
            _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_9__.StoryModal,
            _events_event_modal_event_modal__WEBPACK_IMPORTED_MODULE_17__.EventModal,
            _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_10__.ViewStoriesModal,
            _story_comment_likes_comment_likes_modal__WEBPACK_IMPORTED_MODULE_11__.CommentLikesModal,
            _rules_rules_page__WEBPACK_IMPORTED_MODULE_18__.RulesPage
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_24__.NgxIonicImageViewerModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_25__.ImageCropperModule,
            ngx_webcam__WEBPACK_IMPORTED_MODULE_26__.WebcamModule,
            _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_27__.PickerModule,
            ngx_linky__WEBPACK_IMPORTED_MODULE_28__.LinkyModule
        ],
        exports: [
            _shared_image_preload_directive__WEBPACK_IMPORTED_MODULE_6__.ImagePreloadDirective,
            _nice_date_pipe__WEBPACK_IMPORTED_MODULE_4__.NiceDatePipe,
            _chat_date_pipe__WEBPACK_IMPORTED_MODULE_16__.ChatDatePipe,
            _mentions_pipe__WEBPACK_IMPORTED_MODULE_8__.MentionsPipe,
            _hashtag_pipe__WEBPACK_IMPORTED_MODULE_12__.HashtagPipe,
            _chat_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_7__.ChatInputComponent,
            _chat_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_13__.ChatListComponent,
            _chat_chat_modal_chat_modal_component__WEBPACK_IMPORTED_MODULE_14__.ChatModalComponent,
            ngx_linky__WEBPACK_IMPORTED_MODULE_28__.LinkyModule,
            _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_15__.AudioPlayerComponent
        ],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera]
    })
], SharedModule);



/***/ }),

/***/ 6436:
/*!************************************************************!*\
  !*** ./src/app/story/comment-likes/comment-likes.modal.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentLikesModal": () => (/* binding */ CommentLikesModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _comment_likes_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-likes.modal.html?ngResource */ 81879);
/* harmony import */ var _comment_likes_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-likes.modal.scss?ngResource */ 3541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let CommentLikesModal = class CommentLikesModal {
    constructor(modal, router) {
        this.modal = modal;
        this.router = router;
    }
    showProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (id !== 1) {
                this.close({ showProfile: true });
                this.router.navigate(["/profile", id]);
            }
        });
    }
    close(param) {
        this.modal.dismiss(param);
    }
};
CommentLikesModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CommentLikesModal.propDecorators = {
    likes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CommentLikesModal = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "comment-likes-modal",
        template: _comment_likes_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comment_likes_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController, _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router])
], CommentLikesModal);



/***/ }),

/***/ 62915:
/*!**************************************************!*\
  !*** ./src/app/story/story-modal/story.modal.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryModal": () => (/* binding */ StoryModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _story_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.modal.html?ngResource */ 13365);
/* harmony import */ var _story_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.modal.scss?ngResource */ 57182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/story.service */ 78934);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ 73071);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.service */ 88270);












let StoryModal = class StoryModal {
    constructor(modal, formBuilder, platform, androidPermissions, utils, sanitizer, storySvc, toast, keyboard, userSvc) {
        this.modal = modal;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.utils = utils;
        this.sanitizer = sanitizer;
        this.storySvc = storySvc;
        this.toast = toast;
        this.keyboard = keyboard;
        this.userSvc = userSvc;
        this.inputAt = false;
        this.userMentions = [];
        this.writing = false;
        this.showBackdrop = false;
        this.storyForm = formBuilder.group({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
        });
    }
    get text() {
        return this.storyForm.get("text");
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.hash) {
                this.text.setValue(this.hash + " ");
            }
        });
    }
    selectPicture(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is("android") && this.platform.is("cordova")) {
                yield this.androidPermissions.requestPermissions([
                    this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
                    this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
                ]);
            }
            if (type == "camera") {
                if (this.platform.is("cordova")) {
                    const image = (yield this.utils.takePicture("camera", true, "default", false, false));
                    this.addPicture(image);
                }
                else {
                    const image = yield this.utils.webcamImage("avatar", true, false);
                    if (!image || typeof image === "boolean") {
                        return false;
                    }
                    this.addPicture(image);
                }
            }
            else if (type == "gallery") {
                if (this.platform.is("cordova")) {
                    const image = yield this.utils.takePicture("gallery", true, "default", false, false);
                    if (!image || typeof image == "string") {
                        return false;
                    }
                    this.addPicture(image);
                }
                else {
                    this.imageInput.nativeElement.dispatchEvent(new MouseEvent("click"));
                }
            }
        });
    }
    selectText() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.image = "";
        });
    }
    addPicture(blob) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (typeof blob !== "string") {
                const image = yield this.utils.fileToBase64(blob);
                this.image = this.sanitizer.bypassSecurityTrustUrl(image);
            }
            this.imageFile = blob;
        });
    }
    cropImagebyEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const src = yield this.utils.cropImage(event, null, false);
                if (typeof src == "string") {
                    const blob = yield this.utils.urltoBlob(src);
                    this.addPicture(blob);
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    publish() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.showBackdrop = true;
                (yield this.toast.create({
                    message: "Publicando...",
                    position: "middle"
                })).present();
                let text = "";
                if (this.text.value) {
                    text = this.text.value.trim();
                }
                yield this.storySvc.sendStory(this.imageFile, text, this.userMentions);
                this.toast.dismiss();
                (yield this.toast.create({
                    message: "Historia publicada correctamente",
                    duration: 2000,
                    position: "middle"
                })).present();
                this.showBackdrop = false;
                this.modal.dismiss();
            }
            catch (e) {
                this.showBackdrop = false;
                this.toast.dismiss();
                (yield this.toast.create({
                    message: "Error al publicar tu historia",
                    duration: 2000,
                    position: "middle",
                    color: "danger"
                })).present();
            }
        });
    }
    setMention(username) {
        this.usernames = [];
        this.inputAt = false;
        this.text.setValue(this.text.value.replace(this.mention, `@${username} `));
        this.userMentions = [...this.userMentions, username];
        this.textarea.setFocus();
        if (this.platform.is("cordova")) {
            this.keyboard.show();
        }
    }
    setWriting(text) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.text.value) {
                if (text.charAt(text.length - 1) == "@") {
                    this.inputAt = true;
                }
                if (this.inputAt) {
                    const pattern = /\B@[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+/gi;
                    const matches = text.match(pattern);
                    if (matches) {
                        this.mention = matches[matches.length - 1];
                    }
                    if (this.writing) {
                        return;
                    }
                    this.writing = true;
                    if (((_a = this.mention) === null || _a === void 0 ? void 0 : _a.length) > 3 && this.text.value.length > 3) {
                        this.usernames = yield this.userSvc.searchUsernames(this.mention.replace("@", ""));
                    }
                    else {
                        this.usernames = [];
                    }
                    setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        this.writing = false;
                    }), 500);
                }
            }
            else {
                this.usernames = [];
            }
        });
    }
    cancel() {
        this.modal.dismiss();
    }
};
StoryModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: _services_story_service__WEBPACK_IMPORTED_MODULE_4__.StoryService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
StoryModal.propDecorators = {
    hash: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    imageInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["imageInput", { static: false },] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ["textarea", { static: false },] }]
};
StoryModal = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "story-modal",
        template: _story_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_story_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform,
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions,
        _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer,
        _services_story_service__WEBPACK_IMPORTED_MODULE_4__.StoryService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController,
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard,
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService])
], StoryModal);



/***/ }),

/***/ 62651:
/*!**********************************************************!*\
  !*** ./src/app/story/view-stories/view-stories.modal.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewStoriesModal": () => (/* binding */ ViewStoriesModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _view_stories_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-stories.modal.html?ngResource */ 36768);
/* harmony import */ var _view_stories_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-stories.modal.scss?ngResource */ 127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 49056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var cupertino_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cupertino-pane */ 25990);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/url.service */ 90925);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/story.service */ 78934);
/* harmony import */ var _comment_likes_comment_likes_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comment-likes/comment-likes.modal */ 6436);
/* harmony import */ var _story_modal_story_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../story-modal/story.modal */ 62915);















let ViewStoriesModal = class ViewStoriesModal {
    constructor(modal, modalCreate, likeModal, formBuilder, platform, storySvc, userSvc, toast, sheet, router, keyboard, auth, urlSvc) {
        this.modal = modal;
        this.modalCreate = modalCreate;
        this.likeModal = likeModal;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.storySvc = storySvc;
        this.userSvc = userSvc;
        this.toast = toast;
        this.sheet = sheet;
        this.router = router;
        this.keyboard = keyboard;
        this.auth = auth;
        this.urlSvc = urlSvc;
        this.delay = 5000;
        this.inputAt = false;
        this.userMentions = [];
        this.writing = false;
        this.paneSettings = {
            backdrop: true,
            bottomClose: true,
            buttonDestroy: false,
            handleKeyboard: false,
            initialBreak: "top",
            onBackdropTap: () => {
                this.pane.destroy({ animate: true });
                this.slides.startAutoplay();
            }
        };
        this.slideOpts = {
            speed: 500,
            autoplay: {
                delay: this.delay
            },
            grabCursor: true,
            lazy: true,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar"
            }
        };
        this.commentForm = formBuilder.group({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])
        });
    }
    get comment() {
        return this.commentForm.get("comment");
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.story = this.stories[0];
            this.setLikeStory();
            this.viewStory(this.stories[0]);
        });
    }
    showProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (id !== 1) {
                this.close();
                this.router.navigate(["/profile", id]);
            }
        });
    }
    slide() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.comment.setValue("");
            this.slides.getActiveIndex().then(index => {
                this.story = this.stories[index];
                this.setLikeStory();
                this.viewStory(this.stories[index]);
            });
        });
    }
    tap(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (event.pageX > screen.width / 2) {
                this.slides.slideNext();
            }
            else {
                this.slides.slidePrev();
            }
        });
    }
    commentFocus() {
        this.slides.stopAutoplay();
        this.viewComments();
        setTimeout(() => {
            this.textarea.setFocus();
            if (this.platform.is("cordova")) {
                this.keyboard.show();
            }
        }, 500);
    }
    setLikeStory() {
        this.story.viewStories.map(v => (v.user.like = this.story.likeStories.some(l => l.user.id === v.user.id)));
        this.story.like = !!this.story.likeStories.some(l => l.user.id === this.auth.currentUserValue.id);
        this.story.comments.map(c => {
            if (c.likes.some(l => l.id === this.auth.currentUserValue.id)) {
                c.like = true;
            }
        });
    }
    switchLikeStory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.slides.stopAutoplay();
            if (this.story.likeStories.some(l => l.user.id === this.auth.currentUserValue.id)) {
                this.story.like = false;
                yield this.storySvc.unlike(this.story.id);
            }
            else {
                this.story.like = true;
                yield this.storySvc.like(this.story.id);
            }
            this.slides.startAutoplay();
        });
    }
    switchLikeComment(comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.slides.stopAutoplay();
            if (comment.likes.some(l => l.id === this.auth.currentUserValue.id)) {
                this.story.comments.map(c => {
                    if (c.id === comment.id) {
                        c.like = false;
                    }
                });
                this.story = yield this.storySvc.unlikeComment(comment.id);
            }
            else {
                this.story.comments.map(c => {
                    if (c.id === comment.id) {
                        c.like = true;
                    }
                });
                this.story = yield this.storySvc.likeComment(comment.id);
                this.setLikeStory();
            }
        });
    }
    viewStory(story) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth.currentUserValue.id !== story.user.id &&
                !story.viewStories.some(v => v.user.id === this.auth.currentUserValue.id)) {
                this.storySvc.viewStory(story.id);
            }
        });
    }
    sendComment(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (event) {
                event.preventDefault();
            }
            this.slides.stopAutoplay();
            const text = this.comment.value.trim();
            this.comment.setValue("");
            this.story = yield this.storySvc.commentStory(this.story.id, text, this.userMentions);
            this.setLikeStory();
        });
    }
    viewViews() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.slides.stopAutoplay();
            this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_3__.CupertinoPane(".views-pane", this.paneSettings);
            this.pane.present({ animate: true });
        });
    }
    viewComments() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.slides.stopAutoplay();
            this.pane = new cupertino_pane__WEBPACK_IMPORTED_MODULE_3__.CupertinoPane(".comments-pane", this.paneSettings);
            this.pane.present({ animate: true });
        });
    }
    showOptions(story) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.slides.stopAutoplay();
            const actionSheet = yield this.sheet.create({
                buttons: [
                    {
                        text: "Añadir nueva historia",
                        icon: "add",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            const modal = yield this.modalCreate.create({
                                component: _story_modal_story_modal__WEBPACK_IMPORTED_MODULE_9__.StoryModal,
                                keyboardClose: true,
                                showBackdrop: true,
                                cssClass: "full-modal"
                            });
                            yield modal.present();
                            yield modal.onDidDismiss();
                        })
                    },
                    {
                        text: "Eliminar historia",
                        icon: "trash-outline",
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            try {
                                yield this.storySvc.deleteStory(story.id);
                                (yield this.toast.create({
                                    message: "Historia eliminada correctamente",
                                    position: "middle",
                                    duration: 2000
                                })).present();
                                this.close();
                            }
                            catch (e) {
                                (yield this.toast.create({
                                    message: "Error al eliminar la historia",
                                    duration: 2000,
                                    position: "middle",
                                    color: "danger"
                                })).present();
                            }
                        })
                    }
                ]
            });
            yield actionSheet.present();
            yield actionSheet.onDidDismiss();
            this.slides.startAutoplay();
        });
    }
    viewCommentLikes(likes) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.likeModal.create({
                component: _comment_likes_comment_likes_modal__WEBPACK_IMPORTED_MODULE_8__.CommentLikesModal,
                keyboardClose: true,
                showBackdrop: true,
                componentProps: { likes },
                cssClass: "medium-modal"
            });
            yield modal.present();
            const data = yield modal.onDidDismiss();
            if ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.showProfile) {
                this.close();
            }
        });
    }
    reply(comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (comment.user.id !== this.auth.currentUserValue.id) {
                this.comment.setValue(`@${comment.user.username} `);
                this.setMention(comment.user.username);
            }
            this.textarea.setFocus();
            if (this.platform.is("cordova")) {
                this.keyboard.show();
            }
        });
    }
    setMention(username) {
        this.usernames = [];
        this.inputAt = false;
        this.comment.setValue(this.comment.value.replace(this.mention, `@${username} `));
        this.userMentions = [...this.userMentions, username];
        this.textarea.setFocus();
        if (this.platform.is("cordova")) {
            this.keyboard.show();
        }
    }
    setWriting(text) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.comment.value) {
                if (text.charAt(text.length - 1) == "@") {
                    this.inputAt = true;
                }
                if (this.inputAt) {
                    const pattern = /\B@[a-zA-Z0-9-_.À-ÿ\u00f1\u00d1 ]+/gi;
                    const matches = text.match(pattern);
                    if (matches) {
                        this.mention = matches[matches.length - 1];
                    }
                    if (this.writing) {
                        return;
                    }
                    this.writing = true;
                    if (((_a = this.mention) === null || _a === void 0 ? void 0 : _a.length) > 3 && this.comment.value.length > 3) {
                        this.usernames = yield this.userSvc.searchUsernames(this.mention.replace("@", ""));
                    }
                    else {
                        this.usernames = [];
                    }
                    setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                        this.writing = false;
                    }), 500);
                }
            }
            else {
                this.usernames = [];
            }
        });
    }
    deleteComment(comment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.toast.create({
                message: "Eliminando comentario...",
                position: "middle",
                duration: 2000
            })).present();
            try {
                this.story = yield this.storySvc.deleteComment(comment.id);
                this.setLikeStory();
                (yield this.toast.create({
                    message: "Comentario eliminado correctamente",
                    position: "middle",
                    duration: 2000
                })).present();
            }
            catch (e) {
                (yield this.toast.create({
                    message: "Error al eliminar el comentario",
                    duration: 2000,
                    position: "middle",
                    color: "danger"
                })).present();
            }
        });
    }
    openUrl(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.urlSvc.openUrl(event);
            if (event.srcElement.href &&
                (event.target.className.includes("mention") ||
                    event.target.className.includes("hashtag") ||
                    event.target.className.includes("linkified"))) {
                this.close();
            }
            return false;
        });
    }
    close() {
        this.modal.dismiss();
    }
};
ViewStoriesModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _services_story_service__WEBPACK_IMPORTED_MODULE_7__.StoryService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Keyboard },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_services_url_service__WEBPACK_IMPORTED_MODULE_5__.UrlService }
];
ViewStoriesModal.propDecorators = {
    stories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["slides", { static: true },] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ["textarea", { static: false },] }]
};
ViewStoriesModal = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: "view-stories-modal",
        template: _view_stories_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_stories_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform,
        _services_story_service__WEBPACK_IMPORTED_MODULE_7__.StoryService,
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router,
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Keyboard,
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        src_app_services_url_service__WEBPACK_IMPORTED_MODULE_5__.UrlService])
], ViewStoriesModal);



/***/ }),

/***/ 74543:
/*!****************************************!*\
  !*** ./src/app/webcam/webcam.modal.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamModal": () => (/* binding */ WebcamModal)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _webcam_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webcam.modal.html?ngResource */ 1706);
/* harmony import */ var _webcam_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webcam.modal.scss?ngResource */ 18743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ 19839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);







let WebcamModal = class WebcamModal {
    constructor(modal, webcam) {
        this.modal = modal;
        this.webcam = webcam;
        this.webcamImage = "";
        this.switchCamera = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get switchCameraObservable() {
        return this.switchCamera.asObservable();
    }
    handleImage(webcamImage) {
        this.webcamImage = webcamImage.imageAsDataUrl;
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    triggerSwitchCamera() {
        this.switchCamera.next();
    }
    ok() {
        this.modal.dismiss(this.webcamImage);
    }
    retry() {
        this.webcamImage = null;
    }
    cancel() {
        this.modal.dismiss();
    }
};
WebcamModal.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: ngx_webcam__WEBPACK_IMPORTED_MODULE_4__.WebcamImage }
];
WebcamModal.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
WebcamModal = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "webcam-modal",
        template: _webcam_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_webcam_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController, ngx_webcam__WEBPACK_IMPORTED_MODULE_4__.WebcamImage])
], WebcamModal);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    root: "https://api.frikiradar.com/",
    apiUrl: "https://api.frikiradar.com/api/v1/",
    firebase: {
        apiKey: "AIzaSyDReeVhoLFIdlWdiklj90hDiXRN8RWwGVk",
        authDomain: "frikiradar-1551914200548.firebaseapp.com",
        databaseURL: "https://frikiradar-1551914200548.firebaseio.com",
        projectId: "frikiradar-1551914200548",
        storageBucket: "frikiradar-1551914200548.appspot.com",
        messagingSenderId: "431880368798",
        appId: "1:431880368798:web:021fb57b75ed33d8",
        vapidKey: "BCo47gHUNeFYajnd_WuaN85FWxZVkIhX00Xa2XZ9BGcXKkS6ourI99ZuFixCM03vhmGLxpLBzgFwRwtQCHe-Pjc"
    }
};


/***/ }),

/***/ 99934:
/*!******************************************!*\
  !*** ./src/helpers/error.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/services/auth.service */ 37556);







let ErrorInterceptor = class ErrorInterceptor {
    constructor(auth, nav, router) {
        this.auth = auth;
        this.nav = nav;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            if (err.status === 401) {
                if (localStorage.getItem("currentUser")) {
                    // auto logout if 401 response returned from api
                    this.auth.logout();
                }
                else {
                    this.nav.navigateRoot(["/login"], {
                        queryParams: { returnUrl: this.router.url }
                    });
                }
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router])
], ErrorInterceptor);



/***/ }),

/***/ 49067:
/*!********************************************!*\
  !*** ./src/helpers/ionicgesture.config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicGestureConfig": () => (/* binding */ IonicGestureConfig)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 50318);



/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
let IonicGestureConfig = class IonicGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.HammerGestureConfig {
    buildHammer(element) {
        const mc = new window.Hammer(element);
        for (const eventName in this.overrides) {
            if (eventName) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
        }
        return mc;
    }
};
IonicGestureConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], IonicGestureConfig);



/***/ }),

/***/ 56638:
/*!****************************************!*\
  !*** ./src/helpers/jwt.interceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app/services/auth.service */ 37556);



let JwtInterceptor = class JwtInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const currentUser = this.auth.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
JwtInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService])
], JwtInterceptor);



/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 35253:
/*!*********************************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".toggle {\n  height: 30px;\n  margin: 0;\n  margin-left: -25px;\n}\n.toggle ion-icon {\n  font-size: 30px;\n}\nion-range {\n  width: 180px;\n}\nion-note {\n  position: absolute;\n  top: 23px;\n  left: 36px;\n  color: white;\n}\nion-note.ios {\n  font-size: 10px;\n  top: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBRUE7RUFDSSxZQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0FBQ1IiLCJmaWxlIjoiYXVkaW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZSB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG5pb24tcmFuZ2Uge1xuICAgIHdpZHRoOiAxODBweDtcbn1cblxuaW9uLW5vdGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIzcHg7XG4gICAgbGVmdDogMzZweDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmLmlvcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgdG9wOiA0MnB4O1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 35900:
/*!**********************************************************************!*\
  !*** ./src/app/chat/chat-input/chat-input.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-thumbnail {\n  --border-radius: 5px;\n  padding: 5px;\n  --size: 60px;\n}\n\n#image-preview ion-icon {\n  position: absolute;\n  top: -5px;\n  font-size: 20px;\n  color: #e91e63;\n  z-index: 1;\n  left: 45px;\n}\n\n#audio-preview {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\n#audio-preview audio {\n  height: 50px;\n  width: 100%;\n}\n\n#usernames {\n  position: absolute;\n  bottom: 70px;\n  right: 60px;\n  left: 60px;\n}\n\nion-item#reply-to,\nion-item#edit {\n  --background: var(--ion-color-dark);\n}\n\nion-item#reply-to ion-icon,\nion-item#edit ion-icon {\n  margin-right: 15px;\n  color: white;\n}\n\nion-item#reply-to p,\nion-item#edit p {\n  margin: 0;\n  margin-left: 5px;\n}\n\nion-item#reply-to p.reply-to-name,\nion-item#edit p.reply-to-name {\n  color: #e91e63;\n}\n\nion-item#reply-to p.reply-to-text,\nion-item#edit p.reply-to-text {\n  color: white;\n}\n\nion-buttons {\n  margin: 0;\n  padding: 0;\n}\n\nion-toolbar#text-input ion-item {\n  background: var(--ion-color-light);\n  border-radius: 30px;\n  margin-left: 8px;\n  min-height: 50px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nion-toolbar#text-input ion-textarea {\n  --placeholder-color: #555555 !important;\n  color: var(--ion-color-dark) !important;\n  font-size: 12pt;\n  min-height: 45px !important;\n  margin: 0;\n  padding: 2px;\n}\n\nion-toolbar#text-input ion-textarea ::ng-deep textarea {\n  min-height: 45px !important;\n  margin: 0;\n}\n\nion-toolbar#text-input ion-label {\n  position: absolute;\n  z-index: 2;\n  right: 20px;\n  width: 30px !important;\n  min-width: 0px !important;\n  margin: 2px 0 !important;\n}\n\nion-toolbar#text-input ion-label ion-icon {\n  font-size: 30px;\n}\n\nion-toolbar#text-input #emoji-button {\n  height: 40px;\n  position: absolute;\n  top: 6px;\n}\n\nion-toolbar#text-input #emoji-button ion-icon {\n  background-color: white;\n  border-radius: 80px;\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7O0VBRUUsbUNBQUE7QUFGRjs7QUFHRTs7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTs7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFDSTs7RUFDRSxjQUFBO0FBRU47O0FBQ0k7O0VBQ0UsWUFBQTtBQUVOOztBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFJRTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFLTTtFQUNFLDJCQUFBO0VBQ0EsU0FBQTtBQUhSOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQU5KOztBQVFJO0VBQ0UsZUFBQTtBQU5OOztBQVVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQVJKOztBQVVJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFSTiIsImZpbGUiOiJjaGF0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIC0tc2l6ZTogNjBweDtcbn1cblxuI2ltYWdlLXByZXZpZXcge1xuICBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNlOTFlNjM7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiA0NXB4O1xuICB9XG59XG5cbiNhdWRpby1wcmV2aWV3IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIG1hcmdpbi1yaWdodDogLThweDtcblxuICBhdWRpbyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbiN1c2VybmFtZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNzBweDtcbiAgcmlnaHQ6IDYwcHg7XG4gIGxlZnQ6IDYwcHg7XG59XG5cbmlvbi1pdGVtI3JlcGx5LXRvLFxuaW9uLWl0ZW0jZWRpdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBpb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICYucmVwbHktdG8tbmFtZSB7XG4gICAgICBjb2xvcjogI2U5MWU2MztcbiAgICB9XG5cbiAgICAmLnJlcGx5LXRvLXRleHQge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG5pb24tYnV0dG9ucyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLXRvb2xiYXIjdGV4dC1pbnB1dCB7XG4gIGlvbi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICBpb24tdGV4dGFyZWEge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICM1NTU1NTUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIG1pbi1oZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMnB4O1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgbWluLWhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAycHggMCAhaW1wb3J0YW50O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gICNlbW9qaS1idXR0b24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 46379:
/*!********************************************************************!*\
  !*** ./src/app/chat/chat-list/chat-list.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n}\n\n#chat-wrapper {\n  display: flex;\n}\n\nion-item p {\n  color: #dddddd;\n}\n\nion-item .user-online {\n  position: relative;\n  left: 30px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 15px;\n  height: 15px;\n  bottom: 13px;\n  border: 2px solid var(--ion-color-dark);\n  font-size: 11px;\n}\n\nion-item .chat-count {\n  display: block;\n}\n\nion-item .chat-count ion-badge {\n  margin-top: 5px;\n  border-radius: 15px;\n  width: 25px;\n  height: 25px;\n  border: 2px solid var(--ion-color-dark);\n  font-size: 14px;\n}\n\nion-item ion-note {\n  color: white;\n}\n\n@media (min-width: 992px) {\n  ion-item.selected {\n    --background: var(--ion-color-primary-shade) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSxjQUFBO0FBRko7O0FBSUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQUZOOztBQU1FO0VBQ0UsWUFBQTtBQUpKOztBQU9FO0VBQ0U7SUFDRSx1REFBQTtFQUxKO0FBQ0YiLCJmaWxlIjoiY2hhdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY2hhdC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLWl0ZW0ge1xuICBwIHtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgfVxuXG4gIC51c2VyLW9ubGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBib3R0b206IDEzcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5jaGF0LWNvdW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIGlvbi1iYWRnZSB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgaW9uLW5vdGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICYuc2VsZWN0ZWQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 73371:
/*!**********************************************************************!*\
  !*** ./src/app/chat/chat-modal/chat-modal.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n}\n\nion-label p,\nion-label h2 {\n  text-transform: none;\n  letter-spacing: normal;\n  margin: 0 0 0 10px;\n  text-align: left;\n}\n\nion-label p {\n  font-size: 12px;\n  color: white;\n}\n\nion-label p ion-badge {\n  margin-right: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\n\n.bubble {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n\n.bubble ion-avatar {\n  margin-bottom: auto;\n  min-width: 40px;\n  min-height: 40px;\n}\n\n.bubble .message-item {\n  --background-hover: #9a1c424d;\n  --background-hover-opacity: 0.5;\n  transition: background 400ms;\n}\n\n.bubble .replyfrom {\n  font-size: 12px;\n}\n\n.bubble .replyfrom ion-icon {\n  font-size: 12px;\n}\n\n.bubble .replyfrom ion-avatar {\n  min-height: 20px;\n  min-width: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.bubble .replyfrom ion-thumbnail {\n  margin-right: 5px;\n  --border-radius: 5px;\n  width: 25px;\n  height: 25px;\n}\n\n.bubble .replyfrom .replyfrom-text {\n  margin-left: 0;\n  margin-top: 5px;\n  margin-right: 15px;\n  margin-bottom: 0;\n  color: #777777;\n}\n\n.bubble .replyfrom ion-label {\n  margin-left: 20px;\n}\n\n.bubble.same-user {\n  margin-top: 0;\n  position: relative;\n  margin-bottom: 0px;\n}\n\n.bubble ion-card {\n  border-radius: 20px;\n  --background: none;\n  box-shadow: none;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.bubble ion-card ion-card-content {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.bubble .message-event {\n  width: 100%;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  --color: var(--ion-color-light) !important;\n  --background: var(--ion-color-medium-dark) !important;\n}\n\n.bubble .message-event .event-details ion-label {\n  color: var(--ion-color-light) !important;\n  margin: 0;\n}\n\n.bubble .message-event ion-img {\n  height: 220px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.bubble .message-event ion-card-title {\n  --color: var(--ion-color-light) !important;\n}\n\n.bubble .message-event ion-button {\n  margin-bottom: 10px;\n}\n\n.bubble .text-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.bubble .text-name a {\n  color: white !important;\n}\n\n.bubble .text-name a.verified {\n  color: #c4d83b !important;\n}\n\n.bubble .text-name a.master {\n  color: #5260ff !important;\n}\n\n.bubble .text-name ion-icon {\n  font-size: 12px;\n  margin-left: 5px;\n  vertical-align: baseline;\n}\n\n.bubble .text-name .note-time {\n  font-size: 12px;\n  color: #777;\n}\n\n.bubble .text .message-text {\n  margin-right: 10px;\n  word-break: break-word;\n  white-space: pre-line;\n}\n\n.bubble .text .edited,\n.bubble .text .text-note-time {\n  font-size: 12px;\n  color: #777;\n}\n\n.bubble .text .text-note-time {\n  display: none;\n}\n\n.audio-content {\n  padding: 2px !important;\n}\n\n.text {\n  margin-right: 10px;\n  word-break: break-word;\n  white-space: pre-line;\n}\n\n.note-image {\n  font-size: 10px;\n  position: absolute;\n  color: white;\n  bottom: 15px;\n  right: 15px;\n  background: #1f1f1fbb;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.note-image ion-icon {\n  font-size: 14px;\n  vertical-align: text-bottom;\n}\n\n.note-text {\n  font-size: 10px;\n  position: relative;\n  bottom: -8px;\n  color: #bbbbbb;\n}\n\n.note-text ion-icon {\n  font-size: 14px;\n  vertical-align: text-bottom;\n}\n\n.note-text.note-audio {\n  right: 80px;\n  position: absolute;\n}\n\n.note-text.note-audio.ios {\n  bottom: 0;\n}\n\nion-item.pressed {\n  background: #9a1c424d;\n}\n\nion-item:hover .text-note-time {\n  display: inline !important;\n  display: initial !important;\n}\n\nion-item.clicked {\n  background: #9a1c424d;\n  -webkit-animation: ripple 600ms linear;\n          animation: ripple 600ms linear;\n  transition: background 400ms;\n}\n\ndiv {\n  min-width: 40px;\n}\n\n/*.from ion-card {\n  @media (max-width: 991px) {\n    margin-left: auto;\n  }\n}*/\n\nion-chip {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHRTs7RUFFRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFESjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUROOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUFKSjs7QUFPRTtFQUNFLGVBQUE7QUFMSjs7QUFPSTtFQUNFLGVBQUE7QUFMTjs7QUFRSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTk47O0FBU0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQTjs7QUFVSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFSTjs7QUFXSTtFQUNFLGlCQUFBO0FBVE47O0FBYUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWNFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBWko7O0FBY0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFaTjs7QUFnQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EscURBQUE7QUFkSjs7QUFpQk07RUFDRSx3Q0FBQTtFQUNBLFNBQUE7QUFmUjs7QUFtQkk7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUFqQk47O0FBb0JJO0VBQ0UsMENBQUE7QUFsQk47O0FBcUJJO0VBQ0UsbUJBQUE7QUFuQk47O0FBdUJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBckJKOztBQXVCSTtFQUNFLHVCQUFBO0FBckJOOztBQXdCSTtFQUNFLHlCQUFBO0FBdEJOOztBQXlCSTtFQUNFLHlCQUFBO0FBdkJOOztBQTBCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBeEJOOztBQTJCSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBekJOOztBQThCSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQTVCTjs7QUErQkk7O0VBRUUsZUFBQTtFQUNBLFdBQUE7QUE3Qk47O0FBZ0NJO0VBQ0UsYUFBQTtBQTlCTjs7QUFtQ0E7RUFDRSx1QkFBQTtBQWhDRjs7QUFtQ0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFoQ0Y7O0FBa0NFO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBaENKOztBQW9DQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBakNGOztBQW1DRTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQWpDSjs7QUFvQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFsQ0o7O0FBb0NJO0VBQ0UsU0FBQTtBQWxDTjs7QUF1Q0E7RUFDRSxxQkFBQTtBQXBDRjs7QUF3Q0U7RUFDRSwwQkFBQTtFQUFBLDJCQUFBO0FBckNKOztBQXlDQTtFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDRCQUFBO0FBdENGOztBQXlDQTtFQUNFLGVBQUE7QUF0Q0Y7O0FBeUNBOzs7O0VBQUE7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBdkNGIiwiZmlsZSI6ImNoYXQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlvbi1sYWJlbCB7XG4gIHAsXG4gIGgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGlvbi1iYWRnZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICB9XG4gIH1cbn1cblxuLmJ1YmJsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGlvbi1hdmF0YXIge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cblxuICAubWVzc2FnZS1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM5YTFjNDI0ZDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXM7XG4gIH1cblxuICAucmVwbHlmcm9tIHtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgfVxuXG4gICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLnJlcGx5ZnJvbS10ZXh0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGNvbG9yOiAjNzc3Nzc3O1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gIH1cblxuICAmLnNhbWUtdXNlciB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tZXNzYWdlLWV2ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1kYXJrKSAhaW1wb3J0YW50O1xuXG4gICAgLmV2ZW50LWRldGFpbHMge1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pbWcge1xuICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAudGV4dC1uYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGEudmVyaWZpZWQge1xuICAgICAgY29sb3I6ICNjNGQ4M2IgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBhLm1hc3RlciB7XG4gICAgICBjb2xvcjogIzUyNjBmZiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgfVxuXG4gICAgLm5vdGUtdGltZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICB9XG4gIH1cblxuICAudGV4dCB7XG4gICAgLm1lc3NhZ2UtdGV4dCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIH1cblxuICAgIC5lZGl0ZWQsXG4gICAgLnRleHQtbm90ZS10aW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNzc3O1xuICAgIH1cblxuICAgIC50ZXh0LW5vdGUtdGltZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4uYXVkaW8tY29udGVudCB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4ubm90ZS1pbWFnZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMxZjFmMWZiYjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICB9XG59XG5cbi5ub3RlLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtOHB4O1xuICBjb2xvcjogI2JiYmJiYjtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgfVxuXG4gICYubm90ZS1hdWRpbyB7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgJi5pb3Mge1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuXG5pb24taXRlbS5wcmVzc2VkIHtcbiAgYmFja2dyb3VuZDogIzlhMWM0MjRkO1xufVxuXG5pb24taXRlbTpob3ZlciB7XG4gIC50ZXh0LW5vdGUtdGltZSB7XG4gICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbmlvbi1pdGVtLmNsaWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjOWExYzQyNGQ7XG4gIGFuaW1hdGlvbjogcmlwcGxlIDYwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA0MDBtcztcbn1cblxuZGl2IHtcbiAgbWluLXdpZHRoOiA0MHB4O1xufVxuXG4vKi5mcm9tIGlvbi1jYXJkIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbn0qL1xuXG5pb24tY2hpcCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuIl19 */";

/***/ }),

/***/ 2393:
/*!*******************************************************!*\
  !*** ./src/app/credits/credits.modal.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item ion-label {\n  --color: white !important;\n}\nion-item ion-icon {\n  color: white;\n}\nion-item ion-label p {\n  white-space: normal;\n  color: #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdHMubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLHlCQUFBO0FBQU47QUFHSTtFQUNFLFlBQUE7QUFETjtBQUtNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBSFIiLCJmaWxlIjoiY3JlZGl0cy5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIHAge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBjb2xvcjogI2JiYjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */";

/***/ }),

/***/ 97038:
/*!*******************************************************!*\
  !*** ./src/app/cropper/cropper.modal.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "::ng-deep image-cropper .overlay {\n  outline: none !important;\n}\n\n#transform {\n  margin-left: auto;\n  margin-right: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb3BwZXIubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHdCQUFBO0FBQVI7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBREoiLCJmaWxlIjoiY3JvcHBlci5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgICBpbWFnZS1jcm9wcGVyIC5vdmVybGF5e1xuICAgICAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiN0cmFuc2Zvcm0ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4iXX0= */";

/***/ }),

/***/ 81982:
/*!****************************************************************!*\
  !*** ./src/app/events/event-modal/event.modal.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-thumbnail {\n  --border-radius: 5px;\n  margin-right: 10px;\n}\n\niframe {\n  border-radius: 16px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50Lm1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoiZXZlbnQubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5pZnJhbWUge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 48973:
/*!*****************************************************************!*\
  !*** ./src/app/options-popover/options-popover.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item ion-label {\n  --color: white !important;\n}\nion-item ion-icon {\n  color: white;\n}\nion-item ion-label p {\n  white-space: normal;\n  color: #bbb;\n}\nion-item.activated ion-icon,\nion-item.activated ion-label {\n  color: #e91e63;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMtcG9wb3Zlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UseUJBQUE7QUFBTjtBQUdJO0VBQ0UsWUFBQTtBQUROO0FBS007RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFIUjtBQVNJOztFQUVFLGNBQUE7QUFOTiIsImZpbGUiOiJvcHRpb25zLXBvcG92ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIHAge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBjb2xvcjogI2JiYjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24taXRlbS5hY3RpdmF0ZWQge1xuICAgIGlvbi1pY29uLFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBjb2xvcjogI2U5MWU2MztcbiAgICB9XG4gIH0iXX0= */";

/***/ }),

/***/ 21115:
/*!*******************************************************************************************!*\
  !*** ./src/app/radar/request-geolocation-modal/request-geolocation.modal.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-button {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtZ2VvbG9jYXRpb24ubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicmVxdWVzdC1nZW9sb2NhdGlvbi5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 39907:
/*!**************************************************!*\
  !*** ./src/app/rules/rules.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item ion-label {\n  --color: white !important;\n}\nion-item ion-icon {\n  color: white;\n}\nion-item ion-label p {\n  white-space: normal;\n  color: #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FBQUo7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUtJO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBSE4iLCJmaWxlIjoicnVsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICBpb24tbGFiZWwge1xuICAgIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBjb2xvcjogI2JiYjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 3541:
/*!*************************************************************************!*\
  !*** ./src/app/story/comment-likes/comment-likes.modal.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-avatar {\n  margin-right: 10px;\n}\n\nion-label {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtbGlrZXMubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKIiwiZmlsZSI6ImNvbW1lbnQtbGlrZXMubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 57182:
/*!***************************************************************!*\
  !*** ./src/app/story/story-modal/story.modal.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-thumbnail {\n  width: auto;\n  height: auto;\n  --border-radius: 15px;\n}\n\nion-footer ion-icon {\n  margin-right: 5px;\n}\n\n#usernames {\n  position: absolute;\n  margin-top: -180px;\n  right: 60px;\n  left: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5Lm1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0k7RUFDSSxpQkFBQTtBQUFSOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBREoiLCJmaWxlIjoic3RvcnkubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxufVxuXG4jdXNlcm5hbWVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTE4MHB4O1xuICAgIHJpZ2h0OiA2MHB4O1xuICAgIGxlZnQ6IDYwcHg7XG59Il19 */";

/***/ }),

/***/ 127:
/*!***********************************************************************!*\
  !*** ./src/app/story/view-stories/view-stories.modal.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-label p,\nion-label h2 {\n  text-transform: none;\n  letter-spacing: normal;\n  margin: 0 0 0 10px;\n  text-align: left;\n}\nion-label p {\n  font-size: 12px;\n  color: white;\n}\nion-label p ion-badge {\n  margin-right: 5px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\nion-card {\n  box-shadow: none;\n  background: transparent;\n}\nion-card img {\n  max-height: 50vh;\n}\nion-card ion-thumbnail {\n  width: auto;\n  height: auto;\n  --border-radius: 15px;\n}\n#text-input ion-buttons,\n#comment-input ion-buttons {\n  margin: 0;\n}\n#text-input form,\n#comment-input form {\n  width: 100%;\n}\n#text-input ion-item,\n#comment-input ion-item {\n  background: var(--ion-color-light);\n  border-radius: 30px;\n  margin-left: 8px;\n}\n#text-input ion-textarea,\n#comment-input ion-textarea {\n  --placeholder-color: var(--ion-color-medium) !important;\n  color: var(--ion-color-dark) !important;\n  padding: 5px 0 4px 15px;\n  margin: 0;\n  font-size: 12pt;\n}\n#text-input ion-label,\n#comment-input ion-label {\n  position: absolute;\n  z-index: 2;\n  right: 20px;\n  width: 30px !important;\n  min-width: 0px !important;\n  margin: 2px 0 !important;\n}\n#text-input ion-label ion-icon,\n#comment-input ion-label ion-icon {\n  font-size: 30px;\n}\nion-footer ion-icon {\n  margin-right: 5px;\n}\nion-footer ion-label {\n  text-transform: none;\n}\n.views-pane {\n  display: none;\n}\n.views-pane ion-avatar {\n  margin-right: 10px;\n}\n.comments-pane {\n  display: none;\n}\n.comments-pane .text a,\n.comments .text a {\n  color: #c4d83b !important;\n}\n.comments-pane .text span,\n.comments .text span {\n  color: white;\n  white-space: normal;\n  white-space: initial;\n}\n.comments-pane .note-date,\n.comments .note-date {\n  font-size: 10px;\n  color: #bbbbbb;\n  margin-left: 10px;\n}\n.comments-pane ion-item,\n.comments ion-item {\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n.comments-pane ion-avatar,\n.comments ion-avatar {\n  min-width: 40px;\n}\n.comments-pane ion-footer,\n.comments ion-footer {\n  position: absolute;\n  bottom: 0;\n}\n#usernames {\n  position: absolute;\n  bottom: 70px;\n  right: 60px;\n  left: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctc3Rvcmllcy5tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUROO0FBTUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBSEY7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFISjtBQVNFOztFQUNFLFNBQUE7QUFMSjtBQVFFOztFQUNFLFdBQUE7QUFMSjtBQVFFOztFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBUUU7O0VBQ0UsdURBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFMSjtBQVFFOztFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFMSjtBQU9JOztFQUNFLGVBQUE7QUFKTjtBQVVFO0VBQ0UsaUJBQUE7QUFQSjtBQVNFO0VBQ0Usb0JBQUE7QUFQSjtBQVdBO0VBQ0UsYUFBQTtBQVJGO0FBVUU7RUFDRSxrQkFBQTtBQVJKO0FBWUE7RUFDRSxhQUFBO0FBVEY7QUFlSTs7RUFDRSx5QkFBQTtBQVhOO0FBY0k7O0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQUEsb0JBQUE7QUFYTjtBQWVFOztFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFaSjtBQWVFOztFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVpKO0FBZUU7O0VBQ0UsZUFBQTtBQVpKO0FBZUU7O0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBWko7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWJGIiwiZmlsZSI6InZpZXctc3Rvcmllcy5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgcCxcbiAgaDIge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgaW9uLWJhZGdlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIH1cbiAgfVxufVxuXG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gIGltZyB7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgfVxuICBpb24tdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG59XG5cbiN0ZXh0LWlucHV0LFxuI2NvbW1lbnQtaW5wdXQge1xuICBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuICBpb24tdGV4dGFyZWEge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAwIDRweCAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHQ7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDJweCAwICFpbXBvcnRhbnQ7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9XG59XG5cbmlvbi1mb290ZXIge1xuICBpb24taWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgaW9uLWxhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4udmlld3MtcGFuZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgaW9uLWF2YXRhciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cbi5jb21tZW50cy1wYW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbW1lbnRzLXBhbmUsXG4uY29tbWVudHMge1xuICAudGV4dCB7XG4gICAgYSB7XG4gICAgICBjb2xvcjogI2M0ZDgzYiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gICAgfVxuICB9XG5cbiAgLm5vdGUtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjYmJiYmJiO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH1cblxuICBpb24tYXZhdGFyIHtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gIH1cblxuICBpb24tZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5cbiN1c2VybmFtZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNzBweDtcbiAgcmlnaHQ6IDYwcHg7XG4gIGxlZnQ6IDYwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 18743:
/*!*****************************************************!*\
  !*** ./src/app/webcam/webcam.modal.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "::ng-deep webcam video {\n  width: 100%;\n}\n\n.capture {\n  margin-left: auto;\n  margin-right: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.capture ion-button {\n  height: 100px;\n  width: 100px;\n}\n\n.capture ion-icon {\n  font-size: 80px;\n  color: white;\n}\n\nimg {\n  padding-top: 98px;\n  padding-bottom: 98px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmNhbS5tb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtBQUFSOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQURKOztBQUdJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFEUjs7QUFJSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBRlI7O0FBTUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBSEoiLCJmaWxlIjoid2ViY2FtLm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAgIHdlYmNhbSB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmNhcHR1cmUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG5pbWcge1xuICAgIHBhZGRpbmctdG9wOiA5OHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA5OHB4O1xufSJdfQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet id=\"content\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 13680:
/*!*********************************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item lines=\"none\">\n  <ion-button\n    fill=\"clear\"\n    class=\"toggle\"\n    (click)=\"download()\"\n    *ngIf=\"!downloaded && !downloading\"\n    slot=\"start\"\n  >\n    <ion-icon name=\"download\" color=\"light\"></ion-icon>\n  </ion-button>\n  <ion-button\n    fill=\"clear\"\n    class=\"toggle\"\n    *ngIf=\"!downloaded && downloading\"\n    slot=\"start\"\n  >\n    <ion-spinner name=\"crescent\" color=\"light\"></ion-spinner>\n  </ion-button>\n  <ion-button\n    fill=\"clear\"\n    class=\"toggle\"\n    (click)=\"togglePlayer(false)\"\n    *ngIf=\"downloaded && !isPlaying\"\n    slot=\"start\"\n  >\n    <ion-icon name=\"play\" color=\"light\"></ion-icon>\n  </ion-button>\n  <ion-button\n    class=\"toggle\"\n    fill=\"clear\"\n    (click)=\"downloaded && togglePlayer(true)\"\n    *ngIf=\"isPlaying\"\n    slot=\"start\"\n  >\n    <ion-icon name=\"pause\" color=\"light\"></ion-icon>\n  </ion-button>\n  <ion-range\n    mode=\"md\"\n    #range\n    [(ngModel)]=\"progress\"\n    max=\"100\"\n    color=\"success\"\n    (touchend)=\"seek()\"\n    (mouseup)=\"seek()\"\n  >\n  </ion-range>\n  <ion-note slot=\"start\">{{ progress ? timeProgress : timeDuration }}</ion-note>\n</ion-item>\n";

/***/ }),

/***/ 47622:
/*!**********************************************************************!*\
  !*** ./src/app/chat/chat-input/chat-input.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list\n  id=\"usernames\"\n  *ngIf=\"usernames?.length && message?.value?.length > 3\"\n>\n  <ion-item\n    lines=\"none\"\n    button\n    *ngFor=\"let u of usernames\"\n    (click)=\"setMention(u.username)\"\n  >\n    <ion-avatar>\n      <img [src]=\"u.thumbnail\" default=\"/assets/img/users/default.jpg\" />\n    </ion-avatar>\n    <ion-label>{{ u.username }}</ion-label>\n  </ion-item>\n</ion-list>\n<div id=\"image-preview\" *ngIf=\"image && imagePreview\">\n  <ion-icon\n    name=\"close-circle\"\n    slot=\"icon-only\"\n    (click)=\"image = ''; imagePreview = ''\"\n  ></ion-icon>\n  <ion-thumbnail>\n    <img [src]=\"imagePreview\" />\n  </ion-thumbnail>\n</div>\n<ion-item\n  lines=\"none\"\n  id=\"audio-preview\"\n  [style]=\"recorded ? '' : 'display: none;'\"\n>\n  <audio\n    #player\n    controlsList=\"nodownload\"\n    [src]=\"audioPreview\"\n    controls=\"true\"\n  ></audio>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"removeRecorded()\">\n      <ion-icon slot=\"icon-only\" name=\"close-outline\" color=\"danger\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"sendMessage()\">\n      <ion-icon\n        slot=\"icon-only\"\n        name=\"checkmark-outline\"\n        color=\"secondary\"\n      ></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-item>\n<ion-item id=\"reply-to\" lines=\"none\" *ngIf=\"replying\">\n  <ion-icon name=\"arrow-undo-outline\" slot=\"start\"></ion-icon>\n  <ion-thumbnail *ngIf=\"selectedMessage.image\">\n    <img [src]=\"selectedMessage?.image\" />\n  </ion-thumbnail>\n  <ion-label>\n    <p class=\"reply-to-name\">{{ selectedMessage?.fromuser.name }}</p>\n    <p class=\"reply-to-text\">{{ selectedMessage?.text }}</p>\n  </ion-label>\n  <ion-icon button (click)=\"closeReplying()\" name=\"close\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-item id=\"edit\" lines=\"none\" *ngIf=\"editing\">\n  <ion-icon name=\"pencil-sharp\" slot=\"start\"></ion-icon>\n  <ion-thumbnail *ngIf=\"selectedMessage.image\">\n    <img [src]=\"selectedMessage?.image\" />\n  </ion-thumbnail>\n  <ion-label>\n    <p class=\"reply-to-name\">Editar mensaje</p>\n    <p class=\"reply-to-text\">{{ selectedMessage?.text }}</p>\n  </ion-label>\n  <ion-icon button (click)=\"closeEdit()\" name=\"close\" slot=\"end\"></ion-icon>\n</ion-item>\n<ion-toolbar id=\"text-input\" *ngIf=\"!recorded\">\n  <form [formGroup]=\"chatForm\" autocomplete=\"off\" *ngIf=\"!recording\">\n    <ion-item lines=\"none\">\n      <ion-buttons ion-activatable slot=\"start\">\n        <ion-button (click)=\"openEmojis()\">\n          <ion-icon\n            slot=\"icon-only\"\n            color=\"dark\"\n            [name]=\"emojis ? 'close-outline' : 'happy-outline'\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-textarea\n        placeholder=\"書く！\"\n        autocapitalize=\"on\"\n        (keydown.enter)=\"keydownEnter($event)\"\n        formControlName=\"message\"\n        #textarea\n        autoGrow\n        rows=\"1\"\n        (ionFocus)=\"emojis = false\"\n        (ionChange)=\"setWriting($event.detail.value)\"\n        (paste)=\"onPaste($event)\"\n      >\n      </ion-textarea>\n      <ion-buttons slot=\"end\">\n        <ion-button\n          *ngIf=\"!message.value && !image && events\"\n          (click)=\"createEvent()\"\n        >\n          <ion-icon slot=\"icon-only\" name=\"calendar\" color=\"dark\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"!replying\" (click)=\"openPictureSheet()\" slot=\"end\">\n          <ion-icon slot=\"icon-only\" name=\"camera\" color=\"dark\"></ion-icon>\n        </ion-button>\n        <input\n          type=\"file\"\n          accept=\"image/*\"\n          #imageInput\n          style=\"display: none\"\n          name=\"default\"\n          (change)=\"addPicture($event.target.files[0])\"\n        />\n      </ion-buttons>\n    </ion-item>\n  </form>\n  <ion-item *ngIf=\"recording\" lines=\"none\">\n    <ion-text class=\"ion-text-center\" color=\"medium\">\n      Grabando audio... {{ countRecordingString }}</ion-text\n    >\n  </ion-item>\n  <ion-buttons ion-activatable slot=\"end\">\n    <ion-button\n      *ngIf=\"!microphone || message.value || image\"\n      [disabled]=\"!message.value && !image\"\n      (click)=\"sendMessage()\"\n    >\n      <ion-icon slot=\"icon-only\" color=\"primary\" name=\"send\"></ion-icon>\n    </ion-button>\n    <ion-button\n      *ngIf=\"!message.value && !image && microphone && !recording\"\n      (click)=\"openMic()\"\n    >\n      <ion-icon slot=\"icon-only\" name=\"mic\" color=\"light\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"microphone && recording\" (click)=\"stopMic()\">\n      <ion-icon slot=\"icon-only\" name=\"mic-off\" color=\"danger\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n<emoji-mart\n  *ngIf=\"emojis\"\n  isNative=\"true\"\n  emoji=\"point_up\"\n  darkMode=\"true\"\n  showPreview=\"false\"\n  [style]=\"{ width: '100%' }\"\n  (emojiSelect)=\"addEmoji($event)\"\n  title=\"Elige un emoji\"\n  [i18n]=\"{\n    search: 'Busca el emoji perfecto',\n    emojilist: 'Listado de emojis',\n    found: 'Emoji no encontrado',\n    clear: 'Borrar',\n    categories: {\n      search: 'Resultados',\n      recent: 'Más usados',\n      people: 'Caras y personas',\n      nature: 'Animales y naturaleza',\n      foods: 'Comida y bebida',\n      activity: 'Actividad',\n      places: 'Viajes y lugares',\n      objects: 'Objetos',\n      symbols: 'Símbolos',\n      flags: 'Banderas',\n      custom: 'FrikiRadar'\n    }\n  }\"\n></emoji-mart>\n";

/***/ }),

/***/ 17146:
/*!********************************************************************!*\
  !*** ./src/app/chat/chat-list/chat-list.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"!showOptions && !showingArchived\">\n      <ion-button>\n        <ion-button (click)=\"back()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" *ngIf=\"showOptions\">\n      <ion-button (click)=\"hideOptions()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" *ngIf=\"showingArchived && !showOptions\">\n      <ion-button (click)=\"showUnarchivedChats()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!showOptions && !showingArchived\">Chat</ion-title>\n    <ion-title *ngIf=\"showingArchived && !showOptions\"\n      >Chats archivados</ion-title\n    >\n    <ion-buttons slot=\"end\" *ngIf=\"showOptions\">\n      <ion-button (click)=\"deleteChat(selectedChat)\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"archiveChat(selectedChat)\" *ngIf=\"!showingArchived\">\n        <ion-icon name=\"archive\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"unarchiveChat(selectedChat)\" *ngIf=\"showingArchived\">\n        <ion-icon name=\"file-tray\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"no-scroll\">\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"loading\"></ion-progress-bar>\n  <ion-list *ngIf=\"!allChats\">\n    <ion-item *ngFor=\"let i of [].constructor(15)\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h2>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h2>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"allChats?.length > 0\">\n    <ion-item-sliding\n      *ngFor=\"let chat of chats\"\n      (press)=\"selectChat(chat)\"\n      (ionDrag)=\"dragItem($event, chat.user?.id)\"\n    >\n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"showChat(chat.user?.id)\" color=\"secondary\">\n          <ion-icon slot=\"icon-only\" name=\"mail-open\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item\n        button\n        (click)=\"showChat(chat.user?.id)\"\n        [ngClass]=\"\n          selectedChat?.conversationId == chat?.conversationId ? 'selected' : ''\n        \"\n      >\n        <ion-avatar slot=\"start\">\n          <ion-img\n            [src]=\"\n              chat.user?.thumbnail\n                ? chat.user?.thumbnail\n                : '/assets/img/users/default.jpg'\n            \"\n            [alt]=\"chat.user?.username\"\n          ></ion-img>\n          <ion-badge\n            class=\"user-online\"\n            color=\"secondary\"\n            *ngIf=\"(chat.user?.last_login | niceDate) === 'Ahora mismo'\"\n            >&nbsp;</ion-badge\n          >\n        </ion-avatar>\n\n        <ion-label>\n          <h2>{{ chat.user?.name }}</h2>\n          <p>{{ chat.text }}</p>\n        </ion-label>\n        <ion-note slot=\"end\">\n          <span\n            *ngIf=\"chat.fromuser == auth.currentUserValue?.id && !chat.writing\"\n          >\n            <ion-icon *ngIf=\"!chat.time_read\" name=\"checkmark\"></ion-icon>\n            <ion-icon\n              *ngIf=\"chat.time_read\"\n              color=\"secondary\"\n              name=\"checkmark-done\"\n            ></ion-icon>\n          </span>\n          {{\n            chat.writing ? \"⌨ Escribiendo...\" : (chat.time_creation | niceDate)\n          }}\n          <ion-text class=\"chat-count ion-text-right\">\n            <ion-badge color=\"primary\" *ngIf=\"chat?.count > 0\">{{\n              chat?.count\n            }}</ion-badge>\n          </ion-text>\n        </ion-note>\n      </ion-item>\n      <ion-item-options\n        side=\"end\"\n        *ngIf=\"chat?.user?.username !== 'frikiradar'\"\n      >\n        <ion-item-option\n          *ngIf=\"!showingArchived\"\n          color=\"warning\"\n          (click)=\"archiveChat(chat)\"\n          expandable\n        >\n          <ion-icon slot=\"icon-only\" name=\"archive-outline\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option\n          *ngIf=\"showingArchived\"\n          color=\"warning\"\n          (click)=\"unarchiveChat(chat)\"\n          expandable\n        >\n          <ion-icon slot=\"icon-only\" name=\"file-tray-outline\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item\n      color=\"dark\"\n      button\n      *ngIf=\"!showingArchived && archivedChats?.length\"\n      lines=\"none\"\n      (click)=\"showArchivedChats()\"\n    >\n      <ion-icon slot=\"start\" name=\"archive-outline\" color=\"light\"></ion-icon>\n      <ion-label\n        ><p>Chats archivados ({{ archivedChats?.length }})</p></ion-label\n      >\n    </ion-item>\n  </ion-list>\n  <div *ngIf=\"allChats?.length === 0\">\n    <div class=\"full-center ion-padding\">\n      <ion-icon name=\"chatbubbles\"></ion-icon>\n      <h2>Sin conversaciones</h2>\n      <p>\n        Aún no le has escrito a ningún usuario. Vuelve por aquí cuando lo hayas\n        hecho.\n      </p>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 79632:
/*!**********************************************************************!*\
  !*** ./src/app/chat/chat-modal/chat-modal.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"!pressOptions\">\n      <ion-button class=\"back hide-landscape\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"showProfile(userId)\" shape=\"round\">\n        <ion-avatar>\n          <ion-img\n            *ngIf=\"user\"\n            [src]=\"user?.thumbnail\"\n            [alt]=\"user?.username\"\n          ></ion-img>\n          <ion-skeleton-text animated *ngIf=\"!user\"></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ user?.name }}</h2>\n          <p>\n            <ion-badge\n              color=\"secondary\"\n              *ngIf=\"(user?.last_login | niceDate) === 'Ahora mismo'\"\n              >&nbsp;</ion-badge\n            >{{\n              toUserWriting\n                ? toUserWriting\n                : (user?.last_login | niceDate) === \"Ahora mismo\"\n                ? \"En línea\"\n                : (user?.last_login | niceDate)\n            }}\n          </p>\n        </ion-label>\n      </ion-button>\n      <ion-icon\n        *ngIf=\"user && userSvc.getRoleIcon(user)\"\n        [name]=\"userSvc.getRoleIcon(user)\"\n        [src]=\"userSvc.getRoleIcon(user)\"\n        slot=\"icon-only\"\n        size=\"small\"\n        [color]=\"userSvc.getRoleColor(user)\"\n        (click)=\"userSvc.showRole(user)\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"start\" *ngIf=\"pressOptions\">\n      <ion-button (click)=\"pressOptions = false\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons\n      slot=\"end\"\n      *ngIf=\"\n        !pressOptions &&\n        user?.active &&\n        !user?.banned &&\n        !user?.roles?.includes('ROLE_DEMO')\n      \"\n    >\n      <ion-button (click)=\"showOptions($event)\">\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"chatSvc.realtimeChatInfo()\" *ngIf=\"!realtimeChat\">\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"timer-outline\"\n          color=\"danger\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"pressOptions\">\n      <ion-button\n        (click)=\"edit()\"\n        *ngIf=\"selectedMessage?.fromuser?.id == auth.currentUserValue.id\"\n      >\n        <ion-icon slot=\"icon-only\" name=\"pencil-sharp\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"copy()\">\n        <ion-icon slot=\"icon-only\" name=\"copy-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"reply()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-undo-outline\"></ion-icon>\n      </ion-button>\n      <ion-button\n        (click)=\"deleteMessage()\"\n        *ngIf=\"selectedMessage?.fromuser?.id == auth.currentUserValue.id\"\n      >\n        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #chatlist (tap)=\"pressOptions = false\">\n  <ion-infinite-scroll (ionInfinite)=\"loadChats($event)\" position=\"top\">\n    <ion-infinite-scroll-content loadingSpinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <span\n    class=\"bubble\"\n    [ngClass]=\"\n      message?.fromuser?.id !== messages[i - 1]?.fromuser?.id ||\n      message?.reply_to ||\n      (message?.time_creation | date: 'shortDate') !==\n        (messages[i - 1]?.time_creation | date: 'shortDate')\n        ? ''\n        : 'same-user'\n    \"\n    *ngFor=\"let message of messages; let i = index\"\n  >\n    <ion-chip\n      color=\"primary\"\n      class=\"center\"\n      *ngIf=\"\n        (message?.time_creation | date: 'shortDate') !==\n        (messages[i - 1]?.time_creation | date: 'shortDate')\n      \"\n    >\n      <ion-label color=\"secondary\">{{\n        message.time_creation | date: \"fullDate\"\n      }}</ion-label>\n    </ion-chip>\n\n    <ion-item\n      *ngIf=\"message.reply_to\"\n      class=\"replyfrom\"\n      lines=\"none\"\n      button\n      (click)=\"goToMessage(message)\"\n    >\n      <ion-icon name=\"arrow-undo\" color=\"light\" slot=\"start\"></ion-icon>\n      <ion-thumbnail *ngIf=\"message?.reply_to?.image\">\n        <img [src]=\"message?.reply_to?.image\" />\n      </ion-thumbnail>\n      <ion-label class=\"replyfrom-message\">\n        <p class=\"replyfrom-text\">\n          @{{ message?.reply_to?.fromuser?.username }}\n          {{ message?.reply_to?.text }}\n        </p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item-sliding (ionDrag)=\"dragItem($event, message)\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"#1f1f1f\">\n          <ion-icon\n            slot=\"icon-only\"\n            name=\"arrow-undo-outline\"\n            color=\"light\"\n          ></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item\n        [id]=\"message.id\"\n        lines=\"none\"\n        button\n        detail=\"false\"\n        (press)=\"selectMessage($event, message)\"\n        [ngClass]=\"\n          selectedMessage?.id == message?.id && pressOptions ? 'pressed' : ''\n        \"\n      >\n        <ion-avatar\n          *ngIf=\"\n            message?.fromuser?.id !== messages[i - 1]?.fromuser?.id ||\n            message?.reply_to ||\n            (message?.time_creation | date: 'shortDate') !==\n              (messages[i - 1]?.time_creation | date: 'shortDate') ||\n            message?.event\n          \"\n        >\n          <img\n            (click)=\"showProfile(message.fromuser.id)\"\n            [src]=\"message.fromuser.thumbnail\"\n          />\n        </ion-avatar>\n        <div\n          *ngIf=\"\n            message?.fromuser?.id === messages[i - 1]?.fromuser?.id &&\n            !message?.reply_to &&\n            (message?.time_creation | date: 'shortDate') ===\n              (messages[i - 1]?.time_creation | date: 'shortDate') &&\n            !message?.event\n          \"\n        ></div>\n        <ion-card\n          (click)=\"showEvent(message.event)\"\n          *ngIf=\"message.event\"\n          class=\"message-event\"\n        >\n          <ion-card-header>\n            <ion-card-subtitle\n              >{{ message.event?.date | date: \"E d MMM y, HH:mm\" }}\n              {{\n                message.event?.date_end\n                  ? \" -\n              \" +\n                    (message.event?.date_end | date: \"E d MMM y, HH:mm\")\n                  : \"\"\n              }}</ion-card-subtitle\n            >\n            <ion-card-title>{{ message.event?.title }}</ion-card-title>\n            <ion-text>\n              {{\n                message.event?.type === \"online\"\n                  ? \"Online\"\n                  : message.event?.address + \", \" + message.event?.country\n              }}\n            </ion-text>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <!--Si cancelado o pasado-->\n                <ion-col\n                  *ngIf=\"\n                    message.event?.past || message.event.status == 'cancelled'\n                  \"\n                >\n                  <ion-button\n                    shape=\"round\"\n                    expand=\"full\"\n                    disabled\n                    *ngIf=\"\n                      !message.event?.past &&\n                      message.event.status == 'cancelled'\n                    \"\n                  >\n                    <ion-icon\n                      name=\"close-circle-outline\"\n                      slot=\"start\"\n                    ></ion-icon>\n                    Cita cancelada/rechazada\n                  </ion-button>\n                  <ion-button\n                    shape=\"round\"\n                    expand=\"full\"\n                    *ngIf=\"\n                      message.event?.past &&\n                      message.event.status !== 'cancelled'\n                    \"\n                    disabled\n                  >\n                    <ion-icon name=\"timer-outline\" slot=\"start\"></ion-icon>\n                    Cita pasada\n                  </ion-button>\n                </ion-col>\n\n                <ion-col\n                  *ngIf=\"\n                    message.event?.participants?.length < 2 &&\n                    !message.event?.past &&\n                    message.event.status !== 'cancelled'\n                  \"\n                >\n                  <ion-button\n                    shape=\"round\"\n                    expand=\"full\"\n                    *ngIf=\"message?.fromuser?.id == auth.currentUserValue.id\"\n                    disabled\n                  >\n                    <ion-icon name=\"timer-outline\" slot=\"start\"></ion-icon>\n                    En espera de confirmación\n                  </ion-button>\n                  <ion-button\n                    shape=\"round\"\n                    expand=\"full\"\n                    *ngIf=\"message?.fromuser?.id !== auth.currentUserValue.id\"\n                    (click)=\"$event.stopPropagation(); confirmDate(message)\"\n                  >\n                    <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n                    Confirmar cita\n                  </ion-button>\n                </ion-col>\n                <ion-col\n                  *ngIf=\"\n                    message.event?.participants?.length < 2 &&\n                    !message.event?.past &&\n                    message.event.status !== 'cancelled' &&\n                    message?.fromuser?.id !== auth.currentUserValue.id\n                  \"\n                >\n                  <ion-button\n                    shape=\"round\"\n                    expand=\"full\"\n                    color=\"danger\"\n                    (click)=\"$event.stopPropagation(); declineDate(message)\"\n                  >\n                    <ion-icon\n                      name=\"close-circle-outline\"\n                      slot=\"start\"\n                    ></ion-icon>\n                    Rechazar cita\n                  </ion-button>\n                </ion-col>\n                <ion-col\n                  *ngIf=\"\n                    message.event?.participants?.length >= 2 &&\n                    !message.event?.past &&\n                    message.event.status !== 'cancelled'\n                  \"\n                >\n                  <ion-button shape=\"round\" expand=\"full\">\n                    <ion-icon\n                      name=\"checkmark-circle-outline\"\n                      slot=\"start\"\n                    ></ion-icon>\n                    Cita confirmada\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-button shape=\"round\" expand=\"full\" color=\"dark\" disabled>\n              <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n              <ion-label>Ver detalles</ion-label>\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card *ngIf=\"!message?.event\">\n          <div *ngIf=\"message.image\">\n            <img\n              (click)=\"\n                openViewer(\n                  message.image,\n                  message.fromuser.name +\n                    ', ' +\n                    utils.niceDate(message.time_creation),\n                  message.text\n                )\n              \"\n              [src]=\"message.image\"\n            />\n            <ion-note class=\"note-image\" *ngIf=\"!message?.text\">\n              <span *ngIf=\"message?.edited\">Editado</span>\n              {{ message.time_creation | chatDate }}\n              <span *ngIf=\"message.fromuser?.id == auth.currentUserValue?.id\">\n                <ion-icon *ngIf=\"message.sending\" name=\"time\"></ion-icon>\n                <ion-icon\n                  *ngIf=\"!message.sending && !message.time_read\"\n                  name=\"checkmark\"\n                ></ion-icon>\n                <ion-icon\n                  *ngIf=\"message.time_read\"\n                  color=\"secondary\"\n                  name=\"checkmark-done\"\n                ></ion-icon>\n              </span>\n            </ion-note>\n          </div>\n          <ion-card-content *ngIf=\"message.audio\" class=\"audio-content\">\n            <ion-item lines=\"none\">\n              <audio-player [src]=\"message.audio\"></audio-player>\n              <ion-note class=\"note-text note-audio\" slot=\"end\">\n                {{ message.time_creation | date: \"shortTime\" }}\n                <span *ngIf=\"message.fromuser?.id == auth.currentUserValue?.id\">\n                  <ion-icon *ngIf=\"message.sending\" name=\"time\"></ion-icon>\n                  <ion-icon\n                    *ngIf=\"!message.sending && !message.time_read\"\n                    name=\"checkmark\"\n                  ></ion-icon>\n                  <ion-icon\n                    *ngIf=\"message.time_read\"\n                    color=\"secondary\"\n                    name=\"checkmark-done\"\n                  ></ion-icon>\n                </span>\n              </ion-note>\n              <ion-avatar slot=\"end\">\n                <img\n                  [src]=\"message.fromuser?.thumbnail\"\n                  [alt]=\"message.fromuser?.username\"\n                />\n              </ion-avatar>\n            </ion-item>\n          </ion-card-content>\n          <ion-card-content *ngIf=\"message.text\">\n            <p\n              class=\"text-name\"\n              *ngIf=\"\n                message?.fromuser?.id !== messages[i - 1]?.fromuser?.id ||\n                message?.reply_to ||\n                (message?.time_creation | date: 'shortDate') !==\n                  (messages[i - 1]?.time_creation | date: 'shortDate')\n              \"\n            >\n              <a (click)=\"showProfile(message.fromuser.id)\">\n                <ion-text [color]=\"userSvc.getRoleColor(message.fromuser)\">{{\n                  message.fromuser.username\n                }}</ion-text>\n              </a>\n              <ion-icon\n                *ngIf=\"userSvc.getRoleIcon(message.fromuser)\"\n                [name]=\"userSvc.getRoleIcon(message.fromuser)\"\n                [src]=\"userSvc.getRoleIcon(message.fromuser)\"\n                slot=\"icon-only\"\n                [color]=\"userSvc.getRoleColor(message.fromuser)\"\n                (click)=\"userSvc.showRole(message.fromuser)\"\n              >\n              </ion-icon>\n              <span class=\"note-time\">\n                · {{ message.time_creation | chatDate }}\n              </span>\n            </p>\n            <ion-text class=\"text\" *ngIf=\"!message?.event\">\n              <ion-text\n                color=\"light\"\n                class=\"message-text\"\n                [innerHTML]=\"\n                  message.text | linky: { className: 'linkified' } | hashtag\n                \"\n                (click)=\"$event.stopImmediatePropagation(); openUrl($event)\"\n              ></ion-text>\n              <span class=\"edited\" *ngIf=\"message?.edited\"> · Editado</span>\n              <span *ngIf=\"message.fromuser?.id == auth.currentUserValue?.id\">\n                <ion-icon *ngIf=\"message.sending\" name=\"time\"></ion-icon>\n                <ion-icon\n                  *ngIf=\"!message.sending && !message.time_read\"\n                  name=\"checkmark\"\n                ></ion-icon>\n                <ion-icon\n                  *ngIf=\"message.time_read\"\n                  color=\"secondary\"\n                  name=\"checkmark-done\"\n                ></ion-icon>\n              </span>\n              <span class=\"text-note-time\">\n                · {{ message.time_creation | date: \"shortTime\" }}\n              </span>\n            </ion-text>\n          </ion-card-content>\n        </ion-card>\n      </ion-item>\n    </ion-item-sliding>\n  </span>\n</ion-content>\n<ion-footer\n  *ngIf=\"\n    (!user?.banned && user?.active && !user?.roles?.includes('ROLE_DEMO')) ||\n    (auth.currentUserValue?.roles?.includes('ROLE_DEMO') &&\n      user?.roles?.includes('ROLE_DEMO'))\n  \"\n>\n  <app-chat-input\n    (onWriting)=\"setWriting()\"\n    (onSubmit)=\"sendMessage($event)\"\n    (onCreateEvent)=\"createEvent()\"\n    [(replying)]=\"replying\"\n    [(editing)]=\"editing\"\n    [selectedMessage]=\"selectedMessage\"\n    [events]=\"messages.length > 10\"\n    [microphone]=\"true\"\n  ></app-chat-input>\n</ion-footer>\n";

/***/ }),

/***/ 84945:
/*!*******************************************************!*\
  !*** ./src/app/credits/credits.modal.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Créditos de FrikiRadar</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <p class=\"ion-text-center\">\n    Muchas gracias a quienes participan de una u otra manera en FrikiRadar.<br />¡Entre\n    todos lo hacemos posible!\n  </p>\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\"code-slash-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p><strong>DESARROLLO: </strong> Alberto Merino.</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"megaphone-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p><strong>MARKETING: </strong> Jessica Labra y Alberto Merino.</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"share-social-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p><strong>REDES SOCIALES: </strong> Jessica Labra.</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <p><strong>PATREON: </strong> {{patreon}}.</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 74545:
/*!*******************************************************!*\
  !*** ./src/app/cropper/cropper.modal.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Ajusta tu imagen</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <image-cropper\n    style=\"background-color: black !important;\"\n    class=\"full-center\"\n    [imageURL]=\"src\"\n    [imageChangedEvent]=\"imageChangedEvent\"\n    [maintainAspectRatio]=\"maintainAspectRatio\"\n    [aspectRatio]=\"aspectRatio\"\n    [containWithinAspectRatio]=\"maintainAspectRatio\"\n    [resizeToWidth]=\"512\"\n    [cropperMinWidth]=\"256\"\n    format=\"png\"\n    (imageCropped)=\"imageCropped($event)\"\n    (imageLoaded)=\"imageLoaded()\"\n    (loadImageFailed)=\"loadImageFailed()\"\n    backgroundColor=\"#1f1f1f\"\n    [transform]=\"transform\"\n  ></image-cropper>\n  <!--<img [src]=\"croppedImage\" />-->\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancel()\">CANCELAR</ion-button>\n    </ion-buttons>\n    <ion-buttons id=\"transform\">\n      <ion-button (click)=\"rotateRight()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"flipH()\">\n        <ion-icon name=\"swap-horizontal\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"flipV()\">\n        <ion-icon name=\"swap-vertical\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"zoomIn()\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"zoomOut()\">\n        <ion-icon name=\"remove-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"toggleAspect()\" *ngIf=\"!square\">\n        <ion-icon\n          [src]=\"maintainAspectRatio ? '/assets/icon/crop_free_white_24dp.svg' : '/assets/icon/crop_square_white_24dp.svg'\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"ok()\">OK</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 77241:
/*!****************************************************************!*\
  !*** ./src/app/events/event-modal/event.modal.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!user && page?.category !== 'games'\"\n      >{{editing ? 'Editando evento ' + event.title : 'Crea un nuevo\n      evento'}}</ion-title\n    >\n    <ion-title *ngIf=\"user\">\n      Configurando una cita con {{user?.name}}\n    </ion-title>\n    <ion-title *ngIf=\"page?.category === 'games'\">\n      Partida a {{page?.name}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <p *ngIf=\"!editing && !user && !page\">\n    Indica el tema del evento, la fecha y donde se realizará (por internet o en\n    persona).\n  </p>\n  <ion-list>\n    <form [formGroup]=\"eventForm\" (submit)=\"submitEvent()\" autocomplete=\"off\">\n      <ion-item>\n        <ion-input\n          formControlName=\"title\"\n          placeholder=\"Título del evento\"\n          [readonly]=\"!!user\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea\n          [placeholder]=\"user ? 'Escribe todos los detalles de la cita, para que no se te olvide nada.' : 'Escribe aquí la descripción del evento, en que consiste y toda la información que necesiten las personas interesadas en apuntarse'\"\n          rows=\"3\"\n          formControlName=\"description\"\n        ></ion-textarea>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"show-more\" *ngIf=\"!user\">\n        <ion-label>Fecha y hora de inicio</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Fecha/hora de inicio</ion-label>\n        <ion-datetime\n          formControlName=\"date\"\n          displayFormat=\"DD MMM de YYYY HH:mm\"\n          pickerFormat=\"DD MMM YYYY HH:mm\"\n          monthShortNames=\"ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic\"\n          placeholder=\"dd mm de yyyy hh:mm\"\n          max=\"2030-12-31\"\n          cancel-text=\"Cancelar\"\n          done-text=\"Hecho\"\n        ></ion-datetime>\n      </ion-item>\n      <ion-item-group *ngIf=\"!user\">\n        <ion-item\n          button\n          (click)=\"endDate = !endDate\"\n          lines=\"none\"\n          class=\"show-more\"\n        >\n          <ion-label>+ Fecha y hora de finalización</ion-label>\n          <ion-icon\n            [name]=\"endDate ? 'chevron-up' : 'chevron-down'\"\n            color=\"light\"\n            size=\"small\"\n          ></ion-icon>\n        </ion-item>\n        <ion-item *ngIf=\"endDate\" lines=\"none\">\n          <ion-label>Fecha de fin</ion-label>\n          <ion-datetime\n            formControlName=\"endDate\"\n            displayFormat=\"DD MMM de YYYY HH:mm\"\n            monthShortNames=\"ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic\"\n            placeholder=\"dd mm de yyyy hh:mm\"\n            cancel-text=\"Cancelar\"\n            done-text=\"Hecho\"\n            [min]=\"eventForm.get('date').value\"\n            max=\"2030-12-31\"\n          ></ion-datetime>\n        </ion-item>\n      </ion-item-group>\n      <ion-segment\n        mode=\"ios\"\n        [value]=\"type\"\n        (ionChange)=\"changeType($event.detail.value)\"\n      >\n        <ion-segment-button value=\"online\">\n          <ion-label color=\"light\">En línea</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"offline\">\n          <ion-label color=\"light\">En persona</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <ion-item>\n        <ion-input\n          formControlName=\"url\"\n          [placeholder]=\"user ? 'URL de la cita' : 'URL del evento'\"\n          inputmode=\"url\"\n        ></ion-input>\n      </ion-item>\n      <div *ngIf=\"type === 'offline'\">\n        <ion-item>\n          <ion-label>País</ion-label>\n          <ion-select\n            interface=\"action-sheet\"\n            cancel-text=\"Cancelar\"\n            placeholder=\"Selecciona uno\"\n            formControlName=\"country\"\n            [value]=\"country\"\n            debounce=\"2000\"\n            (ionChange)=\"changeLocation()\"\n          >\n            <ion-select-option\n              *ngFor=\"let country of utils.getCountries()\"\n              [value]=\"country\"\n              >{{ country }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-input\n            debounce=\"2000\"\n            (ionChange)=\"changeLocation()\"\n            formControlName=\"city\"\n            placeholder=\"Ciudad / localidad / municipio\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input\n            debounce=\"2000\"\n            (ionChange)=\"changeLocation()\"\n            formControlName=\"address\"\n            placeholder=\"Dirección / nombre del lugar\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input\n            debounce=\"2000\"\n            (ionChange)=\"changeLocation()\"\n            formControlName=\"postal_code\"\n            placeholder=\"Código postal\"\n          ></ion-input>\n        </ion-item>\n        <iframe\n          *ngIf=\"mapSrc\"\n          width=\"100%\"\n          height=\"300\"\n          style=\"border: 0\"\n          loading=\"lazy\"\n          allowfullscreen\n          [src]=\"mapSrc\"\n        ></iframe>\n      </div>\n      <ion-item-group *ngIf=\"!user\">\n        <ion-item\n          button\n          (click)=\"showMore = !showMore\"\n          lines=\"none\"\n          class=\"show-more\"\n        >\n          <ion-label>+ Configuración extra</ion-label>\n          <ion-icon\n            [name]=\"showMore ? 'chevron-up' : 'chevron-down'\"\n            color=\"light\"\n            size=\"small\"\n          ></ion-icon>\n        </ion-item>\n        <div *ngIf=\"showMore\">\n          <ion-item lines=\"none\">\n            <ion-label slot=\"start\">Edad mínima</ion-label>\n            <ion-input\n              formControlName=\"minage\"\n              slot=\"start\"\n              type=\"number\"\n              value=\"0\"\n              min=\"0\"\n              max=\"99\"\n              maxlength=\"2\"\n              placeholder=\"0\"\n              inputmode=\"numeric\"\n            ></ion-input>\n            <ion-label>años</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label slot=\"start\">Precio</ion-label>\n            <ion-input\n              formControlName=\"price\"\n              placeholder=\"Precio\"\n              value=\"0\"\n              type=\"number\"\n              inputmode=\"decimal\"\n              step=\"0.01\"\n              min=\"0\"\n            ></ion-input>\n          </ion-item>\n          <div *ngIf=\"type === 'offline'\">\n            <ion-item>\n              <ion-input\n                formControlName=\"contact_phone\"\n                placeholder=\"Teléfono de contacto\"\n                inputmode=\"tel\"\n              ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input\n                formControlName=\"contact_email\"\n                placeholder=\"Email de contacto\"\n                inputmode=\"email\"\n              ></ion-input>\n            </ion-item>\n          </div>\n        </div>\n      </ion-item-group>\n      <ion-item *ngIf=\"!user\">\n        <ion-thumbnail *ngIf=\"src || event?.image\">\n          <img [src]=\"src ? src : event?.image\" />\n        </ion-thumbnail>\n        <ion-input\n          type=\"file\"\n          accept=\"image/*\"\n          formControlName=\"image\"\n          placeholder=\"Elige una imagen\"\n          clearInput=\"true\"\n          (change)=\"cropImagebyEvent($event)\"\n          (ionChange)=\"removeImage($event)\"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"auth.isAdmin() && !user && !event?.id\">\n        <ion-label>Evento oficial</ion-label>\n        <ion-checkbox slot=\"start\" formControlName=\"official\"></ion-checkbox>\n      </ion-item>\n      <ion-button\n        color=\"primary\"\n        type=\"submit\"\n        shape=\"round\"\n        expand=\"block\"\n        [disabled]=\"eventForm.invalid\"\n        >{{editing ? 'Guardar cambios' : (user ? 'Publicar cita' : 'Publicar\n        evento')}}</ion-button\n      >\n    </form>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 69865:
/*!*****************************************************************!*\
  !*** ./src/app/options-popover/options-popover.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-item button (click)=\"showProfile(user?.id)\" *ngIf=\"page === 'chat'\">\n    <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n    <ion-label>Ver Perfil</ion-label>\n  </ion-item>\n  <!--<ion-item button (click)=\"close()\" *ngIf=\"page === 'chat'\">\n    <ion-icon name=\"volume-mute\" slot=\"start\"></ion-icon>\n    <ion-label>Silenciar notificaciones</ion-label>\n  </ion-item>-->\n  <ion-item\n    button\n    (click)=\"copyProfile()\"\n    *ngIf=\"page !== 'chat' && platform.is('cordova')\"\n  >\n    <ion-icon color=\"light\" name=\"copy\" slot=\"start\"></ion-icon>\n    <ion-label color=\"light\">Copiar URL del perfil</ion-label>\n  </ion-item>\n  <ion-item button (click)=\"shareProfile()\" *ngIf=\"page !== 'chat'\">\n    <ion-icon color=\"light\" name=\"share-social\" slot=\"start\"></ion-icon>\n    <ion-label color=\"light\">Compartir el perfil</ion-label>\n  </ion-item>\n  <ion-item\n    button\n    (click)=\"report(user)\"\n    lines=\"full\"\n    *ngIf=\"auth?.currentUserValue?.id !== user?.id\"\n  >\n    <ion-icon color=\"light\" name=\"warning\" slot=\"start\"></ion-icon>\n    <ion-label color=\"light\">Reportar</ion-label>\n  </ion-item>\n  <ion-item\n    button\n    (click)=\"block(user)\"\n    lines=\"full\"\n    *ngIf=\"auth?.currentUserValue?.id !== user?.id\"\n  >\n    <ion-icon color=\"light\" name=\"ban\" slot=\"start\"></ion-icon>\n    <ion-label color=\"light\">Bloquear</ion-label>\n  </ion-item>\n  <ion-item\n    button\n    (click)=\"warn(user)\"\n    *ngIf=\"auth.isMaster() && auth?.currentUserValue?.id !== user?.id\"\n  >\n    <ion-icon color=\"danger\" name=\"warning\" slot=\"start\"></ion-icon>\n    <ion-label color=\"danger\">Advertir al usuario</ion-label>\n  </ion-item>\n  <ion-item\n    button\n    (click)=\"ban(user)\"\n    lines=\"none\"\n    *ngIf=\"auth.isMaster() && auth?.currentUserValue?.id !== user?.id\"\n  >\n    <ion-icon color=\"danger\" name=\"hammer\" slot=\"start\"></ion-icon>\n    <ion-label color=\"danger\">Banear</ion-label>\n  </ion-item>\n</ion-list>\n";

/***/ }),

/***/ 76582:
/*!*******************************************************************************************!*\
  !*** ./src/app/radar/request-geolocation-modal/request-geolocation.modal.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <div class=\"full-center ion-padding\" *ngIf=\"view === 'request'\">\n    <ion-icon name=\"location-sharp\"></ion-icon>\n    <h2>Permisos de ubicación</h2>\n    <p>\n      Para que el FrikiRadar pueda sugerirte a personas que están cerca de ti es\n      necesario que aceptes el permiso para ver tu ubicación.\n    </p>\n    <ion-button shape=\"round\" fill=\"outline\" (click)=\"close(true)\"\n      >PERMITIR</ion-button\n    >\n  </div>\n\n  <div class=\"full-center ion-padding\" *ngIf=\"view === 'force'\">\n    <ion-icon name=\"location-sharp\"></ion-icon>\n    <h2>Ups!</h2>\n    <p>\n      Para que el FrikiRadar pueda encontrar personas que están cerca de ti es\n      necesario que aceptes el permiso para ver tu ubicación.\n    </p>\n    <div *ngIf=\"platform?.is('cordova'); else noCordova\">\n      <p>Verifica los permisos de ubicación en los ajustes de la aplicación.</p>\n      <ion-button shape=\"round\" fill=\"outline\" (click)=\"changeSettings()\"\n        >CAMBIAR AJUSTES</ion-button\n      >\n    </div>\n    <ng-template #noCordova>\n      <p>Verifica los permisos de ubicación en los ajustes del navegador.</p>\n      <ion-button\n        shape=\"round\"\n        fill=\"outline\"\n        href=\"https://support.google.com/chrome/answer/142065?co=GENIE.Platform%3DDesktop&hl=es&oco=1\"\n        target=\"_blank\"\n        >MÁS INFORMACIÓN</ion-button\n      >\n    </ng-template>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 30402:
/*!**************************************************!*\
  !*** ./src/app/rules/rules.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"deny()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Normas de la comunidad</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <p class=\"ion-text-center\">\n    El incumplimiento de estas reglas conllevarán a la expulsión temporal o\n    permanente de la aplicación.\n  </p>\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\"hand-right\" slot=\"start\" color=\"danger\"></ion-icon>\n      <ion-label>\n        <p>\n          <strong>NO SPAM.</strong> No pongas links en las salas de chat que\n          envién a los usuarios a tus páginas o perfiles personales en otras\n          plataformas, para eso tienes tu propio perfil.\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"fish\" slot=\"start\" color=\"tertiary\"></ion-icon>\n      <ion-label>\n        <p>\n          <strong>NO DESNUDOS O IMÁGENES EXPLÍCITAS.</strong> No publiques en\n          las salas de chat públicas fotos de desnudo parcial o completo ni\n          imágenes explícitas de ningún tipo. Recuerda que hay menores en la\n          aplicación.\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"body\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label>\n        <p>\n          <strong>RESPETO.</strong> En esta aplicación respetamos a todas las\n          personas independientemente de su nacionalidad, color, etnia,\n          identidad sexual, identidad de género o clase social. Si no te sientes\n          agusto aquí mejor vete.\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <p class=\"ion-text-center\">\n    En caso de dudas con alguna norma consulta con un moderador/administrador.\n  </p>\n  <div *ngIf=!accepted>\n    <ion-button (click)=\"accept()\" shape=\"round\" expand=\"block\" class=\"primary\">He leído y acepto las normas\n    </ion-button>\n    <p class=\"ion-text-center\" id=\"forgot-password\">\n      <a (click)=\"deny()\">No estoy de acuerdo</a>\n    </p>\n  </div>\n</ion-content>";

/***/ }),

/***/ 81879:
/*!*************************************************************************!*\
  !*** ./src/app/story/comment-likes/comment-likes.modal.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item\n      *ngFor=\"let like of likes\"\n      button\n      (click)=\"showProfile(like.id)\"\n      lines=\"none\"\n    >\n      <ion-avatar>\n        <img [src]=\"like.thumbnail\" />\n      </ion-avatar>\n      <ion-label>\n        {{like.name}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 13365:
/*!***************************************************************!*\
  !*** ./src/app/story/story-modal/story.modal.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancel()\">\n        <ion-icon\n          slot=\"icon-only\"\n          md=\"arrow-back\"\n          ios=\"chevron-back\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"publish()\" [disabled]=\"!imageFile || showBackdrop\">\n        <ion-label color=\"primary\">Publicar historia</ion-label>\n        <ion-icon color=\"primary\" name=\"arrow-up-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form\n    [formGroup]=\"storyForm\"\n    autocomplete=\"off\"\n    class=\"ion-padding\"\n    *ngIf=\"image\"\n  >\n    <ion-thumbnail *ngIf=\"image\">\n      <img [src]=\"image\" />\n    </ion-thumbnail>\n    <ion-list\n      id=\"usernames\"\n      *ngIf=\"usernames?.length && text?.value?.length > 3\"\n    >\n      <ion-item\n        lines=\"none\"\n        button\n        *ngFor=\"let u of usernames\"\n        (click)=\"setMention(u.username)\"\n      >\n        <ion-avatar>\n          <img [src]=\"u.thumbnail\" />\n        </ion-avatar>\n        <ion-label>{{ u.username }}</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-item *ngIf=\"image\">\n      <ion-textarea\n        placeholder=\"Escribe un comentario o describe la foto\"\n        rows=\"3\"\n        formControlName=\"text\"\n        (ionChange)=\"setWriting($event.detail.value)\"\n        #textarea\n      ></ion-textarea>\n    </ion-item>\n  </form>\n  <div *ngIf=\"!image\" class=\"full-center ion-padding\">\n    <ion-icon name=\"camera-outline\"></ion-icon>\n    <h2>Añade una imagen</h2>\n    <p>\n      Haz una foto o selecciona una imagen de tu galería para mostrar tu\n      historia.\n    </p>\n  </div>\n  <input\n    type=\"file\"\n    accept=\"image/*\"\n    #imageInput\n    style=\"display: none;\"\n    name=\"avatar\"\n    (change)=\"cropImagebyEvent($event)\"\n  />\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"selectPicture('gallery')\">\n        <ion-icon name=\"image-outline\"></ion-icon>\n        <ion-label>Galería</ion-label>\n      </ion-button>\n      <!--<ion-button (click)=\"selectPicture('camera')\">\n        <ion-icon name=\"camera-outline\"></ion-icon>\n        <ion-label>Cámara</ion-label>\n      </ion-button>-->\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <!--<ion-button (click)=\"selectText()\">\n        <ion-icon name=\"document-text-outline\"></ion-icon>\n        <ion-label>Texto</ion-label>\n      </ion-button>-->\n      <ion-button (click)=\"selectPicture('camera')\">\n        <ion-icon name=\"camera-outline\"></ion-icon>\n        <ion-label>Cámara</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n<ion-backdrop visible=\"true\" *ngIf=\"showBackdrop\"></ion-backdrop>\n";

/***/ }),

/***/ 36768:
/*!***********************************************************************!*\
  !*** ./src/app/story/view-stories/view-stories.modal.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button shape=\"round\" (click)=\"showProfile(story?.user?.id)\">\n        <ion-avatar>\n          <img [src]=\"story.user?.thumbnail\" [alt]=\"story.user?.username\" />\n        </ion-avatar>\n        <ion-label>\n          <h2>\n            {{ story.user.id !== auth.currentUserValue.id ? story.user?.username\n            : 'Mi historia' }}\n          </h2>\n          <p>{{(story?.time_creation | niceDate)}}</p>\n        </ion-label>\n      </ion-button>\n      <ion-icon\n        *ngIf=\"userSvc.getRoleIcon(story.user)\"\n        [name]=\"userSvc.getRoleIcon(story.user)\"\n        [src]=\"userSvc.getRoleIcon(story.user)\"\n        slot=\"icon-only\"\n        size=\"small\"\n        [color]=\"userSvc.getRoleColor(story.user)\"\n        (click)=\"userSvc.showRole(story.user)\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        *ngIf=\"story.user.id === auth.currentUserValue.id || auth.isMaster()\"\n        (click)=\"showOptions(story)\"\n      >\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-horizontal\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-slides\n    #slides\n    (ionSlideDidChange)=\"slide()\"\n    (ionSlidesDidLoad)=\"$event.target.update()\"\n    (click)=\"tap($event)\"\n    [options]=\"slideOpts\"\n    pager=\"true\"\n  >\n    <ion-slide *ngFor=\"let story of stories\">\n      <ion-card>\n        <ion-thumbnail>\n          <img [src]=\"story?.image\" [alt]=\"story?.user.username\" />\n        </ion-thumbnail>\n        <ion-card-content>\n          <p\n            (click)=\"$event.stopImmediatePropagation(); openUrl($event);\"\n            [innerHTML]=\"story.text | linky:{className: 'linkified'} | mentions:{mentions: story.mentions} | hashtag\"\n          ></p>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <ion-item lines=\"none\" id=\"text-input\">\n    <ion-buttons\n      ion-activatable\n      *ngIf=\"story?.user?.id !== auth.currentUserValue.id\"\n    >\n      <ion-button color=\"primary\" (click)=\"switchLikeStory()\">\n        <ion-icon\n          slot=\"icon-only\"\n          [name]=\"story?.like ? 'heart' : 'heart-outline'\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <form [formGroup]=\"commentForm\" autocomplete=\"off\">\n      <ion-item lines=\"none\">\n        <ion-textarea\n          placeholder=\"Comenta la historia\"\n          autocapitalize=\"on\"\n          (ionFocus)=\"commentFocus()\"\n          rows=\"1\"\n        >\n        </ion-textarea>\n      </ion-item>\n    </form>\n    <ion-buttons ion-activatable>\n      <ion-button [disabled]=\"!comment.value\" (click)=\"sendComment()\">\n        <ion-icon slot=\"icon-only\" color=\"primary\" name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n  <div class=\"comments\">\n    <ion-list *ngIf=\"story?.comments.length > 0\">\n      <ion-item\n        *ngFor=\"let comment of story.comments.slice(-1)\"\n        button\n        detail=\"false\"\n        lines=\"none\"\n      >\n        <ion-avatar (click)=\"showProfile(comment.user.id)\">\n          <img [src]=\"comment.user.thumbnail\" />\n        </ion-avatar>\n        <ion-label>\n          <p class=\"text\">\n            <a (click)=\"showProfile(comment.user.id)\"\n              >{{comment.user.username}}</a\n            >\n            &nbsp;\n            <span\n              [innerHTML]=\"comment.text | linky:{className: 'linkified'} | mentions:{mentions: comment.mentions} | hashtag\"\n              (click)=\"$event.stopImmediatePropagation(); openUrl($event);\"\n            ></span>\n          </p>\n\n          <ion-note class=\"note-date\">\n            <span>{{ comment.time_creation | date: \"shortTime\" }}</span>\n            &nbsp;&nbsp;&nbsp;\n            <span\n              *ngIf=\"comment?.likes.length\"\n              button\n              (click)=\"viewCommentLikes(comment.likes)\"\n              >{{ comment.likes.length }} kokoros</span\n            >\n            &nbsp;&nbsp;&nbsp;\n            <span\n              *ngIf=\"auth.currentUserValue.id !== comment.user.id\"\n              button\n              (click)=\"commentFocus(); reply(comment)\"\n              >Responder</span\n            >\n            &nbsp;&nbsp;&nbsp;\n            <span\n              *ngIf=\"auth.currentUserValue.id === comment.user.id\"\n              button\n              (click)=\"deleteComment(comment)\"\n              >Eliminar</span\n            >\n          </ion-note>\n        </ion-label>\n\n        <ion-note>\n          <ion-buttons>\n            <ion-button (click)=\"switchLikeComment(comment)\">\n              <ion-icon\n                slot=\"icon-only\"\n                size=\"small\"\n                [color]=\"comment.like ? 'primary' : 'medium'\"\n                [name]=\"comment.like ? 'heart' : 'heart-outline'\"\n              ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-note>\n      </ion-item>\n      <ion-item\n        button\n        lines=\"none\"\n        class=\"show-more\"\n        (click)=\"viewComments()\"\n        *ngIf=\"story?.comments?.length > 1\"\n      >\n        <ion-label>Ver los {{story?.comments.length}} comentarios</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"viewViews()\" shape=\"round\">\n        <ion-icon name=\"heart\"></ion-icon>\n        <ion-label>{{story?.likeStories.length}} kokoros</ion-label> /\n        <ion-label>{{story?.viewStories.length}} vistas</ion-label>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"viewComments()\" shape=\"round\">\n        <ion-icon name=\"chatbubble-ellipses\"></ion-icon>\n        <ion-label>{{story.comments.length}} Comentarios</ion-label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- panes -->\n\n<div class=\"views-pane\">\n  <p>Visualizaciones y kokoros</p>\n  <ion-list *ngIf=\"story?.viewStories?.length > 0\">\n    <ion-item\n      *ngFor=\"let view of story?.viewStories\"\n      button\n      detail=\"false\"\n      (click)=\"showProfile(view.user.id)\"\n    >\n      <ion-avatar>\n        <img [src]=\"view?.user?.thumbnail\" />\n      </ion-avatar>\n      <ion-label>{{view?.user?.username}}</ion-label>\n      <ion-icon name=\"heart\" color=\"primary\" *ngIf=\"view?.user?.like\"\n        >{{view?.user?.like}}</ion-icon\n      >\n    </ion-item>\n  </ion-list>\n  <ion-item *ngIf=\"story?.viewStories?.length == 0\">\n    <p>No hay visualizaciones</p>\n  </ion-item>\n</div>\n<div class=\"comments-pane\">\n  <p>Comentarios</p>\n  <ion-list\n    id=\"usernames\"\n    *ngIf=\"usernames?.length && comment?.value?.length > 3\"\n  >\n    <ion-item\n      lines=\"none\"\n      button\n      detail=\"false\"\n      *ngFor=\"let u of usernames\"\n      (click)=\"setMention(u.username)\"\n    >\n      <ion-avatar>\n        <img [src]=\"u.thumbnail\" />\n      </ion-avatar>\n      <ion-label>{{ u.username }}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"story?.comments.length > 0\">\n    <ion-item\n      *ngFor=\"let comment of story.comments\"\n      button\n      detail=\"false\"\n      lines=\"none\"\n    >\n      <ion-avatar (click)=\"showProfile(comment.user.id)\">\n        <img [src]=\"comment.user.thumbnail\" />\n      </ion-avatar>\n      <ion-label>\n        <p class=\"text\">\n          <a (click)=\"showProfile(comment.user.id)\"\n            >{{comment.user.username}}</a\n          >\n          &nbsp;\n          <span\n            [innerHTML]=\"comment.text | linky:{className: 'linkified'} | mentions:{mentions: comment.mentions} | hashtag\"\n            (click)=\"$event.stopImmediatePropagation(); openUrl($event);\"\n          ></span>\n        </p>\n\n        <ion-note class=\"note-date\">\n          <span>{{ comment.time_creation | date: \"shortTime\" }}</span>\n          &nbsp;&nbsp;&nbsp;\n          <span\n            *ngIf=\"comment?.likes.length\"\n            button\n            (click)=\"viewCommentLikes(comment.likes)\"\n            >{{ comment.likes.length }} kokoros</span\n          >\n          &nbsp;&nbsp;&nbsp;\n          <span\n            *ngIf=\"auth.currentUserValue.id !== comment.user.id\"\n            button\n            (click)=\"reply(comment)\"\n            >Responder</span\n          >\n          &nbsp;&nbsp;&nbsp;\n          <span\n            *ngIf=\"auth.currentUserValue.id === comment.user.id\"\n            button\n            (click)=\"deleteComment(comment)\"\n            >Eliminar</span\n          >\n        </ion-note>\n      </ion-label>\n\n      <ion-note>\n        <ion-buttons>\n          <ion-button (click)=\"switchLikeComment(comment)\">\n            <ion-icon\n              slot=\"icon-only\"\n              size=\"small\"\n              [color]=\"comment.like ? 'primary' : 'medium'\"\n              [name]=\"comment.like ? 'heart' : 'heart-outline'\"\n            ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-item *ngIf=\"story?.comments.length == 0\">\n    <p>No hay comentarios</p>\n  </ion-item>\n  <ion-footer>\n    <ion-item id=\"comment-input\" lines=\"none\">\n      <ion-avatar>\n        <img\n          [src]=\"auth.currentUserValue.thumbnail\"\n          [alt]=\"auth.currentUserValue.username\"\n        />\n      </ion-avatar>\n      <form [formGroup]=\"commentForm\" autocomplete=\"off\">\n        <ion-item lines=\"none\">\n          <ion-textarea\n            placeholder=\"Comenta la historia\"\n            autocapitalize=\"on\"\n            (keydown.enter)=\"sendComment($event)\"\n            (ionChange)=\"setWriting($event.detail.value)\"\n            formControlName=\"comment\"\n            #textarea\n            rows=\"1\"\n          >\n          </ion-textarea>\n        </ion-item>\n      </form>\n      <ion-buttons ion-activatable>\n        <ion-button [disabled]=\"!comment.value\" (click)=\"sendComment()\">\n          <ion-icon slot=\"icon-only\" name=\"send\" color=\"primary\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-footer>\n</div>\n";

/***/ }),

/***/ 1706:
/*!*****************************************************!*\
  !*** ./src/app/webcam/webcam.modal.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>¡Sonríe al pajarito!</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"!webcamImage\">\n    <webcam\n      [height]=\"480\"\n      [width]=\"640\"\n      [trigger]=\"triggerObservable\"\n      [allowCameraSwitch]=\"false\"\n      [switchCamera]=\"switchCameraObservable\"\n      (imageCapture)=\"handleImage($event)\"\n      [imageQuality]=\"1\"\n    >\n    </webcam>\n    <ion-buttons class=\"capture\">\n      <ion-button (click)=\"triggerSnapshot()\">\n        <ion-icon slot=\"icon-only\" name=\"ellipse-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n  <img [src]=\"webcamImage\" *ngIf=\"webcamImage\" />\n  <ion-buttons class=\"capture\" *ngIf=\"webcamImage\">\n    <ion-button (click)=\"ok()\">\n      <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"retry()\">\n      <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancel()\">CANCELAR</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"triggerSwitchCamera()\">\n        <ion-icon slot=\"icon-only\" name=\"camera-reverse-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map