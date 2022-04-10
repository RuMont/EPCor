"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Organizations_Edit_js"],{

/***/ "./resources/js/Pages/Organizations/Edit.js":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Organizations/Edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-helmet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/Layout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/DeleteButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/LoadingButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/SelectInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TrashedMessage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/Icon'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














var Edit = function Edit() {
  var organization = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props.organization;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    name: organization.name || '',
    email: organization.email || '',
    phone: organization.phone || '',
    address: organization.address || '',
    city: organization.city || '',
    region: organization.region || '',
    country: organization.country || '',
    postal_code: organization.postal_code || ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      errors = _useForm.errors,
      put = _useForm.put,
      processing = _useForm.processing;

  function handleSubmit(e) {
    e.preventDefault();
    put(route('organizations.update', organization.id));
  }

  function destroy() {
    if (confirm('Are you sure you want to delete this organization?')) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia["delete"](route('organizations.destroy', organization.id));
    }
  }

  function restore() {
    if (confirm('Are you sure you want to restore this organization?')) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.put(route('organizations.restore', organization.id));
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-helmet'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: data.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
      className: "mb-8 text-3xl font-bold",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
        href: route('organizations'),
        className: "text-indigo-600 hover:text-indigo-700",
        children: "Organizations"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "mx-2 font-medium text-indigo-600",
        children: "/"
      }), data.name]
    }), organization.deleted_at && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TrashedMessage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      onRestore: restore,
      children: "This organization has been deleted."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "max-w-3xl overflow-hidden bg-white rounded shadow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-wrap p-8 -mb-8 -mr-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/TextInput'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-full pb-8 pr-6 lg:w-1/2",
            label: "Name",
            name: "name",
            errors: errors.name,
            value: data.name,
            onChange: function onChange(e) {
              return setData('name', e.target.value);
            }
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200",
          children: [!organization.deleted_at && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/DeleteButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            onDelete: destroy,
            children: "Delete Organization"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/LoadingButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            loading: processing,
            type: "submit",
            className: "ml-auto btn-indigo",
            children: "Update Organization"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
      className: "mt-12 text-2xl font-bold",
      children: "Contacts"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "mt-6 overflow-x-auto bg-white rounded shadow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
        className: "w-full whitespace-nowrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            className: "font-bold text-left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              className: "px-6 pt-5 pb-4",
              children: "Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              className: "px-6 pt-5 pb-4",
              children: "City"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              className: "px-6 pt-5 pb-4",
              colSpan: "2",
              children: "Phone"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tbody", {
          children: [organization.contacts.map(function (_ref) {
            var id = _ref.id,
                name = _ref.name,
                phone = _ref.phone,
                city = _ref.city,
                deleted_at = _ref.deleted_at;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              className: "hover:bg-gray-100 focus-within:bg-gray-100",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                className: "border-t",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                  href: route('contacts.edit', id),
                  className: "flex items-center px-6 py-4 focus:text-indigo focus:outline-none",
                  children: [name, deleted_at && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/Icon'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    name: "trash",
                    className: "flex-shrink-0 w-3 h-3 ml-2 text-gray-400 fill-current"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                className: "border-t",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                  tabIndex: "-1",
                  href: route('contacts.edit', id),
                  className: "flex items-center px-6 py-4 focus:text-indigo focus:outline-none",
                  children: city
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                className: "border-t",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                  tabIndex: "-1",
                  href: route('contacts.edit', id),
                  className: "flex items-center px-6 py-4 focus:text-indigo focus:outline-none",
                  children: phone
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                className: "w-px border-t",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                  tabIndex: "-1",
                  href: route('contacts.edit', id),
                  className: "flex items-center px-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/Icon'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    name: "cheveron-right",
                    className: "block w-6 h-6 text-gray-400 fill-current"
                  })
                })
              })]
            }, id);
          }), organization.contacts.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              className: "px-6 py-4 border-t",
              colSpan: "4",
              children: "No contacts found."
            })
          })]
        })]
      })
    })]
  });
};

Edit.layout = function (page) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/Shared/Layout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: page
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ })

}]);