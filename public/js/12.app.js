webpackJsonp([12,31],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(304),
  /* template */
  __webpack_require__(408),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/profile/edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37c21b23", Component.options)
  } else {
    hotAPI.reload("data-v-37c21b23", Component.options)
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

/***/ 210:
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

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.inputfile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.inputfile + label {\n    width: auto !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/upload/dnc-image-upload.vue?48b0fff6"],"names":[],"mappings":";AAaA;IACA,aAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,uBAAA;CACA","file":"dnc-image-upload.vue","sourcesContent":["<template>\n    <div>\n        <img :src=\"defaultImage\" alt=\"athlete profile image\" width=\"110px\" v-if=\"!imageFile\">\n        <img :src=\"imageFile\" alt=\"athlete profile image\" width=\"110px\" v-if=\"imageFile\">\n\n        <br><br>\n        <input type=\"file\" name=\"file\" id=\"image-uploader\" class=\"inputfile\" @change=\"onFileChange\"\n               ref=\"fileinput\"/>\n        <label for=\"image-uploader\" class=\"btn btn-primary\"><i class=\"fa fa-cloud\"></i>\n            <span>{{btnText}}</span></label>\n    </div>\n</template>\n<style>\n    .inputfile {\n        width: 0.1px;\n        height: 0.1px;\n        opacity: 0;\n        overflow: hidden;\n        position: absolute;\n        z-index: -1;\n    }\n\n    .inputfile + label {\n        width: auto !important;\n    }\n</style>\n<script type=\"text/babel\">\n\n    export default{\n        props: {\n            value: {},\n            acceptedFiles: {\n                type: String,\n                default: 'image/*'\n            },\n            btnText: {},\n            errorValidationMsg: {},\n            width: {\n                type: Number,\n                default: 110\n            },\n            image: {},\n            defaultImage: {}\n        },\n        watch: {\n            image: function (val) {\n                this.imageFile = val;\n            }\n        },\n        data(){\n            return {\n                imageFile: null\n            }\n        },\n        methods: {\n            onFileChange(e){\n                var files = e.target.files || e.dataTransfer.files;\n                if (!files.length)\n                    return;\n                this.createImage(files[0]);\n            },\n            createImage(file) {\n                if (!file.type.match(this.acceptedFiles)) {\n                    document.getElementById(\"image-uploader\").value = \"\";\n                    this.$root.warningToast(this.errorValidationMsg);\n                    this.imageFile = this.defaultImage\n                    return;\n                }\n                var reader = new FileReader();\n                var vm = this;\n                reader.onload = (e) => {\n                    vm.imageFile = e.target.result;\n                };\n                reader.readAsDataURL(file)\n            },\n            getFile(){\n                return this.$refs.fileinput.files[0];\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.v-select {\n    position: relative;\n}\n.v-select .open-indicator {\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    pointer-events: all;\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    opacity: 1;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .open-indicator {\n    opacity: 0;\n}\n.v-select .open-indicator:before {\n    border-color: rgba(60, 60, 60, .5);\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    vertical-align: top;\n    -webkit-transform: rotate(133deg);\n            transform: rotate(133deg);\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n}\n.v-select.open .open-indicator {\n    bottom: 1px;\n}\n.v-select.open .open-indicator:before {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n}\n.v-select .dropdown-toggle {\n    display: block;\n    padding: 0;\n    background: none;\n    border: 1px solid rgba(60, 60, 60, .26);\n    border-radius: 4px;\n    white-space: normal;\n}\n.v-select.searchable .dropdown-toggle {\n    cursor: text;\n}\n.v-select.open .dropdown-toggle {\n    border-bottom: none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.v-select > .dropdown-menu {\n    margin: 0;\n    width: 100%;\n    overflow-y: scroll;\n    border-top: none;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.v-select .selected-tag {\n    color: #333;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 26px;\n    margin: 4px 1px 0px 3px;\n    padding: 0 0.25em;\n    float: left;\n    line-height: 1.7em;\n}\n.v-select .selected-tag .close {\n    float: none;\n    margin-right: 0;\n    font-size: 20px;\n}\n.v-select input[type=search],\n.v-select input[type=search]:focus {\n    display: inline-block;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0 .5em;\n    width: 10em;\n    max-width: 100%;\n    background: none;\n    position: relative;\n    box-shadow: none;\n    float: left;\n    clear: none;\n}\n.v-select input[type=search]:disabled {\n    cursor: pointer;\n}\n.v-select li a {\n    cursor: pointer;\n}\n.v-select .active a {\n    background: rgba(50, 50, 50, .1);\n    color: #333;\n}\n.v-select .highlight a,\n.v-select li:hover > a {\n    background: #f0f0f0;\n    color: #333;\n}\n.v-select .spinner {\n    opacity: 0;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 5px;\n    text-indent: -9999em;\n    overflow: hidden;\n    border-top: .9em solid rgba(100, 100, 100, .1);\n    border-right: .9em solid rgba(100, 100, 100, .1);\n    border-bottom: .9em solid rgba(100, 100, 100, .1);\n    border-left: .9em solid rgba(60, 60, 60, .45);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-animation: vSelectSpinner 1.1s infinite linear;\n            animation: vSelectSpinner 1.1s infinite linear;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .spinner {\n    opacity: 1;\n}\n.v-select .spinner,\n.v-select .spinner:after {\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n}\n@-webkit-keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/forms/select/select.vue?46a988a4"],"names":[],"mappings":";AACA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;IACA,gBAAA;IACA,oBAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;IACA,WAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,mCAAA;IACA,oBAAA;IACA,gCAAA;IACA,YAAA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,oBAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,WAAA;IACA,iBAAA;IACA,wCAAA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,oBAAA;IACA,6BAAA;IACA,8BAAA;CACA;AAEA;IACA,UAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;IACA,2BAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;;IAEA,sBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,iCAAA;IACA,YAAA;CACA;AAEA;;IAEA,oBAAA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,mBAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,qBAAA;IACA,iBAAA;IACA,+CAAA;IACA,iDAAA;IACA,kDAAA;IACA,8CAAA;IACA,iCAAA;YAAA,yBAAA;IACA,uDAAA;YAAA,+CAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,mBAAA;IACA,WAAA;IACA,YAAA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA","file":"select.vue","sourcesContent":["<style>\n    .v-select {\n        position: relative;\n    }\n\n    .v-select .open-indicator {\n        position: absolute;\n        bottom: 6px;\n        right: 10px;\n        display: inline-block;\n        cursor: pointer;\n        pointer-events: all;\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        opacity: 1;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .open-indicator {\n        opacity: 0;\n    }\n\n    .v-select .open-indicator:before {\n        border-color: rgba(60, 60, 60, .5);\n        border-style: solid;\n        border-width: 0.25em 0.25em 0 0;\n        content: '';\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        vertical-align: top;\n        transform: rotate(133deg);\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    }\n\n    .v-select.open .open-indicator {\n        bottom: 1px;\n    }\n\n    .v-select.open .open-indicator:before {\n        transform: rotate(315deg);\n    }\n\n    .v-select .dropdown-toggle {\n        display: block;\n        padding: 0;\n        background: none;\n        border: 1px solid rgba(60, 60, 60, .26);\n        border-radius: 4px;\n        white-space: normal;\n    }\n\n    .v-select.searchable .dropdown-toggle {\n        cursor: text;\n    }\n\n    .v-select.open .dropdown-toggle {\n        border-bottom: none;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n\n    .v-select > .dropdown-menu {\n        margin: 0;\n        width: 100%;\n        overflow-y: scroll;\n        border-top: none;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    .v-select .selected-tag {\n        color: #333;\n        background-color: #f0f0f0;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        height: 26px;\n        margin: 4px 1px 0px 3px;\n        padding: 0 0.25em;\n        float: left;\n        line-height: 1.7em;\n    }\n\n    .v-select .selected-tag .close {\n        float: none;\n        margin-right: 0;\n        font-size: 20px;\n    }\n\n    .v-select input[type=search],\n    .v-select input[type=search]:focus {\n        display: inline-block;\n        border: none;\n        outline: none;\n        margin: 0;\n        padding: 0 .5em;\n        width: 10em;\n        max-width: 100%;\n        background: none;\n        position: relative;\n        box-shadow: none;\n        float: left;\n        clear: none;\n    }\n\n    .v-select input[type=search]:disabled {\n        cursor: pointer;\n    }\n\n    .v-select li a {\n        cursor: pointer;\n    }\n\n    .v-select .active a {\n        background: rgba(50, 50, 50, .1);\n        color: #333;\n    }\n\n    .v-select .highlight a,\n    .v-select li:hover > a {\n        background: #f0f0f0;\n        color: #333;\n    }\n\n    .v-select .spinner {\n        opacity: 0;\n        position: absolute;\n        top: 5px;\n        right: 10px;\n        font-size: 5px;\n        text-indent: -9999em;\n        overflow: hidden;\n        border-top: .9em solid rgba(100, 100, 100, .1);\n        border-right: .9em solid rgba(100, 100, 100, .1);\n        border-bottom: .9em solid rgba(100, 100, 100, .1);\n        border-left: .9em solid rgba(60, 60, 60, .45);\n        transform: translateZ(0);\n        animation: vSelectSpinner 1.1s infinite linear;\n        transition: opacity .1s;\n    }\n\n    .v-select.loading .spinner {\n        opacity: 1;\n    }\n\n    .v-select .spinner,\n    .v-select .spinner:after {\n        border-radius: 50%;\n        width: 5em;\n        height: 5em;\n    }\n\n    @-webkit-keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes vSelectSpinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n\n<template>\n    <div class=\"dropdown v-select\" :class=\"dropdownClasses\">\n        <div ref=\"toggle\" @mousedown.prevent=\"toggleDropdown\" class=\"dropdown-toggle clearfix\" type=\"button\">\n        <span class=\"form-control\" v-if=\"!searchable && isValueEmpty\">\n          {{ placeholder }}\n        </span>\n\n            <span class=\"selected-tag\" v-for=\"(option,index) in valueAsArray\" v-bind:key=\"index\">\n          {{ getOptionLabel(option) }}\n          <button v-if=\"multiple\" @click=\"select(option)\" type=\"button\" class=\"close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </span>\n\n            <input\n                    ref=\"search\"\n                    :debounce=\"debounce\"\n                    v-model=\"search\"\n                    v-show=\"searchable\"\n                    @keydown.delete=\"maybeDeleteValue\"\n                    @keyup.esc=\"onEscape\"\n                    @keydown.up.prevent=\"typeAheadUp\"\n                    @keydown.down.prevent=\"typeAheadDown\"\n                    @keyup.enter.prevent=\"typeAheadSelect\"\n                    @blur=\"open = false\"\n                    @focus=\"open = true\"\n                    type=\"search\"\n                    class=\"form-control\"\n                    :placeholder=\"searchPlaceholder\"\n                    :style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"\n            >\n\n            <i ref=\"openIndicator\" role=\"presentation\" class=\"open-indicator\"></i>\n\n            <slot name=\"spinner\">\n                <div class=\"spinner\" v-show=\"loading\">Loading...</div>\n            </slot>\n        </div>\n\n        <ul ref=\"dropdownMenu\" v-show=\"open\" :transition=\"transition\" class=\"dropdown-menu\"\n            :style=\"{ 'max-height': maxHeight }\">\n            <li v-for=\"(option,index) in filteredOptions\" v-bind:key=\"index\"\n                :class=\"{ active: isOptionSelected(option), highlight: index === typeAheadPointer }\"\n                @mouseover=\"typeAheadPointer = index\">\n                <a @mousedown.prevent=\"select(option)\">\n                    {{ getOptionLabel(option) }}\n                </a>\n            </li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"divider\"></li>\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"text-center\">\n                <slot name=\"no-options\">Sorry, no matching options.</slot>\n            </li>\n        </ul>\n    </div>\n</template>\n\n\n<script type=\"text/babel\">\n    import pointerScroll from 'base/mixins/pointerScroll'\n    import typeAheadPointer from 'base/mixins/typeAheadPointer'\n    import ajax from 'base/mixins/ajax'\n\n    export default {\n        mixins: [pointerScroll, typeAheadPointer, ajax],\n\n        props: {\n            /**\n             * Contains the currently selected value. Very similar to a\n             * `value` attribute on an <input>. In most cases, you'll want\n             * to set this as a two-way binding, using :value.sync. However,\n             * this will not work with Vuex, in which case you'll need to use\n             * the onChange callback property.\n             * @type {Object||String||null}\n             */\n            value: {\n                default: null\n            },\n\n            /**\n             * An array of strings or objects to be used as dropdown choices.\n             * If you are using an array of objects, vue-select will look for\n             * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\n             * custom label key can be set with the `label` prop.\n             * @type {Object}\n             */\n            options: {\n                type: Array,\n                default() {\n                    return []\n                },\n            },\n\n            /**\n             * Sets the max-height property on the dropdown list.\n             * @deprecated\n             * @type {String}\n             */\n            maxHeight: {\n                type: String,\n                default: '400px'\n            },\n\n            /**\n             * Enable/disable filtering the options.\n             * @type {Boolean}\n             */\n            searchable: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Equivalent to the `multiple` attribute on a `<select>` input.\n             * @type {Object}\n             */\n            multiple: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * Equivalent to the `placeholder` attribute on an `<input>`.\n             * @type {Object}\n             */\n            placeholder: {\n                type: String,\n                default: ''\n            },\n\n            /**\n             * Sets a Vue transition property on the `.dropdown-menu`. vue-select\n             * does not include CSS for transitions, you'll need to add them yourself.\n             * @type {String}\n             */\n            transition: {\n                type: String,\n                default: 'expand'\n            },\n\n            /**\n             * Enables/disables clearing the search text when an option is selected.\n             * @type {Boolean}\n             */\n            clearSearchOnSelect: {\n                type: Boolean,\n                default: true\n            },\n\n            /**\n             * Tells vue-select what key to use when generating option\n             * labels when each `option` is an object.\n             * @type {String}\n             */\n            label: {\n                type: String,\n                default: 'label'\n            },\n\n            /**\n             * Callback to generate the label text. If {option}\n             * is an object, returns option[this.label] by default.\n             * @param  {Object || String} option\n             * @return {String}\n             */\n            getOptionLabel: {\n                type: Function,\n                default(option) {\n                    if (typeof option === 'object') {\n                        if (this.label && option[this.label]) {\n                            return option[this.label]\n                        }\n                    }\n                    return option;\n                }\n            },\n\n            /**\n             * An optional callback function that is called each time the selected\n             * value(s) change. When integrating with Vuex, use this callback to trigger\n             * an action, rather than using :value.sync to retreive the selected value.\n             * @type {Function}\n             * @default {null}\n             */\n            onChange: Function,\n            changeParam: {},\n\n            /**\n             * Enable/disable creating options from searchInput.\n             * @type {Boolean}\n             */\n            taggable: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * When true, newly created tags will be added to\n             * the options list.\n             * @type {Boolean}\n             */\n            pushTags: {\n                type: Boolean,\n                default: false\n            },\n\n            /**\n             * User defined function for adding Options\n             * @type {Function}\n             */\n            createOption: {\n                type: Function,\n                default: function (newOption) {\n                    if (typeof this.options[0] === 'object') {\n                        return {[this.label]: newOption}\n                    }\n                    return newOption\n                }\n            },\n\n            /**\n             * When false, updating the options will not reset the select value\n             * @type {Boolean}\n             */\n            resetOnOptionsChange: {\n                type: Boolean,\n                default: false\n            },\n        },\n\n        data() {\n            return {\n                search: '',\n                open: false,\n                selection: null\n            }\n        },\n\n        watch: {\n            value(val, old) {\n                this.selection = val\n            },\n            selection(val, old) {\n                if (this.multiple) {\n                    this.onChange ? this.onChange(val, this.changeParam) : null\n                } else {\n                    this.onChange && val !== old ? this.onChange(val, this.changeParam) : null\n                }\n            },\n            options() {\n                if (!this.taggable && this.resetOnOptionsChange) {\n                    this.selection = this.multiple ? [] : null\n                }\n            },\n            multiple(val) {\n                this.selection = val ? [] : null\n            }\n        },\n\n        methods: {\n\n            /**\n             * Select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            select(option) {\n                if (this.isOptionSelected(option)) {\n                    this.deselect(option)\n                } else {\n                    if (this.taggable && !this.optionExists(option)) {\n                        option = this.createOption(option)\n\n                        if (this.pushTags) {\n                            this.options.push(option)\n                        }\n                    }\n\n                    if (this.multiple) {\n                        if (!this.selection) {\n                            this.selection = [option]\n                        } else {\n                            this.selection.push(option)\n                        }\n                    } else {\n                        this.selection = option\n                    }\n                }\n\n                this.onAfterSelect(option)\n            },\n\n            /**\n             * De-select a given option.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            deselect(option) {\n                if (this.multiple) {\n                    let ref = -1\n                    this.selection.forEach((val) => {\n                        if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {\n                            ref = val\n                        }\n                    })\n                    var index = this.selection.indexOf(ref);\n                    this.selection.splice(index, 1)\n\n                } else {\n                    this.selection = null\n                }\n            },\n\n            /**\n             * Called from this.select after each selection.\n             * @param  {Object||String} option\n             * @return {void}\n             */\n            onAfterSelect(option) {\n                if (!this.multiple) {\n                    this.open = !this.open\n                    this.$refs.search.blur()\n                }\n\n                if (this.clearSearchOnSelect) {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Toggle the visibility of the dropdown menu.\n             * @param  {Event} e\n             * @return {void}\n             */\n            toggleDropdown(e) {\n                if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {\n                    if (this.open) {\n                        this.$refs.search.blur() // dropdown will close on blur\n                    } else {\n                        this.open = true\n                        this.$refs.search.focus()\n                    }\n                }\n            },\n\n            /**\n             * Check if the given option is currently selected.\n             * @param  {Object||String}  option\n             * @return {Boolean}         True when selected || False otherwise\n             */\n            isOptionSelected(option) {\n                if (this.multiple && this.selection) {\n                    let selected = false\n                    this.value.forEach(opt => {\n                        if (typeof opt === 'object' && opt[this.label] === option[this.label]) {\n                            selected = true\n                        } else if (opt === option) {\n                            selected = true\n                        }\n                    })\n                    return selected\n                }\n\n                return this.selection === option\n            },\n\n            /**\n             * If there is any text in the search input, remove it.\n             * Otherwise, blur the search input to close the dropdown.\n             * @return {[type]} [description]\n             */\n            onEscape() {\n                if (!this.search.length) {\n                    this.$refs.search.blur()\n                } else {\n                    this.search = ''\n                }\n            },\n\n            /**\n             * Delete the value on Delete keypress when there is no\n             * text in the search input, & there's tags to delete\n             * @return {this.value}\n             */\n            maybeDeleteValue() {\n                if (!this.$refs.search.value.length && this.value) {\n                    return this.multiple ? this.value.pop() : this.selection = null\n                }\n            },\n\n            /**\n             * Determine if an option exists\n             * within this.options array.\n             *\n             * @param  {Object || String} option\n             * @return {boolean}\n             */\n            optionExists(option) {\n                let exists = false\n\n                this.options.forEach(opt => {\n                    if (typeof opt === 'object' && opt[this.label] === option) {\n                        exists = true\n                    } else if (opt === option) {\n                        exists = true\n                    }\n                })\n\n                return exists\n            }\n        },\n\n        computed: {\n\n            /**\n             * Classes to be output on .dropdown\n             * @return {Object}\n             */\n            dropdownClasses() {\n                return {\n                    open: this.open,\n                    searchable: this.searchable,\n                    loading: this.loading\n                }\n            },\n\n            /**\n             * Return the placeholder string if it's set\n             * & there is no value selected.\n             * @return {String} Placeholder text\n             */\n            searchPlaceholder() {\n                if (this.isValueEmpty && this.placeholder) {\n                    return this.placeholder;\n                }\n            },\n\n            /**\n             * The currently displayed options, filtered\n             * by the search elements value. If tagging\n             * true, the search text will be prepended\n             * if it doesn't already exist.\n             *\n             * @return {array}\n             */\n            filteredOptions() {\n                let self = this;\n                let options = this.options.filter(function (option) {\n                    return option[self.label].indexOf(self.search) !== -1\n                })\n                if (this.taggable && this.search.length && !this.optionExists(this.search)) {\n                    options.unshift(this.search)\n                }\n                return options\n            },\n\n            /**\n             * Check if there aren't any options selected.\n             * @return {Boolean}\n             */\n            isValueEmpty() {\n                if (this.selection) {\n                    if (typeof this.selection === 'object') {\n                        return !Object.keys(this.selection).length\n                    }\n                    return !this.selection.length\n                }\n\n                return true;\n            },\n\n            /**\n             * Return the current value in array format.\n             * @return {Array}\n             */\n            valueAsArray() {\n                if (this.multiple) {\n                    return this.selection\n                } else if (this.selection) {\n                    return [this.selection]\n                }\n\n                return []\n            }\n        }\n\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(222)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(210),
  /* template */
  __webpack_require__(220),
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

/***/ 220:
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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
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

/***/ 224:
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

/***/ 304:
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
//
//
//
//
//
//
//
//
//
//
//
//
//

var _athletes = __webpack_require__(224);

var _athletes2 = _interopRequireDefault(_athletes);

var _dncImageUpload = __webpack_require__(218);

var _dncImageUpload2 = _interopRequireDefault(_dncImageUpload);

var _select = __webpack_require__(202);

var _select2 = _interopRequireDefault(_select);

var _pageHeader = __webpack_require__(196);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _formDataParser = __webpack_require__(201);

var _formDataParser2 = _interopRequireDefault(_formDataParser);

var _vuex = __webpack_require__(4);

var _userService = __webpack_require__(247);

var _userService2 = _interopRequireDefault(_userService);

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
            user: {
                athlete: {
                    sport: null
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
                href: '/my-profile',
                title: 'admin.my_profile'
            }, {
                href: '/my-profile/update',
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
        _userService2.default.show(this.$auth.user().id, function (response) {
            response.data.athlete = response.data.athlete ? response.data.athlete : {
                sport: null,
                specialty: null,
                category: null,
                country: null,
                gender: null
            };
            _this.user = response.data;
            _this.getSpecialties(_this.user.athlete.sport.id);
            if (_this.user.athlete.championship) _this.getChampionshipEvents(_this.user.athlete.championship.id);
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
            this.user.athlete.sport = sport;
            this.user.sport = sport;
            var self = this;
            if (this.user.athlete.sport) {
                this.getSpecialties(this.user.athlete.sport.id, function (data) {
                    if (!data.filter(function (specialty) {
                        return specialty.id == self.user.athlete.specialty.id;
                    }).length) {
                        self.user.athlete.specialty = null;
                    }
                });
            } else {
                this.setSpecialties([]);
                this.user.athlete.specialty = null;
            }
        },
        specialtyChanged: function specialtyChanged(specialty) {
            this.user.athlete.specialty = specialty;
        },
        categoryChanged: function categoryChanged(category) {
            this.user.athlete.category = category;
        },
        countryChanged: function countryChanged(country) {
            this.user.athlete.country = country;
        },
        genderChanged: function genderChanged(gender) {
            this.user.athlete.gender = gender;
        },
        eventChanged: function eventChanged(events) {
            this.user.athlete.events = events;
        },
        onBack: function onBack(evt) {
            evt.preventDefault();
            this.$router.push({
                name: 'user.view'
            });
        },
        championshipChanged: function championshipChanged(championship) {
            this.user.athlete.championship = championship;

            var self = this;
            if (this.user.athlete.championship) {
                this.getChampionshipEvents(this.user.athlete.championship.id, function (data) {
                    if (!data.filter(function (event) {
                        return event.id == self.user.athlete.event.id;
                    }).length) {
                        self.user.athlete.event = null;
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
                formData.append('first_name', self.user.first_name);
                formData.append('last_name', self.user.last_name);
                formData.append('email', self.user.email);
                if (self.user.athlete.federation_code) formData.append('federation_code', self.user.athlete.federation_code);
                if (self.user.athlete.national_code) formData.append('national_code', self.user.athlete.national_code);
                formData.append('sport_id', self.user.athlete.sport.id);
                formData.append('specialty_id', self.user.athlete.specialty.id);
                formData.append('category_id', self.user.athlete.category.id);
                formData.append('country_id', self.user.athlete.country.id);
                formData.append('gender', self.user.athlete.gender.gender);
                if (self.user.athlete.height) formData.append('height', self.user.athlete.height);
                if (self.user.athlete.weight) formData.append('weight', self.user.athlete.weight);
                if (self.user.athlete.ranking) formData.append('ranking', self.user.athlete.ranking);

                _userService2.default.update(self.user.id, formData, function (response) {
                    _this2.$auth.fetch();
                    self.$root.successToast(response.message);
                    self.$router.push({
                        name: 'user.view'
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
            }).catch(function () {
                _this2.$root.errorToast(_this2.$t('admin.validation_error'));
            });
        }
    })
};

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('admin-header', {
    attrs: {
      "title": _vm.$t('admin.my_profile'),
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
  }, [_vm._v(_vm._s(_vm.$t('admin.my_profile')))])]), _vm._v(" "), _c('div', {
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
      value: (_vm.user.first_name),
      expression: "user.first_name"
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
      "value": _vm._s(_vm.user.first_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.first_name = $event.target.value
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
      value: (_vm.user.last_name),
      expression: "user.last_name"
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
      "value": _vm._s(_vm.user.last_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.last_name = $event.target.value
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
  }, [_vm._v(_vm._s(_vm.errors.first('last_name')) + "\n                                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('email')
    }
  }, [_c('label', {
    attrs: {
      "for": "email",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.email')) + "\n                                        ")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.email),
      expression: "user.email"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "email",
      "type": "text",
      "name": "email",
      "placeholder": _vm.$t('athletes.email'),
      "data-vv-rules": "required|email",
      "data-vv-as": _vm.$t('athletes.email')
    },
    domProps: {
      "value": _vm._s(_vm.user.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('email')),
      expression: "errors.has('email')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('email')) + "\n                                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6 text-center"
  }, [_c('dnc-image-uploader', {
    ref: "uploader",
    attrs: {
      "btn-text": _vm.$t('athletes.upload_image'),
      "error-validation-msg": _vm.$t('validation.image', {
        attribute: _vm.$t('athletes.upload_image')
      }),
      "image": _vm.user.image,
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
  }, [_vm._m(3), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.federation_code),
      expression: "user.athlete.federation_code"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "federation_code",
      "name": "federation_code",
      "type": "text",
      "placeholder": _vm.$t('athletes.federation_code')
    },
    domProps: {
      "value": _vm._s(_vm.user.athlete.federation_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.federation_code = $event.target.value
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
  }, [_vm._m(4), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.national_code),
      expression: "user.athlete.national_code"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "national_code",
      "name": "national_code",
      "type": "text",
      "placeholder": _vm.$t('athletes.national_code')
    },
    domProps: {
      "value": _vm._s(_vm.user.athlete.national_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.national_code = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('athletesport')
    }
  }, [_c('label', {
    attrs: {
      "for": "athletesport",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.sport')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.user.athlete.sport,
      "label": "name",
      "on-change": _vm.sportChanged,
      "placeholder": _vm.$t('athletes.select_option'),
      "options": _vm.sports
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.sport),
      expression: "user.athlete.sport"
    }, {
      name: "validate",
      rawName: "v-validate.initial",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "athletesport",
      "type": "hidden",
      "name": "athletesport",
      "data-vv-rules": "required",
      "data-vv-as": _vm.$t('athletes.sport')
    },
    domProps: {
      "value": _vm._s(_vm.user.athlete.sport)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.sport = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('athletesport')),
      expression: "errors.has('athletesport')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('athletesport')) + "\n                                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('specialty')
    }
  }, [_c('label', {
    attrs: {
      "for": "specialty_input",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.specialty')) + "\n                                        ")]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.user.athlete.specialty,
      "label": "name",
      "placeholder": _vm.$t('athletes.select_option'),
      "on-change": _vm.specialtyChanged,
      "options": _vm.specialties
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.specialty),
      expression: "user.athlete.specialty"
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
      "value": _vm._s(_vm.user.athlete.specialty)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.specialty = $event.target.value
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
      "for": "category_input",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.category')) + "\n                                        ")]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.user.athlete.category,
      "label": "name",
      "placeholder": _vm.$t('athletes.select_option'),
      "on-change": _vm.categoryChanged,
      "options": _vm.categories
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.category),
      expression: "user.athlete.category"
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
      "value": _vm._s(_vm.user.athlete.category)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.category = $event.target.value
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
      "for": "country_input",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.country')) + "\n                                        ")]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.user.athlete.country,
      "label": "name",
      "on-change": _vm.countryChanged,
      "placeholder": _vm.$t('athletes.select_option'),
      "options": _vm.countries
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.country),
      expression: "user.athlete.country"
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
      "value": _vm._s(_vm.user.athlete.country)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.country = $event.target.value
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
      "for": "gender_input",
      "data-vv-error": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('athletes.gender')))]), _vm._v(" "), _c('v-select', {
    attrs: {
      "value": _vm.user.athlete.gender,
      "label": "name",
      "placeholder": _vm.$t('athletes.select_option'),
      "on-change": _vm.genderChanged,
      "options": _vm.genders
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.gender),
      expression: "user.athlete.gender"
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
      "value": _vm._s(_vm.user.athlete.gender)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.gender = $event.target.value
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
  }, [_vm._m(5), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.height),
      expression: "user.athlete.height"
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
      "value": _vm._s(_vm.user.athlete.height)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.height = $event.target.value
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
  }, [_vm._m(6), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.weight),
      expression: "user.athlete.weight"
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
      "value": _vm._s(_vm.user.athlete.weight)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.weight = $event.target.value
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
  }, [_vm._m(7), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.athlete.ranking),
      expression: "user.athlete.ranking"
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
      "value": _vm._s(_vm.user.athlete.ranking)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.athlete.ranking = $event.target.value
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
     require("vue-hot-reload-api").rerender("data-v-37c21b23", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Byb2ZpbGUvZWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3BhZ2VIZWFkZXIudnVlPzU2MGMqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2E1NmYqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT8zOGEzKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NDQxMioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyLmpzPzBjMzcqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/ZjViNSoqKioqIiwid2VicGFjazovLy9zZWxlY3QudnVlP2EwMTUqKioqKiIsIndlYnBhY2s6Ly8vZG5jLWltYWdlLXVwbG9hZC52dWU/MGNlYyoqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXguanM/YzBkNCoqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanM/ZWFiNioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3R5cGVBaGVhZFBvaW50ZXIuanM/YmVkNioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/OGE1NyoqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/YmIxNyoqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlP2Q4Y2QqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlP2ZjZWQqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlPzJkODcqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT83NWY4KioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT83OTZkKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9hdGhsZXRlcy9hdGhsZXRlcy5qcz9kY2Y2KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZWRpdC52dWU/ODcwOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Byb2ZpbGUvZWRpdC52dWU/MDJmNiJdLCJuYW1lcyI6WyJtZXRob2RzIiwicGFyc2VPYmpGb3JtRGF0YSIsIm9iaiIsImZvcm1kYXRhIiwibmFtZXNwYWNlIiwiZmQiLCJmb3JtS2V5IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkZpbGUiLCJhcHBlbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvcHMiLCJsb2FkaW5nIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwib25TZWFyY2giLCJkZWJvdW5jZSIsIk51bWJlciIsIndhdGNoIiwic2VhcmNoIiwibGVuZ3RoIiwidG9nZ2xlTG9hZGluZyIsInRvZ2dsZSIsInR5cGVBaGVhZFBvaW50ZXIiLCJtYXliZUFkanVzdFNjcm9sbCIsInBpeGVsc1RvUG9pbnRlclRvcCIsInBpeGVsc1RvUG9pbnRlckJvdHRvbSIsInZpZXdwb3J0IiwidG9wIiwic2Nyb2xsVG8iLCJib3R0b20iLCJwb2ludGVySGVpZ2h0IiwiaSIsIiRyZWZzIiwiZHJvcGRvd25NZW51IiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50Iiwic2Nyb2xsVG9wIiwicG9zaXRpb24iLCJkYXRhIiwiZmlsdGVyZWRPcHRpb25zIiwidHlwZUFoZWFkVXAiLCJ0eXBlQWhlYWREb3duIiwidHlwZUFoZWFkU2VsZWN0Iiwic2VsZWN0IiwidGFnZ2FibGUiLCJjbGVhclNlYXJjaE9uU2VsZWN0Iiwic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwidXBkYXRlIiwidXNlciIsInB1dCIsImVtdWxhdGVIVFRQIiwiY3JlYXRlIiwicG9zdCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFD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R0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzEyLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lZGl0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM3YzIxYjIzIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Byb2ZpbGUvZWRpdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBlZGl0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zN2MyMWIyM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM3YzIxYjIzXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcHJvZmlsZS9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03ZmNkMDk1NiFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdmY2QwOTU2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImJyZWFkY3J1bWIuaHJlZlwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIHRhZz1cImxpXCIgdi1mb3I9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCI+XG4gICAgICAgICAgICAgICAge3skdChicmVhZGNydW1iLnRpdGxlKX19XG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L29sPlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cbiAgICAuYWRtaW4taGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA5N3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhZ2VIZWFkZXIudnVlPzUzNzlmNWNiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRtaW4taGVhZGVyIHtcXG4gIGhlaWdodDogOTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hZG1pbi1oZWFkZXIgLnJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiXG4gIH0sIFtfYygnaDEnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iXCJcbiAgfSwgX3ZtLl9sKChfdm0uYnJlYWRjcnVtYnMpLCBmdW5jdGlvbihicmVhZGNydW1iKSB7XG4gICAgcmV0dXJuIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjogYnJlYWRjcnVtYi5ocmVmLFxuICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiLFxuICAgICAgICBcInRhZ1wiOiBcImxpXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KGJyZWFkY3J1bWIudGl0bGUpKSArIFwiXFxuICAgICAgICBcIildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03ZmNkMDk1NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImU5ZmVjMWMyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsImV4cG9ydCBkZWZhdWx0e1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcGFyc2VPYmpGb3JtRGF0YShvYmosIGZvcm1kYXRhLCBuYW1lc3BhY2UpIHtcblxuICAgICAgICAgICAgdmFyIGZkID0gZm9ybWRhdGE7XG4gICAgICAgICAgICB2YXIgZm9ybUtleTtcblxuICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBvYmpbcHJvcGVydHldICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtS2V5ID0gbmFtZXNwYWNlICsgJ1snICsgcHJvcGVydHkgKyAnXSc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtS2V5ID0gcHJvcGVydHk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYW4gb2JqZWN0LCBidXQgbm90IGEgRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHJlY3Vyc2l2aXR5LlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wZXJ0eV0gPT09ICdvYmplY3QnICYmICEob2JqW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlT2JqRm9ybURhdGEob2JqW3Byb3BlcnR5XSwgZmQsIGZvcm1LZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGZvcm1LZXksIG9ialtwcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZm9ybURhdGFQYXJzZXIuanMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZWxlY3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LThkMzUxMDM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOGQzNTEwMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNyA4IDkgMTAgMTIgMTMgMTQiLCI8c3R5bGU+XG4gICAgLnYtc2VsZWN0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcbiAgICB9XG5cbiAgICAudi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yIHtcbiAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuMjYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG5cbiAgICAudi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0ID4gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBtYXJnaW46IDRweCAxcHggMHB4IDNweDtcbiAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBsaW5lLWhlaWdodDogMS43ZW07XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF0sXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY2xlYXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpkaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLmFjdGl2ZSBhIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAuMSk7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXG4gICAgLnYtc2VsZWN0IGxpOmhvdmVyID4gYSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDVweDtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIGFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xuICAgIH1cblxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5zcGlubmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNWVtO1xuICAgICAgICBoZWlnaHQ6IDVlbTtcbiAgICB9XG5cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biB2LXNlbGVjdFwiIDpjbGFzcz1cImRyb3Bkb3duQ2xhc3Nlc1wiPlxuICAgICAgICA8ZGl2IHJlZj1cInRvZ2dsZVwiIEBtb3VzZWRvd24ucHJldmVudD1cInRvZ2dsZURyb3Bkb3duXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1pZj1cIiFzZWFyY2hhYmxlICYmIGlzVmFsdWVFbXB0eVwiPlxuICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC10YWdcIiB2LWZvcj1cIihvcHRpb24saW5kZXgpIGluIHZhbHVlQXNBcnJheVwiIHYtYmluZDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cbiAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJtdWx0aXBsZVwiIEBjbGljaz1cInNlbGVjdChvcHRpb24pXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIDpkZWJvdW5jZT1cImRlYm91bmNlXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cInNlYXJjaGFibGVcIlxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kZWxldGU9XCJtYXliZURlbGV0ZVZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVzYz1cIm9uRXNjYXBlXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24udXAucHJldmVudD1cInR5cGVBaGVhZFVwXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZG93bi5wcmV2ZW50PVwidHlwZUFoZWFkRG93blwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlci5wcmV2ZW50PVwidHlwZUFoZWFkU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJvcGVuID0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJvcGVuID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nIH1cIlxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICA8aSByZWY9XCJvcGVuSW5kaWNhdG9yXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwib3Blbi1pbmRpY2F0b3JcIj48L2k+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJzcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIiB2LXNob3c9XCJsb2FkaW5nXCI+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWwgcmVmPVwiZHJvcGRvd25NZW51XCIgdi1zaG93PVwib3BlblwiIDp0cmFuc2l0aW9uPVwidHJhbnNpdGlvblwiIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7ICdtYXgtaGVpZ2h0JzogbWF4SGVpZ2h0IH1cIj5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIihvcHRpb24saW5kZXgpIGluIGZpbHRlcmVkT3B0aW9uc1wiIHYtYmluZDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gdHlwZUFoZWFkUG9pbnRlciB9XCJcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwidHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgPGEgQG1vdXNlZG93bi5wcmV2ZW50PVwic2VsZWN0KG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cImZhZGVcIiB2LWlmPVwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcIiBjbGFzcz1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJuby1vcHRpb25zXCI+U29ycnksIG5vIG1hdGNoaW5nIG9wdGlvbnMuPC9zbG90PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdCB0eXBlPVwidGV4dC9iYWJlbFwiPlxuICAgIGltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJ2Jhc2UvbWl4aW5zL3BvaW50ZXJTY3JvbGwnXG4gICAgaW1wb3J0IHR5cGVBaGVhZFBvaW50ZXIgZnJvbSAnYmFzZS9taXhpbnMvdHlwZUFoZWFkUG9pbnRlcidcbiAgICBpbXBvcnQgYWpheCBmcm9tICdiYXNlL21peGlucy9hamF4J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtaXhpbnM6IFtwb2ludGVyU2Nyb2xsLCB0eXBlQWhlYWRQb2ludGVyLCBhamF4XSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHZhbHVlLiBWZXJ5IHNpbWlsYXIgdG8gYVxuICAgICAgICAgICAgICogYHZhbHVlYCBhdHRyaWJ1dGUgb24gYW4gPGlucHV0Pi4gSW4gbW9zdCBjYXNlcywgeW91J2xsIHdhbnRcbiAgICAgICAgICAgICAqIHRvIHNldCB0aGlzIGFzIGEgdHdvLXdheSBiaW5kaW5nLCB1c2luZyA6dmFsdWUuc3luYy4gSG93ZXZlcixcbiAgICAgICAgICAgICAqIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFZ1ZXgsIGluIHdoaWNoIGNhc2UgeW91J2xsIG5lZWQgdG8gdXNlXG4gICAgICAgICAgICAgKiB0aGUgb25DaGFuZ2UgY2FsbGJhY2sgcHJvcGVydHkuXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fHxTdHJpbmd8fG51bGx9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgdG8gYmUgdXNlZCBhcyBkcm9wZG93biBjaG9pY2VzLlxuICAgICAgICAgICAgICogSWYgeW91IGFyZSB1c2luZyBhbiBhcnJheSBvZiBvYmplY3RzLCB2dWUtc2VsZWN0IHdpbGwgbG9vayBmb3JcbiAgICAgICAgICAgICAqIGEgYGxhYmVsYCBrZXkgKGV4LiBbe2xhYmVsOiAnVGhpcyBpcyBGb28nLCB2YWx1ZTogJ2Zvbyd9XSkuIEFcbiAgICAgICAgICAgICAqIGN1c3RvbSBsYWJlbCBrZXkgY2FuIGJlIHNldCB3aXRoIHRoZSBgbGFiZWxgIHByb3AuXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0cyB0aGUgbWF4LWhlaWdodCBwcm9wZXJ0eSBvbiB0aGUgZHJvcGRvd24gbGlzdC5cbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzQwMHB4J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBmaWx0ZXJpbmcgdGhlIG9wdGlvbnMuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VhcmNoYWJsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiBhIGA8c2VsZWN0PmAgaW5wdXQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgb24gYW4gYDxpbnB1dD5gLlxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0cyBhIFZ1ZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHRoZSBgLmRyb3Bkb3duLW1lbnVgLiB2dWUtc2VsZWN0XG4gICAgICAgICAgICAgKiBkb2VzIG5vdCBpbmNsdWRlIENTUyBmb3IgdHJhbnNpdGlvbnMsIHlvdSdsbCBuZWVkIHRvIGFkZCB0aGVtIHlvdXJzZWxmLlxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZXhwYW5kJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGNsZWFyaW5nIHRoZSBzZWFyY2ggdGV4dCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjbGVhclNlYXJjaE9uU2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRlbGxzIHZ1ZS1zZWxlY3Qgd2hhdCBrZXkgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyBvcHRpb25cbiAgICAgICAgICAgICAqIGxhYmVscyB3aGVuIGVhY2ggYG9wdGlvbmAgaXMgYW4gb2JqZWN0LlxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2xhYmVsJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsYmFjayB0byBnZW5lcmF0ZSB0aGUgbGFiZWwgdGV4dC4gSWYge29wdGlvbn1cbiAgICAgICAgICAgICAqIGlzIGFuIG9iamVjdCwgcmV0dXJucyBvcHRpb25bdGhpcy5sYWJlbF0gYnkgZGVmYXVsdC5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgJiYgb3B0aW9uW3RoaXMubGFiZWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvblt0aGlzLmxhYmVsXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBlYWNoIHRpbWUgdGhlIHNlbGVjdGVkXG4gICAgICAgICAgICAgKiB2YWx1ZShzKSBjaGFuZ2UuIFdoZW4gaW50ZWdyYXRpbmcgd2l0aCBWdWV4LCB1c2UgdGhpcyBjYWxsYmFjayB0byB0cmlnZ2VyXG4gICAgICAgICAgICAgKiBhbiBhY3Rpb24sIHJhdGhlciB0aGFuIHVzaW5nIDp2YWx1ZS5zeW5jIHRvIHJldHJlaXZlIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHtudWxsfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbkNoYW5nZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjaGFuZ2VQYXJhbToge30sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgY3JlYXRpbmcgb3B0aW9ucyBmcm9tIHNlYXJjaElucHV0LlxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRhZ2dhYmxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGVuIHRydWUsIG5ld2x5IGNyZWF0ZWQgdGFncyB3aWxsIGJlIGFkZGVkIHRvXG4gICAgICAgICAgICAgKiB0aGUgb3B0aW9ucyBsaXN0LlxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHB1c2hUYWdzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VyIGRlZmluZWQgZnVuY3Rpb24gZm9yIGFkZGluZyBPcHRpb25zXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZU9wdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnNbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1t0aGlzLmxhYmVsXTogbmV3T3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdPcHRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZW4gZmFsc2UsIHVwZGF0aW5nIHRoZSBvcHRpb25zIHdpbGwgbm90IHJlc2V0IHRoZSBzZWxlY3QgdmFsdWVcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdmFsdWUodmFsLCBvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGlvbih2YWwsIG9sZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB2YWwgIT09IG9sZCA/IHRoaXMub25DaGFuZ2UodmFsLCB0aGlzLmNoYW5nZVBhcmFtKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGFnZ2FibGUgJiYgdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbXVsdGlwbGUodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWwgPyBbXSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0KG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0KG9wdGlvbilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiAhdGhpcy5vcHRpb25FeGlzdHMob3B0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5jcmVhdGVPcHRpb24ob3B0aW9uKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wdXNoVGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKG9wdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTZWxlY3Qob3B0aW9uKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZS1zZWxlY3QgYSBnaXZlbiBvcHRpb24uXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZXNlbGVjdChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gLTFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBvcHRpb24gfHwgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsW3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihyZWYpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENhbGxlZCBmcm9tIHRoaXMuc2VsZWN0IGFmdGVyIGVhY2ggc2VsZWN0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25BZnRlclNlbGVjdChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGVhclNlYXJjaE9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZHJvcGRvd24gbWVudS5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge0V2ZW50fSBlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLm9wZW5JbmRpY2F0b3IgfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMuc2VhcmNoIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnRvZ2dsZSB8fCBlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpIC8vIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gYmx1clxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gb3B0aW9uIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSAgb3B0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgIFRydWUgd2hlbiBzZWxlY3RlZCB8fCBGYWxzZSBvdGhlcndpc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvblt0aGlzLmxhYmVsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24gPT09IG9wdGlvblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB0aGVyZSBpcyBhbnkgdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCByZW1vdmUgaXQuXG4gICAgICAgICAgICAgKiBPdGhlcndpc2UsIGJsdXIgdGhlIHNlYXJjaCBpbnB1dCB0byBjbG9zZSB0aGUgZHJvcGRvd24uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25Fc2NhcGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVsZXRlIHRoZSB2YWx1ZSBvbiBEZWxldGUga2V5cHJlc3Mgd2hlbiB0aGVyZSBpcyBub1xuICAgICAgICAgICAgICogdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCAmIHRoZXJlJ3MgdGFncyB0byBkZWxldGVcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXMudmFsdWV9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG1heWJlRGVsZXRlVmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyZWZzLnNlYXJjaC52YWx1ZS5sZW5ndGggJiYgdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUucG9wKCkgOiB0aGlzLnNlbGVjdGlvbiA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERldGVybWluZSBpZiBhbiBvcHRpb24gZXhpc3RzXG4gICAgICAgICAgICAgKiB3aXRoaW4gdGhpcy5vcHRpb25zIGFycmF5LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3B0aW9uRXhpc3RzKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDbGFzc2VzIHRvIGJlIG91dHB1dCBvbiAuZHJvcGRvd25cbiAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZHJvcGRvd25DbGFzc2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHRoaXMub3BlbixcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdGhpcy5zZWFyY2hhYmxlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgcGxhY2Vob2xkZXIgc3RyaW5nIGlmIGl0J3Mgc2V0XG4gICAgICAgICAgICAgKiAmIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBQbGFjZWhvbGRlciB0ZXh0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFbXB0eSAmJiB0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgb3B0aW9ucywgZmlsdGVyZWRcbiAgICAgICAgICAgICAqIGJ5IHRoZSBzZWFyY2ggZWxlbWVudHMgdmFsdWUuIElmIHRhZ2dpbmdcbiAgICAgICAgICAgICAqIHRydWUsIHRoZSBzZWFyY2ggdGV4dCB3aWxsIGJlIHByZXBlbmRlZFxuICAgICAgICAgICAgICogaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bc2VsZi5sYWJlbF0uaW5kZXhPZihzZWxmLnNlYXJjaCkgIT09IC0xXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGggJiYgIXRoaXMub3B0aW9uRXhpc3RzKHRoaXMuc2VhcmNoKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQodGhpcy5zZWFyY2gpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3B0aW9ucyBzZWxlY3RlZC5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlzVmFsdWVFbXB0eSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5zZWxlY3Rpb24pLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBpbiBhcnJheSBmb3JtYXQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFsdWVBc0FycmF5KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGlvbl1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VsZWN0LnZ1ZT80NmE5ODhhNCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aW1nIDpzcmM9XCJkZWZhdWx0SW1hZ2VcIiBhbHQ9XCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIiB3aWR0aD1cIjExMHB4XCIgdi1pZj1cIiFpbWFnZUZpbGVcIj5cbiAgICAgICAgPGltZyA6c3JjPVwiaW1hZ2VGaWxlXCIgYWx0PVwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIgd2lkdGg9XCIxMTBweFwiIHYtaWY9XCJpbWFnZUZpbGVcIj5cblxuICAgICAgICA8YnI+PGJyPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiaW1hZ2UtdXBsb2FkZXJcIiBjbGFzcz1cImlucHV0ZmlsZVwiIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIlxuICAgICAgICAgICAgICAgcmVmPVwiZmlsZWlucHV0XCIvPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2UtdXBsb2FkZXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPjxpIGNsYXNzPVwiZmEgZmEtY2xvdWRcIj48L2k+XG4gICAgICAgICAgICA8c3Bhbj57e2J0blRleHR9fTwvc3Bhbj48L2xhYmVsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cbiAgICAuaW5wdXRmaWxlIHtcbiAgICAgICAgd2lkdGg6IDAuMXB4O1xuICAgICAgICBoZWlnaHQ6IDAuMXB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgIC5pbnB1dGZpbGUgKyBsYWJlbCB7XG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidG5UZXh0OiB7fSxcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXG4gICAgICAgICAgICB3aWR0aDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZToge30sXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VGaWxlID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkZpbGVDaGFuZ2UoZSl7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gZS50YXJnZXQuZmlsZXMgfHwgZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUltYWdlKGZpbGVzWzBdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVJbWFnZShmaWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlLnR5cGUubWF0Y2godGhpcy5hY2NlcHRlZEZpbGVzKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLXVwbG9hZGVyXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC53YXJuaW5nVG9hc3QodGhpcy5lcnJvclZhbGlkYXRpb25Nc2cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHRoaXMuZGVmYXVsdEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm0uaW1hZ2VGaWxlID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRGaWxlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZmlsZWlucHV0LmZpbGVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG5jLWltYWdlLXVwbG9hZC52dWU/NDhiMGZmZjYiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0cHJvcHM6IHtcblx0XHQvKipcblx0XHQgKiBUb2dnbGVzIHRoZSBhZGRpbmcgb2YgYSAnbG9hZGluZycgY2xhc3MgdG8gdGhlIG1haW5cblx0XHQgKiAudi1zZWxlY3Qgd3JhcHBlci4gVXNlZnVsIHRvIGNvbnRyb2wgVUkgc3RhdGUgd2hlblxuXHRcdCAqIHJlc3VsdHMgYXJlIGJlaW5nIHByb2Nlc3NlZCB0aHJvdWdoIEFKQVguXG5cdFx0ICovXG5cdFx0bG9hZGluZzoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEFjY2VwdCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZVxuXHRcdCAqIHJ1biB3aGVuIHRoZSBzZWFyY2ggdGV4dCBjaGFuZ2VzLlxuXHRcdCAqXG5cdFx0ICogbG9hZGluZygpIGFjY2VwdHMgYSBib29sZWFuIHZhbHVlLCBhbmQgY2FuXG5cdFx0ICogYmUgdXNlZCB0byB0b2dnbGUgYSBsb2FkaW5nIGNsYXNzIGZyb21cblx0XHQgKiB0aGUgb25TZWFyY2ggY2FsbGJhY2suXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3NlYXJjaH0gIFN0cmluZyAgICAgICAgICBDdXJyZW50IHNlYXJjaCB0ZXh0XG5cdFx0ICogQHBhcmFtIHtsb2FkaW5nfSBGdW5jdGlvbihib29sKSAgVG9nZ2xlIGxvYWRpbmcgY2xhc3Ncblx0XHQgKi9cblx0XHRvblNlYXJjaDoge1xuXG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlXG5cdFx0ICogaW52b2tpbmcgdGhpcy5vblNlYXJjaCgpLiBVc2VkIHRvIHByZXZlbnRcblx0XHQgKiBzZW5kaW5nIGFuIEFKQVggcmVxdWVzdCB1bnRpbCBpbnB1dCBpcyBjb21wbGV0ZS5cblx0XHQgKi9cblx0XHRkZWJvdW5jZToge1xuXHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0ZGVmYXVsdDogMFxuXHRcdH1cblx0fSxcblxuXHR3YXRjaDoge1xuXHRcdC8qKlxuXHRcdCAqIElmIGEgY2FsbGJhY2sgJiBzZWFyY2ggdGV4dCBoYXMgYmVlbiBwcm92aWRlZCxcblx0XHQgKiBpbnZva2UgdGhlIG9uU2VhcmNoIGNhbGxiYWNrLlxuXHRcdCAqL1xuXHRcdHNlYXJjaCgpIHtcblx0XHRcdGlmICh0aGlzLnNlYXJjaC5sZW5ndGggPiAwICYmIHRoaXMub25TZWFyY2gpIHtcblx0XHRcdFx0dGhpcy5vblNlYXJjaCh0aGlzLnNlYXJjaCwgdGhpcy50b2dnbGVMb2FkaW5nKVxuXHRcdFx0fVxuXHRcdH0sXG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdC8qKlxuXHRcdCAqIFRvZ2dsZSB0aGlzLmxvYWRpbmcuIE9wdGlvbmFsbHkgcGFzcyBhIGJvb2xlYW5cblx0XHQgKiB2YWx1ZS4gSWYgbm8gdmFsdWUgaXMgcHJvdmlkZWQsIHRoaXMubG9hZGluZ1xuXHRcdCAqIHdpbGwgYmUgc2V0IHRvIHRoZSBvcHBvc2l0ZSBvZiBpdCdzIGN1cnJlbnQgdmFsdWUuXG5cdFx0ICogQHBhcmFtIHRvZ2dsZSBCb29sZWFuXG5cdFx0ICogQHJldHVybnMgeyp9XG5cdFx0ICovXG5cdFx0dG9nZ2xlTG9hZGluZyh0b2dnbGUgPSBudWxsKSB7XG5cdFx0XHRpZiAodG9nZ2xlID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmdcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmxvYWRpbmcgPSB0b2dnbGVcblx0XHR9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9hamF4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdhdGNoOiB7XG4gICAgdHlwZUFoZWFkUG9pbnRlcigpIHtcbiAgICAgIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogQWRqdXN0IHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duIGxpc3RcbiAgICAgKiBpZiB0aGUgY3VycmVudCBwb2ludGVyIGlzIG91dHNpZGUgb2YgdGhlXG4gICAgICogb3ZlcmZsb3cgYm91bmRzLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG1heWJlQWRqdXN0U2Nyb2xsKCkge1xuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IHRoaXMucGl4ZWxzVG9Qb2ludGVyVG9wKClcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJCb3R0b20gPSB0aGlzLnBpeGVsc1RvUG9pbnRlckJvdHRvbSgpXG5cbiAgICAgIGlmICggcGl4ZWxzVG9Qb2ludGVyVG9wIDw9IHRoaXMudmlld3BvcnQoKS50b3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8oIHBpeGVsc1RvUG9pbnRlclRvcCApXG4gICAgICB9IGVsc2UgaWYgKHBpeGVsc1RvUG9pbnRlckJvdHRvbSA+PSB0aGlzLnZpZXdwb3J0KCkuYm90dG9tKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKCB0aGlzLnZpZXdwb3J0KCkudG9wICsgdGhpcy5wb2ludGVySGVpZ2h0KCkgKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIHRvcCBvZiB0aGUgZHJvcGRvd25cbiAgICAgKiBsaXN0IHRvIHRoZSB0b3Agb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcGl4ZWxzVG9Qb2ludGVyVG9wKCkge1xuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50eXBlQWhlYWRQb2ludGVyOyBpKyspIHtcbiAgICAgICAgcGl4ZWxzVG9Qb2ludGVyVG9wICs9IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LmNoaWxkcmVuW2ldLm9mZnNldEhlaWdodFxuICAgICAgfVxuICAgICAgcmV0dXJuIHBpeGVsc1RvUG9pbnRlclRvcFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIHRvcCBvZiB0aGUgZHJvcGRvd25cbiAgICAgKiBsaXN0IHRvIHRoZSBib3R0b20gb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBpeGVsc1RvUG9pbnRlckJvdHRvbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBpeGVsc1RvUG9pbnRlclRvcCgpICsgdGhpcy5wb2ludGVySGVpZ2h0KClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9mZnNldEhlaWdodCBvZiB0aGUgY3VycmVudCBwb2ludGVyIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwb2ludGVySGVpZ2h0KCkge1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlblt0aGlzLnR5cGVBaGVhZFBvaW50ZXJdXG4gICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudGx5IHZpZXdhYmxlIHBvcnRpb24gb2YgdGhlIGRyb3Bkb3duTWVudS5cbiAgICAgKiBAcmV0dXJucyB7e3RvcDogKHN0cmluZ3wqfG51bWJlciksIGJvdHRvbTogKn19XG4gICAgICovXG4gICAgdmlld3BvcnQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tOiB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5vZmZzZXRIZWlnaHQgKyB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5zY3JvbGxUb3BcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRoZSBkcm9wZG93bk1lbnUgdG8gYSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCA9IHBvc2l0aW9uXG4gICAgfSxcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZUFoZWFkUG9pbnRlcjogLTFcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XG4gICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPSAwXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IHVwIHRoZSBsaXN0IGJ5XG4gICAgICogc3VidHJhY3RpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHlwZUFoZWFkVXAoKSB7XG4gICAgICBpZiAodGhpcy50eXBlQWhlYWRQb2ludGVyID4gMCkge1xuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXItLVxuICAgICAgICBpZiggdGhpcy5tYXliZUFkanVzdFNjcm9sbCApIHtcbiAgICAgICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IGRvd24gdGhlIGxpc3QgYnlcbiAgICAgKiBhZGRpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHlwZUFoZWFkRG93bigpIHtcbiAgICAgIGlmICh0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPCB0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMudHlwZUFoZWFkUG9pbnRlcisrXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xuICAgICAgICAgIHRoaXMubWF5YmVBZGp1c3RTY3JvbGwoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgb3B0aW9uIGF0IHRoZSBjdXJyZW50IHR5cGVBaGVhZFBvaW50ZXIgcG9zaXRpb24uXG4gICAgICogT3B0aW9uYWxseSBjbGVhciB0aGUgc2VhcmNoIGlucHV0IG9uIHNlbGVjdGlvbi5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHR5cGVBaGVhZFNlbGVjdCgpIHtcbiAgICAgIGlmKCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGgpe1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlYXJjaClcbiAgICAgIH1cblxuICAgICAgaWYoIHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCApIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaW5wdXRmaWxlIHtcXG4gICAgd2lkdGg6IDAuMXB4O1xcbiAgICBoZWlnaHQ6IDAuMXB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG4uaW5wdXRmaWxlICsgbGFiZWwge1xcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/NDhiMGZmZjZcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0EsdUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZG5jLWltYWdlLXVwbG9hZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGltZyA6c3JjPVxcXCJkZWZhdWx0SW1hZ2VcXFwiIGFsdD1cXFwiYXRobGV0ZSBwcm9maWxlIGltYWdlXFxcIiB3aWR0aD1cXFwiMTEwcHhcXFwiIHYtaWY9XFxcIiFpbWFnZUZpbGVcXFwiPlxcbiAgICAgICAgPGltZyA6c3JjPVxcXCJpbWFnZUZpbGVcXFwiIGFsdD1cXFwiYXRobGV0ZSBwcm9maWxlIGltYWdlXFxcIiB3aWR0aD1cXFwiMTEwcHhcXFwiIHYtaWY9XFxcImltYWdlRmlsZVxcXCI+XFxuXFxuICAgICAgICA8YnI+PGJyPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIG5hbWU9XFxcImZpbGVcXFwiIGlkPVxcXCJpbWFnZS11cGxvYWRlclxcXCIgY2xhc3M9XFxcImlucHV0ZmlsZVxcXCIgQGNoYW5nZT1cXFwib25GaWxlQ2hhbmdlXFxcIlxcbiAgICAgICAgICAgICAgIHJlZj1cXFwiZmlsZWlucHV0XFxcIi8+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJpbWFnZS11cGxvYWRlclxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNsb3VkXFxcIj48L2k+XFxuICAgICAgICAgICAgPHNwYW4+e3tidG5UZXh0fX08L3NwYW4+PC9sYWJlbD5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG48c3R5bGU+XFxuICAgIC5pbnB1dGZpbGUge1xcbiAgICAgICAgd2lkdGg6IDAuMXB4O1xcbiAgICAgICAgaGVpZ2h0OiAwLjFweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgIH1cXG5cXG4gICAgLmlucHV0ZmlsZSArIGxhYmVsIHtcXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9iYWJlbFxcXCI+XFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICB2YWx1ZToge30sXFxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdpbWFnZS8qJ1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgYnRuVGV4dDoge30sXFxuICAgICAgICAgICAgZXJyb3JWYWxpZGF0aW9uTXNnOiB7fSxcXG4gICAgICAgICAgICB3aWR0aDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDExMFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaW1hZ2U6IHt9LFxcbiAgICAgICAgICAgIGRlZmF1bHRJbWFnZToge31cXG4gICAgICAgIH0sXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIGltYWdlOiBmdW5jdGlvbiAodmFsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VGaWxlID0gdmFsO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgaW1hZ2VGaWxlOiBudWxsXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBvbkZpbGVDaGFuZ2UoZSl7XFxuICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzIHx8IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aClcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJbWFnZShmaWxlc1swXSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBjcmVhdGVJbWFnZShmaWxlKSB7XFxuICAgICAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKHRoaXMuYWNjZXB0ZWRGaWxlcykpIHtcXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJpbWFnZS11cGxvYWRlclxcXCIpLnZhbHVlID0gXFxcIlxcXCI7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290Lndhcm5pbmdUb2FzdCh0aGlzLmVycm9yVmFsaWRhdGlvbk1zZyk7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHRoaXMuZGVmYXVsdEltYWdlXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XFxuICAgICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XFxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdm0uaW1hZ2VGaWxlID0gZS50YXJnZXQucmVzdWx0O1xcbiAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZ2V0RmlsZSgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5maWxlaW5wdXQuZmlsZXNbMF07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YWU5NDcwYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA3IDggOSAxMCAxMiAxMyAxNCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDZweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbn1cXG4udi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4udi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuNSk7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XFxuICAgIGJvdHRvbTogMXB4O1xcbn1cXG4udi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxufVxcbi52LXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4udi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4udi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xcbiAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG59XFxuLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIC41ZW07XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNsZWFyOiBub25lO1xcbn1cXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1zZWxlY3QgbGkgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtc2VsZWN0IC5hY3RpdmUgYSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcXG4udi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcbi52LXNlbGVjdCAuc3Bpbm5lciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDVweDtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG59XFxuLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4udi1zZWxlY3QgLnNwaW5uZXIsXFxuLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4wJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4wJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT80NmE5ODhhNFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUNBLDhFQUFBO1lBQUEsc0VBQUE7SUFDQSxXQUFBO0lBQ0EsZ0NBQUE7SUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTtJQUNBLG1DQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUNBLDhFQUFBO1lBQUEsc0VBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSx3Q0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtDQUNBO0FBRUE7SUFDQSxvQkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7Q0FDQTtBQUVBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBOztJQUVBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxpQ0FBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBOztJQUVBLG9CQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtJQUNBLGtEQUFBO0lBQ0EsOENBQUE7SUFDQSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsdURBQUE7WUFBQSwrQ0FBQTtJQUNBLGdDQUFBO0lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7O0lBRUEsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7QUFDQTtRQUNBLGdDQUFBO2dCQUFBLHdCQUFBO0NBQ0E7QUFDQTtRQUNBLGtDQUFBO2dCQUFBLDBCQUFBO0NBQ0E7Q0FDQTtBQUVBO0FBQ0E7UUFDQSxnQ0FBQTtnQkFBQSx3QkFBQTtDQUNBO0FBQ0E7UUFDQSxrQ0FBQTtnQkFBQSwwQkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcInNlbGVjdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHN0eWxlPlxcbiAgICAudi1zZWxlY3Qge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiA2cHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDAuMjVlbSAwLjI1ZW0gMCAwO1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMTBweDtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XFxuICAgICAgICBib3R0b206IDFweDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XFxuICAgICAgICBjb2xvcjogIzMzMztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XFxuICAgICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XFxuICAgICAgICB3aWR0aDogMTBlbTtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICBjbGVhcjogbm9uZTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgbGkgYSB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0IC5hY3RpdmUgYSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIC4xKTtcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXFxuICAgIC52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcbiAgICB9XFxuXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1cHg7XFxuICAgICAgICByaWdodDogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgYm9yZGVyLXRvcDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgICAgICBib3JkZXItbGVmdDogLjllbSBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC40NSk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIH1cXG5cXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICB3aWR0aDogNWVtO1xcbiAgICAgICAgaGVpZ2h0OiA1ZW07XFxuICAgIH1cXG5cXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4gICAgICAgIDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgICAgIDEwMCUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICB9XFxuICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zdHlsZT5cXG5cXG48dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIHYtc2VsZWN0XFxcIiA6Y2xhc3M9XFxcImRyb3Bkb3duQ2xhc3Nlc1xcXCI+XFxuICAgICAgICA8ZGl2IHJlZj1cXFwidG9nZ2xlXFxcIiBAbW91c2Vkb3duLnByZXZlbnQ9XFxcInRvZ2dsZURyb3Bkb3duXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdi1pZj1cXFwiIXNlYXJjaGFibGUgJiYgaXNWYWx1ZUVtcHR5XFxcIj5cXG4gICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX1cXG4gICAgICAgIDwvc3Bhbj5cXG5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2VsZWN0ZWQtdGFnXFxcIiB2LWZvcj1cXFwiKG9wdGlvbixpbmRleCkgaW4gdmFsdWVBc0FycmF5XFxcIiB2LWJpbmQ6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cXG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCJtdWx0aXBsZVxcXCIgQGNsaWNrPVxcXCJzZWxlY3Qob3B0aW9uKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvc3Bhbj5cXG5cXG4gICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmRlYm91bmNlPVxcXCJkZWJvdW5jZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwic2VhcmNoYWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRlbGV0ZT1cXFwibWF5YmVEZWxldGVWYWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lc2M9XFxcIm9uRXNjYXBlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24udXAucHJldmVudD1cXFwidHlwZUFoZWFkVXBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kb3duLnByZXZlbnQ9XFxcInR5cGVBaGVhZERvd25cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXIucHJldmVudD1cXFwidHlwZUFoZWFkU2VsZWN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XFxcIm9wZW4gPSBmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cXFwib3BlbiA9IHRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVxcXCJzZWFyY2hQbGFjZWhvbGRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwieyB3aWR0aDogaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nIH1cXFwiXFxuICAgICAgICAgICAgPlxcblxcbiAgICAgICAgICAgIDxpIHJlZj1cXFwib3BlbkluZGljYXRvclxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIiBjbGFzcz1cXFwib3Blbi1pbmRpY2F0b3JcXFwiPjwvaT5cXG5cXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJzcGlubmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3Bpbm5lclxcXCIgdi1zaG93PVxcXCJsb2FkaW5nXFxcIj5Mb2FkaW5nLi4uPC9kaXY+XFxuICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8dWwgcmVmPVxcXCJkcm9wZG93bk1lbnVcXFwiIHYtc2hvdz1cXFwib3BlblxcXCIgOnRyYW5zaXRpb249XFxcInRyYW5zaXRpb25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIlxcbiAgICAgICAgICAgIDpzdHlsZT1cXFwieyAnbWF4LWhlaWdodCc6IG1heEhlaWdodCB9XFxcIj5cXG4gICAgICAgICAgICA8bGkgdi1mb3I9XFxcIihvcHRpb24saW5kZXgpIGluIGZpbHRlcmVkT3B0aW9uc1xcXCIgdi1iaW5kOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyBhY3RpdmU6IGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gdHlwZUFoZWFkUG9pbnRlciB9XFxcIlxcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVxcXCJ0eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBAbW91c2Vkb3duLnByZXZlbnQ9XFxcInNlbGVjdChvcHRpb24pXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XFxcImZhZGVcXFwiIHYtaWY9XFxcIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXFxcIiBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cXFwiZmFkZVxcXCIgdi1pZj1cXFwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcIm5vLW9wdGlvbnNcXFwiPlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLjwvc2xvdD5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcbiAgICBpbXBvcnQgcG9pbnRlclNjcm9sbCBmcm9tICdiYXNlL21peGlucy9wb2ludGVyU2Nyb2xsJ1xcbiAgICBpbXBvcnQgdHlwZUFoZWFkUG9pbnRlciBmcm9tICdiYXNlL21peGlucy90eXBlQWhlYWRQb2ludGVyJ1xcbiAgICBpbXBvcnQgYWpheCBmcm9tICdiYXNlL21peGlucy9hamF4J1xcblxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxuICAgICAgICBtaXhpbnM6IFtwb2ludGVyU2Nyb2xsLCB0eXBlQWhlYWRQb2ludGVyLCBhamF4XSxcXG5cXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQ29udGFpbnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB2YWx1ZS4gVmVyeSBzaW1pbGFyIHRvIGFcXG4gICAgICAgICAgICAgKiBgdmFsdWVgIGF0dHJpYnV0ZSBvbiBhbiA8aW5wdXQ+LiBJbiBtb3N0IGNhc2VzLCB5b3UnbGwgd2FudFxcbiAgICAgICAgICAgICAqIHRvIHNldCB0aGlzIGFzIGEgdHdvLXdheSBiaW5kaW5nLCB1c2luZyA6dmFsdWUuc3luYy4gSG93ZXZlcixcXG4gICAgICAgICAgICAgKiB0aGlzIHdpbGwgbm90IHdvcmsgd2l0aCBWdWV4LCBpbiB3aGljaCBjYXNlIHlvdSdsbCBuZWVkIHRvIHVzZVxcbiAgICAgICAgICAgICAqIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBwcm9wZXJ0eS5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fHxTdHJpbmd8fG51bGx9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdmFsdWU6IHtcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogQW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHRvIGJlIHVzZWQgYXMgZHJvcGRvd24gY2hvaWNlcy5cXG4gICAgICAgICAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMsIHZ1ZS1zZWxlY3Qgd2lsbCBsb29rIGZvclxcbiAgICAgICAgICAgICAqIGEgYGxhYmVsYCBrZXkgKGV4LiBbe2xhYmVsOiAnVGhpcyBpcyBGb28nLCB2YWx1ZTogJ2Zvbyd9XSkuIEFcXG4gICAgICAgICAgICAgKiBjdXN0b20gbGFiZWwga2V5IGNhbiBiZSBzZXQgd2l0aCB0aGUgYGxhYmVsYCBwcm9wLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgb3B0aW9uczoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogU2V0cyB0aGUgbWF4LWhlaWdodCBwcm9wZXJ0eSBvbiB0aGUgZHJvcGRvd24gbGlzdC5cXG4gICAgICAgICAgICAgKiBAZGVwcmVjYXRlZFxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzQwMHB4J1xcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgZmlsdGVyaW5nIHRoZSBvcHRpb25zLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNlYXJjaGFibGU6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYG11bHRpcGxlYCBhdHRyaWJ1dGUgb24gYSBgPHNlbGVjdD5gIGlucHV0LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgbXVsdGlwbGU6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIG9uIGFuIGA8aW5wdXQ+YC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFNldHMgYSBWdWUgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiB0aGUgYC5kcm9wZG93bi1tZW51YC4gdnVlLXNlbGVjdFxcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGluY2x1ZGUgQ1NTIGZvciB0cmFuc2l0aW9ucywgeW91J2xsIG5lZWQgdG8gYWRkIHRoZW0geW91cnNlbGYuXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2V4cGFuZCdcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgY2xlYXJpbmcgdGhlIHNlYXJjaCB0ZXh0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogVGVsbHMgdnVlLXNlbGVjdCB3aGF0IGtleSB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIG9wdGlvblxcbiAgICAgICAgICAgICAqIGxhYmVscyB3aGVuIGVhY2ggYG9wdGlvbmAgaXMgYW4gb2JqZWN0LlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgbGFiZWw6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGFiZWwnXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDYWxsYmFjayB0byBnZW5lcmF0ZSB0aGUgbGFiZWwgdGV4dC4gSWYge29wdGlvbn1cXG4gICAgICAgICAgICAgKiBpcyBhbiBvYmplY3QsIHJldHVybnMgb3B0aW9uW3RoaXMubGFiZWxdIGJ5IGRlZmF1bHQuXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgJiYgb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bdGhpcy5sYWJlbF1cXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBlYWNoIHRpbWUgdGhlIHNlbGVjdGVkXFxuICAgICAgICAgICAgICogdmFsdWUocykgY2hhbmdlLiBXaGVuIGludGVncmF0aW5nIHdpdGggVnVleCwgdXNlIHRoaXMgY2FsbGJhY2sgdG8gdHJpZ2dlclxcbiAgICAgICAgICAgICAqIGFuIGFjdGlvbiwgcmF0aGVyIHRoYW4gdXNpbmcgOnZhbHVlLnN5bmMgdG8gcmV0cmVpdmUgdGhlIHNlbGVjdGVkIHZhbHVlLlxcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCB7bnVsbH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvbkNoYW5nZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgY2hhbmdlUGFyYW06IHt9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGNyZWF0aW5nIG9wdGlvbnMgZnJvbSBzZWFyY2hJbnB1dC5cXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB0YWdnYWJsZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogV2hlbiB0cnVlLCBuZXdseSBjcmVhdGVkIHRhZ3Mgd2lsbCBiZSBhZGRlZCB0b1xcbiAgICAgICAgICAgICAqIHRoZSBvcHRpb25zIGxpc3QuXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgcHVzaFRhZ3M6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFVzZXIgZGVmaW5lZCBmdW5jdGlvbiBmb3IgYWRkaW5nIE9wdGlvbnNcXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAobmV3T3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ29iamVjdCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1t0aGlzLmxhYmVsXTogbmV3T3B0aW9ufVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld09wdGlvblxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBXaGVuIGZhbHNlLCB1cGRhdGluZyB0aGUgb3B0aW9ucyB3aWxsIG5vdCByZXNldCB0aGUgc2VsZWN0IHZhbHVlXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgcmVzZXRPbk9wdGlvbnNDaGFuZ2U6IHtcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGRhdGEoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgc2VhcmNoOiAnJyxcXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIHZhbHVlKHZhbCwgb2xkKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBzZWxlY3Rpb24odmFsLCBvbGQpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHZhbCAhPT0gb2xkID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvcHRpb25zKCkge1xcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGFnZ2FibGUgJiYgdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG11bHRpcGxlKHZhbCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbCA/IFtdIDogbnVsbFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBtZXRob2RzOiB7XFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogU2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIHNlbGVjdChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0KG9wdGlvbilcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5jcmVhdGVPcHRpb24ob3B0aW9uKVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hUYWdzKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbilcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBvcHRpb25cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTZWxlY3Qob3B0aW9uKVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogRGUtc2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGRlc2VsZWN0KG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IC0xXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5mb3JFYWNoKCh2YWwpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBvcHRpb24gfHwgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsW3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0gdmFsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0aW9uLmluZGV4T2YocmVmKTtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSlcXG5cXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDYWxsZWQgZnJvbSB0aGlzLnNlbGVjdCBhZnRlciBlYWNoIHNlbGVjdGlvbi5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW5cXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgICAgLyoqXFxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge0V2ZW50fSBlXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihlKSB7XFxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5vcGVuSW5kaWNhdG9yIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnNlYXJjaCB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy50b2dnbGUgfHwgZS50YXJnZXQgPT09IHRoaXMuJGVsKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpIC8vIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gYmx1clxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guZm9jdXMoKVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gb3B0aW9uIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gIG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgVHJ1ZSB3aGVuIHNlbGVjdGVkIHx8IEZhbHNlIG90aGVyd2lzZVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKG9wdCA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA9PT0gb3B0aW9uXFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBJZiB0aGVyZSBpcyBhbnkgdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCByZW1vdmUgaXQuXFxuICAgICAgICAgICAgICogT3RoZXJ3aXNlLCBibHVyIHRoZSBzZWFyY2ggaW5wdXQgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLlxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIG9uRXNjYXBlKCkge1xcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIERlbGV0ZSB0aGUgdmFsdWUgb24gRGVsZXRlIGtleXByZXNzIHdoZW4gdGhlcmUgaXMgbm9cXG4gICAgICAgICAgICAgKiB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsICYgdGhlcmUncyB0YWdzIHRvIGRlbGV0ZVxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXMudmFsdWV9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyZWZzLnNlYXJjaC52YWx1ZS5sZW5ndGggJiYgdGhpcy52YWx1ZSkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLnZhbHVlLnBvcCgpIDogdGhpcy5zZWxlY3Rpb24gPSBudWxsXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIERldGVybWluZSBpZiBhbiBvcHRpb24gZXhpc3RzXFxuICAgICAgICAgICAgICogd2l0aGluIHRoaXMub3B0aW9ucyBhcnJheS5cXG4gICAgICAgICAgICAgKlxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgb3B0aW9uRXhpc3RzKG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2VcXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0pXFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBDbGFzc2VzIHRvIGJlIG91dHB1dCBvbiAuZHJvcGRvd25cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgZHJvcGRvd25DbGFzc2VzKCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdGhpcy5zZWFyY2hhYmxlLFxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdGhpcy5sb2FkaW5nXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgcGxhY2Vob2xkZXIgc3RyaW5nIGlmIGl0J3Mgc2V0XFxuICAgICAgICAgICAgICogJiB0aGVyZSBpcyBubyB2YWx1ZSBzZWxlY3RlZC5cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFBsYWNlaG9sZGVyIHRleHRcXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcigpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAvKipcXG4gICAgICAgICAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBvcHRpb25zLCBmaWx0ZXJlZFxcbiAgICAgICAgICAgICAqIGJ5IHRoZSBzZWFyY2ggZWxlbWVudHMgdmFsdWUuIElmIHRhZ2dpbmdcXG4gICAgICAgICAgICAgKiB0cnVlLCB0aGUgc2VhcmNoIHRleHQgd2lsbCBiZSBwcmVwZW5kZWRcXG4gICAgICAgICAgICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuXFxuICAgICAgICAgICAgICpcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHthcnJheX1cXG4gICAgICAgICAgICAgKi9cXG4gICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XFxuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bc2VsZi5sYWJlbF0uaW5kZXhPZihzZWxmLnNlYXJjaCkgIT09IC0xXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25FeGlzdHModGhpcy5zZWFyY2gpKSB7XFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQodGhpcy5zZWFyY2gpXFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3B0aW9ucyBzZWxlY3RlZC5cXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxcbiAgICAgICAgICAgICAqL1xcbiAgICAgICAgICAgIGlzVmFsdWVFbXB0eSgpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5zZWxlY3Rpb24pLmxlbmd0aFxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlbGVjdGlvbi5sZW5ndGhcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgICAgICB9LFxcblxcbiAgICAgICAgICAgIC8qKlxcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBpbiBhcnJheSBmb3JtYXQuXFxuICAgICAgICAgICAgICogQHJldHVybiB7QXJyYXl9XFxuICAgICAgICAgICAgICovXFxuICAgICAgICAgICAgdmFsdWVBc0FycmF5KCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uXFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24pIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5zZWxlY3Rpb25dXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDcgOCA5IDEwIDEyIDEzIDE0IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03YWU5NDcwYyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRuYy1pbWFnZS11cGxvYWQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdhZTk0NzBjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2FlOTQ3MGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDcgOCA5IDEwIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbKCFfdm0uaW1hZ2VGaWxlKSA/IF9jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5kZWZhdWx0SW1hZ2UsXG4gICAgICBcImFsdFwiOiBcImF0aGxldGUgcHJvZmlsZSBpbWFnZVwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjExMHB4XCJcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uaW1hZ2VGaWxlKSA/IF9jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS5pbWFnZUZpbGUsXG4gICAgICBcImFsdFwiOiBcImF0aGxldGUgcHJvZmlsZSBpbWFnZVwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjExMHB4XCJcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdicicpLCBfYygnYnInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHJlZjogXCJmaWxlaW5wdXRcIixcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dGZpbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiZmlsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmlsZVwiLFxuICAgICAgXCJpZFwiOiBcImltYWdlLXVwbG9hZGVyXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0ub25GaWxlQ2hhbmdlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImltYWdlLXVwbG9hZGVyXCJcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jbG91ZFwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKF92bS5idG5UZXh0KSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2FlOTQ3MGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNyA4IDkgMTAgMTIgMTMgMTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93biB2LXNlbGVjdFwiLFxuICAgIGNsYXNzOiBfdm0uZHJvcGRvd25DbGFzc2VzXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHJlZjogXCJ0b2dnbGVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlZG93blwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50b2dnbGVEcm9wZG93bigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKCFfdm0uc2VhcmNoYWJsZSAmJiBfdm0uaXNWYWx1ZUVtcHR5KSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0ucGxhY2Vob2xkZXIpICsgXCJcXG4gICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0udmFsdWVBc0FycmF5KSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnc3BhbicsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC10YWdcIlxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgIFwiKSwgKF92bS5tdWx0aXBsZSkgPyBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2VsZWN0KG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiw5dcIildKV0pIDogX3ZtLl9lKCldKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaCksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoYWJsZSksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaGFibGVcIlxuICAgIH1dLFxuICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0uaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGVib3VuY2VcIjogX3ZtLmRlYm91bmNlLFxuICAgICAgXCJ0eXBlXCI6IFwic2VhcmNoXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS5zZWFyY2hQbGFjZWhvbGRlclxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zZWFyY2gpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXlkb3duXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkZWxldGVcIiwgWzgsIDQ2XSkpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5tYXliZURlbGV0ZVZhbHVlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInVwXCIsIDM4KSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRVcCgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWREb3duKCRldmVudClcbiAgICAgIH1dLFxuICAgICAgXCJrZXl1cFwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZXNjXCIsIDI3KSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm9uRXNjYXBlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRTZWxlY3QoJGV2ZW50KVxuICAgICAgfV0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBcImZvY3VzXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbiA9IHRydWVcbiAgICAgIH0sXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgcmVmOiBcIm9wZW5JbmRpY2F0b3JcIixcbiAgICBzdGF0aWNDbGFzczogXCJvcGVuLWluZGljYXRvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJwcmVzZW50YXRpb25cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fdChcInNwaW5uZXJcIiwgW19jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvYWRpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ub3BlbiksXG4gICAgICBleHByZXNzaW9uOiBcIm9wZW5cIlxuICAgIH1dLFxuICAgIHJlZjogXCJkcm9wZG93bk1lbnVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICAnbWF4LWhlaWdodCc6IF92bS5tYXhIZWlnaHRcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IF92bS50cmFuc2l0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl9sKChfdm0uZmlsdGVyZWRPcHRpb25zKSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnbGknLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgYWN0aXZlOiBfdm0uaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSBfdm0udHlwZUFoZWFkUG9pbnRlclxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2VvdmVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS50eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5zZWxlY3Qob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV0pXSlcbiAgfSksIF92bS5fdihcIiBcIiksICghX3ZtLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgpID8gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSA/IF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogXCJmYWRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJuby1vcHRpb25zXCIsIFtfdm0uX3YoXCJTb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy5cIildKV0sIDIpIDogX3ZtLl9lKCldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThkMzUxMDM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNyA4IDkgMTAgMTIgMTMgMTQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1MjA0NTE3OFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2FlOTQ3MGMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YWU5NDcwYyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdhZTk0NzBjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDcgOCA5IDEwIDEyIDEzIDE0IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiNTljYjlkMFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOGQzNTEwMzQhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LThkMzUxMDM0IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04ZDM1MTAzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDcgOCA5IDEwIDEyIDEzIDE0IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIFwiZW5cIjoge1xuICAgICAgICBcImF0aGxldGVzXCI6IHtcbiAgICAgICAgICAgIFwibVwiOiBcIk1hbGVcIixcbiAgICAgICAgICAgIFwid1wiOiBcIkZlbWFsZVwiLFxuICAgICAgICAgICAgXCJuXCI6IFwiTWl4dG9cIixcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgQXRobGV0ZSB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgQXRobGV0ZSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIlRoZSBBdGhsZXRlIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgXCJwcm9maWxlX3BpY3R1cmVfZGVsZXRlZFwiOiBcIlRoZSBwcm9maWxlIHBpY3R1cmUgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIlRoZSBBdGhsZXRlIGRvZXNuJ3QgZXhpc3RcIixcbiAgICAgICAgICAgIFwiZmlyc3RfbmFtZVwiOiBcIkZpcnN0IE5hbWVcIixcbiAgICAgICAgICAgIFwibGFzdF9uYW1lXCI6IFwiTGFzdCBOYW1lXCIsXG4gICAgICAgICAgICBcImNvZGVcIjogXCJDb2RlXCIsXG4gICAgICAgICAgICBcImNvdW50cnlcIjogXCJDb3VudHJ5XCIsXG4gICAgICAgICAgICBcImNvdW50cmllc1wiOiBcIkNvdW50cmllc1wiLFxuICAgICAgICAgICAgXCJzcG9ydFwiOiBcIlNwb3J0XCIsXG4gICAgICAgICAgICBcInNwZWNpYWx0eVwiOiBcIlNwZWNpYWx0eVwiLFxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNhdGVnb3J5XCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInNlbGVjdF9vcHRpb25cIjogXCJTZWxlY3QgYW4gb3B0aW9uXCIsXG4gICAgICAgICAgICBcInVwbG9hZF9pbWFnZVwiOiBcIlVwbG9hZCBpbWFnZVwiLFxuICAgICAgICAgICAgXCJyYW5raW5nXCI6IFwiUmFua2luZ1wiLFxuICAgICAgICAgICAgXCJoZWlnaHRcIjogXCJIZWlnaHRcIixcbiAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiV2VpZ2h0XCIsXG4gICAgICAgICAgICBcImZlZGVyYXRpb25fY29kZVwiOiBcIkZlZGVyYXRpb24gQ29kZVwiLFxuICAgICAgICAgICAgXCJuYXRpb25hbF9jb2RlXCI6IFwiTmF0aW9uYWwgQ29kZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJVcGRhdGVcIixcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTmV3IEF0aGxldGVcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX21lc3NhZ2VcIjogXCJBcmUgeW91IHN1cmU/IHRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmVcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX2F0aGxldGVcIjogXCJEZWxldGUgQXRobGV0ZVwiLFxuICAgICAgICAgICAgXCJhdGhsZXRlX2luZm9cIjogXCJBdGhsZXRlIEluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBcImdvbGRcIjogXCJHb2xkXCIsXG4gICAgICAgICAgICBcInNpbHZlclwiOiBcIlNpbHZlclwiLFxuICAgICAgICAgICAgXCJicm9uemVcIjogXCJCcm9uemVcIixcbiAgICAgICAgICAgIFwiY2x1YlwiOiBcIkNsdWJcIixcbiAgICAgICAgICAgIFwiYXRobGV0ZVwiOiBcIkF0aGxldGVcIixcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiR2VuZGVyXCIsXG4gICAgICAgICAgICBcImV2ZW50c1wiOiBcIkV2ZW50c1wiLFxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBcIjogXCJDaGFtcGlvbnNoaXBcIixcbiAgICAgICAgICAgIFwiYXRobGV0ZXNcIjogXCJBdGhsZXRlc1wiLFxuICAgICAgICAgICAgXCJmaWx0ZXJfYnlfZXZlbnRzXCI6IFwiRmlsdGVyIEJ5IEV2ZW50XCIsXG4gICAgICAgICAgICBcImZpbHRlcl9ieVwiOiBcIkZpbHRlciBCeVwiLFxuICAgICAgICAgICAgXCJjbGFzc2lmaWNhdGlvblwiOiBcIkNsYXNzaWZpY2F0aW9uXCIsXG4gICAgICAgICAgICBcIm5vX3Jlc3VsdHNcIjogXCJUaGVyZSBhcmUgbm8gcHVibGlzaGVkIHJlc3VsdHNcIixcbiAgICAgICAgICAgIFwibG9hZGluZ1wiOiBcIkxvYWRpbmdcIixcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICBcInNlYXJjaF9hdGhsZXRlXCI6IFwiU2VhcmNoIEF0aGxldGVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBcImVzXCI6IHtcbiAgICAgICAgXCJhdGhsZXRlc1wiOiB7XG4gICAgICAgICAgICBcIm1cIjogXCJNYXNjdWxpbm9cIixcbiAgICAgICAgICAgIFwid1wiOiBcIkZlbWVuaW5vXCIsXG4gICAgICAgICAgICBcIm5cIjogXCJNaXh0b1wiLFxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIGF0bGV0YSBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIGF0bGV0YSBmdWUgYWN0dWFsaXphZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJFbCBhdGxldGEgZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwicHJvZmlsZV9waWN0dXJlX2RlbGV0ZWRcIjogXCJMYSBpbWFnZW4gZGUgcGVyZmlsIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIGF0bGV0YSBubyBleGlzdGVcIixcbiAgICAgICAgICAgIFwiZmlyc3RfbmFtZVwiOiBcIk5vbWJyZVwiLFxuICAgICAgICAgICAgXCJsYXN0X25hbWVcIjogXCJBcGVsbGlkb1wiLFxuICAgICAgICAgICAgXCJjb2RlXCI6IFwiQ8OzZGlnb1wiLFxuICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFwiUGHDrXNcIixcbiAgICAgICAgICAgIFwiY291bnRyaWVzXCI6IFwiUGFpc2VzXCIsXG4gICAgICAgICAgICBcInNwb3J0XCI6IFwiRGVwb3J0ZVwiLFxuICAgICAgICAgICAgXCJzcGVjaWFsdHlcIjogXCJFc3BlY2lhbGlkYWRcIixcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJDYXRlZ29yw61hXCIsXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY2Npb25lc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWNjaW9uZSB1bmEgb3BjacOzblwiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uc1wiOiBcIlNlbGVjY2lvbmUgdW5hIG9wY2nDs24gbyBtw6FzIG9wY2lvbmVzXCIsXG4gICAgICAgICAgICBcInVwbG9hZF9pbWFnZVwiOiBcIlN1YmlyIEltYWdlblwiLFxuICAgICAgICAgICAgXCJyYW5raW5nXCI6IFwiUmFua2luZ1wiLFxuICAgICAgICAgICAgXCJoZWlnaHRcIjogXCJBbHR1cmFcIixcbiAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiUGVzb1wiLFxuICAgICAgICAgICAgXCJmZWRlcmF0aW9uX2NvZGVcIjogXCJDw7NkaWdvIGRlIEZlZGVyYWNpw7NuXCIsXG4gICAgICAgICAgICBcIm5hdGlvbmFsX2NvZGVcIjogXCJDw7NkaWdvIE5hY2lvbmFsXCIsXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcIkFjdHVhbGl6YXJcIixcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTnVldm8gQXRsZXRhXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxuICAgICAgICAgICAgXCJkZWxldGVfYXRobGV0ZVwiOiBcIkVsaW1pbmFyIEF0bGV0YVwiLFxuICAgICAgICAgICAgXCJhdGhsZXRlX2luZm9cIjogXCJJbmZvcm1hY2nDs24gZGVsIEF0bGV0YVwiLFxuICAgICAgICAgICAgXCJnb2xkXCI6IFwiT3JvXCIsXG4gICAgICAgICAgICBcInNpbHZlclwiOiBcIlBsYXRhXCIsXG4gICAgICAgICAgICBcImJyb256ZVwiOiBcIkJyb25jZVwiLFxuICAgICAgICAgICAgXCJjbHViXCI6IFwiQ2x1YlwiLFxuICAgICAgICAgICAgXCJhdGhsZXRlXCI6IFwiQXRsZXRhXCIsXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIkdlbmVyb1wiLFxuICAgICAgICAgICAgXCJldmVudHNcIjogXCJFdmVudG9zXCIsXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcFwiOiBcIkNhbXBlb25hdG9zXCIsXG4gICAgICAgICAgICBcImF0aGxldGVzXCI6IFwiQXRsZXRhc1wiLFxuICAgICAgICAgICAgXCJmaWx0ZXJfYnlfZXZlbnRzXCI6IFwiRmlsdHJhciBQb3IgRXZlbnRvXCIsXG4gICAgICAgICAgICBcImZpbHRlcl9ieVwiOiBcIkZpbHRyYXIgUG9yXCIsXG4gICAgICAgICAgICBcImNsYXNzaWZpY2F0aW9uXCI6IFwiQ2xhc2lmaWNhY2nDs25cIixcbiAgICAgICAgICAgIFwibm9fcmVzdWx0c1wiOiBcIkHDum4gbm8gaGF5IHJlc3VsdGFkb3MgcHVibGljYWRvc1wiLFxuICAgICAgICAgICAgXCJsb2FkaW5nXCI6IFwiQ2FyZ2FuZG9cIixcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWNjaW9uYXJcIixcbiAgICAgICAgICAgIFwic2VhcmNoX2F0aGxldGVcIjogXCJCdXNjYXIgQXRsZXRhXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9hdGhsZXRlcy9hdGhsZXRlcy5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2hvdyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL2F1dGgvdXNlcj9pbmNsdWRlPWF0aGxldGUuc3BvcnQsYXRobGV0ZS5zcGVjaWFsdHksYXRobGV0ZS5jb3VudHJ5LGF0aGxldGUuY2F0ZWdvcnksYXRobGV0ZS5nZW5kZXInKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIHVwZGF0ZShpZCwgdXNlciwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL3VzZXInLCB1c2VyLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG4gICAgY3JlYXRlKHVzZXIsc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9hY2NlcHQnLHVzZXIpXG4gICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxuICAgIHNlbmQodXNlcixzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL3Bhc3N3b3JkL2VtYWlsJyx1c2VyKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU2VydmljZS5qcyIsIjwhLS1zdXBwcmVzcyBBTEwgLS0+XG48dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGFkbWluLWhlYWRlciA6dGl0bGU9XCIkdCgnYWRtaW4ubXlfcHJvZmlsZScpXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L2FkbWluLWhlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBpZD1cImF0aGxldGUtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPnt7JHQoJ2FkbWluLm15X3Byb2ZpbGUnKX19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIC8uYm94LWhlYWRlciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZmlyc3RfbmFtZScpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuZmlyc3RfbmFtZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLmZpcnN0X25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdhdGhsZXRlcy5maXJzdF9uYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZmlyc3RfbmFtZScpXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZmlyc3RfbmFtZScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2xhc3RfbmFtZScpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy5sYXN0X25hbWUnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbCBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2xhc3RfbmFtZScpXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnbGFzdF9uYW1lJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW1haWwnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy5lbWFpbCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLmVtYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkfGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdhdGhsZXRlcy5lbWFpbCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2VtYWlsJylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdlbWFpbCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkbmMtaW1hZ2UtdXBsb2FkZXIgOmJ0bi10ZXh0PVwiJHQoJ2F0aGxldGVzLnVwbG9hZF9pbWFnZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci12YWxpZGF0aW9uLW1zZz1cIiR0KCd2YWxpZGF0aW9uLmltYWdlJyx7YXR0cmlidXRlOiR0KCdhdGhsZXRlcy51cGxvYWRfaW1hZ2UnKX0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbWFnZT1cInVzZXIuaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdC1pbWFnZT1cIi9pbWFnZXMvbWlzc2luZy9hdGhsZXRlL21pc3NpbmcucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInVwbG9hZGVyXCI+PC9kbmMtaW1hZ2UtdXBsb2FkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmZWRlcmF0aW9uX2NvZGVcIiBkYXRhLXZ2LWVycm9yPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhdGhsZXRlcy5mZWRlcmF0aW9uX2NvZGUnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jcmVkaXQtY2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZmVkZXJhdGlvbl9jb2RlXCIgbmFtZT1cImZlZGVyYXRpb25fY29kZVwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuZmVkZXJhdGlvbl9jb2RlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUuZmVkZXJhdGlvbl9jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYXRpb25hbF9jb2RlXCIgZGF0YS12di1lcnJvcj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYXRobGV0ZXMubmF0aW9uYWxfY29kZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNyZWRpdC1jYXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYXRpb25hbF9jb2RlXCIgbmFtZT1cIm5hdGlvbmFsX2NvZGVcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLm5hdGlvbmFsX2NvZGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYXRobGV0ZS5uYXRpb25hbF9jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdhdGhsZXRlc3BvcnQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhdGhsZXRlc3BvcnRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuc3BvcnQnKX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDp2YWx1ZT1cInVzZXIuYXRobGV0ZS5zcG9ydFwiIGxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwic3BvcnRDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdhdGhsZXRlcy5zZWxlY3Rfb3B0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzcG9ydHNcIj48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhdGhsZXRlc3BvcnRcIiB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUuc3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF0aGxldGVzcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2F0aGxldGVzLnNwb3J0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ2F0aGxldGVzcG9ydCcpXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnYXRobGV0ZXNwb3J0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdzcGVjaWFsdHknKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzcGVjaWFsdHlfaW5wdXRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuc3BlY2lhbHR5Jyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwidXNlci5hdGhsZXRlLnNwZWNpYWx0eVwiIGxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJzcGVjaWFsdHlDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic3BlY2lhbHRpZXNcIj48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzcGVjaWFsdHlfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUuc3BlY2lhbHR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGVjaWFsdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdhdGhsZXRlcy5zcGVjaWFsdHknKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgdi1zaG93PVwiZXJyb3JzLmhhcygnc3BlY2lhbHR5JylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdzcGVjaWFsdHknKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2NhdGVnb3J5JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2F0ZWdvcnlfaW5wdXRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuY2F0ZWdvcnknKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJ1c2VyLmF0aGxldGUuY2F0ZWdvcnlcIiBsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwiY2F0ZWdvcnlDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiY2F0ZWdvcmllc1wiPjwvdi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNhdGVnb3J5X2lucHV0XCIgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5hdGhsZXRlLmNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2F0aGxldGVzLmNhdGVnb3J5JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ2NhdGVnb3J5JylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdjYXRlZ29yeScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnY291bnRyeScpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvdW50cnlfaW5wdXRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuY291bnRyeScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDp2YWx1ZT1cInVzZXIuYXRobGV0ZS5jb3VudHJ5XCIgbGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJjb3VudHJ5Q2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiY291bnRyaWVzXCI+PC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY291bnRyeV9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYXRobGV0ZS5jb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbCBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuY291bnRyeScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIiB2LXNob3c9XCJlcnJvcnMuaGFzKCdjb3VudHJ5JylcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdjb3VudHJ5JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdnZW5kZXInKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJnZW5kZXJfaW5wdXRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuZ2VuZGVyJyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJ1c2VyLmF0aGxldGUuZ2VuZGVyXCIgbGFiZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdhdGhsZXRlcy5zZWxlY3Rfb3B0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImdlbmRlckNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJnZW5kZXJzXCI+PC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZ2VuZGVyX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYXRobGV0ZS5nZW5kZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2F0aGxldGVzLmdlbmRlcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIiB2LXNob3c9XCJlcnJvcnMuaGFzKCdnZW5kZXInKVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2dlbmRlcicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoZWlnaHRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuaGVpZ2h0Jyl9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvd3MtdlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaGVpZ2h0XCIgbmFtZT1cImhlaWdodFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuaGVpZ2h0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPVwiaGVpZ2h0XCIgaW5pdGlhbD1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYXRobGV0ZS5oZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIndlaWdodFwiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy53ZWlnaHQnKX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRhY2hvbWV0ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLndlaWdodCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD1cIndlaWdodFwiIGluaXRpYWw9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUud2VpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyYW5raW5nXCIgZGF0YS12di1lcnJvcj1cIlwiPnt7JHQoJ2F0aGxldGVzLnJhbmtpbmcnKX19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNpZ25hbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicmFua2luZ1wiIG5hbWU9XCJyYW5raW5nXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdhdGhsZXRlcy5yYW5raW5nJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPVwicmFua2luZ1wiIGluaXRpYWw9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUucmFua2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25CYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Zvcm1zLmJhY2snKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnZGlzYWJsZWQnOnVwZGF0aW5nfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdmb3Jtcy5zYXZlJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5ib3gtYm9keSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5ib3ggLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XG4gICAgaW1wb3J0IGF0aGxldGVMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9hdGhsZXRlcy9hdGhsZXRlcy5qcyc7XG4gICAgaW1wb3J0IGRuY0ltYWdlVXBsb2FkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZSc7XG4gICAgaW1wb3J0IHZTZWxlY3QgZnJvbSBcImJhc2UvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVwiXG4gICAgaW1wb3J0IGFkbWluSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXG4gICAgaW1wb3J0IGZvcm1EYXRhT2JqZWN0UGFyc2VyIGZyb20gJ2Jhc2UvbWl4aW5zL2FqYXgvZm9ybURhdGFQYXJzZXInXG4gICAgaW1wb3J0IHttYXBBY3Rpb25zfSBmcm9tICd2dWV4J1xuICAgIGltcG9ydCB1c2VyU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy91c2VyL3VzZXJTZXJ2aWNlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICd2U2VsZWN0JzogdlNlbGVjdCxcbiAgICAgICAgICAgICdhZG1pbkhlYWRlcic6IGFkbWluSGVhZGVyLFxuICAgICAgICAgICAgJ2RuY0ltYWdlVXBsb2FkZXInOiBkbmNJbWFnZVVwbG9hZGVyXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW2Zvcm1EYXRhT2JqZWN0UGFyc2VyXSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgICAgICBhdGhsZXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcG9ydDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9kYXNoYm9hcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi5ob21lJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL215LXByb2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi5teV9wcm9maWxlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL215LXByb2ZpbGUvdXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4udXBkYXRlJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwb3J0cygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLnNwb3J0c1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWNpYWx0aWVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uc3BlY2lhbHRpZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yaWVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uY2F0ZWdvcmllc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlbmRlcnMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5nZW5kZXJzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY291bnRyaWVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uY291bnRyaWVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbXBpb25zaGlwcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLmNoYW1waW9uc2hpcHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFtcGlvbnNoaXBFdmVudHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5ldmVudHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbG9jYWxlczogYXRobGV0ZUxvY2FsZXMsXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIGlmICghdGhpcy5zcG9ydHMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BvcnRzKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY291bnRyaWVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvdW50cmllcygpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW1waW9uc2hpcHMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2hhbXBpb25zaGlwcygpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdlbmRlcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0R2VuZGVycygpO1xuICAgICAgICAgICAgdXNlclNlcnZpY2Uuc2hvdyh0aGlzLiRhdXRoLnVzZXIoKS5pZCxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuYXRobGV0ZSA9IHJlc3BvbnNlLmRhdGEuYXRobGV0ZSA/IHJlc3BvbnNlLmRhdGEuYXRobGV0ZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9ydDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsdHk6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5kZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BlY2lhbHRpZXModGhpcy51c2VyLmF0aGxldGUuc3BvcnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5hdGhsZXRlLmNoYW1waW9uc2hpcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENoYW1waW9uc2hpcEV2ZW50cyh0aGlzLnVzZXIuYXRobGV0ZS5jaGFtcGlvbnNoaXAuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgICAgICBnZXRTcG9ydHM6ICdjb21tb246Z2V0U3BvcnRzJyxcbiAgICAgICAgICAgICAgICBnZXRDYXRlZ29yaWVzOiAnY29tbW9uOmdldENhdGVnb3JpZXMnLFxuICAgICAgICAgICAgICAgIGdldENvdW50cmllczogJ2NvbW1vbjpnZXRDb3VudHJpZXMnLFxuICAgICAgICAgICAgICAgIGdldENoYW1waW9uc2hpcHM6ICdjb21tb246Z2V0Q2hhbXBpb25zaGlwcycsXG4gICAgICAgICAgICAgICAgZ2V0U3BlY2lhbHRpZXM6ICdjb21tb246Z2V0U3BlY2lhbHRpZXMnLFxuICAgICAgICAgICAgICAgIHNldFNwZWNpYWx0aWVzOiAnY29tbW9uOnNldFNwZWNpYWx0aWVzJyxcbiAgICAgICAgICAgICAgICBnZXRDaGFtcGlvbnNoaXBFdmVudHM6ICdjb21tb246Z2V0Q2hhbXBpb25zaGlwRXZlbnRzJyxcbiAgICAgICAgICAgICAgICBnZXRHZW5kZXJzOiAnY29tbW9uOmdldEdlbmRlcnMnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjbG9zZShldnQpe1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50SHViLiRvbignbW9kYWwtY2xvc2UnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzcG9ydENoYW5nZWQoc3BvcnQpe1xuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLnNwb3J0ID0gc3BvcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyLnNwb3J0ID0gc3BvcnQ7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuYXRobGV0ZS5zcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFNwZWNpYWx0aWVzKHRoaXMudXNlci5hdGhsZXRlLnNwb3J0LmlkLCAoZGF0YSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZmlsdGVyKChzcGVjaWFsdHkpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwZWNpYWx0eS5pZCA9PSBzZWxmLnVzZXIuYXRobGV0ZS5zcGVjaWFsdHkuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VyLmF0aGxldGUuc3BlY2lhbHR5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTcGVjaWFsdGllcyhbXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLnNwZWNpYWx0eSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3BlY2lhbHR5Q2hhbmdlZChzcGVjaWFsdHkpe1xuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLnNwZWNpYWx0eSA9IHNwZWNpYWx0eVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhdGVnb3J5Q2hhbmdlZChjYXRlZ29yeSl7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyLmF0aGxldGUuY2F0ZWdvcnkgPSBjYXRlZ29yeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvdW50cnlDaGFuZ2VkKGNvdW50cnkpe1xuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLmNvdW50cnkgPSBjb3VudHJ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VuZGVyQ2hhbmdlZChnZW5kZXIpe1xuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLmdlbmRlciA9IGdlbmRlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50Q2hhbmdlZChldmVudHMpe1xuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLmV2ZW50cyA9IGV2ZW50c1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmFjayhldnQpe1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3VzZXIudmlldydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW1waW9uc2hpcENoYW5nZWQoY2hhbXBpb25zaGlwKXtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYXRobGV0ZS5jaGFtcGlvbnNoaXAgPSBjaGFtcGlvbnNoaXA7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5hdGhsZXRlLmNoYW1waW9uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENoYW1waW9uc2hpcEV2ZW50cyh0aGlzLnVzZXIuYXRobGV0ZS5jaGFtcGlvbnNoaXAuaWQsIChkYXRhKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5maWx0ZXIoKGV2ZW50KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5pZCA9PSBzZWxmLnVzZXIuYXRobGV0ZS5ldmVudC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVzZXIuYXRobGV0ZS5ldmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY29tbW9uOlNFVF9TUEVDSUFMVElFUycsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudC5zcGVjaWFsdHkgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN1Ym1pdChldnQpe1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKS50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHNlbGYuJHJlZnMudXBsb2FkZXIuZ2V0RmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZmlsZV9waWN0dXJlJywgc2VsZi4kcmVmcy51cGxvYWRlci5nZXRGaWxlKCkpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpcnN0X25hbWUnLCBzZWxmLnVzZXIuZmlyc3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbGFzdF9uYW1lJywgc2VsZi51c2VyLmxhc3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBzZWxmLnVzZXIuZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi51c2VyLmF0aGxldGUuZmVkZXJhdGlvbl9jb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmZWRlcmF0aW9uX2NvZGUnLCBzZWxmLnVzZXIuYXRobGV0ZS5mZWRlcmF0aW9uX2NvZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi51c2VyLmF0aGxldGUubmF0aW9uYWxfY29kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmF0aW9uYWxfY29kZScsIHNlbGYudXNlci5hdGhsZXRlLm5hdGlvbmFsX2NvZGUpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Nwb3J0X2lkJywgc2VsZi51c2VyLmF0aGxldGUuc3BvcnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NwZWNpYWx0eV9pZCcsIHNlbGYudXNlci5hdGhsZXRlLnNwZWNpYWx0eS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnlfaWQnLCBzZWxmLnVzZXIuYXRobGV0ZS5jYXRlZ29yeS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY291bnRyeV9pZCcsIHNlbGYudXNlci5hdGhsZXRlLmNvdW50cnkuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2dlbmRlcicsIHNlbGYudXNlci5hdGhsZXRlLmdlbmRlci5nZW5kZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi51c2VyLmF0aGxldGUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdoZWlnaHQnLCBzZWxmLnVzZXIuYXRobGV0ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi51c2VyLmF0aGxldGUud2VpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd3ZWlnaHQnLCBzZWxmLnVzZXIuYXRobGV0ZS53ZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi51c2VyLmF0aGxldGUucmFua2luZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmFua2luZycsIHNlbGYudXNlci5hdGhsZXRlLnJhbmtpbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLnVwZGF0ZShzZWxmLnVzZXIuaWQsIGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhdXRoLmZldGNoKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5zdWNjZXNzVG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VyLnZpZXcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGVycm9yIGluIHJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1tlcnJvcl0uZm9yRWFjaCgodmFsaWRhdGlvbkVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QodmFsaWRhdGlvbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdChyZXNwb25zZS5lcnJvcnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCh0aGlzLiR0KCdhZG1pbi52YWxpZGF0aW9uX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlZGl0LnZ1ZT81NjcxOTNjOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdhZG1pbi1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogX3ZtLiR0KCdhZG1pbi5teV9wcm9maWxlJyksXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXRobGV0ZS1mb3JtXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYWRtaW4ubXlfcHJvZmlsZScpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2ZpcnN0X25hbWUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJmaXJzdF9uYW1lXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5maXJzdF9uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuZmlyc3RfbmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIuZmlyc3RfbmFtZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJmaXJzdF9uYW1lXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJmaXJzdF9uYW1lXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuZmlyc3RfbmFtZScpLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2F0aGxldGVzLmZpcnN0X25hbWUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmZpcnN0X25hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udXNlci5maXJzdF9uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2ZpcnN0X25hbWUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2ZpcnN0X25hbWUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdmaXJzdF9uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnbGFzdF9uYW1lJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibGFzdF9uYW1lXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5sYXN0X25hbWUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51c2VyLmxhc3RfbmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIubGFzdF9uYW1lXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsYXN0X25hbWVcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcImxhc3RfbmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnVzZXIubGFzdF9uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIubGFzdF9uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2xhc3RfbmFtZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnbGFzdF9uYW1lJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnbGFzdF9uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZW1haWwnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJlbWFpbFwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMuZW1haWwnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oMiksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51c2VyLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlci5lbWFpbFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZW1haWxcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwibmFtZVwiOiBcImVtYWlsXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuZW1haWwnKSxcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkfGVtYWlsXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5lbWFpbCcpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnVzZXIuZW1haWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udXNlci5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdlbWFpbCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZW1haWwnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdlbWFpbCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTYgdGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ2RuYy1pbWFnZS11cGxvYWRlcicsIHtcbiAgICByZWY6IFwidXBsb2FkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJidG4tdGV4dFwiOiBfdm0uJHQoJ2F0aGxldGVzLnVwbG9hZF9pbWFnZScpLFxuICAgICAgXCJlcnJvci12YWxpZGF0aW9uLW1zZ1wiOiBfdm0uJHQoJ3ZhbGlkYXRpb24uaW1hZ2UnLCB7XG4gICAgICAgIGF0dHJpYnV0ZTogX3ZtLiR0KCdhdGhsZXRlcy51cGxvYWRfaW1hZ2UnKVxuICAgICAgfSksXG4gICAgICBcImltYWdlXCI6IF92bS51c2VyLmltYWdlLFxuICAgICAgXCJkZWZhdWx0LWltYWdlXCI6IFwiL2ltYWdlcy9taXNzaW5nL2F0aGxldGUvbWlzc2luZy5wbmdcIlxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImZlZGVyYXRpb25fY29kZVwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMuZmVkZXJhdGlvbl9jb2RlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDMpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5hdGhsZXRlLmZlZGVyYXRpb25fY29kZSksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIuYXRobGV0ZS5mZWRlcmF0aW9uX2NvZGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZmVkZXJhdGlvbl9jb2RlXCIsXG4gICAgICBcIm5hbWVcIjogXCJmZWRlcmF0aW9uX2NvZGVcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy5mZWRlcmF0aW9uX2NvZGUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUuZmVkZXJhdGlvbl9jb2RlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuYXRobGV0ZS5mZWRlcmF0aW9uX2NvZGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuYXRpb25hbF9jb2RlXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5uYXRpb25hbF9jb2RlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDQpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5hdGhsZXRlLm5hdGlvbmFsX2NvZGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmF0aGxldGUubmF0aW9uYWxfY29kZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuYXRpb25hbF9jb2RlXCIsXG4gICAgICBcIm5hbWVcIjogXCJuYXRpb25hbF9jb2RlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMubmF0aW9uYWxfY29kZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnVzZXIuYXRobGV0ZS5uYXRpb25hbF9jb2RlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuYXRobGV0ZS5uYXRpb25hbF9jb2RlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnYXRobGV0ZXNwb3J0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiYXRobGV0ZXNwb3J0XCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5zcG9ydCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS51c2VyLmF0aGxldGUuc3BvcnQsXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLnNwb3J0Q2hhbmdlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy5zZWxlY3Rfb3B0aW9uJyksXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnNwb3J0c1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51c2VyLmF0aGxldGUuc3BvcnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmF0aGxldGUuc3BvcnRcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImF0aGxldGVzcG9ydFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJhdGhsZXRlc3BvcnRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5zcG9ydCcpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnVzZXIuYXRobGV0ZS5zcG9ydClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmF0aGxldGUuc3BvcnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2F0aGxldGVzcG9ydCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnYXRobGV0ZXNwb3J0JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnYXRobGV0ZXNwb3J0JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdzcGVjaWFsdHknKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJzcGVjaWFsdHlfaW5wdXRcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLnNwZWNpYWx0eScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnVzZXIuYXRobGV0ZS5zcGVjaWFsdHksXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5zcGVjaWFsdHlDaGFuZ2VkLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5zcGVjaWFsdGllc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51c2VyLmF0aGxldGUuc3BlY2lhbHR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlci5hdGhsZXRlLnNwZWNpYWx0eVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwic3BlY2lhbHR5X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcInNwZWNpYWx0eVwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2F0aGxldGVzLnNwZWNpYWx0eScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnVzZXIuYXRobGV0ZS5zcGVjaWFsdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udXNlci5hdGhsZXRlLnNwZWNpYWx0eSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnc3BlY2lhbHR5JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdzcGVjaWFsdHknKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdzcGVjaWFsdHknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnY2F0ZWdvcnknKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJjYXRlZ29yeV9pbnB1dFwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMuY2F0ZWdvcnknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS51c2VyLmF0aGxldGUuY2F0ZWdvcnksXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jYXRlZ29yeUNoYW5nZWQsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmNhdGVnb3JpZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5hdGhsZXRlLmNhdGVnb3J5KSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlci5hdGhsZXRlLmNhdGVnb3J5XCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjYXRlZ29yeV9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJjYXRlZ29yeVwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2F0aGxldGVzLmNhdGVnb3J5JylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udXNlci5hdGhsZXRlLmNhdGVnb3J5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuYXRobGV0ZS5jYXRlZ29yeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnY2F0ZWdvcnknKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2NhdGVnb3J5JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnY2F0ZWdvcnknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2NvdW50cnknKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJjb3VudHJ5X2lucHV0XCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5jb3VudHJ5JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd2LXNlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0udXNlci5hdGhsZXRlLmNvdW50cnksXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLmNvdW50cnlDaGFuZ2VkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uY291bnRyaWVzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuYXRobGV0ZS5jb3VudHJ5KSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlci5hdGhsZXRlLmNvdW50cnlcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNvdW50cnlfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiY291bnRyeVwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2F0aGxldGVzLmNvdW50cnknKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUuY291bnRyeSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmF0aGxldGUuY291bnRyeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnY291bnRyeScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnY291bnRyeScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2NvdW50cnknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZ2VuZGVyJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZ2VuZGVyX2lucHV0XCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5nZW5kZXInKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd2LXNlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0udXNlci5hdGhsZXRlLmdlbmRlcixcbiAgICAgIFwibGFiZWxcIjogXCJuYW1lXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLmdlbmRlckNoYW5nZWQsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmdlbmRlcnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5hdGhsZXRlLmdlbmRlciksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIuYXRobGV0ZS5nZW5kZXJcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImdlbmRlcl9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJnZW5kZXJcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5nZW5kZXInKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUuZ2VuZGVyKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuYXRobGV0ZS5nZW5kZXIgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2dlbmRlcicpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZ2VuZGVyJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZ2VuZGVyJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiaGVpZ2h0XCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5oZWlnaHQnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDUpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5hdGhsZXRlLmhlaWdodCksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIuYXRobGV0ZS5oZWlnaHRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaGVpZ2h0XCIsXG4gICAgICBcIm5hbWVcIjogXCJoZWlnaHRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy5oZWlnaHQnKSxcbiAgICAgIFwiZmllbGRcIjogXCJoZWlnaHRcIixcbiAgICAgIFwiaW5pdGlhbFwiOiBcIm9mZlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnVzZXIuYXRobGV0ZS5oZWlnaHQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udXNlci5hdGhsZXRlLmhlaWdodCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIndlaWdodFwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMud2VpZ2h0JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSg2KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuYXRobGV0ZS53ZWlnaHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmF0aGxldGUud2VpZ2h0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIndlaWdodFwiLFxuICAgICAgXCJuYW1lXCI6IFwid2VpZ2h0XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMud2VpZ2h0JyksXG4gICAgICBcImZpZWxkXCI6IFwid2VpZ2h0XCIsXG4gICAgICBcImluaXRpYWxcIjogXCJvZmZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUud2VpZ2h0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuYXRobGV0ZS53ZWlnaHQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInJhbmtpbmdcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLnJhbmtpbmcnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDcpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5hdGhsZXRlLnJhbmtpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmF0aGxldGUucmFua2luZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJyYW5raW5nXCIsXG4gICAgICBcIm5hbWVcIjogXCJyYW5raW5nXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMucmFua2luZycpLFxuICAgICAgXCJmaWVsZFwiOiBcInJhbmtpbmdcIixcbiAgICAgIFwiaW5pdGlhbFwiOiBcIm9mZlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnVzZXIuYXRobGV0ZS5yYW5raW5nKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuYXRobGV0ZS5yYW5raW5nID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgdGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbkJhY2tcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdmb3Jtcy5iYWNrJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2Rpc2FibGVkJzogX3ZtLnVwZGF0aW5nXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCIsXG4gICAgICBcImhyZWZcIjogXCIjIVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25TdWJtaXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdmb3Jtcy5zYXZlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXSldKV0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlclwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2VyXCJcbiAgfSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY3JlZGl0LWNhcmRcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jcmVkaXQtY2FyZFwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWFycm93cy12XCJcbiAgfSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGFjaG9tZXRlclwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNpZ25hbFwiXG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zN2MyMWIyM1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzdjMjFiMjMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcHJvZmlsZS9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiXSwic291cmNlUm9vdCI6IiJ9