webpackJsonp([33,24],{

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(283),
  /* template */
  __webpack_require__(362),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/events/edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34cd269d", Component.options)
  } else {
    hotAPI.reload("data-v-34cd269d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(188)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(185),
  /* template */
  __webpack_require__(187),
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

/***/ 185:
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

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 187:
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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("e9fec1c2", content, false);
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

/***/ 189:
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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(206)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(195),
  /* template */
  __webpack_require__(204),
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

/***/ 195:
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

var _pointerScroll = __webpack_require__(198);

var _pointerScroll2 = _interopRequireDefault(_pointerScroll);

var _typeAheadPointer = __webpack_require__(199);

var _typeAheadPointer2 = _interopRequireDefault(_typeAheadPointer);

var _ajax = __webpack_require__(197);

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

/***/ 197:
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

/***/ 198:
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

/***/ 199:
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.inputfile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.inputfile + label {\n    width: auto !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/upload/dnc-image-upload.vue?48b0fff6"],"names":[],"mappings":";AAaA;IACA,aAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,uBAAA;CACA","file":"dnc-image-upload.vue","sourcesContent":["<template>\n    <div>\n        <img :src=\"defaultImage\" alt=\"athlete profile image\" width=\"110px\" v-if=\"!imageFile\">\n        <img :src=\"imageFile\" alt=\"athlete profile image\" width=\"110px\" v-if=\"imageFile\">\n\n        <br><br>\n        <input type=\"file\" name=\"file\" id=\"image-uploader\" class=\"inputfile\" @change=\"onFileChange\"\n               ref=\"fileinput\"/>\n        <label for=\"image-uploader\" class=\"btn btn-primary\"><i class=\"fa fa-cloud\"></i>\n            <span>{{btnText}}</span></label>\n    </div>\n</template>\n<style>\n    .inputfile {\n        width: 0.1px;\n        height: 0.1px;\n        opacity: 0;\n        overflow: hidden;\n        position: absolute;\n        z-index: -1;\n    }\n\n    .inputfile + label {\n        width: auto !important;\n    }\n</style>\n<script type=\"text/babel\">\n\n    export default{\n        props: {\n            value: {},\n            acceptedFiles: {\n                type: String,\n                default: 'image/*'\n            },\n            btnText: {},\n            errorValidationMsg: {},\n            width: {\n                type: Number,\n                default: 110\n            },\n            image: {},\n            defaultImage: {}\n        },\n        watch: {\n            image: function (val) {\n                this.imageFile = val;\n            }\n        },\n        data(){\n            return {\n                imageFile: null\n            }\n        },\n        methods: {\n            onFileChange(e){\n                var files = e.target.files || e.dataTransfer.files;\n                if (!files.length)\n                    return;\n                this.createImage(files[0]);\n            },\n            createImage(file) {\n                if (!file.type.match(this.acceptedFiles)) {\n                    document.getElementById(\"image-uploader\").value = \"\";\n                    this.$root.warningToast(this.errorValidationMsg);\n                    this.imageFile = this.defaultImage\n                    return;\n                }\n                var reader = new FileReader();\n                var vm = this;\n                reader.onload = (e) => {\n                    vm.imageFile = e.target.result;\n                };\n                reader.readAsDataURL(file)\n            },\n            getFile(){\n                return this.$refs.fileinput.files[0];\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.v-select {\n    position: relative;\n}\n.v-select .open-indicator {\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    pointer-events: all;\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    opacity: 1;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .open-indicator {\n    opacity: 0;\n}\n.v-select .open-indicator:before {\n    border-color: rgba(60, 60, 60, .5);\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    vertical-align: top;\n    -webkit-transform: rotate(133deg);\n            transform: rotate(133deg);\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n}\n.v-select.open .open-indicator {\n    bottom: 1px;\n}\n.v-select.open .open-indicator:before {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n}\n.v-select .dropdown-toggle {\n    display: block;\n    padding: 0;\n    background: none;\n    border: 1px solid rgba(60, 60, 60, .26);\n    border-radius: 4px;\n    white-space: normal;\n}\n.v-select.searchable .dropdown-toggle {\n    cursor: text;\n}\n.v-select.open .dropdown-toggle {\n    border-bottom: none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.v-select > .dropdown-menu {\n    margin: 0;\n    width: 100%;\n    overflow-y: scroll;\n    border-top: none;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.v-select .selected-tag {\n    color: #333;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 26px;\n    margin: 4px 1px 0px 3px;\n    padding: 0 0.25em;\n    float: left;\n    line-height: 1.7em;\n}\n.v-select .selected-tag .close {\n    float: none;\n    margin-right: 0;\n    font-size: 20px;\n}\n.v-select input[type=search],\n.v-select input[type=search]:focus {\n    display: inline-block;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0 .5em;\n    width: 10em;\n    max-width: 100%;\n    background: none;\n    position: relative;\n    box-shadow: none;\n    float: left;\n    clear: none;\n}\n.v-select input[type=search]:disabled {\n    cursor: pointer;\n}\n.v-select li a {\n    cursor: pointer;\n}\n.v-select .active a {\n    background: rgba(50, 50, 50, .1);\n    color: #333;\n}\n.v-select .highlight a,\n.v-select li:hover > a {\n    background: #f0f0f0;\n    color: #333;\n}\n.v-select .spinner {\n    opacity: 0;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 5px;\n    text-indent: -9999em;\n    overflow: hidden;\n    border-top: .9em solid rgba(100, 100, 100, .1);\n    border-right: .9em solid rgba(100, 100, 100, .1);\n    border-bottom: .9em solid rgba(100, 100, 100, .1);\n    border-left: .9em solid rgba(60, 60, 60, .45);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-animation: vSelectSpinner 1.1s infinite linear;\n            animation: vSelectSpinner 1.1s infinite linear;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .spinner {\n    opacity: 1;\n}\n.v-select .spinner,\n.v-select .spinner:after {\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n}\n@-webkit-keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/forms/select/select.vue?46a988a4"],"names":[],"mappings":";AACA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;IACA,gBAAA;IACA,oBAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;IACA,WAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,mCAAA;IACA,oBAAA;IACA,gCAAA;IACA,YAAA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,oBAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,WAAA;IACA,iBAAA;IACA,wCAAA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,oBAAA;IACA,6BAAA;IACA,8BAAA;CACA;AAEA;IACA,UAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;IACA,2BAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;;IAEA,sBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,iCAAA;IACA,YAAA;CACA;AAEA;;IAEA,oBAAA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,mBAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,qBAAA;IACA,iBAAA;IACA,+CAAA;IACA,iDAAA;IACA,kDAAA;IACA,8CAAA;IACA,iCAAA;YAAA,yBAAA;IACA,uDAAA;YAAA,+CAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,mBAAA;IACA,WAAA;IACA,YAAA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA","file":"select.vue","sourcesContent":["<style>\n    .v-select {\n        position: relative;\n    }\n\n    .v-select .open-indicator {\n        position: absolute;\n        bottom: 6px;\n        right: 10px;\n        display: inline-block;\n        cursor: pointer;\n        pointer-events: all;\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        opacity: 1;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .open-indicator {\n        opacity: 0;\n    }\n\n    .v-select .open-indicator:before {\n        border-color: rgba(60, 60, 60, .5);\n        border-style: solid;\n        border-width: 0.25em 0.25em 0 0;\n        content: '';\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        vertical-align: top;\n        transform: rotate(133deg);\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    }\n\n    .v-select.open .open-indicator {\n        bottom: 1px;\n    }\n\n    .v-select.open .open-indicator:before {\n        transform: rotate(315deg);\n    }\n\n    .v-select .dropdown-toggle {\n        display: block;\n        padding: 0;\n        background: none;\n        border: 1px solid rgba(60, 60, 60, .26);\n        border-radius: 4px;\n        white-space: normal;\n    }\n\n    .v-select.searchable .dropdown-toggle {\n        cursor: text;\n    }\n\n    .v-select.open .dropdown-toggle {\n        border-bottom: none;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    .v-select > .dropdown-menu {\n        margin: 0;\n        width: 100%;\n        overflow-y: scroll;\n        border-top: none;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    .v-select .selected-tag {\n        color: #333;\n        background-color: #f0f0f0;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        height: 26px;\n        margin: 4px 1px 0px 3px;\n        padding: 0 0.25em;\n        float: left;\n        line-height: 1.7em;\n    }\n\n    .v-select .selected-tag .close {\n        float: none;\n        margin-right: 0;\n        font-size: 20px;\n    }\n\n    .v-select input[type=search],\n    .v-select input[type=search]:focus {\n        display: inline-block;\n        border: none;\n        outline: none;\n        margin: 0;\n        padding: 0 .5em;\n        width: 10em;\n        max-width: 100%;\n        background: none;\n        position: relative;\n        box-shadow: none;\n        float: left;\n        clear: none;\n    }\n\n    .v-select input[type=search]:disabled {\n        cursor: pointer;\n    }\n\n    .v-select li a {\n        cursor: pointer;\n    }\n\n    .v-select .active a {\n        background: rgba(50, 50, 50, .1);\n        color: #333;\n    }\n\n    .v-select .highlight a,\n    .v-select li:hover > a {\n        background: #f0f0f0;\n        color: #333;\n    }\n\n    .v-select .spinner {\n        opacity: 0;\n        position: absolute;\n        top: 5px;\n        right: 10px;\n        font-size: 5px;\n        text-indent: -9999em;\n        overflow: hidden;\n        border-top: .9em solid rgba(100, 100, 100, .1);\n        border-right: .9em solid rgba(100, 100, 100, .1);\n        border-bottom: .9em solid rgba(100, 100, 100, .1);\n        border-left: .9em solid rgba(60, 60, 60, .45);\n        transform: translateZ(0);\n        animation: vSelectSpinner 1.1s infinite linear;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .spinner {\n        opacity: 1;\n    }\n\n    .v-select .spinner,\n    .v-select .spinner:after {\n        border-radius: 50%;\n        width: 5em;\n        height: 5em;\n    }\n\n    @-webkit-keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n\n<template>\n    <div class=\"dropdown v-select\" :class=\"dropdownClasses\">\n        <div ref=\"toggle\" @mousedown.prevent=\"toggleDropdown\" class=\"dropdown-toggle clearfix\" type=\"button\">\n        <span class=\"form-control\" v-if=\"!searchable && isValueEmpty\">\n          {{ placeholder }}\n        </span>\n\n            <span class=\"selected-tag\" v-for=\"(option,index) in valueAsArray\" v-bind:key=\"index\">\n          {{ getOptionLabel(option) }}\n          <button v-if=\"multiple\" @click=\"select(option)\" type=\"button\" class=\"close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </span>\n\n            <input\n                    ref=\"search\"\n                    :debounce=\"debounce\"\n                    v-model=\"search\"\n                    v-show=\"searchable\"\n                    @keydown.delete=\"maybeDeleteValue\"\n                    @keyup.esc=\"onEscape\"\n                    @keydown.up.prevent=\"typeAheadUp\"\n                    @keydown.down.prevent=\"typeAheadDown\"\n                    @keyup.enter.prevent=\"typeAheadSelect\"\n                    @blur=\"open = false\"\n                    @focus=\"open = true\"\n                    type=\"search\"\n                    class=\"form-control\"\n                    :placeholder=\"searchPlaceholder\"\n                    :style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"\n            >\n\n            <i ref=\"openIndicator\" role=\"presentation\" class=\"open-indicator\"></i>\n\n            <slot name=\"spinner\">\n                <div class=\"spinner\" v-show=\"loading\">Loading...</div>\n            </slot>\n        </div>\n\n        <ul ref=\"dropdownMenu\" v-show=\"open\" :transition=\"transition\" class=\"dropdown-menu\"\n            :style=\"{ 'max-height': maxHeight }\">\n            <li v-for=\"(option,index) in filteredOptions\" v-bind:key=\"index\"\n                :class=\"{ active: isOptionSelected(option), highlight: index === typeAheadPointer }\"\n                @mouseover=\"typeAheadPointer = index\">\n                <a @mousedown.prevent=\"select(option)\">\n                    {{ getOptionLabel(option) }}\n                </a>\n            </li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"divider\"></li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"text-center\">\n                <slot name=\"no-options\">Sorry, no matching options.</slot>\n            </li>\n        </ul>\n    </div>\n</template>\n\n\n<script type=\"text/babel\">\n    import pointerScroll from 'base/mixins/pointerScroll'\n    import typeAheadPointer from 'base/mixins/typeAheadPointer'\n    import ajax from 'base/mixins/ajax'\n\n    export default {\n        mixins: [pointerScroll, typeAheadPointer, ajax],\n\n        props: {\n            /**\n             * Contains the currently selected value. Very similar to a\n             * `value` attribute on an <input>. In most cases, you'll want\n             * to set this as a two-way binding, using :value.sync. However,\n             * this will not work with Vuex, in which case you'll need to use\n             * the onChange callback property.\n             * @type {Object||String||null}\n             */\n            value: {\n                default: null\n            },\n\n            /**\n             * An array of strings or objects to be used as dropdown choices.\n             * If you are using an array of objects, vue-select will look for\n             * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\n             * custom label key can be set with the `label` prop.\n             * @type {Object}\n             */\n            options: {\n                type: Array,\n                default() {\n                    return []\n                },\n            },\n\n            /**\n             * Sets the max-height property on the dropdown list.\n             * @deprecated\n             * @type {String}\n             */\n            maxHeight: {\n                type: String,\n                default: '400px'\n            },\n\n            /**\n             * Enable/disable filtering the options.\n             * @type {Boolean}\n             */\n            searchable: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Equivalent to the `multiple` attribute on a `<select>` input.\n             * @type {Object}\n             */\n            multiple: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * Equivalent to the `placeholder` attribute on an `<input>`.\n             * @type {Object}\n             */\n            placeholder: {\n                type: String,\n                default: ''\n            },\n\n            /**\n             * Sets a Vue transition property on the `.dropdown-menu`. vue-select\n             * does not include CSS for transitions, you'll need to add them yourself.\n             * @type {String}\n             */\n            transition: {\n                type: String,\n                default: 'expand'\n            },\n\n            /**\n             * Enables/disables clearing the search text when an option is selected.\n             * @type {Boolean}\n             */\n            clearSearchOnSelect: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Tells vue-select what key to use when generating option\n             * labels when each `option` is an object.\n             * @type {String}\n             */\n            label: {\n                type: String,\n                default: 'label'\n            },\n\n            /**\n             * Callback to generate the label text. If {option}\n             * is an object, returns option[this.label] by default.\n             * @param  {Object || String} option\n             * @return {String}\n             */\n            getOptionLabel: {\n                type: Function,\n                default(option) {\n                    if (typeof option === 'object') {\n                        if (this.label && option[this.label]) {\n                            return option[this.label]\n                        }\n                    }\n                    return option;\n                }\n            },\n\n            /**\n             * An optional callback function that is called each time the selected\n             * value(s) change. When integrating with Vuex, use this callback to trigger\n             * an action, rather than using :value.sync to retreive the selected value.\n             * @type {Function}\n             * @default {null}\n             */\n            onChange: Function,\n            changeParam: {},\n\n            /**\n             * Enable/disable creating options from searchInput.\n             * @type {Boolean}\n             */\n            taggable: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * When true, newly created tags will be added to\n             * the options list.\n             * @type {Boolean}\n             */\n            pushTags: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * User defined function for adding Options\n             * @type {Function}\n             */\n            createOption: {\n                type: Function,\n                default: function (newOption) {\n                    if (typeof this.options[0] === 'object') {\n                        return {[this.label]: newOption}\n                    }\n                    return newOption\n                }\n            },\n\n            /**\n             * When false, updating the options will not reset the select value\n             * @type {Boolean}\n             */\n            resetOnOptionsChange: {\n                type: Boolean,\n                default: false\n            },\n        },\n\n        data() {\n            return {\n                search: '',\n                open: false,\n                selection: null\n            }\n        },\n\n        watch: {\n            value(val, old) {\n                this.selection = val\n            },\n            selection(val, old) {\n                if (this.multiple) {\n                    this.onChange ? this.onChange(val, this.changeParam) : null\n                } else {\n                    this.onChange && val !== old ? this.onChange(val, this.changeParam) : null\n                }\n            },\n            options() {\n                if (!this.taggable && this.resetOnOptionsChange) {\n                    this.selection = this.multiple ? [] : null\n                }\n            },\n            multiple(val) {\n                this.selection = val ? [] : null\n            }\n        },\n\n        methods: {\n\n            /**\n             * Select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            select(option) {\n                if (this.isOptionSelected(option)) {\n                    this.deselect(option)\n                } else {\n                    if (this.taggable && !this.optionExists(option)) {\n                        option = this.createOption(option)\n\n                        if (this.pushTags) {\n                            this.options.push(option)\n                        }\n                    }\n\n                    if (this.multiple) {\n                        if (!this.selection) {\n                            this.selection = [option]\n                        } else {\n                            this.selection.push(option)\n                        }\n                    } else {\n                        this.selection = option\n                    }\n                }\n\n                this.onAfterSelect(option)\n            },\n\n            /**\n             * De-select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            deselect(option) {\n                if (this.multiple) {\n                    let ref = -1\n                    this.selection.forEach((val) => {\n                        if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {\n                            ref = val\n                        }\n                    })\n                    var index = this.selection.indexOf(ref);\n                    this.selection.splice(index, 1)\n\n                } else {\n                    this.selection = null\n                }\n            },\n\n            /**\n             * Called from this.select after each selection.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            onAfterSelect(option) {\n                if (!this.multiple) {\n                    this.open = !this.open\n                    this.$refs.search.blur()\n                }\n\n                if (this.clearSearchOnSelect) {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Toggle the visibility of the dropdown menu.\n             * @param  {Event} e\n             * @return {void}\n             */\n            toggleDropdown(e) {\n                if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {\n                    if (this.open) {\n                        this.$refs.search.blur() // dropdown will close on blur\n                    } else {\n                        this.open = true\n                        this.$refs.search.focus()\n                    }\n                }\n            },\n\n            /**\n             * Check if the given option is currently selected.\n             * @param  {Object||String}  option\n             * @return {Boolean}         True when selected || False otherwise\n             */\n            isOptionSelected(option) {\n                if (this.multiple && this.selection) {\n                    let selected = false\n                    this.value.forEach(opt => {\n                        if (typeof opt === 'object' && opt[this.label] === option[this.label]) {\n                            selected = true\n                        } else if (opt === option) {\n                            selected = true\n                        }\n                    })\n                    return selected\n                }\n\n                return this.selection === option\n            },\n\n            /**\n             * If there is any text in the search input, remove it.\n             * Otherwise, blur the search input to close the dropdown.\n             * @return {[type]} [description]\n             */\n            onEscape() {\n                if (!this.search.length) {\n                    this.$refs.search.blur()\n                } else {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Delete the value on Delete keypress when there is no\n             * text in the search input, & there's tags to delete\n             * @return {this.value}\n             */\n            maybeDeleteValue() {\n                if (!this.$refs.search.value.length && this.value) {\n                    return this.multiple ? this.value.pop() : this.selection = null\n                }\n            },\n\n            /**\n             * Determine if an option exists\n             * within this.options array.\n             *\n             * @param  {Object || String} option\n             * @return {boolean}\n             */\n            optionExists(option) {\n                let exists = false\n\n                this.options.forEach(opt => {\n                    if (typeof opt === 'object' && opt[this.label] === option) {\n                        exists = true\n                    } else if (opt === option) {\n                        exists = true\n                    }\n                })\n\n                return exists\n            }\n        },\n\n        computed: {\n\n            /**\n             * Classes to be output on .dropdown\n             * @return {Object}\n             */\n            dropdownClasses() {\n                return {\n                    open: this.open,\n                    searchable: this.searchable,\n                    loading: this.loading\n                }\n            },\n\n            /**\n             * Return the placeholder string if it's set\n             * & there is no value selected.\n             * @return {String} Placeholder text\n             */\n            searchPlaceholder() {\n                if (this.isValueEmpty && this.placeholder) {\n                    return this.placeholder;\n                }\n            },\n\n            /**\n             * The currently displayed options, filtered\n             * by the search elements value. If tagging\n             * true, the search text will be prepended\n             * if it doesn't already exist.\n             *\n             * @return {array}\n             */\n            filteredOptions() {\n                let self = this;\n                let options = this.options.filter(function (option) {\n                    return option[self.label].indexOf(self.search) !== -1\n                })\n                if (this.taggable && this.search.length && !this.optionExists(this.search)) {\n                    options.unshift(this.search)\n                }\n                return options\n            },\n\n            /**\n             * Check if there aren't any options selected.\n             * @return {Boolean}\n             */\n            isValueEmpty() {\n                if (this.selection) {\n                    if (typeof this.selection === 'object') {\n                        return !Object.keys(this.selection).length\n                    }\n                    return !this.selection.length\n                }\n\n                return true;\n            },\n\n            /**\n             * Return the current value in array format.\n             * @return {Array}\n             */\n            valueAsArray() {\n                if (this.multiple) {\n                    return this.selection\n                } else if (this.selection) {\n                    return [this.selection]\n                }\n\n                return []\n            }\n        }\n\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(205)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(203),
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

/***/ 203:
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

/***/ 204:
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

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("52045178", content, false);
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

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("b59cb9d0", content, false);
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

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "en": {
        "events": {
            "m": "Male",
            "w": "Female",
            "n": "Prefer not to disclose",
            "created_successfully": "The Event was created successfully",
            "updated_successfully": "The Event was updated successfully",
            "deleted_succesfully": "The Event was deleted successfully",
            "event_poster_deleted": "The event poster was deleted successfully",
            "not_found": "The Event doesn't exist",
            "name": "Name",
            "description": "Description",
            "championship": "Championship",
            "gender": "Gender",
            "code": "Code",
            "init_date": "Init Date",
            "end_date": "End Date",
            "specialty": "Specialty",
            "category": "Category",
            "type": "Type",
            "reach": "Reach",
            "actions": "Actions",
            "select_option": "Select an option",
            "upload_image": "Upload image",
            "update": "Update",
            "new": "New Event",
            "delete_message": "Are you sure? this action cannot be undone",
            "delete_event": "Delete Event",
            "event_info": "Event Information",
            "see_all": "See All",
            "select": "Select",
            "search_event": "Search Event"
        }
    },
    "es": {
        "events": {
            "m": "Masculino",
            "w": "Femenino",
            "n": "Prefiero no revelarlo",
            "created_successfully": "El evento fue creado satisfactoriamente",
            "updated_successfully": "El evento fue actualizado satisfactoriamente",
            "deleted_succesfully": "El evento fue eliminado satisfactoriamente",
            "event_poster_deleted": "El poster fue eliminado satisfactoriamente",
            "not_found": "El evento no existe",
            "name": "Nombre",
            "description": "Descripción",
            "championship": "Campeonato",
            "gender": "Género",
            "code": "Código",
            "init_date": "Fecha de inicio",
            "end_date": "Fecha de finalización",
            "specialty": "Especialidad",
            "category": "Categoría",
            "type": "Tipo",
            "reach": "Alcance",
            "actions": "Acciones",
            "select_option": "Seleccione una opción",
            "upload_image": "Subir Imagen",
            "update": "Actualizar",
            "new": "Nuevo Evento",
            "delete_message": "¿Estas Seguro? esta acción no se puede deshacer",
            "delete_event": "Eliminar Evento",
            "event_info": "Información del evento",
            "see_all": "Ver Todos",
            "select": "Seleccionar",
            "search_event": "Buscar Evento"
        }
    }
};

/***/ }),

/***/ 210:
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

/***/ 227:
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
        return _vue2.default.http.get('/api/events/' + id + '?include=championship.sport,specialty,category,type,reach').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    create: function create(event, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/events', event).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    update: function update(id, event, successCalback, errorCallback) {
        return _vue2.default.http.put('/api/events/' + id, event, { emulateHTTP: true }).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    remove: function remove(id, successCalback, errorCallback) {
        return _vue2.default.http.delete('/api/events/' + id).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    },
    getChampionships: function getChampionships(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/championships?include=sport').then(function (response) {
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
//
//
//
//
//
//
//
//
//

var _events = __webpack_require__(208);

var _events2 = _interopRequireDefault(_events);

var _formDataParser = __webpack_require__(189);

var _formDataParser2 = _interopRequireDefault(_formDataParser);

var _vuex = __webpack_require__(4);

var _dncImageUpload = __webpack_require__(202);

var _dncImageUpload2 = _interopRequireDefault(_dncImageUpload);

var _select = __webpack_require__(190);

var _select2 = _interopRequireDefault(_select);

var _pageHeader = __webpack_require__(184);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _eventService = __webpack_require__(227);

var _eventService2 = _interopRequireDefault(_eventService);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        vSelect: _select2.default,
        adminHeader: _pageHeader2.default,
        dncImageUploader: _dncImageUpload2.default,
        "vue-datetime-picker": __webpack_require__(210)
    },
    mixins: [_formDataParser2.default],
    data: function data() {
        return {
            event: {
                init_date: null,
                end_date: null,
                translation: {
                    name: {},
                    description: {}
                },
                athletes: []
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
                href: '/events',
                title: 'admin.events'
            }, {
                href: '/events/' + this.event.id + '/update',
                title: 'admin.update'
            }];
        },
        specialties: function specialties() {
            return this.$store.state.common.specialties;
        },
        categories: function categories() {
            return this.$store.state.common.categories;
        },
        types: function types() {
            return this.$store.state.common.types;
        },
        reaches: function reaches() {
            return this.$store.state.common.reaches;
        },
        championships: function championships() {
            return this.$store.state.common.championships;
        },
        genders: function genders() {
            return this.$store.state.common.genders;
        }
    },
    locales: _events2.default,
    created: function created() {
        var _this = this;

        if (!this.categories.length) this.getCategories();

        if (!this.championships.length) this.getChampionships();

        if (!this.types.length) this.getTypes();

        if (!this.reaches.length) this.getReaches();

        if (!this.genders.length) this.getGenders();
        _eventService2.default.show(this.$route.params.id, function (response) {
            _this.event = response.data;
            _this.event.init_date = (0, _moment2.default)(_this.event.init_date);
            _this.event.end_date = (0, _moment2.default)(_this.event.end_date);
            _this.getSpecialties(_this.event.championship.sport.id);
        }, function (error) {
            console.log(error);
        });
    },

    methods: _extends({}, (0, _vuex.mapActions)({
        getSports: 'common:getSports',
        getCategories: 'common:getCategories',
        getChampionships: 'common:getChampionships',
        getSpecialties: 'common:getSpecialties',
        getGenders: 'common:getGenders',
        getTypes: 'common:getTypes',
        getReaches: 'common:getReaches'
    }), {
        championshipChanged: function championshipChanged() {
            var self = this;
            if (this.event.championship) {
                this.getSpecialties(this.event.championship.sport.id, function (data) {
                    if (!data.filter(function (specialty) {
                        return specialty.id == self.event.specialty.id;
                    }).length) {
                        self.event.specialty = null;
                    }
                });
            } else {
                this.$store.commit('common:SET_SPECIALTIES', []);
                this.event.specialty = null;
            }
        },
        specialtyChanged: function specialtyChanged(specialty) {
            this.event.specialty = specialty;
        },
        categoryChanged: function categoryChanged(category) {
            this.event.category = category;
        },
        reachChanged: function reachChanged(reach) {
            this.event.reach = reach;
        },
        typeChanged: function typeChanged(type) {
            this.event.type = type;
        },
        genderChanged: function genderChanged(gender) {
            this.event.gender = gender;
        },
        endDateChanged: function endDateChanged(date) {
            this.event.end_date = date;
        },
        initDateChanged: function initDateChanged(date) {
            this.event.init_date = date;
        },
        onBack: function onBack(evt) {
            evt.preventDefault();
            this.$router.push({
                name: 'events.list'
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
                formData = self.parseObjFormData(self.event.translation, formData, 'translation');
                if (self.event.championship) formData.append('championship_id', self.event.championship.id);
                if (self.event.specialty) formData.append('specialty_id', self.event.specialty.id);
                if (self.event.category) formData.append('category_id', self.event.category.id);
                if (self.event.gender.hasOwnProperty('gender')) {
                    formData.append('gender', self.event.gender.gender);
                } else {
                    formData.append('gender', self.event.gender.substr(0, 1).toLowerCase());
                }
                if (self.event.type) formData.append('event_type_id', self.event.type.id);
                if (self.event.reach) formData.append('event_reach_id', self.event.reach.id);
                formData = self.parseObjFormData(self.event.athletes, formData, 'athletes');

                formData.append('init_date', self.event.init_date.format('DD-MM-YYYY HH:mm:ss'));
                formData.append('end_date', self.event.end_date.format('DD-MM-YYYY HH:mm:ss'));

                _eventService2.default.update(self.event.id, formData, function (response) {
                    self.$root.successToast(response.message);
                    self.$router.push({
                        name: 'events.list'
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

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('admin-header', {
    attrs: {
      "title": _vm.$t('admin.events'),
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [_c('form', {
    staticClass: "form",
    attrs: {
      "id": "event-form"
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
  }, [_vm._v(_vm._s(_vm.$t('admin.events')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.translation.name.en')
    }
  }, [_c('label', {
    attrs: {
      "for": "nameen",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.name')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(0), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.translation.name.en),
      expression: "event.translation.name.en"
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
      "name": "event.translation.name.en",
      "type": "text",
      "placeholder": _vm.$t('events.name'),
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.name')
    },
    domProps: {
      "value": _vm._s(_vm.event.translation.name.en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.translation.name.en = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.translation.name.en')),
      expression: "errors.has('event.translation.name.en')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.translation.name.en')) + "\n                                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.translation.description.en')
    }
  }, [_c('label', {
    attrs: {
      "for": "descriptionen",
      "data-error": ""
    }
  }, [_vm._v("\n                                            " + _vm._s(_vm.$t('events.description')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.translation.description.en),
      expression: "event.translation.description.en"
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
      "name": "event.translation.description.en",
      "type": "text",
      "placeholder": _vm.$t('events.description'),
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.description')
    },
    domProps: {
      "value": _vm._s(_vm.event.translation.description.en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.translation.description.en = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.translation.description.en')),
      expression: "errors.has('event.translation.description.en')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.translation.description.en')) + "\n                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6 text-center"
  }, [_c('dnc-image-uploader', {
    ref: "uploader",
    attrs: {
      "btn-text": _vm.$t('events.upload_image'),
      "error-validation-msg": _vm.$t('validation.image', {
        attribute: _vm.$t('events.upload_image')
      }),
      "image": _vm.event.image,
      "default-image": "/images/missing/event/missing.png"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.championship')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.championship')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.event.championship,
      "label": "name",
      "on-change": _vm.championshipChanged,
      "placeholder": _vm.$t('events.select_option'),
      "options": _vm.championships
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.championship),
      expression: "event.championship"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "championship_input",
      "type": "hidden",
      "name": "event.championship",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.championship')
    },
    domProps: {
      "value": _vm._s(_vm.event.championship)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.championship = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.championship')),
      expression: "errors.has('event.championship')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.championship')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.specialty')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.specialty')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.event.specialty,
      "label": "name",
      "on-change": _vm.specialtyChanged,
      "placeholder": _vm.$t('events.select_option'),
      "options": _vm.specialties
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.specialty),
      expression: "event.specialty"
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
      "name": "event.specialty",
      "field": "specialty_input",
      "initial": "off",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.specialty')
    },
    domProps: {
      "value": _vm._s(_vm.event.specialty)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.specialty = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.specialty')),
      expression: "errors.has('event.specialty')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.specialty')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.category')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.category')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.event.category,
      "label": "name",
      "on-change": _vm.categoryChanged,
      "placeholder": _vm.$t('events.select_option'),
      "options": _vm.categories
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.category),
      expression: "event.category"
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
      "name": "event.category",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.category')
    },
    domProps: {
      "value": _vm._s(_vm.event.category)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.category = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.category')),
      expression: "errors.has('event.category')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.category')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.gender')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.gender')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.event.gender,
      "label": "name",
      "on-change": _vm.genderChanged,
      "placeholder": _vm.$t('events.select_option'),
      "options": _vm.genders
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.gender),
      expression: "event.gender"
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
      "name": "event.gender",
      "field": "gender_input",
      "initial": "off",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.gender')
    },
    domProps: {
      "value": _vm._s(_vm.event.gender)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.gender = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.gender')),
      expression: "errors.has('event.gender')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.gender')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.type')
    }
  }, [_c('label', {
    attrs: {
      "for": "sports",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.type')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.event.type,
      "label": "type",
      "on-change": _vm.typeChanged,
      "placeholder": _vm.$t('events.select_option'),
      "options": _vm.types
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.type),
      expression: "event.type"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "type_input",
      "type": "hidden",
      "name": "event.type",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.type')
    },
    domProps: {
      "value": _vm._s(_vm.event.type)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.type = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.type')),
      expression: "errors.has('event.type')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.type')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.reach')
    }
  }, [_c('label', {
    attrs: {
      "for": "reaches",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.reach')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.event.reach,
      "label": "reach",
      "on-change": _vm.reachChanged,
      "placeholder": _vm.$t('events.select_option'),
      "options": _vm.reaches
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.reach),
      expression: "event.reach"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "reach_input",
      "type": "hidden",
      "name": "event.reach",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.reach')
    },
    domProps: {
      "value": _vm._s(_vm.event.reach)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.reach = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.reach')),
      expression: "errors.has('event.reach')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.reach')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.init_date')
    }
  }, [_c('label', {
    attrs: {
      "for": "init_date",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.init_date')))]), _vm._v(" "), _c('vue-datetime-picker', {
    staticClass: "vue-picker2",
    attrs: {
      "name": "init_date",
      "model": _vm.event.init_date,
      "on-change": _vm.initDateChanged,
      "type": "datetime",
      "language": "en",
      "datetime-format": "LLL"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.init_date),
      expression: "event.init_date"
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
      "name": "event.init_date",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.init_date')
    },
    domProps: {
      "value": _vm._s(_vm.event.init_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.init_date = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.init_date')),
      expression: "errors.has('event.init_date')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.init_date')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('event.end_date')
    }
  }, [_c('label', {
    attrs: {
      "for": "end_date",
      "data-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('events.end_date')))]), _vm._v(" "), _c('vue-datetime-picker', {
    staticClass: "vue-picker3",
    attrs: {
      "name": "end_date",
      "model": _vm.event.end_date,
      "type": "datetime",
      "language": "en",
      "on-change": _vm.endDateChanged,
      "datetime-format": "LLL"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.event.end_date),
      expression: "event.end_date"
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
      "name": "event.end_date",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('events.end_date')
    },
    domProps: {
      "value": _vm._s(_vm.event.end_date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.event.end_date = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('event.end_date')),
      expression: "errors.has('event.end_date')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('event.end_date')) + "\n                                        ")])], 1)])]), _vm._v(" "), _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-34cd269d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2V2ZW50cy9lZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlIiwid2VicGFjazovLy9wYWdlSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2E1NmYqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzM4YTMqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzQ0MTIqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyLmpzPzBjMzcqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2Y1YjUqKioiLCJ3ZWJwYWNrOi8vL3NlbGVjdC52dWU/YTAxNSoqKiIsIndlYnBhY2s6Ly8vZG5jLWltYWdlLXVwbG9hZC52dWU/MGNlYyoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4LmpzP2MwZDQqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvcG9pbnRlclNjcm9sbC5qcz9lYWI2KioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXIuanM/YmVkNioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzhhNTcqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT9iYjE3KioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlP2Q4Y2QqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT9mY2VkKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/MmQ4NyoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT83NWY4KioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/Nzk2ZCoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL2V2ZW50cy9ldmVudHMuanM/ZWU2NSoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGF0ZXRpbWUvdnVlLWRhdGV0aW1lLXBpY2tlci5qcz82NWJjKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL2V2ZW50cy9ldmVudFNlcnZpY2UuanM/YzUwMioqKiIsIndlYnBhY2s6Ly8vZWRpdC52dWU/ZjEzMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2V2ZW50cy9lZGl0LnZ1ZT85MjNkIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJwYXJzZU9iakZvcm1EYXRhIiwib2JqIiwiZm9ybWRhdGEiLCJuYW1lc3BhY2UiLCJmZCIsImZvcm1LZXkiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRmlsZSIsImFwcGVuZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9wcyIsImxvYWRpbmciLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJvblNlYXJjaCIsImRlYm91bmNlIiwiTnVtYmVyIiwid2F0Y2giLCJzZWFyY2giLCJsZW5ndGgiLCJ0b2dnbGVMb2FkaW5nIiwidG9nZ2xlIiwidHlwZUFoZWFkUG9pbnRlciIsIm1heWJlQWRqdXN0U2Nyb2xsIiwicGl4ZWxzVG9Qb2ludGVyVG9wIiwicGl4ZWxzVG9Qb2ludGVyQm90dG9tIiwidmlld3BvcnQiLCJ0b3AiLCJzY3JvbGxUbyIsImJvdHRvbSIsInBvaW50ZXJIZWlnaHQiLCJpIiwiJHJlZnMiLCJkcm9wZG93bk1lbnUiLCJjaGlsZHJlbiIsIm9mZnNldEhlaWdodCIsImVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwb3NpdGlvbiIsImRhdGEiLCJmaWx0ZXJlZE9wdGlvbnMiLCJ0eXBlQWhlYWRVcCIsInR5cGVBaGVhZERvd24iLCJ0eXBlQWhlYWRTZWxlY3QiLCJzZWxlY3QiLCJ0YWdnYWJsZSIsImNsZWFyU2VhcmNoT25TZWxlY3QiLCJEQVRFVElNRV9QSUNLRVJfVE9PTFRJUFMiLCJERUZBVUxUX0xBTkdVQUdFIiwicmVwbGFjZSIsImluaGVyaXQiLCJ0ZW1wbGF0ZSIsIm1vZGVsIiwicmVxdWlyZWQiLCJTdHJpbmciLCJsYW5ndWFnZSIsImRhdGV0aW1lRm9ybWF0IiwiZGF0ZUZvcm1hdCIsInRpbWVGb3JtYXQiLCJuYW1lIiwib25DaGFuZ2UiLCJkYXRlIiwiY3JlYXRlZCIsImlzQ2hhbmdpbmciLCJjb250cm9sIiwibW91bnRlZCIsIm9wdGlvbnMiLCJ1c2VDdXJyZW50Iiwic2hvd0NsZWFyIiwic2hvd0Nsb3NlIiwiaWNvbnMiLCJ0aW1lIiwidXAiLCJkb3duIiwicHJldmlvdXMiLCJuZXh0IiwidG9kYXkiLCJjbGVhciIsImNsb3NlIiwiJGxhbmd1YWdlIiwibGFuZ2F1Z2UiLCJsb2NhbGUiLCJnZXRMYW5ndWFnZUNvZGUiLCJmb3JtYXQiLCIkaTE4biIsImRhdGV0aW1lX3BpY2tlciIsIm1lc3NhZ2VzIiwidG9vbHRpcHMiLCIkIiwiZm4iLCJkYXRldGltZXBpY2tlciIsImRlZmF1bHRzIiwiJG5leHRUaWNrIiwiJGVsIiwibWUiLCJvbiIsInZhbCIsIm9sZFZhbCIsInRvTG93ZXJDYXNlIiwic3Vic3RyIiwic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwiY3JlYXRlIiwiZXZlbnQiLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJyZW1vdmUiLCJkZWxldGUiLCJnZXRDaGFtcGlvbnNoaXBzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7O2tCQUlBO3NCQUVBO0FBSEE7O2tCQUtBO3lDQUNBO3VCQUNBO0FBR0E7QUFOQTtBQUxB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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzMzLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lZGl0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM0Y2QyNjlkIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2V2ZW50cy9lZGl0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGVkaXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM0Y2QyNjlkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzRjZDI2OWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9ldmVudHMvZWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFnZUhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt7dGl0bGV9fVxuICAgICAgICA8L2gxPlxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvb2w+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxuICAgIC5hZG1pbi1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDk3cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NTM3OWY1Y2IiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxODZcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiXG4gIH0sIFtfYygnaDEnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iXCJcbiAgfSwgX3ZtLl9sKChfdm0uYnJlYWRjcnVtYnMpLCBmdW5jdGlvbihicmVhZGNydW1iKSB7XG4gICAgcmV0dXJuIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjogYnJlYWRjcnVtYi5ocmVmLFxuICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiLFxuICAgICAgICBcInRhZ1wiOiBcImxpXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KGJyZWFkY3J1bWIudGl0bGUpKSArIFwiXFxuICAgICAgICBcIildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03ZmNkMDk1NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJlOWZlYzFjMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgbWV0aG9kczoge1xuICAgICAgICBwYXJzZU9iakZvcm1EYXRhKG9iaiwgZm9ybWRhdGEsIG5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgICB2YXIgZmQgPSBmb3JtZGF0YTtcbiAgICAgICAgICAgIHZhciBmb3JtS2V5O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIG9ialtwcm9wZXJ0eV0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1LZXkgPSBuYW1lc3BhY2UgKyAnWycgKyBwcm9wZXJ0eSArICddJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1LZXkgPSBwcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIGJ1dCBub3QgYSBGaWxlLFxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgcmVjdXJzaXZpdHkuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcgJiYgIShvYmpbcHJvcGVydHldIGluc3RhbmNlb2YgRmlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VPYmpGb3JtRGF0YShvYmpbcHJvcGVydHldLCBmZCwgZm9ybUtleSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZC5hcHBlbmQoZm9ybUtleSwgb2JqW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9mb3JtRGF0YVBhcnNlci5qcyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LThkMzUxMDM0IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNlbGVjdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOGQzNTEwMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04ZDM1MTAzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IDI3IDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiPHN0eWxlPlxuICAgIC52LXNlbGVjdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDZweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuNSk7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XG4gICAgICAgIGJvdHRvbTogMXB4O1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5zZWFyY2hhYmxlIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICBjdXJzb3I6IHRleHQ7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgICAgIHdpZHRoOiAxMGVtO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGNsZWFyOiBub25lO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5hY3RpdmUgYSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLmhpZ2hsaWdodCBhLFxuICAgIC52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLnNwaW5uZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XG4gICAgICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcbiAgICB9XG5cbiAgICAudi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyLFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgaGVpZ2h0OiA1ZW07XG4gICAgfVxuXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gdi1zZWxlY3RcIiA6Y2xhc3M9XCJkcm9wZG93bkNsYXNzZXNcIj5cbiAgICAgICAgPGRpdiByZWY9XCJ0b2dnbGVcIiBAbW91c2Vkb3duLnByZXZlbnQ9XCJ0b2dnbGVEcm9wZG93blwiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtaWY9XCIhc2VhcmNoYWJsZSAmJiBpc1ZhbHVlRW1wdHlcIj5cbiAgICAgICAgICB7eyBwbGFjZWhvbGRlciB9fVxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VsZWN0ZWQtdGFnXCIgdi1mb3I9XCIob3B0aW9uLGluZGV4KSBpbiB2YWx1ZUFzQXJyYXlcIiB2LWJpbmQ6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVwibXVsdGlwbGVcIiBAY2xpY2s9XCJzZWxlY3Qob3B0aW9uKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICA6ZGVib3VuY2U9XCJkZWJvdW5jZVwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJzZWFyY2hhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZGVsZXRlPVwibWF5YmVEZWxldGVWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lc2M9XCJvbkVzY2FwZVwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLnVwLnByZXZlbnQ9XCJ0eXBlQWhlYWRVcFwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRvd24ucHJldmVudD1cInR5cGVBaGVhZERvd25cIlxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXIucHJldmVudD1cInR5cGVBaGVhZFNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIEBibHVyPVwib3BlbiA9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwib3BlbiA9IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJzZWFyY2hQbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IGlzVmFsdWVFbXB0eSA/ICcxMDAlJyA6ICdhdXRvJyB9XCJcbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgPGkgcmVmPVwib3BlbkluZGljYXRvclwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzcz1cIm9wZW4taW5kaWNhdG9yXCI+PC9pPlxuXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwic3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCIgdi1zaG93PVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHVsIHJlZj1cImRyb3Bkb3duTWVudVwiIHYtc2hvdz1cIm9wZW5cIiA6dHJhbnNpdGlvbj1cInRyYW5zaXRpb25cIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAnbWF4LWhlaWdodCc6IG1heEhlaWdodCB9XCI+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCIob3B0aW9uLGluZGV4KSBpbiBmaWx0ZXJlZE9wdGlvbnNcIiB2LWJpbmQ6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IHR5cGVBaGVhZFBvaW50ZXIgfVwiXG4gICAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cInR5cGVBaGVhZFBvaW50ZXIgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgIDxhIEBtb3VzZWRvd24ucHJldmVudD1cInNlbGVjdChvcHRpb24pXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICAgIDxsaSB0cmFuc2l0aW9uPVwiZmFkZVwiIHYtaWY9XCIhZmlsdGVyZWRPcHRpb25zLmxlbmd0aFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibm8tb3B0aW9uc1wiPlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLjwvc2xvdD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cbiAgICBpbXBvcnQgcG9pbnRlclNjcm9sbCBmcm9tICdiYXNlL21peGlucy9wb2ludGVyU2Nyb2xsJ1xuICAgIGltcG9ydCB0eXBlQWhlYWRQb2ludGVyIGZyb20gJ2Jhc2UvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXInXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnYmFzZS9taXhpbnMvYWpheCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWl4aW5zOiBbcG9pbnRlclNjcm9sbCwgdHlwZUFoZWFkUG9pbnRlciwgYWpheF0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29udGFpbnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB2YWx1ZS4gVmVyeSBzaW1pbGFyIHRvIGFcbiAgICAgICAgICAgICAqIGB2YWx1ZWAgYXR0cmlidXRlIG9uIGFuIDxpbnB1dD4uIEluIG1vc3QgY2FzZXMsIHlvdSdsbCB3YW50XG4gICAgICAgICAgICAgKiB0byBzZXQgdGhpcyBhcyBhIHR3by13YXkgYmluZGluZywgdXNpbmcgOnZhbHVlLnN5bmMuIEhvd2V2ZXIsXG4gICAgICAgICAgICAgKiB0aGlzIHdpbGwgbm90IHdvcmsgd2l0aCBWdWV4LCBpbiB3aGljaCBjYXNlIHlvdSdsbCBuZWVkIHRvIHVzZVxuICAgICAgICAgICAgICogdGhlIG9uQ2hhbmdlIGNhbGxiYWNrIHByb3BlcnR5LlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdHx8U3RyaW5nfHxudWxsfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHRvIGJlIHVzZWQgYXMgZHJvcGRvd24gY2hvaWNlcy5cbiAgICAgICAgICAgICAqIElmIHlvdSBhcmUgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdnVlLXNlbGVjdCB3aWxsIGxvb2sgZm9yXG4gICAgICAgICAgICAgKiBhIGBsYWJlbGAga2V5IChleC4gW3tsYWJlbDogJ1RoaXMgaXMgRm9vJywgdmFsdWU6ICdmb28nfV0pLiBBXG4gICAgICAgICAgICAgKiBjdXN0b20gbGFiZWwga2V5IGNhbiBiZSBzZXQgd2l0aCB0aGUgYGxhYmVsYCBwcm9wLlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldHMgdGhlIG1heC1oZWlnaHQgcHJvcGVydHkgb24gdGhlIGRyb3Bkb3duIGxpc3QuXG4gICAgICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgZmlsdGVyaW5nIHRoZSBvcHRpb25zLlxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlYXJjaGFibGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYG11bHRpcGxlYCBhdHRyaWJ1dGUgb24gYSBgPHNlbGVjdD5gIGlucHV0LlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbXVsdGlwbGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIG9uIGFuIGA8aW5wdXQ+YC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldHMgYSBWdWUgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiB0aGUgYC5kcm9wZG93bi1tZW51YC4gdnVlLXNlbGVjdFxuICAgICAgICAgICAgICogZG9lcyBub3QgaW5jbHVkZSBDU1MgZm9yIHRyYW5zaXRpb25zLCB5b3UnbGwgbmVlZCB0byBhZGQgdGhlbSB5b3Vyc2VsZi5cbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2V4cGFuZCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5hYmxlcy9kaXNhYmxlcyBjbGVhcmluZyB0aGUgc2VhcmNoIHRleHQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2xlYXJTZWFyY2hPblNlbGVjdDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUZWxscyB2dWUtc2VsZWN0IHdoYXQga2V5IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgb3B0aW9uXG4gICAgICAgICAgICAgKiBsYWJlbHMgd2hlbiBlYWNoIGBvcHRpb25gIGlzIGFuIG9iamVjdC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdsYWJlbCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGJhY2sgdG8gZ2VuZXJhdGUgdGhlIGxhYmVsIHRleHQuIElmIHtvcHRpb259XG4gICAgICAgICAgICAgKiBpcyBhbiBvYmplY3QsIHJldHVybnMgb3B0aW9uW3RoaXMubGFiZWxdIGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0KG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsICYmIG9wdGlvblt0aGlzLmxhYmVsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bdGhpcy5sYWJlbF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIHRoZSBzZWxlY3RlZFxuICAgICAgICAgICAgICogdmFsdWUocykgY2hhbmdlLiBXaGVuIGludGVncmF0aW5nIHdpdGggVnVleCwgdXNlIHRoaXMgY2FsbGJhY2sgdG8gdHJpZ2dlclxuICAgICAgICAgICAgICogYW4gYWN0aW9uLCByYXRoZXIgdGhhbiB1c2luZyA6dmFsdWUuc3luYyB0byByZXRyZWl2ZSB0aGUgc2VsZWN0ZWQgdmFsdWUuXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCB7bnVsbH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25DaGFuZ2U6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY2hhbmdlUGFyYW06IHt9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGNyZWF0aW5nIG9wdGlvbnMgZnJvbSBzZWFyY2hJbnB1dC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0YWdnYWJsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2hlbiB0cnVlLCBuZXdseSBjcmVhdGVkIHRhZ3Mgd2lsbCBiZSBhZGRlZCB0b1xuICAgICAgICAgICAgICogdGhlIG9wdGlvbnMgbGlzdC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwdXNoVGFnczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlciBkZWZpbmVkIGZ1bmN0aW9uIGZvciBhZGRpbmcgT3B0aW9uc1xuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjcmVhdGVPcHRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtbdGhpcy5sYWJlbF06IG5ld09wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3T3B0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGVuIGZhbHNlLCB1cGRhdGluZyB0aGUgb3B0aW9ucyB3aWxsIG5vdCByZXNldCB0aGUgc2VsZWN0IHZhbHVlXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVzZXRPbk9wdGlvbnNDaGFuZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHZhbHVlKHZhbCwgb2xkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3Rpb24odmFsLCBvbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdmFsICE9PSBvbGQgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhZ2dhYmxlICYmIHRoaXMucmVzZXRPbk9wdGlvbnNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG11bHRpcGxlKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsID8gW10gOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdChvcHRpb24pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgIXRoaXMub3B0aW9uRXhpc3RzKG9wdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuY3JlYXRlT3B0aW9uKG9wdGlvbilcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHVzaFRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW29wdGlvbl1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaChvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG9wdGlvblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2VsZWN0KG9wdGlvbilcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGUtc2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGVzZWxlY3Qob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IC0xXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gb3B0aW9uIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0aW9uLmluZGV4T2YocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgZnJvbSB0aGlzLnNlbGVjdCBhZnRlciBlYWNoIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uQWZ0ZXJTZWxlY3Qob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5vcGVuSW5kaWNhdG9yIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnNlYXJjaCB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy50b2dnbGUgfHwgZS50YXJnZXQgPT09IHRoaXMuJGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKSAvLyBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGJsdXJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmZvY3VzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIG9wdGlvbiBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gIG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICBUcnVlIHdoZW4gc2VsZWN0ZWQgfHwgRmFsc2Ugb3RoZXJ3aXNlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uID09PSBvcHRpb25cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgdGhlcmUgaXMgYW55IHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICogT3RoZXJ3aXNlLCBibHVyIHRoZSBzZWFyY2ggaW5wdXQgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uRXNjYXBlKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlbGV0ZSB0aGUgdmFsdWUgb24gRGVsZXRlIGtleXByZXNzIHdoZW4gdGhlcmUgaXMgbm9cbiAgICAgICAgICAgICAqIHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgJiB0aGVyZSdzIHRhZ3MgdG8gZGVsZXRlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzLnZhbHVlfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtYXliZURlbGV0ZVZhbHVlKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUubGVuZ3RoICYmIHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLnZhbHVlLnBvcCgpIDogdGhpcy5zZWxlY3Rpb24gPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgYW4gb3B0aW9uIGV4aXN0c1xuICAgICAgICAgICAgICogd2l0aGluIHRoaXMub3B0aW9ucyBhcnJheS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9wdGlvbkV4aXN0cyhvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0c1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2xhc3NlcyB0byBiZSBvdXRwdXQgb24gLmRyb3Bkb3duXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRoaXMuc2VhcmNoYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdGhpcy5sb2FkaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIHBsYWNlaG9sZGVyIHN0cmluZyBpZiBpdCdzIHNldFxuICAgICAgICAgICAgICogJiB0aGVyZSBpcyBubyB2YWx1ZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gUGxhY2Vob2xkZXIgdGV4dFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRW1wdHkgJiYgdGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBjdXJyZW50bHkgZGlzcGxheWVkIG9wdGlvbnMsIGZpbHRlcmVkXG4gICAgICAgICAgICAgKiBieSB0aGUgc2VhcmNoIGVsZW1lbnRzIHZhbHVlLiBJZiB0YWdnaW5nXG4gICAgICAgICAgICAgKiB0cnVlLCB0aGUgc2VhcmNoIHRleHQgd2lsbCBiZSBwcmVwZW5kZWRcbiAgICAgICAgICAgICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3NlbGYubGFiZWxdLmluZGV4T2Yoc2VsZi5zZWFyY2gpICE9PSAtMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoICYmICF0aGlzLm9wdGlvbkV4aXN0cyh0aGlzLnNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHRoaXMuc2VhcmNoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uc1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmVuJ3QgYW55IG9wdGlvbnMgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpc1ZhbHVlRW1wdHkoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuc2VsZWN0aW9uKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuc2VsZWN0aW9uLmxlbmd0aFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgaW4gYXJyYXkgZm9ybWF0LlxuICAgICAgICAgICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhbHVlQXNBcnJheSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5zZWxlY3Rpb25dXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlbGVjdC52dWU/NDZhOTg4YTQiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGltZyA6c3JjPVwiZGVmYXVsdEltYWdlXCIgYWx0PVwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIgd2lkdGg9XCIxMTBweFwiIHYtaWY9XCIhaW1hZ2VGaWxlXCI+XG4gICAgICAgIDxpbWcgOnNyYz1cImltYWdlRmlsZVwiIGFsdD1cImF0aGxldGUgcHJvZmlsZSBpbWFnZVwiIHdpZHRoPVwiMTEwcHhcIiB2LWlmPVwiaW1hZ2VGaWxlXCI+XG5cbiAgICAgICAgPGJyPjxicj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBpZD1cImltYWdlLXVwbG9hZGVyXCIgY2xhc3M9XCJpbnB1dGZpbGVcIiBAY2hhbmdlPVwib25GaWxlQ2hhbmdlXCJcbiAgICAgICAgICAgICAgIHJlZj1cImZpbGVpbnB1dFwiLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cImltYWdlLXVwbG9hZGVyXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLWNsb3VkXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+e3tidG5UZXh0fX08L3NwYW4+PC9sYWJlbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gICAgLmlucHV0ZmlsZSB7XG4gICAgICAgIHdpZHRoOiAwLjFweDtcbiAgICAgICAgaGVpZ2h0OiAwLjFweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7fSxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2ltYWdlLyonXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnRuVGV4dDoge30sXG4gICAgICAgICAgICBlcnJvclZhbGlkYXRpb25Nc2c6IHt9LFxuICAgICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMTEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHt9LFxuICAgICAgICAgICAgZGVmYXVsdEltYWdlOiB7fVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgaW1hZ2U6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbWFnZUZpbGU6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpe1xuICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzIHx8IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAgICAgICAgIGlmICghZmlsZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJbWFnZShmaWxlc1swXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xuICAgICAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKHRoaXMuYWNjZXB0ZWRGaWxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS11cGxvYWRlclwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3Qud2FybmluZ1RvYXN0KHRoaXMuZXJyb3JWYWxpZGF0aW9uTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0RmlsZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmZpbGVpbnB1dC5maWxlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRuYy1pbWFnZS11cGxvYWQudnVlPzQ4YjBmZmY2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdHByb3BzOiB7XG5cdFx0LyoqXG5cdFx0ICogVG9nZ2xlcyB0aGUgYWRkaW5nIG9mIGEgJ2xvYWRpbmcnIGNsYXNzIHRvIHRoZSBtYWluXG5cdFx0ICogLnYtc2VsZWN0IHdyYXBwZXIuIFVzZWZ1bCB0byBjb250cm9sIFVJIHN0YXRlIHdoZW5cblx0XHQgKiByZXN1bHRzIGFyZSBiZWluZyBwcm9jZXNzZWQgdGhyb3VnaCBBSkFYLlxuXHRcdCAqL1xuXHRcdGxvYWRpbmc6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBBY2NlcHQgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgYmVcblx0XHQgKiBydW4gd2hlbiB0aGUgc2VhcmNoIHRleHQgY2hhbmdlcy5cblx0XHQgKlxuXHRcdCAqIGxvYWRpbmcoKSBhY2NlcHRzIGEgYm9vbGVhbiB2YWx1ZSwgYW5kIGNhblxuXHRcdCAqIGJlIHVzZWQgdG8gdG9nZ2xlIGEgbG9hZGluZyBjbGFzcyBmcm9tXG5cdFx0ICogdGhlIG9uU2VhcmNoIGNhbGxiYWNrLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzZWFyY2h9ICBTdHJpbmcgICAgICAgICAgQ3VycmVudCBzZWFyY2ggdGV4dFxuXHRcdCAqIEBwYXJhbSB7bG9hZGluZ30gRnVuY3Rpb24oYm9vbCkgIFRvZ2dsZSBsb2FkaW5nIGNsYXNzXG5cdFx0ICovXG5cdFx0b25TZWFyY2g6IHtcblxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZVxuXHRcdCAqIGludm9raW5nIHRoaXMub25TZWFyY2goKS4gVXNlZCB0byBwcmV2ZW50XG5cdFx0ICogc2VuZGluZyBhbiBBSkFYIHJlcXVlc3QgdW50aWwgaW5wdXQgaXMgY29tcGxldGUuXG5cdFx0ICovXG5cdFx0ZGVib3VuY2U6IHtcblx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdGRlZmF1bHQ6IDBcblx0XHR9XG5cdH0sXG5cblx0d2F0Y2g6IHtcblx0XHQvKipcblx0XHQgKiBJZiBhIGNhbGxiYWNrICYgc2VhcmNoIHRleHQgaGFzIGJlZW4gcHJvdmlkZWQsXG5cdFx0ICogaW52b2tlIHRoZSBvblNlYXJjaCBjYWxsYmFjay5cblx0XHQgKi9cblx0XHRzZWFyY2goKSB7XG5cdFx0XHRpZiAodGhpcy5zZWFyY2gubGVuZ3RoID4gMCAmJiB0aGlzLm9uU2VhcmNoKSB7XG5cdFx0XHRcdHRoaXMub25TZWFyY2godGhpcy5zZWFyY2gsIHRoaXMudG9nZ2xlTG9hZGluZylcblx0XHRcdH1cblx0XHR9LFxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHQvKipcblx0XHQgKiBUb2dnbGUgdGhpcy5sb2FkaW5nLiBPcHRpb25hbGx5IHBhc3MgYSBib29sZWFuXG5cdFx0ICogdmFsdWUuIElmIG5vIHZhbHVlIGlzIHByb3ZpZGVkLCB0aGlzLmxvYWRpbmdcblx0XHQgKiB3aWxsIGJlIHNldCB0byB0aGUgb3Bwb3NpdGUgb2YgaXQncyBjdXJyZW50IHZhbHVlLlxuXHRcdCAqIEBwYXJhbSB0b2dnbGUgQm9vbGVhblxuXHRcdCAqIEByZXR1cm5zIHsqfVxuXHRcdCAqL1xuXHRcdHRvZ2dsZUxvYWRpbmcodG9nZ2xlID0gbnVsbCkge1xuXHRcdFx0aWYgKHRvZ2dsZSA9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxvYWRpbmcgPSAhdGhpcy5sb2FkaW5nXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nID0gdG9nZ2xlXG5cdFx0fVxuXHR9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICB3YXRjaDoge1xuICAgIHR5cGVBaGVhZFBvaW50ZXIoKSB7XG4gICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEFkanVzdCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBkcm9wZG93biBsaXN0XG4gICAgICogaWYgdGhlIGN1cnJlbnQgcG9pbnRlciBpcyBvdXRzaWRlIG9mIHRoZVxuICAgICAqIG92ZXJmbG93IGJvdW5kcy5cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBtYXliZUFkanVzdFNjcm9sbCgpIHtcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJUb3AgPSB0aGlzLnBpeGVsc1RvUG9pbnRlclRvcCgpXG4gICAgICBsZXQgcGl4ZWxzVG9Qb2ludGVyQm90dG9tID0gdGhpcy5waXhlbHNUb1BvaW50ZXJCb3R0b20oKVxuXG4gICAgICBpZiAoIHBpeGVsc1RvUG9pbnRlclRvcCA8PSB0aGlzLnZpZXdwb3J0KCkudG9wKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKCBwaXhlbHNUb1BvaW50ZXJUb3AgKVxuICAgICAgfSBlbHNlIGlmIChwaXhlbHNUb1BvaW50ZXJCb3R0b20gPj0gdGhpcy52aWV3cG9ydCgpLmJvdHRvbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyggdGhpcy52aWV3cG9ydCgpLnRvcCArIHRoaXMucG9pbnRlckhlaWdodCgpIClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSB0b3Agb2YgdGhlIGRyb3Bkb3duXG4gICAgICogbGlzdCB0byB0aGUgdG9wIG9mIHRoZSBjdXJyZW50IHBvaW50ZXIgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHBpeGVsc1RvUG9pbnRlclRvcCgpIHtcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJUb3AgPSAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHlwZUFoZWFkUG9pbnRlcjsgaSsrKSB7XG4gICAgICAgIHBpeGVsc1RvUG9pbnRlclRvcCArPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlbltpXS5vZmZzZXRIZWlnaHRcbiAgICAgIH1cbiAgICAgIHJldHVybiBwaXhlbHNUb1BvaW50ZXJUb3BcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSB0b3Agb2YgdGhlIGRyb3Bkb3duXG4gICAgICogbGlzdCB0byB0aGUgYm90dG9tIG9mIHRoZSBjdXJyZW50IHBvaW50ZXIgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBwaXhlbHNUb1BvaW50ZXJCb3R0b20oKSB7XG4gICAgICByZXR1cm4gdGhpcy5waXhlbHNUb1BvaW50ZXJUb3AoKSArIHRoaXMucG9pbnRlckhlaWdodCgpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvZmZzZXRIZWlnaHQgb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcG9pbnRlckhlaWdodCgpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuY2hpbGRyZW5bdGhpcy50eXBlQWhlYWRQb2ludGVyXVxuICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCA6IDBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnRseSB2aWV3YWJsZSBwb3J0aW9uIG9mIHRoZSBkcm9wZG93bk1lbnUuXG4gICAgICogQHJldHVybnMge3t0b3A6IChzdHJpbmd8KnxudW1iZXIpLCBib3R0b206ICp9fVxuICAgICAqL1xuICAgIHZpZXdwb3J0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbTogdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUub2Zmc2V0SGVpZ2h0ICsgdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0aGUgZHJvcGRvd25NZW51IHRvIGEgZ2l2ZW4gcG9zaXRpb24uXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ocG9zaXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3AgPSBwb3NpdGlvblxuICAgIH0sXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9wb2ludGVyU2Nyb2xsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGVBaGVhZFBvaW50ZXI6IC0xXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZmlsdGVyZWRPcHRpb25zKCkge1xuICAgICAgdGhpcy50eXBlQWhlYWRQb2ludGVyID0gMFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogTW92ZSB0aGUgdHlwZUFoZWFkUG9pbnRlciB2aXN1YWxseSB1cCB0aGUgbGlzdCBieVxuICAgICAqIHN1YnRyYWN0aW5nIHRoZSBjdXJyZW50IGluZGV4IGJ5IG9uZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHR5cGVBaGVhZFVwKCkge1xuICAgICAgaWYgKHRoaXMudHlwZUFoZWFkUG9pbnRlciA+IDApIHtcbiAgICAgICAgdGhpcy50eXBlQWhlYWRQb2ludGVyLS1cbiAgICAgICAgaWYoIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwgKSB7XG4gICAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW92ZSB0aGUgdHlwZUFoZWFkUG9pbnRlciB2aXN1YWxseSBkb3duIHRoZSBsaXN0IGJ5XG4gICAgICogYWRkaW5nIHRoZSBjdXJyZW50IGluZGV4IGJ5IG9uZS5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHR5cGVBaGVhZERvd24oKSB7XG4gICAgICBpZiAodGhpcy50eXBlQWhlYWRQb2ludGVyIDwgdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIrK1xuICAgICAgICBpZiggdGhpcy5tYXliZUFkanVzdFNjcm9sbCApIHtcbiAgICAgICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgdGhlIG9wdGlvbiBhdCB0aGUgY3VycmVudCB0eXBlQWhlYWRQb2ludGVyIHBvc2l0aW9uLlxuICAgICAqIE9wdGlvbmFsbHkgY2xlYXIgdGhlIHNlYXJjaCBpbnB1dCBvbiBzZWxlY3Rpb24uXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0eXBlQWhlYWRTZWxlY3QoKSB7XG4gICAgICBpZiggdGhpcy5maWx0ZXJlZE9wdGlvbnNbIHRoaXMudHlwZUFoZWFkUG9pbnRlciBdICkge1xuICAgICAgICB0aGlzLnNlbGVjdCggdGhpcy5maWx0ZXJlZE9wdGlvbnNbIHRoaXMudHlwZUFoZWFkUG9pbnRlciBdICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoKXtcbiAgICAgICAgdGhpcy5zZWxlY3QodGhpcy5zZWFyY2gpXG4gICAgICB9XG5cbiAgICAgIGlmKCB0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QgKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gXCJcIjtcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdHlwZUFoZWFkUG9pbnRlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmlucHV0ZmlsZSB7XFxuICAgIHdpZHRoOiAwLjFweDtcXG4gICAgaGVpZ2h0OiAwLjFweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuLmlucHV0ZmlsZSArIGxhYmVsIHtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzQ4YjBmZmY2XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFhQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImRuYy1pbWFnZS11cGxvYWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiZGVmYXVsdEltYWdlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCIhaW1hZ2VGaWxlXFxcIj5cXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiaW1hZ2VGaWxlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCJpbWFnZUZpbGVcXFwiPlxcblxcbiAgICAgICAgPGJyPjxicj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuYW1lPVxcXCJmaWxlXFxcIiBpZD1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJpbnB1dGZpbGVcXFwiIEBjaGFuZ2U9XFxcIm9uRmlsZUNoYW5nZVxcXCJcXG4gICAgICAgICAgICAgICByZWY9XFxcImZpbGVpbnB1dFxcXCIvPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jbG91ZFxcXCI+PC9pPlxcbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAuaW5wdXRmaWxlIHtcXG4gICAgICAgIHdpZHRoOiAwLjFweDtcXG4gICAgICAgIGhlaWdodDogMC4xcHg7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICB9XFxuXFxuICAgIC5pbnB1dGZpbGUgKyBsYWJlbCB7XFxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcblxcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgdmFsdWU6IHt9LFxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGJ0blRleHQ6IHt9LFxcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXFxuICAgICAgICAgICAgd2lkdGg6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGltYWdlOiB7fSxcXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XFxuICAgICAgICB9LFxcbiAgICAgICAgd2F0Y2g6IHtcXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHZhbDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpe1xcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcztcXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCh0aGlzLmFjY2VwdGVkRmlsZXMpKSB7XFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiaW1hZ2UtdXBsb2FkZXJcXFwiKS52YWx1ZSA9IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC53YXJuaW5nVG9hc3QodGhpcy5lcnJvclZhbGlkYXRpb25Nc2cpO1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGdldEZpbGUoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZmlsZWlucHV0LmZpbGVzWzBdO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiAyNyAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDZweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbn1cXG4udi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4udi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuNSk7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XFxuICAgIGJvdHRvbTogMXB4O1xcbn1cXG4udi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxufVxcbi52LXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4udi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4udi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xcbiAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG59XFxuLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIC41ZW07XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNsZWFyOiBub25lO1xcbn1cXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1zZWxlY3QgbGkgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtc2VsZWN0IC5hY3RpdmUgYSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcXG4udi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcbi52LXNlbGVjdCAuc3Bpbm5lciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDVweDtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG59XFxuLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4udi1zZWxlY3QgLnNwaW5uZXIsXFxuLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4wJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4wJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT80NmE5ODhhNFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUNBLDhFQUFBO1lBQUEsc0VBQUE7SUFDQSxXQUFBO0lBQ0EsZ0NBQUE7SUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTtJQUNBLG1DQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUNBLDhFQUFBO1lBQUEsc0VBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSx3Q0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtDQUNBO0FBRUE7SUFDQSxvQkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7Q0FDQTtBQUVBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBOztJQUVBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxpQ0FBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBOztJQUVBLG9CQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtJQUNBLGtEQUFBO0lBQ0EsOENBQUE7SUFDQSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsdURBQUE7WUFBQSwrQ0FBQTtJQUNBLGdDQUFBO0lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7O0lBRUEsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7QUFDQTtRQUNBLGdDQUFBO2dCQUFBLHdCQUFBO0NBQ0E7QUFDQTtRQUNBLGtDQUFBO2dCQUFBLDBCQUFBO0NBQ0E7Q0FDQTtBQUVBO0FBQ0E7UUFDQSxnQ0FBQTtnQkFBQSx3QkFBQTtDQUNBO0FBQ0E7UUFDQSxrQ0FBQTtnQkFBQSwwQkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcInNlbGVjdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHN0eWxlPlxcbiAgICAudi1zZWxlY3Qge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiA2cHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDAuMjVlbSAwLjI1ZW0gMCAwO1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XFxuICAgICAgICBib3R0b206IDFweDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XFxuICAgICAgICBjb2xvcjogIzMzMztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XFxuICAgICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XFxuICAgICAgICB3aWR0aDogMTBlbTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICBjbGVhcjogbm9uZTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgbGkgYSB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5hY3RpdmUgYSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIC4xKTtcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXFxuICAgIC52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1cHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYm9yZGVyLXRvcDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgICAgICBib3JkZXItbGVmdDogLjllbSBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC40NSk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB3aWR0aDogNWVtO1xcbiAgICAgICAgaGVpZ2h0OiA1ZW07XFxuICAgIH1cXG5cXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICB9XFxuICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zdHlsZT5cXG5cXG48dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIHYtc2VsZWN0XFxcIiA6Y2xhc3M9XFxcImRyb3Bkb3duQ2xhc3Nlc1xcXCI+XFxuICAgICAgICA8ZGl2IHJlZj1cXFwidG9nZ2xlXFxcIiBAbW91c2Vkb3duLnByZXZlbnQ9XFxcInRvZ2dsZURyb3Bkb3duXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdi1pZj1cXFwiIXNlYXJjaGFibGUgJiYgaXNWYWx1ZUVtcHR5XFxcIj5cXG4gICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX1cXG4gICAgICAgIDwvc3Bhbj5cXG5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2VsZWN0ZWQtdGFnXFxcIiB2LWZvcj1cXFwiKG9wdGlvbixpbmRleCkgaW4gdmFsdWVBc0FycmF5XFxcIiB2LWJpbmQ6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cXG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCJtdWx0aXBsZVxcXCIgQGNsaWNrPVxcXCJzZWxlY3Qob3B0aW9uKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvc3Bhbj5cXG5cXG4gICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmRlYm91bmNlPVxcXCJkZWJvdW5jZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwic2VhcmNoYWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRlbGV0ZT1cXFwibWF5YmVEZWxldGVWYWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lc2M9XFxcIm9uRXNjYXBlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24udXAucHJldmVudD1cXFwidHlwZUFoZWFkVXBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kb3duLnByZXZlbnQ9XFxcInR5cGVBaGVhZERvd25cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXIucHJldmVudD1cXFwidHlwZUFoZWFkU2VsZWN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XFxcIm9wZW4gPSBmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cXFwib3BlbiA9IHRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVxcXCJzZWFyY2hQbGFjZWhvbGRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwieyB3aWR0aDogaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nIH1cXFwiXFxuICAgICAgICAgICAgPlxcblxcbiAgICAgICAgICAgIDxpIHJlZj1cXFwib3BlbkluZGljYXRvclxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIiBjbGFzcz1cXFwib3Blbi1pbmRpY2F0b3JcXFwiPjwvaT5cXG5cXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJzcGlubmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3Bpbm5lclxcXCIgdi1zaG93PVxcXCJsb2FkaW5nXFxcIj5Mb2FkaW5nLi4uPC9kaXY+XFxuICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8dWwgcmVmPVxcXCJkcm9wZG93bk1lbnVcXFwiIHYtc2hvdz1cXFwib3BlblxcXCIgOnRyYW5zaXRpb249XFxcInRyYW5zaXRpb25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIlxcbiAgICAgICAgICAgIDpzdHlsZT1cXFwieyAnbWF4LWhlaWdodCc6IG1heEhlaWdodCB9XFxcIj5cXG4gICAgICAgICAgICA8bGkgdi1mb3I9XFxcIihvcHRpb24saW5kZXgpIGluIGZpbHRlcmVkT3B0aW9uc1xcXCIgdi1iaW5kOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyBhY3RpdmU6IGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gdHlwZUFoZWFkUG9pbnRlciB9XFxcIlxcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVxcXCJ0eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBAbW91c2Vkb3duLnByZXZlbnQ9XFxcInNlbGVjdChvcHRpb24pXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XFxcImZhZGVcXFwiIHYtaWY9XFxcIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXFxcIiBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cXFwiZmFkZVxcXCIgdi1pZj1cXFwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcIm5vLW9wdGlvbnNcXFwiPlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLjwvc2xvdD5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcbiAgICBpbXBvcnQgcG9pbnRlclNjcm9sbCBmcm9tICdiYXNlL21peGlucy9wb2ludGVyU2Nyb2xsJ1xcbiAgICBpbXBvcnQgdHlwZUFoZWFkUG9pbnRlciBmcm9tICdiYXNlL21peGlucy90eXBlQWhlYWRQb2ludGVyJ1xcbiAgICBpbXBvcnQgYWpheCBmcm9tICdiYXNlL21peGlucy9hamF4J1xcblxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBtaXhpbnM6IFtwb2ludGVyU2Nyb2xsLCB0eXBlQWhlYWRQb2ludGVyLCBhamF4XSxcXG5cXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ29udGFpbnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB2YWx1ZS4gVmVyeSBzaW1pbGFyIHRvIGFcXG4gICAgICAgICAgICAgKiBgdmFsdWVgIGF0dHJpYnV0ZSBvbiBhbiA8aW5wdXQ+LiBJbiBtb3N0IGNhc2VzLCB5b3UnbGwgd2FudFxcbiAgICAgICAgICAgICAqIHRvIHNldCB0aGlzIGFzIGEgdHdvLXdheSBiaW5kaW5nLCB1c2luZyA6dmFsdWUuc3luYy4gSG93ZXZlcixcXG4gICAgICAgICAgICAgKiB0aGlzIHdpbGwgbm90IHdvcmsgd2l0aCBWdWV4LCBpbiB3aGljaCBjYXNlIHlvdSdsbCBuZWVkIHRvIHVzZVxcbiAgICAgICAgICAgICAqIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBwcm9wZXJ0eS5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fHxTdHJpbmd8fG51bGx9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdmFsdWU6IHtcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHRvIGJlIHVzZWQgYXMgZHJvcGRvd24gY2hvaWNlcy5cXG4gICAgICAgICAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMsIHZ1ZS1zZWxlY3Qgd2lsbCBsb29rIGZvclxcbiAgICAgICAgICAgICAqIGEgYGxhYmVsYCBrZXkgKGV4LiBbe2xhYmVsOiAnVGhpcyBpcyBGb28nLCB2YWx1ZTogJ2Zvbyd9XSkuIEFcXG4gICAgICAgICAgICAgKiBjdXN0b20gbGFiZWwga2V5IGNhbiBiZSBzZXQgd2l0aCB0aGUgYGxhYmVsYCBwcm9wLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogU2V0cyB0aGUgbWF4LWhlaWdodCBwcm9wZXJ0eSBvbiB0aGUgZHJvcGRvd24gbGlzdC5cXG4gICAgICAgICAgICAgKiBAZGVwcmVjYXRlZFxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzQwMHB4J1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgZmlsdGVyaW5nIHRoZSBvcHRpb25zLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNlYXJjaGFibGU6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYG11bHRpcGxlYCBhdHRyaWJ1dGUgb24gYSBgPHNlbGVjdD5gIGlucHV0LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgbXVsdGlwbGU6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIG9uIGFuIGA8aW5wdXQ+YC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFNldHMgYSBWdWUgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiB0aGUgYC5kcm9wZG93bi1tZW51YC4gdnVlLXNlbGVjdFxcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGluY2x1ZGUgQ1NTIGZvciB0cmFuc2l0aW9ucywgeW91J2xsIG5lZWQgdG8gYWRkIHRoZW0geW91cnNlbGYuXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2V4cGFuZCdcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgY2xlYXJpbmcgdGhlIHNlYXJjaCB0ZXh0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogVGVsbHMgdnVlLXNlbGVjdCB3aGF0IGtleSB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIG9wdGlvblxcbiAgICAgICAgICAgICAqIGxhYmVscyB3aGVuIGVhY2ggYG9wdGlvbmAgaXMgYW4gb2JqZWN0LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgbGFiZWw6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGFiZWwnXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDYWxsYmFjayB0byBnZW5lcmF0ZSB0aGUgbGFiZWwgdGV4dC4gSWYge29wdGlvbn1cXG4gICAgICAgICAgICAgKiBpcyBhbiBvYmplY3QsIHJldHVybnMgb3B0aW9uW3RoaXMubGFiZWxdIGJ5IGRlZmF1bHQuXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgJiYgb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bdGhpcy5sYWJlbF1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBlYWNoIHRpbWUgdGhlIHNlbGVjdGVkXFxuICAgICAgICAgICAgICogdmFsdWUocykgY2hhbmdlLiBXaGVuIGludGVncmF0aW5nIHdpdGggVnVleCwgdXNlIHRoaXMgY2FsbGJhY2sgdG8gdHJpZ2dlclxcbiAgICAgICAgICAgICAqIGFuIGFjdGlvbiwgcmF0aGVyIHRoYW4gdXNpbmcgOnZhbHVlLnN5bmMgdG8gcmV0cmVpdmUgdGhlIHNlbGVjdGVkIHZhbHVlLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCB7bnVsbH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvbkNoYW5nZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgY2hhbmdlUGFyYW06IHt9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGNyZWF0aW5nIG9wdGlvbnMgZnJvbSBzZWFyY2hJbnB1dC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB0YWdnYWJsZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogV2hlbiB0cnVlLCBuZXdseSBjcmVhdGVkIHRhZ3Mgd2lsbCBiZSBhZGRlZCB0b1xcbiAgICAgICAgICAgICAqIHRoZSBvcHRpb25zIGxpc3QuXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgcHVzaFRhZ3M6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFVzZXIgZGVmaW5lZCBmdW5jdGlvbiBmb3IgYWRkaW5nIE9wdGlvbnNcXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAobmV3T3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ29iamVjdCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1t0aGlzLmxhYmVsXTogbmV3T3B0aW9ufVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld09wdGlvblxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBXaGVuIGZhbHNlLCB1cGRhdGluZyB0aGUgb3B0aW9ucyB3aWxsIG5vdCByZXNldCB0aGUgc2VsZWN0IHZhbHVlXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgcmVzZXRPbk9wdGlvbnNDaGFuZ2U6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGRhdGEoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgc2VhcmNoOiAnJyxcXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIHZhbHVlKHZhbCwgb2xkKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzZWxlY3Rpb24odmFsLCBvbGQpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHZhbCAhPT0gb2xkID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvcHRpb25zKCkge1xcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGFnZ2FibGUgJiYgdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG11bHRpcGxlKHZhbCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbCA/IFtdIDogbnVsbFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBtZXRob2RzOiB7XFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogU2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNlbGVjdChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0KG9wdGlvbilcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5jcmVhdGVPcHRpb24ob3B0aW9uKVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hUYWdzKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbilcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBvcHRpb25cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTZWxlY3Qob3B0aW9uKVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGUtc2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGRlc2VsZWN0KG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IC0xXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5mb3JFYWNoKCh2YWwpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBvcHRpb24gfHwgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsW3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0gdmFsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0aW9uLmluZGV4T2YocmVmKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSlcXG5cXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDYWxsZWQgZnJvbSB0aGlzLnNlbGVjdCBhZnRlciBlYWNoIHNlbGVjdGlvbi5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW5cXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge0V2ZW50fSBlXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihlKSB7XFxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5vcGVuSW5kaWNhdG9yIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnNlYXJjaCB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy50b2dnbGUgfHwgZS50YXJnZXQgPT09IHRoaXMuJGVsKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpIC8vIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gYmx1clxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guZm9jdXMoKVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gb3B0aW9uIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gIG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgVHJ1ZSB3aGVuIHNlbGVjdGVkIHx8IEZhbHNlIG90aGVyd2lzZVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKG9wdCA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA9PT0gb3B0aW9uXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBJZiB0aGVyZSBpcyBhbnkgdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCByZW1vdmUgaXQuXFxuICAgICAgICAgICAgICogT3RoZXJ3aXNlLCBibHVyIHRoZSBzZWFyY2ggaW5wdXQgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG9uRXNjYXBlKCkge1xcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIERlbGV0ZSB0aGUgdmFsdWUgb24gRGVsZXRlIGtleXByZXNzIHdoZW4gdGhlcmUgaXMgbm9cXG4gICAgICAgICAgICAgKiB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsICYgdGhlcmUncyB0YWdzIHRvIGRlbGV0ZVxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXMudmFsdWV9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyZWZzLnNlYXJjaC52YWx1ZS5sZW5ndGggJiYgdGhpcy52YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLnZhbHVlLnBvcCgpIDogdGhpcy5zZWxlY3Rpb24gPSBudWxsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIERldGVybWluZSBpZiBhbiBvcHRpb24gZXhpc3RzXFxuICAgICAgICAgICAgICogd2l0aGluIHRoaXMub3B0aW9ucyBhcnJheS5cXG4gICAgICAgICAgICAgKlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgb3B0aW9uRXhpc3RzKG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2VcXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0pXFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDbGFzc2VzIHRvIGJlIG91dHB1dCBvbiAuZHJvcGRvd25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZHJvcGRvd25DbGFzc2VzKCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdGhpcy5zZWFyY2hhYmxlLFxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdGhpcy5sb2FkaW5nXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgcGxhY2Vob2xkZXIgc3RyaW5nIGlmIGl0J3Mgc2V0XFxuICAgICAgICAgICAgICogJiB0aGVyZSBpcyBubyB2YWx1ZSBzZWxlY3RlZC5cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFBsYWNlaG9sZGVyIHRleHRcXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcigpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBvcHRpb25zLCBmaWx0ZXJlZFxcbiAgICAgICAgICAgICAqIGJ5IHRoZSBzZWFyY2ggZWxlbWVudHMgdmFsdWUuIElmIHRhZ2dpbmdcXG4gICAgICAgICAgICAgKiB0cnVlLCB0aGUgc2VhcmNoIHRleHQgd2lsbCBiZSBwcmVwZW5kZWRcXG4gICAgICAgICAgICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuXFxuICAgICAgICAgICAgICpcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHthcnJheX1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XFxuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bc2VsZi5sYWJlbF0uaW5kZXhPZihzZWxmLnNlYXJjaCkgIT09IC0xXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25FeGlzdHModGhpcy5zZWFyY2gpKSB7XFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQodGhpcy5zZWFyY2gpXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3B0aW9ucyBzZWxlY3RlZC5cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGlzVmFsdWVFbXB0eSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5zZWxlY3Rpb24pLmxlbmd0aFxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlbGVjdGlvbi5sZW5ndGhcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBpbiBhcnJheSBmb3JtYXQuXFxuICAgICAgICAgICAgICogQHJldHVybiB7QXJyYXl9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdmFsdWVBc0FycmF5KCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uXFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5zZWxlY3Rpb25dXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjYgMjcgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2FlOTQ3MGMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZG5jLWltYWdlLXVwbG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2FlOTQ3MGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YWU5NDcwY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiAyNyAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyghX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZGVmYXVsdEltYWdlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2VGaWxlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwiZmlsZWlucHV0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRmaWxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImZpbGVcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGVcIixcbiAgICAgIFwiaWRcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZUNoYW5nZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvdWRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0uYnRuVGV4dCkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdhZTk0NzBjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03YWU5NDcwYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjYgMjcgMzEgMzIgMzMgMzQgMzUgMzYgMzciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93biB2LXNlbGVjdFwiLFxuICAgIGNsYXNzOiBfdm0uZHJvcGRvd25DbGFzc2VzXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHJlZjogXCJ0b2dnbGVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlZG93blwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50b2dnbGVEcm9wZG93bigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKCFfdm0uc2VhcmNoYWJsZSAmJiBfdm0uaXNWYWx1ZUVtcHR5KSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0ucGxhY2Vob2xkZXIpICsgXCJcXG4gICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0udmFsdWVBc0FycmF5KSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnc3BhbicsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC10YWdcIlxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgIFwiKSwgKF92bS5tdWx0aXBsZSkgPyBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2VsZWN0KG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiw5dcIildKV0pIDogX3ZtLl9lKCldKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaCksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoYWJsZSksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaGFibGVcIlxuICAgIH1dLFxuICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0uaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGVib3VuY2VcIjogX3ZtLmRlYm91bmNlLFxuICAgICAgXCJ0eXBlXCI6IFwic2VhcmNoXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS5zZWFyY2hQbGFjZWhvbGRlclxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zZWFyY2gpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXlkb3duXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkZWxldGVcIiwgWzgsIDQ2XSkpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5tYXliZURlbGV0ZVZhbHVlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInVwXCIsIDM4KSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRVcCgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWREb3duKCRldmVudClcbiAgICAgIH1dLFxuICAgICAgXCJrZXl1cFwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZXNjXCIsIDI3KSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm9uRXNjYXBlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRTZWxlY3QoJGV2ZW50KVxuICAgICAgfV0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBcImZvY3VzXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbiA9IHRydWVcbiAgICAgIH0sXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgcmVmOiBcIm9wZW5JbmRpY2F0b3JcIixcbiAgICBzdGF0aWNDbGFzczogXCJvcGVuLWluZGljYXRvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJwcmVzZW50YXRpb25cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fdChcInNwaW5uZXJcIiwgW19jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvYWRpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ub3BlbiksXG4gICAgICBleHByZXNzaW9uOiBcIm9wZW5cIlxuICAgIH1dLFxuICAgIHJlZjogXCJkcm9wZG93bk1lbnVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICAnbWF4LWhlaWdodCc6IF92bS5tYXhIZWlnaHRcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IF92bS50cmFuc2l0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl9sKChfdm0uZmlsdGVyZWRPcHRpb25zKSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnbGknLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgYWN0aXZlOiBfdm0uaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSBfdm0udHlwZUFoZWFkUG9pbnRlclxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2VvdmVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS50eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5zZWxlY3Qob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV0pXSlcbiAgfSksIF92bS5fdihcIiBcIiksICghX3ZtLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgpID8gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSA/IF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogXCJmYWRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJuby1vcHRpb25zXCIsIFtfdm0uX3YoXCJTb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy5cIildKV0sIDIpIDogX3ZtLl9lKCldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThkMzUxMDM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiAyNyAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjUyMDQ1MTc4XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YWU5NDcwYyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiAyNyAzMSAzMiAzMyAzNCAzNSAzNiAzNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYjU5Y2I5ZDBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IDI3IDMxIDMyIDMzIDM0IDM1IDM2IDM3IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIFwiZW5cIjoge1xuICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcIm1cIjogXCJNYWxlXCIsXG4gICAgICAgICAgICBcIndcIjogXCJGZW1hbGVcIixcbiAgICAgICAgICAgIFwiblwiOiBcIlByZWZlciBub3QgdG8gZGlzY2xvc2VcIixcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgRXZlbnQgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIEV2ZW50IHdhcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiVGhlIEV2ZW50IHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJldmVudF9wb3N0ZXJfZGVsZXRlZFwiOiBcIlRoZSBldmVudCBwb3N0ZXIgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIlRoZSBFdmVudCBkb2Vzbid0IGV4aXN0XCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOYW1lXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2hhbXBpb25zaGlwXCIsXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIkdlbmRlclwiLFxuICAgICAgICAgICAgXCJjb2RlXCI6IFwiQ29kZVwiLFxuICAgICAgICAgICAgXCJpbml0X2RhdGVcIjogXCJJbml0IERhdGVcIixcbiAgICAgICAgICAgIFwiZW5kX2RhdGVcIjogXCJFbmQgRGF0ZVwiLFxuICAgICAgICAgICAgXCJzcGVjaWFsdHlcIjogXCJTcGVjaWFsdHlcIixcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJDYXRlZ29yeVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVHlwZVwiLFxuICAgICAgICAgICAgXCJyZWFjaFwiOiBcIlJlYWNoXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInNlbGVjdF9vcHRpb25cIjogXCJTZWxlY3QgYW4gb3B0aW9uXCIsXG4gICAgICAgICAgICBcInVwbG9hZF9pbWFnZVwiOiBcIlVwbG9hZCBpbWFnZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJVcGRhdGVcIixcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTmV3IEV2ZW50XCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiQXJlIHlvdSBzdXJlPyB0aGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9ldmVudFwiOiBcIkRlbGV0ZSBFdmVudFwiLFxuICAgICAgICAgICAgXCJldmVudF9pbmZvXCI6IFwiRXZlbnQgSW5mb3JtYXRpb25cIixcbiAgICAgICAgICAgIFwic2VlX2FsbFwiOiBcIlNlZSBBbGxcIixcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICBcInNlYXJjaF9ldmVudFwiOiBcIlNlYXJjaCBFdmVudFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiZXNcIjoge1xuICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcIm1cIjogXCJNYXNjdWxpbm9cIixcbiAgICAgICAgICAgIFwid1wiOiBcIkZlbWVuaW5vXCIsXG4gICAgICAgICAgICBcIm5cIjogXCJQcmVmaWVybyBubyByZXZlbGFybG9cIixcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBldmVudG8gZnVlIGNyZWFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBldmVudG8gZnVlIGFjdHVhbGl6YWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiRWwgZXZlbnRvIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcImV2ZW50X3Bvc3Rlcl9kZWxldGVkXCI6IFwiRWwgcG9zdGVyIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIGV2ZW50byBubyBleGlzdGVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlc2NyaXBjacOzblwiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBcIjogXCJDYW1wZW9uYXRvXCIsXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIkfDqW5lcm9cIixcbiAgICAgICAgICAgIFwiY29kZVwiOiBcIkPDs2RpZ29cIixcbiAgICAgICAgICAgIFwiaW5pdF9kYXRlXCI6IFwiRmVjaGEgZGUgaW5pY2lvXCIsXG4gICAgICAgICAgICBcImVuZF9kYXRlXCI6IFwiRmVjaGEgZGUgZmluYWxpemFjacOzblwiLFxuICAgICAgICAgICAgXCJzcGVjaWFsdHlcIjogXCJFc3BlY2lhbGlkYWRcIixcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJDYXRlZ29yw61hXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJUaXBvXCIsXG4gICAgICAgICAgICBcInJlYWNoXCI6IFwiQWxjYW5jZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWNjaW9uZXNcIixcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjY2lvbmUgdW5hIG9wY2nDs25cIixcbiAgICAgICAgICAgIFwidXBsb2FkX2ltYWdlXCI6IFwiU3ViaXIgSW1hZ2VuXCIsXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcIkFjdHVhbGl6YXJcIixcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTnVldm8gRXZlbnRvXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxuICAgICAgICAgICAgXCJkZWxldGVfZXZlbnRcIjogXCJFbGltaW5hciBFdmVudG9cIixcbiAgICAgICAgICAgIFwiZXZlbnRfaW5mb1wiOiBcIkluZm9ybWFjacOzbiBkZWwgZXZlbnRvXCIsXG4gICAgICAgICAgICBcInNlZV9hbGxcIjogXCJWZXIgVG9kb3NcIixcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWNjaW9uYXJcIixcbiAgICAgICAgICAgIFwic2VhcmNoX2V2ZW50XCI6IFwiQnVzY2FyIEV2ZW50b1wiXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vZXZlbnRzL2V2ZW50cy5qcyIsIi8qKlxyXG4gKiBUaGUgYXJyYXkgb2YgbmFtZXMgb2YgdGhlIHRvb2x0aXAgbWVzc2FnZXMgb2YgdGhlIGRhdGV0aW1lIHBpY2tlci5cclxuICpcclxuICogVGhpcyBpcyBhIGNvbnN0YW50IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxyXG4gKi9cclxudmFyIERBVEVUSU1FX1BJQ0tFUl9UT09MVElQUyA9IFtcclxuICAgIFwidG9kYXlcIiwgXCJjbGVhclwiLCBcImNsb3NlXCIsXHJcbiAgICBcInNlbGVjdE1vbnRoXCIsIFwicHJldk1vbnRoXCIsIFwibmV4dE1vbnRoXCIsXHJcbiAgICBcInNlbGVjdFllYXJcIiwgXCJwcmV2WWVhclwiLCBcIm5leHRZZWFyXCIsXHJcbiAgICBcInNlbGVjdERlY2FkZVwiLCBcInByZXZEZWNhZGVcIiwgXCJuZXh0RGVjYWRlXCIsXHJcbiAgICBcInByZXZDZW50dXJ5XCIsIFwibmV4dENlbnR1cnlcIixcclxuICAgIFwicGlja0hvdXJcIiwgXCJpbmNyZW1lbnRIb3VyXCIsIFwiZGVjcmVtZW50SG91clwiLFxyXG4gICAgXCJwaWNrTWludXRlXCIsIFwiaW5jcmVtZW50TWludXRlXCIsIFwiZGVjcmVtZW50TWludXRlXCIsXHJcbiAgICBcInBpY2tTZWNvbmRcIiwgXCJpbmNyZW1lbnRTZWNvbmRcIiwgXCJkZWNyZW1lbnRTZWNvbmRcIixcclxuICAgIFwidG9nZ2xlUGVyaW9kXCIsIFwic2VsZWN0VGltZVwiXHJcbl07XHJcblxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdXNlZCBieSB0aGlzIGNvbXBvbmVudC5cclxuICovXHJcbnZhciBERUZBVUxUX0xBTkdVQUdFID0gXCJlbi1VU1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgZGF0ZXRpbWUgcGlja2VyIGNvbnRyb2wuXHJcbiAqXHJcbiAqIEBwYXJhbSBtb2RlbFxyXG4gKiAgICB0aGUgbW9kZWwgYmluZCB0byB0aGUgY29udHJvbCwgd2hpY2ggbXVzdCBiZSBhIHR3byB3YXkgYmluZGluZyB2YXJpYWJsZS5cclxuICogQHBhcmFtIHR5cGVcclxuICogICAgdGhlIG9wdGlvbmFsIHR5cGUgb2YgdGhpcyBkYXRldGltZSBwaWNrZXIgY29udHJvbC4gQXZhaWxhYmxlIHZhbHVlcyBhcmVcclxuICogICAgLSBcImRhdGV0aW1lXCI6IEluZGljYXRpbmcgdGhhdCB0aGlzIGNvbnRyb2wgaXMgYSBkYXRldGltZSBwaWNrZXIsXHJcbiAqICAgIC0gXCJkYXRlXCI6IEluZGljYXRpbmcgdGhhdCB0aGlzIGNvbnRyb2wgaXMgYSBkYXRlIHBpY2tlcixcclxuICogICAgLSBcInRpbWVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIHRpbWUgcGlja2VyLlxyXG4gKiAgICBEZWZhdWx0IHZhbHVlIGlzIFwiZGF0ZXRpbWVcIi5cclxuICogQHBhcmFtIGxhbmd1YWdlXHJcbiAqICAgIHRoZSBvcHRpb25hbCBsYW5ndWFnZSBjb2RlIHVzZWQgdG8gbG9jYWxpemUgdGhlIGNvbnRyb2wsIHdoaWNoIG11c3QgYmVcclxuICogICAgYSB2YWxpZCBsYW5ndWFnZSBjb2RlIHN1cHBvcnRlZCBieSB0aGUgbW9tZW50LmpzIGxpYnJhcnkuIElmIGl0IGlzIG5vdCBzZXQsXHJcbiAqICAgIGFuZCB0aGUgW3Z1ZS1pMThuXShodHRwczovL2dpdGh1Yi5jb20vSGFpeGluZy1IdS92dWUtaTE4bikgcGx1Z2luIGlzIHVzZWQsXHJcbiAqICAgIHRoZSBjb21wb25lbnQgd2lsbCB1c2UgdGhlIGxhbmd1YWdlIGNvZGUgYCRsYW5ndWFnZWAgcHJvdmlkZWQgYnkgdGhlXHJcbiAqICAgIFt2dWUtaTE4bl0oaHR0cHM6Ly9naXRodWIuY29tL0hhaXhpbmctSHUvdnVlLWkxOG4pIHBsdWdpbjsgb3RoZXJ3aXNlLCB0aGVcclxuICogICAgY29tcG9uZW50IHdpbGwgdXNlIHRoZSBkZWZhdWx0IHZhbHVlIFwiZW4tVVNcIi5cclxuICogQHBhcmFtIGRhdGV0aW1lRm9ybWF0XHJcbiAqICAgIHRoZSBvcHRpb25hbCBmb3JtYXQgb2YgdGhlIGRhdGV0aW1lIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwiZGF0ZXRpbWVcIi4gRGVmYXVsdCB2YWx1ZSBpc1xyXG4gKiAgICBcIllZWVktTU0tREQgSEg6bW06c3NcIi5cclxuICogQHBhcmFtIGRhdGVGb3JtYXRcclxuICogICAgdGhlIG9wdGlvbmFsIGZvcm1hdCBvZiB0aGUgZGF0ZSB0aGlzIGNvbXBvbmVudCBzaG91bGQgZGlzcGxheSwgd2hpY2hcclxuICogICAgbXVzdCBiZSBhIHZhbGlkIGRhdGV0aW1lIGZvcm1hdCBvZiB0aGUgbW9tZW50LmpzIGxpYnJhcnkuIFRoaXMgcHJvcGVydHlcclxuICogICAgb25seSB3b3JrcyB3aGVuIHRoZSBcInR5cGVcIiBwcm9wZXJ0eSBpcyBcImRhdGVcIi4gRGVmYXVsdCB2YWx1ZSBpc1xyXG4gKiAgICBcIllZWVktTU0tRERcIi5cclxuICogQHBhcmFtIHRpbWVGb3JtYXRcclxuICogICAgdGhlIG9wdGlvbmFsIGZvcm1hdCBvZiB0aGUgdGltZSB0aGlzIGNvbXBvbmVudCBzaG91bGQgZGlzcGxheSwgd2hpY2hcclxuICogICAgbXVzdCBiZSBhIHZhbGlkIGRhdGV0aW1lIGZvcm1hdCBvZiB0aGUgbW9tZW50LmpzIGxpYnJhcnkuIFRoaXMgcHJvcGVydHlcclxuICogICAgb25seSB3b3JrcyB3aGVuIHRoZSBcInR5cGVcIiBwcm9wZXJ0eSBpcyBcInRpbWVcIi4gRGVmYXVsdCB2YWx1ZSBpc1xyXG4gKiAgICBcIkhIOm1tOnNzXCIuXHJcbiAqIEBwYXJhbSBuYW1lXHJcbiAqICAgIHRoZSBvcHRpb25hbCBuYW1lIG9mIHRoZSBzZWxlY3Rpb24gY29udHJvbC5cclxuICogQHBhcmFtIG9uQ2hhbmdlXHJcbiAqICAgIHRoZSBvcHRpb25hbCBldmVudCBoYW5kbGVyIHRyaWdnZXJlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgZGF0ZXRpbWUgcGlja2VyXHJcbiAqICAgIHdhcyBjaGFuZ2VkLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBwcmVzZW50ZWQgYW5kIGlzIG5vdCBudWxsLCBpdCBtdXN0IGJlIGFcclxuICogICAgZnVuY3Rpb24gd2hpY2ggYWNjZXB0IG9uZSBhcmd1bWVudDogdGhlIG5ldyBkYXRlIHRpbWUsIHdoaWNoIGlzIGEgbW9tZW50XHJcbiAqICAgIG9iamVjdC5cclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICBpbmhlcml0OiBmYWxzZSxcclxuICAgIHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9J2lucHV0LWdyb3VwIGRhdGUnPlwiICtcclxuICAgIFwiPGlucHV0IGNsYXNzPSdmb3JtLWNvbnRyb2wnIDpuYW1lPSduYW1lJyB0eXBlPSd0ZXh0JyAvPlwiICtcclxuICAgIFwiPHNwYW4gY2xhc3M9J2lucHV0LWdyb3VwLWFkZG9uJz5cIiArXHJcbiAgICBcIjxpIGNsYXNzPSdmYSBmYS1mdyBmYS1jYWxlbmRhcic+PC9pPlwiICtcclxuICAgIFwiPC9zcGFuPlwiICtcclxuICAgIFwiPC9kaXY+XCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIG1vZGVsOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJkYXRldGltZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0ZXRpbWVGb3JtYXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiWVlZWS1NTS1ERCBISDptbTpzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRlRm9ybWF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIllZWVktTU0tRERcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZUZvcm1hdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJISDptbTpzc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNoYW5nZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGU6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzQ2hhbmdpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBudWxsO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiZGF0ZXRpbWUtcGlja2VyLnJlYWR5XCIpO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB1c2VDdXJyZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uczoge1xyXG4gICAgICAgICAgICAgICAgdGltZTogJ2ZhIGZhLWNsb2NrLW8nLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogJ2ZhIGZhLWNhbGVuZGFyJyxcclxuICAgICAgICAgICAgICAgIHVwOiAnZmEgZmEtY2hldnJvbi11cCcsXHJcbiAgICAgICAgICAgICAgICBkb3duOiAnZmEgZmEtY2hldnJvbi1kb3duJyxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzOiAnZmEgZmEtY2hldnJvbi1sZWZ0JyxcclxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYSBmYS1jaGV2cm9uLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIHRvZGF5OiAnZmEgZmEtZG90LWNpcmNsZS1vJyxcclxuICAgICAgICAgICAgICAgIGNsZWFyOiAnZmEgZmEtdHJhc2gnLFxyXG4gICAgICAgICAgICAgICAgY2xvc2U6ICdmYSBmYS10aW1lcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gc2V0IHRoZSBsb2NhbGVcclxuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlO1xyXG4gICAgICAgIGlmIChsYW5ndWFnZSA9PT0gbnVsbCB8fCBsYW5ndWFnZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gdGhpcy4kbGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsYW5nYXVnZSA9IERFRkFVTFRfTEFOR1VBR0U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmdldExhbmd1YWdlQ29kZShsYW5ndWFnZSk7XHJcbiAgICAgICAgLy8gc2V0IHRoZSBmb3JtYXRcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSB0aGlzLmRhdGVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRpbWVcIjpcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0ID0gdGhpcy50aW1lRm9ybWF0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRldGltZVwiOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSB0aGlzLmRhdGV0aW1lRm9ybWF0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHVzZSB0aGUgdnVlLWkxOG4gcGx1Z2luIGZvciBsb2NhbGl6ZSB0aGUgdG9vbHRpcHNcclxuICAgICAgICBpZiAodGhpcy4kaTE4biAmJiB0aGlzLiRpMThuLmRhdGV0aW1lX3BpY2tlcikge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLiRpMThuLmRhdGV0aW1lX3BpY2tlcjtcclxuICAgICAgICAgICAgdmFyIHRvb2x0aXBzID0gJC5mbi5kYXRldGltZXBpY2tlci5kZWZhdWx0cy50b29sdGlwcztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBEQVRFVElNRV9QSUNLRVJfVE9PTFRJUFMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gREFURVRJTUVfUElDS0VSX1RPT0xUSVBTW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHNbbmFtZV0gPSBtZXNzYWdlc1tuYW1lXTsgICAgLy8gbG9jYWxpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb25zLnRvb2x0aXBzID0gdG9vbHRpcHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY29udHJvbFxyXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzLiRlbCkuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbCA9ICQodGhpcy4kZWwpLmRhdGEoXCJEYXRlVGltZVBpY2tlclwiKTtcclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBkYXRlIHRvIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBtb2RlbFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wuZGF0ZSh0aGlzLm1vZGVsKTtcclxuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICAgICAgJCh0aGlzLiRlbCkub24oXCJkcC5jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZS5pc0NoYW5naW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuaXNDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuZGF0ZSA9IG1lLmNvbnRyb2wuZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmlzQ2hhbmdpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lLm9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5vbkNoYW5nZShtZS5kYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIFwibW9kZWxcIjogZnVuY3Rpb24gKHZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0NoYW5naW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2hhbmdpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLmRhdGUodmFsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIGxhbmd1YWdlIGNvZGUgZnJvbSB0aGUgXCJsYW5ndWFnZS1jb3VudHJ5XCIgbG9jYWxlIGNvZGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBUaGUgZnVuY3Rpb24gd2lsbCBzdHJpcCB0aGUgbGFuZ3VhZ2UgY29kZSBiZWZvcmUgdGhlIGZpcnN0IFwiLVwiIG9mIGFcclxuICAgICAgICAgKiBsb2NhbGUgY29kZS4gRm9yIGV4YW1wbGUsIHBhc3MgXCJlbi1VU1wiIHdpbGwgcmV0dXJucyBcImVuXCIuIEJ1dCBmb3Igc29tZVxyXG4gICAgICAgICAqIHNwZWNpYWwgbG9jYWxlcywgdGhlIGZ1bmN0aW9uIHJlc2VydmVzIHRoZSBsb2NhbGUgY29kZS4gRm9yIGV4YW1wbGUsXHJcbiAgICAgICAgICogdGhlIFwiemgtQ05cIiBmb3IgdGhlIHNpbXBsaWZpZWQgQ2hpbmVzZSBhbmQgdGhlIFwiemgtVFdcIiBmb3IgdGhlXHJcbiAgICAgICAgICogdHJhZGl0aW9uYWwgQ2hpbmVzZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSBsb2NhbGVcclxuICAgICAgICAgKiAgICBBIGxvY2FsZSBjb2RlLlxyXG4gICAgICAgICAqIEByZXR1cm5cclxuICAgICAgICAgKiAgICB0aGUgbGFuZ3VhZ2UgY29kZSBvZiB0aGUgbG9jYWxlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldExhbmd1YWdlQ29kZTogZnVuY3Rpb24gKGxvY2FsZSkge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxlID09PSBudWxsIHx8IGxvY2FsZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxvY2FsZS5sZW5ndGggPD0gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobG9jYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInpoLUNOXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInpoLVRXXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFyLU1BXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFyLVNBXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFyLVROXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlLUFUXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuLUFVXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuLUNBXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuLUdCXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZyLUNBXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImh5LUFNXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1zLU1ZXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInB0LUJSXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNyLUNZUkxcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGwtUEhcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHptLUxBVE5cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHptXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNlcnZlIG9ubHkgdGhlIGZpcnN0IHR3byBsZXR0ZXJzIGxhbmd1YWdlIGNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS5zdWJzdHIoMCwgMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RhdGV0aW1lL3Z1ZS1kYXRldGltZS1waWNrZXIuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9ldmVudHMvJyArIGlkICsgJz9pbmNsdWRlPWNoYW1waW9uc2hpcC5zcG9ydCxzcGVjaWFsdHksY2F0ZWdvcnksdHlwZSxyZWFjaCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgY3JlYXRlKGV2ZW50LCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL2V2ZW50cycsIGV2ZW50KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIHVwZGF0ZShpZCwgZXZlbnQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnB1dCgnL2FwaS9ldmVudHMvJyArIGlkLCBldmVudCwge2VtdWxhdGVIVFRQOiB0cnVlfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICByZW1vdmUoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmRlbGV0ZSgnL2FwaS9ldmVudHMvJyArIGlkKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG4gICAgZ2V0Q2hhbXBpb25zaGlwcyhzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL2NoYW1waW9uc2hpcHM/aW5jbHVkZT1zcG9ydCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL2V2ZW50cy9ldmVudFNlcnZpY2UuanMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGFkbWluLWhlYWRlciA6dGl0bGU9XCIkdCgnYWRtaW4uZXZlbnRzJylcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvYWRtaW4taGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiZXZlbnQtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPnt7JHQoJ2FkbWluLmV2ZW50cycpfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5ib3gtaGVhZGVyIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdldmVudC50cmFuc2xhdGlvbi5uYW1lLmVuJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZWVuXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2V2ZW50cy5uYW1lJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVlblwiIG5hbWU9XCJldmVudC50cmFuc2xhdGlvbi5uYW1lLmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2V2ZW50cy5uYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC50cmFuc2xhdGlvbi5uYW1lLmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2V2ZW50cy5uYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbicpXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25lblwiIGRhdGEtZXJyb3I9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2V2ZW50cy5kZXNjcmlwdGlvbicpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvbmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZXZlbnRzLmRlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdldmVudHMuZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdldmVudC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkbmMtaW1hZ2UtdXBsb2FkZXIgOmJ0bi10ZXh0PVwiJHQoJ2V2ZW50cy51cGxvYWRfaW1hZ2UnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItdmFsaWRhdGlvbi1tc2c9XCIkdCgndmFsaWRhdGlvbi5pbWFnZScse2F0dHJpYnV0ZTokdCgnZXZlbnRzLnVwbG9hZF9pbWFnZScpfSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmltYWdlPVwiZXZlbnQuaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdC1pbWFnZT1cIi9pbWFnZXMvbWlzc2luZy9ldmVudC9taXNzaW5nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRlclwiPjwvZG5jLWltYWdlLXVwbG9hZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LmNoYW1waW9uc2hpcCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNwb3J0c1wiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdldmVudHMuY2hhbXBpb25zaGlwJyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJldmVudC5jaGFtcGlvbnNoaXBcIiBsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImNoYW1waW9uc2hpcENoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2V2ZW50cy5zZWxlY3Rfb3B0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJjaGFtcGlvbnNoaXBzXCI+PC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hhbXBpb25zaGlwX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50LmNoYW1waW9uc2hpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXZlbnQuY2hhbXBpb25zaGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2V2ZW50cy5jaGFtcGlvbnNoaXAnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZXZlbnQuY2hhbXBpb25zaGlwJylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdldmVudC5jaGFtcGlvbnNoaXAnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LnNwZWNpYWx0eScpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNwb3J0c1wiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdldmVudHMuc3BlY2lhbHR5Jyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJldmVudC5zcGVjaWFsdHlcIiBsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cInNwZWNpYWx0eUNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2V2ZW50cy5zZWxlY3Rfb3B0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzcGVjaWFsdGllc1wiPjwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNwZWNpYWx0eV9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50LnNwZWNpYWx0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD1cInNwZWNpYWx0eV9pbnB1dFwiIGluaXRpYWw9XCJvZmZcIiB2LW1vZGVsPVwiZXZlbnQuc3BlY2lhbHR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2V2ZW50cy5zcGVjaWFsdHknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZXZlbnQuc3BlY2lhbHR5JylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdldmVudC5zcGVjaWFsdHknKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LmNhdGVnb3J5JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3BvcnRzXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2V2ZW50cy5jYXRlZ29yeScpfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwiZXZlbnQuY2F0ZWdvcnlcIiBsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImNhdGVnb3J5Q2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImNhdGVnb3JpZXNcIj48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjYXRlZ29yeV9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50LmNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC5jYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdldmVudHMuY2F0ZWdvcnknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZXZlbnQuY2F0ZWdvcnknKVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2V2ZW50LmNhdGVnb3J5JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LmdlbmRlcicpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNwb3J0c1wiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdldmVudHMuZ2VuZGVyJyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJldmVudC5nZW5kZXJcIiBsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImdlbmRlckNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2V2ZW50cy5zZWxlY3Rfb3B0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJnZW5kZXJzXCI+PC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZ2VuZGVyX2lucHV0XCIgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXZlbnQuZ2VuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPVwiZ2VuZGVyX2lucHV0XCIgaW5pdGlhbD1cIm9mZlwiIHYtbW9kZWw9XCJldmVudC5nZW5kZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnZXZlbnRzLmdlbmRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCdldmVudC5nZW5kZXInKVwiPnt7IGVycm9ycy5maXJzdCgnZXZlbnQuZ2VuZGVyJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LnR5cGUnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzcG9ydHNcIiBkYXRhLWVycm9yPVwiXCI+e3skdCgnZXZlbnRzLnR5cGUnKX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDp2YWx1ZT1cImV2ZW50LnR5cGVcIiBsYWJlbD1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cInR5cGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdldmVudHMuc2VsZWN0X29wdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwidHlwZXNcIj48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0eXBlX2lucHV0XCIgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXZlbnQudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXZlbnQudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdldmVudHMudHlwZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCdldmVudC50eXBlJylcIj57eyBlcnJvcnMuZmlyc3QoJ2V2ZW50LnR5cGUnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdldmVudC5yZWFjaCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlYWNoZXNcIiBkYXRhLWVycm9yPVwiXCI+e3skdCgnZXZlbnRzLnJlYWNoJyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJldmVudC5yZWFjaFwiIGxhYmVsPVwicmVhY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cInJlYWNoQ2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInJlYWNoZXNcIj48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZWFjaF9pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJldmVudC5yZWFjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXZlbnQucmVhY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnZXZlbnRzLnJlYWNoJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LnJlYWNoJylcIj57eyBlcnJvcnMuZmlyc3QoJ2V2ZW50LnJlYWNoJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZXZlbnQuaW5pdF9kYXRlJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5pdF9kYXRlXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2V2ZW50cy5pbml0X2RhdGUnKX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1kYXRldGltZS1waWNrZXIgY2xhc3M9XCJ2dWUtcGlja2VyMlwiIG5hbWU9XCJpbml0X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bW9kZWw9XCJldmVudC5pbml0X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwiaW5pdERhdGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lLWZvcm1hdD1cIkxMTFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1kYXRldGltZS1waWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImluaXRfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC5pbml0X2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50LmluaXRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdldmVudHMuaW5pdF9kYXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LmluaXRfZGF0ZScpXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZXZlbnQuaW5pdF9kYXRlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LmVuZF9kYXRlJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIiBkYXRhLWVycm9yPVwiXCI+e3skdCgnZXZlbnRzLmVuZF9kYXRlJyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtZGF0ZXRpbWUtcGlja2VyIGNsYXNzPVwidnVlLXBpY2tlcjNcIiBuYW1lPVwiZW5kX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bW9kZWw9XCJldmVudC5lbmRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwiZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwiZW5kRGF0ZUNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRldGltZS1mb3JtYXQ9XCJMTExcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92dWUtZGF0ZXRpbWUtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbmRfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC5lbmRfZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXZlbnQuZW5kX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnZXZlbnRzLmVuZF9kYXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LmVuZF9kYXRlJylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdldmVudC5lbmRfZGF0ZScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdmb3Jtcy5iYWNrJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGhyZWY9XCIjIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2Rpc2FibGVkJzp1cGRhdGluZ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25TdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZm9ybXMuc2F2ZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCB0eXBlPVwidGV4dC9iYWJlbFwiPlxuICAgIGltcG9ydCBldmVudExvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL2V2ZW50cy9ldmVudHMuanMnO1xuICAgIGltcG9ydCBmb3JtRGF0YU9iamVjdFBhcnNlciBmcm9tICdiYXNlL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyJ1xuICAgIGltcG9ydCB7bWFwQWN0aW9uc30gZnJvbSAndnVleCdcbiAgICBpbXBvcnQgZG5jSW1hZ2VVcGxvYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlJztcbiAgICBpbXBvcnQgdlNlbGVjdCBmcm9tIFwiYmFzZS9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXCJcbiAgICBpbXBvcnQgYWRtaW5IZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcbiAgICBpbXBvcnQgZXZlbnRTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL2V2ZW50cy9ldmVudFNlcnZpY2UnXG5cbiAgICBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgdlNlbGVjdCxcbiAgICAgICAgICAgIGFkbWluSGVhZGVyLFxuICAgICAgICAgICAgZG5jSW1hZ2VVcGxvYWRlcixcbiAgICAgICAgICAgIFwidnVlLWRhdGV0aW1lLXBpY2tlclwiOiByZXF1aXJlKFwiYmFzZS9jb21wb25lbnRzL2RhdGV0aW1lL3Z1ZS1kYXRldGltZS1waWNrZXIuanNcIiksXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW2Zvcm1EYXRhT2JqZWN0UGFyc2VyXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgICAgICAgICBpbml0X2RhdGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGVuZF9kYXRlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge31cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXRobGV0ZXM6IFtdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhjZXB0QXRobGV0ZXM6ICcnLFxuICAgICAgICAgICAgICAgIHVwZGF0aW5nOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLmhvbWUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvZXZlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uZXZlbnRzJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2V2ZW50cy8nICsgdGhpcy5ldmVudC5pZCArICcvdXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4udXBkYXRlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNpYWx0aWVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uc3BlY2lhbHRpZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yaWVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uY2F0ZWdvcmllc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24udHlwZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWFjaGVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24ucmVhY2hlc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW1waW9uc2hpcHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5jaGFtcGlvbnNoaXBzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VuZGVycygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLmdlbmRlcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbG9jYWxlczogZXZlbnRMb2NhbGVzLFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFtcGlvbnNoaXBzLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aGlzLmdldENoYW1waW9uc2hpcHMoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnR5cGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5yZWFjaGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlYWNoZXMoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmdlbmRlcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0R2VuZGVycygpO1xuICAgICAgICAgICAgZXZlbnRTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LmluaXRfZGF0ZSA9IG1vbWVudCh0aGlzLmV2ZW50LmluaXRfZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LmVuZF9kYXRlID0gbW9tZW50KHRoaXMuZXZlbnQuZW5kX2RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTcGVjaWFsdGllcyh0aGlzLmV2ZW50LmNoYW1waW9uc2hpcC5zcG9ydC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgICAgIGdldFNwb3J0czogJ2NvbW1vbjpnZXRTcG9ydHMnLFxuICAgICAgICAgICAgICAgIGdldENhdGVnb3JpZXM6ICdjb21tb246Z2V0Q2F0ZWdvcmllcycsXG4gICAgICAgICAgICAgICAgZ2V0Q2hhbXBpb25zaGlwczogJ2NvbW1vbjpnZXRDaGFtcGlvbnNoaXBzJyxcbiAgICAgICAgICAgICAgICBnZXRTcGVjaWFsdGllczogJ2NvbW1vbjpnZXRTcGVjaWFsdGllcycsXG4gICAgICAgICAgICAgICAgZ2V0R2VuZGVyczogJ2NvbW1vbjpnZXRHZW5kZXJzJyxcbiAgICAgICAgICAgICAgICBnZXRUeXBlczogJ2NvbW1vbjpnZXRUeXBlcycsXG4gICAgICAgICAgICAgICAgZ2V0UmVhY2hlczogJ2NvbW1vbjpnZXRSZWFjaGVzJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2hhbXBpb25zaGlwQ2hhbmdlZCgpe1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ldmVudC5jaGFtcGlvbnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTcGVjaWFsdGllcyh0aGlzLmV2ZW50LmNoYW1waW9uc2hpcC5zcG9ydC5pZCwgKGRhdGEpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmZpbHRlcigoc3BlY2lhbHR5KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcGVjaWFsdHkuaWQgPT0gc2VsZi5ldmVudC5zcGVjaWFsdHkuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ldmVudC5zcGVjaWFsdHkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NvbW1vbjpTRVRfU1BFQ0lBTFRJRVMnLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQuc3BlY2lhbHR5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcGVjaWFsdHlDaGFuZ2VkKHNwZWNpYWx0eSl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudC5zcGVjaWFsdHkgPSBzcGVjaWFsdHlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yeUNoYW5nZWQoY2F0ZWdvcnkpe1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQuY2F0ZWdvcnkgPSBjYXRlZ29yeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlYWNoQ2hhbmdlZChyZWFjaCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudC5yZWFjaCA9IHJlYWNoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZUNoYW5nZWQodHlwZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudC50eXBlID0gdHlwZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlbmRlckNoYW5nZWQoZ2VuZGVyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LmdlbmRlciA9IGdlbmRlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZERhdGVDaGFuZ2VkKGRhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQuZW5kX2RhdGUgPSBkYXRlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXREYXRlQ2hhbmdlZChkYXRlKXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LmluaXRfZGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CYWNrKGV2dCl7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZXZlbnRzLmxpc3QnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN1Ym1pdChldnQpe1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gc2VsZi4kcmVmcy51cGxvYWRlci5nZXRGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0ZXInLCBzZWxmLiRyZWZzLnVwbG9hZGVyLmdldEZpbGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhID0gc2VsZi5wYXJzZU9iakZvcm1EYXRhKHNlbGYuZXZlbnQudHJhbnNsYXRpb24sIGZvcm1EYXRhLCAndHJhbnNsYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnQuY2hhbXBpb25zaGlwKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjaGFtcGlvbnNoaXBfaWQnLCBzZWxmLmV2ZW50LmNoYW1waW9uc2hpcC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmV2ZW50LnNwZWNpYWx0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3BlY2lhbHR5X2lkJywgc2VsZi5ldmVudC5zcGVjaWFsdHkuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5ldmVudC5jYXRlZ29yeSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnlfaWQnLCBzZWxmLmV2ZW50LmNhdGVnb3J5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnQuZ2VuZGVyLmhhc093blByb3BlcnR5KCdnZW5kZXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdnZW5kZXInLCBzZWxmLmV2ZW50LmdlbmRlci5nZW5kZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdnZW5kZXInLCBzZWxmLmV2ZW50LmdlbmRlci5zdWJzdHIoMCwgMSkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnQudHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZXZlbnRfdHlwZV9pZCcsIHNlbGYuZXZlbnQudHlwZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmV2ZW50LnJlYWNoKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdldmVudF9yZWFjaF9pZCcsIHNlbGYuZXZlbnQucmVhY2guaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IHNlbGYucGFyc2VPYmpGb3JtRGF0YShzZWxmLmV2ZW50LmF0aGxldGVzLCBmb3JtRGF0YSwgJ2F0aGxldGVzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbml0X2RhdGUnLCBzZWxmLmV2ZW50LmluaXRfZGF0ZS5mb3JtYXQoJ0RELU1NLVlZWVkgSEg6bW06c3MnKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW5kX2RhdGUnLCBzZWxmLmV2ZW50LmVuZF9kYXRlLmZvcm1hdCgnREQtTU0tWVlZWSBISDptbTpzcycpKTtcblxuICAgICAgICAgICAgICAgICAgICBldmVudFNlcnZpY2UudXBkYXRlKHNlbGYuZXZlbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5zdWNjZXNzVG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdldmVudHMubGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcnNbZXJyb3JdLmZvckVhY2goKHZhbGlkYXRpb25FcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QodmFsaWRhdGlvbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdChyZXNwb25zZS5lcnJvcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChiYWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnYWRtaW4udmFsaWRhdGlvbl9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWRpdC52dWU/MjJhMzg3MjgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnYWRtaW4taGVhZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IF92bS4kdCgnYWRtaW4uZXZlbnRzJyksXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZXZlbnQtZm9ybVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2FkbWluLmV2ZW50cycpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LnRyYW5zbGF0aW9uLm5hbWUuZW4nKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuYW1lZW5cIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2V2ZW50cy5uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbiksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50LnRyYW5zbGF0aW9uLm5hbWUuZW5cIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5hbWVlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lblwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2V2ZW50cy5uYW1lJyksXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnZXZlbnRzLm5hbWUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC50cmFuc2xhdGlvbi5uYW1lLmVuKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmV2ZW50LnRyYW5zbGF0aW9uLm5hbWUuZW4gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbicpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbicpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2V2ZW50LnRyYW5zbGF0aW9uLm5hbWUuZW4nKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdldmVudC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbicpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImRlc2NyaXB0aW9uZW5cIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2V2ZW50cy5kZXNjcmlwdGlvbicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RleHRhcmVhJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW5cIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImRlc2NyaXB0aW9uZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImV2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnZXZlbnRzLmRlc2NyaXB0aW9uJyksXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnZXZlbnRzLmRlc2NyaXB0aW9uJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2V2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02IHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdkbmMtaW1hZ2UtdXBsb2FkZXInLCB7XG4gICAgcmVmOiBcInVwbG9hZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYnRuLXRleHRcIjogX3ZtLiR0KCdldmVudHMudXBsb2FkX2ltYWdlJyksXG4gICAgICBcImVycm9yLXZhbGlkYXRpb24tbXNnXCI6IF92bS4kdCgndmFsaWRhdGlvbi5pbWFnZScsIHtcbiAgICAgICAgYXR0cmlidXRlOiBfdm0uJHQoJ2V2ZW50cy51cGxvYWRfaW1hZ2UnKVxuICAgICAgfSksXG4gICAgICBcImltYWdlXCI6IF92bS5ldmVudC5pbWFnZSxcbiAgICAgIFwiZGVmYXVsdC1pbWFnZVwiOiBcIi9pbWFnZXMvbWlzc2luZy9ldmVudC9taXNzaW5nLnBuZ1wiXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LmNoYW1waW9uc2hpcCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInNwb3J0c1wiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZXZlbnRzLmNoYW1waW9uc2hpcCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5ldmVudC5jaGFtcGlvbnNoaXAsXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLmNoYW1waW9uc2hpcENoYW5nZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uY2hhbXBpb25zaGlwc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudC5jaGFtcGlvbnNoaXApLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC5jaGFtcGlvbnNoaXBcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNoYW1waW9uc2hpcF9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJldmVudC5jaGFtcGlvbnNoaXBcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMuY2hhbXBpb25zaGlwJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZXZlbnQuY2hhbXBpb25zaGlwKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmV2ZW50LmNoYW1waW9uc2hpcCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQuY2hhbXBpb25zaGlwJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdldmVudC5jaGFtcGlvbnNoaXAnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdldmVudC5jaGFtcGlvbnNoaXAnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LnNwZWNpYWx0eScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInNwb3J0c1wiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZXZlbnRzLnNwZWNpYWx0eScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5ldmVudC5zcGVjaWFsdHksXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLnNwZWNpYWx0eUNoYW5nZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uc3BlY2lhbHRpZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQuc3BlY2lhbHR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXZlbnQuc3BlY2lhbHR5XCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJzcGVjaWFsdHlfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXZlbnQuc3BlY2lhbHR5XCIsXG4gICAgICBcImZpZWxkXCI6IFwic3BlY2lhbHR5X2lucHV0XCIsXG4gICAgICBcImluaXRpYWxcIjogXCJvZmZcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMuc3BlY2lhbHR5JylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZXZlbnQuc3BlY2lhbHR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmV2ZW50LnNwZWNpYWx0eSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQuc3BlY2lhbHR5JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdldmVudC5zcGVjaWFsdHknKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdldmVudC5zcGVjaWFsdHknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZXZlbnQuY2F0ZWdvcnknKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJzcG9ydHNcIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2V2ZW50cy5jYXRlZ29yeScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5ldmVudC5jYXRlZ29yeSxcbiAgICAgIFwibGFiZWxcIjogXCJuYW1lXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY2F0ZWdvcnlDaGFuZ2VkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2V2ZW50cy5zZWxlY3Rfb3B0aW9uJyksXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmNhdGVnb3JpZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQuY2F0ZWdvcnkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC5jYXRlZ29yeVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY2F0ZWdvcnlfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXZlbnQuY2F0ZWdvcnlcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMuY2F0ZWdvcnknKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC5jYXRlZ29yeSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5ldmVudC5jYXRlZ29yeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQuY2F0ZWdvcnknKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2V2ZW50LmNhdGVnb3J5JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZXZlbnQuY2F0ZWdvcnknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LmdlbmRlcicpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInNwb3J0c1wiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZXZlbnRzLmdlbmRlcicpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5ldmVudC5nZW5kZXIsXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLmdlbmRlckNoYW5nZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uZ2VuZGVyc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudC5nZW5kZXIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC5nZW5kZXJcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImdlbmRlcl9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJldmVudC5nZW5kZXJcIixcbiAgICAgIFwiZmllbGRcIjogXCJnZW5kZXJfaW5wdXRcIixcbiAgICAgIFwiaW5pdGlhbFwiOiBcIm9mZlwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2V2ZW50cy5nZW5kZXInKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC5nZW5kZXIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXZlbnQuZ2VuZGVyID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdldmVudC5nZW5kZXInKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2V2ZW50LmdlbmRlcicpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2V2ZW50LmdlbmRlcicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdldmVudC50eXBlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BvcnRzXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdldmVudHMudHlwZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5ldmVudC50eXBlLFxuICAgICAgXCJsYWJlbFwiOiBcInR5cGVcIixcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS50eXBlQ2hhbmdlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdldmVudHMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS50eXBlc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudC50eXBlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXZlbnQudHlwZVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidHlwZV9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJldmVudC50eXBlXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnZXZlbnRzLnR5cGUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC50eXBlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmV2ZW50LnR5cGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LnR5cGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2V2ZW50LnR5cGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdldmVudC50eXBlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdldmVudC5yZWFjaCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInJlYWNoZXNcIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2V2ZW50cy5yZWFjaCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5ldmVudC5yZWFjaCxcbiAgICAgIFwibGFiZWxcIjogXCJyZWFjaFwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLnJlYWNoQ2hhbmdlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdldmVudHMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5yZWFjaGVzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50LnJlYWNoKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXZlbnQucmVhY2hcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInJlYWNoX2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImV2ZW50LnJlYWNoXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnZXZlbnRzLnJlYWNoJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZXZlbnQucmVhY2gpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXZlbnQucmVhY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LnJlYWNoJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdldmVudC5yZWFjaCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2V2ZW50LnJlYWNoJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LmluaXRfZGF0ZScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImluaXRfZGF0ZVwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZXZlbnRzLmluaXRfZGF0ZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Z1ZS1kYXRldGltZS1waWNrZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidnVlLXBpY2tlcjJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiaW5pdF9kYXRlXCIsXG4gICAgICBcIm1vZGVsXCI6IF92bS5ldmVudC5pbml0X2RhdGUsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uaW5pdERhdGVDaGFuZ2VkLFxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZXRpbWVcIixcbiAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgXCJkYXRldGltZS1mb3JtYXRcIjogXCJMTExcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudC5pbml0X2RhdGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC5pbml0X2RhdGVcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImluaXRfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXZlbnQuaW5pdF9kYXRlXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnZXZlbnRzLmluaXRfZGF0ZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmV2ZW50LmluaXRfZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5ldmVudC5pbml0X2RhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LmluaXRfZGF0ZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZXZlbnQuaW5pdF9kYXRlJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZXZlbnQuaW5pdF9kYXRlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdldmVudC5lbmRfZGF0ZScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImVuZF9kYXRlXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdldmVudHMuZW5kX2RhdGUnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd2dWUtZGF0ZXRpbWUtcGlja2VyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1waWNrZXIzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImVuZF9kYXRlXCIsXG4gICAgICBcIm1vZGVsXCI6IF92bS5ldmVudC5lbmRfZGF0ZSxcbiAgICAgIFwidHlwZVwiOiBcImRhdGV0aW1lXCIsXG4gICAgICBcImxhbmd1YWdlXCI6IFwiZW5cIixcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5lbmREYXRlQ2hhbmdlZCxcbiAgICAgIFwiZGF0ZXRpbWUtZm9ybWF0XCI6IFwiTExMXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQuZW5kX2RhdGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC5lbmRfZGF0ZVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZW5kX2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImV2ZW50LmVuZF9kYXRlXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnZXZlbnRzLmVuZF9kYXRlJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZXZlbnQuZW5kX2RhdGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXZlbnQuZW5kX2RhdGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LmVuZF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdldmVudC5lbmRfZGF0ZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2V2ZW50LmVuZF9kYXRlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25CYWNrXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuYmFjaycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdkaXNhYmxlZCc6IF92bS51cGRhdGluZ1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiLFxuICAgICAgXCJocmVmXCI6IFwiIyFcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uU3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuc2F2ZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pXSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2VyXCJcbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM0Y2QyNjlkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNGNkMjY5ZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9ldmVudHMvZWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDM2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMzIl0sInNvdXJjZVJvb3QiOiIifQ==