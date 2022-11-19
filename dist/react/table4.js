(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Table4JS", ["react"], factory);
	else if(typeof exports === 'object')
		exports["Table4JS"] = factory(require("react"));
	else
		root["Table4JS"] = factory(root["React"]);
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
exports.Table4 = void 0;
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
function Table4(_a) {
    var model = _a.model;
    var dropdownActions = model.getActions("dropdownActions");
    var _b = (0, react_1.useState)(undefined), startRow = _b[0], setStartRow = _b[1];
    var rootRef = (0, react_1.useRef)(null);
    (0, reactivity_1.makeReactive)(model);
    (0, react_1.useEffect)(function () {
        model.initialize(rootRef.current.parentElement);
    });
    var CustomTag = "table4";
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
exports.Table4 = Table4;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvYWN0aW9ucy5zY3NzP2E5ZDEiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvZHJvcGRvd24tYWN0aW9ucy5zY3NzP2IzZDciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2Jvb2wuc2Nzcz9hZjM1Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jZWxsLWVkaXRvci5zY3NzPzEwNWEiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi1maWx0ZXIuc2Nzcz83OTIwIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9maWx0ZXItZGVmYXVsdC5zY3NzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9maWx0ZXItc2VsZWN0LnNjc3M/ZmRmZSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvaW5kZXguc2Nzcz9hYTEyIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9zZWFyY2guc2Nzcz8yYmVlIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9zdW1tYXJ5LnNjc3M/MjMwOSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9hcnJvdy1kb3duLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9hcnJvdy1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fY2hlY2suc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2Nyb3NzLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9lZGl0LnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9lcXVhbC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fZmlsdGVyLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9pdGVtLWFkZC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25faXRlbS1kZWxldGUuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2l0ZW0tc2F2ZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fbW9yZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fbW9yZV9zcS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fcGFzdGUuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fc29ydC1kb3duLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9zb3J0LXVwLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl90YWJsZS1tZXJnZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvYWN0aW9uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvYmFzZS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9kZXBlbmRlbmNpZXMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvZHJvcGRvd24tYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9wcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvZmluZC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2xvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3QvYWJyaXMtY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3JlYWN0L3JlYWN0aXZpdHkudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3JlYWN0L3RhYmxlL2Jvb2wtY2VsbC1lZGl0b3IudHN4Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9yZWFjdC90YWJsZS9ib29sLWNlbGwtdmlld2VyLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3QvdGFibGUvY2VsbC1lZGl0b3IudHN4Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9yZWFjdC90YWJsZS9jZWxsLXZpZXdlci50c3giLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3JlYWN0L3RhYmxlL2NlbGwudHN4Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9yZWFjdC90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW0udHN4Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9yZWFjdC90YWJsZS9jb2x1bW4tZmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3QvdGFibGUvZmlsdGVyLXNlbGVjdC50c3giLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3JlYWN0L3RhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3QvdGFibGUvcm93LnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3QvdGFibGUvc2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3QvdGFibGUvc3VtbWFyeS50c3giLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3JlYWN0L3dpZGdldHMvYWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3Qvd2lkZ2V0cy9hY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvcmVhY3Qvd2lkZ2V0cy9kcm9wZG93bi1hY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvYm9vbC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY2VsbC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NlbGwudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY29sdW1uLWZpbHRlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY29sdW1uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9maWx0ZXItZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvZmlsdGVyLXNlbGVjdC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL251bWJlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvcm93LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3N1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3V0aWxzL2FycmF5LWRhdGEtcHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3V0aWxzL3JlbW90ZS1kYXRhLXByb3ZpZGVyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwiLFwidW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlRhYmxlNEpTXCIsIFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRhYmxlNEpTXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRhYmxlNEpTXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykgPT4ge1xucmV0dXJuICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMyA4LjQzNmExLjUgMS41IDAgMCAxIDIuMTIxLjAwNmw5LjI2NSA5LjMxNGEuODY1Ljg2NSAwIDAgMCAxLjIyOCAwbDkuMjY1LTkuMzE0YTEuNSAxLjUgMCAwIDEgMi4xMjEtLjAwNiAxLjUgMS41IDAgMCAxIC4wMDYgMi4xMjFsLTEwLjk0MyAxMWExLjUgMS41IDAgMCAxLTIuMTI2IDBsLTEwLjk0My0xMWExLjUgMS41IDAgMCAxIC4wMDYtMi4xMjF6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTguOTY4IDI3YTEuNSAxLjUgMCAwIDEgLjAwNS0yLjEyMWw5LjMxNS05LjI2NWEuODY3Ljg2NyAwIDAgMCAwLTEuMjI4bC05LjMxNS05LjI2NWExLjUgMS41IDAgMCAxLS4wMDUtMi4xMjEgMS41IDEuNSAwIDAgMSAyLjEyMS0uMDA2bDExIDEwLjk0M2ExLjUgMS41IDAgMCAxIDAgMi4xMjZsLTExIDEwLjk0M2ExLjUgMS41IDAgMCAxLTIuMTIxLS4wMDZ6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTI2IDhhMS41IDEuNSAwIDAgMC0yLjEyMSAwbC0xMS4yNjQgMTEuMjY0YS44NjkuODY5IDAgMCAxLTEuMjMgMGwtNS4yNjQtNS4yNjRhMS41IDEuNSAwIDAgMC0yLjEyMSAyLjEyMWw2LjkzOSA2Ljk0YTEuNSAxLjUgMCAwIDAgMi4xMjIgMGwxMi45MzktMTIuOTRhMS41IDEuNSAwIDAgMCAwLTIuMTIxelxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xNy43MTUgMTVsMTAuNzIzLTEwLjcyM2ExLjkyMSAxLjkyMSAwIDAgMCAwLTIuNzE1IDEuOTIxIDEuOTIxIDAgMCAwLTIuNzE1IDBsLTEwLjcyMyAxMC43MjMtMTAuNzIzLTEwLjcyM2ExLjkyIDEuOTIgMCAwIDAtMi43MTUgMi43MTVsMTAuNzIzIDEwLjcyMy0xMC43MjMgMTAuNzIzYTEuOTIgMS45MiAwIDEgMCAyLjcxNSAyLjcxNWwxMC43MjMtMTAuNzIzIDEwLjcyMyAxMC43MjNhMS45MiAxLjkyIDAgMSAwIDIuNzE1LTIuNzE1elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yMS41NzMgMjloLTE3LjM5NmEzLjE3OCAzLjE3OCAwIDAgMS0zLjE3Ny0zLjE3N3YtMTcuMTQ2YTMuMTc4IDMuMTc4IDAgMCAxIDMuMTc3LTMuMTc3aDcuMmExLjUgMS41IDAgMCAxIDEuNSAxLjUgMS41IDEuNSAwIDAgMS0xLjUgMS41aC03LjJhLjE3OC4xNzggMCAwIDAtLjE3Ny4xNzd2MTcuMTQ2YS4xNzguMTc4IDAgMCAwIC4xNzcuMTc3aDE3LjRhLjE3OC4xNzggMCAwIDAgLjE3OC0uMTc4di03LjA3MmExLjUgMS41IDAgMCAxIDEuNS0xLjUgMS41IDEuNSAwIDAgMSAxLjUgMS41djcuMDczYTMuMTc4IDMuMTc4IDAgMCAxLTMuMTgyIDMuMTc3ek04LjE4MSAyMS4yODNsLjYxOS0zLjQ3M2EuNDU0LjQ1NCAwIDAgMSAuNzY4LS4yNDFsMi44NTMgMi44NTNhLjQ1My40NTMgMCAwIDEtLjI0Mi43NjdsLTMuNDcyLjYyMWEuNDU0LjQ1NCAwIDAgMS0uNTI2LS41Mjd6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiMTUuNDA1XFxcIiB5PVxcXCIzLjU4NVxcXCIgd2lkdGg9XFxcIjVcXFwiIGhlaWdodD1cXFwiMTdcXFwiIHJ4PVxcXCIuNDhcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDEzLjc5IC05LjEyMSkgcm90YXRlKDQ1KVxcXCI+PC9yZWN0PjxwYXRoIGQ9XFxcIk0yNC45IDIuNTMxaDIuMjQxYTEuMzc5IDEuMzc5IDAgMCAxIDEuMzc1IDEuMzc5di45MTlhLjU4OS41ODkgMCAwIDEtLjU4OS41ODloLTMuODI3YS41ODkuNTg5IDAgMCAxLS41ODktLjU4OXYtLjkxOWExLjM3OSAxLjM3OSAwIDAgMSAxLjM4OS0xLjM3OXpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDEwLjQzIC0xNy4yMzIpIHJvdGF0ZSg0NSlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAzMGwzMC0zMFxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yNi4zLDcuNTMxQTEuODgzLDEuODgzLDAsMCwwLDI4LjE4LDUuNjQ5VjEuODgzQTEuODgzLDEuODgzLDAsMCwwLDI2LjMsMEgzLjdBMS44ODMsMS44ODMsMCwwLDAsMS44MiwxLjg4M2ExLjg2MiwxLjg2MiwwLDAsMCwuMTM5LjdsMCwuMDExYTEuODg3LDEuODg3LDAsMCwwLC40MTEuNjJoMEwxNC4xNTcsMTUsMi4zODcsMjYuNzdsMCwuMDA2QTEuODgyLDEuODgyLDAsMCwwLDMuNywzMEgyNi4zYTEuODgzLDEuODgzLDAsMCwwLDEuODgzLTEuODgzVjI0LjM1MWExLjg4MywxLjg4MywwLDAsMC0zLjc2NiwwdjEuODgzSDguMjQ5bDkuOS05LjlhMS44ODEsMS44ODEsMCwwLDAsMC0yLjY2MmwtLjAwOC0uMDA2LDAtLjAwOEw4LjI0OSwzLjc2NkgyNC40MTRWNS42NDlBMS44ODMsMS44ODMsMCwwLDAsMjYuMyw3LjUzMVpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTMuMDYgMjkuMTg4YTIuMDIgMi4wMiAwIDAgMS0xLjEyLS4zMzMgMi4xMjYgMi4xMjYgMCAwIDEtLjk0LTEuODI2di05LjI3MmEyLjAxNSAyLjAxNSAwIDAgMC0uMjgxLS44MzVsLTkuMzE5LTEyLjI0MWExLjk5NCAxLjk5NCAwIDAgMS0uMjgxLTIuMTE5IDIgMiAwIDAgMSAxLjg1Mi0xLjA2MmgyNC4wNThhMi4wMTQgMi4wMTQgMCAwIDEgMS44NTQgMS4wNDcgMi4wMTMgMi4wMTMgMCAwIDEtLjIyOSAyLjExNmwtOC43NDMgMTIuMjA3YTIuMTkzIDIuMTkzIDAgMCAwLS4yODUuODg3djYuODIyYTMuMSAzLjEgMCAwIDEtMS43OTEgMi43MzRsLTMuODQ2IDEuNjc1YTIuMzIxIDIuMzIxIDAgMCAxLS45MjkuMnptLTguMDMyLTI0LjY4OGw4LjA3NyAxMC42YTQuODcxIDQuODcxIDAgMCAxIC44OTUgMi42NTd2Ny45NTRsMi42MzctMS4xNDktLjAxMS02LjhhNS4wNTggNS4wNTggMCAwIDEgLjg0Ni0yLjYzNGw3LjYwOS0xMC42Mjh6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNyAyN1xcXCI+PGcgaWQ9XFxcItCh0LvQvtC5XzQ0XFxcIiBkYXRhLW5hbWU9XFxcItCh0LvQvtC5IDQ0XFxcIj48cGF0aCBkPVxcXCJNMjMuNjcsMEgzLjMzQTMuMzQsMy4zNCwwLDAsMCwwLDMuMzNWMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDMuMzMsMjdIMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDI3LDIzLjY3VjMuMzNBMy4zNCwzLjM0LDAsMCwwLDIzLjY3LDBaTTI0LDIzLjY3YS4zMy4zMywwLDAsMS0uMzMuMzNIMy4zM0EuMzMuMzMsMCwwLDEsMywyMy42N1YzLjMzQS4zMy4zMywwLDAsMSwzLjMzLDNIMjMuNjdhLjMzLjMzLDAsMCwxLC4zMy4zM1pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTkuODYsMTJIMTVWNy4xNGExLjUxLDEuNTEsMCwxLDAtMywwVjEySDcuMTRhMS41MSwxLjUxLDAsMSwwLDAsM0gxMnY0Ljg1YTEuNTEsMS41MSwwLDEsMCwzLDBWMTVoNC44NWExLjUxLDEuNTEsMCwxLDAsMC0zWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI3IDI3XFxcIj48ZyBpZD1cXFwi0KHQu9C+0LlfNDRcXFwiIGRhdGEtbmFtZT1cXFwi0KHQu9C+0LkgNDRcXFwiPjxwYXRoIGQ9XFxcIk0yMy42NywwSDMuMzNBMy4zNCwzLjM0LDAsMCwwLDAsMy4zM1YyMy42N0EzLjM0LDMuMzQsMCwwLDAsMy4zMywyN0gyMy42N0EzLjM0LDMuMzQsMCwwLDAsMjcsMjMuNjdWMy4zM0EzLjM0LDMuMzQsMCwwLDAsMjMuNjcsMFpNMjQsMjMuNjdhLjMzLjMzLDAsMCwxLS4zMy4zM0gzLjMzQS4zMy4zMywwLDAsMSwzLDIzLjY3VjMuMzNBLjMzLjMzLDAsMCwxLDMuMzMsM0gyMy42N2EuMzMuMzMsMCwwLDEsLjMzLjMzWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMC4yMiw2Ljc4YTEuODQsMS44NCwwLDAsMC0yLjU5LDBMMTMuNSwxMC45Miw5LjM3LDYuNzhBMS44MywxLjgzLDAsMCwwLDYuNzgsOS4zN2w0LjE0LDQuMTNMNi43OCwxNy42M2ExLjgzLDEuODMsMCwwLDAsMi41OSwyLjU5bDQuMTMtNC4xNCw0LjEzLDQuMTRhMS44MywxLjgzLDAsMCwwLDIuNTktMi41OUwxNi4wOCwxMy41bDQuMTQtNC4xM0ExLjg0LDEuODQsMCwwLDAsMjAuMjIsNi43OFpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNyAyN1xcXCI+PGcgaWQ9XFxcItCh0LvQvtC5XzIzXFxcIiBkYXRhLW5hbWU9XFxcItCh0LvQvtC5IDIzXFxcIj48cGF0aCBkPVxcXCJNMjMuNjcsMEgzLjMzQTMuMzQsMy4zNCwwLDAsMCwwLDMuMzNWMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDMuMzMsMjdIMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDI3LDIzLjY3VjMuMzNBMy4zNCwzLjM0LDAsMCwwLDIzLjY3LDBaTTI0LDIzLjY3YS4zMy4zMywwLDAsMS0uMzMuMzNIMy4zM0EuMzMuMzMsMCwwLDEsMywyMy42N1YzLjMzQS4zMy4zMywwLDAsMSwzLjMzLDNIMjMuNjdhLjMzLjMzLDAsMCwxLC4zMy4zM1pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTgsNS4yMUg5QTIuMzIsMi4zMiwwLDAsMCw2LjY1LDcuNTJWMTkuNzNhMi4wOCwyLjA4LDAsMCwwLDIuMDYsMi4wNkEyLjA3LDIuMDcsMCwwLDAsMTAsMjEuMzFsMy40OC0yLjlMMTcsMjEuMzFhMi4wNiwyLjA2LDAsMCwwLDMuMzctMS41OFY3LjUyQTIuMzIsMi4zMiwwLDAsMCwxOCw1LjIxWm0tLjQzLDEzLjA2LTIuOC0yLjMzYTIsMiwwLDAsMC0yLjYyLDBsLTIuOCwyLjMzVjhoOC4yMlpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PGNpcmNsZSBjeD1cXFwiMTVcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNVxcXCIgY3k9XFxcIjE1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNVxcXCIgY3k9XFxcIjI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTAuNSAxMy41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMjUuNSAxMy41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMTAuNSAyOC41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMjUuNSAyOC41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMy4yMDkuNzVIMjAuNjc4YTMuMiwzLjIsMCwwLDEsMy4yMDksMy4xNzdWNS43NWgyLjkzNkEzLjE4LDMuMTgsMCwwLDEsMzAsOC45MjdWMjYuMDczYTMuMTgsMy4xOCwwLDAsMS0zLjE3NywzLjE3N0g5LjMyMmEzLjIsMy4yLDAsMCwxLTMuMjA5LTMuMTc3VjI0LjI1aC0yLjlBMy4yLDMuMiwwLDAsMSwwLDIxLjA3M1YzLjkyN0EzLjIsMy4yLDAsMCwxLDMuMjA5Ljc1Wm0yMy41ODIsMjUuNUEuMi4yLDAsMCwwLDI3LDI2LjA3M1Y4LjkyN2EuMi4yLDAsMCwwLS4yMDktLjE3N0g5LjQyN2EuMTc4LjE3OCwwLDAsMC0uMTc3LjE3N1YyNi4wNzNhLjE3OC4xNzgsMCwwLDAsLjE3Ny4xNzdaTTMsMjEuMDczYS4yLjIsMCwwLDAsLjIwOS4xNzdINi4yNVY4LjkyN0EzLjE4LDMuMTgsMCwwLDEsOS40MjcsNS43NWgxMS40NlYzLjkyN2EuMi4yLDAsMCwwLS4yMDktLjE3N0gzLjIwOUEuMi4yLDAsMCwwLDMsMy45MjdaXFxcIiBzdHlsZT1cXFwiZmlsbDojMDkyYTNhXFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiMTEuNVxcXCIgeT1cXFwiMTAuODIzXFxcIiB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiM1xcXCIgcng9XFxcIjEuNVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMzYgMjQuNjQ1KSByb3RhdGUoLTE4MClcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxMS41XFxcIiB5PVxcXCIxNS44MjNcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIzXFxcIiByeD1cXFwiMS41XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzNiAzNC42NDUpIHJvdGF0ZSgxODApXFxcIiBzdHlsZT1cXFwiZmlsbDojMDkyYTNhXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTEuNVxcXCIgeT1cXFwiMjAuODIzXFxcIiB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiM1xcXCIgcng9XFxcIjEuNVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMzYgNDQuNjQ1KSByb3RhdGUoMTgwKVxcXCI+PC9yZWN0Pjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yOC4yNSAyNS42MjlsLTcuMjgyLTcuMjgyYTEwLjk4NyAxMC45ODcgMCAxIDAtMi4wNDkgMi4xOTNsNy4yMSA3LjIxYTEuNSAxLjUgMCAxIDAgMi4xMjEtMi4xMjF6bS0xNi4yNS01LjYyOWE4IDggMCAxIDEgOC04IDguMDA5IDguMDA5IDAgMCAxLTggOHpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTkuNjgxIDExLjUxOGg0LjkzOHYxLjI4MmgtNi44ODF2LTEuMDQxbDQuNzgtNi45MDZoLTQuNzQ4di0xLjI5NWg2Ljd2MS4wMTV6TTIzLjM0NCAyMi42NDdoLTMuNThsLS43NSAyLjE1M2gtMS42NjlsMy40OTEtOS4yNDJoMS40NDFsMy41IDkuMjQyaC0xLjY3N3ptLTMuMTMtMS4yOTRoMi42NzlsLTEuMzQtMy44MzR6TTE0LjgwNSAxOC42ODlhMS4yNDkgMS4yNDkgMCAwIDAtMS43NjcgMGwtMi4xNTYgMi4xNTZ2LTE2LjAyOWExLjI1IDEuMjUgMCAwIDAtMi41IDB2MTYuMDE4bC0yLjEyLTIuMTJhMS4yNDggMS4yNDggMCAwIDAtMS43NjYgMGwtLjAxMy4wMTNhMS4yNDggMS4yNDggMCAwIDAgMCAxLjc2Nmw0LjI3NiA0LjI3NmExLjI0OSAxLjI0OSAwIDAgMCAxLjc2NSAwbC4wMTMtLjAxM2EuODkzLjg5MyAwIDAgMCAuMDYtLjA5MWw0LjIwOC00LjIwOGExLjI0OSAxLjI0OSAwIDAgMCAwLTEuNzY4elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yMy4zNDQgMTAuNjQ3aC0zLjU4bC0uNzUgMi4xNTNoLTEuNjY5bDMuNDkxLTkuMjQyaDEuNDQxbDMuNSA5LjI0MmgtMS42Nzd6bS0zLjEzLTEuMjk0aDIuNjc5bC0xLjM0LTMuODM0ek0xOS42ODEgMjMuNTE4aDQuOTM4djEuMjgyaC02Ljg4MXYtMS4wNDFsNC43OC02LjkwNmgtNC43NDh2LTEuM2g2Ljd2MS4wMTV6TTE0LjgwNSAxOC42OWExLjI0OSAxLjI0OSAwIDAgMC0xLjc2NyAwbC0yLjE1NiAyLjE1NXYtMTYuMDI5YTEuMjUgMS4yNSAwIDAgMC0yLjUgMHYxNi4wMTlsLTIuMTItMi4xMjFhMS4yNSAxLjI1IDAgMCAwLTEuNzY2IDBsLS4wMTMuMDEzYTEuMjQ4IDEuMjQ4IDAgMCAwIDAgMS43NjZsNC4yNzYgNC4yNzZhMS4yNDkgMS4yNDkgMCAwIDAgMS43NjUgMGwuMDEzLS4wMTNhMSAxIDAgMCAwIC4wNi0uMDlsNC4yMDgtNC4yMDlhMS4yNDggMS4yNDggMCAwIDAgMC0xLjc2N3pcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48ZyBpZD1cXFwiYVxcXCI+PC9nPjxnIGlkPVxcXCJiXFxcIj48L2c+PGcgaWQ9XFxcImNcXFwiPjwvZz48ZyBpZD1cXFwiZFxcXCI+PC9nPjxnIGlkPVxcXCJlXFxcIj48L2c+PGcgaWQ9XFxcImZcXFwiPjwvZz48ZyBpZD1cXFwiZ1xcXCI+PC9nPjxnIGlkPVxcXCJoXFxcIj48L2c+PGcgaWQ9XFxcImlcXFwiPjwvZz48ZyBpZD1cXFwialxcXCI+PC9nPjxnIGlkPVxcXCJrXFxcIj48L2c+PGcgaWQ9XFxcImxcXFwiPjwvZz48ZyBpZD1cXFwibVxcXCI+PC9nPjxnIGlkPVxcXCJuXFxcIj48L2c+PGcgaWQ9XFxcIm9cXFwiPjwvZz48ZyBpZD1cXFwicFxcXCI+PC9nPjxnIGlkPVxcXCJxXFxcIj48L2c+PGcgaWQ9XFxcInJcXFwiPjwvZz48ZyBpZD1cXFwic1xcXCI+PC9nPjxnIGlkPVxcXCJ0XFxcIj48L2c+PGcgaWQ9XFxcInVcXFwiPjwvZz48ZyBpZD1cXFwidlxcXCI+PC9nPjxnIGlkPVxcXCJ3XFxcIj48L2c+PGcgaWQ9XFxcInhcXFwiPjwvZz48ZyBpZD1cXFwieVxcXCI+PC9nPjxnIGlkPVxcXCJhJiN4NjA7XFxcIj48L2c+PGcgaWQ9XFxcImFhXFxcIj48L2c+PGcgaWQ9XFxcImFiXFxcIj48L2c+PGcgaWQ9XFxcImFjXFxcIj48L2c+PGcgaWQ9XFxcImFkXFxcIj48L2c+PGcgaWQ9XFxcImFlXFxcIj48L2c+PGcgaWQ9XFxcImFmXFxcIj48L2c+PGcgaWQ9XFxcImFnXFxcIj48L2c+PGcgaWQ9XFxcImFoXFxcIj48L2c+PGcgaWQ9XFxcImFpXFxcIj48L2c+PGcgaWQ9XFxcImFqXFxcIj48L2c+PGcgaWQ9XFxcImFrXFxcIj48L2c+PGcgaWQ9XFxcImFsXFxcIj48L2c+PGcgaWQ9XFxcImFtXFxcIj48L2c+PGcgaWQ9XFxcImFuXFxcIj48L2c+PGcgaWQ9XFxcImFvXFxcIj48L2c+PGcgaWQ9XFxcImFwXFxcIj48L2c+PGcgaWQ9XFxcImFxXFxcIj48L2c+PGcgaWQ9XFxcImFyXFxcIj48L2c+PGcgaWQ9XFxcImFzXFxcIj48L2c+PGcgaWQ9XFxcImF0XFxcIj48L2c+PGcgaWQ9XFxcImF1XFxcIj48L2c+PGcgaWQ9XFxcImF2XFxcIj48L2c+PGcgaWQ9XFxcImF3XFxcIj48L2c+PGcgaWQ9XFxcImF4XFxcIj48L2c+PGcgaWQ9XFxcImF5XFxcIj48L2c+PGcgaWQ9XFxcImImI3g2MDtcXFwiPjwvZz48ZyBpZD1cXFwiYmFcXFwiPjwvZz48ZyBpZD1cXFwiYmJcXFwiPjwvZz48ZyBpZD1cXFwiYmNcXFwiPjwvZz48ZyBpZD1cXFwiYmRcXFwiPjwvZz48ZyBpZD1cXFwiYmVcXFwiPjwvZz48ZyBpZD1cXFwiYmZcXFwiPjwvZz48ZyBpZD1cXFwiYmdcXFwiPjwvZz48ZyBpZD1cXFwiYmhcXFwiPjxwYXRoIGQ9XFxcIk0yNS43MywxSDQuMjdjLTEuODEsMC0zLjI3LDEuNDctMy4yNywzLjI3VjI1LjczYzAsMS44MSwxLjQ3LDMuMjcsMy4yNywzLjI3SDI1LjczYzEuODEsMCwzLjI3LTEuNDcsMy4yNy0zLjI3VjQuMjdjMC0xLjgxLTEuNDctMy4yNy0zLjI3LTMuMjdaTTksMjdINC4yN2MtLjcsMC0xLjI3LS41Ny0xLjI3LTEuMjd2LTQuMjNoNnY1LjVabTAtNy41SDN2LTUuNWg2djUuNVptMC03LjVIM1Y3aDZ2NVptOS0zVjI3aC03VjdoN3YyWm05LDE2LjczYzAsLjctLjU3LDEuMjctMS4yNywxLjI3aC01Ljczdi01LjVoN3Y0LjIzWm0wLTYuMjNoLTd2LTUuNWg3djUuNVptMC03LjVoLTdWN2g3djVaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4vcHJvcGVydHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWN0aW9uOiAoKSA9PiB2b2lkO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHZpc2libGU/OiBib29sZWFuO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBzdmc/OiBzdHJpbmc7XG4gICAgY29udGFpbmVyPzogc3RyaW5nO1xuICAgIGNzc0NsYXNzZXM/OiBzdHJpbmc7XG4gICAgY3NzSW1hZ2U/OiBzdHJpbmc7XG4gICAgY3NzTGFiZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSUFjdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogSUFjdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UgfHwge30pLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IHNvdXJjZVtrZXldKTtcbiAgICB9XG4gICAgQHByb3BlcnR5KCkgbmFtZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGFjdGlvbjogKCkgPT4gdm9pZDtcbiAgICBAcHJvcGVydHkoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIHZpc2libGU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBhY3RpdmU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgaWNvbjogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIHN2Zzogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNzc0NsYXNzZXM6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBjc3NJbWFnZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNzc0xhYmVsOiBzdHJpbmc7XG59IiwiaW1wb3J0IFwiLi9hY3Rpb25zLnNjc3NcIjtcblxuIiwiaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5cbmV4cG9ydCBjbGFzcyBIYXNoVGFibGVTdG9yYWdlIHtcbiAgICBwcm90ZWN0ZWQgaGFzaCA9IHt9O1xuICAgIHB1YmxpYyBvd25lcjogYW55O1xuICAgIHB1YmxpYyBnZXRWYWx1ZShuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaGFzaFtuYW1lXTtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFzaFtuYW1lXSA9IHZhbDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgICBwcml2YXRlIHByb3BlcnR5VmFsdWVMaXN0bmVyczoge1twcm9wZXJ0eU5hbWU6IHN0cmluZ106IHtba2V5OiBzdHJpbmddOiAob2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSkgPT4gdm9pZCB9fSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VycmVudERlcGVuZGVuY2lzOiBEZXBlbmRlbmNpZXMgPSB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVByb3BlcnRpZXNTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IEhhc2hUYWJsZVN0b3JhZ2UoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBmaW5pc2hDb2xsZWN0RGVwZW5kZW5jaWVzKCk6IERlcGVuZGVuY2llcyB7XG4gICAgICBjb25zdCBkZXBzID0gQmFzZS5jdXJyZW50RGVwZW5kZW5jaXM7XG4gICAgICBCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBkZXBzO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0Q29sbGVjdERlcGVuZGVuY2llcyh1cGRhdGVyOiAoKSA9PiB2b2lkLCB0YXJnZXQ6IEJhc2UsIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmIChCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHQgdG8gY29sbGVjdCBuZXN0ZWQgZGVwZW5kZW5jaWVzLiBOZXN0ZWQgZGVwZW5kZW5jaWVzIGFyZSBub3Qgc3VwcG9ydGVkLlwiKTtcbiAgICAgIH1cbiAgICAgIEJhc2UuY3VycmVudERlcGVuZGVuY2lzID0gbmV3IERlcGVuZGVuY2llcyh1cGRhdGVyLCB0YXJnZXQsIHByb3BlcnR5KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgY29sbGVjdERlcGVuZGVuY3kodGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAoQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMuYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICB9XG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZSA9IEJhc2UuY3JlYXRlUHJvcGVydGllc1N0b3JhZ2UoKSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uub3duZXIgPSB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5TmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eUxpc3RuZXJzID0gdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYoISFwcm9wZXJ0eUxpc3RuZXJzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0eUxpc3RuZXJzKS5mb3JFYWNoKGtleSA9PiBwcm9wZXJ0eUxpc3RuZXJzW2tleV0ob2xkVmFsdWUsIG5ld1ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICBCYXNlLmNvbGxlY3REZXBlbmRlbmN5KHRoaXMsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdG9yYWdlLmdldFZhbHVlKHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldFZhbHVlKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgaWYoIWlzRXF1YWwob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJQcm9wZXJ0eVZhbHVlTGlzdG5lcihwcm9wZXJ0eU5hbWU6IHN0cmluZywgbGlzdG5lcjogKG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQsIGtleTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcGVydHlMaXN0bmVycyA9IHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKCFwcm9wZXJ0eUxpc3RuZXJzKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eUxpc3RuZXJzID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0eUxpc3RuZXJzO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnR5TGlzdG5lcnNba2V5XSA9IGxpc3RuZXI7XG4gICAgfVxuICAgIHB1YmxpYyB1blJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIocHJvcGVydHlOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcGVydHlMaXN0bmVycyA9IHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKCEhcHJvcGVydHlMaXN0bmVycykge1xuICAgICAgICAgICAgZGVsZXRlIHByb3BlcnR5TGlzdG5lcnNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmNpZXMge1xuICAgIHByaXZhdGUgc3RhdGljIERlcGVuZGVuY2llc0NvdW50ID0gMDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY3VycmVudERlcGVuZGVuY3k6ICgpID0+IHZvaWQsIHB1YmxpYyB0YXJnZXQ6IEJhc2UsIHB1YmxpYyBwcm9wZXJ0eTogc3RyaW5nKSB7XG4gICAgfVxuICAgIGRlcGVuZGVuY2llczogQXJyYXk8eyBvYmo6IEJhc2UsIHByb3A6IHN0cmluZywgaWQ6IHN0cmluZyB9PiA9IFtdO1xuICAgIGlkOiBzdHJpbmcgPSBcIlwiICsgKCsrRGVwZW5kZW5jaWVzLkRlcGVuZGVuY2llc0NvdW50KTtcbiAgICBhZGREZXBlbmRlbmN5KHRhcmdldDogQmFzZSwgcHJvcGVydHk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0YXJnZXQgJiYgdGhpcy5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmICh0aGlzLmRlcGVuZGVuY2llcy5zb21lKGRlcGVuZGVuY3kgPT4gZGVwZW5kZW5jeS5vYmogPT09IHRhcmdldCAmJiBkZXBlbmRlbmN5LnByb3AgPT09IHByb3BlcnR5KSlcbiAgICAgICAgcmV0dXJuO1xuICBcbiAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLnB1c2goe1xuICAgICAgICBvYmo6IHRhcmdldCxcbiAgICAgICAgcHJvcDogcHJvcGVydHksXG4gICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICB9KTtcbiAgICAgIHRhcmdldC5yZWdpc3RlclByb3BlcnR5VmFsdWVMaXN0bmVyKHByb3BlcnR5LCB0aGlzLmN1cnJlbnREZXBlbmRlbmN5LCB0aGlzLmlkKTtcbiAgXG4gICAgfVxuICAgIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKGRlcGVuZGVuY3kgPT4ge1xuICAgICAgICBkZXBlbmRlbmN5Lm9iai51blJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIoZGVwZW5kZW5jeS5wcm9wLCBkZXBlbmRlbmN5LmlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGNsYXNzIENvbXB1dGVkVXBkYXRlcjxUID0gYW55PiB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb21wdXRlZFVwZGF0ZXJUeXBlID0gXCJfX2RlcGVuZGVuY3lfY29tcHV0ZWRcIjtcbiAgICBwdWJsaWMgc3RhdGljIENvbGxlY3REZXBlbmRlbmNpZXM8VSA9IGFueT4ob2JqOiBCYXNlLCBjb21wdXRlZFVwZGF0ZXI6IENvbXB1dGVkVXBkYXRlcjxVPiwgcHJvcGVydHlOYW1lOiBzdHJpbmcpOiBVIHtcbiAgICAgIEJhc2Uuc3RhcnRDb2xsZWN0RGVwZW5kZW5jaWVzKCgpID0+IG9ialtwcm9wZXJ0eU5hbWVdID0gY29tcHV0ZWRVcGRhdGVyLnVwZGF0ZXIoKSwgb2JqLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gY29tcHV0ZWRVcGRhdGVyLnVwZGF0ZXIoKTtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IEJhc2UuZmluaXNoQ29sbGVjdERlcGVuZGVuY2llcygpO1xuICAgICAgY29tcHV0ZWRVcGRhdGVyLnNldERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyA9IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGRhdGVyOiAoKSA9PiBUKSB7XG4gICAgfVxuICAgIHJlYWRvbmx5IHR5cGUgPSBDb21wdXRlZFVwZGF0ZXIuQ29tcHV0ZWRVcGRhdGVyVHlwZTtcbiAgICBwdWJsaWMgZ2V0IHVwZGF0ZXIoKTogKCkgPT4gVCB7XG4gICAgICByZXR1cm4gdGhpcy5fdXBkYXRlcjtcbiAgICB9XG4gICAgcHVibGljIHNldERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyk6IHZvaWQge1xuICAgICAgdGhpcy5jbGVhckRlcGVuZGVuY2llcygpO1xuICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXM7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXREZXBlbmRlbmNpZXMoKTogRGVwZW5kZW5jaWVzIHtcbiAgICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY2llcztcbiAgICB9XG4gICAgcHVibGljIG9ic2VydmUodGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xuICAgICAgQ29tcHV0ZWRVcGRhdGVyLkNvbGxlY3REZXBlbmRlbmNpZXModGFyZ2V0LCB0aGlzLCBwcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGNsZWFyRGVwZW5kZW5jaWVzKCkge1xuICAgICAgaWYgKHRoaXMuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGRpc3Bvc2UoKTogYW55IHtcbiAgICAgIHRoaXMuY2xlYXJEZXBlbmRlbmNpZXMoKTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IFwiLi9kcm9wZG93bi1hY3Rpb25zLnNjc3NcIjtcbiIsImltcG9ydCB7IENvbXB1dGVkVXBkYXRlciB9IGZyb20gXCIuL2RlcGVuZGVuY2llc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wZXJ0eURlY29yYXRvck9wdGlvbnMge1xuICAgIGRlZmF1bHRWYWx1ZT86IGFueTtcbiAgICBvblNldD86ICh2YWw6IGFueSwgdGFyZ2V0OiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eShvcHRpb25zPzogSVByb3BlcnR5RGVjb3JhdG9yT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwcm9jZXNzQ29tcHV0ZWRVcGRhdGVyID0gKG9iajogYW55LCB2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgdmFsLnR5cGUgPT09IENvbXB1dGVkVXBkYXRlci5Db21wdXRlZFVwZGF0ZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbXB1dGVkVXBkYXRlci5Db2xsZWN0RGVwZW5kZW5jaWVzKG9iaiwgdmFsLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZ2V0RGVmYXVsdFZhbHVlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBvcHRpb25zLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpID8gW10uY29uY2F0KGRlZmF1bHRWYWx1ZSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5VmFsdWUoa2V5LCBnZXREZWZhdWx0VmFsdWUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb2Nlc3NDb21wdXRlZFVwZGF0ZXIodGhpcywgdmFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5VmFsdWUoa2V5LCBuZXdWYWx1ZSwgZ2V0RGVmYXVsdFZhbHVlKCkpO1xuICAgICAgICAgICAgICAgIGlmICghIW9wdGlvbnMgJiYgb3B0aW9ucy5vblNldCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uU2V0KG5ld1ZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIjtcblxudHlwZSAgVE9wZXJhdGlvbiA9IFwiRVFcIiB8IFwiTkVRXCIgfCBcIkdcIiB8IFwiTFwiIHwgXCJHRVFcIiB8IFwiTEVRXCIgfCBcIklTTlwiIHwgXCJJU05OXCIgfCBcIkNcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRPcGVyYXRpb24ge1xuICAgIG9wOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGZ1bmM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRDb21wYXJlIHtcbiAgICBmaWVsZDogc3RyaW5nO1xuICAgIG9wOiBUT3BlcmF0aW9uO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRPcGVyYW5kIHtcbiAgICBsZXZlbHVwOiBib29sZWFuO1xuICAgIG9wZXJhbmQ6IHtcbiAgICAgICAgZmllbGQ6IHN0cmluZyxcbiAgICAgICAgb3A6IFRPcGVyYXRpb24sXG4gICAgICAgIHZhbHVlOiBzdHJpbmcgfCBOdW1iZXIsXG4gICAgICAgIHBhdGg/OiBzdHJpbmdbXSxcbiAgICAgICAgc2VhcmNoX2luX2tleT86IGJvb2xlYW4sXG4gICAgICAgIG1fb3JkZXI/OiBib29sZWFuLFxuICAgICAgICBmdW5jPzogc3RyaW5nLFxuICAgIH0sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFnZ3JlZ2F0ZSB7XG4gICAgZnVuYzogc3RyaW5nLFxuICAgIGZpZWxkOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRMb2dpYyB7XG4gICAgc3RyaWN0OiBib29sZWFuO1xuICAgIG9wZXJhbmRzOiBJRmluZE9wZXJhbmRbXTtcbiAgICBhZ2dyZWdhdGU/OiBJQWdncmVnYXRlW107XG59XG5cbmV4cG9ydCB2YXIgb3BlcmF0aW9uc01hcDogeyBbaW5kZXg6IHN0cmluZ106IElGaW5kT3BlcmF0aW9uW10gfSA9IHt9O1xuXG52YXIgZGVmYXVsdE9wZXJhdGlvbnNNYXAgPSB7XG4gICAgc3RyaW5nOiBbXG4gICAgICAgIHtvcDogXCJDXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJjb250YWluc1wiKX0sXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGRhdGU6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWdyZWF0ZXJcIil9LFxuICAgICAgICB7b3A6IFwiTFwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGRhdGV0aW1lOiBbXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlbGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgaW50ZWdlcjogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIk5FUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybm90ZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIkdFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkxFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc2VxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICBudW1lcmljOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJub3RlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiR0VRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTEVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGJvb2w6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgXSxcbiAgICBtb25leTogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIk5FUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybm90ZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIkdFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkxFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc2VxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICByYWRpb2J1dHRvbjogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbn1cbk9iamVjdC5rZXlzKGRlZmF1bHRPcGVyYXRpb25zTWFwKS5mb3JFYWNoKGtleSA9PiBvcGVyYXRpb25zTWFwW2tleV0gPSBkZWZhdWx0T3BlcmF0aW9uc01hcFtrZXldKTtcbiIsImV4cG9ydCBjb25zdCBhZGQgPSByZXF1aXJlKCcuL2ljb25zL2ljb25faXRlbS1hZGQuc3ZnJyk7XG5leHBvcnQgY29uc3QgZXF1YWwgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fZXF1YWwuc3ZnJyk7XG5leHBvcnQgY29uc3QgdGFibGUgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fdGFibGUtbWVyZ2Uuc3ZnJyk7XG5leHBvcnQgY29uc3Qgc2F2ZSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9pdGVtLXNhdmUuc3ZnJyk7XG5leHBvcnQgY29uc3QgZGVsID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2l0ZW0tZGVsZXRlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHBhc3RlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3Bhc3RlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IG1vcmVfc3EgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fbW9yZV9zcS5zdmcnKTtcbmV4cG9ydCBjb25zdCBjaGVjayA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9jaGVjay5zdmcnKTtcbmV4cG9ydCBjb25zdCBzb3J0dXAgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fc29ydC11cC5zdmcnKTtcbmV4cG9ydCBjb25zdCBzb3J0ZG93biA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9zb3J0LWRvd24uc3ZnJyk7XG5leHBvcnQgY29uc3QgZmlsdGVyID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2ZpbHRlci5zdmcnKTtcbmV4cG9ydCBjb25zdCBtb3JlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX21vcmUuc3ZnJyk7XG5leHBvcnQgY29uc3QgZWRpdCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9lZGl0LnN2ZycpO1xuZXhwb3J0IGNvbnN0IGFycm93cmlnaHQgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fYXJyb3ctcmlnaHQuc3ZnJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3NlYXJjaC5zdmcnKTtcbmV4cG9ydCBjb25zdCBjcm9zcyA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9jcm9zcy5zdmcnKTtcbmV4cG9ydCBjb25zdCBhcnJvd2Rvd24gPSByZXF1aXJlKCcuL2ljb25zL2ljb25fYXJyb3ctZG93bi5zdmcnKTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2NvcmUvYWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL2FjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvZHJvcGRvd24tYWN0aW9uc1wiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9maW5kXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY29sdW1uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9zdW1tYXJ5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1kZWZhdWx0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9maWx0ZXItc2VsZWN0XCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL251bWJlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvYm9vbFwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9hcnJheS1kYXRhLXByb3ZpZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9yZW1vdGUtZGF0YS1wcm92aWRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ljb25cIlxuIiwiZXhwb3J0IGNsYXNzIExvY2FsaXphdGlvbiB7XG4gICAgc3RhdGljIGVuZ2xpc2hTdHJpbmdzID0ge1xuICAgICAgICBmaWx0ZXJjb250YWluczogXCJDb250YWluc1wiLFxuICAgICAgICBmaWx0ZXJlcXVhbDogXCJFcXVhbFwiLFxuICAgICAgICBmaWx0ZXJpc251bGw6IFwiRW1wdHlcIixcbiAgICAgICAgZmlsdGVyaXNub3RudWxsOiBcIk5vdCBlbXB0eVwiLFxuICAgICAgICBmaWx0ZXJncmVhdGVyOiBcIkdyZWF0ZXJcIixcbiAgICAgICAgZmlsdGVybGVzczogXCJMZXNzXCIsXG4gICAgICAgIGZpbHRlcmdyZWF0ZXJlcXVhbDogXCJHcmVhdGVyIG9yIGVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmxlc3NlcXVhbDogXCJMZXNzIG9yIGVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmRhdGVub3RlcXVhbDogXCJOb3QgZXF1YWxcIixcbiAgICAgICAgZmlsdGVyZGF0ZWVxdWFsOiBcIkVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmRhdGVncmVhdGVyOiBcIkZyb21cIixcbiAgICAgICAgZmlsdGVyZGF0ZWxlc3M6IFwiVG9cIixcbiAgICAgICAgbm9EYXRhOiBcIk5vIERhdGFcIlxuICAgIH07XG4gICAgc3RhdGljIGdldFN0cmluZyA9IChzdHJpbmdJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2xpc2hTdHJpbmdzW3N0cmluZ0lkXTtcbiAgICB9IFxufSIsImNvbnN0IGNvbXBvbmVudHM6IEFycmF5PHtbaW5kZXg6IHN0cmluZ106IChwcm9wczogYW55KSA9PiBKU1guRWxlbWVudH0+ID0gW11cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZywgY29tcG9uZW50Q3JlYXRvcjogKHByb3BzOiBhbnkpID0+IEpTWC5FbGVtZW50KSB7XG4gICAgY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9IGNvbXBvbmVudENyZWF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZykge1xuICAgIGRlbGV0ZSBjb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBYnJpc0NvbXBvbmVudFByb3BzIHtcbiAgICBjb21wb25lbnROYW1lOiBzdHJpbmc7XG4gICAgY29tcG9uZW50UHJvcHM6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFicmlzQ29tcG9uZW50KHsgY29tcG9uZW50TmFtZSwgY29tcG9uZW50UHJvcHMgfTogSUFicmlzQ29tcG9uZW50UHJvcHMpIHtcbiAgICBjb25zdCBjb21wb25lbnRDcmVhdG9yID0gY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcbiAgICBpZighY29tcG9uZW50Q3JlYXRvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlICdcIiArIGNvbXBvbmVudE5hbWUgKyBcIicgY29tcG9uZW50IGhhc24ndCBmb3VuZC5cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50Q3JlYXRvcihjb21wb25lbnRQcm9wcyk7XG59IiwiaW1wb3J0IHsgQmFzZSwgSGFzaFRhYmxlU3RvcmFnZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vYWJyaXMtY29tcG9uZW50XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbC1lZGl0b3JcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NlbGwtdmlld2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9yb3dcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL3N1bW1hcnlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL3NlYXJjaFwiO1xuLy8gZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvZmlsdGVyLWRlZmF1bHRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NvbHVtbi1maWx0ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1zZWxlY3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvYWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93aWRnZXRzL2FjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvZHJvcGRvd24tYWN0aW9uc1wiO1xuLy8gZXhwb3J0ICogZnJvbSBcIi4vd2lkZ2V0cy9pY29uXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2Jvb2wtY2VsbC1lZGl0b3JcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2Jvb2wtY2VsbC12aWV3ZXJcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWFjdEhhc2hUYWJsZVN0b3JhZ2UgZXh0ZW5kcyBIYXNoVGFibGVTdG9yYWdlIHtcbiAgcHJpdmF0ZSBsaW5rQXJyYXlUb09ic2VydmFibGUoYXJyYXk6IEFycmF5PGFueT4pIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXS5jb25jYXQoYXJyYXkpO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIFtcInBvcFwiLCBcInB1c2hcIiwgXCJzcGxpY2VcIiwgXCJzbGljZVwiLCBcInNoaWZ0XCIsIFwidW5zaGlmdFwiXS5mb3JFYWNoKFxuICAgICAgKGZ1bmNOYW1lKSA9PiB7XG4gICAgICAgIHJlc3VsdFtmdW5jTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc3QgZnVuY1JlcyA9IEFycmF5LnByb3RvdHlwZVtmdW5jTmFtZV0uYXBwbHkocmVzdWx0LCBhcmd1bWVudHMpO1xuICAgICAgICAgIEFycmF5LnByb3RvdHlwZVtmdW5jTmFtZV0uYXBwbHkoYXJyYXksIGFyZ3VtZW50cyk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm93bmVyLl9fdHJpZ2dlclVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBzZWxmLm93bmVyLl9fdHJpZ2dlclVwZGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnVuY1JlcztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcHVibGljIGdldFZhbHVlKG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgY29uc3QgdmFsdWUgPSBzdXBlci5nZXRWYWx1ZShuYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PT0gZGVmYXVsdFZhbHVlKSB7XG4gICAgICB0aGlzLmhhc2hbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5saW5rQXJyYXlUb09ic2VydmFibGUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICBzdXBlci5zZXRWYWx1ZShuYW1lLCB2YWwpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5vd25lci5fX3RyaWdnZXJVcGRhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5vd25lci5fX3RyaWdnZXJVcGRhdGUoKTtcbiAgICB9XG4gIH1cbn1cblxuQmFzZS5jcmVhdGVQcm9wZXJ0aWVzU3RvcmFnZSA9ICgpID0+IG5ldyBSZWFjdEhhc2hUYWJsZVN0b3JhZ2UoKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IG1ha2VSZWFjdGl2ZU1vZGVsID1cbiAgKG1vZGVsOiBhbnksIHZhbDogbnVtYmVyLCB1cGRhdGVyOiAodmFsOiBudW1iZXIpID0+IHZvaWQpID0+ICgpID0+IHtcbiAgICBtb2RlbFtcIl9fdHJpZ2dlclVwZGF0ZVwiXSA9ICgpID0+IHtcbiAgICAgIHVwZGF0ZXIodmFsICsgMSk7XG4gICAgfTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGVsZXRlIG1vZGVsW1wiX190cmlnZ2VyVXBkYXRlXCJdO1xuICAgIH07XG4gIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVhY3RpdmUobW9kZWw6IGFueSkge1xuICBjb25zdCBbdXBkYXRlLCB1cGRhdGVyXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIHVzZUVmZmVjdChtYWtlUmVhY3RpdmVNb2RlbChtb2RlbCwgdXBkYXRlLCB1cGRhdGVyKSk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FicmlzLWNvbXBvbmVudFwiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4uL3JlYWN0aXZpdHlcIjtcbmltcG9ydCB7IElUYWJsZUNlbGxFZGl0b3JQcm9wcyB9IGZyb20gXCIuL2NlbGwtZWRpdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZTRCb29sQ2VsbEVkaXRvcih7IG1vZGVsIH06IElUYWJsZUNlbGxFZGl0b3JQcm9wcykge1xuICBtYWtlUmVhY3RpdmUobW9kZWwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fYm9vbC1jZWxsLWVkaXRvclwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNoZWNrZWQ9e21vZGVsLnZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBtb2RlbC52YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgbW9kZWwuY29tcGxldGUodHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5yZWdpc3RlckNvbXBvbmVudChcImJvb2wtY2VsbC1lZGl0b3JcIiwgVGFibGU0Qm9vbENlbGxFZGl0b3IpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vYWJyaXMtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBtYWtlUmVhY3RpdmUgfSBmcm9tIFwiLi4vcmVhY3Rpdml0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbFZpZXdlclByb3BzIH0gZnJvbSBcIi4vY2VsbC12aWV3ZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlNEJvb2xDZWxsVmlld2VyKHsgY2VsbCwgY2xhc3NOYW1lIH06IElUYWJsZUNlbGxWaWV3ZXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lICsgXCIgYWJyaXMtdGFibGVfX2Jvb2wtY2VsbC12aWV3ZXJcIn0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fYm9vbC1jZWxsLXZpZXdlci1jaXJjbGVcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNlbGwuZGF0YSA/IFwiZ3JlZW5cIiA6IFwicmVkXCIgfX1cbiAgICAgID48L3NwYW4+XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5yZWdpc3RlckNvbXBvbmVudChcImJvb2wtY2VsbC12aWV3ZXJcIiwgVGFibGU0Qm9vbENlbGxWaWV3ZXIpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wbGFjZUVkaXRvciB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsLWVkaXRvclwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vYWJyaXMtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBtYWtlUmVhY3RpdmUgfSBmcm9tIFwiLi4vcmVhY3Rpdml0eVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNlbGxFZGl0b3JQcm9wcyB7XG4gIG1vZGVsOiBJbnBsYWNlRWRpdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFibGU0Q2VsbEVkaXRvcih7IG1vZGVsIH06IElUYWJsZUNlbGxFZGl0b3JQcm9wcykge1xuICBtYWtlUmVhY3RpdmUobW9kZWwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fY2VsbC1lZGl0b3JcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBkZWZhdWx0VmFsdWU9e21vZGVsLnZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG1vZGVsLnZhbHVlID0gZS50YXJnZXQudmFsdWV9XG4gICAgICAgIG9uS2V5VXA9e2UgPT4gbW9kZWwucHJvY2Vzc0tleVVwKGUubmF0aXZlRXZlbnQpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxucmVnaXN0ZXJDb21wb25lbnQoXCJhYnJpcy1jZWxsLWVkaXRvclwiLCBUYWJsZTRDZWxsRWRpdG9yKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwgfSBmcm9tIFwiLi4vLi4vdGFibGUvY2VsbFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vYWJyaXMtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBtYWtlUmVhY3RpdmUgfSBmcm9tIFwiLi4vcmVhY3Rpdml0eVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNlbGxWaWV3ZXJQcm9wcyB7XG4gIGNlbGw6IElUYWJsZUNlbGw7XG4gIGNsYXNzTmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZTRDZWxsVmlld2VyKHsgY2VsbCwgY2xhc3NOYW1lIH06IElUYWJsZUNlbGxWaWV3ZXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY2VsbC50ZXh0IH19XG4gICAgPjwvc3Bhbj5cbiAgKTtcbn1cblxucmVnaXN0ZXJDb21wb25lbnQoXCJhYnJpcy1jZWxsLXZpZXdlclwiLCBUYWJsZTRDZWxsVmlld2VyKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4uLy4uL3RhYmxlXCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsLCBUYWJsZUNlbGwgfSBmcm9tIFwiLi4vLi4vdGFibGUvY2VsbFwiO1xuaW1wb3J0IHsgQWJyaXNDb21wb25lbnQgfSBmcm9tIFwiLi4vYWJyaXMtY29tcG9uZW50XCI7XG5pbXBvcnQgeyBtYWtlUmVhY3RpdmUgfSBmcm9tIFwiLi4vcmVhY3Rpdml0eVwiO1xuaW1wb3J0IHsgVGFibGU0Q2VsbEVkaXRvciB9IGZyb20gXCIuL2NlbGwtZWRpdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ2VsbFByb3BzIHtcbiAgdGFibGU6IFRhYmxlO1xuICBjZWxsOiBJVGFibGVDZWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFibGU0Q2VsbCh7IHRhYmxlLCBjZWxsIH06IElUYWJsZUNlbGxQcm9wcykge1xuICBtYWtlUmVhY3RpdmUoY2VsbCk7XG5cbiAgY29uc3QgaXNFZGl0TW9kZSA9ICEhY2VsbC5pbnBsYWNlRWRpdG9yICYmIHRhYmxlLmNvbmZpZy5lbmFibGVFZGl0O1xuICBjb25zdCBpc01lcmdlZENlbGwgPSBjZWxsLmNvdW50ID4gMSAmJiB0YWJsZS5pc01lcmdlZNChZWxscztcblxuICBpZiAoIWlzRWRpdE1vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1RhYmxlQ2VsbC5nZXRDb250YWluZXJDc3MoY2VsbCwgaXNNZXJnZWRDZWxsKX1cbiAgICAgICAgc3R5bGU9e3sgdG9wOiBpc01lcmdlZENlbGwgPyB0YWJsZS50YWJsZUhlYWRIZWlnaHQgLSAyICsgXCJweFwiIDogdW5kZWZpbmVkIH19XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0YWJsZS5zdGFydEVkaXRDZWxsKGNlbGwpfVxuICAgICAgPlxuICAgICAgICA8QWJyaXNDb21wb25lbnQgY29tcG9uZW50TmFtZT17Y2VsbC52aWV3ZXJ9IGNvbXBvbmVudFByb3BzPXt7IGNlbGw6IGNlbGwsIGNsYXNzTmFtZTogVGFibGVDZWxsLmdldENvbnRlbnRDc3MoY2VsbCwgaXNNZXJnZWRDZWxsKSB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8QWJyaXNDb21wb25lbnQgY29tcG9uZW50TmFtZT17Y2VsbC5lZGl0b3J9IGNvbXBvbmVudFByb3BzPXt7IG1vZGVsOiBjZWxsLmlucGxhY2VFZGl0b3IgfX0gLz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NvbHVtbi1maWx0ZXJcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tIFwiLi4vLi4vaWNvblwiO1xuaW1wb3J0IHsgQWJyaXNGaWx0ZXJTZWxlY3QgfSBmcm9tIFwiLi9maWx0ZXItc2VsZWN0XCI7XG5pbXBvcnQgeyBUYWJsZUZpbHRlclNlbGVjdCB9IGZyb20gXCIuLi8uLi90YWJsZS9maWx0ZXItc2VsZWN0XCI7XG5pbXBvcnQgeyBDb2x1bW5GaWx0ZXJJdGVtIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQWJyaXNDb2x1bW5GaWx0ZXJJdGVtKHtcbiAgZmlsdGVySXRlbSxcbn06IHtcbiAgZmlsdGVySXRlbTogQ29sdW1uRmlsdGVySXRlbTtcbn0pIHtcbiAgbWFrZVJlYWN0aXZlKGZpbHRlckl0ZW0pO1xuICBjb25zdCBbdGFibGVGaWx0ZXJTZWxlY3QsIHNlVGFibGVGaWx0ZXJTZWxlY3RdID0gdXNlU3RhdGU8VGFibGVGaWx0ZXJTZWxlY3Q+KFxuICAgIG5ldyBUYWJsZUZpbHRlclNlbGVjdChcbiAgICAgIGZpbHRlckl0ZW0uZmlsdGVySXRlbVZhbHVlLFxuICAgICAgZmlsdGVySXRlbS5jb2x1bW4ubmFtZSxcbiAgICAgIGZpbHRlckl0ZW0uY29sdW1uLnR5cGUsXG4gICAgICBmaWx0ZXJJdGVtLmdldENvbHVtbkRhdGFcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1maWx0ZXJfX19vcGVyYXRpb25cIlxuICAgICAgICB2YWx1ZT17ZmlsdGVySXRlbS5vcGVyYXRpb24/LnRleHR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGZpbHRlckl0ZW0ub3BlcmF0aW9uID0gZmlsdGVySXRlbS5vcGVyYXRpb25zLmZpbmQoXG4gICAgICAgICAgICAobykgPT4gby50ZXh0ID09PSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtmaWx0ZXJJdGVtLm9wZXJhdGlvbnMubWFwKChzKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e3Mub3B9IHRpdGxlPXtzLnRleHR9PlxuICAgICAgICAgICAge3MudGV4dH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIHtcbiAgICAgICAgZmlsdGVySXRlbS5zaG93T3BlcmFuZCAmJiBmaWx0ZXJJdGVtLm9wZXJhdGlvbi5vcCA9PSBcIkVRXCIgJiYgKFxuICAgICAgICAgIDxBYnJpc0ZpbHRlclNlbGVjdCB2aWV3TW9kZWw9e3RhYmxlRmlsdGVyU2VsZWN0fSAvPlxuICAgICAgICApXG5cbiAgICAgICAgLyogPGFicmlzLWZpbHRlci1zZWxlY3QgY2xhc3M9XCJhYnJzLWZpbHRlcl9fdmFsdWVcIlxucGFyYW1zPVwidmFsdWU6IGZpbHRlckl0ZW1WYWx1ZSwgY29sdW1uTmFtZTogY29sdW1uLm5hbWUsIGdldENvbHVtbkRhdGE6IGdldENvbHVtbkRhdGFcIj5cbjwvYWJyaXMtZmlsdGVyLXNlbGVjdD4gKi9cbiAgICAgIH1cbiAgICAgIHtmaWx0ZXJJdGVtLnNob3dPcGVyYW5kICYmIGZpbHRlckl0ZW0ub3BlcmF0aW9uLm9wICE9IFwiRVFcIiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1maWx0ZXJfX29wZXJhbmRcIlxuICAgICAgICAgIGRhdGEtYmluZD1cImNvbXBvbmVudDogeyBuYW1lOiBmaWx0ZXJFZGl0b3JOYW1lLCBwYXJhbXM6IHsgdmFsdWU6IGZpbHRlckl0ZW1WYWx1ZSwgY29sdW1uOiBjb2x1bW4gfSB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIipcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWx0ZXJJdGVtLmZpbHRlckl0ZW1WYWx1ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgKGZpbHRlckl0ZW0uZmlsdGVySXRlbVZhbHVlLnZhbHVlID0gZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NvbHVtbi1maWx0ZXJcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tIFwiLi4vLi4vaWNvblwiO1xuaW1wb3J0IHsgQWJyaXNGaWx0ZXJTZWxlY3QgfSBmcm9tIFwiLi9maWx0ZXItc2VsZWN0XCI7XG5pbXBvcnQgeyBUYWJsZUZpbHRlclNlbGVjdCB9IGZyb20gXCIuLi8uLi90YWJsZS9maWx0ZXItc2VsZWN0XCI7XG5pbXBvcnQgeyBBYnJpc0NvbHVtbkZpbHRlckl0ZW0gfSBmcm9tIFwiLi9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFicmlzQ29sdW1uRmlsdGVyKHsgY29udGV4dCB9OiB7IGNvbnRleHQ6IEZpbHRlckNvbnRleHQgfSkge1xuICBtYWtlUmVhY3RpdmUoY29udGV4dCk7XG4gIGlmIChjb250ZXh0LmZpbHRlckl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2NvbnRleHQuY29sdW1uLm5hbWV9IGNsYXNzTmFtZT1cImFicmlzLWZpbHRlci1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLWZpbHRlcl9fdGl0bGUgYWJyaXMtZmlsdGVyLXRleHRcIj5cbiAgICAgICAge2NvbnRleHQuY29sdW1uLnRpdGxlICsgXCI6XCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjb250ZXh0LmZpbHRlckl0ZW1zLm1hcCgoZmlsdGVySXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJhYnJpcy1maWx0ZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICB7aW5kZXggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtZmlsdGVyX19vcGVyYXRvciBhYnJpcy1maWx0ZXItdGV4dFwiPiY8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxBYnJpc0NvbHVtbkZpbHRlckl0ZW1cbiAgICAgICAgICAgIGZpbHRlckl0ZW09e2ZpbHRlckl0ZW19XG4gICAgICAgICAgPjwvQWJyaXNDb2x1bW5GaWx0ZXJJdGVtPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLWZpbHRlcl9fcmVtb3ZlXCJcbiAgICAgICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiAkcGFyZW50LnJlbW92ZUl0ZW0sIGNsaWNrQnViYmxlOiBmYWxzZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY29udGV4dC5yZW1vdmVJdGVtKGZpbHRlckl0ZW0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtZmlsdGVyX19yZW1vdmUtaWNvbiBhYnJpcy1zdmctaWNvblwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBJY29ucy5jcm9zcyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGVGaWx0ZXJTZWxlY3QgfSBmcm9tIFwiLi4vLi4vdGFibGUvZmlsdGVyLXNlbGVjdFwiO1xuaW1wb3J0IHsgbWFrZVJlYWN0aXZlIH0gZnJvbSBcIi4uL3JlYWN0aXZpdHlcIjtcbmltcG9ydCAqIGFzIEljb25zIGZyb20gXCIuLi8uLi9pY29uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBYnJpc0ZpbHRlclNlbGVjdCh7XG4gIHZpZXdNb2RlbCxcbn06IHtcbiAgdmlld01vZGVsOiBUYWJsZUZpbHRlclNlbGVjdDtcbn0pIHtcbiAgbWFrZVJlYWN0aXZlKHZpZXdNb2RlbCk7XG4gIGNvbnN0IEN1c3RvbVRhZyA9IGBhYnJpcy1maWx0ZXItc2VsZWN0YCBhcyBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHM7XG4gIHJldHVybiAoXG4gICAgPEN1c3RvbVRhZyBjbGFzc05hbWU9XCJhYnJzLWZpbHRlcl9fdmFsdWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtc2VsZWN0LXNlbGVjdGlvblwiPlxuICAgICAgICB7dmlld01vZGVsLnNlbGVjdGVkSXRlbXMubWFwKChpKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW1cIiBrZXk9e2kubmFtZX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnJpcy1zZWxlY3QtaXRlbS10aXRsZVwiPntpLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zdmctaWNvbiBhYnJpcy1zZWxlY3QtaXRlbS1jbG9zZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB2aWV3TW9kZWwuZGVsZXRlSXRlbXMoaSl9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBJY29ucy5jcm9zcyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc2VsZWN0LWJ1dHRvbiBhYnJpcy1zdmctaWNvblwiXG4gICAgICAgIHRpdGxlPXt2aWV3TW9kZWwudGl0bGV9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB2aWV3TW9kZWwudG9nZ2xlKG51bGwsIGUpfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogSWNvbnMuYXJyb3dkb3duLFxuICAgICAgICB9fVxuICAgICAgPjwvZGl2PlxuICAgICAge3ZpZXdNb2RlbC5pc09wZW4gJiYgKFxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLW1lbnUgYWJyaXMtYnV0dG9uLXRvZ2dsZV9fZHJvcGRvd24tbWVudVwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge3ZpZXdNb2RlbC5pc0ZpbHRlclNlYXJjaEJ5VHlwZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXNlbGVjdF9fZHJvcGRvd24tc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZpZXdNb2RlbC5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gKHZpZXdNb2RlbC5maWx0ZXJUZXh0ID0gdi50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKlwiXG4gICAgICAgICAgICAgICAgLy8gICBkYXRhLWJpbmQ9XCJ2YWx1ZVVwZGF0ZTogJ2FmdGVya2V5ZG93bidcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dmlld01vZGVsLmZvdW5kSXRlbXMubWFwKChmaSwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXNlbGVjdF9fZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB2aWV3TW9kZWwuY2xpY2tJdGVtKGZpKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc2VsZWN0X19kcm9wZG93bi1oaWRlLWNoZWNrXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZpZXdNb2RlbC5pc0NoZWNrZWQoZmkpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge319XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zdmctaWNvbiBhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLWNoZWNrXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBJY29ucy5jaGVjayxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFicmlzLXNlbGVjdF9fZHJvcGRvd24tbGFiZWxcIj57ZmkubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7dmlld01vZGVsLmlzTG9hZE1vcmUgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLWJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB2aWV3TW9kZWwubG9hZE1vcmUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJyaXMtYWN0aW9uLWJ1dHRvbl9fbGFiZWxcIj5Nb3JlPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9DdXN0b21UYWc+XG4gICk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vLi4vdGFibGVcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5pbXBvcnQgeyBBYnJpc0FjdGlvbnMgfSBmcm9tIFwiLi4vd2lkZ2V0cy9hY3Rpb25zXCI7XG5pbXBvcnQgeyBBYnJpc0Ryb3Bkb3duQWN0aW9ucyB9IGZyb20gXCIuLi93aWRnZXRzL2Ryb3Bkb3duLWFjdGlvbnNcIjtcbmltcG9ydCB7IFRhYmxlUm93IH0gZnJvbSBcIi4vcm93XCI7XG5pbXBvcnQgeyBUYWJsZVN1bW1hcnkgfSBmcm9tIFwiLi4vLi4vdGFibGUvc3VtbWFyeVwiO1xuaW1wb3J0IHsgVGFibGU0U3VtbWFyeSB9IGZyb20gXCIuL3N1bW1hcnlcIjtcbmltcG9ydCB7IEFicmlzU2VhcmNoIH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5pbXBvcnQgeyBBYnJpc0NvbHVtbkZpbHRlciB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXJcIjtcblxuZnVuY3Rpb24gRW1wdHlUYWJsZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8dHIgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGVfX3Jvd1wiPlxuICAgICAgPHRkXG4gICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWNlbGxcIlxuICAgICAgICBjb2xTcGFuPXtcIjEwMCVcIiBhcyBhbnl9XG4gICAgICAgIGRhdGEtYmluZD1cInRleHQ6IG5vRGF0YVRleHRcIlxuICAgICAgPlxuICAgICAgICBub0RhdGFcbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTG9hZGluZ0luZGljYXRvcih0YWJsZTogVGFibGUpIHtcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB0YWJsZS5jb2x1bW5zLmZpbHRlcigoYykgPT4gYy52aXNpYmxlKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgoYywgaW5kZXgpID0+IChcbiAgICAgICAgPHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19yb3dcIj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGVfX2NoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZV9faWNvbi1jaGVja1wiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAge3Zpc2libGVDb2x1bW5zLm1hcCgodmMpID0+IChcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtY2VsbF9fY29udGFpbmVyIGFicmlzLXRhYmxlLWNlbGxfX2NvbnRhaW5lci0tbG9hZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZS1pY29uLXJvdy10b29scyBhYnJpcy10YWJsZV9fbW9yZVwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0YWJsZS5pY29ucy5tb3JlIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWljb24tcm93LXRvb2xzIGFicmlzLXRhYmxlX19lZGl0XCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRhYmxlLmljb25zLmVkaXQgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVByb3BzIHtcbiAgbW9kZWw6IFRhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFibGU0KHtcbiAgbW9kZWwsXG59OiBJVGFibGVQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGNvbnN0IGRyb3Bkb3duQWN0aW9ucyA9IG1vZGVsLmdldEFjdGlvbnMoXCJkcm9wZG93bkFjdGlvbnNcIik7XG4gIGNvbnN0IFtzdGFydFJvdywgc2V0U3RhcnRSb3ddID0gdXNlU3RhdGU8bnVtYmVyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCByb290UmVmID0gdXNlUmVmKG51bGwpO1xuICBtYWtlUmVhY3RpdmUobW9kZWwpO1xuICAvLyBtYWtlUmVhY3RpdmUobW9kZWwuc2VhcmNoTW9kZWwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG1vZGVsLmluaXRpYWxpemUocm9vdFJlZi5jdXJyZW50LnBhcmVudEVsZW1lbnQpO1xuICB9KTtcbiAgY29uc3QgQ3VzdG9tVGFnID0gYHRhYmxlNGAgYXMga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzO1xuICByZXR1cm4gKFxuICAgIDxDdXN0b21UYWc+XG4gICAgICA8ZGl2IHJlZj17cm9vdFJlZn0gY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtcmVzaXphYmxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXNjcm9sbC1jb250YWluZXJcIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9faGVhZGVyIGFicmlzLXRhYmxlLXN0aWNreS1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgPHRyIGtleT1cImhlYWRlci10b29sc1wiIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWhlYWRlci10b29sc1wiPlxuICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaGVhZGVyLXRvb2xzX19jZWxsXCJcbiAgICAgICAgICAgICAgICAgIGNvbFNwYW49e1wiMTAwJVwiIGFzIGFueX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWhlYWRlci10b29sc19fY29udGFpbmVyIGFicmlzLXRhYmxlLWdyb3VwLWhlYWRlci10ZWNobmljYWwtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXByZWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtc2VhcmNoLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZWwuc2hvd1NlYXJjaCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFicmlzU2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17bW9kZWwuaWNvbnMuc2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaE1vZGVsPXttb2RlbC5zZWFyY2hNb2RlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvQWJyaXNTZWFyY2g+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBYnJpc0FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e21vZGVsLnRvcEFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGVsLmRyb3Bkb3duQWN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFicmlzRHJvcGRvd25BY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtZHJvcGRvd24gYWJyaXMtdGFibGUtYWN0aW9ucy1tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXttb2RlbC5kcm9wZG93bkFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge21vZGVsLnZpZXdGaWx0ZXJUYWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtZmlsdGVyX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGVsLmNvbHVtbnMubWFwKChjKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFicmlzQ29sdW1uRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2MubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ9e2MuZmlsdGVyQ29udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyIGtleT1cImhlYWRlci10aXRsZVwiIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAga2V5PVwicm93LXNlbGVjdGlvbi1jZWxsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWhlYWRlci10aXRsZV9fY2VsbCBhYnJpcy10YWJsZS1zd2l0Y2hcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5pc051bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFicmlzLXRhYmxlLXN3aXRjaF9fdGV4dCBzd2l0Y2hfX3RleHQtLXNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJhYnJpcy10YWJsZS1zd2l0Y2hfX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhfKSA9PiAobW9kZWwuaXNOdW1iZXIgPSAhbW9kZWwuaXNOdW1iZXIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAjXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIHttb2RlbC5jb2x1bW5zXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChjKSA9PiBjLnZpc2libGUpXG4gICAgICAgICAgICAgICAgICAubWFwKChjKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Yy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWhlYWRlci10aXRsZV9fY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KGUpID0+IG1vZGVsLmxvZ01vdXNlT3V0KGMsIGUpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4gbW9kZWwubG9nTW91c2VNb3ZlKGMsIGUpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KGUpID0+IG1vZGVsLmxvZ01vdXNlVXAoYywgZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS10aXRsZV9fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuY2xpY2tDb2x1bW4oYywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS10aXRsZV9fdG9vbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLXRpdGxlX19zb3J0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm9yZGVyID09PSBmYWxzZSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IG1vZGVsLmljb25zLnNvcnR1cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zdmctaWNvbiBhYnJpcy10YWJsZS10aXRsZV9fc29ydGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5vcmRlciA9PT0gdHJ1ZSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IG1vZGVsLmljb25zLnNvcnRkb3duLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLXRpdGxlX19maWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjLmNsaWNrRmlsdGVyKGMsIGUubmF0aXZlRXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IG1vZGVsLmljb25zLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS10aXRsZV9yZXNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBtb2RlbC5sb2dNb3VzZU92ZXIoYywgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gbW9kZWwubG9nTW91c2VPdXQoYywgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KGUpID0+IG1vZGVsLmxvZ01vdXNlTW92ZShjLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KGUpID0+IG1vZGVsLmxvZ01vdXNlVXAoYywgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IG1vZGVsLmxvZ01vdXNlRG93bihjLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgIGtleT1cInJvdy1jb250ZXh0LW1lbnUtY2VsbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1oZWFkZXItdGl0bGVfX2NlbGxcIlxuICAgICAgICAgICAgICAgID48L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fYm9keVwiPlxuICAgICAgICAgICAgICB7bW9kZWwucm93cy5sZW5ndGggPT0gMCAmJiBtb2RlbC5sb2FkaW5nTXV0ZXggPT0gZmFsc2VcbiAgICAgICAgICAgICAgICA/IEVtcHR5VGFibGUoKVxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAge21vZGVsLmxvYWRpbmdNdXRleFxuICAgICAgICAgICAgICAgID8gTG9hZGluZ0luZGljYXRvcihtb2RlbClcbiAgICAgICAgICAgICAgICA6IG1vZGVsLnJvd3MubWFwKChyKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAga2V5PXtyLmlkIHx8IHIubnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICB0YWJsZT17bW9kZWx9XG4gICAgICAgICAgICAgICAgICAgIHJvdz17cn1cbiAgICAgICAgICAgICAgICAgID48L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDx0Zm9vdCBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fZm9vdGVyIGFicmlzLXRhYmxlLXN0aWNreS1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAge21vZGVsLnNob3dUYWJsZVN1bW1hcnkgJiYgKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9XCJmb290ZXItc3VtbWFyeVwiIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWZvb3Rlci1zdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiZm9vdGVyLXRlY2gtY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGwgYWJyaXMtdGFibGUtZm9vdGVyX19jZWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtaWNvbi1lcXVhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IG1vZGVsLmljb25zLmVxdWFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIHttb2RlbC5jb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGMpID0+IGMudmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoYykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLWZvb3Rlcl9fY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlNFN1bW1hcnkgc3VtbWFyeT17bmV3IFRhYmxlU3VtbWFyeShjKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJmb290ZXItY29udGV4dC1tZW51LWNlbGxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsIGFicmlzLXRhYmxlLWZvb3Rlcl9fY2VsbFwiXG4gICAgICAgICAgICAgICAgICA+PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8dHIga2V5PVwiZm9vdGVyLXRvb2xzXCIgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtZm9vdGVyLXRvb2xzXCI+XG4gICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1mb290ZXItdG9vbHNfX2NlbGxcIlxuICAgICAgICAgICAgICAgICAgY29sU3Bhbj17XCIxMDAlXCIgYXMgYW55fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtZm9vdGVyLXRvb2xzX19jb250YWluZXIgYWJyaXMtdGFibGUtZ3JvdXAtaGVhZGVyLXRlY2huaWNhbC1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtcm93LW1hbmFnZW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWJyaXNBY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e21vZGVsLmJvdHRvbUFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWluZm9fX3RvdGFsIGFicmlzLXRhYmxlLWluZm9fX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIlRvdGFsOiBcIiArIG1vZGVsLnRvdGFsQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtaW5mb19fZ28tdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLWdvLXRvX190ZXh0IGFicmlzLXRhYmxlLWluZm9fX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG86XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtZ28tdG9fX3ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttb2RlbC5zdGFydFJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGFydFJvdygrZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5zdGFydFJvdyA9ICtlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhYnJpcy1idG4tdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWdvLXRvX19pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBtb2RlbC5pY29ucy5hcnJvd3JpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KF8pID0+IChtb2RlbC5zdGFydFJvdyA9IHN0YXJ0Um93KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0N1c3RvbVRhZz5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vLi4vdGFibGVcIjtcbmltcG9ydCB7IElUYWJsZVJvdyB9IGZyb20gXCIuLi8uLi90YWJsZS9yb3dcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5pbXBvcnQgeyBUYWJsZTRDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVJvd1Byb3BzIHtcbiAgdGFibGU6IFRhYmxlO1xuICByb3c6IElUYWJsZVJvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlUm93KHsgdGFibGUsIHJvdyB9OiBJVGFibGVSb3dQcm9wcykge1xuICBtYWtlUmVhY3RpdmUocm93KTtcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB0YWJsZS5jb2x1bW5zLmZpbHRlcigoYykgPT4gYy52aXNpYmxlKTtcbiAgcmV0dXJuIChcbiAgICA8dHJcbiAgICAgIGtleT17cm93LmlkIHx8IHJvdy5udW1iZXJ9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICByb3cuc2VsZWN0ZWRcbiAgICAgICAgICA/IFwiYWJyaXMtdGFibGVfX3JvdyBhYnJpcy10YWJsZV9fcm93LS1zZWxlY3RlZFwiXG4gICAgICAgICAgOiBcImFicmlzLXRhYmxlX19yb3dcIlxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJub25lXCIgfX1cbiAgICA+XG4gICAgICA8dGRcbiAgICAgICAga2V5PVwidGVjaG5pY2FsLWNlbGxcIlxuICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsXCJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHJvdy5zZWxlY3Qocm93LCBlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXCI+XG4gICAgICAgICAge3RhYmxlLmlzTnVtYmVyID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fbnVtYmVyXCI+e3Jvdy5udW1iZXJ9PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGVfX2NoZWNrXCI+XG4gICAgICAgICAgICAgIHtyb3cuc2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlX19pY29uLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGFibGUuaWNvbnMuY2hlY2sgfX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgICB7cm93LmNlbGxzLm1hcChcbiAgICAgICAgKGNlbGwpID0+XG4gICAgICAgICAgKGNlbGwuY291bnQgPiAwIHx8ICF0YWJsZS5pc01lcmdlZNChZWxscykgJiYgKFxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIGtleT17Y2VsbC5uYW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIFwiYWJyaXMtdGFibGUtY2VsbCBcIiArXG4gICAgICAgICAgICAgICAgKGNlbGwuY291bnQgPiAxICYmIHRhYmxlLmlzTWVyZ2Vk0KFlbGxzXG4gICAgICAgICAgICAgICAgICA/IFwiYWJyaXMtdGFibGUtY2VsbC0tbWVyZ2VkIFwiXG4gICAgICAgICAgICAgICAgICA6IFwiXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY2VsbC5jb2xvciB9fVxuICAgICAgICAgICAgICByb3dTcGFuPXt0YWJsZS5pc01lcmdlZNChZWxscyA/IGNlbGwuY291bnQgOiAxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGFibGU0Q2VsbFxuICAgICAgICAgICAgICAgIGtleT17Y2VsbC5uYW1lfVxuICAgICAgICAgICAgICAgIHRhYmxlPXt0YWJsZX1cbiAgICAgICAgICAgICAgICBjZWxsPXtjZWxsfVxuICAgICAgICAgICAgICA+PC9UYWJsZTRDZWxsPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICApXG4gICAgICApfVxuICAgICAgPHRkXG4gICAgICAgIGtleT1cImNvbnRleHQtbWVudS1jZWxsXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbFwiXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3cuY2xpY2socm93LCBlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtaWNvbi1yb3ctdG9vbHMgYWJyaXMtdGFibGVfX21vcmVcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0YWJsZS5pY29ucy5tb3JlIH19XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWljb24tcm93LXRvb2xzIGFicmlzLXRhYmxlX19lZGl0XCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGFibGUuaWNvbnMuZWRpdCB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshdGFibGUuaGFzQWN0aXZlSW5wbGFjZUVkaXRvciAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy10YWJsZV9fcm93LS1zZWxlY3RcIj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXRhYmxlX19yb3ctLWNvbG9yZWRcIlxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHJvdy5jb2xvciA/IHJvdy5jb2xvciA6IFwicmdiYSgyNDgsMjQ5LDI1MylcIiB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi8uLi90YWJsZVwiO1xuaW1wb3J0IHsgU2VhcmNoTW9kZWwgfSBmcm9tIFwiLi4vLi4vdGFibGUvc2VhcmNoXCI7XG5pbXBvcnQgeyBtYWtlUmVhY3RpdmUgfSBmcm9tIFwiLi4vcmVhY3Rpdml0eVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBYnJpc1NlYXJjaFByb3BzIHtcbiAgaWNvbjogYW55O1xuICBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBYnJpc1NlYXJjaCh7IGljb24sIHNlYXJjaE1vZGVsIH06IElBYnJpc1NlYXJjaFByb3BzKSB7XG4gIG1ha2VSZWFjdGl2ZShzZWFyY2hNb2RlbCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnJpcy1zZWFyY2hcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBkZWZhdWx0VmFsdWU9e3NlYXJjaE1vZGVsLnNlYXJjaFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgc2VhcmNoTW9kZWwuc2VhcmNoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImFicmlzLXNlYXJjaF9fdmFsdWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zZWFyY2hfX2J1dHRvblwiXG4gICAgICAgIHRpdGxlPVwiU2VhcmNoXCJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHNlYXJjaE1vZGVsLnNlYXJjaChzZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZSl9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1zdmctaWNvbiBhYnJpcy1zZWFyY2hfX2ljb25cIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaWNvbiB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGVTdW1tYXJ5IH0gZnJvbSBcIi4uLy4uL3RhYmxlL3N1bW1hcnlcIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3VtbWFyeVByb3BzIHtcbiAgc3VtbWFyeTogVGFibGVTdW1tYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFibGU0U3VtbWFyeSh7IHN1bW1hcnkgfTogSVRhYmxlU3VtbWFyeVByb3BzKSB7XG4gIG1ha2VSZWFjdGl2ZShzdW1tYXJ5KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJyaXMtdGFibGUtc3VtbWFyeV9fdmFsdWVcIj57c3VtbWFyeS52YWx1ZX08L3NwYW4+XG4gICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImFicmlzLXRhYmxlLXN1bW1hcnlfX3NlbGVjdFwiIHZhbHVlPXtzdW1tYXJ5LmZ1bmN9PlxuICAgICAgICB7c3VtbWFyeS5zdW1tYXJ5SXRlbXMgJiZcbiAgICAgICAgICBzdW1tYXJ5LnN1bW1hcnlJdGVtcy5tYXAoKHMpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3MudmFsdWV9IHRpdGxlPXtzLnRpdGxlfT5cbiAgICAgICAgICAgICAge3MudGl0bGV9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vY29yZS9hY3Rpb25cIjtcbmltcG9ydCB7IG1ha2VSZWFjdGl2ZSB9IGZyb20gXCIuLi9yZWFjdGl2aXR5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBYnJpc0FjdGlvbih7IGFjdGlvbiB9OiB7IGFjdGlvbjogQWN0aW9uIH0pIHtcbiAgbWFrZVJlYWN0aXZlKGFjdGlvbik7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAga2V5PXthY3Rpb24ubmFtZX1cbiAgICAgIC8vIGRpc2FibGVkPXthY3Rpb24uZW5hYmxlZCA9PT0gZmFsc2V9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb24uYWN0aW9uKCl9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICBcImFicmlzLWJ1dHRvbi0tdHJhbnNwYXJlbnQgYWN0aW9uLWJ1dHRvbiBhYnJpcy1hY3Rpb24tYnV0dG9uIFwiICtcbiAgICAgICAgYWN0aW9uLmNzc0NsYXNzZXMgK1xuICAgICAgICAoYWN0aW9uLmFjdGl2ZSA9PT0gdHJ1ZSA/IFwiIGFicmlzLWFjdGlvbi0tYWN0aXZlXCIgOiBcIlwiKVxuICAgICAgfVxuICAgICAgdHlwZT17YWN0aW9uW1wiZm9ybUlkXCJdICE9PSB1bmRlZmluZWQgPyBcInN1Ym1pdFwiIDogXCJidXR0b25cIn1cbiAgICAgIHRpdGxlPXthY3Rpb24udGl0bGUgfHwgYWN0aW9uLm5hbWV9XG4gICAgICAvLyBmb3JtPXthY3Rpb24uZm9ybUlkfVxuICAgID5cbiAgICAgIHthY3Rpb24uc3ZnICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFicmlzLWFjdGlvbi1idXR0b25fX2ljb24gYWJyaXMtYnV0dG9uX19zdmctaWNvblwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhY3Rpb24uc3ZnIH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e1wiYWJyaXMtYWN0aW9uLWJ1dHRvbl9fbGFiZWwgXCIgKyBhY3Rpb24uY3NzTGFiZWx9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGFjdGlvbi50aXRsZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XG4gICAgICA+XG4gICAgICAgIHthY3Rpb24udGl0bGV9XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFicmlzQWN0aW9uIH0gZnJvbSBcIi4vYWN0aW9uXCI7XG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tIFwiLi4vLi4vaWNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQWJyaXNBY3Rpb25zKHtcbiAgY2xhc3NOYW1lLFxuICBhY3Rpb25zLFxufToge1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgYWN0aW9uczogYW55W107XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7YWN0aW9ucy5tYXAoKGFjdGlvbikgPT4ge1xuICAgICAgICBpZighYWN0aW9uLmFjdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gPEFicmlzQWN0aW9uIGtleT17YWN0aW9uLm5hbWV9IGFjdGlvbj17YWN0aW9ufSAvPlxuICAgICAgICB9XG4gICAgICAgIGlmKGFjdGlvbi5hY3Rpb25zICYmIGFjdGlvbi5hY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYWJyaXMtbmVzdGVkLWFjdGlvbnMgYWJyaXMtYWN0aW9uLWNvbnRleHQtYnV0dG9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnJpcy1idXR0b25fX2xhYmVsXCIgZGF0YS1iaW5kPVwidGV4dDogdGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFicmlzLW5lc3RlZC1hY3Rpb25zX19kcm9wZG93blwiPlxuICAgICAgICAgICAgICB7YWN0aW9uLmFjdGlvbnMubWFwKChhKSA9PiAoXG4gICAgICAgICAgICAgICAgPEFicmlzQWN0aW9uIGtleT17YS5uYW1lfSBhY3Rpb249e2F9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFicmlzQWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFicmlzRHJvcGRvd25BY3Rpb25zKHtcbiAgY2xhc3NOYW1lLFxuICBhY3Rpb25zLFxufToge1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgYWN0aW9uczogYW55W107XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImFicmlzLWFjdGlvbi1idXR0b24gYWJyaXMtYnV0dG9uLS10cmFuc3BhcmVudCBhYnJpcy1idXR0b24tdG9nZ2xlXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGRhdGEtYmluZD1cImNsaWNrOiB0b2dnbGUsIGF0dHI6IHsgdGl0bGU6IHRpdGxlIH1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGRhdGEtYmluZD1cImh0bWw6ICRyb290Lmljb25zLm1vcmVfc3FcIj48L2Rpdj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnJpcy1hY3Rpb24tYnV0dG9uX19sYWJlbFwiXG4gICAgICAgICAgZGF0YS1iaW5kPVwidGV4dDogbW9yZVRleHRcIlxuICAgICAgICA+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7LyogPCEtLSBrbyBpZjogaXNPcGVuIC0tPiAqL31cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJhYnJpcy1idXR0b24tdG9nZ2xlX19kcm9wZG93bi1tZW51XCI+XG4gICAgICAgIDxBYnJpc0FjdGlvbnMgY2xhc3NOYW1lPVwiYWJyaXMtY29udGV4dC1hY3Rpb25zXCIgYWN0aW9ucz17YWN0aW9uc30gLz5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBJVGFibGVDZWxsVHlwZSwgVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5pbXBvcnQgXCIuL2Jvb2wuc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgQm9vbENlbGwgaW1wbGVtZW50cyBJVGFibGVDZWxsVHlwZSB7XG4gICAgbmFtZTogc3RyaW5nID0gXCJib29sXCI7XG4gICAgZWRpdG9yOiBzdHJpbmcgPSBcImJvb2wtY2VsbC1lZGl0b3JcIjtcbiAgICB2aWV3ZXI6IHN0cmluZyA9IFwiYm9vbC1jZWxsLXZpZXdlclwiO1xufVxuXG5UYWJsZUNlbGwucmVnaXN0ZXJDZWxsVHlwZShuZXcgQm9vbENlbGwoKSk7IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmltcG9ydCBcIi4vY2VsbC1lZGl0b3Iuc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgSW5wbGFjZUVkaXRvciBleHRlbmRzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2VsbDogSVRhYmxlQ2VsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5jZWxsLmRhdGE7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSgpIHZhbHVlOiBhbnk7XG4gICAgY29tcGxldGUoY29tbWl0OiBib29sZWFuKSB7XG4gICAgICAgIGlmKGNvbW1pdCkge1xuICAgICAgICAgICAgdGhpcy5jZWxsLmRhdGEgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2VsbC5pbnBsYWNlRWRpdG9yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBwcm9jZXNzS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUoZXZlbnQua2V5Q29kZSA9PT0gMTMpO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uLCBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNlbGxUeXBlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3NzPzogc3RyaW5nO1xuICAgIGVkaXRvcj86IHN0cmluZztcbiAgICB2aWV3ZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ2VsbCB7XG4gICAgZGF0YTogYW55O1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNzczogc3RyaW5nO1xuICAgIGlucGxhY2VFZGl0b3I6IGFueTtcbiAgICBlZGl0b3I/OiBzdHJpbmc7XG4gICAgdmlld2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElUYWJsZUNlbGwge1xuICAgIHB1YmxpYyBzdGF0aWMgY2VsbFR5cGVzID0ge1xuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgY3NzOiBcImFicmlzLXRhYmxlLWNlbGwtLWxlZnRcIixcbiAgICAgICAgICAgIGVkaXRvcjogXCJhYnJpcy1jZWxsLWVkaXRvclwiLFxuICAgICAgICAgICAgdmlld2VyOiBcImFicmlzLWNlbGwtdmlld2VyXCJcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJDZWxsVHlwZShjZWxsVHlwZTogSVRhYmxlQ2VsbFR5cGUpIHtcbiAgICAgICAgVGFibGVDZWxsLmNlbGxUeXBlc1tjZWxsVHlwZS5uYW1lXSA9IGNlbGxUeXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29udGFpbmVyQ3NzKGNlbGw6IElUYWJsZUNlbGwsIGlzTWVyZ2VkQ2VsbDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29udGFpbmVyQ3NzID0gXCJhYnJpcy10YWJsZS1jZWxsX19jb250YWluZXIgXCIgKyBjZWxsLmNzcztcbiAgICAgICAgaWYoaXNNZXJnZWRDZWxsKSB7XG4gICAgICAgICAgY29udGFpbmVyQ3NzICs9IFwiIGNlbGxfX3N0aWNreS10ZXh0XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckNzczsgICAgICAgIFxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldENvbnRlbnRDc3MoY2VsbDogSVRhYmxlQ2VsbCB8IFRhYmxlQ2VsbCwgaXNNZXJnZWRDZWxsOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb250ZW50Q3NzID0gaXNNZXJnZWRDZWxsID8gXCJhYnJpcy10YWJsZS1jZWxsX190ZXh0LS1tZXJnZWRcIiA6IFwiYWJyaXMtdGFibGUtY2VsbF9fdGV4dFwiO1xuICAgICAgICBpZihjZWxsIGluc3RhbmNlb2YgVGFibGVDZWxsICYmIGNlbGwuaXNNb2RpZmllZCkge1xuICAgICAgICAgIGNvbnRlbnRDc3MgKz0gXCIgYWJyaXMtdGFibGUtY2VsbF9fdGV4dC0tbW9kaWZpZWRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGVudENzczsgICAgICAgIFxuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNNb2RpZmllZDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZUNlbGwpID0+IHsgXG4gICAgICAgIGlmKHRhcmdldC50ZXh0ICE9PSB2YWwpIHtcbiAgICAgICAgICAgIHRhcmdldC50ZXh0ID0gdGFyZ2V0LmdldENlbGxUZXh0KHZhbCk7XG4gICAgICAgICAgICB0YXJnZXQuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IH0pIGRhdGE6IGFueTtcbiAgICBAcHJvcGVydHkoKSB0ZXh0OiBzdHJpbmc7IFxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogMSB9KSBjb3VudDogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgbmFtZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGlucGxhY2VFZGl0b3I6IGFueTtcbiAgICBAcHJvcGVydHkoKSBjc3M6IHN0cmluZztcbiAgICBlZGl0b3I6IHN0cmluZztcbiAgICB2aWV3ZXI6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBnZXRDZWxsVHlwZURlc2NyaXB0aW9uKHR5cGU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gVGFibGVDZWxsLmNlbGxUeXBlc1t0eXBlXSB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbENzcyhkYXRhOiBhbnksIGNvbHVtbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxsVHlwZURlc2NyaXB0aW9uKGNvbHVtbi50eXBlKS5jc3M7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsRWRpdG9yKGRhdGE6IGFueSwgY29sdW1uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGxUeXBlRGVzY3JpcHRpb24oY29sdW1uLnR5cGUpLmVkaXRvciB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXS5lZGl0b3I7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsVmlld2VyKGRhdGE6IGFueSwgY29sdW1uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGxUeXBlRGVzY3JpcHRpb24oY29sdW1uLnR5cGUpLnZpZXdlciB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXS52aWV3ZXI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsVGV4dCh2YWw6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWwgYXMgc3RyaW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKGNvbDogSVRhYmxlQ29sdW1uLCBiYWNrOiBib29sZWFuLCBkYXRhOiBhbnksIGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVtjb2wubmFtZV0sXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5uYW1lID0gY29sLm5hbWU7XG4gICAgICAgIHRoaXMuY3NzID0gdGhpcy5nZXRDZWxsQ3NzKGRhdGEsIGNvbCk7XG4gICAgICAgIHRoaXMuZWRpdG9yID0gdGhpcy5nZXRDZWxsRWRpdG9yKGRhdGEsIGNvbCk7XG4gICAgICAgIHRoaXMudmlld2VyID0gdGhpcy5nZXRDZWxsVmlld2VyKGRhdGEsIGNvbCk7XG4gICAgICAgIGlmKGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbC5sYXN0ICYmIGNvbC5sYXN0LnRleHQgPT09IHRoaXMudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gY29sLmxhc3QuY291bnQgKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb2wubGFzdC5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wubGFzdCA9PSBjb2wucHJldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sLnByZXYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sLmNvdW50ID0gdGhpcy5jb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2wubGFzdCA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sLmxhc3QgPT09IG51bGwpIGNvbC5sYXN0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZihjb2wucHJldlZhbHVlICYmIChjb2wucHJldlZhbHVlID09PSB0aGlzLnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5jb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29sLnByZXYuY291bnQgPSBjb2wuY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2wuY291bnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb2wucHJldiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5wcmV2VmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSUZpbmRPcGVyYXRpb24sIG9wZXJhdGlvbnNNYXAgfSBmcm9tIFwiLi4vZmluZFwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJJdGVtVmFsdWUgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW46IElUYWJsZUNvbHVtbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5maWVsZCA9IGNvbHVtbi5uYW1lO1xuICB9XG4gIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsLCB0YXJnZXQ6IEZpbHRlckl0ZW1WYWx1ZSkgPT4gdGFyZ2V0LmNvbHVtbi5maWx0ZXJDb250ZXh0LmFwcGx5KCkgfSkgdmFsdWU6IGFueTtcbiAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWwsIHRhcmdldDogRmlsdGVySXRlbVZhbHVlKSA9PiB0YXJnZXQuY29sdW1uLmZpbHRlckNvbnRleHQuYXBwbHkoKSB9KSBvcDogc3RyaW5nO1xuICBmaWVsZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRmlsdGVySXRlbSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29sdW1uOiBhbnksXG4gICAgcHVibGljIGdldENvbHVtbkRhdGFcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZpbHRlckl0ZW1WYWx1ZSA9IG5ldyBGaWx0ZXJJdGVtVmFsdWUoY29sdW1uKTtcbiAgICBpZihvcGVyYXRpb25zTWFwW3RoaXMuY29sdW1uLnR5cGVdKSB7XG4gICAgICB0aGlzLm9wZXJhdGlvbnMgPSBvcGVyYXRpb25zTWFwW3RoaXMuY29sdW1uLnR5cGVdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMub3BlcmF0aW9ucyA9IG9wZXJhdGlvbnNNYXBbXCJzdHJpbmdcIl07XG4gICAgfVxuICAgIHRoaXMub3BlcmF0aW9uID0gdGhpcy5vcGVyYXRpb25zWzBdO1xuICB9XG5cbiAgb3BlcmF0aW9uczogQXJyYXk8YW55PjtcbiAgXG4gIGdldCBmaWx0ZXJFZGl0b3JOYW1lKCkge1xuICAgIC8vIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcImJvb2xcIikge1xuICAgIC8vICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWJvb2xcIjtcbiAgICAvLyB9IGVsc2UgaWYgKFtcInN0cmluZ1wiLCBcImNhcHRpb25cIiwgXCJwbGFpblwiXS5pbmRleE9mKHRoaXMuY29sdW1uLnR5cGUpICE9PSAtMSApIHtcbiAgICAvLyAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1hdXRvY29tcGxldGVcIjtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLnR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXItZGF0ZVwiO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4udHlwZSA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXItZGF0ZS10aW1lXCI7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcInBpa2V0cG9zaXRpb25cIikge1xuICAgIC8vICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWttcGt0bVwiO1xuICAgIC8vIH0gZWxzZSBpZiAoISF0aGlzLnBhcmFtcy5wcm9wZXJ0eUluZm8ucmVsYXRpb24pIHtcbiAgICAvLyAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1hdXRvY29tcGxldGVcIjtcbiAgICAvLyB9XG4gICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWRlZmF1bHRcIjtcbiAgfVxuICBwdWJsaWMgZmlsdGVySXRlbVZhbHVlOiBGaWx0ZXJJdGVtVmFsdWU7XG4gIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsOiBJRmluZE9wZXJhdGlvbiwgdGFyZ2V0OiBDb2x1bW5GaWx0ZXJJdGVtKSA9PiB7XG4gICAgaWYoISF2YWwpIHtcbiAgICAgIHRhcmdldC5maWx0ZXJJdGVtVmFsdWUub3AgPSB2YWwub3A7XG4gICAgfVxuICAgIHRhcmdldC5zaG93T3BlcmFuZCA9IHZhbCAmJiB2YWwub3AgIT09IFwiSVNOXCIgJiYgdmFsLm9wICE9PSBcIklTTk5cIjtcbiAgfX0pIG9wZXJhdGlvbjogSUZpbmRPcGVyYXRpb247XG4gIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KSBzaG93T3BlcmFuZDogYm9vbGVhbjtcblxuICBnZXRGaWx0ZXJWYWx1ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6IHRoaXMuZmlsdGVySXRlbVZhbHVlLmZpZWxkLFxuICAgICAgb3A6IHRoaXMuZmlsdGVySXRlbVZhbHVlLm9wLFxuICAgICAgdmFsdWU6IHRoaXMuZmlsdGVySXRlbVZhbHVlLnZhbHVlXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSURhdGFQcm92aWRlciwgSURhdGFQcm92aWRlck93bmVyIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGEtcHJvdmlkZXJcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuaW1wb3J0IHsgRmlsdGVySXRlbVZhbHVlLCBDb2x1bW5GaWx0ZXJJdGVtIH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlci1pdGVtXCI7XG5cbmltcG9ydCBcIi4vY29sdW1uLWZpbHRlci5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb250ZXh0IGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbHVtbjogSVRhYmxlQ29sdW1uLCBwcml2YXRlIGRhdGFQcm92aWRlck93bmVyOiBJRGF0YVByb3ZpZGVyT3duZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHNob3dGaWx0ZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgdmFsdWU6IGFueTtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIGZpbHRlckl0ZW1zOiBBcnJheTxDb2x1bW5GaWx0ZXJJdGVtPjtcbiAgXG4gICAgYXBwbHkoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXJJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmdldEZpbHRlclZhbHVlKCkpO1xuICAgIH1cbiAgICBhZGRJdGVtID0gKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICAvLyBmaWx0ZXJWYWx1ZS5vcC5zdWJzY3JpYmUobyA9PiB7aWYobyA9PT0gXCJFUVwiKSBmaWx0ZXJWYWx1ZS52YWx1ZShudWxsKTsgdGhpcy5hcHBseSgpfSk7XG4gICAgICB0aGlzLmZpbHRlckl0ZW1zLnB1c2gobmV3IENvbHVtbkZpbHRlckl0ZW0odGhpcy5jb2x1bW4sIChjb2x1bW4sIGZpbHRlciwgbGltaXQsIG9mZnNldCwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXJPd25lci5kYXRhUHJvdmlkZXIuZ2V0Q29sdW1uRGF0YShjb2x1bW4sIGZpbHRlciwgbGltaXQsIG9mZnNldCwgY2FsbGJhY2spO1xuICAgICAgfSkpO1xuICAgICAgdGhpcy5zaG93RmlsdGVyID0gdHJ1ZTtcbiAgICB9O1xuICAgIHJlbW92ZUl0ZW0gPSAoaXRlbTogQ29sdW1uRmlsdGVySXRlbSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEZpbHRlckl0ZW1zID0gdGhpcy5maWx0ZXJJdGVtcztcbiAgICAgIGN1cnJlbnRGaWx0ZXJJdGVtcy5zcGxpY2UoY3VycmVudEZpbHRlckl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgdGhpcy5zaG93RmlsdGVyID0gISFjdXJyZW50RmlsdGVySXRlbXMubGVuZ3RoOyAgICBcbiAgICAgIHRoaXMudmFsdWUgPSBjdXJyZW50RmlsdGVySXRlbXMubWFwKGkgPT4gaS5maWx0ZXJJdGVtVmFsdWUpO1xuICAgIH0gICAgXG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElBZ2dyZWdhdGUgfSBmcm9tIFwiLi4vZmluZFwiO1xuaW1wb3J0IHsgSURhdGFQcm92aWRlck93bmVyIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGEtcHJvdmlkZXJcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICAvLyBmaWx0ZXI6IGFueTtcbiAgICAvLyBmaWx0ZXJDb250ZXh0OiBGaWx0ZXJDb250ZXh0LFxuICAgIC8vIG9yZGVyOiBzdHJpbmcsXG4gICAgLy8gY291bnQ6IG51bWJlcixcbiAgICAvLyBwcmV2OiBJVGFibGVDZWxsLFxuICAgIC8vIHByZXZWYWx1ZTogYW55LFxuICAgIC8vIGNvbmNhdFByZXY6IGJvb2xlYW4sXG4gICAgLy8gbGFzdDogSVRhYmxlQ2VsbCxcbiAgICAvLyByb3dfY29sb3I6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiBleHRlbmRzIElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uIHtcbiAgICAvLyBuYW1lOiBzdHJpbmc7XG4gICAgLy8gdGl0bGU6IHN0cmluZztcbiAgICAvLyB0eXBlOiBzdHJpbmc7XG4gICAgLy8gdmlzaWJsZTogYm9vbGVhbjtcbiAgICBmaWx0ZXI6IGFueTtcbiAgICBmaWx0ZXJDb250ZXh0OiBGaWx0ZXJDb250ZXh0LFxuICAgIG9yZGVyOiBib29sZWFuLFxuICAgIHN1bW1hcnlWYWx1ZTogYW55LFxuICAgIHN1bW1hcnlQYXJhbXM6IElBZ2dyZWdhdGUsXG4gICAgY291bnQ6IG51bWJlcixcbiAgICBwcmV2OiBJVGFibGVDZWxsLFxuICAgIHByZXZWYWx1ZTogYW55LFxuICAgIGNvbmNhdFByZXY6IGJvb2xlYW4sXG4gICAgbGFzdDogSVRhYmxlQ2VsbCxcbiAgICByb3dfY29sb3I6IHN0cmluZyxcbiAgICBjbGlja0ZpbHRlcjogKGNvbHVtbjogSVRhYmxlQ29sdW1uLCBldmVudDogTW91c2VFdmVudHxhbnkpID0+IHZvaWQsXG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUNvbHVtbiBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJVGFibGVDb2x1bW4ge1xuXG4gICAgY29uc3RydWN0b3IoY29sdW1uRGVzY3JpcHRpb246IElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uLCBwcml2YXRlIHRhYmxlOiBJRGF0YVByb3ZpZGVyT3duZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoY29sdW1uRGVzY3JpcHRpb24gfHwge30pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmKGNvbHVtbkRlc2NyaXB0aW9uW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbHVtbkRlc2NyaXB0aW9uW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZih0aGlzLnRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJDb250ZXh0ID0gbmV3IEZpbHRlckNvbnRleHQodGhpcywgdGFibGUpO1xuICAgIH1cblxuICAgIGZpbHRlcjogYW55O1xuICAgIGZpbHRlckNvbnRleHQ6IEZpbHRlckNvbnRleHQ7XG4gICAgQHByb3BlcnR5KCkgb3JkZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgc3VtbWFyeVZhbHVlOiBhbnk7XG4gICAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWw6IElBZ2dyZWdhdGUsIHRhcmdldDogVGFibGVDb2x1bW4pID0+IHtcbiAgICAgICAgdGFyZ2V0LmNhbGN1bGF0ZVN1bW1hcnkodGFyZ2V0KTtcbiAgICB9fSkgc3VtbWFyeVBhcmFtczogSUFnZ3JlZ2F0ZTtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIHByZXY6IGFueTtcbiAgICBwcmV2VmFsdWU6IGFueTtcbiAgICBjb25jYXRQcmV2OiBib29sZWFuO1xuICAgIGxhc3Q6IGFueTtcbiAgICByb3dfY29sb3I6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmcgPSBcInN0cmluZ1wiO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHVibGljIGNsaWNrRmlsdGVyID0gKGNvbHVtbjogSVRhYmxlQ29sdW1uLCBldmVudDogTW91c2VFdmVudHxhbnkpID0+IHtcbiAgICAgICAgY29sdW1uLmZpbHRlckNvbnRleHQuYWRkSXRlbShjb2x1bW4pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTdW1tYXJ5KGNvbHVtbjogSVRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgICAgIGlmKGNvbHVtbi5zdW1tYXJ5UGFyYW1zICYmIGNvbHVtbi5zdW1tYXJ5UGFyYW1zLmZpZWxkID09PSBjb2x1bW4ubmFtZSAmJiBjb2x1bW4uc3VtbWFyeVBhcmFtcy5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLmRhdGFQcm92aWRlci5nZXRTdW1tYXJ5KGNvbHVtbi5zdW1tYXJ5UGFyYW1zLmZ1bmMsIGNvbHVtbi5zdW1tYXJ5UGFyYW1zLmZpZWxkLCB0aGlzLnRhYmxlW1widGFibGVGaWx0ZXJcIl0sIChkYXRhKSA9PiBjb2x1bW4uc3VtbWFyeVZhbHVlID0gZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2ZpbHRlci1kZWZhdWx0LnNjc3NcIjtcblxuXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgRmlsdGVySXRlbVZhbHVlIH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlci1pdGVtXCI7XG5cbmltcG9ydCBcIi4vZmlsdGVyLXNlbGVjdC5zY3NzXCI7XG5cblxuZnVuY3Rpb24gY29udmVyc2lvbkJ5VHlwZSh2YWx1ZTphbnksIGNvbHVtblR5cGU6IHN0cmluZyk6c3RyaW5ne1xuICAgIGlmKGNvbHVtblR5cGUgPT09XCJib29sXCIpIHJldHVybiB2YWx1ZT9cIlllc1wiOlwiTm9cIjtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclNlYXJjaEJ5VHlwZShjb2x1bW5UeXBlOiBzdHJpbmcpOmJvb2xlYW57XG4gICAgaWYoY29sdW1uVHlwZSA9PT1cImJvb2xcIikgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBUYWJsZUZpbHRlclNlbGVjdCBleHRlbmRzIEJhc2Uge1xuICAgIHByaXZhdGUgbGltaXQ6IG51bWJlciA9IDEwO1xuICAgIHByaXZhdGUgb2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZTogRmlsdGVySXRlbVZhbHVlLCAgcHJpdmF0ZSBjb2x1bW5OYW1lOiBzdHJpbmcsIHByaXZhdGUgY29sdW1uVHlwZTogc3RyaW5nLCBwcml2YXRlIGdldENvbHVtbkRhdGE6IChuYW1lOiBzdHJpbmcsIGZpbHRlclZhbHVlOiBhbnksIGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjYWxsYmFjayA6IChpdGVtczogYW55W10pID0+IHZvaWQpID0+IHZvaWQsIGlzT3Blbj86IGJvb2xlYW4sIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gXCJcIiwgcHVibGljIG1vcmVUZXh0OiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmKGlzT3BlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGlzT3BlbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUZvdW5kSXRlbXMobnVsbCk7XG4gICAgICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2hCeVR5cGUgPSBmaWx0ZXJTZWFyY2hCeVR5cGUoY29sdW1uVHlwZSk7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlRm91bmRJdGVtcyhmaWx0ZXJWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuZm91bmRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuZ2V0Q29sdW1uRGF0YSh0aGlzLmNvbHVtbk5hbWUsIGZpbHRlclZhbHVlLCB0aGlzLmxpbWl0LCB0aGlzLm9mZnNldCwgaXRlbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEl0ZW1zID0gaXRlbXMubWFwKGkgPT4ge3JldHVybiB7bmFtZTogY29udmVyc2lvbkJ5VHlwZShpLCB0aGlzLmNvbHVtblR5cGUpLCB2YWx1ZTogaX19KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkTW9yZSA9IGl0ZW1zLmxlbmd0aCA9PT0gdGhpcy5saW1pdDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDEwO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZE1vcmUoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29sdW1uRGF0YSh0aGlzLmNvbHVtbk5hbWUsIHRoaXMuZmlsdGVyVGV4dCwgdGhpcy5saW1pdCwgdGhpcy5vZmZzZXQsIGl0ZW1zID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaSA9PiB0aGlzLmZvdW5kSXRlbXMucHVzaChpKSlcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkTW9yZSA9IGl0ZW1zLmxlbmd0aCA9PT0gdGhpcy5saW1pdDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDEwO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc09wZW46IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc0ZpbHRlclNlYXJjaEJ5VHlwZTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzTG9hZE1vcmU6IGJvb2xlYW47XG4gICAgdG9nZ2xlID0gKF8sIGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSwgb25TZXQ6ICh2YWwsIHRhcmdldDogVGFibGVGaWx0ZXJTZWxlY3QpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXQgZmlsdGVyIHZhbHVlIHRvIFwiICsgSlNPTi5zdHJpbmdpZnkodmFsKSk7XG4gICAgICAgIHRhcmdldC52YWx1ZS52YWx1ZSA9IHRhcmdldC5zZWxlY3RlZEl0ZW1zO1xuICAgIH0gfSkgc2VsZWN0ZWRJdGVtczogQXJyYXk8YW55PjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIGZvdW5kSXRlbXM6IEFycmF5PGFueT47XG4gICAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWwsIHRhcmdldDogVGFibGVGaWx0ZXJTZWxlY3QpID0+IHtcbiAgICAgICAgdGFyZ2V0LnVwZGF0ZUZvdW5kSXRlbXModmFsKTtcbiAgICB9LCB9KSBmaWx0ZXJUZXh0OiBzdHJpbmc7XG4gICAgaXNDaGVja2VkID0gKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pICE9PSAtMTtcbiAgICB9XG4gICAgY2xpY2tJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmKGl0ZW1JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlSXRlbXMoaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlLnZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcChpPT5pLnZhbHVlKTtcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlLnZhbHVlKSAmJiB0aGlzLnZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMCkgdGhpcy52YWx1ZS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZGVsZXRlSXRlbXMgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihuYW1lKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgQWN0aW9uLCBJQWN0aW9uIH0gZnJvbSBcIi4uL2NvcmUvYWN0aW9uXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBDb21wdXRlZFVwZGF0ZXIgfSBmcm9tIFwiLi4vY29yZS9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7IElucGxhY2VFZGl0b3IgfSBmcm9tIFwiLi9jZWxsLWVkaXRvclwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCwgVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uLCBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiwgVGFibGVDb2x1bW4gfSBmcm9tIFwiLi9jb2x1bW5cIjtcbmltcG9ydCB7IFNlYXJjaE1vZGVsIH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5pbXBvcnQgeyBJRGF0YVByb3ZpZGVyLCBJRGF0YVByb3ZpZGVyT3duZXIgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YS1wcm92aWRlclwiO1xuaW1wb3J0IHsgQXJyYXlEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi4vdXRpbHMvYXJyYXktZGF0YS1wcm92aWRlclwiO1xuaW1wb3J0IHsgSVRhYmxlUm93LCBJVGFibGVSb3dEYXRhLCBUYWJsZVJvdyB9IGZyb20gXCIuL3Jvd1wiO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgTG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvblwiO1xuaW1wb3J0IHsgRmlsdGVySXRlbVZhbHVlIH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlci1pdGVtXCI7XG5cbmltcG9ydCAqIGFzIEljb25zIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG4vKipcbiAqIFBhcmFtZXRlcnMgZm9yIGN1c3RvbWl6aW5nIHRoZSB0YWJsZSB2aWV3LlxuICovXG4gZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb25maWcgZXh0ZW5kcyBJRGF0YVByb3ZpZGVyIHtcbiAgICAvKiogRGVzY3JpcHRpb24gb2YgY29sdW1ucyAqL1xuICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uPjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHRoZSBzZWFyY2ggYmFyICovXG4gICAgZW5hYmxlU2VhcmNoPzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHN1bW1hcnkgcGFuZWwgKi9cbiAgICBlbmFibGVTdW1tYXJ5PzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IG1lcmdlZCBjZWxscyB0b2dnbGUgKi9cbiAgICBlbmFibGVNZXJnZWTQoWVsbHNUb2dnbGUgPzogYm9vbGVhbjtcbiAgICAvKiogVGhlIHByaW1hcnkgdmFsdWUgb2YgdGhlIHBhcmFtZXRlciBmb3IgbWVyZ2luZyBjZWxscyAqL1xuICAgIGVuYWJsZU1lcmdlZNChZWxscyA/OiBib29sZWFuO1xuICAgIC8qKiBQZXJtaXNzaW9uIHRvIGVkaXQgZGF0YSAqL1xuICAgIGVuYWJsZUVkaXQgPzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHRoZSB0YWJsZSBhY3Rpb25zIHBhbmVsICovXG4gICAgYWN0aW9ucz86IEFycmF5PElBY3Rpb24+O1xuICAgIC8qKiBUaGUga2V5IGZpZWxkIG9mIHRoZSB0YWJsZS4gTmVlZGVkIHRvIGVkaXQgdGhlIHRhYmxlLiAqL1xuICAgIGtleUNvbHVtbj86IHN0cmluZztcbiAgICAvKiogU2V0dGluZyB0aGUgY29sb3IgZm9yIHNlbGVjdGVkIGNlbGxzIGluIGNhc2UgdGhlIHNlbGVjdGlvbiBpcyBzZXQgdXNpbmcgYW4gYXR0YWNoZWQgYm9vbGVhbiBjb2x1bW4uIFRoZSBjb2xvciBpcyBzZXQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiBDU1MuICovXG4gICAgc2VsZWN0Q2VsbENvbG9yPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVRhYmxlRmlsdGVyIHtcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIG9wOiBzdHJpbmcsXG4gICAgZmllbGQ6IHN0cmluZyxcbn1cblxuLyoqXG4gKiBDcmVhdGVzIFRhYmxlIGNsYXNzLlxuICogQHBhcmFtIGNvbmZpZyAtIHRhYmxlIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZSBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJRGF0YVByb3ZpZGVyT3duZXIge1xuICAgIHByaXZhdGUgc2Nyb2xsZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHJlc2l6ZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHRhYmxlRWxlbWVudDogSFRNTFRhYmxlRWxlbWVudDtcblxuICAgIHByaXZhdGUgaW5uZXJBY3Rpb25zOiBBcnJheTxJQWN0aW9uPiA9IFtdO1xuICAgIHB1YmxpYyBpY29ucyA9IEljb25zO1xuICAgIHByaXZhdGUgZmlsdGVyVXBkYXRlcjogQ29tcHV0ZWRVcGRhdGVyO1xuXG4gICAgcHVibGljIHN0YXRpYyByb3dIZWlnaHQgPSAyMDsgLy8gVE9ETzogd2UgbmVlZCB0byBjYWxjdWxhdGUgcm93IGhlaWdodCBzb21laG93IGJlZm9yZWhhbmRcblxuICAgIHByaXZhdGUgdXBkYXRlQnlGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGlzT2xkRmlsdGVyID0gKHRoaXMudGFibGVGaWx0ZXIgJiYgdGhpcy50YWJsZUZpbHRlci5sZW5ndGggPiAwKTtcbiAgICAgICAgdGhpcy50YWJsZUZpbHRlciA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5wdXNoKHt2YWx1ZTogdGhpcy5zZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZSwgb3A6IFwiQ1wiLCBmaWVsZDogbnVsbH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uRmlsdGVyVmFsdWUgPSBjb2x1bW4uZmlsdGVyQ29udGV4dC52YWx1ZTtcbiAgICAgICAgICAgIGlmKGNvbHVtbkZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uRmlsdGVyVmFsdWUuZm9yRWFjaCgoZml2OiBGaWx0ZXJJdGVtVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBmaXYub3A7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGZpdi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChvcCA9PT0gXCJFUVwiICYmIHZhbCkgfHwgKG9wID09PSBcIkNcIiAmJiB2YWwpIHx8IChvcCA9PT0gXCJJU05cIikgfHwgKG9wID09PSBcIklTTk5cIikpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIucHVzaCh7dmFsdWU6IHZhbCwgb3A6IG9wLCBmaWVsZDogZml2LmZpZWxkfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZigodGhpcy50YWJsZUZpbHRlci5sZW5ndGggPiAwKSB8fCAoaXNPbGRGaWx0ZXIgJiYgdGhpcy50YWJsZUZpbHRlci5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnByZXZTZWFyY2hWYWx1ZSA9IHRoaXMuc2VhcmNoTW9kZWwuc2VhcmNoVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IElUYWJsZUNvbmZpZywgZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IGNvbmZpZy5lbmFibGVTZWFyY2ggPT09IHRydWU7XG4gICAgICAgIHRoaXMuY3JlYXRlQWN0aW9ucyh0aGlzLmNvbmZpZyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucyh0aGlzLmNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGVyID0gbmV3IENvbXB1dGVkVXBkYXRlcigoKSA9PiB0aGlzLnVwZGF0ZUJ5RmlsdGVyKCkpO1xuICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZXIub2JzZXJ2ZSh0aGlzLCBcIl9fZmlsdGVyVXBkYXRlclZhbHVlXCIpOyAvLyBUT0RPOiBtYWtlIGl0IGVsZWdhbnRcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVyID0gKCkgPT4gdGhpcy51cGRhdGVCeUZpbHRlcigpO1xuICAgICAgICBpZighIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNNZXJnZWTQoWVsbHMgPSBjb25maWcuZW5hYmxlTWVyZ2Vk0KFlbGxzO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxlckVsZW1lbnQgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhYnJpcy10YWJsZS1zY3JvbGwtY29udGFpbmVyXCIpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICB0aGlzLnRhYmxlRWxlbWVudCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKVswXSBhcyBIVE1MVGFibGVFbGVtZW50O1xuICAgICAgICB0aGlzLnJlc2l6ZXJFbGVtZW50ID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWJyaXMtdGFibGVcIilbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIFxuICAgICAgICB2YXIgY2hlY2tMb2FkaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2VsZi5wYXJ0Um93Q291bnQgPSBNYXRoLnJvdW5kKHNlbGYuc2Nyb2xsZXJFbGVtZW50LmNsaWVudEhlaWdodCAvIFRhYmxlLnJvd0hlaWdodCk7XG4gICAgICAgICAgICBpZihzZWxmLnNjcm9sbGVyRWxlbWVudC5zY3JvbGxUb3AgPCBUYWJsZS5yb3dIZWlnaHQgJiYgc2VsZi5sYXN0T2Zmc2V0QmFjayA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHNlbGYubGFzdE9mZnNldEJhY2sgLSBzZWxmLnBhcnRSb3dDb3VudCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1Jvd3Moc2VsZi5sYXN0T2Zmc2V0QmFjaywgTWF0aC5tYXgoMCwgc2VsZi5sYXN0T2Zmc2V0QmFjayAtIHNlbGYucGFydFJvd0NvdW50KSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3Um93cyhzZWxmLnBhcnRSb3dDb3VudCwgTWF0aC5tYXgoMCwgc2VsZi5sYXN0T2Zmc2V0QmFjayAtIHNlbGYucGFydFJvd0NvdW50KSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoKHNlbGYuc2Nyb2xsZXJFbGVtZW50LnNjcm9sbFRvcCA+PSBzZWxmLnRhYmxlRWxlbWVudC5jbGllbnRIZWlnaHQgLSBzZWxmLnNjcm9sbGVyRWxlbWVudC5jbGllbnRIZWlnaHQpICYmIHRoaXMubG9hZE1vcmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXdSb3dzKHNlbGYucGFydFJvd0NvdW50LCBzZWxmLmxhc3RPZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbGVyRWxlbWVudC5vbnNjcm9sbCA9IGNoZWNrTG9hZGluZztcbiAgICAgICAgdGhpcy5yZXNpemVyRWxlbWVudC5vbnJlc2l6ZSA9IGNoZWNrTG9hZGluZztcbiAgICAgICAgY2hlY2tMb2FkaW5nKCk7XG5cbiAgICAgICAgaWYodHlwZW9mIFJlc2l6ZU9ic2VydmVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LnRhcmdldC50YWdOYW1lID09PSBcIlRIRUFEXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoIDwgNzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFicmlzLXRhYmxlLS1zbWFsbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhYnJpcy10YWJsZS0tc21hbGxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSGVhZEhlaWdodCA9IGVudHJ5LmNvbnRlbnRSZWN0LmhlaWdodCArIDU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoZWFkXCIpWzBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93RGV0YWlsKHJvd0RhdGE6IElUYWJsZVJvd0RhdGEpIHtcbiAgICAgICAgdGhpcy5pc1Nob3dEZXRhaWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoaWRlRGV0YWlsKCkge1xuICAgICAgICB0aGlzLmV4cGFuZGVkUm93S2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1Nob3dEZXRhaWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHN0YXJ0Um93OiBudW1iZXIpIHtcbiAgICAgICAgaWYoc3RhcnRSb3cpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldEJhY2sgPSBzdGFydFJvdyAtIDE7XG4gICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXQgPSBzdGFydFJvdyAtIDE7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHsgYy5jb3VudCA9IG51bGw7IGMucHJldiA9IG51bGw7IGMucHJldlZhbHVlID0gdW5kZWZpbmVkOyBjLmxhc3QgPSBudWxsIH0pO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgICAgICAgICB0aGlzLmRyYXdSb3dzKHRoaXMucGFydFJvd0NvdW50LCBzdGFydFJvdyAtIDEsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZURldGFpbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbHVtbihjb2x1bW46IGFueSwgbW9kZWw6IElUYWJsZUNvbmZpZyk6IElUYWJsZUNvbHVtbiB7XG4gICAgICAgIHJldHVybiBuZXcgVGFibGVDb2x1bW4oY29sdW1uLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29sdW1ucyhjb25maWc6IElUYWJsZUNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb25maWcuY29sdW1ucy5tYXAoY29sdW1uID0+IFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW4oY29sdW1uLCBjb25maWcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUFjdGlvbnMoY29uZmlnOiBJVGFibGVDb25maWcpIHtcbiAgICAgICAgaWYoY29uZmlnLmVuYWJsZVN1bW1hcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJBY3Rpb25zLnB1c2gobmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzdW1tYXJ5LWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUYWJsZVN1bW1hcnkgPSAhdGhpcy5zaG93VGFibGVTdW1tYXJ5O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLmVxdWFsLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJ0b3BcIlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvbmZpZy5lbmFibGVNZXJnZWTQoWVsbHNUb2dnbGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJBY3Rpb25zLnB1c2gobmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtZXJnZWTQoWVsbHMtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNZXJnZWTQoWVsbHMgPSAhdGhpcy5pc01lcmdlZNChZWxscztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN2ZzogdGhpcy5pY29ucy50YWJsZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwidG9wXCJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb25maWcuZW5hYmxlRWRpdCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmlubmVyQWN0aW9ucy5wdXNoKG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2F2ZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzSW5zZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGlmeSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoci5udW1iZXI+MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY2VsbHMuZm9yRWFjaChjID0+IGMudGV4dCAhPT0gYy5kYXRhICYmIChtb2RpZnlbYy5uYW1lXSA9IGMudGV4dCkpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighaXNFbXB0eShtb2RpZnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YVByb3ZpZGVyLnNhdmVEYXRhKHRoaXMua2V5Q29sdW1uLCByLnJvd0RhdGFbdGhpcy5rZXlDb2x1bW5dLCBtb2RpZnkpKSByLmNlbGxzLmZvckVhY2goYyA9PiBjLmRhdGEgPSBjLnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNlbGxzLmZvckVhY2goYyA9PiBtb2RpZnlbYy5uYW1lXSA9IGMudGV4dCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YVByb3ZpZGVyLmluc2VydERhdGEodGhpcy5rZXlDb2x1bW4sIG1vZGlmeSkpIGlzSW5zZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luc2VydCkgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuc2F2ZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiYm90dG9tXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJkZWxldGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5udW1iZXI+MCkgdGhpcy5yb3dzLnNsaWNlKHRoaXMucm93cy5pbmRleE9mKHIpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIuZGVsZXRlRGF0YSh0aGlzLmtleUNvbHVtbiwgdGhpcy5zZWxlY3RlZFJvd3MubWFwKHIgPT4gci5udW1iZXI+MCAmJiByLnJvd0RhdGFbdGhpcy5rZXlDb2x1bW5dKSwgKF8gPT4gdGhpcy5yZWZyZXNoKCkpKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLmRlbCxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiYm90dG9tXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJuZXdSb3ctYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2Nyb2xsZXJFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdSb3c6SVRhYmxlUm93RGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IGMudmlzaWJsZSAmJiAobmV3Um93W2MubmFtZV09XCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MudW5zaGlmdCh0aGlzLmNyZWF0ZVJvdyhuZXdSb3csIC0xLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuYWRkLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJib3R0b21cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgKX1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kYXRhUHJvdmlkZXI6IElEYXRhUHJvdmlkZXIgPSB1bmRlZmluZWQ7XG4gICAgZ2V0IGRhdGFQcm92aWRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFQcm92aWRlciB8fCB0aGlzLmNvbmZpZztcbiAgICB9XG4gICAgc2V0IGRhdGFQcm92aWRlcihwcm92aWRlcjogSURhdGFQcm92aWRlcikge1xuICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGRhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiBbXTtcbiAgICAvLyB9XG4gICAgc2V0IGRhdGEoX2RhdGE6IEFycmF5PGFueT4pIHtcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIgPSBuZXcgQXJyYXlEYXRhUHJvdmlkZXIoX2RhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmxhc3RPZmZzZXRCYWNrID0gMDtcbiAgICAgICAgdGhpcy5sYXN0T2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiB7IGMuY291bnQgPSBudWxsOyBjLnByZXYgPSBudWxsOyBjLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDsgfSk7XG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgICAgICB0aGlzLmRyYXdSb3dzKHRoaXMucGFydFJvd0NvdW50LCAwLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaGlkZURldGFpbCgpO1xuICAgIH1cblxuICAgIGRyYXdSb3dzKGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBiYWNrID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIXRoaXMubG9hZGluZ011dGV4KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdNdXRleCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRhdGFQcm92aWRlci5nZXREYXRhKFxuICAgICAgICAgICAgICAgIGxpbWl0LCBcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZpbHRlcihjID0+IGMub3JkZXIgIT09IHVuZGVmaW5lZCkubWFwKGMgPT4gPGFueT57ZmllbGQ6IGMubmFtZSwgZGVzYzogYy5vcmRlcn0pLFxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIsXG4gICAgICAgICAgICAgICAgbnVsbCAvKiYmIHRoaXMucGlubmVkUm93S2V5KCkqLywgXG4gICAgICAgICAgICAgICAgYmFjaywgXG4gICAgICAgICAgICAgICAgKGRhdGEsIG5ld09mZnNldDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGJhY2s6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0QmFjayA9IHRoaXMubGFzdE9mZnNldEJhY2sgLSBsaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldCA9IHRoaXMubGFzdE9mZnNldCArIGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmVCYWNrID0gdGhpcy5sYXN0T2Zmc2V0QmFjayA+IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmUgPSB0aGlzLmxhc3RPZmZzZXQgPD0gdG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJvd3MgPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIChkYXRhIHx8IFtdKS5mb3JFYWNoKChkYXRhSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb3cgPSB0aGlzLmNyZWF0ZVJvdyhiYWNrID8gZGF0YVtkYXRhLmxlbmd0aCAtIDEgLSBOdW1iZXIoaW5kZXgpXSA6IGRhdGFJdGVtLCBiYWNrID8gZGF0YS5sZW5ndGggLSAxIC0gTnVtYmVyKGluZGV4KSArIG9mZnNldCA6IE51bWJlcihpbmRleCkgKyBvZmZzZXQsIGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmFjaykgeyBjdXJyZW50Um93cy51bnNoaWZ0KG5ld1Jvdyk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBjdXJyZW50Um93cy5wdXNoKG5ld1Jvdyk7IH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ011dGV4ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xpY2tSb3cocm93OiBJVGFibGVSb3csIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmZvckVhY2gociA9PiByLnNlbGVjdGVkID0gZmFsc2UpO1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWxlY3RSb3cocm93OiBJVGFibGVSb3csIGV2ZW50KSB7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiB0aGlzLmxhc3RTZWxlY3RSb3cpIHtcbiAgICAgICAgICAgIHRoaXMucm93cy5maWx0ZXIoZSA9PiBlLm51bWJlciA+PSBNYXRoLm1pbih0aGlzLmxhc3RTZWxlY3RSb3cubnVtYmVyLCByb3cubnVtYmVyKSAmJiBlLm51bWJlciA8PSBNYXRoLm1heCh0aGlzLmxhc3RTZWxlY3RSb3cubnVtYmVyLCByb3cubnVtYmVyKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGUgPT4gZS5zZWxlY3RlZCA9IHRydWUpO1xuICAgICAgICB9IFxuICAgICAgICBpZiAocm93LnNlbGVjdGVkKSB0aGlzLmxhc3RTZWxlY3RSb3cgPSByb3c7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cy5sZW5ndGggIT09IDEpIHRoaXMuaGlkZURldGFpbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGlja0NvbHVtbiA9IChjb2x1bW46IElUYWJsZUNvbHVtbiwgZXZlbnQpID0+IHtcbiAgICAgICAgaWYodGhpcy5pc1Nob3dEZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZURldGFpbCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdPcmRlciA9IGNvbHVtbi5vcmRlciA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhY29sdW1uLm9yZGVyO1xuICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubWFwKChjKSA9PiBjLm9yZGVyID0gdW5kZWZpbmVkKVxuICAgICAgICB9IFxuICAgICAgICBjb2x1bW4ub3JkZXIgPSBuZXdPcmRlciBhcyBhbnk7IC8vIFRPRE86IHNvbWV0aGluZyB3cm9uZyBpcyBoZXJlXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVSb3coZGF0YToge1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9LCBudW06IG51bWJlciwgYmFjazogYm9vbGVhbik6IElUYWJsZVJvdyB7XG4gICAgICAgIGxldCByb3dDZWxscyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFRleHQgPSBudWxsO1xuICAgICAgICBsZXQgY29sb3JDZWxsID0gbnVsbCwgY29sb3JSb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gbmV3IFRhYmxlQ2VsbCgpO1xuICAgICAgICAgICAgY2VsbC5pbml0aWFsaXplKGNvbCwgYmFjaywgZGF0YSwgY29sb3JDZWxsKTtcbiAgICAgICAgICAgIGlmKCEhbGFzdFRleHQpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHQgKz0gKFwiL1wiICsgbGFzdFRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdFRleHQgPSAoY29sLmNvbmNhdFByZXYgJiYgIWNvbC5yb3dfY29sb3IpID8gY2VsbC50ZXh0IDogbnVsbDtcbiAgICAgICAgICAgIGNvbG9yUm93ID0gKGNvbC5yb3dfY29sb3IgJiYgIWNvbC5jb25jYXRQcmV2KSA/IChjb2wudHlwZSA9PT0gXCJib29sXCIgPyAoIGRhdGFbY29sLm5hbWVdID8gdGhpcy5jb25maWcuc2VsZWN0Q2VsbENvbG9yIDogbnVsbCkgOiBkYXRhW2NvbC5uYW1lXSkgOiBjb2xvclJvdztcbiAgICAgICAgICAgIGNvbG9yQ2VsbCA9IChjb2wucm93X2NvbG9yICYmIGNvbC5jb25jYXRQcmV2KSA/IChjb2wudHlwZSA9PT0gXCJib29sXCIgPyAoIGRhdGFbY29sLm5hbWVdID8gdGhpcy5jb25maWcuc2VsZWN0Q2VsbENvbG9yIDogbnVsbCkgOiBkYXRhW2NvbC5uYW1lXSkgOiBudWxsO1xuICAgICAgICAgICAgaWYoY29sLnZpc2libGUpIHJvd0NlbGxzLnB1c2goY2VsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpO1xuICAgICAgICBsZXQgcm93X2lkID0gZGF0YVt0aGlzLmtleUNvbHVtbl07XG4gICAgICAgIGNvbnN0IHJvdyA9IG5ldyBUYWJsZVJvdygpO1xuICAgICAgICByb3cuY2VsbHMgPSByb3dDZWxscy5yZXZlcnNlKCk7XG4gICAgICAgIHJvdy5yb3dEYXRhID0gZGF0YTtcbiAgICAgICAgcm93LmlkID0gcm93X2lkO1xuICAgICAgICByb3cubnVtYmVyID0gbnVtICsgMTtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gcm93X2lkICYmICh0aGlzLmV4cGFuZGVkUm93S2V5ID09PSByb3dfaWQpO1xuICAgICAgICByb3cuY29sb3IgPSBjb2xvclJvdztcbiAgICAgICAgcm93LnNlbGVjdCA9IChkYXRhLCBldmVudCkgPT4gdGhpcy5zZWxlY3RSb3coZGF0YSwgZXZlbnQpLFxuICAgICAgICByb3cuY2xpY2sgPSAoZGF0YSwgZXZlbnQpID0+IHRoaXMuY2xpY2tSb3coZGF0YSwgZXZlbnQpXG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJvd0V4cGFuZGVkKGlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRFZGl0Q2VsbCA9IChjZWxsOiBJVGFibGVDZWxsKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRDZWxsRWRpdG9yKSB0aGlzLmN1cnJlbnRDZWxsRWRpdG9yLmlucGxhY2VFZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNlbGwuaW5wbGFjZUVkaXRvciA9IG5ldyBJbnBsYWNlRWRpdG9yKGNlbGwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsRWRpdG9yID0gY2VsbDsgXG4gICAgICAgIHRoaXMuY29tcGxldGVFZGl0Q2VsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wbGV0ZUVkaXRDZWxsKCkge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYXNBY3RpdmVJbnBsYWNlRWRpdG9yQ29yZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzQWN0aXZlSW5wbGFjZUVkaXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQWN0aXZlSW5wbGFjZUVkaXRvckNvcmUoKTtcbiAgICB9XG5cbiAgICBjdXJDb2wgPSB1bmRlZmluZWQ7XG4gICAgbnh0Q29sID0gdW5kZWZpbmVkO1xuICAgIHBhZ2VYID0gdW5kZWZpbmVkO1xuICAgIG54dENvbFdpZHRoID0gdW5kZWZpbmVkO1xuICAgIGN1ckNvbFdpZHRoID0gdW5kZWZpbmVkXG5cbiAgICBwdWJsaWMgbG9nTW91c2VPdmVyID0gKGQsIGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHQgPSAnMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSc7XG4gICAgfVxuICAgIHB1YmxpYyBsb2dNb3VzZU91dCA9IChkLCBlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0ID0gJyc7XG4gICAgfVxuICAgIHB1YmxpYyBsb2dNb3VzZU1vdmUgPSAoZCwgZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJDb2wgJiYgZS5idXR0b25zKSB7XG4gICAgICAgICAgICB2YXIgZGlmZlggPSBlLnBhZ2VYIC0gdGhpcy5wYWdlWDtcbiAgICAgICAgICAgIHRoaXMubnh0Q29sICYmICh0aGlzLm54dENvbC5zdHlsZS53aWR0aCA9ICh0aGlzLm54dENvbFdpZHRoIC0gKGRpZmZYKSkrJ3B4Jyk7XG4gICAgICAgICAgICB0aGlzLmN1ckNvbC5zdHlsZS53aWR0aCA9ICh0aGlzLmN1ckNvbFdpZHRoICsgZGlmZlgpKydweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGxvZ01vdXNlRG93biA9IChkLCBlKSA9PiB7XG4gICAgICAgIHRoaXMuY3VyQ29sID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5ueHRDb2wgPSB0aGlzLmN1ckNvbC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nID8gdGhpcy5jdXJDb2wubmV4dEVsZW1lbnRTaWJsaW5nIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhZ2VYID0gZS5wYWdlWDsgXG4gICAgICAgIHZhciBwYWRkaW5nID0gdGhpcy5wYWRkaW5nRGlmZih0aGlzLmN1ckNvbCk7XG4gICAgICAgIHRoaXMuY3VyQ29sV2lkdGggPSB0aGlzLmN1ckNvbC5vZmZzZXRXaWR0aCAtIHBhZGRpbmc7XG4gICAgICAgIGlmICh0aGlzLm54dENvbCkgdGhpcy5ueHRDb2xXaWR0aCA9IHRoaXMubnh0Q29sLm9mZnNldFdpZHRoIC0gcGFkZGluZzsgICAgXG4gICAgfVxuICAgIHB1YmxpYyBsb2dNb3VzZVVwID0gKGQsIGUpID0+IHtcbiAgICAgICAgdGhpcy5jdXJDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubnh0Q29sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhZ2VYID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm54dENvbFdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmN1ckNvbFdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBhZGRpbmdEaWZmKGNvbCkge1xuICAgICAgICBpZiAodGhpcy5nZXRTdHlsZVZhbChjb2wsJ2JveC1zaXppbmcnKSA9PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWRMZWZ0ID0gdGhpcy5nZXRTdHlsZVZhbChjb2wsJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICB2YXIgcGFkUmlnaHQgPSB0aGlzLmdldFN0eWxlVmFsKGNvbCwncGFkZGluZy1yaWdodCcpO1xuICAgICAgICByZXR1cm4gKHBhcnNlSW50KHBhZExlZnQpICsgcGFyc2VJbnQocGFkUmlnaHQpKTtcbiAgICB9XG4gICAgZ2V0U3R5bGVWYWwoZWxtLGNzcyl7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbG0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoY3NzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcm9vdExldmVsOiBhbnkgPSB0cnVlO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNOdW1iZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc01lcmdlZNChZWxsczogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGxvYWRpbmdNdXRleDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IHRydWUgfSkgbG9hZE1vcmU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBsb2FkTW9yZUJhY2s6IGJvb2xlYW47XG4gICAgbGFzdE9mZnNldCA9IDA7XG4gICAgbGFzdE9mZnNldEJhY2sgPSAwO1xuICAgIHBhcnRSb3dDb3VudCA9IDEwO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10sIG9uU2V0OiAodmFsOiBJVGFibGVDb2x1bW5bXSwgdGFyZ2V0OiBUYWJsZSkgPT4ge1xuICAgICAgICB0YXJnZXQudmlld0ZpbHRlclRhYmxlID0gbmV3IENvbXB1dGVkVXBkYXRlcigoKSA9PiB2YWwuZmlsdGVyKGMgPT4gYy5maWx0ZXJDb250ZXh0LnNob3dGaWx0ZXIpLmxlbmd0aCA+IDApIGFzIGFueTtcbiAgICB9IH0pIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj47XG4gICAgZ2V0IGtleUNvbHVtbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcua2V5Q29sdW1uO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIHJvd3M6IEFycmF5PElUYWJsZVJvdz47XG4gICAgZ2V0IHNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cy5maWx0ZXIociA9PiByLnNlbGVjdGVkKTtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBzaG93VGFibGVTdW1tYXJ5OiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2hvd1NlYXJjaDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBvblNldDogKG5ld1ZhbHVlOiBudW1iZXIsIHRhcmdldDogVGFibGUpID0+IHtcbiAgICAgICAgdGFyZ2V0Lm5hdmlnYXRlVG8obmV3VmFsdWUpO1xuICAgIH0gfSkgc3RhcnRSb3c6IG51bWJlcjtcbiAgICBsYXN0U2VsZWN0Um93ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IDAgfSkgdG90YWxDb3VudDogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogMCB9KSB0YWJsZUhlYWRIZWlnaHQ6IG51bWJlcjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IHRydWUgfSkgc2hvd1RhYmxlRmlsdGVyOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgdmlld0ZpbHRlclRhYmxlOiBib29sZWFuO1xuICAgIHRhYmxlRmlsdGVyOiBJVGFibGVGaWx0ZXJbXTtcbiAgICBjdXJyZW50Q2VsbEVkaXRvcjogSVRhYmxlQ2VsbDtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzU2hvd0RldGFpbDogYm9vbGVhbjtcbiAgICBleHBhbmRlZFJvd0tleTtcblxuICAgIHNlYXJjaE1vZGVsID0gbmV3IFNlYXJjaE1vZGVsKCk7XG5cbiAgICBnZXRBY3Rpb25zID0gKGNvbnRhaW5lcj86IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gW10uY29uY2F0KHRoaXMuaW5uZXJBY3Rpb25zKS5jb25jYXQodGhpcy5jb25maWcuYWN0aW9ucyB8fCBbXSk7XG4gICAgICAgIHJldHVybiBhY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4gYWN0aW9uLmNvbnRhaW5lciA9PT0gY29udGFpbmVyKTtcbiAgICB9XG4gICAgZ2V0IHRvcEFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdGlvbnMoJ3RvcCcpO1xuICAgIH1cbiAgICBnZXQgZHJvcGRvd25BY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpb25zKCdkcm9wZG93bicpO1xuICAgIH1cbiAgICBnZXQgYm90dG9tQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aW9ucygnYm90dG9tJyk7XG4gICAgfVxuICAgIGdldCBub0RhdGFUZXh0KCkge1xuICAgICAgICByZXR1cm4gTG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm5vRGF0YVwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJVGFibGVDZWxsVHlwZSwgVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyQ2VsbCBpbXBsZW1lbnRzIElUYWJsZUNlbGxUeXBlIHtcbiAgICBuYW1lOiBzdHJpbmcgPSBcIm51bWJlclwiO1xuICAgIGNzczogc3RyaW5nID0gXCJhYnJpcy10YWJsZS1jZWxsLS1yaWdodFwiXG59XG5cblRhYmxlQ2VsbC5yZWdpc3RlckNlbGxUeXBlKG5ldyBOdW1iZXJDZWxsKCkpOyIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG4vKipcbiAqIFRoZSBjb2xsZWN0aW9uIG9mIGRhdGEgZm9yIGEgdGFibGUgcm93LiBUaGUga2V5IGlzIHRoZSBuYW1lIG9mIHRoZSBjb2x1bW4uIFRoZSB2YWx1ZSBpcyB0aGUgY29udGVudCBvZiB0aGUgdGFibGUgY2VsbC5cbiAqL1xuIGV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUm93RGF0YSB7XG4gICAgLyoqIFRhYmxlIGNlbGwgY29udGVudCAqL1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlclxufVxuXG5cbi8qKlxuICogSW5mb3JtYXRpb24gbmVlZGVkIHRvIHJlbmRlciBhIHRhYmxlIHJvd1xuICovXG4gZXhwb3J0IGludGVyZmFjZSBJVGFibGVSb3cge1xuICAgIC8qKiBBcnJheSBjb250YWluaW5nIG9ic2VydmFibGUgdGFibGUgY2VsbHMgKi9cbiAgICBjZWxsczogQXJyYXk8SVRhYmxlQ2VsbD4sXG4gICAgLyoqIFRoZSBjb2xsZWN0aW9uIG9mIGRhdGEgZm9yIGEgdGFibGUgcm93ICovXG4gICAgcm93RGF0YTogSVRhYmxlUm93RGF0YSxcbiAgICAvKiogICovXG4gICAgaWQ6IGFueSxcbiAgICAvKiogICovXG4gICAgbnVtYmVyOiBudW1iZXIsXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXG4gICAgY29sb3I6IHN0cmluZyxcbiAgICBzZWxlY3Q6IChkYXRhOiBJVGFibGVSb3csIGV2ZW50KSA9PiB2b2lkLFxuICAgIGNsaWNrOiAoZGF0YTogSVRhYmxlUm93LCBldmVudCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVRhYmxlUm93IHtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIGNlbGxzOiBJVGFibGVDZWxsW107XG4gICAgcm93RGF0YTogSVRhYmxlUm93RGF0YTtcbiAgICBpZDogYW55O1xuICAgIG51bWJlcjogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgY29sb3I6IHN0cmluZztcbiAgICBzZWxlY3Q6IChkYXRhOiBJVGFibGVSb3csIGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gICAgY2xpY2s6IChkYXRhOiBJVGFibGVSb3csIGV2ZW50OiBhbnkpID0+IHZvaWQ7XG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcblxuaW1wb3J0IFwiLi9zZWFyY2guc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBzZWFyY2ggPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucHJldlNlYXJjaFZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHRleHQ7XG4gICAgICAgIHRoaXMudXBkYXRlciAmJiB0aGlzLnVwZGF0ZXIoKTtcbiAgICB9XG4gICAgdXBkYXRlcjogKCkgPT4gdm9pZDtcbiAgICBAcHJvcGVydHkoKSBwcmV2U2VhcmNoVmFsdWU6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBzZWFyY2hWYWx1ZTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuXG5pbXBvcnQgXCIuL3N1bW1hcnkuc2Nzc1wiO1xuXG5jb25zdCBGdW5jdGlvbnM6IEFycmF5PHsgdGl0bGU6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgaGludDogc3RyaW5nLCB0eXBlcz86IHN0cmluZ1tdIH0+ID0gIFtcbiAgeyB0aXRsZTogXCItXCIsIHZhbHVlOiBcIlwiLCBoaW50OiBcIlwiIH0sIFxuICB7IHRpdGxlOiBcIs6jXCIsIHZhbHVlOiBcInN1bVwiLCBoaW50OiBcIlN1bSBvZiBjZWxscyBmb3IgdGhpcyB0YWJsZSBjb2x1bW5cIiwgdHlwZXM6IFtcImludGVnZXJcIiwgXCJtb25leVwiLCBcIm51bWJlclwiXSB9LCBcbiAgeyB0aXRsZTogXCJ4zIRcIiwgdmFsdWU6IFwiYXZnXCIsIGhpbnQ6IFwiQXJpdGhtZXRpYyBtZWFuIGluIHRoaXMgdGFibGUgY29sdW1uXCIsIHR5cGVzOiBbXCJpbnRlZ2VyXCIsIFwibW9uZXlcIiwgXCJudW1iZXJcIl0gfSwgXG4gIHsgdGl0bGU6IFwibWluXCIsIHZhbHVlOiBcIm1pblwiLCBoaW50OiBcIk1pbmltdW0gdmFsdWUgaW4gdGhpcyB0YWJsZSBjb2x1bW5cIiwgdHlwZXM6IFtcImludGVnZXJcIiwgXCJtb25leVwiLCBcImRhdGVcIiwgXCJudW1iZXJcIl0gfSxcbiAgeyB0aXRsZTogXCJtYXhcIiwgdmFsdWU6IFwibWF4XCIsIGhpbnQ6IFwiTWF4aW11bSB2YWx1ZSBpbiB0aGlzIHRhYmxlIGNvbHVtblwiLCB0eXBlczogW1wiaW50ZWdlclwiLCBcIm1vbmV5XCIsIFwiZGF0ZVwiLCBcIm51bWJlclwiXSB9LFxuICB7IHRpdGxlOiBcIs6dXCIsIHZhbHVlOiBcImNvdW50XCIsIGhpbnQ6IFwiTnVtYmVyIG9mIG5vbi1ibGFuayBjZWxscyBpbiB0aGlzIGNvbHVtblwiIH0sXG4gIHsgdGl0bGU6IFwiVVwiLCB2YWx1ZTogXCJ1bmlxdWVcIiwgaGludDogXCJOdW1iZXIgb2YgdW5pcXVlIGNlbGxzIGluIHRoaXMgY29sdW1uXCIgfSxcbl07XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVN1bW1hcnlJdGVtIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nICkge1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVN1bW1hcnkgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW46IElUYWJsZUNvbHVtbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdW1tYXJ5SXRlbXMgPSBGdW5jdGlvbnMuZmlsdGVyKGZ1bmNEZXNjcmlwdGlvbiA9PiB7XG4gICAgICAgIHJldHVybiAhZnVuY0Rlc2NyaXB0aW9uLnR5cGVzIHx8IGZ1bmNEZXNjcmlwdGlvbi50eXBlcy5pbmRleE9mKGNvbHVtbi50eXBlKSAhPT0gLTFcbiAgICAgIH0pLm1hcChmdW5jRGVzY3JpcHRpb24gPT4gbmV3IFRhYmxlU3VtbWFyeUl0ZW0gKGZ1bmNEZXNjcmlwdGlvbi50aXRsZSwgZnVuY0Rlc2NyaXB0aW9uLnZhbHVlKSk7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbi5zdW1tYXJ5VmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbDogYW55KSB7XG4gICAgdGhpcy5jb2x1bW4uc3VtbWFyeVZhbHVlID0gdmFsO1xuICB9XG4gIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogbnVsbCwgb25TZXQ6ICh2YWwsIHRhcmdldDogVGFibGVTdW1tYXJ5KSA9PiB7XG4gICAgdGFyZ2V0LmNvbHVtbi5zdW1tYXJ5UGFyYW1zID0geyBmdW5jOiB2YWwsIGZpZWxkOiB0YXJnZXQuY29sdW1uLm5hbWUgfTtcbiAgfSB9KSBmdW5jOiBhbnk7XG4gIHN1bW1hcnlJdGVtczogQXJyYXk8VGFibGVTdW1tYXJ5SXRlbT47XG59XG4iLCJpbXBvcnQgeyBJRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vZGF0YS1wcm92aWRlclwiO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlEYXRhUHJvdmlkZXIgaW1wbGVtZW50cyBJRGF0YVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogQXJyYXk8YW55Pikge1xuXG4gICAgfVxuXG4gICAgZmlsdGVyZWQoZmlsdGVycywgZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YT8uZmlsdGVyKHJvdyA9PiBcbiAgICAgICAgICAgIGZpbHRlcnMuZXZlcnkoZiA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGYub3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkVRXCI6IHJldHVybiBmLnZhbHVlLmluY2x1ZGVzKHJvd1tmLmZpZWxkXSk7IFxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ1wiOiByZXR1cm4gZi5maWVsZCA/IH5yb3dbZi5maWVsZF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZi52YWx1ZS50b1VwcGVyQ2FzZSgpKSA6IE9iamVjdC5rZXlzKHJvdykuc29tZShrID0+ICEhKHJvd1trXSAmJiByb3dba10udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZi52YWx1ZS50b1VwcGVyQ2FzZSgpKSAhPT0gLTEpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIklTTlwiOiAgcmV0dXJuICEocm93W2YuZmllbGRdKTsgXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJJU05OXCI6ICByZXR1cm4gISEocm93W2YuZmllbGRdKTsgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiB0cnVlOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApID8/IFtdO1xuICAgIH1cblxuICAgIGdldERhdGEobGltaXQsIG9mZnNldCwgb3JkZXIsIGZpbHRlcnMsIGtleSwgYmFjaywgY2FsbGJhY2spIHtcbiAgICAgICAgZnVuY3Rpb24gc29ydGZ1bmMoYSwgYikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhW29yZGVyW2ldLmZpZWxkXSA9PT0gYltvcmRlcltpXS5maWVsZF0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoYVtvcmRlcltpXS5maWVsZF0gPiBiW29yZGVyW2ldLmZpZWxkXSA/IDEgOiAtMSkgKiAob3JkZXJbaV0uZGVzYyA/IC0xIDogMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICAob3JkZXIubGVuZ3RoID4gMCkgJiYgdGhpcy5kYXRhLnNvcnQoc29ydGZ1bmMpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyZWQoZmlsdGVycywgdGhpcy5kYXRhKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IG9mZnNldCA+IDAgPyBvZmZzZXQgOiAwOyBpIDwgb2Zmc2V0ICsgbGltaXQgJiYgZmlsdGVyZWREYXRhICYmIGkgPCBmaWx0ZXJlZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbHRlcmVkRGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJzIt0YHQtdC60YPQvdC00L3QsNGPINC30LDQtNC10YDQttC60LAg0L/RgNC+0YjQu9CwJyk7XG4gICAgICAgIC8vICAgICBjYWxsYmFjayhyZXN1bHQsIG9mZnNldCArIGxpbWl0LCBmaWx0ZXJlZERhdGEubGVuZ3RoLCBiYWNrKVxuICAgICAgICAvLyB9LCAyMDAwKTtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0LCBvZmZzZXQgKyBsaW1pdCwgZmlsdGVyZWREYXRhLmxlbmd0aCwgYmFjayk7XG4gICAgfVxuXG4gICAgZ2V0U3VtbWFyeShmdW5jLCBmaWVsZCwgZmlsdGVycywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJlZChmaWx0ZXJzLCB0aGlzLmRhdGEpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmlsdGVyZWREYXRhLmxlbmd0aCA/IGZpbHRlcmVkRGF0YVswXVtmaWVsZF0gOiBmYWxzZTtcbiAgICAgICAgbGV0IHN1bSA9IDAsIGNvdW50ID0gMCwgdW5pcXVlcyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChmdW5jKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN1bVwiOiByZXN1bHQgPSByZXN1bHQgKyByb3dbZmllbGRdOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXZnXCI6IHN1bSA9IHN1bSArIHJvd1tmaWVsZF07IGNvdW50Kys7IHJlc3VsdCA9IHN1bSAvIGNvdW50OyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWluXCI6IHJlc3VsdCA9IHJlc3VsdCA8IHJvd1tmaWVsZF0gPyByZXN1bHQgOiByb3dbZmllbGRdOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWF4XCI6IHJlc3VsdCA9IHJlc3VsdCA+IHJvd1tmaWVsZF0gPyByZXN1bHQgOiByb3dbZmllbGRdOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY291bnRcIjogaWYgKHJvd1tmaWVsZF0pIGNvdW50Kys7IHJlc3VsdCA9IGNvdW50OyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidW5pcXVlXCI6IGlmICghdW5pcXVlcy5pbmNsdWRlcyhyb3dbZmllbGRdKSkgeyB1bmlxdWVzLnB1c2gocm93W2ZpZWxkXSk7IH0gcmVzdWx0ID0gdW5pcXVlcy5sZW5ndGg7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIGdldENvbHVtbkRhdGEoY29sdW1uTmFtZSwgZmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW10sIHVuaXF1ZXMgPSBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLm1hcChyb3cgPT4ge1xuICAgICAgICAgICAgaWYgKCghKGZpbHRlcikgfHwgfnJvd1tjb2x1bW5OYW1lXS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyLnRvVXBwZXJDYXNlKCkpKSAmJiAhdW5pcXVlcy5pbmNsdWRlcyhyb3dbY29sdW1uTmFtZV0pKSB7IHVuaXF1ZXMucHVzaChyb3dbY29sdW1uTmFtZV0pOyB9O1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IG9mZnNldCA+IDAgPyBvZmZzZXQgOiAwOyBpIDwgb2Zmc2V0ICsgbGltaXQgJiYgdW5pcXVlcyAmJiBpIDwgdW5pcXVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godW5pcXVlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBzYXZlRGF0YShrZXlOYW1lOnN0cmluZywga2V5OmFueSwgbW9kaWZ5Ont9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmeSkuZm9yRWFjaCggcD0+IHRoaXMuZGF0YS5maW5kKHIgPT4gcltrZXlOYW1lXSA9PSBrZXkpW3BdID0gbW9kaWZ5W3BdKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaW5zZXJ0RGF0YShrZXlOYW1lOnN0cmluZywgbW9kaWZ5Ont9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGlmeSk7XG4gICAgICAgIG1vZGlmeVtrZXlOYW1lXSA9IHRoaXMuZGF0YS5sZW5ndGggKyAxO1xuICAgICAgICB0aGlzLmRhdGEucHVzaChtb2RpZnkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBkZWxldGVEYXRhKGtleU5hbWU6c3RyaW5nLCBrZXlzOmFueVtdLCBjYWxsYmFjaykge1xuICAgICAgICBrZXlzLmZvckVhY2goayA9PiB0aGlzLmRhdGEuZmluZChyID0+IHRoaXMuZGF0YS5zcGxpY2UodGhpcy5kYXRhLmluZGV4T2YodGhpcy5kYXRhLmZpbmQociA9PiByW2tleU5hbWVdID09IGspKSwxKSkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH0gXG5cbn0iLCJpbXBvcnQgeyBJRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vZGF0YS1wcm92aWRlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdERhdGEodXJsID0gJycsIGRhdGEgPSB7fSkge1xuICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIC8vICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgICAgLy8gICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICAvLyAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcbiAgICAgICAgLy8gICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcbiAgICAgICAgLy8gICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJywgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSkgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xufVxuXG5leHBvcnQgY2xhc3MgUmVtb3RlRGF0YVByb3ZpZGVyIGltcGxlbWVudHMgSURhdGFQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHVybDogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBnZXREYXRhKGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBvcmRlcjogYW55W10sIGZpbHRlcnM6IGFueVtdLCBrZXk6IGFueSwgYmFjazogYm9vbGVhbiwgY2FsbGJhY2s6IChkYXRhOiBhbnksIHN0YXJ0OiBudW1iZXIsIGNvdW10OiBudW1iZXIsIGJhY2s6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICAgICAgcG9zdERhdGEodGhpcy51cmwgKyBcImdldERhdGFcIiwgeyBuYW1lOiB0aGlzLm5hbWUsIGxpbWl0OiBsaW1pdCwgb2Zmc2V0OiBvZmZzZXQsIG9yZGVyOiBvcmRlciwgZmlsdGVyczogZmlsdGVycywga2V5OiBrZXksIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEuZGF0YSwgb2Zmc2V0ICsgbGltaXQsIGRhdGEuY291bnQsIGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U3VtbWFyeShmdW5jOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcsIGZpbHRlcnM6IGFueVtdLCBjYWxsYmFjazogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgcG9zdERhdGEodGhpcy51cmwgKyBcImdldFN1bW1hcnlcIiwgeyBuYW1lOiB0aGlzLm5hbWUsIGZ1bmM6IGZ1bmMsIGZpZWxkOiBmaWVsZCwgZmlsdGVyczogZmlsdGVycyB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q29sdW1uRGF0YShjb2x1bW5OYW1lOiBzdHJpbmcsIGZpbHRlcjogYW55LCBsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHBvc3REYXRhKHRoaXMudXJsICsgXCJnZXRDb2x1bW5EYXRhXCIsIHsgbmFtZTogdGhpcy5uYW1lLCBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLCBmaWx0ZXI6IGZpbHRlciwgbGltaXQ6IGxpbWl0LCBvZmZzZXQ6IG9mZnNldCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlRGF0YShrZXlOYW1lOnN0cmluZywga2V5OmFueSwgbW9kaWZ5Ont9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleU5hbWV9IC0gJHtrZXl9ID0+ICR7bW9kaWZ5fWApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbnNlcnREYXRhKGtleU5hbWU6c3RyaW5nLCBtb2RpZnk6e30pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5TmFtZX0gPT4gJHttb2RpZnl9YCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGRlbGV0ZURhdGEoa2V5TmFtZTpzdHJpbmcsIGtleXM6YW55W10sIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleU5hbWV9IC0gJHtrZXlzfWApO1xuICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmo6IHt9KSB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbChvYmoxOiBhbnksIG9iajI6IGFueSkge1xuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqMSkgJiYgQXJyYXkuaXNBcnJheShvYmoyKSkge1xuICAgICAgICBpZihvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvYmoxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqMVtpXSAhPT0gb2JqMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqMSA9PT0gb2JqMjtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zb3VyY2VzL3JlYWN0L2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9