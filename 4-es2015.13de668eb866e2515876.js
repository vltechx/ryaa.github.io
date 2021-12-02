(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/pages/setting/main-setting/main-setting.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/setting/main-setting/main-setting.module.ts ***!
  \*******************************************************************/
/*! exports provided: MainSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSettingPageModule", function() { return MainSettingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_pages_setting_main_setting_main_setting_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/setting/main-setting/main-setting.page */ "./src/app/pages/setting/main-setting/main-setting.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");









const routes = [
    {
        path: '',
        component: _app_pages_setting_main_setting_main_setting_page__WEBPACK_IMPORTED_MODULE_5__["MainSettingPage"]
    }
];
let MainSettingPageModule = /*@__PURE__*/ (() => {
    class MainSettingPageModule {
    }
    MainSettingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainSettingPageModule });
    MainSettingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MainSettingPageModule_Factory(t) { return new (t || MainSettingPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            ]] });
    return MainSettingPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainSettingPageModule, { declarations: [_app_pages_setting_main_setting_main_setting_page__WEBPACK_IMPORTED_MODULE_5__["MainSettingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] });
})();



/***/ }),

/***/ "./src/app/pages/setting/main-setting/main-setting.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/setting/main-setting/main-setting.page.ts ***!
  \*****************************************************************/
/*! exports provided: MainSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSettingPage", function() { return MainSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_pages_password_change_modal_password_change_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/password-change-modal/password-change-modal.page */ "./src/app/pages/password-change-modal/password-change-modal.page.ts");
/* harmony import */ var _models_settings_ColorModeEnum_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/settings/ColorModeEnum.model */ "./src/app/models/settings/ColorModeEnum.model.ts");
/* harmony import */ var _models_settings_map_option_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/settings/map-option.enum */ "./src/app/models/settings/map-option.enum.ts");
/* harmony import */ var _app_pages_biometric_opt_in_biometric_opt_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/biometric-opt-in/biometric-opt-in.page */ "./src/app/pages/biometric-opt-in/biometric-opt-in.page.ts");
/* harmony import */ var _services_biometric_biometric_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/biometric/biometric.service */ "./src/app/services/biometric/biometric.service.ts");
/* harmony import */ var _services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/mobile-configuration-service/mobile-context.service */ "./src/app/services/mobile-configuration-service/mobile-context.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/settings-providers/settings.service */ "./src/app/services/settings-providers/settings.service.ts");
/* harmony import */ var _services_language_service_language_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/language-service/language.service */ "./src/app/services/language-service/language.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_connection_status_service_connection_status_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/connection-status-service/connection-status.service */ "./src/app/services/connection-status-service/connection-status.service.ts");
/* harmony import */ var _services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/mbls-analytics-service/MblsAnalyticsService */ "./src/app/services/mbls-analytics-service/MblsAnalyticsService.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_storage_service_storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/storage-service/storage.service */ "./src/app/services/storage-service/storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
























