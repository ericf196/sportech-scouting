webpackJsonp([44,29],{

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(283),
  /* template */
  __webpack_require__(398),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\athletes\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-232ff88d", Component.options)
  } else {
    hotAPI.reload("data-v-232ff88d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(198)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(197),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\components\\header\\pageHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pageHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66f85e7d", Component.options)
  } else {
    hotAPI.reload("data-v-66f85e7d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 195:
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

exports.default = {
    props: {
        title: {
            type: String,
            required: true
        },
        breadcrumbs: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    }
};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "content-header"
  }, [_c('h1', [_vm._v("\n        " + _vm._s(_vm.title) + "\n    ")]), _vm._v(" "), _c('ol', {
    staticClass: "breadcrumb"
  }, _vm._l((_vm.breadcrumbs), function(breadcrumb) {
    return _c('router-link', {
      attrs: {
        "to": breadcrumb.href,
        "active-class": "active",
        "tag": "li"
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t(breadcrumb.title)) + "\n        ")])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66f85e7d", module.exports)
  }
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("20461418", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66f85e7d!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pageHeader.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66f85e7d!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pageHeader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
    methods: {
        parseObjFormData: function parseObjFormData(obj, formdata, namespace) {

            var fd = formdata;
            var formKey;

            for (var property in obj) {
                if (obj.hasOwnProperty(property) && obj[property]) {
                    if (namespace) {
                        formKey = namespace + '[' + property + ']';
                    } else {
                        formKey = property;
                    }

                    // if the property is an object, but not a File,
                    // use recursivity.
                    if (_typeof(obj[property]) === 'object' && !(obj[property] instanceof File)) {
                        this.parseObjFormData(obj[property], fd, formKey);
                    } else {
                        fd.append(formKey, obj[property]);
                    }
                }
            }
            return fd;
        }
    }
};

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(221)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(206),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\components\\forms\\select\\select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fd7537e", Component.options)
  } else {
    hotAPI.reload("data-v-9fd7537e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
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

var _pointerScroll = __webpack_require__(210);

var _pointerScroll2 = _interopRequireDefault(_pointerScroll);

var _typeAheadPointer = __webpack_require__(211);

var _typeAheadPointer2 = _interopRequireDefault(_typeAheadPointer);

var _ajax = __webpack_require__(209);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
    mixins: [_pointerScroll2.default, _typeAheadPointer2.default, _ajax2.default],

    props: {
        /**
         * Contains the currently selected value. Very similar to a
         * `value` attribute on an <input>. In most cases, you'll want
         * to set this as a two-way binding, using :value.sync. However,
         * this will not work with Vuex, in which case you'll need to use
         * the onChange callback property.
         * @type {Object||String||null}
         */
        value: {
            default: null
        },

        /**
         * An array of strings or objects to be used as dropdown choices.
         * If you are using an array of objects, vue-select will look for
         * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A
         * custom label key can be set with the `label` prop.
         * @type {Object}
         */
        options: {
            type: Array,
            default: function _default() {
                return [];
            }
        },

        /**
         * Sets the max-height property on the dropdown list.
         * @deprecated
         * @type {String}
         */
        maxHeight: {
            type: String,
            default: '400px'
        },

        /**
         * Enable/disable filtering the options.
         * @type {Boolean}
         */
        searchable: {
            type: Boolean,
            default: true
        },

        /**
         * Equivalent to the `multiple` attribute on a `<select>` input.
         * @type {Object}
         */
        multiple: {
            type: Boolean,
            default: false
        },

        /**
         * Equivalent to the `placeholder` attribute on an `<input>`.
         * @type {Object}
         */
        placeholder: {
            type: String,
            default: ''
        },

        /**
         * Sets a Vue transition property on the `.dropdown-menu`. vue-select
         * does not include CSS for transitions, you'll need to add them yourself.
         * @type {String}
         */
        transition: {
            type: String,
            default: 'expand'
        },

        /**
         * Enables/disables clearing the search text when an option is selected.
         * @type {Boolean}
         */
        clearSearchOnSelect: {
            type: Boolean,
            default: true
        },

        /**
         * Tells vue-select what key to use when generating option
         * labels when each `option` is an object.
         * @type {String}
         */
        label: {
            type: String,
            default: 'label'
        },

        /**
         * Callback to generate the label text. If {option}
         * is an object, returns option[this.label] by default.
         * @param  {Object || String} option
         * @return {String}
         */
        getOptionLabel: {
            type: Function,
            default: function _default(option) {
                if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
                    if (this.label && option[this.label]) {
                        return option[this.label];
                    }
                }
                return option;
            }
        },

        /**
         * An optional callback function that is called each time the selected
         * value(s) change. When integrating with Vuex, use this callback to trigger
         * an action, rather than using :value.sync to retreive the selected value.
         * @type {Function}
         * @default {null}
         */
        onChange: Function,
        changeParam: {},

        /**
         * Enable/disable creating options from searchInput.
         * @type {Boolean}
         */
        taggable: {
            type: Boolean,
            default: false
        },

        /**
         * When true, newly created tags will be added to
         * the options list.
         * @type {Boolean}
         */
        pushTags: {
            type: Boolean,
            default: false
        },

        /**
         * User defined function for adding Options
         * @type {Function}
         */
        createOption: {
            type: Function,
            default: function _default(newOption) {
                if (_typeof(this.options[0]) === 'object') {
                    return _defineProperty({}, this.label, newOption);
                }
                return newOption;
            }
        },

        /**
         * When false, updating the options will not reset the select value
         * @type {Boolean}
         */
        resetOnOptionsChange: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            search: '',
            open: false,
            selection: null
        };
    },


    watch: {
        value: function value(val, old) {
            this.selection = val;
        },
        selection: function selection(val, old) {
            if (this.multiple) {
                this.onChange ? this.onChange(val, this.changeParam) : null;
            } else {
                this.onChange && val !== old ? this.onChange(val, this.changeParam) : null;
            }
        },
        options: function options() {
            if (!this.taggable && this.resetOnOptionsChange) {
                this.selection = this.multiple ? [] : null;
            }
        },
        multiple: function multiple(val) {
            this.selection = val ? [] : null;
        }
    },

    methods: {

        /**
         * Select a given option.
         * @param  {Object||String} option
         * @return {void}
         */
        select: function select(option) {
            if (this.isOptionSelected(option)) {
                this.deselect(option);
            } else {
                if (this.taggable && !this.optionExists(option)) {
                    option = this.createOption(option);

                    if (this.pushTags) {
                        this.options.push(option);
                    }
                }

                if (this.multiple) {
                    if (!this.selection) {
                        this.selection = [option];
                    } else {
                        this.selection.push(option);
                    }
                } else {
                    this.selection = option;
                }
            }

            this.onAfterSelect(option);
        },


        /**
         * De-select a given option.
         * @param  {Object||String} option
         * @return {void}
         */
        deselect: function deselect(option) {
            var _this = this;

            if (this.multiple) {
                var ref = -1;
                this.selection.forEach(function (val) {
                    if (val === option || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val[_this.label] === option[_this.label]) {
                        ref = val;
                    }
                });
                var index = this.selection.indexOf(ref);
                this.selection.splice(index, 1);
            } else {
                this.selection = null;
            }
        },


        /**
         * Called from this.select after each selection.
         * @param  {Object||String} option
         * @return {void}
         */
        onAfterSelect: function onAfterSelect(option) {
            if (!this.multiple) {
                this.open = !this.open;
                this.$refs.search.blur();
            }

            if (this.clearSearchOnSelect) {
                this.search = '';
            }
        },


        /**
         * Toggle the visibility of the dropdown menu.
         * @param  {Event} e
         * @return {void}
         */
        toggleDropdown: function toggleDropdown(e) {
            if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {
                if (this.open) {
                    this.$refs.search.blur(); // dropdown will close on blur
                } else {
                    this.open = true;
                    this.$refs.search.focus();
                }
            }
        },


        /**
         * Check if the given option is currently selected.
         * @param  {Object||String}  option
         * @return {Boolean}         True when selected || False otherwise
         */
        isOptionSelected: function isOptionSelected(option) {
            var _this2 = this;

            if (this.multiple && this.selection) {
                var selected = false;
                this.value.forEach(function (opt) {
                    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object' && opt[_this2.label] === option[_this2.label]) {
                        selected = true;
                    } else if (opt === option) {
                        selected = true;
                    }
                });
                return selected;
            }

            return this.selection === option;
        },


        /**
         * If there is any text in the search input, remove it.
         * Otherwise, blur the search input to close the dropdown.
         * @return {[type]} [description]
         */
        onEscape: function onEscape() {
            if (!this.search.length) {
                this.$refs.search.blur();
            } else {
                this.search = '';
            }
        },


        /**
         * Delete the value on Delete keypress when there is no
         * text in the search input, & there's tags to delete
         * @return {this.value}
         */
        maybeDeleteValue: function maybeDeleteValue() {
            if (!this.$refs.search.value.length && this.value) {
                return this.multiple ? this.value.pop() : this.selection = null;
            }
        },


        /**
         * Determine if an option exists
         * within this.options array.
         *
         * @param  {Object || String} option
         * @return {boolean}
         */
        optionExists: function optionExists(option) {
            var _this3 = this;

            var exists = false;

            this.options.forEach(function (opt) {
                if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) === 'object' && opt[_this3.label] === option) {
                    exists = true;
                } else if (opt === option) {
                    exists = true;
                }
            });

            return exists;
        }
    },

    computed: {

        /**
         * Classes to be output on .dropdown
         * @return {Object}
         */
        dropdownClasses: function dropdownClasses() {
            return {
                open: this.open,
                searchable: this.searchable,
                loading: this.loading
            };
        },


        /**
         * Return the placeholder string if it's set
         * & there is no value selected.
         * @return {String} Placeholder text
         */
        searchPlaceholder: function searchPlaceholder() {
            if (this.isValueEmpty && this.placeholder) {
                return this.placeholder;
            }
        },


        /**
         * The currently displayed options, filtered
         * by the search elements value. If tagging
         * true, the search text will be prepended
         * if it doesn't already exist.
         *
         * @return {array}
         */
        filteredOptions: function filteredOptions() {
            var self = this;
            var options = this.options.filter(function (option) {
                return option[self.label].indexOf(self.search) !== -1;
            });
            if (this.taggable && this.search.length && !this.optionExists(this.search)) {
                options.unshift(this.search);
            }
            return options;
        },


        /**
         * Check if there aren't any options selected.
         * @return {Boolean}
         */
        isValueEmpty: function isValueEmpty() {
            if (this.selection) {
                if (_typeof(this.selection) === 'object') {
                    return !Object.keys(this.selection).length;
                }
                return !this.selection.length;
            }

            return true;
        },


        /**
         * Return the current value in array format.
         * @return {Array}
         */
        valueAsArray: function valueAsArray() {
            if (this.multiple) {
                return this.selection;
            } else if (this.selection) {
                return [this.selection];
            }

            return [];
        }
    }

};

/***/ }),

/***/ 208:
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


