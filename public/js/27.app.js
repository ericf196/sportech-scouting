webpackJsonp([27,31],{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(269),
  /* template */
  __webpack_require__(401),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\auth\\password\\email.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] email.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85006d6c", Component.options)
  } else {
    hotAPI.reload("data-v-85006d6c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    show: function show(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/auth/user?include=athlete.sport,athlete.specialty,athlete.country,athlete.category,athlete.gender').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    update: function update(id, user, successCalback, errorCallback) {
        return _vue2.default.http.put('/api/user', user, { emulateHTTP: true }).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    },
    create: function create(user, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/accept', user).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    send: function send(user, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/password/email', user).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userService = __webpack_require__(247);

var _userService2 = _interopRequireDefault(_userService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            data: {
                email: ''
            },
            error: null
        };
    },

    methods: {
        send: function send() {
            var _this = this;

            _userService2.default.send(this.data, function (response) {
                _this.$root.successToast(response.message);
            }, function (response) {
                if (response.validation) {
                    for (var error in response.errors) {
                        if (response.errors.hasOwnProperty(error)) {
                            response.errors[error].forEach(function (validationError) {});
                        }
                    }
                } else {}
            });
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "login-box-body"
  }, [_c('p', {
    staticClass: "login-box-msg"
  }, [_vm._v(" Reset Password ")]), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.login()
      }
    }
  }, [_c('div', {
    staticClass: "form-group has-feedback",
    class: {
      'has-error': _vm.errors.has('email')
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.email),
      expression: "data.email"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    class: {
      'input': true, 'is-danger': _vm.errors.has('email')
    },
    attrs: {
      "type": "text",
      "placeholder": "Email",
      "data-vv-rules": "required|email",
      "name": "email"
    },
    domProps: {
      "value": _vm._s(_vm.data.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.email = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "fa fa-envelope form-control-feedback"
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('email')),
      expression: "errors.has('email')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('email')))])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-7"
  }, [_c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'password.reset'
      }
    }
  }, [_vm._v("\n                        Send Password Reset Link\n                    ")])], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-logo"
  }, [_c('b', [_vm._v("Scouting")]), _vm._v("37\n    ")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-85006d6c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclNlcnZpY2UuanM/YzIzZioiLCJ3ZWJwYWNrOi8vL2VtYWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlPzVjMmQiXSwibmFtZXMiOlsic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwidXBkYXRlIiwidXNlciIsInB1dCIsImVtdWxhdGVIVFRQIiwiY3JlYXRlIiwicG9zdCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7Ozs7OztrQkFFZTtBQUNYQSxRQURXLGdCQUNOQyxFQURNLEVBQ0ZDLGNBREUsRUFDY0MsYUFEZCxFQUM0QjtBQUNuQyxlQUFPLGNBQUlDLElBQUosQ0FBU0MsR0FBVCxDQUFhLHdHQUFiLEVBQ0ZDLElBREUsQ0FDRyxVQUFDQyxRQUFEO0FBQUEsbUJBQWNMLGVBQWVLLFNBQVNDLElBQXhCLENBQWQ7QUFBQSxTQURILEVBRUZDLEtBRkUsQ0FFSSxVQUFDQyxLQUFEO0FBQUEsbUJBQVdQLGNBQWNPLEtBQWQsQ0FBWDtBQUFBLFNBRkosQ0FBUDtBQUdILEtBTFU7QUFNWEMsVUFOVyxrQkFNSlYsRUFOSSxFQU1BVyxJQU5BLEVBTU1WLGNBTk4sRUFNc0JDLGFBTnRCLEVBTW9DO0FBQzNDLGVBQU8sY0FBSUMsSUFBSixDQUFTUyxHQUFULENBQWEsV0FBYixFQUEwQkQsSUFBMUIsRUFBZ0MsRUFBQ0UsYUFBYSxJQUFkLEVBQWhDLEVBQ0ZSLElBREUsQ0FDRyxVQUFDQyxRQUFEO0FBQUEsbUJBQWNMLGVBQWVLLFNBQVNDLElBQXhCLENBQWQ7QUFBQSxTQURILEVBRUZDLEtBRkUsQ0FFSSxVQUFDQyxLQUFEO0FBQUEsbUJBQVdQLGNBQWNPLE1BQU1GLElBQXBCLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQVZVO0FBV1hPLFVBWFcsa0JBV0pILElBWEksRUFXQ1YsY0FYRCxFQVdpQkMsYUFYakIsRUFXK0I7QUFDbkMsZUFBTyxjQUFJQyxJQUFKLENBQVNZLElBQVQsQ0FBYyxhQUFkLEVBQTRCSixJQUE1QixFQUNGTixJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVEQyxLQUZDLENBRUssVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZMLENBQVA7QUFHTixLQWZVO0FBZ0JYTyxRQWhCVyxnQkFnQk5MLElBaEJNLEVBZ0JEVixjQWhCQyxFQWdCZUMsYUFoQmYsRUFnQjZCO0FBQ3BDLGVBQU8sY0FBSUMsSUFBSixDQUFTWSxJQUFULENBQWMscUJBQWQsRUFBb0NKLElBQXBDLEVBQ0VOLElBREYsQ0FDTyxVQUFDQyxRQUFEO0FBQUEsbUJBQWNMLGVBQWVLLFNBQVNDLElBQXhCLENBQWQ7QUFBQSxTQURQLEVBRVZDLEtBRlUsQ0FFSixVQUFDQyxLQUFEO0FBQUEsbUJBQVdQLGNBQWNPLEtBQWQsQ0FBWDtBQUFBLFNBRkksQ0FBUDtBQUdIO0FBcEJVLEM7Ozs7Ozs7Ozs7Ozs7O0FDcUNmOzs7Ozs7OzBCQUVBOzs7dUJBSUE7QUFGQTttQkFJQTtBQUxBO0FBTUE7Ozs7QUFFQTs7NENBQ0EsMEJBQ0E7a0RBQ0E7QUFDQSxtQ0FDQTt5Q0FDQTt1REFDQTttRUFDQTtzRkFDQSxDQUNBO0FBQ0E7QUFDQTt1QkFDQSxDQUNBO0FBQ0E7QUFFQTtBQWxCQTtBQVRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMjcuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2VtYWlsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTg1MDA2ZDZjIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2VtYWlsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxkYXNoYm9hcmRcXFxcbW9kdWxlc1xcXFxhdXRoXFxcXHBhc3N3b3JkXFxcXGVtYWlsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGVtYWlsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04NTAwNmQ2Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTg1MDA2ZDZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDI3IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9hdXRoL3VzZXI/aW5jbHVkZT1hdGhsZXRlLnNwb3J0LGF0aGxldGUuc3BlY2lhbHR5LGF0aGxldGUuY291bnRyeSxhdGhsZXRlLmNhdGVnb3J5LGF0aGxldGUuZ2VuZGVyJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShpZCwgdXNlciwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wdXQoJy9hcGkvdXNlcicsIHVzZXIsIHtlbXVsYXRlSFRUUDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZSh1c2VyLHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9hY2NlcHQnLHVzZXIpXHJcbiAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZCh1c2VyLHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9wYXNzd29yZC9lbWFpbCcsdXNlcilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU2VydmljZS5qcyIsIlxyXG48dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibG9naW4tYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWxvZ29cIj5cclxuICAgICAgICAgICAgPGI+U2NvdXRpbmc8L2I+MzdcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsb2dpbi1ib3gtbXNnXCI+IFJlc2V0IFBhc3N3b3JkIDwvcD5cclxuICAgICAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cImxvZ2luKClcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW1haWwnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGEuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkfGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydpbnB1dCc6IHRydWUsICdpcy1kYW5nZXInOiBlcnJvcnMuaGFzKCdlbWFpbCcpIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1lbnZlbG9wZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVwiZXJyb3JzLmhhcygnZW1haWwnKVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuZmlyc3QoJ2VtYWlsJykgfX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdwYXNzd29yZC5yZXNldCd9XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmQgUGFzc3dvcmQgUmVzZXQgTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5jb2wgLS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PjwhLS0gLy5sb2dpbi1ib3gtYm9keSAtLT5cclxuXHJcbiAgICA8L2Rpdj48IS0tIC8ubG9naW4tYm94IC0tPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclNlcnZpY2UnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBzZW5kKCkge1xyXG4gICAgICAgICAgICAgICAgdXNlclNlcnZpY2Uuc2VuZCh0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5zdWNjZXNzVG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS52YWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGVycm9yIGluIHJlc3BvbnNlLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcnNbZXJyb3JdLmZvckVhY2goKHZhbGlkYXRpb25FcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZW1haWwudnVlPzczM2MyMWI2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW4tYm94XCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1ib3gtYm9keVwiXG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1ib3gtbXNnXCJcbiAgfSwgW192bS5fdihcIiBSZXNldCBQYXNzd29yZCBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmxvZ2luKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZW1haWwnKVxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRhLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGF0YS5lbWFpbFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaW5wdXQnOiB0cnVlLCAnaXMtZGFuZ2VyJzogX3ZtLmVycm9ycy5oYXMoJ2VtYWlsJylcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW1haWxcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkfGVtYWlsXCIsXG4gICAgICBcIm5hbWVcIjogXCJlbWFpbFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmRhdGEuZW1haWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGF0YS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1lbnZlbG9wZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2VtYWlsJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdlbWFpbCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2VtYWlsJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTdcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3Bhc3N3b3JkLnJlc2V0J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbmQgUGFzc3dvcmQgUmVzZXQgTGlua1xcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sb2dvXCJcbiAgfSwgW19jKCdiJywgW192bS5fdihcIlNjb3V0aW5nXCIpXSksIF92bS5fdihcIjM3XFxuICAgIFwiKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtODUwMDZkNmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTg1MDA2ZDZjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlXG4vLyBtb2R1bGUgaWQgPSA0MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyNyJdLCJzb3VyY2VSb290IjoiIn0=