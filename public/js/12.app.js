webpackJsonp([12,30],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(302),
  /* template */
  __webpack_require__(425),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\profile\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba98791c", Component.options)
  } else {
    hotAPI.reload("data-v-ba98791c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(199)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(198),
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

/***/ 199:
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

/***/ 200:
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

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(222)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(220),
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

/***/ 207:
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

var _pointerScroll = __webpack_require__(211);

var _pointerScroll2 = _interopRequireDefault(_pointerScroll);

var _typeAheadPointer = __webpack_require__(212);

var _typeAheadPointer2 = _interopRequireDefault(_typeAheadPointer);

var _ajax = __webpack_require__(210);

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

/***/ 209:
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

/***/ 210:
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

/***/ 211:
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

/***/ 212:
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

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.inputfile {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.inputfile + label {\n    width: auto !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/upload/dnc-image-upload.vue?64c5c425"],"names":[],"mappings":";AAaA;IACA,aAAA;IACA,cAAA;IACA,WAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,uBAAA;CACA","file":"dnc-image-upload.vue","sourcesContent":["<template>\r\n    <div>\r\n        <img :src=\"defaultImage\" alt=\"athlete profile image\" width=\"110px\" v-if=\"!imageFile\">\r\n        <img :src=\"imageFile\" alt=\"athlete profile image\" width=\"110px\" v-if=\"imageFile\">\r\n\r\n        <br><br>\r\n        <input type=\"file\" name=\"file\" id=\"image-uploader\" class=\"inputfile\" @change=\"onFileChange\"\r\n               ref=\"fileinput\"/>\r\n        <label for=\"image-uploader\" class=\"btn btn-primary\"><i class=\"fa fa-cloud\"></i>\r\n            <span>{{btnText}}</span></label>\r\n    </div>\r\n</template>\r\n<style>\r\n    .inputfile {\r\n        width: 0.1px;\r\n        height: 0.1px;\r\n        opacity: 0;\r\n        overflow: hidden;\r\n        position: absolute;\r\n        z-index: -1;\r\n    }\r\n\r\n    .inputfile + label {\r\n        width: auto !important;\r\n    }\r\n</style>\r\n<script type=\"text/babel\">\r\n\r\n    export default{\r\n        props: {\r\n            value: {},\r\n            acceptedFiles: {\r\n                type: String,\r\n                default: 'image/*'\r\n            },\r\n            btnText: {},\r\n            errorValidationMsg: {},\r\n            width: {\r\n                type: Number,\r\n                default: 110\r\n            },\r\n            image: {},\r\n            defaultImage: {}\r\n        },\r\n        watch: {\r\n            image: function (val) {\r\n                this.imageFile = val;\r\n            }\r\n        },\r\n        data(){\r\n            return {\r\n                imageFile: null\r\n            }\r\n        },\r\n        methods: {\r\n            onFileChange(e){\r\n                var files = e.target.files || e.dataTransfer.files;\r\n                if (!files.length)\r\n                    return;\r\n                this.createImage(files[0]);\r\n            },\r\n            createImage(file) {\r\n                if (!file.type.match(this.acceptedFiles)) {\r\n                    document.getElementById(\"image-uploader\").value = \"\";\r\n                    this.$root.warningToast(this.errorValidationMsg);\r\n                    this.imageFile = this.defaultImage\r\n                    return;\r\n                }\r\n                var reader = new FileReader();\r\n                var vm = this;\r\n                reader.onload = (e) => {\r\n                    vm.imageFile = e.target.result;\r\n                };\r\n                reader.readAsDataURL(file)\r\n            },\r\n            getFile(){\r\n                return this.$refs.fileinput.files[0];\r\n            }\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.v-select {\n    position: relative;\n}\n.v-select .open-indicator {\n    position: absolute;\n    bottom: 6px;\n    right: 10px;\n    display: inline-block;\n    cursor: pointer;\n    pointer-events: all;\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    opacity: 1;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .open-indicator {\n    opacity: 0;\n}\n.v-select .open-indicator:before {\n    border-color: rgba(60, 60, 60, .5);\n    border-style: solid;\n    border-width: 0.25em 0.25em 0 0;\n    content: '';\n    display: inline-block;\n    height: 10px;\n    width: 10px;\n    vertical-align: top;\n    -webkit-transform: rotate(133deg);\n            transform: rotate(133deg);\n    -webkit-transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\n    -webkit-transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n            transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\n}\n.v-select.open .open-indicator {\n    bottom: 1px;\n}\n.v-select.open .open-indicator:before {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg);\n}\n.v-select .dropdown-toggle {\n    display: block;\n    padding: 0;\n    background: none;\n    border: 1px solid rgba(60, 60, 60, .26);\n    border-radius: 4px;\n    white-space: normal;\n}\n.v-select.searchable .dropdown-toggle {\n    cursor: text;\n}\n.v-select.open .dropdown-toggle {\n    border-bottom: none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.v-select > .dropdown-menu {\n    margin: 0;\n    width: 100%;\n    overflow-y: scroll;\n    border-top: none;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.v-select .selected-tag {\n    color: #333;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    height: 26px;\n    margin: 4px 1px 0px 3px;\n    padding: 0 0.25em;\n    float: left;\n    line-height: 1.7em;\n}\n.v-select .selected-tag .close {\n    float: none;\n    margin-right: 0;\n    font-size: 20px;\n}\n.v-select input[type=search],\n.v-select input[type=search]:focus {\n    display: inline-block;\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0 .5em;\n    width: 10em;\n    max-width: 100%;\n    background: none;\n    position: relative;\n    box-shadow: none;\n    float: left;\n    clear: none;\n}\n.v-select input[type=search]:disabled {\n    cursor: pointer;\n}\n.v-select li a {\n    cursor: pointer;\n}\n.v-select .active a {\n    background: rgba(50, 50, 50, .1);\n    color: #333;\n}\n.v-select .highlight a,\n.v-select li:hover > a {\n    background: #f0f0f0;\n    color: #333;\n}\n.v-select .spinner {\n    opacity: 0;\n    position: absolute;\n    top: 5px;\n    right: 10px;\n    font-size: 5px;\n    text-indent: -9999em;\n    overflow: hidden;\n    border-top: .9em solid rgba(100, 100, 100, .1);\n    border-right: .9em solid rgba(100, 100, 100, .1);\n    border-bottom: .9em solid rgba(100, 100, 100, .1);\n    border-left: .9em solid rgba(60, 60, 60, .45);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-animation: vSelectSpinner 1.1s infinite linear;\n            animation: vSelectSpinner 1.1s infinite linear;\n    -webkit-transition: opacity .1s;\n    transition: opacity .1s;\n}\n.v-select.loading .spinner {\n    opacity: 1;\n}\n.v-select .spinner,\n.v-select .spinner:after {\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n}\n@-webkit-keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/forms/select/select.vue?02883ea5"],"names":[],"mappings":";AACA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,YAAA;IACA,YAAA;IACA,sBAAA;IACA,gBAAA;IACA,oBAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;IACA,WAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;IACA,mCAAA;IACA,oBAAA;IACA,gCAAA;IACA,YAAA;IACA,sBAAA;IACA,aAAA;IACA,YAAA;IACA,oBAAA;IACA,kCAAA;YAAA,0BAAA;IACA,wEAAA;IAAA,gEAAA;IACA,8EAAA;YAAA,sEAAA;CACA;AAEA;IACA,YAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,WAAA;IACA,iBAAA;IACA,wCAAA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;CACA;AAEA;IACA,oBAAA;IACA,6BAAA;IACA,8BAAA;CACA;AAEA;IACA,UAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,0BAAA;IACA,2BAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,uBAAA;IACA,mBAAA;IACA,aAAA;IACA,wBAAA;IACA,kBAAA;IACA,YAAA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;CACA;AAEA;;IAEA,sBAAA;IACA,aAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,gBAAA;IACA,iBAAA;IACA,mBAAA;IACA,iBAAA;IACA,YAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,iCAAA;IACA,YAAA;CACA;AAEA;;IAEA,oBAAA;IACA,YAAA;CACA;AAEA;IACA,WAAA;IACA,mBAAA;IACA,SAAA;IACA,YAAA;IACA,eAAA;IACA,qBAAA;IACA,iBAAA;IACA,+CAAA;IACA,iDAAA;IACA,kDAAA;IACA,8CAAA;IACA,iCAAA;YAAA,yBAAA;IACA,uDAAA;YAAA,+CAAA;IACA,gCAAA;IAAA,wBAAA;CACA;AAEA;IACA,WAAA;CACA;AAEA;;IAEA,mBAAA;IACA,WAAA;IACA,YAAA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA;AAEA;AACA;QACA,gCAAA;gBAAA,wBAAA;CACA;AACA;QACA,kCAAA;gBAAA,0BAAA;CACA;CACA","file":"select.vue","sourcesContent":["<style>\r\n    .v-select {\r\n        position: relative;\r\n    }\r\n\r\n    .v-select .open-indicator {\r\n        position: absolute;\r\n        bottom: 6px;\r\n        right: 10px;\r\n        display: inline-block;\r\n        cursor: pointer;\r\n        pointer-events: all;\r\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        opacity: 1;\r\n        transition: opacity .1s;\r\n    }\r\n\r\n    .v-select.loading .open-indicator {\r\n        opacity: 0;\r\n    }\r\n\r\n    .v-select .open-indicator:before {\r\n        border-color: rgba(60, 60, 60, .5);\r\n        border-style: solid;\r\n        border-width: 0.25em 0.25em 0 0;\r\n        content: '';\r\n        display: inline-block;\r\n        height: 10px;\r\n        width: 10px;\r\n        vertical-align: top;\r\n        transform: rotate(133deg);\r\n        transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n        transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);\r\n    }\r\n\r\n    .v-select.open .open-indicator {\r\n        bottom: 1px;\r\n    }\r\n\r\n    .v-select.open .open-indicator:before {\r\n        transform: rotate(315deg);\r\n    }\r\n\r\n    .v-select .dropdown-toggle {\r\n        display: block;\r\n        padding: 0;\r\n        background: none;\r\n        border: 1px solid rgba(60, 60, 60, .26);\r\n        border-radius: 4px;\r\n        white-space: normal;\r\n    }\r\n\r\n    .v-select.searchable .dropdown-toggle {\r\n        cursor: text;\r\n    }\r\n\r\n    .v-select.open .dropdown-toggle {\r\n        border-bottom: none;\r\n        border-bottom-left-radius: 0;\r\n        border-bottom-right-radius: 0;\r\n    }\r\n\r\n    .v-select > .dropdown-menu {\r\n        margin: 0;\r\n        width: 100%;\r\n        overflow-y: scroll;\r\n        border-top: none;\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n    }\r\n\r\n    .v-select .selected-tag {\r\n        color: #333;\r\n        background-color: #f0f0f0;\r\n        border: 1px solid #ccc;\r\n        border-radius: 4px;\r\n        height: 26px;\r\n        margin: 4px 1px 0px 3px;\r\n        padding: 0 0.25em;\r\n        float: left;\r\n        line-height: 1.7em;\r\n    }\r\n\r\n    .v-select .selected-tag .close {\r\n        float: none;\r\n        margin-right: 0;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .v-select input[type=search],\r\n    .v-select input[type=search]:focus {\r\n        display: inline-block;\r\n        border: none;\r\n        outline: none;\r\n        margin: 0;\r\n        padding: 0 .5em;\r\n        width: 10em;\r\n        max-width: 100%;\r\n        background: none;\r\n        position: relative;\r\n        box-shadow: none;\r\n        float: left;\r\n        clear: none;\r\n    }\r\n\r\n    .v-select input[type=search]:disabled {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .v-select li a {\r\n        cursor: pointer;\r\n    }\r\n\r\n    .v-select .active a {\r\n        background: rgba(50, 50, 50, .1);\r\n        color: #333;\r\n    }\r\n\r\n    .v-select .highlight a,\r\n    .v-select li:hover > a {\r\n        background: #f0f0f0;\r\n        color: #333;\r\n    }\r\n\r\n    .v-select .spinner {\r\n        opacity: 0;\r\n        position: absolute;\r\n        top: 5px;\r\n        right: 10px;\r\n        font-size: 5px;\r\n        text-indent: -9999em;\r\n        overflow: hidden;\r\n        border-top: .9em solid rgba(100, 100, 100, .1);\r\n        border-right: .9em solid rgba(100, 100, 100, .1);\r\n        border-bottom: .9em solid rgba(100, 100, 100, .1);\r\n        border-left: .9em solid rgba(60, 60, 60, .45);\r\n        transform: translateZ(0);\r\n        animation: vSelectSpinner 1.1s infinite linear;\r\n        transition: opacity .1s;\r\n    }\r\n\r\n    .v-select.loading .spinner {\r\n        opacity: 1;\r\n    }\r\n\r\n    .v-select .spinner,\r\n    .v-select .spinner:after {\r\n        border-radius: 50%;\r\n        width: 5em;\r\n        height: 5em;\r\n    }\r\n\r\n    @-webkit-keyframes vSelectSpinner {\r\n        0% {\r\n            transform: rotate(0deg);\r\n        }\r\n        100% {\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n\r\n    @keyframes vSelectSpinner {\r\n        0% {\r\n            transform: rotate(0deg);\r\n        }\r\n        100% {\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n</style>\r\n\r\n<template>\r\n    <div class=\"dropdown v-select\" :class=\"dropdownClasses\">\r\n        <div ref=\"toggle\" @mousedown.prevent=\"toggleDropdown\" class=\"dropdown-toggle clearfix\" type=\"button\">\r\n        <span class=\"form-control\" v-if=\"!searchable && isValueEmpty\">\r\n          {{ placeholder }}\r\n        </span>\r\n\r\n            <span class=\"selected-tag\" v-for=\"(option,index) in valueAsArray\" v-bind:key=\"index\">\r\n          {{ getOptionLabel(option) }}\r\n          <button v-if=\"multiple\" @click=\"select(option)\" type=\"button\" class=\"close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </span>\r\n\r\n            <input\r\n                    ref=\"search\"\r\n                    :debounce=\"debounce\"\r\n                    v-model=\"search\"\r\n                    v-show=\"searchable\"\r\n                    @keydown.delete=\"maybeDeleteValue\"\r\n                    @keyup.esc=\"onEscape\"\r\n                    @keydown.up.prevent=\"typeAheadUp\"\r\n                    @keydown.down.prevent=\"typeAheadDown\"\r\n                    @keyup.enter.prevent=\"typeAheadSelect\"\r\n                    @blur=\"open = false\"\r\n                    @focus=\"open = true\"\r\n                    type=\"search\"\r\n                    class=\"form-control\"\r\n                    :placeholder=\"searchPlaceholder\"\r\n                    :style=\"{ width: isValueEmpty ? '100%' : 'auto' }\"\r\n            >\r\n\r\n            <i ref=\"openIndicator\" role=\"presentation\" class=\"open-indicator\"></i>\r\n\r\n            <slot name=\"spinner\">\r\n                <div class=\"spinner\" v-show=\"loading\">Loading...</div>\r\n            </slot>\r\n        </div>\r\n\r\n        <ul ref=\"dropdownMenu\" v-show=\"open\" :transition=\"transition\" class=\"dropdown-menu\"\r\n            :style=\"{ 'max-height': maxHeight }\">\r\n            <li v-for=\"(option,index) in filteredOptions\" v-bind:key=\"index\"\r\n                :class=\"{ active: isOptionSelected(option), highlight: index === typeAheadPointer }\"\r\n                @mouseover=\"typeAheadPointer = index\">\r\n                <a @mousedown.prevent=\"select(option)\">\r\n                    {{ getOptionLabel(option) }}\r\n                </a>\r\n            </li>\r\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"divider\"></li>\r\n            <li transition=\"fade\" v-if=\"!filteredOptions.length\" class=\"text-center\">\r\n                <slot name=\"no-options\">Sorry, no matching options.</slot>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</template>\r\n\r\n\r\n<script type=\"text/babel\">\r\n    import pointerScroll from 'base/mixins/pointerScroll'\r\n    import typeAheadPointer from 'base/mixins/typeAheadPointer'\r\n    import ajax from 'base/mixins/ajax'\r\n\r\n    export default {\r\n        mixins: [pointerScroll, typeAheadPointer, ajax],\r\n\r\n        props: {\r\n            /**\r\n             * Contains the currently selected value. Very similar to a\r\n             * `value` attribute on an <input>. In most cases, you'll want\r\n             * to set this as a two-way binding, using :value.sync. However,\r\n             * this will not work with Vuex, in which case you'll need to use\r\n             * the onChange callback property.\r\n             * @type {Object||String||null}\r\n             */\r\n            value: {\r\n                default: null\r\n            },\r\n\r\n            /**\r\n             * An array of strings or objects to be used as dropdown choices.\r\n             * If you are using an array of objects, vue-select will look for\r\n             * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A\r\n             * custom label key can be set with the `label` prop.\r\n             * @type {Object}\r\n             */\r\n            options: {\r\n                type: Array,\r\n                default() {\r\n                    return []\r\n                },\r\n            },\r\n\r\n            /**\r\n             * Sets the max-height property on the dropdown list.\r\n             * @deprecated\r\n             * @type {String}\r\n             */\r\n            maxHeight: {\r\n                type: String,\r\n                default: '400px'\r\n            },\r\n\r\n            /**\r\n             * Enable/disable filtering the options.\r\n             * @type {Boolean}\r\n             */\r\n            searchable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            /**\r\n             * Equivalent to the `multiple` attribute on a `<select>` input.\r\n             * @type {Object}\r\n             */\r\n            multiple: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * Equivalent to the `placeholder` attribute on an `<input>`.\r\n             * @type {Object}\r\n             */\r\n            placeholder: {\r\n                type: String,\r\n                default: ''\r\n            },\r\n\r\n            /**\r\n             * Sets a Vue transition property on the `.dropdown-menu`. vue-select\r\n             * does not include CSS for transitions, you'll need to add them yourself.\r\n             * @type {String}\r\n             */\r\n            transition: {\r\n                type: String,\r\n                default: 'expand'\r\n            },\r\n\r\n            /**\r\n             * Enables/disables clearing the search text when an option is selected.\r\n             * @type {Boolean}\r\n             */\r\n            clearSearchOnSelect: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            /**\r\n             * Tells vue-select what key to use when generating option\r\n             * labels when each `option` is an object.\r\n             * @type {String}\r\n             */\r\n            label: {\r\n                type: String,\r\n                default: 'label'\r\n            },\r\n\r\n            /**\r\n             * Callback to generate the label text. If {option}\r\n             * is an object, returns option[this.label] by default.\r\n             * @param  {Object || String} option\r\n             * @return {String}\r\n             */\r\n            getOptionLabel: {\r\n                type: Function,\r\n                default(option) {\r\n                    if (typeof option === 'object') {\r\n                        if (this.label && option[this.label]) {\r\n                            return option[this.label]\r\n                        }\r\n                    }\r\n                    return option;\r\n                }\r\n            },\r\n\r\n            /**\r\n             * An optional callback function that is called each time the selected\r\n             * value(s) change. When integrating with Vuex, use this callback to trigger\r\n             * an action, rather than using :value.sync to retreive the selected value.\r\n             * @type {Function}\r\n             * @default {null}\r\n             */\r\n            onChange: Function,\r\n            changeParam: {},\r\n\r\n            /**\r\n             * Enable/disable creating options from searchInput.\r\n             * @type {Boolean}\r\n             */\r\n            taggable: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * When true, newly created tags will be added to\r\n             * the options list.\r\n             * @type {Boolean}\r\n             */\r\n            pushTags: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n\r\n            /**\r\n             * User defined function for adding Options\r\n             * @type {Function}\r\n             */\r\n            createOption: {\r\n                type: Function,\r\n                default: function (newOption) {\r\n                    if (typeof this.options[0] === 'object') {\r\n                        return {[this.label]: newOption}\r\n                    }\r\n                    return newOption\r\n                }\r\n            },\r\n\r\n            /**\r\n             * When false, updating the options will not reset the select value\r\n             * @type {Boolean}\r\n             */\r\n            resetOnOptionsChange: {\r\n                type: Boolean,\r\n                default: false\r\n            },\r\n        },\r\n\r\n        data() {\r\n            return {\r\n                search: '',\r\n                open: false,\r\n                selection: null\r\n            }\r\n        },\r\n\r\n        watch: {\r\n            value(val, old) {\r\n                this.selection = val\r\n            },\r\n            selection(val, old) {\r\n                if (this.multiple) {\r\n                    this.onChange ? this.onChange(val, this.changeParam) : null\r\n                } else {\r\n                    this.onChange && val !== old ? this.onChange(val, this.changeParam) : null\r\n                }\r\n            },\r\n            options() {\r\n                if (!this.taggable && this.resetOnOptionsChange) {\r\n                    this.selection = this.multiple ? [] : null\r\n                }\r\n            },\r\n            multiple(val) {\r\n                this.selection = val ? [] : null\r\n            }\r\n        },\r\n\r\n        methods: {\r\n\r\n            /**\r\n             * Select a given option.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            select(option) {\r\n                if (this.isOptionSelected(option)) {\r\n                    this.deselect(option)\r\n                } else {\r\n                    if (this.taggable && !this.optionExists(option)) {\r\n                        option = this.createOption(option)\r\n\r\n                        if (this.pushTags) {\r\n                            this.options.push(option)\r\n                        }\r\n                    }\r\n\r\n                    if (this.multiple) {\r\n                        if (!this.selection) {\r\n                            this.selection = [option]\r\n                        } else {\r\n                            this.selection.push(option)\r\n                        }\r\n                    } else {\r\n                        this.selection = option\r\n                    }\r\n                }\r\n\r\n                this.onAfterSelect(option)\r\n            },\r\n\r\n            /**\r\n             * De-select a given option.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            deselect(option) {\r\n                if (this.multiple) {\r\n                    let ref = -1\r\n                    this.selection.forEach((val) => {\r\n                        if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {\r\n                            ref = val\r\n                        }\r\n                    })\r\n                    var index = this.selection.indexOf(ref);\r\n                    this.selection.splice(index, 1)\r\n\r\n                } else {\r\n                    this.selection = null\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Called from this.select after each selection.\r\n             * @param  {Object||String} option\r\n             * @return {void}\r\n             */\r\n            onAfterSelect(option) {\r\n                if (!this.multiple) {\r\n                    this.open = !this.open\r\n                    this.$refs.search.blur()\r\n                }\r\n\r\n                if (this.clearSearchOnSelect) {\r\n                    this.search = ''\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Toggle the visibility of the dropdown menu.\r\n             * @param  {Event} e\r\n             * @return {void}\r\n             */\r\n            toggleDropdown(e) {\r\n                if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {\r\n                    if (this.open) {\r\n                        this.$refs.search.blur() // dropdown will close on blur\r\n                    } else {\r\n                        this.open = true\r\n                        this.$refs.search.focus()\r\n                    }\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Check if the given option is currently selected.\r\n             * @param  {Object||String}  option\r\n             * @return {Boolean}         True when selected || False otherwise\r\n             */\r\n            isOptionSelected(option) {\r\n                if (this.multiple && this.selection) {\r\n                    let selected = false\r\n                    this.value.forEach(opt => {\r\n                        if (typeof opt === 'object' && opt[this.label] === option[this.label]) {\r\n                            selected = true\r\n                        } else if (opt === option) {\r\n                            selected = true\r\n                        }\r\n                    })\r\n                    return selected\r\n                }\r\n\r\n                return this.selection === option\r\n            },\r\n\r\n            /**\r\n             * If there is any text in the search input, remove it.\r\n             * Otherwise, blur the search input to close the dropdown.\r\n             * @return {[type]} [description]\r\n             */\r\n            onEscape() {\r\n                if (!this.search.length) {\r\n                    this.$refs.search.blur()\r\n                } else {\r\n                    this.search = ''\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Delete the value on Delete keypress when there is no\r\n             * text in the search input, & there's tags to delete\r\n             * @return {this.value}\r\n             */\r\n            maybeDeleteValue() {\r\n                if (!this.$refs.search.value.length && this.value) {\r\n                    return this.multiple ? this.value.pop() : this.selection = null\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Determine if an option exists\r\n             * within this.options array.\r\n             *\r\n             * @param  {Object || String} option\r\n             * @return {boolean}\r\n             */\r\n            optionExists(option) {\r\n                let exists = false\r\n\r\n                this.options.forEach(opt => {\r\n                    if (typeof opt === 'object' && opt[this.label] === option) {\r\n                        exists = true\r\n                    } else if (opt === option) {\r\n                        exists = true\r\n                    }\r\n                })\r\n\r\n                return exists\r\n            }\r\n        },\r\n\r\n        computed: {\r\n\r\n            /**\r\n             * Classes to be output on .dropdown\r\n             * @return {Object}\r\n             */\r\n            dropdownClasses() {\r\n                return {\r\n                    open: this.open,\r\n                    searchable: this.searchable,\r\n                    loading: this.loading\r\n                }\r\n            },\r\n\r\n            /**\r\n             * Return the placeholder string if it's set\r\n             * & there is no value selected.\r\n             * @return {String} Placeholder text\r\n             */\r\n            searchPlaceholder() {\r\n                if (this.isValueEmpty && this.placeholder) {\r\n                    return this.placeholder;\r\n                }\r\n            },\r\n\r\n            /**\r\n             * The currently displayed options, filtered\r\n             * by the search elements value. If tagging\r\n             * true, the search text will be prepended\r\n             * if it doesn't already exist.\r\n             *\r\n             * @return {array}\r\n             */\r\n            filteredOptions() {\r\n                let self = this;\r\n                let options = this.options.filter(function (option) {\r\n                    return option[self.label].indexOf(self.search) !== -1\r\n                })\r\n                if (this.taggable && this.search.length && !this.optionExists(this.search)) {\r\n                    options.unshift(this.search)\r\n                }\r\n                return options\r\n            },\r\n\r\n            /**\r\n             * Check if there aren't any options selected.\r\n             * @return {Boolean}\r\n             */\r\n            isValueEmpty() {\r\n                if (this.selection) {\r\n                    if (typeof this.selection === 'object') {\r\n                        return !Object.keys(this.selection).length\r\n                    }\r\n                    return !this.selection.length\r\n                }\r\n\r\n                return true;\r\n            },\r\n\r\n            /**\r\n             * Return the current value in array format.\r\n             * @return {Array}\r\n             */\r\n            valueAsArray() {\r\n                if (this.multiple) {\r\n                    return this.selection\r\n                } else if (this.selection) {\r\n                    return [this.selection]\r\n                }\r\n\r\n                return []\r\n            }\r\n        }\r\n\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(221)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(209),
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

/***/ 221:
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

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
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

/***/ 223:
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

/***/ 254:
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

/***/ 302:
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

var _athletes = __webpack_require__(223);

var _athletes2 = _interopRequireDefault(_athletes);

var _dncImageUpload = __webpack_require__(217);

var _dncImageUpload2 = _interopRequireDefault(_dncImageUpload);

var _select = __webpack_require__(201);

var _select2 = _interopRequireDefault(_select);

var _pageHeader = __webpack_require__(195);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _formDataParser = __webpack_require__(200);

var _formDataParser2 = _interopRequireDefault(_formDataParser);

var _vuex = __webpack_require__(4);

var _userService = __webpack_require__(254);

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

/***/ 425:
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
     require("vue-hot-reload-api").rerender("data-v-ba98791c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Byb2ZpbGUvZWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9jYWUyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NWQ5OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2E2MjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9mb3JtRGF0YVBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vL3NlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vL2RuYy1pbWFnZS11cGxvYWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvcG9pbnRlclNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/Yzc2NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/N2ZjMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/NjBkNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/ZDQwNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzM0NWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2NmMjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL2F0aGxldGVzL2F0aGxldGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcHJvZmlsZS9lZGl0LnZ1ZT9mZGI1Il0sIm5hbWVzIjpbIm1ldGhvZHMiLCJwYXJzZU9iakZvcm1EYXRhIiwib2JqIiwiZm9ybWRhdGEiLCJuYW1lc3BhY2UiLCJmZCIsImZvcm1LZXkiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRmlsZSIsImFwcGVuZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9wcyIsImxvYWRpbmciLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJvblNlYXJjaCIsImRlYm91bmNlIiwiTnVtYmVyIiwid2F0Y2giLCJzZWFyY2giLCJsZW5ndGgiLCJ0b2dnbGVMb2FkaW5nIiwidG9nZ2xlIiwidHlwZUFoZWFkUG9pbnRlciIsIm1heWJlQWRqdXN0U2Nyb2xsIiwicGl4ZWxzVG9Qb2ludGVyVG9wIiwicGl4ZWxzVG9Qb2ludGVyQm90dG9tIiwidmlld3BvcnQiLCJ0b3AiLCJzY3JvbGxUbyIsImJvdHRvbSIsInBvaW50ZXJIZWlnaHQiLCJpIiwiJHJlZnMiLCJkcm9wZG93bk1lbnUiLCJjaGlsZHJlbiIsIm9mZnNldEhlaWdodCIsImVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwb3NpdGlvbiIsImRhdGEiLCJmaWx0ZXJlZE9wdGlvbnMiLCJ0eXBlQWhlYWRVcCIsInR5cGVBaGVhZERvd24iLCJ0eXBlQWhlYWRTZWxlY3QiLCJzZWxlY3QiLCJ0YWdnYWJsZSIsImNsZWFyU2VhcmNoT25TZWxlY3QiLCJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJ1cGRhdGUiLCJ1c2VyIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJjcmVhdGUiLCJwb3N0Iiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7OztBQzFCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FB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QUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzEyLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lZGl0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWJhOTg3OTFjIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGRhc2hib2FyZFxcXFxtb2R1bGVzXFxcXHByb2ZpbGVcXFxcZWRpdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBlZGl0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iYTk4NzkxY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWJhOTg3OTFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvcHJvZmlsZS9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NmY4NWU3ZCFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxoZWFkZXJcXFxccGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NmY4NWU3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImJyZWFkY3J1bWIuaHJlZlwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIHRhZz1cImxpXCIgdi1mb3I9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cclxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L29sPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cclxuICAgIC5hZG1pbi1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogOTdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NGI4OTE5MjAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA0NjE0MThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcGFyc2VPYmpGb3JtRGF0YShvYmosIGZvcm1kYXRhLCBuYW1lc3BhY2UpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmZCA9IGZvcm1kYXRhO1xyXG4gICAgICAgICAgICB2YXIgZm9ybUtleTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBvYmpbcHJvcGVydHldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lc3BhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUtleSA9IG5hbWVzcGFjZSArICdbJyArIHByb3BlcnR5ICsgJ10nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1LZXkgPSBwcm9wZXJ0eTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9wZXJ0eSBpcyBhbiBvYmplY3QsIGJ1dCBub3QgYSBGaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSByZWN1cnNpdml0eS5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wZXJ0eV0gPT09ICdvYmplY3QnICYmICEob2JqW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEZpbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VPYmpGb3JtRGF0YShvYmpbcHJvcGVydHldLCBmZCwgZm9ybUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmQuYXBwZW5kKGZvcm1LZXksIG9ialtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9mb3JtRGF0YVBhcnNlci5qcyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxmb3Jtc1xcXFxzZWxlY3RcXFxcc2VsZWN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHNlbGVjdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOWZkNzUzN2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05ZmQ3NTM3ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA3IDggOSAxMCAxMiAxMyAxNCIsIjxzdHlsZT5cclxuICAgIC52LXNlbGVjdCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGJvdHRvbTogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC4yNik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgPiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXSxcclxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGNsZWFyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgbGkgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuYWN0aXZlIGEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXHJcbiAgICAudi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXHJcbiAgICAudi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogNWVtO1xyXG4gICAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biB2LXNlbGVjdFwiIDpjbGFzcz1cImRyb3Bkb3duQ2xhc3Nlc1wiPlxyXG4gICAgICAgIDxkaXYgcmVmPVwidG9nZ2xlXCIgQG1vdXNlZG93bi5wcmV2ZW50PVwidG9nZ2xlRHJvcGRvd25cIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBjbGVhcmZpeFwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtaWY9XCIhc2VhcmNoYWJsZSAmJiBpc1ZhbHVlRW1wdHlcIj5cclxuICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC10YWdcIiB2LWZvcj1cIihvcHRpb24saW5kZXgpIGluIHZhbHVlQXNBcnJheVwiIHYtYmluZDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxyXG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVwibXVsdGlwbGVcIiBAY2xpY2s9XCJzZWxlY3Qob3B0aW9uKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkZWJvdW5jZT1cImRlYm91bmNlXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJzZWFyY2hhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kZWxldGU9XCJtYXliZURlbGV0ZVZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZXNjPVwib25Fc2NhcGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLnVwLnByZXZlbnQ9XCJ0eXBlQWhlYWRVcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZG93bi5wcmV2ZW50PVwidHlwZUFoZWFkRG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyLnByZXZlbnQ9XCJ0eXBlQWhlYWRTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBibHVyPVwib3BlbiA9IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJvcGVuID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInNlYXJjaFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBpc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bycgfVwiXHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxpIHJlZj1cIm9wZW5JbmRpY2F0b3JcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJvcGVuLWluZGljYXRvclwiPjwvaT5cclxuXHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJzcGlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiIHYtc2hvdz1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHVsIHJlZj1cImRyb3Bkb3duTWVudVwiIHYtc2hvdz1cIm9wZW5cIiA6dHJhbnNpdGlvbj1cInRyYW5zaXRpb25cIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7ICdtYXgtaGVpZ2h0JzogbWF4SGVpZ2h0IH1cIj5cclxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiKG9wdGlvbixpbmRleCkgaW4gZmlsdGVyZWRPcHRpb25zXCIgdi1iaW5kOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IHR5cGVBaGVhZFBvaW50ZXIgfVwiXHJcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwidHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBAbW91c2Vkb3duLnByZXZlbnQ9XCJzZWxlY3Qob3B0aW9uKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cIm5vLW9wdGlvbnNcIj5Tb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy48L3Nsb3Q+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cclxuICAgIGltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJ2Jhc2UvbWl4aW5zL3BvaW50ZXJTY3JvbGwnXHJcbiAgICBpbXBvcnQgdHlwZUFoZWFkUG9pbnRlciBmcm9tICdiYXNlL21peGlucy90eXBlQWhlYWRQb2ludGVyJ1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnYmFzZS9taXhpbnMvYWpheCdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWl4aW5zOiBbcG9pbnRlclNjcm9sbCwgdHlwZUFoZWFkUG9pbnRlciwgYWpheF0sXHJcblxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHZhbHVlLiBWZXJ5IHNpbWlsYXIgdG8gYVxyXG4gICAgICAgICAgICAgKiBgdmFsdWVgIGF0dHJpYnV0ZSBvbiBhbiA8aW5wdXQ+LiBJbiBtb3N0IGNhc2VzLCB5b3UnbGwgd2FudFxyXG4gICAgICAgICAgICAgKiB0byBzZXQgdGhpcyBhcyBhIHR3by13YXkgYmluZGluZywgdXNpbmcgOnZhbHVlLnN5bmMuIEhvd2V2ZXIsXHJcbiAgICAgICAgICAgICAqIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFZ1ZXgsIGluIHdoaWNoIGNhc2UgeW91J2xsIG5lZWQgdG8gdXNlXHJcbiAgICAgICAgICAgICAqIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBwcm9wZXJ0eS5cclxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdHx8U3RyaW5nfHxudWxsfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgdG8gYmUgdXNlZCBhcyBkcm9wZG93biBjaG9pY2VzLlxyXG4gICAgICAgICAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMsIHZ1ZS1zZWxlY3Qgd2lsbCBsb29rIGZvclxyXG4gICAgICAgICAgICAgKiBhIGBsYWJlbGAga2V5IChleC4gW3tsYWJlbDogJ1RoaXMgaXMgRm9vJywgdmFsdWU6ICdmb28nfV0pLiBBXHJcbiAgICAgICAgICAgICAqIGN1c3RvbSBsYWJlbCBrZXkgY2FuIGJlIHNldCB3aXRoIHRoZSBgbGFiZWxgIHByb3AuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNldHMgdGhlIG1heC1oZWlnaHQgcHJvcGVydHkgb24gdGhlIGRyb3Bkb3duIGxpc3QuXHJcbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBmaWx0ZXJpbmcgdGhlIG9wdGlvbnMuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VhcmNoYWJsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiBhIGA8c2VsZWN0PmAgaW5wdXQuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdWx0aXBsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgb24gYW4gYDxpbnB1dD5gLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU2V0cyBhIFZ1ZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHRoZSBgLmRyb3Bkb3duLW1lbnVgLiB2dWUtc2VsZWN0XHJcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGluY2x1ZGUgQ1NTIGZvciB0cmFuc2l0aW9ucywgeW91J2xsIG5lZWQgdG8gYWRkIHRoZW0geW91cnNlbGYuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZXhwYW5kJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgY2xlYXJpbmcgdGhlIHNlYXJjaCB0ZXh0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGVsbHMgdnVlLXNlbGVjdCB3aGF0IGtleSB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIG9wdGlvblxyXG4gICAgICAgICAgICAgKiBsYWJlbHMgd2hlbiBlYWNoIGBvcHRpb25gIGlzIGFuIG9iamVjdC5cclxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGFiZWwnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2FsbGJhY2sgdG8gZ2VuZXJhdGUgdGhlIGxhYmVsIHRleHQuIElmIHtvcHRpb259XHJcbiAgICAgICAgICAgICAqIGlzIGFuIG9iamVjdCwgcmV0dXJucyBvcHRpb25bdGhpcy5sYWJlbF0gYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsICYmIG9wdGlvblt0aGlzLmxhYmVsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvblt0aGlzLmxhYmVsXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIHRoZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgKiB2YWx1ZShzKSBjaGFuZ2UuIFdoZW4gaW50ZWdyYXRpbmcgd2l0aCBWdWV4LCB1c2UgdGhpcyBjYWxsYmFjayB0byB0cmlnZ2VyXHJcbiAgICAgICAgICAgICAqIGFuIGFjdGlvbiwgcmF0aGVyIHRoYW4gdXNpbmcgOnZhbHVlLnN5bmMgdG8gcmV0cmVpdmUgdGhlIHNlbGVjdGVkIHZhbHVlLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHtudWxsfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25DaGFuZ2U6IEZ1bmN0aW9uLFxyXG4gICAgICAgICAgICBjaGFuZ2VQYXJhbToge30sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgY3JlYXRpbmcgb3B0aW9ucyBmcm9tIHNlYXJjaElucHV0LlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRhZ2dhYmxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBXaGVuIHRydWUsIG5ld2x5IGNyZWF0ZWQgdGFncyB3aWxsIGJlIGFkZGVkIHRvXHJcbiAgICAgICAgICAgICAqIHRoZSBvcHRpb25zIGxpc3QuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVzaFRhZ3M6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFVzZXIgZGVmaW5lZCBmdW5jdGlvbiBmb3IgYWRkaW5nIE9wdGlvbnNcclxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtbdGhpcy5sYWJlbF06IG5ld09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld09wdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFdoZW4gZmFsc2UsIHVwZGF0aW5nIHRoZSBvcHRpb25zIHdpbGwgbm90IHJlc2V0IHRoZSBzZWxlY3QgdmFsdWVcclxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgdmFsdWUodmFsLCBvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbih2YWwsIG9sZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHZhbCAhPT0gb2xkID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhZ2dhYmxlICYmIHRoaXMucmVzZXRPbk9wdGlvbnNDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbXVsdGlwbGUodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbCA/IFtdIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cclxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdChvcHRpb24pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuY3JlYXRlT3B0aW9uKG9wdGlvbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hUYWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW29wdGlvbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2VsZWN0KG9wdGlvbilcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZS1zZWxlY3QgYSBnaXZlbiBvcHRpb24uXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRlc2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gLTFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gb3B0aW9uIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB2YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENhbGxlZCBmcm9tIHRoaXMuc2VsZWN0IGFmdGVyIGVhY2ggc2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLm9wZW5JbmRpY2F0b3IgfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMuc2VhcmNoIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnRvZ2dsZSB8fCBlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKSAvLyBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGJsdXJcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmZvY3VzKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIG9wdGlvbiBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSAgb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgVHJ1ZSB3aGVuIHNlbGVjdGVkIHx8IEZhbHNlIG90aGVyd2lzZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2gob3B0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA9PT0gb3B0aW9uXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSWYgdGhlcmUgaXMgYW55IHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgcmVtb3ZlIGl0LlxyXG4gICAgICAgICAgICAgKiBPdGhlcndpc2UsIGJsdXIgdGhlIHNlYXJjaCBpbnB1dCB0byBjbG9zZSB0aGUgZHJvcGRvd24uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25Fc2NhcGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVsZXRlIHRoZSB2YWx1ZSBvbiBEZWxldGUga2V5cHJlc3Mgd2hlbiB0aGVyZSBpcyBub1xyXG4gICAgICAgICAgICAgKiB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsICYgdGhlcmUncyB0YWdzIHRvIGRlbGV0ZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzLnZhbHVlfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUubGVuZ3RoICYmIHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUucG9wKCkgOiB0aGlzLnNlbGVjdGlvbiA9IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgYW4gb3B0aW9uIGV4aXN0c1xyXG4gICAgICAgICAgICAgKiB3aXRoaW4gdGhpcy5vcHRpb25zIGFycmF5LlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9wdGlvbkV4aXN0cyhvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2xhc3NlcyB0byBiZSBvdXRwdXQgb24gLmRyb3Bkb3duXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRoaXMuc2VhcmNoYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIHBsYWNlaG9sZGVyIHN0cmluZyBpZiBpdCdzIHNldFxyXG4gICAgICAgICAgICAgKiAmIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFBsYWNlaG9sZGVyIHRleHRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBvcHRpb25zLCBmaWx0ZXJlZFxyXG4gICAgICAgICAgICAgKiBieSB0aGUgc2VhcmNoIGVsZW1lbnRzIHZhbHVlLiBJZiB0YWdnaW5nXHJcbiAgICAgICAgICAgICAqIHRydWUsIHRoZSBzZWFyY2ggdGV4dCB3aWxsIGJlIHByZXBlbmRlZFxyXG4gICAgICAgICAgICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2FycmF5fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3NlbGYubGFiZWxdLmluZGV4T2Yoc2VsZi5zZWFyY2gpICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25FeGlzdHModGhpcy5zZWFyY2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHRoaXMuc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmVuJ3QgYW55IG9wdGlvbnMgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpc1ZhbHVlRW1wdHkoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuc2VsZWN0aW9uKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlbGVjdGlvbi5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgaW4gYXJyYXkgZm9ybWF0LlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHZhbHVlQXNBcnJheSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGlvbl1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VsZWN0LnZ1ZT8wMjg4M2VhNSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyA6c3JjPVwiZGVmYXVsdEltYWdlXCIgYWx0PVwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIgd2lkdGg9XCIxMTBweFwiIHYtaWY9XCIhaW1hZ2VGaWxlXCI+XHJcbiAgICAgICAgPGltZyA6c3JjPVwiaW1hZ2VGaWxlXCIgYWx0PVwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIgd2lkdGg9XCIxMTBweFwiIHYtaWY9XCJpbWFnZUZpbGVcIj5cclxuXHJcbiAgICAgICAgPGJyPjxicj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiaW1hZ2UtdXBsb2FkZXJcIiBjbGFzcz1cImlucHV0ZmlsZVwiIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIlxyXG4gICAgICAgICAgICAgICByZWY9XCJmaWxlaW5wdXRcIi8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImltYWdlLXVwbG9hZGVyXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLWNsb3VkXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2J0blRleHR9fTwvc3Bhbj48L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAgIC5pbnB1dGZpbGUge1xyXG4gICAgICAgIHdpZHRoOiAwLjFweDtcclxuICAgICAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0ZmlsZSArIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHt9LFxyXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnRuVGV4dDoge30sXHJcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXHJcbiAgICAgICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1hZ2U6IHt9LFxyXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uRmlsZUNoYW5nZShlKXtcclxuICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzIHx8IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJbWFnZShmaWxlc1swXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUltYWdlKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKHRoaXMuYWNjZXB0ZWRGaWxlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLXVwbG9hZGVyXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290Lndhcm5pbmdUb2FzdCh0aGlzLmVycm9yVmFsaWRhdGlvbk1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRGaWxlKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5maWxlaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG5jLWltYWdlLXVwbG9hZC52dWU/NjRjNWM0MjUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRwcm9wczoge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBUb2dnbGVzIHRoZSBhZGRpbmcgb2YgYSAnbG9hZGluZycgY2xhc3MgdG8gdGhlIG1haW5cclxuXHRcdCAqIC52LXNlbGVjdCB3cmFwcGVyLiBVc2VmdWwgdG8gY29udHJvbCBVSSBzdGF0ZSB3aGVuXHJcblx0XHQgKiByZXN1bHRzIGFyZSBiZWluZyBwcm9jZXNzZWQgdGhyb3VnaCBBSkFYLlxyXG5cdFx0ICovXHJcblx0XHRsb2FkaW5nOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWNjZXB0IGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlXHJcblx0XHQgKiBydW4gd2hlbiB0aGUgc2VhcmNoIHRleHQgY2hhbmdlcy5cclxuXHRcdCAqXHJcblx0XHQgKiBsb2FkaW5nKCkgYWNjZXB0cyBhIGJvb2xlYW4gdmFsdWUsIGFuZCBjYW5cclxuXHRcdCAqIGJlIHVzZWQgdG8gdG9nZ2xlIGEgbG9hZGluZyBjbGFzcyBmcm9tXHJcblx0XHQgKiB0aGUgb25TZWFyY2ggY2FsbGJhY2suXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzZWFyY2h9ICBTdHJpbmcgICAgICAgICAgQ3VycmVudCBzZWFyY2ggdGV4dFxyXG5cdFx0ICogQHBhcmFtIHtsb2FkaW5nfSBGdW5jdGlvbihib29sKSAgVG9nZ2xlIGxvYWRpbmcgY2xhc3NcclxuXHRcdCAqL1xyXG5cdFx0b25TZWFyY2g6IHtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcclxuXHRcdCAqIGludm9raW5nIHRoaXMub25TZWFyY2goKS4gVXNlZCB0byBwcmV2ZW50XHJcblx0XHQgKiBzZW5kaW5nIGFuIEFKQVggcmVxdWVzdCB1bnRpbCBpbnB1dCBpcyBjb21wbGV0ZS5cclxuXHRcdCAqL1xyXG5cdFx0ZGVib3VuY2U6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiAwXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0d2F0Y2g6IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogSWYgYSBjYWxsYmFjayAmIHNlYXJjaCB0ZXh0IGhhcyBiZWVuIHByb3ZpZGVkLFxyXG5cdFx0ICogaW52b2tlIHRoZSBvblNlYXJjaCBjYWxsYmFjay5cclxuXHRcdCAqL1xyXG5cdFx0c2VhcmNoKCkge1xyXG5cdFx0XHRpZiAodGhpcy5zZWFyY2gubGVuZ3RoID4gMCAmJiB0aGlzLm9uU2VhcmNoKSB7XHJcblx0XHRcdFx0dGhpcy5vblNlYXJjaCh0aGlzLnNlYXJjaCwgdGhpcy50b2dnbGVMb2FkaW5nKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogVG9nZ2xlIHRoaXMubG9hZGluZy4gT3B0aW9uYWxseSBwYXNzIGEgYm9vbGVhblxyXG5cdFx0ICogdmFsdWUuIElmIG5vIHZhbHVlIGlzIHByb3ZpZGVkLCB0aGlzLmxvYWRpbmdcclxuXHRcdCAqIHdpbGwgYmUgc2V0IHRvIHRoZSBvcHBvc2l0ZSBvZiBpdCdzIGN1cnJlbnQgdmFsdWUuXHJcblx0XHQgKiBAcGFyYW0gdG9nZ2xlIEJvb2xlYW5cclxuXHRcdCAqIEByZXR1cm5zIHsqfVxyXG5cdFx0ICovXHJcblx0XHR0b2dnbGVMb2FkaW5nKHRvZ2dsZSA9IG51bGwpIHtcclxuXHRcdFx0aWYgKHRvZ2dsZSA9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmdcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nID0gdG9nZ2xlXHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdhdGNoOiB7XHJcbiAgICB0eXBlQWhlYWRQb2ludGVyKCkge1xyXG4gICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEFkanVzdCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBkcm9wZG93biBsaXN0XHJcbiAgICAgKiBpZiB0aGUgY3VycmVudCBwb2ludGVyIGlzIG91dHNpZGUgb2YgdGhlXHJcbiAgICAgKiBvdmVyZmxvdyBib3VuZHMuXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgbWF5YmVBZGp1c3RTY3JvbGwoKSB7XHJcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJUb3AgPSB0aGlzLnBpeGVsc1RvUG9pbnRlclRvcCgpXHJcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJCb3R0b20gPSB0aGlzLnBpeGVsc1RvUG9pbnRlckJvdHRvbSgpXHJcblxyXG4gICAgICBpZiAoIHBpeGVsc1RvUG9pbnRlclRvcCA8PSB0aGlzLnZpZXdwb3J0KCkudG9wKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8oIHBpeGVsc1RvUG9pbnRlclRvcCApXHJcbiAgICAgIH0gZWxzZSBpZiAocGl4ZWxzVG9Qb2ludGVyQm90dG9tID49IHRoaXMudmlld3BvcnQoKS5ib3R0b20pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyggdGhpcy52aWV3cG9ydCgpLnRvcCArIHRoaXMucG9pbnRlckhlaWdodCgpIClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgdG9wIG9mIHRoZSBkcm9wZG93blxyXG4gICAgICogbGlzdCB0byB0aGUgdG9wIG9mIHRoZSBjdXJyZW50IHBvaW50ZXIgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHBpeGVsc1RvUG9pbnRlclRvcCgpIHtcclxuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IDBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBaGVhZFBvaW50ZXI7IGkrKykge1xyXG4gICAgICAgIHBpeGVsc1RvUG9pbnRlclRvcCArPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlbltpXS5vZmZzZXRIZWlnaHRcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGl4ZWxzVG9Qb2ludGVyVG9wXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSB0b3Agb2YgdGhlIGRyb3Bkb3duXHJcbiAgICAgKiBsaXN0IHRvIHRoZSBib3R0b20gb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHBpeGVsc1RvUG9pbnRlckJvdHRvbSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGl4ZWxzVG9Qb2ludGVyVG9wKCkgKyB0aGlzLnBvaW50ZXJIZWlnaHQoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvZmZzZXRIZWlnaHQgb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcG9pbnRlckhlaWdodCgpIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlblt0aGlzLnR5cGVBaGVhZFBvaW50ZXJdXHJcbiAgICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnRseSB2aWV3YWJsZSBwb3J0aW9uIG9mIHRoZSBkcm9wZG93bk1lbnUuXHJcbiAgICAgKiBAcmV0dXJucyB7e3RvcDogKHN0cmluZ3wqfG51bWJlciksIGJvdHRvbTogKn19XHJcbiAgICAgKi9cclxuICAgIHZpZXdwb3J0KCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wLFxyXG4gICAgICAgIGJvdHRvbTogdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUub2Zmc2V0SGVpZ2h0ICsgdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGwgdGhlIGRyb3Bkb3duTWVudSB0byBhIGdpdmVuIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG8ocG9zaXRpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCA9IHBvc2l0aW9uXHJcbiAgICB9LFxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZUFoZWFkUG9pbnRlcjogLTFcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB3YXRjaDoge1xyXG4gICAgZmlsdGVyZWRPcHRpb25zKCkge1xyXG4gICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPSAwXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IHVwIHRoZSBsaXN0IGJ5XHJcbiAgICAgKiBzdWJ0cmFjdGluZyB0aGUgY3VycmVudCBpbmRleCBieSBvbmUuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0eXBlQWhlYWRVcCgpIHtcclxuICAgICAgaWYgKHRoaXMudHlwZUFoZWFkUG9pbnRlciA+IDApIHtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXItLVxyXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xyXG4gICAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgdHlwZUFoZWFkUG9pbnRlciB2aXN1YWxseSBkb3duIHRoZSBsaXN0IGJ5XHJcbiAgICAgKiBhZGRpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgdHlwZUFoZWFkRG93bigpIHtcclxuICAgICAgaWYgKHRoaXMudHlwZUFoZWFkUG9pbnRlciA8IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIrK1xyXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xyXG4gICAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IHRoZSBvcHRpb24gYXQgdGhlIGN1cnJlbnQgdHlwZUFoZWFkUG9pbnRlciBwb3NpdGlvbi5cclxuICAgICAqIE9wdGlvbmFsbHkgY2xlYXIgdGhlIHNlYXJjaCBpbnB1dCBvbiBzZWxlY3Rpb24uXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0eXBlQWhlYWRTZWxlY3QoKSB7XHJcbiAgICAgIGlmKCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QoIHRoaXMuZmlsdGVyZWRPcHRpb25zWyB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgXSApO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlYXJjaClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCApIHtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdHlwZUFoZWFkUG9pbnRlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmlucHV0ZmlsZSB7XFxuICAgIHdpZHRoOiAwLjFweDtcXG4gICAgaGVpZ2h0OiAwLjFweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuLmlucHV0ZmlsZSArIGxhYmVsIHtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzY0YzVjNDI1XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFhQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImRuYy1pbWFnZS11cGxvYWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiZGVmYXVsdEltYWdlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCIhaW1hZ2VGaWxlXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiaW1hZ2VGaWxlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCJpbWFnZUZpbGVcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGJyPjxicj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuYW1lPVxcXCJmaWxlXFxcIiBpZD1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJpbnB1dGZpbGVcXFwiIEBjaGFuZ2U9XFxcIm9uRmlsZUNoYW5nZVxcXCJcXHJcXG4gICAgICAgICAgICAgICByZWY9XFxcImZpbGVpbnB1dFxcXCIvPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jbG91ZFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAuaW5wdXRmaWxlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwLjFweDtcXHJcXG4gICAgICAgIGhlaWdodDogMC4xcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbnB1dGZpbGUgKyBsYWJlbCB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgdmFsdWU6IHt9LFxcclxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGJ0blRleHQ6IHt9LFxcclxcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXFxyXFxuICAgICAgICAgICAgd2lkdGg6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGltYWdlOiB7fSxcXHJcXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHZhbDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YSgpe1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpe1xcclxcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcztcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCh0aGlzLmFjY2VwdGVkRmlsZXMpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiaW1hZ2UtdXBsb2FkZXJcXFwiKS52YWx1ZSA9IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC53YXJuaW5nVG9hc3QodGhpcy5lcnJvclZhbGlkYXRpb25Nc2cpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xcclxcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldEZpbGUoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZmlsZWlucHV0LmZpbGVzWzBdO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNyA4IDkgMTAgMTIgMTMgMTQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXNlbGVjdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiA2cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG59XFxuLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgLjUpO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAuMjVlbSAwLjI1ZW0gMCAwO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbn1cXG4udi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBib3R0b206IDFweDtcXG59XFxuLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cXG4udi1zZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC4yNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgIGN1cnNvcjogdGV4dDtcXG59XFxuLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG4udi1zZWxlY3QgPiAuZHJvcGRvd24tbWVudSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIHtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXJnaW46IDRweCAxcHggMHB4IDNweDtcXG4gICAgcGFkZGluZzogMCAwLjI1ZW07XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XFxufVxcbi52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXSxcXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAuNWVtO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBjbGVhcjogbm9uZTtcXG59XFxuLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpkaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtc2VsZWN0IGxpIGEge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi52LXNlbGVjdCAuYWN0aXZlIGEge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIC4xKTtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcbi52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXFxuLnYtc2VsZWN0IGxpOmhvdmVyID4gYSB7XFxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG4udi1zZWxlY3QgLnNwaW5uZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgZm9udC1zaXplOiA1cHg7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcbiAgICBib3JkZXItcmlnaHQ6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdlNlbGVjdFNwaW5uZXIgMS4xcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxufVxcbi52LXNlbGVjdC5sb2FkaW5nIC5zcGlubmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLnYtc2VsZWN0IC5zcGlubmVyLFxcbi52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgaGVpZ2h0OiA1ZW07XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxuMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG59XFxuQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxuMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/MDI4ODNlYTVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLHdFQUFBO0lBQUEsZ0VBQUE7SUFDQSw4RUFBQTtZQUFBLHNFQUFBO0lBQ0EsV0FBQTtJQUNBLGdDQUFBO0lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7SUFDQSxtQ0FBQTtJQUNBLG9CQUFBO0lBQ0EsZ0NBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtJQUNBLHdFQUFBO0lBQUEsZ0VBQUE7SUFDQSw4RUFBQTtZQUFBLHNFQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esd0NBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFFQTtJQUNBLGFBQUE7Q0FDQTtBQUVBO0lBQ0Esb0JBQUE7SUFDQSw2QkFBQTtJQUNBLDhCQUFBO0NBQ0E7QUFFQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSx3QkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTs7SUFFQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsaUNBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTs7SUFFQSxvQkFBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLCtDQUFBO0lBQ0EsaURBQUE7SUFDQSxrREFBQTtJQUNBLDhDQUFBO0lBQ0EsaUNBQUE7WUFBQSx5QkFBQTtJQUNBLHVEQUFBO1lBQUEsK0NBQUE7SUFDQSxnQ0FBQTtJQUFBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7Q0FDQTtBQUVBOztJQUVBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0FBQ0E7UUFDQSxnQ0FBQTtnQkFBQSx3QkFBQTtDQUNBO0FBQ0E7UUFDQSxrQ0FBQTtnQkFBQSwwQkFBQTtDQUNBO0NBQ0E7QUFFQTtBQUNBO1FBQ0EsZ0NBQUE7Z0JBQUEsd0JBQUE7Q0FDQTtBQUNBO1FBQ0Esa0NBQUE7Z0JBQUEsMEJBQUE7Q0FDQTtDQUNBXCIsXCJmaWxlXCI6XCJzZWxlY3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjxzdHlsZT5cXHJcXG4gICAgLnYtc2VsZWN0IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogNnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuNSk7XFxyXFxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjI1ZW0gMC4yNWVtIDAgMDtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3Ige1xcclxcbiAgICAgICAgYm90dG9tOiAxcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0Lm9wZW4gLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC4yNik7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdC5zZWFyY2hhYmxlIC5kcm9wZG93bi10b2dnbGUge1xcclxcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgPiAuZHJvcGRvd24tbWVudSB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xcclxcbiAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xcclxcbiAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xcclxcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXSxcXHJcXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xcclxcbiAgICAgICAgd2lkdGg6IDEwZW07XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgY2xlYXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXTpkaXNhYmxlZCB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IGxpIGEge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuYWN0aXZlIGEge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAuMSk7XFxyXFxuICAgICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLmhpZ2hsaWdodCBhLFxcclxcbiAgICAudi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuICAgICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNXB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDVweDtcXHJcXG4gICAgICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQ6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xcclxcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5zcGlubmVyIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5zcGlubmVyLFxcclxcbiAgICAudi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgd2lkdGg6IDVlbTtcXHJcXG4gICAgICAgIGhlaWdodDogNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxyXFxuICAgICAgICAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xcclxcbiAgICAgICAgMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgMTAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biB2LXNlbGVjdFxcXCIgOmNsYXNzPVxcXCJkcm9wZG93bkNsYXNzZXNcXFwiPlxcclxcbiAgICAgICAgPGRpdiByZWY9XFxcInRvZ2dsZVxcXCIgQG1vdXNlZG93bi5wcmV2ZW50PVxcXCJ0b2dnbGVEcm9wZG93blxcXCIgY2xhc3M9XFxcImRyb3Bkb3duLXRvZ2dsZSBjbGVhcmZpeFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHYtaWY9XFxcIiFzZWFyY2hhYmxlICYmIGlzVmFsdWVFbXB0eVxcXCI+XFxyXFxuICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlbGVjdGVkLXRhZ1xcXCIgdi1mb3I9XFxcIihvcHRpb24saW5kZXgpIGluIHZhbHVlQXNBcnJheVxcXCIgdi1iaW5kOmtleT1cXFwiaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XFxyXFxuICAgICAgICAgIDxidXR0b24gdi1pZj1cXFwibXVsdGlwbGVcXFwiIEBjbGljaz1cXFwic2VsZWN0KG9wdGlvbilcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGlucHV0XFxyXFxuICAgICAgICAgICAgICAgICAgICByZWY9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpkZWJvdW5jZT1cXFwiZGVib3VuY2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcInNlYXJjaGFibGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kZWxldGU9XFxcIm1heWJlRGVsZXRlVmFsdWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZXNjPVxcXCJvbkVzY2FwZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLnVwLnByZXZlbnQ9XFxcInR5cGVBaGVhZFVwXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZG93bi5wcmV2ZW50PVxcXCJ0eXBlQWhlYWREb3duXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyLnByZXZlbnQ9XFxcInR5cGVBaGVhZFNlbGVjdFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBibHVyPVxcXCJvcGVuID0gZmFsc2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XFxcIm9wZW4gPSB0cnVlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cXFwic2VhcmNoUGxhY2Vob2xkZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcInsgd2lkdGg6IGlzVmFsdWVFbXB0eSA/ICcxMDAlJyA6ICdhdXRvJyB9XFxcIlxcclxcbiAgICAgICAgICAgID5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8aSByZWY9XFxcIm9wZW5JbmRpY2F0b3JcXFwiIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgY2xhc3M9XFxcIm9wZW4taW5kaWNhdG9yXFxcIj48L2k+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwic3Bpbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiIHYtc2hvdz1cXFwibG9hZGluZ1xcXCI+TG9hZGluZy4uLjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvc2xvdD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPHVsIHJlZj1cXFwiZHJvcGRvd25NZW51XFxcIiB2LXNob3c9XFxcIm9wZW5cXFwiIDp0cmFuc2l0aW9uPVxcXCJ0cmFuc2l0aW9uXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCJcXHJcXG4gICAgICAgICAgICA6c3R5bGU9XFxcInsgJ21heC1oZWlnaHQnOiBtYXhIZWlnaHQgfVxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCIob3B0aW9uLGluZGV4KSBpbiBmaWx0ZXJlZE9wdGlvbnNcXFwiIHYtYmluZDprZXk9XFxcImluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgYWN0aXZlOiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IHR5cGVBaGVhZFBvaW50ZXIgfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cXFwidHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgQG1vdXNlZG93bi5wcmV2ZW50PVxcXCJzZWxlY3Qob3B0aW9uKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICB7eyBnZXRPcHRpb25MYWJlbChvcHRpb24pIH19XFxyXFxuICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSB0cmFuc2l0aW9uPVxcXCJmYWRlXFxcIiB2LWlmPVxcXCIhZmlsdGVyZWRPcHRpb25zLmxlbmd0aFxcXCIgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XFxcImZhZGVcXFwiIHYtaWY9XFxcIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJuby1vcHRpb25zXFxcIj5Tb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy48L3Nsb3Q+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuXFxyXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2JhYmVsXFxcIj5cXHJcXG4gICAgaW1wb3J0IHBvaW50ZXJTY3JvbGwgZnJvbSAnYmFzZS9taXhpbnMvcG9pbnRlclNjcm9sbCdcXHJcXG4gICAgaW1wb3J0IHR5cGVBaGVhZFBvaW50ZXIgZnJvbSAnYmFzZS9taXhpbnMvdHlwZUFoZWFkUG9pbnRlcidcXHJcXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnYmFzZS9taXhpbnMvYWpheCdcXHJcXG5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICAgICAgbWl4aW5zOiBbcG9pbnRlclNjcm9sbCwgdHlwZUFoZWFkUG9pbnRlciwgYWpheF0sXFxyXFxuXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIENvbnRhaW5zIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUuIFZlcnkgc2ltaWxhciB0byBhXFxyXFxuICAgICAgICAgICAgICogYHZhbHVlYCBhdHRyaWJ1dGUgb24gYW4gPGlucHV0Pi4gSW4gbW9zdCBjYXNlcywgeW91J2xsIHdhbnRcXHJcXG4gICAgICAgICAgICAgKiB0byBzZXQgdGhpcyBhcyBhIHR3by13YXkgYmluZGluZywgdXNpbmcgOnZhbHVlLnN5bmMuIEhvd2V2ZXIsXFxyXFxuICAgICAgICAgICAgICogdGhpcyB3aWxsIG5vdCB3b3JrIHdpdGggVnVleCwgaW4gd2hpY2ggY2FzZSB5b3UnbGwgbmVlZCB0byB1c2VcXHJcXG4gICAgICAgICAgICAgKiB0aGUgb25DaGFuZ2UgY2FsbGJhY2sgcHJvcGVydHkuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdHx8U3RyaW5nfHxudWxsfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHZhbHVlOiB7XFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEFuIGFycmF5IG9mIHN0cmluZ3Mgb3Igb2JqZWN0cyB0byBiZSB1c2VkIGFzIGRyb3Bkb3duIGNob2ljZXMuXFxyXFxuICAgICAgICAgICAgICogSWYgeW91IGFyZSB1c2luZyBhbiBhcnJheSBvZiBvYmplY3RzLCB2dWUtc2VsZWN0IHdpbGwgbG9vayBmb3JcXHJcXG4gICAgICAgICAgICAgKiBhIGBsYWJlbGAga2V5IChleC4gW3tsYWJlbDogJ1RoaXMgaXMgRm9vJywgdmFsdWU6ICdmb28nfV0pLiBBXFxyXFxuICAgICAgICAgICAgICogY3VzdG9tIGxhYmVsIGtleSBjYW4gYmUgc2V0IHdpdGggdGhlIGBsYWJlbGAgcHJvcC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFNldHMgdGhlIG1heC1oZWlnaHQgcHJvcGVydHkgb24gdGhlIGRyb3Bkb3duIGxpc3QuXFxyXFxuICAgICAgICAgICAgICogQGRlcHJlY2F0ZWRcXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG1heEhlaWdodDoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGZpbHRlcmluZyB0aGUgb3B0aW9ucy5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBtdWx0aXBsZWAgYXR0cmlidXRlIG9uIGEgYDxzZWxlY3Q+YCBpbnB1dC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG11bHRpcGxlOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgcGxhY2Vob2xkZXJgIGF0dHJpYnV0ZSBvbiBhbiBgPGlucHV0PmAuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBTZXRzIGEgVnVlIHRyYW5zaXRpb24gcHJvcGVydHkgb24gdGhlIGAuZHJvcGRvd24tbWVudWAuIHZ1ZS1zZWxlY3RcXHJcXG4gICAgICAgICAgICAgKiBkb2VzIG5vdCBpbmNsdWRlIENTUyBmb3IgdHJhbnNpdGlvbnMsIHlvdSdsbCBuZWVkIHRvIGFkZCB0aGVtIHlvdXJzZWxmLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdleHBhbmQnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBFbmFibGVzL2Rpc2FibGVzIGNsZWFyaW5nIHRoZSBzZWFyY2ggdGV4dCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBjbGVhclNlYXJjaE9uU2VsZWN0OiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFRlbGxzIHZ1ZS1zZWxlY3Qgd2hhdCBrZXkgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBsYWJlbHMgd2hlbiBlYWNoIGBvcHRpb25gIGlzIGFuIG9iamVjdC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGxhYmVsOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2xhYmVsJ1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQ2FsbGJhY2sgdG8gZ2VuZXJhdGUgdGhlIGxhYmVsIHRleHQuIElmIHtvcHRpb259XFxyXFxuICAgICAgICAgICAgICogaXMgYW4gb2JqZWN0LCByZXR1cm5zIG9wdGlvblt0aGlzLmxhYmVsXSBieSBkZWZhdWx0LlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbDoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdChvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsICYmIG9wdGlvblt0aGlzLmxhYmVsXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3RoaXMubGFiZWxdXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIHRoZSBzZWxlY3RlZFxcclxcbiAgICAgICAgICAgICAqIHZhbHVlKHMpIGNoYW5nZS4gV2hlbiBpbnRlZ3JhdGluZyB3aXRoIFZ1ZXgsIHVzZSB0aGlzIGNhbGxiYWNrIHRvIHRyaWdnZXJcXHJcXG4gICAgICAgICAgICAgKiBhbiBhY3Rpb24sIHJhdGhlciB0aGFuIHVzaW5nIDp2YWx1ZS5zeW5jIHRvIHJldHJlaXZlIHRoZSBzZWxlY3RlZCB2YWx1ZS5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XFxyXFxuICAgICAgICAgICAgICogQGRlZmF1bHQge251bGx9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgb25DaGFuZ2U6IEZ1bmN0aW9uLFxcclxcbiAgICAgICAgICAgIGNoYW5nZVBhcmFtOiB7fSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBjcmVhdGluZyBvcHRpb25zIGZyb20gc2VhcmNoSW5wdXQuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgdGFnZ2FibGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFdoZW4gdHJ1ZSwgbmV3bHkgY3JlYXRlZCB0YWdzIHdpbGwgYmUgYWRkZWQgdG9cXHJcXG4gICAgICAgICAgICAgKiB0aGUgb3B0aW9ucyBsaXN0LlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHB1c2hUYWdzOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBVc2VyIGRlZmluZWQgZnVuY3Rpb24gZm9yIGFkZGluZyBPcHRpb25zXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGNyZWF0ZU9wdGlvbjoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKG5ld09wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnNbMF0gPT09ICdvYmplY3QnKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtbdGhpcy5sYWJlbF06IG5ld09wdGlvbn1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdPcHRpb25cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogV2hlbiBmYWxzZSwgdXBkYXRpbmcgdGhlIG9wdGlvbnMgd2lsbCBub3QgcmVzZXQgdGhlIHNlbGVjdCB2YWx1ZVxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHJlc2V0T25PcHRpb25zQ2hhbmdlOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBkYXRhKCkge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXFxyXFxuICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxcclxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IG51bGxcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICB2YWx1ZSh2YWwsIG9sZCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgc2VsZWN0aW9uKHZhbCwgb2xkKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxcclxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB2YWwgIT09IG9sZCA/IHRoaXMub25DaGFuZ2UodmFsLCB0aGlzLmNoYW5nZVBhcmFtKSA6IG51bGxcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgb3B0aW9ucygpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhZ2dhYmxlICYmIHRoaXMucmVzZXRPbk9wdGlvbnNDaGFuZ2UpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5tdWx0aXBsZSA/IFtdIDogbnVsbFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBtdWx0aXBsZSh2YWwpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB2YWwgPyBbXSA6IG51bGxcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBzZWxlY3Qob3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdChvcHRpb24pXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiAhdGhpcy5vcHRpb25FeGlzdHMob3B0aW9uKSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuY3JlYXRlT3B0aW9uKG9wdGlvbilcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wdXNoVGFncykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW29wdGlvbl1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKG9wdGlvbilcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gb3B0aW9uXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2VsZWN0KG9wdGlvbilcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIERlLXNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBkZXNlbGVjdChvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWYgPSAtMVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uZm9yRWFjaCgodmFsKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gb3B0aW9uIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHZhbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKHJlZik7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG51bGxcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQ2FsbGVkIGZyb20gdGhpcy5zZWxlY3QgYWZ0ZXIgZWFjaCBzZWxlY3Rpb24uXFxyXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgb25BZnRlclNlbGVjdChvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnNlYXJjaC5ibHVyKClcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGVhclNlYXJjaE9uU2VsZWN0KSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZHJvcGRvd24gbWVudS5cXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuJHJlZnMub3BlbkluZGljYXRvciB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5zZWFyY2ggfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMudG9nZ2xlIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRlbCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3Blbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKSAvLyBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGJsdXJcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmZvY3VzKClcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIG9wdGlvbiBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXFxyXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9ICBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgIFRydWUgd2hlbiBzZWxlY3RlZCB8fCBGYWxzZSBvdGhlcndpc2VcXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBpc09wdGlvblNlbGVjdGVkKG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLnNlbGVjdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUuZm9yRWFjaChvcHQgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvblt0aGlzLmxhYmVsXSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24gPT09IG9wdGlvblxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogSWYgdGhlcmUgaXMgYW55IHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgcmVtb3ZlIGl0LlxcclxcbiAgICAgICAgICAgICAqIE90aGVyd2lzZSwgYmx1ciB0aGUgc2VhcmNoIGlucHV0IHRvIGNsb3NlIHRoZSBkcm9wZG93bi5cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBvbkVzY2FwZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaC5sZW5ndGgpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxcclxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJ1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBEZWxldGUgdGhlIHZhbHVlIG9uIERlbGV0ZSBrZXlwcmVzcyB3aGVuIHRoZXJlIGlzIG5vXFxyXFxuICAgICAgICAgICAgICogdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCAmIHRoZXJlJ3MgdGFncyB0byBkZWxldGVcXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzLnZhbHVlfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG1heWJlRGVsZXRlVmFsdWUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUubGVuZ3RoICYmIHRoaXMudmFsdWUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy52YWx1ZS5wb3AoKSA6IHRoaXMuc2VsZWN0aW9uID0gbnVsbFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgYW4gb3B0aW9uIGV4aXN0c1xcclxcbiAgICAgICAgICAgICAqIHdpdGhpbiB0aGlzLm9wdGlvbnMgYXJyYXkuXFxyXFxuICAgICAgICAgICAgICpcXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG9wdGlvbkV4aXN0cyhvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgb3B0W3RoaXMubGFiZWxdID09PSBvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcblxcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RzXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQ2xhc3NlcyB0byBiZSBvdXRwdXQgb24gLmRyb3Bkb3duXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NlcygpIHtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHRoaXMub3BlbixcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRoaXMuc2VhcmNoYWJsZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMubG9hZGluZ1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIHBsYWNlaG9sZGVyIHN0cmluZyBpZiBpdCdzIHNldFxcclxcbiAgICAgICAgICAgICAqICYgdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBQbGFjZWhvbGRlciB0ZXh0XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXIoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFbXB0eSAmJiB0aGlzLnBsYWNlaG9sZGVyKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogVGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgb3B0aW9ucywgZmlsdGVyZWRcXHJcXG4gICAgICAgICAgICAgKiBieSB0aGUgc2VhcmNoIGVsZW1lbnRzIHZhbHVlLiBJZiB0YWdnaW5nXFxyXFxuICAgICAgICAgICAgICogdHJ1ZSwgdGhlIHNlYXJjaCB0ZXh0IHdpbGwgYmUgcHJlcGVuZGVkXFxyXFxuICAgICAgICAgICAgICogaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LlxcclxcbiAgICAgICAgICAgICAqXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7YXJyYXl9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zKCkge1xcclxcbiAgICAgICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XFxyXFxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3NlbGYubGFiZWxdLmluZGV4T2Yoc2VsZi5zZWFyY2gpICE9PSAtMVxcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWdnYWJsZSAmJiB0aGlzLnNlYXJjaC5sZW5ndGggJiYgIXRoaXMub3B0aW9uRXhpc3RzKHRoaXMuc2VhcmNoKSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHRoaXMuc2VhcmNoKVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmVuJ3QgYW55IG9wdGlvbnMgc2VsZWN0ZWQuXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBpc1ZhbHVlRW1wdHkoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdGlvbiA9PT0gJ29iamVjdCcpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuc2VsZWN0aW9uKS5sZW5ndGhcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgaW4gYXJyYXkgZm9ybWF0LlxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHZhbHVlQXNBcnJheSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblxcclxcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RoaXMuc2VsZWN0aW9uXVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBbXVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA3IDggOSAxMCAxMiAxMyAxNCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02ZGNiMmMzNCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmRjYjJjMzQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFx1cGxvYWRcXFxcZG5jLWltYWdlLXVwbG9hZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkbmMtaW1hZ2UtdXBsb2FkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZGNiMmMzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZkY2IyYzM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA3IDggOSAxMCAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyghX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZGVmYXVsdEltYWdlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2VGaWxlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwiZmlsZWlucHV0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRmaWxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImZpbGVcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGVcIixcbiAgICAgIFwiaWRcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZUNoYW5nZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvdWRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0uYnRuVGV4dCkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZkY2IyYzM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDcgOCA5IDEwIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24gdi1zZWxlY3RcIixcbiAgICBjbGFzczogX3ZtLmRyb3Bkb3duQ2xhc3Nlc1xuICB9LCBbX2MoJ2RpdicsIHtcbiAgICByZWY6IFwidG9nZ2xlXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJtb3VzZWRvd25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udG9nZ2xlRHJvcGRvd24oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgWyghX3ZtLnNlYXJjaGFibGUgJiYgX3ZtLmlzVmFsdWVFbXB0eSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLnBsYWNlaG9sZGVyKSArIFwiXFxuICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF92bS5fbCgoX3ZtLnZhbHVlQXNBcnJheSksIGZ1bmN0aW9uKG9wdGlvbiwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ3NwYW4nLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0ZWQtdGFnXCJcbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLmdldE9wdGlvbkxhYmVsKG9wdGlvbikpICsgXCJcXG4gICAgICBcIiksIChfdm0ubXVsdGlwbGUpID8gX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnNlbGVjdChvcHRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIsOXXCIpXSldKSA6IF92bS5fZSgpXSlcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWFyY2gpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaGFibGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hhYmxlXCJcbiAgICB9XSxcbiAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICB3aWR0aDogX3ZtLmlzVmFsdWVFbXB0eSA/ICcxMDAlJyA6ICdhdXRvJ1xuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRlYm91bmNlXCI6IF92bS5kZWJvdW5jZSxcbiAgICAgIFwidHlwZVwiOiBcInNlYXJjaFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uc2VhcmNoUGxhY2Vob2xkZXJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc2VhcmNoKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwia2V5ZG93blwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZGVsZXRlXCIsIFs4LCA0Nl0pKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0ubWF5YmVEZWxldGVWYWx1ZSgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJ1cFwiLCAzOCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHlwZUFoZWFkVXAoJGV2ZW50KVxuICAgICAgfSwgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZG93blwiLCA0MCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHlwZUFoZWFkRG93bigkZXZlbnQpXG4gICAgICB9XSxcbiAgICAgIFwia2V5dXBcIjogW2Z1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVzY1wiLCAyNykpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5vbkVzY2FwZSgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMykpIHsgcmV0dXJuOyB9XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHlwZUFoZWFkU2VsZWN0KCRldmVudClcbiAgICAgIH1dLFxuICAgICAgXCJibHVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbiA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgXCJmb2N1c1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW4gPSB0cnVlXG4gICAgICB9LFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpJywge1xuICAgIHJlZjogXCJvcGVuSW5kaWNhdG9yXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwib3Blbi1pbmRpY2F0b3JcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwicHJlc2VudGF0aW9uXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX3QoXCJzcGlubmVyXCIsIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5sb2FkaW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1wiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwic3Bpbm5lclwiXG4gIH0sIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSldKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLm9wZW4pLFxuICAgICAgZXhwcmVzc2lvbjogXCJvcGVuXCJcbiAgICB9XSxcbiAgICByZWY6IFwiZHJvcGRvd25NZW51XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudVwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgJ21heC1oZWlnaHQnOiBfdm0ubWF4SGVpZ2h0XG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJhbnNpdGlvblwiOiBfdm0udHJhbnNpdGlvblxuICAgIH1cbiAgfSwgW192bS5fbCgoX3ZtLmZpbHRlcmVkT3B0aW9ucyksIGZ1bmN0aW9uKG9wdGlvbiwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIGFjdGl2ZTogX3ZtLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gX3ZtLnR5cGVBaGVhZFBvaW50ZXJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcIm1vdXNlb3ZlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ2EnLCB7XG4gICAgICBvbjoge1xuICAgICAgICBcIm1vdXNlZG93blwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uc2VsZWN0KG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmdldE9wdGlvbkxhYmVsKG9wdGlvbikpICsgXCJcXG4gICAgICAgICAgICBcIildKV0pXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSA/IF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkaXZpZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHJhbnNpdGlvblwiOiBcImZhZGVcIlxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0uZmlsdGVyZWRPcHRpb25zLmxlbmd0aCkgPyBfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9LCBbX3ZtLl90KFwibm8tb3B0aW9uc1wiLCBbX3ZtLl92KFwiU29ycnksIG5vIG1hdGNoaW5nIG9wdGlvbnMuXCIpXSldLCAyKSA6IF92bS5fZSgpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05ZmQ3NTM3ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDcgOCA5IDEwIDEyIDEzIDE0IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNjM0MDAyMzlcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZkY2IyYzM0IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA3IDggOSAxMCAxMiAxMyAxNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZDkzMDRlNTRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA3IDggOSAxMCAxMiAxMyAxNCIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiZW5cIjoge1xyXG4gICAgICAgIFwiYXRobGV0ZXNcIjoge1xyXG4gICAgICAgICAgICBcIm1cIjogXCJNYWxlXCIsXHJcbiAgICAgICAgICAgIFwid1wiOiBcIkZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcIm5cIjogXCJNaXh0b1wiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiVGhlIEF0aGxldGUgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgQXRobGV0ZSB3YXMgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiVGhlIEF0aGxldGUgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwicHJvZmlsZV9waWN0dXJlX2RlbGV0ZWRcIjogXCJUaGUgcHJvZmlsZSBwaWN0dXJlIHdhcyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIlRoZSBBdGhsZXRlIGRvZXNuJ3QgZXhpc3RcIixcclxuICAgICAgICAgICAgXCJmaXJzdF9uYW1lXCI6IFwiRmlyc3QgTmFtZVwiLFxyXG4gICAgICAgICAgICBcImxhc3RfbmFtZVwiOiBcIkxhc3QgTmFtZVwiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogXCJDb2RlXCIsXHJcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIkNvdW50cnlcIixcclxuICAgICAgICAgICAgXCJjb3VudHJpZXNcIjogXCJDb3VudHJpZXNcIixcclxuICAgICAgICAgICAgXCJzcG9ydFwiOiBcIlNwb3J0XCIsXHJcbiAgICAgICAgICAgIFwic3BlY2lhbHR5XCI6IFwiU3BlY2lhbHR5XCIsXHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJDYXRlZ29yeVwiLFxyXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjdCBhbiBvcHRpb25cIixcclxuICAgICAgICAgICAgXCJ1cGxvYWRfaW1hZ2VcIjogXCJVcGxvYWQgaW1hZ2VcIixcclxuICAgICAgICAgICAgXCJyYW5raW5nXCI6IFwiUmFua2luZ1wiLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiBcIkhlaWdodFwiLFxyXG4gICAgICAgICAgICBcIndlaWdodFwiOiBcIldlaWdodFwiLFxyXG4gICAgICAgICAgICBcImZlZGVyYXRpb25fY29kZVwiOiBcIkZlZGVyYXRpb24gQ29kZVwiLFxyXG4gICAgICAgICAgICBcIm5hdGlvbmFsX2NvZGVcIjogXCJOYXRpb25hbCBDb2RlXCIsXHJcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTmV3IEF0aGxldGVcIixcclxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIkFyZSB5b3Ugc3VyZT8gdGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZVwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9hdGhsZXRlXCI6IFwiRGVsZXRlIEF0aGxldGVcIixcclxuICAgICAgICAgICAgXCJhdGhsZXRlX2luZm9cIjogXCJBdGhsZXRlIEluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiZ29sZFwiOiBcIkdvbGRcIixcclxuICAgICAgICAgICAgXCJzaWx2ZXJcIjogXCJTaWx2ZXJcIixcclxuICAgICAgICAgICAgXCJicm9uemVcIjogXCJCcm9uemVcIixcclxuICAgICAgICAgICAgXCJjbHViXCI6IFwiQ2x1YlwiLFxyXG4gICAgICAgICAgICBcImF0aGxldGVcIjogXCJBdGhsZXRlXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiR2VuZGVyXCIsXHJcbiAgICAgICAgICAgIFwiZXZlbnRzXCI6IFwiRXZlbnRzXCIsXHJcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2hhbXBpb25zaGlwXCIsXHJcbiAgICAgICAgICAgIFwiYXRobGV0ZXNcIjogXCJBdGhsZXRlc1wiLFxyXG4gICAgICAgICAgICBcImZpbHRlcl9ieV9ldmVudHNcIjogXCJGaWx0ZXIgQnkgRXZlbnRcIixcclxuICAgICAgICAgICAgXCJmaWx0ZXJfYnlcIjogXCJGaWx0ZXIgQnlcIixcclxuICAgICAgICAgICAgXCJjbGFzc2lmaWNhdGlvblwiOiBcIkNsYXNzaWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwibm9fcmVzdWx0c1wiOiBcIlRoZXJlIGFyZSBubyBwdWJsaXNoZWQgcmVzdWx0c1wiLFxyXG4gICAgICAgICAgICBcImxvYWRpbmdcIjogXCJMb2FkaW5nXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IFwiU2VsZWN0XCIsXHJcbiAgICAgICAgICAgIFwic2VhcmNoX2F0aGxldGVcIjogXCJTZWFyY2ggQXRobGV0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiZXNcIjoge1xyXG4gICAgICAgIFwiYXRobGV0ZXNcIjoge1xyXG4gICAgICAgICAgICBcIm1cIjogXCJNYXNjdWxpbm9cIixcclxuICAgICAgICAgICAgXCJ3XCI6IFwiRmVtZW5pbm9cIixcclxuICAgICAgICAgICAgXCJuXCI6IFwiTWl4dG9cIixcclxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIGF0bGV0YSBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxyXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgYXRsZXRhIGZ1ZSBhY3R1YWxpemFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcclxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiRWwgYXRsZXRhIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwicHJvZmlsZV9waWN0dXJlX2RlbGV0ZWRcIjogXCJMYSBpbWFnZW4gZGUgcGVyZmlsIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiRWwgYXRsZXRhIG5vIGV4aXN0ZVwiLFxyXG4gICAgICAgICAgICBcImZpcnN0X25hbWVcIjogXCJOb21icmVcIixcclxuICAgICAgICAgICAgXCJsYXN0X25hbWVcIjogXCJBcGVsbGlkb1wiLFxyXG4gICAgICAgICAgICBcImNvZGVcIjogXCJDw7NkaWdvXCIsXHJcbiAgICAgICAgICAgIFwiY291bnRyeVwiOiBcIlBhw61zXCIsXHJcbiAgICAgICAgICAgIFwiY291bnRyaWVzXCI6IFwiUGFpc2VzXCIsXHJcbiAgICAgICAgICAgIFwic3BvcnRcIjogXCJEZXBvcnRlXCIsXHJcbiAgICAgICAgICAgIFwic3BlY2lhbHR5XCI6IFwiRXNwZWNpYWxpZGFkXCIsXHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJDYXRlZ29yw61hXCIsXHJcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjY2lvbmVzXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjY2lvbmUgdW5hIG9wY2nDs25cIixcclxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uc1wiOiBcIlNlbGVjY2lvbmUgdW5hIG9wY2nDs24gbyBtw6FzIG9wY2lvbmVzXCIsXHJcbiAgICAgICAgICAgIFwidXBsb2FkX2ltYWdlXCI6IFwiU3ViaXIgSW1hZ2VuXCIsXHJcbiAgICAgICAgICAgIFwicmFua2luZ1wiOiBcIlJhbmtpbmdcIixcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogXCJBbHR1cmFcIixcclxuICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJQZXNvXCIsXHJcbiAgICAgICAgICAgIFwiZmVkZXJhdGlvbl9jb2RlXCI6IFwiQ8OzZGlnbyBkZSBGZWRlcmFjacOzblwiLFxyXG4gICAgICAgICAgICBcIm5hdGlvbmFsX2NvZGVcIjogXCJDw7NkaWdvIE5hY2lvbmFsXCIsXHJcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiQWN0dWFsaXphclwiLFxyXG4gICAgICAgICAgICBcIm5ld1wiOiBcIk51ZXZvIEF0bGV0YVwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9hdGhsZXRlXCI6IFwiRWxpbWluYXIgQXRsZXRhXCIsXHJcbiAgICAgICAgICAgIFwiYXRobGV0ZV9pbmZvXCI6IFwiSW5mb3JtYWNpw7NuIGRlbCBBdGxldGFcIixcclxuICAgICAgICAgICAgXCJnb2xkXCI6IFwiT3JvXCIsXHJcbiAgICAgICAgICAgIFwic2lsdmVyXCI6IFwiUGxhdGFcIixcclxuICAgICAgICAgICAgXCJicm9uemVcIjogXCJCcm9uY2VcIixcclxuICAgICAgICAgICAgXCJjbHViXCI6IFwiQ2x1YlwiLFxyXG4gICAgICAgICAgICBcImF0aGxldGVcIjogXCJBdGxldGFcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJHZW5lcm9cIixcclxuICAgICAgICAgICAgXCJldmVudHNcIjogXCJFdmVudG9zXCIsXHJcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2FtcGVvbmF0b3NcIixcclxuICAgICAgICAgICAgXCJhdGhsZXRlc1wiOiBcIkF0bGV0YXNcIixcclxuICAgICAgICAgICAgXCJmaWx0ZXJfYnlfZXZlbnRzXCI6IFwiRmlsdHJhciBQb3IgRXZlbnRvXCIsXHJcbiAgICAgICAgICAgIFwiZmlsdGVyX2J5XCI6IFwiRmlsdHJhciBQb3JcIixcclxuICAgICAgICAgICAgXCJjbGFzc2lmaWNhdGlvblwiOiBcIkNsYXNpZmljYWNpw7NuXCIsXHJcbiAgICAgICAgICAgIFwibm9fcmVzdWx0c1wiOiBcIkHDum4gbm8gaGF5IHJlc3VsdGFkb3MgcHVibGljYWRvc1wiLFxyXG4gICAgICAgICAgICBcImxvYWRpbmdcIjogXCJDYXJnYW5kb1wiLFxyXG4gICAgICAgICAgICBcInNlbGVjdFwiOiBcIlNlbGVjY2lvbmFyXCIsXHJcbiAgICAgICAgICAgIFwic2VhcmNoX2F0aGxldGVcIjogXCJCdXNjYXIgQXRsZXRhXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL2F0aGxldGVzL2F0aGxldGVzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9hdXRoL3VzZXI/aW5jbHVkZT1hdGhsZXRlLnNwb3J0LGF0aGxldGUuc3BlY2lhbHR5LGF0aGxldGUuY291bnRyeSxhdGhsZXRlLmNhdGVnb3J5LGF0aGxldGUuZ2VuZGVyJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShpZCwgdXNlciwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wdXQoJy9hcGkvdXNlcicsIHVzZXIsIHtlbXVsYXRlSFRUUDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZSh1c2VyLHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9hY2NlcHQnLHVzZXIpXHJcbiAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZCh1c2VyLHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9wYXNzd29yZC9lbWFpbCcsdXNlcilcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU2VydmljZS5qcyIsIjwhLS1zdXBwcmVzcyBBTEwgLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGFkbWluLWhlYWRlciA6dGl0bGU9XCIkdCgnYWRtaW4ubXlfcHJvZmlsZScpXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L2FkbWluLWhlYWRlcj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCIgaWQ9XCJhdGhsZXRlLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+e3skdCgnYWRtaW4ubXlfcHJvZmlsZScpfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmJveC1oZWFkZXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdmaXJzdF9uYW1lJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCIgZGF0YS12di1lcnJvcj1cIlwiPnt7JHQoJ2F0aGxldGVzLmZpcnN0X25hbWUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdhdGhsZXRlcy5maXJzdF9uYW1lJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuZmlyc3RfbmFtZScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCdmaXJzdF9uYW1lJylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2ZpcnN0X25hbWUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2xhc3RfbmFtZScpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCIgZGF0YS12di1lcnJvcj1cIlwiPnt7JHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2F0aGxldGVzLmxhc3RfbmFtZScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnbGFzdF9uYW1lJylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2xhc3RfbmFtZScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZW1haWwnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgZGF0YS12di1lcnJvcj1cIlwiPnt7JHQoJ2F0aGxldGVzLmVtYWlsJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLmVtYWlsJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZHxlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdhdGhsZXRlcy5lbWFpbCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZW1haWwnKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZW1haWwnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRuYy1pbWFnZS11cGxvYWRlciA6YnRuLXRleHQ9XCIkdCgnYXRobGV0ZXMudXBsb2FkX2ltYWdlJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItdmFsaWRhdGlvbi1tc2c9XCIkdCgndmFsaWRhdGlvbi5pbWFnZScse2F0dHJpYnV0ZTokdCgnYXRobGV0ZXMudXBsb2FkX2ltYWdlJyl9KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbWFnZT1cInVzZXIuaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0LWltYWdlPVwiL2ltYWdlcy9taXNzaW5nL2F0aGxldGUvbWlzc2luZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ1cGxvYWRlclwiPjwvZG5jLWltYWdlLXVwbG9hZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmZWRlcmF0aW9uX2NvZGVcIiBkYXRhLXZ2LWVycm9yPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2F0aGxldGVzLmZlZGVyYXRpb25fY29kZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY3JlZGl0LWNhcmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmZWRlcmF0aW9uX2NvZGVcIiBuYW1lPVwiZmVkZXJhdGlvbl9jb2RlXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLmZlZGVyYXRpb25fY29kZScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUuZmVkZXJhdGlvbl9jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hdGlvbmFsX2NvZGVcIiBkYXRhLXZ2LWVycm9yPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2F0aGxldGVzLm5hdGlvbmFsX2NvZGUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNyZWRpdC1jYXJkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmF0aW9uYWxfY29kZVwiIG5hbWU9XCJuYXRpb25hbF9jb2RlXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLm5hdGlvbmFsX2NvZGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5hdGhsZXRlLm5hdGlvbmFsX2NvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdhdGhsZXRlc3BvcnQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImF0aGxldGVzcG9ydFwiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy5zcG9ydCcpfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJ1c2VyLmF0aGxldGUuc3BvcnRcIiBsYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwic3BvcnRDaGFuZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic3BvcnRzXCI+PC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhdGhsZXRlc3BvcnRcIiB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYXRobGV0ZS5zcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhdGhsZXRlc3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuc3BvcnQnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ2F0aGxldGVzcG9ydCcpXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdhdGhsZXRlc3BvcnQnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3NwZWNpYWx0eScpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3BlY2lhbHR5X2lucHV0XCIgZGF0YS12di1lcnJvcj1cIlwiPnt7JHQoJ2F0aGxldGVzLnNwZWNpYWx0eScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJ1c2VyLmF0aGxldGUuc3BlY2lhbHR5XCIgbGFiZWw9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJzcGVjaWFsdHlDaGFuZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzcGVjaWFsdGllc1wiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3BlY2lhbHR5X2lucHV0XCIgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUuc3BlY2lhbHR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwZWNpYWx0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbCBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdhdGhsZXRlcy5zcGVjaWFsdHknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ3NwZWNpYWx0eScpXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdzcGVjaWFsdHknKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdjYXRlZ29yeScpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2F0ZWdvcnlfaW5wdXRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuY2F0ZWdvcnknKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwidXNlci5hdGhsZXRlLmNhdGVnb3J5XCIgbGFiZWw9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJjYXRlZ29yeUNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImNhdGVnb3JpZXNcIj48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNhdGVnb3J5X2lucHV0XCIgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUuY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuY2F0ZWdvcnknKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIHYtc2hvdz1cImVycm9ycy5oYXMoJ2NhdGVnb3J5JylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2NhdGVnb3J5JykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdjb3VudHJ5JykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb3VudHJ5X2lucHV0XCIgZGF0YS12di1lcnJvcj1cIlwiPnt7JHQoJ2F0aGxldGVzLmNvdW50cnknKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwidXNlci5hdGhsZXRlLmNvdW50cnlcIiBsYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tY2hhbmdlPVwiY291bnRyeUNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJjb3VudHJpZXNcIj48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvdW50cnlfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYXRobGV0ZS5jb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdW50cnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuY291bnRyeScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCIgdi1zaG93PVwiZXJyb3JzLmhhcygnY291bnRyeScpXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdjb3VudHJ5JykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZ2VuZGVyJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJnZW5kZXJfaW5wdXRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuZ2VuZGVyJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDp2YWx1ZT1cInVzZXIuYXRobGV0ZS5nZW5kZXJcIiBsYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImdlbmRlckNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImdlbmRlcnNcIj48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImdlbmRlcl9pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5hdGhsZXRlLmdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWwgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnYXRobGV0ZXMuZ2VuZGVyJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIiB2LXNob3c9XCJlcnJvcnMuaGFzKCdnZW5kZXInKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZ2VuZGVyJykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoZWlnaHRcIiBkYXRhLXZ2LWVycm9yPVwiXCI+e3skdCgnYXRobGV0ZXMuaGVpZ2h0Jyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvd3MtdlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImhlaWdodFwiIG5hbWU9XCJoZWlnaHRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMuaGVpZ2h0JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9XCJoZWlnaHRcIiBpbml0aWFsPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmF0aGxldGUuaGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIndlaWdodFwiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy53ZWlnaHQnKX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRhY2hvbWV0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ3ZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2F0aGxldGVzLndlaWdodCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPVwid2VpZ2h0XCIgaW5pdGlhbD1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5hdGhsZXRlLndlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmFua2luZ1wiIGRhdGEtdnYtZXJyb3I9XCJcIj57eyR0KCdhdGhsZXRlcy5yYW5raW5nJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaWduYWxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyYW5raW5nXCIgbmFtZT1cInJhbmtpbmdcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnYXRobGV0ZXMucmFua2luZycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPVwicmFua2luZ1wiIGluaXRpYWw9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuYXRobGV0ZS5yYW5raW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdmb3Jtcy5iYWNrJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBocmVmPVwiIyFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnZGlzYWJsZWQnOnVwZGF0aW5nfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uU3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZm9ybXMuc2F2ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5ib3gtYm9keSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+PCEtLSAvLmJveCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XHJcbiAgICBpbXBvcnQgYXRobGV0ZUxvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL2F0aGxldGVzL2F0aGxldGVzLmpzJztcclxuICAgIGltcG9ydCBkbmNJbWFnZVVwbG9hZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWUnO1xyXG4gICAgaW1wb3J0IHZTZWxlY3QgZnJvbSBcImJhc2UvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVwiXHJcbiAgICBpbXBvcnQgYWRtaW5IZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcclxuICAgIGltcG9ydCBmb3JtRGF0YU9iamVjdFBhcnNlciBmcm9tICdiYXNlL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyJ1xyXG4gICAgaW1wb3J0IHttYXBBY3Rpb25zfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclNlcnZpY2UnXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAndlNlbGVjdCc6IHZTZWxlY3QsXHJcbiAgICAgICAgICAgICdhZG1pbkhlYWRlcic6IGFkbWluSGVhZGVyLFxyXG4gICAgICAgICAgICAnZG5jSW1hZ2VVcGxvYWRlcic6IGRuY0ltYWdlVXBsb2FkZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1peGluczogW2Zvcm1EYXRhT2JqZWN0UGFyc2VyXSxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFJvbGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXRobGV0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcG9ydDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uaG9tZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9teS1wcm9maWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi5teV9wcm9maWxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL215LXByb2ZpbGUvdXBkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi51cGRhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcG9ydHMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLnNwb3J0c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcGVjaWFsdGllcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uc3BlY2lhbHRpZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcmllcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZW5kZXJzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5nZW5kZXJzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvdW50cmllcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uY291bnRyaWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoYW1waW9uc2hpcHMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLmNoYW1waW9uc2hpcHNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhbXBpb25zaGlwRXZlbnRzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5ldmVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYWxlczogYXRobGV0ZUxvY2FsZXMsXHJcbiAgICAgICAgY3JlYXRlZCgpe1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3BvcnRzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BvcnRzKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYXRlZ29yaWVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY291bnRyaWVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q291bnRyaWVzKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFtcGlvbnNoaXBzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2hhbXBpb25zaGlwcygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2VuZGVycy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEdlbmRlcnMoKTtcclxuICAgICAgICAgICAgdXNlclNlcnZpY2Uuc2hvdyh0aGlzLiRhdXRoLnVzZXIoKS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmF0aGxldGUgPSByZXNwb25zZS5kYXRhLmF0aGxldGUgPyByZXNwb25zZS5kYXRhLmF0aGxldGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG9ydDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWx0eTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTcGVjaWFsdGllcyh0aGlzLnVzZXIuYXRobGV0ZS5zcG9ydC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuYXRobGV0ZS5jaGFtcGlvbnNoaXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENoYW1waW9uc2hpcEV2ZW50cyh0aGlzLnVzZXIuYXRobGV0ZS5jaGFtcGlvbnNoaXAuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcclxuICAgICAgICAgICAgICAgIGdldFNwb3J0czogJ2NvbW1vbjpnZXRTcG9ydHMnLFxyXG4gICAgICAgICAgICAgICAgZ2V0Q2F0ZWdvcmllczogJ2NvbW1vbjpnZXRDYXRlZ29yaWVzJyxcclxuICAgICAgICAgICAgICAgIGdldENvdW50cmllczogJ2NvbW1vbjpnZXRDb3VudHJpZXMnLFxyXG4gICAgICAgICAgICAgICAgZ2V0Q2hhbXBpb25zaGlwczogJ2NvbW1vbjpnZXRDaGFtcGlvbnNoaXBzJyxcclxuICAgICAgICAgICAgICAgIGdldFNwZWNpYWx0aWVzOiAnY29tbW9uOmdldFNwZWNpYWx0aWVzJyxcclxuICAgICAgICAgICAgICAgIHNldFNwZWNpYWx0aWVzOiAnY29tbW9uOnNldFNwZWNpYWx0aWVzJyxcclxuICAgICAgICAgICAgICAgIGdldENoYW1waW9uc2hpcEV2ZW50czogJ2NvbW1vbjpnZXRDaGFtcGlvbnNoaXBFdmVudHMnLFxyXG4gICAgICAgICAgICAgICAgZ2V0R2VuZGVyczogJ2NvbW1vbjpnZXRHZW5kZXJzJyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNsb3NlKGV2dCl7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50SHViLiRvbignbW9kYWwtY2xvc2UnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BvcnRDaGFuZ2VkKHNwb3J0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLnNwb3J0ID0gc3BvcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIuc3BvcnQgPSBzcG9ydDtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuYXRobGV0ZS5zcG9ydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BlY2lhbHRpZXModGhpcy51c2VyLmF0aGxldGUuc3BvcnQuaWQsIChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmZpbHRlcigoc3BlY2lhbHR5KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwZWNpYWx0eS5pZCA9PSBzZWxmLnVzZXIuYXRobGV0ZS5zcGVjaWFsdHkuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXNlci5hdGhsZXRlLnNwZWNpYWx0eSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTcGVjaWFsdGllcyhbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLmF0aGxldGUuc3BlY2lhbHR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwZWNpYWx0eUNoYW5nZWQoc3BlY2lhbHR5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLnNwZWNpYWx0eSA9IHNwZWNpYWx0eVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yeUNoYW5nZWQoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyLmF0aGxldGUuY2F0ZWdvcnkgPSBjYXRlZ29yeVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb3VudHJ5Q2hhbmdlZChjb3VudHJ5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLmNvdW50cnkgPSBjb3VudHJ5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdlbmRlckNoYW5nZWQoZ2VuZGVyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLmdlbmRlciA9IGdlbmRlclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudENoYW5nZWQoZXZlbnRzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlci5hdGhsZXRlLmV2ZW50cyA9IGV2ZW50c1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkJhY2soZXZ0KXtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VyLnZpZXcnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGFtcGlvbnNoaXBDaGFuZ2VkKGNoYW1waW9uc2hpcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYXRobGV0ZS5jaGFtcGlvbnNoaXAgPSBjaGFtcGlvbnNoaXA7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5hdGhsZXRlLmNoYW1waW9uc2hpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2hhbXBpb25zaGlwRXZlbnRzKHRoaXMudXNlci5hdGhsZXRlLmNoYW1waW9uc2hpcC5pZCwgKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZmlsdGVyKChldmVudCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5pZCA9PSBzZWxmLnVzZXIuYXRobGV0ZS5ldmVudC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VyLmF0aGxldGUuZXZlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY29tbW9uOlNFVF9TUEVDSUFMVElFUycsIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LnNwZWNpYWx0eSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU3VibWl0KGV2dCl7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCkudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHNlbGYuJHJlZnMudXBsb2FkZXIuZ2V0RmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9maWxlX3BpY3R1cmUnLCBzZWxmLiRyZWZzLnVwbG9hZGVyLmdldEZpbGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaXJzdF9uYW1lJywgc2VsZi51c2VyLmZpcnN0X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbGFzdF9uYW1lJywgc2VsZi51c2VyLmxhc3RfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHNlbGYudXNlci5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudXNlci5hdGhsZXRlLmZlZGVyYXRpb25fY29kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmZWRlcmF0aW9uX2NvZGUnLCBzZWxmLnVzZXIuYXRobGV0ZS5mZWRlcmF0aW9uX2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnVzZXIuYXRobGV0ZS5uYXRpb25hbF9jb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hdGlvbmFsX2NvZGUnLCBzZWxmLnVzZXIuYXRobGV0ZS5uYXRpb25hbF9jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Nwb3J0X2lkJywgc2VsZi51c2VyLmF0aGxldGUuc3BvcnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3BlY2lhbHR5X2lkJywgc2VsZi51c2VyLmF0aGxldGUuc3BlY2lhbHR5LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NhdGVnb3J5X2lkJywgc2VsZi51c2VyLmF0aGxldGUuY2F0ZWdvcnkuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY291bnRyeV9pZCcsIHNlbGYudXNlci5hdGhsZXRlLmNvdW50cnkuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZ2VuZGVyJywgc2VsZi51c2VyLmF0aGxldGUuZ2VuZGVyLmdlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudXNlci5hdGhsZXRlLmhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdoZWlnaHQnLCBzZWxmLnVzZXIuYXRobGV0ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnVzZXIuYXRobGV0ZS53ZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnd2VpZ2h0Jywgc2VsZi51c2VyLmF0aGxldGUud2VpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi51c2VyLmF0aGxldGUucmFua2luZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyYW5raW5nJywgc2VsZi51c2VyLmF0aGxldGUucmFua2luZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTZXJ2aWNlLnVwZGF0ZShzZWxmLnVzZXIuaWQsIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXV0aC5mZXRjaCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5zdWNjZXNzVG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXNlci52aWV3J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZXJyb3IgaW4gcmVzcG9uc2UuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1tlcnJvcl0uZm9yRWFjaCgodmFsaWRhdGlvbkVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdCh2YWxpZGF0aW9uRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdChyZXNwb25zZS5lcnJvcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KHRoaXMuJHQoJ2FkbWluLnZhbGlkYXRpb25fZXJyb3InKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWRpdC52dWU/MmRkYzE5ZjciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnYWRtaW4taGVhZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IF92bS4kdCgnYWRtaW4ubXlfcHJvZmlsZScpLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgW19jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImF0aGxldGUtZm9ybVwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3hcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyIHdpdGgtYm9yZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2FkbWluLm15X3Byb2ZpbGUnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdmaXJzdF9uYW1lJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZmlyc3RfbmFtZVwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMuZmlyc3RfbmFtZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51c2VyLmZpcnN0X25hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmZpcnN0X25hbWVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZmlyc3RfbmFtZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmlyc3RfbmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLmZpcnN0X25hbWUnKSxcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5maXJzdF9uYW1lJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udXNlci5maXJzdF9uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuZmlyc3RfbmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdmaXJzdF9uYW1lJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdmaXJzdF9uYW1lJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZmlyc3RfbmFtZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2xhc3RfbmFtZScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImxhc3RfbmFtZVwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMubGFzdF9uYW1lJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5sYXN0X25hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmxhc3RfbmFtZVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibGFzdF9uYW1lXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJsYXN0X25hbWVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy5sYXN0X25hbWUnKSxcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5sYXN0X25hbWUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmxhc3RfbmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmxhc3RfbmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdsYXN0X25hbWUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2xhc3RfbmFtZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2xhc3RfbmFtZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2VtYWlsJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZW1haWxcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLmVtYWlsJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5lbWFpbCksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIuZW1haWxcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImVtYWlsXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLmVtYWlsJyksXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnYXRobGV0ZXMuZW1haWwnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmVtYWlsKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZW1haWwnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2VtYWlsJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZW1haWwnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02IHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdkbmMtaW1hZ2UtdXBsb2FkZXInLCB7XG4gICAgcmVmOiBcInVwbG9hZGVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYnRuLXRleHRcIjogX3ZtLiR0KCdhdGhsZXRlcy51cGxvYWRfaW1hZ2UnKSxcbiAgICAgIFwiZXJyb3ItdmFsaWRhdGlvbi1tc2dcIjogX3ZtLiR0KCd2YWxpZGF0aW9uLmltYWdlJywge1xuICAgICAgICBhdHRyaWJ1dGU6IF92bS4kdCgnYXRobGV0ZXMudXBsb2FkX2ltYWdlJylcbiAgICAgIH0pLFxuICAgICAgXCJpbWFnZVwiOiBfdm0udXNlci5pbWFnZSxcbiAgICAgIFwiZGVmYXVsdC1pbWFnZVwiOiBcIi9pbWFnZXMvbWlzc2luZy9hdGhsZXRlL21pc3NpbmcucG5nXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJmZWRlcmF0aW9uX2NvZGVcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLmZlZGVyYXRpb25fY29kZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSgzKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuYXRobGV0ZS5mZWRlcmF0aW9uX2NvZGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmF0aGxldGUuZmVkZXJhdGlvbl9jb2RlXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImZlZGVyYXRpb25fY29kZVwiLFxuICAgICAgXCJuYW1lXCI6IFwiZmVkZXJhdGlvbl9jb2RlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuZmVkZXJhdGlvbl9jb2RlJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udXNlci5hdGhsZXRlLmZlZGVyYXRpb25fY29kZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmF0aGxldGUuZmVkZXJhdGlvbl9jb2RlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmF0aW9uYWxfY29kZVwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMubmF0aW9uYWxfY29kZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSg0KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuYXRobGV0ZS5uYXRpb25hbF9jb2RlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlci5hdGhsZXRlLm5hdGlvbmFsX2NvZGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmF0aW9uYWxfY29kZVwiLFxuICAgICAgXCJuYW1lXCI6IFwibmF0aW9uYWxfY29kZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLm5hdGlvbmFsX2NvZGUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUubmF0aW9uYWxfY29kZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmF0aGxldGUubmF0aW9uYWxfY29kZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2F0aGxldGVzcG9ydCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImF0aGxldGVzcG9ydFwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMuc3BvcnQnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCd2LXNlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0udXNlci5hdGhsZXRlLnNwb3J0LFxuICAgICAgXCJsYWJlbFwiOiBcIm5hbWVcIixcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5zcG9ydENoYW5nZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5zcG9ydHNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5hdGhsZXRlLnNwb3J0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlci5hdGhsZXRlLnNwb3J0XCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJhdGhsZXRlc3BvcnRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiYXRobGV0ZXNwb3J0XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnYXRobGV0ZXMuc3BvcnQnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUuc3BvcnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udXNlci5hdGhsZXRlLnNwb3J0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdhdGhsZXRlc3BvcnQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2F0aGxldGVzcG9ydCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2F0aGxldGVzcG9ydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnc3BlY2lhbHR5JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BlY2lhbHR5X2lucHV0XCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5zcGVjaWFsdHknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Ytc2VsZWN0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS51c2VyLmF0aGxldGUuc3BlY2lhbHR5LFxuICAgICAgXCJsYWJlbFwiOiBcIm5hbWVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy5zZWxlY3Rfb3B0aW9uJyksXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uc3BlY2lhbHR5Q2hhbmdlZCxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uc3BlY2lhbHRpZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXNlci5hdGhsZXRlLnNwZWNpYWx0eSksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIuYXRobGV0ZS5zcGVjaWFsdHlcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInNwZWNpYWx0eV9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJzcGVjaWFsdHlcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5zcGVjaWFsdHknKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUuc3BlY2lhbHR5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuYXRobGV0ZS5zcGVjaWFsdHkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3NwZWNpYWx0eScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnc3BlY2lhbHR5JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnc3BlY2lhbHR5JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2NhdGVnb3J5JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiY2F0ZWdvcnlfaW5wdXRcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLmNhdGVnb3J5JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd2LXNlbGVjdCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0udXNlci5hdGhsZXRlLmNhdGVnb3J5LFxuICAgICAgXCJsYWJlbFwiOiBcIm5hbWVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy5zZWxlY3Rfb3B0aW9uJyksXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY2F0ZWdvcnlDaGFuZ2VkLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5jYXRlZ29yaWVzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuYXRobGV0ZS5jYXRlZ29yeSksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIuYXRobGV0ZS5jYXRlZ29yeVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY2F0ZWdvcnlfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiY2F0ZWdvcnlcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5jYXRlZ29yeScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnVzZXIuYXRobGV0ZS5jYXRlZ29yeSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmF0aGxldGUuY2F0ZWdvcnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2NhdGVnb3J5JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdjYXRlZ29yeScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2NhdGVnb3J5JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdjb3VudHJ5JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiY291bnRyeV9pbnB1dFwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMuY291bnRyeScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnVzZXIuYXRobGV0ZS5jb3VudHJ5LFxuICAgICAgXCJsYWJlbFwiOiBcIm5hbWVcIixcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jb3VudHJ5Q2hhbmdlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdhdGhsZXRlcy5zZWxlY3Rfb3B0aW9uJyksXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmNvdW50cmllc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51c2VyLmF0aGxldGUuY291bnRyeSksXG4gICAgICBleHByZXNzaW9uOiBcInVzZXIuYXRobGV0ZS5jb3VudHJ5XCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjb3VudHJ5X2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImNvdW50cnlcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdhdGhsZXRlcy5jb3VudHJ5JylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udXNlci5hdGhsZXRlLmNvdW50cnkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udXNlci5hdGhsZXRlLmNvdW50cnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2NvdW50cnknKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2NvdW50cnknKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdjb3VudHJ5JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2dlbmRlcicpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImdlbmRlcl9pbnB1dFwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMuZ2VuZGVyJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnVzZXIuYXRobGV0ZS5nZW5kZXIsXG4gICAgICBcImxhYmVsXCI6IFwibmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5nZW5kZXJDaGFuZ2VkLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5nZW5kZXJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuYXRobGV0ZS5nZW5kZXIpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmF0aGxldGUuZ2VuZGVyXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJnZW5kZXJfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZ2VuZGVyXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnYXRobGV0ZXMuZ2VuZGVyJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udXNlci5hdGhsZXRlLmdlbmRlcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmF0aGxldGUuZ2VuZGVyID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdnZW5kZXInKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2dlbmRlcicpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2dlbmRlcicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImhlaWdodFwiLFxuICAgICAgXCJkYXRhLXZ2LWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYXRobGV0ZXMuaGVpZ2h0JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSg1KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuYXRobGV0ZS5oZWlnaHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmF0aGxldGUuaGVpZ2h0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImhlaWdodFwiLFxuICAgICAgXCJuYW1lXCI6IFwiaGVpZ2h0XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnYXRobGV0ZXMuaGVpZ2h0JyksXG4gICAgICBcImZpZWxkXCI6IFwiaGVpZ2h0XCIsXG4gICAgICBcImluaXRpYWxcIjogXCJvZmZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUuaGVpZ2h0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnVzZXIuYXRobGV0ZS5oZWlnaHQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJ3ZWlnaHRcIixcbiAgICAgIFwiZGF0YS12di1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2F0aGxldGVzLndlaWdodCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oNiksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51c2VyLmF0aGxldGUud2VpZ2h0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlci5hdGhsZXRlLndlaWdodFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ3ZWlnaHRcIixcbiAgICAgIFwibmFtZVwiOiBcIndlaWdodFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLndlaWdodCcpLFxuICAgICAgXCJmaWVsZFwiOiBcIndlaWdodFwiLFxuICAgICAgXCJpbml0aWFsXCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udXNlci5hdGhsZXRlLndlaWdodClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmF0aGxldGUud2VpZ2h0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJyYW5raW5nXCIsXG4gICAgICBcImRhdGEtdnYtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhdGhsZXRlcy5yYW5raW5nJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCJcbiAgfSwgW192bS5fbSg3KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVzZXIuYXRobGV0ZS5yYW5raW5nKSxcbiAgICAgIGV4cHJlc3Npb246IFwidXNlci5hdGhsZXRlLnJhbmtpbmdcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwicmFua2luZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwicmFua2luZ1wiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2F0aGxldGVzLnJhbmtpbmcnKSxcbiAgICAgIFwiZmllbGRcIjogXCJyYW5raW5nXCIsXG4gICAgICBcImluaXRpYWxcIjogXCJvZmZcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS51c2VyLmF0aGxldGUucmFua2luZylcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS51c2VyLmF0aGxldGUucmFua2luZyA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25CYWNrXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuYmFjaycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdkaXNhYmxlZCc6IF92bS51cGRhdGluZ1xuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiLFxuICAgICAgXCJocmVmXCI6IFwiIyFcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uU3VibWl0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuc2F2ZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pXSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2VyXCJcbiAgfSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlclwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNyZWRpdC1jYXJkXCJcbiAgfSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY3JlZGl0LWNhcmRcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hcnJvd3MtdlwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRhY2hvbWV0ZXJcIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hZGRvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zaWduYWxcIlxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYmE5ODc5MWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWJhOTg3OTFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Byb2ZpbGUvZWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIl0sInNvdXJjZVJvb3QiOiIifQ==