exports.default = {
    props: {
        value: {},
        acceptedFiles: {
            type: String,
            default: 'image/*'
        },
        btnText: {},
        errorValidationMsg: {},
        width: {
            type: Number,
            default: 110
        },
        image: {},
        defaultImage: {}
    },
    watch: {
        image: function image(val) {
            this.imageFile = val;
        }
    },
    data: function data() {
        return {
            imageFile: null
        };
    },

    methods: {
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage: function createImage(file) {
            if (!file.type.match(this.acceptedFiles)) {
                document.getElementById("image-uploader").value = "";
                this.$root.warningToast(this.errorValidationMsg);
                this.imageFile = this.defaultImage;
                return;
            }
            var reader = new FileReader();
            var vm = this;
            reader.onload = function (e) {
                vm.imageFile = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        getFile: function getFile() {
            return this.$refs.fileinput.files[0];
        }
    }
};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	props: {
		/**
   * Toggles the adding of a 'loading' class to the main
   * .v-select wrapper. Useful to control UI state when
   * results are being processed through AJAX.
   */
		loading: {
			type: Boolean,
			default: false
		},

		/**
   * Accept a callback function that will be
   * run when the search text changes.
   *
   * loading() accepts a boolean value, and can
   * be used to toggle a loading class from
   * the onSearch callback.
   *
   * @param {search}  String          Current search text
   * @param {loading} Function(bool)  Toggle loading class
   */
		onSearch: {},

		/**
   * The number of milliseconds to wait before
   * invoking this.onSearch(). Used to prevent
   * sending an AJAX request until input is complete.
   */
		debounce: {
			type: Number,
			default: 0
		}
	},

	watch: {
		/**
   * If a callback & search text has been provided,
   * invoke the onSearch callback.
   */
		search: function search() {
			if (this.search.length > 0 && this.onSearch) {
				this.onSearch(this.search, this.toggleLoading);
			}
		}
	},

	methods: {
		/**
   * Toggle this.loading. Optionally pass a boolean
   * value. If no value is provided, this.loading
   * will be set to the opposite of it's current value.
   * @param toggle Boolean
   * @returns {*}
   */
		toggleLoading: function toggleLoading() {
			var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (toggle == null) {
				return this.loading = !this.loading;
			}
			return this.loading = toggle;
		}
	}
};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  watch: {
    typeAheadPointer: function typeAheadPointer() {
      this.maybeAdjustScroll();
    }
  },

  methods: {
    /**
     * Adjust the scroll position of the dropdown list
     * if the current pointer is outside of the
     * overflow bounds.
     * @returns {*}
     */
    maybeAdjustScroll: function maybeAdjustScroll() {
      var pixelsToPointerTop = this.pixelsToPointerTop();
      var pixelsToPointerBottom = this.pixelsToPointerBottom();

      if (pixelsToPointerTop <= this.viewport().top) {
        return this.scrollTo(pixelsToPointerTop);
      } else if (pixelsToPointerBottom >= this.viewport().bottom) {
        return this.scrollTo(this.viewport().top + this.pointerHeight());
      }
    },


    /**
     * The distance in pixels from the top of the dropdown
     * list to the top of the current pointer element.
     * @returns {number}
     */
    pixelsToPointerTop: function pixelsToPointerTop() {
      var pixelsToPointerTop = 0;
      for (var i = 0; i < this.typeAheadPointer; i++) {
        pixelsToPointerTop += this.$refs.dropdownMenu.children[i].offsetHeight;
      }
      return pixelsToPointerTop;
    },


    /**
     * The distance in pixels from the top of the dropdown
     * list to the bottom of the current pointer element.
     * @returns {*}
     */
    pixelsToPointerBottom: function pixelsToPointerBottom() {
      return this.pixelsToPointerTop() + this.pointerHeight();
    },


    /**
     * The offsetHeight of the current pointer element.
     * @returns {number}
     */
    pointerHeight: function pointerHeight() {
      var element = this.$refs.dropdownMenu.children[this.typeAheadPointer];
      return element ? element.offsetHeight : 0;
    },


    /**
     * The currently viewable portion of the dropdownMenu.
     * @returns {{top: (string|*|number), bottom: *}}
     */
    viewport: function viewport() {
      return {
        top: this.$refs.dropdownMenu.scrollTop,
        bottom: this.$refs.dropdownMenu.offsetHeight + this.$refs.dropdownMenu.scrollTop
      };
    },


    /**
     * Scroll the dropdownMenu to a given position.
     * @param position
     * @returns {*}
     */
    scrollTo: function scrollTo(position) {
      return this.$refs.dropdownMenu.scrollTop = position;
    }
  }
};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  data: function data() {
    return {
      typeAheadPointer: -1
    };
  },


  watch: {
    filteredOptions: function filteredOptions() {
      this.typeAheadPointer = 0;
    }
  },

  methods: {
    /**
     * Move the typeAheadPointer visually up the list by
     * subtracting the current index by one.
     * @return {void}
     */
    typeAheadUp: function typeAheadUp() {
      if (this.typeAheadPointer > 0) {
        this.typeAheadPointer--;
        if (this.maybeAdjustScroll) {
          this.maybeAdjustScroll();
        }
      }
    },


    /**
     * Move the typeAheadPointer visually down the list by
     * adding the current index by one.
     * @return {void}
     */
    typeAheadDown: function typeAheadDown() {
      if (this.typeAheadPointer < this.filteredOptions.length - 1) {
        this.typeAheadPointer++;
        if (this.maybeAdjustScroll) {
          this.maybeAdjustScroll();
        }
      }
    },


    /**
     * Select the option at the current typeAheadPointer position.
     * Optionally clear the search input on selection.
     * @return {void}
     */
    typeAheadSelect: function typeAheadSelect() {
      if (this.filteredOptions[this.typeAheadPointer]) {
        this.select(this.filteredOptions[this.typeAheadPointer]);
      } else if (this.taggable && this.search.length) {
        this.select(this.search);
      }

      if (this.clearSearchOnSelect) {
        this.search = "";
      }
    }
  }
};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.inputfile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.inputfile + label {\n    width: auto !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/upload/dnc-image-upload.vue?64c5c425"],"names":[],"mappings":";AAaA;IACA,aAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,uBAAA;CACA","file":"dnc-image-upload.vue","sourcesContent":["<template>\r\n    <div>\r\n        <img :src=\"defaultImage\" alt=\"athlete profile image\" width=\"110px\" v-if=\"!imageFile\">\r\n        <img :src=\"imageFile\" alt=\"athlete profile image\" width=\"110px\" v-if=\"imageFile\">\r\n\r\n        <br><br>\r\n        <input type=\"file\" name=\"file\" id=\"image-uploader\" class=\"inputfile\" @change=\"onFileChange\"\r\n               ref=\"fileinput\"/>\r\n        <label for=\"image-uploader\" class=\"btn btn-primary\"><i class=\"fa fa-cloud\"></i>\r\n            <span>{{btnText}}</span></label>\r\n    </div>\r\n</template>\r\n<style>\r\n    .inputfile {\r\n        width: 0.1px;\r\n        height: 0.1px;\r\n        opacity: 0;\r\n        overflow: hidden;\r\n        position: absolute;\r\n        z-index: -1;\r\n    }\r\n\r\n    .inputfile + label {\r\n        width: auto !important;\r\n    }\r\n</style>\r\n<script type=\"text/babel\">\r\n\r\n    export default{\r\n        props: {\r\n            value: {},\r\n            acceptedFiles: {\r\n                type: String,\r\n                default: 'image/*'\r\n            },\r\n            btnText: {},\r\n            errorValidationMsg: {},\r\n            width: {\r\n                type: Number,\r\n                default: 110\r\n            },\r\n            image: {},\r\n            defaultImage: {}\r\n        },\r\n        watch: {\r\n            image: function (val) {\r\n                this.imageFile = val;\r\n            }\r\n        },\r\n        data(){\r\n            return {\r\n                imageFile: null\r\n            }\r\n        },\r\n        methods: {\r\n            onFileChange(e){\r\n                var files = e.target.files || e.dataTransfer.files;\r\n                if (!files.length)\r\n                    return;\r\n                this.createImage(files[0]);\r\n            },\r\n            createImage(file) {\r\n                if (!file.type.match(this.acceptedFiles)) {\r\n                    document.getElementById(\"image-uploader\").value = \"\";\r\n                    this.$root.warningToast(this.errorValidationMsg);\r\n                    this.imageFile = this.defaultImage\r\n                    return;\r\n                }\r\n                var reader = new FileReader();\r\n                var vm = this;\r\n                reader.onload = (e) => {\r\n                    vm.imageFile = e.target.result;\r\n                };\r\n                reader.readAsDataURL(file)\r\n            },\r\n            getFile(){\r\n                return this.$refs.fileinput.files[0];\r\n            }\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.v-select {\n    position: relative;\n}\n.v-select .open-indicator {\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    pointer-events: all;\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    opacity: 1;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .open-indicator {\n    opacity: 0;\n}\n.v-select .open-indicator:before {\n    border-color: rgba(60, 60, 60, .5);\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    vertical-align: top;\n    -webkit-transform: rotate(133deg);\n            transform: rotate(133deg);\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n}\n.v-select.open .open-indicator {\n    bottom: 1px;\n}\n.v-select.open .open-indicator:before {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n}\n.v-select .dropdown-toggle {\n    display: block;\n    padding: 0;\n    background: none;\n    border: 1px solid rgba(60, 60, 60, .26);\n    border-radius: 4px;\n    white-space: normal;\n}\n.v-select.searchable .dropdown-toggle {\n    cursor: text;\n}\n.v-select.open .dropdown-toggle {\n    border-bottom: none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.v-select > .dropdown-menu {\n    margin: 0;\n    width: 100%;\n    overflow-y: scroll;\n    border-top: none;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.v-select .selected-tag {\n    color: #333;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 26px;\n    margin: 4px 1px 0px 3px;\n    padding: 0 0.25em;\n    float: left;\n    line-height: 1.7em;\n}\n.v-select .selected-tag .close {\n    float: none;\n    margin-right: 0;\n    font-size: 20px;\n}\n.v-select input[type=search],\n.v-select input[type=search]:focus {\n    display: inline-block;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0 .5em;\n    width: 10em;\n    max-width: 100%;\n    background: none;\n    position: relative;\n    box-shadow: none;\n    float: left;\n    clear: none;\n}\n.v-select input[type=search]:disabled {\n    cursor: pointer;\n}\n.v-select li a {\n    cursor: pointer;\n}\n.v-select .active a {\n    background: rgba(50, 50, 50, .1);\n    color: #333;\n}\n.v-select .highlight a,\n.v-select li:hover > a {\n    background: #f0f0f0;\n    color: #333;\n}\n.v-select .spinner {\n    opacity: 0;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 5px;\n    text-indent: -9999em;\n    overflow: hidden;\n    border-top: .9em solid rgba(100, 100, 100, .1);\n    border-right: .9em solid rgba(100, 100, 100, .1);\n    border-bottom: .9em solid rgba(100, 100, 100, .1);\n    border-left: .9em solid rgba(60, 60, 60, .45);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-animation: vSelectSpinner 1.1s infinite linear;\n            animation: vSelectSpinner 1.1s infinite linear;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .spinner {\n    opacity: 1;\n}\n.v-select .spinner,\n.v-select .spinner:after {\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n}\n@-webkit-keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/forms/select/select.vue?02883ea5"],"names":[],"mappings":";AACA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;IACA,gBAAA;IACA,oBAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;IACA,WAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,mCAAA;IACA,oBAAA;IACA,gCAAA;IACA,YAAA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,oBAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,WAAA;IACA,iBAAA;IACA,wCAAA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,oBAAA;IACA,6BAAA;IACA,8BAAA;CACA;AAEA;IACA,UAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;IACA,2BAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;;IAEA,sBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,iCAAA;IACA,YAAA;CACA;AAEA;;IAEA,oBAAA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,mBAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,qBAAA;IACA,iBAAA;IACA,+CAAA;IACA,iDAAA;IACA,kDAAA;IACA,8CAAA;IACA,iCAAA;YAAA,yBAAA;IACA,uDAAA;YAAA,+CAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,mBAAA;IACA,WAAA;IACA,YAAA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA","file":"select.vue","sourcesContent":["<style>\r\n    .v-select {\r\n        position: relative;\r\n    }\r\n\r\n    .v-select .open-indicator {\r\n        position: absolute;\r\n        bottom: 6px;\r\n        right: 10px;\r\n        display: inline-block;\r\n        cursor: pointer;\r\n        pointer-events: all;\r\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        opacity: 1;\r\n        transition: opacity .1s;\r\n    }\r\n\r\n    .v-select.loading .open-indicator {\r\n        opacity: 0;\r\n    }\r\n\r\n    .v-select .open-indicator:before {\r\n        border-color: rgba(60, 60, 60, .5);\r\n        border-style: solid;\r\n        border-width: 0.25em 0.25em 0 0;\r\n        content: '';\r\n        display: inline-block;\r\n        height: 10px;\r\n        width: 10px;\r\n        vertical-align: top;\r\n        transform: rotate(133deg);\r\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n    }\r\n\r\n    .v-select.open .open-indicator {\r\n        bottom: 1px;\r\n    }\r\n\r\n    .v-select.open .open-indicator:before {\r\n        transform: rotate(315deg);\r\n    }\r\n\r\n    .v-select .dropdown-toggle {\r\n        display: block;\r\n        padding: 0;\r\n        background: none;\r\n        border: 1px solid rgba(60, 60, 60, .26);\r\n        border-radius: 4px;\r\n        white-space: normal;\r\n    }\r\n\r\n    .v-select.searchable .dropdown-toggle {\r\n        cursor: text;\r\n    }\r\n\r\n    .v-select.open .dropdown-toggle {\r\n        border-bottom: none;\r\n        border-bottom-left-radius: 0;\r\n        border-bottom-right-radius: 0;\r\n    }\r\n\r\n    .v-select > .dropdown-menu {\r\n        margin: 0;\r\n        width: 100%;\r\n        overflow-y: scroll;\r\n        border-top: none;\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n    }\r\n\r\n    .v-select .selected-tag {\r\n        color: #333;\r\n        background-color: #f0f0f0;\r\n        border: 1px solid #ccc;\r\n        border-radius: 4px;\r\n        height: 26px;\r\n        margin: 4px 1px 0px 3px;\r\n        padding: 0 0.25em;\r\n        float: left;\r\n        line-height: 1.7em;\r\n    }\r\n\r\n    .v-select .selected-tag .close {\r\n        float: none;\r\n        margin-right: 0;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .v-select input[type=search],\r\n    .v-select input[type=search]:focus {\r\n        display: inline-block;\r\n        border: none;\r\n        outline: none;\r\n        margin: 0;\r\n        padding: 0 .5em;\r\n        width: 10em;\r\n        max-width: 100%;\r\n        background: none;\r\n        position: relative;\r\n        box-shadow: none;\r\n        float: left;\r\n        clear: none;\r\n    }\r\n\r\n    .v-select input[type=search]:disabled {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .v-select li a {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .v-select .active a {\r\n        background: rgba(50, 50, 50, .1);\r\n        color: #333;\r\n    }\r\n\r\n    .v-select .highlight a,\r\n    .v-select li:hover > a {\r\n        background: #f0f0f0;\r\n        color: #333;\r\n    }\r\n\r\n    .v-select .spinner {\r\n        opacity: 0;\r\n        position: absolute;\r\n        top: 5px;\r\n        right: 10px;\r\n        font-size: 5px;\r\n        text-indent: -9999em;\r\n        overflow: hidden;\r\n        border-top: .9em solid rgba(100, 100, 100, .1);\r\n        border-right: .9em solid rgba(100, 100, 100, .1);\r\n        border-bottom: .9em solid rgba(100, 100, 100, .1);\r\n        border-left: .9em solid rgba(60, 60, 60, .45);\r\n        transform: translateZ(0);\r\n        animation: vSelectSpinner 1.1s infinite linear;\r\n        transition: opacity .1s;\r\n    }\r\n\r\n    .v-select.loading .spinner {\r\n        opacity: 1;\r\n    }\r\n\r\n    .v-select .spinner,\r\n    .v-select .spinner:after {\r\n        border-radius: 50%;\r\n        width: 5em;\r\n        height: 5em;\r\n    }\r\n\r\n    @-webkit-keyframes vSelectSpinner {\r\n        0% {\r\n            transform: rotate(0deg);\r\n        }\r\n        100% {\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n\r\n    @keyframes vSelectSpinner {\r\n        0% {\r\n            transform: rotate(0deg);\r\n        }\r\n        100% {\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n</style>\r\n\r\n<template>\r\n    <div class=\"dropdown v-select\" :class=\"dropdownClasses\">\r\n        <div ref=\"toggle\" @mousedown.prevent=\"toggleDropdown\" class=\"dropdown-toggle clearfix\" type=\"button\">\r\n        <span class=\"form-control\" v-if=\"!searchable && isValueEmpty\">\r\n          {{ placeholder }}\r\n        </span>\r\n\r\n            <span class=\"selected-tag\" v-for=\"(option,index) in valueAsArray\" v-bind:key=\"index\">\r\n          {{ getOptionLabel(option) }}\r\n          <button v-if=\"multiple\" @click=\"select(option)\" type=\"button\" class=\"close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </span>\r\n\r\n            <input\r\n                    ref=\"search\"\r\n                    :debounce=\"debounce\"\r\n                    v-model=\"search\"\r\n                    v-show=\"searchable\"\r\n                    @keydown.delete=\"maybeDeleteValue\"\r\n                    @keyup.esc=\"onEscape\"\r\n                    @keydown.up.prevent=\"typeAheadUp\"\r\n                    @keydown.down.prevent=\"typeAheadDown\"\r\n                    @keyup.enter.prevent=\"typeAheadSelect\"\r\n                    @blur=\"open = false\"\r\n                    @focus=\"open = true\"\r\n                    type=\"search\"\r\n                    class=\"form-control\"\r\n                    :placeholder=\"searchPlaceholder\"\r\n                    :style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"\r\n            >\r\n\r\n            <i ref=\"openIndicator\" role=\"presentation\" class=\"open-indicator\"></i>\r\n\r\n            <slot name=\"spinner\">\r\n                <div class=\"spinner\" v-show=\"loading\">Loading...</div>\r\n            </slot>\r\n        </div>\r\n\r\n        <ul ref=\"dropdownMenu\" v-show=\"open\" :transition=\"transition\" class=\"dropdown-menu\"\r\n            :style=\"{ 'max-height': maxHeight }\">\r\n            <li v-for=\"(option,index) in filteredOptions\" v-bind:key=\"index\"\r\n                :class=\"{ active: isOptionSelected(option), highlight: index === typeAheadPointer }\"\r\n                @mouseover=\"typeAheadPointer = index\">\r\n                <a @mousedown.prevent=\"select(option)\">\r\n                    {{ getOptionLabel(option) }}\r\n                </a>\r\n            </li>\r\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"divider\"></li>\r\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"text-center\">\r\n                <slot name=\"no-options\">Sorry, no matching options.</slot>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</template>\r\n\r\n\r\n<script type=\"text/babel\">\r\n    import pointerScroll from 'base/mixins/pointerScroll'\r\n    import typeAheadPointer from 'base/mixins/typeAheadPointer'\r\n    import ajax from 'base/mixins/ajax'\r\n\r\n    export default {\r\n        mixins: [pointerScroll, typeAheadPointer, ajax],\r\n\r\n        props: {\r\n            /**\r\n             * Contains the currently selected value. Very similar to a\r\n             * `value` attribute on an <input>. In most cases, you'll want\r\n             * to set this as a two-way binding, using :value.sync. However,\r\n             * this will not work with Vuex, in which case you'll need to use\r\n             * the onChange callback property.\r\n             * @type {Object||String||null}\r\n             */\r\n            value: {\r\n                default: null\r\n            },\r\n\r\n            /**\r\n             * An array of strings or objects to be used as dropdown choices.\r\n             * If you are using an array of objects, vue-select will look for\r\n             * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\r\n             * custom label key can be set with the `label` prop.\r\n             * @type {Object}\r\n             */\r\n            options: {\r\n                type: Array,\r\n                default() {\r\n                    return []\r\n                },\r\n            },\r\n\r\n            /**\r\n             * Sets the max-height property on the dropdown list.\r\n             * @deprecated\r\n             * @type {String}\r\n             */\r\n            maxHeight: {\r\n                type: String,\r\n                default: '400px'\r\n            },\r\n\r\n            /**\r\n             * Enable/disable filtering the options.\r\n             * @type {Boolean}\r\n             */\r\n            searchable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            /**\r\n             * Equivalent to the `multiple` attribute on a `<select>` input.\r\n             * @type {Object}\r\n             */\r\n            multiple: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * Equivalent to the `placeholder` attribute on an `<input>`.\r\n             * @type {Object}\r\n             */\r\n            placeholder: {\r\n                type: String,\r\n                default: ''\r\n            },\r\n\r\n            /**\r\n             * Sets a Vue transition property on the `.dropdown-menu`. vue-select\r\n             * does not include CSS for transitions, you'll need to add them yourself.\r\n             * @type {String}\r\n             */\r\n            transition: {\r\n                type: String,\r\n                default: 'expand'\r\n            },\r\n\r\n            /**\r\n             * Enables/disables clearing the search text when an option is selected.\r\n             * @type {Boolean}\r\n             */\r\n            clearSearchOnSelect: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            /**\r\n             * Tells vue-select what key to use when generating option\r\n             * labels when each `option` is an object.\r\n             * @type {String}\r\n             */\r\n            label: {\r\n                type: String,\r\n                default: 'label'\r\n            },\r\n\r\n            /**\r\n             * Callback to generate the label text. If {option}\r\n             * is an object, returns option[this.label] by default.\r\n             * @param  {Object || String} option\r\n             * @return {String}\r\n             */\r\n            getOptionLabel: {\r\n                type: Function,\r\n                default(option) {\r\n                    if (typeof option === 'object') {\r\n                        if (this.label && option[this.label]) {\r\n                            return option[this.label]\r\n                        }\r\n                    }\r\n                    return option;\r\n                }\r\n            },\r\n\r\n            /**\r\n             * An optional callback function that is called each time the selected\r\n             * value(s) change. When integrating with Vuex, use this callback to trigger\r\n             * an action, rather than using :value.sync to retreive the selected value.\r\n             * @type {Function}\r\n             * @default {null}\r\n             */\r\n            onChange: Function,\r\n            changeParam: {},\r\n\r\n            /**\r\n             * Enable/disable creating options from searchInput.\r\n             * @type {Boolean}\r\n             */\r\n            taggable: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * When true, newly created tags will be added to\r\n             * the options list.\r\n             * @type {Boolean}\r\n             */\r\n            pushTags: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * User defined function for adding Options\r\n             * @type {Function}\r\n             */\r\n            createOption: {\r\n                type: Function,\r\n                default: function (newOption) {\r\n                    if (typeof this.options[0] === 'object') {\r\n                        return {[this.label]: newOption}\r\n                    }\r\n                    return newOption\r\n                }\r\n            },\r\n\r\n            /**\r\n             * When false, updating the options will not reset the select value\r\n             * @type {Boolean}\r\n             */\r\n            resetOnOptionsChange: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n        },\r\n\r\n        data() {\r\n            return {\r\n                search: '',\r\n                open: false,\r\n                selection: null\r\n            }\r\n        },\r\n\r\n        watch: {\r\n            value(val, old) {\r\n                this.selection = val\r\n            },\r\n            selection(val, old) {\r\n                if (this.multiple) {\r\n                    this.onChange ? this.onChange(val, this.changeParam) : null\r\n                } else {\r\n                    this.onChange && val !== old ? this.onChange(val, this.changeParam) : null\r\n                }\r\n            },\r\n            options() {\r\n                if (!this.taggable && this.resetOnOptionsChange) {\r\n                    this.selection = this.multiple ? [] : null\r\n                }\r\n            },\r\n            multiple(val) {\r\n                this.selection = val ? [] : null\r\n            }\r\n        },\r\n\r\n        methods: {\r\n\r\n            /**\r\n             * Select a given option.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            select(option) {\r\n                if (this.isOptionSelected(option)) {\r\n                    this.deselect(option)\r\n                } else {\r\n                    if (this.taggable && !this.optionExists(option)) {\r\n                        option = this.createOption(option)\r\n\r\n                        if (this.pushTags) {\r\n                            this.options.push(option)\r\n                        }\r\n                    }\r\n\r\n                    if (this.multiple) {\r\n                        if (!this.selection) {\r\n                            this.selection = [option]\r\n                        } else {\r\n                            this.selection.push(option)\r\n                        }\r\n                    } else {\r\n                        this.selection = option\r\n                    }\r\n                }\r\n\r\n                this.onAfterSelect(option)\r\n            },\r\n\r\n            /**\r\n             * De-select a given option.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            deselect(option) {\r\n                if (this.multiple) {\r\n                    let ref = -1\r\n                    this.selection.forEach((val) => {\r\n                        if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {\r\n                            ref = val\r\n                        }\r\n                    })\r\n                    var index = this.selection.indexOf(ref);\r\n                    this.selection.splice(index, 1)\r\n\r\n                } else {\r\n                    this.selection = null\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Called from this.select after each selection.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            onAfterSelect(option) {\r\n                if (!this.multiple) {\r\n                    this.open = !this.open\r\n                    this.$refs.search.blur()\r\n                }\r\n\r\n                if (this.clearSearchOnSelect) {\r\n                    this.search = ''\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Toggle the visibility of the dropdown menu.\r\n             * @param  {Event} e\r\n             * @return {void}\r\n             */\r\n            toggleDropdown(e) {\r\n                if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {\r\n                    if (this.open) {\r\n                        this.$refs.search.blur() // dropdown will close on blur\r\n                    } else {\r\n                        this.open = true\r\n                        this.$refs.search.focus()\r\n                    }\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Check if the given option is currently selected.\r\n             * @param  {Object||String}  option\r\n             * @return {Boolean}         True when selected || False otherwise\r\n             */\r\n            isOptionSelected(option) {\r\n                if (this.multiple && this.selection) {\r\n                    let selected = false\r\n                    this.value.forEach(opt => {\r\n                        if (typeof opt === 'object' && opt[this.label] === option[this.label]) {\r\n                            selected = true\r\n                        } else if (opt === option) {\r\n                            selected = true\r\n                        }\r\n                    })\r\n                    return selected\r\n                }\r\n\r\n                return this.selection === option\r\n            },\r\n\r\n            /**\r\n             * If there is any text in the search input, remove it.\r\n             * Otherwise, blur the search input to close the dropdown.\r\n             * @return {[type]} [description]\r\n             */\r\n            onEscape() {\r\n                if (!this.search.length) {\r\n                    this.$refs.search.blur()\r\n                } else {\r\n                    this.search = ''\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Delete the value on Delete keypress when there is no\r\n             * text in the search input, & there's tags to delete\r\n             * @return {this.value}\r\n             */\r\n            maybeDeleteValue() {\r\n                if (!this.$refs.search.value.length && this.value) {\r\n                    return this.multiple ? this.value.pop() : this.selection = null\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Determine if an option exists\r\n             * within this.options array.\r\n             *\r\n             * @param  {Object || String} option\r\n             * @return {boolean}\r\n             */\r\n            optionExists(option) {\r\n                let exists = false\r\n\r\n                this.options.forEach(opt => {\r\n                    if (typeof opt === 'object' && opt[this.label] === option) {\r\n                        exists = true\r\n                    } else if (opt === option) {\r\n                        exists = true\r\n                    }\r\n                })\r\n\r\n                return exists\r\n            }\r\n        },\r\n\r\n        computed: {\r\n\r\n            /**\r\n             * Classes to be output on .dropdown\r\n             * @return {Object}\r\n             */\r\n            dropdownClasses() {\r\n                return {\r\n                    open: this.open,\r\n                    searchable: this.searchable,\r\n                    loading: this.loading\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Return the placeholder string if it's set\r\n             * & there is no value selected.\r\n             * @return {String} Placeholder text\r\n             */\r\n            searchPlaceholder() {\r\n                if (this.isValueEmpty && this.placeholder) {\r\n                    return this.placeholder;\r\n                }\r\n            },\r\n\r\n            /**\r\n             * The currently displayed options, filtered\r\n             * by the search elements value. If tagging\r\n             * true, the search text will be prepended\r\n             * if it doesn't already exist.\r\n             *\r\n             * @return {array}\r\n             */\r\n            filteredOptions() {\r\n                let self = this;\r\n                let options = this.options.filter(function (option) {\r\n                    return option[self.label].indexOf(self.search) !== -1\r\n                })\r\n                if (this.taggable && this.search.length && !this.optionExists(this.search)) {\r\n                    options.unshift(this.search)\r\n                }\r\n                return options\r\n            },\r\n\r\n            /**\r\n             * Check if there aren't any options selected.\r\n             * @return {Boolean}\r\n             */\r\n            isValueEmpty() {\r\n                if (this.selection) {\r\n                    if (typeof this.selection === 'object') {\r\n                        return !Object.keys(this.selection).length\r\n                    }\r\n                    return !this.selection.length\r\n                }\r\n\r\n                return true;\r\n            },\r\n\r\n            /**\r\n             * Return the current value in array format.\r\n             * @return {Array}\r\n             */\r\n            valueAsArray() {\r\n                if (this.multiple) {\r\n                    return this.selection\r\n                } else if (this.selection) {\r\n                    return [this.selection]\r\n                }\r\n\r\n                return []\r\n            }\r\n        }\r\n\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(220)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\components\\upload\\dnc-image-upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dnc-image-upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dcb2c34", Component.options)
  } else {
    hotAPI.reload("data-v-6dcb2c34", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.imageFile) ? _c('img', {
    attrs: {
      "src": _vm.defaultImage,
      "alt": "athlete profile image",
      "width": "110px"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.imageFile) ? _c('img', {
    attrs: {
      "src": _vm.imageFile,
      "alt": "athlete profile image",
      "width": "110px"
    }
  }) : _vm._e(), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('input', {
    ref: "fileinput",
    staticClass: "inputfile",
    attrs: {
      "type": "file",
      "name": "file",
      "id": "image-uploader"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "btn btn-primary",
    attrs: {
      "for": "image-uploader"
    }
  }, [_c('i', {
    staticClass: "fa fa-cloud"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.btnText))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6dcb2c34", module.exports)
  }
}

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dropdown v-select",
    class: _vm.dropdownClasses
  }, [_c('div', {
    ref: "toggle",
    staticClass: "dropdown-toggle clearfix",
    attrs: {
      "type": "button"
    },
    on: {
      "mousedown": function($event) {
        $event.preventDefault();
        _vm.toggleDropdown($event)
      }
    }
  }, [(!_vm.searchable && _vm.isValueEmpty) ? _c('span', {
    staticClass: "form-control"
  }, [_vm._v("\n      " + _vm._s(_vm.placeholder) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.valueAsArray), function(option, index) {
    return _c('span', {
      key: index,
      staticClass: "selected-tag"
    }, [_vm._v("\n      " + _vm._s(_vm.getOptionLabel(option)) + "\n      "), (_vm.multiple) ? _c('button', {
      staticClass: "close",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          _vm.select(option)
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("×")])]) : _vm._e()])
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }, {
      name: "show",
      rawName: "v-show",
      value: (_vm.searchable),
      expression: "searchable"
    }],
    ref: "search",
    staticClass: "form-control",
    style: ({
      width: _vm.isValueEmpty ? '100%' : 'auto'
    }),
    attrs: {
      "debounce": _vm.debounce,
      "type": "search",
      "placeholder": _vm.searchPlaceholder
    },
    domProps: {
      "value": _vm._s(_vm.search)
    },
    on: {
      "keydown": [function($event) {
        if (_vm._k($event.keyCode, "delete", [8, 46])) { return; }
        _vm.maybeDeleteValue($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "up", 38)) { return; }
        $event.preventDefault();
        _vm.typeAheadUp($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "down", 40)) { return; }
        $event.preventDefault();
        _vm.typeAheadDown($event)
      }],
      "keyup": [function($event) {
        if (_vm._k($event.keyCode, "esc", 27)) { return; }
        _vm.onEscape($event)
      }, function($event) {
        if (_vm._k($event.keyCode, "enter", 13)) { return; }
        $event.preventDefault();
        _vm.typeAheadSelect($event)
      }],
      "blur": function($event) {
        _vm.open = false
      },
      "focus": function($event) {
        _vm.open = true
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i', {
    ref: "openIndicator",
    staticClass: "open-indicator",
    attrs: {
      "role": "presentation"
    }
  }), _vm._v(" "), _vm._t("spinner", [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "spinner"
  }, [_vm._v("Loading...")])])], 2), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.open),
      expression: "open"
    }],
    ref: "dropdownMenu",
    staticClass: "dropdown-menu",
    style: ({
      'max-height': _vm.maxHeight
    }),
    attrs: {
      "transition": _vm.transition
    }
  }, [_vm._l((_vm.filteredOptions), function(option, index) {
    return _c('li', {
      key: index,
      class: {
        active: _vm.isOptionSelected(option), highlight: index === _vm.typeAheadPointer
      },
      on: {
        "mouseover": function($event) {
          _vm.typeAheadPointer = index
        }
      }
    }, [_c('a', {
      on: {
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.select(option)
        }
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getOptionLabel(option)) + "\n            ")])])
  }), _vm._v(" "), (!_vm.filteredOptions.length) ? _c('li', {
    staticClass: "divider",
    attrs: {
      "transition": "fade"
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.filteredOptions.length) ? _c('li', {
    staticClass: "text-center",
    attrs: {
      "transition": "fade"
    }
  }, [_vm._t("no-options", [_vm._v("Sorry, no matching options.")])], 2) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9fd7537e", module.exports)
  }
}

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("63400239", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6dcb2c34!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dnc-image-upload.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6dcb2c34!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dnc-image-upload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(213);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("d9304e54", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9fd7537e!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9fd7537e!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "en": {
        "athletes": {
            "m": "Male",
            "w": "Female",
            "n": "Mixto",
            "created_successfully": "The Athlete was created successfully",
            "updated_successfully": "The Athlete was updated successfully",
            "deleted_succesfully": "The Athlete was deleted successfully",
            "profile_picture_deleted": "The profile picture was deleted successfully",
            "not_found": "The Athlete doesn't exist",
            "first_name": "First Name",
            "last_name": "Last Name",
            "code": "Code",
            "country": "Country",
            "countries": "Countries",
            "sport": "Sport",
            "specialty": "Specialty",
            "category": "Category",
            "actions": "Actions",
            "select_option": "Select an option",
            "upload_image": "Upload image",
            "ranking": "Ranking",
            "height": "Height",
            "weight": "Weight",
            "federation_code": "Federation Code",
            "national_code": "National Code",
            "update": "Update",
            "new": "New Athlete",
            "delete_message": "Are you sure? this action cannot be undone",
            "delete_athlete": "Delete Athlete",
            "athlete_info": "Athlete Information",
            "gold": "Gold",
            "silver": "Silver",
            "bronze": "Bronze",
            "club": "Club",
            "athlete": "Athlete",
            "gender": "Gender",
            "events": "Events",
            "championship": "Championship",
            "athletes": "Athletes",
            "filter_by_events": "Filter By Event",
            "filter_by": "Filter By",
            "classification": "Classification",
            "no_results": "There are no published results",
            "loading": "Loading",
            "select": "Select",
            "search_athlete": "Search Athlete"
        }
    },
    "es": {
        "athletes": {
            "m": "Masculino",
            "w": "Femenino",
            "n": "Mixto",
            "created_successfully": "El atleta fue creado satisfactoriamente",
            "updated_successfully": "El atleta fue actualizado satisfactoriamente",
            "deleted_succesfully": "El atleta fue eliminado satisfactoriamente",
            "profile_picture_deleted": "La imagen de perfil fue eliminado satisfactoriamente",
            "not_found": "El atleta no existe",
            "first_name": "Nombre",
            "last_name": "Apellido",
            "code": "Código",
            "country": "País",
            "countries": "Paises",
            "sport": "Deporte",
            "specialty": "Especialidad",
            "category": "Categoría",
            "actions": "Acciones",
            "select_option": "Seleccione una opción",
            "select_options": "Seleccione una opción o más opciones",
            "upload_image": "Subir Imagen",
            "ranking": "Ranking",
            "height": "Altura",
            "weight": "Peso",
            "federation_code": "Código de Federación",
            "national_code": "Código Nacional",
            "update": "Actualizar",
            "new": "Nuevo Atleta",
            "delete_message": "¿Estas Seguro? esta acción no se puede deshacer",
            "delete_athlete": "Eliminar Atleta",
            "athlete_info": "Información del Atleta",
            "gold": "Oro",
            "silver": "Plata",
            "bronze": "Bronce",
            "club": "Club",
            "athlete": "Atleta",
            "gender": "Genero",
            "events": "Eventos",
            "championship": "Campeonatos",
            "athletes": "Atletas",
            "filter_by_events": "Filtrar Por Evento",
            "filter_by": "Filtrar Por",
            "classification": "Clasificación",
            "no_results": "Aún no hay resultados publicados",
            "loading": "Cargando",
            "select": "Seleccionar",
            "search_athlete": "Buscar Atleta"
        }
    }
};

/***/ }),

