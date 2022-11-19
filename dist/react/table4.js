(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Table4", ["react"], factory);
	else if(typeof exports === 'object')
		exports["Table4"] = factory(require("react"));
	else
		root["Table4"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
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

/***/ "./sources/react/abris-component.tsx":
/*!*******************************************!*\
  !*** ./sources/react/abris-component.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisComponent = exports.unregisterComponent = exports.registerComponent = void 0;
var components = [];
function registerComponent(componentName, componentCreator) {
    components[componentName] = componentCreator;
}
exports.registerComponent = registerComponent;
function unregisterComponent(componentName) {
    delete components[componentName];
}
exports.unregisterComponent = unregisterComponent;
function AbrisComponent(_a) {
    var componentName = _a.componentName, componentProps = _a.componentProps;
    var componentCreator = components[componentName];
    if (!componentCreator) {
        console.error("The '" + componentName + "' component hasn't found.");
        return null;
    }
    return componentCreator(componentProps);
}
exports.AbrisComponent = AbrisComponent;


/***/ }),

/***/ "./sources/react/index.ts":
/*!********************************!*\
  !*** ./sources/react/index.ts ***!
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
exports.ReactHashTableStorage = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
__exportStar(__webpack_require__(/*! ./abris-component */ "./sources/react/abris-component.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table */ "./sources/react/table/index.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/cell */ "./sources/react/table/cell.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-editor */ "./sources/react/table/cell-editor.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-viewer */ "./sources/react/table/cell-viewer.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/row */ "./sources/react/table/row.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/summary */ "./sources/react/table/summary.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/search */ "./sources/react/table/search.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter */ "./sources/react/table/column-filter.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-select */ "./sources/react/table/filter-select.tsx"), exports);
__exportStar(__webpack_require__(/*! ./widgets/action */ "./sources/react/widgets/action.tsx"), exports);
__exportStar(__webpack_require__(/*! ./widgets/actions */ "./sources/react/widgets/actions.tsx"), exports);
__exportStar(__webpack_require__(/*! ./widgets/dropdown-actions */ "./sources/react/widgets/dropdown-actions.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/bool-cell-editor */ "./sources/react/table/bool-cell-editor.tsx"), exports);
__exportStar(__webpack_require__(/*! ./table/bool-cell-viewer */ "./sources/react/table/bool-cell-viewer.tsx"), exports);
__exportStar(__webpack_require__(/*! .. */ "./sources/index.ts"), exports);
var ReactHashTableStorage = (function (_super) {
    __extends(ReactHashTableStorage, _super);
    function ReactHashTableStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactHashTableStorage.prototype.linkArrayToObservable = function (array) {
        var result = [].concat(array);
        var self = this;
        ["pop", "push", "splice", "slice", "shift", "unshift"].forEach(function (funcName) {
            result[funcName] = function () {
                var funcRes = Array.prototype[funcName].apply(result, arguments);
                Array.prototype[funcName].apply(array, arguments);
                if (typeof self.owner.__triggerUpdate === "function") {
                    self.owner.__triggerUpdate();
                }
                return funcRes;
            };
        });
        return result;
    };
    ReactHashTableStorage.prototype.getValue = function (name, defaultValue) {
        var value = _super.prototype.getValue.call(this, name, defaultValue);
        if (value === defaultValue) {
            this.hash[name] = value;
        }
        if (Array.isArray(value)) {
            return this.linkArrayToObservable(value);
        }
        return value;
    };
    ReactHashTableStorage.prototype.setValue = function (name, val) {
        _super.prototype.setValue.call(this, name, val);
        if (typeof this.owner.__triggerUpdate === "function") {
            this.owner.__triggerUpdate();
        }
    };
    return ReactHashTableStorage;
}(base_1.HashTableStorage));
exports.ReactHashTableStorage = ReactHashTableStorage;
base_1.Base.createPropertiesStorage = function () { return new ReactHashTableStorage(); };


/***/ }),

/***/ "./sources/react/reactivity.ts":
/*!*************************************!*\
  !*** ./sources/react/reactivity.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeReactive = exports.makeReactiveModel = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var makeReactiveModel = function (model, val, updater) { return function () {
    model["__triggerUpdate"] = function () {
        updater(val + 1);
    };
    return function () {
        delete model["__triggerUpdate"];
    };
}; };
exports.makeReactiveModel = makeReactiveModel;
function makeReactive(model) {
    var _a = (0, react_1.useState)(0), update = _a[0], updater = _a[1];
    (0, react_1.useEffect)((0, exports.makeReactiveModel)(model, update, updater));
}
exports.makeReactive = makeReactive;


/***/ }),

/***/ "./sources/react/table/bool-cell-editor.tsx":
/*!**************************************************!*\
  !*** ./sources/react/table/bool-cell-editor.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table4BoolCellEditor = void 0;
var React = __webpack_require__(/*! react */ "react");
var abris_component_1 = __webpack_require__(/*! ../abris-component */ "./sources/react/abris-component.tsx");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
function Table4BoolCellEditor(_a) {
    var model = _a.model;
    (0, reactivity_1.makeReactive)(model);
    return (React.createElement("div", { className: "abris-table__bool-cell-editor" },
        React.createElement("input", { type: "checkbox", checked: model.value, onChange: function (e) {
                model.value = e.target.checked;
                model.complete(true);
            } })));
}
exports.Table4BoolCellEditor = Table4BoolCellEditor;
(0, abris_component_1.registerComponent)("bool-cell-editor", Table4BoolCellEditor);


/***/ }),

/***/ "./sources/react/table/bool-cell-viewer.tsx":
/*!**************************************************!*\
  !*** ./sources/react/table/bool-cell-viewer.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table4BoolCellViewer = void 0;
var React = __webpack_require__(/*! react */ "react");
var abris_component_1 = __webpack_require__(/*! ../abris-component */ "./sources/react/abris-component.tsx");
function Table4BoolCellViewer(_a) {
    var cell = _a.cell, className = _a.className;
    return (React.createElement("span", { className: className + " abris-table__bool-cell-viewer" },
        React.createElement("span", { className: "abris-table__bool-cell-viewer-circle", style: { backgroundColor: cell.data ? "green" : "red" } })));
}
exports.Table4BoolCellViewer = Table4BoolCellViewer;
(0, abris_component_1.registerComponent)("bool-cell-viewer", Table4BoolCellViewer);


/***/ }),

/***/ "./sources/react/table/cell-editor.tsx":
/*!*********************************************!*\
  !*** ./sources/react/table/cell-editor.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table4CellEditor = void 0;
var React = __webpack_require__(/*! react */ "react");
var abris_component_1 = __webpack_require__(/*! ../abris-component */ "./sources/react/abris-component.tsx");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
function Table4CellEditor(_a) {
    var model = _a.model;
    (0, reactivity_1.makeReactive)(model);
    return (React.createElement("div", { className: "abris-table__cell-editor" },
        React.createElement("input", { defaultValue: model.value, onChange: function (e) { return model.value = e.target.value; }, onKeyUp: function (e) { return model.processKeyUp(e.nativeEvent); } })));
}
exports.Table4CellEditor = Table4CellEditor;
(0, abris_component_1.registerComponent)("abris-cell-editor", Table4CellEditor);


/***/ }),

/***/ "./sources/react/table/cell-viewer.tsx":
/*!*********************************************!*\
  !*** ./sources/react/table/cell-viewer.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table4CellViewer = void 0;
var React = __webpack_require__(/*! react */ "react");
var abris_component_1 = __webpack_require__(/*! ../abris-component */ "./sources/react/abris-component.tsx");
function Table4CellViewer(_a) {
    var cell = _a.cell, className = _a.className;
    return (React.createElement("span", { className: className, dangerouslySetInnerHTML: { __html: cell.text } }));
}
exports.Table4CellViewer = Table4CellViewer;
(0, abris_component_1.registerComponent)("abris-cell-viewer", Table4CellViewer);


/***/ }),

/***/ "./sources/react/table/cell.tsx":
/*!**************************************!*\
  !*** ./sources/react/table/cell.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table4Cell = void 0;
var React = __webpack_require__(/*! react */ "react");
var cell_1 = __webpack_require__(/*! ../../table/cell */ "./sources/table/cell.ts");
var abris_component_1 = __webpack_require__(/*! ../abris-component */ "./sources/react/abris-component.tsx");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
function Table4Cell(_a) {
    var table = _a.table, cell = _a.cell;
    (0, reactivity_1.makeReactive)(cell);
    var isEditMode = !!cell.inplaceEditor && table.config.enableEdit;
    var isMergedCell = cell.count > 1 && table.isMergedСells;
    if (!isEditMode) {
        return (React.createElement("div", { className: cell_1.TableCell.getContainerCss(cell, isMergedCell), style: { top: isMergedCell ? table.tableHeadHeight - 2 + "px" : undefined }, onClick: function (e) { return table.startEditCell(cell); } },
            React.createElement(abris_component_1.AbrisComponent, { componentName: cell.viewer, componentProps: { cell: cell, className: cell_1.TableCell.getContentCss(cell, isMergedCell) } })));
    }
    else {
        return (React.createElement(abris_component_1.AbrisComponent, { componentName: cell.editor, componentProps: { model: cell.inplaceEditor } }));
    }
}
exports.Table4Cell = Table4Cell;


/***/ }),

/***/ "./sources/react/table/column-filter-item.tsx":
/*!****************************************************!*\
  !*** ./sources/react/table/column-filter-item.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisColumnFilterItem = void 0;
var React = __webpack_require__(/*! react */ "react");
var react_1 = __webpack_require__(/*! react */ "react");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
var filter_select_1 = __webpack_require__(/*! ./filter-select */ "./sources/react/table/filter-select.tsx");
var filter_select_2 = __webpack_require__(/*! ../../table/filter-select */ "./sources/table/filter-select.ts");
function AbrisColumnFilterItem(_a) {
    var _b;
    var filterItem = _a.filterItem;
    (0, reactivity_1.makeReactive)(filterItem);
    var _c = (0, react_1.useState)(new filter_select_2.TableFilterSelect(filterItem.filterItemValue, filterItem.column.name, filterItem.column.type, filterItem.getColumnData)), tableFilterSelect = _c[0], seTableFilterSelect = _c[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("select", { className: "abris-filter___operation", value: (_b = filterItem.operation) === null || _b === void 0 ? void 0 : _b.text, onChange: function (e) {
                filterItem.operation = filterItem.operations.find(function (o) { return o.text === e.target.value; });
            } }, filterItem.operations.map(function (s) { return (React.createElement("option", { key: s.op, title: s.text }, s.text)); })),
        filterItem.showOperand && filterItem.operation.op == "EQ" && (React.createElement(filter_select_1.AbrisFilterSelect, { viewModel: tableFilterSelect })),
        filterItem.showOperand && filterItem.operation.op != "EQ" && (React.createElement("div", { className: "abris-filter__operand", "data-bind": "component: { name: filterEditorName, params: { value: filterItemValue, column: column } }" },
            React.createElement("input", { style: { width: "100%" }, placeholder: "*", defaultValue: filterItem.filterItemValue.value, onChange: function (e) {
                    return (filterItem.filterItemValue.value = e.target.value);
                } })))));
}
exports.AbrisColumnFilterItem = AbrisColumnFilterItem;


/***/ }),

/***/ "./sources/react/table/column-filter.tsx":
/*!***********************************************!*\
  !*** ./sources/react/table/column-filter.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisColumnFilter = void 0;
var React = __webpack_require__(/*! react */ "react");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
var Icons = __webpack_require__(/*! ../../icon */ "./sources/icon.ts");
var column_filter_item_1 = __webpack_require__(/*! ./column-filter-item */ "./sources/react/table/column-filter-item.tsx");
function AbrisColumnFilter(_a) {
    var context = _a.context;
    (0, reactivity_1.makeReactive)(context);
    if (context.filterItems.length === 0) {
        return null;
    }
    return (React.createElement("div", { key: context.column.name, className: "abris-filter-item" },
        React.createElement("div", { className: "abris-filter__title abris-filter-text" }, context.column.title + ":"),
        context.filterItems.map(function (filterItem, index) { return (React.createElement("div", { key: index, className: "abris-filter__content" },
            index > 0 && (React.createElement("div", { className: "abris-filter__operator abris-filter-text" }, "&")),
            React.createElement(column_filter_item_1.AbrisColumnFilterItem, { filterItem: filterItem }),
            React.createElement("div", { className: "abris-filter__remove", "data-bind": "click: $parent.removeItem, clickBubble: false", onClick: function (e) { return context.removeItem(filterItem); } },
                React.createElement("div", { className: "abris-filter__remove-icon abris-svg-icon", dangerouslySetInnerHTML: {
                        __html: Icons.cross,
                    } })))); })));
}
exports.AbrisColumnFilter = AbrisColumnFilter;


/***/ }),

/***/ "./sources/react/table/filter-select.tsx":
/*!***********************************************!*\
  !*** ./sources/react/table/filter-select.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisFilterSelect = void 0;
var React = __webpack_require__(/*! react */ "react");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
var Icons = __webpack_require__(/*! ../../icon */ "./sources/icon.ts");
function AbrisFilterSelect(_a) {
    var viewModel = _a.viewModel;
    (0, reactivity_1.makeReactive)(viewModel);
    var CustomTag = "abris-filter-select";
    return (React.createElement(CustomTag, { className: "abrs-filter__value" },
        React.createElement("div", { className: "abris-select-selection" }, viewModel.selectedItems.map(function (i) { return (React.createElement("div", { className: "abris-select-selection-item", key: i.name },
            React.createElement("span", { className: "abris-select-item-title" }, i.name),
            React.createElement("div", { className: "abris-svg-icon abris-select-item-close", onClick: function (e) { return viewModel.deleteItems(i); }, dangerouslySetInnerHTML: {
                    __html: Icons.cross,
                } }))); })),
        React.createElement("div", { className: "abris-select-button abris-svg-icon", title: viewModel.title, onClick: function (e) { return viewModel.toggle(null, e); }, dangerouslySetInnerHTML: {
                __html: Icons.arrowdown,
            } }),
        viewModel.isOpen && (React.createElement("ul", { className: "abris-select__dropdown-menu abris-button-toggle__dropdown-menu", onClick: function (e) { return e.stopPropagation; } },
            viewModel.isFilterSearchByType && (React.createElement("div", { className: "abris-select__dropdown-search-container" },
                React.createElement("input", { className: "abris-select__dropdown-search", value: viewModel.filterText, onChange: function (v) { return (viewModel.filterText = v.target.value); }, placeholder: "*" }))),
            viewModel.foundItems.map(function (fi, i) { return (React.createElement("div", { key: i, className: "abris-select__dropdown-item", onClick: function (e) { return viewModel.clickItem(fi); } },
                React.createElement("input", { className: "abris-select__dropdown-hide-check", type: "checkbox", checked: viewModel.isChecked(fi), onChange: function (e) { } }),
                React.createElement("div", { className: "abris-svg-icon abris-select__dropdown-check", dangerouslySetInnerHTML: {
                        __html: Icons.check,
                    } }),
                React.createElement("span", { className: "abris-select__dropdown-label" }, fi.name))); }),
            viewModel.isLoadMore && (React.createElement("button", { className: "abris-select__dropdown-button", onClick: function (e) { return viewModel.loadMore(); } },
                React.createElement("span", { className: "abris-action-button__label" }, "More")))))));
}
exports.AbrisFilterSelect = AbrisFilterSelect;


/***/ }),

/***/ "./sources/react/table/index.tsx":
/*!***************************************!*\
  !*** ./sources/react/table/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table4Table = void 0;
var React = __webpack_require__(/*! react */ "react");
var react_1 = __webpack_require__(/*! react */ "react");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
var actions_1 = __webpack_require__(/*! ../widgets/actions */ "./sources/react/widgets/actions.tsx");
var dropdown_actions_1 = __webpack_require__(/*! ../widgets/dropdown-actions */ "./sources/react/widgets/dropdown-actions.tsx");
var row_1 = __webpack_require__(/*! ./row */ "./sources/react/table/row.tsx");
var summary_1 = __webpack_require__(/*! ../../table/summary */ "./sources/table/summary.ts");
var summary_2 = __webpack_require__(/*! ./summary */ "./sources/react/table/summary.tsx");
var search_1 = __webpack_require__(/*! ./search */ "./sources/react/table/search.tsx");
var column_filter_1 = __webpack_require__(/*! ./column-filter */ "./sources/react/table/column-filter.tsx");
function EmptyTable() {
    return (React.createElement("tr", { className: "abris-table__row" },
        React.createElement("td", { className: "abris-table-cell", colSpan: "100%", "data-bind": "text: noDataText" }, "noData")));
}
function LoadingIndicator(table) {
    var visibleColumns = table.columns.filter(function (c) { return c.visible; });
    return (React.createElement(React.Fragment, null, visibleColumns.map(function (c, index) { return (React.createElement("tr", { key: index, className: "abris-table__row" },
        React.createElement("td", { className: "abris-table-cell abris-table-technical-cell" },
            React.createElement("div", { className: "abris-table-technical-cell__container" },
                React.createElement("div", { className: "abris-table__check" },
                    React.createElement("div", { className: "abris-svg-icon abris-table__icon-check" })))),
        visibleColumns.map(function (vc) { return (React.createElement("td", { className: "abris-table-cell abris-table-technical-cell" },
            React.createElement("div", { className: "abris-table-cell__container abris-table-cell__container--loading" }))); }),
        React.createElement("td", { className: "abris-table-cell abris-table-technical-cell" },
            React.createElement("div", { className: "abris-table-technical-cell__container" },
                React.createElement("div", { className: "abris-svg-icon abris-table-icon-row-tools abris-table__more", dangerouslySetInnerHTML: { __html: table.icons.more } }),
                React.createElement("div", { className: "abris-svg-icon abris-table-icon-row-tools abris-table__edit", dangerouslySetInnerHTML: { __html: table.icons.edit } }))))); })));
}
function Table4Table(_a) {
    var model = _a.model;
    var dropdownActions = model.getActions("dropdownActions");
    var _b = (0, react_1.useState)(undefined), startRow = _b[0], setStartRow = _b[1];
    var rootRef = (0, react_1.useRef)(null);
    (0, reactivity_1.makeReactive)(model);
    (0, react_1.useEffect)(function () {
        model.initialize(rootRef.current.parentElement);
    });
    var CustomTag = "abris-components-table";
    return (React.createElement(CustomTag, null,
        React.createElement("div", { ref: rootRef, className: "abris-table-resizable-container" },
            React.createElement("div", { className: "abris-table-scroll-container" },
                React.createElement("table", { className: "abris-table" },
                    React.createElement("thead", { className: "abris-table__header abris-table-sticky-component" },
                        React.createElement("tr", { key: "header-tools", className: "abris-table-header-tools" },
                            React.createElement("th", { className: "abris-table-header-tools__cell", colSpan: "100%" },
                                React.createElement("div", { className: "abris-table-header-tools__container abris-table-group-header-technical-cell" },
                                    React.createElement("div", { className: "abris-table-preheader" },
                                        React.createElement("div", { className: "abris-table-search-group" },
                                            model.showSearch ? (React.createElement(search_1.AbrisSearch, { icon: model.icons.search, searchModel: model.searchModel })) : null,
                                            React.createElement(actions_1.AbrisActions, { className: "abris-table-actions", actions: model.topActions }),
                                            model.dropdownActions.length > 0 && (React.createElement(dropdown_actions_1.AbrisDropdownActions, { className: "abris-table-dropdown abris-table-actions-menu", actions: model.dropdownActions })))),
                                    model.viewFilterTable && (React.createElement("div", { className: "abris-table-filter" },
                                        React.createElement("div", { className: "abris-table-filter__container" }, model.columns.map(function (c) { return (React.createElement(column_filter_1.AbrisColumnFilter, { key: c.name, context: c.filterContext })); }))))))),
                        React.createElement("tr", { key: "header-title", className: "abris-table-header-title" },
                            React.createElement("th", { key: "row-selection-cell", className: "abris-table-header-title__cell abris-table-switch" },
                                React.createElement("div", { className: model.isNumber
                                        ? "abris-table-switch__text switch__text--selected"
                                        : "abris-table-switch__text", onClick: function (_) { return (model.isNumber = !model.isNumber); } }, "#")),
                            model.columns
                                .filter(function (c) { return c.visible; })
                                .map(function (c) { return (React.createElement("th", { key: c.name, className: "abris-table-header-title__cell", onMouseOut: function (e) { return model.logMouseOut(c, e); }, onMouseMove: function (e) { return model.logMouseMove(c, e); }, onMouseUp: function (e) { return model.logMouseUp(c, e); } },
                                React.createElement("div", { className: "abris-table-title" },
                                    React.createElement("span", { className: "abris-table-title__text", onClick: function (e) {
                                            model.clickColumn(c, e);
                                        } }, c.title),
                                    React.createElement("div", { className: "abris-table-title__tools" },
                                        React.createElement("div", { className: "abris-svg-icon abris-table-title__sorter", style: {
                                                visibility: c.order === false ? "visible" : "hidden",
                                            }, dangerouslySetInnerHTML: {
                                                __html: model.icons.sortup,
                                            } }),
                                        React.createElement("div", { className: "abris-svg-icon abris-table-title__sorter", style: {
                                                visibility: c.order === true ? "visible" : "hidden",
                                            }, dangerouslySetInnerHTML: {
                                                __html: model.icons.sortdown,
                                            } }),
                                        React.createElement("div", { className: "abris-svg-icon abris-table-title__filter", onClick: function (e) { return c.clickFilter(c, e.nativeEvent); }, dangerouslySetInnerHTML: {
                                                __html: model.icons.filter,
                                            } }))),
                                React.createElement("div", { className: "abris-table-title_resize", onMouseOver: function (e) { return model.logMouseOver(c, e); }, onMouseOut: function (e) { return model.logMouseOut(c, e); }, onMouseMove: function (e) { return model.logMouseMove(c, e); }, onMouseUp: function (e) { return model.logMouseUp(c, e); }, onMouseDown: function (e) { return model.logMouseDown(c, e); } }))); }),
                            React.createElement("th", { key: "row-context-menu-cell", className: "abris-table-header-title__cell" }))),
                    React.createElement("tbody", { className: "abris-table__body" },
                        model.rows.length == 0 && model.loadingMutex == false
                            ? EmptyTable()
                            : null,
                        model.loadingMutex
                            ? LoadingIndicator(model)
                            : model.rows.map(function (r) { return (React.createElement(row_1.TableRow, { key: r.id || r.number, table: model, row: r })); })),
                    React.createElement("tfoot", { className: "abris-table__footer abris-table-sticky-component" },
                        model.showTableSummary && (React.createElement("tr", { key: "footer-summary", className: "abris-table-footer-summary" },
                            React.createElement("th", { key: "footer-tech-cell", className: "abris-table-cell abris-table-technical-cell abris-table-footer__cell" },
                                React.createElement("div", { className: "abris-table-technical-cell__container" },
                                    React.createElement("div", { className: "abris-svg-icon abris-table-icon-equal", dangerouslySetInnerHTML: {
                                            __html: model.icons.equal,
                                        } }))),
                            model.columns
                                .filter(function (c) { return c.visible; })
                                .map(function (c) { return (React.createElement("th", { key: c.name, className: "abris-table-cell abris-table-footer__cell" },
                                React.createElement(summary_2.Table4Summary, { summary: new summary_1.TableSummary(c) }))); }),
                            React.createElement("th", { key: "footer-context-menu-cell", className: "abris-table-cell abris-table-technical-cell abris-table-footer__cell" }))),
                        React.createElement("tr", { key: "footer-tools", className: "abris-table-footer-tools" },
                            React.createElement("th", { className: "abris-table-footer-tools__cell", colSpan: "100%" },
                                React.createElement("div", { className: "abris-table-footer-tools__container abris-table-group-header-technical-cell" },
                                    React.createElement("div", { className: "abris-table-row-management" },
                                        React.createElement(actions_1.AbrisActions, { className: "abris-table-actions", actions: model.bottomActions })),
                                    React.createElement("div", { className: "abris-table-info" },
                                        React.createElement("span", { className: "abris-table-info__total abris-table-info__text" }, "Total: " + model.totalCount),
                                        React.createElement("div", { className: "abris-table-info__go-to" },
                                            React.createElement("span", { className: "abris-table-go-to__text abris-table-info__text" }, "Go to:"),
                                            React.createElement("input", { className: "abris-table-go-to__value", defaultValue: model.startRow, onChange: function (e) { return setStartRow(+e.target.value); }, onKeyDown: function (e) {
                                                    if (e.code === "Enter") {
                                                        model.startRow = +e.target.value;
                                                    }
                                                } }),
                                            React.createElement("button", { className: "abris-btn-transparent" },
                                                React.createElement("div", { className: "abris-svg-icon abris-table-go-to__icon", dangerouslySetInnerHTML: {
                                                        __html: model.icons.arrowright,
                                                    }, onClick: function (_) { return (model.startRow = startRow); } })))))))))))));
}
exports.Table4Table = Table4Table;


/***/ }),

