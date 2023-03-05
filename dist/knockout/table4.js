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

/***/ "./sources/table/cell-types/indicator.scss":
/*!*************************************************!*\
  !*** ./sources/table/cell-types/indicator.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/cell-types/progress.scss":
/*!************************************************!*\
  !*** ./sources/table/cell-types/progress.scss ***!
  \************************************************/
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

/***/ "./sources/widgets/editor.scss":
/*!*************************************!*\
  !*** ./sources/widgets/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/widgets/form.scss":
/*!***********************************!*\
  !*** ./sources/widgets/form.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/widgets/property.scss":
/*!***************************************!*\
  !*** ./sources/widgets/property.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/knockout/core/action.html":
/*!*******************************************!*\
  !*** ./sources/knockout/core/action.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button data-bind=\"click: $data.formId !== undefined ? undefined : action, \n                visible: !$data.visible || ko.unwrap(visible),\n                enable: !$data.enabled || ko.unwrap(enabled),\n                attr: {\n                        class: 'table4js-button--transparent action-button table4js-action-button ' + ko.unwrap($data.cssClasses) + (ko.unwrap($data.active) === true ? ' table4js-action--active' : ''),\n                        title: $data.title || $data.name, form: $data.formId,\n                        type: $data.formId !== undefined ? 'submit' : 'button'\n                    }\">\n    <!-- ko if: $data.icon -->\n    <!-- <span data-bind=\"css: ('fa icon ' + (typeof icon == 'function' ? icon() : icon))\"></span> -->\n    <!-- /ko -->\n    <!-- ko if: $data.svg -->\n    <div class=\"table4js-action-button__icon table4js-button__svg-icon\" data-bind=\"html: svg\"></div>\n    <!-- /ko -->\n    <!-- ko ifnot: $parents[1].short -->\n    <span class=\"table4js-action-button__label\" data-bind=\"text: $data.title, css: ko.unwrap($data.cssLabel), style: {'display' : $data.title ? 'block' : 'none'}\" ></span>\n    <!-- /ko -->\n</button>");

/***/ }),

/***/ "./sources/knockout/core/actions.html":
/*!********************************************!*\
  !*** ./sources/knockout/core/actions.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko foreach: actions -->\n<!-- ko ifnot: ko.unwrap($data.actions) -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<!-- ko component: { name: 'table4js-action-item', params: $data } -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- ko if: ko.unwrap($data.actions) && ko.unwrap($data.actions).length > 0 -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<div class=\"table4js-nested-actions table4js-action-context-button\">\n    <span class=\"table4js-button__label\" data-bind=\"text: title\"></span>\n    <div class=\"table4js-nested-actions__dropdown\">\n        <!-- ko foreach: actions -->\n        <!-- ko component: { name: 'table4js-action-item', params: $data } -->\n        <!-- /ko -->\n        <!-- /ko -->\n    </div>\n</div>\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/core/dropdown-actions.html":
/*!*****************************************************!*\
  !*** ./sources/knockout/core/dropdown-actions.html ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button class=\"table4js-action-button table4js-button--transparent table4js-button-toggle\" type=\"button\"\n    data-bind=\"click: toggle, attr: { title: title }\">\n    <div data-bind=\"html: $root.icons.more_sq\"></div>\n    <span class=\"table4js-action-button__label\" data-bind=\"text: moreText\"></span>\n</button>\n<!-- ko if: isOpen -->\n<ul class=\"table4js-button-toggle__dropdown-menu\">\n    <table4js-actions class=\"table4js-context-actions\" params=\"model: data, options: { action: actions }\">\n    </table4js-actions>\n</ul>\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/core/icon.html":
/*!*****************************************!*\
  !*** ./sources/knockout/core/icon.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <svg class=\"table4js-button__svg-icon\"><use data-bind=\"attr:{'xlink:href':'spritemap.svg#sprite-icon_'+ko.unwrap(id)}\"  xlink:href=''></use></svg> -->\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-cell__container\" data-bind=\"css: containerCss, style: { top: isMergedCell() ? table.tableHeadHeight - 2 + 'px' : undefined }\">\n  <!-- ko component: { name: component, params: { model: editor, className: contentCss, inputType: inputType } } -->\n  <!-- /ko -->\n</div>\n");

/***/ }),

/***/ "./sources/knockout/table/cell-types/default.html":
/*!********************************************************!*\
  !*** ./sources/knockout/table/cell-types/default.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span data-bind=\"html: cell.text, css: className\"></span>");

/***/ }),

/***/ "./sources/knockout/table/cell-types/indicator.html":
/*!**********************************************************!*\
  !*** ./sources/knockout/table/cell-types/indicator.html ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"table4js__indicator-cell\" data-bind=\"css: className\">\n    <span class=\"table4js__indicator-cell-circle\" data-bind=\"style: style\"></span>\n</span>");

/***/ }),

