"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_search_search_module_ts"],{

/***/ 24682:
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 75105);








const routes = [
    {
        path: "",
        component: _search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage
    }
];
let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 75105:
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page.html?ngResource */ 20463);
/* harmony import */ var _search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss?ngResource */ 99090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 73071);







let SearchPage = class SearchPage {
    constructor(userSvc, router, route, toast, nav) {
        this.userSvc = userSvc;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.nav = nav;
        this.order = "distance";
        this.page = 1;
        this.showSkeleton = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.route.snapshot.paramMap.get("query")) {
                this.query = this.route.snapshot.paramMap.get("query");
                this.searchBar.value = this.query;
                this.search();
            }
            setTimeout(() => {
                this.searchBar.setFocus();
            }, 250);
        });
    }
    search(event, addpage = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.query && this.query.trim()) {
                if (addpage) {
                    this.page++;
                }
                if (this.page === 1) {
                    this.showSkeleton = true;
                }
                let users = yield this.userSvc.searchUsers(this.query.trim(), this.order, this.page);
                users = users.filter(u => !u.hide);
                this.showSkeleton = false;
                this.users =
                    this.page === 1 ? (this.users = users) : [...this.users, ...users];
                if (event) {
                    event.target.complete();
                    if (users.length < 15) {
                        event.target.disabled = true;
                    }
                }
            }
        });
    }
    showProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(["/profile", id]);
        });
    }
    hideProfile(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    changeOrder(order) {
        this.order = order;
        this.page = 1;
        this.search();
    }
    newSearch(query) {
        this.query = query;
        this.page = 1;
        this.search();
    }
    dragItem(event, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (event.detail.ratio > 1.8) {
                this.hideProfile(id);
            }
            else if (event.detail.ratio < -1.8) {
                yield event.target.close();
                this.showProfile(id);
            }
        });
    }
    back() {
        this.nav.back();
    }
};
SearchPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
SearchPage.propDecorators = {
    searchBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["searchBar", { static: true },] }]
};
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-search",
        template: _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController])
], SearchPage);



/***/ }),

/***/ 99090:
/*!****************************************************!*\
  !*** ./src/app/search/search.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background: #1f1f1f;\n}\n\nion-content ion-list ion-item-sliding {\n  background: #e91e63;\n}\n\nion-content ion-list ion-item-sliding ion-item {\n  --background: #1f1f1f;\n  --border-color: #e91e63;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-avatar.md {\n  width: 64px;\n  height: 64px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-avatar.ios {\n  width: 48px;\n  height: 48px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-avatar ion-badge {\n  position: absolute;\n  left: 70px;\n  border-radius: 15px;\n  z-index: 1;\n  width: 15px;\n  height: 15px;\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.75);\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label {\n  width: 150px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label .name {\n  font-size: 24px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label.ios .description {\n  max-height: 30px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label.md .description {\n  max-height: 36px;\n}\n\nion-content ion-list ion-item-sliding ion-item ion-label .description {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 13px;\n  color: #bbbbbb;\n  white-space: normal;\n  white-space: initial;\n}\n\nion-content ion-list ion-item-sliding ion-item .match {\n  color: white;\n  font-size: 12px;\n  border: 2px solid white;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  font-weight: bold;\n  margin-left: 10px;\n  background-color: #e91e63;\n}\n\nion-content ion-list ion-item-sliding:first-child ion-item {\n  --background: #e91e63;\n}\n\nion-content ion-list ion-item-sliding:first-child ion-item .match {\n  background-color: white;\n  color: #e91e63;\n  height: 60px;\n  width: 60px;\n  font-size: 13px;\n}\n\nion-content ion-list ion-item-sliding .item-options-end {\n  background-color: #f04041;\n}\n\nion-input {\n  --placeholder-color: rgb(124, 124, 124) !important;\n  padding-right: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsbUJBQUE7QUFBSjs7QUFFSTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFBTjs7QUFHUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRFY7O0FBSVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZWOztBQUtRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQUhWOztBQU9NO0VBQ0UsWUFBQTtBQUxSOztBQU1RO0VBQ0UsZUFBQTtBQUpWOztBQU9RO0VBQ0UsZ0JBQUE7QUFMVjs7QUFRUTtFQUNFLGdCQUFBO0FBTlY7O0FBU1E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUFBLG9CQUFBO0FBUlY7O0FBWU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQVZSOztBQWNJO0VBQ0UscUJBQUE7QUFaTjs7QUFjTTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVpSOztBQWdCSTtFQUNFLHlCQUFBO0FBZE47O0FBbUJBO0VBQ0Usa0RBQUE7RUFDQSw4QkFBQTtBQWhCRiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMxZjFmMWY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLWxpc3QgaW9uLWl0ZW0tc2xpZGluZyB7XG4gICAgYmFja2dyb3VuZDogI2U5MWU2MztcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZTkxZTYzO1xuXG4gICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgJi5tZCB7XG4gICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pb3Mge1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDcwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlvcyAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1kIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogI2JiYmJiYjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWF0Y2gge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZTkxZTYzO1xuXG4gICAgICAubWF0Y2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICNlOTFlNjM7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1vcHRpb25zLWVuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA0MDQxO1xuICAgIH1cbiAgfVxufVxuXG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoMTI0LCAxMjQsIDEyNCkgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuIl19 */";

