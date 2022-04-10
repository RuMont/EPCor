"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Contacts_Create_js"],{

/***/ "./resources/js/Pages/Contacts/Create.js":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Contacts/Create.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/Layout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/LoadingButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/SelectInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var Create = function Create() {
  var organizations = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.organizations;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    first_name: '',
    last_name: '',
    organization_id: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    country: '',
    postal_code: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      errors = _useForm.errors,
      post = _useForm.post,
      processing = _useForm.processing;

  function handleSubmit(e) {
    e.preventDefault();
    post(route('contacts.store'));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
      className: "mb-8 text-3xl font-bold",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
        href: route('contacts'),
        className: "text-indigo-600 hover:text-indigo-700",
        children: "Contacts"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "font-medium text-indigo-600",
        children: " /"
      }), " Create"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "max-w-3xl overflow-hidden bg-white rounded shadow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-wrap p-8 -mb-8 -mr-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "First Name",
            name: "first_name",
            errors: errors.first_name,
            value: data.first_name,
            onChange: function onChange(e) {
              return setData('first_name', e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Last Name",
            name: "last_name",
            errors: errors.last_name,
            value: data.last_name,
            onChange: function onChange(e) {
              return setData('last_name', e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/SelectInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Organization",
            name: "organization_id",
            errors: errors.organization_id,
            value: data.organization_id,
            onChange: function onChange(e) {
              return setData('organization_id', e.target.value);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: ""
            }), organizations.map(function (_ref) {
              var id = _ref.id,
                  name = _ref.name;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                value: id,
                children: name
              }, id);
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Email",
            name: "email",
            type: "email",
            errors: errors.email,
            value: data.email,
            onChange: function onChange(e) {
              return setData('email', e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Phone",
            name: "phone",
            type: "text",
            errors: errors.phone,
            value: data.phone,
            onChange: function onChange(e) {
              return setData('phone', e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Address",
            name: "address",
            type: "text",
            errors: errors.address,
            value: data.address,
            onChange: function onChange(e) {
              return setData('address', e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "City",
            name: "city",
            type: "text",
            errors: errors.city,
            value: data.city,
            onChange: function onChange(e) {
              return setData('city', e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Province/State",
            name: "region",
            type: "text",
            errors: errors.region,
            value: data.region,
            onChange: function onChange(e) {
              return setData('region', e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/SelectInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Country",
            name: "country",
            errors: errors.country,
            value: data.country,
            onChange: function onChange(e) {
              return setData('country', e.target.value);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: ""
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: "CA",
              children: "Canada"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
              value: "US",
              children: "United States"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Postal Code",
            name: "postal_code",
            type: "text",
            errors: errors.postal_code,
            value: data.postal_code,
            onChange: function onChange(e) {
              return setData('postal_code', e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/LoadingButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            loading: processing,
            type: "submit",
            className: "btn-indigo",
            children: "Create Contact"
          })
        })]
      })
    })]
  });
};

Create.layout = function (page) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/Layout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    title: "Create Contact",
    children: page
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);

/***/ })

}]);