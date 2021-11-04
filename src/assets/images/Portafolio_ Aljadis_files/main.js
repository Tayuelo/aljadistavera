(self["webpackChunkaljadistavera"] = self["webpackChunkaljadistavera"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [
// {
//   path: '',
//   loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
// },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/header/header.component */ 6290);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'aljadistavera';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/landing/landing.module */ 3637);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_2__.LandingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_2__.LandingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeModule] }); })();


/***/ }),

/***/ 7912:
/*!*********************************************************************!*\
  !*** ./src/app/modules/landing/components/about/about.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../timeline/timeline.component */ 235);


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 9, vars: 0, consts: [[1, "about"], [1, "timeline-section"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero suscipit ullam vel magni deleniti amet omnis laboriosam, aut praesentium natus sit illo nisi optio odio tempora, officiis porro aliquam nostrum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__.TimelineComponent], styles: [".about[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #EDEDED;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 500px;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 235:
/*!***************************************************************************!*\
  !*** ./src/app/modules/landing/components/timeline/timeline.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineComponent": () => (/* binding */ TimelineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_timeline_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/timeline.service */ 7701);


class TimelineComponent {
    constructor(timelineService) {
        this.timelineService = timelineService;
        this.timelineData = [];
        this.timelineData = this.timelineService.getTimelineData();
    }
    ngOnInit() { }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_timeline_service__WEBPACK_IMPORTED_MODULE_0__.TimelineService)); };
TimelineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 26, vars: 0, consts: [[1, "container"], [1, "serviceBox"], [1, "icon"], [1, "content"], [1, "earth"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  grid-gap: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n.container[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%] {\n  position: relative;\n  width: 350px;\n  height: 280px;\n  background: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJ0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbnRhaW5lciAuc2VydmljZUJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 613:
/*!***********************************************************!*\
  !*** ./src/app/modules/landing/landing-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingRoutingModule": () => (/* binding */ LandingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 7466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
    }
];
class LandingRoutingModule {
}
LandingRoutingModule.ɵfac = function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); };
LandingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
LandingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7466:
/*!******************************************************!*\
  !*** ./src/app/modules/landing/landing.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class LandingComponent {
    constructor() {
        this.NORMAL_HEIGHT = '100vh';
        this.MIN_HEIGHT = '50vh';
        this.heightOnScroll = this.NORMAL_HEIGHT;
    }
    ngOnInit() {
        window.addEventListener('scroll', () => {
            const scrollFactor = window.scrollY * 9;
            // this.heightOnScroll = `-${ scrollFactor }px`;
            const landingSection = document.getElementById('landing-section');
            const scrolled = window.scrollY;
            if (scrolled === 0) {
                // landingSection?.classList.toggle('landing-section-scrolling', false);
            }
            else {
                // landingSection?.classList.toggle('landing-section-scrolling', true);
            }
        });
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 32, vars: 0, consts: [[1, "container"], ["id", "landing-section", 1, "landingSection"], ["landing_section", ""], [1, "introductionConteiner"], ["src", "assets/images/NEO.jpeg", "alt", "Neo", 1, "profilePhoto"], [1, "introduction"], [1, "menuSection"], [1, "serviceBox"], [1, "icon", 2, "--i", "#14213D"], [1, "earth"], [1, "content"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Aljadis Tavera B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ingeniero de Sistemas, apasionado por el Desarrollo Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".profilePhoto[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n}\n\n.btn-outline-warning[_ngcontent-%COMP%] {\n  color: black;\n  background: #b14c48;\n  border-color: #da4a46;\n  border-radius: 20px;\n}\n\n.btn-outline-warning[_ngcontent-%COMP%]:hover {\n  color: black;\n  background: #da4a46;\n  position: relative;\n  animation: salto-btn;\n  animation-duration: 1s;\n}\n\n@keyframes salto-btn {\n  0% {\n    top: 0px;\n  }\n  50% {\n    top: -10px;\n  }\n  100% {\n    top: 0px;\n  }\n}\n\n@keyframes intro-animation {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes hr-animation {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 20%;\n  }\n}\n\n.containter[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n}\n\n.landingSection[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 8rem;\n  justify-content: center;\n  height: \"70vh\";\n  background-color: #000000;\n}\n\n.menuSection[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  grid-gap: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  padding: 20px;\n  padding: 20px 20em;\n}\n\n.menuSection[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%] {\n  position: relative;\n  width: 350px;\n  height: 280px;\n  border-radius: 20px;\n  overflow: hidden;\n  background: #CCCCCC;\n}\n\n.menuSection[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.5s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  top: 30px;\n  left: calc(50% - 40px);\n}\n\n.menuSection[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  top: 30px;\n  left: calc(50% - 40px);\n}\n\n.menuSection[_ngcontent-%COMP%]   .serviceBox[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .earth[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background-image: url(\"/assets/images/earth.jpeg\");\n  top: 50%;\n  left: 50%;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n  background-size: 200px 100%;\n  display: block;\n  box-shadow: inset 0px 0px 1.5px #fdf29e, inset 8px 0px 20px #000;\n  animation-name: rotate;\n  animation-duration: 10s infinite;\n}\n\n@keyframes rotate {\n  0% {\n    background-position-x: 0px;\n  }\n  100% {\n    background-position-x: 1000px;\n  }\n}\n\n.about-section[_ngcontent-%COMP%] {\n  background-color: var(--indianred);\n}\n\n.timeline-section[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: lightgray;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.introductionConteiner[_ngcontent-%COMP%] {\n  text-align: center;\n  animation-name: intro-animation;\n  animation-duration: 2s;\n  opacity: 1;\n}\n\n.introduction[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  color: white;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 1.5px solid #EDEDED;\n  color: #EDEDED;\n  opacity: 1;\n  width: 20%;\n  animation-name: hr-animation;\n  animation-duration: 2.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFHQTtFQUNFO0lBQ0UsUUFBQTtFQUFGO0VBRUE7SUFDRSxVQUFBO0VBQUY7RUFFQTtJQUNFLFFBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxVQUFBO0VBREY7RUFHQTtJQUNFLFVBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxXQUFBO0VBRkY7RUFJQTtJQUNFLFVBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUlBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0VBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBUEY7O0FBVUE7RUFDRTtJQUNFLDBCQUFBO0VBUEY7RUFTQTtJQUNFLDZCQUFBO0VBUEY7QUFDRjs7QUFzQkE7RUFDRSxrQ0FBQTtBQXBCRjs7QUF1QkE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsWUFBQTtBQXBCRjs7QUF1QkE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBcEJGOztBQXVCQTtFQUNFLGdCQUFBO0FBcEJGOztBQXVCQTtFQUNFLFlBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBcEJGIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZVBob3RvIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjYjE0YzQ4O1xuICBib3JkZXItY29sb3I6ICNkYTRhNDY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6ICNkYTRhNDY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFuaW1hdGlvbjogc2FsdG8tYnRuO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzYWx0by1idG4ge1xuICAwJSB7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICB0b3A6IC0xMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaW50cm8tYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhyLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5cbi5jb250YWludGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGFuZGluZ1NlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA4cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAnNzB2aCc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5tZW51U2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4IDIwZW07XG59XG5cbi5tZW51U2VjdGlvbiAuc2VydmljZUJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjQ0NDQ0NDO1xufVxuXG4ubWVudVNlY3Rpb24gLnNlcnZpY2VCb3ggLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgLy8gYmFja2dyb3VuZCA6IHZhcigtLWkpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcbn1cblxuLm1lbnVTZWN0aW9uIC5zZXJ2aWNlQm94OmhvdmVyIC5pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XG59XG5cbi5tZW51U2VjdGlvbiAuc2VydmljZUJveCAuaWNvbiAuZWFydGgge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9lYXJ0aC5qcGVnXCIpIDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEuNXB4ICNmZGYyOWUsIGluc2V0IDhweCAwcHggMjBweCAjMDAwO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEwcyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwcHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAwcHg7XG4gIH1cbn1cblxuLy8gLm1lbnVTZWN0aW9uIC5zZXJ2aWNlQm94OmhvdmVyIC5pY29uIC5lYXJ0aCB7XG4vLyAgIHdpZHRoOiA4MHB4O1xuLy8gICBoZWlnaHQ6IDgwcHg7XG4vLyAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2VhcnRoLmpwZ1wiKTtcbi8vICAgdG9wOiA1MCU7XG4vLyAgIGxlZnQ6IDUwJTtcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH1cblxuLmFib3V0LXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpYW5yZWQpO1xufVxuXG4udGltZWxpbmUtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbmgxIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW50cm9kdWN0aW9uQ29udGVpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbmltYXRpb24tbmFtZTogaW50cm8tYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaW50cm9kdWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaHIge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNFREVERUQ7XG4gIGNvbG9yOiAjRURFREVEO1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMjAlO1xuICBhbmltYXRpb24tbmFtZTogaHItYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XG59Il19 */"] });