const _c0 = function () { return ["fas", "language"]; };
function MainSettingPage_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_ion_item_3_Template_ion_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.languageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-select-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fran\u00E7ais");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-select-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "pages.settings.languages-label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.selectedLanguage);
    }
}
const _c1 = function () { return ["fas", "fingerprint"]; };
function MainSettingPage_ion_item_4_fa_icon_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 3);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
    }
}
const _c2 = function () { return ["fas", "grin"]; };
function MainSettingPage_ion_item_4_fa_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 3);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
    }
}
const _c3 = function () { return ["fas", "keyboard"]; };
function MainSettingPage_ion_item_4_fa_icon_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 3);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
    }
}
function MainSettingPage_ion_item_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainSettingPage_ion_item_4_fa_icon_1_Template, 1, 2, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainSettingPage_ion_item_4_fa_icon_2_Template, 1, 2, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainSettingPage_ion_item_4_fa_icon_3_Template, 1, 2, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_ion_item_4_Template_ion_toggle_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.biometricAuth = $event; })("ngModelChange", function MainSettingPage_ion_item_4_Template_ion_toggle_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.biometricOptIn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.biometricAuthenticationMethod === ctx_r1.biometricMethodEnum.FINGERPRINT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.biometricAuthenticationMethod === ctx_r1.biometricMethodEnum.FACE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.biometricAuthenticationMethod === ctx_r1.biometricMethodEnum.COMMON);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "pages.settings.biometric"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "pages.settings.biometric." + ctx_r1.biometricAuthenticationMethod), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.biometricAuth);
    }
}
function MainSettingPage_ion_select_option_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.appleMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "pages.settings.apple_maps"));
    }
}
const _c4 = function () { return ["fas", "building"]; };
function MainSettingPage_ion_item_group_84_ng_container_3_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainSettingPage_ion_item_group_84_ng_container_3_ion_item_1_Template_fa_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const provider_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.openMap(provider_r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-toggle", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_ion_item_group_84_ng_container_3_ion_item_1_Template_ion_toggle_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const provider_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return provider_r13.selected = $event; })("ngModelChange", function MainSettingPage_ion_item_group_84_ng_container_3_ion_item_1_Template_ion_toggle_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r20.providerChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const provider_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](provider_r13.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", provider_r13.selected)("disabled", !ctx_r14.isConnected || !provider_r13.enabled);
    }
}
function MainSettingPage_ion_item_group_84_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainSettingPage_ion_item_group_84_ng_container_3_ion_item_1_Template, 5, 5, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const provider_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", provider_r13.visible);
    }
}
function MainSettingPage_ion_item_group_84_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainSettingPage_ion_item_group_84_ng_container_3_Template, 2, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.selectedProviders);
    }
}
const _c5 = function () { return ["fas", "crosshairs"]; };
const _c6 = function () { return ["fas", "map"]; };
const _c7 = function () { return ["fas", "map-marker"]; };
const _c8 = function () { return ["fas", "mobile"]; };
const _c9 = function () { return ["fal", "moon"]; };
const _c10 = function () { return ["far", "circle"]; };
const _c11 = function () { return ["fas", "user-clock"]; };
const _c12 = function () { return ["fal", "mobile"]; };
const _c13 = function () { return ["fas", "lock"]; };
const _c14 = function () { return ["fas", "chevron-right"]; };
const CONFIG = {
    GA: {
        PAGE_NAME: 'MainSettingPage',
        EVENT: {
            'GEOTRACKING-CHANGED': {
                NAME: 'geotracking-setting',
                ACTION: 'geotracking-changed'
            },
            'KEEP_SCREEN_ON-CHANGED': {
                NAME: 'keep-screen-on-setting',
                ACTION: 'keep-screen-on-changed'
            },
            'COLOR_MODE-CHANGED': {
                NAME: 'color-mode-setting',
                ACTION: 'color-mode-changed'
            },
            'LANGUAGE-CHANGED': {
                NAME: 'language-setting',
                ACTION: 'language-changed'
            },
            'PROVIDER-CHANGED': {
                NAME: 'provider-setting',
                ACTION: 'provider-changed'
            },
            'SEQUENCE_ON_SELECT-CHANGED': {
                NAME: 'sequence_on_select-setting',
                ACTION: 'sequence_on_select-changed'
            },
            'SHOW_AVERAGE_DELIVERY_MOMENT-CHANGED': {
                NAME: 'show_average_delivery_moment-setting',
                ACTION: 'show_average_delivery_moment-changed'
            },
            'SIGNATURE_LOCKED_ON_LANDSCAPE-CHANGED': {
                NAME: 'signature_locked_on_landscape-setting',
                ACTION: 'signature_locked_on_landscape-changed'
            }
        }
    }
};
let MainSettingPage = /*@__PURE__*/ (() => {
    class MainSettingPage {
        constructor(mobileContextService, platform, settingsManager, languageService, translateService, connectionStatusService, ga, log, mapService, modalCtrl, biometricService, storageService, alertController) {
            this.mobileContextService = mobileContextService;
            this.platform = platform;
            this.settingsManager = settingsManager;
            this.languageService = languageService;
            this.translateService = translateService;
            this.connectionStatusService = connectionStatusService;
            this.ga = ga;
            this.log = log;
            this.mapService = mapService;
            this.modalCtrl = modalCtrl;
            this.biometricService = biometricService;
            this.storageService = storageService;
            this.alertController = alertController;
            this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.selectedProviders = [];
            this.geotracking = false;
            this.biometricAuth = false;
            this.keepScreenOn = false;
            this.sequenceOnSelect = true;
            this.showAverageDeliveryMoment = false;
            this.employeeControlsSubscriptions = true;
            this.signatureLockedOnLandscape = true;
            this.colorModeAuto = _models_settings_ColorModeEnum_model__WEBPACK_IMPORTED_MODULE_5__["ColorModeEnum"].AUTO;
            this.colorModeLight = _models_settings_ColorModeEnum_model__WEBPACK_IMPORTED_MODULE_5__["ColorModeEnum"].LIGHT;
            this.colorModeDark = _models_settings_ColorModeEnum_model__WEBPACK_IMPORTED_MODULE_5__["ColorModeEnum"].DARK;
            this.googleMap = _models_settings_map_option_enum__WEBPACK_IMPORTED_MODULE_6__["MapOptionEnum"].GOOGLE;
            this.appleMap = _models_settings_map_option_enum__WEBPACK_IMPORTED_MODULE_6__["MapOptionEnum"].APPLE;
            this.wazeMap = _models_settings_map_option_enum__WEBPACK_IMPORTED_MODULE_6__["MapOptionEnum"].WAZE;
            this.searchByAddressAndCoords = _models_settings_map_option_enum__WEBPACK_IMPORTED_MODULE_6__["MapSearchOptionEnum"].ADDRESS_AND_COORDINATES;
            this.searchByAddress = _models_settings_map_option_enum__WEBPACK_IMPORTED_MODULE_6__["MapSearchOptionEnum"].ADDRESS;
            this.searchByCoords = _models_settings_map_option_enum__WEBPACK_IMPORTED_MODULE_6__["MapSearchOptionEnum"].COORDINATES;
            this.isUsingBiometricAuthentication = false;
            this.biometricMethodEnum = _services_biometric_biometric_service__WEBPACK_IMPORTED_MODULE_8__["BIOMETRIC_TYPES"];
            this.userLocaleLang = this.translateService.getBrowserCultureLang();
            this.isIosPlatform = this.platform.is('ios');
            this.isCordova = this.platform.is('cordova');
        }
        ionViewWillEnter() {
            this.mobileContextService.userSettingsObservable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
                .subscribe(userSettings => {
                if (userSettings) {
                    this.geotracking = userSettings.geotrackingEnabled;
                    this.initialLanguage = userSettings.language;
                    this.selectedLanguage = userSettings.language;
                    this.keepScreenOn = userSettings.keepScreenOn;
                    this.selectedProviders = userSettings.selectedProviders;
                    this.sequenceOnSelect = userSettings.sequenceOnSelect;
                    this.showAverageDeliveryMoment = userSettings.showAverageDeliveryMoment;
                    this.signatureLockedOnLandscape = userSettings.signatureLockedOnLandscape;
                    this.colorMode = userSettings.colorMode;
                    this.mapOption = userSettings.mapOption;
                    this.mapQueryOption = userSettings.mapQueryOption;
                    this.selectedProviders
                        .sort((a, b) => {
                        if (a.name && b.name) {
                            return a.name.localeCompare(b.name);
                        }
                        else if (a.name) {
                            return 1;
                        }
                        else if (b.name) {
                            return -1;
                        }
                        else {
                            return a.id - b.id;
                        }
                    });
                }
                else {
                    this.initialLanguage = this.translateService.getDefaultLang();
                    this.selectedLanguage = this.translateService.getDefaultLang();
                }
            });
            this.mobileContextService.haulerObservable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
                .subscribe(hauler => {
                this.employeeControlsSubscriptions = hauler && hauler.employeeControlsSubscriptions;
            });
            this.connectionStatusService.connectionStatusSubscription
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
                .subscribe(status => {
                this.isConnected = status.isNetworkConnectedForUser;
            });
            if (this.isCordova) {
                this.storageService.loadString(_services_biometric_biometric_service__WEBPACK_IMPORTED_MODULE_8__["BIOMETRIC_CONFIG"].STORAGE_USE_BIOMETRIC_AUTH_KEY, false)
                    .then(result => {
                    if (result && result === 'true') {
                        this.isUsingBiometricAuthentication = true;
                        this.biometricAuth = true;
                    }
                }, reason => {
                    this.isUsingBiometricAuthentication = false;
                    this.biometricAuth = false;
                });
                this.biometricService.isAvailable()
                    .then(result => {
                    if (result === _services_biometric_biometric_service__WEBPACK_IMPORTED_MODULE_8__["BIOMETRIC_TYPES"].FINGERPRINT || result === _services_biometric_biometric_service__WEBPACK_IMPORTED_MODULE_8__["BIOMETRIC_TYPES"].FACE || result === _services_biometric_biometric_service__WEBPACK_IMPORTED_MODULE_8__["BIOMETRIC_TYPES"].COMMON) {
                        this.biometricAuthenticationAvailable = true;
                        this.biometricAuthenticationMethod = result;
                    }
                    else {
                        this.biometricAuthenticationAvailable = false;
                        this.biometricAuthenticationMethod = null;
                    }
                }, error => {
                    this.biometricAuthenticationAvailable = false;
                    this.biometricAuthenticationMethod = null;
                });
            }
        }
        ionViewDidEnter() {
            this.ga.trackView(CONFIG.GA.PAGE_NAME).catch(error => this.log.info(`Unable to track view ${CONFIG.GA.PAGE_NAME} with GA`, error));
        }
        get withProviderSelection() {
            if (!this.selectedProviders) {
                return false;
            }
            return this.selectedProviders.find(provider => provider.visible) !== undefined;
        }
        ionViewDidLeave() {
            this.unsubscribe.next();
        }
        ionViewWillUnload() {
            this.unsubscribe.complete();
        }
        geotrackingChange(selectedValue) {
            this.geotracking = selectedValue;
            this.ga.trackEvent(CONFIG.GA.EVENT['GEOTRACKING-CHANGED'].NAME, CONFIG.GA.EVENT['GEOTRACKING-CHANGED'].ACTION, 'GeotrackingSetting').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['GEOTRACKING-CHANGED']} with GA`, error));
            this.settingsManager.setGeotrackingEnabled(this.geotracking);
        }
        keepScreenOnChange(selectedValue) {
            this.keepScreenOn = selectedValue;
            this.ga.trackEvent(CONFIG.GA.EVENT['KEEP_SCREEN_ON-CHANGED'].NAME, CONFIG.GA.EVENT['KEEP_SCREEN_ON-CHANGED'].ACTION, 'KeepScreenOnSetting').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['KEEP_SCREEN_ON-CHANGED']} with GA`, error));
            this.settingsManager.setKeepKeepScreenOn(this.keepScreenOn);
        }
        languageChange(selectedValue) {
            this.selectedLanguage = selectedValue;
            this.languageService.applyLanguage(this.selectedLanguage)
                .then(() => {
                this.ga.trackEvent(CONFIG.GA.EVENT['LANGUAGE-CHANGED'].NAME, CONFIG.GA.EVENT['LANGUAGE-CHANGED'].ACTION, 'LanguageSetting').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['LANGUAGE-CHANGED']} with GA`, error));
            });
        }
        providerChange() {
            this.ga.trackEvent(CONFIG.GA.EVENT['PROVIDER-CHANGED'].NAME, CONFIG.GA.EVENT['PROVIDER-CHANGED'].ACTION, 'ProviderSetting').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['PROVIDER-CHANGED']} with GA`, error));
            this.settingsManager.setSelectedProviders(this.selectedProviders);
        }
        sequenceOnSelectChange(selectedValue) {
            this.sequenceOnSelect = selectedValue;
            this.ga.trackEvent(CONFIG.GA.EVENT['SEQUENCE_ON_SELECT-CHANGED'].NAME, CONFIG.GA.EVENT['SEQUENCE_ON_SELECT-CHANGED'].ACTION, 'SequenceOnSelectSetting').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['SEQUENCE_ON_SELECT-CHANGED']} with GA`, error));
            this.settingsManager.setSequenceOnSelect(this.sequenceOnSelect);
        }
        showAverageDeliveryMomentChange(selectedValue) {
            this.showAverageDeliveryMoment = selectedValue;
            this.ga.trackEvent(CONFIG.GA.EVENT['SHOW_AVERAGE_DELIVERY_MOMENT-CHANGED'].NAME, CONFIG.GA.EVENT['SHOW_AVERAGE_DELIVERY_MOMENT-CHANGED'].ACTION, 'ShowAverageDeliveryMomentSetting').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['SHOW_AVERAGE_DELIVERY_MOMENT-CHANGED']} with GA`, error));
            this.settingsManager.setShowAverageDeliveryMoment(this.showAverageDeliveryMoment);
        }
        signatureLockedOnLandscapeChange(selectedValue) {
            this.signatureLockedOnLandscape = selectedValue;
            this.ga.trackEvent(CONFIG.GA.EVENT['SIGNATURE_LOCKED_ON_LANDSCAPE-CHANGED'].NAME, CONFIG.GA.EVENT['SIGNATURE_LOCKED_ON_LANDSCAPE-CHANGED'].ACTION, 'SignatureLockedOnLandscapeSetting').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['SIGNATURE_LOCKED_ON_LANDSCAPE-CHANGED']} with GA`, error));
            this.settingsManager.setSignatureLockedOnLandscape(this.signatureLockedOnLandscape);
        }
        openMap(selectedProvider) {
            this.mapService.openMap(null, selectedProvider.position, selectedProvider.address.addressOneLine, selectedProvider.name);
        }
        openPasswordChangeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const passwordChangeModal = yield this.modalCtrl.create({
                    component: _app_pages_password_change_modal_password_change_modal_page__WEBPACK_IMPORTED_MODULE_4__["PasswordChangeModalPage"]
                });
                yield passwordChangeModal.present();
            });
        }
        colorModeChange(selectedValue) {
            this.colorMode = selectedValue;
            this.ga.trackEvent(CONFIG.GA.EVENT['COLOR_MODE-CHANGED'].NAME, CONFIG.GA.EVENT['COLOR_MODE-CHANGED'].ACTION, 'ColorModeSetting').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['COLOR_MODE-CHANGED']} with GA`, error));
            this.settingsManager.setColorMode(this.colorMode);
        }
        mapOptionChanged(selectedValue) {
            console.log('mapOptionChanged', selectedValue);
            this.mapOption = selectedValue;
            this.settingsManager.setMapOption(this.mapOption);
        }
        mapQueryOptionChange(selectedValue) {
            console.log('mapQueryOptionChange', selectedValue);
            this.mapQueryOption = selectedValue;
            this.settingsManager.setMapQueryOption(this.mapQueryOption);
        }
        biometricOptIn(value) {
            if (value) {
                this.modalCtrl.create({
                    component: _app_pages_biometric_opt_in_biometric_opt_in_page__WEBPACK_IMPORTED_MODULE_7__["BiometricOptInPage"],
                    componentProps: {
                        availableMethod: this.biometricAuthenticationMethod
                    }
                }).then(modal => {
                    modal.onDidDismiss()
                        .then((result) => {
                        this.biometricAuth = result.data.success;
                    });
                    modal.present();
                });
            }
            else {
                this.alertController
                    .create({
                    header: this.translateService.instant('actions.seen'),
                    message: this.translateService.instant('pages.settings.biometric.remove'),
                    buttons: [
                        {
                            text: this.translateService.instant('actions.cancel'),
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                this.biometricAuth = true;
                            }
                        }, {
                            text: this.translateService.instant('actions.continue'),
                            handler: () => {
                                this.storageService.persistString(_services_biometric_biometric_service__WEBPACK_IMPORTED_MODULE_8__["BIOMETRIC_CONFIG"].STORAGE_USE_BIOMETRIC_AUTH_KEY, 'false', false);
                            }
                        }
                    ]
                })
                    .then(alert => {
                    alert.present();
                });
            }
        }
    }
    MainSettingPage.ɵfac = function MainSettingPage_Factory(t) { return new (t || MainSettingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_9__["MobileContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_language_service_language_service__WEBPACK_IMPORTED_MODULE_12__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_connection_status_service_connection_status_service__WEBPACK_IMPORTED_MODULE_14__["ConnectionStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_15__["MblsAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_log_log_service__WEBPACK_IMPORTED_MODULE_16__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_map_map_service__WEBPACK_IMPORTED_MODULE_17__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_biometric_biometric_service__WEBPACK_IMPORTED_MODULE_8__["BiometricService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service_storage_service__WEBPACK_IMPORTED_MODULE_18__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"])); };
    MainSettingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainSettingPage, selectors: [["app-main-setting"]], decls: 94, vars: 92, consts: [[1, "ion-padding"], [4, "ngIf"], [1, "ion-text-wrap"], ["size", "lg", "slot", "start", 3, "icon"], ["slot", "end", 3, "ngModel", "ngModelChange"], ["size", "lg", "slot", "start", 1, "fa-bar-button", 3, "icon"], [3, "value"], [3, "value", 4, "ngIf"], ["interface", "action-sheet", "slot", "end", 3, "ngModel", "ngModelChange"], ["size", "lg", "slot", "start", 1, "styled", 3, "fixedWidth"], [3, "icon"], ["content", "1", "transform", "shrink-4", 1, "number"], ["rotate", "90", "size", "lg", "slot", "start", 3, "icon"], ["translate", "pages.settings.security"], [3, "click"], ["translate", "pages.settings.changeLoginPassword"], ["size", "lg", "slot", "end", 3, "icon"], ["value", "fr"], ["value", "en"], ["size", "lg", "slot", "start", 3, "icon", 4, "ngIf"], ["translate", "pages.settings.providers-label"], [4, "ngFor", "ngForOf"], ["size", "lg", "slot", "start", 3, "icon", "click"], [3, "ngModel", "disabled", "ngModelChange"]], template: function MainSettingPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-group");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainSettingPage_ion_item_3_Template, 10, 6, "ion-item", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainSettingPage_ion_item_4_Template, 9, 10, "ion-item", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-toggle", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_Template_ion_toggle_ngModelChange_14_listener($event) { return ctx.geotrackingChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_Template_ion_select_ngModelChange_20_listener($event) { return ctx.mapOptionChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-select-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MainSettingPage_ion_select_option_24_Template, 3, 4, "ion-select-option", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-select-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "fa-icon", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-select", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_Template_ion_select_ngModelChange_33_listener($event) { return ctx.mapQueryOptionChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-select-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-select-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-select-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "fa-icon", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-toggle", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_Template_ion_toggle_ngModelChange_48_listener($event) { return ctx.keepScreenOnChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "fa-icon", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-select", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_Template_ion_select_ngModelChange_54_listener($event) { return ctx.colorModeChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-select-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-select-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-select-option", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "fa-layers", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "fa-icon", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "fa-layers-text", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-toggle", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_Template_ion_toggle_ngModelChange_71_listener($event) { return ctx.sequenceOnSelectChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "fa-icon", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-toggle", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_Template_ion_toggle_ngModelChange_77_listener($event) { return ctx.showAverageDeliveryMomentChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "fa-icon", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ion-toggle", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainSettingPage_Template_ion_toggle_ngModelChange_83_listener($event) { return ctx.signatureLockedOnLandscapeChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, MainSettingPage_ion_item_group_84_Template, 4, 1, "ion-item-group", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "ion-item-group");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ion-list-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](88);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "ion-item", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainSettingPage_Template_ion_item_click_89_listener() { return ctx.openPasswordChangeModal(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "fa-icon", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "span", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "fa-icon", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userLocaleLang !== "en-US");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.biometricAuthenticationAvailable);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 48, "pages.settings.background-geolocation-disclosure"), " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](82, _c5));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 50, "pages.settings.geotracking"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.geotracking);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](83, _c6));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 52, "pages.settings.map_option"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.mapOption);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.googleMap);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 54, "pages.settings.google_maps"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIosPlatform);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.wazeMap);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 56, "pages.settings.waze_maps"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](84, _c7));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 58, "pages.settings.map_query_option"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.mapQueryOption);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchByAddressAndCoords);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 60, "pages.settings.map_search_by_address_and_coordinates"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchByAddress);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 62, "pages.settings.map_search_by_address"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchByCoords);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 64, "pages.settings.map_search_by_coordinates"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](85, _c8));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 66, "pages.settings.keepScreenOn"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.keepScreenOn);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](86, _c9));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 68, "pages.settings.colorModeOption"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.colorMode);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.colorModeAuto);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 70, "pages.settings.colorMode.auto"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.colorModeLight);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 72, "pages.settings.colorMode.light"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.colorModeDark);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 74, "pages.settings.colorMode.dark"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedWidth", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](87, _c10));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 76, "pages.settings.sequenceOnSelect"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.sequenceOnSelect);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](88, _c11));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 78, "pages.settings.showAverageDeliveryMoment"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.showAverageDeliveryMoment);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](89, _c12));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 80, "pages.settings.signatureLockedOnLandscape"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.signatureLockedOnLandscape);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.withProviderSelection);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](90, _c13));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](91, _c14));
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItemGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FaIconComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonSelectOption"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FaLayersTextComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonListHeader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvbWFpbi1zZXR0aW5nL21haW4tc2V0dGluZy5wYWdlLnNjc3MifQ== */"] });
    return MainSettingPage;
})();



/***/ })

}]);
//# sourceMappingURL=4-es2015.13de668eb866e2515876.js.map