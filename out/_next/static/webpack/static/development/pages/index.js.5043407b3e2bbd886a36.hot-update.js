webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/table/ClientsTable.js":
/*!**********************************************!*\
  !*** ./src/components/table/ClientsTable.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\elad\\Desktop\\mcrm\\front\\src\\components\\table\\ClientsTable.js";


var ClientsTable = function ClientsTable(_ref) {
  var list = _ref.list,
      handleClick = _ref.handleClick,
      type = _ref.type,
      readOnly = _ref.readOnly;
  return list.map(function (obj, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "remove_client_table_".concat(i),
      className: "table-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "default-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, !readOnly && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "overlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: function onClick() {
        handleClick(i, obj._id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, type)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "notMobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "notMobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "notMobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "notMobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Phone")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mobileOnly bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Name: "), " ", obj.Name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mobileOnly bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Last Name: "), obj.LastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mobileOnly bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Email: "), obj.Email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mobileOnly bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Phone: "), "0", obj.Phone)), obj.img && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "full-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Photo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "full-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "ad")))));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ClientsTable);

/***/ })

})
//# sourceMappingURL=index.js.5043407b3e2bbd886a36.hot-update.js.map