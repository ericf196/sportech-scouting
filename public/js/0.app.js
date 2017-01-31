webpackJsonp([0,22],{

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(288),
  /* template */
  __webpack_require__(346),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24779b58", Component.options)
  } else {
    hotAPI.reload("data-v-24779b58", Component.options)
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

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeConverter = function () {
    function TimeConverter() {
        _classCallCheck(this, TimeConverter);
    }

    _createClass(TimeConverter, null, [{
        key: "toHHMMSS",
        value: function toHHMMSS(secs) {
            var sec_num = parseInt(secs, 10); // don't forget the second param
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - hours * 3600) / 60);
            var seconds = sec_num - hours * 3600 - minutes * 60;

            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return hours + ':' + minutes + ':' + seconds;
        }
    }, {
        key: "toSS",
        value: function toSS(secs) {
            var sec_num = parseInt(secs, 10); // don't forget the second param
            var hours = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - hours * 3600) / 60);
            var seconds = sec_num - hours * 3600 - minutes * 60;

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return seconds;
        }
    }]);

    return TimeConverter;
}();

exports.default = TimeConverter;

/***/ }),

/***/ 211:
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
            "no_touches": "There are no registered tocuhes"
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
            "no_touches": "No hay toques registrados"
        }
    }
};

/***/ }),

/***/ 229:
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
    }
};

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(261);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(260);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function () {
    function Action(start, end, color) {
        _classCallCheck(this, Action);

        this.state = (0, _mockstate.getState)('*');
        var uuid = new _UuidUtil2.default();
        this.id = uuid.generateUUID();
        this.start = start;
        this.end = end;
        this.color = color;
        this.mouseIsOver = false;
        this.isSelected = false;
        this.x = null;
        this.y = null;
        this.width = 0;
        this.height = 0;
        this.limitTextY = 30 + this.state.touchManager.inspector.timeline.startY;
        this.secondsUtil = new _SecondsUtil2.default();
        this.canvaContainer = null;
        this.leftTags = [];
        this.rightTags = [];
    }

    _createClass(Action, [{
        key: 'draw',
        value: function draw() {
            this.x = this.calculateX();
            this.y = this.y ? this.y : this.calculateY();
            this.width = this.calculateWidth();
            this.height = this.calculateHeight();
            this.isSelected = false;
            if (this.state.touchManager.selectedAction) {
                if (this.state.touchManager.selectedAction.id == this.id) {
                    this.isSelected = true;
                }
            }

            if (this.isSelected) {
                this.color.rgba.alpha = 100;
                inspector.noStroke();
                inspector.textSize(12);
                inspector.textStyle(inspector.NORMAL);
                inspector.fill(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b, 100);
                inspector.rect(this.x + this.width - 30, this.limitTextY, 60, 15);
                inspector.rect(this.x - 30, this.limitTextY, 60, 15);
                inspector.fill(255, 255, 255, 100);
                inspector.textStyle(inspector.BOLD);
                inspector.text(_TimeConverter2.default.toHHMMSS(this.start), this.x - 30, this.limitTextY, 60, 20);
                inspector.text(_TimeConverter2.default.toHHMMSS(this.end), this.x - 30 + this.width, this.limitTextY, 60, 20);
                inspector.textAlign(inspector.CENTER);
                inspector.stroke(inspector.color(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b));
                inspector.strokeWeight(2);
                inspector.line(this.x, this.limitTextY + 20, this.x, this.state.touchManager.inspector.timeline.endY);
                inspector.line(this.x + this.width, this.limitTextY + 20, this.x + this.width, this.state.touchManager.inspector.timeline.endY);
            }

            if (this.end - this.state.touchManager.inspector.timeline.startTime > 0) {
                inspector.fill(255);
                inspector.fill(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b, this.color.rgba.alpha); // Use color variable 'c' as fill color
                inspector.strokeWeight(1);
                inspector.stroke(51);
                inspector.stroke(this.color.rgba.r * 0.75, this.color.rgba.g * 0.75, this.color.rgba.b * 0.75);
                inspector.rect(this.x, this.y, this.width, this.height); // Draw rectangle
                inspector.rect(this.x, this.y + 60, this.width, this.height); // Draw rectangle

                inspector.fill(0, 0, 0, 100);
            }
        }
    }, {
        key: 'editPressed',
        value: function editPressed(action, event) {
            event.preventDefault();
            (0, _mockstate.dispatch)('setSelectedAction', action);
            vm.editTouch(event, action);
        }
    }, {
        key: 'isMouseOver',
        value: function isMouseOver(x, y) {
            if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height * 2) {
                this.color.rgba.alpha = 100;
                this.mouseIsOver = true;
            } else {
                this.color.rgba.alpha = 50;
                this.mouseIsOver = false;
            }
            return this.mouseIsOver;
        }
    }, {
        key: 'isMousePresssedOver',
        value: function isMousePresssedOver(x, y) {
            if (!this.state.touchManager.recordingAction && !this.state.touchManager.recordingTouch) {
                if (y >= this.state.touchManager.inspector.timeline.startY) {
                    if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height * 2) {
                        this.isSelected = true;
                        vm.$refs.player.api().abLoopPlugin.setStart(this.start).setEnd(this.end).enable();
                        vm.$refs.player.api().abLoopPlugin.goToStart();
                        (0, _mockstate.dispatch)('setSelectedAction', this);
                    } else {
                        this.isSelected = false;
                    }
                }
            }
        }
    }, {
        key: 'calculateX',
        value: function calculateX() {
            var start = (this.start - this.state.touchManager.inspector.timeline.startTime) * this.state.touchManager.inspector.timeline.secondWidth;
            return start + this.state.touchManager.inspector.timeline.startX;
        }
    }, {
        key: 'calculateY',
        value: function calculateY() {
            return 61 + this.state.touchManager.inspector.timeline.startY;
        }
    }, {
        key: 'calculateWidth',
        value: function calculateWidth() {
            var start = (this.start - this.state.touchManager.inspector.timeline.startTime) * this.state.touchManager.inspector.timeline.secondWidth;
            if (start < 0) {
                return (this.end - this.state.touchManager.inspector.timeline.startTime) * this.state.touchManager.inspector.timeline.secondWidth;
            }
            return (this.end - this.start) * this.state.touchManager.inspector.timeline.secondWidth;
        }
    }, {
        key: 'calculateHeight',
        value: function calculateHeight() {
            return 60;
        }
    }]);

    return Action;
}();

exports.default = Action;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

exports.default = {
    methods: {
        checkCollide: function checkCollide(touch) {
            var touches = _.reject((0, _mockstate.getState)('touchManager').touches, function (o) {
                return touch.id == o.id;
            });
            touches.push(touch);
            var overlap = this.overlap(touches);
            return {
                collide: overlap.overlap,
                collideTouches: overlap.ranges
            };
        },
        checkCollideActions: function checkCollideActions(action) {
            if ((0, _mockstate.getState)('touchManager').selectedTouch) {
                var selectedTouch = (0, _mockstate.getState)('touchManager').selectedTouch;
                var overlap = null;
                if (selectedTouch) {
                    var actions = _.reject(selectedTouch.actions, function (o) {
                        return action.id == o.id;
                    });
                    actions.push(action);
                    overlap = this.overlap(actions);
                } else {
                    overlap = { overlap: false, ranges: [] };
                }
            } else {
                overlap = { overlap: false, ranges: [] };
            }

            return {
                collide: overlap.overlap,
                collideActions: overlap.ranges
            };
        },
        overlap: function overlap(touches) {
            var sortedRanges = touches.sort(function (previous, current) {

                var previousTime = parseInt(previous.start);
                var currentTime = parseInt(current.start);

                // if the previous is earlier than the current
                if (previousTime < currentTime) {
                    return -1;
                }

                /* if the previous time is the same as the current time
                 if (previousTime === currentTime) {
                 return 0;
                 }*/

                // if the previous time is later than the current time
                return 1;
            });

            // return the final results
            return sortedRanges.reduce(function (result, current, idx, arr) {
                // get the previous range
                if (idx === 0) {
                    return result;
                }
                var previous = arr[idx - 1];

                // check for any overlap
                var previousEnd = parseInt(previous.end);
                var currentStart = parseInt(current.start);
                var overlap = previousEnd > currentStart;

                // store the result
                if (overlap) {
                    // yes, there is overlap
                    result.overlap = true;
                    // store the specific ranges that overlap
                    result.ranges.push({
                        previous: previous,
                        current: current
                    });
                }

                return result;

                // seed the reduce
            }, { overlap: false, ranges: [] });
        }
    }
}; // define a mixin object

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        generateUUID: function generateUUID() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }
    }
};

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(261);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(260);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _Action = __webpack_require__(230);

var _Action2 = _interopRequireDefault(_Action);

var _mockstate = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Touch = function () {
    function Touch(start, end, text, color, actions) {
        _classCallCheck(this, Touch);

        this.state = (0, _mockstate.getState)('*');
        var uuid = new _UuidUtil2.default();
        this.id = uuid.generateUUID();
        this.start = start;
        this.end = end;
        this.color = color;
        this.text = text;
        this.mouseIsOver = false;
        this.isSelected = false;
        this.x = null;
        this.y = null;
        this.width = 0;
        this.height = 0;
        this.limitTextY = 30 + this.state.timeline.startY;
        this.actions = actions ? actions : [];
    }

    _createClass(Touch, [{
        key: 'draw',
        value: function draw() {
            this.x = this.calculateX();
            this.y = this.y ? this.y : this.calculateY();
            this.width = this.calculateWidth();
            this.height = this.calculateHeight();
            this.isSelected = false;
            if (this.state.touchManager.selectedTouch) {
                if (this.state.touchManager.selectedTouch.id == this.id) {
                    this.isSelected = true;
                }
            }
            if (this.isSelected) {
                this.color.rgba.alpha = 100;
                p.noStroke();
                p.textSize(12);
                p.textStyle(p.NORMAL);
                p.fill(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b, 100);
                p.rect(this.x + this.width - 30, this.limitTextY, 60, 15);
                p.rect(this.x - 30, this.limitTextY, 60, 15);
                p.fill(255, 255, 255, 100);
                p.textStyle(p.BOLD);
                p.text(_TimeConverter2.default.toHHMMSS(this.start), this.x - 30, this.limitTextY, 60, 20);
                p.text(_TimeConverter2.default.toHHMMSS(this.end), this.x - 30 + this.width, this.limitTextY, 60, 20);
                p.textAlign(p.CENTER);
                p.stroke(p.color(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b));
                p.strokeWeight(2);
                p.line(this.x, this.limitTextY + 20, this.x, this.state.timeline.endY);
                p.line(this.x + this.width, this.limitTextY + 20, this.x + this.width, this.state.timeline.endY);
            }

            if (this.end - this.state.timeline.startTime > 0) {
                p.fill(255);
                p.fill(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b, this.color.rgba.alpha); // Use color variable 'c' as fill color
                p.noStroke(); // Don't draw a stroke around shapes
                p.rect(this.x, this.y, this.width, this.height); // Draw rectangle
                p.strokeWeight(0);
                p.textSize(12);
                p.textStyle(p.NORMAL);
                p.fill(255, 255, 255, this.color.rgba.alpha); // Use color variable 'c' as fill color
                p.rect(this.x + 2, this.y + 1, this.width - 4, 20); // Draw rectangle
                p.fill(0, 0, 0, this.color.rgba.alpha);
                p.text(this.text, this.x + 2, this.y + 1, this.width - 4, 20);
                p.textAlign(p.CENTER);
                p.fill(0, 0, 0, 100);
            }
        }
    }, {
        key: 'drawActions',
        value: function drawActions() {
            for (var j = 0; j < this.actions.length; j++) {
                this.actions[j].draw();
            }
        }
    }, {
        key: 'editPressed',
        value: function editPressed(touch, event) {
            event.preventDefault();
            (0, _mockstate.dispatch)('setSelectedTouch', touch);
            vm.editTouch(event, touch);
        }
    }, {
        key: 'isMouseOver',
        value: function isMouseOver(x, y) {
            if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
                this.color.rgba.alpha = 100;
                this.mouseIsOver = true;
            } else {
                this.color.rgba.alpha = 50;
                this.mouseIsOver = false;
            }
            return this.mouseIsOver;
        }
    }, {
        key: 'isMousePresssedOver',
        value: function isMousePresssedOver(x, y) {
            if (!this.state.touchManager.recordingAction && !this.state.touchManager.recordingTouch) {
                if (y >= this.state.timeline.startY) {
                    if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
                        this.isSelected = true;
                        if (!vm.started) {
                            vm.$refs.player.api().abLoopPlugin.setStart(this.start).setEnd(this.end).enable();
                            vm.$refs.player.api().abLoopPlugin.goToStart();
                            vm.$refs.player.api().play();
                            (0, _mockstate.dispatch)('setSelectedTouch', this);
                        }
                    } else {
                        this.isSelected = false;
                    }
                }
            }
        }
    }, {
        key: 'calculateX',
        value: function calculateX() {
            var start = (this.start - this.state.timeline.startTime) * this.state.timeline.secondWidth;
            if (start < 0) {
                return 30;
            }

            return start + 30;
        }
    }, {
        key: 'calculateY',
        value: function calculateY() {
            return 61 + this.state.timeline.startY;
        }
    }, {
        key: 'calculateWidth',
        value: function calculateWidth() {
            var start = (this.start - this.state.timeline.startTime) * this.state.timeline.secondWidth;
            if (start < 0) {
                return (this.end - this.state.timeline.startTime) * this.state.timeline.secondWidth;
            }
            return (this.end - this.start) * this.state.timeline.secondWidth;
        }
    }, {
        key: 'calculateHeight',
        value: function calculateHeight() {
            return 60;
        }
    }, {
        key: 'getFormatedStart',
        value: function getFormatedStart() {
            _TimeConverter2.default.toHHMMSS(this.start);
        }
    }]);

    return Touch;
}();

exports.default = Touch;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SecondsUtil = function () {
    function SecondsUtil() {
        _classCallCheck(this, SecondsUtil);

        this.state = (0, _mockstate.getState)('*');
    }

    _createClass(SecondsUtil, [{
        key: 'getFormattedTime',
        value: function getFormattedTime(x) {
            return _TimeConverter2.default.toHHMMSS(Math.floor(x / this.state.timeline.secondWidth));
        }
    }, {
        key: 'getSeconds',
        value: function getSeconds(x) {
            return Math.floor(x / this.state.timeline.secondWidth);
        }
    }]);

    return SecondsUtil;
}();

exports.default = SecondsUtil;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UuidUtil = function () {
    function UuidUtil() {
        _classCallCheck(this, UuidUtil);
    }

    _createClass(UuidUtil, [{
        key: 'generateUUID',
        value: function generateUUID() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }
    }]);

    return UuidUtil;
}();

exports.default = UuidUtil;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {!function(e,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VueColor=o():e.VueColor=o()}(this,function(){return function(e){function o(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=t(38),a=r(i),n=t(39),s=r(n),l=t(42),c=r(l),u=t(43),h=r(u),d=t(40),f=r(d),p=t(41),_=r(p),v=t(37),g=r(v),b=t(6),m=r(b),x=t(8),w=r(x),C=t(4),y=r(C),k=t(5),F=r(k),R=t(7),A=r(R),M=t(3),P=r(M),N={version:"1.0.26",Compact:a["default"],Material:s["default"],Slider:c["default"],Swatches:h["default"],Photoshop:f["default"],Sketch:_["default"],Chrome:g["default"],Alpha:m["default"],Checkboard:w["default"],EditableInput:y["default"],Hue:F["default"],Saturation:A["default"],ColorMixin:P["default"]};e.exports=N},function(e,o){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],o=0;o<this.length;o++){var t=this[o];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<o.length;i++){var n=o[i];"number"==typeof n[0]&&r[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),e.push(n))}},e}},function(e,o,t){function r(e,o){for(var t=0;t<e.length;t++){var r=e[t],i=h[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(l(r.parts[a],o))}else{for(var n=[],a=0;a<r.parts.length;a++)n.push(l(r.parts[a],o));h[r.id]={id:r.id,refs:1,parts:n}}}}function i(e){for(var o=[],t={},r=0;r<e.length;r++){var i=e[r],a=i[0],n=i[1],s=i[2],l=i[3],c={css:n,media:s,sourceMap:l};t[a]?t[a].parts.push(c):o.push(t[a]={id:a,parts:[c]})}return o}function a(e,o){var t=p(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(o,r.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),g.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function n(e){e.parentNode.removeChild(e);var o=g.indexOf(e);o>=0&&g.splice(o,1)}function s(e){var o=document.createElement("style");return o.type="text/css",a(e,o),o}function l(e,o){var t,r,i;if(o.singleton){var a=v++;t=_||(_=s(o)),r=c.bind(null,t,a,!1),i=c.bind(null,t,a,!0)}else t=s(o),r=u.bind(null,t),i=function(){n(t)};return r(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;r(e=o)}else i()}}function c(e,o,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(o,i);else{var a=document.createTextNode(i),n=e.childNodes;n[o]&&e.removeChild(n[o]),n.length?e.insertBefore(a,n[o]):e.appendChild(a)}}function u(e,o){var t=o.css,r=o.media,i=o.sourceMap;if(r&&e.setAttribute("media",r),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var h={},d=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},f=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=d(function(){return document.head||document.getElementsByTagName("head")[0]}),_=null,v=0,g=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=f()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=i(e);return r(t,o),function(e){for(var a=[],n=0;n<t.length;n++){var s=t[n],l=h[s.id];l.refs--,a.push(l)}if(e){var c=i(e);r(c,o)}for(var n=0;n<a.length;n++){var l=a[n];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete h[l.id]}}}};var b=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,o){e.a&&e.a>1&&(e.a=1);var t=e.hex?(0,n["default"])(e.hex):(0,n["default"])(e),r=t.toHsl(),i=t.toHsv();return 0===r.s&&(r.h=e.h||o||0,i.h=e.h||o||0),{hsl:r,hex:t.toHexString().toUpperCase(),rgba:t.toRgb(),hsv:i,oldHue:e.h||o||r.h,source:e.source,a:e.a}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(36),n=r(a);o["default"]={props:["value"],data:function(){return{val:i(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("change-color",e)}}},watch:{value:function(e){this.val=i(e)}},created:function(){},methods:{colorChange:function(e,o){this.colors=i(e,o||this.oldHue),this.oldHue=this.colors.hsl.h},isValidHex:function(e){return(0,n["default"])(e).isValid()},simpleCheckForValidColor:function(e){for(var o=["r","g","b","a","h","s","a","v"],t=0,r=0,i=0;i<o.length;i++){var a=o[i];e[a]&&(t++,isNaN(e[a])||r++)}return t===r?e:void 0}}}},function(e,o,t){var r,i;t(57),r=t(18);var a=t(45);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(58),r=t(19);var a=t(46);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(66),r=t(16);var a=t(54);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(59),r=t(20);var a=t(47);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(67),r=t(17);var a=t(55);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),h=r(u),d=t(6),f=r(d);o["default"]={name:"Chrome",mixins:[a["default"]],props:{},components:{saturation:c["default"],hue:h["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},toggleViews:function(){return this.fieldsIndex>=2?void(this.fieldsIndex=0):void this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(4),s=r(n),l=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];o["default"]={name:"Compact",mixins:[a["default"]],props:{},components:{"ed-in":s["default"]},computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:l}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(4),a=r(i),n=t(3),s=r(n);o["default"]={name:"Material",mixins:[s["default"]],components:{"ed-in":a["default"]},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),h=r(u),d=t(6),f=r(d);o["default"]={name:"Photoshop",mixins:[a["default"]],props:{head:{type:String,"default":"Color Picker"}},components:{saturation:c["default"],hue:h["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{currentColor:"#FFF"}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},handleAccept:function(){this.$dispatch("ok")},handleCancel:function(){this.$dispatch("cancel")}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),h=r(u),d=t(6),f=r(d),p=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];o["default"]={name:"Sketch",mixins:[a["default"]],components:{saturation:c["default"],hue:h["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{presetColors:p}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(3),a=r(i),n=t(5),s=r(n);o["default"]={name:"Slider",mixins:[a["default"]],props:{direction:String},components:{hue:s["default"]},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100===.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,o){this.colorChange({h:this.colors.hsl.h,s:.5,l:o,source:"hsl"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(35),a=r(i),n=t(3),s=r(n),l=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey"],c=["900","700","500","300","100"],u=function(){var e=[];return l.forEach(function(o){var t=[];c.forEach(function(e){t.push(a["default"][o][e].toUpperCase())}),e.push(t)}),e}();o["default"]={name:"Swatches",mixins:[s["default"]],computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:u}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(8),a=r(i);o["default"]={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:a["default"]},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,o=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+o+", 0) 0%, rgba("+o+", 1) 100%)"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r=this.$refs.container,i=r.clientWidth,a=(e.pageX||e.touches[0].pageX)-(r.getBoundingClientRect().left+window.pageXOffset);t=0>a?0:a>i?1:Math.round(100*a/i)/100,this.colors.a!==t&&this.$emit("on-change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:t,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o){"use strict";function t(e,o,t){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*t;var i=r.getContext("2d");return i?(i.fillStyle=e,i.fillRect(0,0,r.width,r.height),i.fillStyle=o,i.fillRect(0,0,t,t),i.translate(t,t),i.fillRect(0,0,t,t),r.toDataURL()):null}function r(e,o,r){var a=e+","+o+","+r;if(i[a])return i[a];var n=t(e,o,r);return i[a]=n,n}Object.defineProperty(o,"__esModule",{value:!0});var i={};o["default"]={name:"Checkboard",props:{size:{type:[Number,String],"default":8},white:{type:String,"default":"#fff"},grey:{type:String,"default":"#e6e6e6"}},computed:{bgStyle:function(){return"url("+r(this.white,this.grey,this.size)+") center left"}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"editableInput",props:{label:String,value:[String,Number],max:Number,arrowOffset:{type:Number,"default":1}},computed:{val:function(){return this.value}},filters:{maxFilter:{read:function(e){return this.max&&e>this.max?this.max:e},write:function(e,o){return e}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var o={};o[this.label]=e,this.$emit("on-change",o)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var o=this.val,t=Number(o);if(t){var r=this.arrowOffset||1;38===e.keyCode&&(o=t+r,this.handleChange(o),e.preventDefault()),40===e.keyCode&&(o=t-r,this.handleChange(o),e.preventDefault())}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"Hue",props:{value:Object,direction:{type:String,"default":"horizontal"}},computed:{colors:function(){return this.value},directionClass:function(){return{"vue-color__c-hue--horizontal":"horizontal"===this.direction,"vue-color__c-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?-(100*this.colors.hsl.h/360)+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r,i=this.$refs.container,a=i.clientWidth,n=i.clientHeight,s=(e.pageX||e.touches[0].pageX)-(i.getBoundingClientRect().left+window.pageXOffset),l=(e.pageY||e.touches[0].pageY)-(i.getBoundingClientRect().top+window.pageYOffset);"vertical"===this.direction?(0>l?t=359:l>n?t=0:(r=-(100*l/n)+100,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(0>s?t=0:s>a?t=359:(r=100*s/a,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(33),a=r(i);o["default"]={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsl.h+",100%, 50%)"},pointerTop:function(){return-(100*this.colors.hsv.v)+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,a["default"])(function(e,o){e(o)},50),handleChange:function(e,o){!o&&e.preventDefault();var t=this.$refs.container,r=t.clientWidth,i=t.clientHeight,a=(e.pageX||e.touches[0].pageX)-(t.getBoundingClientRect().left+window.pageXOffset),n=(e.pageY||e.touches[0].pageY)-(t.getBoundingClientRect().top+window.pageYOffset);0>a?a=0:a>r?a=r:0>n?n=0:n>i&&(n=i);var s=100*a/r,l=-(100*n/i)+100;this.throttle(this.onChange,{h:this.colors.hsl.h,s:s,v:l,a:this.colors.hsl.a,source:"rgb"})},onChange:function(e){this.$emit("on-change",e)},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__material .vue-color__editable-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vue-color__material .vue-color__editable-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vue-color__material__hex{border-bottom-width:2px;border-bottom-style:solid}.vue-color__material__split{display:flex;margin-right:-10px;padding-top:11px}.vue-color__material__third{flex:1;padding-right:10px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__editable-input{position:relative}.vue-color__editable-input__input{padding:0;border:0;outline:none}.vue-color__editable-input__label{text-transform:capitalize}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vue-color__c-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue__container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vue-color__c-hue__pointer{z-index:2;position:absolute}.vue-color__c-hue__picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__saturation,.vue-color__saturation--black,.vue-color__saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0}.vue-color__saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vue-color__saturation--black{background:linear-gradient(0deg,#000,transparent)}.vue-color__saturation--pointer{cursor:pointer;position:absolute}.vue-color__saturation--circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__slider{position:relative;width:410px}.vue-color__slider__hue-warp{height:12px;position:relative}.vue-color__slider__hue-warp .vue-color__c-hue__picker{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__slider__swatches{display:flex;margin-top:20px}.vue-color__slider__swatch{margin-right:1px;flex:1;width:20%}.vue-color__slider__swatch:first-child{margin-right:1px}.vue-color__slider__swatch:first-child .vue-color__slider__swatch-picker{border-radius:2px 0 0 2px}.vue-color__slider__swatch:last-child{margin-right:0}.vue-color__slider__swatch:last-child .vue-color__slider__swatch-picker{border-radius:0 2px 2px 0}.vue-color__slider__swatch-picker{cursor:pointer;height:12px}.vue-color__slider__swatch-picker--active{transform:scaleY(1.8);border-radius:3.6px/2px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__compact{padding-top:5px;padding-left:5px;width:240px;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__compact__colors{overflow:hidden;padding:0;margin:0}.vue-color__compact__color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vue-color__compact__color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vue-color__compact__color-item--white .vue-color__compact__dot{background:#000}.vue-color__compact__dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}.vue-color__compact__fields{display:flex;padding-bottom:6px;padding-right:5px;position:relative}.vue-color__compact__fields .vue-color__editable-input__input{width:70%;padding-left:30%;background:none;font-size:12px;color:#333;height:16px}.vue-color__compact__fields .vue-color__editable-input__label{position:absolute;top:3px;left:0;line-height:16px;text-transform:uppercase;font-size:12px;color:#999}.vue-color__compact__pick-color{position:absolute;top:6px;left:5px;height:9px;width:9px}.vue-color__compact__col-3{flex:1}.vue_color__compact__col-hex{flex:2}.vue_color__compact__col-hex .vue-color__editable-input__input{width:80%;padding-left:20%}.vue_color__compact__col-hex .vue-color__editable-input__label{display:none}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.vue-colors__photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vue-colors__photoshop__head{background-image:linear-gradient(-180deg,#f0f0f0,#d4d4d4);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vue-colors__photoshop__body{padding:15px;display:flex}.vue-colors__photoshop__saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vue-colors__photoshop__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-colors__photoshop__hue-wrap{position:relative;height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vue-colors__photoshop__hue-pointer{position:relative}.vue-colors__photoshop__hue-pointer--left,.vue-colors__photoshop__hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vue-colors__photoshop__hue-pointer--left:after,.vue-colors__photoshop__hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;transform:translate(-8px,-5px)}.vue-colors__photoshop__hue-pointer--left{transform:translate(-13px,-4px)}.vue-colors__photoshop__hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vue-colors__photoshop__controls{width:180px;margin-left:10px;display:flex}.vue-colors__photoshop__actions{margin-left:20px;flex:1}.vue-colors__photoshop__ac-btn{cursor:pointer;background-image:linear-gradient(-180deg,#fff,#e6e6e6);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vue-colors__photoshop__previews{width:60px}.vue-colors__photoshop__previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vue-colors__photoshop__previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vue-colors__photoshop__previews__label{font-size:14px;color:#000;text-align:center}.vue-colors__photoshop__fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vue-colors__photoshop__fields .vue-color__editable-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vue-colors__photoshop__fields .vue-color__editable-input__label{top:0;left:0;width:34px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vue-colors__photoshop__fields__divider{height:5px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}',""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vue-color__swatches__box{padding:16px 0 6px 16px;overflow:hidden}.vue-color__swatches__color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vue-color__swatches__color-it{width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;border-radius:2px 2px 0 0}.vue-color__swatches__pick{fill:#fff;margin-left:8px;display:block}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo;background-color:#fff}.vue-color__chrome__controls{display:flex}.vue-color__chrome__color-wrap{width:32px}.vue-color__chrome__active-color{margin-top:6px;width:16px;height:16px;border-radius:8px;position:relative;overflow:hidden}.vue-color__chrome__sliders{flex:1}.vue-color__chrome__sliders .vue-color__c-alpha__gradient,.vue-color__chrome__sliders .vue-color__c-hue{border-radius:2px}.vue-color__chrome__sliders .vue-color__c-alpha__picker,.vue-color__chrome__sliders .vue-color__c-hue__picker{width:12px;height:12px;border-radius:6px;transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__chrome__fields-wrap{padding-top:16px;display:flex}.vue-color__chrome__fields{display:flex;margin-left:-6px;flex:1}.vue-color__chrome__field{padding-left:6px;width:100%}.vue-color__chrome__toggle-btn{width:32px;text-align:right;position:relative}.vue-color__chrome__icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vue-color__chrome__icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vue-color__chrome__hue-wrap{margin-bottom:8px}.vue-color__chrome__alpha-wrap,.vue-color__chrome__hue-wrap{position:relative;height:10px}.vue-color__chrome__chrome-body{padding:16px 16px 12px;background-color:#fff}.vue-color__chrome__saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vue-color__chrome__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-color__chrome__fields .vue-color__editable-input__input{font-size:11px;color:#333;width:100%;border-rradius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vue-color__chrome__fields .vue-color__editable-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vue-color__sketch__saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vue-color__sketch__controls{display:flex}.vue-color__sketch__sliders{padding:4px 0;flex:1}.vue-color__sketch__sliders .vue-color__c-alpha__gradient,.vue-color__sketch__sliders .vue-color__c-hue{border-radius:2px}.vue-color__sketch__hue-wrap{position:relative;height:10px}.vue-color__sketch__alpha-wrap{position:relative;height:10px;margin-top:4px;overflow:hidden}.vue-color__sketch__color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vue-color__sketch__active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vue-color__sketch__field{display:flex;padding-top:4px}.vue-color__sketch__field .vue-color__editable-input__input{width:80%;padding:4px 10% 3px;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:11px}.vue-color__sketch__field .vue-color__editable-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vue-color__sketch__field--single{flex:1;padding-left:6px}.vue-color__sketch__field--double{flex:2}.vue-color__sketch__presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vue-color__sketch__presets-color{border-radius:3px;overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-alpha,.vue-color__c-alpha__checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__checkboard-wrap{overflow:hidden}.vue-color__c-alpha__gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px}.vue-color__c-alpha__pointer{z-index:2;position:absolute}.vue-color__c-alpha__picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0}",""])},function(e,o,t){function r(e,o,t){var r=!0,s=!0;if("function"!=typeof e)throw new TypeError(n);return i(t)&&(r="leading"in t?!!t.leading:r,s="trailing"in t?!!t.trailing:s),a(e,o,{leading:r,maxWait:o,trailing:s})}function i(e){var o=typeof e;return!!e&&("object"==o||"function"==o)}var a=t(34),n="Expected a function";e.exports=r},function(e,o){function t(e,o,t){function r(o){var t=_,r=v;return _=v=void 0,k=o,b=e.apply(r,t)}function a(e){return k=e,m=setTimeout(u,o),F?r(e):b}function n(e){var t=e-y,r=e-k,i=o-t;return R?w(i,g-r):i}function c(e){var t=e-y,r=e-k;return!y||t>=o||0>t||R&&r>=g}function u(){var e=C();
return c(e)?h(e):void(m=setTimeout(u,n(e)))}function h(e){return clearTimeout(m),m=void 0,A&&_?r(e):(_=v=void 0,b)}function d(){void 0!==m&&clearTimeout(m),y=k=0,_=v=m=void 0}function f(){return void 0===m?b:h(C())}function p(){var e=C(),t=c(e);if(_=arguments,v=this,y=e,t){if(void 0===m)return a(y);if(R)return clearTimeout(m),m=setTimeout(u,o),r(y)}return void 0===m&&(m=setTimeout(u,o)),b}var _,v,g,b,m,y=0,k=0,F=!1,R=!1,A=!0;if("function"!=typeof e)throw new TypeError(l);return o=s(o)||0,i(t)&&(F=!!t.leading,R="maxWait"in t,g=R?x(s(t.maxWait)||0,o):g,A="trailing"in t?!!t.trailing:A),p.cancel=d,p.flush=f,p}function r(e){var o=i(e)?m.call(e):"";return o==u||o==h}function i(e){var o=typeof e;return!!e&&("object"==o||"function"==o)}function a(e){return!!e&&"object"==typeof e}function n(e){return"symbol"==typeof e||a(e)&&m.call(e)==d}function s(e){if("number"==typeof e)return e;if(n(e))return c;if(i(e)){var o=r(e.valueOf)?e.valueOf():e;e=i(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var t=_.test(e);return t||v.test(e)?g(e.slice(2),t?2:8):p.test(e)?c:+e}var l="Expected a function",c=NaN,u="[object Function]",h="[object GeneratorFunction]",d="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,v=/^0o[0-7]+$/i,g=parseInt,b=Object.prototype,m=b.toString,x=Math.max,w=Math.min,C=Date.now;e.exports=t},function(e,o,t){var r,i,a;!function(t,n){i=[],r=n,a="function"==typeof r?r.apply(o,i):r,!(void 0!==a&&(e.exports=a))}(this,function(){return{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},lightBlue:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},lightGreen:{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},blueGrey:{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},white:"#ffffff",black:"#000000"}})},function(e,o,t){var r;!function(){function i(e,o){if(e=e?e:"",o=o||{},e instanceof i)return e;if(!(this instanceof i))return new i(e,o);var t=a(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=U(100*this._a)/100,this._format=o.format||t.format,this._gradientType=o.gradientType,this._r<1&&(this._r=U(this._r)),this._g<1&&(this._g=U(this._g)),this._b<1&&(this._b=U(this._b)),this._ok=t.ok,this._tc_id=I++}function a(e){var o={r:0,g:0,b:0},t=1,r=!1,i=!1;return"string"==typeof e&&(e=z(e)),"object"==typeof e&&(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b")?(o=n(e.r,e.g,e.b),r=!0,i="%"===String(e.r).substr(-1)?"prgb":"rgb"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")?(e.s=E(e.s),e.v=E(e.v),o=u(e.h,e.s,e.v),r=!0,i="hsv"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")&&(e.s=E(e.s),e.l=E(e.l),o=l(e.h,e.s,e.l),r=!0,i="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=A(t),{ok:r,format:e.format||i,r:V(255,X(o.r,0)),g:V(255,X(o.g,0)),b:V(255,X(o.b,0)),a:t}}function n(e,o,t){return{r:255*M(e,255),g:255*M(o,255),b:255*M(t,255)}}function s(e,o,t){e=M(e,255),o=M(o,255),t=M(t,255);var r,i,a=X(e,o,t),n=V(e,o,t),s=(a+n)/2;if(a==n)r=i=0;else{var l=a-n;switch(i=s>.5?l/(2-a-n):l/(a+n),a){case e:r=(o-t)/l+(t>o?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:i,l:s}}function l(e,o,t){function r(e,o,t){return 0>t&&(t+=1),t>1&&(t-=1),1/6>t?e+6*(o-e)*t:.5>t?o:2/3>t?e+(o-e)*(2/3-t)*6:e}var i,a,n;if(e=M(e,360),o=M(o,100),t=M(t,100),0===o)i=a=n=t;else{var s=.5>t?t*(1+o):t+o-t*o,l=2*t-s;i=r(l,s,e+1/3),a=r(l,s,e),n=r(l,s,e-1/3)}return{r:255*i,g:255*a,b:255*n}}function c(e,o,t){e=M(e,255),o=M(o,255),t=M(t,255);var r,i,a=X(e,o,t),n=V(e,o,t),s=a,l=a-n;if(i=0===a?0:l/a,a==n)r=0;else{switch(a){case e:r=(o-t)/l+(t>o?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:i,v:s}}function u(e,o,t){e=6*M(e,360),o=M(o,100),t=M(t,100);var r=$.floor(e),i=e-r,a=t*(1-o),n=t*(1-i*o),s=t*(1-(1-i)*o),l=r%6,c=[t,n,a,a,s,t][l],u=[s,t,t,n,a,a][l],h=[a,a,s,t,t,n][l];return{r:255*c,g:255*u,b:255*h}}function h(e,o,t,r){var i=[j(U(e).toString(16)),j(U(o).toString(16)),j(U(t).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function d(e,o,t,r){var i=[j(H(r)),j(U(e).toString(16)),j(U(o).toString(16)),j(U(t).toString(16))];return i.join("")}function f(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s-=o/100,t.s=P(t.s),i(t)}function p(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s+=o/100,t.s=P(t.s),i(t)}function _(e){return i(e).desaturate(100)}function v(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l+=o/100,t.l=P(t.l),i(t)}function g(e,o){o=0===o?0:o||10;var t=i(e).toRgb();return t.r=X(0,V(255,t.r-U(255*-(o/100)))),t.g=X(0,V(255,t.g-U(255*-(o/100)))),t.b=X(0,V(255,t.b-U(255*-(o/100)))),i(t)}function b(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l-=o/100,t.l=P(t.l),i(t)}function m(e,o){var t=i(e).toHsl(),r=(U(t.h)+o)%360;return t.h=0>r?360+r:r,i(t)}function x(e){var o=i(e).toHsl();return o.h=(o.h+180)%360,i(o)}function w(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+120)%360,s:o.s,l:o.l}),i({h:(t+240)%360,s:o.s,l:o.l})]}function C(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+90)%360,s:o.s,l:o.l}),i({h:(t+180)%360,s:o.s,l:o.l}),i({h:(t+270)%360,s:o.s,l:o.l})]}function y(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+72)%360,s:o.s,l:o.l}),i({h:(t+216)%360,s:o.s,l:o.l})]}function k(e,o,t){o=o||6,t=t||30;var r=i(e).toHsl(),a=360/t,n=[i(e)];for(r.h=(r.h-(a*o>>1)+720)%360;--o;)r.h=(r.h+a)%360,n.push(i(r));return n}function F(e,o){o=o||6;for(var t=i(e).toHsv(),r=t.h,a=t.s,n=t.v,s=[],l=1/o;o--;)s.push(i({h:r,s:a,v:n})),n=(n+l)%1;return s}function R(e){var o={};for(var t in e)e.hasOwnProperty(t)&&(o[e[t]]=t);return o}function A(e){return e=parseFloat(e),(isNaN(e)||0>e||e>1)&&(e=1),e}function M(e,o){S(e)&&(e="100%");var t=L(e);return e=V(o,X(0,parseFloat(e))),t&&(e=parseInt(e*o,10)/100),$.abs(e-o)<1e-6?1:e%o/parseFloat(o)}function P(e){return V(1,X(0,e))}function N(e){return parseInt(e,16)}function S(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function L(e){return"string"==typeof e&&-1!=e.indexOf("%")}function j(e){return 1==e.length?"0"+e:""+e}function E(e){return 1>=e&&(e=100*e+"%"),e}function H(e){return Math.round(255*parseFloat(e)).toString(16)}function O(e){return N(e)/255}function z(e){e=e.replace(D,"").replace(T,"").toLowerCase();var o=!1;if(Y[e])e=Y[e],o=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=W.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=W.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=W.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=W.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=W.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=W.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=W.hex8.exec(e))?{a:O(t[1]),r:N(t[2]),g:N(t[3]),b:N(t[4]),format:o?"name":"hex8"}:(t=W.hex6.exec(e))?{r:N(t[1]),g:N(t[2]),b:N(t[3]),format:o?"name":"hex"}:(t=W.hex3.exec(e))?{r:N(t[1]+""+t[1]),g:N(t[2]+""+t[2]),b:N(t[3]+""+t[3]),format:o?"name":"hex"}:!1}function B(e){var o,t;return e=e||{level:"AA",size:"small"},o=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),"AA"!==o&&"AAA"!==o&&(o="AA"),"small"!==t&&"large"!==t&&(t="small"),{level:o,size:t}}var D=/^\s+/,T=/\s+$/,I=0,$=Math,U=$.round,V=$.min,X=$.max,q=$.random;i.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,o,t,r,i,a,n=this.toRgb();return e=n.r/255,o=n.g/255,t=n.b/255,r=.03928>=e?e/12.92:Math.pow((e+.055)/1.055,2.4),i=.03928>=o?o/12.92:Math.pow((o+.055)/1.055,2.4),a=.03928>=t?t/12.92:Math.pow((t+.055)/1.055,2.4),.2126*r+.7152*i+.0722*a},setAlpha:function(e){return this._a=A(e),this._roundA=U(100*this._a)/100,this},toHsv:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=c(this._r,this._g,this._b),o=U(360*e.h),t=U(100*e.s),r=U(100*e.v);return 1==this._a?"hsv("+o+", "+t+"%, "+r+"%)":"hsva("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=s(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=s(this._r,this._g,this._b),o=U(360*e.h),t=U(100*e.s),r=U(100*e.l);return 1==this._a?"hsl("+o+", "+t+"%, "+r+"%)":"hsla("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(){return d(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:U(this._r),g:U(this._g),b:U(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+U(this._r)+", "+U(this._g)+", "+U(this._b)+")":"rgba("+U(this._r)+", "+U(this._g)+", "+U(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:U(100*M(this._r,255))+"%",g:U(100*M(this._g,255))+"%",b:U(100*M(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+U(100*M(this._r,255))+"%, "+U(100*M(this._g,255))+"%, "+U(100*M(this._b,255))+"%)":"rgba("+U(100*M(this._r,255))+"%, "+U(100*M(this._g,255))+"%, "+U(100*M(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:G[h(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var o="#"+d(this._r,this._g,this._b,this._a),t=o,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=i(e);t=a.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+o+",endColorstr="+t+")"},toString:function(e){var o=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0,i=!o&&r&&("hex"===e||"hex6"===e||"hex3"===e||"name"===e);return i?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(t=this.toRgbString()),"prgb"===e&&(t=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(t=this.toHexString()),"hex3"===e&&(t=this.toHexString(!0)),"hex8"===e&&(t=this.toHex8String()),"name"===e&&(t=this.toName()),"hsl"===e&&(t=this.toHslString()),"hsv"===e&&(t=this.toHsvString()),t||this.toHexString())},clone:function(){return i(this.toString())},_applyModification:function(e,o){var t=e.apply(null,[this].concat([].slice.call(o)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(v,arguments)},brighten:function(){return this._applyModification(g,arguments)},darken:function(){return this._applyModification(b,arguments)},desaturate:function(){return this._applyModification(f,arguments)},saturate:function(){return this._applyModification(p,arguments)},greyscale:function(){return this._applyModification(_,arguments)},spin:function(){return this._applyModification(m,arguments)},_applyCombination:function(e,o){return e.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(k,arguments)},complement:function(){return this._applyCombination(x,arguments)},monochromatic:function(){return this._applyCombination(F,arguments)},splitcomplement:function(){return this._applyCombination(y,arguments)},triad:function(){return this._applyCombination(w,arguments)},tetrad:function(){return this._applyCombination(C,arguments)}},i.fromRatio=function(e,o){if("object"==typeof e){var t={};for(var r in e)e.hasOwnProperty(r)&&("a"===r?t[r]=e[r]:t[r]=E(e[r]));e=t}return i(e,o)},i.equals=function(e,o){return e&&o?i(e).toRgbString()==i(o).toRgbString():!1},i.random=function(){return i.fromRatio({r:q(),g:q(),b:q()})},i.mix=function(e,o,t){t=0===t?0:t||50;var r,a=i(e).toRgb(),n=i(o).toRgb(),s=t/100,l=2*s-1,c=n.a-a.a;r=l*c==-1?l:(l+c)/(1+l*c),r=(r+1)/2;var u=1-r,h={r:n.r*r+a.r*u,g:n.g*r+a.g*u,b:n.b*r+a.b*u,a:n.a*s+a.a*(1-s)};return i(h)},i.readability=function(e,o){var t=i(e),r=i(o);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},i.isReadable=function(e,o,t){var r,a,n=i.readability(e,o);switch(a=!1,r=B(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=n>=4.5;break;case"AAlarge":a=n>=3;break;case"AAAsmall":a=n>=7}return a},i.mostReadable=function(e,o,t){var r,a,n,s,l=null,c=0;t=t||{},a=t.includeFallbackColors,n=t.level,s=t.size;for(var u=0;u<o.length;u++)r=i.readability(e,o[u]),r>c&&(c=r,l=i(o[u]));return i.isReadable(e,l,{level:n,size:s})||!a?l:(t.includeFallbackColors=!1,i.mostReadable(e,["#fff","#000"],t))};var Y=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},G=i.hexNames=R(Y),W=function(){var e="[-\\+]?\\d+%?",o="[-\\+]?\\d*\\.\\d+%?",t="(?:"+o+")|(?:"+e+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof e&&e.exports?e.exports=i:(r=function(){return i}.call(o,t,o,e),!(void 0!==r&&(e.exports=r)))}()},function(e,o,t){var r,i;t(64),r=t(9);var a=t(52);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(61),r=t(10);var a=t(49);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(56),r=t(11);var a=t(44);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(62),r=t(12);var a=t(50);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(65),r=t(13);var a=t(53);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(60),r=t(14);var a=t(48);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(e,o,t){var r,i;t(63),r=t(15);var a=t(51);i=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(i=r=r["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,e.exports=r},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__material"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-color__material__hex",style:{borderColor:colors.hex},attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":onChange,input:function(e){colors.hex=e}}})," ",_h("div",{staticClass:"vue-color__material__split"},[_h("div",{staticClass:"vue-color__material__third"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":onChange,input:function(e){colors.rgba.r=e}}})])," ",_h("div",{staticClass:"vue-color__material__third"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":onChange,input:function(e){colors.rgba.g=e}}})])," ",_h("div",{staticClass:"vue-color__material__third"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":onChange,input:function(e){colors.rgba.b=e}}})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__editable-input"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:val,expression:"val"}],staticClass:"vue-color__editable-input__input",domProps:{value:_s(val)},on:{keydown:handleKeyDown,input:[function(e){e.target.composing||(val=e.target.value)},update]}})," ",_h("span",{staticClass:"vue-color__editable-input__label"},[_s(label)])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{"class":["vue-color__c-hue",directionClass]},[_h("div",{ref:"container",staticClass:"vue-color__c-hue__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_h("div",{staticClass:"vue-color__c-hue__pointer",style:{top:pointerTop,left:pointerLeft}},[_t("default",[_m(0)])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"vue-color__c-hue__picker"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{ref:"container",staticClass:"vue-color__saturation",style:{background:bgColor},on:{mousedown:handleMouseDown}},[_m(0)," ",_m(1)," ",_h("div",{staticClass:"vue-color__saturation--pointer",style:{top:pointerTop,left:pointerLeft}},[_t("default",[_m(2)])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"vue-color__saturation--white"})},function(){with(this)return _h("div",{staticClass:"vue-color__saturation--black"})},function(){with(this)return _h("div",{staticClass:"vue-color__saturation--circle"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__slider"},[_h("div",{staticClass:"vue-color__slider__hue-warp"},[_h("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":hueChange,input:function(e){colors=e}}})])," ",_h("div",{staticClass:"vue-color__slider__swatches"},[_l(swatches,function(e,o){return _h("div",{staticClass:"vue-color__slider__swatch",attrs:{"data-index":o},on:{click:function(t){handleSwClick(o,e)}}},[_h("div",{staticClass:"vue-color__slider__swatch-picker","class":{"vue-color__slider__swatch-picker--active":e==activeOffset},style:{background:"hsl("+colors.hsl.h+", 50%, "+100*e+"%)"}})])})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__compact"},[_h("ul",{staticClass:"vue-color__compact__colors"},[_l(defaultColors,function(e){return _h("li",{staticClass:"vue-color__compact__color-item","class":{"vue-color__compact__color-item--white":"#FFFFFF"===e},style:{background:e},on:{click:function(o){handlerClick(e)}}},[_h("div",{directives:[{name:"show",rawName:"v-show",value:e===pick,expression:"c === pick"}],staticClass:"vue-color__compact__dot"})])})])," "])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-colors__photoshop"},[_h("div",{staticClass:"vue-colors__photoshop__head"},[_s(head)])," ",_h("div",{staticClass:"vue-colors__photoshop__body"},[_h("div",{staticClass:"vue-colors__photoshop__saturation-wrap"},[_h("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])," ",_h("div",{staticClass:"vue-colors__photoshop__hue-wrap"},[_h("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],attrs:{direction:"vertical"},domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}},[_m(0)])])," ",_h("div",{staticClass:"vue-colors__photoshop__controls"},[_h("div",{staticClass:"vue-colors__photoshop__previews"},[_m(1)," ",_h("div",{staticClass:"vue-colors__photoshop__previews__swatches"},[_h("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:colors.hex}})," ",_h("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:currentColor}})])," ",_m(2)])," ",_h("div",{staticClass:"vue-colors__photoshop__actions"},[_h("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleAccept}},["OK"])," ",_h("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleCancel}},["Cancel"])," ",_h("div",{staticClass:"vue-colors__photoshop__fields"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}})," ",_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}})," ",_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"v"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}})," ",_m(3)," "," ",_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})," ",_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})," ",_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})," ",_m(4)," "," ",_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-colors__photoshop__fields__hex",attrs:{label:"#"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"vue-colors__photoshop__hue-pointer"},[_h("i",{staticClass:"vue-colors__photoshop__hue-pointer--left"}),_h("i",{staticClass:"vue-colors__photoshop__hue-pointer--right"})])},function(){with(this)return _h("div",{staticClass:"vue-colors__photoshop__previews__label"},["new"])},function(){with(this)return _h("div",{staticClass:"vue-colors__photoshop__previews__label"},["current"])},function(){with(this)return _h("div",{staticClass:"vue-colors__photoshop__fields__divider"})},function(){with(this)return _h("div",{staticClass:"vue-colors__photoshop__fields__divider"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__swatches",attrs:{"data-pick":pick}},[_h("div",{staticClass:"vue-color__swatches__box"},[_l(defaultColors,function(e){return _h("div",{staticClass:"vue-color__swatches__color-group"},[_l(e,function(e){return _h("div",{staticClass:"vue-color__swatches__color-it",style:{background:e},attrs:{"data-color":e},on:{click:function(o){handlerClick(e)}}},[_h("div",{directives:[{name:"show",rawName:"v-show",value:e==pick,expression:"c == pick"}],staticClass:"vue-color__swatches__pick"},[_h("svg",{attrs:{style:"width: 24px; height:24px;",viewBox:"0 0 24 24"}},[_h("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])})])})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__chrome"},[_h("div",{staticClass:"vue-color__chrome__saturation-wrap"},[_h("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])," ",_h("div",{staticClass:"vue-color__chrome__chrome-body"},[_h("div",{staticClass:"vue-color__chrome__controls"},[_h("div",{staticClass:"vue-color__chrome__color-wrap"},[_h("div",{staticClass:"vue-color__chrome__active-color",style:{background:activeColor}})])," ",_h("div",{staticClass:"vue-color__chrome__sliders"},[_h("div",{staticClass:"vue-color__chrome__hue-wrap"},[_h("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])," ",_h("div",{staticClass:"vue-color__chrome__alpha-wrap"},[_h("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])])])," ",_h("div",{staticClass:"vue-color__chrome__fields-wrap"},[_h("div",{directives:[{name:"show",rawName:"v-show",value:0===fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vue-color__chrome__fields"},[_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])])," ",_h("div",{directives:[{name:"show",rawName:"v-show",value:1===fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vue-color__chrome__fields"},[_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r
},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})])," ",_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})])," ",_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})])," ",_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])])," ",_h("div",{directives:[{name:"show",rawName:"v-show",value:2===fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vue-color__chrome__fields"},[_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}})])," ",_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}})])," ",_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"l"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}})])," ",_h("div",{staticClass:"vue-color__chrome__field"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])])," "," ",_h("div",{staticClass:"vue-color__chrome__toggle-btn",on:{click:toggleViews}},[_h("div",{staticClass:"vue-color__chrome__icon"},[_h("svg",{attrs:{style:"width:24px; height:24px",viewBox:"0 0 24 24"},on:{mouseover:showHighlight,mouseenter:showHighlight,mouseout:hideHighlight}},[_h("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])])," ",_h("div",{directives:[{name:"show",rawName:"v-show",value:highlight,expression:"highlight"}],staticClass:"vue-color__chrome__icon-highlight"})])," "])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__sketch"},[_h("div",{staticClass:"vue-color__sketch__saturation-wrap"},[_h("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])," ",_h("div",{staticClass:"vue-color__sketch__controls"},[_h("div",{staticClass:"vue-color__sketch__sliders"},[_h("div",{staticClass:"vue-color__sketch__hue-wrap"},[_h("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])," ",_h("div",{staticClass:"vue-color__sketch__alpha-wrap"},[_h("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])])," ",_h("div",{staticClass:"vue-color__sketch__color-wrap"},[_h("div",{staticClass:"vue-color__sketch__active-color",style:{background:activeColor}})])])," ",_h("div",{staticClass:"vue-color__sketch__field"},[_h("div",{staticClass:"vue-color__sketch__field--double"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])," ",_h("div",{staticClass:"vue-color__sketch__field--single"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})])," ",_h("div",{staticClass:"vue-color__sketch__field--single"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})])," ",_h("div",{staticClass:"vue-color__sketch__field--single"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})])," ",_h("div",{staticClass:"vue-color__sketch__field--single"},[_h("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])])," ",_h("div",{staticClass:"vue-color__sketch__presets"},[_l(presetColors,function(e){return _h("div",{staticClass:"vue-color__sketch__presets-color",style:{background:e},on:{click:function(o){handlePreset(e)}}})})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__c-alpha"},[_h("div",{staticClass:"vue-color__c-alpha__checkboard-wrap"},[_h("checkboard")])," ",_h("div",{staticClass:"vue-color__c-alpha__gradient",style:{background:gradientColor}})," ",_h("div",{ref:"container",staticClass:"vue-color__c-alpha__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_h("div",{staticClass:"vue-color__c-alpha__pointer",style:{left:100*colors.a+"%"}},[_t("default",[_m(0)])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"vue-color__c-alpha__picker"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"vue-color__c-checkerboard",style:{background:bgStyle}})},staticRenderFns:[]}},function(e,o,t){var r=t(21);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(22);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(23);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(24);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(25);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(26);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(27);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(28);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(29);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(30);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(31);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(32);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

exports.default = {
    data: function data() {
        return {
            player: {}
        };
    },

    props: {
        source: {
            type: Object
        },
        poster: {
            type: String
        },
        offset: {
            type: Object,
            default: function _default() {
                return {
                    start: false,
                    end: false
                };
            }
        }
    },
    components: {},
    computed: {
        strSource: function strSource() {
            return JSON.stringify(this.source);
        }
    },
    mounted: function mounted() {
        this.initPlayer(this.source);
    },

    methods: {
        api: function api() {
            return this.player;
        },
        initPlayer: function initPlayer(source) {
            var _this = this;

            var self = this;
            console.log(self.source);
            var config = {
                fluid: true,
                source: source.sources[0],
                techOrder: ['youtube'],
                playbackRates: [0.25, 0.5, 1, 1.5, 2],
                plugins: {
                    disableProgress: {},
                    abLoopPlugin: {
                        enabled: false,
                        loopIfBeforeStart: false, //allow video to play normally before the loop section? defaults to true
                        looopIfAfterEnd: true, // defaults to true
                        pauseAfterLooping: false, //if true, after looping video will pause. Defaults to false
                        pauseBeforeLooping: false, //if true, before looping video will pause. Defaults to false
                        createButtons: false }
                }
            };
            if (this.offset.start) {
                config.plugins.dncoffset = {
                    startOffset: this.offset.start,
                    endOffset: this.offset.end
                };
            }
            this.player = videojs(this.$refs.player, config, function () {
                console.log('palyerReady');
                (0, _mockstate.dispatch)('playerReady', true);
            });
            (0, _mockstate.dispatch)('setPlayer', this.player);
            this.player.playbackRate(1);
            this.player.on('timeupdate', function () {
                (0, _mockstate.dispatch)('setCurrentTime', _this.player.currentTime());
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

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _inspectorSketch = __webpack_require__(302);

var _inspectorSketch2 = _interopRequireDefault(_inspectorSketch);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(237);

var _collide2 = _interopRequireDefault(_collide);

var _uuid = __webpack_require__(238);

var _uuid2 = _interopRequireDefault(_uuid);

var _Action = __webpack_require__(230);

var _Action2 = _interopRequireDefault(_Action);

var _tags = __webpack_require__(343);

var _tags2 = _interopRequireDefault(_tags);

var _commonService = __webpack_require__(136);

var _commonService2 = _interopRequireDefault(_commonService);

var _scoutings = __webpack_require__(211);

var _scoutings2 = _interopRequireDefault(_scoutings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    locales: _scoutings2.default,
    data: function data() {
        return {
            open: false,
            touch: null,
            actions: [],
            recordingTouch: false,
            started: false,
            edit: false,
            action: {
                initialized: false,
                edit: false,
                text: '',
                start: 0,
                end: 100,
                leftTags: [],
                rightTags: [],
                color: {
                    "hsl": { "h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1 },
                    "hex": "#DBDF00",
                    "rgba": { "r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50 },
                    "hsv": { "h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1 }
                }
            },
            tagsLeft: [],
            tagsRight: []
        };
    },

    props: {
        playing: {}
    },
    mixins: [_collide2.default, _uuid2.default],
    watch: {
        'open': function open(_open, oldOpen) {
            if (_open) {
                inspector.start();
            } else {
                inspector.stop();
            }
        }
    },
    components: {
        tags: _tags2.default
    },
    created: function created() {
        var _this = this;

        (0, _mockstate.subscribe)(this, function (data) {
            if (data.action == 'setSelectedTouch') {
                _this.touch = (0, _mockstate.getState)('*').touchManager.selectedTouch;
                if (_this.touch) {
                    _this.actions = _this.touch.actions.slice(0);
                } else {
                    _this.actions = [];
                }
            }
            if (data.action == 'setSelectedAction') {
                var action = (0, _mockstate.getState)('*').touchManager.selectedAction;
                if (action) {
                    _this.action = action;
                }
            }
            if (data.action == 'recordingTouch') {
                _this.recordingTouch = (0, _mockstate.getState)('*').touchManager.recordingTouch;
            }
        });

        _commonService2.default.getTags(function (response) {
            _this.tagsLeft = _.cloneDeep(response.data);
            _this.tagsRight = _.cloneDeep(response.data);
        }, function (error) {});

        bus.$on('toogle-inspector', function (isOpen) {
            if (isOpen == undefined) {
                _this.open = !_this.open;
                $.AdminLTE.boxWidget.collapse($('#inspectorToogler'));
            } else {
                if (_this.open != isOpen) {
                    $.AdminLTE.boxWidget.collapse($('#inspectorToogler'));
                }
                _this.open = isOpen;
            }
        });
    },

    computed: {
        title: function title() {
            return this.touch ? this.touch.text : '';
        },
        start: function start() {
            return this.touch ? _TimeConverter2.default.toHHMMSS(this.touch.start) : null;
        },
        end: function end() {
            return this.touch ? _TimeConverter2.default.toHHMMSS(this.touch.end) : null;
        },
        background: function background() {
            return this.touch ? this.touch.color.hex : null;
        }
    },
    mounted: function mounted() {
        new p5(_inspectorSketch2.default);
    },

    methods: {
        toogleOpen: function toogleOpen() {
            this.open = !this.open;
        },
        play: function play() {
            if (this.playing) {
                this.$parent.$refs.player.api().pause();
            } else {
                this.$parent.$refs.player.api().play();
            }
        },
        startAction: function startAction() {
            var collideResult = this.checkCollideActions({
                start: Math.floor(this.$parent.$refs.player.api().currentTime()),
                end: Math.floor(this.$parent.$refs.player.api().currentTime()) + 1
            });
            if (collideResult.collide) {
                console.log('collide');
            } else {
                if (!this.touch) {
                    this.touch = (0, _mockstate.getState)('*').touchManager.selectedTouch;
                }
                this.$parent.$refs.player.api().play();
                this.$parent.$refs.player.api().disableProgress.disable();
                var start = 0;
                if (this.touch.actions.length) {
                    start = this.touch.actions[this.touch.actions.length - 1].end;
                } else {
                    start = this.touch.start;
                }
                var act = new _Action2.default(Math.floor(start), Math.floor(this.$parent.$refs.player.api().currentTime()), _.cloneDeep(this.touch.color));
                (0, _mockstate.dispatch)('addAction', act);
                (0, _mockstate.dispatch)('recordingAction', true);
                (0, _mockstate.dispatch)('setSelectedAction', act);
                this.action = act;
                this.$parent.$refs.player.api().on('timeupdate', this.onStartAction);
                this.edit = false;
                this.started = true;
            }
        },
        tagSelectedLeft: function tagSelectedLeft(tag) {
            if (!this.action) {
                this.action = (0, _mockstate.getState)('*').touchManager.selectedAction;
            }
            if (this.action) {
                tag.uuid = this.generateUUID();
                this.action.leftTags.push(tag);
            }
        },
        tagSelectedRight: function tagSelectedRight(tag) {
            if (!this.action) {
                this.action = (0, _mockstate.getState)('*').touchManager.selectedAction;
            }
            if (this.action) {
                tag.uuid = this.generateUUID();
                this.action.rightTags.push(tag);
            }
        },
        tagDeletedRight: function tagDeletedRight(tag) {
            if (!this.action) {
                this.action = (0, _mockstate.getState)('*').touchManager.selectedAction;
            }
            if (this.action) {
                var tagIndex = _.findIndex(this.action.rightTags, function (o) {
                    return o.uuid == tag.uuid;
                });
                this.action.rightTags.splice(tagIndex, 1);
            }
        },
        tagDeletedLeft: function tagDeletedLeft(tag) {
            if (!this.action) {
                this.action = (0, _mockstate.getState)('*').touchManager.selectedAction;
            }
            if (this.action) {
                var tagIndex = _.findIndex(this.action.leftTags, function (o) {
                    return o.uuid == tag.uuid;
                });
                this.action.leftTags.splice(tagIndex, 1);
            }
        },
        onStartAction: function onStartAction() {
            this.action.end = Math.floor(this.$parent.$refs.player.api().currentTime());
            var collideResult = this.checkCollideActions(this.action);
            if (collideResult.collide) {
                this.edit = true;
                this.started = false;
                (0, _mockstate.dispatch)('recordingAction', false);
                this.$parent.$refs.player.api().off('timeupdate', this.onStartAction);
                this.action.end = Math.floor(this.$parent.$refs.player.api().currentTime() - 1);
                this.$parent.$refs.player.api().disableProgress.enable();
                this.$parent.$refs.player.api().pause();
            }
            /* else if (Math.floor(this.$parent.$refs.player.api().currentTime()) > this.touch.end) {
             this.edit = true;
             this.started = false;
             this.$parent.$refs.player.api().off('timeupdate', this.onStartAction);
             dispatch('recordingAction', false);
             this.action.end = Math.floor(this.touch.end);
             this.$parent.$refs.player.api().disableProgress.enable();
             this.$parent.$refs.player.api().pause();
             }*/
        },
        endAction: function endAction() {
            this.edit = true;
            this.started = false;
            (0, _mockstate.dispatch)('recordingAction', false);
            this.$parent.$refs.player.api().off('timeupdate', this.onStartAction);
            this.$parent.$refs.player.api().pause();
            this.$parent.$refs.player.api().disableProgress.enable();
            this.$parent.$refs.player.api().pause();
        },
        createAction: function createAction() {
            this.startAction();
        },
        playbackRate: function playbackRate(rate) {
            this.$parent.$refs.player.api().playbackRate(rate);
        },
        forward: function forward(s) {
            var forward = this.$parent.$refs.player.api().currentTime() + s;
            if (forward <= this.$parent.$refs.player.api().duration()) {
                this.$parent.$refs.player.api().currentTime(forward);
            } else {
                this.$parent.$refs.player.api().currentTime(this.$parent.$refs.player.api().duration());
            }
        },
        backward: function backward(s) {
            var backward = this.$parent.$refs.player.api().currentTime() - s;
            if (backward >= 0) {
                this.$parent.$refs.player.api().currentTime(backward);
            } else {
                this.$parent.$refs.player.api().currentTime(0);
            }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _timelineSketch = __webpack_require__(304);

var _timelineSketch2 = _interopRequireDefault(_timelineSketch);

var _scoutings = __webpack_require__(211);

var _scoutings2 = _interopRequireDefault(_scoutings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    locales: _scoutings2.default,
    data: function data() {
        return {
            open: true
        };
    },

    watch: {
        'open': function open(_open, oldOpen) {
            if (_open) {
                p.start();
            } else {
                p.stop();
            }
        }
    },
    created: function created() {
        var _this = this;

        bus.$on('toogle-timeline', function () {
            _this.open = !_this.open;
            $.AdminLTE.boxWidget.collapse($('#timelineToogler'));
        });
    },
    mounted: function mounted() {
        window.p = new p5(_timelineSketch2.default);
    },

    methods: {
        toogleOpen: function toogleOpen() {
            this.open = !this.open;
        },
        zoomIn: function zoomIn() {
            var state = (0, _mockstate.getState)('*');
            (0, _mockstate.dispatch)('setZoom', state.timeline.zoomFactor + 1);
            (0, _mockstate.dispatch)('setInitialized', false);
        },
        zoomOut: function zoomOut() {
            var state = (0, _mockstate.getState)('*');
            if (state.timeline.zoomFactor > state.timeline.initialZoomFactor) {
                (0, _mockstate.dispatch)('setZoom', state.timeline.zoomFactor - 1);
                (0, _mockstate.dispatch)('setInitialized', false);
            }
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _player = __webpack_require__(332);

var _player2 = _interopRequireDefault(_player);

var _Touch = __webpack_require__(259);

var _Touch2 = _interopRequireDefault(_Touch);

var _mockstate = __webpack_require__(135);

var _actions = __webpack_require__(305);

var _store = __webpack_require__(306);

var _veeValidate = __webpack_require__(6);

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _newTouchForm = __webpack_require__(339);

var _newTouchForm2 = _interopRequireDefault(_newTouchForm);

var _editTouchForm = __webpack_require__(338);

var _editTouchForm2 = _interopRequireDefault(_editTouchForm);

var _touchesList = __webpack_require__(340);

var _touchesList2 = _interopRequireDefault(_touchesList);

var _timeline = __webpack_require__(337);

var _timeline2 = _interopRequireDefault(_timeline);

var _inspector = __webpack_require__(336);

var _inspector2 = _interopRequireDefault(_inspector);

var _collide = __webpack_require__(237);

var _collide2 = _interopRequireDefault(_collide);

var _pageHeader = __webpack_require__(180);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _scoutingService = __webpack_require__(229);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _scoutingTouchService = __webpack_require__(307);

var _scoutingTouchService2 = _interopRequireDefault(_scoutingTouchService);

var _Action = __webpack_require__(230);

var _Action2 = _interopRequireDefault(_Action);

var _uuid = __webpack_require__(238);

var _uuid2 = _interopRequireDefault(_uuid);

var _errorPresenter = __webpack_require__(308);

var _errorPresenter2 = _interopRequireDefault(_errorPresenter);

var _scoutings = __webpack_require__(211);

var _scoutings2 = _interopRequireDefault(_scoutings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        dncPlayer: _player2.default,
        newTouchForm: _newTouchForm2.default,
        editTouchForm: _editTouchForm2.default,
        touchesList: _touchesList2.default,
        timeline: _timeline2.default,
        inspector: _inspector2.default,
        adminHeader: _pageHeader2.default
    },
    mixins: [_collide2.default, _uuid2.default, _errorPresenter2.default],
    locales: _scoutings2.default,
    data: function data() {
        return {
            scouting: {},
            source: {},
            initialized: false,
            duration: 0,
            edit: false,
            playing: false,
            started: false,
            playerReady: false,
            touch: {
                initialized: false,
                edit: false,
                text: '',
                start: 0,
                end: 100,
                color: {
                    "hsl": { "h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1 },
                    "hex": "#DBDF00",
                    "rgba": { "r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50 },
                    "hsv": { "h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1 }
                }
            }
        };
    },

    computed: {
        breadcrumbs: function breadcrumbs() {
            return [{
                href: '/',
                title: 'admin.home'
            }, {
                href: '/scoutings/list',
                title: 'admin.scoutings'
            }, {
                href: '/scoutings/' + this.$route.params.id + '/touches',
                title: 'admin.touches'
            }];
        },
        title: function title() {
            return this.$t('admin.scoutings') + ' ' + this.scouting.name;
        }
    },
    created: function created() {
        var _this = this;

        window.vm = this;
        this.source = window['source'];
        (0, _mockstate.setState)(_store.state);
        (0, _mockstate.setActions)(_actions.actions);
        window.getSt = function () {
            return (0, _mockstate.getState)('*');
        };
        (0, _mockstate.subscribe)(this, function (data) {
            if (data.action == 'playerReady') {
                console.log('playerReady subscript', _this.playerReady);

                if ((0, _mockstate.getState)('*').playerReady && !_this.playerReady) {
                    _this.playerReady = (0, _mockstate.getState)('*').playerReady;
                    _this.$nextTick(function () {
                        this.init();
                        this.loadScouting();
                    });
                }
            }
        });
        _scoutingService2.default.show(this.$route.params.id, function (response) {
            _this.scouting = response.data;
            _this.source = {
                'techOrder': ['youtube'],
                'sources': [{
                    'type': "video/youtube",
                    'src': response.data.videoSrc
                }]
            };
            _this.initialized = true;
        }, function (error) {
            console.log(error);
        });
        bus.$on('edit-touch', function (touch) {
            _this.resetTouch();
            _this.editTouch(null, touch);
        });
        bus.$on('remove-touch', function (touch) {
            _this.removeTouch(touch);
        });
    },
    mounted: function mounted() {},
    beforeDestroy: function beforeDestroy() {
        console.log('destroy hook');
        this.$refs.player.api().off();
    },

    methods: {
        loadScouting: function loadScouting() {
            var self = this;
            _.each(this.scouting.touches, function (touch) {
                var act = new _Touch2.default(touch.start, touch.end, touch.title, touch.color);
                (0, _mockstate.dispatch)('addTouch', act);
                (0, _mockstate.dispatch)('setSelectedTouch', act);
                _.each(touch.actions, function (action) {
                    var act = new _Action2.default(action.start, action.end, action.color);
                    (0, _mockstate.dispatch)('addAction', act);
                    (0, _mockstate.dispatch)('setSelectedAction', act);
                    _.each(action.leftTags, function (tag) {
                        tag.uuid = self.generateUUID();
                        (0, _mockstate.dispatch)('addLeftTag', tag);
                    });

                    _.each(action.rightTags, function (tag) {
                        tag.uuid = self.generateUUID();
                        (0, _mockstate.dispatch)('addRightTag', tag);
                    });
                    (0, _mockstate.dispatch)('setSelectedAction', null);
                });
            });
            (0, _mockstate.dispatch)('setSelectedTouch', null);
        },
        init: function init() {
            var _this2 = this;

            this.$refs.player.api().on('play', function () {
                _this2.playing = true;
            });

            this.$refs.player.api().on('pause', function () {
                _this2.playing = false;
            });
            this.$refs.player.api().play();
            this.$refs.player.api().on('timeupdate', function () {
                if (!_this2.started) {
                    var collideResult = _this2.checkCollide({
                        start: Math.floor(_this2.$refs.player.api().currentTime()),
                        end: Math.floor(_this2.$refs.player.api().currentTime()) + 1,
                        id: 0
                    });
                    if (collideResult.collide) {
                        if (collideResult.collideTouches[0].previous instanceof _Touch2.default) {
                            var touch = collideResult.collideTouches[0].previous;
                            (0, _mockstate.dispatch)('setSelectedTouch', touch);
                        } else if (collideResult.collideTouches[0].current instanceof _Touch2.default) {
                            var touch = collideResult.collideTouches[0].current;
                            (0, _mockstate.dispatch)('setSelectedTouch', touch);
                        }
                    } else if (!_this2.started) {
                        (0, _mockstate.dispatch)('setSelectedTouch', null);
                    }

                    var collideActionResult = _this2.checkCollideActions({
                        start: Math.floor(_this2.$refs.player.api().currentTime()),
                        end: Math.floor(_this2.$refs.player.api().currentTime()) + 1,
                        id: 0
                    });
                    if (collideActionResult.collide) {
                        if (collideActionResult.collideActions[0].previous instanceof _Action2.default) {
                            var action = collideActionResult.collideActions[0].previous;
                            (0, _mockstate.dispatch)('setSelectedAction', action);
                        } else if (collideActionResult.collideActions[0].current instanceof _Action2.default) {
                            var action = collideActionResult.collideActions[0].current;
                            (0, _mockstate.dispatch)('setSelectedAction', action);
                        }
                    } else if (!_this2.started) {
                        (0, _mockstate.dispatch)('setSelectedAction', null);
                    }
                }
            });
        },
        onChangeColor: function onChangeColor(val) {
            this.touch.color = val;
        },
        startTouch: function startTouch() {
            var collideResult = this.checkCollide({
                start: Math.floor(this.$refs.player.api().currentTime()),
                end: Math.floor(this.$refs.player.api().currentTime()) + 1
            });
            if (collideResult.collide) {
                this.$root.errorToast(this.$t('scoutings.touches_cant_overlap'));
            } else {
                this.$refs.player.api().play();
                this.$refs.player.api().disableProgress.disable();
                var act = new _Touch2.default(Math.floor(this.$refs.player.api().currentTime()), Math.floor(this.$refs.player.api().currentTime()), this.touch.text, this.touch.color);
                (0, _mockstate.dispatch)('addTouch', act);
                (0, _mockstate.dispatch)('recordingTouch', true);
                this.toogleInspector(true);
                (0, _mockstate.dispatch)('setSelectedTouch', act);
                this.$refs.inspector.startAction();
                this.duration = Math.floor(this.$refs.player.api().duration());
                var self = this;
                this.touch = act;
                this.$refs.player.api().on('timeupdate', self.onStartTouch);
                this.edit = false;
                this.started = true;
            }
        },
        onStartTouch: function onStartTouch() {
            this.touch.end = Math.floor(this.$refs.player.api().currentTime());
            var collideResult = this.checkCollide(this.touch);
            if (collideResult.collide) {
                this.edit = true;
                this.started = false;
                (0, _mockstate.dispatch)('recordingTouch', false);
                this.$refs.player.api().off('timeupdate', this.onStartTouch);
                this.touch.end = Math.floor(this.$refs.player.api().currentTime() - 1);
                this.$refs.player.api().pause();
                this.$root.errorToast(this.$t('scoutings.touches_cant_overlap'));
                this.$refs.player.api().disableProgress.enable();
                this.$refs.player.api().pause();
            }
        },
        endTouch: function endTouch() {
            this.edit = true;
            this.started = false;
            (0, _mockstate.dispatch)('recordingTouch', false);
            this.$refs.player.api().off('timeupdate', this.onStartTouch);
            this.$refs.player.api().pause();
            this.$refs.player.api().disableProgress.enable();
            this.$refs.player.api().pause();
            this.$refs.inspector.endAction();
        },
        editTouch: function editTouch(event, touch) {
            this.touch = touch;
            this.edit = true;
        },
        saveNewTouch: function saveNewTouch(touch) {
            var act = new _Touch2.default(touch.start, touch.end, touch.text, touch.color);
            (0, _mockstate.dispatch)('addTouch', act);
            this.resetTouch();
        },
        cancelNewTouch: function cancelNewTouch() {
            this.resetTouch();
        },
        saveEditTouch: function saveEditTouch(touch) {
            (0, _mockstate.dispatch)('editTouch', touch);
            this.edit = false;
            this.resetTouch();
        },
        cancelEditTouch: function cancelEditTouch(touch) {
            this.edit = false;
        },
        resetTouch: function resetTouch() {
            this.touch = {
                initialized: false,
                edit: false,
                text: '',
                start: 0,
                end: 100,
                color: {
                    "hsl": { "h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1 },
                    "hex": "#DBDF00",
                    "rgba": { "r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50 },
                    "hsv": { "h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1 }
                }
            };
        },
        toogleTimeline: function toogleTimeline() {
            bus.$emit('toogle-timeline');
        },
        toogleInspector: function toogleInspector(isOpen) {
            bus.$emit('toogle-inspector', isOpen);
        },
        removeTouch: function removeTouch(touch) {
            if (touch) {
                (0, _mockstate.dispatch)('removeTouch', touch);
            }
        },
        save: function save() {
            var _this3 = this;

            var touches = (0, _mockstate.getState)('*').touchManager.touches;
            var self = this;
            touches = this.formatSocuting(touches);
            _scoutingTouchService2.default.update(this.$route.params.id, { touches: touches }, function (response) {
                self.$root.successToast(response.message);
                self.$router.push({
                    name: 'scoutings.list'
                });
            }, function (response) {
                _this3.showError(response);
            });
        },
        cancel: function cancel() {
            this.$router.push({
                name: 'scoutings.list'
            });
        },
        formatSocuting: function formatSocuting(touches) {
            var data = [];
            _.each(touches, function (touch) {
                var dataTouch = {
                    title: { 'es': touch.text, 'en': touch.text },
                    start: touch.start,
                    end: touch.end,
                    color: touch.color,
                    duration: touch.end - touch.start,
                    actions: []
                };

                _.each(touch.actions, function (action) {
                    var dataAction = {
                        start: action.start,
                        end: action.end,
                        color: action.color,
                        duration: action.end - action.start,
                        leftTags: [],
                        rightTags: []
                    };
                    _.each(action.leftTags, function (tag) {
                        var dataTag = {};
                        dataTag.id = tag.id;
                        dataTag.dropdown = tag.dropdown;
                        if (tag.dropdown) {
                            dataTag.option = { id: tag.option.id };
                        }
                        dataAction.leftTags.push(dataTag);
                    });

                    _.each(action.rightTags, function (tag) {
                        var dataTag = {};
                        dataTag.id = tag.id;
                        dataTag.dropdown = tag.dropdown;
                        if (tag.dropdown) {
                            dataTag.option = { id: tag.option.id };
                        }
                        dataAction.rightTags.push(dataTag);
                    });
                    dataTouch.actions.push(dataAction);
                });
                data.push(dataTouch);
            });

            return data;
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

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _vueColor = __webpack_require__(262);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(237);

var _collide2 = _interopRequireDefault(_collide);

var _scoutings = __webpack_require__(211);

var _scoutings2 = _interopRequireDefault(_scoutings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    locales: _scoutings2.default,
    props: {
        initTouch: {
            default: function _default() {
                return {
                    initialized: false,
                    text: null,
                    start: 0,
                    end: 100,
                    color: {
                        rgba: {
                            r: 25,
                            g: 77,
                            b: 51,
                            a: 1
                        }
                    }
                };
            }
        },
        duration: {}
    },
    mixins: [_collide2.default],
    created: function created() {
        this.touch = Object.assign({}, this.initTouch);
    },

    watch: {
        'touch.start': function touchStart() {
            var collideResult = this.checkCollide(this.touch);
            this.collide = collideResult.collide;
            this.collideTouches = collideResult.collideTouches;
        },
        'touch.end': function touchEnd() {
            var collideResult = this.checkCollide(this.touch);
            this.collide = collideResult.collide;
            this.collideTouches = collideResult.collideTouches;
            this.endInvalid = parseInt(this.touch.start) >= parseInt(this.touch.end);
        }
    },
    data: function data() {
        return {
            collide: false,
            collideTouches: [],
            endInvalid: false,
            touch: {
                text: null,
                start: 0,
                end: 0,
                color: {
                    rgba: {
                        r: 25,
                        g: 77,
                        b: 51,
                        a: 1
                    }
                }
            }
        };
    },

    computed: {
        startFmt: function startFmt() {
            return _TimeConverter2.default.toHHMMSS(this.touch.start);
        },
        endFmt: function endFmt() {
            return _TimeConverter2.default.toHHMMSS(this.touch.end);
        },
        validationEnd: function validationEnd() {
            return parseInt(this.touch.start) + 1;
        }
    },
    components: {
        'compact-picker': _vueColor.Compact
    },
    methods: {
        close: function close() {
            this.$emit('cancel-new-touch', this.touch);
        },
        toHHMMSS: function toHHMMSS(secs) {
            return _TimeConverter2.default.toHHMMSS(secs);
        },
        onChangeColor: function onChangeColor(val) {
            this.touch.color = val;
        },
        onSubmit: function onSubmit() {
            this.$validator.validateAll();
            if (this.errors.any()) {} else {
                if (this.touch.start >= this.touch.end) {
                    this.endInvalid = true;
                } else {
                    this.endInvalid = false;
                    if (!this.collide) {
                        this.$emit('add-new-touch', this.touch);
                    }
                }
            }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _vueColor = __webpack_require__(262);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        open: {},
        initTouch: {
            default: function _default() {
                return {
                    initialized: false,
                    text: null,
                    start: 0,
                    end: 100,
                    color: {
                        "hsl": { "h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1 },
                        "hex": "#DBDF00",
                        "rgba": { "r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50 },
                        "hsv": { "h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1 }
                    }
                };
            }
        },
        duration: {},
        start: {},
        end: {}
    },
    watch: {
        open: function open(val) {
            this.touch = Object.assign({}, this.initTouch);
        },
        start: function start(val) {
            this.touch.start = val;
        },
        end: function end(val) {
            this.touch.end = val;
        },

        'touch.start': function touchStart() {
            this.checkCollide();
        },
        'touch.end': function touchEnd() {
            this.checkCollide();
            this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(this.duration));
        }
    },
    data: function data() {
        return {
            collide: false,
            collideTouches: [],
            endInvalid: false,
            touch: {
                text: null,
                start: 0,
                end: 0,
                color: {
                    rgba: {
                        r: 25,
                        g: 77,
                        b: 51,
                        a: 1
                    }
                }
            }
        };
    },

    computed: {
        startFmt: function startFmt() {
            return _TimeConverter2.default.toHHMMSS(this.touch.start);
        },
        endFmt: function endFmt() {
            return _TimeConverter2.default.toHHMMSS(this.touch.end);
        },
        validationEnd: function validationEnd() {
            return parseInt(this.touch.start) + 1;
        }
    },
    components: {
        'compact-picker': _vueColor.Compact
    },
    methods: {
        close: function close() {
            this.$emit('cancel-new-touch');
        },
        toHHMMSS: function toHHMMSS(secs) {
            return _TimeConverter2.default.toHHMMSS(secs);
        },
        onChangeColor: function onChangeColor(val) {
            this.touch.color = val;
        },
        checkCollide: function checkCollide() {
            var touchs = (0, _mockstate.getState)('touchManager').touches.slice(0);
            touchs.push(this.touch);
            var overlap = this.overlap(touchs);
            this.collide = overlap.overlap;
            this.collideTouches = overlap.ranges;
        },
        overlap: function overlap(touchs) {
            var sortedRanges = touchs.sort(function (previous, current) {

                var previousTime = parseInt(previous.start);
                var currentTime = parseInt(current.start);

                // if the previous is earlier than the current
                if (previousTime < currentTime) {
                    return -1;
                }

                // if the previous time is the same as the current time
                if (previousTime === currentTime) {
                    return 0;
                }

                // if the previous time is later than the current time
                return 1;
            });

            // return the final results
            return sortedRanges.reduce(function (result, current, idx, arr) {
                // get the previous range
                if (idx === 0) {
                    return result;
                }
                var previous = arr[idx - 1];

                // check for any overlap
                var previousEnd = parseInt(previous.end);
                var currentStart = parseInt(current.start);
                var overlap = previousEnd >= currentStart;

                // store the result
                if (overlap) {
                    // yes, there is overlap
                    result.overlap = true;
                    // store the specific ranges that overlap
                    result.ranges.push({
                        previous: previous,
                        current: current
                    });
                }

                return result;

                // seed the reduce
            }, { overlap: false, ranges: [] });
        },
        onSubmit: function onSubmit() {
            this.$validator.validateAll();
            if (this.errors.any()) {} else {
                this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(Math.floor(this.$parent.$refs.player.api().duration())));
                if (!this.endInvalid) {
                    if (!this.collide) {
                        this.endInvalid = false;
                        this.$emit('add-new-touch', this.touch);
                    }
                }
            }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _scoutings = __webpack_require__(211);

var _scoutings2 = _interopRequireDefault(_scoutings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    locales: _scoutings2.default,
    data: function data() {
        return {
            touches: (0, _mockstate.getState)('*').touchManager.touches
        };
    },
    created: function created() {
        var _this = this;

        (0, _mockstate.subscribe)(this, function (data) {
            if (data.action == 'addTouch' || data.action == 'removeTouch' || data.action == 'editTouch') {
                _this.touches = (0, _mockstate.getState)('*').touchManager.touches;
            }
        });
    },

    methods: {
        editTouch: function editTouch(touch) {
            bus.$emit('edit-touch', touch);
        },
        removeTouch: function removeTouch(touch) {
            bus.$emit('remove-touch', touch);
        },
        toHHMMSS: function toHHMMSS(secs) {
            return _TimeConverter2.default.toHHMMSS(secs);
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

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tagDropdown = __webpack_require__(342);

var _tagDropdown2 = _interopRequireDefault(_tagDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        tag: {}
    },
    components: {
        tagDropdown: _tagDropdown2.default
    },
    methods: {
        dropdownOptionClicked: function dropdownOptionClicked(tag) {
            this.$emit('tag-clicked', tag);
        },
        tagClicked: function tagClicked() {
            this.$emit('tag-clicked', this.tag);
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

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(238);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        tag: {}
    },
    data: function data() {
        return {
            id: ''
        };
    },

    mixins: [_uuid2.default],
    mounted: function mounted() {
        this.id = this.generateUUID();
    },

    methods: {
        clickOpt: function clickOpt(opt) {
            this.tag.option = opt;
            this.$emit('option-clicked', this.tag);
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

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tag = __webpack_require__(341);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        selected: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        tags: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    components: {
        tag: _tag2.default
    },
    methods: {
        tagSelected: function tagSelected(tag) {
            this.$emit('tag-selected', tag);
        },
        deleteTag: function deleteTag(tag) {
            this.$emit('tag-deleted', tag);
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
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mockstate = __webpack_require__(135);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TouchManager = function () {
    function TouchManager(touches) {
        _classCallCheck(this, TouchManager);

        this.state = (0, _mockstate.getState)('*');
        (0, _mockstate.dispatch)('setTouches', touches ? touches : []);
    }

    _createClass(TouchManager, [{
        key: 'add',
        value: function add(touch) {
            (0, _mockstate.dispatch)('addTouch', touch);
        }
    }, {
        key: 'remove',
        value: function remove(touch) {
            (0, _mockstate.dispatch)('removeTouch', touch);
        }
    }, {
        key: 'draw',
        value: function draw() {
            for (var j = 0; j < this.state.touchManager.touches.length; j++) {
                this.state.touchManager.touches[j].draw();
            }
        }
    }, {
        key: 'mouseOverTouch',
        value: function mouseOverTouch(x, y) {
            for (var j = 0; j < this.state.touchManager.touches.length; j++) {
                this.state.touchManager.touches[j].isMouseOver(x, y);
            }
        }
    }, {
        key: 'mouseOverAction',
        value: function mouseOverAction(x, y) {
            if (this.state.touchManager.selectedTouch) {

                for (var j = 0; j < this.state.touchManager.selectedTouch.actions.length; j++) {
                    this.state.touchManager.selectedTouch.actions[j].isMouseOver(x, y);
                }
            }
        }
    }, {
        key: 'mousePressedTouch',
        value: function mousePressedTouch(x, y) {
            console.log(x, y);
            var aTouchIsSelected = false;
            for (var j = 0; j < this.state.touchManager.touches.length; j++) {
                this.state.touchManager.touches[j].isMousePresssedOver(x, y);
                if (this.state.touchManager.touches[j].isSelected) {
                    aTouchIsSelected = true;
                }
            }

            if (!aTouchIsSelected && !vm.started) {
                (0, _mockstate.dispatch)('setSelectedTouch', null);
                if (vm.$refs.player) vm.$refs.player.api().abLoopPlugin.disable();
            }
        }
    }, {
        key: 'mousePressedAction',
        value: function mousePressedAction(x, y) {
            var anActionIsSelected = false;
            if (this.state.touchManager.selectedTouch) {
                for (var j = 0; j < this.state.touchManager.selectedTouch.actions.length; j++) {
                    this.state.touchManager.selectedTouch.actions[j].isMousePresssedOver(x, y);
                    if (this.state.touchManager.selectedTouch.actions[j].isSelected) {
                        anActionIsSelected = true;
                    }
                }

                if (!anActionIsSelected) {
                    (0, _mockstate.dispatch)('setSelectedAction', null);
                    if (vm.$refs.player) vm.$refs.player.api().abLoopPlugin.disable();
                }
            }
        }
    }]);

    return TouchManager;
}();

exports.default = TouchManager;

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = function () {
    function Stage() {
        _classCallCheck(this, Stage);
    }

    _createClass(Stage, [{
        key: 'setup',
        value: function setup() {}
    }, {
        key: 'draw',
        value: function draw() {
            p.background(255);
            p.strokeWeight(4);
            p.stroke('#d3e0e9');
            p.fill(255, 255, 255);
            p.rect(0, 0, p.width - 1, p.height - 1);
            p.noStroke();
            p.noFill();
        }
    }]);

    return Stage;
}();

exports.default = Stage;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timeline = function () {
    function Timeline(startY, height) {
        _classCallCheck(this, Timeline);

        this.state = (0, _mockstate.getState)('*');
        (0, _mockstate.dispatch)('setTimelineStartY', startY);
        (0, _mockstate.dispatch)('setTimelineStartX', 30);
        (0, _mockstate.dispatch)('setTimelineHeight', height);
        this.startDelta = 0;
    }

    _createClass(Timeline, [{
        key: 'draw',
        value: function draw() {
            if (!this.state.timeline.hide) {
                (0, _mockstate.dispatch)('setColWidth', this.calculateColWidth());
                (0, _mockstate.dispatch)('setTimelineEndX', 0);
                p.strokeWeight(0);
                p.stroke(1);
                p.fill(0, 0, 0);
                p.textSize(12);
                p.textStyle(p.NORMAL);
                p.text(_TimeConverter2.default.toHHMMSS(this.state.player.duration), this.state.timeline.endX - 20, this.state.timeline.startY + 30, 40, 20);
                p.textAlign(p.CENTER);

                p.stroke(0);
                p.strokeWeight(1);
                p.line(this.state.timeline.startX, this.state.timeline.axisY, this.state.timeline.width, this.state.timeline.axisY);
                for (var i = 0; i <= this.state.timeline.width + this.state.timeline.startTime * this.state.timeline.secondWidth - 30; i += this.state.timeline.colWidth) {
                    var x = i + this.state.timeline.startX;
                    var newX = x - this.state.timeline.startTime * this.state.timeline.secondWidth;

                    if (i == 0) {
                        this.drawStartMinuteLabel(this.state.timeline.startTime, x);
                        this.drawMinuteLine(x);
                    } else if (i % (this.state.timeline.colWidth * 6) == 0) {
                        if (newX >= 30) {
                            this.drawMinuteLabel(i, newX);
                            this.drawMinuteLine(newX);
                        }
                    } else {
                        if (newX >= 30) {
                            if (this.state.timeline.showSecondsInterval) {
                                this.drawMiddleSecondLabel(i, newX);
                            }
                            this.drawMiddleSecondLine(newX);
                        }
                    }

                    if (this.state.timeline.showSeconds) {
                        this.drawMiddleSecondLabel(i, newX);
                        this.drawSecondLine(x);
                    }
                }
                p.stroke('red');
                p.strokeWeight(2);
                p.line(this.state.timeline.endX, this.state.timeline.startY + 45, this.state.timeline.endX, this.state.timeline.axisY);
                p.line(this.state.timeline.endX, this.state.timeline.axisY, this.state.timeline.endX, this.state.timeline.endY);
            }
        }
    }, {
        key: 'mouseOver',
        value: function mouseOver() {
            if (!this.state.timeline.hide) {
                if (p.mouseX >= 30 && p.mouseX <= this.state.canvas.width - 30 && p.mouseY >= this.state.timeline.startY && p.mouseY <= this.state.timeline.endY) {
                    p.cursor(p.HAND);
                    (0, _mockstate.dispatch)('setTimelineMouseOver', true);
                } else {
                    p.cursor(p.ARROW);
                    (0, _mockstate.dispatch)('setTimelineMouseOver', false);
                }
            }
        }
    }, {
        key: 'drag',
        value: function drag() {
            if (!this.state.timeline.hide) {

                var startDelta = p.pmouseX - p.mouseX;
                if (this.startDelta != startDelta) {
                    var start = this.state.timeline.startTime + startDelta / this.state.timeline.secondWidth;
                    if (start < 0) {
                        (0, _mockstate.dispatch)('setTimelineStartTime', 0);
                    } else {
                        (0, _mockstate.dispatch)('setTimelineStartTime', Math.floor(start));
                    }
                    this.startDelta = startDelta;
                }
            }
        }
    }, {
        key: 'drawSecondLine',
        value: function drawSecondLine(x) {
            for (var j = 0; j < this.state.timeline.colWidth; j += this.state.timeline.colWidth / 10) {
                if (x + j < this.state.timeline.width && j) {
                    p.stroke(0);
                    p.strokeWeight(1);
                    p.line(x + j, this.state.timeline.secondsY + 5, x + j, this.state.timeline.axisY);
                    p.stroke(230);
                    p.strokeWeight(1);
                    p.line(x + j, this.state.timeline.secondsY, x + j, this.state.timeline.endY);
                }
            }
            return j;
        }
    }, {
        key: 'drawMiddleSecondLine',
        value: function drawMiddleSecondLine(x) {
            p.stroke(0);
            p.strokeWeight(1);
            p.line(x, this.state.timeline.secondsY, x, this.state.timeline.axisY);
            p.stroke(230);
            p.strokeWeight(1);
            p.line(x, this.state.timeline.axisY, x, this.state.timeline.endY);
        }
    }, {
        key: 'drawMiddleSecondLabel',
        value: function drawMiddleSecondLabel(i, x) {
            p.stroke(230);
            p.strokeWeight(0);
            p.textSize(10);
            p.textStyle(p.NORMAL);
            p.text(_TimeConverter2.default.toSS(i / this.state.timeline.secondWidth) + ' s', x - 20, this.state.timeline.secondsY - 10, 40, 20);
            p.textAlign(p.CENTER);
        }
    }, {
        key: 'drawMinuteLine',
        value: function drawMinuteLine(x) {
            p.stroke(0);
            p.strokeWeight(2);
            p.line(x, this.state.timeline.startY + 20, x, this.state.timeline.axisY);
            p.stroke(230);
            p.strokeWeight(2);
            p.line(x, this.state.timeline.axisY, x, this.state.timeline.endY);
        }
    }, {
        key: 'drawMinuteLabel',
        value: function drawMinuteLabel(i, x) {
            p.strokeWeight(0);
            p.textSize(12);
            p.textStyle(p.NORMAL);
            p.text(_TimeConverter2.default.toHHMMSS(Math.round(i / this.state.timeline.secondWidth)), x - 20, this.state.timeline.minutesY, 40, 20);
            p.textAlign(p.CENTER);
        }
    }, {
        key: 'drawStartMinuteLabel',
        value: function drawStartMinuteLabel(i, x) {
            p.strokeWeight(0);
            p.textSize(12);
            p.textStyle(p.NORMAL);
            p.text(_TimeConverter2.default.toHHMMSS(i), x - 20, this.state.timeline.minutesY, 40, 20);
            p.textAlign(p.CENTER);
        }
    }, {
        key: 'calculateColWidth',
        value: function calculateColWidth() {
            var minutes = (this.state.player.duration + 30) / 60;
            return Math.floor(this.state.canvas.width / minutes / 6) * this.state.timeline.zoomFactor;
        }
    }, {
        key: 'getStartTime',
        value: function getStartTime() {
            return this.state.timeline.startTime;
        }
    }]);

    return Timeline;
}();

exports.default = Timeline;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoTimeMarker = function () {
    function VideoTimeMarker() {
        _classCallCheck(this, VideoTimeMarker);

        this.state = (0, _mockstate.getState)('*');
    }

    _createClass(VideoTimeMarker, [{
        key: 'draw',
        value: function draw() {
            var currentX = (this.state.player.currentTime - this.state.timeline.startTime) * this.state.timeline.secondWidth + 30;
            currentX = currentX >= 30 ? currentX : 30;
            if (this.state.player.currentTime - this.state.timeline.startTime > 0) {
                p.stroke('blue');
                p.strokeWeight(2);
                p.line(currentX, this.state.timeline.startY + 30, currentX, this.state.timeline.startY + 60);
                p.line(currentX, this.state.timeline.startY + 60, currentX, this.state.timeline.endY);
                p.strokeWeight(0);
                p.textSize(12);
                p.textStyle(p.NORMAL);
                p.text(_TimeConverter2.default.toHHMMSS(Math.floor(this.state.player.currentTime)), currentX - 20, this.state.timeline.startY + 15, 40, 20);
                p.textAlign(p.CENTER);
            }
        }
    }, {
        key: 'drag',
        value: function drag(x, y) {}
    }]);

    return VideoTimeMarker;
}();

exports.default = VideoTimeMarker;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InspectorStage = function () {
    function InspectorStage() {
        _classCallCheck(this, InspectorStage);
    }

    _createClass(InspectorStage, [{
        key: 'setup',
        value: function setup() {}
    }, {
        key: 'draw',
        value: function draw() {
            inspector.background(255);
            inspector.strokeWeight(4);
            inspector.stroke('#d3e0e9');
            inspector.fill(255, 255, 255);
            inspector.rect(0, 0, inspector.width - 1, inspector.height - 1);
            inspector.noStroke();
            inspector.noFill();

            inspector.push();
            inspector.translate(0, 60);
            inspector.stroke('#d3e0e9');
            inspector.strokeWeight(1);
            inspector.rect(0, 0, 120, 60);
            inspector.line(0, 0, inspector.width, 0);
            inspector.line(0, 60, inspector.width, 60);
            inspector.fill('black');
            inspector.textSize(12);
            inspector.textStyle(inspector.NORMAL);
            inspector.textAlign(inspector.CENTER);
            inspector.text('Left Athlete', 5, 24, 110, 12);
            inspector.pop();

            inspector.push();
            inspector.translate(0, 120);
            inspector.stroke('#d3e0e9');
            inspector.strokeWeight(1);
            inspector.rect(0, 0, 120, 60);
            inspector.line(0, 60, inspector.width, 60);
            inspector.fill('black');
            inspector.textSize(12);
            inspector.textStyle(inspector.NORMAL);
            inspector.textAlign(inspector.CENTER);
            inspector.text('Right Athlete', 5, 24, 110, 12);
            inspector.pop();
        }
    }]);

    return InspectorStage;
}();

exports.default = InspectorStage;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InspectorTimeline = function () {
    function InspectorTimeline(startY, height) {
        _classCallCheck(this, InspectorTimeline);

        this.state = (0, _mockstate.getState)('*');
        (0, _mockstate.dispatch)('setInspectorStartY', startY);
        (0, _mockstate.dispatch)('setInspectorStartX', 120);
        (0, _mockstate.dispatch)('setInspectorHeight', height);
        this.startDelta = 0;
    }

    _createClass(InspectorTimeline, [{
        key: 'draw',
        value: function draw() {
            var colWidth = this.calculateColWidth();
            if (colWidth > 0) {
                (0, _mockstate.dispatch)('setInspectorColWidth', colWidth);
                (0, _mockstate.dispatch)('setInspectorEndX', (this.state.touchManager.selectedTouch.end - this.state.touchManager.selectedTouch.start) * this.state.touchManager.inspector.timeline.secondWidth + this.state.touchManager.inspector.timeline.startX);
                (0, _mockstate.dispatch)('setInspectorStartTime', this.state.touchManager.selectedTouch.start);
                inspector.strokeWeight(0);
                inspector.stroke(1);
                inspector.fill(0, 0, 0);
                inspector.textSize(12);
                inspector.textStyle(p.NORMAL);
                inspector.text(_TimeConverter2.default.toHHMMSS(this.state.touchManager.selectedTouch.end), this.state.touchManager.inspector.timeline.endX - 20, this.state.touchManager.inspector.timeline.startY + 30, 40, 20);
                inspector.textAlign(p.CENTER);

                inspector.stroke(0);
                inspector.strokeWeight(1);
                inspector.line(this.state.touchManager.inspector.timeline.startX, this.state.touchManager.inspector.timeline.axisY, this.state.touchManager.inspector.timeline.width, this.state.touchManager.inspector.timeline.axisY);
                for (var i = 0; i <= this.state.touchManager.inspector.timeline.width + this.state.touchManager.selectedTouch.start * this.state.touchManager.inspector.timeline.secondWidth - 30; i += this.state.touchManager.inspector.timeline.colWidth) {
                    var x = i + this.state.touchManager.inspector.timeline.startX;
                    var newX = x - this.state.touchManager.inspector.timeline.startTime * this.state.touchManager.inspector.timeline.secondWidth;

                    if (i == 0) {
                        this.drawStartLabel(this.state.touchManager.inspector.timeline.startTime, x);
                        this.drawMinuteLine(x);
                    } else if (i % (this.state.touchManager.inspector.timeline.colWidth * 6) == 0) {
                        if (newX >= 120) {
                            this.drawMinuteLabel(i, newX);
                            this.drawMinuteLine(newX);
                        }
                    } else {
                        if (newX >= 120) {
                            if (this.state.touchManager.inspector.timeline.showSecondsInterval) {
                                this.drawMiddleSecondLabel(i, newX);
                            }
                            this.drawMiddleSecondLine(newX);
                        }
                    }

                    if (this.state.touchManager.inspector.timeline.showSeconds) {
                        this.drawMiddleSecondLabel(i, newX);
                        this.drawSecondLine(x);
                    }
                }
                inspector.stroke('red');
                inspector.strokeWeight(2);
                inspector.line(this.state.touchManager.inspector.timeline.endX, this.state.touchManager.inspector.timeline.startY + 45, this.state.touchManager.inspector.timeline.endX, this.state.touchManager.inspector.timeline.axisY);
                inspector.line(this.state.touchManager.inspector.timeline.endX, this.state.touchManager.inspector.timeline.axisY, this.state.touchManager.inspector.timeline.endX, this.state.touchManager.inspector.timeline.endY);
            }
        }
    }, {
        key: 'mouseOver',
        value: function mouseOver() {
            if (!this.state.touchManager.inspector.timeline.hide) {
                if (inspector.mouseX >= 30 && inspector.mouseX <= this.state.canvas.width - 30 && inspector.mouseY >= this.state.touchManager.inspector.timeline.startY && inspector.mouseY <= this.state.touchManager.inspector.timeline.endY) {
                    inspector.cursor(inspector.HAND);
                    // dispatch('setTimelineMouseOver', true);
                } else {
                    inspector.cursor(inspector.ARROW);
                    //  dispatch('setTimelineMouseOver', false);
                }
            }
        }
    }, {
        key: 'drag',
        value: function drag() {
            if (!this.state.touchManager.inspector.timeline.hide) {

                var startDelta = inspector.pmouseX - inspector.mouseX;
                if (this.startDelta != startDelta) {
                    var start = this.state.touchManager.selectedTouch.start + startDelta / this.state.touchManager.inspector.timeline.secondWidth;
                    if (start < 0) {
                        //      dispatch('setTimelineStartTime', 0)
                    } else {
                            //      dispatch('setTimelineStartTime', Math.floor(start))
                        }
                    this.startDelta = startDelta;
                }
            }
        }
    }, {
        key: 'drawSecondLine',
        value: function drawSecondLine(x) {
            for (var j = 0; j < this.state.touchManager.inspector.timeline.colWidth; j += this.state.touchManager.inspector.timeline.colWidth / 10) {
                if (x + j < this.state.touchManager.inspector.timeline.width && j) {
                    inspector.stroke(0);
                    inspector.strokeWeight(1);
                    inspector.line(x + j, this.state.touchManager.inspector.timeline.secondsY + 5, x + j, this.state.touchManager.inspector.timeline.axisY);
                    inspector.stroke(230);
                    inspector.strokeWeight(1);
                    inspector.line(x + j, this.state.touchManager.inspector.timeline.secondsY, x + j, this.state.touchManager.inspector.timeline.endY);
                }
            }
            return j;
        }
    }, {
        key: 'drawMiddleSecondLine',
        value: function drawMiddleSecondLine(x) {
            inspector.stroke(0);
            inspector.strokeWeight(1);
            inspector.line(x, this.state.touchManager.inspector.timeline.secondsY, x, this.state.touchManager.inspector.timeline.axisY);
            inspector.stroke(230);
            inspector.strokeWeight(1);
            inspector.line(x, this.state.touchManager.inspector.timeline.axisY, x, this.state.touchManager.inspector.timeline.endY);
        }
    }, {
        key: 'drawMiddleSecondLabel',
        value: function drawMiddleSecondLabel(i, x) {
            inspector.stroke(230);
            inspector.strokeWeight(0);
            inspector.textSize(10);
            inspector.textStyle(inspector.NORMAL);
            inspector.text(_TimeConverter2.default.toSS(i / this.state.touchManager.inspector.timeline.secondWidth) + ' s', x - 20, this.state.touchManager.inspector.timeline.secondsY - 10, 40, 20);
            inspector.textAlign(inspector.CENTER);
        }
    }, {
        key: 'drawMinuteLine',
        value: function drawMinuteLine(x) {
            inspector.stroke(0);
            inspector.strokeWeight(2);
            inspector.line(x, this.state.touchManager.inspector.timeline.startY + 20, x, this.state.touchManager.inspector.timeline.axisY);
            inspector.stroke(230);
            inspector.strokeWeight(2);
            inspector.line(x, this.state.touchManager.inspector.timeline.axisY, x, this.state.touchManager.inspector.timeline.endY);
        }
    }, {
        key: 'drawMinuteLabel',
        value: function drawMinuteLabel(i, x) {
            inspector.strokeWeight(0);
            inspector.textSize(12);
            inspector.textStyle(inspector.NORMAL);
            inspector.text(_TimeConverter2.default.toHHMMSS(Math.round(i / this.state.touchManager.inspector.timeline.secondWidth)), x - 20, this.state.touchManager.inspector.timeline.minutesY, 40, 20);
            inspector.textAlign(inspector.CENTER);
        }
    }, {
        key: 'drawStartLabel',
        value: function drawStartLabel(startTime, x) {
            inspector.strokeWeight(0);
            inspector.textSize(12);
            inspector.textStyle(inspector.NORMAL);
            inspector.text(_TimeConverter2.default.toHHMMSS(startTime), x - 20, this.state.touchManager.inspector.timeline.minutesY, 40, 20);
            inspector.textAlign(inspector.CENTER);
        }
    }, {
        key: 'calculateColWidth',
        value: function calculateColWidth() {
            var minutes = (this.state.touchManager.selectedTouch.end - this.state.touchManager.selectedTouch.start) / 60;
            if (minutes > 0) {
                return Math.floor((this.state.canvas.width - this.state.touchManager.inspector.timeline.startX - 30) / minutes / 6);
            }

            return 0;
        }
    }, {
        key: 'getStartTime',
        value: function getStartTime() {
            return this.state.touchManager.selectedTouch.start;
        }
    }]);

    return InspectorTimeline;
}();

exports.default = InspectorTimeline;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InspectorVideoTimeMarker = function () {
    function InspectorVideoTimeMarker() {
        _classCallCheck(this, InspectorVideoTimeMarker);

        this.state = (0, _mockstate.getState)('*');
    }

    _createClass(InspectorVideoTimeMarker, [{
        key: 'draw',
        value: function draw() {
            var currentTime = Math.floor(this.state.player.currentTime);
            var currentX = (currentTime - this.state.touchManager.selectedTouch.start) * this.state.touchManager.inspector.timeline.secondWidth + this.state.touchManager.inspector.timeline.startX;
            inspector.stroke('blue');
            inspector.strokeWeight(2);
            inspector.line(currentX, this.state.touchManager.inspector.timeline.startY + 30, currentX, this.state.touchManager.inspector.timeline.startY + 60);
            inspector.line(currentX, this.state.touchManager.inspector.timeline.startY + 60, currentX, this.state.touchManager.inspector.timeline.endY);
            inspector.strokeWeight(0);
            inspector.textSize(12);
            inspector.textStyle(inspector.NORMAL);
            inspector.text(_TimeConverter2.default.toHHMMSS(currentTime), currentX - 20, this.state.touchManager.inspector.timeline.startY + 15, 40, 20);
            inspector.textAlign(inspector.CENTER);
        }
    }, {
        key: 'drag',
        value: function drag(x, y) {}
    }]);

    return InspectorVideoTimeMarker;
}();

exports.default = InspectorVideoTimeMarker;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _mockstate = __webpack_require__(135);

var _InspectorStage = __webpack_require__(299);

var _InspectorStage2 = _interopRequireDefault(_InspectorStage);

var _InspectorTimeline = __webpack_require__(300);

var _InspectorTimeline2 = _interopRequireDefault(_InspectorTimeline);

var _InspectorVideoTimeMarker = __webpack_require__(301);

var _InspectorVideoTimeMarker2 = _interopRequireDefault(_InspectorVideoTimeMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sketch(inspector) {
    var state = null;
    window.inspector = inspector;
    inspector.setup = function () {
        var width = document.getElementById('inspectorBox').offsetWidth;
        var canvas = inspector.createCanvas(width - 20, 190);
        canvas.mouseMoved(mouseMoved);
        canvas.mousePressed(mousePressed);
        (0, _mockstate.dispatch)('setInspectorCanvas', canvas);
        (0, _mockstate.dispatch)('setInspectorCanvasHeight', inspector.height);
        (0, _mockstate.dispatch)('setInspectorCanvasWidth', inspector.width);
        state = (0, _mockstate.getState)('*');
        state.touchManager.inspector.canvas.instance.parent('inspector');
        var stage = new _InspectorStage2.default();
        (0, _mockstate.dispatch)('setInspectorStage', stage);
        var timeline = new _InspectorTimeline2.default(0, 180);
        (0, _mockstate.dispatch)('setInspectorTimeline', timeline);
        var videoTimeMarker = new _InspectorVideoTimeMarker2.default();
        (0, _mockstate.dispatch)('setInspectorVideoMarker', videoTimeMarker);

        inspector.colorMode(inspector.RGB, 255, 255, 255, 100);

        inspector.frameRate(10);
        inspector.noLoop();
    };

    inspector.draw = function () {
        state.touchManager.inspector.stage.instance.draw();
        if (state.touchManager.selectedTouch) {
            state.touchManager.inspector.timeline.instance.draw();
            state.touchManager.selectedTouch.drawActions();
            state.touchManager.inspector.videoMarker.instance.draw();
        }
    };

    function mouseMoved() {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mouseOverAction(inspector.mouseX, inspector.mouseY);
            }
        }
    }

    function mousePressed() {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mousePressedAction(inspector.mouseX, inspector.mouseY);
            }
        }
    }

    inspector.stop = function () {
        inspector.noLoop();
    };

    inspector.start = function () {
        inspector.loop();
    };
}

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Touch = __webpack_require__(259);

var _Touch2 = _interopRequireDefault(_Touch);

var _Action = __webpack_require__(230);

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    setup: function setup() {

        var action = new _Action2.default(0, 60, {
            "hsl": { "h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1 },
            "hex": "#DBDF00",
            "rgba": { "r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50 },
            "hsv": { "h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1 }
        });

        return new _Touch2.default(0, 120, 'Touch Example', {
            "hsl": { "h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1 },
            "hex": "#DBDF00",
            "rgba": { "r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50 },
            "hsv": { "h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1 }
        }, [action]);
    }
};

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _Stage = __webpack_require__(296);

var _Stage2 = _interopRequireDefault(_Stage);

var _Timeline = __webpack_require__(297);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TouchManager = __webpack_require__(295);

var _TouchManager2 = _interopRequireDefault(_TouchManager);

var _VideoTimeMarker = __webpack_require__(298);

var _VideoTimeMarker2 = _interopRequireDefault(_VideoTimeMarker);

var _touchesSpec = __webpack_require__(303);

var _touchesSpec2 = _interopRequireDefault(_touchesSpec);

var _mockstate = __webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sketch(p) {
    var state = null;
    window.p = p;
    p.setup = function () {
        var width = document.getElementById('timelineBox').offsetWidth;
        var canvas = p.createCanvas(width - 20, 130);
        canvas.mouseMoved(mouseMoved);
        canvas.mousePressed(mousePressed);
        state = (0, _mockstate.getState)('*');
        (0, _mockstate.dispatch)('setCanvas', canvas);
        (0, _mockstate.dispatch)('setHeight', p.height);
        (0, _mockstate.dispatch)('setWidth', p.width);
        state.canvas.instance.parent('timeline');
        var stage = new _Stage2.default();
        (0, _mockstate.dispatch)('setStage', stage);
        var timeline = new _Timeline2.default(0, 120);
        (0, _mockstate.dispatch)('setTimeline', timeline);
        var touchManager = new _TouchManager2.default([/*TouchSpec.setup()*/]);
        (0, _mockstate.dispatch)('setTouchManager', touchManager);
        var videoTimeMarker = new _VideoTimeMarker2.default();
        (0, _mockstate.dispatch)('setVideoMarker', videoTimeMarker);

        state.stage.instance.setup();
        p.colorMode(p.RGB, 255, 255, 255, 100);
        state.player.instance.play();
        state.player.instance.on('timeupdate', function durationSetter(event) {
            if (!state.player.duration) {
                (0, _mockstate.dispatch)('setDuration', state.player.instance.duration());
                (0, _mockstate.dispatch)('setZoom', 1);
                state.player.instance.off('timeupdate', durationSetter);
            }
        });

        configButtons();
        p.frameRate(10);
    };

    p.draw = function () {
        state.stage.instance.draw();
        state.timeline.instance.draw();
        state.touchManager.instance.draw();
        state.videoMarker.instance.draw();
    };

    function configButtons() {}

    function zoomIn(event) {
        event.preventDefault();
        (0, _mockstate.dispatch)('setZoom', state.timeline.zoomFactor + 1);
        (0, _mockstate.dispatch)('setInitialized', false);
    }

    function zoomOut(event) {
        event.preventDefault();
        if (state.timeline.zoomFactor > state.timeline.initialZoomFactor) {
            (0, _mockstate.dispatch)('setZoom', state.timeline.zoomFactor - 1);
            (0, _mockstate.dispatch)('setInitialized', false);
        }
    }

    function mouseMoved() {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mouseOverTouch(p.mouseX, p.mouseY);
            }
            state.timeline.instance.mouseOver();
        }
    };

    p.mouseDragged = function (event) {
        if (state) {
            state.timeline.instance.drag();
        }
    };

    function mousePressed() {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mousePressedTouch(p.mouseX, p.mouseY);
            }
        }
    }

    p.stop = function () {
        console.log('noloop');
        p.noLoop();
    };

    p.start = function () {
        console.log('loop');
        p.loop();
    };
}

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = undefined;

var _mockstate = __webpack_require__(135);

var actions = exports.actions = {
    playerReady: function playerReady(state, ready) {
        state.playerReady = ready;
        return ready;
    },
    setCanvas: function setCanvas(state, instance) {
        state.canvas.instance = instance;
        return instance;
    },
    setTimeline: function setTimeline(state, instance) {
        state.timeline.instance = instance;
        return instance;
    },
    setTouchManager: function setTouchManager(state, instance) {
        state.touchManager.instance = instance;
        return instance;
    },
    setStage: function setStage(state, instance) {
        state.stage.instance = instance;
        return instance;
    },
    setPlayer: function setPlayer(state, instance) {
        state.player.instance = instance;
        return instance;
    },
    setVideoMarker: function setVideoMarker(state, instance) {
        state.videoMarker.instance = instance;
        return instance;
    },
    setWidth: function setWidth(state, width) {
        state.canvas.width = width;
        (0, _mockstate.dispatch)('setTimelineWidth', width);
        (0, _mockstate.dispatch)('setInspectorWidth', width);
        return width;
    },
    setHeight: function setHeight(state, height) {
        state.canvas.height = height;
        return height;
    },
    setTimelineWidth: function setTimelineWidth(state, width) {
        state.timeline.width = width;
        return width;
    },
    setTimelineHide: function setTimelineHide(state, hide) {
        state.timeline.hide = hide;
        return hide;
    },
    setTimelineHeight: function setTimelineHeight(state, height) {
        state.timeline.height = height;
        (0, _mockstate.dispatch)('setTimelineEndY', state.timeline.startY + height);
        return height;
    },
    setTimelineMouseOver: function setTimelineMouseOver(state, mouseOver) {
        state.timeline.isMouseOver = mouseOver;
        return mouseOver;
    },
    setTimelineStartTime: function setTimelineStartTime(state, startTime) {
        state.timeline.startTime = startTime;
        return startTime;
    },
    setTimelineStartY: function setTimelineStartY(state, startY) {
        state.timeline.startY = startY;
        (0, _mockstate.dispatch)('setTimelineMinutesY', startY + 5);
        (0, _mockstate.dispatch)('setTimelineSecondsY', startY + 55);
        (0, _mockstate.dispatch)('setTimelineAxisY', startY + 60);
        (0, _mockstate.dispatch)('setTimelineEndY', startY + state.timeline.height);
        return startY;
    },
    setTimelineAxisY: function setTimelineAxisY(state, axisY) {
        state.timeline.axisY = axisY;
        return axisY;
    },
    setTimelineEndY: function setTimelineEndY(state, endY) {
        state.timeline.endY = endY;
        return endY;
    },
    setTimelineStartX: function setTimelineStartX(state, startX) {
        state.timeline.startX = startX;
        return startX;
    },
    setTimelineEndX: function setTimelineEndX(state, endX) {
        endX = (state.player.duration - state.timeline.startTime) * state.timeline.secondWidth + 30;
        state.timeline.endX = endX;
        return endX;
    },
    setTimelineMinutesY: function setTimelineMinutesY(state, minutesY) {
        state.timeline.minutesY = minutesY;
        return minutesY;
    },
    setTimelineSecondsY: function setTimelineSecondsY(state, secondsY) {
        state.timeline.secondsY = secondsY;
        return secondsY;
    },
    setShowSeconds: function setShowSeconds(state, showSeconds) {
        state.timeline.showSeconds = showSeconds;
        return showSeconds;
    },
    setShowSecondsInterval: function setShowSecondsInterval(state, showSecondsInterval) {
        state.timeline.showSecondsInterval = showSecondsInterval;
        return showSecondsInterval;
    },
    setZoom: function setZoom(state, zoom) {
        if (state.player.duration > 420) {
            state.timeline.initialZoomFactor = Math.floor(state.player.duration / 420);
        }
        if (state.timeline.zoomFactor != zoom) {
            state.timeline.zoomFactorChange = true;
        }
        if (zoom < state.timeline.initialZoomFactor) {
            state.timeline.zoomFactor = state.timeline.initialZoomFactor;
        } else {
            state.timeline.zoomFactor = zoom;
        }
        return zoom;
    },
    setSecondWidth: function setSecondWidth(state, secondWidth) {
        state.timeline.secondWidth = secondWidth;
        return secondWidth;
    },
    setColWidth: function setColWidth(state, colWidth) {
        state.timeline.colWidth = colWidth;
        (0, _mockstate.dispatch)('setShowSecondsInterval', colWidth > 60);
        (0, _mockstate.dispatch)('setShowSeconds', colWidth > 90);
        (0, _mockstate.dispatch)('setSecondWidth', colWidth / 10);
        return colWidth;
    },
    setDuration: function setDuration(state, duration) {
        state.player.duration = duration;
        (0, _mockstate.dispatch)('setTimelineEndX', 0);
        return duration;
    },
    setCurrentTime: function setCurrentTime(state, currentTime) {
        state.player.currentTime = currentTime;
        return currentTime;
    },
    setInitialized: function setInitialized(state, initialized) {
        state.initialized = initialized;
        return initialized;
    },
    setTouches: function setTouches(state, touches) {
        state.touchManager.touches = touches;
        return touches;
    },
    setSelectedTouch: function setSelectedTouch(state, touch) {
        state.touchManager.selectedTouch = touch;
        return touch;
    },
    addTouch: function addTouch(state, touch) {
        state.touchManager.touches.push(touch);
        return touch;
    },
    editTouch: function editTouch(state, touch) {
        var index = _.findIndex(state.touchManager.touches, function (o) {
            return o.id == touch.id;
        });
        state.touchManager.touches[index].start = touch.start;
        state.touchManager.touches[index].end = touch.end;
        state.touchManager.touches[index].color = touch.color;
        state.touchManager.touches[index].text = touch.text;
        var i;
        for (i = 0; i < state.touchManager.touches[index].actions.length; i++) {
            state.touchManager.touches[index].actions[i].color = _.cloneDeep(touch.color);
        }
        return touch;
    },
    removeTouch: function removeTouch(state, touch) {
        var index = _.findIndex(state.touchManager.touches, function (o) {
            return o.id == touch.id;
        });
        if (index > -1) {
            state.touchManager.touches.splice(index, 1);
        }
        return touch;
    },


    //inspector
    setInspector: function setInspector(state, inspector) {
        state.touchManager.inspector.instance = inspector;
        return inspector;
    },
    setInspectorWidth: function setInspectorWidth(state, width) {
        state.touchManager.inspector.timeline.width = width;
        return width;
    },
    setInspectorHeight: function setInspectorHeight(state, height) {
        state.touchManager.inspector.timeline.height = height;
        (0, _mockstate.dispatch)('setInspectorEndY', state.touchManager.inspector.timeline.startY + height);

        return height;
    },
    setInspectorCanvas: function setInspectorCanvas(state, canvas) {
        state.touchManager.inspector.canvas.instance = canvas;
        return canvas;
    },
    setInspectorVideoMarker: function setInspectorVideoMarker(state, videoMarker) {
        state.touchManager.inspector.videoMarker.instance = videoMarker;
        return videoMarker;
    },
    setInspectorCanvasWidth: function setInspectorCanvasWidth(state, width) {
        state.touchManager.inspector.canvas.width = width;
        return width;
    },
    setInspectorCanvasHeight: function setInspectorCanvasHeight(state, height) {
        state.touchManager.inspector.canvas.height = height;
        return height;
    },
    setInspectorStage: function setInspectorStage(state, stage) {
        state.touchManager.inspector.stage.instance = stage;
        return stage;
    },
    setInspectorTimeline: function setInspectorTimeline(state, timeline) {
        state.touchManager.inspector.timeline.instance = timeline;
        return timeline;
    },
    setInspectorStartTime: function setInspectorStartTime(state, startTime) {
        state.touchManager.inspector.timeline.startTime = startTime;
        return startTime;
    },
    setInspectorStartY: function setInspectorStartY(state, startY) {
        state.touchManager.inspector.timeline.startY = startY;
        (0, _mockstate.dispatch)('setInspectorMinutesY', startY + 5);
        (0, _mockstate.dispatch)('setInspectorSecondsY', startY + 55);
        (0, _mockstate.dispatch)('setInspectorAxisY', startY + 60);
        return startY;
    },
    setInspectorAxisY: function setInspectorAxisY(state, axisY) {
        state.touchManager.inspector.timeline.axisY = axisY;
        return axisY;
    },
    setInspectorEndY: function setInspectorEndY(state, endY) {
        state.touchManager.inspector.timeline.endY = endY;
        return endY;
    },
    setInspectorStartX: function setInspectorStartX(state, startX) {
        state.touchManager.inspector.timeline.startX = startX;
        return startX;
    },
    setInspectorEndX: function setInspectorEndX(state, endX) {
        state.touchManager.inspector.timeline.endX = endX;
        return endX;
    },
    setInspectorMinutesY: function setInspectorMinutesY(state, minutesY) {
        state.touchManager.inspector.timeline.minutesY = minutesY;
        return minutesY;
    },
    setInspectorSecondsY: function setInspectorSecondsY(state, secondsY) {
        state.touchManager.inspector.timeline.secondsY = secondsY;
        return secondsY;
    },
    setInspectorSecondWidth: function setInspectorSecondWidth(state, secondWidth) {
        state.touchManager.inspector.timeline.secondWidth = secondWidth;
        return secondWidth;
    },
    setInspectorColWidth: function setInspectorColWidth(state, colWidth) {
        state.touchManager.inspector.timeline.colWidth = colWidth;
        (0, _mockstate.dispatch)('setInspectorSecondWidth', colWidth / 10);
        return colWidth;
    },
    setSelectedAction: function setSelectedAction(state, action) {
        state.touchManager.selectedAction = action;
        return action;
    },
    recordingTouch: function recordingTouch(state, recording) {
        state.touchManager.recordingTouch = recording;
        return recording;
    },
    recordingAction: function recordingAction(state, recording) {
        state.touchManager.recordingAction = recording;
        return recording;
    },
    addAction: function addAction(state, action) {
        state.touchManager.selectedTouch.actions.push(action);
        return action;
    },
    addLeftTag: function addLeftTag(state, tag) {
        state.touchManager.selectedAction.leftTags.push(tag);
        return tag;
    },
    addRightTag: function addRightTag(state, tag) {
        state.touchManager.selectedAction.rightTags.push(tag);
        return tag;
    },
    editAction: function editAction(state, action) {
        var index = _.findIndex(state.touchManager.selectedTouch.actions, function (o) {
            return o.id == action.id;
        });
        state.touchManager.selectedTouch.actions[index].start = action.start;
        state.touchManager.selectedTouch.actions[index].end = action.end;
        state.touchManager.selectedTouch.actions[index].color = action.color;
        return action;
    },
    removeAction: function removeAction(state, action) {
        var index = _.findIndex(state.touchManager.selectedTouch.actions, function (o) {
            return o.id == action.id;
        });
        if (index > -1) {
            state.touchManager.selectedTouch.actions.splice(index, 1);
        }
        return action;
    }
};

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var state = exports.state = {
    initialized: false,
    playerReady: false,
    touchManager: {
        instance: null,
        touches: [],
        selectedTouch: null,
        recordingAction: false,
        recordingTouch: false,
        inspector: {
            instance: null,
            canvas: {
                instance: null,
                width: 0,
                height: 0
            },
            videoMarker: {
                instance: null
            },
            stage: {
                instance: null
            },
            timeline: {
                instance: null,
                height: 0,
                width: 0,
                startY: 0,
                secondWidth: 0,
                colWidth: 0,
                endY: 0,
                minutesY: 0,
                secondsY: 0,
                axisY: 0,
                endX: 0,
                startX: 30,
                startTime: 0
            }
        }
    },
    timeline: {
        instance: null,
        width: 0,
        height: 0,
        hide: false,
        startTime: 0,
        showSeconds: false,
        showSecondsInterval: false,
        zoomFactor: 1,
        initialZoomFactor: 1,
        secondWidth: 0,
        colWidth: 0,
        startY: 0,
        endY: 0,
        minutesY: 0,
        secondsY: 0,
        axisY: 0,
        endX: 0,
        startX: 0,
        isMouseOver: false,
        zoomFactorChange: false
    },
    stage: {
        instance: null
    },
    player: {
        instance: null,
        duration: 0,
        currentTime: 0
    },
    videoMarker: {
        instance: null
    },
    canvas: {
        instance: null,
        width: 0,
        height: 0
    }
};

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    update: function update(id, scouting, successCalback, errorCallback) {
        return _vue2.default.http.put('/api/scoutings/' + id + '/touches/', scouting).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    }
};

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        showError: function showError(response) {
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
        }
    }
};

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.inspector-info {\n  margin-left: 10px;\n}\n.inspector-info .inspector-info--title {\n    margin: 0 10px;\n}\n.athlete-menu .dropdown {\n  display: inline-block !important;\n}\n.athlete-menu .athlete-menu-title {\n  border-top: 1px solid #d3e0e9;\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding: 0 10px;\n}\n.athlete-menu .athlete-menu-left {\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n.athlete-menu .athlete-menu-right {\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.tags a {\n  border-radius: 0 !important;\n  margin: 0 !important;\n}\n.close {\n  color: #ffffff !important;\n  opacity: 0.8 !important;\n}\n.tags-list {\n  display: block;\n  width: 100%;\n}\n.tags-list .label {\n  padding: 10px;\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.tags-list .label .close {\n    font-size: 16px;\n    margin-left: 5px;\n}\n.tags-list div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n}\n.tags-list div .label,\n  .gu-mirror .label {\n    padding: 10px;\n    line-height: 1.4;\n    font-size: 12px;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n.tags-list div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n  display: inline-block;\n}\n.tags-list div:last-child {\n  margin-bottom: 0;\n}\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n.gu-mirror .label .close {\n    display: none;\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n.gu-transit .close {\n    display: none;\n}\n.tags-list .ex-moved {\n  background-color: #e74c3c;\n}\n.tags-list.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n", ""]);

// exports


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n#video-canvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    padding-right: 15px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/global/video/player.vue?4cd93258"],"names":[],"mappings":";AAWA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,OAAA;IACA,oBAAA;CACA","file":"player.vue","sourcesContent":["<template>\n    <div>\n        <video ref=\"player\"\n               class=\"video-js vjs-default-skin\"\n               controls preload=\"auto\"\n               :poster=\"poster\"\n               :data-setup=\"strSource\"\n        ></video>\n    </div>\n</template>\n<style>\n    #video-canvas {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        padding-right: 15px;\n    }\n</style>\n<script>\n    import {dispatch} from 'mockstate';\n\n    export default{\n        data(){\n            return {\n                player: {}\n            }\n        },\n        props: {\n            source: {\n                type: Object\n            },\n            poster: {\n                type: String\n            },\n            offset: {\n                type: Object,\n                default: function () {\n                    return {\n                        start: false,\n                        end: false\n                    }\n                }\n            }\n        },\n        components: {},\n        computed: {\n            strSource(){\n                return JSON.stringify(this.source)\n            }\n        },\n        mounted(){\n            this.initPlayer(this.source);\n        },\n        methods: {\n            api(){\n                return this.player\n            },\n            initPlayer(source){\n                var self = this;\n                console.log(self.source);\n                let config = {\n                    fluid: true,\n                    source: source.sources[0],\n                    techOrder: ['youtube'],\n                    playbackRates: [0.25, 0.5, 1, 1.5, 2],\n                    plugins: {\n                        disableProgress: {},\n                        abLoopPlugin: {\n                            enabled: false,\n                            loopIfBeforeStart: false, //allow video to play normally before the loop section? defaults to true\n                            looopIfAfterEnd: true, // defaults to true\n                            pauseAfterLooping: false,       //if true, after looping video will pause. Defaults to false\n                            pauseBeforeLooping: false,      //if true, before looping video will pause. Defaults to false\n                            createButtons: false,  //defaults to true\n                        }\n                    }\n                };\n                if (this.offset.start) {\n                    config.plugins.dncoffset = {\n                        startOffset: this.offset.start,\n                        endOffset: this.offset.end\n                    }\n                }\n                this.player = videojs(this.$refs.player, config, ()=> {\n                    console.log('palyerReady');\n                    dispatch('playerReady', true);\n                })\n                dispatch('setPlayer', this.player);\n                this.player.playbackRate(1);\n                this.player.on('timeupdate', ()=> {\n                    dispatch('setCurrentTime', this.player.currentTime());\n                });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.tag {\n    display: inline-block;\n    color: #717171;\n    background: #FFF;\n    box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n    -webkit-transition: all .1s ease-in-out;\n    transition: all .1s ease-in-out;\n    border-radius: 2px;\n    margin: 0 3px 6px 0;\n    padding: 5px 10px;\n    text-decoration: none;\n    cursor: pointer;\n}\n.tags .tag:hover {\n    border-color: #08C;\n}\n.tags .tag.primary {\n    color: #FFF;\n    background-color: #428BCA;\n    border-color: #357EBD\n}\n.tags .tag.success {\n    color: #FFF;\n    background-color: #5CB85C;\n    border-color: #4CAE4C\n}\n.tags .tag.info {\n    color: #FFF;\n    background-color: #5BC0DE;\n    border-color: #46B8DA\n}\n.tags .tag.warning {\n    color: #FFF;\n    background-color: #F0AD4E;\n    border-color: #EEA236\n}\n.tags .tag.danger {\n    color: #FFF;\n    background-color: #D9534F;\n    border-color: #D43F3A\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tag.vue?0b714958"],"names":[],"mappings":";AAOA;IACA,sBAAA;IACA,eAAA;IACA,iBAAA;IAEA,iDAAA;IACA,wCAAA;IAIA,gCAAA;IACA,mBAAA;IACA,oBAAA;IACA,kBAAA;IACA,sBAAA;IACA,gBAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA","file":"tag.vue","sourcesContent":["<template>\n    <tag-dropdown v-if=\"tag.dropdown\" v-on:option-clicked=\"dropdownOptionClicked\" :tag=\"tag\"></tag-dropdown>\n    <div v-else class=\"tag-dropdown\">\n        <a class=\" btn tag\" v-on:click.prevent=\"tagClicked\" :class=\"'bg-'+tag.color\">{{tag.name}}</a>\n    </div>\n</template>\n<style>\n    .tag {\n        display: inline-block;\n        color: #717171;\n        background: #FFF;\n        -webkit-box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n        box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n        -webkit-transition: all .1s ease-in-out;\n        -moz-transition: all .1s ease-in-out;\n        -o-transition: all .1s ease-in-out;\n        -ms-transition: all .1s ease-in-out;\n        transition: all .1s ease-in-out;\n        border-radius: 2px;\n        margin: 0 3px 6px 0;\n        padding: 5px 10px;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    .tags .tag:hover {\n        border-color: #08C;\n    }\n\n    .tags .tag.primary {\n        color: #FFF;\n        background-color: #428BCA;\n        border-color: #357EBD\n    }\n\n    .tags .tag.success {\n        color: #FFF;\n        background-color: #5CB85C;\n        border-color: #4CAE4C\n    }\n\n    .tags .tag.info {\n        color: #FFF;\n        background-color: #5BC0DE;\n        border-color: #46B8DA\n    }\n\n    .tags .tag.warning {\n        color: #FFF;\n        background-color: #F0AD4E;\n        border-color: #EEA236\n    }\n\n    .tags .tag.danger {\n        color: #FFF;\n        background-color: #D9534F;\n        border-color: #D43F3A\n    }\n</style>\n<script>\n    import tagDropdown from './tagDropdown.vue'\n\n    export default{\n        props: {\n            tag: {}\n        },\n        components: {\n            tagDropdown\n        },\n        methods: {\n            dropdownOptionClicked(tag){\n                this.$emit('tag-clicked', tag)\n            },\n            tagClicked(){\n                this.$emit('tag-clicked', this.tag)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"touchesList.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"newTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/newTouchForm.vue?3cf04dd9"],"names":[],"mappings":";AA6SA;IACA,uBAAA;CACA","file":"newTouchForm.vue","sourcesContent":["<template>\n    <div>\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\" v-if=\"open\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.text') }\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            Title\n                        </label>\n                        <div class=\"col-xs-10\">\n\n                            <input id=\"new-title\" name=\"new-title\" type=\"text\"\n                                   v-validate.initial=\"touch.text\"\n                                   data-rules=\"required\"\n                                   data-as=\"Title\"\n                                   class=\"form-control\"\n                                   placeholder=\"Title\"\n                                   v-model=\"touch.text\">\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.text')\">{{ errors.first('touch.text') }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            Color\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.start') }\">\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\n                            Start (sec)\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start\" name=\"new-start\" type=\"text\"\n                                           v-validate.initial=\"touch.start\"\n                                           data-rules=\"required|numeric\"\n                                           data-as=\"Start\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           v-model=\"touch.start\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"startFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.start')\">{{ errors.first('touch.start') }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.end') }\">\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\n                            End(sec)\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end\" name=\"new-end\" type=\"text\"\n                                           v-validate.initial=\"touch.end\"\n                                           data-rules=\"required|numeric\"\n                                           data-as=\"End\"\n                                           class=\"form-control\"\n                                           placeholder=\"End\"\n                                           v-model=\"touch.end\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"endFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.end')\">{{ errors.first('touch.end') }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"collide\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4><i class=\"icon fa fa-ban\"></i> Touches cant overlap!</h4>\n                        The touch that you want to add overlap with:\n                        <ul>\n                            <li v-for=\"touch in collideTouches\">\n                                <strong v-if=\"touch.previous.hasOwnProperty('id')\">{{touch.previous.text}}: that\n                                    starts\n                                    on {{toHHMMSS(touch.previous.start)}} an\n                                    ends on\n                                    {{toHHMMSS(touch.previous.end)}}</strong>\n                                <strong v-if=\"touch.current.hasOwnProperty('id')\">{{touch.current.text}}: that\n                                    starts on\n                                    {{toHHMMSS(touch.current.start)}} an\n                                    ends on\n                                    {{toHHMMSS(touch.current.end)}}</strong>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"endInvalid\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4><i class=\"icon fa fa-ban\"></i> Validation Error!</h4>\n                        The end of the touch must be greater than the start\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">Add Touch</button>\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">Cancel</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</template>\n<style>\n\n</style>\n<script>\n    import {getState} from 'mockstate';\n    import {Compact} from 'vue-color';\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\n    export default{\n        props: {\n            open: {},\n            initTouch: {\n                default: function () {\n                    return {\n                        initialized: false,\n                        text: null,\n                        start: 0,\n                        end: 100,\n                        color: {\n                            \"hsl\": {\"h\": 61.0762331838565, \"s\": 1, \"l\": 0.4372549019607843, \"a\": 1},\n                            \"hex\": \"#DBDF00\",\n                            \"rgba\": {\"r\": 219, \"g\": 223, \"b\": 0, \"a\": 1, \"alpha\": 50},\n                            \"hsv\": {\"h\": 61.0762331838565, \"s\": 1, \"v\": 0.8745098039215686, \"a\": 1},\n                        }\n                    }\n                }\n            },\n            duration: {},\n            start: {},\n            end: {}\n        },\n        watch: {\n            open(val){\n                this.touch = Object.assign({}, this.initTouch);\n            },\n            start(val){\n                this.touch.start = val;\n            },\n            end(val){\n                this.touch.end = val\n            },\n            'touch.start': function () {\n                this.checkCollide()\n            },\n            'touch.end': function () {\n                this.checkCollide();\n                this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(this.duration));\n            }\n        },\n        data(){\n            return {\n                collide: false,\n                collideTouches: [],\n                endInvalid: false,\n                touch: {\n                    text: null,\n                    start: 0,\n                    end: 0,\n                    color: {\n                        rgba: {\n                            r: 25,\n                            g: 77,\n                            b: 51,\n                            a: 1\n                        },\n                    }\n                }\n            }\n        },\n        computed: {\n            startFmt(){\n                return TimeConverter.toHHMMSS(this.touch.start)\n            },\n            endFmt(){\n                return TimeConverter.toHHMMSS(this.touch.end)\n            },\n            validationEnd(){\n                return parseInt(this.touch.start) + 1;\n            }\n        },\n        components: {\n            'compact-picker': Compact,\n        },\n        methods: {\n            close(){\n                this.$emit('cancel-new-touch');\n            },\n            toHHMMSS(secs) {\n                return TimeConverter.toHHMMSS(secs)\n            },\n            onChangeColor(val){\n                this.touch.color = val\n            },\n            checkCollide(){\n                var touchs = getState('touchManager').touches.slice(0);\n                touchs.push(this.touch);\n                var overlap = this.overlap(touchs);\n                this.collide = overlap.overlap;\n                this.collideTouches = overlap.ranges;\n            },\n            overlap(touchs){\n                var sortedRanges = touchs.sort((previous, current) => {\n\n                    var previousTime = parseInt(previous.start);\n                    var currentTime = parseInt(current.start);\n\n                    // if the previous is earlier than the current\n                    if (previousTime < currentTime) {\n                        return -1;\n                    }\n\n                    // if the previous time is the same as the current time\n                    if (previousTime === currentTime) {\n                        return 0;\n                    }\n\n                    // if the previous time is later than the current time\n                    return 1;\n                });\n\n                // return the final results\n                return sortedRanges.reduce((result, current, idx, arr) => {\n                    // get the previous range\n                    if (idx === 0) {\n                        return result;\n                    }\n                    var previous = arr[idx - 1];\n\n                    // check for any overlap\n                    var previousEnd = parseInt(previous.end);\n                    var currentStart = parseInt(current.start);\n                    var overlap = (previousEnd >= currentStart);\n\n                    // store the result\n                    if (overlap) {\n                        // yes, there is overlap\n                        result.overlap = true;\n                        // store the specific ranges that overlap\n                        result.ranges.push({\n                            previous: previous,\n                            current: current\n                        })\n                    }\n\n                    return result;\n\n                    // seed the reduce\n                }, {overlap: false, ranges: []});\n            },\n            onSubmit(){\n                this.$validator.validateAll();\n                if (this.errors.any()) {\n\n                } else {\n                    this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(Math.floor(this.$parent.$refs.player.api().duration())));\n                    if (!this.endInvalid) {\n                        if (!this.collide) {\n                            this.endInvalid = false;\n                            this.$emit('add-new-touch', this.touch);\n                        }\n                    }\n                }\n            }\n        }\n    }\n</script>\n<style>\n    .vue-color__compact {\n        width: 100% !important;\n    }\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.tag-dropdown {\n    display: inline-block !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tagDropdown.vue?f44c862c"],"names":[],"mappings":";AAcA;IACA,iCAAA;CACA","file":"tagDropdown.vue","sourcesContent":["<template>\n    <div class=\"dropdown tag-dropdown\">\n        <a class=\"dropdown-toggle btn tag\" :class=\"'bg-'+tag.color\"\n           data-toggle=\"dropdown\" aria-expanded=\"false\" :id=\"id\">{{tag.name}}\n            <span class=\"fa fa-caret-down\"></span>\n        </a>\n        <ul class=\"dropdown-menu\" :aria-labelledby=\"id\">\n            <li v-for=\"opt in tag.options\">\n                <a href=\"#\" v-on:click.prevent=\"clickOpt(opt)\">{{opt.name}}</a>\n            </li>\n        </ul>\n    </div>\n</template>\n<style>\n    .tag-dropdown {\n        display: inline-block !important;\n    }\n</style>\n<script>\n    import uuid from 'base/mixins/uuid'\n    export default{\n        props: {\n            tag: {},\n        },\n        data(){\n            return {\n                id: ''\n            }\n        },\n        mixins: [uuid],\n        mounted(){\n            this.id = this.generateUUID();\n        },\n        methods: {\n            clickOpt(opt){\n                this.tag.option = opt;\n                this.$emit('option-clicked', this.tag)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"editTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/editTouchForm.vue?577b7182"],"names":[],"mappings":";AAsQA;IACA,uBAAA;CACA","file":"editTouchForm.vue","sourcesContent":["<template>\n    <div>\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.text') }\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.title')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <input id=\"new-title\"\n                                   name=\"touch.text\"\n                                   type=\"text\"\n                                   v-validate.initial=\"touch.text\"\n                                   data-vv-rules=\"required\"\n                                   data-vv-as=\"Title\"\n                                   class=\"form-control\"\n                                   placeholder=\"Title\"\n                                   v-model=\"touch.text\">\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.text')\">{{ errors.first('touch.text') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.color')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.start') }\">\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.start')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start\"\n                                           name=\"touch.start\"\n                                           type=\"text\"\n                                           v-validate.initial=\"touch.start\"\n                                           data-vv-rules=\"required|numeric\"\n                                           data-vv-as=\"Start\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           v-model=\"touch.start\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"startFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.start')\">{{ errors.first('touch.start') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.end') }\">\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.end')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end\"\n                                           name=\"touch.end\"\n                                           type=\"text\"\n                                           v-validate.initial=\"touch.end\"\n                                           data-vv-rules=\"required|numeric\"\n                                           data-vv-as=\"End\"\n                                           class=\"form-control\"\n                                           placeholder=\"End\"\n                                           v-model=\"touch.end\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"endFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.end')\">{{ errors.first('touch.end') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"collide\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4>\n                            <i class=\"icon fa fa-ban\"></i>\n                            {{$t('scoutings.touches_cant_overlap')}}\n                        </h4>\n                        {{$t('scoutings.touch_overlap_with')}}:\n                        <ul>\n                            <li v-for=\"collideTouch in collideTouches\">\n                                <strong v-if=\"collideTouch.previous.id != touch.id\">\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\n                                    collideTouch.previous.text,start:toHHMMSS(collideTouch.previous.start),end:\n                                    toHHMMSS(collideTouch.previous.end)})}}\n                                </strong>\n                                <strong v-if=\"collideTouch.current.id != touch.id\">\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\n                                    collideTouch.current.text,start:toHHMMSS(collideTouch.current.start),end:\n                                    toHHMMSS(collideTouch.current.end)})}}\n                                </strong>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"endInvalid\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4>\n                            <i class=\"icon fa fa-ban\"></i>\n                            {{$t('scoutings.validation_error')}}\n                        </h4>\n                        {{$t('scoutings.validation_end_greater')}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">{{$t('scoutings.save')}}</button>\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">{{$t('scoutings.cancel')}}</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</template>\n<style>\n\n</style>\n<script>\n    import {getState} from 'mockstate';\n    import {Compact} from 'vue-color';\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\n    import collideMixin from 'base/mixins/collide'\n    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';\n\n    export default{\n        locales: scoutingsLocales,\n        props: {\n            initTouch: {\n                default: function () {\n                    return {\n                        initialized: false,\n                        text: null,\n                        start: 0,\n                        end: 100,\n                        color: {\n                            rgba: {\n                                r: 25,\n                                g: 77,\n                                b: 51,\n                                a: 1\n                            },\n                        }\n                    }\n                }\n            },\n            duration: {},\n        },\n        mixins: [collideMixin],\n        created(){\n            this.touch = Object.assign({}, this.initTouch);\n        },\n        watch: {\n            'touch.start': function () {\n                var collideResult = this.checkCollide(this.touch);\n                this.collide = collideResult.collide;\n                this.collideTouches = collideResult.collideTouches;\n            },\n            'touch.end': function () {\n                var collideResult = this.checkCollide(this.touch);\n                this.collide = collideResult.collide;\n                this.collideTouches = collideResult.collideTouches;\n                this.endInvalid = parseInt(this.touch.start) >= parseInt(this.touch.end);\n            }\n        },\n        data(){\n            return {\n                collide: false,\n                collideTouches: [],\n                endInvalid: false,\n                touch: {\n                    text: null,\n                    start: 0,\n                    end: 0,\n                    color: {\n                        rgba: {\n                            r: 25,\n                            g: 77,\n                            b: 51,\n                            a: 1\n                        },\n                    }\n                }\n            }\n        },\n        computed: {\n            startFmt(){\n                return TimeConverter.toHHMMSS(this.touch.start)\n            },\n            endFmt(){\n                return TimeConverter.toHHMMSS(this.touch.end)\n            },\n            validationEnd(){\n                return parseInt(this.touch.start) + 1;\n            }\n        },\n        components: {\n            'compact-picker': Compact,\n        },\n        methods: {\n            close(){\n                this.$emit('cancel-new-touch', this.touch);\n            },\n            toHHMMSS(secs) {\n                return TimeConverter.toHHMMSS(secs)\n            },\n            onChangeColor(val){\n                this.touch.color = val\n            },\n            onSubmit(){\n                this.$validator.validateAll();\n                if (this.errors.any()) {\n\n                } else {\n                    if (this.touch.start >= this.touch.end) {\n                        this.endInvalid = true;\n                    } else {\n                        this.endInvalid = false;\n                        if (!this.collide) {\n                            this.$emit('add-new-touch', this.touch);\n                        }\n                    }\n                }\n            }\n        }\n    }\n</script>\n<style>\n    .vue-color__compact {\n        width: 100% !important;\n    }\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"timeline.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(382)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(263),
  /* template */
  __webpack_require__(348),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/components/global/video/player.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] player.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29457590", Component.options)
  } else {
    hotAPI.reload("data-v-29457590", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(377)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(286),
  /* template */
  __webpack_require__(362),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/canvas/inspector.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] inspector.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5792f56c", Component.options)
  } else {
    hotAPI.reload("data-v-5792f56c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(398)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(287),
  /* template */
  __webpack_require__(373),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/canvas/timeline.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timeline.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e56c8084", Component.options)
  } else {
    hotAPI.reload("data-v-e56c8084", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(393)
__webpack_require__(394)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(289),
  /* template */
  __webpack_require__(369),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/forms/editTouchForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] editTouchForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a749d602", Component.options)
  } else {
    hotAPI.reload("data-v-a749d602", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(389)
__webpack_require__(390)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(290),
  /* template */
  __webpack_require__(363),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/forms/newTouchForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newTouchForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cb83d0d", Component.options)
  } else {
    hotAPI.reload("data-v-5cb83d0d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(388)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(291),
  /* template */
  __webpack_require__(361),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/lists/touchesList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] touchesList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55390397", Component.options)
  } else {
    hotAPI.reload("data-v-55390397", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(385)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(292),
  /* template */
  __webpack_require__(356),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/tags/tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4504daee", Component.options)
  } else {
    hotAPI.reload("data-v-4504daee", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(392)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(293),
  /* template */
  __webpack_require__(366),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/tags/tagDropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tagDropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f124c9f", Component.options)
  } else {
    hotAPI.reload("data-v-6f124c9f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(378)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(294),
  /* template */
  __webpack_require__(364),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/scouting/touches/tags/tags.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tags.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f4223f5", Component.options)
  } else {
    hotAPI.reload("data-v-5f4223f5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('admin-header', {
    attrs: {
      "title": _vm.title,
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [(!_vm.playerReady) ? _c('div', {
    staticClass: "row"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row is-flex"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-6 player-container"
  }, [(_vm.initialized) ? _c('dnc-player', {
    ref: "player",
    attrs: {
      "source": _vm.source
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-6 touches-container"
  }, [(_vm.playerReady) ? _c('touches-list') : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "mailbox-controls control-menu"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('button', {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      "type": "button",
      "disabled": _vm.started
    },
    on: {
      "click": _vm.startTouch
    }
  }, [_c('i', {
    staticClass: "fa",
    class: {
      'fa-play': !_vm.started, 'fa-circle text-danger': _vm.started
    }
  }), _vm._v("\n                            " + _vm._s(_vm.started ? _vm.$t('scoutings.recording') : _vm.$t('scoutings.start_touch')) + "\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "type": "button",
      "disabled": !_vm.started
    },
    on: {
      "click": _vm.endTouch
    }
  }, [_c('i', {
    staticClass: "fa fa-stop"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('scoutings.end_touch')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "pull-right"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.toogleTimeline
    }
  }, [_c('i', {
    staticClass: "fa fa-calendar"
  }), _vm._v("\n                                " + _vm._s(_vm.$t('scoutings.toogle_timeline')) + "\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.toogleInspector
    }
  }, [_c('i', {
    staticClass: "fa fa-eye"
  }), _vm._v("\n                                " + _vm._s(_vm.$t('scoutings.toogle_inspector')) + "\n\n                            ")])])])])])]), _vm._v(" "), (_vm.edit) ? _c('edit-touch-form', {
    attrs: {
      "init-touch": _vm.touch,
      "duration": _vm.duration
    },
    on: {
      "cancel-new-touch": _vm.cancelEditTouch,
      "add-new-touch": _vm.saveEditTouch
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [(_vm.playerReady) ? _c('inspector', {
    ref: "inspector",
    attrs: {
      "playing": _vm.playing
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [(_vm.playerReady) ? _c('timeline') : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('button', {
    staticClass: "btn btn-success btn-block",
    on: {
      "click": _vm.save
    }
  }, [_vm._v(" " + _vm._s(_vm.$t('forms.save')))])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('button', {
    staticClass: "btn btn-danger btn-block",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.$t('forms.back')))])])])], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-12 text-center"
  }, [_c('h3', [_vm._v("Loading....")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24779b58", module.exports)
  }
}

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('video', {
    ref: "player",
    staticClass: "video-js vjs-default-skin",
    attrs: {
      "controls": "",
      "preload": "auto",
      "poster": _vm.poster,
      "data-setup": _vm.strSource
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29457590", module.exports)
  }
}

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.tag.dropdown) ? _c('tag-dropdown', {
    attrs: {
      "tag": _vm.tag
    },
    on: {
      "option-clicked": _vm.dropdownOptionClicked
    }
  }) : _c('div', {
    staticClass: "tag-dropdown"
  }, [_c('a', {
    staticClass: " btn tag",
    class: 'bg-' + _vm.tag.color,
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.tagClicked($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.tag.name))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4504daee", module.exports)
  }
}

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box box-solid "
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('i', {
    staticClass: "fa fa-map-marker"
  }), _vm._v(" "), _c('h3', {
    staticClass: "box-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('scoutings.touches')) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [(_vm.touches.length) ? _c('ul', {
    staticClass: "todo-list ui-sortable"
  }, _vm._l((_vm.touches), function(touch) {
    return _c('li', [_c('div', {
      staticClass: "pull-left",
      style: ('background:' + touch.color.hex + '; height:20px; width:20px;margin-top: 1px;')
    }), _vm._v(" "), _c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(touch.text))]), _vm._v(" "), _c('small', {
      staticClass: "label label-success"
    }, [_c('i', {
      staticClass: "fa fa-clock-o"
    }), _vm._v("\n                    " + _vm._s(_vm.$t('scoutings.start_at', {
      start: _vm.toHHMMSS(touch.start)
    })) + "\n                ")]), _vm._v(" "), _c('small', {
      staticClass: "label label-danger"
    }, [_c('i', {
      staticClass: "fa fa-clock-o"
    }), _vm._v("\n                    " + _vm._s(_vm.$t('scoutings.end_at', {
      end: _vm.toHHMMSS(touch.end)
    })) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "tools"
    }, [_c('i', {
      staticClass: "fa fa-edit",
      on: {
        "click": function($event) {
          _vm.editTouch(touch)
        }
      }
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-trash-o",
      on: {
        "click": function($event) {
          _vm.removeTouch(touch)
        }
      }
    })])])
  })) : _vm._e(), _vm._v(" "), (!_vm.touches.length) ? _c('h3', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.$t('scoutings.no_touches')))]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55390397", module.exports)
  }
}

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box box-solid collapsed-box",
    attrs: {
      "id": "inspectorBox"
    }
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('div', {
    staticClass: "pull-right box-tools"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button",
      "id": "inspectorToogler",
      "data-widget": "collapse",
      "data-toggle": "tooltip",
      "title": "",
      "data-original-title": "Collapse"
    },
    on: {
      "click": _vm.toogleOpen
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "pull-left"
  }, [_c('i', {
    staticClass: "fa fa-calendar"
  }), _vm._v(" "), _c('h3', {
    staticClass: "box-title"
  }, [_vm._v("\n                " + _vm._s(_vm.$t('scoutings.inspector')) + "\n            ")])]), _vm._v(" "), (_vm.touch) ? _c('div', {
    staticClass: "pull-left inspector-info"
  }, [_c('div', {
    staticClass: "pull-left",
    style: ('background:' + _vm.background + '; height:20px; width:20px;margin-top: 1px; margin-right:5px')
  }), _vm._v(" "), _c('div', {
    staticClass: "pull-left inspector-info--title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
    staticClass: "label label-success"
  }, [_vm._v(_vm._s(_vm.start))]), _vm._v(" "), _c('span', {
    staticClass: "label label-danger"
  }, [_vm._v(_vm._s(_vm.end))])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [(_vm.touch) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "mailbox-controls control-inspector-menu"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [(_vm.recordingTouch) ? _c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.createAction
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('scoutings.end_action')) + "\n                        ")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.play
    }
  }, [_c('i', {
    staticClass: "fa",
    class: {
      'fa-play': !_vm.playing, 'fa-pause text-danger': _vm.playing
    }
  }), _vm._v("\n                            " + _vm._s(_vm.playing ? _vm.$t('scoutings.pause') : _vm.$t('scoutings.play')) + "\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.backward(10)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-fast-backward"
  }), _vm._v("\n                            10 s\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.backward(5)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-backward"
  }), _vm._v("\n                            5 s\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.forward(5)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-forward"
  }), _vm._v("\n                            5 s\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.forward(10)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-fast-forward"
  }), _vm._v("\n                            10 s\n                        ")])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.playbackRate(0.25)
      }
    }
  }, [_vm._v("\n                            0.25 x\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.playbackRate(0.5)
      }
    }
  }, [_vm._v("\n                            0.5 x\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.playbackRate(1)
      }
    }
  }, [_vm._v("\n                            1 x\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.playbackRate(1.5)
      }
    }
  }, [_vm._v("\n                            1.5 x\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.playbackRate(2)
      }
    }
  }, [_vm._v("\n                            2 x\n                        ")])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "athlete-menu"
  }, [(_vm.touch) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6 no-padding-right"
  }, [_c('div', {
    staticClass: "athlete-menu-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('scoutings.left_actions')) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 no-padding-left"
  }, [_c('div', {
    staticClass: "athlete-menu-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('scoutings.right_actions')) + "\n                    ")])])]) : _vm._e(), _vm._v(" "), (_vm.touch) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6 no-padding-right"
  }, [_c('div', {
    staticClass: "athlete-menu-left"
  }, [_c('tags', {
    attrs: {
      "tags": _vm.tagsLeft,
      "selected": _vm.action.leftTags,
      "type": "left"
    },
    on: {
      "tag-deleted": _vm.tagDeletedLeft,
      "tag-selected": _vm.tagSelectedLeft
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6 no-padding-left"
  }, [_c('div', {
    staticClass: "athlete-menu-left"
  }, [_c('tags', {
    attrs: {
      "tags": _vm.tagsRight,
      "selected": _vm.action.rightTags,
      "type": "right"
    },
    on: {
      "tag-deleted": _vm.tagDeletedRight,
      "tag-selected": _vm.tagSelectedRight
    }
  })], 1)])]) : _vm._e()]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "inspector"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5792f56c", module.exports)
  }
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.open) ? _c('form', {
    staticClass: "form-horizontal form-touch",
    attrs: {
      "action": ""
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.onSubmit($event)
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('touch.text')
    }
  }, [_c('label', {
    staticClass: "control-label col-xs-2",
    attrs: {
      "for": "new-title"
    }
  }, [_vm._v("\n                        Title\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-10"
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.touch.text),
      expression: "touch.text",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.touch.text),
      expression: "touch.text"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-title",
      "name": "new-title",
      "type": "text",
      "data-rules": "required",
      "data-as": "Title",
      "placeholder": "Title"
    },
    domProps: {
      "value": _vm._s(_vm.touch.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.touch.text = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('touch.text')),
      expression: "errors.has('touch.text')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touch.text')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-xs-2",
    attrs: {
      "for": "new-title"
    }
  }, [_vm._v("\n                        Color\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-10"
  }, [_c('compact-picker', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.touch.color),
      expression: "touch.color"
    }],
    domProps: {
      "value": (_vm.touch.color)
    },
    on: {
      "change-color": _vm.onChangeColor,
      "input": function($event) {
        _vm.touch.color = $event
      }
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('touch.start')
    }
  }, [_c('label', {
    staticClass: "control-label col-xs-2",
    attrs: {
      "for": "new-start"
    }
  }, [_vm._v("\n                        Start (sec)\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-10"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.touch.start),
      expression: "touch.start",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.touch.start),
      expression: "touch.start"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-start",
      "name": "new-start",
      "type": "text",
      "data-rules": "required|numeric",
      "data-as": "Start",
      "placeholder": "Start"
    },
    domProps: {
      "value": _vm._s(_vm.touch.start)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.touch.start = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.startFmt),
      expression: "startFmt"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-start-fmt",
      "name": "new-start-fmt",
      "type": "text",
      "placeholder": "Start",
      "disabled": ""
    },
    domProps: {
      "value": _vm._s(_vm.startFmt)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.startFmt = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('touch.start')),
      expression: "errors.has('touch.start')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touch.start')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('touch.end')
    }
  }, [_c('label', {
    staticClass: "control-label col-xs-2",
    attrs: {
      "for": "new-end"
    }
  }, [_vm._v("\n                        End(sec)\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-10"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.touch.end),
      expression: "touch.end",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.touch.end),
      expression: "touch.end"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-end",
      "name": "new-end",
      "type": "text",
      "data-rules": "required|numeric",
      "data-as": "End",
      "placeholder": "End"
    },
    domProps: {
      "value": _vm._s(_vm.touch.end)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.touch.end = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.endFmt),
      expression: "endFmt"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-end-fmt",
      "name": "new-end-fmt",
      "type": "text",
      "placeholder": "Start",
      "disabled": ""
    },
    domProps: {
      "value": _vm._s(_vm.endFmt)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.endFmt = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('touch.end')),
      expression: "errors.has('touch.end')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touch.end')))])])])])]), _vm._v(" "), (_vm.collide) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "alert alert-danger"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _vm._m(0), _vm._v("\n                    The touch that you want to add overlap with:\n                    "), _c('ul', _vm._l((_vm.collideTouches), function(touch) {
    return _c('li', [(touch.previous.hasOwnProperty('id')) ? _c('strong', [_vm._v(_vm._s(touch.previous.text) + ": that\n                                starts\n                                on " + _vm._s(_vm.toHHMMSS(touch.previous.start)) + " an\n                                ends on\n                                " + _vm._s(_vm.toHHMMSS(touch.previous.end)))]) : _vm._e(), _vm._v(" "), (touch.current.hasOwnProperty('id')) ? _c('strong', [_vm._v(_vm._s(touch.current.text) + ": that\n                                starts on\n                                " + _vm._s(_vm.toHHMMSS(touch.current.start)) + " an\n                                ends on\n                                " + _vm._s(_vm.toHHMMSS(touch.current.end)))]) : _vm._e()])
  }))])])]) : _vm._e(), _vm._v(" "), (_vm.endInvalid) ? _c('div', {
    staticClass: "row"
  }, [_vm._m(1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 text-right"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Add Touch")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.close($event)
      }
    }
  }, [_vm._v("Cancel")])])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', [_c('i', {
    staticClass: "icon fa fa-ban"
  }), _vm._v(" Touches cant overlap!")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "alert alert-danger"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', [_c('i', {
    staticClass: "icon fa fa-ban"
  }), _vm._v(" Validation Error!")]), _vm._v("\n                    The end of the touch must be greater than the start\n                ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cb83d0d", module.exports)
  }
}

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tags"
  }, [_c('div', {
    staticClass: "btn-group",
    attrs: {
      "role": "group",
      "aria-label": "..."
    }
  }, _vm._l((_vm.tags), function(tag) {
    return _c('tag', {
      attrs: {
        "tag": tag
      },
      on: {
        "tag-clicked": _vm.tagSelected
      }
    })
  }))]), _vm._v(" "), _c('div', {
    staticClass: "tags-selected"
  }, [_c('div', {
    directives: [{
      name: "dragula",
      rawName: "v-dragula",
      value: (_vm.selected),
      expression: "selected"
    }],
    staticClass: "tags-list",
    attrs: {
      "bag": "first-bag"
    }
  }, _vm._l((_vm.selected), function(tag) {
    return _c('div', {
      key: tag.id
    }, [_c('div', {
      staticClass: "label",
      class: 'bg-' + tag.color
    }, [_c('span', [_vm._v(_vm._s(tag.name))]), _vm._v(" "), (tag.option) ? _c('span', [_vm._v(" " + _vm._s(tag.option.name))]) : _vm._e(), _vm._v(" "), _c('button', {
      staticClass: "close",
      attrs: {
        "type": "button",
        "data-dismiss": "modal",
        "aria-label": "Close"
      },
      on: {
        "click": function($event) {
          _vm.deleteTag(tag)
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("×")])])])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f4223f5", module.exports)
  }
}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dropdown tag-dropdown"
  }, [_c('a', {
    staticClass: "dropdown-toggle btn tag",
    class: 'bg-' + _vm.tag.color,
    attrs: {
      "data-toggle": "dropdown",
      "aria-expanded": "false",
      "id": _vm.id
    }
  }, [_vm._v(_vm._s(_vm.tag.name) + "\n        "), _c('span', {
    staticClass: "fa fa-caret-down"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    attrs: {
      "aria-labelledby": _vm.id
    }
  }, _vm._l((_vm.tag.options), function(opt) {
    return _c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.clickOpt(opt)
        }
      }
    }, [_vm._v(_vm._s(opt.name))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f124c9f", module.exports)
  }
}

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('form', {
    staticClass: "form-horizontal form-touch",
    attrs: {
      "action": ""
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.onSubmit($event)
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('touch.text')
    }
  }, [_c('label', {
    staticClass: "control-label col-xs-2",
    attrs: {
      "for": "new-title"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('scoutings.title')) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-10"
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.touch.text),
      expression: "touch.text",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.touch.text),
      expression: "touch.text"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-title",
      "name": "touch.text",
      "type": "text",
      "data-vv-rules": "required",
      "data-vv-as": "Title",
      "placeholder": "Title"
    },
    domProps: {
      "value": _vm._s(_vm.touch.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.touch.text = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('touch.text')),
      expression: "errors.has('touch.text')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touch.text')) + "\n                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-xs-2",
    attrs: {
      "for": "new-title"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('scoutings.color')) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-10"
  }, [_c('compact-picker', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.touch.color),
      expression: "touch.color"
    }],
    domProps: {
      "value": (_vm.touch.color)
    },
    on: {
      "change-color": _vm.onChangeColor,
      "input": function($event) {
        _vm.touch.color = $event
      }
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('touch.start')
    }
  }, [_c('label', {
    staticClass: "control-label col-xs-2",
    attrs: {
      "for": "new-start"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('scoutings.start')) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-10"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.touch.start),
      expression: "touch.start",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.touch.start),
      expression: "touch.start"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-start",
      "name": "touch.start",
      "type": "text",
      "data-vv-rules": "required|numeric",
      "data-vv-as": "Start",
      "placeholder": "Start"
    },
    domProps: {
      "value": _vm._s(_vm.touch.start)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.touch.start = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.startFmt),
      expression: "startFmt"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-start-fmt",
      "name": "new-start-fmt",
      "type": "text",
      "placeholder": "Start",
      "disabled": ""
    },
    domProps: {
      "value": _vm._s(_vm.startFmt)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.startFmt = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('touch.start')),
      expression: "errors.has('touch.start')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touch.start')) + "\n                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('touch.end')
    }
  }, [_c('label', {
    staticClass: "control-label col-xs-2",
    attrs: {
      "for": "new-end"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('scoutings.end')) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-10"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-6"
  }, [_c('input', {
    directives: [{
      name: "validate",
      rawName: "v-validate.initial",
      value: (_vm.touch.end),
      expression: "touch.end",
      modifiers: {
        "initial": true
      }
    }, {
      name: "model",
      rawName: "v-model",
      value: (_vm.touch.end),
      expression: "touch.end"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-end",
      "name": "touch.end",
      "type": "text",
      "data-vv-rules": "required|numeric",
      "data-vv-as": "End",
      "placeholder": "End"
    },
    domProps: {
      "value": _vm._s(_vm.touch.end)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.touch.end = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.endFmt),
      expression: "endFmt"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "new-end-fmt",
      "name": "new-end-fmt",
      "type": "text",
      "placeholder": "Start",
      "disabled": ""
    },
    domProps: {
      "value": _vm._s(_vm.endFmt)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.endFmt = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('touch.end')),
      expression: "errors.has('touch.end')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touch.end')) + "\n                        ")])])])])]), _vm._v(" "), (_vm.collide) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "alert alert-danger"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', [_c('i', {
    staticClass: "icon fa fa-ban"
  }), _vm._v("\n                        " + _vm._s(_vm.$t('scoutings.touches_cant_overlap')) + "\n                    ")]), _vm._v("\n                    " + _vm._s(_vm.$t('scoutings.touch_overlap_with')) + ":\n                    "), _c('ul', _vm._l((_vm.collideTouches), function(collideTouch) {
    return _c('li', [(collideTouch.previous.id != _vm.touch.id) ? _c('strong', [_vm._v("\n                                " + _vm._s(_vm.$t('scoutings.touch_overlap_msg', {
      title: collideTouch.previous.text,
      start: _vm.toHHMMSS(collideTouch.previous.start),
      end: _vm.toHHMMSS(collideTouch.previous.end)
    })) + "\n                            ")]) : _vm._e(), _vm._v(" "), (collideTouch.current.id != _vm.touch.id) ? _c('strong', [_vm._v("\n                                " + _vm._s(_vm.$t('scoutings.touch_overlap_msg', {
      title: collideTouch.current.text,
      start: _vm.toHHMMSS(collideTouch.current.start),
      end: _vm.toHHMMSS(collideTouch.current.end)
    })) + "\n                            ")]) : _vm._e()])
  }))])])]) : _vm._e(), _vm._v(" "), (_vm.endInvalid) ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "alert alert-danger"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', [_c('i', {
    staticClass: "icon fa fa-ban"
  }), _vm._v("\n                        " + _vm._s(_vm.$t('scoutings.validation_error')) + "\n                    ")]), _vm._v("\n                    " + _vm._s(_vm.$t('scoutings.validation_end_greater')) + "\n                ")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 text-right"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t('scoutings.save')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.close($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('scoutings.cancel')))])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a749d602", module.exports)
  }
}

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box box-solid",
    attrs: {
      "id": "timelineBox"
    }
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('div', {
    staticClass: "pull-right box-tools"
  }, [_c('button', {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      "type": "button",
      "data-toggle": "tooltip",
      "title": "Zoom In"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.zoomIn($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-search-plus"
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "type": "button",
      "data-toggle": "tooltip",
      "title": "Zoom Out"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.zoomOut($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-search-minus"
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button",
      "id": "timelineToogler",
      "data-widget": "collapse",
      "data-toggle": "tooltip",
      "title": "",
      "data-original-title": "Collapse"
    },
    on: {
      "click": _vm.toogleOpen
    }
  }, [_c('i', {
    staticClass: "fa fa-minus"
  })])]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-calendar"
  }), _vm._v(" "), _c('h3', {
    staticClass: "box-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('scoutings.timeline')) + "\n        ")])]), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box-body"
  }, [_c('div', {
    attrs: {
      "id": "timeline"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e56c8084", module.exports)
  }
}

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5792f56c!./../../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inspector.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5792f56c!./../../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inspector.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f4223f5!./../../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tags.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5f4223f5!./../../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tags.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-29457590!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./player.vue", function() {
			var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-29457590!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./player.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4504daee!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4504daee!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-55390397!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./touchesList.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-55390397!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./touchesList.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(322);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5cb83d0d!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./newTouchForm.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5cb83d0d!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./newTouchForm.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5cb83d0d!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./newTouchForm.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5cb83d0d!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./newTouchForm.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6f124c9f!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tagDropdown.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6f124c9f!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tagDropdown.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a749d602!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./editTouchForm.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a749d602!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./editTouchForm.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a749d602!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./editTouchForm.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a749d602!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./editTouchForm.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(331);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(134)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e56c8084!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./timeline.vue", function() {
			var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e56c8084!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./timeline.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlIiwid2VicGFjazovLy9wYWdlSGVhZGVyLnZ1ZT81NjBjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/YTU2ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzM4YTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT80NDEyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2NvbGxpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvU2Vjb25kc1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1V1aWRVdGlsLmpzIiwid2VicGFjazovLy8uL34vdnVlLWNvbG9yL2Rpc3QvdnVlLWNvbG9yLm1pbi5qcyIsIndlYnBhY2s6Ly8vcGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vaW5zcGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vdGltZWxpbmUudnVlIiwid2VicGFjazovLy9lZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vZWRpdFRvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL25ld1RvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3RvdWNoZXNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdGFnLnZ1ZSIsIndlYnBhY2s6Ly8vdGFnRHJvcGRvd24udnVlIiwid2VicGFjazovLy90YWdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1N0YWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9UaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvVmlkZW9UaW1lTWFya2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclZpZGVvVGltZU1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2luc3BlY3RvclNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL3NwZWNzL3RvdWNoZXNTcGVjLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvdGltZWxpbmVTa2V0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9zdG9yZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nVG91Y2hTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZXJyb3JQcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlPzYzZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWU/NDhiYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWU/YmQ0NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlPzAxNzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZT83MDYyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlPzMzMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/YTY3ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWU/ZDkzMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/MzVlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/YTU4NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZT83ZWZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2VkaXQudnVlPzYzMDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlPzAxNjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZT9kYWIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWU/ZTAyNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWU/YzUyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT8wODRlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlP2FhMmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlPzJlZGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlPzBkNmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWU/MjYwMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWU/MmZjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZT8yMmNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZT85MGVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWU/NjZhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvbGlzdHMvdG91Y2hlc0xpc3QudnVlPzZiMmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/NjQ3NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT9iYTUyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZT8yNGFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT8wY2MyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT8yOTA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlPzQzYTAiXSwibmFtZXMiOlsiVGltZUNvbnZlcnRlciIsInNlY3MiLCJzZWNfbnVtIiwicGFyc2VJbnQiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwiY3JlYXRlIiwic2NvdXRpbmciLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJyZW1vdmUiLCJkZWxldGUiLCJBY3Rpb24iLCJzdGFydCIsImVuZCIsImNvbG9yIiwic3RhdGUiLCJ1dWlkIiwiZ2VuZXJhdGVVVUlEIiwibW91c2VJc092ZXIiLCJpc1NlbGVjdGVkIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImxpbWl0VGV4dFkiLCJ0b3VjaE1hbmFnZXIiLCJpbnNwZWN0b3IiLCJ0aW1lbGluZSIsInN0YXJ0WSIsInNlY29uZHNVdGlsIiwiY2FudmFDb250YWluZXIiLCJsZWZ0VGFncyIsInJpZ2h0VGFncyIsImNhbGN1bGF0ZVgiLCJjYWxjdWxhdGVZIiwiY2FsY3VsYXRlV2lkdGgiLCJjYWxjdWxhdGVIZWlnaHQiLCJzZWxlY3RlZEFjdGlvbiIsInJnYmEiLCJhbHBoYSIsIm5vU3Ryb2tlIiwidGV4dFNpemUiLCJ0ZXh0U3R5bGUiLCJOT1JNQUwiLCJmaWxsIiwiciIsImciLCJiIiwicmVjdCIsIkJPTEQiLCJ0ZXh0IiwidG9ISE1NU1MiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJzdHJva2UiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwiZW5kWSIsInN0YXJ0VGltZSIsImFjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2bSIsImVkaXRUb3VjaCIsInJlY29yZGluZ0FjdGlvbiIsInJlY29yZGluZ1RvdWNoIiwiJHJlZnMiLCJwbGF5ZXIiLCJhcGkiLCJhYkxvb3BQbHVnaW4iLCJzZXRTdGFydCIsInNldEVuZCIsImVuYWJsZSIsImdvVG9TdGFydCIsInNlY29uZFdpZHRoIiwic3RhcnRYIiwibWV0aG9kcyIsImNoZWNrQ29sbGlkZSIsInRvdWNoIiwidG91Y2hlcyIsIl8iLCJyZWplY3QiLCJvIiwicHVzaCIsIm92ZXJsYXAiLCJjb2xsaWRlIiwiY29sbGlkZVRvdWNoZXMiLCJyYW5nZXMiLCJjaGVja0NvbGxpZGVBY3Rpb25zIiwic2VsZWN0ZWRUb3VjaCIsImFjdGlvbnMiLCJjb2xsaWRlQWN0aW9ucyIsInNvcnRlZFJhbmdlcyIsInNvcnQiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJwcmV2aW91c1RpbWUiLCJjdXJyZW50VGltZSIsInJlZHVjZSIsInJlc3VsdCIsImlkeCIsImFyciIsInByZXZpb3VzRW5kIiwiY3VycmVudFN0YXJ0IiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXBsYWNlIiwiYyIsInJhbmRvbSIsInRvU3RyaW5nIiwiVG91Y2giLCJwIiwiaiIsImxlbmd0aCIsImRyYXciLCJzdGFydGVkIiwicGxheSIsIlNlY29uZHNVdGlsIiwiVXVpZFV0aWwiLCJUb3VjaE1hbmFnZXIiLCJpc01vdXNlT3ZlciIsImNvbnNvbGUiLCJsb2ciLCJhVG91Y2hJc1NlbGVjdGVkIiwiaXNNb3VzZVByZXNzc2VkT3ZlciIsImRpc2FibGUiLCJhbkFjdGlvbklzU2VsZWN0ZWQiLCJTdGFnZSIsImJhY2tncm91bmQiLCJub0ZpbGwiLCJUaW1lbGluZSIsInN0YXJ0RGVsdGEiLCJoaWRlIiwiY2FsY3VsYXRlQ29sV2lkdGgiLCJkdXJhdGlvbiIsImVuZFgiLCJheGlzWSIsImkiLCJjb2xXaWR0aCIsIm5ld1giLCJkcmF3U3RhcnRNaW51dGVMYWJlbCIsImRyYXdNaW51dGVMaW5lIiwiZHJhd01pbnV0ZUxhYmVsIiwic2hvd1NlY29uZHNJbnRlcnZhbCIsImRyYXdNaWRkbGVTZWNvbmRMYWJlbCIsImRyYXdNaWRkbGVTZWNvbmRMaW5lIiwic2hvd1NlY29uZHMiLCJkcmF3U2Vjb25kTGluZSIsIm1vdXNlWCIsImNhbnZhcyIsIm1vdXNlWSIsImN1cnNvciIsIkhBTkQiLCJBUlJPVyIsInBtb3VzZVgiLCJzZWNvbmRzWSIsInRvU1MiLCJyb3VuZCIsIm1pbnV0ZXNZIiwiem9vbUZhY3RvciIsIlZpZGVvVGltZU1hcmtlciIsImN1cnJlbnRYIiwiSW5zcGVjdG9yU3RhZ2UiLCJ0cmFuc2xhdGUiLCJwb3AiLCJJbnNwZWN0b3JUaW1lbGluZSIsImRyYXdTdGFydExhYmVsIiwiSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyIiwic2tldGNoIiwic2V0dXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0V2lkdGgiLCJjcmVhdGVDYW52YXMiLCJtb3VzZU1vdmVkIiwibW91c2VQcmVzc2VkIiwiaW5zdGFuY2UiLCJwYXJlbnQiLCJzdGFnZSIsInZpZGVvVGltZU1hcmtlciIsImNvbG9yTW9kZSIsIlJHQiIsImZyYW1lUmF0ZSIsIm5vTG9vcCIsImRyYXdBY3Rpb25zIiwidmlkZW9NYXJrZXIiLCJtb3VzZU92ZXJBY3Rpb24iLCJtb3VzZVByZXNzZWRBY3Rpb24iLCJzdG9wIiwibG9vcCIsIm9uIiwiZHVyYXRpb25TZXR0ZXIiLCJvZmYiLCJjb25maWdCdXR0b25zIiwiem9vbUluIiwiem9vbU91dCIsImluaXRpYWxab29tRmFjdG9yIiwibW91c2VPdmVyVG91Y2giLCJtb3VzZU92ZXIiLCJtb3VzZURyYWdnZWQiLCJkcmFnIiwibW91c2VQcmVzc2VkVG91Y2giLCJwbGF5ZXJSZWFkeSIsInJlYWR5Iiwic2V0Q2FudmFzIiwic2V0VGltZWxpbmUiLCJzZXRUb3VjaE1hbmFnZXIiLCJzZXRTdGFnZSIsInNldFBsYXllciIsInNldFZpZGVvTWFya2VyIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJzZXRUaW1lbGluZVdpZHRoIiwic2V0VGltZWxpbmVIaWRlIiwic2V0VGltZWxpbmVIZWlnaHQiLCJzZXRUaW1lbGluZU1vdXNlT3ZlciIsInNldFRpbWVsaW5lU3RhcnRUaW1lIiwic2V0VGltZWxpbmVTdGFydFkiLCJzZXRUaW1lbGluZUF4aXNZIiwic2V0VGltZWxpbmVFbmRZIiwic2V0VGltZWxpbmVTdGFydFgiLCJzZXRUaW1lbGluZUVuZFgiLCJzZXRUaW1lbGluZU1pbnV0ZXNZIiwic2V0VGltZWxpbmVTZWNvbmRzWSIsInNldFNob3dTZWNvbmRzIiwic2V0U2hvd1NlY29uZHNJbnRlcnZhbCIsInNldFpvb20iLCJ6b29tIiwiem9vbUZhY3RvckNoYW5nZSIsInNldFNlY29uZFdpZHRoIiwic2V0Q29sV2lkdGgiLCJzZXREdXJhdGlvbiIsInNldEN1cnJlbnRUaW1lIiwic2V0SW5pdGlhbGl6ZWQiLCJpbml0aWFsaXplZCIsInNldFRvdWNoZXMiLCJzZXRTZWxlY3RlZFRvdWNoIiwiYWRkVG91Y2giLCJpbmRleCIsImZpbmRJbmRleCIsImNsb25lRGVlcCIsInJlbW92ZVRvdWNoIiwic3BsaWNlIiwic2V0SW5zcGVjdG9yIiwic2V0SW5zcGVjdG9yV2lkdGgiLCJzZXRJbnNwZWN0b3JIZWlnaHQiLCJzZXRJbnNwZWN0b3JDYW52YXMiLCJzZXRJbnNwZWN0b3JWaWRlb01hcmtlciIsInNldEluc3BlY3RvckNhbnZhc1dpZHRoIiwic2V0SW5zcGVjdG9yQ2FudmFzSGVpZ2h0Iiwic2V0SW5zcGVjdG9yU3RhZ2UiLCJzZXRJbnNwZWN0b3JUaW1lbGluZSIsInNldEluc3BlY3RvclN0YXJ0VGltZSIsInNldEluc3BlY3RvclN0YXJ0WSIsInNldEluc3BlY3RvckF4aXNZIiwic2V0SW5zcGVjdG9yRW5kWSIsInNldEluc3BlY3RvclN0YXJ0WCIsInNldEluc3BlY3RvckVuZFgiLCJzZXRJbnNwZWN0b3JNaW51dGVzWSIsInNldEluc3BlY3RvclNlY29uZHNZIiwic2V0SW5zcGVjdG9yU2Vjb25kV2lkdGgiLCJzZXRJbnNwZWN0b3JDb2xXaWR0aCIsInNldFNlbGVjdGVkQWN0aW9uIiwicmVjb3JkaW5nIiwiYWRkQWN0aW9uIiwiYWRkTGVmdFRhZyIsInRhZyIsImFkZFJpZ2h0VGFnIiwiZWRpdEFjdGlvbiIsInJlbW92ZUFjdGlvbiIsInNob3dFcnJvciIsInZhbGlkYXRpb24iLCJlcnJvcnMiLCJoYXNPd25Qcm9wZXJ0eSIsImZvckVhY2giLCJ2YWxpZGF0aW9uRXJyb3IiLCJzZWxmIiwiJHJvb3QiLCJlcnJvclRvYXN0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoSUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMzQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxrREFBa0QsYUFBYSxZQUFZLGdCQUFnQjtBQUMzRixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMxREEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0NBQStDLGFBQWEsWUFBWSxnQkFBZ0I7QUFDeEYsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyT0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN6VUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5REEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdENBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDN1VBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lZGl0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTI0Nzc5YjU4IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBlZGl0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNDc3OWI1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI0Nzc5YjU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhZ2VIZWFkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdmY2QwOTU2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt7dGl0bGV9fVxuICAgICAgICA8L2gxPlxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvb2w+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxuICAgIC5hZG1pbi1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDk3cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NTM3OWY1Y2IiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdmY2QwOTU2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVDb252ZXJ0ZXIge1xuICAgIHN0YXRpYyB0b0hITU1TUyhzZWNzKSB7XG4gICAgICAgIHZhciBzZWNfbnVtID0gcGFyc2VJbnQoc2VjcywgMTApOyAvLyBkb24ndCBmb3JnZXQgdGhlIHNlY29uZCBwYXJhbVxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHNlY19udW0gLyAzNjAwKTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzZWNfbnVtIC0gKGhvdXJzICogMzYwMCkpIC8gNjApO1xuICAgICAgICB2YXIgc2Vjb25kcyA9IHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSAtIChtaW51dGVzICogNjApO1xuXG4gICAgICAgIGlmIChob3VycyA8IDEwKSB7XG4gICAgICAgICAgICBob3VycyA9IFwiMFwiICsgaG91cnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICAgICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICAgICBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b1NTKHNlY3MpIHtcbiAgICAgICAgdmFyIHNlY19udW0gPSBwYXJzZUludChzZWNzLCAxMCk7IC8vIGRvbid0IGZvcmdldCB0aGUgc2Vjb25kIHBhcmFtXG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3Ioc2VjX251bSAvIDM2MDApO1xuICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSkgLyA2MCk7XG4gICAgICAgIHZhciBzZWNvbmRzID0gc2VjX251bSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCk7XG5cbiAgICAgICAgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2Vjb25kcztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJzY291dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBTY291dGluZyB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgU2NvdXRpbmcgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJUaGUgU2NvdXRpbmcgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIlRoZSBTY291dGluZyBkb2Vzbid0IGV4aXN0XCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOYW1lXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2hhbXBpb25zaGlwXCIsXG4gICAgICAgICAgICBcImV2ZW50XCI6IFwiRXZlbnRcIixcbiAgICAgICAgICAgIFwibGVmdF9hdGhsZXRlXCI6IFwiTGVmdCBBdGhsZXRlXCIsXG4gICAgICAgICAgICBcInJpZ2h0X2F0aGxldGVcIjogXCJSaWdodCBBdGhsZXRlXCIsXG4gICAgICAgICAgICBcInZpZGVvX3NyY1wiOiBcIlZpZGVvIFNvdXJjZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWN0IGFuIG9wdGlvblwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJVcGRhdGVcIixcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTmV3IFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiQXJlIHlvdSBzdXJlPyB0aGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9zY291dGluZ1wiOiBcIkRlbGV0ZSBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ19pbmZvXCI6IFwiU2NvdXRpbmcgSW5mb3JtYXRpb25cIixcbiAgICAgICAgICAgIFwidXBkYXRlX3Njb3V0aW5nXCI6IFwiVXBkYXRlIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcIm1ha2VcIjogXCJNYWtlIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcInN0YXJ0X3RvdWNoXCI6IFwiU3RhcnQgVG91Y2hcIixcbiAgICAgICAgICAgIFwiZW5kX3RvdWNoXCI6IFwiRW5kIFRvdWNoXCIsXG4gICAgICAgICAgICBcInRvb2dsZV90aW1lbGluZVwiOiBcIlRvb2dsZSBUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfaW5zcGVjdG9yXCI6IFwiVG9vZ2xlIEluc3BlY3RvclwiLFxuICAgICAgICAgICAgXCJpbnNwZWN0b3JcIjogXCJJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwidGltZWxpbmVcIjogXCJUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJlbmRfYWN0aW9uXCI6IFwiRW5kIEFjY2nDs25cIixcbiAgICAgICAgICAgIFwicGF1c2VcIjogXCJQYXVzZVwiLFxuICAgICAgICAgICAgXCJwbGF5XCI6IFwiUGxheVwiLFxuICAgICAgICAgICAgXCJsZWZ0X2FjdGlvbnNcIjogXCJMZWZ0IEF0aGxldGUgQWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJyaWdodF9hY3Rpb25zXCI6IFwiUmlnaHQgQXRobGV0ZSBBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGl0bGVcIixcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCJDb2xvclwiLFxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIlN0YXJ0IChzZWcpXCIsXG4gICAgICAgICAgICBcImVuZFwiOiBcIkVuZCAoc2VnKVwiLFxuICAgICAgICAgICAgXCJzYXZlXCI6IFwiU2F2ZSBDaGFuZ2VzXCIsXG4gICAgICAgICAgICBcImNhbmNlbFwiOiBcIkNhbmNlbCBDaGFuZ2VzXCIsXG4gICAgICAgICAgICBcInRvdWNoZXNfY2FudF9vdmVybGFwXCI6IFwiVG91Y2hlcyBjYW50IG92ZXJsYXBcIixcbiAgICAgICAgICAgIFwidG91Y2hfb3ZlcmxhcF93aXRoXCI6IFwiVGhlIHRvdWNoIHRoYXQgeW91IGFyZSB0cnlpbmcgdG8gYWRkIG92ZXJsYXAgd2l0aFwiLFxuICAgICAgICAgICAgXCJ2YWxpZGF0aW9uX2Vycm9yXCI6IFwiRVZhbGlkYXRpb24gRXJyb3JcIixcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lbmRfZ3JlYXRlclwiOiBcIlRoZSBlbmQgb2YgdGhlIHRvdWNoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBzdGFydFwiLFxuICAgICAgICAgICAgXCJ0b3VjaF9vdmVybGFwX21zZ1wiOiBcInt0aXRsZX0gdGhhdCBzdGFydHMgb24ge3N0YXJ0fSBhbmQgZW5kcyBvbiB7ZW5kfVwiLFxuICAgICAgICAgICAgXCJ0b3VjaGVzXCI6IFwiVG91Y2hlc1wiLFxuICAgICAgICAgICAgXCJzdGFydF9hdFwiOiBcIlN0YXJ0IGF0IHtzdGFydH1cIixcbiAgICAgICAgICAgIFwiZW5kX2F0XCI6IFwiRW5kIGF0IHtlbmR9XCIsXG4gICAgICAgICAgICBcIm5vX3RvdWNoZXNcIjogXCJUaGVyZSBhcmUgbm8gcmVnaXN0ZXJlZCB0b2N1aGVzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwic2NvdXRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBzY291dGluZyBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBhY3R1YWxpemFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIHNjb3V0aW5nIG5vIGV4aXN0ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9tYnJlXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcFwiOiBcIkNhbXBlb25hdG9cIixcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJFdmVudG9cIixcbiAgICAgICAgICAgIFwibGVmdF9hdGhsZXRlXCI6IFwiQXRsZXRhIGRlIGxhIGl6cXVpZXJkYVwiLFxuICAgICAgICAgICAgXCJyaWdodF9hdGhsZXRlXCI6IFwiQXRsZXRhIGRlIGxhIGRlcmVjaGFcIixcbiAgICAgICAgICAgIFwidmlkZW9fc3JjXCI6IFwiRnVlbnRlIGRlbCB2aWRlb1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWNjaW9uZXNcIixcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjY2lvbmEgdW5hIG9wY2nDs25cIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiQWN0dWFsaXphclwiLFxuICAgICAgICAgICAgXCJuZXdcIjogXCJOdWV2byBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIsK/RXN0YXMgU2VndXJvPyBlc3RhIGFjY2nDs24gbm8gc2UgcHVlZGUgZGVzaGFjZXJcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX3Njb3V0aW5nXCI6IFwiRWxpbWluYXIgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdfaW5mb1wiOiBcIkluZm9ybWFjacOzbiBkZWwgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwidXBkYXRlX3Njb3V0aW5nXCI6IFwiQWN0dWFsaXphciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJtYWtlXCI6IFwiSGFjZXIgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic3RhcnRfdG91Y2hcIjogXCJJbmljaWFyIFRvcXVlXCIsXG4gICAgICAgICAgICBcImVuZF90b3VjaFwiOiBcIkZpbmFsaXphciBUb3F1ZVwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfdGltZWxpbmVcIjogXCJUb29nbGUgVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwidG9vZ2xlX2luc3BlY3RvclwiOiBcIlRvb2dsZSBJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwiaW5zcGVjdG9yXCI6IFwiSW5zcGVjdG9yXCIsXG4gICAgICAgICAgICBcInRpbWVsaW5lXCI6IFwiVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwiZW5kX2FjdGlvblwiOiBcIkZpbmFsaXphciBBY2Npw7NuXCIsXG4gICAgICAgICAgICBcInBhdXNlXCI6IFwiUGF1c2FyXCIsXG4gICAgICAgICAgICBcInBsYXlcIjogXCJSZXByb2R1Y2lyXCIsXG4gICAgICAgICAgICBcImxlZnRfYWN0aW9uc1wiOiBcIkFjY2lvbmVzIGRlbCBBdGxldGEgZGUgbGEgaXpxdWllcmRhXCIsXG4gICAgICAgICAgICBcInJpZ2h0X2FjdGlvbnNcIjogXCJBY2Npb25lcyBkZWwgQXRsZXRhIGRlIGxhIGRlcmVjaGFcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaXR1bG9cIixcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCJDb2xvclwiLFxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIkluaWNpbyAoc2VnKVwiLFxuICAgICAgICAgICAgXCJlbmRcIjogXCJGaW4gKHNlZylcIixcbiAgICAgICAgICAgIFwic2F2ZVwiOiBcIkd1YXJkYXIgQ2FtYmlvc1wiLFxuICAgICAgICAgICAgXCJjYW5jZWxcIjogXCJDYW5jZWxhciBDYW1iaW9zXCIsXG4gICAgICAgICAgICBcInRvdWNoZXNfY2FudF9vdmVybGFwXCI6IFwiTG9zIHRvcXVlcyBubyBwdWVkZW4gc29icmVwb25lcnNlXCIsXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfd2l0aFwiOiBcIkVsIHRvcXVlIHF1ZSB0cmF0YXMgZGUgYcOxYWRpciBzZSBzdXBlcnBvbmUgY29uXCIsXG4gICAgICAgICAgICBcInZhbGlkYXRpb25fZXJyb3JcIjogXCJFcnJvciBkZSBWYWxpZGFjacOzblwiLFxuICAgICAgICAgICAgXCJ2YWxpZGF0aW9uX2VuZF9ncmVhdGVyXCI6IFwiRWwgZmluYWwgZGVsIHRvcXVlIGRlYmUgc2VyIG1heW9yIGFsIGluaWNpb1wiLFxuICAgICAgICAgICAgXCJ0b3VjaF9vdmVybGFwX21zZ1wiOiBcInt0aXRsZX0gcXVlIGVtcGllemEgZW4ge3N0YXJ0fSB5IHRlcm1pbmEgZW4ge2VuZH1cIixcbiAgICAgICAgICAgIFwidG91Y2hlc1wiOiBcIlRvcXVlc1wiLFxuICAgICAgICAgICAgXCJzdGFydF9hdFwiOiBcIkluaWNpYSBlbiB7c3RhcnR9XCIsXG4gICAgICAgICAgICBcImVuZF9hdFwiOiBcIkZpbmFsaXphIGVuIHtlbmR9XCIsXG4gICAgICAgICAgICBcIm5vX3RvdWNoZXNcIjogXCJObyBoYXkgdG9xdWVzIHJlZ2lzdHJhZG9zXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICc/aW5jbHVkZT1jaGFtcGlvbnNoaXAuc3BvcnQsZXZlbnQsbGVmdEF0aGxldGUscmlnaHRBdGhsZXRlLHRvdWNoZXMuYWN0aW9ucy5sZWZ0VGFncyx0b3VjaGVzLmFjdGlvbnMucmlnaHRUYWdzJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjcmVhdGUoc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvc2NvdXRpbmdzJywgc2NvdXRpbmcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgdXBkYXRlKGlkLCBzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQsIHNjb3V0aW5nLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvc2NvdXRpbmdzLycgKyBpZClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcyIsImltcG9ydCBVdWlkVXRpbCBmcm9tICcuLi91dGlscy9VdWlkVXRpbCdcbmltcG9ydCBTZWNvbmRzVXRpbCBmcm9tICcuLi91dGlscy9TZWNvbmRzVXRpbCdcbmltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kLCBjb2xvcikge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgdmFyIHV1aWQgPSBuZXcgVXVpZFV0aWwoKTtcbiAgICAgICAgdGhpcy5pZCA9IHV1aWQuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ID0gbnVsbDtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdFRleHRZID0gMzAgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZO1xuICAgICAgICB0aGlzLnNlY29uZHNVdGlsID0gbmV3IFNlY29uZHNVdGlsKCk7XG4gICAgICAgIHRoaXMuY2FudmFDb250YWluZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRUYWdzID0gW11cbiAgICAgICAgdGhpcy5yaWdodFRhZ3MgPSBbXVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FsY3VsYXRlWCgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgPyB0aGlzLnkgOiB0aGlzLmNhbGN1bGF0ZVkoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FsY3VsYXRlV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24uaWQgPT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSAxMDA7XG4gICAgICAgICAgICBpbnNwZWN0b3Iubm9TdHJva2UoKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgMTAwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCArIHRoaXMud2lkdGggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMTUpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnJlY3QodGhpcy54IC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDI1NSwgMjU1LCAyNTUsIDEwMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5CT0xEKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGFydCksIHRoaXMueCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAyMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuZW5kKSwgdGhpcy54IC0gMzAgKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAyMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZShpbnNwZWN0b3IuY29sb3IodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYikpXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLngsIHRoaXMubGltaXRUZXh0WSArIDIwLCB0aGlzLngsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMueCArIHRoaXMud2lkdGgsIHRoaXMubGltaXRUZXh0WSArIDIwLCB0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lID4gMCkge1xuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwoMjU1KTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIsIHRoaXMuY29sb3IucmdiYS5hbHBoYSk7ICAvLyBVc2UgY29sb3IgdmFyaWFibGUgJ2MnIGFzIGZpbGwgY29sb3JcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDUxKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UodGhpcy5jb2xvci5yZ2JhLnIgKiAwLjc1LCB0aGlzLmNvbG9yLnJnYmEuZyAqIDAuNzUsIHRoaXMuY29sb3IucmdiYS5iICogMC43NSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAgLy8gRHJhdyByZWN0YW5nbGVcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCwgdGhpcy55ICsgNjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXG5cbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDAsIDAsIDAsIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0UHJlc3NlZChhY3Rpb24sIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdGlvbik7XG4gICAgICAgIHZtLmVkaXRUb3VjaChldmVudCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBpc01vdXNlT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDw9ICh0aGlzLnggKyB0aGlzLndpZHRoKSAmJiB5ID49IHRoaXMueSAmJiB5IDw9ICh0aGlzLnkgKyB0aGlzLmhlaWdodCAqIDIpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSAxMDA7XG4gICAgICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDUwO1xuICAgICAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlSXNPdmVyO1xuICAgIH1cblxuICAgIGlzTW91c2VQcmVzc3NlZE92ZXIoeCwgeSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ0FjdGlvbiAmJiAhdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nVG91Y2gpIHtcbiAgICAgICAgICAgIGlmICh5ID49IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLnNldFN0YXJ0KHRoaXMuc3RhcnQpLnNldEVuZCh0aGlzLmVuZCkuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5hYkxvb3BQbHVnaW4uZ29Ub1N0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjYWxjdWxhdGVYKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSAodGhpcy5zdGFydCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICByZXR1cm4gc3RhcnQgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVkoKSB7XG4gICAgICAgIHJldHVybiA2MSArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XG4gICAgICAgIHZhciBzdGFydCA9ICh0aGlzLnN0YXJ0IC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gNjA7XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbi5qcyIsIi8vIGRlZmluZSBhIG1peGluIG9iamVjdFxuaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgIHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoZWNrQ29sbGlkZSh0b3VjaCl7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IF8ucmVqZWN0KGdldFN0YXRlKCd0b3VjaE1hbmFnZXInKS50b3VjaGVzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b3VjaC5pZCA9PSBvLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b3VjaGVzLnB1c2godG91Y2gpO1xuICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0aGlzLm92ZXJsYXAodG91Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbGxpZGU6IG92ZXJsYXAub3ZlcmxhcCxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogb3ZlcmxhcC5yYW5nZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tDb2xsaWRlQWN0aW9ucyhhY3Rpb24pe1xuICAgICAgICAgICAgaWYgKGdldFN0YXRlKCd0b3VjaE1hbmFnZXInKS5zZWxlY3RlZFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkVG91Y2ggPSBnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykuc2VsZWN0ZWRUb3VjaDtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbnMgPSBfLnJlamVjdChzZWxlY3RlZFRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmlkID09IG8uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcChhY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGFwID0ge292ZXJsYXA6IGZhbHNlLCByYW5nZXM6IFtdfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBvdmVybGFwLm92ZXJsYXAsXG4gICAgICAgICAgICAgICAgY29sbGlkZUFjdGlvbnM6IG92ZXJsYXAucmFuZ2VzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXAodG91Y2hlcyl7XG4gICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hlcy5zb3J0KChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVGltZSA9IHBhcnNlSW50KHByZXZpb3VzLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwYXJzZUludChjdXJyZW50LnN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyBpcyBlYXJsaWVyIHRoYW4gdGhlIGN1cnJlbnRcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA9PT0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBmaW5hbCByZXN1bHRzXG4gICAgICAgICAgICByZXR1cm4gc29ydGVkUmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgcHJldmlvdXMgcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IGFycltpZHggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBhbnkgb3ZlcmxhcFxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0VuZCA9IHBhcnNlSW50KHByZXZpb3VzLmVuZCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGFydCA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gKHByZXZpb3VzRW5kID4gY3VycmVudFN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB5ZXMsIHRoZXJlIGlzIG92ZXJsYXBcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgc3BlY2lmaWMgcmFuZ2VzIHRoYXQgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogY3VycmVudFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBzZWVkIHRoZSByZWR1Y2VcbiAgICAgICAgICAgIH0sIHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX0pO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9jb2xsaWRlLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2VuZXJhdGVVVUlEKCkge1xuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXVpZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcyIsImltcG9ydCBVdWlkVXRpbCBmcm9tICcuLi91dGlscy9VdWlkVXRpbCdcbmltcG9ydCBTZWNvbmRzVXRpbCBmcm9tICcuLi91dGlscy9TZWNvbmRzVXRpbCdcbmltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJ1xuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kLCB0ZXh0LCBjb2xvciwgYWN0aW9ucykge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgdmFyIHV1aWQgPSBuZXcgVXVpZFV0aWwoKTtcbiAgICAgICAgdGhpcy5pZCA9IHV1aWQuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ID0gbnVsbDtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdFRleHRZID0gMzAgKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucyA/IGFjdGlvbnMgOiBbXVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FsY3VsYXRlWCgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgPyB0aGlzLnkgOiB0aGlzLmNhbGN1bGF0ZVkoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FsY3VsYXRlV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDEwMDtcbiAgICAgICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIsIDEwMCk7XG4gICAgICAgICAgICBwLnJlY3QodGhpcy54ICsgdGhpcy53aWR0aCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAxNSk7XG4gICAgICAgICAgICBwLnJlY3QodGhpcy54IC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcbiAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMjU1LCAxMDApO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5CT0xEKTtcbiAgICAgICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuc3RhcnQpLCB0aGlzLnggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMjApO1xuICAgICAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5lbmQpLCB0aGlzLnggLSAzMCArIHRoaXMud2lkdGgsIHRoaXMubGltaXRUZXh0WSwgNjAsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlKHAuY29sb3IodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYikpXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICAgICAgcC5saW5lKHRoaXMueCwgdGhpcy5saW1pdFRleHRZICsgMjAsIHRoaXMueCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIHAubGluZSh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFkgKyAyMCwgdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuZCAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lID4gMCkge1xuICAgICAgICAgICAgcC5maWxsKDI1NSk7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgdGhpcy5jb2xvci5yZ2JhLmFscGhhKTsgIC8vIFVzZSBjb2xvciB2YXJpYWJsZSAnYycgYXMgZmlsbCBjb2xvclxuICAgICAgICAgICAgcC5ub1N0cm9rZSgpOyAgLy8gRG9uJ3QgZHJhdyBhIHN0cm9rZSBhcm91bmQgc2hhcGVzXG4gICAgICAgICAgICBwLnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUsIHRoaXMuY29sb3IucmdiYS5hbHBoYSk7ICAvLyBVc2UgY29sb3IgdmFyaWFibGUgJ2MnIGFzIGZpbGwgY29sb3JcbiAgICAgICAgICAgIHAucmVjdCh0aGlzLnggKyAyLCB0aGlzLnkgKyAxLCB0aGlzLndpZHRoIC0gNCwgMjApOyAgLy8gRHJhdyByZWN0YW5nbGVcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwLCB0aGlzLmNvbG9yLnJnYmEuYWxwaGEpO1xuICAgICAgICAgICAgcC50ZXh0KHRoaXMudGV4dCwgdGhpcy54ICsgMiwgdGhpcy55ICsgMSwgdGhpcy53aWR0aCAtIDQsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0FjdGlvbnMoKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNbal0uZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdFByZXNzZWQodG91Y2gsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgdG91Y2gpO1xuICAgICAgICB2bS5lZGl0VG91Y2goZXZlbnQsIHRvdWNoKTtcbiAgICB9XG5cbiAgICBpc01vdXNlT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDw9ICh0aGlzLnggKyB0aGlzLndpZHRoKSAmJiB5ID49IHRoaXMueSAmJiB5IDw9ICh0aGlzLnkgKyB0aGlzLmhlaWdodCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMubW91c2VJc092ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gNTA7XG4gICAgICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2VJc092ZXI7XG4gICAgfVxuXG4gICAgaXNNb3VzZVByZXNzc2VkT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nQWN0aW9uICYmICF0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdUb3VjaCkge1xuICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdm0uc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5zZXRTdGFydCh0aGlzLnN0YXJ0KS5zZXRFbmQodGhpcy5lbmQpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5nb1RvU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNhbGN1bGF0ZVgoKSB7XG4gICAgICAgIHZhciBzdGFydCA9ICh0aGlzLnN0YXJ0IC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgMzBcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVZKCkge1xuICAgICAgICByZXR1cm4gNjEgKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVXaWR0aCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gKHRoaXMuc3RhcnQgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIDYwO1xuICAgIH1cblxuICAgIGdldEZvcm1hdGVkU3RhcnQoKSB7XG4gICAgICAgIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGFydClcbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2guanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vjb25kc1V0aWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICB9XG5cbiAgICBnZXRGb3JtYXR0ZWRUaW1lKHgpIHtcbiAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoTWF0aC5mbG9vcih4IC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCkpO1xuICAgIH1cblxuICAgIGdldFNlY29uZHMoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4IC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCk7XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9TZWNvbmRzVXRpbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV1aWRVdGlsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVVVSUQoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVXVpZFV0aWwuanMiLCIhZnVuY3Rpb24oZSxvKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1vKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxvKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZUNvbG9yPW8oKTplLlZ1ZUNvbG9yPW8oKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiBvKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgaT10W3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyxvKSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIHQ9e307cmV0dXJuIG8ubT1lLG8uYz10LG8ucD1cIlwiLG8oMCl9KFtmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fXZhciBpPXQoMzgpLGE9cihpKSxuPXQoMzkpLHM9cihuKSxsPXQoNDIpLGM9cihsKSx1PXQoNDMpLGg9cih1KSxkPXQoNDApLGY9cihkKSxwPXQoNDEpLF89cihwKSx2PXQoMzcpLGc9cih2KSxiPXQoNiksbT1yKGIpLHg9dCg4KSx3PXIoeCksQz10KDQpLHk9cihDKSxrPXQoNSksRj1yKGspLFI9dCg3KSxBPXIoUiksTT10KDMpLFA9cihNKSxOPXt2ZXJzaW9uOlwiMS4wLjI2XCIsQ29tcGFjdDphW1wiZGVmYXVsdFwiXSxNYXRlcmlhbDpzW1wiZGVmYXVsdFwiXSxTbGlkZXI6Y1tcImRlZmF1bHRcIl0sU3dhdGNoZXM6aFtcImRlZmF1bHRcIl0sUGhvdG9zaG9wOmZbXCJkZWZhdWx0XCJdLFNrZXRjaDpfW1wiZGVmYXVsdFwiXSxDaHJvbWU6Z1tcImRlZmF1bHRcIl0sQWxwaGE6bVtcImRlZmF1bHRcIl0sQ2hlY2tib2FyZDp3W1wiZGVmYXVsdFwiXSxFZGl0YWJsZUlucHV0OnlbXCJkZWZhdWx0XCJdLEh1ZTpGW1wiZGVmYXVsdFwiXSxTYXR1cmF0aW9uOkFbXCJkZWZhdWx0XCJdLENvbG9yTWl4aW46UFtcImRlZmF1bHRcIl19O2UuZXhwb3J0cz1OfSxmdW5jdGlvbihlLG8pe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLG89MDtvPHRoaXMubGVuZ3RoO28rKyl7dmFyIHQ9dGhpc1tvXTt0WzJdP2UucHVzaChcIkBtZWRpYSBcIit0WzJdK1wie1wiK3RbMV0rXCJ9XCIpOmUucHVzaCh0WzFdKX1yZXR1cm4gZS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24obyx0KXtcInN0cmluZ1wiPT10eXBlb2YgbyYmKG89W1tudWxsLG8sXCJcIl1dKTtmb3IodmFyIHI9e30saT0wO2k8dGhpcy5sZW5ndGg7aSsrKXt2YXIgYT10aGlzW2ldWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBhJiYoclthXT0hMCl9Zm9yKGk9MDtpPG8ubGVuZ3RoO2krKyl7dmFyIG49b1tpXTtcIm51bWJlclwiPT10eXBlb2YgblswXSYmcltuWzBdXXx8KHQmJiFuWzJdP25bMl09dDp0JiYoblsyXT1cIihcIituWzJdK1wiKSBhbmQgKFwiK3QrXCIpXCIpLGUucHVzaChuKSl9fSxlfX0sZnVuY3Rpb24oZSxvLHQpe2Z1bmN0aW9uIHIoZSxvKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7dmFyIHI9ZVt0XSxpPWhbci5pZF07aWYoaSl7aS5yZWZzKys7Zm9yKHZhciBhPTA7YTxpLnBhcnRzLmxlbmd0aDthKyspaS5wYXJ0c1thXShyLnBhcnRzW2FdKTtmb3IoO2E8ci5wYXJ0cy5sZW5ndGg7YSsrKWkucGFydHMucHVzaChsKHIucGFydHNbYV0sbykpfWVsc2V7Zm9yKHZhciBuPVtdLGE9MDthPHIucGFydHMubGVuZ3RoO2ErKyluLnB1c2gobChyLnBhcnRzW2FdLG8pKTtoW3IuaWRdPXtpZDpyLmlkLHJlZnM6MSxwYXJ0czpufX19fWZ1bmN0aW9uIGkoZSl7Zm9yKHZhciBvPVtdLHQ9e30scj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgaT1lW3JdLGE9aVswXSxuPWlbMV0scz1pWzJdLGw9aVszXSxjPXtjc3M6bixtZWRpYTpzLHNvdXJjZU1hcDpsfTt0W2FdP3RbYV0ucGFydHMucHVzaChjKTpvLnB1c2godFthXT17aWQ6YSxwYXJ0czpbY119KX1yZXR1cm4gb31mdW5jdGlvbiBhKGUsbyl7dmFyIHQ9cCgpLHI9Z1tnLmxlbmd0aC0xXTtpZihcInRvcFwiPT09ZS5pbnNlcnRBdClyP3IubmV4dFNpYmxpbmc/dC5pbnNlcnRCZWZvcmUobyxyLm5leHRTaWJsaW5nKTp0LmFwcGVuZENoaWxkKG8pOnQuaW5zZXJ0QmVmb3JlKG8sdC5maXJzdENoaWxkKSxnLnB1c2gobyk7ZWxzZXtpZihcImJvdHRvbVwiIT09ZS5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7dC5hcHBlbmRDaGlsZChvKX19ZnVuY3Rpb24gbihlKXtlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk7dmFyIG89Zy5pbmRleE9mKGUpO28+PTAmJmcuc3BsaWNlKG8sMSl9ZnVuY3Rpb24gcyhlKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIG8udHlwZT1cInRleHQvY3NzXCIsYShlLG8pLG99ZnVuY3Rpb24gbChlLG8pe3ZhciB0LHIsaTtpZihvLnNpbmdsZXRvbil7dmFyIGE9disrO3Q9X3x8KF89cyhvKSkscj1jLmJpbmQobnVsbCx0LGEsITEpLGk9Yy5iaW5kKG51bGwsdCxhLCEwKX1lbHNlIHQ9cyhvKSxyPXUuYmluZChudWxsLHQpLGk9ZnVuY3Rpb24oKXtuKHQpfTtyZXR1cm4gcihlKSxmdW5jdGlvbihvKXtpZihvKXtpZihvLmNzcz09PWUuY3NzJiZvLm1lZGlhPT09ZS5tZWRpYSYmby5zb3VyY2VNYXA9PT1lLnNvdXJjZU1hcClyZXR1cm47cihlPW8pfWVsc2UgaSgpfX1mdW5jdGlvbiBjKGUsbyx0LHIpe3ZhciBpPXQ/XCJcIjpyLmNzcztpZihlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9YihvLGkpO2Vsc2V7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaSksbj1lLmNoaWxkTm9kZXM7bltvXSYmZS5yZW1vdmVDaGlsZChuW29dKSxuLmxlbmd0aD9lLmluc2VydEJlZm9yZShhLG5bb10pOmUuYXBwZW5kQ2hpbGQoYSl9fWZ1bmN0aW9uIHUoZSxvKXt2YXIgdD1vLmNzcyxyPW8ubWVkaWEsaT1vLnNvdXJjZU1hcDtpZihyJiZlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsciksaSYmKHQrPVwiXFxuLyojIHNvdXJjZVVSTD1cIitpLnNvdXJjZXNbMF0rXCIgKi9cIix0Kz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoaSkpKSkrXCIgKi9cIiksZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PXQ7ZWxzZXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpfX12YXIgaD17fSxkPWZ1bmN0aW9uKGUpe3ZhciBvO3JldHVybiBmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBvJiYobz1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksb319LGY9ZChmdW5jdGlvbigpe3JldHVybi9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpfSkscD1kKGZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXX0pLF89bnVsbCx2PTAsZz1bXTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxvKXtvPW98fHt9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBvLnNpbmdsZXRvbiYmKG8uc2luZ2xldG9uPWYoKSksXCJ1bmRlZmluZWRcIj09dHlwZW9mIG8uaW5zZXJ0QXQmJihvLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciB0PWkoZSk7cmV0dXJuIHIodCxvKSxmdW5jdGlvbihlKXtmb3IodmFyIGE9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcz10W25dLGw9aFtzLmlkXTtsLnJlZnMtLSxhLnB1c2gobCl9aWYoZSl7dmFyIGM9aShlKTtyKGMsbyl9Zm9yKHZhciBuPTA7bjxhLmxlbmd0aDtuKyspe3ZhciBsPWFbbl07aWYoMD09PWwucmVmcyl7Zm9yKHZhciB1PTA7dTxsLnBhcnRzLmxlbmd0aDt1KyspbC5wYXJ0c1t1XSgpO2RlbGV0ZSBoW2wuaWRdfX19fTt2YXIgYj1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBmdW5jdGlvbihvLHQpe3JldHVybiBlW29dPXQsZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ZnVuY3Rpb24gaShlLG8pe2UuYSYmZS5hPjEmJihlLmE9MSk7dmFyIHQ9ZS5oZXg/KDAsbltcImRlZmF1bHRcIl0pKGUuaGV4KTooMCxuW1wiZGVmYXVsdFwiXSkoZSkscj10LnRvSHNsKCksaT10LnRvSHN2KCk7cmV0dXJuIDA9PT1yLnMmJihyLmg9ZS5ofHxvfHwwLGkuaD1lLmh8fG98fDApLHtoc2w6cixoZXg6dC50b0hleFN0cmluZygpLnRvVXBwZXJDYXNlKCkscmdiYTp0LnRvUmdiKCksaHN2Omksb2xkSHVlOmUuaHx8b3x8ci5oLHNvdXJjZTplLnNvdXJjZSxhOmUuYX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzNiksbj1yKGEpO29bXCJkZWZhdWx0XCJdPXtwcm9wczpbXCJ2YWx1ZVwiXSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3ZhbDppKHRoaXMudmFsdWUpfX0sY29tcHV0ZWQ6e2NvbG9yczp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsfSxzZXQ6ZnVuY3Rpb24oZSl7dGhpcy52YWw9ZSx0aGlzLiRlbWl0KFwiY2hhbmdlLWNvbG9yXCIsZSl9fX0sd2F0Y2g6e3ZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMudmFsPWkoZSl9fSxjcmVhdGVkOmZ1bmN0aW9uKCl7fSxtZXRob2RzOntjb2xvckNoYW5nZTpmdW5jdGlvbihlLG8pe3RoaXMuY29sb3JzPWkoZSxvfHx0aGlzLm9sZEh1ZSksdGhpcy5vbGRIdWU9dGhpcy5jb2xvcnMuaHNsLmh9LGlzVmFsaWRIZXg6ZnVuY3Rpb24oZSl7cmV0dXJuKDAsbltcImRlZmF1bHRcIl0pKGUpLmlzVmFsaWQoKX0sc2ltcGxlQ2hlY2tGb3JWYWxpZENvbG9yOmZ1bmN0aW9uKGUpe2Zvcih2YXIgbz1bXCJyXCIsXCJnXCIsXCJiXCIsXCJhXCIsXCJoXCIsXCJzXCIsXCJhXCIsXCJ2XCJdLHQ9MCxyPTAsaT0wO2k8by5sZW5ndGg7aSsrKXt2YXIgYT1vW2ldO2VbYV0mJih0KyssaXNOYU4oZVthXSl8fHIrKyl9cmV0dXJuIHQ9PT1yP2U6dm9pZCAwfX19fSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDU3KSxyPXQoMTgpO3ZhciBhPXQoNDUpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDU4KSxyPXQoMTkpO3ZhciBhPXQoNDYpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDY2KSxyPXQoMTYpO3ZhciBhPXQoNTQpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDU5KSxyPXQoMjApO3ZhciBhPXQoNDcpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDY3KSxyPXQoMTcpO3ZhciBhPXQoNTUpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXQoMyksYT1yKGkpLG49dCg0KSxzPXIobiksbD10KDcpLGM9cihsKSx1PXQoNSksaD1yKHUpLGQ9dCg2KSxmPXIoZCk7b1tcImRlZmF1bHRcIl09e25hbWU6XCJDaHJvbWVcIixtaXhpbnM6W2FbXCJkZWZhdWx0XCJdXSxwcm9wczp7fSxjb21wb25lbnRzOntzYXR1cmF0aW9uOmNbXCJkZWZhdWx0XCJdLGh1ZTpoW1wiZGVmYXVsdFwiXSxhbHBoYTpmW1wiZGVmYXVsdFwiXSxcImVkLWluXCI6c1tcImRlZmF1bHRcIl19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57ZmllbGRzOltcImhleFwiLFwicmdiYVwiLFwiaHNsYVwiXSxmaWVsZHNJbmRleDowLGhpZ2hsaWdodDohMX19LGNvbXB1dGVkOnthY3RpdmVDb2xvcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMuY29sb3JzLnJnYmE7cmV0dXJuXCJyZ2JhKFwiK1tlLnIsZS5nLGUuYixlLmFdLmpvaW4oXCIsXCIpK1wiKVwifX0sbWV0aG9kczp7aGFuZGxlUHJlc2V0OmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2Uoe2hleDplLHNvdXJjZTpcImhleFwifSl9LGNoaWxkQ2hhbmdlOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2UoZSl9LGlucHV0Q2hhbmdlOmZ1bmN0aW9uKGUpe2UmJihlLmhleD90aGlzLmlzVmFsaWRIZXgoZS5oZXgpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZS5oZXgsc291cmNlOlwiaGV4XCJ9KTooZS5yfHxlLmd8fGUuYnx8ZS5hKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9LHRvZ2dsZVZpZXdzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmllbGRzSW5kZXg+PTI/dm9pZCh0aGlzLmZpZWxkc0luZGV4PTApOnZvaWQgdGhpcy5maWVsZHNJbmRleCsrfSxzaG93SGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dGhpcy5oaWdobGlnaHQ9ITB9LGhpZGVIaWdobGlnaHQ6ZnVuY3Rpb24oKXt0aGlzLmhpZ2hsaWdodD0hMX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT10KDMpLGE9cihpKSxuPXQoNCkscz1yKG4pLGw9W1wiIzRENEQ0RFwiLFwiIzk5OTk5OVwiLFwiI0ZGRkZGRlwiLFwiI0Y0NEUzQlwiLFwiI0ZFOTIwMFwiLFwiI0ZDREMwMFwiLFwiI0RCREYwMFwiLFwiI0E0REQwMFwiLFwiIzY4Q0NDQVwiLFwiIzczRDhGRlwiLFwiI0FFQTFGRlwiLFwiI0ZEQTFGRlwiLFwiIzMzMzMzM1wiLFwiIzgwODA4MFwiLFwiI0NDQ0NDQ1wiLFwiI0QzMzExNVwiLFwiI0UyNzMwMFwiLFwiI0ZDQzQwMFwiLFwiI0IwQkMwMFwiLFwiIzY4QkMwMFwiLFwiIzE2QTVBNVwiLFwiIzAwOUNFMFwiLFwiIzdCNjRGRlwiLFwiI0ZBMjhGRlwiLFwiIzAwMDAwMFwiLFwiIzY2NjY2NlwiLFwiI0IzQjNCM1wiLFwiIzlGMDUwMFwiLFwiI0M0NTEwMFwiLFwiI0ZCOUUwMFwiLFwiIzgwODkwMFwiLFwiIzE5NEQzM1wiLFwiIzBDNzk3RFwiLFwiIzAwNjJCMVwiLFwiIzY1MzI5NFwiLFwiI0FCMTQ5RVwiXTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkNvbXBhY3RcIixtaXhpbnM6W2FbXCJkZWZhdWx0XCJdXSxwcm9wczp7fSxjb21wb25lbnRzOntcImVkLWluXCI6c1tcImRlZmF1bHRcIl19LGNvbXB1dGVkOntwaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29sb3JzLmhleH19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57ZGVmYXVsdENvbG9yczpsfX0sbWV0aG9kczp7aGFuZGxlckNsaWNrOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2Uoe2hleDplLHNvdXJjZTpcImhleFwifSl9LG9uQ2hhbmdlOmZ1bmN0aW9uKGUpe2UmJihlLmhleD90aGlzLmlzVmFsaWRIZXgoZS5oZXgpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZS5oZXgsc291cmNlOlwiaGV4XCJ9KTooZS5yfHxlLmd8fGUuYikmJnRoaXMuY29sb3JDaGFuZ2Uoe3I6ZS5yfHx0aGlzLmNvbG9ycy5yZ2JhLnIsZzplLmd8fHRoaXMuY29sb3JzLnJnYmEuZyxiOmUuYnx8dGhpcy5jb2xvcnMucmdiYS5iLGE6ZS5hfHx0aGlzLmNvbG9ycy5yZ2JhLmEsc291cmNlOlwicmdiYVwifSkpfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXQoNCksYT1yKGkpLG49dCgzKSxzPXIobik7b1tcImRlZmF1bHRcIl09e25hbWU6XCJNYXRlcmlhbFwiLG1peGluczpbc1tcImRlZmF1bHRcIl1dLGNvbXBvbmVudHM6e1wiZWQtaW5cIjphW1wiZGVmYXVsdFwiXX0sbWV0aG9kczp7b25DaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5iKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9dCgzKSxhPXIoaSksbj10KDQpLHM9cihuKSxsPXQoNyksYz1yKGwpLHU9dCg1KSxoPXIodSksZD10KDYpLGY9cihkKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlBob3Rvc2hvcFwiLG1peGluczpbYVtcImRlZmF1bHRcIl1dLHByb3BzOntoZWFkOnt0eXBlOlN0cmluZyxcImRlZmF1bHRcIjpcIkNvbG9yIFBpY2tlclwifX0sY29tcG9uZW50czp7c2F0dXJhdGlvbjpjW1wiZGVmYXVsdFwiXSxodWU6aFtcImRlZmF1bHRcIl0sYWxwaGE6ZltcImRlZmF1bHRcIl0sXCJlZC1pblwiOnNbXCJkZWZhdWx0XCJdfSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnRDb2xvcjpcIiNGRkZcIn19LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmN1cnJlbnRDb2xvcj10aGlzLmNvbG9ycy5oZXh9LG1ldGhvZHM6e2NoaWxkQ2hhbmdlOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2UoZSl9LGlucHV0Q2hhbmdlOmZ1bmN0aW9uKGUpe2UmJihlW1wiI1wiXT90aGlzLmlzVmFsaWRIZXgoZVtcIiNcIl0pJiZ0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZVtcIiNcIl0sc291cmNlOlwiaGV4XCJ9KTooZS5yfHxlLmd8fGUuYnx8ZS5hKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9LGhhbmRsZUFjY2VwdDpmdW5jdGlvbigpe3RoaXMuJGRpc3BhdGNoKFwib2tcIil9LGhhbmRsZUNhbmNlbDpmdW5jdGlvbigpe3RoaXMuJGRpc3BhdGNoKFwiY2FuY2VsXCIpfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXQoMyksYT1yKGkpLG49dCg0KSxzPXIobiksbD10KDcpLGM9cihsKSx1PXQoNSksaD1yKHUpLGQ9dCg2KSxmPXIoZCkscD1bXCIjRDAwMjFCXCIsXCIjRjVBNjIzXCIsXCIjRjhFNzFDXCIsXCIjOEI1NzJBXCIsXCIjN0VEMzIxXCIsXCIjNDE3NTA1XCIsXCIjQkQxMEUwXCIsXCIjOTAxM0ZFXCIsXCIjNEE5MEUyXCIsXCIjNTBFM0MyXCIsXCIjQjhFOTg2XCIsXCIjMDAwMDAwXCIsXCIjNEE0QTRBXCIsXCIjOUI5QjlCXCIsXCIjRkZGRkZGXCJdO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiU2tldGNoXCIsbWl4aW5zOlthW1wiZGVmYXVsdFwiXV0sY29tcG9uZW50czp7c2F0dXJhdGlvbjpjW1wiZGVmYXVsdFwiXSxodWU6aFtcImRlZmF1bHRcIl0sYWxwaGE6ZltcImRlZmF1bHRcIl0sXCJlZC1pblwiOnNbXCJkZWZhdWx0XCJdfSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3ByZXNldENvbG9yczpwfX0sY29tcHV0ZWQ6e2FjdGl2ZUNvbG9yOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb2xvcnMucmdiYTtyZXR1cm5cInJnYmEoXCIrW2UucixlLmcsZS5iLGUuYV0uam9pbihcIixcIikrXCIpXCJ9fSxtZXRob2RzOntoYW5kbGVQcmVzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX0sY2hpbGRDaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZShlKX0saW5wdXRDaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5ifHxlLmEpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT10KDMpLGE9cihpKSxuPXQoNSkscz1yKG4pO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiU2xpZGVyXCIsbWl4aW5zOlthW1wiZGVmYXVsdFwiXV0scHJvcHM6e2RpcmVjdGlvbjpTdHJpbmd9LGNvbXBvbmVudHM6e2h1ZTpzW1wiZGVmYXVsdFwiXX0sY29tcHV0ZWQ6e2FjdGl2ZU9mZnNldDpmdW5jdGlvbigpe3JldHVybiBNYXRoLnJvdW5kKDEwMCp0aGlzLmNvbG9ycy5oc2wucykvMTAwPT09LjU/TWF0aC5yb3VuZCgxMDAqdGhpcy5jb2xvcnMuaHNsLmwpLzEwMDowfX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntzd2F0Y2hlczpbXCIuODBcIixcIi42NVwiLFwiLjUwXCIsXCIuMzVcIixcIi4yMFwiXX19LG1ldGhvZHM6e2h1ZUNoYW5nZTpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKGUpfSxoYW5kbGVTd0NsaWNrOmZ1bmN0aW9uKGUsbyl7dGhpcy5jb2xvckNoYW5nZSh7aDp0aGlzLmNvbG9ycy5oc2wuaCxzOi41LGw6byxzb3VyY2U6XCJoc2xcIn0pfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXQoMzUpLGE9cihpKSxuPXQoMykscz1yKG4pLGw9W1wicmVkXCIsXCJwaW5rXCIsXCJwdXJwbGVcIixcImRlZXBQdXJwbGVcIixcImluZGlnb1wiLFwiYmx1ZVwiLFwibGlnaHRCbHVlXCIsXCJjeWFuXCIsXCJ0ZWFsXCIsXCJncmVlblwiLFwibGlnaHRHcmVlblwiLFwibGltZVwiLFwieWVsbG93XCIsXCJhbWJlclwiLFwib3JhbmdlXCIsXCJkZWVwT3JhbmdlXCIsXCJicm93blwiLFwiYmx1ZUdyZXlcIl0sYz1bXCI5MDBcIixcIjcwMFwiLFwiNTAwXCIsXCIzMDBcIixcIjEwMFwiXSx1PWZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIGwuZm9yRWFjaChmdW5jdGlvbihvKXt2YXIgdD1bXTtjLmZvckVhY2goZnVuY3Rpb24oZSl7dC5wdXNoKGFbXCJkZWZhdWx0XCJdW29dW2VdLnRvVXBwZXJDYXNlKCkpfSksZS5wdXNoKHQpfSksZX0oKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlN3YXRjaGVzXCIsbWl4aW5zOltzW1wiZGVmYXVsdFwiXV0sY29tcHV0ZWQ6e3BpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2xvcnMuaGV4fX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntkZWZhdWx0Q29sb3JzOnV9fSxtZXRob2RzOntoYW5kbGVyQ2xpY2s6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT10KDgpLGE9cihpKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkFscGhhXCIscHJvcHM6e3ZhbHVlOk9iamVjdCxvbkNoYW5nZTpGdW5jdGlvbn0sY29tcG9uZW50czp7Y2hlY2tib2FyZDphW1wiZGVmYXVsdFwiXX0sY29tcHV0ZWQ6e2NvbG9yczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxncmFkaWVudENvbG9yOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb2xvcnMucmdiYSxvPVtlLnIsZS5nLGUuYl0uam9pbihcIixcIik7cmV0dXJuXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoXCIrbytcIiwgMCkgMCUsIHJnYmEoXCIrbytcIiwgMSkgMTAwJSlcIn19LG1ldGhvZHM6e2hhbmRsZUNoYW5nZTpmdW5jdGlvbihlLG8peyFvJiZlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQscj10aGlzLiRyZWZzLmNvbnRhaW5lcixpPXIuY2xpZW50V2lkdGgsYT0oZS5wYWdlWHx8ZS50b3VjaGVzWzBdLnBhZ2VYKS0oci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldCk7dD0wPmE/MDphPmk/MTpNYXRoLnJvdW5kKDEwMCphL2kpLzEwMCx0aGlzLmNvbG9ycy5hIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnRoaXMuY29sb3JzLmhzbC5oLHM6dGhpcy5jb2xvcnMuaHNsLnMsbDp0aGlzLmNvbG9ycy5oc2wubCxhOnQsc291cmNlOlwicmdiYVwifSl9LGhhbmRsZU1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUNoYW5nZShlLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfSxoYW5kbGVNb3VzZVVwOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmRFdmVudExpc3RlbmVycygpfSx1bmJpbmRFdmVudExpc3RlbmVyczpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5oYW5kbGVDaGFuZ2UpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuaGFuZGxlTW91c2VVcCl9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlLG8sdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50KXJldHVybiBudWxsO3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7ci53aWR0aD1yLmhlaWdodD0yKnQ7dmFyIGk9ci5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGk/KGkuZmlsbFN0eWxlPWUsaS5maWxsUmVjdCgwLDAsci53aWR0aCxyLmhlaWdodCksaS5maWxsU3R5bGU9byxpLmZpbGxSZWN0KDAsMCx0LHQpLGkudHJhbnNsYXRlKHQsdCksaS5maWxsUmVjdCgwLDAsdCx0KSxyLnRvRGF0YVVSTCgpKTpudWxsfWZ1bmN0aW9uIHIoZSxvLHIpe3ZhciBhPWUrXCIsXCIrbytcIixcIityO2lmKGlbYV0pcmV0dXJuIGlbYV07dmFyIG49dChlLG8scik7cmV0dXJuIGlbYV09bixufU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXt9O29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiQ2hlY2tib2FyZFwiLHByb3BzOntzaXplOnt0eXBlOltOdW1iZXIsU3RyaW5nXSxcImRlZmF1bHRcIjo4fSx3aGl0ZTp7dHlwZTpTdHJpbmcsXCJkZWZhdWx0XCI6XCIjZmZmXCJ9LGdyZXk6e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiI2U2ZTZlNlwifX0sY29tcHV0ZWQ6e2JnU3R5bGU6ZnVuY3Rpb24oKXtyZXR1cm5cInVybChcIityKHRoaXMud2hpdGUsdGhpcy5ncmV5LHRoaXMuc2l6ZSkrXCIpIGNlbnRlciBsZWZ0XCJ9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksb1tcImRlZmF1bHRcIl09e25hbWU6XCJlZGl0YWJsZUlucHV0XCIscHJvcHM6e2xhYmVsOlN0cmluZyx2YWx1ZTpbU3RyaW5nLE51bWJlcl0sbWF4Ok51bWJlcixhcnJvd09mZnNldDp7dHlwZTpOdW1iZXIsXCJkZWZhdWx0XCI6MX19LGNvbXB1dGVkOnt2YWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX19LGZpbHRlcnM6e21heEZpbHRlcjp7cmVhZDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5tYXgmJmU+dGhpcy5tYXg/dGhpcy5tYXg6ZX0sd3JpdGU6ZnVuY3Rpb24oZSxvKXtyZXR1cm4gZX19fSxtZXRob2RzOnt1cGRhdGU6ZnVuY3Rpb24oZSl7dGhpcy5oYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSxoYW5kbGVDaGFuZ2U6ZnVuY3Rpb24oZSl7dmFyIG89e307b1t0aGlzLmxhYmVsXT1lLHRoaXMuJGVtaXQoXCJvbi1jaGFuZ2VcIixvKX0saGFuZGxlQmx1cjpmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0saGFuZGxlS2V5RG93bjpmdW5jdGlvbihlKXt2YXIgbz10aGlzLnZhbCx0PU51bWJlcihvKTtpZih0KXt2YXIgcj10aGlzLmFycm93T2Zmc2V0fHwxOzM4PT09ZS5rZXlDb2RlJiYobz10K3IsdGhpcy5oYW5kbGVDaGFuZ2UobyksZS5wcmV2ZW50RGVmYXVsdCgpKSw0MD09PWUua2V5Q29kZSYmKG89dC1yLHRoaXMuaGFuZGxlQ2hhbmdlKG8pLGUucHJldmVudERlZmF1bHQoKSl9fSxoYW5kbGVEcmFnOmZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSxoYW5kbGVNb3VzZURvd246ZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksb1tcImRlZmF1bHRcIl09e25hbWU6XCJIdWVcIixwcm9wczp7dmFsdWU6T2JqZWN0LGRpcmVjdGlvbjp7dHlwZTpTdHJpbmcsXCJkZWZhdWx0XCI6XCJob3Jpem9udGFsXCJ9fSxjb21wdXRlZDp7Y29sb3JzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LGRpcmVjdGlvbkNsYXNzOmZ1bmN0aW9uKCl7cmV0dXJue1widnVlLWNvbG9yX19jLWh1ZS0taG9yaXpvbnRhbFwiOlwiaG9yaXpvbnRhbFwiPT09dGhpcy5kaXJlY3Rpb24sXCJ2dWUtY29sb3JfX2MtaHVlLS12ZXJ0aWNhbFwiOlwidmVydGljYWxcIj09PXRoaXMuZGlyZWN0aW9ufX0scG9pbnRlclRvcDpmdW5jdGlvbigpe3JldHVyblwidmVydGljYWxcIj09PXRoaXMuZGlyZWN0aW9uPy0oMTAwKnRoaXMuY29sb3JzLmhzbC5oLzM2MCkrMTAwK1wiJVwiOjB9LHBvaW50ZXJMZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuXCJ2ZXJ0aWNhbFwiPT09dGhpcy5kaXJlY3Rpb24/MDoxMDAqdGhpcy5jb2xvcnMuaHNsLmgvMzYwK1wiJVwifX0sbWV0aG9kczp7aGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUsbyl7IW8mJmUucHJldmVudERlZmF1bHQoKTt2YXIgdCxyLGk9dGhpcy4kcmVmcy5jb250YWluZXIsYT1pLmNsaWVudFdpZHRoLG49aS5jbGllbnRIZWlnaHQscz0oZS5wYWdlWHx8ZS50b3VjaGVzWzBdLnBhZ2VYKS0oaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldCksbD0oZS5wYWdlWXx8ZS50b3VjaGVzWzBdLnBhZ2VZKS0oaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Ard2luZG93LnBhZ2VZT2Zmc2V0KTtcInZlcnRpY2FsXCI9PT10aGlzLmRpcmVjdGlvbj8oMD5sP3Q9MzU5Omw+bj90PTA6KHI9LSgxMDAqbC9uKSsxMDAsdD0zNjAqci8xMDApLHRoaXMuY29sb3JzLmhzbC5oIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnQsczp0aGlzLmNvbG9ycy5oc2wucyxsOnRoaXMuY29sb3JzLmhzbC5sLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwiaHNsXCJ9KSk6KDA+cz90PTA6cz5hP3Q9MzU5OihyPTEwMCpzL2EsdD0zNjAqci8xMDApLHRoaXMuY29sb3JzLmhzbC5oIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnQsczp0aGlzLmNvbG9ycy5oc2wucyxsOnRoaXMuY29sb3JzLmhzbC5sLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwiaHNsXCJ9KSl9LGhhbmRsZU1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUNoYW5nZShlLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfSxoYW5kbGVNb3VzZVVwOmZ1bmN0aW9uKGUpe3RoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMoKX0sdW5iaW5kRXZlbnRMaXN0ZW5lcnM6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXQoMzMpLGE9cihpKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlNhdHVyYXRpb25cIixwcm9wczp7dmFsdWU6T2JqZWN0fSxjb21wdXRlZDp7Y29sb3JzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LGJnQ29sb3I6ZnVuY3Rpb24oKXtyZXR1cm5cImhzbChcIit0aGlzLmNvbG9ycy5oc2wuaCtcIiwxMDAlLCA1MCUpXCJ9LHBvaW50ZXJUb3A6ZnVuY3Rpb24oKXtyZXR1cm4tKDEwMCp0aGlzLmNvbG9ycy5oc3YudikrMTAwK1wiJVwifSxwb2ludGVyTGVmdDpmdW5jdGlvbigpe3JldHVybiAxMDAqdGhpcy5jb2xvcnMuaHN2LnMrXCIlXCJ9fSxtZXRob2RzOnt0aHJvdHRsZTooMCxhW1wiZGVmYXVsdFwiXSkoZnVuY3Rpb24oZSxvKXtlKG8pfSw1MCksaGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUsbyl7IW8mJmUucHJldmVudERlZmF1bHQoKTt2YXIgdD10aGlzLiRyZWZzLmNvbnRhaW5lcixyPXQuY2xpZW50V2lkdGgsaT10LmNsaWVudEhlaWdodCxhPShlLnBhZ2VYfHxlLnRvdWNoZXNbMF0ucGFnZVgpLSh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQrd2luZG93LnBhZ2VYT2Zmc2V0KSxuPShlLnBhZ2VZfHxlLnRvdWNoZXNbMF0ucGFnZVkpLSh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQpOzA+YT9hPTA6YT5yP2E9cjowPm4/bj0wOm4+aSYmKG49aSk7dmFyIHM9MTAwKmEvcixsPS0oMTAwKm4vaSkrMTAwO3RoaXMudGhyb3R0bGUodGhpcy5vbkNoYW5nZSx7aDp0aGlzLmNvbG9ycy5oc2wuaCxzOnMsdjpsLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwicmdiXCJ9KX0sb25DaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLGUpfSxoYW5kbGVNb3VzZURvd246ZnVuY3Rpb24oZSl7dGhpcy5oYW5kbGVDaGFuZ2UoZSwhMCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX0saGFuZGxlTW91c2VVcDpmdW5jdGlvbihlKXt0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzKCl9LHVuYmluZEV2ZW50TGlzdGVuZXJzOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX19fX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19tYXRlcmlhbHt3aWR0aDo5OHB4O2hlaWdodDo5OHB4O3BhZGRpbmc6MTZweDtmb250LWZhbWlseTpSb2JvdG87cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEyKSwwIDJweCA1cHggcmdiYSgwLDAsMCwuMTYpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0udnVlLWNvbG9yX19tYXRlcmlhbCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7d2lkdGg6MTAwJTttYXJnaW4tdG9wOjEycHg7Zm9udC1zaXplOjE1cHg7Y29sb3I6IzMzMztoZWlnaHQ6MzBweH0udnVlLWNvbG9yX19tYXRlcmlhbCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiM5OTk7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX0udnVlLWNvbG9yX19tYXRlcmlhbF9faGV4e2JvcmRlci1ib3R0b20td2lkdGg6MnB4O2JvcmRlci1ib3R0b20tc3R5bGU6c29saWR9LnZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3NwbGl0e2Rpc3BsYXk6ZmxleDttYXJnaW4tcmlnaHQ6LTEwcHg7cGFkZGluZy10b3A6MTFweH0udnVlLWNvbG9yX19tYXRlcmlhbF9fdGhpcmR7ZmxleDoxO3BhZGRpbmctcmlnaHQ6MTBweH1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXR7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3BhZGRpbmc6MDtib3JkZXI6MDtvdXRsaW5lOm5vbmV9LnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2MtaHVle3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2JvcmRlci1yYWRpdXM6MnB4fS52dWUtY29sb3JfX2MtaHVlLS1ob3Jpem9udGFse2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLHJlZCAwLCNmZjAgMTclLCMwZjAgMzMlLCMwZmYgNTAlLCMwMGYgNjclLCNmMGYgODMlLHJlZCl9LnZ1ZS1jb2xvcl9fYy1odWUtLXZlcnRpY2Fse2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDBkZWcscmVkIDAsI2ZmMCAxNyUsIzBmMCAzMyUsIzBmZiA1MCUsIzAwZiA2NyUsI2YwZiA4MyUscmVkKX0udnVlLWNvbG9yX19jLWh1ZV9fY29udGFpbmVye2N1cnNvcjpwb2ludGVyO21hcmdpbjowIDJweDtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJX0udnVlLWNvbG9yX19jLWh1ZV9fcG9pbnRlcnt6LWluZGV4OjI7cG9zaXRpb246YWJzb2x1dGV9LnZ1ZS1jb2xvcl9fYy1odWVfX3BpY2tlcntjdXJzb3I6cG9pbnRlcjttYXJnaW4tdG9wOjFweDt3aWR0aDo0cHg7Ym9yZGVyLXJhZGl1czoxcHg7aGVpZ2h0OjhweDtib3gtc2hhZG93OjAgMCAycHggcmdiYSgwLDAsMCwuNik7YmFja2dyb3VuZDojZmZmO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0ycHgpfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19zYXR1cmF0aW9uLC52dWUtY29sb3JfX3NhdHVyYXRpb24tLWJsYWNrLC52dWUtY29sb3JfX3NhdHVyYXRpb24tLXdoaXRle2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowfS52dWUtY29sb3JfX3NhdHVyYXRpb24tLXdoaXRle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCNmZmYsaHNsYSgwLDAlLDEwMCUsMCkpfS52dWUtY29sb3JfX3NhdHVyYXRpb24tLWJsYWNre2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDBkZWcsIzAwMCx0cmFuc3BhcmVudCl9LnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tcG9pbnRlcntjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLWNvbG9yX19zYXR1cmF0aW9uLS1jaXJjbGV7Y3Vyc29yOmhlYWQ7d2lkdGg6NHB4O2hlaWdodDo0cHg7Ym94LXNoYWRvdzowIDAgMCAxLjVweCAjZmZmLGluc2V0IDAgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpLDAgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjQpO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTJweCwtMnB4KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjQxMHB4fS52dWUtY29sb3JfX3NsaWRlcl9faHVlLXdhcnB7aGVpZ2h0OjEycHg7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcl9fc2xpZGVyX19odWUtd2FycCAudnVlLWNvbG9yX19jLWh1ZV9fcGlja2Vye3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7Ym9yZGVyLXJhZGl1czo2cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtN3B4LC0ycHgpO2JhY2tncm91bmQtY29sb3I6I2Y4ZjhmODtib3gtc2hhZG93OjAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjM3KX0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaGVze2Rpc3BsYXk6ZmxleDttYXJnaW4tdG9wOjIwcHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2h7bWFyZ2luLXJpZ2h0OjFweDtmbGV4OjE7d2lkdGg6MjAlfS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoxcHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2g6Zmlyc3QtY2hpbGQgLnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2Vye2JvcmRlci1yYWRpdXM6MnB4IDAgMCAycHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2g6bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaDpsYXN0LWNoaWxkIC52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlcntib3JkZXItcmFkaXVzOjAgMnB4IDJweCAwfS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlcntjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6MTJweH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaC1waWNrZXItLWFjdGl2ZXt0cmFuc2Zvcm06c2NhbGVZKDEuOCk7Ym9yZGVyLXJhZGl1czozLjZweC8ycHh9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2NvbXBhY3R7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo1cHg7d2lkdGg6MjQwcHg7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEyKSwwIDJweCA1cHggcmdiYSgwLDAsMCwuMTYpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0udnVlLWNvbG9yX19jb21wYWN0X19jb2xvcnN7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDttYXJnaW46MH0udnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVte2xpc3Qtc3R5bGU6bm9uZTt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjVweDttYXJnaW4tYm90dG9tOjVweDtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcn0udnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVtLS13aGl0ZXtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZGRkfS52dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yLWl0ZW0tLXdoaXRlIC52dWUtY29sb3JfX2NvbXBhY3RfX2RvdHtiYWNrZ3JvdW5kOiMwMDB9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fZG90e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHg7cmlnaHQ6NXB4O2JvdHRvbTo1cHg7bGVmdDo1cHg7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eToxO2JhY2tncm91bmQ6I2ZmZn0udnVlLWNvbG9yX19jb21wYWN0X19maWVsZHN7ZGlzcGxheTpmbGV4O3BhZGRpbmctYm90dG9tOjZweDtwYWRkaW5nLXJpZ2h0OjVweDtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yX19jb21wYWN0X19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3dpZHRoOjcwJTtwYWRkaW5nLWxlZnQ6MzAlO2JhY2tncm91bmQ6bm9uZTtmb250LXNpemU6MTJweDtjb2xvcjojMzMzO2hlaWdodDoxNnB4fS52dWUtY29sb3JfX2NvbXBhY3RfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjNweDtsZWZ0OjA7bGluZS1oZWlnaHQ6MTZweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjEycHg7Y29sb3I6Izk5OX0udnVlLWNvbG9yX19jb21wYWN0X19waWNrLWNvbG9ye3Bvc2l0aW9uOmFic29sdXRlO3RvcDo2cHg7bGVmdDo1cHg7aGVpZ2h0OjlweDt3aWR0aDo5cHh9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sLTN7ZmxleDoxfS52dWVfY29sb3JfX2NvbXBhY3RfX2NvbC1oZXh7ZmxleDoyfS52dWVfY29sb3JfX2NvbXBhY3RfX2NvbC1oZXggLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3dpZHRoOjgwJTtwYWRkaW5nLWxlZnQ6MjAlfS52dWVfY29sb3JfX2NvbXBhY3RfX2NvbC1oZXggLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse2Rpc3BsYXk6bm9uZX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLCcudnVlLWNvbG9yc19fcGhvdG9zaG9we2JhY2tncm91bmQ6I2RjZGNkYztib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgMCAwIDFweCByZ2JhKDAsMCwwLC4yNSksMCA4cHggMTZweCByZ2JhKDAsMCwwLC4xNSk7Ym94LXNpemluZzppbml0aWFsO3dpZHRoOjUxM3B4O2ZvbnQtZmFtaWx5OlJvYm90b30udnVlLWNvbG9yc19fcGhvdG9zaG9wX19oZWFke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjBmMCwjZDRkNGQ0KTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYjFiMWIxO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMCAwIGhzbGEoMCwwJSwxMDAlLC4yKSxpbnNldCAwIC0xcHggMCAwIHJnYmEoMCwwLDAsLjAyKTtoZWlnaHQ6MjNweDtsaW5lLWhlaWdodDoyNHB4O2JvcmRlci1yYWRpdXM6NHB4IDRweCAwIDA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzRkNGQ0ZDt0ZXh0LWFsaWduOmNlbnRlcn0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19ib2R5e3BhZGRpbmc6MTVweDtkaXNwbGF5OmZsZXh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fc2F0dXJhdGlvbi13cmFwe3dpZHRoOjI1NnB4O2hlaWdodDoyNTZweDtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXI6MnB4IHNvbGlkICNiM2IzYjM7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2YwZjBmMDtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fc2F0dXJhdGlvbi13cmFwIC52dWUtY29sb3JfX3NhdHVyYXRpb24tLWNpcmNsZXt3aWR0aDoxMnB4O2hlaWdodDoxMnB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoyNTZweDt3aWR0aDoxOXB4O21hcmdpbi1sZWZ0OjEwcHg7Ym9yZGVyOjJweCBzb2xpZCAjYjNiM2IzO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNmMGYwZjB9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXJ7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLWxlZnQsLnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggMCA1cHggOHB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNTU1fS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1sZWZ0OmFmdGVyLC52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1yaWdodDphZnRlcntjb250ZW50OlwiXCI7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjRweCAwIDRweCA2cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7cG9zaXRpb246YWJzb2x1dGU7dG9wOjFweDtsZWZ0OjFweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC04cHgsLTVweCl9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLWxlZnR7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMTNweCwtNHB4KX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tcmlnaHR7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyMHB4LC00cHgpIHJvdGF0ZSgxODBkZWcpfS52dWUtY29sb3JzX19waG90b3Nob3BfX2NvbnRyb2xze3dpZHRoOjE4MHB4O21hcmdpbi1sZWZ0OjEwcHg7ZGlzcGxheTpmbGV4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2FjdGlvbnN7bWFyZ2luLWxlZnQ6MjBweDtmbGV4OjF9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWMtYnRue2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZmZiwjZTZlNmU2KTtib3JkZXI6MXB4IHNvbGlkICM4Nzg3ODc7Ym9yZGVyLXJhZGl1czoycHg7aGVpZ2h0OjIwcHg7Ym94LXNoYWRvdzowIDFweCAwIDAgI2VhZWFlYTtmb250LXNpemU6MTRweDtjb2xvcjojMDAwO2xpbmUtaGVpZ2h0OjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMHB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdze3dpZHRoOjYwcHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3N3YXRjaGVze2JvcmRlcjoxcHggc29saWQgI2IzYjNiMztib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZjBmMGYwO21hcmdpbi1ib3R0b206MnB4O21hcmdpbi10b3A6MXB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19wci1jb2xvcntoZWlnaHQ6MzRweDtib3gtc2hhZG93Omluc2V0IDFweCAwIDAgIzAwMCxpbnNldCAtMXB4IDAgMCAjMDAwLGluc2V0IDAgMXB4IDAgIzAwMH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fbGFiZWx7Zm9udC1zaXplOjE0cHg7Y29sb3I6IzAwMDt0ZXh0LWFsaWduOmNlbnRlcn0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHN7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctYm90dG9tOjlweDt3aWR0aDo4MHB4O3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7bWFyZ2luLWxlZnQ6NDAlO3dpZHRoOjQwJTtoZWlnaHQ6MThweDtib3JkZXI6MXB4IHNvbGlkICM4ODg7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMSksMCAxcHggMCAwICNlY2VjZWM7bWFyZ2luLWJvdHRvbTo1cHg7Zm9udC1zaXplOjEzcHg7cGFkZGluZy1sZWZ0OjNweDttYXJnaW4tcmlnaHQ6MTBweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3RvcDowO2xlZnQ6MDt3aWR0aDozNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTNweDtoZWlnaHQ6MThweDtsaW5lLWhlaWdodDoyMnB4O3Bvc2l0aW9uOmFic29sdXRlfS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19fZGl2aWRlcntoZWlnaHQ6NXB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19faGV4IC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHttYXJnaW4tbGVmdDoyMCU7d2lkdGg6ODAlO2hlaWdodDoxOHB4O2JvcmRlcjoxcHggc29saWQgIzg4ODtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xKSwwIDFweCAwIDAgI2VjZWNlYzttYXJnaW4tYm90dG9tOjZweDtmb250LXNpemU6MTNweDtwYWRkaW5nLWxlZnQ6M3B4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19faGV4IC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjEzcHg7aGVpZ2h0OjE4cHg7bGluZS1oZWlnaHQ6MjJweH0nLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19zd2F0Y2hlc3t3aWR0aDozMjBweDtoZWlnaHQ6MjQwcHg7b3ZlcmZsb3cteTpzY3JvbGw7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JveC1zaGFkb3c6MCAycHggMTBweCByZ2JhKDAsMCwwLC4xMiksMCAycHggNXB4IHJnYmEoMCwwLDAsLjE2KX0udnVlLWNvbG9yX19zd2F0Y2hlc19fYm94e3BhZGRpbmc6MTZweCAwIDZweCAxNnB4O292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19zd2F0Y2hlc19fY29sb3ItZ3JvdXB7cGFkZGluZy1ib3R0b206MTBweDt3aWR0aDo0MHB4O2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjEwcHh9LnZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2NvbG9yLWl0e3dpZHRoOjQwcHg7aGVpZ2h0OjI0cHg7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDojODgwZTRmO21hcmdpbi1ib3R0b206MXB4O292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjJweCAycHggMCAwfS52dWUtY29sb3JfX3N3YXRjaGVzX19waWNre2ZpbGw6I2ZmZjttYXJnaW4tbGVmdDo4cHg7ZGlzcGxheTpibG9ja31cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fY2hyb21le2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMCAycHggcmdiYSgwLDAsMCwuMyksMCA0cHggOHB4IHJnYmEoMCwwLDAsLjMpO2JveC1zaXppbmc6aW5pdGlhbDt3aWR0aDoyMjVweDtmb250LWZhbWlseTpNZW5sbztiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnZ1ZS1jb2xvcl9fY2hyb21lX19jb250cm9sc3tkaXNwbGF5OmZsZXh9LnZ1ZS1jb2xvcl9fY2hyb21lX19jb2xvci13cmFwe3dpZHRoOjMycHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19hY3RpdmUtY29sb3J7bWFyZ2luLXRvcDo2cHg7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXItcmFkaXVzOjhweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJze2ZsZXg6MX0udnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1hbHBoYV9fZ3JhZGllbnQsLnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzIC52dWUtY29sb3JfX2MtaHVle2JvcmRlci1yYWRpdXM6MnB4fS52dWUtY29sb3JfX2Nocm9tZV9fc2xpZGVycyAudnVlLWNvbG9yX19jLWFscGhhX19waWNrZXIsLnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzIC52dWUtY29sb3JfX2MtaHVlX19waWNrZXJ7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtib3JkZXItcmFkaXVzOjZweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC02cHgsLTJweCk7YmFja2dyb3VuZC1jb2xvcjojZjhmOGY4O2JveC1zaGFkb3c6MCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMzcpfS52dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzLXdyYXB7cGFkZGluZy10b3A6MTZweDtkaXNwbGF5OmZsZXh9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHN7ZGlzcGxheTpmbGV4O21hcmdpbi1sZWZ0Oi02cHg7ZmxleDoxfS52dWUtY29sb3JfX2Nocm9tZV9fZmllbGR7cGFkZGluZy1sZWZ0OjZweDt3aWR0aDoxMDAlfS52dWUtY29sb3JfX2Nocm9tZV9fdG9nZ2xlLWJ0bnt3aWR0aDozMnB4O3RleHQtYWxpZ246cmlnaHQ7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcl9fY2hyb21lX19pY29ue21hcmdpbi1yaWdodDotNHB4O21hcmdpbi10b3A6MTJweDtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LnZ1ZS1jb2xvcl9fY2hyb21lX19pY29uLWhpZ2hsaWdodHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyOHB4O2JhY2tncm91bmQ6I2VlZTtib3JkZXItcmFkaXVzOjRweDt0b3A6MTBweDtsZWZ0OjEycHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19odWUtd3JhcHttYXJnaW4tYm90dG9tOjhweH0udnVlLWNvbG9yX19jaHJvbWVfX2FscGhhLXdyYXAsLnZ1ZS1jb2xvcl9fY2hyb21lX19odWUtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTBweH0udnVlLWNvbG9yX19jaHJvbWVfX2Nocm9tZS1ib2R5e3BhZGRpbmc6MTZweCAxNnB4IDEycHg7YmFja2dyb3VuZC1jb2xvcjojZmZmfS52dWUtY29sb3JfX2Nocm9tZV9fc2F0dXJhdGlvbi13cmFwe3dpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206NTUlO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MnB4IDJweCAwIDA7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JfX2Nocm9tZV9fc2F0dXJhdGlvbi13cmFwIC52dWUtY29sb3JfX3NhdHVyYXRpb24tLWNpcmNsZXt3aWR0aDoxMnB4O2hlaWdodDoxMnB4fS52dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHtmb250LXNpemU6MTFweDtjb2xvcjojMzMzO3dpZHRoOjEwMCU7Ym9yZGVyLXJyYWRpdXM6MnB4O2JvcmRlcjpub25lO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNkYWRhZGE7aGVpZ2h0OjIxcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTFweDtsaW5lLWhlaWdodDoxMXB4O2NvbG9yOiM5Njk2OTY7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjEycHh9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX3NrZXRjaHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyMDBweDtwYWRkaW5nOjEwcHggMTBweCAwO2JveC1zaXppbmc6aW5pdGlhbDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpLDAgOHB4IDE2cHggcmdiYSgwLDAsMCwuMTUpfS52dWUtY29sb3JfX3NrZXRjaF9fc2F0dXJhdGlvbi13cmFwe3dpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206NzUlO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19za2V0Y2hfX2NvbnRyb2xze2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yX19za2V0Y2hfX3NsaWRlcnN7cGFkZGluZzo0cHggMDtmbGV4OjF9LnZ1ZS1jb2xvcl9fc2tldGNoX19zbGlkZXJzIC52dWUtY29sb3JfX2MtYWxwaGFfX2dyYWRpZW50LC52dWUtY29sb3JfX3NrZXRjaF9fc2xpZGVycyAudnVlLWNvbG9yX19jLWh1ZXtib3JkZXItcmFkaXVzOjJweH0udnVlLWNvbG9yX19za2V0Y2hfX2h1ZS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4fS52dWUtY29sb3JfX3NrZXRjaF9fYWxwaGEtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTBweDttYXJnaW4tdG9wOjRweDtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fc2tldGNoX19jb2xvci13cmFwe3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWxlZnQ6NHB4O2JvcmRlci1yYWRpdXM6M3B4fS52dWUtY29sb3JfX3NrZXRjaF9fYWN0aXZlLWNvbG9ye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwwLDAsLjE1KSxpbnNldCAwIDAgNHB4IHJnYmEoMCwwLDAsLjI1KTt6LWluZGV4OjJ9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZHtkaXNwbGF5OmZsZXg7cGFkZGluZy10b3A6NHB4fS52dWUtY29sb3JfX3NrZXRjaF9fZmllbGQgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3dpZHRoOjgwJTtwYWRkaW5nOjRweCAxMCUgM3B4O2JvcmRlcjpub25lO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNjY2M7Zm9udC1zaXplOjExcHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTFweDtjb2xvcjojMjIyO3BhZGRpbmctdG9wOjNweDtwYWRkaW5nLWJvdHRvbTo0cHg7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGV7ZmxleDoxO3BhZGRpbmctbGVmdDo2cHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tZG91Ymxle2ZsZXg6Mn0udnVlLWNvbG9yX19za2V0Y2hfX3ByZXNldHN7bWFyZ2luLXJpZ2h0Oi0xMHB4O21hcmdpbi1sZWZ0Oi0xMHB4O3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctdG9wOjEwcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZX0udnVlLWNvbG9yX19za2V0Y2hfX3ByZXNldHMtY29sb3J7Ym9yZGVyLXJhZGl1czozcHg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDEwcHggMTBweCAwO3ZlcnRpY2FsLWFsaWduOnRvcDtjdXJzb3I6cG9pbnRlcjt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwwLDAsLjE1KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fYy1hbHBoYSwudnVlLWNvbG9yX19jLWFscGhhX19jaGVja2JvYXJkLXdyYXB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9LnZ1ZS1jb2xvcl9fYy1hbHBoYV9fY2hlY2tib2FyZC13cmFwe292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19jLWFscGhhX19ncmFkaWVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH0udnVlLWNvbG9yX19jLWFscGhhX19jb250YWluZXJ7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyO2hlaWdodDoxMDAlO21hcmdpbjowIDNweH0udnVlLWNvbG9yX19jLWFscGhhX19wb2ludGVye3otaW5kZXg6Mjtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLWNvbG9yX19jLWFscGhhX19waWNrZXJ7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6NHB4O2JvcmRlci1yYWRpdXM6MXB4O2hlaWdodDo4cHg7Ym94LXNoYWRvdzowIDAgMnB4IHJnYmEoMCwwLDAsLjYpO2JhY2tncm91bmQ6I2ZmZjttYXJnaW4tdG9wOjFweDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMnB4KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fYy1jaGVja2VyYm9hcmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7ZnVuY3Rpb24gcihlLG8sdCl7dmFyIHI9ITAscz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iobik7cmV0dXJuIGkodCkmJihyPVwibGVhZGluZ1wiaW4gdD8hIXQubGVhZGluZzpyLHM9XCJ0cmFpbGluZ1wiaW4gdD8hIXQudHJhaWxpbmc6cyksYShlLG8se2xlYWRpbmc6cixtYXhXYWl0Om8sdHJhaWxpbmc6c30pfWZ1bmN0aW9uIGkoZSl7dmFyIG89dHlwZW9mIGU7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09b3x8XCJmdW5jdGlvblwiPT1vKX12YXIgYT10KDM0KSxuPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiO2UuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8pe2Z1bmN0aW9uIHQoZSxvLHQpe2Z1bmN0aW9uIHIobyl7dmFyIHQ9XyxyPXY7cmV0dXJuIF89dj12b2lkIDAsaz1vLGI9ZS5hcHBseShyLHQpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuIGs9ZSxtPXNldFRpbWVvdXQodSxvKSxGP3IoZSk6Yn1mdW5jdGlvbiBuKGUpe3ZhciB0PWUteSxyPWUtayxpPW8tdDtyZXR1cm4gUj93KGksZy1yKTppfWZ1bmN0aW9uIGMoZSl7dmFyIHQ9ZS15LHI9ZS1rO3JldHVybiF5fHx0Pj1vfHwwPnR8fFImJnI+PWd9ZnVuY3Rpb24gdSgpe3ZhciBlPUMoKTtcbnJldHVybiBjKGUpP2goZSk6dm9pZChtPXNldFRpbWVvdXQodSxuKGUpKSl9ZnVuY3Rpb24gaChlKXtyZXR1cm4gY2xlYXJUaW1lb3V0KG0pLG09dm9pZCAwLEEmJl8/cihlKTooXz12PXZvaWQgMCxiKX1mdW5jdGlvbiBkKCl7dm9pZCAwIT09bSYmY2xlYXJUaW1lb3V0KG0pLHk9az0wLF89dj1tPXZvaWQgMH1mdW5jdGlvbiBmKCl7cmV0dXJuIHZvaWQgMD09PW0/YjpoKEMoKSl9ZnVuY3Rpb24gcCgpe3ZhciBlPUMoKSx0PWMoZSk7aWYoXz1hcmd1bWVudHMsdj10aGlzLHk9ZSx0KXtpZih2b2lkIDA9PT1tKXJldHVybiBhKHkpO2lmKFIpcmV0dXJuIGNsZWFyVGltZW91dChtKSxtPXNldFRpbWVvdXQodSxvKSxyKHkpfXJldHVybiB2b2lkIDA9PT1tJiYobT1zZXRUaW1lb3V0KHUsbykpLGJ9dmFyIF8sdixnLGIsbSx5PTAsaz0wLEY9ITEsUj0hMSxBPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihsKTtyZXR1cm4gbz1zKG8pfHwwLGkodCkmJihGPSEhdC5sZWFkaW5nLFI9XCJtYXhXYWl0XCJpbiB0LGc9Uj94KHModC5tYXhXYWl0KXx8MCxvKTpnLEE9XCJ0cmFpbGluZ1wiaW4gdD8hIXQudHJhaWxpbmc6QSkscC5jYW5jZWw9ZCxwLmZsdXNoPWYscH1mdW5jdGlvbiByKGUpe3ZhciBvPWkoZSk/bS5jYWxsKGUpOlwiXCI7cmV0dXJuIG89PXV8fG89PWh9ZnVuY3Rpb24gaShlKXt2YXIgbz10eXBlb2YgZTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT1vfHxcImZ1bmN0aW9uXCI9PW8pfWZ1bmN0aW9uIGEoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiBuKGUpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlfHxhKGUpJiZtLmNhbGwoZSk9PWR9ZnVuY3Rpb24gcyhlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihuKGUpKXJldHVybiBjO2lmKGkoZSkpe3ZhciBvPXIoZS52YWx1ZU9mKT9lLnZhbHVlT2YoKTplO2U9aShvKT9vK1wiXCI6b31pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShmLFwiXCIpO3ZhciB0PV8udGVzdChlKTtyZXR1cm4gdHx8di50ZXN0KGUpP2coZS5zbGljZSgyKSx0PzI6OCk6cC50ZXN0KGUpP2M6K2V9dmFyIGw9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsYz1OYU4sdT1cIltvYmplY3QgRnVuY3Rpb25dXCIsaD1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsZD1cIltvYmplY3QgU3ltYm9sXVwiLGY9L15cXHMrfFxccyskL2cscD0vXlstK10weFswLTlhLWZdKyQvaSxfPS9eMGJbMDFdKyQvaSx2PS9eMG9bMC03XSskL2ksZz1wYXJzZUludCxiPU9iamVjdC5wcm90b3R5cGUsbT1iLnRvU3RyaW5nLHg9TWF0aC5tYXgsdz1NYXRoLm1pbixDPURhdGUubm93O2UuZXhwb3J0cz10fSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaSxhOyFmdW5jdGlvbih0LG4pe2k9W10scj1uLGE9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yLmFwcGx5KG8saSk6ciwhKHZvaWQgMCE9PWEmJihlLmV4cG9ydHM9YSkpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJue3JlZDp7NTA6XCIjZmZlYmVlXCIsMTAwOlwiI2ZmY2RkMlwiLDIwMDpcIiNlZjlhOWFcIiwzMDA6XCIjZTU3MzczXCIsNDAwOlwiI2VmNTM1MFwiLDUwMDpcIiNmNDQzMzZcIiw2MDA6XCIjZTUzOTM1XCIsNzAwOlwiI2QzMmYyZlwiLDgwMDpcIiNjNjI4MjhcIiw5MDA6XCIjYjcxYzFjXCIsYTEwMDpcIiNmZjhhODBcIixhMjAwOlwiI2ZmNTI1MlwiLGE0MDA6XCIjZmYxNzQ0XCIsYTcwMDpcIiNkNTAwMDBcIn0scGluazp7NTA6XCIjZmNlNGVjXCIsMTAwOlwiI2Y4YmJkMFwiLDIwMDpcIiNmNDhmYjFcIiwzMDA6XCIjZjA2MjkyXCIsNDAwOlwiI2VjNDA3YVwiLDUwMDpcIiNlOTFlNjNcIiw2MDA6XCIjZDgxYjYwXCIsNzAwOlwiI2MyMTg1YlwiLDgwMDpcIiNhZDE0NTdcIiw5MDA6XCIjODgwZTRmXCIsYTEwMDpcIiNmZjgwYWJcIixhMjAwOlwiI2ZmNDA4MVwiLGE0MDA6XCIjZjUwMDU3XCIsYTcwMDpcIiNjNTExNjJcIn0scHVycGxlOns1MDpcIiNmM2U1ZjVcIiwxMDA6XCIjZTFiZWU3XCIsMjAwOlwiI2NlOTNkOFwiLDMwMDpcIiNiYTY4YzhcIiw0MDA6XCIjYWI0N2JjXCIsNTAwOlwiIzljMjdiMFwiLDYwMDpcIiM4ZTI0YWFcIiw3MDA6XCIjN2IxZmEyXCIsODAwOlwiIzZhMWI5YVwiLDkwMDpcIiM0YTE0OGNcIixhMTAwOlwiI2VhODBmY1wiLGEyMDA6XCIjZTA0MGZiXCIsYTQwMDpcIiNkNTAwZjlcIixhNzAwOlwiI2FhMDBmZlwifSxkZWVwUHVycGxlOns1MDpcIiNlZGU3ZjZcIiwxMDA6XCIjZDFjNGU5XCIsMjAwOlwiI2IzOWRkYlwiLDMwMDpcIiM5NTc1Y2RcIiw0MDA6XCIjN2U1N2MyXCIsNTAwOlwiIzY3M2FiN1wiLDYwMDpcIiM1ZTM1YjFcIiw3MDA6XCIjNTEyZGE4XCIsODAwOlwiIzQ1MjdhMFwiLDkwMDpcIiMzMTFiOTJcIixhMTAwOlwiI2IzODhmZlwiLGEyMDA6XCIjN2M0ZGZmXCIsYTQwMDpcIiM2NTFmZmZcIixhNzAwOlwiIzYyMDBlYVwifSxpbmRpZ286ezUwOlwiI2U4ZWFmNlwiLDEwMDpcIiNjNWNhZTlcIiwyMDA6XCIjOWZhOGRhXCIsMzAwOlwiIzc5ODZjYlwiLDQwMDpcIiM1YzZiYzBcIiw1MDA6XCIjM2Y1MWI1XCIsNjAwOlwiIzM5NDlhYlwiLDcwMDpcIiMzMDNmOWZcIiw4MDA6XCIjMjgzNTkzXCIsOTAwOlwiIzFhMjM3ZVwiLGExMDA6XCIjOGM5ZWZmXCIsYTIwMDpcIiM1MzZkZmVcIixhNDAwOlwiIzNkNWFmZVwiLGE3MDA6XCIjMzA0ZmZlXCJ9LGJsdWU6ezUwOlwiI2UzZjJmZFwiLDEwMDpcIiNiYmRlZmJcIiwyMDA6XCIjOTBjYWY5XCIsMzAwOlwiIzY0YjVmNlwiLDQwMDpcIiM0MmE1ZjVcIiw1MDA6XCIjMjE5NmYzXCIsNjAwOlwiIzFlODhlNVwiLDcwMDpcIiMxOTc2ZDJcIiw4MDA6XCIjMTU2NWMwXCIsOTAwOlwiIzBkNDdhMVwiLGExMDA6XCIjODJiMWZmXCIsYTIwMDpcIiM0NDhhZmZcIixhNDAwOlwiIzI5NzlmZlwiLGE3MDA6XCIjMjk2MmZmXCJ9LGxpZ2h0Qmx1ZTp7NTA6XCIjZTFmNWZlXCIsMTAwOlwiI2IzZTVmY1wiLDIwMDpcIiM4MWQ0ZmFcIiwzMDA6XCIjNGZjM2Y3XCIsNDAwOlwiIzI5YjZmNlwiLDUwMDpcIiMwM2E5ZjRcIiw2MDA6XCIjMDM5YmU1XCIsNzAwOlwiIzAyODhkMVwiLDgwMDpcIiMwMjc3YmRcIiw5MDA6XCIjMDE1NzliXCIsYTEwMDpcIiM4MGQ4ZmZcIixhMjAwOlwiIzQwYzRmZlwiLGE0MDA6XCIjMDBiMGZmXCIsYTcwMDpcIiMwMDkxZWFcIn0sY3lhbjp7NTA6XCIjZTBmN2ZhXCIsMTAwOlwiI2IyZWJmMlwiLDIwMDpcIiM4MGRlZWFcIiwzMDA6XCIjNGRkMGUxXCIsNDAwOlwiIzI2YzZkYVwiLDUwMDpcIiMwMGJjZDRcIiw2MDA6XCIjMDBhY2MxXCIsNzAwOlwiIzAwOTdhN1wiLDgwMDpcIiMwMDgzOGZcIiw5MDA6XCIjMDA2MDY0XCIsYTEwMDpcIiM4NGZmZmZcIixhMjAwOlwiIzE4ZmZmZlwiLGE0MDA6XCIjMDBlNWZmXCIsYTcwMDpcIiMwMGI4ZDRcIn0sdGVhbDp7NTA6XCIjZTBmMmYxXCIsMTAwOlwiI2IyZGZkYlwiLDIwMDpcIiM4MGNiYzRcIiwzMDA6XCIjNGRiNmFjXCIsNDAwOlwiIzI2YTY5YVwiLDUwMDpcIiMwMDk2ODhcIiw2MDA6XCIjMDA4OTdiXCIsNzAwOlwiIzAwNzk2YlwiLDgwMDpcIiMwMDY5NWNcIiw5MDA6XCIjMDA0ZDQwXCIsYTEwMDpcIiNhN2ZmZWJcIixhMjAwOlwiIzY0ZmZkYVwiLGE0MDA6XCIjMWRlOWI2XCIsYTcwMDpcIiMwMGJmYTVcIn0sZ3JlZW46ezUwOlwiI2U4ZjVlOVwiLDEwMDpcIiNjOGU2YzlcIiwyMDA6XCIjYTVkNmE3XCIsMzAwOlwiIzgxYzc4NFwiLDQwMDpcIiM2NmJiNmFcIiw1MDA6XCIjNGNhZjUwXCIsNjAwOlwiIzQzYTA0N1wiLDcwMDpcIiMzODhlM2NcIiw4MDA6XCIjMmU3ZDMyXCIsOTAwOlwiIzFiNWUyMFwiLGExMDA6XCIjYjlmNmNhXCIsYTIwMDpcIiM2OWYwYWVcIixhNDAwOlwiIzAwZTY3NlwiLGE3MDA6XCIjMDBjODUzXCJ9LGxpZ2h0R3JlZW46ezUwOlwiI2YxZjhlOVwiLDEwMDpcIiNkY2VkYzhcIiwyMDA6XCIjYzVlMWE1XCIsMzAwOlwiI2FlZDU4MVwiLDQwMDpcIiM5Y2NjNjVcIiw1MDA6XCIjOGJjMzRhXCIsNjAwOlwiIzdjYjM0MlwiLDcwMDpcIiM2ODlmMzhcIiw4MDA6XCIjNTU4YjJmXCIsOTAwOlwiIzMzNjkxZVwiLGExMDA6XCIjY2NmZjkwXCIsYTIwMDpcIiNiMmZmNTlcIixhNDAwOlwiIzc2ZmYwM1wiLGE3MDA6XCIjNjRkZDE3XCJ9LGxpbWU6ezUwOlwiI2Y5ZmJlN1wiLDEwMDpcIiNmMGY0YzNcIiwyMDA6XCIjZTZlZTljXCIsMzAwOlwiI2RjZTc3NVwiLDQwMDpcIiNkNGUxNTdcIiw1MDA6XCIjY2RkYzM5XCIsNjAwOlwiI2MwY2EzM1wiLDcwMDpcIiNhZmI0MmJcIiw4MDA6XCIjOWU5ZDI0XCIsOTAwOlwiIzgyNzcxN1wiLGExMDA6XCIjZjRmZjgxXCIsYTIwMDpcIiNlZWZmNDFcIixhNDAwOlwiI2M2ZmYwMFwiLGE3MDA6XCIjYWVlYTAwXCJ9LHllbGxvdzp7NTA6XCIjZmZmZGU3XCIsMTAwOlwiI2ZmZjljNFwiLDIwMDpcIiNmZmY1OWRcIiwzMDA6XCIjZmZmMTc2XCIsNDAwOlwiI2ZmZWU1OFwiLDUwMDpcIiNmZmViM2JcIiw2MDA6XCIjZmRkODM1XCIsNzAwOlwiI2ZiYzAyZFwiLDgwMDpcIiNmOWE4MjVcIiw5MDA6XCIjZjU3ZjE3XCIsYTEwMDpcIiNmZmZmOGRcIixhMjAwOlwiI2ZmZmYwMFwiLGE0MDA6XCIjZmZlYTAwXCIsYTcwMDpcIiNmZmQ2MDBcIn0sYW1iZXI6ezUwOlwiI2ZmZjhlMVwiLDEwMDpcIiNmZmVjYjNcIiwyMDA6XCIjZmZlMDgyXCIsMzAwOlwiI2ZmZDU0ZlwiLDQwMDpcIiNmZmNhMjhcIiw1MDA6XCIjZmZjMTA3XCIsNjAwOlwiI2ZmYjMwMFwiLDcwMDpcIiNmZmEwMDBcIiw4MDA6XCIjZmY4ZjAwXCIsOTAwOlwiI2ZmNmYwMFwiLGExMDA6XCIjZmZlNTdmXCIsYTIwMDpcIiNmZmQ3NDBcIixhNDAwOlwiI2ZmYzQwMFwiLGE3MDA6XCIjZmZhYjAwXCJ9LG9yYW5nZTp7NTA6XCIjZmZmM2UwXCIsMTAwOlwiI2ZmZTBiMlwiLDIwMDpcIiNmZmNjODBcIiwzMDA6XCIjZmZiNzRkXCIsNDAwOlwiI2ZmYTcyNlwiLDUwMDpcIiNmZjk4MDBcIiw2MDA6XCIjZmI4YzAwXCIsNzAwOlwiI2Y1N2MwMFwiLDgwMDpcIiNlZjZjMDBcIiw5MDA6XCIjZTY1MTAwXCIsYTEwMDpcIiNmZmQxODBcIixhMjAwOlwiI2ZmYWI0MFwiLGE0MDA6XCIjZmY5MTAwXCIsYTcwMDpcIiNmZjZkMDBcIn0sZGVlcE9yYW5nZTp7NTA6XCIjZmJlOWU3XCIsMTAwOlwiI2ZmY2NiY1wiLDIwMDpcIiNmZmFiOTFcIiwzMDA6XCIjZmY4YTY1XCIsNDAwOlwiI2ZmNzA0M1wiLDUwMDpcIiNmZjU3MjJcIiw2MDA6XCIjZjQ1MTFlXCIsNzAwOlwiI2U2NGExOVwiLDgwMDpcIiNkODQzMTVcIiw5MDA6XCIjYmYzNjBjXCIsYTEwMDpcIiNmZjllODBcIixhMjAwOlwiI2ZmNmU0MFwiLGE0MDA6XCIjZmYzZDAwXCIsYTcwMDpcIiNkZDJjMDBcIn0sYnJvd246ezUwOlwiI2VmZWJlOVwiLDEwMDpcIiNkN2NjYzhcIiwyMDA6XCIjYmNhYWE0XCIsMzAwOlwiI2ExODg3ZlwiLDQwMDpcIiM4ZDZlNjNcIiw1MDA6XCIjNzk1NTQ4XCIsNjAwOlwiIzZkNGM0MVwiLDcwMDpcIiM1ZDQwMzdcIiw4MDA6XCIjNGUzNDJlXCIsOTAwOlwiIzNlMjcyM1wifSxncmV5Ons1MDpcIiNmYWZhZmFcIiwxMDA6XCIjZjVmNWY1XCIsMjAwOlwiI2VlZWVlZVwiLDMwMDpcIiNlMGUwZTBcIiw0MDA6XCIjYmRiZGJkXCIsNTAwOlwiIzllOWU5ZVwiLDYwMDpcIiM3NTc1NzVcIiw3MDA6XCIjNjE2MTYxXCIsODAwOlwiIzQyNDI0MlwiLDkwMDpcIiMyMTIxMjFcIn0sYmx1ZUdyZXk6ezUwOlwiI2VjZWZmMVwiLDEwMDpcIiNjZmQ4ZGNcIiwyMDA6XCIjYjBiZWM1XCIsMzAwOlwiIzkwYTRhZVwiLDQwMDpcIiM3ODkwOWNcIiw1MDA6XCIjNjA3ZDhiXCIsNjAwOlwiIzU0NmU3YVwiLDcwMDpcIiM0NTVhNjRcIiw4MDA6XCIjMzc0NzRmXCIsOTAwOlwiIzI2MzIzOFwifSx3aGl0ZTpcIiNmZmZmZmZcIixibGFjazpcIiMwMDAwMDBcIn19KX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByOyFmdW5jdGlvbigpe2Z1bmN0aW9uIGkoZSxvKXtpZihlPWU/ZTpcIlwiLG89b3x8e30sZSBpbnN0YW5jZW9mIGkpcmV0dXJuIGU7aWYoISh0aGlzIGluc3RhbmNlb2YgaSkpcmV0dXJuIG5ldyBpKGUsbyk7dmFyIHQ9YShlKTt0aGlzLl9vcmlnaW5hbElucHV0PWUsdGhpcy5fcj10LnIsdGhpcy5fZz10LmcsdGhpcy5fYj10LmIsdGhpcy5fYT10LmEsdGhpcy5fcm91bmRBPVUoMTAwKnRoaXMuX2EpLzEwMCx0aGlzLl9mb3JtYXQ9by5mb3JtYXR8fHQuZm9ybWF0LHRoaXMuX2dyYWRpZW50VHlwZT1vLmdyYWRpZW50VHlwZSx0aGlzLl9yPDEmJih0aGlzLl9yPVUodGhpcy5fcikpLHRoaXMuX2c8MSYmKHRoaXMuX2c9VSh0aGlzLl9nKSksdGhpcy5fYjwxJiYodGhpcy5fYj1VKHRoaXMuX2IpKSx0aGlzLl9vaz10Lm9rLHRoaXMuX3RjX2lkPUkrK31mdW5jdGlvbiBhKGUpe3ZhciBvPXtyOjAsZzowLGI6MH0sdD0xLHI9ITEsaT0hMTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9eihlKSksXCJvYmplY3RcIj09dHlwZW9mIGUmJihlLmhhc093blByb3BlcnR5KFwiclwiKSYmZS5oYXNPd25Qcm9wZXJ0eShcImdcIikmJmUuaGFzT3duUHJvcGVydHkoXCJiXCIpPyhvPW4oZS5yLGUuZyxlLmIpLHI9ITAsaT1cIiVcIj09PVN0cmluZyhlLnIpLnN1YnN0cigtMSk/XCJwcmdiXCI6XCJyZ2JcIik6ZS5oYXNPd25Qcm9wZXJ0eShcImhcIikmJmUuaGFzT3duUHJvcGVydHkoXCJzXCIpJiZlLmhhc093blByb3BlcnR5KFwidlwiKT8oZS5zPUUoZS5zKSxlLnY9RShlLnYpLG89dShlLmgsZS5zLGUudikscj0hMCxpPVwiaHN2XCIpOmUuaGFzT3duUHJvcGVydHkoXCJoXCIpJiZlLmhhc093blByb3BlcnR5KFwic1wiKSYmZS5oYXNPd25Qcm9wZXJ0eShcImxcIikmJihlLnM9RShlLnMpLGUubD1FKGUubCksbz1sKGUuaCxlLnMsZS5sKSxyPSEwLGk9XCJoc2xcIiksZS5oYXNPd25Qcm9wZXJ0eShcImFcIikmJih0PWUuYSkpLHQ9QSh0KSx7b2s6cixmb3JtYXQ6ZS5mb3JtYXR8fGkscjpWKDI1NSxYKG8uciwwKSksZzpWKDI1NSxYKG8uZywwKSksYjpWKDI1NSxYKG8uYiwwKSksYTp0fX1mdW5jdGlvbiBuKGUsbyx0KXtyZXR1cm57cjoyNTUqTShlLDI1NSksZzoyNTUqTShvLDI1NSksYjoyNTUqTSh0LDI1NSl9fWZ1bmN0aW9uIHMoZSxvLHQpe2U9TShlLDI1NSksbz1NKG8sMjU1KSx0PU0odCwyNTUpO3ZhciByLGksYT1YKGUsbyx0KSxuPVYoZSxvLHQpLHM9KGErbikvMjtpZihhPT1uKXI9aT0wO2Vsc2V7dmFyIGw9YS1uO3N3aXRjaChpPXM+LjU/bC8oMi1hLW4pOmwvKGErbiksYSl7Y2FzZSBlOnI9KG8tdCkvbCsodD5vPzY6MCk7YnJlYWs7Y2FzZSBvOnI9KHQtZSkvbCsyO2JyZWFrO2Nhc2UgdDpyPShlLW8pL2wrNH1yLz02fXJldHVybntoOnIsczppLGw6c319ZnVuY3Rpb24gbChlLG8sdCl7ZnVuY3Rpb24gcihlLG8sdCl7cmV0dXJuIDA+dCYmKHQrPTEpLHQ+MSYmKHQtPTEpLDEvNj50P2UrNiooby1lKSp0Oi41PnQ/bzoyLzM+dD9lKyhvLWUpKigyLzMtdCkqNjplfXZhciBpLGEsbjtpZihlPU0oZSwzNjApLG89TShvLDEwMCksdD1NKHQsMTAwKSwwPT09bylpPWE9bj10O2Vsc2V7dmFyIHM9LjU+dD90KigxK28pOnQrby10Km8sbD0yKnQtcztpPXIobCxzLGUrMS8zKSxhPXIobCxzLGUpLG49cihsLHMsZS0xLzMpfXJldHVybntyOjI1NSppLGc6MjU1KmEsYjoyNTUqbn19ZnVuY3Rpb24gYyhlLG8sdCl7ZT1NKGUsMjU1KSxvPU0obywyNTUpLHQ9TSh0LDI1NSk7dmFyIHIsaSxhPVgoZSxvLHQpLG49VihlLG8sdCkscz1hLGw9YS1uO2lmKGk9MD09PWE/MDpsL2EsYT09bilyPTA7ZWxzZXtzd2l0Y2goYSl7Y2FzZSBlOnI9KG8tdCkvbCsodD5vPzY6MCk7YnJlYWs7Y2FzZSBvOnI9KHQtZSkvbCsyO2JyZWFrO2Nhc2UgdDpyPShlLW8pL2wrNH1yLz02fXJldHVybntoOnIsczppLHY6c319ZnVuY3Rpb24gdShlLG8sdCl7ZT02Kk0oZSwzNjApLG89TShvLDEwMCksdD1NKHQsMTAwKTt2YXIgcj0kLmZsb29yKGUpLGk9ZS1yLGE9dCooMS1vKSxuPXQqKDEtaSpvKSxzPXQqKDEtKDEtaSkqbyksbD1yJTYsYz1bdCxuLGEsYSxzLHRdW2xdLHU9W3MsdCx0LG4sYSxhXVtsXSxoPVthLGEscyx0LHQsbl1bbF07cmV0dXJue3I6MjU1KmMsZzoyNTUqdSxiOjI1NSpofX1mdW5jdGlvbiBoKGUsbyx0LHIpe3ZhciBpPVtqKFUoZSkudG9TdHJpbmcoMTYpKSxqKFUobykudG9TdHJpbmcoMTYpKSxqKFUodCkudG9TdHJpbmcoMTYpKV07cmV0dXJuIHImJmlbMF0uY2hhckF0KDApPT1pWzBdLmNoYXJBdCgxKSYmaVsxXS5jaGFyQXQoMCk9PWlbMV0uY2hhckF0KDEpJiZpWzJdLmNoYXJBdCgwKT09aVsyXS5jaGFyQXQoMSk/aVswXS5jaGFyQXQoMCkraVsxXS5jaGFyQXQoMCkraVsyXS5jaGFyQXQoMCk6aS5qb2luKFwiXCIpfWZ1bmN0aW9uIGQoZSxvLHQscil7dmFyIGk9W2ooSChyKSksaihVKGUpLnRvU3RyaW5nKDE2KSksaihVKG8pLnRvU3RyaW5nKDE2KSksaihVKHQpLnRvU3RyaW5nKDE2KSldO3JldHVybiBpLmpvaW4oXCJcIil9ZnVuY3Rpb24gZihlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvSHNsKCk7cmV0dXJuIHQucy09by8xMDAsdC5zPVAodC5zKSxpKHQpfWZ1bmN0aW9uIHAoZSxvKXtvPTA9PT1vPzA6b3x8MTA7dmFyIHQ9aShlKS50b0hzbCgpO3JldHVybiB0LnMrPW8vMTAwLHQucz1QKHQucyksaSh0KX1mdW5jdGlvbiBfKGUpe3JldHVybiBpKGUpLmRlc2F0dXJhdGUoMTAwKX1mdW5jdGlvbiB2KGUsbyl7bz0wPT09bz8wOm98fDEwO3ZhciB0PWkoZSkudG9Ic2woKTtyZXR1cm4gdC5sKz1vLzEwMCx0Lmw9UCh0LmwpLGkodCl9ZnVuY3Rpb24gZyhlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvUmdiKCk7cmV0dXJuIHQucj1YKDAsVigyNTUsdC5yLVUoMjU1Ki0oby8xMDApKSkpLHQuZz1YKDAsVigyNTUsdC5nLVUoMjU1Ki0oby8xMDApKSkpLHQuYj1YKDAsVigyNTUsdC5iLVUoMjU1Ki0oby8xMDApKSkpLGkodCl9ZnVuY3Rpb24gYihlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvSHNsKCk7cmV0dXJuIHQubC09by8xMDAsdC5sPVAodC5sKSxpKHQpfWZ1bmN0aW9uIG0oZSxvKXt2YXIgdD1pKGUpLnRvSHNsKCkscj0oVSh0LmgpK28pJTM2MDtyZXR1cm4gdC5oPTA+cj8zNjArcjpyLGkodCl9ZnVuY3Rpb24geChlKXt2YXIgbz1pKGUpLnRvSHNsKCk7cmV0dXJuIG8uaD0oby5oKzE4MCklMzYwLGkobyl9ZnVuY3Rpb24gdyhlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCsxMjApJTM2MCxzOm8ucyxsOm8ubH0pLGkoe2g6KHQrMjQwKSUzNjAsczpvLnMsbDpvLmx9KV19ZnVuY3Rpb24gQyhlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCs5MCklMzYwLHM6by5zLGw6by5sfSksaSh7aDoodCsxODApJTM2MCxzOm8ucyxsOm8ubH0pLGkoe2g6KHQrMjcwKSUzNjAsczpvLnMsbDpvLmx9KV19ZnVuY3Rpb24geShlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCs3MiklMzYwLHM6by5zLGw6by5sfSksaSh7aDoodCsyMTYpJTM2MCxzOm8ucyxsOm8ubH0pXX1mdW5jdGlvbiBrKGUsbyx0KXtvPW98fDYsdD10fHwzMDt2YXIgcj1pKGUpLnRvSHNsKCksYT0zNjAvdCxuPVtpKGUpXTtmb3Ioci5oPShyLmgtKGEqbz4+MSkrNzIwKSUzNjA7LS1vOylyLmg9KHIuaCthKSUzNjAsbi5wdXNoKGkocikpO3JldHVybiBufWZ1bmN0aW9uIEYoZSxvKXtvPW98fDY7Zm9yKHZhciB0PWkoZSkudG9Ic3YoKSxyPXQuaCxhPXQucyxuPXQudixzPVtdLGw9MS9vO28tLTspcy5wdXNoKGkoe2g6cixzOmEsdjpufSkpLG49KG4rbCklMTtyZXR1cm4gc31mdW5jdGlvbiBSKGUpe3ZhciBvPXt9O2Zvcih2YXIgdCBpbiBlKWUuaGFzT3duUHJvcGVydHkodCkmJihvW2VbdF1dPXQpO3JldHVybiBvfWZ1bmN0aW9uIEEoZSl7cmV0dXJuIGU9cGFyc2VGbG9hdChlKSwoaXNOYU4oZSl8fDA+ZXx8ZT4xKSYmKGU9MSksZX1mdW5jdGlvbiBNKGUsbyl7UyhlKSYmKGU9XCIxMDAlXCIpO3ZhciB0PUwoZSk7cmV0dXJuIGU9VihvLFgoMCxwYXJzZUZsb2F0KGUpKSksdCYmKGU9cGFyc2VJbnQoZSpvLDEwKS8xMDApLCQuYWJzKGUtbyk8MWUtNj8xOmUlby9wYXJzZUZsb2F0KG8pfWZ1bmN0aW9uIFAoZSl7cmV0dXJuIFYoMSxYKDAsZSkpfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIHBhcnNlSW50KGUsMTYpfWZ1bmN0aW9uIFMoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT1lLmluZGV4T2YoXCIuXCIpJiYxPT09cGFyc2VGbG9hdChlKX1mdW5jdGlvbiBMKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9ZS5pbmRleE9mKFwiJVwiKX1mdW5jdGlvbiBqKGUpe3JldHVybiAxPT1lLmxlbmd0aD9cIjBcIitlOlwiXCIrZX1mdW5jdGlvbiBFKGUpe3JldHVybiAxPj1lJiYoZT0xMDAqZStcIiVcIiksZX1mdW5jdGlvbiBIKGUpe3JldHVybiBNYXRoLnJvdW5kKDI1NSpwYXJzZUZsb2F0KGUpKS50b1N0cmluZygxNil9ZnVuY3Rpb24gTyhlKXtyZXR1cm4gTihlKS8yNTV9ZnVuY3Rpb24geihlKXtlPWUucmVwbGFjZShELFwiXCIpLnJlcGxhY2UoVCxcIlwiKS50b0xvd2VyQ2FzZSgpO3ZhciBvPSExO2lmKFlbZV0pZT1ZW2VdLG89ITA7ZWxzZSBpZihcInRyYW5zcGFyZW50XCI9PWUpcmV0dXJue3I6MCxnOjAsYjowLGE6MCxmb3JtYXQ6XCJuYW1lXCJ9O3ZhciB0O3JldHVybih0PVcucmdiLmV4ZWMoZSkpP3tyOnRbMV0sZzp0WzJdLGI6dFszXX06KHQ9Vy5yZ2JhLmV4ZWMoZSkpP3tyOnRbMV0sZzp0WzJdLGI6dFszXSxhOnRbNF19Oih0PVcuaHNsLmV4ZWMoZSkpP3toOnRbMV0sczp0WzJdLGw6dFszXX06KHQ9Vy5oc2xhLmV4ZWMoZSkpP3toOnRbMV0sczp0WzJdLGw6dFszXSxhOnRbNF19Oih0PVcuaHN2LmV4ZWMoZSkpP3toOnRbMV0sczp0WzJdLHY6dFszXX06KHQ9Vy5oc3ZhLmV4ZWMoZSkpP3toOnRbMV0sczp0WzJdLHY6dFszXSxhOnRbNF19Oih0PVcuaGV4OC5leGVjKGUpKT97YTpPKHRbMV0pLHI6Tih0WzJdKSxnOk4odFszXSksYjpOKHRbNF0pLGZvcm1hdDpvP1wibmFtZVwiOlwiaGV4OFwifToodD1XLmhleDYuZXhlYyhlKSk/e3I6Tih0WzFdKSxnOk4odFsyXSksYjpOKHRbM10pLGZvcm1hdDpvP1wibmFtZVwiOlwiaGV4XCJ9Oih0PVcuaGV4My5leGVjKGUpKT97cjpOKHRbMV0rXCJcIit0WzFdKSxnOk4odFsyXStcIlwiK3RbMl0pLGI6Tih0WzNdK1wiXCIrdFszXSksZm9ybWF0Om8/XCJuYW1lXCI6XCJoZXhcIn06ITF9ZnVuY3Rpb24gQihlKXt2YXIgbyx0O3JldHVybiBlPWV8fHtsZXZlbDpcIkFBXCIsc2l6ZTpcInNtYWxsXCJ9LG89KGUubGV2ZWx8fFwiQUFcIikudG9VcHBlckNhc2UoKSx0PShlLnNpemV8fFwic21hbGxcIikudG9Mb3dlckNhc2UoKSxcIkFBXCIhPT1vJiZcIkFBQVwiIT09byYmKG89XCJBQVwiKSxcInNtYWxsXCIhPT10JiZcImxhcmdlXCIhPT10JiYodD1cInNtYWxsXCIpLHtsZXZlbDpvLHNpemU6dH19dmFyIEQ9L15cXHMrLyxUPS9cXHMrJC8sST0wLCQ9TWF0aCxVPSQucm91bmQsVj0kLm1pbixYPSQubWF4LHE9JC5yYW5kb207aS5wcm90b3R5cGU9e2lzRGFyazpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEJyaWdodG5lc3MoKTwxMjh9LGlzTGlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0RhcmsoKX0saXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9va30sZ2V0T3JpZ2luYWxJbnB1dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9vcmlnaW5hbElucHV0fSxnZXRGb3JtYXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZm9ybWF0fSxnZXRBbHBoYTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hfSxnZXRCcmlnaHRuZXNzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50b1JnYigpO3JldHVybigyOTkqZS5yKzU4NyplLmcrMTE0KmUuYikvMWUzfSxnZXRMdW1pbmFuY2U6ZnVuY3Rpb24oKXt2YXIgZSxvLHQscixpLGEsbj10aGlzLnRvUmdiKCk7cmV0dXJuIGU9bi5yLzI1NSxvPW4uZy8yNTUsdD1uLmIvMjU1LHI9LjAzOTI4Pj1lP2UvMTIuOTI6TWF0aC5wb3coKGUrLjA1NSkvMS4wNTUsMi40KSxpPS4wMzkyOD49bz9vLzEyLjkyOk1hdGgucG93KChvKy4wNTUpLzEuMDU1LDIuNCksYT0uMDM5Mjg+PXQ/dC8xMi45MjpNYXRoLnBvdygodCsuMDU1KS8xLjA1NSwyLjQpLC4yMTI2KnIrLjcxNTIqaSsuMDcyMiphfSxzZXRBbHBoYTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fYT1BKGUpLHRoaXMuX3JvdW5kQT1VKDEwMCp0aGlzLl9hKS8xMDAsdGhpc30sdG9Ic3Y6ZnVuY3Rpb24oKXt2YXIgZT1jKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKTtyZXR1cm57aDozNjAqZS5oLHM6ZS5zLHY6ZS52LGE6dGhpcy5fYX19LHRvSHN2U3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9Yyh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiksbz1VKDM2MCplLmgpLHQ9VSgxMDAqZS5zKSxyPVUoMTAwKmUudik7cmV0dXJuIDE9PXRoaXMuX2E/XCJoc3YoXCIrbytcIiwgXCIrdCtcIiUsIFwiK3IrXCIlKVwiOlwiaHN2YShcIitvK1wiLCBcIit0K1wiJSwgXCIrcitcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9Ic2w6ZnVuY3Rpb24oKXt2YXIgZT1zKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKTtyZXR1cm57aDozNjAqZS5oLHM6ZS5zLGw6ZS5sLGE6dGhpcy5fYX19LHRvSHNsU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9cyh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiksbz1VKDM2MCplLmgpLHQ9VSgxMDAqZS5zKSxyPVUoMTAwKmUubCk7cmV0dXJuIDE9PXRoaXMuX2E/XCJoc2woXCIrbytcIiwgXCIrdCtcIiUsIFwiK3IrXCIlKVwiOlwiaHNsYShcIitvK1wiLCBcIit0K1wiJSwgXCIrcitcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9IZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGgodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsZSl9LHRvSGV4U3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVyblwiI1wiK3RoaXMudG9IZXgoZSl9LHRvSGV4ODpmdW5jdGlvbigpe3JldHVybiBkKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLHRoaXMuX2EpfSx0b0hleDhTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIiNcIit0aGlzLnRvSGV4OCgpfSx0b1JnYjpmdW5jdGlvbigpe3JldHVybntyOlUodGhpcy5fciksZzpVKHRoaXMuX2cpLGI6VSh0aGlzLl9iKSxhOnRoaXMuX2F9fSx0b1JnYlN0cmluZzpmdW5jdGlvbigpe3JldHVybiAxPT10aGlzLl9hP1wicmdiKFwiK1UodGhpcy5fcikrXCIsIFwiK1UodGhpcy5fZykrXCIsIFwiK1UodGhpcy5fYikrXCIpXCI6XCJyZ2JhKFwiK1UodGhpcy5fcikrXCIsIFwiK1UodGhpcy5fZykrXCIsIFwiK1UodGhpcy5fYikrXCIsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9QZXJjZW50YWdlUmdiOmZ1bmN0aW9uKCl7cmV0dXJue3I6VSgxMDAqTSh0aGlzLl9yLDI1NSkpK1wiJVwiLGc6VSgxMDAqTSh0aGlzLl9nLDI1NSkpK1wiJVwiLGI6VSgxMDAqTSh0aGlzLl9iLDI1NSkpK1wiJVwiLGE6dGhpcy5fYX19LHRvUGVyY2VudGFnZVJnYlN0cmluZzpmdW5jdGlvbigpe3JldHVybiAxPT10aGlzLl9hP1wicmdiKFwiK1UoMTAwKk0odGhpcy5fciwyNTUpKStcIiUsIFwiK1UoMTAwKk0odGhpcy5fZywyNTUpKStcIiUsIFwiK1UoMTAwKk0odGhpcy5fYiwyNTUpKStcIiUpXCI6XCJyZ2JhKFwiK1UoMTAwKk0odGhpcy5fciwyNTUpKStcIiUsIFwiK1UoMTAwKk0odGhpcy5fZywyNTUpKStcIiUsIFwiK1UoMTAwKk0odGhpcy5fYiwyNTUpKStcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9OYW1lOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10aGlzLl9hP1widHJhbnNwYXJlbnRcIjp0aGlzLl9hPDE/ITE6R1toKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLCEwKV18fCExfSx0b0ZpbHRlcjpmdW5jdGlvbihlKXt2YXIgbz1cIiNcIitkKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLHRoaXMuX2EpLHQ9byxyPXRoaXMuX2dyYWRpZW50VHlwZT9cIkdyYWRpZW50VHlwZSA9IDEsIFwiOlwiXCI7aWYoZSl7dmFyIGE9aShlKTt0PWEudG9IZXg4U3RyaW5nKCl9cmV0dXJuXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoXCIrcitcInN0YXJ0Q29sb3JzdHI9XCIrbytcIixlbmRDb2xvcnN0cj1cIit0K1wiKVwifSx0b1N0cmluZzpmdW5jdGlvbihlKXt2YXIgbz0hIWU7ZT1lfHx0aGlzLl9mb3JtYXQ7dmFyIHQ9ITEscj10aGlzLl9hPDEmJnRoaXMuX2E+PTAsaT0hbyYmciYmKFwiaGV4XCI9PT1lfHxcImhleDZcIj09PWV8fFwiaGV4M1wiPT09ZXx8XCJuYW1lXCI9PT1lKTtyZXR1cm4gaT9cIm5hbWVcIj09PWUmJjA9PT10aGlzLl9hP3RoaXMudG9OYW1lKCk6dGhpcy50b1JnYlN0cmluZygpOihcInJnYlwiPT09ZSYmKHQ9dGhpcy50b1JnYlN0cmluZygpKSxcInByZ2JcIj09PWUmJih0PXRoaXMudG9QZXJjZW50YWdlUmdiU3RyaW5nKCkpLFwiaGV4XCIhPT1lJiZcImhleDZcIiE9PWV8fCh0PXRoaXMudG9IZXhTdHJpbmcoKSksXCJoZXgzXCI9PT1lJiYodD10aGlzLnRvSGV4U3RyaW5nKCEwKSksXCJoZXg4XCI9PT1lJiYodD10aGlzLnRvSGV4OFN0cmluZygpKSxcIm5hbWVcIj09PWUmJih0PXRoaXMudG9OYW1lKCkpLFwiaHNsXCI9PT1lJiYodD10aGlzLnRvSHNsU3RyaW5nKCkpLFwiaHN2XCI9PT1lJiYodD10aGlzLnRvSHN2U3RyaW5nKCkpLHR8fHRoaXMudG9IZXhTdHJpbmcoKSl9LGNsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIGkodGhpcy50b1N0cmluZygpKX0sX2FwcGx5TW9kaWZpY2F0aW9uOmZ1bmN0aW9uKGUsbyl7dmFyIHQ9ZS5hcHBseShudWxsLFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChvKSkpO3JldHVybiB0aGlzLl9yPXQuX3IsdGhpcy5fZz10Ll9nLHRoaXMuX2I9dC5fYix0aGlzLnNldEFscGhhKHQuX2EpLHRoaXN9LGxpZ2h0ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24odixhcmd1bWVudHMpfSxicmlnaHRlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihnLGFyZ3VtZW50cyl9LGRhcmtlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihiLGFyZ3VtZW50cyl9LGRlc2F0dXJhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZixhcmd1bWVudHMpfSxzYXR1cmF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihwLGFyZ3VtZW50cyl9LGdyZXlzY2FsZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihfLGFyZ3VtZW50cyl9LHNwaW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24obSxhcmd1bWVudHMpfSxfYXBwbHlDb21iaW5hdGlvbjpmdW5jdGlvbihlLG8pe3JldHVybiBlLmFwcGx5KG51bGwsW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKG8pKSl9LGFuYWxvZ291czpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGssYXJndW1lbnRzKX0sY29tcGxlbWVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHgsYXJndW1lbnRzKX0sbW9ub2Nocm9tYXRpYzpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKEYsYXJndW1lbnRzKX0sc3BsaXRjb21wbGVtZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oeSxhcmd1bWVudHMpfSx0cmlhZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKHcsYXJndW1lbnRzKX0sdGV0cmFkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oQyxhcmd1bWVudHMpfX0saS5mcm9tUmF0aW89ZnVuY3Rpb24oZSxvKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7dmFyIHQ9e307Zm9yKHZhciByIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShyKSYmKFwiYVwiPT09cj90W3JdPWVbcl06dFtyXT1FKGVbcl0pKTtlPXR9cmV0dXJuIGkoZSxvKX0saS5lcXVhbHM9ZnVuY3Rpb24oZSxvKXtyZXR1cm4gZSYmbz9pKGUpLnRvUmdiU3RyaW5nKCk9PWkobykudG9SZ2JTdHJpbmcoKTohMX0saS5yYW5kb209ZnVuY3Rpb24oKXtyZXR1cm4gaS5mcm9tUmF0aW8oe3I6cSgpLGc6cSgpLGI6cSgpfSl9LGkubWl4PWZ1bmN0aW9uKGUsbyx0KXt0PTA9PT10PzA6dHx8NTA7dmFyIHIsYT1pKGUpLnRvUmdiKCksbj1pKG8pLnRvUmdiKCkscz10LzEwMCxsPTIqcy0xLGM9bi5hLWEuYTtyPWwqYz09LTE/bDoobCtjKS8oMStsKmMpLHI9KHIrMSkvMjt2YXIgdT0xLXIsaD17cjpuLnIqcithLnIqdSxnOm4uZypyK2EuZyp1LGI6bi5iKnIrYS5iKnUsYTpuLmEqcythLmEqKDEtcyl9O3JldHVybiBpKGgpfSxpLnJlYWRhYmlsaXR5PWZ1bmN0aW9uKGUsbyl7dmFyIHQ9aShlKSxyPWkobyk7cmV0dXJuKE1hdGgubWF4KHQuZ2V0THVtaW5hbmNlKCksci5nZXRMdW1pbmFuY2UoKSkrLjA1KS8oTWF0aC5taW4odC5nZXRMdW1pbmFuY2UoKSxyLmdldEx1bWluYW5jZSgpKSsuMDUpfSxpLmlzUmVhZGFibGU9ZnVuY3Rpb24oZSxvLHQpe3ZhciByLGEsbj1pLnJlYWRhYmlsaXR5KGUsbyk7c3dpdGNoKGE9ITEscj1CKHQpLHIubGV2ZWwrci5zaXplKXtjYXNlXCJBQXNtYWxsXCI6Y2FzZVwiQUFBbGFyZ2VcIjphPW4+PTQuNTticmVhaztjYXNlXCJBQWxhcmdlXCI6YT1uPj0zO2JyZWFrO2Nhc2VcIkFBQXNtYWxsXCI6YT1uPj03fXJldHVybiBhfSxpLm1vc3RSZWFkYWJsZT1mdW5jdGlvbihlLG8sdCl7dmFyIHIsYSxuLHMsbD1udWxsLGM9MDt0PXR8fHt9LGE9dC5pbmNsdWRlRmFsbGJhY2tDb2xvcnMsbj10LmxldmVsLHM9dC5zaXplO2Zvcih2YXIgdT0wO3U8by5sZW5ndGg7dSsrKXI9aS5yZWFkYWJpbGl0eShlLG9bdV0pLHI+YyYmKGM9cixsPWkob1t1XSkpO3JldHVybiBpLmlzUmVhZGFibGUoZSxsLHtsZXZlbDpuLHNpemU6c30pfHwhYT9sOih0LmluY2x1ZGVGYWxsYmFja0NvbG9ycz0hMSxpLm1vc3RSZWFkYWJsZShlLFtcIiNmZmZcIixcIiMwMDBcIl0sdCkpfTt2YXIgWT1pLm5hbWVzPXthbGljZWJsdWU6XCJmMGY4ZmZcIixhbnRpcXVld2hpdGU6XCJmYWViZDdcIixhcXVhOlwiMGZmXCIsYXF1YW1hcmluZTpcIjdmZmZkNFwiLGF6dXJlOlwiZjBmZmZmXCIsYmVpZ2U6XCJmNWY1ZGNcIixiaXNxdWU6XCJmZmU0YzRcIixibGFjazpcIjAwMFwiLGJsYW5jaGVkYWxtb25kOlwiZmZlYmNkXCIsYmx1ZTpcIjAwZlwiLGJsdWV2aW9sZXQ6XCI4YTJiZTJcIixicm93bjpcImE1MmEyYVwiLGJ1cmx5d29vZDpcImRlYjg4N1wiLGJ1cm50c2llbm5hOlwiZWE3ZTVkXCIsY2FkZXRibHVlOlwiNWY5ZWEwXCIsY2hhcnRyZXVzZTpcIjdmZmYwMFwiLGNob2NvbGF0ZTpcImQyNjkxZVwiLGNvcmFsOlwiZmY3ZjUwXCIsY29ybmZsb3dlcmJsdWU6XCI2NDk1ZWRcIixjb3Juc2lsazpcImZmZjhkY1wiLGNyaW1zb246XCJkYzE0M2NcIixjeWFuOlwiMGZmXCIsZGFya2JsdWU6XCIwMDAwOGJcIixkYXJrY3lhbjpcIjAwOGI4YlwiLGRhcmtnb2xkZW5yb2Q6XCJiODg2MGJcIixkYXJrZ3JheTpcImE5YTlhOVwiLGRhcmtncmVlbjpcIjAwNjQwMFwiLGRhcmtncmV5OlwiYTlhOWE5XCIsZGFya2toYWtpOlwiYmRiNzZiXCIsZGFya21hZ2VudGE6XCI4YjAwOGJcIixkYXJrb2xpdmVncmVlbjpcIjU1NmIyZlwiLGRhcmtvcmFuZ2U6XCJmZjhjMDBcIixkYXJrb3JjaGlkOlwiOTkzMmNjXCIsZGFya3JlZDpcIjhiMDAwMFwiLGRhcmtzYWxtb246XCJlOTk2N2FcIixkYXJrc2VhZ3JlZW46XCI4ZmJjOGZcIixkYXJrc2xhdGVibHVlOlwiNDgzZDhiXCIsZGFya3NsYXRlZ3JheTpcIjJmNGY0ZlwiLGRhcmtzbGF0ZWdyZXk6XCIyZjRmNGZcIixkYXJrdHVycXVvaXNlOlwiMDBjZWQxXCIsZGFya3Zpb2xldDpcIjk0MDBkM1wiLGRlZXBwaW5rOlwiZmYxNDkzXCIsZGVlcHNreWJsdWU6XCIwMGJmZmZcIixkaW1ncmF5OlwiNjk2OTY5XCIsZGltZ3JleTpcIjY5Njk2OVwiLGRvZGdlcmJsdWU6XCIxZTkwZmZcIixmaXJlYnJpY2s6XCJiMjIyMjJcIixmbG9yYWx3aGl0ZTpcImZmZmFmMFwiLGZvcmVzdGdyZWVuOlwiMjI4YjIyXCIsZnVjaHNpYTpcImYwZlwiLGdhaW5zYm9ybzpcImRjZGNkY1wiLGdob3N0d2hpdGU6XCJmOGY4ZmZcIixnb2xkOlwiZmZkNzAwXCIsZ29sZGVucm9kOlwiZGFhNTIwXCIsZ3JheTpcIjgwODA4MFwiLGdyZWVuOlwiMDA4MDAwXCIsZ3JlZW55ZWxsb3c6XCJhZGZmMmZcIixncmV5OlwiODA4MDgwXCIsaG9uZXlkZXc6XCJmMGZmZjBcIixob3RwaW5rOlwiZmY2OWI0XCIsaW5kaWFucmVkOlwiY2Q1YzVjXCIsaW5kaWdvOlwiNGIwMDgyXCIsaXZvcnk6XCJmZmZmZjBcIixraGFraTpcImYwZTY4Y1wiLGxhdmVuZGVyOlwiZTZlNmZhXCIsbGF2ZW5kZXJibHVzaDpcImZmZjBmNVwiLGxhd25ncmVlbjpcIjdjZmMwMFwiLGxlbW9uY2hpZmZvbjpcImZmZmFjZFwiLGxpZ2h0Ymx1ZTpcImFkZDhlNlwiLGxpZ2h0Y29yYWw6XCJmMDgwODBcIixsaWdodGN5YW46XCJlMGZmZmZcIixsaWdodGdvbGRlbnJvZHllbGxvdzpcImZhZmFkMlwiLGxpZ2h0Z3JheTpcImQzZDNkM1wiLGxpZ2h0Z3JlZW46XCI5MGVlOTBcIixsaWdodGdyZXk6XCJkM2QzZDNcIixsaWdodHBpbms6XCJmZmI2YzFcIixsaWdodHNhbG1vbjpcImZmYTA3YVwiLGxpZ2h0c2VhZ3JlZW46XCIyMGIyYWFcIixsaWdodHNreWJsdWU6XCI4N2NlZmFcIixsaWdodHNsYXRlZ3JheTpcIjc4OVwiLGxpZ2h0c2xhdGVncmV5OlwiNzg5XCIsbGlnaHRzdGVlbGJsdWU6XCJiMGM0ZGVcIixsaWdodHllbGxvdzpcImZmZmZlMFwiLGxpbWU6XCIwZjBcIixsaW1lZ3JlZW46XCIzMmNkMzJcIixsaW5lbjpcImZhZjBlNlwiLG1hZ2VudGE6XCJmMGZcIixtYXJvb246XCI4MDAwMDBcIixtZWRpdW1hcXVhbWFyaW5lOlwiNjZjZGFhXCIsbWVkaXVtYmx1ZTpcIjAwMDBjZFwiLG1lZGl1bW9yY2hpZDpcImJhNTVkM1wiLG1lZGl1bXB1cnBsZTpcIjkzNzBkYlwiLG1lZGl1bXNlYWdyZWVuOlwiM2NiMzcxXCIsbWVkaXVtc2xhdGVibHVlOlwiN2I2OGVlXCIsbWVkaXVtc3ByaW5nZ3JlZW46XCIwMGZhOWFcIixtZWRpdW10dXJxdW9pc2U6XCI0OGQxY2NcIixtZWRpdW12aW9sZXRyZWQ6XCJjNzE1ODVcIixtaWRuaWdodGJsdWU6XCIxOTE5NzBcIixtaW50Y3JlYW06XCJmNWZmZmFcIixtaXN0eXJvc2U6XCJmZmU0ZTFcIixtb2NjYXNpbjpcImZmZTRiNVwiLG5hdmFqb3doaXRlOlwiZmZkZWFkXCIsbmF2eTpcIjAwMDA4MFwiLG9sZGxhY2U6XCJmZGY1ZTZcIixvbGl2ZTpcIjgwODAwMFwiLG9saXZlZHJhYjpcIjZiOGUyM1wiLG9yYW5nZTpcImZmYTUwMFwiLG9yYW5nZXJlZDpcImZmNDUwMFwiLG9yY2hpZDpcImRhNzBkNlwiLHBhbGVnb2xkZW5yb2Q6XCJlZWU4YWFcIixwYWxlZ3JlZW46XCI5OGZiOThcIixwYWxldHVycXVvaXNlOlwiYWZlZWVlXCIscGFsZXZpb2xldHJlZDpcImRiNzA5M1wiLHBhcGF5YXdoaXA6XCJmZmVmZDVcIixwZWFjaHB1ZmY6XCJmZmRhYjlcIixwZXJ1OlwiY2Q4NTNmXCIscGluazpcImZmYzBjYlwiLHBsdW06XCJkZGEwZGRcIixwb3dkZXJibHVlOlwiYjBlMGU2XCIscHVycGxlOlwiODAwMDgwXCIscmViZWNjYXB1cnBsZTpcIjY2MzM5OVwiLHJlZDpcImYwMFwiLHJvc3licm93bjpcImJjOGY4ZlwiLHJveWFsYmx1ZTpcIjQxNjllMVwiLHNhZGRsZWJyb3duOlwiOGI0NTEzXCIsc2FsbW9uOlwiZmE4MDcyXCIsc2FuZHlicm93bjpcImY0YTQ2MFwiLHNlYWdyZWVuOlwiMmU4YjU3XCIsc2Vhc2hlbGw6XCJmZmY1ZWVcIixzaWVubmE6XCJhMDUyMmRcIixzaWx2ZXI6XCJjMGMwYzBcIixza3libHVlOlwiODdjZWViXCIsc2xhdGVibHVlOlwiNmE1YWNkXCIsc2xhdGVncmF5OlwiNzA4MDkwXCIsc2xhdGVncmV5OlwiNzA4MDkwXCIsc25vdzpcImZmZmFmYVwiLHNwcmluZ2dyZWVuOlwiMDBmZjdmXCIsc3RlZWxibHVlOlwiNDY4MmI0XCIsdGFuOlwiZDJiNDhjXCIsdGVhbDpcIjAwODA4MFwiLHRoaXN0bGU6XCJkOGJmZDhcIix0b21hdG86XCJmZjYzNDdcIix0dXJxdW9pc2U6XCI0MGUwZDBcIix2aW9sZXQ6XCJlZTgyZWVcIix3aGVhdDpcImY1ZGViM1wiLHdoaXRlOlwiZmZmXCIsd2hpdGVzbW9rZTpcImY1ZjVmNVwiLHllbGxvdzpcImZmMFwiLHllbGxvd2dyZWVuOlwiOWFjZDMyXCJ9LEc9aS5oZXhOYW1lcz1SKFkpLFc9ZnVuY3Rpb24oKXt2YXIgZT1cIlstXFxcXCtdP1xcXFxkKyU/XCIsbz1cIlstXFxcXCtdP1xcXFxkKlxcXFwuXFxcXGQrJT9cIix0PVwiKD86XCIrbytcIil8KD86XCIrZStcIilcIixyPVwiW1xcXFxzfFxcXFwoXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVxcXFxzKlxcXFwpP1wiLGk9XCJbXFxcXHN8XFxcXChdKyhcIit0K1wiKVssfFxcXFxzXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVxcXFxzKlxcXFwpP1wiO3JldHVybntyZ2I6bmV3IFJlZ0V4cChcInJnYlwiK3IpLHJnYmE6bmV3IFJlZ0V4cChcInJnYmFcIitpKSxoc2w6bmV3IFJlZ0V4cChcImhzbFwiK3IpLGhzbGE6bmV3IFJlZ0V4cChcImhzbGFcIitpKSxoc3Y6bmV3IFJlZ0V4cChcImhzdlwiK3IpLGhzdmE6bmV3IFJlZ0V4cChcImhzdmFcIitpKSxoZXgzOi9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxoZXg2Oi9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyxoZXg4Oi9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC99fSgpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHM/ZS5leHBvcnRzPWk6KHI9ZnVuY3Rpb24oKXtyZXR1cm4gaX0uY2FsbChvLHQsbyxlKSwhKHZvaWQgMCE9PXImJihlLmV4cG9ydHM9cikpKX0oKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGk7dCg2NCkscj10KDkpO3ZhciBhPXQoNTIpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDYxKSxyPXQoMTApO3ZhciBhPXQoNDkpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDU2KSxyPXQoMTEpO3ZhciBhPXQoNDQpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDYyKSxyPXQoMTIpO3ZhciBhPXQoNTApO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDY1KSxyPXQoMTMpO3ZhciBhPXQoNTMpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDYwKSxyPXQoMTQpO3ZhciBhPXQoNDgpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsaTt0KDYzKSxyPXQoMTUpO3ZhciBhPXQoNTEpO2k9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoaT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYoaT1pLm9wdGlvbnMpLGkucmVuZGVyPWEucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX21hdGVyaWFsXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oZXgsZXhwcmVzc2lvbjpcImNvbG9ycy5oZXhcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbF9faGV4XCIsc3R5bGU6e2JvcmRlckNvbG9yOmNvbG9ycy5oZXh9LGF0dHJzOntsYWJlbDpcImhleFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhleH0sb246e1wib24tY2hhbmdlXCI6b25DaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhleD1lfX19KSxcIiBcIixfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3NwbGl0XCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3RoaXJkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLnIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLnJcIn1dLGF0dHJzOntsYWJlbDpcInJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLnJ9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLnI9ZX19fSldKSxcIiBcIixfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3RoaXJkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSldKSxcIiBcIixfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3RoaXJkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmJcIn1dLGF0dHJzOntsYWJlbDpcImJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmJ9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmI9ZX19fSldKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRcIn0sW19oKFwiaW5wdXRcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6dmFsLGV4cHJlc3Npb246XCJ2YWxcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXRcIixkb21Qcm9wczp7dmFsdWU6X3ModmFsKX0sb246e2tleWRvd246aGFuZGxlS2V5RG93bixpbnB1dDpbZnVuY3Rpb24oZSl7ZS50YXJnZXQuY29tcG9zaW5nfHwodmFsPWUudGFyZ2V0LnZhbHVlKX0sdXBkYXRlXX19KSxcIiBcIixfaChcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbFwifSxbX3MobGFiZWwpXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9oKFwiZGl2XCIse1wiY2xhc3NcIjpbXCJ2dWUtY29sb3JfX2MtaHVlXCIsZGlyZWN0aW9uQ2xhc3NdfSxbX2goXCJkaXZcIix7cmVmOlwiY29udGFpbmVyXCIsc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtaHVlX19jb250YWluZXJcIixvbjp7bW91c2Vkb3duOmhhbmRsZU1vdXNlRG93bix0b3VjaG1vdmU6aGFuZGxlQ2hhbmdlLHRvdWNoc3RhcnQ6aGFuZGxlQ2hhbmdlfX0sW19oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWh1ZV9fcG9pbnRlclwiLHN0eWxlOnt0b3A6cG9pbnRlclRvcCxsZWZ0OnBvaW50ZXJMZWZ0fX0sW190KFwiZGVmYXVsdFwiLFtfbSgwKV0pXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W2Z1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1odWVfX3BpY2tlclwifSl9XX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfaChcImRpdlwiLHtyZWY6XCJjb250YWluZXJcIixzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvblwiLHN0eWxlOntiYWNrZ3JvdW5kOmJnQ29sb3J9LG9uOnttb3VzZWRvd246aGFuZGxlTW91c2VEb3dufX0sW19tKDApLFwiIFwiLF9tKDEpLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zYXR1cmF0aW9uLS1wb2ludGVyXCIsc3R5bGU6e3RvcDpwb2ludGVyVG9wLGxlZnQ6cG9pbnRlckxlZnR9fSxbX3QoXCJkZWZhdWx0XCIsW19tKDIpXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W2Z1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0td2hpdGVcIn0pfSxmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NhdHVyYXRpb24tLWJsYWNrXCJ9KX0sZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zYXR1cmF0aW9uLS1jaXJjbGVcIn0pfV19fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlclwifSxbX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlcl9faHVlLXdhcnBcIn0sW19oKFwiaHVlXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpodWVDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksXCIgXCIsX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoZXNcIn0sW19sKHN3YXRjaGVzLGZ1bmN0aW9uKGUsbyl7cmV0dXJuIF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaFwiLGF0dHJzOntcImRhdGEtaW5kZXhcIjpvfSxvbjp7Y2xpY2s6ZnVuY3Rpb24odCl7aGFuZGxlU3dDbGljayhvLGUpfX19LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2VyXCIsXCJjbGFzc1wiOntcInZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2VyLS1hY3RpdmVcIjplPT1hY3RpdmVPZmZzZXR9LHN0eWxlOntiYWNrZ3JvdW5kOlwiaHNsKFwiK2NvbG9ycy5oc2wuaCtcIiwgNTAlLCBcIisxMDAqZStcIiUpXCJ9fSldKX0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0XCJ9LFtfaChcInVsXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0X19jb2xvcnNcIn0sW19sKGRlZmF1bHRDb2xvcnMsZnVuY3Rpb24oZSl7cmV0dXJuIF9oKFwibGlcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yLWl0ZW1cIixcImNsYXNzXCI6e1widnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVtLS13aGl0ZVwiOlwiI0ZGRkZGRlwiPT09ZX0sc3R5bGU6e2JhY2tncm91bmQ6ZX0sb246e2NsaWNrOmZ1bmN0aW9uKG8pe2hhbmRsZXJDbGljayhlKX19fSxbX2goXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmU9PT1waWNrLGV4cHJlc3Npb246XCJjID09PSBwaWNrXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY29tcGFjdF9fZG90XCJ9KV0pfSldKSxcIiBcIl0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BcIn0sW19oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19oZWFkXCJ9LFtfcyhoZWFkKV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19ib2R5XCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fc2F0dXJhdGlvbi13cmFwXCJ9LFtfaChcInNhdHVyYXRpb25cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtd3JhcFwifSxbX2goXCJodWVcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGF0dHJzOntkaXJlY3Rpb246XCJ2ZXJ0aWNhbFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSxbX20oMCldKV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19jb250cm9sc1wifSxbX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzXCJ9LFtfbSgxKSxcIiBcIixfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3N3YXRjaGVzXCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3ByLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6Y29sb3JzLmhleH19KSxcIiBcIixfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3ByLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6Y3VycmVudENvbG9yfX0pXSksXCIgXCIsX20oMildKSxcIiBcIixfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWN0aW9uc1wifSxbX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2FjLWJ0blwiLG9uOntjbGljazpoYW5kbGVBY2NlcHR9fSxbXCJPS1wiXSksXCIgXCIsX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2FjLWJ0blwiLG9uOntjbGljazpoYW5kbGVDYW5jZWx9fSxbXCJDYW5jZWxcIl0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNcIn0sW19oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5oLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLmhcIn1dLGF0dHJzOntsYWJlbDpcImhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wuaH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5oPWV9fX0pLFwiIFwiLF9oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5zLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLnNcIn1dLGF0dHJzOntsYWJlbDpcInNcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wuc30sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5zPWV9fX0pLFwiIFwiLF9oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5sLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLmxcIn1dLGF0dHJzOntsYWJlbDpcInZcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wubH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5sPWV9fX0pLFwiIFwiLF9tKDMpLFwiIFwiLFwiIFwiLF9oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEucixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuclwifV0sYXR0cnM6e2xhYmVsOlwiclwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEucn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KSxcIiBcIixfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSksXCIgXCIsX2goXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5iLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5iXCJ9XSxhdHRyczp7bGFiZWw6XCJiXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5ifSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5iPWV9fX0pLFwiIFwiLF9tKDQpLFwiIFwiLFwiIFwiLF9oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhleCxleHByZXNzaW9uOlwiY29sb3JzLmhleFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19faGV4XCIsYXR0cnM6e2xhYmVsOlwiI1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhleH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhleD1lfX19KV0pXSldKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlclwifSxbX2goXCJpXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tbGVmdFwifSksX2goXCJpXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tcmlnaHRcIn0pXSl9LGZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX2xhYmVsXCJ9LFtcIm5ld1wiXSl9LGZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX2xhYmVsXCJ9LFtcImN1cnJlbnRcIl0pfSxmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19fZGl2aWRlclwifSl9LGZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19kaXZpZGVyXCJ9KX1dfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc1wiLGF0dHJzOntcImRhdGEtcGlja1wiOnBpY2t9fSxbX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzX19ib3hcIn0sW19sKGRlZmF1bHRDb2xvcnMsZnVuY3Rpb24oZSl7cmV0dXJuIF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc19fY29sb3ItZ3JvdXBcIn0sW19sKGUsZnVuY3Rpb24oZSl7cmV0dXJuIF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc19fY29sb3ItaXRcIixzdHlsZTp7YmFja2dyb3VuZDplfSxhdHRyczp7XCJkYXRhLWNvbG9yXCI6ZX0sb246e2NsaWNrOmZ1bmN0aW9uKG8pe2hhbmRsZXJDbGljayhlKX19fSxbX2goXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmU9PXBpY2ssZXhwcmVzc2lvbjpcImMgPT0gcGlja1wifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzX19waWNrXCJ9LFtfaChcInN2Z1wiLHthdHRyczp7c3R5bGU6XCJ3aWR0aDogMjRweDsgaGVpZ2h0OjI0cHg7XCIsdmlld0JveDpcIjAgMCAyNCAyNFwifX0sW19oKFwicGF0aFwiLHthdHRyczp7ZDpcIk0yMSw3TDksMTlMMy41LDEzLjVMNC45MSwxMi4wOUw5LDE2LjE3TDE5LjU5LDUuNTlMMjEsN1pcIn19KV0pXSldKX0pXSl9KV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lXCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19zYXR1cmF0aW9uLXdyYXBcIn0sW19oKFwic2F0dXJhdGlvblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksXCIgXCIsX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fY2hyb21lLWJvZHlcIn0sW19oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2NvbnRyb2xzXCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19jb2xvci13cmFwXCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19hY3RpdmUtY29sb3JcIixzdHlsZTp7YmFja2dyb3VuZDphY3RpdmVDb2xvcn19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnNcIn0sW19oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2h1ZS13cmFwXCJ9LFtfaChcImh1ZVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksXCIgXCIsX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fYWxwaGEtd3JhcFwifSxbX2goXCJhbHBoYVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSldKV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkcy13cmFwXCJ9LFtfaChcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6MD09PWZpZWxkc0luZGV4LGV4cHJlc3Npb246XCJmaWVsZHNJbmRleCA9PT0gMFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzXCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2goXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaGV4LGV4cHJlc3Npb246XCJjb2xvcnMuaGV4XCJ9XSxhdHRyczp7bGFiZWw6XCJoZXhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oZXh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oZXg9ZX19fSldKV0pLFwiIFwiLF9oKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZToxPT09ZmllbGRzSW5kZXgsZXhwcmVzc2lvbjpcImZpZWxkc0luZGV4ID09PSAxXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHNcIn0sW19oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLnIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLnJcIn1dLGF0dHJzOntsYWJlbDpcInJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLnJcbn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSldKSxcIiBcIixfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2goXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5iLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5iXCJ9XSxhdHRyczp7bGFiZWw6XCJiXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5ifSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5iPWV9fX0pXSksXCIgXCIsX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmEsZXhwcmVzc2lvbjpcImNvbG9ycy5hXCJ9XSxhdHRyczp7bGFiZWw6XCJhXCIsXCJhcnJvdy1vZmZzZXRcIjouMDEsbWF4OjF9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuYX0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmE9ZX19fSldKV0pLFwiIFwiLF9oKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZToyPT09ZmllbGRzSW5kZXgsZXhwcmVzc2lvbjpcImZpZWxkc0luZGV4ID09PSAyXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHNcIn0sW19oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wuaCxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5oXCJ9XSxhdHRyczp7bGFiZWw6XCJoXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLmh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wuaD1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wucyxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5zXCJ9XSxhdHRyczp7bGFiZWw6XCJzXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLnN9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wucz1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wubCxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5sXCJ9XSxhdHRyczp7bGFiZWw6XCJsXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLmx9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wubD1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5hLGV4cHJlc3Npb246XCJjb2xvcnMuYVwifV0sYXR0cnM6e2xhYmVsOlwiYVwiLFwiYXJyb3ctb2Zmc2V0XCI6LjAxLG1heDoxfSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmF9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5hPWV9fX0pXSldKSxcIiBcIixcIiBcIixfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX190b2dnbGUtYnRuXCIsb246e2NsaWNrOnRvZ2dsZVZpZXdzfX0sW19oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ljb25cIn0sW19oKFwic3ZnXCIse2F0dHJzOntzdHlsZTpcIndpZHRoOjI0cHg7IGhlaWdodDoyNHB4XCIsdmlld0JveDpcIjAgMCAyNCAyNFwifSxvbjp7bW91c2VvdmVyOnNob3dIaWdobGlnaHQsbW91c2VlbnRlcjpzaG93SGlnaGxpZ2h0LG1vdXNlb3V0OmhpZGVIaWdobGlnaHR9fSxbX2goXCJwYXRoXCIse2F0dHJzOntmaWxsOlwiIzMzM1wiLGQ6XCJNMTIsMTguMTdMOC44MywxNUw3LjQyLDE2LjQxTDEyLDIxTDE2LjU5LDE2LjQxTDE1LjE3LDE1TTEyLDUuODNMMTUuMTcsOUwxNi41OCw3LjU5TDEyLDNMNy40MSw3LjU5TDguODMsOUwxMiw1LjgzWlwifX0pXSldKSxcIiBcIixfaChcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6aGlnaGxpZ2h0LGV4cHJlc3Npb246XCJoaWdobGlnaHRcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ljb24taGlnaGxpZ2h0XCJ9KV0pLFwiIFwiXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaFwifSxbX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fc2F0dXJhdGlvbi13cmFwXCJ9LFtfaChcInNhdHVyYXRpb25cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2NvbnRyb2xzXCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19zbGlkZXJzXCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19odWUtd3JhcFwifSxbX2goXCJodWVcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2FscGhhLXdyYXBcIn0sW19oKFwiYWxwaGFcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pXSksXCIgXCIsX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fY29sb3Itd3JhcFwifSxbX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fYWN0aXZlLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6YWN0aXZlQ29sb3J9fSldKV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkXCJ9LFtfaChcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tZG91YmxlXCJ9LFtfaChcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oZXgsZXhwcmVzc2lvbjpcImNvbG9ycy5oZXhcIn1dLGF0dHJzOntsYWJlbDpcImhleFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhleH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhleD1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEucixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuclwifV0sYXR0cnM6e2xhYmVsOlwiclwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEucn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuZyxleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuZ1wifV0sYXR0cnM6e2xhYmVsOlwiZ1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuZ30sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuZz1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuYixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuYlwifV0sYXR0cnM6e2xhYmVsOlwiYlwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuYn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuYj1lfX19KV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19oKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmEsZXhwcmVzc2lvbjpcImNvbG9ycy5hXCJ9XSxhdHRyczp7bGFiZWw6XCJhXCIsXCJhcnJvdy1vZmZzZXRcIjouMDEsbWF4OjF9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuYX0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmE9ZX19fSldKV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX3ByZXNldHNcIn0sW19sKHByZXNldENvbG9ycyxmdW5jdGlvbihlKXtyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fcHJlc2V0cy1jb2xvclwiLHN0eWxlOntiYWNrZ3JvdW5kOmV9LG9uOntjbGljazpmdW5jdGlvbihvKXtoYW5kbGVQcmVzZXQoZSl9fX0pfSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFcIn0sW19oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19jaGVja2JvYXJkLXdyYXBcIn0sW19oKFwiY2hlY2tib2FyZFwiKV0pLFwiIFwiLF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19ncmFkaWVudFwiLHN0eWxlOntiYWNrZ3JvdW5kOmdyYWRpZW50Q29sb3J9fSksXCIgXCIsX2goXCJkaXZcIix7cmVmOlwiY29udGFpbmVyXCIsc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFfX2NvbnRhaW5lclwiLG9uOnttb3VzZWRvd246aGFuZGxlTW91c2VEb3duLHRvdWNobW92ZTpoYW5kbGVDaGFuZ2UsdG91Y2hzdGFydDpoYW5kbGVDaGFuZ2V9fSxbX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFfX3BvaW50ZXJcIixzdHlsZTp7bGVmdDoxMDAqY29sb3JzLmErXCIlXCJ9fSxbX3QoXCJkZWZhdWx0XCIsW19tKDApXSldKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9oKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19waWNrZXJcIn0pfV19fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2goXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtY2hlY2tlcmJvYXJkXCIsc3R5bGU6e2JhY2tncm91bmQ6YmdTdHlsZX19KX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjEpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyMik7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDIzKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjQpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyNSk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI2KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjcpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyOCk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI5KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMzApO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgzMSk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDMyKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX1dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtY29sb3IvZGlzdC92dWUtY29sb3IubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDx2aWRlbyByZWY9XCJwbGF5ZXJcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luXCJcbiAgICAgICAgICAgICAgIGNvbnRyb2xzIHByZWxvYWQ9XCJhdXRvXCJcbiAgICAgICAgICAgICAgIDpwb3N0ZXI9XCJwb3N0ZXJcIlxuICAgICAgICAgICAgICAgOmRhdGEtc2V0dXA9XCJzdHJTb3VyY2VcIlxuICAgICAgICA+PC92aWRlbz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gICAgI3ZpZGVvLWNhbnZhcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3N0ZXI6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0clNvdXJjZSgpe1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNvdXJjZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuICAgICAgICAgICAgdGhpcy5pbml0UGxheWVyKHRoaXMuc291cmNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYXBpKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdFBsYXllcihzb3VyY2Upe1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnNvdXJjZSk7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZmx1aWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLnNvdXJjZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgIHRlY2hPcmRlcjogWyd5b3V0dWJlJ10sXG4gICAgICAgICAgICAgICAgICAgIHBsYXliYWNrUmF0ZXM6IFswLjI1LCAwLjUsIDEsIDEuNSwgMl0sXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQcm9ncmVzczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBhYkxvb3BQbHVnaW46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wSWZCZWZvcmVTdGFydDogZmFsc2UsIC8vYWxsb3cgdmlkZW8gdG8gcGxheSBub3JtYWxseSBiZWZvcmUgdGhlIGxvb3Agc2VjdGlvbj8gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb29wSWZBZnRlckVuZDogdHJ1ZSwgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQWZ0ZXJMb29waW5nOiBmYWxzZSwgICAgICAgLy9pZiB0cnVlLCBhZnRlciBsb29waW5nIHZpZGVvIHdpbGwgcGF1c2UuIERlZmF1bHRzIHRvIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VCZWZvcmVMb29waW5nOiBmYWxzZSwgICAgICAvL2lmIHRydWUsIGJlZm9yZSBsb29waW5nIHZpZGVvIHdpbGwgcGF1c2UuIERlZmF1bHRzIHRvIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uczogZmFsc2UsICAvL2RlZmF1bHRzIHRvIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0LnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wbHVnaW5zLmRuY29mZnNldCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0T2Zmc2V0OiB0aGlzLm9mZnNldC5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9mZnNldDogdGhpcy5vZmZzZXQuZW5kXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKHRoaXMuJHJlZnMucGxheWVyLCBjb25maWcsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFseWVyUmVhZHknKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3BsYXllclJlYWR5JywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0UGxheWVyJywgdGhpcy5wbGF5ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXliYWNrUmF0ZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Q3VycmVudFRpbWUnLCB0aGlzLnBsYXllci5jdXJyZW50VGltZSgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBsYXllci52dWU/NGNkOTMyNTgiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBpZD1cImluc3BlY3RvckJveFwiIGNsYXNzPVwiYm94IGJveC1zb2xpZCBjb2xsYXBzZWQtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICA8IS0tIHRvb2xzIGJveCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0IGJveC10b29sc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGlkPVwiaW5zcGVjdG9yVG9vZ2xlclwiIHYtb246Y2xpY2s9XCJ0b29nbGVPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAvLiB0b29scyAtLT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5pbnNwZWN0b3InKX19XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGluc3BlY3Rvci1pbmZvXCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCInYmFja2dyb3VuZDonK2JhY2tncm91bmQrJzsgaGVpZ2h0OjIwcHg7IHdpZHRoOjIwcHg7bWFyZ2luLXRvcDogMXB4OyBtYXJnaW4tcmlnaHQ6NXB4J1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm8tLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+e3tzdGFydH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+e3tlbmR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbGJveC1jb250cm9scyBjb250cm9sLWluc3BlY3Rvci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiB2LW9uOmNsaWNrPVwiY3JlYXRlQWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJyZWNvcmRpbmdUb3VjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX2FjdGlvbicpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFcIiA6Y2xhc3M9XCJ7J2ZhLXBsYXknOiFwbGF5aW5nLCdmYS1wYXVzZSB0ZXh0LWRhbmdlcic6cGxheWluZ31cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGxheWluZz8kdCgnc2NvdXRpbmdzLnBhdXNlJyk6JHQoJ3Njb3V0aW5ncy5wbGF5Jyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cImJhY2t3YXJkKDEwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtZmFzdC1iYWNrd2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJiYWNrd2FyZCg1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtYmFja3dhcmRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJmb3J3YXJkKDUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1mb3J3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwiZm9yd2FyZCgxMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWZhc3QtZm9yd2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInBsYXliYWNrUmF0ZSgwLjI1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjI1IHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheWJhY2tSYXRlKDAuNSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41IHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheWJhY2tSYXRlKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMS41KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdGhsZXRlLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBuby1wYWRkaW5nLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRobGV0ZS1tZW51LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmxlZnRfYWN0aW9ucycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5yaWdodF9hY3Rpb25zJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJ0b3VjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgbm8tcGFkZGluZy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhZ3MgOnRhZ3M9XCJ0YWdzTGVmdFwiIDpzZWxlY3RlZD1cImFjdGlvbi5sZWZ0VGFnc1wiIHR5cGU9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOnRhZy1kZWxldGVkPVwidGFnRGVsZXRlZExlZnRcIiB2LW9uOnRhZy1zZWxlY3RlZD1cInRhZ1NlbGVjdGVkTGVmdFwiPjwvdGFncz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhZ3MgOnRhZ3M9XCJ0YWdzUmlnaHRcIiA6c2VsZWN0ZWQ9XCJhY3Rpb24ucmlnaHRUYWdzXCIgdHlwZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOnRhZy1kZWxldGVkPVwidGFnRGVsZXRlZFJpZ2h0XCIgdi1vbjp0YWctc2VsZWN0ZWQ9XCJ0YWdTZWxlY3RlZFJpZ2h0XCI+PC90YWdzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD0naW5zcGVjdG9yJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLmluc3BlY3Rvci1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIC5pbnNwZWN0b3ItaW5mby0tdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYXRobGV0ZS1tZW51IHtcblxuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmF0aGxldGUtbWVudS10aXRsZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXRobGV0ZS1tZW51LWxlZnQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNlMGU5O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXRobGV0ZS1tZW51LXJpZ2h0IHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtkaXNwYXRjaCwgZ2V0U3RhdGUsIHN1YnNjcmliZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQgaW5zcGVjdG9yU2tldGNoIGZyb20gJy4uL3NrZXRjaC9pbnNwZWN0b3JTa2V0Y2gnXG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuICAgIGltcG9ydCBBY3Rpb24gZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24nXG4gICAgaW1wb3J0IHRhZ3MgZnJvbSAnLi4vdGFncy90YWdzLnZ1ZSc7XG4gICAgaW1wb3J0IGNvbW1vblNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvY29tbW9uL2NvbW1vblNlcnZpY2UnXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IG51bGwsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW10sXG4gICAgICAgICAgICAgICAgcmVjb3JkaW5nVG91Y2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0VGFnczogW10sXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0VGFnczogW10sXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzbFwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcImxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHN2XCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwidlwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFnc0xlZnQ6IFtdLFxuICAgICAgICAgICAgICAgIHRhZ3NSaWdodDogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwbGF5aW5nOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluLCB1dWlkTWl4aW5dLFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ29wZW4nOiBmdW5jdGlvbiAob3Blbiwgb2xkT3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICB0YWdzXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIHN1YnNjcmliZSh0aGlzLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnc2V0U2VsZWN0ZWRUb3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2g7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLnRvdWNoLmFjdGlvbnMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnc2V0U2VsZWN0ZWRBY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09ICdyZWNvcmRpbmdUb3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRpbmdUb3VjaCA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnJlY29yZGluZ1RvdWNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb21tb25TZXJ2aWNlLmdldFRhZ3MoKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3NMZWZ0ID0gXy5jbG9uZURlZXAocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWdzUmlnaHQgPSBfLmNsb25lRGVlcChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0sIChlcnJvcik9PiB7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBidXMuJG9uKCd0b29nbGUtaW5zcGVjdG9yJywgKGlzT3Blbik9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzT3BlbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgICAgICAgICAgICAgICAgJC5BZG1pbkxURS5ib3hXaWRnZXQuY29sbGFwc2UoJCgnI2luc3BlY3RvclRvb2dsZXInKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3BlbiAhPSBpc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuQWRtaW5MVEUuYm94V2lkZ2V0LmNvbGxhcHNlKCQoJyNpbnNwZWN0b3JUb29nbGVyJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGlzT3BlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdGl0bGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3VjaCA/IHRoaXMudG91Y2gudGV4dCA6ICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG91Y2ggPyBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guc3RhcnQpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3VjaCA/IFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5lbmQpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG91Y2ggPyB0aGlzLnRvdWNoLmNvbG9yLmhleCA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIG5ldyBwNShpbnNwZWN0b3JTa2V0Y2gpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b29nbGVPcGVuKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5KCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0QWN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZUFjdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSArIDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaWRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kaXNhYmxlUHJvZ3Jlc3MuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3VjaC5hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnRvdWNoLmFjdGlvbnNbdGhpcy50b3VjaC5hY3Rpb25zLmxlbmd0aCAtIDFdLmVuZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnRvdWNoLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgQWN0aW9uKE1hdGguZmxvb3Ioc3RhcnQpLCBNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksIF8uY2xvbmVEZWVwKHRoaXMudG91Y2guY29sb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZEFjdGlvbicsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRBY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnU2VsZWN0ZWRMZWZ0KHRhZyl7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnLnV1aWQgPSB0aGlzLmdlbmVyYXRlVVVJRCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5sZWZ0VGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ1NlbGVjdGVkUmlnaHQodGFnKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0YWcudXVpZCA9IHRoaXMuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLnJpZ2h0VGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ0RlbGV0ZWRSaWdodCh0YWcpe1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWdJbmRleCA9IF8uZmluZEluZGV4KHRoaXMuYWN0aW9uLnJpZ2h0VGFncywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnV1aWQgPT0gdGFnLnV1aWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5yaWdodFRhZ3Muc3BsaWNlKHRhZ0luZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnRGVsZXRlZExlZnQodGFnKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnSW5kZXggPSBfLmZpbmRJbmRleCh0aGlzLmFjdGlvbi5sZWZ0VGFncywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnV1aWQgPT0gdGFnLnV1aWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5sZWZ0VGFncy5zcGxpY2UodGFnSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0YXJ0QWN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uZW5kID0gTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGVBY3Rpb25zKHRoaXMuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nQWN0aW9uJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGVsc2UgaWYgKE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSA+IHRoaXMudG91Y2guZW5kKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XG4gICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy50b3VjaC5lbmQpO1xuICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRBY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5vZmYoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRBY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKVxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVBY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QWN0aW9uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheWJhY2tSYXRlKHJhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGxheWJhY2tSYXRlKHJhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcndhcmQocyl7XG4gICAgICAgICAgICAgICAgdmFyIGZvcndhcmQgPSB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkgKyBzO1xuICAgICAgICAgICAgICAgIGlmIChmb3J3YXJkIDw9IHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKGZvcndhcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kdXJhdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFja3dhcmQocyl7XG4gICAgICAgICAgICAgICAgdmFyIGJhY2t3YXJkID0gdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpIC0gcztcbiAgICAgICAgICAgICAgICBpZiAoYmFja3dhcmQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKGJhY2t3YXJkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbnNwZWN0b3IudnVlPzIyZDQxZTg0IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgaWQ9XCJ0aW1lbGluZUJveFwiIGNsYXNzPVwiYm94IGJveC1zb2xpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgPCEtLSB0b29scyBib3ggLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodCBib3gtdG9vbHNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2sucHJldmVudD1cInpvb21JblwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWm9vbSBJblwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaC1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljay5wcmV2ZW50PVwiem9vbU91dFwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJab29tIE91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaC1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBpZD1cInRpbWVsaW5lVG9vZ2xlclwiIHYtb246Y2xpY2s9XCJ0b29nbGVPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy4gdG9vbHMgLS0+XG5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50aW1lbGluZScpfX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3RpbWVsaW5lJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQgdGltZWxpbmVTa2V0Y2ggZnJvbSAnLi4vc2tldGNoL3RpbWVsaW5lU2tldGNoJ1xuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBsb2NhbGVzOiBzY291dGluZ3NMb2NhbGVzLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdvcGVuJzogZnVuY3Rpb24gKG9wZW4sIG9sZE9wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgICAgICBwLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICBidXMuJG9uKCd0b29nbGUtdGltZWxpbmUnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICAgICAgICAgICQuQWRtaW5MVEUuYm94V2lkZ2V0LmNvbGxhcHNlKCQoJyN0aW1lbGluZVRvb2dsZXInKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB3aW5kb3cucCA9IG5ldyBwNSh0aW1lbGluZVNrZXRjaCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvb2dsZU9wZW4oKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvb21JbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgKyAxKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbU91dCgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciA+IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRpbWVsaW5lLnZ1ZT80NjcyYjBiOSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YWRtaW4taGVhZGVyIDp0aXRsZT1cInRpdGxlXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L2FkbWluLWhlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cIiFwbGF5ZXJSZWFkeVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkxvYWRpbmcuLi4uPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpcy1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiBwbGF5ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkbmMtcGxheWVyIHYtaWY9XCJpbml0aWFsaXplZFwiIDpzb3VyY2U9XCJzb3VyY2VcIiByZWY9XCJwbGF5ZXJcIj48L2RuYy1wbGF5ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiB0b3VjaGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8dG91Y2hlcy1saXN0IHYtaWY9XCJwbGF5ZXJSZWFkeVwiPjwvdG91Y2hlcy1saXN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbGJveC1jb250cm9scyBjb250cm9sLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2LW9uOmNsaWNrPVwic3RhcnRUb3VjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJzdGFydGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYVwiIDpjbGFzcz1cInsnZmEtcGxheSc6IXN0YXJ0ZWQsJ2ZhLWNpcmNsZSB0ZXh0LWRhbmdlcic6c3RhcnRlZH1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c3RhcnRlZD8kdCgnc2NvdXRpbmdzLnJlY29yZGluZycpOiR0KCdzY291dGluZ3Muc3RhcnRfdG91Y2gnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiA6ZGlzYWJsZWQ9XCIhc3RhcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmNsaWNrPVwiZW5kVG91Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLXN0b3BcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmRfdG91Y2gnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJ0b29nbGVUaW1lbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b29nbGVfdGltZWxpbmUnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwidG9vZ2xlSW5zcGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b29nbGVfaW5zcGVjdG9yJyl9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5idG4tZ3JvdXAgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxlZGl0LXRvdWNoLWZvcm0gdi1pZj1cImVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmNhbmNlbC1uZXctdG91Y2g9XCJjYW5jZWxFZGl0VG91Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aW5pdC10b3VjaD1cInRvdWNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjphZGQtbmV3LXRvdWNoPVwic2F2ZUVkaXRUb3VjaFwiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCI+PC9lZGl0LXRvdWNoLWZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5zcGVjdG9yIHYtaWY9XCJwbGF5ZXJSZWFkeVwiIHJlZj1cImluc3BlY3RvclwiIDpwbGF5aW5nPVwicGxheWluZ1wiPjwvaW5zcGVjdG9yPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aW1lbGluZSB2LWlmPVwicGxheWVyUmVhZHlcIj48L3RpbWVsaW5lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwic2F2ZVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiPiB7eyR0KCdmb3Jtcy5zYXZlJyl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2s9XCJjYW5jZWxcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1wiPnt7JHQoJ2Zvcm1zLmJhY2snKX19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGRuY1BsYXllciBmcm9tICdiYXNlL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWUnO1xuICAgIGltcG9ydCBUb3VjaCBmcm9tICcuL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2gnO1xuICAgIGltcG9ydCB7c2V0U3RhdGUsIHNldEFjdGlvbnMsIGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCB7YWN0aW9uc30gZnJvbSAnLi9zdG9yZXMvYWN0aW9ucydcbiAgICBpbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0b3Jlcy9zdG9yZSdcbiAgICBpbXBvcnQgVmVlVmFsaWRhdGUsIHtWYWxpZGF0b3J9IGZyb20gJ3ZlZS12YWxpZGF0ZSc7XG4gICAgaW1wb3J0IG5ld1RvdWNoRm9ybSBmcm9tICcuL2Zvcm1zL25ld1RvdWNoRm9ybS52dWUnO1xuICAgIGltcG9ydCBlZGl0VG91Y2hGb3JtIGZyb20gJy4vZm9ybXMvZWRpdFRvdWNoRm9ybS52dWUnO1xuICAgIGltcG9ydCB0b3VjaGVzTGlzdCBmcm9tICcuL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZSc7XG4gICAgaW1wb3J0IHRpbWVsaW5lIGZyb20gJy4vY2FudmFzL3RpbWVsaW5lLnZ1ZSc7XG4gICAgaW1wb3J0IGluc3BlY3RvciBmcm9tICcuL2NhbnZhcy9pbnNwZWN0b3IudnVlJztcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnO1xuICAgIGltcG9ydCBhZG1pbkhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xuICAgIGltcG9ydCBzY291dGluZ1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZSdcbiAgICBpbXBvcnQgc2NvdXRpbmdUb3VjaFNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nVG91Y2hTZXJ2aWNlJ1xuICAgIGltcG9ydCBBY3Rpb24gZnJvbSAnLi9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbidcbiAgICBpbXBvcnQgdXVpZE1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXG4gICAgaW1wb3J0IGVycm9yUHJlc2VudGVyIGZyb20gJ2Jhc2UvbWl4aW5zL2FqYXgvZXJyb3JQcmVzZW50ZXInXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIGRuY1BsYXllcixcbiAgICAgICAgICAgIG5ld1RvdWNoRm9ybSxcbiAgICAgICAgICAgIGVkaXRUb3VjaEZvcm0sXG4gICAgICAgICAgICB0b3VjaGVzTGlzdCxcbiAgICAgICAgICAgIHRpbWVsaW5lLFxuICAgICAgICAgICAgaW5zcGVjdG9yLFxuICAgICAgICAgICAgYWRtaW5IZWFkZXJcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluLCB1dWlkTWl4aW4sIGVycm9yUHJlc2VudGVyXSxcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2NvdXRpbmc6IHt9LFxuICAgICAgICAgICAgICAgIHNvdXJjZToge30sXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsYXllclJlYWR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaDoge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZXhcIjogXCIjREJERjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBicmVhZGNydW1icygpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uaG9tZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zY291dGluZ3MvbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnNjb3V0aW5ncydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zY291dGluZ3MvJyArIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCArICcvdG91Y2hlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLnRvdWNoZXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kdCgnYWRtaW4uc2NvdXRpbmdzJykgKyAnICcgKyB0aGlzLnNjb3V0aW5nLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy52bSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHdpbmRvd1snc291cmNlJ107XG4gICAgICAgICAgICBzZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBzZXRBY3Rpb25zKGFjdGlvbnMpO1xuICAgICAgICAgICAgd2luZG93LmdldFN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdGF0ZSgnKicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN1YnNjcmliZSh0aGlzLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAncGxheWVyUmVhZHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJSZWFkeSBzdWJzY3JpcHQnLCB0aGlzLnBsYXllclJlYWR5KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0U3RhdGUoJyonKS5wbGF5ZXJSZWFkeSAmJiAhdGhpcy5wbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJSZWFkeSA9IGdldFN0YXRlKCcqJykucGxheWVyUmVhZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkU2NvdXRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjb3V0aW5nU2VydmljZS5zaG93KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvdXRpbmcgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RlY2hPcmRlcic6IFsneW91dHViZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzb3VyY2VzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6IFwidmlkZW8veW91dHViZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NyYyc6IHJlc3BvbnNlLmRhdGEudmlkZW9TcmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnVzLiRvbignZWRpdC10b3VjaCcsICh0b3VjaCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0VG91Y2gobnVsbCwgdG91Y2gpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1cy4kb24oJ3JlbW92ZS10b3VjaCcsICh0b3VjaCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUb3VjaCh0b3VjaClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcblxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVEZXN0cm95KCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVzdHJveSBob29rJyk7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vZmYoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbG9hZFNjb3V0aW5nKCl7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIF8uZWFjaCh0aGlzLnNjb3V0aW5nLnRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0ID0gbmV3IFRvdWNoKHRvdWNoLnN0YXJ0LCB0b3VjaC5lbmQsIHRvdWNoLnRpdGxlLCB0b3VjaC5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdhZGRUb3VjaCcsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgQWN0aW9uKGFjdGlvbi5zdGFydCwgYWN0aW9uLmVuZCwgYWN0aW9uLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdhZGRBY3Rpb24nLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChhY3Rpb24ubGVmdFRhZ3MsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcudXVpZCA9IHNlbGYuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZExlZnRUYWcnLCB0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFjdGlvbi5yaWdodFRhZ3MsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcudXVpZCA9IHNlbGYuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFJpZ2h0VGFnJywgdGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIG51bGwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigncGxheScsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkub24oJ3BhdXNlJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigndGltZXVwZGF0ZScsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0ucHJldmlvdXMgaW5zdGFuY2VvZiBUb3VjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG91Y2ggPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzWzBdLnByZXZpb3VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0uY3VycmVudCBpbnN0YW5jZW9mIFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaCA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0uY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCB0b3VjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVBY3Rpb25SZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZUFjdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLnByZXZpb3VzIGluc3RhbmNlb2YgQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLnByZXZpb3VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sbGlkZUFjdGlvblJlc3VsdC5jb2xsaWRlQWN0aW9uc1swXS5jdXJyZW50IGluc3RhbmNlb2YgQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0VG91Y2goKXtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksXG4gICAgICAgICAgICAgICAgICAgIGVuZDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSArIDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCh0aGlzLiR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgVG91Y2goTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSwgTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSwgdGhpcy50b3VjaC50ZXh0LCB0aGlzLnRvdWNoLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ1RvdWNoJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9vZ2xlSW5zcGVjdG9yKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuaW5zcGVjdG9yLnN0YXJ0QWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IGFjdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkub24oJ3RpbWV1cGRhdGUnLCBzZWxmLm9uU3RhcnRUb3VjaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0YXJ0VG91Y2goKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nVG91Y2gnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydFRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaC5lbmQgPSBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnc2NvdXRpbmdzLnRvdWNoZXNfY2FudF9vdmVybGFwJykpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kVG91Y2goKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdUb3VjaCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vZmYoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRUb3VjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKVxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuaW5zcGVjdG9yLmVuZEFjdGlvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVkaXRUb3VjaChldmVudCwgdG91Y2gpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSB0b3VjaDtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVOZXdUb3VjaCh0b3VjaCl7XG4gICAgICAgICAgICAgICAgdmFyIGFjdCA9IG5ldyBUb3VjaCh0b3VjaC5zdGFydCwgdG91Y2guZW5kLCB0b3VjaC50ZXh0LCB0b3VjaC5jb2xvcik7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2goKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWxOZXdUb3VjaCgpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUb3VjaCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhdmVFZGl0VG91Y2godG91Y2gpe1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdlZGl0VG91Y2gnLCB0b3VjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsRWRpdFRvdWNoKHRvdWNoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldFRvdWNoKCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29nbGVUaW1lbGluZSgpe1xuICAgICAgICAgICAgICAgIGJ1cy4kZW1pdCgndG9vZ2xlLXRpbWVsaW5lJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vZ2xlSW5zcGVjdG9yKGlzT3Blbil7XG4gICAgICAgICAgICAgICAgYnVzLiRlbWl0KCd0b29nbGUtaW5zcGVjdG9yJywgaXNPcGVuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVUb3VjaCh0b3VjaClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlbW92ZVRvdWNoJywgdG91Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNhdmUoKXtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hlcyA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnRvdWNoZXM7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSB0aGlzLmZvcm1hdFNvY3V0aW5nKHRvdWNoZXMpO1xuICAgICAgICAgICAgICAgIHNjb3V0aW5nVG91Y2hTZXJ2aWNlLnVwZGF0ZSh0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsIHt0b3VjaGVzOiB0b3VjaGVzfSwgKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5zdWNjZXNzVG9hc3QocmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzY291dGluZ3MubGlzdCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihyZXNwb25zZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy5saXN0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0U29jdXRpbmcodG91Y2hlcyl7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICBfLmVhY2godG91Y2hlcywgKHRvdWNoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFUb3VjaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7J2VzJzogdG91Y2gudGV4dCwgJ2VuJzogdG91Y2gudGV4dH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogdG91Y2guc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHRvdWNoLmVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0b3VjaC5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0b3VjaC5lbmQgLSB0b3VjaC5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmVhY2godG91Y2guYWN0aW9ucywgKGFjdGlvbik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogYWN0aW9uLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogYWN0aW9uLmVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYWN0aW9uLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBhY3Rpb24uZW5kIC0gYWN0aW9uLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFRhZ3M6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYWN0aW9uLmxlZnRUYWdzLCAodGFnKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVRhZyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWcuaWQgPSB0YWcuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5kcm9wZG93biA9IHRhZy5kcm9wZG93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnLmRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWcub3B0aW9uID0ge2lkOiB0YWcub3B0aW9uLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQWN0aW9uLmxlZnRUYWdzLnB1c2goZGF0YVRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFjdGlvbi5yaWdodFRhZ3MsICh0YWcpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVGFnID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5pZCA9IHRhZy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLmRyb3Bkb3duID0gdGFnLmRyb3Bkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcuZHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5vcHRpb24gPSB7aWQ6IHRhZy5vcHRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFBY3Rpb24ucmlnaHRUYWdzLnB1c2goZGF0YVRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUb3VjaC5hY3Rpb25zLnB1c2goZGF0YUFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZGF0YVRvdWNoKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlZGl0LnZ1ZT82YTJlOGNjYyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy10aXRsZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50aXRsZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoLnRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cInRvdWNoLnRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2gudGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVwiPnt7IGVycm9ycy5maXJzdCgndG91Y2gudGV4dCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy10aXRsZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5jb2xvcicpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XCJ0b3VjaC5jb2xvclwiIEBjaGFuZ2UtY29sb3I9XCJvbkNoYW5nZUNvbG9yXCI+PC9jb21wYWN0LXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXN0YXJ0XCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnN0YXJ0Jyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2guc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJ0b3VjaC5zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cInJlcXVpcmVkfG51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC5zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctc3RhcnQtZm10XCIgbmFtZT1cIm5ldy1zdGFydC1mbXRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInN0YXJ0Rm10XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLnN0YXJ0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LWVuZFwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmQnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2guZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwidG91Y2guZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIkVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2guZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1lbmQtZm10XCIgbmFtZT1cIm5ldy1lbmQtZm10XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlbmRGbXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImNvbGxpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGZhIGZhLWJhblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfd2l0aCcpfX06XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiY29sbGlkZVRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cImNvbGxpZGVUb3VjaC5wcmV2aW91cy5pZCAhPSB0b3VjaC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJyx7IHRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLnN0YXJ0KSxlbmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuZW5kKX0pfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cImNvbGxpZGVUb3VjaC5jdXJyZW50LmlkICE9IHRvdWNoLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLHsgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2guY3VycmVudC50ZXh0LHN0YXJ0OnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LnN0YXJ0KSxlbmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5lbmQpfSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiZW5kSW52YWxpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gZmEgZmEtYmFuXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2Vycm9yJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2VuZF9ncmVhdGVyJyl9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPnt7JHQoJ3Njb3V0aW5ncy5zYXZlJyl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJjbG9zZVwiPnt7JHQoJ3Njb3V0aW5ncy5jYW5jZWwnKX19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQge0NvbXBhY3R9IGZyb20gJ3Z1ZS1jb2xvcic7XG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpbml0VG91Y2g6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IDUxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjoge30sXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW2NvbGxpZGVNaXhpbl0sXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAndG91Y2guc3RhcnQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlcztcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IFtdLFxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0YXJ0Rm10KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRGbXQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0aW9uRW5kKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ2NvbXBhY3QtcGlja2VyJzogQ29tcGFjdCxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwtbmV3LXRvdWNoJywgdGhpcy50b3VjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2VDb2xvcih2YWwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guY29sb3IgPSB2YWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN1Ym1pdCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5hbnkoKSkge1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG91Y2guc3RhcnQgPj0gdGhpcy50b3VjaC5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkLW5ldy10b3VjaCcsIHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWRpdFRvdWNoRm9ybS52dWU/NTc3YjcxODIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgdi1vbjpzdWJtaXQucHJldmVudD1cIm9uU3VibWl0XCIgY2xhc3M9XCJmb3JtLWhvcml6b250YWwgZm9ybS10b3VjaFwiIHYtaWY9XCJvcGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy10aXRsZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXRpdGxlXCIgbmFtZT1cIm5ldy10aXRsZVwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwidG91Y2gudGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXM9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XCJ0b3VjaC5jb2xvclwiIEBjaGFuZ2UtY29sb3I9XCJvbkNoYW5nZUNvbG9yXCI+PC9jb21wYWN0LXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXN0YXJ0XCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgKHNlYylcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1zdGFydFwiIG5hbWU9XCJuZXctc3RhcnRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwidG91Y2guc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcnVsZXM9XCJyZXF1aXJlZHxudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2guc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0LWZtdFwiIG5hbWU9XCJuZXctc3RhcnQtZm10XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzdGFydEZtdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC5zdGFydCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIDpjbGFzcz1cInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guZW5kJykgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy1lbmRcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQoc2VjKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LWVuZFwiIG5hbWU9XCJuZXctZW5kXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cInRvdWNoLmVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cInJlcXVpcmVkfG51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXM9XCJFbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLmVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctZW5kLWZtdFwiIG5hbWU9XCJuZXctZW5kLWZtdFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW5kRm10XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC5lbmQnKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJjb2xsaWRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj7DlzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVwiaWNvbiBmYSBmYS1iYW5cIj48L2k+IFRvdWNoZXMgY2FudCBvdmVybGFwITwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgdG91Y2ggdGhhdCB5b3Ugd2FudCB0byBhZGQgb3ZlcmxhcCB3aXRoOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cInRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cInRvdWNoLnByZXZpb3VzLmhhc093blByb3BlcnR5KCdpZCcpXCI+e3t0b3VjaC5wcmV2aW91cy50ZXh0fX06IHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24ge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5zdGFydCl9fSBhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5lbmQpfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwidG91Y2guY3VycmVudC5oYXNPd25Qcm9wZXJ0eSgnaWQnKVwiPnt7dG91Y2guY3VycmVudC50ZXh0fX06IHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cyBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5jdXJyZW50LnN0YXJ0KX19IGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLmN1cnJlbnQuZW5kKX19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImVuZEludmFsaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJpY29uIGZhIGZhLWJhblwiPjwvaT4gVmFsaWRhdGlvbiBFcnJvciE8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGVuZCBvZiB0aGUgdG91Y2ggbXVzdCBiZSBncmVhdGVyIHRoYW4gdGhlIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+QWRkIFRvdWNoPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHYtb246Y2xpY2sucHJldmVudD1cImNsb3NlXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQge0NvbXBhY3R9IGZyb20gJ3Z1ZS1jb2xvcic7XG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG9wZW46IHt9LFxuICAgICAgICAgICAgaW5pdFRvdWNoOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7fSxcbiAgICAgICAgICAgIHN0YXJ0OiB7fSxcbiAgICAgICAgICAgIGVuZDoge31cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIG9wZW4odmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbml0VG91Y2gpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0KHZhbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5zdGFydCA9IHZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQodmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmVuZCA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlkZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludCh0aGlzLmR1cmF0aW9uKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IFtdLFxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHN0YXJ0Rm10KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRGbXQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0aW9uRW5kKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ2NvbXBhY3QtcGlja2VyJzogQ29tcGFjdCxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2xvc2UoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwtbmV3LXRvdWNoJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2VDb2xvcih2YWwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guY29sb3IgPSB2YWxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja0NvbGxpZGUoKXtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hzID0gZ2V0U3RhdGUoJ3RvdWNoTWFuYWdlcicpLnRvdWNoZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgdG91Y2hzLnB1c2godGhpcy50b3VjaCk7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0aGlzLm92ZXJsYXAodG91Y2hzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBvdmVybGFwLm92ZXJsYXA7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IG92ZXJsYXAucmFuZ2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG92ZXJsYXAodG91Y2hzKXtcbiAgICAgICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hzLnNvcnQoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVGltZSA9IHBhcnNlSW50KHByZXZpb3VzLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIGlzIGVhcmxpZXIgdGhhbiB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA9PT0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBmaW5hbCByZXN1bHRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRlZFJhbmdlcy5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcmV2aW91cyByYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IGFycltpZHggLSAxXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYW55IG92ZXJsYXBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzRW5kID0gcGFyc2VJbnQocHJldmlvdXMuZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGFydCA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IChwcmV2aW91c0VuZCA+PSBjdXJyZW50U3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHllcywgdGhlcmUgaXMgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNwZWNpZmljIHJhbmdlcyB0aGF0IG92ZXJsYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZWQgdGhlIHJlZHVjZVxuICAgICAgICAgICAgICAgIH0sIHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmFueSgpKSB7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSAhIShwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgfHwgcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpID4gcGFyc2VJbnQoTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmRJbnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29sbGlkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5ld1RvdWNoRm9ybS52dWU/M2NmMDRkZDkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJveCBib3gtc29saWQgXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hlcycpfX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdCB1aS1zb3J0YWJsZVwiIHYtaWY9XCJ0b3VjaGVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cInRvdWNoIGluIHRvdWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiJ2JhY2tncm91bmQ6Jyt0b3VjaC5jb2xvci5oZXgrJzsgaGVpZ2h0OjIwcHg7IHdpZHRoOjIwcHg7bWFyZ2luLXRvcDogMXB4OydcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+e3t0b3VjaC50ZXh0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRW1waGFzaXMgbGFiZWwgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5zdGFydF9hdCcse3N0YXJ0OnRvSEhNTVNTKHRvdWNoLnN0YXJ0KX0pfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX2F0Jyx7ZW5kOnRvSEhNTVNTKHRvdWNoLmVuZCl9KX19XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gR2VuZXJhbCB0b29scyBzdWNoIGFzIGVkaXQgb3IgZGVsZXRlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lZGl0XCIgdi1vbjpjbGljaz1cImVkaXRUb3VjaCh0b3VjaClcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiB2LW9uOmNsaWNrPVwicmVtb3ZlVG91Y2godG91Y2gpXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxoMyB2LWlmPVwiIXRvdWNoZXMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7JHQoJ3Njb3V0aW5ncy5ub190b3VjaGVzJyl9fTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtnZXRTdGF0ZSwgc3Vic2NyaWJlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG91Y2hlczogZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIudG91Y2hlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICBzdWJzY3JpYmUodGhpcywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gJ2FkZFRvdWNoJyB8fCBkYXRhLmFjdGlvbiA9PSAncmVtb3ZlVG91Y2gnIHx8IGRhdGEuYWN0aW9uID09ICdlZGl0VG91Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hlcyA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnRvdWNoZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBlZGl0VG91Y2godG91Y2gpe1xuICAgICAgICAgICAgICAgIGJ1cy4kZW1pdCgnZWRpdC10b3VjaCcsIHRvdWNoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZVRvdWNoKHRvdWNoKXtcbiAgICAgICAgICAgICAgICBidXMuJGVtaXQoJ3JlbW92ZS10b3VjaCcsIHRvdWNoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvSEhNTVNTKHNlY3Mpe1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b3VjaGVzTGlzdC52dWU/OGE3YzQ2YmEiLCI8dGVtcGxhdGU+XG4gICAgPHRhZy1kcm9wZG93biB2LWlmPVwidGFnLmRyb3Bkb3duXCIgdi1vbjpvcHRpb24tY2xpY2tlZD1cImRyb3Bkb3duT3B0aW9uQ2xpY2tlZFwiIDp0YWc9XCJ0YWdcIj48L3RhZy1kcm9wZG93bj5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRhZy1kcm9wZG93blwiPlxuICAgICAgICA8YSBjbGFzcz1cIiBidG4gdGFnXCIgdi1vbjpjbGljay5wcmV2ZW50PVwidGFnQ2xpY2tlZFwiIDpjbGFzcz1cIidiZy0nK3RhZy5jb2xvclwiPnt7dGFnLm5hbWV9fTwvYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gICAgLnRhZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICM3MTcxNzE7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBtYXJnaW46IDAgM3B4IDZweCAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnRhZ3MgLnRhZzpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA4QztcbiAgICB9XG5cbiAgICAudGFncyAudGFnLnByaW1hcnkge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyOEJDQTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzU3RUJEXG4gICAgfVxuXG4gICAgLnRhZ3MgLnRhZy5zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0I4NUM7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRDQUU0Q1xuICAgIH1cblxuICAgIC50YWdzIC50YWcuaW5mbyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFO1xuICAgICAgICBib3JkZXItY29sb3I6ICM0NkI4REFcbiAgICB9XG5cbiAgICAudGFncyAudGFnLndhcm5pbmcge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRUVBMjM2XG4gICAgfVxuXG4gICAgLnRhZ3MgLnRhZy5kYW5nZXIge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRDQzRjNBXG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHRhZ0Ryb3Bkb3duIGZyb20gJy4vdGFnRHJvcGRvd24udnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0YWc6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIHRhZ0Ryb3Bkb3duXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uQ2xpY2tlZCh0YWcpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1jbGlja2VkJywgdGFnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ0NsaWNrZWQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctY2xpY2tlZCcsIHRoaXMudGFnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFnLnZ1ZT8wYjcxNDk1OCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gdGFnLWRyb3Bkb3duXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGJ0biB0YWdcIiA6Y2xhc3M9XCInYmctJyt0YWcuY29sb3JcIlxuICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgOmlkPVwiaWRcIj57e3RhZy5uYW1lfX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgOmFyaWEtbGFiZWxsZWRieT1cImlkXCI+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJvcHQgaW4gdGFnLm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtb246Y2xpY2sucHJldmVudD1cImNsaWNrT3B0KG9wdClcIj57e29wdC5uYW1lfX08L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cbiAgICAudGFnLWRyb3Bkb3duIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHV1aWQgZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRhZzoge30sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW3V1aWRdLFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2xpY2tPcHQob3B0KXtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZy5vcHRpb24gPSBvcHQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3B0aW9uLWNsaWNrZWQnLCB0aGlzLnRhZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhZ0Ryb3Bkb3duLnZ1ZT9mNDRjODYyYyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCIuLi5cIj5cbiAgICAgICAgICAgICAgICA8dGFnIDp0YWc9XCJ0YWdcIiB2LWZvcj1cInRhZyBpbiB0YWdzXCIgdi1vbjp0YWctY2xpY2tlZD1cInRhZ1NlbGVjdGVkXCI+PC90YWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzLXNlbGVjdGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFncy1saXN0XCIgdi1kcmFndWxhPVwic2VsZWN0ZWRcIiBiYWc9XCJmaXJzdC1iYWdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwidGFnIGluIHNlbGVjdGVkXCIgOmtleT1cInRhZy5pZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIiA6Y2xhc3M9XCInYmctJyt0YWcuY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGFnLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ0YWcub3B0aW9uXCI+IHt7dGFnLm9wdGlvbi5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJkZWxldGVUYWcodGFnKVwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLnRhZ3Mge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRhZ3Mtc2VsZWN0ZWQge1xuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC50YWdzLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCB7XG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFncy1saXN0IGRpdixcbiAgICAuZ3UtbWlycm9yIHtcbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCBkaXYge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIGN1cnNvcjogZ3JhYjtcbiAgICAgICAgY3Vyc29yOiAtbW96LWdyYWI7XG4gICAgICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLmd1LW1pcnJvciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODApXCI7XG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgICAgIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmd1LWhpZGUge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmd1LXVuc2VsZWN0YWJsZSB7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZ3UtdHJhbnNpdCB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcIjtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFncy1saXN0IC5leC1tb3ZlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdC5leC1vdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIH1cblxuICAgIC5oYW5kbGUge1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IHRhZyBmcm9tICcuL3RhZy52dWUnXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWdzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICB0YWdcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdGFnU2VsZWN0ZWQodGFnKXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctc2VsZWN0ZWQnLCB0YWcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVRhZyh0YWcpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1kZWxldGVkJywgdGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhZ3MudnVlP2JlN2MzZWU4IiwiaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IodG91Y2hlcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRvdWNoZXMnLCB0b3VjaGVzID8gdG91Y2hlcyA6IFtdKTtcbiAgICB9XG5cbiAgICBhZGQodG91Y2gpIHtcbiAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgdG91Y2gpO1xuICAgIH1cblxuICAgIHJlbW92ZSh0b3VjaCkge1xuICAgICAgICBkaXNwYXRjaCgncmVtb3ZlVG91Y2gnLCB0b3VjaCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlT3ZlclRvdWNoKHgsIHkpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmlzTW91c2VPdmVyKHgsIHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyQWN0aW9uKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2gpIHtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbal0uaXNNb3VzZU92ZXIoeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZVByZXNzZWRUb3VjaCh4LCB5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgsIHkpO1xuICAgICAgICB2YXIgYVRvdWNoSXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbal0uaXNNb3VzZVByZXNzc2VkT3Zlcih4LCB5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBhVG91Y2hJc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYVRvdWNoSXNTZWxlY3RlZCAmJiAhdm0uc3RhcnRlZCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCBudWxsKVxuICAgICAgICAgICAgaWYgKHZtLiRyZWZzLnBsYXllcilcbiAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLmRpc2FibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlUHJlc3NlZEFjdGlvbih4LCB5KSB7XG4gICAgICAgIHZhciBhbkFjdGlvbklzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2pdLmlzTW91c2VQcmVzc3NlZE92ZXIoeCwgeSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9uc1tqXS5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuQWN0aW9uSXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWFuQWN0aW9uSXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIG51bGwpXG4gICAgICAgICAgICAgICAgaWYgKHZtLiRyZWZzLnBsYXllcilcbiAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2hNYW5hZ2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2Uge1xuICAgIHNldHVwKCkge1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgcC5iYWNrZ3JvdW5kKDI1NSk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDQpO1xuICAgICAgICBwLnN0cm9rZSgnI2QzZTBlOScpO1xuICAgICAgICBwLmZpbGwoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIHAucmVjdCgwLCAwLCBwLndpZHRoIC0gMSwgcC5oZWlnaHQgLSAxKVxuICAgICAgICBwLm5vU3Ryb2tlKClcbiAgICAgICAgcC5ub0ZpbGwoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1N0YWdlLmpzIiwiaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vdXRpbHMvVGltZUNvbnZlcnRlcidcbmltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSB7XG4gICAgY29uc3RydWN0b3Ioc3RhcnRZLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0WScsIHN0YXJ0WSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0WCcsIDMwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lSGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zdGFydERlbHRhID0gMDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudGltZWxpbmUuaGlkZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldENvbFdpZHRoJywgdGhpcy5jYWxjdWxhdGVDb2xXaWR0aCgpKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUVuZFgnLCAwKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICAgICAgcC5zdHJva2UoMSk7XG4gICAgICAgICAgICBwLmZpbGwoMCwgMCwgMCk7XG4gICAgICAgICAgICBwLnRleHRTaXplKDEyKTtcbiAgICAgICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuc3RhdGUucGxheWVyLmR1cmF0aW9uKSwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYIC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgMzAsIDQwLCAyMCk7XG4gICAgICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XG5cbiAgICAgICAgICAgIHAuc3Ryb2tlKDApO1xuICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICBwLmxpbmUodGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1ksIHRoaXMuc3RhdGUudGltZWxpbmUud2lkdGgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5zdGF0ZS50aW1lbGluZS53aWR0aCArIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCAtIDMwOyBpICs9IHRoaXMuc3RhdGUudGltZWxpbmUuY29sV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGkgKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3WCA9IHggLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXJ0TWludXRlTGFiZWwodGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUsIHgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMaW5lKHgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAlICh0aGlzLnN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoICogNikgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3WCA+PSAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGFiZWwoaSwgbmV3WCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMaW5lKG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRpbWVsaW5lLnNob3dTZWNvbmRzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExpbmUobmV3WCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRpbWVsaW5lLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExhYmVsKGksIG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWNvbmRMaW5lKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuc3Ryb2tlKCdyZWQnKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgICAgICBwLmxpbmUodGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDQ1LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgcC5saW5lKHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudGltZWxpbmUuaGlkZSkge1xuICAgICAgICAgICAgaWYgKHAubW91c2VYID49IDMwICYmIHAubW91c2VYIDw9IHRoaXMuc3RhdGUuY2FudmFzLndpZHRoIC0gMzAgJiYgcC5tb3VzZVkgPj0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgJiYgcC5tb3VzZVkgPD0gdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKSB7XG4gICAgICAgICAgICAgICAgcC5jdXJzb3IocC5IQU5EKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVNb3VzZU92ZXInLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcC5jdXJzb3IocC5BUlJPVyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lTW91c2VPdmVyJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRpbWVsaW5lLmhpZGUpIHtcblxuICAgICAgICAgICAgdmFyIHN0YXJ0RGVsdGEgPSAocC5wbW91c2VYIC0gcC5tb3VzZVgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnREZWx0YSAhPSBzdGFydERlbHRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUgKyAoc3RhcnREZWx0YSkgLyB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFRpbWUnLCBNYXRoLmZsb29yKHN0YXJ0KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERlbHRhID0gc3RhcnREZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdTZWNvbmRMaW5lKHgpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoOyBqICs9IHRoaXMuc3RhdGUudGltZWxpbmUuY29sV2lkdGggLyAxMCkge1xuICAgICAgICAgICAgaWYgKCh4ICsgaikgPCB0aGlzLnN0YXRlLnRpbWVsaW5lLndpZHRoICYmIGopIHtcbiAgICAgICAgICAgICAgICBwLnN0cm9rZSgwKTtcbiAgICAgICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgICAgICBwLmxpbmUoeCArIGosIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kc1kgKyA1LCB4ICsgaiwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSk7XG4gICAgICAgICAgICAgICAgcC5zdHJva2UoMjMwKTtcbiAgICAgICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgICAgICBwLmxpbmUoeCArIGosIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kc1ksIHggKyBqLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cblxuICAgIGRyYXdNaWRkbGVTZWNvbmRMaW5lKHgpIHtcbiAgICAgICAgcC5zdHJva2UoMCk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpXG4gICAgICAgIHAubGluZSh4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZHNZLCB4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgcC5zdHJva2UoMjMwKTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMSlcbiAgICAgICAgcC5saW5lKHgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1ksIHgsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XG4gICAgfVxuXG4gICAgZHJhd01pZGRsZVNlY29uZExhYmVsKGksIHgpIHtcbiAgICAgICAgcC5zdHJva2UoMjMwKTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIHAudGV4dFNpemUoMTApO1xuICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvU1MoaSAvIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGgpICsgJyBzJywgeCAtIDIwLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZHNZIC0gMTAsIDQwLCAyMCk7XG4gICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBkcmF3TWludXRlTGluZSh4KSB7XG4gICAgICAgIHAuc3Ryb2tlKDApO1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICBwLmxpbmUoeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyAyMCwgeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSk7XG4gICAgICAgIHAuc3Ryb2tlKDIzMCk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgIHAubGluZSh4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZLCB4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgIH1cblxuICAgIGRyYXdNaW51dGVMYWJlbChpLCB4KSB7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBwLnRleHRTaXplKDEyKTtcbiAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhNYXRoLnJvdW5kKGkgLyB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoKSksIHggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5taW51dGVzWSwgNDAsIDIwKTtcbiAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xuICAgIH1cblxuICAgIGRyYXdTdGFydE1pbnV0ZUxhYmVsKGksIHgpIHtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKGkpLCB4IC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUubWludXRlc1ksIDQwLCAyMCk7XG4gICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDb2xXaWR0aCgpIHtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSAoIHRoaXMuc3RhdGUucGxheWVyLmR1cmF0aW9uICsgMzApIC8gNjA7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCh0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCAvIG1pbnV0ZXMpIC8gNikgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3I7XG4gICAgfVxuXG4gICAgZ2V0U3RhcnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWU7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvVGltZWxpbmUuanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi91dGlscy9UaW1lQ29udmVydGVyJ1xuaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9UaW1lTWFya2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gKHRoaXMuc3RhdGUucGxheWVyLmN1cnJlbnRUaW1lIC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCArIDMwO1xuICAgICAgICBjdXJyZW50WCA9IGN1cnJlbnRYID49IDMwID8gY3VycmVudFggOiAzMDtcbiAgICAgICAgaWYgKCh0aGlzLnN0YXRlLnBsYXllci5jdXJyZW50VGltZSAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSA+IDApIHtcbiAgICAgICAgICAgIHAuc3Ryb2tlKCdibHVlJyk7XG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICAgICAgcC5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDMwLCBjdXJyZW50WCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyA2MCk7XG4gICAgICAgICAgICBwLmxpbmUoY3VycmVudFgsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgNjAsIGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgICAgICBwLnRleHRTaXplKDEyKTtcbiAgICAgICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKE1hdGguZmxvb3IodGhpcy5zdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUpKSwgY3VycmVudFggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyAxNSwgNDAsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWcoeCwgeSkge1xuXG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvVmlkZW9UaW1lTWFya2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yU3RhZ2Uge1xuICAgIHNldHVwKCkge1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgaW5zcGVjdG9yLmJhY2tncm91bmQoMjU1KTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCg0KTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgnI2QzZTBlOScpO1xuICAgICAgICBpbnNwZWN0b3IuZmlsbCgyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgaW5zcGVjdG9yLnJlY3QoMCwgMCwgaW5zcGVjdG9yLndpZHRoIC0gMSwgaW5zcGVjdG9yLmhlaWdodCAtIDEpXG4gICAgICAgIGluc3BlY3Rvci5ub1N0cm9rZSgpXG4gICAgICAgIGluc3BlY3Rvci5ub0ZpbGwoKTtcblxuICAgICAgICBpbnNwZWN0b3IucHVzaCgpXG4gICAgICAgIGluc3BlY3Rvci50cmFuc2xhdGUoMCwgNjApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCcjZDNlMGU5Jyk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgIGluc3BlY3Rvci5yZWN0KDAsIDAsIDEyMCwgNjApXG4gICAgICAgIGluc3BlY3Rvci5saW5lKDAsIDAsIGluc3BlY3Rvci53aWR0aCwgMCk7XG4gICAgICAgIGluc3BlY3Rvci5saW5lKDAsIDYwLCBpbnNwZWN0b3Iud2lkdGgsIDYwKTtcbiAgICAgICAgaW5zcGVjdG9yLmZpbGwoJ2JsYWNrJyk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KCdMZWZ0IEF0aGxldGUnLCA1LCAyNCwgMTEwLCAxMik7XG4gICAgICAgIGluc3BlY3Rvci5wb3AoKVxuXG4gICAgICAgIGluc3BlY3Rvci5wdXNoKClcbiAgICAgICAgaW5zcGVjdG9yLnRyYW5zbGF0ZSgwLCAxMjApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCcjZDNlMGU5Jyk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgIGluc3BlY3Rvci5yZWN0KDAsIDAsIDEyMCwgNjApO1xuICAgICAgICBpbnNwZWN0b3IubGluZSgwLCA2MCwgaW5zcGVjdG9yLndpZHRoLCA2MCk7XG4gICAgICAgIGluc3BlY3Rvci5maWxsKCdibGFjaycpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dCgnUmlnaHQgQXRobGV0ZScsIDUsIDI0LCAxMTAsIDEyKTtcbiAgICAgICAgaW5zcGVjdG9yLnBvcCgpXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yU3RhZ2UuanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi8uLi91dGlscy9UaW1lQ29udmVydGVyJ1xuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BlY3RvclRpbWVsaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydFksIGhlaWdodCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclN0YXJ0WScsIHN0YXJ0WSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFydFgnLCAxMjApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9ySGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5zdGFydERlbHRhID0gMDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgY29sV2lkdGggPSB0aGlzLmNhbGN1bGF0ZUNvbFdpZHRoKCk7XG4gICAgICAgIGlmIChjb2xXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JDb2xXaWR0aCcsIGNvbFdpZHRoKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JFbmRYJywgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guZW5kIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGggKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFydFRpbWUnLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0KVxuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoMSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IuZmlsbCgwLCAwLCAwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5lbmQpLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCAtIDIwLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgMzAsIDQwLCAyMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKHAuQ0VOVEVSKTtcblxuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1ksIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGggLSAzMDsgaSArPSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuY29sV2lkdGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGkgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYO1xuICAgICAgICAgICAgICAgIHZhciBuZXdYID0geCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXJ0TGFiZWwodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSwgeCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxpbmUoeCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpICUgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aCAqIDYpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0gMTIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxpbmUobmV3WCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3WCA+PSAxMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2hvd1NlY29uZHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExhYmVsKGksIG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGluZShuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zaG93U2Vjb25kcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U2Vjb25kTGluZSh4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCdyZWQnKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgNDUsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLmxpbmUodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5oaWRlKSB7XG4gICAgICAgICAgICBpZiAoaW5zcGVjdG9yLm1vdXNlWCA+PSAzMCAmJiBpbnNwZWN0b3IubW91c2VYIDw9IHRoaXMuc3RhdGUuY2FudmFzLndpZHRoIC0gMzAgJiYgaW5zcGVjdG9yLm1vdXNlWSA+PSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICYmIGluc3BlY3Rvci5tb3VzZVkgPD0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpIHtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3IuY3Vyc29yKGluc3BlY3Rvci5IQU5EKTtcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCgnc2V0VGltZWxpbmVNb3VzZU92ZXInLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLmN1cnNvcihpbnNwZWN0b3IuQVJST1cpO1xuICAgICAgICAgICAgICAgIC8vICBkaXNwYXRjaCgnc2V0VGltZWxpbmVNb3VzZU92ZXInLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmFnKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5oaWRlKSB7XG5cbiAgICAgICAgICAgIHZhciBzdGFydERlbHRhID0gKGluc3BlY3Rvci5wbW91c2VYIC0gaW5zcGVjdG9yLm1vdXNlWCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGFydERlbHRhICE9IHN0YXJ0RGVsdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0ICsgKHN0YXJ0RGVsdGEpIC8gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFRpbWUnLCAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgTWF0aC5mbG9vcihzdGFydCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREZWx0YSA9IHN0YXJ0RGVsdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3U2Vjb25kTGluZSh4KSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmNvbFdpZHRoOyBqICs9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aCAvIDEwKSB7XG4gICAgICAgICAgICBpZiAoKHggKyBqKSA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCAmJiBqKSB7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgwKTtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHggKyBqLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1kgKyA1LCB4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDIzMCk7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3IubGluZSh4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZHNZLCB4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqO1xuICAgIH1cblxuICAgIGRyYXdNaWRkbGVTZWNvbmRMaW5lKHgpIHtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKVxuICAgICAgICBpbnNwZWN0b3IubGluZSh4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1ksIHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoMjMwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKVxuICAgICAgICBpbnNwZWN0b3IubGluZSh4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1ksIHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcbiAgICB9XG5cbiAgICBkcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgeCkge1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDIzMCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9TUyhpIC8gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoKSArICcgcycsIHggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZHNZIC0gMTAsIDQwLCAyMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgfVxuXG4gICAgZHJhd01pbnV0ZUxpbmUoeCkge1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgIGluc3BlY3Rvci5saW5lKHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAyMCwgeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgyMzApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgIGluc3BlY3Rvci5saW5lKHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSwgeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xuICAgIH1cblxuICAgIGRyYXdNaW51dGVMYWJlbChpLCB4KSB7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoTWF0aC5yb3VuZChpIC8gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoKSksIHggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLm1pbnV0ZXNZLCA0MCwgMjApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgIH1cblxuICAgIGRyYXdTdGFydExhYmVsKHN0YXJ0VGltZSwgeCkge1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHN0YXJ0VGltZSksIHggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLm1pbnV0ZXNZLCA0MCwgMjApO1xuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUNvbFdpZHRoKCkge1xuICAgICAgICB2YXIgbWludXRlcyA9ICggdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0KSAvIDYwO1xuICAgICAgICBpZiAobWludXRlcyA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgodGhpcy5zdGF0ZS5jYW52YXMud2lkdGggLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYIC0gMzApIC8gbWludXRlcykgLyA2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldFN0YXJ0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQ7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVGltZWxpbmUuanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi8uLi91dGlscy9UaW1lQ29udmVydGVyJ1xuaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLnBsYXllci5jdXJyZW50VGltZSlcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gKGN1cnJlbnRUaW1lIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGggKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCdibHVlJyk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoY3VycmVudFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAzMCwgY3VycmVudFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyA2MCk7XG4gICAgICAgIGluc3BlY3Rvci5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgNjAsIGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoY3VycmVudFRpbWUpLCBjdXJyZW50WCAtIDIwLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgMTUsIDQwLCAyMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgfVxuXG4gICAgZHJhZyh4LCB5KSB7XG5cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyLmpzIiwiaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5pbXBvcnQgSW5zcGVjdG9yU3RhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JTdGFnZSdcbmltcG9ydCBJbnNwZWN0b3JUaW1lbGluZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclRpbWVsaW5lJ1xuaW1wb3J0IEluc3BlY3RvclZpZGVvVGltZU1hcmtlciBmcm9tICcuL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclZpZGVvVGltZU1hcmtlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tldGNoKGluc3BlY3Rvcikge1xuICAgIGxldCBzdGF0ZSA9IG51bGw7XG4gICAgd2luZG93Lmluc3BlY3RvciA9IGluc3BlY3RvcjtcbiAgICBpbnNwZWN0b3Iuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnNwZWN0b3JCb3gnKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGluc3BlY3Rvci5jcmVhdGVDYW52YXMod2lkdGggLSAyMCwgMTkwKTtcbiAgICAgICAgY2FudmFzLm1vdXNlTW92ZWQobW91c2VNb3ZlZCk7XG4gICAgICAgIGNhbnZhcy5tb3VzZVByZXNzZWQobW91c2VQcmVzc2VkKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckNhbnZhcycsIGNhbnZhcyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JDYW52YXNIZWlnaHQnLCBpbnNwZWN0b3IuaGVpZ2h0KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckNhbnZhc1dpZHRoJywgaW5zcGVjdG9yLndpZHRoKTtcbiAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLmNhbnZhcy5pbnN0YW5jZS5wYXJlbnQoJ2luc3BlY3RvcicpO1xuICAgICAgICB2YXIgc3RhZ2UgPSBuZXcgSW5zcGVjdG9yU3RhZ2UoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclN0YWdlJywgc3RhZ2UpO1xuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgSW5zcGVjdG9yVGltZWxpbmUoMCwgMTgwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclRpbWVsaW5lJywgdGltZWxpbmUpO1xuICAgICAgICB2YXIgdmlkZW9UaW1lTWFya2VyID0gbmV3IEluc3BlY3RvclZpZGVvVGltZU1hcmtlcigpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yVmlkZW9NYXJrZXInLCB2aWRlb1RpbWVNYXJrZXIpO1xuXG4gICAgICAgIGluc3BlY3Rvci5jb2xvck1vZGUoaW5zcGVjdG9yLlJHQiwgMjU1LCAyNTUsIDI1NSwgMTAwKTtcblxuICAgICAgICBpbnNwZWN0b3IuZnJhbWVSYXRlKDEwKTtcbiAgICAgICAgaW5zcGVjdG9yLm5vTG9vcCgpO1xuICAgIH07XG5cbiAgICBpbnNwZWN0b3IuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5zdGFnZS5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgIGlmIChzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaCkge1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5kcmF3QWN0aW9ucygpO1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci52aWRlb01hcmtlci5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbW91c2VNb3ZlZCgpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlT3ZlckFjdGlvbihpbnNwZWN0b3IubW91c2VYLCBpbnNwZWN0b3IubW91c2VZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlUHJlc3NlZCgpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlUHJlc3NlZEFjdGlvbihpbnNwZWN0b3IubW91c2VYLCBpbnNwZWN0b3IubW91c2VZKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5zcGVjdG9yLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3BlY3Rvci5ub0xvb3AoKTtcbiAgICB9XG5cbiAgICBpbnNwZWN0b3Iuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3BlY3Rvci5sb29wKCk7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2luc3BlY3RvclNrZXRjaC5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuLi9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2gnXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24nXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc2V0dXAoKXtcblxuICAgICAgICB2YXIgYWN0aW9uID0gbmV3IEFjdGlvbigwLCA2MCwge1xuICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgXCJoZXhcIjogXCIjREJERjAwXCIsXG4gICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgVG91Y2goMCwgMTIwLCAnVG91Y2ggRXhhbXBsZScsIHtcbiAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxuICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICB9LCBbYWN0aW9uXSk7XG5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9zcGVjcy90b3VjaGVzU3BlYy5qcyIsImltcG9ydCBTdGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvU3RhZ2UnXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9jb21wb25lbnRzL3VpL1RpbWVsaW5lJ1xuaW1wb3J0IFRvdWNoTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaE1hbmFnZXInXG5pbXBvcnQgVmlkZW9UaW1lTWFya2VyIGZyb20gJy4vY29tcG9uZW50cy91aS9WaWRlb1RpbWVNYXJrZXInXG5pbXBvcnQgVG91Y2hTcGVjIGZyb20gJy4vc3BlY3MvdG91Y2hlc1NwZWMnXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tldGNoKHApIHtcbiAgICBsZXQgc3RhdGUgPSBudWxsO1xuICAgIHdpbmRvdy5wID0gcDtcbiAgICBwLnNldHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZWxpbmVCb3gnKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHAuY3JlYXRlQ2FudmFzKHdpZHRoIC0gMjAsIDEzMCk7XG4gICAgICAgIGNhbnZhcy5tb3VzZU1vdmVkKG1vdXNlTW92ZWQpO1xuICAgICAgICBjYW52YXMubW91c2VQcmVzc2VkKG1vdXNlUHJlc3NlZCk7XG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldENhbnZhcycsIGNhbnZhcyk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRIZWlnaHQnLCBwLmhlaWdodCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRXaWR0aCcsIHAud2lkdGgpO1xuICAgICAgICBzdGF0ZS5jYW52YXMuaW5zdGFuY2UucGFyZW50KCd0aW1lbGluZScpO1xuICAgICAgICB2YXIgc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFN0YWdlJywgc3RhZ2UpO1xuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoMCwgMTIwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lJywgdGltZWxpbmUpO1xuICAgICAgICB2YXIgdG91Y2hNYW5hZ2VyID0gbmV3IFRvdWNoTWFuYWdlcihbLypUb3VjaFNwZWMuc2V0dXAoKSovXSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUb3VjaE1hbmFnZXInLCB0b3VjaE1hbmFnZXIpO1xuICAgICAgICB2YXIgdmlkZW9UaW1lTWFya2VyID0gbmV3IFZpZGVvVGltZU1hcmtlcigpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VmlkZW9NYXJrZXInLCB2aWRlb1RpbWVNYXJrZXIpO1xuXG4gICAgICAgIHN0YXRlLnN0YWdlLmluc3RhbmNlLnNldHVwKCk7XG4gICAgICAgIHAuY29sb3JNb2RlKHAuUkdCLCAyNTUsIDI1NSwgMjU1LCAxMDApXG4gICAgICAgIHN0YXRlLnBsYXllci5pbnN0YW5jZS5wbGF5KCk7XG4gICAgICAgIHN0YXRlLnBsYXllci5pbnN0YW5jZS5vbigndGltZXVwZGF0ZScsIGZ1bmN0aW9uIGR1cmF0aW9uU2V0dGVyKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXN0YXRlLnBsYXllci5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXREdXJhdGlvbicsIHN0YXRlLnBsYXllci5pbnN0YW5jZS5kdXJhdGlvbigpKVxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgMSk7XG4gICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25maWdCdXR0b25zKCk7XG4gICAgICAgIHAuZnJhbWVSYXRlKDEwKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGF0ZS5zdGFnZS5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmluc3RhbmNlLmRyYXcoKTtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLmRyYXcoKTtcbiAgICAgICAgc3RhdGUudmlkZW9NYXJrZXIuaW5zdGFuY2UuZHJhdygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb25maWdCdXR0b25zKCkge1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbUluKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciArIDEpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbU91dChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciA+IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgLSAxKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZWQoKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5tb3VzZU92ZXJUb3VjaChwLm1vdXNlWCwgcC5tb3VzZVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUudGltZWxpbmUuaW5zdGFuY2UubW91c2VPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcC5tb3VzZURyYWdnZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZS5kcmFnKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbW91c2VQcmVzc2VkKCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UubW91c2VQcmVzc2VkVG91Y2gocC5tb3VzZVgsIHAubW91c2VZKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm9sb29wJyk7XG4gICAgICAgIHAubm9Mb29wKCk7XG4gICAgfVxuXG4gICAgcC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvb3AnKTtcbiAgICAgICAgcC5sb29wKCk7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL3RpbWVsaW5lU2tldGNoLmpzIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgcGxheWVyUmVhZHkoc3RhdGUsIHJlYWR5KXtcbiAgICAgICAgc3RhdGUucGxheWVyUmVhZHkgPSByZWFkeTtcbiAgICAgICAgcmV0dXJuIHJlYWR5O1xuICAgIH0sXG4gICAgc2V0Q2FudmFzKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLmNhbnZhcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZShzdGF0ZSwgaW5zdGFuY2Upe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRUb3VjaE1hbmFnZXIoc3RhdGUsIGluc3RhbmNlKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFN0YWdlKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLnN0YWdlLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFBsYXllcihzdGF0ZSwgaW5zdGFuY2Upe1xuICAgICAgICBzdGF0ZS5wbGF5ZXIuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0VmlkZW9NYXJrZXIoc3RhdGUsIGluc3RhbmNlKXtcbiAgICAgICAgc3RhdGUudmlkZW9NYXJrZXIuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0V2lkdGgoc3RhdGUsIHdpZHRoKXtcbiAgICAgICAgc3RhdGUuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVdpZHRoJywgd2lkdGgpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yV2lkdGgnLCB3aWR0aCk7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuICAgIHNldEhlaWdodChzdGF0ZSwgaGVpZ2h0KXtcbiAgICAgICAgc3RhdGUuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lV2lkdGgoc3RhdGUsIHdpZHRoKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVIaWRlKHN0YXRlLCBoaWRlKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuaGlkZSA9IGhpZGU7XG4gICAgICAgIHJldHVybiBoaWRlO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVIZWlnaHQoc3RhdGUsIGhlaWdodCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWScsIHN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIGhlaWdodCk7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZU1vdXNlT3ZlcihzdGF0ZSwgbW91c2VPdmVyKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuaXNNb3VzZU92ZXIgPSBtb3VzZU92ZXI7XG4gICAgICAgIHJldHVybiBtb3VzZU92ZXI7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZVN0YXJ0VGltZShzdGF0ZSwgc3RhcnRUaW1lKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVTdGFydFkoc3RhdGUsIHN0YXJ0WSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lTWludXRlc1knLCBzdGFydFkgKyA1KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU2Vjb25kc1knLCBzdGFydFkgKyA1NSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUF4aXNZJywgc3RhcnRZICsgNjApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVFbmRZJywgc3RhcnRZICsgc3RhdGUudGltZWxpbmUuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0WTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lQXhpc1koc3RhdGUsIGF4aXNZKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuYXhpc1kgPSBheGlzWTtcbiAgICAgICAgcmV0dXJuIGF4aXNZO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVFbmRZKHN0YXRlLCBlbmRZKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuZW5kWSA9IGVuZFk7XG4gICAgICAgIHJldHVybiBlbmRZO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVTdGFydFgoc3RhdGUsIHN0YXJ0WCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgICAgICAgcmV0dXJuIHN0YXJ0WDtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lRW5kWChzdGF0ZSwgZW5kWCl7XG4gICAgICAgIGVuZFggPSAoc3RhdGUucGxheWVyLmR1cmF0aW9uIC0gc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSAqIHN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoICsgMzA7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmVuZFggPSBlbmRYO1xuICAgICAgICByZXR1cm4gZW5kWDtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lTWludXRlc1koc3RhdGUsIG1pbnV0ZXNZKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUubWludXRlc1kgPSBtaW51dGVzWTtcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXNZO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVTZWNvbmRzWShzdGF0ZSwgc2Vjb25kc1kpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5zZWNvbmRzWSA9IHNlY29uZHNZO1xuICAgICAgICByZXR1cm4gc2Vjb25kc1k7XG4gICAgfSxcbiAgICBzZXRTaG93U2Vjb25kcyhzdGF0ZSwgc2hvd1NlY29uZHMpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5zaG93U2Vjb25kcyA9IHNob3dTZWNvbmRzO1xuICAgICAgICByZXR1cm4gc2hvd1NlY29uZHM7XG4gICAgfSxcbiAgICBzZXRTaG93U2Vjb25kc0ludGVydmFsKHN0YXRlLCBzaG93U2Vjb25kc0ludGVydmFsKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2hvd1NlY29uZHNJbnRlcnZhbCA9IHNob3dTZWNvbmRzSW50ZXJ2YWw7XG4gICAgICAgIHJldHVybiBzaG93U2Vjb25kc0ludGVydmFsO1xuICAgIH0sXG4gICAgc2V0Wm9vbShzdGF0ZSwgem9vbSl7XG4gICAgICAgIGlmIChzdGF0ZS5wbGF5ZXIuZHVyYXRpb24gPiA0MjApIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yID0gTWF0aC5mbG9vcihzdGF0ZS5wbGF5ZXIuZHVyYXRpb24gLyA0MjApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yICE9IHpvb20pIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3JDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh6b29tIDwgc3RhdGUudGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgPSBzdGF0ZS50aW1lbGluZS5pbml0aWFsWm9vbUZhY3RvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgPSB6b29tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB6b29tO1xuICAgIH0sXG4gICAgc2V0U2Vjb25kV2lkdGgoc3RhdGUsIHNlY29uZFdpZHRoKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGggPSBzZWNvbmRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHNlY29uZFdpZHRoO1xuICAgIH0sXG4gICAgc2V0Q29sV2lkdGgoc3RhdGUsIGNvbFdpZHRoKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuY29sV2lkdGggPSBjb2xXaWR0aDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFNob3dTZWNvbmRzSW50ZXJ2YWwnLCBjb2xXaWR0aCA+IDYwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFNob3dTZWNvbmRzJywgY29sV2lkdGggPiA5MCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWNvbmRXaWR0aCcsIGNvbFdpZHRoIC8gMTApXG4gICAgICAgIHJldHVybiBjb2xXaWR0aDtcbiAgICB9LFxuICAgIHNldER1cmF0aW9uKHN0YXRlLCBkdXJhdGlvbil7XG4gICAgICAgIHN0YXRlLnBsYXllci5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVFbmRYJywgMCk7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9LFxuICAgIHNldEN1cnJlbnRUaW1lKHN0YXRlLCBjdXJyZW50VGltZSl7XG4gICAgICAgIHN0YXRlLnBsYXllci5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICByZXR1cm4gY3VycmVudFRpbWU7XG4gICAgfSxcblxuICAgIHNldEluaXRpYWxpemVkKHN0YXRlLCBpbml0aWFsaXplZCl7XG4gICAgICAgIHN0YXRlLmluaXRpYWxpemVkID0gaW5pdGlhbGl6ZWQ7XG4gICAgICAgIHJldHVybiBpbml0aWFsaXplZDtcbiAgICB9LFxuICAgIHNldFRvdWNoZXMoc3RhdGUsIHRvdWNoZXMpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcyA9IHRvdWNoZXM7XG4gICAgICAgIHJldHVybiB0b3VjaGVzO1xuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWRUb3VjaChzdGF0ZSwgdG91Y2gpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaCA9IHRvdWNoO1xuICAgICAgICByZXR1cm4gdG91Y2g7XG4gICAgfSxcbiAgICBhZGRUb3VjaChzdGF0ZSwgdG91Y2gpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcy5wdXNoKHRvdWNoKTtcbiAgICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0sXG4gICAgZWRpdFRvdWNoKHN0YXRlLCB0b3VjaCl7XG4gICAgICAgIHZhciBpbmRleCA9IF8uZmluZEluZGV4KHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIG8uaWQgPT0gdG91Y2guaWRcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2luZGV4XS5zdGFydCA9IHRvdWNoLnN0YXJ0O1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uZW5kID0gdG91Y2guZW5kO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uY29sb3IgPSB0b3VjaC5jb2xvcjtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLnRleHQgPSB0b3VjaC50ZXh0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2luZGV4XS5hY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uYWN0aW9uc1tpXS5jb2xvciA9IF8uY2xvbmVEZWVwKHRvdWNoLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG91Y2g7XG4gICAgfSxcbiAgICByZW1vdmVUb3VjaChzdGF0ZSwgdG91Y2gpe1xuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09IHRvdWNoLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG91Y2g7XG4gICAgfSxcblxuXG4gICAgLy9pbnNwZWN0b3JcbiAgICBzZXRJbnNwZWN0b3Ioc3RhdGUsIGluc3BlY3Rvcil7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IuaW5zdGFuY2UgPSBpbnNwZWN0b3I7XG4gICAgICAgIHJldHVybiBpbnNwZWN0b3I7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JXaWR0aChzdGF0ZSwgd2lkdGgpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckhlaWdodChzdGF0ZSwgaGVpZ2h0KXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JFbmRZJywgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyBoZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JDYW52YXMoc3RhdGUsIGNhbnZhcyl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IuY2FudmFzLmluc3RhbmNlID0gY2FudmFzO1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yVmlkZW9NYXJrZXIoc3RhdGUsIHZpZGVvTWFya2VyKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci52aWRlb01hcmtlci5pbnN0YW5jZSA9IHZpZGVvTWFya2VyO1xuICAgICAgICByZXR1cm4gdmlkZW9NYXJrZXI7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JDYW52YXNXaWR0aChzdGF0ZSwgd2lkdGgpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JDYW52YXNIZWlnaHQoc3RhdGUsIGhlaWdodCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclN0YWdlKHN0YXRlLCBzdGFnZSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3Iuc3RhZ2UuaW5zdGFuY2UgPSBzdGFnZTtcbiAgICAgICAgcmV0dXJuIHN0YWdlO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yVGltZWxpbmUoc3RhdGUsIHRpbWVsaW5lKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5pbnN0YW5jZSA9IHRpbWVsaW5lO1xuICAgICAgICByZXR1cm4gdGltZWxpbmU7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JTdGFydFRpbWUoc3RhdGUsIHN0YXJ0VGltZSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICByZXR1cm4gc3RhcnRUaW1lO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yU3RhcnRZKHN0YXRlLCBzdGFydFkpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3Rvck1pbnV0ZXNZJywgc3RhcnRZICsgNSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTZWNvbmRzWScsIHN0YXJ0WSArIDU1KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckF4aXNZJywgc3RhcnRZICsgNjApO1xuICAgICAgICByZXR1cm4gc3RhcnRZO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yQXhpc1koc3RhdGUsIGF4aXNZKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSA9IGF4aXNZO1xuICAgICAgICByZXR1cm4gYXhpc1k7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JFbmRZKHN0YXRlLCBlbmRZKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZID0gZW5kWTtcbiAgICAgICAgcmV0dXJuIGVuZFk7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JTdGFydFgoc3RhdGUsIHN0YXJ0WCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYID0gc3RhcnRYO1xuICAgICAgICByZXR1cm4gc3RhcnRYO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yRW5kWChzdGF0ZSwgZW5kWCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCA9IGVuZFg7XG4gICAgICAgIHJldHVybiBlbmRYO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yTWludXRlc1koc3RhdGUsIG1pbnV0ZXNZKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5taW51dGVzWSA9IG1pbnV0ZXNZO1xuICAgICAgICByZXR1cm4gbWludXRlc1k7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JTZWNvbmRzWShzdGF0ZSwgc2Vjb25kc1kpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZHNZID0gc2Vjb25kc1k7XG4gICAgICAgIHJldHVybiBzZWNvbmRzWTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclNlY29uZFdpZHRoKHN0YXRlLCBzZWNvbmRXaWR0aCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGggPSBzZWNvbmRXaWR0aDtcbiAgICAgICAgcmV0dXJuIHNlY29uZFdpZHRoO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yQ29sV2lkdGgoc3RhdGUsIGNvbFdpZHRoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aCA9IGNvbFdpZHRoO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yU2Vjb25kV2lkdGgnLCBjb2xXaWR0aCAvIDEwKTtcbiAgICAgICAgcmV0dXJuIGNvbFdpZHRoO1xuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWRBY3Rpb24oc3RhdGUsIGFjdGlvbil7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuICAgIHJlY29yZGluZ1RvdWNoKHN0YXRlLCByZWNvcmRpbmcpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nVG91Y2ggPSByZWNvcmRpbmc7XG4gICAgICAgIHJldHVybiByZWNvcmRpbmc7XG4gICAgfSxcbiAgICByZWNvcmRpbmdBY3Rpb24oc3RhdGUsIHJlY29yZGluZyl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdBY3Rpb24gPSByZWNvcmRpbmc7XG4gICAgICAgIHJldHVybiByZWNvcmRpbmc7XG4gICAgfSxcbiAgICBhZGRBY3Rpb24oc3RhdGUsIGFjdGlvbil7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG4gICAgYWRkTGVmdFRhZyhzdGF0ZSwgdGFnKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uLmxlZnRUYWdzLnB1c2godGFnKTtcbiAgICAgICAgcmV0dXJuIHRhZztcbiAgICB9LFxuICAgIGFkZFJpZ2h0VGFnKHN0YXRlLCB0YWcpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24ucmlnaHRUYWdzLnB1c2godGFnKTtcbiAgICAgICAgcmV0dXJuIHRhZztcbiAgICB9LFxuICAgIGVkaXRBY3Rpb24oc3RhdGUsIGFjdGlvbil7XG4gICAgICAgIHZhciBpbmRleCA9IF8uZmluZEluZGV4KHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICByZXR1cm4gby5pZCA9PSBhY3Rpb24uaWRcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbaW5kZXhdLnN0YXJ0ID0gYWN0aW9uLnN0YXJ0O1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2luZGV4XS5lbmQgPSBhY3Rpb24uZW5kO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2luZGV4XS5jb2xvciA9IGFjdGlvbi5jb2xvcjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuICAgIHJlbW92ZUFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcbiAgICAgICAgdmFyIGluZGV4ID0gXy5maW5kSW5kZXgoc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09IGFjdGlvbi5pZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL2FjdGlvbnMuanMiLCJleHBvcnQgY29uc3Qgc3RhdGUgPSB7XG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIHBsYXllclJlYWR5OiBmYWxzZSxcbiAgICB0b3VjaE1hbmFnZXI6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHRvdWNoZXM6IFtdLFxuICAgICAgICBzZWxlY3RlZFRvdWNoOiBudWxsLFxuICAgICAgICByZWNvcmRpbmdBY3Rpb246IGZhbHNlLFxuICAgICAgICByZWNvcmRpbmdUb3VjaDogZmFsc2UsXG4gICAgICAgIGluc3BlY3Rvcjoge1xuICAgICAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgICAgICBjYW52YXM6IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlkZW9NYXJrZXI6IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YWdlOiB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lbGluZToge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgICAgICAgICAgc2Vjb25kV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgY29sV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgZW5kWTogMCxcbiAgICAgICAgICAgICAgICBtaW51dGVzWTogMCxcbiAgICAgICAgICAgICAgICBzZWNvbmRzWTogMCxcbiAgICAgICAgICAgICAgICBheGlzWTogMCxcbiAgICAgICAgICAgICAgICBlbmRYOiAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WDogMzAsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0aW1lbGluZToge1xuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgc2hvd1NlY29uZHM6IGZhbHNlLFxuICAgICAgICBzaG93U2Vjb25kc0ludGVydmFsOiBmYWxzZSxcbiAgICAgICAgem9vbUZhY3RvcjogMSxcbiAgICAgICAgaW5pdGlhbFpvb21GYWN0b3I6IDEsXG4gICAgICAgIHNlY29uZFdpZHRoOiAwLFxuICAgICAgICBjb2xXaWR0aDogMCxcbiAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICBlbmRZOiAwLFxuICAgICAgICBtaW51dGVzWTogMCxcbiAgICAgICAgc2Vjb25kc1k6IDAsXG4gICAgICAgIGF4aXNZOiAwLFxuICAgICAgICBlbmRYOiAwLFxuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIGlzTW91c2VPdmVyOiBmYWxzZSxcbiAgICAgICAgem9vbUZhY3RvckNoYW5nZTogZmFsc2VcbiAgICB9LFxuICAgIHN0YWdlOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgfSxcbiAgICBwbGF5ZXI6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBjdXJyZW50VGltZTogMFxuICAgIH0sXG4gICAgdmlkZW9NYXJrZXI6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGxcbiAgICB9LFxuICAgIGNhbnZhczoge1xuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9zdG9yZXMvc3RvcmUuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHVwZGF0ZShpZCwgc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnB1dCgnL2FwaS9zY291dGluZ3MvJyArIGlkICsgJy90b3VjaGVzLycsIHNjb3V0aW5nKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nVG91Y2hTZXJ2aWNlLmpzIiwiZXhwb3J0IGRlZmF1bHR7XG4gICAgbWV0aG9kczoge1xuICAgICAgICBzaG93RXJyb3IocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS52YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZXJyb3IgaW4gcmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvcnNbZXJyb3JdLmZvckVhY2goKHZhbGlkYXRpb25FcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHZhbGlkYXRpb25FcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdChyZXNwb25zZS5lcnJvcnMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvYWpheC9lcnJvclByZXNlbnRlci5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmluc3BlY3Rvci1pbmZvIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uaW5zcGVjdG9yLWluZm8gLmluc3BlY3Rvci1pbmZvLS10aXRsZSB7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4uYXRobGV0ZS1tZW51IC5kcm9wZG93biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG59XFxuLmF0aGxldGUtbWVudSAuYXRobGV0ZS1tZW51LXRpdGxlIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNlMGU5O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNlMGU5O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmF0aGxldGUtbWVudSAuYXRobGV0ZS1tZW51LWxlZnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNlMGU5O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5hdGhsZXRlLW1lbnUgLmF0aGxldGUtbWVudS1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNlMGU5O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDMxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWdzIGEge1xcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbiAgb3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XFxufVxcbi50YWdzLWxpc3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRhZ3MtbGlzdCAubGFiZWwge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi50YWdzLWxpc3QgLmxhYmVsIC5jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLnRhZ3MtbGlzdCBkaXYsXFxuLmd1LW1pcnJvciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcXG59XFxuLnRhZ3MtbGlzdCBkaXYgLmxhYmVsLFxcbiAgLmd1LW1pcnJvciAubGFiZWwge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLnRhZ3MtbGlzdCBkaXYge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi50YWdzLWxpc3QgZGl2Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmd1LW1pcnJvciB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTgwKVxcXCI7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG59XFxuLmd1LW1pcnJvciAubGFiZWwgLmNsb3NlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmd1LWhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZ3UtdW5zZWxlY3RhYmxlIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmd1LXRyYW5zaXQge1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTIwKVxcXCI7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xcbn1cXG4uZ3UtdHJhbnNpdCAuY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFncy1saXN0IC5leC1tb3ZlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xcbn1cXG4udGFncy1saXN0LmV4LW92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG4uaGFuZGxlIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY0MjIzZjUhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcbi8vIG1vZHVsZSBpZCA9IDMxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiN2aWRlby1jYW52YXMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWU/NGNkOTMyNThcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQVdBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLE9BQUE7SUFDQSxvQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJwbGF5ZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDx2aWRlbyByZWY9XFxcInBsYXllclxcXCJcXG4gICAgICAgICAgICAgICBjbGFzcz1cXFwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblxcXCJcXG4gICAgICAgICAgICAgICBjb250cm9scyBwcmVsb2FkPVxcXCJhdXRvXFxcIlxcbiAgICAgICAgICAgICAgIDpwb3N0ZXI9XFxcInBvc3RlclxcXCJcXG4gICAgICAgICAgICAgICA6ZGF0YS1zZXR1cD1cXFwic3RyU291cmNlXFxcIlxcbiAgICAgICAgPjwvdmlkZW8+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAjdmlkZW8tY2FudmFzIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgcGxheWVyOiB7fVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHNvdXJjZToge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHBvc3Rlcjoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmdcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9mZnNldDoge1xcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgc3RyU291cmNlKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNvdXJjZSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgbW91bnRlZCgpe1xcbiAgICAgICAgICAgIHRoaXMuaW5pdFBsYXllcih0aGlzLnNvdXJjZSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGFwaSgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGluaXRQbGF5ZXIoc291cmNlKXtcXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnNvdXJjZSk7XFxuICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSB7XFxuICAgICAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLnNvdXJjZXNbMF0sXFxuICAgICAgICAgICAgICAgICAgICB0ZWNoT3JkZXI6IFsneW91dHViZSddLFxcbiAgICAgICAgICAgICAgICAgICAgcGxheWJhY2tSYXRlczogWzAuMjUsIDAuNSwgMSwgMS41LCAyXSxcXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUHJvZ3Jlc3M6IHt9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiTG9vcFBsdWdpbjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcElmQmVmb3JlU3RhcnQ6IGZhbHNlLCAvL2FsbG93IHZpZGVvIHRvIHBsYXkgbm9ybWFsbHkgYmVmb3JlIHRoZSBsb29wIHNlY3Rpb24/IGRlZmF1bHRzIHRvIHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vb3BJZkFmdGVyRW5kOiB0cnVlLCAvLyBkZWZhdWx0cyB0byB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQWZ0ZXJMb29waW5nOiBmYWxzZSwgICAgICAgLy9pZiB0cnVlLCBhZnRlciBsb29waW5nIHZpZGVvIHdpbGwgcGF1c2UuIERlZmF1bHRzIHRvIGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQmVmb3JlTG9vcGluZzogZmFsc2UsICAgICAgLy9pZiB0cnVlLCBiZWZvcmUgbG9vcGluZyB2aWRlbyB3aWxsIHBhdXNlLiBEZWZhdWx0cyB0byBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25zOiBmYWxzZSwgIC8vZGVmYXVsdHMgdG8gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfTtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0LnN0YXJ0KSB7XFxuICAgICAgICAgICAgICAgICAgICBjb25maWcucGx1Z2lucy5kbmNvZmZzZXQgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IHRoaXMub2Zmc2V0LnN0YXJ0LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9mZnNldDogdGhpcy5vZmZzZXQuZW5kXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKHRoaXMuJHJlZnMucGxheWVyLCBjb25maWcsICgpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhbHllclJlYWR5Jyk7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFBsYXllcicsIHRoaXMucGxheWVyKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlKDEpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsICgpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEN1cnJlbnRUaW1lJywgdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk0NTc1OTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDMxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWcge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiAjNzE3MTcxO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtYXJnaW46IDAgM3B4IDZweCAwO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YWdzIC50YWc6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICMwOEM7XFxufVxcbi50YWdzIC50YWcucHJpbWFyeSB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xcbiAgICBib3JkZXItY29sb3I6ICMzNTdFQkRcXG59XFxuLnRhZ3MgLnRhZy5zdWNjZXNzIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0I4NUM7XFxuICAgIGJvcmRlci1jb2xvcjogIzRDQUU0Q1xcbn1cXG4udGFncyAudGFnLmluZm8ge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNDZCOERBXFxufVxcbi50YWdzIC50YWcud2FybmluZyB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xcbiAgICBib3JkZXItY29sb3I6ICNFRUEyMzZcXG59XFxuLnRhZ3MgLnRhZy5kYW5nZXIge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRDQzRjNBXFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZT8wYjcxNDk1OFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBT0E7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUVBLGlEQUFBO0lBQ0Esd0NBQUE7SUFJQSxnQ0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidGFnLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx0YWctZHJvcGRvd24gdi1pZj1cXFwidGFnLmRyb3Bkb3duXFxcIiB2LW9uOm9wdGlvbi1jbGlja2VkPVxcXCJkcm9wZG93bk9wdGlvbkNsaWNrZWRcXFwiIDp0YWc9XFxcInRhZ1xcXCI+PC90YWctZHJvcGRvd24+XFxuICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJ0YWctZHJvcGRvd25cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIiBidG4gdGFnXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcInRhZ0NsaWNrZWRcXFwiIDpjbGFzcz1cXFwiJ2JnLScrdGFnLmNvbG9yXFxcIj57e3RhZy5uYW1lfX08L2E+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAudGFnIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGNvbG9yOiAjNzE3MTcxO1xcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIG1hcmdpbjogMCAzcHggNnB4IDA7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA4QztcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnLnByaW1hcnkge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzU3RUJEXFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZy5zdWNjZXNzIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRDQUU0Q1xcbiAgICB9XFxuXFxuICAgIC50YWdzIC50YWcuaW5mbyB7XFxuICAgICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XFxuICAgICAgICBib3JkZXItY29sb3I6ICM0NkI4REFcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnLndhcm5pbmcge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRUVBMjM2XFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZy5kYW5nZXIge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRDQzRjNBXFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB0YWdEcm9wZG93biBmcm9tICcuL3RhZ0Ryb3Bkb3duLnZ1ZSdcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHRhZzoge31cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAgICAgdGFnRHJvcGRvd25cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25DbGlja2VkKHRhZyl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1jbGlja2VkJywgdGFnKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFnQ2xpY2tlZCgpe1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctY2xpY2tlZCcsIHRoaXMudGFnKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXG4vLyBtb2R1bGUgaWQgPSAzMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwidG91Y2hlc0xpc3QudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIm5ld1RvdWNoRm9ybS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/M2NmMDRkZDlcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZTQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcIm5ld1RvdWNoRm9ybS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIHYtb246c3VibWl0LnByZXZlbnQ9XFxcIm9uU3VibWl0XFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcXFwiIHYtaWY9XFxcIm9wZW5cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LXRpdGxlXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy10aXRsZVxcXCIgbmFtZT1cXFwibmV3LXRpdGxlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC50ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cXFwicmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJUaXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC50ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XFxcInRvdWNoLmNvbG9yXFxcIiBAY2hhbmdlLWNvbG9yPVxcXCJvbkNoYW5nZUNvbG9yXFxcIj48L2NvbXBhY3QtcGlja2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1zdGFydFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCAoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1zdGFydFxcXCIgbmFtZT1cXFwibmV3LXN0YXJ0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XFxcInRvdWNoLnN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVxcXCJyZXF1aXJlZHxudW1lcmljXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5zdGFydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1zdGFydC1mbXRcXFwiIG5hbWU9XFxcIm5ldy1zdGFydC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic3RhcnRGbXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC5zdGFydCcpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guZW5kJykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LWVuZFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1lbmRcXFwiIG5hbWU9XFxcIm5ldy1lbmRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cXFwidG91Y2guZW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVxcXCJyZXF1aXJlZHxudW1lcmljXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJFbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInRvdWNoLmVuZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1lbmQtZm10XFxcIiBuYW1lPVxcXCJuZXctZW5kLWZtdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJlbmRGbXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guZW5kJykgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiB2LWlmPVxcXCJjb2xsaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPsOXPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWJhblxcXCI+PC9pPiBUb3VjaGVzIGNhbnQgb3ZlcmxhcCE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0b3VjaCB0aGF0IHlvdSB3YW50IHRvIGFkZCBvdmVybGFwIHdpdGg6XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcInRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwidG91Y2gucHJldmlvdXMuaGFzT3duUHJvcGVydHkoJ2lkJylcXFwiPnt7dG91Y2gucHJldmlvdXMudGV4dH19OiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24ge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5zdGFydCl9fSBhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLnByZXZpb3VzLmVuZCl9fTwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVxcXCJ0b3VjaC5jdXJyZW50Lmhhc093blByb3BlcnR5KCdpZCcpXFxcIj57e3RvdWNoLmN1cnJlbnQudGV4dH19OiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzIG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5jdXJyZW50LnN0YXJ0KX19IGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dG9ISE1NU1ModG91Y2guY3VycmVudC5lbmQpfX08L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwiZW5kSW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj7DlzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT4gVmFsaWRhdGlvbiBFcnJvciE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBlbmQgb2YgdGhlIHRvdWNoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBzdGFydFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiB0ZXh0LXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BZGQgVG91Y2g8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcImNsb3NlXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcblxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcXG4gICAgaW1wb3J0IHtDb21wYWN0fSBmcm9tICd2dWUtY29sb3InO1xcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgb3Blbjoge30sXFxuICAgICAgICAgICAgaW5pdFRvdWNoOiB7XFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImhzbFxcXCI6IHtcXFwiaFxcXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFxcXCJzXFxcIjogMSwgXFxcImxcXFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFxcXCJhXFxcIjogMX0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJoZXhcXFwiOiBcXFwiI0RCREYwMFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJyZ2JhXFxcIjoge1xcXCJyXFxcIjogMjE5LCBcXFwiZ1xcXCI6IDIyMywgXFxcImJcXFwiOiAwLCBcXFwiYVxcXCI6IDEsIFxcXCJhbHBoYVxcXCI6IDUwfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImhzdlxcXCI6IHtcXFwiaFxcXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFxcXCJzXFxcIjogMSwgXFxcInZcXFwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFxcXCJhXFxcIjogMX0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkdXJhdGlvbjoge30sXFxuICAgICAgICAgICAgc3RhcnQ6IHt9LFxcbiAgICAgICAgICAgIGVuZDoge31cXG4gICAgICAgIH0sXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIG9wZW4odmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5pdFRvdWNoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHN0YXJ0KHZhbCl7XFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guc3RhcnQgPSB2YWw7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlbmQodmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5lbmQgPSB2YWxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpZGUoKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpZGUoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gISEocGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpIHx8IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSA+IHBhcnNlSW50KHRoaXMuZHVyYXRpb24pKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNvbGxpZGU6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogW10sXFxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB0b3VjaDoge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgc3RhcnRGbXQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGVuZEZtdCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FbmQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgICdjb21wYWN0LXBpY2tlcic6IENvbXBhY3QsXFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGNsb3NlKCl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbC1uZXctdG91Y2gnKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRvSEhNTVNTKHNlY3MpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sb3IodmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY2hlY2tDb2xsaWRlKCl7XFxuICAgICAgICAgICAgICAgIHZhciB0b3VjaHMgPSBnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykudG91Y2hlcy5zbGljZSgwKTtcXG4gICAgICAgICAgICAgICAgdG91Y2hzLnB1c2godGhpcy50b3VjaCk7XFxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gdGhpcy5vdmVybGFwKHRvdWNocyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IG92ZXJsYXAub3ZlcmxhcDtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IG92ZXJsYXAucmFuZ2VzO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb3ZlcmxhcCh0b3VjaHMpe1xcbiAgICAgICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hzLnNvcnQoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XFxuXFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNUaW1lID0gcGFyc2VJbnQocHJldmlvdXMuc3RhcnQpO1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgaXMgZWFybGllciB0aGFuIHRoZSBjdXJyZW50XFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgdGltZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB0aW1lXFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lID09PSBjdXJyZW50VGltZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgZmluYWwgcmVzdWx0c1xcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydGVkUmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcmV2aW91cyByYW5nZVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSBhcnJbaWR4IC0gMV07XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYW55IG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0VuZCA9IHBhcnNlSW50KHByZXZpb3VzLmVuZCk7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXJ0ID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IChwcmV2aW91c0VuZCA+PSBjdXJyZW50U3RhcnQpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHJlc3VsdFxcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXApIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB5ZXMsIHRoZXJlIGlzIG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQub3ZlcmxhcCA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNwZWNpZmljIHJhbmdlcyB0aGF0IG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucmFuZ2VzLnB1c2goe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZWQgdGhlIHJlZHVjZVxcbiAgICAgICAgICAgICAgICB9LCB7b3ZlcmxhcDogZmFsc2UsIHJhbmdlczogW119KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpO1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMuYW55KCkpIHtcXG5cXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludChNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSkpKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmRJbnZhbGlkKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbGxpZGUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFnLWRyb3Bkb3duIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlP2Y0NGM4NjJjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFjQTtJQUNBLGlDQUFBO0NBQ0FcIixcImZpbGVcIjpcInRhZ0Ryb3Bkb3duLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIHRhZy1kcm9wZG93blxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIGJ0biB0YWdcXFwiIDpjbGFzcz1cXFwiJ2JnLScrdGFnLmNvbG9yXFxcIlxcbiAgICAgICAgICAgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgOmlkPVxcXCJpZFxcXCI+e3t0YWcubmFtZX19XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNhcmV0LWRvd25cXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgOmFyaWEtbGFiZWxsZWRieT1cXFwiaWRcXFwiPlxcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwib3B0IGluIHRhZy5vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJjbGlja09wdChvcHQpXFxcIj57e29wdC5uYW1lfX08L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAudGFnLWRyb3Bkb3duIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgdXVpZCBmcm9tICdiYXNlL21peGlucy91dWlkJ1xcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgdGFnOiB7fSxcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgaWQ6ICcnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1peGluczogW3V1aWRdLFxcbiAgICAgICAgbW91bnRlZCgpe1xcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlVVVJRCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBjbGlja09wdChvcHQpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnRhZy5vcHRpb24gPSBvcHQ7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbi1jbGlja2VkJywgdGhpcy50YWcpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjEyNGM5ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImVkaXRUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udnVlLWNvbG9yX19jb21wYWN0IHtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/NTc3YjcxODJcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNRQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImVkaXRUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJvblN1Ym1pdFxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2gudGV4dCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudGl0bGUnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy10aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRvdWNoLnRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC50ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJUaXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC50ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctdGl0bGVcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmNvbG9yJyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XFxcInRvdWNoLmNvbG9yXFxcIiBAY2hhbmdlLWNvbG9yPVxcXCJvbkNoYW5nZUNvbG9yXFxcIj48L2NvbXBhY3QtcGlja2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1zdGFydFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3Muc3RhcnQnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LXN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0b3VjaC5zdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC5zdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2guc3RhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctc3RhcnQtZm10XFxcIiBuYW1lPVxcXCJuZXctc3RhcnQtZm10XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInN0YXJ0Rm10XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guc3RhcnQnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctZW5kXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmQnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LWVuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidG91Y2guZW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XFxcInRvdWNoLmVuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiRW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5lbmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctZW5kLWZtdFxcXCIgbmFtZT1cXFwibmV3LWVuZC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZW5kRm10XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHYtaWY9XFxcImNvbGxpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcImFsZXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+w5c8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWJhblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJyl9fTpcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiY29sbGlkZVRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwiY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IHRvdWNoLmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLHsgdGl0bGU6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLnN0YXJ0KSxlbmQ6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLmVuZCl9KX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwiY29sbGlkZVRvdWNoLmN1cnJlbnQuaWQgIT0gdG91Y2guaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycseyB0aXRsZTpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2guY3VycmVudC50ZXh0LHN0YXJ0OnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LnN0YXJ0KSxlbmQ6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9ISE1NU1MoY29sbGlkZVRvdWNoLmN1cnJlbnQuZW5kKX0pfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiB2LWlmPVxcXCJlbmRJbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPsOXPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZXJyb3InKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudmFsaWRhdGlvbl9lbmRfZ3JlYXRlcicpfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+e3skdCgnc2NvdXRpbmdzLnNhdmUnKX19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJjbG9zZVxcXCI+e3skdCgnc2NvdXRpbmdzLmNhbmNlbCcpfX08L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcblxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcXG4gICAgaW1wb3J0IHtDb21wYWN0fSBmcm9tICd2dWUtY29sb3InO1xcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnXFxuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBsb2NhbGVzOiBzY291dGluZ3NMb2NhbGVzLFxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICBpbml0VG91Y2g6IHtcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IDc3LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkdXJhdGlvbjoge30sXFxuICAgICAgICB9LFxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluXSxcXG4gICAgICAgIGNyZWF0ZWQoKXtcXG4gICAgICAgICAgICB0aGlzLnRvdWNoID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbml0VG91Y2gpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgJ3RvdWNoLnN0YXJ0JzogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGU7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZVRvdWNoZXMgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlcztcXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgY29sbGlkZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGNvbGxpZGVUb3VjaGVzOiBbXSxcXG4gICAgICAgICAgICAgICAgZW5kSW52YWxpZDogZmFsc2UsXFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IDc3LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBzdGFydEZtdCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZW5kRm10KCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVuZCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgKyAxO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAgICAgJ2NvbXBhY3QtcGlja2VyJzogQ29tcGFjdCxcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgY2xvc2UoKXtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsLW5ldy10b3VjaCcsIHRoaXMudG91Y2gpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyhzZWNzKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb25DaGFuZ2VDb2xvcih2YWwpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmNvbG9yID0gdmFsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvblN1Ym1pdCgpe1xcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKTtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmFueSgpKSB7XFxuXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3VjaC5zdGFydCA+PSB0aGlzLnRvdWNoLmVuZCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInRpbWVsaW5lLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lNTZjODA4NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjk0NTc1OTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGxheWVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGxheWVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yOTQ1NzU5MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI5NDU3NTkwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTU3OTJmNTZjIXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTc5MmY1NmMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW5zcGVjdG9yLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NzkyZjU2Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU3OTJmNTZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1lNTZjODA4NCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGltZWxpbmUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90aW1lbGluZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lNTZjODA4NCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90aW1lbGluZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGltZWxpbmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWU1NmM4MDg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTU2YzgwODRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDMzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGVkaXRUb3VjaEZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWE3NDlkNjAyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTc0OWQ2MDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIpXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbmV3VG91Y2hGb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Y2I4M2QwZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjYjgzZDBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvdWNoZXNMaXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NTM5MDM5N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU1MzkwMzk3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDM0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDUwNGRhZWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhZy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NTA0ZGFlZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFnLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NTA0ZGFlZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1MDRkYWVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcbi8vIG1vZHVsZSBpZCA9IDM0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWdEcm9wZG93bi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmYxMjRjOWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZjEyNGM5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDM0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01ZjQyMjNmNSFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhZ3MudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWY0MjIzZjUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFncy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFncy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWY0MjIzZjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZjQyMjNmNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdhZG1pbi1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogX3ZtLnRpdGxlLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgWyghX3ZtLnBsYXllclJlYWR5KSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW192bS5fbSgwKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGlzLWZsZXhcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTYgcGxheWVyLWNvbnRhaW5lclwiXG4gIH0sIFsoX3ZtLmluaXRpYWxpemVkKSA/IF9jKCdkbmMtcGxheWVyJywge1xuICAgIHJlZjogXCJwbGF5ZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzb3VyY2VcIjogX3ZtLnNvdXJjZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNiB0b3VjaGVzLWNvbnRhaW5lclwiXG4gIH0sIFsoX3ZtLnBsYXllclJlYWR5KSA/IF9jKCd0b3VjaGVzLWxpc3QnKSA6IF92bS5fZSgpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtbWVudVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5zdGFydGVkXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3RhcnRUb3VjaFxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdmYS1wbGF5JzogIV92bS5zdGFydGVkLCAnZmEtY2lyY2xlIHRleHQtZGFuZ2VyJzogX3ZtLnN0YXJ0ZWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnN0YXJ0ZWQgPyBfdm0uJHQoJ3Njb3V0aW5ncy5yZWNvcmRpbmcnKSA6IF92bS4kdCgnc2NvdXRpbmdzLnN0YXJ0X3RvdWNoJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0uc3RhcnRlZFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmVuZFRvdWNoXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3RvcFwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZW5kX3RvdWNoJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9vZ2xlVGltZWxpbmVcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvb2dsZV90aW1lbGluZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVJbnNwZWN0b3JcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1leWVcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b29nbGVfaW5zcGVjdG9yJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmVkaXQpID8gX2MoJ2VkaXQtdG91Y2gtZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpbml0LXRvdWNoXCI6IF92bS50b3VjaCxcbiAgICAgIFwiZHVyYXRpb25cIjogX3ZtLmR1cmF0aW9uXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjYW5jZWwtbmV3LXRvdWNoXCI6IF92bS5jYW5jZWxFZGl0VG91Y2gsXG4gICAgICBcImFkZC1uZXctdG91Y2hcIjogX3ZtLnNhdmVFZGl0VG91Y2hcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgWyhfdm0ucGxheWVyUmVhZHkpID8gX2MoJ2luc3BlY3RvcicsIHtcbiAgICByZWY6IFwiaW5zcGVjdG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxheWluZ1wiOiBfdm0ucGxheWluZ1xuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgWyhfdm0ucGxheWVyUmVhZHkpID8gX2MoJ3RpbWVsaW5lJykgOiBfdm0uX2UoKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnNhdmVcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLiR0KCdmb3Jtcy5zYXZlJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2FuY2VsXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Zvcm1zLmJhY2snKSkpXSldKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdoMycsIFtfdm0uX3YoXCJMb2FkaW5nLi4uLlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yNDc3OWI1OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjQ3NzliNTghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCd2aWRlbycsIHtcbiAgICByZWY6IFwicGxheWVyXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbnRyb2xzXCI6IFwiXCIsXG4gICAgICBcInByZWxvYWRcIjogXCJhdXRvXCIsXG4gICAgICBcInBvc3RlclwiOiBfdm0ucG9zdGVyLFxuICAgICAgXCJkYXRhLXNldHVwXCI6IF92bS5zdHJTb3VyY2VcbiAgICB9XG4gIH0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjk0NTc1OTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDM0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gKF92bS50YWcuZHJvcGRvd24pID8gX2MoJ3RhZy1kcm9wZG93bicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdcIjogX3ZtLnRhZ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwib3B0aW9uLWNsaWNrZWRcIjogX3ZtLmRyb3Bkb3duT3B0aW9uQ2xpY2tlZFxuICAgIH1cbiAgfSkgOiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZy1kcm9wZG93blwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCIgYnRuIHRhZ1wiLFxuICAgIGNsYXNzOiAnYmctJyArIF92bS50YWcuY29sb3IsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udGFnQ2xpY2tlZCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGFnLm5hbWUpKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDUwNGRhZWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXG4vLyBtb2R1bGUgaWQgPSAzNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1zb2xpZCBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLW1hcC1tYXJrZXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b3VjaGVzJykpICsgXCJcXG4gICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbKF92bS50b3VjaGVzLmxlbmd0aCkgPyBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9kby1saXN0IHVpLXNvcnRhYmxlXCJcbiAgfSwgX3ZtLl9sKChfdm0udG91Y2hlcyksIGZ1bmN0aW9uKHRvdWNoKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIsXG4gICAgICBzdHlsZTogKCdiYWNrZ3JvdW5kOicgKyB0b3VjaC5jb2xvci5oZXggKyAnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7JylcbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyh0b3VjaC50ZXh0KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NtYWxsJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvY2stb1wiXG4gICAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Muc3RhcnRfYXQnLCB7XG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKHRvdWNoLnN0YXJ0KVxuICAgIH0pKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc21hbGwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kYW5nZXJcIlxuICAgIH0sIFtfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNsb2NrLW9cIlxuICAgIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZF9hdCcsIHtcbiAgICAgIGVuZDogX3ZtLnRvSEhNTVNTKHRvdWNoLmVuZClcbiAgICB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRvb2xzXCJcbiAgICB9LCBbX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1lZGl0XCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5lZGl0VG91Y2godG91Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaC1vXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5yZW1vdmVUb3VjaCh0b3VjaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSldKVxuICB9KSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udG91Y2hlcy5sZW5ndGgpID8gX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Mubm9fdG91Y2hlcycpKSldKSA6IF92bS5fZSgpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01NTM5MDM5N1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTUzOTAzOTchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDM2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXNvbGlkIGNvbGxhcHNlZC1ib3hcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImluc3BlY3RvckJveFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodCBib3gtdG9vbHNcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJpZFwiOiBcImluc3BlY3RvclRvb2dsZXJcIixcbiAgICAgIFwiZGF0YS13aWRnZXRcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgIFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiOiBcIkNvbGxhcHNlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVPcGVuXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiXG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FsZW5kYXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuaW5zcGVjdG9yJykpICsgXCJcXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnRvdWNoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGluc3BlY3Rvci1pbmZvXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIsXG4gICAgc3R5bGU6ICgnYmFja2dyb3VuZDonICsgX3ZtLmJhY2tncm91bmQgKyAnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7IG1hcmdpbi1yaWdodDo1cHgnKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm8tLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zdGFydCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lbmQpKV0pXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgWyhfdm0udG91Y2gpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtaW5zcGVjdG9yLW1lbnVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbKF92bS5yZWNvcmRpbmdUb3VjaCkgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNyZWF0ZUFjdGlvblxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5lbmRfYWN0aW9uJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5wbGF5XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmFcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2ZhLXBsYXknOiAhX3ZtLnBsYXlpbmcsICdmYS1wYXVzZSB0ZXh0LWRhbmdlcic6IF92bS5wbGF5aW5nXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wbGF5aW5nID8gX3ZtLiR0KCdzY291dGluZ3MucGF1c2UnKSA6IF92bS4kdCgnc2NvdXRpbmdzLnBsYXknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuLWdyb3VwXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5iYWNrd2FyZCgxMClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1mYXN0LWJhY2t3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5iYWNrd2FyZCg1KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWJhY2t3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcndhcmQoNSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1mb3J3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcndhcmQoMTApXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZmFzdC1mb3J3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgwLjI1KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjI1IHhcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgwLjUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNSB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wbGF5YmFja1JhdGUoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wbGF5YmFja1JhdGUoMS41KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucGxheWJhY2tSYXRlKDIpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnVcIlxuICB9LCBbKF92bS50b3VjaCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IG5vLXBhZGRpbmctcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MubGVmdF9hY3Rpb25zJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgbm8tcGFkZGluZy1sZWZ0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXRobGV0ZS1tZW51LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnJpZ2h0X2FjdGlvbnMnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0udG91Y2gpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiBuby1wYWRkaW5nLXJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXRobGV0ZS1tZW51LWxlZnRcIlxuICB9LCBbX2MoJ3RhZ3MnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnc1wiOiBfdm0udGFnc0xlZnQsXG4gICAgICBcInNlbGVjdGVkXCI6IF92bS5hY3Rpb24ubGVmdFRhZ3MsXG4gICAgICBcInR5cGVcIjogXCJsZWZ0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInRhZy1kZWxldGVkXCI6IF92bS50YWdEZWxldGVkTGVmdCxcbiAgICAgIFwidGFnLXNlbGVjdGVkXCI6IF92bS50YWdTZWxlY3RlZExlZnRcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiBuby1wYWRkaW5nLWxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtbGVmdFwiXG4gIH0sIFtfYygndGFncycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdzXCI6IF92bS50YWdzUmlnaHQsXG4gICAgICBcInNlbGVjdGVkXCI6IF92bS5hY3Rpb24ucmlnaHRUYWdzLFxuICAgICAgXCJ0eXBlXCI6IFwicmlnaHRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidGFnLWRlbGV0ZWRcIjogX3ZtLnRhZ0RlbGV0ZWRSaWdodCxcbiAgICAgIFwidGFnLXNlbGVjdGVkXCI6IF92bS50YWdTZWxlY3RlZFJpZ2h0XG4gICAgfVxuICB9KV0sIDEpXSldKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbnNwZWN0b3JcIlxuICAgIH1cbiAgfSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU3OTJmNTZjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAzNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbKF92bS5vcGVuKSA/IF9jKCdmb3JtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWN0aW9uXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5vblN1Ym1pdCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0b3VjaC50ZXh0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy10aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGVcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC50ZXh0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2gudGV4dFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC50ZXh0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2gudGV4dFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctdGl0bGVcIixcbiAgICAgIFwibmFtZVwiOiBcIm5ldy10aXRsZVwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXJ1bGVzXCI6IFwicmVxdWlyZWRcIixcbiAgICAgIFwiZGF0YS1hc1wiOiBcIlRpdGxlXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVGl0bGVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC50ZXh0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLnRleHQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy10aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3JcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnY29tcGFjdC1waWNrZXInLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guY29sb3IpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5jb2xvclwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS50b3VjaC5jb2xvcilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZS1jb2xvclwiOiBfdm0ub25DaGFuZ2VDb2xvcixcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50b3VjaC5jb2xvciA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctc3RhcnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IChzZWMpXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5zdGFydCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnN0YXJ0XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnN0YXJ0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guc3RhcnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctc3RhcnRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS1ydWxlc1wiOiBcInJlcXVpcmVkfG51bWVyaWNcIixcbiAgICAgIFwiZGF0YS1hc1wiOiBcIlN0YXJ0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5zdGFydClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC5zdGFydCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnN0YXJ0Rm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwic3RhcnRGbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc3RhcnRGbXQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc3RhcnRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0b3VjaC5zdGFydCcpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0b3VjaC5lbmQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LWVuZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgRW5kKHNlYylcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmVuZCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmVuZFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5lbmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5lbmRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LWVuZFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LWVuZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXJ1bGVzXCI6IFwicmVxdWlyZWR8bnVtZXJpY1wiLFxuICAgICAgXCJkYXRhLWFzXCI6IFwiRW5kXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW5kXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2guZW5kKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLmVuZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVuZEZtdCksXG4gICAgICBleHByZXNzaW9uOiBcImVuZEZtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LWVuZC1mbXRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmVuZEZtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5lbmRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpKSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbGxpZGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgVGhlIHRvdWNoIHRoYXQgeW91IHdhbnQgdG8gYWRkIG92ZXJsYXAgd2l0aDpcXG4gICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ3VsJywgX3ZtLl9sKChfdm0uY29sbGlkZVRvdWNoZXMpLCBmdW5jdGlvbih0b3VjaCkge1xuICAgIHJldHVybiBfYygnbGknLCBbKHRvdWNoLnByZXZpb3VzLmhhc093blByb3BlcnR5KCdpZCcpKSA/IF9jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyh0b3VjaC5wcmV2aW91cy50ZXh0KSArIFwiOiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIFwiICsgX3ZtLl9zKF92bS50b0hITU1TUyh0b3VjaC5wcmV2aW91cy5zdGFydCkpICsgXCIgYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50b0hITU1TUyh0b3VjaC5wcmV2aW91cy5lbmQpKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAodG91Y2guY3VycmVudC5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkgPyBfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3ModG91Y2guY3VycmVudC50ZXh0KSArIFwiOiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50b0hITU1TUyh0b3VjaC5jdXJyZW50LnN0YXJ0KSkgKyBcIiBhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRvSEhNTVNTKHRvdWNoLmN1cnJlbnQuZW5kKSkpXSkgOiBfdm0uX2UoKV0pXG4gIH0pKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmVuZEludmFsaWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX3ZtLl9tKDEpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFkZCBUb3VjaFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkNhbmNlbFwiKV0pXSldKV0pIDogX3ZtLl9lKCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdoNCcsIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGZhIGZhLWJhblwiXG4gIH0pLCBfdm0uX3YoXCIgVG91Y2hlcyBjYW50IG92ZXJsYXAhXCIpXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJhbGVydFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGZhIGZhLWJhblwiXG4gIH0pLCBfdm0uX3YoXCIgVmFsaWRhdGlvbiBFcnJvciFcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcXG4gICAgICAgICAgICAgICAgXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVjYjgzZDBkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZ3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwiZ3JvdXBcIixcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIi4uLlwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS50YWdzKSwgZnVuY3Rpb24odGFnKSB7XG4gICAgcmV0dXJuIF9jKCd0YWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRhZ1wiOiB0YWdcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcInRhZy1jbGlja2VkXCI6IF92bS50YWdTZWxlY3RlZFxuICAgICAgfVxuICAgIH0pXG4gIH0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZ3Mtc2VsZWN0ZWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJkcmFndWxhXCIsXG4gICAgICByYXdOYW1lOiBcInYtZHJhZ3VsYVwiLFxuICAgICAgdmFsdWU6IChfdm0uc2VsZWN0ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGFncy1saXN0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYmFnXCI6IFwiZmlyc3QtYmFnXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnNlbGVjdGVkKSwgZnVuY3Rpb24odGFnKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBrZXk6IHRhZy5pZFxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWxcIixcbiAgICAgIGNsYXNzOiAnYmctJyArIHRhZy5jb2xvclxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKHRhZy5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgKHRhZy5vcHRpb24pID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHRhZy5vcHRpb24ubmFtZSkpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZGVsZXRlVGFnKHRhZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiw5dcIildKV0pXSldKVxuICB9KSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVmNDIyM2Y1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01ZjQyMjNmNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcbi8vIG1vZHVsZSBpZCA9IDM2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93biB0YWctZHJvcGRvd25cIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdG9nZ2xlIGJ0biB0YWdcIixcbiAgICBjbGFzczogJ2JnLScgKyBfdm0udGFnLmNvbG9yLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiZHJvcGRvd25cIixcbiAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICBcImlkXCI6IF92bS5pZFxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRhZy5uYW1lKSArIFwiXFxuICAgICAgICBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNhcmV0LWRvd25cIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBfdm0uaWRcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnRhZy5vcHRpb25zKSwgZnVuY3Rpb24ob3B0KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfYygnYScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBcIiNcIlxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3ZtLmNsaWNrT3B0KG9wdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKG9wdC5uYW1lKSldKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZmMTI0YzlmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02ZjEyNGM5ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAzNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLm9uU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50aXRsZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2gudGV4dCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnRleHRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2gudGV4dCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnRleHRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXRpdGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJ0b3VjaC50ZXh0XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiVGl0bGVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJUaXRsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnRvdWNoLnRleHQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2gudGV4dCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygndG91Y2gudGV4dCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLnRleHQnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy10aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuY29sb3InKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdjb21wYWN0LXBpY2tlcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5jb2xvciksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmNvbG9yXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdWNoLmNvbG9yKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlLWNvbG9yXCI6IF92bS5vbkNoYW5nZUNvbG9yLFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvdWNoLmNvbG9yID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy1zdGFydFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Muc3RhcnQnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guc3RhcnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5zdGFydFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5zdGFydCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnN0YXJ0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1zdGFydFwiLFxuICAgICAgXCJuYW1lXCI6IFwidG91Y2guc3RhcnRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkfG51bWVyaWNcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBcIlN0YXJ0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5zdGFydClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC5zdGFydCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnN0YXJ0Rm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwic3RhcnRGbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc3RhcnRGbXQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc3RhcnRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0b3VjaC5zdGFydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2guZW5kJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy1lbmRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5lbmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5lbmRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guZW5kKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guZW5kXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmRcIixcbiAgICAgIFwibmFtZVwiOiBcInRvdWNoLmVuZFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWR8bnVtZXJpY1wiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiRW5kXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW5kXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2guZW5kKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLmVuZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVuZEZtdCksXG4gICAgICBleHByZXNzaW9uOiBcImVuZEZtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LWVuZC1mbXRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLmVuZEZtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5lbmRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb2xsaWRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcImFsZXJ0XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gZmEgZmEtYmFuXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoZXNfY2FudF9vdmVybGFwJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfd2l0aCcpKSArIFwiOlxcbiAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygndWwnLCBfdm0uX2woKF92bS5jb2xsaWRlVG91Y2hlcyksIGZ1bmN0aW9uKGNvbGxpZGVUb3VjaCkge1xuICAgIHJldHVybiBfYygnbGknLCBbKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5pZCAhPSBfdm0udG91Y2guaWQpID8gX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJywge1xuICAgICAgdGl0bGU6IGNvbGxpZGVUb3VjaC5wcmV2aW91cy50ZXh0LFxuICAgICAgc3RhcnQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuc3RhcnQpLFxuICAgICAgZW5kOiBfdm0udG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLmVuZClcbiAgICB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoY29sbGlkZVRvdWNoLmN1cnJlbnQuaWQgIT0gX3ZtLnRvdWNoLmlkKSA/IF9jKCdzdHJvbmcnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycsIHtcbiAgICAgIHRpdGxlOiBjb2xsaWRlVG91Y2guY3VycmVudC50ZXh0LFxuICAgICAgc3RhcnQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5zdGFydCksXG4gICAgICBlbmQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5lbmQpXG4gICAgfSkpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSkgOiBfdm0uX2UoKV0pXG4gIH0pKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmVuZEludmFsaWQpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBmYSBmYS1iYW5cIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudmFsaWRhdGlvbl9lcnJvcicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2VuZF9ncmVhdGVyJykpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnNhdmUnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5jYW5jZWwnKSkpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hNzQ5ZDYwMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtc29saWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRpbWVsaW5lQm94XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0IGJveC10b29sc1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlpvb20gSW5cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uem9vbUluKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2gtcGx1c1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJab29tIE91dFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS56b29tT3V0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2gtbWludXNcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImlkXCI6IFwidGltZWxpbmVUb29nbGVyXCIsXG4gICAgICBcImRhdGEtd2lkZ2V0XCI6IFwiY29sbGFwc2VcIixcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgICBcImRhdGEtb3JpZ2luYWwtdGl0bGVcIjogXCJDb2xsYXBzZVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9vZ2xlT3BlblxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLW1pbnVzXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRpbWVsaW5lJykpICsgXCJcXG4gICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidGltZWxpbmVcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWU1NmM4MDg0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1lNTZjODA4NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTc5MmY1NmMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTc5MmY1NmMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU3OTJmNTZjIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU3OTJmNTZjIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjQyMjNmNSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY0MjIzZjUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ3MudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjQyMjNmNSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY0MjIzZjUhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcbi8vIG1vZHVsZSBpZCA9IDM3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTQ1NzU5MCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGxheWVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTQ1NzU5MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWcudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTUzOTAzOTchLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTUzOTAzOTchLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9uZXdUb3VjaEZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9uZXdUb3VjaEZvcm0udnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjEyNGM5ZiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjEyNGM5ZiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDM5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL2VkaXRUb3VjaEZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lNTZjODA4NCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGltZWxpbmUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lNTZjODA4NCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGltZWxpbmUudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=