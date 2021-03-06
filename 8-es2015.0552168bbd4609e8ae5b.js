(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/pages/order-history/order-history.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-history.page */ "./src/app/pages/order-history/order-history.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");











const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPage"]
    }
];
let OrderHistoryPageModule = /*@__PURE__*/ (() => {
    class OrderHistoryPageModule {
    }
    OrderHistoryPageModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: OrderHistoryPageModule });
    OrderHistoryPageModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function OrderHistoryPageModule_Factory(t) { return new (t || OrderHistoryPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            ]] });
    return OrderHistoryPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrderHistoryPageModule, { declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]] });
})();



/***/ }),

/***/ "./src/app/pages/order-history/order-history.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function() { return OrderHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_order_helper_order_group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/order-helper/order-group.model */ "./src/app/models/order-helper/order-group.model.ts");
/* harmony import */ var _models_settings_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/settings/settings.model */ "./src/app/models/settings/settings.model.ts");
/* harmony import */ var _models_units_and_format_date_format_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/units-and-format/date-format.enum */ "./src/app/models/units-and-format/date-format.enum.ts");
/* harmony import */ var _app_pages_order_detail_tabs_order_detail_tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/order-detail-tabs/order-detail-tabs.page */ "./src/app/pages/order-detail-tabs/order-detail-tabs.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_order_service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/order-service/order.service */ "./src/app/services/order-service/order.service.ts");
/* harmony import */ var _services_order_sync_order_sync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/order-sync/order-sync.service */ "./src/app/services/order-sync/order-sync.service.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/mobile-configuration-service/mobile-context.service */ "./src/app/services/mobile-configuration-service/mobile-context.service.ts");
/* harmony import */ var _services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/mbls-analytics-service/MblsAnalyticsService */ "./src/app/services/mbls-analytics-service/MblsAnalyticsService.ts");
/* harmony import */ var _app_pipes_date_pipe_date_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/pipes/date-pipe/date.pipe */ "./src/app/pipes/date-pipe/date.pipe.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/components/order-item/order-item.component */ "./src/app/components/order-item/order-item.component.ts");

























