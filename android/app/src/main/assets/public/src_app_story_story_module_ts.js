"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_story_story_module_ts"],{

/***/ 34905:
/*!***********************************************!*\
  !*** ./src/app/story/story-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryPageRoutingModule": () => (/* binding */ StoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _story_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.page */ 15765);




const routes = [
    {
        path: '',
        component: _story_page__WEBPACK_IMPORTED_MODULE_0__.StoryPage
    }
];
let StoryPageRoutingModule = class StoryPageRoutingModule {
};
StoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoryPageRoutingModule);



/***/ }),

/***/ 86032:
/*!***************************************!*\
  !*** ./src/app/story/story.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryPageModule": () => (/* binding */ StoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _story_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story-routing.module */ 34905);
/* harmony import */ var _story_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.page */ 15765);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








let StoryPageModule = class StoryPageModule {
};
StoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _story_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoryPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_story_page__WEBPACK_IMPORTED_MODULE_1__.StoryPage]
    })
], StoryPageModule);



/***/ }),

/***/ 15765:
/*!*************************************!*\
  !*** ./src/app/story/story.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoryPage": () => (/* binding */ StoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _story_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.page.html?ngResource */ 86542);
/* harmony import */ var _story_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.page.scss?ngResource */ 91280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-equal */ 15541);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 70946);
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/navigation.service */ 89565);
/* harmony import */ var _services_story_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/story.service */ 78934);
/* harmony import */ var _story_modal_story_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story-modal/story.modal */ 62915);
/* harmony import */ var _view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-stories/view-stories.modal */ 62651);












let StoryPage = class StoryPage {
    constructor(storySvc, modal, auth, nav, config) {
        this.storySvc = storySvc;
        this.modal = modal;
        this.auth = auth;
        this.nav = nav;
        this.config = config;
        this.loading = true;
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.groupedStories = (yield this.config.get("stories"));
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.getStories();
        });
    }
    getStories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const stories = yield this.storySvc.getAllStories();
            this.stories = this.storySvc.orderStories(stories);
            const groupedStories = this.storySvc.groupStories(this.stories);
            if (this.groupedStories) {
                if (!deep_equal__WEBPACK_IMPORTED_MODULE_2__(this.groupedStories, groupedStories)) {
                    this.groupedStories = groupedStories;
                    this.config.set("stories", groupedStories);
                }
            }
            else {
                this.groupedStories = groupedStories;
                this.config.set("stories", groupedStories);
            }
            this.loading = false;
        });
    }
    showStories(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let stories = this.stories.reverse().filter(s => s.user.id === id);
            stories = [
                ...stories,
                ...this.stories.reverse().filter(s => s.user.id !== id)
            ];
            const modal = yield this.modal.create({
                component: _view_stories_view_stories_modal__WEBPACK_IMPORTED_MODULE_8__.ViewStoriesModal,
                componentProps: { stories },
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal"
            });
            yield modal.present();
            yield modal.onDidDismiss();
            this.getStories();
        });
    }
    newStory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _story_modal_story_modal__WEBPACK_IMPORTED_MODULE_7__.StoryModal,
                keyboardClose: true,
                showBackdrop: true,
                cssClass: "full-modal"
            });
            yield modal.present();
            yield modal.onDidDismiss();
            yield this.getStories();
        });
    }
    back() {
        this.nav.back();
    }
};
StoryPage.ctorParameters = () => [
    { type: _services_story_service__WEBPACK_IMPORTED_MODULE_6__.StoryService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService }
];
StoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-story",
        template: _story_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_story_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [_services_story_service__WEBPACK_IMPORTED_MODULE_6__.StoryService,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController,
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _services_navigation_service__WEBPACK_IMPORTED_MODULE_5__.NavService,
        _services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService])
], StoryPage);



/***/ }),

/***/ 91280:
/*!**************************************************!*\
  !*** ./src/app/story/story.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --border-color: #e91e63;\n}\nion-item p {\n  color: #dddddd;\n}\n#all-stories ion-avatar {\n  width: 55px;\n  height: 55px;\n}\n#all-stories ion-avatar.not-view {\n  border: 2px solid #e91e63;\n}\n#all-stories ion-badge {\n  position: relative;\n  left: 40px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 22px;\n  height: 22px;\n  bottom: 27px;\n  border: 2px solid #1f1f1f;\n  font-size: 14pt;\n  line-height: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0UseUJBQUE7QUFETjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFISiIsImZpbGUiOiJzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZTkxZTYzO1xuXG4gIHAge1xuICAgIGNvbG9yOiAjZGRkZGRkO1xuICB9XG59XG5cbiNhbGwtc3RvcmllcyB7XG4gIGlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogNTVweDtcblxuICAgICYubm90LXZpZXcge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2U5MWU2MztcbiAgICB9XG4gIH1cblxuICBpb24tYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgYm90dG9tOiAyN3B4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZjFmMWY7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGxpbmUtaGVpZ2h0OiAwLjc7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 86542:
/*!**************************************************!*\
  !*** ./src/app/story/story.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Historias frikis</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"loading\"></ion-progress-bar>\n\n  <ion-list id=\"all-stories\">\n    <ion-item button detail=\"false\" lines=\"none\" (click)=\"newStory()\" mode=\"md\">\n      <ion-avatar slot=\"start\">\n        <img\n          [src]=\"auth.currentUserValue?.thumbnail\"\n          alt=\"auth.currentUserValue?.name\"\n        />\n        <ion-badge color=\"tertiary\" mode=\"md\">+</ion-badge>\n      </ion-avatar>\n      <ion-label>\n        <h2>Añadir historia</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item\n      button\n      detail=\"false\"\n      *ngFor=\"let story of groupedStories\"\n      lines=\"none\"\n      (click)=\"showStories(story.user.id)\"\n    >\n      <ion-avatar slot=\"start\" [ngClass]=\"story?.viewed ? '' : 'not-view'\">\n        <img [src]=\"story.image\" [alt]=\"story.text\" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{story.user.username}}</h2>\n        <p>{{story.text}}</p>\n      </ion-label>\n      <ion-note slot=\"end\">\n        {{ story.time_creation | niceDate }}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_story_story_module_ts.js.map