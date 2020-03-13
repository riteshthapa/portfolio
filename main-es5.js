function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fullpage/angular-fullpage */
    "./node_modules/@fullpage/angular-fullpage/__ivy_ngcc__/fesm2015/fullpage-angular-fullpage.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var _c0 = ["fullpageRef"];

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(renderer) {
        _classCallCheck(this, AppComponent);

        this.renderer = renderer;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100; // this is just an example => for more details on config please visit fullPage.js docs

        this.config = {
          // licenseKey: 'YOUR LICENSE KEY HERE',
          anchors: ['firstPage', 'secondPage'],
          menu: '#menu',
          navigation: true,
          sectionsColor: ['black', 'black']
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getRef",
        value: function getRef(fullPageRef) {
          this.fullpage_api = fullPageRef;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fp_directive = _t.first);
        }
      },
      decls: 73,
      vars: 1,
      consts: [["fullpage", "", "id", "fullpage", 3, "options", "ref"], ["fullpageRef", ""], [1, "section"], [1, "socialmedia"], [1, "list-unstyled", "list-inline", "text-right"], [1, "list-inline-item"], ["href", "https://github.com/riteshthapa", "target", "_blank", "data-toggle", "tooltip", "title", "Github", 1, "btn-floating", "btn-li", "mx-1"], [1, "fa", "fa-github"], ["href", "https://www.linkedin.com/in/tw7869co/", "target", "_blank", 1, "btn-floating", "btn-dribbble", "mx-1"], [1, "fa", "fa-linkedin"], [1, "mask", "rgba-white-light", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], [1, "main-heading"], [1, "main-heading-primary-nep"], [1, "main-heading-secondary-nep"], [1, "hr-light"], [1, "main-heading-primary-eng"], [1, "main-heading-secondary-eng"], [1, "typewriter"], ["id", "scrolldown", 1, "demo"], ["href", "#secondPage"], ["id", "section2"], [1, "p-md-3", "mx-md-5", "text-lg-left"], [1, "col-12"], [1, "font-weight-bold", "mb-3", "text-center"], [1, "font-weight-bold", "mb-3", "lead", "py-3", "text-center"], [1, "row", "d-flex", "justify-content-center"], [1, "col-lg-12"], [1, "row", "text-center"], ["data-toggle", "tooltip", "title", "Java", 1, "col-md-2", "col-8", "mb-4"], [1, "devicon-java-plain", "colored"], ["data-toggle", "tooltip", "title", "JavaScript", 1, "col-md-2", "col-8", "mb-4"], [1, "devicon-javascript-plain", "colored"], ["data-toggle", "tooltip", "title", "Html", 1, "col-md-2", "col-8", "mb-4"], [1, "devicon-html5-plain", "colored"], ["data-toggle", "tooltip", "title", "CSS", 1, "col-md-2", "col-8", "mb-4"], [1, "devicon-css3-plain", "colored"], ["data-toggle", "tooltip", "title", "AngularJS", 1, "col-md-2", "col-8", "mb-4"], [1, "devicon-angularjs-plain", "colored"], ["data-toggle", "tooltip", "title", "php", 1, "col-md-2", "col-8", "mb-4"], [1, "devicon-php-plain", "colored"], ["data-toggle", "tooltip", "title", "Swift", 1, "col-md-2", "col-8", "mb-4"], ["src", "../assets/images/swift.png", "alt", "swift_logo"], ["data-toggle", "tooltip", "title", "MySql", 1, "col-md-2", "col-8", "mb-4"], [1, "devicon-mysql-plain", "colored"], ["data-toggle", "tooltip", "title", "powershell", 1, "col-md-2", "col-2", "mb-4"], ["src", "../assets/images/powershell.png", "alt", "powershell_logo"], ["data-toggle", "tooltip", "title", "Microsoft System Center Configuration Manager", 1, "col-md-2", "col-8", "mb-4"], ["src", "../assets/images/sccm.png", "alt", "system_center_configuration_manager_logo"], ["data-toggle", "tooltip", "title", "Munki", 1, "col-md-2", "col-8", "mb-4"], ["src", "../assets/images/munki.png", "alt", "munki_logo"], ["data-toggle", "tooltip", "title", "Splunk", 1, "col-md-2", "col-8", "mb-4"], ["src", "../assets/images/splunk.png", "alt", "splunk_logo"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ref", function AppComponent_Template_div_ref_0_listener($event) {
            return ctx.getRef($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0930\u093F\u0924\u0947\u0936 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0925\u093E\u092A\u093E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ritesh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Thapa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Developer | Front-End ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "About me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Software Developer & Deployment with 2+ years of hands-on experience supporting, automating, and optimizing mission critical deployments in SCCM (System Center Configuration Manager) and Munki (Managed Software Center for MacOS). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Skills & Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.config);
        }
      },
      directives: [_fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__["ɵa"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__["ɵb"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".section[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 3em;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .demo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n\r\n  bottom: 10%;\r\n  left: 50%;\r\n  display: inline-block;\r\n  color: rgb(255, 255, 255);\r\n}\r\n  \r\n  .demo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  opacity: .5;\r\n}\r\n  \r\n  #scrolldown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding-top: 70px;\r\n}\r\n  \r\n  #scrolldown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin-left: -12px;\r\n  border-left: 1px solid rgb(255, 255, 255);\r\n  border-bottom: 1px solid rgb(255, 255, 255);\r\n  -webkit-transform: rotateZ(-45deg);\r\n  transform: rotateZ(-45deg);\r\n  -webkit-animation: scrolldown 1.5s infinite;\r\n  animation: scrolldown 1.5s infinite;\r\n  box-sizing: border-box;\r\n}\r\n  \r\n  @-webkit-keyframes scrolldown {\r\n  0% {\r\n    -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);\r\n    opacity: 0;\r\n  }\r\n}\r\n  \r\n  @keyframes scrolldown {\r\n  0% {\r\n    -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);\r\n            transform: rotateY(0) rotateZ(-45deg) translate(0, 0);\r\n    opacity: 0;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);\r\n            transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);\r\n    opacity: 0;\r\n  }\r\n}\r\n  \r\n  .section[_ngcontent-%COMP%]{\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#000818), color-stop(#060514), color-stop(#09020f), color-stop(#090109), color-stop(#070004), color-stop(#050002), color-stop(#030001), color-stop(#000000), color-stop(#000000), color-stop(#000000), color-stop(#000000), to(#000000));\r\n  background-image: linear-gradient(to bottom, #000818, #060514, #09020f, #090109, #070004, #050002, #030001, #000000, #000000, #000000, #000000, #000000);\r\n}\r\n  \r\n  #section2[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  color: rgb(192, 83, 255);\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n  \r\n  \r\n  \r\n  .socialmedia[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  font-size: 30px;\r\n  width: 50px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin: 5px 2px;\r\n  border-radius: 50%;\r\n}\r\n  \r\n  .socialmedia[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.7;\r\n}\r\n  \r\n  .fa-linkedin[_ngcontent-%COMP%] {\r\n  background: #007bb5;\r\n  color: white;\r\n}\r\n  \r\n  .fa-github[_ngcontent-%COMP%] {\r\n  background: #7f66d8;\r\n  color: rgb(255, 255, 255);\r\n  \r\n}\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .main-heading[_ngcontent-%COMP%] {\r\n  color: rgb(158, 158, 158);\r\n  text-transform: uppercase;\r\n}\r\n  \r\n  .main-heading-primary-nep[_ngcontent-%COMP%] {\r\n  padding-top: 5%;\r\n  text-align: center;\r\n  font-family: 'Kalam';\r\n  display: block;\r\n  font-size: 5.0rem;\r\n  font-weight: 400;\r\n  letter-spacing: 35px;\r\n  -webkit-animation: moveInLeft 1s ease-out;\r\n          animation: moveInLeft 1s ease-out;\r\n}\r\n  \r\n  .main-heading-secondary-nep[_ngcontent-%COMP%] {\r\n  font-family: 'Kalam';\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  letter-spacing: 46px;\r\n  color: rgb(118, 71, 194);\r\n  -webkit-animation: moveInRight 1s ease-out;\r\n          animation: moveInRight 1s ease-out;\r\n}\r\n  \r\n  .main-heading-primary-eng[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-family: 'Cutive Mono';\r\n  display: block;\r\n  font-size: 4.0rem;\r\n  font-weight: 400;\r\n  letter-spacing: 32px;\r\n  -webkit-animation: moveInLeft 1s ease-out;\r\n          animation: moveInLeft 1s ease-out;\r\n}\r\n  \r\n  .main-heading-secondary-eng[_ngcontent-%COMP%] {\r\n  font-family: 'Cutive Mono';\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  letter-spacing: 50px;\r\n  color: rgb(118, 71, 194);\r\n  -webkit-animation: moveInRight 1s ease-out;\r\n          animation: moveInRight 1s ease-out;\r\n  padding-bottom: 15%;\r\n}\r\n  \r\n  @-webkit-keyframes moveInLeft {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-100px);\r\n            transform: translateX(-100px);\r\n  }\r\n  \r\n  80% {\r\n    -webkit-transform: translateX(10px);\r\n            transform: translateX(10px);\r\n  }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0);\r\n            transform: translate(0);\r\n  }\r\n}\r\n  \r\n  @keyframes moveInLeft {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-100px);\r\n            transform: translateX(-100px);\r\n  }\r\n  \r\n  80% {\r\n    -webkit-transform: translateX(10px);\r\n            transform: translateX(10px);\r\n  }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0);\r\n            transform: translate(0);\r\n  }\r\n}\r\n  \r\n  @-webkit-keyframes moveInRight {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(100px);\r\n            transform: translateX(100px);\r\n  }\r\n  \r\n  80% {\r\n    -webkit-transform: translateX(-10px);\r\n            transform: translateX(-10px);\r\n  }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0);\r\n            transform: translate(0);\r\n  }\r\n}\r\n  \r\n  @keyframes moveInRight {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(100px);\r\n            transform: translateX(100px);\r\n  }\r\n  \r\n  80% {\r\n    -webkit-transform: translateX(-10px);\r\n            transform: translateX(-10px);\r\n  }\r\n  \r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translate(0);\r\n            transform: translate(0);\r\n  }\r\n}\r\n  \r\n  \r\n  \r\n  .typewriter[_ngcontent-%COMP%] {\r\n  background: rgb(0, 0, 0);\r\n  color: rgb(158, 158, 158);\r\n  height: 7vh;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n  \r\n  .typewriter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  width: 21ch;\r\n  font-size: 4.5rem;\r\n  font-weight: 400;\r\n  font-family: 'Cutive Mono';\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  border-right: 4px solid black;\r\n  -webkit-animation: cursor 1s step-start infinite, text 3s steps(21);\r\n          animation: cursor 1s step-start infinite, text 3s steps(21);\r\n}\r\n  \r\n  @-webkit-keyframes cursor {\r\n  0%, 100% {\r\n    border-color: black;\r\n  }\r\n  50% {\r\n    border-color: rgb(158, 158, 158);\r\n  }\r\n}\r\n  \r\n  @keyframes cursor {\r\n  0%, 100% {\r\n    border-color: black;\r\n  }\r\n  50% {\r\n    border-color: rgb(158, 158, 158);\r\n  }\r\n}\r\n  \r\n  @-webkit-keyframes text {\r\n  0% {\r\n    width: 0;\r\n  }\r\n  100% {\r\n    width: 21ch;\r\n  }\r\n}\r\n  \r\n  @keyframes text {\r\n  0% {\r\n    width: 0;\r\n  }\r\n  100% {\r\n    width: 21ch;\r\n  }\r\n}\r\n  \r\n  .hr-light[_ngcontent-%COMP%]{\r\n  border-top: 3px solid rgb(158, 158, 158);\r\n  width: 10%;\r\n  margin-left: 43%;\r\n}\r\n  \r\n  .row[_ngcontent-%COMP%]{\r\n  padding-top: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbURBOztFQXNCQTs7OzsyREFJeUQ7O0VBRTNEO0VBQ0Usa0JBQWtCOztFQUVsQixXQUFXO0VBQ1gsU0FBUztFQUNULHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0VBRUE7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsMkNBQTJDO0VBQzNDLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLG1DQUFtQztFQUNuQyxzQkFBc0I7QUFDeEI7O0VBQ0E7RUFDRTtJQUNFLDZEQUE2RDtJQUM3RCxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUVBQXlFO0lBQ3pFLFVBQVU7RUFDWjtBQUNGOztFQUNBO0VBQ0U7SUFDRSw2REFBcUQ7WUFBckQscURBQXFEO0lBQ3JELFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSx5RUFBaUU7WUFBakUsaUVBQWlFO0lBQ2pFLFVBQVU7RUFDWjtBQUNGOztFQUVBO0VBQ0UsK1NBQXdKO0VBQXhKLHdKQUF3SjtBQUMxSjs7RUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsOEJBQThCO0FBQ2hDOztFQUtBOzs7c0RBR3NEOztFQUV0RDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFFQTtJQUNJLFlBQVk7QUFDaEI7O0VBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztFQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0VBSUE7OztzREFHc0Q7O0VBRXREOzs7OztHQUtHOztFQUVIO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ25DOztFQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUFDcEM7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ25DOztFQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtBQUNGOztFQWRBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtBQUNGOztFQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtBQUNGOztFQWRBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtBQUNGOztFQUVBOzs7O29EQUlvRDs7RUFFcEQ7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsbUVBQTJEO1VBQTNELDJEQUEyRDtBQUM3RDs7RUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7RUFQQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7RUFFQTtFQUNFO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7RUFQQTtFQUNFO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7RUFFQTtFQUNFLHdDQUF3QztFQUN4QyxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qICNtZW51IGxpIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNtZW51IGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gICNtZW51IGxpIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gICNtZW51IGxpLmFjdGl2ZSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAjbWVudSBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgfVxyXG4gIFxyXG4gICNtZW51IGxpIGEsXHJcbiAgI21lbnUgbGkuYWN0aXZlIGEge1xyXG4gICAgcGFkZGluZzogOXB4IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgI21lbnUgbGkuYWN0aXZlIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gICNtZW51IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB6LWluZGV4OiA3MDtcclxuICAgIHdpZHRoOiAyJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgfVxyXG5cclxuXHJcbiAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBcclxuICBTQ1JPTExcclxuICBcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4uZGVtbyBhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGJvdHRvbTogMTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLmRlbW8gYTpob3ZlciB7XHJcbiAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbiNzY3JvbGxkb3duIGF7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuI3Njcm9sbGRvd24gYSBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTQ1ZGVnKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2Nyb2xsZG93biAxLjVzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc2Nyb2xsZG93biAxLjVzIGluZmluaXRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjcm9sbGRvd24ge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpIHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzY3JvbGxkb3duIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWigtNDVkZWcpIHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpIHJvdGF0ZVooLTQ1ZGVnKSB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDA4MTgsICMwNjA1MTQsICMwOTAyMGYsICMwOTAxMDksICMwNzAwMDQsICMwNTAwMDIsICMwMzAwMDEsICMwMDAwMDAsICMwMDAwMDAsICMwMDAwMDAsICMwMDAwMDAsICMwMDAwMDApO1xyXG59IFxyXG5cclxuI3NlY3Rpb24ye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogcmdiKDE5MiwgODMsIDI1NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG59IFxyXG5cclxuXHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbnNvY2lhbCBtZWRpYVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuLnNvY2lhbG1lZGlhIC5mYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDVweCAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc29jaWFsbWVkaWEgLmZhOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmZhLWxpbmtlZGluIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZhLWdpdGh1YiB7XHJcbiAgYmFja2dyb3VuZDogIzdmNjZkODtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIC8qIGZvbnQtc2l6ZTogMTAwJTsgKi9cclxufVxyXG5cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaGVhZGluZ1xyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuLyogLm1haW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODAlO1xyXG4gICAgbGVmdDogNTAlOyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcclxufSAqL1xyXG5cclxuLm1haW4taGVhZGluZyB7XHJcbiAgY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkaW5nLXByaW1hcnktbmVwIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FsYW0nO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogNS4wcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDM1cHg7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlSW5MZWZ0IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkaW5nLXNlY29uZGFyeS1uZXAge1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FsYW0nO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogNDZweDtcclxuICBjb2xvcjogcmdiKDExOCwgNzEsIDE5NCk7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlSW5SaWdodCAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1haW4taGVhZGluZy1wcmltYXJ5LWVuZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogNC4wcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDMycHg7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlSW5MZWZ0IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkaW5nLXNlY29uZGFyeS1lbmcge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogNTBweDtcclxuICBjb2xvcjogcmdiKDExOCwgNzEsIDE5NCk7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlSW5SaWdodCAxcyBlYXNlLW91dDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTUlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVJbkxlZnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVJblJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXHJcblxyXG50eXBlIHdyaXRlIGVmZmVjdFxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi50eXBld3JpdGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XHJcbiAgY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50eXBld3JpdGVyIGgyIHtcclxuICB3aWR0aDogMjFjaDtcclxuICBmb250LXNpemU6IDQuNXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcclxuICBhbmltYXRpb246IGN1cnNvciAxcyBzdGVwLXN0YXJ0IGluZmluaXRlLCB0ZXh0IDNzIHN0ZXBzKDIxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjdXJzb3Ige1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGV4dCB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDIxY2g7XHJcbiAgfVxyXG59XHJcblxyXG4uaHItbGlnaHR7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYigxNTgsIDE1OCwgMTU4KTtcclxuICB3aWR0aDogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        fp_directive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fullpageRef']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fullpage/angular-fullpage */
    "./node_modules/@fullpage/angular-fullpage/__ivy_ngcc__/fesm2015/fullpage-angular-fullpage.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts"); // added module


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__["AngularFullpageModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__["AngularFullpageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__["AngularFullpageModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fullpage/angular-fullpage */
    "./node_modules/@fullpage/angular-fullpage/__ivy_ngcc__/fesm2015/fullpage-angular-fullpage.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 14,
      vars: 0,
      consts: [[1, "footer"], ["href", "https://github.com/riteshthapa", "target", "_blank", "data-toggle", "tooltip", "title", "Github", 1, "btn-floating", "btn-li", "mx-1"], [1, "fa", "fa-github"], ["href", "https://www.linkedin.com/in/tw7869co/", "target", "_blank", "data-toggle", "tooltip", "title", "Linkedin", 1, "btn-floating", "btn-li", "mx-1"], [1, "fa", "fa-linkedin"], [1, "cp-text"], ["href", "mailto:rthapa15@winona.edu", "target", "_top"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "rthapa15@winona.edu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " | (507) 313-4842 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \xA9 Copyright 2020 Ritesh Thapa. All rights reserved. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__["ɵb"]],
      styles: [".cp-text[_ngcontent-%COMP%] { \r\n    color: rgba(255, 255, 255, 0.7); \r\n    font-size: 40%;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n    \r\n    padding-top: 3%;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 5px 2px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n.footer[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]:hover {\r\n      opacity: 0.7;\r\n  }\r\n\r\n.fa-linkedin[_ngcontent-%COMP%] {\r\n    background: #007bb5;\r\n    color: white;\r\n  }\r\n\r\n.fa-github[_ngcontent-%COMP%] {\r\n    background: #7f66d8;\r\n    color: rgb(255, 255, 255);\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFFQTtNQUNJLFlBQVk7RUFDaEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtdGV4dCB7IFxyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTsgXHJcbiAgICBmb250LXNpemU6IDQwJTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxufVxyXG5cclxuXHJcbi5mb290ZXIgLmZhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogNXB4IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlciAuZmE6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYS1saW5rZWRpbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZmEtZ2l0aHViIHtcclxuICAgIGJhY2tncm91bmQ6ICM3ZjY2ZDg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 2,
      vars: 0,
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fullpage/angular-fullpage */
    "./node_modules/@fullpage/angular-fullpage/__ivy_ngcc__/fesm2015/fullpage-angular-fullpage.js");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 17,
      vars: 0,
      consts: [[1, "menu-wrap"], ["type", "checkbox", 1, "toggler"], [1, "hamburger"], [1, "menu"], ["href", "../app/app.component.html/#firstPage"], ["href", "../app/app.component.html/#secondPage"], ["href", "#"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skills & tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__["ɵb"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\rites\Desktop\angular\portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map