/***/ "./sources/react/table/row.tsx":
/*!*************************************!*\
  !*** ./sources/react/table/row.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableRow = void 0;
var React = __webpack_require__(/*! react */ "react");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
var cell_1 = __webpack_require__(/*! ./cell */ "./sources/react/table/cell.tsx");
function TableRow(_a) {
    var table = _a.table, row = _a.row;
    (0, reactivity_1.makeReactive)(row);
    var visibleColumns = table.columns.filter(function (c) { return c.visible; });
    return (React.createElement("tr", { key: row.id || row.number, className: row.selected
            ? "abris-table__row abris-table__row--selected"
            : "abris-table__row", style: { background: "none" } },
        React.createElement("td", { key: "technical-cell", className: "abris-table-cell abris-table-technical-cell", onClick: function (e) { return row.select(row, e); } },
            React.createElement("div", { className: "abris-table-technical-cell__container" }, table.isNumber ? (React.createElement("div", { className: "abris-table__number" }, row.number)) : (React.createElement("div", { className: "abris-table__check" }, row.selected && (React.createElement("div", { className: "abris-svg-icon abris-table__icon-check", dangerouslySetInnerHTML: { __html: table.icons.check } })))))),
        row.cells.map(function (cell) {
            return (cell.count > 0 || !table.isMergedСells) && (React.createElement("td", { key: cell.name, className: "abris-table-cell " +
                    (cell.count > 1 && table.isMergedСells
                        ? "abris-table-cell--merged "
                        : ""), style: { background: cell.color }, rowSpan: table.isMergedСells ? cell.count : 1 },
                React.createElement(cell_1.Table4Cell, { key: cell.name, table: table, cell: cell })));
        }),
        React.createElement("td", { key: "context-menu-cell", className: "abris-table-cell abris-table-technical-cell", onClick: function (e) { return row.click(row, e); } },
            React.createElement("div", { className: "abris-table-technical-cell__container" },
                React.createElement("div", { className: "abris-svg-icon abris-table-icon-row-tools abris-table__more", dangerouslySetInnerHTML: { __html: table.icons.more } }),
                React.createElement("div", { className: "abris-svg-icon abris-table-icon-row-tools abris-table__edit", dangerouslySetInnerHTML: { __html: table.icons.edit } })),
            !table.hasActiveInplaceEditor && (React.createElement("div", { className: "abris-table__row--select" })),
            React.createElement("div", { className: "abris-table__row--colored", style: { background: row.color ? row.color : "rgba(248,249,253)" } }))));
}
exports.TableRow = TableRow;


/***/ }),

/***/ "./sources/react/table/search.tsx":
/*!****************************************!*\
  !*** ./sources/react/table/search.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisSearch = void 0;
var React = __webpack_require__(/*! react */ "react");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
function AbrisSearch(_a) {
    var icon = _a.icon, searchModel = _a.searchModel;
    (0, reactivity_1.makeReactive)(searchModel);
    return (React.createElement("div", { className: "abris-search" },
        React.createElement("input", { defaultValue: searchModel.searchValue, onChange: function (event) {
                searchModel.searchValue = event.target.value;
            }, className: "abris-search__value", placeholder: "Search..." }),
        React.createElement("div", { className: "abris-search__button", title: "Search", onClick: function (e) { return searchModel.search(searchModel.searchValue); } },
            React.createElement("div", { className: "abris-svg-icon abris-search__icon", dangerouslySetInnerHTML: { __html: icon } }))));
}
exports.AbrisSearch = AbrisSearch;


/***/ }),

/***/ "./sources/react/table/summary.tsx":
/*!*****************************************!*\
  !*** ./sources/react/table/summary.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table4Summary = void 0;
var React = __webpack_require__(/*! react */ "react");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
function Table4Summary(_a) {
    var summary = _a.summary;
    (0, reactivity_1.makeReactive)(summary);
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: "abris-table-summary__value" }, summary.value),
        React.createElement("select", { className: "abris-table-summary__select", value: summary.func }, summary.summaryItems &&
            summary.summaryItems.map(function (s) { return (React.createElement("option", { value: s.value, title: s.title }, s.title)); }))));
}
exports.Table4Summary = Table4Summary;


/***/ }),

/***/ "./sources/react/widgets/action.tsx":
/*!******************************************!*\
  !*** ./sources/react/widgets/action.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisAction = void 0;
var React = __webpack_require__(/*! react */ "react");
var reactivity_1 = __webpack_require__(/*! ../reactivity */ "./sources/react/reactivity.ts");
function AbrisAction(_a) {
    var action = _a.action;
    (0, reactivity_1.makeReactive)(action);
    return (React.createElement("button", { key: action.name, onClick: function () { return action.action(); }, className: "abris-button--transparent action-button abris-action-button " +
            action.cssClasses +
            (action.active === true ? " abris-action--active" : ""), type: action["formId"] !== undefined ? "submit" : "button", title: action.title || action.name },
        action.svg && (React.createElement("div", { className: "abris-action-button__icon abris-button__svg-icon", dangerouslySetInnerHTML: { __html: action.svg } })),
        React.createElement("span", { className: "abris-action-button__label " + action.cssLabel, style: { display: action.title ? "block" : "none" } }, action.title)));
}
exports.AbrisAction = AbrisAction;


/***/ }),

/***/ "./sources/react/widgets/actions.tsx":
/*!*******************************************!*\
  !*** ./sources/react/widgets/actions.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisActions = void 0;
var React = __webpack_require__(/*! react */ "react");
var action_1 = __webpack_require__(/*! ./action */ "./sources/react/widgets/action.tsx");
function AbrisActions(_a) {
    var className = _a.className, actions = _a.actions;
    return (React.createElement("div", { className: className }, actions.map(function (action) {
        if (!action.actions) {
            return React.createElement(action_1.AbrisAction, { key: action.name, action: action });
        }
        if (action.actions && action.actions.length > 0) {
            return (React.createElement("div", { className: "abris-nested-actions abris-action-context-button" },
                React.createElement("span", { className: "abris-button__label", "data-bind": "text: title" }),
                React.createElement("div", { className: "abris-nested-actions__dropdown" }, action.actions.map(function (a) { return (React.createElement(action_1.AbrisAction, { key: a.name, action: a })); }))));
        }
    })));
}
exports.AbrisActions = AbrisActions;


/***/ }),