const _c0 = ["datePicker"];
const _c1 = function () { return ["fal", "calendar"]; };
function OrderHistoryPage_ion_button_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function OrderHistoryPage_ion_button_11_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r7.showTimePicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](1, _c1));
    }
}
function OrderHistoryPage_ion_item_divider_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-item-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "ion-badge", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "ion-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function OrderHistoryPage_ion_item_divider_20_Template_ion_toggle_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const group_r9 = ctx.$implicit; return group_r9.visible = $event; })("ngModelChange", function OrderHistoryPage_ion_item_divider_20_Template_ion_toggle_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const group_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r12.toggleGroupView(group_r9.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const group_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", group_r9.viewClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](group_r9.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("translate", group_r9.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", group_r9.visible);
    }
}
function OrderHistoryPage_ion_item_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function OrderHistoryPage_ion_item_21_Template_ion_item_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r16); const orderItem_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r15.selectItem($event, orderItem_r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "order-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const orderItem_r13 = ctx.$implicit;
        const i_r14 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("orderView", orderItem_r13)("index", i_r14)("isforHistory", true);
    }
}
function OrderHistoryPage_ion_item_group_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-item-group", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ion-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "ion-label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](4, 1, "messages.empty_list"));
    }
}
function OrderHistoryPage_ion_item_divider_24_ion_badge_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-badge", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const hiddenGroup_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](hiddenGroup_r17.size);
    }
}
function OrderHistoryPage_ion_item_divider_24_span_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "span", 29);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("translate", "messages.not_allowed_to_see_future_orders");
    }
}
function OrderHistoryPage_ion_item_divider_24_ion_toggle_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-toggle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function OrderHistoryPage_ion_item_divider_24_ion_toggle_6_Template_ion_toggle_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r24); const hiddenGroup_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit; return hiddenGroup_r17.visible = $event; })("ngModelChange", function OrderHistoryPage_ion_item_divider_24_ion_toggle_6_Template_ion_toggle_ngModelChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r24); const hiddenGroup_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r25.toggleGroupView(hiddenGroup_r17.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const hiddenGroup_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", hiddenGroup_r17.visible);
    }
}
function OrderHistoryPage_ion_item_divider_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-item-divider", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, OrderHistoryPage_ion_item_divider_24_ion_badge_2_Template, 2, 1, "ion-badge", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, OrderHistoryPage_ion_item_divider_24_span_5_Template, 1, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, OrderHistoryPage_ion_item_divider_24_ion_toggle_6_Template, 1, 1, "ion-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    }
    if (rf & 2) {
        const hiddenGroup_r17 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("hidden", !hiddenGroup_r17.hidden)("ngClass", hiddenGroup_r17.viewClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", hiddenGroup_r17.canHaulerSeeFutureOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("translate", hiddenGroup_r17.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !hiddenGroup_r17.canHaulerSeeFutureOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", hiddenGroup_r17.canHaulerSeeFutureOrders);
    }
}
const _c2 = function () { return ["fas", "sync"]; };
const _c3 = function (a0, a1, a2, a4) { return [a0, a1, a2, null, a4, true]; };
const CONFIG = {
    GA: {
        PAGE_NAME: 'OrderHistoryPage',
    }
};
let OrderHistoryPage = /*@__PURE__*/ (() => {
    class OrderHistoryPage {
        constructor(modalCtrl, orderService, loadingCtrl, orderSyncService, log, mobileContextService, ga, datePipe) {
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
            this.showGroupHeader = (record, recordIndex, records) => {
                try {
                    if (recordIndex === 0 || (record.order.tenantName !== records[recordIndex - 1].order.tenantName)) {
                        if (this.orderGroups) {
                            const group = this.orderGroups.find(value => value.name === record.order.tenantName);
                            if (group) {
                                return group;
                            }
                        }
                    }
                }
                catch (e) {
                }
                return null;
            };
            this.orderSyncService.sendPaymentUpdate().subscribe(orderChange => {
                if (orderChange) {
                    const orderView = this.activeOrders.find(oV => oV.order.id === orderChange.id);
                    if (orderView) {
                        orderChange.uuid = orderView.order.uuid;
                        orderView.order = orderChange;
                    }
                }
            });
            this.mobileContextService.userSettingsObservable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe))
                .subscribe((userSettings) => {
                this.userSettings = userSettings;
            });
        }
        // noinspection JSUnusedGlobalSymbols
        ionViewDidEnter() {
            this.ga.trackView(CONFIG.GA.PAGE_NAME).catch(error => this.log.info(`Unable to track view ${CONFIG.GA.PAGE_NAME} with GA`, error));
            this.getOrders(this.deliveryDate);
        }
        /***
         * get orders by their delivery dates
         */
        getOrders(deliveryDate) {
            this.loading = this.loadingCtrl.create()
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield res.present();
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
                    this.orderSyncService.getDatedOrders(moment__WEBPACK_IMPORTED_MODULE_6__(deliveryDate).format('YYYY-MM-DD')),
                    this.mobileContextService.haulerObservable
                ])
                    .subscribe(([orders, hauler]) => {
                    this.allOrders = [];
                    this.orderGroups = [];
                    this.activeOrders = [];
                    orders.forEach(order => {
                        this.allOrders.push(this.orderService.constructOrderView(order));
                    });
                    this.hauler = hauler;
                    this.activeOrders = this.sortOrders(this.allOrders, 'tenantName');
                    this.manageGroups(this.allOrders);
                    this.canHaulerSeeFutureOrder();
                    res.dismiss();
                }, err => {
                    res.dismiss();
                    this.log.error(err);
                });
            }));
        }
        identify(index, orderView) {
            return orderView.order.uuid.toString();
        }
        toggleGroupView(groupName) {
            const orderGroup = this.orderGroups.find(oG => oG.name === groupName);
            if (orderGroup) {
                if (orderGroup.hidden) {
                    this.activeOrders = this.activeOrders.filter(orderView => orderView.order.tenantName !== groupName);
                }
                else {
                    this.activeOrders = this.activeOrders.concat(this.allOrders.filter(orderView => orderView.order.tenantName === groupName));
                }
                orderGroup.hidden = !orderGroup.hidden;
                orderGroup.visible = !orderGroup.visible;
            }
        }
        showTimePicker() {
            this.datePicker.open();
        }
        selectItem(event, orderView) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const itemModal = yield this.modalCtrl.create({
                    id: 'order-detail-tabs-page',
                    component: _app_pages_order_detail_tabs_order_detail_tabs_page__WEBPACK_IMPORTED_MODULE_5__["OrderDetailTabsPage"],
                    componentProps: {
                        orderView: orderView,
                        isforHistory: true
                    }
                });
                itemModal.present();
                itemModal.onDidDismiss().then(
                // (data: { order: Order }) => {
                (eventDetail) => {
                    if (eventDetail && eventDetail.data && eventDetail.data.order) {
                        const transition = eventDetail.data.transition;
                        const view = this.allOrders.find(oV => oV.order.id === eventDetail.data.order.id);
                        if (view && transition) {
                            view.order.local = false;
                            view.order.status = transition.to.name;
                        }
                    }
                });
            });
        }
        /**
         * Sort orders
         *
         */
        sortOrders(orders, prop) {
            const result = [];
            const ordersSorted = orders.reduce((groups, item) => {
                const val = item.order[prop];
                groups[val] = groups[val] || [];
                groups[val].push(item);
                return groups;
            }, {});
            Object.keys(ordersSorted).forEach(item => {
                result.push(...ordersSorted[item]);
            });
            return result;
        }
        canHaulerSeeFutureOrder() {
            if (this.hauler) {
                this.orderGroups.forEach(orderGroup => {
                    const provider = this.hauler.linkedProviders.find(p => p.name === orderGroup.name);
                    const canSeeFutureOrders = !moment__WEBPACK_IMPORTED_MODULE_6__(this.deliveryDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_6__()) ||
                        (provider.configuration && provider.configuration.allowFutureViewForHauler);
                    orderGroup.canHaulerSeeFutureOrders = canSeeFutureOrders;
                    orderGroup.hidden = !canSeeFutureOrders;
                    if (!canSeeFutureOrders) {
                        this.toggleGroupView(orderGroup.name);
                    }
                });
            }
        }
        isDatePickerVisible() {
            if (this.hauler) {
                return this.hauler.linkedProviders.some(provider => provider.configuration.allowFutureViewForHauler);
            }
        }
        manageGroups(orders) {
            if (this.hauler) {
                this.hauler.linkedProviders.forEach(provider => {
                    const orderGroup = new _models_order_helper_order_group_model__WEBPACK_IMPORTED_MODULE_2__["OrderGroup"](provider.name);
                    this.orderGroups.push(orderGroup);
                });
                orders.forEach(orderView => {
                    const orderGroup = this.orderGroups.find(oG => oG.name === orderView.order.tenantName);
                    if (orderGroup) {
                        orderGroup.orders.push(orderView);
                    }
                });
            }
        }
        changeDisplayFormat(deliveryDate) {
            this.displayFormat = this.datePipe.transform(deliveryDate, this.userSettings.hourFormat, this.userSettings.dateFormat, this.dateType);
        }
        ionViewDidLeave() {
            this.unsubscribe.next();
        }
        ionViewWillUnload() {
            this.unsubscribe.complete();
        }
    }
    OrderHistoryPage.??fac = function OrderHistoryPage_Factory(t) { return new (t || OrderHistoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_order_sync_order_sync_service__WEBPACK_IMPORTED_MODULE_11__["OrderSyncService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_log_log_service__WEBPACK_IMPORTED_MODULE_12__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_13__["MobileContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_14__["MblsAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_app_pipes_date_pipe_date_pipe__WEBPACK_IMPORTED_MODULE_15__["DatePipe"])); };
    OrderHistoryPage.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: OrderHistoryPage, selectors: [["app-order-history"]], viewQuery: function OrderHistoryPage_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????staticViewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.datePicker = _t.first);
            }
        }, decls: 25, vars: 37, consts: [["slot", "start"], ["src", "assets/images/logo_menu.png"], [1, "delivery-date"], ["slot", "end"], ["slot", "icon-only", 3, "click"], ["size", "lg", "slot", "end", 3, "icon"], ["slot", "icon-only", 3, "click", 4, "ngIf"], ["hidden", "", 3, "cancelText", "doneText", "min", "max", "displayFormat", "ngModel", "ngModelChange", "ionChange"], ["datePicker", ""], ["bufferRatio", "6", 3, "items", "trackBy", "headerFn", "approxItemHeight"], ["itemList", ""], ["class", "item-ios-with-padding group-item-divider", 3, "ngClass", 4, "virtualHeader"], ["class", "item-no-padding ion-text-wrap", 3, "click", 4, "virtualItem"], ["class", "italic text-muted ion-padding", 4, "ngIf"], ["class", "item-ios-with-padding group-item-divider", 3, "hidden", "ngClass", 4, "ngFor", "ngForOf"], ["size", "lg", 3, "icon"], [1, "item-ios-with-padding", "group-item-divider", 3, "ngClass"], ["color", "primary"], [3, "translate"], ["slot", "end", 3, "ngModel", "ngModelChange"], [1, "item-no-padding", "ion-text-wrap", 3, "click"], [1, "order-item-fill", 3, "orderView", "index", "isforHistory"], [1, "italic", "text-muted", "ion-padding"], ["lines", "none"], [1, "text-center"], [1, "item-ios-with-padding", "group-item-divider", 3, "hidden", "ngClass"], ["color", "primary", 4, "ngIf"], ["class", "future-order-not-allowed-message", 3, "translate", 4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "future-order-not-allowed-message", 3, "translate"], [3, "ngModel", "ngModelChange"]], template: function OrderHistoryPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "ion-buttons", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ion-menu-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "ion-title", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](7, "DatePipe");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ion-buttons", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "ion-button", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function OrderHistoryPage_Template_ion_button_click_9_listener() { return ctx.getOrders(ctx.deliveryDate); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "fa-icon", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, OrderHistoryPage_ion_button_11_Template, 2, 2, "ion-button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "ion-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ion-datetime", 7, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function OrderHistoryPage_Template_ion_datetime_ngModelChange_13_listener($event) { return ctx.deliveryDate = $event; })("ngModelChange", function OrderHistoryPage_Template_ion_datetime_ngModelChange_13_listener() { return ctx.changeDisplayFormat(ctx.deliveryDate); })("ionChange", function OrderHistoryPage_Template_ion_datetime_ionChange_13_listener() { return ctx.getOrders(ctx.deliveryDate); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](15, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](16, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](17, "DatePipe");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "ion-virtual-scroll", 9, 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, OrderHistoryPage_ion_item_divider_20_Template, 7, 4, "ion-item-divider", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, OrderHistoryPage_ion_item_21_Template, 2, 3, "ion-item", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, OrderHistoryPage_ion_item_group_22_Template, 5, 3, "ion-item-group", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "ion-list");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, OrderHistoryPage_ion_item_divider_24_Template, 7, 6, "ion-item-divider", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind4"](7, 15, ctx.displayFormat, ctx.userSettings.hourFormat, ctx.userSettings.dateFormat, ctx.dateType));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](31, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.isDatePickerVisible());
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("cancelText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](15, 20, "actions.cancel"))("doneText", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](16, 22, "actions.accept"))("min", ctx.minDate)("max", ctx.maxDate)("displayFormat", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBindV"](17, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction4"](32, _c3, ctx.datePickerDisplayFormat, ctx.userSettings.hourFormat, ctx.userSettings.dateFormat, ctx.datePickerType)))("ngModel", ctx.deliveryDate);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("items", ctx.activeOrders)("trackBy", ctx.identify)("headerFn", ctx.showGroupHeader)("approxItemHeight", "76px");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.activeOrders || ctx.activeOrders.length < 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.orderGroups);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["VirtualHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["VirtualItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItemDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBadge"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItem"], _app_components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_20__["OrderItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonItemGroup"]], pipes: [_app_pipes_date_pipe_date_pipe__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]], styles: [".provider_group[_ngcontent-%COMP%] {\n  background-color: #2d2d2d;\n  color: whitesmoke;\n}\n\n.group-item-divider[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.label-md[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.delivery-date[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.item-md[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding: 1px;\n}\n\n.future-order-not-allowed-message[_ngcontent-%COMP%] {\n  float: right;\n  color: red;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url('logo_faded.e0e432f717024e160071.png');\n  background-repeat: no-repeat;\n  background-size: 100px;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSw0REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByb3ZpZGVyX2dyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5ncm91cC1pdGVtLWRpdmlkZXIge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRlbGl2ZXJ5LWRhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pdGVtLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmZ1dHVyZS1vcmRlci1ub3QtYWxsb3dlZC1tZXNzYWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb19mYWRlZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4iLCIucHJvdmlkZXJfZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmdyb3VwLWl0ZW0tZGl2aWRlciB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGVsaXZlcnktZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0tbWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uY29sIHtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4uZnV0dXJlLW9yZGVyLW5vdC1hbGxvd2VkLW1lc3NhZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvX2ZhZGVkLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */"] });
    return OrderHistoryPage;
})();



/***/ })

}]);
//# sourceMappingURL=8-es2015.0552168bbd4609e8ae5b.js.map