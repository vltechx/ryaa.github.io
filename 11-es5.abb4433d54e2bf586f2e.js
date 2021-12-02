function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
  /***/
  "./src/app/pages/profile/profile-view/profile-view-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/profile/profile-view/profile-view-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ProfileViewPageRoutingModule */

  /***/
  function srcAppPagesProfileProfileViewProfileViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileViewPageRoutingModule", function () {
      return ProfileViewPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_view_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-view.page */
    "./src/app/pages/profile/profile-view/profile-view.page.ts");

    var routes = [{
      path: '',
      component: _profile_view_page__WEBPACK_IMPORTED_MODULE_2__["ProfileViewPage"]
    }];

    var ProfileViewPageRoutingModule = /*@__PURE__*/function () {
      var ProfileViewPageRoutingModule = function ProfileViewPageRoutingModule() {
        _classCallCheck(this, ProfileViewPageRoutingModule);
      };

      ProfileViewPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileViewPageRoutingModule
      });
      ProfileViewPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileViewPageRoutingModule_Factory(t) {
          return new (t || ProfileViewPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return ProfileViewPageRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileViewPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/profile/profile-view/profile-view.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/profile/profile-view/profile-view.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfileViewPageModule */

  /***/
  function srcAppPagesProfileProfileViewProfileViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileViewPageModule", function () {
      return ProfileViewPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_view_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-view-routing.module */
    "./src/app/pages/profile/profile-view/profile-view-routing.module.ts");
    /* harmony import */


    var _profile_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-view.page */
    "./src/app/pages/profile/profile-view/profile-view.page.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ProfileViewPageModule = /*@__PURE__*/function () {
      var ProfileViewPageModule = function ProfileViewPageModule() {
        _classCallCheck(this, ProfileViewPageModule);
      };

      ProfileViewPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileViewPageModule
      });
      ProfileViewPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileViewPageModule_Factory(t) {
          return new (t || ProfileViewPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _profile_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileViewPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]]
      });
      return ProfileViewPageModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileViewPageModule, {
        declarations: [_profile_view_page__WEBPACK_IMPORTED_MODULE_5__["ProfileViewPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _profile_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileViewPageRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=11-es5.abb4433d54e2bf586f2e.js.map