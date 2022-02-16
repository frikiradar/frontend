"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_page_page_module_ts"],{

/***/ 32325:
/*!***************************************************!*\
  !*** ./src/app/pages/page/page-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePageRoutingModule": () => (/* binding */ PagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.page */ 72703);




const routes = [
    {
        path: '',
        component: _page_page__WEBPACK_IMPORTED_MODULE_0__.PagePage
    }
];
let PagePageRoutingModule = class PagePageRoutingModule {
};
PagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagePageRoutingModule);



/***/ }),

/***/ 47311:
/*!*******************************************!*\
  !*** ./src/app/pages/page/page.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePageModule": () => (/* binding */ PagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-routing.module */ 32325);
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.page */ 72703);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);








let PagePageModule = class PagePageModule {
};
PagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _page_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagePageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_page_page__WEBPACK_IMPORTED_MODULE_1__.PagePage]
    })
], PagePageModule);



/***/ }),

/***/ 72703:
/*!*****************************************!*\
  !*** ./src/app/pages/page/page.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePage": () => (/* binding */ PagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.page.html?ngResource */ 47780);
/* harmony import */ var _page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.page.scss?ngResource */ 42739);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 19426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ionic-image-viewer */ 27353);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/room.service */ 51037);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/page.service */ 49450);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/story.service */ 78934);
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tag.service */ 3294);
/* harmony import */ var _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../story/story-modal/story.modal */ 62915);
/* harmony import */ var _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../story/view-stories/view-stories.modal */ 62651);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/navigation.service */ 89565);
/* harmony import */ var src_app_events_event_modal_event_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/events/event-modal/event.modal */ 55713);


