/***/ "./sources/knockout/table/cell-types/progress.html":
/*!*********************************************************!*\
  !*** ./sources/knockout/table/cell-types/progress.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js__progress-cell\" data-bind=\"css: className\">\n    <div class=\"table4js__progress-cell-value\" data-bind=\"style: { width: value }, text: value\"></div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-cell__container\" data-bind=\"css: containerCss, style: { top: isMergedCell() ? table.tableHeadHeight - 2 + 'px' : undefined }\">\n  <!-- ko component: { name: cell.component, params: { cell: cell, className: contentCss } } -->\n  <!-- /ko -->\n</div>\n\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko if: filterItems.length > 0 -->\n<div class=\"table4js-filter-item\">\n  <div class=\"table4js-filter__title table4js-filter-text\" data-bind=\"text: column.title + ':'\"></div>\n  <!-- ko foreach: filterItems -->\n  <div class=\"table4js-filter__content\">\n    <!-- ko if: $index() > 0 -->\n    <div class=\"table4js-filter__operator table4js-filter-text\" data-bind=\"text: '&'\"></div>\n    <!-- /ko -->\n    <!-- ko component: { name: 'table4js-column-filter-item', params: { filterItem: $data } } -->\n    <!-- /ko -->\n    <div class=\"table4js-filter__remove\"\n      data-bind=\"click: $parent.removeItem, clickBubble: false\">\n      <div class=\"table4js-filter__remove-icon table4js-svg-icon\" data-bind=\"html: $root.icons.cross\"></div>\n    </div>\n  </div>\n  <!-- /ko -->\n</div>\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-resizable-container\">\n  <div class=\"table4js-scroll-container\">\n    <table class=\"table4js\">\n      <thead class=\"table4js__header table4js-sticky-component\">\n        <tr class=\"table4js-header-tools\">\n          <th class=\"table4js-header-tools__cell\" colspan=\"100%\">\n            <div class=\"table4js-header-tools__container table4js-group-header-technical-cell\">\n              <div class=\"table4js-preheader\">\n                <div class=\"table4js-search-group\">\n                  <!-- ko if: showSearch -->\n                  <table4js-search params=\"model: searchModel, icon: icons.search\"></table4js-search>\n                  <!-- /ko -->\n                  <table4js-actions class=\"table4js-actions\" params=\"model: $data, options: { action: 'topActions' }\">\n                  </table4js-actions>\n                  <!-- ko if: $data.getActions('dropdownActions').length > 0 -->\n                  <table4js-dropdown-actions class=\"table4js-dropdown table4js-actions-menu\"\n                    params=\"data: $data, actions: 'dropdownActions'\">\n                  </table4js-dropdown-actions>\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- ko if: viewFilterTable -->\n              <div class=\"table4js-filter\">\n                <div class=\"table4js-filter__container\">\n                  <!-- ko foreach: columns -->\n                  <!-- ko component: { name: 'table4js-column-filter', params: { context: filterContext } } -->\n                  <!-- /ko -->\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </th>\n        </tr>\n        <tr class=\"table4js-header-title\">\n          <th class=\"table4js-header-title__cell table4js-switch\">\n            <div class=\"table4js-switch__text\"\n              data-bind=\"css: {'switch__text--selected': isNumber}, click: () => $data.isNumber = !$data.isNumber\">#\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"table4js-header-title__cell\"\n            data-bind=\"event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}\">\n            <div class=\"table4js-title\">\n              <span class=\"table4js-title__text\" data-bind=\"html: title, click: $parent.clickColumn\"></span>\n              <div class=\"table4js-title__tools\">\n                <div class=\"table4js-svg-icon table4js-title__sorter\" data-bind=\"visible: order === false, html: $parent.icons.sortup\"></div>\n                <div class=\"table4js-svg-icon table4js-title__sorter\" data-bind=\"visible: order === true, html: $parent.icons.sortdown\"></div>\n                <div class=\"table4js-svg-icon table4js-title__filter\" data-bind=\"click: filterContext.clickFilter, html: $parent.icons.filter\"></div>\n              </div>\n            </div>\n            <div class=\"table4js-title_resize\"\n              data-bind=\"event: {mouseover: $parent.logMouseOver, mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp, mousedown: $parent.logMouseDown}\">\n            </div>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"table4js-header-title__cell\"></th>\n        </tr>\n      </thead>\n      <tbody class=\"table4js__body\">\n        <!-- ko if: rows.length == 0 && loadingMutex == false  -->\n        <tr class=\"table4js__row\">\n          <th class=\"table4js-cell\" colspan=\"100%\" data-bind=\"text: noDataText\"></th>\n        </tr>\n        <!-- /ko -->\n        <!-- ko if: loadingMutex -->\n        <!-- ko foreach: columns -->\n        <tr class=\"table4js__row\">\n          <td class=\"table4js-cell table4js-technical-cell\" >\n            <div class=\"table4js-technical-cell__container\">\n              <div class=\"table4js__check\">\n                <div class=\"table4js-svg-icon table4js__icon-check\"></div>\n              </div>\n            </div>\n          </td>\n        <!-- ko foreach: $parent.columns -->\n        <!-- ko if: visible -->\n          <td class=\"table4js-cell table4js-technical-cell\">\n            <div class=\"table4js-cell__container table4js-cell__container--loading\">\n            </div>\n          </td>\n        <!-- /ko -->\n        <!-- /ko -->\n          <td class=\"table4js-cell table4js-technical-cell\">\n            <div class=\"table4js-technical-cell__container\">\n              <div class=\"table4js-svg-icon table4js-icon-row-tools table4js__more\" data-bind=\"html: $parent.icons.more\"></div>\n            </div>\n          </td>\n        </tr>\n        <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko foreach: rows -->\n        <!-- ko component: { name: getRowComponent(), params: getRowComponentParams({ table: $parent, row: $data }) } -->\n        <!-- /ko -->\n        <!-- /ko -->\n      </tbody>\n      <tfoot class=\"table4js__footer table4js-sticky-component\">\n        <tr class=\"table4js-footer-summary\" data-bind=\"visible: showTableSummary\">\n          <th class=\"table4js-cell table4js-technical-cell table4js-footer__cell\">\n            <div class=\"table4js-technical-cell__container\">\n              <div class=\"table4js-svg-icon table4js-icon-equal\" data-bind=\"html: icons.equal\"></div>\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"table4js-cell table4js-footer__cell\">\n            <table4js-summary params='column: $data'></table4js-summary>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"table4js-cell table4js-technical-cell table4js-footer__cell\"></th>\n        </tr>\n        <tr class=\"table4js-footer-tools\">\n          <th class=\"table4js-footer-tools__cell\" colspan=\"100%\">\n            <div class=\"table4js-footer-tools__container table4js-group-header-technical-cell\">\n              <div class=\"table4js-row-management\">\n                <table4js-actions class=\"table4js-actions\" params=\"model: $data, options: { action: 'bottomActions' }\">\n                </table4js-actions>\n              </div>\n              <div class=\"table4js-info\">\n                <span class=\"table4js-info__total table4js-info__text\"\n                  data-bind=\"text: 'Total: ' + totalCount\"></span>\n                <div class=\"table4js-info__go-to\">\n                  <span class=\"table4js-go-to__text table4js-info__text\">Go to: </span>\n                  <input class=\"table4js-go-to__value\" data-bind=\"value: startRow\"/>\n                  <button class=\"table4js-btn-transparent\">\n                    <div class=\"table4js-svg-icon table4js-go-to__icon\" data-bind=\"html: icons.arrowright\"></div>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>");

/***/ }),

/***/ "./sources/knockout/table/row-editor.html":
/*!************************************************!*\
  !*** ./sources/knockout/table/row-editor.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko component: { name: \"table4js-row\", params: { table: table, row: row } } -->\n<!-- /ko -->\n<!-- ko if: isEditMode -->\n<tr class=\"table4js__row\">\n  <td class=\"table4js-cell\" colspan=\"100%\">\n    <table4js-form params=\"form: form\"></table4js-form>\n  </td>\n</tr>\n<!-- /ko -->\n");

/***/ }),

/***/ "./sources/knockout/table/row.html":
/*!*****************************************!*\
  !*** ./sources/knockout/table/row.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<tr class=\"table4js__row\" data-bind=\"css: $data.row.css, style: { 'background-color': 'none' }\">\n  <td class=\"table4js-cell table4js-technical-cell\" data-bind=\"click: function() { $data.row.select($data.row); }\">\n    <div class=\"table4js-technical-cell__container\">\n      <!-- ko if: table.isNumber -->\n      <div class=\"table4js__number\" data-bind=\"text: row.number\"></div>\n      <!-- /ko -->\n      <!-- ko if: !table.isNumber -->\n      <div class=\"table4js__check\">\n        <div class=\"table4js-svg-icon table4js__icon-check\" data-bind=\"visible: row.selected, html: table.icons.check\"></div>\n      </div>\n      <!-- /ko -->\n    </div>\n  </td>\n  <!-- ko foreach: row.cells -->\n  <td class=\"table4js-cell\" data-bind=\"attr: { rowspan: $parent.table.isMergedCells ? $data.count : 1 },\n    css: ($data.count > 1) && $parent.table.isMergedCells ? 'table4js-cell--merged ' : '',\n    visible: ($data.count > 0) || !$parent.table.isMergedCells, style: { 'background-color': $data.color } \">\n    <!-- ko component: { name: $parent.row.getCellComponent($data), params: $parent.row.getCellComponentParams({ cell: $data, table: $parent.table }) } -->\n    <!-- /ko -->\n  </td>\n  <!-- /ko -->\n  <td class=\"table4js-cell table4js-technical-cell\">\n    <div class=\"table4js-technical-cell__container\">\n      <div class=\"table4js-svg-icon table4js-icon-row-tools table4js__more\" data-bind=\"html: table.icons.more\"></div>\n      <!-- ko foreach: table.rowActions -->\n      <div class=\"table4js-svg-icon table4js-icon-row-tools\" data-bind=\"html: $data.svg, css: $data.cssClasses, click: function() { $data.action($parent.row); }, attr: { title: $data.title }\"></div>\n      <!-- /ko -->\n    </div>\n    <div class=\"table4js__row--select\" data-bind=\"visible: table.allowRowSelection\"></div>\n    <div class=\"table4js__row--colored\" data-bind=\"style: { 'background': row.color ? row.color : 'rgba(248,249,253)' }\"></div>\n  </td>\n</tr>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-search\">\n  <input class=\"table4js-search__value\" data-bind=\"value: value, attr: { placeholder: 'Search...' }\" />\n  <div class=\"table4js-search__button\" data-bind=\"click: refresh, attr: { title: 'Search' }\">\n    <div class=\"table4js-svg-icon table4js-search__icon\" data-bind=\"html: icon\"></div>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko if: $data -->\n<span class=\"table4js-summary__value\" data-bind=\"text: $data.value\"></span>\n<select class=\"table4js-summary__select\"  data-bind=\"value: func\">\n  <!-- ko foreach: summaryItems -->\n    <option data-bind=\"text: title, value: value, attr: { title: title }\"></option>\n  <!-- /ko -->  \n</select>\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/widgets/checkbox.html":
/*!************************************************!*\
  !*** ./sources/knockout/widgets/checkbox.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js__checkbox-editor\">\n  <input type=\"checkbox\" data-bind=\"checked: value\" />\n</div>");

/***/ }),

