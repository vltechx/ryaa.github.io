(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@angular/cdk/esm2015/bidi.js":
/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/bidi.js ***!
  \***************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */

const DIR_DOCUMENT = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}
let Directionality = /*@__PURE__*/ (() => {
    class Directionality {
        /**
         * @param {?=} _document
         */
        constructor(_document) {
            /**
             * The current 'ltr' or 'rtl' value.
             */
            this.value = 'ltr';
            /**
             * Stream that emits whenever the 'ltr' / 'rtl' state changes.
             */
            this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            if (_document) {
                // TODO: handle 'auto' value -
                // We still need to account for dir="auto".
                // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
                // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
                /** @type {?} */
                const bodyDir = _document.body ? _document.body.dir : null;
                /** @type {?} */
                const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
                /** @type {?} */
                const value = bodyDir || htmlDir;
                this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.change.complete();
        }
    }
    Directionality.ɵfac = function Directionality_Factory(t) { return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DIR_DOCUMENT, 8)); };
    Directionality.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Directionality, factory: Directionality.ɵfac, providedIn: 'root' });
    /** @nocollapse */ Directionality.ngInjectableDef = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
})();
let Dir = /*@__PURE__*/ (() => {
    class Dir {
        constructor() {
            /**
             * Normalized direction that accounts for invalid/unsupported values.
             */
            this._dir = 'ltr';
            /**
             * Whether the `value` has been set to its initial value.
             */
            this._isInitialized = false;
            /**
             * Event emitted when the direction changes.
             */
            this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * \@docs-private
         * @return {?}
         */
        get dir() { return this._dir; }
        /**
         * @param {?} value
         * @return {?}
         */
        set dir(value) {
            /** @type {?} */
            const old = this._dir;
            /** @type {?} */
            const normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        }
        /**
         * Current layout direction of the element.
         * @return {?}
         */
        get value() { return this.dir; }
        /**
         * Initialize once default value has been set.
         * @return {?}
         */
        ngAfterContentInit() {
            this._isInitialized = true;
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.change.complete();
        }
    }
    Dir.ɵfac = function Dir_Factory(t) { return new (t || Dir)(); };
    Dir.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Dir, selectors: [["", "dir", ""]], hostVars: 1, hostBindings: function Dir_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("dir", ctx._rawDir);
            }
        }, inputs: { dir: "dir" }, outputs: { change: "dirChange" }, exportAs: ["dir"], features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: Directionality, useExisting: Dir }])] });
    return Dir;
})();
let BidiModule = /*@__PURE__*/ (() => {
    class BidiModule {
    }
    BidiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BidiModule });
    BidiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BidiModule_Factory(t) { return new (t || BidiModule)(); } });
    return BidiModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BidiModule, { declarations: [Dir], exports: [Dir] }); })();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/coercion.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/coercion.js ***!
  \*******************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(( /** @type {?} */(value)))) && !isNaN(Number(value));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/collections.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/collections.js ***!
  \**********************************************************/
/*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */

class DataSource {
}
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */
function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * DataSource wrapper for a native array.
 * @template T
 */
class ArrayDataSource extends DataSource {
    /**
     * @param {?} _data
     */
    constructor(_data) {
        super();
        this._data = _data;
    }
    /**
     * @return {?}
     */
    connect() {
        return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
class SelectionModel {
    /**
     * @param {?=} _multiple
     * @param {?=} initiallySelectedValues
     * @param {?=} _emitChanges
     */
    constructor(_multiple = false, initiallySelectedValues, _emitChanges = true) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Event emitted when the value has changed.
         * @deprecated Use `changed` instead.
         * \@breaking-change 8.0.0 To be changed to `changed`
         */
        this.onChange = this.changed;
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach(( /**
                 * @param {?} value
                 * @return {?}
                 *//**
                 * @param {?} value
                 * @return {?}
                 */ value => this._markSelected(value)));
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    /**
     * Selected values.
     * @return {?}
     */
    get selected() {
        if (!this._selected) {
            this._selected = Array.from(this._selection.values());
        }
        return this._selected;
    }
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    select(...values) {
        this._verifyValueAssignment(values);
        values.forEach(( /**
         * @param {?} value
         * @return {?}
         *//**
         * @param {?} value
         * @return {?}
         */ value => this._markSelected(value)));
        this._emitChangeEvent();
    }
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach(( /**
         * @param {?} value
         * @return {?}
         *//**
         * @param {?} value
         * @return {?}
         */ value => this._unmarkSelected(value)));
        this._emitChangeEvent();
    }
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    clear() {
        this._unmarkAll();
        this._emitChangeEvent();
    }
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    isSelected(value) {
        return this._selection.has(value);
    }
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    isEmpty() {
        return this._selection.size === 0;
    }
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    hasValue() {
        return !this.isEmpty();
    }
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    sort(predicate) {
        if (this._multiple && this.selected) {
            ( /** @type {?} */(this._selected)).sort(predicate);
        }
    }
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    isMultipleSelection() {
        return this._multiple;
    }
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    _emitChangeEvent() {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    }
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _markSelected(value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    }
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _unmarkSelected(value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    }
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    _unmarkAll() {
        if (!this.isEmpty()) {
            this._selection.forEach(( /**
             * @param {?} value
             * @return {?}
             *//**
             * @param {?} value
             * @return {?}
             */ value => this._unmarkSelected(value)));
        }
    }
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    }
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}
let UniqueSelectionDispatcher = /*@__PURE__*/ (() => {
    class UniqueSelectionDispatcher {
        constructor() {
            this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param {?} id ID of the item.
         * @param {?} name Name of the item.
         * @return {?}
         */
        notify(id, name) {
            for (let listener of this._listeners) {
                listener(id, name);
            }
        }
        /**
         * Listen for future changes to item selection.
         * @param {?} listener
         * @return {?} Function used to deregister listener
         */
        listen(listener) {
            this._listeners.push(listener);
            return ( /**
             * @return {?}
             */() => {
                this._listeners = this._listeners.filter(( /**
                 * @param {?} registered
                 * @return {?}
                 */(registered) => {
                    return listener !== registered;
                }));
            });
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._listeners = [];
        }
    }
    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) { return new (t || UniqueSelectionDispatcher)(); };
    UniqueSelectionDispatcher.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UniqueSelectionDispatcher, factory: UniqueSelectionDispatcher.ɵfac, providedIn: 'root' });
    /** @nocollapse */ UniqueSelectionDispatcher.ngInjectableDef = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
    return UniqueSelectionDispatcher;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/platform.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/platform.js ***!
  \*******************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType, _supportsShadowDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */

let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && (( /** @type {?} */(Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
let Platform = /*@__PURE__*/ (() => {
    class Platform {
        /**
         * \@breaking-change 8.0.0 remove optional decorator
         * @param {?=} _platformId
         */
        constructor(_platformId) {
            this._platformId = _platformId;
            /**
             * Whether the Angular application is being rendered in the browser.
             * We want to use the Angular platform check because if the Document is shimmed
             * without the navigator, the following checks will fail. This is preferred because
             * sometimes the Document may be shimmed without the user's knowledge or intention
             */
            this.isBrowser = this._platformId ?
                Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
            /**
             * Whether the current browser is Microsoft Edge.
             */
            this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
            /**
             * Whether the current rendering engine is Microsoft Trident.
             */
            this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
            /**
             * Whether the current rendering engine is Blink.
             */
            // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
            this.BLINK = this.isBrowser && (!!((( /** @type {?} */(window))).chrome || hasV8BreakIterator) &&
                typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
            /**
             * Whether the current rendering engine is WebKit.
             */
            // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
            // ensure that Webkit runs standalone and is not used as another engine's base.
            this.WEBKIT = this.isBrowser &&
                /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
            /**
             * Whether the current platform is Apple iOS.
             */
            this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !('MSStream' in window);
            /**
             * Whether the current browser is Firefox.
             */
            // It's difficult to detect the plain Gecko engine, because most of the browsers identify
            // them self as Gecko-like browsers and modify the userAgent's according to that.
            // Since we only cover one explicit Firefox case, we can simply check for Firefox
            // instead of having an unstable check for Gecko.
            this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
            /**
             * Whether the current platform is Android.
             */
            // Trident on mobile adds the android platform to the userAgent to trick detections.
            this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
            /**
             * Whether the current browser is Safari.
             */
            // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
            // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
            // Safari browser should also use Webkit as its layout engine.
            this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        }
    }
    Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); };
    Platform.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Platform, factory: Platform.ɵfac, providedIn: 'root' });
    /** @nocollapse */ Platform.ngInjectableDef = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
})();
let PlatformModule = /*@__PURE__*/ (() => {
    class PlatformModule {
    }
    PlatformModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlatformModule });
    PlatformModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlatformModule_Factory(t) { return new (t || PlatformModule)(); } });
    return PlatformModule;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
let supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(( /**
     * @param {?} value
     * @return {?}
     *//**
     * @param {?} value
     * @return {?}
     */ value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    })));
    return supportedInputTypes;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', ( /** @type {?} */(null)), Object.defineProperty({}, 'passive', {
                get: ( /**
                 * @return {?}
                 */() => supportsPassiveEvents = true)
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const RtlScrollAxisType = /*@__PURE__*/ (function () {
    var RtlScrollAxisType = {
        /**
         * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
         * all the way right.
         */
        NORMAL: 0,
        /**
         * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
         * all the way right.
         */
        NEGATED: 1,
        /**
         * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
         * all the way right.
         */
        INVERTED: 2,
    };
    RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
    RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
    RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
    return RtlScrollAxisType;
}());
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
let rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in ( /** @type {?} */(document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        const scrollContainer = document.createElement('div');
        /** @type {?} */
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        const content = document.createElement('div');
        /** @type {?} */
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        ( /** @type {?} */(scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        /** @type {?} */
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && ((( /** @type {?} */(head))).createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/scrolling.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/scrolling.js ***!
  \********************************************************/
/*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */



const _c0 = ["contentWrapper"];
const _c1 = ["*"];
const VIRTUAL_SCROLL_STRATEGY = /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
class FixedSizeVirtualScrollStrategy {
    /**
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    constructor(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    }
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onContentScrolled() {
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onContentRendered() { }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onRenderedOffsetChanged() { }
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    scrollToIndex(index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    }
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    _updateTotalContentSize() {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    }
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    _updateRenderedRange() {
        if (!this._viewport) {
            return;
        }
        /** @type {?} */
        const scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */
        const firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */
        const renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        /** @type {?} */
        const viewportSize = this._viewport.getViewportSize();
        /** @type {?} */
        const dataLength = this._viewport.getDataLength();
        /** @type {?} */
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            /** @type {?} */
            const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    }
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
let CdkFixedSizeVirtualScroll = /*@__PURE__*/ (() => {
    class CdkFixedSizeVirtualScroll {
        constructor() {
            this._itemSize = 20;
            this._minBufferPx = 100;
            this._maxBufferPx = 200;
            /**
             * The scroll strategy used by this directive.
             */
            this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /**
         * The size of the items in the list (in pixels).
         * @return {?}
         */
        get itemSize() { return this._itemSize; }
        /**
         * @param {?} value
         * @return {?}
         */
        set itemSize(value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */
        get minBufferPx() { return this._minBufferPx; }
        /**
         * @param {?} value
         * @return {?}
         */
        set minBufferPx(value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */
        get maxBufferPx() { return this._maxBufferPx; }
        /**
         * @param {?} value
         * @return {?}
         */
        set maxBufferPx(value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); }
        /**
         * @return {?}
         */
        ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
    }
    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) { return new (t || CdkFixedSizeVirtualScroll)(); };
    CdkFixedSizeVirtualScroll.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkFixedSizeVirtualScroll, selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]], inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                    provide: VIRTUAL_SCROLL_STRATEGY,
                    useFactory: _fixedSizeVirtualScrollStrategyFactory,
                    deps: [/*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                 * @return {?}
                                 */() => CdkFixedSizeVirtualScroll))]
                }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
    return CdkFixedSizeVirtualScroll;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
const DEFAULT_SCROLL_TIME = 20;
let ScrollDispatcher = /*@__PURE__*/ (() => {
    class ScrollDispatcher {
        /**
         * @param {?} _ngZone
         * @param {?} _platform
         */
        constructor(_ngZone, _platform) {
            this._ngZone = _ngZone;
            this._platform = _platform;
            /**
             * Subject for notifying that a registered scrollable reference element has been scrolled.
             */
            this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /**
             * Keeps track of the global `scroll` and `resize` subscriptions.
             */
            this._globalSubscription = null;
            /**
             * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
             */
            this._scrolledCount = 0;
            /**
             * Map of all the scrollable references that are registered with the service and their
             * scroll event subscriptions.
             */
            this.scrollContainers = new Map();
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param {?} scrollable Scrollable instance to be registered.
         * @return {?}
         */
        register(scrollable) {
            if (!this.scrollContainers.has(scrollable)) {
                this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                    .subscribe(( /**
             * @return {?}
             */() => this._scrolled.next(scrollable))));
            }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param {?} scrollable Scrollable instance to be deregistered.
         * @return {?}
         */
        deregister(scrollable) {
            /** @type {?} */
            const scrollableReference = this.scrollContainers.get(scrollable);
            if (scrollableReference) {
                scrollableReference.unsubscribe();
                this.scrollContainers.delete(scrollable);
            }
        }
        /**
         * Returns an observable that emits an event whenever any of the registered Scrollable
         * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
         * to override the default "throttle" time.
         *
         * **Note:** in order to avoid hitting change detection for every scroll event,
         * all of the events emitted from this stream will be run outside the Angular zone.
         * If you need to update any data bindings as a result of a scroll event, you have
         * to run the callback using `NgZone.run`.
         * @param {?=} auditTimeInMs
         * @return {?}
         */
        scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
            if (!this._platform.isBrowser) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](( /**
             * @param {?} observer
             * @return {?}
             */(observer) => {
                if (!this._globalSubscription) {
                    this._addGlobalListener();
                }
                // In the case of a 0ms delay, use an observable without auditTime
                // since it does add a perceptible delay in processing overhead.
                /** @type {?} */
                const subscription = auditTimeInMs > 0 ?
                    this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                    this._scrolled.subscribe(observer);
                this._scrolledCount++;
                return ( /**
                 * @return {?}
                 */() => {
                    subscription.unsubscribe();
                    this._scrolledCount--;
                    if (!this._scrolledCount) {
                        this._removeGlobalListener();
                    }
                });
            }));
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._removeGlobalListener();
            this.scrollContainers.forEach(( /**
             * @param {?} _
             * @param {?} container
             * @return {?}
             */(_, container) => this.deregister(container)));
            this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param {?} elementRef Element whose ancestors to listen for.
         * @param {?=} auditTimeInMs Time to throttle the scroll events.
         * @return {?}
         */
        ancestorScrolled(elementRef, auditTimeInMs) {
            /** @type {?} */
            const ancestors = this.getAncestorScrollContainers(elementRef);
            return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(( /**
             * @param {?} target
             * @return {?}
             *//**
             * @param {?} target
             * @return {?}
             */ target => {
                return !target || ancestors.indexOf(target) > -1;
            })));
        }
        /**
         * Returns all registered Scrollables that contain the provided element.
         * @param {?} elementRef
         * @return {?}
         */
        getAncestorScrollContainers(elementRef) {
            /** @type {?} */
            const scrollingContainers = [];
            this.scrollContainers.forEach(( /**
             * @param {?} _subscription
             * @param {?} scrollable
             * @return {?}
             */(_subscription, scrollable) => {
                if (this._scrollableContainsElement(scrollable, elementRef)) {
                    scrollingContainers.push(scrollable);
                }
            }));
            return scrollingContainers;
        }
        /**
         * Returns true if the element is contained within the provided Scrollable.
         * @private
         * @param {?} scrollable
         * @param {?} elementRef
         * @return {?}
         */
        _scrollableContainsElement(scrollable, elementRef) {
            /** @type {?} */
            let element = elementRef.nativeElement;
            /** @type {?} */
            let scrollableElement = scrollable.getElementRef().nativeElement;
            // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.
            do {
                if (element == scrollableElement) {
                    return true;
                }
            } while (element = ( /** @type {?} */(element)).parentElement);
            return false;
        }
        /**
         * Sets up the global scroll listeners.
         * @private
         * @return {?}
         */
        _addGlobalListener() {
            this._globalSubscription = this._ngZone.runOutsideAngular(( /**
             * @return {?}
             */() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(( /**
                 * @return {?}
                 */() => this._scrolled.next()));
            }));
        }
        /**
         * Cleans up the global scroll listener.
         * @private
         * @return {?}
         */
        _removeGlobalListener() {
            if (this._globalSubscription) {
                this._globalSubscription.unsubscribe();
                this._globalSubscription = null;
            }
        }
    }
    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) { return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); };
    ScrollDispatcher.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollDispatcher, factory: ScrollDispatcher.ɵfac, providedIn: 'root' });
    /** @nocollapse */ ScrollDispatcher.ngInjectableDef = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
})();
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[/*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};
let CdkScrollable = /*@__PURE__*/ (() => {
    class CdkScrollable {
        /**
         * @param {?} elementRef
         * @param {?} scrollDispatcher
         * @param {?} ngZone
         * @param {?=} dir
         */
        constructor(elementRef, scrollDispatcher, ngZone, dir) {
            this.elementRef = elementRef;
            this.scrollDispatcher = scrollDispatcher;
            this.ngZone = ngZone;
            this.dir = dir;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](( /**
             * @param {?} observer
             * @return {?}
             */(observer) => this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                .subscribe(observer)))));
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            this.scrollDispatcher.register(this);
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.scrollDispatcher.deregister(this);
            this._destroyed.next();
            this._destroyed.complete();
        }
        /**
         * Returns observable that emits when a scroll event is fired on the host element.
         * @return {?}
         */
        elementScrolled() {
            return this._elementScrolled;
        }
        /**
         * Gets the ElementRef for the viewport.
         * @return {?}
         */
        getElementRef() {
            return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} options specified the offsets to scroll to.
         * @return {?}
         */
        scrollTo(options) {
            /** @type {?} */
            const el = this.elementRef.nativeElement;
            /** @type {?} */
            const isRtl = this.dir && this.dir.value == 'rtl';
            // Rewrite start & end offsets as right or left offsets.
            options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
            options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
            // Rewrite the bottom offset as a top offset.
            if (options.bottom != null) {
                (( /** @type {?} */(options))).top =
                    el.scrollHeight - el.clientHeight - options.bottom;
            }
            // Rewrite the right offset as a left offset.
            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
                if (options.left != null) {
                    (( /** @type {?} */(options))).right =
                        el.scrollWidth - el.clientWidth - options.left;
                }
                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                    options.left = options.right;
                }
                else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                    options.left = options.right ? -options.right : options.right;
                }
            }
            else {
                if (options.right != null) {
                    (( /** @type {?} */(options))).left =
                        el.scrollWidth - el.clientWidth - options.right;
                }
            }
            this._applyScrollToOptions(options);
        }
        /**
         * @private
         * @param {?} options
         * @return {?}
         */
        _applyScrollToOptions(options) {
            /** @type {?} */
            const el = this.elementRef.nativeElement;
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
                el.scrollTo(options);
            }
            else {
                if (options.top != null) {
                    el.scrollTop = options.top;
                }
                if (options.left != null) {
                    el.scrollLeft = options.left;
                }
            }
        }
        /**
         * Measures the scroll offset relative to the specified edge of the viewport. This method can be
         * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
         * about what scrollLeft means in RTL. The values returned by this method are normalized such that
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} from The edge to measure from.
         * @return {?}
         */
        measureScrollOffset(from) {
            /** @type {?} */
            const LEFT = 'left';
            /** @type {?} */
            const RIGHT = 'right';
            /** @type {?} */
            const el = this.elementRef.nativeElement;
            if (from == 'top') {
                return el.scrollTop;
            }
            if (from == 'bottom') {
                return el.scrollHeight - el.clientHeight - el.scrollTop;
            }
            // Rewrite start & end as left or right offsets.
            /** @type {?} */
            const isRtl = this.dir && this.dir.value == 'rtl';
            if (from == 'start') {
                from = isRtl ? RIGHT : LEFT;
            }
            else if (from == 'end') {
                from = isRtl ? LEFT : RIGHT;
            }
            if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                    return el.scrollWidth - el.clientWidth - el.scrollLeft;
                }
                else {
                    return el.scrollLeft;
                }
            }
            else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
                // 0 when scrolled all the way right.
                if (from == LEFT) {
                    return el.scrollLeft + el.scrollWidth - el.clientWidth;
                }
                else {
                    return -el.scrollLeft;
                }
            }
            else {
                // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
                // (scrollWidth - clientWidth) when scrolled all the way right.
                if (from == LEFT) {
                    return el.scrollLeft;
                }
                else {
                    return el.scrollWidth - el.clientWidth - el.scrollLeft;
                }
            }
        }
    }
    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) { return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8)); };
    CdkScrollable.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkScrollable, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
    return CdkScrollable;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
let CdkVirtualScrollViewport = /*@__PURE__*/ (() => {
    class CdkVirtualScrollViewport extends CdkScrollable {
        /**
         * @param {?} elementRef
         * @param {?} _changeDetectorRef
         * @param {?} ngZone
         * @param {?} _scrollStrategy
         * @param {?} dir
         * @param {?} scrollDispatcher
         */
        constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
            super(elementRef, scrollDispatcher, ngZone, dir);
            this.elementRef = elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._scrollStrategy = _scrollStrategy;
            /**
             * Emits when the viewport is detached from a CdkVirtualForOf.
             */
            this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /**
             * Emits when the rendered range changes.
             */
            this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this._orientation = 'vertical';
            // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
            // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
            // depending on how the strategy calculates the scrolled index, it may come at a cost to
            // performance.
            /**
             * Emits when the index of the first element visible in the viewport changes.
             */
            this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](( /**
             * @param {?} observer
             * @return {?}
             */(observer) => this._scrollStrategy.scrolledIndexChange.subscribe(( /**
             * @param {?} index
             * @return {?}
             *//**
             * @param {?} index
             * @return {?}
             */ index => Promise.resolve().then(( /**
             * @return {?}
             */() => this.ngZone.run(( /**
             * @return {?}
             */() => observer.next(index)))))))));
            /**
             * A stream that emits whenever the rendered range changes.
             */
            this.renderedRangeStream = this._renderedRangeSubject.asObservable();
            /**
             * The total size of all content (in pixels), including content that is not currently rendered.
             */
            this._totalContentSize = 0;
            /**
             * A string representing the `style.width` property value to be used for the spacer element.
             */
            this._totalContentWidth = '';
            /**
             * A string representing the `style.height` property value to be used for the spacer element.
             */
            this._totalContentHeight = '';
            /**
             * The currently rendered range of indices.
             */
            this._renderedRange = { start: 0, end: 0 };
            /**
             * The length of the data bound to this viewport (in number of items).
             */
            this._dataLength = 0;
            /**
             * The size of the viewport (in pixels).
             */
            this._viewportSize = 0;
            /**
             * The last rendered content offset that was set.
             */
            this._renderedContentOffset = 0;
            /**
             * Whether the last rendered content offset was to the end of the content (and therefore needs to
             * be rewritten as an offset to the start of the content).
             */
            this._renderedContentOffsetNeedsRewrite = false;
            /**
             * Whether there is a pending change detection cycle.
             */
            this._isChangeDetectionPending = false;
            /**
             * A list of functions to run after the next change detection cycle.
             */
            this._runAfterChangeDetection = [];
            if (!_scrollStrategy) {
                throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
            }
        }
        /**
         * The direction the viewport scrolls.
         * @return {?}
         */
        get orientation() {
            return this._orientation;
        }
        /**
         * @param {?} orientation
         * @return {?}
         */
        set orientation(orientation) {
            if (this._orientation !== orientation) {
                this._orientation = orientation;
                this._calculateSpacerSize();
            }
        }
        /**
         * @return {?}
         */
        ngOnInit() {
            super.ngOnInit();
            // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */() => Promise.resolve().then(( /**
             * @return {?}
             */() => {
                this._measureViewportSize();
                this._scrollStrategy.attach(this);
                this.elementScrolled()
                    .pipe(
                // Start off with a fake scroll event so we properly detect our initial position.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(( /** @type {?} */(null))), 
                // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                    .subscribe(( /**
             * @return {?}
             */() => this._scrollStrategy.onContentScrolled()));
                this._markChangeDetectionNeeded();
            }))));
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.detach();
            this._scrollStrategy.detach();
            // Complete all subjects
            this._renderedRangeSubject.complete();
            this._detachedSubject.complete();
            super.ngOnDestroy();
        }
        /**
         * Attaches a `CdkVirtualForOf` to this viewport.
         * @param {?} forOf
         * @return {?}
         */
        attach(forOf) {
            if (this._forOf) {
                throw Error('CdkVirtualScrollViewport is already attached.');
            }
            // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */() => {
                this._forOf = forOf;
                this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._detachedSubject)).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 *//**
                 * @param {?} data
                 * @return {?}
                 */ data => {
                    /** @type {?} */
                    const newLength = data.length;
                    if (newLength !== this._dataLength) {
                        this._dataLength = newLength;
                        this._scrollStrategy.onDataLengthChanged();
                    }
                    this._doChangeDetection();
                }));
            }));
        }
        /**
         * Detaches the current `CdkVirtualForOf`.
         * @return {?}
         */
        detach() {
            this._forOf = null;
            this._detachedSubject.next();
        }
        /**
         * Gets the length of the data bound to this viewport (in number of items).
         * @return {?}
         */
        getDataLength() {
            return this._dataLength;
        }
        /**
         * Gets the size of the viewport (in pixels).
         * @return {?}
         */
        getViewportSize() {
            return this._viewportSize;
        }
        // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
        /**
         * Get the current rendered range of items.
         * @return {?}
         */
        getRenderedRange() {
            return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         * @param {?} size
         * @return {?}
         */
        setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
                this._totalContentSize = size;
                this._calculateSpacerSize();
                this._markChangeDetectionNeeded();
            }
        }
        /**
         * Sets the currently rendered range of indices.
         * @param {?} range
         * @return {?}
         */
        setRenderedRange(range) {
            if (!rangesEqual(this._renderedRange, range)) {
                this._renderedRangeSubject.next(this._renderedRange = range);
                this._markChangeDetectionNeeded(( /**
                 * @return {?}
                 */() => this._scrollStrategy.onContentRendered()));
            }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         * @return {?}
         */
        getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         * @param {?} offset
         * @param {?=} to
         * @return {?}
         */
        setRenderedContentOffset(offset, to = 'to-start') {
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            /** @type {?} */
            const isRtl = this.dir && this.dir.value == 'rtl';
            /** @type {?} */
            const isHorizontal = this.orientation == 'horizontal';
            /** @type {?} */
            const axis = isHorizontal ? 'X' : 'Y';
            /** @type {?} */
            const axisDirection = isHorizontal && isRtl ? -1 : 1;
            /** @type {?} */
            let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
            this._renderedContentOffset = offset;
            if (to === 'to-end') {
                transform += ` translate${axis}(-100%)`;
                // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
                // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
                // expand upward).
                this._renderedContentOffsetNeedsRewrite = true;
            }
            if (this._renderedContentTransform != transform) {
                // We know this value is safe because we parse `offset` with `Number()` before passing it
                // into the string.
                this._renderedContentTransform = transform;
                this._markChangeDetectionNeeded(( /**
                 * @return {?}
                 */() => {
                    if (this._renderedContentOffsetNeedsRewrite) {
                        this._renderedContentOffset -= this.measureRenderedContentSize();
                        this._renderedContentOffsetNeedsRewrite = false;
                        this.setRenderedContentOffset(this._renderedContentOffset);
                    }
                    else {
                        this._scrollStrategy.onRenderedOffsetChanged();
                    }
                }));
            }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param {?} offset The offset to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */
        scrollToOffset(offset, behavior = 'auto') {
            /** @type {?} */
            const options = { behavior };
            if (this.orientation === 'horizontal') {
                options.start = offset;
            }
            else {
                options.top = offset;
            }
            this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */
        scrollToIndex(index, behavior = 'auto') {
            this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         * @return {?}
         */
        measureScrollOffset(from) {
            return super.measureScrollOffset(from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /**
         * Measure the combined size of all of the rendered items.
         * @return {?}
         */
        measureRenderedContentSize() {
            /** @type {?} */
            const contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         * @param {?} range
         * @return {?}
         */
        measureRangeSize(range) {
            if (!this._forOf) {
                return 0;
            }
            return this._forOf.measureRangeSize(range, this.orientation);
        }
        /**
         * Update the viewport dimensions and re-render.
         * @return {?}
         */
        checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();
            this._scrollStrategy.onDataLengthChanged();
        }
        /**
         * Measure the viewport size.
         * @private
         * @return {?}
         */
        _measureViewportSize() {
            /** @type {?} */
            const viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ?
                viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /**
         * Queue up change detection to run.
         * @private
         * @param {?=} runAfter
         * @return {?}
         */
        _markChangeDetectionNeeded(runAfter) {
            if (runAfter) {
                this._runAfterChangeDetection.push(runAfter);
            }
            // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.
            if (!this._isChangeDetectionPending) {
                this._isChangeDetectionPending = true;
                this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */() => Promise.resolve().then(( /**
                 * @return {?}
                 */() => {
                    this._doChangeDetection();
                }))));
            }
        }
        /**
         * Run change detection.
         * @private
         * @return {?}
         */
        _doChangeDetection() {
            this._isChangeDetectionPending = false;
            // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.
            this.ngZone.run(( /**
             * @return {?}
             */() => this._changeDetectorRef.markForCheck()));
            // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.
            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
            /** @type {?} */
            const runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];
            for (const fn of runAfterChangeDetection) {
                fn();
            }
        }
        /**
         * Calculates the `style.width` and `style.height` for the spacer element.
         * @private
         * @return {?}
         */
        _calculateSpacerSize() {
            this._totalContentHeight =
                this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
            this._totalContentWidth =
                this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
        }
    }
    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) { return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher)); };
    CdkVirtualScrollViewport.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CdkVirtualScrollViewport, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
            }
        }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
            }
        }, inputs: { orientation: "orientation" }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                    provide: CdkScrollable,
                    useExisting: CdkVirtualScrollViewport
                }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 4, vars: 4, consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]], template: function CdkVirtualScrollViewport_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
            }
        }, styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"], encapsulation: 2, changeDetection: 0 });
    return CdkVirtualScrollViewport;
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
    /** @type {?} */
    const el = ( /** @type {?} */(node));
    if (!el.getBoundingClientRect) {
        return 0;
    }
    /** @type {?} */
    const rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
