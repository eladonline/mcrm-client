webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/A_R_E/addClient.js":
/*!*******************************************!*\
  !*** ./src/components/A_R_E/addClient.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _req__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../req */ "./src/components/req.js");









var _jsxFileName = "C:\\Users\\elad\\Desktop\\mcrm\\front\\src\\components\\A_R_E\\addClient.js";


var req = new _req__WEBPACK_IMPORTED_MODULE_10__["Req"]();

var AddClient =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AddClient, _PureComponent);

  function AddClient() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddClient);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AddClient)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      serverMessage: ' '
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "validateLength", function (rule, value, callback) {
      if (!value) return callback('Minimum length is 2');
      var form = _this.props.form;

      if (value.length >= 2) {
        form.validateFields(['confirm'], {
          force: true
        });
      } else {
        callback('Minimum length is 2');
      }

      callback();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          var data = {
            url: 'api/client/add',
            body: values
          }; // es5 post call just to show I know older version
          // all rest of the calls is es6

          req.post(data).then(function (_ref) {
            var data = _ref.data;

            _this.setState({
              serverMessage: data
            }); // reset the server message


            setTimeout(function () {
              _this.setState({
                serverMessage: ' '
              });
            }, 1400); // reset fields

            _this.props.form.resetFields();
          });
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddClient, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "add-client-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
        label: "Name",
        hasFeedback: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, getFieldDecorator('Name', {
        rules: [{
          required: true,
          message: 'Name is required'
        }, {
          validator: this.validateLength
        }]
      })(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
        placeholder: "Name",
        id: "error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
        label: "Last name",
        hasFeedback: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, getFieldDecorator('LastName', {
        rules: [{
          required: true,
          message: 'Last name is required'
        }, {
          validator: this.validateLength
        }]
      })(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
        placeholder: "Last Name",
        id: "error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
        label: "Email",
        hasFeedback: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, getFieldDecorator('Email', {
        rules: [{
          type: 'email',
          message: 'not a valid email'
        }, {
          required: true,
          message: 'Email is required'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
        placeholder: "Email",
        id: "error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
        label: "Phone",
        hasFeedback: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, getFieldDecorator('Phone', {
        rules: [{
          required: true,
          message: 'Phone is required'
        }]
      })(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, {
        placeholder: "Phone",
        id: "error",
        type: "tel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "button-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "submit",
        className: "btnLight",
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "server-response-accept",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.state.serverMessage));
    }
  }]);

  return AddClient;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

var WrappedRegistrationForm = antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  name: 'Form'
})(AddClient);

/* harmony default export */ __webpack_exports__["default"] = (WrappedRegistrationForm);

/***/ })

})
//# sourceMappingURL=index.js.dc21774ca8803ba6b488.hot-update.js.map