/***/ "./sources/knockout/widgets/default.html":
/*!***********************************************!*\
  !*** ./sources/knockout/widgets/default.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js__editor\" data-bind=\"css: $data.className\">\n  <input data-bind=\"css: model.css, value: model.value, valueUpdate: 'input', attr: { type: inputType }\" />\n</div>");

/***/ }),

/***/ "./sources/knockout/widgets/form.html":
/*!********************************************!*\
  !*** ./sources/knockout/widgets/form.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-form\">\n  <!-- ko foreach: properties -->\n    <!-- ko component: { name: \"table4js-property-editor\", params: { property: $data } } -->\n    <!-- /ko -->\n  <!-- /ko -->\n</div>\n");

/***/ }),

/***/ "./sources/knockout/widgets/property.html":
/*!************************************************!*\
  !*** ./sources/knockout/widgets/property.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-form__property\" data-bind=\"css: { 'table4js-form__property--with-value': property.hasValue }\">\n  <!-- ko component: { name: component, params: { model: property.editor, className: property.css, inputType: property.inputType } } -->\n  <!-- /ko -->\n  <label class=\"table4js-form__property-title\" data-bind=\"text: property.title\"></label>\n</div>\n");

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
    HashTableStorage.prototype.peekValue = function (name, defaultValue) {
        return this.getValue(name, defaultValue);
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
        var oldValue = this.storage.peekValue(propertyName, defaultValue);
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

/***/ "./sources/core/domain.ts":
/*!********************************!*\
  !*** ./sources/core/domain.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


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

/***/ "./sources/core/field-types/bool.ts":
/*!******************************************!*\
  !*** ./sources/core/field-types/bool.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoolField = void 0;
var localization_1 = __webpack_require__(/*! ../../localization */ "./sources/localization.ts");
var BoolField = (function () {
    function BoolField() {
        this.name = "bool";
        this.css = "table4js-cell--center";
        this.getText = function (val) {
            if (val === true || val === "t" || val === "true") {
                return localization_1.Localization.getString("true");
            }
            return localization_1.Localization.getString("false");
        };
    }
    return BoolField;
}());
exports.BoolField = BoolField;


/***/ }),

/***/ "./sources/core/field-types/currency.ts":
/*!**********************************************!*\
  !*** ./sources/core/field-types/currency.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrencyField = void 0;
var CurrencyField = (function () {
    function CurrencyField() {
        this.name = "currency";
        this.css = "table4js-cell--right";
        this.getText = function (val) {
            if (!val || Number.isNaN(val)) {
                val = 0;
            }
            var result = !!CurrencyField.prefix ? (CurrencyField.prefix + " ") : "";
            result += parseFloat(val).toFixed(CurrencyField.precision).toString();
            if (!!CurrencyField.suffix) {
                result += " " + CurrencyField.suffix;
            }
            return result;
        };
    }
    CurrencyField.prefix = "$";
    CurrencyField.suffix = "";
    CurrencyField.precision = 2;
    return CurrencyField;
}());
exports.CurrencyField = CurrencyField;


/***/ }),

/***/ "./sources/core/field-types/date.ts":
/*!******************************************!*\
  !*** ./sources/core/field-types/date.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateField = void 0;
var DateField = (function () {
    function DateField() {
        this.name = "date";
        this.getText = function (val) {
            var result = "";
            try {
                var date = new Date((val || "").split("T")[0]);
                result = date.toLocaleDateString();
            }
            catch (_a) {
            }
            return result;
        };
    }
    return DateField;
}());
exports.DateField = DateField;


/***/ }),

/***/ "./sources/core/field-types/datetime.ts":
/*!**********************************************!*\
  !*** ./sources/core/field-types/datetime.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateTimeField = void 0;
var DateTimeField = (function () {
    function DateTimeField() {
        this.name = "datetime";
        this.getText = function (val) {
            var result = "";
            try {
                var date = new Date(val || "");
                result = date.toLocaleString();
            }
            catch (_a) {
            }
            return result;
        };
    }
    return DateTimeField;
}());
exports.DateTimeField = DateTimeField;


/***/ }),

/***/ "./sources/core/field-types/number.ts":
/*!********************************************!*\
  !*** ./sources/core/field-types/number.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberField = void 0;
var NumberField = (function () {
    function NumberField() {
        this.name = "number";
        this.css = "table4js-cell--right";
    }
    return NumberField;
}());
exports.NumberField = NumberField;


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

/***/ "./sources/icons/index.ts":
/*!********************************!*\
  !*** ./sources/icons/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrowdown = exports.cross = exports.search = exports.arrowright = exports.edit = exports.more = exports.filter = exports.sortdown = exports.sortup = exports.check = exports.more_sq = exports.paste = exports.del = exports.save = exports.table = exports.equal = exports.add = void 0;
exports.add = __webpack_require__(/*! ./icon_item-add.svg */ "./sources/icons/icon_item-add.svg");
exports.equal = __webpack_require__(/*! ./icon_equal.svg */ "./sources/icons/icon_equal.svg");
exports.table = __webpack_require__(/*! ./icon_table-merge.svg */ "./sources/icons/icon_table-merge.svg");
exports.save = __webpack_require__(/*! ./icon_item-save.svg */ "./sources/icons/icon_item-save.svg");
exports.del = __webpack_require__(/*! ./icon_item-delete.svg */ "./sources/icons/icon_item-delete.svg");
exports.paste = __webpack_require__(/*! ./icon_paste.svg */ "./sources/icons/icon_paste.svg");
exports.more_sq = __webpack_require__(/*! ./icon_more_sq.svg */ "./sources/icons/icon_more_sq.svg");
exports.check = __webpack_require__(/*! ./icon_check.svg */ "./sources/icons/icon_check.svg");
exports.sortup = __webpack_require__(/*! ./icon_sort-up.svg */ "./sources/icons/icon_sort-up.svg");
exports.sortdown = __webpack_require__(/*! ./icon_sort-down.svg */ "./sources/icons/icon_sort-down.svg");
exports.filter = __webpack_require__(/*! ./icon_filter.svg */ "./sources/icons/icon_filter.svg");
exports.more = __webpack_require__(/*! ./icon_more.svg */ "./sources/icons/icon_more.svg");
exports.edit = __webpack_require__(/*! ./icon_edit.svg */ "./sources/icons/icon_edit.svg");
exports.arrowright = __webpack_require__(/*! ./icon_arrow-right.svg */ "./sources/icons/icon_arrow-right.svg");
exports.search = __webpack_require__(/*! ./icon_search.svg */ "./sources/icons/icon_search.svg");
exports.cross = __webpack_require__(/*! ./icon_cross.svg */ "./sources/icons/icon_cross.svg");
exports.arrowdown = __webpack_require__(/*! ./icon_arrow-down.svg */ "./sources/icons/icon_arrow-down.svg");


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
__exportStar(__webpack_require__(/*! ./core/domain */ "./sources/core/domain.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/field-types/bool */ "./sources/core/field-types/bool.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/field-types/currency */ "./sources/core/field-types/currency.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/field-types/date */ "./sources/core/field-types/date.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/field-types/datetime */ "./sources/core/field-types/datetime.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/field-types/number */ "./sources/core/field-types/number.ts"), exports);
__exportStar(__webpack_require__(/*! ./find */ "./sources/find.ts"), exports);
__exportStar(__webpack_require__(/*! ./table */ "./sources/table/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell */ "./sources/table/cell.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column */ "./sources/table/column.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/summary */ "./sources/table/summary.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter */ "./sources/table/column-filter.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter-item */ "./sources/table/column-filter-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-default */ "./sources/table/filter-default.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-select */ "./sources/table/filter-select.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/bool */ "./sources/table/cell-types/bool.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/currency */ "./sources/table/cell-types/currency.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/date */ "./sources/table/cell-types/date.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/datetime */ "./sources/table/cell-types/datetime.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/indicator */ "./sources/table/cell-types/indicator.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/number */ "./sources/table/cell-types/number.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/progress */ "./sources/table/cell-types/progress.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/editor */ "./sources/widgets/editor.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/editor */ "./sources/table/editor.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/editor-inplace */ "./sources/table/editor-inplace.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/editor-row */ "./sources/table/editor-row.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/array-data-provider */ "./sources/utils/array-data-provider.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/remote-data-provider */ "./sources/utils/remote-data-provider.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/utils */ "./sources/utils/utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./icons */ "./sources/icons/index.ts"), exports);


/***/ }),

