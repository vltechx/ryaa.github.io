(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/app/pages/setting/display-setting/display-setting.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/setting/display-setting/display-setting.module.ts ***!
  \*************************************************************************/
/*! exports provided: DisplaySettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaySettingPageModule", function() { return DisplaySettingPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_pages_setting_display_setting_display_setting_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/setting/display-setting/display-setting.page */ "./src/app/pages/setting/display-setting/display-setting.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");









const routes = [
    {
        path: '',
        component: _app_pages_setting_display_setting_display_setting_page__WEBPACK_IMPORTED_MODULE_5__["DisplaySettingPage"]
    }
];
let DisplaySettingPageModule = /*@__PURE__*/ (() => {
    class DisplaySettingPageModule {
    }
    DisplaySettingPageModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: DisplaySettingPageModule });
    DisplaySettingPageModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function DisplaySettingPageModule_Factory(t) { return new (t || DisplaySettingPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            ]] });
    return DisplaySettingPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](DisplaySettingPageModule, { declarations: [_app_pages_setting_display_setting_display_setting_page__WEBPACK_IMPORTED_MODULE_5__["DisplaySettingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] });
})();



/***/ }),

/***/ "./src/app/pages/setting/display-setting/display-setting.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/setting/display-setting/display-setting.page.ts ***!
  \***********************************************************************/
/*! exports provided: DisplaySettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaySettingPage", function() { return DisplaySettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_settings_action_buttons_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/settings/action-buttons.model */ "./src/app/models/settings/action-buttons.model.ts");
/* harmony import */ var _models_settings_signature_pin_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/settings/signature-pin.model */ "./src/app/models/settings/signature-pin.model.ts");
/* harmony import */ var _models_units_and_format_date_format_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/units-and-format/date-format.enum */ "./src/app/models/units-and-format/date-format.enum.ts");
/* harmony import */ var _models_units_and_format_distance_system_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/units-and-format/distance-system.enum */ "./src/app/models/units-and-format/distance-system.enum.ts");
/* harmony import */ var _models_units_and_format_time_format_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/units-and-format/time-format.enum */ "./src/app/models/units-and-format/time-format.enum.ts");
/* harmony import */ var _app_pages_signature_pin_modal_signature_pin_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/signature-pin-modal/signature-pin-modal.page */ "./src/app/pages/signature-pin-modal/signature-pin-modal.page.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/mobile-configuration-service/mobile-context.service */ "./src/app/services/mobile-configuration-service/mobile-context.service.ts");
/* harmony import */ var _services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/settings-providers/settings.service */ "./src/app/services/settings-providers/settings.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");


















