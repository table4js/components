(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	else if(typeof define === 'function' && define.amd)
		define("Table4JS", ["knockout"], factory);
	else if(typeof exports === 'object')
		exports["Table4JS"] = factory(require("knockout"));
	else
		root["Table4JS"] = factory(root["ko"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_knockout__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./sources/core/actions.scss":
/*!***********************************!*\
  !*** ./sources/core/actions.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/core/dropdown-actions.scss":
/*!********************************************!*\
  !*** ./sources/core/dropdown-actions.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/bool.scss":
/*!*********************************!*\
  !*** ./sources/table/bool.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/cell-editor.scss":
/*!****************************************!*\
  !*** ./sources/table/cell-editor.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/column-filter.scss":
/*!******************************************!*\
  !*** ./sources/table/column-filter.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/filter-default.scss":
/*!*******************************************!*\
  !*** ./sources/table/filter-default.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/filter-select.scss":
/*!******************************************!*\
  !*** ./sources/table/filter-select.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/index.scss":
/*!**********************************!*\
  !*** ./sources/table/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/search.scss":
/*!***********************************!*\
  !*** ./sources/table/search.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/summary.scss":
/*!************************************!*\
  !*** ./sources/table/summary.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/knockout/table/bool-cell-editor.html":
/*!******************************************************!*\
  !*** ./sources/knockout/table/bool-cell-editor.html ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-table__bool-cell-editor\">\n  <input type=\"checkbox\"\n    data-bind=\"checked: value, event: { change: function(_, e) { $data.value = e.target.checked; $data.complete(true); } }\"\n  />\n</div>");

/***/ }),

/***/ "./sources/knockout/table/bool-cell-viewer.html":
/*!******************************************************!*\
  !*** ./sources/knockout/table/bool-cell-viewer.html ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"table4js-table__bool-cell-viewer\" data-bind=\"css: className\">\n    <span class=\"table4js-table__bool-cell-viewer-circle\"\n    data-bind=\"style: { backgroundColor: cell.data ? 'green' : 'red' }\" \n    ></span>\n</span>");

/***/ }),

/***/ "./sources/knockout/table/cell-editor.html":
/*!*************************************************!*\
  !*** ./sources/knockout/table/cell-editor.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-table__cell-editor\">\n  <input data-bind=\"value: value, event: { keyup: function(_, e) { $data.processKeyUp(e); } }\" />\n</div>");

/***/ }),

/***/ "./sources/knockout/table/cell-viewer.html":
/*!*************************************************!*\
  !*** ./sources/knockout/table/cell-viewer.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span data-bind=\"html: cell.text, css: className\"></span>\n");

/***/ }),

/***/ "./sources/knockout/table/cell.html":
/*!******************************************!*\
  !*** ./sources/knockout/table/cell.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<td class=\"table4js-table-cell\" data-bind=\"attr: {rowspan: table.isMergedСells ? cell.count : 1},\n  css: (cell.count > 1) && table.isMergedСells ? 'table4js-table-cell--merged ' : '',\n  visible: (cell.count > 0) || !table.isMergedСells,\n  style: {'background-color': cell.color} \">\n  <!-- ko ifnot: (cell.inplaceEditor && table.config.enableEdit) -->\n    <div class=\"table4js-table-cell__container\" data-bind=\"css: containerCss, style: {top: isMergedCell() ? table.tableHeadHeight - 2 + 'px' : undefined}, click: startEdit\">\n      <!-- ko component: { name: cell.viewer, params: { cell: cell, className: contentCss } } -->\n      <!-- /ko -->\n    </div>\n  <!-- /ko -->\n  <!-- ko if: (cell.inplaceEditor && table.config.enableEdit) -->\n    <!-- ko component: { name: cell.editor, params: { model: cell.inplaceEditor } } -->\n    <!-- /ko -->\n  <!-- /ko -->\n</td>");

/***/ }),

/***/ "./sources/knockout/table/column-filter-item.html":
/*!********************************************************!*\
  !*** ./sources/knockout/table/column-filter-item.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<select class=\"table4js-filter___operation\" data-bind=\"options: operations, value: operation, optionsText: 'text'\"></select>\n<!-- ko if: showOperand -->\n  <!-- ko if: operation.op == \"EQ\" -->\n  <table4js-filter-select class=\"abrs-filter__value\"\n    params=\"value: filterItemValue, columnName: column.name, columnType: column.type, getColumnData: getColumnData\">\n  </table4js-filter-select>\n  <!-- /ko -->\n  <!-- ko if: operation.op != \"EQ\" -->\n  <div class=\"table4js-filter__operand\" data-bind=\"component: { name: filterEditorName, params: { value: filterItemValue, column: column } }\">\n  </div>\n  <!-- /ko -->\n<!-- /ko -->\n");

/***/ }),

/***/ "./sources/knockout/table/column-filter.html":
/*!***************************************************!*\
  !*** ./sources/knockout/table/column-filter.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko if: filterItems.length > 0 -->\n<div class=\"table4js-filter-item\">\n  <div class=\"table4js-filter__title table4js-filter-text\" data-bind=\"text: column.title + ':'\"></div>\n  <!-- ko foreach: filterItems -->\n    <!-- ko if: $index() > 0 -->\n    <div class=\"table4js-filter__operator table4js-filter-text\" data-bind=\"text: '&'\"></div>\n    <!-- /ko -->\n    <!-- ko component: { name: 'table4js-column-filter-item', params: { filterItem: $data } } -->\n    <!-- /ko -->\n    <div class=\"table4js-filter__remove\"\n      data-bind=\"click: $parent.removeItem, clickBubble: false\">\n      <div class=\"table4js-filter__remove-icon table4js-svg-icon\" data-bind=\"html: $root.icons.cross\"></div>\n    </div>\n  <!-- /ko -->\n</div>\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/table/filter-default.html":
/*!****************************************************!*\
  !*** ./sources/knockout/table/filter-default.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<input style=\"width: 100%;\" placeholder=\"*\" data-bind=\"value: value.value\" />");

/***/ }),

/***/ "./sources/knockout/table/filter-select.html":
/*!***************************************************!*\
  !*** ./sources/knockout/table/filter-select.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-select-selection\">\n    <!-- ko foreach: selectedItems -->\n    <div class=\"table4js-select-selection-item\">\n        <span class=\"table4js-select-item-title\" data-bind=\"text: name\"></span>\n        <div class=\"table4js-svg-icon table4js-select-item-close\" data-bind=\"click: $parent.deleteItems, html: $root.icons.cross\"></div>\n    </div>\n    <!-- /ko -->\n</div>\n<div class=\"table4js-select-button table4js-svg-icon\" data-bind=\"click: toggle, attr: { title: title }, html: $root.icons.arrowdown\"></div>\n<!-- ko if: isOpen -->\n<ul class=\"table4js-select__dropdown-menu table4js-button-toggle__dropdown-menu\" data-bind=\"click: function(_, e) { e.stopPropagation(); }\">\n    <!-- ko if: isFilterSearchByType -->\n    <div class=\"table4js-select__dropdown-search-container\">\n        <input class=\"table4js-select__dropdown-search\" placeholder=\"*\" data-bind=\"value: filterText, valueUpdate: 'afterkeydown'\" />\n    </div>\n    <!-- /ko -->\n    <!-- ko foreach: foundItems -->\n    <div class=\"table4js-select__dropdown-item\" data-bind=\"click: $parent.clickItem\">\n        <input class=\"table4js-select__dropdown-hide-check\" type=\"checkbox\" data-bind=\"checked: $parent.isChecked($data)\" />\n        <div class=\"table4js-svg-icon table4js-select__dropdown-check\" data-bind=\"html: $root.icons.check\"></div>\n        <span class=\"table4js-select__dropdown-label\" data-bind=\"text: name\"></span>\n    </div>\n    <!-- /ko -->\n    <!-- ko if: isLoadMore -->\n    <button class=\"table4js-select__dropdown-button\" data-bind=\"click: loadMore\">\n        <span class=\"table4js-action-button__label\">More</span>\n    </button>\n    <!-- /ko -->\n</ul>\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/table/index.html":
/*!*******************************************!*\
  !*** ./sources/knockout/table/index.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-table-resizable-container\">\n  <div class=\"table4js-table-scroll-container\">\n    <table class=\"table4js-table\">\n      <thead class=\"table4js-table__header table4js-table-sticky-component\">\n        <tr class=\"table4js-table-header-tools\">\n          <th class=\"table4js-table-header-tools__cell\" colspan=\"100%\">\n            <div class=\"table4js-table-header-tools__container table4js-table-group-header-technical-cell\">\n              <div class=\"table4js-table-preheader\">\n                <div class=\"table4js-table-search-group\">\n                  <!-- ko if: showSearch -->\n                  <table4js-search params=\"model: searchModel\"></table4js-search>\n                  <!-- /ko -->\n                  <table4js-actions class=\"table4js-table-actions\" params=\"model: $data, options: { action: 'topActions' }\">\n                  </table4js-actions>\n                  <!-- ko if: $data.getActions('dropdownActions').length > 0 -->\n                  <table4js-dropdown-actions class=\"table4js-table-dropdown table4js-table-actions-menu\"\n                    params=\"data: $data, actions: 'dropdownActions'\">\n                  </table4js-dropdown-actions>\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- ko if: viewFilterTable -->\n              <div class=\"table4js-table-filter\">\n                <div class=\"table4js-table-filter__container\">\n                  <!-- ko foreach: columns -->\n                  <!-- ko component: { name: 'table4js-column-filter', params: { context: filterContext } } -->\n                  <!-- /ko -->\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </th>\n        </tr>\n        <tr class=\"table4js-table-header-title\">\n          <th class=\"table4js-table-header-title__cell table4js-table-switch\">\n            <div class=\"table4js-table-switch__text\"\n              data-bind=\"css: {'switch__text--selected': isNumber}, click: () => $data.isNumber = !$data.isNumber\">#\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"table4js-table-header-title__cell\"\n            data-bind=\"event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}\">\n            <div class=\"table4js-table-title\">\n              <span class=\"table4js-table-title__text\" data-bind=\"html: title, click: $parent.clickColumn\"></span>\n              <div class=\"table4js-table-title__tools\">\n                <div class=\"table4js-svg-icon table4js-table-title__sorter\" data-bind=\"visible: order === false, html: $root.icons.sortup\"></div>\n                <div class=\"table4js-svg-icon table4js-table-title__sorter\" data-bind=\"visible: order === true, html: $root.icons.sortdown\"></div>\n                <div class=\"table4js-svg-icon table4js-table-title__filter\" data-bind=\"click: clickFilter, html: $root.icons.filter\"></div>\n              </div>\n            </div>\n            <div class=\"table4js-table-title_resize\"\n              data-bind=\"event: {mouseover: $parent.logMouseOver, mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp, mousedown: $parent.logMouseDown}\">\n            </div>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"table4js-table-header-title__cell\"></th>\n        </tr>\n      </thead>\n      <tbody class=\"table4js-table__body\">\n        <!-- ko if: rows.length == 0 && loadingMutex == false  -->\n        <tr class=\"table4js-table__row\">\n          <th class=\"table4js-table-cell\" colspan=\"100%\" data-bind=\"text: noDataText\"></th>\n        </tr>\n        <!-- /ko -->\n        <!-- ko if: loadingMutex -->\n        <!-- ko foreach: columns -->\n        <tr class=\"table4js-table__row\"></tr>\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" >\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-table__check\">\n                <div class=\"table4js-svg-icon table4js-table__icon-check\"></div>\n              </div>\n            </div>\n          </td>\n        <!-- ko foreach: $parent.columns -->\n        <!-- ko if: visible -->\n          <td class=\"table4js-table-cell table4js-table-technical-cell\">\n            <div class=\"table4js-table-cell__container table4js-table-cell__container--loading\">\n            </div>\n          </td>\n        <!-- /ko -->\n        <!-- /ko -->\n        <td class=\"table4js-table-cell table4js-table-technical-cell\">\n          <div class=\"table4js-table-technical-cell__container\">\n            <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__more\" data-bind=\"html: $root.icons.more\"></div>\n            <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__edit\" data-bind=\"html: $root.icons.edit\"></div>\n          </div>\n        </td>\n        </tr>\n        <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko foreach: {data: rows} -->\n        <tr class=\"table4js-table__row\" data-bind=\"css: {'table4js-table__row--selected': selected}, style: {'background-color': 'none' }\">\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" data-bind=\"click: select\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <!-- ko if: $parent.isNumber -->\n              <div class=\"table4js-table__number\" data-bind=\"text: number\"></div>\n              <!-- /ko -->\n              <!-- ko if: !$parent.isNumber -->\n              <div class=\"table4js-table__check\">\n                <div class=\"table4js-svg-icon table4js-table__icon-check\" data-bind=\"visible: selected, html: $root.icons.check\"></div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </td>\n          <!-- ko foreach: cells -->\n          <!-- ko component: { name: 'table4js-table-cell', params: { cell: $data, table: $parents[1] } } -->\n          <!-- /ko -->\n          <!-- /ko -->\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" data-bind=\"click: click\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__more\" data-bind=\"html: $root.icons.more\"></div>\n              <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__edit\" data-bind=\"html: $root.icons.edit\"></div>\n            </div>\n            <div class=\"table4js-table__row--select\" data-bind=\"visible: !$parent.hasActiveInplaceEditor\"></div>\n            <div class=\"table4js-table__row--colored\" data-bind=\"style: { 'background': color ? color : 'rgba(248,249,253)' }\"></div>\n          </td>\n        </tr>\n        <!-- /ko -->\n      </tbody>\n      <tfoot class=\"table4js-table__footer table4js-table-sticky-component\">\n        <tr class=\"table4js-table-footer-summary\" data-bind=\"visible: showTableSummary\">\n          <th class=\"table4js-table-cell table4js-table-technical-cell table4js-table-footer__cell\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-svg-icon table4js-table-icon-equal\" data-bind=\"html: $root.icons.equal\"></div>\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"table4js-table-cell table4js-table-footer__cell\">\n            <table4js-table-summary params='column: $data'></table4js-table-summary>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"table4js-table-cell table4js-table-technical-cell table4js-table-footer__cell\"></th>\n        </tr>\n        <tr class=\"table4js-table-footer-tools\">\n          <th class=\"table4js-table-footer-tools__cell\" colspan=\"100%\">\n            <div class=\"table4js-table-footer-tools__container table4js-table-group-header-technical-cell\">\n              <div class=\"table4js-table-row-management\">\n                <table4js-actions class=\"table4js-table-actions\" params=\"model: $data, options: { action: 'bottomActions' }\">\n                </table4js-actions>\n              </div>\n              <div class=\"table4js-table-info\">\n                <span class=\"table4js-table-info__total table4js-table-info__text\"\n                  data-bind=\"text: 'Total: ' + totalCount\"></span>\n                <div class=\"table4js-table-info__go-to\">\n                  <span class=\"table4js-table-go-to__text table4js-table-info__text\">Go to: </span>\n                  <input class=\"table4js-table-go-to__value\" data-bind=\"value: startRow\"/>\n                  <button class=\"table4js-btn-transparent\">\n                    <div class=\"table4js-svg-icon table4js-table-go-to__icon\" data-bind=\"html: $root.icons.arrowright\"></div>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>");

/***/ }),

/***/ "./sources/knockout/table/search.html":
/*!********************************************!*\
  !*** ./sources/knockout/table/search.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-search\">\n  <input class=\"table4js-search__value\" data-bind=\"value: value, attr: { placeholder: 'Search...' }\" />\n  <div class=\"table4js-search__button\" data-bind=\"click: refresh, attr: { title: 'Search' }\">\n    <div class=\"table4js-svg-icon table4js-search__icon\" data-bind=\"html: $root.icons.search\"></div>\n  </div>\n</div>");

/***/ }),

/***/ "./sources/knockout/table/summary.html":
/*!*********************************************!*\
  !*** ./sources/knockout/table/summary.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"table4js-table-summary__value\" data-bind=\"text: value\"></span>\n<select class=\"table4js-table-summary__select\"  data-bind=\"value: func\">\n  <!-- ko foreach: summaryItems -->\n    <option data-bind=\"text: title, value: value, attr: {title: title}\"></option>\n  <!-- /ko -->  \n</select>");

/***/ }),

/***/ "./sources/knockout/widgets/action.html":
/*!**********************************************!*\
  !*** ./sources/knockout/widgets/action.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button data-bind=\"click: $data.formId !== undefined ? undefined : action, \n                visible: !$data.visible || ko.unwrap(visible),\n                enable: !$data.enabled || ko.unwrap(enabled),\n                attr: {\n                        class: 'table4js-button--transparent action-button table4js-action-button ' + ko.unwrap($data.cssClasses) + (ko.unwrap($data.active) === true ? ' table4js-action--active' : ''),\n                        title: $data.title || $data.name, form: $data.formId,\n                        type: $data.formId !== undefined ? 'submit' : 'button'\n                    }\">\n    <!-- ko if: $data.icon -->\n    <!-- <span data-bind=\"css: ('fa icon ' + (typeof icon == 'function' ? icon() : icon))\"></span> -->\n    <!-- /ko -->\n    <!-- ko if: $data.svg -->\n    <div class=\"table4js-action-button__icon table4js-button__svg-icon\" data-bind=\"html: svg\"></div>\n    <!-- /ko -->\n    <!-- ko ifnot: $parents[1].short -->\n    <span class=\"table4js-action-button__label\" data-bind=\"text: $data.title, css: ko.unwrap($data.cssLabel), style: {'display' : $data.title ? 'block' : 'none'}\" ></span>\n    <!-- /ko -->\n</button>");

/***/ }),

/***/ "./sources/knockout/widgets/actions.html":
/*!***********************************************!*\
  !*** ./sources/knockout/widgets/actions.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko foreach: actions -->\n<!-- ko ifnot: ko.unwrap($data.actions) -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<!-- ko component: { name: 'table4js-action-item', params: $data } -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- ko if: ko.unwrap($data.actions) && ko.unwrap($data.actions).length > 0 -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<div class=\"table4js-nested-actions table4js-action-context-button\">\n    <span class=\"table4js-button__label\" data-bind=\"text: title\"></span>\n    <div class=\"table4js-nested-actions__dropdown\">\n        <!-- ko foreach: actions -->\n        <!-- ko component: { name: 'table4js-action-item', params: $data } -->\n        <!-- /ko -->\n        <!-- /ko -->\n    </div>\n</div>\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/widgets/dropdown-actions.html":
/*!********************************************************!*\
  !*** ./sources/knockout/widgets/dropdown-actions.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button class=\"table4js-action-button table4js-button--transparent table4js-button-toggle\" type=\"button\"\n    data-bind=\"click: toggle, attr: { title: title }\">\n    <div data-bind=\"html: $root.icons.more_sq\"></div>\n    <span class=\"table4js-action-button__label\" data-bind=\"text: moreText\"></span>\n</button>\n<!-- ko if: isOpen -->\n<ul class=\"table4js-button-toggle__dropdown-menu\">\n    <table4js-actions class=\"table4js-context-actions\" params=\"model: data, options: { action: actions }\">\n    </table4js-actions>\n</ul>\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/widgets/icon.html":
/*!********************************************!*\
  !*** ./sources/knockout/widgets/icon.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <svg class=\"table4js-button__svg-icon\"><use data-bind=\"attr:{'xlink:href':'spritemap.svg#sprite-icon_'+ko.unwrap(id)}\"  xlink:href=''></use></svg> -->\n");

/***/ }),

/***/ "./sources/icons/icon_arrow-down.svg":
/*!*******************************************!*\
  !*** ./sources/icons/icon_arrow-down.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M3 8.436a1.5 1.5 0 0 1 2.121.006l9.265 9.314a.865.865 0 0 0 1.228 0l9.265-9.314a1.5 1.5 0 0 1 2.121-.006 1.5 1.5 0 0 1 .006 2.121l-10.943 11a1.5 1.5 0 0 1-2.126 0l-10.943-11a1.5 1.5 0 0 1 .006-2.121z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_arrow-right.svg":
/*!********************************************!*\
  !*** ./sources/icons/icon_arrow-right.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M8.968 27a1.5 1.5 0 0 1 .005-2.121l9.315-9.265a.867.867 0 0 0 0-1.228l-9.315-9.265a1.5 1.5 0 0 1-.005-2.121 1.5 1.5 0 0 1 2.121-.006l11 10.943a1.5 1.5 0 0 1 0 2.126l-11 10.943a1.5 1.5 0 0 1-2.121-.006z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_check.svg":
/*!**************************************!*\
  !*** ./sources/icons/icon_check.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M26 8a1.5 1.5 0 0 0-2.121 0l-11.264 11.264a.869.869 0 0 1-1.23 0l-5.264-5.264a1.5 1.5 0 0 0-2.121 2.121l6.939 6.94a1.5 1.5 0 0 0 2.122 0l12.939-12.94a1.5 1.5 0 0 0 0-2.121z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_cross.svg":
/*!**************************************!*\
  !*** ./sources/icons/icon_cross.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M17.715 15l10.723-10.723a1.921 1.921 0 0 0 0-2.715 1.921 1.921 0 0 0-2.715 0l-10.723 10.723-10.723-10.723a1.92 1.92 0 0 0-2.715 2.715l10.723 10.723-10.723 10.723a1.92 1.92 0 1 0 2.715 2.715l10.723-10.723 10.723 10.723a1.92 1.92 0 1 0 2.715-2.715z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_edit.svg":
/*!*************************************!*\
  !*** ./sources/icons/icon_edit.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M21.573 29h-17.396a3.178 3.178 0 0 1-3.177-3.177v-17.146a3.178 3.178 0 0 1 3.177-3.177h7.2a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5h-7.2a.178.178 0 0 0-.177.177v17.146a.178.178 0 0 0 .177.177h17.4a.178.178 0 0 0 .178-.178v-7.072a1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5v7.073a3.178 3.178 0 0 1-3.182 3.177zM8.181 21.283l.619-3.473a.454.454 0 0 1 .768-.241l2.853 2.853a.453.453 0 0 1-.242.767l-3.472.621a.454.454 0 0 1-.526-.527z\"></path><rect x=\"15.405\" y=\"3.585\" width=\"5\" height=\"17\" rx=\".48\" transform=\"translate(13.79 -9.121) rotate(45)\"></rect><path d=\"M24.9 2.531h2.241a1.379 1.379 0 0 1 1.375 1.379v.919a.589.589 0 0 1-.589.589h-3.827a.589.589 0 0 1-.589-.589v-.919a1.379 1.379 0 0 1 1.389-1.379z\" transform=\"translate(10.43 -17.232) rotate(45)\"></path><path d=\"M0 30l30-30\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_equal.svg":
/*!**************************************!*\
  !*** ./sources/icons/icon_equal.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M26.3,7.531A1.883,1.883,0,0,0,28.18,5.649V1.883A1.883,1.883,0,0,0,26.3,0H3.7A1.883,1.883,0,0,0,1.82,1.883a1.862,1.862,0,0,0,.139.7l0,.011a1.887,1.887,0,0,0,.411.62h0L14.157,15,2.387,26.77l0,.006A1.882,1.882,0,0,0,3.7,30H26.3a1.883,1.883,0,0,0,1.883-1.883V24.351a1.883,1.883,0,0,0-3.766,0v1.883H8.249l9.9-9.9a1.881,1.881,0,0,0,0-2.662l-.008-.006,0-.008L8.249,3.766H24.414V5.649A1.883,1.883,0,0,0,26.3,7.531Z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_filter.svg":
/*!***************************************!*\
  !*** ./sources/icons/icon_filter.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M13.06 29.188a2.02 2.02 0 0 1-1.12-.333 2.126 2.126 0 0 1-.94-1.826v-9.272a2.015 2.015 0 0 0-.281-.835l-9.319-12.241a1.994 1.994 0 0 1-.281-2.119 2 2 0 0 1 1.852-1.062h24.058a2.014 2.014 0 0 1 1.854 1.047 2.013 2.013 0 0 1-.229 2.116l-8.743 12.207a2.193 2.193 0 0 0-.285.887v6.822a3.1 3.1 0 0 1-1.791 2.734l-3.846 1.675a2.321 2.321 0 0 1-.929.2zm-8.032-24.688l8.077 10.6a4.871 4.871 0 0 1 .895 2.657v7.954l2.637-1.149-.011-6.8a5.058 5.058 0 0 1 .846-2.634l7.609-10.628z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_item-add.svg":
/*!*****************************************!*\
  !*** ./sources/icons/icon_item-add.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\"><g id=\"Слой_44\" data-name=\"Слой 44\"><path d=\"M23.67,0H3.33A3.34,3.34,0,0,0,0,3.33V23.67A3.34,3.34,0,0,0,3.33,27H23.67A3.34,3.34,0,0,0,27,23.67V3.33A3.34,3.34,0,0,0,23.67,0ZM24,23.67a.33.33,0,0,1-.33.33H3.33A.33.33,0,0,1,3,23.67V3.33A.33.33,0,0,1,3.33,3H23.67a.33.33,0,0,1,.33.33Z\"></path><path d=\"M19.86,12H15V7.14a1.51,1.51,0,1,0-3,0V12H7.14a1.51,1.51,0,1,0,0,3H12v4.85a1.51,1.51,0,1,0,3,0V15h4.85a1.51,1.51,0,1,0,0-3Z\"></path></g></svg>"

/***/ }),

/***/ "./sources/icons/icon_item-delete.svg":
/*!********************************************!*\
  !*** ./sources/icons/icon_item-delete.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\"><g id=\"Слой_44\" data-name=\"Слой 44\"><path d=\"M23.67,0H3.33A3.34,3.34,0,0,0,0,3.33V23.67A3.34,3.34,0,0,0,3.33,27H23.67A3.34,3.34,0,0,0,27,23.67V3.33A3.34,3.34,0,0,0,23.67,0ZM24,23.67a.33.33,0,0,1-.33.33H3.33A.33.33,0,0,1,3,23.67V3.33A.33.33,0,0,1,3.33,3H23.67a.33.33,0,0,1,.33.33Z\"></path><path d=\"M20.22,6.78a1.84,1.84,0,0,0-2.59,0L13.5,10.92,9.37,6.78A1.83,1.83,0,0,0,6.78,9.37l4.14,4.13L6.78,17.63a1.83,1.83,0,0,0,2.59,2.59l4.13-4.14,4.13,4.14a1.83,1.83,0,0,0,2.59-2.59L16.08,13.5l4.14-4.13A1.84,1.84,0,0,0,20.22,6.78Z\"></path></g></svg>"

/***/ }),

/***/ "./sources/icons/icon_item-save.svg":
/*!******************************************!*\
  !*** ./sources/icons/icon_item-save.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\"><g id=\"Слой_23\" data-name=\"Слой 23\"><path d=\"M23.67,0H3.33A3.34,3.34,0,0,0,0,3.33V23.67A3.34,3.34,0,0,0,3.33,27H23.67A3.34,3.34,0,0,0,27,23.67V3.33A3.34,3.34,0,0,0,23.67,0ZM24,23.67a.33.33,0,0,1-.33.33H3.33A.33.33,0,0,1,3,23.67V3.33A.33.33,0,0,1,3.33,3H23.67a.33.33,0,0,1,.33.33Z\"></path><path d=\"M18,5.21H9A2.32,2.32,0,0,0,6.65,7.52V19.73a2.08,2.08,0,0,0,2.06,2.06A2.07,2.07,0,0,0,10,21.31l3.48-2.9L17,21.31a2.06,2.06,0,0,0,3.37-1.58V7.52A2.32,2.32,0,0,0,18,5.21Zm-.43,13.06-2.8-2.33a2,2,0,0,0-2.62,0l-2.8,2.33V8h8.22Z\"></path></g></svg>"

/***/ }),

/***/ "./sources/icons/icon_more.svg":
/*!*************************************!*\
  !*** ./sources/icons/icon_more.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><circle cx=\"15\" cy=\"5\" r=\"3\"></circle><circle cx=\"15\" cy=\"15\" r=\"3\"></circle><circle cx=\"15\" cy=\"25\" r=\"3\"></circle><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_more_sq.svg":
/*!****************************************!*\
  !*** ./sources/icons/icon_more_sq.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M10.5 13.5h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM25.5 13.5h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM10.5 28.5h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM25.5 28.5h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_paste.svg":
/*!**************************************!*\
  !*** ./sources/icons/icon_paste.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M3.209.75H20.678a3.2,3.2,0,0,1,3.209,3.177V5.75h2.936A3.18,3.18,0,0,1,30,8.927V26.073a3.18,3.18,0,0,1-3.177,3.177H9.322a3.2,3.2,0,0,1-3.209-3.177V24.25h-2.9A3.2,3.2,0,0,1,0,21.073V3.927A3.2,3.2,0,0,1,3.209.75Zm23.582,25.5A.2.2,0,0,0,27,26.073V8.927a.2.2,0,0,0-.209-.177H9.427a.178.178,0,0,0-.177.177V26.073a.178.178,0,0,0,.177.177ZM3,21.073a.2.2,0,0,0,.209.177H6.25V8.927A3.18,3.18,0,0,1,9.427,5.75h11.46V3.927a.2.2,0,0,0-.209-.177H3.209A.2.2,0,0,0,3,3.927Z\" style=\"fill:#092a3a\"></path><rect x=\"11.5\" y=\"10.823\" width=\"13\" height=\"3\" rx=\"1.5\" transform=\"translate(36 24.645) rotate(-180)\"></rect><rect x=\"11.5\" y=\"15.823\" width=\"13\" height=\"3\" rx=\"1.5\" transform=\"translate(36 34.645) rotate(180)\" style=\"fill:#092a3a\"></rect><rect x=\"11.5\" y=\"20.823\" width=\"13\" height=\"3\" rx=\"1.5\" transform=\"translate(36 44.645) rotate(180)\"></rect><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_search.svg":
/*!***************************************!*\
  !*** ./sources/icons/icon_search.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M28.25 25.629l-7.282-7.282a10.987 10.987 0 1 0-2.049 2.193l7.21 7.21a1.5 1.5 0 1 0 2.121-2.121zm-16.25-5.629a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_sort-down.svg":
/*!******************************************!*\
  !*** ./sources/icons/icon_sort-down.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M19.681 11.518h4.938v1.282h-6.881v-1.041l4.78-6.906h-4.748v-1.295h6.7v1.015zM23.344 22.647h-3.58l-.75 2.153h-1.669l3.491-9.242h1.441l3.5 9.242h-1.677zm-3.13-1.294h2.679l-1.34-3.834zM14.805 18.689a1.249 1.249 0 0 0-1.767 0l-2.156 2.156v-16.029a1.25 1.25 0 0 0-2.5 0v16.018l-2.12-2.12a1.248 1.248 0 0 0-1.766 0l-.013.013a1.248 1.248 0 0 0 0 1.766l4.276 4.276a1.249 1.249 0 0 0 1.765 0l.013-.013a.893.893 0 0 0 .06-.091l4.208-4.208a1.249 1.249 0 0 0 0-1.768z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_sort-up.svg":
/*!****************************************!*\
  !*** ./sources/icons/icon_sort-up.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M23.344 10.647h-3.58l-.75 2.153h-1.669l3.491-9.242h1.441l3.5 9.242h-1.677zm-3.13-1.294h2.679l-1.34-3.834zM19.681 23.518h4.938v1.282h-6.881v-1.041l4.78-6.906h-4.748v-1.3h6.7v1.015zM14.805 18.69a1.249 1.249 0 0 0-1.767 0l-2.156 2.155v-16.029a1.25 1.25 0 0 0-2.5 0v16.019l-2.12-2.121a1.25 1.25 0 0 0-1.766 0l-.013.013a1.248 1.248 0 0 0 0 1.766l4.276 4.276a1.249 1.249 0 0 0 1.765 0l.013-.013a1 1 0 0 0 .06-.09l4.208-4.209a1.248 1.248 0 0 0 0-1.767z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_table-merge.svg":
/*!********************************************!*\
  !*** ./sources/icons/icon_table-merge.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><g id=\"a\"></g><g id=\"b\"></g><g id=\"c\"></g><g id=\"d\"></g><g id=\"e\"></g><g id=\"f\"></g><g id=\"g\"></g><g id=\"h\"></g><g id=\"i\"></g><g id=\"j\"></g><g id=\"k\"></g><g id=\"l\"></g><g id=\"m\"></g><g id=\"n\"></g><g id=\"o\"></g><g id=\"p\"></g><g id=\"q\"></g><g id=\"r\"></g><g id=\"s\"></g><g id=\"t\"></g><g id=\"u\"></g><g id=\"v\"></g><g id=\"w\"></g><g id=\"x\"></g><g id=\"y\"></g><g id=\"a&#x60;\"></g><g id=\"aa\"></g><g id=\"ab\"></g><g id=\"ac\"></g><g id=\"ad\"></g><g id=\"ae\"></g><g id=\"af\"></g><g id=\"ag\"></g><g id=\"ah\"></g><g id=\"ai\"></g><g id=\"aj\"></g><g id=\"ak\"></g><g id=\"al\"></g><g id=\"am\"></g><g id=\"an\"></g><g id=\"ao\"></g><g id=\"ap\"></g><g id=\"aq\"></g><g id=\"ar\"></g><g id=\"as\"></g><g id=\"at\"></g><g id=\"au\"></g><g id=\"av\"></g><g id=\"aw\"></g><g id=\"ax\"></g><g id=\"ay\"></g><g id=\"b&#x60;\"></g><g id=\"ba\"></g><g id=\"bb\"></g><g id=\"bc\"></g><g id=\"bd\"></g><g id=\"be\"></g><g id=\"bf\"></g><g id=\"bg\"></g><g id=\"bh\"><path d=\"M25.73,1H4.27c-1.81,0-3.27,1.47-3.27,3.27V25.73c0,1.81,1.47,3.27,3.27,3.27H25.73c1.81,0,3.27-1.47,3.27-3.27V4.27c0-1.81-1.47-3.27-3.27-3.27ZM9,27H4.27c-.7,0-1.27-.57-1.27-1.27v-4.23h6v5.5Zm0-7.5H3v-5.5h6v5.5Zm0-7.5H3V7h6v5Zm9-3V27h-7V7h7v2Zm9,16.73c0,.7-.57,1.27-1.27,1.27h-5.73v-5.5h7v4.23Zm0-6.23h-7v-5.5h7v5.5Zm0-7.5h-7V7h7v5Z\"></path></g></svg>"

/***/ }),