/***/ "./sources/knockout/core/action.ts":
/*!*****************************************!*\
  !*** ./sources/knockout/core/action.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionItemWidget = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var actionTemplate = (__webpack_require__(/*! ./action.html */ "./sources/knockout/core/action.html")["default"]);
ko.components.register("table4js-action-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: actionTemplate
});


/***/ }),

/***/ "./sources/knockout/core/actions.ts":
/*!******************************************!*\
  !*** ./sources/knockout/core/actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisActionsWidget = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var actionsTemplate = (__webpack_require__(/*! ./actions.html */ "./sources/knockout/core/actions.html")["default"]);
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

/***/ "./sources/knockout/core/dropdown-actions.ts":
/*!***************************************************!*\
  !*** ./sources/knockout/core/dropdown-actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisDropdownActions = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var dropdownTemplate = (__webpack_require__(/*! ./dropdown-actions.html */ "./sources/knockout/core/dropdown-actions.html")["default"]);
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

/***/ "./sources/knockout/core/icon.ts":
/*!***************************************!*\
  !*** ./sources/knockout/core/icon.ts ***!
  \***************************************/
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
    template: (__webpack_require__(/*! ./icon.html */ "./sources/knockout/core/icon.html")["default"])
});


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
__exportStar(__webpack_require__(/*! ./table/row */ "./sources/knockout/table/row.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell */ "./sources/knockout/table/cell.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/default */ "./sources/knockout/table/cell-types/default.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/indicator */ "./sources/knockout/table/cell-types/indicator.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-types/progress */ "./sources/knockout/table/cell-types/progress.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/summary */ "./sources/knockout/table/summary.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/search */ "./sources/knockout/table/search.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-default */ "./sources/knockout/table/filter-default.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter */ "./sources/knockout/table/column-filter.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter-item */ "./sources/knockout/table/column-filter-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-select */ "./sources/knockout/table/filter-select.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/action */ "./sources/knockout/core/action.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/actions */ "./sources/knockout/core/actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/dropdown-actions */ "./sources/knockout/core/dropdown-actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/icon */ "./sources/knockout/core/icon.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-editor */ "./sources/knockout/table/cell-editor.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/row-editor */ "./sources/knockout/table/row-editor.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/default */ "./sources/knockout/widgets/default.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/checkbox */ "./sources/knockout/widgets/checkbox.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/property */ "./sources/knockout/widgets/property.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/form */ "./sources/knockout/widgets/form.ts"), exports);
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
    KnockoutHashTableStorage.prototype.peekValue = function (name, defaultValue) {
        var value = _super.prototype.getValue.call(this, name, defaultValue);
        if (!ko.isObservable(value)) {
            this.hash[name] = this.createObservable(value);
        }
        var observable = this.hash[name];
        return observable.peek();
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
            componentInfo.element.className += " table4js-root--fit-width";
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

/***/ "./sources/knockout/table/cell-editor.ts":
/*!***********************************************!*\
  !*** ./sources/knockout/table/cell-editor.ts ***!
  \***********************************************/
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
exports.cellEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var cell_1 = __webpack_require__(/*! ../../table/cell */ "./sources/table/cell.ts");
var editor_1 = __webpack_require__(/*! ../../widgets/editor */ "./sources/widgets/editor.ts");
exports.cellEditorTemplate = __webpack_require__(/*! ./cell-editor.html */ "./sources/knockout/table/cell-editor.html")["default"];
ko.components.register("table4js-cell-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var isMergedCell = ko.computed(function () { return params.cell.count > 1 && params.table.isMergedСells; });
            var editor = params.editor;
            return __assign(__assign({}, params), { editor: editor, inputType: editor_1.Editor.getInputType(params.cell.type), component: editor_1.Editor.editors[params.cell.type] || editor_1.Editor.editors.default, containerCss: ko.computed(function () { return cell_1.TableCell.getContainerCss(params.cell, isMergedCell()); }), contentCss: ko.computed(function () { return cell_1.TableCell.getContentCss(params.cell, isMergedCell()); }), isMergedCell: isMergedCell });
        }
    },
    template: exports.cellEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell-types/default.ts":
/*!******************************************************!*\
  !*** ./sources/knockout/table/cell-types/default.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cellDefaultTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.cellDefaultTemplate = __webpack_require__(/*! ./default.html */ "./sources/knockout/table/cell-types/default.html")["default"];
ko.components.register("table4js-cell-default", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: exports.cellDefaultTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell-types/indicator.ts":
/*!********************************************************!*\
  !*** ./sources/knockout/table/cell-types/indicator.ts ***!
  \********************************************************/
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
exports.cellIndicatorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var indicator_1 = __webpack_require__(/*! ../../../table/cell-types/indicator */ "./sources/table/cell-types/indicator.ts");
exports.cellIndicatorTemplate = __webpack_require__(/*! ./indicator.html */ "./sources/knockout/table/cell-types/indicator.html")["default"];
ko.components.register("table4js-cell-indicator", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var value = parseFloat(params.cell.data);
            return __assign(__assign({}, params), { style: { backgroundColor: value > indicator_1.IndicatorCell.threshold ? indicator_1.IndicatorCell.greaterColor : indicator_1.IndicatorCell.lessColor } });
        }
    },
    template: exports.cellIndicatorTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell-types/progress.ts":
/*!*******************************************************!*\
  !*** ./sources/knockout/table/cell-types/progress.ts ***!
  \*******************************************************/
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
exports.cellProgressTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.cellProgressTemplate = __webpack_require__(/*! ./progress.html */ "./sources/knockout/table/cell-types/progress.html")["default"];
ko.components.register("table4js-cell-progress", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var value = parseFloat(params.cell.data);
            return __assign(__assign({}, params), { value: (Number.isNaN(value) ? 0 : (value * 100).toFixed(2)) + "%" });
        }
    },
    template: exports.cellProgressTemplate
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
ko.components.register("table4js-cell", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var isMergedCell = ko.computed(function () { return params.cell.count > 1 && params.table.isMergedСells; });
            return __assign(__assign({}, params), { containerCss: ko.computed(function () { return cell_1.TableCell.getContainerCss(params.cell, isMergedCell()); }), contentCss: ko.computed(function () { return cell_1.TableCell.getContentCss(params.cell, isMergedCell()); }), isMergedCell: isMergedCell });
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
ko.components.register("table4js-filter-default", {
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

/***/ "./sources/knockout/table/row-editor.ts":
/*!**********************************************!*\
  !*** ./sources/knockout/table/row-editor.ts ***!
  \**********************************************/
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
exports.rowEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.rowEditorTemplate = __webpack_require__(/*! ./row-editor.html */ "./sources/knockout/table/row-editor.html")["default"];
ko.components.register("table4js-row-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return __assign(__assign({}, params), { isEditMode: ko.computed(function () { return params.row.mode === "edit-row"; }) });
        }
    },
    template: exports.rowEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/table/row.ts":
/*!***************************************!*\
  !*** ./sources/knockout/table/row.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rowTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.rowTemplate = __webpack_require__(/*! ./row.html */ "./sources/knockout/table/row.html")["default"];
ko.components.register("table4js-row", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: exports.rowTemplate
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
                icon: params.icon,
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
exports.summaryTemplate = __webpack_require__(/*! ./summary.html */ "./sources/knockout/table/summary.html")["default"];
ko.components.register("table4js-summary", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.column.summary;
        }
    },
    template: exports.summaryTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/checkbox.ts":
/*!**********************************************!*\
  !*** ./sources/knockout/widgets/checkbox.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boolEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.boolEditorTemplate = __webpack_require__(/*! ./checkbox.html */ "./sources/knockout/widgets/checkbox.html")["default"];