/***/ }),

/***/ 20463:
/*!****************************************************!*\
  !*** ./src/app/search/search.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-input\n      type=\"search\"\n      debounce=\"500\"\n      placeholder=\"Busca por gustos/nombre de usuario...\"\n      (keyup.enter)=\"newSearch($event.target.value)\"\n      spellcheck=\"false\"\n      color=\"light\"\n      clearInput\n      #searchBar\n    ></ion-input>\n  </ion-toolbar>\n  <ion-segment (ionChange)=\"changeOrder($event.detail.value)\" value=\"distance\">\n    <ion-segment-button layout=\"icon-start\" value=\"distance\">\n      <ion-label>Distancia</ion-label>\n      <ion-icon name=\"navigate-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button layout=\"icon-start\" value=\"match\">\n      <ion-label>Afinidad</ion-label>\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"users?.length || showSkeleton; else noUsers\">\n    <ion-list *ngIf=\"showSkeleton; else radarItems\">\n      <ion-item *ngFor=\"let i of [].constructor(8)\" lines=\"full\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h2>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h2>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ng-template #radarItems>\n      <ion-list>\n        <ion-item-sliding\n          *ngFor=\"let user of users; \"\n          (ionDrag)=\"dragItem($event, user.id)\"\n        >\n          <ion-item-options side=\"start\">\n            <ion-item-option (click)=\"showProfile(user.id)\">\n              <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n          <ion-item button (click)=\"showProfile(user.id)\" lines=\"full\">\n            <ion-avatar slot=\"start\">\n              <img\n                [src]=\"user?.thumbnail\"\n                default=\"/assets/img/users/default.jpg\"\n              />\n            </ion-avatar>\n            <ion-label>\n              <h2>\n                <span class=\"name\">{{ user.name }}</span>\n                <span class=\"age\">, {{ user.age }}</span>\n              </h2>\n              <h3>\n                <span *ngIf=\"user.distance !== undefined\"\n                  >A {{ user.distance }}km de distancia</span\n                >\n              </h3>\n              <p class=\"description\">{{ user.description }}</p>\n            </ion-label>\n            <div class=\"match full-center\" slot=\"end\">{{ user.match }}%</div>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option\n              color=\"danger\"\n              (click)=\"hideProfile(user.id)\"\n              expandable\n            >\n              <ion-icon slot=\"icon-only\" name=\"close-circle\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n        <ion-infinite-scroll\n          threshold=\"50%\"\n          (ionInfinite)=\"search($event, true)\"\n          position=\"bottom\"\n        >\n          <ion-infinite-scroll-content loadingSpinner=\"dots\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n    </ng-template>\n  </div>\n  <ng-template #noUsers>\n    <div class=\"full-center ion-padding\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <h2>Sin resultados</h2>\n      <p>Cambia las palabras de búsqueda para mejorar los resultados.</p>\n    </div>\n  </ng-template>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_search_search_module_ts.js.map