const _c0 = function () { return ["fas", "route"]; };
function DisplaySettingPage_ion_item_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "ion-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_ion_item_25_Template_ion_toggle_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r2.optimizationButtonChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.actionButtons.optimization);
    }
}
function DisplaySettingPage_ion_item_46_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function DisplaySettingPage_ion_item_46_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r4.editSignaturePin(ctx_r4.editPin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
}
const _c1 = function () { return ["fas", "th-list"]; };
const _c2 = function () { return ["fas", "check-square"]; };
const _c3 = function () { return ["fas", "map"]; };
const _c4 = function () { return ["fas", "retweet"]; };
const _c5 = function () { return ["fal", "list-alt"]; };
const _c6 = function () { return ["fas", "sort-alpha-down"]; };
const _c7 = function () { return ["fas", "filter"]; };
const _c8 = function () { return ["fas", "lock"]; };
const _c9 = function () { return ["fas", "ruler-combined"]; };
const _c10 = function () { return ["fas", "calendar-day"]; };
const _c11 = function () { return ["fas", "clock"]; };
const _c12 = function () { return ["fas", "building"]; };
let DisplaySettingPage = /*@__PURE__*/ (() => {
    class DisplaySettingPage {
        constructor(mobileContextService, settingsManager, platform, translateService, modalCtrl) {
            this.mobileContextService = mobileContextService;
            this.settingsManager = settingsManager;
            this.platform = platform;
            this.translateService = translateService;
            this.modalCtrl = modalCtrl;
            this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
            this.canDoRouteOptimization = false;
            this.displayType = false;
            this.actionButtons = new _models_settings_action_buttons_model__WEBPACK_IMPORTED_MODULE_2__["ActionButtons"]();
            this.dateFormatDMY = _models_units_and_format_date_format_enum__WEBPACK_IMPORTED_MODULE_4__["DateFormatEnum"].dateDMY;
            this.dateFormatMDY = _models_units_and_format_date_format_enum__WEBPACK_IMPORTED_MODULE_4__["DateFormatEnum"].dateMDY;
            this.dateFormatYMD = _models_units_and_format_date_format_enum__WEBPACK_IMPORTED_MODULE_4__["DateFormatEnum"].dateISO;
            this.hourFormatMilitary = _models_units_and_format_time_format_enum__WEBPACK_IMPORTED_MODULE_6__["TimeFormatEnum"].MILITARY;
            this.hourFormatStandard = _models_units_and_format_time_format_enum__WEBPACK_IMPORTED_MODULE_6__["TimeFormatEnum"].STANDARD;
            this.distanceSI = _models_units_and_format_distance_system_enum__WEBPACK_IMPORTED_MODULE_5__["DistanceSystemEnum"].SI;
            this.distanceIMPERIAL = _models_units_and_format_distance_system_enum__WEBPACK_IMPORTED_MODULE_5__["DistanceSystemEnum"].IMPERIAL;
            this.signaturePinValue = '';
            this.createPin = _models_settings_signature_pin_model__WEBPACK_IMPORTED_MODULE_3__["SignaturePinEnum"].createPin;
            this.editPin = _models_settings_signature_pin_model__WEBPACK_IMPORTED_MODULE_3__["SignaturePinEnum"].editPin;
            this.enterPin = _models_settings_signature_pin_model__WEBPACK_IMPORTED_MODULE_3__["SignaturePinEnum"].enterPin;
            this.displayOrderReferenceOnOrderList = false;
            this.displayProviderFooter = false;
            this.displayDelayCounter = true;
            this.isIosPlatform = this.platform.is('ios');
        }
        ionViewWillEnter() {
            this.mobileContextService.userSettingsObservable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribe))
                .subscribe(userSettings => {
                if (userSettings) {
                    this.canDoRouteOptimization = userSettings.canDoRouteOptimization;
                    this.displayType = userSettings.displayType;
                    this.distanceUnit = userSettings.distanceUnit;
                    this.dateFormat = userSettings.dateFormat;
                    this.hourFormat = userSettings.hourFormat;
                    this.signaturePinActivated = userSettings.signaturePinActivated;
                    this.signaturePinValue = userSettings.signaturePinValue;
                    this.displayProviderFooter = userSettings.displayProviderFooter;
                    this.displayDelayCounter = userSettings.displayDelayCounter;
                    this.displayOrderReferenceOnOrderList = userSettings.displayOrderReferenceOnOrderList;
                    if (!userSettings.buttons) {
                        userSettings.buttons = new _models_settings_action_buttons_model__WEBPACK_IMPORTED_MODULE_2__["ActionButtons"]();
                    }
                    this.actionButtons = userSettings.buttons;
                }
                else {
                    this.actionButtons = new _models_settings_action_buttons_model__WEBPACK_IMPORTED_MODULE_2__["ActionButtons"]();
                }
            });
        }
        ionViewDidLeave() {
            this.unsubscribe.next();
        }
        ionViewWillUnload() {
            this.unsubscribe.complete();
        }
        signaturePinChange(selectedValue) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.signaturePinActivated = selectedValue;
                if (this.signaturePinActivated && this.signaturePinValue === '') {
                    yield this.editSignaturePin(this.createPin);
                }
                else if (!this.signaturePinActivated) {
                    this.settingsManager.signaturePinChanged(this.signaturePinActivated, '');
                }
            });
        }
        editSignaturePin(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const signaturePinModal = yield this.modalCtrl.create({
                    component: _app_pages_signature_pin_modal_signature_pin_modal_page__WEBPACK_IMPORTED_MODULE_7__["SignaturePinModalPage"],
                    componentProps: {
                        type: type,
                        signaturePinValue: this.signaturePinValue
                    }
                });
                yield signaturePinModal.present();
                yield signaturePinModal.onDidDismiss().then(data => {
                    if (data.data) {
                        this.signaturePinActivated = data.data.ok;
                        this.signaturePinValue = data.data.signaturePinValue;
                    }
                    else {
                        this.signaturePinActivated = false;
                        this.signaturePinValue = '';
                    }
                    this.settingsManager.signaturePinChanged(this.signaturePinActivated, this.signaturePinValue);
                });
            });
        }
        displayTypeChange(selectedValue) {
            this.displayType = selectedValue;
            this.settingsManager.setDisplayType(this.displayType);
        }
        multipleSelectionChange(selectedValue) {
            this.actionButtons.multipleSelection = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
        }
        mapButtonChange(selectedValue) {
            this.actionButtons.map = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
        }
        distanceUnitChange(selectedValue) {
            this.distanceUnit = selectedValue;
            this.settingsManager.setDistanceUnit(Number(this.distanceUnit));
        }
        dateFormatChange(selectedValue) {
            this.dateFormat = selectedValue;
            this.settingsManager.setDateFormat(this.dateFormat);
        }
        hourFormatChange(selectedValue) {
            this.hourFormat = selectedValue;
            this.settingsManager.setHourFormat(this.hourFormat);
        }
        reorderingChanged(selectedValue) {
            this.actionButtons.reordering = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
        }
        optimizationButtonChanged(selectedValue) {
            this.actionButtons.optimization = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
        }
        groupingButtonChanged(selectedValue) {
            this.actionButtons.grouping = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
        }
        sortingButtonChanged(selectedValue) {
            this.actionButtons.sorting = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
        }
        filterButtonChanged(selectedValue) {
            this.actionButtons.filter = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
        }
        orderReferenceDisplayChange(selectedValue) {
            this.displayOrderReferenceOnOrderList = selectedValue;
            this.settingsManager.setOrderReferenceDisplay(this.displayOrderReferenceOnOrderList);
        }
        displayProviderFooterSettingChanged(selectedValue) {
            this.displayProviderFooter = selectedValue;
            this.settingsManager.displayProviderFooterSettingChanged(this.displayProviderFooter);
        }
        displayDelayCounterSettingChanged(selectedValue) {
            this.displayDelayCounter = selectedValue;
            this.settingsManager.displayDelayCounterSettingChanged(this.displayDelayCounter);
        }
    }
    DisplaySettingPage.??fac = function DisplaySettingPage_Factory(t) { return new (t || DisplaySettingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_10__["MobileContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"])); };
    DisplaySettingPage.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: DisplaySettingPage, selectors: [["app-display-setting"]], decls: 104, vars: 93, consts: [[1, "ion-padding"], ["size", "lg", "slot", "start", 1, "fa-bar-button", 3, "icon"], [1, "ion-text-wrap"], ["slot", "end", 3, "ngModel", "ngModelChange"], ["translate", "pages.settings.buttons.multipleSelection"], ["translate", "pages.settings.buttons.map"], ["size", "lg", "slot", "start", 3, "icon"], ["translate", "pages.settings.buttons.reordering"], [4, "ngIf"], ["translate", "pages.settings.buttons.grouping"], ["translate", "pages.settings.buttons.sorting"], ["translate", "pages.settings.buttons.filter"], ["translate", "pages.settings.buttons.signaturePin"], [3, "value"], ["translate", "pages.settings.buttons.optimization"], ["slot", "end", "fill", "outline", 3, "click"], ["translate", "pages.settings.buttons.changePin"]], template: function DisplaySettingPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-content", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ion-list");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "ion-item-group");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](7, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_8_listener($event) { return ctx.displayTypeChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "span", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_13_listener($event) { return ctx.multipleSelectionChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "ion-item-group");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](18, "span", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_19_listener($event) { return ctx.mapButtonChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "fa-icon", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_24_listener($event) { return ctx.reorderingChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](25, DisplaySettingPage_ion_item_25_Template, 5, 3, "ion-item", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_30_listener($event) { return ctx.groupingButtonChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "fa-icon", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "span", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_35_listener($event) { return ctx.sortingButtonChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "span", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_40_listener($event) { return ctx.filterButtonChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_45_listener($event) { return ctx.signaturePinChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](46, DisplaySettingPage_ion_item_46_Template, 3, 0, "ion-item", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](51, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "ion-select", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_select_ngModelChange_52_listener($event) { return ctx.distanceUnitChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "ion-select-option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](55, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "ion-select-option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](58, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](60, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](63, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "ion-select", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_select_ngModelChange_64_listener($event) { return ctx.dateFormatChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "ion-select-option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](67, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "ion-select-option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](70, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "ion-select-option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](73, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](75, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](78, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "ion-select", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_select_ngModelChange_79_listener($event) { return ctx.hourFormatChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "ion-select-option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](82, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "ion-select-option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](85, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](87, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](89);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](90, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_91_listener($event) { return ctx.displayDelayCounterSettingChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](93, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](96, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_97_listener($event) { return ctx.orderReferenceDisplayChange($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "ion-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](99, "fa-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "ion-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](101);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](102, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "ion-toggle", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_103_listener($event) { return ctx.displayProviderFooterSettingChanged($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](79, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](7, 51, "options.displayType.label"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.displayType);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](80, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.actionButtons.multipleSelection);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](81, _c3));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.actionButtons.map);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](82, _c4));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.actionButtons.reordering);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.canDoRouteOptimization);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](83, _c5));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.actionButtons.grouping);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](84, _c6));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.actionButtons.sorting);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](85, _c7));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.actionButtons.filter);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](86, _c8));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.signaturePinActivated);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.signaturePinActivated === true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](87, _c9));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](51, 53, "pages.settings.distanceUnit"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.distanceUnit);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.distanceSI);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](55, 55, "pages.settings.kilometersAndMeters"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.distanceIMPERIAL);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](58, 57, "pages.settings.milesAndYards"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](88, _c10));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](63, 59, "pages.settings.dateFormat"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.dateFormat);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.dateFormatDMY);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](67, 61, "pages.settings.DMY"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.dateFormatMDY);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](70, 63, "pages.settings.MDY"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.dateFormatYMD);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](73, 65, "pages.settings.YMD"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](89, _c11));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](78, 67, "pages.settings.hourFormat"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.hourFormat);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.hourFormatMilitary);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](82, 69, "pages.settings.hourFormatMilitary"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.hourFormatStandard);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](85, 71, "pages.settings.hourFormatStandard"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](90, _c11));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](90, 73, "pages.settings.displayDelayCounter"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.displayDelayCounter);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](91, _c1));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](96, 75, "options.orderReferenceDisplay.label"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.displayOrderReferenceOnOrderList);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](92, _c12));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](102, 77, "options.displayProviderFooter.label"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.displayProviderFooter);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItem"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".pin-button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL3NldHRpbmcvZGlzcGxheS1zZXR0aW5nL2Rpc3BsYXktc2V0dGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvZGlzcGxheS1zZXR0aW5nL2Rpc3BsYXktc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5nL2Rpc3BsYXktc2V0dGluZy9kaXNwbGF5LXNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpbi1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4iLCIucGluLWJ1dHRvbiB7XG4gIGhlaWdodDogMzBweDtcbn0iXX0= */"] });
    return DisplaySettingPage;
})();



/***/ })

}]);
//# sourceMappingURL=2-es2015.fdeb349d2fa637fa1814.js.map