ko.components.register("table4js-checkbox-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = ko.unwrap(params.model);
            return model;
        }
    },
    template: exports.boolEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/default.ts":
/*!*********************************************!*\
  !*** ./sources/knockout/widgets/default.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.defaultEditorTemplate = __webpack_require__(/*! ./default.html */ "./sources/knockout/widgets/default.html")["default"];
ko.components.register("table4js-default-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: exports.defaultEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/form.ts":
/*!******************************************!*\
  !*** ./sources/knockout/widgets/form.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
exports.formEditorTemplate = __webpack_require__(/*! ./form.html */ "./sources/knockout/widgets/form.html")["default"];
ko.components.register("table4js-form", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.form;
        }
    },
    template: exports.formEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/property.ts":
/*!**********************************************!*\
  !*** ./sources/knockout/widgets/property.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.propertyEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var editor_1 = __webpack_require__(/*! ../../widgets/editor */ "./sources/widgets/editor.ts");
exports.propertyEditorTemplate = __webpack_require__(/*! ./property.html */ "./sources/knockout/widgets/property.html")["default"];
ko.components.register("table4js-property-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return {
                property: params.property,
                component: editor_1.Editor.editors[params.property.type] || editor_1.Editor.editors.default
            };
        }
    },
    template: exports.propertyEditorTemplate
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
        noData: "No Data",
        true: "True",
        false: "False"
    };
    Localization.getString = function (stringId) {
        return _a.englishStrings[stringId];
    };
    return Localization;
}());
exports.Localization = Localization;


/***/ }),

/***/ "./sources/table/cell-types/bool.ts":
/*!******************************************!*\
  !*** ./sources/table/cell-types/bool.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var bool_1 = __webpack_require__(/*! ../../core/field-types/bool */ "./sources/core/field-types/bool.ts");
var cell_1 = __webpack_require__(/*! ../cell */ "./sources/table/cell.ts");
cell_1.TableCell.registerCellType(new bool_1.BoolField());


/***/ }),

/***/ "./sources/table/cell-types/currency.ts":
/*!**********************************************!*\
  !*** ./sources/table/cell-types/currency.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var currency_1 = __webpack_require__(/*! ../../core/field-types/currency */ "./sources/core/field-types/currency.ts");
var cell_1 = __webpack_require__(/*! ../cell */ "./sources/table/cell.ts");
cell_1.TableCell.registerCellType(new currency_1.CurrencyField());


/***/ }),

/***/ "./sources/table/cell-types/date.ts":
/*!******************************************!*\
  !*** ./sources/table/cell-types/date.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var date_1 = __webpack_require__(/*! ../../core/field-types/date */ "./sources/core/field-types/date.ts");
var cell_1 = __webpack_require__(/*! ../cell */ "./sources/table/cell.ts");
cell_1.TableCell.registerCellType(new date_1.DateField());


/***/ }),

/***/ "./sources/table/cell-types/datetime.ts":
/*!**********************************************!*\
  !*** ./sources/table/cell-types/datetime.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var datetime_1 = __webpack_require__(/*! ../../core/field-types/datetime */ "./sources/core/field-types/datetime.ts");
var cell_1 = __webpack_require__(/*! ../cell */ "./sources/table/cell.ts");
cell_1.TableCell.registerCellType(new datetime_1.DateTimeField());


/***/ }),

/***/ "./sources/table/cell-types/indicator.ts":
/*!***********************************************!*\
  !*** ./sources/table/cell-types/indicator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IndicatorCell = void 0;
var cell_1 = __webpack_require__(/*! ../cell */ "./sources/table/cell.ts");
__webpack_require__(/*! ./indicator.scss */ "./sources/table/cell-types/indicator.scss");
var IndicatorCell = (function () {
    function IndicatorCell() {
        this.name = "indicator";
        this.css = "table4js-cell--center";
        this.component = "table4js-cell-indicator";
    }
    IndicatorCell.threshold = 0.5;
    IndicatorCell.greaterColor = "lightgreen";
    IndicatorCell.lessColor = "pink";
    return IndicatorCell;
}());
exports.IndicatorCell = IndicatorCell;
cell_1.TableCell.registerCellType(new IndicatorCell());


/***/ }),

/***/ "./sources/table/cell-types/number.ts":
/*!********************************************!*\
  !*** ./sources/table/cell-types/number.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var number_1 = __webpack_require__(/*! ../../core/field-types/number */ "./sources/core/field-types/number.ts");
var cell_1 = __webpack_require__(/*! ../cell */ "./sources/table/cell.ts");
cell_1.TableCell.registerCellType(new number_1.NumberField());


/***/ }),

/***/ "./sources/table/cell-types/progress.ts":
/*!**********************************************!*\
  !*** ./sources/table/cell-types/progress.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgressCell = void 0;
var cell_1 = __webpack_require__(/*! ../cell */ "./sources/table/cell.ts");
__webpack_require__(/*! ./progress.scss */ "./sources/table/cell-types/progress.scss");
var ProgressCell = (function () {
    function ProgressCell() {
        this.name = "progress";
        this.css = "table4js-cell--right";
        this.component = "table4js-cell-progress";
    }
    return ProgressCell;
}());
exports.ProgressCell = ProgressCell;
cell_1.TableCell.registerCellType(new ProgressCell());


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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isUpdating = false;
        _this.type = "default";
        _this.rowData = {};
        return _this;
    }
    TableCell.registerCellType = function (cellType) {
        TableCell.cellTypes[cellType.name] = cellType;
    };
    TableCell.getContainerCss = function (cell, isMergedCell) {
        var containerCss = "table4js-cell__container " + cell.css;
        if (isMergedCell) {
            containerCss += " cell__sticky-text";
        }
        return containerCss;
    };
    TableCell.getContentCss = function (cell, isMergedCell) {
        var contentCss = isMergedCell ? "table4js-cell__text--merged" : "table4js-cell__text";
        if (cell instanceof TableCell && cell.isModified) {
            contentCss += " table4js-cell__text--modified";
        }
        return contentCss;
    };
    TableCell.prototype.getCellTypeDescription = function (type) {
        return TableCell.cellTypes[type] || TableCell.cellTypes["default"];
    };
    TableCell.prototype.getCellCss = function (data, column) {
        return this.getCellTypeDescription(column.type).css;
    };
    TableCell.prototype.getCellText = function (val) {
        var cellTypeDescription = this.getCellTypeDescription(this.type);
        if (!!cellTypeDescription && typeof cellTypeDescription.getText === "function") {
            return cellTypeDescription.getText(val);
        }
        return this.getCellTypeDescription("default").getText(val);
    };
    Object.defineProperty(TableCell.prototype, "component", {
        get: function () {
            var cellTypeDescription = this.getCellTypeDescription(this.type);
            if (!!cellTypeDescription && !!cellTypeDescription.component) {
                return cellTypeDescription.component;
            }
            return this.getCellTypeDescription("default").component;
        },
        enumerable: false,
        configurable: true
    });
    TableCell.prototype.initialize = function (col, back, rowData, color) {
        this.type = col.type;
        this.name = col.name;
        this.rowData = rowData;
        this.data = rowData[col.name];
        this.color = color;
        this.css = this.getCellCss(rowData, col);
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
    TableCell.prototype.update = function () {
        this._isUpdating = true;
        this.data = this.rowData[this.name];
        this._isUpdating = false;
    };
    TableCell.cellTypes = {
        "default": {
            name: "default",
            css: "table4js-cell--left",
            getText: function (val) { return typeof val === "object" ? JSON.stringify(val) : val; },
            component: "table4js-cell-default"
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
                    if (!target._isUpdating) {
                        target.isModified = true;
                    }
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
            return "table4js-filter-default";
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
        _this.clickFilter = function (column, event) {
            column.filterContext.addItem(column);
            event.stopPropagation();
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
    TableColumn.prototype.dispose = function () {
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], TableColumn.prototype, "order", void 0);
    return TableColumn;
}(base_1.Base));
exports.TableColumn = TableColumn;


/***/ }),

