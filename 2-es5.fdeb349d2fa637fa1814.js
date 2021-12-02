function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
  /***/
  "./src/app/pages/setting/display-setting/display-setting.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/setting/display-setting/display-setting.module.ts ***!
    \*************************************************************************/

  /*! exports provided: DisplaySettingPageModule */

  /***/
  function srcAppPagesSettingDisplaySettingDisplaySettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplaySettingPageModule", function () {
      return DisplaySettingPageModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _app_pages_setting_display_setting_display_setting_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/pages/setting/display-setting/display-setting.page */
    "./src/app/pages/setting/display-setting/display-setting.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var routes = [{
      path: '',
      component: _app_pages_setting_display_setting_display_setting_page__WEBPACK_IMPORTED_MODULE_5__["DisplaySettingPage"]
    }];

    var DisplaySettingPageModule = /*@__PURE__*/function () {
      var DisplaySettingPageModule = function DisplaySettingPageModule() {
        _classCallCheck(this, DisplaySettingPageModule);
      };

      DisplaySettingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DisplaySettingPageModule
      });
      DisplaySettingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function DisplaySettingPageModule_Factory(t) {
          return new (t || DisplaySettingPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]]
      });
      return DisplaySettingPageModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DisplaySettingPageModule, {
        declarations: [_app_pages_setting_display_setting_display_setting_page__WEBPACK_IMPORTED_MODULE_5__["DisplaySettingPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/setting/display-setting/display-setting.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/setting/display-setting/display-setting.page.ts ***!
    \***********************************************************************/

  /*! exports provided: DisplaySettingPage */

  /***/
  function srcAppPagesSettingDisplaySettingDisplaySettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplaySettingPage", function () {
      return DisplaySettingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_settings_action_buttons_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @models/settings/action-buttons.model */
    "./src/app/models/settings/action-buttons.model.ts");
    /* harmony import */


    var _models_settings_signature_pin_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/settings/signature-pin.model */
    "./src/app/models/settings/signature-pin.model.ts");
    /* harmony import */


    var _models_units_and_format_date_format_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @models/units-and-format/date-format.enum */
    "./src/app/models/units-and-format/date-format.enum.ts");
    /* harmony import */


    var _models_units_and_format_distance_system_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @models/units-and-format/distance-system.enum */
    "./src/app/models/units-and-format/distance-system.enum.ts");
    /* harmony import */


    var _models_units_and_format_time_format_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @models/units-and-format/time-format.enum */
    "./src/app/models/units-and-format/time-format.enum.ts");
    /* harmony import */


    var _app_pages_signature_pin_modal_signature_pin_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/pages/signature-pin-modal/signature-pin-modal.page */
    "./src/app/pages/signature-pin-modal/signature-pin-modal.page.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @services/mobile-configuration-service/mobile-context.service */
    "./src/app/services/mobile-configuration-service/mobile-context.service.ts");
    /* harmony import */


    var _services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @services/settings-providers/settings.service */
    "./src/app/services/settings-providers/settings.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["fas", "route"];
    };

    function DisplaySettingPage_ion_item_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-toggle", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_ion_item_25_Template_ion_toggle_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.optimizationButtonChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.actionButtons.optimization);
      }
    }

    function DisplaySettingPage_ion_item_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DisplaySettingPage_ion_item_46_Template_ion_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.editSignaturePin(ctx_r4.editPin);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["fas", "th-list"];
    };

    var _c2 = function _c2() {
      return ["fas", "check-square"];
    };

    var _c3 = function _c3() {
      return ["fas", "map"];
    };

    var _c4 = function _c4() {
      return ["fas", "retweet"];
    };

    var _c5 = function _c5() {
      return ["fal", "list-alt"];
    };

    var _c6 = function _c6() {
      return ["fas", "sort-alpha-down"];
    };

    var _c7 = function _c7() {
      return ["fas", "filter"];
    };

    var _c8 = function _c8() {
      return ["fas", "lock"];
    };

    var _c9 = function _c9() {
      return ["fas", "ruler-combined"];
    };

    var _c10 = function _c10() {
      return ["fas", "calendar-day"];
    };

    var _c11 = function _c11() {
      return ["fas", "clock"];
    };

    var _c12 = function _c12() {
      return ["fas", "building"];
    };

    var DisplaySettingPage = /*@__PURE__*/function () {
      var DisplaySettingPage = /*#__PURE__*/function () {
        function DisplaySettingPage(mobileContextService, settingsManager, platform, translateService, modalCtrl) {
          _classCallCheck(this, DisplaySettingPage);

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

        _createClass(DisplaySettingPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.mobileContextService.userSettingsObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.unsubscribe)).subscribe(function (userSettings) {
              if (userSettings) {
                _this.canDoRouteOptimization = userSettings.canDoRouteOptimization;
                _this.displayType = userSettings.displayType;
                _this.distanceUnit = userSettings.distanceUnit;
                _this.dateFormat = userSettings.dateFormat;
                _this.hourFormat = userSettings.hourFormat;
                _this.signaturePinActivated = userSettings.signaturePinActivated;
                _this.signaturePinValue = userSettings.signaturePinValue;
                _this.displayProviderFooter = userSettings.displayProviderFooter;
                _this.displayDelayCounter = userSettings.displayDelayCounter;
                _this.displayOrderReferenceOnOrderList = userSettings.displayOrderReferenceOnOrderList;

                if (!userSettings.buttons) {
                  userSettings.buttons = new _models_settings_action_buttons_model__WEBPACK_IMPORTED_MODULE_2__["ActionButtons"]();
                }

                _this.actionButtons = userSettings.buttons;
              } else {
                _this.actionButtons = new _models_settings_action_buttons_model__WEBPACK_IMPORTED_MODULE_2__["ActionButtons"]();
              }
            });
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.unsubscribe.next();
          }
        }, {
          key: "ionViewWillUnload",
          value: function ionViewWillUnload() {
            this.unsubscribe.complete();
          }
        }, {
          key: "signaturePinChange",
          value: function signaturePinChange(selectedValue) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.signaturePinActivated = selectedValue;

                      if (!(this.signaturePinActivated && this.signaturePinValue === '')) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 4;
                      return this.editSignaturePin(this.createPin);

                    case 4:
                      _context.next = 7;
                      break;

                    case 6:
                      if (!this.signaturePinActivated) {
                        this.settingsManager.signaturePinChanged(this.signaturePinActivated, '');
                      }

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "editSignaturePin",
          value: function editSignaturePin(type) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var signaturePinModal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _app_pages_signature_pin_modal_signature_pin_modal_page__WEBPACK_IMPORTED_MODULE_7__["SignaturePinModalPage"],
                        componentProps: {
                          type: type,
                          signaturePinValue: this.signaturePinValue
                        }
                      });

                    case 2:
                      signaturePinModal = _context2.sent;
                      _context2.next = 5;
                      return signaturePinModal.present();

                    case 5:
                      _context2.next = 7;
                      return signaturePinModal.onDidDismiss().then(function (data) {
                        if (data.data) {
                          _this2.signaturePinActivated = data.data.ok;
                          _this2.signaturePinValue = data.data.signaturePinValue;
                        } else {
                          _this2.signaturePinActivated = false;
                          _this2.signaturePinValue = '';
                        }

                        _this2.settingsManager.signaturePinChanged(_this2.signaturePinActivated, _this2.signaturePinValue);
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "displayTypeChange",
          value: function displayTypeChange(selectedValue) {
            this.displayType = selectedValue;
            this.settingsManager.setDisplayType(this.displayType);
          }
        }, {
          key: "multipleSelectionChange",
          value: function multipleSelectionChange(selectedValue) {
            this.actionButtons.multipleSelection = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
          }
        }, {
          key: "mapButtonChange",
          value: function mapButtonChange(selectedValue) {
            this.actionButtons.map = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
          }
        }, {
          key: "distanceUnitChange",
          value: function distanceUnitChange(selectedValue) {
            this.distanceUnit = selectedValue;
            this.settingsManager.setDistanceUnit(Number(this.distanceUnit));
          }
        }, {
          key: "dateFormatChange",
          value: function dateFormatChange(selectedValue) {
            this.dateFormat = selectedValue;
            this.settingsManager.setDateFormat(this.dateFormat);
          }
        }, {
          key: "hourFormatChange",
          value: function hourFormatChange(selectedValue) {
            this.hourFormat = selectedValue;
            this.settingsManager.setHourFormat(this.hourFormat);
          }
        }, {
          key: "reorderingChanged",
          value: function reorderingChanged(selectedValue) {
            this.actionButtons.reordering = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
          }
        }, {
          key: "optimizationButtonChanged",
          value: function optimizationButtonChanged(selectedValue) {
            this.actionButtons.optimization = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
          }
        }, {
          key: "groupingButtonChanged",
          value: function groupingButtonChanged(selectedValue) {
            this.actionButtons.grouping = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
          }
        }, {
          key: "sortingButtonChanged",
          value: function sortingButtonChanged(selectedValue) {
            this.actionButtons.sorting = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
          }
        }, {
          key: "filterButtonChanged",
          value: function filterButtonChanged(selectedValue) {
            this.actionButtons.filter = selectedValue;
            this.settingsManager.actionButtonsSettingChanged(this.actionButtons);
          }
        }, {
          key: "orderReferenceDisplayChange",
          value: function orderReferenceDisplayChange(selectedValue) {
            this.displayOrderReferenceOnOrderList = selectedValue;
            this.settingsManager.setOrderReferenceDisplay(this.displayOrderReferenceOnOrderList);
          }
        }, {
          key: "displayProviderFooterSettingChanged",
          value: function displayProviderFooterSettingChanged(selectedValue) {
            this.displayProviderFooter = selectedValue;
            this.settingsManager.displayProviderFooterSettingChanged(this.displayProviderFooter);
          }
        }, {
          key: "displayDelayCounterSettingChanged",
          value: function displayDelayCounterSettingChanged(selectedValue) {
            this.displayDelayCounter = selectedValue;
            this.settingsManager.displayDelayCounterSettingChanged(this.displayDelayCounter);
          }
        }]);

        return DisplaySettingPage;
      }();

      DisplaySettingPage.ɵfac = function DisplaySettingPage_Factory(t) {
        return new (t || DisplaySettingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_10__["MobileContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"]));
      };

      DisplaySettingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DisplaySettingPage,
        selectors: [["app-display-setting"]],
        decls: 104,
        vars: 93,
        consts: [[1, "ion-padding"], ["size", "lg", "slot", "start", 1, "fa-bar-button", 3, "icon"], [1, "ion-text-wrap"], ["slot", "end", 3, "ngModel", "ngModelChange"], ["translate", "pages.settings.buttons.multipleSelection"], ["translate", "pages.settings.buttons.map"], ["size", "lg", "slot", "start", 3, "icon"], ["translate", "pages.settings.buttons.reordering"], [4, "ngIf"], ["translate", "pages.settings.buttons.grouping"], ["translate", "pages.settings.buttons.sorting"], ["translate", "pages.settings.buttons.filter"], ["translate", "pages.settings.buttons.signaturePin"], [3, "value"], ["translate", "pages.settings.buttons.optimization"], ["slot", "end", "fill", "outline", 3, "click"], ["translate", "pages.settings.buttons.changePin"]],
        template: function DisplaySettingPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_8_listener($event) {
              return ctx.displayTypeChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_13_listener($event) {
              return ctx.multipleSelectionChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_19_listener($event) {
              return ctx.mapButtonChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_24_listener($event) {
              return ctx.reorderingChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DisplaySettingPage_ion_item_25_Template, 5, 3, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_30_listener($event) {
              return ctx.groupingButtonChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_35_listener($event) {
              return ctx.sortingButtonChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_40_listener($event) {
              return ctx.filterButtonChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_45_listener($event) {
              return ctx.signaturePinChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, DisplaySettingPage_ion_item_46_Template, 3, 0, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_select_ngModelChange_52_listener($event) {
              return ctx.distanceUnitChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-select-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-select-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_select_ngModelChange_64_listener($event) {
              return ctx.dateFormatChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-select-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-select-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-select-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ion-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_select_ngModelChange_79_listener($event) {
              return ctx.hourFormatChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-select-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ion-select-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_91_listener($event) {
              return ctx.displayDelayCounterSettingChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](96, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_97_listener($event) {
              return ctx.orderReferenceDisplayChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ion-label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](102, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "ion-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DisplaySettingPage_Template_ion_toggle_ngModelChange_103_listener($event) {
              return ctx.displayProviderFooterSettingChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](79, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 51, "options.displayType.label"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayType);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](80, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.actionButtons.multipleSelection);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](81, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.actionButtons.map);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](82, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.actionButtons.reordering);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canDoRouteOptimization);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](83, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.actionButtons.grouping);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](84, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.actionButtons.sorting);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](85, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.actionButtons.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](86, _c8));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.signaturePinActivated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signaturePinActivated === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](87, _c9));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 53, "pages.settings.distanceUnit"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.distanceUnit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.distanceSI);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 55, "pages.settings.kilometersAndMeters"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.distanceIMPERIAL);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 57, "pages.settings.milesAndYards"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](88, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 59, "pages.settings.dateFormat"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dateFormat);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.dateFormatDMY);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 61, "pages.settings.DMY"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.dateFormatMDY);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 63, "pages.settings.MDY"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.dateFormatYMD);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 65, "pages.settings.YMD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](89, _c11));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](78, 67, "pages.settings.hourFormat"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.hourFormat);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.hourFormatMilitary);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 69, "pages.settings.hourFormatMilitary"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.hourFormatStandard);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 71, "pages.settings.hourFormatStandard"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](90, _c11));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 73, "pages.settings.displayDelayCounter"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayDelayCounter);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](91, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](96, 75, "options.orderReferenceDisplay.label"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayOrderReferenceOnOrderList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](92, _c12));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](102, 77, "options.displayProviderFooter.label"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayProviderFooter);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonItem"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
        styles: [".pin-button[_ngcontent-%COMP%] {\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL3NldHRpbmcvZGlzcGxheS1zZXR0aW5nL2Rpc3BsYXktc2V0dGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvZGlzcGxheS1zZXR0aW5nL2Rpc3BsYXktc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5nL2Rpc3BsYXktc2V0dGluZy9kaXNwbGF5LXNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpbi1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4iLCIucGluLWJ1dHRvbiB7XG4gIGhlaWdodDogMzBweDtcbn0iXX0= */"]
      });
      return DisplaySettingPage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=2-es5.fdeb349d2fa637fa1814.js.map