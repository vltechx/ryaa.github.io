function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8], {
  /***/
  "./src/app/pages/order-history/order-history.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/order-history/order-history.module.ts ***!
    \*************************************************************/

  /*! exports provided: OrderHistoryPageModule */

  /***/
  function srcAppPagesOrderHistoryOrderHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function () {
      return OrderHistoryPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _order_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-history.page */
    "./src/app/pages/order-history/order-history.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _order_history_page__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPage"]
    }];

    var OrderHistoryPageModule = /*@__PURE__*/function () {
      var OrderHistoryPageModule = function OrderHistoryPageModule() {
        _classCallCheck(this, OrderHistoryPageModule);
      };

      OrderHistoryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderHistoryPageModule
      });
      OrderHistoryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderHistoryPageModule_Factory(t) {
          return new (t || OrderHistoryPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]]
      });
      return OrderHistoryPageModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderHistoryPageModule, {
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/order-history/order-history.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/order-history/order-history.page.ts ***!
    \***********************************************************/

  /*! exports provided: OrderHistoryPage */

  /***/
  function srcAppPagesOrderHistoryOrderHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function () {
      return OrderHistoryPage;
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


    var _models_order_helper_order_group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @models/order-helper/order-group.model */
    "./src/app/models/order-helper/order-group.model.ts");
    /* harmony import */


    var _models_settings_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/settings/settings.model */
    "./src/app/models/settings/settings.model.ts");
    /* harmony import */


    var _models_units_and_format_date_format_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @models/units-and-format/date-format.enum */
    "./src/app/models/units-and-format/date-format.enum.ts");
    /* harmony import */


    var _app_pages_order_detail_tabs_order_detail_tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/pages/order-detail-tabs/order-detail-tabs.page */
    "./src/app/pages/order-detail-tabs/order-detail-tabs.page.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_order_service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @services/order-service/order.service */
    "./src/app/services/order-service/order.service.ts");
    /* harmony import */


    var _services_order_sync_order_sync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @services/order-sync/order-sync.service */
    "./src/app/services/order-sync/order-sync.service.ts");
    /* harmony import */


    var _services_log_log_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @services/log/log.service */
    "./src/app/services/log/log.service.ts");
    /* harmony import */


    var _services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @services/mobile-configuration-service/mobile-context.service */
    "./src/app/services/mobile-configuration-service/mobile-context.service.ts");
    /* harmony import */


    var _services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @services/mbls-analytics-service/MblsAnalyticsService */
    "./src/app/services/mbls-analytics-service/MblsAnalyticsService.ts");
    /* harmony import */


    var _app_pipes_date_pipe_date_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/pipes/date-pipe/date.pipe */
    "./src/app/pipes/date-pipe/date.pipe.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _app_components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @app/components/order-item/order-item.component */
    "./src/app/components/order-item/order-item.component.ts");

    var _c0 = ["datePicker"];

    var _c1 = function _c1() {
      return ["fal", "calendar"];
    };

    function OrderHistoryPage_ion_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderHistoryPage_ion_button_11_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.showTimePicker();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
      }
    }

    function OrderHistoryPage_ion_item_divider_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-divider", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-badge", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-toggle", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderHistoryPage_ion_item_divider_20_Template_ion_toggle_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var group_r9 = ctx.$implicit;
          return group_r9.visible = $event;
        })("ngModelChange", function OrderHistoryPage_ion_item_divider_20_Template_ion_toggle_ngModelChange_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var group_r9 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.toggleGroupView(group_r9.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var group_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", group_r9.viewClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r9.size);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translate", group_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", group_r9.visible);
      }
    }

    function OrderHistoryPage_ion_item_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderHistoryPage_ion_item_21_Template_ion_item_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var orderItem_r13 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.selectItem($event, orderItem_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "order-item", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var orderItem_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("orderView", orderItem_r13)("index", i_r14)("isforHistory", true);
      }
    }

    function OrderHistoryPage_ion_item_group_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-group", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "messages.empty_list"));
      }
    }

    function OrderHistoryPage_ion_item_divider_24_ion_badge_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hiddenGroup_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hiddenGroup_r17.size);
      }
    }

    function OrderHistoryPage_ion_item_divider_24_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 29);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translate", "messages.not_allowed_to_see_future_orders");
      }
    }

    function OrderHistoryPage_ion_item_divider_24_ion_toggle_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toggle", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderHistoryPage_ion_item_divider_24_ion_toggle_6_Template_ion_toggle_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var hiddenGroup_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          return hiddenGroup_r17.visible = $event;
        })("ngModelChange", function OrderHistoryPage_ion_item_divider_24_ion_toggle_6_Template_ion_toggle_ngModelChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var hiddenGroup_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r25.toggleGroupView(hiddenGroup_r17.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hiddenGroup_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", hiddenGroup_r17.visible);
      }
    }

    function OrderHistoryPage_ion_item_divider_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-divider", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrderHistoryPage_ion_item_divider_24_ion_badge_2_Template, 2, 1, "ion-badge", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OrderHistoryPage_ion_item_divider_24_span_5_Template, 1, 1, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OrderHistoryPage_ion_item_divider_24_ion_toggle_6_Template, 1, 1, "ion-toggle", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hiddenGroup_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !hiddenGroup_r17.hidden)("ngClass", hiddenGroup_r17.viewClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hiddenGroup_r17.canHaulerSeeFutureOrders);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translate", hiddenGroup_r17.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !hiddenGroup_r17.canHaulerSeeFutureOrders);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", hiddenGroup_r17.canHaulerSeeFutureOrders);
      }
    }

    var _c2 = function _c2() {
      return ["fas", "sync"];
    };

    var _c3 = function _c3(a0, a1, a2, a4) {
      return [a0, a1, a2, null, a4, true];
    };

    var CONFIG = {
      GA: {
        PAGE_NAME: 'OrderHistoryPage'
      }
    };

    var OrderHistoryPage = /*@__PURE__*/function () {
      var OrderHistoryPage = /*#__PURE__*/function () {
        function OrderHistoryPage(modalCtrl, orderService, loadingCtrl, orderSyncService, log, mobileContextService, ga, datePipe) {
          var _this = this;

          _classCallCheck(this, OrderHistoryPage);

          this.modalCtrl = modalCtrl;
          this.orderService = orderService;
          this.loadingCtrl = loadingCtrl;
          this.orderSyncService = orderSyncService;
          this.log = log;
          this.mobileContextService = mobileContextService;
          this.ga = ga;
          this.datePipe = datePipe;
          this.allOrders = [];
          this.orderGroups = [];
          this.activeOrders = [];
          this.deliveryDate = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
          this.daysInThePast = 0;
          this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(this.daysInThePast, 'd').format('YYYY-MM-DD');
          this.maxDate = moment__WEBPACK_IMPORTED_MODULE_6__().add(365, 'd').format('YYYY-MM-DD');
          this.userSettings = new _models_settings_settings_model__WEBPACK_IMPORTED_MODULE_3__["UserSettings"]();
          this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.displayFormat = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
          this.datePickerDisplayFormat = 'YYYY/MM/DD';
          this.dateType = _models_units_and_format_date_format_enum__WEBPACK_IMPORTED_MODULE_4__["DateTimeCombinationEnum"].dateOnly;
          this.datePickerType = true;

          this.showGroupHeader = function (record, recordIndex, records) {
            try {
              if (recordIndex === 0 || record.order.tenantName !== records[recordIndex - 1].order.tenantName) {
                if (_this.orderGroups) {
                  var group = _this.orderGroups.find(function (value) {
                    return value.name === record.order.tenantName;
                  });

                  if (group) {
                    return group;
                  }
                }
              }
            } catch (e) {}

            return null;
          };

          this.orderSyncService.sendPaymentUpdate().subscribe(function (orderChange) {
            if (orderChange) {
              var orderView = _this.activeOrders.find(function (oV) {
                return oV.order.id === orderChange.id;
              });

              if (orderView) {
                orderChange.uuid = orderView.order.uuid;
                orderView.order = orderChange;
              }
            }
          });
          this.mobileContextService.userSettingsObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe)).subscribe(function (userSettings) {
            _this.userSettings = userSettings;
          });
        } // noinspection JSUnusedGlobalSymbols


        _createClass(OrderHistoryPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.ga.trackView(CONFIG.GA.PAGE_NAME)["catch"](function (error) {
              return _this2.log.info("Unable to track view ".concat(CONFIG.GA.PAGE_NAME, " with GA"), error);
            });
            this.getOrders(this.deliveryDate);
          }
          /***
           * get orders by their delivery dates
           */

        }, {
          key: "getOrders",
          value: function getOrders(deliveryDate) {
            var _this3 = this;

            this.loading = this.loadingCtrl.create().then(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this4 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return res.present();

                      case 2:
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.orderSyncService.getDatedOrders(moment__WEBPACK_IMPORTED_MODULE_6__(deliveryDate).format('YYYY-MM-DD')), this.mobileContextService.haulerObservable]).subscribe(function (_ref) {
                          var _ref2 = _slicedToArray(_ref, 2),
                              orders = _ref2[0],
                              hauler = _ref2[1];

                          _this4.allOrders = [];
                          _this4.orderGroups = [];
                          _this4.activeOrders = [];
                          orders.forEach(function (order) {
                            _this4.allOrders.push(_this4.orderService.constructOrderView(order));
                          });
                          _this4.hauler = hauler;
                          _this4.activeOrders = _this4.sortOrders(_this4.allOrders, 'tenantName');

                          _this4.manageGroups(_this4.allOrders);

                          _this4.canHaulerSeeFutureOrder();

                          res.dismiss();
                        }, function (err) {
                          res.dismiss();

                          _this4.log.error(err);
                        });

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "identify",
          value: function identify(index, orderView) {
            return orderView.order.uuid.toString();
          }
        }, {
          key: "toggleGroupView",
          value: function toggleGroupView(groupName) {
            var orderGroup = this.orderGroups.find(function (oG) {
              return oG.name === groupName;
            });

            if (orderGroup) {
              if (orderGroup.hidden) {
                this.activeOrders = this.activeOrders.filter(function (orderView) {
                  return orderView.order.tenantName !== groupName;
                });
              } else {
                this.activeOrders = this.activeOrders.concat(this.allOrders.filter(function (orderView) {
                  return orderView.order.tenantName === groupName;
                }));
              }

              orderGroup.hidden = !orderGroup.hidden;
              orderGroup.visible = !orderGroup.visible;
            }
          }
        }, {
          key: "showTimePicker",
          value: function showTimePicker() {
            this.datePicker.open();
          }
        }, {
          key: "selectItem",
          value: function selectItem(event, orderView) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var itemModal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        id: 'order-detail-tabs-page',
                        component: _app_pages_order_detail_tabs_order_detail_tabs_page__WEBPACK_IMPORTED_MODULE_5__["OrderDetailTabsPage"],
                        componentProps: {
                          orderView: orderView,
                          isforHistory: true
                        }
                      });

                    case 2:
                      itemModal = _context2.sent;
                      itemModal.present();
                      itemModal.onDidDismiss().then( // (data: { order: Order }) => {
                      function (eventDetail) {
                        if (eventDetail && eventDetail.data && eventDetail.data.order) {
                          var transition = eventDetail.data.transition;

                          var view = _this5.allOrders.find(function (oV) {
                            return oV.order.id === eventDetail.data.order.id;
                          });

                          if (view && transition) {
                            view.order.local = false;
                            view.order.status = transition.to.name;
                          }
                        }
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * Sort orders
           *
           */

        }, {
          key: "sortOrders",
          value: function sortOrders(orders, prop) {
            var result = [];
            var ordersSorted = orders.reduce(function (groups, item) {
              var val = item.order[prop];
              groups[val] = groups[val] || [];
              groups[val].push(item);
              return groups;
            }, {});
            Object.keys(ordersSorted).forEach(function (item) {
              result.push.apply(result, _toConsumableArray(ordersSorted[item]));
            });
            return result;
          }
        }, {
          key: "canHaulerSeeFutureOrder",
          value: function canHaulerSeeFutureOrder() {
            var _this6 = this;

            if (this.hauler) {
              this.orderGroups.forEach(function (orderGroup) {
                var provider = _this6.hauler.linkedProviders.find(function (p) {
                  return p.name === orderGroup.name;
                });

                var canSeeFutureOrders = !moment__WEBPACK_IMPORTED_MODULE_6__(_this6.deliveryDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_6__()) || provider.configuration && provider.configuration.allowFutureViewForHauler;
                orderGroup.canHaulerSeeFutureOrders = canSeeFutureOrders;
                orderGroup.hidden = !canSeeFutureOrders;

                if (!canSeeFutureOrders) {
                  _this6.toggleGroupView(orderGroup.name);
                }
              });
            }
          }
        }, {
          key: "isDatePickerVisible",
          value: function isDatePickerVisible() {
            if (this.hauler) {
              return this.hauler.linkedProviders.some(function (provider) {
                return provider.configuration.allowFutureViewForHauler;
              });
            }
          }
        }, {
          key: "manageGroups",
          value: function manageGroups(orders) {
            var _this7 = this;

            if (this.hauler) {
              this.hauler.linkedProviders.forEach(function (provider) {
                var orderGroup = new _models_order_helper_order_group_model__WEBPACK_IMPORTED_MODULE_2__["OrderGroup"](provider.name);

                _this7.orderGroups.push(orderGroup);
              });
              orders.forEach(function (orderView) {
                var orderGroup = _this7.orderGroups.find(function (oG) {
                  return oG.name === orderView.order.tenantName;
                });

                if (orderGroup) {
                  orderGroup.orders.push(orderView);
                }
              });
            }
          }
        }, {
          key: "changeDisplayFormat",
          value: function changeDisplayFormat(deliveryDate) {
            this.displayFormat = this.datePipe.transform(deliveryDate, this.userSettings.hourFormat, this.userSettings.dateFormat, this.dateType);
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

        return OrderHistoryPage;
      }();

      OrderHistoryPage.ɵfac = function OrderHistoryPage_Factory(t) {
        return new (t || OrderHistoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_sync_order_sync_service__WEBPACK_IMPORTED_MODULE_11__["OrderSyncService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_log_log_service__WEBPACK_IMPORTED_MODULE_12__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_13__["MobileContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_14__["MblsAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_pipes_date_pipe_date_pipe__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]));
      };

      OrderHistoryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OrderHistoryPage,
        selectors: [["app-order-history"]],
        viewQuery: function OrderHistoryPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.datePicker = _t.first);
          }
        },
        decls: 25,
        vars: 37,
        consts: [["slot", "start"], ["src", "assets/images/logo_menu.png"], [1, "delivery-date"], ["slot", "end"], ["slot", "icon-only", 3, "click"], ["size", "lg", "slot", "end", 3, "icon"], ["slot", "icon-only", 3, "click", 4, "ngIf"], ["hidden", "", 3, "cancelText", "doneText", "min", "max", "displayFormat", "ngModel", "ngModelChange", "ionChange"], ["datePicker", ""], ["bufferRatio", "6", 3, "items", "trackBy", "headerFn", "approxItemHeight"], ["itemList", ""], ["class", "item-ios-with-padding group-item-divider", 3, "ngClass", 4, "virtualHeader"], ["class", "item-no-padding ion-text-wrap", 3, "click", 4, "virtualItem"], ["class", "italic text-muted ion-padding", 4, "ngIf"], ["class", "item-ios-with-padding group-item-divider", 3, "hidden", "ngClass", 4, "ngFor", "ngForOf"], ["size", "lg", 3, "icon"], [1, "item-ios-with-padding", "group-item-divider", 3, "ngClass"], ["color", "primary"], [3, "translate"], ["slot", "end", 3, "ngModel", "ngModelChange"], [1, "item-no-padding", "ion-text-wrap", 3, "click"], [1, "order-item-fill", 3, "orderView", "index", "isforHistory"], [1, "italic", "text-muted", "ion-padding"], ["lines", "none"], [1, "text-center"], [1, "item-ios-with-padding", "group-item-divider", 3, "hidden", "ngClass"], ["color", "primary", 4, "ngIf"], ["class", "future-order-not-allowed-message", 3, "translate", 4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "future-order-not-allowed-message", 3, "translate"], [3, "ngModel", "ngModelChange"]],
        template: function OrderHistoryPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-menu-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "DatePipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderHistoryPage_Template_ion_button_click_9_listener() {
              return ctx.getOrders(ctx.deliveryDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OrderHistoryPage_ion_button_11_Template, 2, 2, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-datetime", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderHistoryPage_Template_ion_datetime_ngModelChange_13_listener($event) {
              return ctx.deliveryDate = $event;
            })("ngModelChange", function OrderHistoryPage_Template_ion_datetime_ngModelChange_13_listener() {
              return ctx.changeDisplayFormat(ctx.deliveryDate);
            })("ionChange", function OrderHistoryPage_Template_ion_datetime_ionChange_13_listener() {
              return ctx.getOrders(ctx.deliveryDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "DatePipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-virtual-scroll", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OrderHistoryPage_ion_item_divider_20_Template, 7, 4, "ion-item-divider", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderHistoryPage_ion_item_21_Template, 2, 3, "ion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OrderHistoryPage_ion_item_group_22_Template, 5, 3, "ion-item-group", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OrderHistoryPage_ion_item_divider_24_Template, 7, 6, "ion-item-divider", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](7, 15, ctx.displayFormat, ctx.userSettings.hourFormat, ctx.userSettings.dateFormat, ctx.dateType));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDatePickerVisible());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 20, "actions.cancel"))("doneText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 22, "actions.accept"))("min", ctx.minDate)("max", ctx.maxDate)("displayFormat", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBindV"](17, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](32, _c3, ctx.datePickerDisplayFormat, ctx.userSettings.hourFormat, ctx.userSettings.dateFormat, ctx.datePickerType)))("ngModel", ctx.deliveryDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.activeOrders)("trackBy", ctx.identify)("headerFn", ctx.showGroupHeader)("approxItemHeight", "76px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.activeOrders || ctx.activeOrders.length < 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orderGroups);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["VirtualHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["VirtualItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItemDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBadge"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _app_components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_20__["OrderItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItemGroup"]],
        pipes: [_app_pipes_date_pipe_date_pipe__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]],
        styles: [".provider_group[_ngcontent-%COMP%] {\n  background-color: #2d2d2d;\n  color: whitesmoke;\n}\n\n.group-item-divider[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.label-md[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.item-md[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 1px;\n}\n\n.future-order-not-allowed-message[_ngcontent-%COMP%] {\n  float: right;\n  color: red;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url('logo_faded.e0e432f717024e160071.png');\n  background-repeat: no-repeat;\n  background-size: 100px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSw0REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByb3ZpZGVyX2dyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5ncm91cC1pdGVtLWRpdmlkZXIge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRlbGl2ZXJ5LWRhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pdGVtLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmZ1dHVyZS1vcmRlci1ub3QtYWxsb3dlZC1tZXNzYWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb19mYWRlZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4iLCIucHJvdmlkZXJfZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmdyb3VwLWl0ZW0tZGl2aWRlciB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGVsaXZlcnktZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0tbWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uY29sIHtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4uZnV0dXJlLW9yZGVyLW5vdC1hbGxvd2VkLW1lc3NhZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvX2ZhZGVkLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */"]
      });
      return OrderHistoryPage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=8-es5.0552168bbd4609e8ae5b.js.map