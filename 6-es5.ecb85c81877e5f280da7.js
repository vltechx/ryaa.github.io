function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
  /***/
  "./src/app/pages/setting/setting.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/setting/setting.module.ts ***!
    \*************************************************/

  /*! exports provided: SettingPageModule */

  /***/
  function srcAppPagesSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
      return SettingPageModule;
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


    var _app_pages_setting_settings_tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/pages/setting/settings-tabs.router.module */
    "./src/app/pages/setting/settings-tabs.router.module.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/pages/setting/setting.page.ts");

    var routes = [{
      path: '',
      component: _setting_page__WEBPACK_IMPORTED_MODULE_9__["SettingPage"]
    }];

    var SettingPageModule = /*@__PURE__*/function () {
      var SettingPageModule = function SettingPageModule() {
        _classCallCheck(this, SettingPageModule);
      };

      SettingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: SettingPageModule
      });
      SettingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function SettingPageModule_Factory(t) {
          return new (t || SettingPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _app_pages_setting_settings_tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["SettingsTabsRoutingModule"]]]
      });
      return SettingPageModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingPageModule, {
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_9__["SettingPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _app_pages_setting_settings_tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["SettingsTabsRoutingModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/setting/setting.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/setting/setting.page.ts ***!
    \***********************************************/

  /*! exports provided: SettingPage */

  /***/
  function srcAppPagesSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
      return SettingPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @services/mobile-configuration-service/mobile-context.service */
    "./src/app/services/mobile-configuration-service/mobile-context.service.ts");
    /* harmony import */


    var _services_log_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @services/log/log.service */
    "./src/app/services/log/log.service.ts");
    /* harmony import */


    var _services_connection_status_service_connection_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @services/connection-status-service/connection-status.service */
    "./src/app/services/connection-status-service/connection-status.service.ts");
    /* harmony import */


    var _services_order_sync_order_sync_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @services/order-sync/order-sync.service */
    "./src/app/services/order-sync/order-sync.service.ts");
    /* harmony import */


    var _services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @services/settings-providers/settings.service */
    "./src/app/services/settings-providers/settings.service.ts");
    /* harmony import */


    var _services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @services/mbls-analytics-service/MblsAnalyticsService */
    "./src/app/services/mbls-analytics-service/MblsAnalyticsService.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_components_offline_indicator_offline_indicator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/components/offline-indicator/offline-indicator.component */
    "./src/app/components/offline-indicator/offline-indicator.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");

    var _c0 = ["content"];

    var _c1 = function _c1() {
      return ["fas", "sliders-h"];
    };

    var _c2 = function _c2() {
      return ["fas", "mobile"];
    };

    var _c3 = function _c3() {
      return ["fas", "map-marker-edit"];
    };

    var CONFIG = {
      GA: {
        PAGE_NAME: 'SettingsPage',
        EVENT: {
          FORCING_SYNC: {
            NAME: 'force-sync',
            ACTION: 'on-provider-change'
          }
        }
      }
    };

    var SettingPage = /*@__PURE__*/function () {
      var SettingPage = /*#__PURE__*/function () {
        function SettingPage(mobileContextService, log, connectionStatusService, orderSync, settingsManager, ga, platform) {
          var _this = this;

          _classCallCheck(this, SettingPage);

          this.mobileContextService = mobileContextService;
          this.log = log;
          this.connectionStatusService = connectionStatusService;
          this.orderSync = orderSync;
          this.settingsManager = settingsManager;
          this.ga = ga;
          this.platform = platform;
          this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.withLocations = true;
          this.actionData = {};
          this.platform.ready().then(function () {
            _this.ga.trackView(CONFIG.GA.PAGE_NAME)["catch"](function (error) {
              return _this.log.info("Unable to track view ".concat(CONFIG.GA.PAGE_NAME, " with GA"), error);
            });
          });
        }

        _createClass(SettingPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.mobileContextService.userSettingsObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (userSettings) {
              if (userSettings) {} else {}
            });
            this.connectionStatusService.connectionStatusSubscription.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (status) {
              _this2.isConnected = status.isNetworkConnectedForUser;
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            var _this3 = this;

            if (this.actionData.selectedLanguage && this.actionData.selectedLanguage !== this.actionData.initialLanguage) {
              this.mobileContextService.submitContext().subscribe();
              this.actionData.selectedLanguage = null;
              this.actionData.initialLanguage = null;
            }

            if (this.settingsManager.selectedProvidersHasChanged) {
              this.settingsManager.selectedProvidersHasChanged = false;
              this.ga.trackEvent(CONFIG.GA.EVENT.FORCING_SYNC.NAME, CONFIG.GA.EVENT.FORCING_SYNC.ACTION)["catch"](function (error) {
                return _this3.log.error("Unable to track event ".concat(CONFIG.GA.EVENT.FORCING_SYNC, " with GA"), error);
              });
              this.orderSync.fullSync().subscribe(function () {
                return true;
              }, function (error) {
                _this3.log.error('Problem with sync after leaving settings page', error);

                return true;
              });
            }

            return true;
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
        }]);

        return SettingPage;
      }();

      SettingPage.ɵfac = function SettingPage_Factory(t) {
        return new (t || SettingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_3__["MobileContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_log_log_service__WEBPACK_IMPORTED_MODULE_4__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_connection_status_service_connection_status_service__WEBPACK_IMPORTED_MODULE_5__["ConnectionStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_sync_order_sync_service__WEBPACK_IMPORTED_MODULE_6__["OrderSyncService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_8__["MblsAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]));
      };

      SettingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingPage,
        selectors: [["app-setting"]],
        viewQuery: function SettingPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        decls: 22,
        vars: 7,
        consts: [["slot", "start"], ["src", "assets/images/logo_menu.png"], ["translate", "pages.drawer-menu.settings"], [3, "content"], ["slot", "top"], ["tab", "main"], ["size", "lg", 3, "icon"], ["translate", "pages.settings.main"], ["tab", "display"], ["translate", "pages.settings.display"], ["tab", "location"], ["translate", "pages.settings.locations"]],
        template: function SettingPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-menu-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "offline-indicator", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-tab-bar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-tab-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-tab-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateDirective"], _app_components_offline_indicator_offline_indicator_component__WEBPACK_IMPORTED_MODULE_11__["OfflineIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"]],
        styles: ["ion-tab-button[_ngcontent-%COMP%]    > ion-label[_ngcontent-%COMP%]    > fa-icon[_ngcontent-%COMP%] {\n  padding-right: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYnV0dG9uID4gaW9uLWxhYmVsID4gZmEtaWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuN2VtO1xufVxuIiwiaW9uLXRhYi1idXR0b24gPiBpb24tbGFiZWwgPiBmYS1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMC43ZW07XG59Il19 */"]
      });
      return SettingPage;
    }();
    /***/

  },

  /***/
  "./src/app/pages/setting/settings-tabs.router.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/setting/settings-tabs.router.module.ts ***!
    \**************************************************************/

  /*! exports provided: SettingsTabsRoutingModule */

  /***/
  function srcAppPagesSettingSettingsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsTabsRoutingModule", function () {
      return SettingsTabsRoutingModule;
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


    var _app_pages_setting_setting_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/pages/setting/setting.page */
    "./src/app/pages/setting/setting.page.ts");

    var routes = [{
      path: '',
      component: _app_pages_setting_setting_page__WEBPACK_IMPORTED_MODULE_2__["SettingPage"],
      children: [{
        path: 'main',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(1), __webpack_require__.e(4)]).then(__webpack_require__.bind(null,
            /*! ./main-setting/main-setting.module */
            "./src/app/pages/setting/main-setting/main-setting.module.ts")).then(function (m) {
              return m.MainSettingPageModule;
            });
          }
        }]
      }, {
        path: 'display',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            2).then(__webpack_require__.bind(null,
            /*! ./display-setting/display-setting.module */
            "./src/app/pages/setting/display-setting/display-setting.module.ts")).then(function (m) {
              return m.DisplaySettingPageModule;
            });
          }
        }]
      }, {
        path: 'location',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            3).then(__webpack_require__.bind(null,
            /*! ./location-setting/location-setting.module */
            "./src/app/pages/setting/location-setting/location-setting.module.ts")).then(function (m) {
              return m.LocationSettingPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/setting/main',
        pathMatch: 'full'
      }]
    }];

    var SettingsTabsRoutingModule = /*@__PURE__*/function () {
      var SettingsTabsRoutingModule = function SettingsTabsRoutingModule() {
        _classCallCheck(this, SettingsTabsRoutingModule);
      };

      SettingsTabsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SettingsTabsRoutingModule
      });
      SettingsTabsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SettingsTabsRoutingModule_Factory(t) {
          return new (t || SettingsTabsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return SettingsTabsRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsTabsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=6-es5.ecb85c81877e5f280da7.js.map