let CdkVirtualForOf = /*@__PURE__*/ (() => {
    class CdkVirtualForOf {
        /**
         * @param {?} _viewContainerRef
         * @param {?} _template
         * @param {?} _differs
         * @param {?} _viewport
         * @param {?} ngZone
         */
        constructor(_viewContainerRef, _template, _differs, _viewport, ngZone) {
            this._viewContainerRef = _viewContainerRef;
            this._template = _template;
            this._differs = _differs;
            this._viewport = _viewport;
            /**
             * Emits when the rendered view of the data changes.
             */
            this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /**
             * Subject that emits when a new DataSource instance is given.
             */
            this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /**
             * The size of the cache used to store templates that are not being used for re-use later.
             * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
             */
            this.cdkVirtualForTemplateCacheSize = 20;
            /**
             * Emits whenever the data in the current DataSource changes.
             */
            this.dataStream = this._dataSourceChanges
                .pipe(
            // Start off with null `DataSource`.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(( /** @type {?} */(null))), 
            // Bundle up the previous and current data sources so we can work with both.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
            // Use `_changeDataSource` to disconnect from the previous data source and connect to the
            // new one, passing back a stream of data changes which we run through `switchMap` to give
            // us a data stream that emits the latest data from whatever the current `DataSource` is.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(( /**
             * @param {?} __0
             * @return {?}
             */([prev, cur]) => this._changeDataSource(prev, cur))), 
            // Replay the last emitted data when someone subscribes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
            /**
             * The differ used to calculate changes to the data.
             */
            this._differ = null;
            /**
             * The template cache used to hold on ot template instancess that have been stamped out, but don't
             * currently need to be rendered. These instances will be reused in the future rather than
             * stamping out brand new ones.
             */
            this._templateCache = [];
            /**
             * Whether the rendered data should be updated during the next ngDoCheck cycle.
             */
            this._needsUpdate = false;
            this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.dataStream.subscribe(( /**
             * @param {?} data
             * @return {?}
             *//**
             * @param {?} data
             * @return {?}
             */ data => {
                this._data = data;
                this._onRenderedDataChange();
            }));
            this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(( /**
             * @param {?} range
             * @return {?}
             *//**
             * @param {?} range
             * @return {?}
             */ range => {
                this._renderedRange = range;
                ngZone.run(( /**
                 * @return {?}
                 */() => this.viewChange.next(this._renderedRange)));
                this._onRenderedDataChange();
            }));
            this._viewport.attach(this);
        }
        /**
         * The DataSource to display.
         * @return {?}
         */
        get cdkVirtualForOf() {
            return this._cdkVirtualForOf;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set cdkVirtualForOf(value) {
            this._cdkVirtualForOf = value;
            /** @type {?} */
            const ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["isDataSource"])(value) ? value :
                // Slice the value if its an NgIterable to ensure we're working with an array.
                new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));
            this._dataSourceChanges.next(ds);
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */
        get cdkVirtualForTrackBy() {
            return this._cdkVirtualForTrackBy;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        set cdkVirtualForTrackBy(fn) {
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
                ( /**
                 * @param {?} index
                 * @param {?} item
                 * @return {?}
                 */(index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item)) :
                undefined;
        }
        /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */
        set cdkVirtualForTemplate(value) {
            if (value) {
                this._needsUpdate = true;
                this._template = value;
            }
        }
        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         * @param {?} range
         * @param {?} orientation
         * @return {?}
         */
        measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
                return 0;
            }
            if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
                throw Error(`Error: attempted to measure an item that isn't rendered.`);
            }
            // The index into the list of rendered views for the first item in the range.
            /** @type {?} */
            const renderedStartIndex = range.start - this._renderedRange.start;
            // The length of the range we're measuring.
            /** @type {?} */
            const rangeLen = range.end - range.start;
            // Loop over all root nodes for all items in the range and sum up their size.
            /** @type {?} */
            let totalSize = 0;
            /** @type {?} */
            let i = rangeLen;
            while (i--) {
                /** @type {?} */
                const view = ( /** @type {?} */(this._viewContainerRef.get(i + renderedStartIndex)));
                /** @type {?} */
                let j = view ? view.rootNodes.length : 0;
                while (j--) {
                    totalSize += getSize(orientation, ( /** @type {?} */(view)).rootNodes[j]);
                }
            }
            return totalSize;
        }
        /**
         * @return {?}
         */
        ngDoCheck() {
            if (this._differ && this._needsUpdate) {
                // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
                // this list being rendered (can use simpler algorithm) vs needs update due to data actually
                // changing (need to do this diff).
                /** @type {?} */
                const changes = this._differ.diff(this._renderedItems);
                if (!changes) {
                    this._updateContext();
                }
                else {
                    this._applyChanges(changes);
                }
                this._needsUpdate = false;
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._viewport.detach();
            this._dataSourceChanges.next();
            this._dataSourceChanges.complete();
            this.viewChange.complete();
            this._destroyed.next();
            this._destroyed.complete();
            for (let view of this._templateCache) {
                view.destroy();
            }
        }
        /**
         * React to scroll state changes in the viewport.
         * @private
         * @return {?}
         */
        _onRenderedDataChange() {
            if (!this._renderedRange) {
                return;
            }
            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
            if (!this._differ) {
                this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
            }
            this._needsUpdate = true;
        }
        /**
         * Swap out one `DataSource` for another.
         * @private
         * @param {?} oldDs
         * @param {?} newDs
         * @return {?}
         */
        _changeDataSource(oldDs, newDs) {
            if (oldDs) {
                oldDs.disconnect(this);
            }
            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /**
         * Update the `CdkVirtualForOfContext` for all views.
         * @private
         * @return {?}
         */
        _updateContext() {
            /** @type {?} */
            const count = this._data.length;
            /** @type {?} */
            let i = this._viewContainerRef.length;
            while (i--) {
                /** @type {?} */
                let view = ( /** @type {?} */(this._viewContainerRef.get(i)));
                view.context.index = this._renderedRange.start + i;
                view.context.count = count;
                this._updateComputedContextProperties(view.context);
                view.detectChanges();
            }
        }
        /**
         * Apply changes to the DOM.
         * @private
         * @param {?} changes
         * @return {?}
         */
        _applyChanges(changes) {
            // Rearrange the views to put them in the right location.
            changes.forEachOperation(( /**
             * @param {?} record
             * @param {?} adjustedPreviousIndex
             * @param {?} currentIndex
             * @return {?}
             */(record, adjustedPreviousIndex, currentIndex) => {
                if (record.previousIndex == null) { // Item added.
                    // Item added.
                    /** @type {?} */
                    const view = this._insertViewForNewItem(( /** @type {?} */(currentIndex)));
                    view.context.$implicit = record.item;
                }
                else if (currentIndex == null) { // Item removed.
                    this._cacheView(this._detachView(( /** @type {?} */(adjustedPreviousIndex))));
                }
                else { // Item moved.
                    // Item moved.
                    /** @type {?} */
                    const view = ( /** @type {?} */(this._viewContainerRef.get(( /** @type {?} */(adjustedPreviousIndex)))));
                    this._viewContainerRef.move(view, currentIndex);
                    view.context.$implicit = record.item;
                }
            }));
            // Update $implicit for any items that had an identity change.
            changes.forEachIdentityChange(( /**
             * @param {?} record
             * @return {?}
             */(record) => {
                /** @type {?} */
                const view = ( /** @type {?} */(this._viewContainerRef.get(( /** @type {?} */(record.currentIndex)))));
                view.context.$implicit = record.item;
            }));
            // Update the context variables on all items.
            /** @type {?} */
            const count = this._data.length;
            /** @type {?} */
            let i = this._viewContainerRef.length;
            while (i--) {
                /** @type {?} */
                const view = ( /** @type {?} */(this._viewContainerRef.get(i)));
                view.context.index = this._renderedRange.start + i;
                view.context.count = count;
                this._updateComputedContextProperties(view.context);
            }
        }
        /**
         * Cache the given detached view.
         * @private
         * @param {?} view
         * @return {?}
         */
        _cacheView(view) {
            if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
                this._templateCache.push(view);
            }
            else {
                /** @type {?} */
                const index = this._viewContainerRef.indexOf(view);
                // It's very unlikely that the index will ever be -1, but just in case,
                // destroy the view on its own, otherwise destroy it through the
                // container to ensure that all the references are removed.
                if (index === -1) {
                    view.destroy();
                }
                else {
                    this._viewContainerRef.remove(index);
                }
            }
        }
        /**
         * Inserts a view for a new item, either from the cache or by creating a new one.
         * @private
         * @param {?} index
         * @return {?}
         */
        _insertViewForNewItem(index) {
            return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
        }
        /**
         * Update the computed properties on the `CdkVirtualForOfContext`.
         * @private
         * @param {?} context
         * @return {?}
         */
        _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
        }
        /**
         * Creates a new embedded view and moves it to the given index
         * @private
         * @param {?} index
         * @return {?}
         */
        _createEmbeddedViewAt(index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return this._viewContainerRef.createEmbeddedView(this._template, {
                $implicit: ( /** @type {?} */(null)),
                cdkVirtualForOf: this._cdkVirtualForOf,
                index: -1,
                count: -1,
                first: false,
                last: false,
                odd: false,
                even: false
            }, index);
        }
        /**
         * Inserts a recycled view from the cache at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */
        _insertViewFromCache(index) {
            /** @type {?} */
            const cachedView = this._templateCache.pop();
            if (cachedView) {
                this._viewContainerRef.insert(cachedView, index);
            }
            return cachedView || null;
        }
        /**
         * Detaches the embedded view at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */
        _detachView(index) {
            return ( /** @type {?} */(this._viewContainerRef.detach(index)));
        }
    }
    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) { return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
    CdkVirtualForOf.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkVirtualForOf, selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]], inputs: { cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize", cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate" } });
    return CdkVirtualForOf;
})();
let ScrollingModule = /*@__PURE__*/ (() => {
    class ScrollingModule {
    }
    ScrollingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScrollingModule });
    ScrollingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScrollingModule_Factory(t) { return new (t || ScrollingModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"]] });
    return ScrollingModule;
})();
/*@__PURE__*/ (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollingModule, { declarations: function () {
            return [CdkFixedSizeVirtualScroll,
                CdkScrollable,
                CdkVirtualForOf,
                CdkVirtualScrollViewport];
        }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]]; }, exports: function () {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                CdkFixedSizeVirtualScroll,
                CdkScrollable,
                CdkVirtualForOf,
                CdkVirtualScrollViewport];
        } });
})();
let ScrollDispatchModule = /*@__PURE__*/ (() => {
    class ScrollDispatchModule {
    }
    ScrollDispatchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScrollDispatchModule });
    ScrollDispatchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScrollDispatchModule_Factory(t) { return new (t || ScrollDispatchModule)(); }, imports: [[ScrollingModule],
            ScrollingModule] });
    return ScrollDispatchModule;
})();
/*@__PURE__*/ (function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScrollDispatchModule, { imports: [ScrollingModule], exports: [ScrollingModule] }); })();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
const DEFAULT_RESIZE_TIME = 20;
let ViewportRuler = /*@__PURE__*/ (() => {
    class ViewportRuler {
        /**
         * @param {?} _platform
         * @param {?} ngZone
         */
        constructor(_platform, ngZone) {
            this._platform = _platform;
            ngZone.runOutsideAngular(( /**
             * @return {?}
             */() => {
                this._change = _platform.isBrowser ?
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) :
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
                // Note that we need to do the subscription inside `runOutsideAngular`
                // since subscribing is what causes the event listener to be added.
                this._invalidateCache = this.change().subscribe(( /**
                 * @return {?}
                 */() => this._updateViewportSize()));
            }));
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this._invalidateCache.unsubscribe();
        }
        /**
         * Returns the viewport's width and height.
         * @return {?}
         */
        getViewportSize() {
            if (!this._viewportSize) {
                this._updateViewportSize();
            }
            /** @type {?} */
            const output = { width: this._viewportSize.width, height: this._viewportSize.height };
            // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
            if (!this._platform.isBrowser) {
                this._viewportSize = ( /** @type {?} */(null));
            }
            return output;
        }
        /**
         * Gets a ClientRect for the viewport's bounds.
         * @return {?}
         */
        getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            /** @type {?} */
            const scrollPosition = this.getViewportScrollPosition();
            const { width, height } = this.getViewportSize();
            return {
                top: scrollPosition.top,
                left: scrollPosition.left,
                bottom: scrollPosition.top + height,
                right: scrollPosition.left + width,
                height,
                width,
            };
        }
        /**
         * Gets the (top, left) scroll position of the viewport.
         * @return {?}
         */
        getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
                return { top: 0, left: 0 };
            }
            // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.
            /** @type {?} */
            const documentElement = ( /** @type {?} */(document.documentElement));
            /** @type {?} */
            const documentRect = documentElement.getBoundingClientRect();
            /** @type {?} */
            const top = -documentRect.top || document.body.scrollTop || window.scrollY ||
                documentElement.scrollTop || 0;
            /** @type {?} */
            const left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
                documentElement.scrollLeft || 0;
            return { top, left };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param {?=} throttleTime Time in milliseconds to throttle the stream.
         * @return {?}
         */
        change(throttleTime = DEFAULT_RESIZE_TIME) {
            return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /**
         * Updates the cached viewport size.
         * @private
         * @return {?}
         */
        _updateViewportSize() {
            this._viewportSize = this._platform.isBrowser ?
                { width: window.innerWidth, height: window.innerHeight } :
                { width: 0, height: 0 };
        }
    }
    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) { return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
    ViewportRuler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewportRuler, factory: ViewportRuler.ɵfac, providedIn: 'root' });
    /** @nocollapse */ ViewportRuler.ngInjectableDef = /*@__PURE__*/ Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
})();
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[/*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), /*@__PURE__*/ new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






/***/ }),