/***/ "./sources/table/editor-inplace.ts":
/*!*****************************************!*\
  !*** ./sources/table/editor-inplace.ts ***!
  \*****************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InplaceEditorPlugin = void 0;
var editor_1 = __webpack_require__(/*! ../widgets/editor */ "./sources/widgets/editor.ts");
var editor_2 = __webpack_require__(/*! ./editor */ "./sources/table/editor.ts");
var InplaceEditorPlugin = (function (_super) {
    __extends(InplaceEditorPlugin, _super);
    function InplaceEditorPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._activeEditors = undefined;
        _this.name = "inplace-editor";
        return _this;
    }
    InplaceEditorPlugin.prototype.startEditRow = function (row) {
        var _this = this;
        this._activeEditors = {};
        row.cells.forEach(function (cell) {
            _this._activeEditors[cell.name] = new editor_1.Editor(cell.rowData, cell.name, function (value, commit) {
                if (commit) {
                    cell.data = value;
                }
            });
        });
        this._editedRow = row;
        row.mode = "edit-inplace";
    };
    InplaceEditorPlugin.prototype.endEditRow = function (commit) {
        var _this = this;
        Object.keys(this._activeEditors || {}).forEach(function (name) {
            _this._activeEditors[name].complete(commit);
        });
        if (!!this._editedRow) {
            if (commit) {
                this.saveRow(this._editedRow);
            }
            this._editedRow.mode = "default";
            this._editedRow = undefined;
        }
        this._activeEditors = undefined;
    };
    InplaceEditorPlugin.prototype.onRowCreated = function (row) {
        var _this = this;
        var prev = row.getCellComponent;
        row.getCellComponent = function (cell) {
            if (row.mode === "edit-inplace") {
                return "table4js-cell-editor";
            }
            return prev(cell);
        };
        row.getCellComponentParams = function (params) {
            if (row.mode === "edit-inplace") {
                params.editor = _this._activeEditors[params.cell.name];
            }
            return params;
        };
    };
    return InplaceEditorPlugin;
}(editor_2.EditorPlugin));
exports.InplaceEditorPlugin = InplaceEditorPlugin;


/***/ }),

/***/ "./sources/table/editor-row.ts":
/*!*************************************!*\
  !*** ./sources/table/editor-row.ts ***!
  \*************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RowEditorPlugin = void 0;
var form_1 = __webpack_require__(/*! ../widgets/form */ "./sources/widgets/form.ts");
var editor_1 = __webpack_require__(/*! ./editor */ "./sources/table/editor.ts");
var RowEditorPlugin = (function (_super) {
    __extends(RowEditorPlugin, _super);
    function RowEditorPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._form = undefined;
        _this.name = "row-editor";
        return _this;
    }
    RowEditorPlugin.prototype.startEditRow = function (row) {
        this._form = new form_1.Form(this._table.columns);
        this._form.object = row.rowData;
        this._editedRow = row;
        row.mode = "edit-row";
    };
    RowEditorPlugin.prototype.endEditRow = function (commit) {
        if (!!this._form) {
            this._form.complete(commit);
            this._form = undefined;
        }
        if (!!this._editedRow) {
            if (commit) {
                this.saveRow(this._editedRow);
            }
            this._editedRow.mode = "default";
            this._editedRow.update();
            this._editedRow = undefined;
        }
    };
    RowEditorPlugin.prototype.onRowCreated = function (row) {
        var _this = this;
        row.getRowComponent = function () {
            if (row.mode === "edit-row") {
                return "table4js-row-editor";
            }
            return "table4js-row";
        };
        row.getRowComponentParams = function (params) {
            if (row.mode === "edit-row") {
                params.form = _this._form;
            }
            return params;
        };
    };
    return RowEditorPlugin;
}(editor_1.EditorPlugin));
exports.RowEditorPlugin = RowEditorPlugin;


/***/ }),

