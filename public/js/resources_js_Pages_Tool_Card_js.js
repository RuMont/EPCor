"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Tool_Card_js"],{

/***/ "./resources/js/Pages/Tool/Card.js":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Tool/Card.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* eslint-disable react/prop-types */




var Card = function Card(_ref) {
  var attributes = _ref.attributes,
      docId = _ref.docId,
      entity = _ref.entity,
      url = _ref.url,
      user = _ref.user;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-4 mr-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
      className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate",
      children: attributes.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "text-gray-700 dark:text-gray-400 truncate",
      children: attributes.description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      className: "text-gray-700 dark:text-gray-400 mt-4",
      children: ["Desde el ", attributes["start-date"], " hasta el ", attributes["end-date"]]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col md:flex-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        onClick: function onClick() {
          return open(url);
        },
        className: "mt-2 mr-1 sm:px-3 lg:px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-50",
        children: "Acceder al texto del edicto"
      }), user.external_auth && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: "mt-2 mr-1 sm:px-3 lg:px-6 py-3 rounded bg-blue-600 text-white text-sm font-bold whitespace-nowrap hover:bg-blue-400 focus:bg-blue-300",
        children: "A\xF1adir a Google Calendar"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ })

}]);