/***/ }),

/***/ 3637:
/*!***************************************************!*\
  !*** ./src/app/modules/landing/landing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingModule": () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 1321);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 7466);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-routing.module */ 613);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/header/header.component */ 6290);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ 7912);
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/timeline/timeline.component */ 235);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/components.module */ 5626);
/* harmony import */ var _shared_components_timeline_item_timeline_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/timeline-item/timeline-item.component */ 1590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);









class LandingModule {
}
LandingModule.ɵfac = function LandingModule_Factory(t) { return new (t || LandingModule)(); };
LandingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__.LandingRoutingModule,
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
        _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__.TimelineComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__.LandingRoutingModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule], exports: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_components_timeline_item_timeline_item_component__WEBPACK_IMPORTED_MODULE_6__.TimelineItemComponent] }); })();


/***/ }),

/***/ 7038:
/*!*******************************************!*\
  !*** ./src/app/services/mock-timeline.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA": () => (/* binding */ DATA)
/* harmony export */ });
const DATA = [
    {
        year: 2019,
        description: 'Mi primer empleo como Desarrollador de Software en mi querida Sofka Technologies.',
        pos: 'up',
    },
    {
        year: 2019,
        description: 'Tuve la oportunidad de desempeñarme como Consultor de Desarrollo en el cliente SisteCrédito.',
        duration: '2 meses',
        pos: 'down',
        tags: ['kotlin'],
    },
    {
        year: 2019,
        description: 'Participé en la construcción de un proyecto en Protección encargado de validar la identidad de sus asesores para procesos internos.',
        duration: '3 meses',
        pos: 'up',
        tags: ['java', 'react'],
    },
    // {
    //   year: 2020,
    //   description:
    //     'Trabajé en el desarrollo de la plataforma CrediNet de SisteCrédito como Desarrollador Front-End.',
    //   duration: '4 meses',
    //   pos: 'down',
    //   tags: ['angular'],
    // },
    // {
    //   year: 2020,
    //   description:
    //     'Apoyé el desarrollo de la plataforma de Planes de Trabajo de SURA.',
    //   duration: '1 año y  3meses',
    //   pos: 'up',
    //   tags: ['angular', 'redux', 'ngrx'],
    // },
    // {
    //   year: 2021,
    //   description:
    //     'Actualmente me desempeño como Consultor de Desarrollo para el Banco General de Panamá, asignado al proyecto móvil.',
    //   pos: 'down',
    //   tags: ['ionic', 'angular'],
    // },
];


/***/ }),

/***/ 7701:
/*!**********************************************!*\
  !*** ./src/app/services/timeline.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineService": () => (/* binding */ TimelineService)
/* harmony export */ });
/* harmony import */ var _mock_timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-timeline */ 7038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class TimelineService {
    getTimelineData() {
        console.log('Invoked');
        return _mock_timeline__WEBPACK_IMPORTED_MODULE_0__.DATA;
    }
}
TimelineService.ɵfac = function TimelineService_Factory(t) { return new (t || TimelineService)(); };
TimelineService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TimelineService, factory: TimelineService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1321);
/* harmony import */ var _timeline_item_timeline_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline-item/timeline-item.component */ 1590);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _timeline_item_timeline_item_component__WEBPACK_IMPORTED_MODULE_0__.TimelineItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _timeline_item_timeline_item_component__WEBPACK_IMPORTED_MODULE_0__.TimelineItemComponent] }); })();