/***/ "./sources/react/widgets/dropdown-actions.tsx":
/*!****************************************************!*\
  !*** ./sources/react/widgets/dropdown-actions.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisDropdownActions = void 0;
var React = __webpack_require__(/*! react */ "react");
var actions_1 = __webpack_require__(/*! ./actions */ "./sources/react/widgets/actions.tsx");
function AbrisDropdownActions(_a) {
    var className = _a.className, actions = _a.actions;
    return (React.createElement("div", { className: className },
        React.createElement("button", { className: "abris-action-button abris-button--transparent abris-button-toggle", type: "button", "data-bind": "click: toggle, attr: { title: title }" },
            React.createElement("div", { "data-bind": "html: $root.icons.more_sq" }),
            React.createElement("span", { className: "abris-action-button__label", "data-bind": "text: moreText" })),
        React.createElement("ul", { className: "abris-button-toggle__dropdown-menu" },
            React.createElement(actions_1.AbrisActions, { className: "abris-context-actions", actions: actions }))));
}
exports.AbrisDropdownActions = AbrisDropdownActions;


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
exports.TableWidget = void 0;
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
var TableWidget = (function (_super) {
    __extends(TableWidget, _super);
    function TableWidget(config, element) {
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
    TableWidget.prototype.updateByFilter = function () {
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
    TableWidget.prototype.initialize = function (element) {
        var _this = this;
        this.scrollerElement = element.getElementsByClassName("abris-table-scroll-container")[0];
        this.tableElement = element.getElementsByTagName("table")[0];
        this.resizerElement = element.getElementsByClassName("abris-table")[0];
        var checkLoading = function () {
            var self = _this;
            self.partRowCount = Math.round(self.scrollerElement.clientHeight / TableWidget.rowHeight);
            if (self.scrollerElement.scrollTop < TableWidget.rowHeight && self.lastOffsetBack > 0) {
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
    TableWidget.prototype.showDetail = function (rowData) {
        this.isShowDetail = true;
    };
    TableWidget.prototype.hideDetail = function () {
        this.expandedRowKey = null;
        this.isShowDetail = false;
    };
    TableWidget.prototype.navigateTo = function (startRow) {
        if (startRow) {
            this.lastOffsetBack = startRow - 1;
            this.lastOffset = startRow - 1;
            this.columns.forEach(function (c) { c.count = null; c.prev = null; c.prevValue = undefined; c.last = null; });
            this.rows = [];
            this.drawRows(this.partRowCount, startRow - 1, false);
            this.hideDetail();
        }
    };
    TableWidget.prototype.createColumn = function (column, model) {
        return new column_1.TableColumn(column, this);
    };
    TableWidget.prototype.createColumns = function (config) {
        var _this = this;
        this.columns = config.columns.map(function (column) {
            return _this.createColumn(column, config);
        });
    };
    TableWidget.prototype.createActions = function (config) {
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
    Object.defineProperty(TableWidget.prototype, "dataProvider", {
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
    Object.defineProperty(TableWidget.prototype, "data", {
        set: function (_data) {
            this.dataProvider = new array_data_provider_1.ArrayDataProvider(_data);
        },
        enumerable: false,
        configurable: true
    });
    TableWidget.prototype.refresh = function () {
        this.lastOffsetBack = 0;
        this.lastOffset = 0;
        this.columns.forEach(function (c) { c.count = null; c.prev = null; c.prevValue = undefined; });
        this.rows = [];
        this.drawRows(this.partRowCount, 0, false);
        this.hideDetail();
    };
    TableWidget.prototype.drawRows = function (limit, offset, back) {
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
    TableWidget.prototype.clickRow = function (row, event) {
        this.selectedRows.forEach(function (r) { return r.selected = false; });
        row.selected = true;
    };
    TableWidget.prototype.selectRow = function (row, event) {
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
    TableWidget.prototype.createRow = function (data, num, back) {
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
    TableWidget.prototype.rowExpanded = function (id) {
        return false;
    };
    TableWidget.prototype.completeEditCell = function () {
    };
    TableWidget.prototype.hasActiveInplaceEditorCore = function () {
        return false;
    };
    Object.defineProperty(TableWidget.prototype, "hasActiveInplaceEditor", {
        get: function () {
            return this.hasActiveInplaceEditorCore();
        },
        enumerable: false,
        configurable: true
    });
    TableWidget.prototype.paddingDiff = function (col) {
        if (this.getStyleVal(col, 'box-sizing') == 'border-box') {
            return 0;
        }
        var padLeft = this.getStyleVal(col, 'padding-left');
        var padRight = this.getStyleVal(col, 'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));
    };
    TableWidget.prototype.getStyleVal = function (elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
    };
    Object.defineProperty(TableWidget.prototype, "keyColumn", {
        get: function () {
            return this.config.keyColumn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableWidget.prototype, "selectedRows", {
        get: function () {
            return this.rows.filter(function (r) { return r.selected; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableWidget.prototype, "topActions", {
        get: function () {
            return this.getActions('top');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableWidget.prototype, "dropdownActions", {
        get: function () {
            return this.getActions('dropdown');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableWidget.prototype, "bottomActions", {
        get: function () {
            return this.getActions('bottom');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableWidget.prototype, "noDataText", {
        get: function () {
            return localization_1.Localization.getString("noData");
        },
        enumerable: false,
        configurable: true
    });
    TableWidget.rowHeight = 20;
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "isNumber", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "isMerged\u0421ells", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "loadingMutex", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: true }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "loadMore", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "loadMoreBack", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [], onSet: function (val, target) {
                target.viewFilterTable = new dependencies_1.ComputedUpdater(function () { return val.filter(function (c) { return c.filterContext.showFilter; }).length > 0; });
            } }),
        __metadata("design:type", Array)
    ], TableWidget.prototype, "columns", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], TableWidget.prototype, "rows", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "showTableSummary", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "showSearch", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (newValue, target) {
                target.navigateTo(newValue);
            } }),
        __metadata("design:type", Number)
    ], TableWidget.prototype, "startRow", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: 0 }),
        __metadata("design:type", Number)
    ], TableWidget.prototype, "totalCount", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: 0 }),
        __metadata("design:type", Number)
    ], TableWidget.prototype, "tableHeadHeight", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: true }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "showTableFilter", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "viewFilterTable", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableWidget.prototype, "isShowDetail", void 0);
    return TableWidget;
}(base_1.Base));
exports.TableWidget = TableWidget;


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

/***/ "react":
/*!****************************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./sources/react/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9jb3JlL2FjdGlvbnMuc2Nzcz9hOWQxIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvY29yZS9kcm9wZG93bi1hY3Rpb25zLnNjc3M/YjNkNyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3RhYmxlL2Jvb2wuc2Nzcz9hZjM1Iiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvY2VsbC1lZGl0b3Iuc2Nzcz8xMDVhIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvY29sdW1uLWZpbHRlci5zY3NzPzc5MjAiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy90YWJsZS9maWx0ZXItZGVmYXVsdC5zY3NzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvZmlsdGVyLXNlbGVjdC5zY3NzP2ZkZmUiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy90YWJsZS9pbmRleC5zY3NzP2FhMTIiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy90YWJsZS9zZWFyY2guc2Nzcz8yYmVlIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvc3VtbWFyeS5zY3NzPzIzMDkiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9pY29ucy9pY29uX2Fycm93LWRvd24uc3ZnIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvaWNvbnMvaWNvbl9hcnJvdy1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9pY29ucy9pY29uX2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL2ljb25zL2ljb25fY3Jvc3Muc3ZnIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvaWNvbnMvaWNvbl9lZGl0LnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL2ljb25zL2ljb25fZXF1YWwuc3ZnIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvaWNvbnMvaWNvbl9maWx0ZXIuc3ZnIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvaWNvbnMvaWNvbl9pdGVtLWFkZC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9pY29ucy9pY29uX2l0ZW0tZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL2ljb25zL2ljb25faXRlbS1zYXZlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL2ljb25zL2ljb25fbW9yZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9pY29ucy9pY29uX21vcmVfc3Euc3ZnIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvaWNvbnMvaWNvbl9wYXN0ZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9pY29ucy9pY29uX3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9pY29ucy9pY29uX3NvcnQtZG93bi5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9pY29ucy9pY29uX3NvcnQtdXAuc3ZnIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvaWNvbnMvaWNvbl90YWJsZS1tZXJnZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9jb3JlL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL2NvcmUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL2NvcmUvYmFzZS50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL2NvcmUvZGVwZW5kZW5jaWVzLnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvY29yZS9kcm9wZG93bi1hY3Rpb25zLnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvY29yZS9wcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL2ZpbmQudHMiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9pY29uLnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9yZWFjdC9hYnJpcy1jb21wb25lbnQudHN4Iiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvcmVhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9yZWFjdC9yZWFjdGl2aXR5LnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvcmVhY3QvdGFibGUvYm9vbC1jZWxsLWVkaXRvci50c3giLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9yZWFjdC90YWJsZS9ib29sLWNlbGwtdmlld2VyLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3JlYWN0L3RhYmxlL2NlbGwtZWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3JlYWN0L3RhYmxlL2NlbGwtdmlld2VyLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3JlYWN0L3RhYmxlL2NlbGwudHN4Iiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvcmVhY3QvdGFibGUvY29sdW1uLWZpbHRlci1pdGVtLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3JlYWN0L3RhYmxlL2NvbHVtbi1maWx0ZXIudHN4Iiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvcmVhY3QvdGFibGUvZmlsdGVyLXNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9yZWFjdC90YWJsZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy9yZWFjdC90YWJsZS9yb3cudHN4Iiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvcmVhY3QvdGFibGUvc2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3JlYWN0L3RhYmxlL3N1bW1hcnkudHN4Iiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvcmVhY3Qvd2lkZ2V0cy9hY3Rpb24udHN4Iiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvcmVhY3Qvd2lkZ2V0cy9hY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3JlYWN0L3dpZGdldHMvZHJvcGRvd24tYWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy90YWJsZS9ib29sLnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvY2VsbC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy90YWJsZS9jZWxsLnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvY29sdW1uLWZpbHRlci1pdGVtLnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvY29sdW1uLWZpbHRlci50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3RhYmxlL2ZpbHRlci1kZWZhdWx0LnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvZmlsdGVyLXNlbGVjdC50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvbnVtYmVyLnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvcm93LnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvc2VhcmNoLnRzIiwid2VicGFjazovL1RhYmxlNC8uL3NvdXJjZXMvdGFibGUvc3VtbWFyeS50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3V0aWxzL2FycmF5LWRhdGEtcHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0Ly4vc291cmNlcy91dGlscy9yZW1vdGUtZGF0YS1wcm92aWRlci50cyIsIndlYnBhY2s6Ly9UYWJsZTQvLi9zb3VyY2VzL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL1RhYmxlNC9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwiLFwidW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly9UYWJsZTQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFibGU0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVGFibGU0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vVGFibGU0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9UYWJsZTQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVGFibGU0XCIsIFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRhYmxlNFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYWJsZTRcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KShzZWxmLCAoX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSA9PiB7XG5yZXR1cm4gIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0zIDguNDM2YTEuNSAxLjUgMCAwIDEgMi4xMjEuMDA2bDkuMjY1IDkuMzE0YS44NjUuODY1IDAgMCAwIDEuMjI4IDBsOS4yNjUtOS4zMTRhMS41IDEuNSAwIDAgMSAyLjEyMS0uMDA2IDEuNSAxLjUgMCAwIDEgLjAwNiAyLjEyMWwtMTAuOTQzIDExYTEuNSAxLjUgMCAwIDEtMi4xMjYgMGwtMTAuOTQzLTExYTEuNSAxLjUgMCAwIDEgLjAwNi0yLjEyMXpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNOC45NjggMjdhMS41IDEuNSAwIDAgMSAuMDA1LTIuMTIxbDkuMzE1LTkuMjY1YS44NjcuODY3IDAgMCAwIDAtMS4yMjhsLTkuMzE1LTkuMjY1YTEuNSAxLjUgMCAwIDEtLjAwNS0yLjEyMSAxLjUgMS41IDAgMCAxIDIuMTIxLS4wMDZsMTEgMTAuOTQzYTEuNSAxLjUgMCAwIDEgMCAyLjEyNmwtMTEgMTAuOTQzYTEuNSAxLjUgMCAwIDEtMi4xMjEtLjAwNnpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMjYgOGExLjUgMS41IDAgMCAwLTIuMTIxIDBsLTExLjI2NCAxMS4yNjRhLjg2OS44NjkgMCAwIDEtMS4yMyAwbC01LjI2NC01LjI2NGExLjUgMS41IDAgMCAwLTIuMTIxIDIuMTIxbDYuOTM5IDYuOTRhMS41IDEuNSAwIDAgMCAyLjEyMiAwbDEyLjkzOS0xMi45NGExLjUgMS41IDAgMCAwIDAtMi4xMjF6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTE3LjcxNSAxNWwxMC43MjMtMTAuNzIzYTEuOTIxIDEuOTIxIDAgMCAwIDAtMi43MTUgMS45MjEgMS45MjEgMCAwIDAtMi43MTUgMGwtMTAuNzIzIDEwLjcyMy0xMC43MjMtMTAuNzIzYTEuOTIgMS45MiAwIDAgMC0yLjcxNSAyLjcxNWwxMC43MjMgMTAuNzIzLTEwLjcyMyAxMC43MjNhMS45MiAxLjkyIDAgMSAwIDIuNzE1IDIuNzE1bDEwLjcyMy0xMC43MjMgMTAuNzIzIDEwLjcyM2ExLjkyIDEuOTIgMCAxIDAgMi43MTUtMi43MTV6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTIxLjU3MyAyOWgtMTcuMzk2YTMuMTc4IDMuMTc4IDAgMCAxLTMuMTc3LTMuMTc3di0xNy4xNDZhMy4xNzggMy4xNzggMCAwIDEgMy4xNzctMy4xNzdoNy4yYTEuNSAxLjUgMCAwIDEgMS41IDEuNSAxLjUgMS41IDAgMCAxLTEuNSAxLjVoLTcuMmEuMTc4LjE3OCAwIDAgMC0uMTc3LjE3N3YxNy4xNDZhLjE3OC4xNzggMCAwIDAgLjE3Ny4xNzdoMTcuNGEuMTc4LjE3OCAwIDAgMCAuMTc4LS4xNzh2LTcuMDcyYTEuNSAxLjUgMCAwIDEgMS41LTEuNSAxLjUgMS41IDAgMCAxIDEuNSAxLjV2Ny4wNzNhMy4xNzggMy4xNzggMCAwIDEtMy4xODIgMy4xNzd6TTguMTgxIDIxLjI4M2wuNjE5LTMuNDczYS40NTQuNDU0IDAgMCAxIC43NjgtLjI0MWwyLjg1MyAyLjg1M2EuNDUzLjQ1MyAwIDAgMS0uMjQyLjc2N2wtMy40NzIuNjIxYS40NTQuNDU0IDAgMCAxLS41MjYtLjUyN3pcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCIxNS40MDVcXFwiIHk9XFxcIjMuNTg1XFxcIiB3aWR0aD1cXFwiNVxcXCIgaGVpZ2h0PVxcXCIxN1xcXCIgcng9XFxcIi40OFxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMTMuNzkgLTkuMTIxKSByb3RhdGUoNDUpXFxcIj48L3JlY3Q+PHBhdGggZD1cXFwiTTI0LjkgMi41MzFoMi4yNDFhMS4zNzkgMS4zNzkgMCAwIDEgMS4zNzUgMS4zNzl2LjkxOWEuNTg5LjU4OSAwIDAgMS0uNTg5LjU4OWgtMy44MjdhLjU4OS41ODkgMCAwIDEtLjU4OS0uNTg5di0uOTE5YTEuMzc5IDEuMzc5IDAgMCAxIDEuMzg5LTEuMzc5elxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMTAuNDMgLTE3LjIzMikgcm90YXRlKDQ1KVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wIDMwbDMwLTMwXFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTI2LjMsNy41MzFBMS44ODMsMS44ODMsMCwwLDAsMjguMTgsNS42NDlWMS44ODNBMS44ODMsMS44ODMsMCwwLDAsMjYuMywwSDMuN0ExLjg4MywxLjg4MywwLDAsMCwxLjgyLDEuODgzYTEuODYyLDEuODYyLDAsMCwwLC4xMzkuN2wwLC4wMTFhMS44ODcsMS44ODcsMCwwLDAsLjQxMS42MmgwTDE0LjE1NywxNSwyLjM4NywyNi43N2wwLC4wMDZBMS44ODIsMS44ODIsMCwwLDAsMy43LDMwSDI2LjNhMS44ODMsMS44ODMsMCwwLDAsMS44ODMtMS44ODNWMjQuMzUxYTEuODgzLDEuODgzLDAsMCwwLTMuNzY2LDB2MS44ODNIOC4yNDlsOS45LTkuOWExLjg4MSwxLjg4MSwwLDAsMCwwLTIuNjYybC0uMDA4LS4wMDYsMC0uMDA4TDguMjQ5LDMuNzY2SDI0LjQxNFY1LjY0OUExLjg4MywxLjg4MywwLDAsMCwyNi4zLDcuNTMxWlxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xMy4wNiAyOS4xODhhMi4wMiAyLjAyIDAgMCAxLTEuMTItLjMzMyAyLjEyNiAyLjEyNiAwIDAgMS0uOTQtMS44MjZ2LTkuMjcyYTIuMDE1IDIuMDE1IDAgMCAwLS4yODEtLjgzNWwtOS4zMTktMTIuMjQxYTEuOTk0IDEuOTk0IDAgMCAxLS4yODEtMi4xMTkgMiAyIDAgMCAxIDEuODUyLTEuMDYyaDI0LjA1OGEyLjAxNCAyLjAxNCAwIDAgMSAxLjg1NCAxLjA0NyAyLjAxMyAyLjAxMyAwIDAgMS0uMjI5IDIuMTE2bC04Ljc0MyAxMi4yMDdhMi4xOTMgMi4xOTMgMCAwIDAtLjI4NS44ODd2Ni44MjJhMy4xIDMuMSAwIDAgMS0xLjc5MSAyLjczNGwtMy44NDYgMS42NzVhMi4zMjEgMi4zMjEgMCAwIDEtLjkyOS4yem0tOC4wMzItMjQuNjg4bDguMDc3IDEwLjZhNC44NzEgNC44NzEgMCAwIDEgLjg5NSAyLjY1N3Y3Ljk1NGwyLjYzNy0xLjE0OS0uMDExLTYuOGE1LjA1OCA1LjA1OCAwIDAgMSAuODQ2LTIuNjM0bDcuNjA5LTEwLjYyOHpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI3IDI3XFxcIj48ZyBpZD1cXFwi0KHQu9C+0LlfNDRcXFwiIGRhdGEtbmFtZT1cXFwi0KHQu9C+0LkgNDRcXFwiPjxwYXRoIGQ9XFxcIk0yMy42NywwSDMuMzNBMy4zNCwzLjM0LDAsMCwwLDAsMy4zM1YyMy42N0EzLjM0LDMuMzQsMCwwLDAsMy4zMywyN0gyMy42N0EzLjM0LDMuMzQsMCwwLDAsMjcsMjMuNjdWMy4zM0EzLjM0LDMuMzQsMCwwLDAsMjMuNjcsMFpNMjQsMjMuNjdhLjMzLjMzLDAsMCwxLS4zMy4zM0gzLjMzQS4zMy4zMywwLDAsMSwzLDIzLjY3VjMuMzNBLjMzLjMzLDAsMCwxLDMuMzMsM0gyMy42N2EuMzMuMzMsMCwwLDEsLjMzLjMzWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOS44NiwxMkgxNVY3LjE0YTEuNTEsMS41MSwwLDEsMC0zLDBWMTJINy4xNGExLjUxLDEuNTEsMCwxLDAsMCwzSDEydjQuODVhMS41MSwxLjUxLDAsMSwwLDMsMFYxNWg0Ljg1YTEuNTEsMS41MSwwLDEsMCwwLTNaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjcgMjdcXFwiPjxnIGlkPVxcXCLQodC70L7QuV80NFxcXCIgZGF0YS1uYW1lPVxcXCLQodC70L7QuSA0NFxcXCI+PHBhdGggZD1cXFwiTTIzLjY3LDBIMy4zM0EzLjM0LDMuMzQsMCwwLDAsMCwzLjMzVjIzLjY3QTMuMzQsMy4zNCwwLDAsMCwzLjMzLDI3SDIzLjY3QTMuMzQsMy4zNCwwLDAsMCwyNywyMy42N1YzLjMzQTMuMzQsMy4zNCwwLDAsMCwyMy42NywwWk0yNCwyMy42N2EuMzMuMzMsMCwwLDEtLjMzLjMzSDMuMzNBLjMzLjMzLDAsMCwxLDMsMjMuNjdWMy4zM0EuMzMuMzMsMCwwLDEsMy4zMywzSDIzLjY3YS4zMy4zMywwLDAsMSwuMzMuMzNaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIwLjIyLDYuNzhhMS44NCwxLjg0LDAsMCwwLTIuNTksMEwxMy41LDEwLjkyLDkuMzcsNi43OEExLjgzLDEuODMsMCwwLDAsNi43OCw5LjM3bDQuMTQsNC4xM0w2Ljc4LDE3LjYzYTEuODMsMS44MywwLDAsMCwyLjU5LDIuNTlsNC4xMy00LjE0LDQuMTMsNC4xNGExLjgzLDEuODMsMCwwLDAsMi41OS0yLjU5TDE2LjA4LDEzLjVsNC4xNC00LjEzQTEuODQsMS44NCwwLDAsMCwyMC4yMiw2Ljc4WlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI3IDI3XFxcIj48ZyBpZD1cXFwi0KHQu9C+0LlfMjNcXFwiIGRhdGEtbmFtZT1cXFwi0KHQu9C+0LkgMjNcXFwiPjxwYXRoIGQ9XFxcIk0yMy42NywwSDMuMzNBMy4zNCwzLjM0LDAsMCwwLDAsMy4zM1YyMy42N0EzLjM0LDMuMzQsMCwwLDAsMy4zMywyN0gyMy42N0EzLjM0LDMuMzQsMCwwLDAsMjcsMjMuNjdWMy4zM0EzLjM0LDMuMzQsMCwwLDAsMjMuNjcsMFpNMjQsMjMuNjdhLjMzLjMzLDAsMCwxLS4zMy4zM0gzLjMzQS4zMy4zMywwLDAsMSwzLDIzLjY3VjMuMzNBLjMzLjMzLDAsMCwxLDMuMzMsM0gyMy42N2EuMzMuMzMsMCwwLDEsLjMzLjMzWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOCw1LjIxSDlBMi4zMiwyLjMyLDAsMCwwLDYuNjUsNy41MlYxOS43M2EyLjA4LDIuMDgsMCwwLDAsMi4wNiwyLjA2QTIuMDcsMi4wNywwLDAsMCwxMCwyMS4zMWwzLjQ4LTIuOUwxNywyMS4zMWEyLjA2LDIuMDYsMCwwLDAsMy4zNy0xLjU4VjcuNTJBMi4zMiwyLjMyLDAsMCwwLDE4LDUuMjFabS0uNDMsMTMuMDYtMi44LTIuMzNhMiwyLDAsMCwwLTIuNjIsMGwtMi44LDIuMzNWOGg4LjIyWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48Y2lyY2xlIGN4PVxcXCIxNVxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE1XFxcIiBjeT1cXFwiMTVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE1XFxcIiBjeT1cXFwiMjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xMC41IDEzLjVoLTZhMyAzIDAgMCAxLTMtM3YtNmEzIDMgMCAwIDEgMy0zaDZhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDN6bS02LTEwYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xek0yNS41IDEzLjVoLTZhMyAzIDAgMCAxLTMtM3YtNmEzIDMgMCAwIDEgMy0zaDZhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDN6bS02LTEwYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xek0xMC41IDI4LjVoLTZhMyAzIDAgMCAxLTMtM3YtNmEzIDMgMCAwIDEgMy0zaDZhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDN6bS02LTEwYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xek0yNS41IDI4LjVoLTZhMyAzIDAgMCAxLTMtM3YtNmEzIDMgMCAwIDEgMy0zaDZhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDN6bS02LTEwYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xelxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0zLjIwOS43NUgyMC42NzhhMy4yLDMuMiwwLDAsMSwzLjIwOSwzLjE3N1Y1Ljc1aDIuOTM2QTMuMTgsMy4xOCwwLDAsMSwzMCw4LjkyN1YyNi4wNzNhMy4xOCwzLjE4LDAsMCwxLTMuMTc3LDMuMTc3SDkuMzIyYTMuMiwzLjIsMCwwLDEtMy4yMDktMy4xNzdWMjQuMjVoLTIuOUEzLjIsMy4yLDAsMCwxLDAsMjEuMDczVjMuOTI3QTMuMiwzLjIsMCwwLDEsMy4yMDkuNzVabTIzLjU4MiwyNS41QS4yLjIsMCwwLDAsMjcsMjYuMDczVjguOTI3YS4yLjIsMCwwLDAtLjIwOS0uMTc3SDkuNDI3YS4xNzguMTc4LDAsMCwwLS4xNzcuMTc3VjI2LjA3M2EuMTc4LjE3OCwwLDAsMCwuMTc3LjE3N1pNMywyMS4wNzNhLjIuMiwwLDAsMCwuMjA5LjE3N0g2LjI1VjguOTI3QTMuMTgsMy4xOCwwLDAsMSw5LjQyNyw1Ljc1aDExLjQ2VjMuOTI3YS4yLjIsMCwwLDAtLjIwOS0uMTc3SDMuMjA5QS4yLjIsMCwwLDAsMywzLjkyN1pcXFwiIHN0eWxlPVxcXCJmaWxsOiMwOTJhM2FcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCIxMS41XFxcIiB5PVxcXCIxMC44MjNcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIzXFxcIiByeD1cXFwiMS41XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzNiAyNC42NDUpIHJvdGF0ZSgtMTgwKVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjExLjVcXFwiIHk9XFxcIjE1LjgyM1xcXCIgd2lkdGg9XFxcIjEzXFxcIiBoZWlnaHQ9XFxcIjNcXFwiIHJ4PVxcXCIxLjVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDM2IDM0LjY0NSkgcm90YXRlKDE4MClcXFwiIHN0eWxlPVxcXCJmaWxsOiMwOTJhM2FcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxMS41XFxcIiB5PVxcXCIyMC44MjNcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIzXFxcIiByeD1cXFwiMS41XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzNiA0NC42NDUpIHJvdGF0ZSgxODApXFxcIj48L3JlY3Q+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTI4LjI1IDI1LjYyOWwtNy4yODItNy4yODJhMTAuOTg3IDEwLjk4NyAwIDEgMC0yLjA0OSAyLjE5M2w3LjIxIDcuMjFhMS41IDEuNSAwIDEgMCAyLjEyMS0yLjEyMXptLTE2LjI1LTUuNjI5YTggOCAwIDEgMSA4LTggOC4wMDkgOC4wMDkgMCAwIDEtOCA4elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xOS42ODEgMTEuNTE4aDQuOTM4djEuMjgyaC02Ljg4MXYtMS4wNDFsNC43OC02LjkwNmgtNC43NDh2LTEuMjk1aDYuN3YxLjAxNXpNMjMuMzQ0IDIyLjY0N2gtMy41OGwtLjc1IDIuMTUzaC0xLjY2OWwzLjQ5MS05LjI0MmgxLjQ0MWwzLjUgOS4yNDJoLTEuNjc3em0tMy4xMy0xLjI5NGgyLjY3OWwtMS4zNC0zLjgzNHpNMTQuODA1IDE4LjY4OWExLjI0OSAxLjI0OSAwIDAgMC0xLjc2NyAwbC0yLjE1NiAyLjE1NnYtMTYuMDI5YTEuMjUgMS4yNSAwIDAgMC0yLjUgMHYxNi4wMThsLTIuMTItMi4xMmExLjI0OCAxLjI0OCAwIDAgMC0xLjc2NiAwbC0uMDEzLjAxM2ExLjI0OCAxLjI0OCAwIDAgMCAwIDEuNzY2bDQuMjc2IDQuMjc2YTEuMjQ5IDEuMjQ5IDAgMCAwIDEuNzY1IDBsLjAxMy0uMDEzYS44OTMuODkzIDAgMCAwIC4wNi0uMDkxbDQuMjA4LTQuMjA4YTEuMjQ5IDEuMjQ5IDAgMCAwIDAtMS43Njh6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTIzLjM0NCAxMC42NDdoLTMuNThsLS43NSAyLjE1M2gtMS42NjlsMy40OTEtOS4yNDJoMS40NDFsMy41IDkuMjQyaC0xLjY3N3ptLTMuMTMtMS4yOTRoMi42NzlsLTEuMzQtMy44MzR6TTE5LjY4MSAyMy41MThoNC45Mzh2MS4yODJoLTYuODgxdi0xLjA0MWw0Ljc4LTYuOTA2aC00Ljc0OHYtMS4zaDYuN3YxLjAxNXpNMTQuODA1IDE4LjY5YTEuMjQ5IDEuMjQ5IDAgMCAwLTEuNzY3IDBsLTIuMTU2IDIuMTU1di0xNi4wMjlhMS4yNSAxLjI1IDAgMCAwLTIuNSAwdjE2LjAxOWwtMi4xMi0yLjEyMWExLjI1IDEuMjUgMCAwIDAtMS43NjYgMGwtLjAxMy4wMTNhMS4yNDggMS4yNDggMCAwIDAgMCAxLjc2Nmw0LjI3NiA0LjI3NmExLjI0OSAxLjI0OSAwIDAgMCAxLjc2NSAwbC4wMTMtLjAxM2ExIDEgMCAwIDAgLjA2LS4wOWw0LjIwOC00LjIwOWExLjI0OCAxLjI0OCAwIDAgMCAwLTEuNzY3elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxnIGlkPVxcXCJhXFxcIj48L2c+PGcgaWQ9XFxcImJcXFwiPjwvZz48ZyBpZD1cXFwiY1xcXCI+PC9nPjxnIGlkPVxcXCJkXFxcIj48L2c+PGcgaWQ9XFxcImVcXFwiPjwvZz48ZyBpZD1cXFwiZlxcXCI+PC9nPjxnIGlkPVxcXCJnXFxcIj48L2c+PGcgaWQ9XFxcImhcXFwiPjwvZz48ZyBpZD1cXFwiaVxcXCI+PC9nPjxnIGlkPVxcXCJqXFxcIj48L2c+PGcgaWQ9XFxcImtcXFwiPjwvZz48ZyBpZD1cXFwibFxcXCI+PC9nPjxnIGlkPVxcXCJtXFxcIj48L2c+PGcgaWQ9XFxcIm5cXFwiPjwvZz48ZyBpZD1cXFwib1xcXCI+PC9nPjxnIGlkPVxcXCJwXFxcIj48L2c+PGcgaWQ9XFxcInFcXFwiPjwvZz48ZyBpZD1cXFwiclxcXCI+PC9nPjxnIGlkPVxcXCJzXFxcIj48L2c+PGcgaWQ9XFxcInRcXFwiPjwvZz48ZyBpZD1cXFwidVxcXCI+PC9nPjxnIGlkPVxcXCJ2XFxcIj48L2c+PGcgaWQ9XFxcIndcXFwiPjwvZz48ZyBpZD1cXFwieFxcXCI+PC9nPjxnIGlkPVxcXCJ5XFxcIj48L2c+PGcgaWQ9XFxcImEmI3g2MDtcXFwiPjwvZz48ZyBpZD1cXFwiYWFcXFwiPjwvZz48ZyBpZD1cXFwiYWJcXFwiPjwvZz48ZyBpZD1cXFwiYWNcXFwiPjwvZz48ZyBpZD1cXFwiYWRcXFwiPjwvZz48ZyBpZD1cXFwiYWVcXFwiPjwvZz48ZyBpZD1cXFwiYWZcXFwiPjwvZz48ZyBpZD1cXFwiYWdcXFwiPjwvZz48ZyBpZD1cXFwiYWhcXFwiPjwvZz48ZyBpZD1cXFwiYWlcXFwiPjwvZz48ZyBpZD1cXFwiYWpcXFwiPjwvZz48ZyBpZD1cXFwiYWtcXFwiPjwvZz48ZyBpZD1cXFwiYWxcXFwiPjwvZz48ZyBpZD1cXFwiYW1cXFwiPjwvZz48ZyBpZD1cXFwiYW5cXFwiPjwvZz48ZyBpZD1cXFwiYW9cXFwiPjwvZz48ZyBpZD1cXFwiYXBcXFwiPjwvZz48ZyBpZD1cXFwiYXFcXFwiPjwvZz48ZyBpZD1cXFwiYXJcXFwiPjwvZz48ZyBpZD1cXFwiYXNcXFwiPjwvZz48ZyBpZD1cXFwiYXRcXFwiPjwvZz48ZyBpZD1cXFwiYXVcXFwiPjwvZz48ZyBpZD1cXFwiYXZcXFwiPjwvZz48ZyBpZD1cXFwiYXdcXFwiPjwvZz48ZyBpZD1cXFwiYXhcXFwiPjwvZz48ZyBpZD1cXFwiYXlcXFwiPjwvZz48ZyBpZD1cXFwiYiYjeDYwO1xcXCI+PC9nPjxnIGlkPVxcXCJiYVxcXCI+PC9nPjxnIGlkPVxcXCJiYlxcXCI+PC9nPjxnIGlkPVxcXCJiY1xcXCI+PC9nPjxnIGlkPVxcXCJiZFxcXCI+PC9nPjxnIGlkPVxcXCJiZVxcXCI+PC9nPjxnIGlkPVxcXCJiZlxcXCI+PC9nPjxnIGlkPVxcXCJiZ1xcXCI+PC9nPjxnIGlkPVxcXCJiaFxcXCI+PHBhdGggZD1cXFwiTTI1LjczLDFINC4yN2MtMS44MSwwLTMuMjcsMS40Ny0zLjI3LDMuMjdWMjUuNzNjMCwxLjgxLDEuNDcsMy4yNywzLjI3LDMuMjdIMjUuNzNjMS44MSwwLDMuMjctMS40NywzLjI3LTMuMjdWNC4yN2MwLTEuODEtMS40Ny0zLjI3LTMuMjctMy4yN1pNOSwyN0g0LjI3Yy0uNywwLTEuMjctLjU3LTEuMjctMS4yN3YtNC4yM2g2djUuNVptMC03LjVIM3YtNS41aDZ2NS41Wm0wLTcuNUgzVjdoNnY1Wm05LTNWMjdoLTdWN2g3djJabTksMTYuNzNjMCwuNy0uNTcsMS4yNy0xLjI3LDEuMjdoLTUuNzN2LTUuNWg3djQuMjNabTAtNi4yM2gtN3YtNS41aDd2NS41Wm0wLTcuNWgtN1Y3aDd2NVpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi9wcm9wZXJ0eVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhY3Rpb246ICgpID0+IHZvaWQ7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgdmlzaWJsZT86IGJvb2xlYW47XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIHN2Zz86IHN0cmluZztcbiAgICBjb250YWluZXI/OiBzdHJpbmc7XG4gICAgY3NzQ2xhc3Nlcz86IHN0cmluZztcbiAgICBjc3NJbWFnZT86IHN0cmluZztcbiAgICBjc3NMYWJlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEFjdGlvbiBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBJQWN0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSB8fCB7fSkuZm9yRWFjaChrZXkgPT4gdGhpc1trZXldID0gc291cmNlW2tleV0pO1xuICAgIH1cbiAgICBAcHJvcGVydHkoKSBuYW1lOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgYWN0aW9uOiAoKSA9PiB2b2lkO1xuICAgIEBwcm9wZXJ0eSgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgdmlzaWJsZTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBlbmFibGVkOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBpY29uOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgc3ZnOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgY3NzQ2xhc3Nlczogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNzc0ltYWdlOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgY3NzTGFiZWw6IHN0cmluZztcbn0iLCJpbXBvcnQgXCIuL2FjdGlvbnMuc2Nzc1wiO1xuXG4iLCJpbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBEZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcblxuZXhwb3J0IGNsYXNzIEhhc2hUYWJsZVN0b3JhZ2Uge1xuICAgIHByb3RlY3RlZCBoYXNoID0ge307XG4gICAgcHVibGljIG93bmVyOiBhbnk7XG4gICAgcHVibGljIGdldFZhbHVlKG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5oYXNoW25hbWVdO1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYXNoW25hbWVdID0gdmFsO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUxpc3RuZXJzOiB7W3Byb3BlcnR5TmFtZTogc3RyaW5nXToge1trZXk6IHN0cmluZ106IChvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkIH19ID0ge307XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjdXJyZW50RGVwZW5kZW5jaXM6IERlcGVuZGVuY2llcyA9IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUHJvcGVydGllc1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgSGFzaFRhYmxlU3RvcmFnZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGZpbmlzaENvbGxlY3REZXBlbmRlbmNpZXMoKTogRGVwZW5kZW5jaWVzIHtcbiAgICAgIGNvbnN0IGRlcHMgPSBCYXNlLmN1cnJlbnREZXBlbmRlbmNpcztcbiAgICAgIEJhc2UuY3VycmVudERlcGVuZGVuY2lzID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIGRlcHM7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRDb2xsZWN0RGVwZW5kZW5jaWVzKHVwZGF0ZXI6ICgpID0+IHZvaWQsIHRhcmdldDogQmFzZSwgcHJvcGVydHk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKEJhc2UuY3VycmVudERlcGVuZGVuY2lzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdCB0byBjb2xsZWN0IG5lc3RlZCBkZXBlbmRlbmNpZXMuIE5lc3RlZCBkZXBlbmRlbmNpZXMgYXJlIG5vdCBzdXBwb3J0ZWQuXCIpO1xuICAgICAgfVxuICAgICAgQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMgPSBuZXcgRGVwZW5kZW5jaWVzKHVwZGF0ZXIsIHRhcmdldCwgcHJvcGVydHkpO1xuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBjb2xsZWN0RGVwZW5kZW5jeSh0YXJnZXQ6IEJhc2UsIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmIChCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICBCYXNlLmN1cnJlbnREZXBlbmRlbmNpcy5hZGREZXBlbmRlbmN5KHRhcmdldCwgcHJvcGVydHkpO1xuICAgIH1cbiAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlID0gQmFzZS5jcmVhdGVQcm9wZXJ0aWVzU3RvcmFnZSgpKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5vd25lciA9IHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHlOYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgbGV0IHByb3BlcnR5TGlzdG5lcnMgPSB0aGlzLnByb3BlcnR5VmFsdWVMaXN0bmVyc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZighIXByb3BlcnR5TGlzdG5lcnMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnR5TGlzdG5lcnMpLmZvckVhY2goa2V5ID0+IHByb3BlcnR5TGlzdG5lcnNba2V5XShvbGRWYWx1ZSwgbmV3VmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIEJhc2UuY29sbGVjdERlcGVuZGVuY3kodGhpcywgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VmFsdWUocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0VmFsdWUocHJvcGVydHlOYW1lLCBuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55LCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICBpZighaXNFcXVhbChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5VmFsdWVDb3JlKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5vblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5TmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlclByb3BlcnR5VmFsdWVMaXN0bmVyKHByb3BlcnR5TmFtZTogc3RyaW5nLCBsaXN0bmVyOiAob2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSkgPT4gdm9pZCwga2V5OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eUxpc3RuZXJzID0gdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYoIXByb3BlcnR5TGlzdG5lcnMpIHtcbiAgICAgICAgICAgIHByb3BlcnR5TGlzdG5lcnMgPSB7fVxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5TGlzdG5lcnM7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGVydHlMaXN0bmVyc1trZXldID0gbGlzdG5lcjtcbiAgICB9XG4gICAgcHVibGljIHVuUmVnaXN0ZXJQcm9wZXJ0eVZhbHVlTGlzdG5lcihwcm9wZXJ0eU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eUxpc3RuZXJzID0gdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYoISFwcm9wZXJ0eUxpc3RuZXJzKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJvcGVydHlMaXN0bmVyc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY2llcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgRGVwZW5kZW5jaWVzQ291bnQgPSAwO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjdXJyZW50RGVwZW5kZW5jeTogKCkgPT4gdm9pZCwgcHVibGljIHRhcmdldDogQmFzZSwgcHVibGljIHByb3BlcnR5OiBzdHJpbmcpIHtcbiAgICB9XG4gICAgZGVwZW5kZW5jaWVzOiBBcnJheTx7IG9iajogQmFzZSwgcHJvcDogc3RyaW5nLCBpZDogc3RyaW5nIH0+ID0gW107XG4gICAgaWQ6IHN0cmluZyA9IFwiXCIgKyAoKytEZXBlbmRlbmNpZXMuRGVwZW5kZW5jaWVzQ291bnQpO1xuICAgIGFkZERlcGVuZGVuY3kodGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy50YXJnZXQgPT09IHRhcmdldCAmJiB0aGlzLnByb3BlcnR5ID09PSBwcm9wZXJ0eSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMuZGVwZW5kZW5jaWVzLnNvbWUoZGVwZW5kZW5jeSA9PiBkZXBlbmRlbmN5Lm9iaiA9PT0gdGFyZ2V0ICYmIGRlcGVuZGVuY3kucHJvcCA9PT0gcHJvcGVydHkpKVxuICAgICAgICByZXR1cm47XG4gIFxuICAgICAgdGhpcy5kZXBlbmRlbmNpZXMucHVzaCh7XG4gICAgICAgIG9iajogdGFyZ2V0LFxuICAgICAgICBwcm9wOiBwcm9wZXJ0eSxcbiAgICAgICAgaWQ6IHRoaXMuaWRcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0LnJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIocHJvcGVydHksIHRoaXMuY3VycmVudERlcGVuZGVuY3ksIHRoaXMuaWQpO1xuICBcbiAgICB9XG4gICAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLmZvckVhY2goZGVwZW5kZW5jeSA9PiB7XG4gICAgICAgIGRlcGVuZGVuY3kub2JqLnVuUmVnaXN0ZXJQcm9wZXJ0eVZhbHVlTGlzdG5lcihkZXBlbmRlbmN5LnByb3AsIGRlcGVuZGVuY3kuaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgY2xhc3MgQ29tcHV0ZWRVcGRhdGVyPFQgPSBhbnk+IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENvbXB1dGVkVXBkYXRlclR5cGUgPSBcIl9fZGVwZW5kZW5jeV9jb21wdXRlZFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgQ29sbGVjdERlcGVuZGVuY2llczxVID0gYW55PihvYmo6IEJhc2UsIGNvbXB1dGVkVXBkYXRlcjogQ29tcHV0ZWRVcGRhdGVyPFU+LCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IFUge1xuICAgICAgQmFzZS5zdGFydENvbGxlY3REZXBlbmRlbmNpZXMoKCkgPT4gb2JqW3Byb3BlcnR5TmFtZV0gPSBjb21wdXRlZFVwZGF0ZXIudXBkYXRlcigpLCBvYmosIHByb3BlcnR5TmFtZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBjb21wdXRlZFVwZGF0ZXIudXBkYXRlcigpO1xuICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gQmFzZS5maW5pc2hDb2xsZWN0RGVwZW5kZW5jaWVzKCk7XG4gICAgICBjb21wdXRlZFVwZGF0ZXIuc2V0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwZGF0ZXI6ICgpID0+IFQpIHtcbiAgICB9XG4gICAgcmVhZG9ubHkgdHlwZSA9IENvbXB1dGVkVXBkYXRlci5Db21wdXRlZFVwZGF0ZXJUeXBlO1xuICAgIHB1YmxpYyBnZXQgdXBkYXRlcigpOiAoKSA9PiBUIHtcbiAgICAgIHJldHVybiB0aGlzLl91cGRhdGVyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzKTogdm9pZCB7XG4gICAgICB0aGlzLmNsZWFyRGVwZW5kZW5jaWVzKCk7XG4gICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldERlcGVuZGVuY2llcygpOiBEZXBlbmRlbmNpZXMge1xuICAgICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jaWVzO1xuICAgIH1cbiAgICBwdWJsaWMgb2JzZXJ2ZSh0YXJnZXQ6IEJhc2UsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICBDb21wdXRlZFVwZGF0ZXIuQ29sbGVjdERlcGVuZGVuY2llcyh0YXJnZXQsIHRoaXMsIHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIHByaXZhdGUgY2xlYXJEZXBlbmRlbmNpZXMoKSB7XG4gICAgICBpZiAodGhpcy5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpOiBhbnkge1xuICAgICAgdGhpcy5jbGVhckRlcGVuZGVuY2llcygpO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgXCIuL2Ryb3Bkb3duLWFjdGlvbnMuc2Nzc1wiO1xuIiwiaW1wb3J0IHsgQ29tcHV0ZWRVcGRhdGVyIH0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BlcnR5RGVjb3JhdG9yT3B0aW9ucyB7XG4gICAgZGVmYXVsdFZhbHVlPzogYW55O1xuICAgIG9uU2V0PzogKHZhbDogYW55LCB0YXJnZXQ6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5KG9wdGlvbnM/OiBJUHJvcGVydHlEZWNvcmF0b3JPcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHByb2Nlc3NDb21wdXRlZFVwZGF0ZXIgPSAob2JqOiBhbnksIHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiB2YWwudHlwZSA9PT0gQ29tcHV0ZWRVcGRhdGVyLkNvbXB1dGVkVXBkYXRlclR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29tcHV0ZWRVcGRhdGVyLkNvbGxlY3REZXBlbmRlbmNpZXMob2JqLCB2YWwsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBnZXREZWZhdWx0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGVmYXVsdFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKCEhb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSkgPyBbXS5jb25jYXQoZGVmYXVsdFZhbHVlKSA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHlWYWx1ZShrZXksIGdldERlZmF1bHRWYWx1ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWw6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcHJvY2Vzc0NvbXB1dGVkVXBkYXRlcih0aGlzLCB2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHlWYWx1ZShrZXksIG5ld1ZhbHVlLCBnZXREZWZhdWx0VmFsdWUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKCEhb3B0aW9ucyAmJiBvcHRpb25zLm9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25TZXQobmV3VmFsdWUsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xuXG50eXBlICBUT3BlcmF0aW9uID0gXCJFUVwiIHwgXCJORVFcIiB8IFwiR1wiIHwgXCJMXCIgfCBcIkdFUVwiIHwgXCJMRVFcIiB8IFwiSVNOXCIgfCBcIklTTk5cIiB8IFwiQ1wiO1xuZXhwb3J0IGludGVyZmFjZSBJRmluZE9wZXJhdGlvbiB7XG4gICAgb3A6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgZnVuYz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZENvbXBhcmUge1xuICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgb3A6IFRPcGVyYXRpb247XG4gICAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZE9wZXJhbmQge1xuICAgIGxldmVsdXA6IGJvb2xlYW47XG4gICAgb3BlcmFuZDoge1xuICAgICAgICBmaWVsZDogc3RyaW5nLFxuICAgICAgICBvcDogVE9wZXJhdGlvbixcbiAgICAgICAgdmFsdWU6IHN0cmluZyB8IE51bWJlcixcbiAgICAgICAgcGF0aD86IHN0cmluZ1tdLFxuICAgICAgICBzZWFyY2hfaW5fa2V5PzogYm9vbGVhbixcbiAgICAgICAgbV9vcmRlcj86IGJvb2xlYW4sXG4gICAgICAgIGZ1bmM/OiBzdHJpbmcsXG4gICAgfSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWdncmVnYXRlIHtcbiAgICBmdW5jOiBzdHJpbmcsXG4gICAgZmllbGQ6IHN0cmluZyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZExvZ2ljIHtcbiAgICBzdHJpY3Q6IGJvb2xlYW47XG4gICAgb3BlcmFuZHM6IElGaW5kT3BlcmFuZFtdO1xuICAgIGFnZ3JlZ2F0ZT86IElBZ2dyZWdhdGVbXTtcbn1cblxuZXhwb3J0IHZhciBvcGVyYXRpb25zTWFwOiB7IFtpbmRleDogc3RyaW5nXTogSUZpbmRPcGVyYXRpb25bXSB9ID0ge307XG5cbnZhciBkZWZhdWx0T3BlcmF0aW9uc01hcCA9IHtcbiAgICBzdHJpbmc6IFtcbiAgICAgICAge29wOiBcIkNcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmNvbnRhaW5zXCIpfSxcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgZGF0ZTogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmRhdGVlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlbGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgZGF0ZXRpbWU6IFtcbiAgICAgICAge29wOiBcIkdcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmRhdGVncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmRhdGVsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICBpbnRlZ2VyOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJub3RlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiR0VRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTEVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIG51bWVyaWM6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJORVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcm5vdGVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkdcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmdyZWF0ZXJcIil9LFxuICAgICAgICB7b3A6IFwiTFwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJHRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmdyZWF0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJMRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgYm9vbDogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICBdLFxuICAgIG1vbmV5OiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJub3RlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiR0VRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTEVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIHJhZGlvYnV0dG9uOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxufVxuT2JqZWN0LmtleXMoZGVmYXVsdE9wZXJhdGlvbnNNYXApLmZvckVhY2goa2V5ID0+IG9wZXJhdGlvbnNNYXBba2V5XSA9IGRlZmF1bHRPcGVyYXRpb25zTWFwW2tleV0pO1xuIiwiZXhwb3J0IGNvbnN0IGFkZCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9pdGVtLWFkZC5zdmcnKTtcbmV4cG9ydCBjb25zdCBlcXVhbCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9lcXVhbC5zdmcnKTtcbmV4cG9ydCBjb25zdCB0YWJsZSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl90YWJsZS1tZXJnZS5zdmcnKTtcbmV4cG9ydCBjb25zdCBzYXZlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2l0ZW0tc2F2ZS5zdmcnKTtcbmV4cG9ydCBjb25zdCBkZWwgPSByZXF1aXJlKCcuL2ljb25zL2ljb25faXRlbS1kZWxldGUuc3ZnJyk7XG5leHBvcnQgY29uc3QgcGFzdGUgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fcGFzdGUuc3ZnJyk7XG5leHBvcnQgY29uc3QgbW9yZV9zcSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9tb3JlX3NxLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGNoZWNrID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2NoZWNrLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHNvcnR1cCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9zb3J0LXVwLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHNvcnRkb3duID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3NvcnQtZG93bi5zdmcnKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fZmlsdGVyLnN2ZycpO1xuZXhwb3J0IGNvbnN0IG1vcmUgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fbW9yZS5zdmcnKTtcbmV4cG9ydCBjb25zdCBlZGl0ID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2VkaXQuc3ZnJyk7XG5leHBvcnQgY29uc3QgYXJyb3dyaWdodCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9hcnJvdy1yaWdodC5zdmcnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2ggPSByZXF1aXJlKCcuL2ljb25zL2ljb25fc2VhcmNoLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGNyb3NzID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2Nyb3NzLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGFycm93ZG93biA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9hcnJvdy1kb3duLnN2ZycpO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vY29yZS9hY3Rpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvYWN0aW9uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9kcm9wZG93bi1hY3Rpb25zXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL2ZpbmRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jZWxsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW5cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL3N1bW1hcnlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NvbHVtbi1maWx0ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvZmlsdGVyLWRlZmF1bHRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1zZWxlY3RcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvbnVtYmVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9ib29sXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL2FycmF5LWRhdGEtcHJvdmlkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL3JlbW90ZS1kYXRhLXByb3ZpZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vaWNvblwiXG4iLCJleHBvcnQgY2xhc3MgTG9jYWxpemF0aW9uIHtcbiAgICBzdGF0aWMgZW5nbGlzaFN0cmluZ3MgPSB7XG4gICAgICAgIGZpbHRlcmNvbnRhaW5zOiBcIkNvbnRhaW5zXCIsXG4gICAgICAgIGZpbHRlcmVxdWFsOiBcIkVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmlzbnVsbDogXCJFbXB0eVwiLFxuICAgICAgICBmaWx0ZXJpc25vdG51bGw6IFwiTm90IGVtcHR5XCIsXG4gICAgICAgIGZpbHRlcmdyZWF0ZXI6IFwiR3JlYXRlclwiLFxuICAgICAgICBmaWx0ZXJsZXNzOiBcIkxlc3NcIixcbiAgICAgICAgZmlsdGVyZ3JlYXRlcmVxdWFsOiBcIkdyZWF0ZXIgb3IgZXF1YWxcIixcbiAgICAgICAgZmlsdGVybGVzc2VxdWFsOiBcIkxlc3Mgb3IgZXF1YWxcIixcbiAgICAgICAgZmlsdGVyZGF0ZW5vdGVxdWFsOiBcIk5vdCBlcXVhbFwiLFxuICAgICAgICBmaWx0ZXJkYXRlZXF1YWw6IFwiRXF1YWxcIixcbiAgICAgICAgZmlsdGVyZGF0ZWdyZWF0ZXI6IFwiRnJvbVwiLFxuICAgICAgICBmaWx0ZXJkYXRlbGVzczogXCJUb1wiLFxuICAgICAgICBub0RhdGE6IFwiTm8gRGF0YVwiXG4gICAgfTtcbiAgICBzdGF0aWMgZ2V0U3RyaW5nID0gKHN0cmluZ0lkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5nbGlzaFN0cmluZ3Nbc3RyaW5nSWRdO1xuICAgIH0gXG59IiwiY29uc3QgY29tcG9uZW50czogQXJyYXk8e1tpbmRleDogc3RyaW5nXTogKHByb3BzOiBhbnkpID0+IEpTWC5FbGVtZW50fT4gPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nLCBjb21wb25lbnRDcmVhdG9yOiAocHJvcHM6IGFueSkgPT4gSlNYLkVsZW1lbnQpIHtcbiAgICBjb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID0gY29tcG9uZW50Q3JlYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50TmFtZTogc3RyaW5nKSB7XG4gICAgZGVsZXRlIGNvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFicmlzQ29tcG9uZW50UHJvcHMge1xuICAgIGNvbXBvbmVudE5hbWU6IHN0cmluZztcbiAgICBjb21wb25lbnRQcm9wczogYW55O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQWJyaXNDb21wb25lbnQoeyBjb21wb25lbnROYW1lLCBjb21wb25lbnRQcm9wcyB9OiBJQWJyaXNDb21wb25lbnRQcm9wcykge1xuICAgIGNvbnN0IGNvbXBvbmVudENyZWF0b3IgPSBjb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuICAgIGlmKCFjb21wb25lbnRDcmVhdG9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgJ1wiICsgY29tcG9uZW50TmFtZSArIFwiJyBjb21wb25lbnQgaGFzbid0IGZvdW5kLlwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRDcmVhdG9yKGNvbXBvbmVudFByb3BzKTtcbn0iLCJpbXBvcnQgeyBCYXNlLCBIYXNoVGFibGVTdG9yYWdlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9hYnJpcy1jb21wb25lbnRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jZWxsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jZWxsLWVkaXRvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbC12aWV3ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL3Jvd1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvc3VtbWFyeVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvc2VhcmNoXCI7XG4vLyBleHBvcnQgKiBmcm9tIFwiLi90YWJsZS9maWx0ZXItZGVmYXVsdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY29sdW1uLWZpbHRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvZmlsdGVyLXNlbGVjdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vd2lkZ2V0cy9hY3Rpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvYWN0aW9uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vd2lkZ2V0cy9kcm9wZG93bi1hY3Rpb25zXCI7XG4vLyBleHBvcnQgKiBmcm9tIFwiLi93aWRnZXRzL2ljb25cIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvYm9vbC1jZWxsLWVkaXRvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvYm9vbC1jZWxsLXZpZXdlclwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi5cIjtcblxuZXhwb3J0IGNsYXNzIFJlYWN0SGFzaFRhYmxlU3RvcmFnZSBleHRlbmRzIEhhc2hUYWJsZVN0b3JhZ2Uge1xuICBwcml2YXRlIGxpbmtBcnJheVRvT2JzZXJ2YWJsZShhcnJheTogQXJyYXk8YW55Pikge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdLmNvbmNhdChhcnJheSk7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgW1wicG9wXCIsIFwicHVzaFwiLCBcInNwbGljZVwiLCBcInNsaWNlXCIsIFwic2hpZnRcIiwgXCJ1bnNoaWZ0XCJdLmZvckVhY2goXG4gICAgICAoZnVuY05hbWUpID0+IHtcbiAgICAgICAgcmVzdWx0W2Z1bmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCBmdW5jUmVzID0gQXJyYXkucHJvdG90eXBlW2Z1bmNOYW1lXS5hcHBseShyZXN1bHQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlW2Z1bmNOYW1lXS5hcHBseShhcnJheSwgYXJndW1lbnRzKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHNlbGYub3duZXIuX190cmlnZ2VyVXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHNlbGYub3duZXIuX190cmlnZ2VyVXBkYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmdW5jUmVzO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBwdWJsaWMgZ2V0VmFsdWUobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHN1cGVyLmdldFZhbHVlKG5hbWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgaWYgKHZhbHVlID09PSBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHRoaXMuaGFzaFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpbmtBcnJheVRvT2JzZXJ2YWJsZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgc2V0VmFsdWUobmFtZTogc3RyaW5nLCB2YWw6IGFueSkge1xuICAgIHN1cGVyLnNldFZhbHVlKG5hbWUsIHZhbCk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm93bmVyLl9fdHJpZ2dlclVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLm93bmVyLl9fdHJpZ2dlclVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5CYXNlLmNyZWF0ZVByb3BlcnRpZXNTdG9yYWdlID0gKCkgPT4gbmV3IFJlYWN0SGFzaFRhYmxlU3RvcmFnZSgpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgbWFrZVJlYWN0aXZlTW9kZWwgPVxuICAobW9kZWw6IGFueSwgdmFsOiBudW1iZXIsIHVwZGF0ZXI6ICh2YWw6IG51bWJlcikgPT4gdm9pZCkgPT4gKCkgPT4ge1xuICAgIG1vZGVsW1wiX190cmlnZ2VyVXBkYXRlXCJdID0gKCkgPT4ge1xuICAgICAgdXBkYXRlcih2YWwgKyAxKTtcbiAgICB9O1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkZWxldGUgbW9kZWxbXCJfX3RyaWdnZXJVcGRhdGVcIl07XG4gICAgfTtcbiAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSZWFjdGl2ZShtb2RlbDogYW55KSB7XG4gIGNvbnN0IFt1cGRhdGUsIHVwZGF0ZXJdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgdXNlRWZmZWN0KG1ha2VSZWFjdGl2ZU1vZGVsKG1vZGVsLCB1cGRhdGUsIHVwZGF0ZXIpKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vYWJyaXMtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBtYWtlUmVhY3RpdmUgfSBmcm9tIFwiLi4vcmVhY3Rpdml0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbEVkaXRvclByb3BzIH0gZnJvbSBcIi4vY2VsbC1lZGl0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlNEJvb2xDZWxsRWRpdG9yKHsgbW9kZWwgfTogSVRhYmxlQ2VsbEVkaXRvclByb3BzKSB7XG4gIG1ha2VSZWFjdGl2ZShtb2RlbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19ib29sLWNlbGwtZWRpdG9yXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2hlY2tlZD17bW9kZWwudmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIG1vZGVsLnZhbHVlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICBtb2RlbC5jb21wbGV0ZSh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbnJlZ2lzdGVyQ29tcG9uZW50KFwiYm9vbC1jZWxsLWVkaXRvclwiLCBUYWJsZTRCb29sQ2VsbEVkaXRvcik7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuLi9hYnJpcy1jb21wb25lbnRcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsVmlld2VyUHJvcHMgfSBmcm9tIFwiLi9jZWxsLXZpZXdlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFibGU0Qm9vbENlbGxWaWV3ZXIoeyBjZWxsLCBjbGFzc05hbWUgfTogSVRhYmxlQ2VsbFZpZXdlclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWUgKyBcIiBhYnJpcy10YWJsZV9fYm9vbC1jZWxsLXZpZXdlclwifT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19ib29sLWNlbGwtdmlld2VyLWNpcmNsZVwiXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY2VsbC5kYXRhID8gXCJncmVlblwiIDogXCJyZWRcIiB9fVxuICAgICAgPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbnJlZ2lzdGVyQ29tcG9uZW50KFwiYm9vbC1jZWxsLXZpZXdlclwiLCBUYWJsZTRCb29sQ2VsbFZpZXdlcik7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnBsYWNlRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NlbGwtZWRpdG9yXCI7XG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuLi9hYnJpcy1jb21wb25lbnRcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ2VsbEVkaXRvclByb3BzIHtcbiAgbW9kZWw6IElucGxhY2VFZGl0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZTRDZWxsRWRpdG9yKHsgbW9kZWwgfTogSVRhYmxlQ2VsbEVkaXRvclByb3BzKSB7XG4gIG1ha2VSZWFjdGl2ZShtb2RlbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19jZWxsLWVkaXRvclwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17bW9kZWwudmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gbW9kZWwudmFsdWUgPSBlLnRhcmdldC52YWx1ZX1cbiAgICAgICAgb25LZXlVcD17ZSA9PiBtb2RlbC5wcm9jZXNzS2V5VXAoZS5uYXRpdmVFdmVudCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5yZWdpc3RlckNvbXBvbmVudChcImFicmlzLWNlbGwtZWRpdG9yXCIsIFRhYmxlNENlbGxFZGl0b3IpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsXCI7XG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuLi9hYnJpcy1jb21wb25lbnRcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ2VsbFZpZXdlclByb3BzIHtcbiAgY2VsbDogSVRhYmxlQ2VsbDtcbiAgY2xhc3NOYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlNENlbGxWaWV3ZXIoeyBjZWxsLCBjbGFzc05hbWUgfTogSVRhYmxlQ2VsbFZpZXdlclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjZWxsLnRleHQgfX1cbiAgICA+PC9zcGFuPlxuICApO1xufVxuXG5yZWdpc3RlckNvbXBvbmVudChcImFicmlzLWNlbGwtdmlld2VyXCIsIFRhYmxlNENlbGxWaWV3ZXIpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGVXaWRnZXQgfSBmcm9tIFwiLi4vLi4vdGFibGVcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwsIFRhYmxlQ2VsbCB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsXCI7XG5pbXBvcnQgeyBBYnJpc0NvbXBvbmVudCB9IGZyb20gXCIuLi9hYnJpcy1jb21wb25lbnRcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5pbXBvcnQgeyBUYWJsZTRDZWxsRWRpdG9yIH0gZnJvbSBcIi4vY2VsbC1lZGl0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDZWxsUHJvcHMge1xuICB0YWJsZTogVGFibGVXaWRnZXQ7XG4gIGNlbGw6IElUYWJsZUNlbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZTRDZWxsKHsgdGFibGUsIGNlbGwgfTogSVRhYmxlQ2VsbFByb3BzKSB7XG4gIG1ha2VSZWFjdGl2ZShjZWxsKTtcblxuICBjb25zdCBpc0VkaXRNb2RlID0gISFjZWxsLmlucGxhY2VFZGl0b3IgJiYgdGFibGUuY29uZmlnLmVuYWJsZUVkaXQ7XG4gIGNvbnN0IGlzTWVyZ2VkQ2VsbCA9IGNlbGwuY291bnQgPiAxICYmIHRhYmxlLmlzTWVyZ2Vk0KFlbGxzO1xuXG4gIGlmICghaXNFZGl0TW9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17VGFibGVDZWxsLmdldENvbnRhaW5lckNzcyhjZWxsLCBpc01lcmdlZENlbGwpfVxuICAgICAgICBzdHlsZT17eyB0b3A6IGlzTWVyZ2VkQ2VsbCA/IHRhYmxlLnRhYmxlSGVhZEhlaWdodCAtIDIgKyBcInB4XCIgOiB1bmRlZmluZWQgfX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IHRhYmxlLnN0YXJ0RWRpdENlbGwoY2VsbCl9XG4gICAgICA+XG4gICAgICAgIDxBYnJpc0NvbXBvbmVudCBjb21wb25lbnROYW1lPXtjZWxsLnZpZXdlcn0gY29tcG9uZW50UHJvcHM9e3sgY2VsbDogY2VsbCwgY2xhc3NOYW1lOiBUYWJsZUNlbGwuZ2V0Q29udGVudENzcyhjZWxsLCBpc01lcmdlZENlbGwpIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnJpc0NvbXBvbmVudCBjb21wb25lbnROYW1lPXtjZWxsLmVkaXRvcn0gY29tcG9uZW50UHJvcHM9e3sgbW9kZWw6IGNlbGwuaW5wbGFjZUVkaXRvciB9fSAvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vdGFibGUvY29sdW1uLWZpbHRlclwiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4uL3JlYWN0aXZpdHlcIjtcbmltcG9ydCAqIGFzIEljb25zIGZyb20gXCIuLi8uLi9pY29uXCI7XG5pbXBvcnQgeyBBYnJpc0ZpbHRlclNlbGVjdCB9IGZyb20gXCIuL2ZpbHRlci1zZWxlY3RcIjtcbmltcG9ydCB7IFRhYmxlRmlsdGVyU2VsZWN0IH0gZnJvbSBcIi4uLy4uL3RhYmxlL2ZpbHRlci1zZWxlY3RcIjtcbmltcG9ydCB7IENvbHVtbkZpbHRlckl0ZW0gfSBmcm9tIFwiLi4vLi4vdGFibGUvY29sdW1uLWZpbHRlci1pdGVtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBYnJpc0NvbHVtbkZpbHRlckl0ZW0oe1xuICBmaWx0ZXJJdGVtLFxufToge1xuICBmaWx0ZXJJdGVtOiBDb2x1bW5GaWx0ZXJJdGVtO1xufSkge1xuICBtYWtlUmVhY3RpdmUoZmlsdGVySXRlbSk7XG4gIGNvbnN0IFt0YWJsZUZpbHRlclNlbGVjdCwgc2VUYWJsZUZpbHRlclNlbGVjdF0gPSB1c2VTdGF0ZTxUYWJsZUZpbHRlclNlbGVjdD4oXG4gICAgbmV3IFRhYmxlRmlsdGVyU2VsZWN0KFxuICAgICAgZmlsdGVySXRlbS5maWx0ZXJJdGVtVmFsdWUsXG4gICAgICBmaWx0ZXJJdGVtLmNvbHVtbi5uYW1lLFxuICAgICAgZmlsdGVySXRlbS5jb2x1bW4udHlwZSxcbiAgICAgIGZpbHRlckl0ZW0uZ2V0Q29sdW1uRGF0YVxuICAgIClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGNsYXNzTmFtZT1cImFicmlzLWZpbHRlcl9fX29wZXJhdGlvblwiXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJJdGVtLm9wZXJhdGlvbj8udGV4dH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgZmlsdGVySXRlbS5vcGVyYXRpb24gPSBmaWx0ZXJJdGVtLm9wZXJhdGlvbnMuZmluZChcbiAgICAgICAgICAgIChvKSA9PiBvLnRleHQgPT09IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2ZpbHRlckl0ZW0ub3BlcmF0aW9ucy5tYXAoKHMpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17cy5vcH0gdGl0bGU9e3MudGV4dH0+XG4gICAgICAgICAgICB7cy50ZXh0fVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAge1xuICAgICAgICBmaWx0ZXJJdGVtLnNob3dPcGVyYW5kICYmIGZpbHRlckl0ZW0ub3BlcmF0aW9uLm9wID09IFwiRVFcIiAmJiAoXG4gICAgICAgICAgPEFicmlzRmlsdGVyU2VsZWN0IHZpZXdNb2RlbD17dGFibGVGaWx0ZXJTZWxlY3R9IC8+XG4gICAgICAgIClcblxuICAgICAgICAvKiA8YWJyaXMtZmlsdGVyLXNlbGVjdCBjbGFzcz1cImFicnMtZmlsdGVyX192YWx1ZVwiXG5wYXJhbXM9XCJ2YWx1ZTogZmlsdGVySXRlbVZhbHVlLCBjb2x1bW5OYW1lOiBjb2x1bW4ubmFtZSwgZ2V0Q29sdW1uRGF0YTogZ2V0Q29sdW1uRGF0YVwiPlxuPC9hYnJpcy1maWx0ZXItc2VsZWN0PiAqL1xuICAgICAgfVxuICAgICAge2ZpbHRlckl0ZW0uc2hvd09wZXJhbmQgJiYgZmlsdGVySXRlbS5vcGVyYXRpb24ub3AgIT0gXCJFUVwiICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLWZpbHRlcl9fb3BlcmFuZFwiXG4gICAgICAgICAgZGF0YS1iaW5kPVwiY29tcG9uZW50OiB7IG5hbWU6IGZpbHRlckVkaXRvck5hbWUsIHBhcmFtczogeyB2YWx1ZTogZmlsdGVySXRlbVZhbHVlLCBjb2x1bW46IGNvbHVtbiB9IH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKlwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpbHRlckl0ZW0uZmlsdGVySXRlbVZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAoZmlsdGVySXRlbS5maWx0ZXJJdGVtVmFsdWUudmFsdWUgPSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vdGFibGUvY29sdW1uLWZpbHRlclwiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4uL3JlYWN0aXZpdHlcIjtcbmltcG9ydCAqIGFzIEljb25zIGZyb20gXCIuLi8uLi9pY29uXCI7XG5pbXBvcnQgeyBBYnJpc0ZpbHRlclNlbGVjdCB9IGZyb20gXCIuL2ZpbHRlci1zZWxlY3RcIjtcbmltcG9ydCB7IFRhYmxlRmlsdGVyU2VsZWN0IH0gZnJvbSBcIi4uLy4uL3RhYmxlL2ZpbHRlci1zZWxlY3RcIjtcbmltcG9ydCB7IEFicmlzQ29sdW1uRmlsdGVySXRlbSB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQWJyaXNDb2x1bW5GaWx0ZXIoeyBjb250ZXh0IH06IHsgY29udGV4dDogRmlsdGVyQ29udGV4dCB9KSB7XG4gIG1ha2VSZWFjdGl2ZShjb250ZXh0KTtcbiAgaWYgKGNvbnRleHQuZmlsdGVySXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17Y29udGV4dC5jb2x1bW4ubmFtZX0gY2xhc3NOYW1lPVwiYWJyaXMtZmlsdGVyLWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtZmlsdGVyX190aXRsZSBhYnJpcy1maWx0ZXItdGV4dFwiPlxuICAgICAgICB7Y29udGV4dC5jb2x1bW4udGl0bGUgKyBcIjpcIn1cbiAgICAgIDwvZGl2PlxuICAgICAge2NvbnRleHQuZmlsdGVySXRlbXMubWFwKChmaWx0ZXJJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImFicmlzLWZpbHRlcl9fY29udGVudFwiPlxuICAgICAgICAgIHtpbmRleCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy1maWx0ZXJfX29wZXJhdG9yIGFicmlzLWZpbHRlci10ZXh0XCI+JjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEFicmlzQ29sdW1uRmlsdGVySXRlbVxuICAgICAgICAgICAgZmlsdGVySXRlbT17ZmlsdGVySXRlbX1cbiAgICAgICAgICA+PC9BYnJpc0NvbHVtbkZpbHRlckl0ZW0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtZmlsdGVyX19yZW1vdmVcIlxuICAgICAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6ICRwYXJlbnQucmVtb3ZlSXRlbSwgY2xpY2tCdWJibGU6IGZhbHNlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb250ZXh0LnJlbW92ZUl0ZW0oZmlsdGVySXRlbSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1maWx0ZXJfX3JlbW92ZS1pY29uIGFicmlzLXN2Zy1pY29uXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IEljb25zLmNyb3NzLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZUZpbHRlclNlbGVjdCB9IGZyb20gXCIuLi8uLi90YWJsZS9maWx0ZXItc2VsZWN0XCI7XG5pbXBvcnQgeyBtYWtlUmVhY3RpdmUgfSBmcm9tIFwiLi4vcmVhY3Rpdml0eVwiO1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSBcIi4uLy4uL2ljb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFicmlzRmlsdGVyU2VsZWN0KHtcbiAgdmlld01vZGVsLFxufToge1xuICB2aWV3TW9kZWw6IFRhYmxlRmlsdGVyU2VsZWN0O1xufSkge1xuICBtYWtlUmVhY3RpdmUodmlld01vZGVsKTtcbiAgY29uc3QgQ3VzdG9tVGFnID0gYGFicmlzLWZpbHRlci1zZWxlY3RgIGFzIGtleW9mIEpTWC5JbnRyaW5zaWNFbGVtZW50cztcbiAgcmV0dXJuIChcbiAgICA8Q3VzdG9tVGFnIGNsYXNzTmFtZT1cImFicnMtZmlsdGVyX192YWx1ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy1zZWxlY3Qtc2VsZWN0aW9uXCI+XG4gICAgICAgIHt2aWV3TW9kZWwuc2VsZWN0ZWRJdGVtcy5tYXAoKGkpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXNlbGVjdC1zZWxlY3Rpb24taXRlbVwiIGtleT17aS5uYW1lfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFicmlzLXNlbGVjdC1pdGVtLXRpdGxlXCI+e2kubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXNlbGVjdC1pdGVtLWNsb3NlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHZpZXdNb2RlbC5kZWxldGVJdGVtcyhpKX1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IEljb25zLmNyb3NzLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zZWxlY3QtYnV0dG9uIGFicmlzLXN2Zy1pY29uXCJcbiAgICAgICAgdGl0bGU9e3ZpZXdNb2RlbC50aXRsZX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IHZpZXdNb2RlbC50b2dnbGUobnVsbCwgZSl9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBJY29ucy5hcnJvd2Rvd24sXG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG4gICAgICB7dmlld01vZGVsLmlzT3BlbiAmJiAoXG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXNlbGVjdF9fZHJvcGRvd24tbWVudSBhYnJpcy1idXR0b24tdG9nZ2xlX19kcm9wZG93bi1tZW51XCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb259XG4gICAgICAgID5cbiAgICAgICAgICB7dmlld01vZGVsLmlzRmlsdGVyU2VhcmNoQnlUeXBlICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtc2VsZWN0X19kcm9wZG93bi1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXNlbGVjdF9fZHJvcGRvd24tc2VhcmNoXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmlld01vZGVsLmZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiAodmlld01vZGVsLmZpbHRlclRleHQgPSB2LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIqXCJcbiAgICAgICAgICAgICAgICAvLyAgIGRhdGEtYmluZD1cInZhbHVlVXBkYXRlOiAnYWZ0ZXJrZXlkb3duJ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt2aWV3TW9kZWwuZm91bmRJdGVtcy5tYXAoKGZpLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc2VsZWN0X19kcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHZpZXdNb2RlbC5jbGlja0l0ZW0oZmkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLWhpZGUtY2hlY2tcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dmlld01vZGVsLmlzQ2hlY2tlZChmaSl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7fX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXNlbGVjdF9fZHJvcGRvd24tY2hlY2tcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IEljb25zLmNoZWNrLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJyaXMtc2VsZWN0X19kcm9wZG93bi1sYWJlbFwiPntmaS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHt2aWV3TW9kZWwuaXNMb2FkTW9yZSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXNlbGVjdF9fZHJvcGRvd24tYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHZpZXdNb2RlbC5sb2FkTW9yZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnJpcy1hY3Rpb24tYnV0dG9uX19sYWJlbFwiPk1vcmU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L0N1c3RvbVRhZz5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZVdpZGdldCB9IGZyb20gXCIuLi8uLi90YWJsZVwiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4uL3JlYWN0aXZpdHlcIjtcbmltcG9ydCB7IEFicmlzQWN0aW9ucyB9IGZyb20gXCIuLi93aWRnZXRzL2FjdGlvbnNcIjtcbmltcG9ydCB7IEFicmlzRHJvcGRvd25BY3Rpb25zIH0gZnJvbSBcIi4uL3dpZGdldHMvZHJvcGRvd24tYWN0aW9uc1wiO1xuaW1wb3J0IHsgVGFibGVSb3cgfSBmcm9tIFwiLi9yb3dcIjtcbmltcG9ydCB7IFRhYmxlU3VtbWFyeSB9IGZyb20gXCIuLi8uLi90YWJsZS9zdW1tYXJ5XCI7XG5pbXBvcnQgeyBUYWJsZTRTdW1tYXJ5IH0gZnJvbSBcIi4vc3VtbWFyeVwiO1xuaW1wb3J0IHsgQWJyaXNTZWFyY2ggfSBmcm9tIFwiLi9zZWFyY2hcIjtcbmltcG9ydCB7IEFicmlzQ29sdW1uRmlsdGVyIH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlclwiO1xuXG5mdW5jdGlvbiBFbXB0eVRhYmxlKCkge1xuICByZXR1cm4gKFxuICAgIDx0ciBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fcm93XCI+XG4gICAgICA8dGRcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtY2VsbFwiXG4gICAgICAgIGNvbFNwYW49e1wiMTAwJVwiIGFzIGFueX1cbiAgICAgICAgZGF0YS1iaW5kPVwidGV4dDogbm9EYXRhVGV4dFwiXG4gICAgICA+XG4gICAgICAgIG5vRGF0YVxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufVxuXG5mdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKHRhYmxlOiBUYWJsZVdpZGdldCkge1xuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHRhYmxlLmNvbHVtbnMuZmlsdGVyKChjKSA9PiBjLnZpc2libGUpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKChjLCBpbmRleCkgPT4gKFxuICAgICAgICA8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYWJyaXMtdGFibGVfX3Jvd1wiPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlX19pY29uLWNoZWNrXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICB7dmlzaWJsZUNvbHVtbnMubWFwKCh2YykgPT4gKFxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1jZWxsX19jb250YWluZXIgYWJyaXMtdGFibGUtY2VsbF9fY29udGFpbmVyLS1sb2FkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWljb24tcm93LXRvb2xzIGFicmlzLXRhYmxlX19tb3JlXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRhYmxlLmljb25zLm1vcmUgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtaWNvbi1yb3ctdG9vbHMgYWJyaXMtdGFibGVfX2VkaXRcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGFibGUuaWNvbnMuZWRpdCB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlV2lkZ2V0UHJvcHMge1xuICBtb2RlbDogVGFibGVXaWRnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZTRUYWJsZSh7XG4gIG1vZGVsLFxufTogSVRhYmxlV2lkZ2V0UHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICBjb25zdCBkcm9wZG93bkFjdGlvbnMgPSBtb2RlbC5nZXRBY3Rpb25zKFwiZHJvcGRvd25BY3Rpb25zXCIpO1xuICBjb25zdCBbc3RhcnRSb3csIHNldFN0YXJ0Um93XSA9IHVzZVN0YXRlPG51bWJlciB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgY29uc3Qgcm9vdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgbWFrZVJlYWN0aXZlKG1vZGVsKTtcbiAgLy8gbWFrZVJlYWN0aXZlKG1vZGVsLnNlYXJjaE1vZGVsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtb2RlbC5pbml0aWFsaXplKHJvb3RSZWYuY3VycmVudC5wYXJlbnRFbGVtZW50KTtcbiAgfSk7XG4gIGNvbnN0IEN1c3RvbVRhZyA9IGBhYnJpcy1jb21wb25lbnRzLXRhYmxlYCBhcyBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHM7XG4gIHJldHVybiAoXG4gICAgPEN1c3RvbVRhZz5cbiAgICAgIDxkaXYgcmVmPXtyb290UmVmfSBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1yZXNpemFibGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtc2Nyb2xsLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJhYnJpcy10YWJsZVwiPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19oZWFkZXIgYWJyaXMtdGFibGUtc3RpY2t5LWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICA8dHIga2V5PVwiaGVhZGVyLXRvb2xzXCIgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaGVhZGVyLXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1oZWFkZXItdG9vbHNfX2NlbGxcIlxuICAgICAgICAgICAgICAgICAgY29sU3Bhbj17XCIxMDAlXCIgYXMgYW55fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaGVhZGVyLXRvb2xzX19jb250YWluZXIgYWJyaXMtdGFibGUtZ3JvdXAtaGVhZGVyLXRlY2huaWNhbC1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtcHJlaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1zZWFyY2gtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlbC5zaG93U2VhcmNoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QWJyaXNTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXttb2RlbC5pY29ucy5zZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoTW9kZWw9e21vZGVsLnNlYXJjaE1vZGVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9BYnJpc1NlYXJjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFicmlzQWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17bW9kZWwudG9wQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZWwuZHJvcGRvd25BY3Rpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QWJyaXNEcm9wZG93bkFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1kcm9wZG93biBhYnJpcy10YWJsZS1hY3Rpb25zLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e21vZGVsLmRyb3Bkb3duQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7bW9kZWwudmlld0ZpbHRlclRhYmxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1maWx0ZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZWwuY29sdW1ucy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWJyaXNDb2x1bW5GaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dD17Yy5maWx0ZXJDb250ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8dHIga2V5PVwiaGVhZGVyLXRpdGxlXCIgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICBrZXk9XCJyb3ctc2VsZWN0aW9uLWNlbGxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaGVhZGVyLXRpdGxlX19jZWxsIGFicmlzLXRhYmxlLXN3aXRjaFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmlzTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWJyaXMtdGFibGUtc3dpdGNoX190ZXh0IHN3aXRjaF9fdGV4dC0tc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImFicmlzLXRhYmxlLXN3aXRjaF9fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KF8pID0+IChtb2RlbC5pc051bWJlciA9ICFtb2RlbC5pc051bWJlcil9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAge21vZGVsLmNvbHVtbnNcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGMpID0+IGMudmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaGVhZGVyLXRpdGxlX19jZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gbW9kZWwubG9nTW91c2VPdXQoYywgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiBtb2RlbC5sb2dNb3VzZU1vdmUoYywgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoZSkgPT4gbW9kZWwubG9nTW91c2VVcChjLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRpdGxlX190ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5jbGlja0NvbHVtbihjLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2MudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRpdGxlX190b29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtdGl0bGVfX3NvcnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMub3JkZXIgPT09IGZhbHNlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogbW9kZWwuaWNvbnMuc29ydHVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLXRpdGxlX19zb3J0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm9yZGVyID09PSB0cnVlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogbW9kZWwuaWNvbnMuc29ydGRvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtdGl0bGVfX2ZpbHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGMuY2xpY2tGaWx0ZXIoYywgZS5uYXRpdmVFdmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogbW9kZWwuaWNvbnMuZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRpdGxlX3Jlc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IG1vZGVsLmxvZ01vdXNlT3ZlcihjLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBtb2RlbC5sb2dNb3VzZU91dChjLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4gbW9kZWwubG9nTW91c2VNb3ZlKGMsIGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoZSkgPT4gbW9kZWwubG9nTW91c2VVcChjLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gbW9kZWwubG9nTW91c2VEb3duKGMsIGUpfVxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAga2V5PVwicm93LWNvbnRleHQtbWVudS1jZWxsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWhlYWRlci10aXRsZV9fY2VsbFwiXG4gICAgICAgICAgICAgICAgPjwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19ib2R5XCI+XG4gICAgICAgICAgICAgIHttb2RlbC5yb3dzLmxlbmd0aCA9PSAwICYmIG1vZGVsLmxvYWRpbmdNdXRleCA9PSBmYWxzZVxuICAgICAgICAgICAgICAgID8gRW1wdHlUYWJsZSgpXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICB7bW9kZWwubG9hZGluZ011dGV4XG4gICAgICAgICAgICAgICAgPyBMb2FkaW5nSW5kaWNhdG9yKG1vZGVsKVxuICAgICAgICAgICAgICAgIDogbW9kZWwucm93cy5tYXAoKHIpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICBrZXk9e3IuaWQgfHwgci5udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlPXttb2RlbH1cbiAgICAgICAgICAgICAgICAgICAgcm93PXtyfVxuICAgICAgICAgICAgICAgICAgPjwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPHRmb290IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19mb290ZXIgYWJyaXMtdGFibGUtc3RpY2t5LWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICB7bW9kZWwuc2hvd1RhYmxlU3VtbWFyeSAmJiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT1cImZvb3Rlci1zdW1tYXJ5XCIgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtZm9vdGVyLXN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJmb290ZXItdGVjaC1jZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbCBhYnJpcy10YWJsZS1mb290ZXJfX2NlbGxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZS1pY29uLWVxdWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogbW9kZWwuaWNvbnMuZXF1YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAge21vZGVsLmNvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoYykgPT4gYy52aXNpYmxlKVxuICAgICAgICAgICAgICAgICAgICAubWFwKChjKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2MubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtZm9vdGVyX19jZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU0U3VtbWFyeSBzdW1tYXJ5PXtuZXcgVGFibGVTdW1tYXJ5KGMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgIGtleT1cImZvb3Rlci1jb250ZXh0LW1lbnUtY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGwgYWJyaXMtdGFibGUtZm9vdGVyX19jZWxsXCJcbiAgICAgICAgICAgICAgICAgID48L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDx0ciBrZXk9XCJmb290ZXItdG9vbHNcIiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1mb290ZXItdG9vbHNcIj5cbiAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWZvb3Rlci10b29sc19fY2VsbFwiXG4gICAgICAgICAgICAgICAgICBjb2xTcGFuPXtcIjEwMCVcIiBhcyBhbnl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1mb290ZXItdG9vbHNfX2NvbnRhaW5lciBhYnJpcy10YWJsZS1ncm91cC1oZWFkZXItdGVjaG5pY2FsLWNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1yb3ctbWFuYWdlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBYnJpc0FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17bW9kZWwuYm90dG9tQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaW5mb19fdG90YWwgYWJyaXMtdGFibGUtaW5mb19fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiVG90YWw6IFwiICsgbW9kZWwudG90YWxDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1pbmZvX19nby10b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtZ28tdG9fX3RleHQgYWJyaXMtdGFibGUtaW5mb19fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1nby10b19fdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vZGVsLnN0YXJ0Um93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXJ0Um93KCtlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLnN0YXJ0Um93ID0gK2UudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFicmlzLWJ0bi10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtZ28tdG9fX2ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IG1vZGVsLmljb25zLmFycm93cmlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoXykgPT4gKG1vZGVsLnN0YXJ0Um93ID0gc3RhcnRSb3cpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ3VzdG9tVGFnPlxuICApO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZVdpZGdldCB9IGZyb20gXCIuLi8uLi90YWJsZVwiO1xuaW1wb3J0IHsgSVRhYmxlUm93IH0gZnJvbSBcIi4uLy4uL3RhYmxlL3Jvd1wiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4uL3JlYWN0aXZpdHlcIjtcbmltcG9ydCB7IFRhYmxlNENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUm93UHJvcHMge1xuICB0YWJsZTogVGFibGVXaWRnZXQ7XG4gIHJvdzogSVRhYmxlUm93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFibGVSb3coeyB0YWJsZSwgcm93IH06IElUYWJsZVJvd1Byb3BzKSB7XG4gIG1ha2VSZWFjdGl2ZShyb3cpO1xuICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHRhYmxlLmNvbHVtbnMuZmlsdGVyKChjKSA9PiBjLnZpc2libGUpO1xuICByZXR1cm4gKFxuICAgIDx0clxuICAgICAga2V5PXtyb3cuaWQgfHwgcm93Lm51bWJlcn1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHJvdy5zZWxlY3RlZFxuICAgICAgICAgID8gXCJhYnJpcy10YWJsZV9fcm93IGFicmlzLXRhYmxlX19yb3ctLXNlbGVjdGVkXCJcbiAgICAgICAgICA6IFwiYWJyaXMtdGFibGVfX3Jvd1wiXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiB9fVxuICAgID5cbiAgICAgIDx0ZFxuICAgICAgICBrZXk9XCJ0ZWNobmljYWwtY2VsbFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxcIlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcm93LnNlbGVjdChyb3csIGUpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcIj5cbiAgICAgICAgICB7dGFibGUuaXNOdW1iZXIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19udW1iZXJcIj57cm93Lm51bWJlcn08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fY2hlY2tcIj5cbiAgICAgICAgICAgICAge3Jvdy5zZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGVfX2ljb24tY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0YWJsZS5pY29ucy5jaGVjayB9fVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICAgIHtyb3cuY2VsbHMubWFwKFxuICAgICAgICAoY2VsbCkgPT5cbiAgICAgICAgICAoY2VsbC5jb3VudCA+IDAgfHwgIXRhYmxlLmlzTWVyZ2Vk0KFlbGxzKSAmJiAoXG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAga2V5PXtjZWxsLm5hbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgXCJhYnJpcy10YWJsZS1jZWxsIFwiICtcbiAgICAgICAgICAgICAgICAoY2VsbC5jb3VudCA+IDEgJiYgdGFibGUuaXNNZXJnZWTQoWVsbHNcbiAgICAgICAgICAgICAgICAgID8gXCJhYnJpcy10YWJsZS1jZWxsLS1tZXJnZWQgXCJcbiAgICAgICAgICAgICAgICAgIDogXCJcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjZWxsLmNvbG9yIH19XG4gICAgICAgICAgICAgIHJvd1NwYW49e3RhYmxlLmlzTWVyZ2Vk0KFlbGxzID8gY2VsbC5jb3VudCA6IDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWJsZTRDZWxsXG4gICAgICAgICAgICAgICAga2V5PXtjZWxsLm5hbWV9XG4gICAgICAgICAgICAgICAgdGFibGU9e3RhYmxlfVxuICAgICAgICAgICAgICAgIGNlbGw9e2NlbGx9XG4gICAgICAgICAgICAgID48L1RhYmxlNENlbGw+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIClcbiAgICAgICl9XG4gICAgICA8dGRcbiAgICAgICAga2V5PVwiY29udGV4dC1tZW51LWNlbGxcIlxuICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsXCJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHJvdy5jbGljayhyb3csIGUpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZS1pY29uLXJvdy10b29scyBhYnJpcy10YWJsZV9fbW9yZVwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRhYmxlLmljb25zLm1vcmUgfX1cbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtaWNvbi1yb3ctdG9vbHMgYWJyaXMtdGFibGVfX2VkaXRcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0YWJsZS5pY29ucy5lZGl0IH19XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyF0YWJsZS5oYXNBY3RpdmVJbnBsYWNlRWRpdG9yICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19yb3ctLXNlbGVjdFwiPjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGVfX3Jvdy0tY29sb3JlZFwiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogcm93LmNvbG9yID8gcm93LmNvbG9yIDogXCJyZ2JhKDI0OCwyNDksMjUzKVwiIH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlV2lkZ2V0IH0gZnJvbSBcIi4uLy4uL3RhYmxlXCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCB9IGZyb20gXCIuLi8uLi90YWJsZS9zZWFyY2hcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFicmlzU2VhcmNoUHJvcHMge1xuICBpY29uOiBhbnk7XG4gIHNlYXJjaE1vZGVsOiBTZWFyY2hNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFicmlzU2VhcmNoKHsgaWNvbiwgc2VhcmNoTW9kZWwgfTogSUFicmlzU2VhcmNoUHJvcHMpIHtcbiAgbWFrZVJlYWN0aXZlKHNlYXJjaE1vZGVsKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXNlYXJjaFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17c2VhcmNoTW9kZWwuc2VhcmNoVmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBzZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc2VhcmNoX192YWx1ZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXNlYXJjaF9fYnV0dG9uXCJcbiAgICAgICAgdGl0bGU9XCJTZWFyY2hcIlxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2VhcmNoTW9kZWwuc2VhcmNoKHNlYXJjaE1vZGVsLnNlYXJjaFZhbHVlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXNlYXJjaF9faWNvblwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBpY29uIH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZVN1bW1hcnkgfSBmcm9tIFwiLi4vLi4vdGFibGUvc3VtbWFyeVwiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4uL3JlYWN0aXZpdHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTdW1tYXJ5UHJvcHMge1xuICBzdW1tYXJ5OiBUYWJsZVN1bW1hcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZTRTdW1tYXJ5KHsgc3VtbWFyeSB9OiBJVGFibGVTdW1tYXJ5UHJvcHMpIHtcbiAgbWFrZVJlYWN0aXZlKHN1bW1hcnkpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1zdW1tYXJ5X192YWx1ZVwiPntzdW1tYXJ5LnZhbHVlfTwvc3Bhbj5cbiAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtc3VtbWFyeV9fc2VsZWN0XCIgdmFsdWU9e3N1bW1hcnkuZnVuY30+XG4gICAgICAgIHtzdW1tYXJ5LnN1bW1hcnlJdGVtcyAmJlxuICAgICAgICAgIHN1bW1hcnkuc3VtbWFyeUl0ZW1zLm1hcCgocykgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cy52YWx1ZX0gdGl0bGU9e3MudGl0bGV9PlxuICAgICAgICAgICAgICB7cy50aXRsZX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCIuLi8uLi9jb3JlL2FjdGlvblwiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4uL3JlYWN0aXZpdHlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFicmlzQWN0aW9uKHsgYWN0aW9uIH06IHsgYWN0aW9uOiBBY3Rpb24gfSkge1xuICBtYWtlUmVhY3RpdmUoYWN0aW9uKTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBrZXk9e2FjdGlvbi5uYW1lfVxuICAgICAgLy8gZGlzYWJsZWQ9e2FjdGlvbi5lbmFibGVkID09PSBmYWxzZX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbi5hY3Rpb24oKX1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIFwiYWJyaXMtYnV0dG9uLS10cmFuc3BhcmVudCBhY3Rpb24tYnV0dG9uIGFicmlzLWFjdGlvbi1idXR0b24gXCIgK1xuICAgICAgICBhY3Rpb24uY3NzQ2xhc3NlcyArXG4gICAgICAgIChhY3Rpb24uYWN0aXZlID09PSB0cnVlID8gXCIgYWJyaXMtYWN0aW9uLS1hY3RpdmVcIiA6IFwiXCIpXG4gICAgICB9XG4gICAgICB0eXBlPXthY3Rpb25bXCJmb3JtSWRcIl0gIT09IHVuZGVmaW5lZCA/IFwic3VibWl0XCIgOiBcImJ1dHRvblwifVxuICAgICAgdGl0bGU9e2FjdGlvbi50aXRsZSB8fCBhY3Rpb24ubmFtZX1cbiAgICAgIC8vIGZvcm09e2FjdGlvbi5mb3JtSWR9XG4gICAgPlxuICAgICAge2FjdGlvbi5zdmcgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtYWN0aW9uLWJ1dHRvbl9faWNvbiBhYnJpcy1idXR0b25fX3N2Zy1pY29uXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFjdGlvbi5zdmcgfX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17XCJhYnJpcy1hY3Rpb24tYnV0dG9uX19sYWJlbCBcIiArIGFjdGlvbi5jc3NMYWJlbH1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogYWN0aW9uLnRpdGxlID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgID5cbiAgICAgICAge2FjdGlvbi50aXRsZX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWJyaXNBY3Rpb24gfSBmcm9tIFwiLi9hY3Rpb25cIjtcbmltcG9ydCAqIGFzIEljb25zIGZyb20gXCIuLi8uLi9pY29uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBYnJpc0FjdGlvbnMoe1xuICBjbGFzc05hbWUsXG4gIGFjdGlvbnMsXG59OiB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBhY3Rpb25zOiBhbnlbXTtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHthY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmKCFhY3Rpb24uYWN0aW9ucykge1xuICAgICAgICAgIHJldHVybiA8QWJyaXNBY3Rpb24ga2V5PXthY3Rpb24ubmFtZX0gYWN0aW9uPXthY3Rpb259IC8+XG4gICAgICAgIH1cbiAgICAgICAgaWYoYWN0aW9uLmFjdGlvbnMgJiYgYWN0aW9uLmFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJhYnJpcy1uZXN0ZWQtYWN0aW9ucyBhYnJpcy1hY3Rpb24tY29udGV4dC1idXR0b25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFicmlzLWJ1dHRvbl9fbGFiZWxcIiBkYXRhLWJpbmQ9XCJ0ZXh0OiB0aXRsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtbmVzdGVkLWFjdGlvbnNfX2Ryb3Bkb3duXCI+XG4gICAgICAgICAgICAgIHthY3Rpb24uYWN0aW9ucy5tYXAoKGEpID0+IChcbiAgICAgICAgICAgICAgICA8QWJyaXNBY3Rpb24ga2V5PXthLm5hbWV9IGFjdGlvbj17YX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWJyaXNBY3Rpb25zIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gQWJyaXNEcm9wZG93bkFjdGlvbnMoe1xuICBjbGFzc05hbWUsXG4gIGFjdGlvbnMsXG59OiB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBhY3Rpb25zOiBhbnlbXTtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtYWN0aW9uLWJ1dHRvbiBhYnJpcy1idXR0b24tLXRyYW5zcGFyZW50IGFicmlzLWJ1dHRvbi10b2dnbGVcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS1iaW5kPVwiY2xpY2s6IHRvZ2dsZSwgYXR0cjogeyB0aXRsZTogdGl0bGUgfVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVwiaHRtbDogJHJvb3QuaWNvbnMubW9yZV9zcVwiPjwvZGl2PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLWFjdGlvbi1idXR0b25fX2xhYmVsXCJcbiAgICAgICAgICBkYXRhLWJpbmQ9XCJ0ZXh0OiBtb3JlVGV4dFwiXG4gICAgICAgID48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHsvKiA8IS0tIGtvIGlmOiBpc09wZW4gLS0+ICovfVxuICAgICAgPHVsIGNsYXNzTmFtZT1cImFicmlzLWJ1dHRvbi10b2dnbGVfX2Ryb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgPEFicmlzQWN0aW9ucyBjbGFzc05hbWU9XCJhYnJpcy1jb250ZXh0LWFjdGlvbnNcIiBhY3Rpb25zPXthY3Rpb25zfSAvPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IElUYWJsZUNlbGxUeXBlLCBUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmltcG9ydCBcIi4vYm9vbC5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBCb29sQ2VsbCBpbXBsZW1lbnRzIElUYWJsZUNlbGxUeXBlIHtcbiAgICBuYW1lOiBzdHJpbmcgPSBcImJvb2xcIjtcbiAgICBlZGl0b3I6IHN0cmluZyA9IFwiYm9vbC1jZWxsLWVkaXRvclwiO1xuICAgIHZpZXdlcjogc3RyaW5nID0gXCJib29sLWNlbGwtdmlld2VyXCI7XG59XG5cblRhYmxlQ2VsbC5yZWdpc3RlckNlbGxUeXBlKG5ldyBCb29sQ2VsbCgpKTsiLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuaW1wb3J0IFwiLi9jZWxsLWVkaXRvci5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnBsYWNlRWRpdG9yIGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZWxsOiBJVGFibGVDZWxsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNlbGwuZGF0YTtcbiAgICB9XG4gICAgQHByb3BlcnR5KCkgdmFsdWU6IGFueTtcbiAgICBjb21wbGV0ZShjb21taXQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYoY29tbWl0KSB7XG4gICAgICAgICAgICB0aGlzLmNlbGwuZGF0YSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZWxsLmlucGxhY2VFZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHByb2Nlc3NLZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZihldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZShldmVudC5rZXlDb2RlID09PSAxMyk7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4sIElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ2VsbFR5cGUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjc3M/OiBzdHJpbmc7XG4gICAgZWRpdG9yPzogc3RyaW5nO1xuICAgIHZpZXdlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDZWxsIHtcbiAgICBkYXRhOiBhbnk7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY3NzOiBzdHJpbmc7XG4gICAgaW5wbGFjZUVkaXRvcjogYW55O1xuICAgIGVkaXRvcj86IHN0cmluZztcbiAgICB2aWV3ZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUNlbGwgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVRhYmxlQ2VsbCB7XG4gICAgcHVibGljIHN0YXRpYyBjZWxsVHlwZXMgPSB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICBjc3M6IFwiYWJyaXMtdGFibGUtY2VsbC0tbGVmdFwiLFxuICAgICAgICAgICAgZWRpdG9yOiBcImFicmlzLWNlbGwtZWRpdG9yXCIsXG4gICAgICAgICAgICB2aWV3ZXI6IFwiYWJyaXMtY2VsbC12aWV3ZXJcIlxuICAgICAgICB9LFxuICAgIH07XG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckNlbGxUeXBlKGNlbGxUeXBlOiBJVGFibGVDZWxsVHlwZSkge1xuICAgICAgICBUYWJsZUNlbGwuY2VsbFR5cGVzW2NlbGxUeXBlLm5hbWVdID0gY2VsbFR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRDb250YWluZXJDc3MoY2VsbDogSVRhYmxlQ2VsbCwgaXNNZXJnZWRDZWxsOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb250YWluZXJDc3MgPSBcImFicmlzLXRhYmxlLWNlbGxfX2NvbnRhaW5lciBcIiArIGNlbGwuY3NzO1xuICAgICAgICBpZihpc01lcmdlZENlbGwpIHtcbiAgICAgICAgICBjb250YWluZXJDc3MgKz0gXCIgY2VsbF9fc3RpY2t5LXRleHRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbmVyQ3NzOyAgICAgICAgXG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29udGVudENzcyhjZWxsOiBJVGFibGVDZWxsIHwgVGFibGVDZWxsLCBpc01lcmdlZENlbGw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbnRlbnRDc3MgPSBpc01lcmdlZENlbGwgPyBcImFicmlzLXRhYmxlLWNlbGxfX3RleHQtLW1lcmdlZFwiIDogXCJhYnJpcy10YWJsZS1jZWxsX190ZXh0XCI7XG4gICAgICAgIGlmKGNlbGwgaW5zdGFuY2VvZiBUYWJsZUNlbGwgJiYgY2VsbC5pc01vZGlmaWVkKSB7XG4gICAgICAgICAgY29udGVudENzcyArPSBcIiBhYnJpcy10YWJsZS1jZWxsX190ZXh0LS1tb2RpZmllZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50Q3NzOyAgICAgICAgXG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc01vZGlmaWVkOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsLCB0YXJnZXQ6IFRhYmxlQ2VsbCkgPT4geyBcbiAgICAgICAgaWYodGFyZ2V0LnRleHQgIT09IHZhbCkge1xuICAgICAgICAgICAgdGFyZ2V0LnRleHQgPSB0YXJnZXQuZ2V0Q2VsbFRleHQodmFsKTtcbiAgICAgICAgICAgIHRhcmdldC5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gfSkgZGF0YTogYW55O1xuICAgIEBwcm9wZXJ0eSgpIHRleHQ6IHN0cmluZzsgXG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiAxIH0pIGNvdW50OiBudW1iZXI7XG4gICAgQHByb3BlcnR5KCkgY29sb3I6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBuYW1lOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgaW5wbGFjZUVkaXRvcjogYW55O1xuICAgIEBwcm9wZXJ0eSgpIGNzczogc3RyaW5nO1xuICAgIGVkaXRvcjogc3RyaW5nO1xuICAgIHZpZXdlcjogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIGdldENlbGxUeXBlRGVzY3JpcHRpb24odHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBUYWJsZUNlbGwuY2VsbFR5cGVzW3R5cGVdIHx8IFRhYmxlQ2VsbC5jZWxsVHlwZXNbXCJkZWZhdWx0XCJdXG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsQ3NzKGRhdGE6IGFueSwgY29sdW1uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGxUeXBlRGVzY3JpcHRpb24oY29sdW1uLnR5cGUpLmNzcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENlbGxFZGl0b3IoZGF0YTogYW55LCBjb2x1bW46IElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbFR5cGVEZXNjcmlwdGlvbihjb2x1bW4udHlwZSkuZWRpdG9yIHx8IFRhYmxlQ2VsbC5jZWxsVHlwZXNbXCJkZWZhdWx0XCJdLmVkaXRvcjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENlbGxWaWV3ZXIoZGF0YTogYW55LCBjb2x1bW46IElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2VsbFR5cGVEZXNjcmlwdGlvbihjb2x1bW4udHlwZSkudmlld2VyIHx8IFRhYmxlQ2VsbC5jZWxsVHlwZXNbXCJkZWZhdWx0XCJdLnZpZXdlcjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENlbGxUZXh0KHZhbDogYW55KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHZhbCBhcyBzdHJpbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoY29sOiBJVGFibGVDb2x1bW4sIGJhY2s6IGJvb2xlYW4sIGRhdGE6IGFueSwgY29sb3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhW2NvbC5uYW1lXSxcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb2wubmFtZTtcbiAgICAgICAgdGhpcy5jc3MgPSB0aGlzLmdldENlbGxDc3MoZGF0YSwgY29sKTtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSB0aGlzLmdldENlbGxFZGl0b3IoZGF0YSwgY29sKTtcbiAgICAgICAgdGhpcy52aWV3ZXIgPSB0aGlzLmdldENlbGxWaWV3ZXIoZGF0YSwgY29sKTtcbiAgICAgICAgaWYoYmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sLmxhc3QgJiYgY29sLmxhc3QudGV4dCA9PT0gdGhpcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb2wubGFzdC5jb3VudCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5sYXN0LmNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbC5sYXN0ID09IGNvbC5wcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wucHJldiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wuY291bnQgPSB0aGlzLmNvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbC5sYXN0ID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb2wubGFzdCA9PT0gbnVsbCkgY29sLmxhc3QgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmKGNvbC5wcmV2VmFsdWUgJiYgKGNvbC5wcmV2VmFsdWUgPT09IHRoaXMudGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sLmNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb2wucHJldi5jb3VudCA9IGNvbC5jb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5jb3VudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5wcmV2ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgY29sLnByZXZWYWx1ZSA9IHRoaXMudGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJRmluZE9wZXJhdGlvbiwgb3BlcmF0aW9uc01hcCB9IGZyb20gXCIuLi9maW5kXCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4gfSBmcm9tIFwiLi9jb2x1bW5cIjtcblxuZXhwb3J0IGNsYXNzIEZpbHRlckl0ZW1WYWx1ZSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtbjogSVRhYmxlQ29sdW1uKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZpZWxkID0gY29sdW1uLm5hbWU7XG4gIH1cbiAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWwsIHRhcmdldDogRmlsdGVySXRlbVZhbHVlKSA9PiB0YXJnZXQuY29sdW1uLmZpbHRlckNvbnRleHQuYXBwbHkoKSB9KSB2YWx1ZTogYW55O1xuICBAcHJvcGVydHkoeyBvblNldDogKHZhbCwgdGFyZ2V0OiBGaWx0ZXJJdGVtVmFsdWUpID0+IHRhcmdldC5jb2x1bW4uZmlsdGVyQ29udGV4dC5hcHBseSgpIH0pIG9wOiBzdHJpbmc7XG4gIGZpZWxkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5GaWx0ZXJJdGVtIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb2x1bW46IGFueSxcbiAgICBwdWJsaWMgZ2V0Q29sdW1uRGF0YVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmlsdGVySXRlbVZhbHVlID0gbmV3IEZpbHRlckl0ZW1WYWx1ZShjb2x1bW4pO1xuICAgIGlmKG9wZXJhdGlvbnNNYXBbdGhpcy5jb2x1bW4udHlwZV0pIHtcbiAgICAgIHRoaXMub3BlcmF0aW9ucyA9IG9wZXJhdGlvbnNNYXBbdGhpcy5jb2x1bW4udHlwZV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5vcGVyYXRpb25zID0gb3BlcmF0aW9uc01hcFtcInN0cmluZ1wiXTtcbiAgICB9XG4gICAgdGhpcy5vcGVyYXRpb24gPSB0aGlzLm9wZXJhdGlvbnNbMF07XG4gIH1cblxuICBvcGVyYXRpb25zOiBBcnJheTxhbnk+O1xuICBcbiAgZ2V0IGZpbHRlckVkaXRvck5hbWUoKSB7XG4gICAgLy8gaWYgKHRoaXMuY29sdW1uLnR5cGUgPT09IFwiYm9vbFwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXItYm9vbFwiO1xuICAgIC8vIH0gZWxzZSBpZiAoW1wic3RyaW5nXCIsIFwiY2FwdGlvblwiLCBcInBsYWluXCJdLmluZGV4T2YodGhpcy5jb2x1bW4udHlwZSkgIT09IC0xICkge1xuICAgIC8vICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWF1dG9jb21wbGV0ZVwiO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4udHlwZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAvLyAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1kYXRlXCI7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcImRhdGV0aW1lXCIpIHtcbiAgICAvLyAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1kYXRlLXRpbWVcIjtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLnR5cGUgPT09IFwicGlrZXRwb3NpdGlvblwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXIta21wa3RtXCI7XG4gICAgLy8gfSBlbHNlIGlmICghIXRoaXMucGFyYW1zLnByb3BlcnR5SW5mby5yZWxhdGlvbikge1xuICAgIC8vICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWF1dG9jb21wbGV0ZVwiO1xuICAgIC8vIH1cbiAgICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXItZGVmYXVsdFwiO1xuICB9XG4gIHB1YmxpYyBmaWx0ZXJJdGVtVmFsdWU6IEZpbHRlckl0ZW1WYWx1ZTtcbiAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWw6IElGaW5kT3BlcmF0aW9uLCB0YXJnZXQ6IENvbHVtbkZpbHRlckl0ZW0pID0+IHtcbiAgICBpZighIXZhbCkge1xuICAgICAgdGFyZ2V0LmZpbHRlckl0ZW1WYWx1ZS5vcCA9IHZhbC5vcDtcbiAgICB9XG4gICAgdGFyZ2V0LnNob3dPcGVyYW5kID0gdmFsICYmIHZhbC5vcCAhPT0gXCJJU05cIiAmJiB2YWwub3AgIT09IFwiSVNOTlwiO1xuICB9fSkgb3BlcmF0aW9uOiBJRmluZE9wZXJhdGlvbjtcbiAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiB0cnVlIH0pIHNob3dPcGVyYW5kOiBib29sZWFuO1xuXG4gIGdldEZpbHRlclZhbHVlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZDogdGhpcy5maWx0ZXJJdGVtVmFsdWUuZmllbGQsXG4gICAgICBvcDogdGhpcy5maWx0ZXJJdGVtVmFsdWUub3AsXG4gICAgICB2YWx1ZTogdGhpcy5maWx0ZXJJdGVtVmFsdWUudmFsdWVcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJRGF0YVByb3ZpZGVyLCBJRGF0YVByb3ZpZGVyT3duZXIgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YS1wcm92aWRlclwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5pbXBvcnQgeyBGaWx0ZXJJdGVtVmFsdWUsIENvbHVtbkZpbHRlckl0ZW0gfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxuaW1wb3J0IFwiLi9jb2x1bW4tZmlsdGVyLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIEZpbHRlckNvbnRleHQgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sdW1uOiBJVGFibGVDb2x1bW4sIHByaXZhdGUgZGF0YVByb3ZpZGVyT3duZXI6IElEYXRhUHJvdmlkZXJPd25lcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2hvd0ZpbHRlcjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSB2YWx1ZTogYW55O1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10gfSkgZmlsdGVySXRlbXM6IEFycmF5PENvbHVtbkZpbHRlckl0ZW0+O1xuICBcbiAgICBhcHBseSgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZpbHRlckl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uZ2V0RmlsdGVyVmFsdWUoKSk7XG4gICAgfVxuICAgIGFkZEl0ZW0gPSAoY29sdW1uOiBJVGFibGVDb2x1bW4pID0+IHtcbiAgICAgIC8vIGZpbHRlclZhbHVlLm9wLnN1YnNjcmliZShvID0+IHtpZihvID09PSBcIkVRXCIpIGZpbHRlclZhbHVlLnZhbHVlKG51bGwpOyB0aGlzLmFwcGx5KCl9KTtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXMucHVzaChuZXcgQ29sdW1uRmlsdGVySXRlbSh0aGlzLmNvbHVtbiwgKGNvbHVtbiwgZmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICB0aGlzLmRhdGFQcm92aWRlck93bmVyLmRhdGFQcm92aWRlci5nZXRDb2x1bW5EYXRhKGNvbHVtbiwgZmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBjYWxsYmFjayk7XG4gICAgICB9KSk7XG4gICAgICB0aGlzLnNob3dGaWx0ZXIgPSB0cnVlO1xuICAgIH07XG4gICAgcmVtb3ZlSXRlbSA9IChpdGVtOiBDb2x1bW5GaWx0ZXJJdGVtKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RmlsdGVySXRlbXMgPSB0aGlzLmZpbHRlckl0ZW1zO1xuICAgICAgY3VycmVudEZpbHRlckl0ZW1zLnNwbGljZShjdXJyZW50RmlsdGVySXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICB0aGlzLnNob3dGaWx0ZXIgPSAhIWN1cnJlbnRGaWx0ZXJJdGVtcy5sZW5ndGg7ICAgIFxuICAgICAgdGhpcy52YWx1ZSA9IGN1cnJlbnRGaWx0ZXJJdGVtcy5tYXAoaSA9PiBpLmZpbHRlckl0ZW1WYWx1ZSk7XG4gICAgfSAgICBcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSUFnZ3JlZ2F0ZSB9IGZyb20gXCIuLi9maW5kXCI7XG5pbXBvcnQgeyBJRGF0YVByb3ZpZGVyT3duZXIgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YS1wcm92aWRlclwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIC8vIGZpbHRlcjogYW55O1xuICAgIC8vIGZpbHRlckNvbnRleHQ6IEZpbHRlckNvbnRleHQsXG4gICAgLy8gb3JkZXI6IHN0cmluZyxcbiAgICAvLyBjb3VudDogbnVtYmVyLFxuICAgIC8vIHByZXY6IElUYWJsZUNlbGwsXG4gICAgLy8gcHJldlZhbHVlOiBhbnksXG4gICAgLy8gY29uY2F0UHJldjogYm9vbGVhbixcbiAgICAvLyBsYXN0OiBJVGFibGVDZWxsLFxuICAgIC8vIHJvd19jb2xvcjogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1uIGV4dGVuZHMgSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24ge1xuICAgIC8vIG5hbWU6IHN0cmluZztcbiAgICAvLyB0aXRsZTogc3RyaW5nO1xuICAgIC8vIHR5cGU6IHN0cmluZztcbiAgICAvLyB2aXNpYmxlOiBib29sZWFuO1xuICAgIGZpbHRlcjogYW55O1xuICAgIGZpbHRlckNvbnRleHQ6IEZpbHRlckNvbnRleHQsXG4gICAgb3JkZXI6IGJvb2xlYW4sXG4gICAgc3VtbWFyeVZhbHVlOiBhbnksXG4gICAgc3VtbWFyeVBhcmFtczogSUFnZ3JlZ2F0ZSxcbiAgICBjb3VudDogbnVtYmVyLFxuICAgIHByZXY6IElUYWJsZUNlbGwsXG4gICAgcHJldlZhbHVlOiBhbnksXG4gICAgY29uY2F0UHJldjogYm9vbGVhbixcbiAgICBsYXN0OiBJVGFibGVDZWxsLFxuICAgIHJvd19jb2xvcjogc3RyaW5nLFxuICAgIGNsaWNrRmlsdGVyOiAoY29sdW1uOiBJVGFibGVDb2x1bW4sIGV2ZW50OiBNb3VzZUV2ZW50fGFueSkgPT4gdm9pZCxcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlQ29sdW1uIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElUYWJsZUNvbHVtbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2x1bW5EZXNjcmlwdGlvbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24sIHByaXZhdGUgdGFibGU6IElEYXRhUHJvdmlkZXJPd25lcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3Qua2V5cyhjb2x1bW5EZXNjcmlwdGlvbiB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYoY29sdW1uRGVzY3JpcHRpb25ba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29sdW1uRGVzY3JpcHRpb25ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMubmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlckNvbnRleHQgPSBuZXcgRmlsdGVyQ29udGV4dCh0aGlzLCB0YWJsZSk7XG4gICAgfVxuXG4gICAgZmlsdGVyOiBhbnk7XG4gICAgZmlsdGVyQ29udGV4dDogRmlsdGVyQ29udGV4dDtcbiAgICBAcHJvcGVydHkoKSBvcmRlcjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBzdW1tYXJ5VmFsdWU6IGFueTtcbiAgICBAcHJvcGVydHkoeyBvblNldDogKHZhbDogSUFnZ3JlZ2F0ZSwgdGFyZ2V0OiBUYWJsZUNvbHVtbikgPT4ge1xuICAgICAgICB0YXJnZXQuY2FsY3VsYXRlU3VtbWFyeSh0YXJnZXQpO1xuICAgIH19KSBzdW1tYXJ5UGFyYW1zOiBJQWdncmVnYXRlO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgcHJldjogYW55O1xuICAgIHByZXZWYWx1ZTogYW55O1xuICAgIGNvbmNhdFByZXY6IGJvb2xlYW47XG4gICAgbGFzdDogYW55O1xuICAgIHJvd19jb2xvcjogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZyA9IFwic3RyaW5nXCI7XG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgY2xpY2tGaWx0ZXIgPSAoY29sdW1uOiBJVGFibGVDb2x1bW4sIGV2ZW50OiBNb3VzZUV2ZW50fGFueSkgPT4ge1xuICAgICAgICBjb2x1bW4uZmlsdGVyQ29udGV4dC5hZGRJdGVtKGNvbHVtbik7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVN1bW1hcnkoY29sdW1uOiBJVGFibGVDb2x1bW4pOiB2b2lkIHtcbiAgICAgICAgaWYoY29sdW1uLnN1bW1hcnlQYXJhbXMgJiYgY29sdW1uLnN1bW1hcnlQYXJhbXMuZmllbGQgPT09IGNvbHVtbi5uYW1lICYmIGNvbHVtbi5zdW1tYXJ5UGFyYW1zLmZ1bmMpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGUuZGF0YVByb3ZpZGVyLmdldFN1bW1hcnkoY29sdW1uLnN1bW1hcnlQYXJhbXMuZnVuYywgY29sdW1uLnN1bW1hcnlQYXJhbXMuZmllbGQsIHRoaXMudGFibGVbXCJ0YWJsZUZpbHRlclwiXSwgKGRhdGEpID0+IGNvbHVtbi5zdW1tYXJ5VmFsdWUgPSBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgfVxufSIsImltcG9ydCBcIi4vZmlsdGVyLWRlZmF1bHQuc2Nzc1wiO1xuXG5cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBGaWx0ZXJJdGVtVmFsdWUgfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxuaW1wb3J0IFwiLi9maWx0ZXItc2VsZWN0LnNjc3NcIjtcblxuXG5mdW5jdGlvbiBjb252ZXJzaW9uQnlUeXBlKHZhbHVlOmFueSwgY29sdW1uVHlwZTogc3RyaW5nKTpzdHJpbmd7XG4gICAgaWYoY29sdW1uVHlwZSA9PT1cImJvb2xcIikgcmV0dXJuIHZhbHVlP1wiWWVzXCI6XCJOb1wiO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyU2VhcmNoQnlUeXBlKGNvbHVtblR5cGU6IHN0cmluZyk6Ym9vbGVhbntcbiAgICBpZihjb2x1bW5UeXBlID09PVwiYm9vbFwiKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIFRhYmxlRmlsdGVyU2VsZWN0IGV4dGVuZHMgQmFzZSB7XG4gICAgcHJpdmF0ZSBsaW1pdDogbnVtYmVyID0gMTA7XG4gICAgcHJpdmF0ZSBvZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlOiBGaWx0ZXJJdGVtVmFsdWUsICBwcml2YXRlIGNvbHVtbk5hbWU6IHN0cmluZywgcHJpdmF0ZSBjb2x1bW5UeXBlOiBzdHJpbmcsIHByaXZhdGUgZ2V0Q29sdW1uRGF0YTogKG5hbWU6IHN0cmluZywgZmlsdGVyVmFsdWU6IGFueSwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNhbGxiYWNrIDogKGl0ZW1zOiBhbnlbXSkgPT4gdm9pZCkgPT4gdm9pZCwgaXNPcGVuPzogYm9vbGVhbiwgcHVibGljIHRpdGxlOiBzdHJpbmcgPSBcIlwiLCBwdWJsaWMgbW9yZVRleHQ6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYoaXNPcGVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gaXNPcGVuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlRm91bmRJdGVtcyhudWxsKTtcbiAgICAgICAgdGhpcy5pc0ZpbHRlclNlYXJjaEJ5VHlwZSA9IGZpbHRlclNlYXJjaEJ5VHlwZShjb2x1bW5UeXBlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVGb3VuZEl0ZW1zKGZpbHRlclZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5mb3VuZEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5nZXRDb2x1bW5EYXRhKHRoaXMuY29sdW1uTmFtZSwgZmlsdGVyVmFsdWUsIHRoaXMubGltaXQsIHRoaXMub2Zmc2V0LCBpdGVtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kSXRlbXMgPSBpdGVtcy5tYXAoaSA9PiB7cmV0dXJuIHtuYW1lOiBjb252ZXJzaW9uQnlUeXBlKGksIHRoaXMuY29sdW1uVHlwZSksIHZhbHVlOiBpfX0pO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRNb3JlID0gaXRlbXMubGVuZ3RoID09PSB0aGlzLmxpbWl0O1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gMTA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkTW9yZSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb2x1bW5EYXRhKHRoaXMuY29sdW1uTmFtZSwgdGhpcy5maWx0ZXJUZXh0LCB0aGlzLmxpbWl0LCB0aGlzLm9mZnNldCwgaXRlbXMgPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpID0+IHRoaXMuZm91bmRJdGVtcy5wdXNoKGkpKVxuICAgICAgICAgICAgdGhpcy5pc0xvYWRNb3JlID0gaXRlbXMubGVuZ3RoID09PSB0aGlzLmxpbWl0O1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gMTA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzT3BlbjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzRmlsdGVyU2VhcmNoQnlUeXBlOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNMb2FkTW9yZTogYm9vbGVhbjtcbiAgICB0b2dnbGUgPSAoXywgZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdLCBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZUZpbHRlclNlbGVjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNldCBmaWx0ZXIgdmFsdWUgdG8gXCIgKyBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICAgICAgdGFyZ2V0LnZhbHVlLnZhbHVlID0gdGFyZ2V0LnNlbGVjdGVkSXRlbXM7XG4gICAgfSB9KSBzZWxlY3RlZEl0ZW1zOiBBcnJheTxhbnk+O1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10gfSkgZm91bmRJdGVtczogQXJyYXk8YW55PjtcbiAgICBAcHJvcGVydHkoeyBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZUZpbHRlclNlbGVjdCkgPT4ge1xuICAgICAgICB0YXJnZXQudXBkYXRlRm91bmRJdGVtcyh2YWwpO1xuICAgIH0sIH0pIGZpbHRlclRleHQ6IHN0cmluZztcbiAgICBpc0NoZWNrZWQgPSAoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSkgIT09IC0xO1xuICAgIH1cbiAgICBjbGlja0l0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYoaXRlbUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVJdGVtcyhpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUudmFsdWUgPSB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKGk9PmkudmFsdWUpO1xuICAgICAgICBpZihBcnJheS5pc0FycmF5KHRoaXMudmFsdWUudmFsdWUpICYmIHRoaXMudmFsdWUudmFsdWUubGVuZ3RoID09PSAwKSB0aGlzLnZhbHVlLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBkZWxldGVJdGVtcyA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKG5hbWUpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBBY3Rpb24sIElBY3Rpb24gfSBmcm9tIFwiLi4vY29yZS9hY3Rpb25cIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IENvbXB1dGVkVXBkYXRlciB9IGZyb20gXCIuLi9jb3JlL2RlcGVuZGVuY2llc1wiO1xuaW1wb3J0IHsgSW5wbGFjZUVkaXRvciB9IGZyb20gXCIuL2NlbGwtZWRpdG9yXCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsLCBUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4sIElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uLCBUYWJsZUNvbHVtbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuaW1wb3J0IHsgU2VhcmNoTW9kZWwgfSBmcm9tIFwiLi9zZWFyY2hcIjtcbmltcG9ydCB7IElEYXRhUHJvdmlkZXIsIElEYXRhUHJvdmlkZXJPd25lciB9IGZyb20gXCIuLi91dGlscy9kYXRhLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBBcnJheURhdGFQcm92aWRlciB9IGZyb20gXCIuLi91dGlscy9hcnJheS1kYXRhLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBJVGFibGVSb3csIElUYWJsZVJvd0RhdGEsIFRhYmxlUm93IH0gZnJvbSBcIi4vcm93XCI7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vbG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgeyBGaWx0ZXJJdGVtVmFsdWUgfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbi8qKlxuICogUGFyYW1ldGVycyBmb3IgY3VzdG9taXppbmcgdGhlIHRhYmxlIHZpZXcuXG4gKi9cbiBleHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbmZpZyBleHRlbmRzIElEYXRhUHJvdmlkZXIge1xuICAgIC8qKiBEZXNjcmlwdGlvbiBvZiBjb2x1bW5zICovXG4gICAgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uRGVzY3JpcHRpb24+O1xuICAgIC8qKiBQZXJtaXNzaW9uIHRvIGRpc3BsYXkgdGhlIHNlYXJjaCBiYXIgKi9cbiAgICBlbmFibGVTZWFyY2g/OiBib29sZWFuO1xuICAgIC8qKiBQZXJtaXNzaW9uIHRvIGRpc3BsYXkgc3VtbWFyeSBwYW5lbCAqL1xuICAgIGVuYWJsZVN1bW1hcnk/OiBib29sZWFuO1xuICAgIC8qKiBQZXJtaXNzaW9uIHRvIGRpc3BsYXkgbWVyZ2VkIGNlbGxzIHRvZ2dsZSAqL1xuICAgIGVuYWJsZU1lcmdlZNChZWxsc1RvZ2dsZSA/OiBib29sZWFuO1xuICAgIC8qKiBUaGUgcHJpbWFyeSB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyIGZvciBtZXJnaW5nIGNlbGxzICovXG4gICAgZW5hYmxlTWVyZ2Vk0KFlbGxzID86IGJvb2xlYW47XG4gICAgLyoqIFBlcm1pc3Npb24gdG8gZWRpdCBkYXRhICovXG4gICAgZW5hYmxlRWRpdCA/OiBib29sZWFuO1xuICAgIC8qKiBQZXJtaXNzaW9uIHRvIGRpc3BsYXkgdGhlIHRhYmxlIGFjdGlvbnMgcGFuZWwgKi9cbiAgICBhY3Rpb25zPzogQXJyYXk8SUFjdGlvbj47XG4gICAgLyoqIFRoZSBrZXkgZmllbGQgb2YgdGhlIHRhYmxlLiBOZWVkZWQgdG8gZWRpdCB0aGUgdGFibGUuICovXG4gICAga2V5Q29sdW1uPzogc3RyaW5nO1xuICAgIC8qKiBTZXR0aW5nIHRoZSBjb2xvciBmb3Igc2VsZWN0ZWQgY2VsbHMgaW4gY2FzZSB0aGUgc2VsZWN0aW9uIGlzIHNldCB1c2luZyBhbiBhdHRhY2hlZCBib29sZWFuIGNvbHVtbi4gVGhlIGNvbG9yIGlzIHNldCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIENTUy4gKi9cbiAgICBzZWxlY3RDZWxsQ29sb3I/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJVGFibGVGaWx0ZXIge1xuICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgb3A6IHN0cmluZyxcbiAgICBmaWVsZDogc3RyaW5nLFxufVxuXG4vKipcbiAqIENyZWF0ZXMgVGFibGVXaWRnZXQgY2xhc3MuXG4gKiBAcGFyYW0gY29uZmlnIC0gdGFibGUgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlV2lkZ2V0IGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElEYXRhUHJvdmlkZXJPd25lciB7XG4gICAgcHJpdmF0ZSBzY3JvbGxlckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgcmVzaXplckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgdGFibGVFbGVtZW50OiBIVE1MVGFibGVFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBpbm5lckFjdGlvbnM6IEFycmF5PElBY3Rpb24+ID0gW107XG4gICAgcHVibGljIGljb25zID0gSWNvbnM7XG4gICAgcHJpdmF0ZSBmaWx0ZXJVcGRhdGVyOiBDb21wdXRlZFVwZGF0ZXI7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJvd0hlaWdodCA9IDIwOyAvLyBUT0RPOiB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSByb3cgaGVpZ2h0IHNvbWVob3cgYmVmb3JlaGFuZFxuXG4gICAgcHJpdmF0ZSB1cGRhdGVCeUZpbHRlcigpIHtcbiAgICAgICAgY29uc3QgaXNPbGRGaWx0ZXIgPSAodGhpcy50YWJsZUZpbHRlciAmJiB0aGlzLnRhYmxlRmlsdGVyLmxlbmd0aCA+IDApO1xuICAgICAgICB0aGlzLnRhYmxlRmlsdGVyID0gW107XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE1vZGVsLnNlYXJjaFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnB1c2goe3ZhbHVlOiB0aGlzLnNlYXJjaE1vZGVsLnNlYXJjaFZhbHVlLCBvcDogXCJDXCIsIGZpZWxkOiBudWxsfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5GaWx0ZXJWYWx1ZSA9IGNvbHVtbi5maWx0ZXJDb250ZXh0LnZhbHVlO1xuICAgICAgICAgICAgaWYoY29sdW1uRmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5GaWx0ZXJWYWx1ZS5mb3JFYWNoKChmaXY6IEZpbHRlckl0ZW1WYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcCA9IGZpdi5vcDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZml2LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKG9wID09PSBcIkVRXCIgJiYgdmFsKSB8fCAob3AgPT09IFwiQ1wiICYmIHZhbCkgfHwgKG9wID09PSBcIklTTlwiKSB8fCAob3AgPT09IFwiSVNOTlwiKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5wdXNoKHt2YWx1ZTogdmFsLCBvcDogb3AsIGZpZWxkOiBmaXYuZmllbGR9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKCh0aGlzLnRhYmxlRmlsdGVyLmxlbmd0aCA+IDApIHx8IChpc09sZEZpbHRlciAmJiB0aGlzLnRhYmxlRmlsdGVyLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTW9kZWwucHJldlNlYXJjaFZhbHVlID0gdGhpcy5zZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogSVRhYmxlQ29uZmlnLCBlbGVtZW50PzogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaG93U2VhcmNoID0gY29uZmlnLmVuYWJsZVNlYXJjaCA9PT0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jcmVhdGVBY3Rpb25zKHRoaXMuY29uZmlnKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW5zKHRoaXMuY29uZmlnKTtcblxuICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZXIgPSBuZXcgQ29tcHV0ZWRVcGRhdGVyKCgpID0+IHRoaXMudXBkYXRlQnlGaWx0ZXIoKSk7XG4gICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlci5vYnNlcnZlKHRoaXMsIFwiX19maWx0ZXJVcGRhdGVyVmFsdWVcIik7IC8vIFRPRE86IG1ha2UgaXQgZWxlZ2FudFxuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZXIgPSAoKSA9PiB0aGlzLnVwZGF0ZUJ5RmlsdGVyKCk7XG4gICAgICAgIGlmKCEhZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc01lcmdlZNChZWxscyA9IGNvbmZpZy5lbmFibGVNZXJnZWTQoWVsbHM7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnNjcm9sbGVyRWxlbWVudCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFicmlzLXRhYmxlLXNjcm9sbC1jb250YWluZXJcIilbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIHRoaXMudGFibGVFbGVtZW50ID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRhYmxlXCIpWzBdIGFzIEhUTUxUYWJsZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVzaXplckVsZW1lbnQgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhYnJpcy10YWJsZVwiKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgXG4gICAgICAgIHZhciBjaGVja0xvYWRpbmcgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBzZWxmLnBhcnRSb3dDb3VudCA9IE1hdGgucm91bmQoc2VsZi5zY3JvbGxlckVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gVGFibGVXaWRnZXQucm93SGVpZ2h0KTtcbiAgICAgICAgICAgIGlmKHNlbGYuc2Nyb2xsZXJFbGVtZW50LnNjcm9sbFRvcCA8IFRhYmxlV2lkZ2V0LnJvd0hlaWdodCAmJiBzZWxmLmxhc3RPZmZzZXRCYWNrID4gMCkge1xuICAgICAgICAgICAgICAgIGlmICgoc2VsZi5sYXN0T2Zmc2V0QmFjayAtIHNlbGYucGFydFJvd0NvdW50KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3Um93cyhzZWxmLmxhc3RPZmZzZXRCYWNrLCBNYXRoLm1heCgwLCBzZWxmLmxhc3RPZmZzZXRCYWNrIC0gc2VsZi5wYXJ0Um93Q291bnQpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXdSb3dzKHNlbGYucGFydFJvd0NvdW50LCBNYXRoLm1heCgwLCBzZWxmLmxhc3RPZmZzZXRCYWNrIC0gc2VsZi5wYXJ0Um93Q291bnQpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZigoc2VsZi5zY3JvbGxlckVsZW1lbnQuc2Nyb2xsVG9wID49IHNlbGYudGFibGVFbGVtZW50LmNsaWVudEhlaWdodCAtIHNlbGYuc2Nyb2xsZXJFbGVtZW50LmNsaWVudEhlaWdodCkgJiYgdGhpcy5sb2FkTW9yZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZHJhd1Jvd3Moc2VsZi5wYXJ0Um93Q291bnQsIHNlbGYubGFzdE9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsZXJFbGVtZW50Lm9uc2Nyb2xsID0gY2hlY2tMb2FkaW5nO1xuICAgICAgICB0aGlzLnJlc2l6ZXJFbGVtZW50Lm9ucmVzaXplID0gY2hlY2tMb2FkaW5nO1xuICAgICAgICBjaGVja0xvYWRpbmcoKTtcblxuICAgICAgICBpZih0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkudGFyZ2V0LnRhZ05hbWUgPT09IFwiVEhFQURcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZW50cnkuY29udGVudFJlY3Qud2lkdGggPCA3MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWJyaXMtdGFibGUtLXNtYWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFicmlzLXRhYmxlLS1zbWFsbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVIZWFkSGVpZ2h0ID0gZW50cnkuY29udGVudFJlY3QuaGVpZ2h0ICsgNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGhlYWRcIilbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNob3dEZXRhaWwocm93RGF0YTogSVRhYmxlUm93RGF0YSkge1xuICAgICAgICB0aGlzLmlzU2hvd0RldGFpbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhpZGVEZXRhaWwoKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kZWRSb3dLZXkgPSBudWxsO1xuICAgICAgICB0aGlzLmlzU2hvd0RldGFpbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5hdmlnYXRlVG8oc3RhcnRSb3c6IG51bWJlcikge1xuICAgICAgICBpZihzdGFydFJvdykge1xuICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0QmFjayA9IHN0YXJ0Um93IC0gMTtcbiAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldCA9IHN0YXJ0Um93IC0gMTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4geyBjLmNvdW50ID0gbnVsbDsgYy5wcmV2ID0gbnVsbDsgYy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7IGMubGFzdCA9IG51bGwgfSk7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1Jvd3ModGhpcy5wYXJ0Um93Q291bnQsIHN0YXJ0Um93IC0gMSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5oaWRlRGV0YWlsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29sdW1uKGNvbHVtbjogYW55LCBtb2RlbDogSVRhYmxlQ29uZmlnKTogSVRhYmxlQ29sdW1uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZUNvbHVtbihjb2x1bW4sIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDb2x1bW5zKGNvbmZpZzogSVRhYmxlQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbmZpZy5jb2x1bW5zLm1hcChjb2x1bW4gPT4gXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbihjb2x1bW4sIGNvbmZpZylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQWN0aW9ucyhjb25maWc6IElUYWJsZUNvbmZpZykge1xuICAgICAgICBpZihjb25maWcuZW5hYmxlU3VtbWFyeSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckFjdGlvbnMucHVzaChuZXcgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInN1bW1hcnktYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RhYmxlU3VtbWFyeSA9ICF0aGlzLnNob3dUYWJsZVN1bW1hcnk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuZXF1YWwsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcInRvcFwiXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29uZmlnLmVuYWJsZU1lcmdlZNChZWxsc1RvZ2dsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckFjdGlvbnMucHVzaChuZXcgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1lcmdlZNChZWxscy1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01lcmdlZNChZWxscyA9ICF0aGlzLmlzTWVyZ2Vk0KFlbGxzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLnRhYmxlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJ0b3BcIlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvbmZpZy5lbmFibGVFZGl0ID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJBY3Rpb25zLnB1c2gobmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzYXZlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNJbnNlcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kaWZ5ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyLm51bWJlcj4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jZWxscy5mb3JFYWNoKGMgPT4gYy50ZXh0ICE9PSBjLmRhdGEgJiYgKG1vZGlmeVtjLm5hbWVdID0gYy50ZXh0KSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFpc0VtcHR5KG1vZGlmeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhUHJvdmlkZXIuc2F2ZURhdGEodGhpcy5rZXlDb2x1bW4sIHIucm93RGF0YVt0aGlzLmtleUNvbHVtbl0sIG1vZGlmeSkpIHIuY2VsbHMuZm9yRWFjaChjID0+IGMuZGF0YSA9IGMudGV4dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY2VsbHMuZm9yRWFjaChjID0+IG1vZGlmeVtjLm5hbWVdID0gYy50ZXh0KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhUHJvdmlkZXIuaW5zZXJ0RGF0YSh0aGlzLmtleUNvbHVtbiwgbW9kaWZ5KSkgaXNJbnNlcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5zZXJ0KSB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN2ZzogdGhpcy5pY29ucy5zYXZlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJib3R0b21cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRlbGV0ZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLm51bWJlcj4wKSB0aGlzLnJvd3Muc2xpY2UodGhpcy5yb3dzLmluZGV4T2YociksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFQcm92aWRlci5kZWxldGVEYXRhKHRoaXMua2V5Q29sdW1uLCB0aGlzLnNlbGVjdGVkUm93cy5tYXAociA9PiByLm51bWJlcj4wICYmIHIucm93RGF0YVt0aGlzLmtleUNvbHVtbl0pLCAoXyA9PiB0aGlzLnJlZnJlc2goKSkpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuZGVsLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJib3R0b21cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm5ld1Jvdy1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY3JvbGxlckVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdzpJVGFibGVSb3dEYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4gYy52aXNpYmxlICYmIChuZXdSb3dbYy5uYW1lXT1cIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93cy51bnNoaWZ0KHRoaXMuY3JlYXRlUm93KG5ld1JvdywgLTEsIG51bGwpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN2ZzogdGhpcy5pY29ucy5hZGQsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcImJvdHRvbVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICApfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RhdGFQcm92aWRlcjogSURhdGFQcm92aWRlciA9IHVuZGVmaW5lZDtcbiAgICBnZXQgZGF0YVByb3ZpZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVByb3ZpZGVyIHx8IHRoaXMuY29uZmlnO1xuICAgIH1cbiAgICBzZXQgZGF0YVByb3ZpZGVyKHByb3ZpZGVyOiBJRGF0YVByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuX2RhdGFQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgZGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIFtdO1xuICAgIC8vIH1cbiAgICBzZXQgZGF0YShfZGF0YTogQXJyYXk8YW55Pikge1xuICAgICAgICB0aGlzLmRhdGFQcm92aWRlciA9IG5ldyBBcnJheURhdGFQcm92aWRlcihfZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMubGFzdE9mZnNldEJhY2sgPSAwO1xuICAgICAgICB0aGlzLmxhc3RPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHsgYy5jb3VudCA9IG51bGw7IGMucHJldiA9IG51bGw7IGMucHJldlZhbHVlID0gdW5kZWZpbmVkOyB9KTtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgICAgIHRoaXMuZHJhd1Jvd3ModGhpcy5wYXJ0Um93Q291bnQsIDAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5oaWRlRGV0YWlsKCk7XG4gICAgfVxuXG4gICAgZHJhd1Jvd3MobGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGJhY2sgPSBmYWxzZSkge1xuICAgICAgICBpZighdGhpcy5sb2FkaW5nTXV0ZXgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ011dGV4ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyLmdldERhdGEoXG4gICAgICAgICAgICAgICAgbGltaXQsIFxuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKGMgPT4gYy5vcmRlciAhPT0gdW5kZWZpbmVkKS5tYXAoYyA9PiA8YW55PntmaWVsZDogYy5uYW1lLCBkZXNjOiBjLm9yZGVyfSksXG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlcixcbiAgICAgICAgICAgICAgICBudWxsIC8qJiYgdGhpcy5waW5uZWRSb3dLZXkoKSovLCBcbiAgICAgICAgICAgICAgICBiYWNrLCBcbiAgICAgICAgICAgICAgICAoZGF0YSwgbmV3T2Zmc2V0OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgYmFjazogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXRCYWNrID0gdGhpcy5sYXN0T2Zmc2V0QmFjayAtIGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0ID0gdGhpcy5sYXN0T2Zmc2V0ICsgbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTW9yZUJhY2sgPSB0aGlzLmxhc3RPZmZzZXRCYWNrID4gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTW9yZSA9IHRoaXMubGFzdE9mZnNldCA8PSB0b3RhbENvdW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Um93cyA9IHRoaXMucm93cztcbiAgICAgICAgICAgICAgICAgICAgKGRhdGEgfHwgW10pLmZvckVhY2goKGRhdGFJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvdyA9IHRoaXMuY3JlYXRlUm93KGJhY2sgPyBkYXRhW2RhdGEubGVuZ3RoIC0gMSAtIE51bWJlcihpbmRleCldIDogZGF0YUl0ZW0sIGJhY2sgPyBkYXRhLmxlbmd0aCAtIDEgLSBOdW1iZXIoaW5kZXgpICsgb2Zmc2V0IDogTnVtYmVyKGluZGV4KSArIG9mZnNldCwgYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiYWNrKSB7IGN1cnJlbnRSb3dzLnVuc2hpZnQobmV3Um93KTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7IGN1cnJlbnRSb3dzLnB1c2gobmV3Um93KTsgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nTXV0ZXggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGlja1Jvdyhyb3c6IElUYWJsZVJvdywgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MuZm9yRWFjaChyID0+IHIuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNlbGVjdFJvdyhyb3c6IElUYWJsZVJvdywgZXZlbnQpIHtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gIXJvdy5zZWxlY3RlZDtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMubGFzdFNlbGVjdFJvdykge1xuICAgICAgICAgICAgdGhpcy5yb3dzLmZpbHRlcihlID0+IGUubnVtYmVyID49IE1hdGgubWluKHRoaXMubGFzdFNlbGVjdFJvdy5udW1iZXIsIHJvdy5udW1iZXIpICYmIGUubnVtYmVyIDw9IE1hdGgubWF4KHRoaXMubGFzdFNlbGVjdFJvdy5udW1iZXIsIHJvdy5udW1iZXIpKVxuICAgICAgICAgICAgLmZvckVhY2goZSA9PiBlLnNlbGVjdGVkID0gdHJ1ZSk7XG4gICAgICAgIH0gXG4gICAgICAgIGlmIChyb3cuc2VsZWN0ZWQpIHRoaXMubGFzdFNlbGVjdFJvdyA9IHJvdztcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmxlbmd0aCAhPT0gMSkgdGhpcy5oaWRlRGV0YWlsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsaWNrQ29sdW1uID0gKGNvbHVtbjogSVRhYmxlQ29sdW1uLCBldmVudCkgPT4ge1xuICAgICAgICBpZih0aGlzLmlzU2hvd0RldGFpbCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlRGV0YWlsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld09yZGVyID0gY29sdW1uLm9yZGVyID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICFjb2x1bW4ub3JkZXI7XG4gICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5tYXAoKGMpID0+IGMub3JkZXIgPSB1bmRlZmluZWQpXG4gICAgICAgIH0gXG4gICAgICAgIGNvbHVtbi5vcmRlciA9IG5ld09yZGVyIGFzIGFueTsgLy8gVE9ETzogc29tZXRoaW5nIHdyb25nIGlzIGhlcmVcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJvdyhkYXRhOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcn0sIG51bTogbnVtYmVyLCBiYWNrOiBib29sZWFuKTogSVRhYmxlUm93IHtcbiAgICAgICAgbGV0IHJvd0NlbGxzID0gW107XG4gICAgICAgIGxldCBsYXN0VGV4dCA9IG51bGw7XG4gICAgICAgIGxldCBjb2xvckNlbGwgPSBudWxsLCBjb2xvclJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMuY29sdW1ucy5yZXZlcnNlKCkuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBuZXcgVGFibGVDZWxsKCk7XG4gICAgICAgICAgICBjZWxsLmluaXRpYWxpemUoY29sLCBiYWNrLCBkYXRhLCBjb2xvckNlbGwpO1xuICAgICAgICAgICAgaWYoISFsYXN0VGV4dCkge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dCArPSAoXCIvXCIgKyBsYXN0VGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0VGV4dCA9IChjb2wuY29uY2F0UHJldiAmJiAhY29sLnJvd19jb2xvcikgPyBjZWxsLnRleHQgOiBudWxsO1xuICAgICAgICAgICAgY29sb3JSb3cgPSAoY29sLnJvd19jb2xvciAmJiAhY29sLmNvbmNhdFByZXYpID8gKGNvbC50eXBlID09PSBcImJvb2xcIiA/ICggZGF0YVtjb2wubmFtZV0gPyB0aGlzLmNvbmZpZy5zZWxlY3RDZWxsQ29sb3IgOiBudWxsKSA6IGRhdGFbY29sLm5hbWVdKSA6IGNvbG9yUm93O1xuICAgICAgICAgICAgY29sb3JDZWxsID0gKGNvbC5yb3dfY29sb3IgJiYgY29sLmNvbmNhdFByZXYpID8gKGNvbC50eXBlID09PSBcImJvb2xcIiA/ICggZGF0YVtjb2wubmFtZV0gPyB0aGlzLmNvbmZpZy5zZWxlY3RDZWxsQ29sb3IgOiBudWxsKSA6IGRhdGFbY29sLm5hbWVdKSA6IG51bGw7XG4gICAgICAgICAgICBpZihjb2wudmlzaWJsZSkgcm93Q2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29sdW1ucy5yZXZlcnNlKCk7XG4gICAgICAgIGxldCByb3dfaWQgPSBkYXRhW3RoaXMua2V5Q29sdW1uXTtcbiAgICAgICAgY29uc3Qgcm93ID0gbmV3IFRhYmxlUm93KCk7XG4gICAgICAgIHJvdy5jZWxscyA9IHJvd0NlbGxzLnJldmVyc2UoKTtcbiAgICAgICAgcm93LnJvd0RhdGEgPSBkYXRhO1xuICAgICAgICByb3cuaWQgPSByb3dfaWQ7XG4gICAgICAgIHJvdy5udW1iZXIgPSBudW0gKyAxO1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSByb3dfaWQgJiYgKHRoaXMuZXhwYW5kZWRSb3dLZXkgPT09IHJvd19pZCk7XG4gICAgICAgIHJvdy5jb2xvciA9IGNvbG9yUm93O1xuICAgICAgICByb3cuc2VsZWN0ID0gKGRhdGEsIGV2ZW50KSA9PiB0aGlzLnNlbGVjdFJvdyhkYXRhLCBldmVudCksXG4gICAgICAgIHJvdy5jbGljayA9IChkYXRhLCBldmVudCkgPT4gdGhpcy5jbGlja1JvdyhkYXRhLCBldmVudClcbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcm93RXhwYW5kZWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydEVkaXRDZWxsID0gKGNlbGw6IElUYWJsZUNlbGwpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENlbGxFZGl0b3IpIHRoaXMuY3VycmVudENlbGxFZGl0b3IuaW5wbGFjZUVkaXRvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgY2VsbC5pbnBsYWNlRWRpdG9yID0gbmV3IElucGxhY2VFZGl0b3IoY2VsbCk7XG4gICAgICAgIHRoaXMuY3VycmVudENlbGxFZGl0b3IgPSBjZWxsOyBcbiAgICAgICAgdGhpcy5jb21wbGV0ZUVkaXRDZWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBsZXRlRWRpdENlbGwoKSB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhc0FjdGl2ZUlucGxhY2VFZGl0b3JDb3JlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoYXNBY3RpdmVJbnBsYWNlRWRpdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBY3RpdmVJbnBsYWNlRWRpdG9yQ29yZSgpO1xuICAgIH1cblxuICAgIGN1ckNvbCA9IHVuZGVmaW5lZDtcbiAgICBueHRDb2wgPSB1bmRlZmluZWQ7XG4gICAgcGFnZVggPSB1bmRlZmluZWQ7XG4gICAgbnh0Q29sV2lkdGggPSB1bmRlZmluZWQ7XG4gICAgY3VyQ29sV2lkdGggPSB1bmRlZmluZWRcblxuICAgIHB1YmxpYyBsb2dNb3VzZU92ZXIgPSAoZCwgZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJSaWdodCA9ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJztcbiAgICB9XG4gICAgcHVibGljIGxvZ01vdXNlT3V0ID0gKGQsIGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHQgPSAnJztcbiAgICB9XG4gICAgcHVibGljIGxvZ01vdXNlTW92ZSA9IChkLCBlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmN1ckNvbCAmJiBlLmJ1dHRvbnMpIHtcbiAgICAgICAgICAgIHZhciBkaWZmWCA9IGUucGFnZVggLSB0aGlzLnBhZ2VYO1xuICAgICAgICAgICAgdGhpcy5ueHRDb2wgJiYgKHRoaXMubnh0Q29sLnN0eWxlLndpZHRoID0gKHRoaXMubnh0Q29sV2lkdGggLSAoZGlmZlgpKSsncHgnKTtcbiAgICAgICAgICAgIHRoaXMuY3VyQ29sLnN0eWxlLndpZHRoID0gKHRoaXMuY3VyQ29sV2lkdGggKyBkaWZmWCkrJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgbG9nTW91c2VEb3duID0gKGQsIGUpID0+IHtcbiAgICAgICAgdGhpcy5jdXJDb2wgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLm54dENvbCA9IHRoaXMuY3VyQ29sLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcgPyB0aGlzLmN1ckNvbC5uZXh0RWxlbWVudFNpYmxpbmcgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGFnZVggPSBlLnBhZ2VYOyBcbiAgICAgICAgdmFyIHBhZGRpbmcgPSB0aGlzLnBhZGRpbmdEaWZmKHRoaXMuY3VyQ29sKTtcbiAgICAgICAgdGhpcy5jdXJDb2xXaWR0aCA9IHRoaXMuY3VyQ29sLm9mZnNldFdpZHRoIC0gcGFkZGluZztcbiAgICAgICAgaWYgKHRoaXMubnh0Q29sKSB0aGlzLm54dENvbFdpZHRoID0gdGhpcy5ueHRDb2wub2Zmc2V0V2lkdGggLSBwYWRkaW5nOyAgICBcbiAgICB9XG4gICAgcHVibGljIGxvZ01vdXNlVXAgPSAoZCwgZSkgPT4ge1xuICAgICAgICB0aGlzLmN1ckNvbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ueHRDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGFnZVggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubnh0Q29sV2lkdGggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3VyQ29sV2lkdGggPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcGFkZGluZ0RpZmYoY29sKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFN0eWxlVmFsKGNvbCwnYm94LXNpemluZycpID09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhZExlZnQgPSB0aGlzLmdldFN0eWxlVmFsKGNvbCwncGFkZGluZy1sZWZ0Jyk7XG4gICAgICAgIHZhciBwYWRSaWdodCA9IHRoaXMuZ2V0U3R5bGVWYWwoY29sLCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIHJldHVybiAocGFyc2VJbnQocGFkTGVmdCkgKyBwYXJzZUludChwYWRSaWdodCkpO1xuICAgIH1cbiAgICBnZXRTdHlsZVZhbChlbG0sY3NzKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsbSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShjc3MpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByb290TGV2ZWw6IGFueSA9IHRydWU7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc051bWJlcjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzTWVyZ2Vk0KFlbGxzOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgbG9hZGluZ011dGV4OiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KSBsb2FkTW9yZTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGxvYWRNb3JlQmFjazogYm9vbGVhbjtcbiAgICBsYXN0T2Zmc2V0ID0gMDtcbiAgICBsYXN0T2Zmc2V0QmFjayA9IDA7XG4gICAgcGFydFJvd0NvdW50ID0gMTA7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSwgb25TZXQ6ICh2YWw6IElUYWJsZUNvbHVtbltdLCB0YXJnZXQ6IFRhYmxlV2lkZ2V0KSA9PiB7XG4gICAgICAgIHRhcmdldC52aWV3RmlsdGVyVGFibGUgPSBuZXcgQ29tcHV0ZWRVcGRhdGVyKCgpID0+IHZhbC5maWx0ZXIoYyA9PiBjLmZpbHRlckNvbnRleHQuc2hvd0ZpbHRlcikubGVuZ3RoID4gMCkgYXMgYW55O1xuICAgIH0gfSkgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPjtcbiAgICBnZXQga2V5Q29sdW1uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5rZXlDb2x1bW47XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10gfSkgcm93czogQXJyYXk8SVRhYmxlUm93PjtcbiAgICBnZXQgc2VsZWN0ZWRSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dzLmZpbHRlcihyID0+IHIuc2VsZWN0ZWQpO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHNob3dUYWJsZVN1bW1hcnk6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBzaG93U2VhcmNoOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IG9uU2V0OiAobmV3VmFsdWU6IG51bWJlciwgdGFyZ2V0OiBUYWJsZVdpZGdldCkgPT4ge1xuICAgICAgICB0YXJnZXQubmF2aWdhdGVUbyhuZXdWYWx1ZSk7XG4gICAgfSB9KSBzdGFydFJvdzogbnVtYmVyO1xuICAgIGxhc3RTZWxlY3RSb3cgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogMCB9KSB0b3RhbENvdW50OiBudW1iZXI7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiAwIH0pIHRhYmxlSGVhZEhlaWdodDogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KSBzaG93VGFibGVGaWx0ZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSB2aWV3RmlsdGVyVGFibGU6IGJvb2xlYW47XG4gICAgdGFibGVGaWx0ZXI6IElUYWJsZUZpbHRlcltdO1xuICAgIGN1cnJlbnRDZWxsRWRpdG9yOiBJVGFibGVDZWxsO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNTaG93RGV0YWlsOiBib29sZWFuO1xuICAgIGV4cGFuZGVkUm93S2V5O1xuXG4gICAgc2VhcmNoTW9kZWwgPSBuZXcgU2VhcmNoTW9kZWwoKTtcblxuICAgIGdldEFjdGlvbnMgPSAoY29udGFpbmVyPzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXS5jb25jYXQodGhpcy5pbm5lckFjdGlvbnMpLmNvbmNhdCh0aGlzLmNvbmZpZy5hY3Rpb25zIHx8IFtdKTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnMuZmlsdGVyKGFjdGlvbiA9PiBhY3Rpb24uY29udGFpbmVyID09PSBjb250YWluZXIpO1xuICAgIH1cbiAgICBnZXQgdG9wQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aW9ucygndG9wJyk7XG4gICAgfVxuICAgIGdldCBkcm9wZG93bkFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdGlvbnMoJ2Ryb3Bkb3duJyk7XG4gICAgfVxuICAgIGdldCBib3R0b21BY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpb25zKCdib3R0b20nKTtcbiAgICB9XG4gICAgZ2V0IG5vRGF0YVRleHQoKSB7XG4gICAgICAgIHJldHVybiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibm9EYXRhXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElUYWJsZUNlbGxUeXBlLCBUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJDZWxsIGltcGxlbWVudHMgSVRhYmxlQ2VsbFR5cGUge1xuICAgIG5hbWU6IHN0cmluZyA9IFwibnVtYmVyXCI7XG4gICAgY3NzOiBzdHJpbmcgPSBcImFicmlzLXRhYmxlLWNlbGwtLXJpZ2h0XCJcbn1cblxuVGFibGVDZWxsLnJlZ2lzdGVyQ2VsbFR5cGUobmV3IE51bWJlckNlbGwoKSk7IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbi8qKlxuICogVGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBmb3IgYSB0YWJsZSByb3cuIFRoZSBrZXkgaXMgdGhlIG5hbWUgb2YgdGhlIGNvbHVtbi4gVGhlIHZhbHVlIGlzIHRoZSBjb250ZW50IG9mIHRoZSB0YWJsZSBjZWxsLlxuICovXG4gZXhwb3J0IGludGVyZmFjZSBJVGFibGVSb3dEYXRhIHtcbiAgICAvKiogVGFibGUgY2VsbCBjb250ZW50ICovXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyXG59XG5cblxuLyoqXG4gKiBJbmZvcm1hdGlvbiBuZWVkZWQgdG8gcmVuZGVyIGEgdGFibGUgcm93XG4gKi9cbiBleHBvcnQgaW50ZXJmYWNlIElUYWJsZVJvdyB7XG4gICAgLyoqIEFycmF5IGNvbnRhaW5pbmcgb2JzZXJ2YWJsZSB0YWJsZSBjZWxscyAqL1xuICAgIGNlbGxzOiBBcnJheTxJVGFibGVDZWxsPixcbiAgICAvKiogVGhlIGNvbGxlY3Rpb24gb2YgZGF0YSBmb3IgYSB0YWJsZSByb3cgKi9cbiAgICByb3dEYXRhOiBJVGFibGVSb3dEYXRhLFxuICAgIC8qKiAgKi9cbiAgICBpZDogYW55LFxuICAgIC8qKiAgKi9cbiAgICBudW1iZXI6IG51bWJlcixcbiAgICBzZWxlY3RlZDogYm9vbGVhbixcbiAgICBjb2xvcjogc3RyaW5nLFxuICAgIHNlbGVjdDogKGRhdGE6IElUYWJsZVJvdywgZXZlbnQpID0+IHZvaWQsXG4gICAgY2xpY2s6IChkYXRhOiBJVGFibGVSb3csIGV2ZW50KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVJvdyBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJVGFibGVSb3cge1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10gfSkgY2VsbHM6IElUYWJsZUNlbGxbXTtcbiAgICByb3dEYXRhOiBJVGFibGVSb3dEYXRhO1xuICAgIGlkOiBhbnk7XG4gICAgbnVtYmVyOiBudW1iZXI7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBzZWxlY3RlZDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBjb2xvcjogc3RyaW5nO1xuICAgIHNlbGVjdDogKGRhdGE6IElUYWJsZVJvdywgZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgICBjbGljazogKGRhdGE6IElUYWJsZVJvdywgZXZlbnQ6IGFueSkgPT4gdm9pZDtcbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuXG5pbXBvcnQgXCIuL3NlYXJjaC5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2RlbCBleHRlbmRzIEJhc2Uge1xuICAgIHNlYXJjaCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5wcmV2U2VhcmNoVmFsdWUgPSB0aGlzLnNlYXJjaFZhbHVlO1xuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdGV4dDtcbiAgICAgICAgdGhpcy51cGRhdGVyICYmIHRoaXMudXBkYXRlcigpO1xuICAgIH1cbiAgICB1cGRhdGVyOiAoKSA9PiB2b2lkO1xuICAgIEBwcm9wZXJ0eSgpIHByZXZTZWFyY2hWYWx1ZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIHNlYXJjaFZhbHVlOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5cbmltcG9ydCBcIi4vc3VtbWFyeS5zY3NzXCI7XG5cbmNvbnN0IEZ1bmN0aW9uczogQXJyYXk8eyB0aXRsZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyBoaW50OiBzdHJpbmcsIHR5cGVzPzogc3RyaW5nW10gfT4gPSAgW1xuICB7IHRpdGxlOiBcIi1cIiwgdmFsdWU6IFwiXCIsIGhpbnQ6IFwiXCIgfSwgXG4gIHsgdGl0bGU6IFwizqNcIiwgdmFsdWU6IFwic3VtXCIsIGhpbnQ6IFwiU3VtIG9mIGNlbGxzIGZvciB0aGlzIHRhYmxlIGNvbHVtblwiLCB0eXBlczogW1wiaW50ZWdlclwiLCBcIm1vbmV5XCIsIFwibnVtYmVyXCJdIH0sIFxuICB7IHRpdGxlOiBcInjMhFwiLCB2YWx1ZTogXCJhdmdcIiwgaGludDogXCJBcml0aG1ldGljIG1lYW4gaW4gdGhpcyB0YWJsZSBjb2x1bW5cIiwgdHlwZXM6IFtcImludGVnZXJcIiwgXCJtb25leVwiLCBcIm51bWJlclwiXSB9LCBcbiAgeyB0aXRsZTogXCJtaW5cIiwgdmFsdWU6IFwibWluXCIsIGhpbnQ6IFwiTWluaW11bSB2YWx1ZSBpbiB0aGlzIHRhYmxlIGNvbHVtblwiLCB0eXBlczogW1wiaW50ZWdlclwiLCBcIm1vbmV5XCIsIFwiZGF0ZVwiLCBcIm51bWJlclwiXSB9LFxuICB7IHRpdGxlOiBcIm1heFwiLCB2YWx1ZTogXCJtYXhcIiwgaGludDogXCJNYXhpbXVtIHZhbHVlIGluIHRoaXMgdGFibGUgY29sdW1uXCIsIHR5cGVzOiBbXCJpbnRlZ2VyXCIsIFwibW9uZXlcIiwgXCJkYXRlXCIsIFwibnVtYmVyXCJdIH0sXG4gIHsgdGl0bGU6IFwizp1cIiwgdmFsdWU6IFwiY291bnRcIiwgaGludDogXCJOdW1iZXIgb2Ygbm9uLWJsYW5rIGNlbGxzIGluIHRoaXMgY29sdW1uXCIgfSxcbiAgeyB0aXRsZTogXCJVXCIsIHZhbHVlOiBcInVuaXF1ZVwiLCBoaW50OiBcIk51bWJlciBvZiB1bmlxdWUgY2VsbHMgaW4gdGhpcyBjb2x1bW5cIiB9LFxuXTtcblxuZXhwb3J0IGNsYXNzIFRhYmxlU3VtbWFyeUl0ZW0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZywgcHVibGljIHZhbHVlOiBzdHJpbmcgKSB7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlU3VtbWFyeSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtbjogSVRhYmxlQ29sdW1uKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN1bW1hcnlJdGVtcyA9IEZ1bmN0aW9ucy5maWx0ZXIoZnVuY0Rlc2NyaXB0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuICFmdW5jRGVzY3JpcHRpb24udHlwZXMgfHwgZnVuY0Rlc2NyaXB0aW9uLnR5cGVzLmluZGV4T2YoY29sdW1uLnR5cGUpICE9PSAtMVxuICAgICAgfSkubWFwKGZ1bmNEZXNjcmlwdGlvbiA9PiBuZXcgVGFibGVTdW1tYXJ5SXRlbSAoZnVuY0Rlc2NyaXB0aW9uLnRpdGxlLCBmdW5jRGVzY3JpcHRpb24udmFsdWUpKTtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLnN1bW1hcnlWYWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmNvbHVtbi5zdW1tYXJ5VmFsdWUgPSB2YWw7XG4gIH1cbiAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBudWxsLCBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZVN1bW1hcnkpID0+IHtcbiAgICB0YXJnZXQuY29sdW1uLnN1bW1hcnlQYXJhbXMgPSB7IGZ1bmM6IHZhbCwgZmllbGQ6IHRhcmdldC5jb2x1bW4ubmFtZSB9O1xuICB9IH0pIGZ1bmM6IGFueTtcbiAgc3VtbWFyeUl0ZW1zOiBBcnJheTxUYWJsZVN1bW1hcnlJdGVtPjtcbn1cbiIsImltcG9ydCB7IElEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhLXByb3ZpZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBcnJheURhdGFQcm92aWRlciBpbXBsZW1lbnRzIElEYXRhUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhOiBBcnJheTxhbnk+KSB7XG5cbiAgICB9XG5cbiAgICBmaWx0ZXJlZChmaWx0ZXJzLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhPy5maWx0ZXIocm93ID0+IFxuICAgICAgICAgICAgZmlsdGVycy5ldmVyeShmID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goZi5vcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRVFcIjogcmV0dXJuIGYudmFsdWUuaW5jbHVkZXMocm93W2YuZmllbGRdKTsgXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJDXCI6IHJldHVybiBmLmZpZWxkID8gfnJvd1tmLmZpZWxkXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmLnZhbHVlLnRvVXBwZXJDYXNlKCkpIDogT2JqZWN0LmtleXMocm93KS5zb21lKGsgPT4gISEocm93W2tdICYmIHJvd1trXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmLnZhbHVlLnRvVXBwZXJDYXNlKCkpICE9PSAtMSkpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSVNOXCI6ICByZXR1cm4gIShyb3dbZi5maWVsZF0pOyBcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIklTTk5cIjogIHJldHVybiAhIShyb3dbZi5maWVsZF0pOyBcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHRydWU7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICkgPz8gW107XG4gICAgfVxuXG4gICAgZ2V0RGF0YShsaW1pdCwgb2Zmc2V0LCBvcmRlciwgZmlsdGVycywga2V5LCBiYWNrLCBjYWxsYmFjaykge1xuICAgICAgICBmdW5jdGlvbiBzb3J0ZnVuYyhhLCBiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFbb3JkZXJbaV0uZmllbGRdID09PSBiW29yZGVyW2ldLmZpZWxkXSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhW29yZGVyW2ldLmZpZWxkXSA+IGJbb3JkZXJbaV0uZmllbGRdID8gMSA6IC0xKSAqIChvcmRlcltpXS5kZXNjID8gLTEgOiAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIChvcmRlci5sZW5ndGggPiAwKSAmJiB0aGlzLmRhdGEuc29ydChzb3J0ZnVuYyk7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJlZChmaWx0ZXJzLCB0aGlzLmRhdGEpO1xuICAgICAgICBmb3IgKHZhciBpID0gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDA7IGkgPCBvZmZzZXQgKyBsaW1pdCAmJiBmaWx0ZXJlZERhdGEgJiYgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZmlsdGVyZWREYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnMi3RgdC10LrRg9C90LTQvdCw0Y8g0LfQsNC00LXRgNC20LrQsCDQv9GA0L7RiNC70LAnKTtcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrKHJlc3VsdCwgb2Zmc2V0ICsgbGltaXQsIGZpbHRlcmVkRGF0YS5sZW5ndGgsIGJhY2spXG4gICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICBjYWxsYmFjayhyZXN1bHQsIG9mZnNldCArIGxpbWl0LCBmaWx0ZXJlZERhdGEubGVuZ3RoLCBiYWNrKTtcbiAgICB9XG5cbiAgICBnZXRTdW1tYXJ5KGZ1bmMsIGZpZWxkLCBmaWx0ZXJzLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlcmVkKGZpbHRlcnMsIHRoaXMuZGF0YSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBmaWx0ZXJlZERhdGEubGVuZ3RoID8gZmlsdGVyZWREYXRhWzBdW2ZpZWxkXSA6IGZhbHNlO1xuICAgICAgICBsZXQgc3VtID0gMCwgY291bnQgPSAwLCB1bmlxdWVzID0gW107XG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGZ1bmMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3VtXCI6IHJlc3VsdCA9IHJlc3VsdCArIHJvd1tmaWVsZF07IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhdmdcIjogc3VtID0gc3VtICsgcm93W2ZpZWxkXTsgY291bnQrKzsgcmVzdWx0ID0gc3VtIC8gY291bnQ7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtaW5cIjogcmVzdWx0ID0gcmVzdWx0IDwgcm93W2ZpZWxkXSA/IHJlc3VsdCA6IHJvd1tmaWVsZF07IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXhcIjogcmVzdWx0ID0gcmVzdWx0ID4gcm93W2ZpZWxkXSA/IHJlc3VsdCA6IHJvd1tmaWVsZF07IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudFwiOiBpZiAocm93W2ZpZWxkXSkgY291bnQrKzsgcmVzdWx0ID0gY291bnQ7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1bmlxdWVcIjogaWYgKCF1bmlxdWVzLmluY2x1ZGVzKHJvd1tmaWVsZF0pKSB7IHVuaXF1ZXMucHVzaChyb3dbZmllbGRdKTsgfSByZXN1bHQgPSB1bmlxdWVzLmxlbmd0aDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZ2V0Q29sdW1uRGF0YShjb2x1bW5OYW1lLCBmaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXSwgdW5pcXVlcyA9IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLmRhdGEubWFwKHJvdyA9PiB7XG4gICAgICAgICAgICBpZiAoKCEoZmlsdGVyKSB8fCB+cm93W2NvbHVtbk5hbWVdLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9VcHBlckNhc2UoKSkpICYmICF1bmlxdWVzLmluY2x1ZGVzKHJvd1tjb2x1bW5OYW1lXSkpIHsgdW5pcXVlcy5wdXNoKHJvd1tjb2x1bW5OYW1lXSk7IH07XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBpID0gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDA7IGkgPCBvZmZzZXQgKyBsaW1pdCAmJiB1bmlxdWVzICYmIGkgPCB1bmlxdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh1bmlxdWVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHNhdmVEYXRhKGtleU5hbWU6c3RyaW5nLCBrZXk6YW55LCBtb2RpZnk6e30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMobW9kaWZ5KS5mb3JFYWNoKCBwPT4gdGhpcy5kYXRhLmZpbmQociA9PiByW2tleU5hbWVdID09IGtleSlbcF0gPSBtb2RpZnlbcF0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbnNlcnREYXRhKGtleU5hbWU6c3RyaW5nLCBtb2RpZnk6e30pIHtcbiAgICAgICAgY29uc29sZS5sb2cobW9kaWZ5KTtcbiAgICAgICAgbW9kaWZ5W2tleU5hbWVdID0gdGhpcy5kYXRhLmxlbmd0aCArIDE7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKG1vZGlmeSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGRlbGV0ZURhdGEoa2V5TmFtZTpzdHJpbmcsIGtleXM6YW55W10sIGNhbGxiYWNrKSB7XG4gICAgICAgIGtleXMuZm9yRWFjaChrID0+IHRoaXMuZGF0YS5maW5kKHIgPT4gdGhpcy5kYXRhLnNwbGljZSh0aGlzLmRhdGEuaW5kZXhPZih0aGlzLmRhdGEuZmluZChyID0+IHJba2V5TmFtZV0gPT0gaykpLDEpKSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfSBcblxufSIsImltcG9ydCB7IElEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi9kYXRhLXByb3ZpZGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0RGF0YSh1cmwgPSAnJywgZGF0YSA9IHt9KSB7XG4gICAgLy8gRGVmYXVsdCBvcHRpb25zIGFyZSBtYXJrZWQgd2l0aCAqXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gICBtb2RlOiAnY29ycycsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgICAvLyAgIGNhY2hlOiAnbm8tY2FjaGUnLCAvLyAqZGVmYXVsdCwgbm8tY2FjaGUsIHJlbG9hZCwgZm9yY2UtY2FjaGUsIG9ubHktaWYtY2FjaGVkXG4gICAgICAgIC8vICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgICAgICAvLyAgIHJlZGlyZWN0OiAnZm9sbG93JywgLy8gbWFudWFsLCAqZm9sbG93LCBlcnJvclxuICAgICAgICAvLyAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLCAvLyBuby1yZWZlcnJlciwgKmNsaWVudFxuICAgICAgICBtZXRob2Q6ICdQT1NUJywgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdGVEYXRhUHJvdmlkZXIgaW1wbGVtZW50cyBJRGF0YVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdXJsOiBzdHJpbmcpIHtcblxuICAgIH1cblxuICAgIGdldERhdGEobGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIG9yZGVyOiBhbnlbXSwgZmlsdGVyczogYW55W10sIGtleTogYW55LCBiYWNrOiBib29sZWFuLCBjYWxsYmFjazogKGRhdGE6IGFueSwgc3RhcnQ6IG51bWJlciwgY291bXQ6IG51bWJlciwgYmFjazogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBwb3N0RGF0YSh0aGlzLnVybCArIFwiZ2V0RGF0YVwiLCB7IG5hbWU6IHRoaXMubmFtZSwgbGltaXQ6IGxpbWl0LCBvZmZzZXQ6IG9mZnNldCwgb3JkZXI6IG9yZGVyLCBmaWx0ZXJzOiBmaWx0ZXJzLCBrZXk6IGtleSwgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YS5kYXRhLCBvZmZzZXQgKyBsaW1pdCwgZGF0YS5jb3VudCwgYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRTdW1tYXJ5KGZ1bmM6IHN0cmluZywgZmllbGQ6IHN0cmluZywgZmlsdGVyczogYW55W10sIGNhbGxiYWNrOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBwb3N0RGF0YSh0aGlzLnVybCArIFwiZ2V0U3VtbWFyeVwiLCB7IG5hbWU6IHRoaXMubmFtZSwgZnVuYzogZnVuYywgZmllbGQ6IGZpZWxkLCBmaWx0ZXJzOiBmaWx0ZXJzIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDb2x1bW5EYXRhKGNvbHVtbk5hbWU6IHN0cmluZywgZmlsdGVyOiBhbnksIGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjYWxsYmFjazogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgcG9zdERhdGEodGhpcy51cmwgKyBcImdldENvbHVtbkRhdGFcIiwgeyBuYW1lOiB0aGlzLm5hbWUsIGNvbHVtbk5hbWU6IGNvbHVtbk5hbWUsIGZpbHRlcjogZmlsdGVyLCBsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0IH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmVEYXRhKGtleU5hbWU6c3RyaW5nLCBrZXk6YW55LCBtb2RpZnk6e30pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5TmFtZX0gLSAke2tleX0gPT4gJHttb2RpZnl9YCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGluc2VydERhdGEoa2V5TmFtZTpzdHJpbmcsIG1vZGlmeTp7fSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXlOYW1lfSA9PiAke21vZGlmeX1gKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZGVsZXRlRGF0YShrZXlOYW1lOnN0cmluZywga2V5czphbnlbXSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5TmFtZX0gLSAke2tleXN9YCk7XG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajoge30pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsKG9iajE6IGFueSwgb2JqMjogYW55KSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheShvYmoxKSAmJiBBcnJheS5pc0FycmF5KG9iajIpKSB7XG4gICAgICAgIGlmKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG9iajEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihvYmoxW2ldICE9PSBvYmoyW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmoxID09PSBvYmoyO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NvdXJjZXMvcmVhY3QvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=