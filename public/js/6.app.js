webpackJsonp([6,31],{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(419)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(272),
  /* template */
  __webpack_require__(382),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\championships\\create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ba4b13f", Component.options)
  } else {
    hotAPI.reload("data-v-1ba4b13f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 196:
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(200)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(199),
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

/***/ 199:
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
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

/***/ 201:
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

var _pointerScroll = __webpack_require__(204);

var _pointerScroll2 = _interopRequireDefault(_pointerScroll);

var _typeAheadPointer = __webpack_require__(205);

var _typeAheadPointer2 = _interopRequireDefault(_typeAheadPointer);

var _ajax = __webpack_require__(202);

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

/***/ 202:
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

/***/ 203:
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

/***/ 204:
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

/***/ 205:
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

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.v-select {\n    position: relative;\n}\n.v-select .open-indicator {\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    pointer-events: all;\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    opacity: 1;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .open-indicator {\n    opacity: 0;\n}\n.v-select .open-indicator:before {\n    border-color: rgba(60, 60, 60, .5);\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    vertical-align: top;\n    -webkit-transform: rotate(133deg);\n            transform: rotate(133deg);\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n}\n.v-select.open .open-indicator {\n    bottom: 1px;\n}\n.v-select.open .open-indicator:before {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n}\n.v-select .dropdown-toggle {\n    display: block;\n    padding: 0;\n    background: none;\n    border: 1px solid rgba(60, 60, 60, .26);\n    border-radius: 4px;\n    white-space: normal;\n}\n.v-select.searchable .dropdown-toggle {\n    cursor: text;\n}\n.v-select.open .dropdown-toggle {\n    border-bottom: none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.v-select > .dropdown-menu {\n    margin: 0;\n    width: 100%;\n    overflow-y: scroll;\n    border-top: none;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.v-select .selected-tag {\n    color: #333;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 26px;\n    margin: 4px 1px 0px 3px;\n    padding: 0 0.25em;\n    float: left;\n    line-height: 1.7em;\n}\n.v-select .selected-tag .close {\n    float: none;\n    margin-right: 0;\n    font-size: 20px;\n}\n.v-select input[type=search],\n.v-select input[type=search]:focus {\n    display: inline-block;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0 .5em;\n    width: 10em;\n    max-width: 100%;\n    background: none;\n    position: relative;\n    box-shadow: none;\n    float: left;\n    clear: none;\n}\n.v-select input[type=search]:disabled {\n    cursor: pointer;\n}\n.v-select li a {\n    cursor: pointer;\n}\n.v-select .active a {\n    background: rgba(50, 50, 50, .1);\n    color: #333;\n}\n.v-select .highlight a,\n.v-select li:hover > a {\n    background: #f0f0f0;\n    color: #333;\n}\n.v-select .spinner {\n    opacity: 0;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 5px;\n    text-indent: -9999em;\n    overflow: hidden;\n    border-top: .9em solid rgba(100, 100, 100, .1);\n    border-right: .9em solid rgba(100, 100, 100, .1);\n    border-bottom: .9em solid rgba(100, 100, 100, .1);\n    border-left: .9em solid rgba(60, 60, 60, .45);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-animation: vSelectSpinner 1.1s infinite linear;\n            animation: vSelectSpinner 1.1s infinite linear;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .spinner {\n    opacity: 1;\n}\n.v-select .spinner,\n.v-select .spinner:after {\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n}\n@-webkit-keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/forms/select/select.vue?02883ea5"],"names":[],"mappings":";AACA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;IACA,gBAAA;IACA,oBAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;IACA,WAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,mCAAA;IACA,oBAAA;IACA,gCAAA;IACA,YAAA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,oBAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,WAAA;IACA,iBAAA;IACA,wCAAA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,oBAAA;IACA,6BAAA;IACA,8BAAA;CACA;AAEA;IACA,UAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;IACA,2BAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;;IAEA,sBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,iCAAA;IACA,YAAA;CACA;AAEA;;IAEA,oBAAA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,mBAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,qBAAA;IACA,iBAAA;IACA,+CAAA;IACA,iDAAA;IACA,kDAAA;IACA,8CAAA;IACA,iCAAA;YAAA,yBAAA;IACA,uDAAA;YAAA,+CAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,mBAAA;IACA,WAAA;IACA,YAAA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA","file":"select.vue","sourcesContent":["<style>\r\n    .v-select {\r\n        position: relative;\r\n    }\r\n\r\n    .v-select .open-indicator {\r\n        position: absolute;\r\n        bottom: 6px;\r\n        right: 10px;\r\n        display: inline-block;\r\n        cursor: pointer;\r\n        pointer-events: all;\r\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        opacity: 1;\r\n        transition: opacity .1s;\r\n    }\r\n\r\n    .v-select.loading .open-indicator {\r\n        opacity: 0;\r\n    }\r\n\r\n    .v-select .open-indicator:before {\r\n        border-color: rgba(60, 60, 60, .5);\r\n        border-style: solid;\r\n        border-width: 0.25em 0.25em 0 0;\r\n        content: '';\r\n        display: inline-block;\r\n        height: 10px;\r\n        width: 10px;\r\n        vertical-align: top;\r\n        transform: rotate(133deg);\r\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n    }\r\n\r\n    .v-select.open .open-indicator {\r\n        bottom: 1px;\r\n    }\r\n\r\n    .v-select.open .open-indicator:before {\r\n        transform: rotate(315deg);\r\n    }\r\n\r\n    .v-select .dropdown-toggle {\r\n        display: block;\r\n        padding: 0;\r\n        background: none;\r\n        border: 1px solid rgba(60, 60, 60, .26);\r\n        border-radius: 4px;\r\n        white-space: normal;\r\n    }\r\n\r\n    .v-select.searchable .dropdown-toggle {\r\n        cursor: text;\r\n    }\r\n\r\n    .v-select.open .dropdown-toggle {\r\n        border-bottom: none;\r\n        border-bottom-left-radius: 0;\r\n        border-bottom-right-radius: 0;\r\n    }\r\n\r\n    .v-select > .dropdown-menu {\r\n        margin: 0;\r\n        width: 100%;\r\n        overflow-y: scroll;\r\n        border-top: none;\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n    }\r\n\r\n    .v-select .selected-tag {\r\n        color: #333;\r\n        background-color: #f0f0f0;\r\n        border: 1px solid #ccc;\r\n        border-radius: 4px;\r\n        height: 26px;\r\n        margin: 4px 1px 0px 3px;\r\n        padding: 0 0.25em;\r\n        float: left;\r\n        line-height: 1.7em;\r\n    }\r\n\r\n    .v-select .selected-tag .close {\r\n        float: none;\r\n        margin-right: 0;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .v-select input[type=search],\r\n    .v-select input[type=search]:focus {\r\n        display: inline-block;\r\n        border: none;\r\n        outline: none;\r\n        margin: 0;\r\n        padding: 0 .5em;\r\n        width: 10em;\r\n        max-width: 100%;\r\n        background: none;\r\n        position: relative;\r\n        box-shadow: none;\r\n        float: left;\r\n        clear: none;\r\n    }\r\n\r\n    .v-select input[type=search]:disabled {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .v-select li a {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .v-select .active a {\r\n        background: rgba(50, 50, 50, .1);\r\n        color: #333;\r\n    }\r\n\r\n    .v-select .highlight a,\r\n    .v-select li:hover > a {\r\n        background: #f0f0f0;\r\n        color: #333;\r\n    }\r\n\r\n    .v-select .spinner {\r\n        opacity: 0;\r\n        position: absolute;\r\n        top: 5px;\r\n        right: 10px;\r\n        font-size: 5px;\r\n        text-indent: -9999em;\r\n        overflow: hidden;\r\n        border-top: .9em solid rgba(100, 100, 100, .1);\r\n        border-right: .9em solid rgba(100, 100, 100, .1);\r\n        border-bottom: .9em solid rgba(100, 100, 100, .1);\r\n        border-left: .9em solid rgba(60, 60, 60, .45);\r\n        transform: translateZ(0);\r\n        animation: vSelectSpinner 1.1s infinite linear;\r\n        transition: opacity .1s;\r\n    }\r\n\r\n    .v-select.loading .spinner {\r\n        opacity: 1;\r\n    }\r\n\r\n    .v-select .spinner,\r\n    .v-select .spinner:after {\r\n        border-radius: 50%;\r\n        width: 5em;\r\n        height: 5em;\r\n    }\r\n\r\n    @-webkit-keyframes vSelectSpinner {\r\n        0% {\r\n            transform: rotate(0deg);\r\n        }\r\n        100% {\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n\r\n    @keyframes vSelectSpinner {\r\n        0% {\r\n            transform: rotate(0deg);\r\n        }\r\n        100% {\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n</style>\r\n\r\n<template>\r\n    <div class=\"dropdown v-select\" :class=\"dropdownClasses\">\r\n        <div ref=\"toggle\" @mousedown.prevent=\"toggleDropdown\" class=\"dropdown-toggle clearfix\" type=\"button\">\r\n        <span class=\"form-control\" v-if=\"!searchable && isValueEmpty\">\r\n          {{ placeholder }}\r\n        </span>\r\n\r\n            <span class=\"selected-tag\" v-for=\"(option,index) in valueAsArray\" v-bind:key=\"index\">\r\n          {{ getOptionLabel(option) }}\r\n          <button v-if=\"multiple\" @click=\"select(option)\" type=\"button\" class=\"close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </span>\r\n\r\n            <input\r\n                    ref=\"search\"\r\n                    :debounce=\"debounce\"\r\n                    v-model=\"search\"\r\n                    v-show=\"searchable\"\r\n                    @keydown.delete=\"maybeDeleteValue\"\r\n                    @keyup.esc=\"onEscape\"\r\n                    @keydown.up.prevent=\"typeAheadUp\"\r\n                    @keydown.down.prevent=\"typeAheadDown\"\r\n                    @keyup.enter.prevent=\"typeAheadSelect\"\r\n                    @blur=\"open = false\"\r\n                    @focus=\"open = true\"\r\n                    type=\"search\"\r\n                    class=\"form-control\"\r\n                    :placeholder=\"searchPlaceholder\"\r\n                    :style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"\r\n            >\r\n\r\n            <i ref=\"openIndicator\" role=\"presentation\" class=\"open-indicator\"></i>\r\n\r\n            <slot name=\"spinner\">\r\n                <div class=\"spinner\" v-show=\"loading\">Loading...</div>\r\n            </slot>\r\n        </div>\r\n\r\n        <ul ref=\"dropdownMenu\" v-show=\"open\" :transition=\"transition\" class=\"dropdown-menu\"\r\n            :style=\"{ 'max-height': maxHeight }\">\r\n            <li v-for=\"(option,index) in filteredOptions\" v-bind:key=\"index\"\r\n                :class=\"{ active: isOptionSelected(option), highlight: index === typeAheadPointer }\"\r\n                @mouseover=\"typeAheadPointer = index\">\r\n                <a @mousedown.prevent=\"select(option)\">\r\n                    {{ getOptionLabel(option) }}\r\n                </a>\r\n            </li>\r\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"divider\"></li>\r\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"text-center\">\r\n                <slot name=\"no-options\">Sorry, no matching options.</slot>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</template>\r\n\r\n\r\n<script type=\"text/babel\">\r\n    import pointerScroll from 'base/mixins/pointerScroll'\r\n    import typeAheadPointer from 'base/mixins/typeAheadPointer'\r\n    import ajax from 'base/mixins/ajax'\r\n\r\n    export default {\r\n        mixins: [pointerScroll, typeAheadPointer, ajax],\r\n\r\n        props: {\r\n            /**\r\n             * Contains the currently selected value. Very similar to a\r\n             * `value` attribute on an <input>. In most cases, you'll want\r\n             * to set this as a two-way binding, using :value.sync. However,\r\n             * this will not work with Vuex, in which case you'll need to use\r\n             * the onChange callback property.\r\n             * @type {Object||String||null}\r\n             */\r\n            value: {\r\n                default: null\r\n            },\r\n\r\n            /**\r\n             * An array of strings or objects to be used as dropdown choices.\r\n             * If you are using an array of objects, vue-select will look for\r\n             * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\r\n             * custom label key can be set with the `label` prop.\r\n             * @type {Object}\r\n             */\r\n            options: {\r\n                type: Array,\r\n                default() {\r\n                    return []\r\n                },\r\n            },\r\n\r\n            /**\r\n             * Sets the max-height property on the dropdown list.\r\n             * @deprecated\r\n             * @type {String}\r\n             */\r\n            maxHeight: {\r\n                type: String,\r\n                default: '400px'\r\n            },\r\n\r\n            /**\r\n             * Enable/disable filtering the options.\r\n             * @type {Boolean}\r\n             */\r\n            searchable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            /**\r\n             * Equivalent to the `multiple` attribute on a `<select>` input.\r\n             * @type {Object}\r\n             */\r\n            multiple: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * Equivalent to the `placeholder` attribute on an `<input>`.\r\n             * @type {Object}\r\n             */\r\n            placeholder: {\r\n                type: String,\r\n                default: ''\r\n            },\r\n\r\n            /**\r\n             * Sets a Vue transition property on the `.dropdown-menu`. vue-select\r\n             * does not include CSS for transitions, you'll need to add them yourself.\r\n             * @type {String}\r\n             */\r\n            transition: {\r\n                type: String,\r\n                default: 'expand'\r\n            },\r\n\r\n            /**\r\n             * Enables/disables clearing the search text when an option is selected.\r\n             * @type {Boolean}\r\n             */\r\n            clearSearchOnSelect: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            /**\r\n             * Tells vue-select what key to use when generating option\r\n             * labels when each `option` is an object.\r\n             * @type {String}\r\n             */\r\n            label: {\r\n                type: String,\r\n                default: 'label'\r\n            },\r\n\r\n            /**\r\n             * Callback to generate the label text. If {option}\r\n             * is an object, returns option[this.label] by default.\r\n             * @param  {Object || String} option\r\n             * @return {String}\r\n             */\r\n            getOptionLabel: {\r\n                type: Function,\r\n                default(option) {\r\n                    if (typeof option === 'object') {\r\n                        if (this.label && option[this.label]) {\r\n                            return option[this.label]\r\n                        }\r\n                    }\r\n                    return option;\r\n                }\r\n            },\r\n\r\n            /**\r\n             * An optional callback function that is called each time the selected\r\n             * value(s) change. When integrating with Vuex, use this callback to trigger\r\n             * an action, rather than using :value.sync to retreive the selected value.\r\n             * @type {Function}\r\n             * @default {null}\r\n             */\r\n            onChange: Function,\r\n            changeParam: {},\r\n\r\n            /**\r\n             * Enable/disable creating options from searchInput.\r\n             * @type {Boolean}\r\n             */\r\n            taggable: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * When true, newly created tags will be added to\r\n             * the options list.\r\n             * @type {Boolean}\r\n             */\r\n            pushTags: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * User defined function for adding Options\r\n             * @type {Function}\r\n             */\r\n            createOption: {\r\n                type: Function,\r\n                default: function (newOption) {\r\n                    if (typeof this.options[0] === 'object') {\r\n                        return {[this.label]: newOption}\r\n                    }\r\n                    return newOption\r\n                }\r\n            },\r\n\r\n            /**\r\n             * When false, updating the options will not reset the select value\r\n             * @type {Boolean}\r\n             */\r\n            resetOnOptionsChange: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n        },\r\n\r\n        data() {\r\n            return {\r\n                search: '',\r\n                open: false,\r\n                selection: null\r\n            }\r\n        },\r\n\r\n        watch: {\r\n            value(val, old) {\r\n                this.selection = val\r\n            },\r\n            selection(val, old) {\r\n                if (this.multiple) {\r\n                    this.onChange ? this.onChange(val, this.changeParam) : null\r\n                } else {\r\n                    this.onChange && val !== old ? this.onChange(val, this.changeParam) : null\r\n                }\r\n            },\r\n            options() {\r\n                if (!this.taggable && this.resetOnOptionsChange) {\r\n                    this.selection = this.multiple ? [] : null\r\n                }\r\n            },\r\n            multiple(val) {\r\n                this.selection = val ? [] : null\r\n            }\r\n        },\r\n\r\n        methods: {\r\n\r\n            /**\r\n             * Select a given option.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            select(option) {\r\n                if (this.isOptionSelected(option)) {\r\n                    this.deselect(option)\r\n                } else {\r\n                    if (this.taggable && !this.optionExists(option)) {\r\n                        option = this.createOption(option)\r\n\r\n                        if (this.pushTags) {\r\n                            this.options.push(option)\r\n                        }\r\n                    }\r\n\r\n                    if (this.multiple) {\r\n                        if (!this.selection) {\r\n                            this.selection = [option]\r\n                        } else {\r\n                            this.selection.push(option)\r\n                        }\r\n                    } else {\r\n                        this.selection = option\r\n                    }\r\n                }\r\n\r\n                this.onAfterSelect(option)\r\n            },\r\n\r\n            /**\r\n             * De-select a given option.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            deselect(option) {\r\n                if (this.multiple) {\r\n                    let ref = -1\r\n                    this.selection.forEach((val) => {\r\n                        if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {\r\n                            ref = val\r\n                        }\r\n                    })\r\n                    var index = this.selection.indexOf(ref);\r\n                    this.selection.splice(index, 1)\r\n\r\n                } else {\r\n                    this.selection = null\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Called from this.select after each selection.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            onAfterSelect(option) {\r\n                if (!this.multiple) {\r\n                    this.open = !this.open\r\n                    this.$refs.search.blur()\r\n                }\r\n\r\n                if (this.clearSearchOnSelect) {\r\n                    this.search = ''\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Toggle the visibility of the dropdown menu.\r\n             * @param  {Event} e\r\n             * @return {void}\r\n             */\r\n            toggleDropdown(e) {\r\n                if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {\r\n                    if (this.open) {\r\n                        this.$refs.search.blur() // dropdown will close on blur\r\n                    } else {\r\n                        this.open = true\r\n                        this.$refs.search.focus()\r\n                    }\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Check if the given option is currently selected.\r\n             * @param  {Object||String}  option\r\n             * @return {Boolean}         True when selected || False otherwise\r\n             */\r\n            isOptionSelected(option) {\r\n                if (this.multiple && this.selection) {\r\n                    let selected = false\r\n                    this.value.forEach(opt => {\r\n                        if (typeof opt === 'object' && opt[this.label] === option[this.label]) {\r\n                            selected = true\r\n                        } else if (opt === option) {\r\n                            selected = true\r\n                        }\r\n                    })\r\n                    return selected\r\n                }\r\n\r\n                return this.selection === option\r\n            },\r\n\r\n            /**\r\n             * If there is any text in the search input, remove it.\r\n             * Otherwise, blur the search input to close the dropdown.\r\n             * @return {[type]} [description]\r\n             */\r\n            onEscape() {\r\n                if (!this.search.length) {\r\n                    this.$refs.search.blur()\r\n                } else {\r\n                    this.search = ''\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Delete the value on Delete keypress when there is no\r\n             * text in the search input, & there's tags to delete\r\n             * @return {this.value}\r\n             */\r\n            maybeDeleteValue() {\r\n                if (!this.$refs.search.value.length && this.value) {\r\n                    return this.multiple ? this.value.pop() : this.selection = null\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Determine if an option exists\r\n             * within this.options array.\r\n             *\r\n             * @param  {Object || String} option\r\n             * @return {boolean}\r\n             */\r\n            optionExists(option) {\r\n                let exists = false\r\n\r\n                this.options.forEach(opt => {\r\n                    if (typeof opt === 'object' && opt[this.label] === option) {\r\n                        exists = true\r\n                    } else if (opt === option) {\r\n                        exists = true\r\n                    }\r\n                })\r\n\r\n                return exists\r\n            }\r\n        },\r\n\r\n        computed: {\r\n\r\n            /**\r\n             * Classes to be output on .dropdown\r\n             * @return {Object}\r\n             */\r\n            dropdownClasses() {\r\n                return {\r\n                    open: this.open,\r\n                    searchable: this.searchable,\r\n                    loading: this.loading\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Return the placeholder string if it's set\r\n             * & there is no value selected.\r\n             * @return {String} Placeholder text\r\n             */\r\n            searchPlaceholder() {\r\n                if (this.isValueEmpty && this.placeholder) {\r\n                    return this.placeholder;\r\n                }\r\n            },\r\n\r\n            /**\r\n             * The currently displayed options, filtered\r\n             * by the search elements value. If tagging\r\n             * true, the search text will be prepended\r\n             * if it doesn't already exist.\r\n             *\r\n             * @return {array}\r\n             */\r\n            filteredOptions() {\r\n                let self = this;\r\n                let options = this.options.filter(function (option) {\r\n                    return option[self.label].indexOf(self.search) !== -1\r\n                })\r\n                if (this.taggable && this.search.length && !this.optionExists(this.search)) {\r\n                    options.unshift(this.search)\r\n                }\r\n                return options\r\n            },\r\n\r\n            /**\r\n             * Check if there aren't any options selected.\r\n             * @return {Boolean}\r\n             */\r\n            isValueEmpty() {\r\n                if (this.selection) {\r\n                    if (typeof this.selection === 'object') {\r\n                        return !Object.keys(this.selection).length\r\n                    }\r\n                    return !this.selection.length\r\n                }\r\n\r\n                return true;\r\n            },\r\n\r\n            /**\r\n             * Return the current value in array format.\r\n             * @return {Array}\r\n             */\r\n            valueAsArray() {\r\n                if (this.multiple) {\r\n                    return this.selection\r\n                } else if (this.selection) {\r\n                    return [this.selection]\r\n                }\r\n\r\n                return []\r\n            }\r\n        }\r\n\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(209)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(201),
  /* template */
  __webpack_require__(208),
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

/***/ 208:
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

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
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

/***/ 212:
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

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.inputfile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.inputfile + label {\n    width: auto !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/upload/dnc-image-upload.vue?64c5c425"],"names":[],"mappings":";AAaA;IACA,aAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,uBAAA;CACA","file":"dnc-image-upload.vue","sourcesContent":["<template>\r\n    <div>\r\n        <img :src=\"defaultImage\" alt=\"athlete profile image\" width=\"110px\" v-if=\"!imageFile\">\r\n        <img :src=\"imageFile\" alt=\"athlete profile image\" width=\"110px\" v-if=\"imageFile\">\r\n\r\n        <br><br>\r\n        <input type=\"file\" name=\"file\" id=\"image-uploader\" class=\"inputfile\" @change=\"onFileChange\"\r\n               ref=\"fileinput\"/>\r\n        <label for=\"image-uploader\" class=\"btn btn-primary\"><i class=\"fa fa-cloud\"></i>\r\n            <span>{{btnText}}</span></label>\r\n    </div>\r\n</template>\r\n<style>\r\n    .inputfile {\r\n        width: 0.1px;\r\n        height: 0.1px;\r\n        opacity: 0;\r\n        overflow: hidden;\r\n        position: absolute;\r\n        z-index: -1;\r\n    }\r\n\r\n    .inputfile + label {\r\n        width: auto !important;\r\n    }\r\n</style>\r\n<script type=\"text/babel\">\r\n\r\n    export default{\r\n        props: {\r\n            value: {},\r\n            acceptedFiles: {\r\n                type: String,\r\n                default: 'image/*'\r\n            },\r\n            btnText: {},\r\n            errorValidationMsg: {},\r\n            width: {\r\n                type: Number,\r\n                default: 110\r\n            },\r\n            image: {},\r\n            defaultImage: {}\r\n        },\r\n        watch: {\r\n            image: function (val) {\r\n                this.imageFile = val;\r\n            }\r\n        },\r\n        data(){\r\n            return {\r\n                imageFile: null\r\n            }\r\n        },\r\n        methods: {\r\n            onFileChange(e){\r\n                var files = e.target.files || e.dataTransfer.files;\r\n                if (!files.length)\r\n                    return;\r\n                this.createImage(files[0]);\r\n            },\r\n            createImage(file) {\r\n                if (!file.type.match(this.acceptedFiles)) {\r\n                    document.getElementById(\"image-uploader\").value = \"\";\r\n                    this.$root.warningToast(this.errorValidationMsg);\r\n                    this.imageFile = this.defaultImage\r\n                    return;\r\n                }\r\n                var reader = new FileReader();\r\n                var vm = this;\r\n                reader.onload = (e) => {\r\n                    vm.imageFile = e.target.result;\r\n                };\r\n                reader.readAsDataURL(file)\r\n            },\r\n            getFile(){\r\n                return this.$refs.fileinput.files[0];\r\n            }\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(220)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(219),
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

/***/ 219:
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

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(213);
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

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

/**
 * The array of names of the tooltip messages of the datetime picker.
 *
 * This is a constant and should not be modified.
 */
var DATETIME_PICKER_TOOLTIPS = ["today", "clear", "close", "selectMonth", "prevMonth", "nextMonth", "selectYear", "prevYear", "nextYear", "selectDecade", "prevDecade", "nextDecade", "prevCentury", "nextCentury", "pickHour", "incrementHour", "decrementHour", "pickMinute", "incrementMinute", "decrementMinute", "pickSecond", "incrementSecond", "decrementSecond", "togglePeriod", "selectTime"];

/**
 * The default language used by this component.
 */
var DEFAULT_LANGUAGE = "en-US";

/**
 * A datetime picker control.
 *
 * @param model
 *    the model bind to the control, which must be a two way binding variable.
 * @param type
 *    the optional type of this datetime picker control. Available values are
 *    - "datetime": Indicating that this control is a datetime picker,
 *    - "date": Indicating that this control is a date picker,
 *    - "time": Indicating that this control is a time picker.
 *    Default value is "datetime".
 * @param language
 *    the optional language code used to localize the control, which must be
 *    a valid language code supported by the moment.js library. If it is not set,
 *    and the [vue-i18n](https://github.com/Haixing-Hu/vue-i18n) plugin is used,
 *    the component will use the language code `$language` provided by the
 *    [vue-i18n](https://github.com/Haixing-Hu/vue-i18n) plugin; otherwise, the
 *    component will use the default value "en-US".
 * @param datetimeFormat
 *    the optional format of the datetime this component should display, which
 *    must be a valid datetime format of the moment.js library. This property
 *    only works when the "type" property is "datetime". Default value is
 *    "YYYY-MM-DD HH:mm:ss".
 * @param dateFormat
 *    the optional format of the date this component should display, which
 *    must be a valid datetime format of the moment.js library. This property
 *    only works when the "type" property is "date". Default value is
 *    "YYYY-MM-DD".
 * @param timeFormat
 *    the optional format of the time this component should display, which
 *    must be a valid datetime format of the moment.js library. This property
 *    only works when the "type" property is "time". Default value is
 *    "HH:mm:ss".
 * @param name
 *    the optional name of the selection control.
 * @param onChange
 *    the optional event handler triggered when the value of the datetime picker
 *    was changed. If this parameter is presented and is not null, it must be a
 *    function which accept one argument: the new date time, which is a moment
 *    object.
 */

module.exports = {
    replace: true,
    inherit: false,
    template: "<div class='input-group date'>" + "<input class='form-control' :name='name' type='text' />" + "<span class='input-group-addon'>" + "<i class='fa fa-fw fa-calendar'></i>" + "</span>" + "</div>",
    props: {
        model: {
            required: true
        },
        type: {
            type: String,
            required: false,
            default: "datetime"
        },
        language: {
            type: String,
            required: false,
            default: ""
        },
        datetimeFormat: {
            type: String,
            required: false,
            default: "YYYY-MM-DD HH:mm:ss"
        },
        dateFormat: {
            type: String,
            required: false,
            default: "YYYY-MM-DD"
        },
        timeFormat: {
            type: String,
            required: false,
            default: "HH:mm:ss"
        },
        name: {
            type: String,
            required: false,
            default: ""
        },
        onChange: {
            required: false,
            default: null
        }
    },
    data: function data() {
        return {
            date: null
        };
    },

    created: function created() {
        this.isChanging = false;
        this.control = null;
    },
    mounted: function mounted() {
        // console.debug("datetime-picker.ready");
        var options = {
            useCurrent: false,
            showClear: true,
            showClose: false,
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-dot-circle-o',
                clear: 'fa fa-trash',
                close: 'fa fa-times'
            }
        };
        // set the locale
        var language = this.language;
        if (language === null || language === "") {
            if (this.$language) {
                language = this.$language;
            } else {
                langauge = DEFAULT_LANGUAGE;
            }
        }
        options.locale = this.getLanguageCode(language);
        // set the format
        switch (this.type) {
            case "date":
                options.format = this.dateFormat;
                break;
            case "time":
                options.format = this.timeFormat;
                break;
            case "datetime":
            default:
                options.format = this.datetimeFormat;
                break;
        }
        // use the vue-i18n plugin for localize the tooltips
        if (this.$i18n && this.$i18n.datetime_picker) {
            var messages = this.$i18n.datetime_picker;
            var tooltips = $.fn.datetimepicker.defaults.tooltips;
            for (var i = 0; i < DATETIME_PICKER_TOOLTIPS.length; ++i) {
                var name = DATETIME_PICKER_TOOLTIPS[i];
                if (messages[name]) {
                    tooltips[name] = messages[name]; // localize
                }
            }
            options.tooltips = tooltips;
        }
        // create the control
        this.$nextTick(function () {
            $(this.$el).datetimepicker(options);
            this.control = $(this.$el).data("DateTimePicker");
            // set the date to the current value of the model
            this.control.date(this.model);
            var me = this;
            $(this.$el).on("dp.change", function () {
                if (!me.isChanging) {
                    me.isChanging = true;
                    me.date = me.control.date();
                    me.$nextTick(function () {
                        me.isChanging = false;
                        if (me.onChange) {
                            me.onChange(me.date);
                        }
                    });
                }
            });
        });
    },
    watch: {
        "model": function model(val, oldVal) {
            if (!this.isChanging) {
                this.isChanging = true;
                this.control.date(val);
                this.isChanging = false;
                if (this.onChange) {
                    this.onChange(val);
                }
            }
        }
    },
    methods: {
        /**
         * Gets the language code from the "language-country" locale code.
         *
         * The function will strip the language code before the first "-" of a
         * locale code. For example, pass "en-US" will returns "en". But for some
         * special locales, the function reserves the locale code. For example,
         * the "zh-CN" for the simplified Chinese and the "zh-TW" for the
         * traditional Chinese.
         *
         * @param locale
         *    A locale code.
         * @return
         *    the language code of the locale.
         */
        getLanguageCode: function getLanguageCode(locale) {
            if (locale === null || locale.length === 0) {
                return "en";
            }
            if (locale.length <= 2) {
                return locale;
            } else {
                switch (locale) {
                    case "zh-CN":
                    case "zh-TW":
                    case "ar-MA":
                    case "ar-SA":
                    case "ar-TN":
                    case "de-AT":
                    case "en-AU":
                    case "en-CA":
                    case "en-GB":
                    case "fr-CA":
                    case "hy-AM":
                    case "ms-MY":
                    case "pt-BR":
                    case "sr-CYRL":
                    case "tl-PH":
                    case "tzm-LATN":
                    case "tzm":
                        return locale.toLowerCase();
                    default:
                        // reserve only the first two letters language code
                        return locale.substr(0, 2);
                }
            }
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "en": {
        "championships": {
            "created_successfully": "The Championship was created successfully",
            "updated_successfully": "The Championship was updated successfully",
            "deleted_succesfully": "The Championship was deleted successfully",
            "event_poster_deleted": "The Championship poster was deleted successfully",
            "not_found": "The Championship doesn't exist",
            "name": "Name",
            "description": "Description",
            "championships": "Championships",
            "sport": "Sport",
            "init_date": "Init Date",
            "end_date": "End Date",
            "actions": "Actions",
            "select_option": "Select an option",
            "upload_image": "Upload image",
            "update": "Update",
            "new": "New Championship",
            "delete_message": "Are you sure? this action cannot be undone",
            "delete_championship": "Delete Championship",
            "championship_info": "Championship Information",
            "see_all": "See All",
            "select": "Select",
            "search_championship": "Search Championship"
        }
    },
    "es": {
        "championships": {
            "created_successfully": "El campeonato fue creado satisfactoriamente",
            "updated_successfully": "El campeonato fue actualizado satisfactoriamente",
            "deleted_succesfully": "El campeonato fue eliminado satisfactoriamente",
            "event_poster_deleted": "El poster fue eliminado satisfactoriamente",
            "not_found": "El campeonato no existe",
            "name": "Nombre",
            "description": "Descripción",
            "championships": "Campeonatos",
            "sport": "Deporte",
            "init_date": "Fecha de inicio",
            "end_date": "Fecha de finalización",
            "actions": "Acciones",
            "select_option": "Seleccione una opción",
            "upload_image": "Subir Imagen",
            "update": "Actualizar",
            "new": "Nuevo Campeonato",
            "delete_message": "¿Estas Seguro? esta acción no se puede deshacer",
            "delete_championship": "Eliminar Campeonato",
            "championship_info": "Información del campeonato",
            "see_all": "Ver Todos",
            "select": "Seleccionar",
            "search_championship": "Buscar Campeonato"
        }
    }
};

/***/ }),

/***/ 244:
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
        return _vue2.default.http.get('/api/championships/' + id + '?include=sport').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    create: function create(championship, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/championships', championship).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    update: function update(id, championship, successCalback, errorCallback) {
        return _vue2.default.http.put('/api/championships/' + id, championship, { emulateHTTP: true }).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    remove: function remove(id, successCalback, errorCallback) {
        return _vue2.default.http.delete('/api/championships/' + id).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    }
};

/***/ }),

/***/ 272:
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

var _championships = __webpack_require__(241);

var _championships2 = _interopRequireDefault(_championships);

var _formDataParser = __webpack_require__(203);

var _formDataParser2 = _interopRequireDefault(_formDataParser);

var _vuex = __webpack_require__(4);

var _dncImageUpload = __webpack_require__(217);

var _dncImageUpload2 = _interopRequireDefault(_dncImageUpload);

var _select = __webpack_require__(207);

var _select2 = _interopRequireDefault(_select);

var _pageHeader = __webpack_require__(198);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _championshipService = __webpack_require__(244);

var _championshipService2 = _interopRequireDefault(_championshipService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        vSelect: _select2.default,
        adminHeader: _pageHeader2.default,
        dncImageUploader: _dncImageUpload2.default,
        "vue-datetime-picker": __webpack_require__(229)
    },
    mixins: [_formDataParser2.default],
    data: function data() {
        return {
            championship: {
                init_date: null,
                end_date: null,
                sport: null,
                translation: {
                    name: {
                        es: '',
                        en: ''
                    },
                    description: {
                        es: '',
                        en: ''
                    }
                }
            },
            updating: false
        };
    },

    computed: {
        breadcrumbs: function breadcrumbs() {
            return [{
                href: '/dashboard',
                title: 'admin.home'
            }, {
                href: '/championships',
                title: 'admin.championships'
            }, {
                href: '/championships/create',
                title: 'admin.new'
            }];
        },
        sports: function sports() {
            return this.$store.state.common.sports;
        }
    },
    locales: _championships2.default,
    created: function created() {
        if (!this.sports.length) this.getSports();
    },

    methods: _extends({}, (0, _vuex.mapActions)({
        getSports: 'common:getSports'
    }), {
        sportChanged: function sportChanged(sport) {
            this.championship.sport = sport;
        },
        endDateChanged: function endDateChanged(date) {
            this.championship.end_date = date;
        },
        initDateChanged: function initDateChanged(date) {
            this.championship.init_date = date;
        },
        modalDismiss: function modalDismiss() {
            this.addAthleteOpen = false;
        },
        onBack: function onBack(evt) {
            evt.preventDefault();
            this.$router.push({
                name: 'championships.list'
            });
        },
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            var self = this;
            this.$validator.validateAll().then(function () {
                var file = self.$refs.uploader.getFile();
                var formData = new FormData();

                if (file) formData.append('poster', self.$refs.uploader.getFile());
                formData = self.parseObjFormData(self.championship.translation, formData, 'translation');

                if (self.championship.sport) formData.append('sport_id', self.championship.sport.id);
                formData.append('init_date', self.championship.init_date.format('DD-MM-YYYY HH:mm:ss'));
                formData.append('end_date', self.championship.end_date.format('DD-MM-YYYY HH:mm:ss'));

                _championshipService2.default.create(formData, function (response) {
                    self.$root.successToast(response.message);
                    self.$router.push({
                        name: 'championships.list'
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
                _this.$root.errorToast(_this.$t('admin.validation_error'));
            });
        }
    })
};

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.select-input {\n  margin-top: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('admin-header', {
    attrs: {
      "title": _vm.$t('admin.championships'),
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [_c('form', {
    staticClass: "form",
    attrs: {
      "id": "championship-form"
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
  }, [_vm._v(_vm._s(_vm.$t('admin.championships')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('nameen')
    }
  }, [_c('label', {
    attrs: {
      "for": "nameen",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('championships.name')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.championship.translation.name.en),
      expression: "championship.translation.name.en"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "nameen",
      "name": "nameen",
      "type": "text",
      "placeholder": _vm.$t('championships.name'),
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('championships.name')
    },
    domProps: {
      "value": _vm._s(_vm.championship.translation.name.en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.championship.translation.name.en = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('nameen')),
      expression: "errors.has('nameen')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('nameen')) + "\n                                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('descriptionen')
    }
  }, [_c('label', {
    attrs: {
      "for": "descriptionen",
      "data-error": ""
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('championships.description')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.championship.translation.description.en),
      expression: "championship.translation.description.en"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "descriptionen",
      "name": "descriptionen",
      "type": "text",
      "placeholder": _vm.$t('championships.description'),
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('championships.description')
    },
    domProps: {
      "value": _vm._s(_vm.championship.translation.description.en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.championship.translation.description.en = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('descriptionen')),
      expression: "errors.has('descriptionen')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('translation.description.en')) + "\n                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6 text-center"
  }, [_c('dnc-image-uploader', {
    ref: "uploader",
    attrs: {
      "btn-text": _vm.$t('championships.upload_image'),
      "error-validation-msg": _vm.$t('validation.image', {
        attribute: _vm.$t('championships.upload_image')
      }),
      "image": _vm.championship.image,
      "default-image": "/images/missing/championship/missing.png"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('sport')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('championships.sport')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.championship.sport,
      "label": "name",
      "on-change": _vm.sportChanged,
      "placeholder": _vm.$t('championships.select_option'),
      "options": _vm.sports
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.championship.sport),
      expression: "championship.sport"
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
      "data-vv-as": _vm.$t('championships.sport')
    },
    domProps: {
      "value": _vm._s(_vm.championship.sport)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.championship.sport = $event.target.value
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
  }, [_vm._v(_vm._s(_vm.errors.first('sport')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('init_date')
    }
  }, [_c('label', {
    attrs: {
      "for": "init_date",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('championships.init_date')) + "\n                                        ")]), _vm._v(" "), _c('vue-datetime-picker', {
    staticClass: "vue-picker2",
    attrs: {
      "name": "init_date",
      "model": _vm.championship.init_date,
      "on-change": _vm.initDateChanged,
      "type": "datetime",
      "language": "en",
      "datetime-format": "LLL"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.championship.init_date),
      expression: "championship.init_date"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "init_input",
      "type": "hidden",
      "name": "init_date",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('championships.init_date')
    },
    domProps: {
      "value": _vm._s(_vm.championship.init_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.championship.init_date = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('init_date')),
      expression: "errors.has('init_date')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('init_date')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('end_date')
    }
  }, [_c('label', {
    attrs: {
      "for": "end_date",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('championships.end_date')))]), _vm._v(" "), _c('vue-datetime-picker', {
    staticClass: "vue-picker3",
    attrs: {
      "name": "end_date",
      "model": _vm.championship.end_date,
      "type": "datetime",
      "language": "en",
      "on-change": _vm.endDateChanged,
      "datetime-format": "LLL"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.championship.end_date),
      expression: "championship.end_date"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "end_input",
      "type": "hidden",
      "name": "end_date",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('championships.end_date')
    },
    domProps: {
      "value": _vm._s(_vm.championship.end_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.championship.end_date = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('end_date')),
      expression: "errors.has('end_date')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('end_date')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
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
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1ba4b13f", module.exports)
  }
}

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("19589392", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1ba4b13f!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1ba4b13f!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/M2QwNyoqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2NhZTIqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NWQ5OCoqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2E2MjcqKioqKioiLCJ3ZWJwYWNrOi8vL3NlbGVjdC52dWU/ODRhOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4LmpzP2MwZDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9mb3JtRGF0YVBhcnNlci5qcz8wYzM3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanM/ZWFiNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzP2JlZDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlPzdmYzAqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/ZDQwNioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2NmMjYqIiwid2VicGFjazovLy9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT81OWU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/Yzc2NSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT9kOGNkKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzYwZDYqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/MzQ1YyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RhdGV0aW1lL3Z1ZS1kYXRldGltZS1waWNrZXIuanM/NjViYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBzLmpzPzRjNWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBTZXJ2aWNlLmpzPzAwMzgiLCJ3ZWJwYWNrOi8vL2NyZWF0ZS52dWU/ZjdlMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY3JlYXRlLnZ1ZT9iMDUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvY2hhbXBpb25zaGlwcy9jcmVhdGUudnVlP2I2NDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2NyZWF0ZS52dWU/NjUzZCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicHJvcHMiLCJsb2FkaW5nIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwib25TZWFyY2giLCJkZWJvdW5jZSIsIk51bWJlciIsIndhdGNoIiwic2VhcmNoIiwibGVuZ3RoIiwidG9nZ2xlTG9hZGluZyIsIm1ldGhvZHMiLCJ0b2dnbGUiLCJwYXJzZU9iakZvcm1EYXRhIiwib2JqIiwiZm9ybWRhdGEiLCJuYW1lc3BhY2UiLCJmZCIsImZvcm1LZXkiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRmlsZSIsImFwcGVuZCIsInR5cGVBaGVhZFBvaW50ZXIiLCJtYXliZUFkanVzdFNjcm9sbCIsInBpeGVsc1RvUG9pbnRlclRvcCIsInBpeGVsc1RvUG9pbnRlckJvdHRvbSIsInZpZXdwb3J0IiwidG9wIiwic2Nyb2xsVG8iLCJib3R0b20iLCJwb2ludGVySGVpZ2h0IiwiaSIsIiRyZWZzIiwiZHJvcGRvd25NZW51IiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50Iiwic2Nyb2xsVG9wIiwicG9zaXRpb24iLCJkYXRhIiwiZmlsdGVyZWRPcHRpb25zIiwidHlwZUFoZWFkVXAiLCJ0eXBlQWhlYWREb3duIiwidHlwZUFoZWFkU2VsZWN0Iiwic2VsZWN0IiwidGFnZ2FibGUiLCJjbGVhclNlYXJjaE9uU2VsZWN0IiwiREFURVRJTUVfUElDS0VSX1RPT0xUSVBTIiwiREVGQVVMVF9MQU5HVUFHRSIsInJlcGxhY2UiLCJpbmhlcml0IiwidGVtcGxhdGUiLCJtb2RlbCIsInJlcXVpcmVkIiwiU3RyaW5nIiwibGFuZ3VhZ2UiLCJkYXRldGltZUZvcm1hdCIsImRhdGVGb3JtYXQiLCJ0aW1lRm9ybWF0IiwibmFtZSIsIm9uQ2hhbmdlIiwiZGF0ZSIsImNyZWF0ZWQiLCJpc0NoYW5naW5nIiwiY29udHJvbCIsIm1vdW50ZWQiLCJvcHRpb25zIiwidXNlQ3VycmVudCIsInNob3dDbGVhciIsInNob3dDbG9zZSIsImljb25zIiwidGltZSIsInVwIiwiZG93biIsInByZXZpb3VzIiwibmV4dCIsInRvZGF5IiwiY2xlYXIiLCJjbG9zZSIsIiRsYW5ndWFnZSIsImxhbmdhdWdlIiwibG9jYWxlIiwiZ2V0TGFuZ3VhZ2VDb2RlIiwiZm9ybWF0IiwiJGkxOG4iLCJkYXRldGltZV9waWNrZXIiLCJtZXNzYWdlcyIsInRvb2x0aXBzIiwiJCIsImZuIiwiZGF0ZXRpbWVwaWNrZXIiLCJkZWZhdWx0cyIsIiRuZXh0VGljayIsIiRlbCIsIm1lIiwib24iLCJ2YWwiLCJvbGRWYWwiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsInNob3ciLCJpZCIsInN1Y2Nlc3NDYWxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImNyZWF0ZSIsImNoYW1waW9uc2hpcCIsInBvc3QiLCJ1cGRhdGUiLCJwdXQiLCJlbXVsYXRlSFRUUCIsInJlbW92ZSIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BO0FBTEE7QUFEQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLGlCQUFpQix3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLEdBQUc7O0FBRXZJOzs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa05BOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7O1lBR0E7OztBQVNBOzs7Ozs7Ozs7cUJBSUE7QUFIQTs7QUFVQTs7Ozs7Ozs7a0JBRUE7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BOztBQVdBOzs7Ozs7a0JBRUE7cUJBR0E7QUFKQTs7QUFRQTs7Ozs7a0JBRUE7cUJBR0E7QUFKQTs7QUFRQTs7Ozs7a0JBRUE7cUJBR0E7QUFKQTs7QUFRQTs7Ozs7a0JBRUE7cUJBR0E7QUFKQTs7QUFTQTs7Ozs7O2tCQUVBO3FCQUdBO0FBSkE7O0FBUUE7Ozs7O2tCQUVBO3FCQUdBO0FBSkE7O0FBU0E7Ozs7OztrQkFFQTtxQkFHQTtBQUpBOztBQVVBOzs7Ozs7O2tCQUVBOytDQUNBO2tHQUNBOzBEQUNBOzJDQUNBO0FBQ0E7QUFDQTt1QkFDQTtBQUdBO0FBWEE7O0FBa0JBOzs7Ozs7O2tCQUNBO3FCQUVBOztBQUlBOzs7OztrQkFFQTtxQkFHQTtBQUpBOztBQVNBOzs7Ozs7a0JBRUE7cUJBR0E7QUFKQTs7QUFRQTs7Ozs7a0JBRUE7a0RBQ0E7MkRBQ0E7MkRBQ0E7QUFDQTt1QkFDQTtBQUdBO0FBVEE7O0FBYUE7Ozs7O2tCQUVBO3FCQUlBO0FBTEE7QUE5SkE7OzBCQW9LQTs7b0JBRUE7a0JBQ0E7dUJBRUE7QUFKQTtBQU1BOzs7O3dDQUVBOzZCQUNBO0FBQ0E7Z0RBQ0E7K0JBQ0E7dUVBQ0E7bUJBQ0E7c0ZBQ0E7QUFDQTtBQUNBO29DQUNBOzZEQUNBO3NEQUNBO0FBQ0E7QUFDQTt5Q0FDQTt3Q0FDQTtBQUdBO0FBcEJBOzs7O0FBMkJBOzs7Ozt3Q0FDQTsrQ0FDQTs4QkFDQTttQkFDQTtpRUFDQTsrQ0FFQTs7dUNBQ0E7MENBQ0E7QUFDQTtBQUVBOzttQ0FDQTt5Q0FDQTswQ0FDQTsyQkFDQTs0Q0FDQTtBQUNBO3VCQUNBO3FDQUNBO0FBQ0E7QUFFQTs7K0JBQ0E7QUFFQTs7O0FBS0E7Ozs7OztBQUNBOzsrQkFDQTsyQkFDQTtzREFDQTs4SkFDQTs4QkFDQTtBQUNBO0FBQ0E7bURBQ0E7NkNBRUE7bUJBQ0E7aUNBQ0E7QUFDQTtBQUVBOzs7QUFLQTs7Ozs7c0RBQ0E7Z0NBQ0E7a0NBQ0E7a0NBQ0E7QUFFQTs7MENBQ0E7OEJBQ0E7QUFDQTtBQUVBOzs7QUFLQTs7Ozs7bURBQ0E7b0pBQ0E7K0JBQ0E7OENBQ0E7dUJBQ0E7Z0NBQ0E7c0NBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUtBOzs7Ozs7QUFDQTs7aURBQ0E7K0JBQ0E7a0RBQ0E7OElBQ0E7bUNBQ0E7K0NBQ0E7bUNBQ0E7QUFDQTtBQUNBO3VCQUNBO0FBRUE7O3NDQUNBO0FBRUE7OztBQUtBOzs7OztzQ0FDQTtxQ0FDQTtrQ0FDQTttQkFDQTs4QkFDQTtBQUNBO0FBRUE7OztBQUtBOzs7OztzREFDQTsrREFDQTsyRUFDQTtBQUNBO0FBRUE7OztBQU9BOzs7Ozs7OztBQUNBOzt5QkFFQTs7Z0RBQ0E7NEhBQ0E7NkJBQ0E7MkNBQ0E7NkJBQ0E7QUFDQTtBQUVBOzttQkFDQTtBQUdBO0FBdkpBOzs7O0FBNkpBOzs7O29EQUNBOzsyQkFFQTtpQ0FDQTs4QkFFQTtBQUpBO0FBTUE7OztBQUtBOzs7Ozt3REFDQTt1REFDQTs0QkFDQTtBQUNBO0FBRUE7OztBQVFBOzs7Ozs7OztvREFDQTt1QkFDQTtnRUFDQTtvRUFDQTtBQUNBO3dGQUNBO3FDQUNBO0FBQ0E7bUJBQ0E7QUFFQTs7O0FBSUE7Ozs7OENBQ0E7Z0NBQ0E7MERBQ0E7d0RBQ0E7QUFDQTt1Q0FDQTtBQUVBOzttQkFDQTtBQUVBOzs7QUFJQTs7Ozs4Q0FDQTsrQkFDQTs0QkFDQTt1Q0FDQTs2QkFDQTtBQUVBOzttQkFDQTtBQUdBO0FBeEVBOztBQTlWQSxFOzs7Ozs7Ozs7O0FDM09BQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2hCQyxRQUFPO0FBQ047Ozs7O0FBS0FDLFdBQVM7QUFDUkMsU0FBTUMsT0FERTtBQUVSQyxZQUFTO0FBRkQsR0FOSDs7QUFXTjs7Ozs7Ozs7Ozs7QUFXQUMsWUFBVSxFQXRCSjs7QUEwQk47Ozs7O0FBS0FDLFlBQVU7QUFDVEosU0FBTUssTUFERztBQUVUSCxZQUFTO0FBRkE7QUEvQkosRUFEUzs7QUFzQ2hCSSxRQUFPO0FBQ047Ozs7QUFJQUMsUUFMTSxvQkFLRztBQUNSLE9BQUksS0FBS0EsTUFBTCxDQUFZQyxNQUFaLEdBQXFCLENBQXJCLElBQTBCLEtBQUtMLFFBQW5DLEVBQTZDO0FBQzVDLFNBQUtBLFFBQUwsQ0FBYyxLQUFLSSxNQUFuQixFQUEyQixLQUFLRSxhQUFoQztBQUNBO0FBQ0Q7QUFUSyxFQXRDUzs7QUFrRGhCQyxVQUFTO0FBQ1I7Ozs7Ozs7QUFPQUQsZUFSUSwyQkFRcUI7QUFBQSxPQUFmRSxNQUFlLHVFQUFOLElBQU07O0FBQzVCLE9BQUlBLFVBQVUsSUFBZCxFQUFvQjtBQUNuQixXQUFPLEtBQUtaLE9BQUwsR0FBZSxDQUFDLEtBQUtBLE9BQTVCO0FBQ0E7QUFDRCxVQUFPLEtBQUtBLE9BQUwsR0FBZVksTUFBdEI7QUFDQTtBQWJPO0FBbERPLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDQWM7QUFDVkQsYUFBUztBQUNMRSx3QkFESyw0QkFDWUMsR0FEWixFQUNpQkMsUUFEakIsRUFDMkJDLFNBRDNCLEVBQ3NDOztBQUV2QyxnQkFBSUMsS0FBS0YsUUFBVDtBQUNBLGdCQUFJRyxPQUFKOztBQUVBLGlCQUFLLElBQUlDLFFBQVQsSUFBcUJMLEdBQXJCLEVBQTBCO0FBQ3RCLG9CQUFHQSxJQUFJTSxjQUFKLENBQW1CRCxRQUFuQixLQUFnQ0wsSUFBSUssUUFBSixDQUFuQyxFQUFtRDtBQUMvQyx3QkFBSUgsU0FBSixFQUFlO0FBQ1hFLGtDQUFVRixZQUFZLEdBQVosR0FBa0JHLFFBQWxCLEdBQTZCLEdBQXZDO0FBQ0gscUJBRkQsTUFFTztBQUNIRCxrQ0FBVUMsUUFBVjtBQUNIOztBQUVEO0FBQ0E7QUFDQSx3QkFBSSxRQUFPTCxJQUFJSyxRQUFKLENBQVAsTUFBeUIsUUFBekIsSUFBcUMsRUFBRUwsSUFBSUssUUFBSixhQUF5QkUsSUFBM0IsQ0FBekMsRUFBMkU7QUFDdkUsNkJBQUtSLGdCQUFMLENBQXNCQyxJQUFJSyxRQUFKLENBQXRCLEVBQXFDRixFQUFyQyxFQUF5Q0MsT0FBekM7QUFDSCxxQkFGRCxNQUVPO0FBQ0hELDJCQUFHSyxNQUFILENBQVVKLE9BQVYsRUFBbUJKLElBQUlLLFFBQUosQ0FBbkI7QUFDSDtBQUNKO0FBQ0o7QUFDRCxtQkFBT0YsRUFBUDtBQUNIO0FBeEJJO0FBREMsQzs7Ozs7Ozs7OztBQ0FkcEIsT0FBT0MsT0FBUCxHQUFpQjtBQUNmUyxTQUFPO0FBQ0xnQixvQkFESyw4QkFDYztBQUNqQixXQUFLQyxpQkFBTDtBQUNEO0FBSEksR0FEUTs7QUFPZmIsV0FBUztBQUNQOzs7Ozs7QUFNQWEscUJBUE8sK0JBT2E7QUFDbEIsVUFBSUMscUJBQXFCLEtBQUtBLGtCQUFMLEVBQXpCO0FBQ0EsVUFBSUMsd0JBQXdCLEtBQUtBLHFCQUFMLEVBQTVCOztBQUVBLFVBQUtELHNCQUFzQixLQUFLRSxRQUFMLEdBQWdCQyxHQUEzQyxFQUFnRDtBQUM5QyxlQUFPLEtBQUtDLFFBQUwsQ0FBZUosa0JBQWYsQ0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJQyx5QkFBeUIsS0FBS0MsUUFBTCxHQUFnQkcsTUFBN0MsRUFBcUQ7QUFDMUQsZUFBTyxLQUFLRCxRQUFMLENBQWUsS0FBS0YsUUFBTCxHQUFnQkMsR0FBaEIsR0FBc0IsS0FBS0csYUFBTCxFQUFyQyxDQUFQO0FBQ0Q7QUFDRixLQWhCTTs7O0FBa0JQOzs7OztBQUtBTixzQkF2Qk8sZ0NBdUJjO0FBQ25CLFVBQUlBLHFCQUFxQixDQUF6QjtBQUNBLFdBQUssSUFBSU8sSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtULGdCQUF6QixFQUEyQ1MsR0FBM0MsRUFBZ0Q7QUFDOUNQLDhCQUFzQixLQUFLUSxLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLFFBQXhCLENBQWlDSCxDQUFqQyxFQUFvQ0ksWUFBMUQ7QUFDRDtBQUNELGFBQU9YLGtCQUFQO0FBQ0QsS0E3Qk07OztBQStCUDs7Ozs7QUFLQUMseUJBcENPLG1DQW9DaUI7QUFDdEIsYUFBTyxLQUFLRCxrQkFBTCxLQUE0QixLQUFLTSxhQUFMLEVBQW5DO0FBQ0QsS0F0Q007OztBQXdDUDs7OztBQUlBQSxpQkE1Q08sMkJBNENTO0FBQ2QsVUFBSU0sVUFBVSxLQUFLSixLQUFMLENBQVdDLFlBQVgsQ0FBd0JDLFFBQXhCLENBQWlDLEtBQUtaLGdCQUF0QyxDQUFkO0FBQ0EsYUFBT2MsVUFBVUEsUUFBUUQsWUFBbEIsR0FBaUMsQ0FBeEM7QUFDRCxLQS9DTTs7O0FBaURQOzs7O0FBSUFULFlBckRPLHNCQXFESTtBQUNULGFBQU87QUFDTEMsYUFBSyxLQUFLSyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JJLFNBRHhCO0FBRUxSLGdCQUFRLEtBQUtHLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkUsWUFBeEIsR0FBdUMsS0FBS0gsS0FBTCxDQUFXQyxZQUFYLENBQXdCSTtBQUZsRSxPQUFQO0FBSUQsS0ExRE07OztBQTREUDs7Ozs7QUFLQVQsWUFqRU8sb0JBaUVFVSxRQWpFRixFQWlFWTtBQUNqQixhQUFPLEtBQUtOLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QkksU0FBeEIsR0FBb0NDLFFBQTNDO0FBQ0Q7QUFuRU07QUFQTSxDQUFqQixDOzs7Ozs7Ozs7O0FDQUExQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2YwQyxNQURlLGtCQUNSO0FBQ0wsV0FBTztBQUNMakIsd0JBQWtCLENBQUM7QUFEZCxLQUFQO0FBR0QsR0FMYzs7O0FBT2ZoQixTQUFPO0FBQ0xrQyxtQkFESyw2QkFDYTtBQUNoQixXQUFLbEIsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFDRDtBQUhJLEdBUFE7O0FBYWZaLFdBQVM7QUFDUDs7Ozs7QUFLQStCLGVBTk8seUJBTU87QUFDWixVQUFJLEtBQUtuQixnQkFBTCxHQUF3QixDQUE1QixFQUErQjtBQUM3QixhQUFLQSxnQkFBTDtBQUNBLFlBQUksS0FBS0MsaUJBQVQsRUFBNkI7QUFDM0IsZUFBS0EsaUJBQUw7QUFDRDtBQUNGO0FBQ0YsS0FiTTs7O0FBZVA7Ozs7O0FBS0FtQixpQkFwQk8sMkJBb0JTO0FBQ2QsVUFBSSxLQUFLcEIsZ0JBQUwsR0FBd0IsS0FBS2tCLGVBQUwsQ0FBcUJoQyxNQUFyQixHQUE4QixDQUExRCxFQUE2RDtBQUMzRCxhQUFLYyxnQkFBTDtBQUNBLFlBQUksS0FBS0MsaUJBQVQsRUFBNkI7QUFDM0IsZUFBS0EsaUJBQUw7QUFDRDtBQUNGO0FBQ0YsS0EzQk07OztBQTZCUDs7Ozs7QUFLQW9CLG1CQWxDTyw2QkFrQ1c7QUFDaEIsVUFBSSxLQUFLSCxlQUFMLENBQXNCLEtBQUtsQixnQkFBM0IsQ0FBSixFQUFvRDtBQUNsRCxhQUFLc0IsTUFBTCxDQUFhLEtBQUtKLGVBQUwsQ0FBc0IsS0FBS2xCLGdCQUEzQixDQUFiO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBS3VCLFFBQUwsSUFBaUIsS0FBS3RDLE1BQUwsQ0FBWUMsTUFBakMsRUFBd0M7QUFDN0MsYUFBS29DLE1BQUwsQ0FBWSxLQUFLckMsTUFBakI7QUFDRDs7QUFFRCxVQUFJLEtBQUt1QyxtQkFBVCxFQUErQjtBQUM3QixhQUFLdkMsTUFBTCxHQUFjLEVBQWQ7QUFDRDtBQUNGO0FBNUNNO0FBYk0sQ0FBakIsQzs7Ozs7OztBQ0FBO0FBQ0E7OztBQUdBO0FBQ0Esc0NBQXVDLHlCQUF5QixHQUFHLDZCQUE2Qix5QkFBeUIsa0JBQWtCLGtCQUFrQiw0QkFBNEIsc0JBQXNCLDBCQUEwQiw4RUFBOEUsc0VBQXNFLG9GQUFvRixvRkFBb0YsaUJBQWlCLHNDQUFzQyw4QkFBOEIsR0FBRyxxQ0FBcUMsaUJBQWlCLEdBQUcsb0NBQW9DLHlDQUF5QywwQkFBMEIsc0NBQXNDLGtCQUFrQiw0QkFBNEIsbUJBQW1CLGtCQUFrQiwwQkFBMEIsd0NBQXdDLHdDQUF3Qyw4RUFBOEUsc0VBQXNFLG9GQUFvRixvRkFBb0YsR0FBRyxrQ0FBa0Msa0JBQWtCLEdBQUcseUNBQXlDLHdDQUF3Qyx3Q0FBd0MsR0FBRyw4QkFBOEIscUJBQXFCLGlCQUFpQix1QkFBdUIsOENBQThDLHlCQUF5QiwwQkFBMEIsR0FBRyx5Q0FBeUMsbUJBQW1CLEdBQUcsbUNBQW1DLDBCQUEwQixtQ0FBbUMsb0NBQW9DLEdBQUcsOEJBQThCLGdCQUFnQixrQkFBa0IseUJBQXlCLHVCQUF1QixnQ0FBZ0MsaUNBQWlDLEdBQUcsMkJBQTJCLGtCQUFrQixnQ0FBZ0MsNkJBQTZCLHlCQUF5QixtQkFBbUIsOEJBQThCLHdCQUF3QixrQkFBa0IseUJBQXlCLEdBQUcsa0NBQWtDLGtCQUFrQixzQkFBc0Isc0JBQXNCLEdBQUcscUVBQXFFLDRCQUE0QixtQkFBbUIsb0JBQW9CLGdCQUFnQixzQkFBc0Isa0JBQWtCLHNCQUFzQix1QkFBdUIseUJBQXlCLHVCQUF1QixrQkFBa0Isa0JBQWtCLEdBQUcseUNBQXlDLHNCQUFzQixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyx1QkFBdUIsdUNBQXVDLGtCQUFrQixHQUFHLG1EQUFtRCwwQkFBMEIsa0JBQWtCLEdBQUcsc0JBQXNCLGlCQUFpQix5QkFBeUIsZUFBZSxrQkFBa0IscUJBQXFCLDJCQUEyQix1QkFBdUIscURBQXFELHVEQUF1RCx3REFBd0Qsb0RBQW9ELHVDQUF1Qyx1Q0FBdUMsNkRBQTZELDZEQUE2RCxzQ0FBc0MsOEJBQThCLEdBQUcsOEJBQThCLGlCQUFpQixHQUFHLGlEQUFpRCx5QkFBeUIsaUJBQWlCLGtCQUFrQixHQUFHLHFDQUFxQyxNQUFNLDBDQUEwQywwQ0FBMEMsR0FBRyxRQUFRLDRDQUE0Qyw0Q0FBNEMsR0FBRyxHQUFHLDZCQUE2QixNQUFNLDBDQUEwQywwQ0FBMEMsR0FBRyxRQUFRLDRDQUE0Qyw0Q0FBNEMsR0FBRyxHQUFHLFVBQVUsNEhBQTRILEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsWUFBWSxLQUFLLEtBQUssV0FBVyxZQUFZLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLFlBQVksS0FBSyx1RUFBdUUsK0JBQStCLFNBQVMsdUNBQXVDLCtCQUErQix3QkFBd0Isd0JBQXdCLGtDQUFrQyw0QkFBNEIsZ0NBQWdDLDRFQUE0RSxrRkFBa0YsdUJBQXVCLG9DQUFvQyxTQUFTLCtDQUErQyx1QkFBdUIsU0FBUyw4Q0FBOEMsK0NBQStDLGdDQUFnQyw0Q0FBNEMsd0JBQXdCLGtDQUFrQyx5QkFBeUIsd0JBQXdCLGdDQUFnQyxzQ0FBc0MsNEVBQTRFLGtGQUFrRixTQUFTLDRDQUE0Qyx3QkFBd0IsU0FBUyxtREFBbUQsc0NBQXNDLFNBQVMsd0NBQXdDLDJCQUEyQix1QkFBdUIsNkJBQTZCLG9EQUFvRCwrQkFBK0IsZ0NBQWdDLFNBQVMsbURBQW1ELHlCQUF5QixTQUFTLDZDQUE2QyxnQ0FBZ0MseUNBQXlDLDBDQUEwQyxTQUFTLHdDQUF3QyxzQkFBc0Isd0JBQXdCLCtCQUErQiw2QkFBNkIsc0NBQXNDLHVDQUF1QyxTQUFTLHFDQUFxQyx3QkFBd0Isc0NBQXNDLG1DQUFtQywrQkFBK0IseUJBQXlCLG9DQUFvQyw4QkFBOEIsd0JBQXdCLCtCQUErQixTQUFTLDRDQUE0Qyx3QkFBd0IsNEJBQTRCLDRCQUE0QixTQUFTLHFGQUFxRixrQ0FBa0MseUJBQXlCLDBCQUEwQixzQkFBc0IsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsNkJBQTZCLCtCQUErQiw2QkFBNkIsd0JBQXdCLHdCQUF3QixTQUFTLG1EQUFtRCw0QkFBNEIsU0FBUyw0QkFBNEIsNEJBQTRCLFNBQVMsaUNBQWlDLDZDQUE2Qyx3QkFBd0IsU0FBUyxtRUFBbUUsZ0NBQWdDLHdCQUF3QixTQUFTLGdDQUFnQyx1QkFBdUIsK0JBQStCLHFCQUFxQix3QkFBd0IsMkJBQTJCLGlDQUFpQyw2QkFBNkIsMkRBQTJELDZEQUE2RCw4REFBOEQsMERBQTBELHFDQUFxQywyREFBMkQsb0NBQW9DLFNBQVMsd0NBQXdDLHVCQUF1QixTQUFTLGlFQUFpRSwrQkFBK0IsdUJBQXVCLHdCQUF3QixTQUFTLCtDQUErQyxnQkFBZ0Isd0NBQXdDLGFBQWEsa0JBQWtCLDBDQUEwQyxhQUFhLFNBQVMsdUNBQXVDLGdCQUFnQix3Q0FBd0MsYUFBYSxrQkFBa0IsMENBQTBDLGFBQWEsU0FBUyx5VEFBeVQsZUFBZSxrSkFBa0osMEJBQTBCLG9KQUFvSix3eUJBQXd5Qix3Q0FBd0MsMFpBQTBaLDBCQUEwQixxSEFBcUgsMEVBQTBFLHFKQUFxSiwwQkFBMEIsOG1CQUE4bUIsb0ZBQW9GLHlaQUF5WixxQkFBcUIsMkNBQTJDLGtEQUFrRCxrT0FBa08sbUNBQW1DLG9HQUFvRyxPQUFPLDZDQUE2QywrREFBK0Qsc0RBQXNELGtCQUFrQixxSkFBcUosT0FBTywrQ0FBK0Msc0ZBQXNGLDBHQUEwRyxRQUFRLGdEQUFnRCxvRkFBb0Ysa0lBQWtJLE9BQU8sOENBQThDLHFGQUFxRiwrSEFBK0gsT0FBTyxpREFBaUQsaUZBQWlGLGlPQUFpTyxPQUFPLGdEQUFnRCx1RkFBdUYsMElBQTBJLFFBQVEseURBQXlELG9GQUFvRixzTEFBc0wsT0FBTywyQ0FBMkMsc0ZBQXNGLG9GQUFvRixPQUFPLG1HQUFtRyxpQkFBaUIsbUNBQW1DLE9BQU8sb0RBQW9ELHdFQUF3RSx5REFBeUQsbUVBQW1FLHNGQUFzRix5QkFBeUIsc0NBQXNDLHFCQUFxQixpQkFBaUIsK1RBQStULFNBQVMsNkJBQTZCLEtBQUsscUZBQXFGLHNIQUFzSCxRQUFRLDhDQUE4QyxxRkFBcUYsdUpBQXVKLFFBQVEsOENBQThDLHFGQUFxRiw2R0FBNkcsU0FBUyxrREFBa0Qsc0ZBQXNGLGtFQUFrRSxvQ0FBb0Msd0JBQXdCLHlCQUF5Qiw2REFBNkQsaUJBQWlCLHFJQUFxSSxRQUFRLDBEQUEwRCxxRkFBcUYsY0FBYyx5QkFBeUIsd0JBQXdCLG1IQUFtSCxhQUFhLHlCQUF5QixpQ0FBaUMseURBQXlELHNDQUFzQyx3Q0FBd0Msd0dBQXdHLE9BQU8sdUhBQXVILGlCQUFpQiw0QkFBNEIsc0VBQXNFLHVGQUF1RixpQkFBaUIsZ0NBQWdDLHFFQUFxRSxhQUFhLDJCQUEyQiw0RkFBNEYsZUFBZSxtQ0FBbUMsS0FBSyxtREFBbUQsd0RBQXdELGtFQUFrRSxPQUFPLDBFQUEwRSxrSEFBa0gsc0ZBQXNGLHlCQUF5QixnREFBZ0Qsa0RBQWtELHNGQUFzRixPQUFPLHdGQUF3Rix5QkFBeUIsT0FBTyw0RUFBNEUscUJBQXFCLG1FQUFtRSxnR0FBZ0csZUFBZSxtQ0FBbUMsS0FBSyxxREFBcUQsd0NBQXdDLDZGQUE2RixzSEFBc0gsc0VBQXNFLHlCQUF5QixpRUFBaUUsZ0ZBQWdGLE9BQU8sa0VBQWtFLGlCQUFpQixvSEFBb0gsZUFBZSxtQ0FBbUMsS0FBSywwREFBMEQseUNBQXlDLG1IQUFtSCx1REFBdUQsNkRBQTZELGlCQUFpQixrSEFBa0gsTUFBTSw4QkFBOEIsS0FBSyxzREFBc0QsNkpBQTZKLHdDQUF3Qyw0R0FBNEcsT0FBTywwSEFBMEgscUJBQXFCLGlCQUFpQix1SEFBdUgsZUFBZSxvQ0FBb0MsUUFBUSwyR0FBMkcsMERBQTBELCtGQUErRixvR0FBb0csNEVBQTRFLDJCQUEyQiw0RUFBNEUseUJBQXlCLDZEQUE2RCx5RUFBeUUscU1BQXFNLE9BQU8sNkRBQTZELDhDQUE4QyxxRUFBcUUsT0FBTyw2REFBNkQsaUJBQWlCLGdNQUFnTSxXQUFXLHVEQUF1RCx3RUFBd0UsNEdBQTRHLGlCQUFpQixtS0FBbUssaUJBQWlCLG1DQUFtQyxRQUFRLHlEQUF5RCwyRkFBMkYsb0ZBQW9GLGtFQUFrRSwyQkFBMkIsa0VBQWtFLHFCQUFxQix1REFBdUQsYUFBYSw0QkFBNEIsdUdBQXVHLE9BQU8sc0RBQXNELDRCQUE0Qiw4SkFBOEosaUJBQWlCLGdLQUFnSyxPQUFPLHlFQUF5RSxnRUFBZ0UsZ0RBQWdELHFCQUFxQixpQkFBaUIsc1NBQXNTLE1BQU0sc0RBQXNELG9DQUFvQyx5RUFBeUUsa0dBQWtHLGtHQUFrRyx5RUFBeUUsbURBQW1ELGtIQUFrSCxRQUFRLG1EQUFtRCx5Q0FBeUMsaUVBQWlFLCtGQUErRiwwRUFBMEUsb0NBQW9DLGlCQUFpQixnSEFBZ0gsTUFBTSxtREFBbUQsd0NBQXdDLGtFQUFrRSwyQkFBMkIsb0VBQW9FLGtEQUFrRCxhQUFhLGFBQWEsOENBQThDOztBQUV2NjJCOzs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0RBQXdELFFBQVE7QUFDaEU7QUFDQSxPQUFPO0FBQ1AsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBLE9BQU87QUFDUCxpREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsZ0RBQWdELFFBQVE7QUFDeEQ7QUFDQSxPQUFPO0FBQ1Asa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2hLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUE7Ozs7O2VBR0E7O2tCQUVBO3FCQUVBO0FBSEE7aUJBSUE7NEJBQ0E7O2tCQUVBO3FCQUVBO0FBSEE7ZUFJQTtzQkFFQTtBQWRBOzttQ0FnQkE7NkJBQ0E7QUFFQTtBQUpBOzBCQUtBOzt1QkFHQTtBQUZBO0FBR0E7OzsrQ0FFQTt5REFDQTt1QkFDQSxRQUNBO21DQUNBO0FBQ0E7Z0RBQ0E7c0RBQ0E7a0VBQ0E7NkNBQ0E7c0NBQ0E7QUFDQTtBQUNBOzZCQUNBO3FCQUNBO3lDQUNBO3dDQUNBO0FBQ0E7aUNBQ0E7QUFDQTtvQ0FDQTs4Q0FDQTtBQUVBO0FBeEJBO0FBMUJBLEU7Ozs7Ozs7QUM3QkE7QUFDQTs7O0FBR0E7QUFDQSx1Q0FBd0MsbUJBQW1CLG9CQUFvQixpQkFBaUIsdUJBQXVCLHlCQUF5QixrQkFBa0IsR0FBRyxzQkFBc0IsNkJBQTZCLEdBQUcsVUFBVSxnSUFBZ0ksS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxva0JBQW9rQixTQUFTLDJFQUEyRSx5QkFBeUIsMEJBQTBCLHVCQUF1Qiw2QkFBNkIsK0JBQStCLHdCQUF3QixTQUFTLGdDQUFnQyxtQ0FBbUMsU0FBUyx1RUFBdUUsb0JBQW9CLHlCQUF5QixpQ0FBaUMsd0ZBQXdGLDRCQUE0Qix1Q0FBdUMseUJBQXlCLGtGQUFrRiwwQkFBMEIsaUNBQWlDLGFBQWEscUJBQXFCLHVDQUF1Qyx5Q0FBeUMsaUJBQWlCLGFBQWEsb0JBQW9CLHdCQUF3QixvREFBb0QsYUFBYSx1QkFBdUIsZ0NBQWdDLHVFQUF1RSxxRUFBcUUsK0NBQStDLGlCQUFpQixvQ0FBb0MsK0RBQStELGlGQUFpRix5RUFBeUUseUZBQXlGLHFCQUFxQixrREFBa0Qsa0NBQWtDLDRDQUE0Qyx1REFBdUQsc0JBQXNCLCtEQUErRCwyQkFBMkIseURBQXlELGlCQUFpQixhQUFhLFNBQVMsOENBQThDOztBQUU5akc7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7OztBQy9CQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN2Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7O0FDcEJBOzs7OztBQUtBLElBQUl3QywyQkFBMkIsQ0FDM0IsT0FEMkIsRUFDbEIsT0FEa0IsRUFDVCxPQURTLEVBRTNCLGFBRjJCLEVBRVosV0FGWSxFQUVDLFdBRkQsRUFHM0IsWUFIMkIsRUFHYixVQUhhLEVBR0QsVUFIQyxFQUkzQixjQUoyQixFQUlYLFlBSlcsRUFJRyxZQUpILEVBSzNCLGFBTDJCLEVBS1osYUFMWSxFQU0zQixVQU4yQixFQU1mLGVBTmUsRUFNRSxlQU5GLEVBTzNCLFlBUDJCLEVBT2IsaUJBUGEsRUFPTSxpQkFQTixFQVEzQixZQVIyQixFQVFiLGlCQVJhLEVBUU0saUJBUk4sRUFTM0IsY0FUMkIsRUFTWCxZQVRXLENBQS9COztBQVlBOzs7QUFHQSxJQUFJQyxtQkFBbUIsT0FBdkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQXBELE9BQU9DLE9BQVAsR0FBaUI7QUFDYm9ELGFBQVMsSUFESTtBQUViQyxhQUFTLEtBRkk7QUFHYkMsY0FBVSxtQ0FDVix5REFEVSxHQUVWLGtDQUZVLEdBR1Ysc0NBSFUsR0FJVixTQUpVLEdBS1YsUUFSYTtBQVNickQsV0FBTztBQUNIc0QsZUFBTztBQUNIQyxzQkFBVTtBQURQLFNBREo7QUFJSHJELGNBQU07QUFDRkEsa0JBQU1zRCxNQURKO0FBRUZELHNCQUFVLEtBRlI7QUFHRm5ELHFCQUFTO0FBSFAsU0FKSDtBQVNIcUQsa0JBQVU7QUFDTnZELGtCQUFNc0QsTUFEQTtBQUVORCxzQkFBVSxLQUZKO0FBR05uRCxxQkFBUztBQUhILFNBVFA7QUFjSHNELHdCQUFnQjtBQUNaeEQsa0JBQU1zRCxNQURNO0FBRVpELHNCQUFVLEtBRkU7QUFHWm5ELHFCQUFTO0FBSEcsU0FkYjtBQW1CSHVELG9CQUFZO0FBQ1J6RCxrQkFBTXNELE1BREU7QUFFUkQsc0JBQVUsS0FGRjtBQUdSbkQscUJBQVM7QUFIRCxTQW5CVDtBQXdCSHdELG9CQUFZO0FBQ1IxRCxrQkFBTXNELE1BREU7QUFFUkQsc0JBQVUsS0FGRjtBQUdSbkQscUJBQVM7QUFIRCxTQXhCVDtBQTZCSHlELGNBQU07QUFDRjNELGtCQUFNc0QsTUFESjtBQUVGRCxzQkFBVSxLQUZSO0FBR0ZuRCxxQkFBUztBQUhQLFNBN0JIO0FBa0NIMEQsa0JBQVU7QUFDTlAsc0JBQVUsS0FESjtBQUVObkQscUJBQVM7QUFGSDtBQWxDUCxLQVRNO0FBZ0RicUMsUUFoRGEsa0JBZ0RQO0FBQ0YsZUFBTztBQUNIc0Isa0JBQU07QUFESCxTQUFQO0FBR0gsS0FwRFk7O0FBcURiQyxhQUFTLG1CQUFZO0FBQ2pCLGFBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxhQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNILEtBeERZO0FBeURiQyxhQUFTLG1CQUFZO0FBQ2pCO0FBQ0EsWUFBSUMsVUFBVTtBQUNWQyx3QkFBWSxLQURGO0FBRVZDLHVCQUFXLElBRkQ7QUFHVkMsdUJBQVcsS0FIRDtBQUlWQyxtQkFBTztBQUNIQyxzQkFBTSxlQURIO0FBRUhWLHNCQUFNLGdCQUZIO0FBR0hXLG9CQUFJLGtCQUhEO0FBSUhDLHNCQUFNLG9CQUpIO0FBS0hDLDBCQUFVLG9CQUxQO0FBTUhDLHNCQUFNLHFCQU5IO0FBT0hDLHVCQUFPLG9CQVBKO0FBUUhDLHVCQUFPLGFBUko7QUFTSEMsdUJBQU87QUFUSjtBQUpHLFNBQWQ7QUFnQkE7QUFDQSxZQUFJdkIsV0FBVyxLQUFLQSxRQUFwQjtBQUNBLFlBQUlBLGFBQWEsSUFBYixJQUFxQkEsYUFBYSxFQUF0QyxFQUEwQztBQUN0QyxnQkFBSSxLQUFLd0IsU0FBVCxFQUFvQjtBQUNoQnhCLDJCQUFXLEtBQUt3QixTQUFoQjtBQUNILGFBRkQsTUFFTztBQUNIQywyQkFBV2hDLGdCQUFYO0FBQ0g7QUFDSjtBQUNEa0IsZ0JBQVFlLE1BQVIsR0FBaUIsS0FBS0MsZUFBTCxDQUFxQjNCLFFBQXJCLENBQWpCO0FBQ0E7QUFDQSxnQkFBUSxLQUFLdkQsSUFBYjtBQUNJLGlCQUFLLE1BQUw7QUFDSWtFLHdCQUFRaUIsTUFBUixHQUFpQixLQUFLMUIsVUFBdEI7QUFDQTtBQUNKLGlCQUFLLE1BQUw7QUFDSVMsd0JBQVFpQixNQUFSLEdBQWlCLEtBQUt6QixVQUF0QjtBQUNBO0FBQ0osaUJBQUssVUFBTDtBQUNBO0FBQ0lRLHdCQUFRaUIsTUFBUixHQUFpQixLQUFLM0IsY0FBdEI7QUFDQTtBQVZSO0FBWUE7QUFDQSxZQUFJLEtBQUs0QixLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxlQUE3QixFQUE4QztBQUMxQyxnQkFBSUMsV0FBVyxLQUFLRixLQUFMLENBQVdDLGVBQTFCO0FBQ0EsZ0JBQUlFLFdBQVdDLEVBQUVDLEVBQUYsQ0FBS0MsY0FBTCxDQUFvQkMsUUFBcEIsQ0FBNkJKLFFBQTVDO0FBQ0EsaUJBQUssSUFBSXhELElBQUksQ0FBYixFQUFnQkEsSUFBSWdCLHlCQUF5QnZDLE1BQTdDLEVBQXFELEVBQUV1QixDQUF2RCxFQUEwRDtBQUN0RCxvQkFBSTRCLE9BQU9aLHlCQUF5QmhCLENBQXpCLENBQVg7QUFDQSxvQkFBSXVELFNBQVMzQixJQUFULENBQUosRUFBb0I7QUFDaEI0Qiw2QkFBUzVCLElBQVQsSUFBaUIyQixTQUFTM0IsSUFBVCxDQUFqQixDQURnQixDQUNvQjtBQUN2QztBQUNKO0FBQ0RPLG9CQUFRcUIsUUFBUixHQUFtQkEsUUFBbkI7QUFDSDtBQUNEO0FBQ0EsYUFBS0ssU0FBTCxDQUFlLFlBQVk7QUFDdkJKLGNBQUUsS0FBS0ssR0FBUCxFQUFZSCxjQUFaLENBQTJCeEIsT0FBM0I7QUFDQSxpQkFBS0YsT0FBTCxHQUFld0IsRUFBRSxLQUFLSyxHQUFQLEVBQVl0RCxJQUFaLENBQWlCLGdCQUFqQixDQUFmO0FBQ0E7QUFDQSxpQkFBS3lCLE9BQUwsQ0FBYUgsSUFBYixDQUFrQixLQUFLVCxLQUF2QjtBQUNBLGdCQUFJMEMsS0FBSyxJQUFUO0FBQ0FOLGNBQUUsS0FBS0ssR0FBUCxFQUFZRSxFQUFaLENBQWUsV0FBZixFQUE0QixZQUFZO0FBQ3BDLG9CQUFJLENBQUNELEdBQUcvQixVQUFSLEVBQW9CO0FBQ2hCK0IsdUJBQUcvQixVQUFILEdBQWdCLElBQWhCO0FBQ0ErQix1QkFBR2pDLElBQUgsR0FBVWlDLEdBQUc5QixPQUFILENBQVdILElBQVgsRUFBVjtBQUNBaUMsdUJBQUdGLFNBQUgsQ0FBYSxZQUFZO0FBQ3JCRSwyQkFBRy9CLFVBQUgsR0FBZ0IsS0FBaEI7QUFDQSw0QkFBSStCLEdBQUdsQyxRQUFQLEVBQWlCO0FBQ2JrQywrQkFBR2xDLFFBQUgsQ0FBWWtDLEdBQUdqQyxJQUFmO0FBQ0g7QUFDSixxQkFMRDtBQU1IO0FBQ0osYUFYRDtBQVlILFNBbEJEO0FBbUJILEtBbElZO0FBbUlidkQsV0FBTztBQUNILGlCQUFTLGVBQVUwRixHQUFWLEVBQWVDLE1BQWYsRUFBdUI7QUFDNUIsZ0JBQUksQ0FBQyxLQUFLbEMsVUFBVixFQUFzQjtBQUNsQixxQkFBS0EsVUFBTCxHQUFrQixJQUFsQjtBQUNBLHFCQUFLQyxPQUFMLENBQWFILElBQWIsQ0FBa0JtQyxHQUFsQjtBQUNBLHFCQUFLakMsVUFBTCxHQUFrQixLQUFsQjtBQUNBLG9CQUFJLEtBQUtILFFBQVQsRUFBbUI7QUFDZix5QkFBS0EsUUFBTCxDQUFjb0MsR0FBZDtBQUNIO0FBQ0o7QUFDSjtBQVZFLEtBbklNO0FBK0lidEYsYUFBUztBQUNMOzs7Ozs7Ozs7Ozs7OztBQWNBd0UseUJBQWlCLHlCQUFVRCxNQUFWLEVBQWtCO0FBQy9CLGdCQUFJQSxXQUFXLElBQVgsSUFBbUJBLE9BQU96RSxNQUFQLEtBQWtCLENBQXpDLEVBQTRDO0FBQ3hDLHVCQUFPLElBQVA7QUFDSDtBQUNELGdCQUFJeUUsT0FBT3pFLE1BQVAsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEIsdUJBQU95RSxNQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsd0JBQVFBLE1BQVI7QUFDSSx5QkFBSyxPQUFMO0FBQ0EseUJBQUssT0FBTDtBQUNBLHlCQUFLLE9BQUw7QUFDQSx5QkFBSyxPQUFMO0FBQ0EseUJBQUssT0FBTDtBQUNBLHlCQUFLLE9BQUw7QUFDQSx5QkFBSyxPQUFMO0FBQ0EseUJBQUssT0FBTDtBQUNBLHlCQUFLLE9BQUw7QUFDQSx5QkFBSyxPQUFMO0FBQ0EseUJBQUssT0FBTDtBQUNBLHlCQUFLLE9BQUw7QUFDQSx5QkFBSyxPQUFMO0FBQ0EseUJBQUssU0FBTDtBQUNBLHlCQUFLLE9BQUw7QUFDQSx5QkFBSyxVQUFMO0FBQ0EseUJBQUssS0FBTDtBQUNJLCtCQUFPQSxPQUFPaUIsV0FBUCxFQUFQO0FBQ0o7QUFDSTtBQUNBLCtCQUFPakIsT0FBT2tCLE1BQVAsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBQVA7QUFyQlI7QUF1Qkg7QUFDSjtBQTlDSTtBQS9JSSxDQUFqQixDOzs7Ozs7Ozs7Ozs7OztrQkNoRWU7QUFDWCxVQUFNO0FBQ0YseUJBQWlCO0FBQ2Isb0NBQXdCLDJDQURYO0FBRWIsb0NBQXdCLDJDQUZYO0FBR2IsbUNBQXVCLDJDQUhWO0FBSWIsb0NBQXdCLGtEQUpYO0FBS2IseUJBQWEsZ0NBTEE7QUFNYixvQkFBUSxNQU5LO0FBT2IsMkJBQWUsYUFQRjtBQVFiLDZCQUFpQixlQVJKO0FBU2IscUJBQVMsT0FUSTtBQVViLHlCQUFhLFdBVkE7QUFXYix3QkFBWSxVQVhDO0FBWWIsdUJBQVcsU0FaRTtBQWFiLDZCQUFpQixrQkFiSjtBQWNiLDRCQUFnQixjQWRIO0FBZWIsc0JBQVUsUUFmRztBQWdCYixtQkFBTyxrQkFoQk07QUFpQmIsOEJBQWtCLDRDQWpCTDtBQWtCYixtQ0FBdUIscUJBbEJWO0FBbUJiLGlDQUFxQiwwQkFuQlI7QUFvQmIsdUJBQVcsU0FwQkU7QUFxQmIsc0JBQVUsUUFyQkc7QUFzQmIsbUNBQXVCO0FBdEJWO0FBRGYsS0FESztBQTJCWCxVQUFNO0FBQ0YseUJBQWlCO0FBQ2Isb0NBQXdCLDZDQURYO0FBRWIsb0NBQXdCLGtEQUZYO0FBR2IsbUNBQXVCLGdEQUhWO0FBSWIsb0NBQXdCLDRDQUpYO0FBS2IseUJBQWEseUJBTEE7QUFNYixvQkFBUSxRQU5LO0FBT2IsMkJBQWUsYUFQRjtBQVFiLDZCQUFpQixhQVJKO0FBU2IscUJBQVMsU0FUSTtBQVViLHlCQUFhLGlCQVZBO0FBV2Isd0JBQVksdUJBWEM7QUFZYix1QkFBVyxVQVpFO0FBYWIsNkJBQWlCLHVCQWJKO0FBY2IsNEJBQWdCLGNBZEg7QUFlYixzQkFBVSxZQWZHO0FBZ0JiLG1CQUFPLGtCQWhCTTtBQWlCYiw4QkFBa0IsaURBakJMO0FBa0JiLG1DQUF1QixxQkFsQlY7QUFtQmIsaUNBQXFCLDRCQW5CUjtBQW9CYix1QkFBVyxXQXBCRTtBQXFCYixzQkFBVSxhQXJCRztBQXNCYixtQ0FBdUI7QUF0QlY7QUFEZjtBQTNCSyxDOzs7Ozs7Ozs7Ozs7OztBQ0FmOzs7Ozs7a0JBRWU7QUFDWEMsUUFEVyxnQkFDTkMsRUFETSxFQUNGQyxjQURFLEVBQ2NDLGFBRGQsRUFDNEI7QUFDbkMsZUFBTyxjQUFJQyxJQUFKLENBQVNDLEdBQVQsQ0FBYSx3QkFBd0JKLEVBQXhCLEdBQTZCLGdCQUExQyxFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQUxVO0FBTVhDLFVBTlcsa0JBTUpDLFlBTkksRUFNVVYsY0FOVixFQU0wQkMsYUFOMUIsRUFNd0M7QUFDL0MsZUFBTyxjQUFJQyxJQUFKLENBQVNTLElBQVQsQ0FBYyxvQkFBZCxFQUFvQ0QsWUFBcEMsRUFDRk4sSUFERSxDQUNHLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0wsZUFBZUssU0FBU0MsSUFBeEIsQ0FBZDtBQUFBLFNBREgsRUFFRkMsS0FGRSxDQUVJLFVBQUNDLEtBQUQ7QUFBQSxtQkFBV1AsY0FBY08sS0FBZCxDQUFYO0FBQUEsU0FGSixDQUFQO0FBR0gsS0FWVTtBQVdYSSxVQVhXLGtCQVdKYixFQVhJLEVBV0FXLFlBWEEsRUFXY1YsY0FYZCxFQVc4QkMsYUFYOUIsRUFXNEM7QUFDbkQsZUFBTyxjQUFJQyxJQUFKLENBQVNXLEdBQVQsQ0FBYSx3QkFBd0JkLEVBQXJDLEVBQXlDVyxZQUF6QyxFQUF1RCxFQUFDSSxhQUFhLElBQWQsRUFBdkQsRUFDRlYsSUFERSxDQUNHLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0wsZUFBZUssU0FBU0MsSUFBeEIsQ0FBZDtBQUFBLFNBREgsRUFFRkMsS0FGRSxDQUVJLFVBQUNDLEtBQUQ7QUFBQSxtQkFBV1AsY0FBY08sS0FBZCxDQUFYO0FBQUEsU0FGSixDQUFQO0FBR0gsS0FmVTtBQWdCWE8sVUFoQlcsa0JBZ0JKaEIsRUFoQkksRUFnQkFDLGNBaEJBLEVBZ0JnQkMsYUFoQmhCLEVBZ0I4QjtBQUNyQyxlQUFPLGNBQUlDLElBQUosQ0FBU2MsTUFBVCxDQUFnQix3QkFBd0JqQixFQUF4QyxFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxNQUFNRixJQUFwQixDQUFYO0FBQUEsU0FGSixDQUFQO0FBR0g7QUFwQlUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJLZjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBSUE7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO21EQUVBO0FBTEE7WUFNQTswQkFDQTs7OzJCQUdBOzBCQUNBO3VCQUNBOzs7NEJBR0E7NEJBRUE7QUFIQTs7NEJBS0E7NEJBSUE7QUFMQTtBQUxBO0FBSkE7c0JBZ0JBO0FBakJBO0FBa0JBOzs7NENBRUE7O3NCQUdBO3VCQUVBO0FBSEEsYUFEQTtzQkFNQTt1QkFFQTtBQUhBO3NCQUtBO3VCQUdBO0FBSkE7QUFLQTtrQ0FDQTs0Q0FDQTtBQUVBO0FBcEJBO0FBcUJBO2dDQUNBO3lCQUNBLGFBQ0E7QUFDQTs7QUFDQTttQkFHQTtBQUZBO21EQUdBO3NDQUNBO0FBQ0E7c0RBQ0E7eUNBQ0E7QUFDQTt3REFDQTswQ0FDQTtBQUNBOzhDQUNBO2tDQUNBO0FBQ0E7cUNBQ0E7Z0JBQ0E7O3NCQUdBO0FBRkE7QUFHQTs7QUFDQTs7Z0JBQ0E7dUJBQ0E7MkRBQ0E7K0NBQ0E7bUNBRUE7O29CQUNBLG9EQUNBOzBGQUVBOztzQ0FDQSwyREFDQTtnRkFDQTs4RUFFQTs7cURBQ0EsOEJBQ0E7cURBQ0E7OzhCQUdBO0FBRkE7QUFHQSx1Q0FDQTs2Q0FDQTsyREFDQTt1RUFDQTswRkFDQTswREFDQTtBQUNBO0FBQ0E7QUFDQTsyQkFDQTt1REFDQTtBQUNBO0FBRUE7b0NBQ0E7Z0RBQ0E7QUFDQTtBQUVBOztBQXJIQSxFOzs7Ozs7O0FDdkxBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLDZCQUE2QixHQUFHOztBQUUzRTs7Ozs7Ozs7QUNQQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDOVdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy82LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFiYTRiMTNmIXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jcmVhdGUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jcmVhdGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWJhNGIxM2YhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY3JlYXRlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxkYXNoYm9hcmRcXFxcbW9kdWxlc1xcXFxjaGFtcGlvbnNoaXBzXFxcXGNyZWF0ZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjcmVhdGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFiYTRiMTNmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWJhNGIxM2ZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImJyZWFkY3J1bWIuaHJlZlwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIHRhZz1cImxpXCIgdi1mb3I9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cclxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L29sPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cclxuICAgIC5hZG1pbi1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogOTdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NGI4OTE5MjAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNjZmODVlN2Qhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcaGVhZGVyXFxcXHBhZ2VIZWFkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFnZUhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjZmODVlN2RcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02NmY4NWU3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA0NjE0MThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiPHN0eWxlPlxyXG4gICAgLnYtc2VsZWN0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjUpO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XHJcbiAgICAgICAgYm90dG9tOiAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICBjdXJzb3I6IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxyXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XHJcbiAgICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgY2xlYXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpkaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCBsaSBhIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5hY3RpdmUgYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAuMSk7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcclxuICAgIC52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDVweDtcclxuICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5zcGlubmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcixcclxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiA1ZW07XHJcbiAgICAgICAgaGVpZ2h0OiA1ZW07XHJcbiAgICB9XHJcblxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIHYtc2VsZWN0XCIgOmNsYXNzPVwiZHJvcGRvd25DbGFzc2VzXCI+XHJcbiAgICAgICAgPGRpdiByZWY9XCJ0b2dnbGVcIiBAbW91c2Vkb3duLnByZXZlbnQ9XCJ0b2dnbGVEcm9wZG93blwiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1pZj1cIiFzZWFyY2hhYmxlICYmIGlzVmFsdWVFbXB0eVwiPlxyXG4gICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX1cclxuICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLXRhZ1wiIHYtZm9yPVwiKG9wdGlvbixpbmRleCkgaW4gdmFsdWVBc0FycmF5XCIgdi1iaW5kOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XHJcbiAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJtdWx0aXBsZVwiIEBjbGljaz1cInNlbGVjdChvcHRpb24pXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj5cclxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRlYm91bmNlPVwiZGVib3VuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cInNlYXJjaGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRlbGV0ZT1cIm1heWJlRGVsZXRlVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lc2M9XCJvbkVzY2FwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24udXAucHJldmVudD1cInR5cGVBaGVhZFVwXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kb3duLnByZXZlbnQ9XCJ0eXBlQWhlYWREb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXIucHJldmVudD1cInR5cGVBaGVhZFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJvcGVuID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cIm9wZW4gPSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwic2VhcmNoUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IGlzVmFsdWVFbXB0eSA/ICcxMDAlJyA6ICdhdXRvJyB9XCJcclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPGkgcmVmPVwib3BlbkluZGljYXRvclwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzcz1cIm9wZW4taW5kaWNhdG9yXCI+PC9pPlxyXG5cclxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCIgdi1zaG93PVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgPC9zbG90PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8dWwgcmVmPVwiZHJvcGRvd25NZW51XCIgdi1zaG93PVwib3BlblwiIDp0cmFuc2l0aW9uPVwidHJhbnNpdGlvblwiIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgJ21heC1oZWlnaHQnOiBtYXhIZWlnaHQgfVwiPlxyXG4gICAgICAgICAgICA8bGkgdi1mb3I9XCIob3B0aW9uLGluZGV4KSBpbiBmaWx0ZXJlZE9wdGlvbnNcIiB2LWJpbmQ6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gdHlwZUFoZWFkUG9pbnRlciB9XCJcclxuICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XCJ0eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDxhIEBtb3VzZWRvd24ucHJldmVudD1cInNlbGVjdChvcHRpb24pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cImZhZGVcIiB2LWlmPVwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cImZhZGVcIiB2LWlmPVwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibm8tb3B0aW9uc1wiPlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLjwvc2xvdD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdCB0eXBlPVwidGV4dC9iYWJlbFwiPlxyXG4gICAgaW1wb3J0IHBvaW50ZXJTY3JvbGwgZnJvbSAnYmFzZS9taXhpbnMvcG9pbnRlclNjcm9sbCdcclxuICAgIGltcG9ydCB0eXBlQWhlYWRQb2ludGVyIGZyb20gJ2Jhc2UvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXInXHJcbiAgICBpbXBvcnQgYWpheCBmcm9tICdiYXNlL21peGlucy9hamF4J1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBtaXhpbnM6IFtwb2ludGVyU2Nyb2xsLCB0eXBlQWhlYWRQb2ludGVyLCBhamF4XSxcclxuXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbnRhaW5zIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUuIFZlcnkgc2ltaWxhciB0byBhXHJcbiAgICAgICAgICAgICAqIGB2YWx1ZWAgYXR0cmlidXRlIG9uIGFuIDxpbnB1dD4uIEluIG1vc3QgY2FzZXMsIHlvdSdsbCB3YW50XHJcbiAgICAgICAgICAgICAqIHRvIHNldCB0aGlzIGFzIGEgdHdvLXdheSBiaW5kaW5nLCB1c2luZyA6dmFsdWUuc3luYy4gSG93ZXZlcixcclxuICAgICAgICAgICAgICogdGhpcyB3aWxsIG5vdCB3b3JrIHdpdGggVnVleCwgaW4gd2hpY2ggY2FzZSB5b3UnbGwgbmVlZCB0byB1c2VcclxuICAgICAgICAgICAgICogdGhlIG9uQ2hhbmdlIGNhbGxiYWNrIHByb3BlcnR5LlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fHxTdHJpbmd8fG51bGx9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEFuIGFycmF5IG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB0byBiZSB1c2VkIGFzIGRyb3Bkb3duIGNob2ljZXMuXHJcbiAgICAgICAgICAgICAqIElmIHlvdSBhcmUgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdnVlLXNlbGVjdCB3aWxsIGxvb2sgZm9yXHJcbiAgICAgICAgICAgICAqIGEgYGxhYmVsYCBrZXkgKGV4LiBbe2xhYmVsOiAnVGhpcyBpcyBGb28nLCB2YWx1ZTogJ2Zvbyd9XSkuIEFcclxuICAgICAgICAgICAgICogY3VzdG9tIGxhYmVsIGtleSBjYW4gYmUgc2V0IHdpdGggdGhlIGBsYWJlbGAgcHJvcC5cclxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU2V0cyB0aGUgbWF4LWhlaWdodCBwcm9wZXJ0eSBvbiB0aGUgZHJvcGRvd24gbGlzdC5cclxuICAgICAgICAgICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG1heEhlaWdodDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzQwMHB4J1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGZpbHRlcmluZyB0aGUgb3B0aW9ucy5cclxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBtdWx0aXBsZWAgYXR0cmlidXRlIG9uIGEgYDxzZWxlY3Q+YCBpbnB1dC5cclxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG11bHRpcGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBvbiBhbiBgPGlucHV0PmAuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXRzIGEgVnVlIHRyYW5zaXRpb24gcHJvcGVydHkgb24gdGhlIGAuZHJvcGRvd24tbWVudWAuIHZ1ZS1zZWxlY3RcclxuICAgICAgICAgICAgICogZG9lcyBub3QgaW5jbHVkZSBDU1MgZm9yIHRyYW5zaXRpb25zLCB5b3UnbGwgbmVlZCB0byBhZGQgdGhlbSB5b3Vyc2VsZi5cclxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdleHBhbmQnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBjbGVhcmluZyB0aGUgc2VhcmNoIHRleHQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2xlYXJTZWFyY2hPblNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUZWxscyB2dWUtc2VsZWN0IHdoYXQga2V5IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgb3B0aW9uXHJcbiAgICAgICAgICAgICAqIGxhYmVscyB3aGVuIGVhY2ggYG9wdGlvbmAgaXMgYW4gb2JqZWN0LlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsYWJlbCdcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDYWxsYmFjayB0byBnZW5lcmF0ZSB0aGUgbGFiZWwgdGV4dC4gSWYge29wdGlvbn1cclxuICAgICAgICAgICAgICogaXMgYW4gb2JqZWN0LCByZXR1cm5zIG9wdGlvblt0aGlzLmxhYmVsXSBieSBkZWZhdWx0LlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgJiYgb3B0aW9uW3RoaXMubGFiZWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3RoaXMubGFiZWxdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBlYWNoIHRpbWUgdGhlIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAqIHZhbHVlKHMpIGNoYW5nZS4gV2hlbiBpbnRlZ3JhdGluZyB3aXRoIFZ1ZXgsIHVzZSB0aGlzIGNhbGxiYWNrIHRvIHRyaWdnZXJcclxuICAgICAgICAgICAgICogYW4gYWN0aW9uLCByYXRoZXIgdGhhbiB1c2luZyA6dmFsdWUuc3luYyB0byByZXRyZWl2ZSB0aGUgc2VsZWN0ZWQgdmFsdWUuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICAgICAgICAgICAgICogQGRlZmF1bHQge251bGx9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkNoYW5nZTogRnVuY3Rpb24sXHJcbiAgICAgICAgICAgIGNoYW5nZVBhcmFtOiB7fSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBjcmVhdGluZyBvcHRpb25zIGZyb20gc2VhcmNoSW5wdXQuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGFnZ2FibGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFdoZW4gdHJ1ZSwgbmV3bHkgY3JlYXRlZCB0YWdzIHdpbGwgYmUgYWRkZWQgdG9cclxuICAgICAgICAgICAgICogdGhlIG9wdGlvbnMgbGlzdC5cclxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwdXNoVGFnczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVXNlciBkZWZpbmVkIGZ1bmN0aW9uIGZvciBhZGRpbmcgT3B0aW9uc1xyXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjcmVhdGVPcHRpb246IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKG5ld09wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zWzBdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1t0aGlzLmxhYmVsXTogbmV3T3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3T3B0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogV2hlbiBmYWxzZSwgdXBkYXRpbmcgdGhlIG9wdGlvbnMgd2lsbCBub3QgcmVzZXQgdGhlIHNlbGVjdCB2YWx1ZVxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHJlc2V0T25PcHRpb25zQ2hhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICB2YWx1ZSh2YWwsIG9sZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uKHZhbCwgb2xkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdmFsICE9PSBvbGQgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGFnZ2FibGUgJiYgdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5tdWx0aXBsZSA/IFtdIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtdWx0aXBsZSh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsID8gW10gOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZWxlY3Qob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0KG9wdGlvbilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgIXRoaXMub3B0aW9uRXhpc3RzKG9wdGlvbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5jcmVhdGVPcHRpb24ob3B0aW9uKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHVzaFRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTZWxlY3Qob3B0aW9uKVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERlLXNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cclxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZGVzZWxlY3Qob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSAtMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBvcHRpb24gfHwgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsW3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2FsbGVkIGZyb20gdGhpcy5zZWxlY3QgYWZ0ZXIgZWFjaCBzZWxlY3Rpb24uXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9uQWZ0ZXJTZWxlY3Qob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge0V2ZW50fSBlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuJHJlZnMub3BlbkluZGljYXRvciB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5zZWFyY2ggfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMudG9nZ2xlIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpIC8vIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gYmx1clxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guZm9jdXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gb3B0aW9uIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cclxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9ICBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICBUcnVlIHdoZW4gc2VsZWN0ZWQgfHwgRmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpc09wdGlvblNlbGVjdGVkKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uID09PSBvcHRpb25cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJZiB0aGVyZSBpcyBhbnkgdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCByZW1vdmUgaXQuXHJcbiAgICAgICAgICAgICAqIE90aGVyd2lzZSwgYmx1ciB0aGUgc2VhcmNoIGlucHV0IHRvIGNsb3NlIHRoZSBkcm9wZG93bi5cclxuICAgICAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkVzY2FwZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZWxldGUgdGhlIHZhbHVlIG9uIERlbGV0ZSBrZXlwcmVzcyB3aGVuIHRoZXJlIGlzIG5vXHJcbiAgICAgICAgICAgICAqIHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgJiB0aGVyZSdzIHRhZ3MgdG8gZGVsZXRlXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXMudmFsdWV9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtYXliZURlbGV0ZVZhbHVlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyZWZzLnNlYXJjaC52YWx1ZS5sZW5ndGggJiYgdGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy52YWx1ZS5wb3AoKSA6IHRoaXMuc2VsZWN0aW9uID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIERldGVybWluZSBpZiBhbiBvcHRpb24gZXhpc3RzXHJcbiAgICAgICAgICAgICAqIHdpdGhpbiB0aGlzLm9wdGlvbnMgYXJyYXkuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb3B0aW9uRXhpc3RzKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDbGFzc2VzIHRvIGJlIG91dHB1dCBvbiAuZHJvcGRvd25cclxuICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZHJvcGRvd25DbGFzc2VzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdGhpcy5zZWFyY2hhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMubG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgcGxhY2Vob2xkZXIgc3RyaW5nIGlmIGl0J3Mgc2V0XHJcbiAgICAgICAgICAgICAqICYgdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gUGxhY2Vob2xkZXIgdGV4dFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRW1wdHkgJiYgdGhpcy5wbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG9wdGlvbnMsIGZpbHRlcmVkXHJcbiAgICAgICAgICAgICAqIGJ5IHRoZSBzZWFyY2ggZWxlbWVudHMgdmFsdWUuIElmIHRhZ2dpbmdcclxuICAgICAgICAgICAgICogdHJ1ZSwgdGhlIHNlYXJjaCB0ZXh0IHdpbGwgYmUgcHJlcGVuZGVkXHJcbiAgICAgICAgICAgICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC5cclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogQHJldHVybiB7YXJyYXl9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bc2VsZi5sYWJlbF0uaW5kZXhPZihzZWxmLnNlYXJjaCkgIT09IC0xXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoICYmICF0aGlzLm9wdGlvbkV4aXN0cyh0aGlzLnNlYXJjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQodGhpcy5zZWFyY2gpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uc1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3B0aW9ucyBzZWxlY3RlZC5cclxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlzVmFsdWVFbXB0eSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5zZWxlY3Rpb24pLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuc2VsZWN0aW9uLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBpbiBhcnJheSBmb3JtYXQuXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdmFsdWVBc0FycmF5KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RoaXMuc2VsZWN0aW9uXVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZWxlY3QudnVlPzAyODgzZWE1IiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0cHJvcHM6IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogVG9nZ2xlcyB0aGUgYWRkaW5nIG9mIGEgJ2xvYWRpbmcnIGNsYXNzIHRvIHRoZSBtYWluXHJcblx0XHQgKiAudi1zZWxlY3Qgd3JhcHBlci4gVXNlZnVsIHRvIGNvbnRyb2wgVUkgc3RhdGUgd2hlblxyXG5cdFx0ICogcmVzdWx0cyBhcmUgYmVpbmcgcHJvY2Vzc2VkIHRocm91Z2ggQUpBWC5cclxuXHRcdCAqL1xyXG5cdFx0bG9hZGluZzoge1xyXG5cdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEFjY2VwdCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZVxyXG5cdFx0ICogcnVuIHdoZW4gdGhlIHNlYXJjaCB0ZXh0IGNoYW5nZXMuXHJcblx0XHQgKlxyXG5cdFx0ICogbG9hZGluZygpIGFjY2VwdHMgYSBib29sZWFuIHZhbHVlLCBhbmQgY2FuXHJcblx0XHQgKiBiZSB1c2VkIHRvIHRvZ2dsZSBhIGxvYWRpbmcgY2xhc3MgZnJvbVxyXG5cdFx0ICogdGhlIG9uU2VhcmNoIGNhbGxiYWNrLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c2VhcmNofSAgU3RyaW5nICAgICAgICAgIEN1cnJlbnQgc2VhcmNoIHRleHRcclxuXHRcdCAqIEBwYXJhbSB7bG9hZGluZ30gRnVuY3Rpb24oYm9vbCkgIFRvZ2dsZSBsb2FkaW5nIGNsYXNzXHJcblx0XHQgKi9cclxuXHRcdG9uU2VhcmNoOiB7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXHJcblx0XHQgKiBpbnZva2luZyB0aGlzLm9uU2VhcmNoKCkuIFVzZWQgdG8gcHJldmVudFxyXG5cdFx0ICogc2VuZGluZyBhbiBBSkFYIHJlcXVlc3QgdW50aWwgaW5wdXQgaXMgY29tcGxldGUuXHJcblx0XHQgKi9cclxuXHRcdGRlYm91bmNlOiB7XHJcblx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHdhdGNoOiB7XHJcblx0XHQvKipcclxuXHRcdCAqIElmIGEgY2FsbGJhY2sgJiBzZWFyY2ggdGV4dCBoYXMgYmVlbiBwcm92aWRlZCxcclxuXHRcdCAqIGludm9rZSB0aGUgb25TZWFyY2ggY2FsbGJhY2suXHJcblx0XHQgKi9cclxuXHRcdHNlYXJjaCgpIHtcclxuXHRcdFx0aWYgKHRoaXMuc2VhcmNoLmxlbmd0aCA+IDAgJiYgdGhpcy5vblNlYXJjaCkge1xyXG5cdFx0XHRcdHRoaXMub25TZWFyY2godGhpcy5zZWFyY2gsIHRoaXMudG9nZ2xlTG9hZGluZylcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRtZXRob2RzOiB7XHJcblx0XHQvKipcclxuXHRcdCAqIFRvZ2dsZSB0aGlzLmxvYWRpbmcuIE9wdGlvbmFsbHkgcGFzcyBhIGJvb2xlYW5cclxuXHRcdCAqIHZhbHVlLiBJZiBubyB2YWx1ZSBpcyBwcm92aWRlZCwgdGhpcy5sb2FkaW5nXHJcblx0XHQgKiB3aWxsIGJlIHNldCB0byB0aGUgb3Bwb3NpdGUgb2YgaXQncyBjdXJyZW50IHZhbHVlLlxyXG5cdFx0ICogQHBhcmFtIHRvZ2dsZSBCb29sZWFuXHJcblx0XHQgKiBAcmV0dXJucyB7Kn1cclxuXHRcdCAqL1xyXG5cdFx0dG9nZ2xlTG9hZGluZyh0b2dnbGUgPSBudWxsKSB7XHJcblx0XHRcdGlmICh0b2dnbGUgPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyA9IHRvZ2dsZVxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXguanMiLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBwYXJzZU9iakZvcm1EYXRhKG9iaiwgZm9ybWRhdGEsIG5hbWVzcGFjZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZkID0gZm9ybWRhdGE7XHJcbiAgICAgICAgICAgIHZhciBmb3JtS2V5O1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIG9ialtwcm9wZXJ0eV0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVzcGFjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtS2V5ID0gbmFtZXNwYWNlICsgJ1snICsgcHJvcGVydHkgKyAnXSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUtleSA9IHByb3BlcnR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFuIG9iamVjdCwgYnV0IG5vdCBhIEZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHJlY3Vyc2l2aXR5LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcgJiYgIShvYmpbcHJvcGVydHldIGluc3RhbmNlb2YgRmlsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZU9iakZvcm1EYXRhKG9ialtwcm9wZXJ0eV0sIGZkLCBmb3JtS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoZm9ybUtleSwgb2JqW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgd2F0Y2g6IHtcclxuICAgIHR5cGVBaGVhZFBvaW50ZXIoKSB7XHJcbiAgICAgIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogQWRqdXN0IHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duIGxpc3RcclxuICAgICAqIGlmIHRoZSBjdXJyZW50IHBvaW50ZXIgaXMgb3V0c2lkZSBvZiB0aGVcclxuICAgICAqIG92ZXJmbG93IGJvdW5kcy5cclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBtYXliZUFkanVzdFNjcm9sbCgpIHtcclxuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IHRoaXMucGl4ZWxzVG9Qb2ludGVyVG9wKClcclxuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlckJvdHRvbSA9IHRoaXMucGl4ZWxzVG9Qb2ludGVyQm90dG9tKClcclxuXHJcbiAgICAgIGlmICggcGl4ZWxzVG9Qb2ludGVyVG9wIDw9IHRoaXMudmlld3BvcnQoKS50b3ApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyggcGl4ZWxzVG9Qb2ludGVyVG9wIClcclxuICAgICAgfSBlbHNlIGlmIChwaXhlbHNUb1BvaW50ZXJCb3R0b20gPj0gdGhpcy52aWV3cG9ydCgpLmJvdHRvbSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKCB0aGlzLnZpZXdwb3J0KCkudG9wICsgdGhpcy5wb2ludGVySGVpZ2h0KCkgKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSB0b3Agb2YgdGhlIGRyb3Bkb3duXHJcbiAgICAgKiBsaXN0IHRvIHRoZSB0b3Agb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcGl4ZWxzVG9Qb2ludGVyVG9wKCkge1xyXG4gICAgICBsZXQgcGl4ZWxzVG9Qb2ludGVyVG9wID0gMFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFoZWFkUG9pbnRlcjsgaSsrKSB7XHJcbiAgICAgICAgcGl4ZWxzVG9Qb2ludGVyVG9wICs9IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LmNoaWxkcmVuW2ldLm9mZnNldEhlaWdodFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwaXhlbHNUb1BvaW50ZXJUb3BcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIHRvcCBvZiB0aGUgZHJvcGRvd25cclxuICAgICAqIGxpc3QgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY3VycmVudCBwb2ludGVyIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgcGl4ZWxzVG9Qb2ludGVyQm90dG9tKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5waXhlbHNUb1BvaW50ZXJUb3AoKSArIHRoaXMucG9pbnRlckhlaWdodCgpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9mZnNldEhlaWdodCBvZiB0aGUgY3VycmVudCBwb2ludGVyIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBwb2ludGVySGVpZ2h0KCkge1xyXG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LmNoaWxkcmVuW3RoaXMudHlwZUFoZWFkUG9pbnRlcl1cclxuICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCA6IDBcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudGx5IHZpZXdhYmxlIHBvcnRpb24gb2YgdGhlIGRyb3Bkb3duTWVudS5cclxuICAgICAqIEByZXR1cm5zIHt7dG9wOiAoc3RyaW5nfCp8bnVtYmVyKSwgYm90dG9tOiAqfX1cclxuICAgICAqL1xyXG4gICAgdmlld3BvcnQoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3AsXHJcbiAgICAgICAgYm90dG9tOiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5vZmZzZXRIZWlnaHQgKyB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3BcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNjcm9sbCB0aGUgZHJvcGRvd25NZW51IHRvIGEgZ2l2ZW4gcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUbyhwb3NpdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wID0gcG9zaXRpb25cclxuICAgIH0sXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvcG9pbnRlclNjcm9sbC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlQWhlYWRQb2ludGVyOiAtMVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHdhdGNoOiB7XHJcbiAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XHJcbiAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlciA9IDBcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIE1vdmUgdGhlIHR5cGVBaGVhZFBvaW50ZXIgdmlzdWFsbHkgdXAgdGhlIGxpc3QgYnlcclxuICAgICAqIHN1YnRyYWN0aW5nIHRoZSBjdXJyZW50IGluZGV4IGJ5IG9uZS5cclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHR5cGVBaGVhZFVwKCkge1xyXG4gICAgICBpZiAodGhpcy50eXBlQWhlYWRQb2ludGVyID4gMCkge1xyXG4gICAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlci0tXHJcbiAgICAgICAgaWYoIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwgKSB7XHJcbiAgICAgICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IGRvd24gdGhlIGxpc3QgYnlcclxuICAgICAqIGFkZGluZyB0aGUgY3VycmVudCBpbmRleCBieSBvbmUuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0eXBlQWhlYWREb3duKCkge1xyXG4gICAgICBpZiAodGhpcy50eXBlQWhlYWRQb2ludGVyIDwgdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlcisrXHJcbiAgICAgICAgaWYoIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwgKSB7XHJcbiAgICAgICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgdGhlIG9wdGlvbiBhdCB0aGUgY3VycmVudCB0eXBlQWhlYWRQb2ludGVyIHBvc2l0aW9uLlxyXG4gICAgICogT3B0aW9uYWxseSBjbGVhciB0aGUgc2VhcmNoIGlucHV0IG9uIHNlbGVjdGlvbi5cclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHR5cGVBaGVhZFNlbGVjdCgpIHtcclxuICAgICAgaWYoIHRoaXMuZmlsdGVyZWRPcHRpb25zWyB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgXSApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdCggdGhpcy5maWx0ZXJlZE9wdGlvbnNbIHRoaXMudHlwZUFoZWFkUG9pbnRlciBdICk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGgpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VhcmNoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiggdGhpcy5jbGVhclNlYXJjaE9uU2VsZWN0ICkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNnB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxufVxcbi52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG59XFxuLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgYm90dG9tOiAxcHg7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG59XFxuLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuMjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi52LXNlbGVjdC5zZWFyY2hhYmxlIC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLnYtc2VsZWN0ID4gLmRyb3Bkb3duLW1lbnUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4udi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcbn1cXG4udi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF0sXFxuLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgLjVlbTtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgY2xlYXI6IG5vbmU7XFxufVxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi52LXNlbGVjdCBsaSBhIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1zZWxlY3QgLmFjdGl2ZSBhIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAuMSk7XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG4udi1zZWxlY3QgLmhpZ2hsaWdodCBhLFxcbi52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuLnYtc2VsZWN0IC5zcGlubmVyIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXRvcDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICBib3JkZXItbGVmdDogLjllbSBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC40NSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbn1cXG4udi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi52LXNlbGVjdCAuc3Bpbm5lcixcXG4udi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGhlaWdodDogNWVtO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbjAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbjAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlPzAyODgzZWE1XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSx3RUFBQTtJQUFBLGdFQUFBO0lBQ0EsOEVBQUE7WUFBQSxzRUFBQTtJQUNBLFdBQUE7SUFDQSxnQ0FBQTtJQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7Q0FDQTtBQUVBO0lBQ0EsbUNBQUE7SUFDQSxvQkFBQTtJQUNBLGdDQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSx3RUFBQTtJQUFBLGdFQUFBO0lBQ0EsOEVBQUE7WUFBQSxzRUFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLHdDQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtDQUNBO0FBRUE7SUFDQSxhQUFBO0NBQ0E7QUFFQTtJQUNBLG9CQUFBO0lBQ0EsNkJBQUE7SUFDQSw4QkFBQTtDQUNBO0FBRUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7O0lBRUEsc0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGlDQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7O0lBRUEsb0JBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0lBQ0Esa0RBQUE7SUFDQSw4Q0FBQTtJQUNBLGlDQUFBO1lBQUEseUJBQUE7SUFDQSx1REFBQTtZQUFBLCtDQUFBO0lBQ0EsZ0NBQUE7SUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTs7SUFFQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtBQUNBO1FBQ0EsZ0NBQUE7Z0JBQUEsd0JBQUE7Q0FDQTtBQUNBO1FBQ0Esa0NBQUE7Z0JBQUEsMEJBQUE7Q0FDQTtDQUNBO0FBRUE7QUFDQTtRQUNBLGdDQUFBO2dCQUFBLHdCQUFBO0NBQ0E7QUFDQTtRQUNBLGtDQUFBO2dCQUFBLDBCQUFBO0NBQ0E7Q0FDQVwiLFwiZmlsZVwiOlwic2VsZWN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8c3R5bGU+XFxyXFxuICAgIC52LXNlbGVjdCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDZweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjUpO1xcclxcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yIHtcXHJcXG4gICAgICAgIGJvdHRvbTogMXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuMjYpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcXHJcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0ID4gLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDRweCAxcHggMHB4IDNweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS43ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcXHJcXG4gICAgICAgIGZsb2F0OiBub25lO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF0sXFxyXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMGVtO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICAgIGNsZWFyOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCBsaSBhIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLmFjdGl2ZSBhIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xcclxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcXHJcXG4gICAgLnYtc2VsZWN0IGxpOmhvdmVyID4gYSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDVweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XFxyXFxuICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcixcXHJcXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA1ZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcclxcbiAgICAgICAgMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgMTAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXHJcXG4gICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIDEwMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblxcclxcbjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gdi1zZWxlY3RcXFwiIDpjbGFzcz1cXFwiZHJvcGRvd25DbGFzc2VzXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgcmVmPVxcXCJ0b2dnbGVcXFwiIEBtb3VzZWRvd24ucHJldmVudD1cXFwidG9nZ2xlRHJvcGRvd25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2LWlmPVxcXCIhc2VhcmNoYWJsZSAmJiBpc1ZhbHVlRW1wdHlcXFwiPlxcclxcbiAgICAgICAgICB7eyBwbGFjZWhvbGRlciB9fVxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZWxlY3RlZC10YWdcXFwiIHYtZm9yPVxcXCIob3B0aW9uLGluZGV4KSBpbiB2YWx1ZUFzQXJyYXlcXFwiIHYtYmluZDprZXk9XFxcImluZGV4XFxcIj5cXHJcXG4gICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxcclxcbiAgICAgICAgICA8YnV0dG9uIHYtaWY9XFxcIm11bHRpcGxlXFxcIiBAY2xpY2s9XFxcInNlbGVjdChvcHRpb24pXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcblxcclxcbiAgICAgICAgICAgIDxpbnB1dFxcclxcbiAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6ZGVib3VuY2U9XFxcImRlYm91bmNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdi1zaG93PVxcXCJzZWFyY2hhYmxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZGVsZXRlPVxcXCJtYXliZURlbGV0ZVZhbHVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVzYz1cXFwib25Fc2NhcGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi51cC5wcmV2ZW50PVxcXCJ0eXBlQWhlYWRVcFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRvd24ucHJldmVudD1cXFwidHlwZUFoZWFkRG93blxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlci5wcmV2ZW50PVxcXCJ0eXBlQWhlYWRTZWxlY3RcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAYmx1cj1cXFwib3BlbiA9IGZhbHNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVxcXCJvcGVuID0gdHJ1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XFxcInNlYXJjaFBsYWNlaG9sZGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7IHdpZHRoOiBpc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bycgfVxcXCJcXHJcXG4gICAgICAgICAgICA+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGkgcmVmPVxcXCJvcGVuSW5kaWNhdG9yXFxcIiByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGNsYXNzPVxcXCJvcGVuLWluZGljYXRvclxcXCI+PC9pPlxcclxcblxcclxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcInNwaW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGlubmVyXFxcIiB2LXNob3c9XFxcImxvYWRpbmdcXFwiPkxvYWRpbmcuLi48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L3Nsb3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDx1bCByZWY9XFxcImRyb3Bkb3duTWVudVxcXCIgdi1zaG93PVxcXCJvcGVuXFxcIiA6dHJhbnNpdGlvbj1cXFwidHJhbnNpdGlvblxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiXFxyXFxuICAgICAgICAgICAgOnN0eWxlPVxcXCJ7ICdtYXgtaGVpZ2h0JzogbWF4SGVpZ2h0IH1cXFwiPlxcclxcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiKG9wdGlvbixpbmRleCkgaW4gZmlsdGVyZWRPcHRpb25zXFxcIiB2LWJpbmQ6a2V5PVxcXCJpbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7IGFjdGl2ZTogaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSB0eXBlQWhlYWRQb2ludGVyIH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XFxcInR5cGVBaGVhZFBvaW50ZXIgPSBpbmRleFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIEBtb3VzZWRvd24ucHJldmVudD1cXFwic2VsZWN0KG9wdGlvbilcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cXFwiZmFkZVxcXCIgdi1pZj1cXFwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSB0cmFuc2l0aW9uPVxcXCJmYWRlXFxcIiB2LWlmPVxcXCIhZmlsdGVyZWRPcHRpb25zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwibm8tb3B0aW9uc1xcXCI+U29ycnksIG5vIG1hdGNoaW5nIG9wdGlvbnMuPC9zbG90PlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcblxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9iYWJlbFxcXCI+XFxyXFxuICAgIGltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJ2Jhc2UvbWl4aW5zL3BvaW50ZXJTY3JvbGwnXFxyXFxuICAgIGltcG9ydCB0eXBlQWhlYWRQb2ludGVyIGZyb20gJ2Jhc2UvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXInXFxyXFxuICAgIGltcG9ydCBhamF4IGZyb20gJ2Jhc2UvbWl4aW5zL2FqYXgnXFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG1peGluczogW3BvaW50ZXJTY3JvbGwsIHR5cGVBaGVhZFBvaW50ZXIsIGFqYXhdLFxcclxcblxcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHZhbHVlLiBWZXJ5IHNpbWlsYXIgdG8gYVxcclxcbiAgICAgICAgICAgICAqIGB2YWx1ZWAgYXR0cmlidXRlIG9uIGFuIDxpbnB1dD4uIEluIG1vc3QgY2FzZXMsIHlvdSdsbCB3YW50XFxyXFxuICAgICAgICAgICAgICogdG8gc2V0IHRoaXMgYXMgYSB0d28td2F5IGJpbmRpbmcsIHVzaW5nIDp2YWx1ZS5zeW5jLiBIb3dldmVyLFxcclxcbiAgICAgICAgICAgICAqIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFZ1ZXgsIGluIHdoaWNoIGNhc2UgeW91J2xsIG5lZWQgdG8gdXNlXFxyXFxuICAgICAgICAgICAgICogdGhlIG9uQ2hhbmdlIGNhbGxiYWNrIHByb3BlcnR5LlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R8fFN0cmluZ3x8bnVsbH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICB2YWx1ZToge1xcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgdG8gYmUgdXNlZCBhcyBkcm9wZG93biBjaG9pY2VzLlxcclxcbiAgICAgICAgICAgICAqIElmIHlvdSBhcmUgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdnVlLXNlbGVjdCB3aWxsIGxvb2sgZm9yXFxyXFxuICAgICAgICAgICAgICogYSBgbGFiZWxgIGtleSAoZXguIFt7bGFiZWw6ICdUaGlzIGlzIEZvbycsIHZhbHVlOiAnZm9vJ31dKS4gQVxcclxcbiAgICAgICAgICAgICAqIGN1c3RvbSBsYWJlbCBrZXkgY2FuIGJlIHNldCB3aXRoIHRoZSBgbGFiZWxgIHByb3AuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBvcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBTZXRzIHRoZSBtYXgtaGVpZ2h0IHByb3BlcnR5IG9uIHRoZSBkcm9wZG93biBsaXN0LlxcclxcbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnNDAwcHgnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBmaWx0ZXJpbmcgdGhlIG9wdGlvbnMuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgc2VhcmNoYWJsZToge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiBhIGA8c2VsZWN0PmAgaW5wdXQuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBtdWx0aXBsZToge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgb24gYW4gYDxpbnB1dD5gLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJ1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogU2V0cyBhIFZ1ZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHRoZSBgLmRyb3Bkb3duLW1lbnVgLiB2dWUtc2VsZWN0XFxyXFxuICAgICAgICAgICAgICogZG9lcyBub3QgaW5jbHVkZSBDU1MgZm9yIHRyYW5zaXRpb25zLCB5b3UnbGwgbmVlZCB0byBhZGQgdGhlbSB5b3Vyc2VsZi5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZXhwYW5kJ1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBjbGVhcmluZyB0aGUgc2VhcmNoIHRleHQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgY2xlYXJTZWFyY2hPblNlbGVjdDoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBUZWxscyB2dWUtc2VsZWN0IHdoYXQga2V5IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogbGFiZWxzIHdoZW4gZWFjaCBgb3B0aW9uYCBpcyBhbiBvYmplY3QuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBsYWJlbDoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsYWJlbCdcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIENhbGxiYWNrIHRvIGdlbmVyYXRlIHRoZSBsYWJlbCB0ZXh0LiBJZiB7b3B0aW9ufVxcclxcbiAgICAgICAgICAgICAqIGlzIGFuIG9iamVjdCwgcmV0dXJucyBvcHRpb25bdGhpcy5sYWJlbF0gYnkgZGVmYXVsdC5cXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQob3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbCAmJiBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvblt0aGlzLmxhYmVsXVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGVhY2ggdGltZSB0aGUgc2VsZWN0ZWRcXHJcXG4gICAgICAgICAgICAgKiB2YWx1ZShzKSBjaGFuZ2UuIFdoZW4gaW50ZWdyYXRpbmcgd2l0aCBWdWV4LCB1c2UgdGhpcyBjYWxsYmFjayB0byB0cmlnZ2VyXFxyXFxuICAgICAgICAgICAgICogYW4gYWN0aW9uLCByYXRoZXIgdGhhbiB1c2luZyA6dmFsdWUuc3luYyB0byByZXRyZWl2ZSB0aGUgc2VsZWN0ZWQgdmFsdWUuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxcclxcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHtudWxsfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBGdW5jdGlvbixcXHJcXG4gICAgICAgICAgICBjaGFuZ2VQYXJhbToge30sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgY3JlYXRpbmcgb3B0aW9ucyBmcm9tIHNlYXJjaElucHV0LlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHRhZ2dhYmxlOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBXaGVuIHRydWUsIG5ld2x5IGNyZWF0ZWQgdGFncyB3aWxsIGJlIGFkZGVkIHRvXFxyXFxuICAgICAgICAgICAgICogdGhlIG9wdGlvbnMgbGlzdC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBwdXNoVGFnczoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogVXNlciBkZWZpbmVkIGZ1bmN0aW9uIGZvciBhZGRpbmcgT3B0aW9uc1xcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBjcmVhdGVPcHRpb246IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zWzBdID09PSAnb2JqZWN0Jykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7W3RoaXMubGFiZWxdOiBuZXdPcHRpb259XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3T3B0aW9uXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFdoZW4gZmFsc2UsIHVwZGF0aW5nIHRoZSBvcHRpb25zIHdpbGwgbm90IHJlc2V0IHRoZSBzZWxlY3QgdmFsdWVcXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgZGF0YSgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBzZWFyY2g6ICcnLFxcclxcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIHdhdGNoOiB7XFxyXFxuICAgICAgICAgICAgdmFsdWUodmFsLCBvbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWxcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHNlbGVjdGlvbih2YWwsIG9sZCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA/IHRoaXMub25DaGFuZ2UodmFsLCB0aGlzLmNoYW5nZVBhcmFtKSA6IG51bGxcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdmFsICE9PSBvbGQgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG9wdGlvbnMoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy50YWdnYWJsZSAmJiB0aGlzLnJlc2V0T25PcHRpb25zQ2hhbmdlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGxcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgbXVsdGlwbGUodmFsKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsID8gW10gOiBudWxsXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBTZWxlY3QgYSBnaXZlbiBvcHRpb24uXFxyXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgc2VsZWN0KG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3Qob3B0aW9uKVxcclxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgIXRoaXMub3B0aW9uRXhpc3RzKG9wdGlvbikpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSB0aGlzLmNyZWF0ZU9wdGlvbihvcHRpb24pXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHVzaFRhZ3MpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtvcHRpb25dXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChvcHRpb24pXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG9wdGlvblxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMub25BZnRlclNlbGVjdChvcHRpb24pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBEZS1zZWxlY3QgYSBnaXZlbiBvcHRpb24uXFxyXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgZGVzZWxlY3Qob3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gLTFcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmZvckVhY2goKHZhbCkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IG9wdGlvbiB8fCB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWxbdGhpcy5sYWJlbF0gPT09IG9wdGlvblt0aGlzLmxhYmVsXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB2YWxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihyZWYpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKVxcclxcblxcclxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIENhbGxlZCBmcm9tIHRoaXMuc2VsZWN0IGFmdGVyIGVhY2ggc2VsZWN0aW9uLlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG9uQWZ0ZXJTZWxlY3Qob3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlblxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJ1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXFxyXFxuICAgICAgICAgICAgICogQHBhcmFtICB7RXZlbnR9IGVcXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHRvZ2dsZURyb3Bkb3duKGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLm9wZW5JbmRpY2F0b3IgfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMuc2VhcmNoIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnRvZ2dsZSB8fCBlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKCkgLy8gZHJvcGRvd24gd2lsbCBjbG9zZSBvbiBibHVyXFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5mb2N1cygpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZSBnaXZlbiBvcHRpb24gaXMgY3VycmVudGx5IHNlbGVjdGVkLlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSAgb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICBUcnVlIHdoZW4gc2VsZWN0ZWQgfHwgRmFsc2Ugb3RoZXJ3aXNlXFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3Rpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2gob3B0ID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uID09PSBvcHRpb25cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIElmIHRoZXJlIGlzIGFueSB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsIHJlbW92ZSBpdC5cXHJcXG4gICAgICAgICAgICAgKiBPdGhlcndpc2UsIGJsdXIgdGhlIHNlYXJjaCBpbnB1dCB0byBjbG9zZSB0aGUgZHJvcGRvd24uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgb25Fc2NhcGUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2gubGVuZ3RoKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKClcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRGVsZXRlIHRoZSB2YWx1ZSBvbiBEZWxldGUga2V5cHJlc3Mgd2hlbiB0aGVyZSBpcyBub1xcclxcbiAgICAgICAgICAgICAqIHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgJiB0aGVyZSdzIHRhZ3MgdG8gZGVsZXRlXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpcy52YWx1ZX1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBtYXliZURlbGV0ZVZhbHVlKCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJHJlZnMuc2VhcmNoLnZhbHVlLmxlbmd0aCAmJiB0aGlzLnZhbHVlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUucG9wKCkgOiB0aGlzLnNlbGVjdGlvbiA9IG51bGxcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRGV0ZXJtaW5lIGlmIGFuIG9wdGlvbiBleGlzdHNcXHJcXG4gICAgICAgICAgICAgKiB3aXRoaW4gdGhpcy5vcHRpb25zIGFycmF5LlxcclxcbiAgICAgICAgICAgICAqXFxyXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBvcHRpb25FeGlzdHMob3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZVxcclxcblxcclxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0c1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIENsYXNzZXMgdG8gYmUgb3V0cHV0IG9uIC5kcm9wZG93blxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBkcm9wZG93bkNsYXNzZXMoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXFxyXFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0aGlzLnNlYXJjaGFibGUsXFxyXFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmdcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBwbGFjZWhvbGRlciBzdHJpbmcgaWYgaXQncyBzZXRcXHJcXG4gICAgICAgICAgICAgKiAmIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gUGxhY2Vob2xkZXIgdGV4dFxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRW1wdHkgJiYgdGhpcy5wbGFjZWhvbGRlcikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG9wdGlvbnMsIGZpbHRlcmVkXFxyXFxuICAgICAgICAgICAgICogYnkgdGhlIHNlYXJjaCBlbGVtZW50cyB2YWx1ZS4gSWYgdGFnZ2luZ1xcclxcbiAgICAgICAgICAgICAqIHRydWUsIHRoZSBzZWFyY2ggdGV4dCB3aWxsIGJlIHByZXBlbmRlZFxcclxcbiAgICAgICAgICAgICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC5cXHJcXG4gICAgICAgICAgICAgKlxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2FycmF5fVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGZpbHRlcmVkT3B0aW9ucygpIHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xcclxcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbltzZWxmLmxhYmVsXS5pbmRleE9mKHNlbGYuc2VhcmNoKSAhPT0gLTFcXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoICYmICF0aGlzLm9wdGlvbkV4aXN0cyh0aGlzLnNlYXJjaCkpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudW5zaGlmdCh0aGlzLnNlYXJjaClcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uc1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlcmUgYXJlbid0IGFueSBvcHRpb25zIHNlbGVjdGVkLlxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgaXNWYWx1ZUVtcHR5KCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb24gPT09ICdvYmplY3QnKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGlvbikubGVuZ3RoXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuc2VsZWN0aW9uLmxlbmd0aFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGluIGFycmF5IGZvcm1hdC5cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICB2YWx1ZUFzQXJyYXkoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGlvbl1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDEwIDExIDEyIDEzIDE0IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zZWxlY3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOWZkNzUzN2UhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGZvcm1zXFxcXHNlbGVjdFxcXFxzZWxlY3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc2VsZWN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05ZmQ3NTM3ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTlmZDc1MzdlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxMCAxMSAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duIHYtc2VsZWN0XCIsXG4gICAgY2xhc3M6IF92bS5kcm9wZG93bkNsYXNzZXNcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgcmVmOiBcInRvZ2dsZVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLXRvZ2dsZSBjbGVhcmZpeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRvZ2dsZURyb3Bkb3duKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoIV92bS5zZWFyY2hhYmxlICYmIF92bS5pc1ZhbHVlRW1wdHkpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5wbGFjZWhvbGRlcikgKyBcIlxcbiAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS52YWx1ZUFzQXJyYXkpLCBmdW5jdGlvbihvcHRpb24sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdGVkLXRhZ1wiXG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5nZXRPcHRpb25MYWJlbChvcHRpb24pKSArIFwiXFxuICAgICAgXCIpLCAoX3ZtLm11bHRpcGxlKSA/IF9jKCdidXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5zZWxlY3Qob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCLDl1wiKV0pXSkgOiBfdm0uX2UoKV0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2hhYmxlKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoYWJsZVwiXG4gICAgfV0sXG4gICAgcmVmOiBcInNlYXJjaFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgd2lkdGg6IF92bS5pc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bydcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJkZWJvdW5jZVwiOiBfdm0uZGVib3VuY2UsXG4gICAgICBcInR5cGVcIjogXCJzZWFyY2hcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLnNlYXJjaFBsYWNlaG9sZGVyXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnNlYXJjaClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleWRvd25cIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImRlbGV0ZVwiLCBbOCwgNDZdKSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm1heWJlRGVsZXRlVmFsdWUoJGV2ZW50KVxuICAgICAgfSwgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwidXBcIiwgMzgpKSB7IHJldHVybjsgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnR5cGVBaGVhZFVwKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImRvd25cIiwgNDApKSB7IHJldHVybjsgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnR5cGVBaGVhZERvd24oJGV2ZW50KVxuICAgICAgfV0sXG4gICAgICBcImtleXVwXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlc2NcIiwgMjcpKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ub25Fc2NhcGUoJGV2ZW50KVxuICAgICAgfSwgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMpKSB7IHJldHVybjsgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnR5cGVBaGVhZFNlbGVjdCgkZXZlbnQpXG4gICAgICB9XSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW4gPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIFwiZm9jdXNcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICByZWY6IFwib3BlbkluZGljYXRvclwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm9wZW4taW5kaWNhdG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm9sZVwiOiBcInByZXNlbnRhdGlvblwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwic3Bpbm5lclwiLCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ubG9hZGluZyksXG4gICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInNwaW5uZXJcIlxuICB9LCBbX3ZtLl92KFwiTG9hZGluZy4uLlwiKV0pXSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5vcGVuKSxcbiAgICAgIGV4cHJlc3Npb246IFwib3BlblwiXG4gICAgfV0sXG4gICAgcmVmOiBcImRyb3Bkb3duTWVudVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnVcIixcbiAgICBzdHlsZTogKHtcbiAgICAgICdtYXgtaGVpZ2h0JzogX3ZtLm1heEhlaWdodFxuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogX3ZtLnRyYW5zaXRpb25cbiAgICB9XG4gIH0sIFtfdm0uX2woKF92bS5maWx0ZXJlZE9wdGlvbnMpLCBmdW5jdGlvbihvcHRpb24sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBjbGFzczoge1xuICAgICAgICBhY3RpdmU6IF92bS5pc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IF92bS50eXBlQWhlYWRQb2ludGVyXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJtb3VzZW92ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnR5cGVBaGVhZFBvaW50ZXIgPSBpbmRleFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJtb3VzZWRvd25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLnNlbGVjdChvcHRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5nZXRPcHRpb25MYWJlbChvcHRpb24pKSArIFwiXFxuICAgICAgICAgICAgXCIpXSldKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkgPyBfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGl2aWRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogXCJmYWRlXCJcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghX3ZtLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgpID8gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJhbnNpdGlvblwiOiBcImZhZGVcIlxuICAgIH1cbiAgfSwgW192bS5fdChcIm5vLW9wdGlvbnNcIiwgW192bS5fdihcIlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLlwiKV0pXSwgMikgOiBfdm0uX2UoKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOWZkNzUzN2VcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggMTAgMTEgMTIgMTMgMTQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImQ5MzA0ZTU0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDEwIDExIDEyIDEzIDE0IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aW1nIDpzcmM9XCJkZWZhdWx0SW1hZ2VcIiBhbHQ9XCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIiB3aWR0aD1cIjExMHB4XCIgdi1pZj1cIiFpbWFnZUZpbGVcIj5cclxuICAgICAgICA8aW1nIDpzcmM9XCJpbWFnZUZpbGVcIiBhbHQ9XCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIiB3aWR0aD1cIjExMHB4XCIgdi1pZj1cImltYWdlRmlsZVwiPlxyXG5cclxuICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJpbWFnZS11cGxvYWRlclwiIGNsYXNzPVwiaW5wdXRmaWxlXCIgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZVwiXHJcbiAgICAgICAgICAgICAgIHJlZj1cImZpbGVpbnB1dFwiLz5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2UtdXBsb2FkZXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPjxpIGNsYXNzPVwiZmEgZmEtY2xvdWRcIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4gICAgLmlucHV0ZmlsZSB7XHJcbiAgICAgICAgd2lkdGg6IDAuMXB4O1xyXG4gICAgICAgIGhlaWdodDogMC4xcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2YWx1ZToge30sXHJcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdpbWFnZS8qJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidG5UZXh0OiB7fSxcclxuICAgICAgICAgICAgZXJyb3JWYWxpZGF0aW9uTXNnOiB7fSxcclxuICAgICAgICAgICAgd2lkdGg6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDExMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbWFnZToge30sXHJcbiAgICAgICAgICAgIGRlZmF1bHRJbWFnZToge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIGltYWdlOiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VGaWxlOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gZS50YXJnZXQuZmlsZXMgfHwgZS5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUltYWdlKGZpbGVzWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlLnR5cGUubWF0Y2godGhpcy5hY2NlcHRlZEZpbGVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2UtdXBsb2FkZXJcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3Qud2FybmluZ1RvYXN0KHRoaXMuZXJyb3JWYWxpZGF0aW9uTXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHRoaXMuZGVmYXVsdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaW1hZ2VGaWxlID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldEZpbGUoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmZpbGVpbnB1dC5maWxlc1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkbmMtaW1hZ2UtdXBsb2FkLnZ1ZT82NGM1YzQyNSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmlucHV0ZmlsZSB7XFxuICAgIHdpZHRoOiAwLjFweDtcXG4gICAgaGVpZ2h0OiAwLjFweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuLmlucHV0ZmlsZSArIGxhYmVsIHtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzY0YzVjNDI1XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFhQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImRuYy1pbWFnZS11cGxvYWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiZGVmYXVsdEltYWdlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCIhaW1hZ2VGaWxlXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiaW1hZ2VGaWxlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCJpbWFnZUZpbGVcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGJyPjxicj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuYW1lPVxcXCJmaWxlXFxcIiBpZD1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJpbnB1dGZpbGVcXFwiIEBjaGFuZ2U9XFxcIm9uRmlsZUNoYW5nZVxcXCJcXHJcXG4gICAgICAgICAgICAgICByZWY9XFxcImZpbGVpbnB1dFxcXCIvPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jbG91ZFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAuaW5wdXRmaWxlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwLjFweDtcXHJcXG4gICAgICAgIGhlaWdodDogMC4xcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbnB1dGZpbGUgKyBsYWJlbCB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgdmFsdWU6IHt9LFxcclxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGJ0blRleHQ6IHt9LFxcclxcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXFxyXFxuICAgICAgICAgICAgd2lkdGg6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGltYWdlOiB7fSxcXHJcXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHZhbDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YSgpe1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpe1xcclxcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcztcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCh0aGlzLmFjY2VwdGVkRmlsZXMpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiaW1hZ2UtdXBsb2FkZXJcXFwiKS52YWx1ZSA9IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC53YXJuaW5nVG9hc3QodGhpcy5lcnJvclZhbGlkYXRpb25Nc2cpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xcclxcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldEZpbGUoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZmlsZWlucHV0LmZpbGVzWzBdO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDEwIDExIDEyIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTZkY2IyYzM0IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02ZGNiMmMzNCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXHVwbG9hZFxcXFxkbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRuYy1pbWFnZS11cGxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZkY2IyYzM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmRjYjJjMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxMCAxMSAxMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyghX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZGVmYXVsdEltYWdlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2VGaWxlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwiZmlsZWlucHV0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRmaWxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImZpbGVcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGVcIixcbiAgICAgIFwiaWRcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZUNoYW5nZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvdWRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0uYnRuVGV4dCkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZkY2IyYzM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxMCAxMSAxMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjYzNDAwMjM5XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZkY2IyYzM0IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDEwIDExIDEyIiwiLyoqXHJcbiAqIFRoZSBhcnJheSBvZiBuYW1lcyBvZiB0aGUgdG9vbHRpcCBtZXNzYWdlcyBvZiB0aGUgZGF0ZXRpbWUgcGlja2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgY29uc3RhbnQgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXHJcbiAqL1xyXG52YXIgREFURVRJTUVfUElDS0VSX1RPT0xUSVBTID0gW1xyXG4gICAgXCJ0b2RheVwiLCBcImNsZWFyXCIsIFwiY2xvc2VcIixcclxuICAgIFwic2VsZWN0TW9udGhcIiwgXCJwcmV2TW9udGhcIiwgXCJuZXh0TW9udGhcIixcclxuICAgIFwic2VsZWN0WWVhclwiLCBcInByZXZZZWFyXCIsIFwibmV4dFllYXJcIixcclxuICAgIFwic2VsZWN0RGVjYWRlXCIsIFwicHJldkRlY2FkZVwiLCBcIm5leHREZWNhZGVcIixcclxuICAgIFwicHJldkNlbnR1cnlcIiwgXCJuZXh0Q2VudHVyeVwiLFxyXG4gICAgXCJwaWNrSG91clwiLCBcImluY3JlbWVudEhvdXJcIiwgXCJkZWNyZW1lbnRIb3VyXCIsXHJcbiAgICBcInBpY2tNaW51dGVcIiwgXCJpbmNyZW1lbnRNaW51dGVcIiwgXCJkZWNyZW1lbnRNaW51dGVcIixcclxuICAgIFwicGlja1NlY29uZFwiLCBcImluY3JlbWVudFNlY29uZFwiLCBcImRlY3JlbWVudFNlY29uZFwiLFxyXG4gICAgXCJ0b2dnbGVQZXJpb2RcIiwgXCJzZWxlY3RUaW1lXCJcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsYW5ndWFnZSB1c2VkIGJ5IHRoaXMgY29tcG9uZW50LlxyXG4gKi9cclxudmFyIERFRkFVTFRfTEFOR1VBR0UgPSBcImVuLVVTXCI7XHJcblxyXG4vKipcclxuICogQSBkYXRldGltZSBwaWNrZXIgY29udHJvbC5cclxuICpcclxuICogQHBhcmFtIG1vZGVsXHJcbiAqICAgIHRoZSBtb2RlbCBiaW5kIHRvIHRoZSBjb250cm9sLCB3aGljaCBtdXN0IGJlIGEgdHdvIHdheSBiaW5kaW5nIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gdHlwZVxyXG4gKiAgICB0aGUgb3B0aW9uYWwgdHlwZSBvZiB0aGlzIGRhdGV0aW1lIHBpY2tlciBjb250cm9sLiBBdmFpbGFibGUgdmFsdWVzIGFyZVxyXG4gKiAgICAtIFwiZGF0ZXRpbWVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIGRhdGV0aW1lIHBpY2tlcixcclxuICogICAgLSBcImRhdGVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIGRhdGUgcGlja2VyLFxyXG4gKiAgICAtIFwidGltZVwiOiBJbmRpY2F0aW5nIHRoYXQgdGhpcyBjb250cm9sIGlzIGEgdGltZSBwaWNrZXIuXHJcbiAqICAgIERlZmF1bHQgdmFsdWUgaXMgXCJkYXRldGltZVwiLlxyXG4gKiBAcGFyYW0gbGFuZ3VhZ2VcclxuICogICAgdGhlIG9wdGlvbmFsIGxhbmd1YWdlIGNvZGUgdXNlZCB0byBsb2NhbGl6ZSB0aGUgY29udHJvbCwgd2hpY2ggbXVzdCBiZVxyXG4gKiAgICBhIHZhbGlkIGxhbmd1YWdlIGNvZGUgc3VwcG9ydGVkIGJ5IHRoZSBtb21lbnQuanMgbGlicmFyeS4gSWYgaXQgaXMgbm90IHNldCxcclxuICogICAgYW5kIHRoZSBbdnVlLWkxOG5dKGh0dHBzOi8vZ2l0aHViLmNvbS9IYWl4aW5nLUh1L3Z1ZS1pMThuKSBwbHVnaW4gaXMgdXNlZCxcclxuICogICAgdGhlIGNvbXBvbmVudCB3aWxsIHVzZSB0aGUgbGFuZ3VhZ2UgY29kZSBgJGxhbmd1YWdlYCBwcm92aWRlZCBieSB0aGVcclxuICogICAgW3Z1ZS1pMThuXShodHRwczovL2dpdGh1Yi5jb20vSGFpeGluZy1IdS92dWUtaTE4bikgcGx1Z2luOyBvdGhlcndpc2UsIHRoZVxyXG4gKiAgICBjb21wb25lbnQgd2lsbCB1c2UgdGhlIGRlZmF1bHQgdmFsdWUgXCJlbi1VU1wiLlxyXG4gKiBAcGFyYW0gZGF0ZXRpbWVGb3JtYXRcclxuICogICAgdGhlIG9wdGlvbmFsIGZvcm1hdCBvZiB0aGUgZGF0ZXRpbWUgdGhpcyBjb21wb25lbnQgc2hvdWxkIGRpc3BsYXksIHdoaWNoXHJcbiAqICAgIG11c3QgYmUgYSB2YWxpZCBkYXRldGltZSBmb3JtYXQgb2YgdGhlIG1vbWVudC5qcyBsaWJyYXJ5LiBUaGlzIHByb3BlcnR5XHJcbiAqICAgIG9ubHkgd29ya3Mgd2hlbiB0aGUgXCJ0eXBlXCIgcHJvcGVydHkgaXMgXCJkYXRldGltZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiWVlZWS1NTS1ERCBISDptbTpzc1wiLlxyXG4gKiBAcGFyYW0gZGF0ZUZvcm1hdFxyXG4gKiAgICB0aGUgb3B0aW9uYWwgZm9ybWF0IG9mIHRoZSBkYXRlIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwiZGF0ZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiWVlZWS1NTS1ERFwiLlxyXG4gKiBAcGFyYW0gdGltZUZvcm1hdFxyXG4gKiAgICB0aGUgb3B0aW9uYWwgZm9ybWF0IG9mIHRoZSB0aW1lIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwidGltZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiSEg6bW06c3NcIi5cclxuICogQHBhcmFtIG5hbWVcclxuICogICAgdGhlIG9wdGlvbmFsIG5hbWUgb2YgdGhlIHNlbGVjdGlvbiBjb250cm9sLlxyXG4gKiBAcGFyYW0gb25DaGFuZ2VcclxuICogICAgdGhlIG9wdGlvbmFsIGV2ZW50IGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBkYXRldGltZSBwaWNrZXJcclxuICogICAgd2FzIGNoYW5nZWQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnRlZCBhbmQgaXMgbm90IG51bGwsIGl0IG11c3QgYmUgYVxyXG4gKiAgICBmdW5jdGlvbiB3aGljaCBhY2NlcHQgb25lIGFyZ3VtZW50OiB0aGUgbmV3IGRhdGUgdGltZSwgd2hpY2ggaXMgYSBtb21lbnRcclxuICogICAgb2JqZWN0LlxyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgIGluaGVyaXQ6IGZhbHNlLFxyXG4gICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz0naW5wdXQtZ3JvdXAgZGF0ZSc+XCIgK1xyXG4gICAgXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCcgOm5hbWU9J25hbWUnIHR5cGU9J3RleHQnIC8+XCIgK1xyXG4gICAgXCI8c3BhbiBjbGFzcz0naW5wdXQtZ3JvdXAtYWRkb24nPlwiICtcclxuICAgIFwiPGkgY2xhc3M9J2ZhIGZhLWZ3IGZhLWNhbGVuZGFyJz48L2k+XCIgK1xyXG4gICAgXCI8L3NwYW4+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW9kZWw6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcImRhdGV0aW1lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRldGltZUZvcm1hdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiWVlZWS1NTS1ERFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lRm9ybWF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIkhIOm1tOnNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2hhbmdlOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF0ZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJkYXRldGltZS1waWNrZXIucmVhZHlcIik7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHVzZUN1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAnZmEgZmEtY2xvY2stbycsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnZmEgZmEtY2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgdXA6ICdmYSBmYS1jaGV2cm9uLXVwJyxcclxuICAgICAgICAgICAgICAgIGRvd246ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhIGZhLWNoZXZyb24tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgdG9kYXk6ICdmYSBmYS1kb3QtY2lyY2xlLW8nLFxyXG4gICAgICAgICAgICAgICAgY2xlYXI6ICdmYSBmYS10cmFzaCcsXHJcbiAgICAgICAgICAgICAgICBjbG9zZTogJ2ZhIGZhLXRpbWVzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBzZXQgdGhlIGxvY2FsZVxyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XHJcbiAgICAgICAgaWYgKGxhbmd1YWdlID09PSBudWxsIHx8IGxhbmd1YWdlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRsYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLiRsYW5ndWFnZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhbmdhdWdlID0gREVGQVVMVF9MQU5HVUFHRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VDb2RlKGxhbmd1YWdlKTtcclxuICAgICAgICAvLyBzZXQgdGhlIGZvcm1hdFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdCA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGltZVwiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSB0aGlzLnRpbWVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdCA9IHRoaXMuZGF0ZXRpbWVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdXNlIHRoZSB2dWUtaTE4biBwbHVnaW4gZm9yIGxvY2FsaXplIHRoZSB0b29sdGlwc1xyXG4gICAgICAgIGlmICh0aGlzLiRpMThuICYmIHRoaXMuJGkxOG4uZGF0ZXRpbWVfcGlja2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMuJGkxOG4uZGF0ZXRpbWVfcGlja2VyO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcHMgPSAkLmZuLmRhdGV0aW1lcGlja2VyLmRlZmF1bHRzLnRvb2x0aXBzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IERBVEVUSU1FX1BJQ0tFUl9UT09MVElQUy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBEQVRFVElNRV9QSUNLRVJfVE9PTFRJUFNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tuYW1lXSA9IG1lc3NhZ2VzW25hbWVdOyAgICAvLyBsb2NhbGl6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudG9vbHRpcHMgPSB0b29sdGlwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb250cm9sXHJcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMuJGVsKS5kYXRldGltZXBpY2tlcihvcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gJCh0aGlzLiRlbCkuZGF0YShcIkRhdGVUaW1lUGlja2VyXCIpO1xyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGRhdGUgdG8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIG1vZGVsXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5kYXRlKHRoaXMubW9kZWwpO1xyXG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgICAgICAkKHRoaXMuJGVsKS5vbihcImRwLmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmlzQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5pc0NoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtZS5kYXRlID0gbWUuY29udHJvbC5kYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWUub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLm9uQ2hhbmdlKG1lLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgXCJtb2RlbFwiOiBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZGF0ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgbGFuZ3VhZ2UgY29kZSBmcm9tIHRoZSBcImxhbmd1YWdlLWNvdW50cnlcIiBsb2NhbGUgY29kZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFRoZSBmdW5jdGlvbiB3aWxsIHN0cmlwIHRoZSBsYW5ndWFnZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgXCItXCIgb2YgYVxyXG4gICAgICAgICAqIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSwgcGFzcyBcImVuLVVTXCIgd2lsbCByZXR1cm5zIFwiZW5cIi4gQnV0IGZvciBzb21lXHJcbiAgICAgICAgICogc3BlY2lhbCBsb2NhbGVzLCB0aGUgZnVuY3Rpb24gcmVzZXJ2ZXMgdGhlIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSxcclxuICAgICAgICAgKiB0aGUgXCJ6aC1DTlwiIGZvciB0aGUgc2ltcGxpZmllZCBDaGluZXNlIGFuZCB0aGUgXCJ6aC1UV1wiIGZvciB0aGVcclxuICAgICAgICAgKiB0cmFkaXRpb25hbCBDaGluZXNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIGxvY2FsZVxyXG4gICAgICAgICAqICAgIEEgbG9jYWxlIGNvZGUuXHJcbiAgICAgICAgICogQHJldHVyblxyXG4gICAgICAgICAqICAgIHRoZSBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsb2NhbGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TGFuZ3VhZ2VDb2RlOiBmdW5jdGlvbiAobG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbGUgPT09IG51bGwgfHwgbG9jYWxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG9jYWxlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiemgtQ05cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiemgtVFdcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItTUFcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItU0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItVE5cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGUtQVRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tQVVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tQ0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tR0JcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnItQ0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaHktQU1cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibXMtTVlcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHQtQlJcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ItQ1lSTFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0bC1QSFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0em0tTEFUTlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0em1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2VydmUgb25seSB0aGUgZmlyc3QgdHdvIGxldHRlcnMgbGFuZ3VhZ2UgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlLnN1YnN0cigwLCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGF0ZXRpbWUvdnVlLWRhdGV0aW1lLXBpY2tlci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiZW5cIjoge1xyXG4gICAgICAgIFwiY2hhbXBpb25zaGlwc1wiOiB7XHJcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgQ2hhbXBpb25zaGlwIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIENoYW1waW9uc2hpcCB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiVGhlIENoYW1waW9uc2hpcCB3YXMgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgXCJldmVudF9wb3N0ZXJfZGVsZXRlZFwiOiBcIlRoZSBDaGFtcGlvbnNoaXAgcG9zdGVyIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIlRoZSBDaGFtcGlvbnNoaXAgZG9lc24ndCBleGlzdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcHNcIjogXCJDaGFtcGlvbnNoaXBzXCIsXHJcbiAgICAgICAgICAgIFwic3BvcnRcIjogXCJTcG9ydFwiLFxyXG4gICAgICAgICAgICBcImluaXRfZGF0ZVwiOiBcIkluaXQgRGF0ZVwiLFxyXG4gICAgICAgICAgICBcImVuZF9kYXRlXCI6IFwiRW5kIERhdGVcIixcclxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWN0aW9uc1wiLFxyXG4gICAgICAgICAgICBcInNlbGVjdF9vcHRpb25cIjogXCJTZWxlY3QgYW4gb3B0aW9uXCIsXHJcbiAgICAgICAgICAgIFwidXBsb2FkX2ltYWdlXCI6IFwiVXBsb2FkIGltYWdlXCIsXHJcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTmV3IENoYW1waW9uc2hpcFwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiQXJlIHlvdSBzdXJlPyB0aGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlX2NoYW1waW9uc2hpcFwiOiBcIkRlbGV0ZSBDaGFtcGlvbnNoaXBcIixcclxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBfaW5mb1wiOiBcIkNoYW1waW9uc2hpcCBJbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBcInNlZV9hbGxcIjogXCJTZWUgQWxsXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWN0XCIsXHJcbiAgICAgICAgICAgIFwic2VhcmNoX2NoYW1waW9uc2hpcFwiOiBcIlNlYXJjaCBDaGFtcGlvbnNoaXBcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImVzXCI6IHtcclxuICAgICAgICBcImNoYW1waW9uc2hpcHNcIjoge1xyXG4gICAgICAgICAgICBcImNyZWF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgY2FtcGVvbmF0byBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxyXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgY2FtcGVvbmF0byBmdWUgYWN0dWFsaXphZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIkVsIGNhbXBlb25hdG8gZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcclxuICAgICAgICAgICAgXCJldmVudF9wb3N0ZXJfZGVsZXRlZFwiOiBcIkVsIHBvc3RlciBmdWUgZWxpbWluYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxyXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIGNhbXBlb25hdG8gbm8gZXhpc3RlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vbWJyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXHJcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwc1wiOiBcIkNhbXBlb25hdG9zXCIsXHJcbiAgICAgICAgICAgIFwic3BvcnRcIjogXCJEZXBvcnRlXCIsXHJcbiAgICAgICAgICAgIFwiaW5pdF9kYXRlXCI6IFwiRmVjaGEgZGUgaW5pY2lvXCIsXHJcbiAgICAgICAgICAgIFwiZW5kX2RhdGVcIjogXCJGZWNoYSBkZSBmaW5hbGl6YWNpw7NuXCIsXHJcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjY2lvbmVzXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjY2lvbmUgdW5hIG9wY2nDs25cIixcclxuICAgICAgICAgICAgXCJ1cGxvYWRfaW1hZ2VcIjogXCJTdWJpciBJbWFnZW5cIixcclxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJBY3R1YWxpemFyXCIsXHJcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTnVldm8gQ2FtcGVvbmF0b1wiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9jaGFtcGlvbnNoaXBcIjogXCJFbGltaW5hciBDYW1wZW9uYXRvXCIsXHJcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwX2luZm9cIjogXCJJbmZvcm1hY2nDs24gZGVsIGNhbXBlb25hdG9cIixcclxuICAgICAgICAgICAgXCJzZWVfYWxsXCI6IFwiVmVyIFRvZG9zXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWNjaW9uYXJcIixcclxuICAgICAgICAgICAgXCJzZWFyY2hfY2hhbXBpb25zaGlwXCI6IFwiQnVzY2FyIENhbXBlb25hdG9cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9jaGFtcGlvbnNoaXBzLycgKyBpZCArICc/aW5jbHVkZT1zcG9ydCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGUoY2hhbXBpb25zaGlwLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvY2hhbXBpb25zaGlwcycsIGNoYW1waW9uc2hpcClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShpZCwgY2hhbXBpb25zaGlwLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnB1dCgnL2FwaS9jaGFtcGlvbnNoaXBzLycgKyBpZCwgY2hhbXBpb25zaGlwLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmRlbGV0ZSgnL2FwaS9jaGFtcGlvbnNoaXBzLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9jaGFtcGlvbnNoaXBzL2NoYW1waW9uc2hpcFNlcnZpY2UuanMiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxhZG1pbi1oZWFkZXIgOnRpdGxlPVwiJHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKVwiIDpicmVhZGNydW1icz1cImJyZWFkY3J1bWJzXCI+PC9hZG1pbi1oZWFkZXI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiY2hhbXBpb25zaGlwLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+e3skdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmJveC1oZWFkZXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCduYW1lZW4nKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVlblwiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdjaGFtcGlvbnNoaXBzLm5hbWUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lZW5cIiBuYW1lPVwibmFtZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdjaGFtcGlvbnNoaXBzLm5hbWUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnY2hhbXBpb25zaGlwcy5uYW1lJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCduYW1lZW4nKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnbmFtZWVuJykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdkZXNjcmlwdGlvbmVuJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvbmVuXCIgZGF0YS1lcnJvcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdjaGFtcGlvbnNoaXBzLmRlc2NyaXB0aW9uJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25lblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25lblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnY2hhbXBpb25zaGlwcy5kZXNjcmlwdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnY2hhbXBpb25zaGlwcy5kZXNjcmlwdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCdkZXNjcmlwdGlvbmVuJylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ3RyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkbmMtaW1hZ2UtdXBsb2FkZXIgOmJ0bi10ZXh0PVwiJHQoJ2NoYW1waW9uc2hpcHMudXBsb2FkX2ltYWdlJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItdmFsaWRhdGlvbi1tc2c9XCIkdCgndmFsaWRhdGlvbi5pbWFnZScse2F0dHJpYnV0ZTokdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKX0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmltYWdlPVwiY2hhbXBpb25zaGlwLmltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdC1pbWFnZT1cIi9pbWFnZXMvbWlzc2luZy9jaGFtcGlvbnNoaXAvbWlzc2luZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRlclwiPjwvZG5jLWltYWdlLXVwbG9hZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnc3BvcnQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNwb3J0c1wiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdjaGFtcGlvbnNoaXBzLnNwb3J0Jyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDp2YWx1ZT1cImNoYW1waW9uc2hpcC5zcG9ydFwiIGxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJzcG9ydENoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnY2hhbXBpb25zaGlwcy5zZWxlY3Rfb3B0aW9uJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNwb3J0c1wiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3BvcnRfaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoYW1waW9uc2hpcC5zcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdjaGFtcGlvbnNoaXBzLnNwb3J0JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3Nwb3J0JylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ3Nwb3J0JykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnaW5pdF9kYXRlJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbml0X2RhdGVcIiBkYXRhLWVycm9yPVwiXCI+e3skdCgnY2hhbXBpb25zaGlwcy5pbml0X2RhdGUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLWRhdGV0aW1lLXBpY2tlciBjbGFzcz1cInZ1ZS1waWNrZXIyXCIgbmFtZT1cImluaXRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1vZGVsPVwiY2hhbXBpb25zaGlwLmluaXRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImluaXREYXRlQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT1cImVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRldGltZS1mb3JtYXQ9XCJMTExcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1kYXRldGltZS1waWNrZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW5pdF9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hhbXBpb25zaGlwLmluaXRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbml0X2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnY2hhbXBpb25zaGlwcy5pbml0X2RhdGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnaW5pdF9kYXRlJylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2luaXRfZGF0ZScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2VuZF9kYXRlJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbmRfZGF0ZVwiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdjaGFtcGlvbnNoaXBzLmVuZF9kYXRlJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1kYXRldGltZS1waWNrZXIgY2xhc3M9XCJ2dWUtcGlja2VyM1wiIG5hbWU9XCJlbmRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1vZGVsPVwiY2hhbXBpb25zaGlwLmVuZF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwiZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJlbmREYXRlQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWUtZm9ybWF0PVwiTExMXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92dWUtZGF0ZXRpbWUtcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVuZF9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hhbXBpb25zaGlwLmVuZF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVuZF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2NoYW1waW9uc2hpcHMuZW5kX2RhdGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZW5kX2RhdGUnKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZW5kX2RhdGUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdmb3Jtcy5iYWNrJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBocmVmPVwiIyFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnZGlzYWJsZWQnOnVwZGF0aW5nfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uU3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZm9ybXMuc2F2ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XHJcbiAgICBpbXBvcnQgY2hhbXBpb25zaGlwTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBzLmpzJztcclxuICAgIGltcG9ydCBmb3JtRGF0YU9iamVjdFBhcnNlciBmcm9tICdiYXNlL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyJ1xyXG4gICAgaW1wb3J0IHttYXBBY3Rpb25zfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGRuY0ltYWdlVXBsb2FkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZSc7XHJcbiAgICBpbXBvcnQgdlNlbGVjdCBmcm9tIFwiYmFzZS9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXCJcclxuICAgIGltcG9ydCBhZG1pbkhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xyXG4gICAgaW1wb3J0IGNoYW1waW9uc2hpcFNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBTZXJ2aWNlJ1xyXG5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIHZTZWxlY3QsXHJcbiAgICAgICAgICAgIGFkbWluSGVhZGVyLFxyXG4gICAgICAgICAgICBkbmNJbWFnZVVwbG9hZGVyLFxyXG4gICAgICAgICAgICBcInZ1ZS1kYXRldGltZS1waWNrZXJcIjogcmVxdWlyZShcImJhc2UvY29tcG9uZW50cy9kYXRldGltZS92dWUtZGF0ZXRpbWUtcGlja2VyLmpzXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWl4aW5zOiBbZm9ybURhdGFPYmplY3RQYXJzZXJdLFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNoYW1waW9uc2hpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRfZGF0ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBlbmRfZGF0ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzcG9ydDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbjogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVwZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uaG9tZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9jaGFtcGlvbnNoaXBzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi5jaGFtcGlvbnNoaXBzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2NoYW1waW9uc2hpcHMvY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi5uZXcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcG9ydHMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLnNwb3J0c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYWxlczogY2hhbXBpb25zaGlwTG9jYWxlcyxcclxuICAgICAgICBjcmVhdGVkKCl7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zcG9ydHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTcG9ydHMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICBnZXRTcG9ydHM6ICdjb21tb246Z2V0U3BvcnRzJyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHNwb3J0Q2hhbmdlZChzcG9ydCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcC5zcG9ydCA9IHNwb3J0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVuZERhdGVDaGFuZ2VkKGRhdGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFtcGlvbnNoaXAuZW5kX2RhdGUgPSBkYXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0RGF0ZUNoYW5nZWQoZGF0ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcC5pbml0X2RhdGUgPSBkYXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RhbERpc21pc3MoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXRobGV0ZU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25CYWNrKGV2dCl7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hhbXBpb25zaGlwcy5saXN0J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TdWJtaXQoZXZ0KXtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gc2VsZi4kcmVmcy51cGxvYWRlci5nZXRGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RlcicsIHNlbGYuJHJlZnMudXBsb2FkZXIuZ2V0RmlsZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IHNlbGYucGFyc2VPYmpGb3JtRGF0YShzZWxmLmNoYW1waW9uc2hpcC50cmFuc2xhdGlvbiwgZm9ybURhdGEsICd0cmFuc2xhdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jaGFtcGlvbnNoaXAuc3BvcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3BvcnRfaWQnLCBzZWxmLmNoYW1waW9uc2hpcC5zcG9ydC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbml0X2RhdGUnLCBzZWxmLmNoYW1waW9uc2hpcC5pbml0X2RhdGUuZm9ybWF0KCdERC1NTS1ZWVlZIEhIOm1tOnNzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW5kX2RhdGUnLCBzZWxmLmNoYW1waW9uc2hpcC5lbmRfZGF0ZS5mb3JtYXQoJ0RELU1NLVlZWVkgSEg6bW06c3MnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9uc2hpcFNlcnZpY2UuY3JlYXRlKGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LnN1Y2Nlc3NUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGFtcGlvbnNoaXBzLmxpc3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2Vycm9yXS5mb3JFYWNoKCh2YWxpZGF0aW9uRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHZhbGlkYXRpb25FcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHJlc3BvbnNlLmVycm9ycylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGJhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KHRoaXMuJHQoJ2FkbWluLnZhbGlkYXRpb25fZXJyb3InKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cclxuICAgIC5zZWxlY3QtaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNyZWF0ZS52dWU/MWJjYjgxMGMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zZWxlY3QtaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFiYTRiMTNmIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvY2hhbXBpb25zaGlwcy9jcmVhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSAzMjdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2FkbWluLWhlYWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBfdm0uJHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKSxcbiAgICAgIFwiYnJlYWRjcnVtYnNcIjogX3ZtLmJyZWFkY3J1bWJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiXG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjaGFtcGlvbnNoaXAtZm9ybVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCduYW1lZW4nKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuYW1lZW5cIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2NoYW1waW9uc2hpcHMubmFtZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5uYW1lLmVuKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW5cIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5hbWVlblwiLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZWVuXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy5uYW1lJyksXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy5uYW1lJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnbmFtZWVuJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCduYW1lZW4nKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCduYW1lZW4nKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdkZXNjcmlwdGlvbmVuJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZGVzY3JpcHRpb25lblwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnY2hhbXBpb25zaGlwcy5kZXNjcmlwdGlvbicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbiksXG4gICAgICBleHByZXNzaW9uOiBcImNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lblwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZGVzY3JpcHRpb25lblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZGVzY3JpcHRpb25lblwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2NoYW1waW9uc2hpcHMuZGVzY3JpcHRpb24nKSxcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLmRlc2NyaXB0aW9uJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdkZXNjcmlwdGlvbmVuJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdkZXNjcmlwdGlvbmVuJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02IHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdkbmMtaW1hZ2UtdXBsb2FkZXInLCB7XG4gICAgcmVmOiBcInVwbG9hZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYnRuLXRleHRcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLnVwbG9hZF9pbWFnZScpLFxuICAgICAgXCJlcnJvci12YWxpZGF0aW9uLW1zZ1wiOiBfdm0uJHQoJ3ZhbGlkYXRpb24uaW1hZ2UnLCB7XG4gICAgICAgIGF0dHJpYnV0ZTogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLnVwbG9hZF9pbWFnZScpXG4gICAgICB9KSxcbiAgICAgIFwiaW1hZ2VcIjogX3ZtLmNoYW1waW9uc2hpcC5pbWFnZSxcbiAgICAgIFwiZGVmYXVsdC1pbWFnZVwiOiBcIi9pbWFnZXMvbWlzc2luZy9jaGFtcGlvbnNoaXAvbWlzc2luZy5wbmdcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdzcG9ydCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInNwb3J0c1wiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnY2hhbXBpb25zaGlwcy5zcG9ydCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5jaGFtcGlvbnNoaXAuc3BvcnQsXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLnNwb3J0Q2hhbmdlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uc3BvcnRzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoYW1waW9uc2hpcC5zcG9ydCksXG4gICAgICBleHByZXNzaW9uOiBcImNoYW1waW9uc2hpcC5zcG9ydFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwic3BvcnRfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwic3BvcnRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLnNwb3J0JylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uY2hhbXBpb25zaGlwLnNwb3J0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmNoYW1waW9uc2hpcC5zcG9ydCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnc3BvcnQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3Nwb3J0JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnc3BvcnQnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnaW5pdF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiaW5pdF9kYXRlXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLmluaXRfZGF0ZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndnVlLWRhdGV0aW1lLXBpY2tlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2dWUtcGlja2VyMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJpbml0X2RhdGVcIixcbiAgICAgIFwibW9kZWxcIjogX3ZtLmNoYW1waW9uc2hpcC5pbml0X2RhdGUsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uaW5pdERhdGVDaGFuZ2VkLFxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZXRpbWVcIixcbiAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgXCJkYXRldGltZS1mb3JtYXRcIjogXCJMTExcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGFtcGlvbnNoaXAuaW5pdF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hhbXBpb25zaGlwLmluaXRfZGF0ZVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW5pdF9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJpbml0X2RhdGVcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLmluaXRfZGF0ZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNoYW1waW9uc2hpcC5pbml0X2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLmluaXRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnaW5pdF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdpbml0X2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdpbml0X2RhdGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2VuZF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZW5kX2RhdGVcIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2NoYW1waW9uc2hpcHMuZW5kX2RhdGUnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd2dWUtZGF0ZXRpbWUtcGlja2VyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1waWNrZXIzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImVuZF9kYXRlXCIsXG4gICAgICBcIm1vZGVsXCI6IF92bS5jaGFtcGlvbnNoaXAuZW5kX2RhdGUsXG4gICAgICBcInR5cGVcIjogXCJkYXRldGltZVwiLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uZW5kRGF0ZUNoYW5nZWQsXG4gICAgICBcImRhdGV0aW1lLWZvcm1hdFwiOiBcIkxMTFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcImNoYW1waW9uc2hpcC5lbmRfZGF0ZVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZW5kX2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImVuZF9kYXRlXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy5lbmRfZGF0ZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jaGFtcGlvbnNoaXAuZW5kX2RhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2VuZF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdlbmRfZGF0ZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2VuZF9kYXRlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25CYWNrXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuYmFjaycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdkaXNhYmxlZCc6IF92bS51cGRhdGluZ1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiLFxuICAgICAgXCJocmVmXCI6IFwiIyFcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uU3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuc2F2ZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pXSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2VyXCJcbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFiYTRiMTNmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xYmE0YjEzZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWJhNGIxM2YhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTk1ODkzOTJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWJhNGIxM2YhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWJhNGIxM2YhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWJhNGIxM2YhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwic291cmNlUm9vdCI6IiJ9