/***/ "./sources/core/action.ts":
/*!********************************!*\
  !*** ./sources/core/action.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Action = void 0;
var base_1 = __webpack_require__(/*! ./base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ./property */ "./sources/core/property.ts");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(source) {
        var _this = _super.call(this) || this;
        Object.keys(source || {}).forEach(function (key) { return _this[key] = source[key]; });
        return _this;
    }
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "name", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Function)
    ], Action.prototype, "action", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "title", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], Action.prototype, "visible", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], Action.prototype, "enabled", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], Action.prototype, "active", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "icon", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "svg", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "container", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "cssClasses", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "cssImage", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "cssLabel", void 0);
    return Action;
}(base_1.Base));
exports.Action = Action;


/***/ }),

/***/ "./sources/core/actions.ts":
/*!*********************************!*\
  !*** ./sources/core/actions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./actions.scss */ "./sources/core/actions.scss");


/***/ }),

/***/ "./sources/core/base.ts":
/*!******************************!*\
  !*** ./sources/core/base.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Base = exports.HashTableStorage = void 0;
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./sources/utils/utils.ts");
var dependencies_1 = __webpack_require__(/*! ./dependencies */ "./sources/core/dependencies.ts");
var HashTableStorage = (function () {
    function HashTableStorage() {
        this.hash = {};
    }
    HashTableStorage.prototype.getValue = function (name, defaultValue) {
        var value = this.hash[name];
        if (value === undefined) {
            return defaultValue;
        }
        return value;
    };
    HashTableStorage.prototype.setValue = function (name, val) {
        this.hash[name] = val;
    };
    return HashTableStorage;
}());
exports.HashTableStorage = HashTableStorage;
var Base = (function () {
    function Base(storage) {
        if (storage === void 0) { storage = Base.createPropertiesStorage(); }
        this.storage = storage;
        this.propertyValueListners = {};
        this.storage.owner = this;
    }
    Base.finishCollectDependencies = function () {
        var deps = Base.currentDependencis;
        Base.currentDependencis = undefined;
        return deps;
    };
    Base.startCollectDependencies = function (updater, target, property) {
        if (Base.currentDependencis !== undefined) {
            throw new Error("Attempt to collect nested dependencies. Nested dependencies are not supported.");
        }
        Base.currentDependencis = new dependencies_1.Dependencies(updater, target, property);
    };
    Base.collectDependency = function (target, property) {
        if (Base.currentDependencis === undefined)
            return;
        Base.currentDependencis.addDependency(target, property);
    };
    Base.prototype.onPropertyValueChanged = function (propertyName, oldValue, newValue) {
        var propertyListners = this.propertyValueListners[propertyName];
        if (!!propertyListners) {
            Object.keys(propertyListners).forEach(function (key) { return propertyListners[key](oldValue, newValue); });
        }
    };
    Base.prototype.getPropertyValueCore = function (propertyName, defaultValue) {
        Base.collectDependency(this, propertyName);
        var value = this.storage.getValue(propertyName, defaultValue);
        return value;
    };
    Base.prototype.setPropertyValueCore = function (propertyName, newValue) {
        this.storage.setValue(propertyName, newValue);
    };
    Base.prototype.getPropertyValue = function (propertyName, defaultValue) {
        return this.getPropertyValueCore(propertyName, defaultValue);
    };
    Base.prototype.setPropertyValue = function (propertyName, newValue, defaultValue) {
        var oldValue = this.getPropertyValue(propertyName, defaultValue);
        if (!(0, utils_1.isEqual)(oldValue, newValue)) {
            this.setPropertyValueCore(propertyName, newValue);
            this.onPropertyValueChanged(propertyName, oldValue, newValue);
        }
    };
    Base.prototype.registerPropertyValueListner = function (propertyName, listner, key) {
        if (key === void 0) { key = null; }
        var propertyListners = this.propertyValueListners[propertyName];
        if (!propertyListners) {
            propertyListners = {};
            this.propertyValueListners[propertyName] = propertyListners;
        }
        propertyListners[key] = listner;
    };
    Base.prototype.unRegisterPropertyValueListner = function (propertyName, key) {
        if (key === void 0) { key = null; }
        var propertyListners = this.propertyValueListners[propertyName];
        if (!!propertyListners) {
            delete propertyListners[key];
        }
    };
    Base.currentDependencis = undefined;
    Base.createPropertiesStorage = function () {
        return new HashTableStorage();
    };
    return Base;
}());
exports.Base = Base;


/***/ }),

/***/ "./sources/core/dependencies.ts":
/*!**************************************!*\
  !*** ./sources/core/dependencies.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComputedUpdater = exports.Dependencies = void 0;
var base_1 = __webpack_require__(/*! ./base */ "./sources/core/base.ts");
var Dependencies = (function () {
    function Dependencies(currentDependency, target, property) {
        this.currentDependency = currentDependency;
        this.target = target;
        this.property = property;
        this.dependencies = [];
        this.id = "" + (++Dependencies.DependenciesCount);
    }
    Dependencies.prototype.addDependency = function (target, property) {
        if (this.target === target && this.property === property)
            return;
        if (this.dependencies.some(function (dependency) { return dependency.obj === target && dependency.prop === property; }))
            return;
        this.dependencies.push({
            obj: target,
            prop: property,
            id: this.id
        });
        target.registerPropertyValueListner(property, this.currentDependency, this.id);
    };
    Dependencies.prototype.dispose = function () {
        this.dependencies.forEach(function (dependency) {
            dependency.obj.unRegisterPropertyValueListner(dependency.prop, dependency.id);
        });
    };
    Dependencies.DependenciesCount = 0;
    return Dependencies;
}());
exports.Dependencies = Dependencies;
var ComputedUpdater = (function () {
    function ComputedUpdater(_updater) {
        this._updater = _updater;
        this.dependencies = undefined;
        this.type = ComputedUpdater.ComputedUpdaterType;
    }
    ComputedUpdater.CollectDependencies = function (obj, computedUpdater, propertyName) {
        base_1.Base.startCollectDependencies(function () { return obj[propertyName] = computedUpdater.updater(); }, obj, propertyName);
        var result = computedUpdater.updater();
        var dependencies = base_1.Base.finishCollectDependencies();
        computedUpdater.setDependencies(dependencies);
        return result;
    };
    Object.defineProperty(ComputedUpdater.prototype, "updater", {
        get: function () {
            return this._updater;
        },
        enumerable: false,
        configurable: true
    });
    ComputedUpdater.prototype.setDependencies = function (dependencies) {
        this.clearDependencies();
        this.dependencies = dependencies;
    };
    ComputedUpdater.prototype.getDependencies = function () {
        return this.dependencies;
    };
    ComputedUpdater.prototype.observe = function (target, propertyName) {
        ComputedUpdater.CollectDependencies(target, this, propertyName);
    };
    ComputedUpdater.prototype.clearDependencies = function () {
        if (this.dependencies) {
            this.dependencies.dispose();
            this.dependencies = undefined;
        }
    };
    ComputedUpdater.prototype.dispose = function () {
        this.clearDependencies();
    };
    ComputedUpdater.ComputedUpdaterType = "__dependency_computed";
    return ComputedUpdater;
}());
exports.ComputedUpdater = ComputedUpdater;


/***/ }),

/***/ "./sources/core/dropdown-actions.ts":
/*!******************************************!*\
  !*** ./sources/core/dropdown-actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./dropdown-actions.scss */ "./sources/core/dropdown-actions.scss");


/***/ }),

/***/ "./sources/core/property.ts":
/*!**********************************!*\
  !*** ./sources/core/property.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.property = void 0;
var dependencies_1 = __webpack_require__(/*! ./dependencies */ "./sources/core/dependencies.ts");
function property(options) {
    return function (target, key) {
        var processComputedUpdater = function (obj, val) {
            if (!!val && typeof val === "object" && val.type === dependencies_1.ComputedUpdater.ComputedUpdaterType) {
                return dependencies_1.ComputedUpdater.CollectDependencies(obj, val, key);
            }
            return val;
        };
        var getDefaultValue = function () {
            var defaultValue = undefined;
            if (!!options) {
                if (options.defaultValue !== undefined) {
                    defaultValue = options.defaultValue;
                    defaultValue = Array.isArray(defaultValue) ? [].concat(defaultValue) : defaultValue;
                }
            }
            return defaultValue;
        };
        Object.defineProperty(target, key, {
            get: function () {
                return this.getPropertyValue(key, getDefaultValue());
            },
            set: function (val) {
                var newValue = processComputedUpdater(this, val);
                this.setPropertyValue(key, newValue, getDefaultValue());
                if (!!options && options.onSet) {
                    options.onSet(newValue, this);
                }
            },
        });
    };
}
exports.property = property;


/***/ }),

/***/ "./sources/find.ts":
/*!*************************!*\
  !*** ./sources/find.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.operationsMap = void 0;
var localization_1 = __webpack_require__(/*! ./localization */ "./sources/localization.ts");
exports.operationsMap = {};
var defaultOperationsMap = {
    string: [
        { op: "C", text: localization_1.Localization.getString("filtercontains") },
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    date: [
        { op: "EQ", text: localization_1.Localization.getString("filterdateequal") },
        { op: "G", text: localization_1.Localization.getString("filterdategreater") },
        { op: "L", text: localization_1.Localization.getString("filterdateless") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    datetime: [
        { op: "G", text: localization_1.Localization.getString("filterdategreater") },
        { op: "L", text: localization_1.Localization.getString("filterdateless") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    integer: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "NEQ", text: localization_1.Localization.getString("filternotequal") },
        { op: "G", text: localization_1.Localization.getString("filtergreater") },
        { op: "L", text: localization_1.Localization.getString("filterless") },
        { op: "GEQ", text: localization_1.Localization.getString("filtergreaterequal") },
        { op: "LEQ", text: localization_1.Localization.getString("filterlessequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    numeric: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "NEQ", text: localization_1.Localization.getString("filternotequal") },
        { op: "G", text: localization_1.Localization.getString("filtergreater") },
        { op: "L", text: localization_1.Localization.getString("filterless") },
        { op: "GEQ", text: localization_1.Localization.getString("filtergreaterequal") },
        { op: "LEQ", text: localization_1.Localization.getString("filterlessequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    bool: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
    ],
    money: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "NEQ", text: localization_1.Localization.getString("filternotequal") },
        { op: "G", text: localization_1.Localization.getString("filtergreater") },
        { op: "L", text: localization_1.Localization.getString("filterless") },
        { op: "GEQ", text: localization_1.Localization.getString("filtergreaterequal") },
        { op: "LEQ", text: localization_1.Localization.getString("filterlessequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    radiobutton: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
};
Object.keys(defaultOperationsMap).forEach(function (key) { return exports.operationsMap[key] = defaultOperationsMap[key]; });


/***/ }),

/***/ "./sources/icon.ts":
/*!*************************!*\
  !*** ./sources/icon.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrowdown = exports.cross = exports.search = exports.arrowright = exports.edit = exports.more = exports.filter = exports.sortdown = exports.sortup = exports.check = exports.more_sq = exports.paste = exports.del = exports.save = exports.table = exports.equal = exports.add = void 0;
exports.add = __webpack_require__(/*! ./icons/icon_item-add.svg */ "./sources/icons/icon_item-add.svg");
exports.equal = __webpack_require__(/*! ./icons/icon_equal.svg */ "./sources/icons/icon_equal.svg");
exports.table = __webpack_require__(/*! ./icons/icon_table-merge.svg */ "./sources/icons/icon_table-merge.svg");
exports.save = __webpack_require__(/*! ./icons/icon_item-save.svg */ "./sources/icons/icon_item-save.svg");
exports.del = __webpack_require__(/*! ./icons/icon_item-delete.svg */ "./sources/icons/icon_item-delete.svg");
exports.paste = __webpack_require__(/*! ./icons/icon_paste.svg */ "./sources/icons/icon_paste.svg");
exports.more_sq = __webpack_require__(/*! ./icons/icon_more_sq.svg */ "./sources/icons/icon_more_sq.svg");
exports.check = __webpack_require__(/*! ./icons/icon_check.svg */ "./sources/icons/icon_check.svg");
exports.sortup = __webpack_require__(/*! ./icons/icon_sort-up.svg */ "./sources/icons/icon_sort-up.svg");
exports.sortdown = __webpack_require__(/*! ./icons/icon_sort-down.svg */ "./sources/icons/icon_sort-down.svg");
exports.filter = __webpack_require__(/*! ./icons/icon_filter.svg */ "./sources/icons/icon_filter.svg");
exports.more = __webpack_require__(/*! ./icons/icon_more.svg */ "./sources/icons/icon_more.svg");
exports.edit = __webpack_require__(/*! ./icons/icon_edit.svg */ "./sources/icons/icon_edit.svg");
exports.arrowright = __webpack_require__(/*! ./icons/icon_arrow-right.svg */ "./sources/icons/icon_arrow-right.svg");
exports.search = __webpack_require__(/*! ./icons/icon_search.svg */ "./sources/icons/icon_search.svg");
exports.cross = __webpack_require__(/*! ./icons/icon_cross.svg */ "./sources/icons/icon_cross.svg");
exports.arrowdown = __webpack_require__(/*! ./icons/icon_arrow-down.svg */ "./sources/icons/icon_arrow-down.svg");


/***/ }),

/***/ "./sources/index.ts":
/*!**************************!*\
  !*** ./sources/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./core/action */ "./sources/core/action.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/actions */ "./sources/core/actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/dropdown-actions */ "./sources/core/dropdown-actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./find */ "./sources/find.ts"), exports);
__exportStar(__webpack_require__(/*! ./table */ "./sources/table/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell */ "./sources/table/cell.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column */ "./sources/table/column.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/summary */ "./sources/table/summary.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter */ "./sources/table/column-filter.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter-item */ "./sources/table/column-filter-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-default */ "./sources/table/filter-default.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-select */ "./sources/table/filter-select.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/number */ "./sources/table/number.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/bool */ "./sources/table/bool.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/array-data-provider */ "./sources/utils/array-data-provider.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/remote-data-provider */ "./sources/utils/remote-data-provider.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/utils */ "./sources/utils/utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./icon */ "./sources/icon.ts"), exports);


/***/ }),

/***/ "./sources/knockout/index.ts":
/*!***********************************!*\
  !*** ./sources/knockout/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tableTemplate = exports.KnockoutHashTableStorage = exports.KnockoutInstance = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var table_1 = __webpack_require__(/*! ../table */ "./sources/table/index.ts");
__exportStar(__webpack_require__(/*! ./table/cell */ "./sources/knockout/table/cell.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-editor */ "./sources/knockout/table/cell-editor.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-viewer */ "./sources/knockout/table/cell-viewer.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/summary */ "./sources/knockout/table/summary.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/search */ "./sources/knockout/table/search.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-default */ "./sources/knockout/table/filter-default.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter */ "./sources/knockout/table/column-filter.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter-item */ "./sources/knockout/table/column-filter-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-select */ "./sources/knockout/table/filter-select.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/action */ "./sources/knockout/widgets/action.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/actions */ "./sources/knockout/widgets/actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/dropdown-actions */ "./sources/knockout/widgets/dropdown-actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/icon */ "./sources/knockout/widgets/icon.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/bool-cell-editor */ "./sources/knockout/table/bool-cell-editor.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/bool-cell-viewer */ "./sources/knockout/table/bool-cell-viewer.ts"), exports);
__exportStar(__webpack_require__(/*! .. */ "./sources/index.ts"), exports);
exports.KnockoutInstance = ko;
var KnockoutHashTableStorage = (function (_super) {
    __extends(KnockoutHashTableStorage, _super);
    function KnockoutHashTableStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KnockoutHashTableStorage.prototype.linkArrayToObservable = function (observableArray) {
        var result = [].concat(observableArray());
        ["pop", "push", "splice", "slice", "shift", "unshift"].forEach(function (funcName) {
            result[funcName] = function () {
                Array.prototype[funcName].apply(result, arguments);
                return observableArray[funcName].apply(observableArray, arguments);
            };
        });
        return result;
    };
    KnockoutHashTableStorage.prototype.createObservable = function (value) {
        if (Array.isArray(value)) {
            return ko.observableArray(value);
        }
        return ko.observable(value);
    };
    KnockoutHashTableStorage.prototype.getValue = function (name, defaultValue) {
        var value = _super.prototype.getValue.call(this, name, defaultValue);
        if (!ko.isObservable(value)) {
            this.hash[name] = this.createObservable(value);
        }
        var observable = this.hash[name];
        if (ko.isObservableArray(observable)) {
            return this.linkArrayToObservable(observable);
        }
        return observable();
    };
    KnockoutHashTableStorage.prototype.setValue = function (name, val) {
        if (!ko.isObservable(this.hash[name])) {
            this.hash[name] = this.createObservable(this.hash[name]);
        }
        var observable = this.hash[name];
        this.hash[name](val);
    };
    return KnockoutHashTableStorage;
}(base_1.HashTableStorage));
exports.KnockoutHashTableStorage = KnockoutHashTableStorage;
base_1.Base.createPropertiesStorage = function () { return new KnockoutHashTableStorage(); };
exports.tableTemplate = __webpack_require__(/*! ./table/index.html */ "./sources/knockout/table/index.html")["default"];
ko.components.register("table4", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = params.model;
            model.initialize(componentInfo.element);
            return model;
        }
    },
    template: exports.tableTemplate
});
function renderTable(element) {
    var el = element;
    if (typeof element === "string") {
        el = document.querySelectorAll(element)[0];
    }
    el.innerHTML = "<table4 params=\"{ model: $data }\"></table4>";
    ko.utils.domNodeDisposal.addDisposeCallback(el, function (node) {
        ko.cleanNode(node);
        el.innerHTML = "";
    });
    ko.applyBindings(this, el);
}
table_1.Table.prototype["render"] = renderTable;


/***/ }),

/***/ "./sources/knockout/table/bool-cell-editor.ts":
/*!****************************************************!*\
  !*** ./sources/knockout/table/bool-cell-editor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boolCellEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.boolCellEditorTemplate = __webpack_require__(/*! ./bool-cell-editor.html */ "./sources/knockout/table/bool-cell-editor.html")["default"];
ko.components.register("bool-cell-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = ko.unwrap(params.model);
            return model;
        }
    },
    template: exports.boolCellEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/table/bool-cell-viewer.ts":
/*!****************************************************!*\
  !*** ./sources/knockout/table/bool-cell-viewer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boolCellViewerTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.boolCellViewerTemplate = __webpack_require__(/*! ./bool-cell-viewer.html */ "./sources/knockout/table/bool-cell-viewer.html")["default"];
ko.components.register("bool-cell-viewer", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: exports.boolCellViewerTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell-editor.ts":
/*!***********************************************!*\
  !*** ./sources/knockout/table/cell-editor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cellEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.cellEditorTemplate = __webpack_require__(/*! ./cell-editor.html */ "./sources/knockout/table/cell-editor.html")["default"];
ko.components.register("table4js-cell-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = ko.unwrap(params.model);
            return model;
        }
    },
    template: exports.cellEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell-viewer.ts":
/*!***********************************************!*\
  !*** ./sources/knockout/table/cell-viewer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cellViewerTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.cellViewerTemplate = __webpack_require__(/*! ./cell-viewer.html */ "./sources/knockout/table/cell-viewer.html")["default"];
ko.components.register("table4js-cell-viewer", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: exports.cellViewerTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell.ts":
/*!****************************************!*\
  !*** ./sources/knockout/table/cell.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cellTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var cell_1 = __webpack_require__(/*! ../../table/cell */ "./sources/table/cell.ts");
exports.cellTemplate = __webpack_require__(/*! ./cell.html */ "./sources/knockout/table/cell.html")["default"];
ko.components.register("table4js-table-cell", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var isMergedCell = ko.computed(function () { return params.cell.count > 1 && params.table.isMergedСells; });
            return __assign(__assign({}, params), { startEdit: function () { return params.table.startEditCell(params.cell); }, containerCss: ko.computed(function () { return cell_1.TableCell.getContainerCss(params.cell, isMergedCell()); }), contentCss: ko.computed(function () { return cell_1.TableCell.getContentCss(params.cell, isMergedCell()); }), isMergedCell: isMergedCell });
        }
    },
    template: exports.cellTemplate
});


/***/ }),

/***/ "./sources/knockout/table/column-filter-item.ts":
/*!******************************************************!*\
  !*** ./sources/knockout/table/column-filter-item.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ko = __webpack_require__(/*! knockout */ "knockout");
var filterTemplate = (__webpack_require__(/*! ./column-filter-item.html */ "./sources/knockout/table/column-filter-item.html")["default"]);
ko.components.register("table4js-column-filter-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.filterItem;
        }
    },
    template: filterTemplate
});


/***/ }),

/***/ "./sources/knockout/table/column-filter.ts":
/*!*************************************************!*\
  !*** ./sources/knockout/table/column-filter.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ko = __webpack_require__(/*! knockout */ "knockout");
var filterTemplate = (__webpack_require__(/*! ./column-filter.html */ "./sources/knockout/table/column-filter.html")["default"]);
ko.components.register("table4js-column-filter", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.context;
        }
    },
    template: filterTemplate
});


/***/ }),

/***/ "./sources/knockout/table/filter-default.ts":
/*!**************************************************!*\
  !*** ./sources/knockout/table/filter-default.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ko = __webpack_require__(/*! knockout */ "knockout");
var defaultFilterTemplate = (__webpack_require__(/*! ./filter-default.html */ "./sources/knockout/table/filter-default.html")["default"]);
ko.components.register("table4js-table-filter-default", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: defaultFilterTemplate
});


/***/ }),

/***/ "./sources/knockout/table/filter-select.ts":
/*!*************************************************!*\
  !*** ./sources/knockout/table/filter-select.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ko = __webpack_require__(/*! knockout */ "knockout");
var filter_select_1 = __webpack_require__(/*! ../../table/filter-select */ "./sources/table/filter-select.ts");
var selectboxFilterTemplate = (__webpack_require__(/*! ./filter-select.html */ "./sources/knockout/table/filter-select.html")["default"]);
ko.components.register("table4js-filter-select", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var viewModel = new filter_select_1.TableFilterSelect(params.value, params.columnName, params.columnType, params.getColumnData, params.isOpen, params.title, params.moreText);
            var close = function () { return viewModel.isOpen = false; };
            document.body.addEventListener("click", close);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                document.body.removeEventListener("click", close);
            });
            return viewModel;
        }
    },
    template: selectboxFilterTemplate
});


/***/ }),

/***/ "./sources/knockout/table/search.ts":
/*!******************************************!*\
  !*** ./sources/knockout/table/search.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.searchTemplate = __webpack_require__(/*! ./search.html */ "./sources/knockout/table/search.html")["default"];
ko.components.register("table4js-search", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var _a, _b;
            var model = ko.unwrap(params.model);
            var searchModel = model[(_a = params.options) === null || _a === void 0 ? void 0 : _a.data] || model;
            var searchText = ((_b = params.options) === null || _b === void 0 ? void 0 : _b.text) && model[params.options.text] || ko.observable();
            var process = function (event) {
                if (event.keyCode === 13)
                    searchModel.search(searchText());
            };
            componentInfo.element.addEventListener('keyup', process);
            return {
                value: searchText,
                refresh: function () { searchModel.search(searchText()); },
                dispose: function () { return componentInfo.element.removeEventListener('keyup', process); }
            };
        }
    },
    template: exports.searchTemplate
});


/***/ }),

/***/ "./sources/knockout/table/summary.ts":
/*!*******************************************!*\
  !*** ./sources/knockout/table/summary.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summaryTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var summary_1 = __webpack_require__(/*! ../../table/summary */ "./sources/table/summary.ts");
exports.summaryTemplate = __webpack_require__(/*! ./summary.html */ "./sources/knockout/table/summary.html")["default"];
ko.components.register("table4js-table-summary", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new summary_1.TableSummary(params.column);
        }
    },
    template: exports.summaryTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/action.ts":
/*!********************************************!*\
  !*** ./sources/knockout/widgets/action.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionItemWidget = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var actionTemplate = (__webpack_require__(/*! ./action.html */ "./sources/knockout/widgets/action.html")["default"]);
ko.components.register("table4js-action-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: actionTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/actions.ts":
/*!*********************************************!*\
  !*** ./sources/knockout/widgets/actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisActionsWidget = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var actionsTemplate = (__webpack_require__(/*! ./actions.html */ "./sources/knockout/widgets/actions.html")["default"]);
ko.components.register("table4js-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var modelValue = (params.model || {})[params.options.action];
            return {
                actions: modelValue,
                short: params.options.short,
                groupName: params.options.groupName,
                toggleChildActions: function (_, event) {
                    event.target.classList.toggle("table4js-nested-actions--open");
                }
            };
        }
    },
    template: actionsTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/dropdown-actions.ts":
/*!******************************************************!*\
  !*** ./sources/knockout/widgets/dropdown-actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisDropdownActions = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var dropdownTemplate = (__webpack_require__(/*! ./dropdown-actions.html */ "./sources/knockout/widgets/dropdown-actions.html")["default"]);
ko.components.register("table4js-dropdown-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var isOpen = params.isOpen || ko.observable(false);
            var close = function () { return isOpen(false); };
            document.body.addEventListener("click", close);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                document.body.removeEventListener("click", close);
            });
            return {
                isOpen: isOpen,
                title: params.title || "",
                moreText: params.moreText || "",
                data: params.data,
                actions: params.actions,
                toggle: function (_, event) {
                    isOpen(!isOpen());
                    event.stopPropagation();
                },
            };
        }
    },
    template: dropdownTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/icon.ts":
/*!******************************************!*\
  !*** ./sources/knockout/widgets/icon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisIconWidget = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
ko.components.register("table4js-icon", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: (__webpack_require__(/*! ./icon.html */ "./sources/knockout/widgets/icon.html")["default"])
});


/***/ }),

/***/ "./sources/localization.ts":
/*!*********************************!*\
  !*** ./sources/localization.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Localization = void 0;
var Localization = (function () {
    function Localization() {
    }
    var _a;
    _a = Localization;
    Localization.englishStrings = {
        filtercontains: "Contains",
        filterequal: "Equal",
        filterisnull: "Empty",
        filterisnotnull: "Not empty",
        filtergreater: "Greater",
        filterless: "Less",
        filtergreaterequal: "Greater or equal",
        filterlessequal: "Less or equal",
        filterdatenotequal: "Not equal",
        filterdateequal: "Equal",
        filterdategreater: "From",
        filterdateless: "To",
        noData: "No Data"
    };
    Localization.getString = function (stringId) {
        return _a.englishStrings[stringId];
    };
    return Localization;
}());
exports.Localization = Localization;


/***/ }),

/***/ "./sources/table/bool.ts":
/*!*******************************!*\
  !*** ./sources/table/bool.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoolCell = void 0;
var cell_1 = __webpack_require__(/*! ./cell */ "./sources/table/cell.ts");
__webpack_require__(/*! ./bool.scss */ "./sources/table/bool.scss");
var BoolCell = (function () {
    function BoolCell() {
        this.name = "bool";
        this.editor = "bool-cell-editor";
        this.viewer = "bool-cell-viewer";
    }
    return BoolCell;
}());
exports.BoolCell = BoolCell;
cell_1.TableCell.registerCellType(new BoolCell());


/***/ }),

/***/ "./sources/table/cell-editor.ts":
/*!**************************************!*\
  !*** ./sources/table/cell-editor.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InplaceEditor = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./cell-editor.scss */ "./sources/table/cell-editor.scss");
var InplaceEditor = (function (_super) {
    __extends(InplaceEditor, _super);
    function InplaceEditor(cell) {
        var _this = _super.call(this) || this;
        _this.cell = cell;
        _this.value = _this.cell.data;
        return _this;
    }
    InplaceEditor.prototype.complete = function (commit) {
        if (commit) {
            this.cell.data = this.value;
        }
        this.cell.inplaceEditor = undefined;
    };
    InplaceEditor.prototype.processKeyUp = function (event) {
        if (event.keyCode === 13 || event.keyCode === 27) {
            this.complete(event.keyCode === 13);
        }
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], InplaceEditor.prototype, "value", void 0);
    return InplaceEditor;
}(base_1.Base));
exports.InplaceEditor = InplaceEditor;


/***/ }),

/***/ "./sources/table/cell.ts":
/*!*******************************!*\
  !*** ./sources/table/cell.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableCell = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var TableCell = (function (_super) {
    __extends(TableCell, _super);
    function TableCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCell.registerCellType = function (cellType) {
        TableCell.cellTypes[cellType.name] = cellType;
    };
    TableCell.getContainerCss = function (cell, isMergedCell) {
        var containerCss = "table4js-table-cell__container " + cell.css;
        if (isMergedCell) {
            containerCss += " cell__sticky-text";
        }
        return containerCss;
    };
    TableCell.getContentCss = function (cell, isMergedCell) {
        var contentCss = isMergedCell ? "table4js-table-cell__text--merged" : "table4js-table-cell__text";
        if (cell instanceof TableCell && cell.isModified) {
            contentCss += " table4js-table-cell__text--modified";
        }
        return contentCss;
    };
    TableCell.prototype.getCellTypeDescription = function (type) {
        return TableCell.cellTypes[type] || TableCell.cellTypes["default"];
    };
    TableCell.prototype.getCellCss = function (data, column) {
        return this.getCellTypeDescription(column.type).css;
    };
    TableCell.prototype.getCellEditor = function (data, column) {
        return this.getCellTypeDescription(column.type).editor || TableCell.cellTypes["default"].editor;
    };
    TableCell.prototype.getCellViewer = function (data, column) {
        return this.getCellTypeDescription(column.type).viewer || TableCell.cellTypes["default"].viewer;
    };
    TableCell.prototype.getCellText = function (val) {
        return val;
    };
    TableCell.prototype.initialize = function (col, back, data, color) {
        this.data = data[col.name],
            this.color = color;
        this.name = col.name;
        this.css = this.getCellCss(data, col);
        this.editor = this.getCellEditor(data, col);
        this.viewer = this.getCellViewer(data, col);
        if (back !== null) {
            if (back) {
                if (col.last && col.last.text === this.text) {
                    this.count = col.last.count + 1;
                    col.last.count = 0;
                    if (col.last == col.prev) {
                        col.prev = this;
                        col.count = this.count;
                    }
                }
                col.last = this;
            }
            else {
                if (col.last === null)
                    col.last = this;
                if (col.prevValue && (col.prevValue === this.text)) {
                    col.count++;
                    this.count = 0;
                    col.prev.count = col.count;
                }
                else {
                    col.count = 1;
                    col.prev = this;
                    col.prevValue = this.text;
                }
            }
        }
        this.isModified = false;
    };
    TableCell.cellTypes = {
        "default": {
            css: "table4js-table-cell--left",
            editor: "table4js-cell-editor",
            viewer: "table4js-cell-viewer"
        },
    };
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableCell.prototype, "isModified", void 0);
    __decorate([
        (0, property_1.property)({
            onSet: function (val, target) {
                if (target.text !== val) {
                    target.text = target.getCellText(val);
                    target.isModified = true;
                }
            }
        }),
        __metadata("design:type", Object)
    ], TableCell.prototype, "data", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableCell.prototype, "text", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: 1 }),
        __metadata("design:type", Number)
    ], TableCell.prototype, "count", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableCell.prototype, "color", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableCell.prototype, "name", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], TableCell.prototype, "inplaceEditor", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableCell.prototype, "css", void 0);
    return TableCell;
}(base_1.Base));
exports.TableCell = TableCell;


/***/ }),

