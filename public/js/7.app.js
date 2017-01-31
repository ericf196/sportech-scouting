webpackJsonp([7,22],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(379)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(271),
  /* template */
  __webpack_require__(374),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/championships/create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] create.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed353ba0", Component.options)
  } else {
    hotAPI.reload("data-v-ed353ba0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(184)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(183),
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

/***/ 181:
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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 183:
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

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
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

/***/ 186:
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

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(205)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(203),
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

/***/ 193:
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

var _pointerScroll = __webpack_require__(196);

var _pointerScroll2 = _interopRequireDefault(_pointerScroll);

var _typeAheadPointer = __webpack_require__(197);

var _typeAheadPointer2 = _interopRequireDefault(_typeAheadPointer);

var _ajax = __webpack_require__(195);

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

/***/ 194:
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

/***/ 195:
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

/***/ 196:
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

/***/ 197:
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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.inputfile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.inputfile + label {\n    width: auto !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/upload/dnc-image-upload.vue?48b0fff6"],"names":[],"mappings":";AAaA;IACA,aAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,uBAAA;CACA","file":"dnc-image-upload.vue","sourcesContent":["<template>\n    <div>\n        <img :src=\"defaultImage\" alt=\"athlete profile image\" width=\"110px\" v-if=\"!imageFile\">\n        <img :src=\"imageFile\" alt=\"athlete profile image\" width=\"110px\" v-if=\"imageFile\">\n\n        <br><br>\n        <input type=\"file\" name=\"file\" id=\"image-uploader\" class=\"inputfile\" @change=\"onFileChange\"\n               ref=\"fileinput\"/>\n        <label for=\"image-uploader\" class=\"btn btn-primary\"><i class=\"fa fa-cloud\"></i>\n            <span>{{btnText}}</span></label>\n    </div>\n</template>\n<style>\n    .inputfile {\n        width: 0.1px;\n        height: 0.1px;\n        opacity: 0;\n        overflow: hidden;\n        position: absolute;\n        z-index: -1;\n    }\n\n    .inputfile + label {\n        width: auto !important;\n    }\n</style>\n<script type=\"text/babel\">\n\n    export default{\n        props: {\n            value: {},\n            acceptedFiles: {\n                type: String,\n                default: 'image/*'\n            },\n            btnText: {},\n            errorValidationMsg: {},\n            width: {\n                type: Number,\n                default: 110\n            },\n            image: {},\n            defaultImage: {}\n        },\n        watch: {\n            image: function (val) {\n                this.imageFile = val;\n            }\n        },\n        data(){\n            return {\n                imageFile: null\n            }\n        },\n        methods: {\n            onFileChange(e){\n                var files = e.target.files || e.dataTransfer.files;\n                if (!files.length)\n                    return;\n                this.createImage(files[0]);\n            },\n            createImage(file) {\n                if (!file.type.match(this.acceptedFiles)) {\n                    document.getElementById(\"image-uploader\").value = \"\";\n                    this.$root.warningToast(this.errorValidationMsg);\n                    this.imageFile = this.defaultImage\n                    return;\n                }\n                var reader = new FileReader();\n                var vm = this;\n                reader.onload = (e) => {\n                    vm.imageFile = e.target.result;\n                };\n                reader.readAsDataURL(file)\n            },\n            getFile(){\n                return this.$refs.fileinput.files[0];\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.v-select {\n    position: relative;\n}\n.v-select .open-indicator {\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    pointer-events: all;\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    opacity: 1;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .open-indicator {\n    opacity: 0;\n}\n.v-select .open-indicator:before {\n    border-color: rgba(60, 60, 60, .5);\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    vertical-align: top;\n    -webkit-transform: rotate(133deg);\n            transform: rotate(133deg);\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n}\n.v-select.open .open-indicator {\n    bottom: 1px;\n}\n.v-select.open .open-indicator:before {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n}\n.v-select .dropdown-toggle {\n    display: block;\n    padding: 0;\n    background: none;\n    border: 1px solid rgba(60, 60, 60, .26);\n    border-radius: 4px;\n    white-space: normal;\n}\n.v-select.searchable .dropdown-toggle {\n    cursor: text;\n}\n.v-select.open .dropdown-toggle {\n    border-bottom: none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.v-select > .dropdown-menu {\n    margin: 0;\n    width: 100%;\n    overflow-y: scroll;\n    border-top: none;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.v-select .selected-tag {\n    color: #333;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 26px;\n    margin: 4px 1px 0px 3px;\n    padding: 0 0.25em;\n    float: left;\n    line-height: 1.7em;\n}\n.v-select .selected-tag .close {\n    float: none;\n    margin-right: 0;\n    font-size: 20px;\n}\n.v-select input[type=search],\n.v-select input[type=search]:focus {\n    display: inline-block;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0 .5em;\n    width: 10em;\n    max-width: 100%;\n    background: none;\n    position: relative;\n    box-shadow: none;\n    float: left;\n    clear: none;\n}\n.v-select input[type=search]:disabled {\n    cursor: pointer;\n}\n.v-select li a {\n    cursor: pointer;\n}\n.v-select .active a {\n    background: rgba(50, 50, 50, .1);\n    color: #333;\n}\n.v-select .highlight a,\n.v-select li:hover > a {\n    background: #f0f0f0;\n    color: #333;\n}\n.v-select .spinner {\n    opacity: 0;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 5px;\n    text-indent: -9999em;\n    overflow: hidden;\n    border-top: .9em solid rgba(100, 100, 100, .1);\n    border-right: .9em solid rgba(100, 100, 100, .1);\n    border-bottom: .9em solid rgba(100, 100, 100, .1);\n    border-left: .9em solid rgba(60, 60, 60, .45);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-animation: vSelectSpinner 1.1s infinite linear;\n            animation: vSelectSpinner 1.1s infinite linear;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .spinner {\n    opacity: 1;\n}\n.v-select .spinner,\n.v-select .spinner:after {\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n}\n@-webkit-keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/forms/select/select.vue?46a988a4"],"names":[],"mappings":";AACA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;IACA,gBAAA;IACA,oBAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;IACA,WAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,mCAAA;IACA,oBAAA;IACA,gCAAA;IACA,YAAA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,oBAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,WAAA;IACA,iBAAA;IACA,wCAAA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,oBAAA;IACA,6BAAA;IACA,8BAAA;CACA;AAEA;IACA,UAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;IACA,2BAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;;IAEA,sBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,iCAAA;IACA,YAAA;CACA;AAEA;;IAEA,oBAAA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,mBAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,qBAAA;IACA,iBAAA;IACA,+CAAA;IACA,iDAAA;IACA,kDAAA;IACA,8CAAA;IACA,iCAAA;YAAA,yBAAA;IACA,uDAAA;YAAA,+CAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,mBAAA;IACA,WAAA;IACA,YAAA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA","file":"select.vue","sourcesContent":["<style>\n    .v-select {\n        position: relative;\n    }\n\n    .v-select .open-indicator {\n        position: absolute;\n        bottom: 6px;\n        right: 10px;\n        display: inline-block;\n        cursor: pointer;\n        pointer-events: all;\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        opacity: 1;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .open-indicator {\n        opacity: 0;\n    }\n\n    .v-select .open-indicator:before {\n        border-color: rgba(60, 60, 60, .5);\n        border-style: solid;\n        border-width: 0.25em 0.25em 0 0;\n        content: '';\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        vertical-align: top;\n        transform: rotate(133deg);\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    }\n\n    .v-select.open .open-indicator {\n        bottom: 1px;\n    }\n\n    .v-select.open .open-indicator:before {\n        transform: rotate(315deg);\n    }\n\n    .v-select .dropdown-toggle {\n        display: block;\n        padding: 0;\n        background: none;\n        border: 1px solid rgba(60, 60, 60, .26);\n        border-radius: 4px;\n        white-space: normal;\n    }\n\n    .v-select.searchable .dropdown-toggle {\n        cursor: text;\n    }\n\n    .v-select.open .dropdown-toggle {\n        border-bottom: none;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    .v-select > .dropdown-menu {\n        margin: 0;\n        width: 100%;\n        overflow-y: scroll;\n        border-top: none;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    .v-select .selected-tag {\n        color: #333;\n        background-color: #f0f0f0;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        height: 26px;\n        margin: 4px 1px 0px 3px;\n        padding: 0 0.25em;\n        float: left;\n        line-height: 1.7em;\n    }\n\n    .v-select .selected-tag .close {\n        float: none;\n        margin-right: 0;\n        font-size: 20px;\n    }\n\n    .v-select input[type=search],\n    .v-select input[type=search]:focus {\n        display: inline-block;\n        border: none;\n        outline: none;\n        margin: 0;\n        padding: 0 .5em;\n        width: 10em;\n        max-width: 100%;\n        background: none;\n        position: relative;\n        box-shadow: none;\n        float: left;\n        clear: none;\n    }\n\n    .v-select input[type=search]:disabled {\n        cursor: pointer;\n    }\n\n    .v-select li a {\n        cursor: pointer;\n    }\n\n    .v-select .active a {\n        background: rgba(50, 50, 50, .1);\n        color: #333;\n    }\n\n    .v-select .highlight a,\n    .v-select li:hover > a {\n        background: #f0f0f0;\n        color: #333;\n    }\n\n    .v-select .spinner {\n        opacity: 0;\n        position: absolute;\n        top: 5px;\n        right: 10px;\n        font-size: 5px;\n        text-indent: -9999em;\n        overflow: hidden;\n        border-top: .9em solid rgba(100, 100, 100, .1);\n        border-right: .9em solid rgba(100, 100, 100, .1);\n        border-bottom: .9em solid rgba(100, 100, 100, .1);\n        border-left: .9em solid rgba(60, 60, 60, .45);\n        transform: translateZ(0);\n        animation: vSelectSpinner 1.1s infinite linear;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .spinner {\n        opacity: 1;\n    }\n\n    .v-select .spinner,\n    .v-select .spinner:after {\n        border-radius: 50%;\n        width: 5em;\n        height: 5em;\n    }\n\n    @-webkit-keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n\n<template>\n    <div class=\"dropdown v-select\" :class=\"dropdownClasses\">\n        <div ref=\"toggle\" @mousedown.prevent=\"toggleDropdown\" class=\"dropdown-toggle clearfix\" type=\"button\">\n        <span class=\"form-control\" v-if=\"!searchable && isValueEmpty\">\n          {{ placeholder }}\n        </span>\n\n            <span class=\"selected-tag\" v-for=\"(option,index) in valueAsArray\" v-bind:key=\"index\">\n          {{ getOptionLabel(option) }}\n          <button v-if=\"multiple\" @click=\"select(option)\" type=\"button\" class=\"close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </span>\n\n            <input\n                    ref=\"search\"\n                    :debounce=\"debounce\"\n                    v-model=\"search\"\n                    v-show=\"searchable\"\n                    @keydown.delete=\"maybeDeleteValue\"\n                    @keyup.esc=\"onEscape\"\n                    @keydown.up.prevent=\"typeAheadUp\"\n                    @keydown.down.prevent=\"typeAheadDown\"\n                    @keyup.enter.prevent=\"typeAheadSelect\"\n                    @blur=\"open = false\"\n                    @focus=\"open = true\"\n                    type=\"search\"\n                    class=\"form-control\"\n                    :placeholder=\"searchPlaceholder\"\n                    :style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"\n            >\n\n            <i ref=\"openIndicator\" role=\"presentation\" class=\"open-indicator\"></i>\n\n            <slot name=\"spinner\">\n                <div class=\"spinner\" v-show=\"loading\">Loading...</div>\n            </slot>\n        </div>\n\n        <ul ref=\"dropdownMenu\" v-show=\"open\" :transition=\"transition\" class=\"dropdown-menu\"\n            :style=\"{ 'max-height': maxHeight }\">\n            <li v-for=\"(option,index) in filteredOptions\" v-bind:key=\"index\"\n                :class=\"{ active: isOptionSelected(option), highlight: index === typeAheadPointer }\"\n                @mouseover=\"typeAheadPointer = index\">\n                <a @mousedown.prevent=\"select(option)\">\n                    {{ getOptionLabel(option) }}\n                </a>\n            </li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"divider\"></li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"text-center\">\n                <slot name=\"no-options\">Sorry, no matching options.</slot>\n            </li>\n        </ul>\n    </div>\n</template>\n\n\n<script type=\"text/babel\">\n    import pointerScroll from 'base/mixins/pointerScroll'\n    import typeAheadPointer from 'base/mixins/typeAheadPointer'\n    import ajax from 'base/mixins/ajax'\n\n    export default {\n        mixins: [pointerScroll, typeAheadPointer, ajax],\n\n        props: {\n            /**\n             * Contains the currently selected value. Very similar to a\n             * `value` attribute on an <input>. In most cases, you'll want\n             * to set this as a two-way binding, using :value.sync. However,\n             * this will not work with Vuex, in which case you'll need to use\n             * the onChange callback property.\n             * @type {Object||String||null}\n             */\n            value: {\n                default: null\n            },\n\n            /**\n             * An array of strings or objects to be used as dropdown choices.\n             * If you are using an array of objects, vue-select will look for\n             * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\n             * custom label key can be set with the `label` prop.\n             * @type {Object}\n             */\n            options: {\n                type: Array,\n                default() {\n                    return []\n                },\n            },\n\n            /**\n             * Sets the max-height property on the dropdown list.\n             * @deprecated\n             * @type {String}\n             */\n            maxHeight: {\n                type: String,\n                default: '400px'\n            },\n\n            /**\n             * Enable/disable filtering the options.\n             * @type {Boolean}\n             */\n            searchable: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Equivalent to the `multiple` attribute on a `<select>` input.\n             * @type {Object}\n             */\n            multiple: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * Equivalent to the `placeholder` attribute on an `<input>`.\n             * @type {Object}\n             */\n            placeholder: {\n                type: String,\n                default: ''\n            },\n\n            /**\n             * Sets a Vue transition property on the `.dropdown-menu`. vue-select\n             * does not include CSS for transitions, you'll need to add them yourself.\n             * @type {String}\n             */\n            transition: {\n                type: String,\n                default: 'expand'\n            },\n\n            /**\n             * Enables/disables clearing the search text when an option is selected.\n             * @type {Boolean}\n             */\n            clearSearchOnSelect: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Tells vue-select what key to use when generating option\n             * labels when each `option` is an object.\n             * @type {String}\n             */\n            label: {\n                type: String,\n                default: 'label'\n            },\n\n            /**\n             * Callback to generate the label text. If {option}\n             * is an object, returns option[this.label] by default.\n             * @param  {Object || String} option\n             * @return {String}\n             */\n            getOptionLabel: {\n                type: Function,\n                default(option) {\n                    if (typeof option === 'object') {\n                        if (this.label && option[this.label]) {\n                            return option[this.label]\n                        }\n                    }\n                    return option;\n                }\n            },\n\n            /**\n             * An optional callback function that is called each time the selected\n             * value(s) change. When integrating with Vuex, use this callback to trigger\n             * an action, rather than using :value.sync to retreive the selected value.\n             * @type {Function}\n             * @default {null}\n             */\n            onChange: Function,\n            changeParam: {},\n\n            /**\n             * Enable/disable creating options from searchInput.\n             * @type {Boolean}\n             */\n            taggable: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * When true, newly created tags will be added to\n             * the options list.\n             * @type {Boolean}\n             */\n            pushTags: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * User defined function for adding Options\n             * @type {Function}\n             */\n            createOption: {\n                type: Function,\n                default: function (newOption) {\n                    if (typeof this.options[0] === 'object') {\n                        return {[this.label]: newOption}\n                    }\n                    return newOption\n                }\n            },\n\n            /**\n             * When false, updating the options will not reset the select value\n             * @type {Boolean}\n             */\n            resetOnOptionsChange: {\n                type: Boolean,\n                default: false\n            },\n        },\n\n        data() {\n            return {\n                search: '',\n                open: false,\n                selection: null\n            }\n        },\n\n        watch: {\n            value(val, old) {\n                this.selection = val\n            },\n            selection(val, old) {\n                if (this.multiple) {\n                    this.onChange ? this.onChange(val, this.changeParam) : null\n                } else {\n                    this.onChange && val !== old ? this.onChange(val, this.changeParam) : null\n                }\n            },\n            options() {\n                if (!this.taggable && this.resetOnOptionsChange) {\n                    this.selection = this.multiple ? [] : null\n                }\n            },\n            multiple(val) {\n                this.selection = val ? [] : null\n            }\n        },\n\n        methods: {\n\n            /**\n             * Select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            select(option) {\n                if (this.isOptionSelected(option)) {\n                    this.deselect(option)\n                } else {\n                    if (this.taggable && !this.optionExists(option)) {\n                        option = this.createOption(option)\n\n                        if (this.pushTags) {\n                            this.options.push(option)\n                        }\n                    }\n\n                    if (this.multiple) {\n                        if (!this.selection) {\n                            this.selection = [option]\n                        } else {\n                            this.selection.push(option)\n                        }\n                    } else {\n                        this.selection = option\n                    }\n                }\n\n                this.onAfterSelect(option)\n            },\n\n            /**\n             * De-select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            deselect(option) {\n                if (this.multiple) {\n                    let ref = -1\n                    this.selection.forEach((val) => {\n                        if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {\n                            ref = val\n                        }\n                    })\n                    var index = this.selection.indexOf(ref);\n                    this.selection.splice(index, 1)\n\n                } else {\n                    this.selection = null\n                }\n            },\n\n            /**\n             * Called from this.select after each selection.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            onAfterSelect(option) {\n                if (!this.multiple) {\n                    this.open = !this.open\n                    this.$refs.search.blur()\n                }\n\n                if (this.clearSearchOnSelect) {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Toggle the visibility of the dropdown menu.\n             * @param  {Event} e\n             * @return {void}\n             */\n            toggleDropdown(e) {\n                if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {\n                    if (this.open) {\n                        this.$refs.search.blur() // dropdown will close on blur\n                    } else {\n                        this.open = true\n                        this.$refs.search.focus()\n                    }\n                }\n            },\n\n            /**\n             * Check if the given option is currently selected.\n             * @param  {Object||String}  option\n             * @return {Boolean}         True when selected || False otherwise\n             */\n            isOptionSelected(option) {\n                if (this.multiple && this.selection) {\n                    let selected = false\n                    this.value.forEach(opt => {\n                        if (typeof opt === 'object' && opt[this.label] === option[this.label]) {\n                            selected = true\n                        } else if (opt === option) {\n                            selected = true\n                        }\n                    })\n                    return selected\n                }\n\n                return this.selection === option\n            },\n\n            /**\n             * If there is any text in the search input, remove it.\n             * Otherwise, blur the search input to close the dropdown.\n             * @return {[type]} [description]\n             */\n            onEscape() {\n                if (!this.search.length) {\n                    this.$refs.search.blur()\n                } else {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Delete the value on Delete keypress when there is no\n             * text in the search input, & there's tags to delete\n             * @return {this.value}\n             */\n            maybeDeleteValue() {\n                if (!this.$refs.search.value.length && this.value) {\n                    return this.multiple ? this.value.pop() : this.selection = null\n                }\n            },\n\n            /**\n             * Determine if an option exists\n             * within this.options array.\n             *\n             * @param  {Object || String} option\n             * @return {boolean}\n             */\n            optionExists(option) {\n                let exists = false\n\n                this.options.forEach(opt => {\n                    if (typeof opt === 'object' && opt[this.label] === option) {\n                        exists = true\n                    } else if (opt === option) {\n                        exists = true\n                    }\n                })\n\n                return exists\n            }\n        },\n\n        computed: {\n\n            /**\n             * Classes to be output on .dropdown\n             * @return {Object}\n             */\n            dropdownClasses() {\n                return {\n                    open: this.open,\n                    searchable: this.searchable,\n                    loading: this.loading\n                }\n            },\n\n            /**\n             * Return the placeholder string if it's set\n             * & there is no value selected.\n             * @return {String} Placeholder text\n             */\n            searchPlaceholder() {\n                if (this.isValueEmpty && this.placeholder) {\n                    return this.placeholder;\n                }\n            },\n\n            /**\n             * The currently displayed options, filtered\n             * by the search elements value. If tagging\n             * true, the search text will be prepended\n             * if it doesn't already exist.\n             *\n             * @return {array}\n             */\n            filteredOptions() {\n                let self = this;\n                let options = this.options.filter(function (option) {\n                    return option[self.label].indexOf(self.search) !== -1\n                })\n                if (this.taggable && this.search.length && !this.optionExists(this.search)) {\n                    options.unshift(this.search)\n                }\n                return options\n            },\n\n            /**\n             * Check if there aren't any options selected.\n             * @return {Boolean}\n             */\n            isValueEmpty() {\n                if (this.selection) {\n                    if (typeof this.selection === 'object') {\n                        return !Object.keys(this.selection).length\n                    }\n                    return !this.selection.length\n                }\n\n                return true;\n            },\n\n            /**\n             * Return the current value in array format.\n             * @return {Array}\n             */\n            valueAsArray() {\n                if (this.multiple) {\n                    return this.selection\n                } else if (this.selection) {\n                    return [this.selection]\n                }\n\n                return []\n            }\n        }\n\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(204)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(194),
  /* template */
  __webpack_require__(202),
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

/***/ 202:
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

/***/ 203:
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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
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

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
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

/***/ 207:
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

/***/ 208:
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

/***/ 220:
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

/***/ 271:
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

var _championships = __webpack_require__(208);

var _championships2 = _interopRequireDefault(_championships);

var _formDataParser = __webpack_require__(186);

var _formDataParser2 = _interopRequireDefault(_formDataParser);

var _vuex = __webpack_require__(4);

var _dncImageUpload = __webpack_require__(201);

var _dncImageUpload2 = _interopRequireDefault(_dncImageUpload);

var _select = __webpack_require__(187);

var _select2 = _interopRequireDefault(_select);

var _pageHeader = __webpack_require__(180);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _championshipService = __webpack_require__(220);

var _championshipService2 = _interopRequireDefault(_championshipService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        vSelect: _select2.default,
        adminHeader: _pageHeader2.default,
        dncImageUploader: _dncImageUpload2.default,
        "vue-datetime-picker": __webpack_require__(207)
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
                href: '/',
                title: 'admin.home'
            }, {
                href: '/championships/list',
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
            evt.preventDefault();
            var self = this;
            this.$validator.validateAll();
            if (this.errors.any()) {
                this.$root.errorToast(this.$t('admin.validation_error'));
            } else {
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
            }
        }
    })
};

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.select-input {\n  margin-top: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 374:
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
      'has-error': _vm.errors.has('championship.translation.name.en')
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
      value: (_vm.championship.translation.name.en),
      expression: "championship.translation.name.en",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "nameen",
      "name": "championship.translation.name.en",
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
      value: (_vm.errors.has('championship.translation.name.en')),
      expression: "errors.has('championship.translation.name.en')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('championship.translation.name.en')))])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('championship.translation.description.en')
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
      value: (_vm.championship.translation.description.en),
      expression: "championship.translation.description.en",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "descriptionen",
      "name": "championship.translation.description.en",
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
      value: (_vm.errors.has('championship.translation.description.en')),
      expression: "errors.has('championship.translation.description.en')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('championship.translation.description.en')))])])]), _vm._v(" "), _c('div', {
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
      'has-error': _vm.errors.has('championship.sport')
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
      value: (_vm.championship.sport),
      expression: "championship.sport",
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
      value: (_vm.errors.has('championship.sport')),
      expression: "errors.has('championship.sport')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('championship.sport')))])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('championship.init_date')
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
      value: (_vm.championship.init_date),
      expression: "championship.init_date",
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
      value: (_vm.errors.has('championship.init_date')),
      expression: "errors.has('championship.init_date')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('championship.init_date')))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('championship.end_date')
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
      value: (_vm.championship.end_date),
      expression: "championship.end_date",
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
      value: (_vm.errors.has('championship.end_date')),
      expression: "errors.has('championship.end_date')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('championship.end_date')))])], 1)])]), _vm._v(" "), _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-ed353ba0", module.exports)
  }
}

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ed353ba0!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
			var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ed353ba0!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzZiOGUqKioqKioiLCJ3ZWJwYWNrOi8vL3BhZ2VIZWFkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/YTU2ZioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT8zOGEzKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzQ0MTIqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZm9ybURhdGFQYXJzZXIuanM/MGMzNyoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT9mNWI1KioqIiwid2VicGFjazovLy9zZWxlY3QudnVlP2EwMTUqKiIsIndlYnBhY2s6Ly8vZG5jLWltYWdlLXVwbG9hZC52dWU/MGNlYyoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXguanM/YzBkNCoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanM/ZWFiNioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXIuanM/YmVkNioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/OGE1NyoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/YmIxNyoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/ZmNlZCoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/MmQ4NyoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzc1ZjgqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlPzc5NmQqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RhdGV0aW1lL3Z1ZS1kYXRldGltZS1waWNrZXIuanM/NjViYyoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9jaGFtcGlvbnNoaXBzL2NoYW1waW9uc2hpcHMuanM/NGM1YSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwU2VydmljZS5qcz8wMDM4KioiLCJ3ZWJwYWNrOi8vL2NyZWF0ZS52dWU/YTIzMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY3JlYXRlLnZ1ZT8xZDBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvY2hhbXBpb25zaGlwcy9jcmVhdGUudnVlPzFlMDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2NyZWF0ZS52dWU/NTg3OCJdLCJuYW1lcyI6WyJtZXRob2RzIiwicGFyc2VPYmpGb3JtRGF0YSIsIm9iaiIsImZvcm1kYXRhIiwibmFtZXNwYWNlIiwiZmQiLCJmb3JtS2V5IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkZpbGUiLCJhcHBlbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvcHMiLCJsb2FkaW5nIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwib25TZWFyY2giLCJkZWJvdW5jZSIsIk51bWJlciIsIndhdGNoIiwic2VhcmNoIiwibGVuZ3RoIiwidG9nZ2xlTG9hZGluZyIsInRvZ2dsZSIsInR5cGVBaGVhZFBvaW50ZXIiLCJtYXliZUFkanVzdFNjcm9sbCIsInBpeGVsc1RvUG9pbnRlclRvcCIsInBpeGVsc1RvUG9pbnRlckJvdHRvbSIsInZpZXdwb3J0IiwidG9wIiwic2Nyb2xsVG8iLCJib3R0b20iLCJwb2ludGVySGVpZ2h0IiwiaSIsIiRyZWZzIiwiZHJvcGRvd25NZW51IiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50Iiwic2Nyb2xsVG9wIiwicG9zaXRpb24iLCJkYXRhIiwiZmlsdGVyZWRPcHRpb25zIiwidHlwZUFoZWFkVXAiLCJ0eXBlQWhlYWREb3duIiwidHlwZUFoZWFkU2VsZWN0Iiwic2VsZWN0IiwidGFnZ2FibGUiLCJjbGVhclNlYXJjaE9uU2VsZWN0IiwiREFURVRJTUVfUElDS0VSX1RPT0xUSVBTIiwiREVGQVVMVF9MQU5HVUFHRSIsInJlcGxhY2UiLCJpbmhlcml0IiwidGVtcGxhdGUiLCJtb2RlbCIsInJlcXVpcmVkIiwiU3RyaW5nIiwibGFuZ3VhZ2UiLCJkYXRldGltZUZvcm1hdCIsImRhdGVGb3JtYXQiLCJ0aW1lRm9ybWF0IiwibmFtZSIsIm9uQ2hhbmdlIiwiZGF0ZSIsImNyZWF0ZWQiLCJpc0NoYW5naW5nIiwiY29udHJvbCIsIm1vdW50ZWQiLCJvcHRpb25zIiwidXNlQ3VycmVudCIsInNob3dDbGVhciIsInNob3dDbG9zZSIsImljb25zIiwidGltZSIsInVwIiwiZG93biIsInByZXZpb3VzIiwibmV4dCIsInRvZGF5IiwiY2xlYXIiLCJjbG9zZSIsIiRsYW5ndWFnZSIsImxhbmdhdWdlIiwibG9jYWxlIiwiZ2V0TGFuZ3VhZ2VDb2RlIiwiZm9ybWF0IiwiJGkxOG4iLCJkYXRldGltZV9waWNrZXIiLCJtZXNzYWdlcyIsInRvb2x0aXBzIiwiJCIsImZuIiwiZGF0ZXRpbWVwaWNrZXIiLCJkZWZhdWx0cyIsIiRuZXh0VGljayIsIiRlbCIsIm1lIiwib24iLCJ2YWwiLCJvbGRWYWwiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsInNob3ciLCJpZCIsInN1Y2Nlc3NDYWxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImNyZWF0ZSIsImNoYW1waW9uc2hpcCIsInBvc3QiLCJ1cGRhdGUiLCJwdXQiLCJlbXVsYXRlSFRUUCIsInJlbW92ZSIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7OztBQzlCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURB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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDeFhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzcuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtZWQzNTNiYTAhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lZDM1M2JhMCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jcmVhdGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY3JlYXRlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNyZWF0ZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZWQzNTNiYTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lZDM1M2JhMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2NoYW1waW9uc2hpcHMvY3JlYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhZ2VIZWFkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdmY2QwOTU2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt7dGl0bGV9fVxuICAgICAgICA8L2gxPlxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvb2w+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxuICAgIC5hZG1pbi1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDk3cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NTM3OWY1Y2IiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdmY2QwOTU2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsImV4cG9ydCBkZWZhdWx0e1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcGFyc2VPYmpGb3JtRGF0YShvYmosIGZvcm1kYXRhLCBuYW1lc3BhY2UpIHtcblxuICAgICAgICAgICAgdmFyIGZkID0gZm9ybWRhdGE7XG4gICAgICAgICAgICB2YXIgZm9ybUtleTtcblxuICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBvYmpbcHJvcGVydHldICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtS2V5ID0gbmFtZXNwYWNlICsgJ1snICsgcHJvcGVydHkgKyAnXSc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtS2V5ID0gcHJvcGVydHk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYW4gb2JqZWN0LCBidXQgbm90IGEgRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHJlY3Vyc2l2aXR5LlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wZXJ0eV0gPT09ICdvYmplY3QnICYmICEob2JqW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlT2JqRm9ybURhdGEob2JqW3Byb3BlcnR5XSwgZmQsIGZvcm1LZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGZvcm1LZXksIG9ialtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZm9ybURhdGFQYXJzZXIuanMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZWxlY3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LThkMzUxMDM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOGQzNTEwMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNiA3IDggOSAxMCAxMSIsIjxzdHlsZT5cbiAgICAudi1zZWxlY3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA2cHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjUpO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDAuMjVlbSAwLjI1ZW0gMCAwO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcbiAgICB9XG5cbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3Ige1xuICAgICAgICBib3R0b206IDFweDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC4yNik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgPiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xuICAgICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXSxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xuICAgICAgICB3aWR0aDogMTBlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjbGVhcjogbm9uZTtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuYWN0aXZlIGEge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIC4xKTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcbiAgICAudi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xuICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXRvcDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xuICAgICAgICBib3JkZXItbGVmdDogLjllbSBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC40NSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcixcbiAgICAudi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA1ZW07XG4gICAgICAgIGhlaWdodDogNWVtO1xuICAgIH1cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIHYtc2VsZWN0XCIgOmNsYXNzPVwiZHJvcGRvd25DbGFzc2VzXCI+XG4gICAgICAgIDxkaXYgcmVmPVwidG9nZ2xlXCIgQG1vdXNlZG93bi5wcmV2ZW50PVwidG9nZ2xlRHJvcGRvd25cIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBjbGVhcmZpeFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LWlmPVwiIXNlYXJjaGFibGUgJiYgaXNWYWx1ZUVtcHR5XCI+XG4gICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX1cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGVkLXRhZ1wiIHYtZm9yPVwiKG9wdGlvbixpbmRleCkgaW4gdmFsdWVBc0FycmF5XCIgdi1iaW5kOmtleT1cImluZGV4XCI+XG4gICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxuICAgICAgICAgIDxidXR0b24gdi1pZj1cIm11bHRpcGxlXCIgQGNsaWNrPVwic2VsZWN0KG9wdGlvbilcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgOmRlYm91bmNlPVwiZGVib3VuY2VcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwic2VhcmNoYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRlbGV0ZT1cIm1heWJlRGVsZXRlVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZXNjPVwib25Fc2NhcGVcIlxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi51cC5wcmV2ZW50PVwidHlwZUFoZWFkVXBcIlxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kb3duLnByZXZlbnQ9XCJ0eXBlQWhlYWREb3duXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyLnByZXZlbnQ9XCJ0eXBlQWhlYWRTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBAYmx1cj1cIm9wZW4gPSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cIm9wZW4gPSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwic2VhcmNoUGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBpc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bycgfVwiXG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgIDxpIHJlZj1cIm9wZW5JbmRpY2F0b3JcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJvcGVuLWluZGljYXRvclwiPjwvaT5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cInNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiIHYtc2hvdz1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx1bCByZWY9XCJkcm9wZG93bk1lbnVcIiB2LXNob3c9XCJvcGVuXCIgOnRyYW5zaXRpb249XCJ0cmFuc2l0aW9uXCIgY2xhc3M9XCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgJ21heC1oZWlnaHQnOiBtYXhIZWlnaHQgfVwiPlxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiKG9wdGlvbixpbmRleCkgaW4gZmlsdGVyZWRPcHRpb25zXCIgdi1iaW5kOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSB0eXBlQWhlYWRQb2ludGVyIH1cIlxuICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XCJ0eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICA8YSBAbW91c2Vkb3duLnByZXZlbnQ9XCJzZWxlY3Qob3B0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSB0cmFuc2l0aW9uPVwiZmFkZVwiIHYtaWY9XCIhZmlsdGVyZWRPcHRpb25zLmxlbmd0aFwiIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cImZhZGVcIiB2LWlmPVwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cIm5vLW9wdGlvbnNcIj5Tb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy48L3Nsb3Q+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XG4gICAgaW1wb3J0IHBvaW50ZXJTY3JvbGwgZnJvbSAnYmFzZS9taXhpbnMvcG9pbnRlclNjcm9sbCdcbiAgICBpbXBvcnQgdHlwZUFoZWFkUG9pbnRlciBmcm9tICdiYXNlL21peGlucy90eXBlQWhlYWRQb2ludGVyJ1xuICAgIGltcG9ydCBhamF4IGZyb20gJ2Jhc2UvbWl4aW5zL2FqYXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1peGluczogW3BvaW50ZXJTY3JvbGwsIHR5cGVBaGVhZFBvaW50ZXIsIGFqYXhdLFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnRhaW5zIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUuIFZlcnkgc2ltaWxhciB0byBhXG4gICAgICAgICAgICAgKiBgdmFsdWVgIGF0dHJpYnV0ZSBvbiBhbiA8aW5wdXQ+LiBJbiBtb3N0IGNhc2VzLCB5b3UnbGwgd2FudFxuICAgICAgICAgICAgICogdG8gc2V0IHRoaXMgYXMgYSB0d28td2F5IGJpbmRpbmcsIHVzaW5nIDp2YWx1ZS5zeW5jLiBIb3dldmVyLFxuICAgICAgICAgICAgICogdGhpcyB3aWxsIG5vdCB3b3JrIHdpdGggVnVleCwgaW4gd2hpY2ggY2FzZSB5b3UnbGwgbmVlZCB0byB1c2VcbiAgICAgICAgICAgICAqIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R8fFN0cmluZ3x8bnVsbH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFuIGFycmF5IG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB0byBiZSB1c2VkIGFzIGRyb3Bkb3duIGNob2ljZXMuXG4gICAgICAgICAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMsIHZ1ZS1zZWxlY3Qgd2lsbCBsb29rIGZvclxuICAgICAgICAgICAgICogYSBgbGFiZWxgIGtleSAoZXguIFt7bGFiZWw6ICdUaGlzIGlzIEZvbycsIHZhbHVlOiAnZm9vJ31dKS4gQVxuICAgICAgICAgICAgICogY3VzdG9tIGxhYmVsIGtleSBjYW4gYmUgc2V0IHdpdGggdGhlIGBsYWJlbGAgcHJvcC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXRzIHRoZSBtYXgtaGVpZ2h0IHByb3BlcnR5IG9uIHRoZSBkcm9wZG93biBsaXN0LlxuICAgICAgICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG1heEhlaWdodDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnNDAwcHgnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGZpbHRlcmluZyB0aGUgb3B0aW9ucy5cbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBtdWx0aXBsZWAgYXR0cmlidXRlIG9uIGEgYDxzZWxlY3Q+YCBpbnB1dC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG11bHRpcGxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBvbiBhbiBgPGlucHV0PmAuXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXRzIGEgVnVlIHRyYW5zaXRpb24gcHJvcGVydHkgb24gdGhlIGAuZHJvcGRvd24tbWVudWAuIHZ1ZS1zZWxlY3RcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGluY2x1ZGUgQ1NTIGZvciB0cmFuc2l0aW9ucywgeW91J2xsIG5lZWQgdG8gYWRkIHRoZW0geW91cnNlbGYuXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdleHBhbmQnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgY2xlYXJpbmcgdGhlIHNlYXJjaCB0ZXh0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGVsbHMgdnVlLXNlbGVjdCB3aGF0IGtleSB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIG9wdGlvblxuICAgICAgICAgICAgICogbGFiZWxzIHdoZW4gZWFjaCBgb3B0aW9uYCBpcyBhbiBvYmplY3QuXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGFiZWwnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxiYWNrIHRvIGdlbmVyYXRlIHRoZSBsYWJlbCB0ZXh0LiBJZiB7b3B0aW9ufVxuICAgICAgICAgICAgICogaXMgYW4gb2JqZWN0LCByZXR1cm5zIG9wdGlvblt0aGlzLmxhYmVsXSBieSBkZWZhdWx0LlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgZGVmYXVsdChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbCAmJiBvcHRpb25bdGhpcy5sYWJlbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3RoaXMubGFiZWxdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGVhY2ggdGltZSB0aGUgc2VsZWN0ZWRcbiAgICAgICAgICAgICAqIHZhbHVlKHMpIGNoYW5nZS4gV2hlbiBpbnRlZ3JhdGluZyB3aXRoIFZ1ZXgsIHVzZSB0aGlzIGNhbGxiYWNrIHRvIHRyaWdnZXJcbiAgICAgICAgICAgICAqIGFuIGFjdGlvbiwgcmF0aGVyIHRoYW4gdXNpbmcgOnZhbHVlLnN5bmMgdG8gcmV0cmVpdmUgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAgICAgICAgICogQGRlZmF1bHQge251bGx9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uQ2hhbmdlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNoYW5nZVBhcmFtOiB7fSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBjcmVhdGluZyBvcHRpb25zIGZyb20gc2VhcmNoSW5wdXQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGFnZ2FibGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZW4gdHJ1ZSwgbmV3bHkgY3JlYXRlZCB0YWdzIHdpbGwgYmUgYWRkZWQgdG9cbiAgICAgICAgICAgICAqIHRoZSBvcHRpb25zIGxpc3QuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHVzaFRhZ3M6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZXIgZGVmaW5lZCBmdW5jdGlvbiBmb3IgYWRkaW5nIE9wdGlvbnNcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3JlYXRlT3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKG5ld09wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7W3RoaXMubGFiZWxdOiBuZXdPcHRpb259XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld09wdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2hlbiBmYWxzZSwgdXBkYXRpbmcgdGhlIG9wdGlvbnMgd2lsbCBub3QgcmVzZXQgdGhlIHNlbGVjdCB2YWx1ZVxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlc2V0T25PcHRpb25zQ2hhbmdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB2YWx1ZSh2YWwsIG9sZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0aW9uKHZhbCwgb2xkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA/IHRoaXMub25DaGFuZ2UodmFsLCB0aGlzLmNoYW5nZVBhcmFtKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHZhbCAhPT0gb2xkID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy50YWdnYWJsZSAmJiB0aGlzLnJlc2V0T25PcHRpb25zQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5tdWx0aXBsZSA/IFtdIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtdWx0aXBsZSh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbCA/IFtdIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZWxlY3QgYSBnaXZlbiBvcHRpb24uXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3Qob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3Qob3B0aW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSB0aGlzLmNyZWF0ZU9wdGlvbihvcHRpb24pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hUYWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtvcHRpb25dXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub25BZnRlclNlbGVjdChvcHRpb24pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlLXNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlc2VsZWN0KG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSAtMVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09IG9wdGlvbiB8fCB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWxbdGhpcy5sYWJlbF0gPT09IG9wdGlvblt0aGlzLmxhYmVsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKHJlZik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSlcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGVkIGZyb20gdGhpcy5zZWxlY3QgYWZ0ZXIgZWFjaCBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxuICAgICAgICAgICAgICogQHBhcmFtICB7RXZlbnR9IGVcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRvZ2dsZURyb3Bkb3duKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuJHJlZnMub3BlbkluZGljYXRvciB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5zZWFyY2ggfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMudG9nZ2xlIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKCkgLy8gZHJvcGRvd24gd2lsbCBjbG9zZSBvbiBibHVyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZSBnaXZlbiBvcHRpb24gaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9ICBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgVHJ1ZSB3aGVuIHNlbGVjdGVkIHx8IEZhbHNlIG90aGVyd2lzZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpc09wdGlvblNlbGVjdGVkKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA9PT0gb3B0aW9uXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHRoZXJlIGlzIGFueSB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsIHJlbW92ZSBpdC5cbiAgICAgICAgICAgICAqIE90aGVyd2lzZSwgYmx1ciB0aGUgc2VhcmNoIGlucHV0IHRvIGNsb3NlIHRoZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbkVzY2FwZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWxldGUgdGhlIHZhbHVlIG9uIERlbGV0ZSBrZXlwcmVzcyB3aGVuIHRoZXJlIGlzIG5vXG4gICAgICAgICAgICAgKiB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsICYgdGhlcmUncyB0YWdzIHRvIGRlbGV0ZVxuICAgICAgICAgICAgICogQHJldHVybiB7dGhpcy52YWx1ZX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJHJlZnMuc2VhcmNoLnZhbHVlLmxlbmd0aCAmJiB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy52YWx1ZS5wb3AoKSA6IHRoaXMuc2VsZWN0aW9uID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGV0ZXJtaW5lIGlmIGFuIG9wdGlvbiBleGlzdHNcbiAgICAgICAgICAgICAqIHdpdGhpbiB0aGlzLm9wdGlvbnMgYXJyYXkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvcHRpb25FeGlzdHMob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENsYXNzZXMgdG8gYmUgb3V0cHV0IG9uIC5kcm9wZG93blxuICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkcm9wZG93bkNsYXNzZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0aGlzLnNlYXJjaGFibGUsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMubG9hZGluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBwbGFjZWhvbGRlciBzdHJpbmcgaWYgaXQncyBzZXRcbiAgICAgICAgICAgICAqICYgdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFBsYWNlaG9sZGVyIHRleHRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBvcHRpb25zLCBmaWx0ZXJlZFxuICAgICAgICAgICAgICogYnkgdGhlIHNlYXJjaCBlbGVtZW50cyB2YWx1ZS4gSWYgdGFnZ2luZ1xuICAgICAgICAgICAgICogdHJ1ZSwgdGhlIHNlYXJjaCB0ZXh0IHdpbGwgYmUgcHJlcGVuZGVkXG4gICAgICAgICAgICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZpbHRlcmVkT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbltzZWxmLmxhYmVsXS5pbmRleE9mKHNlbGYuc2VhcmNoKSAhPT0gLTFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25FeGlzdHModGhpcy5zZWFyY2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudW5zaGlmdCh0aGlzLnNlYXJjaClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlcmUgYXJlbid0IGFueSBvcHRpb25zIHNlbGVjdGVkLlxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaXNWYWx1ZUVtcHR5KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyh0aGlzLnNlbGVjdGlvbikubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlbGVjdGlvbi5sZW5ndGhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlIGluIGFycmF5IGZvcm1hdC5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YWx1ZUFzQXJyYXkoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RoaXMuc2VsZWN0aW9uXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzZWxlY3QudnVlPzQ2YTk4OGE0IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxpbWcgOnNyYz1cImRlZmF1bHRJbWFnZVwiIGFsdD1cImF0aGxldGUgcHJvZmlsZSBpbWFnZVwiIHdpZHRoPVwiMTEwcHhcIiB2LWlmPVwiIWltYWdlRmlsZVwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJpbWFnZUZpbGVcIiBhbHQ9XCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIiB3aWR0aD1cIjExMHB4XCIgdi1pZj1cImltYWdlRmlsZVwiPlxuXG4gICAgICAgIDxicj48YnI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJpbWFnZS11cGxvYWRlclwiIGNsYXNzPVwiaW5wdXRmaWxlXCIgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZVwiXG4gICAgICAgICAgICAgICByZWY9XCJmaWxlaW5wdXRcIi8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJpbWFnZS11cGxvYWRlclwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PGkgY2xhc3M9XCJmYSBmYS1jbG91ZFwiPjwvaT5cbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAgIC5pbnB1dGZpbGUge1xuICAgICAgICB3aWR0aDogMC4xcHg7XG4gICAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgLmlucHV0ZmlsZSArIGxhYmVsIHtcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdCB0eXBlPVwidGV4dC9iYWJlbFwiPlxuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZToge30sXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdpbWFnZS8qJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ0blRleHQ6IHt9LFxuICAgICAgICAgICAgZXJyb3JWYWxpZGF0aW9uTXNnOiB7fSxcbiAgICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDExMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRJbWFnZToge31cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGltYWdlOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VGaWxlOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uRmlsZUNoYW5nZShlKXtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUltYWdlKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCh0aGlzLmFjY2VwdGVkRmlsZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2UtdXBsb2FkZXJcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290Lndhcm5pbmdUb2FzdCh0aGlzLmVycm9yVmFsaWRhdGlvbk1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VGaWxlID0gdGhpcy5kZWZhdWx0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2bS5pbWFnZUZpbGUgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEZpbGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5maWxlaW5wdXQuZmlsZXNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkbmMtaW1hZ2UtdXBsb2FkLnZ1ZT80OGIwZmZmNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRwcm9wczoge1xuXHRcdC8qKlxuXHRcdCAqIFRvZ2dsZXMgdGhlIGFkZGluZyBvZiBhICdsb2FkaW5nJyBjbGFzcyB0byB0aGUgbWFpblxuXHRcdCAqIC52LXNlbGVjdCB3cmFwcGVyLiBVc2VmdWwgdG8gY29udHJvbCBVSSBzdGF0ZSB3aGVuXG5cdFx0ICogcmVzdWx0cyBhcmUgYmVpbmcgcHJvY2Vzc2VkIHRocm91Z2ggQUpBWC5cblx0XHQgKi9cblx0XHRsb2FkaW5nOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQWNjZXB0IGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlXG5cdFx0ICogcnVuIHdoZW4gdGhlIHNlYXJjaCB0ZXh0IGNoYW5nZXMuXG5cdFx0ICpcblx0XHQgKiBsb2FkaW5nKCkgYWNjZXB0cyBhIGJvb2xlYW4gdmFsdWUsIGFuZCBjYW5cblx0XHQgKiBiZSB1c2VkIHRvIHRvZ2dsZSBhIGxvYWRpbmcgY2xhc3MgZnJvbVxuXHRcdCAqIHRoZSBvblNlYXJjaCBjYWxsYmFjay5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c2VhcmNofSAgU3RyaW5nICAgICAgICAgIEN1cnJlbnQgc2VhcmNoIHRleHRcblx0XHQgKiBAcGFyYW0ge2xvYWRpbmd9IEZ1bmN0aW9uKGJvb2wpICBUb2dnbGUgbG9hZGluZyBjbGFzc1xuXHRcdCAqL1xuXHRcdG9uU2VhcmNoOiB7XG5cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcblx0XHQgKiBpbnZva2luZyB0aGlzLm9uU2VhcmNoKCkuIFVzZWQgdG8gcHJldmVudFxuXHRcdCAqIHNlbmRpbmcgYW4gQUpBWCByZXF1ZXN0IHVudGlsIGlucHV0IGlzIGNvbXBsZXRlLlxuXHRcdCAqL1xuXHRcdGRlYm91bmNlOiB7XG5cdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRkZWZhdWx0OiAwXG5cdFx0fVxuXHR9LFxuXG5cdHdhdGNoOiB7XG5cdFx0LyoqXG5cdFx0ICogSWYgYSBjYWxsYmFjayAmIHNlYXJjaCB0ZXh0IGhhcyBiZWVuIHByb3ZpZGVkLFxuXHRcdCAqIGludm9rZSB0aGUgb25TZWFyY2ggY2FsbGJhY2suXG5cdFx0ICovXG5cdFx0c2VhcmNoKCkge1xuXHRcdFx0aWYgKHRoaXMuc2VhcmNoLmxlbmd0aCA+IDAgJiYgdGhpcy5vblNlYXJjaCkge1xuXHRcdFx0XHR0aGlzLm9uU2VhcmNoKHRoaXMuc2VhcmNoLCB0aGlzLnRvZ2dsZUxvYWRpbmcpXG5cdFx0XHR9XG5cdFx0fSxcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0LyoqXG5cdFx0ICogVG9nZ2xlIHRoaXMubG9hZGluZy4gT3B0aW9uYWxseSBwYXNzIGEgYm9vbGVhblxuXHRcdCAqIHZhbHVlLiBJZiBubyB2YWx1ZSBpcyBwcm92aWRlZCwgdGhpcy5sb2FkaW5nXG5cdFx0ICogd2lsbCBiZSBzZXQgdG8gdGhlIG9wcG9zaXRlIG9mIGl0J3MgY3VycmVudCB2YWx1ZS5cblx0XHQgKiBAcGFyYW0gdG9nZ2xlIEJvb2xlYW5cblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHR0b2dnbGVMb2FkaW5nKHRvZ2dsZSA9IG51bGwpIHtcblx0XHRcdGlmICh0b2dnbGUgPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZ1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyA9IHRvZ2dsZVxuXHRcdH1cblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgd2F0Y2g6IHtcbiAgICB0eXBlQWhlYWRQb2ludGVyKCkge1xuICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBBZGp1c3QgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgZHJvcGRvd24gbGlzdFxuICAgICAqIGlmIHRoZSBjdXJyZW50IHBvaW50ZXIgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICAgKiBvdmVyZmxvdyBib3VuZHMuXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgbWF5YmVBZGp1c3RTY3JvbGwoKSB7XG4gICAgICBsZXQgcGl4ZWxzVG9Qb2ludGVyVG9wID0gdGhpcy5waXhlbHNUb1BvaW50ZXJUb3AoKVxuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlckJvdHRvbSA9IHRoaXMucGl4ZWxzVG9Qb2ludGVyQm90dG9tKClcblxuICAgICAgaWYgKCBwaXhlbHNUb1BvaW50ZXJUb3AgPD0gdGhpcy52aWV3cG9ydCgpLnRvcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyggcGl4ZWxzVG9Qb2ludGVyVG9wIClcbiAgICAgIH0gZWxzZSBpZiAocGl4ZWxzVG9Qb2ludGVyQm90dG9tID49IHRoaXMudmlld3BvcnQoKS5ib3R0b20pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8oIHRoaXMudmlld3BvcnQoKS50b3AgKyB0aGlzLnBvaW50ZXJIZWlnaHQoKSApXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgdG9wIG9mIHRoZSBkcm9wZG93blxuICAgICAqIGxpc3QgdG8gdGhlIHRvcCBvZiB0aGUgY3VycmVudCBwb2ludGVyIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwaXhlbHNUb1BvaW50ZXJUb3AoKSB7XG4gICAgICBsZXQgcGl4ZWxzVG9Qb2ludGVyVG9wID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBaGVhZFBvaW50ZXI7IGkrKykge1xuICAgICAgICBwaXhlbHNUb1BvaW50ZXJUb3AgKz0gdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuY2hpbGRyZW5baV0ub2Zmc2V0SGVpZ2h0XG4gICAgICB9XG4gICAgICByZXR1cm4gcGl4ZWxzVG9Qb2ludGVyVG9wXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgdG9wIG9mIHRoZSBkcm9wZG93blxuICAgICAqIGxpc3QgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY3VycmVudCBwb2ludGVyIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcGl4ZWxzVG9Qb2ludGVyQm90dG9tKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGl4ZWxzVG9Qb2ludGVyVG9wKCkgKyB0aGlzLnBvaW50ZXJIZWlnaHQoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb2Zmc2V0SGVpZ2h0IG9mIHRoZSBjdXJyZW50IHBvaW50ZXIgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHBvaW50ZXJIZWlnaHQoKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LmNoaWxkcmVuW3RoaXMudHlwZUFoZWFkUG9pbnRlcl1cbiAgICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiAwXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgdmlld2FibGUgcG9ydGlvbiBvZiB0aGUgZHJvcGRvd25NZW51LlxuICAgICAqIEByZXR1cm5zIHt7dG9wOiAoc3RyaW5nfCp8bnVtYmVyKSwgYm90dG9tOiAqfX1cbiAgICAgKi9cbiAgICB2aWV3cG9ydCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wLFxuICAgICAgICBib3R0b206IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51Lm9mZnNldEhlaWdodCArIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdGhlIGRyb3Bkb3duTWVudSB0byBhIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSBwb3NpdGlvblxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKHBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wID0gcG9zaXRpb25cbiAgICB9LFxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvcG9pbnRlclNjcm9sbC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlQWhlYWRQb2ludGVyOiAtMVxuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGZpbHRlcmVkT3B0aW9ucygpIHtcbiAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlciA9IDBcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIE1vdmUgdGhlIHR5cGVBaGVhZFBvaW50ZXIgdmlzdWFsbHkgdXAgdGhlIGxpc3QgYnlcbiAgICAgKiBzdWJ0cmFjdGluZyB0aGUgY3VycmVudCBpbmRleCBieSBvbmUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0eXBlQWhlYWRVcCgpIHtcbiAgICAgIGlmICh0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPiAwKSB7XG4gICAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlci0tXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xuICAgICAgICAgIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vdmUgdGhlIHR5cGVBaGVhZFBvaW50ZXIgdmlzdWFsbHkgZG93biB0aGUgbGlzdCBieVxuICAgICAqIGFkZGluZyB0aGUgY3VycmVudCBpbmRleCBieSBvbmUuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0eXBlQWhlYWREb3duKCkge1xuICAgICAgaWYgKHRoaXMudHlwZUFoZWFkUG9pbnRlciA8IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy50eXBlQWhlYWRQb2ludGVyKytcbiAgICAgICAgaWYoIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwgKSB7XG4gICAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBvcHRpb24gYXQgdGhlIGN1cnJlbnQgdHlwZUFoZWFkUG9pbnRlciBwb3NpdGlvbi5cbiAgICAgKiBPcHRpb25hbGx5IGNsZWFyIHRoZSBzZWFyY2ggaW5wdXQgb24gc2VsZWN0aW9uLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHlwZUFoZWFkU2VsZWN0KCkge1xuICAgICAgaWYoIHRoaXMuZmlsdGVyZWRPcHRpb25zWyB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgXSApIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoIHRoaXMuZmlsdGVyZWRPcHRpb25zWyB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgXSApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCl7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRoaXMuc2VhcmNoKVxuICAgICAgfVxuXG4gICAgICBpZiggdGhpcy5jbGVhclNlYXJjaE9uU2VsZWN0ICkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXIuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pbnB1dGZpbGUge1xcbiAgICB3aWR0aDogMC4xcHg7XFxuICAgIGhlaWdodDogMC4xcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcbi5pbnB1dGZpbGUgKyBsYWJlbCB7XFxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT80OGIwZmZmNlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBYUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJkbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8aW1nIDpzcmM9XFxcImRlZmF1bHRJbWFnZVxcXCIgYWx0PVxcXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcXFwiIHdpZHRoPVxcXCIxMTBweFxcXCIgdi1pZj1cXFwiIWltYWdlRmlsZVxcXCI+XFxuICAgICAgICA8aW1nIDpzcmM9XFxcImltYWdlRmlsZVxcXCIgYWx0PVxcXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcXFwiIHdpZHRoPVxcXCIxMTBweFxcXCIgdi1pZj1cXFwiaW1hZ2VGaWxlXFxcIj5cXG5cXG4gICAgICAgIDxicj48YnI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgbmFtZT1cXFwiZmlsZVxcXCIgaWQ9XFxcImltYWdlLXVwbG9hZGVyXFxcIiBjbGFzcz1cXFwiaW5wdXRmaWxlXFxcIiBAY2hhbmdlPVxcXCJvbkZpbGVDaGFuZ2VcXFwiXFxuICAgICAgICAgICAgICAgcmVmPVxcXCJmaWxlaW5wdXRcXFwiLz5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImltYWdlLXVwbG9hZGVyXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2xvdWRcXFwiPjwvaT5cXG4gICAgICAgICAgICA8c3Bhbj57e2J0blRleHR9fTwvc3Bhbj48L2xhYmVsPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZT5cXG4gICAgLmlucHV0ZmlsZSB7XFxuICAgICAgICB3aWR0aDogMC4xcHg7XFxuICAgICAgICBoZWlnaHQ6IDAuMXB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgfVxcblxcbiAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2JhYmVsXFxcIj5cXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHZhbHVlOiB7fSxcXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2ltYWdlLyonXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBidG5UZXh0OiB7fSxcXG4gICAgICAgICAgICBlcnJvclZhbGlkYXRpb25Nc2c6IHt9LFxcbiAgICAgICAgICAgIHdpZHRoOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMTEwXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBpbWFnZToge30sXFxuICAgICAgICAgICAgZGVmYXVsdEltYWdlOiB7fVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgaW1hZ2U6IGZ1bmN0aW9uICh2YWwpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB2YWw7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGRhdGEoKXtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBpbWFnZUZpbGU6IG51bGxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIG9uRmlsZUNoYW5nZShlKXtcXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gZS50YXJnZXQuZmlsZXMgfHwgZS5kYXRhVHJhbnNmZXIuZmlsZXM7XFxuICAgICAgICAgICAgICAgIGlmICghZmlsZXMubGVuZ3RoKVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUltYWdlKGZpbGVzWzBdKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGNyZWF0ZUltYWdlKGZpbGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlLnR5cGUubWF0Y2godGhpcy5hY2NlcHRlZEZpbGVzKSkge1xcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcImltYWdlLXVwbG9hZGVyXFxcIikudmFsdWUgPSBcXFwiXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3Qud2FybmluZ1RvYXN0KHRoaXMuZXJyb3JWYWxpZGF0aW9uTXNnKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VGaWxlID0gdGhpcy5kZWZhdWx0SW1hZ2VcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB2bS5pbWFnZUZpbGUgPSBlLnRhcmdldC5yZXN1bHQ7XFxuICAgICAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBnZXRGaWxlKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmZpbGVpbnB1dC5maWxlc1swXTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXNlbGVjdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA2cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG59XFxuLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjUpO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAuMjVlbSAwLjI1ZW0gMCAwO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbn1cXG4udi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBib3R0b206IDFweDtcXG59XFxuLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cXG4udi1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC4yNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgIGN1cnNvcjogdGV4dDtcXG59XFxuLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4udi1zZWxlY3QgPiAuZHJvcGRvd24tbWVudSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIHtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXJnaW46IDRweCAxcHggMHB4IDNweDtcXG4gICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxufVxcbi52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXSxcXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAuNWVtO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBjbGVhcjogbm9uZTtcXG59XFxuLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtc2VsZWN0IGxpIGEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi52LXNlbGVjdCAuYWN0aXZlIGEge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIC4xKTtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcbi52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXFxuLnYtc2VsZWN0IGxpOmhvdmVyID4gYSB7XFxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG4udi1zZWxlY3QgLnNwaW5uZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgZm9udC1zaXplOiA1cHg7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICBib3JkZXItcmlnaHQ6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxufVxcbi52LXNlbGVjdC5sb2FkaW5nIC5zcGlubmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLnYtc2VsZWN0IC5zcGlubmVyLFxcbi52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgaGVpZ2h0OiA1ZW07XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxuMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG59XFxuQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxuMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/NDZhOTg4YTRcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLHdFQUFBO0lBQUEsZ0VBQUE7SUFDQSw4RUFBQTtZQUFBLHNFQUFBO0lBQ0EsV0FBQTtJQUNBLGdDQUFBO0lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7SUFDQSxtQ0FBQTtJQUNBLG9CQUFBO0lBQ0EsZ0NBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtJQUNBLHdFQUFBO0lBQUEsZ0VBQUE7SUFDQSw4RUFBQTtZQUFBLHNFQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esd0NBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFFQTtJQUNBLGFBQUE7Q0FDQTtBQUVBO0lBQ0Esb0JBQUE7SUFDQSw2QkFBQTtJQUNBLDhCQUFBO0NBQ0E7QUFFQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTs7SUFFQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsaUNBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTs7SUFFQSxvQkFBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLCtDQUFBO0lBQ0EsaURBQUE7SUFDQSxrREFBQTtJQUNBLDhDQUFBO0lBQ0EsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLHVEQUFBO1lBQUEsK0NBQUE7SUFDQSxnQ0FBQTtJQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7Q0FDQTtBQUVBOztJQUVBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0FBQ0E7UUFDQSxnQ0FBQTtnQkFBQSx3QkFBQTtDQUNBO0FBQ0E7UUFDQSxrQ0FBQTtnQkFBQSwwQkFBQTtDQUNBO0NBQ0E7QUFFQTtBQUNBO1FBQ0EsZ0NBQUE7Z0JBQUEsd0JBQUE7Q0FDQTtBQUNBO1FBQ0Esa0NBQUE7Z0JBQUEsMEJBQUE7Q0FDQTtDQUNBXCIsXCJmaWxlXCI6XCJzZWxlY3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjxzdHlsZT5cXG4gICAgLnYtc2VsZWN0IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogNnB4O1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuNSk7XFxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICAgICAgYm90dG9tOiAxcHg7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC4yNik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdC5zZWFyY2hhYmxlIC5kcm9wZG93bi10b2dnbGUge1xcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgPiAuZHJvcGRvd24tbWVudSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xcbiAgICAgICAgY29sb3I6ICMzMzM7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xcbiAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXSxcXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xcbiAgICAgICAgd2lkdGg6IDEwZW07XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgY2xlYXI6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpkaXNhYmxlZCB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IGxpIGEge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuYWN0aXZlIGEge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAuMSk7XFxuICAgICAgICBjb2xvcjogIzMzMztcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLmhpZ2hsaWdodCBhLFxcbiAgICAudi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICBjb2xvcjogIzMzMztcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNXB4O1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDVweDtcXG4gICAgICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAgICAgYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5zcGlubmVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyLFxcbiAgICAudi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgd2lkdGg6IDVlbTtcXG4gICAgICAgIGhlaWdodDogNWVtO1xcbiAgICB9XFxuXFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICB9XFxuICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcbiAgICAgICAgMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc3R5bGU+XFxuXFxuPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biB2LXNlbGVjdFxcXCIgOmNsYXNzPVxcXCJkcm9wZG93bkNsYXNzZXNcXFwiPlxcbiAgICAgICAgPGRpdiByZWY9XFxcInRvZ2dsZVxcXCIgQG1vdXNlZG93bi5wcmV2ZW50PVxcXCJ0b2dnbGVEcm9wZG93blxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZSBjbGVhcmZpeFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHYtaWY9XFxcIiFzZWFyY2hhYmxlICYmIGlzVmFsdWVFbXB0eVxcXCI+XFxuICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XFxuICAgICAgICA8L3NwYW4+XFxuXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlbGVjdGVkLXRhZ1xcXCIgdi1mb3I9XFxcIihvcHRpb24saW5kZXgpIGluIHZhbHVlQXNBcnJheVxcXCIgdi1iaW5kOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XFxuICAgICAgICAgIDxidXR0b24gdi1pZj1cXFwibXVsdGlwbGVcXFwiIEBjbGljaz1cXFwic2VsZWN0KG9wdGlvbilcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L3NwYW4+XFxuXFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgICByZWY9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpkZWJvdW5jZT1cXFwiZGVib3VuY2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcInNlYXJjaGFibGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kZWxldGU9XFxcIm1heWJlRGVsZXRlVmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZXNjPVxcXCJvbkVzY2FwZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLnVwLnByZXZlbnQ9XFxcInR5cGVBaGVhZFVwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZG93bi5wcmV2ZW50PVxcXCJ0eXBlQWhlYWREb3duXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyLnByZXZlbnQ9XFxcInR5cGVBaGVhZFNlbGVjdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBibHVyPVxcXCJvcGVuID0gZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XFxcIm9wZW4gPSB0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cXFwic2VhcmNoUGxhY2Vob2xkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcInsgd2lkdGg6IGlzVmFsdWVFbXB0eSA/ICcxMDAlJyA6ICdhdXRvJyB9XFxcIlxcbiAgICAgICAgICAgID5cXG5cXG4gICAgICAgICAgICA8aSByZWY9XFxcIm9wZW5JbmRpY2F0b3JcXFwiIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgY2xhc3M9XFxcIm9wZW4taW5kaWNhdG9yXFxcIj48L2k+XFxuXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwic3Bpbm5lclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiIHYtc2hvdz1cXFwibG9hZGluZ1xcXCI+TG9hZGluZy4uLjwvZGl2PlxcbiAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPHVsIHJlZj1cXFwiZHJvcGRvd25NZW51XFxcIiB2LXNob3c9XFxcIm9wZW5cXFwiIDp0cmFuc2l0aW9uPVxcXCJ0cmFuc2l0aW9uXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCJcXG4gICAgICAgICAgICA6c3R5bGU9XFxcInsgJ21heC1oZWlnaHQnOiBtYXhIZWlnaHQgfVxcXCI+XFxuICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCIob3B0aW9uLGluZGV4KSBpbiBmaWx0ZXJlZE9wdGlvbnNcXFwiIHYtYmluZDprZXk9XFxcImluZGV4XFxcIlxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgYWN0aXZlOiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IHR5cGVBaGVhZFBvaW50ZXIgfVxcXCJcXG4gICAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cXFwidHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgQG1vdXNlZG93bi5wcmV2ZW50PVxcXCJzZWxlY3Qob3B0aW9uKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSB0cmFuc2l0aW9uPVxcXCJmYWRlXFxcIiB2LWlmPVxcXCIhZmlsdGVyZWRPcHRpb25zLmxlbmd0aFxcXCIgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvbGk+XFxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XFxcImZhZGVcXFwiIHYtaWY9XFxcIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJuby1vcHRpb25zXFxcIj5Tb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy48L3Nsb3Q+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2JhYmVsXFxcIj5cXG4gICAgaW1wb3J0IHBvaW50ZXJTY3JvbGwgZnJvbSAnYmFzZS9taXhpbnMvcG9pbnRlclNjcm9sbCdcXG4gICAgaW1wb3J0IHR5cGVBaGVhZFBvaW50ZXIgZnJvbSAnYmFzZS9taXhpbnMvdHlwZUFoZWFkUG9pbnRlcidcXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnYmFzZS9taXhpbnMvYWpheCdcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICAgICAgbWl4aW5zOiBbcG9pbnRlclNjcm9sbCwgdHlwZUFoZWFkUG9pbnRlciwgYWpheF0sXFxuXFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENvbnRhaW5zIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUuIFZlcnkgc2ltaWxhciB0byBhXFxuICAgICAgICAgICAgICogYHZhbHVlYCBhdHRyaWJ1dGUgb24gYW4gPGlucHV0Pi4gSW4gbW9zdCBjYXNlcywgeW91J2xsIHdhbnRcXG4gICAgICAgICAgICAgKiB0byBzZXQgdGhpcyBhcyBhIHR3by13YXkgYmluZGluZywgdXNpbmcgOnZhbHVlLnN5bmMuIEhvd2V2ZXIsXFxuICAgICAgICAgICAgICogdGhpcyB3aWxsIG5vdCB3b3JrIHdpdGggVnVleCwgaW4gd2hpY2ggY2FzZSB5b3UnbGwgbmVlZCB0byB1c2VcXG4gICAgICAgICAgICAgKiB0aGUgb25DaGFuZ2UgY2FsbGJhY2sgcHJvcGVydHkuXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdHx8U3RyaW5nfHxudWxsfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHZhbHVlOiB7XFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEFuIGFycmF5IG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB0byBiZSB1c2VkIGFzIGRyb3Bkb3duIGNob2ljZXMuXFxuICAgICAgICAgICAgICogSWYgeW91IGFyZSB1c2luZyBhbiBhcnJheSBvZiBvYmplY3RzLCB2dWUtc2VsZWN0IHdpbGwgbG9vayBmb3JcXG4gICAgICAgICAgICAgKiBhIGBsYWJlbGAga2V5IChleC4gW3tsYWJlbDogJ1RoaXMgaXMgRm9vJywgdmFsdWU6ICdmb28nfV0pLiBBXFxuICAgICAgICAgICAgICogY3VzdG9tIGxhYmVsIGtleSBjYW4gYmUgc2V0IHdpdGggdGhlIGBsYWJlbGAgcHJvcC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFNldHMgdGhlIG1heC1oZWlnaHQgcHJvcGVydHkgb24gdGhlIGRyb3Bkb3duIGxpc3QuXFxuICAgICAgICAgICAgICogQGRlcHJlY2F0ZWRcXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG1heEhlaWdodDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGZpbHRlcmluZyB0aGUgb3B0aW9ucy5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBtdWx0aXBsZWAgYXR0cmlidXRlIG9uIGEgYDxzZWxlY3Q+YCBpbnB1dC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG11bHRpcGxlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBvbiBhbiBgPGlucHV0PmAuXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBTZXRzIGEgVnVlIHRyYW5zaXRpb24gcHJvcGVydHkgb24gdGhlIGAuZHJvcGRvd24tbWVudWAuIHZ1ZS1zZWxlY3RcXG4gICAgICAgICAgICAgKiBkb2VzIG5vdCBpbmNsdWRlIENTUyBmb3IgdHJhbnNpdGlvbnMsIHlvdSdsbCBuZWVkIHRvIGFkZCB0aGVtIHlvdXJzZWxmLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdleHBhbmQnXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGNsZWFyaW5nIHRoZSBzZWFyY2ggdGV4dCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBjbGVhclNlYXJjaE9uU2VsZWN0OiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFRlbGxzIHZ1ZS1zZWxlY3Qgd2hhdCBrZXkgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyBvcHRpb25cXG4gICAgICAgICAgICAgKiBsYWJlbHMgd2hlbiBlYWNoIGBvcHRpb25gIGlzIGFuIG9iamVjdC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGxhYmVsOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2xhYmVsJ1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ2FsbGJhY2sgdG8gZ2VuZXJhdGUgdGhlIGxhYmVsIHRleHQuIElmIHtvcHRpb259XFxuICAgICAgICAgICAgICogaXMgYW4gb2JqZWN0LCByZXR1cm5zIG9wdGlvblt0aGlzLmxhYmVsXSBieSBkZWZhdWx0LlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsICYmIG9wdGlvblt0aGlzLmxhYmVsXSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3RoaXMubGFiZWxdXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIHRoZSBzZWxlY3RlZFxcbiAgICAgICAgICAgICAqIHZhbHVlKHMpIGNoYW5nZS4gV2hlbiBpbnRlZ3JhdGluZyB3aXRoIFZ1ZXgsIHVzZSB0aGlzIGNhbGxiYWNrIHRvIHRyaWdnZXJcXG4gICAgICAgICAgICAgKiBhbiBhY3Rpb24sIHJhdGhlciB0aGFuIHVzaW5nIDp2YWx1ZS5zeW5jIHRvIHJldHJlaXZlIHRoZSBzZWxlY3RlZCB2YWx1ZS5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XFxuICAgICAgICAgICAgICogQGRlZmF1bHQge251bGx9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgb25DaGFuZ2U6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIGNoYW5nZVBhcmFtOiB7fSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBjcmVhdGluZyBvcHRpb25zIGZyb20gc2VhcmNoSW5wdXQuXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdGFnZ2FibGU6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFdoZW4gdHJ1ZSwgbmV3bHkgY3JlYXRlZCB0YWdzIHdpbGwgYmUgYWRkZWQgdG9cXG4gICAgICAgICAgICAgKiB0aGUgb3B0aW9ucyBsaXN0LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHB1c2hUYWdzOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBVc2VyIGRlZmluZWQgZnVuY3Rpb24gZm9yIGFkZGluZyBPcHRpb25zXFxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGNyZWF0ZU9wdGlvbjoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKG5ld09wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnNbMF0gPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtbdGhpcy5sYWJlbF06IG5ld09wdGlvbn1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdPcHRpb25cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogV2hlbiBmYWxzZSwgdXBkYXRpbmcgdGhlIG9wdGlvbnMgd2lsbCBub3QgcmVzZXQgdGhlIHNlbGVjdCB2YWx1ZVxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHJlc2V0T25PcHRpb25zQ2hhbmdlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBkYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXFxuICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IG51bGxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICB2YWx1ZSh2YWwsIG9sZCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgc2VsZWN0aW9uKHZhbCwgb2xkKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB2YWwgIT09IG9sZCA/IHRoaXMub25DaGFuZ2UodmFsLCB0aGlzLmNoYW5nZVBhcmFtKSA6IG51bGxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb3B0aW9ucygpIHtcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhZ2dhYmxlICYmIHRoaXMucmVzZXRPbk9wdGlvbnNDaGFuZ2UpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5tdWx0aXBsZSA/IFtdIDogbnVsbFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBtdWx0aXBsZSh2YWwpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWwgPyBbXSA6IG51bGxcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgbWV0aG9kczoge1xcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzZWxlY3Qob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdChvcHRpb24pXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiAhdGhpcy5vcHRpb25FeGlzdHMob3B0aW9uKSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuY3JlYXRlT3B0aW9uKG9wdGlvbilcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wdXNoVGFncykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW29wdGlvbl1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKG9wdGlvbilcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gb3B0aW9uXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2VsZWN0KG9wdGlvbilcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIERlLXNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBkZXNlbGVjdChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSAtMVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZm9yRWFjaCgodmFsKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gb3B0aW9uIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHZhbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKHJlZik7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpXFxuXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGxcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ2FsbGVkIGZyb20gdGhpcy5zZWxlY3QgYWZ0ZXIgZWFjaCBzZWxlY3Rpb24uXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgb25BZnRlclNlbGVjdChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKClcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGVhclNlYXJjaE9uU2VsZWN0KSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZHJvcGRvd24gbWVudS5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oZSkge1xcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuJHJlZnMub3BlbkluZGljYXRvciB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5zZWFyY2ggfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMudG9nZ2xlIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRlbCkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKSAvLyBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGJsdXJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmZvY3VzKClcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIG9wdGlvbiBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9ICBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgIFRydWUgd2hlbiBzZWxlY3RlZCB8fCBGYWxzZSBvdGhlcndpc2VcXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBpc09wdGlvblNlbGVjdGVkKG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLnNlbGVjdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuZm9yRWFjaChvcHQgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvblt0aGlzLmxhYmVsXSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24gPT09IG9wdGlvblxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogSWYgdGhlcmUgaXMgYW55IHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgcmVtb3ZlIGl0LlxcbiAgICAgICAgICAgICAqIE90aGVyd2lzZSwgYmx1ciB0aGUgc2VhcmNoIGlucHV0IHRvIGNsb3NlIHRoZSBkcm9wZG93bi5cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvbkVzY2FwZSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaC5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJ1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBEZWxldGUgdGhlIHZhbHVlIG9uIERlbGV0ZSBrZXlwcmVzcyB3aGVuIHRoZXJlIGlzIG5vXFxuICAgICAgICAgICAgICogdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCAmIHRoZXJlJ3MgdGFncyB0byBkZWxldGVcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzLnZhbHVlfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG1heWJlRGVsZXRlVmFsdWUoKSB7XFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUubGVuZ3RoICYmIHRoaXMudmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy52YWx1ZS5wb3AoKSA6IHRoaXMuc2VsZWN0aW9uID0gbnVsbFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgYW4gb3B0aW9uIGV4aXN0c1xcbiAgICAgICAgICAgICAqIHdpdGhpbiB0aGlzLm9wdGlvbnMgYXJyYXkuXFxuICAgICAgICAgICAgICpcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG9wdGlvbkV4aXN0cyhvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlXFxuXFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KVxcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RzXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ2xhc3NlcyB0byBiZSBvdXRwdXQgb24gLmRyb3Bkb3duXFxuICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NlcygpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHRoaXMub3BlbixcXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRoaXMuc2VhcmNoYWJsZSxcXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMubG9hZGluZ1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIHBsYWNlaG9sZGVyIHN0cmluZyBpZiBpdCdzIHNldFxcbiAgICAgICAgICAgICAqICYgdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXFxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBQbGFjZWhvbGRlciB0ZXh0XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXIoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFbXB0eSAmJiB0aGlzLnBsYWNlaG9sZGVyKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogVGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgb3B0aW9ucywgZmlsdGVyZWRcXG4gICAgICAgICAgICAgKiBieSB0aGUgc2VhcmNoIGVsZW1lbnRzIHZhbHVlLiBJZiB0YWdnaW5nXFxuICAgICAgICAgICAgICogdHJ1ZSwgdGhlIHNlYXJjaCB0ZXh0IHdpbGwgYmUgcHJlcGVuZGVkXFxuICAgICAgICAgICAgICogaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LlxcbiAgICAgICAgICAgICAqXFxuICAgICAgICAgICAgICogQHJldHVybiB7YXJyYXl9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zKCkge1xcbiAgICAgICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XFxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3NlbGYubGFiZWxdLmluZGV4T2Yoc2VsZi5zZWFyY2gpICE9PSAtMVxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGggJiYgIXRoaXMub3B0aW9uRXhpc3RzKHRoaXMuc2VhcmNoKSkge1xcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHRoaXMuc2VhcmNoKVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmVuJ3QgYW55IG9wdGlvbnMgc2VsZWN0ZWQuXFxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBpc1ZhbHVlRW1wdHkoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbiA9PT0gJ29iamVjdCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuc2VsZWN0aW9uKS5sZW5ndGhcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgaW4gYXJyYXkgZm9ybWF0LlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHZhbHVlQXNBcnJheSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblxcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RoaXMuc2VsZWN0aW9uXVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiBbXVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA2IDcgOCA5IDEwIDExIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03YWU5NDcwYyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRuYy1pbWFnZS11cGxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdhZTk0NzBjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2FlOTQ3MGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDYgNyA4IDkgMTAgMTEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoIV92bS5pbWFnZUZpbGUpID8gX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmRlZmF1bHRJbWFnZSxcbiAgICAgIFwiYWx0XCI6IFwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIsXG4gICAgICBcIndpZHRoXCI6IFwiMTEwcHhcIlxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5pbWFnZUZpbGUpID8gX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLmltYWdlRmlsZSxcbiAgICAgIFwiYWx0XCI6IFwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIsXG4gICAgICBcIndpZHRoXCI6IFwiMTEwcHhcIlxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF9jKCdicicpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgcmVmOiBcImZpbGVpbnB1dFwiLFxuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0ZmlsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJmaWxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJmaWxlXCIsXG4gICAgICBcImlkXCI6IFwiaW1hZ2UtdXBsb2FkZXJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5vbkZpbGVDaGFuZ2VcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiaW1hZ2UtdXBsb2FkZXJcIlxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNsb3VkXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihfdm0uX3MoX3ZtLmJ0blRleHQpKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03YWU5NDcwY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA2IDcgOCA5IDEwIDExIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24gdi1zZWxlY3RcIixcbiAgICBjbGFzczogX3ZtLmRyb3Bkb3duQ2xhc3Nlc1xuICB9LCBbX2MoJ2RpdicsIHtcbiAgICByZWY6IFwidG9nZ2xlXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJtb3VzZWRvd25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udG9nZ2xlRHJvcGRvd24oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyghX3ZtLnNlYXJjaGFibGUgJiYgX3ZtLmlzVmFsdWVFbXB0eSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLnBsYWNlaG9sZGVyKSArIFwiXFxuICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnZhbHVlQXNBcnJheSksIGZ1bmN0aW9uKG9wdGlvbiwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ3NwYW4nLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0ZWQtdGFnXCJcbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLmdldE9wdGlvbkxhYmVsKG9wdGlvbikpICsgXCJcXG4gICAgICBcIiksIChfdm0ubXVsdGlwbGUpID8gX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnNlbGVjdChvcHRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIsOXXCIpXSldKSA6IF92bS5fZSgpXSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2gpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaGFibGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hhYmxlXCJcbiAgICB9XSxcbiAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICB3aWR0aDogX3ZtLmlzVmFsdWVFbXB0eSA/ICcxMDAlJyA6ICdhdXRvJ1xuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRlYm91bmNlXCI6IF92bS5kZWJvdW5jZSxcbiAgICAgIFwidHlwZVwiOiBcInNlYXJjaFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uc2VhcmNoUGxhY2Vob2xkZXJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc2VhcmNoKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwia2V5ZG93blwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZGVsZXRlXCIsIFs4LCA0Nl0pKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubWF5YmVEZWxldGVWYWx1ZSgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJ1cFwiLCAzOCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHlwZUFoZWFkVXAoJGV2ZW50KVxuICAgICAgfSwgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZG93blwiLCA0MCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHlwZUFoZWFkRG93bigkZXZlbnQpXG4gICAgICB9XSxcbiAgICAgIFwia2V5dXBcIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVzY1wiLCAyNykpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5vbkVzY2FwZSgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMykpIHsgcmV0dXJuOyB9XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHlwZUFoZWFkU2VsZWN0KCRldmVudClcbiAgICAgIH1dLFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbiA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgXCJmb2N1c1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW4gPSB0cnVlXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpJywge1xuICAgIHJlZjogXCJvcGVuSW5kaWNhdG9yXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwib3Blbi1pbmRpY2F0b3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwicHJlc2VudGF0aW9uXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJzcGlubmVyXCIsIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5sb2FkaW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lclwiXG4gIH0sIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSldKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm9wZW4pLFxuICAgICAgZXhwcmVzc2lvbjogXCJvcGVuXCJcbiAgICB9XSxcbiAgICByZWY6IFwiZHJvcGRvd25NZW51XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudVwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgJ21heC1oZWlnaHQnOiBfdm0ubWF4SGVpZ2h0XG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJhbnNpdGlvblwiOiBfdm0udHJhbnNpdGlvblxuICAgIH1cbiAgfSwgW192bS5fbCgoX3ZtLmZpbHRlcmVkT3B0aW9ucyksIGZ1bmN0aW9uKG9wdGlvbiwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIGFjdGl2ZTogX3ZtLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gX3ZtLnR5cGVBaGVhZFBvaW50ZXJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcIm1vdXNlb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBvbjoge1xuICAgICAgICBcIm1vdXNlZG93blwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uc2VsZWN0KG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmdldE9wdGlvbkxhYmVsKG9wdGlvbikpICsgXCJcXG4gICAgICAgICAgICBcIildKV0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSA/IF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJhbnNpdGlvblwiOiBcImZhZGVcIlxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkgPyBfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9LCBbX3ZtLl90KFwibm8tb3B0aW9uc1wiLCBbX3ZtLl92KFwiU29ycnksIG5vIG1hdGNoaW5nIG9wdGlvbnMuXCIpXSldLCAyKSA6IF92bS5fZSgpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi04ZDM1MTAzNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YWU5NDcwYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA2IDcgOCA5IDEwIDExIiwiLyoqXHJcbiAqIFRoZSBhcnJheSBvZiBuYW1lcyBvZiB0aGUgdG9vbHRpcCBtZXNzYWdlcyBvZiB0aGUgZGF0ZXRpbWUgcGlja2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgY29uc3RhbnQgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXHJcbiAqL1xyXG52YXIgREFURVRJTUVfUElDS0VSX1RPT0xUSVBTID0gW1xyXG4gICAgXCJ0b2RheVwiLCBcImNsZWFyXCIsIFwiY2xvc2VcIixcclxuICAgIFwic2VsZWN0TW9udGhcIiwgXCJwcmV2TW9udGhcIiwgXCJuZXh0TW9udGhcIixcclxuICAgIFwic2VsZWN0WWVhclwiLCBcInByZXZZZWFyXCIsIFwibmV4dFllYXJcIixcclxuICAgIFwic2VsZWN0RGVjYWRlXCIsIFwicHJldkRlY2FkZVwiLCBcIm5leHREZWNhZGVcIixcclxuICAgIFwicHJldkNlbnR1cnlcIiwgXCJuZXh0Q2VudHVyeVwiLFxyXG4gICAgXCJwaWNrSG91clwiLCBcImluY3JlbWVudEhvdXJcIiwgXCJkZWNyZW1lbnRIb3VyXCIsXHJcbiAgICBcInBpY2tNaW51dGVcIiwgXCJpbmNyZW1lbnRNaW51dGVcIiwgXCJkZWNyZW1lbnRNaW51dGVcIixcclxuICAgIFwicGlja1NlY29uZFwiLCBcImluY3JlbWVudFNlY29uZFwiLCBcImRlY3JlbWVudFNlY29uZFwiLFxyXG4gICAgXCJ0b2dnbGVQZXJpb2RcIiwgXCJzZWxlY3RUaW1lXCJcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsYW5ndWFnZSB1c2VkIGJ5IHRoaXMgY29tcG9uZW50LlxyXG4gKi9cclxudmFyIERFRkFVTFRfTEFOR1VBR0UgPSBcImVuLVVTXCI7XHJcblxyXG4vKipcclxuICogQSBkYXRldGltZSBwaWNrZXIgY29udHJvbC5cclxuICpcclxuICogQHBhcmFtIG1vZGVsXHJcbiAqICAgIHRoZSBtb2RlbCBiaW5kIHRvIHRoZSBjb250cm9sLCB3aGljaCBtdXN0IGJlIGEgdHdvIHdheSBiaW5kaW5nIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gdHlwZVxyXG4gKiAgICB0aGUgb3B0aW9uYWwgdHlwZSBvZiB0aGlzIGRhdGV0aW1lIHBpY2tlciBjb250cm9sLiBBdmFpbGFibGUgdmFsdWVzIGFyZVxyXG4gKiAgICAtIFwiZGF0ZXRpbWVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIGRhdGV0aW1lIHBpY2tlcixcclxuICogICAgLSBcImRhdGVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIGRhdGUgcGlja2VyLFxyXG4gKiAgICAtIFwidGltZVwiOiBJbmRpY2F0aW5nIHRoYXQgdGhpcyBjb250cm9sIGlzIGEgdGltZSBwaWNrZXIuXHJcbiAqICAgIERlZmF1bHQgdmFsdWUgaXMgXCJkYXRldGltZVwiLlxyXG4gKiBAcGFyYW0gbGFuZ3VhZ2VcclxuICogICAgdGhlIG9wdGlvbmFsIGxhbmd1YWdlIGNvZGUgdXNlZCB0byBsb2NhbGl6ZSB0aGUgY29udHJvbCwgd2hpY2ggbXVzdCBiZVxyXG4gKiAgICBhIHZhbGlkIGxhbmd1YWdlIGNvZGUgc3VwcG9ydGVkIGJ5IHRoZSBtb21lbnQuanMgbGlicmFyeS4gSWYgaXQgaXMgbm90IHNldCxcclxuICogICAgYW5kIHRoZSBbdnVlLWkxOG5dKGh0dHBzOi8vZ2l0aHViLmNvbS9IYWl4aW5nLUh1L3Z1ZS1pMThuKSBwbHVnaW4gaXMgdXNlZCxcclxuICogICAgdGhlIGNvbXBvbmVudCB3aWxsIHVzZSB0aGUgbGFuZ3VhZ2UgY29kZSBgJGxhbmd1YWdlYCBwcm92aWRlZCBieSB0aGVcclxuICogICAgW3Z1ZS1pMThuXShodHRwczovL2dpdGh1Yi5jb20vSGFpeGluZy1IdS92dWUtaTE4bikgcGx1Z2luOyBvdGhlcndpc2UsIHRoZVxyXG4gKiAgICBjb21wb25lbnQgd2lsbCB1c2UgdGhlIGRlZmF1bHQgdmFsdWUgXCJlbi1VU1wiLlxyXG4gKiBAcGFyYW0gZGF0ZXRpbWVGb3JtYXRcclxuICogICAgdGhlIG9wdGlvbmFsIGZvcm1hdCBvZiB0aGUgZGF0ZXRpbWUgdGhpcyBjb21wb25lbnQgc2hvdWxkIGRpc3BsYXksIHdoaWNoXHJcbiAqICAgIG11c3QgYmUgYSB2YWxpZCBkYXRldGltZSBmb3JtYXQgb2YgdGhlIG1vbWVudC5qcyBsaWJyYXJ5LiBUaGlzIHByb3BlcnR5XHJcbiAqICAgIG9ubHkgd29ya3Mgd2hlbiB0aGUgXCJ0eXBlXCIgcHJvcGVydHkgaXMgXCJkYXRldGltZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiWVlZWS1NTS1ERCBISDptbTpzc1wiLlxyXG4gKiBAcGFyYW0gZGF0ZUZvcm1hdFxyXG4gKiAgICB0aGUgb3B0aW9uYWwgZm9ybWF0IG9mIHRoZSBkYXRlIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwiZGF0ZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiWVlZWS1NTS1ERFwiLlxyXG4gKiBAcGFyYW0gdGltZUZvcm1hdFxyXG4gKiAgICB0aGUgb3B0aW9uYWwgZm9ybWF0IG9mIHRoZSB0aW1lIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwidGltZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiSEg6bW06c3NcIi5cclxuICogQHBhcmFtIG5hbWVcclxuICogICAgdGhlIG9wdGlvbmFsIG5hbWUgb2YgdGhlIHNlbGVjdGlvbiBjb250cm9sLlxyXG4gKiBAcGFyYW0gb25DaGFuZ2VcclxuICogICAgdGhlIG9wdGlvbmFsIGV2ZW50IGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBkYXRldGltZSBwaWNrZXJcclxuICogICAgd2FzIGNoYW5nZWQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnRlZCBhbmQgaXMgbm90IG51bGwsIGl0IG11c3QgYmUgYVxyXG4gKiAgICBmdW5jdGlvbiB3aGljaCBhY2NlcHQgb25lIGFyZ3VtZW50OiB0aGUgbmV3IGRhdGUgdGltZSwgd2hpY2ggaXMgYSBtb21lbnRcclxuICogICAgb2JqZWN0LlxyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgIGluaGVyaXQ6IGZhbHNlLFxyXG4gICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz0naW5wdXQtZ3JvdXAgZGF0ZSc+XCIgK1xyXG4gICAgXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCcgOm5hbWU9J25hbWUnIHR5cGU9J3RleHQnIC8+XCIgK1xyXG4gICAgXCI8c3BhbiBjbGFzcz0naW5wdXQtZ3JvdXAtYWRkb24nPlwiICtcclxuICAgIFwiPGkgY2xhc3M9J2ZhIGZhLWZ3IGZhLWNhbGVuZGFyJz48L2k+XCIgK1xyXG4gICAgXCI8L3NwYW4+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW9kZWw6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcImRhdGV0aW1lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRldGltZUZvcm1hdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiWVlZWS1NTS1ERFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lRm9ybWF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIkhIOm1tOnNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2hhbmdlOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF0ZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJkYXRldGltZS1waWNrZXIucmVhZHlcIik7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHVzZUN1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAnZmEgZmEtY2xvY2stbycsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnZmEgZmEtY2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgdXA6ICdmYSBmYS1jaGV2cm9uLXVwJyxcclxuICAgICAgICAgICAgICAgIGRvd246ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhIGZhLWNoZXZyb24tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgdG9kYXk6ICdmYSBmYS1kb3QtY2lyY2xlLW8nLFxyXG4gICAgICAgICAgICAgICAgY2xlYXI6ICdmYSBmYS10cmFzaCcsXHJcbiAgICAgICAgICAgICAgICBjbG9zZTogJ2ZhIGZhLXRpbWVzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBzZXQgdGhlIGxvY2FsZVxyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XHJcbiAgICAgICAgaWYgKGxhbmd1YWdlID09PSBudWxsIHx8IGxhbmd1YWdlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRsYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLiRsYW5ndWFnZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhbmdhdWdlID0gREVGQVVMVF9MQU5HVUFHRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VDb2RlKGxhbmd1YWdlKTtcclxuICAgICAgICAvLyBzZXQgdGhlIGZvcm1hdFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdCA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGltZVwiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSB0aGlzLnRpbWVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdCA9IHRoaXMuZGF0ZXRpbWVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdXNlIHRoZSB2dWUtaTE4biBwbHVnaW4gZm9yIGxvY2FsaXplIHRoZSB0b29sdGlwc1xyXG4gICAgICAgIGlmICh0aGlzLiRpMThuICYmIHRoaXMuJGkxOG4uZGF0ZXRpbWVfcGlja2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMuJGkxOG4uZGF0ZXRpbWVfcGlja2VyO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcHMgPSAkLmZuLmRhdGV0aW1lcGlja2VyLmRlZmF1bHRzLnRvb2x0aXBzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IERBVEVUSU1FX1BJQ0tFUl9UT09MVElQUy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBEQVRFVElNRV9QSUNLRVJfVE9PTFRJUFNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tuYW1lXSA9IG1lc3NhZ2VzW25hbWVdOyAgICAvLyBsb2NhbGl6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudG9vbHRpcHMgPSB0b29sdGlwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb250cm9sXHJcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMuJGVsKS5kYXRldGltZXBpY2tlcihvcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gJCh0aGlzLiRlbCkuZGF0YShcIkRhdGVUaW1lUGlja2VyXCIpO1xyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGRhdGUgdG8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIG1vZGVsXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5kYXRlKHRoaXMubW9kZWwpO1xyXG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgICAgICAkKHRoaXMuJGVsKS5vbihcImRwLmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmlzQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5pc0NoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtZS5kYXRlID0gbWUuY29udHJvbC5kYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWUub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLm9uQ2hhbmdlKG1lLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgXCJtb2RlbFwiOiBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZGF0ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgbGFuZ3VhZ2UgY29kZSBmcm9tIHRoZSBcImxhbmd1YWdlLWNvdW50cnlcIiBsb2NhbGUgY29kZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFRoZSBmdW5jdGlvbiB3aWxsIHN0cmlwIHRoZSBsYW5ndWFnZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgXCItXCIgb2YgYVxyXG4gICAgICAgICAqIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSwgcGFzcyBcImVuLVVTXCIgd2lsbCByZXR1cm5zIFwiZW5cIi4gQnV0IGZvciBzb21lXHJcbiAgICAgICAgICogc3BlY2lhbCBsb2NhbGVzLCB0aGUgZnVuY3Rpb24gcmVzZXJ2ZXMgdGhlIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSxcclxuICAgICAgICAgKiB0aGUgXCJ6aC1DTlwiIGZvciB0aGUgc2ltcGxpZmllZCBDaGluZXNlIGFuZCB0aGUgXCJ6aC1UV1wiIGZvciB0aGVcclxuICAgICAgICAgKiB0cmFkaXRpb25hbCBDaGluZXNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIGxvY2FsZVxyXG4gICAgICAgICAqICAgIEEgbG9jYWxlIGNvZGUuXHJcbiAgICAgICAgICogQHJldHVyblxyXG4gICAgICAgICAqICAgIHRoZSBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsb2NhbGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TGFuZ3VhZ2VDb2RlOiBmdW5jdGlvbiAobG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbGUgPT09IG51bGwgfHwgbG9jYWxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG9jYWxlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiemgtQ05cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiemgtVFdcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItTUFcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItU0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItVE5cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGUtQVRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tQVVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tQ0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tR0JcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnItQ0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaHktQU1cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibXMtTVlcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHQtQlJcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ItQ1lSTFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0bC1QSFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0em0tTEFUTlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0em1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2VydmUgb25seSB0aGUgZmlyc3QgdHdvIGxldHRlcnMgbGFuZ3VhZ2UgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlLnN1YnN0cigwLCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGF0ZXRpbWUvdnVlLWRhdGV0aW1lLXBpY2tlci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJjaGFtcGlvbnNoaXBzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgQ2hhbXBpb25zaGlwIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBDaGFtcGlvbnNoaXAgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJUaGUgQ2hhbXBpb25zaGlwIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJldmVudF9wb3N0ZXJfZGVsZXRlZFwiOiBcIlRoZSBDaGFtcGlvbnNoaXAgcG9zdGVyIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJUaGUgQ2hhbXBpb25zaGlwIGRvZXNuJ3QgZXhpc3RcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hbWVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBzXCI6IFwiQ2hhbXBpb25zaGlwc1wiLFxuICAgICAgICAgICAgXCJzcG9ydFwiOiBcIlNwb3J0XCIsXG4gICAgICAgICAgICBcImluaXRfZGF0ZVwiOiBcIkluaXQgRGF0ZVwiLFxuICAgICAgICAgICAgXCJlbmRfZGF0ZVwiOiBcIkVuZCBEYXRlXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInNlbGVjdF9vcHRpb25cIjogXCJTZWxlY3QgYW4gb3B0aW9uXCIsXG4gICAgICAgICAgICBcInVwbG9hZF9pbWFnZVwiOiBcIlVwbG9hZCBpbWFnZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJVcGRhdGVcIixcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTmV3IENoYW1waW9uc2hpcFwiLFxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIkFyZSB5b3Ugc3VyZT8gdGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZVwiLFxuICAgICAgICAgICAgXCJkZWxldGVfY2hhbXBpb25zaGlwXCI6IFwiRGVsZXRlIENoYW1waW9uc2hpcFwiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBfaW5mb1wiOiBcIkNoYW1waW9uc2hpcCBJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgXCJzZWVfYWxsXCI6IFwiU2VlIEFsbFwiLFxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY3RcIixcbiAgICAgICAgICAgIFwic2VhcmNoX2NoYW1waW9uc2hpcFwiOiBcIlNlYXJjaCBDaGFtcGlvbnNoaXBcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJjaGFtcGlvbnNoaXBzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBjYW1wZW9uYXRvIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgY2FtcGVvbmF0byBmdWUgYWN0dWFsaXphZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJFbCBjYW1wZW9uYXRvIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcImV2ZW50X3Bvc3Rlcl9kZWxldGVkXCI6IFwiRWwgcG9zdGVyIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIGNhbXBlb25hdG8gbm8gZXhpc3RlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb21icmVcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwY2nDs25cIixcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwc1wiOiBcIkNhbXBlb25hdG9zXCIsXG4gICAgICAgICAgICBcInNwb3J0XCI6IFwiRGVwb3J0ZVwiLFxuICAgICAgICAgICAgXCJpbml0X2RhdGVcIjogXCJGZWNoYSBkZSBpbmljaW9cIixcbiAgICAgICAgICAgIFwiZW5kX2RhdGVcIjogXCJGZWNoYSBkZSBmaW5hbGl6YWNpw7NuXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY2Npb25lc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWNjaW9uZSB1bmEgb3BjacOzblwiLFxuICAgICAgICAgICAgXCJ1cGxvYWRfaW1hZ2VcIjogXCJTdWJpciBJbWFnZW5cIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiQWN0dWFsaXphclwiLFxuICAgICAgICAgICAgXCJuZXdcIjogXCJOdWV2byBDYW1wZW9uYXRvXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxuICAgICAgICAgICAgXCJkZWxldGVfY2hhbXBpb25zaGlwXCI6IFwiRWxpbWluYXIgQ2FtcGVvbmF0b1wiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBfaW5mb1wiOiBcIkluZm9ybWFjacOzbiBkZWwgY2FtcGVvbmF0b1wiLFxuICAgICAgICAgICAgXCJzZWVfYWxsXCI6IFwiVmVyIFRvZG9zXCIsXG4gICAgICAgICAgICBcInNlbGVjdFwiOiBcIlNlbGVjY2lvbmFyXCIsXG4gICAgICAgICAgICBcInNlYXJjaF9jaGFtcGlvbnNoaXBcIjogXCJCdXNjYXIgQ2FtcGVvbmF0b1wiXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vY2hhbXBpb25zaGlwcy9jaGFtcGlvbnNoaXBzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvY2hhbXBpb25zaGlwcy8nICsgaWQgKyAnP2luY2x1ZGU9c3BvcnQnKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIGNyZWF0ZShjaGFtcGlvbnNoaXAsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvY2hhbXBpb25zaGlwcycsIGNoYW1waW9uc2hpcClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICB1cGRhdGUoaWQsIGNoYW1waW9uc2hpcCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL2NoYW1waW9uc2hpcHMvJyArIGlkLCBjaGFtcGlvbnNoaXAsIHtlbXVsYXRlSFRUUDogdHJ1ZX0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvY2hhbXBpb25zaGlwcy8nICsgaWQpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwU2VydmljZS5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YWRtaW4taGVhZGVyIDp0aXRsZT1cIiR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJylcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvYWRtaW4taGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiY2hhbXBpb25zaGlwLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlciB3aXRoLWJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJyl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmJveC1oZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2NoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5uYW1lLmVuJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZWVuXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2NoYW1waW9uc2hpcHMubmFtZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lZW5cIiBuYW1lPVwiY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnY2hhbXBpb25zaGlwcy5uYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24ubmFtZS5lblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwiY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnY2hhbXBpb25zaGlwcy5uYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4nKVwiPnt7IGVycm9ycy5maXJzdCgnY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4nKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2NoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbicpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uZW5cIiBkYXRhLWVycm9yPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdjaGFtcGlvbnNoaXBzLmRlc2NyaXB0aW9uJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPjxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnY2hhbXBpb25zaGlwcy5kZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnY2hhbXBpb25zaGlwcy5kZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJylcIj57eyBlcnJvcnMuZmlyc3QoJ2NoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbicpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRuYy1pbWFnZS11cGxvYWRlciA6YnRuLXRleHQ9XCIkdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItdmFsaWRhdGlvbi1tc2c9XCIkdCgndmFsaWRhdGlvbi5pbWFnZScse2F0dHJpYnV0ZTokdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKX0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbWFnZT1cImNoYW1waW9uc2hpcC5pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0LWltYWdlPVwiL2ltYWdlcy9taXNzaW5nL2NoYW1waW9uc2hpcC9taXNzaW5nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRlclwiPjwvZG5jLWltYWdlLXVwbG9hZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2NoYW1waW9uc2hpcC5zcG9ydCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNwb3J0c1wiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdjaGFtcGlvbnNoaXBzLnNwb3J0Jyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJjaGFtcGlvbnNoaXAuc3BvcnRcIiBsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cInNwb3J0Q2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnY2hhbXBpb25zaGlwcy5zZWxlY3Rfb3B0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzcG9ydHNcIj48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzcG9ydF9pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGFtcGlvbnNoaXAuc3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoYW1waW9uc2hpcC5zcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJjaGFtcGlvbnNoaXAuc3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2NoYW1waW9uc2hpcHMuc3BvcnQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLnNwb3J0JylcIj57eyBlcnJvcnMuZmlyc3QoJ2NoYW1waW9uc2hpcC5zcG9ydCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdjaGFtcGlvbnNoaXAuaW5pdF9kYXRlJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5pdF9kYXRlXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2NoYW1waW9uc2hpcHMuaW5pdF9kYXRlJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLWRhdGV0aW1lLXBpY2tlciBjbGFzcz1cInZ1ZS1waWNrZXIyXCIgbmFtZT1cImluaXRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptb2RlbD1cImNoYW1waW9uc2hpcC5pbml0X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwiaW5pdERhdGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lLWZvcm1hdD1cIkxMTFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1kYXRldGltZS1waWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImluaXRfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjaGFtcGlvbnNoaXAuaW5pdF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGFtcGlvbnNoaXAuaW5pdF9kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cImNoYW1waW9uc2hpcC5pbml0X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2NoYW1waW9uc2hpcHMuaW5pdF9kYXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2NoYW1waW9uc2hpcC5pbml0X2RhdGUnKVwiPnt7IGVycm9ycy5maXJzdCgnY2hhbXBpb25zaGlwLmluaXRfZGF0ZScpIH19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2NoYW1waW9uc2hpcC5lbmRfZGF0ZScpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVuZF9kYXRlXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2NoYW1waW9uc2hpcHMuZW5kX2RhdGUnKX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1kYXRldGltZS1waWNrZXIgY2xhc3M9XCJ2dWUtcGlja2VyM1wiIG5hbWU9XCJlbmRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptb2RlbD1cImNoYW1waW9uc2hpcC5lbmRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwiZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwiZW5kRGF0ZUNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRldGltZS1mb3JtYXQ9XCJMTExcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92dWUtZGF0ZXRpbWUtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbmRfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjaGFtcGlvbnNoaXAuZW5kX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoYW1waW9uc2hpcC5lbmRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJjaGFtcGlvbnNoaXAuZW5kX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2NoYW1waW9uc2hpcHMuZW5kX2RhdGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLmVuZF9kYXRlJylcIj57eyBlcnJvcnMuZmlyc3QoJ2NoYW1waW9uc2hpcC5lbmRfZGF0ZScpIH19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25CYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Zvcm1zLmJhY2snKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnZGlzYWJsZWQnOnVwZGF0aW5nfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdmb3Jtcy5zYXZlJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XG4gICAgaW1wb3J0IGNoYW1waW9uc2hpcExvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwcy5qcyc7XG4gICAgaW1wb3J0IGZvcm1EYXRhT2JqZWN0UGFyc2VyIGZyb20gJ2Jhc2UvbWl4aW5zL2FqYXgvZm9ybURhdGFQYXJzZXInXG4gICAgaW1wb3J0IHttYXBBY3Rpb25zfSBmcm9tICd2dWV4J1xuICAgIGltcG9ydCBkbmNJbWFnZVVwbG9hZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWUnO1xuICAgIGltcG9ydCB2U2VsZWN0IGZyb20gXCJiYXNlL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcIlxuICAgIGltcG9ydCBhZG1pbkhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xuICAgIGltcG9ydCBjaGFtcGlvbnNoaXBTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwU2VydmljZSdcblxuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIHZTZWxlY3QsXG4gICAgICAgICAgICBhZG1pbkhlYWRlcixcbiAgICAgICAgICAgIGRuY0ltYWdlVXBsb2FkZXIsXG4gICAgICAgICAgICBcInZ1ZS1kYXRldGltZS1waWNrZXJcIjogcmVxdWlyZShcImJhc2UvY29tcG9uZW50cy9kYXRldGltZS92dWUtZGF0ZXRpbWUtcGlja2VyLmpzXCIpLFxuICAgICAgICB9LFxuICAgICAgICBtaXhpbnM6IFtmb3JtRGF0YU9iamVjdFBhcnNlcl0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hhbXBpb25zaGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRfZGF0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNwb3J0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbjogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnLycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLmhvbWUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvY2hhbXBpb25zaGlwcy9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uY2hhbXBpb25zaGlwcydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9jaGFtcGlvbnNoaXBzL2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLm5ldydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcG9ydHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5zcG9ydHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2FsZXM6IGNoYW1waW9uc2hpcExvY2FsZXMsXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIGlmICghdGhpcy5zcG9ydHMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BvcnRzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgICAgIGdldFNwb3J0czogJ2NvbW1vbjpnZXRTcG9ydHMnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzcG9ydENoYW5nZWQoc3BvcnQpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbXBpb25zaGlwLnNwb3J0ID0gc3BvcnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmREYXRlQ2hhbmdlZChkYXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdERhdGVDaGFuZ2VkKGRhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbXBpb25zaGlwLmluaXRfZGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWxEaXNtaXNzKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBdGhsZXRlT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmFjayhldnQpe1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoYW1waW9uc2hpcHMubGlzdCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3VibWl0KGV2dCl7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmFueSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCh0aGlzLiR0KCdhZG1pbi52YWxpZGF0aW9uX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gc2VsZi4kcmVmcy51cGxvYWRlci5nZXRGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0ZXInLCBzZWxmLiRyZWZzLnVwbG9hZGVyLmdldEZpbGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhID0gc2VsZi5wYXJzZU9iakZvcm1EYXRhKHNlbGYuY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLCBmb3JtRGF0YSwgJ3RyYW5zbGF0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY2hhbXBpb25zaGlwLnNwb3J0KVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzcG9ydF9pZCcsIHNlbGYuY2hhbXBpb25zaGlwLnNwb3J0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbml0X2RhdGUnLCBzZWxmLmNoYW1waW9uc2hpcC5pbml0X2RhdGUuZm9ybWF0KCdERC1NTS1ZWVlZIEhIOm1tOnNzJykpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VuZF9kYXRlJywgc2VsZi5jaGFtcGlvbnNoaXAuZW5kX2RhdGUuZm9ybWF0KCdERC1NTS1ZWVlZIEhIOm1tOnNzJykpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9uc2hpcFNlcnZpY2UuY3JlYXRlKGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3Quc3VjY2Vzc1RvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hhbXBpb25zaGlwcy5saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcnNbZXJyb3JdLmZvckVhY2goKHZhbGlkYXRpb25FcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHZhbGlkYXRpb25FcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QocmVzcG9uc2UuZXJyb3JzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cbiAgICAuc2VsZWN0LWlucHV0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY3JlYXRlLnZ1ZT8wOWY1MjU5OCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnNlbGVjdC1pbnB1dCB7XFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZWQzNTNiYTAhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDMxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnYWRtaW4taGVhZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IF92bS4kdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgW19jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNoYW1waW9uc2hpcC1mb3JtXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2NoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5uYW1lLmVuJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmFtZWVuXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLm5hbWUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGFtcGlvbnNoaXAudHJhbnNsYXRpb24ubmFtZS5lbiksXG4gICAgICBleHByZXNzaW9uOiBcImNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5uYW1lLmVuXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4pLFxuICAgICAgZXhwcmVzc2lvbjogXCJjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24ubmFtZS5lblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuYW1lZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5uYW1lLmVuXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy5uYW1lJyksXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy5uYW1lJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4nKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2NoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5uYW1lLmVuJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLm5hbWUuZW4nKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZGVzY3JpcHRpb25lblwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnY2hhbXBpb25zaGlwcy5kZXNjcmlwdGlvbicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbiksXG4gICAgICBleHByZXNzaW9uOiBcImNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lblwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbiksXG4gICAgICBleHByZXNzaW9uOiBcImNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lblwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJkZXNjcmlwdGlvbmVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW5cIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLmRlc2NyaXB0aW9uJyksXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy5kZXNjcmlwdGlvbicpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNoYW1waW9uc2hpcC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jaGFtcGlvbnNoaXAudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdjaGFtcGlvbnNoaXAudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygnZG5jLWltYWdlLXVwbG9hZGVyJywge1xuICAgIHJlZjogXCJ1cGxvYWRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImJ0bi10ZXh0XCI6IF92bS4kdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKSxcbiAgICAgIFwiZXJyb3ItdmFsaWRhdGlvbi1tc2dcIjogX3ZtLiR0KCd2YWxpZGF0aW9uLmltYWdlJywge1xuICAgICAgICBhdHRyaWJ1dGU6IF92bS4kdCgnY2hhbXBpb25zaGlwcy51cGxvYWRfaW1hZ2UnKVxuICAgICAgfSksXG4gICAgICBcImltYWdlXCI6IF92bS5jaGFtcGlvbnNoaXAuaW1hZ2UsXG4gICAgICBcImRlZmF1bHQtaW1hZ2VcIjogXCIvaW1hZ2VzL21pc3NpbmcvY2hhbXBpb25zaGlwL21pc3NpbmcucG5nXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLnNwb3J0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BvcnRzXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLnNwb3J0JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmNoYW1waW9uc2hpcC5zcG9ydCxcbiAgICAgIFwibGFiZWxcIjogXCJuYW1lXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uc3BvcnRDaGFuZ2VkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2NoYW1waW9uc2hpcHMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5zcG9ydHNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hhbXBpb25zaGlwLnNwb3J0KSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hhbXBpb25zaGlwLnNwb3J0XCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hhbXBpb25zaGlwLnNwb3J0KSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hhbXBpb25zaGlwLnNwb3J0XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInNwb3J0X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNoYW1waW9uc2hpcC5zcG9ydFwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2NoYW1waW9uc2hpcHMuc3BvcnQnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5jaGFtcGlvbnNoaXAuc3BvcnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLnNwb3J0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdjaGFtcGlvbnNoaXAuc3BvcnQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2NoYW1waW9uc2hpcC5zcG9ydCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2NoYW1waW9uc2hpcC5zcG9ydCcpKSldKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLmluaXRfZGF0ZScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImluaXRfZGF0ZVwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnY2hhbXBpb25zaGlwcy5pbml0X2RhdGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Z1ZS1kYXRldGltZS1waWNrZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidnVlLXBpY2tlcjJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiaW5pdF9kYXRlXCIsXG4gICAgICBcIm1vZGVsXCI6IF92bS5jaGFtcGlvbnNoaXAuaW5pdF9kYXRlLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLmluaXREYXRlQ2hhbmdlZCxcbiAgICAgIFwidHlwZVwiOiBcImRhdGV0aW1lXCIsXG4gICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgIFwiZGF0ZXRpbWUtZm9ybWF0XCI6IFwiTExMXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hhbXBpb25zaGlwLmluaXRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcImNoYW1waW9uc2hpcC5pbml0X2RhdGVcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jaGFtcGlvbnNoaXAuaW5pdF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hhbXBpb25zaGlwLmluaXRfZGF0ZVwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbml0X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNoYW1waW9uc2hpcC5pbml0X2RhdGVcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLmluaXRfZGF0ZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmNoYW1waW9uc2hpcC5pbml0X2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY2hhbXBpb25zaGlwLmluaXRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLmluaXRfZGF0ZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLmluaXRfZGF0ZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2NoYW1waW9uc2hpcC5pbml0X2RhdGUnKSkpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdjaGFtcGlvbnNoaXAuZW5kX2RhdGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJlbmRfZGF0ZVwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnY2hhbXBpb25zaGlwcy5lbmRfZGF0ZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Z1ZS1kYXRldGltZS1waWNrZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidnVlLXBpY2tlcjNcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZW5kX2RhdGVcIixcbiAgICAgIFwibW9kZWxcIjogX3ZtLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSxcbiAgICAgIFwidHlwZVwiOiBcImRhdGV0aW1lXCIsXG4gICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5lbmREYXRlQ2hhbmdlZCxcbiAgICAgIFwiZGF0ZXRpbWUtZm9ybWF0XCI6IFwiTExMXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hhbXBpb25zaGlwLmVuZF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hhbXBpb25zaGlwLmVuZF9kYXRlXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0uY2hhbXBpb25zaGlwLmVuZF9kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hhbXBpb25zaGlwLmVuZF9kYXRlXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImVuZF9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJjaGFtcGlvbnNoaXAuZW5kX2RhdGVcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdjaGFtcGlvbnNoaXBzLmVuZF9kYXRlJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uY2hhbXBpb25zaGlwLmVuZF9kYXRlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmNoYW1waW9uc2hpcC5lbmRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnY2hhbXBpb25zaGlwLmVuZF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdjaGFtcGlvbnNoaXAuZW5kX2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdjaGFtcGlvbnNoaXAuZW5kX2RhdGUnKSkpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25CYWNrXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuYmFjaycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdkaXNhYmxlZCc6IF92bS51cGRhdGluZ1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiLFxuICAgICAgXCJocmVmXCI6IFwiIyFcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uU3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuc2F2ZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pXSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2VyXCJcbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWVkMzUzYmEwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1lZDM1M2JhMCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9jaGFtcGlvbnNoaXBzL2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZWQzNTNiYTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZWQzNTNiYTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWVkMzUzYmEwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jcmVhdGUudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWVkMzUzYmEwIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvY2hhbXBpb25zaGlwcy9jcmVhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSAzNzlcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==