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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-table__bool-cell-editor\">\n  <input type=\"checkbox\"\n    data-bind=\"checked: value, event: { change: function(_, e) { $data.value = e.target.checked; $data.complete(true); } }\"\n  />\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"abris-table__bool-cell-viewer\" data-bind=\"css: className\">\n    <span class=\"abris-table__bool-cell-viewer-circle\"\n    data-bind=\"style: { backgroundColor: cell.data ? 'green' : 'red' }\" \n    ></span>\n</span>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-table__cell-editor\">\n  <input data-bind=\"value: value, event: { keyup: function(_, e) { $data.processKeyUp(e); } }\" />\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<td class=\"abris-table-cell\" data-bind=\"attr: {rowspan: table.isMergedСells ? cell.count : 1},\n  css: (cell.count > 1) && table.isMergedСells ? 'abris-table-cell--merged ' : '',\n  visible: (cell.count > 0) || !table.isMergedСells,\n  style: {'background-color': cell.color} \">\n  <!-- ko ifnot: (cell.inplaceEditor && table.config.enableEdit) -->\n    <div class=\"abris-table-cell__container\" data-bind=\"css: containerCss, style: {top: isMergedCell() ? table.tableHeadHeight - 2 + 'px' : undefined}, click: startEdit\">\n      <!-- ko component: { name: cell.viewer, params: { cell: cell, className: contentCss } } -->\n      <!-- /ko -->\n    </div>\n  <!-- /ko -->\n  <!-- ko if: (cell.inplaceEditor && table.config.enableEdit) -->\n    <!-- ko component: { name: cell.editor, params: { model: cell.inplaceEditor } } -->\n    <!-- /ko -->\n  <!-- /ko -->\n</td>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<select class=\"abris-filter___operation\" data-bind=\"options: operations, value: operation, optionsText: 'text'\"></select>\n<!-- ko if: showOperand -->\n  <!-- ko if: operation.op == \"EQ\" -->\n  <abris-filter-select class=\"abrs-filter__value\"\n    params=\"value: filterItemValue, columnName: column.name, columnType: column.type, getColumnData: getColumnData\">\n  </abris-filter-select>\n  <!-- /ko -->\n  <!-- ko if: operation.op != \"EQ\" -->\n  <div class=\"abris-filter__operand\" data-bind=\"component: { name: filterEditorName, params: { value: filterItemValue, column: column } }\">\n  </div>\n  <!-- /ko -->\n<!-- /ko -->\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko if: filterItems.length > 0 -->\n<div class=\"abris-filter-item\">\n  <div class=\"abris-filter__title abris-filter-text\" data-bind=\"text: column.title + ':'\"></div>\n  <!-- ko foreach: filterItems -->\n    <!-- ko if: $index() > 0 -->\n    <div class=\"abris-filter__operator abris-filter-text\" data-bind=\"text: '&'\"></div>\n    <!-- /ko -->\n    <!-- ko component: { name: 'abris-column-filter-item', params: { filterItem: $data } } -->\n    <!-- /ko -->\n    <div class=\"abris-filter__remove\"\n      data-bind=\"click: $parent.removeItem, clickBubble: false\">\n      <div class=\"abris-filter__remove-icon abris-svg-icon\" data-bind=\"html: $root.icons.cross\"></div>\n    </div>\n  <!-- /ko -->\n</div>\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-select-selection\">\n    <!-- ko foreach: selectedItems -->\n    <div class=\"abris-select-selection-item\">\n        <span class=\"abris-select-item-title\" data-bind=\"text: name\"></span>\n        <div class=\"abris-svg-icon abris-select-item-close\" data-bind=\"click: $parent.deleteItems, html: $root.icons.cross\"></div>\n    </div>\n    <!-- /ko -->\n</div>\n<div class=\"abris-select-button abris-svg-icon\" data-bind=\"click: toggle, attr: { title: title }, html: $root.icons.arrowdown\"></div>\n<!-- ko if: isOpen -->\n<ul class=\"abris-select__dropdown-menu abris-button-toggle__dropdown-menu\" data-bind=\"click: function(_, e) { e.stopPropagation(); }\">\n    <!-- ko if: isFilterSearchByType -->\n    <div class=\"abris-select__dropdown-search-container\">\n        <input class=\"abris-select__dropdown-search\" placeholder=\"*\" data-bind=\"value: filterText, valueUpdate: 'afterkeydown'\" />\n    </div>\n    <!-- /ko -->\n    <!-- ko foreach: foundItems -->\n    <div class=\"abris-select__dropdown-item\" data-bind=\"click: $parent.clickItem\">\n        <input class=\"abris-select__dropdown-hide-check\" type=\"checkbox\" data-bind=\"checked: $parent.isChecked($data)\" />\n        <div class=\"abris-svg-icon abris-select__dropdown-check\" data-bind=\"html: $root.icons.check\"></div>\n        <span class=\"abris-select__dropdown-label\" data-bind=\"text: name\"></span>\n    </div>\n    <!-- /ko -->\n    <!-- ko if: isLoadMore -->\n    <button class=\"abris-select__dropdown-button\" data-bind=\"click: loadMore\">\n        <span class=\"abris-action-button__label\">More</span>\n    </button>\n    <!-- /ko -->\n</ul>\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-table-resizable-container\">\n  <div class=\"abris-table-scroll-container\">\n    <table class=\"abris-table\">\n      <thead class=\"abris-table__header abris-table-sticky-component\">\n        <tr class=\"abris-table-header-tools\">\n          <th class=\"abris-table-header-tools__cell\" colspan=\"100%\">\n            <div class=\"abris-table-header-tools__container abris-table-group-header-technical-cell\">\n              <div class=\"abris-table-preheader\">\n                <div class=\"abris-table-search-group\">\n                  <!-- ko if: showSearch -->\n                  <abris-search params=\"model: searchModel\"></abris-search>\n                  <!-- /ko -->\n                  <abris-actions class=\"abris-table-actions\" params=\"model: $data, options: { action: 'topActions' }\">\n                  </abris-actions>\n                  <!-- ko if: $data.getActions('dropdownActions').length > 0 -->\n                  <abris-dropdown-actions class=\"abris-table-dropdown abris-table-actions-menu\"\n                    params=\"data: $data, actions: 'dropdownActions'\">\n                  </abris-dropdown-actions>\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- ko if: viewFilterTable -->\n              <div class=\"abris-table-filter\">\n                <div class=\"abris-table-filter__container\">\n                  <!-- ko foreach: columns -->\n                  <!-- ko component: { name: 'abris-column-filter', params: { context: filterContext } } -->\n                  <!-- /ko -->\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </th>\n        </tr>\n        <tr class=\"abris-table-header-title\">\n          <th class=\"abris-table-header-title__cell abris-table-switch\">\n            <div class=\"abris-table-switch__text\"\n              data-bind=\"css: {'switch__text--selected': isNumber}, click: () => $data.isNumber = !$data.isNumber\">#\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"abris-table-header-title__cell\"\n            data-bind=\"event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}\">\n            <div class=\"abris-table-title\">\n              <span class=\"abris-table-title__text\" data-bind=\"html: title, click: $parent.clickColumn\"></span>\n              <div class=\"abris-table-title__tools\">\n                <div class=\"abris-svg-icon abris-table-title__sorter\" data-bind=\"visible: order === false, html: $root.icons.sortup\"></div>\n                <div class=\"abris-svg-icon abris-table-title__sorter\" data-bind=\"visible: order === true, html: $root.icons.sortdown\"></div>\n                <div class=\"abris-svg-icon abris-table-title__filter\" data-bind=\"click: clickFilter, html: $root.icons.filter\"></div>\n              </div>\n            </div>\n            <div class=\"abris-table-title_resize\"\n              data-bind=\"event: {mouseover: $parent.logMouseOver, mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp, mousedown: $parent.logMouseDown}\">\n            </div>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"abris-table-header-title__cell\"></th>\n        </tr>\n      </thead>\n      <tbody class=\"abris-table__body\">\n        <!-- ko if: rows.length == 0 && loadingMutex == false  -->\n        <tr class=\"abris-table__row\">\n          <th class=\"abris-table-cell\" colspan=\"100%\" data-bind=\"text: noDataText\"></th>\n        </tr>\n        <!-- /ko -->\n        <!-- ko if: loadingMutex -->\n        <!-- ko foreach: columns -->\n        <tr class=\"abris-table__row\"></tr>\n          <td class=\"abris-table-cell abris-table-technical-cell\" >\n            <div class=\"abris-table-technical-cell__container\">\n              <div class=\"abris-table__check\">\n                <div class=\"abris-svg-icon abris-table__icon-check\"></div>\n              </div>\n            </div>\n          </td>\n        <!-- ko foreach: $parent.columns -->\n        <!-- ko if: visible -->\n          <td class=\"abris-table-cell abris-table-technical-cell\">\n            <div class=\"abris-table-cell__container abris-table-cell__container--loading\">\n            </div>\n          </td>\n        <!-- /ko -->\n        <!-- /ko -->\n        <td class=\"abris-table-cell abris-table-technical-cell\">\n          <div class=\"abris-table-technical-cell__container\">\n            <div class=\"abris-svg-icon abris-table-icon-row-tools abris-table__more\" data-bind=\"html: $root.icons.more\"></div>\n            <div class=\"abris-svg-icon abris-table-icon-row-tools abris-table__edit\" data-bind=\"html: $root.icons.edit\"></div>\n          </div>\n        </td>\n        </tr>\n        <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko foreach: {data: rows} -->\n        <tr class=\"abris-table__row\" data-bind=\"css: {'abris-table__row--selected': selected}, style: {'background-color': 'none' }\">\n          <td class=\"abris-table-cell abris-table-technical-cell\" data-bind=\"click: select\">\n            <div class=\"abris-table-technical-cell__container\">\n              <!-- ko if: $parent.isNumber -->\n              <div class=\"abris-table__number\" data-bind=\"text: number\"></div>\n              <!-- /ko -->\n              <!-- ko if: !$parent.isNumber -->\n              <div class=\"abris-table__check\">\n                <div class=\"abris-svg-icon abris-table__icon-check\" data-bind=\"visible: selected, html: $root.icons.check\"></div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </td>\n          <!-- ko foreach: cells -->\n          <!-- ko component: { name: 'abris-table-cell', params: { cell: $data, table: $parents[1] } } -->\n          <!-- /ko -->\n          <!-- /ko -->\n          <td class=\"abris-table-cell abris-table-technical-cell\" data-bind=\"click: click\">\n            <div class=\"abris-table-technical-cell__container\">\n              <div class=\"abris-svg-icon abris-table-icon-row-tools abris-table__more\" data-bind=\"html: $root.icons.more\"></div>\n              <div class=\"abris-svg-icon abris-table-icon-row-tools abris-table__edit\" data-bind=\"html: $root.icons.edit\"></div>\n            </div>\n            <div class=\"abris-table__row--select\" data-bind=\"visible: !$parent.hasActiveInplaceEditor\"></div>\n            <div class=\"abris-table__row--colored\" data-bind=\"style: { 'background': color ? color : 'rgba(248,249,253)' }\"></div>\n          </td>\n        </tr>\n        <!-- /ko -->\n      </tbody>\n      <tfoot class=\"abris-table__footer abris-table-sticky-component\">\n        <tr class=\"abris-table-footer-summary\" data-bind=\"visible: showTableSummary\">\n          <th class=\"abris-table-cell abris-table-technical-cell abris-table-footer__cell\">\n            <div class=\"abris-table-technical-cell__container\">\n              <div class=\"abris-svg-icon abris-table-icon-equal\" data-bind=\"html: $root.icons.equal\"></div>\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"abris-table-cell abris-table-footer__cell\">\n            <abris-table-summary params='column: $data'></abris-table-summary>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"abris-table-cell abris-table-technical-cell abris-table-footer__cell\"></th>\n        </tr>\n        <tr class=\"abris-table-footer-tools\">\n          <th class=\"abris-table-footer-tools__cell\" colspan=\"100%\">\n            <div class=\"abris-table-footer-tools__container abris-table-group-header-technical-cell\">\n              <div class=\"abris-table-row-management\">\n                <abris-actions class=\"abris-table-actions\" params=\"model: $data, options: { action: 'bottomActions' }\">\n                </abris-actions>\n              </div>\n              <div class=\"abris-table-info\">\n                <span class=\"abris-table-info__total abris-table-info__text\"\n                  data-bind=\"text: 'Total: ' + totalCount\"></span>\n                <div class=\"abris-table-info__go-to\">\n                  <span class=\"abris-table-go-to__text abris-table-info__text\">Go to: </span>\n                  <input class=\"abris-table-go-to__value\" data-bind=\"value: startRow\"/>\n                  <button class=\"abris-btn-transparent\">\n                    <div class=\"abris-svg-icon abris-table-go-to__icon\" data-bind=\"html: $root.icons.arrowright\"></div>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-search\">\n  <input class=\"abris-search__value\" data-bind=\"value: value, attr: { placeholder: 'Search...' }\" />\n  <div class=\"abris-search__button\" data-bind=\"click: refresh, attr: { title: 'Search' }\">\n    <div class=\"abris-svg-icon abris-search__icon\" data-bind=\"html: $root.icons.search\"></div>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"abris-table-summary__value\" data-bind=\"text: value\"></span>\n<select class=\"abris-table-summary__select\"  data-bind=\"value: func\">\n  <!-- ko foreach: summaryItems -->\n    <option data-bind=\"text: title, value: value, attr: {title: title}\"></option>\n  <!-- /ko -->  \n</select>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button data-bind=\"click: $data.formId !== undefined ? undefined : action, \n                visible: !$data.visible || ko.unwrap(visible),\n                enable: !$data.enabled || ko.unwrap(enabled),\n                attr: {\n                        class: 'abris-button--transparent action-button abris-action-button ' + ko.unwrap($data.cssClasses) + (ko.unwrap($data.active) === true ? ' abris-action--active' : ''),\n                        title: $data.title || $data.name, form: $data.formId,\n                        type: $data.formId !== undefined ? 'submit' : 'button'\n                    }\">\n    <!-- ko if: $data.icon -->\n    <!-- <span data-bind=\"css: ('fa icon ' + (typeof icon == 'function' ? icon() : icon))\"></span> -->\n    <!-- /ko -->\n    <!-- ko if: $data.svg -->\n    <div class=\"abris-action-button__icon abris-button__svg-icon\" data-bind=\"html: svg\"></div>\n    <!-- /ko -->\n    <!-- ko ifnot: $parents[1].short -->\n    <span class=\"abris-action-button__label\" data-bind=\"text: $data.title, css: ko.unwrap($data.cssLabel), style: {'display' : $data.title ? 'block' : 'none'}\" ></span>\n    <!-- /ko -->\n</button>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko foreach: actions -->\n<!-- ko ifnot: ko.unwrap($data.actions) -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<!-- ko component: { name: 'abris-action-item', params: $data } -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- ko if: ko.unwrap($data.actions) && ko.unwrap($data.actions).length > 0 -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<div class=\"abris-nested-actions abris-action-context-button\">\n    <span class=\"abris-button__label\" data-bind=\"text: title\"></span>\n    <div class=\"abris-nested-actions__dropdown\">\n        <!-- ko foreach: actions -->\n        <!-- ko component: { name: 'abris-action-item', params: $data } -->\n        <!-- /ko -->\n        <!-- /ko -->\n    </div>\n</div>\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button class=\"abris-action-button abris-button--transparent abris-button-toggle\" type=\"button\"\n    data-bind=\"click: toggle, attr: { title: title }\">\n    <div data-bind=\"html: $root.icons.more_sq\"></div>\n    <span class=\"abris-action-button__label\" data-bind=\"text: moreText\"></span>\n</button>\n<!-- ko if: isOpen -->\n<ul class=\"abris-button-toggle__dropdown-menu\">\n    <abris-actions class=\"abris-context-actions\" params=\"model: data, options: { action: actions }\">\n    </abris-actions>\n</ul>\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <svg class=\"abris-button__svg-icon\"><use data-bind=\"attr:{'xlink:href':'spritemap.svg#sprite-icon_'+ko.unwrap(id)}\"  xlink:href=''></use></svg> -->\n");

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
ko.components.register("abris-cell-editor", {
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
ko.components.register("abris-cell-viewer", {
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
ko.components.register("abris-table-cell", {
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
ko.components.register("abris-column-filter-item", {
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
ko.components.register("abris-column-filter", {
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
ko.components.register("abris-table-filter-default", {
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
ko.components.register("abris-filter-select", {
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
ko.components.register("abris-search", {
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
ko.components.register("abris-table-summary", {
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
ko.components.register("abris-action-item", {
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
ko.components.register("abris-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var modelValue = (params.model || {})[params.options.action];
            return {
                actions: modelValue,
                short: params.options.short,
                groupName: params.options.groupName,
                toggleChildActions: function (_, event) {
                    event.target.classList.toggle("abris-nested-actions--open");
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
ko.components.register("abris-dropdown-actions", {
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
ko.components.register("abris-icon", {
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
        var containerCss = "abris-table-cell__container " + cell.css;
        if (isMergedCell) {
            containerCss += " cell__sticky-text";
        }
        return containerCss;
    };
    TableCell.getContentCss = function (cell, isMergedCell) {
        var contentCss = isMergedCell ? "abris-table-cell__text--merged" : "abris-table-cell__text";
        if (cell instanceof TableCell && cell.isModified) {
            contentCss += " abris-table-cell__text--modified";
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
            css: "abris-table-cell--left",
            editor: "abris-cell-editor",
            viewer: "abris-cell-viewer"
        },
    };
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableCell.prototype, "isModified", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) {
                if (target.text !== val) {
                    target.text = target.getCellText(val);
                    target.isModified = true;
                }
            } }),
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
            return "abris-table-filter-default";
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
        (0, property_1.property)({ onSet: function (val, target) {
                if (!!val) {
                    target.filterItemValue.op = val.op;
                }
                target.showOperand = val && val.op !== "ISN" && val.op !== "ISNN";
            } }),
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
        this.scrollerElement = element.getElementsByClassName("abris-table-scroll-container")[0];
        this.tableElement = element.getElementsByTagName("table")[0];
        this.resizerElement = element.getElementsByClassName("abris-table")[0];
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
                            entry.target.parentElement.classList.add("abris-table--small");
                        }
                        else {
                            entry.target.parentElement.classList.remove("abris-table--small");
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
        (0, property_1.property)({ defaultValue: [], onSet: function (val, target) {
                target.viewFilterTable = new dependencies_1.ComputedUpdater(function () { return val.filter(function (c) { return c.filterContext.showFilter; }).length > 0; });
            } }),
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
        (0, property_1.property)({ onSet: function (newValue, target) {
                target.navigateTo(newValue);
            } }),
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
        this.css = "abris-table-cell--right";
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
        while (_) try {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9hY3Rpb25zLnNjc3M/YTlkMSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9kcm9wZG93bi1hY3Rpb25zLnNjc3M/YjNkNyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvYm9vbC5zY3NzP2FmMzUiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NlbGwtZWRpdG9yLnNjc3M/MTA1YSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY29sdW1uLWZpbHRlci5zY3NzPzc5MjAiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2ZpbHRlci1kZWZhdWx0LnNjc3MiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2ZpbHRlci1zZWxlY3Quc2Nzcz9mZGZlIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9pbmRleC5zY3NzP2FhMTIiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3NlYXJjaC5zY3NzPzJiZWUiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3N1bW1hcnkuc2Nzcz8yMzA5Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9ib29sLWNlbGwtZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2Jvb2wtY2VsbC12aWV3ZXIuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC1lZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC12aWV3ZXIuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY29sdW1uLWZpbHRlci5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9maWx0ZXItZGVmYXVsdC5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9maWx0ZXItc2VsZWN0Lmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL3NlYXJjaC5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9zdW1tYXJ5Lmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvYWN0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvYWN0aW9ucy5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2Ryb3Bkb3duLWFjdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9pY29uLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fYXJyb3ctZG93bi5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fYXJyb3ctcmlnaHQuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9jcm9zcy5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fZWRpdC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fZXF1YWwuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2ZpbHRlci5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25faXRlbS1hZGQuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2l0ZW0tZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9pdGVtLXNhdmUuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX21vcmUuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX21vcmVfc3Euc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX3Bhc3RlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9zZWFyY2guc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX3NvcnQtZG93bi5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fc29ydC11cC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fdGFibGUtbWVyZ2Uuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9hY3Rpb25zLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvZGVwZW5kZW5jaWVzLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2Ryb3Bkb3duLWFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvcHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ZpbmQudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb24udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2luZGV4LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC9pbmRleC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvYm9vbC1jZWxsLWVkaXRvci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvYm9vbC1jZWxsLXZpZXdlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NlbGwtdmlld2VyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jZWxsLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NvbHVtbi1maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2ZpbHRlci1kZWZhdWx0LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9maWx0ZXItc2VsZWN0LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL3N1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvYWN0aW9uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvZHJvcGRvd24tYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9pY29uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2Jvb2wudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NlbGwtZWRpdG9yLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jZWxsLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi1maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvZmlsdGVyLWRlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2ZpbHRlci1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9udW1iZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3Jvdy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvc2VhcmNoLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9zdW1tYXJ5LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy91dGlscy9hcnJheS1kYXRhLXByb3ZpZGVyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy91dGlscy9yZW1vdGUtZGF0YS1wcm92aWRlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcImtvXCIsXCJjb21tb25qczJcIjpcImtub2Nrb3V0XCIsXCJjb21tb25qc1wiOlwia25vY2tvdXRcIixcImFtZFwiOlwia25vY2tvdXRcIn0iLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwia25vY2tvdXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJUYWJsZTRKU1wiLCBbXCJrbm9ja291dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUYWJsZTRKU1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYWJsZTRKU1wiXSA9IGZhY3Rvcnkocm9vdFtcImtvXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X18pID0+IHtcbnJldHVybiAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlX19ib29sLWNlbGwtZWRpdG9yXFxcIj5cXG4gIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiB2YWx1ZSwgZXZlbnQ6IHsgY2hhbmdlOiBmdW5jdGlvbihfLCBlKSB7ICRkYXRhLnZhbHVlID0gZS50YXJnZXQuY2hlY2tlZDsgJGRhdGEuY29tcGxldGUodHJ1ZSk7IH0gfVxcXCJcXG4gIC8+XFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3BhbiBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX2Jvb2wtY2VsbC12aWV3ZXJcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiBjbGFzc05hbWVcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX2Jvb2wtY2VsbC12aWV3ZXItY2lyY2xlXFxcIlxcbiAgICBkYXRhLWJpbmQ9XFxcInN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogY2VsbC5kYXRhID8gJ2dyZWVuJyA6ICdyZWQnIH1cXFwiIFxcbiAgICA+PC9zcGFuPlxcbjwvc3Bhbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlX19jZWxsLWVkaXRvclxcXCI+XFxuICA8aW5wdXQgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogdmFsdWUsIGV2ZW50OiB7IGtleXVwOiBmdW5jdGlvbihfLCBlKSB7ICRkYXRhLnByb2Nlc3NLZXlVcChlKTsgfSB9XFxcIiAvPlxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHNwYW4gZGF0YS1iaW5kPVxcXCJodG1sOiBjZWxsLnRleHQsIGNzczogY2xhc3NOYW1lXFxcIj48L3NwYW4+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8dGQgY2xhc3M9XFxcImFicmlzLXRhYmxlLWNlbGxcXFwiIGRhdGEtYmluZD1cXFwiYXR0cjoge3Jvd3NwYW46IHRhYmxlLmlzTWVyZ2Vk0KFlbGxzID8gY2VsbC5jb3VudCA6IDF9LFxcbiAgY3NzOiAoY2VsbC5jb3VudCA+IDEpICYmIHRhYmxlLmlzTWVyZ2Vk0KFlbGxzID8gJ2FicmlzLXRhYmxlLWNlbGwtLW1lcmdlZCAnIDogJycsXFxuICB2aXNpYmxlOiAoY2VsbC5jb3VudCA+IDApIHx8ICF0YWJsZS5pc01lcmdlZNChZWxscyxcXG4gIHN0eWxlOiB7J2JhY2tncm91bmQtY29sb3InOiBjZWxsLmNvbG9yfSBcXFwiPlxcbiAgPCEtLSBrbyBpZm5vdDogKGNlbGwuaW5wbGFjZUVkaXRvciAmJiB0YWJsZS5jb25maWcuZW5hYmxlRWRpdCkgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLWNlbGxfX2NvbnRhaW5lclxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IGNvbnRhaW5lckNzcywgc3R5bGU6IHt0b3A6IGlzTWVyZ2VkQ2VsbCgpID8gdGFibGUudGFibGVIZWFkSGVpZ2h0IC0gMiArICdweCcgOiB1bmRlZmluZWR9LCBjbGljazogc3RhcnRFZGl0XFxcIj5cXG4gICAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiBjZWxsLnZpZXdlciwgcGFyYW1zOiB7IGNlbGw6IGNlbGwsIGNsYXNzTmFtZTogY29udGVudENzcyB9IH0gLS0+XFxuICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwvZGl2PlxcbiAgPCEtLSAva28gLS0+XFxuICA8IS0tIGtvIGlmOiAoY2VsbC5pbnBsYWNlRWRpdG9yICYmIHRhYmxlLmNvbmZpZy5lbmFibGVFZGl0KSAtLT5cXG4gICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogY2VsbC5lZGl0b3IsIHBhcmFtczogeyBtb2RlbDogY2VsbC5pbnBsYWNlRWRpdG9yIH0gfSAtLT5cXG4gICAgPCEtLSAva28gLS0+XFxuICA8IS0tIC9rbyAtLT5cXG48L3RkPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHNlbGVjdCBjbGFzcz1cXFwiYWJyaXMtZmlsdGVyX19fb3BlcmF0aW9uXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IG9wZXJhdGlvbnMsIHZhbHVlOiBvcGVyYXRpb24sIG9wdGlvbnNUZXh0OiAndGV4dCdcXFwiPjwvc2VsZWN0PlxcbjwhLS0ga28gaWY6IHNob3dPcGVyYW5kIC0tPlxcbiAgPCEtLSBrbyBpZjogb3BlcmF0aW9uLm9wID09IFxcXCJFUVxcXCIgLS0+XFxuICA8YWJyaXMtZmlsdGVyLXNlbGVjdCBjbGFzcz1cXFwiYWJycy1maWx0ZXJfX3ZhbHVlXFxcIlxcbiAgICBwYXJhbXM9XFxcInZhbHVlOiBmaWx0ZXJJdGVtVmFsdWUsIGNvbHVtbk5hbWU6IGNvbHVtbi5uYW1lLCBjb2x1bW5UeXBlOiBjb2x1bW4udHlwZSwgZ2V0Q29sdW1uRGF0YTogZ2V0Q29sdW1uRGF0YVxcXCI+XFxuICA8L2FicmlzLWZpbHRlci1zZWxlY3Q+XFxuICA8IS0tIC9rbyAtLT5cXG4gIDwhLS0ga28gaWY6IG9wZXJhdGlvbi5vcCAhPSBcXFwiRVFcXFwiIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtZmlsdGVyX19vcGVyYW5kXFxcIiBkYXRhLWJpbmQ9XFxcImNvbXBvbmVudDogeyBuYW1lOiBmaWx0ZXJFZGl0b3JOYW1lLCBwYXJhbXM6IHsgdmFsdWU6IGZpbHRlckl0ZW1WYWx1ZSwgY29sdW1uOiBjb2x1bW4gfSB9XFxcIj5cXG4gIDwvZGl2PlxcbiAgPCEtLSAva28gLS0+XFxuPCEtLSAva28gLS0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tIGtvIGlmOiBmaWx0ZXJJdGVtcy5sZW5ndGggPiAwIC0tPlxcbjxkaXYgY2xhc3M9XFxcImFicmlzLWZpbHRlci1pdGVtXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFicmlzLWZpbHRlcl9fdGl0bGUgYWJyaXMtZmlsdGVyLXRleHRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogY29sdW1uLnRpdGxlICsgJzonXFxcIj48L2Rpdj5cXG4gIDwhLS0ga28gZm9yZWFjaDogZmlsdGVySXRlbXMgLS0+XFxuICAgIDwhLS0ga28gaWY6ICRpbmRleCgpID4gMCAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtZmlsdGVyX19vcGVyYXRvciBhYnJpcy1maWx0ZXItdGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAnJidcXFwiPjwvZGl2PlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogJ2FicmlzLWNvbHVtbi1maWx0ZXItaXRlbScsIHBhcmFtczogeyBmaWx0ZXJJdGVtOiAkZGF0YSB9IH0gLS0+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1maWx0ZXJfX3JlbW92ZVxcXCJcXG4gICAgICBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LnJlbW92ZUl0ZW0sIGNsaWNrQnViYmxlOiBmYWxzZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtZmlsdGVyX19yZW1vdmUtaWNvbiBhYnJpcy1zdmctaWNvblxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5jcm9zc1xcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPCEtLSAva28gLS0+XFxuPC9kaXY+XFxuPCEtLSAva28gLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8aW5wdXQgc3R5bGU9XFxcIndpZHRoOiAxMDAlO1xcXCIgcGxhY2Vob2xkZXI9XFxcIipcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IHZhbHVlLnZhbHVlXFxcIiAvPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwiYWJyaXMtc2VsZWN0LXNlbGVjdGlvblxcXCI+XFxuICAgIDwhLS0ga28gZm9yZWFjaDogc2VsZWN0ZWRJdGVtcyAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc2VsZWN0LXNlbGVjdGlvbi1pdGVtXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYnJpcy1zZWxlY3QtaXRlbS10aXRsZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lXFxcIj48L3NwYW4+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zdmctaWNvbiBhYnJpcy1zZWxlY3QtaXRlbS1jbG9zZVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5kZWxldGVJdGVtcywgaHRtbDogJHJvb3QuaWNvbnMuY3Jvc3NcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSAva28gLS0+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiYWJyaXMtc2VsZWN0LWJ1dHRvbiBhYnJpcy1zdmctaWNvblxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogdG9nZ2xlLCBhdHRyOiB7IHRpdGxlOiB0aXRsZSB9LCBodG1sOiAkcm9vdC5pY29ucy5hcnJvd2Rvd25cXFwiPjwvZGl2PlxcbjwhLS0ga28gaWY6IGlzT3BlbiAtLT5cXG48dWwgY2xhc3M9XFxcImFicmlzLXNlbGVjdF9fZHJvcGRvd24tbWVudSBhYnJpcy1idXR0b24tdG9nZ2xlX19kcm9wZG93bi1tZW51XFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBmdW5jdGlvbihfLCBlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH1cXFwiPlxcbiAgICA8IS0tIGtvIGlmOiBpc0ZpbHRlclNlYXJjaEJ5VHlwZSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc2VsZWN0X19kcm9wZG93bi1zZWFyY2gtY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiYWJyaXMtc2VsZWN0X19kcm9wZG93bi1zZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCIqXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBmaWx0ZXJUZXh0LCB2YWx1ZVVwZGF0ZTogJ2FmdGVya2V5ZG93bidcXFwiIC8+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gICAgPCEtLSBrbyBmb3JlYWNoOiBmb3VuZEl0ZW1zIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLWl0ZW1cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuY2xpY2tJdGVtXFxcIj5cXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiYWJyaXMtc2VsZWN0X19kcm9wZG93bi1oaWRlLWNoZWNrXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiAkcGFyZW50LmlzQ2hlY2tlZCgkZGF0YSlcXFwiIC8+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zdmctaWNvbiBhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLWNoZWNrXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLmNoZWNrXFxcIj48L2Rpdj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLWxhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIGtvIGlmOiBpc0xvYWRNb3JlIC0tPlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLWJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogbG9hZE1vcmVcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFicmlzLWFjdGlvbi1idXR0b25fX2xhYmVsXFxcIj5Nb3JlPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPCEtLSAva28gLS0+XFxuPC91bD5cXG48IS0tIC9rbyAtLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXJlc2l6YWJsZS1jb250YWluZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtc2Nyb2xsLWNvbnRhaW5lclxcXCI+XFxuICAgIDx0YWJsZSBjbGFzcz1cXFwiYWJyaXMtdGFibGVcXFwiPlxcbiAgICAgIDx0aGVhZCBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX2hlYWRlciBhYnJpcy10YWJsZS1zdGlja3ktY29tcG9uZW50XFxcIj5cXG4gICAgICAgIDx0ciBjbGFzcz1cXFwiYWJyaXMtdGFibGUtaGVhZGVyLXRvb2xzXFxcIj5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1oZWFkZXItdG9vbHNfX2NlbGxcXFwiIGNvbHNwYW49XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLWhlYWRlci10b29sc19fY29udGFpbmVyIGFicmlzLXRhYmxlLWdyb3VwLWhlYWRlci10ZWNobmljYWwtY2VsbFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1wcmVoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1zZWFyY2gtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IHNob3dTZWFyY2ggLS0+XFxuICAgICAgICAgICAgICAgICAgPGFicmlzLXNlYXJjaCBwYXJhbXM9XFxcIm1vZGVsOiBzZWFyY2hNb2RlbFxcXCI+PC9hYnJpcy1zZWFyY2g+XFxuICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgPGFicmlzLWFjdGlvbnMgY2xhc3M9XFxcImFicmlzLXRhYmxlLWFjdGlvbnNcXFwiIHBhcmFtcz1cXFwibW9kZWw6ICRkYXRhLCBvcHRpb25zOiB7IGFjdGlvbjogJ3RvcEFjdGlvbnMnIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDwvYWJyaXMtYWN0aW9ucz5cXG4gICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiAkZGF0YS5nZXRBY3Rpb25zKCdkcm9wZG93bkFjdGlvbnMnKS5sZW5ndGggPiAwIC0tPlxcbiAgICAgICAgICAgICAgICAgIDxhYnJpcy1kcm9wZG93bi1hY3Rpb25zIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1kcm9wZG93biBhYnJpcy10YWJsZS1hY3Rpb25zLW1lbnVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM9XFxcImRhdGE6ICRkYXRhLCBhY3Rpb25zOiAnZHJvcGRvd25BY3Rpb25zJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPC9hYnJpcy1kcm9wZG93bi1hY3Rpb25zPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPCEtLSBrbyBpZjogdmlld0ZpbHRlclRhYmxlIC0tPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtZmlsdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtZmlsdGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogY29sdW1ucyAtLT5cXG4gICAgICAgICAgICAgICAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiAnYWJyaXMtY29sdW1uLWZpbHRlcicsIHBhcmFtczogeyBjb250ZXh0OiBmaWx0ZXJDb250ZXh0IH0gfSAtLT5cXG4gICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgICAgIDx0ciBjbGFzcz1cXFwiYWJyaXMtdGFibGUtaGVhZGVyLXRpdGxlXFxcIj5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1oZWFkZXItdGl0bGVfX2NlbGwgYWJyaXMtdGFibGUtc3dpdGNoXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1zd2l0Y2hfX3RleHRcXFwiXFxuICAgICAgICAgICAgICBkYXRhLWJpbmQ9XFxcImNzczogeydzd2l0Y2hfX3RleHQtLXNlbGVjdGVkJzogaXNOdW1iZXJ9LCBjbGljazogKCkgPT4gJGRhdGEuaXNOdW1iZXIgPSAhJGRhdGEuaXNOdW1iZXJcXFwiPiNcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC90aD5cXG4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBjb2x1bW5zIC0tPlxcbiAgICAgICAgICA8IS0tIGtvIGlmOiB2aXNpYmxlIC0tPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcImFicmlzLXRhYmxlLWhlYWRlci10aXRsZV9fY2VsbFxcXCJcXG4gICAgICAgICAgICBkYXRhLWJpbmQ9XFxcImV2ZW50OiB7bW91c2VvdXQ6ICRwYXJlbnQubG9nTW91c2VPdXQsIG1vdXNlbW92ZTogJHBhcmVudC5sb2dNb3VzZU1vdmUsIG1vdXNldXA6ICRwYXJlbnQubG9nTW91c2VVcH1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYnJpcy10YWJsZS10aXRsZV9fdGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiB0aXRsZSwgY2xpY2s6ICRwYXJlbnQuY2xpY2tDb2x1bW5cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXRpdGxlX190b29sc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLXRpdGxlX19zb3J0ZXJcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogb3JkZXIgPT09IGZhbHNlLCBodG1sOiAkcm9vdC5pY29ucy5zb3J0dXBcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZS10aXRsZV9fc29ydGVyXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IG9yZGVyID09PSB0cnVlLCBodG1sOiAkcm9vdC5pY29ucy5zb3J0ZG93blxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLXRpdGxlX19maWx0ZXJcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGNsaWNrRmlsdGVyLCBodG1sOiAkcm9vdC5pY29ucy5maWx0ZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtdGl0bGVfcmVzaXplXFxcIlxcbiAgICAgICAgICAgICAgZGF0YS1iaW5kPVxcXCJldmVudDoge21vdXNlb3ZlcjogJHBhcmVudC5sb2dNb3VzZU92ZXIsIG1vdXNlb3V0OiAkcGFyZW50LmxvZ01vdXNlT3V0LCBtb3VzZW1vdmU6ICRwYXJlbnQubG9nTW91c2VNb3ZlLCBtb3VzZXVwOiAkcGFyZW50LmxvZ01vdXNlVXAsIG1vdXNlZG93bjogJHBhcmVudC5sb2dNb3VzZURvd259XFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC90aD5cXG4gICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcImFicmlzLXRhYmxlLWhlYWRlci10aXRsZV9fY2VsbFxcXCI+PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgPC90aGVhZD5cXG4gICAgICA8dGJvZHkgY2xhc3M9XFxcImFicmlzLXRhYmxlX19ib2R5XFxcIj5cXG4gICAgICAgIDwhLS0ga28gaWY6IHJvd3MubGVuZ3RoID09IDAgJiYgbG9hZGluZ011dGV4ID09IGZhbHNlICAtLT5cXG4gICAgICAgIDx0ciBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX3Jvd1xcXCI+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbFxcXCIgY29sc3Bhbj1cXFwiMTAwJVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBub0RhdGFUZXh0XFxcIj48L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPCEtLSBrbyBpZjogbG9hZGluZ011dGV4IC0tPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBjb2x1bW5zIC0tPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJhYnJpcy10YWJsZV9fcm93XFxcIj48L3RyPlxcbiAgICAgICAgICA8dGQgY2xhc3M9XFxcImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxcXFwiID5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlX19jaGVja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlX19pY29uLWNoZWNrXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RkPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiAkcGFyZW50LmNvbHVtbnMgLS0+XFxuICAgICAgICA8IS0tIGtvIGlmOiB2aXNpYmxlIC0tPlxcbiAgICAgICAgICA8dGQgY2xhc3M9XFxcImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLWNlbGxfX2NvbnRhaW5lciBhYnJpcy10YWJsZS1jZWxsX19jb250YWluZXItLWxvYWRpbmdcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RkPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDx0ZCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWljb24tcm93LXRvb2xzIGFicmlzLXRhYmxlX19tb3JlXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLm1vcmVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWljb24tcm93LXRvb2xzIGFicmlzLXRhYmxlX19lZGl0XFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLmVkaXRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvdGQ+XFxuICAgICAgICA8L3RyPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDoge2RhdGE6IHJvd3N9IC0tPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJhYnJpcy10YWJsZV9fcm93XFxcIiBkYXRhLWJpbmQ9XFxcImNzczogeydhYnJpcy10YWJsZV9fcm93LS1zZWxlY3RlZCc6IHNlbGVjdGVkfSwgc3R5bGU6IHsnYmFja2dyb3VuZC1jb2xvcic6ICdub25lJyB9XFxcIj5cXG4gICAgICAgICAgPHRkIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBzZWxlY3RcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPCEtLSBrbyBpZjogJHBhcmVudC5pc051bWJlciAtLT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlX19udW1iZXJcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbnVtYmVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgPCEtLSBrbyBpZjogISRwYXJlbnQuaXNOdW1iZXIgLS0+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZV9fY2hlY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZV9faWNvbi1jaGVja1xcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBzZWxlY3RlZCwgaHRtbDogJHJvb3QuaWNvbnMuY2hlY2tcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBjZWxscyAtLT5cXG4gICAgICAgICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogJ2FicmlzLXRhYmxlLWNlbGwnLCBwYXJhbXM6IHsgY2VsbDogJGRhdGEsIHRhYmxlOiAkcGFyZW50c1sxXSB9IH0gLS0+XFxuICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgPHRkIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBjbGlja1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZS1pY29uLXJvdy10b29scyBhYnJpcy10YWJsZV9fbW9yZVxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5tb3JlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWljb24tcm93LXRvb2xzIGFicmlzLXRhYmxlX19lZGl0XFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLmVkaXRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlX19yb3ctLXNlbGVjdFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAhJHBhcmVudC5oYXNBY3RpdmVJbnBsYWNlRWRpdG9yXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZV9fcm93LS1jb2xvcmVkXFxcIiBkYXRhLWJpbmQ9XFxcInN0eWxlOiB7ICdiYWNrZ3JvdW5kJzogY29sb3IgPyBjb2xvciA6ICdyZ2JhKDI0OCwyNDksMjUzKScgfVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8L3RyPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgPC90Ym9keT5cXG4gICAgICA8dGZvb3QgY2xhc3M9XFxcImFicmlzLXRhYmxlX19mb290ZXIgYWJyaXMtdGFibGUtc3RpY2t5LWNvbXBvbmVudFxcXCI+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcImFicmlzLXRhYmxlLWZvb3Rlci1zdW1tYXJ5XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNob3dUYWJsZVN1bW1hcnlcXFwiPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGwgYWJyaXMtdGFibGUtZm9vdGVyX19jZWxsXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWljb24tZXF1YWxcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuZXF1YWxcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGNvbHVtbnMgLS0+XFxuICAgICAgICAgIDwhLS0ga28gaWY6IHZpc2libGUgLS0+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS1mb290ZXJfX2NlbGxcXFwiPlxcbiAgICAgICAgICAgIDxhYnJpcy10YWJsZS1zdW1tYXJ5IHBhcmFtcz0nY29sdW1uOiAkZGF0YSc+PC9hYnJpcy10YWJsZS1zdW1tYXJ5PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbCBhYnJpcy10YWJsZS1mb290ZXJfX2NlbGxcXFwiPjwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1mb290ZXItdG9vbHNcXFwiPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcImFicmlzLXRhYmxlLWZvb3Rlci10b29sc19fY2VsbFxcXCIgY29sc3Bhbj1cXFwiMTAwJVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtZm9vdGVyLXRvb2xzX19jb250YWluZXIgYWJyaXMtdGFibGUtZ3JvdXAtaGVhZGVyLXRlY2huaWNhbC1jZWxsXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXJvdy1tYW5hZ2VtZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGFicmlzLWFjdGlvbnMgY2xhc3M9XFxcImFicmlzLXRhYmxlLWFjdGlvbnNcXFwiIHBhcmFtcz1cXFwibW9kZWw6ICRkYXRhLCBvcHRpb25zOiB7IGFjdGlvbjogJ2JvdHRvbUFjdGlvbnMnIH1cXFwiPlxcbiAgICAgICAgICAgICAgICA8L2FicmlzLWFjdGlvbnM+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLWluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtaW5mb19fdG90YWwgYWJyaXMtdGFibGUtaW5mb19fdGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICBkYXRhLWJpbmQ9XFxcInRleHQ6ICdUb3RhbDogJyArIHRvdGFsQ291bnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtaW5mb19fZ28tdG9cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1nby10b19fdGV4dCBhYnJpcy10YWJsZS1pbmZvX190ZXh0XFxcIj5HbyB0bzogPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtZ28tdG9fX3ZhbHVlXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBzdGFydFJvd1xcXCIvPlxcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImFicmlzLWJ0bi10cmFuc3BhcmVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZS1nby10b19faWNvblxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5hcnJvd3JpZ2h0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgPC90Zm9vdD5cXG4gICAgPC90YWJsZT5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwiYWJyaXMtc2VhcmNoXFxcIj5cXG4gIDxpbnB1dCBjbGFzcz1cXFwiYWJyaXMtc2VhcmNoX192YWx1ZVxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogdmFsdWUsIGF0dHI6IHsgcGxhY2Vob2xkZXI6ICdTZWFyY2guLi4nIH1cXFwiIC8+XFxuICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zZWFyY2hfX2J1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogcmVmcmVzaCwgYXR0cjogeyB0aXRsZTogJ1NlYXJjaCcgfVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXNlYXJjaF9faWNvblxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5zZWFyY2hcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3BhbiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtc3VtbWFyeV9fdmFsdWVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogdmFsdWVcXFwiPjwvc3Bhbj5cXG48c2VsZWN0IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1zdW1tYXJ5X19zZWxlY3RcXFwiICBkYXRhLWJpbmQ9XFxcInZhbHVlOiBmdW5jXFxcIj5cXG4gIDwhLS0ga28gZm9yZWFjaDogc3VtbWFyeUl0ZW1zIC0tPlxcbiAgICA8b3B0aW9uIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGUsIHZhbHVlOiB2YWx1ZSwgYXR0cjoge3RpdGxlOiB0aXRsZX1cXFwiPjwvb3B0aW9uPlxcbiAgPCEtLSAva28gLS0+ICBcXG48L3NlbGVjdD5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gZGF0YS1iaW5kPVxcXCJjbGljazogJGRhdGEuZm9ybUlkICE9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhY3Rpb24sIFxcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAhJGRhdGEudmlzaWJsZSB8fCBrby51bndyYXAodmlzaWJsZSksXFxuICAgICAgICAgICAgICAgIGVuYWJsZTogISRkYXRhLmVuYWJsZWQgfHwga28udW53cmFwKGVuYWJsZWQpLFxcbiAgICAgICAgICAgICAgICBhdHRyOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdhYnJpcy1idXR0b24tLXRyYW5zcGFyZW50IGFjdGlvbi1idXR0b24gYWJyaXMtYWN0aW9uLWJ1dHRvbiAnICsga28udW53cmFwKCRkYXRhLmNzc0NsYXNzZXMpICsgKGtvLnVud3JhcCgkZGF0YS5hY3RpdmUpID09PSB0cnVlID8gJyBhYnJpcy1hY3Rpb24tLWFjdGl2ZScgOiAnJyksXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICRkYXRhLnRpdGxlIHx8ICRkYXRhLm5hbWUsIGZvcm06ICRkYXRhLmZvcm1JZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAkZGF0YS5mb3JtSWQgIT09IHVuZGVmaW5lZCA/ICdzdWJtaXQnIDogJ2J1dHRvbidcXG4gICAgICAgICAgICAgICAgICAgIH1cXFwiPlxcbiAgICA8IS0tIGtvIGlmOiAkZGF0YS5pY29uIC0tPlxcbiAgICA8IS0tIDxzcGFuIGRhdGEtYmluZD1cXFwiY3NzOiAoJ2ZhIGljb24gJyArICh0eXBlb2YgaWNvbiA9PSAnZnVuY3Rpb24nID8gaWNvbigpIDogaWNvbikpXFxcIj48L3NwYW4+IC0tPlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gICAgPCEtLSBrbyBpZjogJGRhdGEuc3ZnIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1hY3Rpb24tYnV0dG9uX19pY29uIGFicmlzLWJ1dHRvbl9fc3ZnLWljb25cXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogc3ZnXFxcIj48L2Rpdj5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0ga28gaWZub3Q6ICRwYXJlbnRzWzFdLnNob3J0IC0tPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiYWJyaXMtYWN0aW9uLWJ1dHRvbl9fbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJGRhdGEudGl0bGUsIGNzczoga28udW53cmFwKCRkYXRhLmNzc0xhYmVsKSwgc3R5bGU6IHsnZGlzcGxheScgOiAkZGF0YS50aXRsZSA/ICdibG9jaycgOiAnbm9uZSd9XFxcIiA+PC9zcGFuPlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L2J1dHRvbj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjwhLS0ga28gZm9yZWFjaDogYWN0aW9ucyAtLT5cXG48IS0tIGtvIGlmbm90OiBrby51bndyYXAoJGRhdGEuYWN0aW9ucykgLS0+XFxuPCEtLSBrbyBpZjogISRkYXRhLmdyb3VwTmFtZSAmJiAhJHBhcmVudC5ncm91cE5hbWUgfHwgJGRhdGEuZ3JvdXBOYW1lID09ICRwYXJlbnQuZ3JvdXBOYW1lICAtLT5cXG48IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiAnYWJyaXMtYWN0aW9uLWl0ZW0nLCBwYXJhbXM6ICRkYXRhIH0gLS0+XFxuPCEtLSAva28gLS0+XFxuPCEtLSAva28gLS0+XFxuPCEtLSAva28gLS0+XFxuPCEtLSBrbyBpZjoga28udW53cmFwKCRkYXRhLmFjdGlvbnMpICYmIGtvLnVud3JhcCgkZGF0YS5hY3Rpb25zKS5sZW5ndGggPiAwIC0tPlxcbjwhLS0ga28gaWY6ICEkZGF0YS5ncm91cE5hbWUgJiYgISRwYXJlbnQuZ3JvdXBOYW1lIHx8ICRkYXRhLmdyb3VwTmFtZSA9PSAkcGFyZW50Lmdyb3VwTmFtZSAgLS0+XFxuPGRpdiBjbGFzcz1cXFwiYWJyaXMtbmVzdGVkLWFjdGlvbnMgYWJyaXMtYWN0aW9uLWNvbnRleHQtYnV0dG9uXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImFicmlzLWJ1dHRvbl9fbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtbmVzdGVkLWFjdGlvbnNfX2Ryb3Bkb3duXFxcIj5cXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogYWN0aW9ucyAtLT5cXG4gICAgICAgIDwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6ICdhYnJpcy1hY3Rpb24taXRlbScsIHBhcmFtczogJGRhdGEgfSAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcbjwhLS0gL2tvIC0tPlxcbjwhLS0gL2tvIC0tPlxcbjwhLS0gL2tvIC0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBjbGFzcz1cXFwiYWJyaXMtYWN0aW9uLWJ1dHRvbiBhYnJpcy1idXR0b24tLXRyYW5zcGFyZW50IGFicmlzLWJ1dHRvbi10b2dnbGVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCJcXG4gICAgZGF0YS1iaW5kPVxcXCJjbGljazogdG9nZ2xlLCBhdHRyOiB7IHRpdGxlOiB0aXRsZSB9XFxcIj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLm1vcmVfc3FcXFwiPjwvZGl2PlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiYWJyaXMtYWN0aW9uLWJ1dHRvbl9fbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbW9yZVRleHRcXFwiPjwvc3Bhbj5cXG48L2J1dHRvbj5cXG48IS0tIGtvIGlmOiBpc09wZW4gLS0+XFxuPHVsIGNsYXNzPVxcXCJhYnJpcy1idXR0b24tdG9nZ2xlX19kcm9wZG93bi1tZW51XFxcIj5cXG4gICAgPGFicmlzLWFjdGlvbnMgY2xhc3M9XFxcImFicmlzLWNvbnRleHQtYWN0aW9uc1xcXCIgcGFyYW1zPVxcXCJtb2RlbDogZGF0YSwgb3B0aW9uczogeyBhY3Rpb246IGFjdGlvbnMgfVxcXCI+XFxuICAgIDwvYWJyaXMtYWN0aW9ucz5cXG48L3VsPlxcbjwhLS0gL2tvIC0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLSA8c3ZnIGNsYXNzPVxcXCJhYnJpcy1idXR0b25fX3N2Zy1pY29uXFxcIj48dXNlIGRhdGEtYmluZD1cXFwiYXR0cjp7J3hsaW5rOmhyZWYnOidzcHJpdGVtYXAuc3ZnI3Nwcml0ZS1pY29uXycra28udW53cmFwKGlkKX1cXFwiICB4bGluazpocmVmPScnPjwvdXNlPjwvc3ZnPiAtLT5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTMgOC40MzZhMS41IDEuNSAwIDAgMSAyLjEyMS4wMDZsOS4yNjUgOS4zMTRhLjg2NS44NjUgMCAwIDAgMS4yMjggMGw5LjI2NS05LjMxNGExLjUgMS41IDAgMCAxIDIuMTIxLS4wMDYgMS41IDEuNSAwIDAgMSAuMDA2IDIuMTIxbC0xMC45NDMgMTFhMS41IDEuNSAwIDAgMS0yLjEyNiAwbC0xMC45NDMtMTFhMS41IDEuNSAwIDAgMSAuMDA2LTIuMTIxelxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk04Ljk2OCAyN2ExLjUgMS41IDAgMCAxIC4wMDUtMi4xMjFsOS4zMTUtOS4yNjVhLjg2Ny44NjcgMCAwIDAgMC0xLjIyOGwtOS4zMTUtOS4yNjVhMS41IDEuNSAwIDAgMS0uMDA1LTIuMTIxIDEuNSAxLjUgMCAwIDEgMi4xMjEtLjAwNmwxMSAxMC45NDNhMS41IDEuNSAwIDAgMSAwIDIuMTI2bC0xMSAxMC45NDNhMS41IDEuNSAwIDAgMS0yLjEyMS0uMDA2elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yNiA4YTEuNSAxLjUgMCAwIDAtMi4xMjEgMGwtMTEuMjY0IDExLjI2NGEuODY5Ljg2OSAwIDAgMS0xLjIzIDBsLTUuMjY0LTUuMjY0YTEuNSAxLjUgMCAwIDAtMi4xMjEgMi4xMjFsNi45MzkgNi45NGExLjUgMS41IDAgMCAwIDIuMTIyIDBsMTIuOTM5LTEyLjk0YTEuNSAxLjUgMCAwIDAgMC0yLjEyMXpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTcuNzE1IDE1bDEwLjcyMy0xMC43MjNhMS45MjEgMS45MjEgMCAwIDAgMC0yLjcxNSAxLjkyMSAxLjkyMSAwIDAgMC0yLjcxNSAwbC0xMC43MjMgMTAuNzIzLTEwLjcyMy0xMC43MjNhMS45MiAxLjkyIDAgMCAwLTIuNzE1IDIuNzE1bDEwLjcyMyAxMC43MjMtMTAuNzIzIDEwLjcyM2ExLjkyIDEuOTIgMCAxIDAgMi43MTUgMi43MTVsMTAuNzIzLTEwLjcyMyAxMC43MjMgMTAuNzIzYTEuOTIgMS45MiAwIDEgMCAyLjcxNS0yLjcxNXpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMjEuNTczIDI5aC0xNy4zOTZhMy4xNzggMy4xNzggMCAwIDEtMy4xNzctMy4xNzd2LTE3LjE0NmEzLjE3OCAzLjE3OCAwIDAgMSAzLjE3Ny0zLjE3N2g3LjJhMS41IDEuNSAwIDAgMSAxLjUgMS41IDEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNy4yYS4xNzguMTc4IDAgMCAwLS4xNzcuMTc3djE3LjE0NmEuMTc4LjE3OCAwIDAgMCAuMTc3LjE3N2gxNy40YS4xNzguMTc4IDAgMCAwIC4xNzgtLjE3OHYtNy4wNzJhMS41IDEuNSAwIDAgMSAxLjUtMS41IDEuNSAxLjUgMCAwIDEgMS41IDEuNXY3LjA3M2EzLjE3OCAzLjE3OCAwIDAgMS0zLjE4MiAzLjE3N3pNOC4xODEgMjEuMjgzbC42MTktMy40NzNhLjQ1NC40NTQgMCAwIDEgLjc2OC0uMjQxbDIuODUzIDIuODUzYS40NTMuNDUzIDAgMCAxLS4yNDIuNzY3bC0zLjQ3Mi42MjFhLjQ1NC40NTQgMCAwIDEtLjUyNi0uNTI3elxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjE1LjQwNVxcXCIgeT1cXFwiMy41ODVcXFwiIHdpZHRoPVxcXCI1XFxcIiBoZWlnaHQ9XFxcIjE3XFxcIiByeD1cXFwiLjQ4XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgxMy43OSAtOS4xMjEpIHJvdGF0ZSg0NSlcXFwiPjwvcmVjdD48cGF0aCBkPVxcXCJNMjQuOSAyLjUzMWgyLjI0MWExLjM3OSAxLjM3OSAwIDAgMSAxLjM3NSAxLjM3OXYuOTE5YS41ODkuNTg5IDAgMCAxLS41ODkuNTg5aC0zLjgyN2EuNTg5LjU4OSAwIDAgMS0uNTg5LS41ODl2LS45MTlhMS4zNzkgMS4zNzkgMCAwIDEgMS4zODktMS4zNzl6XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgxMC40MyAtMTcuMjMyKSByb3RhdGUoNDUpXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTAgMzBsMzAtMzBcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMjYuMyw3LjUzMUExLjg4MywxLjg4MywwLDAsMCwyOC4xOCw1LjY0OVYxLjg4M0ExLjg4MywxLjg4MywwLDAsMCwyNi4zLDBIMy43QTEuODgzLDEuODgzLDAsMCwwLDEuODIsMS44ODNhMS44NjIsMS44NjIsMCwwLDAsLjEzOS43bDAsLjAxMWExLjg4NywxLjg4NywwLDAsMCwuNDExLjYyaDBMMTQuMTU3LDE1LDIuMzg3LDI2Ljc3bDAsLjAwNkExLjg4MiwxLjg4MiwwLDAsMCwzLjcsMzBIMjYuM2ExLjg4MywxLjg4MywwLDAsMCwxLjg4My0xLjg4M1YyNC4zNTFhMS44ODMsMS44ODMsMCwwLDAtMy43NjYsMHYxLjg4M0g4LjI0OWw5LjktOS45YTEuODgxLDEuODgxLDAsMCwwLDAtMi42NjJsLS4wMDgtLjAwNiwwLS4wMDhMOC4yNDksMy43NjZIMjQuNDE0VjUuNjQ5QTEuODgzLDEuODgzLDAsMCwwLDI2LjMsNy41MzFaXFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTEzLjA2IDI5LjE4OGEyLjAyIDIuMDIgMCAwIDEtMS4xMi0uMzMzIDIuMTI2IDIuMTI2IDAgMCAxLS45NC0xLjgyNnYtOS4yNzJhMi4wMTUgMi4wMTUgMCAwIDAtLjI4MS0uODM1bC05LjMxOS0xMi4yNDFhMS45OTQgMS45OTQgMCAwIDEtLjI4MS0yLjExOSAyIDIgMCAwIDEgMS44NTItMS4wNjJoMjQuMDU4YTIuMDE0IDIuMDE0IDAgMCAxIDEuODU0IDEuMDQ3IDIuMDEzIDIuMDEzIDAgMCAxLS4yMjkgMi4xMTZsLTguNzQzIDEyLjIwN2EyLjE5MyAyLjE5MyAwIDAgMC0uMjg1Ljg4N3Y2LjgyMmEzLjEgMy4xIDAgMCAxLTEuNzkxIDIuNzM0bC0zLjg0NiAxLjY3NWEyLjMyMSAyLjMyMSAwIDAgMS0uOTI5LjJ6bS04LjAzMi0yNC42ODhsOC4wNzcgMTAuNmE0Ljg3MSA0Ljg3MSAwIDAgMSAuODk1IDIuNjU3djcuOTU0bDIuNjM3LTEuMTQ5LS4wMTEtNi44YTUuMDU4IDUuMDU4IDAgMCAxIC44NDYtMi42MzRsNy42MDktMTAuNjI4elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjcgMjdcXFwiPjxnIGlkPVxcXCLQodC70L7QuV80NFxcXCIgZGF0YS1uYW1lPVxcXCLQodC70L7QuSA0NFxcXCI+PHBhdGggZD1cXFwiTTIzLjY3LDBIMy4zM0EzLjM0LDMuMzQsMCwwLDAsMCwzLjMzVjIzLjY3QTMuMzQsMy4zNCwwLDAsMCwzLjMzLDI3SDIzLjY3QTMuMzQsMy4zNCwwLDAsMCwyNywyMy42N1YzLjMzQTMuMzQsMy4zNCwwLDAsMCwyMy42NywwWk0yNCwyMy42N2EuMzMuMzMsMCwwLDEtLjMzLjMzSDMuMzNBLjMzLjMzLDAsMCwxLDMsMjMuNjdWMy4zM0EuMzMuMzMsMCwwLDEsMy4zMywzSDIzLjY3YS4zMy4zMywwLDAsMSwuMzMuMzNaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE5Ljg2LDEySDE1VjcuMTRhMS41MSwxLjUxLDAsMSwwLTMsMFYxMkg3LjE0YTEuNTEsMS41MSwwLDEsMCwwLDNIMTJ2NC44NWExLjUxLDEuNTEsMCwxLDAsMywwVjE1aDQuODVhMS41MSwxLjUxLDAsMSwwLDAtM1pcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNyAyN1xcXCI+PGcgaWQ9XFxcItCh0LvQvtC5XzQ0XFxcIiBkYXRhLW5hbWU9XFxcItCh0LvQvtC5IDQ0XFxcIj48cGF0aCBkPVxcXCJNMjMuNjcsMEgzLjMzQTMuMzQsMy4zNCwwLDAsMCwwLDMuMzNWMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDMuMzMsMjdIMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDI3LDIzLjY3VjMuMzNBMy4zNCwzLjM0LDAsMCwwLDIzLjY3LDBaTTI0LDIzLjY3YS4zMy4zMywwLDAsMS0uMzMuMzNIMy4zM0EuMzMuMzMsMCwwLDEsMywyMy42N1YzLjMzQS4zMy4zMywwLDAsMSwzLjMzLDNIMjMuNjdhLjMzLjMzLDAsMCwxLC4zMy4zM1pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMjAuMjIsNi43OGExLjg0LDEuODQsMCwwLDAtMi41OSwwTDEzLjUsMTAuOTIsOS4zNyw2Ljc4QTEuODMsMS44MywwLDAsMCw2Ljc4LDkuMzdsNC4xNCw0LjEzTDYuNzgsMTcuNjNhMS44MywxLjgzLDAsMCwwLDIuNTksMi41OWw0LjEzLTQuMTQsNC4xMyw0LjE0YTEuODMsMS44MywwLDAsMCwyLjU5LTIuNTlMMTYuMDgsMTMuNWw0LjE0LTQuMTNBMS44NCwxLjg0LDAsMCwwLDIwLjIyLDYuNzhaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjcgMjdcXFwiPjxnIGlkPVxcXCLQodC70L7QuV8yM1xcXCIgZGF0YS1uYW1lPVxcXCLQodC70L7QuSAyM1xcXCI+PHBhdGggZD1cXFwiTTIzLjY3LDBIMy4zM0EzLjM0LDMuMzQsMCwwLDAsMCwzLjMzVjIzLjY3QTMuMzQsMy4zNCwwLDAsMCwzLjMzLDI3SDIzLjY3QTMuMzQsMy4zNCwwLDAsMCwyNywyMy42N1YzLjMzQTMuMzQsMy4zNCwwLDAsMCwyMy42NywwWk0yNCwyMy42N2EuMzMuMzMsMCwwLDEtLjMzLjMzSDMuMzNBLjMzLjMzLDAsMCwxLDMsMjMuNjdWMy4zM0EuMzMuMzMsMCwwLDEsMy4zMywzSDIzLjY3YS4zMy4zMywwLDAsMSwuMzMuMzNaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE4LDUuMjFIOUEyLjMyLDIuMzIsMCwwLDAsNi42NSw3LjUyVjE5LjczYTIuMDgsMi4wOCwwLDAsMCwyLjA2LDIuMDZBMi4wNywyLjA3LDAsMCwwLDEwLDIxLjMxbDMuNDgtMi45TDE3LDIxLjMxYTIuMDYsMi4wNiwwLDAsMCwzLjM3LTEuNThWNy41MkEyLjMyLDIuMzIsMCwwLDAsMTgsNS4yMVptLS40MywxMy4wNi0yLjgtMi4zM2EyLDIsMCwwLDAtMi42MiwwbC0yLjgsMi4zM1Y4aDguMjJaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxjaXJjbGUgY3g9XFxcIjE1XFxcIiBjeT1cXFwiNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTVcXFwiIGN5PVxcXCIxNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTVcXFwiIGN5PVxcXCIyNVxcXCIgcj1cXFwiM1xcXCI+PC9jaXJjbGU+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTEwLjUgMTMuNWgtNmEzIDMgMCAwIDEtMy0zdi02YTMgMyAwIDAgMSAzLTNoNmEzIDMgMCAwIDEgMyAzdjZhMyAzIDAgMCAxLTMgM3ptLTYtMTBhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xdi02YTEgMSAwIDAgMC0xLTF6TTI1LjUgMTMuNWgtNmEzIDMgMCAwIDEtMy0zdi02YTMgMyAwIDAgMSAzLTNoNmEzIDMgMCAwIDEgMyAzdjZhMyAzIDAgMCAxLTMgM3ptLTYtMTBhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xdi02YTEgMSAwIDAgMC0xLTF6TTEwLjUgMjguNWgtNmEzIDMgMCAwIDEtMy0zdi02YTMgMyAwIDAgMSAzLTNoNmEzIDMgMCAwIDEgMyAzdjZhMyAzIDAgMCAxLTMgM3ptLTYtMTBhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xdi02YTEgMSAwIDAgMC0xLTF6TTI1LjUgMjguNWgtNmEzIDMgMCAwIDEtMy0zdi02YTMgMyAwIDAgMSAzLTNoNmEzIDMgMCAwIDEgMyAzdjZhMyAzIDAgMCAxLTMgM3ptLTYtMTBhMSAxIDAgMCAwLTEgMXY2YTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xdi02YTEgMSAwIDAgMC0xLTF6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTMuMjA5Ljc1SDIwLjY3OGEzLjIsMy4yLDAsMCwxLDMuMjA5LDMuMTc3VjUuNzVoMi45MzZBMy4xOCwzLjE4LDAsMCwxLDMwLDguOTI3VjI2LjA3M2EzLjE4LDMuMTgsMCwwLDEtMy4xNzcsMy4xNzdIOS4zMjJhMy4yLDMuMiwwLDAsMS0zLjIwOS0zLjE3N1YyNC4yNWgtMi45QTMuMiwzLjIsMCwwLDEsMCwyMS4wNzNWMy45MjdBMy4yLDMuMiwwLDAsMSwzLjIwOS43NVptMjMuNTgyLDI1LjVBLjIuMiwwLDAsMCwyNywyNi4wNzNWOC45MjdhLjIuMiwwLDAsMC0uMjA5LS4xNzdIOS40MjdhLjE3OC4xNzgsMCwwLDAtLjE3Ny4xNzdWMjYuMDczYS4xNzguMTc4LDAsMCwwLC4xNzcuMTc3Wk0zLDIxLjA3M2EuMi4yLDAsMCwwLC4yMDkuMTc3SDYuMjVWOC45MjdBMy4xOCwzLjE4LDAsMCwxLDkuNDI3LDUuNzVoMTEuNDZWMy45MjdhLjIuMiwwLDAsMC0uMjA5LS4xNzdIMy4yMDlBLjIuMiwwLDAsMCwzLDMuOTI3WlxcXCIgc3R5bGU9XFxcImZpbGw6IzA5MmEzYVxcXCI+PC9wYXRoPjxyZWN0IHg9XFxcIjExLjVcXFwiIHk9XFxcIjEwLjgyM1xcXCIgd2lkdGg9XFxcIjEzXFxcIiBoZWlnaHQ9XFxcIjNcXFwiIHJ4PVxcXCIxLjVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDM2IDI0LjY0NSkgcm90YXRlKC0xODApXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTEuNVxcXCIgeT1cXFwiMTUuODIzXFxcIiB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiM1xcXCIgcng9XFxcIjEuNVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMzYgMzQuNjQ1KSByb3RhdGUoMTgwKVxcXCIgc3R5bGU9XFxcImZpbGw6IzA5MmEzYVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjExLjVcXFwiIHk9XFxcIjIwLjgyM1xcXCIgd2lkdGg9XFxcIjEzXFxcIiBoZWlnaHQ9XFxcIjNcXFwiIHJ4PVxcXCIxLjVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDM2IDQ0LjY0NSkgcm90YXRlKDE4MClcXFwiPjwvcmVjdD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMjguMjUgMjUuNjI5bC03LjI4Mi03LjI4MmExMC45ODcgMTAuOTg3IDAgMSAwLTIuMDQ5IDIuMTkzbDcuMjEgNy4yMWExLjUgMS41IDAgMSAwIDIuMTIxLTIuMTIxem0tMTYuMjUtNS42MjlhOCA4IDAgMSAxIDgtOCA4LjAwOSA4LjAwOSAwIDAgMS04IDh6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTE5LjY4MSAxMS41MThoNC45Mzh2MS4yODJoLTYuODgxdi0xLjA0MWw0Ljc4LTYuOTA2aC00Ljc0OHYtMS4yOTVoNi43djEuMDE1ek0yMy4zNDQgMjIuNjQ3aC0zLjU4bC0uNzUgMi4xNTNoLTEuNjY5bDMuNDkxLTkuMjQyaDEuNDQxbDMuNSA5LjI0MmgtMS42Nzd6bS0zLjEzLTEuMjk0aDIuNjc5bC0xLjM0LTMuODM0ek0xNC44MDUgMTguNjg5YTEuMjQ5IDEuMjQ5IDAgMCAwLTEuNzY3IDBsLTIuMTU2IDIuMTU2di0xNi4wMjlhMS4yNSAxLjI1IDAgMCAwLTIuNSAwdjE2LjAxOGwtMi4xMi0yLjEyYTEuMjQ4IDEuMjQ4IDAgMCAwLTEuNzY2IDBsLS4wMTMuMDEzYTEuMjQ4IDEuMjQ4IDAgMCAwIDAgMS43NjZsNC4yNzYgNC4yNzZhMS4yNDkgMS4yNDkgMCAwIDAgMS43NjUgMGwuMDEzLS4wMTNhLjg5My44OTMgMCAwIDAgLjA2LS4wOTFsNC4yMDgtNC4yMDhhMS4yNDkgMS4yNDkgMCAwIDAgMC0xLjc2OHpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMjMuMzQ0IDEwLjY0N2gtMy41OGwtLjc1IDIuMTUzaC0xLjY2OWwzLjQ5MS05LjI0MmgxLjQ0MWwzLjUgOS4yNDJoLTEuNjc3em0tMy4xMy0xLjI5NGgyLjY3OWwtMS4zNC0zLjgzNHpNMTkuNjgxIDIzLjUxOGg0LjkzOHYxLjI4MmgtNi44ODF2LTEuMDQxbDQuNzgtNi45MDZoLTQuNzQ4di0xLjNoNi43djEuMDE1ek0xNC44MDUgMTguNjlhMS4yNDkgMS4yNDkgMCAwIDAtMS43NjcgMGwtMi4xNTYgMi4xNTV2LTE2LjAyOWExLjI1IDEuMjUgMCAwIDAtMi41IDB2MTYuMDE5bC0yLjEyLTIuMTIxYTEuMjUgMS4yNSAwIDAgMC0xLjc2NiAwbC0uMDEzLjAxM2ExLjI0OCAxLjI0OCAwIDAgMCAwIDEuNzY2bDQuMjc2IDQuMjc2YTEuMjQ5IDEuMjQ5IDAgMCAwIDEuNzY1IDBsLjAxMy0uMDEzYTEgMSAwIDAgMCAuMDYtLjA5bDQuMjA4LTQuMjA5YTEuMjQ4IDEuMjQ4IDAgMCAwIDAtMS43Njd6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PGcgaWQ9XFxcImFcXFwiPjwvZz48ZyBpZD1cXFwiYlxcXCI+PC9nPjxnIGlkPVxcXCJjXFxcIj48L2c+PGcgaWQ9XFxcImRcXFwiPjwvZz48ZyBpZD1cXFwiZVxcXCI+PC9nPjxnIGlkPVxcXCJmXFxcIj48L2c+PGcgaWQ9XFxcImdcXFwiPjwvZz48ZyBpZD1cXFwiaFxcXCI+PC9nPjxnIGlkPVxcXCJpXFxcIj48L2c+PGcgaWQ9XFxcImpcXFwiPjwvZz48ZyBpZD1cXFwia1xcXCI+PC9nPjxnIGlkPVxcXCJsXFxcIj48L2c+PGcgaWQ9XFxcIm1cXFwiPjwvZz48ZyBpZD1cXFwiblxcXCI+PC9nPjxnIGlkPVxcXCJvXFxcIj48L2c+PGcgaWQ9XFxcInBcXFwiPjwvZz48ZyBpZD1cXFwicVxcXCI+PC9nPjxnIGlkPVxcXCJyXFxcIj48L2c+PGcgaWQ9XFxcInNcXFwiPjwvZz48ZyBpZD1cXFwidFxcXCI+PC9nPjxnIGlkPVxcXCJ1XFxcIj48L2c+PGcgaWQ9XFxcInZcXFwiPjwvZz48ZyBpZD1cXFwid1xcXCI+PC9nPjxnIGlkPVxcXCJ4XFxcIj48L2c+PGcgaWQ9XFxcInlcXFwiPjwvZz48ZyBpZD1cXFwiYSYjeDYwO1xcXCI+PC9nPjxnIGlkPVxcXCJhYVxcXCI+PC9nPjxnIGlkPVxcXCJhYlxcXCI+PC9nPjxnIGlkPVxcXCJhY1xcXCI+PC9nPjxnIGlkPVxcXCJhZFxcXCI+PC9nPjxnIGlkPVxcXCJhZVxcXCI+PC9nPjxnIGlkPVxcXCJhZlxcXCI+PC9nPjxnIGlkPVxcXCJhZ1xcXCI+PC9nPjxnIGlkPVxcXCJhaFxcXCI+PC9nPjxnIGlkPVxcXCJhaVxcXCI+PC9nPjxnIGlkPVxcXCJhalxcXCI+PC9nPjxnIGlkPVxcXCJha1xcXCI+PC9nPjxnIGlkPVxcXCJhbFxcXCI+PC9nPjxnIGlkPVxcXCJhbVxcXCI+PC9nPjxnIGlkPVxcXCJhblxcXCI+PC9nPjxnIGlkPVxcXCJhb1xcXCI+PC9nPjxnIGlkPVxcXCJhcFxcXCI+PC9nPjxnIGlkPVxcXCJhcVxcXCI+PC9nPjxnIGlkPVxcXCJhclxcXCI+PC9nPjxnIGlkPVxcXCJhc1xcXCI+PC9nPjxnIGlkPVxcXCJhdFxcXCI+PC9nPjxnIGlkPVxcXCJhdVxcXCI+PC9nPjxnIGlkPVxcXCJhdlxcXCI+PC9nPjxnIGlkPVxcXCJhd1xcXCI+PC9nPjxnIGlkPVxcXCJheFxcXCI+PC9nPjxnIGlkPVxcXCJheVxcXCI+PC9nPjxnIGlkPVxcXCJiJiN4NjA7XFxcIj48L2c+PGcgaWQ9XFxcImJhXFxcIj48L2c+PGcgaWQ9XFxcImJiXFxcIj48L2c+PGcgaWQ9XFxcImJjXFxcIj48L2c+PGcgaWQ9XFxcImJkXFxcIj48L2c+PGcgaWQ9XFxcImJlXFxcIj48L2c+PGcgaWQ9XFxcImJmXFxcIj48L2c+PGcgaWQ9XFxcImJnXFxcIj48L2c+PGcgaWQ9XFxcImJoXFxcIj48cGF0aCBkPVxcXCJNMjUuNzMsMUg0LjI3Yy0xLjgxLDAtMy4yNywxLjQ3LTMuMjcsMy4yN1YyNS43M2MwLDEuODEsMS40NywzLjI3LDMuMjcsMy4yN0gyNS43M2MxLjgxLDAsMy4yNy0xLjQ3LDMuMjctMy4yN1Y0LjI3YzAtMS44MS0xLjQ3LTMuMjctMy4yNy0zLjI3Wk05LDI3SDQuMjdjLS43LDAtMS4yNy0uNTctMS4yNy0xLjI3di00LjIzaDZ2NS41Wm0wLTcuNUgzdi01LjVoNnY1LjVabTAtNy41SDNWN2g2djVabTktM1YyN2gtN1Y3aDd2MlptOSwxNi43M2MwLC43LS41NywxLjI3LTEuMjcsMS4yN2gtNS43M3YtNS41aDd2NC4yM1ptMC02LjIzaC03di01LjVoN3Y1LjVabTAtNy41aC03VjdoN3Y1WlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuL3Byb3BlcnR5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFjdGlvbjogKCkgPT4gdm9pZDtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgc3ZnPzogc3RyaW5nO1xuICAgIGNvbnRhaW5lcj86IHN0cmluZztcbiAgICBjc3NDbGFzc2VzPzogc3RyaW5nO1xuICAgIGNzc0ltYWdlPzogc3RyaW5nO1xuICAgIGNzc0xhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZT86IElBY3Rpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB0aGlzW2tleV0gPSBzb3VyY2Vba2V5XSk7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSgpIG5hbWU6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBhY3Rpb246ICgpID0+IHZvaWQ7XG4gICAgQHByb3BlcnR5KCkgdGl0bGU6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSB2aXNpYmxlOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIGVuYWJsZWQ6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgYWN0aXZlOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIGljb246IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBzdmc6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBjb250YWluZXI6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBjc3NDbGFzc2VzOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgY3NzSW1hZ2U6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBjc3NMYWJlbDogc3RyaW5nO1xufSIsImltcG9ydCBcIi4vYWN0aW9ucy5zY3NzXCI7XG5cbiIsImltcG9ydCB7IGlzRXF1YWwgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IERlcGVuZGVuY2llcyB9IGZyb20gXCIuL2RlcGVuZGVuY2llc1wiO1xuXG5leHBvcnQgY2xhc3MgSGFzaFRhYmxlU3RvcmFnZSB7XG4gICAgcHJvdGVjdGVkIGhhc2ggPSB7fTtcbiAgICBwdWJsaWMgb3duZXI6IGFueTtcbiAgICBwdWJsaWMgZ2V0VmFsdWUobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmhhc2hbbmFtZV07XG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VmFsdWUobmFtZTogc3RyaW5nLCB2YWw6IGFueSkge1xuICAgICAgICB0aGlzLmhhc2hbbmFtZV0gPSB2YWw7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFzZSB7XG4gICAgcHJpdmF0ZSBwcm9wZXJ0eVZhbHVlTGlzdG5lcnM6IHtbcHJvcGVydHlOYW1lOiBzdHJpbmddOiB7W2tleTogc3RyaW5nXTogKG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQgfX0gPSB7fTtcblxuICAgIHByaXZhdGUgc3RhdGljIGN1cnJlbnREZXBlbmRlbmNpczogRGVwZW5kZW5jaWVzID0gdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVQcm9wZXJ0aWVzU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBIYXNoVGFibGVTdG9yYWdlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZmluaXNoQ29sbGVjdERlcGVuZGVuY2llcygpOiBEZXBlbmRlbmNpZXMge1xuICAgICAgY29uc3QgZGVwcyA9IEJhc2UuY3VycmVudERlcGVuZGVuY2lzO1xuICAgICAgQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gZGVwcztcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBzdGFydENvbGxlY3REZXBlbmRlbmNpZXModXBkYXRlcjogKCkgPT4gdm9pZCwgdGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAoQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0IHRvIGNvbGxlY3QgbmVzdGVkIGRlcGVuZGVuY2llcy4gTmVzdGVkIGRlcGVuZGVuY2llcyBhcmUgbm90IHN1cHBvcnRlZC5cIik7XG4gICAgICB9XG4gICAgICBCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyA9IG5ldyBEZXBlbmRlbmNpZXModXBkYXRlciwgdGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIGNvbGxlY3REZXBlbmRlbmN5KHRhcmdldDogQmFzZSwgcHJvcGVydHk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKEJhc2UuY3VycmVudERlcGVuZGVuY2lzID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIEJhc2UuY3VycmVudERlcGVuZGVuY2lzLmFkZERlcGVuZGVuY3kodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgfVxuICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2UgPSBCYXNlLmNyZWF0ZVByb3BlcnRpZXNTdG9yYWdlKCkpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLm93bmVyID0gdGhpcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eU5hbWU6IHN0cmluZywgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICBsZXQgcHJvcGVydHlMaXN0bmVycyA9IHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKCEhcHJvcGVydHlMaXN0bmVycykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydHlMaXN0bmVycykuZm9yRWFjaChrZXkgPT4gcHJvcGVydHlMaXN0bmVyc1trZXldKG9sZFZhbHVlLCBuZXdWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFByb3BlcnR5VmFsdWVDb3JlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgQmFzZS5jb2xsZWN0RGVwZW5kZW5jeSh0aGlzLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RvcmFnZS5nZXRWYWx1ZShwcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldFByb3BlcnR5VmFsdWVDb3JlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXRWYWx1ZShwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5VmFsdWVDb3JlKHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIHNldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIGlmKCFpc0VxdWFsKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHlOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIocHJvcGVydHlOYW1lOiBzdHJpbmcsIGxpc3RuZXI6IChvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkLCBrZXk6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgbGV0IHByb3BlcnR5TGlzdG5lcnMgPSB0aGlzLnByb3BlcnR5VmFsdWVMaXN0bmVyc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZighcHJvcGVydHlMaXN0bmVycykge1xuICAgICAgICAgICAgcHJvcGVydHlMaXN0bmVycyA9IHt9XG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5VmFsdWVMaXN0bmVyc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydHlMaXN0bmVycztcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0eUxpc3RuZXJzW2tleV0gPSBsaXN0bmVyO1xuICAgIH1cbiAgICBwdWJsaWMgdW5SZWdpc3RlclByb3BlcnR5VmFsdWVMaXN0bmVyKHByb3BlcnR5TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgbGV0IHByb3BlcnR5TGlzdG5lcnMgPSB0aGlzLnByb3BlcnR5VmFsdWVMaXN0bmVyc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZighIXByb3BlcnR5TGlzdG5lcnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9wZXJ0eUxpc3RuZXJzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRGVwZW5kZW5jaWVzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBEZXBlbmRlbmNpZXNDb3VudCA9IDA7XG4gICAgY29uc3RydWN0b3IocHVibGljIGN1cnJlbnREZXBlbmRlbmN5OiAoKSA9PiB2b2lkLCBwdWJsaWMgdGFyZ2V0OiBCYXNlLCBwdWJsaWMgcHJvcGVydHk6IHN0cmluZykge1xuICAgIH1cbiAgICBkZXBlbmRlbmNpZXM6IEFycmF5PHsgb2JqOiBCYXNlLCBwcm9wOiBzdHJpbmcsIGlkOiBzdHJpbmcgfT4gPSBbXTtcbiAgICBpZDogc3RyaW5nID0gXCJcIiArICgrK0RlcGVuZGVuY2llcy5EZXBlbmRlbmNpZXNDb3VudCk7XG4gICAgYWRkRGVwZW5kZW5jeSh0YXJnZXQ6IEJhc2UsIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gdGFyZ2V0ICYmIHRoaXMucHJvcGVydHkgPT09IHByb3BlcnR5KVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAodGhpcy5kZXBlbmRlbmNpZXMuc29tZShkZXBlbmRlbmN5ID0+IGRlcGVuZGVuY3kub2JqID09PSB0YXJnZXQgJiYgZGVwZW5kZW5jeS5wcm9wID09PSBwcm9wZXJ0eSkpXG4gICAgICAgIHJldHVybjtcbiAgXG4gICAgICB0aGlzLmRlcGVuZGVuY2llcy5wdXNoKHtcbiAgICAgICAgb2JqOiB0YXJnZXQsXG4gICAgICAgIHByb3A6IHByb3BlcnR5LFxuICAgICAgICBpZDogdGhpcy5pZFxuICAgICAgfSk7XG4gICAgICB0YXJnZXQucmVnaXN0ZXJQcm9wZXJ0eVZhbHVlTGlzdG5lcihwcm9wZXJ0eSwgdGhpcy5jdXJyZW50RGVwZW5kZW5jeSwgdGhpcy5pZCk7XG4gIFxuICAgIH1cbiAgICBkaXNwb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5kZXBlbmRlbmNpZXMuZm9yRWFjaChkZXBlbmRlbmN5ID0+IHtcbiAgICAgICAgZGVwZW5kZW5jeS5vYmoudW5SZWdpc3RlclByb3BlcnR5VmFsdWVMaXN0bmVyKGRlcGVuZGVuY3kucHJvcCwgZGVwZW5kZW5jeS5pZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBjbGFzcyBDb21wdXRlZFVwZGF0ZXI8VCA9IGFueT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ29tcHV0ZWRVcGRhdGVyVHlwZSA9IFwiX19kZXBlbmRlbmN5X2NvbXB1dGVkXCI7XG4gICAgcHVibGljIHN0YXRpYyBDb2xsZWN0RGVwZW5kZW5jaWVzPFUgPSBhbnk+KG9iajogQmFzZSwgY29tcHV0ZWRVcGRhdGVyOiBDb21wdXRlZFVwZGF0ZXI8VT4sIHByb3BlcnR5TmFtZTogc3RyaW5nKTogVSB7XG4gICAgICBCYXNlLnN0YXJ0Q29sbGVjdERlcGVuZGVuY2llcygoKSA9PiBvYmpbcHJvcGVydHlOYW1lXSA9IGNvbXB1dGVkVXBkYXRlci51cGRhdGVyKCksIG9iaiwgcHJvcGVydHlOYW1lKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbXB1dGVkVXBkYXRlci51cGRhdGVyKCk7XG4gICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBCYXNlLmZpbmlzaENvbGxlY3REZXBlbmRlbmNpZXMoKTtcbiAgICAgIGNvbXB1dGVkVXBkYXRlci5zZXREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZGVwZW5kZW5jaWVzOiBEZXBlbmRlbmNpZXMgPSB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXBkYXRlcjogKCkgPT4gVCkge1xuICAgIH1cbiAgICByZWFkb25seSB0eXBlID0gQ29tcHV0ZWRVcGRhdGVyLkNvbXB1dGVkVXBkYXRlclR5cGU7XG4gICAgcHVibGljIGdldCB1cGRhdGVyKCk6ICgpID0+IFQge1xuICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZXI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzOiBEZXBlbmRlbmNpZXMpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xlYXJEZXBlbmRlbmNpZXMoKTtcbiAgICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0RGVwZW5kZW5jaWVzKCk6IERlcGVuZGVuY2llcyB7XG4gICAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmNpZXM7XG4gICAgfVxuICAgIHB1YmxpYyBvYnNlcnZlKHRhcmdldDogQmFzZSwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgIENvbXB1dGVkVXBkYXRlci5Db2xsZWN0RGVwZW5kZW5jaWVzKHRhcmdldCwgdGhpcywgcHJvcGVydHlOYW1lKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhckRlcGVuZGVuY2llcygpIHtcbiAgICAgIGlmICh0aGlzLmRlcGVuZGVuY2llcykge1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICBkaXNwb3NlKCk6IGFueSB7XG4gICAgICB0aGlzLmNsZWFyRGVwZW5kZW5jaWVzKCk7XG4gICAgfVxuICB9XG4gICIsImltcG9ydCBcIi4vZHJvcGRvd24tYWN0aW9ucy5zY3NzXCI7XG4iLCJpbXBvcnQgeyBDb21wdXRlZFVwZGF0ZXIgfSBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcGVydHlEZWNvcmF0b3JPcHRpb25zIHtcbiAgICBkZWZhdWx0VmFsdWU/OiBhbnk7XG4gICAgb25TZXQ/OiAodmFsOiBhbnksIHRhcmdldDogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkob3B0aW9ucz86IElQcm9wZXJ0eURlY29yYXRvck9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xuICAgICAgICBsZXQgcHJvY2Vzc0NvbXB1dGVkVXBkYXRlciA9IChvYmo6IGFueSwgdmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICghIXZhbCAmJiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmIHZhbC50eXBlID09PSBDb21wdXRlZFVwZGF0ZXIuQ29tcHV0ZWRVcGRhdGVyVHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDb21wdXRlZFVwZGF0ZXIuQ29sbGVjdERlcGVuZGVuY2llcyhvYmosIHZhbCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGdldERlZmF1bHRWYWx1ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkZWZhdWx0VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoISFvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gb3B0aW9ucy5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IEFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKSA/IFtdLmNvbmNhdChkZWZhdWx0VmFsdWUpIDogZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eVZhbHVlKGtleSwgZ2V0RGVmYXVsdFZhbHVlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbDogYW55KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBwcm9jZXNzQ29tcHV0ZWRVcGRhdGVyKHRoaXMsIHZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eVZhbHVlKGtleSwgbmV3VmFsdWUsIGdldERlZmF1bHRWYWx1ZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoISFvcHRpb25zICYmIG9wdGlvbnMub25TZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vblNldChuZXdWYWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uXCI7XG5cbnR5cGUgIFRPcGVyYXRpb24gPSBcIkVRXCIgfCBcIk5FUVwiIHwgXCJHXCIgfCBcIkxcIiB8IFwiR0VRXCIgfCBcIkxFUVwiIHwgXCJJU05cIiB8IFwiSVNOTlwiIHwgXCJDXCI7XG5leHBvcnQgaW50ZXJmYWNlIElGaW5kT3BlcmF0aW9uIHtcbiAgICBvcDogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBmdW5jPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaW5kQ29tcGFyZSB7XG4gICAgZmllbGQ6IHN0cmluZztcbiAgICBvcDogVE9wZXJhdGlvbjtcbiAgICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaW5kT3BlcmFuZCB7XG4gICAgbGV2ZWx1cDogYm9vbGVhbjtcbiAgICBvcGVyYW5kOiB7XG4gICAgICAgIGZpZWxkOiBzdHJpbmcsXG4gICAgICAgIG9wOiBUT3BlcmF0aW9uLFxuICAgICAgICB2YWx1ZTogc3RyaW5nIHwgTnVtYmVyLFxuICAgICAgICBwYXRoPzogc3RyaW5nW10sXG4gICAgICAgIHNlYXJjaF9pbl9rZXk/OiBib29sZWFuLFxuICAgICAgICBtX29yZGVyPzogYm9vbGVhbixcbiAgICAgICAgZnVuYz86IHN0cmluZyxcbiAgICB9LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBZ2dyZWdhdGUge1xuICAgIGZ1bmM6IHN0cmluZyxcbiAgICBmaWVsZDogc3RyaW5nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElGaW5kTG9naWMge1xuICAgIHN0cmljdDogYm9vbGVhbjtcbiAgICBvcGVyYW5kczogSUZpbmRPcGVyYW5kW107XG4gICAgYWdncmVnYXRlPzogSUFnZ3JlZ2F0ZVtdO1xufVxuXG5leHBvcnQgdmFyIG9wZXJhdGlvbnNNYXA6IHsgW2luZGV4OiBzdHJpbmddOiBJRmluZE9wZXJhdGlvbltdIH0gPSB7fTtcblxudmFyIGRlZmF1bHRPcGVyYXRpb25zTWFwID0ge1xuICAgIHN0cmluZzogW1xuICAgICAgICB7b3A6IFwiQ1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyY29udGFpbnNcIil9LFxuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICBkYXRlOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkdcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmRhdGVncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmRhdGVsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICBkYXRldGltZTogW1xuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWdyZWF0ZXJcIil9LFxuICAgICAgICB7b3A6IFwiTFwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGludGVnZXI6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJORVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcm5vdGVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkdcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmdyZWF0ZXJcIil9LFxuICAgICAgICB7b3A6IFwiTFwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJHRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmdyZWF0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJMRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgbnVtZXJpYzogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIk5FUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybm90ZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIkdFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkxFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc2VxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICBib29sOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgIF0sXG4gICAgbW9uZXk6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJORVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcm5vdGVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkdcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmdyZWF0ZXJcIil9LFxuICAgICAgICB7b3A6IFwiTFwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJHRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmdyZWF0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJMRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgcmFkaW9idXR0b246IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG59XG5PYmplY3Qua2V5cyhkZWZhdWx0T3BlcmF0aW9uc01hcCkuZm9yRWFjaChrZXkgPT4gb3BlcmF0aW9uc01hcFtrZXldID0gZGVmYXVsdE9wZXJhdGlvbnNNYXBba2V5XSk7XG4iLCJleHBvcnQgY29uc3QgYWRkID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2l0ZW0tYWRkLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGVxdWFsID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2VxdWFsLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHRhYmxlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3RhYmxlLW1lcmdlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHNhdmUgPSByZXF1aXJlKCcuL2ljb25zL2ljb25faXRlbS1zYXZlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGRlbCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9pdGVtLWRlbGV0ZS5zdmcnKTtcbmV4cG9ydCBjb25zdCBwYXN0ZSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9wYXN0ZS5zdmcnKTtcbmV4cG9ydCBjb25zdCBtb3JlX3NxID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX21vcmVfc3Euc3ZnJyk7XG5leHBvcnQgY29uc3QgY2hlY2sgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fY2hlY2suc3ZnJyk7XG5leHBvcnQgY29uc3Qgc29ydHVwID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3NvcnQtdXAuc3ZnJyk7XG5leHBvcnQgY29uc3Qgc29ydGRvd24gPSByZXF1aXJlKCcuL2ljb25zL2ljb25fc29ydC1kb3duLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGZpbHRlciA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9maWx0ZXIuc3ZnJyk7XG5leHBvcnQgY29uc3QgbW9yZSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9tb3JlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGVkaXQgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fZWRpdC5zdmcnKTtcbmV4cG9ydCBjb25zdCBhcnJvd3JpZ2h0ID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2Fycm93LXJpZ2h0LnN2ZycpO1xuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9zZWFyY2guc3ZnJyk7XG5leHBvcnQgY29uc3QgY3Jvc3MgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fY3Jvc3Muc3ZnJyk7XG5leHBvcnQgY29uc3QgYXJyb3dkb3duID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2Fycm93LWRvd24uc3ZnJyk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9jb3JlL2FjdGlvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9hY3Rpb25zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL2Ryb3Bkb3duLWFjdGlvbnNcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vZmluZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NlbGxcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NvbHVtblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvc3VtbWFyeVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY29sdW1uLWZpbHRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY29sdW1uLWZpbHRlci1pdGVtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9maWx0ZXItZGVmYXVsdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvZmlsdGVyLXNlbGVjdFwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9udW1iZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2Jvb2xcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvYXJyYXktZGF0YS1wcm92aWRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvcmVtb3RlLWRhdGEtcHJvdmlkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pY29uXCJcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgQmFzZSwgSGFzaFRhYmxlU3RvcmFnZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uL3RhYmxlXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NlbGxcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NlbGwtZWRpdG9yXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jZWxsLXZpZXdlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvc3VtbWFyeVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvc2VhcmNoXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9maWx0ZXItZGVmYXVsdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY29sdW1uLWZpbHRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY29sdW1uLWZpbHRlci1pdGVtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9maWx0ZXItc2VsZWN0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi93aWRnZXRzL2FjdGlvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vd2lkZ2V0cy9hY3Rpb25zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93aWRnZXRzL2Ryb3Bkb3duLWFjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvaWNvblwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9ib29sLWNlbGwtZWRpdG9yXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9ib29sLWNlbGwtdmlld2VyXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuLlwiO1xuXG5leHBvcnQgY29uc3QgS25vY2tvdXRJbnN0YW5jZSA9IGtvO1xuXG5leHBvcnQgY2xhc3MgS25vY2tvdXRIYXNoVGFibGVTdG9yYWdlIGV4dGVuZHMgSGFzaFRhYmxlU3RvcmFnZSB7XG4gICAgcHJpdmF0ZSBsaW5rQXJyYXlUb09ic2VydmFibGUob2JzZXJ2YWJsZUFycmF5OiBLbm9ja291dE9ic2VydmFibGVBcnJheTxhbnk+KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdLmNvbmNhdChvYnNlcnZhYmxlQXJyYXkoKSk7XG4gICAgICAgIFtcInBvcFwiLCBcInB1c2hcIiwgXCJzcGxpY2VcIiwgXCJzbGljZVwiLCBcInNoaWZ0XCIsIFwidW5zaGlmdFwiXS5mb3JFYWNoKGZ1bmNOYW1lID0+IHtcbiAgICAgICAgICAgIHJlc3VsdFtmdW5jTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlW2Z1bmNOYW1lXS5hcHBseShyZXN1bHQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVBcnJheVtmdW5jTmFtZV0uYXBwbHkob2JzZXJ2YWJsZUFycmF5LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVPYnNlcnZhYmxlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBrby5vYnNlcnZhYmxlQXJyYXkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrby5vYnNlcnZhYmxlKHZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIGdldFZhbHVlKG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3VwZXIuZ2V0VmFsdWUobmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgaWYoIWtvLmlzT2JzZXJ2YWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzaFtuYW1lXSA9IHRoaXMuY3JlYXRlT2JzZXJ2YWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuaGFzaFtuYW1lXTtcbiAgICAgICAgaWYoKGtvIGFzIGFueSkuaXNPYnNlcnZhYmxlQXJyYXkob2JzZXJ2YWJsZSkpIHsgLy8gVE9ETyAtIHJlbW92ZSBhbnkgY2FzdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua0FycmF5VG9PYnNlcnZhYmxlKG9ic2VydmFibGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgICAgIGlmKCFrby5pc09ic2VydmFibGUodGhpcy5oYXNoW25hbWVdKSkge1xuICAgICAgICAgICAgdGhpcy5oYXNoW25hbWVdID0gdGhpcy5jcmVhdGVPYnNlcnZhYmxlKHRoaXMuaGFzaFtuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMuaGFzaFtuYW1lXTtcbiAgICAgICAgdGhpcy5oYXNoW25hbWVdKHZhbCk7XG4gICAgfVxufVxuXG5CYXNlLmNyZWF0ZVByb3BlcnRpZXNTdG9yYWdlID0gKCkgPT4gbmV3IEtub2Nrb3V0SGFzaFRhYmxlU3RvcmFnZSgpO1xuXG5leHBvcnQgdmFyIHRhYmxlVGVtcGxhdGUgPSByZXF1aXJlKFwiLi90YWJsZS9pbmRleC5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gcGFyYW1zLm1vZGVsIGFzIFRhYmxlO1xuICAgICAgICAgICAgbW9kZWwuaW5pdGlhbGl6ZShjb21wb25lbnRJbmZvLmVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogdGFibGVUZW1wbGF0ZVxufSk7XG5cbmZ1bmN0aW9uIHJlbmRlclRhYmxlKGVsZW1lbnQ6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICBsZXQgZWw6IEVsZW1lbnQgPSBlbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgaWYodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpWzBdO1xuICAgIH1cbiAgICBlbC5pbm5lckhUTUwgPSBgPHRhYmxlNCBwYXJhbXM9XCJ7IG1vZGVsOiAkZGF0YSB9XCI+PC90YWJsZTQ+YDtcbiAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKGVsLCAobm9kZTogTm9kZSkgPT4ge1xuICAgICAgICBrby5jbGVhbk5vZGUobm9kZSk7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfSk7XG4gICAga28uYXBwbHlCaW5kaW5ncyh0aGlzLCBlbCk7XG59XG5cblRhYmxlLnByb3RvdHlwZVtcInJlbmRlclwiXSA9IHJlbmRlclRhYmxlOyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgSW5wbGFjZUVkaXRvciB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsLWVkaXRvclwiO1xuXG5leHBvcnQgdmFyIGJvb2xDZWxsRWRpdG9yVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9ib29sLWNlbGwtZWRpdG9yLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImJvb2wtY2VsbC1lZGl0b3JcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgdmFyIG1vZGVsOiBJbnBsYWNlRWRpdG9yID0ga28udW53cmFwKHBhcmFtcy5tb2RlbCk7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBpbnB1dCA9IGNvbXBvbmVudEluZm8uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIilbMF07XG4gICAgICAgICAgICAvLyAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgICAgIC8vIH0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYm9vbENlbGxFZGl0b3JUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwgfSBmcm9tIFwiLi4vLi4vdGFibGUvY2VsbFwiO1xuXG5leHBvcnQgdmFyIGJvb2xDZWxsVmlld2VyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9ib29sLWNlbGwtdmlld2VyLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImJvb2wtY2VsbC12aWV3ZXJcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGJvb2xDZWxsVmlld2VyVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBJbnBsYWNlRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NlbGwtZWRpdG9yXCI7XG5cbmV4cG9ydCB2YXIgY2VsbEVkaXRvclRlbXBsYXRlID0gcmVxdWlyZShcIi4vY2VsbC1lZGl0b3IuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYWJyaXMtY2VsbC1lZGl0b3JcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgdmFyIG1vZGVsOiBJbnBsYWNlRWRpdG9yID0ga28udW53cmFwKHBhcmFtcy5tb2RlbCk7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBpbnB1dCA9IGNvbXBvbmVudEluZm8uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIilbMF07XG4gICAgICAgICAgICAvLyAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgICAgIC8vIH0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogY2VsbEVkaXRvclRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsXCI7XG5cbmV4cG9ydCB2YXIgY2VsbFZpZXdlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vY2VsbC12aWV3ZXIuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYWJyaXMtY2VsbC12aWV3ZXJcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGNlbGxWaWV3ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsXCI7XG5cbmV4cG9ydCB2YXIgY2VsbFRlbXBsYXRlID0gcmVxdWlyZShcIi4vY2VsbC5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy10YWJsZS1jZWxsXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzTWVyZ2VkQ2VsbCA9IGtvLmNvbXB1dGVkKCgpID0+IHBhcmFtcy5jZWxsLmNvdW50ID4gMSAmJiBwYXJhbXMudGFibGUuaXNNZXJnZWTQoWVsbHMpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICAgICAgc3RhcnRFZGl0OiAoKSA9PiBwYXJhbXMudGFibGUuc3RhcnRFZGl0Q2VsbChwYXJhbXMuY2VsbCksXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ3NzOiBrby5jb21wdXRlZCgoKSA9PiBUYWJsZUNlbGwuZ2V0Q29udGFpbmVyQ3NzKHBhcmFtcy5jZWxsLCBpc01lcmdlZENlbGwoKSkpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRDc3M6IGtvLmNvbXB1dGVkKCgpID0+IFRhYmxlQ2VsbC5nZXRDb250ZW50Q3NzKHBhcmFtcy5jZWxsLCBpc01lcmdlZENlbGwoKSkpLFxuICAgICAgICAgICAgICAgIGlzTWVyZ2VkQ2VsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGNlbGxUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IENvbHVtbkZpbHRlckl0ZW0gfSBmcm9tIFwiLi4vLi4vdGFibGUvY29sdW1uLWZpbHRlci1pdGVtXCI7XG5cbnZhciBmaWx0ZXJUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2NvbHVtbi1maWx0ZXItaXRlbS5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy1jb2x1bW4tZmlsdGVyLWl0ZW1cIiwge1xuICB2aWV3TW9kZWw6IHtcbiAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgcmV0dXJuIHBhcmFtcy5maWx0ZXJJdGVtIGFzIENvbHVtbkZpbHRlckl0ZW07XG4gICAgfVxuICB9LFxuICB0ZW1wbGF0ZTogZmlsdGVyVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NvbHVtbi1maWx0ZXJcIjtcblxudmFyIGZpbHRlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vY29sdW1uLWZpbHRlci5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy1jb2x1bW4tZmlsdGVyXCIsIHtcbiAgdmlld01vZGVsOiB7XG4gICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgIHJldHVybiBwYXJhbXMuY29udGV4dCBhcyBGaWx0ZXJDb250ZXh0O1xuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IGZpbHRlclRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuXG52YXIgZGVmYXVsdEZpbHRlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vZmlsdGVyLWRlZmF1bHQuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYWJyaXMtdGFibGUtZmlsdGVyLWRlZmF1bHRcIiwge1xuICB2aWV3TW9kZWw6IHtcbiAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBkZWZhdWx0RmlsdGVyVGVtcGxhdGVcbn0pO1xuXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IFRhYmxlRmlsdGVyU2VsZWN0IH0gZnJvbSBcIi4uLy4uL3RhYmxlL2ZpbHRlci1zZWxlY3RcIiBcblxuXG52YXIgc2VsZWN0Ym94RmlsdGVyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9maWx0ZXItc2VsZWN0Lmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImFicmlzLWZpbHRlci1zZWxlY3RcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gbmV3IFRhYmxlRmlsdGVyU2VsZWN0KHBhcmFtcy52YWx1ZSwgcGFyYW1zLmNvbHVtbk5hbWUsIHBhcmFtcy5jb2x1bW5UeXBlLCBwYXJhbXMuZ2V0Q29sdW1uRGF0YSwgcGFyYW1zLmlzT3BlbiwgcGFyYW1zLnRpdGxlLCBwYXJhbXMubW9yZVRleHQpO1xuICAgICAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiB2aWV3TW9kZWwuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG4gICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKGNvbXBvbmVudEluZm8uZWxlbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdmlld01vZGVsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc2VsZWN0Ym94RmlsdGVyVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCB9IGZyb20gXCIuLi8uLi90YWJsZS9zZWFyY2hcIjtcblxuZXhwb3J0IHZhciBzZWFyY2hUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL3NlYXJjaC5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy1zZWFyY2hcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgdmFyIG1vZGVsID0ga28udW53cmFwKHBhcmFtcy5tb2RlbCk7XG4gICAgICAgICAgICB2YXIgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsID0gbW9kZWxbcGFyYW1zLm9wdGlvbnM/LmRhdGFdIHx8IG1vZGVsO1xuICAgICAgICAgICAgdmFyIHNlYXJjaFRleHQgPSBwYXJhbXMub3B0aW9ucz8udGV4dCAmJiBtb2RlbFtwYXJhbXMub3B0aW9ucy50ZXh0XSB8fCBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDEzKSBzZWFyY2hNb2RlbC5zZWFyY2goc2VhcmNoVGV4dCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb21wb25lbnRJbmZvLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBwcm9jZXNzKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHNlYXJjaFRleHQsXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogKCkgPT4geyBzZWFyY2hNb2RlbC5zZWFyY2goc2VhcmNoVGV4dCgpKTsgfSxcbiAgICAgICAgICAgICAgICBkaXNwb3NlOiAoKSA9PiBjb21wb25lbnRJbmZvLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBwcm9jZXNzKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IHNlYXJjaFRlbXBsYXRlXG59KTtcblxuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBUYWJsZVN1bW1hcnkgfSBmcm9tIFwiLi4vLi4vdGFibGUvc3VtbWFyeVwiO1xuXG5leHBvcnQgdmFyIHN1bW1hcnlUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL3N1bW1hcnkuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYWJyaXMtdGFibGUtc3VtbWFyeVwiLCB7XG4gIHZpZXdNb2RlbDoge1xuICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICByZXR1cm4gbmV3IFRhYmxlU3VtbWFyeShwYXJhbXMuY29sdW1uKTtcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBzdW1tYXJ5VGVtcGxhdGVcbn0pO1xuXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vLi4vY29yZS9hY3Rpb25cIjtcblxudmFyIGFjdGlvblRlbXBsYXRlID0gcmVxdWlyZShcIi4vYWN0aW9uLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImFicmlzLWFjdGlvbi1pdGVtXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiAocGFyYW1zOiBJQWN0aW9uLCBjb21wb25lbnRJbmZvKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYWN0aW9uVGVtcGxhdGVcbn0pO1xuXG5leHBvcnQgdmFyIEFjdGlvbkl0ZW1XaWRnZXQ7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxudmFyIGFjdGlvbnNUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2FjdGlvbnMuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYWJyaXMtYWN0aW9uc1wiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IChwYXJhbXMubW9kZWwgfHwge30pW3BhcmFtcy5vcHRpb25zLmFjdGlvbl07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnM6IG1vZGVsVmFsdWUsXG4gICAgICAgICAgICAgICAgc2hvcnQ6IHBhcmFtcy5vcHRpb25zLnNob3J0LFxuICAgICAgICAgICAgICAgIGdyb3VwTmFtZTogcGFyYW1zLm9wdGlvbnMuZ3JvdXBOYW1lLCBcbiAgICAgICAgICAgICAgICB0b2dnbGVDaGlsZEFjdGlvbnM6IChfLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImFicmlzLW5lc3RlZC1hY3Rpb25zLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBhY3Rpb25zVGVtcGxhdGVcbn0pO1xuXG5leHBvcnQgdmFyIEFicmlzQWN0aW9uc1dpZGdldDtcblxuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5cbnZhciBkcm9wZG93blRlbXBsYXRlID0gcmVxdWlyZShcIi4vZHJvcGRvd24tYWN0aW9ucy5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy1kcm9wZG93bi1hY3Rpb25zXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzT3BlbiA9IHBhcmFtcy5pc09wZW4gfHwga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9ICgpID0+IGlzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG4gICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKGNvbXBvbmVudEluZm8uZWxlbWVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICAgICAgICB0aXRsZTogcGFyYW1zLnRpdGxlIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9yZVRleHQ6IHBhcmFtcy5tb3JlVGV4dCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHBhcmFtcy5kYXRhLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IHBhcmFtcy5hY3Rpb25zLFxuICAgICAgICAgICAgICAgIHRvZ2dsZTogKF8sIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbighaXNPcGVuKCkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGRyb3Bkb3duVGVtcGxhdGVcbn0pO1xuXG5leHBvcnQgdmFyIEFicmlzRHJvcGRvd25BY3Rpb25zO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy1pY29uXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7ICAgICBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2ljb24uaHRtbFwiKS5kZWZhdWx0XG59KTtcblxuZXhwb3J0IHZhciBBYnJpc0ljb25XaWRnZXQ7XG4iLCJleHBvcnQgY2xhc3MgTG9jYWxpemF0aW9uIHtcbiAgICBzdGF0aWMgZW5nbGlzaFN0cmluZ3MgPSB7XG4gICAgICAgIGZpbHRlcmNvbnRhaW5zOiBcIkNvbnRhaW5zXCIsXG4gICAgICAgIGZpbHRlcmVxdWFsOiBcIkVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmlzbnVsbDogXCJFbXB0eVwiLFxuICAgICAgICBmaWx0ZXJpc25vdG51bGw6IFwiTm90IGVtcHR5XCIsXG4gICAgICAgIGZpbHRlcmdyZWF0ZXI6IFwiR3JlYXRlclwiLFxuICAgICAgICBmaWx0ZXJsZXNzOiBcIkxlc3NcIixcbiAgICAgICAgZmlsdGVyZ3JlYXRlcmVxdWFsOiBcIkdyZWF0ZXIgb3IgZXF1YWxcIixcbiAgICAgICAgZmlsdGVybGVzc2VxdWFsOiBcIkxlc3Mgb3IgZXF1YWxcIixcbiAgICAgICAgZmlsdGVyZGF0ZW5vdGVxdWFsOiBcIk5vdCBlcXVhbFwiLFxuICAgICAgICBmaWx0ZXJkYXRlZXF1YWw6IFwiRXF1YWxcIixcbiAgICAgICAgZmlsdGVyZGF0ZWdyZWF0ZXI6IFwiRnJvbVwiLFxuICAgICAgICBmaWx0ZXJkYXRlbGVzczogXCJUb1wiLFxuICAgICAgICBub0RhdGE6IFwiTm8gRGF0YVwiXG4gICAgfTtcbiAgICBzdGF0aWMgZ2V0U3RyaW5nID0gKHN0cmluZ0lkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5nbGlzaFN0cmluZ3Nbc3RyaW5nSWRdO1xuICAgIH0gXG59IiwiaW1wb3J0IHsgSVRhYmxlQ2VsbFR5cGUsIFRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuaW1wb3J0IFwiLi9ib29sLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIEJvb2xDZWxsIGltcGxlbWVudHMgSVRhYmxlQ2VsbFR5cGUge1xuICAgIG5hbWU6IHN0cmluZyA9IFwiYm9vbFwiO1xuICAgIGVkaXRvcjogc3RyaW5nID0gXCJib29sLWNlbGwtZWRpdG9yXCI7XG4gICAgdmlld2VyOiBzdHJpbmcgPSBcImJvb2wtY2VsbC12aWV3ZXJcIjtcbn1cblxuVGFibGVDZWxsLnJlZ2lzdGVyQ2VsbFR5cGUobmV3IEJvb2xDZWxsKCkpOyIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5pbXBvcnQgXCIuL2NlbGwtZWRpdG9yLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIElucGxhY2VFZGl0b3IgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNlbGw6IElUYWJsZUNlbGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY2VsbC5kYXRhO1xuICAgIH1cbiAgICBAcHJvcGVydHkoKSB2YWx1ZTogYW55O1xuICAgIGNvbXBsZXRlKGNvbW1pdDogYm9vbGVhbikge1xuICAgICAgICBpZihjb21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbC5kYXRhID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNlbGwuaW5wbGFjZUVkaXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcHJvY2Vzc0tleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKGV2ZW50LmtleUNvZGUgPT09IDEzKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiwgSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24gfSBmcm9tIFwiLi9jb2x1bW5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDZWxsVHlwZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNzcz86IHN0cmluZztcbiAgICBlZGl0b3I/OiBzdHJpbmc7XG4gICAgdmlld2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNlbGwge1xuICAgIGRhdGE6IGFueTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBjc3M6IHN0cmluZztcbiAgICBpbnBsYWNlRWRpdG9yOiBhbnk7XG4gICAgZWRpdG9yPzogc3RyaW5nO1xuICAgIHZpZXdlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlQ2VsbCBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJVGFibGVDZWxsIHtcbiAgICBwdWJsaWMgc3RhdGljIGNlbGxUeXBlcyA9IHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgIGNzczogXCJhYnJpcy10YWJsZS1jZWxsLS1sZWZ0XCIsXG4gICAgICAgICAgICBlZGl0b3I6IFwiYWJyaXMtY2VsbC1lZGl0b3JcIixcbiAgICAgICAgICAgIHZpZXdlcjogXCJhYnJpcy1jZWxsLXZpZXdlclwiXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQ2VsbFR5cGUoY2VsbFR5cGU6IElUYWJsZUNlbGxUeXBlKSB7XG4gICAgICAgIFRhYmxlQ2VsbC5jZWxsVHlwZXNbY2VsbFR5cGUubmFtZV0gPSBjZWxsVHlwZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldENvbnRhaW5lckNzcyhjZWxsOiBJVGFibGVDZWxsLCBpc01lcmdlZENlbGw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckNzcyA9IFwiYWJyaXMtdGFibGUtY2VsbF9fY29udGFpbmVyIFwiICsgY2VsbC5jc3M7XG4gICAgICAgIGlmKGlzTWVyZ2VkQ2VsbCkge1xuICAgICAgICAgIGNvbnRhaW5lckNzcyArPSBcIiBjZWxsX19zdGlja3ktdGV4dFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXJDc3M7ICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRDb250ZW50Q3NzKGNlbGw6IElUYWJsZUNlbGwgfCBUYWJsZUNlbGwsIGlzTWVyZ2VkQ2VsbDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29udGVudENzcyA9IGlzTWVyZ2VkQ2VsbCA/IFwiYWJyaXMtdGFibGUtY2VsbF9fdGV4dC0tbWVyZ2VkXCIgOiBcImFicmlzLXRhYmxlLWNlbGxfX3RleHRcIjtcbiAgICAgICAgaWYoY2VsbCBpbnN0YW5jZW9mIFRhYmxlQ2VsbCAmJiBjZWxsLmlzTW9kaWZpZWQpIHtcbiAgICAgICAgICBjb250ZW50Q3NzICs9IFwiIGFicmlzLXRhYmxlLWNlbGxfX3RleHQtLW1vZGlmaWVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnRDc3M7ICAgICAgICBcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzTW9kaWZpZWQ6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWwsIHRhcmdldDogVGFibGVDZWxsKSA9PiB7IFxuICAgICAgICBpZih0YXJnZXQudGV4dCAhPT0gdmFsKSB7XG4gICAgICAgICAgICB0YXJnZXQudGV4dCA9IHRhcmdldC5nZXRDZWxsVGV4dCh2YWwpO1xuICAgICAgICAgICAgdGFyZ2V0LmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSB9KSBkYXRhOiBhbnk7XG4gICAgQHByb3BlcnR5KCkgdGV4dDogc3RyaW5nOyBcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IDEgfSkgY291bnQ6IG51bWJlcjtcbiAgICBAcHJvcGVydHkoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIG5hbWU6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBpbnBsYWNlRWRpdG9yOiBhbnk7XG4gICAgQHByb3BlcnR5KCkgY3NzOiBzdHJpbmc7XG4gICAgZWRpdG9yOiBzdHJpbmc7XG4gICAgdmlld2VyOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbFR5cGVEZXNjcmlwdGlvbih0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFRhYmxlQ2VsbC5jZWxsVHlwZXNbdHlwZV0gfHwgVGFibGVDZWxsLmNlbGxUeXBlc1tcImRlZmF1bHRcIl1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENlbGxDc3MoZGF0YTogYW55LCBjb2x1bW46IElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbFR5cGVEZXNjcmlwdGlvbihjb2x1bW4udHlwZSkuY3NzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbEVkaXRvcihkYXRhOiBhbnksIGNvbHVtbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxsVHlwZURlc2NyaXB0aW9uKGNvbHVtbi50eXBlKS5lZGl0b3IgfHwgVGFibGVDZWxsLmNlbGxUeXBlc1tcImRlZmF1bHRcIl0uZWRpdG9yO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbFZpZXdlcihkYXRhOiBhbnksIGNvbHVtbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxsVHlwZURlc2NyaXB0aW9uKGNvbHVtbi50eXBlKS52aWV3ZXIgfHwgVGFibGVDZWxsLmNlbGxUeXBlc1tcImRlZmF1bHRcIl0udmlld2VyO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbFRleHQodmFsOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZShjb2w6IElUYWJsZUNvbHVtbiwgYmFjazogYm9vbGVhbiwgZGF0YTogYW55LCBjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFbY29sLm5hbWVdLFxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbC5uYW1lO1xuICAgICAgICB0aGlzLmNzcyA9IHRoaXMuZ2V0Q2VsbENzcyhkYXRhLCBjb2wpO1xuICAgICAgICB0aGlzLmVkaXRvciA9IHRoaXMuZ2V0Q2VsbEVkaXRvcihkYXRhLCBjb2wpO1xuICAgICAgICB0aGlzLnZpZXdlciA9IHRoaXMuZ2V0Q2VsbFZpZXdlcihkYXRhLCBjb2wpO1xuICAgICAgICBpZihiYWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChjb2wubGFzdCAmJiBjb2wubGFzdC50ZXh0ID09PSB0aGlzLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvbC5sYXN0LmNvdW50ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgY29sLmxhc3QuY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sLmxhc3QgPT0gY29sLnByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5wcmV2ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5jb3VudCA9IHRoaXMuY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29sLmxhc3QgPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbC5sYXN0ID09PSBudWxsKSBjb2wubGFzdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYoY29sLnByZXZWYWx1ZSAmJiAoY29sLnByZXZWYWx1ZSA9PT0gdGhpcy50ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBjb2wuY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5wcmV2LmNvdW50ID0gY29sLmNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sLmNvdW50ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29sLnByZXYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBjb2wucHJldlZhbHVlID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElGaW5kT3BlcmF0aW9uLCBvcGVyYXRpb25zTWFwIH0gZnJvbSBcIi4uL2ZpbmRcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVySXRlbVZhbHVlIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uOiBJVGFibGVDb2x1bW4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmllbGQgPSBjb2x1bW4ubmFtZTtcbiAgfVxuICBAcHJvcGVydHkoeyBvblNldDogKHZhbCwgdGFyZ2V0OiBGaWx0ZXJJdGVtVmFsdWUpID0+IHRhcmdldC5jb2x1bW4uZmlsdGVyQ29udGV4dC5hcHBseSgpIH0pIHZhbHVlOiBhbnk7XG4gIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsLCB0YXJnZXQ6IEZpbHRlckl0ZW1WYWx1ZSkgPT4gdGFyZ2V0LmNvbHVtbi5maWx0ZXJDb250ZXh0LmFwcGx5KCkgfSkgb3A6IHN0cmluZztcbiAgZmllbGQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvbHVtbkZpbHRlckl0ZW0gZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbHVtbjogYW55LFxuICAgIHB1YmxpYyBnZXRDb2x1bW5EYXRhXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5maWx0ZXJJdGVtVmFsdWUgPSBuZXcgRmlsdGVySXRlbVZhbHVlKGNvbHVtbik7XG4gICAgaWYob3BlcmF0aW9uc01hcFt0aGlzLmNvbHVtbi50eXBlXSkge1xuICAgICAgdGhpcy5vcGVyYXRpb25zID0gb3BlcmF0aW9uc01hcFt0aGlzLmNvbHVtbi50eXBlXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm9wZXJhdGlvbnMgPSBvcGVyYXRpb25zTWFwW1wic3RyaW5nXCJdO1xuICAgIH1cbiAgICB0aGlzLm9wZXJhdGlvbiA9IHRoaXMub3BlcmF0aW9uc1swXTtcbiAgfVxuXG4gIG9wZXJhdGlvbnM6IEFycmF5PGFueT47XG4gIFxuICBnZXQgZmlsdGVyRWRpdG9yTmFtZSgpIHtcbiAgICAvLyBpZiAodGhpcy5jb2x1bW4udHlwZSA9PT0gXCJib29sXCIpIHtcbiAgICAvLyAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1ib29sXCI7XG4gICAgLy8gfSBlbHNlIGlmIChbXCJzdHJpbmdcIiwgXCJjYXB0aW9uXCIsIFwicGxhaW5cIl0uaW5kZXhPZih0aGlzLmNvbHVtbi50eXBlKSAhPT0gLTEgKSB7XG4gICAgLy8gICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXItYXV0b2NvbXBsZXRlXCI7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcImRhdGVcIikge1xuICAgIC8vICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWRhdGVcIjtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLnR5cGUgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgIC8vICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWRhdGUtdGltZVwiO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4udHlwZSA9PT0gXCJwaWtldHBvc2l0aW9uXCIpIHtcbiAgICAvLyAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1rbXBrdG1cIjtcbiAgICAvLyB9IGVsc2UgaWYgKCEhdGhpcy5wYXJhbXMucHJvcGVydHlJbmZvLnJlbGF0aW9uKSB7XG4gICAgLy8gICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXItYXV0b2NvbXBsZXRlXCI7XG4gICAgLy8gfVxuICAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1kZWZhdWx0XCI7XG4gIH1cbiAgcHVibGljIGZpbHRlckl0ZW1WYWx1ZTogRmlsdGVySXRlbVZhbHVlO1xuICBAcHJvcGVydHkoeyBvblNldDogKHZhbDogSUZpbmRPcGVyYXRpb24sIHRhcmdldDogQ29sdW1uRmlsdGVySXRlbSkgPT4ge1xuICAgIGlmKCEhdmFsKSB7XG4gICAgICB0YXJnZXQuZmlsdGVySXRlbVZhbHVlLm9wID0gdmFsLm9wO1xuICAgIH1cbiAgICB0YXJnZXQuc2hvd09wZXJhbmQgPSB2YWwgJiYgdmFsLm9wICE9PSBcIklTTlwiICYmIHZhbC5vcCAhPT0gXCJJU05OXCI7XG4gIH19KSBvcGVyYXRpb246IElGaW5kT3BlcmF0aW9uO1xuICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IHRydWUgfSkgc2hvd09wZXJhbmQ6IGJvb2xlYW47XG5cbiAgZ2V0RmlsdGVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiB0aGlzLmZpbHRlckl0ZW1WYWx1ZS5maWVsZCxcbiAgICAgIG9wOiB0aGlzLmZpbHRlckl0ZW1WYWx1ZS5vcCxcbiAgICAgIHZhbHVlOiB0aGlzLmZpbHRlckl0ZW1WYWx1ZS52YWx1ZVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElEYXRhUHJvdmlkZXIsIElEYXRhUHJvdmlkZXJPd25lciB9IGZyb20gXCIuLi91dGlscy9kYXRhLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4gfSBmcm9tIFwiLi9jb2x1bW5cIjtcbmltcG9ydCB7IEZpbHRlckl0ZW1WYWx1ZSwgQ29sdW1uRmlsdGVySXRlbSB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG5pbXBvcnQgXCIuL2NvbHVtbi1maWx0ZXIuc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29udGV4dCBleHRlbmRzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2x1bW46IElUYWJsZUNvbHVtbiwgcHJpdmF0ZSBkYXRhUHJvdmlkZXJPd25lcjogSURhdGFQcm92aWRlck93bmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBzaG93RmlsdGVyOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIHZhbHVlOiBhbnk7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSB9KSBmaWx0ZXJJdGVtczogQXJyYXk8Q29sdW1uRmlsdGVySXRlbT47XG4gIFxuICAgIGFwcGx5KCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmlsdGVySXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5nZXRGaWx0ZXJWYWx1ZSgpKTtcbiAgICB9XG4gICAgYWRkSXRlbSA9IChjb2x1bW46IElUYWJsZUNvbHVtbikgPT4ge1xuICAgICAgLy8gZmlsdGVyVmFsdWUub3Auc3Vic2NyaWJlKG8gPT4ge2lmKG8gPT09IFwiRVFcIikgZmlsdGVyVmFsdWUudmFsdWUobnVsbCk7IHRoaXMuYXBwbHkoKX0pO1xuICAgICAgdGhpcy5maWx0ZXJJdGVtcy5wdXNoKG5ldyBDb2x1bW5GaWx0ZXJJdGVtKHRoaXMuY29sdW1uLCAoY29sdW1uLCBmaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyT3duZXIuZGF0YVByb3ZpZGVyLmdldENvbHVtbkRhdGEoY29sdW1uLCBmaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGNhbGxiYWNrKTtcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuc2hvd0ZpbHRlciA9IHRydWU7XG4gICAgfTtcbiAgICByZW1vdmVJdGVtID0gKGl0ZW06IENvbHVtbkZpbHRlckl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXJJdGVtcyA9IHRoaXMuZmlsdGVySXRlbXM7XG4gICAgICBjdXJyZW50RmlsdGVySXRlbXMuc3BsaWNlKGN1cnJlbnRGaWx0ZXJJdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgIHRoaXMuc2hvd0ZpbHRlciA9ICEhY3VycmVudEZpbHRlckl0ZW1zLmxlbmd0aDsgICAgXG4gICAgICB0aGlzLnZhbHVlID0gY3VycmVudEZpbHRlckl0ZW1zLm1hcChpID0+IGkuZmlsdGVySXRlbVZhbHVlKTtcbiAgICB9ICAgIFxufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJQWdncmVnYXRlIH0gZnJvbSBcIi4uL2ZpbmRcIjtcbmltcG9ydCB7IElEYXRhUHJvdmlkZXJPd25lciB9IGZyb20gXCIuLi91dGlscy9kYXRhLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgLy8gZmlsdGVyOiBhbnk7XG4gICAgLy8gZmlsdGVyQ29udGV4dDogRmlsdGVyQ29udGV4dCxcbiAgICAvLyBvcmRlcjogc3RyaW5nLFxuICAgIC8vIGNvdW50OiBudW1iZXIsXG4gICAgLy8gcHJldjogSVRhYmxlQ2VsbCxcbiAgICAvLyBwcmV2VmFsdWU6IGFueSxcbiAgICAvLyBjb25jYXRQcmV2OiBib29sZWFuLFxuICAgIC8vIGxhc3Q6IElUYWJsZUNlbGwsXG4gICAgLy8gcm93X2NvbG9yOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4gZXh0ZW5kcyBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiB7XG4gICAgLy8gbmFtZTogc3RyaW5nO1xuICAgIC8vIHRpdGxlOiBzdHJpbmc7XG4gICAgLy8gdHlwZTogc3RyaW5nO1xuICAgIC8vIHZpc2libGU6IGJvb2xlYW47XG4gICAgZmlsdGVyOiBhbnk7XG4gICAgZmlsdGVyQ29udGV4dDogRmlsdGVyQ29udGV4dCxcbiAgICBvcmRlcjogYm9vbGVhbixcbiAgICBzdW1tYXJ5VmFsdWU6IGFueSxcbiAgICBzdW1tYXJ5UGFyYW1zOiBJQWdncmVnYXRlLFxuICAgIGNvdW50OiBudW1iZXIsXG4gICAgcHJldjogSVRhYmxlQ2VsbCxcbiAgICBwcmV2VmFsdWU6IGFueSxcbiAgICBjb25jYXRQcmV2OiBib29sZWFuLFxuICAgIGxhc3Q6IElUYWJsZUNlbGwsXG4gICAgcm93X2NvbG9yOiBzdHJpbmcsXG4gICAgY2xpY2tGaWx0ZXI6IChjb2x1bW46IElUYWJsZUNvbHVtbiwgZXZlbnQ6IE1vdXNlRXZlbnR8YW55KSA9PiB2b2lkLFxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVDb2x1bW4gZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVRhYmxlQ29sdW1uIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbHVtbkRlc2NyaXB0aW9uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiwgcHJpdmF0ZSB0YWJsZTogSURhdGFQcm92aWRlck93bmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbHVtbkRlc2NyaXB0aW9uIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZihjb2x1bW5EZXNjcmlwdGlvbltrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb2x1bW5EZXNjcmlwdGlvbltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVyQ29udGV4dCA9IG5ldyBGaWx0ZXJDb250ZXh0KHRoaXMsIHRhYmxlKTtcbiAgICB9XG5cbiAgICBmaWx0ZXI6IGFueTtcbiAgICBmaWx0ZXJDb250ZXh0OiBGaWx0ZXJDb250ZXh0O1xuICAgIEBwcm9wZXJ0eSgpIG9yZGVyOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIHN1bW1hcnlWYWx1ZTogYW55O1xuICAgIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsOiBJQWdncmVnYXRlLCB0YXJnZXQ6IFRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICAgIHRhcmdldC5jYWxjdWxhdGVTdW1tYXJ5KHRhcmdldCk7XG4gICAgfX0pIHN1bW1hcnlQYXJhbXM6IElBZ2dyZWdhdGU7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBwcmV2OiBhbnk7XG4gICAgcHJldlZhbHVlOiBhbnk7XG4gICAgY29uY2F0UHJldjogYm9vbGVhbjtcbiAgICBsYXN0OiBhbnk7XG4gICAgcm93X2NvbG9yOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nID0gXCJzdHJpbmdcIjtcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBjbGlja0ZpbHRlciA9IChjb2x1bW46IElUYWJsZUNvbHVtbiwgZXZlbnQ6IE1vdXNlRXZlbnR8YW55KSA9PiB7XG4gICAgICAgIGNvbHVtbi5maWx0ZXJDb250ZXh0LmFkZEl0ZW0oY29sdW1uKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU3VtbWFyeShjb2x1bW46IElUYWJsZUNvbHVtbik6IHZvaWQge1xuICAgICAgICBpZihjb2x1bW4uc3VtbWFyeVBhcmFtcyAmJiBjb2x1bW4uc3VtbWFyeVBhcmFtcy5maWVsZCA9PT0gY29sdW1uLm5hbWUgJiYgY29sdW1uLnN1bW1hcnlQYXJhbXMuZnVuYykge1xuICAgICAgICAgICAgdGhpcy50YWJsZS5kYXRhUHJvdmlkZXIuZ2V0U3VtbWFyeShjb2x1bW4uc3VtbWFyeVBhcmFtcy5mdW5jLCBjb2x1bW4uc3VtbWFyeVBhcmFtcy5maWVsZCwgdGhpcy50YWJsZVtcInRhYmxlRmlsdGVyXCJdLCAoZGF0YSkgPT4gY29sdW1uLnN1bW1hcnlWYWx1ZSA9IGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICB9XG59IiwiaW1wb3J0IFwiLi9maWx0ZXItZGVmYXVsdC5zY3NzXCI7XG5cblxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IEZpbHRlckl0ZW1WYWx1ZSB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG5pbXBvcnQgXCIuL2ZpbHRlci1zZWxlY3Quc2Nzc1wiO1xuXG5cbmZ1bmN0aW9uIGNvbnZlcnNpb25CeVR5cGUodmFsdWU6YW55LCBjb2x1bW5UeXBlOiBzdHJpbmcpOnN0cmluZ3tcbiAgICBpZihjb2x1bW5UeXBlID09PVwiYm9vbFwiKSByZXR1cm4gdmFsdWU/XCJZZXNcIjpcIk5vXCI7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJTZWFyY2hCeVR5cGUoY29sdW1uVHlwZTogc3RyaW5nKTpib29sZWFue1xuICAgIGlmKGNvbHVtblR5cGUgPT09XCJib29sXCIpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgVGFibGVGaWx0ZXJTZWxlY3QgZXh0ZW5kcyBCYXNlIHtcbiAgICBwcml2YXRlIGxpbWl0OiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIG9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsdWU6IEZpbHRlckl0ZW1WYWx1ZSwgIHByaXZhdGUgY29sdW1uTmFtZTogc3RyaW5nLCBwcml2YXRlIGNvbHVtblR5cGU6IHN0cmluZywgcHJpdmF0ZSBnZXRDb2x1bW5EYXRhOiAobmFtZTogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogYW55LCBsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2FsbGJhY2sgOiAoaXRlbXM6IGFueVtdKSA9PiB2b2lkKSA9PiB2b2lkLCBpc09wZW4/OiBib29sZWFuLCBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IFwiXCIsIHB1YmxpYyBtb3JlVGV4dDogc3RyaW5nID0gXCJcIikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZihpc09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBpc09wZW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVGb3VuZEl0ZW1zKG51bGwpO1xuICAgICAgICB0aGlzLmlzRmlsdGVyU2VhcmNoQnlUeXBlID0gZmlsdGVyU2VhcmNoQnlUeXBlKGNvbHVtblR5cGUpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUZvdW5kSXRlbXMoZmlsdGVyVmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmZvdW5kSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmdldENvbHVtbkRhdGEodGhpcy5jb2x1bW5OYW1lLCBmaWx0ZXJWYWx1ZSwgdGhpcy5saW1pdCwgdGhpcy5vZmZzZXQsIGl0ZW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRJdGVtcyA9IGl0ZW1zLm1hcChpID0+IHtyZXR1cm4ge25hbWU6IGNvbnZlcnNpb25CeVR5cGUoaSwgdGhpcy5jb2x1bW5UeXBlKSwgdmFsdWU6IGl9fSk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZE1vcmUgPSBpdGVtcy5sZW5ndGggPT09IHRoaXMubGltaXQ7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSAxMDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgICB0aGlzLmdldENvbHVtbkRhdGEodGhpcy5jb2x1bW5OYW1lLCB0aGlzLmZpbHRlclRleHQsIHRoaXMubGltaXQsIHRoaXMub2Zmc2V0LCBpdGVtcyA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGkgPT4gdGhpcy5mb3VuZEl0ZW1zLnB1c2goaSkpXG4gICAgICAgICAgICB0aGlzLmlzTG9hZE1vcmUgPSBpdGVtcy5sZW5ndGggPT09IHRoaXMubGltaXQ7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSAxMDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNPcGVuOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNGaWx0ZXJTZWFyY2hCeVR5cGU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc0xvYWRNb3JlOiBib29sZWFuO1xuICAgIHRvZ2dsZSA9IChfLCBldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10sIG9uU2V0OiAodmFsLCB0YXJnZXQ6IFRhYmxlRmlsdGVyU2VsZWN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2V0IGZpbHRlciB2YWx1ZSB0byBcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICAgICAgICB0YXJnZXQudmFsdWUudmFsdWUgPSB0YXJnZXQuc2VsZWN0ZWRJdGVtcztcbiAgICB9IH0pIHNlbGVjdGVkSXRlbXM6IEFycmF5PGFueT47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSB9KSBmb3VuZEl0ZW1zOiBBcnJheTxhbnk+O1xuICAgIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsLCB0YXJnZXQ6IFRhYmxlRmlsdGVyU2VsZWN0KSA9PiB7XG4gICAgICAgIHRhcmdldC51cGRhdGVGb3VuZEl0ZW1zKHZhbCk7XG4gICAgfSwgfSkgZmlsdGVyVGV4dDogc3RyaW5nO1xuICAgIGlzQ2hlY2tlZCA9IChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKSAhPT0gLTE7XG4gICAgfVxuICAgIGNsaWNrSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZihpdGVtSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUl0ZW1zKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZS52YWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoaT0+aS52YWx1ZSk7XG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZS52YWx1ZSkgJiYgdGhpcy52YWx1ZS52YWx1ZS5sZW5ndGggPT09IDApIHRoaXMudmFsdWUudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGRlbGV0ZUl0ZW1zID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YobmFtZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IEFjdGlvbiwgSUFjdGlvbiB9IGZyb20gXCIuLi9jb3JlL2FjdGlvblwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgQ29tcHV0ZWRVcGRhdGVyIH0gZnJvbSBcIi4uL2NvcmUvZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgeyBJbnBsYWNlRWRpdG9yIH0gZnJvbSBcIi4vY2VsbC1lZGl0b3JcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwsIFRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiwgSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24sIFRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCB9IGZyb20gXCIuL3NlYXJjaFwiO1xuaW1wb3J0IHsgSURhdGFQcm92aWRlciwgSURhdGFQcm92aWRlck93bmVyIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGEtcHJvdmlkZXJcIjtcbmltcG9ydCB7IEFycmF5RGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4uL3V0aWxzL2FycmF5LWRhdGEtcHJvdmlkZXJcIjtcbmltcG9ydCB7IElUYWJsZVJvdywgSVRhYmxlUm93RGF0YSwgVGFibGVSb3cgfSBmcm9tIFwiLi9yb3dcIjtcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IExvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7IEZpbHRlckl0ZW1WYWx1ZSB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuLyoqXG4gKiBQYXJhbWV0ZXJzIGZvciBjdXN0b21pemluZyB0aGUgdGFibGUgdmlldy5cbiAqL1xuIGV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29uZmlnIGV4dGVuZHMgSURhdGFQcm92aWRlciB7XG4gICAgLyoqIERlc2NyaXB0aW9uIG9mIGNvbHVtbnMgKi9cbiAgICBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW5EZXNjcmlwdGlvbj47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZGlzcGxheSB0aGUgc2VhcmNoIGJhciAqL1xuICAgIGVuYWJsZVNlYXJjaD86IGJvb2xlYW47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZGlzcGxheSBzdW1tYXJ5IHBhbmVsICovXG4gICAgZW5hYmxlU3VtbWFyeT86IGJvb2xlYW47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZGlzcGxheSBtZXJnZWQgY2VsbHMgdG9nZ2xlICovXG4gICAgZW5hYmxlTWVyZ2Vk0KFlbGxzVG9nZ2xlID86IGJvb2xlYW47XG4gICAgLyoqIFRoZSBwcmltYXJ5IHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIgZm9yIG1lcmdpbmcgY2VsbHMgKi9cbiAgICBlbmFibGVNZXJnZWTQoWVsbHMgPzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBlZGl0IGRhdGEgKi9cbiAgICBlbmFibGVFZGl0ID86IGJvb2xlYW47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZGlzcGxheSB0aGUgdGFibGUgYWN0aW9ucyBwYW5lbCAqL1xuICAgIGFjdGlvbnM/OiBBcnJheTxJQWN0aW9uPjtcbiAgICAvKiogVGhlIGtleSBmaWVsZCBvZiB0aGUgdGFibGUuIE5lZWRlZCB0byBlZGl0IHRoZSB0YWJsZS4gKi9cbiAgICBrZXlDb2x1bW4/OiBzdHJpbmc7XG4gICAgLyoqIFNldHRpbmcgdGhlIGNvbG9yIGZvciBzZWxlY3RlZCBjZWxscyBpbiBjYXNlIHRoZSBzZWxlY3Rpb24gaXMgc2V0IHVzaW5nIGFuIGF0dGFjaGVkIGJvb2xlYW4gY29sdW1uLiBUaGUgY29sb3IgaXMgc2V0IGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgQ1NTLiAqL1xuICAgIHNlbGVjdENlbGxDb2xvcj86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElUYWJsZUZpbHRlciB7XG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBvcDogc3RyaW5nLFxuICAgIGZpZWxkOiBzdHJpbmcsXG59XG5cbi8qKlxuICogQ3JlYXRlcyBUYWJsZSBjbGFzcy5cbiAqIEBwYXJhbSBjb25maWcgLSB0YWJsZSBvcHRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGFibGUgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSURhdGFQcm92aWRlck93bmVyIHtcbiAgICBwcml2YXRlIHNjcm9sbGVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZXNpemVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0YWJsZUVsZW1lbnQ6IEhUTUxUYWJsZUVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGlubmVyQWN0aW9uczogQXJyYXk8SUFjdGlvbj4gPSBbXTtcbiAgICBwdWJsaWMgaWNvbnMgPSBJY29ucztcbiAgICBwcml2YXRlIGZpbHRlclVwZGF0ZXI6IENvbXB1dGVkVXBkYXRlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcm93SGVpZ2h0ID0gMjA7IC8vIFRPRE86IHdlIG5lZWQgdG8gY2FsY3VsYXRlIHJvdyBoZWlnaHQgc29tZWhvdyBiZWZvcmVoYW5kXG5cbiAgICBwcml2YXRlIHVwZGF0ZUJ5RmlsdGVyKCkge1xuICAgICAgICBjb25zdCBpc09sZEZpbHRlciA9ICh0aGlzLnRhYmxlRmlsdGVyICYmIHRoaXMudGFibGVGaWx0ZXIubGVuZ3RoID4gMCk7XG4gICAgICAgIHRoaXMudGFibGVGaWx0ZXIgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoTW9kZWwuc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIucHVzaCh7dmFsdWU6IHRoaXMuc2VhcmNoTW9kZWwuc2VhcmNoVmFsdWUsIG9wOiBcIkNcIiwgZmllbGQ6IG51bGx9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbkZpbHRlclZhbHVlID0gY29sdW1uLmZpbHRlckNvbnRleHQudmFsdWU7XG4gICAgICAgICAgICBpZihjb2x1bW5GaWx0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbHVtbkZpbHRlclZhbHVlLmZvckVhY2goKGZpdjogRmlsdGVySXRlbVZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gZml2Lm9wO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBmaXYudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICgob3AgPT09IFwiRVFcIiAmJiB2YWwpIHx8IChvcCA9PT0gXCJDXCIgJiYgdmFsKSB8fCAob3AgPT09IFwiSVNOXCIpIHx8IChvcCA9PT0gXCJJU05OXCIpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnB1c2goe3ZhbHVlOiB2YWwsIG9wOiBvcCwgZmllbGQ6IGZpdi5maWVsZH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYoKHRoaXMudGFibGVGaWx0ZXIubGVuZ3RoID4gMCkgfHwgKGlzT2xkRmlsdGVyICYmIHRoaXMudGFibGVGaWx0ZXIubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC5wcmV2U2VhcmNoVmFsdWUgPSB0aGlzLnNlYXJjaE1vZGVsLnNlYXJjaFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBJVGFibGVDb25maWcsIGVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNob3dTZWFyY2ggPSBjb25maWcuZW5hYmxlU2VhcmNoID09PSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZUFjdGlvbnModGhpcy5jb25maWcpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnModGhpcy5jb25maWcpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlciA9IG5ldyBDb21wdXRlZFVwZGF0ZXIoKCkgPT4gdGhpcy51cGRhdGVCeUZpbHRlcigpKTtcbiAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGVyLm9ic2VydmUodGhpcywgXCJfX2ZpbHRlclVwZGF0ZXJWYWx1ZVwiKTsgLy8gVE9ETzogbWFrZSBpdCBlbGVnYW50XG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlciA9ICgpID0+IHRoaXMudXBkYXRlQnlGaWx0ZXIoKTtcbiAgICAgICAgaWYoISFlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzTWVyZ2Vk0KFlbGxzID0gY29uZmlnLmVuYWJsZU1lcmdlZNChZWxscztcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsZXJFbGVtZW50ID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWJyaXMtdGFibGUtc2Nyb2xsLWNvbnRhaW5lclwiKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgdGhpcy50YWJsZUVsZW1lbnQgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGFibGVcIilbMF0gYXMgSFRNTFRhYmxlRWxlbWVudDtcbiAgICAgICAgdGhpcy5yZXNpemVyRWxlbWVudCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFicmlzLXRhYmxlXCIpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBcbiAgICAgICAgdmFyIGNoZWNrTG9hZGluZyA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHNlbGYucGFydFJvd0NvdW50ID0gTWF0aC5yb3VuZChzZWxmLnNjcm9sbGVyRWxlbWVudC5jbGllbnRIZWlnaHQgLyBUYWJsZS5yb3dIZWlnaHQpO1xuICAgICAgICAgICAgaWYoc2VsZi5zY3JvbGxlckVsZW1lbnQuc2Nyb2xsVG9wIDwgVGFibGUucm93SGVpZ2h0ICYmIHNlbGYubGFzdE9mZnNldEJhY2sgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzZWxmLmxhc3RPZmZzZXRCYWNrIC0gc2VsZi5wYXJ0Um93Q291bnQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXdSb3dzKHNlbGYubGFzdE9mZnNldEJhY2ssIE1hdGgubWF4KDAsIHNlbGYubGFzdE9mZnNldEJhY2sgLSBzZWxmLnBhcnRSb3dDb3VudCksIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1Jvd3Moc2VsZi5wYXJ0Um93Q291bnQsIE1hdGgubWF4KDAsIHNlbGYubGFzdE9mZnNldEJhY2sgLSBzZWxmLnBhcnRSb3dDb3VudCksIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKChzZWxmLnNjcm9sbGVyRWxlbWVudC5zY3JvbGxUb3AgPj0gc2VsZi50YWJsZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gc2VsZi5zY3JvbGxlckVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJiB0aGlzLmxvYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3Um93cyhzZWxmLnBhcnRSb3dDb3VudCwgc2VsZi5sYXN0T2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxlckVsZW1lbnQub25zY3JvbGwgPSBjaGVja0xvYWRpbmc7XG4gICAgICAgIHRoaXMucmVzaXplckVsZW1lbnQub25yZXNpemUgPSBjaGVja0xvYWRpbmc7XG4gICAgICAgIGNoZWNrTG9hZGluZygpO1xuXG4gICAgICAgIGlmKHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS50YXJnZXQudGFnTmFtZSA9PT0gXCJUSEVBRFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbnRyeS5jb250ZW50UmVjdC53aWR0aCA8IDcwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhYnJpcy10YWJsZS0tc21hbGxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWJyaXMtdGFibGUtLXNtYWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUhlYWRIZWlnaHQgPSBlbnRyeS5jb250ZW50UmVjdC5oZWlnaHQgKyA1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aGVhZFwiKVswXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0RldGFpbChyb3dEYXRhOiBJVGFibGVSb3dEYXRhKSB7XG4gICAgICAgIHRoaXMuaXNTaG93RGV0YWlsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGlkZURldGFpbCgpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZFJvd0tleSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNTaG93RGV0YWlsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyhzdGFydFJvdzogbnVtYmVyKSB7XG4gICAgICAgIGlmKHN0YXJ0Um93KSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXRCYWNrID0gc3RhcnRSb3cgLSAxO1xuICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0ID0gc3RhcnRSb3cgLSAxO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiB7IGMuY291bnQgPSBudWxsOyBjLnByZXYgPSBudWxsOyBjLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDsgYy5sYXN0ID0gbnVsbCB9KTtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5kcmF3Um93cyh0aGlzLnBhcnRSb3dDb3VudCwgc3RhcnRSb3cgLSAxLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVEZXRhaWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDb2x1bW4oY29sdW1uOiBhbnksIG1vZGVsOiBJVGFibGVDb25maWcpOiBJVGFibGVDb2x1bW4ge1xuICAgICAgICByZXR1cm4gbmV3IFRhYmxlQ29sdW1uKGNvbHVtbiwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbHVtbnMoY29uZmlnOiBJVGFibGVDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gY29uZmlnLmNvbHVtbnMubWFwKGNvbHVtbiA9PiBcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29sdW1uKGNvbHVtbiwgY29uZmlnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBY3Rpb25zKGNvbmZpZzogSVRhYmxlQ29uZmlnKSB7XG4gICAgICAgIGlmKGNvbmZpZy5lbmFibGVTdW1tYXJ5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmlubmVyQWN0aW9ucy5wdXNoKG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic3VtbWFyeS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGFibGVTdW1tYXJ5ID0gIXRoaXMuc2hvd1RhYmxlU3VtbWFyeTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN2ZzogdGhpcy5pY29ucy5lcXVhbCxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwidG9wXCJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb25maWcuZW5hYmxlTWVyZ2Vk0KFlbGxzVG9nZ2xlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmlubmVyQWN0aW9ucy5wdXNoKG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibWVyZ2Vk0KFlbGxzLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTWVyZ2Vk0KFlbGxzID0gIXRoaXMuaXNNZXJnZWTQoWVsbHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMudGFibGUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcInRvcFwiXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29uZmlnLmVuYWJsZUVkaXQgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5pbm5lckFjdGlvbnMucHVzaChuZXcgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNhdmUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0luc2VydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RpZnkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHIubnVtYmVyPjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNlbGxzLmZvckVhY2goYyA9PiBjLnRleHQgIT09IGMuZGF0YSAmJiAobW9kaWZ5W2MubmFtZV0gPSBjLnRleHQpKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWlzRW1wdHkobW9kaWZ5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGFQcm92aWRlci5zYXZlRGF0YSh0aGlzLmtleUNvbHVtbiwgci5yb3dEYXRhW3RoaXMua2V5Q29sdW1uXSwgbW9kaWZ5KSkgci5jZWxscy5mb3JFYWNoKGMgPT4gYy5kYXRhID0gYy50ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jZWxscy5mb3JFYWNoKGMgPT4gbW9kaWZ5W2MubmFtZV0gPSBjLnRleHQpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGFQcm92aWRlci5pbnNlcnREYXRhKHRoaXMua2V5Q29sdW1uLCBtb2RpZnkpKSBpc0luc2VydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnNlcnQpIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLnNhdmUsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcImJvdHRvbVwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVsZXRlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIubnVtYmVyPjApIHRoaXMucm93cy5zbGljZSh0aGlzLnJvd3MuaW5kZXhPZihyKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyLmRlbGV0ZURhdGEodGhpcy5rZXlDb2x1bW4sIHRoaXMuc2VsZWN0ZWRSb3dzLm1hcChyID0+IHIubnVtYmVyPjAgJiYgci5yb3dEYXRhW3RoaXMua2V5Q29sdW1uXSksIChfID0+IHRoaXMucmVmcmVzaCgpKSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN2ZzogdGhpcy5pY29ucy5kZWwsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcImJvdHRvbVwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibmV3Um93LWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNjcm9sbGVyRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Um93OklUYWJsZVJvd0RhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiBjLnZpc2libGUgJiYgKG5ld1Jvd1tjLm5hbWVdPVwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzLnVuc2hpZnQodGhpcy5jcmVhdGVSb3cobmV3Um93LCAtMSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLmFkZCxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiYm90dG9tXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICl9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGF0YVByb3ZpZGVyOiBJRGF0YVByb3ZpZGVyID0gdW5kZWZpbmVkO1xuICAgIGdldCBkYXRhUHJvdmlkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhUHJvdmlkZXIgfHwgdGhpcy5jb25maWc7XG4gICAgfVxuICAgIHNldCBkYXRhUHJvdmlkZXIocHJvdmlkZXI6IElEYXRhUHJvdmlkZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8vIGdldCBkYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gW107XG4gICAgLy8gfVxuICAgIHNldCBkYXRhKF9kYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gbmV3IEFycmF5RGF0YVByb3ZpZGVyKF9kYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5sYXN0T2Zmc2V0QmFjayA9IDA7XG4gICAgICAgIHRoaXMubGFzdE9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4geyBjLmNvdW50ID0gbnVsbDsgYy5wcmV2ID0gbnVsbDsgYy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7IH0pO1xuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICAgICAgdGhpcy5kcmF3Um93cyh0aGlzLnBhcnRSb3dDb3VudCwgMCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmhpZGVEZXRhaWwoKTtcbiAgICB9XG5cbiAgICBkcmF3Um93cyhsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgYmFjayA9IGZhbHNlKSB7XG4gICAgICAgIGlmKCF0aGlzLmxvYWRpbmdNdXRleCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nTXV0ZXggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIuZ2V0RGF0YShcbiAgICAgICAgICAgICAgICBsaW1pdCwgXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5maWx0ZXIoYyA9PiBjLm9yZGVyICE9PSB1bmRlZmluZWQpLm1hcChjID0+IDxhbnk+e2ZpZWxkOiBjLm5hbWUsIGRlc2M6IGMub3JkZXJ9KSxcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLFxuICAgICAgICAgICAgICAgIG51bGwgLyomJiB0aGlzLnBpbm5lZFJvd0tleSgpKi8sIFxuICAgICAgICAgICAgICAgIGJhY2ssIFxuICAgICAgICAgICAgICAgIChkYXRhLCBuZXdPZmZzZXQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBiYWNrOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldEJhY2sgPSB0aGlzLmxhc3RPZmZzZXRCYWNrIC0gbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXQgPSB0aGlzLmxhc3RPZmZzZXQgKyBsaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlQmFjayA9IHRoaXMubGFzdE9mZnNldEJhY2sgPiAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRNb3JlID0gdGhpcy5sYXN0T2Zmc2V0IDw9IHRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSb3dzID0gdGhpcy5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAoZGF0YSB8fCBbXSkuZm9yRWFjaCgoZGF0YUl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um93ID0gdGhpcy5jcmVhdGVSb3coYmFjayA/IGRhdGFbZGF0YS5sZW5ndGggLSAxIC0gTnVtYmVyKGluZGV4KV0gOiBkYXRhSXRlbSwgYmFjayA/IGRhdGEubGVuZ3RoIC0gMSAtIE51bWJlcihpbmRleCkgKyBvZmZzZXQgOiBOdW1iZXIoaW5kZXgpICsgb2Zmc2V0LCBiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJhY2spIHsgY3VycmVudFJvd3MudW5zaGlmdChuZXdSb3cpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHsgY3VycmVudFJvd3MucHVzaChuZXdSb3cpOyB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdNdXRleCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsaWNrUm93KHJvdzogSVRhYmxlUm93LCBldmVudCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5mb3JFYWNoKHIgPT4gci5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2VsZWN0Um93KHJvdzogSVRhYmxlUm93LCBldmVudCkge1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSAhcm93LnNlbGVjdGVkO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5sYXN0U2VsZWN0Um93KSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MuZmlsdGVyKGUgPT4gZS5udW1iZXIgPj0gTWF0aC5taW4odGhpcy5sYXN0U2VsZWN0Um93Lm51bWJlciwgcm93Lm51bWJlcikgJiYgZS5udW1iZXIgPD0gTWF0aC5tYXgodGhpcy5sYXN0U2VsZWN0Um93Lm51bWJlciwgcm93Lm51bWJlcikpXG4gICAgICAgICAgICAuZm9yRWFjaChlID0+IGUuc2VsZWN0ZWQgPSB0cnVlKTtcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKHJvdy5zZWxlY3RlZCkgdGhpcy5sYXN0U2VsZWN0Um93ID0gcm93O1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3MubGVuZ3RoICE9PSAxKSB0aGlzLmhpZGVEZXRhaWwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xpY2tDb2x1bW4gPSAoY29sdW1uOiBJVGFibGVDb2x1bW4sIGV2ZW50KSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaXNTaG93RGV0YWlsKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVEZXRhaWwoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3T3JkZXIgPSBjb2x1bW4ub3JkZXIgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogIWNvbHVtbi5vcmRlcjtcbiAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm1hcCgoYykgPT4gYy5vcmRlciA9IHVuZGVmaW5lZClcbiAgICAgICAgfSBcbiAgICAgICAgY29sdW1uLm9yZGVyID0gbmV3T3JkZXIgYXMgYW55OyAvLyBUT0RPOiBzb21ldGhpbmcgd3JvbmcgaXMgaGVyZVxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUm93KGRhdGE6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd8bnVtYmVyfSwgbnVtOiBudW1iZXIsIGJhY2s6IGJvb2xlYW4pOiBJVGFibGVSb3cge1xuICAgICAgICBsZXQgcm93Q2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RUZXh0ID0gbnVsbDtcbiAgICAgICAgbGV0IGNvbG9yQ2VsbCA9IG51bGwsIGNvbG9yUm93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb2x1bW5zLnJldmVyc2UoKS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IG5ldyBUYWJsZUNlbGwoKTtcbiAgICAgICAgICAgIGNlbGwuaW5pdGlhbGl6ZShjb2wsIGJhY2ssIGRhdGEsIGNvbG9yQ2VsbCk7XG4gICAgICAgICAgICBpZighIWxhc3RUZXh0KSB7XG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0ICs9IChcIi9cIiArIGxhc3RUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RUZXh0ID0gKGNvbC5jb25jYXRQcmV2ICYmICFjb2wucm93X2NvbG9yKSA/IGNlbGwudGV4dCA6IG51bGw7XG4gICAgICAgICAgICBjb2xvclJvdyA9IChjb2wucm93X2NvbG9yICYmICFjb2wuY29uY2F0UHJldikgPyAoY29sLnR5cGUgPT09IFwiYm9vbFwiID8gKCBkYXRhW2NvbC5uYW1lXSA/IHRoaXMuY29uZmlnLnNlbGVjdENlbGxDb2xvciA6IG51bGwpIDogZGF0YVtjb2wubmFtZV0pIDogY29sb3JSb3c7XG4gICAgICAgICAgICBjb2xvckNlbGwgPSAoY29sLnJvd19jb2xvciAmJiBjb2wuY29uY2F0UHJldikgPyAoY29sLnR5cGUgPT09IFwiYm9vbFwiID8gKCBkYXRhW2NvbC5uYW1lXSA/IHRoaXMuY29uZmlnLnNlbGVjdENlbGxDb2xvciA6IG51bGwpIDogZGF0YVtjb2wubmFtZV0pIDogbnVsbDtcbiAgICAgICAgICAgIGlmKGNvbC52aXNpYmxlKSByb3dDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2x1bW5zLnJldmVyc2UoKTtcbiAgICAgICAgbGV0IHJvd19pZCA9IGRhdGFbdGhpcy5rZXlDb2x1bW5dO1xuICAgICAgICBjb25zdCByb3cgPSBuZXcgVGFibGVSb3coKTtcbiAgICAgICAgcm93LmNlbGxzID0gcm93Q2VsbHMucmV2ZXJzZSgpO1xuICAgICAgICByb3cucm93RGF0YSA9IGRhdGE7XG4gICAgICAgIHJvdy5pZCA9IHJvd19pZDtcbiAgICAgICAgcm93Lm51bWJlciA9IG51bSArIDE7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9IHJvd19pZCAmJiAodGhpcy5leHBhbmRlZFJvd0tleSA9PT0gcm93X2lkKTtcbiAgICAgICAgcm93LmNvbG9yID0gY29sb3JSb3c7XG4gICAgICAgIHJvdy5zZWxlY3QgPSAoZGF0YSwgZXZlbnQpID0+IHRoaXMuc2VsZWN0Um93KGRhdGEsIGV2ZW50KSxcbiAgICAgICAgcm93LmNsaWNrID0gKGRhdGEsIGV2ZW50KSA9PiB0aGlzLmNsaWNrUm93KGRhdGEsIGV2ZW50KVxuICAgICAgICByZXR1cm4gcm93O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByb3dFeHBhbmRlZChpZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0RWRpdENlbGwgPSAoY2VsbDogSVRhYmxlQ2VsbCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q2VsbEVkaXRvcikgdGhpcy5jdXJyZW50Q2VsbEVkaXRvci5pbnBsYWNlRWRpdG9yID0gdW5kZWZpbmVkO1xuICAgICAgICBjZWxsLmlucGxhY2VFZGl0b3IgPSBuZXcgSW5wbGFjZUVkaXRvcihjZWxsKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VsbEVkaXRvciA9IGNlbGw7IFxuICAgICAgICB0aGlzLmNvbXBsZXRlRWRpdENlbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcGxldGVFZGl0Q2VsbCgpIHtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFzQWN0aXZlSW5wbGFjZUVkaXRvckNvcmUoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0FjdGl2ZUlucGxhY2VFZGl0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0FjdGl2ZUlucGxhY2VFZGl0b3JDb3JlKCk7XG4gICAgfVxuXG4gICAgY3VyQ29sID0gdW5kZWZpbmVkO1xuICAgIG54dENvbCA9IHVuZGVmaW5lZDtcbiAgICBwYWdlWCA9IHVuZGVmaW5lZDtcbiAgICBueHRDb2xXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICBjdXJDb2xXaWR0aCA9IHVuZGVmaW5lZFxuXG4gICAgcHVibGljIGxvZ01vdXNlT3ZlciA9IChkLCBlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0ID0gJzJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknO1xuICAgIH1cbiAgICBwdWJsaWMgbG9nTW91c2VPdXQgPSAoZCwgZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJSaWdodCA9ICcnO1xuICAgIH1cbiAgICBwdWJsaWMgbG9nTW91c2VNb3ZlID0gKGQsIGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VyQ29sICYmIGUuYnV0dG9ucykge1xuICAgICAgICAgICAgdmFyIGRpZmZYID0gZS5wYWdlWCAtIHRoaXMucGFnZVg7XG4gICAgICAgICAgICB0aGlzLm54dENvbCAmJiAodGhpcy5ueHRDb2wuc3R5bGUud2lkdGggPSAodGhpcy5ueHRDb2xXaWR0aCAtIChkaWZmWCkpKydweCcpO1xuICAgICAgICAgICAgdGhpcy5jdXJDb2wuc3R5bGUud2lkdGggPSAodGhpcy5jdXJDb2xXaWR0aCArIGRpZmZYKSsncHgnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBsb2dNb3VzZURvd24gPSAoZCwgZSkgPT4ge1xuICAgICAgICB0aGlzLmN1ckNvbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMubnh0Q29sID0gdGhpcy5jdXJDb2wubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZyA/IHRoaXMuY3VyQ29sLm5leHRFbGVtZW50U2libGluZyA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wYWdlWCA9IGUucGFnZVg7IFxuICAgICAgICB2YXIgcGFkZGluZyA9IHRoaXMucGFkZGluZ0RpZmYodGhpcy5jdXJDb2wpO1xuICAgICAgICB0aGlzLmN1ckNvbFdpZHRoID0gdGhpcy5jdXJDb2wub2Zmc2V0V2lkdGggLSBwYWRkaW5nO1xuICAgICAgICBpZiAodGhpcy5ueHRDb2wpIHRoaXMubnh0Q29sV2lkdGggPSB0aGlzLm54dENvbC5vZmZzZXRXaWR0aCAtIHBhZGRpbmc7ICAgIFxuICAgIH1cbiAgICBwdWJsaWMgbG9nTW91c2VVcCA9IChkLCBlKSA9PiB7XG4gICAgICAgIHRoaXMuY3VyQ29sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm54dENvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wYWdlWCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ueHRDb2xXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jdXJDb2xXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwYWRkaW5nRGlmZihjb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3R5bGVWYWwoY29sLCdib3gtc2l6aW5nJykgPT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFkTGVmdCA9IHRoaXMuZ2V0U3R5bGVWYWwoY29sLCdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgdmFyIHBhZFJpZ2h0ID0gdGhpcy5nZXRTdHlsZVZhbChjb2wsJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgcmV0dXJuIChwYXJzZUludChwYWRMZWZ0KSArIHBhcnNlSW50KHBhZFJpZ2h0KSk7XG4gICAgfVxuICAgIGdldFN0eWxlVmFsKGVsbSxjc3Mpe1xuICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxtLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKGNzcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJvb3RMZXZlbDogYW55ID0gdHJ1ZTtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzTnVtYmVyOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNNZXJnZWTQoWVsbHM6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBsb2FkaW5nTXV0ZXg6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiB0cnVlIH0pIGxvYWRNb3JlOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgbG9hZE1vcmVCYWNrOiBib29sZWFuO1xuICAgIGxhc3RPZmZzZXQgPSAwO1xuICAgIGxhc3RPZmZzZXRCYWNrID0gMDtcbiAgICBwYXJ0Um93Q291bnQgPSAxMDtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdLCBvblNldDogKHZhbDogSVRhYmxlQ29sdW1uW10sIHRhcmdldDogVGFibGUpID0+IHtcbiAgICAgICAgdGFyZ2V0LnZpZXdGaWx0ZXJUYWJsZSA9IG5ldyBDb21wdXRlZFVwZGF0ZXIoKCkgPT4gdmFsLmZpbHRlcihjID0+IGMuZmlsdGVyQ29udGV4dC5zaG93RmlsdGVyKS5sZW5ndGggPiAwKSBhcyBhbnk7XG4gICAgfSB9KSBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+O1xuICAgIGdldCBrZXlDb2x1bW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmtleUNvbHVtbjtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSB9KSByb3dzOiBBcnJheTxJVGFibGVSb3c+O1xuICAgIGdldCBzZWxlY3RlZFJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvd3MuZmlsdGVyKHIgPT4gci5zZWxlY3RlZCk7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2hvd1RhYmxlU3VtbWFyeTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHNob3dTZWFyY2g6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgb25TZXQ6IChuZXdWYWx1ZTogbnVtYmVyLCB0YXJnZXQ6IFRhYmxlKSA9PiB7XG4gICAgICAgIHRhcmdldC5uYXZpZ2F0ZVRvKG5ld1ZhbHVlKTtcbiAgICB9IH0pIHN0YXJ0Um93OiBudW1iZXI7XG4gICAgbGFzdFNlbGVjdFJvdyA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiAwIH0pIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IDAgfSkgdGFibGVIZWFkSGVpZ2h0OiBudW1iZXI7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiB0cnVlIH0pIHNob3dUYWJsZUZpbHRlcjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHZpZXdGaWx0ZXJUYWJsZTogYm9vbGVhbjtcbiAgICB0YWJsZUZpbHRlcjogSVRhYmxlRmlsdGVyW107XG4gICAgY3VycmVudENlbGxFZGl0b3I6IElUYWJsZUNlbGw7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc1Nob3dEZXRhaWw6IGJvb2xlYW47XG4gICAgZXhwYW5kZWRSb3dLZXk7XG5cbiAgICBzZWFyY2hNb2RlbCA9IG5ldyBTZWFyY2hNb2RlbCgpO1xuXG4gICAgZ2V0QWN0aW9ucyA9IChjb250YWluZXI/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IFtdLmNvbmNhdCh0aGlzLmlubmVyQWN0aW9ucykuY29uY2F0KHRoaXMuY29uZmlnLmFjdGlvbnMgfHwgW10pO1xuICAgICAgICByZXR1cm4gYWN0aW9ucy5maWx0ZXIoYWN0aW9uID0+IGFjdGlvbi5jb250YWluZXIgPT09IGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGdldCB0b3BBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpb25zKCd0b3AnKTtcbiAgICB9XG4gICAgZ2V0IGRyb3Bkb3duQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aW9ucygnZHJvcGRvd24nKTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbUFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdGlvbnMoJ2JvdHRvbScpO1xuICAgIH1cbiAgICBnZXQgbm9EYXRhVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJub0RhdGFcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSVRhYmxlQ2VsbFR5cGUsIFRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuZXhwb3J0IGNsYXNzIE51bWJlckNlbGwgaW1wbGVtZW50cyBJVGFibGVDZWxsVHlwZSB7XG4gICAgbmFtZTogc3RyaW5nID0gXCJudW1iZXJcIjtcbiAgICBjc3M6IHN0cmluZyA9IFwiYWJyaXMtdGFibGUtY2VsbC0tcmlnaHRcIlxufVxuXG5UYWJsZUNlbGwucmVnaXN0ZXJDZWxsVHlwZShuZXcgTnVtYmVyQ2VsbCgpKTsiLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuLyoqXG4gKiBUaGUgY29sbGVjdGlvbiBvZiBkYXRhIGZvciBhIHRhYmxlIHJvdy4gVGhlIGtleSBpcyB0aGUgbmFtZSBvZiB0aGUgY29sdW1uLiBUaGUgdmFsdWUgaXMgdGhlIGNvbnRlbnQgb2YgdGhlIHRhYmxlIGNlbGwuXG4gKi9cbiBleHBvcnQgaW50ZXJmYWNlIElUYWJsZVJvd0RhdGEge1xuICAgIC8qKiBUYWJsZSBjZWxsIGNvbnRlbnQgKi9cbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJcbn1cblxuXG4vKipcbiAqIEluZm9ybWF0aW9uIG5lZWRlZCB0byByZW5kZXIgYSB0YWJsZSByb3dcbiAqL1xuIGV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUm93IHtcbiAgICAvKiogQXJyYXkgY29udGFpbmluZyBvYnNlcnZhYmxlIHRhYmxlIGNlbGxzICovXG4gICAgY2VsbHM6IEFycmF5PElUYWJsZUNlbGw+LFxuICAgIC8qKiBUaGUgY29sbGVjdGlvbiBvZiBkYXRhIGZvciBhIHRhYmxlIHJvdyAqL1xuICAgIHJvd0RhdGE6IElUYWJsZVJvd0RhdGEsXG4gICAgLyoqICAqL1xuICAgIGlkOiBhbnksXG4gICAgLyoqICAqL1xuICAgIG51bWJlcjogbnVtYmVyLFxuICAgIHNlbGVjdGVkOiBib29sZWFuLFxuICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgc2VsZWN0OiAoZGF0YTogSVRhYmxlUm93LCBldmVudCkgPT4gdm9pZCxcbiAgICBjbGljazogKGRhdGE6IElUYWJsZVJvdywgZXZlbnQpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlUm93IGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElUYWJsZVJvdyB7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSB9KSBjZWxsczogSVRhYmxlQ2VsbFtdO1xuICAgIHJvd0RhdGE6IElUYWJsZVJvd0RhdGE7XG4gICAgaWQ6IGFueTtcbiAgICBudW1iZXI6IG51bWJlcjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHNlbGVjdGVkOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIGNvbG9yOiBzdHJpbmc7XG4gICAgc2VsZWN0OiAoZGF0YTogSVRhYmxlUm93LCBldmVudDogYW55KSA9PiB2b2lkO1xuICAgIGNsaWNrOiAoZGF0YTogSVRhYmxlUm93LCBldmVudDogYW55KSA9PiB2b2lkO1xufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5cbmltcG9ydCBcIi4vc2VhcmNoLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVsIGV4dGVuZHMgQmFzZSB7XG4gICAgc2VhcmNoID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnByZXZTZWFyY2hWYWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWU7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB0ZXh0O1xuICAgICAgICB0aGlzLnVwZGF0ZXIgJiYgdGhpcy51cGRhdGVyKCk7XG4gICAgfVxuICAgIHVwZGF0ZXI6ICgpID0+IHZvaWQ7XG4gICAgQHByb3BlcnR5KCkgcHJldlNlYXJjaFZhbHVlOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgc2VhcmNoVmFsdWU6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4gfSBmcm9tIFwiLi9jb2x1bW5cIjtcblxuaW1wb3J0IFwiLi9zdW1tYXJ5LnNjc3NcIjtcblxuY29uc3QgRnVuY3Rpb25zOiBBcnJheTx7IHRpdGxlOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IGhpbnQ6IHN0cmluZywgdHlwZXM/OiBzdHJpbmdbXSB9PiA9ICBbXG4gIHsgdGl0bGU6IFwiLVwiLCB2YWx1ZTogXCJcIiwgaGludDogXCJcIiB9LCBcbiAgeyB0aXRsZTogXCLOo1wiLCB2YWx1ZTogXCJzdW1cIiwgaGludDogXCJTdW0gb2YgY2VsbHMgZm9yIHRoaXMgdGFibGUgY29sdW1uXCIsIHR5cGVzOiBbXCJpbnRlZ2VyXCIsIFwibW9uZXlcIiwgXCJudW1iZXJcIl0gfSwgXG4gIHsgdGl0bGU6IFwieMyEXCIsIHZhbHVlOiBcImF2Z1wiLCBoaW50OiBcIkFyaXRobWV0aWMgbWVhbiBpbiB0aGlzIHRhYmxlIGNvbHVtblwiLCB0eXBlczogW1wiaW50ZWdlclwiLCBcIm1vbmV5XCIsIFwibnVtYmVyXCJdIH0sIFxuICB7IHRpdGxlOiBcIm1pblwiLCB2YWx1ZTogXCJtaW5cIiwgaGludDogXCJNaW5pbXVtIHZhbHVlIGluIHRoaXMgdGFibGUgY29sdW1uXCIsIHR5cGVzOiBbXCJpbnRlZ2VyXCIsIFwibW9uZXlcIiwgXCJkYXRlXCIsIFwibnVtYmVyXCJdIH0sXG4gIHsgdGl0bGU6IFwibWF4XCIsIHZhbHVlOiBcIm1heFwiLCBoaW50OiBcIk1heGltdW0gdmFsdWUgaW4gdGhpcyB0YWJsZSBjb2x1bW5cIiwgdHlwZXM6IFtcImludGVnZXJcIiwgXCJtb25leVwiLCBcImRhdGVcIiwgXCJudW1iZXJcIl0gfSxcbiAgeyB0aXRsZTogXCLOnVwiLCB2YWx1ZTogXCJjb3VudFwiLCBoaW50OiBcIk51bWJlciBvZiBub24tYmxhbmsgY2VsbHMgaW4gdGhpcyBjb2x1bW5cIiB9LFxuICB7IHRpdGxlOiBcIlVcIiwgdmFsdWU6IFwidW5pcXVlXCIsIGhpbnQ6IFwiTnVtYmVyIG9mIHVuaXF1ZSBjZWxscyBpbiB0aGlzIGNvbHVtblwiIH0sXG5dO1xuXG5leHBvcnQgY2xhc3MgVGFibGVTdW1tYXJ5SXRlbSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZyApIHtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVTdW1tYXJ5IGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uOiBJVGFibGVDb2x1bW4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3VtbWFyeUl0ZW1zID0gRnVuY3Rpb25zLmZpbHRlcihmdW5jRGVzY3JpcHRpb24gPT4ge1xuICAgICAgICByZXR1cm4gIWZ1bmNEZXNjcmlwdGlvbi50eXBlcyB8fCBmdW5jRGVzY3JpcHRpb24udHlwZXMuaW5kZXhPZihjb2x1bW4udHlwZSkgIT09IC0xXG4gICAgICB9KS5tYXAoZnVuY0Rlc2NyaXB0aW9uID0+IG5ldyBUYWJsZVN1bW1hcnlJdGVtIChmdW5jRGVzY3JpcHRpb24udGl0bGUsIGZ1bmNEZXNjcmlwdGlvbi52YWx1ZSkpO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW4uc3VtbWFyeVZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWw6IGFueSkge1xuICAgIHRoaXMuY29sdW1uLnN1bW1hcnlWYWx1ZSA9IHZhbDtcbiAgfVxuICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IG51bGwsIG9uU2V0OiAodmFsLCB0YXJnZXQ6IFRhYmxlU3VtbWFyeSkgPT4ge1xuICAgIHRhcmdldC5jb2x1bW4uc3VtbWFyeVBhcmFtcyA9IHsgZnVuYzogdmFsLCBmaWVsZDogdGFyZ2V0LmNvbHVtbi5uYW1lIH07XG4gIH0gfSkgZnVuYzogYW55O1xuICBzdW1tYXJ5SXRlbXM6IEFycmF5PFRhYmxlU3VtbWFyeUl0ZW0+O1xufVxuIiwiaW1wb3J0IHsgSURhdGFQcm92aWRlciB9IGZyb20gXCIuL2RhdGEtcHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIEFycmF5RGF0YVByb3ZpZGVyIGltcGxlbWVudHMgSURhdGFQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IEFycmF5PGFueT4pIHtcblxuICAgIH1cblxuICAgIGZpbHRlcmVkKGZpbHRlcnMsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE/LmZpbHRlcihyb3cgPT4gXG4gICAgICAgICAgICBmaWx0ZXJzLmV2ZXJ5KGYgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaChmLm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFUVwiOiByZXR1cm4gZi52YWx1ZS5pbmNsdWRlcyhyb3dbZi5maWVsZF0pOyBcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNcIjogcmV0dXJuIGYuZmllbGQgPyB+cm93W2YuZmllbGRdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGYudmFsdWUudG9VcHBlckNhc2UoKSkgOiBPYmplY3Qua2V5cyhyb3cpLnNvbWUoayA9PiAhIShyb3dba10gJiYgcm93W2tdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGYudmFsdWUudG9VcHBlckNhc2UoKSkgIT09IC0xKSk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJJU05cIjogIHJldHVybiAhKHJvd1tmLmZpZWxkXSk7IFxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSVNOTlwiOiAgcmV0dXJuICEhKHJvd1tmLmZpZWxkXSk7IFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSA/PyBbXTtcbiAgICB9XG5cbiAgICBnZXREYXRhKGxpbWl0LCBvZmZzZXQsIG9yZGVyLCBmaWx0ZXJzLCBrZXksIGJhY2ssIGNhbGxiYWNrKSB7XG4gICAgICAgIGZ1bmN0aW9uIHNvcnRmdW5jKGEsIGIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtvcmRlcltpXS5maWVsZF0gPT09IGJbb3JkZXJbaV0uZmllbGRdKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFbb3JkZXJbaV0uZmllbGRdID4gYltvcmRlcltpXS5maWVsZF0gPyAxIDogLTEpICogKG9yZGVyW2ldLmRlc2MgPyAtMSA6IDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgKG9yZGVyLmxlbmd0aCA+IDApICYmIHRoaXMuZGF0YS5zb3J0KHNvcnRmdW5jKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlcmVkKGZpbHRlcnMsIHRoaXMuZGF0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMDsgaSA8IG9mZnNldCArIGxpbWl0ICYmIGZpbHRlcmVkRGF0YSAmJiBpIDwgZmlsdGVyZWREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChmaWx0ZXJlZERhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCcyLdGB0LXQutGD0L3QtNC90LDRjyDQt9Cw0LTQtdGA0LbQutCwINC/0YDQvtGI0LvQsCcpO1xuICAgICAgICAvLyAgICAgY2FsbGJhY2socmVzdWx0LCBvZmZzZXQgKyBsaW1pdCwgZmlsdGVyZWREYXRhLmxlbmd0aCwgYmFjaylcbiAgICAgICAgLy8gfSwgMjAwMCk7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgb2Zmc2V0ICsgbGltaXQsIGZpbHRlcmVkRGF0YS5sZW5ndGgsIGJhY2spO1xuICAgIH1cblxuICAgIGdldFN1bW1hcnkoZnVuYywgZmllbGQsIGZpbHRlcnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyZWQoZmlsdGVycywgdGhpcy5kYXRhKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZpbHRlcmVkRGF0YS5sZW5ndGggPyBmaWx0ZXJlZERhdGFbMF1bZmllbGRdIDogZmFsc2U7XG4gICAgICAgIGxldCBzdW0gPSAwLCBjb3VudCA9IDAsIHVuaXF1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZnVuYykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdW1cIjogcmVzdWx0ID0gcmVzdWx0ICsgcm93W2ZpZWxkXTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImF2Z1wiOiBzdW0gPSBzdW0gKyByb3dbZmllbGRdOyBjb3VudCsrOyByZXN1bHQgPSBzdW0gLyBjb3VudDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pblwiOiByZXN1bHQgPSByZXN1bHQgPCByb3dbZmllbGRdID8gcmVzdWx0IDogcm93W2ZpZWxkXTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1heFwiOiByZXN1bHQgPSByZXN1bHQgPiByb3dbZmllbGRdID8gcmVzdWx0IDogcm93W2ZpZWxkXTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvdW50XCI6IGlmIChyb3dbZmllbGRdKSBjb3VudCsrOyByZXN1bHQgPSBjb3VudDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVuaXF1ZVwiOiBpZiAoIXVuaXF1ZXMuaW5jbHVkZXMocm93W2ZpZWxkXSkpIHsgdW5pcXVlcy5wdXNoKHJvd1tmaWVsZF0pOyB9IHJlc3VsdCA9IHVuaXF1ZXMubGVuZ3RoOyBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBnZXRDb2x1bW5EYXRhKGNvbHVtbk5hbWUsIGZpbHRlciwgbGltaXQsIG9mZnNldCwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdLCB1bmlxdWVzID0gW107XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIGlmICgoIShmaWx0ZXIpIHx8IH5yb3dbY29sdW1uTmFtZV0udG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlci50b1VwcGVyQ2FzZSgpKSkgJiYgIXVuaXF1ZXMuaW5jbHVkZXMocm93W2NvbHVtbk5hbWVdKSkgeyB1bmlxdWVzLnB1c2gocm93W2NvbHVtbk5hbWVdKTsgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMDsgaSA8IG9mZnNldCArIGxpbWl0ICYmIHVuaXF1ZXMgJiYgaSA8IHVuaXF1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVuaXF1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgc2F2ZURhdGEoa2V5TmFtZTpzdHJpbmcsIGtleTphbnksIG1vZGlmeTp7fSkge1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZnkpLmZvckVhY2goIHA9PiB0aGlzLmRhdGEuZmluZChyID0+IHJba2V5TmFtZV0gPT0ga2V5KVtwXSA9IG1vZGlmeVtwXSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGluc2VydERhdGEoa2V5TmFtZTpzdHJpbmcsIG1vZGlmeTp7fSkge1xuICAgICAgICBjb25zb2xlLmxvZyhtb2RpZnkpO1xuICAgICAgICBtb2RpZnlba2V5TmFtZV0gPSB0aGlzLmRhdGEubGVuZ3RoICsgMTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2gobW9kaWZ5KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZGVsZXRlRGF0YShrZXlOYW1lOnN0cmluZywga2V5czphbnlbXSwgY2FsbGJhY2spIHtcbiAgICAgICAga2V5cy5mb3JFYWNoKGsgPT4gdGhpcy5kYXRhLmZpbmQociA9PiB0aGlzLmRhdGEuc3BsaWNlKHRoaXMuZGF0YS5pbmRleE9mKHRoaXMuZGF0YS5maW5kKHIgPT4gcltrZXlOYW1lXSA9PSBrKSksMSkpKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9IFxuXG59IiwiaW1wb3J0IHsgSURhdGFQcm92aWRlciB9IGZyb20gXCIuL2RhdGEtcHJvdmlkZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3REYXRhKHVybCA9ICcnLCBkYXRhID0ge30pIHtcbiAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAvLyAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICAgIC8vICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgICAgLy8gICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgIC8vICAgcmVkaXJlY3Q6ICdmb2xsb3cnLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXG4gICAgICAgIC8vICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBwYXJzZXMgSlNPTiByZXNwb25zZSBpbnRvIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdHNcbn1cblxuZXhwb3J0IGNsYXNzIFJlbW90ZURhdGFQcm92aWRlciBpbXBsZW1lbnRzIElEYXRhUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB1cmw6IHN0cmluZykge1xuXG4gICAgfVxuXG4gICAgZ2V0RGF0YShsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgb3JkZXI6IGFueVtdLCBmaWx0ZXJzOiBhbnlbXSwga2V5OiBhbnksIGJhY2s6IGJvb2xlYW4sIGNhbGxiYWNrOiAoZGF0YTogYW55LCBzdGFydDogbnVtYmVyLCBjb3VtdDogbnVtYmVyLCBiYWNrOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gICAgICAgIHBvc3REYXRhKHRoaXMudXJsICsgXCJnZXREYXRhXCIsIHsgbmFtZTogdGhpcy5uYW1lLCBsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0LCBvcmRlcjogb3JkZXIsIGZpbHRlcnM6IGZpbHRlcnMsIGtleToga2V5LCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhLmRhdGEsIG9mZnNldCArIGxpbWl0LCBkYXRhLmNvdW50LCBiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFN1bW1hcnkoZnVuYzogc3RyaW5nLCBmaWVsZDogc3RyaW5nLCBmaWx0ZXJzOiBhbnlbXSwgY2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHBvc3REYXRhKHRoaXMudXJsICsgXCJnZXRTdW1tYXJ5XCIsIHsgbmFtZTogdGhpcy5uYW1lLCBmdW5jOiBmdW5jLCBmaWVsZDogZmllbGQsIGZpbHRlcnM6IGZpbHRlcnMgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENvbHVtbkRhdGEoY29sdW1uTmFtZTogc3RyaW5nLCBmaWx0ZXI6IGFueSwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNhbGxiYWNrOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBwb3N0RGF0YSh0aGlzLnVybCArIFwiZ2V0Q29sdW1uRGF0YVwiLCB7IG5hbWU6IHRoaXMubmFtZSwgY29sdW1uTmFtZTogY29sdW1uTmFtZSwgZmlsdGVyOiBmaWx0ZXIsIGxpbWl0OiBsaW1pdCwgb2Zmc2V0OiBvZmZzZXQgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZURhdGEoa2V5TmFtZTpzdHJpbmcsIGtleTphbnksIG1vZGlmeTp7fSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXlOYW1lfSAtICR7a2V5fSA9PiAke21vZGlmeX1gKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaW5zZXJ0RGF0YShrZXlOYW1lOnN0cmluZywgbW9kaWZ5Ont9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleU5hbWV9ID0+ICR7bW9kaWZ5fWApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBkZWxldGVEYXRhKGtleU5hbWU6c3RyaW5nLCBrZXlzOmFueVtdLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXlOYW1lfSAtICR7a2V5c31gKTtcbiAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqOiB7fSkge1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWwob2JqMTogYW55LCBvYmoyOiBhbnkpIHtcbiAgICBpZihBcnJheS5pc0FycmF5KG9iajEpICYmIEFycmF5LmlzQXJyYXkob2JqMikpIHtcbiAgICAgICAgaWYob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb2JqMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKG9iajFbaV0gIT09IG9iajJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajEgPT09IG9iajI7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NvdXJjZXMva25vY2tvdXQvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=