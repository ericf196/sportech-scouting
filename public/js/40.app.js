webpackJsonp([40,29],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(294),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\events\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-893f4f30", Component.options)
  } else {
    hotAPI.reload("data-v-893f4f30", Component.options)
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

/***/ 223:
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

/***/ 224:
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

/***/ 240:
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

/***/ 294:
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

var _events = __webpack_require__(223);

var _events2 = _interopRequireDefault(_events);

var _formDataParser = __webpack_require__(199);

var _formDataParser2 = _interopRequireDefault(_formDataParser);

var _vuex = __webpack_require__(4);

var _dncImageUpload = __webpack_require__(216);

var _dncImageUpload2 = _interopRequireDefault(_dncImageUpload);

var _select = __webpack_require__(200);

var _select2 = _interopRequireDefault(_select);

var _pageHeader = __webpack_require__(194);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _eventService = __webpack_require__(240);

var _eventService2 = _interopRequireDefault(_eventService);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        vSelect: _select2.default,
        adminHeader: _pageHeader2.default,
        dncImageUploader: _dncImageUpload2.default,
        "vue-datetime-picker": __webpack_require__(224)
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

/***/ 415:
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
     require("vue-hot-reload-api").rerender("data-v-893f4f30", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2V2ZW50cy9lZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzZiOGUqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3BhZ2VIZWFkZXIudnVlPzNkMDcqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9jYWUyKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NWQ5OCoqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2E2MjcqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9mb3JtRGF0YVBhcnNlci5qcz8wYzM3KioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT9mNWI1KioqIiwid2VicGFjazovLy9zZWxlY3QudnVlPzg0YTgqKioiLCJ3ZWJwYWNrOi8vL2RuYy1pbWFnZS11cGxvYWQudnVlPzU5ZTkqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC5qcz9jMGQ0KioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanM/ZWFiNioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy90eXBlQWhlYWRQb2ludGVyLmpzP2JlZDYqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT9jNzY1KioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWU/N2ZjMCoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZT9kOGNkKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/NjBkNioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2Q0MDYqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91cGxvYWQvZG5jLWltYWdlLXVwbG9hZC52dWU/MzQ1YyoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlP2NmMjYqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9ldmVudHMvZXZlbnRzLmpzP2VlNjUqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RhdGV0aW1lL3Z1ZS1kYXRldGltZS1waWNrZXIuanM/NjViYyoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9ldmVudHMvZXZlbnRTZXJ2aWNlLmpzP2M1MDIqKioiLCJ3ZWJwYWNrOi8vL2VkaXQudnVlPzQyNTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9ldmVudHMvZWRpdC52dWU/ZDNmOCJdLCJuYW1lcyI6WyJtZXRob2RzIiwicGFyc2VPYmpGb3JtRGF0YSIsIm9iaiIsImZvcm1kYXRhIiwibmFtZXNwYWNlIiwiZmQiLCJmb3JtS2V5IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkZpbGUiLCJhcHBlbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvcHMiLCJsb2FkaW5nIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwib25TZWFyY2giLCJkZWJvdW5jZSIsIk51bWJlciIsIndhdGNoIiwic2VhcmNoIiwibGVuZ3RoIiwidG9nZ2xlTG9hZGluZyIsInRvZ2dsZSIsInR5cGVBaGVhZFBvaW50ZXIiLCJtYXliZUFkanVzdFNjcm9sbCIsInBpeGVsc1RvUG9pbnRlclRvcCIsInBpeGVsc1RvUG9pbnRlckJvdHRvbSIsInZpZXdwb3J0IiwidG9wIiwic2Nyb2xsVG8iLCJib3R0b20iLCJwb2ludGVySGVpZ2h0IiwiaSIsIiRyZWZzIiwiZHJvcGRvd25NZW51IiwiY2hpbGRyZW4iLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50Iiwic2Nyb2xsVG9wIiwicG9zaXRpb24iLCJkYXRhIiwiZmlsdGVyZWRPcHRpb25zIiwidHlwZUFoZWFkVXAiLCJ0eXBlQWhlYWREb3duIiwidHlwZUFoZWFkU2VsZWN0Iiwic2VsZWN0IiwidGFnZ2FibGUiLCJjbGVhclNlYXJjaE9uU2VsZWN0IiwiREFURVRJTUVfUElDS0VSX1RPT0xUSVBTIiwiREVGQVVMVF9MQU5HVUFHRSIsInJlcGxhY2UiLCJpbmhlcml0IiwidGVtcGxhdGUiLCJtb2RlbCIsInJlcXVpcmVkIiwiU3RyaW5nIiwibGFuZ3VhZ2UiLCJkYXRldGltZUZvcm1hdCIsImRhdGVGb3JtYXQiLCJ0aW1lRm9ybWF0IiwibmFtZSIsIm9uQ2hhbmdlIiwiZGF0ZSIsImNyZWF0ZWQiLCJpc0NoYW5naW5nIiwiY29udHJvbCIsIm1vdW50ZWQiLCJvcHRpb25zIiwidXNlQ3VycmVudCIsInNob3dDbGVhciIsInNob3dDbG9zZSIsImljb25zIiwidGltZSIsInVwIiwiZG93biIsInByZXZpb3VzIiwibmV4dCIsInRvZGF5IiwiY2xlYXIiLCJjbG9zZSIsIiRsYW5ndWFnZSIsImxhbmdhdWdlIiwibG9jYWxlIiwiZ2V0TGFuZ3VhZ2VDb2RlIiwiZm9ybWF0IiwiJGkxOG4iLCJkYXRldGltZV9waWNrZXIiLCJtZXNzYWdlcyIsInRvb2x0aXBzIiwiJCIsImZuIiwiZGF0ZXRpbWVwaWNrZXIiLCJkZWZhdWx0cyIsIiRuZXh0VGljayIsIiRlbCIsIm1lIiwib24iLCJ2YWwiLCJvbGRWYWwiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsInNob3ciLCJpZCIsInN1Y2Nlc3NDYWxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImNyZWF0ZSIsImV2ZW50IiwicG9zdCIsInVwZGF0ZSIsInB1dCIsImVtdWxhdGVIVFRQIiwicmVtb3ZlIiwiZGVsZXRlIiwiZ2V0Q2hhbXBpb25zaGlwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7OztBQzFCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOzs7OztrQkFJQTtzQkFFQTtBQUhBOztr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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxhQUFhLGFBQWEsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvNDAuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtODkzZjRmMzAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZWRpdC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcZGFzaGJvYXJkXFxcXG1vZHVsZXNcXFxcZXZlbnRzXFxcXGVkaXQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZWRpdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtODkzZjRmMzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04OTNmNGYzMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2V2ZW50cy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gNDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NmY4NWU3ZCFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxoZWFkZXJcXFxccGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NmY4NWU3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJicmVhZGNydW1iLmhyZWZcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiB0YWc9XCJsaVwiIHYtZm9yPVwiYnJlYWRjcnVtYiBpbiBicmVhZGNydW1ic1wiPlxyXG4gICAgICAgICAgICAgICAge3skdChicmVhZGNydW1iLnRpdGxlKX19XHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9vbD5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XHJcbiAgICAuYWRtaW4taGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhZ2VIZWFkZXIudnVlPzRiODkxOTIwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRtaW4taGVhZGVyIHtcXG4gIGhlaWdodDogOTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hZG1pbi1oZWFkZXIgLnJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMzEgMzIgMzMgMzQgMzUgMzYgMzcgMzggMzkgNDAgNDEgNDIgNDMgNDQgNDUgNDYgNDcgNDggNDkgNTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjZmODVlN2RcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA0NjE0MThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCIsImV4cG9ydCBkZWZhdWx0e1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHBhcnNlT2JqRm9ybURhdGEob2JqLCBmb3JtZGF0YSwgbmFtZXNwYWNlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmQgPSBmb3JtZGF0YTtcclxuICAgICAgICAgICAgdmFyIGZvcm1LZXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgb2JqW3Byb3BlcnR5XSApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZXNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1LZXkgPSBuYW1lc3BhY2UgKyAnWycgKyBwcm9wZXJ0eSArICddJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtS2V5ID0gcHJvcGVydHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvcGVydHkgaXMgYW4gb2JqZWN0LCBidXQgbm90IGEgRmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgcmVjdXJzaXZpdHkuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcGVydHldID09PSAnb2JqZWN0JyAmJiAhKG9ialtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBGaWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlT2JqRm9ybURhdGEob2JqW3Byb3BlcnR5XSwgZmQsIGZvcm1LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZkLmFwcGVuZChmb3JtS2V5LCBvYmpbcHJvcGVydHldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZm9ybURhdGFQYXJzZXIuanMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtOWZkNzUzN2UhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3NlbGVjdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zZWxlY3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcZm9ybXNcXFxcc2VsZWN0XFxcXHNlbGVjdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzZWxlY3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTlmZDc1MzdlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOWZkNzUzN2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsIjxzdHlsZT5cclxuICAgIC52LXNlbGVjdCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDZweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5sb2FkaW5nIC5vcGVuLWluZGljYXRvciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzM2RlZyk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGJvdHRvbTogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC4yNik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgPiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyAuY2xvc2Uge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnYtc2VsZWN0IGlucHV0W3R5cGU9c2VhcmNoXSxcclxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGNsZWFyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06ZGlzYWJsZWQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgbGkgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuYWN0aXZlIGEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXHJcbiAgICAudi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItdG9wOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAuOWVtIHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgLjEpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAuOWVtIHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjQ1KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QubG9hZGluZyAuc3Bpbm5lciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXHJcbiAgICAudi1zZWxlY3QgLnNwaW5uZXI6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogNWVtO1xyXG4gICAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgdlNlbGVjdFNwaW5uZXIge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biB2LXNlbGVjdFwiIDpjbGFzcz1cImRyb3Bkb3duQ2xhc3Nlc1wiPlxyXG4gICAgICAgIDxkaXYgcmVmPVwidG9nZ2xlXCIgQG1vdXNlZG93bi5wcmV2ZW50PVwidG9nZ2xlRHJvcGRvd25cIiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBjbGVhcmZpeFwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtaWY9XCIhc2VhcmNoYWJsZSAmJiBpc1ZhbHVlRW1wdHlcIj5cclxuICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RlZC10YWdcIiB2LWZvcj1cIihvcHRpb24saW5kZXgpIGluIHZhbHVlQXNBcnJheVwiIHYtYmluZDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAge3sgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB9fVxyXG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVwibXVsdGlwbGVcIiBAY2xpY2s9XCJzZWxlY3Qob3B0aW9uKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkZWJvdW5jZT1cImRlYm91bmNlXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJzZWFyY2hhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kZWxldGU9XCJtYXliZURlbGV0ZVZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZXNjPVwib25Fc2NhcGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLnVwLnByZXZlbnQ9XCJ0eXBlQWhlYWRVcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24uZG93bi5wcmV2ZW50PVwidHlwZUFoZWFkRG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwLmVudGVyLnByZXZlbnQ9XCJ0eXBlQWhlYWRTZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBibHVyPVwib3BlbiA9IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBAZm9jdXM9XCJvcGVuID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInNlYXJjaFBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBpc1ZhbHVlRW1wdHkgPyAnMTAwJScgOiAnYXV0bycgfVwiXHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxpIHJlZj1cIm9wZW5JbmRpY2F0b3JcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJvcGVuLWluZGljYXRvclwiPjwvaT5cclxuXHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJzcGlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiIHYtc2hvdz1cImxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHVsIHJlZj1cImRyb3Bkb3duTWVudVwiIHYtc2hvdz1cIm9wZW5cIiA6dHJhbnNpdGlvbj1cInRyYW5zaXRpb25cIiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7ICdtYXgtaGVpZ2h0JzogbWF4SGVpZ2h0IH1cIj5cclxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiKG9wdGlvbixpbmRleCkgaW4gZmlsdGVyZWRPcHRpb25zXCIgdi1iaW5kOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiksIGhpZ2hsaWdodDogaW5kZXggPT09IHR5cGVBaGVhZFBvaW50ZXIgfVwiXHJcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwidHlwZUFoZWFkUG9pbnRlciA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBAbW91c2Vkb3duLnByZXZlbnQ9XCJzZWxlY3Qob3B0aW9uKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XCJmYWRlXCIgdi1pZj1cIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cIm5vLW9wdGlvbnNcIj5Tb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy48L3Nsb3Q+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQgdHlwZT1cInRleHQvYmFiZWxcIj5cclxuICAgIGltcG9ydCBwb2ludGVyU2Nyb2xsIGZyb20gJ2Jhc2UvbWl4aW5zL3BvaW50ZXJTY3JvbGwnXHJcbiAgICBpbXBvcnQgdHlwZUFoZWFkUG9pbnRlciBmcm9tICdiYXNlL21peGlucy90eXBlQWhlYWRQb2ludGVyJ1xyXG4gICAgaW1wb3J0IGFqYXggZnJvbSAnYmFzZS9taXhpbnMvYWpheCdcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWl4aW5zOiBbcG9pbnRlclNjcm9sbCwgdHlwZUFoZWFkUG9pbnRlciwgYWpheF0sXHJcblxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb250YWlucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHZhbHVlLiBWZXJ5IHNpbWlsYXIgdG8gYVxyXG4gICAgICAgICAgICAgKiBgdmFsdWVgIGF0dHJpYnV0ZSBvbiBhbiA8aW5wdXQ+LiBJbiBtb3N0IGNhc2VzLCB5b3UnbGwgd2FudFxyXG4gICAgICAgICAgICAgKiB0byBzZXQgdGhpcyBhcyBhIHR3by13YXkgYmluZGluZywgdXNpbmcgOnZhbHVlLnN5bmMuIEhvd2V2ZXIsXHJcbiAgICAgICAgICAgICAqIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFZ1ZXgsIGluIHdoaWNoIGNhc2UgeW91J2xsIG5lZWQgdG8gdXNlXHJcbiAgICAgICAgICAgICAqIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBwcm9wZXJ0eS5cclxuICAgICAgICAgICAgICogQHR5cGUge09iamVjdHx8U3RyaW5nfHxudWxsfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgdG8gYmUgdXNlZCBhcyBkcm9wZG93biBjaG9pY2VzLlxyXG4gICAgICAgICAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMsIHZ1ZS1zZWxlY3Qgd2lsbCBsb29rIGZvclxyXG4gICAgICAgICAgICAgKiBhIGBsYWJlbGAga2V5IChleC4gW3tsYWJlbDogJ1RoaXMgaXMgRm9vJywgdmFsdWU6ICdmb28nfV0pLiBBXHJcbiAgICAgICAgICAgICAqIGN1c3RvbSBsYWJlbCBrZXkgY2FuIGJlIHNldCB3aXRoIHRoZSBgbGFiZWxgIHByb3AuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNldHMgdGhlIG1heC1oZWlnaHQgcHJvcGVydHkgb24gdGhlIGRyb3Bkb3duIGxpc3QuXHJcbiAgICAgICAgICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICc0MDBweCdcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFbmFibGUvZGlzYWJsZSBmaWx0ZXJpbmcgdGhlIG9wdGlvbnMuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VhcmNoYWJsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBFcXVpdmFsZW50IHRvIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZSBvbiBhIGA8c2VsZWN0PmAgaW5wdXQuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBtdWx0aXBsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYHBsYWNlaG9sZGVyYCBhdHRyaWJ1dGUgb24gYW4gYDxpbnB1dD5gLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU2V0cyBhIFZ1ZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHRoZSBgLmRyb3Bkb3duLW1lbnVgLiB2dWUtc2VsZWN0XHJcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGluY2x1ZGUgQ1NTIGZvciB0cmFuc2l0aW9ucywgeW91J2xsIG5lZWQgdG8gYWRkIHRoZW0geW91cnNlbGYuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZXhwYW5kJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgY2xlYXJpbmcgdGhlIHNlYXJjaCB0ZXh0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGVsbHMgdnVlLXNlbGVjdCB3aGF0IGtleSB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIG9wdGlvblxyXG4gICAgICAgICAgICAgKiBsYWJlbHMgd2hlbiBlYWNoIGBvcHRpb25gIGlzIGFuIG9iamVjdC5cclxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGFiZWwnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2FsbGJhY2sgdG8gZ2VuZXJhdGUgdGhlIGxhYmVsIHRleHQuIElmIHtvcHRpb259XHJcbiAgICAgICAgICAgICAqIGlzIGFuIG9iamVjdCwgcmV0dXJucyBvcHRpb25bdGhpcy5sYWJlbF0gYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsICYmIG9wdGlvblt0aGlzLmxhYmVsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvblt0aGlzLmxhYmVsXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIHRoZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgKiB2YWx1ZShzKSBjaGFuZ2UuIFdoZW4gaW50ZWdyYXRpbmcgd2l0aCBWdWV4LCB1c2UgdGhpcyBjYWxsYmFjayB0byB0cmlnZ2VyXHJcbiAgICAgICAgICAgICAqIGFuIGFjdGlvbiwgcmF0aGVyIHRoYW4gdXNpbmcgOnZhbHVlLnN5bmMgdG8gcmV0cmVpdmUgdGhlIHNlbGVjdGVkIHZhbHVlLlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAgICAgICAgICAgICAqIEBkZWZhdWx0IHtudWxsfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25DaGFuZ2U6IEZ1bmN0aW9uLFxyXG4gICAgICAgICAgICBjaGFuZ2VQYXJhbToge30sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgY3JlYXRpbmcgb3B0aW9ucyBmcm9tIHNlYXJjaElucHV0LlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRhZ2dhYmxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBXaGVuIHRydWUsIG5ld2x5IGNyZWF0ZWQgdGFncyB3aWxsIGJlIGFkZGVkIHRvXHJcbiAgICAgICAgICAgICAqIHRoZSBvcHRpb25zIGxpc3QuXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVzaFRhZ3M6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFVzZXIgZGVmaW5lZCBmdW5jdGlvbiBmb3IgYWRkaW5nIE9wdGlvbnNcclxuICAgICAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtbdGhpcy5sYWJlbF06IG5ld09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld09wdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFdoZW4gZmFsc2UsIHVwZGF0aW5nIHRoZSBvcHRpb25zIHdpbGwgbm90IHJlc2V0IHRoZSBzZWxlY3QgdmFsdWVcclxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZXNldE9uT3B0aW9uc0NoYW5nZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgdmFsdWUodmFsLCBvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbih2YWwsIG9sZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHZhbCAhPT0gb2xkID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRhZ2dhYmxlICYmIHRoaXMucmVzZXRPbk9wdGlvbnNDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbXVsdGlwbGUodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbCA/IFtdIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNlbGVjdCBhIGdpdmVuIG9wdGlvbi5cclxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fHxTdHJpbmd9IG9wdGlvblxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNlbGVjdChvcHRpb24pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuY3JlYXRlT3B0aW9uKG9wdGlvbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hUYWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaChvcHRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW29wdGlvbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU2VsZWN0KG9wdGlvbilcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZS1zZWxlY3QgYSBnaXZlbiBvcHRpb24uXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRlc2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVmID0gLTFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gb3B0aW9uIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB2YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSlcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENhbGxlZCBmcm9tIHRoaXMuc2VsZWN0IGFmdGVyIGVhY2ggc2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLm9wZW5JbmRpY2F0b3IgfHwgZS50YXJnZXQgPT09IHRoaXMuJHJlZnMuc2VhcmNoIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnRvZ2dsZSB8fCBlLnRhcmdldCA9PT0gdGhpcy4kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKSAvLyBkcm9wZG93biB3aWxsIGNsb3NlIG9uIGJsdXJcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmZvY3VzKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIG9wdGlvbiBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSAgb3B0aW9uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgVHJ1ZSB3aGVuIHNlbGVjdGVkIHx8IEZhbHNlIG90aGVyd2lzZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLmZvckVhY2gob3B0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHQgPT09IG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA9PT0gb3B0aW9uXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSWYgdGhlcmUgaXMgYW55IHRleHQgaW4gdGhlIHNlYXJjaCBpbnB1dCwgcmVtb3ZlIGl0LlxyXG4gICAgICAgICAgICAgKiBPdGhlcndpc2UsIGJsdXIgdGhlIHNlYXJjaCBpbnB1dCB0byBjbG9zZSB0aGUgZHJvcGRvd24uXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgb25Fc2NhcGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRGVsZXRlIHRoZSB2YWx1ZSBvbiBEZWxldGUga2V5cHJlc3Mgd2hlbiB0aGVyZSBpcyBub1xyXG4gICAgICAgICAgICAgKiB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsICYgdGhlcmUncyB0YWdzIHRvIGRlbGV0ZVxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt0aGlzLnZhbHVlfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUubGVuZ3RoICYmIHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMudmFsdWUucG9wKCkgOiB0aGlzLnNlbGVjdGlvbiA9IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmUgaWYgYW4gb3B0aW9uIGV4aXN0c1xyXG4gICAgICAgICAgICAgKiB3aXRoaW4gdGhpcy5vcHRpb25zIGFycmF5LlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3QgfHwgU3RyaW5nfSBvcHRpb25cclxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIG9wdGlvbkV4aXN0cyhvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBleGlzdHMgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ2xhc3NlcyB0byBiZSBvdXRwdXQgb24gLmRyb3Bkb3duXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NlcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRoaXMuc2VhcmNoYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLmxvYWRpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIHBsYWNlaG9sZGVyIHN0cmluZyBpZiBpdCdzIHNldFxyXG4gICAgICAgICAgICAgKiAmIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFBsYWNlaG9sZGVyIHRleHRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNlYXJjaFBsYWNlaG9sZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBvcHRpb25zLCBmaWx0ZXJlZFxyXG4gICAgICAgICAgICAgKiBieSB0aGUgc2VhcmNoIGVsZW1lbnRzIHZhbHVlLiBJZiB0YWdnaW5nXHJcbiAgICAgICAgICAgICAqIHRydWUsIHRoZSBzZWFyY2ggdGV4dCB3aWxsIGJlIHByZXBlbmRlZFxyXG4gICAgICAgICAgICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2FycmF5fVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uW3NlbGYubGFiZWxdLmluZGV4T2Yoc2VsZi5zZWFyY2gpICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25FeGlzdHModGhpcy5zZWFyY2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHRoaXMuc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGVyZSBhcmVuJ3QgYW55IG9wdGlvbnMgc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpc1ZhbHVlRW1wdHkoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKHRoaXMuc2VsZWN0aW9uKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlbGVjdGlvbi5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgaW4gYXJyYXkgZm9ybWF0LlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBcnJheX1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHZhbHVlQXNBcnJheSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnNlbGVjdGlvbl1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2VsZWN0LnZ1ZT8wMjg4M2VhNSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyA6c3JjPVwiZGVmYXVsdEltYWdlXCIgYWx0PVwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIgd2lkdGg9XCIxMTBweFwiIHYtaWY9XCIhaW1hZ2VGaWxlXCI+XHJcbiAgICAgICAgPGltZyA6c3JjPVwiaW1hZ2VGaWxlXCIgYWx0PVwiYXRobGV0ZSBwcm9maWxlIGltYWdlXCIgd2lkdGg9XCIxMTBweFwiIHYtaWY9XCJpbWFnZUZpbGVcIj5cclxuXHJcbiAgICAgICAgPGJyPjxicj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiaW1hZ2UtdXBsb2FkZXJcIiBjbGFzcz1cImlucHV0ZmlsZVwiIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIlxyXG4gICAgICAgICAgICAgICByZWY9XCJmaWxlaW5wdXRcIi8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cImltYWdlLXVwbG9hZGVyXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLWNsb3VkXCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2J0blRleHR9fTwvc3Bhbj48L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAgIC5pbnB1dGZpbGUge1xyXG4gICAgICAgIHdpZHRoOiAwLjFweDtcclxuICAgICAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0ZmlsZSArIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHt9LFxyXG4gICAgICAgICAgICBhY2NlcHRlZEZpbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnRuVGV4dDoge30sXHJcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXHJcbiAgICAgICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW1hZ2U6IHt9LFxyXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uRmlsZUNoYW5nZShlKXtcclxuICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzIHx8IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJbWFnZShmaWxlc1swXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZUltYWdlKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZmlsZS50eXBlLm1hdGNoKHRoaXMuYWNjZXB0ZWRGaWxlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLXVwbG9hZGVyXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290Lndhcm5pbmdUb2FzdCh0aGlzLmVycm9yVmFsaWRhdGlvbk1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRGaWxlKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5maWxlaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG5jLWltYWdlLXVwbG9hZC52dWU/NjRjNWM0MjUiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRwcm9wczoge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBUb2dnbGVzIHRoZSBhZGRpbmcgb2YgYSAnbG9hZGluZycgY2xhc3MgdG8gdGhlIG1haW5cclxuXHRcdCAqIC52LXNlbGVjdCB3cmFwcGVyLiBVc2VmdWwgdG8gY29udHJvbCBVSSBzdGF0ZSB3aGVuXHJcblx0XHQgKiByZXN1bHRzIGFyZSBiZWluZyBwcm9jZXNzZWQgdGhyb3VnaCBBSkFYLlxyXG5cdFx0ICovXHJcblx0XHRsb2FkaW5nOiB7XHJcblx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQWNjZXB0IGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB3aWxsIGJlXHJcblx0XHQgKiBydW4gd2hlbiB0aGUgc2VhcmNoIHRleHQgY2hhbmdlcy5cclxuXHRcdCAqXHJcblx0XHQgKiBsb2FkaW5nKCkgYWNjZXB0cyBhIGJvb2xlYW4gdmFsdWUsIGFuZCBjYW5cclxuXHRcdCAqIGJlIHVzZWQgdG8gdG9nZ2xlIGEgbG9hZGluZyBjbGFzcyBmcm9tXHJcblx0XHQgKiB0aGUgb25TZWFyY2ggY2FsbGJhY2suXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzZWFyY2h9ICBTdHJpbmcgICAgICAgICAgQ3VycmVudCBzZWFyY2ggdGV4dFxyXG5cdFx0ICogQHBhcmFtIHtsb2FkaW5nfSBGdW5jdGlvbihib29sKSAgVG9nZ2xlIGxvYWRpbmcgY2xhc3NcclxuXHRcdCAqL1xyXG5cdFx0b25TZWFyY2g6IHtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmVcclxuXHRcdCAqIGludm9raW5nIHRoaXMub25TZWFyY2goKS4gVXNlZCB0byBwcmV2ZW50XHJcblx0XHQgKiBzZW5kaW5nIGFuIEFKQVggcmVxdWVzdCB1bnRpbCBpbnB1dCBpcyBjb21wbGV0ZS5cclxuXHRcdCAqL1xyXG5cdFx0ZGVib3VuY2U6IHtcclxuXHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRkZWZhdWx0OiAwXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0d2F0Y2g6IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogSWYgYSBjYWxsYmFjayAmIHNlYXJjaCB0ZXh0IGhhcyBiZWVuIHByb3ZpZGVkLFxyXG5cdFx0ICogaW52b2tlIHRoZSBvblNlYXJjaCBjYWxsYmFjay5cclxuXHRcdCAqL1xyXG5cdFx0c2VhcmNoKCkge1xyXG5cdFx0XHRpZiAodGhpcy5zZWFyY2gubGVuZ3RoID4gMCAmJiB0aGlzLm9uU2VhcmNoKSB7XHJcblx0XHRcdFx0dGhpcy5vblNlYXJjaCh0aGlzLnNlYXJjaCwgdGhpcy50b2dnbGVMb2FkaW5nKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogVG9nZ2xlIHRoaXMubG9hZGluZy4gT3B0aW9uYWxseSBwYXNzIGEgYm9vbGVhblxyXG5cdFx0ICogdmFsdWUuIElmIG5vIHZhbHVlIGlzIHByb3ZpZGVkLCB0aGlzLmxvYWRpbmdcclxuXHRcdCAqIHdpbGwgYmUgc2V0IHRvIHRoZSBvcHBvc2l0ZSBvZiBpdCdzIGN1cnJlbnQgdmFsdWUuXHJcblx0XHQgKiBAcGFyYW0gdG9nZ2xlIEJvb2xlYW5cclxuXHRcdCAqIEByZXR1cm5zIHsqfVxyXG5cdFx0ICovXHJcblx0XHR0b2dnbGVMb2FkaW5nKHRvZ2dsZSA9IG51bGwpIHtcclxuXHRcdFx0aWYgKHRvZ2dsZSA9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmdcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5sb2FkaW5nID0gdG9nZ2xlXHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHdhdGNoOiB7XHJcbiAgICB0eXBlQWhlYWRQb2ludGVyKCkge1xyXG4gICAgICB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsKClcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEFkanVzdCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBkcm9wZG93biBsaXN0XHJcbiAgICAgKiBpZiB0aGUgY3VycmVudCBwb2ludGVyIGlzIG91dHNpZGUgb2YgdGhlXHJcbiAgICAgKiBvdmVyZmxvdyBib3VuZHMuXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgbWF5YmVBZGp1c3RTY3JvbGwoKSB7XHJcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJUb3AgPSB0aGlzLnBpeGVsc1RvUG9pbnRlclRvcCgpXHJcbiAgICAgIGxldCBwaXhlbHNUb1BvaW50ZXJCb3R0b20gPSB0aGlzLnBpeGVsc1RvUG9pbnRlckJvdHRvbSgpXHJcblxyXG4gICAgICBpZiAoIHBpeGVsc1RvUG9pbnRlclRvcCA8PSB0aGlzLnZpZXdwb3J0KCkudG9wKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG8oIHBpeGVsc1RvUG9pbnRlclRvcCApXHJcbiAgICAgIH0gZWxzZSBpZiAocGl4ZWxzVG9Qb2ludGVyQm90dG9tID49IHRoaXMudmlld3BvcnQoKS5ib3R0b20pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxUbyggdGhpcy52aWV3cG9ydCgpLnRvcCArIHRoaXMucG9pbnRlckhlaWdodCgpIClcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgdG9wIG9mIHRoZSBkcm9wZG93blxyXG4gICAgICogbGlzdCB0byB0aGUgdG9wIG9mIHRoZSBjdXJyZW50IHBvaW50ZXIgZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHBpeGVsc1RvUG9pbnRlclRvcCgpIHtcclxuICAgICAgbGV0IHBpeGVsc1RvUG9pbnRlclRvcCA9IDBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR5cGVBaGVhZFBvaW50ZXI7IGkrKykge1xyXG4gICAgICAgIHBpeGVsc1RvUG9pbnRlclRvcCArPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlbltpXS5vZmZzZXRIZWlnaHRcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGl4ZWxzVG9Qb2ludGVyVG9wXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSB0b3Agb2YgdGhlIGRyb3Bkb3duXHJcbiAgICAgKiBsaXN0IHRvIHRoZSBib3R0b20gb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIHBpeGVsc1RvUG9pbnRlckJvdHRvbSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGl4ZWxzVG9Qb2ludGVyVG9wKCkgKyB0aGlzLnBvaW50ZXJIZWlnaHQoKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvZmZzZXRIZWlnaHQgb2YgdGhlIGN1cnJlbnQgcG9pbnRlciBlbGVtZW50LlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcG9pbnRlckhlaWdodCgpIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRyZWZzLmRyb3Bkb3duTWVudS5jaGlsZHJlblt0aGlzLnR5cGVBaGVhZFBvaW50ZXJdXHJcbiAgICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiAwXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnRseSB2aWV3YWJsZSBwb3J0aW9uIG9mIHRoZSBkcm9wZG93bk1lbnUuXHJcbiAgICAgKiBAcmV0dXJucyB7e3RvcDogKHN0cmluZ3wqfG51bWJlciksIGJvdHRvbTogKn19XHJcbiAgICAgKi9cclxuICAgIHZpZXdwb3J0KCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wLFxyXG4gICAgICAgIGJvdHRvbTogdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUub2Zmc2V0SGVpZ2h0ICsgdGhpcy4kcmVmcy5kcm9wZG93bk1lbnUuc2Nyb2xsVG9wXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JvbGwgdGhlIGRyb3Bkb3duTWVudSB0byBhIGdpdmVuIHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG8ocG9zaXRpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZHJvcGRvd25NZW51LnNjcm9sbFRvcCA9IHBvc2l0aW9uXHJcbiAgICB9LFxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3BvaW50ZXJTY3JvbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZUFoZWFkUG9pbnRlcjogLTFcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB3YXRjaDoge1xyXG4gICAgZmlsdGVyZWRPcHRpb25zKCkge1xyXG4gICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgPSAwXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRoZSB0eXBlQWhlYWRQb2ludGVyIHZpc3VhbGx5IHVwIHRoZSBsaXN0IGJ5XHJcbiAgICAgKiBzdWJ0cmFjdGluZyB0aGUgY3VycmVudCBpbmRleCBieSBvbmUuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0eXBlQWhlYWRVcCgpIHtcclxuICAgICAgaWYgKHRoaXMudHlwZUFoZWFkUG9pbnRlciA+IDApIHtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXItLVxyXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xyXG4gICAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgdHlwZUFoZWFkUG9pbnRlciB2aXN1YWxseSBkb3duIHRoZSBsaXN0IGJ5XHJcbiAgICAgKiBhZGRpbmcgdGhlIGN1cnJlbnQgaW5kZXggYnkgb25lLlxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgdHlwZUFoZWFkRG93bigpIHtcclxuICAgICAgaWYgKHRoaXMudHlwZUFoZWFkUG9pbnRlciA8IHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLnR5cGVBaGVhZFBvaW50ZXIrK1xyXG4gICAgICAgIGlmKCB0aGlzLm1heWJlQWRqdXN0U2Nyb2xsICkge1xyXG4gICAgICAgICAgdGhpcy5tYXliZUFkanVzdFNjcm9sbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IHRoZSBvcHRpb24gYXQgdGhlIGN1cnJlbnQgdHlwZUFoZWFkUG9pbnRlciBwb3NpdGlvbi5cclxuICAgICAqIE9wdGlvbmFsbHkgY2xlYXIgdGhlIHNlYXJjaCBpbnB1dCBvbiBzZWxlY3Rpb24uXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0eXBlQWhlYWRTZWxlY3QoKSB7XHJcbiAgICAgIGlmKCB0aGlzLmZpbHRlcmVkT3B0aW9uc1sgdGhpcy50eXBlQWhlYWRQb2ludGVyIF0gKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QoIHRoaXMuZmlsdGVyZWRPcHRpb25zWyB0aGlzLnR5cGVBaGVhZFBvaW50ZXIgXSApO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFnZ2FibGUgJiYgdGhpcy5zZWFyY2gubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLnNlYXJjaClcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIHRoaXMuY2xlYXJTZWFyY2hPblNlbGVjdCApIHtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdHlwZUFoZWFkUG9pbnRlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmlucHV0ZmlsZSB7XFxuICAgIHdpZHRoOiAwLjFweDtcXG4gICAgaGVpZ2h0OiAwLjFweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuLmlucHV0ZmlsZSArIGxhYmVsIHtcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlPzY0YzVjNDI1XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFhQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImRuYy1pbWFnZS11cGxvYWQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiZGVmYXVsdEltYWdlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCIhaW1hZ2VGaWxlXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgOnNyYz1cXFwiaW1hZ2VGaWxlXFxcIiBhbHQ9XFxcImF0aGxldGUgcHJvZmlsZSBpbWFnZVxcXCIgd2lkdGg9XFxcIjExMHB4XFxcIiB2LWlmPVxcXCJpbWFnZUZpbGVcXFwiPlxcclxcblxcclxcbiAgICAgICAgPGJyPjxicj5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBuYW1lPVxcXCJmaWxlXFxcIiBpZD1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJpbnB1dGZpbGVcXFwiIEBjaGFuZ2U9XFxcIm9uRmlsZUNoYW5nZVxcXCJcXHJcXG4gICAgICAgICAgICAgICByZWY9XFxcImZpbGVpbnB1dFxcXCIvPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1hZ2UtdXBsb2FkZXJcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1jbG91ZFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnt7YnRuVGV4dH19PC9zcGFuPjwvbGFiZWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAuaW5wdXRmaWxlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwLjFweDtcXHJcXG4gICAgICAgIGhlaWdodDogMC4xcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbnB1dGZpbGUgKyBsYWJlbCB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgdmFsdWU6IHt9LFxcclxcbiAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnaW1hZ2UvKidcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGJ0blRleHQ6IHt9LFxcclxcbiAgICAgICAgICAgIGVycm9yVmFsaWRhdGlvbk1zZzoge30sXFxyXFxuICAgICAgICAgICAgd2lkdGg6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMTBcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGltYWdlOiB7fSxcXHJcXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2U6IHt9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlRmlsZSA9IHZhbDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YSgpe1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGUpe1xcclxcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcyB8fCBlLmRhdGFUcmFuc2Zlci5maWxlcztcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpXFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoZmlsZXNbMF0pO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgY3JlYXRlSW1hZ2UoZmlsZSkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCh0aGlzLmFjY2VwdGVkRmlsZXMpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiaW1hZ2UtdXBsb2FkZXJcXFwiKS52YWx1ZSA9IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC53YXJuaW5nVG9hc3QodGhpcy5lcnJvclZhbGlkYXRpb25Nc2cpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUZpbGUgPSB0aGlzLmRlZmF1bHRJbWFnZVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xcclxcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xcclxcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZtLmltYWdlRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcXHJcXG4gICAgICAgICAgICAgICAgfTtcXHJcXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGdldEZpbGUoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZmlsZWlucHV0LmZpbGVzWzBdO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDZweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbn1cXG4udi1zZWxlY3QubG9hZGluZyAub3Blbi1pbmRpY2F0b3Ige1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4udi1zZWxlY3QgLm9wZW4taW5kaWNhdG9yOmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAuNSk7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMC4yNWVtIDAuMjVlbSAwIDA7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMzZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMS4wMDAsIC0wLjExNSwgMC45NzUsIDAuODU1KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxufVxcbi52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XFxuICAgIGJvdHRvbTogMXB4O1xcbn1cXG4udi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxufVxcbi52LXNlbGVjdCAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4udi1zZWxlY3Quc2VhcmNoYWJsZSAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgY3Vyc29yOiB0ZXh0O1xcbn1cXG4udi1zZWxlY3Qub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcge1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIG1hcmdpbjogNHB4IDFweCAwcHggM3B4O1xcbiAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcXG59XFxuLnYtc2VsZWN0IC5zZWxlY3RlZC10YWcgLmNsb3NlIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxcbi52LXNlbGVjdCBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIC41ZW07XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNsZWFyOiBub25lO1xcbn1cXG4udi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1zZWxlY3QgbGkgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtc2VsZWN0IC5hY3RpdmUgYSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgLjEpO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuLnYtc2VsZWN0IC5oaWdobGlnaHQgYSxcXG4udi1zZWxlY3QgbGk6aG92ZXIgPiBhIHtcXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcbi52LXNlbGVjdCAuc3Bpbm5lciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDVweDtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci10b3A6IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxuICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXG4gICAgYm9yZGVyLWxlZnQ6IC45ZW0gc29saWQgcmdiYSg2MCwgNjAsIDYwLCAuNDUpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB2U2VsZWN0U3Bpbm5lciAxLjFzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjFzO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcztcXG59XFxuLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4udi1zZWxlY3QgLnNwaW5uZXIsXFxuLnYtc2VsZWN0IC5zcGlubmVyOmFmdGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4wJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXG4wJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZT8wMjg4M2VhNVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUNBLDhFQUFBO1lBQUEsc0VBQUE7SUFDQSxXQUFBO0lBQ0EsZ0NBQUE7SUFBQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0NBQ0E7QUFFQTtJQUNBLG1DQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUNBLDhFQUFBO1lBQUEsc0VBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSx3Q0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtDQUNBO0FBRUE7SUFDQSxvQkFBQTtJQUNBLDZCQUFBO0lBQ0EsOEJBQUE7Q0FDQTtBQUVBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBOztJQUVBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxpQ0FBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBOztJQUVBLG9CQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtJQUNBLGtEQUFBO0lBQ0EsOENBQUE7SUFDQSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsdURBQUE7WUFBQSwrQ0FBQTtJQUNBLGdDQUFBO0lBQUEsd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBO0FBRUE7O0lBRUEsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7QUFDQTtRQUNBLGdDQUFBO2dCQUFBLHdCQUFBO0NBQ0E7QUFDQTtRQUNBLGtDQUFBO2dCQUFBLDBCQUFBO0NBQ0E7Q0FDQTtBQUVBO0FBQ0E7UUFDQSxnQ0FBQTtnQkFBQSx3QkFBQTtDQUNBO0FBQ0E7UUFDQSxrQ0FBQTtnQkFBQSwwQkFBQTtDQUNBO0NBQ0FcIixcImZpbGVcIjpcInNlbGVjdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHN0eWxlPlxcclxcbiAgICAudi1zZWxlY3Qge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAub3Blbi1pbmRpY2F0b3Ige1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiA2cHg7XFxyXFxuICAgICAgICByaWdodDogMTBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEuMDAwLCAtMC4xMTUsIDAuOTc1LCAwLjg1NSk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLm9wZW4taW5kaWNhdG9yIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5vcGVuLWluZGljYXRvcjpiZWZvcmUge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIC41KTtcXHJcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgICAgICBib3JkZXItd2lkdGg6IDAuMjVlbSAwLjI1ZW0gMCAwO1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzNkZWcpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLjAwMCwgLTAuMTE1LCAwLjk3NSwgMC44NTUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdC5vcGVuIC5vcGVuLWluZGljYXRvciB7XFxyXFxuICAgICAgICBib3R0b206IDFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3Qub3BlbiAub3Blbi1pbmRpY2F0b3I6YmVmb3JlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjAsIDYwLCA2MCwgLjI2KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0LnNlYXJjaGFibGUgLmRyb3Bkb3duLXRvZ2dsZSB7XFxyXFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0Lm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCA+IC5kcm9wZG93bi1tZW51IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxyXFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLnNlbGVjdGVkLXRhZyB7XFxyXFxuICAgICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgICAgICAgbWFyZ2luOiA0cHggMXB4IDBweCAzcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDAuMjVlbTtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuc2VsZWN0ZWQtdGFnIC5jbG9zZSB7XFxyXFxuICAgICAgICBmbG9hdDogbm9uZTtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdLFxcclxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XFxyXFxuICAgICAgICB3aWR0aDogMTBlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICBjbGVhcjogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgaW5wdXRbdHlwZT1zZWFyY2hdOmRpc2FibGVkIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgbGkgYSB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0IC5hY3RpdmUgYSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MCwgNTAsIC4xKTtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuaGlnaGxpZ2h0IGEsXFxyXFxuICAgIC52LXNlbGVjdCBsaTpob3ZlciA+IGEge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lciB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgICAgICByaWdodDogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcclxcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXHJcXG4gICAgICAgIGJvcmRlci1yaWdodDogLjllbSBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIC4xKTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IC45ZW0gc29saWQgcmdiYSgxMDAsIDEwMCwgMTAwLCAuMSk7XFxyXFxuICAgICAgICBib3JkZXItbGVmdDogLjllbSBzb2xpZCByZ2JhKDYwLCA2MCwgNjAsIC40NSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxyXFxuICAgICAgICBhbmltYXRpb246IHZTZWxlY3RTcGlubmVyIDEuMXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnYtc2VsZWN0LmxvYWRpbmcgLnNwaW5uZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudi1zZWxlY3QgLnNwaW5uZXIsXFxyXFxuICAgIC52LXNlbGVjdCAuc3Bpbm5lcjphZnRlciB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICB3aWR0aDogNWVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIHZTZWxlY3RTcGlubmVyIHtcXHJcXG4gICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIDEwMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGtleWZyYW1lcyB2U2VsZWN0U3Bpbm5lciB7XFxyXFxuICAgICAgICAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIHYtc2VsZWN0XFxcIiA6Y2xhc3M9XFxcImRyb3Bkb3duQ2xhc3Nlc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IHJlZj1cXFwidG9nZ2xlXFxcIiBAbW91c2Vkb3duLnByZXZlbnQ9XFxcInRvZ2dsZURyb3Bkb3duXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIGNsZWFyZml4XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdi1pZj1cXFwiIXNlYXJjaGFibGUgJiYgaXNWYWx1ZUVtcHR5XFxcIj5cXHJcXG4gICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX1cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2VsZWN0ZWQtdGFnXFxcIiB2LWZvcj1cXFwiKG9wdGlvbixpbmRleCkgaW4gdmFsdWVBc0FycmF5XFxcIiB2LWJpbmQ6a2V5PVxcXCJpbmRleFxcXCI+XFxyXFxuICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cXHJcXG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVxcXCJtdWx0aXBsZVxcXCIgQGNsaWNrPVxcXCJzZWxlY3Qob3B0aW9uKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcclxcbiAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8aW5wdXRcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cXFwic2VhcmNoXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgOmRlYm91bmNlPVxcXCJkZWJvdW5jZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInNlYXJjaFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwic2VhcmNoYWJsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXlkb3duLmRlbGV0ZT1cXFwibWF5YmVEZWxldGVWYWx1ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lc2M9XFxcIm9uRXNjYXBlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGtleWRvd24udXAucHJldmVudD1cXFwidHlwZUFoZWFkVXBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5kb3duLnByZXZlbnQ9XFxcInR5cGVBaGVhZERvd25cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXIucHJldmVudD1cXFwidHlwZUFoZWFkU2VsZWN0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9XFxcIm9wZW4gPSBmYWxzZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz1cXFwib3BlbiA9IHRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJzZWFyY2hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVxcXCJzZWFyY2hQbGFjZWhvbGRlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwieyB3aWR0aDogaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nIH1cXFwiXFxyXFxuICAgICAgICAgICAgPlxcclxcblxcclxcbiAgICAgICAgICAgIDxpIHJlZj1cXFwib3BlbkluZGljYXRvclxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIiBjbGFzcz1cXFwib3Blbi1pbmRpY2F0b3JcXFwiPjwvaT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJzcGlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3Bpbm5lclxcXCIgdi1zaG93PVxcXCJsb2FkaW5nXFxcIj5Mb2FkaW5nLi4uPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9zbG90PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8dWwgcmVmPVxcXCJkcm9wZG93bk1lbnVcXFwiIHYtc2hvdz1cXFwib3BlblxcXCIgOnRyYW5zaXRpb249XFxcInRyYW5zaXRpb25cXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIlxcclxcbiAgICAgICAgICAgIDpzdHlsZT1cXFwieyAnbWF4LWhlaWdodCc6IG1heEhlaWdodCB9XFxcIj5cXHJcXG4gICAgICAgICAgICA8bGkgdi1mb3I9XFxcIihvcHRpb24saW5kZXgpIGluIGZpbHRlcmVkT3B0aW9uc1xcXCIgdi1iaW5kOmtleT1cXFwiaW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyBhY3RpdmU6IGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSwgaGlnaGxpZ2h0OiBpbmRleCA9PT0gdHlwZUFoZWFkUG9pbnRlciB9XFxcIlxcclxcbiAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVxcXCJ0eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBAbW91c2Vkb3duLnByZXZlbnQ9XFxcInNlbGVjdChvcHRpb24pXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7IGdldE9wdGlvbkxhYmVsKG9wdGlvbikgfX1cXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIHRyYW5zaXRpb249XFxcImZhZGVcXFwiIHYtaWY9XFxcIiFmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXFxcIiBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgdHJhbnNpdGlvbj1cXFwiZmFkZVxcXCIgdi1pZj1cXFwiIWZpbHRlcmVkT3B0aW9ucy5sZW5ndGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcIm5vLW9wdGlvbnNcXFwiPlNvcnJ5LCBubyBtYXRjaGluZyBvcHRpb25zLjwvc2xvdD5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG5cXHJcXG48c2NyaXB0IHR5cGU9XFxcInRleHQvYmFiZWxcXFwiPlxcclxcbiAgICBpbXBvcnQgcG9pbnRlclNjcm9sbCBmcm9tICdiYXNlL21peGlucy9wb2ludGVyU2Nyb2xsJ1xcclxcbiAgICBpbXBvcnQgdHlwZUFoZWFkUG9pbnRlciBmcm9tICdiYXNlL21peGlucy90eXBlQWhlYWRQb2ludGVyJ1xcclxcbiAgICBpbXBvcnQgYWpheCBmcm9tICdiYXNlL21peGlucy9hamF4J1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBtaXhpbnM6IFtwb2ludGVyU2Nyb2xsLCB0eXBlQWhlYWRQb2ludGVyLCBhamF4XSxcXHJcXG5cXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQ29udGFpbnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB2YWx1ZS4gVmVyeSBzaW1pbGFyIHRvIGFcXHJcXG4gICAgICAgICAgICAgKiBgdmFsdWVgIGF0dHJpYnV0ZSBvbiBhbiA8aW5wdXQ+LiBJbiBtb3N0IGNhc2VzLCB5b3UnbGwgd2FudFxcclxcbiAgICAgICAgICAgICAqIHRvIHNldCB0aGlzIGFzIGEgdHdvLXdheSBiaW5kaW5nLCB1c2luZyA6dmFsdWUuc3luYy4gSG93ZXZlcixcXHJcXG4gICAgICAgICAgICAgKiB0aGlzIHdpbGwgbm90IHdvcmsgd2l0aCBWdWV4LCBpbiB3aGljaCBjYXNlIHlvdSdsbCBuZWVkIHRvIHVzZVxcclxcbiAgICAgICAgICAgICAqIHRoZSBvbkNoYW5nZSBjYWxsYmFjayBwcm9wZXJ0eS5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fHxTdHJpbmd8fG51bGx9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgdmFsdWU6IHtcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogQW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBvYmplY3RzIHRvIGJlIHVzZWQgYXMgZHJvcGRvd24gY2hvaWNlcy5cXHJcXG4gICAgICAgICAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIGFuIGFycmF5IG9mIG9iamVjdHMsIHZ1ZS1zZWxlY3Qgd2lsbCBsb29rIGZvclxcclxcbiAgICAgICAgICAgICAqIGEgYGxhYmVsYCBrZXkgKGV4LiBbe2xhYmVsOiAnVGhpcyBpcyBGb28nLCB2YWx1ZTogJ2Zvbyd9XSkuIEFcXHJcXG4gICAgICAgICAgICAgKiBjdXN0b20gbGFiZWwga2V5IGNhbiBiZSBzZXQgd2l0aCB0aGUgYGxhYmVsYCBwcm9wLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgb3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdCgpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogU2V0cyB0aGUgbWF4LWhlaWdodCBwcm9wZXJ0eSBvbiB0aGUgZHJvcGRvd24gbGlzdC5cXHJcXG4gICAgICAgICAgICAgKiBAZGVwcmVjYXRlZFxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzQwMHB4J1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRW5hYmxlL2Rpc2FibGUgZmlsdGVyaW5nIHRoZSBvcHRpb25zLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHNlYXJjaGFibGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRXF1aXZhbGVudCB0byB0aGUgYG11bHRpcGxlYCBhdHRyaWJ1dGUgb24gYSBgPHNlbGVjdD5gIGlucHV0LlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtPYmplY3R9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgbXVsdGlwbGU6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlIG9uIGFuIGA8aW5wdXQ+YC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFNldHMgYSBWdWUgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiB0aGUgYC5kcm9wZG93bi1tZW51YC4gdnVlLXNlbGVjdFxcclxcbiAgICAgICAgICAgICAqIGRvZXMgbm90IGluY2x1ZGUgQ1NTIGZvciB0cmFuc2l0aW9ucywgeW91J2xsIG5lZWQgdG8gYWRkIHRoZW0geW91cnNlbGYuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge1N0cmluZ31cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2V4cGFuZCdcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEVuYWJsZXMvZGlzYWJsZXMgY2xlYXJpbmcgdGhlIHNlYXJjaCB0ZXh0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGNsZWFyU2VhcmNoT25TZWxlY3Q6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogVGVsbHMgdnVlLXNlbGVjdCB3aGF0IGtleSB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIGxhYmVscyB3aGVuIGVhY2ggYG9wdGlvbmAgaXMgYW4gb2JqZWN0LlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgbGFiZWw6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnbGFiZWwnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDYWxsYmFjayB0byBnZW5lcmF0ZSB0aGUgbGFiZWwgdGV4dC4gSWYge29wdGlvbn1cXHJcXG4gICAgICAgICAgICAgKiBpcyBhbiBvYmplY3QsIHJldHVybnMgb3B0aW9uW3RoaXMubGFiZWxdIGJ5IGRlZmF1bHQuXFxyXFxuICAgICAgICAgICAgICogQHBhcmFtICB7T2JqZWN0IHx8IFN0cmluZ30gb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0KG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgJiYgb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bdGhpcy5sYWJlbF1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBlYWNoIHRpbWUgdGhlIHNlbGVjdGVkXFxyXFxuICAgICAgICAgICAgICogdmFsdWUocykgY2hhbmdlLiBXaGVuIGludGVncmF0aW5nIHdpdGggVnVleCwgdXNlIHRoaXMgY2FsbGJhY2sgdG8gdHJpZ2dlclxcclxcbiAgICAgICAgICAgICAqIGFuIGFjdGlvbiwgcmF0aGVyIHRoYW4gdXNpbmcgOnZhbHVlLnN5bmMgdG8gcmV0cmVpdmUgdGhlIHNlbGVjdGVkIHZhbHVlLlxcclxcbiAgICAgICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cXHJcXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCB7bnVsbH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBvbkNoYW5nZTogRnVuY3Rpb24sXFxyXFxuICAgICAgICAgICAgY2hhbmdlUGFyYW06IHt9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIEVuYWJsZS9kaXNhYmxlIGNyZWF0aW5nIG9wdGlvbnMgZnJvbSBzZWFyY2hJbnB1dC5cXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICB0YWdnYWJsZToge1xcclxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogV2hlbiB0cnVlLCBuZXdseSBjcmVhdGVkIHRhZ3Mgd2lsbCBiZSBhZGRlZCB0b1xcclxcbiAgICAgICAgICAgICAqIHRoZSBvcHRpb25zIGxpc3QuXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgcHVzaFRhZ3M6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFVzZXIgZGVmaW5lZCBmdW5jdGlvbiBmb3IgYWRkaW5nIE9wdGlvbnNcXHJcXG4gICAgICAgICAgICAgKiBAdHlwZSB7RnVuY3Rpb259XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAobmV3T3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc1swXSA9PT0gJ29iamVjdCcpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1t0aGlzLmxhYmVsXTogbmV3T3B0aW9ufVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld09wdGlvblxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBXaGVuIGZhbHNlLCB1cGRhdGluZyB0aGUgb3B0aW9ucyB3aWxsIG5vdCByZXNldCB0aGUgc2VsZWN0IHZhbHVlXFxyXFxuICAgICAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgcmVzZXRPbk9wdGlvbnNDaGFuZ2U6IHtcXHJcXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgc2VhcmNoOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXFxyXFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICB3YXRjaDoge1xcclxcbiAgICAgICAgICAgIHZhbHVlKHZhbCwgb2xkKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdmFsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBzZWxlY3Rpb24odmFsLCBvbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPyB0aGlzLm9uQ2hhbmdlKHZhbCwgdGhpcy5jaGFuZ2VQYXJhbSkgOiBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHZhbCAhPT0gb2xkID8gdGhpcy5vbkNoYW5nZSh2YWwsIHRoaXMuY2hhbmdlUGFyYW0pIDogbnVsbFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBvcHRpb25zKCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGFnZ2FibGUgJiYgdGhpcy5yZXNldE9uT3B0aW9uc0NoYW5nZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG11bHRpcGxlKHZhbCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHZhbCA/IFtdIDogbnVsbFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogU2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIHNlbGVjdChvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24pKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0KG9wdGlvbilcXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmICF0aGlzLm9wdGlvbkV4aXN0cyhvcHRpb24pKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5jcmVhdGVPcHRpb24ob3B0aW9uKVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnB1c2hUYWdzKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9wdGlvbilcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbb3B0aW9uXVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2gob3B0aW9uKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWZ0ZXJTZWxlY3Qob3B0aW9uKVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogRGUtc2VsZWN0IGEgZ2l2ZW4gb3B0aW9uLlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdHx8U3RyaW5nfSBvcHRpb25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGRlc2VsZWN0KG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZiA9IC0xXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5mb3JFYWNoKCh2YWwpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBvcHRpb24gfHwgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsW3RoaXMubGFiZWxdID09PSBvcHRpb25bdGhpcy5sYWJlbF0pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0gdmFsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0aW9uLmluZGV4T2YocmVmKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpbmRleCwgMSlcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDYWxsZWQgZnJvbSB0aGlzLnNlbGVjdCBhZnRlciBlYWNoIHNlbGVjdGlvbi5cXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gb3B0aW9uXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBvbkFmdGVyU2VsZWN0KG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyU2VhcmNoT25TZWxlY3QpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJydcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuXFxyXFxuICAgICAgICAgICAgLyoqXFxyXFxuICAgICAgICAgICAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge0V2ZW50fSBlXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7dm9pZH1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bihlKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy5vcGVuSW5kaWNhdG9yIHx8IGUudGFyZ2V0ID09PSB0aGlzLiRyZWZzLnNlYXJjaCB8fCBlLnRhcmdldCA9PT0gdGhpcy4kcmVmcy50b2dnbGUgfHwgZS50YXJnZXQgPT09IHRoaXMuJGVsKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpIC8vIGRyb3Bkb3duIHdpbGwgY2xvc2Ugb24gYmx1clxcclxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guZm9jdXMoKVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gb3B0aW9uIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cXHJcXG4gICAgICAgICAgICAgKiBAcGFyYW0gIHtPYmplY3R8fFN0cmluZ30gIG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgVHJ1ZSB3aGVuIHNlbGVjdGVkIHx8IEZhbHNlIG90aGVyd2lzZVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmYWxzZVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5mb3JFYWNoKG9wdCA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIG9wdFt0aGlzLmxhYmVsXSA9PT0gb3B0aW9uW3RoaXMubGFiZWxdKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiA9PT0gb3B0aW9uXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBJZiB0aGVyZSBpcyBhbnkgdGV4dCBpbiB0aGUgc2VhcmNoIGlucHV0LCByZW1vdmUgaXQuXFxyXFxuICAgICAgICAgICAgICogT3RoZXJ3aXNlLCBibHVyIHRoZSBzZWFyY2ggaW5wdXQgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLlxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIG9uRXNjYXBlKCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoLmxlbmd0aCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zZWFyY2guYmx1cigpXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIERlbGV0ZSB0aGUgdmFsdWUgb24gRGVsZXRlIGtleXByZXNzIHdoZW4gdGhlcmUgaXMgbm9cXHJcXG4gICAgICAgICAgICAgKiB0ZXh0IGluIHRoZSBzZWFyY2ggaW5wdXQsICYgdGhlcmUncyB0YWdzIHRvIGRlbGV0ZVxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge3RoaXMudmFsdWV9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgbWF5YmVEZWxldGVWYWx1ZSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyZWZzLnNlYXJjaC52YWx1ZS5sZW5ndGggJiYgdGhpcy52YWx1ZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLnZhbHVlLnBvcCgpIDogdGhpcy5zZWxlY3Rpb24gPSBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIERldGVybWluZSBpZiBhbiBvcHRpb24gZXhpc3RzXFxyXFxuICAgICAgICAgICAgICogd2l0aGluIHRoaXMub3B0aW9ucyBhcnJheS5cXHJcXG4gICAgICAgICAgICAgKlxcclxcbiAgICAgICAgICAgICAqIEBwYXJhbSAge09iamVjdCB8fCBTdHJpbmd9IG9wdGlvblxcclxcbiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgb3B0aW9uRXhpc3RzKG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2VcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0ID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnb2JqZWN0JyAmJiBvcHRbdGhpcy5sYWJlbF0gPT09IG9wdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0ID09PSBvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBDbGFzc2VzIHRvIGJlIG91dHB1dCBvbiAuZHJvcGRvd25cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgZHJvcGRvd25DbGFzc2VzKCkge1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxcclxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdGhpcy5zZWFyY2hhYmxlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdGhpcy5sb2FkaW5nXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgcGxhY2Vob2xkZXIgc3RyaW5nIGlmIGl0J3Mgc2V0XFxyXFxuICAgICAgICAgICAgICogJiB0aGVyZSBpcyBubyB2YWx1ZSBzZWxlY3RlZC5cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFBsYWNlaG9sZGVyIHRleHRcXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5ICYmIHRoaXMucGxhY2Vob2xkZXIpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVyO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG5cXHJcXG4gICAgICAgICAgICAvKipcXHJcXG4gICAgICAgICAgICAgKiBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBvcHRpb25zLCBmaWx0ZXJlZFxcclxcbiAgICAgICAgICAgICAqIGJ5IHRoZSBzZWFyY2ggZWxlbWVudHMgdmFsdWUuIElmIHRhZ2dpbmdcXHJcXG4gICAgICAgICAgICAgKiB0cnVlLCB0aGUgc2VhcmNoIHRleHQgd2lsbCBiZSBwcmVwZW5kZWRcXHJcXG4gICAgICAgICAgICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuXFxyXFxuICAgICAgICAgICAgICpcXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHthcnJheX1cXHJcXG4gICAgICAgICAgICAgKi9cXHJcXG4gICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMoKSB7XFxyXFxuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcXHJcXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25bc2VsZi5sYWJlbF0uaW5kZXhPZihzZWxmLnNlYXJjaCkgIT09IC0xXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ2dhYmxlICYmIHRoaXMuc2VhcmNoLmxlbmd0aCAmJiAhdGhpcy5vcHRpb25FeGlzdHModGhpcy5zZWFyY2gpKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVuc2hpZnQodGhpcy5zZWFyY2gpXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZW4ndCBhbnkgb3B0aW9ucyBzZWxlY3RlZC5cXHJcXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxcclxcbiAgICAgICAgICAgICAqL1xcclxcbiAgICAgICAgICAgIGlzVmFsdWVFbXB0eSgpIHtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0aW9uID09PSAnb2JqZWN0Jykge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhT2JqZWN0LmtleXModGhpcy5zZWxlY3Rpb24pLmxlbmd0aFxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLnNlbGVjdGlvbi5sZW5ndGhcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcblxcclxcbiAgICAgICAgICAgIC8qKlxcclxcbiAgICAgICAgICAgICAqIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBpbiBhcnJheSBmb3JtYXQuXFxyXFxuICAgICAgICAgICAgICogQHJldHVybiB7QXJyYXl9XFxyXFxuICAgICAgICAgICAgICovXFxyXFxuICAgICAgICAgICAgdmFsdWVBc0FycmF5KCkge1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdGhpcy5zZWxlY3Rpb25dXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9zZWxlY3Qvc2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMzIgMzMgMzggMzkgNDAgNDEgNDMgNDQgNDUiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmRjYjJjMzQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZkY2IyYzM0IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcdXBsb2FkXFxcXGRuYy1pbWFnZS11cGxvYWQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZG5jLWltYWdlLXVwbG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmRjYjJjMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZGNiMmMzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyghX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uZGVmYXVsdEltYWdlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmltYWdlRmlsZSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uaW1hZ2VGaWxlLFxuICAgICAgXCJhbHRcIjogXCJhdGhsZXRlIHByb2ZpbGUgaW1hZ2VcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMTBweFwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnInKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwiZmlsZWlucHV0XCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRmaWxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImZpbGVcIixcbiAgICAgIFwibmFtZVwiOiBcImZpbGVcIixcbiAgICAgIFwiaWRcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogX3ZtLm9uRmlsZUNoYW5nZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJpbWFnZS11cGxvYWRlclwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvdWRcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KF92bS5fcyhfdm0uYnRuVGV4dCkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZkY2IyYzM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMzIgMzMgMzggMzkgNDAgNDEgNDMgNDQgNDUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93biB2LXNlbGVjdFwiLFxuICAgIGNsYXNzOiBfdm0uZHJvcGRvd25DbGFzc2VzXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHJlZjogXCJ0b2dnbGVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10b2dnbGUgY2xlYXJmaXhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm1vdXNlZG93blwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50b2dnbGVEcm9wZG93bigkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbKCFfdm0uc2VhcmNoYWJsZSAmJiBfdm0uaXNWYWx1ZUVtcHR5KSA/IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0ucGxhY2Vob2xkZXIpICsgXCJcXG4gICAgXCIpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9sKChfdm0udmFsdWVBc0FycmF5KSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnc3BhbicsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBzdGF0aWNDbGFzczogXCJzZWxlY3RlZC10YWdcIlxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgIFwiKSwgKF92bS5tdWx0aXBsZSkgPyBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2VsZWN0KG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiw5dcIildKV0pIDogX3ZtLl9lKCldKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnNlYXJjaCksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uc2VhcmNoYWJsZSksXG4gICAgICBleHByZXNzaW9uOiBcInNlYXJjaGFibGVcIlxuICAgIH1dLFxuICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIHdpZHRoOiBfdm0uaXNWYWx1ZUVtcHR5ID8gJzEwMCUnIDogJ2F1dG8nXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGVib3VuY2VcIjogX3ZtLmRlYm91bmNlLFxuICAgICAgXCJ0eXBlXCI6IFwic2VhcmNoXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS5zZWFyY2hQbGFjZWhvbGRlclxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zZWFyY2gpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJrZXlkb3duXCI6IFtmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkZWxldGVcIiwgWzgsIDQ2XSkpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5tYXliZURlbGV0ZVZhbHVlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcInVwXCIsIDM4KSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRVcCgkZXZlbnQpXG4gICAgICB9LCBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJkb3duXCIsIDQwKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWREb3duKCRldmVudClcbiAgICAgIH1dLFxuICAgICAgXCJrZXl1cFwiOiBbZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmIChfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZXNjXCIsIDI3KSkgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLm9uRXNjYXBlKCRldmVudClcbiAgICAgIH0sIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzKSkgeyByZXR1cm47IH1cbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50eXBlQWhlYWRTZWxlY3QoJGV2ZW50KVxuICAgICAgfV0sXG4gICAgICBcImJsdXJcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBcImZvY3VzXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3BlbiA9IHRydWVcbiAgICAgIH0sXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgcmVmOiBcIm9wZW5JbmRpY2F0b3JcIixcbiAgICBzdGF0aWNDbGFzczogXCJvcGVuLWluZGljYXRvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJwcmVzZW50YXRpb25cIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fdChcInNwaW5uZXJcIiwgW19jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvYWRpbmcpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJzcGlubmVyXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV0pXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ub3BlbiksXG4gICAgICBleHByZXNzaW9uOiBcIm9wZW5cIlxuICAgIH1dLFxuICAgIHJlZjogXCJkcm9wZG93bk1lbnVcIixcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICAnbWF4LWhlaWdodCc6IF92bS5tYXhIZWlnaHRcbiAgICB9KSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IF92bS50cmFuc2l0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl9sKChfdm0uZmlsdGVyZWRPcHRpb25zKSwgZnVuY3Rpb24ob3B0aW9uLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnbGknLCB7XG4gICAgICBrZXk6IGluZGV4LFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgYWN0aXZlOiBfdm0uaXNPcHRpb25TZWxlY3RlZChvcHRpb24pLCBoaWdobGlnaHQ6IGluZGV4ID09PSBfdm0udHlwZUFoZWFkUG9pbnRlclxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2VvdmVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS50eXBlQWhlYWRQb2ludGVyID0gaW5kZXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnYScsIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF92bS5zZWxlY3Qob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV0pXSlcbiAgfSksIF92bS5fdihcIiBcIiksICghX3ZtLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgpID8gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRpdmlkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwiZmFkZVwiXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoKSA/IF9jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRyYW5zaXRpb25cIjogXCJmYWRlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJuby1vcHRpb25zXCIsIFtfdm0uX3YoXCJTb3JyeSwgbm8gbWF0Y2hpbmcgb3B0aW9ucy5cIildKV0sIDIpIDogX3ZtLl9lKCldLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTlmZDc1MzdlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2RuYy1pbWFnZS11cGxvYWQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjYzNDAwMjM5XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZGNiMmMzNCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZG5jLWltYWdlLXVwbG9hZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZkY2IyYzM0IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmRjYjJjMzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXBsb2FkL2RuYy1pbWFnZS11cGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiAzMyAzOCAzOSA0MCA0MSA0MyA0NCA0NSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NlbGVjdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZDkzMDRlNTRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTlmZDc1MzdlIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZWxlY3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05ZmQ3NTM3ZSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2VsZWN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOWZkNzUzN2UhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvc2VsZWN0L3NlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMyIDMzIDM4IDM5IDQwIDQxIDQzIDQ0IDQ1IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJlblwiOiB7XHJcbiAgICAgICAgXCJldmVudHNcIjoge1xyXG4gICAgICAgICAgICBcIm1cIjogXCJNYWxlXCIsXHJcbiAgICAgICAgICAgIFwid1wiOiBcIkZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcIm5cIjogXCJQcmVmZXIgbm90IHRvIGRpc2Nsb3NlXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgRXZlbnQgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgRXZlbnQgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIlRoZSBFdmVudCB3YXMgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgXCJldmVudF9wb3N0ZXJfZGVsZXRlZFwiOiBcIlRoZSBldmVudCBwb3N0ZXIgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiVGhlIEV2ZW50IGRvZXNuJ3QgZXhpc3RcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgXCJjaGFtcGlvbnNoaXBcIjogXCJDaGFtcGlvbnNoaXBcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJHZW5kZXJcIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IFwiQ29kZVwiLFxyXG4gICAgICAgICAgICBcImluaXRfZGF0ZVwiOiBcIkluaXQgRGF0ZVwiLFxyXG4gICAgICAgICAgICBcImVuZF9kYXRlXCI6IFwiRW5kIERhdGVcIixcclxuICAgICAgICAgICAgXCJzcGVjaWFsdHlcIjogXCJTcGVjaWFsdHlcIixcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNhdGVnb3J5XCIsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIlR5cGVcIixcclxuICAgICAgICAgICAgXCJyZWFjaFwiOiBcIlJlYWNoXCIsXHJcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWN0IGFuIG9wdGlvblwiLFxyXG4gICAgICAgICAgICBcInVwbG9hZF9pbWFnZVwiOiBcIlVwbG9hZCBpbWFnZVwiLFxyXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcIlVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBcIm5ld1wiOiBcIk5ldyBFdmVudFwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiQXJlIHlvdSBzdXJlPyB0aGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlX2V2ZW50XCI6IFwiRGVsZXRlIEV2ZW50XCIsXHJcbiAgICAgICAgICAgIFwiZXZlbnRfaW5mb1wiOiBcIkV2ZW50IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICAgIFwic2VlX2FsbFwiOiBcIlNlZSBBbGxcIixcclxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY3RcIixcclxuICAgICAgICAgICAgXCJzZWFyY2hfZXZlbnRcIjogXCJTZWFyY2ggRXZlbnRcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImVzXCI6IHtcclxuICAgICAgICBcImV2ZW50c1wiOiB7XHJcbiAgICAgICAgICAgIFwibVwiOiBcIk1hc2N1bGlub1wiLFxyXG4gICAgICAgICAgICBcIndcIjogXCJGZW1lbmlub1wiLFxyXG4gICAgICAgICAgICBcIm5cIjogXCJQcmVmaWVybyBubyByZXZlbGFybG9cIixcclxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIGV2ZW50byBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxyXG4gICAgICAgICAgICBcInVwZGF0ZWRfc3VjY2Vzc2Z1bGx5XCI6IFwiRWwgZXZlbnRvIGZ1ZSBhY3R1YWxpemFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcclxuICAgICAgICAgICAgXCJkZWxldGVkX3N1Y2Nlc2Z1bGx5XCI6IFwiRWwgZXZlbnRvIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwiZXZlbnRfcG9zdGVyX2RlbGV0ZWRcIjogXCJFbCBwb3N0ZXIgZnVlIGVsaW1pbmFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcclxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJFbCBldmVudG8gbm8gZXhpc3RlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vbWJyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXHJcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2FtcGVvbmF0b1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIkfDqW5lcm9cIixcclxuICAgICAgICAgICAgXCJjb2RlXCI6IFwiQ8OzZGlnb1wiLFxyXG4gICAgICAgICAgICBcImluaXRfZGF0ZVwiOiBcIkZlY2hhIGRlIGluaWNpb1wiLFxyXG4gICAgICAgICAgICBcImVuZF9kYXRlXCI6IFwiRmVjaGEgZGUgZmluYWxpemFjacOzblwiLFxyXG4gICAgICAgICAgICBcInNwZWNpYWx0eVwiOiBcIkVzcGVjaWFsaWRhZFwiLFxyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ2F0ZWdvcsOtYVwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJUaXBvXCIsXHJcbiAgICAgICAgICAgIFwicmVhY2hcIjogXCJBbGNhbmNlXCIsXHJcbiAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBcIkFjY2lvbmVzXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjY2lvbmUgdW5hIG9wY2nDs25cIixcclxuICAgICAgICAgICAgXCJ1cGxvYWRfaW1hZ2VcIjogXCJTdWJpciBJbWFnZW5cIixcclxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJBY3R1YWxpemFyXCIsXHJcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTnVldm8gRXZlbnRvXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlX21lc3NhZ2VcIjogXCLCv0VzdGFzIFNlZ3Vybz8gZXN0YSBhY2Npw7NuIG5vIHNlIHB1ZWRlIGRlc2hhY2VyXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlX2V2ZW50XCI6IFwiRWxpbWluYXIgRXZlbnRvXCIsXHJcbiAgICAgICAgICAgIFwiZXZlbnRfaW5mb1wiOiBcIkluZm9ybWFjacOzbiBkZWwgZXZlbnRvXCIsXHJcbiAgICAgICAgICAgIFwic2VlX2FsbFwiOiBcIlZlciBUb2Rvc1wiLFxyXG4gICAgICAgICAgICBcInNlbGVjdFwiOiBcIlNlbGVjY2lvbmFyXCIsXHJcbiAgICAgICAgICAgIFwic2VhcmNoX2V2ZW50XCI6IFwiQnVzY2FyIEV2ZW50b1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9ldmVudHMvZXZlbnRzLmpzIiwiLyoqXHJcbiAqIFRoZSBhcnJheSBvZiBuYW1lcyBvZiB0aGUgdG9vbHRpcCBtZXNzYWdlcyBvZiB0aGUgZGF0ZXRpbWUgcGlja2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgY29uc3RhbnQgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXHJcbiAqL1xyXG52YXIgREFURVRJTUVfUElDS0VSX1RPT0xUSVBTID0gW1xyXG4gICAgXCJ0b2RheVwiLCBcImNsZWFyXCIsIFwiY2xvc2VcIixcclxuICAgIFwic2VsZWN0TW9udGhcIiwgXCJwcmV2TW9udGhcIiwgXCJuZXh0TW9udGhcIixcclxuICAgIFwic2VsZWN0WWVhclwiLCBcInByZXZZZWFyXCIsIFwibmV4dFllYXJcIixcclxuICAgIFwic2VsZWN0RGVjYWRlXCIsIFwicHJldkRlY2FkZVwiLCBcIm5leHREZWNhZGVcIixcclxuICAgIFwicHJldkNlbnR1cnlcIiwgXCJuZXh0Q2VudHVyeVwiLFxyXG4gICAgXCJwaWNrSG91clwiLCBcImluY3JlbWVudEhvdXJcIiwgXCJkZWNyZW1lbnRIb3VyXCIsXHJcbiAgICBcInBpY2tNaW51dGVcIiwgXCJpbmNyZW1lbnRNaW51dGVcIiwgXCJkZWNyZW1lbnRNaW51dGVcIixcclxuICAgIFwicGlja1NlY29uZFwiLCBcImluY3JlbWVudFNlY29uZFwiLCBcImRlY3JlbWVudFNlY29uZFwiLFxyXG4gICAgXCJ0b2dnbGVQZXJpb2RcIiwgXCJzZWxlY3RUaW1lXCJcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsYW5ndWFnZSB1c2VkIGJ5IHRoaXMgY29tcG9uZW50LlxyXG4gKi9cclxudmFyIERFRkFVTFRfTEFOR1VBR0UgPSBcImVuLVVTXCI7XHJcblxyXG4vKipcclxuICogQSBkYXRldGltZSBwaWNrZXIgY29udHJvbC5cclxuICpcclxuICogQHBhcmFtIG1vZGVsXHJcbiAqICAgIHRoZSBtb2RlbCBiaW5kIHRvIHRoZSBjb250cm9sLCB3aGljaCBtdXN0IGJlIGEgdHdvIHdheSBiaW5kaW5nIHZhcmlhYmxlLlxyXG4gKiBAcGFyYW0gdHlwZVxyXG4gKiAgICB0aGUgb3B0aW9uYWwgdHlwZSBvZiB0aGlzIGRhdGV0aW1lIHBpY2tlciBjb250cm9sLiBBdmFpbGFibGUgdmFsdWVzIGFyZVxyXG4gKiAgICAtIFwiZGF0ZXRpbWVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIGRhdGV0aW1lIHBpY2tlcixcclxuICogICAgLSBcImRhdGVcIjogSW5kaWNhdGluZyB0aGF0IHRoaXMgY29udHJvbCBpcyBhIGRhdGUgcGlja2VyLFxyXG4gKiAgICAtIFwidGltZVwiOiBJbmRpY2F0aW5nIHRoYXQgdGhpcyBjb250cm9sIGlzIGEgdGltZSBwaWNrZXIuXHJcbiAqICAgIERlZmF1bHQgdmFsdWUgaXMgXCJkYXRldGltZVwiLlxyXG4gKiBAcGFyYW0gbGFuZ3VhZ2VcclxuICogICAgdGhlIG9wdGlvbmFsIGxhbmd1YWdlIGNvZGUgdXNlZCB0byBsb2NhbGl6ZSB0aGUgY29udHJvbCwgd2hpY2ggbXVzdCBiZVxyXG4gKiAgICBhIHZhbGlkIGxhbmd1YWdlIGNvZGUgc3VwcG9ydGVkIGJ5IHRoZSBtb21lbnQuanMgbGlicmFyeS4gSWYgaXQgaXMgbm90IHNldCxcclxuICogICAgYW5kIHRoZSBbdnVlLWkxOG5dKGh0dHBzOi8vZ2l0aHViLmNvbS9IYWl4aW5nLUh1L3Z1ZS1pMThuKSBwbHVnaW4gaXMgdXNlZCxcclxuICogICAgdGhlIGNvbXBvbmVudCB3aWxsIHVzZSB0aGUgbGFuZ3VhZ2UgY29kZSBgJGxhbmd1YWdlYCBwcm92aWRlZCBieSB0aGVcclxuICogICAgW3Z1ZS1pMThuXShodHRwczovL2dpdGh1Yi5jb20vSGFpeGluZy1IdS92dWUtaTE4bikgcGx1Z2luOyBvdGhlcndpc2UsIHRoZVxyXG4gKiAgICBjb21wb25lbnQgd2lsbCB1c2UgdGhlIGRlZmF1bHQgdmFsdWUgXCJlbi1VU1wiLlxyXG4gKiBAcGFyYW0gZGF0ZXRpbWVGb3JtYXRcclxuICogICAgdGhlIG9wdGlvbmFsIGZvcm1hdCBvZiB0aGUgZGF0ZXRpbWUgdGhpcyBjb21wb25lbnQgc2hvdWxkIGRpc3BsYXksIHdoaWNoXHJcbiAqICAgIG11c3QgYmUgYSB2YWxpZCBkYXRldGltZSBmb3JtYXQgb2YgdGhlIG1vbWVudC5qcyBsaWJyYXJ5LiBUaGlzIHByb3BlcnR5XHJcbiAqICAgIG9ubHkgd29ya3Mgd2hlbiB0aGUgXCJ0eXBlXCIgcHJvcGVydHkgaXMgXCJkYXRldGltZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiWVlZWS1NTS1ERCBISDptbTpzc1wiLlxyXG4gKiBAcGFyYW0gZGF0ZUZvcm1hdFxyXG4gKiAgICB0aGUgb3B0aW9uYWwgZm9ybWF0IG9mIHRoZSBkYXRlIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwiZGF0ZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiWVlZWS1NTS1ERFwiLlxyXG4gKiBAcGFyYW0gdGltZUZvcm1hdFxyXG4gKiAgICB0aGUgb3B0aW9uYWwgZm9ybWF0IG9mIHRoZSB0aW1lIHRoaXMgY29tcG9uZW50IHNob3VsZCBkaXNwbGF5LCB3aGljaFxyXG4gKiAgICBtdXN0IGJlIGEgdmFsaWQgZGF0ZXRpbWUgZm9ybWF0IG9mIHRoZSBtb21lbnQuanMgbGlicmFyeS4gVGhpcyBwcm9wZXJ0eVxyXG4gKiAgICBvbmx5IHdvcmtzIHdoZW4gdGhlIFwidHlwZVwiIHByb3BlcnR5IGlzIFwidGltZVwiLiBEZWZhdWx0IHZhbHVlIGlzXHJcbiAqICAgIFwiSEg6bW06c3NcIi5cclxuICogQHBhcmFtIG5hbWVcclxuICogICAgdGhlIG9wdGlvbmFsIG5hbWUgb2YgdGhlIHNlbGVjdGlvbiBjb250cm9sLlxyXG4gKiBAcGFyYW0gb25DaGFuZ2VcclxuICogICAgdGhlIG9wdGlvbmFsIGV2ZW50IGhhbmRsZXIgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBkYXRldGltZSBwaWNrZXJcclxuICogICAgd2FzIGNoYW5nZWQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnRlZCBhbmQgaXMgbm90IG51bGwsIGl0IG11c3QgYmUgYVxyXG4gKiAgICBmdW5jdGlvbiB3aGljaCBhY2NlcHQgb25lIGFyZ3VtZW50OiB0aGUgbmV3IGRhdGUgdGltZSwgd2hpY2ggaXMgYSBtb21lbnRcclxuICogICAgb2JqZWN0LlxyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgIGluaGVyaXQ6IGZhbHNlLFxyXG4gICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz0naW5wdXQtZ3JvdXAgZGF0ZSc+XCIgK1xyXG4gICAgXCI8aW5wdXQgY2xhc3M9J2Zvcm0tY29udHJvbCcgOm5hbWU9J25hbWUnIHR5cGU9J3RleHQnIC8+XCIgK1xyXG4gICAgXCI8c3BhbiBjbGFzcz0naW5wdXQtZ3JvdXAtYWRkb24nPlwiICtcclxuICAgIFwiPGkgY2xhc3M9J2ZhIGZhLWZ3IGZhLWNhbGVuZGFyJz48L2k+XCIgK1xyXG4gICAgXCI8L3NwYW4+XCIgK1xyXG4gICAgXCI8L2Rpdj5cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW9kZWw6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcImRhdGV0aW1lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRldGltZUZvcm1hdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiWVlZWS1NTS1ERFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aW1lRm9ybWF0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIkhIOm1tOnNzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2hhbmdlOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF0ZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJkYXRldGltZS1waWNrZXIucmVhZHlcIik7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHVzZUN1cnJlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAnZmEgZmEtY2xvY2stbycsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnZmEgZmEtY2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgdXA6ICdmYSBmYS1jaGV2cm9uLXVwJyxcclxuICAgICAgICAgICAgICAgIGRvd246ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhIGZhLWNoZXZyb24tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgdG9kYXk6ICdmYSBmYS1kb3QtY2lyY2xlLW8nLFxyXG4gICAgICAgICAgICAgICAgY2xlYXI6ICdmYSBmYS10cmFzaCcsXHJcbiAgICAgICAgICAgICAgICBjbG9zZTogJ2ZhIGZhLXRpbWVzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBzZXQgdGhlIGxvY2FsZVxyXG4gICAgICAgIHZhciBsYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XHJcbiAgICAgICAgaWYgKGxhbmd1YWdlID09PSBudWxsIHx8IGxhbmd1YWdlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRsYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSB0aGlzLiRsYW5ndWFnZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhbmdhdWdlID0gREVGQVVMVF9MQU5HVUFHRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VDb2RlKGxhbmd1YWdlKTtcclxuICAgICAgICAvLyBzZXQgdGhlIGZvcm1hdFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdCA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGltZVwiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQgPSB0aGlzLnRpbWVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdCA9IHRoaXMuZGF0ZXRpbWVGb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdXNlIHRoZSB2dWUtaTE4biBwbHVnaW4gZm9yIGxvY2FsaXplIHRoZSB0b29sdGlwc1xyXG4gICAgICAgIGlmICh0aGlzLiRpMThuICYmIHRoaXMuJGkxOG4uZGF0ZXRpbWVfcGlja2VyKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMuJGkxOG4uZGF0ZXRpbWVfcGlja2VyO1xyXG4gICAgICAgICAgICB2YXIgdG9vbHRpcHMgPSAkLmZuLmRhdGV0aW1lcGlja2VyLmRlZmF1bHRzLnRvb2x0aXBzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IERBVEVUSU1FX1BJQ0tFUl9UT09MVElQUy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBEQVRFVElNRV9QSUNLRVJfVE9PTFRJUFNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tuYW1lXSA9IG1lc3NhZ2VzW25hbWVdOyAgICAvLyBsb2NhbGl6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMudG9vbHRpcHMgPSB0b29sdGlwcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb250cm9sXHJcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMuJGVsKS5kYXRldGltZXBpY2tlcihvcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gJCh0aGlzLiRlbCkuZGF0YShcIkRhdGVUaW1lUGlja2VyXCIpO1xyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGRhdGUgdG8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIG1vZGVsXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5kYXRlKHRoaXMubW9kZWwpO1xyXG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgICAgICAkKHRoaXMuJGVsKS5vbihcImRwLmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmlzQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZS5pc0NoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtZS5kYXRlID0gbWUuY29udHJvbC5kYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuaXNDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWUub25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLm9uQ2hhbmdlKG1lLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgXCJtb2RlbFwiOiBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZGF0ZSh2YWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgbGFuZ3VhZ2UgY29kZSBmcm9tIHRoZSBcImxhbmd1YWdlLWNvdW50cnlcIiBsb2NhbGUgY29kZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIFRoZSBmdW5jdGlvbiB3aWxsIHN0cmlwIHRoZSBsYW5ndWFnZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgXCItXCIgb2YgYVxyXG4gICAgICAgICAqIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSwgcGFzcyBcImVuLVVTXCIgd2lsbCByZXR1cm5zIFwiZW5cIi4gQnV0IGZvciBzb21lXHJcbiAgICAgICAgICogc3BlY2lhbCBsb2NhbGVzLCB0aGUgZnVuY3Rpb24gcmVzZXJ2ZXMgdGhlIGxvY2FsZSBjb2RlLiBGb3IgZXhhbXBsZSxcclxuICAgICAgICAgKiB0aGUgXCJ6aC1DTlwiIGZvciB0aGUgc2ltcGxpZmllZCBDaGluZXNlIGFuZCB0aGUgXCJ6aC1UV1wiIGZvciB0aGVcclxuICAgICAgICAgKiB0cmFkaXRpb25hbCBDaGluZXNlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtIGxvY2FsZVxyXG4gICAgICAgICAqICAgIEEgbG9jYWxlIGNvZGUuXHJcbiAgICAgICAgICogQHJldHVyblxyXG4gICAgICAgICAqICAgIHRoZSBsYW5ndWFnZSBjb2RlIG9mIHRoZSBsb2NhbGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0TGFuZ3VhZ2VDb2RlOiBmdW5jdGlvbiAobG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbGUgPT09IG51bGwgfHwgbG9jYWxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG9jYWxlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiemgtQ05cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiemgtVFdcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItTUFcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItU0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXItVE5cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGUtQVRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tQVVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tQ0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW4tR0JcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnItQ0FcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaHktQU1cIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibXMtTVlcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHQtQlJcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3ItQ1lSTFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0bC1QSFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0em0tTEFUTlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0em1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2VydmUgb25seSB0aGUgZmlyc3QgdHdvIGxldHRlcnMgbGFuZ3VhZ2UgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlLnN1YnN0cigwLCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGF0ZXRpbWUvdnVlLWRhdGV0aW1lLXBpY2tlci5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2hvdyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvZXZlbnRzLycgKyBpZCArICc/aW5jbHVkZT1jaGFtcGlvbnNoaXAuc3BvcnQsc3BlY2lhbHR5LGNhdGVnb3J5LHR5cGUscmVhY2gnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKGV2ZW50LCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvZXZlbnRzJywgZXZlbnQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoaWQsIGV2ZW50LCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnB1dCgnL2FwaS9ldmVudHMvJyArIGlkLCBldmVudCwge2VtdWxhdGVIVFRQOiB0cnVlfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvZXZlbnRzLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2hhbXBpb25zaGlwcyhzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvY2hhbXBpb25zaGlwcz9pbmNsdWRlPXNwb3J0JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9ldmVudHMvZXZlbnRTZXJ2aWNlLmpzIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8YWRtaW4taGVhZGVyIDp0aXRsZT1cIiR0KCdhZG1pbi5ldmVudHMnKVwiIDpicmVhZGNydW1icz1cImJyZWFkY3J1bWJzXCI+PC9hZG1pbi1oZWFkZXI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiZXZlbnQtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdhZG1pbi5ldmVudHMnKX19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5ib3gtaGVhZGVyIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbicpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZWVuXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2V2ZW50cy5uYW1lJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZWVuXCIgbmFtZT1cImV2ZW50LnRyYW5zbGF0aW9uLm5hbWUuZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2V2ZW50cy5uYW1lJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImV2ZW50LnRyYW5zbGF0aW9uLm5hbWUuZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnZXZlbnRzLm5hbWUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LnRyYW5zbGF0aW9uLm5hbWUuZW4nKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbicpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygnZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uZW5cIiBkYXRhLWVycm9yPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2V2ZW50cy5kZXNjcmlwdGlvbicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdldmVudHMuZGVzY3JpcHRpb24nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnZXZlbnRzLmRlc2NyaXB0aW9uJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJylcIj57e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZmlyc3QoJ2V2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkbmMtaW1hZ2UtdXBsb2FkZXIgOmJ0bi10ZXh0PVwiJHQoJ2V2ZW50cy51cGxvYWRfaW1hZ2UnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci12YWxpZGF0aW9uLW1zZz1cIiR0KCd2YWxpZGF0aW9uLmltYWdlJyx7YXR0cmlidXRlOiR0KCdldmVudHMudXBsb2FkX2ltYWdlJyl9KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbWFnZT1cImV2ZW50LmltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdC1pbWFnZT1cIi9pbWFnZXMvbWlzc2luZy9ldmVudC9taXNzaW5nLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInVwbG9hZGVyXCI+PC9kbmMtaW1hZ2UtdXBsb2FkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdldmVudC5jaGFtcGlvbnNoaXAnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNwb3J0c1wiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdldmVudHMuY2hhbXBpb25zaGlwJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2VsZWN0IDp2YWx1ZT1cImV2ZW50LmNoYW1waW9uc2hpcFwiIGxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJjaGFtcGlvbnNoaXBDaGFuZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiJHQoJ2V2ZW50cy5zZWxlY3Rfb3B0aW9uJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImNoYW1waW9uc2hpcHNcIj48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoYW1waW9uc2hpcF9pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXZlbnQuY2hhbXBpb25zaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImV2ZW50LmNoYW1waW9uc2hpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdldmVudHMuY2hhbXBpb25zaGlwJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LmNoYW1waW9uc2hpcCcpXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdldmVudC5jaGFtcGlvbnNoaXAnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LnNwZWNpYWx0eScpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3BvcnRzXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2V2ZW50cy5zcGVjaWFsdHknKX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwiZXZlbnQuc3BlY2lhbHR5XCIgbGFiZWw9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cInNwZWNpYWx0eUNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic3BlY2lhbHRpZXNcIj48L3Ytc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNwZWNpYWx0eV9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXZlbnQuc3BlY2lhbHR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ9XCJzcGVjaWFsdHlfaW5wdXRcIiBpbml0aWFsPVwib2ZmXCIgdi1tb2RlbD1cImV2ZW50LnNwZWNpYWx0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdldmVudHMuc3BlY2lhbHR5JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LnNwZWNpYWx0eScpXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdldmVudC5zcGVjaWFsdHknKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdldmVudC5jYXRlZ29yeScpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3BvcnRzXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2V2ZW50cy5jYXRlZ29yeScpfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdCA6dmFsdWU9XCJldmVudC5jYXRlZ29yeVwiIGxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJjYXRlZ29yeUNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiY2F0ZWdvcmllc1wiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2F0ZWdvcnlfaW5wdXRcIiB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50LmNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImV2ZW50LmNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2V2ZW50cy5jYXRlZ29yeScpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCdldmVudC5jYXRlZ29yeScpXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdldmVudC5jYXRlZ29yeScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ2V2ZW50LmdlbmRlcicpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3BvcnRzXCIgZGF0YS1lcnJvcj1cIlwiPnt7JHQoJ2V2ZW50cy5nZW5kZXInKX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwiZXZlbnQuZ2VuZGVyXCIgbGFiZWw9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImdlbmRlckNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIkdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZ2VuZGVyc1wiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZ2VuZGVyX2lucHV0XCIgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJldmVudC5nZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD1cImdlbmRlcl9pbnB1dFwiIGluaXRpYWw9XCJvZmZcIiB2LW1vZGVsPVwiZXZlbnQuZ2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2V2ZW50cy5nZW5kZXInKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZXZlbnQuZ2VuZGVyJylcIj57eyBlcnJvcnMuZmlyc3QoJ2V2ZW50LmdlbmRlcicpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdldmVudC50eXBlJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzcG9ydHNcIiBkYXRhLWVycm9yPVwiXCI+e3skdCgnZXZlbnRzLnR5cGUnKX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwiZXZlbnQudHlwZVwiIGxhYmVsPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvbi1jaGFuZ2U9XCJ0eXBlQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdldmVudHMuc2VsZWN0X29wdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJ0eXBlc1wiPjwvdi1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidHlwZV9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXZlbnQudHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJldmVudC50eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLXZ2LWFzPVwiJHQoJ2V2ZW50cy50eXBlJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LnR5cGUnKVwiPnt7IGVycm9ycy5maXJzdCgnZXZlbnQudHlwZScpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdldmVudC5yZWFjaCcpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVhY2hlc1wiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdldmVudHMucmVhY2gnKX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3QgOnZhbHVlPVwiZXZlbnQucmVhY2hcIiBsYWJlbD1cInJlYWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cInJlYWNoQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIiR0KCdldmVudHMuc2VsZWN0X29wdGlvbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJyZWFjaGVzXCI+PC92LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJyZWFjaF9pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZXZlbnQucmVhY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXZlbnQucmVhY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtdnYtYXM9XCIkdCgnZXZlbnRzLnJlYWNoJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LnJlYWNoJylcIj57eyBlcnJvcnMuZmlyc3QoJ2V2ZW50LnJlYWNoJykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdldmVudC5pbml0X2RhdGUnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImluaXRfZGF0ZVwiIGRhdGEtZXJyb3I9XCJcIj57eyR0KCdldmVudHMuaW5pdF9kYXRlJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1kYXRldGltZS1waWNrZXIgY2xhc3M9XCJ2dWUtcGlja2VyMlwiIG5hbWU9XCJpbml0X2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptb2RlbD1cImV2ZW50LmluaXRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImluaXREYXRlQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT1cImVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRldGltZS1mb3JtYXQ9XCJMTExcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1kYXRldGltZS1waWNrZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW5pdF9pbnB1dFwiIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXZlbnQuaW5pdF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV2ZW50LmluaXRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdldmVudHMuaW5pdF9kYXRlJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ2V2ZW50LmluaXRfZGF0ZScpXCI+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmZpcnN0KCdldmVudC5pbml0X2RhdGUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCdldmVudC5lbmRfZGF0ZScpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW5kX2RhdGVcIiBkYXRhLWVycm9yPVwiXCI+e3skdCgnZXZlbnRzLmVuZF9kYXRlJyl9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1kYXRldGltZS1waWNrZXIgY2xhc3M9XCJ2dWUtcGlja2VyM1wiIG5hbWU9XCJlbmRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1vZGVsPVwiZXZlbnQuZW5kX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWNoYW5nZT1cImVuZERhdGVDaGFuZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRldGltZS1mb3JtYXQ9XCJMTExcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1kYXRldGltZS1waWNrZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW5kX2lucHV0XCIgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC5lbmRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJldmVudC5lbmRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS12di1hcz1cIiR0KCdldmVudHMuZW5kX2RhdGUnKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygnZXZlbnQuZW5kX2RhdGUnKVwiPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5maXJzdCgnZXZlbnQuZW5kX2RhdGUnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkJhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdmb3Jtcy5iYWNrJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBocmVmPVwiIyFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnZGlzYWJsZWQnOnVwZGF0aW5nfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uU3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZm9ybXMuc2F2ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2JhYmVsXCI+XHJcbiAgICBpbXBvcnQgZXZlbnRMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9ldmVudHMvZXZlbnRzLmpzJztcclxuICAgIGltcG9ydCBmb3JtRGF0YU9iamVjdFBhcnNlciBmcm9tICdiYXNlL21peGlucy9hamF4L2Zvcm1EYXRhUGFyc2VyJ1xyXG4gICAgaW1wb3J0IHttYXBBY3Rpb25zfSBmcm9tICd2dWV4J1xyXG4gICAgaW1wb3J0IGRuY0ltYWdlVXBsb2FkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL3VwbG9hZC9kbmMtaW1hZ2UtdXBsb2FkLnZ1ZSc7XHJcbiAgICBpbXBvcnQgdlNlbGVjdCBmcm9tIFwiYmFzZS9jb21wb25lbnRzL2Zvcm1zL3NlbGVjdC9zZWxlY3QudnVlXCJcclxuICAgIGltcG9ydCBhZG1pbkhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xyXG4gICAgaW1wb3J0IGV2ZW50U2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9ldmVudHMvZXZlbnRTZXJ2aWNlJ1xyXG5cclxuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIHZTZWxlY3QsXHJcbiAgICAgICAgICAgIGFkbWluSGVhZGVyLFxyXG4gICAgICAgICAgICBkbmNJbWFnZVVwbG9hZGVyLFxyXG4gICAgICAgICAgICBcInZ1ZS1kYXRldGltZS1waWNrZXJcIjogcmVxdWlyZShcImJhc2UvY29tcG9uZW50cy9kYXRldGltZS92dWUtZGF0ZXRpbWUtcGlja2VyLmpzXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWl4aW5zOiBbZm9ybURhdGFPYmplY3RQYXJzZXJdLFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdF9kYXRlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZF9kYXRlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge31cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF0aGxldGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBleGNlcHRBdGhsZXRlczogJycsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uaG9tZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9ldmVudHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLmV2ZW50cydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9ldmVudHMvJyArIHRoaXMuZXZlbnQuaWQgKyAnL3VwZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4udXBkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BlY2lhbHRpZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLnNwZWNpYWx0aWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLmNhdGVnb3JpZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLnR5cGVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlYWNoZXMoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuY29tbW9uLnJlYWNoZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhbXBpb25zaGlwcygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5jb21tb24uY2hhbXBpb25zaGlwc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZW5kZXJzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmNvbW1vbi5nZW5kZXJzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2FsZXM6IGV2ZW50TG9jYWxlcyxcclxuICAgICAgICBjcmVhdGVkKCl7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYXRlZ29yaWVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW1waW9uc2hpcHMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDaGFtcGlvbnNoaXBzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudHlwZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUeXBlcygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlYWNoZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWFjaGVzKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2VuZGVycy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEdlbmRlcnMoKTtcclxuICAgICAgICAgICAgZXZlbnRTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LmluaXRfZGF0ZSA9IG1vbWVudCh0aGlzLmV2ZW50LmluaXRfZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQuZW5kX2RhdGUgPSBtb21lbnQodGhpcy5ldmVudC5lbmRfZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3BlY2lhbHRpZXModGhpcy5ldmVudC5jaGFtcGlvbnNoaXAuc3BvcnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgZ2V0U3BvcnRzOiAnY29tbW9uOmdldFNwb3J0cycsXHJcbiAgICAgICAgICAgICAgICBnZXRDYXRlZ29yaWVzOiAnY29tbW9uOmdldENhdGVnb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgZ2V0Q2hhbXBpb25zaGlwczogJ2NvbW1vbjpnZXRDaGFtcGlvbnNoaXBzJyxcclxuICAgICAgICAgICAgICAgIGdldFNwZWNpYWx0aWVzOiAnY29tbW9uOmdldFNwZWNpYWx0aWVzJyxcclxuICAgICAgICAgICAgICAgIGdldEdlbmRlcnM6ICdjb21tb246Z2V0R2VuZGVycycsXHJcbiAgICAgICAgICAgICAgICBnZXRUeXBlczogJ2NvbW1vbjpnZXRUeXBlcycsXHJcbiAgICAgICAgICAgICAgICBnZXRSZWFjaGVzOiAnY29tbW9uOmdldFJlYWNoZXMnLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2hhbXBpb25zaGlwQ2hhbmdlZCgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnQuY2hhbXBpb25zaGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTcGVjaWFsdGllcyh0aGlzLmV2ZW50LmNoYW1waW9uc2hpcC5zcG9ydC5pZCwgKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuZmlsdGVyKChzcGVjaWFsdHkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3BlY2lhbHR5LmlkID09IHNlbGYuZXZlbnQuc3BlY2lhbHR5LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV2ZW50LnNwZWNpYWx0eSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjb21tb246U0VUX1NQRUNJQUxUSUVTJywgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQuc3BlY2lhbHR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwZWNpYWx0eUNoYW5nZWQoc3BlY2lhbHR5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQuc3BlY2lhbHR5ID0gc3BlY2lhbHR5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5Q2hhbmdlZChjYXRlZ29yeSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LmNhdGVnb3J5ID0gY2F0ZWdvcnlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVhY2hDaGFuZ2VkKHJlYWNoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQucmVhY2ggPSByZWFjaFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlQ2hhbmdlZCh0eXBlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQudHlwZSA9IHR5cGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2VuZGVyQ2hhbmdlZChnZW5kZXIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudC5nZW5kZXIgPSBnZW5kZXJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5kRGF0ZUNoYW5nZWQoZGF0ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50LmVuZF9kYXRlID0gZGF0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdERhdGVDaGFuZ2VkKGRhdGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudC5pbml0X2RhdGUgPSBkYXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkJhY2soZXZ0KXtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdldmVudHMubGlzdCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU3VibWl0KGV2dCl7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oKCk9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlID0gc2VsZi4kcmVmcy51cGxvYWRlci5nZXRGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RlcicsIHNlbGYuJHJlZnMudXBsb2FkZXIuZ2V0RmlsZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IHNlbGYucGFyc2VPYmpGb3JtRGF0YShzZWxmLmV2ZW50LnRyYW5zbGF0aW9uLCBmb3JtRGF0YSwgJ3RyYW5zbGF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnQuY2hhbXBpb25zaGlwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NoYW1waW9uc2hpcF9pZCcsIHNlbGYuZXZlbnQuY2hhbXBpb25zaGlwLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5ldmVudC5zcGVjaWFsdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc3BlY2lhbHR5X2lkJywgc2VsZi5ldmVudC5zcGVjaWFsdHkuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmV2ZW50LmNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NhdGVnb3J5X2lkJywgc2VsZi5ldmVudC5jYXRlZ29yeS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnQuZ2VuZGVyLmhhc093blByb3BlcnR5KCdnZW5kZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2dlbmRlcicsIHNlbGYuZXZlbnQuZ2VuZGVyLmdlbmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdnZW5kZXInLCBzZWxmLmV2ZW50LmdlbmRlci5zdWJzdHIoMCwgMSkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmV2ZW50LnR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZXZlbnRfdHlwZV9pZCcsIHNlbGYuZXZlbnQudHlwZS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZXZlbnQucmVhY2gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZXZlbnRfcmVhY2hfaWQnLCBzZWxmLmV2ZW50LnJlYWNoLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IHNlbGYucGFyc2VPYmpGb3JtRGF0YShzZWxmLmV2ZW50LmF0aGxldGVzLCBmb3JtRGF0YSwgJ2F0aGxldGVzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW5pdF9kYXRlJywgc2VsZi5ldmVudC5pbml0X2RhdGUuZm9ybWF0KCdERC1NTS1ZWVlZIEhIOm1tOnNzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW5kX2RhdGUnLCBzZWxmLmV2ZW50LmVuZF9kYXRlLmZvcm1hdCgnREQtTU0tWVlZWSBISDptbTpzcycpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRTZXJ2aWNlLnVwZGF0ZShzZWxmLmV2ZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3Quc3VjY2Vzc1RvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2V2ZW50cy5saXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJvciBpbiByZXNwb25zZS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2Vycm9yXS5mb3JFYWNoKCh2YWxpZGF0aW9uRXJyb3IpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QodmFsaWRhdGlvbkVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QocmVzcG9uc2UuZXJyb3JzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goYmFnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnYWRtaW4udmFsaWRhdGlvbl9lcnJvcicpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlZGl0LnZ1ZT8xOGRhMmVhZCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdhZG1pbi1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogX3ZtLiR0KCdhZG1pbi5ldmVudHMnKSxcbiAgICAgIFwiYnJlYWRjcnVtYnNcIjogX3ZtLmJyZWFkY3J1bWJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiXG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJldmVudC1mb3JtXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXIgd2l0aC1ib3JkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYWRtaW4uZXZlbnRzJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbicpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5hbWVlblwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZXZlbnRzLm5hbWUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudC50cmFuc2xhdGlvbi5uYW1lLmVuKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lblwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmFtZWVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJldmVudC50cmFuc2xhdGlvbi5uYW1lLmVuXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnZXZlbnRzLm5hbWUnKSxcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMubmFtZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmV2ZW50LnRyYW5zbGF0aW9uLm5hbWUuZW4pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdldmVudC50cmFuc2xhdGlvbi5uYW1lLmVuJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdldmVudC50cmFuc2xhdGlvbi5uYW1lLmVuJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZXZlbnQudHJhbnNsYXRpb24ubmFtZS5lbicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LnRyYW5zbGF0aW9uLmRlc2NyaXB0aW9uLmVuJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZGVzY3JpcHRpb25lblwiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZXZlbnRzLmRlc2NyaXB0aW9uJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIlxuICB9LCBbX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4pLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lblwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZGVzY3JpcHRpb25lblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW5cIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdldmVudHMuZGVzY3JpcHRpb24nKSxcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMuZGVzY3JpcHRpb24nKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5ldmVudC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdldmVudC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbicpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZXZlbnQudHJhbnNsYXRpb24uZGVzY3JpcHRpb24uZW4nKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdldmVudC50cmFuc2xhdGlvbi5kZXNjcmlwdGlvbi5lbicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTYgdGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ2RuYy1pbWFnZS11cGxvYWRlcicsIHtcbiAgICByZWY6IFwidXBsb2FkZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJidG4tdGV4dFwiOiBfdm0uJHQoJ2V2ZW50cy51cGxvYWRfaW1hZ2UnKSxcbiAgICAgIFwiZXJyb3ItdmFsaWRhdGlvbi1tc2dcIjogX3ZtLiR0KCd2YWxpZGF0aW9uLmltYWdlJywge1xuICAgICAgICBhdHRyaWJ1dGU6IF92bS4kdCgnZXZlbnRzLnVwbG9hZF9pbWFnZScpXG4gICAgICB9KSxcbiAgICAgIFwiaW1hZ2VcIjogX3ZtLmV2ZW50LmltYWdlLFxuICAgICAgXCJkZWZhdWx0LWltYWdlXCI6IFwiL2ltYWdlcy9taXNzaW5nL2V2ZW50L21pc3NpbmcucG5nXCJcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZXZlbnQuY2hhbXBpb25zaGlwJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BvcnRzXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdldmVudHMuY2hhbXBpb25zaGlwJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV2ZW50LmNoYW1waW9uc2hpcCxcbiAgICAgIFwibGFiZWxcIjogXCJuYW1lXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uY2hhbXBpb25zaGlwQ2hhbmdlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdldmVudHMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5jaGFtcGlvbnNoaXBzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50LmNoYW1waW9uc2hpcCksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50LmNoYW1waW9uc2hpcFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY2hhbXBpb25zaGlwX2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImV2ZW50LmNoYW1waW9uc2hpcFwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2V2ZW50cy5jaGFtcGlvbnNoaXAnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC5jaGFtcGlvbnNoaXApXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXZlbnQuY2hhbXBpb25zaGlwID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdldmVudC5jaGFtcGlvbnNoaXAnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2V2ZW50LmNoYW1waW9uc2hpcCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2V2ZW50LmNoYW1waW9uc2hpcCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZXZlbnQuc3BlY2lhbHR5JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BvcnRzXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdldmVudHMuc3BlY2lhbHR5JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV2ZW50LnNwZWNpYWx0eSxcbiAgICAgIFwibGFiZWxcIjogXCJuYW1lXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uc3BlY2lhbHR5Q2hhbmdlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdldmVudHMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5zcGVjaWFsdGllc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudC5zcGVjaWFsdHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC5zcGVjaWFsdHlcIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInNwZWNpYWx0eV9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJldmVudC5zcGVjaWFsdHlcIixcbiAgICAgIFwiZmllbGRcIjogXCJzcGVjaWFsdHlfaW5wdXRcIixcbiAgICAgIFwiaW5pdGlhbFwiOiBcIm9mZlwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2V2ZW50cy5zcGVjaWFsdHknKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC5zcGVjaWFsdHkpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXZlbnQuc3BlY2lhbHR5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdldmVudC5zcGVjaWFsdHknKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2V2ZW50LnNwZWNpYWx0eScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2V2ZW50LnNwZWNpYWx0eScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCdldmVudC5jYXRlZ29yeScpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcInNwb3J0c1wiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZXZlbnRzLmNhdGVnb3J5JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV2ZW50LmNhdGVnb3J5LFxuICAgICAgXCJsYWJlbFwiOiBcIm5hbWVcIixcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5jYXRlZ29yeUNoYW5nZWQsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS4kdCgnZXZlbnRzLnNlbGVjdF9vcHRpb24nKSxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0uY2F0ZWdvcmllc1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudC5jYXRlZ29yeSksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50LmNhdGVnb3J5XCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjYXRlZ29yeV9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJldmVudC5jYXRlZ29yeVwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBfdm0uJHQoJ2V2ZW50cy5jYXRlZ29yeScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmV2ZW50LmNhdGVnb3J5KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmV2ZW50LmNhdGVnb3J5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCdldmVudC5jYXRlZ29yeScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZXZlbnQuY2F0ZWdvcnknKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdldmVudC5jYXRlZ29yeScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZXZlbnQuZ2VuZGVyJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwic3BvcnRzXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdldmVudHMuZ2VuZGVyJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV2ZW50LmdlbmRlcixcbiAgICAgIFwibGFiZWxcIjogXCJuYW1lXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0uZ2VuZGVyQ2hhbmdlZCxcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLiR0KCdldmVudHMuc2VsZWN0X29wdGlvbicpLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5nZW5kZXJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50LmdlbmRlciksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50LmdlbmRlclwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiZ2VuZGVyX2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImV2ZW50LmdlbmRlclwiLFxuICAgICAgXCJmaWVsZFwiOiBcImdlbmRlcl9pbnB1dFwiLFxuICAgICAgXCJpbml0aWFsXCI6IFwib2ZmXCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IF92bS4kdCgnZXZlbnRzLmdlbmRlcicpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmV2ZW50LmdlbmRlcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5ldmVudC5nZW5kZXIgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LmdlbmRlcicpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZXZlbnQuZ2VuZGVyJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZXZlbnQuZ2VuZGVyJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LnR5cGUnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJzcG9ydHNcIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2V2ZW50cy50eXBlJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV2ZW50LnR5cGUsXG4gICAgICBcImxhYmVsXCI6IFwidHlwZVwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLnR5cGVDaGFuZ2VkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2V2ZW50cy5zZWxlY3Rfb3B0aW9uJyksXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnR5cGVzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50LnR5cGUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC50eXBlXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0eXBlX2lucHV0XCIsXG4gICAgICBcInR5cGVcIjogXCJoaWRkZW5cIixcbiAgICAgIFwibmFtZVwiOiBcImV2ZW50LnR5cGVcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMudHlwZScpXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmV2ZW50LnR5cGUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZXZlbnQudHlwZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQudHlwZScpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygnZXZlbnQudHlwZScpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ2V2ZW50LnR5cGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LnJlYWNoJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwicmVhY2hlc1wiLFxuICAgICAgXCJkYXRhLWVycm9yXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZXZlbnRzLnJlYWNoJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndi1zZWxlY3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmV2ZW50LnJlYWNoLFxuICAgICAgXCJsYWJlbFwiOiBcInJlYWNoXCIsXG4gICAgICBcIm9uLWNoYW5nZVwiOiBfdm0ucmVhY2hDaGFuZ2VkLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0uJHQoJ2V2ZW50cy5zZWxlY3Rfb3B0aW9uJyksXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnJlYWNoZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZXZlbnQucmVhY2gpLFxuICAgICAgZXhwcmVzc2lvbjogXCJldmVudC5yZWFjaFwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwicmVhY2hfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXZlbnQucmVhY2hcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMucmVhY2gnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC5yZWFjaClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5ldmVudC5yZWFjaCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQucmVhY2gnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2V2ZW50LnJlYWNoJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZXZlbnQucmVhY2gnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygnZXZlbnQuaW5pdF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiaW5pdF9kYXRlXCIsXG4gICAgICBcImRhdGEtZXJyb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdldmVudHMuaW5pdF9kYXRlJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndnVlLWRhdGV0aW1lLXBpY2tlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ2dWUtcGlja2VyMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJpbml0X2RhdGVcIixcbiAgICAgIFwibW9kZWxcIjogX3ZtLmV2ZW50LmluaXRfZGF0ZSxcbiAgICAgIFwib24tY2hhbmdlXCI6IF92bS5pbml0RGF0ZUNoYW5nZWQsXG4gICAgICBcInR5cGVcIjogXCJkYXRldGltZVwiLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcImVuXCIsXG4gICAgICBcImRhdGV0aW1lLWZvcm1hdFwiOiBcIkxMTFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmV2ZW50LmluaXRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50LmluaXRfZGF0ZVwiXG4gICAgfSwge1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW5pdF9pbnB1dFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiaGlkZGVuXCIsXG4gICAgICBcIm5hbWVcIjogXCJldmVudC5pbml0X2RhdGVcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMuaW5pdF9kYXRlJylcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZXZlbnQuaW5pdF9kYXRlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmV2ZW50LmluaXRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQuaW5pdF9kYXRlJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCdldmVudC5pbml0X2RhdGUnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCdldmVudC5pbml0X2RhdGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ2V2ZW50LmVuZF9kYXRlJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwiZW5kX2RhdGVcIixcbiAgICAgIFwiZGF0YS1lcnJvclwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2V2ZW50cy5lbmRfZGF0ZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Z1ZS1kYXRldGltZS1waWNrZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidnVlLXBpY2tlcjNcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiZW5kX2RhdGVcIixcbiAgICAgIFwibW9kZWxcIjogX3ZtLmV2ZW50LmVuZF9kYXRlLFxuICAgICAgXCJ0eXBlXCI6IFwiZGF0ZXRpbWVcIixcbiAgICAgIFwibGFuZ3VhZ2VcIjogXCJlblwiLFxuICAgICAgXCJvbi1jaGFuZ2VcIjogX3ZtLmVuZERhdGVDaGFuZ2VkLFxuICAgICAgXCJkYXRldGltZS1mb3JtYXRcIjogXCJMTExcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5ldmVudC5lbmRfZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW50LmVuZF9kYXRlXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJlbmRfaW5wdXRcIixcbiAgICAgIFwidHlwZVwiOiBcImhpZGRlblwiLFxuICAgICAgXCJuYW1lXCI6IFwiZXZlbnQuZW5kX2RhdGVcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogX3ZtLiR0KCdldmVudHMuZW5kX2RhdGUnKVxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5ldmVudC5lbmRfZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5ldmVudC5lbmRfZGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygnZXZlbnQuZW5kX2RhdGUnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ2V2ZW50LmVuZF9kYXRlJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgnZXZlbnQuZW5kX2RhdGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgdGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbkJhY2tcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdmb3Jtcy5iYWNrJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2Rpc2FibGVkJzogX3ZtLnVwZGF0aW5nXG4gICAgfSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCIsXG4gICAgICBcImhyZWZcIjogXCIjIVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25TdWJtaXRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdmb3Jtcy5zYXZlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pXSldKV0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYWRkb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlclwiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFkZG9uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJcIlxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtODkzZjRmMzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTg5M2Y0ZjMwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2V2ZW50cy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gNDAiXSwic291cmNlUm9vdCI6IiJ9