let PagePage = class PagePage {
    constructor(route, pageSvc, roomSvc, storySvc, auth, tagSvc, toast, modal, router, nav, meta, title, eventSvc) {
        this.route = route;
        this.pageSvc = pageSvc;
        this.roomSvc = roomSvc;
        this.storySvc = storySvc;
        this.auth = auth;
        this.tagSvc = tagSvc;
        this.toast = toast;
        this.modal = modal;
        this.router = router;
        this.nav = nav;
        this.meta = meta;
        this.title = title;
        this.eventSvc = eventSvc;
        this.room = {};
        this.showDescription = false;
        this.storiesOpts = {
            slidesPerView: 6.5,
            breakpoints: {
                1024: {
                    slidesPerView: 10.5
                }
            }
        };
    }
    ngAfterViewInit() {
        var _a, _b, _c, _d, _e, _f;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const slug = this.route.snapshot.paramMap.get("slug");
            if (this.auth.currentUserValue) {
                this.page = yield this.pageSvc.getPage(slug);
                this.tag = this.auth.currentUserValue.tags.find(t => t.slug === slug);
                this.getStories();
                this.getEvents();
            }
            else {
                this.page = yield this.pageSvc.getPublicPage(slug);
            }
            const rooms_config = yield this.roomSvc.getRoomsConfig();
            let configRoom = rooms_config === null || rooms_config === void 0 ? void 0 : rooms_config.find(room => room.slug === this.page.slug);
            if ((configRoom === null || configRoom === void 0 ? void 0 : configRoom.last_message) < ((_a = this.page) === null || _a === void 0 ? void 0 : _a.room.last_message) ||
                (!(configRoom === null || configRoom === void 0 ? void 0 : configRoom.last_message) && ((_b = this.page) === null || _b === void 0 ? void 0 : _b.room.last_message))) {
                this.room.unread = true;
            }
            this.meta.addTags([
                {
                    name: "keywords",
                    content: "frikiradar, friki, red social, " +
                        ((_c = this.page) === null || _c === void 0 ? void 0 : _c.name) +
                        ", " +
                        ((_d = this.page) === null || _d === void 0 ? void 0 : _d.category)
                },
                { name: "robots", content: "index, follow" },
                { name: "author", content: "FrikiRadar" },
                { charset: "UTF-8" }
            ]);
            this.title.setTitle("Página de " + ((_e = this.page) === null || _e === void 0 ? void 0 : _e.name) + " en FrikiRadar");
            this.meta.updateTag({
                name: "description",
                content: (_f = this.page) === null || _f === void 0 ? void 0 : _f.description
            });
        });
    }
    getStories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const stories = yield this.storySvc.getStoriesSlug(this.page.slug);
            this.stories = this.storySvc.orderStories(stories);
            this.groupedStories = this.storySvc.groupStories(this.stories);
        });
    }
    getEvents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.events = yield this.eventSvc.getEventsSlug(this.page.slug);
            this.events.map(e => {
                if (e.participants.some(p => p.id === this.auth.currentUserValue.id)) {
                    e.participate = true;
                }
            });
        });
    }
    newEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_events_event_modal_event_modal__WEBPACK_IMPORTED_MODULE_11__.EventModal,
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal",
                componentProps: { page: this.page }
            });
            yield modal.present();
            yield modal.onDidDismiss();
        });
    }
    showEvent(event) {
        this.router.navigate(["/event", event.id]);
    }
    newStory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _story_story_modal_story_modal__WEBPACK_IMPORTED_MODULE_8__.StoryModal,
                componentProps: { hash: `#${this.page.slug}` },
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let stories = this.stories.reverse().filter(s => s.user.id === id);
            stories = [
                ...stories,
                ...this.stories.reverse().filter(s => s.user.id !== id)
            ];
            const modal = yield this.modal.create({
                component: _story_view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_9__.ViewStoriesModal,
                componentProps: { stories },
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal"
            });
            yield modal.present();
            yield modal.onDidDismiss();
            yield this.getStories();
        });
    }
    openViewer(src, title, scheme = "dark") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let componentProps = {};
            componentProps = {
                src,
                title,
                scheme
            };
            const modal = yield this.modal.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_13__.ViewerModalComponent,
                componentProps,
                cssClass: "ion-img-viewer",
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
    addTag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth.currentUserValue) {
                try {
                    const toast = yield this.toast.create({
                        message: `Añadiendo etiqueta ${this.page.name}.`,
                        duration: 5000,
                        position: "top",
                        buttons: [
                            {
                                text: "Deshacer",
                                handler: () => { }
                            }
                        ]
                    });
                    toast.present();
                    const log = yield toast.onDidDismiss();
                    if (log.role === "timeout") {
                        this.tag = yield this.tagSvc.addTag(this.page.name, this.page.category, this.page.slug);
                        (yield this.toast.create({
                            message: `Etiqueta añadida ${this.page.name}.`,
                            duration: 5000,
                            position: "bottom"
                        })).present();
                    }
                    const user = this.auth.currentUserValue;
                    user.tags = [...[this.tag], ...user.tags];
                    this.auth.setAuthUser(user);
                }
                catch (e) {
                    (yield this.toast.create({
                        message: `Error al añadir la etiqueta ${this.page.name}.`,
                        color: "danger",
                        duration: 5000,
                        position: "middle"
                    })).present();
                    console.error(e);
                }
            }
            else {
                this.nav.navigateRoot(["/login"], {
                    queryParams: { returnUrl: this.router.url }
                });
            }
        });
    }
    showRoom(slug) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth.currentUserValue) {
                this.router.navigate(["/room", slug]);
            }
            else {
                this.nav.navigateRoot(["/login"], {
                    queryParams: { returnUrl: this.router.url }
                });
            }
        });
    }
    search() {
        this.router.navigate(["/search", this.page.name]);
    }
    back() {
        this.nav.back();
    }
};
PagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _services_page_service__WEBPACK_IMPORTED_MODULE_5__.PageService },
    { type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__.RoomService },
    { type: _services_story_service__WEBPACK_IMPORTED_MODULE_6__.StoryService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _services_tag_service__WEBPACK_IMPORTED_MODULE_7__.TagService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Meta },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Title },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService }
];
PagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: "app-page",
        template: _page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute,
        _services_page_service__WEBPACK_IMPORTED_MODULE_5__.PageService,
        src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__.RoomService,
        _services_story_service__WEBPACK_IMPORTED_MODULE_6__.StoryService,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _services_tag_service__WEBPACK_IMPORTED_MODULE_7__.TagService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router,
        src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_10__.NavService,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Meta,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Title,
        src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService])
], PagePage);