/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const scrolled = window.scrollY;
            if (scrolled === 0) {
                header === null || header === void 0 ? void 0 : header.classList.toggle('header-scrolling', false);
            }
            else {
                header === null || header === void 0 ? void 0 : header.classList.toggle('header-scrolling', true);
            }
        });
    }
    collapseItems() {
        const itemB = document.getElementById('item-flex-2');
        const itemC = document.getElementById('item-flex-3');
        const itemD = document.getElementById('item-flex-4');
        const itemE = document.getElementById('item-flex-5');
        itemB === null || itemB === void 0 ? void 0 : itemB.classList.toggle('item-b-collapse', true);
        itemC === null || itemC === void 0 ? void 0 : itemC.classList.toggle('item-c-collapse', true);
        itemD === null || itemD === void 0 ? void 0 : itemD.classList.toggle('item-d-collapse', true);
        itemE === null || itemE === void 0 ? void 0 : itemE.classList.toggle('item-e-collapse', true);
    }
    regroupItems() {
        const itemB = document.getElementById('item-flex-2');
        const itemC = document.getElementById('item-flex-3');
        const itemD = document.getElementById('item-flex-4');
        const itemE = document.getElementById('item-flex-5');
        itemB === null || itemB === void 0 ? void 0 : itemB.classList.toggle('item-b-collapse', false);
        itemC === null || itemC === void 0 ? void 0 : itemC.classList.toggle('item-c-collapse', false);
        itemD === null || itemD === void 0 ? void 0 : itemD.classList.toggle('item-d-collapse', false);
        itemE === null || itemE === void 0 ? void 0 : itemE.classList.toggle('item-e-collapse', false);
    }
    onClick(id) {
        console.log('Click to: ' + id);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [["id", "header", 1, "navbar"], [1, "header-wrapper"], ["id", "header-flex", 1, "header-flex", 3, "mouseenter", "mouseleave"], ["id", "item-flex-1", "src", "/assets/icons/fire-icon.svg", "width", "32", "height", "32", 1, "item-flex-1", 3, "click"], ["id", "item-flex-2", "src", "/assets/icons/person-lines-fill.svg", "width", "32", "height", "32", 1, "item-flex-2", 3, "click"], ["id", "item-flex-3", "src", "/assets/icons/droplet-fill.svg", "width", "32", "height", "32", 1, "item-flex-3", 3, "click"], ["id", "item-flex-4", "src", "/assets/icons/facebook.svg", "width", "32", "height", "32", 1, "item-flex-4", 3, "click"], ["id", "item-flex-5", "src", "/assets/icons/gear-fill.svg", "width", "32", "height", "32", 1, "item-flex-5", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderComponent_Template_div_mouseenter_2_listener() { return ctx.collapseItems(); })("mouseleave", function HeaderComponent_Template_div_mouseleave_2_listener() { return ctx.regroupItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_4_listener() { return ctx.onClick("item-flex-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_6_listener() { return ctx.onClick("item-flex-2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_7_listener() { return ctx.onClick("item-flex-3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_8_listener() { return ctx.onClick("item-flex-4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_9_listener() { return ctx.onClick("item-flex-5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  height: var(--header-height);\n  transition: all 0.2s;\n  padding: 0 5rem;\n}\n\n.header-wrapper[_ngcontent-%COMP%] {\n  min-width: 25%;\n  min-height: 40px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.header-flex[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  transition: width 1s ease-out;\n  display: flex;\n}\n\n.header-flex[_ngcontent-%COMP%]:hover {\n  width: 100%;\n}\n\ni[_ngcontent-%COMP%] {\n  z-index: 199;\n}\n\n.item-flex-1[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  cursor: pointer;\n}\n\n.item-flex-2[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: right 0.2s, left 0.2s, opacity 0.2s;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  cursor: pointer;\n}\n\n.item-flex-3[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: right 0.2s, left 0.2s, opacity 0.2s;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  cursor: pointer;\n}\n\n.item-flex-4[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: right 0.2s, left 0.2s, opacity 0.2s;\n  color: white;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  cursor: pointer;\n}\n\n.item-flex-5[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: right 0.2s, left 0.2s, opacity 0.2s;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  cursor: pointer;\n}\n\n.bg-hd[_ngcontent-%COMP%] {\n  background: red;\n}\n\n.item-b-collapse[_ngcontent-%COMP%] {\n  right: 95%;\n  left: -5%;\n  opacity: 1;\n}\n\n.item-c-collapse[_ngcontent-%COMP%] {\n  left: 90%;\n  opacity: 1;\n}\n\n.item-d-collapse[_ngcontent-%COMP%] {\n  right: 50%;\n  opacity: 1;\n}\n\n.item-e-collapse[_ngcontent-%COMP%] {\n  left: 50%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtBQUNKOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQWFBO0VBVEUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFGOztBQU9BO0VBQ0UsVUFBQTtFQUNBLCtDQUFBO0VBZkEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVlGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLCtDQUFBO0VBckJBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF3QkY7O0FBTEE7RUFDRSxVQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBNUJBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFxQ0Y7O0FBWEE7RUFDRSxVQUFBO0VBQ0EsK0NBQUE7RUFsQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWlERjs7QUFqQkE7RUFDRSxlQUFBO0FBb0JGOztBQWpCQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQW9CRjs7QUFqQkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQW9CRjs7QUFqQkE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQW9CRjs7QUFqQkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQW9CRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBwYWRkaW5nOiAwIDVyZW07XG59XG5cbi5oZWFkZXItd3JhcHBlciB7XG4gIG1pbi13aWR0aDogMjUlO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaGVhZGVyLWZsZXgge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLW91dDtcbiAgZGlzcGxheTogZmxleDtcblxuICAmOmhvdmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5pIHtcbiAgei1pbmRleDogMTk5O1xufVxuXG5AbWl4aW4gaXRlbS1mbGV4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtLWZsZXgtMSB7XG4gIEBpbmNsdWRlIGl0ZW0tZmxleCgpO1xufVxuXG4uaXRlbS1mbGV4LTIge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjJzLCBsZWZ0IDAuMnMsIG9wYWNpdHkgMC4ycztcbiAgQGluY2x1ZGUgaXRlbS1mbGV4KCk7XG59XG5cbi5pdGVtLWZsZXgtMyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuMnMsIGxlZnQgMC4ycywgb3BhY2l0eSAwLjJzO1xuICBAaW5jbHVkZSBpdGVtLWZsZXgoKTtcbn1cblxuLml0ZW0tZmxleC00IHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC4ycywgbGVmdCAwLjJzLCBvcGFjaXR5IDAuMnM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgQGluY2x1ZGUgaXRlbS1mbGV4KCk7XG59XG5cbi5pdGVtLWZsZXgtNSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuMnMsIGxlZnQgMC4ycywgb3BhY2l0eSAwLjJzO1xuICBAaW5jbHVkZSBpdGVtLWZsZXgoKTtcbn1cblxuLmJnLWhkIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uaXRlbS1iLWNvbGxhcHNlIHtcbiAgcmlnaHQ6IDk1JTtcbiAgbGVmdDogLTUlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaXRlbS1jLWNvbGxhcHNlIHtcbiAgbGVmdDogOTAlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaXRlbS1kLWNvbGxhcHNlIHtcbiAgcmlnaHQ6IDUwJTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLml0ZW0tZS1jb2xsYXBzZSB7XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"] });


/***/ }),

/***/ 1590:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/timeline-item/timeline-item.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineItemComponent": () => (/* binding */ TimelineItemComponent),
/* harmony export */   "Skills": () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 1321);


function TimelineItemComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chip_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.skillsWithColors[chip_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, chip_r1));
} }
class TimelineItemComponent {
    constructor() {
        this.skillsWithColors = {
            'kotlin': 'green',
            'java': 'var(--indianred)',
            'react': 'var(--lightskyblue)',
            'ngrx': 'var(--darkorchid)',
            'redux': 'var(--slateblue)',
            'angular': 'var(--crimson)',
            'ionic': 'var(--dodgerblue)'
        };
        this.data = null;
    }
}
TimelineItemComponent.ɵfac = function TimelineItemComponent_Factory(t) { return new (t || TimelineItemComponent)(); };
TimelineItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineItemComponent, selectors: [["app-timeline-item"]], inputs: { data: "data" }, decls: 7, vars: 4, consts: [[1, "row", "container", 3, "ngClass"], [1, "col-sm", "content"], ["class", "badge", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "badge"]], template: function TimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimelineItemComponent_span_4_Template, 3, 5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data ? ctx.data.pos : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.description, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe], styles: [".container[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n  background-color: inherit;\n  position: absolute;\n  max-width: 600px;\n  min-width: 500px;\n}\n\n.container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  \n  border: 4px solid #ff9f55;\n  \n  border-radius: 50%;\n  \n  position: absolute;\n  background-color: beige;\n  right: 14.3%;\n  bottom: -28%;\n  z-index: 1;\n}\n\n.up[_ngcontent-%COMP%] {\n  top: 20%;\n}\n\n.down[_ngcontent-%COMP%] {\n  bottom: 10%;\n}\n\n.up[_ngcontent-%COMP%]::before {\n  content: \" \";\n  height: 20px;\n  \n  width: 20px;\n  z-index: 1;\n  \n  border: medium solid var(--bg-timeline-item);\n  border-width: 10px 10px 0px 10px;\n  border-color: var(--bg-timeline-item) transparent transparent transparent;\n  position: absolute;\n  bottom: -10px;\n  right: 15%;\n}\n.down[_ngcontent-%COMP%]::before {\n  content: \" \";\n  height: 0;\n  \n  width: 0;\n  \n  left: 13%;\n  top: -6%;\n  border: medium solid var(--bg-timeline-item);\n  border-width: 10px 10px 10px 10px;\n  border-color: transparent transparent var(--bg-timeline-item) transparent;\n  position: absolute;\n}\n\n.down[_ngcontent-%COMP%]::after {\n  top: -27.5%;\n  right: 83.6%;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  background-color: var(--bg-timeline-item);\n  border-radius: 6px;\n}\n.badge[_ngcontent-%COMP%] {\n  margin: 0 5px 0 0;\n}\np[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBLGdDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDRjtBQUVBLG9DQUFBO0FBQ0E7RUFDRSxRQUFBO0FBQ0Y7QUFFQSxxQ0FBQTtBQUNBO0VBQ0UsV0FBQTtBQUNGO0FBRUEsc0RBQUE7QUFDQTtFQUNFLFlBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EseUVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBQ0o7QUFHQTtFQUNFLFlBQUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHQSxvREFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNFLFlBQUE7QUFBSjtBQUdBLHVCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRiIsImZpbGUiOiJ0aW1lbGluZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICAvKiBsZWZ0OiA1JTsgKi9cbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmOWY1NTtcbiAgLyogdG9wOiAxMHB4OyAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qIHotaW5kZXg6IDE7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG4gIHJpZ2h0OiAxNC4zJTtcbiAgYm90dG9tOiAtMjglO1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4udXAge1xuICB0b3A6IDIwJTtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgcmlnaHQgKi9cbi5kb3duIHtcbiAgYm90dG9tOiAxMCU7XG59XG5cbi8qIEFkZCBhcnJvd3MgdG8gdGhlIGxlZnQgY29udGFpbmVyIChwb2ludGluZyByaWdodCkgKi9cbi51cDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIC8qIHRvcDogMTBweDsgKi9cbiAgICB3aWR0aDogMjBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIC8qIHRvcDogOTQuNyU7ICovXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgdmFyKC0tYmctdGltZWxpbmUtaXRlbSk7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iZy10aW1lbGluZS1pdGVtKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgICByaWdodDogMTUlO1xufVxuXG4vLyAvKiBBZGQgYXJyb3dzIHRvIHRoZSByaWdodCBjb250YWluZXIgKHBvaW50aW5nIGxlZnQpICovXG4uZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIC8qIGJvdHRvbTogMTBweDsgKi9cbiAgICB3aWR0aDogMDtcbiAgICAvKiB6LWluZGV4OiAxOyAqL1xuICAgIGxlZnQ6IDEzJTtcbiAgICB0b3A6IC02JTtcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCB2YXIoLS1iZy10aW1lbGluZS1pdGVtKTtcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1iZy10aW1lbGluZS1pdGVtKSB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi8qIEZpeCB0aGUgY2lyY2xlIGZvciBjb250YWluZXJzIG9uIHRoZSByaWdodCBzaWRlICovXG4uZG93bjo6YWZ0ZXIge1xuICB0b3A6IC0yNy41JTtcbiAgICByaWdodDogODMuNiU7XG59XG5cbi8qIFRoZSBhY3R1YWwgY29udGVudCAqL1xuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXRpbWVsaW5lLWl0ZW0pO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5iYWRnZSB7XG4gIG1hcmdpbjogMCA1cHggMCAwO1xufVxuXG5wIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbn0iXX0= */"] });
var Skills;
(function (Skills) {
    Skills["kotlin"] = "green";
    Skills["java"] = "var(--indianred)";
})(Skills || (Skills = {}));


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 7598
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5142), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map