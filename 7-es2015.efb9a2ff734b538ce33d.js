(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/app/pages/notification-center/notification-center.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/notification-center/notification-center.module.ts ***!
  \*************************************************************************/
/*! exports provided: NotificationCenterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCenterPageModule", function() { return NotificationCenterPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_pages_notification_center_notification_center_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pages/notification-center/notification-center.page */ "./src/app/pages/notification-center/notification-center.page.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");











const routes = [
    {
        path: '',
        component: _app_pages_notification_center_notification_center_page__WEBPACK_IMPORTED_MODULE_5__["NotificationCenterPage"]
    }
];
let NotificationCenterPageModule = /*@__PURE__*/ (() => {
    class NotificationCenterPageModule {
    }
    NotificationCenterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationCenterPageModule });
    NotificationCenterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NotificationCenterPageModule_Factory(t) { return new (t || NotificationCenterPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ngx_moment__WEBPACK_IMPORTED_MODULE_8__["MomentModule"],
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ]] });
    return NotificationCenterPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationCenterPageModule, { declarations: [_app_pages_notification_center_notification_center_page__WEBPACK_IMPORTED_MODULE_5__["NotificationCenterPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_8__["MomentModule"],
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]] });
})();



/***/ }),

/***/ "./src/app/pages/notification-center/notification-center.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/notification-center/notification-center.page.ts ***!
  \***********************************************************************/
/*! exports provided: NotificationCenterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationCenterPage", function() { return NotificationCenterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_pages_order_detail_tabs_order_detail_tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/pages/order-detail-tabs/order-detail-tabs.page */ "./src/app/pages/order-detail-tabs/order-detail-tabs.page.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/notification-service/notification.service */ "./src/app/services/notification-service/notification.service.ts");
/* harmony import */ var _services_notification_store_notification_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/notification-store/notification-store.service */ "./src/app/services/notification-store/notification-store.service.ts");
/* harmony import */ var _services_order_service_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/order-service/order.service */ "./src/app/services/order-service/order.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/mbls-analytics-service/MblsAnalyticsService */ "./src/app/services/mbls-analytics-service/MblsAnalyticsService.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm2015/ngx-moment.js");


















