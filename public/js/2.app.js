webpackJsonp([2,31],{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(454)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(312),
  /* template */
  __webpack_require__(417),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52c8fca4", Component.options)
  } else {
    hotAPI.reload("data-v-52c8fca4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(200)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(197),
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

/***/ 197:
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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


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
var content = __webpack_require__(198);
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

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(223)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(208),
  /* template */
  __webpack_require__(221),
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

var _pointerScroll = __webpack_require__(212);

var _pointerScroll2 = _interopRequireDefault(_pointerScroll);

var _typeAheadPointer = __webpack_require__(213);

var _typeAheadPointer2 = _interopRequireDefault(_typeAheadPointer);

var _ajax = __webpack_require__(211);

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

/***/ 211:
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

/***/ 212:
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

/***/ 213:
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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.v-select {\n    position: relative;\n}\n.v-select .open-indicator {\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    pointer-events: all;\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    opacity: 1;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .open-indicator {\n    opacity: 0;\n}\n.v-select .open-indicator:before {\n    border-color: rgba(60, 60, 60, .5);\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    vertical-align: top;\n    -webkit-transform: rotate(133deg);\n            transform: rotate(133deg);\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n}\n.v-select.open .open-indicator {\n    bottom: 1px;\n}\n.v-select.open .open-indicator:before {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n}\n.v-select .dropdown-toggle {\n    display: block;\n    padding: 0;\n    background: none;\n    border: 1px solid rgba(60, 60, 60, .26);\n    border-radius: 4px;\n    white-space: normal;\n}\n.v-select.searchable .dropdown-toggle {\n    cursor: text;\n}\n.v-select.open .dropdown-toggle {\n    border-bottom: none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.v-select > .dropdown-menu {\n    margin: 0;\n    width: 100%;\n    overflow-y: scroll;\n    border-top: none;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.v-select .selected-tag {\n    color: #333;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 26px;\n    margin: 4px 1px 0px 3px;\n    padding: 0 0.25em;\n    float: left;\n    line-height: 1.7em;\n}\n.v-select .selected-tag .close {\n    float: none;\n    margin-right: 0;\n    font-size: 20px;\n}\n.v-select input[type=search],\n.v-select input[type=search]:focus {\n    display: inline-block;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0 .5em;\n    width: 10em;\n    max-width: 100%;\n    background: none;\n    position: relative;\n    box-shadow: none;\n    float: left;\n    clear: none;\n}\n.v-select input[type=search]:disabled {\n    cursor: pointer;\n}\n.v-select li a {\n    cursor: pointer;\n}\n.v-select .active a {\n    background: rgba(50, 50, 50, .1);\n    color: #333;\n}\n.v-select .highlight a,\n.v-select li:hover > a {\n    background: #f0f0f0;\n    color: #333;\n}\n.v-select .spinner {\n    opacity: 0;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 5px;\n    text-indent: -9999em;\n    overflow: hidden;\n    border-top: .9em solid rgba(100, 100, 100, .1);\n    border-right: .9em solid rgba(100, 100, 100, .1);\n    border-bottom: .9em solid rgba(100, 100, 100, .1);\n    border-left: .9em solid rgba(60, 60, 60, .45);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-animation: vSelectSpinner 1.1s infinite linear;\n            animation: vSelectSpinner 1.1s infinite linear;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .spinner {\n    opacity: 1;\n}\n.v-select .spinner,\n.v-select .spinner:after {\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n}\n@-webkit-keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/forms/select/select.vue?46a988a4"],"names":[],"mappings":";AACA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;IACA,gBAAA;IACA,oBAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;IACA,WAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,mCAAA;IACA,oBAAA;IACA,gCAAA;IACA,YAAA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,oBAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,WAAA;IACA,iBAAA;IACA,wCAAA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,oBAAA;IACA,6BAAA;IACA,8BAAA;CACA;AAEA;IACA,UAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;IACA,2BAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;;IAEA,sBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,iCAAA;IACA,YAAA;CACA;AAEA;;IAEA,oBAAA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,mBAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,qBAAA;IACA,iBAAA;IACA,+CAAA;IACA,iDAAA;IACA,kDAAA;IACA,8CAAA;IACA,iCAAA;YAAA,yBAAA;IACA,uDAAA;YAAA,+CAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,mBAAA;IACA,WAAA;IACA,YAAA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA","file":"select.vue","sourcesContent":["<style>\n    .v-select {\n        position: relative;\n    }\n\n    .v-select .open-indicator {\n        position: absolute;\n        bottom: 6px;\n        right: 10px;\n        display: inline-block;\n        cursor: pointer;\n        pointer-events: all;\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        opacity: 1;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .open-indicator {\n        opacity: 0;\n    }\n\n    .v-select .open-indicator:before {\n        border-color: rgba(60, 60, 60, .5);\n        border-style: solid;\n        border-width: 0.25em 0.25em 0 0;\n        content: '';\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        vertical-align: top;\n        transform: rotate(133deg);\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    }\n\n    .v-select.open .open-indicator {\n        bottom: 1px;\n    }\n\n    .v-select.open .open-indicator:before {\n        transform: rotate(315deg);\n    }\n\n    .v-select .dropdown-toggle {\n        display: block;\n        padding: 0;\n        background: none;\n        border: 1px solid rgba(60, 60, 60, .26);\n        border-radius: 4px;\n        white-space: normal;\n    }\n\n    .v-select.searchable .dropdown-toggle {\n        cursor: text;\n    }\n\n    .v-select.open .dropdown-toggle {\n        border-bottom: none;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    .v-select > .dropdown-menu {\n        margin: 0;\n        width: 100%;\n        overflow-y: scroll;\n        border-top: none;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    .v-select .selected-tag {\n        color: #333;\n        background-color: #f0f0f0;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        height: 26px;\n        margin: 4px 1px 0px 3px;\n        padding: 0 0.25em;\n        float: left;\n        line-height: 1.7em;\n    }\n\n    .v-select .selected-tag .close {\n        float: none;\n        margin-right: 0;\n        font-size: 20px;\n    }\n\n    .v-select input[type=search],\n    .v-select input[type=search]:focus {\n        display: inline-block;\n        border: none;\n        outline: none;\n        margin: 0;\n        padding: 0 .5em;\n        width: 10em;\n        max-width: 100%;\n        background: none;\n        position: relative;\n        box-shadow: none;\n        float: left;\n        clear: none;\n    }\n\n    .v-select input[type=search]:disabled {\n        cursor: pointer;\n    }\n\n    .v-select li a {\n        cursor: pointer;\n    }\n\n    .v-select .active a {\n        background: rgba(50, 50, 50, .1);\n        color: #333;\n    }\n\n    .v-select .highlight a,\n    .v-select li:hover > a {\n        background: #f0f0f0;\n        color: #333;\n    }\n\n    .v-select .spinner {\n        opacity: 0;\n        position: absolute;\n        top: 5px;\n        right: 10px;\n        font-size: 5px;\n        text-indent: -9999em;\n        overflow: hidden;\n        border-top: .9em solid rgba(100, 100, 100, .1);\n        border-right: .9em solid rgba(100, 100, 100, .1);\n        border-bottom: .9em solid rgba(100, 100, 100, .1);\n        border-left: .9em solid rgba(60, 60, 60, .45);\n        transform: translateZ(0);\n        animation: vSelectSpinner 1.1s infinite linear;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .spinner {\n        opacity: 1;\n    }\n\n    .v-select .spinner,\n    .v-select .spinner:after {\n        border-radius: 50%;\n        width: 5em;\n        height: 5em;\n    }\n\n    @-webkit-keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n\n<template>\n    <div class=\"dropdown v-select\" :class=\"dropdownClasses\">\n        <div ref=\"toggle\" @mousedown.prevent=\"toggleDropdown\" class=\"dropdown-toggle clearfix\" type=\"button\">\n        <span class=\"form-control\" v-if=\"!searchable && isValueEmpty\">\n          {{ placeholder }}\n        </span>\n\n            <span class=\"selected-tag\" v-for=\"(option,index) in valueAsArray\" v-bind:key=\"index\">\n          {{ getOptionLabel(option) }}\n          <button v-if=\"multiple\" @click=\"select(option)\" type=\"button\" class=\"close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </span>\n\n            <input\n                    ref=\"search\"\n                    :debounce=\"debounce\"\n                    v-model=\"search\"\n                    v-show=\"searchable\"\n                    @keydown.delete=\"maybeDeleteValue\"\n                    @keyup.esc=\"onEscape\"\n                    @keydown.up.prevent=\"typeAheadUp\"\n                    @keydown.down.prevent=\"typeAheadDown\"\n                    @keyup.enter.prevent=\"typeAheadSelect\"\n                    @blur=\"open = false\"\n                    @focus=\"open = true\"\n                    type=\"search\"\n                    class=\"form-control\"\n                    :placeholder=\"searchPlaceholder\"\n                    :style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"\n            >\n\n            <i ref=\"openIndicator\" role=\"presentation\" class=\"open-indicator\"></i>\n\n            <slot name=\"spinner\">\n                <div class=\"spinner\" v-show=\"loading\">Loading...</div>\n            </slot>\n        </div>\n\n        <ul ref=\"dropdownMenu\" v-show=\"open\" :transition=\"transition\" class=\"dropdown-menu\"\n            :style=\"{ 'max-height': maxHeight }\">\n            <li v-for=\"(option,index) in filteredOptions\" v-bind:key=\"index\"\n                :class=\"{ active: isOptionSelected(option), highlight: index === typeAheadPointer }\"\n                @mouseover=\"typeAheadPointer = index\">\n                <a @mousedown.prevent=\"select(option)\">\n                    {{ getOptionLabel(option) }}\n                </a>\n            </li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"divider\"></li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"text-center\">\n                <slot name=\"no-options\">Sorry, no matching options.</slot>\n            </li>\n        </ul>\n    </div>\n</template>\n\n\n<script type=\"text/babel\">\n    import pointerScroll from 'base/mixins/pointerScroll'\n    import typeAheadPointer from 'base/mixins/typeAheadPointer'\n    import ajax from 'base/mixins/ajax'\n\n    export default {\n        mixins: [pointerScroll, typeAheadPointer, ajax],\n\n        props: {\n            /**\n             * Contains the currently selected value. Very similar to a\n             * `value` attribute on an <input>. In most cases, you'll want\n             * to set this as a two-way binding, using :value.sync. However,\n             * this will not work with Vuex, in which case you'll need to use\n             * the onChange callback property.\n             * @type {Object||String||null}\n             */\n            value: {\n                default: null\n            },\n\n            /**\n             * An array of strings or objects to be used as dropdown choices.\n             * If you are using an array of objects, vue-select will look for\n             * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\n             * custom label key can be set with the `label` prop.\n             * @type {Object}\n             */\n            options: {\n                type: Array,\n                default() {\n                    return []\n                },\n            },\n\n            /**\n             * Sets the max-height property on the dropdown list.\n             * @deprecated\n             * @type {String}\n             */\n            maxHeight: {\n                type: String,\n                default: '400px'\n            },\n\n            /**\n             * Enable/disable filtering the options.\n             * @type {Boolean}\n             */\n            searchable: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Equivalent to the `multiple` attribute on a `<select>` input.\n             * @type {Object}\n             */\n            multiple: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * Equivalent to the `placeholder` attribute on an `<input>`.\n             * @type {Object}\n             */\n            placeholder: {\n                type: String,\n                default: ''\n            },\n\n            /**\n             * Sets a Vue transition property on the `.dropdown-menu`. vue-select\n             * does not include CSS for transitions, you'll need to add them yourself.\n             * @type {String}\n             */\n            transition: {\n                type: String,\n                default: 'expand'\n            },\n\n            /**\n             * Enables/disables clearing the search text when an option is selected.\n             * @type {Boolean}\n             */\n            clearSearchOnSelect: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Tells vue-select what key to use when generating option\n             * labels when each `option` is an object.\n             * @type {String}\n             */\n            label: {\n                type: String,\n                default: 'label'\n            },\n\n            /**\n             * Callback to generate the label text. If {option}\n             * is an object, returns option[this.label] by default.\n             * @param  {Object || String} option\n             * @return {String}\n             */\n            getOptionLabel: {\n                type: Function,\n                default(option) {\n                    if (typeof option === 'object') {\n                        if (this.label && option[this.label]) {\n                            return option[this.label]\n                        }\n                    }\n                    return option;\n                }\n            },\n\n            /**\n             * An optional callback function that is called each time the selected\n             * value(s) change. When integrating with Vuex, use this callback to trigger\n             * an action, rather than using :value.sync to retreive the selected value.\n             * @type {Function}\n             * @default {null}\n             */\n            onChange: Function,\n            changeParam: {},\n\n            /**\n             * Enable/disable creating options from searchInput.\n             * @type {Boolean}\n             */\n            taggable: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * When true, newly created tags will be added to\n             * the options list.\n             * @type {Boolean}\n             */\n            pushTags: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * User defined function for adding Options\n             * @type {Function}\n             */\n            createOption: {\n                type: Function,\n                default: function (newOption) {\n                    if (typeof this.options[0] === 'object') {\n                        return {[this.label]: newOption}\n                    }\n                    return newOption\n                }\n            },\n\n            /**\n             * When false, updating the options will not reset the select value\n             * @type {Boolean}\n             */\n            resetOnOptionsChange: {\n                type: Boolean,\n                default: false\n            },\n        },\n\n        data() {\n            return {\n                search: '',\n                open: false,\n                selection: null\n            }\n        },\n\n        watch: {\n            value(val, old) {\n                this.selection = val\n            },\n            selection(val, old) {\n                if (this.multiple) {\n                    this.onChange ? this.onChange(val, this.changeParam) : null\n                } else {\n                    this.onChange && val !== old ? this.onChange(val, this.changeParam) : null\n                }\n            },\n            options() {\n                if (!this.taggable && this.resetOnOptionsChange) {\n                    this.selection = this.multiple ? [] : null\n                }\n            },\n            multiple(val) {\n                this.selection = val ? [] : null\n            }\n        },\n\n        methods: {\n\n            /**\n             * Select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            select(option) {\n                if (this.isOptionSelected(option)) {\n                    this.deselect(option)\n                } else {\n                    if (this.taggable && !this.optionExists(option)) {\n                        option = this.createOption(option)\n\n                        if (this.pushTags) {\n                            this.options.push(option)\n                        }\n                    }\n\n                    if (this.multiple) {\n                        if (!this.selection) {\n                            this.selection = [option]\n                        } else {\n                            this.selection.push(option)\n                        }\n                    } else {\n                        this.selection = option\n                    }\n                }\n\n                this.onAfterSelect(option)\n            },\n\n            /**\n             * De-select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            deselect(option) {\n                if (this.multiple) {\n                    let ref = -1\n                    this.selection.forEach((val) => {\n                        if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {\n                            ref = val\n                        }\n                    })\n                    var index = this.selection.indexOf(ref);\n                    this.selection.splice(index, 1)\n\n                } else {\n                    this.selection = null\n                }\n            },\n\n            /**\n             * Called from this.select after each selection.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            onAfterSelect(option) {\n                if (!this.multiple) {\n                    this.open = !this.open\n                    this.$refs.search.blur()\n                }\n\n                if (this.clearSearchOnSelect) {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Toggle the visibility of the dropdown menu.\n             * @param  {Event} e\n             * @return {void}\n             */\n            toggleDropdown(e) {\n                if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {\n                    if (this.open) {\n                        this.$refs.search.blur() // dropdown will close on blur\n                    } else {\n                        this.open = true\n                        this.$refs.search.focus()\n                    }\n                }\n            },\n\n            /**\n             * Check if the given option is currently selected.\n             * @param  {Object||String}  option\n             * @return {Boolean}         True when selected || False otherwise\n             */\n            isOptionSelected(option) {\n                if (this.multiple && this.selection) {\n                    let selected = false\n                    this.value.forEach(opt => {\n                        if (typeof opt === 'object' && opt[this.label] === option[this.label]) {\n                            selected = true\n                        } else if (opt === option) {\n                            selected = true\n                        }\n                    })\n                    return selected\n                }\n\n                return this.selection === option\n            },\n\n            /**\n             * If there is any text in the search input, remove it.\n             * Otherwise, blur the search input to close the dropdown.\n             * @return {[type]} [description]\n             */\n            onEscape() {\n                if (!this.search.length) {\n                    this.$refs.search.blur()\n                } else {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Delete the value on Delete keypress when there is no\n             * text in the search input, & there's tags to delete\n             * @return {this.value}\n             */\n            maybeDeleteValue() {\n                if (!this.$refs.search.value.length && this.value) {\n                    return this.multiple ? this.value.pop() : this.selection = null\n                }\n            },\n\n            /**\n             * Determine if an option exists\n             * within this.options array.\n             *\n             * @param  {Object || String} option\n             * @return {boolean}\n             */\n            optionExists(option) {\n                let exists = false\n\n                this.options.forEach(opt => {\n                    if (typeof opt === 'object' && opt[this.label] === option) {\n                        exists = true\n                    } else if (opt === option) {\n                        exists = true\n                    }\n                })\n\n                return exists\n            }\n        },\n\n        computed: {\n\n            /**\n             * Classes to be output on .dropdown\n             * @return {Object}\n             */\n            dropdownClasses() {\n                return {\n                    open: this.open,\n                    searchable: this.searchable,\n                    loading: this.loading\n                }\n            },\n\n            /**\n             * Return the placeholder string if it's set\n             * & there is no value selected.\n             * @return {String} Placeholder text\n             */\n            searchPlaceholder() {\n                if (this.isValueEmpty && this.placeholder) {\n                    return this.placeholder;\n                }\n            },\n\n            /**\n             * The currently displayed options, filtered\n             * by the search elements value. If tagging\n             * true, the search text will be prepended\n             * if it doesn't already exist.\n             *\n             * @return {array}\n             */\n            filteredOptions() {\n                let self = this;\n                let options = this.options.filter(function (option) {\n                    return option[self.label].indexOf(self.search) !== -1\n                })\n                if (this.taggable && this.search.length && !this.optionExists(this.search)) {\n                    options.unshift(this.search)\n                }\n                return options\n            },\n\n            /**\n             * Check if there aren't any options selected.\n             * @return {Boolean}\n             */\n            isValueEmpty() {\n                if (this.selection) {\n                    if (typeof this.selection === 'object') {\n                        return !Object.keys(this.selection).length\n                    }\n                    return !this.selection.length\n                }\n\n                return true;\n            },\n\n            /**\n             * Return the current value in array format.\n             * @return {Array}\n             */\n            valueAsArray() {\n                if (this.multiple) {\n                    return this.selection\n                } else if (this.selection) {\n                    return [this.selection]\n                }\n\n                return []\n            }\n        }\n\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 221:
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

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
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

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "en": {
        "scoutings": {
            "created_successfully": "The Scouting was created successfully",
            "updated_successfully": "The Scouting was updated successfully",
            "deleted_succesfully": "The Scouting was deleted successfully",
            "not_found": "The Scouting doesn't exist",
            "name": "Name",
            "description": "Description",
            "championship": "Championship",
            "event": "Event",
            "left_athlete": "Left Athlete",
            "right_athlete": "Right Athlete",
            "video_src": "Video Source",
            "actions": "Actions",
            "select_option": "Select an option",
            "update": "Update",
            "new": "New Scouting",
            "delete_message": "Are you sure? this action cannot be undone",
            "delete_scouting": "Delete Scouting",
            "scouting_info": "Scouting Information",
            "update_scouting": "Update Scouting",
            "make": "Make Scouting",
            "start_touch": "Start Touch",
            "end_touch": "End Touch",
            "toogle_timeline": "Toogle Timeline",
            "toogle_inspector": "Toogle Inspector",
            "inspector": "Inspector",
            "timeline": "Timeline",
            "globaltimeline": "Global Timeline",
            "end_action": "End Acción",
            "pause": "Pause",
            "play": "Play",
            "left_actions": "Left Athlete Actions",
            "right_actions": "Right Athlete Actions",
            "title": "Title",
            "color": "Color",
            "start": "Start (seg)",
            "end": "End (seg)",
            "save": "Save Changes",
            "cancel": "Cancel Changes",
            "touches_cant_overlap": "Touches cant overlap",
            "touch_overlap_with": "The touch that you are trying to add overlap with",
            "validation_error": "EValidation Error",
            "validation_end_greater": "The end of the touch must be greater than the start",
            "touch_overlap_msg": "{title} that starts on {start} and ends on {end}",
            "touches": "Touches",
            "start_at": "Start at {start}",
            "end_at": "End at {end}",
            "no_touches": "There are no registered tocuhes",
            "select": "Select Scoutings",
            "create": "Create Scouting",
            "scoutings": "Scoutings",
            "making_report": "Processing Report please wait",
            "report": "See Report",
            "error_report": "An error ocurred while creating the report",
            "list": "Data List",
            "results": "Results",
            "app_mobile": "Mobile App",
            "other_sources": "Other Sources"
        }
    },
    "es": {
        "scoutings": {
            "created_successfully": "El scouting fue creado satisfactoriamente",
            "updated_successfully": "El scouting fue actualizado satisfactoriamente",
            "deleted_succesfully": "El scouting fue eliminado satisfactoriamente",
            "not_found": "El scouting no existe",
            "name": "Nombre",
            "description": "Descripción",
            "championship": "Campeonato",
            "event": "Evento",
            "left_athlete": "Atleta de la izquierda",
            "right_athlete": "Atleta de la derecha",
            "video_src": "Fuente del video",
            "actions": "Acciones",
            "select_option": "Selecciona una opción",
            "update": "Actualizar",
            "new": "Nuevo Scouting",
            "delete_message": "¿Estas Seguro? esta acción no se puede deshacer",
            "delete_scouting": "Eliminar Scouting",
            "scouting_info": "Información del Scouting",
            "update_scouting": "Actualizar Scouting",
            "make": "Hacer Scouting",
            "start_touch": "Iniciar Toque",
            "end_touch": "Finalizar Toque",
            "toogle_timeline": "Toogle Timeline",
            "toogle_inspector": "Toogle Inspector",
            "inspector": "Inspector",
            "timeline": "Timeline",
            "end_action": "Finalizar Acción",
            "pause": "Pausar",
            "play": "Reproducir",
            "left_actions": "Acciones del Atleta de la izquierda",
            "right_actions": "Acciones del Atleta de la derecha",
            "title": "Titulo",
            "color": "Color",
            "start": "Inicio (seg)",
            "end": "Fin (seg)",
            "save": "Guardar Cambios",
            "cancel": "Cancelar Cambios",
            "touches_cant_overlap": "Los toques no pueden sobreponerse",
            "touch_overlap_with": "El toque que tratas de añadir se superpone con",
            "validation_error": "Error de Validación",
            "validation_end_greater": "El final del toque debe ser mayor al inicio",
            "touch_overlap_msg": "{title} que empieza en {start} y termina en {end}",
            "touches": "Toques",
            "start_at": "Inicia en {start}",
            "end_at": "Finaliza en {end}",
            "no_touches": "No hay toques registrados",
            "select": "Seleccionar Scoutings",
            "create": "Crear Scouting",
            "scoutings": "Scoutings",
            "making_report": "Procesando Reporte por favor espera",
            "report": "Ver Reporte",
            "error_report": "Ocurrio un error inesperado al procesar el reporte",
            "list": "Lista de Datos",
            "results": "Resultados",
            "app_mobile": "App Móvil",
            "other_sources": "Otras Fuentes"
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
        return _vue2.default.http.get('/api/scoutings/' + id + '?include=championship.sport,event,leftAthlete,rightAthlete,touches.actions.leftTags,touches.actions.rightTags').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    create: function create(scouting, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/scoutings', scouting).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    update: function update(id, scouting, successCalback, errorCallback) {
        return _vue2.default.http.put('/api/scoutings/' + id, scouting, { emulateHTTP: true }).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    },
    remove: function remove(id, successCalback, errorCallback) {
        return _vue2.default.http.delete('/api/scoutings/' + id).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    },
    report: function report(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/scoutings/' + id + '/report').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    latest: function latest(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/scoutings/latest').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _scoutings = __webpack_require__(227);

var _scoutings2 = _interopRequireDefault(_scoutings);

var _formDataParser = __webpack_require__(201);

var _formDataParser2 = _interopRequireDefault(_formDataParser);

var _select = __webpack_require__(202);

var _select2 = _interopRequireDefault(_select);

var _pageHeader = __webpack_require__(196);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _scoutingService = __webpack_require__(243);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        vSelect: _select2.default,
        adminHeader: _pageHeader2.default
    },
    mixins: [_formDataParser2.default],
    data: function data() {
        return {
            scouting: {
                video_src: '',
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
                href: '/scoutings/list',
                title: 'admin.scoutings'
            }, {
                href: '/scoutings/create',
                title: 'admin.new'
            }];
        }
    },

    locales: _scoutings2.default,
    methods: {
        onBack: function onBack(evt) {
            evt.preventDefault();
            this.$router.push({
                name: 'scoutings.list'
            });
        },
        onSubmit: function onSubmit(evt) {
            var _this = this;

            evt.preventDefault();
            var self = this;
            this.$validator.validateAll().then(function () {
                _this.scouting.translation.name.es = _this.scouting.translation.name.en;
                _this.scouting.translation.description.es = _this.scouting.translation.description.en;
                _scoutingService2.default.create(_this.scouting, function (response) {
                    self.$root.successToast(response.message);
                    self.$router.push({
                        name: 'scoutings.list'
                    });
                }, function (response) {
                    response = response.body;
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
//
//
//
//
//
//
//
//
//
//
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

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"create.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('admin-header', {
    attrs: {
      "title": _vm.$t('admin.scoutings'),
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [_c('form', {
    staticClass: "form",
    attrs: {
      "id": "scouting-form"
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
  }, [_vm._v(_vm._s(_vm.$t('scoutings.new')))])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.$t('scoutings.name')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.scouting.translation.name.en),
      expression: "scouting.translation.name.en"
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
      "placeholder": _vm.$t('scoutings.name'),
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('scoutings.name')
    },
    domProps: {
      "value": _vm._s(_vm.scouting.translation.name.en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.scouting.translation.name.en = $event.target.value
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
      'has-error': _vm.errors.has('video_src')
    }
  }, [_c('label', {
    attrs: {
      "for": "video_src",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('scoutings.video_src')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.scouting.video_src),
      expression: "scouting.video_src"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "video_src",
      "name": "video_src",
      "type": "text",
      "placeholder": _vm.$t('scoutings.video_src'),
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('scoutings.video_src')
    },
    domProps: {
      "value": _vm._s(_vm.scouting.video_src)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.scouting.video_src = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('video_src')),
      expression: "errors.has('video_src')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('video_src')) + "\n                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('translation.description.en')
    }
  }, [_c('label', {
    attrs: {
      "for": "descriptionen",
      "data-error": ""
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('scoutings.description')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(2), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.scouting.translation.description.en),
      expression: "scouting.translation.description.en"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "descriptionen",
      "rows": "4",
      "name": "descriptionen",
      "type": "text",
      "placeholder": _vm.$t('scoutings.description')
    },
    domProps: {
      "value": _vm._s(_vm.scouting.translation.description.en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.scouting.translation.description.en = $event.target.value
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
    staticClass: "fa fa-video-camera"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-list"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52c8fca4", module.exports)
  }
}

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(365);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("6c636868", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-52c8fca4!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-52c8fca4!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL2NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlKiIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/NTYwYyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNTZmKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT8zOGEzKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT80NDEyKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9mb3JtRGF0YVBhcnNlci5qcz8wYzM3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT9mNWI1Iiwid2VicGFjazovLy9zZWxlY3QudnVlP2EwMTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC5qcz9jMGQ0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanM/ZWFiNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzP2JlZDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2JiMTcqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT8yZDg3KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/Nzk2ZCoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanM/MDQ0ZCoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcz8zZDg1KiIsIndlYnBhY2s6Ly8vY3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL2NyZWF0ZS52dWU/MzJhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL2NyZWF0ZS52dWU/YjM4NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL2NyZWF0ZS52dWU/YjNlYyJdLCJuYW1lcyI6WyJtZXRob2RzIiwicGFyc2VPYmpGb3JtRGF0YSIsIm9iaiIsImZvcm1kYXRhIiwibmFtZXNwYWNlIiwiZmQiLCJmb3JtS2V5IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkZpbGUiLCJhcHBlbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvcHMiLCJsb2FkaW5nIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwib25TZWFyY2giLCJkZWJvdW5jZSIsIk51bWJlciIsIndhdGNoIiwic2VhcmNoIiwibGVuZ3RoIiwidG9nZ2xlTG9hZGluZyIsInRvZ2dsZSIsInR5cGVBaGVhZFBvaW50ZXIiLCJtYXliZUFkanVzdFNjcm9sbCIsInBpeGVsc1RvUG9pbnRlclRvcCIsInBpeGVsc1RvUG9pbnRlckJvdHRvbSIsInZpZXdwb3J0IiwidG9wIiwic2Nyb2xsVG8iLCJib3R0b20iLCJwb2ludGVySGVpZ2h0IiwiaSIsIiRyZWZzIiwiZHJvcGRvd25NZW51IiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50Iiwic2Nyb2xsVG9wIiwicG9zaXRpb24iLCJkYXRhIiwiZmlsdGVyZWRPcHRpb25zIiwidHlwZUFoZWFkVXAiLCJ0eXBlQWhlYWREb3duIiwidHlwZUFoZWFkU2VsZWN0Iiwic2VsZWN0IiwidGFnZ2FibGUiLCJjbGVhclNlYXJjaE9uU2VsZWN0Iiwic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwiY3JlYXRlIiwic2NvdXRpbmciLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJyZW1vdmUiLCJkZWxldGUiLCJyZXBvcnQiLCJsYXRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7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QSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3hOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvMi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNTJjOGZjYTQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01MmM4ZmNhNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jcmVhdGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL2NyZWF0ZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjcmVhdGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTUyYzhmY2E0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTJjOGZjYTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy9jcmVhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFnZUhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE4IDE5IiwiPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgICAge3t0aXRsZX19XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJicmVhZGNydW1iLmhyZWZcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiB0YWc9XCJsaVwiIHYtZm9yPVwiYnJlYWRjcnVtYiBpbiBicmVhZGNydW1ic1wiPlxuICAgICAgICAgICAgICAgIHt7JHQoYnJlYWRjcnVtYi50aXRsZSl9fVxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9vbD5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLmFkbWluLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogOTdweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYWdlSGVhZGVyLnZ1ZT81Mzc5ZjVjYiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFkbWluLWhlYWRlciB7XFxuICBoZWlnaHQ6IDk3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYWRtaW4taGVhZGVyIC5yb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTggMTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE4IDE5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJlOWZlYzFjMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTggMTkiLCJleHBvcnQgZGVmYXVsdHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHBhcnNlT2JqRm9ybURhdGEob2JqLCBmb3JtZGF0YSwgbmFtZXNwYWNlKSB7XG5cbiAgICAgICAgICAgIHZhciBmZCA9IGZvcm1kYXRhO1xuICAgICAgICAgICAgdmFyIGZvcm1LZXk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgb2JqW3Byb3BlcnR5XSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUtleSA9IG5hbWVzcGFjZSArICdbJyArIHByb3BlcnR5ICsgJ10nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUtleSA9IHByb3BlcnR5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFuIG9iamVjdCwgYnV0IG5vdCBhIEZpbGUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSByZWN1cnNpdml0eS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcGVydHldID09PSAnb2JqZWN0JyAmJiAhKG9ialtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJzZU9iakZvcm1EYXRhKG9ialtwcm9wZXJ0eV0sIGZkLCBmb3JtS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChmb3JtS2V5LCBvYmpbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyLmpzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LThkMzUxMDM0IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zZWxlY3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gc2VsZWN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04ZDM1MTAzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThkMzUxMDM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDcgOCA5IDEwIDEyIDEzIDE0IiwiPHN0eWxlPlxuICAgIC52LXNlbGVjdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDZweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuNSk7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XG4gICAgICAgIGJvdHRvbTogMXB4O1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5zZWFyY2hhYmxlIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICBjdXJzb3I6IHRleHQ7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgICAgIHdpZHRoOiAxMGVtO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGNsZWFyOiBub25lO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5hY3RpdmUgYSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLmhpZ2hsaWdodCBhLFxuICAgIC52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLnNwaW5uZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XG4gICAgICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcbiAgICB9XG5cbiAgICAudi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyLFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgaGVpZ2h0OiA1ZW07XG4gICAgfVxuXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gdi1zZWxlY3RcIiA6Y2xhc3M9XCJkcm9wZG93bkNsYXNzZXNcIj5cbiAgICAgICAgPGRpdiByZWY9XCJ0b2dnbGVcIiBAbW91c2Vkb3duLnByZXZlbnQ9XCJ0b2dnbGVEcm9wZG93blwiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtaWY9XCIhc2VhcmNoYWJsZSAmJiBpc1ZhbHVlRW1wdHlcIj5cbiAgICAgICAgICB7eyBwbGFjZWhvbGRlciB9fVxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VsZWN0ZWQtdGFnXCIgdi1mb3I9XCIob3B0aW9uLGluZGV4KSBpbiB2YWx1ZUFzQXJyYXlcIiB2LWJpbmQ6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVwibXVsdGlwbGVcIiBAY2xpY2s9XCJzZWxlY3Qob3B0aW9uKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICA6ZGVib3VuY2U9XCJkZWJvdW5jZVwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJzZWFyY2hhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZGVsZXRlPVwibWF5YmVEZWxldGVWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lc2M9XCJvbkVzY2FwZVwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLnVwLnByZXZlbnQ9XCJ0eXBlQWhlYWRVcFwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRvd24ucHJldmVudD1cInR5cGVBaGVhZERvd25cIlxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXIucHJldmVudD1cInR5cGVBaGVhZFNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIEBibHVyPVwib3BlbiA9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwib3BlbiA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJzZWFyY2hQbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IGlzVmFsdWVFbXB0eSA/ICcxMDAlJyA6ICdhdXRvJyB9XCJcbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgPGkgcmVmPVwib3BlbkluZGljYXRvclwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzcz1cIm9wZW4taW5kaWNhdG9yXCI+PC9pPlxuXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwic3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCIgdi1zaG93PVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHVsIHJlZj1cImRyb3Bkb3duTWVudVwiIHYtc2hvdz1cIm9wZW5cIiA6dHJhbnNpdGlvbj1cInRyYW5zaXRpb25cIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAnbWF4LWhlaWdodCc6IG1heEhlaWdodCB9XCI+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCIob3B0aW9uLGluZGV4KSBpbiBmaWx0ZXJlZE9wdGlvbnNcIiB2LWJpbmQ6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IHR5cGVBaGVhZFBvaW50ZXIgfVwiXG4gICAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cInR5cGVBaGVhZFBvaW50ZXIgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgIDxhIEBtb3VzZWRvd24ucHJldmVudD1cInNlbGVjdChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgIDxsaSB0cmFuc2l0aW9uPVwiZmFkZVwiIHYtaWY9XCIhZmlsdGVyZWRPcHRpb25zLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibm8tb3B0aW9uc1wiPlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLjwvc2xvdD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cbiAgICBpbXBvcnQgcG9pbnRlclNjcm9sbCBmcm9tICdiYXNlL21peGlucy9wb2ludGVyU2Nyb2xsJ1xuICAgIGltcG9ydCB0eXBlQWhlYWRQb2ludGVyIGZyb20gJ2Jhc2UvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXInXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnYmFzZS9taXhpbnMvYWpheCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWl4aW5zOiBbcG9pbnRlclNjcm9sbCwgdHlwZUFoZWFkUG9pbnRlciwgYWpheF0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29udGFpbnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB2YWx1ZS4gVmVyeSBzaW1pbGFyIHRvIGFcbiAgICAgICAgICAgICAqIGB2YWx1ZWAgYXR0cmlidXRlIG9uIGFuIDxpbnB1dD4uIEluIG1vc3QgY2FzZXMsIHlvdSdsbCB3YW50XG4gICAgICAgICAgICAgKiB0byBzZXQgdGhpcyBhcyBhIHR3by13YXkgYmluZGluZywgdXNpbmcgOnZhbHVlLnN5bmMuIEhvd2V2ZXIsXG4gICAgICAgICAgICAgKiB0aGlzIHdpbGwgbm90IHdvcmsgd2l0aCBWdWV4LCBpbiB3aGljaCBjYXNlIHlvdSdsbCBuZWVkIHRvIHVzZVxuICAgICAgICAgICAgICogdGhlIG9uQ2hhbmdlIGNhbGxiYWNrIHByb3BlcnR5LlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdHx8U3RyaW5nfHxudWxsfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHRvIGJlIHVzZWQgYXMgZHJvcGRvd24gY2hvaWNlcy5cbiAgICAgICAgICAgICAqIElmIHlvdSBhcmUgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdnVlLXNlbGVjdCB3aWxsIGxvb2sgZm9yXG4gICAgICAgICAgICAgKiBhIGBsYWJlbGAga2V5IChleC4gW3tsYWJlbDogJ1RoaXMgaXMgRm9vJywgdmFsdWU6ICdmb28nfV0pLiBBXG4gICAgICAgICAgICAgKiBjdXN0b20gbGFiZWwga2V5IGNhbiBiZSBzZXQgd2l0aCB0aGUgYGxhYmVsYCBwcm9wLlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldHMgdGhlIG1heC1oZWlnaHQgcHJvcGVydHkgb24gdGhlIGRyb3Bkb3duIGxpc3QuXG4gICAgICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgZmlsdGVyaW5nIHRoZSBvcHRpb25zLlxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlYXJjaGFibGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYG11bHRpcGxlYCBhdHRyaWJ1dGUgb24gYSBgPHNlbGVjdD5gIGlucHV0LlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbXVsdGlwbGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIG9uIGFuIGA8aW5wdXQ+YC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldHMgYSBWdWUgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiB0aGUgYC5kcm9wZG93bi1tZW51YC4gdnVlLXNlbGVjdFxuICAgICAgICAgICAgICogZG9lcyBub3QgaW5jbHVkZSBDU1MgZm9yIHRyYW5zaXRpb25zLCB5b3UnbGwgbmVlZCB0byBhZGQgdGhlbSB5b3Vyc2VsZi5cbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2V4cGFuZCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBjbGVhcmluZyB0aGUgc2VhcmNoIHRleHQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2xlYXJTZWFyY2hPblNlbGVjdDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUZWxscyB2dWUtc2VsZWN0IHdoYXQga2V5IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgb3B0aW9uXG4gICAgICAgICAgICAgKiBsYWJlbHMgd2hlbiBlYWNoIGBvcHRpb25gIGlzIGFuIG9iamVjdC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsYWJlbCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGJhY2sgdG8gZ2VuZXJhdGUgdGhlIGxhYmVsIHRleHQuIElmIHtvcHRpb259XG4gICAgICAgICAgICAgKiBpcyBhbiBvYmplY3QsIHJldHVybnMgb3B0aW9uW3RoaXMubGFiZWxdIGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0KG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsICYmIG9wdGlvblt0aGlzLmxhYmVsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bdGhpcy5sYWJlbF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIHRoZSBzZWxlY3RlZFxuICAgICAgICAgICAgICogdmFsdWUocykgY2hhbmdlLiBXaGVuIGludGVncmF0aW5nIHdpdGggVnVleCwgdXNlIHRoaXMgY2FsbGJhY2sgdG8gdHJpZ2dlclxuICAgICAgICAgICAgICogYW4gYWN0aW9uLCByYXRoZXIgdGhhbiB1c2luZyA6dmFsdWUuc3luYyB0byByZXRyZWl2ZSB0aGUgc2VsZWN0ZWQgdmFsdWUuXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCB7bnVsbH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25DaGFuZ2U6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY2hhbmdlUGFyYW06IHt9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGNyZWF0aW5nIG9wdGlvbnMgZnJvbSBzZWFyY2hJbnB1dC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0YWdnYWJsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2hlbiB0cnVlLCBuZXdseSBjcmVhdGVkIHRhZ3Mgd2lsbCBiZSBhZGRlZCB0b1xuICAgICAgICAgICAgICogdGhlIG9wdGlvbnMgbGlzdC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwdXNoVGFnczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlciBkZWZpbmVkIGZ1bmN0aW9uIGZvciBhZGRpbmcgT3B0aW9uc1xuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjcmVhdGVPcHRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtbdGhpcy5sYWJlbF06IG5ld09wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3T3B0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGVuIGZhbHNlLCB1cGRhdGluZyB0aGUgb3B0aW9ucyB3aWxsIG5vdCByZXNldCB0aGUgc2VsZWN0IHZhbHVlXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVzZXRPbk9wdGlvbnNDaGFuZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHZhbHVlKHZhbCwgb2xkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3Rpb24odmFsLCBvbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdmFsICE9PSBvbGQgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhZ2dhYmxlICYmIHRoaXMucmVzZXRPbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG11bHRpcGxlKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsID8gW10gOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdChvcHRpb24pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgIXRoaXMub3B0aW9uRXhpc3RzKG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuY3JlYXRlT3B0aW9uKG9wdGlvbilcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHVzaFRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW29wdGlvbl1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG9wdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2VsZWN0KG9wdGlvbilcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGUtc2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGVzZWxlY3Qob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IC0xXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gb3B0aW9uIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0aW9uLmluZGV4T2YocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgZnJvbSB0aGlzLnNlbGVjdCBhZnRlciBlYWNoIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uQWZ0ZXJTZWxlY3Qob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5vcGVuSW5kaWNhdG9yIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnNlYXJjaCB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy50b2dnbGUgfHwgZS50YXJnZXQgPT09IHRoaXMuJGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKSAvLyBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGJsdXJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIG9wdGlvbiBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gIG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICBUcnVlIHdoZW4gc2VsZWN0ZWQgfHwgRmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uID09PSBvcHRpb25cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgdGhlcmUgaXMgYW55IHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICogT3RoZXJ3aXNlLCBibHVyIHRoZSBzZWFyY2ggaW5wdXQgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uRXNjYXBlKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlbGV0ZSB0aGUgdmFsdWUgb24gRGVsZXRlIGtleXByZXNzIHdoZW4gdGhlcmUgaXMgbm9cbiAgICAgICAgICAgICAqIHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgJiB0aGVyZSdzIHRhZ3MgdG8gZGVsZXRlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzLnZhbHVlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtYXliZURlbGV0ZVZhbHVlKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUubGVuZ3RoICYmIHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLnZhbHVlLnBvcCgpIDogdGhpcy5zZWxlY3Rpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgYW4gb3B0aW9uIGV4aXN0c1xuICAgICAgICAgICAgICogd2l0aGluIHRoaXMub3B0aW9ucyBhcnJheS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9wdGlvbkV4aXN0cyhvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0c1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2xhc3NlcyB0byBiZSBvdXRwdXQgb24gLmRyb3Bkb3duXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRoaXMuc2VhcmNoYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdGhpcy5sb2FkaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIHBsYWNlaG9sZGVyIHN0cmluZyBpZiBpdCdzIHNldFxuICAgICAgICAgICAgICogJiB0aGVyZSBpcyBubyB2YWx1ZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gUGxhY2Vob2xkZXIgdGV4dFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRW1wdHkgJiYgdGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG9wdGlvbnMsIGZpbHRlcmVkXG4gICAgICAgICAgICAgKiBieSB0aGUgc2VhcmNoIGVsZW1lbnRzIHZhbHVlLiBJZiB0YWdnaW5nXG4gICAgICAgICAgICAgKiB0cnVlLCB0aGUgc2VhcmNoIHRleHQgd2lsbCBiZSBwcmVwZW5kZWRcbiAgICAgICAgICAgICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3NlbGYubGFiZWxdLmluZGV4T2Yoc2VsZi5zZWFyY2gpICE9PSAtMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoICYmICF0aGlzLm9wdGlvbkV4aXN0cyh0aGlzLnNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHRoaXMuc2VhcmNoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uc1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmVuJ3QgYW55IG9wdGlvbnMgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpc1ZhbHVlRW1wdHkoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuc2VsZWN0aW9uKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuc2VsZWN0aW9uLmxlbmd0aFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgaW4gYXJyYXkgZm9ybWF0LlxuICAgICAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhbHVlQXNBcnJheSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5zZWxlY3Rpb25dXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlbGVjdC52dWU/NDZhOTg4YTQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0cHJvcHM6IHtcblx0XHQvKipcblx0XHQgKiBUb2dnbGVzIHRoZSBhZGRpbmcgb2YgYSAnbG9hZGluZycgY2xhc3MgdG8gdGhlIG1haW5cblx0XHQgKiAudi1zZWxlY3Qgd3JhcHBlci4gVXNlZnVsIHRvIGNvbnRyb2wgVUkgc3RhdGUgd2hlblxuXHRcdCAqIHJlc3VsdHMgYXJlIGJlaW5nIHByb2Nlc3NlZCB0aHJvdWdoIEFKQVguXG5cdFx0ICovXG5cdFx0bG9hZGluZzoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEFjY2VwdCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZVxuXHRcdCAqIHJ1biB3aGVuIHRoZSBzZWFyY2ggdGV4dCBjaGFuZ2VzLlxuXHRcdCAqXG5cdFx0ICogbG9hZGluZygpIGFjY2VwdHMgYSBib29sZWFuIHZhbHVlLCBhbmQgY2FuXG5cdFx0ICogYmUgdXNlZCB0byB0b2dnbGUgYSBsb2FkaW5nIGNsYXNzIGZyb21cblx0XHQgKiB0aGUgb25TZWFyY2ggY2FsbGJhY2suXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3NlYXJjaH0gIFN0cmluZyAgICAgICAgICBDdXJyZW50IHNlYXJjaCB0ZXh0XG5cdFx0ICogQHBhcmFtIHtsb2FkaW5nfSBGdW5jdGlvbihib29sKSAgVG9nZ2xlIGxvYWRpbmcgY2xhc3Ncblx0XHQgKi9cblx0XHRvblNlYXJjaDoge1xuXG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG5cdFx0ICogaW52b2tpbmcgdGhpcy5vblNlYXJjaCgpLiBVc2VkIHRvIHByZXZlbnRcblx0XHQgKiBzZW5kaW5nIGFuIEFKQVggcmVxdWVzdCB1bnRpbCBpbnB1dCBpcyBjb21wbGV0ZS5cblx0XHQgKi9cblx0XHRkZWJvdW5jZToge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogMFxuXHRcdH1cblx0fSxcblxuXHR3YXRjaDoge1xuXHRcdC8qKlxuXHRcdCAqIElmIGEgY2FsbGJhY2sgJiBzZWFyY2ggdGV4dCBoYXMgYmVlbiBwcm92aWRlZCxcblx0XHQgKiBpbnZva2UgdGhlIG9uU2VhcmNoIGNhbGxiYWNrLlxuXHRcdCAqL1xuXHRcdHNlYXJjaCgpIHtcblx0XHRcdGlmICh0aGlzLnNlYXJjaC5sZW5ndGggPiAwICYmIHRoaXMub25TZWFyY2gpIHtcblx0XHRcdFx0dGhpcy5vblNlYXJjaCh0aGlzLnNlYXJjaCwgdGhpcy50b2dnbGVMb2FkaW5nKVxuXHRcdFx0fVxuXHRcdH0sXG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdC8qKlxuXHRcdCAqIFRvZ2dsZSB0aGlzLmxvYWRpbmcuIE9wdGlvbmFsbHkgcGFzcyBhIGJvb2xlYW5cblx0XHQgKiB2YWx1ZS4gSWYgbm8gdmFsdWUgaXMgcHJvdmlkZWQsIHRoaXMubG9hZGluZ1xuXHRcdCAqIHdpbGwgYmUgc2V0IHRvIHRoZSBvcHBvc2l0ZSBvZiBpdCdzIGN1cnJlbnQgdmFsdWUuXG5cdFx0ICogQHBhcmFtIHRvZ2dsZSBCb29sZWFuXG5cdFx0ICogQHJldHVybnMgeyp9XG5cdFx0ICovXG5cdFx0dG9nZ2xlTG9hZGluZyh0b2dnbGUgPSBudWxsKSB7XG5cdFx0XHRpZiAodG9nZ2xlID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmdcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmxvYWRpbmcgPSB0b2dnbGVcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdhdGNoOiB7XG4gICAgdHlwZUFoZWFkUG9pbnRlcigpIHtcbiAgICAgIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0IHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duIGxpc3RcbiAgICAgKiBpZiB0aGUgY3VycmVudCBwb2ludGVyIGlzIG91dHNpZGUgb2YgdGhlXG4gICAgICogb3ZlcmZsb3cgYm91bmRzLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1heWJlQWRqdXN0U2Nyb2xsKCkge1xuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IHRoaXMucGl4ZWxzVG9Qb2ludGVyVG9wKClcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJCb3R0b20gPSB0aGlzLnBpeGVsc1RvUG9pbnRlckJvdHRvbSgpXG5cbiAgICAgIGlmICggcGl4ZWxzVG9Qb2ludGVyVG9wIDw9IHRoaXMudmlld3BvcnQoKS50b3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8oIHBpeGVsc1RvUG9pbnRlclRvcCApXG4gICAgICB9IGVsc2UgaWYgKHBpeGVsc1RvUG9pbnRlckJvdHRvbSA+PSB0aGlzLnZpZXdwb3J0KCkuYm90dG9tKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKCB0aGlzLnZpZXdwb3J0KCkudG9wICsgdGhpcy5wb2ludGVySGVpZ2h0KCkgKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIHRvcCBvZiB0aGUgZHJvcGRvd25cbiAgICAgKiBsaXN0IHRvIHRoZSB0b3Agb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcGl4ZWxzVG9Qb2ludGVyVG9wKCkge1xuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQWhlYWRQb2ludGVyOyBpKyspIHtcbiAgICAgICAgcGl4ZWxzVG9Qb2ludGVyVG9wICs9IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LmNoaWxkcmVuW2ldLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgICAgcmV0dXJuIHBpeGVsc1RvUG9pbnRlclRvcFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIHRvcCBvZiB0aGUgZHJvcGRvd25cbiAgICAgKiBsaXN0IHRvIHRoZSBib3R0b20gb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBpeGVsc1RvUG9pbnRlckJvdHRvbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBpeGVsc1RvUG9pbnRlclRvcCgpICsgdGhpcy5wb2ludGVySGVpZ2h0KClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9mZnNldEhlaWdodCBvZiB0aGUgY3VycmVudCBwb2ludGVyIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwb2ludGVySGVpZ2h0KCkge1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlblt0aGlzLnR5cGVBaGVhZFBvaW50ZXJdXG4gICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHZpZXdhYmxlIHBvcnRpb24gb2YgdGhlIGRyb3Bkb3duTWVudS5cbiAgICAgKiBAcmV0dXJucyB7e3RvcDogKHN0cmluZ3wqfG51bWJlciksIGJvdHRvbTogKn19XG4gICAgICovXG4gICAgdmlld3BvcnQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tOiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5vZmZzZXRIZWlnaHQgKyB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3BcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRoZSBkcm9wZG93bk1lbnUgdG8gYSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCA9IHBvc2l0aW9uXG4gICAgfSxcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZUFoZWFkUG9pbnRlcjogLTFcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPSAwXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IHVwIHRoZSBsaXN0IGJ5XG4gICAgICogc3VidHJhY3RpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHlwZUFoZWFkVXAoKSB7XG4gICAgICBpZiAodGhpcy50eXBlQWhlYWRQb2ludGVyID4gMCkge1xuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXItLVxuICAgICAgICBpZiggdGhpcy5tYXliZUFkanVzdFNjcm9sbCApIHtcbiAgICAgICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IGRvd24gdGhlIGxpc3QgYnlcbiAgICAgKiBhZGRpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHlwZUFoZWFkRG93bigpIHtcbiAgICAgIGlmICh0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlcisrXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xuICAgICAgICAgIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgb3B0aW9uIGF0IHRoZSBjdXJyZW50IHR5cGVBaGVhZFBvaW50ZXIgcG9zaXRpb24uXG4gICAgICogT3B0aW9uYWxseSBjbGVhciB0aGUgc2VhcmNoIGlucHV0IG9uIHNlbGVjdGlvbi5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHR5cGVBaGVhZFNlbGVjdCgpIHtcbiAgICAgIGlmKCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGgpe1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlYXJjaClcbiAgICAgIH1cblxuICAgICAgaWYoIHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCApIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogNnB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxufVxcbi52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG59XFxuLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgYm90dG9tOiAxcHg7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG59XFxuLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuMjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi52LXNlbGVjdC5zZWFyY2hhYmxlIC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBjdXJzb3I6IHRleHQ7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLnYtc2VsZWN0ID4gLmRyb3Bkb3duLW1lbnUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4udi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XFxuICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcbn1cXG4udi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF0sXFxuLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgLjVlbTtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgY2xlYXI6IG5vbmU7XFxufVxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi52LXNlbGVjdCBsaSBhIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1zZWxlY3QgLmFjdGl2ZSBhIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAuMSk7XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG4udi1zZWxlY3QgLmhpZ2hsaWdodCBhLFxcbi52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuLnYtc2VsZWN0IC5zcGlubmVyIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXRvcDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICBib3JkZXItbGVmdDogLjllbSBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC40NSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbn1cXG4udi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi52LXNlbGVjdCAuc3Bpbm5lcixcXG4udi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGhlaWdodDogNWVtO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbjAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbjAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlPzQ2YTk4OGE0XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSx3RUFBQTtJQUFBLGdFQUFBO0lBQ0EsOEVBQUE7WUFBQSxzRUFBQTtJQUNBLFdBQUE7SUFDQSxnQ0FBQTtJQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7Q0FDQTtBQUVBO0lBQ0EsbUNBQUE7SUFDQSxvQkFBQTtJQUNBLGdDQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7SUFDQSx3RUFBQTtJQUFBLGdFQUFBO0lBQ0EsOEVBQUE7WUFBQSxzRUFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLHdDQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtDQUNBO0FBRUE7SUFDQSxhQUFBO0NBQ0E7QUFFQTtJQUNBLG9CQUFBO0lBQ0EsNkJBQUE7SUFDQSw4QkFBQTtDQUNBO0FBRUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSwwQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7O0lBRUEsc0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGlDQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7O0lBRUEsb0JBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0lBQ0Esa0RBQUE7SUFDQSw4Q0FBQTtJQUNBLGlDQUFBO1lBQUEseUJBQUE7SUFDQSx1REFBQTtZQUFBLCtDQUFBO0lBQ0EsZ0NBQUE7SUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTs7SUFFQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtBQUNBO1FBQ0EsZ0NBQUE7Z0JBQUEsd0JBQUE7Q0FDQTtBQUNBO1FBQ0Esa0NBQUE7Z0JBQUEsMEJBQUE7Q0FDQTtDQUNBO0FBRUE7QUFDQTtRQUNBLGdDQUFBO2dCQUFBLHdCQUFBO0NBQ0E7QUFDQTtRQUNBLGtDQUFBO2dCQUFBLDBCQUFBO0NBQ0E7Q0FDQVwiLFwiZmlsZVwiOlwic2VsZWN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8c3R5bGU+XFxuICAgIC52LXNlbGVjdCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDZweDtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjUpO1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgICAgIGJvdHRvbTogMXB4O1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuMjYpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0ID4gLmRyb3Bkb3duLW1lbnUge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIHtcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgICBtYXJnaW46IDRweCAxcHggMHB4IDNweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS43ZW07XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF0sXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcXG4gICAgICAgIHdpZHRoOiAxMGVtO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIGNsZWFyOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCBsaSBhIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLmFjdGl2ZSBhIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xcbiAgICAgICAgY29sb3I6ICMzMzM7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcXG4gICAgLnYtc2VsZWN0IGxpOmhvdmVyID4gYSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgICAgY29sb3I6ICMzMzM7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDVweDtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XFxuICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgIGFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcixcXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHdpZHRoOiA1ZW07XFxuICAgICAgICBoZWlnaHQ6IDVlbTtcXG4gICAgfVxcblxcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbiAgICAgICAgMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG48L3N0eWxlPlxcblxcbjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gdi1zZWxlY3RcXFwiIDpjbGFzcz1cXFwiZHJvcGRvd25DbGFzc2VzXFxcIj5cXG4gICAgICAgIDxkaXYgcmVmPVxcXCJ0b2dnbGVcXFwiIEBtb3VzZWRvd24ucHJldmVudD1cXFwidG9nZ2xlRHJvcGRvd25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB2LWlmPVxcXCIhc2VhcmNoYWJsZSAmJiBpc1ZhbHVlRW1wdHlcXFwiPlxcbiAgICAgICAgICB7eyBwbGFjZWhvbGRlciB9fVxcbiAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZWxlY3RlZC10YWdcXFwiIHYtZm9yPVxcXCIob3B0aW9uLGluZGV4KSBpbiB2YWx1ZUFzQXJyYXlcXFwiIHYtYmluZDprZXk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxcbiAgICAgICAgICA8YnV0dG9uIHYtaWY9XFxcIm11bHRpcGxlXFxcIiBAY2xpY2s9XFxcInNlbGVjdChvcHRpb24pXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPiZ0aW1lczs8L3NwYW4+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9zcGFuPlxcblxcbiAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZGVib3VuY2U9XFxcImRlYm91bmNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1zaG93PVxcXCJzZWFyY2hhYmxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZGVsZXRlPVxcXCJtYXliZURlbGV0ZVZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVzYz1cXFwib25Fc2NhcGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi51cC5wcmV2ZW50PVxcXCJ0eXBlQWhlYWRVcFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRvd24ucHJldmVudD1cXFwidHlwZUFoZWFkRG93blxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlci5wcmV2ZW50PVxcXCJ0eXBlQWhlYWRTZWxlY3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAYmx1cj1cXFwib3BlbiA9IGZhbHNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVxcXCJvcGVuID0gdHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XFxcInNlYXJjaFBsYWNlaG9sZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7IHdpZHRoOiBpc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bycgfVxcXCJcXG4gICAgICAgICAgICA+XFxuXFxuICAgICAgICAgICAgPGkgcmVmPVxcXCJvcGVuSW5kaWNhdG9yXFxcIiByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGNsYXNzPVxcXCJvcGVuLWluZGljYXRvclxcXCI+PC9pPlxcblxcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcInNwaW5uZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGlubmVyXFxcIiB2LXNob3c9XFxcImxvYWRpbmdcXFwiPkxvYWRpbmcuLi48L2Rpdj5cXG4gICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDx1bCByZWY9XFxcImRyb3Bkb3duTWVudVxcXCIgdi1zaG93PVxcXCJvcGVuXFxcIiA6dHJhbnNpdGlvbj1cXFwidHJhbnNpdGlvblxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiXFxuICAgICAgICAgICAgOnN0eWxlPVxcXCJ7ICdtYXgtaGVpZ2h0JzogbWF4SGVpZ2h0IH1cXFwiPlxcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiKG9wdGlvbixpbmRleCkgaW4gZmlsdGVyZWRPcHRpb25zXFxcIiB2LWJpbmQ6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7IGFjdGl2ZTogaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSB0eXBlQWhlYWRQb2ludGVyIH1cXFwiXFxuICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XFxcInR5cGVBaGVhZFBvaW50ZXIgPSBpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIEBtb3VzZWRvd24ucHJldmVudD1cXFwic2VsZWN0KG9wdGlvbilcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cXFwiZmFkZVxcXCIgdi1pZj1cXFwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJkaXZpZGVyXFxcIj48L2xpPlxcbiAgICAgICAgICAgIDxsaSB0cmFuc2l0aW9uPVxcXCJmYWRlXFxcIiB2LWlmPVxcXCIhZmlsdGVyZWRPcHRpb25zLmxlbmd0aFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwibm8tb3B0aW9uc1xcXCI+U29ycnksIG5vIG1hdGNoaW5nIG9wdGlvbnMuPC9zbG90PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcblxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9iYWJlbFxcXCI+XFxuICAgIGltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJ2Jhc2UvbWl4aW5zL3BvaW50ZXJTY3JvbGwnXFxuICAgIGltcG9ydCB0eXBlQWhlYWRQb2ludGVyIGZyb20gJ2Jhc2UvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXInXFxuICAgIGltcG9ydCBhamF4IGZyb20gJ2Jhc2UvbWl4aW5zL2FqYXgnXFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG1peGluczogW3BvaW50ZXJTY3JvbGwsIHR5cGVBaGVhZFBvaW50ZXIsIGFqYXhdLFxcblxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHZhbHVlLiBWZXJ5IHNpbWlsYXIgdG8gYVxcbiAgICAgICAgICAgICAqIGB2YWx1ZWAgYXR0cmlidXRlIG9uIGFuIDxpbnB1dD4uIEluIG1vc3QgY2FzZXMsIHlvdSdsbCB3YW50XFxuICAgICAgICAgICAgICogdG8gc2V0IHRoaXMgYXMgYSB0d28td2F5IGJpbmRpbmcsIHVzaW5nIDp2YWx1ZS5zeW5jLiBIb3dldmVyLFxcbiAgICAgICAgICAgICAqIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFZ1ZXgsIGluIHdoaWNoIGNhc2UgeW91J2xsIG5lZWQgdG8gdXNlXFxuICAgICAgICAgICAgICogdGhlIG9uQ2hhbmdlIGNhbGxiYWNrIHByb3BlcnR5LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R8fFN0cmluZ3x8bnVsbH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB2YWx1ZToge1xcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgdG8gYmUgdXNlZCBhcyBkcm9wZG93biBjaG9pY2VzLlxcbiAgICAgICAgICAgICAqIElmIHlvdSBhcmUgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdnVlLXNlbGVjdCB3aWxsIGxvb2sgZm9yXFxuICAgICAgICAgICAgICogYSBgbGFiZWxgIGtleSAoZXguIFt7bGFiZWw6ICdUaGlzIGlzIEZvbycsIHZhbHVlOiAnZm9vJ31dKS4gQVxcbiAgICAgICAgICAgICAqIGN1c3RvbSBsYWJlbCBrZXkgY2FuIGJlIHNldCB3aXRoIHRoZSBgbGFiZWxgIHByb3AuXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvcHRpb25zOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBTZXRzIHRoZSBtYXgtaGVpZ2h0IHByb3BlcnR5IG9uIHRoZSBkcm9wZG93biBsaXN0LlxcbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnNDAwcHgnXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBmaWx0ZXJpbmcgdGhlIG9wdGlvbnMuXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgc2VhcmNoYWJsZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiBhIGA8c2VsZWN0PmAgaW5wdXQuXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBtdWx0aXBsZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgb24gYW4gYDxpbnB1dD5gLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJ1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogU2V0cyBhIFZ1ZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHRoZSBgLmRyb3Bkb3duLW1lbnVgLiB2dWUtc2VsZWN0XFxuICAgICAgICAgICAgICogZG9lcyBub3QgaW5jbHVkZSBDU1MgZm9yIHRyYW5zaXRpb25zLCB5b3UnbGwgbmVlZCB0byBhZGQgdGhlbSB5b3Vyc2VsZi5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZXhwYW5kJ1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBjbGVhcmluZyB0aGUgc2VhcmNoIHRleHQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgY2xlYXJTZWFyY2hPblNlbGVjdDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBUZWxscyB2dWUtc2VsZWN0IHdoYXQga2V5IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgb3B0aW9uXFxuICAgICAgICAgICAgICogbGFiZWxzIHdoZW4gZWFjaCBgb3B0aW9uYCBpcyBhbiBvYmplY3QuXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBsYWJlbDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsYWJlbCdcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENhbGxiYWNrIHRvIGdlbmVyYXRlIHRoZSBsYWJlbCB0ZXh0LiBJZiB7b3B0aW9ufVxcbiAgICAgICAgICAgICAqIGlzIGFuIG9iamVjdCwgcmV0dXJucyBvcHRpb25bdGhpcy5sYWJlbF0gYnkgZGVmYXVsdC5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbCAmJiBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvblt0aGlzLmxhYmVsXVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGVhY2ggdGltZSB0aGUgc2VsZWN0ZWRcXG4gICAgICAgICAgICAgKiB2YWx1ZShzKSBjaGFuZ2UuIFdoZW4gaW50ZWdyYXRpbmcgd2l0aCBWdWV4LCB1c2UgdGhpcyBjYWxsYmFjayB0byB0cmlnZ2VyXFxuICAgICAgICAgICAgICogYW4gYWN0aW9uLCByYXRoZXIgdGhhbiB1c2luZyA6dmFsdWUuc3luYyB0byByZXRyZWl2ZSB0aGUgc2VsZWN0ZWQgdmFsdWUuXFxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHtudWxsfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICBjaGFuZ2VQYXJhbToge30sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgY3JlYXRpbmcgb3B0aW9ucyBmcm9tIHNlYXJjaElucHV0LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHRhZ2dhYmxlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBXaGVuIHRydWUsIG5ld2x5IGNyZWF0ZWQgdGFncyB3aWxsIGJlIGFkZGVkIHRvXFxuICAgICAgICAgICAgICogdGhlIG9wdGlvbnMgbGlzdC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBwdXNoVGFnczoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogVXNlciBkZWZpbmVkIGZ1bmN0aW9uIGZvciBhZGRpbmcgT3B0aW9uc1xcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBjcmVhdGVPcHRpb246IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zWzBdID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7W3RoaXMubGFiZWxdOiBuZXdPcHRpb259XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3T3B0aW9uXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFdoZW4gZmFsc2UsIHVwZGF0aW5nIHRoZSBvcHRpb25zIHdpbGwgbm90IHJlc2V0IHRoZSBzZWxlY3QgdmFsdWVcXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcblxcbiAgICAgICAgZGF0YSgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBzZWFyY2g6ICcnLFxcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgdmFsdWUodmFsLCBvbGQpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHNlbGVjdGlvbih2YWwsIG9sZCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA/IHRoaXMub25DaGFuZ2UodmFsLCB0aGlzLmNoYW5nZVBhcmFtKSA6IG51bGxcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdmFsICE9PSBvbGQgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9wdGlvbnMoKSB7XFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy50YWdnYWJsZSAmJiB0aGlzLnJlc2V0T25PcHRpb25zQ2hhbmdlKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgbXVsdGlwbGUodmFsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsID8gW10gOiBudWxsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIG1ldGhvZHM6IHtcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBTZWxlY3QgYSBnaXZlbiBvcHRpb24uXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgc2VsZWN0KG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3Qob3B0aW9uKVxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgIXRoaXMub3B0aW9uRXhpc3RzKG9wdGlvbikpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSB0aGlzLmNyZWF0ZU9wdGlvbihvcHRpb24pXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHVzaFRhZ3MpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtvcHRpb25dXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChvcHRpb24pXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG9wdGlvblxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMub25BZnRlclNlbGVjdChvcHRpb24pXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBEZS1zZWxlY3QgYSBnaXZlbiBvcHRpb24uXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZGVzZWxlY3Qob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gLTFcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmZvckVhY2goKHZhbCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IG9wdGlvbiB8fCB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWxbdGhpcy5sYWJlbF0gPT09IG9wdGlvblt0aGlzLmxhYmVsXSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB2YWxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihyZWYpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKVxcblxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENhbGxlZCBmcm9tIHRoaXMuc2VsZWN0IGFmdGVyIGVhY2ggc2VsZWN0aW9uLlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG9uQWZ0ZXJTZWxlY3Qob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlblxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJ1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXFxuICAgICAgICAgICAgICogQHBhcmFtICB7RXZlbnR9IGVcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHRvZ2dsZURyb3Bkb3duKGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLm9wZW5JbmRpY2F0b3IgfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMuc2VhcmNoIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnRvZ2dsZSB8fCBlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKCkgLy8gZHJvcGRvd24gd2lsbCBjbG9zZSBvbiBibHVyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5mb2N1cygpXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZSBnaXZlbiBvcHRpb24gaXMgY3VycmVudGx5IHNlbGVjdGVkLlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSAgb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICBUcnVlIHdoZW4gc2VsZWN0ZWQgfHwgRmFsc2Ugb3RoZXJ3aXNlXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3Rpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2gob3B0ID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uID09PSBvcHRpb25cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIElmIHRoZXJlIGlzIGFueSB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsIHJlbW92ZSBpdC5cXG4gICAgICAgICAgICAgKiBPdGhlcndpc2UsIGJsdXIgdGhlIHNlYXJjaCBpbnB1dCB0byBjbG9zZSB0aGUgZHJvcGRvd24uXFxuICAgICAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgb25Fc2NhcGUoKSB7XFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2gubGVuZ3RoKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKClcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGVsZXRlIHRoZSB2YWx1ZSBvbiBEZWxldGUga2V5cHJlc3Mgd2hlbiB0aGVyZSBpcyBub1xcbiAgICAgICAgICAgICAqIHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgJiB0aGVyZSdzIHRhZ3MgdG8gZGVsZXRlXFxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpcy52YWx1ZX1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBtYXliZURlbGV0ZVZhbHVlKCkge1xcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJHJlZnMuc2VhcmNoLnZhbHVlLmxlbmd0aCAmJiB0aGlzLnZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUucG9wKCkgOiB0aGlzLnNlbGVjdGlvbiA9IG51bGxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGV0ZXJtaW5lIGlmIGFuIG9wdGlvbiBleGlzdHNcXG4gICAgICAgICAgICAgKiB3aXRoaW4gdGhpcy5vcHRpb25zIGFycmF5LlxcbiAgICAgICAgICAgICAqXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvcHRpb25FeGlzdHMob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0c1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBjb21wdXRlZDoge1xcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENsYXNzZXMgdG8gYmUgb3V0cHV0IG9uIC5kcm9wZG93blxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBkcm9wZG93bkNsYXNzZXMoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0aGlzLnNlYXJjaGFibGUsXFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmdcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBwbGFjZWhvbGRlciBzdHJpbmcgaWYgaXQncyBzZXRcXG4gICAgICAgICAgICAgKiAmIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gUGxhY2Vob2xkZXIgdGV4dFxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRW1wdHkgJiYgdGhpcy5wbGFjZWhvbGRlcikge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG9wdGlvbnMsIGZpbHRlcmVkXFxuICAgICAgICAgICAgICogYnkgdGhlIHNlYXJjaCBlbGVtZW50cyB2YWx1ZS4gSWYgdGFnZ2luZ1xcbiAgICAgICAgICAgICAqIHRydWUsIHRoZSBzZWFyY2ggdGV4dCB3aWxsIGJlIHByZXBlbmRlZFxcbiAgICAgICAgICAgICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC5cXG4gICAgICAgICAgICAgKlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2FycmF5fVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGZpbHRlcmVkT3B0aW9ucygpIHtcXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbltzZWxmLmxhYmVsXS5pbmRleE9mKHNlbGYuc2VhcmNoKSAhPT0gLTFcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoICYmICF0aGlzLm9wdGlvbkV4aXN0cyh0aGlzLnNlYXJjaCkpIHtcXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudW5zaGlmdCh0aGlzLnNlYXJjaClcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uc1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlcmUgYXJlbid0IGFueSBvcHRpb25zIHNlbGVjdGVkLlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgaXNWYWx1ZUVtcHR5KCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb24gPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGlvbikubGVuZ3RoXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuc2VsZWN0aW9uLmxlbmd0aFxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGluIGFycmF5IGZvcm1hdC5cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB2YWx1ZUFzQXJyYXkoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25cXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGlvbl1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgIH1cXG48L3NjcmlwdD5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNyA4IDkgMTAgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93biB2LXNlbGVjdFwiLFxuICAgIGNsYXNzOiBfdm0uZHJvcGRvd25DbGFzc2VzXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHJlZjogXCJ0b2dnbGVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlZG93blwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50b2dnbGVEcm9wZG93bigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKCFfdm0uc2VhcmNoYWJsZSAmJiBfdm0uaXNWYWx1ZUVtcHR5KSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0ucGxhY2Vob2xkZXIpICsgXCJcXG4gICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0udmFsdWVBc0FycmF5KSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnc3BhbicsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC10YWdcIlxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgIFwiKSwgKF92bS5tdWx0aXBsZSkgPyBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2VsZWN0KG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiw5dcIildKV0pIDogX3ZtLl9lKCldKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaCksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoYWJsZSksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaGFibGVcIlxuICAgIH1dLFxuICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0uaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGVib3VuY2VcIjogX3ZtLmRlYm91bmNlLFxuICAgICAgXCJ0eXBlXCI6IFwic2VhcmNoXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS5zZWFyY2hQbGFjZWhvbGRlclxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zZWFyY2gpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXlkb3duXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkZWxldGVcIiwgWzgsIDQ2XSkpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5tYXliZURlbGV0ZVZhbHVlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInVwXCIsIDM4KSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRVcCgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWREb3duKCRldmVudClcbiAgICAgIH1dLFxuICAgICAgXCJrZXl1cFwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZXNjXCIsIDI3KSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm9uRXNjYXBlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRTZWxlY3QoJGV2ZW50KVxuICAgICAgfV0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBcImZvY3VzXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbiA9IHRydWVcbiAgICAgIH0sXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgcmVmOiBcIm9wZW5JbmRpY2F0b3JcIixcbiAgICBzdGF0aWNDbGFzczogXCJvcGVuLWluZGljYXRvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJwcmVzZW50YXRpb25cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fdChcInNwaW5uZXJcIiwgW19jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvYWRpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ub3BlbiksXG4gICAgICBleHByZXNzaW9uOiBcIm9wZW5cIlxuICAgIH1dLFxuICAgIHJlZjogXCJkcm9wZG93bk1lbnVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICAnbWF4LWhlaWdodCc6IF92bS5tYXhIZWlnaHRcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IF92bS50cmFuc2l0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl9sKChfdm0uZmlsdGVyZWRPcHRpb25zKSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnbGknLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgYWN0aXZlOiBfdm0uaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSBfdm0udHlwZUFoZWFkUG9pbnRlclxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2VvdmVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS50eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5zZWxlY3Qob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV0pXSlcbiAgfSksIF92bS5fdihcIiBcIiksICghX3ZtLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgpID8gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSA/IF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogXCJmYWRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJuby1vcHRpb25zXCIsIFtfdm0uX3YoXCJTb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy5cIildKV0sIDIpIDogX3ZtLl9lKCldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThkMzUxMDM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNyA4IDkgMTAgMTIgMTMgMTQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImI1OWNiOWQwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNyA4IDkgMTAgMTIgMTMgMTQiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwic2NvdXRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgU2NvdXRpbmcgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIFNjb3V0aW5nIHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiVGhlIFNjb3V0aW5nIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJUaGUgU2NvdXRpbmcgZG9lc24ndCBleGlzdFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcFwiOiBcIkNoYW1waW9uc2hpcFwiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIkV2ZW50XCIsXG4gICAgICAgICAgICBcImxlZnRfYXRobGV0ZVwiOiBcIkxlZnQgQXRobGV0ZVwiLFxuICAgICAgICAgICAgXCJyaWdodF9hdGhsZXRlXCI6IFwiUmlnaHQgQXRobGV0ZVwiLFxuICAgICAgICAgICAgXCJ2aWRlb19zcmNcIjogXCJWaWRlbyBTb3VyY2VcIixcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjdCBhbiBvcHRpb25cIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiVXBkYXRlXCIsXG4gICAgICAgICAgICBcIm5ld1wiOiBcIk5ldyBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIkFyZSB5b3Ugc3VyZT8gdGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZVwiLFxuICAgICAgICAgICAgXCJkZWxldGVfc2NvdXRpbmdcIjogXCJEZWxldGUgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdfaW5mb1wiOiBcIlNjb3V0aW5nIEluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBcInVwZGF0ZV9zY291dGluZ1wiOiBcIlVwZGF0ZSBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJtYWtlXCI6IFwiTWFrZSBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzdGFydF90b3VjaFwiOiBcIlN0YXJ0IFRvdWNoXCIsXG4gICAgICAgICAgICBcImVuZF90b3VjaFwiOiBcIkVuZCBUb3VjaFwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfdGltZWxpbmVcIjogXCJUb29nbGUgVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwidG9vZ2xlX2luc3BlY3RvclwiOiBcIlRvb2dsZSBJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwiaW5zcGVjdG9yXCI6IFwiSW5zcGVjdG9yXCIsXG4gICAgICAgICAgICBcInRpbWVsaW5lXCI6IFwiVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwiZ2xvYmFsdGltZWxpbmVcIjogXCJHbG9iYWwgVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwiZW5kX2FjdGlvblwiOiBcIkVuZCBBY2Npw7NuXCIsXG4gICAgICAgICAgICBcInBhdXNlXCI6IFwiUGF1c2VcIixcbiAgICAgICAgICAgIFwicGxheVwiOiBcIlBsYXlcIixcbiAgICAgICAgICAgIFwibGVmdF9hY3Rpb25zXCI6IFwiTGVmdCBBdGhsZXRlIEFjdGlvbnNcIixcbiAgICAgICAgICAgIFwicmlnaHRfYWN0aW9uc1wiOiBcIlJpZ2h0IEF0aGxldGUgQWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRpdGxlXCIsXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiQ29sb3JcIixcbiAgICAgICAgICAgIFwic3RhcnRcIjogXCJTdGFydCAoc2VnKVwiLFxuICAgICAgICAgICAgXCJlbmRcIjogXCJFbmQgKHNlZylcIixcbiAgICAgICAgICAgIFwic2F2ZVwiOiBcIlNhdmUgQ2hhbmdlc1wiLFxuICAgICAgICAgICAgXCJjYW5jZWxcIjogXCJDYW5jZWwgQ2hhbmdlc1wiLFxuICAgICAgICAgICAgXCJ0b3VjaGVzX2NhbnRfb3ZlcmxhcFwiOiBcIlRvdWNoZXMgY2FudCBvdmVybGFwXCIsXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfd2l0aFwiOiBcIlRoZSB0b3VjaCB0aGF0IHlvdSBhcmUgdHJ5aW5nIHRvIGFkZCBvdmVybGFwIHdpdGhcIixcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lcnJvclwiOiBcIkVWYWxpZGF0aW9uIEVycm9yXCIsXG4gICAgICAgICAgICBcInZhbGlkYXRpb25fZW5kX2dyZWF0ZXJcIjogXCJUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcIixcbiAgICAgICAgICAgIFwidG91Y2hfb3ZlcmxhcF9tc2dcIjogXCJ7dGl0bGV9IHRoYXQgc3RhcnRzIG9uIHtzdGFydH0gYW5kIGVuZHMgb24ge2VuZH1cIixcbiAgICAgICAgICAgIFwidG91Y2hlc1wiOiBcIlRvdWNoZXNcIixcbiAgICAgICAgICAgIFwic3RhcnRfYXRcIjogXCJTdGFydCBhdCB7c3RhcnR9XCIsXG4gICAgICAgICAgICBcImVuZF9hdFwiOiBcIkVuZCBhdCB7ZW5kfVwiLFxuICAgICAgICAgICAgXCJub190b3VjaGVzXCI6IFwiVGhlcmUgYXJlIG5vIHJlZ2lzdGVyZWQgdG9jdWhlc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY3QgU2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIkNyZWF0ZSBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ3NcIjogXCJTY291dGluZ3NcIixcbiAgICAgICAgICAgIFwibWFraW5nX3JlcG9ydFwiOiBcIlByb2Nlc3NpbmcgUmVwb3J0IHBsZWFzZSB3YWl0XCIsXG4gICAgICAgICAgICBcInJlcG9ydFwiOiBcIlNlZSBSZXBvcnRcIixcbiAgICAgICAgICAgIFwiZXJyb3JfcmVwb3J0XCI6IFwiQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBjcmVhdGluZyB0aGUgcmVwb3J0XCIsXG4gICAgICAgICAgICBcImxpc3RcIjogXCJEYXRhIExpc3RcIixcbiAgICAgICAgICAgIFwicmVzdWx0c1wiOiBcIlJlc3VsdHNcIixcbiAgICAgICAgICAgIFwiYXBwX21vYmlsZVwiOiBcIk1vYmlsZSBBcHBcIixcbiAgICAgICAgICAgIFwib3RoZXJfc291cmNlc1wiOiBcIk90aGVyIFNvdXJjZXNcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJzY291dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgc2NvdXRpbmcgZnVlIGFjdHVhbGl6YWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiRWwgc2NvdXRpbmcgZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiRWwgc2NvdXRpbmcgbm8gZXhpc3RlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwY2nDs25cIixcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2FtcGVvbmF0b1wiLFxuICAgICAgICAgICAgXCJldmVudFwiOiBcIkV2ZW50b1wiLFxuICAgICAgICAgICAgXCJsZWZ0X2F0aGxldGVcIjogXCJBdGxldGEgZGUgbGEgaXpxdWllcmRhXCIsXG4gICAgICAgICAgICBcInJpZ2h0X2F0aGxldGVcIjogXCJBdGxldGEgZGUgbGEgZGVyZWNoYVwiLFxuICAgICAgICAgICAgXCJ2aWRlb19zcmNcIjogXCJGdWVudGUgZGVsIHZpZGVvXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY2Npb25lc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWNjaW9uYSB1bmEgb3BjacOzblwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJBY3R1YWxpemFyXCIsXG4gICAgICAgICAgICBcIm5ld1wiOiBcIk51ZXZvIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxuICAgICAgICAgICAgXCJkZWxldGVfc2NvdXRpbmdcIjogXCJFbGltaW5hciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ19pbmZvXCI6IFwiSW5mb3JtYWNpw7NuIGRlbCBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJ1cGRhdGVfc2NvdXRpbmdcIjogXCJBY3R1YWxpemFyIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcIm1ha2VcIjogXCJIYWNlciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzdGFydF90b3VjaFwiOiBcIkluaWNpYXIgVG9xdWVcIixcbiAgICAgICAgICAgIFwiZW5kX3RvdWNoXCI6IFwiRmluYWxpemFyIFRvcXVlXCIsXG4gICAgICAgICAgICBcInRvb2dsZV90aW1lbGluZVwiOiBcIlRvb2dsZSBUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfaW5zcGVjdG9yXCI6IFwiVG9vZ2xlIEluc3BlY3RvclwiLFxuICAgICAgICAgICAgXCJpbnNwZWN0b3JcIjogXCJJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwidGltZWxpbmVcIjogXCJUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJlbmRfYWN0aW9uXCI6IFwiRmluYWxpemFyIEFjY2nDs25cIixcbiAgICAgICAgICAgIFwicGF1c2VcIjogXCJQYXVzYXJcIixcbiAgICAgICAgICAgIFwicGxheVwiOiBcIlJlcHJvZHVjaXJcIixcbiAgICAgICAgICAgIFwibGVmdF9hY3Rpb25zXCI6IFwiQWNjaW9uZXMgZGVsIEF0bGV0YSBkZSBsYSBpenF1aWVyZGFcIixcbiAgICAgICAgICAgIFwicmlnaHRfYWN0aW9uc1wiOiBcIkFjY2lvbmVzIGRlbCBBdGxldGEgZGUgbGEgZGVyZWNoYVwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRpdHVsb1wiLFxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIkNvbG9yXCIsXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwiSW5pY2lvIChzZWcpXCIsXG4gICAgICAgICAgICBcImVuZFwiOiBcIkZpbiAoc2VnKVwiLFxuICAgICAgICAgICAgXCJzYXZlXCI6IFwiR3VhcmRhciBDYW1iaW9zXCIsXG4gICAgICAgICAgICBcImNhbmNlbFwiOiBcIkNhbmNlbGFyIENhbWJpb3NcIixcbiAgICAgICAgICAgIFwidG91Y2hlc19jYW50X292ZXJsYXBcIjogXCJMb3MgdG9xdWVzIG5vIHB1ZWRlbiBzb2JyZXBvbmVyc2VcIixcbiAgICAgICAgICAgIFwidG91Y2hfb3ZlcmxhcF93aXRoXCI6IFwiRWwgdG9xdWUgcXVlIHRyYXRhcyBkZSBhw7FhZGlyIHNlIHN1cGVycG9uZSBjb25cIixcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lcnJvclwiOiBcIkVycm9yIGRlIFZhbGlkYWNpw7NuXCIsXG4gICAgICAgICAgICBcInZhbGlkYXRpb25fZW5kX2dyZWF0ZXJcIjogXCJFbCBmaW5hbCBkZWwgdG9xdWUgZGViZSBzZXIgbWF5b3IgYWwgaW5pY2lvXCIsXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfbXNnXCI6IFwie3RpdGxlfSBxdWUgZW1waWV6YSBlbiB7c3RhcnR9IHkgdGVybWluYSBlbiB7ZW5kfVwiLFxuICAgICAgICAgICAgXCJ0b3VjaGVzXCI6IFwiVG9xdWVzXCIsXG4gICAgICAgICAgICBcInN0YXJ0X2F0XCI6IFwiSW5pY2lhIGVuIHtzdGFydH1cIixcbiAgICAgICAgICAgIFwiZW5kX2F0XCI6IFwiRmluYWxpemEgZW4ge2VuZH1cIixcbiAgICAgICAgICAgIFwibm9fdG91Y2hlc1wiOiBcIk5vIGhheSB0b3F1ZXMgcmVnaXN0cmFkb3NcIixcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWNjaW9uYXIgU2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcImNyZWF0ZVwiOiBcIkNyZWFyIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcInNjb3V0aW5nc1wiOiBcIlNjb3V0aW5nc1wiLFxuICAgICAgICAgICAgXCJtYWtpbmdfcmVwb3J0XCI6IFwiUHJvY2VzYW5kbyBSZXBvcnRlIHBvciBmYXZvciBlc3BlcmFcIixcbiAgICAgICAgICAgIFwicmVwb3J0XCI6IFwiVmVyIFJlcG9ydGVcIixcbiAgICAgICAgICAgIFwiZXJyb3JfcmVwb3J0XCI6IFwiT2N1cnJpbyB1biBlcnJvciBpbmVzcGVyYWRvIGFsIHByb2Nlc2FyIGVsIHJlcG9ydGVcIixcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIkxpc3RhIGRlIERhdG9zXCIsXG4gICAgICAgICAgICBcInJlc3VsdHNcIjogXCJSZXN1bHRhZG9zXCIsXG4gICAgICAgICAgICBcImFwcF9tb2JpbGVcIjogXCJBcHAgTcOzdmlsXCIsXG4gICAgICAgICAgICBcIm90aGVyX3NvdXJjZXNcIjogXCJPdHJhcyBGdWVudGVzXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICc/aW5jbHVkZT1jaGFtcGlvbnNoaXAuc3BvcnQsZXZlbnQsbGVmdEF0aGxldGUscmlnaHRBdGhsZXRlLHRvdWNoZXMuYWN0aW9ucy5sZWZ0VGFncyx0b3VjaGVzLmFjdGlvbnMucmlnaHRUYWdzJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjcmVhdGUoc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvc2NvdXRpbmdzJywgc2NvdXRpbmcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgdXBkYXRlKGlkLCBzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQsIHNjb3V0aW5nLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvc2NvdXRpbmdzLycgKyBpZClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcbiAgICB9LFxuICAgIHJlcG9ydChpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQgKyAnL3JlcG9ydCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgbGF0ZXN0KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvbGF0ZXN0JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlLmpzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxhZG1pbi1oZWFkZXIgOnRpdGxlPVwiJHQoJ2FkbWluLnNjb3V0aW5ncycpXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L2FkbWluLWhlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBpZD1cInNjb3V0aW5nLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdzY291dGluZ3MubmV3Jyl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmJveC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ25hbWVlbicpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVlblwiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdzY291dGluZ3MubmFtZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lZW5cIiBuYW1lPVwibmFtZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ3Njb3V0aW5ncy5uYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzY291dGluZy50cmFuc2xhdGlvbi5uYW1lLmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ3Njb3V0aW5ncy5uYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnbmFtZWVuJylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCduYW1lZW4nKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd2aWRlb19zcmMnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ2aWRlb19zcmNcIiBkYXRhLWVycm9yPVwiXCI+e3skdCgnc2NvdXRpbmdzLnZpZGVvX3NyYycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS12aWRlby1jYW1lcmFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInZpZGVvX3NyY1wiIG5hbWU9XCJ2aWRlb19zcmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnc2NvdXRpbmdzLnZpZGVvX3NyYycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2NvdXRpbmcudmlkZW9fc3JjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ3Njb3V0aW5ncy52aWRlb19zcmMnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd2aWRlb19zcmMnKVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ3ZpZGVvX3NyYycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvbmVuXCIgZGF0YS1lcnJvcj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmRlc2NyaXB0aW9uJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWxpc3RcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25lblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdzY291dGluZ3MuZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNjb3V0aW5nLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZm9ybXMuYmFjaycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBocmVmPVwiIyFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydkaXNhYmxlZCc6dXBkYXRpbmd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uU3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Zvcm1zLnNhdmUnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuICAgIGltcG9ydCBmb3JtRGF0YU9iamVjdFBhcnNlciBmcm9tICdiYXNlL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyJ1xuICAgIGltcG9ydCB2U2VsZWN0IGZyb20gXCJiYXNlL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcIlxuICAgIGltcG9ydCBhZG1pbkhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xuICAgIGltcG9ydCBzY291dGluZ1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICB2U2VsZWN0LFxuICAgICAgICAgICAgYWRtaW5IZWFkZXIsXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW2Zvcm1EYXRhT2JqZWN0UGFyc2VyXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY291dGluZzoge1xuICAgICAgICAgICAgICAgICAgICB2aWRlb19zcmM6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLmhvbWUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvc2NvdXRpbmdzL2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi5zY291dGluZ3MnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvc2NvdXRpbmdzL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLm5ldydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25CYWNrKGV2dCl7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN1Ym1pdChldnQpe1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3V0aW5nLnRyYW5zbGF0aW9uLm5hbWUuZXMgPSB0aGlzLnNjb3V0aW5nLnRyYW5zbGF0aW9uLm5hbWUuZW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvdXRpbmcudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZXMgPSB0aGlzLnNjb3V0aW5nLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuO1xuICAgICAgICAgICAgICAgICAgICBzY291dGluZ1NlcnZpY2UuY3JlYXRlKHRoaXMuc2NvdXRpbmcsIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LnN1Y2Nlc3NUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5ib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1tlcnJvcl0uZm9yRWFjaCgodmFsaWRhdGlvbkVycm9yKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QodmFsaWRhdGlvbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHJlc3BvbnNlLmVycm9ycylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChiYWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnYWRtaW4udmFsaWRhdGlvbl9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjcmVhdGUudnVlPzJjNDIxMzg2IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiY3JlYXRlLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01MmM4ZmNhNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvY3JlYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdhZG1pbi1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogX3ZtLiR0KCdhZG1pbi5zY291dGluZ3MnKSxcbiAgICAgIFwiYnJlYWRjcnVtYnNcIjogX3ZtLmJyZWFkY3J1bWJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiXG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJzY291dGluZy1mb3JtXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLm5ldycpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ25hbWVlbicpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5hbWVlblwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLm5hbWUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zY291dGluZy50cmFuc2xhdGlvbi5uYW1lLmVuKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2NvdXRpbmcudHJhbnNsYXRpb24ubmFtZS5lblwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmFtZWVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJuYW1lZW5cIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdzY291dGluZ3MubmFtZScpLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ3Njb3V0aW5ncy5uYW1lJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc2NvdXRpbmcudHJhbnNsYXRpb24ubmFtZS5lbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zY291dGluZy50cmFuc2xhdGlvbi5uYW1lLmVuID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ25hbWVlbicpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnbmFtZWVuJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnbmFtZWVuJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndmlkZW9fc3JjJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwidmlkZW9fc3JjXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudmlkZW9fc3JjJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc2NvdXRpbmcudmlkZW9fc3JjKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2NvdXRpbmcudmlkZW9fc3JjXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ2aWRlb19zcmNcIixcbiAgICAgIFwibmFtZVwiOiBcInZpZGVvX3NyY1wiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ3Njb3V0aW5ncy52aWRlb19zcmMnKSxcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdzY291dGluZ3MudmlkZW9fc3JjJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc2NvdXRpbmcudmlkZW9fc3JjKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnNjb3V0aW5nLnZpZGVvX3NyYyA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd2aWRlb19zcmMnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3ZpZGVvX3NyYycpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3ZpZGVvX3NyYycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJkZXNjcmlwdGlvbmVuXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZGVzY3JpcHRpb24nKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oMiksIF92bS5fdihcIiBcIiksIF9jKCd0ZXh0YXJlYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zY291dGluZy50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbiksXG4gICAgICBleHByZXNzaW9uOiBcInNjb3V0aW5nLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImRlc2NyaXB0aW9uZW5cIixcbiAgICAgIFwicm93c1wiOiBcIjRcIixcbiAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uZW5cIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdzY291dGluZ3MuZGVzY3JpcHRpb24nKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zY291dGluZy50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zY291dGluZy50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25CYWNrXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuYmFjaycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdkaXNhYmxlZCc6IF92bS51cGRhdGluZ1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiLFxuICAgICAgXCJocmVmXCI6IFwiIyFcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uU3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuc2F2ZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pXSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS12aWRlby1jYW1lcmFcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1saXN0XCJcbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTUyYzhmY2E0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01MmM4ZmNhNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy9jcmVhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01MmM4ZmNhNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY3JlYXRlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2YzYzNjg2OFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTJjOGZjYTQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTUyYzhmY2E0IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jcmVhdGUudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01MmM4ZmNhNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvY3JlYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=