webpackJsonp([26,31],{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(442)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(263),
  /* template */
  __webpack_require__(409),
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

/***/ 263:
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
                        self.$root.loadChallengesInProgress();
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

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\nfooter {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n}\n\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/auth/login.vue?080dcf42"],"names":[],"mappings":";AA0DA;IACA,mBAAA;IACA,UAAA;IACA,SAAA;IACA,QAAA;CACA","file":"login.vue","sourcesContent":["<template>\n    <div class=\"login-box\">\n        <div class=\"login-logo\">\n            <b>Scouting</b>37\n        </div>\n        <div class=\"login-box-body\">\n            <p class=\"login-box-msg\"> Log In </p>\n            <form v-on:submit.prevent=\"login()\">\n                <div class=\"form-group has-feedback\" :class=\"{'has-error': errors.has('email') }\">\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           placeholder=\"Email\"\n                           v-model=\"data.email\"\n                           v-validate.initial\n                           data-vv-rules=\"required|email\"\n                           :class=\"{'input': true, 'is-danger': errors.has('email') }\"\n                           name=\"email\"/>\n                    <span class=\"fa fa-envelope form-control-feedback\"></span>\n                    <span v-show=\"errors.has('email')\" class=\"text-danger\">{{ errors.first('email') }}</span>\n\n                </div>\n                <div class=\"form-group has-feedback\" :class=\"{'has-error': errors.has('password') }\">\n                    <input type=\"password\"\n                           class=\"form-control\"\n                           name=\"password\"\n                           v-model=\"data.password\"\n                           v-validate.initial\n                           data-vv-rules=\"required\"\n                           :class=\"{'input': true, 'is-danger': errors.has('password') }\"\n                           placeholder=\"Password\"/>\n                    <span class=\"fa fa-lock form-control-feedback\"></span>\n                    <span v-show=\"errors.has('password')\" class=\"text-danger\">{{ errors.first('password') }}</span>\n\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-4 col-xs-offset-1\">\n                        <div class=\"checkbox icheck\">\n                            <label>\n                                <input type=\"checkbox\" v-model=\"rememberMe\" name=\"remember\"> Remember Me\n                            </label>\n                        </div>\n                    </div><!-- /.col -->\n                    <div class=\"col-xs-7\">\n                        <button type=\"submit\"\n                                class=\"btn btn-primary btn-block btn-flat\">Log In\n                        </button>\n                        <a class=\"btn btn-link\" href=\"\">\n                            Forgot Your Password?\n                        </a>\n                    </div><!-- /.col -->\n                </div>\n            </form>\n        </div><!-- /.login-box-body -->\n\n    </div><!-- /.login-box -->\n</template>\n\n<style>\n    footer {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        left: 0;\n    }\n\n</style>\n<script>\n\n    export default{\n        data(){\n            return {\n                context: 'login context',\n                data: {\n                    email: 'admin@admin.com',\n                    password: 'secret',\n                },\n                rememberMe: false,\n                error: null\n            }\n        },\n        methods: {\n            login() {\n                var self = this;\n                this.$validator.validateAll().then(success => {\n                    if (!success) {\n                        // handle error\n                        return;\n                    }\n                    this.$auth.login({\n                        body: this.data,\n                        rememberMe: this.data.rememberMe,\n                        redirect: {name: 'dashboard'},\n                        success() {\n                            self.$root.successToast('User LoggedIn');\n                            self.$root.loadChallengesInProgress()\n\n                        },\n                        error(res) {\n                            if (res.data.hasOwnProperty('error')) {\n                                self.$root.errorToast(res.data.error)\n                            } else if (res.data.hasOwnProperty('errors')) {\n                                _.each(res.data.errors, (error)=> {\n                                    self.$root.errorToast(error)\n                                })\n                            }\n                        }\n                    });\n                });\n            }\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 409:
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
  }, [_vm._v("Log In\n                    ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-link",
    attrs: {
      "href": ""
    }
  }, [_vm._v("\n                        Forgot Your Password?\n                    ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c8eecb16", module.exports)
  }
}

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(353);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("edba3068", content, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL2xvZ2luLnZ1ZT9jNmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9sb2dpbi52dWU/YmQ3YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlPzE3ZGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQ0E7Ozs7MEJBRUE7O3FCQUVBOzt1QkFFQTswQkFFQTtBQUhBO3dCQUlBO21CQUVBO0FBUkE7QUFTQTs7OztBQUVBOzt1QkFDQTtrRUFDQTs4QkFDQTtBQUNBO0FBQ0E7QUFDQTs7Z0NBRUE7MkNBQ0E7c0NBQ0E7Z0RBQ0E7Z0RBQ0E7bUNBRUE7QUFDQTsrQ0FDQTs4REFDQTsyREFDQTtzRUFDQTtxRUFDQTtzREFDQTtBQUNBO0FBQ0E7QUFFQTtBQWxCQTtBQW1CQTtBQUVBO0FBN0JBO0FBWkEsRTs7Ozs7OztBQ3JFQTtBQUNBOzs7QUFHQTtBQUNBLG1DQUFvQyx5QkFBeUIs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IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWM4ZWVjYjE2IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWM4ZWVjYjE2IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL2xvZ2luLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxvZ2luLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jOGVlY2IxNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWM4ZWVjYjE2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWxvZ29cIj5cbiAgICAgICAgICAgIDxiPlNjb3V0aW5nPC9iPjM3XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibG9naW4tYm94LW1zZ1wiPiBMb2cgSW4gPC9wPlxuICAgICAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cImxvZ2luKClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2VtYWlsJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0YS5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZHxlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ2VtYWlsJykgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtZW52ZWxvcGUgZm9ybS1jb250cm9sLWZlZWRiYWNrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCdlbWFpbCcpXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5maXJzdCgnZW1haWwnKSB9fTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygncGFzc3dvcmQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRhLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaW5wdXQnOiB0cnVlLCAnaXMtZGFuZ2VyJzogZXJyb3JzLmhhcygncGFzc3dvcmQnKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbG9jayBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmZpcnN0KCdwYXNzd29yZCcpIH19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXhzLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3ggaWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cInJlbWVtYmVyTWVcIiBuYW1lPVwicmVtZW1iZXJcIj4gUmVtZW1iZXIgTWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5jb2wgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1mbGF0XCI+TG9nIEluXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCBZb3VyIFBhc3N3b3JkP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uY29sIC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj48IS0tIC8ubG9naW4tYm94LWJvZHkgLS0+XG5cbiAgICA8L2Rpdj48IS0tIC8ubG9naW4tYm94IC0tPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIGZvb3RlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbjwvc3R5bGU+XG48c2NyaXB0PlxuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29udGV4dDogJ2xvZ2luIGNvbnRleHQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICdhZG1pbkBhZG1pbi5jb20nLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3NlY3JldCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW1lbWJlck1lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsb2dpbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhdXRoLmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRoaXMuZGF0YS5yZW1lbWJlck1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtuYW1lOiAnZGFzaGJvYXJkJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3Quc3VjY2Vzc1RvYXN0KCdVc2VyIExvZ2dlZEluJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5sb2FkQ2hhbGxlbmdlc0luUHJvZ3Jlc3MoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdChyZXMuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLmhhc093blByb3BlcnR5KCdlcnJvcnMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2gocmVzLmRhdGEuZXJyb3JzLCAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbG9naW4udnVlPzA4MGRjZjQyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL2xvZ2luLnZ1ZT8wODBkY2Y0MlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMERBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwibG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwibG9naW4tYm94XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ2luLWxvZ29cXFwiPlxcbiAgICAgICAgICAgIDxiPlNjb3V0aW5nPC9iPjM3XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ2luLWJveC1ib2R5XFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwibG9naW4tYm94LW1zZ1xcXCI+IExvZyBJbiA8L3A+XFxuICAgICAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cXFwibG9naW4oKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW1haWwnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImRhdGEuZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWR8ZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7J2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ2VtYWlsJykgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJlbWFpbFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVxcXCJlcnJvcnMuaGFzKCdlbWFpbCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5maXJzdCgnZW1haWwnKSB9fTwvc3Bhbj5cXG5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygncGFzc3dvcmQnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImRhdGEucGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7J2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVxcXCJlcnJvcnMuaGFzKCdwYXNzd29yZCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5maXJzdCgncGFzc3dvcmQnKSB9fTwvc3Bhbj5cXG5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNCBjb2wteHMtb2Zmc2V0LTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94IGljaGVja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgdi1tb2RlbD1cXFwicmVtZW1iZXJNZVxcXCIgbmFtZT1cXFwicmVtZW1iZXJcXFwiPiBSZW1lbWJlciBNZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmNvbCAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy03XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1mbGF0XFxcIj5Mb2cgSW5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIiBocmVmPVxcXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgWW91ciBQYXNzd29yZD9cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uY29sIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8L2Rpdj48IS0tIC8ubG9naW4tYm94LWJvZHkgLS0+XFxuXFxuICAgIDwvZGl2PjwhLS0gLy5sb2dpbi1ib3ggLS0+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c3R5bGU+XFxuICAgIGZvb3RlciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICdsb2dpbiBjb250ZXh0JyxcXG4gICAgICAgICAgICAgICAgZGF0YToge1xcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICdhZG1pbkBhZG1pbi5jb20nLFxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICdzZWNyZXQnLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICByZW1lbWJlck1lOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGxvZ2luKCkge1xcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oc3VjY2VzcyA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhdXRoLmxvZ2luKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmRhdGEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtZW1iZXJNZTogdGhpcy5kYXRhLnJlbWVtYmVyTWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtuYW1lOiAnZGFzaGJvYXJkJ30sXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5zdWNjZXNzVG9hc3QoJ1VzZXIgTG9nZ2VkSW4nKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5sb2FkQ2hhbGxlbmdlc0luUHJvZ3Jlc3MoKVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IocmVzKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHJlcy5kYXRhLmVycm9yKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLmhhc093blByb3BlcnR5KCdlcnJvcnMnKSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHJlcy5kYXRhLmVycm9ycywgKGVycm9yKT0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QoZXJyb3IpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYzhlZWNiMTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAzNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWJveFwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW4tYm94LWJvZHlcIlxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW4tYm94LW1zZ1wiXG4gIH0sIFtfdm0uX3YoXCIgTG9nIEluIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ubG9naW4oKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdlbWFpbCcpXG4gICAgfVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRhdGEuZW1haWwpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkYXRhLmVtYWlsXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdpbnB1dCc6IHRydWUsICdpcy1kYW5nZXInOiBfdm0uZXJyb3JzLmhhcygnZW1haWwnKVxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbWFpbFwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWR8ZW1haWxcIixcbiAgICAgIFwibmFtZVwiOiBcImVtYWlsXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZGF0YS5lbWFpbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kYXRhLmVtYWlsID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWVudmVsb3BlIGZvcm0tY29udHJvbC1mZWVkYmFja1wiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZW1haWwnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2VtYWlsJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZW1haWwnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZGF0YS5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImRhdGEucGFzc3dvcmRcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IF92bS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwibmFtZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZGF0YS5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kYXRhLnBhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWxvY2sgZm9ybS1jb250cm9sLWZlZWRiYWNrXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygncGFzc3dvcmQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdwYXNzd29yZCcpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy00IGNvbC14cy1vZmZzZXQtMVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94IGljaGVja1wiXG4gIH0sIFtfYygnbGFiZWwnLCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlbWVtYmVyTWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZW1lbWJlck1lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwibmFtZVwiOiBcInJlbWVtYmVyXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0ucmVtZW1iZXJNZSkgPyBfdm0uX2koX3ZtLnJlbWVtYmVyTWUsIG51bGwpID4gLTEgOiAoX3ZtLnJlbWVtYmVyTWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IF92bS5yZW1lbWJlck1lLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnJlbWVtYmVyTWUgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0ucmVtZW1iZXJNZSA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdm0ucmVtZW1iZXJNZSA9ICQkY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFJlbWVtYmVyIE1lXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW4tbG9nb1wiXG4gIH0sIFtfYygnYicsIFtfdm0uX3YoXCJTY291dGluZ1wiKV0pLCBfdm0uX3YoXCIzN1xcbiAgICBcIildKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTdcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1mbGF0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9nIEluXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1saW5rXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IFlvdXIgUGFzc3dvcmQ/XFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYzhlZWNiMTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWM4ZWVjYjE2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYzhlZWNiMTYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJlZGJhMzA2OFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYzhlZWNiMTYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYzhlZWNiMTYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYzhlZWNiMTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiJdLCJzb3VyY2VSb290IjoiIn0=