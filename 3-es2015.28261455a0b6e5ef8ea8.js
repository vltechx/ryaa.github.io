(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/pages/setting/location-setting/location-setting.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/setting/location-setting/location-setting.module.ts ***!
  \***************************************************************************/
/*! exports provided: LocationSettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSettingPageModule", function() { return LocationSettingPageModule; });
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_pages_setting_location_setting_location_setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/pages/setting/location-setting/location-setting.page */ "./src/app/pages/setting/location-setting/location-setting.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");










const routes = [
    {
        path: '',
        component: _app_pages_setting_location_setting_location_setting_page__WEBPACK_IMPORTED_MODULE_6__["LocationSettingPage"]
    }
];
let LocationSettingPageModule = /*@__PURE__*/ (() => {
    class LocationSettingPageModule {
    }
    LocationSettingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LocationSettingPageModule });
    LocationSettingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LocationSettingPageModule_Factory(t) { return new (t || LocationSettingPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmCoreModule"],
            ]] });
    return LocationSettingPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LocationSettingPageModule, { declarations: [_app_pages_setting_location_setting_location_setting_page__WEBPACK_IMPORTED_MODULE_6__["LocationSettingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmCoreModule"]] });
})();



/***/ }),

/***/ "./src/app/pages/setting/location-setting/location-setting.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/setting/location-setting/location-setting.page.ts ***!
  \*************************************************************************/
/*! exports provided: LocationSettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSettingPage", function() { return LocationSettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_business_position_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/business/position.model */ "./src/app/models/business/position.model.ts");
/* harmony import */ var _app_pages_setting_user_location_adder_user_location_adder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/pages/setting/user-location-adder/user-location-adder.page */ "./src/app/pages/setting/user-location-adder/user-location-adder.page.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/mobile-configuration-service/mobile-context.service */ "./src/app/services/mobile-configuration-service/mobile-context.service.ts");
/* harmony import */ var _services_background_geolocation_background_geolocation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/background-geolocation/background-geolocation.service */ "./src/app/services/background-geolocation/background-geolocation.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/settings-providers/settings.service */ "./src/app/services/settings-providers/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");















const _c0 = function () { return ["fas", "times"]; };
function LocationSettingPage_ion_row_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocationSettingPage_ion_row_2_Template_ion_col_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const location_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.show(location_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocationSettingPage_ion_row_2_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.removeLocation(i_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const location_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", location_r2.name, ": ", location_r2.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    }
}
function LocationSettingPage_ng_container_6_agm_marker_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "agm-marker", 12);
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r7.marker.latitude)("longitude", ctx_r7.marker.longitude);
    }
}
function LocationSettingPage_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "agm-map", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LocationSettingPage_ng_container_6_agm_marker_2_Template, 1, 2, "agm-marker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx_r1.center.latitude)("longitude", ctx_r1.center.longitude)("zoom", ctx_r1.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.marker);
    }
}
const defaultZoomLevel = 14;
let LocationSettingPage = /*@__PURE__*/ (() => {
    class LocationSettingPage {
        constructor(mobileContextService, backgroundGeolocationService, modalCtrl, ngZone, settingsManager) {
            this.mobileContextService = mobileContextService;
            this.backgroundGeolocationService = backgroundGeolocationService;
            this.modalCtrl = modalCtrl;
            this.ngZone = ngZone;
            this.settingsManager = settingsManager;
            this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            this.latitude = 54.526000;
            this.longitude = -105.255100;
            this.zoom = defaultZoomLevel;
            this.userLocations = [];
        }
        ionViewWillEnter() {
            this.mobileContextService.userSettingsObservable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
                .subscribe(userSettings => {
                if (userSettings) {
                    this.userLocations = userSettings.userLocations;
                }
            });
        }
        ngOnInit() {
            this.setCurrentCenter();
        }
        ionViewDidLeave() {
            this.unsubscribe.next();
        }
        ionViewWillUnload() {
            this.unsubscribe.complete();
        }
        show(location) {
            this.center = location.position;
            this.marker = location.position;
            this.zoom = defaultZoomLevel;
        }
        removeLocation(index) {
            this.ngZone.run(() => {
                this.userLocations.splice(index, 1);
                this.settingsManager.locationChanged();
            });
        }
        addLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.modalCtrl.create({
                    component: _app_pages_setting_user_location_adder_user_location_adder_page__WEBPACK_IMPORTED_MODULE_3__["UserLocationAdderPage"],
                    componentProps: {}
                })
                    .then(res => {
                    res.present();
                    res.onDidDismiss().then((data) => {
                        if (data && data.data && data.data.location) {
                            this.userLocations.push(data.data.location);
                            this.settingsManager.locationChanged();
                        }
                    });
                });
            });
        }
        setCurrentCenter() {
            const position = this.backgroundGeolocationService.getLastKnownPosition();
            if (position) {
                this.center = position;
                this.zoom = defaultZoomLevel;
            }
            else {
                this.center = new _models_business_position_model__WEBPACK_IMPORTED_MODULE_2__["Position"](this.latitude, this.longitude);
                this.zoom = 2;
            }
        }
    }
    LocationSettingPage.ɵfac = function LocationSettingPage_Factory(t) { return new (t || LocationSettingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_6__["MobileContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_background_geolocation_background_geolocation_service__WEBPACK_IMPORTED_MODULE_7__["BackgroundGeolocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsManager"])); };
    LocationSettingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LocationSettingPage, selectors: [["app-location-setting"]], decls: 7, vars: 2, consts: [[1, "ion-no-padding"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], [1, "ion-text-center", 2, "height", "340px"], ["size", "small", 3, "click"], ["translate", "location-settings.addLocation"], [4, "ngIf"], [1, "ion-text-wrap"], ["size", "10", 3, "click"], ["size", "2"], [3, "icon"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude", 4, "ngIf"], [3, "latitude", "longitude"]], template: function LocationSettingPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LocationSettingPage_ion_row_2_Template, 6, 4, "ion-row", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-footer", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LocationSettingPage_Template_ion_button_click_4_listener() { return ctx.addLocation(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LocationSettingPage_ng_container_6_Template, 3, 4, "ng-container", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userLocations);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.center);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonButton"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonCol"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL3NldHRpbmcvbG9jYXRpb24tc2V0dGluZy9sb2NhdGlvbi1zZXR0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZy9sb2NhdGlvbi1zZXR0aW5nL2xvY2F0aW9uLXNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZy9sb2NhdGlvbi1zZXR0aW5nL2xvY2F0aW9uLXNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbiIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */"] });
    return LocationSettingPage;
})();



/***/ })

}]);
//# sourceMappingURL=3-es2015.28261455a0b6e5ef8ea8.js.map