/***/ "./sources/table/column-filter-item.ts":
/*!*********************************************!*\
  !*** ./sources/table/column-filter-item.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColumnFilterItem = exports.FilterItemValue = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var find_1 = __webpack_require__(/*! ../find */ "./sources/find.ts");
var FilterItemValue = (function (_super) {
    __extends(FilterItemValue, _super);
    function FilterItemValue(column) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.field = column.name;
        return _this;
    }
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) { return target.column.filterContext.apply(); } }),
        __metadata("design:type", Object)
    ], FilterItemValue.prototype, "value", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) { return target.column.filterContext.apply(); } }),
        __metadata("design:type", String)
    ], FilterItemValue.prototype, "op", void 0);
    return FilterItemValue;
}(base_1.Base));
exports.FilterItemValue = FilterItemValue;
var ColumnFilterItem = (function (_super) {
    __extends(ColumnFilterItem, _super);
    function ColumnFilterItem(column, getColumnData) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.getColumnData = getColumnData;
        _this.filterItemValue = new FilterItemValue(column);
        if (find_1.operationsMap[_this.column.type]) {
            _this.operations = find_1.operationsMap[_this.column.type];
        }
        else {
            _this.operations = find_1.operationsMap["string"];
        }
        _this.operation = _this.operations[0];
        return _this;
    }
    Object.defineProperty(ColumnFilterItem.prototype, "filterEditorName", {
        get: function () {
            return "table4js-table-filter-default";
        },
        enumerable: false,
        configurable: true
    });
    ColumnFilterItem.prototype.getFilterValue = function () {
        return {
            field: this.filterItemValue.field,
            op: this.filterItemValue.op,
            value: this.filterItemValue.value
        };
    };
    __decorate([
        (0, property_1.property)({
            onSet: function (val, target) {
                if (!!val) {
                    target.filterItemValue.op = val.op;
                }
                target.showOperand = val && val.op !== "ISN" && val.op !== "ISNN";
            }
        }),
        __metadata("design:type", Object)
    ], ColumnFilterItem.prototype, "operation", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: true }),
        __metadata("design:type", Boolean)
    ], ColumnFilterItem.prototype, "showOperand", void 0);
    return ColumnFilterItem;
}(base_1.Base));
exports.ColumnFilterItem = ColumnFilterItem;


/***/ }),

/***/ "./sources/table/column-filter.ts":
/*!****************************************!*\
  !*** ./sources/table/column-filter.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterContext = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var column_filter_item_1 = __webpack_require__(/*! ./column-filter-item */ "./sources/table/column-filter-item.ts");
__webpack_require__(/*! ./column-filter.scss */ "./sources/table/column-filter.scss");
var FilterContext = (function (_super) {
    __extends(FilterContext, _super);
    function FilterContext(column, dataProviderOwner) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.dataProviderOwner = dataProviderOwner;
        _this.addItem = function (column) {
            _this.filterItems.push(new column_filter_item_1.ColumnFilterItem(_this.column, function (column, filter, limit, offset, callback) {
                _this.dataProviderOwner.dataProvider.getColumnData(column, filter, limit, offset, callback);
            }));
            _this.showFilter = true;
        };
        _this.removeItem = function (item) {
            var currentFilterItems = _this.filterItems;
            currentFilterItems.splice(currentFilterItems.indexOf(item), 1);
            _this.showFilter = !!currentFilterItems.length;
            _this.value = currentFilterItems.map(function (i) { return i.filterItemValue; });
        };
        return _this;
    }
    FilterContext.prototype.apply = function () {
        this.value = this.filterItems.map(function (item) { return item.getFilterValue(); });
    };
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], FilterContext.prototype, "showFilter", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], FilterContext.prototype, "value", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], FilterContext.prototype, "filterItems", void 0);
    return FilterContext;
}(base_1.Base));
exports.FilterContext = FilterContext;


/***/ }),

/***/ "./sources/table/column.ts":
/*!*********************************!*\
  !*** ./sources/table/column.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableColumn = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var column_filter_1 = __webpack_require__(/*! ./column-filter */ "./sources/table/column-filter.ts");
var TableColumn = (function (_super) {
    __extends(TableColumn, _super);
    function TableColumn(columnDescription, table) {
        var _this = _super.call(this) || this;
        _this.table = table;
        _this.type = "string";
        _this.visible = true;
        _this.clickFilter = function (column, event) {
            column.filterContext.addItem(column);
            event.stopPropagation();
        };
        Object.keys(columnDescription || {}).forEach(function (key) {
            if (columnDescription[key] !== undefined) {
                _this[key] = columnDescription[key];
            }
        });
        if (_this.title === undefined) {
            _this.title = _this.name;
        }
        _this.filterContext = new column_filter_1.FilterContext(_this, table);
        return _this;
    }
    TableColumn.prototype.calculateSummary = function (column) {
        if (column.summaryParams && column.summaryParams.field === column.name && column.summaryParams.func) {
            this.table.dataProvider.getSummary(column.summaryParams.func, column.summaryParams.field, this.table["tableFilter"], function (data) { return column.summaryValue = data; });
        }
    };
    TableColumn.prototype.dispose = function () {
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], TableColumn.prototype, "order", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], TableColumn.prototype, "summaryValue", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) {
                target.calculateSummary(target);
            } }),
        __metadata("design:type", Object)
    ], TableColumn.prototype, "summaryParams", void 0);
    return TableColumn;
}(base_1.Base));
exports.TableColumn = TableColumn;


/***/ }),

/***/ "./sources/table/filter-default.ts":
/*!*****************************************!*\
  !*** ./sources/table/filter-default.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./filter-default.scss */ "./sources/table/filter-default.scss");


/***/ }),

/***/ "./sources/table/filter-select.ts":
/*!****************************************!*\
  !*** ./sources/table/filter-select.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterSelect = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./filter-select.scss */ "./sources/table/filter-select.scss");
function conversionByType(value, columnType) {
    if (columnType === "bool")
        return value ? "Yes" : "No";
    return value;
}
function filterSearchByType(columnType) {
    if (columnType === "bool")
        return false;
    return true;
}
var TableFilterSelect = (function (_super) {
    __extends(TableFilterSelect, _super);
    function TableFilterSelect(value, columnName, columnType, getColumnData, isOpen, title, moreText) {
        if (title === void 0) { title = ""; }
        if (moreText === void 0) { moreText = ""; }
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.columnName = columnName;
        _this.columnType = columnType;
        _this.getColumnData = getColumnData;
        _this.title = title;
        _this.moreText = moreText;
        _this.limit = 10;
        _this.offset = 0;
        _this.toggle = function (_, event) {
            _this.isOpen = !_this.isOpen;
            event.stopPropagation();
        };
        _this.isChecked = function (item) {
            return _this.selectedItems.indexOf(item) !== -1;
        };
        _this.clickItem = function (item) {
            var itemIndex = _this.selectedItems.indexOf(item);
            if (itemIndex !== -1) {
                _this.deleteItems(item);
            }
            else {
                _this.selectedItems.push(item);
            }
            _this.value.value = _this.selectedItems.map(function (i) { return i.value; });
            if (Array.isArray(_this.value.value) && _this.value.value.length === 0)
                _this.value.value = undefined;
        };
        _this.deleteItems = function (name) {
            var itemIndex = _this.selectedItems.indexOf(name);
            _this.selectedItems.splice(itemIndex, 1);
        };
        if (isOpen !== undefined) {
            _this.isOpen = isOpen;
        }
        _this.updateFoundItems(null);
        _this.isFilterSearchByType = filterSearchByType(columnType);
        return _this;
    }
    TableFilterSelect.prototype.updateFoundItems = function (filterValue) {
        var _this = this;
        this.foundItems = [];
        this.offset = 0;
        this.getColumnData(this.columnName, filterValue, this.limit, this.offset, function (items) {
            _this.foundItems = items.map(function (i) { return { name: conversionByType(i, _this.columnType), value: i }; });
            _this.isLoadMore = items.length === _this.limit;
            _this.offset += 10;
        });
    };
    TableFilterSelect.prototype.loadMore = function () {
        var _this = this;
        this.getColumnData(this.columnName, this.filterText, this.limit, this.offset, function (items) {
            items.forEach(function (i) { return _this.foundItems.push(i); });
            _this.isLoadMore = items.length === _this.limit;
            _this.offset += 10;
        });
    };
    TableFilterSelect.prototype.dispose = function () {
    };
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableFilterSelect.prototype, "isOpen", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableFilterSelect.prototype, "isFilterSearchByType", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableFilterSelect.prototype, "isLoadMore", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [], onSet: function (val, target) {
                console.log("Set filter value to " + JSON.stringify(val));
                target.value.value = target.selectedItems;
            } }),
        __metadata("design:type", Array)
    ], TableFilterSelect.prototype, "selectedItems", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], TableFilterSelect.prototype, "foundItems", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) {
                target.updateFoundItems(val);
            }, }),
        __metadata("design:type", String)
    ], TableFilterSelect.prototype, "filterText", void 0);
    return TableFilterSelect;
}(base_1.Base));
exports.TableFilterSelect = TableFilterSelect;


/***/ }),

/***/ "./sources/table/index.ts":
/*!********************************!*\
  !*** ./sources/table/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var action_1 = __webpack_require__(/*! ../core/action */ "./sources/core/action.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var dependencies_1 = __webpack_require__(/*! ../core/dependencies */ "./sources/core/dependencies.ts");
var cell_editor_1 = __webpack_require__(/*! ./cell-editor */ "./sources/table/cell-editor.ts");
var cell_1 = __webpack_require__(/*! ./cell */ "./sources/table/cell.ts");
var column_1 = __webpack_require__(/*! ./column */ "./sources/table/column.ts");
var search_1 = __webpack_require__(/*! ./search */ "./sources/table/search.ts");
var array_data_provider_1 = __webpack_require__(/*! ../utils/array-data-provider */ "./sources/utils/array-data-provider.ts");
var row_1 = __webpack_require__(/*! ./row */ "./sources/table/row.ts");
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./sources/utils/utils.ts");
var localization_1 = __webpack_require__(/*! ../localization */ "./sources/localization.ts");
var Icons = __webpack_require__(/*! ../icon */ "./sources/icon.ts");
__webpack_require__(/*! ./index.scss */ "./sources/table/index.scss");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table(config, element) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.innerActions = [];
        _this.icons = Icons;
        _this._dataProvider = undefined;
        _this.clickColumn = function (column, event) {
            if (_this.isShowDetail) {
                _this.hideDetail();
            }
            var newOrder = column.order === undefined ? false : !column.order;
            if (!event.shiftKey) {
                _this.columns.map(function (c) { return c.order = undefined; });
            }
            column.order = newOrder;
            _this.refresh();
        };
        _this.startEditCell = function (cell) {
            if (_this.currentCellEditor)
                _this.currentCellEditor.inplaceEditor = undefined;
            cell.inplaceEditor = new cell_editor_1.InplaceEditor(cell);
            _this.currentCellEditor = cell;
            _this.completeEditCell();
        };
        _this.curCol = undefined;
        _this.nxtCol = undefined;
        _this.pageX = undefined;
        _this.nxtColWidth = undefined;
        _this.curColWidth = undefined;
        _this.logMouseOver = function (d, e) {
            e.target.style.borderRight = '2px solid rgba(255, 255, 255, 0.5)';
        };
        _this.logMouseOut = function (d, e) {
            e.target.style.borderRight = '';
        };
        _this.logMouseMove = function (d, e) {
            if (_this.curCol && e.buttons) {
                var diffX = e.pageX - _this.pageX;
                _this.nxtCol && (_this.nxtCol.style.width = (_this.nxtColWidth - (diffX)) + 'px');
                _this.curCol.style.width = (_this.curColWidth + diffX) + 'px';
            }
        };
        _this.logMouseDown = function (d, e) {
            _this.curCol = e.target.parentElement;
            _this.nxtCol = _this.curCol.nextElementSibling.nextElementSibling ? _this.curCol.nextElementSibling : undefined;
            _this.pageX = e.pageX;
            var padding = _this.paddingDiff(_this.curCol);
            _this.curColWidth = _this.curCol.offsetWidth - padding;
            if (_this.nxtCol)
                _this.nxtColWidth = _this.nxtCol.offsetWidth - padding;
        };
        _this.logMouseUp = function (d, e) {
            _this.curCol = undefined;
            _this.nxtCol = undefined;
            _this.pageX = undefined;
            _this.nxtColWidth = undefined;
            _this.curColWidth = undefined;
            return false;
        };
        _this.rootLevel = true;
        _this.lastOffset = 0;
        _this.lastOffsetBack = 0;
        _this.partRowCount = 10;
        _this.lastSelectRow = null;
        _this.searchModel = new search_1.SearchModel();
        _this.getActions = function (container) {
            var actions = [].concat(_this.innerActions).concat(_this.config.actions || []);
            return actions.filter(function (action) { return action.container === container; });
        };
        _this.showSearch = config.enableSearch === true;
        _this.createActions(_this.config);
        _this.createColumns(_this.config);
        _this.filterUpdater = new dependencies_1.ComputedUpdater(function () { return _this.updateByFilter(); });
        _this.filterUpdater.observe(_this, "__filterUpdaterValue");
        _this.searchModel.updater = function () { return _this.updateByFilter(); };
        if (!!element) {
            _this.initialize(element);
        }
        _this.isMergedСells = config.enableMergedСells;
        return _this;
    }
    Table.prototype.updateByFilter = function () {
        var _this = this;
        var isOldFilter = (this.tableFilter && this.tableFilter.length > 0);
        this.tableFilter = [];
        if (this.searchModel.searchValue) {
            this.tableFilter.push({ value: this.searchModel.searchValue, op: "C", field: null });
        }
        this.columns.forEach(function (column) {
            var columnFilterValue = column.filterContext.value;
            if (columnFilterValue) {
                columnFilterValue.forEach(function (fiv) {
                    var op = fiv.op;
                    var val = fiv.value;
                    if ((op === "EQ" && val) || (op === "C" && val) || (op === "ISN") || (op === "ISNN"))
                        _this.tableFilter.push({ value: val, op: op, field: fiv.field });
                });
            }
        });
        if ((this.tableFilter.length > 0) || (isOldFilter && this.tableFilter.length === 0)) {
            this.searchModel.prevSearchValue = this.searchModel.searchValue;
            this.refresh();
        }
    };
    Table.prototype.initialize = function (element) {
        var _this = this;
        this.scrollerElement = element.getElementsByClassName("table4js-table-scroll-container")[0];
        this.tableElement = element.getElementsByTagName("table")[0];
        this.resizerElement = element.getElementsByClassName("table4js-table")[0];
        var checkLoading = function () {
            var self = _this;
            self.partRowCount = Math.round(self.scrollerElement.clientHeight / Table.rowHeight);
            if (self.scrollerElement.scrollTop < Table.rowHeight && self.lastOffsetBack > 0) {
                if ((self.lastOffsetBack - self.partRowCount) < 0) {
                    self.drawRows(self.lastOffsetBack, Math.max(0, self.lastOffsetBack - self.partRowCount), true);
                }
                else {
                    self.drawRows(self.partRowCount, Math.max(0, self.lastOffsetBack - self.partRowCount), true);
                }
            }
            if ((self.scrollerElement.scrollTop >= self.tableElement.clientHeight - self.scrollerElement.clientHeight) && _this.loadMore) {
                self.drawRows(self.partRowCount, self.lastOffset, false);
            }
        };
        this.scrollerElement.onscroll = checkLoading;
        this.resizerElement.onresize = checkLoading;
        checkLoading();
        if (typeof ResizeObserver !== "undefined") {
            var resizeObserver = new ResizeObserver(function (entries) {
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var entry = entries_1[_i];
                    if (entry.target.tagName === "THEAD") {
                        if (entry.contentRect.width < 700) {
                            entry.target.parentElement.classList.add("table4js-table--small");
                        }
                        else {
                            entry.target.parentElement.classList.remove("table4js-table--small");
                        }
                        _this.tableHeadHeight = entry.contentRect.height + 5;
                    }
                }
            });
            resizeObserver.observe(element.getElementsByTagName("thead")[0]);
        }
    };
    Table.prototype.showDetail = function (rowData) {
        this.isShowDetail = true;
    };
    Table.prototype.hideDetail = function () {
        this.expandedRowKey = null;
        this.isShowDetail = false;
    };
    Table.prototype.navigateTo = function (startRow) {
        if (startRow) {
            this.lastOffsetBack = startRow - 1;
            this.lastOffset = startRow - 1;
            this.columns.forEach(function (c) { c.count = null; c.prev = null; c.prevValue = undefined; c.last = null; });
            this.rows = [];
            this.drawRows(this.partRowCount, startRow - 1, false);
            this.hideDetail();
        }
    };
    Table.prototype.createColumn = function (column, model) {
        return new column_1.TableColumn(column, this);
    };
    Table.prototype.createColumns = function (config) {
        var _this = this;
        this.columns = config.columns.map(function (column) {
            return _this.createColumn(column, config);
        });
    };
    Table.prototype.createActions = function (config) {
        var _this = this;
        if (config.enableSummary === true) {
            this.innerActions.push(new action_1.Action({
                name: "summary-action",
                action: function () {
                    _this.showTableSummary = !_this.showTableSummary;
                },
                svg: this.icons.equal,
                container: "top"
            }));
        }
        if (config.enableMergedСellsToggle === true) {
            this.innerActions.push(new action_1.Action({
                name: "mergedСells-action",
                action: function () {
                    _this.isMergedСells = !_this.isMergedСells;
                },
                svg: this.icons.table,
                container: "top"
            }));
        }
        if (config.enableEdit === true) {
            this.innerActions.push(new action_1.Action({
                name: "save-action",
                action: function () {
                    var isInsert = false;
                    _this.rows.forEach(function (r) {
                        var modify = {};
                        if (r.number > 0) {
                            r.cells.forEach(function (c) { return c.text !== c.data && (modify[c.name] = c.text); });
                            if (!(0, utils_1.isEmpty)(modify)) {
                                if (_this.dataProvider.saveData(_this.keyColumn, r.rowData[_this.keyColumn], modify))
                                    r.cells.forEach(function (c) { return c.data = c.text; });
                            }
                        }
                        else {
                            r.cells.forEach(function (c) { return modify[c.name] = c.text; });
                            if (_this.dataProvider.insertData(_this.keyColumn, modify))
                                isInsert = true;
                        }
                    });
                    if (isInsert)
                        _this.refresh();
                },
                svg: this.icons.save,
                container: "bottom"
            }), new action_1.Action({
                name: "delete-action",
                action: function () {
                    _this.selectedRows.forEach(function (r) {
                        if (r.number > 0)
                            _this.rows.slice(_this.rows.indexOf(r), 1);
                    });
                    _this.dataProvider.deleteData(_this.keyColumn, _this.selectedRows.map(function (r) { return r.number > 0 && r.rowData[_this.keyColumn]; }), (function (_) { return _this.refresh(); }));
                },
                svg: this.icons.del,
                container: "bottom"
            }), new action_1.Action({
                name: "newRow-action",
                action: function () {
                    var newRow = {};
                    _this.columns.forEach(function (c) { return c.visible && (newRow[c.name] = ""); });
                    _this.rows.unshift(_this.createRow(newRow, -1, null));
                },
                svg: this.icons.add,
                container: "bottom"
            }));
        }
    };
    Object.defineProperty(Table.prototype, "dataProvider", {
        get: function () {
            return this._dataProvider || this.config;
        },
        set: function (provider) {
            this._dataProvider = provider;
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "data", {
        set: function (_data) {
            this.dataProvider = new array_data_provider_1.ArrayDataProvider(_data);
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.refresh = function () {
        this.lastOffsetBack = 0;
        this.lastOffset = 0;
        this.columns.forEach(function (c) { c.count = null; c.prev = null; c.prevValue = undefined; });
        this.rows = [];
        this.drawRows(this.partRowCount, 0, false);
        this.hideDetail();
    };
    Table.prototype.drawRows = function (limit, offset, back) {
        var _this = this;
        if (back === void 0) { back = false; }
        if (!this.loadingMutex) {
            this.loadingMutex = true;
            this.dataProvider.getData(limit, offset, this.columns.filter(function (c) { return c.order !== undefined; }).map(function (c) { return ({ field: c.name, desc: c.order }); }), this.tableFilter, null, back, function (data, newOffset, totalCount, back) {
                if (back) {
                    _this.lastOffsetBack = _this.lastOffsetBack - limit;
                }
                else {
                    _this.lastOffset = _this.lastOffset + limit;
                }
                _this.loadMoreBack = _this.lastOffsetBack > 0;
                _this.totalCount = totalCount;
                _this.loadMore = _this.lastOffset <= totalCount;
                var currentRows = _this.rows;
                (data || []).forEach(function (dataItem, index) {
                    var newRow = _this.createRow(back ? data[data.length - 1 - Number(index)] : dataItem, back ? data.length - 1 - Number(index) + offset : Number(index) + offset, back);
                    if (back) {
                        currentRows.unshift(newRow);
                    }
                    else {
                        currentRows.push(newRow);
                    }
                });
                _this.loadingMutex = false;
            });
        }
    };
    Table.prototype.clickRow = function (row, event) {
        this.selectedRows.forEach(function (r) { return r.selected = false; });
        row.selected = true;
    };
    Table.prototype.selectRow = function (row, event) {
        var _this = this;
        row.selected = !row.selected;
        event.stopPropagation();
        if (event.shiftKey && this.lastSelectRow) {
            this.rows.filter(function (e) { return e.number >= Math.min(_this.lastSelectRow.number, row.number) && e.number <= Math.max(_this.lastSelectRow.number, row.number); })
                .forEach(function (e) { return e.selected = true; });
        }
        if (row.selected)
            this.lastSelectRow = row;
        if (this.selectedRows.length !== 1)
            this.hideDetail();
    };
    Table.prototype.createRow = function (data, num, back) {
        var _this = this;
        var rowCells = [];
        var lastText = null;
        var colorCell = null, colorRow = null;
        this.columns.reverse().forEach(function (col) {
            var cell = new cell_1.TableCell();
            cell.initialize(col, back, data, colorCell);
            if (!!lastText) {
                cell.text += ("/" + lastText);
            }
            lastText = (col.concatPrev && !col.row_color) ? cell.text : null;
            colorRow = (col.row_color && !col.concatPrev) ? (col.type === "bool" ? (data[col.name] ? _this.config.selectCellColor : null) : data[col.name]) : colorRow;
            colorCell = (col.row_color && col.concatPrev) ? (col.type === "bool" ? (data[col.name] ? _this.config.selectCellColor : null) : data[col.name]) : null;
            if (col.visible)
                rowCells.push(cell);
        });
        this.columns.reverse();
        var row_id = data[this.keyColumn];
        var row = new row_1.TableRow();
        row.cells = rowCells.reverse();
        row.rowData = data;
        row.id = row_id;
        row.number = num + 1;
        row.selected = row_id && (this.expandedRowKey === row_id);
        row.color = colorRow;
        row.select = function (data, event) { return _this.selectRow(data, event); },
            row.click = function (data, event) { return _this.clickRow(data, event); };
        return row;
    };
    Table.prototype.rowExpanded = function (id) {
        return false;
    };
    Table.prototype.completeEditCell = function () {
    };
    Table.prototype.hasActiveInplaceEditorCore = function () {
        return false;
    };
    Object.defineProperty(Table.prototype, "hasActiveInplaceEditor", {
        get: function () {
            return this.hasActiveInplaceEditorCore();
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.paddingDiff = function (col) {
        if (this.getStyleVal(col, 'box-sizing') == 'border-box') {
            return 0;
        }
        var padLeft = this.getStyleVal(col, 'padding-left');
        var padRight = this.getStyleVal(col, 'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));
    };
    Table.prototype.getStyleVal = function (elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
    };
    Object.defineProperty(Table.prototype, "keyColumn", {
        get: function () {
            return this.config.keyColumn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "selectedRows", {
        get: function () {
            return this.rows.filter(function (r) { return r.selected; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "topActions", {
        get: function () {
            return this.getActions('top');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "dropdownActions", {
        get: function () {
            return this.getActions('dropdown');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "bottomActions", {
        get: function () {
            return this.getActions('bottom');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "noDataText", {
        get: function () {
            return localization_1.Localization.getString("noData");
        },
        enumerable: false,
        configurable: true
    });
    Table.rowHeight = 20;
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isNumber", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isMerged\u0421ells", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loadingMutex", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: true }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loadMore", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loadMoreBack", void 0);
    __decorate([
        (0, property_1.property)({
            defaultValue: [], onSet: function (val, target) {
                target.viewFilterTable = new dependencies_1.ComputedUpdater(function () { return val.filter(function (c) { return c.filterContext.showFilter; }).length > 0; });
            }
        }),
        __metadata("design:type", Array)
    ], Table.prototype, "columns", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], Table.prototype, "rows", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "showTableSummary", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "showSearch", void 0);
    __decorate([
        (0, property_1.property)({
            onSet: function (newValue, target) {
                target.navigateTo(newValue);
            }
        }),
        __metadata("design:type", Number)
    ], Table.prototype, "startRow", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: 0 }),
        __metadata("design:type", Number)
    ], Table.prototype, "totalCount", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: 0 }),
        __metadata("design:type", Number)
    ], Table.prototype, "tableHeadHeight", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: true }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "showTableFilter", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "viewFilterTable", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isShowDetail", void 0);
    return Table;
}(base_1.Base));
exports.Table = Table;


/***/ }),

/***/ "./sources/table/number.ts":
/*!*********************************!*\
  !*** ./sources/table/number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberCell = void 0;
var cell_1 = __webpack_require__(/*! ./cell */ "./sources/table/cell.ts");
var NumberCell = (function () {
    function NumberCell() {
        this.name = "number";
        this.css = "table4js-table-cell--right";
    }
    return NumberCell;
}());
exports.NumberCell = NumberCell;
cell_1.TableCell.registerCellType(new NumberCell());


/***/ }),

/***/ "./sources/table/row.ts":
/*!******************************!*\
  !*** ./sources/table/row.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableRow = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], TableRow.prototype, "cells", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableRow.prototype, "selected", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableRow.prototype, "color", void 0);
    return TableRow;
}(base_1.Base));
exports.TableRow = TableRow;


/***/ }),

/***/ "./sources/table/search.ts":
/*!*********************************!*\
  !*** ./sources/table/search.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchModel = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./search.scss */ "./sources/table/search.scss");
var SearchModel = (function (_super) {
    __extends(SearchModel, _super);
    function SearchModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.search = function (text) {
            _this.prevSearchValue = _this.searchValue;
            _this.searchValue = text;
            _this.updater && _this.updater();
        };
        return _this;
    }
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], SearchModel.prototype, "prevSearchValue", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], SearchModel.prototype, "searchValue", void 0);
    return SearchModel;
}(base_1.Base));
exports.SearchModel = SearchModel;


/***/ }),

/***/ "./sources/table/summary.ts":
/*!**********************************!*\
  !*** ./sources/table/summary.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableSummary = exports.TableSummaryItem = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./summary.scss */ "./sources/table/summary.scss");
var Functions = [
    { title: "-", value: "", hint: "" },
    { title: "Σ", value: "sum", hint: "Sum of cells for this table column", types: ["integer", "money", "number"] },
    { title: "x̄", value: "avg", hint: "Arithmetic mean in this table column", types: ["integer", "money", "number"] },
    { title: "min", value: "min", hint: "Minimum value in this table column", types: ["integer", "money", "date", "number"] },
    { title: "max", value: "max", hint: "Maximum value in this table column", types: ["integer", "money", "date", "number"] },
    { title: "Ν", value: "count", hint: "Number of non-blank cells in this column" },
    { title: "U", value: "unique", hint: "Number of unique cells in this column" },
];
var TableSummaryItem = (function () {
    function TableSummaryItem(title, value) {
        this.title = title;
        this.value = value;
    }
    return TableSummaryItem;
}());
exports.TableSummaryItem = TableSummaryItem;
var TableSummary = (function (_super) {
    __extends(TableSummary, _super);
    function TableSummary(column) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.summaryItems = Functions.filter(function (funcDescription) {
            return !funcDescription.types || funcDescription.types.indexOf(column.type) !== -1;
        }).map(function (funcDescription) { return new TableSummaryItem(funcDescription.title, funcDescription.value); });
        return _this;
    }
    Object.defineProperty(TableSummary.prototype, "value", {
        get: function () {
            return this.column.summaryValue;
        },
        set: function (val) {
            this.column.summaryValue = val;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, property_1.property)({ defaultValue: null, onSet: function (val, target) {
                target.column.summaryParams = { func: val, field: target.column.name };
            } }),
        __metadata("design:type", Object)
    ], TableSummary.prototype, "func", void 0);
    return TableSummary;
}(base_1.Base));
exports.TableSummary = TableSummary;


/***/ }),

/***/ "./sources/utils/array-data-provider.ts":
/*!**********************************************!*\
  !*** ./sources/utils/array-data-provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayDataProvider = void 0;
var ArrayDataProvider = (function () {
    function ArrayDataProvider(data) {
        this.data = data;
    }
    ArrayDataProvider.prototype.filtered = function (filters, data) {
        var _a;
        return (_a = data === null || data === void 0 ? void 0 : data.filter(function (row) {
            return filters.every(function (f) {
                switch (f.op) {
                    case "EQ": return f.value.includes(row[f.field]);
                    case "C": return f.field ? ~row[f.field].toString().toUpperCase().indexOf(f.value.toUpperCase()) : Object.keys(row).some(function (k) { return !!(row[k] && row[k].toString().toUpperCase().indexOf(f.value.toUpperCase()) !== -1); });
                    case "ISN": return !(row[f.field]);
                    case "ISNN": return !!(row[f.field]);
                    default: return true;
                }
            });
        })) !== null && _a !== void 0 ? _a : [];
    };
    ArrayDataProvider.prototype.getData = function (limit, offset, order, filters, key, back, callback) {
        function sortfunc(a, b) {
            for (var i_1 = 0; i_1 < order.length; i_1++) {
                if (a[order[i_1].field] === b[order[i_1].field])
                    continue;
                return (a[order[i_1].field] > b[order[i_1].field] ? 1 : -1) * (order[i_1].desc ? -1 : 1);
            }
            return 0;
        }
        (order.length > 0) && this.data.sort(sortfunc);
        var result = [];
        var filteredData = this.filtered(filters, this.data);
        for (var i = offset > 0 ? offset : 0; i < offset + limit && filteredData && i < filteredData.length; i++) {
            result.push(filteredData[i]);
        }
        callback(result, offset + limit, filteredData.length, back);
    };
    ArrayDataProvider.prototype.getSummary = function (func, field, filters, callback) {
        var filteredData = this.filtered(filters, this.data);
        var result = filteredData.length ? filteredData[0][field] : false;
        var sum = 0, count = 0, uniques = [];
        this.data.forEach(function (row) {
            switch (func) {
                case "sum":
                    result = result + row[field];
                    break;
                case "avg":
                    sum = sum + row[field];
                    count++;
                    result = sum / count;
                    break;
                case "min":
                    result = result < row[field] ? result : row[field];
                    break;
                case "max":
                    result = result > row[field] ? result : row[field];
                    break;
                case "count":
                    if (row[field])
                        count++;
                    result = count;
                    break;
                case "unique":
                    if (!uniques.includes(row[field])) {
                        uniques.push(row[field]);
                    }
                    result = uniques.length;
                    break;
                default: break;
            }
        });
        callback(result);
    };
    ArrayDataProvider.prototype.getColumnData = function (columnName, filter, limit, offset, callback) {
        var result = [], uniques = [];
        var filteredData = this.data.map(function (row) {
            if ((!(filter) || ~row[columnName].toUpperCase().indexOf(filter.toUpperCase())) && !uniques.includes(row[columnName])) {
                uniques.push(row[columnName]);
            }
            ;
        });
        for (var i = offset > 0 ? offset : 0; i < offset + limit && uniques && i < uniques.length; i++) {
            result.push(uniques[i]);
        }
        callback(result);
    };
    ArrayDataProvider.prototype.saveData = function (keyName, key, modify) {
        var _this = this;
        Object.keys(modify).forEach(function (p) { return _this.data.find(function (r) { return r[keyName] == key; })[p] = modify[p]; });
        return true;
    };
    ArrayDataProvider.prototype.insertData = function (keyName, modify) {
        console.log(modify);
        modify[keyName] = this.data.length + 1;
        this.data.push(modify);
        return true;
    };
    ArrayDataProvider.prototype.deleteData = function (keyName, keys, callback) {
        var _this = this;
        keys.forEach(function (k) { return _this.data.find(function (r) { return _this.data.splice(_this.data.indexOf(_this.data.find(function (r) { return r[keyName] == k; })), 1); }); });
        console.log(this.data);
        callback(true);
    };
    return ArrayDataProvider;
}());
exports.ArrayDataProvider = ArrayDataProvider;


/***/ }),