/***/ }),

/***/ 42739:
/*!******************************************************!*\
  !*** ./src/app/pages/page/page.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  position: absolute;\n  --background: transparent;\n}\nion-toolbar ion-button {\n  background: var(--ion-color-medium-dark);\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n}\nion-toolbar ion-title {\n  color: white;\n  text-shadow: 1px 1px 1px black;\n}\n#artwork {\n  /* Safari 6.0 - 9.0 */\n  filter: blur(1px);\n  height: 230px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-thumbnail#cover {\n  position: absolute;\n  top: 120px;\n  left: 20px;\n  display: inline-flex;\n  --border-radius: 5px;\n  padding: 5px;\n  --size: 120px;\n  height: auto;\n}\nion-thumbnail#cover img {\n  box-shadow: 2px 2px 8px;\n  max-height: 150px;\n}\n#add-tag {\n  position: absolute;\n  top: 180px;\n  right: 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n#add-tag ion-icon {\n  color: white;\n}\n#release {\n  position: relative;\n  left: 150px;\n  top: 8px;\n  color: white;\n  min-height: 40px;\n}\n#description p {\n  color: white;\n  text-align: justify;\n  font-size: 13px;\n}\n#description.collapsed {\n  height: 70px;\n}\n#description.collapsed p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal !important;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n#description.expanded {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n#description.expanded p {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal !important;\n}\n#stories {\n  padding: 10px;\n  margin: 10px 0 10px 10px;\n  background: var(--ion-color-medium-dark);\n  border-radius: 25px 0 0 25px;\n}\n#stories ion-avatar,\n#stories ion-avatar img {\n  width: 48px;\n  height: 48px;\n}\n#stories ion-badge {\n  left: 35px;\n  bottom: 5px;\n}\n#stories ion-label {\n  width: 72px;\n}\n.room {\n  margin: 10px;\n  background: var(--ion-color-medium-dark);\n  border-radius: 25px;\n}\n.room ion-thumbnail {\n  --border-radius: 8px;\n  margin-right: 10px;\n}\n.room .room-description {\n  white-space: normal;\n  white-space: initial;\n  color: #acacac;\n}\n.room ion-badge {\n  position: relative;\n  left: 45px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  bottom: 12px;\n  border: 2px solid #1f1f1f;\n}\n#events ion-card {\n  border-radius: 20px;\n  --color: var(--ion-color-light) !important;\n  --background: var(--ion-color-medium-dark) !important;\n}\n#events ion-card ion-img {\n  height: 220px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n#events ion-card ion-card-title {\n  --color: var(--ion-color-light) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQ0U7RUFDRSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0FBQUo7QUFJQTtFQUM2QixxQkFBQTtFQUMzQixpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFFQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FBREo7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFGRjtBQUlFO0VBQ0UsWUFBQTtBQUZKO0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSEY7QUFPRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFKSjtBQVFBO0VBQ0UsWUFBQTtBQUxGO0FBTUU7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFKSjtBQVFBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBTEY7QUFNRTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQUpKO0FBUUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0FBTEY7QUFPRTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQU5KO0FBU0U7RUFDRSxXQUFBO0FBUEo7QUFXQTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBUkY7QUFVRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVdFO0VBQ0UsbUJBQUE7RUFBQSxvQkFBQTtFQUNBLGNBQUE7QUFUSjtBQVlFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFWSjtBQWVFO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHFEQUFBO0FBWko7QUFjSTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtBQVpOO0FBZUk7RUFDRSwwQ0FBQTtBQWJOIiwiZmlsZSI6InBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1kYXJrKTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcbiAgfVxufVxuXG4jYXJ0d29yayB7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDFweCk7IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgZmlsdGVyOiBibHVyKDFweCk7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuaW9uLXRodW1ibmFpbCNjb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMjBweDtcbiAgbGVmdDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgLS1zaXplOiAxMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuXG4gIGltZyB7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cbn1cblxuI2FkZC10YWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4jcmVsZWFzZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTUwcHg7XG4gIHRvcDogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbiNkZXNjcmlwdGlvbiB7XG4gIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG4jZGVzY3JpcHRpb24uY29sbGFwc2VkIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfVxufVxuXG4jZGVzY3JpcHRpb24uZXhwYW5kZWQge1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBwIHtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbiNzdG9yaWVzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDAgMCAyNXB4O1xuXG4gIGlvbi1hdmF0YXIsXG4gIGlvbi1hdmF0YXIgaW1nIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cblxuICBpb24tYmFkZ2Uge1xuICAgIGxlZnQ6IDM1cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIHdpZHRoOiA3MnB4O1xuICB9XG59XG5cbi5yb29tIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gIGlvbi10aHVtYm5haWwge1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5yb29tLWRlc2NyaXB0aW9uIHtcbiAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICBjb2xvcjogcmdiKDE3MiwgMTcyLCAxNzIpO1xuICB9XG5cbiAgaW9uLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMWYxZjFmO1xuICB9XG59XG5cbiNldmVudHMge1xuICBpb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWRhcmspICFpbXBvcnRhbnQ7XG5cbiAgICBpb24taW1nIHtcbiAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 47780:
/*!******************************************************!*\
  !*** ./src/app/pages/page/page.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\" *ngIf=\"page\">\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{page?.name}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <img\n    id=\"artwork\"\n    [src]=\"page.artwork\"\n    [alt]=\"page?.name\"\n    default=\"/assets/img/pages/default-games-page.jpg\"\n  />\n  <ion-thumbnail id=\"cover\">\n    <img\n      (click)=\"openViewer((page.cover ? page.cover : '/assets/img/pages/default-games-page.jpg'), page.name)\"\n      [src]=\"page.cover\"\n      [alt]=\"page?.name\"\n      default=\"/assets/img/pages/default-games-page.jpg\"\n    />\n  </ion-thumbnail>\n  <div id=\"add-tag\" *ngIf=\"!tag\" (click)=\"addTag()\">\n    <ion-chip color=\"secondary\">\n      <ion-label>Me gusta</ion-label>\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-chip>\n  </div>\n  <div id=\"add-tag\" *ngIf=\"tag\" (click)=\"search()\">\n    <ion-chip color=\"secondary\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>{{page?.likes}} me gusta</ion-label>\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-chip>\n  </div>\n  <div id=\"release\">\n    {{page.release_date | date : 'Y'}}{{page?.developer ? ' • ' + page.developer\n    : ''}}\n  </div>\n  <ion-item\n    *ngIf=\"page.description\"\n    lines=\"none\"\n    id=\"description\"\n    button\n    detail=\"false\"\n    (click)=\"showDescription = !showDescription\"\n    [ngClass]=\"showDescription ? 'expanded' : 'collapsed'\"\n  >\n    <ion-label>\n      <p class=\"ion-text-wrap\">\n        {{page.description}}\n        <br /><br />\n        <ion-text *ngIf=\"page?.category === 'games'\" color=\"light\"\n          >Información obtenida de\n          <a href=\"https://www.igdb.com/\">IGDB</a></ion-text\n        >\n        <ion-text *ngIf=\"page?.category === 'films'\">\n          Información obtenida de\n          <a href=\"https://www.themoviedb.org/\">TMDB</a></ion-text\n        >\n      </p>\n    </ion-label>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon\n          slot=\"icon-only\"\n          color=\"light\"\n          [name]=\"showDescription ? 'chevron-up' : 'chevron-down'\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n\n  <div id=\"stories\" *ngIf=\"auth.currentUserValue\">\n    <div *ngIf=\"!stories\">\n      <ion-slides [options]=\"storiesOpts\" mode=\"md\">\n        <ion-slide *ngFor=\"let i of [].constructor(8)\">\n          <div>\n            <ion-avatar>\n              <ion-skeleton-text\n                animated\n                style=\"width: 100%\"\n              ></ion-skeleton-text>\n            </ion-avatar>\n            <ion-label>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-label>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <ion-slides [options]=\"storiesOpts\" mode=\"md\" *ngIf=\"stories\">\n      <ion-slide>\n        <div>\n          <ion-item button lines=\"none\" (click)=\"newStory()\">\n            <ion-avatar>\n              <img\n                [src]=\"auth.currentUserValue?.thumbnail\"\n                alt=\"auth.currentUserValue?.name\"\n              />\n              <ion-badge color=\"tertiary\">+</ion-badge>\n            </ion-avatar>\n          </ion-item>\n          <ion-label>Añadir</ion-label>\n        </div>\n      </ion-slide>\n      <ion-slide *ngFor=\"let story of groupedStories; let i = index\">\n        <div>\n          <ion-item button lines=\"none\" (click)=\"showStories(story.user.id)\">\n            <ion-avatar [ngClass]=\"story?.viewed ? '' : 'not-view'\">\n              <img [src]=\"story.image\" [alt]=\"story.text\" />\n            </ion-avatar>\n          </ion-item>\n          <ion-label>{{story.user.username}}</ion-label>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <ion-item class=\"room\" button lines=\"none\" (click)=\"showRoom(page.slug)\">\n    <ion-thumbnail>\n      <ion-img src=\"/assets/img/layout/room.png\" alt=\"sala de chat\"></ion-img>\n      <ion-badge color=\"primary\" *ngIf=\"room?.unread\">&nbsp;</ion-badge>\n    </ion-thumbnail>\n    <ion-label>\n      <h2 class=\"room-name\">Sala de chat temática</h2>\n      <p class=\"room-description\">\n        Entra y habla con la comunidad de FrikiRadar sobre {{page?.name}}\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item class=\"room\" button lines=\"none\" (click)=\"newEvent()\">\n    <ion-thumbnail>\n      <ion-img src=\"/assets/img/layout/events.png\" alt=\"eventos\"></ion-img>\n    </ion-thumbnail>\n    <ion-label *ngIf=\"page?.category !== 'games'\">\n      <h2 class=\"room-name\">Crear evento</h2>\n      <p class=\"room-description\">\n        Encuentra personas con las que hablar de {{page?.name}}\n      </p>\n    </ion-label>\n    <ion-label *ngIf=\"page?.category === 'games'\">\n      <h2 class=\"room-name\">Crear partida/torneo</h2>\n      <p class=\"room-description\">\n        Encuentra personas con las que jugar a {{page?.name}}\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-grid *ngIf=\"events?.length > 0 && !loading\" id=\"events\">\n    <ion-row>\n      <ion-col\n        sizeXs=\"12\"\n        sizeSm=\"6\"\n        sizeLg=\"6\"\n        sizeXl=\"4\"\n        sizeMd=\"4\"\n        *ngFor=\"let event of events; let i = index\"\n      >\n        <ion-card button (click)=\"showEvent(event)\">\n          <ion-img [src]=\"event?.image\" [alt]=\"\"></ion-img>\n          <ion-card-header>\n            <ion-card-subtitle\n              >{{(event?.date) | date:'E d MMM y, HH:mm'}} {{event?.date_end ? '\n              - ' + (event?.date_end | date:'E d MMM y, HH:mm') :\n              ''}}</ion-card-subtitle\n            >\n            <ion-card-title>{{event?.title}}</ion-card-title>\n            <ion-text>\n              {{event?.type === 'online' ? 'Online' : event?.address + ', ' +\n              event?.country}}\n            </ion-text>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-button\n              shape=\"round\"\n              expand=\"full\"\n              *ngIf=\"!event?.past && !event?.participate\"\n            >\n              <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n              Quiero participar\n            </ion-button>\n            <ion-button\n              shape=\"round\"\n              expand=\"full\"\n              *ngIf=\"!event?.past && event?.participate\"\n            >\n              <ion-icon name=\"checkmark-circle-outline\" slot=\"start\"></ion-icon>\n              Participación confirmada\n            </ion-button>\n            <ion-button\n              shape=\"round\"\n              expand=\"full\"\n              *ngIf=\"event?.past\"\n              disabled\n            >\n              <ion-icon name=\"timer-outline\" slot=\"start\"></ion-icon>\n              Evento pasado\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_page_page_module_ts.js.map