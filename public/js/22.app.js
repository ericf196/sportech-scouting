webpackJsonp([22,31],{

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(457)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(291),
  /* template */
  __webpack_require__(422),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/auth/register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5bff6e47", Component.options)
  } else {
    hotAPI.reload("data-v-5bff6e47", Component.options)
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

/***/ 291:
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
            context: 'login context',
            data: {
                user_name: '',
                first_name: '',
                last_name: '',
                email: 'admin@admin.com',
                password: 'secret',
                confirm_password: '',
                token: ''
            },
            error: null
        };
    },

    methods: {
        register: function register() {
            var _this = this;

            this.data.token = this.$route.query.token;
            _userService2.default.create(this.data, function (response) {
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

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\nfooter {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n}\n\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/auth/register.vue?e2404e0e"],"names":[],"mappings":";AAoFA;IACA,mBAAA;IACA,UAAA;IACA,SAAA;IACA,QAAA;CACA","file":"register.vue","sourcesContent":["<template>\n    <div class=\"login-box\">\n        <div class=\"login-logo\">\n            <b>Scouting</b>37\n        </div>\n        <div class=\"login-box-body\">\n            <p class=\"login-box-msg\"> Register </p>\n            <form v-on:submit.prevent=\"register()\">\n                <div class=\"form-group has-feedback\">\n                    <label class=\"col-md-4 control-label\">User</label>\n                    <input type=\"text\" class=\"form-control\"\n                           placeholder=\"User\"\n                           name=\"user_name\" v-model=\"data.user_name\"/>\n                    <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                </div>\n                <div class=\"form-group has-feedback\">\n                    <label class=\"col-md-4 control-label\">First name</label>\n                    <input type=\"text\" class=\"form-control\"\n                           placeholder=\"First name\"\n                           name=\"first_name\" v-model=\"data.first_name\"/>\n                    <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                </div>\n                <div class=\"form-group has-feedback\">\n                    <label class=\"col-md-4 control-label\">Last name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\"\n                           name=\"last_name\" v-model=\"data.last_name\"/>\n                    <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n                </div>\n                <div class=\"form-group has-feedback\" :class=\"{'has-error': errors.has('email') }\">\n                    <label class=\"col-md-4 control-label\">Email</label>\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           placeholder=\"Email\"\n                           v-model=\"data.email\"\n                           v-validate.initial\n                           data-vv-rules=\"required|email\"\n                           :class=\"{'input': true, 'is-danger': errors.has('email') }\"\n                           name=\"email\"/>\n                    <span class=\"fa fa-envelope form-control-feedback\"></span>\n                    <span v-show=\"errors.has('email')\" class=\"text-danger\">{{ errors.first('email') }}</span>\n\n                </div>\n                <div class=\"form-group has-feedback\" :class=\"{'has-error': errors.has('password') }\">\n                    <label class=\"col-md-4 control-label\">Password</label>\n                    <input type=\"password\"\n                           class=\"form-control\"\n                           name=\"password\"\n                           v-model=\"data.password\"\n                           v-validate.initial\n                           data-vv-rules=\"required\"\n                           :class=\"{'input': true, 'is-danger': errors.has('password') }\"\n                           placeholder=\"Password\"/>\n                    <span class=\"fa fa-lock form-control-feedback\"></span>\n                    <span v-show=\"errors.has('password')\" class=\"text-danger\">{{ errors.first('password') }}</span>\n\n                </div>\n                <div class=\"form-group has-feedback\" :class=\"{'has-error': errors.has('password') }\">\n                    <label class=\"col-md-6 control-label\">Confirm Password</label>\n                    <input type=\"password\"\n                           class=\"form-control\"\n                           name=\"confirm_password\"\n                           v-model=\"data.confirm_password\"\n                           v-validate.initial\n                           data-vv-rules=\"required\"\n                           :class=\"{'input': true, 'is-danger': errors.has('password') }\"\n                           placeholder=\" Confirm Password\"/>\n                    <span class=\"fa fa-lock form-control-feedback\"></span>\n                    <span v-show=\"errors.has('password')\" class=\"text-danger\">{{ errors.first('password') }}</span>\n\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-7\">\n                        <button type=\"submit\"\n                                class=\"btn btn-primary btn-block btn-flat\">Register\n                        </button>\n                    </div><!-- /.col -->\n                </div>\n            </form>\n        </div><!-- /.login-box-body -->\n\n    </div><!-- /.login-box -->\n</template>\n\n<style>\n    footer {\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        left: 0;\n    }\n\n</style>\n<script>\n    import userService from 'base/dashboard/services/user/userService'\n\n    export default{\n        data(){\n            return {\n                context: 'login context',\n                data: {\n                    user_name : '',\n                    first_name: '',\n                    last_name: '',\n                    email: 'admin@admin.com',\n                    password: 'secret',\n                    confirm_password :'',\n                    token : ''\n                },\n                error: null,\n            }\n        },\n        methods: {\n            register() {\n                this.data.token=this.$route.query.token;\n                userService.create(this.data,\n                        (response)=> {\n                    this.$root.successToast(response.message);\n            },\n                (response)=> {\n                    if (response.validation) {\n                        for (var error in response.errors) {\n                            if (response.errors.hasOwnProperty(error)) {\n                                response.errors[error].forEach((validationError) => {\n                                })\n                            }\n                        }\n                    } else {\n                    }\n                });\n            }\n        }\n    }\n</script>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "login-box-body"
  }, [_c('p', {
    staticClass: "login-box-msg"
  }, [_vm._v(" Register ")]), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.register()
      }
    }
  }, [_c('div', {
    staticClass: "form-group has-feedback"
  }, [_c('label', {
    staticClass: "col-md-4 control-label"
  }, [_vm._v("User")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.user_name),
      expression: "data.user_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "User",
      "name": "user_name"
    },
    domProps: {
      "value": _vm._s(_vm.data.user_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.user_name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-user form-control-feedback"
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-feedback"
  }, [_c('label', {
    staticClass: "col-md-4 control-label"
  }, [_vm._v("First name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.first_name),
      expression: "data.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "First name",
      "name": "first_name"
    },
    domProps: {
      "value": _vm._s(_vm.data.first_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.first_name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-user form-control-feedback"
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-feedback"
  }, [_c('label', {
    staticClass: "col-md-4 control-label"
  }, [_vm._v("Last name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.last_name),
      expression: "data.last_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Last Name",
      "name": "last_name"
    },
    domProps: {
      "value": _vm._s(_vm.data.last_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.last_name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "glyphicon glyphicon-user form-control-feedback"
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-feedback",
    class: {
      'has-error': _vm.errors.has('email')
    }
  }, [_c('label', {
    staticClass: "col-md-4 control-label"
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
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
  }, [_c('label', {
    staticClass: "col-md-4 control-label"
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
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
    staticClass: "form-group has-feedback",
    class: {
      'has-error': _vm.errors.has('password')
    }
  }, [_c('label', {
    staticClass: "col-md-6 control-label"
  }, [_vm._v("Confirm Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.data.confirm_password),
      expression: "data.confirm_password"
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
      "name": "confirm_password",
      "data-vv-rules": "required",
      "placeholder": " Confirm Password"
    },
    domProps: {
      "value": _vm._s(_vm.data.confirm_password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.data.confirm_password = $event.target.value
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
  }, [_vm._v(_vm._s(_vm.errors.first('password')))])]), _vm._v(" "), _vm._m(1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-logo"
  }, [_c('b', [_vm._v("Scouting")]), _vm._v("37\n    ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-7"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-block btn-flat",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Register\n                    ")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5bff6e47", module.exports)
  }
}

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(368);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("1dd62afc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5bff6e47!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5bff6e47!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclNlcnZpY2UuanM/YzIzZiIsIndlYnBhY2s6Ly8vcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9yZWdpc3Rlci52dWU/NmY5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F1dGgvcmVnaXN0ZXIudnVlP2IwNmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL3JlZ2lzdGVyLnZ1ZT83YTQ3Il0sIm5hbWVzIjpbInNob3ciLCJpZCIsInN1Y2Nlc3NDYWxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsInVwZGF0ZSIsInVzZXIiLCJwdXQiLCJlbXVsYXRlSFRUUCIsImNyZWF0ZSIsInBvc3QiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOzs7Ozs7a0JBRWU7QUFDWEEsUUFEVyxnQkFDTkMsRUFETSxFQUNGQyxjQURFLEVBQ2NDLGFBRGQsRUFDNEI7QUFDbkMsZUFBTyxjQUFJQyxJQUFKLENBQVNDLEdBQVQsQ0FBYSx3R0FBYixFQUNGQyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQUxVO0FBTVhDLFVBTlcsa0JBTUpWLEVBTkksRUFNQVcsSUFOQSxFQU1NVixjQU5OLEVBTXNCQyxhQU50QixFQU1vQztBQUMzQyxlQUFPLGNBQUlDLElBQUosQ0FBU1MsR0FBVCxDQUFhLFdBQWIsRUFBMEJELElBQTFCLEVBQWdDLEVBQUNFLGFBQWEsSUFBZCxFQUFoQyxFQUNGUixJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxNQUFNRixJQUFwQixDQUFYO0FBQUEsU0FGSixDQUFQO0FBR0gsS0FWVTtBQVdYTyxVQVhXLGtCQVdKSCxJQVhJLEVBV0NWLGNBWEQsRUFXaUJDLGFBWGpCLEVBVytCO0FBQ25DLGVBQU8sY0FBSUMsSUFBSixDQUFTWSxJQUFULENBQWMsYUFBZCxFQUE0QkosSUFBNUIsRUFDRk4sSUFERSxDQUNHLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0wsZUFBZUssU0FBU0MsSUFBeEIsQ0FBZDtBQUFBLFNBREgsRUFFREMsS0FGQyxDQUVLLFVBQUNDLEtBQUQ7QUFBQSxtQkFBV1AsY0FBY08sS0FBZCxDQUFYO0FBQUEsU0FGTCxDQUFQO0FBR04sS0FmVTtBQWdCWE8sUUFoQlcsZ0JBZ0JOTCxJQWhCTSxFQWdCRFYsY0FoQkMsRUFnQmVDLGFBaEJmLEVBZ0I2QjtBQUNwQyxlQUFPLGNBQUlDLElBQUosQ0FBU1ksSUFBVCxDQUFjLHFCQUFkLEVBQW9DSixJQUFwQyxFQUNFTixJQURGLENBQ08sVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FEUCxFQUVWQyxLQUZVLENBRUosVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZJLENBQVA7QUFHSDtBQXBCVSxDOzs7Ozs7Ozs7Ozs7OztBQzZGZjs7Ozs7OzswQkFFQTs7cUJBRUE7OzJCQUVBOzRCQUNBOzJCQUNBO3VCQUNBOzBCQUNBO2tDQUNBO3VCQUVBO0FBUkE7bUJBVUE7QUFaQTtBQWFBOzs7O0FBRUE7O2dEQUNBOzhDQUNBLDBCQUNBO2tEQUNBO0FBQ0EsbUNBQ0E7eUNBQ0E7dURBQ0E7bUVBQ0E7c0ZBQ0EsQ0FDQTtBQUNBO0FBQ0E7dUJBQ0EsQ0FDQTtBQUNBO0FBRUE7QUFuQkE7QUFoQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLHlCQUF5QixnQkFBZ0IsZUFBZSxjQUFjLEdBQUcsWUFBWSw2SEFBNkgsTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLCtwREFBK3BELGtDQUFrQyxtYUFBbWEsaURBQWlELG9OQUFvTix5QkFBeUIsb0dBQW9HLHFDQUFxQyxtYUFBbWEsb0RBQW9ELDZOQUE2Tiw0QkFBNEIsb0dBQW9HLHFDQUFxQywyYkFBMmIsb0RBQW9ELHNPQUFzTyw0QkFBNEIsdWVBQXVlLDZCQUE2QixvQkFBb0IsbUJBQW1CLGtCQUFrQixPQUFPLHFIQUFxSCxpQkFBaUIsc0JBQXNCLG9FQUFvRSxvU0FBb1MsOENBQThDLFdBQVcscUJBQXFCLDBCQUEwQiwwREFBMEQsdUZBQXVGLGdFQUFnRSxlQUFlLGlDQUFpQyxnREFBZ0QsOERBQThELDBFQUEwRSx1RkFBdUYsbUNBQW1DLGdDQUFnQywyQkFBMkIsdUJBQXVCLE9BQU8sdUJBQXVCLG1CQUFtQixFQUFFLGVBQWUsV0FBVyxPQUFPLHdDQUF3Qzs7QUFFM3lNOzs7Ozs7OztBQ1BBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzVRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvMjIuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTViZmY2ZTQ3IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZWdpc3Rlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTViZmY2ZTQ3IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL3JlZ2lzdGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHJlZ2lzdGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YmZmNmU0N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTViZmY2ZTQ3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIyIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvYXV0aC91c2VyP2luY2x1ZGU9YXRobGV0ZS5zcG9ydCxhdGhsZXRlLnNwZWNpYWx0eSxhdGhsZXRlLmNvdW50cnksYXRobGV0ZS5jYXRlZ29yeSxhdGhsZXRlLmdlbmRlcicpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgdXBkYXRlKGlkLCB1c2VyLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wdXQoJy9hcGkvdXNlcicsIHVzZXIsIHtlbXVsYXRlSFRUUDogdHJ1ZX0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XG4gICAgfSxcbiAgICBjcmVhdGUodXNlcixzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL2FjY2VwdCcsdXNlcilcbiAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgc2VuZCh1c2VyLHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvcGFzc3dvcmQvZW1haWwnLHVzZXIpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy91c2VyL3VzZXJTZXJ2aWNlLmpzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWxvZ29cIj5cbiAgICAgICAgICAgIDxiPlNjb3V0aW5nPC9iPjM3XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibG9naW4tYm94LW1zZ1wiPiBSZWdpc3RlciA8L3A+XG4gICAgICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwicmVnaXN0ZXIoKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCI+VXNlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcl9uYW1lXCIgdi1tb2RlbD1cImRhdGEudXNlcl9uYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlciBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcIj5GaXJzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCIgdi1tb2RlbD1cImRhdGEuZmlyc3RfbmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXIgZm9ybS1jb250cm9sLWZlZWRiYWNrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCI+TGFzdCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCIgdi1tb2RlbD1cImRhdGEubGFzdF9uYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlciBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdlbWFpbCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLW1kLTQgY29udHJvbC1sYWJlbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGEuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWR8ZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydpbnB1dCc6IHRydWUsICdpcy1kYW5nZXInOiBlcnJvcnMuaGFzKCdlbWFpbCcpIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWVudmVsb3BlIGZvcm0tY29udHJvbC1mZWVkYmFja1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVwiZXJyb3JzLmhhcygnZW1haWwnKVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuZmlyc3QoJ2VtYWlsJykgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0YS5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWxvY2sgZm9ybS1jb250cm9sLWZlZWRiYWNrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XCJlcnJvcnMuaGFzKCdwYXNzd29yZCcpXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5maXJzdCgncGFzc3dvcmQnKSB9fTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygncGFzc3dvcmQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC02IGNvbnRyb2wtbGFiZWxcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybV9wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0YS5jb25maXJtX3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaW5wdXQnOiB0cnVlLCAnaXMtZGFuZ2VyJzogZXJyb3JzLmhhcygncGFzc3dvcmQnKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIENvbmZpcm0gUGFzc3dvcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtbG9jayBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmZpcnN0KCdwYXNzd29yZCcpIH19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFwiPlJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmNvbCAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+PCEtLSAvLmxvZ2luLWJveC1ib2R5IC0tPlxuXG4gICAgPC9kaXY+PCEtLSAvLmxvZ2luLWJveCAtLT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgICBmb290ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU2VydmljZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICdsb2dpbiBjb250ZXh0JyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJfbmFtZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICdhZG1pbkBhZG1pbi5jb20nLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3NlY3JldCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1fcGFzc3dvcmQgOicnLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA6ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnRva2VuPXRoaXMuJHJvdXRlLnF1ZXJ5LnRva2VuO1xuICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLmNyZWF0ZSh0aGlzLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LnN1Y2Nlc3NUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGVycm9yIGluIHJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1tlcnJvcl0uZm9yRWFjaCgodmFsaWRhdGlvbkVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVnaXN0ZXIudnVlP2UyNDA0ZTBlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdXRoL3JlZ2lzdGVyLnZ1ZT9lMjQwNGUwZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0ZBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwicmVnaXN0ZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwibG9naW4tYm94XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ2luLWxvZ29cXFwiPlxcbiAgICAgICAgICAgIDxiPlNjb3V0aW5nPC9iPjM3XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxvZ2luLWJveC1ib2R5XFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwibG9naW4tYm94LW1zZ1xcXCI+IFJlZ2lzdGVyIDwvcD5cXG4gICAgICAgICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJyZWdpc3RlcigpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5Vc2VyPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJVc2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInVzZXJfbmFtZVxcXCIgdi1tb2RlbD1cXFwiZGF0YS51c2VyX25hbWVcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXIgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcXFwiPkZpcnN0IG5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkZpcnN0IG5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiZmlyc3RfbmFtZVxcXCIgdi1tb2RlbD1cXFwiZGF0YS5maXJzdF9uYW1lXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5MYXN0IG5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJMYXN0IE5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwibGFzdF9uYW1lXFxcIiB2LW1vZGVsPVxcXCJkYXRhLmxhc3RfbmFtZVxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdXNlciBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW1haWwnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY29sLW1kLTQgY29udHJvbC1sYWJlbFxcXCI+RW1haWw8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZGF0YS5lbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVxcXCJyZXF1aXJlZHxlbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsnaW5wdXQnOiB0cnVlLCAnaXMtZGFuZ2VyJzogZXJyb3JzLmhhcygnZW1haWwnKSB9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImVtYWlsXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZW52ZWxvcGUgZm9ybS1jb250cm9sLWZlZWRiYWNrXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXNob3c9XFxcImVycm9ycy5oYXMoJ2VtYWlsJylcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmZpcnN0KCdlbWFpbCcpIH19PC9zcGFuPlxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdwYXNzd29yZCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJkYXRhLnBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XFxcInJlcXVpcmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieydpbnB1dCc6IHRydWUsICdpcy1kYW5nZXInOiBlcnJvcnMuaGFzKCdwYXNzd29yZCcpIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtbG9jayBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygncGFzc3dvcmQnKVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3Bhc3N3b3JkJykgfX08L3NwYW4+XFxuXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1xcXCIgOmNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImNvbC1tZC02IGNvbnRyb2wtbGFiZWxcXFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiY29uZmlybV9wYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJkYXRhLmNvbmZpcm1fcGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7J2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoJ3Bhc3N3b3JkJykgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiIENvbmZpcm0gUGFzc3dvcmRcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZvcm0tY29udHJvbC1mZWVkYmFja1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1zaG93PVxcXCJlcnJvcnMuaGFzKCdwYXNzd29yZCcpXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5maXJzdCgncGFzc3dvcmQnKSB9fTwvc3Bhbj5cXG5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtN1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFxcXCI+UmVnaXN0ZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5jb2wgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDwvZGl2PjwhLS0gLy5sb2dpbi1ib3gtYm9keSAtLT5cXG5cXG4gICAgPC9kaXY+PCEtLSAvLmxvZ2luLWJveCAtLT5cXG48L3RlbXBsYXRlPlxcblxcbjxzdHlsZT5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclNlcnZpY2UnXFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6ICdsb2dpbiBjb250ZXh0JyxcXG4gICAgICAgICAgICAgICAgZGF0YToge1xcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9uYW1lIDogJycsXFxuICAgICAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiAnJyxcXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJ2FkbWluQGFkbWluLmNvbScsXFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJ3NlY3JldCcsXFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkIDonJyxcXG4gICAgICAgICAgICAgICAgICAgIHRva2VuIDogJydcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICByZWdpc3RlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnRva2VuPXRoaXMuJHJvdXRlLnF1ZXJ5LnRva2VuO1xcbiAgICAgICAgICAgICAgICB1c2VyU2VydmljZS5jcmVhdGUodGhpcy5kYXRhLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LnN1Y2Nlc3NUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnZhbGlkYXRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcikpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1tlcnJvcl0uZm9yRWFjaCgodmFsaWRhdGlvbkVycm9yKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01YmZmNmU0NyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDM2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibG9naW4tYm94XCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1ib3gtYm9keVwiXG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1ib3gtbXNnXCJcbiAgfSwgW192bS5fdihcIiBSZWdpc3RlciBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIlVzZXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRhdGEudXNlcl9uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGF0YS51c2VyX25hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVXNlclwiLFxuICAgICAgXCJuYW1lXCI6IFwidXNlcl9uYW1lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZGF0YS51c2VyX25hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGF0YS51c2VyX25hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyIGZvcm0tY29udHJvbC1mZWVkYmFja1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiRmlyc3QgbmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZGF0YS5maXJzdF9uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGF0YS5maXJzdF9uYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkZpcnN0IG5hbWVcIixcbiAgICAgIFwibmFtZVwiOiBcImZpcnN0X25hbWVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5kYXRhLmZpcnN0X25hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGF0YS5maXJzdF9uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tdXNlciBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIkxhc3QgbmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZGF0YS5sYXN0X25hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkYXRhLmxhc3RfbmFtZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJMYXN0IE5hbWVcIixcbiAgICAgIFwibmFtZVwiOiBcImxhc3RfbmFtZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmRhdGEubGFzdF9uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmRhdGEubGFzdF9uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdseXBoaWNvbiBnbHlwaGljb24tdXNlciBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgaGFzLWZlZWRiYWNrXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZW1haWwnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNCBjb250cm9sLWxhYmVsXCJcbiAgfSwgW192bS5fdihcIkVtYWlsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRhLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGF0YS5lbWFpbFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaW5wdXQnOiB0cnVlLCAnaXMtZGFuZ2VyJzogX3ZtLmVycm9ycy5oYXMoJ2VtYWlsJylcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW1haWxcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkfGVtYWlsXCIsXG4gICAgICBcIm5hbWVcIjogXCJlbWFpbFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmRhdGEuZW1haWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGF0YS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1lbnZlbG9wZSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2VtYWlsJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdlbWFpbCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2VtYWlsJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBoYXMtZmVlZGJhY2tcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC00IGNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmRhdGEucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkYXRhLnBhc3N3b3JkXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdpbnB1dCc6IHRydWUsICdpcy1kYW5nZXInOiBfdm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKVxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcIm5hbWVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmRhdGEucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGF0YS5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1sb2NrIGZvcm0tY29udHJvbC1mZWVkYmFja1wiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygncGFzc3dvcmQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgncGFzc3dvcmQnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGhhcy1mZWVkYmFja1wiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgY29udHJvbC1sYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJDb25maXJtIFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRhLmNvbmZpcm1fcGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJkYXRhLmNvbmZpcm1fcGFzc3dvcmRcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2lucHV0JzogdHJ1ZSwgJ2lzLWRhbmdlcic6IF92bS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwibmFtZVwiOiBcImNvbmZpcm1fcGFzc3dvcmRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiIENvbmZpcm0gUGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5kYXRhLmNvbmZpcm1fcGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZGF0YS5jb25maXJtX3Bhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWxvY2sgZm9ybS1jb250cm9sLWZlZWRiYWNrXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdwYXNzd29yZCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygncGFzc3dvcmQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdwYXNzd29yZCcpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxvZ29cIlxuICB9LCBbX2MoJ2InLCBbX3ZtLl92KFwiU2NvdXRpbmdcIildKSwgX3ZtLl92KFwiMzdcXG4gICAgXCIpXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy03XCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlJlZ2lzdGVyXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01YmZmNmU0N1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWJmZjZlNDchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDQyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01YmZmNmU0NyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjFkZDYyYWZjXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01YmZmNmU0NyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01YmZmNmU0NyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01YmZmNmU0NyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDQ1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIyIl0sInNvdXJjZVJvb3QiOiIifQ==