/***/ "./sources/utils/remote-data-provider.ts":
/*!***********************************************!*\
  !*** ./sources/utils/remote-data-provider.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoteDataProvider = exports.postData = void 0;
function postData(url, data) {
    if (url === void 0) { url = ''; }
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2: return [2, _a.sent()];
            }
        });
    });
}
exports.postData = postData;
var RemoteDataProvider = (function () {
    function RemoteDataProvider(name, url) {
        this.name = name;
        this.url = url;
    }
    RemoteDataProvider.prototype.getData = function (limit, offset, order, filters, key, back, callback) {
        postData(this.url + "getData", { name: this.name, limit: limit, offset: offset, order: order, filters: filters, key: key, }).then(function (data) {
            callback(data.data, offset + limit, data.count, back);
        });
    };
    RemoteDataProvider.prototype.getSummary = function (func, field, filters, callback) {
        postData(this.url + "getSummary", { name: this.name, func: func, field: field, filters: filters }).then(function (data) {
            callback(data.data);
        });
    };
    RemoteDataProvider.prototype.getColumnData = function (columnName, filter, limit, offset, callback) {
        postData(this.url + "getColumnData", { name: this.name, columnName: columnName, filter: filter, limit: limit, offset: offset }).then(function (data) {
            callback(data.data);
        });
    };
    RemoteDataProvider.prototype.saveData = function (keyName, key, modify) {
        console.log("".concat(keyName, " - ").concat(key, " => ").concat(modify));
        return true;
    };
    RemoteDataProvider.prototype.insertData = function (keyName, modify) {
        console.log("".concat(keyName, " => ").concat(modify));
        return true;
    };
    RemoteDataProvider.prototype.deleteData = function (keyName, keys, callback) {
        console.log("".concat(keyName, " - ").concat(keys));
        callback(true);
    };
    return RemoteDataProvider;
}());
exports.RemoteDataProvider = RemoteDataProvider;


/***/ }),

/***/ "./sources/utils/utils.ts":
/*!********************************!*\
  !*** ./sources/utils/utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEqual = exports.isEmpty = void 0;
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
exports.isEmpty = isEmpty;
function isEqual(obj1, obj2) {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length === obj2.length) {
            for (var i = 0; i < obj1.length; i++) {
                if (obj1[i] !== obj2[i])
                    return false;
            }
            return true;
        }
        return false;
    }
    return obj1 === obj2;
}
exports.isEqual = isEqual;


/***/ }),