/***/ "./sources/table/editor.ts":
/*!*********************************!*\
  !*** ./sources/table/editor.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditorPlugin = void 0;
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./sources/utils/utils.ts");
var action_1 = __webpack_require__(/*! ../core/action */ "./sources/core/action.ts");
var Icons = __webpack_require__(/*! ../icons */ "./sources/icons/index.ts");
var EditorPlugin = (function () {
    function EditorPlugin() {
        this._editedRow = undefined;
        this.name = "editor";
    }
    EditorPlugin.prototype.init = function (table) {
        this._table = table;
    };
    EditorPlugin.prototype.saveRow = function (row) {
        var isInsert = false;
        var modifications = {};
        row.cells.forEach(function (c) { return c.isModified && (modifications[c.name] = c.data); });
        if (!(0, utils_1.isEmpty)(modifications)) {
            if (row.number > 0) {
                if (this._table.dataProvider.saveData(this._table.keyColumn, row.rowData[this._table.keyColumn], modifications)) {
                    row.cells.forEach(function (c) { return c.isModified = false; });
                }
            }
            else {
                if (this._table.dataProvider.insertData(this._table.keyColumn, modifications)) {
                    isInsert = true;
                }
            }
        }
        return isInsert;
    };
    EditorPlugin.prototype.add = function () {
        var newRowData = {};
        this._table.columns.forEach(function (c) { return c.visible && (newRowData[c.name] = ""); });
        var newRow = this._table.createRow(newRowData, -1);
        this._table.rows.unshift(newRow);
        this._table.dataProvider.insertData(this._table.keyColumn, newRowData);
        return newRow;
    };
    EditorPlugin.prototype.save = function () {
        var _this = this;
        var isInsert = false;
        this._table.rows.forEach(function (row) {
            isInsert = _this.saveRow(row);
        });
        if (isInsert) {
            this._table.refresh();
        }
    };
    EditorPlugin.prototype.delete = function () {
        var _this = this;
        this._table.selectedRows.forEach(function (row) {
            if (row.number > 0) {
                _this._table.rows.slice(_this._table.rows.indexOf(row), 1);
            }
        });
        var keys = this._table.selectedRows.map(function (r) { return r.number > 0 && r.rowData[_this._table.keyColumn]; });
        this._table.dataProvider.deleteData(this._table.keyColumn, keys, (function (_) { return _this._table.refresh(); }));
    };
    EditorPlugin.prototype.startEditRow = function (row) {
    };
    EditorPlugin.prototype.endEditRow = function (commit) {
    };
    EditorPlugin.prototype.getActions = function () {
        var _this = this;
        return [
            new action_1.Action({
                name: "save-action",
                action: function () { return _this.save(); },
                svg: Icons.save,
                container: "bottom"
            }),
            new action_1.Action({
                name: "delete-action",
                action: function () { return _this.delete(); },
                svg: Icons.del,
                container: "bottom"
            }),
            new action_1.Action({
                name: "add-action",
                action: function () {
                    var newRow = _this.add();
                    _this.endEditRow(false);
                    _this.startEditRow(newRow);
                },
                svg: Icons.add,
                container: "bottom"
            }),
            new action_1.Action({
                name: "edit-action",
                action: function (row) {
                    if (_this._editedRow !== row) {
                        _this.endEditRow(false);
                        _this.startEditRow(row);
                    }
                    else {
                        _this.endEditRow(true);
                    }
                },
                svg: Icons.edit,
                cssClasses: "table4js__edit",
                container: "row"
            })
        ];
    };
    EditorPlugin.prototype.onColumnCreated = function (column) {
    };
    EditorPlugin.prototype.onRowCreated = function (row) {
    };
    return EditorPlugin;
}());
exports.EditorPlugin = EditorPlugin;


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
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var action_1 = __webpack_require__(/*! ../core/action */ "./sources/core/action.ts");
var dependencies_1 = __webpack_require__(/*! ../core/dependencies */ "./sources/core/dependencies.ts");
var cell_1 = __webpack_require__(/*! ./cell */ "./sources/table/cell.ts");
var column_1 = __webpack_require__(/*! ./column */ "./sources/table/column.ts");
var search_1 = __webpack_require__(/*! ./search */ "./sources/table/search.ts");
var array_data_provider_1 = __webpack_require__(/*! ../utils/array-data-provider */ "./sources/utils/array-data-provider.ts");
var row_1 = __webpack_require__(/*! ./row */ "./sources/table/row.ts");
var localization_1 = __webpack_require__(/*! ../localization */ "./sources/localization.ts");
var summary_1 = __webpack_require__(/*! ./summary */ "./sources/table/summary.ts");
var editor_inplace_1 = __webpack_require__(/*! ./editor-inplace */ "./sources/table/editor-inplace.ts");
var Icons = __webpack_require__(/*! ../icons */ "./sources/icons/index.ts");
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
            var newOrder = undefined;
            if (column.order === undefined) {
                newOrder = false;
            }
            else if (column.order === false) {
                newOrder = true;
            }
            if (!event.shiftKey) {
                _this.columns.map(function (c) { return c.order = undefined; });
            }
            column.order = newOrder;
            _this.refresh();
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
        _this.plugins = [];
        _this.plugins = config.plugins || [];
        if (_this.plugins.length === 0) {
            if (config.enableSummary === true) {
                _this.plugins.push(new summary_1.SummaryPlugin());
            }
            if (config.enableEdit === true) {
                _this.plugins.push(new editor_inplace_1.InplaceEditorPlugin());
            }
        }
        _this.plugins.forEach(function (plugin) { return plugin.init(_this); });
        _this.showSearch = config.enableSearch === true;
        _this.createActions(_this.config);
        _this.createColumns(_this.config);
        _this.filterUpdater = new dependencies_1.ComputedUpdater(function () { return _this.updateByFilter(); });
        _this.filterUpdater.observe(_this, "__filterUpdaterValue");
        _this.searchModel.updater = function () { return _this.updateByFilter(); };
        if (!!element) {
            _this.initialize(element);
        }
        _this.isMergedCells = config.enableMergedCells;
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
        this.scrollerElement = element.getElementsByClassName("table4js-scroll-container")[0];
        this.tableElement = element.getElementsByTagName("table")[0];
        this.resizerElement = element.getElementsByClassName("table4js")[0];
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
                            entry.target.parentElement.classList.add("table4js--small");
                        }
                        else {
                            entry.target.parentElement.classList.remove("table4js--small");
                        }
                        _this.tableHeadHeight = entry.contentRect.height + 5;
                    }
                }
            });
            resizeObserver.observe(element.getElementsByTagName("thead")[0]);
        }
    };
    Table.prototype.navigateTo = function (startRow) {
        if (startRow) {
            this.lastOffsetBack = startRow - 1;
            this.lastOffset = startRow - 1;
            this.columns.forEach(function (c) { c.count = null; c.prev = null; c.prevValue = undefined; c.last = null; });
            this.rows = [];
            this.drawRows(this.partRowCount, startRow - 1, false);
        }
    };
    Table.prototype.createColumn = function (column, model) {
        return new column_1.TableColumn(column, this);
    };
    Table.prototype.createColumns = function (config) {
        var _this = this;
        this.columns = config.columns.map(function (column) {
            var tableColumn = _this.createColumn(column, config);
            _this.plugins.forEach(function (plugin) { return plugin.onColumnCreated(tableColumn); });
            return tableColumn;
        });
    };
    Table.prototype.createActions = function (config) {
        var _this = this;
        this.plugins.forEach(function (plugin) { return _this.innerActions.push.apply(_this.innerActions, plugin.getActions()); });
        if (config.enableMergedCellsToggle === true) {
            this.innerActions.push(new action_1.Action({
                name: "mergedСells-action",
                action: function () {
                    _this.isMergedCells = !_this.isMergedCells;
                },
                svg: this.icons.table,
                container: "top"
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
                    var rowData = back ? data[data.length - 1 - Number(index)] : dataItem;
                    var rowNumber = back ? data.length - 1 - Number(index) + offset : Number(index) + offset;
                    var newRow = _this.createRow(rowData, rowNumber, back);
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
    };
    Table.prototype.createRow = function (data, num, back) {
        var _this = this;
        if (back === void 0) { back = false; }
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
        row.color = colorRow;
        row.select = function (data, event) { return _this.selectRow(data, event); };
        row.click = function (data, event) { return _this.clickRow(data, event); };
        this.plugins.forEach(function (plugin) { return plugin.onRowCreated(row); });
        return row;
    };
    Object.defineProperty(Table.prototype, "allowRowSelection", {
        get: function () {
            return true;
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
    Object.defineProperty(Table.prototype, "rowActions", {
        get: function () {
            return this.getActions('row');
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
    Table.prototype.registerPlugin = function (plugin) {
        var oldOne = this.unregisterPlugin(plugin.name);
        plugin.init(this);
        this.plugins.push(plugin);
        return oldOne;
    };
    Table.prototype.unregisterPlugin = function (pluginName) {
        var oldOneIndex = -1;
        for (var i = 0; i < this.plugins.length; i++) {
            if (this.plugins[i].name === pluginName) {
                oldOneIndex = i;
                break;
            }
        }
        var oldOne = undefined;
        if (oldOneIndex >= 0) {
            oldOne = this.plugins.splice(oldOneIndex, 1)[0];
        }
        return oldOne;
    };
    Table.rowHeight = 20;
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isNumber", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isMergedCells", void 0);
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
    return Table;
}(base_1.Base));
exports.Table = Table;


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
    TableRow.prototype.getRowComponent = function () {
        return "table4js-row";
    };
    TableRow.prototype.getRowComponentParams = function (params) {
        return params;
    };
    TableRow.prototype.getCellComponent = function (cell) {
        return "table4js-cell";
    };
    TableRow.prototype.getCellComponentParams = function (params) {
        return params;
    };
    Object.defineProperty(TableRow.prototype, "css", {
        get: function () {
            var result = "table4js__row table4js__row--" + this.mode;
            if (this.selected) {
                result += " table4js__row--selected";
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    TableRow.prototype.update = function () {
        this.cells.forEach(function (cell) { return cell.update(); });
    };
    __decorate([
        (0, property_1.property)({ defaultValue: "default" }),
        __metadata("design:type", String)
    ], TableRow.prototype, "mode", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableRow.prototype, "selected", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableRow.prototype, "color", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], TableRow.prototype, "cells", void 0);
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
exports.SummaryPlugin = exports.FieldSummary = exports.SummaryItem = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var action_1 = __webpack_require__(/*! ../core/action */ "./sources/core/action.ts");
__webpack_require__(/*! ./summary.scss */ "./sources/table/summary.scss");
var Functions = [
    { title: "-", value: "", hint: "" },
    { title: "Σ", value: "sum", hint: "Sum of cells for this table column", types: ["integer", "money", "currency", "progress", "number"] },
    { title: "x̄", value: "avg", hint: "Arithmetic mean in this table column", types: ["integer", "money", "currency", "progress", "number"] },
    { title: "min", value: "min", hint: "Minimum value in this table column", types: ["integer", "money", "currency", "progress", "number", "date", "datetime"] },
    { title: "max", value: "max", hint: "Maximum value in this table column", types: ["integer", "money", "currency", "progress", "number", "date", "datetime"] },
    { title: "N", value: "count", hint: "Number of non-blank cells in this column" },
    { title: "U", value: "unique", hint: "Number of unique cells in this column" },
];
var SummaryItem = (function () {
    function SummaryItem(title, value) {
        this.title = title;
        this.value = value;
    }
    return SummaryItem;
}());
exports.SummaryItem = SummaryItem;
var FieldSummary = (function (_super) {
    __extends(FieldSummary, _super);
    function FieldSummary(table, field) {
        var _this = _super.call(this) || this;
        _this.table = table;
        _this.field = field;
        _this.summaryItems = Functions.filter(function (funcDescription) {
            return !funcDescription.types || funcDescription.types.indexOf(field.type) !== -1;
        }).map(function (funcDescription) { return new SummaryItem(funcDescription.title, funcDescription.value); });
        return _this;
    }
    FieldSummary.prototype.calculateSummary = function () {
        var _this = this;
        this.value = undefined;
        if (!!this.func) {
            this.table.dataProvider.getSummary(this.func, this.field.name, this.table["tableFilter"], function (data) { return _this.value = data; });
        }
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Number)
    ], FieldSummary.prototype, "value", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: null, onSet: function (val, target) {
                target.calculateSummary();
            } }),
        __metadata("design:type", Object)
    ], FieldSummary.prototype, "func", void 0);
    return FieldSummary;
}(base_1.Base));
exports.FieldSummary = FieldSummary;
var SummaryPlugin = (function () {
    function SummaryPlugin() {
        this.name = "summary";
    }
    SummaryPlugin.prototype.init = function (table) {
        this._table = table;
    };
    SummaryPlugin.prototype.getActions = function () {
        var _this = this;
        return [new action_1.Action({
                name: "summary-action",
                action: function () {
                    _this._table.showTableSummary = !_this._table.showTableSummary;
                },
                svg: this._table.icons.equal,
                container: "top"
            })];
    };
    SummaryPlugin.prototype.onColumnCreated = function (column) {
        column.summary = new FieldSummary(this._table, column);
    };
    SummaryPlugin.prototype.onRowCreated = function (row) {
    };
    return SummaryPlugin;
}());
exports.SummaryPlugin = SummaryPlugin;


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

/***/ "./sources/widgets/editor.ts":
/*!***********************************!*\
  !*** ./sources/widgets/editor.ts ***!
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
exports.Editor = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./editor.scss */ "./sources/widgets/editor.scss");
var Editor = (function (_super) {
    __extends(Editor, _super);
    function Editor(_data, name, onComplete) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        _this.name = name;
        _this.onComplete = onComplete;
        _this.value = _data[_this.name];
        return _this;
    }
    Editor.getInputType = function (type) {
        return Editor.inputTypes[type];
    };
    Object.defineProperty(Editor.prototype, "isModified", {
        get: function () {
            return this.value !== this.data[this.name];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Editor.prototype, "css", {
        get: function () {
            var result = "table4js-editor";
            if (this.isModified) {
                result += " table4js-editor--modified";
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Editor.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (val) {
            this._data = val;
            this.value = val[this.name];
        },
        enumerable: false,
        configurable: true
    });
    Editor.prototype.complete = function (commit) {
        if (commit) {
            this.data[this.name] = this.value;
        }
        !!this.onComplete && this.onComplete(this.value, commit);
    };
    Editor.inputTypes = {
        number: "number",
        currency: "number",
        indicator: "number",
        progress: "number",
        date: "date",
        datetime: "datetime-local",
    };
    Editor.editors = {
        default: "table4js-default-editor",
        bool: "table4js-checkbox-editor",
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], Editor.prototype, "value", void 0);
    return Editor;
}(base_1.Base));
exports.Editor = Editor;


/***/ }),

/***/ "./sources/widgets/form.ts":
/*!*********************************!*\
  !*** ./sources/widgets/form.ts ***!
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
exports.Form = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var property_2 = __webpack_require__(/*! ./property */ "./sources/widgets/property.ts");
__webpack_require__(/*! ./form.scss */ "./sources/widgets/form.scss");
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(fields, layout) {
        var _this = _super.call(this) || this;
        _this.fields = fields;
        _this.layout = layout;
        _this._properties = {};
        if (!_this.layout) {
            _this.layout = { elements: (fields || []).filter(function (f) { return f.visible; }).map(function (f) { return ({ name: f.name, title: f.title }); }) };
        }
        _this.fields.forEach(function (field) { return _this._properties[field.name] = new property_2.Property(field); });
        return _this;
    }
    Object.defineProperty(Form.prototype, "properties", {
        get: function () {
            var _this = this;
            return this.layout.elements.map(function (el) { return _this._properties[el.name]; });
        },
        enumerable: false,
        configurable: true
    });
    Form.prototype.complete = function (commit) {
        var _this = this;
        Object.keys(this._properties).forEach(function (name) { return _this._properties[name].complete(commit); });
    };
    __decorate([
        (0, property_1.property)({
            onSet: function (val, target) {
                Object.keys(target._properties).forEach(function (name) { return target._properties[name].obj = val; });
            }
        }),
        __metadata("design:type", Object)
    ], Form.prototype, "object", void 0);
    return Form;
}(base_1.Base));
exports.Form = Form;


/***/ }),

