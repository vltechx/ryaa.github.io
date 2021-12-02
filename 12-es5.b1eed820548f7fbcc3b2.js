function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
  /***/
  "./src/app/pages/trips-report/trips-report.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/trips-report/trips-report.module.ts ***!
    \***********************************************************/

  /*! exports provided: TripsReportPageModule */

  /***/
  function srcAppPagesTripsReportTripsReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripsReportPageModule", function () {
      return TripsReportPageModule;
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


    var _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _trips_report_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./trips-report.page */
    "./src/app/pages/trips-report/trips-report.page.ts");

    var routes = [{
      path: '',
      component: _trips_report_page__WEBPACK_IMPORTED_MODULE_8__["TripsReportPage"]
    }];

    var TripsReportPageModule = /*@__PURE__*/function () {
      var TripsReportPageModule = function TripsReportPageModule() {
        _classCallCheck(this, TripsReportPageModule);
      };

      TripsReportPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TripsReportPageModule
      });
      TripsReportPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TripsReportPageModule_Factory(t) {
          return new (t || TripsReportPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]]
      });
      return TripsReportPageModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TripsReportPageModule, {
        declarations: [_trips_report_page__WEBPACK_IMPORTED_MODULE_8__["TripsReportPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/trips-report/trips-report.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/trips-report/trips-report.page.ts ***!
    \*********************************************************/

  /*! exports provided: TripsReportPage */

  /***/
  function srcAppPagesTripsReportTripsReportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripsReportPage", function () {
      return TripsReportPage;
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


    var _app_pages_trip_report_modal_trip_report_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/pages/trip-report-modal/trip-report-modal.page */
    "./src/app/pages/trip-report-modal/trip-report-modal.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return ["fas", "file-spreadsheet"];
    };

    var _c1 = function _c1() {
      return ["fas", "arrow-right"];
    };

    var _c2 = function _c2() {
      return ["fas", "car"];
    };

    var TripsReportPage = /*@__PURE__*/function () {
      var TripsReportPage = /*#__PURE__*/function () {
        function TripsReportPage(modalCtrl, route, router) {
          var _this = this;

          _classCallCheck(this, TripsReportPage);

          this.modalCtrl = modalCtrl;
          this.route = route;
          this.router = router;
          this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
              _this.report = _this.router.getCurrentNavigation().extras.state.report;
            }
          });
        }

        _createClass(TripsReportPage, [{
          key: "onShowReport",
          value: function onShowReport(reportType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modalPage;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _app_pages_trip_report_modal_trip_report_modal_page__WEBPACK_IMPORTED_MODULE_2__["TripReportModalPage"],
                        componentProps: {
                          report: this.report,
                          reportType: reportType
                        }
                      });

                    case 2:
                      modalPage = _context.sent;
                      _context.next = 5;
                      return modalPage.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return TripsReportPage;
      }();

      TripsReportPage.ɵfac = function TripsReportPage_Factory(t) {
        return new (t || TripsReportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      TripsReportPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TripsReportPage,
        selectors: [["app-trips-report"]],
        decls: 19,
        vars: 17,
        consts: [["slot", "start"], [1, "ion-padding"], [3, "click"], ["slot", "start", 3, "icon"], ["slot", "end", 3, "icon"]],
        template: function TripsReportPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripsReportPage_Template_ion_item_click_9_listener() {
              return ctx.onShowReport("pages.trips-reports.recaps");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "fa-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripsReportPage_Template_ion_item_click_14_listener() {
              return ctx.onShowReport("pages.trips-reports.travels");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "fa-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "fa-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, "pages.report-forms.trips-reports.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "pages.trips-reports.recaps"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, "pages.trips-reports.travels"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: [".item-md[_ngcontent-%COMP%] {\n  background-color: #387ef5;\n  color: white;\n}\n\n#row[_ngcontent-%COMP%]:nth-child(2n+1)   .col[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  color: black;\n}\n\n.header[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  color: black;\n}\n\n.hidden-md[_ngcontent-%COMP%] {\n  border: solid 1px black;\n  border-bottom-style: none;\n  border-right-style: none;\n  color: black;\n}\n\n.hidden-md[_ngcontent-%COMP%]:last-child {\n  border-right: solid 1px black;\n}\n\n.row[_ngcontent-%COMP%]:last-child   .hidden-md[_ngcontent-%COMP%] {\n  border-bottom: solid 1px black;\n}\n\n.row[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n\n.grid[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.date[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL3RyaXBzLXJlcG9ydC90cmlwcy1yZXBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmlwcy1yZXBvcnQvdHJpcHMtcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLDZCQUFBO0FDQ0o7O0FERUU7RUFDRSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyaXBzLXJlcG9ydC90cmlwcy1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5pdGVtLW1kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICNyb3c6bnRoLWNoaWxkKDJuKzEpIC5jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuaGVhZGVyIC5jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuaGlkZGVuLW1kIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuaGlkZGVuLW1kOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IGJsYWNrO1xuICB9XG5cbiAgLnJvdzpsYXN0LWNoaWxkIC5oaWRkZW4tbWQge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcbiAgfVxuXG4gIC5yb3cge1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG5cbiAgLmdyaWQge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmRhdGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuIiwiLml0ZW0tbWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNyb3c6bnRoLWNoaWxkKDJuKzEpIC5jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmhlYWRlciAuY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oaWRkZW4tbWQge1xuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oaWRkZW4tbWQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGJsYWNrO1xufVxuXG4ucm93Omxhc3QtY2hpbGQgLmhpZGRlbi1tZCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcbn1cblxuLnJvdyB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uZ3JpZCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"]
      });
      return TripsReportPage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=12-es5.b1eed820548f7fbcc3b2.js.map