const _c0 = ["notificationListContent"];
const _c1 = function (a0, a1) { return { "new": a0, "fadeout": a1 }; };
function NotificationCenterPage_ion_item_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationCenterPage_ion_item_16_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const notification_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.notificationClicked(notification_r2.orderId.toString()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "amTimeAgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationCenterPage_ion_item_16_Template_ion_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const notification_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.openNotification(notification_r2.orderId.toString()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const notification_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c1, !notification_r2.read, notification_r2.read));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", notification_r2.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r2.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, notification_r2.timestamp));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 7, "actions.view"), " ");
    }
}
const _c2 = function () { return ["fas", "trash"]; };
const _c3 = function () { return ["fas", "check"]; };
const CONFIG = {
    GA: {
        PAGE_NAME: 'NotificationCenterPage',
    }
};
let NotificationCenterPage = /*@__PURE__*/ (() => {
    class NotificationCenterPage {
        constructor(notificationService, notificationStore, orderService, translateService, log, toastCtrl, modalCtrl, ga, ngZone) {
            this.notificationService = notificationService;
            this.notificationStore = notificationStore;
            this.orderService = orderService;
            this.translateService = translateService;
            this.log = log;
            this.toastCtrl = toastCtrl;
            this.modalCtrl = modalCtrl;
            this.ga = ga;
            this.ngZone = ngZone;
            this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            this.notifications = [];
        }
        ionViewDidEnter() {
            this.ga.trackView(CONFIG.GA.PAGE_NAME).catch(error => this.log.info(`Unable to track view ${CONFIG.GA.PAGE_NAME} with GA`, error));
        }
        ionViewWillEnter() {
            this.notificationStore.ready()
                .then(() => {
                this.cleanOldNotifications().subscribe(() => {
                }, (error) => {
                    this.log.error('Unable to clean old notification', error);
                }, () => {
                    this.readAllNotifications();
                });
                this.notificationStore.getLiveChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
                    .subscribe((notificationChange) => {
                    this.ngZone.run(() => {
                        this.manageNewNotification(notificationChange.doc);
                    });
                });
            });
        }
        ionViewDidLeave() {
            this.unsubscribe.next();
        }
        ionViewWillUnload() {
            this.unsubscribe.complete();
        }
        notificationClicked(orderId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.readNotification(orderId).subscribe();
            });
        }
        readNotification(orderId) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](subscriber => {
                if (orderId) {
                    const notification = this.notifications.find(n => (n.orderId.toString() === orderId.toString() && !n.read));
                    if (notification && !notification.read) {
                        // save in store
                        this.setNotificationStatus(notification._id, true);
                        this.notificationService.notificationRead({ orderId, notificationType: notification.notificationType })
                            .subscribe(() => {
                            this.notificationStore.put(notification).subscribe();
                            subscriber.next();
                        }, error => {
                            // nothing to do
                            this.openToast('notifications.update_unsuccessful');
                            this.setNotificationStatus(notification._id, false);
                            this.log.error('Unable to save changed notification', error);
                            subscriber.error(error);
                            subscriber.complete();
                        }, () => {
                            subscriber.next();
                            subscriber.complete();
                        });
                    }
                }
            });
        }
        setNotificationStatus(id, read) {
            const notification = this.notifications.find(n => n._id === id);
            if (notification) {
                notification.read = read;
            }
        }
        openNotification(orderId) {
            if (orderId) {
                // create Order view for item
                this.orderService.getOrderById(orderId.toString())
                    .subscribe((order) => {
                    this.openOrder(order);
                }, () => {
                    this.openToast('notifications.orderNotFound');
                });
            }
        }
        removeAllNotifications() {
            this.notifications.forEach(notification => this.notificationStore.remove(notification).subscribe());
            if (this.notifications.some(notification => !notification.read)) {
                this.openToast('notifications.unreadNotification');
            }
        }
        markAllAsRead() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.notifications.forEach((notification) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (!notification.read) {
                        yield this.readNotification(String(notification.orderId)).subscribe();
                    }
                }));
            });
        }
        cleanOldNotifications() {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](subscriber => {
                this.notificationService.removeOldDocs().subscribe(() => {
                }, (error) => {
                    this.log.error('Error while cleaning old notifications', error);
                    subscriber.error(error);
                    subscriber.complete();
                }, () => {
                    subscriber.next();
                    subscriber.complete();
                });
            });
        }
        readAllNotifications() {
            this.notificationStore.allDocs()
                .subscribe((notifications) => {
                this.ngZone.run(() => {
                    this.notifications = notifications;
                });
            });
        }
        manageNewNotification(notification) {
            this.readAllNotifications();
        }
        openOrder(order) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const itemModal = yield this.modalCtrl.create({
                    id: 'order-detail-tabs-page',
                    component: _app_pages_order_detail_tabs_order_detail_tabs_page__WEBPACK_IMPORTED_MODULE_2__["OrderDetailTabsPage"],
                    componentProps: {
                        orderView: this.orderService.constructOrderView(order)
                    }
                });
                yield itemModal.present();
            });
        }
        openToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    message: this.translateService.instant(message),
                    duration: 2 * 1000,
                    cssClass: 'processing-toast'
                });
                yield toast.present();
            });
        }
    }
    NotificationCenterPage.ɵfac = function NotificationCenterPage_Factory(t) { return new (t || NotificationCenterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_store_notification_store_service__WEBPACK_IMPORTED_MODULE_6__["NotificationStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_log_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_11__["MblsAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
    NotificationCenterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationCenterPage, selectors: [["app-notification-center"]], viewQuery: function NotificationCenterPage_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            }
        }, decls: 17, vars: 8, consts: [["slot", "start"], ["src", "assets/images/logo_menu.png"], ["slot", "end"], ["slot", "icon-only", 3, "click"], [1, "fa-lg", 3, "icon"], [1, "ion-padding"], ["notificationListContent", ""], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [1, "ion-text-wrap"], [1, "notification"], ["fill", "clear", "slot", "end", 3, "click"]], template: function NotificationCenterPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-menu-button");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-buttons", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationCenterPage_Template_ion_button_click_9_listener() { return ctx.removeAllNotifications(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationCenterPage_Template_ion_button_click_11_listener() { return ctx.markAllAsRead(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-content", 5, 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-list");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NotificationCenterPage_ion_item_16_Template, 13, 12, "ion-item", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "pages.drawer-menu.notification-center"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.notifications);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonText"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], ngx_moment__WEBPACK_IMPORTED_MODULE_14__["TimeAgoPipe"]], styles: ["ion-label[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n.new[_ngcontent-%COMP%] {\n  --ion-background-color: #daecfd;\n}\n\nion-item.new[_ngcontent-%COMP%] {\n  border-bottom: 1px solid whitesmoke;\n}\n\n.new[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.new[_ngcontent-%COMP%]    ~ fa-icon.unread[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n}\n\n.fadeout[_ngcontent-%COMP%] {\n  transition: all ease 0.5s;\n}\n\n.notification[_ngcontent-%COMP%] {\n  overflow: auto;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi1jZW50ZXIvbm90aWZpY2F0aW9uLWNlbnRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi1jZW50ZXIvbm90aWZpY2F0aW9uLWNlbnRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUVFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi1jZW50ZXIvbm90aWZpY2F0aW9uLWNlbnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4ubmV3IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2RhZWNmZDtcbn1cblxuaW9uLWl0ZW0ubmV3IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbi5uZXcgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5ldyB+IGZhLWljb24udW5yZWFkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uZmFkZW91dCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cbn1cbiIsImlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5uZXcge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZGFlY2ZkO1xufVxuXG5pb24taXRlbS5uZXcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuLm5ldyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmV3IH4gZmEtaWNvbi51bnJlYWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5mYWRlb3V0IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn0iXX0= */"] });
    return NotificationCenterPage;
})();



/***/ })

}]);
//# sourceMappingURL=7-es2015.efb9a2ff734b538ce33d.js.map