/***/ 243:
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
        return _vue2.default.http.get('/api/athletes/' + id + '?include=sport,specialty,category,country').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    create: function create(athlete, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/athletes', athlete).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    update: function update(id, athlete, successCalback, errorCallback) {
        return _vue2.default.http.put('/api/athletes/' + id, athlete, { emulateHTTP: true }).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    },
    remove: function remove(id, successCalback, errorCallback) {
        return _vue2.default.http.delete('/api/athletes/' + id).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    }
};

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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
//
//
//
//

var _athletes = __webpack_require__(222);

var _athletes2 = _interopRequireDefault(_athletes);

var _dncImageUpload = __webpack_require__(216);

var _dncImageUpload2 = _interopRequireDefault(_dncImageUpload);

var _select = __webpack_require__(200);

var _select2 = _interopRequireDefault(_select);

var _pageHeader = __webpack_require__(194);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _formDataParser = __webpack_require__(199);

var _formDataParser2 = _interopRequireDefault(_formDataParser);

var _vuex = __webpack_require__(4);

var _athleteService = __webpack_require__(243);

var _athleteService2 = _interopRequireDefault(_athleteService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        'vSelect': _select2.default,
        'adminHeader': _pageHeader2.default,
        'dncImageUploader': _dncImageUpload2.default
    },
    mixins: [_formDataParser2.default],
    data: function data() {
        return {
            selectedRole: null,
            athlete: {},
            updating: false
        };
    },

    computed: {
        breadcrumbs: function breadcrumbs() {
            return [{
                href: '/dashboard',
                title: 'admin.home'
            }, {
                href: '/athletes',
                title: 'admin.athletes'
            }, {
                href: '/athletes/' + this.athlete.id + '/update',
                title: 'admin.update'
            }];
        },
        sports: function sports() {
            return this.$store.state.common.sports;
        },
        specialties: function specialties() {
            return this.$store.state.common.specialties;
        },
        categories: function categories() {
            return this.$store.state.common.categories;
        },
        genders: function genders() {
            return this.$store.state.common.genders;
        },
        countries: function countries() {
            return this.$store.state.common.countries;
        },
        championships: function championships() {
            return this.$store.state.common.championships;
        },
        championshipEvents: function championshipEvents() {
            return this.$store.state.common.events;
        }
    },
    locales: _athletes2.default,
    created: function created() {
        var _this = this;

        if (!this.sports.length) this.getSports();
        if (!this.categories.length) this.getCategories();
        if (!this.countries.length) this.getCountries();
        if (!this.championships.length) this.getChampionships();
        if (!this.genders.length) this.getGenders();
        _athleteService2.default.show(this.$route.params.id, function (response) {
            _this.athlete = response.data;
            _this.getSpecialties(_this.athlete.sport.id);
            if (_this.athlete.championship) _this.getChampionshipEvents(_this.athlete.championship.id);
        }, function (error) {
            console.log(error);
        });
    },

    methods: _extends({}, (0, _vuex.mapActions)({
        getSports: 'common:getSports',
        getCategories: 'common:getCategories',
        getCountries: 'common:getCountries',
        getChampionships: 'common:getChampionships',
        getSpecialties: 'common:getSpecialties',
        setSpecialties: 'common:setSpecialties',
        getChampionshipEvents: 'common:getChampionshipEvents',
        getGenders: 'common:getGenders'
    }), {
        close: function close(evt) {
            evt.preventDefault();
            eventHub.$on('modal-close');
        },
        sportChanged: function sportChanged(sport) {
            this.athlete.sport = sport;
            var self = this;
            if (this.athlete.sport) {
                this.getSpecialties(this.athlete.sport.id, function (data) {
                    if (!data.filter(function (specialty) {
                        return specialty.id == self.athlete.specialty.id;
                    }).length) {
                        self.athlete.specialty = null;
                    }
                });
            } else {
                this.setSpecialties([]);
                this.athlete.specialty = null;
            }
        },
        specialtyChanged: function specialtyChanged(specialty) {
            this.athlete.specialty = specialty;
        },
        categoryChanged: function categoryChanged(category) {
            this.athlete.category = category;
        },
        countryChanged: function countryChanged(country) {
            this.athlete.country = country;
        },
        genderChanged: function genderChanged(gender) {
            this.athlete.gender = gender;
        },
        eventChanged: function eventChanged(events) {
            this.athlete.events = events;
        },
        onBack: function onBack(evt) {
            evt.preventDefault();
            this.$router.push({
                name: 'athletes.list'
            });
        },
        championshipChanged: function championshipChanged(championship) {
            this.athlete.championship = championship;

            var self = this;
            if (this.athlete.championship) {
                this.getChampionshipEvents(this.athlete.championship.id, function (data) {
                    if (!data.filter(function (event) {
                        return event.id == self.athlete.event.id;
                    }).length) {
                        self.athlete.event = null;
                    }
                });
            } else {
                this.$store.commit('common:SET_SPECIALTIES', []);
                this.event.specialty = null;
            }
        },
        onSubmit: function onSubmit(evt) {
            var _this2 = this;

            evt.preventDefault();
            var self = this;
            evt.preventDefault();
            this.$validator.validateAll().then(function () {
                var file = self.$refs.uploader.getFile();
                var formData = new FormData();

                if (file) formData.append('profile_picture', self.$refs.uploader.getFile());
                formData.append('first_name', self.athlete.first_name);
                formData.append('last_name', self.athlete.last_name);
                if (self.athlete.federation_code) formData.append('federation_code', self.athlete.federation_code);
                if (self.athlete.national_code) formData.append('national_code', self.athlete.national_code);
                formData.append('sport_id', self.athlete.sport.id);
                formData.append('specialty_id', self.athlete.specialty.id);
                formData.append('category_id', self.athlete.category.id);
                formData.append('country_id', self.athlete.country.id);
                formData.append('gender', self.athlete.gender.gender);
                if (self.athlete.height) formData.append('height', self.athlete.height);
                if (self.athlete.weight) formData.append('weight', self.athlete.weight);
                if (self.athlete.ranking) formData.append('ranking', self.athlete.ranking);

                _athleteService2.default.update(self.athlete.id, formData, function (response) {
                    self.$root.successToast(response.message);
                    self.$router.push({
                        name: 'athletes.list'
                    });
                }, function (response) {
                    if (response.validation) {
                        for (var error in response.errors) {
                            if (response.errors.hasOwnProperty(error)) {
                                response.errors[error].forEach(function (validationError) {
                                    self.$root.errorToast(validationError);
                                });
                            }
                        }
                    } else {
                        self.$root.errorToast(response.errors);
                    }
                });
            }).catch(function (bag) {
                _this2.$root.errorToast(_this2.$t('admin.validation_error'));
            });
        }
    })
};

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('admin-header', {
    attrs: {
      "title": _vm.$t('admin.athletes'),
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [_c('form', {
    staticClass: "form",
    attrs: {
      "id": "athlete-form"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-header with-border"
  }, [_c('h3', {
    staticClass: "box-title"
  }, [_vm._v(_vm._s(_vm.$t('admin.athletes')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('first_name')
    }
  }, [_c('label', {
    attrs: {
      "for": "first_name",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.first_name')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.first_name),
      expression: "athlete.first_name"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "first_name",
      "type": "text",
      "name": "first_name",
      "placeholder": _vm.$t('athletes.first_name'),
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('athletes.first_name')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.first_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.first_name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('first_name')),
      expression: "errors.has('first_name')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('first_name')) + "\n                                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('last_name')
    }
  }, [_c('label', {
    attrs: {
      "for": "last_name",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.last_name')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.last_name),
      expression: "athlete.last_name"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "last_name",
      "type": "text",
      "name": "last_name",
      "placeholder": _vm.$t('athletes.last_name'),
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('athletes.last_name')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.last_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.last_name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('last_name')),
      expression: "errors.has('last_name')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('last_name')) + "\n                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6 text-center"
  }, [_c('dnc-image-uploader', {
    ref: "uploader",
    attrs: {
      "btn-text": _vm.$t('athletes.upload_image'),
      "error-validation-msg": _vm.$t('validation.image', {
        attribute: _vm.$t('athletes.upload_image')
      }),
      "image": _vm.athlete.image,
      "default-image": "/images/missing/athlete/missing.png"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "federation_code",
      "data-vv-error": ""
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('athletes.federation_code')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.federation_code),
      expression: "athlete.federation_code"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "federation_code",
      "name": "federation_code",
      "type": "text",
      "placeholder": _vm.$t('athletes.federation_code')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.federation_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.federation_code = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "national_code",
      "data-vv-error": ""
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('athletes.national_code')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(3), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.national_code),
      expression: "athlete.national_code"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "national_code",
      "name": "national_code",
      "type": "text",
      "placeholder": _vm.$t('athletes.national_code')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.national_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.national_code = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('sport')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.sport')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.athlete.sport,
      "label": "name",
      "on-change": _vm.sportChanged,
      "placeholder": _vm.$t('athletes.select_option'),
      "options": _vm.sports
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.sport),
      expression: "athlete.sport"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "sport_input",
      "type": "hidden",
      "name": "sport",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('athletes.sport')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.sport)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.sport = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('sport')),
      expression: "errors.has('sport')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('sport')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('specialty')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.specialty')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.athlete.specialty,
      "label": "name",
      "placeholder": _vm.$t('athletes.select_option'),
      "on-change": _vm.specialtyChanged,
      "options": _vm.specialties
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.specialty),
      expression: "athlete.specialty"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "specialty_input",
      "type": "hidden",
      "name": "specialty",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('athletes.specialty')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.specialty)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.specialty = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('specialty')),
      expression: "errors.has('specialty')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('specialty')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('category')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.category')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.athlete.category,
      "label": "name",
      "placeholder": _vm.$t('athletes.select_option'),
      "on-change": _vm.categoryChanged,
      "options": _vm.categories
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.category),
      expression: "athlete.category"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "category_input",
      "type": "hidden",
      "name": "category",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('athletes.category')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.category)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.category = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('category')),
      expression: "errors.has('category')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('category')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('country')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.country')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.athlete.country,
      "label": "name",
      "on-change": _vm.countryChanged,
      "placeholder": _vm.$t('athletes.select_option'),
      "options": _vm.countries
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.country),
      expression: "athlete.country"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "country_input",
      "type": "hidden",
      "name": "country",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('athletes.country')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.country)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.country = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('country')),
      expression: "errors.has('country')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('country')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('gender')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.gender')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.athlete.gender,
      "label": "name",
      "placeholder": _vm.$t('athletes.select_option'),
      "on-change": _vm.genderChanged,
      "options": _vm.genders
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.gender),
      expression: "athlete.gender"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "gender_input",
      "type": "hidden",
      "name": "gender",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('athletes.gender')
    },
    domProps: {
      "value": _vm._s(_vm.athlete.gender)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.gender = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('gender')),
      expression: "errors.has('gender')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('gender')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "height",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.height')))]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(4), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.height),
      expression: "athlete.height"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "height",
      "name": "height",
      "type": "text",
      "placeholder": _vm.$t('athletes.height'),
      "field": "height",
      "initial": "off"
    },
    domProps: {
      "value": _vm._s(_vm.athlete.height)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.height = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "weight",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.weight')))]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(5), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.weight),
      expression: "athlete.weight"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "weight",
      "name": "weight",
      "type": "text",
      "placeholder": _vm.$t('athletes.weight'),
      "field": "weight",
      "initial": "off"
    },
    domProps: {
      "value": _vm._s(_vm.athlete.weight)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.weight = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "ranking",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.ranking')))]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(6), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.athlete.ranking),
      expression: "athlete.ranking"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "ranking",
      "name": "ranking",
      "type": "text",
      "placeholder": _vm.$t('athletes.ranking'),
      "field": "ranking",
      "initial": "off"
    },
    domProps: {
      "value": _vm._s(_vm.athlete.ranking)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.athlete.ranking = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 text-center"
  }, [_c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": _vm.onBack
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('forms.back')) + "\n                                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    class: {
      'disabled': _vm.updating
    },
    attrs: {
      "type": "submit",
      "href": "#!"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.$t('forms.save')) + "\n                                    ")])])])])])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-credit-card"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-credit-card"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-arrows-v"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-tachometer"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-signal"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-232ff88d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F0aGxldGVzL2VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NmI4ZSoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/M2QwNyoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2NhZTIqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NWQ5OCoqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNjI3KioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyLmpzPzBjMzcqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2Y1YjUqKioqKioiLCJ3ZWJwYWNrOi8vL3NlbGVjdC52dWU/ODRhOCoqKioqKiIsIndlYnBhY2s6Ly8vZG5jLWltYWdlLXVwbG9hZC52dWU/NTllOSoqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4LmpzP2MwZDQqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvcG9pbnRlclNjcm9sbC5qcz9lYWI2KioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXIuanM/YmVkNioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlP2M3NjUqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT83ZmMwKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlP2Q4Y2QqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT82MGQ2KioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/ZDQwNioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT8zNDVjKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/Y2YyNioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL2F0aGxldGVzL2F0aGxldGVzLmpzP2RjZjYqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvYXRobGV0ZXMvYXRobGV0ZVNlcnZpY2UuanM/MjdhOCIsIndlYnBhY2s6Ly8vZWRpdC52dWU/YmZjNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F0aGxldGVzL2VkaXQudnVlP2UzNWUiXSwibmFtZXMiOlsibWV0aG9kcyIsInBhcnNlT2JqRm9ybURhdGEiLCJvYmoiLCJmb3JtZGF0YSIsIm5hbWVzcGFjZSIsImZkIiwiZm9ybUtleSIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJGaWxlIiwiYXBwZW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb3BzIiwibG9hZGluZyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsIm9uU2VhcmNoIiwiZGVib3VuY2UiLCJOdW1iZXIiLCJ3YXRjaCIsInNlYXJjaCIsImxlbmd0aCIsInRvZ2dsZUxvYWRpbmciLCJ0b2dnbGUiLCJ0eXBlQWhlYWRQb2ludGVyIiwibWF5YmVBZGp1c3RTY3JvbGwiLCJwaXhlbHNUb1BvaW50ZXJUb3AiLCJwaXhlbHNUb1BvaW50ZXJCb3R0b20iLCJ2aWV3cG9ydCIsInRvcCIsInNjcm9sbFRvIiwiYm90dG9tIiwicG9pbnRlckhlaWdodCIsImkiLCIkcmVmcyIsImRyb3Bkb3duTWVudSIsImNoaWxkcmVuIiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudCIsInNjcm9sbFRvcCIsInBvc2l0aW9uIiwiZGF0YSIsImZpbHRlcmVkT3B0aW9ucyIsInR5cGVBaGVhZFVwIiwidHlwZUFoZWFkRG93biIsInR5cGVBaGVhZFNlbGVjdCIsInNlbGVjdCIsInRhZ2dhYmxlIiwiY2xlYXJTZWFyY2hPblNlbGVjdCIsInNob3ciLCJpZCIsInN1Y2Nlc3NDYWxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImNyZWF0ZSIsImF0aGxldGUiLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJyZW1vdmUiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtB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QUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsWUFBWSxLQUFLLEtBQUssV0FBVyxZQUFZLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLFlBQVksS0FBSyx1RUFBdUUsK0JBQStCLFNBQVMsdUNBQXVDLCtCQUErQix3QkFBd0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsZ0NBQWdDLDRFQUE0RSxrRkFBa0YsdUJBQXVCLG9DQUFvQyxTQUFTLCtDQUErQyx1QkFB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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy80NC5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZWRpdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yMzJmZjg4ZCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9lZGl0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxkYXNoYm9hcmRcXFxcbW9kdWxlc1xcXFxhdGhsZXRlc1xcXFxlZGl0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGVkaXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIzMmZmODhkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjMyZmY4OGRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9hdGhsZXRlcy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY5XG4vLyBtb2R1bGUgY2h1bmtzID0gNDQiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NmY4NWU3ZCFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxoZWFkZXJcXFxccGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NmY4NWU3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJicmVhZGNydW1iLmhyZWZcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiB0YWc9XCJsaVwiIHYtZm9yPVwiYnJlYWRjcnVtYiBpbiBicmVhZGNydW1ic1wiPlxyXG4gICAgICAgICAgICAgICAge3skdChicmVhZGNydW1iLnRpdGxlKX19XHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9vbD5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XHJcbiAgICAuYWRtaW4taGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhZ2VIZWFkZXIudnVlPzRiODkxOTIwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRtaW4taGVhZGVyIHtcXG4gIGhlaWdodDogOTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hZG1pbi1oZWFkZXIgLnJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjZmODVlN2RcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA0NjE0MThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCIsImV4cG9ydCBkZWZhdWx0e1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHBhcnNlT2JqRm9ybURhdGEob2JqLCBmb3JtZGF0YSwgbmFtZXNwYWNlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmQgPSBmb3JtZGF0YTtcclxuICAgICAgICAgICAgdmFyIGZvcm1LZXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgb2JqW3Byb3BlcnR5XSApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZXNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1LZXkgPSBuYW1lc3BhY2UgKyAnWycgKyBwcm9wZXJ0eSArICddJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtS2V5ID0gcHJvcGVydHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYW4gb2JqZWN0LCBidXQgbm90IGEgRmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgcmVjdXJzaXZpdHkuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcGVydHldID09PSAnb2JqZWN0JyAmJiAhKG9ialtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBGaWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlT2JqRm9ybURhdGEob2JqW3Byb3BlcnR5XSwgZmQsIGZvcm1LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChmb3JtS2V5LCBvYmpbcHJvcGVydHldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZm9ybURhdGFQYXJzZXIuanMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtOWZkNzUzN2UhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcZm9ybXNcXFxcc2VsZWN0XFxcXHNlbGVjdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZWxlY3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTlmZDc1MzdlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOWZkNzUzN2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsIjxzdHlsZT5cclxuICAgIC52LXNlbGVjdCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGJvdHRvbTogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC4yNik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgPiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXSxcclxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGNsZWFyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgbGkgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuYWN0aXZlIGEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXHJcbiAgICAudi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXHJcbiAgICAudi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogNWVtO1xyXG4gICAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biB2LXNlbGVjdFwiIDpjbGFzcz1cImRyb3Bkb3duQ2xhc3Nlc1wiPlxyXG4gICAgICAgIDxkaXYgcmVmPVwidG9nZ2xlXCIgQG1vdXNlZG93bi5wcmV2ZW50PVwidG9nZ2xlRHJvcGRvd25cIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBjbGVhcmZpeFwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtaWY9XCIhc2VhcmNoYWJsZSAmJiBpc1ZhbHVlRW1wdHlcIj5cclxuICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC10YWdcIiB2LWZvcj1cIihvcHRpb24saW5kZXgpIGluIHZhbHVlQXNBcnJheVwiIHYtYmluZDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxyXG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVwibXVsdGlwbGVcIiBAY2xpY2s9XCJzZWxlY3Qob3B0aW9uKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkZWJvdW5jZT1cImRlYm91bmNlXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJzZWFyY2hhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kZWxldGU9XCJtYXliZURlbGV0ZVZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZXNjPVwib25Fc2NhcGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLnVwLnByZXZlbnQ9XCJ0eXBlQWhlYWRVcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZG93bi5wcmV2ZW50PVwidHlwZUFoZWFkRG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyLnByZXZlbnQ9XCJ0eXBlQWhlYWRTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBibHVyPVwib3BlbiA9IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJvcGVuID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInNlYXJjaFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBpc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bycgfVwiXHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxpIHJlZj1cIm9wZW5JbmRpY2F0b3JcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJvcGVuLWluZGljYXRvclwiPjwvaT5cclxuXHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJzcGlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiIHYtc2hvdz1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHVsIHJlZj1cImRyb3Bkb3duTWVudVwiIHYtc2hvdz1cIm9wZW5cIiA6dHJhbnNpdGlvbj1cInRyYW5zaXRpb25cIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7ICdtYXgtaGVpZ2h0JzogbWF4SGVpZ2h0IH1cIj5cclxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiKG9wdGlvbixpbmRleCkgaW4gZmlsdGVyZWRPcHRpb25zXCIgdi1iaW5kOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IHR5cGVBaGVhZFBvaW50ZXIgfVwiXHJcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwidHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBAbW91c2Vkb3duLnByZXZlbnQ9XCJzZWxlY3Qob3B0aW9uKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cIm5vLW9wdGlvbnNcIj5Tb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy48L3Nsb3Q+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cclxuICAgIGltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJ2Jhc2UvbWl4aW5zL3BvaW50ZXJTY3JvbGwnXHJcbiAgICBpbXBvcnQgdHlwZUFoZWFkUG9pbnRlciBmcm9tICdiYXNlL21peGlucy90eXBlQWhlYWRQb2ludGVyJ1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnYmFzZS9taXhpbnMvYWpheCdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWl4aW5zOiBbcG9pbnRlclNjcm9sbCwgdHlwZUFoZWFkUG9pbnRlciwgYWpheF0sXHJcblxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHZhbHVlLiBWZXJ5IHNpbWlsYXIgdG8gYVxyXG4gICAgICAgICAgICAgKiBgdmFsdWVgIGF0dHJpYnV0ZSBvbiBhbiA8aW5wdXQ+LiBJbiBtb3N0IGNhc2VzLCB5b3UnbGwgd2FudFxyXG4gICAgICAgICAgICAgKiB0byBzZXQgdGhpcyBhcyBhIHR3by13YXkgYmluZGluZywgdXNpbmcgOnZhbHVlLnN5bmMuIEhvd2V2ZXIsXHJcbiAgICAgICAgICAgICAqIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFZ1ZXgsIGluIHdoaWNoIGNhc2UgeW91J2xsIG5lZWQgdG8gdXNlXHJcbiAgICAgICAgICAgICAqIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBwcm9wZXJ0eS5cclxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdHx8U3RyaW5nfHxudWxsfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgdG8gYmUgdXNlZCBhcyBkcm9wZG93biBjaG9pY2VzLlxyXG4gICAgICAgICAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMsIHZ1ZS1zZWxlY3Qgd2lsbCBsb29rIGZvclxyXG4gICAgICAgICAgICAgKiBhIGBsYWJlbGAga2V5IChleC4gW3tsYWJlbDogJ1RoaXMgaXMgRm9vJywgdmFsdWU6ICdmb28nfV0pLiBBXHJcbiAgICAgICAgICAgICAqIGN1c3RvbSBsYWJlbCBrZXkgY2FuIGJlIHNldCB3aXRoIHRoZSBgbGFiZWxgIHByb3AuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNldHMgdGhlIG1heC1oZWlnaHQgcHJvcGVydHkgb24gdGhlIGRyb3Bkb3duIGxpc3QuXHJcbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBmaWx0ZXJpbmcgdGhlIG9wdGlvbnMuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VhcmNoYWJsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiBhIGA8c2VsZWN0PmAgaW5wdXQuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdWx0aXBsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgb24gYW4gYDxpbnB1dD5gLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU2V0cyBhIFZ1ZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHRoZSBgLmRyb3Bkb3duLW1lbnVgLiB2dWUtc2VsZWN0XHJcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGluY2x1ZGUgQ1NTIGZvciB0cmFuc2l0aW9ucywgeW91J2xsIG5lZWQgdG8gYWRkIHRoZW0geW91cnNlbGYuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZXhwYW5kJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgY2xlYXJpbmcgdGhlIHNlYXJjaCB0ZXh0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGVsbHMgdnVlLXNlbGVjdCB3aGF0IGtleSB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIG9wdGlvblxyXG4gICAgICAgICAgICAgKiBsYWJlbHMgd2hlbiBlYWNoIGBvcHRpb25gIGlzIGFuIG9iamVjdC5cclxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGFiZWwnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2FsbGJhY2sgdG8gZ2VuZXJhdGUgdGhlIGxhYmVsIHRleHQuIElmIHtvcHRpb259XHJcbiAgICAgICAgICAgICAqIGlzIGFuIG9iamVjdCwgcmV0dXJucyBvcHRpb25bdGhpcy5sYWJlbF0gYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsICYmIG9wdGlvblt0aGlzLmxhYmVsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvblt0aGlzLmxhYmVsXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIHRoZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgKiB2YWx1ZShzKSBjaGFuZ2UuIFdoZW4gaW50ZWdyYXRpbmcgd2l0aCBWdWV4LCB1c2UgdGhpcyBjYWxsYmFjayB0byB0cmlnZ2VyXHJcbiAgICAgICAgICAgICAqIGFuIGFjdGlvbiwgcmF0aGVyIHRoYW4gdXNpbmcgOnZhbHVlLnN5bmMgdG8gcmV0cmVpdmUgdGhlIHNlbGVjdGVkIHZhbHVlLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHtudWxsfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25DaGFuZ2U6IEZ1bmN0aW9uLFxyXG4gICAgICAgICAgICBjaGFuZ2VQYXJhbToge30sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgY3JlYXRpbmcgb3B0aW9ucyBmcm9tIHNlYXJjaElucHV0LlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRhZ2dhYmxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBXaGVuIHRydWUsIG5ld2x5IGNyZWF0ZWQgdGFncyB3aWxsIGJlIGFkZGVkIHRvXHJcbiAgICAgICAgICAgICAqIHRoZSBvcHRpb25zIGxpc3QuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVzaFRhZ3M6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFVzZXIgZGVmaW5lZCBmdW5jdGlvbiBmb3IgYWRkaW5nIE9wdGlvbnNcclxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtbdGhpcy5sYWJlbF06IG5ld09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld09wdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFdoZW4gZmFsc2UsIHVwZGF0aW5nIHRoZSBvcHRpb25zIHdpbGwgbm90IHJlc2V0IHRoZSBzZWxlY3QgdmFsdWVcclxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgdmFsdWUodmFsLCBvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbih2YWwsIG9sZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHZhbCAhPT0gb2xkID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhZ2dhYmxlICYmIHRoaXMucmVzZXRPbk9wdGlvbnNDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbXVsdGlwbGUodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbCA/IFtdIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cclxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdChvcHRpb24pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuY3JlYXRlT3B0aW9uKG9wdGlvbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hUYWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW29wdGlvbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2VsZWN0KG9wdGlvbilcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZS1zZWxlY3QgYSBnaXZlbiBvcHRpb24uXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRlc2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gLTFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gb3B0aW9uIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB2YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENhbGxlZCBmcm9tIHRoaXMuc2VsZWN0IGFmdGVyIGVhY2ggc2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLm9wZW5JbmRpY2F0b3IgfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMuc2VhcmNoIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnRvZ2dsZSB8fCBlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKSAvLyBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGJsdXJcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmZvY3VzKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIG9wdGlvbiBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSAgb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgVHJ1ZSB3aGVuIHNlbGVjdGVkIHx8IEZhbHNlIG90aGVyd2lzZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2gob3B0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA9PT0gb3B0aW9uXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSWYgdGhlcmUgaXMgYW55IHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgcmVtb3ZlIGl0LlxyXG4gICAgICAgICAgICAgKiBPdGhlcndpc2UsIGJsdXIgdGhlIHNlYXJjaCBpbnB1dCB0byBjbG9zZSB0aGUgZHJvcGRvd24uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25Fc2NhcGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVsZXRlIHRoZSB2YWx1ZSBvbiBEZWxldGUga2V5cHJlc3Mgd2hlbiB0aGVyZSBpcyBub1xyXG4gICAgICAgICAgICAgKiB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsICYgdGhlcmUncyB0YWdzIHRvIGRlbGV0ZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzLnZhbHVlfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUubGVuZ3RoICYmIHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUucG9wKCkgOiB0aGlzLnNlbGVjdGlvbiA9IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgYW4gb3B0aW9uIGV4aXN0c1xyXG4gICAgICAgICAgICAgKiB3aXRoaW4gdGhpcy5vcHRpb25zIGFycmF5LlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9wdGlvbkV4aXN0cyhvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2xhc3NlcyB0byBiZSBvdXRwdXQgb24gLmRyb3Bkb3duXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRoaXMuc2VhcmNoYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIHBsYWNlaG9sZGVyIHN0cmluZyBpZiBpdCdzIHNldFxyXG4gICAgICAgICAgICAgKiAmIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFBsYWNlaG9sZGVyIHRleHRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBvcHRpb25zLCBmaWx0ZXJlZFxyXG4gICAgICAgICAgICAgKiBieSB0aGUgc2VhcmNoIGVsZW1lbnRzIHZhbHVlLiBJZiB0YWdnaW5nXHJcbiAgICAgICAgICAgICAqIHRydWUsIHRoZSBzZWFyY2ggdGV4dCB3aWxsIGJlIHByZXBlbmRlZFxyXG4gICAgICAgICAgICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2FycmF5fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3NlbGYubGFiZWxdLmluZGV4T2Yoc2VsZi5zZWFyY2gpICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25FeGlzdHModGhpcy5zZWFyY2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHRoaXMuc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmVuJ3QgYW55IG9wdGlvbnMgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpc1ZhbHVlRW1wdHkoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuc2VsZWN0aW9uKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlbGVjdGlvbi5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgaW4gYXJyYXkgZm9ybWF0LlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHZhbHVlQXNBcnJheSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGlvbl1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VsZWN0LnZ1ZT8wMjg4M2VhNSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyA6c3JjPVwiZGVmYXVsdEltYWdlXCIgYWx0PVwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIgd2lkdGg9XCIxMTBweFwiIHYtaWY9XCIhaW1hZ2VGaWxlXCI+XHJcbiAgICAgICAgPGltZyA6c3JjPVwiaW1hZ2VGaWxlXCIgYWx0PVwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIgd2lkdGg9XCIxMTBweFwiIHYtaWY9XCJpbWFnZUZpbGVcIj5cclxuXHJcbiAgICAgICAgPGJyPjxicj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiaW1hZ2UtdXBsb2FkZXJcIiBjbGFzcz1cImlucHV0ZmlsZVwiIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIlxyXG4gICAgICAgICAgICAgICByZWY9XCJmaWxlaW5wdXRcIi8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImltYWdlLXVwbG9hZGVyXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLWNsb3VkXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2J0blRleHR9fTwvc3Bhbj48L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAgIC5pbnB1dGZpbGUge1xyXG4gICAgICAgIHdpZHRoOiAwLjFweDtcclxuICAgICAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0ZmlsZSArIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHt9LFxyXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnRuVGV4dDoge30sXHJcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXHJcbiAgICAgICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1hZ2U6IHt9LFxyXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uRmlsZUNoYW5nZShlKXtcclxuICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzIHx8IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJbWFnZShmaWxlc1swXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUltYWdlKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKHRoaXMuYWNjZXB0ZWRGaWxlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLXVwbG9hZGVyXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290Lndhcm5pbmdUb2FzdCh0aGlzLmVycm9yVmFsaWRhdGlvbk1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRGaWxlKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5maWxlaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG5jLWltYWdlLXVwbG9hZC52dWU/NjRjNWM0MjUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRwcm9wczoge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBUb2dnbGVzIHRoZSBhZGRpbmcgb2YgYSAnbG9hZGluZycgY2xhc3MgdG8gdGhlIG1haW5cclxuXHRcdCAqIC52LXNlbGVjdCB3cmFwcGVyLiBVc2VmdWwgdG8gY29udHJvbCBVSSBzdGF0ZSB3aGVuXHJcblx0XHQgKiByZXN1bHRzIGFyZSBiZWluZyBwcm9jZXNzZWQgdGhyb3VnaCBBSkFYLlxyXG5cdFx0ICovXHJcblx0XHRsb2FkaW5nOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWNjZXB0IGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlXHJcblx0XHQgKiBydW4gd2hlbiB0aGUgc2VhcmNoIHRleHQgY2hhbmdlcy5cclxuXHRcdCAqXHJcblx0XHQgKiBsb2FkaW5nKCkgYWNjZXB0cyBhIGJvb2xlYW4gdmFsdWUsIGFuZCBjYW5cclxuXHRcdCAqIGJlIHVzZWQgdG8gdG9nZ2xlIGEgbG9hZGluZyBjbGFzcyBmcm9tXHJcblx0XHQgKiB0aGUgb25TZWFyY2ggY2FsbGJhY2suXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzZWFyY2h9ICBTdHJpbmcgICAgICAgICAgQ3VycmVudCBzZWFyY2ggdGV4dFxyXG5cdFx0ICogQHBhcmFtIHtsb2FkaW5nfSBGdW5jdGlvbihib29sKSAgVG9nZ2xlIGxvYWRpbmcgY2xhc3NcclxuXHRcdCAqL1xyXG5cdFx0b25TZWFyY2g6IHtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcclxuXHRcdCAqIGludm9raW5nIHRoaXMub25TZWFyY2goKS4gVXNlZCB0byBwcmV2ZW50XHJcblx0XHQgKiBzZW5kaW5nIGFuIEFKQVggcmVxdWVzdCB1bnRpbCBpbnB1dCBpcyBjb21wbGV0ZS5cclxuXHRcdCAqL1xyXG5cdFx0ZGVib3VuY2U6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiAwXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0d2F0Y2g6IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogSWYgYSBjYWxsYmFjayAmIHNlYXJjaCB0ZXh0IGhhcyBiZWVuIHByb3ZpZGVkLFxyXG5cdFx0ICogaW52b2tlIHRoZSBvblNlYXJjaCBjYWxsYmFjay5cclxuXHRcdCAqL1xyXG5cdFx0c2VhcmNoKCkge1xyXG5cdFx0XHRpZiAodGhpcy5zZWFyY2gubGVuZ3RoID4gMCAmJiB0aGlzLm9uU2VhcmNoKSB7XHJcblx0XHRcdFx0dGhpcy5vblNlYXJjaCh0aGlzLnNlYXJjaCwgdGhpcy50b2dnbGVMb2FkaW5nKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogVG9nZ2xlIHRoaXMubG9hZGluZy4gT3B0aW9uYWxseSBwYXNzIGEgYm9vbGVhblxyXG5cdFx0ICogdmFsdWUuIElmIG5vIHZhbHVlIGlzIHByb3ZpZGVkLCB0aGlzLmxvYWRpbmdcclxuXHRcdCAqIHdpbGwgYmUgc2V0IHRvIHRoZSBvcHBvc2l0ZSBvZiBpdCdzIGN1cnJlbnQgdmFsdWUuXHJcblx0XHQgKiBAcGFyYW0gdG9nZ2xlIEJvb2xlYW5cclxuXHRcdCAqIEByZXR1cm5zIHsqfVxyXG5cdFx0ICovXHJcblx0XHR0b2dnbGVMb2FkaW5nKHRvZ2dsZSA9IG51bGwpIHtcclxuXHRcdFx0aWYgKHRvZ2dsZSA9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmdcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nID0gdG9nZ2xlXHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdhdGNoOiB7XHJcbiAgICB0eXBlQWhlYWRQb2ludGVyKCkge1xyXG4gICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEFkanVzdCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBkcm9wZG93biBsaXN0XHJcbiAgICAgKiBpZiB0aGUgY3VycmVudCBwb2ludGVyIGlzIG91dHNpZGUgb2YgdGhlXHJcbiAgICAgKiBvdmVyZmxvdyBib3VuZHMuXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgbWF5YmVBZGp1c3RTY3JvbGwoKSB7XHJcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJUb3AgPSB0aGlzLnBpeGVsc1RvUG9pbnRlclRvcCgpXHJcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJCb3R0b20gPSB0aGlzLnBpeGVsc1RvUG9pbnRlckJvdHRvbSgpXHJcblxyXG4gICAgICBpZiAoIHBpeGVsc1RvUG9pbnRlclRvcCA8PSB0aGlzLnZpZXdwb3J0KCkudG9wKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8oIHBpeGVsc1RvUG9pbnRlclRvcCApXHJcbiAgICAgIH0gZWxzZSBpZiAocGl4ZWxzVG9Qb2ludGVyQm90dG9tID49IHRoaXMudmlld3BvcnQoKS5ib3R0b20pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyggdGhpcy52aWV3cG9ydCgpLnRvcCArIHRoaXMucG9pbnRlckhlaWdodCgpIClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgdG9wIG9mIHRoZSBkcm9wZG93blxyXG4gICAgICogbGlzdCB0byB0aGUgdG9wIG9mIHRoZSBjdXJyZW50IHBvaW50ZXIgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHBpeGVsc1RvUG9pbnRlclRvcCgpIHtcclxuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IDBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBaGVhZFBvaW50ZXI7IGkrKykge1xyXG4gICAgICAgIHBpeGVsc1RvUG9pbnRlclRvcCArPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlbltpXS5vZmZzZXRIZWlnaHRcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGl4ZWxzVG9Qb2ludGVyVG9wXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSB0b3Agb2YgdGhlIGRyb3Bkb3duXHJcbiAgICAgKiBsaXN0IHRvIHRoZSBib3R0b20gb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHBpeGVsc1RvUG9pbnRlckJvdHRvbSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGl4ZWxzVG9Qb2ludGVyVG9wKCkgKyB0aGlzLnBvaW50ZXJIZWlnaHQoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvZmZzZXRIZWlnaHQgb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcG9pbnRlckhlaWdodCgpIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlblt0aGlzLnR5cGVBaGVhZFBvaW50ZXJdXHJcbiAgICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnRseSB2aWV3YWJsZSBwb3J0aW9uIG9mIHRoZSBkcm9wZG93bk1lbnUuXHJcbiAgICAgKiBAcmV0dXJucyB7e3RvcDogKHN0cmluZ3wqfG51bWJlciksIGJvdHRvbTogKn19XHJcbiAgICAgKi9cclxuICAgIHZpZXdwb3J0KCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wLFxyXG4gICAgICAgIGJvdHRvbTogdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUub2Zmc2V0SGVpZ2h0ICsgdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGwgdGhlIGRyb3Bkb3duTWVudSB0byBhIGdpdmVuIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG8ocG9zaXRpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCA9IHBvc2l0aW9uXHJcbiAgICB9LFxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZUFoZWFkUG9pbnRlcjogLTFcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB3YXRjaDoge1xyXG4gICAgZmlsdGVyZWRPcHRpb25zKCkge1xyXG4gICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPSAwXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IHVwIHRoZSBsaXN0IGJ5XHJcbiAgICAgKiBzdWJ0cmFjdGluZyB0aGUgY3VycmVudCBpbmRleCBieSBvbmUuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0eXBlQWhlYWRVcCgpIHtcclxuICAgICAgaWYgKHRoaXMudHlwZUFoZWFkUG9pbnRlciA+IDApIHtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXItLVxyXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xyXG4gICAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgdHlwZUFoZWFkUG9pbnRlciB2aXN1YWxseSBkb3duIHRoZSBsaXN0IGJ5XHJcbiAgICAgKiBhZGRpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgdHlwZUFoZWFkRG93bigpIHtcclxuICAgICAgaWYgKHRoaXMudHlwZUFoZWFkUG9pbnRlciA8IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIrK1xyXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xyXG4gICAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IHRoZSBvcHRpb24gYXQgdGhlIGN1cnJlbnQgdHlwZUFoZWFkUG9pbnRlciBwb3NpdGlvbi5cclxuICAgICAqIE9wdGlvbmFsbHkgY2xlYXIgdGhlIHNlYXJjaCBpbnB1dCBvbiBzZWxlY3Rpb24uXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0eXBlQWhlYWRTZWxlY3QoKSB7XHJcbiAgICAgIGlmKCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QoIHRoaXMuZmlsdGVyZWRPcHRpb25zWyB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgXSApO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlYXJjaClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCApIHtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdHlwZUFoZWFkUG9pbnRlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmlucHV0ZmlsZSB7XFxuICAgIHdpZHRoOiAwLjFweDtcXG4gICAgaGVpZ2h0OiAwLjFweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuLmlucHV0ZmlsZSArIGxhYmVsIHtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzY0YzVjNDI1XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFhQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImRuYy1pbWFnZS11cGxvYWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiZGVmYXVsdEltYWdlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCIhaW1hZ2VGaWxlXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiaW1hZ2VGaWxlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCJpbWFnZUZpbGVcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGJyPjxicj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuYW1lPVxcXCJmaWxlXFxcIiBpZD1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJpbnB1dGZpbGVcXFwiIEBjaGFuZ2U9XFxcIm9uRmlsZUNoYW5nZVxcXCJcXHJcXG4gICAgICAgICAgICAgICByZWY9XFxcImZpbGVpbnB1dFxcXCIvPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jbG91ZFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAuaW5wdXRmaWxlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwLjFweDtcXHJcXG4gICAgICAgIGhlaWdodDogMC4xcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbnB1dGZpbGUgKyBsYWJlbCB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgdmFsdWU6IHt9LFxcclxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGJ0blRleHQ6IHt9LFxcclxcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXFxyXFxuICAgICAgICAgICAgd2lkdGg6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGltYWdlOiB7fSxcXHJcXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHZhbDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YSgpe1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpe1xcclxcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcztcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCh0aGlzLmFjY2VwdGVkRmlsZXMpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiaW1hZ2UtdXBsb2FkZXJcXFwiKS52YWx1ZSA9IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC53YXJuaW5nVG9hc3QodGhpcy5lcnJvclZhbGlkYXRpb25Nc2cpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xcclxcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldEZpbGUoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZmlsZWlucHV0LmZpbGVzWzBdO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDZweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbn1cXG4udi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4udi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuNSk7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XFxuICAgIGJvdHRvbTogMXB4O1xcbn1cXG4udi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxufVxcbi52LXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4udi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4udi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xcbiAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG59XFxuLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIC41ZW07XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNsZWFyOiBub25lO1xcbn1cXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1zZWxlY3QgbGkgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtc2VsZWN0IC5hY3RpdmUgYSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcXG4udi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcbi52LXNlbGVjdCAuc3Bpbm5lciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDVweDtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG59XFxuLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4udi1zZWxlY3QgLnNwaW5uZXIsXFxuLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4wJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4wJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT8wMjg4M2VhNVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUNBLDhFQUFBO1lBQUEsc0VBQUE7SUFDQSxXQUFBO0lBQ0EsZ0NBQUE7SUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTtJQUNBLG1DQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUNBLDhFQUFBO1lBQUEsc0VBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSx3Q0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtDQUNBO0FBRUE7SUFDQSxvQkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7Q0FDQTtBQUVBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBOztJQUVBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxpQ0FBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBOztJQUVBLG9CQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtJQUNBLGtEQUFBO0lBQ0EsOENBQUE7SUFDQSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsdURBQUE7WUFBQSwrQ0FBQTtJQUNBLGdDQUFBO0lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7O0lBRUEsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7QUFDQTtRQUNBLGdDQUFBO2dCQUFBLHdCQUFBO0NBQ0E7QUFDQTtRQUNBLGtDQUFBO2dCQUFBLDBCQUFBO0NBQ0E7Q0FDQTtBQUVBO0FBQ0E7UUFDQSxnQ0FBQTtnQkFBQSx3QkFBQTtDQUNBO0FBQ0E7UUFDQSxrQ0FBQTtnQkFBQSwwQkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcInNlbGVjdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHN0eWxlPlxcclxcbiAgICAudi1zZWxlY3Qge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiA2cHg7XFxyXFxuICAgICAgICByaWdodDogMTBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcXHJcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDAuMjVlbSAwLjI1ZW0gMCAwO1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XFxyXFxuICAgICAgICBib3R0b206IDFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XFxyXFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxyXFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XFxyXFxuICAgICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxcclxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XFxyXFxuICAgICAgICB3aWR0aDogMTBlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICBjbGVhcjogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgbGkgYSB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5hY3RpdmUgYSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIC4xKTtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXFxyXFxuICAgIC52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgICAgICByaWdodDogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcclxcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxyXFxuICAgICAgICBib3JkZXItbGVmdDogLjllbSBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC40NSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXFxyXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICB3aWR0aDogNWVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXHJcXG4gICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIDEwMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxyXFxuICAgICAgICAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIHYtc2VsZWN0XFxcIiA6Y2xhc3M9XFxcImRyb3Bkb3duQ2xhc3Nlc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IHJlZj1cXFwidG9nZ2xlXFxcIiBAbW91c2Vkb3duLnByZXZlbnQ9XFxcInRvZ2dsZURyb3Bkb3duXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdi1pZj1cXFwiIXNlYXJjaGFibGUgJiYgaXNWYWx1ZUVtcHR5XFxcIj5cXHJcXG4gICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX1cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2VsZWN0ZWQtdGFnXFxcIiB2LWZvcj1cXFwiKG9wdGlvbixpbmRleCkgaW4gdmFsdWVBc0FycmF5XFxcIiB2LWJpbmQ6a2V5PVxcXCJpbmRleFxcXCI+XFxyXFxuICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cXHJcXG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCJtdWx0aXBsZVxcXCIgQGNsaWNrPVxcXCJzZWxlY3Qob3B0aW9uKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgOmRlYm91bmNlPVxcXCJkZWJvdW5jZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwic2VhcmNoYWJsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRlbGV0ZT1cXFwibWF5YmVEZWxldGVWYWx1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lc2M9XFxcIm9uRXNjYXBlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24udXAucHJldmVudD1cXFwidHlwZUFoZWFkVXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kb3duLnByZXZlbnQ9XFxcInR5cGVBaGVhZERvd25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXIucHJldmVudD1cXFwidHlwZUFoZWFkU2VsZWN0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XFxcIm9wZW4gPSBmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cXFwib3BlbiA9IHRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVxcXCJzZWFyY2hQbGFjZWhvbGRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwieyB3aWR0aDogaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nIH1cXFwiXFxyXFxuICAgICAgICAgICAgPlxcclxcblxcclxcbiAgICAgICAgICAgIDxpIHJlZj1cXFwib3BlbkluZGljYXRvclxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIiBjbGFzcz1cXFwib3Blbi1pbmRpY2F0b3JcXFwiPjwvaT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJzcGlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3Bpbm5lclxcXCIgdi1zaG93PVxcXCJsb2FkaW5nXFxcIj5Mb2FkaW5nLi4uPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8dWwgcmVmPVxcXCJkcm9wZG93bk1lbnVcXFwiIHYtc2hvdz1cXFwib3BlblxcXCIgOnRyYW5zaXRpb249XFxcInRyYW5zaXRpb25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIlxcclxcbiAgICAgICAgICAgIDpzdHlsZT1cXFwieyAnbWF4LWhlaWdodCc6IG1heEhlaWdodCB9XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgdi1mb3I9XFxcIihvcHRpb24saW5kZXgpIGluIGZpbHRlcmVkT3B0aW9uc1xcXCIgdi1iaW5kOmtleT1cXFwiaW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyBhY3RpdmU6IGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gdHlwZUFoZWFkUG9pbnRlciB9XFxcIlxcclxcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVxcXCJ0eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBAbW91c2Vkb3duLnByZXZlbnQ9XFxcInNlbGVjdChvcHRpb24pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XFxcImZhZGVcXFwiIHYtaWY9XFxcIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXFxcIiBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cXFwiZmFkZVxcXCIgdi1pZj1cXFwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcIm5vLW9wdGlvbnNcXFwiPlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLjwvc2xvdD5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcclxcbiAgICBpbXBvcnQgcG9pbnRlclNjcm9sbCBmcm9tICdiYXNlL21peGlucy9wb2ludGVyU2Nyb2xsJ1xcclxcbiAgICBpbXBvcnQgdHlwZUFoZWFkUG9pbnRlciBmcm9tICdiYXNlL21peGlucy90eXBlQWhlYWRQb2ludGVyJ1xcclxcbiAgICBpbXBvcnQgYWpheCBmcm9tICdiYXNlL21peGlucy9hamF4J1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBtaXhpbnM6IFtwb2ludGVyU2Nyb2xsLCB0eXBlQWhlYWRQb2ludGVyLCBhamF4XSxcXHJcXG5cXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQ29udGFpbnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB2YWx1ZS4gVmVyeSBzaW1pbGFyIHRvIGFcXHJcXG4gICAgICAgICAgICAgKiBgdmFsdWVgIGF0dHJpYnV0ZSBvbiBhbiA8aW5wdXQ+LiBJbiBtb3N0IGNhc2VzLCB5b3UnbGwgd2FudFxcclxcbiAgICAgICAgICAgICAqIHRvIHNldCB0aGlzIGFzIGEgdHdvLXdheSBiaW5kaW5nLCB1c2luZyA6dmFsdWUuc3luYy4gSG93ZXZlcixcXHJcXG4gICAgICAgICAgICAgKiB0aGlzIHdpbGwgbm90IHdvcmsgd2l0aCBWdWV4LCBpbiB3aGljaCBjYXNlIHlvdSdsbCBuZWVkIHRvIHVzZVxcclxcbiAgICAgICAgICAgICAqIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBwcm9wZXJ0eS5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fHxTdHJpbmd8fG51bGx9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgdmFsdWU6IHtcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHRvIGJlIHVzZWQgYXMgZHJvcGRvd24gY2hvaWNlcy5cXHJcXG4gICAgICAgICAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMsIHZ1ZS1zZWxlY3Qgd2lsbCBsb29rIGZvclxcclxcbiAgICAgICAgICAgICAqIGEgYGxhYmVsYCBrZXkgKGV4LiBbe2xhYmVsOiAnVGhpcyBpcyBGb28nLCB2YWx1ZTogJ2Zvbyd9XSkuIEFcXHJcXG4gICAgICAgICAgICAgKiBjdXN0b20gbGFiZWwga2V5IGNhbiBiZSBzZXQgd2l0aCB0aGUgYGxhYmVsYCBwcm9wLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgb3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogU2V0cyB0aGUgbWF4LWhlaWdodCBwcm9wZXJ0eSBvbiB0aGUgZHJvcGRvd24gbGlzdC5cXHJcXG4gICAgICAgICAgICAgKiBAZGVwcmVjYXRlZFxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzQwMHB4J1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgZmlsdGVyaW5nIHRoZSBvcHRpb25zLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHNlYXJjaGFibGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYG11bHRpcGxlYCBhdHRyaWJ1dGUgb24gYSBgPHNlbGVjdD5gIGlucHV0LlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgbXVsdGlwbGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIG9uIGFuIGA8aW5wdXQ+YC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFNldHMgYSBWdWUgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiB0aGUgYC5kcm9wZG93bi1tZW51YC4gdnVlLXNlbGVjdFxcclxcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGluY2x1ZGUgQ1NTIGZvciB0cmFuc2l0aW9ucywgeW91J2xsIG5lZWQgdG8gYWRkIHRoZW0geW91cnNlbGYuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2V4cGFuZCdcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgY2xlYXJpbmcgdGhlIHNlYXJjaCB0ZXh0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogVGVsbHMgdnVlLXNlbGVjdCB3aGF0IGtleSB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIGxhYmVscyB3aGVuIGVhY2ggYG9wdGlvbmAgaXMgYW4gb2JqZWN0LlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgbGFiZWw6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGFiZWwnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDYWxsYmFjayB0byBnZW5lcmF0ZSB0aGUgbGFiZWwgdGV4dC4gSWYge29wdGlvbn1cXHJcXG4gICAgICAgICAgICAgKiBpcyBhbiBvYmplY3QsIHJldHVybnMgb3B0aW9uW3RoaXMubGFiZWxdIGJ5IGRlZmF1bHQuXFxyXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgJiYgb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bdGhpcy5sYWJlbF1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBlYWNoIHRpbWUgdGhlIHNlbGVjdGVkXFxyXFxuICAgICAgICAgICAgICogdmFsdWUocykgY2hhbmdlLiBXaGVuIGludGVncmF0aW5nIHdpdGggVnVleCwgdXNlIHRoaXMgY2FsbGJhY2sgdG8gdHJpZ2dlclxcclxcbiAgICAgICAgICAgICAqIGFuIGFjdGlvbiwgcmF0aGVyIHRoYW4gdXNpbmcgOnZhbHVlLnN5bmMgdG8gcmV0cmVpdmUgdGhlIHNlbGVjdGVkIHZhbHVlLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cXHJcXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCB7bnVsbH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBvbkNoYW5nZTogRnVuY3Rpb24sXFxyXFxuICAgICAgICAgICAgY2hhbmdlUGFyYW06IHt9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGNyZWF0aW5nIG9wdGlvbnMgZnJvbSBzZWFyY2hJbnB1dC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICB0YWdnYWJsZToge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogV2hlbiB0cnVlLCBuZXdseSBjcmVhdGVkIHRhZ3Mgd2lsbCBiZSBhZGRlZCB0b1xcclxcbiAgICAgICAgICAgICAqIHRoZSBvcHRpb25zIGxpc3QuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgcHVzaFRhZ3M6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFVzZXIgZGVmaW5lZCBmdW5jdGlvbiBmb3IgYWRkaW5nIE9wdGlvbnNcXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAobmV3T3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ29iamVjdCcpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1t0aGlzLmxhYmVsXTogbmV3T3B0aW9ufVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld09wdGlvblxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBXaGVuIGZhbHNlLCB1cGRhdGluZyB0aGUgb3B0aW9ucyB3aWxsIG5vdCByZXNldCB0aGUgc2VsZWN0IHZhbHVlXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgcmVzZXRPbk9wdGlvbnNDaGFuZ2U6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgc2VhcmNoOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXFxyXFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIHZhbHVlKHZhbCwgb2xkKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBzZWxlY3Rpb24odmFsLCBvbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHZhbCAhPT0gb2xkID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBvcHRpb25zKCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGFnZ2FibGUgJiYgdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG11bHRpcGxlKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbCA/IFtdIDogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogU2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHNlbGVjdChvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0KG9wdGlvbilcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5jcmVhdGVPcHRpb24ob3B0aW9uKVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hUYWdzKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbilcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTZWxlY3Qob3B0aW9uKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRGUtc2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGRlc2VsZWN0KG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IC0xXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5mb3JFYWNoKCh2YWwpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBvcHRpb24gfHwgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsW3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0gdmFsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0aW9uLmluZGV4T2YocmVmKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSlcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDYWxsZWQgZnJvbSB0aGlzLnNlbGVjdCBhZnRlciBlYWNoIHNlbGVjdGlvbi5cXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge0V2ZW50fSBlXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5vcGVuSW5kaWNhdG9yIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnNlYXJjaCB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy50b2dnbGUgfHwgZS50YXJnZXQgPT09IHRoaXMuJGVsKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpIC8vIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gYmx1clxcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guZm9jdXMoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gb3B0aW9uIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gIG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgVHJ1ZSB3aGVuIHNlbGVjdGVkIHx8IEZhbHNlIG90aGVyd2lzZVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKG9wdCA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA9PT0gb3B0aW9uXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBJZiB0aGVyZSBpcyBhbnkgdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCByZW1vdmUgaXQuXFxyXFxuICAgICAgICAgICAgICogT3RoZXJ3aXNlLCBibHVyIHRoZSBzZWFyY2ggaW5wdXQgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLlxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG9uRXNjYXBlKCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIERlbGV0ZSB0aGUgdmFsdWUgb24gRGVsZXRlIGtleXByZXNzIHdoZW4gdGhlcmUgaXMgbm9cXHJcXG4gICAgICAgICAgICAgKiB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsICYgdGhlcmUncyB0YWdzIHRvIGRlbGV0ZVxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXMudmFsdWV9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyZWZzLnNlYXJjaC52YWx1ZS5sZW5ndGggJiYgdGhpcy52YWx1ZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLnZhbHVlLnBvcCgpIDogdGhpcy5zZWxlY3Rpb24gPSBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIERldGVybWluZSBpZiBhbiBvcHRpb24gZXhpc3RzXFxyXFxuICAgICAgICAgICAgICogd2l0aGluIHRoaXMub3B0aW9ucyBhcnJheS5cXHJcXG4gICAgICAgICAgICAgKlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgb3B0aW9uRXhpc3RzKG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2VcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDbGFzc2VzIHRvIGJlIG91dHB1dCBvbiAuZHJvcGRvd25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgZHJvcGRvd25DbGFzc2VzKCkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxcclxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdGhpcy5zZWFyY2hhYmxlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdGhpcy5sb2FkaW5nXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgcGxhY2Vob2xkZXIgc3RyaW5nIGlmIGl0J3Mgc2V0XFxyXFxuICAgICAgICAgICAgICogJiB0aGVyZSBpcyBubyB2YWx1ZSBzZWxlY3RlZC5cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFBsYWNlaG9sZGVyIHRleHRcXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBvcHRpb25zLCBmaWx0ZXJlZFxcclxcbiAgICAgICAgICAgICAqIGJ5IHRoZSBzZWFyY2ggZWxlbWVudHMgdmFsdWUuIElmIHRhZ2dpbmdcXHJcXG4gICAgICAgICAgICAgKiB0cnVlLCB0aGUgc2VhcmNoIHRleHQgd2lsbCBiZSBwcmVwZW5kZWRcXHJcXG4gICAgICAgICAgICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuXFxyXFxuICAgICAgICAgICAgICpcXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHthcnJheX1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcXHJcXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bc2VsZi5sYWJlbF0uaW5kZXhPZihzZWxmLnNlYXJjaCkgIT09IC0xXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25FeGlzdHModGhpcy5zZWFyY2gpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQodGhpcy5zZWFyY2gpXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3B0aW9ucyBzZWxlY3RlZC5cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGlzVmFsdWVFbXB0eSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uID09PSAnb2JqZWN0Jykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5zZWxlY3Rpb24pLmxlbmd0aFxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlbGVjdGlvbi5sZW5ndGhcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBpbiBhcnJheSBmb3JtYXQuXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7QXJyYXl9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgdmFsdWVBc0FycmF5KCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5zZWxlY3Rpb25dXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMzIgMzMgMzggMzkgNDAgNDEgNDMgNDQgNDUiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmRjYjJjMzQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZkY2IyYzM0IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcdXBsb2FkXFxcXGRuYy1pbWFnZS11cGxvYWQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZG5jLWltYWdlLXVwbG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmRjYjJjMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZGNiMmMzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyghX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZGVmYXVsdEltYWdlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2VGaWxlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwiZmlsZWlucHV0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRmaWxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImZpbGVcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGVcIixcbiAgICAgIFwiaWRcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZUNoYW5nZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvdWRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0uYnRuVGV4dCkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZkY2IyYzM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMzIgMzMgMzggMzkgNDAgNDEgNDMgNDQgNDUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93biB2LXNlbGVjdFwiLFxuICAgIGNsYXNzOiBfdm0uZHJvcGRvd25DbGFzc2VzXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHJlZjogXCJ0b2dnbGVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlZG93blwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50b2dnbGVEcm9wZG93bigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKCFfdm0uc2VhcmNoYWJsZSAmJiBfdm0uaXNWYWx1ZUVtcHR5KSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0ucGxhY2Vob2xkZXIpICsgXCJcXG4gICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0udmFsdWVBc0FycmF5KSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnc3BhbicsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC10YWdcIlxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgIFwiKSwgKF92bS5tdWx0aXBsZSkgPyBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2VsZWN0KG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiw5dcIildKV0pIDogX3ZtLl9lKCldKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaCksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoYWJsZSksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaGFibGVcIlxuICAgIH1dLFxuICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0uaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGVib3VuY2VcIjogX3ZtLmRlYm91bmNlLFxuICAgICAgXCJ0eXBlXCI6IFwic2VhcmNoXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS5zZWFyY2hQbGFjZWhvbGRlclxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zZWFyY2gpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXlkb3duXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkZWxldGVcIiwgWzgsIDQ2XSkpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5tYXliZURlbGV0ZVZhbHVlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInVwXCIsIDM4KSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRVcCgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWREb3duKCRldmVudClcbiAgICAgIH1dLFxuICAgICAgXCJrZXl1cFwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZXNjXCIsIDI3KSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm9uRXNjYXBlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRTZWxlY3QoJGV2ZW50KVxuICAgICAgfV0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBcImZvY3VzXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbiA9IHRydWVcbiAgICAgIH0sXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgcmVmOiBcIm9wZW5JbmRpY2F0b3JcIixcbiAgICBzdGF0aWNDbGFzczogXCJvcGVuLWluZGljYXRvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJwcmVzZW50YXRpb25cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fdChcInNwaW5uZXJcIiwgW19jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvYWRpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ub3BlbiksXG4gICAgICBleHByZXNzaW9uOiBcIm9wZW5cIlxuICAgIH1dLFxuICAgIHJlZjogXCJkcm9wZG93bk1lbnVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICAnbWF4LWhlaWdodCc6IF92bS5tYXhIZWlnaHRcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IF92bS50cmFuc2l0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl9sKChfdm0uZmlsdGVyZWRPcHRpb25zKSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnbGknLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgYWN0aXZlOiBfdm0uaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSBfdm0udHlwZUFoZWFkUG9pbnRlclxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2VvdmVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS50eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5zZWxlY3Qob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV0pXSlcbiAgfSksIF92bS5fdihcIiBcIiksICghX3ZtLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgpID8gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSA/IF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogXCJmYWRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJuby1vcHRpb25zXCIsIFtfdm0uX3YoXCJTb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy5cIildKV0sIDIpIDogX3ZtLl9lKCldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTlmZDc1MzdlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjYzNDAwMjM5XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZkY2IyYzM0IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZDkzMDRlNTRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMyIDMzIDM4IDM5IDQwIDQxIDQzIDQ0IDQ1IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJlblwiOiB7XHJcbiAgICAgICAgXCJhdGhsZXRlc1wiOiB7XHJcbiAgICAgICAgICAgIFwibVwiOiBcIk1hbGVcIixcclxuICAgICAgICAgICAgXCJ3XCI6IFwiRmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiblwiOiBcIk1peHRvXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgQXRobGV0ZSB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBBdGhsZXRlIHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJUaGUgQXRobGV0ZSB3YXMgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgXCJwcm9maWxlX3BpY3R1cmVfZGVsZXRlZFwiOiBcIlRoZSBwcm9maWxlIHBpY3R1cmUgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiVGhlIEF0aGxldGUgZG9lc24ndCBleGlzdFwiLFxyXG4gICAgICAgICAgICBcImZpcnN0X25hbWVcIjogXCJGaXJzdCBOYW1lXCIsXHJcbiAgICAgICAgICAgIFwibGFzdF9uYW1lXCI6IFwiTGFzdCBOYW1lXCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBcIkNvZGVcIixcclxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBcImNvdW50cmllc1wiOiBcIkNvdW50cmllc1wiLFxyXG4gICAgICAgICAgICBcInNwb3J0XCI6IFwiU3BvcnRcIixcclxuICAgICAgICAgICAgXCJzcGVjaWFsdHlcIjogXCJTcGVjaWFsdHlcIixcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNhdGVnb3J5XCIsXHJcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWN0IGFuIG9wdGlvblwiLFxyXG4gICAgICAgICAgICBcInVwbG9hZF9pbWFnZVwiOiBcIlVwbG9hZCBpbWFnZVwiLFxyXG4gICAgICAgICAgICBcInJhbmtpbmdcIjogXCJSYW5raW5nXCIsXHJcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiSGVpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiV2VpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwiZmVkZXJhdGlvbl9jb2RlXCI6IFwiRmVkZXJhdGlvbiBDb2RlXCIsXHJcbiAgICAgICAgICAgIFwibmF0aW9uYWxfY29kZVwiOiBcIk5hdGlvbmFsIENvZGVcIixcclxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJVcGRhdGVcIixcclxuICAgICAgICAgICAgXCJuZXdcIjogXCJOZXcgQXRobGV0ZVwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiQXJlIHlvdSBzdXJlPyB0aGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlX2F0aGxldGVcIjogXCJEZWxldGUgQXRobGV0ZVwiLFxyXG4gICAgICAgICAgICBcImF0aGxldGVfaW5mb1wiOiBcIkF0aGxldGUgSW5mb3JtYXRpb25cIixcclxuICAgICAgICAgICAgXCJnb2xkXCI6IFwiR29sZFwiLFxyXG4gICAgICAgICAgICBcInNpbHZlclwiOiBcIlNpbHZlclwiLFxyXG4gICAgICAgICAgICBcImJyb256ZVwiOiBcIkJyb256ZVwiLFxyXG4gICAgICAgICAgICBcImNsdWJcIjogXCJDbHViXCIsXHJcbiAgICAgICAgICAgIFwiYXRobGV0ZVwiOiBcIkF0aGxldGVcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJHZW5kZXJcIixcclxuICAgICAgICAgICAgXCJldmVudHNcIjogXCJFdmVudHNcIixcclxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBcIjogXCJDaGFtcGlvbnNoaXBcIixcclxuICAgICAgICAgICAgXCJhdGhsZXRlc1wiOiBcIkF0aGxldGVzXCIsXHJcbiAgICAgICAgICAgIFwiZmlsdGVyX2J5X2V2ZW50c1wiOiBcIkZpbHRlciBCeSBFdmVudFwiLFxyXG4gICAgICAgICAgICBcImZpbHRlcl9ieVwiOiBcIkZpbHRlciBCeVwiLFxyXG4gICAgICAgICAgICBcImNsYXNzaWZpY2F0aW9uXCI6IFwiQ2xhc3NpZmljYXRpb25cIixcclxuICAgICAgICAgICAgXCJub19yZXN1bHRzXCI6IFwiVGhlcmUgYXJlIG5vIHB1Ymxpc2hlZCByZXN1bHRzXCIsXHJcbiAgICAgICAgICAgIFwibG9hZGluZ1wiOiBcIkxvYWRpbmdcIixcclxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY3RcIixcclxuICAgICAgICAgICAgXCJzZWFyY2hfYXRobGV0ZVwiOiBcIlNlYXJjaCBBdGhsZXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJlc1wiOiB7XHJcbiAgICAgICAgXCJhdGhsZXRlc1wiOiB7XHJcbiAgICAgICAgICAgIFwibVwiOiBcIk1hc2N1bGlub1wiLFxyXG4gICAgICAgICAgICBcIndcIjogXCJGZW1lbmlub1wiLFxyXG4gICAgICAgICAgICBcIm5cIjogXCJNaXh0b1wiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgYXRsZXRhIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBhdGxldGEgZnVlIGFjdHVhbGl6YWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJFbCBhdGxldGEgZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcclxuICAgICAgICAgICAgXCJwcm9maWxlX3BpY3R1cmVfZGVsZXRlZFwiOiBcIkxhIGltYWdlbiBkZSBwZXJmaWwgZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcclxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJFbCBhdGxldGEgbm8gZXhpc3RlXCIsXHJcbiAgICAgICAgICAgIFwiZmlyc3RfbmFtZVwiOiBcIk5vbWJyZVwiLFxyXG4gICAgICAgICAgICBcImxhc3RfbmFtZVwiOiBcIkFwZWxsaWRvXCIsXHJcbiAgICAgICAgICAgIFwiY29kZVwiOiBcIkPDs2RpZ29cIixcclxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiUGHDrXNcIixcclxuICAgICAgICAgICAgXCJjb3VudHJpZXNcIjogXCJQYWlzZXNcIixcclxuICAgICAgICAgICAgXCJzcG9ydFwiOiBcIkRlcG9ydGVcIixcclxuICAgICAgICAgICAgXCJzcGVjaWFsdHlcIjogXCJFc3BlY2lhbGlkYWRcIixcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNhdGVnb3LDrWFcIixcclxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWNjaW9uZXNcIixcclxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWNjaW9uZSB1bmEgb3BjacOzblwiLFxyXG4gICAgICAgICAgICBcInNlbGVjdF9vcHRpb25zXCI6IFwiU2VsZWNjaW9uZSB1bmEgb3BjacOzbiBvIG3DoXMgb3BjaW9uZXNcIixcclxuICAgICAgICAgICAgXCJ1cGxvYWRfaW1hZ2VcIjogXCJTdWJpciBJbWFnZW5cIixcclxuICAgICAgICAgICAgXCJyYW5raW5nXCI6IFwiUmFua2luZ1wiLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiBcIkFsdHVyYVwiLFxyXG4gICAgICAgICAgICBcIndlaWdodFwiOiBcIlBlc29cIixcclxuICAgICAgICAgICAgXCJmZWRlcmF0aW9uX2NvZGVcIjogXCJDw7NkaWdvIGRlIEZlZGVyYWNpw7NuXCIsXHJcbiAgICAgICAgICAgIFwibmF0aW9uYWxfY29kZVwiOiBcIkPDs2RpZ28gTmFjaW9uYWxcIixcclxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJBY3R1YWxpemFyXCIsXHJcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTnVldm8gQXRsZXRhXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlX21lc3NhZ2VcIjogXCLCv0VzdGFzIFNlZ3Vybz8gZXN0YSBhY2Npw7NuIG5vIHNlIHB1ZWRlIGRlc2hhY2VyXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlX2F0aGxldGVcIjogXCJFbGltaW5hciBBdGxldGFcIixcclxuICAgICAgICAgICAgXCJhdGhsZXRlX2luZm9cIjogXCJJbmZvcm1hY2nDs24gZGVsIEF0bGV0YVwiLFxyXG4gICAgICAgICAgICBcImdvbGRcIjogXCJPcm9cIixcclxuICAgICAgICAgICAgXCJzaWx2ZXJcIjogXCJQbGF0YVwiLFxyXG4gICAgICAgICAgICBcImJyb256ZVwiOiBcIkJyb25jZVwiLFxyXG4gICAgICAgICAgICBcImNsdWJcIjogXCJDbHViXCIsXHJcbiAgICAgICAgICAgIFwiYXRobGV0ZVwiOiBcIkF0bGV0YVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIkdlbmVyb1wiLFxyXG4gICAgICAgICAgICBcImV2ZW50c1wiOiBcIkV2ZW50b3NcIixcclxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBcIjogXCJDYW1wZW9uYXRvc1wiLFxyXG4gICAgICAgICAgICBcImF0aGxldGVzXCI6IFwiQXRsZXRhc1wiLFxyXG4gICAgICAgICAgICBcImZpbHRlcl9ieV9ldmVudHNcIjogXCJGaWx0cmFyIFBvciBFdmVudG9cIixcclxuICAgICAgICAgICAgXCJmaWx0ZXJfYnlcIjogXCJGaWx0cmFyIFBvclwiLFxyXG4gICAgICAgICAgICBcImNsYXNzaWZpY2F0aW9uXCI6IFwiQ2xhc2lmaWNhY2nDs25cIixcclxuICAgICAgICAgICAgXCJub19yZXN1bHRzXCI6IFwiQcO6biBubyBoYXkgcmVzdWx0YWRvcyBwdWJsaWNhZG9zXCIsXHJcbiAgICAgICAgICAgIFwibG9hZGluZ1wiOiBcIkNhcmdhbmRvXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWNjaW9uYXJcIixcclxuICAgICAgICAgICAgXCJzZWFyY2hfYXRobGV0ZVwiOiBcIkJ1c2NhciBBdGxldGFcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vYXRobGV0ZXMvYXRobGV0ZXMuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL2F0aGxldGVzLycgKyBpZCArICc/aW5jbHVkZT1zcG9ydCxzcGVjaWFsdHksY2F0ZWdvcnksY291bnRyeScpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGUoYXRobGV0ZSwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL2F0aGxldGVzJywgYXRobGV0ZSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShpZCwgYXRobGV0ZSwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wdXQoJy9hcGkvYXRobGV0ZXMvJyArIGlkLCBhdGhsZXRlLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZGVsZXRlKCcvYXBpL2F0aGxldGVzLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9hdGhsZXRlcy9hdGhsZXRlU2VydmljZS5qcyIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGFkbWluLWhlYWRlciA6dGl0bGU9XCIkdCgnYWRtaW4uYXRobGV0ZXMnKVwiIDpicmVhZGNydW1icz1cImJyZWFkY3J1bWJzXCI+PC9hZG1pbi1oZWFkZXI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiYXRobGV0ZS1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPnt7JHQoJ2FkbWluLmF0aGxldGVzJyl9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uYm94LWhlYWRlciAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2ZpcnN0X25hbWUnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuZmlyc3RfbmFtZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLmZpcnN0X25hbWUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdhdGhsZXRlcy5maXJzdF9uYW1lJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF0aGxldGUuZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2ZpcnN0X25hbWUnKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZmlyc3RfbmFtZScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnbGFzdF9uYW1lJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMubGFzdF9uYW1lJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibGFzdF9uYW1lXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMubGFzdF9uYW1lJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF0aGxldGUubGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnbGFzdF9uYW1lJylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2xhc3RfbmFtZScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZG5jLWltYWdlLXVwbG9hZGVyIDpidG4tdGV4dD1cIiR0KCdhdGhsZXRlcy51cGxvYWRfaW1hZ2UnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci12YWxpZGF0aW9uLW1zZz1cIiR0KCd2YWxpZGF0aW9uLmltYWdlJyx7YXR0cmlidXRlOiR0KCdhdGhsZXRlcy51cGxvYWRfaW1hZ2UnKX0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmltYWdlPVwiYXRobGV0ZS5pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQtaW1hZ2U9XCIvaW1hZ2VzL21pc3NpbmcvYXRobGV0ZS9taXNzaW5nLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInVwbG9hZGVyXCI+PC9kbmMtaW1hZ2UtdXBsb2FkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZlZGVyYXRpb25fY29kZVwiIGRhdGEtdnYtZXJyb3I9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYXRobGV0ZXMuZmVkZXJhdGlvbl9jb2RlJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jcmVkaXQtY2FyZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZlZGVyYXRpb25fY29kZVwiIG5hbWU9XCJmZWRlcmF0aW9uX2NvZGVcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuZmVkZXJhdGlvbl9jb2RlJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF0aGxldGUuZmVkZXJhdGlvbl9jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hdGlvbmFsX2NvZGVcIiBkYXRhLXZ2LWVycm9yPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2F0aGxldGVzLm5hdGlvbmFsX2NvZGUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNyZWRpdC1jYXJkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmF0aW9uYWxfY29kZVwiIG5hbWU9XCJuYXRpb25hbF9jb2RlXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLm5hdGlvbmFsX2NvZGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXRobGV0ZS5uYXRpb25hbF9jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnc3BvcnQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNwb3J0c1wiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy5zcG9ydCcpfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJhdGhsZXRlLnNwb3J0XCIgbGFiZWw9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cInNwb3J0Q2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdhdGhsZXRlcy5zZWxlY3Rfb3B0aW9uJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNwb3J0c1wiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3BvcnRfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF0aGxldGUuc3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuc3BvcnQnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ3Nwb3J0JylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ3Nwb3J0JykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdzcGVjaWFsdHknKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNwb3J0c1wiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy5zcGVjaWFsdHknKX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwiYXRobGV0ZS5zcGVjaWFsdHlcIiBsYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cInNwZWNpYWx0eUNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNwZWNpYWx0aWVzXCI+PC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzcGVjaWFsdHlfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF0aGxldGUuc3BlY2lhbHR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwZWNpYWx0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdhdGhsZXRlcy5zcGVjaWFsdHknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ3NwZWNpYWx0eScpXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdzcGVjaWFsdHknKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdjYXRlZ29yeScpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3BvcnRzXCIgZGF0YS12di1lcnJvcj1cIlwiPnt7JHQoJ2F0aGxldGVzLmNhdGVnb3J5Jyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDp2YWx1ZT1cImF0aGxldGUuY2F0ZWdvcnlcIiBsYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImNhdGVnb3J5Q2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiY2F0ZWdvcmllc1wiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2F0ZWdvcnlfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF0aGxldGUuY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuY2F0ZWdvcnknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ2NhdGVnb3J5JylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2NhdGVnb3J5JykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdjb3VudHJ5JykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzcG9ydHNcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuY291bnRyeScpfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJhdGhsZXRlLmNvdW50cnlcIiBsYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwiY291bnRyeUNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJjb3VudHJpZXNcIj48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvdW50cnlfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImF0aGxldGUuY291bnRyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2F0aGxldGVzLmNvdW50cnknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ2NvdW50cnknKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnY291bnRyeScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2dlbmRlcicpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3BvcnRzXCIgZGF0YS12di1lcnJvcj1cIlwiPnt7JHQoJ2F0aGxldGVzLmdlbmRlcicpfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJhdGhsZXRlLmdlbmRlclwiIGxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdhdGhsZXRlcy5zZWxlY3Rfb3B0aW9uJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwiZ2VuZGVyQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZ2VuZGVyc1wiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZ2VuZGVyX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhdGhsZXRlLmdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuZ2VuZGVyJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIiB2LXNob3c9XCJlcnJvcnMuaGFzKCdnZW5kZXInKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZ2VuZGVyJykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoZWlnaHRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuaGVpZ2h0Jyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvd3MtdlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImhlaWdodFwiIG5hbWU9XCJoZWlnaHRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuaGVpZ2h0JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9XCJoZWlnaHRcIiBpbml0aWFsPVwib2ZmXCIgdi1tb2RlbD1cImF0aGxldGUuaGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIndlaWdodFwiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy53ZWlnaHQnKX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRhY2hvbWV0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ3ZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLndlaWdodCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPVwid2VpZ2h0XCIgaW5pdGlhbD1cIm9mZlwiIHYtbW9kZWw9XCJhdGhsZXRlLndlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmFua2luZ1wiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy5yYW5raW5nJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaWduYWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyYW5raW5nXCIgbmFtZT1cInJhbmtpbmdcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMucmFua2luZycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPVwicmFua2luZ1wiIGluaXRpYWw9XCJvZmZcIiB2LW1vZGVsPVwiYXRobGV0ZS5yYW5raW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdmb3Jtcy5iYWNrJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBocmVmPVwiIyFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnZGlzYWJsZWQnOnVwZGF0aW5nfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uU3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZm9ybXMuc2F2ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5ib3gtYm9keSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmJveCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XHJcbiAgICBpbXBvcnQgYXRobGV0ZUxvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL2F0aGxldGVzL2F0aGxldGVzLmpzJztcclxuICAgIGltcG9ydCBkbmNJbWFnZVVwbG9hZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWUnO1xyXG4gICAgaW1wb3J0IHZTZWxlY3QgZnJvbSBcImJhc2UvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVwiXHJcbiAgICBpbXBvcnQgYWRtaW5IZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcclxuICAgIGltcG9ydCBmb3JtRGF0YU9iamVjdFBhcnNlciBmcm9tICdiYXNlL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyJ1xyXG4gICAgaW1wb3J0IHttYXBBY3Rpb25zfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGF0aGxldGVTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL2F0aGxldGVzL2F0aGxldGVTZXJ2aWNlJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3ZTZWxlY3QnOiB2U2VsZWN0LFxyXG4gICAgICAgICAgICAnYWRtaW5IZWFkZXInOiBhZG1pbkhlYWRlcixcclxuICAgICAgICAgICAgJ2RuY0ltYWdlVXBsb2FkZXInOiBkbmNJbWFnZVVwbG9hZGVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaXhpbnM6IFtmb3JtRGF0YU9iamVjdFBhcnNlcl0sXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb2xlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYXRobGV0ZToge30sXHJcbiAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uaG9tZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9hdGhsZXRlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uYXRobGV0ZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvYXRobGV0ZXMvJyArIHRoaXMuYXRobGV0ZS5pZCArICcvdXBkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi51cGRhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcG9ydHMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLnNwb3J0c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcGVjaWFsdGllcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uc3BlY2lhbHRpZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZW5kZXJzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5nZW5kZXJzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvdW50cmllcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uY291bnRyaWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoYW1waW9uc2hpcHMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLmNoYW1waW9uc2hpcHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhbXBpb25zaGlwRXZlbnRzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5ldmVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYWxlczogYXRobGV0ZUxvY2FsZXMsXHJcbiAgICAgICAgY3JlYXRlZCgpe1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3BvcnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BvcnRzKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYXRlZ29yaWVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY291bnRyaWVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q291bnRyaWVzKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFtcGlvbnNoaXBzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2hhbXBpb25zaGlwcygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2VuZGVycy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEdlbmRlcnMoKTtcclxuICAgICAgICAgICAgYXRobGV0ZVNlcnZpY2Uuc2hvdyh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdGhsZXRlID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTcGVjaWFsdGllcyh0aGlzLmF0aGxldGUuc3BvcnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdGhsZXRlLmNoYW1waW9uc2hpcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2hhbXBpb25zaGlwRXZlbnRzKHRoaXMuYXRobGV0ZS5jaGFtcGlvbnNoaXAuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICAgICAgICAgIGdldFNwb3J0czogJ2NvbW1vbjpnZXRTcG9ydHMnLFxyXG4gICAgICAgICAgICAgICAgZ2V0Q2F0ZWdvcmllczogJ2NvbW1vbjpnZXRDYXRlZ29yaWVzJyxcclxuICAgICAgICAgICAgICAgIGdldENvdW50cmllczogJ2NvbW1vbjpnZXRDb3VudHJpZXMnLFxyXG4gICAgICAgICAgICAgICAgZ2V0Q2hhbXBpb25zaGlwczogJ2NvbW1vbjpnZXRDaGFtcGlvbnNoaXBzJyxcclxuICAgICAgICAgICAgICAgIGdldFNwZWNpYWx0aWVzOiAnY29tbW9uOmdldFNwZWNpYWx0aWVzJyxcclxuICAgICAgICAgICAgICAgIHNldFNwZWNpYWx0aWVzOiAnY29tbW9uOnNldFNwZWNpYWx0aWVzJyxcclxuICAgICAgICAgICAgICAgIGdldENoYW1waW9uc2hpcEV2ZW50czogJ2NvbW1vbjpnZXRDaGFtcGlvbnNoaXBFdmVudHMnLFxyXG4gICAgICAgICAgICAgICAgZ2V0R2VuZGVyczogJ2NvbW1vbjpnZXRHZW5kZXJzJyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNsb3NlKGV2dCl7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50SHViLiRvbignbW9kYWwtY2xvc2UnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BvcnRDaGFuZ2VkKHNwb3J0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRobGV0ZS5zcG9ydCA9IHNwb3J0XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdGhsZXRlLnNwb3J0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTcGVjaWFsdGllcyh0aGlzLmF0aGxldGUuc3BvcnQuaWQsIChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmZpbHRlcigoc3BlY2lhbHR5KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwZWNpYWx0eS5pZCA9PSBzZWxmLmF0aGxldGUuc3BlY2lhbHR5LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0aGxldGUuc3BlY2lhbHR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNwZWNpYWx0aWVzKFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0aGxldGUuc3BlY2lhbHR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwZWNpYWx0eUNoYW5nZWQoc3BlY2lhbHR5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRobGV0ZS5zcGVjaWFsdHkgPSBzcGVjaWFsdHlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlDaGFuZ2VkKGNhdGVnb3J5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRobGV0ZS5jYXRlZ29yeSA9IGNhdGVnb3J5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvdW50cnlDaGFuZ2VkKGNvdW50cnkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdGhsZXRlLmNvdW50cnkgPSBjb3VudHJ5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdlbmRlckNoYW5nZWQoZ2VuZGVyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXRobGV0ZS5nZW5kZXIgPSBnZW5kZXJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXZlbnRDaGFuZ2VkKGV2ZW50cyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0aGxldGUuZXZlbnRzID0gZXZlbnRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQmFjayhldnQpe1xyXG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F0aGxldGVzLmxpc3QnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGFtcGlvbnNoaXBDaGFuZ2VkKGNoYW1waW9uc2hpcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0aGxldGUuY2hhbXBpb25zaGlwID0gY2hhbXBpb25zaGlwXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXRobGV0ZS5jaGFtcGlvbnNoaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENoYW1waW9uc2hpcEV2ZW50cyh0aGlzLmF0aGxldGUuY2hhbXBpb25zaGlwLmlkLCAoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5maWx0ZXIoKGV2ZW50KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmlkID09IHNlbGYuYXRobGV0ZS5ldmVudC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdGhsZXRlLmV2ZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NvbW1vbjpTRVRfU1BFQ0lBTFRJRVMnLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudC5zcGVjaWFsdHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblN1Ym1pdChldnQpe1xyXG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGUgPSBzZWxmLiRyZWZzLnVwbG9hZGVyLmdldEZpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZmlsZV9waWN0dXJlJywgc2VsZi4kcmVmcy51cGxvYWRlci5nZXRGaWxlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlyc3RfbmFtZScsIHNlbGYuYXRobGV0ZS5maXJzdF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xhc3RfbmFtZScsIHNlbGYuYXRobGV0ZS5sYXN0X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmF0aGxldGUuZmVkZXJhdGlvbl9jb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZlZGVyYXRpb25fY29kZScsIHNlbGYuYXRobGV0ZS5mZWRlcmF0aW9uX2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmF0aGxldGUubmF0aW9uYWxfY29kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYXRpb25hbF9jb2RlJywgc2VsZi5hdGhsZXRlLm5hdGlvbmFsX2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3BvcnRfaWQnLCBzZWxmLmF0aGxldGUuc3BvcnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3BlY2lhbHR5X2lkJywgc2VsZi5hdGhsZXRlLnNwZWNpYWx0eS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeV9pZCcsIHNlbGYuYXRobGV0ZS5jYXRlZ29yeS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb3VudHJ5X2lkJywgc2VsZi5hdGhsZXRlLmNvdW50cnkuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZ2VuZGVyJywgc2VsZi5hdGhsZXRlLmdlbmRlci5nZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmF0aGxldGUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2hlaWdodCcsIHNlbGYuYXRobGV0ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmF0aGxldGUud2VpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3dlaWdodCcsIHNlbGYuYXRobGV0ZS53ZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmF0aGxldGUucmFua2luZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyYW5raW5nJywgc2VsZi5hdGhsZXRlLnJhbmtpbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhdGhsZXRlU2VydmljZS51cGRhdGUoc2VsZi5hdGhsZXRlLmlkLCBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3Quc3VjY2Vzc1RvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F0aGxldGVzLmxpc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2Vycm9yXS5mb3JFYWNoKCh2YWxpZGF0aW9uRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHZhbGlkYXRpb25FcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHJlc3BvbnNlLmVycm9ycylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGJhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KHRoaXMuJHQoJ2FkbWluLnZhbGlkYXRpb25fZXJyb3InKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWRpdC52dWU/ZWY5YTZiY2UiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnYWRtaW4taGVhZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IF92bS4kdCgnYWRtaW4uYXRobGV0ZXMnKSxcbiAgICAgIFwiYnJlYWRjcnVtYnNcIjogX3ZtLmJyZWFkY3J1bWJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiXG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJhdGhsZXRlLWZvcm1cIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhZG1pbi5hdGhsZXRlcycpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2ZpcnN0X25hbWUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJmaXJzdF9uYW1lXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5maXJzdF9uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmF0aGxldGUuZmlyc3RfbmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImF0aGxldGUuZmlyc3RfbmFtZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJmaXJzdF9uYW1lXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJmaXJzdF9uYW1lXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuZmlyc3RfbmFtZScpLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2F0aGxldGVzLmZpcnN0X25hbWUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5hdGhsZXRlLmZpcnN0X25hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uYXRobGV0ZS5maXJzdF9uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2ZpcnN0X25hbWUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2ZpcnN0X25hbWUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdmaXJzdF9uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnbGFzdF9uYW1lJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibGFzdF9uYW1lXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5sYXN0X25hbWUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5hdGhsZXRlLmxhc3RfbmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImF0aGxldGUubGFzdF9uYW1lXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsYXN0X25hbWVcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcImxhc3RfbmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmF0aGxldGUubGFzdF9uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmF0aGxldGUubGFzdF9uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2xhc3RfbmFtZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnbGFzdF9uYW1lJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnbGFzdF9uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnZG5jLWltYWdlLXVwbG9hZGVyJywge1xuICAgIHJlZjogXCJ1cGxvYWRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJ0bi10ZXh0XCI6IF92bS4kdCgnYXRobGV0ZXMudXBsb2FkX2ltYWdlJyksXG4gICAgICBcImVycm9yLXZhbGlkYXRpb24tbXNnXCI6IF92bS4kdCgndmFsaWRhdGlvbi5pbWFnZScsIHtcbiAgICAgICAgYXR0cmlidXRlOiBfdm0uJHQoJ2F0aGxldGVzLnVwbG9hZF9pbWFnZScpXG4gICAgICB9KSxcbiAgICAgIFwiaW1hZ2VcIjogX3ZtLmF0aGxldGUuaW1hZ2UsXG4gICAgICBcImRlZmF1bHQtaW1hZ2VcIjogXCIvaW1hZ2VzL21pc3NpbmcvYXRobGV0ZS9taXNzaW5nLnBuZ1wiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZmVkZXJhdGlvbl9jb2RlXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5mZWRlcmF0aW9uX2NvZGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oMiksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5hdGhsZXRlLmZlZGVyYXRpb25fY29kZSksXG4gICAgICBleHByZXNzaW9uOiBcImF0aGxldGUuZmVkZXJhdGlvbl9jb2RlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImZlZGVyYXRpb25fY29kZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmVkZXJhdGlvbl9jb2RlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuZmVkZXJhdGlvbl9jb2RlJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uYXRobGV0ZS5mZWRlcmF0aW9uX2NvZGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uYXRobGV0ZS5mZWRlcmF0aW9uX2NvZGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuYXRpb25hbF9jb2RlXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5uYXRpb25hbF9jb2RlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDMpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uYXRobGV0ZS5uYXRpb25hbF9jb2RlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXRobGV0ZS5uYXRpb25hbF9jb2RlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5hdGlvbmFsX2NvZGVcIixcbiAgICAgIFwibmFtZVwiOiBcIm5hdGlvbmFsX2NvZGVcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy5uYXRpb25hbF9jb2RlJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uYXRobGV0ZS5uYXRpb25hbF9jb2RlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmF0aGxldGUubmF0aW9uYWxfY29kZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3Nwb3J0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BvcnRzXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5zcG9ydCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5hdGhsZXRlLnNwb3J0LFxuICAgICAgXCJsYWJlbFwiOiBcIm5hbWVcIixcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5zcG9ydENoYW5nZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5zcG9ydHNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uYXRobGV0ZS5zcG9ydCksXG4gICAgICBleHByZXNzaW9uOiBcImF0aGxldGUuc3BvcnRcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInNwb3J0X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcInNwb3J0XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnYXRobGV0ZXMuc3BvcnQnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5hdGhsZXRlLnNwb3J0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmF0aGxldGUuc3BvcnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3Nwb3J0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdzcG9ydCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3Nwb3J0JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdzcGVjaWFsdHknKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJzcG9ydHNcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLnNwZWNpYWx0eScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5hdGhsZXRlLnNwZWNpYWx0eSxcbiAgICAgIFwibGFiZWxcIjogXCJuYW1lXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLnNwZWNpYWx0eUNoYW5nZWQsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnNwZWNpYWx0aWVzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmF0aGxldGUuc3BlY2lhbHR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXRobGV0ZS5zcGVjaWFsdHlcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInNwZWNpYWx0eV9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJzcGVjaWFsdHlcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5zcGVjaWFsdHknKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5hdGhsZXRlLnNwZWNpYWx0eSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5hdGhsZXRlLnNwZWNpYWx0eSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnc3BlY2lhbHR5JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdzcGVjaWFsdHknKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdzcGVjaWFsdHknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnY2F0ZWdvcnknKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJzcG9ydHNcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLmNhdGVnb3J5JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmF0aGxldGUuY2F0ZWdvcnksXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jYXRlZ29yeUNoYW5nZWQsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmNhdGVnb3JpZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uYXRobGV0ZS5jYXRlZ29yeSksXG4gICAgICBleHByZXNzaW9uOiBcImF0aGxldGUuY2F0ZWdvcnlcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNhdGVnb3J5X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNhdGVnb3J5XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnYXRobGV0ZXMuY2F0ZWdvcnknKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5hdGhsZXRlLmNhdGVnb3J5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmF0aGxldGUuY2F0ZWdvcnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2NhdGVnb3J5JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdjYXRlZ29yeScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2NhdGVnb3J5JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdjb3VudHJ5JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BvcnRzXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5jb3VudHJ5JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmF0aGxldGUuY291bnRyeSxcbiAgICAgIFwibGFiZWxcIjogXCJuYW1lXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY291bnRyeUNoYW5nZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5jb3VudHJpZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uYXRobGV0ZS5jb3VudHJ5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXRobGV0ZS5jb3VudHJ5XCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjb3VudHJ5X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNvdW50cnlcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5jb3VudHJ5JylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uYXRobGV0ZS5jb3VudHJ5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmF0aGxldGUuY291bnRyeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnY291bnRyeScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnY291bnRyeScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2NvdW50cnknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZ2VuZGVyJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BvcnRzXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5nZW5kZXInKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd2LXNlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uYXRobGV0ZS5nZW5kZXIsXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5nZW5kZXJDaGFuZ2VkLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5nZW5kZXJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmF0aGxldGUuZ2VuZGVyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXRobGV0ZS5nZW5kZXJcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImdlbmRlcl9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJnZW5kZXJcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5nZW5kZXInKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5hdGhsZXRlLmdlbmRlcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5hdGhsZXRlLmdlbmRlciA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZ2VuZGVyJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdnZW5kZXInKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdnZW5kZXInKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJoZWlnaHRcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLmhlaWdodCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oNCksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5hdGhsZXRlLmhlaWdodCksXG4gICAgICBleHByZXNzaW9uOiBcImF0aGxldGUuaGVpZ2h0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImhlaWdodFwiLFxuICAgICAgXCJuYW1lXCI6IFwiaGVpZ2h0XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuaGVpZ2h0JyksXG4gICAgICBcImZpZWxkXCI6IFwiaGVpZ2h0XCIsXG4gICAgICBcImluaXRpYWxcIjogXCJvZmZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5hdGhsZXRlLmhlaWdodClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5hdGhsZXRlLmhlaWdodCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIndlaWdodFwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMud2VpZ2h0JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSg1KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmF0aGxldGUud2VpZ2h0KSxcbiAgICAgIGV4cHJlc3Npb246IFwiYXRobGV0ZS53ZWlnaHRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwid2VpZ2h0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ3ZWlnaHRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy53ZWlnaHQnKSxcbiAgICAgIFwiZmllbGRcIjogXCJ3ZWlnaHRcIixcbiAgICAgIFwiaW5pdGlhbFwiOiBcIm9mZlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmF0aGxldGUud2VpZ2h0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmF0aGxldGUud2VpZ2h0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJyYW5raW5nXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5yYW5raW5nJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSg2KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmF0aGxldGUucmFua2luZyksXG4gICAgICBleHByZXNzaW9uOiBcImF0aGxldGUucmFua2luZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJyYW5raW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJyYW5raW5nXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMucmFua2luZycpLFxuICAgICAgXCJmaWVsZFwiOiBcInJhbmtpbmdcIixcbiAgICAgIFwiaW5pdGlhbFwiOiBcIm9mZlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmF0aGxldGUucmFua2luZylcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5hdGhsZXRlLnJhbmtpbmcgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uQmFja1xuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Zvcm1zLmJhY2snKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnZGlzYWJsZWQnOiBfdm0udXBkYXRpbmdcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwiaHJlZlwiOiBcIiMhXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vblN1Ym1pdFxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Zvcm1zLnNhdmUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKV0pXSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2VyXCJcbiAgfSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlclwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNyZWRpdC1jYXJkXCJcbiAgfSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY3JlZGl0LWNhcmRcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hcnJvd3MtdlwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRhY2hvbWV0ZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zaWduYWxcIlxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjMyZmY4OGRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTIzMmZmODhkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2F0aGxldGVzL2VkaXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzOThcbi8vIG1vZHVsZSBjaHVua3MgPSA0NCJdLCJzb3VyY2VSb290IjoiIn0=