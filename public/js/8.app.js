webpackJsonp([8,31],{

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(268),
  /* template */
  __webpack_require__(388),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/championships/edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-425f2184", Component.options)
  } else {
    hotAPI.reload("data-v-425f2184", Component.options)
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
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/components/header/pageHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pageHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fcd0956", Component.options)
  } else {
    hotAPI.reload("data-v-7fcd0956", Component.options)
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
     require("vue-hot-reload-api").rerender("data-v-7fcd0956", module.exports)
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
var update = __webpack_require__(136)("e9fec1c2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7fcd0956!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pageHeader.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7fcd0956!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pageHeader.vue");
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
exports.push([module.i, "\n.v-select {\n    position: relative;\n}\n.v-select .open-indicator {\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    pointer-events: all;\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    opacity: 1;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .open-indicator {\n    opacity: 0;\n}\n.v-select .open-indicator:before {\n    border-color: rgba(60, 60, 60, .5);\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    vertical-align: top;\n    -webkit-transform: rotate(133deg);\n            transform: rotate(133deg);\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n}\n.v-select.open .open-indicator {\n    bottom: 1px;\n}\n.v-select.open .open-indicator:before {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n}\n.v-select .dropdown-toggle {\n    display: block;\n    padding: 0;\n    background: none;\n    border: 1px solid rgba(60, 60, 60, .26);\n    border-radius: 4px;\n    white-space: normal;\n}\n.v-select.searchable .dropdown-toggle {\n    cursor: text;\n}\n.v-select.open .dropdown-toggle {\n    border-bottom: none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.v-select > .dropdown-menu {\n    margin: 0;\n    width: 100%;\n    overflow-y: scroll;\n    border-top: none;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.v-select .selected-tag {\n    color: #333;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 26px;\n    margin: 4px 1px 0px 3px;\n    padding: 0 0.25em;\n    float: left;\n    line-height: 1.7em;\n}\n.v-select .selected-tag .close {\n    float: none;\n    margin-right: 0;\n    font-size: 20px;\n}\n.v-select input[type=search],\n.v-select input[type=search]:focus {\n    display: inline-block;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0 .5em;\n    width: 10em;\n    max-width: 100%;\n    background: none;\n    position: relative;\n    box-shadow: none;\n    float: left;\n    clear: none;\n}\n.v-select input[type=search]:disabled {\n    cursor: pointer;\n}\n.v-select li a {\n    cursor: pointer;\n}\n.v-select .active a {\n    background: rgba(50, 50, 50, .1);\n    color: #333;\n}\n.v-select .highlight a,\n.v-select li:hover > a {\n    background: #f0f0f0;\n    color: #333;\n}\n.v-select .spinner {\n    opacity: 0;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 5px;\n    text-indent: -9999em;\n    overflow: hidden;\n    border-top: .9em solid rgba(100, 100, 100, .1);\n    border-right: .9em solid rgba(100, 100, 100, .1);\n    border-bottom: .9em solid rgba(100, 100, 100, .1);\n    border-left: .9em solid rgba(60, 60, 60, .45);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-animation: vSelectSpinner 1.1s infinite linear;\n            animation: vSelectSpinner 1.1s infinite linear;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .spinner {\n    opacity: 1;\n}\n.v-select .spinner,\n.v-select .spinner:after {\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n}\n@-webkit-keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/forms/select/select.vue?46a988a4"],"names":[],"mappings":";AACA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;IACA,gBAAA;IACA,oBAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;IACA,WAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,mCAAA;IACA,oBAAA;IACA,gCAAA;IACA,YAAA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,oBAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,WAAA;IACA,iBAAA;IACA,wCAAA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,oBAAA;IACA,6BAAA;IACA,8BAAA;CACA;AAEA;IACA,UAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;IACA,2BAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;;IAEA,sBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,iCAAA;IACA,YAAA;CACA;AAEA;;IAEA,oBAAA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,mBAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,qBAAA;IACA,iBAAA;IACA,+CAAA;IACA,iDAAA;IACA,kDAAA;IACA,8CAAA;IACA,iCAAA;YAAA,yBAAA;IACA,uDAAA;YAAA,+CAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,mBAAA;IACA,WAAA;IACA,YAAA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA","file":"select.vue","sourcesContent":["<style>\n    .v-select {\n        position: relative;\n    }\n\n    .v-select .open-indicator {\n        position: absolute;\n        bottom: 6px;\n        right: 10px;\n        display: inline-block;\n        cursor: pointer;\n        pointer-events: all;\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        opacity: 1;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .open-indicator {\n        opacity: 0;\n    }\n\n    .v-select .open-indicator:before {\n        border-color: rgba(60, 60, 60, .5);\n        border-style: solid;\n        border-width: 0.25em 0.25em 0 0;\n        content: '';\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        vertical-align: top;\n        transform: rotate(133deg);\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    }\n\n    .v-select.open .open-indicator {\n        bottom: 1px;\n    }\n\n    .v-select.open .open-indicator:before {\n        transform: rotate(315deg);\n    }\n\n    .v-select .dropdown-toggle {\n        display: block;\n        padding: 0;\n        background: none;\n        border: 1px solid rgba(60, 60, 60, .26);\n        border-radius: 4px;\n        white-space: normal;\n    }\n\n    .v-select.searchable .dropdown-toggle {\n        cursor: text;\n    }\n\n    .v-select.open .dropdown-toggle {\n        border-bottom: none;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    .v-select > .dropdown-menu {\n        margin: 0;\n        width: 100%;\n        overflow-y: scroll;\n        border-top: none;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    .v-select .selected-tag {\n        color: #333;\n        background-color: #f0f0f0;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        height: 26px;\n        margin: 4px 1px 0px 3px;\n        padding: 0 0.25em;\n        float: left;\n        line-height: 1.7em;\n    }\n\n    .v-select .selected-tag .close {\n        float: none;\n        margin-right: 0;\n        font-size: 20px;\n    }\n\n    .v-select input[type=search],\n    .v-select input[type=search]:focus {\n        display: inline-block;\n        border: none;\n        outline: none;\n        margin: 0;\n        padding: 0 .5em;\n        width: 10em;\n        max-width: 100%;\n        background: none;\n        position: relative;\n        box-shadow: none;\n        float: left;\n        clear: none;\n    }\n\n    .v-select input[type=search]:disabled {\n        cursor: pointer;\n    }\n\n    .v-select li a {\n        cursor: pointer;\n    }\n\n    .v-select .active a {\n        background: rgba(50, 50, 50, .1);\n        color: #333;\n    }\n\n    .v-select .highlight a,\n    .v-select li:hover > a {\n        background: #f0f0f0;\n        color: #333;\n    }\n\n    .v-select .spinner {\n        opacity: 0;\n        position: absolute;\n        top: 5px;\n        right: 10px;\n        font-size: 5px;\n        text-indent: -9999em;\n        overflow: hidden;\n        border-top: .9em solid rgba(100, 100, 100, .1);\n        border-right: .9em solid rgba(100, 100, 100, .1);\n        border-bottom: .9em solid rgba(100, 100, 100, .1);\n        border-left: .9em solid rgba(60, 60, 60, .45);\n        transform: translateZ(0);\n        animation: vSelectSpinner 1.1s infinite linear;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .spinner {\n        opacity: 1;\n    }\n\n    .v-select .spinner,\n    .v-select .spinner:after {\n        border-radius: 50%;\n        width: 5em;\n        height: 5em;\n    }\n\n    @-webkit-keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n\n<template>\n    <div class=\"dropdown v-select\" :class=\"dropdownClasses\">\n        <div ref=\"toggle\" @mousedown.prevent=\"toggleDropdown\" class=\"dropdown-toggle clearfix\" type=\"button\">\n        <span class=\"form-control\" v-if=\"!searchable && isValueEmpty\">\n          {{ placeholder }}\n        </span>\n\n            <span class=\"selected-tag\" v-for=\"(option,index) in valueAsArray\" v-bind:key=\"index\">\n          {{ getOptionLabel(option) }}\n          <button v-if=\"multiple\" @click=\"select(option)\" type=\"button\" class=\"close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </span>\n\n            <input\n                    ref=\"search\"\n                    :debounce=\"debounce\"\n                    v-model=\"search\"\n                    v-show=\"searchable\"\n                    @keydown.delete=\"maybeDeleteValue\"\n                    @keyup.esc=\"onEscape\"\n                    @keydown.up.prevent=\"typeAheadUp\"\n                    @keydown.down.prevent=\"typeAheadDown\"\n                    @keyup.enter.prevent=\"typeAheadSelect\"\n                    @blur=\"open = false\"\n                    @focus=\"open = true\"\n                    type=\"search\"\n                    class=\"form-control\"\n                    :placeholder=\"searchPlaceholder\"\n                    :style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"\n            >\n\n            <i ref=\"openIndicator\" role=\"presentation\" class=\"open-indicator\"></i>\n\n            <slot name=\"spinner\">\n                <div class=\"spinner\" v-show=\"loading\">Loading...</div>\n            </slot>\n        </div>\n\n        <ul ref=\"dropdownMenu\" v-show=\"open\" :transition=\"transition\" class=\"dropdown-menu\"\n            :style=\"{ 'max-height': maxHeight }\">\n            <li v-for=\"(option,index) in filteredOptions\" v-bind:key=\"index\"\n                :class=\"{ active: isOptionSelected(option), highlight: index === typeAheadPointer }\"\n                @mouseover=\"typeAheadPointer = index\">\n                <a @mousedown.prevent=\"select(option)\">\n                    {{ getOptionLabel(option) }}\n                </a>\n            </li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"divider\"></li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"text-center\">\n                <slot name=\"no-options\">Sorry, no matching options.</slot>\n            </li>\n        </ul>\n    </div>\n</template>\n\n\n<script type=\"text/babel\">\n    import pointerScroll from 'base/mixins/pointerScroll'\n    import typeAheadPointer from 'base/mixins/typeAheadPointer'\n    import ajax from 'base/mixins/ajax'\n\n    export default {\n        mixins: [pointerScroll, typeAheadPointer, ajax],\n\n        props: {\n            /**\n             * Contains the currently selected value. Very similar to a\n             * `value` attribute on an <input>. In most cases, you'll want\n             * to set this as a two-way binding, using :value.sync. However,\n             * this will not work with Vuex, in which case you'll need to use\n             * the onChange callback property.\n             * @type {Object||String||null}\n             */\n            value: {\n                default: null\n            },\n\n            /**\n             * An array of strings or objects to be used as dropdown choices.\n             * If you are using an array of objects, vue-select will look for\n             * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\n             * custom label key can be set with the `label` prop.\n             * @type {Object}\n             */\n            options: {\n                type: Array,\n                default() {\n                    return []\n                },\n            },\n\n            /**\n             * Sets the max-height property on the dropdown list.\n             * @deprecated\n             * @type {String}\n             */\n            maxHeight: {\n                type: String,\n                default: '400px'\n            },\n\n            /**\n             * Enable/disable filtering the options.\n             * @type {Boolean}\n             */\n            searchable: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Equivalent to the `multiple` attribute on a `<select>` input.\n             * @type {Object}\n             */\n            multiple: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * Equivalent to the `placeholder` attribute on an `<input>`.\n             * @type {Object}\n             */\n            placeholder: {\n                type: String,\n                default: ''\n            },\n\n            /**\n             * Sets a Vue transition property on the `.dropdown-menu`. vue-select\n             * does not include CSS for transitions, you'll need to add them yourself.\n             * @type {String}\n             */\n            transition: {\n                type: String,\n                default: 'expand'\n            },\n\n            /**\n             * Enables/disables clearing the search text when an option is selected.\n             * @type {Boolean}\n             */\n            clearSearchOnSelect: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Tells vue-select what key to use when generating option\n             * labels when each `option` is an object.\n             * @type {String}\n             */\n            label: {\n                type: String,\n                default: 'label'\n            },\n\n            /**\n             * Callback to generate the label text. If {option}\n             * is an object, returns option[this.label] by default.\n             * @param  {Object || String} option\n             * @return {String}\n             */\n            getOptionLabel: {\n                type: Function,\n                default(option) {\n                    if (typeof option === 'object') {\n                        if (this.label && option[this.label]) {\n                            return option[this.label]\n                        }\n                    }\n                    return option;\n                }\n            },\n\n            /**\n             * An optional callback function that is called each time the selected\n             * value(s) change. When integrating with Vuex, use this callback to trigger\n             * an action, rather than using :value.sync to retreive the selected value.\n             * @type {Function}\n             * @default {null}\n             */\n            onChange: Function,\n            changeParam: {},\n\n            /**\n             * Enable/disable creating options from searchInput.\n             * @type {Boolean}\n             */\n            taggable: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * When true, newly created tags will be added to\n             * the options list.\n             * @type {Boolean}\n             */\n            pushTags: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * User defined function for adding Options\n             * @type {Function}\n             */\n            createOption: {\n                type: Function,\n                default: function (newOption) {\n                    if (typeof this.options[0] === 'object') {\n                        return {[this.label]: newOption}\n                    }\n                    return newOption\n                }\n            },\n\n            /**\n             * When false, updating the options will not reset the select value\n             * @type {Boolean}\n             */\n            resetOnOptionsChange: {\n                type: Boolean,\n                default: false\n            },\n        },\n\n        data() {\n            return {\n                search: '',\n                open: false,\n                selection: null\n            }\n        },\n\n        watch: {\n            value(val, old) {\n                this.selection = val\n            },\n            selection(val, old) {\n                if (this.multiple) {\n                    this.onChange ? this.onChange(val, this.changeParam) : null\n                } else {\n                    this.onChange && val !== old ? this.onChange(val, this.changeParam) : null\n                }\n            },\n            options() {\n                if (!this.taggable && this.resetOnOptionsChange) {\n                    this.selection = this.multiple ? [] : null\n                }\n            },\n            multiple(val) {\n                this.selection = val ? [] : null\n            }\n        },\n\n        methods: {\n\n            /**\n             * Select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            select(option) {\n                if (this.isOptionSelected(option)) {\n                    this.deselect(option)\n                } else {\n                    if (this.taggable && !this.optionExists(option)) {\n                        option = this.createOption(option)\n\n                        if (this.pushTags) {\n                            this.options.push(option)\n                        }\n                    }\n\n                    if (this.multiple) {\n                        if (!this.selection) {\n                            this.selection = [option]\n                        } else {\n                            this.selection.push(option)\n                        }\n                    } else {\n                        this.selection = option\n                    }\n                }\n\n                this.onAfterSelect(option)\n            },\n\n            /**\n             * De-select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            deselect(option) {\n                if (this.multiple) {\n                    let ref = -1\n                    this.selection.forEach((val) => {\n                        if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {\n                            ref = val\n                        }\n                    })\n                    var index = this.selection.indexOf(ref);\n                    this.selection.splice(index, 1)\n\n                } else {\n                    this.selection = null\n                }\n            },\n\n            /**\n             * Called from this.select after each selection.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            onAfterSelect(option) {\n                if (!this.multiple) {\n                    this.open = !this.open\n                    this.$refs.search.blur()\n                }\n\n                if (this.clearSearchOnSelect) {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Toggle the visibility of the dropdown menu.\n             * @param  {Event} e\n             * @return {void}\n             */\n            toggleDropdown(e) {\n                if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {\n                    if (this.open) {\n                        this.$refs.search.blur() // dropdown will close on blur\n                    } else {\n                        this.open = true\n                        this.$refs.search.focus()\n                    }\n                }\n            },\n\n            /**\n             * Check if the given option is currently selected.\n             * @param  {Object||String}  option\n             * @return {Boolean}         True when selected || False otherwise\n             */\n            isOptionSelected(option) {\n                if (this.multiple && this.selection) {\n                    let selected = false\n                    this.value.forEach(opt => {\n                        if (typeof opt === 'object' && opt[this.label] === option[this.label]) {\n                            selected = true\n                        } else if (opt === option) {\n                            selected = true\n                        }\n                    })\n                    return selected\n                }\n\n                return this.selection === option\n            },\n\n            /**\n             * If there is any text in the search input, remove it.\n             * Otherwise, blur the search input to close the dropdown.\n             * @return {[type]} [description]\n             */\n            onEscape() {\n                if (!this.search.length) {\n                    this.$refs.search.blur()\n                } else {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Delete the value on Delete keypress when there is no\n             * text in the search input, & there's tags to delete\n             * @return {this.value}\n             */\n            maybeDeleteValue() {\n                if (!this.$refs.search.value.length && this.value) {\n                    return this.multiple ? this.value.pop() : this.selection = null\n                }\n            },\n\n            /**\n             * Determine if an option exists\n             * within this.options array.\n             *\n             * @param  {Object || String} option\n             * @return {boolean}\n             */\n            optionExists(option) {\n                let exists = false\n\n                this.options.forEach(opt => {\n                    if (typeof opt === 'object' && opt[this.label] === option) {\n                        exists = true\n                    } else if (opt === option) {\n                        exists = true\n                    }\n                })\n\n                return exists\n            }\n        },\n\n        computed: {\n\n            /**\n             * Classes to be output on .dropdown\n             * @return {Object}\n             */\n            dropdownClasses() {\n                return {\n                    open: this.open,\n                    searchable: this.searchable,\n                    loading: this.loading\n                }\n            },\n\n            /**\n             * Return the placeholder string if it's set\n             * & there is no value selected.\n             * @return {String} Placeholder text\n             */\n            searchPlaceholder() {\n                if (this.isValueEmpty && this.placeholder) {\n                    return this.placeholder;\n                }\n            },\n\n            /**\n             * The currently displayed options, filtered\n             * by the search elements value. If tagging\n             * true, the search text will be prepended\n             * if it doesn't already exist.\n             *\n             * @return {array}\n             */\n            filteredOptions() {\n                let self = this;\n                let options = this.options.filter(function (option) {\n                    return option[self.label].indexOf(self.search) !== -1\n                })\n                if (this.taggable && this.search.length && !this.optionExists(this.search)) {\n                    options.unshift(this.search)\n                }\n                return options\n            },\n\n            /**\n             * Check if there aren't any options selected.\n             * @return {Boolean}\n             */\n            isValueEmpty() {\n                if (this.selection) {\n                    if (typeof this.selection === 'object') {\n                        return !Object.keys(this.selection).length\n                    }\n                    return !this.selection.length\n                }\n\n                return true;\n            },\n\n            /**\n             * Return the current value in array format.\n             * @return {Array}\n             */\n            valueAsArray() {\n                if (this.multiple) {\n                    return this.selection\n                } else if (this.selection) {\n                    return [this.selection]\n                }\n\n                return []\n            }\n        }\n\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

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
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/components/forms/select/select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d351034", Component.options)
  } else {
    hotAPI.reload("data-v-8d351034", Component.options)
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
     require("vue-hot-reload-api").rerender("data-v-8d351034", module.exports)
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
var update = __webpack_require__(136)("b59cb9d0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8d351034!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8d351034!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./select.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 211:
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
exports.push([module.i, "\n.inputfile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.inputfile + label {\n    width: auto !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/upload/dnc-image-upload.vue?48b0fff6"],"names":[],"mappings":";AAaA;IACA,aAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,uBAAA;CACA","file":"dnc-image-upload.vue","sourcesContent":["<template>\n    <div>\n        <img :src=\"defaultImage\" alt=\"athlete profile image\" width=\"110px\" v-if=\"!imageFile\">\n        <img :src=\"imageFile\" alt=\"athlete profile image\" width=\"110px\" v-if=\"imageFile\">\n\n        <br><br>\n        <input type=\"file\" name=\"file\" id=\"image-uploader\" class=\"inputfile\" @change=\"onFileChange\"\n               ref=\"fileinput\"/>\n        <label for=\"image-uploader\" class=\"btn btn-primary\"><i class=\"fa fa-cloud\"></i>\n            <span>{{btnText}}</span></label>\n    </div>\n</template>\n<style>\n    .inputfile {\n        width: 0.1px;\n        height: 0.1px;\n        opacity: 0;\n        overflow: hidden;\n        position: absolute;\n        z-index: -1;\n    }\n\n    .inputfile + label {\n        width: auto !important;\n    }\n</style>\n<script type=\"text/babel\">\n\n    export default{\n        props: {\n            value: {},\n            acceptedFiles: {\n                type: String,\n                default: 'image/*'\n            },\n            btnText: {},\n            errorValidationMsg: {},\n            width: {\n                type: Number,\n                default: 110\n            },\n            image: {},\n            defaultImage: {}\n        },\n        watch: {\n            image: function (val) {\n                this.imageFile = val;\n            }\n        },\n        data(){\n            return {\n                imageFile: null\n            }\n        },\n        methods: {\n            onFileChange(e){\n                var files = e.target.files || e.dataTransfer.files;\n                if (!files.length)\n                    return;\n                this.createImage(files[0]);\n            },\n            createImage(file) {\n                if (!file.type.match(this.acceptedFiles)) {\n                    document.getElementById(\"image-uploader\").value = \"\";\n                    this.$root.warningToast(this.errorValidationMsg);\n                    this.imageFile = this.defaultImage\n                    return;\n                }\n                var reader = new FileReader();\n                var vm = this;\n                reader.onload = (e) => {\n                    vm.imageFile = e.target.result;\n                };\n                reader.readAsDataURL(file)\n            },\n            getFile(){\n                return this.$refs.fileinput.files[0];\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(220)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(211),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/components/upload/dnc-image-upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dnc-image-upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ae9470c", Component.options)
  } else {
    hotAPI.reload("data-v-7ae9470c", Component.options)
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
     require("vue-hot-reload-api").rerender("data-v-7ae9470c", module.exports)
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
var update = __webpack_require__(136)("52045178", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7ae9470c!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dnc-image-upload.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7ae9470c!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dnc-image-upload.vue");
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

/***/ 268:
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

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

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
                translation: {
                    name: {},
                    description: {}
                }
            },
            exceptAthletes: '',
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
                href: '/championships/' + this.championship.id + '/update',
                title: 'admin.update'
            }];
        },
        sports: function sports() {
            return this.$store.state.common.sports;
        }
    },
    locales: _championships2.default,
    created: function created() {
        var _this = this;

        if (!this.sports.length) this.getSports();
        _championshipService2.default.show(this.$route.params.id, function (response) {
            _this.championship = response.data;
            _this.championship.init_date = (0, _moment2.default)(_this.championship.init_date);
            _this.championship.end_date = (0, _moment2.default)(_this.championship.end_date);
        }, function (error) {
            console.log(error);
        });
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
        onBack: function onBack(evt) {
            evt.preventDefault();
            this.$router.push({
                name: 'championships.list'
            });
        },
        onSubmit: function onSubmit(evt) {
            var _this2 = this;

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

                _championshipService2.default.update(self.championship.id, formData, function (response) {
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
                _this2.$root.errorToast(_this2.$t('admin.validation_error'));
            });
        }
    })
};