/***/ "./sources/widgets/property.ts":
/*!*************************************!*\
  !*** ./sources/widgets/property.ts ***!
  \*************************************/
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
exports.Property = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var editor_1 = __webpack_require__(/*! ./editor */ "./sources/widgets/editor.ts");
__webpack_require__(/*! ./property.scss */ "./sources/widgets/property.scss");
var Property = (function (_super) {
    __extends(Property, _super);
    function Property(field) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.title = field.title || field.name;
        _this.editor = new editor_1.Editor(_this.obj, _this.name);
        return _this;
    }
    Property.registerPropertyType = function (propertyType) {
        Property.propertyTypes[propertyType.name] = propertyType;
    };
    Object.defineProperty(Property.prototype, "type", {
        get: function () {
            var _a;
            return ((_a = this.field) === null || _a === void 0 ? void 0 : _a.type) || "default";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "name", {
        get: function () {
            return this.field.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "value", {
        get: function () {
            return this.editor.value;
        },
        set: function (val) {
            this.editor.value = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "hasValue", {
        get: function () {
            return this.editor.value !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "css", {
        get: function () {
            return this.getPropertyCss(this.obj, this.field);
        },
        enumerable: false,
        configurable: true
    });
    Property.prototype.getPropertyTypeDescription = function (type) {
        return Property.propertyTypes[type] || Property.propertyTypes["default"];
    };
    Property.prototype.getPropertyCss = function (data, field) {
        return this.getPropertyTypeDescription(field.type).css;
    };
    Property.prototype.getText = function (val) {
        var propertyTypeDescription = this.getPropertyTypeDescription(this.type);
        if (!!propertyTypeDescription && typeof propertyTypeDescription.getText === "function") {
            return propertyTypeDescription.getText(val);
        }
        return this.getPropertyTypeDescription("default").getText(val);
    };
    Object.defineProperty(Property.prototype, "component", {
        get: function () {
            var propertyTypeDescription = this.getPropertyTypeDescription(this.type);
            if (!!propertyTypeDescription && !!propertyTypeDescription.component) {
                return propertyTypeDescription.component;
            }
            return this.getPropertyTypeDescription("default").component;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "inputType", {
        get: function () {
            return editor_1.Editor.getInputType(this.type);
        },
        enumerable: false,
        configurable: true
    });
    Property.prototype.complete = function (commit) {
        this.editor.complete(commit);
    };
    Property.propertyTypes = {
        "default": {
            name: "default",
            css: "table4js-cell--left",
            getText: function (val) { return typeof val === "object" ? JSON.stringify(val) : val; },
            component: "table4js-property-editor"
        },
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Property.prototype, "title", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Property.prototype, "isModified", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Property.prototype, "isReadOnly", void 0);
    __decorate([
        (0, property_1.property)({
            defaultValue: {},
            onSet: function (val, target) {
                target.editor.data = val;
                target.isModified = false;
            }
        }),
        __metadata("design:type", Object)
    ], Property.prototype, "obj", void 0);
    return Property;
}(base_1.Base));
exports.Property = Property;


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
//# sourceMappingURL=table4.js.map