/***/ "./src/app/pages/orders-list/orders-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/orders-list/orders-list.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function() { return OrderListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _orders_list_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders-list.page */ "./src/app/pages/orders-list/orders-list.page.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");













const routes = [
    {
        path: '',
        component: _orders_list_page__WEBPACK_IMPORTED_MODULE_9__["OrdersListPage"]
    }
];
let OrderListPageModule = /*@__PURE__*/ (() => {
    class OrderListPageModule {
    }
    OrderListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderListPageModule });
    OrderListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OrderListPageModule_Factory(t) { return new (t || OrderListPageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
            ]] });
    return OrderListPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderListPageModule, { declarations: [_orders_list_page__WEBPACK_IMPORTED_MODULE_9__["OrdersListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"]] });
})();



/***/ }),

/***/ "./src/app/pages/orders-list/orders-list.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders-list/orders-list.page.ts ***!
  \*******************************************************/
/*! exports provided: OrdersListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListPage", function() { return OrdersListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_information_connection_status_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/information/connection-status.model */ "./src/app/models/information/connection-status.model.ts");
/* harmony import */ var _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/order-helper/order-status.enum */ "./src/app/models/order-helper/order-status.enum.ts");
/* harmony import */ var _models_settings_settings_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/settings/settings.model */ "./src/app/models/settings/settings.model.ts");
/* harmony import */ var _models_settings_status_settings_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/settings/status-settings.model */ "./src/app/models/settings/status-settings.model.ts");
/* harmony import */ var _app_pages_optimize_options_optimize_options_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/pages/optimize-options/optimize-options.page */ "./src/app/pages/optimize-options/optimize-options.page.ts");
/* harmony import */ var _app_pages_order_detail_tabs_order_detail_tabs_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/pages/order-detail-tabs/order-detail-tabs.page */ "./src/app/pages/order-detail-tabs/order-detail-tabs.page.ts");
/* harmony import */ var _app_pages_orders_list_transition_orders_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/pages/orders-list/transition-orders.model */ "./src/app/pages/orders-list/transition-orders.model.ts");
/* harmony import */ var _app_pages_reorder_modal_reorder_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/pages/reorder-modal/reorder-modal.page */ "./src/app/pages/reorder-modal/reorder-modal.page.ts");
/* harmony import */ var _app_pages_sort_popover_sort_popover_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/pages/sort-popover/sort-popover.page */ "./src/app/pages/sort-popover/sort-popover.page.ts");
/* harmony import */ var _utils_order_height_calculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @utils/order-height-calculator */ "./src/app/utils/order-height-calculator.ts");
/* harmony import */ var _services_features_features_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/features/features.model */ "./src/app/services/features/features.model.ts");
/* harmony import */ var intro_js_intro_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! intro.js/intro.js */ "./node_modules/intro.js/intro.js");
/* harmony import */ var intro_js_intro_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(intro_js_intro_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_pages_map_map_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/pages/map/map.page */ "./src/app/pages/map/map.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_order_service_order_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/order-service/order.service */ "./src/app/services/order-service/order.service.ts");
/* harmony import */ var _services_order_sync_order_sync_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @services/order-sync/order-sync.service */ "./src/app/services/order-sync/order-sync.service.ts");
/* harmony import */ var _services_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @services/notification-service/notification.service */ "./src/app/services/notification-service/notification.service.ts");
/* harmony import */ var _services_transition_transition_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @services/transition/transition.service */ "./src/app/services/transition/transition.service.ts");
/* harmony import */ var _services_ionic_deploy_ionic_deploy_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @services/ionic-deploy/ionic-deploy.service */ "./src/app/services/ionic-deploy/ionic-deploy.service.ts");
/* harmony import */ var _models_information_device_info_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @models/information/device-info.model */ "./src/app/models/information/device-info.model.ts");
/* harmony import */ var _services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @services/settings-providers/settings.service */ "./src/app/services/settings-providers/settings.service.ts");
/* harmony import */ var _services_log_log_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @services/log/log.service */ "./src/app/services/log/log.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_connection_status_service_connection_status_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @services/connection-status-service/connection-status.service */ "./src/app/services/connection-status-service/connection-status.service.ts");
/* harmony import */ var _services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @services/mobile-configuration-service/mobile-context.service */ "./src/app/services/mobile-configuration-service/mobile-context.service.ts");
/* harmony import */ var _services_features_features_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @services/features/features.service */ "./src/app/services/features/features.service.ts");
/* harmony import */ var _services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @services/mbls-analytics-service/MblsAnalyticsService */ "./src/app/services/mbls-analytics-service/MblsAnalyticsService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_utils_common_utils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @services/utils/common-utils */ "./src/app/services/utils/common-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_components_awaiting_transition_indicator_awaiting_transition_indicator_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @app/components/awaiting-transition-indicator/awaiting-transition-indicator.component */ "./src/app/components/awaiting-transition-indicator/awaiting-transition-indicator.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _app_components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @app/components/order-item/order-item.component */ "./src/app/components/order-item/order-item.component.ts");
/* harmony import */ var _app_components_sequence_number_sequence_number_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @app/components/sequence-number/sequence-number.component */ "./src/app/components/sequence-number/sequence-number.component.ts");
/* harmony import */ var _app_components_transition_button_transition_button_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @app/components/transition-button/transition-button.component */ "./src/app/components/transition-button/transition-button.component.ts");
/* harmony import */ var _pipes_distance_distance_unit_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../pipes/distance/distance-unit.pipe */ "./src/app/pipes/distance/distance-unit.pipe.ts");


















































