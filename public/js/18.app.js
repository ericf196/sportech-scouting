webpackJsonp([18,22],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(396)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(269),
  /* template */
  __webpack_require__(371),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/auth/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8eecb16", Component.options)
  } else {
    hotAPI.reload("data-v-c8eecb16", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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


exports.default = {
    data: function data() {
        return {
            context: 'login context',
            data: {
                email: 'admin@admin.com',
                password: 'secret'
            },
            rememberMe: false,
            error: null
        };
    },

    methods: {
        login: function login() {
            var _this = this;

            var self = this;
            this.$validator.validateAll().then(function (success) {
                if (!success) {
                    // handle error
                    return;
                }
                _this.$auth.login({
                    body: _this.data,
                    rememberMe: _this.data.rememberMe,
                    redirect: { name: 'dashboard' },
                    success: function success() {
                        self.$root.successToast('User LoggedIn');
                    },
                    error: function error(res) {
                        if (res.data.hasOwnProperty('error')) {
                            self.$root.errorToast(res.data.error);
                        } else if (res.data.hasOwnProperty('errors')) {
                            _.each(res.data.errors, function (error) {
                                self.$root.errorToast(error);
                            });
                        }
                    }
                });
            });
        }
    }
};

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\nfooter {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n}\n\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/auth/login.vue?4060a58a"],"names":[],"mappings":";AAuDA;IACA,mBAAA;IACA,UAAA;IACA,SAAA;IACA,QAAA;CACA","file":"login.vue","sourcesContent":["<template>\n    <div class=\"login-box\">\n        <div class=\"login-logo\">\n            <b>Scouting</b>37\n        </div>\n        <div class=\"login-box-body\">\n            <p class=\"login-box-msg\"> Log In </p>\n            <form v-on:submit.prevent=\"login()\">\n                <div class=\"form-group has-feedback\" :class=\"{'has-error': errors.has('email') }\">\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           placeholder=\"Email\"\n                           v-model=\"data.email\"\n                           v-validate.initial=\"data.email\"\n                           data-vv-rules=\"required|email\"\n                           :class=\"{'input': true, 'is-danger': errors.has('email') }\"\n                           name=\"email\"/>\n                    <span class=\"fa fa-envelope form-control-feedback\"></span>\n                    <span v-show=\"errors.has('email')\" class=\"text-danger\">{{ errors.first('email') }}</span>\n\n                </div>\n                <div class=\"form-group has-feedback\" :class=\"{'has-error': errors.has('password') }\">\n                    <input type=\"password\"\n                           class=\"form-control\"\n                           name=\"password\"\n                           v-model=\"data.password\"\n                           v-validate.initial=\"data.password\"\n                           data-vv-rules=\"required\"\n                           :class=\"{'input': true, 'is-danger': errors.has('password') }\"\n                           placeholder=\"Password\"/>\n                    <span class=\"fa fa-lock form-control-feedback\"></span>\n                    <span v-show=\"errors.has('password')\" class=\"text-danger\">{{ errors.first('password') }}</span>\n\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-4 col-xs-offset-1\">\n                        <div class=\"checkbox icheck\">\n                            <label>\n                                <input type=\"checkbox\" v-model=\"rememberMe\" name=\"remember\"> Remember Me\n                            </label>\n                        </div>\n                    </div><!-- /.col -->\n                    <div class=\"col-xs-7\">\n                        <button type=\"submit\"\n                                class=\"btn btn-primary btn-block btn-flat\">Log In\n                        </button>\n                    </div><!-- /.col -->\n                </div>\n            </form>\n        </div><!-- /.login-box-body -->\n\n    </div><!-- /.login-box -->\n</template>\n\n<style>\n    footer {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        left: 0;\n    }\n\n</style>\n<script>\n\n    export default{\n        data(){\n            return {\n                context: 'login context',\n                data: {\n                    email: 'admin@admin.com',\n                    password: 'secret',\n                },\n                rememberMe: false,\n                error: null\n            }\n        },\n        methods: {\n            login() {\n                var self = this;\n                this.$validator.validateAll().then(success => {\n                    if (!success) {\n                        // handle error\n                        return;\n                    }\n                    this.$auth.login({\n                        body: this.data,\n                        rememberMe: this.data.rememberMe,\n                        redirect: {name: 'dashboard'},\n                        success() {\n                            self.$root.successToast('User LoggedIn');\n                        },\n                        error(res) {\n                            if (res.data.hasOwnProperty('error')) {\n                                self.$root.errorToast(res.data.error)\n                            } else if (res.data.hasOwnProperty('errors')) {\n                                _.each(res.data.errors, (error)=> {\n                                    self.$root.errorToast(error)\n                                })\n                            }\n                        }\n                    });\n                });\n            }\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "login-box-body"
  }, [_c('p', {
    staticClass: "login-box-msg"
  }, [_vm._v(" Log In ")]), _vm._v(" "), _c('form', {
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
      value: (_vm.data.email),
      expression: "data.email",
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
    staticClass: "form-group has-feedback",
    class: {
      'has-error': _vm.errors.has('password')
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.password),
      expression: "data.password"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.data.password),
      expression: "data.password",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    class: {
      'input': true, 'is-danger': _vm.errors.has('password')
    },
    attrs: {
      "type": "password",
      "name": "password",
      "data-vv-rules": "required",
      "placeholder": "Password"
    },
    domProps: {
      "value": _vm._s(_vm.data.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "fa fa-lock form-control-feedback"
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('password')),
      expression: "errors.has('password')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('password')))])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-4 col-xs-offset-1"
  }, [_c('div', {
    staticClass: "checkbox icheck"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.rememberMe),
      expression: "rememberMe"
    }],
    attrs: {
      "type": "checkbox",
      "name": "remember"
    },
    domProps: {
      "checked": Array.isArray(_vm.rememberMe) ? _vm._i(_vm.rememberMe, null) > -1 : (_vm.rememberMe)
    },
    on: {
      "click": function($event) {
        var $$a = _vm.rememberMe,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.rememberMe = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.rememberMe = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.rememberMe = $$c
        }
      }
    }
  }), _vm._v(" Remember Me\n                        ")])])]), _vm._v(" "), _vm._m(1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-logo"
  }, [_c('b', [_vm._v("Scouting")]), _vm._v("37\n    ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-7"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-block btn-flat",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Log In\n                    ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c8eecb16", module.exports)
  }
}

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c8eecb16!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
			var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c8eecb16!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL2xvZ2luLnZ1ZT9jNmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9sb2dpbi52dWU/YmQ3YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlPzE3ZGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrQ0E7Ozs7MEJBRUE7O3FCQUVBOzt1QkFFQTswQkFFQTtBQUhBO3dCQUlBO21CQUVBO0FBUkE7QUFTQTs7OztBQUVBOzt1QkFDQTtrRUFDQTs4QkFDQTtBQUNBO0FBQ0E7QUFDQTs7Z0NBRUE7MkNBQ0E7c0NBQ0E7Z0RBQ0E7Z0RBQ0E7QUFDQTsrQ0FDQTs4REFDQTsyREFDQTtzRUFDQTtxRUFDQTtzREFDQTtBQUNBO0FBQ0E7QUFFQTtBQWhCQTtBQWlCQTtBQUVBO0FBM0JBO0FBWkEsRTs7Ozs7OztBQ2xFQTtBQUNBOzs7QUFHQTtBQUNBLG1DQUFvQyx5QkFBeUIsZ0JBQWdCLGVBQWUsY0FBYyxHQUFHLFlBQVksMEhBQTBILE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSw0WEFBNFgsa0NBQWtDLHVXQUF1VyxpREFBaUQsb05BQW9OLHlCQUF5QixvR0FBb0cscUNBQXFDLHVXQUF1VyxvREFBb0QsNk5BQTZOLDRCQUE0QixpMkJBQWkyQiw2QkFBNkIsb0JBQW9CLG1CQUFtQixrQkFBa0IsT0FBTyw2Q0FBNkMsaUJBQWlCLHNCQUFzQixvRUFBb0UsMkdBQTJHLGlGQUFpRixXQUFXLHFCQUFxQix1QkFBdUIsa0NBQWtDLGlFQUFpRSxxQ0FBcUMsMEVBQTBFLHVCQUF1Qix3Q0FBd0MsMElBQTBJLGtCQUFrQixzQ0FBc0MsdUVBQXVFLDJCQUEyQix1Q0FBdUMscUVBQXFFLHNHQUFzRyw4Q0FBOEMscUVBQXFFLHFHQUFxRyxnQ0FBZ0MsMkJBQTJCLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLGVBQWUsV0FBVyxPQUFPLHdDQUF3Qzs7QUFFNWpKOzs7Ozs7OztBQ1BBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDM0tBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzE4LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1jOGVlY2IxNiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1jOGVlY2IxNiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9sb2dpbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYzhlZWNiMTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1jOGVlY2IxNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibG9naW4tYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1sb2dvXCI+XG4gICAgICAgICAgICA8Yj5TY291dGluZzwvYj4zN1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWJveC1ib2R5XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImxvZ2luLWJveC1tc2dcIj4gTG9nIEluIDwvcD5cbiAgICAgICAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJsb2dpbigpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdlbWFpbCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGEuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwiZGF0YS5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWR8ZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydpbnB1dCc6IHRydWUsICdpcy1kYW5nZXInOiBlcnJvcnMuaGFzKCdlbWFpbCcpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWVudmVsb3BlIGZvcm0tY29udHJvbC1mZWVkYmFja1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVwiZXJyb3JzLmhhcygnZW1haWwnKVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuZmlyc3QoJ2VtYWlsJykgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0YS5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJkYXRhLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWxvY2sgZm9ybS1jb250cm9sLWZlZWRiYWNrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCdwYXNzd29yZCcpXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5maXJzdCgncGFzc3dvcmQnKSB9fTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00IGNvbC14cy1vZmZzZXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94IGljaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJyZW1lbWJlck1lXCIgbmFtZT1cInJlbWVtYmVyXCI+IFJlbWVtYmVyIE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uY29sIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFwiPkxvZyBJblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5jb2wgLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PjwhLS0gLy5sb2dpbi1ib3gtYm9keSAtLT5cblxuICAgIDwvZGl2PjwhLS0gLy5sb2dpbi1ib3ggLS0+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgZm9vdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiAnbG9naW4gY29udGV4dCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJ2FkbWluQGFkbWluLmNvbScsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnc2VjcmV0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbWVtYmVyTWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGF1dGgubG9naW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtZW1iZXJNZTogdGhpcy5kYXRhLnJlbWVtYmVyTWUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDoge25hbWU6ICdkYXNoYm9hcmQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5zdWNjZXNzVG9hc3QoJ1VzZXIgTG9nZ2VkSW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHJlcy5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuaGFzT3duUHJvcGVydHkoJ2Vycm9ycycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChyZXMuZGF0YS5lcnJvcnMsIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsb2dpbi52dWU/NDA2MGE1OGEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlPzQwNjBhNThhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1REE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJsb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsb2dpbi1ib3hcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9naW4tbG9nb1xcXCI+XFxuICAgICAgICAgICAgPGI+U2NvdXRpbmc8L2I+MzdcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9naW4tYm94LWJvZHlcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJsb2dpbi1ib3gtbXNnXFxcIj4gTG9nIEluIDwvcD5cXG4gICAgICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJsb2dpbigpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdlbWFpbCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZGF0YS5lbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XFxcImRhdGEuZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWR8ZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7J2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ2VtYWlsJykgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJlbWFpbFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVxcXCJlcnJvcnMuaGFzKCdlbWFpbCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5maXJzdCgnZW1haWwnKSB9fTwvc3Bhbj5cXG5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygncGFzc3dvcmQnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImRhdGEucGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJkYXRhLnBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XFxcInJlcXVpcmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieydpbnB1dCc6IHRydWUsICdpcy1kYW5nZXInOiBlcnJvcnMuaGFzKCdwYXNzd29yZCcpIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtbG9jayBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygncGFzc3dvcmQnKVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3Bhc3N3b3JkJykgfX08L3NwYW4+XFxuXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTQgY29sLXhzLW9mZnNldC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveCBpY2hlY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHYtbW9kZWw9XFxcInJlbWVtYmVyTWVcXFwiIG5hbWU9XFxcInJlbWVtYmVyXFxcIj4gUmVtZW1iZXIgTWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5jb2wgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtN1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFxcXCI+TG9nIEluXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uY29sIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8L2Rpdj48IS0tIC8ubG9naW4tYm94LWJvZHkgLS0+XFxuXFxuICAgIDwvZGl2PjwhLS0gLy5sb2dpbi1ib3ggLS0+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c3R5bGU+XFxuICAgIGZvb3RlciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICdsb2dpbiBjb250ZXh0JyxcXG4gICAgICAgICAgICAgICAgZGF0YToge1xcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICdhZG1pbkBhZG1pbi5jb20nLFxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICdzZWNyZXQnLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICByZW1lbWJlck1lOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGxvZ2luKCkge1xcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oc3VjY2VzcyA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhdXRoLmxvZ2luKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmRhdGEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtZW1iZXJNZTogdGhpcy5kYXRhLnJlbWVtYmVyTWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtuYW1lOiAnZGFzaGJvYXJkJ30sXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5zdWNjZXNzVG9hc3QoJ1VzZXIgTG9nZ2VkSW4nKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKHJlcykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdChyZXMuZGF0YS5lcnJvcilcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3JzJykpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChyZXMuZGF0YS5lcnJvcnMsIChlcnJvcik9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KGVycm9yKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM4ZWVjYjE2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1ib3hcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWJveC1ib2R5XCJcbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWJveC1tc2dcIlxuICB9LCBbX3ZtLl92KFwiIExvZyBJbiBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmxvZ2luKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZW1haWwnKVxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRhLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGF0YS5lbWFpbFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRhdGEuZW1haWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkYXRhLmVtYWlsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IF92bS5lcnJvcnMuaGFzKCdlbWFpbCcpXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkVtYWlsXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgXCJuYW1lXCI6IFwiZW1haWxcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5kYXRhLmVtYWlsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRhdGEuZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZW52ZWxvcGUgZm9ybS1jb250cm9sLWZlZWRiYWNrXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdlbWFpbCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZW1haWwnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdlbWFpbCcpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKVxuICAgIH1cbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRhLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGF0YS5wYXNzd29yZFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRhdGEucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkYXRhLnBhc3N3b3JkXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IF92bS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwibmFtZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZGF0YS5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kYXRhLnBhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWxvY2sgZm9ybS1jb250cm9sLWZlZWRiYWNrXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygncGFzc3dvcmQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdwYXNzd29yZCcpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy00IGNvbC14cy1vZmZzZXQtMVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94IGljaGVja1wiXG4gIH0sIFtfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlbWVtYmVyTWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZW1lbWJlck1lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcInJlbWVtYmVyXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0ucmVtZW1iZXJNZSkgPyBfdm0uX2koX3ZtLnJlbWVtYmVyTWUsIG51bGwpID4gLTEgOiAoX3ZtLnJlbWVtYmVyTWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IF92bS5yZW1lbWJlck1lLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnJlbWVtYmVyTWUgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0ucmVtZW1iZXJNZSA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdm0ucmVtZW1iZXJNZSA9ICQkY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFJlbWVtYmVyIE1lXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbG9nb1wiXG4gIH0sIFtfYygnYicsIFtfdm0uX3YoXCJTY291dGluZ1wiKV0pLCBfdm0uX3YoXCIzN1xcbiAgICBcIildKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTdcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1mbGF0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9nIEluXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYzhlZWNiMTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWM4ZWVjYjE2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAzNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYzhlZWNiMTYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYzhlZWNiMTYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM4ZWVjYjE2IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWM4ZWVjYjE2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiXSwic291cmNlUm9vdCI6IiJ9