/***/ "knockout":
/*!********************************************************************************************!*\
  !*** external {"root":"ko","commonjs2":"knockout","commonjs":"knockout","amd":"knockout"} ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./sources/knockout/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2FjdGlvbnMuc2Nzcz9hOWQxIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2Ryb3Bkb3duLWFjdGlvbnMuc2Nzcz9iM2Q3Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9ib29sLnNjc3M/YWYzNSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY2VsbC1lZGl0b3Iuc2Nzcz8xMDVhIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jb2x1bW4tZmlsdGVyLnNjc3M/NzkyMCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvZmlsdGVyLWRlZmF1bHQuc2NzcyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvZmlsdGVyLXNlbGVjdC5zY3NzP2ZkZmUiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2luZGV4LnNjc3M/YWExMiIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvc2VhcmNoLnNjc3M/MmJlZSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvc3VtbWFyeS5zY3NzPzIzMDkiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2Jvb2wtY2VsbC1lZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvYm9vbC1jZWxsLXZpZXdlci5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jZWxsLWVkaXRvci5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jZWxsLXZpZXdlci5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jZWxsLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbS5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jb2x1bW4tZmlsdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2ZpbHRlci1kZWZhdWx0Lmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2ZpbHRlci1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvc2VhcmNoLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL3N1bW1hcnkuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9hY3Rpb24uaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9hY3Rpb25zLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvZHJvcGRvd24tYWN0aW9ucy5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2ljb24uaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9hcnJvdy1kb3duLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9hcnJvdy1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fY2hlY2suc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2Nyb3NzLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9lZGl0LnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9lcXVhbC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fZmlsdGVyLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9pdGVtLWFkZC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25faXRlbS1kZWxldGUuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2l0ZW0tc2F2ZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fbW9yZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fbW9yZV9zcS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fcGFzdGUuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fc29ydC1kb3duLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9zb3J0LXVwLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl90YWJsZS1tZXJnZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvYWN0aW9uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvYmFzZS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9kZXBlbmRlbmNpZXMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvZHJvcGRvd24tYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9wcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvZmluZC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L2luZGV4LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9ib29sLWNlbGwtZWRpdG9yLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9ib29sLWNlbGwtdmlld2VyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jZWxsLWVkaXRvci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC12aWV3ZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NlbGwudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY29sdW1uLWZpbHRlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvZmlsdGVyLWRlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2ZpbHRlci1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvc3VtbWFyeS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9kcm9wZG93bi1hY3Rpb25zLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2ljb24udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2xvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvYm9vbC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY2VsbC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NlbGwudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY29sdW1uLWZpbHRlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY29sdW1uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9maWx0ZXItZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvZmlsdGVyLXNlbGVjdC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL251bWJlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvcm93LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3N1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3V0aWxzL2FycmF5LWRhdGEtcHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3V0aWxzL3JlbW90ZS1kYXRhLXByb3ZpZGVyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifSIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlRhYmxlNEpTXCIsIFtcImtub2Nrb3V0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRhYmxlNEpTXCJdID0gZmFjdG9yeShyZXF1aXJlKFwia25vY2tvdXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRhYmxlNEpTXCJdID0gZmFjdG9yeShyb290W1wia29cIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykgPT4ge1xucmV0dXJuICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX2Jvb2wtY2VsbC1lZGl0b3JcXFwiPlxcbiAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IHZhbHVlLCBldmVudDogeyBjaGFuZ2U6IGZ1bmN0aW9uKF8sIGUpIHsgJGRhdGEudmFsdWUgPSBlLnRhcmdldC5jaGVja2VkOyAkZGF0YS5jb21wbGV0ZSh0cnVlKTsgfSB9XFxcIlxcbiAgLz5cXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzcGFuIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fYm9vbC1jZWxsLXZpZXdlclxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IGNsYXNzTmFtZVxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fYm9vbC1jZWxsLXZpZXdlci1jaXJjbGVcXFwiXFxuICAgIGRhdGEtYmluZD1cXFwic3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBjZWxsLmRhdGEgPyAnZ3JlZW4nIDogJ3JlZCcgfVxcXCIgXFxuICAgID48L3NwYW4+XFxuPC9zcGFuPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX2NlbGwtZWRpdG9yXFxcIj5cXG4gIDxpbnB1dCBkYXRhLWJpbmQ9XFxcInZhbHVlOiB2YWx1ZSwgZXZlbnQ6IHsga2V5dXA6IGZ1bmN0aW9uKF8sIGUpIHsgJGRhdGEucHJvY2Vzc0tleVVwKGUpOyB9IH1cXFwiIC8+XFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3BhbiBkYXRhLWJpbmQ9XFxcImh0bWw6IGNlbGwudGV4dCwgY3NzOiBjbGFzc05hbWVcXFwiPjwvc3Bhbj5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjx0ZCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtY2VsbFxcXCIgZGF0YS1iaW5kPVxcXCJhdHRyOiB7cm93c3BhbjogdGFibGUuaXNNZXJnZWTQoWVsbHMgPyBjZWxsLmNvdW50IDogMX0sXFxuICBjc3M6IChjZWxsLmNvdW50ID4gMSkgJiYgdGFibGUuaXNNZXJnZWTQoWVsbHMgPyAndGFibGU0anMtdGFibGUtY2VsbC0tbWVyZ2VkICcgOiAnJyxcXG4gIHZpc2libGU6IChjZWxsLmNvdW50ID4gMCkgfHwgIXRhYmxlLmlzTWVyZ2Vk0KFlbGxzLFxcbiAgc3R5bGU6IHsnYmFja2dyb3VuZC1jb2xvcic6IGNlbGwuY29sb3J9IFxcXCI+XFxuICA8IS0tIGtvIGlmbm90OiAoY2VsbC5pbnBsYWNlRWRpdG9yICYmIHRhYmxlLmNvbmZpZy5lbmFibGVFZGl0KSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtY2VsbF9fY29udGFpbmVyXFxcIiBkYXRhLWJpbmQ9XFxcImNzczogY29udGFpbmVyQ3NzLCBzdHlsZToge3RvcDogaXNNZXJnZWRDZWxsKCkgPyB0YWJsZS50YWJsZUhlYWRIZWlnaHQgLSAyICsgJ3B4JyA6IHVuZGVmaW5lZH0sIGNsaWNrOiBzdGFydEVkaXRcXFwiPlxcbiAgICAgIDwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6IGNlbGwudmlld2VyLCBwYXJhbXM6IHsgY2VsbDogY2VsbCwgY2xhc3NOYW1lOiBjb250ZW50Q3NzIH0gfSAtLT5cXG4gICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC9kaXY+XFxuICA8IS0tIC9rbyAtLT5cXG4gIDwhLS0ga28gaWY6IChjZWxsLmlucGxhY2VFZGl0b3IgJiYgdGFibGUuY29uZmlnLmVuYWJsZUVkaXQpIC0tPlxcbiAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiBjZWxsLmVkaXRvciwgcGFyYW1zOiB7IG1vZGVsOiBjZWxsLmlucGxhY2VFZGl0b3IgfSB9IC0tPlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gIDwhLS0gL2tvIC0tPlxcbjwvdGQ+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c2VsZWN0IGNsYXNzPVxcXCJ0YWJsZTRqcy1maWx0ZXJfX19vcGVyYXRpb25cXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczogb3BlcmF0aW9ucywgdmFsdWU6IG9wZXJhdGlvbiwgb3B0aW9uc1RleHQ6ICd0ZXh0J1xcXCI+PC9zZWxlY3Q+XFxuPCEtLSBrbyBpZjogc2hvd09wZXJhbmQgLS0+XFxuICA8IS0tIGtvIGlmOiBvcGVyYXRpb24ub3AgPT0gXFxcIkVRXFxcIiAtLT5cXG4gIDx0YWJsZTRqcy1maWx0ZXItc2VsZWN0IGNsYXNzPVxcXCJhYnJzLWZpbHRlcl9fdmFsdWVcXFwiXFxuICAgIHBhcmFtcz1cXFwidmFsdWU6IGZpbHRlckl0ZW1WYWx1ZSwgY29sdW1uTmFtZTogY29sdW1uLm5hbWUsIGNvbHVtblR5cGU6IGNvbHVtbi50eXBlLCBnZXRDb2x1bW5EYXRhOiBnZXRDb2x1bW5EYXRhXFxcIj5cXG4gIDwvdGFibGU0anMtZmlsdGVyLXNlbGVjdD5cXG4gIDwhLS0gL2tvIC0tPlxcbiAgPCEtLSBrbyBpZjogb3BlcmF0aW9uLm9wICE9IFxcXCJFUVxcXCIgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1maWx0ZXJfX29wZXJhbmRcXFwiIGRhdGEtYmluZD1cXFwiY29tcG9uZW50OiB7IG5hbWU6IGZpbHRlckVkaXRvck5hbWUsIHBhcmFtczogeyB2YWx1ZTogZmlsdGVySXRlbVZhbHVlLCBjb2x1bW46IGNvbHVtbiB9IH1cXFwiPlxcbiAgPC9kaXY+XFxuICA8IS0tIC9rbyAtLT5cXG48IS0tIC9rbyAtLT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjwhLS0ga28gaWY6IGZpbHRlckl0ZW1zLmxlbmd0aCA+IDAgLS0+XFxuPGRpdiBjbGFzcz1cXFwidGFibGU0anMtZmlsdGVyLWl0ZW1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtZmlsdGVyX190aXRsZSB0YWJsZTRqcy1maWx0ZXItdGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBjb2x1bW4udGl0bGUgKyAnOidcXFwiPjwvZGl2PlxcbiAgPCEtLSBrbyBmb3JlYWNoOiBmaWx0ZXJJdGVtcyAtLT5cXG4gICAgPCEtLSBrbyBpZjogJGluZGV4KCkgPiAwIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1maWx0ZXJfX29wZXJhdG9yIHRhYmxlNGpzLWZpbHRlci10ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICcmJ1xcXCI+PC9kaXY+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiAndGFibGU0anMtY29sdW1uLWZpbHRlci1pdGVtJywgcGFyYW1zOiB7IGZpbHRlckl0ZW06ICRkYXRhIH0gfSAtLT5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLWZpbHRlcl9fcmVtb3ZlXFxcIlxcbiAgICAgIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQucmVtb3ZlSXRlbSwgY2xpY2tCdWJibGU6IGZhbHNlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1maWx0ZXJfX3JlbW92ZS1pY29uIHRhYmxlNGpzLXN2Zy1pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLmNyb3NzXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8IS0tIC9rbyAtLT5cXG48L2Rpdj5cXG48IS0tIC9rbyAtLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxpbnB1dCBzdHlsZT1cXFwid2lkdGg6IDEwMCU7XFxcIiBwbGFjZWhvbGRlcj1cXFwiKlxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogdmFsdWUudmFsdWVcXFwiIC8+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWxlY3Qtc2VsZWN0aW9uXFxcIj5cXG4gICAgPCEtLSBrbyBmb3JlYWNoOiBzZWxlY3RlZEl0ZW1zIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW1cXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdC1pdGVtLXRpdGxlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXN2Zy1pY29uIHRhYmxlNGpzLXNlbGVjdC1pdGVtLWNsb3NlXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmRlbGV0ZUl0ZW1zLCBodG1sOiAkcm9vdC5pY29ucy5jcm9zc1xcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWxlY3QtYnV0dG9uIHRhYmxlNGpzLXN2Zy1pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiB0b2dnbGUsIGF0dHI6IHsgdGl0bGU6IHRpdGxlIH0sIGh0bWw6ICRyb290Lmljb25zLmFycm93ZG93blxcXCI+PC9kaXY+XFxuPCEtLSBrbyBpZjogaXNPcGVuIC0tPlxcbjx1bCBjbGFzcz1cXFwidGFibGU0anMtc2VsZWN0X19kcm9wZG93bi1tZW51IHRhYmxlNGpzLWJ1dHRvbi10b2dnbGVfX2Ryb3Bkb3duLW1lbnVcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGZ1bmN0aW9uKF8sIGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfVxcXCI+XFxuICAgIDwhLS0ga28gaWY6IGlzRmlsdGVyU2VhcmNoQnlUeXBlIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWxlY3RfX2Ryb3Bkb3duLXNlYXJjaC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWxlY3RfX2Ryb3Bkb3duLXNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcIipcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGZpbHRlclRleHQsIHZhbHVlVXBkYXRlOiAnYWZ0ZXJrZXlkb3duJ1xcXCIgLz5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGZvdW5kSXRlbXMgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdF9fZHJvcGRvd24taXRlbVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5jbGlja0l0ZW1cXFwiPlxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWxlY3RfX2Ryb3Bkb3duLWhpZGUtY2hlY2tcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6ICRwYXJlbnQuaXNDaGVja2VkKCRkYXRhKVxcXCIgLz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXN2Zy1pY29uIHRhYmxlNGpzLXNlbGVjdF9fZHJvcGRvd24tY2hlY2tcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuY2hlY2tcXFwiPjwvZGl2PlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdF9fZHJvcGRvd24tbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0ga28gaWY6IGlzTG9hZE1vcmUgLS0+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdF9fZHJvcGRvd24tYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBsb2FkTW9yZVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFibGU0anMtYWN0aW9uLWJ1dHRvbl9fbGFiZWxcXFwiPk1vcmU8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L3VsPlxcbjwhLS0gL2tvIC0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtcmVzaXphYmxlLWNvbnRhaW5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1zY3JvbGwtY29udGFpbmVyXFxcIj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZVxcXCI+XFxuICAgICAgPHRoZWFkIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9faGVhZGVyIHRhYmxlNGpzLXRhYmxlLXN0aWNreS1jb21wb25lbnRcXFwiPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1oZWFkZXItdG9vbHNcXFwiPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWhlYWRlci10b29sc19fY2VsbFxcXCIgY29sc3Bhbj1cXFwiMTAwJVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtaGVhZGVyLXRvb2xzX19jb250YWluZXIgdGFibGU0anMtdGFibGUtZ3JvdXAtaGVhZGVyLXRlY2huaWNhbC1jZWxsXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXByZWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXNlYXJjaC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogc2hvd1NlYXJjaCAtLT5cXG4gICAgICAgICAgICAgICAgICA8dGFibGU0anMtc2VhcmNoIHBhcmFtcz1cXFwibW9kZWw6IHNlYXJjaE1vZGVsXFxcIj48L3RhYmxlNGpzLXNlYXJjaD5cXG4gICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICA8dGFibGU0anMtYWN0aW9ucyBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtYWN0aW9uc1xcXCIgcGFyYW1zPVxcXCJtb2RlbDogJGRhdGEsIG9wdGlvbnM6IHsgYWN0aW9uOiAndG9wQWN0aW9ucycgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPC90YWJsZTRqcy1hY3Rpb25zPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6ICRkYXRhLmdldEFjdGlvbnMoJ2Ryb3Bkb3duQWN0aW9ucycpLmxlbmd0aCA+IDAgLS0+XFxuICAgICAgICAgICAgICAgICAgPHRhYmxlNGpzLWRyb3Bkb3duLWFjdGlvbnMgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWRyb3Bkb3duIHRhYmxlNGpzLXRhYmxlLWFjdGlvbnMtbWVudVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cXFwiZGF0YTogJGRhdGEsIGFjdGlvbnM6ICdkcm9wZG93bkFjdGlvbnMnXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlNGpzLWRyb3Bkb3duLWFjdGlvbnM+XFxuICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIGtvIGlmOiB2aWV3RmlsdGVyVGFibGUgLS0+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1maWx0ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1maWx0ZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBjb2x1bW5zIC0tPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6ICd0YWJsZTRqcy1jb2x1bW4tZmlsdGVyJywgcGFyYW1zOiB7IGNvbnRleHQ6IGZpbHRlckNvbnRleHQgfSB9IC0tPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1oZWFkZXItdGl0bGVcXFwiPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWhlYWRlci10aXRsZV9fY2VsbCB0YWJsZTRqcy10YWJsZS1zd2l0Y2hcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXN3aXRjaF9fdGV4dFxcXCJcXG4gICAgICAgICAgICAgIGRhdGEtYmluZD1cXFwiY3NzOiB7J3N3aXRjaF9fdGV4dC0tc2VsZWN0ZWQnOiBpc051bWJlcn0sIGNsaWNrOiAoKSA9PiAkZGF0YS5pc051bWJlciA9ICEkZGF0YS5pc051bWJlclxcXCI+I1xcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGNvbHVtbnMgLS0+XFxuICAgICAgICAgIDwhLS0ga28gaWY6IHZpc2libGUgLS0+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtaGVhZGVyLXRpdGxlX19jZWxsXFxcIlxcbiAgICAgICAgICAgIGRhdGEtYmluZD1cXFwiZXZlbnQ6IHttb3VzZW91dDogJHBhcmVudC5sb2dNb3VzZU91dCwgbW91c2Vtb3ZlOiAkcGFyZW50LmxvZ01vdXNlTW92ZSwgbW91c2V1cDogJHBhcmVudC5sb2dNb3VzZVVwfVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXRpdGxlX190ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6IHRpdGxlLCBjbGljazogJHBhcmVudC5jbGlja0NvbHVtblxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtdGl0bGVfX3Rvb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtdGl0bGVfX3NvcnRlclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBvcmRlciA9PT0gZmFsc2UsIGh0bWw6ICRyb290Lmljb25zLnNvcnR1cFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXN2Zy1pY29uIHRhYmxlNGpzLXRhYmxlLXRpdGxlX19zb3J0ZXJcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogb3JkZXIgPT09IHRydWUsIGh0bWw6ICRyb290Lmljb25zLnNvcnRkb3duXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtdGl0bGVfX2ZpbHRlclxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogY2xpY2tGaWx0ZXIsIGh0bWw6ICRyb290Lmljb25zLmZpbHRlclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS10aXRsZV9yZXNpemVcXFwiXFxuICAgICAgICAgICAgICBkYXRhLWJpbmQ9XFxcImV2ZW50OiB7bW91c2VvdmVyOiAkcGFyZW50LmxvZ01vdXNlT3ZlciwgbW91c2VvdXQ6ICRwYXJlbnQubG9nTW91c2VPdXQsIG1vdXNlbW92ZTogJHBhcmVudC5sb2dNb3VzZU1vdmUsIG1vdXNldXA6ICRwYXJlbnQubG9nTW91c2VVcCwgbW91c2Vkb3duOiAkcGFyZW50LmxvZ01vdXNlRG93bn1cXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtaGVhZGVyLXRpdGxlX19jZWxsXFxcIj48L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgICA8L3RoZWFkPlxcbiAgICAgIDx0Ym9keSBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX2JvZHlcXFwiPlxcbiAgICAgICAgPCEtLSBrbyBpZjogcm93cy5sZW5ndGggPT0gMCAmJiBsb2FkaW5nTXV0ZXggPT0gZmFsc2UgIC0tPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fcm93XFxcIj5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsXFxcIiBjb2xzcGFuPVxcXCIxMDAlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5vRGF0YVRleHRcXFwiPjwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIGtvIGlmOiBsb2FkaW5nTXV0ZXggLS0+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGNvbHVtbnMgLS0+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlX19yb3dcXFwiPjwvdHI+XFxuICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtY2VsbCB0YWJsZTRqcy10YWJsZS10ZWNobmljYWwtY2VsbFxcXCIgPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX2NoZWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGVfX2ljb24tY2hlY2tcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6ICRwYXJlbnQuY29sdW1ucyAtLT5cXG4gICAgICAgIDwhLS0ga28gaWY6IHZpc2libGUgLS0+XFxuICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtY2VsbCB0YWJsZTRqcy10YWJsZS10ZWNobmljYWwtY2VsbFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtY2VsbF9fY29udGFpbmVyIHRhYmxlNGpzLXRhYmxlLWNlbGxfX2NvbnRhaW5lci0tbG9hZGluZ1xcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsIHRhYmxlNGpzLXRhYmxlLXRlY2huaWNhbC1jZWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtdGVjaG5pY2FsLWNlbGxfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtaWNvbi1yb3ctdG9vbHMgdGFibGU0anMtdGFibGVfX21vcmVcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMubW9yZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtaWNvbi1yb3ctdG9vbHMgdGFibGU0anMtdGFibGVfX2VkaXRcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuZWRpdFxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiB7ZGF0YTogcm93c30gLS0+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlX19yb3dcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7J3RhYmxlNGpzLXRhYmxlX19yb3ctLXNlbGVjdGVkJzogc2VsZWN0ZWR9LCBzdHlsZTogeydiYWNrZ3JvdW5kLWNvbG9yJzogJ25vbmUnIH1cXFwiPlxcbiAgICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWNlbGwgdGFibGU0anMtdGFibGUtdGVjaG5pY2FsLWNlbGxcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHNlbGVjdFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtdGVjaG5pY2FsLWNlbGxfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8IS0tIGtvIGlmOiAkcGFyZW50LmlzTnVtYmVyIC0tPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX251bWJlclxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBudW1iZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICA8IS0tIGtvIGlmOiAhJHBhcmVudC5pc051bWJlciAtLT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlX19jaGVja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXN2Zy1pY29uIHRhYmxlNGpzLXRhYmxlX19pY29uLWNoZWNrXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNlbGVjdGVkLCBodG1sOiAkcm9vdC5pY29ucy5jaGVja1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGNlbGxzIC0tPlxcbiAgICAgICAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiAndGFibGU0anMtdGFibGUtY2VsbCcsIHBhcmFtczogeyBjZWxsOiAkZGF0YSwgdGFibGU6ICRwYXJlbnRzWzFdIH0gfSAtLT5cXG4gICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWNlbGwgdGFibGU0anMtdGFibGUtdGVjaG5pY2FsLWNlbGxcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGNsaWNrXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXN2Zy1pY29uIHRhYmxlNGpzLXRhYmxlLWljb24tcm93LXRvb2xzIHRhYmxlNGpzLXRhYmxlX19tb3JlXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLm1vcmVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtaWNvbi1yb3ctdG9vbHMgdGFibGU0anMtdGFibGVfX2VkaXRcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuZWRpdFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX3Jvdy0tc2VsZWN0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICEkcGFyZW50Lmhhc0FjdGl2ZUlucGxhY2VFZGl0b3JcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlX19yb3ctLWNvbG9yZWRcXFwiIGRhdGEtYmluZD1cXFwic3R5bGU6IHsgJ2JhY2tncm91bmQnOiBjb2xvciA/IGNvbG9yIDogJ3JnYmEoMjQ4LDI0OSwyNTMpJyB9XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICA8L3Rib2R5PlxcbiAgICAgIDx0Zm9vdCBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX2Zvb3RlciB0YWJsZTRqcy10YWJsZS1zdGlja3ktY29tcG9uZW50XFxcIj5cXG4gICAgICAgIDx0ciBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtZm9vdGVyLXN1bW1hcnlcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogc2hvd1RhYmxlU3VtbWFyeVxcXCI+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtY2VsbCB0YWJsZTRqcy10YWJsZS10ZWNobmljYWwtY2VsbCB0YWJsZTRqcy10YWJsZS1mb290ZXJfX2NlbGxcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtaWNvbi1lcXVhbFxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5lcXVhbFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogY29sdW1ucyAtLT5cXG4gICAgICAgICAgPCEtLSBrbyBpZjogdmlzaWJsZSAtLT5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsIHRhYmxlNGpzLXRhYmxlLWZvb3Rlcl9fY2VsbFxcXCI+XFxuICAgICAgICAgICAgPHRhYmxlNGpzLXRhYmxlLXN1bW1hcnkgcGFyYW1zPSdjb2x1bW46ICRkYXRhJz48L3RhYmxlNGpzLXRhYmxlLXN1bW1hcnk+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsIHRhYmxlNGpzLXRhYmxlLXRlY2huaWNhbC1jZWxsIHRhYmxlNGpzLXRhYmxlLWZvb3Rlcl9fY2VsbFxcXCI+PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWZvb3Rlci10b29sc1xcXCI+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtZm9vdGVyLXRvb2xzX19jZWxsXFxcIiBjb2xzcGFuPVxcXCIxMDAlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1mb290ZXItdG9vbHNfX2NvbnRhaW5lciB0YWJsZTRqcy10YWJsZS1ncm91cC1oZWFkZXItdGVjaG5pY2FsLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtcm93LW1hbmFnZW1lbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGFibGU0anMtYWN0aW9ucyBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtYWN0aW9uc1xcXCIgcGFyYW1zPVxcXCJtb2RlbDogJGRhdGEsIG9wdGlvbnM6IHsgYWN0aW9uOiAnYm90dG9tQWN0aW9ucycgfVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvdGFibGU0anMtYWN0aW9ucz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1pbmZvX190b3RhbCB0YWJsZTRqcy10YWJsZS1pbmZvX190ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cXFwidGV4dDogJ1RvdGFsOiAnICsgdG90YWxDb3VudFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1pbmZvX19nby10b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWdvLXRvX190ZXh0IHRhYmxlNGpzLXRhYmxlLWluZm9fX3RleHRcXFwiPkdvIHRvOiA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1nby10b19fdmFsdWVcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IHN0YXJ0Um93XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidGFibGU0anMtYnRuLXRyYW5zcGFyZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXN2Zy1pY29uIHRhYmxlNGpzLXRhYmxlLWdvLXRvX19pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLmFycm93cmlnaHRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgICA8L3Rmb290PlxcbiAgICA8L3RhYmxlPlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWFyY2hcXFwiPlxcbiAgPGlucHV0IGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWFyY2hfX3ZhbHVlXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiB2YWx1ZSwgYXR0cjogeyBwbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicgfVxcXCIgLz5cXG4gIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXNlYXJjaF9fYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiByZWZyZXNoLCBhdHRyOiB7IHRpdGxlOiAnU2VhcmNoJyB9XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtc2VhcmNoX19pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLnNlYXJjaFxcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzcGFuIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1zdW1tYXJ5X192YWx1ZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB2YWx1ZVxcXCI+PC9zcGFuPlxcbjxzZWxlY3QgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXN1bW1hcnlfX3NlbGVjdFxcXCIgIGRhdGEtYmluZD1cXFwidmFsdWU6IGZ1bmNcXFwiPlxcbiAgPCEtLSBrbyBmb3JlYWNoOiBzdW1tYXJ5SXRlbXMgLS0+XFxuICAgIDxvcHRpb24gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZSwgdmFsdWU6IHZhbHVlLCBhdHRyOiB7dGl0bGU6IHRpdGxlfVxcXCI+PC9vcHRpb24+XFxuICA8IS0tIC9rbyAtLT4gIFxcbjwvc2VsZWN0PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkZGF0YS5mb3JtSWQgIT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFjdGlvbiwgXFxuICAgICAgICAgICAgICAgIHZpc2libGU6ICEkZGF0YS52aXNpYmxlIHx8IGtvLnVud3JhcCh2aXNpYmxlKSxcXG4gICAgICAgICAgICAgICAgZW5hYmxlOiAhJGRhdGEuZW5hYmxlZCB8fCBrby51bndyYXAoZW5hYmxlZCksXFxuICAgICAgICAgICAgICAgIGF0dHI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3RhYmxlNGpzLWJ1dHRvbi0tdHJhbnNwYXJlbnQgYWN0aW9uLWJ1dHRvbiB0YWJsZTRqcy1hY3Rpb24tYnV0dG9uICcgKyBrby51bndyYXAoJGRhdGEuY3NzQ2xhc3NlcykgKyAoa28udW53cmFwKCRkYXRhLmFjdGl2ZSkgPT09IHRydWUgPyAnIHRhYmxlNGpzLWFjdGlvbi0tYWN0aXZlJyA6ICcnKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJGRhdGEudGl0bGUgfHwgJGRhdGEubmFtZSwgZm9ybTogJGRhdGEuZm9ybUlkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICRkYXRhLmZvcm1JZCAhPT0gdW5kZWZpbmVkID8gJ3N1Ym1pdCcgOiAnYnV0dG9uJ1xcbiAgICAgICAgICAgICAgICAgICAgfVxcXCI+XFxuICAgIDwhLS0ga28gaWY6ICRkYXRhLmljb24gLS0+XFxuICAgIDwhLS0gPHNwYW4gZGF0YS1iaW5kPVxcXCJjc3M6ICgnZmEgaWNvbiAnICsgKHR5cGVvZiBpY29uID09ICdmdW5jdGlvbicgPyBpY29uKCkgOiBpY29uKSlcXFwiPjwvc3Bhbj4gLS0+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIGtvIGlmOiAkZGF0YS5zdmcgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLWFjdGlvbi1idXR0b25fX2ljb24gdGFibGU0anMtYnV0dG9uX19zdmctaWNvblxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiBzdmdcXFwiPjwvZGl2PlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gICAgPCEtLSBrbyBpZm5vdDogJHBhcmVudHNbMV0uc2hvcnQgLS0+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZTRqcy1hY3Rpb24tYnV0dG9uX19sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkZGF0YS50aXRsZSwgY3NzOiBrby51bndyYXAoJGRhdGEuY3NzTGFiZWwpLCBzdHlsZTogeydkaXNwbGF5JyA6ICRkYXRhLnRpdGxlID8gJ2Jsb2NrJyA6ICdub25lJ31cXFwiID48L3NwYW4+XFxuICAgIDwhLS0gL2tvIC0tPlxcbjwvYnV0dG9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLSBrbyBmb3JlYWNoOiBhY3Rpb25zIC0tPlxcbjwhLS0ga28gaWZub3Q6IGtvLnVud3JhcCgkZGF0YS5hY3Rpb25zKSAtLT5cXG48IS0tIGtvIGlmOiAhJGRhdGEuZ3JvdXBOYW1lICYmICEkcGFyZW50Lmdyb3VwTmFtZSB8fCAkZGF0YS5ncm91cE5hbWUgPT0gJHBhcmVudC5ncm91cE5hbWUgIC0tPlxcbjwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6ICd0YWJsZTRqcy1hY3Rpb24taXRlbScsIHBhcmFtczogJGRhdGEgfSAtLT5cXG48IS0tIC9rbyAtLT5cXG48IS0tIC9rbyAtLT5cXG48IS0tIC9rbyAtLT5cXG48IS0tIGtvIGlmOiBrby51bndyYXAoJGRhdGEuYWN0aW9ucykgJiYga28udW53cmFwKCRkYXRhLmFjdGlvbnMpLmxlbmd0aCA+IDAgLS0+XFxuPCEtLSBrbyBpZjogISRkYXRhLmdyb3VwTmFtZSAmJiAhJHBhcmVudC5ncm91cE5hbWUgfHwgJGRhdGEuZ3JvdXBOYW1lID09ICRwYXJlbnQuZ3JvdXBOYW1lICAtLT5cXG48ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1uZXN0ZWQtYWN0aW9ucyB0YWJsZTRqcy1hY3Rpb24tY29udGV4dC1idXR0b25cXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidGFibGU0anMtYnV0dG9uX19sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9zcGFuPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1uZXN0ZWQtYWN0aW9uc19fZHJvcGRvd25cXFwiPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhY3Rpb25zIC0tPlxcbiAgICAgICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogJ3RhYmxlNGpzLWFjdGlvbi1pdGVtJywgcGFyYW1zOiAkZGF0YSB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPCEtLSAva28gLS0+XFxuPCEtLSAva28gLS0+XFxuPCEtLSAva28gLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGNsYXNzPVxcXCJ0YWJsZTRqcy1hY3Rpb24tYnV0dG9uIHRhYmxlNGpzLWJ1dHRvbi0tdHJhbnNwYXJlbnQgdGFibGU0anMtYnV0dG9uLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcbiAgICBkYXRhLWJpbmQ9XFxcImNsaWNrOiB0b2dnbGUsIGF0dHI6IHsgdGl0bGU6IHRpdGxlIH1cXFwiPlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMubW9yZV9zcVxcXCI+PC9kaXY+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZTRqcy1hY3Rpb24tYnV0dG9uX19sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBtb3JlVGV4dFxcXCI+PC9zcGFuPlxcbjwvYnV0dG9uPlxcbjwhLS0ga28gaWY6IGlzT3BlbiAtLT5cXG48dWwgY2xhc3M9XFxcInRhYmxlNGpzLWJ1dHRvbi10b2dnbGVfX2Ryb3Bkb3duLW1lbnVcXFwiPlxcbiAgICA8dGFibGU0anMtYWN0aW9ucyBjbGFzcz1cXFwidGFibGU0anMtY29udGV4dC1hY3Rpb25zXFxcIiBwYXJhbXM9XFxcIm1vZGVsOiBkYXRhLCBvcHRpb25zOiB7IGFjdGlvbjogYWN0aW9ucyB9XFxcIj5cXG4gICAgPC90YWJsZTRqcy1hY3Rpb25zPlxcbjwvdWw+XFxuPCEtLSAva28gLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tIDxzdmcgY2xhc3M9XFxcInRhYmxlNGpzLWJ1dHRvbl9fc3ZnLWljb25cXFwiPjx1c2UgZGF0YS1iaW5kPVxcXCJhdHRyOnsneGxpbms6aHJlZic6J3Nwcml0ZW1hcC5zdmcjc3ByaXRlLWljb25fJytrby51bndyYXAoaWQpfVxcXCIgIHhsaW5rOmhyZWY9Jyc+PC91c2U+PC9zdmc+IC0tPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMyA4LjQzNmExLjUgMS41IDAgMCAxIDIuMTIxLjAwNmw5LjI2NSA5LjMxNGEuODY1Ljg2NSAwIDAgMCAxLjIyOCAwbDkuMjY1LTkuMzE0YTEuNSAxLjUgMCAwIDEgMi4xMjEtLjAwNiAxLjUgMS41IDAgMCAxIC4wMDYgMi4xMjFsLTEwLjk0MyAxMWExLjUgMS41IDAgMCAxLTIuMTI2IDBsLTEwLjk0My0xMWExLjUgMS41IDAgMCAxIC4wMDYtMi4xMjF6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTguOTY4IDI3YTEuNSAxLjUgMCAwIDEgLjAwNS0yLjEyMWw5LjMxNS05LjI2NWEuODY3Ljg2NyAwIDAgMCAwLTEuMjI4bC05LjMxNS05LjI2NWExLjUgMS41IDAgMCAxLS4wMDUtMi4xMjEgMS41IDEuNSAwIDAgMSAyLjEyMS0uMDA2bDExIDEwLjk0M2ExLjUgMS41IDAgMCAxIDAgMi4xMjZsLTExIDEwLjk0M2ExLjUgMS41IDAgMCAxLTIuMTIxLS4wMDZ6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTI2IDhhMS41IDEuNSAwIDAgMC0yLjEyMSAwbC0xMS4yNjQgMTEuMjY0YS44NjkuODY5IDAgMCAxLTEuMjMgMGwtNS4yNjQtNS4yNjRhMS41IDEuNSAwIDAgMC0yLjEyMSAyLjEyMWw2LjkzOSA2Ljk0YTEuNSAxLjUgMCAwIDAgMi4xMjIgMGwxMi45MzktMTIuOTRhMS41IDEuNSAwIDAgMCAwLTIuMTIxelxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xNy43MTUgMTVsMTAuNzIzLTEwLjcyM2ExLjkyMSAxLjkyMSAwIDAgMCAwLTIuNzE1IDEuOTIxIDEuOTIxIDAgMCAwLTIuNzE1IDBsLTEwLjcyMyAxMC43MjMtMTAuNzIzLTEwLjcyM2ExLjkyIDEuOTIgMCAwIDAtMi43MTUgMi43MTVsMTAuNzIzIDEwLjcyMy0xMC43MjMgMTAuNzIzYTEuOTIgMS45MiAwIDEgMCAyLjcxNSAyLjcxNWwxMC43MjMtMTAuNzIzIDEwLjcyMyAxMC43MjNhMS45MiAxLjkyIDAgMSAwIDIuNzE1LTIuNzE1elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yMS41NzMgMjloLTE3LjM5NmEzLjE3OCAzLjE3OCAwIDAgMS0zLjE3Ny0zLjE3N3YtMTcuMTQ2YTMuMTc4IDMuMTc4IDAgMCAxIDMuMTc3LTMuMTc3aDcuMmExLjUgMS41IDAgMCAxIDEuNSAxLjUgMS41IDEuNSAwIDAgMS0xLjUgMS41aC03LjJhLjE3OC4xNzggMCAwIDAtLjE3Ny4xNzd2MTcuMTQ2YS4xNzguMTc4IDAgMCAwIC4xNzcuMTc3aDE3LjRhLjE3OC4xNzggMCAwIDAgLjE3OC0uMTc4di03LjA3MmExLjUgMS41IDAgMCAxIDEuNS0xLjUgMS41IDEuNSAwIDAgMSAxLjUgMS41djcuMDczYTMuMTc4IDMuMTc4IDAgMCAxLTMuMTgyIDMuMTc3ek04LjE4MSAyMS4yODNsLjYxOS0zLjQ3M2EuNDU0LjQ1NCAwIDAgMSAuNzY4LS4yNDFsMi44NTMgMi44NTNhLjQ1My40NTMgMCAwIDEtLjI0Mi43NjdsLTMuNDcyLjYyMWEuNDU0LjQ1NCAwIDAgMS0uNTI2LS41Mjd6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiMTUuNDA1XFxcIiB5PVxcXCIzLjU4NVxcXCIgd2lkdGg9XFxcIjVcXFwiIGhlaWdodD1cXFwiMTdcXFwiIHJ4PVxcXCIuNDhcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDEzLjc5IC05LjEyMSkgcm90YXRlKDQ1KVxcXCI+PC9yZWN0PjxwYXRoIGQ9XFxcIk0yNC45IDIuNTMxaDIuMjQxYTEuMzc5IDEuMzc5IDAgMCAxIDEuMzc1IDEuMzc5di45MTlhLjU4OS41ODkgMCAwIDEtLjU4OS41ODloLTMuODI3YS41ODkuNTg5IDAgMCAxLS41ODktLjU4OXYtLjkxOWExLjM3OSAxLjM3OSAwIDAgMSAxLjM4OS0xLjM3OXpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDEwLjQzIC0xNy4yMzIpIHJvdGF0ZSg0NSlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAzMGwzMC0zMFxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yNi4zLDcuNTMxQTEuODgzLDEuODgzLDAsMCwwLDI4LjE4LDUuNjQ5VjEuODgzQTEuODgzLDEuODgzLDAsMCwwLDI2LjMsMEgzLjdBMS44ODMsMS44ODMsMCwwLDAsMS44MiwxLjg4M2ExLjg2MiwxLjg2MiwwLDAsMCwuMTM5LjdsMCwuMDExYTEuODg3LDEuODg3LDAsMCwwLC40MTEuNjJoMEwxNC4xNTcsMTUsMi4zODcsMjYuNzdsMCwuMDA2QTEuODgyLDEuODgyLDAsMCwwLDMuNywzMEgyNi4zYTEuODgzLDEuODgzLDAsMCwwLDEuODgzLTEuODgzVjI0LjM1MWExLjg4MywxLjg4MywwLDAsMC0zLjc2NiwwdjEuODgzSDguMjQ5bDkuOS05LjlhMS44ODEsMS44ODEsMCwwLDAsMC0yLjY2MmwtLjAwOC0uMDA2LDAtLjAwOEw4LjI0OSwzLjc2NkgyNC40MTRWNS42NDlBMS44ODMsMS44ODMsMCwwLDAsMjYuMyw3LjUzMVpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTMuMDYgMjkuMTg4YTIuMDIgMi4wMiAwIDAgMS0xLjEyLS4zMzMgMi4xMjYgMi4xMjYgMCAwIDEtLjk0LTEuODI2di05LjI3MmEyLjAxNSAyLjAxNSAwIDAgMC0uMjgxLS44MzVsLTkuMzE5LTEyLjI0MWExLjk5NCAxLjk5NCAwIDAgMS0uMjgxLTIuMTE5IDIgMiAwIDAgMSAxLjg1Mi0xLjA2MmgyNC4wNThhMi4wMTQgMi4wMTQgMCAwIDEgMS44NTQgMS4wNDcgMi4wMTMgMi4wMTMgMCAwIDEtLjIyOSAyLjExNmwtOC43NDMgMTIuMjA3YTIuMTkzIDIuMTkzIDAgMCAwLS4yODUuODg3djYuODIyYTMuMSAzLjEgMCAwIDEtMS43OTEgMi43MzRsLTMuODQ2IDEuNjc1YTIuMzIxIDIuMzIxIDAgMCAxLS45MjkuMnptLTguMDMyLTI0LjY4OGw4LjA3NyAxMC42YTQuODcxIDQuODcxIDAgMCAxIC44OTUgMi42NTd2Ny45NTRsMi42MzctMS4xNDktLjAxMS02LjhhNS4wNTggNS4wNTggMCAwIDEgLjg0Ni0yLjYzNGw3LjYwOS0xMC42Mjh6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNyAyN1xcXCI+PGcgaWQ9XFxcItCh0LvQvtC5XzQ0XFxcIiBkYXRhLW5hbWU9XFxcItCh0LvQvtC5IDQ0XFxcIj48cGF0aCBkPVxcXCJNMjMuNjcsMEgzLjMzQTMuMzQsMy4zNCwwLDAsMCwwLDMuMzNWMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDMuMzMsMjdIMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDI3LDIzLjY3VjMuMzNBMy4zNCwzLjM0LDAsMCwwLDIzLjY3LDBaTTI0LDIzLjY3YS4zMy4zMywwLDAsMS0uMzMuMzNIMy4zM0EuMzMuMzMsMCwwLDEsMywyMy42N1YzLjMzQS4zMy4zMywwLDAsMSwzLjMzLDNIMjMuNjdhLjMzLjMzLDAsMCwxLC4zMy4zM1pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTkuODYsMTJIMTVWNy4xNGExLjUxLDEuNTEsMCwxLDAtMywwVjEySDcuMTRhMS41MSwxLjUxLDAsMSwwLDAsM0gxMnY0Ljg1YTEuNTEsMS41MSwwLDEsMCwzLDBWMTVoNC44NWExLjUxLDEuNTEsMCwxLDAsMC0zWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI3IDI3XFxcIj48ZyBpZD1cXFwi0KHQu9C+0LlfNDRcXFwiIGRhdGEtbmFtZT1cXFwi0KHQu9C+0LkgNDRcXFwiPjxwYXRoIGQ9XFxcIk0yMy42NywwSDMuMzNBMy4zNCwzLjM0LDAsMCwwLDAsMy4zM1YyMy42N0EzLjM0LDMuMzQsMCwwLDAsMy4zMywyN0gyMy42N0EzLjM0LDMuMzQsMCwwLDAsMjcsMjMuNjdWMy4zM0EzLjM0LDMuMzQsMCwwLDAsMjMuNjcsMFpNMjQsMjMuNjdhLjMzLjMzLDAsMCwxLS4zMy4zM0gzLjMzQS4zMy4zMywwLDAsMSwzLDIzLjY3VjMuMzNBLjMzLjMzLDAsMCwxLDMuMzMsM0gyMy42N2EuMzMuMzMsMCwwLDEsLjMzLjMzWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMC4yMiw2Ljc4YTEuODQsMS44NCwwLDAsMC0yLjU5LDBMMTMuNSwxMC45Miw5LjM3LDYuNzhBMS44MywxLjgzLDAsMCwwLDYuNzgsOS4zN2w0LjE0LDQuMTNMNi43OCwxNy42M2ExLjgzLDEuODMsMCwwLDAsMi41OSwyLjU5bDQuMTMtNC4xNCw0LjEzLDQuMTRhMS44MywxLjgzLDAsMCwwLDIuNTktMi41OUwxNi4wOCwxMy41bDQuMTQtNC4xM0ExLjg0LDEuODQsMCwwLDAsMjAuMjIsNi43OFpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNyAyN1xcXCI+PGcgaWQ9XFxcItCh0LvQvtC5XzIzXFxcIiBkYXRhLW5hbWU9XFxcItCh0LvQvtC5IDIzXFxcIj48cGF0aCBkPVxcXCJNMjMuNjcsMEgzLjMzQTMuMzQsMy4zNCwwLDAsMCwwLDMuMzNWMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDMuMzMsMjdIMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDI3LDIzLjY3VjMuMzNBMy4zNCwzLjM0LDAsMCwwLDIzLjY3LDBaTTI0LDIzLjY3YS4zMy4zMywwLDAsMS0uMzMuMzNIMy4zM0EuMzMuMzMsMCwwLDEsMywyMy42N1YzLjMzQS4zMy4zMywwLDAsMSwzLjMzLDNIMjMuNjdhLjMzLjMzLDAsMCwxLC4zMy4zM1pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTgsNS4yMUg5QTIuMzIsMi4zMiwwLDAsMCw2LjY1LDcuNTJWMTkuNzNhMi4wOCwyLjA4LDAsMCwwLDIuMDYsMi4wNkEyLjA3LDIuMDcsMCwwLDAsMTAsMjEuMzFsMy40OC0yLjlMMTcsMjEuMzFhMi4wNiwyLjA2LDAsMCwwLDMuMzctMS41OFY3LjUyQTIuMzIsMi4zMiwwLDAsMCwxOCw1LjIxWm0tLjQzLDEzLjA2LTIuOC0yLjMzYTIsMiwwLDAsMC0yLjYyLDBsLTIuOCwyLjMzVjhoOC4yMlpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PGNpcmNsZSBjeD1cXFwiMTVcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNVxcXCIgY3k9XFxcIjE1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNVxcXCIgY3k9XFxcIjI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTAuNSAxMy41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMjUuNSAxMy41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMTAuNSAyOC41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMjUuNSAyOC41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMy4yMDkuNzVIMjAuNjc4YTMuMiwzLjIsMCwwLDEsMy4yMDksMy4xNzdWNS43NWgyLjkzNkEzLjE4LDMuMTgsMCwwLDEsMzAsOC45MjdWMjYuMDczYTMuMTgsMy4xOCwwLDAsMS0zLjE3NywzLjE3N0g5LjMyMmEzLjIsMy4yLDAsMCwxLTMuMjA5LTMuMTc3VjI0LjI1aC0yLjlBMy4yLDMuMiwwLDAsMSwwLDIxLjA3M1YzLjkyN0EzLjIsMy4yLDAsMCwxLDMuMjA5Ljc1Wm0yMy41ODIsMjUuNUEuMi4yLDAsMCwwLDI3LDI2LjA3M1Y4LjkyN2EuMi4yLDAsMCwwLS4yMDktLjE3N0g5LjQyN2EuMTc4LjE3OCwwLDAsMC0uMTc3LjE3N1YyNi4wNzNhLjE3OC4xNzgsMCwwLDAsLjE3Ny4xNzdaTTMsMjEuMDczYS4yLjIsMCwwLDAsLjIwOS4xNzdINi4yNVY4LjkyN0EzLjE4LDMuMTgsMCwwLDEsOS40MjcsNS43NWgxMS40NlYzLjkyN2EuMi4yLDAsMCwwLS4yMDktLjE3N0gzLjIwOUEuMi4yLDAsMCwwLDMsMy45MjdaXFxcIiBzdHlsZT1cXFwiZmlsbDojMDkyYTNhXFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiMTEuNVxcXCIgeT1cXFwiMTAuODIzXFxcIiB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiM1xcXCIgcng9XFxcIjEuNVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMzYgMjQuNjQ1KSByb3RhdGUoLTE4MClcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxMS41XFxcIiB5PVxcXCIxNS44MjNcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIzXFxcIiByeD1cXFwiMS41XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzNiAzNC42NDUpIHJvdGF0ZSgxODApXFxcIiBzdHlsZT1cXFwiZmlsbDojMDkyYTNhXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTEuNVxcXCIgeT1cXFwiMjAuODIzXFxcIiB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiM1xcXCIgcng9XFxcIjEuNVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMzYgNDQuNjQ1KSByb3RhdGUoMTgwKVxcXCI+PC9yZWN0Pjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yOC4yNSAyNS42MjlsLTcuMjgyLTcuMjgyYTEwLjk4NyAxMC45ODcgMCAxIDAtMi4wNDkgMi4xOTNsNy4yMSA3LjIxYTEuNSAxLjUgMCAxIDAgMi4xMjEtMi4xMjF6bS0xNi4yNS01LjYyOWE4IDggMCAxIDEgOC04IDguMDA5IDguMDA5IDAgMCAxLTggOHpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTkuNjgxIDExLjUxOGg0LjkzOHYxLjI4MmgtNi44ODF2LTEuMDQxbDQuNzgtNi45MDZoLTQuNzQ4di0xLjI5NWg2Ljd2MS4wMTV6TTIzLjM0NCAyMi42NDdoLTMuNThsLS43NSAyLjE1M2gtMS42NjlsMy40OTEtOS4yNDJoMS40NDFsMy41IDkuMjQyaC0xLjY3N3ptLTMuMTMtMS4yOTRoMi42NzlsLTEuMzQtMy44MzR6TTE0LjgwNSAxOC42ODlhMS4yNDkgMS4yNDkgMCAwIDAtMS43NjcgMGwtMi4xNTYgMi4xNTZ2LTE2LjAyOWExLjI1IDEuMjUgMCAwIDAtMi41IDB2MTYuMDE4bC0yLjEyLTIuMTJhMS4yNDggMS4yNDggMCAwIDAtMS43NjYgMGwtLjAxMy4wMTNhMS4yNDggMS4yNDggMCAwIDAgMCAxLjc2Nmw0LjI3NiA0LjI3NmExLjI0OSAxLjI0OSAwIDAgMCAxLjc2NSAwbC4wMTMtLjAxM2EuODkzLjg5MyAwIDAgMCAuMDYtLjA5MWw0LjIwOC00LjIwOGExLjI0OSAxLjI0OSAwIDAgMCAwLTEuNzY4elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yMy4zNDQgMTAuNjQ3aC0zLjU4bC0uNzUgMi4xNTNoLTEuNjY5bDMuNDkxLTkuMjQyaDEuNDQxbDMuNSA5LjI0MmgtMS42Nzd6bS0zLjEzLTEuMjk0aDIuNjc5bC0xLjM0LTMuODM0ek0xOS42ODEgMjMuNTE4aDQuOTM4djEuMjgyaC02Ljg4MXYtMS4wNDFsNC43OC02LjkwNmgtNC43NDh2LTEuM2g2Ljd2MS4wMTV6TTE0LjgwNSAxOC42OWExLjI0OSAxLjI0OSAwIDAgMC0xLjc2NyAwbC0yLjE1NiAyLjE1NXYtMTYuMDI5YTEuMjUgMS4yNSAwIDAgMC0yLjUgMHYxNi4wMTlsLTIuMTItMi4xMjFhMS4yNSAxLjI1IDAgMCAwLTEuNzY2IDBsLS4wMTMuMDEzYTEuMjQ4IDEuMjQ4IDAgMCAwIDAgMS43NjZsNC4yNzYgNC4yNzZhMS4yNDkgMS4yNDkgMCAwIDAgMS43NjUgMGwuMDEzLS4wMTNhMSAxIDAgMCAwIC4wNi0uMDlsNC4yMDgtNC4yMDlhMS4yNDggMS4yNDggMCAwIDAgMC0xLjc2N3pcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48ZyBpZD1cXFwiYVxcXCI+PC9nPjxnIGlkPVxcXCJiXFxcIj48L2c+PGcgaWQ9XFxcImNcXFwiPjwvZz48ZyBpZD1cXFwiZFxcXCI+PC9nPjxnIGlkPVxcXCJlXFxcIj48L2c+PGcgaWQ9XFxcImZcXFwiPjwvZz48ZyBpZD1cXFwiZ1xcXCI+PC9nPjxnIGlkPVxcXCJoXFxcIj48L2c+PGcgaWQ9XFxcImlcXFwiPjwvZz48ZyBpZD1cXFwialxcXCI+PC9nPjxnIGlkPVxcXCJrXFxcIj48L2c+PGcgaWQ9XFxcImxcXFwiPjwvZz48ZyBpZD1cXFwibVxcXCI+PC9nPjxnIGlkPVxcXCJuXFxcIj48L2c+PGcgaWQ9XFxcIm9cXFwiPjwvZz48ZyBpZD1cXFwicFxcXCI+PC9nPjxnIGlkPVxcXCJxXFxcIj48L2c+PGcgaWQ9XFxcInJcXFwiPjwvZz48ZyBpZD1cXFwic1xcXCI+PC9nPjxnIGlkPVxcXCJ0XFxcIj48L2c+PGcgaWQ9XFxcInVcXFwiPjwvZz48ZyBpZD1cXFwidlxcXCI+PC9nPjxnIGlkPVxcXCJ3XFxcIj48L2c+PGcgaWQ9XFxcInhcXFwiPjwvZz48ZyBpZD1cXFwieVxcXCI+PC9nPjxnIGlkPVxcXCJhJiN4NjA7XFxcIj48L2c+PGcgaWQ9XFxcImFhXFxcIj48L2c+PGcgaWQ9XFxcImFiXFxcIj48L2c+PGcgaWQ9XFxcImFjXFxcIj48L2c+PGcgaWQ9XFxcImFkXFxcIj48L2c+PGcgaWQ9XFxcImFlXFxcIj48L2c+PGcgaWQ9XFxcImFmXFxcIj48L2c+PGcgaWQ9XFxcImFnXFxcIj48L2c+PGcgaWQ9XFxcImFoXFxcIj48L2c+PGcgaWQ9XFxcImFpXFxcIj48L2c+PGcgaWQ9XFxcImFqXFxcIj48L2c+PGcgaWQ9XFxcImFrXFxcIj48L2c+PGcgaWQ9XFxcImFsXFxcIj48L2c+PGcgaWQ9XFxcImFtXFxcIj48L2c+PGcgaWQ9XFxcImFuXFxcIj48L2c+PGcgaWQ9XFxcImFvXFxcIj48L2c+PGcgaWQ9XFxcImFwXFxcIj48L2c+PGcgaWQ9XFxcImFxXFxcIj48L2c+PGcgaWQ9XFxcImFyXFxcIj48L2c+PGcgaWQ9XFxcImFzXFxcIj48L2c+PGcgaWQ9XFxcImF0XFxcIj48L2c+PGcgaWQ9XFxcImF1XFxcIj48L2c+PGcgaWQ9XFxcImF2XFxcIj48L2c+PGcgaWQ9XFxcImF3XFxcIj48L2c+PGcgaWQ9XFxcImF4XFxcIj48L2c+PGcgaWQ9XFxcImF5XFxcIj48L2c+PGcgaWQ9XFxcImImI3g2MDtcXFwiPjwvZz48ZyBpZD1cXFwiYmFcXFwiPjwvZz48ZyBpZD1cXFwiYmJcXFwiPjwvZz48ZyBpZD1cXFwiYmNcXFwiPjwvZz48ZyBpZD1cXFwiYmRcXFwiPjwvZz48ZyBpZD1cXFwiYmVcXFwiPjwvZz48ZyBpZD1cXFwiYmZcXFwiPjwvZz48ZyBpZD1cXFwiYmdcXFwiPjwvZz48ZyBpZD1cXFwiYmhcXFwiPjxwYXRoIGQ9XFxcIk0yNS43MywxSDQuMjdjLTEuODEsMC0zLjI3LDEuNDctMy4yNywzLjI3VjI1LjczYzAsMS44MSwxLjQ3LDMuMjcsMy4yNywzLjI3SDI1LjczYzEuODEsMCwzLjI3LTEuNDcsMy4yNy0zLjI3VjQuMjdjMC0xLjgxLTEuNDctMy4yNy0zLjI3LTMuMjdaTTksMjdINC4yN2MtLjcsMC0xLjI3LS41Ny0xLjI3LTEuMjd2LTQuMjNoNnY1LjVabTAtNy41SDN2LTUuNWg2djUuNVptMC03LjVIM1Y3aDZ2NVptOS0zVjI3aC03VjdoN3YyWm05LDE2LjczYzAsLjctLjU3LDEuMjctMS4yNywxLjI3aC01Ljczdi01LjVoN3Y0LjIzWm0wLTYuMjNoLTd2LTUuNWg3djUuNVptMC03LjVoLTdWN2g3djVaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4vcHJvcGVydHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWN0aW9uOiAoKSA9PiB2b2lkO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHZpc2libGU/OiBib29sZWFuO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBzdmc/OiBzdHJpbmc7XG4gICAgY29udGFpbmVyPzogc3RyaW5nO1xuICAgIGNzc0NsYXNzZXM/OiBzdHJpbmc7XG4gICAgY3NzSW1hZ2U/OiBzdHJpbmc7XG4gICAgY3NzTGFiZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSUFjdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogSUFjdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UgfHwge30pLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IHNvdXJjZVtrZXldKTtcbiAgICB9XG4gICAgQHByb3BlcnR5KCkgbmFtZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGFjdGlvbjogKCkgPT4gdm9pZDtcbiAgICBAcHJvcGVydHkoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIHZpc2libGU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBhY3RpdmU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgaWNvbjogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIHN2Zzogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNzc0NsYXNzZXM6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBjc3NJbWFnZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNzc0xhYmVsOiBzdHJpbmc7XG59IiwiaW1wb3J0IFwiLi9hY3Rpb25zLnNjc3NcIjtcblxuIiwiaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5cbmV4cG9ydCBjbGFzcyBIYXNoVGFibGVTdG9yYWdlIHtcbiAgICBwcm90ZWN0ZWQgaGFzaCA9IHt9O1xuICAgIHB1YmxpYyBvd25lcjogYW55O1xuICAgIHB1YmxpYyBnZXRWYWx1ZShuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaGFzaFtuYW1lXTtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFzaFtuYW1lXSA9IHZhbDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgICBwcml2YXRlIHByb3BlcnR5VmFsdWVMaXN0bmVyczoge1twcm9wZXJ0eU5hbWU6IHN0cmluZ106IHtba2V5OiBzdHJpbmddOiAob2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSkgPT4gdm9pZCB9fSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VycmVudERlcGVuZGVuY2lzOiBEZXBlbmRlbmNpZXMgPSB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVByb3BlcnRpZXNTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IEhhc2hUYWJsZVN0b3JhZ2UoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBmaW5pc2hDb2xsZWN0RGVwZW5kZW5jaWVzKCk6IERlcGVuZGVuY2llcyB7XG4gICAgICBjb25zdCBkZXBzID0gQmFzZS5jdXJyZW50RGVwZW5kZW5jaXM7XG4gICAgICBCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBkZXBzO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0Q29sbGVjdERlcGVuZGVuY2llcyh1cGRhdGVyOiAoKSA9PiB2b2lkLCB0YXJnZXQ6IEJhc2UsIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmIChCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHQgdG8gY29sbGVjdCBuZXN0ZWQgZGVwZW5kZW5jaWVzLiBOZXN0ZWQgZGVwZW5kZW5jaWVzIGFyZSBub3Qgc3VwcG9ydGVkLlwiKTtcbiAgICAgIH1cbiAgICAgIEJhc2UuY3VycmVudERlcGVuZGVuY2lzID0gbmV3IERlcGVuZGVuY2llcyh1cGRhdGVyLCB0YXJnZXQsIHByb3BlcnR5KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgY29sbGVjdERlcGVuZGVuY3kodGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAoQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMuYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICB9XG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZSA9IEJhc2UuY3JlYXRlUHJvcGVydGllc1N0b3JhZ2UoKSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uub3duZXIgPSB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5TmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eUxpc3RuZXJzID0gdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYoISFwcm9wZXJ0eUxpc3RuZXJzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0eUxpc3RuZXJzKS5mb3JFYWNoKGtleSA9PiBwcm9wZXJ0eUxpc3RuZXJzW2tleV0ob2xkVmFsdWUsIG5ld1ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICBCYXNlLmNvbGxlY3REZXBlbmRlbmN5KHRoaXMsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdG9yYWdlLmdldFZhbHVlKHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldFZhbHVlKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgaWYoIWlzRXF1YWwob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJQcm9wZXJ0eVZhbHVlTGlzdG5lcihwcm9wZXJ0eU5hbWU6IHN0cmluZywgbGlzdG5lcjogKG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQsIGtleTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcGVydHlMaXN0bmVycyA9IHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKCFwcm9wZXJ0eUxpc3RuZXJzKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eUxpc3RuZXJzID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0eUxpc3RuZXJzO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnR5TGlzdG5lcnNba2V5XSA9IGxpc3RuZXI7XG4gICAgfVxuICAgIHB1YmxpYyB1blJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIocHJvcGVydHlOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcGVydHlMaXN0bmVycyA9IHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKCEhcHJvcGVydHlMaXN0bmVycykge1xuICAgICAgICAgICAgZGVsZXRlIHByb3BlcnR5TGlzdG5lcnNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmNpZXMge1xuICAgIHByaXZhdGUgc3RhdGljIERlcGVuZGVuY2llc0NvdW50ID0gMDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY3VycmVudERlcGVuZGVuY3k6ICgpID0+IHZvaWQsIHB1YmxpYyB0YXJnZXQ6IEJhc2UsIHB1YmxpYyBwcm9wZXJ0eTogc3RyaW5nKSB7XG4gICAgfVxuICAgIGRlcGVuZGVuY2llczogQXJyYXk8eyBvYmo6IEJhc2UsIHByb3A6IHN0cmluZywgaWQ6IHN0cmluZyB9PiA9IFtdO1xuICAgIGlkOiBzdHJpbmcgPSBcIlwiICsgKCsrRGVwZW5kZW5jaWVzLkRlcGVuZGVuY2llc0NvdW50KTtcbiAgICBhZGREZXBlbmRlbmN5KHRhcmdldDogQmFzZSwgcHJvcGVydHk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0YXJnZXQgJiYgdGhpcy5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmICh0aGlzLmRlcGVuZGVuY2llcy5zb21lKGRlcGVuZGVuY3kgPT4gZGVwZW5kZW5jeS5vYmogPT09IHRhcmdldCAmJiBkZXBlbmRlbmN5LnByb3AgPT09IHByb3BlcnR5KSlcbiAgICAgICAgcmV0dXJuO1xuICBcbiAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLnB1c2goe1xuICAgICAgICBvYmo6IHRhcmdldCxcbiAgICAgICAgcHJvcDogcHJvcGVydHksXG4gICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICB9KTtcbiAgICAgIHRhcmdldC5yZWdpc3RlclByb3BlcnR5VmFsdWVMaXN0bmVyKHByb3BlcnR5LCB0aGlzLmN1cnJlbnREZXBlbmRlbmN5LCB0aGlzLmlkKTtcbiAgXG4gICAgfVxuICAgIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKGRlcGVuZGVuY3kgPT4ge1xuICAgICAgICBkZXBlbmRlbmN5Lm9iai51blJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIoZGVwZW5kZW5jeS5wcm9wLCBkZXBlbmRlbmN5LmlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGNsYXNzIENvbXB1dGVkVXBkYXRlcjxUID0gYW55PiB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb21wdXRlZFVwZGF0ZXJUeXBlID0gXCJfX2RlcGVuZGVuY3lfY29tcHV0ZWRcIjtcbiAgICBwdWJsaWMgc3RhdGljIENvbGxlY3REZXBlbmRlbmNpZXM8VSA9IGFueT4ob2JqOiBCYXNlLCBjb21wdXRlZFVwZGF0ZXI6IENvbXB1dGVkVXBkYXRlcjxVPiwgcHJvcGVydHlOYW1lOiBzdHJpbmcpOiBVIHtcbiAgICAgIEJhc2Uuc3RhcnRDb2xsZWN0RGVwZW5kZW5jaWVzKCgpID0+IG9ialtwcm9wZXJ0eU5hbWVdID0gY29tcHV0ZWRVcGRhdGVyLnVwZGF0ZXIoKSwgb2JqLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gY29tcHV0ZWRVcGRhdGVyLnVwZGF0ZXIoKTtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IEJhc2UuZmluaXNoQ29sbGVjdERlcGVuZGVuY2llcygpO1xuICAgICAgY29tcHV0ZWRVcGRhdGVyLnNldERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyA9IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGRhdGVyOiAoKSA9PiBUKSB7XG4gICAgfVxuICAgIHJlYWRvbmx5IHR5cGUgPSBDb21wdXRlZFVwZGF0ZXIuQ29tcHV0ZWRVcGRhdGVyVHlwZTtcbiAgICBwdWJsaWMgZ2V0IHVwZGF0ZXIoKTogKCkgPT4gVCB7XG4gICAgICByZXR1cm4gdGhpcy5fdXBkYXRlcjtcbiAgICB9XG4gICAgcHVibGljIHNldERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyk6IHZvaWQge1xuICAgICAgdGhpcy5jbGVhckRlcGVuZGVuY2llcygpO1xuICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXM7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXREZXBlbmRlbmNpZXMoKTogRGVwZW5kZW5jaWVzIHtcbiAgICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY2llcztcbiAgICB9XG4gICAgcHVibGljIG9ic2VydmUodGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xuICAgICAgQ29tcHV0ZWRVcGRhdGVyLkNvbGxlY3REZXBlbmRlbmNpZXModGFyZ2V0LCB0aGlzLCBwcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGNsZWFyRGVwZW5kZW5jaWVzKCkge1xuICAgICAgaWYgKHRoaXMuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGRpc3Bvc2UoKTogYW55IHtcbiAgICAgIHRoaXMuY2xlYXJEZXBlbmRlbmNpZXMoKTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IFwiLi9kcm9wZG93bi1hY3Rpb25zLnNjc3NcIjtcbiIsImltcG9ydCB7IENvbXB1dGVkVXBkYXRlciB9IGZyb20gXCIuL2RlcGVuZGVuY2llc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wZXJ0eURlY29yYXRvck9wdGlvbnMge1xuICAgIGRlZmF1bHRWYWx1ZT86IGFueTtcbiAgICBvblNldD86ICh2YWw6IGFueSwgdGFyZ2V0OiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eShvcHRpb25zPzogSVByb3BlcnR5RGVjb3JhdG9yT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwcm9jZXNzQ29tcHV0ZWRVcGRhdGVyID0gKG9iajogYW55LCB2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgdmFsLnR5cGUgPT09IENvbXB1dGVkVXBkYXRlci5Db21wdXRlZFVwZGF0ZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbXB1dGVkVXBkYXRlci5Db2xsZWN0RGVwZW5kZW5jaWVzKG9iaiwgdmFsLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZ2V0RGVmYXVsdFZhbHVlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBvcHRpb25zLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpID8gW10uY29uY2F0KGRlZmF1bHRWYWx1ZSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5VmFsdWUoa2V5LCBnZXREZWZhdWx0VmFsdWUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb2Nlc3NDb21wdXRlZFVwZGF0ZXIodGhpcywgdmFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5VmFsdWUoa2V5LCBuZXdWYWx1ZSwgZ2V0RGVmYXVsdFZhbHVlKCkpO1xuICAgICAgICAgICAgICAgIGlmICghIW9wdGlvbnMgJiYgb3B0aW9ucy5vblNldCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uU2V0KG5ld1ZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIjtcblxudHlwZSAgVE9wZXJhdGlvbiA9IFwiRVFcIiB8IFwiTkVRXCIgfCBcIkdcIiB8IFwiTFwiIHwgXCJHRVFcIiB8IFwiTEVRXCIgfCBcIklTTlwiIHwgXCJJU05OXCIgfCBcIkNcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRPcGVyYXRpb24ge1xuICAgIG9wOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGZ1bmM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRDb21wYXJlIHtcbiAgICBmaWVsZDogc3RyaW5nO1xuICAgIG9wOiBUT3BlcmF0aW9uO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRPcGVyYW5kIHtcbiAgICBsZXZlbHVwOiBib29sZWFuO1xuICAgIG9wZXJhbmQ6IHtcbiAgICAgICAgZmllbGQ6IHN0cmluZyxcbiAgICAgICAgb3A6IFRPcGVyYXRpb24sXG4gICAgICAgIHZhbHVlOiBzdHJpbmcgfCBOdW1iZXIsXG4gICAgICAgIHBhdGg/OiBzdHJpbmdbXSxcbiAgICAgICAgc2VhcmNoX2luX2tleT86IGJvb2xlYW4sXG4gICAgICAgIG1fb3JkZXI/OiBib29sZWFuLFxuICAgICAgICBmdW5jPzogc3RyaW5nLFxuICAgIH0sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFnZ3JlZ2F0ZSB7XG4gICAgZnVuYzogc3RyaW5nLFxuICAgIGZpZWxkOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRMb2dpYyB7XG4gICAgc3RyaWN0OiBib29sZWFuO1xuICAgIG9wZXJhbmRzOiBJRmluZE9wZXJhbmRbXTtcbiAgICBhZ2dyZWdhdGU/OiBJQWdncmVnYXRlW107XG59XG5cbmV4cG9ydCB2YXIgb3BlcmF0aW9uc01hcDogeyBbaW5kZXg6IHN0cmluZ106IElGaW5kT3BlcmF0aW9uW10gfSA9IHt9O1xuXG52YXIgZGVmYXVsdE9wZXJhdGlvbnNNYXAgPSB7XG4gICAgc3RyaW5nOiBbXG4gICAgICAgIHtvcDogXCJDXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJjb250YWluc1wiKX0sXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGRhdGU6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWdyZWF0ZXJcIil9LFxuICAgICAgICB7b3A6IFwiTFwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGRhdGV0aW1lOiBbXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlbGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgaW50ZWdlcjogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIk5FUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybm90ZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIkdFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkxFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc2VxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICBudW1lcmljOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJub3RlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiR0VRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTEVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGJvb2w6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgXSxcbiAgICBtb25leTogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIk5FUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybm90ZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIkdFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkxFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc2VxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICByYWRpb2J1dHRvbjogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbn1cbk9iamVjdC5rZXlzKGRlZmF1bHRPcGVyYXRpb25zTWFwKS5mb3JFYWNoKGtleSA9PiBvcGVyYXRpb25zTWFwW2tleV0gPSBkZWZhdWx0T3BlcmF0aW9uc01hcFtrZXldKTtcbiIsImV4cG9ydCBjb25zdCBhZGQgPSByZXF1aXJlKCcuL2ljb25zL2ljb25faXRlbS1hZGQuc3ZnJyk7XG5leHBvcnQgY29uc3QgZXF1YWwgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fZXF1YWwuc3ZnJyk7XG5leHBvcnQgY29uc3QgdGFibGUgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fdGFibGUtbWVyZ2Uuc3ZnJyk7XG5leHBvcnQgY29uc3Qgc2F2ZSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9pdGVtLXNhdmUuc3ZnJyk7XG5leHBvcnQgY29uc3QgZGVsID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2l0ZW0tZGVsZXRlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHBhc3RlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3Bhc3RlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IG1vcmVfc3EgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fbW9yZV9zcS5zdmcnKTtcbmV4cG9ydCBjb25zdCBjaGVjayA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9jaGVjay5zdmcnKTtcbmV4cG9ydCBjb25zdCBzb3J0dXAgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fc29ydC11cC5zdmcnKTtcbmV4cG9ydCBjb25zdCBzb3J0ZG93biA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9zb3J0LWRvd24uc3ZnJyk7XG5leHBvcnQgY29uc3QgZmlsdGVyID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2ZpbHRlci5zdmcnKTtcbmV4cG9ydCBjb25zdCBtb3JlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX21vcmUuc3ZnJyk7XG5leHBvcnQgY29uc3QgZWRpdCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9lZGl0LnN2ZycpO1xuZXhwb3J0IGNvbnN0IGFycm93cmlnaHQgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fYXJyb3ctcmlnaHQuc3ZnJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3NlYXJjaC5zdmcnKTtcbmV4cG9ydCBjb25zdCBjcm9zcyA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9jcm9zcy5zdmcnKTtcbmV4cG9ydCBjb25zdCBhcnJvd2Rvd24gPSByZXF1aXJlKCcuL2ljb25zL2ljb25fYXJyb3ctZG93bi5zdmcnKTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2NvcmUvYWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL2FjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvZHJvcGRvd24tYWN0aW9uc1wiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9maW5kXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY29sdW1uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9zdW1tYXJ5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1kZWZhdWx0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9maWx0ZXItc2VsZWN0XCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL251bWJlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvYm9vbFwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9hcnJheS1kYXRhLXByb3ZpZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9yZW1vdGUtZGF0YS1wcm92aWRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ljb25cIlxuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBCYXNlLCBIYXNoVGFibGVTdG9yYWdlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbC1lZGl0b3JcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NlbGwtdmlld2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9zdW1tYXJ5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9zZWFyY2hcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1kZWZhdWx0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1zZWxlY3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvYWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93aWRnZXRzL2FjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvZHJvcGRvd24tYWN0aW9uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vd2lkZ2V0cy9pY29uXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2Jvb2wtY2VsbC1lZGl0b3JcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2Jvb2wtY2VsbC12aWV3ZXJcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uXCI7XG5cbmV4cG9ydCBjb25zdCBLbm9ja291dEluc3RhbmNlID0ga287XG5cbmV4cG9ydCBjbGFzcyBLbm9ja291dEhhc2hUYWJsZVN0b3JhZ2UgZXh0ZW5kcyBIYXNoVGFibGVTdG9yYWdlIHtcbiAgICBwcml2YXRlIGxpbmtBcnJheVRvT2JzZXJ2YWJsZShvYnNlcnZhYmxlQXJyYXk6IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PGFueT4pIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW10uY29uY2F0KG9ic2VydmFibGVBcnJheSgpKTtcbiAgICAgICAgW1wicG9wXCIsIFwicHVzaFwiLCBcInNwbGljZVwiLCBcInNsaWNlXCIsIFwic2hpZnRcIiwgXCJ1bnNoaWZ0XCJdLmZvckVhY2goZnVuY05hbWUgPT4ge1xuICAgICAgICAgICAgcmVzdWx0W2Z1bmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGVbZnVuY05hbWVdLmFwcGx5KHJlc3VsdCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZUFycmF5W2Z1bmNOYW1lXS5hcHBseShvYnNlcnZhYmxlQXJyYXksIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZU9ic2VydmFibGUodmFsdWU6IGFueSkge1xuICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGtvLm9ic2VydmFibGVBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtvLm9ic2VydmFibGUodmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFsdWUobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdXBlci5nZXRWYWx1ZShuYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICBpZigha28uaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5oYXNoW25hbWVdID0gdGhpcy5jcmVhdGVPYnNlcnZhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5oYXNoW25hbWVdO1xuICAgICAgICBpZigoa28gYXMgYW55KS5pc09ic2VydmFibGVBcnJheShvYnNlcnZhYmxlKSkgeyAvLyBUT0RPIC0gcmVtb3ZlIGFueSBjYXN0XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQXJyYXlUb09ic2VydmFibGUob2JzZXJ2YWJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICAgICAgaWYoIWtvLmlzT2JzZXJ2YWJsZSh0aGlzLmhhc2hbbmFtZV0pKSB7XG4gICAgICAgICAgICB0aGlzLmhhc2hbbmFtZV0gPSB0aGlzLmNyZWF0ZU9ic2VydmFibGUodGhpcy5oYXNoW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5oYXNoW25hbWVdO1xuICAgICAgICB0aGlzLmhhc2hbbmFtZV0odmFsKTtcbiAgICB9XG59XG5cbkJhc2UuY3JlYXRlUHJvcGVydGllc1N0b3JhZ2UgPSAoKSA9PiBuZXcgS25vY2tvdXRIYXNoVGFibGVTdG9yYWdlKCk7XG5cbmV4cG9ydCB2YXIgdGFibGVUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL3RhYmxlL2luZGV4Lmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNFwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBwYXJhbXMubW9kZWwgYXMgVGFibGU7XG4gICAgICAgICAgICBtb2RlbC5pbml0aWFsaXplKGNvbXBvbmVudEluZm8uZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiB0YWJsZVRlbXBsYXRlXG59KTtcblxuZnVuY3Rpb24gcmVuZGVyVGFibGUoZWxlbWVudDogc3RyaW5nIHwgRWxlbWVudCkge1xuICAgIGxldCBlbDogRWxlbWVudCA9IGVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICBpZih0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudClbMF07XG4gICAgfVxuICAgIGVsLmlubmVySFRNTCA9IGA8dGFibGU0IHBhcmFtcz1cInsgbW9kZWw6ICRkYXRhIH1cIj48L3RhYmxlND5gO1xuICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soZWwsIChub2RlOiBOb2RlKSA9PiB7XG4gICAgICAgIGtvLmNsZWFuTm9kZShub2RlKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9KTtcbiAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMsIGVsKTtcbn1cblxuVGFibGUucHJvdG90eXBlW1wicmVuZGVyXCJdID0gcmVuZGVyVGFibGU7IiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBJbnBsYWNlRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NlbGwtZWRpdG9yXCI7XG5cbmV4cG9ydCB2YXIgYm9vbENlbGxFZGl0b3JUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2Jvb2wtY2VsbC1lZGl0b3IuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYm9vbC1jZWxsLWVkaXRvclwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWw6IElucGxhY2VFZGl0b3IgPSBrby51bndyYXAocGFyYW1zLm1vZGVsKTtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGlucHV0ID0gY29tcG9uZW50SW5mby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgLy8gICAgIGlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gfSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBib29sQ2VsbEVkaXRvclRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsXCI7XG5cbmV4cG9ydCB2YXIgYm9vbENlbGxWaWV3ZXJUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2Jvb2wtY2VsbC12aWV3ZXIuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYm9vbC1jZWxsLXZpZXdlclwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYm9vbENlbGxWaWV3ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IElucGxhY2VFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdGFibGUvY2VsbC1lZGl0b3JcIjtcblxuZXhwb3J0IHZhciBjZWxsRWRpdG9yVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9jZWxsLWVkaXRvci5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy1jZWxsLWVkaXRvclwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgdmFyIG1vZGVsOiBJbnBsYWNlRWRpdG9yID0ga28udW53cmFwKHBhcmFtcy5tb2RlbCk7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBpbnB1dCA9IGNvbXBvbmVudEluZm8uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIilbMF07XG4gICAgICAgICAgICAvLyAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgICAgIC8vIH0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogY2VsbEVkaXRvclRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsXCI7XG5cbmV4cG9ydCB2YXIgY2VsbFZpZXdlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vY2VsbC12aWV3ZXIuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidGFibGU0anMtY2VsbC12aWV3ZXJcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBjZWxsVmlld2VyVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBUYWJsZUNlbGwgfSBmcm9tIFwiLi4vLi4vdGFibGUvY2VsbFwiO1xuXG5leHBvcnQgdmFyIGNlbGxUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2NlbGwuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidGFibGU0anMtdGFibGUtY2VsbFwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgY29uc3QgaXNNZXJnZWRDZWxsID0ga28uY29tcHV0ZWQoKCkgPT4gcGFyYW1zLmNlbGwuY291bnQgPiAxICYmIHBhcmFtcy50YWJsZS5pc01lcmdlZNChZWxscyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBzdGFydEVkaXQ6ICgpID0+IHBhcmFtcy50YWJsZS5zdGFydEVkaXRDZWxsKHBhcmFtcy5jZWxsKSxcbiAgICAgICAgICAgICAgICBjb250YWluZXJDc3M6IGtvLmNvbXB1dGVkKCgpID0+IFRhYmxlQ2VsbC5nZXRDb250YWluZXJDc3MocGFyYW1zLmNlbGwsIGlzTWVyZ2VkQ2VsbCgpKSksXG4gICAgICAgICAgICAgICAgY29udGVudENzczoga28uY29tcHV0ZWQoKCkgPT4gVGFibGVDZWxsLmdldENvbnRlbnRDc3MocGFyYW1zLmNlbGwsIGlzTWVyZ2VkQ2VsbCgpKSksXG4gICAgICAgICAgICAgICAgaXNNZXJnZWRDZWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogY2VsbFRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgQ29sdW1uRmlsdGVySXRlbSB9IGZyb20gXCIuLi8uLi90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxudmFyIGZpbHRlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vY29sdW1uLWZpbHRlci1pdGVtLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLWNvbHVtbi1maWx0ZXItaXRlbVwiLCB7XG4gIHZpZXdNb2RlbDoge1xuICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgcmV0dXJuIHBhcmFtcy5maWx0ZXJJdGVtIGFzIENvbHVtbkZpbHRlckl0ZW07XG4gICAgfVxuICB9LFxuICB0ZW1wbGF0ZTogZmlsdGVyVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NvbHVtbi1maWx0ZXJcIjtcblxudmFyIGZpbHRlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vY29sdW1uLWZpbHRlci5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy1jb2x1bW4tZmlsdGVyXCIsIHtcbiAgdmlld01vZGVsOiB7XG4gICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICByZXR1cm4gcGFyYW1zLmNvbnRleHQgYXMgRmlsdGVyQ29udGV4dDtcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBmaWx0ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxudmFyIGRlZmF1bHRGaWx0ZXJUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1kZWZhdWx0Lmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLXRhYmxlLWZpbHRlci1kZWZhdWx0XCIsIHtcbiAgdmlld01vZGVsOiB7XG4gICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IGRlZmF1bHRGaWx0ZXJUZW1wbGF0ZVxufSk7XG5cbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgVGFibGVGaWx0ZXJTZWxlY3QgfSBmcm9tIFwiLi4vLi4vdGFibGUvZmlsdGVyLXNlbGVjdFwiXG5cblxudmFyIHNlbGVjdGJveEZpbHRlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vZmlsdGVyLXNlbGVjdC5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy1maWx0ZXItc2VsZWN0XCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSBuZXcgVGFibGVGaWx0ZXJTZWxlY3QocGFyYW1zLnZhbHVlLCBwYXJhbXMuY29sdW1uTmFtZSwgcGFyYW1zLmNvbHVtblR5cGUsIHBhcmFtcy5nZXRDb2x1bW5EYXRhLCBwYXJhbXMuaXNPcGVuLCBwYXJhbXMudGl0bGUsIHBhcmFtcy5tb3JlVGV4dCk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9ICgpID0+IHZpZXdNb2RlbC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soY29tcG9uZW50SW5mby5lbGVtZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdmlld01vZGVsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc2VsZWN0Ym94RmlsdGVyVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCB9IGZyb20gXCIuLi8uLi90YWJsZS9zZWFyY2hcIjtcblxuZXhwb3J0IHZhciBzZWFyY2hUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL3NlYXJjaC5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy1zZWFyY2hcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIHZhciBtb2RlbCA9IGtvLnVud3JhcChwYXJhbXMubW9kZWwpO1xuICAgICAgICAgICAgdmFyIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbCA9IG1vZGVsW3BhcmFtcy5vcHRpb25zPy5kYXRhXSB8fCBtb2RlbDtcbiAgICAgICAgICAgIHZhciBzZWFyY2hUZXh0ID0gcGFyYW1zLm9wdGlvbnM/LnRleHQgJiYgbW9kZWxbcGFyYW1zLm9wdGlvbnMudGV4dF0gfHwga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2VzcyA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHNlYXJjaE1vZGVsLnNlYXJjaChzZWFyY2hUZXh0KCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbXBvbmVudEluZm8uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHByb2Nlc3MpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICByZWZyZXNoOiAoKSA9PiB7IHNlYXJjaE1vZGVsLnNlYXJjaChzZWFyY2hUZXh0KCkpOyB9LFxuICAgICAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IGNvbXBvbmVudEluZm8uZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHByb2Nlc3MpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc2VhcmNoVGVtcGxhdGVcbn0pO1xuXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IFRhYmxlU3VtbWFyeSB9IGZyb20gXCIuLi8uLi90YWJsZS9zdW1tYXJ5XCI7XG5cbmV4cG9ydCB2YXIgc3VtbWFyeVRlbXBsYXRlID0gcmVxdWlyZShcIi4vc3VtbWFyeS5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy10YWJsZS1zdW1tYXJ5XCIsIHtcbiAgdmlld01vZGVsOiB7XG4gICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICByZXR1cm4gbmV3IFRhYmxlU3VtbWFyeShwYXJhbXMuY29sdW1uKTtcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBzdW1tYXJ5VGVtcGxhdGVcbn0pO1xuXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vLi4vY29yZS9hY3Rpb25cIjtcblxudmFyIGFjdGlvblRlbXBsYXRlID0gcmVxdWlyZShcIi4vYWN0aW9uLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLWFjdGlvbi1pdGVtXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiAocGFyYW1zOiBJQWN0aW9uLCBjb21wb25lbnRJbmZvKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYWN0aW9uVGVtcGxhdGVcbn0pO1xuXG5leHBvcnQgdmFyIEFjdGlvbkl0ZW1XaWRnZXQ7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxudmFyIGFjdGlvbnNUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2FjdGlvbnMuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidGFibGU0anMtYWN0aW9uc1wiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgdmFyIG1vZGVsVmFsdWUgPSAocGFyYW1zLm1vZGVsIHx8IHt9KVtwYXJhbXMub3B0aW9ucy5hY3Rpb25dO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBtb2RlbFZhbHVlLFxuICAgICAgICAgICAgICAgIHNob3J0OiBwYXJhbXMub3B0aW9ucy5zaG9ydCxcbiAgICAgICAgICAgICAgICBncm91cE5hbWU6IHBhcmFtcy5vcHRpb25zLmdyb3VwTmFtZSxcbiAgICAgICAgICAgICAgICB0b2dnbGVDaGlsZEFjdGlvbnM6IChfLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcInRhYmxlNGpzLW5lc3RlZC1hY3Rpb25zLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBhY3Rpb25zVGVtcGxhdGVcbn0pO1xuXG5leHBvcnQgdmFyIEFicmlzQWN0aW9uc1dpZGdldDtcblxuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5cbnZhciBkcm9wZG93blRlbXBsYXRlID0gcmVxdWlyZShcIi4vZHJvcGRvd24tYWN0aW9ucy5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy1kcm9wZG93bi1hY3Rpb25zXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCBpc09wZW4gPSBwYXJhbXMuaXNPcGVuIHx8IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiBpc09wZW4oZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgICAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhjb21wb25lbnRJbmZvLmVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBwYXJhbXMudGl0bGUgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBtb3JlVGV4dDogcGFyYW1zLm1vcmVUZXh0IHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogcGFyYW1zLmRhdGEsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogcGFyYW1zLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgdG9nZ2xlOiAoXywgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuKCFpc09wZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogZHJvcGRvd25UZW1wbGF0ZVxufSk7XG5cbmV4cG9ydCB2YXIgQWJyaXNEcm9wZG93bkFjdGlvbnM7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLWljb25cIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9pY29uLmh0bWxcIikuZGVmYXVsdFxufSk7XG5cbmV4cG9ydCB2YXIgQWJyaXNJY29uV2lkZ2V0O1xuIiwiZXhwb3J0IGNsYXNzIExvY2FsaXphdGlvbiB7XG4gICAgc3RhdGljIGVuZ2xpc2hTdHJpbmdzID0ge1xuICAgICAgICBmaWx0ZXJjb250YWluczogXCJDb250YWluc1wiLFxuICAgICAgICBmaWx0ZXJlcXVhbDogXCJFcXVhbFwiLFxuICAgICAgICBmaWx0ZXJpc251bGw6IFwiRW1wdHlcIixcbiAgICAgICAgZmlsdGVyaXNub3RudWxsOiBcIk5vdCBlbXB0eVwiLFxuICAgICAgICBmaWx0ZXJncmVhdGVyOiBcIkdyZWF0ZXJcIixcbiAgICAgICAgZmlsdGVybGVzczogXCJMZXNzXCIsXG4gICAgICAgIGZpbHRlcmdyZWF0ZXJlcXVhbDogXCJHcmVhdGVyIG9yIGVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmxlc3NlcXVhbDogXCJMZXNzIG9yIGVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmRhdGVub3RlcXVhbDogXCJOb3QgZXF1YWxcIixcbiAgICAgICAgZmlsdGVyZGF0ZWVxdWFsOiBcIkVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmRhdGVncmVhdGVyOiBcIkZyb21cIixcbiAgICAgICAgZmlsdGVyZGF0ZWxlc3M6IFwiVG9cIixcbiAgICAgICAgbm9EYXRhOiBcIk5vIERhdGFcIlxuICAgIH07XG4gICAgc3RhdGljIGdldFN0cmluZyA9IChzdHJpbmdJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2xpc2hTdHJpbmdzW3N0cmluZ0lkXTtcbiAgICB9IFxufSIsImltcG9ydCB7IElUYWJsZUNlbGxUeXBlLCBUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmltcG9ydCBcIi4vYm9vbC5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBCb29sQ2VsbCBpbXBsZW1lbnRzIElUYWJsZUNlbGxUeXBlIHtcbiAgICBuYW1lOiBzdHJpbmcgPSBcImJvb2xcIjtcbiAgICBlZGl0b3I6IHN0cmluZyA9IFwiYm9vbC1jZWxsLWVkaXRvclwiO1xuICAgIHZpZXdlcjogc3RyaW5nID0gXCJib29sLWNlbGwtdmlld2VyXCI7XG59XG5cblRhYmxlQ2VsbC5yZWdpc3RlckNlbGxUeXBlKG5ldyBCb29sQ2VsbCgpKTsiLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuaW1wb3J0IFwiLi9jZWxsLWVkaXRvci5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnBsYWNlRWRpdG9yIGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZWxsOiBJVGFibGVDZWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNlbGwuZGF0YTtcbiAgICB9XG4gICAgQHByb3BlcnR5KCkgdmFsdWU6IGFueTtcbiAgICBjb21wbGV0ZShjb21taXQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoY29tbWl0KSB7XG4gICAgICAgICAgICB0aGlzLmNlbGwuZGF0YSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZWxsLmlucGxhY2VFZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHByb2Nlc3NLZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZShldmVudC5rZXlDb2RlID09PSAxMyk7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4sIElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ2VsbFR5cGUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjc3M/OiBzdHJpbmc7XG4gICAgZWRpdG9yPzogc3RyaW5nO1xuICAgIHZpZXdlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDZWxsIHtcbiAgICBkYXRhOiBhbnk7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY3NzOiBzdHJpbmc7XG4gICAgaW5wbGFjZUVkaXRvcjogYW55O1xuICAgIGVkaXRvcj86IHN0cmluZztcbiAgICB2aWV3ZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUNlbGwgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVRhYmxlQ2VsbCB7XG4gICAgcHVibGljIHN0YXRpYyBjZWxsVHlwZXMgPSB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICBjc3M6IFwidGFibGU0anMtdGFibGUtY2VsbC0tbGVmdFwiLFxuICAgICAgICAgICAgZWRpdG9yOiBcInRhYmxlNGpzLWNlbGwtZWRpdG9yXCIsXG4gICAgICAgICAgICB2aWV3ZXI6IFwidGFibGU0anMtY2VsbC12aWV3ZXJcIlxuICAgICAgICB9LFxuICAgIH07XG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckNlbGxUeXBlKGNlbGxUeXBlOiBJVGFibGVDZWxsVHlwZSkge1xuICAgICAgICBUYWJsZUNlbGwuY2VsbFR5cGVzW2NlbGxUeXBlLm5hbWVdID0gY2VsbFR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb250YWluZXJDc3MoY2VsbDogSVRhYmxlQ2VsbCwgaXNNZXJnZWRDZWxsOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb250YWluZXJDc3MgPSBcInRhYmxlNGpzLXRhYmxlLWNlbGxfX2NvbnRhaW5lciBcIiArIGNlbGwuY3NzO1xuICAgICAgICBpZiAoaXNNZXJnZWRDZWxsKSB7XG4gICAgICAgICAgICBjb250YWluZXJDc3MgKz0gXCIgY2VsbF9fc3RpY2t5LXRleHRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyQ3NzO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldENvbnRlbnRDc3MoY2VsbDogSVRhYmxlQ2VsbCB8IFRhYmxlQ2VsbCwgaXNNZXJnZWRDZWxsOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb250ZW50Q3NzID0gaXNNZXJnZWRDZWxsID8gXCJ0YWJsZTRqcy10YWJsZS1jZWxsX190ZXh0LS1tZXJnZWRcIiA6IFwidGFibGU0anMtdGFibGUtY2VsbF9fdGV4dFwiO1xuICAgICAgICBpZiAoY2VsbCBpbnN0YW5jZW9mIFRhYmxlQ2VsbCAmJiBjZWxsLmlzTW9kaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDc3MgKz0gXCIgdGFibGU0anMtdGFibGUtY2VsbF9fdGV4dC0tbW9kaWZpZWRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGVudENzcztcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzTW9kaWZpZWQ6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgb25TZXQ6ICh2YWwsIHRhcmdldDogVGFibGVDZWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnRleHQgIT09IHZhbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC50ZXh0ID0gdGFyZ2V0LmdldENlbGxUZXh0KHZhbCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkgZGF0YTogYW55O1xuICAgIEBwcm9wZXJ0eSgpIHRleHQ6IHN0cmluZztcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IDEgfSkgY291bnQ6IG51bWJlcjtcbiAgICBAcHJvcGVydHkoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIG5hbWU6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBpbnBsYWNlRWRpdG9yOiBhbnk7XG4gICAgQHByb3BlcnR5KCkgY3NzOiBzdHJpbmc7XG4gICAgZWRpdG9yOiBzdHJpbmc7XG4gICAgdmlld2VyOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbFR5cGVEZXNjcmlwdGlvbih0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFRhYmxlQ2VsbC5jZWxsVHlwZXNbdHlwZV0gfHwgVGFibGVDZWxsLmNlbGxUeXBlc1tcImRlZmF1bHRcIl1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENlbGxDc3MoZGF0YTogYW55LCBjb2x1bW46IElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbFR5cGVEZXNjcmlwdGlvbihjb2x1bW4udHlwZSkuY3NzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbEVkaXRvcihkYXRhOiBhbnksIGNvbHVtbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxsVHlwZURlc2NyaXB0aW9uKGNvbHVtbi50eXBlKS5lZGl0b3IgfHwgVGFibGVDZWxsLmNlbGxUeXBlc1tcImRlZmF1bHRcIl0uZWRpdG9yO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbFZpZXdlcihkYXRhOiBhbnksIGNvbHVtbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxsVHlwZURlc2NyaXB0aW9uKGNvbHVtbi50eXBlKS52aWV3ZXIgfHwgVGFibGVDZWxsLmNlbGxUeXBlc1tcImRlZmF1bHRcIl0udmlld2VyO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbFRleHQodmFsOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZShjb2w6IElUYWJsZUNvbHVtbiwgYmFjazogYm9vbGVhbiwgZGF0YTogYW55LCBjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFbY29sLm5hbWVdLFxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb2wubmFtZTtcbiAgICAgICAgdGhpcy5jc3MgPSB0aGlzLmdldENlbGxDc3MoZGF0YSwgY29sKTtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSB0aGlzLmdldENlbGxFZGl0b3IoZGF0YSwgY29sKTtcbiAgICAgICAgdGhpcy52aWV3ZXIgPSB0aGlzLmdldENlbGxWaWV3ZXIoZGF0YSwgY29sKTtcbiAgICAgICAgaWYgKGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbC5sYXN0ICYmIGNvbC5sYXN0LnRleHQgPT09IHRoaXMudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gY29sLmxhc3QuY291bnQgKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb2wubGFzdC5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wubGFzdCA9PSBjb2wucHJldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sLnByZXYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sLmNvdW50ID0gdGhpcy5jb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2wubGFzdCA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sLmxhc3QgPT09IG51bGwpIGNvbC5sYXN0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoY29sLnByZXZWYWx1ZSAmJiAoY29sLnByZXZWYWx1ZSA9PT0gdGhpcy50ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBjb2wuY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5wcmV2LmNvdW50ID0gY29sLmNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sLmNvdW50ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29sLnByZXYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBjb2wucHJldlZhbHVlID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElGaW5kT3BlcmF0aW9uLCBvcGVyYXRpb25zTWFwIH0gZnJvbSBcIi4uL2ZpbmRcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVySXRlbVZhbHVlIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uOiBJVGFibGVDb2x1bW4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmllbGQgPSBjb2x1bW4ubmFtZTtcbiAgfVxuICBAcHJvcGVydHkoeyBvblNldDogKHZhbCwgdGFyZ2V0OiBGaWx0ZXJJdGVtVmFsdWUpID0+IHRhcmdldC5jb2x1bW4uZmlsdGVyQ29udGV4dC5hcHBseSgpIH0pIHZhbHVlOiBhbnk7XG4gIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsLCB0YXJnZXQ6IEZpbHRlckl0ZW1WYWx1ZSkgPT4gdGFyZ2V0LmNvbHVtbi5maWx0ZXJDb250ZXh0LmFwcGx5KCkgfSkgb3A6IHN0cmluZztcbiAgZmllbGQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvbHVtbkZpbHRlckl0ZW0gZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbHVtbjogYW55LFxuICAgIHB1YmxpYyBnZXRDb2x1bW5EYXRhXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5maWx0ZXJJdGVtVmFsdWUgPSBuZXcgRmlsdGVySXRlbVZhbHVlKGNvbHVtbik7XG4gICAgaWYgKG9wZXJhdGlvbnNNYXBbdGhpcy5jb2x1bW4udHlwZV0pIHtcbiAgICAgIHRoaXMub3BlcmF0aW9ucyA9IG9wZXJhdGlvbnNNYXBbdGhpcy5jb2x1bW4udHlwZV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5vcGVyYXRpb25zID0gb3BlcmF0aW9uc01hcFtcInN0cmluZ1wiXTtcbiAgICB9XG4gICAgdGhpcy5vcGVyYXRpb24gPSB0aGlzLm9wZXJhdGlvbnNbMF07XG4gIH1cblxuICBvcGVyYXRpb25zOiBBcnJheTxhbnk+O1xuXG4gIGdldCBmaWx0ZXJFZGl0b3JOYW1lKCkge1xuICAgIC8vIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcImJvb2xcIikge1xuICAgIC8vICAgcmV0dXJuIFwidGFibGU0anMtdGFibGUtZmlsdGVyLWJvb2xcIjtcbiAgICAvLyB9IGVsc2UgaWYgKFtcInN0cmluZ1wiLCBcImNhcHRpb25cIiwgXCJwbGFpblwiXS5pbmRleE9mKHRoaXMuY29sdW1uLnR5cGUpICE9PSAtMSApIHtcbiAgICAvLyAgIHJldHVybiBcInRhYmxlNGpzLXRhYmxlLWZpbHRlci1hdXRvY29tcGxldGVcIjtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLnR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJ0YWJsZTRqcy10YWJsZS1maWx0ZXItZGF0ZVwiO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4udHlwZSA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJ0YWJsZTRqcy10YWJsZS1maWx0ZXItZGF0ZS10aW1lXCI7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcInBpa2V0cG9zaXRpb25cIikge1xuICAgIC8vICAgcmV0dXJuIFwidGFibGU0anMtdGFibGUtZmlsdGVyLWttcGt0bVwiO1xuICAgIC8vIH0gZWxzZSBpZiAoISF0aGlzLnBhcmFtcy5wcm9wZXJ0eUluZm8ucmVsYXRpb24pIHtcbiAgICAvLyAgIHJldHVybiBcInRhYmxlNGpzLXRhYmxlLWZpbHRlci1hdXRvY29tcGxldGVcIjtcbiAgICAvLyB9XG4gICAgcmV0dXJuIFwidGFibGU0anMtdGFibGUtZmlsdGVyLWRlZmF1bHRcIjtcbiAgfVxuICBwdWJsaWMgZmlsdGVySXRlbVZhbHVlOiBGaWx0ZXJJdGVtVmFsdWU7XG4gIEBwcm9wZXJ0eSh7XG4gICAgb25TZXQ6ICh2YWw6IElGaW5kT3BlcmF0aW9uLCB0YXJnZXQ6IENvbHVtbkZpbHRlckl0ZW0pID0+IHtcbiAgICAgIGlmICghIXZhbCkge1xuICAgICAgICB0YXJnZXQuZmlsdGVySXRlbVZhbHVlLm9wID0gdmFsLm9wO1xuICAgICAgfVxuICAgICAgdGFyZ2V0LnNob3dPcGVyYW5kID0gdmFsICYmIHZhbC5vcCAhPT0gXCJJU05cIiAmJiB2YWwub3AgIT09IFwiSVNOTlwiO1xuICAgIH1cbiAgfSkgb3BlcmF0aW9uOiBJRmluZE9wZXJhdGlvbjtcbiAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiB0cnVlIH0pIHNob3dPcGVyYW5kOiBib29sZWFuO1xuXG4gIGdldEZpbHRlclZhbHVlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogdGhpcy5maWx0ZXJJdGVtVmFsdWUuZmllbGQsXG4gICAgICBvcDogdGhpcy5maWx0ZXJJdGVtVmFsdWUub3AsXG4gICAgICB2YWx1ZTogdGhpcy5maWx0ZXJJdGVtVmFsdWUudmFsdWVcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJRGF0YVByb3ZpZGVyLCBJRGF0YVByb3ZpZGVyT3duZXIgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YS1wcm92aWRlclwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5pbXBvcnQgeyBGaWx0ZXJJdGVtVmFsdWUsIENvbHVtbkZpbHRlckl0ZW0gfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxuaW1wb3J0IFwiLi9jb2x1bW4tZmlsdGVyLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbnRleHQgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uOiBJVGFibGVDb2x1bW4sIHByaXZhdGUgZGF0YVByb3ZpZGVyT3duZXI6IElEYXRhUHJvdmlkZXJPd25lcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2hvd0ZpbHRlcjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSB2YWx1ZTogYW55O1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10gfSkgZmlsdGVySXRlbXM6IEFycmF5PENvbHVtbkZpbHRlckl0ZW0+O1xuICBcbiAgICBhcHBseSgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpbHRlckl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uZ2V0RmlsdGVyVmFsdWUoKSk7XG4gICAgfVxuICAgIGFkZEl0ZW0gPSAoY29sdW1uOiBJVGFibGVDb2x1bW4pID0+IHtcbiAgICAgIC8vIGZpbHRlclZhbHVlLm9wLnN1YnNjcmliZShvID0+IHtpZihvID09PSBcIkVRXCIpIGZpbHRlclZhbHVlLnZhbHVlKG51bGwpOyB0aGlzLmFwcGx5KCl9KTtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXMucHVzaChuZXcgQ29sdW1uRmlsdGVySXRlbSh0aGlzLmNvbHVtbiwgKGNvbHVtbiwgZmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICB0aGlzLmRhdGFQcm92aWRlck93bmVyLmRhdGFQcm92aWRlci5nZXRDb2x1bW5EYXRhKGNvbHVtbiwgZmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBjYWxsYmFjayk7XG4gICAgICB9KSk7XG4gICAgICB0aGlzLnNob3dGaWx0ZXIgPSB0cnVlO1xuICAgIH07XG4gICAgcmVtb3ZlSXRlbSA9IChpdGVtOiBDb2x1bW5GaWx0ZXJJdGVtKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RmlsdGVySXRlbXMgPSB0aGlzLmZpbHRlckl0ZW1zO1xuICAgICAgY3VycmVudEZpbHRlckl0ZW1zLnNwbGljZShjdXJyZW50RmlsdGVySXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICB0aGlzLnNob3dGaWx0ZXIgPSAhIWN1cnJlbnRGaWx0ZXJJdGVtcy5sZW5ndGg7ICAgIFxuICAgICAgdGhpcy52YWx1ZSA9IGN1cnJlbnRGaWx0ZXJJdGVtcy5tYXAoaSA9PiBpLmZpbHRlckl0ZW1WYWx1ZSk7XG4gICAgfSAgICBcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSUFnZ3JlZ2F0ZSB9IGZyb20gXCIuLi9maW5kXCI7XG5pbXBvcnQgeyBJRGF0YVByb3ZpZGVyT3duZXIgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YS1wcm92aWRlclwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIC8vIGZpbHRlcjogYW55O1xuICAgIC8vIGZpbHRlckNvbnRleHQ6IEZpbHRlckNvbnRleHQsXG4gICAgLy8gb3JkZXI6IHN0cmluZyxcbiAgICAvLyBjb3VudDogbnVtYmVyLFxuICAgIC8vIHByZXY6IElUYWJsZUNlbGwsXG4gICAgLy8gcHJldlZhbHVlOiBhbnksXG4gICAgLy8gY29uY2F0UHJldjogYm9vbGVhbixcbiAgICAvLyBsYXN0OiBJVGFibGVDZWxsLFxuICAgIC8vIHJvd19jb2xvcjogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1uIGV4dGVuZHMgSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24ge1xuICAgIC8vIG5hbWU6IHN0cmluZztcbiAgICAvLyB0aXRsZTogc3RyaW5nO1xuICAgIC8vIHR5cGU6IHN0cmluZztcbiAgICAvLyB2aXNpYmxlOiBib29sZWFuO1xuICAgIGZpbHRlcjogYW55O1xuICAgIGZpbHRlckNvbnRleHQ6IEZpbHRlckNvbnRleHQsXG4gICAgb3JkZXI6IGJvb2xlYW4sXG4gICAgc3VtbWFyeVZhbHVlOiBhbnksXG4gICAgc3VtbWFyeVBhcmFtczogSUFnZ3JlZ2F0ZSxcbiAgICBjb3VudDogbnVtYmVyLFxuICAgIHByZXY6IElUYWJsZUNlbGwsXG4gICAgcHJldlZhbHVlOiBhbnksXG4gICAgY29uY2F0UHJldjogYm9vbGVhbixcbiAgICBsYXN0OiBJVGFibGVDZWxsLFxuICAgIHJvd19jb2xvcjogc3RyaW5nLFxuICAgIGNsaWNrRmlsdGVyOiAoY29sdW1uOiBJVGFibGVDb2x1bW4sIGV2ZW50OiBNb3VzZUV2ZW50fGFueSkgPT4gdm9pZCxcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlQ29sdW1uIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElUYWJsZUNvbHVtbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2x1bW5EZXNjcmlwdGlvbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24sIHByaXZhdGUgdGFibGU6IElEYXRhUHJvdmlkZXJPd25lcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3Qua2V5cyhjb2x1bW5EZXNjcmlwdGlvbiB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYoY29sdW1uRGVzY3JpcHRpb25ba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29sdW1uRGVzY3JpcHRpb25ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMubmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlckNvbnRleHQgPSBuZXcgRmlsdGVyQ29udGV4dCh0aGlzLCB0YWJsZSk7XG4gICAgfVxuXG4gICAgZmlsdGVyOiBhbnk7XG4gICAgZmlsdGVyQ29udGV4dDogRmlsdGVyQ29udGV4dDtcbiAgICBAcHJvcGVydHkoKSBvcmRlcjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBzdW1tYXJ5VmFsdWU6IGFueTtcbiAgICBAcHJvcGVydHkoeyBvblNldDogKHZhbDogSUFnZ3JlZ2F0ZSwgdGFyZ2V0OiBUYWJsZUNvbHVtbikgPT4ge1xuICAgICAgICB0YXJnZXQuY2FsY3VsYXRlU3VtbWFyeSh0YXJnZXQpO1xuICAgIH19KSBzdW1tYXJ5UGFyYW1zOiBJQWdncmVnYXRlO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgcHJldjogYW55O1xuICAgIHByZXZWYWx1ZTogYW55O1xuICAgIGNvbmNhdFByZXY6IGJvb2xlYW47XG4gICAgbGFzdDogYW55O1xuICAgIHJvd19jb2xvcjogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZyA9IFwic3RyaW5nXCI7XG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgY2xpY2tGaWx0ZXIgPSAoY29sdW1uOiBJVGFibGVDb2x1bW4sIGV2ZW50OiBNb3VzZUV2ZW50fGFueSkgPT4ge1xuICAgICAgICBjb2x1bW4uZmlsdGVyQ29udGV4dC5hZGRJdGVtKGNvbHVtbik7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVN1bW1hcnkoY29sdW1uOiBJVGFibGVDb2x1bW4pOiB2b2lkIHtcbiAgICAgICAgaWYoY29sdW1uLnN1bW1hcnlQYXJhbXMgJiYgY29sdW1uLnN1bW1hcnlQYXJhbXMuZmllbGQgPT09IGNvbHVtbi5uYW1lICYmIGNvbHVtbi5zdW1tYXJ5UGFyYW1zLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGUuZGF0YVByb3ZpZGVyLmdldFN1bW1hcnkoY29sdW1uLnN1bW1hcnlQYXJhbXMuZnVuYywgY29sdW1uLnN1bW1hcnlQYXJhbXMuZmllbGQsIHRoaXMudGFibGVbXCJ0YWJsZUZpbHRlclwiXSwgKGRhdGEpID0+IGNvbHVtbi5zdW1tYXJ5VmFsdWUgPSBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgfVxufSIsImltcG9ydCBcIi4vZmlsdGVyLWRlZmF1bHQuc2Nzc1wiO1xuXG5cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBGaWx0ZXJJdGVtVmFsdWUgfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxuaW1wb3J0IFwiLi9maWx0ZXItc2VsZWN0LnNjc3NcIjtcblxuXG5mdW5jdGlvbiBjb252ZXJzaW9uQnlUeXBlKHZhbHVlOmFueSwgY29sdW1uVHlwZTogc3RyaW5nKTpzdHJpbmd7XG4gICAgaWYoY29sdW1uVHlwZSA9PT1cImJvb2xcIikgcmV0dXJuIHZhbHVlP1wiWWVzXCI6XCJOb1wiO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyU2VhcmNoQnlUeXBlKGNvbHVtblR5cGU6IHN0cmluZyk6Ym9vbGVhbntcbiAgICBpZihjb2x1bW5UeXBlID09PVwiYm9vbFwiKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIFRhYmxlRmlsdGVyU2VsZWN0IGV4dGVuZHMgQmFzZSB7XG4gICAgcHJpdmF0ZSBsaW1pdDogbnVtYmVyID0gMTA7XG4gICAgcHJpdmF0ZSBvZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlOiBGaWx0ZXJJdGVtVmFsdWUsICBwcml2YXRlIGNvbHVtbk5hbWU6IHN0cmluZywgcHJpdmF0ZSBjb2x1bW5UeXBlOiBzdHJpbmcsIHByaXZhdGUgZ2V0Q29sdW1uRGF0YTogKG5hbWU6IHN0cmluZywgZmlsdGVyVmFsdWU6IGFueSwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNhbGxiYWNrIDogKGl0ZW1zOiBhbnlbXSkgPT4gdm9pZCkgPT4gdm9pZCwgaXNPcGVuPzogYm9vbGVhbiwgcHVibGljIHRpdGxlOiBzdHJpbmcgPSBcIlwiLCBwdWJsaWMgbW9yZVRleHQ6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYoaXNPcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gaXNPcGVuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRm91bmRJdGVtcyhudWxsKTtcbiAgICAgICAgdGhpcy5pc0ZpbHRlclNlYXJjaEJ5VHlwZSA9IGZpbHRlclNlYXJjaEJ5VHlwZShjb2x1bW5UeXBlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVGb3VuZEl0ZW1zKGZpbHRlclZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5mb3VuZEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5nZXRDb2x1bW5EYXRhKHRoaXMuY29sdW1uTmFtZSwgZmlsdGVyVmFsdWUsIHRoaXMubGltaXQsIHRoaXMub2Zmc2V0LCBpdGVtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kSXRlbXMgPSBpdGVtcy5tYXAoaSA9PiB7cmV0dXJuIHtuYW1lOiBjb252ZXJzaW9uQnlUeXBlKGksIHRoaXMuY29sdW1uVHlwZSksIHZhbHVlOiBpfX0pO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRNb3JlID0gaXRlbXMubGVuZ3RoID09PSB0aGlzLmxpbWl0O1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gMTA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb2x1bW5EYXRhKHRoaXMuY29sdW1uTmFtZSwgdGhpcy5maWx0ZXJUZXh0LCB0aGlzLmxpbWl0LCB0aGlzLm9mZnNldCwgaXRlbXMgPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpID0+IHRoaXMuZm91bmRJdGVtcy5wdXNoKGkpKVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRNb3JlID0gaXRlbXMubGVuZ3RoID09PSB0aGlzLmxpbWl0O1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gMTA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzT3BlbjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzRmlsdGVyU2VhcmNoQnlUeXBlOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNMb2FkTW9yZTogYm9vbGVhbjtcbiAgICB0b2dnbGUgPSAoXywgZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdLCBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZUZpbHRlclNlbGVjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNldCBmaWx0ZXIgdmFsdWUgdG8gXCIgKyBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICAgICAgdGFyZ2V0LnZhbHVlLnZhbHVlID0gdGFyZ2V0LnNlbGVjdGVkSXRlbXM7XG4gICAgfSB9KSBzZWxlY3RlZEl0ZW1zOiBBcnJheTxhbnk+O1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10gfSkgZm91bmRJdGVtczogQXJyYXk8YW55PjtcbiAgICBAcHJvcGVydHkoeyBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZUZpbHRlclNlbGVjdCkgPT4ge1xuICAgICAgICB0YXJnZXQudXBkYXRlRm91bmRJdGVtcyh2YWwpO1xuICAgIH0sIH0pIGZpbHRlclRleHQ6IHN0cmluZztcbiAgICBpc0NoZWNrZWQgPSAoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSkgIT09IC0xO1xuICAgIH1cbiAgICBjbGlja0l0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYoaXRlbUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVJdGVtcyhpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUudmFsdWUgPSB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGk9PmkudmFsdWUpO1xuICAgICAgICBpZihBcnJheS5pc0FycmF5KHRoaXMudmFsdWUudmFsdWUpICYmIHRoaXMudmFsdWUudmFsdWUubGVuZ3RoID09PSAwKSB0aGlzLnZhbHVlLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBkZWxldGVJdGVtcyA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKG5hbWUpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb24sIElBY3Rpb24gfSBmcm9tIFwiLi4vY29yZS9hY3Rpb25cIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IENvbXB1dGVkVXBkYXRlciB9IGZyb20gXCIuLi9jb3JlL2RlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHsgSW5wbGFjZUVkaXRvciB9IGZyb20gXCIuL2NlbGwtZWRpdG9yXCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsLCBUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4sIElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uLCBUYWJsZUNvbHVtbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuaW1wb3J0IHsgU2VhcmNoTW9kZWwgfSBmcm9tIFwiLi9zZWFyY2hcIjtcbmltcG9ydCB7IElEYXRhUHJvdmlkZXIsIElEYXRhUHJvdmlkZXJPd25lciB9IGZyb20gXCIuLi91dGlscy9kYXRhLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBBcnJheURhdGFQcm92aWRlciB9IGZyb20gXCIuLi91dGlscy9hcnJheS1kYXRhLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBJVGFibGVSb3csIElUYWJsZVJvd0RhdGEsIFRhYmxlUm93IH0gZnJvbSBcIi4vcm93XCI7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgeyBGaWx0ZXJJdGVtVmFsdWUgfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbi8qKlxuICogUGFyYW1ldGVycyBmb3IgY3VzdG9taXppbmcgdGhlIHRhYmxlIHZpZXcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29uZmlnIGV4dGVuZHMgSURhdGFQcm92aWRlciB7XG4gICAgLyoqIERlc2NyaXB0aW9uIG9mIGNvbHVtbnMgKi9cbiAgICBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5EZXNjcmlwdGlvbj47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZGlzcGxheSB0aGUgc2VhcmNoIGJhciAqL1xuICAgIGVuYWJsZVNlYXJjaD86IGJvb2xlYW47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZGlzcGxheSBzdW1tYXJ5IHBhbmVsICovXG4gICAgZW5hYmxlU3VtbWFyeT86IGJvb2xlYW47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZGlzcGxheSBtZXJnZWQgY2VsbHMgdG9nZ2xlICovXG4gICAgZW5hYmxlTWVyZ2Vk0KFlbGxzVG9nZ2xlPzogYm9vbGVhbjtcbiAgICAvKiogVGhlIHByaW1hcnkgdmFsdWUgb2YgdGhlIHBhcmFtZXRlciBmb3IgbWVyZ2luZyBjZWxscyAqL1xuICAgIGVuYWJsZU1lcmdlZNChZWxscz86IGJvb2xlYW47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZWRpdCBkYXRhICovXG4gICAgZW5hYmxlRWRpdD86IGJvb2xlYW47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZGlzcGxheSB0aGUgdGFibGUgYWN0aW9ucyBwYW5lbCAqL1xuICAgIGFjdGlvbnM/OiBBcnJheTxJQWN0aW9uPjtcbiAgICAvKiogVGhlIGtleSBmaWVsZCBvZiB0aGUgdGFibGUuIE5lZWRlZCB0byBlZGl0IHRoZSB0YWJsZS4gKi9cbiAgICBrZXlDb2x1bW4/OiBzdHJpbmc7XG4gICAgLyoqIFNldHRpbmcgdGhlIGNvbG9yIGZvciBzZWxlY3RlZCBjZWxscyBpbiBjYXNlIHRoZSBzZWxlY3Rpb24gaXMgc2V0IHVzaW5nIGFuIGF0dGFjaGVkIGJvb2xlYW4gY29sdW1uLiBUaGUgY29sb3IgaXMgc2V0IGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgQ1NTLiAqL1xuICAgIHNlbGVjdENlbGxDb2xvcj86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElUYWJsZUZpbHRlciB7XG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBvcDogc3RyaW5nLFxuICAgIGZpZWxkOiBzdHJpbmcsXG59XG5cbi8qKlxuICogQ3JlYXRlcyBUYWJsZSBjbGFzcy5cbiAqIEBwYXJhbSBjb25maWcgLSB0YWJsZSBvcHRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGFibGUgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSURhdGFQcm92aWRlck93bmVyIHtcbiAgICBwcml2YXRlIHNjcm9sbGVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZXNpemVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0YWJsZUVsZW1lbnQ6IEhUTUxUYWJsZUVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGlubmVyQWN0aW9uczogQXJyYXk8SUFjdGlvbj4gPSBbXTtcbiAgICBwdWJsaWMgaWNvbnMgPSBJY29ucztcbiAgICBwcml2YXRlIGZpbHRlclVwZGF0ZXI6IENvbXB1dGVkVXBkYXRlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcm93SGVpZ2h0ID0gMjA7IC8vIFRPRE86IHdlIG5lZWQgdG8gY2FsY3VsYXRlIHJvdyBoZWlnaHQgc29tZWhvdyBiZWZvcmVoYW5kXG5cbiAgICBwcml2YXRlIHVwZGF0ZUJ5RmlsdGVyKCkge1xuICAgICAgICBjb25zdCBpc09sZEZpbHRlciA9ICh0aGlzLnRhYmxlRmlsdGVyICYmIHRoaXMudGFibGVGaWx0ZXIubGVuZ3RoID4gMCk7XG4gICAgICAgIHRoaXMudGFibGVGaWx0ZXIgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoTW9kZWwuc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIucHVzaCh7IHZhbHVlOiB0aGlzLnNlYXJjaE1vZGVsLnNlYXJjaFZhbHVlLCBvcDogXCJDXCIsIGZpZWxkOiBudWxsIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uRmlsdGVyVmFsdWUgPSBjb2x1bW4uZmlsdGVyQ29udGV4dC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5GaWx0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbkZpbHRlclZhbHVlLmZvckVhY2goKGZpdjogRmlsdGVySXRlbVZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gZml2Lm9wO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBmaXYudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgob3AgPT09IFwiRVFcIiAmJiB2YWwpIHx8IChvcCA9PT0gXCJDXCIgJiYgdmFsKSB8fCAob3AgPT09IFwiSVNOXCIpIHx8IChvcCA9PT0gXCJJU05OXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5wdXNoKHsgdmFsdWU6IHZhbCwgb3A6IG9wLCBmaWVsZDogZml2LmZpZWxkIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCh0aGlzLnRhYmxlRmlsdGVyLmxlbmd0aCA+IDApIHx8IChpc09sZEZpbHRlciAmJiB0aGlzLnRhYmxlRmlsdGVyLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTW9kZWwucHJldlNlYXJjaFZhbHVlID0gdGhpcy5zZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogSVRhYmxlQ29uZmlnLCBlbGVtZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaG93U2VhcmNoID0gY29uZmlnLmVuYWJsZVNlYXJjaCA9PT0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jcmVhdGVBY3Rpb25zKHRoaXMuY29uZmlnKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKHRoaXMuY29uZmlnKTtcblxuICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZXIgPSBuZXcgQ29tcHV0ZWRVcGRhdGVyKCgpID0+IHRoaXMudXBkYXRlQnlGaWx0ZXIoKSk7XG4gICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlci5vYnNlcnZlKHRoaXMsIFwiX19maWx0ZXJVcGRhdGVyVmFsdWVcIik7IC8vIFRPRE86IG1ha2UgaXQgZWxlZ2FudFxuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZXIgPSAoKSA9PiB0aGlzLnVwZGF0ZUJ5RmlsdGVyKCk7XG4gICAgICAgIGlmICghIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNNZXJnZWTQoWVsbHMgPSBjb25maWcuZW5hYmxlTWVyZ2Vk0KFlbGxzO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxlckVsZW1lbnQgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsZTRqcy10YWJsZS1zY3JvbGwtY29udGFpbmVyXCIpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICB0aGlzLnRhYmxlRWxlbWVudCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKVswXSBhcyBIVE1MVGFibGVFbGVtZW50O1xuICAgICAgICB0aGlzLnJlc2l6ZXJFbGVtZW50ID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFibGU0anMtdGFibGVcIilbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgdmFyIGNoZWNrTG9hZGluZyA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHNlbGYucGFydFJvd0NvdW50ID0gTWF0aC5yb3VuZChzZWxmLnNjcm9sbGVyRWxlbWVudC5jbGllbnRIZWlnaHQgLyBUYWJsZS5yb3dIZWlnaHQpO1xuICAgICAgICAgICAgaWYgKHNlbGYuc2Nyb2xsZXJFbGVtZW50LnNjcm9sbFRvcCA8IFRhYmxlLnJvd0hlaWdodCAmJiBzZWxmLmxhc3RPZmZzZXRCYWNrID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICgoc2VsZi5sYXN0T2Zmc2V0QmFjayAtIHNlbGYucGFydFJvd0NvdW50KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3Um93cyhzZWxmLmxhc3RPZmZzZXRCYWNrLCBNYXRoLm1heCgwLCBzZWxmLmxhc3RPZmZzZXRCYWNrIC0gc2VsZi5wYXJ0Um93Q291bnQpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1Jvd3Moc2VsZi5wYXJ0Um93Q291bnQsIE1hdGgubWF4KDAsIHNlbGYubGFzdE9mZnNldEJhY2sgLSBzZWxmLnBhcnRSb3dDb3VudCksIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoc2VsZi5zY3JvbGxlckVsZW1lbnQuc2Nyb2xsVG9wID49IHNlbGYudGFibGVFbGVtZW50LmNsaWVudEhlaWdodCAtIHNlbGYuc2Nyb2xsZXJFbGVtZW50LmNsaWVudEhlaWdodCkgJiYgdGhpcy5sb2FkTW9yZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZHJhd1Jvd3Moc2VsZi5wYXJ0Um93Q291bnQsIHNlbGYubGFzdE9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsZXJFbGVtZW50Lm9uc2Nyb2xsID0gY2hlY2tMb2FkaW5nO1xuICAgICAgICB0aGlzLnJlc2l6ZXJFbGVtZW50Lm9ucmVzaXplID0gY2hlY2tMb2FkaW5nO1xuICAgICAgICBjaGVja0xvYWRpbmcoKTtcblxuICAgICAgICBpZiAodHlwZW9mIFJlc2l6ZU9ic2VydmVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS50YXJnZXQudGFnTmFtZSA9PT0gXCJUSEVBRFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuY29udGVudFJlY3Qud2lkdGggPCA3MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFibGU0anMtdGFibGUtLXNtYWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRhYmxlNGpzLXRhYmxlLS1zbWFsbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVIZWFkSGVpZ2h0ID0gZW50cnkuY29udGVudFJlY3QuaGVpZ2h0ICsgNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhlYWRcIilbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNob3dEZXRhaWwocm93RGF0YTogSVRhYmxlUm93RGF0YSkge1xuICAgICAgICB0aGlzLmlzU2hvd0RldGFpbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhpZGVEZXRhaWwoKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kZWRSb3dLZXkgPSBudWxsO1xuICAgICAgICB0aGlzLmlzU2hvd0RldGFpbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG8oc3RhcnRSb3c6IG51bWJlcikge1xuICAgICAgICBpZiAoc3RhcnRSb3cpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldEJhY2sgPSBzdGFydFJvdyAtIDE7XG4gICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXQgPSBzdGFydFJvdyAtIDE7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHsgYy5jb3VudCA9IG51bGw7IGMucHJldiA9IG51bGw7IGMucHJldlZhbHVlID0gdW5kZWZpbmVkOyBjLmxhc3QgPSBudWxsIH0pO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgICAgICAgICB0aGlzLmRyYXdSb3dzKHRoaXMucGFydFJvd0NvdW50LCBzdGFydFJvdyAtIDEsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZURldGFpbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbHVtbihjb2x1bW46IGFueSwgbW9kZWw6IElUYWJsZUNvbmZpZyk6IElUYWJsZUNvbHVtbiB7XG4gICAgICAgIHJldHVybiBuZXcgVGFibGVDb2x1bW4oY29sdW1uLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29sdW1ucyhjb25maWc6IElUYWJsZUNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb25maWcuY29sdW1ucy5tYXAoY29sdW1uID0+XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbihjb2x1bW4sIGNvbmZpZylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQWN0aW9ucyhjb25maWc6IElUYWJsZUNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLmVuYWJsZVN1bW1hcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJBY3Rpb25zLnB1c2gobmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzdW1tYXJ5LWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUYWJsZVN1bW1hcnkgPSAhdGhpcy5zaG93VGFibGVTdW1tYXJ5O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLmVxdWFsLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJ0b3BcIlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuZW5hYmxlTWVyZ2Vk0KFlbGxzVG9nZ2xlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmlubmVyQWN0aW9ucy5wdXNoKG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibWVyZ2Vk0KFlbGxzLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTWVyZ2Vk0KFlbGxzID0gIXRoaXMuaXNNZXJnZWTQoWVsbHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMudGFibGUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcInRvcFwiXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5lbmFibGVFZGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmlubmVyQWN0aW9ucy5wdXNoKG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2F2ZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzSW5zZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGlmeSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIubnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY2VsbHMuZm9yRWFjaChjID0+IGMudGV4dCAhPT0gYy5kYXRhICYmIChtb2RpZnlbYy5uYW1lXSA9IGMudGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eShtb2RpZnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFQcm92aWRlci5zYXZlRGF0YSh0aGlzLmtleUNvbHVtbiwgci5yb3dEYXRhW3RoaXMua2V5Q29sdW1uXSwgbW9kaWZ5KSkgci5jZWxscy5mb3JFYWNoKGMgPT4gYy5kYXRhID0gYy50ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jZWxscy5mb3JFYWNoKGMgPT4gbW9kaWZ5W2MubmFtZV0gPSBjLnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFQcm92aWRlci5pbnNlcnREYXRhKHRoaXMua2V5Q29sdW1uLCBtb2RpZnkpKSBpc0luc2VydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnNlcnQpIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLnNhdmUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcImJvdHRvbVwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBuZXcgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZWxldGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5udW1iZXIgPiAwKSB0aGlzLnJvd3Muc2xpY2UodGhpcy5yb3dzLmluZGV4T2YociksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyLmRlbGV0ZURhdGEodGhpcy5rZXlDb2x1bW4sIHRoaXMuc2VsZWN0ZWRSb3dzLm1hcChyID0+IHIubnVtYmVyID4gMCAmJiByLnJvd0RhdGFbdGhpcy5rZXlDb2x1bW5dKSwgKF8gPT4gdGhpcy5yZWZyZXNoKCkpKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuZGVsLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBuZXcgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuZXdSb3ctYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY3JvbGxlckVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdSb3c6IElUYWJsZVJvd0RhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4gYy52aXNpYmxlICYmIChuZXdSb3dbYy5uYW1lXSA9IFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93cy51bnNoaWZ0KHRoaXMuY3JlYXRlUm93KG5ld1JvdywgLTEsIG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLmFkZCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBcImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RhdGFQcm92aWRlcjogSURhdGFQcm92aWRlciA9IHVuZGVmaW5lZDtcbiAgICBnZXQgZGF0YVByb3ZpZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVByb3ZpZGVyIHx8IHRoaXMuY29uZmlnO1xuICAgIH1cbiAgICBzZXQgZGF0YVByb3ZpZGVyKHByb3ZpZGVyOiBJRGF0YVByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgZGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIFtdO1xuICAgIC8vIH1cbiAgICBzZXQgZGF0YShfZGF0YTogQXJyYXk8YW55Pikge1xuICAgICAgICB0aGlzLmRhdGFQcm92aWRlciA9IG5ldyBBcnJheURhdGFQcm92aWRlcihfZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMubGFzdE9mZnNldEJhY2sgPSAwO1xuICAgICAgICB0aGlzLmxhc3RPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHsgYy5jb3VudCA9IG51bGw7IGMucHJldiA9IG51bGw7IGMucHJldlZhbHVlID0gdW5kZWZpbmVkOyB9KTtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgICAgIHRoaXMuZHJhd1Jvd3ModGhpcy5wYXJ0Um93Q291bnQsIDAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5oaWRlRGV0YWlsKCk7XG4gICAgfVxuXG4gICAgZHJhd1Jvd3MobGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGJhY2sgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGluZ011dGV4KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdNdXRleCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRhdGFQcm92aWRlci5nZXREYXRhKFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKGMgPT4gYy5vcmRlciAhPT0gdW5kZWZpbmVkKS5tYXAoYyA9PiA8YW55PnsgZmllbGQ6IGMubmFtZSwgZGVzYzogYy5vcmRlciB9KSxcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLFxuICAgICAgICAgICAgICAgIG51bGwgLyomJiB0aGlzLnBpbm5lZFJvd0tleSgpKi8sXG4gICAgICAgICAgICAgICAgYmFjayxcbiAgICAgICAgICAgICAgICAoZGF0YSwgbmV3T2Zmc2V0OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgYmFjazogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0QmFjayA9IHRoaXMubGFzdE9mZnNldEJhY2sgLSBsaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldCA9IHRoaXMubGFzdE9mZnNldCArIGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmVCYWNrID0gdGhpcy5sYXN0T2Zmc2V0QmFjayA+IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmUgPSB0aGlzLmxhc3RPZmZzZXQgPD0gdG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJvd3MgPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIChkYXRhIHx8IFtdKS5mb3JFYWNoKChkYXRhSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb3cgPSB0aGlzLmNyZWF0ZVJvdyhiYWNrID8gZGF0YVtkYXRhLmxlbmd0aCAtIDEgLSBOdW1iZXIoaW5kZXgpXSA6IGRhdGFJdGVtLCBiYWNrID8gZGF0YS5sZW5ndGggLSAxIC0gTnVtYmVyKGluZGV4KSArIG9mZnNldCA6IE51bWJlcihpbmRleCkgKyBvZmZzZXQsIGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2spIHsgY3VycmVudFJvd3MudW5zaGlmdChuZXdSb3cpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgY3VycmVudFJvd3MucHVzaChuZXdSb3cpOyB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdNdXRleCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsaWNrUm93KHJvdzogSVRhYmxlUm93LCBldmVudCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5mb3JFYWNoKHIgPT4gci5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2VsZWN0Um93KHJvdzogSVRhYmxlUm93LCBldmVudCkge1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSAhcm93LnNlbGVjdGVkO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5sYXN0U2VsZWN0Um93KSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MuZmlsdGVyKGUgPT4gZS5udW1iZXIgPj0gTWF0aC5taW4odGhpcy5sYXN0U2VsZWN0Um93Lm51bWJlciwgcm93Lm51bWJlcikgJiYgZS5udW1iZXIgPD0gTWF0aC5tYXgodGhpcy5sYXN0U2VsZWN0Um93Lm51bWJlciwgcm93Lm51bWJlcikpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goZSA9PiBlLnNlbGVjdGVkID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdy5zZWxlY3RlZCkgdGhpcy5sYXN0U2VsZWN0Um93ID0gcm93O1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3MubGVuZ3RoICE9PSAxKSB0aGlzLmhpZGVEZXRhaWwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xpY2tDb2x1bW4gPSAoY29sdW1uOiBJVGFibGVDb2x1bW4sIGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzU2hvd0RldGFpbCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlRGV0YWlsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld09yZGVyID0gY29sdW1uLm9yZGVyID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICFjb2x1bW4ub3JkZXI7XG4gICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5tYXAoKGMpID0+IGMub3JkZXIgPSB1bmRlZmluZWQpXG4gICAgICAgIH1cbiAgICAgICAgY29sdW1uLm9yZGVyID0gbmV3T3JkZXIgYXMgYW55OyAvLyBUT0RPOiBzb21ldGhpbmcgd3JvbmcgaXMgaGVyZVxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUm93KGRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0sIG51bTogbnVtYmVyLCBiYWNrOiBib29sZWFuKTogSVRhYmxlUm93IHtcbiAgICAgICAgbGV0IHJvd0NlbGxzID0gW107XG4gICAgICAgIGxldCBsYXN0VGV4dCA9IG51bGw7XG4gICAgICAgIGxldCBjb2xvckNlbGwgPSBudWxsLCBjb2xvclJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMuY29sdW1ucy5yZXZlcnNlKCkuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBuZXcgVGFibGVDZWxsKCk7XG4gICAgICAgICAgICBjZWxsLmluaXRpYWxpemUoY29sLCBiYWNrLCBkYXRhLCBjb2xvckNlbGwpO1xuICAgICAgICAgICAgaWYgKCEhbGFzdFRleHQpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHQgKz0gKFwiL1wiICsgbGFzdFRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdFRleHQgPSAoY29sLmNvbmNhdFByZXYgJiYgIWNvbC5yb3dfY29sb3IpID8gY2VsbC50ZXh0IDogbnVsbDtcbiAgICAgICAgICAgIGNvbG9yUm93ID0gKGNvbC5yb3dfY29sb3IgJiYgIWNvbC5jb25jYXRQcmV2KSA/IChjb2wudHlwZSA9PT0gXCJib29sXCIgPyAoZGF0YVtjb2wubmFtZV0gPyB0aGlzLmNvbmZpZy5zZWxlY3RDZWxsQ29sb3IgOiBudWxsKSA6IGRhdGFbY29sLm5hbWVdKSA6IGNvbG9yUm93O1xuICAgICAgICAgICAgY29sb3JDZWxsID0gKGNvbC5yb3dfY29sb3IgJiYgY29sLmNvbmNhdFByZXYpID8gKGNvbC50eXBlID09PSBcImJvb2xcIiA/IChkYXRhW2NvbC5uYW1lXSA/IHRoaXMuY29uZmlnLnNlbGVjdENlbGxDb2xvciA6IG51bGwpIDogZGF0YVtjb2wubmFtZV0pIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChjb2wudmlzaWJsZSkgcm93Q2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29sdW1ucy5yZXZlcnNlKCk7XG4gICAgICAgIGxldCByb3dfaWQgPSBkYXRhW3RoaXMua2V5Q29sdW1uXTtcbiAgICAgICAgY29uc3Qgcm93ID0gbmV3IFRhYmxlUm93KCk7XG4gICAgICAgIHJvdy5jZWxscyA9IHJvd0NlbGxzLnJldmVyc2UoKTtcbiAgICAgICAgcm93LnJvd0RhdGEgPSBkYXRhO1xuICAgICAgICByb3cuaWQgPSByb3dfaWQ7XG4gICAgICAgIHJvdy5udW1iZXIgPSBudW0gKyAxO1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSByb3dfaWQgJiYgKHRoaXMuZXhwYW5kZWRSb3dLZXkgPT09IHJvd19pZCk7XG4gICAgICAgIHJvdy5jb2xvciA9IGNvbG9yUm93O1xuICAgICAgICByb3cuc2VsZWN0ID0gKGRhdGEsIGV2ZW50KSA9PiB0aGlzLnNlbGVjdFJvdyhkYXRhLCBldmVudCksXG4gICAgICAgICAgICByb3cuY2xpY2sgPSAoZGF0YSwgZXZlbnQpID0+IHRoaXMuY2xpY2tSb3coZGF0YSwgZXZlbnQpXG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJvd0V4cGFuZGVkKGlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRFZGl0Q2VsbCA9IChjZWxsOiBJVGFibGVDZWxsKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRDZWxsRWRpdG9yKSB0aGlzLmN1cnJlbnRDZWxsRWRpdG9yLmlucGxhY2VFZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNlbGwuaW5wbGFjZUVkaXRvciA9IG5ldyBJbnBsYWNlRWRpdG9yKGNlbGwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsRWRpdG9yID0gY2VsbDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZUVkaXRDZWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBsZXRlRWRpdENlbGwoKSB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhc0FjdGl2ZUlucGxhY2VFZGl0b3JDb3JlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoYXNBY3RpdmVJbnBsYWNlRWRpdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBY3RpdmVJbnBsYWNlRWRpdG9yQ29yZSgpO1xuICAgIH1cblxuICAgIGN1ckNvbCA9IHVuZGVmaW5lZDtcbiAgICBueHRDb2wgPSB1bmRlZmluZWQ7XG4gICAgcGFnZVggPSB1bmRlZmluZWQ7XG4gICAgbnh0Q29sV2lkdGggPSB1bmRlZmluZWQ7XG4gICAgY3VyQ29sV2lkdGggPSB1bmRlZmluZWRcblxuICAgIHB1YmxpYyBsb2dNb3VzZU92ZXIgPSAoZCwgZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJSaWdodCA9ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJztcbiAgICB9XG4gICAgcHVibGljIGxvZ01vdXNlT3V0ID0gKGQsIGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHQgPSAnJztcbiAgICB9XG4gICAgcHVibGljIGxvZ01vdXNlTW92ZSA9IChkLCBlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmN1ckNvbCAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgIHZhciBkaWZmWCA9IGUucGFnZVggLSB0aGlzLnBhZ2VYO1xuICAgICAgICAgICAgdGhpcy5ueHRDb2wgJiYgKHRoaXMubnh0Q29sLnN0eWxlLndpZHRoID0gKHRoaXMubnh0Q29sV2lkdGggLSAoZGlmZlgpKSArICdweCcpO1xuICAgICAgICAgICAgdGhpcy5jdXJDb2wuc3R5bGUud2lkdGggPSAodGhpcy5jdXJDb2xXaWR0aCArIGRpZmZYKSArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGxvZ01vdXNlRG93biA9IChkLCBlKSA9PiB7XG4gICAgICAgIHRoaXMuY3VyQ29sID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5ueHRDb2wgPSB0aGlzLmN1ckNvbC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nID8gdGhpcy5jdXJDb2wubmV4dEVsZW1lbnRTaWJsaW5nIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhZ2VYID0gZS5wYWdlWDtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSB0aGlzLnBhZGRpbmdEaWZmKHRoaXMuY3VyQ29sKTtcbiAgICAgICAgdGhpcy5jdXJDb2xXaWR0aCA9IHRoaXMuY3VyQ29sLm9mZnNldFdpZHRoIC0gcGFkZGluZztcbiAgICAgICAgaWYgKHRoaXMubnh0Q29sKSB0aGlzLm54dENvbFdpZHRoID0gdGhpcy5ueHRDb2wub2Zmc2V0V2lkdGggLSBwYWRkaW5nO1xuICAgIH1cbiAgICBwdWJsaWMgbG9nTW91c2VVcCA9IChkLCBlKSA9PiB7XG4gICAgICAgIHRoaXMuY3VyQ29sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm54dENvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wYWdlWCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ueHRDb2xXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jdXJDb2xXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwYWRkaW5nRGlmZihjb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3R5bGVWYWwoY29sLCAnYm94LXNpemluZycpID09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhZExlZnQgPSB0aGlzLmdldFN0eWxlVmFsKGNvbCwgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICB2YXIgcGFkUmlnaHQgPSB0aGlzLmdldFN0eWxlVmFsKGNvbCwgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgcmV0dXJuIChwYXJzZUludChwYWRMZWZ0KSArIHBhcnNlSW50KHBhZFJpZ2h0KSk7XG4gICAgfVxuICAgIGdldFN0eWxlVmFsKGVsbSwgY3NzKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbG0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoY3NzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcm9vdExldmVsOiBhbnkgPSB0cnVlO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNOdW1iZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc01lcmdlZNChZWxsczogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGxvYWRpbmdNdXRleDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IHRydWUgfSkgbG9hZE1vcmU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBsb2FkTW9yZUJhY2s6IGJvb2xlYW47XG4gICAgbGFzdE9mZnNldCA9IDA7XG4gICAgbGFzdE9mZnNldEJhY2sgPSAwO1xuICAgIHBhcnRSb3dDb3VudCA9IDEwO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogW10sIG9uU2V0OiAodmFsOiBJVGFibGVDb2x1bW5bXSwgdGFyZ2V0OiBUYWJsZSkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LnZpZXdGaWx0ZXJUYWJsZSA9IG5ldyBDb21wdXRlZFVwZGF0ZXIoKCkgPT4gdmFsLmZpbHRlcihjID0+IGMuZmlsdGVyQ29udGV4dC5zaG93RmlsdGVyKS5sZW5ndGggPiAwKSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICB9KSBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+O1xuICAgIGdldCBrZXlDb2x1bW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmtleUNvbHVtbjtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSB9KSByb3dzOiBBcnJheTxJVGFibGVSb3c+O1xuICAgIGdldCBzZWxlY3RlZFJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd3MuZmlsdGVyKHIgPT4gci5zZWxlY3RlZCk7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2hvd1RhYmxlU3VtbWFyeTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHNob3dTZWFyY2g6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgb25TZXQ6IChuZXdWYWx1ZTogbnVtYmVyLCB0YXJnZXQ6IFRhYmxlKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXQubmF2aWdhdGVUbyhuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KSBzdGFydFJvdzogbnVtYmVyO1xuICAgIGxhc3RTZWxlY3RSb3cgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogMCB9KSB0b3RhbENvdW50OiBudW1iZXI7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiAwIH0pIHRhYmxlSGVhZEhlaWdodDogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KSBzaG93VGFibGVGaWx0ZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSB2aWV3RmlsdGVyVGFibGU6IGJvb2xlYW47XG4gICAgdGFibGVGaWx0ZXI6IElUYWJsZUZpbHRlcltdO1xuICAgIGN1cnJlbnRDZWxsRWRpdG9yOiBJVGFibGVDZWxsO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNTaG93RGV0YWlsOiBib29sZWFuO1xuICAgIGV4cGFuZGVkUm93S2V5O1xuXG4gICAgc2VhcmNoTW9kZWwgPSBuZXcgU2VhcmNoTW9kZWwoKTtcblxuICAgIGdldEFjdGlvbnMgPSAoY29udGFpbmVyPzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXS5jb25jYXQodGhpcy5pbm5lckFjdGlvbnMpLmNvbmNhdCh0aGlzLmNvbmZpZy5hY3Rpb25zIHx8IFtdKTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnMuZmlsdGVyKGFjdGlvbiA9PiBhY3Rpb24uY29udGFpbmVyID09PSBjb250YWluZXIpO1xuICAgIH1cbiAgICBnZXQgdG9wQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aW9ucygndG9wJyk7XG4gICAgfVxuICAgIGdldCBkcm9wZG93bkFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdGlvbnMoJ2Ryb3Bkb3duJyk7XG4gICAgfVxuICAgIGdldCBib3R0b21BY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpb25zKCdib3R0b20nKTtcbiAgICB9XG4gICAgZ2V0IG5vRGF0YVRleHQoKSB7XG4gICAgICAgIHJldHVybiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibm9EYXRhXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElUYWJsZUNlbGxUeXBlLCBUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJDZWxsIGltcGxlbWVudHMgSVRhYmxlQ2VsbFR5cGUge1xuICAgIG5hbWU6IHN0cmluZyA9IFwibnVtYmVyXCI7XG4gICAgY3NzOiBzdHJpbmcgPSBcInRhYmxlNGpzLXRhYmxlLWNlbGwtLXJpZ2h0XCJcbn1cblxuVGFibGVDZWxsLnJlZ2lzdGVyQ2VsbFR5cGUobmV3IE51bWJlckNlbGwoKSk7IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbi8qKlxuICogVGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBmb3IgYSB0YWJsZSByb3cuIFRoZSBrZXkgaXMgdGhlIG5hbWUgb2YgdGhlIGNvbHVtbi4gVGhlIHZhbHVlIGlzIHRoZSBjb250ZW50IG9mIHRoZSB0YWJsZSBjZWxsLlxuICovXG4gZXhwb3J0IGludGVyZmFjZSBJVGFibGVSb3dEYXRhIHtcbiAgICAvKiogVGFibGUgY2VsbCBjb250ZW50ICovXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyXG59XG5cblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBuZWVkZWQgdG8gcmVuZGVyIGEgdGFibGUgcm93XG4gKi9cbiBleHBvcnQgaW50ZXJmYWNlIElUYWJsZVJvdyB7XG4gICAgLyoqIEFycmF5IGNvbnRhaW5pbmcgb2JzZXJ2YWJsZSB0YWJsZSBjZWxscyAqL1xuICAgIGNlbGxzOiBBcnJheTxJVGFibGVDZWxsPixcbiAgICAvKiogVGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBmb3IgYSB0YWJsZSByb3cgKi9cbiAgICByb3dEYXRhOiBJVGFibGVSb3dEYXRhLFxuICAgIC8qKiAgKi9cbiAgICBpZDogYW55LFxuICAgIC8qKiAgKi9cbiAgICBudW1iZXI6IG51bWJlcixcbiAgICBzZWxlY3RlZDogYm9vbGVhbixcbiAgICBjb2xvcjogc3RyaW5nLFxuICAgIHNlbGVjdDogKGRhdGE6IElUYWJsZVJvdywgZXZlbnQpID0+IHZvaWQsXG4gICAgY2xpY2s6IChkYXRhOiBJVGFibGVSb3csIGV2ZW50KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVJvdyBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJVGFibGVSb3cge1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10gfSkgY2VsbHM6IElUYWJsZUNlbGxbXTtcbiAgICByb3dEYXRhOiBJVGFibGVSb3dEYXRhO1xuICAgIGlkOiBhbnk7XG4gICAgbnVtYmVyOiBudW1iZXI7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBzZWxlY3RlZDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBjb2xvcjogc3RyaW5nO1xuICAgIHNlbGVjdDogKGRhdGE6IElUYWJsZVJvdywgZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgICBjbGljazogKGRhdGE6IElUYWJsZVJvdywgZXZlbnQ6IGFueSkgPT4gdm9pZDtcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuXG5pbXBvcnQgXCIuL3NlYXJjaC5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2RlbCBleHRlbmRzIEJhc2Uge1xuICAgIHNlYXJjaCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5wcmV2U2VhcmNoVmFsdWUgPSB0aGlzLnNlYXJjaFZhbHVlO1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdGV4dDtcbiAgICAgICAgdGhpcy51cGRhdGVyICYmIHRoaXMudXBkYXRlcigpO1xuICAgIH1cbiAgICB1cGRhdGVyOiAoKSA9PiB2b2lkO1xuICAgIEBwcm9wZXJ0eSgpIHByZXZTZWFyY2hWYWx1ZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIHNlYXJjaFZhbHVlOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5cbmltcG9ydCBcIi4vc3VtbWFyeS5zY3NzXCI7XG5cbmNvbnN0IEZ1bmN0aW9uczogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyBoaW50OiBzdHJpbmcsIHR5cGVzPzogc3RyaW5nW10gfT4gPSAgW1xuICB7IHRpdGxlOiBcIi1cIiwgdmFsdWU6IFwiXCIsIGhpbnQ6IFwiXCIgfSwgXG4gIHsgdGl0bGU6IFwizqNcIiwgdmFsdWU6IFwic3VtXCIsIGhpbnQ6IFwiU3VtIG9mIGNlbGxzIGZvciB0aGlzIHRhYmxlIGNvbHVtblwiLCB0eXBlczogW1wiaW50ZWdlclwiLCBcIm1vbmV5XCIsIFwibnVtYmVyXCJdIH0sIFxuICB7IHRpdGxlOiBcInjMhFwiLCB2YWx1ZTogXCJhdmdcIiwgaGludDogXCJBcml0aG1ldGljIG1lYW4gaW4gdGhpcyB0YWJsZSBjb2x1bW5cIiwgdHlwZXM6IFtcImludGVnZXJcIiwgXCJtb25leVwiLCBcIm51bWJlclwiXSB9LCBcbiAgeyB0aXRsZTogXCJtaW5cIiwgdmFsdWU6IFwibWluXCIsIGhpbnQ6IFwiTWluaW11bSB2YWx1ZSBpbiB0aGlzIHRhYmxlIGNvbHVtblwiLCB0eXBlczogW1wiaW50ZWdlclwiLCBcIm1vbmV5XCIsIFwiZGF0ZVwiLCBcIm51bWJlclwiXSB9LFxuICB7IHRpdGxlOiBcIm1heFwiLCB2YWx1ZTogXCJtYXhcIiwgaGludDogXCJNYXhpbXVtIHZhbHVlIGluIHRoaXMgdGFibGUgY29sdW1uXCIsIHR5cGVzOiBbXCJpbnRlZ2VyXCIsIFwibW9uZXlcIiwgXCJkYXRlXCIsIFwibnVtYmVyXCJdIH0sXG4gIHsgdGl0bGU6IFwizp1cIiwgdmFsdWU6IFwiY291bnRcIiwgaGludDogXCJOdW1iZXIgb2Ygbm9uLWJsYW5rIGNlbGxzIGluIHRoaXMgY29sdW1uXCIgfSxcbiAgeyB0aXRsZTogXCJVXCIsIHZhbHVlOiBcInVuaXF1ZVwiLCBoaW50OiBcIk51bWJlciBvZiB1bmlxdWUgY2VsbHMgaW4gdGhpcyBjb2x1bW5cIiB9LFxuXTtcblxuZXhwb3J0IGNsYXNzIFRhYmxlU3VtbWFyeUl0ZW0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZywgcHVibGljIHZhbHVlOiBzdHJpbmcgKSB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlU3VtbWFyeSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtbjogSVRhYmxlQ29sdW1uKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN1bW1hcnlJdGVtcyA9IEZ1bmN0aW9ucy5maWx0ZXIoZnVuY0Rlc2NyaXB0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuICFmdW5jRGVzY3JpcHRpb24udHlwZXMgfHwgZnVuY0Rlc2NyaXB0aW9uLnR5cGVzLmluZGV4T2YoY29sdW1uLnR5cGUpICE9PSAtMVxuICAgICAgfSkubWFwKGZ1bmNEZXNjcmlwdGlvbiA9PiBuZXcgVGFibGVTdW1tYXJ5SXRlbSAoZnVuY0Rlc2NyaXB0aW9uLnRpdGxlLCBmdW5jRGVzY3JpcHRpb24udmFsdWUpKTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLnN1bW1hcnlWYWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmNvbHVtbi5zdW1tYXJ5VmFsdWUgPSB2YWw7XG4gIH1cbiAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBudWxsLCBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZVN1bW1hcnkpID0+IHtcbiAgICB0YXJnZXQuY29sdW1uLnN1bW1hcnlQYXJhbXMgPSB7IGZ1bmM6IHZhbCwgZmllbGQ6IHRhcmdldC5jb2x1bW4ubmFtZSB9O1xuICB9IH0pIGZ1bmM6IGFueTtcbiAgc3VtbWFyeUl0ZW1zOiBBcnJheTxUYWJsZVN1bW1hcnlJdGVtPjtcbn1cbiIsImltcG9ydCB7IElEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhLXByb3ZpZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBcnJheURhdGFQcm92aWRlciBpbXBsZW1lbnRzIElEYXRhUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhOiBBcnJheTxhbnk+KSB7XG5cbiAgICB9XG5cbiAgICBmaWx0ZXJlZChmaWx0ZXJzLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhPy5maWx0ZXIocm93ID0+IFxuICAgICAgICAgICAgZmlsdGVycy5ldmVyeShmID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZi5vcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRVFcIjogcmV0dXJuIGYudmFsdWUuaW5jbHVkZXMocm93W2YuZmllbGRdKTsgXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDXCI6IHJldHVybiBmLmZpZWxkID8gfnJvd1tmLmZpZWxkXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmLnZhbHVlLnRvVXBwZXJDYXNlKCkpIDogT2JqZWN0LmtleXMocm93KS5zb21lKGsgPT4gISEocm93W2tdICYmIHJvd1trXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmLnZhbHVlLnRvVXBwZXJDYXNlKCkpICE9PSAtMSkpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSVNOXCI6ICByZXR1cm4gIShyb3dbZi5maWVsZF0pOyBcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIklTTk5cIjogIHJldHVybiAhIShyb3dbZi5maWVsZF0pOyBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHRydWU7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICkgPz8gW107XG4gICAgfVxuXG4gICAgZ2V0RGF0YShsaW1pdCwgb2Zmc2V0LCBvcmRlciwgZmlsdGVycywga2V5LCBiYWNrLCBjYWxsYmFjaykge1xuICAgICAgICBmdW5jdGlvbiBzb3J0ZnVuYyhhLCBiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFbb3JkZXJbaV0uZmllbGRdID09PSBiW29yZGVyW2ldLmZpZWxkXSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhW29yZGVyW2ldLmZpZWxkXSA+IGJbb3JkZXJbaV0uZmllbGRdID8gMSA6IC0xKSAqIChvcmRlcltpXS5kZXNjID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIChvcmRlci5sZW5ndGggPiAwKSAmJiB0aGlzLmRhdGEuc29ydChzb3J0ZnVuYyk7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJlZChmaWx0ZXJzLCB0aGlzLmRhdGEpO1xuICAgICAgICBmb3IgKHZhciBpID0gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDA7IGkgPCBvZmZzZXQgKyBsaW1pdCAmJiBmaWx0ZXJlZERhdGEgJiYgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZmlsdGVyZWREYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnMi3RgdC10LrRg9C90LTQvdCw0Y8g0LfQsNC00LXRgNC20LrQsCDQv9GA0L7RiNC70LAnKTtcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrKHJlc3VsdCwgb2Zmc2V0ICsgbGltaXQsIGZpbHRlcmVkRGF0YS5sZW5ndGgsIGJhY2spXG4gICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICBjYWxsYmFjayhyZXN1bHQsIG9mZnNldCArIGxpbWl0LCBmaWx0ZXJlZERhdGEubGVuZ3RoLCBiYWNrKTtcbiAgICB9XG5cbiAgICBnZXRTdW1tYXJ5KGZ1bmMsIGZpZWxkLCBmaWx0ZXJzLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlcmVkKGZpbHRlcnMsIHRoaXMuZGF0YSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBmaWx0ZXJlZERhdGEubGVuZ3RoID8gZmlsdGVyZWREYXRhWzBdW2ZpZWxkXSA6IGZhbHNlO1xuICAgICAgICBsZXQgc3VtID0gMCwgY291bnQgPSAwLCB1bmlxdWVzID0gW107XG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3VtXCI6IHJlc3VsdCA9IHJlc3VsdCArIHJvd1tmaWVsZF07IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhdmdcIjogc3VtID0gc3VtICsgcm93W2ZpZWxkXTsgY291bnQrKzsgcmVzdWx0ID0gc3VtIC8gY291bnQ7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtaW5cIjogcmVzdWx0ID0gcmVzdWx0IDwgcm93W2ZpZWxkXSA/IHJlc3VsdCA6IHJvd1tmaWVsZF07IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXhcIjogcmVzdWx0ID0gcmVzdWx0ID4gcm93W2ZpZWxkXSA/IHJlc3VsdCA6IHJvd1tmaWVsZF07IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudFwiOiBpZiAocm93W2ZpZWxkXSkgY291bnQrKzsgcmVzdWx0ID0gY291bnQ7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1bmlxdWVcIjogaWYgKCF1bmlxdWVzLmluY2x1ZGVzKHJvd1tmaWVsZF0pKSB7IHVuaXF1ZXMucHVzaChyb3dbZmllbGRdKTsgfSByZXN1bHQgPSB1bmlxdWVzLmxlbmd0aDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZ2V0Q29sdW1uRGF0YShjb2x1bW5OYW1lLCBmaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXSwgdW5pcXVlcyA9IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICBpZiAoKCEoZmlsdGVyKSB8fCB+cm93W2NvbHVtbk5hbWVdLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9VcHBlckNhc2UoKSkpICYmICF1bmlxdWVzLmluY2x1ZGVzKHJvd1tjb2x1bW5OYW1lXSkpIHsgdW5pcXVlcy5wdXNoKHJvd1tjb2x1bW5OYW1lXSk7IH07XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBpID0gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDA7IGkgPCBvZmZzZXQgKyBsaW1pdCAmJiB1bmlxdWVzICYmIGkgPCB1bmlxdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh1bmlxdWVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHNhdmVEYXRhKGtleU5hbWU6c3RyaW5nLCBrZXk6YW55LCBtb2RpZnk6e30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kaWZ5KS5mb3JFYWNoKCBwPT4gdGhpcy5kYXRhLmZpbmQociA9PiByW2tleU5hbWVdID09IGtleSlbcF0gPSBtb2RpZnlbcF0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbnNlcnREYXRhKGtleU5hbWU6c3RyaW5nLCBtb2RpZnk6e30pIHtcbiAgICAgICAgY29uc29sZS5sb2cobW9kaWZ5KTtcbiAgICAgICAgbW9kaWZ5W2tleU5hbWVdID0gdGhpcy5kYXRhLmxlbmd0aCArIDE7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKG1vZGlmeSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGRlbGV0ZURhdGEoa2V5TmFtZTpzdHJpbmcsIGtleXM6YW55W10sIGNhbGxiYWNrKSB7XG4gICAgICAgIGtleXMuZm9yRWFjaChrID0+IHRoaXMuZGF0YS5maW5kKHIgPT4gdGhpcy5kYXRhLnNwbGljZSh0aGlzLmRhdGEuaW5kZXhPZih0aGlzLmRhdGEuZmluZChyID0+IHJba2V5TmFtZV0gPT0gaykpLDEpKSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfSBcblxufSIsImltcG9ydCB7IElEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhLXByb3ZpZGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RGF0YSh1cmwgPSAnJywgZGF0YSA9IHt9KSB7XG4gICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgICAvLyAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICAgIC8vICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgICAgICAvLyAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICAgICAgICAvLyAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdGVEYXRhUHJvdmlkZXIgaW1wbGVtZW50cyBJRGF0YVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdXJsOiBzdHJpbmcpIHtcblxuICAgIH1cblxuICAgIGdldERhdGEobGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIG9yZGVyOiBhbnlbXSwgZmlsdGVyczogYW55W10sIGtleTogYW55LCBiYWNrOiBib29sZWFuLCBjYWxsYmFjazogKGRhdGE6IGFueSwgc3RhcnQ6IG51bWJlciwgY291bXQ6IG51bWJlciwgYmFjazogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBwb3N0RGF0YSh0aGlzLnVybCArIFwiZ2V0RGF0YVwiLCB7IG5hbWU6IHRoaXMubmFtZSwgbGltaXQ6IGxpbWl0LCBvZmZzZXQ6IG9mZnNldCwgb3JkZXI6IG9yZGVyLCBmaWx0ZXJzOiBmaWx0ZXJzLCBrZXk6IGtleSwgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YS5kYXRhLCBvZmZzZXQgKyBsaW1pdCwgZGF0YS5jb3VudCwgYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRTdW1tYXJ5KGZ1bmM6IHN0cmluZywgZmllbGQ6IHN0cmluZywgZmlsdGVyczogYW55W10sIGNhbGxiYWNrOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBwb3N0RGF0YSh0aGlzLnVybCArIFwiZ2V0U3VtbWFyeVwiLCB7IG5hbWU6IHRoaXMubmFtZSwgZnVuYzogZnVuYywgZmllbGQ6IGZpZWxkLCBmaWx0ZXJzOiBmaWx0ZXJzIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDb2x1bW5EYXRhKGNvbHVtbk5hbWU6IHN0cmluZywgZmlsdGVyOiBhbnksIGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjYWxsYmFjazogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgcG9zdERhdGEodGhpcy51cmwgKyBcImdldENvbHVtbkRhdGFcIiwgeyBuYW1lOiB0aGlzLm5hbWUsIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsIGZpbHRlcjogZmlsdGVyLCBsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0IH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmVEYXRhKGtleU5hbWU6c3RyaW5nLCBrZXk6YW55LCBtb2RpZnk6e30pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5TmFtZX0gLSAke2tleX0gPT4gJHttb2RpZnl9YCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGluc2VydERhdGEoa2V5TmFtZTpzdHJpbmcsIG1vZGlmeTp7fSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXlOYW1lfSA9PiAke21vZGlmeX1gKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZGVsZXRlRGF0YShrZXlOYW1lOnN0cmluZywga2V5czphbnlbXSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5TmFtZX0gLSAke2tleXN9YCk7XG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajoge30pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsKG9iajE6IGFueSwgb2JqMjogYW55KSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheShvYmoxKSAmJiBBcnJheS5pc0FycmF5KG9iajIpKSB7XG4gICAgICAgIGlmKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG9iajEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihvYmoxW2ldICE9PSBvYmoyW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmoxID09PSBvYmoyO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zb3VyY2VzL2tub2Nrb3V0L2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9