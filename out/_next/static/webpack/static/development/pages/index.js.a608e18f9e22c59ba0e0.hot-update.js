webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/asyncs.js":
/*!**********************************!*\
  !*** ./src/components/asyncs.js ***!
  \**********************************/
/*! exports provided: findClients, updateClients, deleteClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findClients", function() { return findClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClients", function() { return updateClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteClient", function() { return deleteClient; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _req__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./req */ "./src/components/req.js");



var req = new _req__WEBPACK_IMPORTED_MODULE_2__["Req"]();
/**
 * @param {Object} data - contain the url
 * @param {Function} cb - call with the recived data
 */

function findClients(_x, _x2) {
  return _findClients.apply(this, arguments);
}
/**
 * @summary update with value
 * @param {Object} data - contain the url and new data
 * @param {Function} cb - call with the recived data
 */

function _findClients() {
  _findClients = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, cb) {
    var aList;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return req.get(data);

          case 3:
            aList = _context.sent;
            console.log(aList); // if Error return the error message

            if (aList.data.error) {
              cb([], {
                serverMessage: aList.data.error
              });
            } else {
              //return the data
              cb(aList.data, {
                serverMessage: ''
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            throw new Error('error in func onSubmitFind: \n' + _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _findClients.apply(this, arguments);
}

function updateClients(_x3, _x4) {
  return _updateClients.apply(this, arguments);
}
/**
 * @summary update with value
 * @param {Object} id - contain the id of the client to delete
 * @param {Function} cb - call with the recived response
 */

function _updateClients() {
  _updateClients = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data, cb) {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return req.put(data);

          case 3:
            res = _context2.sent;
            return _context2.abrupt("return", res);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw new Error('error in func onSubmitFind: \n' + _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _updateClients.apply(this, arguments);
}

function deleteClient(_x5, _x6) {
  return _deleteClient.apply(this, arguments);
}

function _deleteClient() {
  _deleteClient = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id, cb) {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return req.delete(id);

          case 3:
            res = _context3.sent;
            cb(res);
            return _context3.abrupt("return", res);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            throw new Error('error in func onSubmitFind: \n' + _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _deleteClient.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=index.js.a608e18f9e22c59ba0e0.hot-update.js.map