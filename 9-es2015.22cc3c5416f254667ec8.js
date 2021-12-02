(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/app/pages/password-change-modal/password-change-modal-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/password-change-modal/password-change-modal-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PasswordChangeModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeModalPageRoutingModule", function() { return PasswordChangeModalPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _password_change_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-change-modal.page */ "./src/app/pages/password-change-modal/password-change-modal.page.ts");





const routes = [
    {
        path: '',
        component: _password_change_modal_page__WEBPACK_IMPORTED_MODULE_2__["PasswordChangeModalPage"]
    }
];
let PasswordChangeModalPageRoutingModule = /*@__PURE__*/ (() => {
    class PasswordChangeModalPageRoutingModule {
    }
    PasswordChangeModalPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PasswordChangeModalPageRoutingModule });
    PasswordChangeModalPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PasswordChangeModalPageRoutingModule_Factory(t) { return new (t || PasswordChangeModalPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PasswordChangeModalPageRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PasswordChangeModalPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();



/***/ }),

/***/ "./src/app/pages/password-change-modal/password-change-modal.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/password-change-modal/password-change-modal.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PasswordChangeModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeModalPageModule", function() { return PasswordChangeModalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _password_change_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password-change-modal-routing.module */ "./src/app/pages/password-change-modal/password-change-modal-routing.module.ts");
/* harmony import */ var _password_change_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-change-modal.page */ "./src/app/pages/password-change-modal/password-change-modal.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let PasswordChangeModalPageModule = /*@__PURE__*/ (() => {
    class PasswordChangeModalPageModule {
    }
    PasswordChangeModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PasswordChangeModalPageModule });
    PasswordChangeModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PasswordChangeModalPageModule_Factory(t) { return new (t || PasswordChangeModalPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _password_change_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["PasswordChangeModalPageRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ]] });
    return PasswordChangeModalPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PasswordChangeModalPageModule, { declarations: [_password_change_modal_page__WEBPACK_IMPORTED_MODULE_5__["PasswordChangeModalPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _password_change_modal_routing_module__WEBPACK_IMPORTED_MODULE_4__["PasswordChangeModalPageRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] });
})();



/***/ })

}]);
//# sourceMappingURL=9-es2015.22cc3c5416f254667ec8.js.map