/***/ }),

/***/ 388:
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
  }, [_vm._v(_vm._s(_vm.errors.first('descriptionen')) + "\n                                        ")])])]), _vm._v(" "), _c('div', {
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
      "name": "championship.sport",
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
      "name": "championship.init_date",
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
      "name": "championship.end_date",
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
     require("vue-hot-reload-api").rerender("data-v-425f2184", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvZWRpdC52dWUiLCJ3ZWJwYWNrOi8vL3BhZ2VIZWFkZXIudnVlPzU2MGMqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2E1NmYqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzZiOGUqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzM4YTMqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzQ0MTIqKioqKioqKiIsIndlYnBhY2s6Ly8vc2VsZWN0LnZ1ZT9hMDE1KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC5qcz9jMGQ0KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9mb3JtRGF0YVBhcnNlci5qcz8wYzM3KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvcG9pbnRlclNjcm9sbC5qcz9lYWI2KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdHlwZUFoZWFkUG9pbnRlci5qcz9iZWQ2KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2JiMTcqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2Y1YjUqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/MmQ4NyoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/Nzk2ZCoqKiIsIndlYnBhY2s6Ly8vZG5jLWltYWdlLXVwbG9hZC52dWU/MGNlYyoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/OGE1NyoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlP2Q4Y2QqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT9mY2VkKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/NzVmOCoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGF0ZXRpbWUvdnVlLWRhdGV0aW1lLXBpY2tlci5qcz82NWJjKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwcy5qcz80YzVhKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9jaGFtcGlvbnNoaXBzL2NoYW1waW9uc2hpcFNlcnZpY2UuanM/MDAzOCoiLCJ3ZWJwYWNrOi8vL2VkaXQudnVlPzA4ZWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2VkaXQudnVlPzVmY2EiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInByb3BzIiwibG9hZGluZyIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsIm9uU2VhcmNoIiwiZGVib3VuY2UiLCJOdW1iZXIiLCJ3YXRjaCIsInNlYXJjaCIsImxlbmd0aCIsInRvZ2dsZUxvYWRpbmciLCJtZXRob2RzIiwidG9nZ2xlIiwicGFyc2VPYmpGb3JtRGF0YSIsIm9iaiIsImZvcm1kYXRhIiwibmFtZXNwYWNlIiwiZmQiLCJmb3JtS2V5IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkZpbGUiLCJhcHBlbmQiLCJ0eXBlQWhlYWRQb2ludGVyIiwibWF5YmVBZGp1c3RTY3JvbGwiLCJwaXhlbHNUb1BvaW50ZXJUb3AiLCJwaXhlbHNUb1BvaW50ZXJCb3R0b20iLCJ2aWV3cG9ydCIsInRvcCIsInNjcm9sbFRvIiwiYm90dG9tIiwicG9pbnRlckhlaWdodCIsImkiLCIkcmVmcyIsImRyb3Bkb3duTWVudSIsImNoaWxkcmVuIiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudCIsInNjcm9sbFRvcCIsInBvc2l0aW9uIiwiZGF0YSIsImZpbHRlcmVkT3B0aW9ucyIsInR5cGVBaGVhZFVwIiwidHlwZUFoZWFkRG93biIsInR5cGVBaGVhZFNlbGVjdCIsInNlbGVjdCIsInRhZ2dhYmxlIiwiY2xlYXJTZWFyY2hPblNlbGVjdCIsIkRBVEVUSU1FX1BJQ0tFUl9UT09MVElQUyIsIkRFRkFVTFRfTEFOR1VBR0UiLCJyZXBsYWNlIiwiaW5oZXJpdCIsInRlbXBsYXRlIiwibW9kZWwiLCJyZXF1aXJlZCIsIlN0cmluZyIsImxhbmd1YWdlIiwiZGF0ZXRpbWVGb3JtYXQiLCJkYXRlRm9ybWF0IiwidGltZUZvcm1hdCIsIm5hbWUiLCJvbkNoYW5nZSIsImRhdGUiLCJjcmVhdGVkIiwiaXNDaGFuZ2luZyIsImNvbnRyb2wiLCJtb3VudGVkIiwib3B0aW9ucyIsInVzZUN1cnJlbnQiLCJzaG93Q2xlYXIiLCJzaG93Q2xvc2UiLCJpY29ucyIsInRpbWUiLCJ1cCIsImRvd24iLCJwcmV2aW91cyIsIm5leHQiLCJ0b2RheSIsImNsZWFyIiwiY2xvc2UiLCIkbGFuZ3VhZ2UiLCJsYW5nYXVnZSIsImxvY2FsZSIsImdldExhbmd1YWdlQ29kZSIsImZvcm1hdCIsIiRpMThuIiwiZGF0ZXRpbWVfcGlja2VyIiwibWVzc2FnZXMiLCJ0b29sdGlwcyIsIiQiLCJmbiIsImRhdGV0aW1lcGlja2VyIiwiZGVmYXVsdHMiLCIkbmV4dFRpY2siLCIkZWwiLCJtZSIsIm9uIiwidmFsIiwib2xkVmFsIiwidG9Mb3dlckNhc2UiLCJzdWJzdHIiLCJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJjcmVhdGUiLCJjaGFtcGlvbnNoaXAiLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJyZW1vdmUiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7O2tCQUlBO3NCQUVBO0FBSEE7O2tCQUtBO3lDQUNBO3VCQUNBO0FBR0E7QUFOQTtBQUxBO0FBREEsRTs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFHQTtBQUNBLDBDQUEyQyxpQkFBaUIsd0JBQXdCLEdBQUcsc0JBQXNCLHVCQUF1QixHQUFHOztBQUV2STs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFFQTs7QUFySEEsRTs7Ozs7OztBQ3hMQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzguYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDI1ZjIxODQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZWRpdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvY2hhbXBpb25zaGlwcy9lZGl0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGVkaXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQyNWYyMTg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDI1ZjIxODRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2VkaXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgICAge3t0aXRsZX19XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJicmVhZGNydW1iLmhyZWZcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiB0YWc9XCJsaVwiIHYtZm9yPVwiYnJlYWRjcnVtYiBpbiBicmVhZGNydW1ic1wiPlxuICAgICAgICAgICAgICAgIHt7JHQoYnJlYWRjcnVtYi50aXRsZSl9fVxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9vbD5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLmFkbWluLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogOTdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYWdlSGVhZGVyLnZ1ZT81Mzc5ZjVjYiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFkbWluLWhlYWRlciB7XFxuICBoZWlnaHQ6IDk3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYWRtaW4taGVhZGVyIC5yb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03ZmNkMDk1NiFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdmY2QwOTU2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJlOWZlYzFjMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCI8c3R5bGU+XG4gICAgLnYtc2VsZWN0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcbiAgICB9XG5cbiAgICAudi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yIHtcbiAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuMjYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0ID4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBtYXJnaW46IDRweCAxcHggMHB4IDNweDtcbiAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBsaW5lLWhlaWdodDogMS43ZW07XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF0sXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY2xlYXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLmFjdGl2ZSBhIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAuMSk7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXG4gICAgLnYtc2VsZWN0IGxpOmhvdmVyID4gYSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDVweDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIGFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5zcGlubmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNWVtO1xuICAgICAgICBoZWlnaHQ6IDVlbTtcbiAgICB9XG5cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biB2LXNlbGVjdFwiIDpjbGFzcz1cImRyb3Bkb3duQ2xhc3Nlc1wiPlxuICAgICAgICA8ZGl2IHJlZj1cInRvZ2dsZVwiIEBtb3VzZWRvd24ucHJldmVudD1cInRvZ2dsZURyb3Bkb3duXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1pZj1cIiFzZWFyY2hhYmxlICYmIGlzVmFsdWVFbXB0eVwiPlxuICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC10YWdcIiB2LWZvcj1cIihvcHRpb24saW5kZXgpIGluIHZhbHVlQXNBcnJheVwiIHYtYmluZDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cbiAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJtdWx0aXBsZVwiIEBjbGljaz1cInNlbGVjdChvcHRpb24pXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIDpkZWJvdW5jZT1cImRlYm91bmNlXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cInNlYXJjaGFibGVcIlxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kZWxldGU9XCJtYXliZURlbGV0ZVZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVzYz1cIm9uRXNjYXBlXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24udXAucHJldmVudD1cInR5cGVBaGVhZFVwXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZG93bi5wcmV2ZW50PVwidHlwZUFoZWFkRG93blwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlci5wcmV2ZW50PVwidHlwZUFoZWFkU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJvcGVuID0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJvcGVuID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nIH1cIlxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICA8aSByZWY9XCJvcGVuSW5kaWNhdG9yXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwib3Blbi1pbmRpY2F0b3JcIj48L2k+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJzcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIiB2LXNob3c9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWwgcmVmPVwiZHJvcGRvd25NZW51XCIgdi1zaG93PVwib3BlblwiIDp0cmFuc2l0aW9uPVwidHJhbnNpdGlvblwiIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7ICdtYXgtaGVpZ2h0JzogbWF4SGVpZ2h0IH1cIj5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIihvcHRpb24saW5kZXgpIGluIGZpbHRlcmVkT3B0aW9uc1wiIHYtYmluZDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gdHlwZUFoZWFkUG9pbnRlciB9XCJcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwidHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGEgQG1vdXNlZG93bi5wcmV2ZW50PVwic2VsZWN0KG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cImZhZGVcIiB2LWlmPVwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJuby1vcHRpb25zXCI+U29ycnksIG5vIG1hdGNoaW5nIG9wdGlvbnMuPC9zbG90PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdCB0eXBlPVwidGV4dC9iYWJlbFwiPlxuICAgIGltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJ2Jhc2UvbWl4aW5zL3BvaW50ZXJTY3JvbGwnXG4gICAgaW1wb3J0IHR5cGVBaGVhZFBvaW50ZXIgZnJvbSAnYmFzZS9taXhpbnMvdHlwZUFoZWFkUG9pbnRlcidcbiAgICBpbXBvcnQgYWpheCBmcm9tICdiYXNlL21peGlucy9hamF4J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtaXhpbnM6IFtwb2ludGVyU2Nyb2xsLCB0eXBlQWhlYWRQb2ludGVyLCBhamF4XSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHZhbHVlLiBWZXJ5IHNpbWlsYXIgdG8gYVxuICAgICAgICAgICAgICogYHZhbHVlYCBhdHRyaWJ1dGUgb24gYW4gPGlucHV0Pi4gSW4gbW9zdCBjYXNlcywgeW91J2xsIHdhbnRcbiAgICAgICAgICAgICAqIHRvIHNldCB0aGlzIGFzIGEgdHdvLXdheSBiaW5kaW5nLCB1c2luZyA6dmFsdWUuc3luYy4gSG93ZXZlcixcbiAgICAgICAgICAgICAqIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFZ1ZXgsIGluIHdoaWNoIGNhc2UgeW91J2xsIG5lZWQgdG8gdXNlXG4gICAgICAgICAgICAgKiB0aGUgb25DaGFuZ2UgY2FsbGJhY2sgcHJvcGVydHkuXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fHxTdHJpbmd8fG51bGx9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgdG8gYmUgdXNlZCBhcyBkcm9wZG93biBjaG9pY2VzLlxuICAgICAgICAgICAgICogSWYgeW91IGFyZSB1c2luZyBhbiBhcnJheSBvZiBvYmplY3RzLCB2dWUtc2VsZWN0IHdpbGwgbG9vayBmb3JcbiAgICAgICAgICAgICAqIGEgYGxhYmVsYCBrZXkgKGV4LiBbe2xhYmVsOiAnVGhpcyBpcyBGb28nLCB2YWx1ZTogJ2Zvbyd9XSkuIEFcbiAgICAgICAgICAgICAqIGN1c3RvbSBsYWJlbCBrZXkgY2FuIGJlIHNldCB3aXRoIHRoZSBgbGFiZWxgIHByb3AuXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0cyB0aGUgbWF4LWhlaWdodCBwcm9wZXJ0eSBvbiB0aGUgZHJvcGRvd24gbGlzdC5cbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzQwMHB4J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBmaWx0ZXJpbmcgdGhlIG9wdGlvbnMuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VhcmNoYWJsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiBhIGA8c2VsZWN0PmAgaW5wdXQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgb24gYW4gYDxpbnB1dD5gLlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0cyBhIFZ1ZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHRoZSBgLmRyb3Bkb3duLW1lbnVgLiB2dWUtc2VsZWN0XG4gICAgICAgICAgICAgKiBkb2VzIG5vdCBpbmNsdWRlIENTUyBmb3IgdHJhbnNpdGlvbnMsIHlvdSdsbCBuZWVkIHRvIGFkZCB0aGVtIHlvdXJzZWxmLlxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZXhwYW5kJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGNsZWFyaW5nIHRoZSBzZWFyY2ggdGV4dCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjbGVhclNlYXJjaE9uU2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRlbGxzIHZ1ZS1zZWxlY3Qgd2hhdCBrZXkgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyBvcHRpb25cbiAgICAgICAgICAgICAqIGxhYmVscyB3aGVuIGVhY2ggYG9wdGlvbmAgaXMgYW4gb2JqZWN0LlxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2xhYmVsJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsYmFjayB0byBnZW5lcmF0ZSB0aGUgbGFiZWwgdGV4dC4gSWYge29wdGlvbn1cbiAgICAgICAgICAgICAqIGlzIGFuIG9iamVjdCwgcmV0dXJucyBvcHRpb25bdGhpcy5sYWJlbF0gYnkgZGVmYXVsdC5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgJiYgb3B0aW9uW3RoaXMubGFiZWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvblt0aGlzLmxhYmVsXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBlYWNoIHRpbWUgdGhlIHNlbGVjdGVkXG4gICAgICAgICAgICAgKiB2YWx1ZShzKSBjaGFuZ2UuIFdoZW4gaW50ZWdyYXRpbmcgd2l0aCBWdWV4LCB1c2UgdGhpcyBjYWxsYmFjayB0byB0cmlnZ2VyXG4gICAgICAgICAgICAgKiBhbiBhY3Rpb24sIHJhdGhlciB0aGFuIHVzaW5nIDp2YWx1ZS5zeW5jIHRvIHJldHJlaXZlIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHtudWxsfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbkNoYW5nZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjaGFuZ2VQYXJhbToge30sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgY3JlYXRpbmcgb3B0aW9ucyBmcm9tIHNlYXJjaElucHV0LlxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRhZ2dhYmxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGVuIHRydWUsIG5ld2x5IGNyZWF0ZWQgdGFncyB3aWxsIGJlIGFkZGVkIHRvXG4gICAgICAgICAgICAgKiB0aGUgb3B0aW9ucyBsaXN0LlxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHB1c2hUYWdzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VyIGRlZmluZWQgZnVuY3Rpb24gZm9yIGFkZGluZyBPcHRpb25zXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZU9wdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnNbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1t0aGlzLmxhYmVsXTogbmV3T3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdPcHRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZW4gZmFsc2UsIHVwZGF0aW5nIHRoZSBvcHRpb25zIHdpbGwgbm90IHJlc2V0IHRoZSBzZWxlY3QgdmFsdWVcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdmFsdWUodmFsLCBvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGlvbih2YWwsIG9sZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB2YWwgIT09IG9sZCA/IHRoaXMub25DaGFuZ2UodmFsLCB0aGlzLmNoYW5nZVBhcmFtKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGFnZ2FibGUgJiYgdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbXVsdGlwbGUodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWwgPyBbXSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0KG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0KG9wdGlvbilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiAhdGhpcy5vcHRpb25FeGlzdHMob3B0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5jcmVhdGVPcHRpb24ob3B0aW9uKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wdXNoVGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTZWxlY3Qob3B0aW9uKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZS1zZWxlY3QgYSBnaXZlbiBvcHRpb24uXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZXNlbGVjdChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gLTFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBvcHRpb24gfHwgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsW3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihyZWYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBmcm9tIHRoaXMuc2VsZWN0IGFmdGVyIGVhY2ggc2VsZWN0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25BZnRlclNlbGVjdChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGVhclNlYXJjaE9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZHJvcGRvd24gbWVudS5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge0V2ZW50fSBlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLm9wZW5JbmRpY2F0b3IgfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMuc2VhcmNoIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnRvZ2dsZSB8fCBlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpIC8vIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gYmx1clxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gb3B0aW9uIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSAgb3B0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgIFRydWUgd2hlbiBzZWxlY3RlZCB8fCBGYWxzZSBvdGhlcndpc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvblt0aGlzLmxhYmVsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24gPT09IG9wdGlvblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB0aGVyZSBpcyBhbnkgdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCByZW1vdmUgaXQuXG4gICAgICAgICAgICAgKiBPdGhlcndpc2UsIGJsdXIgdGhlIHNlYXJjaCBpbnB1dCB0byBjbG9zZSB0aGUgZHJvcGRvd24uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25Fc2NhcGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVsZXRlIHRoZSB2YWx1ZSBvbiBEZWxldGUga2V5cHJlc3Mgd2hlbiB0aGVyZSBpcyBub1xuICAgICAgICAgICAgICogdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCAmIHRoZXJlJ3MgdGFncyB0byBkZWxldGVcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXMudmFsdWV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG1heWJlRGVsZXRlVmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyZWZzLnNlYXJjaC52YWx1ZS5sZW5ndGggJiYgdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUucG9wKCkgOiB0aGlzLnNlbGVjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERldGVybWluZSBpZiBhbiBvcHRpb24gZXhpc3RzXG4gICAgICAgICAgICAgKiB3aXRoaW4gdGhpcy5vcHRpb25zIGFycmF5LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3B0aW9uRXhpc3RzKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDbGFzc2VzIHRvIGJlIG91dHB1dCBvbiAuZHJvcGRvd25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZHJvcGRvd25DbGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHRoaXMub3BlbixcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdGhpcy5zZWFyY2hhYmxlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgcGxhY2Vob2xkZXIgc3RyaW5nIGlmIGl0J3Mgc2V0XG4gICAgICAgICAgICAgKiAmIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBQbGFjZWhvbGRlciB0ZXh0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFbXB0eSAmJiB0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgb3B0aW9ucywgZmlsdGVyZWRcbiAgICAgICAgICAgICAqIGJ5IHRoZSBzZWFyY2ggZWxlbWVudHMgdmFsdWUuIElmIHRhZ2dpbmdcbiAgICAgICAgICAgICAqIHRydWUsIHRoZSBzZWFyY2ggdGV4dCB3aWxsIGJlIHByZXBlbmRlZFxuICAgICAgICAgICAgICogaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bc2VsZi5sYWJlbF0uaW5kZXhPZihzZWxmLnNlYXJjaCkgIT09IC0xXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGggJiYgIXRoaXMub3B0aW9uRXhpc3RzKHRoaXMuc2VhcmNoKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQodGhpcy5zZWFyY2gpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3B0aW9ucyBzZWxlY3RlZC5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlzVmFsdWVFbXB0eSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5zZWxlY3Rpb24pLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBpbiBhcnJheSBmb3JtYXQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFsdWVBc0FycmF5KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGlvbl1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VsZWN0LnZ1ZT80NmE5ODhhNCIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRwcm9wczoge1xuXHRcdC8qKlxuXHRcdCAqIFRvZ2dsZXMgdGhlIGFkZGluZyBvZiBhICdsb2FkaW5nJyBjbGFzcyB0byB0aGUgbWFpblxuXHRcdCAqIC52LXNlbGVjdCB3cmFwcGVyLiBVc2VmdWwgdG8gY29udHJvbCBVSSBzdGF0ZSB3aGVuXG5cdFx0ICogcmVzdWx0cyBhcmUgYmVpbmcgcHJvY2Vzc2VkIHRocm91Z2ggQUpBWC5cblx0XHQgKi9cblx0XHRsb2FkaW5nOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQWNjZXB0IGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlXG5cdFx0ICogcnVuIHdoZW4gdGhlIHNlYXJjaCB0ZXh0IGNoYW5nZXMuXG5cdFx0ICpcblx0XHQgKiBsb2FkaW5nKCkgYWNjZXB0cyBhIGJvb2xlYW4gdmFsdWUsIGFuZCBjYW5cblx0XHQgKiBiZSB1c2VkIHRvIHRvZ2dsZSBhIGxvYWRpbmcgY2xhc3MgZnJvbVxuXHRcdCAqIHRoZSBvblNlYXJjaCBjYWxsYmFjay5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c2VhcmNofSAgU3RyaW5nICAgICAgICAgIEN1cnJlbnQgc2VhcmNoIHRleHRcblx0XHQgKiBAcGFyYW0ge2xvYWRpbmd9IEZ1bmN0aW9uKGJvb2wpICBUb2dnbGUgbG9hZGluZyBjbGFzc1xuXHRcdCAqL1xuXHRcdG9uU2VhcmNoOiB7XG5cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcblx0XHQgKiBpbnZva2luZyB0aGlzLm9uU2VhcmNoKCkuIFVzZWQgdG8gcHJldmVudFxuXHRcdCAqIHNlbmRpbmcgYW4gQUpBWCByZXF1ZXN0IHVudGlsIGlucHV0IGlzIGNvbXBsZXRlLlxuXHRcdCAqL1xuXHRcdGRlYm91bmNlOiB7XG5cdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRkZWZhdWx0OiAwXG5cdFx0fVxuXHR9LFxuXG5cdHdhdGNoOiB7XG5cdFx0LyoqXG5cdFx0ICogSWYgYSBjYWxsYmFjayAmIHNlYXJjaCB0ZXh0IGhhcyBiZWVuIHByb3ZpZGVkLFxuXHRcdCAqIGludm9rZSB0aGUgb25TZWFyY2ggY2FsbGJhY2suXG5cdFx0ICovXG5cdFx0c2VhcmNoKCkge1xuXHRcdFx0aWYgKHRoaXMuc2VhcmNoLmxlbmd0aCA+IDAgJiYgdGhpcy5vblNlYXJjaCkge1xuXHRcdFx0XHR0aGlzLm9uU2VhcmNoKHRoaXMuc2VhcmNoLCB0aGlzLnRvZ2dsZUxvYWRpbmcpXG5cdFx0XHR9XG5cdFx0fSxcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0LyoqXG5cdFx0ICogVG9nZ2xlIHRoaXMubG9hZGluZy4gT3B0aW9uYWxseSBwYXNzIGEgYm9vbGVhblxuXHRcdCAqIHZhbHVlLiBJZiBubyB2YWx1ZSBpcyBwcm92aWRlZCwgdGhpcy5sb2FkaW5nXG5cdFx0ICogd2lsbCBiZSBzZXQgdG8gdGhlIG9wcG9zaXRlIG9mIGl0J3MgY3VycmVudCB2YWx1ZS5cblx0XHQgKiBAcGFyYW0gdG9nZ2xlIEJvb2xlYW5cblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHR0b2dnbGVMb2FkaW5nKHRvZ2dsZSA9IG51bGwpIHtcblx0XHRcdGlmICh0b2dnbGUgPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZ1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyA9IHRvZ2dsZVxuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXguanMiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHBhcnNlT2JqRm9ybURhdGEob2JqLCBmb3JtZGF0YSwgbmFtZXNwYWNlKSB7XG5cbiAgICAgICAgICAgIHZhciBmZCA9IGZvcm1kYXRhO1xuICAgICAgICAgICAgdmFyIGZvcm1LZXk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgb2JqW3Byb3BlcnR5XSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUtleSA9IG5hbWVzcGFjZSArICdbJyArIHByb3BlcnR5ICsgJ10nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUtleSA9IHByb3BlcnR5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFuIG9iamVjdCwgYnV0IG5vdCBhIEZpbGUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSByZWN1cnNpdml0eS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcGVydHldID09PSAnb2JqZWN0JyAmJiAhKG9ialtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZU9iakZvcm1EYXRhKG9ialtwcm9wZXJ0eV0sIGZkLCBmb3JtS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChmb3JtS2V5LCBvYmpbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdhdGNoOiB7XG4gICAgdHlwZUFoZWFkUG9pbnRlcigpIHtcbiAgICAgIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0IHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duIGxpc3RcbiAgICAgKiBpZiB0aGUgY3VycmVudCBwb2ludGVyIGlzIG91dHNpZGUgb2YgdGhlXG4gICAgICogb3ZlcmZsb3cgYm91bmRzLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1heWJlQWRqdXN0U2Nyb2xsKCkge1xuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IHRoaXMucGl4ZWxzVG9Qb2ludGVyVG9wKClcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJCb3R0b20gPSB0aGlzLnBpeGVsc1RvUG9pbnRlckJvdHRvbSgpXG5cbiAgICAgIGlmICggcGl4ZWxzVG9Qb2ludGVyVG9wIDw9IHRoaXMudmlld3BvcnQoKS50b3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8oIHBpeGVsc1RvUG9pbnRlclRvcCApXG4gICAgICB9IGVsc2UgaWYgKHBpeGVsc1RvUG9pbnRlckJvdHRvbSA+PSB0aGlzLnZpZXdwb3J0KCkuYm90dG9tKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKCB0aGlzLnZpZXdwb3J0KCkudG9wICsgdGhpcy5wb2ludGVySGVpZ2h0KCkgKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIHRvcCBvZiB0aGUgZHJvcGRvd25cbiAgICAgKiBsaXN0IHRvIHRoZSB0b3Agb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcGl4ZWxzVG9Qb2ludGVyVG9wKCkge1xuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQWhlYWRQb2ludGVyOyBpKyspIHtcbiAgICAgICAgcGl4ZWxzVG9Qb2ludGVyVG9wICs9IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LmNoaWxkcmVuW2ldLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgICAgcmV0dXJuIHBpeGVsc1RvUG9pbnRlclRvcFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIHRvcCBvZiB0aGUgZHJvcGRvd25cbiAgICAgKiBsaXN0IHRvIHRoZSBib3R0b20gb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBpeGVsc1RvUG9pbnRlckJvdHRvbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBpeGVsc1RvUG9pbnRlclRvcCgpICsgdGhpcy5wb2ludGVySGVpZ2h0KClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9mZnNldEhlaWdodCBvZiB0aGUgY3VycmVudCBwb2ludGVyIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwb2ludGVySGVpZ2h0KCkge1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlblt0aGlzLnR5cGVBaGVhZFBvaW50ZXJdXG4gICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHZpZXdhYmxlIHBvcnRpb24gb2YgdGhlIGRyb3Bkb3duTWVudS5cbiAgICAgKiBAcmV0dXJucyB7e3RvcDogKHN0cmluZ3wqfG51bWJlciksIGJvdHRvbTogKn19XG4gICAgICovXG4gICAgdmlld3BvcnQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tOiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5vZmZzZXRIZWlnaHQgKyB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3BcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRoZSBkcm9wZG93bk1lbnUgdG8gYSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCA9IHBvc2l0aW9uXG4gICAgfSxcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZUFoZWFkUG9pbnRlcjogLTFcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPSAwXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IHVwIHRoZSBsaXN0IGJ5XG4gICAgICogc3VidHJhY3RpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHlwZUFoZWFkVXAoKSB7XG4gICAgICBpZiAodGhpcy50eXBlQWhlYWRQb2ludGVyID4gMCkge1xuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXItLVxuICAgICAgICBpZiggdGhpcy5tYXliZUFkanVzdFNjcm9sbCApIHtcbiAgICAgICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IGRvd24gdGhlIGxpc3QgYnlcbiAgICAgKiBhZGRpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHlwZUFoZWFkRG93bigpIHtcbiAgICAgIGlmICh0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlcisrXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xuICAgICAgICAgIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgb3B0aW9uIGF0IHRoZSBjdXJyZW50IHR5cGVBaGVhZFBvaW50ZXIgcG9zaXRpb24uXG4gICAgICogT3B0aW9uYWxseSBjbGVhciB0aGUgc2VhcmNoIGlucHV0IG9uIHNlbGVjdGlvbi5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHR5cGVBaGVhZFNlbGVjdCgpIHtcbiAgICAgIGlmKCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGgpe1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlYXJjaClcbiAgICAgIH1cblxuICAgICAgaWYoIHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCApIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNnB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxufVxcbi52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG59XFxuLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgYm90dG9tOiAxcHg7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG59XFxuLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuMjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi52LXNlbGVjdC5zZWFyY2hhYmxlIC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLnYtc2VsZWN0ID4gLmRyb3Bkb3duLW1lbnUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4udi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcbn1cXG4udi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF0sXFxuLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgLjVlbTtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgY2xlYXI6IG5vbmU7XFxufVxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi52LXNlbGVjdCBsaSBhIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1zZWxlY3QgLmFjdGl2ZSBhIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAuMSk7XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG4udi1zZWxlY3QgLmhpZ2hsaWdodCBhLFxcbi52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuLnYtc2VsZWN0IC5zcGlubmVyIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXRvcDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICBib3JkZXItbGVmdDogLjllbSBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC40NSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbn1cXG4udi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi52LXNlbGVjdCAuc3Bpbm5lcixcXG4udi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGhlaWdodDogNWVtO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbjAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbjAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlPzQ2YTk4OGE0XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSx3RUFBQTtJQUFBLGdFQUFBO0lBQ0EsOEVBQUE7WUFBQSxzRUFBQTtJQUNBLFdBQUE7SUFDQSxnQ0FBQTtJQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7Q0FDQTtBQUVBO0lBQ0EsbUNBQUE7SUFDQSxvQkFBQTtJQUNBLGdDQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSx3RUFBQTtJQUFBLGdFQUFBO0lBQ0EsOEVBQUE7WUFBQSxzRUFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLHdDQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtDQUNBO0FBRUE7SUFDQSxhQUFBO0NBQ0E7QUFFQTtJQUNBLG9CQUFBO0lBQ0EsNkJBQUE7SUFDQSw4QkFBQTtDQUNBO0FBRUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7O0lBRUEsc0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGlDQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7O0lBRUEsb0JBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0lBQ0Esa0RBQUE7SUFDQSw4Q0FBQTtJQUNBLGlDQUFBO1lBQUEseUJBQUE7SUFDQSx1REFBQTtZQUFBLCtDQUFBO0lBQ0EsZ0NBQUE7SUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTs7SUFFQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtBQUNBO1FBQ0EsZ0NBQUE7Z0JBQUEsd0JBQUE7Q0FDQTtBQUNBO1FBQ0Esa0NBQUE7Z0JBQUEsMEJBQUE7Q0FDQTtDQUNBO0FBRUE7QUFDQTtRQUNBLGdDQUFBO2dCQUFBLHdCQUFBO0NBQ0E7QUFDQTtRQUNBLGtDQUFBO2dCQUFBLDBCQUFBO0NBQ0E7Q0FDQVwiLFwiZmlsZVwiOlwic2VsZWN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8c3R5bGU+XFxuICAgIC52LXNlbGVjdCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDZweDtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjUpO1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgICAgIGJvdHRvbTogMXB4O1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuMjYpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0ID4gLmRyb3Bkb3duLW1lbnUge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgICBtYXJnaW46IDRweCAxcHggMHB4IDNweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS43ZW07XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF0sXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcXG4gICAgICAgIHdpZHRoOiAxMGVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIGNsZWFyOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCBsaSBhIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLmFjdGl2ZSBhIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xcbiAgICAgICAgY29sb3I6ICMzMzM7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcXG4gICAgLnYtc2VsZWN0IGxpOmhvdmVyID4gYSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgICAgY29sb3I6ICMzMzM7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XFxuICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgIGFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcixcXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHdpZHRoOiA1ZW07XFxuICAgICAgICBoZWlnaHQ6IDVlbTtcXG4gICAgfVxcblxcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbiAgICAgICAgMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG48L3N0eWxlPlxcblxcbjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gdi1zZWxlY3RcXFwiIDpjbGFzcz1cXFwiZHJvcGRvd25DbGFzc2VzXFxcIj5cXG4gICAgICAgIDxkaXYgcmVmPVxcXCJ0b2dnbGVcXFwiIEBtb3VzZWRvd24ucHJldmVudD1cXFwidG9nZ2xlRHJvcGRvd25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2LWlmPVxcXCIhc2VhcmNoYWJsZSAmJiBpc1ZhbHVlRW1wdHlcXFwiPlxcbiAgICAgICAgICB7eyBwbGFjZWhvbGRlciB9fVxcbiAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZWxlY3RlZC10YWdcXFwiIHYtZm9yPVxcXCIob3B0aW9uLGluZGV4KSBpbiB2YWx1ZUFzQXJyYXlcXFwiIHYtYmluZDprZXk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxcbiAgICAgICAgICA8YnV0dG9uIHYtaWY9XFxcIm11bHRpcGxlXFxcIiBAY2xpY2s9XFxcInNlbGVjdChvcHRpb24pXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZGVib3VuY2U9XFxcImRlYm91bmNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1zaG93PVxcXCJzZWFyY2hhYmxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZGVsZXRlPVxcXCJtYXliZURlbGV0ZVZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVzYz1cXFwib25Fc2NhcGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi51cC5wcmV2ZW50PVxcXCJ0eXBlQWhlYWRVcFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRvd24ucHJldmVudD1cXFwidHlwZUFoZWFkRG93blxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlci5wcmV2ZW50PVxcXCJ0eXBlQWhlYWRTZWxlY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAYmx1cj1cXFwib3BlbiA9IGZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVxcXCJvcGVuID0gdHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XFxcInNlYXJjaFBsYWNlaG9sZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7IHdpZHRoOiBpc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bycgfVxcXCJcXG4gICAgICAgICAgICA+XFxuXFxuICAgICAgICAgICAgPGkgcmVmPVxcXCJvcGVuSW5kaWNhdG9yXFxcIiByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGNsYXNzPVxcXCJvcGVuLWluZGljYXRvclxcXCI+PC9pPlxcblxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcInNwaW5uZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGlubmVyXFxcIiB2LXNob3c9XFxcImxvYWRpbmdcXFwiPkxvYWRpbmcuLi48L2Rpdj5cXG4gICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDx1bCByZWY9XFxcImRyb3Bkb3duTWVudVxcXCIgdi1zaG93PVxcXCJvcGVuXFxcIiA6dHJhbnNpdGlvbj1cXFwidHJhbnNpdGlvblxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiXFxuICAgICAgICAgICAgOnN0eWxlPVxcXCJ7ICdtYXgtaGVpZ2h0JzogbWF4SGVpZ2h0IH1cXFwiPlxcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiKG9wdGlvbixpbmRleCkgaW4gZmlsdGVyZWRPcHRpb25zXFxcIiB2LWJpbmQ6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7IGFjdGl2ZTogaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSB0eXBlQWhlYWRQb2ludGVyIH1cXFwiXFxuICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XFxcInR5cGVBaGVhZFBvaW50ZXIgPSBpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIEBtb3VzZWRvd24ucHJldmVudD1cXFwic2VsZWN0KG9wdGlvbilcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cXFwiZmFkZVxcXCIgdi1pZj1cXFwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcbiAgICAgICAgICAgIDxsaSB0cmFuc2l0aW9uPVxcXCJmYWRlXFxcIiB2LWlmPVxcXCIhZmlsdGVyZWRPcHRpb25zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwibm8tb3B0aW9uc1xcXCI+U29ycnksIG5vIG1hdGNoaW5nIG9wdGlvbnMuPC9zbG90PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcblxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9iYWJlbFxcXCI+XFxuICAgIGltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJ2Jhc2UvbWl4aW5zL3BvaW50ZXJTY3JvbGwnXFxuICAgIGltcG9ydCB0eXBlQWhlYWRQb2ludGVyIGZyb20gJ2Jhc2UvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXInXFxuICAgIGltcG9ydCBhamF4IGZyb20gJ2Jhc2UvbWl4aW5zL2FqYXgnXFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG1peGluczogW3BvaW50ZXJTY3JvbGwsIHR5cGVBaGVhZFBvaW50ZXIsIGFqYXhdLFxcblxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHZhbHVlLiBWZXJ5IHNpbWlsYXIgdG8gYVxcbiAgICAgICAgICAgICAqIGB2YWx1ZWAgYXR0cmlidXRlIG9uIGFuIDxpbnB1dD4uIEluIG1vc3QgY2FzZXMsIHlvdSdsbCB3YW50XFxuICAgICAgICAgICAgICogdG8gc2V0IHRoaXMgYXMgYSB0d28td2F5IGJpbmRpbmcsIHVzaW5nIDp2YWx1ZS5zeW5jLiBIb3dldmVyLFxcbiAgICAgICAgICAgICAqIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFZ1ZXgsIGluIHdoaWNoIGNhc2UgeW91J2xsIG5lZWQgdG8gdXNlXFxuICAgICAgICAgICAgICogdGhlIG9uQ2hhbmdlIGNhbGxiYWNrIHByb3BlcnR5LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R8fFN0cmluZ3x8bnVsbH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB2YWx1ZToge1xcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgdG8gYmUgdXNlZCBhcyBkcm9wZG93biBjaG9pY2VzLlxcbiAgICAgICAgICAgICAqIElmIHlvdSBhcmUgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdnVlLXNlbGVjdCB3aWxsIGxvb2sgZm9yXFxuICAgICAgICAgICAgICogYSBgbGFiZWxgIGtleSAoZXguIFt7bGFiZWw6ICdUaGlzIGlzIEZvbycsIHZhbHVlOiAnZm9vJ31dKS4gQVxcbiAgICAgICAgICAgICAqIGN1c3RvbSBsYWJlbCBrZXkgY2FuIGJlIHNldCB3aXRoIHRoZSBgbGFiZWxgIHByb3AuXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBTZXRzIHRoZSBtYXgtaGVpZ2h0IHByb3BlcnR5IG9uIHRoZSBkcm9wZG93biBsaXN0LlxcbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnNDAwcHgnXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBmaWx0ZXJpbmcgdGhlIG9wdGlvbnMuXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgc2VhcmNoYWJsZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiBhIGA8c2VsZWN0PmAgaW5wdXQuXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBtdWx0aXBsZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgb24gYW4gYDxpbnB1dD5gLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJ1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogU2V0cyBhIFZ1ZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHRoZSBgLmRyb3Bkb3duLW1lbnVgLiB2dWUtc2VsZWN0XFxuICAgICAgICAgICAgICogZG9lcyBub3QgaW5jbHVkZSBDU1MgZm9yIHRyYW5zaXRpb25zLCB5b3UnbGwgbmVlZCB0byBhZGQgdGhlbSB5b3Vyc2VsZi5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZXhwYW5kJ1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBjbGVhcmluZyB0aGUgc2VhcmNoIHRleHQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgY2xlYXJTZWFyY2hPblNlbGVjdDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBUZWxscyB2dWUtc2VsZWN0IHdoYXQga2V5IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgb3B0aW9uXFxuICAgICAgICAgICAgICogbGFiZWxzIHdoZW4gZWFjaCBgb3B0aW9uYCBpcyBhbiBvYmplY3QuXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBsYWJlbDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsYWJlbCdcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENhbGxiYWNrIHRvIGdlbmVyYXRlIHRoZSBsYWJlbCB0ZXh0LiBJZiB7b3B0aW9ufVxcbiAgICAgICAgICAgICAqIGlzIGFuIG9iamVjdCwgcmV0dXJucyBvcHRpb25bdGhpcy5sYWJlbF0gYnkgZGVmYXVsdC5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbCAmJiBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvblt0aGlzLmxhYmVsXVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGVhY2ggdGltZSB0aGUgc2VsZWN0ZWRcXG4gICAgICAgICAgICAgKiB2YWx1ZShzKSBjaGFuZ2UuIFdoZW4gaW50ZWdyYXRpbmcgd2l0aCBWdWV4LCB1c2UgdGhpcyBjYWxsYmFjayB0byB0cmlnZ2VyXFxuICAgICAgICAgICAgICogYW4gYWN0aW9uLCByYXRoZXIgdGhhbiB1c2luZyA6dmFsdWUuc3luYyB0byByZXRyZWl2ZSB0aGUgc2VsZWN0ZWQgdmFsdWUuXFxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHtudWxsfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICBjaGFuZ2VQYXJhbToge30sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgY3JlYXRpbmcgb3B0aW9ucyBmcm9tIHNlYXJjaElucHV0LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHRhZ2dhYmxlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBXaGVuIHRydWUsIG5ld2x5IGNyZWF0ZWQgdGFncyB3aWxsIGJlIGFkZGVkIHRvXFxuICAgICAgICAgICAgICogdGhlIG9wdGlvbnMgbGlzdC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBwdXNoVGFnczoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogVXNlciBkZWZpbmVkIGZ1bmN0aW9uIGZvciBhZGRpbmcgT3B0aW9uc1xcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBjcmVhdGVPcHRpb246IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zWzBdID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7W3RoaXMubGFiZWxdOiBuZXdPcHRpb259XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3T3B0aW9uXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFdoZW4gZmFsc2UsIHVwZGF0aW5nIHRoZSBvcHRpb25zIHdpbGwgbm90IHJlc2V0IHRoZSBzZWxlY3QgdmFsdWVcXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcblxcbiAgICAgICAgZGF0YSgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBzZWFyY2g6ICcnLFxcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgdmFsdWUodmFsLCBvbGQpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNlbGVjdGlvbih2YWwsIG9sZCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA/IHRoaXMub25DaGFuZ2UodmFsLCB0aGlzLmNoYW5nZVBhcmFtKSA6IG51bGxcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdmFsICE9PSBvbGQgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9wdGlvbnMoKSB7XFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy50YWdnYWJsZSAmJiB0aGlzLnJlc2V0T25PcHRpb25zQ2hhbmdlKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgbXVsdGlwbGUodmFsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsID8gW10gOiBudWxsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIG1ldGhvZHM6IHtcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBTZWxlY3QgYSBnaXZlbiBvcHRpb24uXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgc2VsZWN0KG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3Qob3B0aW9uKVxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgIXRoaXMub3B0aW9uRXhpc3RzKG9wdGlvbikpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSB0aGlzLmNyZWF0ZU9wdGlvbihvcHRpb24pXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHVzaFRhZ3MpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtvcHRpb25dXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChvcHRpb24pXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG9wdGlvblxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMub25BZnRlclNlbGVjdChvcHRpb24pXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBEZS1zZWxlY3QgYSBnaXZlbiBvcHRpb24uXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZGVzZWxlY3Qob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gLTFcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmZvckVhY2goKHZhbCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IG9wdGlvbiB8fCB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWxbdGhpcy5sYWJlbF0gPT09IG9wdGlvblt0aGlzLmxhYmVsXSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB2YWxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihyZWYpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKVxcblxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENhbGxlZCBmcm9tIHRoaXMuc2VsZWN0IGFmdGVyIGVhY2ggc2VsZWN0aW9uLlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG9uQWZ0ZXJTZWxlY3Qob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlblxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJ1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXFxuICAgICAgICAgICAgICogQHBhcmFtICB7RXZlbnR9IGVcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHRvZ2dsZURyb3Bkb3duKGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLm9wZW5JbmRpY2F0b3IgfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMuc2VhcmNoIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnRvZ2dsZSB8fCBlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKCkgLy8gZHJvcGRvd24gd2lsbCBjbG9zZSBvbiBibHVyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5mb2N1cygpXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZSBnaXZlbiBvcHRpb24gaXMgY3VycmVudGx5IHNlbGVjdGVkLlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSAgb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICBUcnVlIHdoZW4gc2VsZWN0ZWQgfHwgRmFsc2Ugb3RoZXJ3aXNlXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3Rpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2gob3B0ID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uID09PSBvcHRpb25cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIElmIHRoZXJlIGlzIGFueSB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsIHJlbW92ZSBpdC5cXG4gICAgICAgICAgICAgKiBPdGhlcndpc2UsIGJsdXIgdGhlIHNlYXJjaCBpbnB1dCB0byBjbG9zZSB0aGUgZHJvcGRvd24uXFxuICAgICAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgb25Fc2NhcGUoKSB7XFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2gubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKClcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGVsZXRlIHRoZSB2YWx1ZSBvbiBEZWxldGUga2V5cHJlc3Mgd2hlbiB0aGVyZSBpcyBub1xcbiAgICAgICAgICAgICAqIHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgJiB0aGVyZSdzIHRhZ3MgdG8gZGVsZXRlXFxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpcy52YWx1ZX1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBtYXliZURlbGV0ZVZhbHVlKCkge1xcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJHJlZnMuc2VhcmNoLnZhbHVlLmxlbmd0aCAmJiB0aGlzLnZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUucG9wKCkgOiB0aGlzLnNlbGVjdGlvbiA9IG51bGxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGV0ZXJtaW5lIGlmIGFuIG9wdGlvbiBleGlzdHNcXG4gICAgICAgICAgICAgKiB3aXRoaW4gdGhpcy5vcHRpb25zIGFycmF5LlxcbiAgICAgICAgICAgICAqXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvcHRpb25FeGlzdHMob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0c1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBjb21wdXRlZDoge1xcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENsYXNzZXMgdG8gYmUgb3V0cHV0IG9uIC5kcm9wZG93blxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBkcm9wZG93bkNsYXNzZXMoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0aGlzLnNlYXJjaGFibGUsXFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmdcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBwbGFjZWhvbGRlciBzdHJpbmcgaWYgaXQncyBzZXRcXG4gICAgICAgICAgICAgKiAmIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gUGxhY2Vob2xkZXIgdGV4dFxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRW1wdHkgJiYgdGhpcy5wbGFjZWhvbGRlcikge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG9wdGlvbnMsIGZpbHRlcmVkXFxuICAgICAgICAgICAgICogYnkgdGhlIHNlYXJjaCBlbGVtZW50cyB2YWx1ZS4gSWYgdGFnZ2luZ1xcbiAgICAgICAgICAgICAqIHRydWUsIHRoZSBzZWFyY2ggdGV4dCB3aWxsIGJlIHByZXBlbmRlZFxcbiAgICAgICAgICAgICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC5cXG4gICAgICAgICAgICAgKlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2FycmF5fVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGZpbHRlcmVkT3B0aW9ucygpIHtcXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbltzZWxmLmxhYmVsXS5pbmRleE9mKHNlbGYuc2VhcmNoKSAhPT0gLTFcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoICYmICF0aGlzLm9wdGlvbkV4aXN0cyh0aGlzLnNlYXJjaCkpIHtcXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudW5zaGlmdCh0aGlzLnNlYXJjaClcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uc1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlcmUgYXJlbid0IGFueSBvcHRpb25zIHNlbGVjdGVkLlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgaXNWYWx1ZUVtcHR5KCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb24gPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGlvbikubGVuZ3RoXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuc2VsZWN0aW9uLmxlbmd0aFxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGluIGFycmF5IGZvcm1hdC5cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB2YWx1ZUFzQXJyYXkoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25cXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGlvbl1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgIH1cXG48L3NjcmlwdD5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDEwIDExIDEyIDEzIDE0IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LThkMzUxMDM0IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zZWxlY3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc2VsZWN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04ZDM1MTAzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThkMzUxMDM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxMCAxMSAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duIHYtc2VsZWN0XCIsXG4gICAgY2xhc3M6IF92bS5kcm9wZG93bkNsYXNzZXNcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgcmVmOiBcInRvZ2dsZVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLXRvZ2dsZSBjbGVhcmZpeFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRvZ2dsZURyb3Bkb3duKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsoIV92bS5zZWFyY2hhYmxlICYmIF92bS5pc1ZhbHVlRW1wdHkpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5wbGFjZWhvbGRlcikgKyBcIlxcbiAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS52YWx1ZUFzQXJyYXkpLCBmdW5jdGlvbihvcHRpb24sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdGVkLXRhZ1wiXG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5nZXRPcHRpb25MYWJlbChvcHRpb24pKSArIFwiXFxuICAgICAgXCIpLCAoX3ZtLm11bHRpcGxlKSA/IF9jKCdidXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5zZWxlY3Qob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCLDl1wiKV0pXSkgOiBfdm0uX2UoKV0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2hhYmxlKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoYWJsZVwiXG4gICAgfV0sXG4gICAgcmVmOiBcInNlYXJjaFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgd2lkdGg6IF92bS5pc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bydcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJkZWJvdW5jZVwiOiBfdm0uZGVib3VuY2UsXG4gICAgICBcInR5cGVcIjogXCJzZWFyY2hcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLnNlYXJjaFBsYWNlaG9sZGVyXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnNlYXJjaClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleWRvd25cIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImRlbGV0ZVwiLCBbOCwgNDZdKSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm1heWJlRGVsZXRlVmFsdWUoJGV2ZW50KVxuICAgICAgfSwgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwidXBcIiwgMzgpKSB7IHJldHVybjsgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnR5cGVBaGVhZFVwKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImRvd25cIiwgNDApKSB7IHJldHVybjsgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnR5cGVBaGVhZERvd24oJGV2ZW50KVxuICAgICAgfV0sXG4gICAgICBcImtleXVwXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlc2NcIiwgMjcpKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ub25Fc2NhcGUoJGV2ZW50KVxuICAgICAgfSwgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMpKSB7IHJldHVybjsgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnR5cGVBaGVhZFNlbGVjdCgkZXZlbnQpXG4gICAgICB9XSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW4gPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIFwiZm9jdXNcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuID0gdHJ1ZVxuICAgICAgfSxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICByZWY6IFwib3BlbkluZGljYXRvclwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm9wZW4taW5kaWNhdG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm9sZVwiOiBcInByZXNlbnRhdGlvblwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwic3Bpbm5lclwiLCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ubG9hZGluZyksXG4gICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInNwaW5uZXJcIlxuICB9LCBbX3ZtLl92KFwiTG9hZGluZy4uLlwiKV0pXSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3VsJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5vcGVuKSxcbiAgICAgIGV4cHJlc3Npb246IFwib3BlblwiXG4gICAgfV0sXG4gICAgcmVmOiBcImRyb3Bkb3duTWVudVwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnVcIixcbiAgICBzdHlsZTogKHtcbiAgICAgICdtYXgtaGVpZ2h0JzogX3ZtLm1heEhlaWdodFxuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogX3ZtLnRyYW5zaXRpb25cbiAgICB9XG4gIH0sIFtfdm0uX2woKF92bS5maWx0ZXJlZE9wdGlvbnMpLCBmdW5jdGlvbihvcHRpb24sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBjbGFzczoge1xuICAgICAgICBhY3RpdmU6IF92bS5pc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IF92bS50eXBlQWhlYWRQb2ludGVyXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJtb3VzZW92ZXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnR5cGVBaGVhZFBvaW50ZXIgPSBpbmRleFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJtb3VzZWRvd25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLnNlbGVjdChvcHRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5nZXRPcHRpb25MYWJlbChvcHRpb24pKSArIFwiXFxuICAgICAgICAgICAgXCIpXSldKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkgPyBfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGl2aWRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogXCJmYWRlXCJcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghX3ZtLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgpID8gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJhbnNpdGlvblwiOiBcImZhZGVcIlxuICAgIH1cbiAgfSwgW192bS5fdChcIm5vLW9wdGlvbnNcIiwgW192bS5fdihcIlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLlwiKV0pXSwgMikgOiBfdm0uX2UoKV0sIDIpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOGQzNTEwMzRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggMTAgMTEgMTIgMTMgMTQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImI1OWNiOWQwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDEwIDExIDEyIDEzIDE0IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxpbWcgOnNyYz1cImRlZmF1bHRJbWFnZVwiIGFsdD1cImF0aGxldGUgcHJvZmlsZSBpbWFnZVwiIHdpZHRoPVwiMTEwcHhcIiB2LWlmPVwiIWltYWdlRmlsZVwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJpbWFnZUZpbGVcIiBhbHQ9XCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIiB3aWR0aD1cIjExMHB4XCIgdi1pZj1cImltYWdlRmlsZVwiPlxuXG4gICAgICAgIDxicj48YnI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJpbWFnZS11cGxvYWRlclwiIGNsYXNzPVwiaW5wdXRmaWxlXCIgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZVwiXG4gICAgICAgICAgICAgICByZWY9XCJmaWxlaW5wdXRcIi8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJpbWFnZS11cGxvYWRlclwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PGkgY2xhc3M9XCJmYSBmYS1jbG91ZFwiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAgIC5pbnB1dGZpbGUge1xuICAgICAgICB3aWR0aDogMC4xcHg7XG4gICAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgLmlucHV0ZmlsZSArIGxhYmVsIHtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdCB0eXBlPVwidGV4dC9iYWJlbFwiPlxuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZToge30sXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdpbWFnZS8qJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ0blRleHQ6IHt9LFxuICAgICAgICAgICAgZXJyb3JWYWxpZGF0aW9uTXNnOiB7fSxcbiAgICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDExMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRJbWFnZToge31cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGltYWdlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VGaWxlOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uRmlsZUNoYW5nZShlKXtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUltYWdlKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCh0aGlzLmFjY2VwdGVkRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2UtdXBsb2FkZXJcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290Lndhcm5pbmdUb2FzdCh0aGlzLmVycm9yVmFsaWRhdGlvbk1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VGaWxlID0gdGhpcy5kZWZhdWx0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2bS5pbWFnZUZpbGUgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEZpbGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5maWxlaW5wdXQuZmlsZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkbmMtaW1hZ2UtdXBsb2FkLnZ1ZT80OGIwZmZmNiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmlucHV0ZmlsZSB7XFxuICAgIHdpZHRoOiAwLjFweDtcXG4gICAgaGVpZ2h0OiAwLjFweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuLmlucHV0ZmlsZSArIGxhYmVsIHtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzQ4YjBmZmY2XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFhQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImRuYy1pbWFnZS11cGxvYWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiZGVmYXVsdEltYWdlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCIhaW1hZ2VGaWxlXFxcIj5cXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiaW1hZ2VGaWxlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCJpbWFnZUZpbGVcXFwiPlxcblxcbiAgICAgICAgPGJyPjxicj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuYW1lPVxcXCJmaWxlXFxcIiBpZD1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJpbnB1dGZpbGVcXFwiIEBjaGFuZ2U9XFxcIm9uRmlsZUNoYW5nZVxcXCJcXG4gICAgICAgICAgICAgICByZWY9XFxcImZpbGVpbnB1dFxcXCIvPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jbG91ZFxcXCI+PC9pPlxcbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAuaW5wdXRmaWxlIHtcXG4gICAgICAgIHdpZHRoOiAwLjFweDtcXG4gICAgICAgIGhlaWdodDogMC4xcHg7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICB9XFxuXFxuICAgIC5pbnB1dGZpbGUgKyBsYWJlbCB7XFxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcblxcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgdmFsdWU6IHt9LFxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGJ0blRleHQ6IHt9LFxcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXFxuICAgICAgICAgICAgd2lkdGg6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGltYWdlOiB7fSxcXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XFxuICAgICAgICB9LFxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHZhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpe1xcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcztcXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCh0aGlzLmFjY2VwdGVkRmlsZXMpKSB7XFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiaW1hZ2UtdXBsb2FkZXJcXFwiKS52YWx1ZSA9IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC53YXJuaW5nVG9hc3QodGhpcy5lcnJvclZhbGlkYXRpb25Nc2cpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGdldEZpbGUoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZmlsZWlucHV0LmZpbGVzWzBdO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDEwIDExIDEyIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03YWU5NDcwYyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRuYy1pbWFnZS11cGxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdhZTk0NzBjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2FlOTQ3MGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxMCAxMSAxMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyghX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZGVmYXVsdEltYWdlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2VGaWxlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwiZmlsZWlucHV0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRmaWxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImZpbGVcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGVcIixcbiAgICAgIFwiaWRcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZUNoYW5nZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvdWRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0uYnRuVGV4dCkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdhZTk0NzBjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03YWU5NDcwYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCAxMCAxMSAxMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjUyMDQ1MTc4XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YWU5NDcwYyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDEwIDExIDEyIiwiLyoqXHJcbiAqIFRoZSBhcnJheSBvZiBuYW1lcyBvZiB0aGUgdG9vbHRpcCBtZXNzYWdlcyBvZiB0aGUgZGF0ZXRpbWUgcGlja2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgY29uc3RhbnQgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXHJcbiAqL1xyXG52YXIgREFURVRJTUVfUElDS0VSX1RPT0xUSVBTID0gW1xyXG4gICAgXCJ0b2RheVwiLCBcImNsZWFyXCIsIFwiY2xvc2VcIixcclxuICAgIFwic2VsZWN0TW9udGhcIiwgXCJwcmV2TW9udGhcIiwgXCJuZXh0TW9udGhcIixcclxuICAgIFwic2VsZWN0WWVhclwiLCBcInByZXZZZWFyXCIsIFwibmV4dFllYXJcIixcclxuICAgIFwic2VsZWN0RGVjYWRlXCIsIFwicHJldkRlY2FkZVwiLCBcIm5leHREZWNhZGVcIixcclxuICAgIFwicHJldkNlbnR1cnlcIiwgXCJuZXh0Q2VudHVyeVwiLFxyXG4gICAgXCJwaWNrSG91clwiLCBcImluY3JlbWVudEhvdXJcIiwgXCJkZWNyZW1lbnRIb3VyXCIsXHJcbiAgICBcInBpY2tNaW51dGVcIiwgXCJpbmNyZW1lbnRNaW51dGVcIiwgXCJkZWNyZW1lbnRNaW51dGVcIixcclxuICAgIFwicGlja1NlY29uZFwiLCBcImluY3JlbWVudFNlY29uZFwiLCBcImRlY3JlbWVudFNlY29uZFwiLFxyXG4gICAgXCJ0b2dnbGVQZXJpb2RcIiwgXCJzZWxlY3RUaW1lXCJcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsYW5ndWFnZSB1c2VkIGJ5IHRoaXMgY29tcG9uZW50LlxyXG4gKi9cclxudmFyIERFRkFVTFRfTEFOR1VBR0UgPSBcImVuLVVTXCI7XHJcblxyXG4vKipcclxuICogQSBkYXRldGltZSBwaWNrZXIgY29udHJvbC5cclxuICpcclxuICogQHBhcmFtIG1vZGVsXHJcbiAqICAgIHRoZSBtb2RlbCBiaW5kIHRvIHRoZSBjb250cm9sLCB3aGljaCBtdXN0IGJlIGEgdHdvIHdheSBiaW5kaW5nIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gdHlwZVxyXG4gKiAgICB0aGUgb3B0aW9uYWwgdHlwZSBvZiB0aGlzIGRhdGV0aW1lIHBpY2tlciBjb250cm9sLiBBdmFpbGFibGUgdmFsdWVzIGFyZVxyXG4gKiAgICAtIFwiZGF0ZXRpbWVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIGRhdGV0aW1lIHBpY2tlcixcclxuICogICAgLSBcImRhdGVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIGRhdGUgcGlja2VyLFxyXG4gKiAgICAtIFwidGltZVwiOiBJbmRpY2F0aW5nIHRoYXQgdGhpcyBjb250cm9sIGlzIGEgdGltZSBwaWNrZXIuXHJcbiAqICAgIERlZmF1bHQgdmFsdWUgaXMgXCJkYXRldGltZVwiLlxyXG4gKiBAcGFyYW0gbGFuZ3VhZ2VcclxuICogICAgdGhlIG9wdGlvbmFsIGxhbmd1YWdlIGNvZGUgdXNlZCB0byBsb2NhbGl6ZSB0aGUgY29udHJvbCwgd2hpY2ggbXVzdCBiZVxyXG4gKiAgICBhIHZhbGlkIGxhbmd1YWdlIGNvZGUgc3VwcG9ydGVkIGJ5IHRoZSBtb21lbnQuanMgbGlicmFyeS4gSWYgaXQgaXMgbm90IHNldCxcclxuICogICAgYW5kIHRoZSBbdnVlLWkxOG5dKGh0dHBzOi8vZ2l0aHViLmNvbS9IYWl4aW5nLUh1L3Z1ZS1pMThuKSBwbHVnaW4gaXMgdXNlZCxcclxuICogICAgdGhlIGNvbXBvbmVudCB3aWxsIHVzZSB0aGUgbGFuZ3VhZ2UgY29kZSBgJGxhbmd1YWdlYCBwcm92aWRlZCBieSB0aGVcclxuICogICAgW3Z1ZS1pMThuXShodHRwczovL2dpdGh1Yi5jb20vSGFpeGluZy1IdS92dWUtaTE4bikgcGx1Z2luOyBvdGhlcndpc2UsIHRoZVxyXG4gKiAgICBjb21wb25lbnQgd2lsbCB1c2UgdGhlIGRlZmF1bHQgdmFsdWUgXCJlbi1VU1wiLlxyXG4gKiBAcGFyYW0gZGF0ZXRpbWVGb3JtYXRcclxuICogICAgdGhlIG9wdGlvbmFsIGZvcm1hdCBvZiB0aGUgZGF0ZXRpbWUgdGhpcyBjb21wb25lbnQgc2hvdWxkIGRpc3BsYXksIHdoaWNoXHJcbiAqICAgIG11c3QgYmUgYSB2YWxpZCBkYXRldGltZSBmb3JtYXQgb2YgdGhlIG1vbWVudC5qcyBsaWJyYXJ5LiBUaGlzIHByb3BlcnR5XHJcbiAqICAgIG9ubHkgd29ya3Mgd2hlbiB0aGUgXCJ0eXBlXCIgcHJvcGVydHkgaXMgXCJkYXRldGltZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiWVlZWS1NTS1ERCBISDptbTpzc1wiLlxyXG4gKiBAcGFyYW0gZGF0ZUZvcm1hdFxyXG4gKiAgICB0aGUgb3B0aW9uYWwgZm9ybWF0IG9mIHRoZSBkYXRlIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwiZGF0ZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiWVlZWS1NTS1ERFwiLlxyXG4gKiBAcGFyYW0gdGltZUZvcm1hdFxyXG4gKiAgICB0aGUgb3B0aW9uYWwgZm9ybWF0IG9mIHRoZSB0aW1lIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwidGltZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiSEg6bW06c3NcIi5cclxuICogQHBhcmFtIG5hbWVcclxuICogICAgdGhlIG9wdGlvbmFsIG5hbWUgb2YgdGhlIHNlbGVjdGlvbiBjb250cm9sLlxyXG4gKiBAcGFyYW0gb25DaGFuZ2VcclxuICogICAgdGhlIG9wdGlvbmFsIGV2ZW50IGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBkYXRldGltZSBwaWNrZXJcclxuICogICAgd2FzIGNoYW5nZWQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnRlZCBhbmQgaXMgbm90IG51bGwsIGl0IG11c3QgYmUgYVxyXG4gKiAgICBmdW5jdGlvbiB3aGljaCBhY2NlcHQgb25lIGFyZ3VtZW50OiB0aGUgbmV3IGRhdGUgdGltZSwgd2hpY2ggaXMgYSBtb21lbnRcclxuICogICAgb2JqZWN0LlxyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgIGluaGVyaXQ6IGZhbHNlLFxyXG4gICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz0naW5wdXQtZ3JvdXAgZGF0ZSc+XCIgK1xyXG4gICAgXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCcgOm5hbWU9J25hbWUnIHR5cGU9J3RleHQnIC8+XCIgK1xyXG4gICAgXCI8c3BhbiBjbGFzcz0naW5wdXQtZ3JvdXAtYWRkb24nPlwiICtcclxuICAgIFwiPGkgY2xhc3M9J2ZhIGZhLWZ3IGZhLWNhbGVuZGFyJz48L2k+XCIgK1xyXG4gICAgXCI8L3NwYW4+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW9kZWw6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcImRhdGV0aW1lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRldGltZUZvcm1hdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiWVlZWS1NTS1ERFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lRm9ybWF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIkhIOm1tOnNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2hhbmdlOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF0ZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJkYXRldGltZS1waWNrZXIucmVhZHlcIik7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHVzZUN1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAnZmEgZmEtY2xvY2stbycsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnZmEgZmEtY2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgdXA6ICdmYSBmYS1jaGV2cm9uLXVwJyxcclxuICAgICAgICAgICAgICAgIGRvd246ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhIGZhLWNoZXZyb24tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgdG9kYXk6ICdmYSBmYS1kb3QtY2lyY2xlLW8nLFxyXG4gICAgICAgICAgICAgICAgY2xlYXI6ICdmYSBmYS10cmFzaCcsXHJcbiAgICAgICAgICAgICAgICBjbG9zZTogJ2ZhIGZhLXRpbWVzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBzZXQgdGhlIGxvY2FsZVxyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XHJcbiAgICAgICAgaWYgKGxhbmd1YWdlID09PSBudWxsIHx8IGxhbmd1YWdlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRsYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLiRsYW5ndWFnZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhbmdhdWdlID0gREVGQVVMVF9MQU5HVUFHRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VDb2RlKGxhbmd1YWdlKTtcclxuICAgICAgICAvLyBzZXQgdGhlIGZvcm1hdFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdCA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGltZVwiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSB0aGlzLnRpbWVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdCA9IHRoaXMuZGF0ZXRpbWVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdXNlIHRoZSB2dWUtaTE4biBwbHVnaW4gZm9yIGxvY2FsaXplIHRoZSB0b29sdGlwc1xyXG4gICAgICAgIGlmICh0aGlzLiRpMThuICYmIHRoaXMuJGkxOG4uZGF0ZXRpbWVfcGlja2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMuJGkxOG4uZGF0ZXRpbWVfcGlja2VyO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcHMgPSAkLmZuLmRhdGV0aW1lcGlja2VyLmRlZmF1bHRzLnRvb2x0aXBzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IERBVEVUSU1FX1BJQ0tFUl9UT09MVElQUy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBEQVRFVElNRV9QSUNLRVJfVE9PTFRJUFNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tuYW1lXSA9IG1lc3NhZ2VzW25hbWVdOyAgICAvLyBsb2NhbGl6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudG9vbHRpcHMgPSB0b29sdGlwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb250cm9sXHJcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMuJGVsKS5kYXRldGltZXBpY2tlcihvcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gJCh0aGlzLiRlbCkuZGF0YShcIkRhdGVUaW1lUGlja2VyXCIpO1xyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGRhdGUgdG8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIG1vZGVsXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5kYXRlKHRoaXMubW9kZWwpO1xyXG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgICAgICAkKHRoaXMuJGVsKS5vbihcImRwLmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmlzQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5pc0NoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtZS5kYXRlID0gbWUuY29udHJvbC5kYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWUub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLm9uQ2hhbmdlKG1lLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgXCJtb2RlbFwiOiBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZGF0ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgbGFuZ3VhZ2UgY29kZSBmcm9tIHRoZSBcImxhbmd1YWdlLWNvdW50cnlcIiBsb2NhbGUgY29kZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFRoZSBmdW5jdGlvbiB3aWxsIHN0cmlwIHRoZSBsYW5ndWFnZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgXCItXCIgb2YgYVxyXG4gICAgICAgICAqIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSwgcGFzcyBcImVuLVVTXCIgd2lsbCByZXR1cm5zIFwiZW5cIi4gQnV0IGZvciBzb21lXHJcbiAgICAgICAgICogc3BlY2lhbCBsb2NhbGVzLCB0aGUgZnVuY3Rpb24gcmVzZXJ2ZXMgdGhlIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSxcclxuICAgICAgICAgKiB0aGUgXCJ6aC1DTlwiIGZvciB0aGUgc2ltcGxpZmllZCBDaGluZXNlIGFuZCB0aGUgXCJ6aC1UV1wiIGZvciB0aGVcclxuICAgICAgICAgKiB0cmFkaXRpb25hbCBDaGluZXNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIGxvY2FsZVxyXG4gICAgICAgICAqICAgIEEgbG9jYWxlIGNvZGUuXHJcbiAgICAgICAgICogQHJldHVyblxyXG4gICAgICAgICAqICAgIHRoZSBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsb2NhbGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TGFuZ3VhZ2VDb2RlOiBmdW5jdGlvbiAobG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbGUgPT09IG51bGwgfHwgbG9jYWxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG9jYWxlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiemgtQ05cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiemgtVFdcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItTUFcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItU0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItVE5cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGUtQVRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tQVVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tQ0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tR0JcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnItQ0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaHktQU1cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibXMtTVlcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHQtQlJcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ItQ1lSTFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0bC1QSFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0em0tTEFUTlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0em1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2VydmUgb25seSB0aGUgZmlyc3QgdHdvIGxldHRlcnMgbGFuZ3VhZ2UgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlLnN1YnN0cigwLCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGF0ZXRpbWUvdnVlLWRhdGV0aW1lLXBpY2tlci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJjaGFtcGlvbnNoaXBzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgQ2hhbXBpb25zaGlwIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBDaGFtcGlvbnNoaXAgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJUaGUgQ2hhbXBpb25zaGlwIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJldmVudF9wb3N0ZXJfZGVsZXRlZFwiOiBcIlRoZSBDaGFtcGlvbnNoaXAgcG9zdGVyIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJUaGUgQ2hhbXBpb25zaGlwIGRvZXNuJ3QgZXhpc3RcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBzXCI6IFwiQ2hhbXBpb25zaGlwc1wiLFxuICAgICAgICAgICAgXCJzcG9ydFwiOiBcIlNwb3J0XCIsXG4gICAgICAgICAgICBcImluaXRfZGF0ZVwiOiBcIkluaXQgRGF0ZVwiLFxuICAgICAgICAgICAgXCJlbmRfZGF0ZVwiOiBcIkVuZCBEYXRlXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInNlbGVjdF9vcHRpb25cIjogXCJTZWxlY3QgYW4gb3B0aW9uXCIsXG4gICAgICAgICAgICBcInVwbG9hZF9pbWFnZVwiOiBcIlVwbG9hZCBpbWFnZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJVcGRhdGVcIixcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTmV3IENoYW1waW9uc2hpcFwiLFxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIkFyZSB5b3Ugc3VyZT8gdGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZVwiLFxuICAgICAgICAgICAgXCJkZWxldGVfY2hhbXBpb25zaGlwXCI6IFwiRGVsZXRlIENoYW1waW9uc2hpcFwiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBfaW5mb1wiOiBcIkNoYW1waW9uc2hpcCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgXCJzZWVfYWxsXCI6IFwiU2VlIEFsbFwiLFxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY3RcIixcbiAgICAgICAgICAgIFwic2VhcmNoX2NoYW1waW9uc2hpcFwiOiBcIlNlYXJjaCBDaGFtcGlvbnNoaXBcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJjaGFtcGlvbnNoaXBzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBjYW1wZW9uYXRvIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgY2FtcGVvbmF0byBmdWUgYWN0dWFsaXphZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJFbCBjYW1wZW9uYXRvIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcImV2ZW50X3Bvc3Rlcl9kZWxldGVkXCI6IFwiRWwgcG9zdGVyIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIGNhbXBlb25hdG8gbm8gZXhpc3RlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwY2nDs25cIixcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwc1wiOiBcIkNhbXBlb25hdG9zXCIsXG4gICAgICAgICAgICBcInNwb3J0XCI6IFwiRGVwb3J0ZVwiLFxuICAgICAgICAgICAgXCJpbml0X2RhdGVcIjogXCJGZWNoYSBkZSBpbmljaW9cIixcbiAgICAgICAgICAgIFwiZW5kX2RhdGVcIjogXCJGZWNoYSBkZSBmaW5hbGl6YWNpw7NuXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY2Npb25lc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWNjaW9uZSB1bmEgb3BjacOzblwiLFxuICAgICAgICAgICAgXCJ1cGxvYWRfaW1hZ2VcIjogXCJTdWJpciBJbWFnZW5cIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiQWN0dWFsaXphclwiLFxuICAgICAgICAgICAgXCJuZXdcIjogXCJOdWV2byBDYW1wZW9uYXRvXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxuICAgICAgICAgICAgXCJkZWxldGVfY2hhbXBpb25zaGlwXCI6IFwiRWxpbWluYXIgQ2FtcGVvbmF0b1wiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBfaW5mb1wiOiBcIkluZm9ybWFjacOzbiBkZWwgY2FtcGVvbmF0b1wiLFxuICAgICAgICAgICAgXCJzZWVfYWxsXCI6IFwiVmVyIFRvZG9zXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiOiBcIlNlbGVjY2lvbmFyXCIsXG4gICAgICAgICAgICBcInNlYXJjaF9jaGFtcGlvbnNoaXBcIjogXCJCdXNjYXIgQ2FtcGVvbmF0b1wiXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvY2hhbXBpb25zaGlwcy8nICsgaWQgKyAnP2luY2x1ZGU9c3BvcnQnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIGNyZWF0ZShjaGFtcGlvbnNoaXAsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvY2hhbXBpb25zaGlwcycsIGNoYW1waW9uc2hpcClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICB1cGRhdGUoaWQsIGNoYW1waW9uc2hpcCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL2NoYW1waW9uc2hpcHMvJyArIGlkLCBjaGFtcGlvbnNoaXAsIHtlbXVsYXRlSFRUUDogdHJ1ZX0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvY2hhbXBpb25zaGlwcy8nICsgaWQpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwU2VydmljZS5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YWRtaW4taGVhZGVyIDp0aXRsZT1cIiR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJylcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvYWRtaW4taGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiY2hhbXBpb25zaGlwLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJyl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmJveC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ25hbWVlbicpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVlblwiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdjaGFtcGlvbnNoaXBzLm5hbWUnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZWVuXCIgbmFtZT1cIm5hbWVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdjaGFtcGlvbnNoaXBzLm5hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5uYW1lLmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2NoYW1waW9uc2hpcHMubmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ25hbWVlbicpXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnbmFtZWVuJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZGVzY3JpcHRpb25lbicpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uZW5cIiBkYXRhLWVycm9yPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdjaGFtcGlvbnNoaXBzLmRlc2NyaXB0aW9uJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvbmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2NoYW1waW9uc2hpcHMuZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdjaGFtcGlvbnNoaXBzLmRlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCdkZXNjcmlwdGlvbmVuJylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdkZXNjcmlwdGlvbmVuJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRuYy1pbWFnZS11cGxvYWRlciA6YnRuLXRleHQ9XCIkdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItdmFsaWRhdGlvbi1tc2c9XCIkdCgndmFsaWRhdGlvbi5pbWFnZScse2F0dHJpYnV0ZTokdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKX0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbWFnZT1cImNoYW1waW9uc2hpcC5pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0LWltYWdlPVwiL2ltYWdlcy9taXNzaW5nL2NoYW1waW9uc2hpcC9taXNzaW5nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRlclwiPjwvZG5jLWltYWdlLXVwbG9hZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3Nwb3J0JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3BvcnRzXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2NoYW1waW9uc2hpcHMuc3BvcnQnKX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDp2YWx1ZT1cImNoYW1waW9uc2hpcC5zcG9ydFwiIGxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwic3BvcnRDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdjaGFtcGlvbnNoaXBzLnNlbGVjdF9vcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNwb3J0c1wiPjwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNwb3J0X2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoYW1waW9uc2hpcC5zcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hhbXBpb25zaGlwLnNwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2NoYW1waW9uc2hpcHMuc3BvcnQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnc3BvcnQnKVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ3Nwb3J0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdpbml0X2RhdGUnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbml0X2RhdGVcIiBkYXRhLWVycm9yPVwiXCI+e3skdCgnY2hhbXBpb25zaGlwcy5pbml0X2RhdGUnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtZGF0ZXRpbWUtcGlja2VyIGNsYXNzPVwidnVlLXBpY2tlcjJcIiBuYW1lPVwiaW5pdF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1vZGVsPVwiY2hhbXBpb25zaGlwLmluaXRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJpbml0RGF0ZUNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT1cImVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWUtZm9ybWF0PVwiTExMXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLWRhdGV0aW1lLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW5pdF9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoYW1waW9uc2hpcC5pbml0X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoYW1waW9uc2hpcC5pbml0X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnY2hhbXBpb25zaGlwcy5pbml0X2RhdGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnaW5pdF9kYXRlJylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdpbml0X2RhdGUnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW5kX2RhdGUnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbmRfZGF0ZVwiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdjaGFtcGlvbnNoaXBzLmVuZF9kYXRlJyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtZGF0ZXRpbWUtcGlja2VyIGNsYXNzPVwidnVlLXBpY2tlcjNcIiBuYW1lPVwiZW5kX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bW9kZWw9XCJjaGFtcGlvbnNoaXAuZW5kX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT1cImVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImVuZERhdGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWUtZm9ybWF0PVwiTExMXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLWRhdGV0aW1lLXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW5kX2lucHV0XCIgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hhbXBpb25zaGlwLmVuZF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGFtcGlvbnNoaXAuZW5kX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnY2hhbXBpb25zaGlwcy5lbmRfZGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCdlbmRfZGF0ZScpXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZW5kX2RhdGUnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZm9ybXMuYmFjaycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBocmVmPVwiIyFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydkaXNhYmxlZCc6dXBkYXRpbmd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uU3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Zvcm1zLnNhdmUnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cbiAgICBpbXBvcnQgY2hhbXBpb25zaGlwTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBzLmpzJztcbiAgICBpbXBvcnQgZm9ybURhdGFPYmplY3RQYXJzZXIgZnJvbSAnYmFzZS9taXhpbnMvYWpheC9mb3JtRGF0YVBhcnNlcidcbiAgICBpbXBvcnQge21hcEFjdGlvbnN9IGZyb20gJ3Z1ZXgnXG4gICAgaW1wb3J0IGRuY0ltYWdlVXBsb2FkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZSc7XG4gICAgaW1wb3J0IHZTZWxlY3QgZnJvbSBcImJhc2UvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVwiXG4gICAgaW1wb3J0IGFkbWluSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXG4gICAgaW1wb3J0IGNoYW1waW9uc2hpcFNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBTZXJ2aWNlJ1xuXG4gICAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIHZTZWxlY3QsXG4gICAgICAgICAgICBhZG1pbkhlYWRlcixcbiAgICAgICAgICAgIGRuY0ltYWdlVXBsb2FkZXIsXG4gICAgICAgICAgICBcInZ1ZS1kYXRldGltZS1waWNrZXJcIjogcmVxdWlyZShcImJhc2UvY29tcG9uZW50cy9kYXRldGltZS92dWUtZGF0ZXRpbWUtcGlja2VyLmpzXCIpLFxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IFtmb3JtRGF0YU9iamVjdFBhcnNlcl0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hhbXBpb25zaGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRfZGF0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7fVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhjZXB0QXRobGV0ZXM6ICcnLFxuICAgICAgICAgICAgICAgIHVwZGF0aW5nOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLmhvbWUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvY2hhbXBpb25zaGlwcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLmNoYW1waW9uc2hpcHMnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvY2hhbXBpb25zaGlwcy8nICsgdGhpcy5jaGFtcGlvbnNoaXAuaWQgKyAnL3VwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnVwZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcG9ydHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5zcG9ydHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2FsZXM6IGNoYW1waW9uc2hpcExvY2FsZXMsXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIGlmICghdGhpcy5zcG9ydHMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BvcnRzKCk7XG4gICAgICAgICAgICBjaGFtcGlvbnNoaXBTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFtcGlvbnNoaXAgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFtcGlvbnNoaXAuaW5pdF9kYXRlID0gbW9tZW50KHRoaXMuY2hhbXBpb25zaGlwLmluaXRfZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSA9IG1vbWVudCh0aGlzLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgICAgIGdldFNwb3J0czogJ2NvbW1vbjpnZXRTcG9ydHMnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzcG9ydENoYW5nZWQoc3BvcnQpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbXBpb25zaGlwLnNwb3J0ID0gc3BvcnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmREYXRlQ2hhbmdlZChkYXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdERhdGVDaGFuZ2VkKGRhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbXBpb25zaGlwLmluaXRfZGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CYWNrKGV2dCl7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hhbXBpb25zaGlwcy5saXN0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TdWJtaXQoZXZ0KXtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gc2VsZi4kcmVmcy51cGxvYWRlci5nZXRGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0ZXInLCBzZWxmLiRyZWZzLnVwbG9hZGVyLmdldEZpbGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhID0gc2VsZi5wYXJzZU9iakZvcm1EYXRhKHNlbGYuY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLCBmb3JtRGF0YSwgJ3RyYW5zbGF0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmNoYW1waW9uc2hpcC5zcG9ydClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3BvcnRfaWQnLCBzZWxmLmNoYW1waW9uc2hpcC5zcG9ydC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW5pdF9kYXRlJywgc2VsZi5jaGFtcGlvbnNoaXAuaW5pdF9kYXRlLmZvcm1hdCgnREQtTU0tWVlZWSBISDptbTpzcycpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbmRfZGF0ZScsIHNlbGYuY2hhbXBpb25zaGlwLmVuZF9kYXRlLmZvcm1hdCgnREQtTU0tWVlZWSBISDptbTpzcycpKTtcblxuICAgICAgICAgICAgICAgICAgICBjaGFtcGlvbnNoaXBTZXJ2aWNlLnVwZGF0ZShzZWxmLmNoYW1waW9uc2hpcC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LnN1Y2Nlc3NUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoYW1waW9uc2hpcHMubGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcnNbZXJyb3JdLmZvckVhY2goKHZhbGlkYXRpb25FcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QodmFsaWRhdGlvbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdChyZXNwb25zZS5lcnJvcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChiYWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnYWRtaW4udmFsaWRhdGlvbl9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWRpdC52dWU/M2IwNTQ1ZjYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnYWRtaW4taGVhZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IF92bS4kdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgW19jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNoYW1waW9uc2hpcC1mb3JtXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ25hbWVlbicpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5hbWVlblwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnY2hhbXBpb25zaGlwcy5uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4pLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24ubmFtZS5lblwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmFtZWVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJuYW1lZW5cIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLm5hbWUnKSxcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLm5hbWUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5jaGFtcGlvbnNoaXAudHJhbnNsYXRpb24ubmFtZS5lbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jaGFtcGlvbnNoaXAudHJhbnNsYXRpb24ubmFtZS5lbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCduYW1lZW4nKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ25hbWVlbicpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ25hbWVlbicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uZW4nKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJkZXNjcmlwdGlvbmVuXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLmRlc2NyaXB0aW9uJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJkZXNjcmlwdGlvbmVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJkZXNjcmlwdGlvbmVuXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy5kZXNjcmlwdGlvbicpLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2NoYW1waW9uc2hpcHMuZGVzY3JpcHRpb24nKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5jaGFtcGlvbnNoaXAudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uZW4nKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uZW4nKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdkZXNjcmlwdGlvbmVuJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnZG5jLWltYWdlLXVwbG9hZGVyJywge1xuICAgIHJlZjogXCJ1cGxvYWRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJ0bi10ZXh0XCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKSxcbiAgICAgIFwiZXJyb3ItdmFsaWRhdGlvbi1tc2dcIjogX3ZtLiR0KCd2YWxpZGF0aW9uLmltYWdlJywge1xuICAgICAgICBhdHRyaWJ1dGU6IF92bS4kdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKVxuICAgICAgfSksXG4gICAgICBcImltYWdlXCI6IF92bS5jaGFtcGlvbnNoaXAuaW1hZ2UsXG4gICAgICBcImRlZmF1bHQtaW1hZ2VcIjogXCIvaW1hZ2VzL21pc3NpbmcvY2hhbXBpb25zaGlwL21pc3NpbmcucG5nXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnc3BvcnQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJzcG9ydHNcIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2NoYW1waW9uc2hpcHMuc3BvcnQnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd2LXNlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uY2hhbXBpb25zaGlwLnNwb3J0LFxuICAgICAgXCJsYWJlbFwiOiBcIm5hbWVcIixcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5zcG9ydENoYW5nZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy5zZWxlY3Rfb3B0aW9uJyksXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnNwb3J0c1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGFtcGlvbnNoaXAuc3BvcnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGFtcGlvbnNoaXAuc3BvcnRcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInNwb3J0X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNoYW1waW9uc2hpcC5zcG9ydFwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2NoYW1waW9uc2hpcHMuc3BvcnQnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5jaGFtcGlvbnNoaXAuc3BvcnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLnNwb3J0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdzcG9ydCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnc3BvcnQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdzcG9ydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdpbml0X2RhdGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJpbml0X2RhdGVcIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2NoYW1waW9uc2hpcHMuaW5pdF9kYXRlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd2dWUtZGF0ZXRpbWUtcGlja2VyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1waWNrZXIyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImluaXRfZGF0ZVwiLFxuICAgICAgXCJtb2RlbFwiOiBfdm0uY2hhbXBpb25zaGlwLmluaXRfZGF0ZSxcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5pbml0RGF0ZUNoYW5nZWQsXG4gICAgICBcInR5cGVcIjogXCJkYXRldGltZVwiLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgICBcImRhdGV0aW1lLWZvcm1hdFwiOiBcIkxMTFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoYW1waW9uc2hpcC5pbml0X2RhdGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGFtcGlvbnNoaXAuaW5pdF9kYXRlXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbml0X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNoYW1waW9uc2hpcC5pbml0X2RhdGVcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLmluaXRfZGF0ZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNoYW1waW9uc2hpcC5pbml0X2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLmluaXRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnaW5pdF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdpbml0X2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdpbml0X2RhdGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2VuZF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZW5kX2RhdGVcIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2NoYW1waW9uc2hpcHMuZW5kX2RhdGUnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd2dWUtZGF0ZXRpbWUtcGlja2VyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1waWNrZXIzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImVuZF9kYXRlXCIsXG4gICAgICBcIm1vZGVsXCI6IF92bS5jaGFtcGlvbnNoaXAuZW5kX2RhdGUsXG4gICAgICBcInR5cGVcIjogXCJkYXRldGltZVwiLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uZW5kRGF0ZUNoYW5nZWQsXG4gICAgICBcImRhdGV0aW1lLWZvcm1hdFwiOiBcIkxMTFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcImNoYW1waW9uc2hpcC5lbmRfZGF0ZVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZW5kX2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNoYW1waW9uc2hpcC5lbmRfZGF0ZVwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2NoYW1waW9uc2hpcHMuZW5kX2RhdGUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5jaGFtcGlvbnNoaXAuZW5kX2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLmVuZF9kYXRlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdlbmRfZGF0ZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZW5kX2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdlbmRfZGF0ZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uQmFja1xuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Zvcm1zLmJhY2snKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnZGlzYWJsZWQnOiBfdm0udXBkYXRpbmdcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIixcbiAgICAgIFwiaHJlZlwiOiBcIiMhXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vblN1Ym1pdFxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Zvcm1zLnNhdmUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKV0pXSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2VyXCJcbiAgfSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlclwiXG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00MjVmMjE4NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDI1ZjIxODQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvY2hhbXBpb25zaGlwcy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=