const _c0 = ["ordersListContent"];
function OrdersListPage_ion_badge_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.pendingNotifications);
    }
}
const _c1 = function () { return ["fas", "download"]; };
function OrdersListPage_fa_layers_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fa-layers", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
    }
}
const _c2 = function () { return ["fas", "question"]; };
function OrdersListPage_ion_button_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_button_7_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.hints(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
    }
}
const _c3 = function () { return ["fas", "check-square"]; };
function OrdersListPage_ion_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_button_8_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.toggleSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.settings.actions.canSelect ? "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
    }
}
const _c4 = function () { return ["fas", "map"]; };
function OrdersListPage_ion_button_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_button_9_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.openMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c4));
    }
}
const _c5 = function (a0) { return { "inactive-button": a0 }; };
const _c6 = function () { return ["fas", "retweet"]; };
function OrdersListPage_ion_button_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_button_10_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.toggleOrdering(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c5, !(ctx_r5.allOrders == null ? null : ctx_r5.allOrders.length) || !ctx_r5.canReorder));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c6));
    }
}
const _c7 = function () { return ["fas", "route"]; };
const _c8 = function () { return ["fas", "spinner"]; };
function OrdersListPage_ion_button_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_button_11_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.optimizeRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c5, !(ctx_r6.allOrders == null ? null : ctx_r6.allOrders.length) || !ctx_r6.canOptimize));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c7))("hidden", ctx_r6.optimizationInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c8))("pulse", true)("hidden", !ctx_r6.optimizationInProgress);
    }
}
const _c9 = function () { return ["fal", "list-alt"]; };
function OrdersListPage_ion_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_button_12_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.groupOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r7.statusSettings.groupByProvider ? "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c9));
    }
}
const _c10 = function () { return ["far", "sort-alpha-down"]; };
function OrdersListPage_ion_button_13_fa_icon_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 30);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c10));
    }
}
const _c11 = function () { return ["far", "sort-numeric-down"]; };
function OrdersListPage_ion_button_13_fa_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 43);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c11));
    }
}
const _c12 = function () { return ["far", "arrow-down"]; };
function OrdersListPage_ion_button_13_fa_layers_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fa-layers", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-layers-text", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "DistanceUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, "km", ctx_r36.settings.distanceUnit));
    }
}
const _c13 = function () { return ["far", "clock"]; };
function OrdersListPage_ion_button_13_fa_layers_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fa-layers", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c13));
    }
}
function OrdersListPage_ion_button_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_button_13_Template_ion_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.openSortMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersListPage_ion_button_13_fa_icon_1_Template, 1, 2, "fa-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrdersListPage_ion_button_13_fa_icon_2_Template, 1, 2, "fa-icon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrdersListPage_ion_button_13_fa_layers_3_Template, 4, 6, "fa-layers", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrdersListPage_ion_button_13_fa_layers_4_Template, 3, 4, "fa-layers", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.statusSettings.sortOrder === "lastName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.statusSettings.sortOrder === "sequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.statusSettings.sortOrder === "distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.statusSettings.sortOrder === "avgtime");
    }
}
const _c14 = function () { return ["fas", "filter"]; };
function OrdersListPage_ion_button_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_button_14_Template_ion_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.openProperties($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r9.statusSettings.activeFilter.filtering ? "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c14));
    }
}
const _c15 = function () { return ["fas", "exclamation-triangle"]; };
function OrdersListPage_ion_toolbar_15_ion_title_1_fa_icon_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 53);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c15));
    }
}
function OrdersListPage_ion_toolbar_15_ion_title_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersListPage_ion_toolbar_15_ion_title_1_fa_icon_1_Template, 1, 2, "fa-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r42.connectionStatus.isNetworkConnectedForUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "pages.offline-info.offline_mode"));
    }
}
const _c16 = function () { return ["fas", "unlink"]; };
function OrdersListPage_ion_toolbar_15_ion_title_2_fa_icon_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "fa-icon", 53);
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c16));
    }
}
function OrdersListPage_ion_toolbar_15_ion_title_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersListPage_ion_toolbar_15_ion_title_2_fa_icon_1_Template, 1, 2, "fa-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-spinner", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r43.connectionStatus.isMqttConnectedForUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "pages.offline-info.reconnecting"));
    }
}
const _c17 = function () { return ["fas", "question-circle"]; };
function OrdersListPage_ion_toolbar_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toolbar", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_toolbar_15_Template_ion_toolbar_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.displayConnectionDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersListPage_ion_toolbar_15_ion_title_1_Template, 5, 4, "ion-title", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrdersListPage_ion_toolbar_15_ion_title_2_Template, 7, 4, "ion-title", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", !ctx_r10.connectionStatus.isNetworkConnectedForUser ? "secondary" : "lightwarning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.connectionStatus.isNetworkConnectedForUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r10.connectionStatus.isMqttConnectedForUser && ctx_r10.connectionStatus.isNetworkConnectedForUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c17));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "pages.offline-info.button-text"), " ");
    }
}
const _c18 = function () { return ["fas", "cloud-download-alt"]; };
const _c19 = function () { return ["fa-lg"]; };
function OrdersListPage_ion_fab_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_fab_18_Template_ion_fab_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.fullSync(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-fab-button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c18))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c19));
    }
}
function OrdersListPage_ion_searchbar_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-searchbar", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersListPage_ion_searchbar_20_Template_ion_searchbar_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.statusSettings.activeFilter.allFields = $event; })("ionInput", function OrdersListPage_ion_searchbar_20_Template_ion_searchbar_ionInput_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.onSearchInput(); })("ionClear", function OrdersListPage_ion_searchbar_20_Template_ion_searchbar_ionClear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r53.cancelSearchFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, "options.search.allFields"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.statusSettings.activeFilter.allFields)("formControl", ctx_r13.searchControl);
    }
}
function OrdersListPage_div_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function OrdersListPage_ion_item_divider_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-divider", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-checkbox", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersListPage_ion_item_divider_22_Template_ion_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.allSelected = $event; })("ionChange", function OrdersListPage_ion_item_divider_22_Template_ion_checkbox_ionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.changeAllSelection($event.detail.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.allSelected);
    }
}
function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_ion_checkbox_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-checkbox", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_ion_checkbox_3_Template_ion_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const orderItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return orderItem_r62.selected = $event; })("ionChange", function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_ion_checkbox_3_Template_ion_checkbox_ionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); const orderItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r71.markItem(orderItem_r62); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const orderItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", orderItem_r62.selected);
    }
}
function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_sequence_number_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "sequence-number", 82);
    }
    if (rf & 2) {
        const orderItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("order", orderItem_r62 == null ? null : orderItem_r62.order);
    }
}
const _c20 = function (a0) { return { "emphasized-transition-button": a0 }; };
const _c21 = function (a1) { return ["fas", a1]; };
const _c22 = function (a0) { return { "text-bold": a0 }; };
function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_ion_item_option_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_ion_item_option_7_Template_ion_item_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78); const transition_r75 = ctx.$implicit; const orderItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r76.transitionOrder(orderItem_r62, transition_r75, _r64); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const transition_r75 = ctx.$implicit;
        const orderItem_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("color", transition_r75.event.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c20, transition_r75.event.emphasized))("hidden", transition_r75.secondary)("disabled", ctx_r67.transitionDisabled(orderItem_r62, transition_r75));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c21, transition_r75.event.icon));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c22, transition_r75.event.emphasized));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, transition_r75.event.labelKey));
    }
}
function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-sliding", 73, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_ion_checkbox_3_Template, 1, 1, "ion-checkbox", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_sequence_number_4_Template, 1, 1, "sequence-number", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "order-item", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_Template_order_item_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81); const orderItem_r62 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r80.selectItem($event, orderItem_r62); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item-options", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_ion_item_option_7_Template, 6, 15, "ion-item-option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const orderItem_r62 = ctx.$implicit;
        const i_r63 = ctx.index;
        const group_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !group_r59.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", orderItem_r62 == null ? null : orderItem_r62.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", orderItem_r62 && ctx_r61.settings.actions.canSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r61.settings.actions.canSelect && (orderItem_r62 == null ? null : orderItem_r62.order == null ? null : orderItem_r62.order.sequence));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("orderView", orderItem_r62)("index", i_r63)("reference", ctx_r61.timeReference)("orderStatus", ctx_r61.status)("withDistance", ctx_r61.statusSettings.sortOrder === "distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", orderItem_r62 == null ? null : orderItem_r62.transitions);
    }
}
function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item-divider", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-checkbox", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_Template_ion_checkbox_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const group_r59 = ctx.$implicit; return group_r59.selected = $event; })("ionChange", function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_Template_ion_checkbox_ionChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const group_r59 = ctx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r85.changeGroupSelection(group_r59, $event.detail.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-badge", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-toggle", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_Template_ion_toggle_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const group_r59 = ctx.$implicit; return group_r59.visible = $event; })("ngModelChange", function OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_Template_ion_toggle_ngModelChange_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const group_r59 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r87.toggleGroupView(group_r59.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_ion_item_sliding_13_Template, 8, 10, "ion-item-sliding", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const group_r59 = ctx.$implicit;
        const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", group_r59.viewClass)("hidden", !group_r59.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r58.settings.actions.canSelect)("ngModel", group_r59.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r59.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, group_r59.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r59.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", group_r59.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r59.orders);
    }
}
function OrdersListPage_cdk_virtual_scroll_viewport_24_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 64, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrdersListPage_cdk_virtual_scroll_viewport_24_ng_container_2_Template, 14, 11, "ng-container", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemSize", ctx_r16.approxHeaderHeight)("maxBufferPx", 760)("minBufferPx", 760);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkVirtualForOf", ctx_r16.orderGroups)("cdkVirtualForTrackBy", ctx_r16.trackOrderGroupByBound);
    }
}
function OrdersListPage_ion_item_group_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-group", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 87);
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
function OrdersListPage_ion_item_divider_27_Template(rf, ctx) {
    if (rf & 1) {
        const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item-divider", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-badge", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-toggle", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersListPage_ion_item_divider_27_Template_ion_toggle_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90); const hiddenGroup_r88 = ctx.$implicit; return hiddenGroup_r88.visible = $event; })("ngModelChange", function OrdersListPage_ion_item_divider_27_Template_ion_toggle_ngModelChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90); const hiddenGroup_r88 = ctx.$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r91.toggleGroupView(hiddenGroup_r88.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const hiddenGroup_r88 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !hiddenGroup_r88.hidden)("ngClass", hiddenGroup_r88.viewClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hiddenGroup_r88.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, hiddenGroup_r88.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", hiddenGroup_r88.visible);
    }
}
function OrdersListPage_ion_toolbar_29_Template(rf, ctx) {
    if (rf & 1) {
        const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-toolbar", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_toolbar_29_Template_ion_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c15));
    }
}
function OrdersListPage_ion_grid_30_ion_row_1_ion_col_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "transition-button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function OrdersListPage_ion_grid_30_ion_row_1_ion_col_1_Template_transition_button_onClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const transition_r97 = ctx.$implicit; const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r98.transitionSelection(transition_r97, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const transition_r97 = ctx.$implicit;
        const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("transition", transition_r97)("connected", ctx_r96.connectionStatus.isNetworkConnectedForUser);
    }
}
function OrdersListPage_ion_grid_30_ion_row_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersListPage_ion_grid_30_ion_row_1_ion_col_1_Template, 2, 2, "ion-col", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r94.transitionsSelection);
    }
}
function OrdersListPage_ion_grid_30_ion_row_2_ion_col_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "transition-button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function OrdersListPage_ion_grid_30_ion_row_2_ion_col_1_Template_transition_button_onClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103); const transition_r101 = ctx.$implicit; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r102.transitionSelection(transition_r101, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const transition_r101 = ctx.$implicit;
        const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("transition", transition_r101)("connected", ctx_r100.connectionStatus.isNetworkConnectedForUser);
    }
}
function OrdersListPage_ion_grid_30_ion_row_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersListPage_ion_grid_30_ion_row_2_ion_col_1_Template, 2, 2, "ion-col", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r95.transitionsSelection);
    }
}
function OrdersListPage_ion_grid_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersListPage_ion_grid_30_ion_row_1_Template, 2, 1, "ion-row", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrdersListPage_ion_grid_30_ion_row_2_Template, 2, 1, "ion-row", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.transitionsSelection.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.transitionsSelection.length === 1);
    }
}
const _c23 = function () { return ["fas", "building"]; };
const _c24 = function () { return ["fas", "location-arrow"]; };
function OrdersListPage_ion_footer_31_ion_row_2_ion_col_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "fa-icon", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_ion_footer_31_ion_row_2_ion_col_1_Template_fa_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109); const provider_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r107.openMapForProvider(provider_r105); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const provider_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", provider_r105.name, " : ", provider_r105.address.addressOneLine, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c24));
    }
}
function OrdersListPage_ion_footer_31_ion_row_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersListPage_ion_footer_31_ion_row_2_ion_col_1_Template, 6, 6, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const provider_r105 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", provider_r105.selected);
    }
}
function OrdersListPage_ion_footer_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrdersListPage_ion_footer_31_ion_row_2_Template, 2, 1, "ion-row", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r21.settings.selectedProviders);
    }
}
const _c25 = function (a0, a1, a2) { return { "one-transition-footer": a0, "one-type-multiple-transition-footer": a1, "two-type-multiple-transition-footer": a2 }; };
const CONFIG = {
    GA: {
        PAGE_NAME: 'OrdersListPage',
        EVENT: {
            'ORDER_LIST-MULTIPLE_SELECT': {
                NAME: 'order_list',
                ACTION: 'multiple_select'
            },
            MULTIPLE_SELECT_TRANSITION: {
                NAME: 'order_list_transition',
                ACTION: 'multiple_select_transition'
            },
            ORDER_LIST_FORCING_SYNC: {
                NAME: 'force-sync',
                ACTION: 'on-fab-icon'
            },
            ORDER_ITEM_SWIPE: {
                NAME: 'item_swipe',
                ACTION: 'swipe'
            },
            ORDER_TRANSITION: {
                NAME: 'transition_item',
                ACTION: 'button_pressed'
            }
        }
    },
    MAP_DID_LEAVE_EVENT: 'mapDidLeave'
};
let OrdersListPage = /*@__PURE__*/ (() => {
    class OrdersListPage {
        constructor(platform, orderService, orderSync, notificationService, transitionService, navCtrl, ionicDeploy, deviceInfo, menuCtrl, settingsManager, modalCtrl, log, toastCtrl, translateService, connectionStatusService, mobileContextService, featuresService, popoverCtrl, ga, router, mapService, commonUtils) {
            this.platform = platform;
            this.orderService = orderService;
            this.orderSync = orderSync;
            this.notificationService = notificationService;
            this.transitionService = transitionService;
            this.navCtrl = navCtrl;
            this.ionicDeploy = ionicDeploy;
            this.deviceInfo = deviceInfo;
            this.menuCtrl = menuCtrl;
            this.settingsManager = settingsManager;
            this.modalCtrl = modalCtrl;
            this.log = log;
            this.toastCtrl = toastCtrl;
            this.translateService = translateService;
            this.connectionStatusService = connectionStatusService;
            this.mobileContextService = mobileContextService;
            this.featuresService = featuresService;
            this.popoverCtrl = popoverCtrl;
            this.ga = ga;
            this.router = router;
            this.mapService = mapService;
            this.commonUtils = commonUtils;
            this.orderGroups = [];
            this.allSelected = false;
            this.hasOneSelected = false;
            this.searching = false;
            this.transitionsSelection = [];
            this.timeReference = moment__WEBPACK_IMPORTED_MODULE_15__();
            this.settings = new _models_settings_settings_model__WEBPACK_IMPORTED_MODULE_5__["UserSettings"](true);
            this.statusSettings = new _models_settings_status_settings_model__WEBPACK_IMPORTED_MODULE_6__["StatusSettings"]();
            this.refreshInProgress = false;
            this.disabledSpecialGroups = [];
            this.allOrders = [];
            this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_16__["Subject"]();
            this.unsubscribeAccessor = new rxjs__WEBPACK_IMPORTED_MODULE_16__["Subject"]();
            this.connectionStatus = new _models_information_connection_status_model__WEBPACK_IMPORTED_MODULE_3__["ConnectionStatus"]();
            this.canOptimize = false;
            this.canReorder = false;
            this.optimizationInProgress = false;
            this.dummySequenceNumber = 0;
            this.isCordova = true;
            this.connectionStatusClass = 'connectionDefault';
            this.sendSequence = false;
            this.withHints = false;
            this.features = new _services_features_features_model__WEBPACK_IMPORTED_MODULE_13__["Features"]();
            this.approxHeaderHeight = _utils_order_height_calculator__WEBPACK_IMPORTED_MODULE_12__["DEFAULT_HEADER_HEIGHT"];
            this.approxItemHeight = _utils_order_height_calculator__WEBPACK_IMPORTED_MODULE_12__["APPROX_ITEM_HEIGHT"];
            this.orderOnTheWayStatus = _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ON_THE_WAY_TO_CUSTOMER;
            this.items = [];
            /**
             * Sliding item opening ratio
             * When the sliding item is fully opened the ratio is at 1
             * https://ionicframework.com/docs/api/item-sliding
             * Thanks to this variable we are able to check if
             * the sliding item is fully opened before processing the transition
             */
            this.SLIDING_ITEM_OPEN_RATIO = 1;
            this.isIos = false;
            this.isMobileWeb = false;
            this.swUpdateAvailable = false;
            this.showGroupHeader = (record, recordIndex, records) => {
                try {
                    if (record) {
                        const workflowGroup = this.orderGroups.find(group => group.isWorkflowGroup());
                        const inWorkflowGroup = record.order.stateMachineWorkflow === 'PICKUP' && workflowGroup && workflowGroup.orders.find(view => view.order.id.toString() === record.order.id.toString());
                        if (recordIndex === 0 && inWorkflowGroup) {
                            return workflowGroup;
                        }
                        else if (inWorkflowGroup) {
                            return null;
                        }
                        if (recordIndex === 0
                            || (record.order.tenantName !== records[recordIndex - 1].order.tenantName)
                            || (workflowGroup && records[recordIndex - 1].order.stateMachineWorkflow === 'PICKUP' && record.order.stateMachineWorkflow !== 'PICKUP')) {
                            if (this.orderGroups) {
                                const group = this.orderGroups.find(value => value.name === record.order.tenantName);
                                if (this.settings.selectedProviders) {
                                    const provider = this.settings.selectedProviders.find(p => p.id === record.order.tenantId);
                                    if (provider && group) {
                                        group.subtitle = provider.address.addressOneLine;
                                    }
                                }
                                if (group) {
                                    return group;
                                }
                            }
                        }
                    }
                }
                catch (e) {
                    console.warn('Group header:', e);
                }
                return null;
            };
            this.itemHeightFn = (item, index) => {
                return Object(_utils_order_height_calculator__WEBPACK_IMPORTED_MODULE_12__["orderViewHeight"])(item, this.statusSettings, this.settings, this.isIos);
            };
            if (this.router.url === '/status-tabs/ready') {
                this.status = _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].READY_FOR_HAULAGE;
            }
            else if (this.router.url === '/status-tabs/back') {
                this.status = _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ON_THE_WAY_TO_PROVIDER;
            }
            else {
                this.status = _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ON_THE_WAY_TO_CUSTOMER;
            }
            this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
            this.platform.ready()
                .then(() => {
                this.isDebug = this.deviceInfo.isDebug;
                this.isCordova = this.platform.is('cordova');
                this.isIos = this.platform.is('ios');
                this.ga.trackView(CONFIG.GA.PAGE_NAME).catch(error => this.log.info(`Unable to track view ${CONFIG.GA.PAGE_NAME} with GA`, error));
                this.isMobileWeb = this.platform.is('mobileweb');
            });
            const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            const images = [
                'bandit',
                'batmobile',
                'blues-brothers',
                'bueller',
                'delorean',
                'eleanor',
                'general-lee',
                'ghostbusters',
                'knight-rider',
                'mirth-mobile'
            ];
            function getImgSrc() {
                const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
                rotateImg++;
                if (rotateImg === images.length) {
                    rotateImg = 0;
                }
                return src;
            }
            let rotateImg = 0;
            for (let i = 0; i < 1000; i++) {
                this.items.push({
                    name: i + ' - ' + images[rotateImg],
                    imgSrc: getImgSrc(),
                    avatarSrc: getImgSrc(),
                    imgHeight: Math.floor(Math.random() * 50 + 150),
                    content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
                });
                rotateImg++;
                if (rotateImg === images.length) {
                    rotateImg = 0;
                }
            }
            this.trackOrderGroupByBound = this.trackOrderGroupBy.bind(this);
        }
        ionViewWillEnter() {
            this.settingsManager.setCurrentStatus(this.status);
            this.timer = setInterval(() => {
                this.timeReference = moment__WEBPACK_IMPORTED_MODULE_15__();
            }, 5000);
            if (!this.searchControlSubscription) {
                this.searchControlSubscription = this.searchControl.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.unsubscribeAccessor), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["debounceTime"])(700))
                    .subscribe(search => {
                    this.searching = false;
                    this.settingsManager.filterChanged();
                });
            }
            if (!this.orderAccessorSubscription) {
                this.orderAccessorSubscription = this.orderService.ordersAccessor
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.unsubscribeAccessor))
                    .subscribe((accessor) => {
                    this.accessor = accessor;
                    if (this.status) {
                        this.manageNewOrders(accessor);
                        if (this.canOptimize) {
                            this.orderService.loadRouteSummary();
                        }
                    }
                });
            }
            if (!this.connectionStatusSubscription) {
                this.connectionStatusSubscription = this.connectionStatusService.connectionStatusSubscription
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.unsubscribe))
                    .subscribe((next) => {
                    const connectionStatusHasChanged = !this.connectionStatus.isSameForUserAs(next);
                    this.connectionStatus = next;
                    if (!this.connectionStatus.isNetworkConnectedForUser) {
                        this.connectionStatusClass = 'internetLost';
                    }
                    else if (!this.connectionStatus.isMqttConnectedForUser) {
                        this.connectionStatusClass = 'mqttLost';
                    }
                    else {
                        this.connectionStatusClass = 'connectionDefault';
                    }
                    if (connectionStatusHasChanged) {
                        if (this.content) {
                            // this.content.resize();
                        }
                    }
                });
            }
            if (!this.userSettingsSubscription) {
                this.userSettingsSubscription = this.mobileContextService.userSettingsObservable
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.unsubscribe))
                    .subscribe((next) => {
                    this.settings = next;
                    this.canOptimize = this.status === _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ON_THE_WAY_TO_CUSTOMER && this.settings.canDoRouteOptimization;
                    this.canReorder = this.status === _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ON_THE_WAY_TO_CUSTOMER;
                    this.sendSequence = this.settings.sequenceOnSelect && (this.status === _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].READY_FOR_HAULAGE || this.status === _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ON_THE_WAY_TO_PROVIDER);
                    if (this.status) {
                        this.statusSettings = this.settings.settingsForStatus(this.status);
                    }
                    if (this.content) {
                        // this.content.resize();
                    }
                    if (this.settings) {
                        this.settings.providers.some(provider => {
                            if (provider.hiddenForPage === undefined) {
                                provider.hiddenForPage = new Map();
                            }
                            if (this.status !== undefined) {
                                provider.hiddenForPage.set(this.status, provider.hidden);
                            }
                            return true;
                        });
                    }
                });
            }
            if (!this.summarySubscription) {
                this.summarySubscription = this.orderService.summaryObservable
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.unsubscribe))
                    .subscribe((summary) => this.summary = summary);
            }
            if (!this.unreadNotificationCountSubscription) {
                this.unreadNotificationCountSubscription = this.notificationService.unreadNotificationCountObservable
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.unsubscribe))
                    .subscribe((pending) => this.pendingNotifications = pending);
            }
            if (!this.ionicStatusSubscription) {
                this.ionicStatusSubscription = this.ionicDeploy.observableStatus
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.unsubscribe))
                    .subscribe((status) => this.deployStatus = status);
            }
            if (!this.featureSubscription) {
                this.featureSubscription = this.featuresService.featuresObservable
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(this.unsubscribe))
                    .subscribe(features => this.features = features);
            }
        }
        ionViewDidLeave() {
            this.cleanup();
        }
        cleanup() {
            clearInterval(this.timer);
            this.unsubscribe.next();
            this.unsubscribeAccessor.next();
            this.orderAccessorSubscription = null;
            this.orderAccessorSubscription = null;
            this.searchControlSubscription = null;
            this.connectionStatusSubscription = null;
            this.userSettingsSubscription = null;
            this.summarySubscription = null;
            this.unreadNotificationCountSubscription = null;
            this.ionicStatusSubscription = null;
            this.featureSubscription = null;
            this.unsubscribe.complete();
            this.unsubscribeAccessor.complete();
        }
        displayConnectionDetail() {
            this.connectionStatusService.displayTroobleshootingModal();
        }
        fullSync() {
            this.ga.trackEvent(CONFIG.GA.EVENT.ORDER_LIST_FORCING_SYNC.NAME, CONFIG.GA.EVENT.ORDER_LIST_FORCING_SYNC.ACTION).catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT.ORDER_LIST_FORCING_SYNC} with GA`, error));
            this.orderSync.fullSync()
                .subscribe();
        }
        cancelSearchFilter() {
            this.searching = false;
            this.settingsManager.cancelSearch();
        }
        onSearchInput() {
            this.searching = true;
        }
        transitionDisabled(view, transition) {
            if (view && transition) {
                return (!this.connectionStatus.isNetworkConnectedForUser && transition.requireOnline) || (view.order && view.order.blocked);
            }
        }
        transitionOrder(view, transition, slidingItem) {
            slidingItem.getSlidingRatio().then(value => {
                if (value !== this.SLIDING_ITEM_OPEN_RATIO) {
                    return;
                }
                if (view) {
                    this.ga.trackEvent(CONFIG.GA.EVENT.ORDER_TRANSITION.NAME, CONFIG.GA.EVENT.ORDER_TRANSITION.ACTION, 'OrderTransition').catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT.ORDER_TRANSITION} with GA`, error));
                    view.order.local = true; // Quickly mark order as different from server
                    if (this.sendSequence && transition.to.name === 'ON_THE_WAY_TO_CUSTOMER') {
                        view.order.nextSequenceNumber = ++this.settings.nextSequenceNumber;
                    }
                    this.transitionService.transitionOrder(view.order, transition)
                        .subscribe((order) => {
                        if (slidingItem) {
                            slidingItem.close();
                        }
                    }, () => {
                        view.order.local = false;
                    }, () => {
                        if (slidingItem) {
                            slidingItem.close();
                        }
                    });
                }
            });
        }
        transitionSelection(transition, callback) {
            const selectedOrders = [];
            this.orderGroups.forEach((orderGroup) => {
                orderGroup.orders.forEach((order) => {
                    orderGroup.selected = false;
                    if (order.selected) {
                        if (this.containsTransition(transition, order.transitions)) {
                            selectedOrders.push(order);
                            order.selected = false;
                        }
                    }
                });
            });
            this.updateSelection();
            this.settings.actions.canSelect = this.hasOneSelected;
            this.ga.trackEvent(CONFIG.GA.EVENT.MULTIPLE_SELECT_TRANSITION.NAME, CONFIG.GA.EVENT.MULTIPLE_SELECT_TRANSITION.ACTION, 'OrdersSelected', selectedOrders.length).catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT.MULTIPLE_SELECT_TRANSITION} with GA`, error));
            // Put orders in right basket according to workflow and event name
            const groupedByWorkflowEvent = [];
            selectedOrders
                .sort((a, b) => {
                if (a.order.nextSequenceNumber && b.order.nextSequenceNumber) {
                    return a.order.nextSequenceNumber - b.order.nextSequenceNumber;
                }
                else if (a.order.nextSequenceNumber && !b.order.nextSequenceNumber) {
                    return 1;
                }
                else if (!a.order.nextSequenceNumber && b.order.nextSequenceNumber) {
                    return -1;
                }
                else {
                    return 0;
                }
            })
                .forEach((view) => {
                const activatedTransition = view.transitions.find((value) => transition.event.labelKey === value.event.labelKey);
                let matchingTransition = groupedByWorkflowEvent.find((group) => group.matches(activatedTransition));
                if (!matchingTransition) {
                    matchingTransition = new _app_pages_orders_list_transition_orders_model__WEBPACK_IMPORTED_MODULE_9__["TransitionOrders"](activatedTransition);
                    groupedByWorkflowEvent.push(matchingTransition);
                }
                if (this.sendSequence && transition.to.name === 'ON_THE_WAY_TO_CUSTOMER') {
                    view.order.nextSequenceNumber = ++this.settings.nextSequenceNumber;
                }
                matchingTransition.orders.push(view);
            });
            groupedByWorkflowEvent.forEach((transitionOrders) => {
                this.transitionService.transitionOrders(transitionOrders.orders, transitionOrders.transition);
            });
            callback.next(true);
        }
        // noinspection JSUnusedGlobalSymbols
        onPageWillLeave() {
        }
        toggleOrdering() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.canReorder) {
                    // toast on can reorder is false
                    const toast = yield this.toastCtrl
                        .create({
                        message: this.translateService.instant('messages.errors.reordering_unavailable'),
                        position: 'bottom',
                        buttons: [{
                                text: this.translateService.instant('actions.ok'),
                                role: 'cancel'
                            }],
                        duration: 3 * 1000,
                        cssClass: 'processing-toast'
                    });
                    toast.present();
                }
                else if (this.allOrders && this.allOrders.length) {
                    this.settings.actions.canSelect = false;
                    this.settings.actions.canReorder = !this.settings.actions.canReorder;
                    const itemModal = yield this.modalCtrl.create({
                        component: _app_pages_reorder_modal_reorder_modal_page__WEBPACK_IMPORTED_MODULE_10__["ReorderModalPage"],
                        componentProps: {
                            allOrders: this.allOrders,
                            orderGroups: this.orderGroups,
                            canOptimize: this.canOptimize,
                            withDistance: this.statusSettings.sortOrder === 'distance'
                        }
                    });
                    itemModal.onDidDismiss().then((data) => {
                        this.settings.actions.canReorder = !this.settings.actions.canReorder;
                        if (data && data.data && data.data.success) {
                            this.settings.nextSequenceNumber = data.data.maxSequence || this.allOrders.length;
                            this.statusSettings.groupByProvider = false;
                            if (this.statusSettings.sortOrder !== 'sequence') {
                                this.statusSettings.previousSortOrder = this.statusSettings.sortOrder;
                                this.statusSettings.sortOrder = 'sequence';
                                this.settingsManager.sortChanged();
                            }
                        }
                        this.orderService.applyFilterAndSort();
                    });
                    yield itemModal.present();
                }
                else {
                    // nothing to do, there is nothing to reorder
                    const toast = yield this.toastCtrl
                        .create({
                        message: this.translateService.instant('messages.errors.reordering_no_orders'),
                        position: 'bottom',
                        buttons: [{
                                text: this.translateService.instant('actions.ok'),
                                role: 'cancel'
                            }],
                        duration: 3 * 1000,
                        cssClass: 'processing-toast'
                    });
                    yield toast.present();
                }
            });
        }
        changeAllSelection(option) {
            this.orderGroups.forEach((orderGroup) => {
                orderGroup.selected = this.allSelected;
                orderGroup.orders.forEach((order) => {
                    if (!order.hidden) {
                        order.selected = this.allSelected;
                        if (order.selected && this.sendSequence) {
                            order.order.nextSequenceNumber = ++this.dummySequenceNumber;
                        }
                        else {
                            order.order.nextSequenceNumber = null;
                        }
                    }
                });
            });
            this.updateSelection();
        }
        changeGroupSelection(group, option) {
            group.orders.forEach((order) => {
                if (!order.hidden) {
                    order.selected = group.selected;
                    if (order.selected && this.sendSequence) {
                        order.order.nextSequenceNumber = ++this.dummySequenceNumber;
                    }
                    else {
                        order.order.nextSequenceNumber = null;
                    }
                }
            });
            this.updateSelection();
        }
        toggleSelect() {
            this.allSelected = false;
            this.settings.actions.canReorder = false;
            this.settings.actions.canSelect = !this.settings.actions.canSelect;
            if (!this.settings.actions.canSelect) {
                // Reset selection
                this.orderGroups
                    .forEach((orderGroup) => {
                    orderGroup.selected = false;
                    orderGroup.orders
                        .forEach((order) => {
                        order.selected = false;
                        order.order.nextSequenceNumber = null;
                    });
                });
            }
            this.updateSelection();
            this.ga.trackEvent(CONFIG.GA.EVENT['ORDER_LIST-MULTIPLE_SELECT'].NAME, CONFIG.GA.EVENT['ORDER_LIST-MULTIPLE_SELECT'].ACTION).catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT['ORDER_LIST-MULTIPLE_SELECT']} with GA`, error));
        }
        selectItem(event, orderView) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.settings.actions.canReorder) {
                    // Can we manage reorder here?
                }
                else if (this.settings.actions.canSelect) {
                    // Toggle selection status
                    orderView.selected = !orderView.selected;
                    this.markItem(orderView);
                }
                else {
                    const itemModal = yield this.modalCtrl.create({
                        id: 'order-detail-tabs-page',
                        component: _app_pages_order_detail_tabs_order_detail_tabs_page__WEBPACK_IMPORTED_MODULE_8__["OrderDetailTabsPage"],
                        componentProps: { orderView }
                    });
                    yield itemModal.present();
                }
            });
        }
        markItem(orderView) {
            if (orderView.selected && this.sendSequence) {
                orderView.order.nextSequenceNumber = ++this.dummySequenceNumber;
            }
            else {
                orderView.order.nextSequenceNumber = null;
            }
            this.updateSelection();
        }
        toggleGroupView(groupName) {
            this.settings.providers.some(provider => {
                if (provider.name === groupName) {
                    provider.hidden = !provider.hidden;
                    if (provider.hiddenForPage === undefined) {
                        provider.hiddenForPage = new Map();
                    }
                    if (this.status !== undefined) {
                        provider.hiddenForPage.set(this.status, provider.hidden);
                    }
                    return true;
                }
            });
            this.manageNewOrders(this.accessor);
        }
        identify(index, orderView) {
            return orderView.order.id;
        }
        headerHeight(header, index) {
            return Object(_utils_order_height_calculator__WEBPACK_IMPORTED_MODULE_12__["headerHeight"])(header);
        }
        groupViewHidden(groupName) {
            if (groupName && groupName.startsWith('workflows.names')) {
                return this.disabledSpecialGroups.indexOf(groupName) > -1;
            }
            return (this.settings.providers.find((provider) => {
                return provider.name === groupName;
            })
                || { hidden: false }).hidden;
        }
        shouldHideItem(orderItem, group) {
            const byOrderItemHidden = orderItem.hidden;
            const byGroupName = (group.isWorkflowGroup() && this.groupViewHidden(group.name));
            const byTenant = (!group.isWorkflowGroup() && this.groupViewHidden(orderItem.order.tenantName));
            return byOrderItemHidden || byGroupName || byTenant;
        }
        openMap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const modalPage = yield this.modalCtrl.create({
                    component: _app_pages_map_map_page__WEBPACK_IMPORTED_MODULE_18__["MapPage"],
                    componentProps: { isNetworkConnectedForUser: this.connectionStatus.isNetworkConnectedForUser }
                });
                modalPage.present();
                /*this.appCtrl.getRootNavs()[0].push('MapPage', null, {
                  animate: true,
                  direction: 'forward'
                });*/
            });
        }
        optimizeRoute() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (!this.settings.canDoRouteOptimization || !this.allOrders || this.allOrders.length === 0 || this.allOrders.filter(o => _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatusConverter"].convert(o.order.status) === _models_order_helper_order_status_enum__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ON_THE_WAY_TO_CUSTOMER).length <= 1) {
                    const toast = yield this.toastCtrl
                        .create({
                        message: this.translateService.instant('messages.errors.reordering_no_orders'),
                        position: 'bottom',
                        buttons: [{
                                text: this.translateService.instant('actions.ok'),
                                role: 'cancel'
                            }],
                        duration: 3 * 1000,
                        cssClass: 'processing-toast'
                    });
                    yield toast.present();
                }
                else if (this.canOptimize) {
                    const itemModal = yield this.modalCtrl.create({
                        component: _app_pages_optimize_options_optimize_options_page__WEBPACK_IMPORTED_MODULE_7__["OptimizeOptionsPage"],
                        componentProps: {
                            routeSummary: this.summary
                        }
                    });
                    itemModal.onDidDismiss().then(data => {
                        if (data && data.data && data.data.startPosition) {
                            this.optimizationInProgress = true;
                            this.orderSync.optimizeRoute(data.data.startPosition, data.data.endPosition, data.data.positionType, data.data.startAt, data.data.withTimeConstraints)
                                .subscribe((summary) => {
                                this.orderService.updateSummary(summary);
                                this.optimizationInProgress = false;
                                this.statusSettings.groupByProvider = false;
                                if (this.statusSettings.sortOrder !== 'sequence') {
                                    this.statusSettings.previousSortOrder = this.statusSettings.sortOrder;
                                    this.statusSettings.sortOrder = 'sequence';
                                    this.settingsManager.sortChanged();
                                }
                                this.orderService.applyFilterAndSort();
                            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                if (error.status === 429 || error.name === 'TOO_MANY_REQUESTS') {
                                    const toast = yield this.toastCtrl.create({
                                        message: this.translateService.instant('messages.errors.optimization_limit_reached'),
                                        position: 'bottom',
                                        buttons: [{
                                                text: this.translateService.instant('actions.ok'),
                                                role: 'cancel'
                                            }],
                                        duration: 10 * 1000,
                                        cssClass: 'processing-toast'
                                    });
                                    yield toast.present();
                                }
                                this.optimizationInProgress = false;
                            }));
                        }
                    });
                    yield itemModal.present();
                }
                else {
                    const message = this.settings.canDoRouteOptimization ?
                        this.translateService.instant('messages.errors.optimization_unavailable') :
                        this.translateService.instant('messages.errors.optimization_disabled');
                    const toast = yield this.toastCtrl
                        .create({
                        message,
                        position: 'bottom',
                        buttons: [{
                                text: this.translateService.instant('actions.ok'),
                                role: 'cancel'
                            }],
                        duration: 3 * 1000,
                        cssClass: 'processing-toast'
                    });
                    toast.present();
                }
            });
        }
        updateSelection() {
            let hasAtLeastOneSelected = false;
            this.transitionsSelection = [];
            this.orderGroups.forEach((orderGroup) => {
                orderGroup.orders.forEach((order) => {
                    if (order.selected && !order.hidden) {
                        hasAtLeastOneSelected = true;
                        order.transitions.forEach((transition) => {
                            if (!this.containsTransition(transition, this.transitionsSelection)) {
                                // console.log('adding transition', transition, transition.workflow);
                                this.transitionsSelection.push(transition);
                            }
                        });
                    }
                });
            });
            this.transitionsSelection.sort((a, b) => {
                if (a.event.rank < b.event.rank) {
                    return -1;
                }
                if (a.event.rank > b.event.rank) {
                    return 1;
                }
                return 0;
            });
            if (this.hasOneSelected !== hasAtLeastOneSelected) {
                // this.content.resize();
                this.hasOneSelected = hasAtLeastOneSelected;
            }
        }
        openProperties(ev) {
            this.menuCtrl.toggle('SORT_AND_FILTER_MENU');
        }
        resetFilters() {
            this.settingsManager.resetFilters();
        }
        manageNewOrders(accessor) {
            if (this.status) {
                const byStatus = accessor.getList(this.status);
                // NOTE: we clone the array using spread operator to force change detection
                this.orderGroups = byStatus ? [...byStatus.groups] : [];
                let groupA = null, groupB = null;
                try {
                    this.orderGroups.sort((a, b) => {
                        groupA = a;
                        groupB = b;
                        if (a.isWorkflowGroup() || b.isWorkflowGroup()) {
                            return a.isWorkflowGroup() ? -1 : 1;
                        }
                        else {
                            return a.isWorkflowGroup() ? -1 : ((a.name && b.name) ? a.name.localeCompare(b.name) : ((!a.name) ? -1 : 1));
                        }
                    });
                }
                catch (e) {
                    this.log.error('Problem sorting ', groupA, groupB);
                }
                if (!this.allOrders) {
                    this.allOrders = [];
                }
                this.allOrders.splice(0, this.allOrders.length);
                // this.allOrders = [];
                // this.ngZone.run(() => {
                this.orderGroups.forEach((group) => {
                    // Reassign visibility according to provider setting
                    this.settings.providers.forEach(provider => {
                        if (provider.name === group.name) {
                            if (provider.hiddenForPage !== undefined) {
                                if (provider.hiddenForPage.get(this.status) === undefined) {
                                    provider.hiddenForPage.set(this.status, false);
                                    group.hidden = provider.hiddenForPage.get(this.status);
                                }
                            }
                        }
                    });
                    if (!group.hidden) {
                        if (this.statusSettings.activeFilter.filtering) {
                            group.orders.forEach(view => {
                                if (!view.hidden) {
                                    const existingInList = this.allOrders.findIndex((value) => value.order.id.toString() === view.order.id.toString());
                                    if (existingInList < 0) { // PM-436
                                        this.allOrders.push(view);
                                    }
                                    else {
                                        this.log.warn('Trying to add an existing view to status ', this.status, view);
                                    }
                                }
                            });
                        }
                        else {
                            if (this.allOrders.length > 0) {
                                this.log.trace(`Added ${group.orders.length} orders to array of ${this.allOrders.length}`);
                            }
                            Array.prototype.push.apply(this.allOrders, group.orders);
                        }
                    }
                    this.allOrders = [...this.allOrders];
                });
            }
        }
        /**
         * Method to track changes in the order list
         * For more details please see cdkVirtualForTrackBy here https://material.angular.io/cdk/scrolling/api
         * NOTE: we may want to make the trackBy less complex and use other means to track changes
         */
        trackOrderGroupBy(_index, item) {
            return this.commonUtils.hashCode(item);
        }
        containsTransition(transition, transitions) {
            let contains = false;
            for (let k = 0, len = transitions.length; k < len; k++) {
                const existingTransition = transitions[k];
                if (existingTransition.event.labelKey === transition.event.labelKey) {
                    contains = true;
                }
            }
            return contains;
        }
        groupOrders() {
            this.settingsManager.flipGrouping(this.status);
            this.settingsManager.sortChanged();
        }
        openSortMenu(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const popover = yield this.popoverCtrl.create({
                    component: _app_pages_sort_popover_sort_popover_page__WEBPACK_IMPORTED_MODULE_11__["SortPopoverPage"],
                    event: ev
                });
                yield popover.present();
            });
        }
        hints() {
            if (!this.hintsIntroJs) {
                this.hintsIntroJs = intro_js_intro_js__WEBPACK_IMPORTED_MODULE_14___default()();
                this.hintsIntroJs.setOptions({
                    hintButtonLabel: 'Ok',
                    hints: [
                        {
                            element: '.selection-intro',
                            hint: 'Sélection multiple'
                        },
                        // {element: '.native-map-intro', hint: 'This opens the map'},
                        { element: '.ordering-intro', hint: 'Reorder delivery sequence' },
                        {
                            element: '.optimize-intro',
                            hint: 'Optimize your route.<br /> <em>Route optimization</em> is only available if your manager contacted Mobilus to activate it'
                        },
                        { element: '.grouping-intro', hint: 'Grouper par organisation' },
                        { element: '.sort-intro', hint: 'Tri des commandes' },
                        { element: '.filter-intro', hint: 'Recherche et filtre sur les commandes' },
                    ]
                });
                // this.introJs.addHints();
                this.hintsIntroJs.showHints();
            }
            if (!this.withHints) {
                this.withHints = true;
                this.hintsIntroJs.showHints();
            }
            else {
                this.withHints = false;
                this.hintsIntroJs.hideHints();
            }
        }
        openMenu(ev) {
            this.menuCtrl.toggle('MAIN_MENU');
        }
        itemSwiped() {
            this.ga.trackEvent(CONFIG.GA.EVENT.ORDER_ITEM_SWIPE.NAME, CONFIG.GA.EVENT.ORDER_ITEM_SWIPE.ACTION, 'OrderSwiped')
                .catch(error => this.log.error(`Unable to track event ${CONFIG.GA.EVENT.ORDER_ITEM_SWIPE} with GA`, error));
        }
        openMapForProvider(provider) {
            this.mapService.openMap(null, provider.position, provider.address.addressOneLine, provider.name);
        }
    }
    OrdersListPage.ɵfac = function OrdersListPage_Factory(t) { return new (t || OrdersListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_service_order_service__WEBPACK_IMPORTED_MODULE_20__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_order_sync_order_sync_service__WEBPACK_IMPORTED_MODULE_21__["OrderSyncService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service_notification_service__WEBPACK_IMPORTED_MODULE_22__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_transition_transition_service__WEBPACK_IMPORTED_MODULE_23__["TransitionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ionic_deploy_ionic_deploy_service__WEBPACK_IMPORTED_MODULE_24__["IonicDeploy"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_models_information_device_info_model__WEBPACK_IMPORTED_MODULE_25__["DeviceInfo"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_settings_providers_settings_service__WEBPACK_IMPORTED_MODULE_26__["SettingsManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_log_log_service__WEBPACK_IMPORTED_MODULE_27__["LogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_connection_status_service_connection_status_service__WEBPACK_IMPORTED_MODULE_29__["ConnectionStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mobile_configuration_service_mobile_context_service__WEBPACK_IMPORTED_MODULE_30__["MobileContextService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_features_features_service__WEBPACK_IMPORTED_MODULE_31__["FeaturesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mbls_analytics_service_MblsAnalyticsService__WEBPACK_IMPORTED_MODULE_32__["MblsAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_33__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_map_map_service__WEBPACK_IMPORTED_MODULE_34__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_utils_common_utils__WEBPACK_IMPORTED_MODULE_35__["CommonUtils"])); };
    OrdersListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersListPage, selectors: [["app-order-list"]], viewQuery: function OrdersListPage_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            }
        }, decls: 32, vars: 26, consts: [["slot", "start", 3, "click"], ["src", "assets/images/logo_menu.png"], ["color", "danger", 4, "ngIf"], ["class", "update-cloud", 4, "ngIf"], ["slot", "end"], [3, "click", 4, "ngIf"], ["class", "top-bar-action-button selection-intro", 3, "color", "click", 4, "ngIf"], ["class", "top-bar-action-button native-map-intro", 3, "click", 4, "ngIf"], ["class", "top-bar-action-button ordering-intro", 3, "ngClass", "click", 4, "ngIf"], ["class", "top-bar-action-button  optimize-intro", 3, "ngClass", "click", 4, "ngIf"], ["class", "top-bar-action-button grouping-intro", 3, "color", "click", 4, "ngIf"], ["class", "top-bar-action-button sort-intro", 3, "click", 4, "ngIf"], ["slot", "icon-only", "class", "filter-intro", 3, "color", "click", 4, "ngIf"], ["class", "status-toolbar", 3, "color", "click", 4, "ngIf"], ["ordersListContent", ""], ["horizontal", "end", "vertical", "bottom", 3, "click", 4, "ngIf"], ["showCancelButton", "always", "inputmode", "search", 3, "ngModel", "formControl", "placeholder", "ngModelChange", "ionInput", "ionClear", 4, "ngIf"], ["class", "spinner-container", 4, "ngIf"], ["class", "select-multiple-header", "style", "height: 2rem; padding-left: 0.5rem;", 4, "ngIf"], ["style", "height: 100%; width:100%; overflow-x: hidden;", "orientation", "vertical", 3, "itemSize", "maxBufferPx", "minBufferPx", 4, "ngIf"], ["class", "italic text-muted", 4, "ngIf"], ["class", "item-ios-with-padding group-item-divider", 3, "hidden", "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["color", "dark", 4, "ngIf"], ["class", "ion-no-margin ion-no-padding", 4, "ngIf"], [4, "ngIf"], ["color", "danger"], [1, "update-cloud"], ["size", "xs", "transform", "up-8", 3, "icon"], [3, "click"], ["size", "lg", 3, "icon"], [1, "top-bar-action-button", "selection-intro", 3, "color", "click"], ["size", "lg", 1, "fa-bar-button", 3, "icon"], [1, "top-bar-action-button", "native-map-intro", 3, "click"], [1, "top-bar-action-button", "ordering-intro", 3, "ngClass", "click"], [1, "top-bar-action-button", "optimize-intro", 3, "ngClass", "click"], ["size", "lg", 1, "fa-bar-button", 3, "icon", "hidden"], ["size", "lg", 1, "fa-bar-button", "icon-color-primary", 3, "icon", "pulse", "hidden"], [1, "top-bar-action-button", "grouping-intro", 3, "color", "click"], [1, "top-bar-action-button", "sort-intro", 3, "click"], ["size", "lg", 3, "icon", 4, "ngIf"], ["size", "lg", "class", "sort-icon", 3, "icon", 4, "ngIf"], ["class", "fa-fw fa-1x sort-icon", 4, "ngIf"], ["size", "lg", 1, "sort-icon", 3, "icon"], [1, "fa-fw", "fa-1x", "sort-icon"], ["transform", "grow-5 left-5", 3, "icon"], ["transform", "shrink-6 right-5 up-4", 2, "font-weight", "bold", 3, "content"], ["transform", "shrink-6 right-5 up-4", 3, "icon"], ["slot", "icon-only", 1, "filter-intro", 3, "color", "click"], [1, "status-toolbar", 3, "color", "click"], [1, "status-bar-content", "question-icon", 3, "icon"], ["class", "disconnected status-icon", 3, "icon", 4, "ngIf"], [1, "status-bar-content"], [1, "disconnected", "status-icon", 3, "icon"], ["name", "dots", 1, "status-bar-content"], ["horizontal", "end", "vertical", "bottom", 3, "click"], ["color", "lightwarning"], [3, "icon", "ngClass"], ["showCancelButton", "always", "inputmode", "search", 3, "ngModel", "formControl", "placeholder", "ngModelChange", "ionInput", "ionClear"], [1, "spinner-container"], [1, "select-multiple-header", 2, "height", "2rem", "padding-left", "0.5rem"], [1, "order-item-select-all", 3, "ngModel", "ngModelChange", "ionChange"], [1, "ion-checkbox-label", 2, "margin-top", "0"], ["translate", "actions.select_all"], ["orientation", "vertical", 2, "height", "100%", "width", "100%", "overflow-x", "hidden", 3, "itemSize", "maxBufferPx", "minBufferPx"], ["itemList", ""], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [1, "item-ios-with-padding", "group-item-divider", 3, "ngClass", "hidden"], [1, "order-item-select-group", 3, "hidden", "ngModel", "ngModelChange", "ionChange"], ["color", "primary"], [1, "subtitle"], ["slot", "end", 3, "ngModel", "ngModelChange"], [3, "hidden", 4, "ngFor", "ngForOf"], [3, "hidden"], ["slidingItem", ""], [1, "item-no-padding", "ion-text-wrap", "item-inner", "item-native", 3, "hidden"], ["class", "order-item-select", "slot", "start", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], ["slot", "start", 3, "order", 4, "ngIf"], [1, "order-item-fill", 3, "orderView", "index", "reference", "orderStatus", "withDistance", "click"], ["side", "end"], ["expand", "full", "class", "sliding-item-button", 3, "color", "ngClass", "hidden", "disabled", "click", 4, "ngFor", "ngForOf"], ["slot", "start", 1, "order-item-select", 3, "ngModel", "ngModelChange", "ionChange"], ["slot", "start", 3, "order"], ["expand", "full", 1, "sliding-item-button", 3, "color", "ngClass", "hidden", "disabled", "click"], [3, "icon"], [1, "italic", "text-muted"], ["lines", "none"], [1, "text-center"], [1, "item-ios-with-padding", "group-item-divider", 3, "hidden", "ngClass"], ["color", "dark"], ["slot", "start", 3, "icon"], ["translate", "options.activeFilters.label"], ["slot", "end", 3, "click"], ["translate", "options.activeFilters.clear"], [1, "ion-no-margin", "ion-no-padding"], ["size", "6", "class", "transitions-buttons-col", 4, "ngFor", "ngForOf"], ["size", "6", 1, "transitions-buttons-col"], [3, "transition", "connected", "onClick"], ["size", "12", "class", "transitions-buttons-col", 4, "ngFor", "ngForOf"], ["size", "12", 1, "transitions-buttons-col"], [4, "ngFor", "ngForOf"], ["lines", "none", "color", "secondary", 1, "transition-button"], ["size", "lg", "slot", "start", 3, "icon"], [1, "transitions-buttons-text"], ["size", "lg", "slot", "end", 3, "icon", "click"]], template: function OrdersListPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-menu-button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListPage_Template_ion_menu_button_click_2_listener($event) { return ctx.openMenu($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OrdersListPage_ion_badge_4_Template, 2, 1, "ion-badge", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OrdersListPage_fa_layers_5_Template, 2, 2, "fa-layers", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-buttons", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OrdersListPage_ion_button_7_Template, 2, 2, "ion-button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OrdersListPage_ion_button_8_Template, 2, 3, "ion-button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OrdersListPage_ion_button_9_Template, 2, 2, "ion-button", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrdersListPage_ion_button_10_Template, 2, 5, "ion-button", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OrdersListPage_ion_button_11_Template, 3, 10, "ion-button", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OrdersListPage_ion_button_12_Template, 2, 3, "ion-button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OrdersListPage_ion_button_13_Template, 5, 4, "ion-button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, OrdersListPage_ion_button_14_Template, 2, 3, "ion-button", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OrdersListPage_ion_toolbar_15_Template, 8, 8, "ion-toolbar", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-content", null, 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, OrdersListPage_ion_fab_18_Template, 3, 4, "ion-fab", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "awaiting-transition-indicator");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OrdersListPage_ion_searchbar_20_Template, 2, 5, "ion-searchbar", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrdersListPage_div_21_Template, 2, 0, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OrdersListPage_ion_item_divider_22_Template, 4, 1, "ion-item-divider", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, OrdersListPage_cdk_virtual_scroll_viewport_24_Template, 3, 5, "cdk-virtual-scroll-viewport", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, OrdersListPage_ion_item_group_25_Template, 5, 3, "ion-item-group", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-list");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, OrdersListPage_ion_item_divider_27_Template, 9, 7, "ion-item-divider", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-footer", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, OrdersListPage_ion_toolbar_29_Template, 6, 2, "ion-toolbar", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, OrdersListPage_ion_grid_30_Template, 3, 2, "ion-grid", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, OrdersListPage_ion_footer_31_Template, 3, 1, "ion-footer", 25);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pendingNotifications && !ctx.deployStatus.newVersionAvailable);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deployStatus && ctx.deployStatus.newVersionAvailable);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDebug && ctx.features.introJsButtons);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.buttons.multipleSelection);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.buttons.map);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.buttons.reordering);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.buttons.optimization && ctx.settings.canDoRouteOptimization);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.buttons.grouping);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.buttons.sorting);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.buttons.filter);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.connectionStatus.isNetworkConnectedForUser || !ctx.connectionStatus.isMqttConnectedForUser);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.connectionStatus.isNetworkConnectedForUser && !ctx.connectionStatus.isMqttConnectedForUser);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.statusSettings.search.allFields);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searching);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.actions.canSelect);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allOrders && ctx.allOrders.length > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (!ctx.allOrders || ctx.allOrders.length < 1) && !ctx.refreshInProgress);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orderGroups);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](22, _c25, ctx.transitionsSelection.length === 1, ctx.transitionsSelection.length === 4, ctx.transitionsSelection.length === 6));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.statusSettings.activeFilter.filtering);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasOneSelected);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.status === ctx.orderOnTheWayStatus && ctx.allOrders.length === 0 && ctx.settings.displayProviderFooter && !ctx.statusSettings.activeFilter.filtering);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonMenuButton"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonContent"], _app_components_awaiting_transition_indicator_awaiting_transition_indicator_component__WEBPACK_IMPORTED_MODULE_37__["AwaitingTransitionIndicatorComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonBadge"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__["FaIconComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__["FaLayersTextComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonItemDivider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonLabel"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["CdkVirtualForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonItem"], _app_components_order_item_order_item_component__WEBPACK_IMPORTED_MODULE_40__["OrderItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonItemOptions"], _app_components_sequence_number_sequence_number_component__WEBPACK_IMPORTED_MODULE_41__["SequenceNumberComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonItemOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonItemGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_19__["IonCol"], _app_components_transition_button_transition_button_component__WEBPACK_IMPORTED_MODULE_42__["TransitionButtonComponent"]], pipes: [_pipes_distance_distance_unit_pipe__WEBPACK_IMPORTED_MODULE_43__["DistanceUnitPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslatePipe"]], styles: [".label-md[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.item-md[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.item-inner[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\nion-col[_ngcontent-%COMP%] {\n  padding: 1px;\n}\n\n#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n}\n\n.order-item-select-all[_ngcontent-%COMP%] {\n  margin-right: 10px !important;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\n.order-item-select-group[_ngcontent-%COMP%] {\n  margin-right: 4px !important;\n}\n\n.select-multiple-header[_ngcontent-%COMP%] {\n  background-color: darkgrey;\n  color: whitesmoke;\n}\n\n.select-multiple-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-left: 1px;\n}\n\nion-list-header.select-multiple-header[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 8px;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n\n.provider_group[_ngcontent-%COMP%] {\n  background-color: #2d2d2d;\n  color: whitesmoke;\n}\n\n.status-label[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n\n.emphasized-transition-button[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\n.group-item-divider-bigger[_ngcontent-%COMP%] {\n  height: 55px;\n}\n\nion-item-divider.group-item-divider[_ngcontent-%COMP%] {\n  padding-left: 7px;\n}\n\n.group-item-divider[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.reorder-override[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%] {\n  max-width: 50px;\n}\n\n.list-md[_ngcontent-%COMP%], .list-ios[_ngcontent-%COMP%] {\n  margin: -1px 0 0;\n}\n\n.item.item-ios[_ngcontent-%COMP%]   .checkbox-ios[_ngcontent-%COMP%] {\n  position: relative;\n  right: 15px;\n}\n\n.col-sequence[_ngcontent-%COMP%] {\n  margin: auto;\n  left: -5px;\n  padding: 0;\n}\n\n.order-item-select[_ngcontent-%COMP%] {\n  margin: 0.5em;\n}\n\n.inactive-button[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n.icon-color-primary[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n}\n\n.update-cloud[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n}\n\n.status-bar-content[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\nion-toolbar.status-toolbar.toolbar[_ngcontent-%COMP%] {\n  min-height: 24px !important;\n  max-height: 24px !important;\n}\n\nion-toolbar.status-toolbar.toolbar.toolbar-md[_ngcontent-%COMP%] {\n  min-height: 24px !important;\n  max-height: 24px !important;\n}\n\nion-toolbar.status-toolbar.toolbar.toolbar-ios[_ngcontent-%COMP%] {\n  min-height: 24px !important;\n  max-height: 24px !important;\n}\n\n.status-icon[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n\n.sort-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n}\n\nion-toolbar[_ngcontent-%COMP%]    > ion-item[_ngcontent-%COMP%]    > fa-icon[_ngcontent-%COMP%] {\n  padding-right: 0.7em;\n}\n\nion-toolbar[_ngcontent-%COMP%]    > fa-icon[_ngcontent-%COMP%] {\n  padding-left: 0.2em;\n  padding-right: 0.7em;\n}\n\n.divider-badge[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  padding-end: 0px;\n  padding-bottom: 0px;\n  padding-start: 0px;\n}\n\n.sliding-item-button[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 0;\n  margin: 0;\n}\n\n.ion-checkbox-label[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n\n.ion-item-no-inner-padding[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.row-class[_ngcontent-%COMP%] {\n  width: 365px !important;\n}\n\nsequence-number[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url('logo_faded.e0e432f717024e160071.png');\n  background-repeat: no-repeat;\n  background-size: 100px;\n  background-position: center;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: x-small;\n  width: 40%;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4cnlsdHNvdi9HaXQvQ09VUklFUi1NT0JJTEUtQVBQL2ZlYXR1cmUtQ0FQUC0xLW1ha2VzLXN1cmUtZ2VvbG9jYXRpb24tZnVuY3Rpb25zLWFyZS13b3JraW5nLWluLXB3YS9zcmMvYXBwL3BhZ2VzL29yZGVycy1saXN0L29yZGVycy1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXJzLWxpc3Qvb3JkZXJzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUVFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSw0QkFBQTtBQ0FGOztBRElBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLCtCQUFBO0FDSkY7O0FET0E7RUFDRSwrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usc0JBQUE7QUNKRjs7QURPQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUNKRjs7QURRQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUNMRjs7QURTQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSwrQkFBQTtBQ05GOztBRFFBO0VBQ0Usb0JBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtBQ0xGOztBRFFBO0VBQ0UsdUJBQUE7QUNMRjs7QURRQTtFQUNFLFNBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcnMtbGlzdC9vcmRlcnMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtbWQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pdGVtLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4ub3JkZXItaXRlbS1zZWxlY3QtYWxsIHtcbiAgLy9wYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5vcmRlci1pdGVtLXNlbGVjdC1ncm91cCB7XG4gIG1hcmdpbi1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gIC8vcGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdC1tdWx0aXBsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5zZWxlY3QtbXVsdGlwbGUtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIuc2VsZWN0LW11bHRpcGxlLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvdmlkZXJfZ3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnN0YXR1cy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4uZW1waGFzaXplZC10cmFuc2l0aW9uLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmdyb3VwLWl0ZW0tZGl2aWRlci1iaWdnZXIge1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIuZ3JvdXAtaXRlbS1kaXZpZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi5ncm91cC1pdGVtLWRpdmlkZXIge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5yZW9yZGVyLW92ZXJyaWRlIGlvbi1yZW9yZGVyIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG4ubGlzdC1tZCwgLmxpc3QtaW9zIHtcbiAgbWFyZ2luOiAtMXB4IDAgMDtcbn1cblxuLml0ZW0uaXRlbS1pb3MgLmNoZWNrYm94LWlvcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5jb2wtc2VxdWVuY2Uge1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IC01cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5vcmRlci1pdGVtLXNlbGVjdCB7XG4gIG1hcmdpbjogMC41ZW07XG59XG4udG9wLWJhci1hY3Rpb24tYnV0dG9uIHtcbiAgLy9tYXJnaW46IDVweDtcbn1cblxuLmluYWN0aXZlLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmljb24tY29sb3ItcHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi51cGRhdGUtY2xvdWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uc3RhdHVzLWJhci1jb250ZW50IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLXRvb2xiYXIuc3RhdHVzLXRvb2xiYXIudG9vbGJhciB7XG4gIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4vL29uIEFuZHJvaWRcbmlvbi10b29sYmFyLnN0YXR1cy10b29sYmFyLnRvb2xiYXIudG9vbGJhci1tZCB7XG4gIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4vL29uIGlPU1xuaW9uLXRvb2xiYXIuc3RhdHVzLXRvb2xiYXIudG9vbGJhci50b29sYmFyLWlvcyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4uc3RhdHVzLWljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uc29ydC1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cbmlvbi10b29sYmFyID4gaW9uLWl0ZW0gPiBmYS1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMC43ZW07XG59XG5cbmlvbi10b29sYmFyID4gZmEtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMC4yZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuN2VtO1xufVxuXG4uZGl2aWRlci1iYWRnZSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctZW5kOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLnNsaWRpbmctaXRlbS1idXR0b24gIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5pb24tY2hlY2tib3gtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pb24taXRlbS1uby1pbm5lci1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ucm93LWNsYXNzIHtcbiAgd2lkdGg6IDM2NXB4ICFpbXBvcnRhbnQ7XG59XG5cbnNlcXVlbmNlLW51bWJlcntcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb19mYWRlZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iLCIubGFiZWwtbWQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pdGVtLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uaXRlbS1pbm5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG4ub3JkZXItaXRlbS1zZWxlY3QtYWxsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4ub3JkZXItaXRlbS1zZWxlY3QtZ3JvdXAge1xuICBtYXJnaW4tcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LW11bHRpcGxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnNlbGVjdC1tdWx0aXBsZS1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbmlvbi1saXN0LWhlYWRlci5zZWxlY3QtbXVsdGlwbGUtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm92aWRlcl9ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uc3RhdHVzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi5lbXBoYXNpemVkLXRyYW5zaXRpb24tYnV0dG9uIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uZ3JvdXAtaXRlbS1kaXZpZGVyLWJpZ2dlciB7XG4gIGhlaWdodDogNTVweDtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlci5ncm91cC1pdGVtLWRpdmlkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbn1cblxuLmdyb3VwLWl0ZW0tZGl2aWRlciB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLnJlb3JkZXItb3ZlcnJpZGUgaW9uLXJlb3JkZXIge1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbi5saXN0LW1kLCAubGlzdC1pb3Mge1xuICBtYXJnaW46IC0xcHggMCAwO1xufVxuXG4uaXRlbS5pdGVtLWlvcyAuY2hlY2tib3gtaW9zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTVweDtcbn1cblxuLmNvbC1zZXF1ZW5jZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogLTVweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm9yZGVyLWl0ZW0tc2VsZWN0IHtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cblxuLmluYWN0aXZlLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmljb24tY29sb3ItcHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi51cGRhdGUtY2xvdWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uc3RhdHVzLWJhci1jb250ZW50IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLXRvb2xiYXIuc3RhdHVzLXRvb2xiYXIudG9vbGJhciB7XG4gIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhci5zdGF0dXMtdG9vbGJhci50b29sYmFyLnRvb2xiYXItbWQge1xuICBtaW4taGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIuc3RhdHVzLXRvb2xiYXIudG9vbGJhci50b29sYmFyLWlvcyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4uc3RhdHVzLWljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uc29ydC1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuaW9uLXRvb2xiYXIgPiBpb24taXRlbSA+IGZhLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjdlbTtcbn1cblxuaW9uLXRvb2xiYXIgPiBmYS1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcbiAgcGFkZGluZy1yaWdodDogMC43ZW07XG59XG5cbi5kaXZpZGVyLWJhZGdlIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1lbmQ6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uc2xpZGluZy1pdGVtLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW9uLWNoZWNrYm94LWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaW9uLWl0ZW0tbm8taW5uZXItcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLnJvdy1jbGFzcyB7XG4gIHdpZHRoOiAzNjVweCAhaW1wb3J0YW50O1xufVxuXG5zZXF1ZW5jZS1udW1iZXIge1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvX2ZhZGVkLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */"] });
    return OrdersListPage;
})();



/***/ })

}]);
//# sourceMappingURL=0-es2015.ab0d438c9a9b3c2a5a66.js.map