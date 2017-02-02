webpackJsonp([0,22],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(291),
  /* template */
  __webpack_require__(349),
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

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(185)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(184),
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

/***/ 182:
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

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 184:
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

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
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

/***/ 232:
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

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(264);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(263);

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

/***/ 240:
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

/***/ 241:
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

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(264);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(263);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _Action = __webpack_require__(233);

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

/***/ 263:
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

/***/ 264:
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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {!function(e,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VueColor=o():e.VueColor=o()}(this,function(){return function(e){function o(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=t(37),i=r(a),n=t(38),s=r(n),l=t(41),c=r(l),u=t(42),d=r(u),h=t(39),f=r(h),_=t(40),p=r(_),v=t(36),g=r(v),b=t(6),m=r(b),x=t(8),w=r(x),C=t(4),y=r(C),k=t(5),F=r(k),A=t(7),R=r(A),S=t(3),M=r(S),N={version:"1.0.26",Compact:i["default"],Material:s["default"],Slider:c["default"],Swatches:d["default"],Photoshop:f["default"],Sketch:p["default"],Chrome:g["default"],Alpha:m["default"],Checkboard:w["default"],EditableInput:y["default"],Hue:F["default"],Saturation:R["default"],ColorMixin:M["default"]};e.exports=N},function(e,o){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],o=0;o<this.length;o++){var t=this[o];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<o.length;a++){var n=o[a];"number"==typeof n[0]&&r[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),e.push(n))}},e}},function(e,o,t){function r(e,o){for(var t=0;t<e.length;t++){var r=e[t],a=d[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(l(r.parts[i],o))}else{for(var n=[],i=0;i<r.parts.length;i++)n.push(l(r.parts[i],o));d[r.id]={id:r.id,refs:1,parts:n}}}}function a(e){for(var o=[],t={},r=0;r<e.length;r++){var a=e[r],i=a[0],n=a[1],s=a[2],l=a[3],c={css:n,media:s,sourceMap:l};t[i]?t[i].parts.push(c):o.push(t[i]={id:i,parts:[c]})}return o}function i(e,o){var t=_(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(o,r.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),g.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function n(e){e.parentNode.removeChild(e);var o=g.indexOf(e);o>=0&&g.splice(o,1)}function s(e){var o=document.createElement("style");return o.type="text/css",i(e,o),o}function l(e,o){var t,r,a;if(o.singleton){var i=v++;t=p||(p=s(o)),r=c.bind(null,t,i,!1),a=c.bind(null,t,i,!0)}else t=s(o),r=u.bind(null,t),a=function(){n(t)};return r(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;r(e=o)}else a()}}function c(e,o,t,r){var a=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(o,a);else{var i=document.createTextNode(a),n=e.childNodes;n[o]&&e.removeChild(n[o]),n.length?e.insertBefore(i,n[o]):e.appendChild(i)}}function u(e,o){var t=o.css,r=o.media,a=o.sourceMap;if(r&&e.setAttribute("media",r),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var d={},h=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},f=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),_=h(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,v=0,g=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=f()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=a(e);return r(t,o),function(e){for(var i=[],n=0;n<t.length;n++){var s=t[n],l=d[s.id];l.refs--,i.push(l)}if(e){var c=a(e);r(c,o)}for(var n=0;n<i.length;n++){var l=i[n];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var b=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,o){e.a&&e.a>1&&(e.a=1);var t=e.hex?(0,n["default"])(e.hex):(0,n["default"])(e),r=t.toHsl(),a=t.toHsv();return 0===r.s&&(r.h=e.h||o||0,a.h=e.h||o||0),{hsl:r,hex:t.toHexString().toUpperCase(),rgba:t.toRgb(),hsv:a,oldHue:e.h||o||r.h,source:e.source,a:e.a}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(35),n=r(i);o["default"]={props:["value"],data:function(){return{val:a(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("change-color",e)}}},watch:{value:function(e){this.val=a(e)}},created:function(){},methods:{colorChange:function(e,o){this.colors=a(e,o||this.oldHue),this.oldHue=this.colors.hsl.h},isValidHex:function(e){return(0,n["default"])(e).isValid()},simpleCheckForValidColor:function(e){for(var o=["r","g","b","a","h","s","a","v"],t=0,r=0,a=0;a<o.length;a++){var i=o[a];e[i]&&(t++,isNaN(e[i])||r++)}if(t===r)return e}}}},function(e,o,t){var r,a;t(56),r=t(18);var i=t(44);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(57),r=t(19);var i=t(45);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(65),r=t(16);var i=t(53);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(58),r=t(20);var i=t(46);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(66),r=t(17);var i=t(54);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h);o["default"]={name:"Chrome",mixins:[i["default"]],props:{},components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},toggleViews:function(){return this.fieldsIndex>=2?void(this.fieldsIndex=0):void this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];o["default"]={name:"Compact",mixins:[i["default"]],props:{},components:{"ed-in":s["default"]},computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:l}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(4),i=r(a),n=t(3),s=r(n);o["default"]={name:"Material",mixins:[s["default"]],components:{"ed-in":i["default"]},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h);o["default"]={name:"Photoshop",mixins:[i["default"]],props:{head:{type:String,"default":"Color Picker"}},components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{currentColor:"#FFF"}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h),_=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];o["default"]={name:"Sketch",mixins:[i["default"]],components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{presetColors:_}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(5),s=r(n);o["default"]={name:"Slider",mixins:[i["default"]],props:{direction:String},components:{hue:s["default"]},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100===.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,o){this.colorChange({h:this.colors.hsl.h,s:.5,l:o,source:"hsl"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(34),i=r(a),n=t(3),s=r(n),l=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey"],c=["900","700","500","300","100"],u=function(){var e=[];return l.forEach(function(o){var t=[];c.forEach(function(e){t.push(i["default"][o][e].toUpperCase())}),e.push(t)}),e}();o["default"]={name:"Swatches",mixins:[s["default"]],computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:u}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(8),i=r(a);o["default"]={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:i["default"]},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,o=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+o+", 0) 0%, rgba("+o+", 1) 100%)"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r=this.$refs.container,a=r.clientWidth,i=(e.pageX||e.touches[0].pageX)-(r.getBoundingClientRect().left+window.pageXOffset);t=i<0?0:i>a?1:Math.round(100*i/a)/100,this.colors.a!==t&&this.$emit("on-change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:t,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o){"use strict";function t(e,o,t){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*t;var a=r.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,r.width,r.height),a.fillStyle=o,a.fillRect(0,0,t,t),a.translate(t,t),a.fillRect(0,0,t,t),r.toDataURL()):null}function r(e,o,r){var i=e+","+o+","+r;if(a[i])return a[i];var n=t(e,o,r);return a[i]=n,n}Object.defineProperty(o,"__esModule",{value:!0});var a={};o["default"]={name:"Checkboard",props:{size:{type:[Number,String],"default":8},white:{type:String,"default":"#fff"},grey:{type:String,"default":"#e6e6e6"}},computed:{bgStyle:function(){return"url("+r(this.white,this.grey,this.size)+") center left"}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"editableInput",props:{label:String,value:[String,Number],max:Number,arrowOffset:{type:Number,"default":1}},computed:{val:function(){return this.value}},filters:{maxFilter:{read:function(e){return this.max&&e>this.max?this.max:e},write:function(e,o){return e}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var o={};o[this.label]=e,this.$emit("on-change",o)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var o=this.val,t=Number(o);if(t){var r=this.arrowOffset||1;38===e.keyCode&&(o=t+r,this.handleChange(o),e.preventDefault()),40===e.keyCode&&(o=t-r,this.handleChange(o),e.preventDefault())}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"Hue",props:{value:Object,direction:{type:String,"default":"horizontal"}},computed:{colors:function(){return this.value},directionClass:function(){return{"vue-color__c-hue--horizontal":"horizontal"===this.direction,"vue-color__c-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?-(100*this.colors.hsl.h/360)+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r,a=this.$refs.container,i=a.clientWidth,n=a.clientHeight,s=(e.pageX||e.touches[0].pageX)-(a.getBoundingClientRect().left+window.pageXOffset),l=(e.pageY||e.touches[0].pageY)-(a.getBoundingClientRect().top+window.pageYOffset);"vertical"===this.direction?(l<0?t=359:l>n?t=0:(r=-(100*l/n)+100,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(s<0?t=0:s>i?t=359:(r=100*s/i,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(33),i=r(a);o["default"]={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsl.h+",100%, 50%)"},pointerTop:function(){return-(100*this.colors.hsv.v)+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,i["default"])(function(e,o){e(o)},50),handleChange:function(e,o){!o&&e.preventDefault();var t=this.$refs.container,r=t.clientWidth,a=t.clientHeight,i=(e.pageX||e.touches[0].pageX)-(t.getBoundingClientRect().left+window.pageXOffset),n=(e.pageY||e.touches[0].pageY)-(t.getBoundingClientRect().top+window.pageYOffset);i<0?i=0:i>r?i=r:n<0?n=0:n>a&&(n=a);var s=100*i/r,l=-(100*n/a)+100;this.throttle(this.onChange,{h:this.colors.hsl.h,s:s,v:l,a:this.colors.hsl.a,source:"rgb"})},onChange:function(e){this.$emit("on-change",e)},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__compact{padding-top:5px;padding-left:5px;width:240px;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__compact__colors{overflow:hidden;padding:0;margin:0}.vue-color__compact__color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vue-color__compact__color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vue-color__compact__color-item--white .vue-color__compact__dot{background:#000}.vue-color__compact__dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}.vue-color__compact__fields{display:flex;padding-bottom:6px;padding-right:5px;position:relative}.vue-color__compact__fields .vue-color__editable-input__input{width:70%;padding-left:30%;background:none;font-size:12px;color:#333;height:16px}.vue-color__compact__fields .vue-color__editable-input__label{position:absolute;top:3px;left:0;line-height:16px;text-transform:uppercase;font-size:12px;color:#999}.vue-color__compact__pick-color{position:absolute;top:6px;left:5px;height:9px;width:9px}.vue-color__compact__col-3{flex:1}.vue_color__compact__col-hex{flex:2}.vue_color__compact__col-hex .vue-color__editable-input__input{width:80%;padding-left:20%}.vue_color__compact__col-hex .vue-color__editable-input__label{display:none}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__editable-input{position:relative}.vue-color__editable-input__input{padding:0;border:0;outline:none}.vue-color__editable-input__label{text-transform:capitalize}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vue-color__c-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue__container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vue-color__c-hue__pointer{z-index:2;position:absolute}.vue-color__c-hue__picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__saturation,.vue-color__saturation--black,.vue-color__saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0}.vue-color__saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vue-color__saturation--black{background:linear-gradient(0deg,#000,transparent)}.vue-color__saturation--pointer{cursor:pointer;position:absolute}.vue-color__saturation--circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__material .vue-color__editable-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vue-color__material .vue-color__editable-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vue-color__material__hex{border-bottom-width:2px;border-bottom-style:solid}.vue-color__material__split{display:flex;margin-right:-10px;padding-top:11px}.vue-color__material__third{flex:1;padding-right:10px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__slider{position:relative;width:410px}.vue-color__slider__hue-warp{height:12px;position:relative}.vue-color__slider__hue-warp .vue-color__c-hue__picker{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__slider__swatches{display:flex;margin-top:20px}.vue-color__slider__swatch{margin-right:1px;flex:1;width:20%}.vue-color__slider__swatch:first-child{margin-right:1px}.vue-color__slider__swatch:first-child .vue-color__slider__swatch-picker{border-radius:2px 0 0 2px}.vue-color__slider__swatch:last-child{margin-right:0}.vue-color__slider__swatch:last-child .vue-color__slider__swatch-picker{border-radius:0 2px 2px 0}.vue-color__slider__swatch-picker{cursor:pointer;height:12px}.vue-color__slider__swatch-picker--active{transform:scaleY(1.8);border-radius:3.6px/2px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vue-color__swatches__box{padding:16px 0 6px 16px;overflow:hidden}.vue-color__swatches__color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vue-color__swatches__color-it{width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;border-radius:2px 2px 0 0}.vue-color__swatches__pick{fill:#fff;margin-left:8px;display:block}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.vue-colors__photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vue-colors__photoshop__head{background-image:linear-gradient(-180deg,#f0f0f0,#d4d4d4);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vue-colors__photoshop__body{padding:15px;display:flex}.vue-colors__photoshop__saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vue-colors__photoshop__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-colors__photoshop__hue-wrap{position:relative;height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vue-colors__photoshop__hue-pointer{position:relative}.vue-colors__photoshop__hue-pointer--left,.vue-colors__photoshop__hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vue-colors__photoshop__hue-pointer--left:after,.vue-colors__photoshop__hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;transform:translate(-8px,-5px)}.vue-colors__photoshop__hue-pointer--left{transform:translate(-13px,-4px)}.vue-colors__photoshop__hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vue-colors__photoshop__controls{width:180px;margin-left:10px;display:flex}.vue-colors__photoshop__actions{margin-left:20px;flex:1}.vue-colors__photoshop__ac-btn{cursor:pointer;background-image:linear-gradient(-180deg,#fff,#e6e6e6);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vue-colors__photoshop__previews{width:60px}.vue-colors__photoshop__previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vue-colors__photoshop__previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vue-colors__photoshop__previews__label{font-size:14px;color:#000;text-align:center}.vue-colors__photoshop__fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vue-colors__photoshop__fields .vue-color__editable-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vue-colors__photoshop__fields .vue-color__editable-input__label{top:0;left:0;width:34px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vue-colors__photoshop__fields__divider{height:5px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}',""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vue-color__sketch__saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vue-color__sketch__controls{display:flex}.vue-color__sketch__sliders{padding:4px 0;flex:1}.vue-color__sketch__sliders .vue-color__c-alpha__gradient,.vue-color__sketch__sliders .vue-color__c-hue{border-radius:2px}.vue-color__sketch__hue-wrap{position:relative;height:10px}.vue-color__sketch__alpha-wrap{position:relative;height:10px;margin-top:4px;overflow:hidden}.vue-color__sketch__color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vue-color__sketch__active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vue-color__sketch__field{display:flex;padding-top:4px}.vue-color__sketch__field .vue-color__editable-input__input{width:80%;padding:4px 10% 3px;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:11px}.vue-color__sketch__field .vue-color__editable-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vue-color__sketch__field--single{flex:1;padding-left:6px}.vue-color__sketch__field--double{flex:2}.vue-color__sketch__presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vue-color__sketch__presets-color{border-radius:3px;overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo;background-color:#fff}.vue-color__chrome__controls{display:flex}.vue-color__chrome__color-wrap{width:32px}.vue-color__chrome__active-color{margin-top:6px;width:16px;height:16px;border-radius:8px;position:relative;overflow:hidden}.vue-color__chrome__sliders{flex:1}.vue-color__chrome__sliders .vue-color__c-alpha__gradient,.vue-color__chrome__sliders .vue-color__c-hue{border-radius:2px}.vue-color__chrome__sliders .vue-color__c-alpha__picker,.vue-color__chrome__sliders .vue-color__c-hue__picker{width:12px;height:12px;border-radius:6px;transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__chrome__fields-wrap{padding-top:16px;display:flex}.vue-color__chrome__fields{display:flex;margin-left:-6px;flex:1}.vue-color__chrome__field{padding-left:6px;width:100%}.vue-color__chrome__toggle-btn{width:32px;text-align:right;position:relative}.vue-color__chrome__icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vue-color__chrome__icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vue-color__chrome__hue-wrap{margin-bottom:8px}.vue-color__chrome__alpha-wrap,.vue-color__chrome__hue-wrap{position:relative;height:10px}.vue-color__chrome__chrome-body{padding:16px 16px 12px;background-color:#fff}.vue-color__chrome__saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vue-color__chrome__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-color__chrome__fields .vue-color__editable-input__input{font-size:11px;color:#333;width:100%;border-rradius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vue-color__chrome__fields .vue-color__editable-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-alpha,.vue-color__c-alpha__checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__checkboard-wrap{overflow:hidden}.vue-color__c-alpha__gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px}.vue-color__c-alpha__pointer{z-index:2;position:absolute}.vue-color__c-alpha__picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0}",""])},function(e,o){(function(o){function t(e,o,t){function r(o){var t=p,r=v;return p=v=void 0,k=o,b=e.apply(r,t)}function i(e){return k=e,m=setTimeout(u,o),F?r(e):b}function n(e){var t=e-x,r=e-k,a=o-t;return A?C(a,g-r):a}function c(e){var t=e-x,r=e-k;return void 0===x||t>=o||t<0||A&&r>=g}function u(){var e=y();return c(e)?d(e):void(m=setTimeout(u,n(e)))}function d(e){return m=void 0,R&&p?r(e):(p=v=void 0,b)}function h(){void 0!==m&&clearTimeout(m),k=0,p=x=v=m=void 0}function f(){return void 0===m?b:d(y())}function _(){var e=y(),t=c(e);if(p=arguments,v=this,x=e,t){if(void 0===m)return i(x);if(A)return m=setTimeout(u,o),
r(x)}return void 0===m&&(m=setTimeout(u,o)),b}var p,v,g,b,m,x,k=0,F=!1,A=!1,R=!0;if("function"!=typeof e)throw new TypeError(l);return o=s(o)||0,a(t)&&(F=!!t.leading,A="maxWait"in t,g=A?w(s(t.maxWait)||0,o):g,R="trailing"in t?!!t.trailing:R),_.cancel=h,_.flush=f,_}function r(e,o,r){var i=!0,n=!0;if("function"!=typeof e)throw new TypeError(l);return a(r)&&(i="leading"in r?!!r.leading:i,n="trailing"in r?!!r.trailing:n),t(e,o,{leading:i,maxWait:o,trailing:n})}function a(e){var o=typeof e;return!!e&&("object"==o||"function"==o)}function i(e){return!!e&&"object"==typeof e}function n(e){return"symbol"==typeof e||i(e)&&x.call(e)==u}function s(e){if("number"==typeof e)return e;if(n(e))return c;if(a(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=a(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var t=f.test(e);return t||_.test(e)?p(e.slice(2),t?2:8):h.test(e)?c:+e}var l="Expected a function",c=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,_=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,b=v||g||Function("return this")(),m=Object.prototype,x=m.toString,w=Math.max,C=Math.min,y=function(){return b.Date.now()};e.exports=r}).call(o,function(){return this}())},function(e,o,t){var r,a,i;!function(t,n){a=[],r=n,i="function"==typeof r?r.apply(o,a):r,!(void 0!==i&&(e.exports=i))}(this,function(){return{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},lightBlue:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},lightGreen:{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},blueGrey:{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},darkText:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},lightText:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},darkIcons:{active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},lightIcons:{active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},white:"#ffffff",black:"#000000"}})},function(e,o,t){var r;!function(a){function i(e,o){if(e=e?e:"",o=o||{},e instanceof i)return e;if(!(this instanceof i))return new i(e,o);var t=n(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=X(100*this._a)/100,this._format=o.format||t.format,this._gradientType=o.gradientType,this._r<1&&(this._r=X(this._r)),this._g<1&&(this._g=X(this._g)),this._b<1&&(this._b=X(this._b)),this._ok=t.ok,this._tc_id=V++}function n(e){var o={r:0,g:0,b:0},t=1,r=null,a=null,i=null,n=!1,l=!1;return"string"==typeof e&&(e=I(e)),"object"==typeof e&&(D(e.r)&&D(e.g)&&D(e.b)?(o=s(e.r,e.g,e.b),n=!0,l="%"===String(e.r).substr(-1)?"prgb":"rgb"):D(e.h)&&D(e.s)&&D(e.v)?(r=O(e.s),a=O(e.v),o=d(e.h,r,a),n=!0,l="hsv"):D(e.h)&&D(e.s)&&D(e.l)&&(r=O(e.s),i=O(e.l),o=c(e.h,r,i),n=!0,l="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=M(t),{ok:n,format:e.format||l,r:q(255,Y(o.r,0)),g:q(255,Y(o.g,0)),b:q(255,Y(o.b,0)),a:t}}function s(e,o,t){return{r:255*N(e,255),g:255*N(o,255),b:255*N(t,255)}}function l(e,o,t){e=N(e,255),o=N(o,255),t=N(t,255);var r,a,i=Y(e,o,t),n=q(e,o,t),s=(i+n)/2;if(i==n)r=a=0;else{var l=i-n;switch(a=s>.5?l/(2-i-n):l/(i+n),i){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:a,l:s}}function c(e,o,t){function r(e,o,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(o-e)*t:t<.5?o:t<2/3?e+(o-e)*(2/3-t)*6:e}var a,i,n;if(e=N(e,360),o=N(o,100),t=N(t,100),0===o)a=i=n=t;else{var s=t<.5?t*(1+o):t+o-t*o,l=2*t-s;a=r(l,s,e+1/3),i=r(l,s,e),n=r(l,s,e-1/3)}return{r:255*a,g:255*i,b:255*n}}function u(e,o,t){e=N(e,255),o=N(o,255),t=N(t,255);var r,a,i=Y(e,o,t),n=q(e,o,t),s=i,l=i-n;if(a=0===i?0:l/i,i==n)r=0;else{switch(i){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:a,v:s}}function d(e,o,t){e=6*N(e,360),o=N(o,100),t=N(t,100);var r=a.floor(e),i=e-r,n=t*(1-o),s=t*(1-i*o),l=t*(1-(1-i)*o),c=r%6,u=[t,s,n,n,l,t][c],d=[l,t,t,s,n,n][c],h=[n,n,l,t,t,s][c];return{r:255*u,g:255*d,b:255*h}}function h(e,o,t,r){var a=[H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(e,o,t,r,a){var i=[H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16)),H(z(r))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function _(e,o,t,r){var a=[H(z(r)),H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16))];return a.join("")}function p(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s-=o/100,t.s=P(t.s),i(t)}function v(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s+=o/100,t.s=P(t.s),i(t)}function g(e){return i(e).desaturate(100)}function b(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l+=o/100,t.l=P(t.l),i(t)}function m(e,o){o=0===o?0:o||10;var t=i(e).toRgb();return t.r=Y(0,q(255,t.r-X(255*-(o/100)))),t.g=Y(0,q(255,t.g-X(255*-(o/100)))),t.b=Y(0,q(255,t.b-X(255*-(o/100)))),i(t)}function x(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l-=o/100,t.l=P(t.l),i(t)}function w(e,o){var t=i(e).toHsl(),r=(t.h+o)%360;return t.h=r<0?360+r:r,i(t)}function C(e){var o=i(e).toHsl();return o.h=(o.h+180)%360,i(o)}function y(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+120)%360,s:o.s,l:o.l}),i({h:(t+240)%360,s:o.s,l:o.l})]}function k(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+90)%360,s:o.s,l:o.l}),i({h:(t+180)%360,s:o.s,l:o.l}),i({h:(t+270)%360,s:o.s,l:o.l})]}function F(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+72)%360,s:o.s,l:o.l}),i({h:(t+216)%360,s:o.s,l:o.l})]}function A(e,o,t){o=o||6,t=t||30;var r=i(e).toHsl(),a=360/t,n=[i(e)];for(r.h=(r.h-(a*o>>1)+720)%360;--o;)r.h=(r.h+a)%360,n.push(i(r));return n}function R(e,o){o=o||6;for(var t=i(e).toHsv(),r=t.h,a=t.s,n=t.v,s=[],l=1/o;o--;)s.push(i({h:r,s:a,v:n})),n=(n+l)%1;return s}function S(e){var o={};for(var t in e)e.hasOwnProperty(t)&&(o[e[t]]=t);return o}function M(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function N(e,o){L(e)&&(e="100%");var t=E(e);return e=q(o,Y(0,parseFloat(e))),t&&(e=parseInt(e*o,10)/100),a.abs(e-o)<1e-6?1:e%o/parseFloat(o)}function P(e){return q(1,Y(0,e))}function j(e){return parseInt(e,16)}function L(e){return"string"==typeof e&&e.indexOf(".")!=-1&&1===parseFloat(e)}function E(e){return"string"==typeof e&&e.indexOf("%")!=-1}function H(e){return 1==e.length?"0"+e:""+e}function O(e){return e<=1&&(e=100*e+"%"),e}function z(e){return a.round(255*parseFloat(e)).toString(16)}function B(e){return j(e)/255}function D(e){return!!Z.CSS_UNIT.exec(e)}function I(e){e=e.replace($,"").replace(U,"").toLowerCase();var o=!1;if(G[e])e=G[e],o=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Z.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=Z.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Z.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=Z.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Z.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=Z.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Z.hex8.exec(e))?{r:j(t[1]),g:j(t[2]),b:j(t[3]),a:B(t[4]),format:o?"name":"hex8"}:(t=Z.hex6.exec(e))?{r:j(t[1]),g:j(t[2]),b:j(t[3]),format:o?"name":"hex"}:(t=Z.hex4.exec(e))?{r:j(t[1]+""+t[1]),g:j(t[2]+""+t[2]),b:j(t[3]+""+t[3]),a:B(t[4]+""+t[4]),format:o?"name":"hex8"}:!!(t=Z.hex3.exec(e))&&{r:j(t[1]+""+t[1]),g:j(t[2]+""+t[2]),b:j(t[3]+""+t[3]),format:o?"name":"hex"}}function T(e){var o,t;return e=e||{level:"AA",size:"small"},o=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),"AA"!==o&&"AAA"!==o&&(o="AA"),"small"!==t&&"large"!==t&&(t="small"),{level:o,size:t}}var $=/^\s+/,U=/\s+$/,V=0,X=a.round,q=a.min,Y=a.max,W=a.random;i.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,o,t,r,i,n,s=this.toRgb();return e=s.r/255,o=s.g/255,t=s.b/255,r=e<=.03928?e/12.92:a.pow((e+.055)/1.055,2.4),i=o<=.03928?o/12.92:a.pow((o+.055)/1.055,2.4),n=t<=.03928?t/12.92:a.pow((t+.055)/1.055,2.4),.2126*r+.7152*i+.0722*n},setAlpha:function(e){return this._a=M(e),this._roundA=X(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),o=X(360*e.h),t=X(100*e.s),r=X(100*e.v);return 1==this._a?"hsv("+o+", "+t+"%, "+r+"%)":"hsva("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=l(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=l(this._r,this._g,this._b),o=X(360*e.h),t=X(100*e.s),r=X(100*e.l);return 1==this._a?"hsl("+o+", "+t+"%, "+r+"%)":"hsla("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return f(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:X(this._r),g:X(this._g),b:X(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+X(this._r)+", "+X(this._g)+", "+X(this._b)+")":"rgba("+X(this._r)+", "+X(this._g)+", "+X(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:X(100*N(this._r,255))+"%",g:X(100*N(this._g,255))+"%",b:X(100*N(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+X(100*N(this._r,255))+"%, "+X(100*N(this._g,255))+"%, "+X(100*N(this._b,255))+"%)":"rgba("+X(100*N(this._r,255))+"%, "+X(100*N(this._g,255))+"%, "+X(100*N(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(K[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var o="#"+_(this._r,this._g,this._b,this._a),t=o,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=i(e);t="#"+_(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+o+",endColorstr="+t+")"},toString:function(e){var o=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0,a=!o&&r&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e);return a?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(t=this.toRgbString()),"prgb"===e&&(t=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(t=this.toHexString()),"hex3"===e&&(t=this.toHexString(!0)),"hex4"===e&&(t=this.toHex8String(!0)),"hex8"===e&&(t=this.toHex8String()),"name"===e&&(t=this.toName()),"hsl"===e&&(t=this.toHslString()),"hsv"===e&&(t=this.toHsvString()),t||this.toHexString())},clone:function(){return i(this.toString())},_applyModification:function(e,o){var t=e.apply(null,[this].concat([].slice.call(o)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,o){return e.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(A,arguments)},complement:function(){return this._applyCombination(C,arguments)},monochromatic:function(){return this._applyCombination(R,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(y,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},i.fromRatio=function(e,o){if("object"==typeof e){var t={};for(var r in e)e.hasOwnProperty(r)&&("a"===r?t[r]=e[r]:t[r]=O(e[r]));e=t}return i(e,o)},i.equals=function(e,o){return!(!e||!o)&&i(e).toRgbString()==i(o).toRgbString()},i.random=function(){return i.fromRatio({r:W(),g:W(),b:W()})},i.mix=function(e,o,t){t=0===t?0:t||50;var r=i(e).toRgb(),a=i(o).toRgb(),n=t/100,s={r:(a.r-r.r)*n+r.r,g:(a.g-r.g)*n+r.g,b:(a.b-r.b)*n+r.b,a:(a.a-r.a)*n+r.a};return i(s)},i.readability=function(e,o){var t=i(e),r=i(o);return(a.max(t.getLuminance(),r.getLuminance())+.05)/(a.min(t.getLuminance(),r.getLuminance())+.05)},i.isReadable=function(e,o,t){var r,a,n=i.readability(e,o);switch(a=!1,r=T(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=n>=4.5;break;case"AAlarge":a=n>=3;break;case"AAAsmall":a=n>=7}return a},i.mostReadable=function(e,o,t){var r,a,n,s,l=null,c=0;t=t||{},a=t.includeFallbackColors,n=t.level,s=t.size;for(var u=0;u<o.length;u++)r=i.readability(e,o[u]),r>c&&(c=r,l=i(o[u]));return i.isReadable(e,l,{level:n,size:s})||!a?l:(t.includeFallbackColors=!1,i.mostReadable(e,["#fff","#000"],t))};var G=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=i.hexNames=S(G),Z=function(){var e="[-\\+]?\\d+%?",o="[-\\+]?\\d*\\.\\d+%?",t="(?:"+o+")|(?:"+e+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",a="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof e&&e.exports?e.exports=i:(r=function(){return i}.call(o,t,o,e),!(void 0!==r&&(e.exports=r)))}(Math)},function(e,o,t){var r,a;t(64),r=t(9);var i=t(52);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(55),r=t(10);var i=t(43);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(59),r=t(11);var i=t(47);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(62),r=t(12);var i=t(50);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(63),r=t(13);var i=t(51);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(60),r=t(14);var i=t(48);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(61),r=t(15);var i=t(49);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__compact"},[_c("ul",{staticClass:"vue-color__compact__colors"},_l(defaultColors,function(e){return _c("li",{staticClass:"vue-color__compact__color-item","class":{"vue-color__compact__color-item--white":"#FFFFFF"===e},style:{background:e},on:{click:function(o){handlerClick(e)}}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:e===pick,expression:"c === pick"}],staticClass:"vue-color__compact__dot"})])})),_v(" ")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__editable-input"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:val,expression:"val"}],staticClass:"vue-color__editable-input__input",domProps:{value:_s(val)},on:{keydown:handleKeyDown,input:[function(e){e.target.composing||(val=e.target.value)},update]}}),_v(" "),_c("span",{staticClass:"vue-color__editable-input__label"},[_v(_s(label))])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{"class":["vue-color__c-hue",directionClass]},[_c("div",{ref:"container",staticClass:"vue-color__c-hue__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_c("div",{staticClass:"vue-color__c-hue__pointer",style:{top:pointerTop,left:pointerLeft}},[_c("div",{staticClass:"vue-color__c-hue__picker"})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{ref:"container",staticClass:"vue-color__saturation",style:{background:bgColor},on:{mousedown:handleMouseDown}},[_c("div",{staticClass:"vue-color__saturation--white"}),_v(" "),_c("div",{staticClass:"vue-color__saturation--black"}),_v(" "),_c("div",{staticClass:"vue-color__saturation--pointer",style:{top:pointerTop,left:pointerLeft}},[_c("div",{staticClass:"vue-color__saturation--circle"})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__material"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-color__material__hex",style:{borderColor:colors.hex},attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":onChange,input:function(e){colors.hex=e}}}),_v(" "),_c("div",{staticClass:"vue-color__material__split"},[_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":onChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":onChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":onChange,input:function(e){colors.rgba.b=e}}})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__slider"},[_c("div",{staticClass:"vue-color__slider__hue-warp"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":hueChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__slider__swatches"},_l(swatches,function(e,o){return _c("div",{staticClass:"vue-color__slider__swatch",attrs:{"data-index":o},on:{click:function(t){handleSwClick(o,e)}}},[_c("div",{staticClass:"vue-color__slider__swatch-picker","class":{"vue-color__slider__swatch-picker--active":e==activeOffset},style:{background:"hsl("+colors.hsl.h+", 50%, "+100*e+"%)"}})])}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__swatches",attrs:{"data-pick":pick}},[_c("div",{staticClass:"vue-color__swatches__box"},_l(defaultColors,function(e){return _c("div",{staticClass:"vue-color__swatches__color-group"},_l(e,function(e){return _c("div",{staticClass:"vue-color__swatches__color-it",style:{background:e},attrs:{"data-color":e},on:{click:function(o){handlerClick(e)}}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:e==pick,expression:"c == pick"}],staticClass:"vue-color__swatches__pick"},[_c("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[_c("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-colors__photoshop"},[_c("div",{staticClass:"vue-colors__photoshop__head"},[_v(_s(head))]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__body"},[_c("div",{staticClass:"vue-colors__photoshop__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],attrs:{direction:"vertical"},domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}},[_c("div",{staticClass:"vue-colors__photoshop__hue-pointer"},[_c("i",{staticClass:"vue-colors__photoshop__hue-pointer--left"}),_c("i",{staticClass:"vue-colors__photoshop__hue-pointer--right"})])])]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__controls"},[_c("div",{staticClass:"vue-colors__photoshop__previews"},[_c("div",{staticClass:"vue-colors__photoshop__previews__label"},[_v("new")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__swatches"},[_c("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:colors.hex}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:currentColor}})]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__label"},[_v("current")])]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__actions"},[_c("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleAccept}},[_v("OK")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleCancel}},[_v("Cancel")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"v"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields__divider"}),_v(" "),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields__divider"}),_v(" "),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-colors__photoshop__fields__hex",attrs:{label:"#"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__sketch"},[_c("div",{staticClass:"vue-color__sketch__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__controls"},[_c("div",{staticClass:"vue-color__sketch__sliders"},[_c("div",{staticClass:"vue-color__sketch__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__alpha-wrap"},[_c("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__color-wrap"},[_c("div",{staticClass:"vue-color__sketch__active-color",style:{background:activeColor}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field"},[_c("div",{staticClass:"vue-color__sketch__field--double"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex
},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__presets"},_l(presetColors,function(e){return _c("div",{staticClass:"vue-color__sketch__presets-color",style:{background:e},on:{click:function(o){handlePreset(e)}}})}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__chrome"},[_c("div",{staticClass:"vue-color__chrome__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__chrome-body"},[_c("div",{staticClass:"vue-color__chrome__controls"},[_c("div",{staticClass:"vue-color__chrome__color-wrap"},[_c("div",{staticClass:"vue-color__chrome__active-color",style:{background:activeColor}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__sliders"},[_c("div",{staticClass:"vue-color__chrome__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__alpha-wrap"},[_c("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])])]),_v(" "),_c("div",{staticClass:"vue-color__chrome__fields-wrap"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:0===fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:1===fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:2===fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"l"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_v(" "),_c("div",{staticClass:"vue-color__chrome__toggle-btn",on:{click:toggleViews}},[_c("div",{staticClass:"vue-color__chrome__icon"},[_c("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:showHighlight,mouseenter:showHighlight,mouseout:hideHighlight}},[_c("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:highlight,expression:"highlight"}],staticClass:"vue-color__chrome__icon-highlight"})]),_v(" ")])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__c-alpha"},[_c("div",{staticClass:"vue-color__c-alpha__checkboard-wrap"},[_c("checkboard")]),_v(" "),_c("div",{staticClass:"vue-color__c-alpha__gradient",style:{background:gradientColor}}),_v(" "),_c("div",{ref:"container",staticClass:"vue-color__c-alpha__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_c("div",{staticClass:"vue-color__c-alpha__pointer",style:{left:100*colors.a+"%"}},[_c("div",{staticClass:"vue-color__c-alpha__picker"})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__c-checkerboard",style:{background:bgStyle}})},staticRenderFns:[]}},function(e,o,t){var r=t(21);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(22);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(23);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(24);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(25);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(26);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(27);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(28);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(29);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(30);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(31);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(32);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 266:
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
            this.player = videojs(this.$refs.player, config);
            (0, _mockstate.dispatch)('setPlayer', this.player);
            this.player.play();
            this.player.on('timeupdate', function durationSetter(event) {
                var state = (0, _mockstate.getState)('*');
                if (!state.player.duration) {
                    (0, _mockstate.dispatch)('setDuration', state.player.instance.duration());
                    (0, _mockstate.dispatch)('setZoom', 1);
                    if (state.player.duration) {
                        (0, _mockstate.dispatch)('playerReady', true);
                        state.player.instance.off('timeupdate', durationSetter);
                    }
                } else {
                    (0, _mockstate.dispatch)('playerReady', true);
                    state.player.instance.off('timeupdate', durationSetter);
                }
            });
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

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _inspectorSketch = __webpack_require__(305);

var _inspectorSketch2 = _interopRequireDefault(_inspectorSketch);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(240);

var _collide2 = _interopRequireDefault(_collide);

var _uuid = __webpack_require__(241);

var _uuid2 = _interopRequireDefault(_uuid);

var _Action = __webpack_require__(233);

var _Action2 = _interopRequireDefault(_Action);

var _tags = __webpack_require__(346);

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

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _timelineSketch = __webpack_require__(307);

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

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _player = __webpack_require__(335);

var _player2 = _interopRequireDefault(_player);

var _Touch = __webpack_require__(262);

var _Touch2 = _interopRequireDefault(_Touch);

var _mockstate = __webpack_require__(135);

var _actions = __webpack_require__(308);

var _store = __webpack_require__(309);

var _veeValidate = __webpack_require__(6);

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _newTouchForm = __webpack_require__(342);

var _newTouchForm2 = _interopRequireDefault(_newTouchForm);

var _editTouchForm = __webpack_require__(341);

var _editTouchForm2 = _interopRequireDefault(_editTouchForm);

var _touchesList = __webpack_require__(343);

var _touchesList2 = _interopRequireDefault(_touchesList);

var _timeline = __webpack_require__(340);

var _timeline2 = _interopRequireDefault(_timeline);

var _inspector = __webpack_require__(339);

var _inspector2 = _interopRequireDefault(_inspector);

var _collide = __webpack_require__(240);

var _collide2 = _interopRequireDefault(_collide);

var _pageHeader = __webpack_require__(181);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _scoutingService = __webpack_require__(232);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _scoutingTouchService = __webpack_require__(310);

var _scoutingTouchService2 = _interopRequireDefault(_scoutingTouchService);

var _Action = __webpack_require__(233);

var _Action2 = _interopRequireDefault(_Action);

var _uuid = __webpack_require__(241);

var _uuid2 = _interopRequireDefault(_uuid);

var _errorPresenter = __webpack_require__(311);

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

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _vueColor = __webpack_require__(265);

var _TimeConverter = __webpack_require__(210);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(240);

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

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(135);

var _vueColor = __webpack_require__(265);

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

/***/ 294:
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

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tagDropdown = __webpack_require__(345);

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

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(241);

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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tag = __webpack_require__(344);

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

/***/ 298:
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

/***/ 299:
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

/***/ 302:
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

/***/ 303:
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

/***/ 304:
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

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _mockstate = __webpack_require__(135);

var _InspectorStage = __webpack_require__(302);

var _InspectorStage2 = _interopRequireDefault(_InspectorStage);

var _InspectorTimeline = __webpack_require__(303);

var _InspectorTimeline2 = _interopRequireDefault(_InspectorTimeline);

var _InspectorVideoTimeMarker = __webpack_require__(304);

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

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Touch = __webpack_require__(262);

var _Touch2 = _interopRequireDefault(_Touch);

var _Action = __webpack_require__(233);

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

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _Stage = __webpack_require__(299);

var _Stage2 = _interopRequireDefault(_Stage);

var _Timeline = __webpack_require__(300);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TouchManager = __webpack_require__(298);

var _TouchManager2 = _interopRequireDefault(_TouchManager);

var _VideoTimeMarker = __webpack_require__(301);

var _VideoTimeMarker2 = _interopRequireDefault(_VideoTimeMarker);

var _touchesSpec = __webpack_require__(306);

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

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = undefined;

var _mockstate = __webpack_require__(135);

var actions = exports.actions = {
    playerReady: function playerReady(state, ready) {
        console.log('playerReady');
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

/***/ 309:
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

/***/ 310:
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

/***/ 311:
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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.inspector-info {\n  margin-left: 10px;\n}\n.inspector-info .inspector-info--title {\n    margin: 0 10px;\n}\n.athlete-menu .dropdown {\n  display: inline-block !important;\n}\n.athlete-menu .athlete-menu-title {\n  border-top: 1px solid #d3e0e9;\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding: 0 10px;\n}\n.athlete-menu .athlete-menu-left {\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n.athlete-menu .athlete-menu-right {\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.tags a {\n  border-radius: 0 !important;\n  margin: 0 !important;\n}\n.close {\n  color: #ffffff !important;\n  opacity: 0.8 !important;\n}\n.tags-list {\n  display: block;\n  width: 100%;\n}\n.tags-list .label {\n  padding: 10px;\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.tags-list .label .close {\n    font-size: 16px;\n    margin-left: 5px;\n}\n.tags-list div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n}\n.tags-list div .label,\n  .gu-mirror .label {\n    padding: 10px;\n    line-height: 1.4;\n    font-size: 12px;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n.tags-list div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n  display: inline-block;\n}\n.tags-list div:last-child {\n  margin-bottom: 0;\n}\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n.gu-mirror .label .close {\n    display: none;\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n.gu-transit .close {\n    display: none;\n}\n.tags-list .ex-moved {\n  background-color: #e74c3c;\n}\n.tags-list.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n", ""]);

// exports


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n#video-canvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    padding-right: 15px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/global/video/player.vue?392657a0"],"names":[],"mappings":";AAWA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,OAAA;IACA,oBAAA;CACA","file":"player.vue","sourcesContent":["<template>\n    <div>\n        <video ref=\"player\"\n               class=\"video-js vjs-default-skin\"\n               controls preload=\"auto\"\n               :poster=\"poster\"\n               :data-setup=\"strSource\"\n        ></video>\n    </div>\n</template>\n<style>\n    #video-canvas {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        padding-right: 15px;\n    }\n</style>\n<script>\n    import {dispatch, getState} from 'mockstate';\n\n    export default{\n        data(){\n            return {\n                player: {}\n            }\n        },\n        props: {\n            source: {\n                type: Object\n            },\n            poster: {\n                type: String\n            },\n            offset: {\n                type: Object,\n                default: function () {\n                    return {\n                        start: false,\n                        end: false\n                    }\n                }\n            }\n        },\n        components: {},\n        computed: {\n            strSource(){\n                return JSON.stringify(this.source)\n            }\n        },\n        mounted(){\n            this.initPlayer(this.source);\n        },\n        methods: {\n            api(){\n                return this.player\n            },\n            initPlayer(source){\n                var self = this;\n                console.log(self.source);\n                let config = {\n                    fluid: true,\n                    source: source.sources[0],\n                    techOrder: ['youtube'],\n                    playbackRates: [0.25, 0.5, 1, 1.5, 2],\n                    plugins: {\n                        disableProgress: {},\n                        abLoopPlugin: {\n                            enabled: false,\n                            loopIfBeforeStart: false, //allow video to play normally before the loop section? defaults to true\n                            looopIfAfterEnd: true, // defaults to true\n                            pauseAfterLooping: false,       //if true, after looping video will pause. Defaults to false\n                            pauseBeforeLooping: false,      //if true, before looping video will pause. Defaults to false\n                            createButtons: false,  //defaults to true\n                        }\n                    }\n                };\n                if (this.offset.start) {\n                    config.plugins.dncoffset = {\n                        startOffset: this.offset.start,\n                        endOffset: this.offset.end\n                    }\n                }\n                this.player = videojs(this.$refs.player, config);\n                dispatch('setPlayer', this.player);\n                this.player.play();\n                this.player.on('timeupdate', function durationSetter(event) {\n                    var state = getState('*');\n                    if (!state.player.duration) {\n                        dispatch('setDuration', state.player.instance.duration());\n                        dispatch('setZoom', 1);\n                        if (state.player.duration) {\n                            dispatch('playerReady', true);\n                            state.player.instance.off('timeupdate', durationSetter)\n                        }\n                    } else {\n                        dispatch('playerReady', true);\n                        state.player.instance.off('timeupdate', durationSetter)\n                    }\n                });\n                this.player.playbackRate(1);\n                this.player.on('timeupdate', ()=> {\n                    dispatch('setCurrentTime', this.player.currentTime());\n                });\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.tag {\n    display: inline-block;\n    color: #717171;\n    background: #FFF;\n    box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n    -webkit-transition: all .1s ease-in-out;\n    transition: all .1s ease-in-out;\n    border-radius: 2px;\n    margin: 0 3px 6px 0;\n    padding: 5px 10px;\n    text-decoration: none;\n    cursor: pointer;\n}\n.tags .tag:hover {\n    border-color: #08C;\n}\n.tags .tag.primary {\n    color: #FFF;\n    background-color: #428BCA;\n    border-color: #357EBD\n}\n.tags .tag.success {\n    color: #FFF;\n    background-color: #5CB85C;\n    border-color: #4CAE4C\n}\n.tags .tag.info {\n    color: #FFF;\n    background-color: #5BC0DE;\n    border-color: #46B8DA\n}\n.tags .tag.warning {\n    color: #FFF;\n    background-color: #F0AD4E;\n    border-color: #EEA236\n}\n.tags .tag.danger {\n    color: #FFF;\n    background-color: #D9534F;\n    border-color: #D43F3A\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tag.vue?0b714958"],"names":[],"mappings":";AAOA;IACA,sBAAA;IACA,eAAA;IACA,iBAAA;IAEA,iDAAA;IACA,wCAAA;IAIA,gCAAA;IACA,mBAAA;IACA,oBAAA;IACA,kBAAA;IACA,sBAAA;IACA,gBAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA","file":"tag.vue","sourcesContent":["<template>\n    <tag-dropdown v-if=\"tag.dropdown\" v-on:option-clicked=\"dropdownOptionClicked\" :tag=\"tag\"></tag-dropdown>\n    <div v-else class=\"tag-dropdown\">\n        <a class=\" btn tag\" v-on:click.prevent=\"tagClicked\" :class=\"'bg-'+tag.color\">{{tag.name}}</a>\n    </div>\n</template>\n<style>\n    .tag {\n        display: inline-block;\n        color: #717171;\n        background: #FFF;\n        -webkit-box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n        box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n        -webkit-transition: all .1s ease-in-out;\n        -moz-transition: all .1s ease-in-out;\n        -o-transition: all .1s ease-in-out;\n        -ms-transition: all .1s ease-in-out;\n        transition: all .1s ease-in-out;\n        border-radius: 2px;\n        margin: 0 3px 6px 0;\n        padding: 5px 10px;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    .tags .tag:hover {\n        border-color: #08C;\n    }\n\n    .tags .tag.primary {\n        color: #FFF;\n        background-color: #428BCA;\n        border-color: #357EBD\n    }\n\n    .tags .tag.success {\n        color: #FFF;\n        background-color: #5CB85C;\n        border-color: #4CAE4C\n    }\n\n    .tags .tag.info {\n        color: #FFF;\n        background-color: #5BC0DE;\n        border-color: #46B8DA\n    }\n\n    .tags .tag.warning {\n        color: #FFF;\n        background-color: #F0AD4E;\n        border-color: #EEA236\n    }\n\n    .tags .tag.danger {\n        color: #FFF;\n        background-color: #D9534F;\n        border-color: #D43F3A\n    }\n</style>\n<script>\n    import tagDropdown from './tagDropdown.vue'\n\n    export default{\n        props: {\n            tag: {}\n        },\n        components: {\n            tagDropdown\n        },\n        methods: {\n            dropdownOptionClicked(tag){\n                this.$emit('tag-clicked', tag)\n            },\n            tagClicked(){\n                this.$emit('tag-clicked', this.tag)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"touchesList.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"newTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/newTouchForm.vue?3cf04dd9"],"names":[],"mappings":";AA6SA;IACA,uBAAA;CACA","file":"newTouchForm.vue","sourcesContent":["<template>\n    <div>\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\" v-if=\"open\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.text') }\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            Title\n                        </label>\n                        <div class=\"col-xs-10\">\n\n                            <input id=\"new-title\" name=\"new-title\" type=\"text\"\n                                   v-validate.initial=\"touch.text\"\n                                   data-rules=\"required\"\n                                   data-as=\"Title\"\n                                   class=\"form-control\"\n                                   placeholder=\"Title\"\n                                   v-model=\"touch.text\">\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.text')\">{{ errors.first('touch.text') }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            Color\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.start') }\">\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\n                            Start (sec)\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start\" name=\"new-start\" type=\"text\"\n                                           v-validate.initial=\"touch.start\"\n                                           data-rules=\"required|numeric\"\n                                           data-as=\"Start\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           v-model=\"touch.start\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"startFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.start')\">{{ errors.first('touch.start') }}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.end') }\">\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\n                            End(sec)\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end\" name=\"new-end\" type=\"text\"\n                                           v-validate.initial=\"touch.end\"\n                                           data-rules=\"required|numeric\"\n                                           data-as=\"End\"\n                                           class=\"form-control\"\n                                           placeholder=\"End\"\n                                           v-model=\"touch.end\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"endFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.end')\">{{ errors.first('touch.end') }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"collide\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4><i class=\"icon fa fa-ban\"></i> Touches cant overlap!</h4>\n                        The touch that you want to add overlap with:\n                        <ul>\n                            <li v-for=\"touch in collideTouches\">\n                                <strong v-if=\"touch.previous.hasOwnProperty('id')\">{{touch.previous.text}}: that\n                                    starts\n                                    on {{toHHMMSS(touch.previous.start)}} an\n                                    ends on\n                                    {{toHHMMSS(touch.previous.end)}}</strong>\n                                <strong v-if=\"touch.current.hasOwnProperty('id')\">{{touch.current.text}}: that\n                                    starts on\n                                    {{toHHMMSS(touch.current.start)}} an\n                                    ends on\n                                    {{toHHMMSS(touch.current.end)}}</strong>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"endInvalid\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4><i class=\"icon fa fa-ban\"></i> Validation Error!</h4>\n                        The end of the touch must be greater than the start\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">Add Touch</button>\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">Cancel</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</template>\n<style>\n\n</style>\n<script>\n    import {getState} from 'mockstate';\n    import {Compact} from 'vue-color';\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\n    export default{\n        props: {\n            open: {},\n            initTouch: {\n                default: function () {\n                    return {\n                        initialized: false,\n                        text: null,\n                        start: 0,\n                        end: 100,\n                        color: {\n                            \"hsl\": {\"h\": 61.0762331838565, \"s\": 1, \"l\": 0.4372549019607843, \"a\": 1},\n                            \"hex\": \"#DBDF00\",\n                            \"rgba\": {\"r\": 219, \"g\": 223, \"b\": 0, \"a\": 1, \"alpha\": 50},\n                            \"hsv\": {\"h\": 61.0762331838565, \"s\": 1, \"v\": 0.8745098039215686, \"a\": 1},\n                        }\n                    }\n                }\n            },\n            duration: {},\n            start: {},\n            end: {}\n        },\n        watch: {\n            open(val){\n                this.touch = Object.assign({}, this.initTouch);\n            },\n            start(val){\n                this.touch.start = val;\n            },\n            end(val){\n                this.touch.end = val\n            },\n            'touch.start': function () {\n                this.checkCollide()\n            },\n            'touch.end': function () {\n                this.checkCollide();\n                this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(this.duration));\n            }\n        },\n        data(){\n            return {\n                collide: false,\n                collideTouches: [],\n                endInvalid: false,\n                touch: {\n                    text: null,\n                    start: 0,\n                    end: 0,\n                    color: {\n                        rgba: {\n                            r: 25,\n                            g: 77,\n                            b: 51,\n                            a: 1\n                        },\n                    }\n                }\n            }\n        },\n        computed: {\n            startFmt(){\n                return TimeConverter.toHHMMSS(this.touch.start)\n            },\n            endFmt(){\n                return TimeConverter.toHHMMSS(this.touch.end)\n            },\n            validationEnd(){\n                return parseInt(this.touch.start) + 1;\n            }\n        },\n        components: {\n            'compact-picker': Compact,\n        },\n        methods: {\n            close(){\n                this.$emit('cancel-new-touch');\n            },\n            toHHMMSS(secs) {\n                return TimeConverter.toHHMMSS(secs)\n            },\n            onChangeColor(val){\n                this.touch.color = val\n            },\n            checkCollide(){\n                var touchs = getState('touchManager').touches.slice(0);\n                touchs.push(this.touch);\n                var overlap = this.overlap(touchs);\n                this.collide = overlap.overlap;\n                this.collideTouches = overlap.ranges;\n            },\n            overlap(touchs){\n                var sortedRanges = touchs.sort((previous, current) => {\n\n                    var previousTime = parseInt(previous.start);\n                    var currentTime = parseInt(current.start);\n\n                    // if the previous is earlier than the current\n                    if (previousTime < currentTime) {\n                        return -1;\n                    }\n\n                    // if the previous time is the same as the current time\n                    if (previousTime === currentTime) {\n                        return 0;\n                    }\n\n                    // if the previous time is later than the current time\n                    return 1;\n                });\n\n                // return the final results\n                return sortedRanges.reduce((result, current, idx, arr) => {\n                    // get the previous range\n                    if (idx === 0) {\n                        return result;\n                    }\n                    var previous = arr[idx - 1];\n\n                    // check for any overlap\n                    var previousEnd = parseInt(previous.end);\n                    var currentStart = parseInt(current.start);\n                    var overlap = (previousEnd >= currentStart);\n\n                    // store the result\n                    if (overlap) {\n                        // yes, there is overlap\n                        result.overlap = true;\n                        // store the specific ranges that overlap\n                        result.ranges.push({\n                            previous: previous,\n                            current: current\n                        })\n                    }\n\n                    return result;\n\n                    // seed the reduce\n                }, {overlap: false, ranges: []});\n            },\n            onSubmit(){\n                this.$validator.validateAll();\n                if (this.errors.any()) {\n\n                } else {\n                    this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(Math.floor(this.$parent.$refs.player.api().duration())));\n                    if (!this.endInvalid) {\n                        if (!this.collide) {\n                            this.endInvalid = false;\n                            this.$emit('add-new-touch', this.touch);\n                        }\n                    }\n                }\n            }\n        }\n    }\n</script>\n<style>\n    .vue-color__compact {\n        width: 100% !important;\n    }\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.tag-dropdown {\n    display: inline-block !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tagDropdown.vue?f44c862c"],"names":[],"mappings":";AAcA;IACA,iCAAA;CACA","file":"tagDropdown.vue","sourcesContent":["<template>\n    <div class=\"dropdown tag-dropdown\">\n        <a class=\"dropdown-toggle btn tag\" :class=\"'bg-'+tag.color\"\n           data-toggle=\"dropdown\" aria-expanded=\"false\" :id=\"id\">{{tag.name}}\n            <span class=\"fa fa-caret-down\"></span>\n        </a>\n        <ul class=\"dropdown-menu\" :aria-labelledby=\"id\">\n            <li v-for=\"opt in tag.options\">\n                <a href=\"#\" v-on:click.prevent=\"clickOpt(opt)\">{{opt.name}}</a>\n            </li>\n        </ul>\n    </div>\n</template>\n<style>\n    .tag-dropdown {\n        display: inline-block !important;\n    }\n</style>\n<script>\n    import uuid from 'base/mixins/uuid'\n    export default{\n        props: {\n            tag: {},\n        },\n        data(){\n            return {\n                id: ''\n            }\n        },\n        mixins: [uuid],\n        mounted(){\n            this.id = this.generateUUID();\n        },\n        methods: {\n            clickOpt(opt){\n                this.tag.option = opt;\n                this.$emit('option-clicked', this.tag)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"editTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/editTouchForm.vue?577b7182"],"names":[],"mappings":";AAsQA;IACA,uBAAA;CACA","file":"editTouchForm.vue","sourcesContent":["<template>\n    <div>\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.text') }\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.title')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <input id=\"new-title\"\n                                   name=\"touch.text\"\n                                   type=\"text\"\n                                   v-validate.initial=\"touch.text\"\n                                   data-vv-rules=\"required\"\n                                   data-vv-as=\"Title\"\n                                   class=\"form-control\"\n                                   placeholder=\"Title\"\n                                   v-model=\"touch.text\">\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.text')\">{{ errors.first('touch.text') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.color')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.start') }\">\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.start')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start\"\n                                           name=\"touch.start\"\n                                           type=\"text\"\n                                           v-validate.initial=\"touch.start\"\n                                           data-vv-rules=\"required|numeric\"\n                                           data-vv-as=\"Start\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           v-model=\"touch.start\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"startFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.start')\">{{ errors.first('touch.start') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.end') }\">\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\n                            {{$t('scoutings.end')}}\n                        </label>\n                        <div class=\"col-xs-10\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end\"\n                                           name=\"touch.end\"\n                                           type=\"text\"\n                                           v-validate.initial=\"touch.end\"\n                                           data-vv-rules=\"required|numeric\"\n                                           data-vv-as=\"End\"\n                                           class=\"form-control\"\n                                           placeholder=\"End\"\n                                           v-model=\"touch.end\">\n                                </div>\n                                <div class=\"col-xs-6\">\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\n                                           class=\"form-control\"\n                                           placeholder=\"Start\"\n                                           disabled\n                                           v-model=\"endFmt\">\n                                </div>\n                            </div>\n                            <span class=\"text-danger\"\n                                  v-show=\"errors.has('touch.end')\">{{ errors.first('touch.end') }}\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"collide\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4>\n                            <i class=\"icon fa fa-ban\"></i>\n                            {{$t('scoutings.touches_cant_overlap')}}\n                        </h4>\n                        {{$t('scoutings.touch_overlap_with')}}:\n                        <ul>\n                            <li v-for=\"collideTouch in collideTouches\">\n                                <strong v-if=\"collideTouch.previous.id != touch.id\">\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\n                                    collideTouch.previous.text,start:toHHMMSS(collideTouch.previous.start),end:\n                                    toHHMMSS(collideTouch.previous.end)})}}\n                                </strong>\n                                <strong v-if=\"collideTouch.current.id != touch.id\">\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\n                                    collideTouch.current.text,start:toHHMMSS(collideTouch.current.start),end:\n                                    toHHMMSS(collideTouch.current.end)})}}\n                                </strong>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" v-if=\"endInvalid\">\n                <div class=\"col-xs-12\">\n                    <div class=\"alert alert-danger\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\n                        <h4>\n                            <i class=\"icon fa fa-ban\"></i>\n                            {{$t('scoutings.validation_error')}}\n                        </h4>\n                        {{$t('scoutings.validation_end_greater')}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">{{$t('scoutings.save')}}</button>\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">{{$t('scoutings.cancel')}}</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</template>\n<style>\n\n</style>\n<script>\n    import {getState} from 'mockstate';\n    import {Compact} from 'vue-color';\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\n    import collideMixin from 'base/mixins/collide'\n    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';\n\n    export default{\n        locales: scoutingsLocales,\n        props: {\n            initTouch: {\n                default: function () {\n                    return {\n                        initialized: false,\n                        text: null,\n                        start: 0,\n                        end: 100,\n                        color: {\n                            rgba: {\n                                r: 25,\n                                g: 77,\n                                b: 51,\n                                a: 1\n                            },\n                        }\n                    }\n                }\n            },\n            duration: {},\n        },\n        mixins: [collideMixin],\n        created(){\n            this.touch = Object.assign({}, this.initTouch);\n        },\n        watch: {\n            'touch.start': function () {\n                var collideResult = this.checkCollide(this.touch);\n                this.collide = collideResult.collide;\n                this.collideTouches = collideResult.collideTouches;\n            },\n            'touch.end': function () {\n                var collideResult = this.checkCollide(this.touch);\n                this.collide = collideResult.collide;\n                this.collideTouches = collideResult.collideTouches;\n                this.endInvalid = parseInt(this.touch.start) >= parseInt(this.touch.end);\n            }\n        },\n        data(){\n            return {\n                collide: false,\n                collideTouches: [],\n                endInvalid: false,\n                touch: {\n                    text: null,\n                    start: 0,\n                    end: 0,\n                    color: {\n                        rgba: {\n                            r: 25,\n                            g: 77,\n                            b: 51,\n                            a: 1\n                        },\n                    }\n                }\n            }\n        },\n        computed: {\n            startFmt(){\n                return TimeConverter.toHHMMSS(this.touch.start)\n            },\n            endFmt(){\n                return TimeConverter.toHHMMSS(this.touch.end)\n            },\n            validationEnd(){\n                return parseInt(this.touch.start) + 1;\n            }\n        },\n        components: {\n            'compact-picker': Compact,\n        },\n        methods: {\n            close(){\n                this.$emit('cancel-new-touch', this.touch);\n            },\n            toHHMMSS(secs) {\n                return TimeConverter.toHHMMSS(secs)\n            },\n            onChangeColor(val){\n                this.touch.color = val\n            },\n            onSubmit(){\n                this.$validator.validateAll();\n                if (this.errors.any()) {\n\n                } else {\n                    if (this.touch.start >= this.touch.end) {\n                        this.endInvalid = true;\n                    } else {\n                        this.endInvalid = false;\n                        if (!this.collide) {\n                            this.$emit('add-new-touch', this.touch);\n                        }\n                    }\n                }\n            }\n        }\n    }\n</script>\n<style>\n    .vue-color__compact {\n        width: 100% !important;\n    }\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"timeline.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(385)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(266),
  /* template */
  __webpack_require__(351),
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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(380)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(289),
  /* template */
  __webpack_require__(365),
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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(401)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(290),
  /* template */
  __webpack_require__(376),
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

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(396)
__webpack_require__(397)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(292),
  /* template */
  __webpack_require__(372),
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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(392)
__webpack_require__(393)

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

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(391)

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

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(388)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(295),
  /* template */
  __webpack_require__(359),
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

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(395)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(296),
  /* template */
  __webpack_require__(369),
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

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(381)

var Component = __webpack_require__(132)(
  /* script */
  __webpack_require__(297),
  /* template */
  __webpack_require__(367),
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

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('admin-header', {
    attrs: {
      "title": _vm.title,
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content overlay-wrapper"
  }, [_c('div', {
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
  }, [_c('touches-list')], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.playerReady),
      expression: "playerReady"
    }],
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
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.playerReady),
      expression: "playerReady"
    }],
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
  }, [_vm._v(_vm._s(_vm.$t('forms.back')))])])]), _vm._v(" "), (!_vm.playerReady) ? _c('div', {
    staticClass: "overlay"
  }, [_c('i', {
    staticClass: "fa fa-refresh fa-spin"
  })]) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24779b58", module.exports)
  }
}

/***/ }),

/***/ 351:
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

/***/ 359:
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

/***/ 364:
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

/***/ 365:
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

/***/ 366:
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

/***/ 367:
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

/***/ 369:
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

/***/ 372:
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

/***/ 376:
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

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("67dc73f9", content, false);
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

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("7471721a", content, false);
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

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("06a2d542", content, false);
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

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("65cb71f2", content, false);
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

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("16aafe9c", content, false);
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

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("38b19a8c", content, false);
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

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("454a900d", content, false);
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

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("303c1cd4", content, false);
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

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("c7f9de34", content, false);
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

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("2288cb85", content, false);
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

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(134)("35190154", content, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlIiwid2VicGFjazovLy9wYWdlSGVhZGVyLnZ1ZT81NjBjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/YTU2ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzM4YTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT80NDEyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2NvbGxpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvU2Vjb25kc1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1V1aWRVdGlsLmpzIiwid2VicGFjazovLy8uL34vdnVlLWNvbG9yL2Rpc3QvdnVlLWNvbG9yLm1pbi5qcyIsIndlYnBhY2s6Ly8vcGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vaW5zcGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vdGltZWxpbmUudnVlIiwid2VicGFjazovLy9lZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vZWRpdFRvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL25ld1RvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3RvdWNoZXNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdGFnLnZ1ZSIsIndlYnBhY2s6Ly8vdGFnRHJvcGRvd24udnVlIiwid2VicGFjazovLy90YWdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1N0YWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9UaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvVmlkZW9UaW1lTWFya2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclZpZGVvVGltZU1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2luc3BlY3RvclNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL3NwZWNzL3RvdWNoZXNTcGVjLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvdGltZWxpbmVTa2V0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9zdG9yZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nVG91Y2hTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZXJyb3JQcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlPzYzZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWU/NDhiYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWU/YmQ0NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlPzAxNzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZT83MDYyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlPzMzMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/YTY3ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWU/ZDkzMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/MzVlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/YTU4NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZT83ZWZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2VkaXQudnVlPzYzMDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlPzAxNjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZT9kYWIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWU/ZTAyNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWU/YzUyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT8wODRlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlP2FhMmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlPzJlZGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlPzBkNmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWU/MjYwMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWU/MmZjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZT8yMmNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZT85MGVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWU/NjZhNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvbGlzdHMvdG91Y2hlc0xpc3QudnVlPzZiMmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/NjQ3NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT9iYTUyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZT8yNGFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT8wY2MyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT8yOTA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlPzQzYTAiXSwibmFtZXMiOlsiVGltZUNvbnZlcnRlciIsInNlY3MiLCJzZWNfbnVtIiwicGFyc2VJbnQiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwiY3JlYXRlIiwic2NvdXRpbmciLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJyZW1vdmUiLCJkZWxldGUiLCJBY3Rpb24iLCJzdGFydCIsImVuZCIsImNvbG9yIiwic3RhdGUiLCJ1dWlkIiwiZ2VuZXJhdGVVVUlEIiwibW91c2VJc092ZXIiLCJpc1NlbGVjdGVkIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImxpbWl0VGV4dFkiLCJ0b3VjaE1hbmFnZXIiLCJpbnNwZWN0b3IiLCJ0aW1lbGluZSIsInN0YXJ0WSIsInNlY29uZHNVdGlsIiwiY2FudmFDb250YWluZXIiLCJsZWZ0VGFncyIsInJpZ2h0VGFncyIsImNhbGN1bGF0ZVgiLCJjYWxjdWxhdGVZIiwiY2FsY3VsYXRlV2lkdGgiLCJjYWxjdWxhdGVIZWlnaHQiLCJzZWxlY3RlZEFjdGlvbiIsInJnYmEiLCJhbHBoYSIsIm5vU3Ryb2tlIiwidGV4dFNpemUiLCJ0ZXh0U3R5bGUiLCJOT1JNQUwiLCJmaWxsIiwiciIsImciLCJiIiwicmVjdCIsIkJPTEQiLCJ0ZXh0IiwidG9ISE1NU1MiLCJ0ZXh0QWxpZ24iLCJDRU5URVIiLCJzdHJva2UiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwiZW5kWSIsInN0YXJ0VGltZSIsImFjdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2bSIsImVkaXRUb3VjaCIsInJlY29yZGluZ0FjdGlvbiIsInJlY29yZGluZ1RvdWNoIiwiJHJlZnMiLCJwbGF5ZXIiLCJhcGkiLCJhYkxvb3BQbHVnaW4iLCJzZXRTdGFydCIsInNldEVuZCIsImVuYWJsZSIsImdvVG9TdGFydCIsInNlY29uZFdpZHRoIiwic3RhcnRYIiwibWV0aG9kcyIsImNoZWNrQ29sbGlkZSIsInRvdWNoIiwidG91Y2hlcyIsIl8iLCJyZWplY3QiLCJvIiwicHVzaCIsIm92ZXJsYXAiLCJjb2xsaWRlIiwiY29sbGlkZVRvdWNoZXMiLCJyYW5nZXMiLCJjaGVja0NvbGxpZGVBY3Rpb25zIiwic2VsZWN0ZWRUb3VjaCIsImFjdGlvbnMiLCJjb2xsaWRlQWN0aW9ucyIsInNvcnRlZFJhbmdlcyIsInNvcnQiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJwcmV2aW91c1RpbWUiLCJjdXJyZW50VGltZSIsInJlZHVjZSIsInJlc3VsdCIsImlkeCIsImFyciIsInByZXZpb3VzRW5kIiwiY3VycmVudFN0YXJ0IiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXBsYWNlIiwiYyIsInJhbmRvbSIsInRvU3RyaW5nIiwiVG91Y2giLCJwIiwiaiIsImxlbmd0aCIsImRyYXciLCJzdGFydGVkIiwicGxheSIsIlNlY29uZHNVdGlsIiwiVXVpZFV0aWwiLCJUb3VjaE1hbmFnZXIiLCJpc01vdXNlT3ZlciIsImNvbnNvbGUiLCJsb2ciLCJhVG91Y2hJc1NlbGVjdGVkIiwiaXNNb3VzZVByZXNzc2VkT3ZlciIsImRpc2FibGUiLCJhbkFjdGlvbklzU2VsZWN0ZWQiLCJTdGFnZSIsImJhY2tncm91bmQiLCJub0ZpbGwiLCJUaW1lbGluZSIsInN0YXJ0RGVsdGEiLCJoaWRlIiwiY2FsY3VsYXRlQ29sV2lkdGgiLCJkdXJhdGlvbiIsImVuZFgiLCJheGlzWSIsImkiLCJjb2xXaWR0aCIsIm5ld1giLCJkcmF3U3RhcnRNaW51dGVMYWJlbCIsImRyYXdNaW51dGVMaW5lIiwiZHJhd01pbnV0ZUxhYmVsIiwic2hvd1NlY29uZHNJbnRlcnZhbCIsImRyYXdNaWRkbGVTZWNvbmRMYWJlbCIsImRyYXdNaWRkbGVTZWNvbmRMaW5lIiwic2hvd1NlY29uZHMiLCJkcmF3U2Vjb25kTGluZSIsIm1vdXNlWCIsImNhbnZhcyIsIm1vdXNlWSIsImN1cnNvciIsIkhBTkQiLCJBUlJPVyIsInBtb3VzZVgiLCJzZWNvbmRzWSIsInRvU1MiLCJyb3VuZCIsIm1pbnV0ZXNZIiwiem9vbUZhY3RvciIsIlZpZGVvVGltZU1hcmtlciIsImN1cnJlbnRYIiwiSW5zcGVjdG9yU3RhZ2UiLCJ0cmFuc2xhdGUiLCJwb3AiLCJJbnNwZWN0b3JUaW1lbGluZSIsImRyYXdTdGFydExhYmVsIiwiSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyIiwic2tldGNoIiwic2V0dXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0V2lkdGgiLCJjcmVhdGVDYW52YXMiLCJtb3VzZU1vdmVkIiwibW91c2VQcmVzc2VkIiwiaW5zdGFuY2UiLCJwYXJlbnQiLCJzdGFnZSIsInZpZGVvVGltZU1hcmtlciIsImNvbG9yTW9kZSIsIlJHQiIsImZyYW1lUmF0ZSIsIm5vTG9vcCIsImRyYXdBY3Rpb25zIiwidmlkZW9NYXJrZXIiLCJtb3VzZU92ZXJBY3Rpb24iLCJtb3VzZVByZXNzZWRBY3Rpb24iLCJzdG9wIiwibG9vcCIsImNvbmZpZ0J1dHRvbnMiLCJ6b29tSW4iLCJ6b29tT3V0IiwiaW5pdGlhbFpvb21GYWN0b3IiLCJtb3VzZU92ZXJUb3VjaCIsIm1vdXNlT3ZlciIsIm1vdXNlRHJhZ2dlZCIsImRyYWciLCJtb3VzZVByZXNzZWRUb3VjaCIsInBsYXllclJlYWR5IiwicmVhZHkiLCJzZXRDYW52YXMiLCJzZXRUaW1lbGluZSIsInNldFRvdWNoTWFuYWdlciIsInNldFN0YWdlIiwic2V0UGxheWVyIiwic2V0VmlkZW9NYXJrZXIiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldFRpbWVsaW5lV2lkdGgiLCJzZXRUaW1lbGluZUhpZGUiLCJzZXRUaW1lbGluZUhlaWdodCIsInNldFRpbWVsaW5lTW91c2VPdmVyIiwic2V0VGltZWxpbmVTdGFydFRpbWUiLCJzZXRUaW1lbGluZVN0YXJ0WSIsInNldFRpbWVsaW5lQXhpc1kiLCJzZXRUaW1lbGluZUVuZFkiLCJzZXRUaW1lbGluZVN0YXJ0WCIsInNldFRpbWVsaW5lRW5kWCIsInNldFRpbWVsaW5lTWludXRlc1kiLCJzZXRUaW1lbGluZVNlY29uZHNZIiwic2V0U2hvd1NlY29uZHMiLCJzZXRTaG93U2Vjb25kc0ludGVydmFsIiwic2V0Wm9vbSIsInpvb20iLCJ6b29tRmFjdG9yQ2hhbmdlIiwic2V0U2Vjb25kV2lkdGgiLCJzZXRDb2xXaWR0aCIsInNldER1cmF0aW9uIiwic2V0Q3VycmVudFRpbWUiLCJzZXRJbml0aWFsaXplZCIsImluaXRpYWxpemVkIiwic2V0VG91Y2hlcyIsInNldFNlbGVjdGVkVG91Y2giLCJhZGRUb3VjaCIsImluZGV4IiwiZmluZEluZGV4IiwiY2xvbmVEZWVwIiwicmVtb3ZlVG91Y2giLCJzcGxpY2UiLCJzZXRJbnNwZWN0b3IiLCJzZXRJbnNwZWN0b3JXaWR0aCIsInNldEluc3BlY3RvckhlaWdodCIsInNldEluc3BlY3RvckNhbnZhcyIsInNldEluc3BlY3RvclZpZGVvTWFya2VyIiwic2V0SW5zcGVjdG9yQ2FudmFzV2lkdGgiLCJzZXRJbnNwZWN0b3JDYW52YXNIZWlnaHQiLCJzZXRJbnNwZWN0b3JTdGFnZSIsInNldEluc3BlY3RvclRpbWVsaW5lIiwic2V0SW5zcGVjdG9yU3RhcnRUaW1lIiwic2V0SW5zcGVjdG9yU3RhcnRZIiwic2V0SW5zcGVjdG9yQXhpc1kiLCJzZXRJbnNwZWN0b3JFbmRZIiwic2V0SW5zcGVjdG9yU3RhcnRYIiwic2V0SW5zcGVjdG9yRW5kWCIsInNldEluc3BlY3Rvck1pbnV0ZXNZIiwic2V0SW5zcGVjdG9yU2Vjb25kc1kiLCJzZXRJbnNwZWN0b3JTZWNvbmRXaWR0aCIsInNldEluc3BlY3RvckNvbFdpZHRoIiwic2V0U2VsZWN0ZWRBY3Rpb24iLCJyZWNvcmRpbmciLCJhZGRBY3Rpb24iLCJhZGRMZWZ0VGFnIiwidGFnIiwiYWRkUmlnaHRUYWciLCJlZGl0QWN0aW9uIiwicmVtb3ZlQWN0aW9uIiwic2hvd0Vycm9yIiwidmFsaWRhdGlvbiIsImVycm9ycyIsImhhc093blByb3BlcnR5IiwiZm9yRWFjaCIsInZhbGlkYXRpb25FcnJvciIsInNlbGYiLCIkcm9vdCIsImVycm9yVG9hc3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUMxQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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O0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzFJQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2xCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzNCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtEQUFrRCxhQUFhLFlBQVksZ0JBQWdCO0FBQzNGLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzFEQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSwrQ0FBK0MsYUFBYSxZQUFZLGdCQUFnQjtBQUN4RixHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JPQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pVQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzlEQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN0Q0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM3VUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDM0VBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvMC5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZWRpdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yNDc3OWI1OCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9lZGl0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2VkaXQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZWRpdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjQ3NzliNThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNDc3OWI1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03ZmNkMDk1NiFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdmY2QwOTU2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQiLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgICB7e3RpdGxlfX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImJyZWFkY3J1bWIuaHJlZlwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIHRhZz1cImxpXCIgdi1mb3I9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCI+XG4gICAgICAgICAgICAgICAge3skdChicmVhZGNydW1iLnRpdGxlKX19XG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L29sPlxuICAgIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cbiAgICAuYWRtaW4taGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA5N3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhZ2VIZWFkZXIudnVlPzUzNzlmNWNiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRtaW4taGVhZGVyIHtcXG4gIGhlaWdodDogOTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hZG1pbi1oZWFkZXIgLnJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiXG4gIH0sIFtfYygnaDEnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iXCJcbiAgfSwgX3ZtLl9sKChfdm0uYnJlYWRjcnVtYnMpLCBmdW5jdGlvbihicmVhZGNydW1iKSB7XG4gICAgcmV0dXJuIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjogYnJlYWRjcnVtYi5ocmVmLFxuICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiLFxuICAgICAgICBcInRhZ1wiOiBcImxpXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KGJyZWFkY3J1bWIudGl0bGUpKSArIFwiXFxuICAgICAgICBcIildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi03ZmNkMDk1NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImU5ZmVjMWMyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVDb252ZXJ0ZXIge1xuICAgIHN0YXRpYyB0b0hITU1TUyhzZWNzKSB7XG4gICAgICAgIHZhciBzZWNfbnVtID0gcGFyc2VJbnQoc2VjcywgMTApOyAvLyBkb24ndCBmb3JnZXQgdGhlIHNlY29uZCBwYXJhbVxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHNlY19udW0gLyAzNjAwKTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChzZWNfbnVtIC0gKGhvdXJzICogMzYwMCkpIC8gNjApO1xuICAgICAgICB2YXIgc2Vjb25kcyA9IHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSAtIChtaW51dGVzICogNjApO1xuXG4gICAgICAgIGlmIChob3VycyA8IDEwKSB7XG4gICAgICAgICAgICBob3VycyA9IFwiMFwiICsgaG91cnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAxMCkge1xuICAgICAgICAgICAgbWludXRlcyA9IFwiMFwiICsgbWludXRlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgICAgICBzZWNvbmRzID0gXCIwXCIgKyBzZWNvbmRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnOicgKyBzZWNvbmRzO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b1NTKHNlY3MpIHtcbiAgICAgICAgdmFyIHNlY19udW0gPSBwYXJzZUludChzZWNzLCAxMCk7IC8vIGRvbid0IGZvcmdldCB0aGUgc2Vjb25kIHBhcmFtXG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3Ioc2VjX251bSAvIDM2MDApO1xuICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSkgLyA2MCk7XG4gICAgICAgIHZhciBzZWNvbmRzID0gc2VjX251bSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCk7XG5cbiAgICAgICAgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2Vjb25kcztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJzY291dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIlRoZSBTY291dGluZyB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgU2NvdXRpbmcgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcImRlbGV0ZWRfc3VjY2VzZnVsbHlcIjogXCJUaGUgU2NvdXRpbmcgd2FzIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIlRoZSBTY291dGluZyBkb2Vzbid0IGV4aXN0XCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOYW1lXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2hhbXBpb25zaGlwXCIsXG4gICAgICAgICAgICBcImV2ZW50XCI6IFwiRXZlbnRcIixcbiAgICAgICAgICAgIFwibGVmdF9hdGhsZXRlXCI6IFwiTGVmdCBBdGhsZXRlXCIsXG4gICAgICAgICAgICBcInJpZ2h0X2F0aGxldGVcIjogXCJSaWdodCBBdGhsZXRlXCIsXG4gICAgICAgICAgICBcInZpZGVvX3NyY1wiOiBcIlZpZGVvIFNvdXJjZVwiLFxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWN0IGFuIG9wdGlvblwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJVcGRhdGVcIixcbiAgICAgICAgICAgIFwibmV3XCI6IFwiTmV3IFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiQXJlIHlvdSBzdXJlPyB0aGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lXCIsXG4gICAgICAgICAgICBcImRlbGV0ZV9zY291dGluZ1wiOiBcIkRlbGV0ZSBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJzY291dGluZ19pbmZvXCI6IFwiU2NvdXRpbmcgSW5mb3JtYXRpb25cIixcbiAgICAgICAgICAgIFwidXBkYXRlX3Njb3V0aW5nXCI6IFwiVXBkYXRlIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcIm1ha2VcIjogXCJNYWtlIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcInN0YXJ0X3RvdWNoXCI6IFwiU3RhcnQgVG91Y2hcIixcbiAgICAgICAgICAgIFwiZW5kX3RvdWNoXCI6IFwiRW5kIFRvdWNoXCIsXG4gICAgICAgICAgICBcInRvb2dsZV90aW1lbGluZVwiOiBcIlRvb2dsZSBUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfaW5zcGVjdG9yXCI6IFwiVG9vZ2xlIEluc3BlY3RvclwiLFxuICAgICAgICAgICAgXCJpbnNwZWN0b3JcIjogXCJJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwidGltZWxpbmVcIjogXCJUaW1lbGluZVwiLFxuICAgICAgICAgICAgXCJlbmRfYWN0aW9uXCI6IFwiRW5kIEFjY2nDs25cIixcbiAgICAgICAgICAgIFwicGF1c2VcIjogXCJQYXVzZVwiLFxuICAgICAgICAgICAgXCJwbGF5XCI6IFwiUGxheVwiLFxuICAgICAgICAgICAgXCJsZWZ0X2FjdGlvbnNcIjogXCJMZWZ0IEF0aGxldGUgQWN0aW9uc1wiLFxuICAgICAgICAgICAgXCJyaWdodF9hY3Rpb25zXCI6IFwiUmlnaHQgQXRobGV0ZSBBY3Rpb25zXCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGl0bGVcIixcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCJDb2xvclwiLFxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIlN0YXJ0IChzZWcpXCIsXG4gICAgICAgICAgICBcImVuZFwiOiBcIkVuZCAoc2VnKVwiLFxuICAgICAgICAgICAgXCJzYXZlXCI6IFwiU2F2ZSBDaGFuZ2VzXCIsXG4gICAgICAgICAgICBcImNhbmNlbFwiOiBcIkNhbmNlbCBDaGFuZ2VzXCIsXG4gICAgICAgICAgICBcInRvdWNoZXNfY2FudF9vdmVybGFwXCI6IFwiVG91Y2hlcyBjYW50IG92ZXJsYXBcIixcbiAgICAgICAgICAgIFwidG91Y2hfb3ZlcmxhcF93aXRoXCI6IFwiVGhlIHRvdWNoIHRoYXQgeW91IGFyZSB0cnlpbmcgdG8gYWRkIG92ZXJsYXAgd2l0aFwiLFxuICAgICAgICAgICAgXCJ2YWxpZGF0aW9uX2Vycm9yXCI6IFwiRVZhbGlkYXRpb24gRXJyb3JcIixcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lbmRfZ3JlYXRlclwiOiBcIlRoZSBlbmQgb2YgdGhlIHRvdWNoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBzdGFydFwiLFxuICAgICAgICAgICAgXCJ0b3VjaF9vdmVybGFwX21zZ1wiOiBcInt0aXRsZX0gdGhhdCBzdGFydHMgb24ge3N0YXJ0fSBhbmQgZW5kcyBvbiB7ZW5kfVwiLFxuICAgICAgICAgICAgXCJ0b3VjaGVzXCI6IFwiVG91Y2hlc1wiLFxuICAgICAgICAgICAgXCJzdGFydF9hdFwiOiBcIlN0YXJ0IGF0IHtzdGFydH1cIixcbiAgICAgICAgICAgIFwiZW5kX2F0XCI6IFwiRW5kIGF0IHtlbmR9XCIsXG4gICAgICAgICAgICBcIm5vX3RvdWNoZXNcIjogXCJUaGVyZSBhcmUgbm8gcmVnaXN0ZXJlZCB0b2N1aGVzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwic2NvdXRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBzY291dGluZyBmdWUgY3JlYWRvIHNhdGlzZmFjdG9yaWFtZW50ZVwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBhY3R1YWxpemFkbyBzYXRpc2ZhY3RvcmlhbWVudGVcIixcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXG4gICAgICAgICAgICBcIm5vdF9mb3VuZFwiOiBcIkVsIHNjb3V0aW5nIG5vIGV4aXN0ZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9tYnJlXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcFwiOiBcIkNhbXBlb25hdG9cIixcbiAgICAgICAgICAgIFwiZXZlbnRcIjogXCJFdmVudG9cIixcbiAgICAgICAgICAgIFwibGVmdF9hdGhsZXRlXCI6IFwiQXRsZXRhIGRlIGxhIGl6cXVpZXJkYVwiLFxuICAgICAgICAgICAgXCJyaWdodF9hdGhsZXRlXCI6IFwiQXRsZXRhIGRlIGxhIGRlcmVjaGFcIixcbiAgICAgICAgICAgIFwidmlkZW9fc3JjXCI6IFwiRnVlbnRlIGRlbCB2aWRlb1wiLFxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWNjaW9uZXNcIixcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjY2lvbmEgdW5hIG9wY2nDs25cIixcbiAgICAgICAgICAgIFwidXBkYXRlXCI6IFwiQWN0dWFsaXphclwiLFxuICAgICAgICAgICAgXCJuZXdcIjogXCJOdWV2byBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIsK/RXN0YXMgU2VndXJvPyBlc3RhIGFjY2nDs24gbm8gc2UgcHVlZGUgZGVzaGFjZXJcIixcbiAgICAgICAgICAgIFwiZGVsZXRlX3Njb3V0aW5nXCI6IFwiRWxpbWluYXIgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdfaW5mb1wiOiBcIkluZm9ybWFjacOzbiBkZWwgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwidXBkYXRlX3Njb3V0aW5nXCI6IFwiQWN0dWFsaXphciBTY291dGluZ1wiLFxuICAgICAgICAgICAgXCJtYWtlXCI6IFwiSGFjZXIgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwic3RhcnRfdG91Y2hcIjogXCJJbmljaWFyIFRvcXVlXCIsXG4gICAgICAgICAgICBcImVuZF90b3VjaFwiOiBcIkZpbmFsaXphciBUb3F1ZVwiLFxuICAgICAgICAgICAgXCJ0b29nbGVfdGltZWxpbmVcIjogXCJUb29nbGUgVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwidG9vZ2xlX2luc3BlY3RvclwiOiBcIlRvb2dsZSBJbnNwZWN0b3JcIixcbiAgICAgICAgICAgIFwiaW5zcGVjdG9yXCI6IFwiSW5zcGVjdG9yXCIsXG4gICAgICAgICAgICBcInRpbWVsaW5lXCI6IFwiVGltZWxpbmVcIixcbiAgICAgICAgICAgIFwiZW5kX2FjdGlvblwiOiBcIkZpbmFsaXphciBBY2Npw7NuXCIsXG4gICAgICAgICAgICBcInBhdXNlXCI6IFwiUGF1c2FyXCIsXG4gICAgICAgICAgICBcInBsYXlcIjogXCJSZXByb2R1Y2lyXCIsXG4gICAgICAgICAgICBcImxlZnRfYWN0aW9uc1wiOiBcIkFjY2lvbmVzIGRlbCBBdGxldGEgZGUgbGEgaXpxdWllcmRhXCIsXG4gICAgICAgICAgICBcInJpZ2h0X2FjdGlvbnNcIjogXCJBY2Npb25lcyBkZWwgQXRsZXRhIGRlIGxhIGRlcmVjaGFcIixcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaXR1bG9cIixcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCJDb2xvclwiLFxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIkluaWNpbyAoc2VnKVwiLFxuICAgICAgICAgICAgXCJlbmRcIjogXCJGaW4gKHNlZylcIixcbiAgICAgICAgICAgIFwic2F2ZVwiOiBcIkd1YXJkYXIgQ2FtYmlvc1wiLFxuICAgICAgICAgICAgXCJjYW5jZWxcIjogXCJDYW5jZWxhciBDYW1iaW9zXCIsXG4gICAgICAgICAgICBcInRvdWNoZXNfY2FudF9vdmVybGFwXCI6IFwiTG9zIHRvcXVlcyBubyBwdWVkZW4gc29icmVwb25lcnNlXCIsXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfd2l0aFwiOiBcIkVsIHRvcXVlIHF1ZSB0cmF0YXMgZGUgYcOxYWRpciBzZSBzdXBlcnBvbmUgY29uXCIsXG4gICAgICAgICAgICBcInZhbGlkYXRpb25fZXJyb3JcIjogXCJFcnJvciBkZSBWYWxpZGFjacOzblwiLFxuICAgICAgICAgICAgXCJ2YWxpZGF0aW9uX2VuZF9ncmVhdGVyXCI6IFwiRWwgZmluYWwgZGVsIHRvcXVlIGRlYmUgc2VyIG1heW9yIGFsIGluaWNpb1wiLFxuICAgICAgICAgICAgXCJ0b3VjaF9vdmVybGFwX21zZ1wiOiBcInt0aXRsZX0gcXVlIGVtcGllemEgZW4ge3N0YXJ0fSB5IHRlcm1pbmEgZW4ge2VuZH1cIixcbiAgICAgICAgICAgIFwidG91Y2hlc1wiOiBcIlRvcXVlc1wiLFxuICAgICAgICAgICAgXCJzdGFydF9hdFwiOiBcIkluaWNpYSBlbiB7c3RhcnR9XCIsXG4gICAgICAgICAgICBcImVuZF9hdFwiOiBcIkZpbmFsaXphIGVuIHtlbmR9XCIsXG4gICAgICAgICAgICBcIm5vX3RvdWNoZXNcIjogXCJObyBoYXkgdG9xdWVzIHJlZ2lzdHJhZG9zXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICc/aW5jbHVkZT1jaGFtcGlvbnNoaXAuc3BvcnQsZXZlbnQsbGVmdEF0aGxldGUscmlnaHRBdGhsZXRlLHRvdWNoZXMuYWN0aW9ucy5sZWZ0VGFncyx0b3VjaGVzLmFjdGlvbnMucmlnaHRUYWdzJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjcmVhdGUoc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvc2NvdXRpbmdzJywgc2NvdXRpbmcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgdXBkYXRlKGlkLCBzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQsIHNjb3V0aW5nLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvc2NvdXRpbmdzLycgKyBpZClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcyIsImltcG9ydCBVdWlkVXRpbCBmcm9tICcuLi91dGlscy9VdWlkVXRpbCdcbmltcG9ydCBTZWNvbmRzVXRpbCBmcm9tICcuLi91dGlscy9TZWNvbmRzVXRpbCdcbmltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kLCBjb2xvcikge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgdmFyIHV1aWQgPSBuZXcgVXVpZFV0aWwoKTtcbiAgICAgICAgdGhpcy5pZCA9IHV1aWQuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ID0gbnVsbDtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdFRleHRZID0gMzAgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZO1xuICAgICAgICB0aGlzLnNlY29uZHNVdGlsID0gbmV3IFNlY29uZHNVdGlsKCk7XG4gICAgICAgIHRoaXMuY2FudmFDb250YWluZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRUYWdzID0gW11cbiAgICAgICAgdGhpcy5yaWdodFRhZ3MgPSBbXVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FsY3VsYXRlWCgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgPyB0aGlzLnkgOiB0aGlzLmNhbGN1bGF0ZVkoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FsY3VsYXRlV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24uaWQgPT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSAxMDA7XG4gICAgICAgICAgICBpbnNwZWN0b3Iubm9TdHJva2UoKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgMTAwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCArIHRoaXMud2lkdGggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMTUpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnJlY3QodGhpcy54IC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDI1NSwgMjU1LCAyNTUsIDEwMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5CT0xEKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGFydCksIHRoaXMueCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAyMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuZW5kKSwgdGhpcy54IC0gMzAgKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAyMCk7XG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZShpbnNwZWN0b3IuY29sb3IodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYikpXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLngsIHRoaXMubGltaXRUZXh0WSArIDIwLCB0aGlzLngsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMueCArIHRoaXMud2lkdGgsIHRoaXMubGltaXRUZXh0WSArIDIwLCB0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lID4gMCkge1xuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwoMjU1KTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIsIHRoaXMuY29sb3IucmdiYS5hbHBoYSk7ICAvLyBVc2UgY29sb3IgdmFyaWFibGUgJ2MnIGFzIGZpbGwgY29sb3JcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDUxKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UodGhpcy5jb2xvci5yZ2JhLnIgKiAwLjc1LCB0aGlzLmNvbG9yLnJnYmEuZyAqIDAuNzUsIHRoaXMuY29sb3IucmdiYS5iICogMC43NSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAgLy8gRHJhdyByZWN0YW5nbGVcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCwgdGhpcy55ICsgNjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXG5cbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDAsIDAsIDAsIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGl0UHJlc3NlZChhY3Rpb24sIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdGlvbik7XG4gICAgICAgIHZtLmVkaXRUb3VjaChldmVudCwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBpc01vdXNlT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDw9ICh0aGlzLnggKyB0aGlzLndpZHRoKSAmJiB5ID49IHRoaXMueSAmJiB5IDw9ICh0aGlzLnkgKyB0aGlzLmhlaWdodCAqIDIpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSAxMDA7XG4gICAgICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDUwO1xuICAgICAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vdXNlSXNPdmVyO1xuICAgIH1cblxuICAgIGlzTW91c2VQcmVzc3NlZE92ZXIoeCwgeSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ0FjdGlvbiAmJiAhdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nVG91Y2gpIHtcbiAgICAgICAgICAgIGlmICh5ID49IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQgKiAyKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLnNldFN0YXJ0KHRoaXMuc3RhcnQpLnNldEVuZCh0aGlzLmVuZCkuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5hYkxvb3BQbHVnaW4uZ29Ub1N0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIHRoaXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjYWxjdWxhdGVYKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSAodGhpcy5zdGFydCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICByZXR1cm4gc3RhcnQgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVkoKSB7XG4gICAgICAgIHJldHVybiA2MSArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XG4gICAgICAgIHZhciBzdGFydCA9ICh0aGlzLnN0YXJ0IC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gNjA7XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbi5qcyIsIi8vIGRlZmluZSBhIG1peGluIG9iamVjdFxuaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgIHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNoZWNrQ29sbGlkZSh0b3VjaCl7XG4gICAgICAgICAgICB2YXIgdG91Y2hlcyA9IF8ucmVqZWN0KGdldFN0YXRlKCd0b3VjaE1hbmFnZXInKS50b3VjaGVzLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b3VjaC5pZCA9PSBvLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b3VjaGVzLnB1c2godG91Y2gpO1xuICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0aGlzLm92ZXJsYXAodG91Y2hlcyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbGxpZGU6IG92ZXJsYXAub3ZlcmxhcCxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogb3ZlcmxhcC5yYW5nZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tDb2xsaWRlQWN0aW9ucyhhY3Rpb24pe1xuICAgICAgICAgICAgaWYgKGdldFN0YXRlKCd0b3VjaE1hbmFnZXInKS5zZWxlY3RlZFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkVG91Y2ggPSBnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykuc2VsZWN0ZWRUb3VjaDtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbnMgPSBfLnJlamVjdChzZWxlY3RlZFRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmlkID09IG8uaWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcChhY3Rpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGFwID0ge292ZXJsYXA6IGZhbHNlLCByYW5nZXM6IFtdfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBvdmVybGFwLm92ZXJsYXAsXG4gICAgICAgICAgICAgICAgY29sbGlkZUFjdGlvbnM6IG92ZXJsYXAucmFuZ2VzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXAodG91Y2hlcyl7XG4gICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hlcy5zb3J0KChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVGltZSA9IHBhcnNlSW50KHByZXZpb3VzLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwYXJzZUludChjdXJyZW50LnN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyBpcyBlYXJsaWVyIHRoYW4gdGhlIGN1cnJlbnRcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA9PT0gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBmaW5hbCByZXN1bHRzXG4gICAgICAgICAgICByZXR1cm4gc29ydGVkUmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgcHJldmlvdXMgcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IGFycltpZHggLSAxXTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBhbnkgb3ZlcmxhcFxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0VuZCA9IHBhcnNlSW50KHByZXZpb3VzLmVuZCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGFydCA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gKHByZXZpb3VzRW5kID4gY3VycmVudFN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB5ZXMsIHRoZXJlIGlzIG92ZXJsYXBcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgc3BlY2lmaWMgcmFuZ2VzIHRoYXQgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogY3VycmVudFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBzZWVkIHRoZSByZWR1Y2VcbiAgICAgICAgICAgIH0sIHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX0pO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9jb2xsaWRlLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2VuZXJhdGVVVUlEKCkge1xuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGQgKz0gcGVyZm9ybWFuY2Uubm93KCk7IC8vdXNlIGhpZ2gtcHJlY2lzaW9uIHRpbWVyIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXVpZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcyIsImltcG9ydCBVdWlkVXRpbCBmcm9tICcuLi91dGlscy9VdWlkVXRpbCdcbmltcG9ydCBTZWNvbmRzVXRpbCBmcm9tICcuLi91dGlscy9TZWNvbmRzVXRpbCdcbmltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJ1xuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kLCB0ZXh0LCBjb2xvciwgYWN0aW9ucykge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgdmFyIHV1aWQgPSBuZXcgVXVpZFV0aWwoKTtcbiAgICAgICAgdGhpcy5pZCA9IHV1aWQuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ID0gbnVsbDtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5saW1pdFRleHRZID0gMzAgKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucyA/IGFjdGlvbnMgOiBbXVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FsY3VsYXRlWCgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgPyB0aGlzLnkgOiB0aGlzLmNhbGN1bGF0ZVkoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FsY3VsYXRlV2lkdGgoKTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmlkID09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDEwMDtcbiAgICAgICAgICAgIHAubm9TdHJva2UoKTtcbiAgICAgICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIsIDEwMCk7XG4gICAgICAgICAgICBwLnJlY3QodGhpcy54ICsgdGhpcy53aWR0aCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAxNSk7XG4gICAgICAgICAgICBwLnJlY3QodGhpcy54IC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcbiAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMjU1LCAxMDApO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5CT0xEKTtcbiAgICAgICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuc3RhcnQpLCB0aGlzLnggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMjApO1xuICAgICAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5lbmQpLCB0aGlzLnggLSAzMCArIHRoaXMud2lkdGgsIHRoaXMubGltaXRUZXh0WSwgNjAsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlKHAuY29sb3IodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYikpXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICAgICAgcC5saW5lKHRoaXMueCwgdGhpcy5saW1pdFRleHRZICsgMjAsIHRoaXMueCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgICAgIHAubGluZSh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFkgKyAyMCwgdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuZCAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lID4gMCkge1xuICAgICAgICAgICAgcC5maWxsKDI1NSk7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgdGhpcy5jb2xvci5yZ2JhLmFscGhhKTsgIC8vIFVzZSBjb2xvciB2YXJpYWJsZSAnYycgYXMgZmlsbCBjb2xvclxuICAgICAgICAgICAgcC5ub1N0cm9rZSgpOyAgLy8gRG9uJ3QgZHJhdyBhIHN0cm9rZSBhcm91bmQgc2hhcGVzXG4gICAgICAgICAgICBwLnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUsIHRoaXMuY29sb3IucmdiYS5hbHBoYSk7ICAvLyBVc2UgY29sb3IgdmFyaWFibGUgJ2MnIGFzIGZpbGwgY29sb3JcbiAgICAgICAgICAgIHAucmVjdCh0aGlzLnggKyAyLCB0aGlzLnkgKyAxLCB0aGlzLndpZHRoIC0gNCwgMjApOyAgLy8gRHJhdyByZWN0YW5nbGVcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwLCB0aGlzLmNvbG9yLnJnYmEuYWxwaGEpO1xuICAgICAgICAgICAgcC50ZXh0KHRoaXMudGV4dCwgdGhpcy54ICsgMiwgdGhpcy55ICsgMSwgdGhpcy53aWR0aCAtIDQsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0FjdGlvbnMoKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNbal0uZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRpdFByZXNzZWQodG91Y2gsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgdG91Y2gpO1xuICAgICAgICB2bS5lZGl0VG91Y2goZXZlbnQsIHRvdWNoKTtcbiAgICB9XG5cbiAgICBpc01vdXNlT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICh4ID49IHRoaXMueCAmJiB4IDw9ICh0aGlzLnggKyB0aGlzLndpZHRoKSAmJiB5ID49IHRoaXMueSAmJiB5IDw9ICh0aGlzLnkgKyB0aGlzLmhlaWdodCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMubW91c2VJc092ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gNTA7XG4gICAgICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2VJc092ZXI7XG4gICAgfVxuXG4gICAgaXNNb3VzZVByZXNzc2VkT3Zlcih4LCB5KSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nQWN0aW9uICYmICF0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdUb3VjaCkge1xuICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdm0uc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5zZXRTdGFydCh0aGlzLnN0YXJ0KS5zZXRFbmQodGhpcy5lbmQpLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5nb1RvU3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNhbGN1bGF0ZVgoKSB7XG4gICAgICAgIHZhciBzdGFydCA9ICh0aGlzLnN0YXJ0IC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIDMwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgMzBcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVZKCkge1xuICAgICAgICByZXR1cm4gNjEgKyB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVXaWR0aCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gKHRoaXMuc3RhcnQgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIDYwO1xuICAgIH1cblxuICAgIGdldEZvcm1hdGVkU3RhcnQoKSB7XG4gICAgICAgIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGFydClcbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2guanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vjb25kc1V0aWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICB9XG5cbiAgICBnZXRGb3JtYXR0ZWRUaW1lKHgpIHtcbiAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoTWF0aC5mbG9vcih4IC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCkpO1xuICAgIH1cblxuICAgIGdldFNlY29uZHMoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4IC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCk7XG4gICAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9TZWNvbmRzVXRpbC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV1aWRVdGlsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVVVSUQoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVXVpZFV0aWwuanMiLCIhZnVuY3Rpb24oZSxvKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1vKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxvKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZUNvbG9yPW8oKTplLlZ1ZUNvbG9yPW8oKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiBvKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgYT10W3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKGEuZXhwb3J0cyxhLGEuZXhwb3J0cyxvKSxhLmxvYWRlZD0hMCxhLmV4cG9ydHN9dmFyIHQ9e307cmV0dXJuIG8ubT1lLG8uYz10LG8ucD1cIlwiLG8oMCl9KFtmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fXZhciBhPXQoMzcpLGk9cihhKSxuPXQoMzgpLHM9cihuKSxsPXQoNDEpLGM9cihsKSx1PXQoNDIpLGQ9cih1KSxoPXQoMzkpLGY9cihoKSxfPXQoNDApLHA9cihfKSx2PXQoMzYpLGc9cih2KSxiPXQoNiksbT1yKGIpLHg9dCg4KSx3PXIoeCksQz10KDQpLHk9cihDKSxrPXQoNSksRj1yKGspLEE9dCg3KSxSPXIoQSksUz10KDMpLE09cihTKSxOPXt2ZXJzaW9uOlwiMS4wLjI2XCIsQ29tcGFjdDppW1wiZGVmYXVsdFwiXSxNYXRlcmlhbDpzW1wiZGVmYXVsdFwiXSxTbGlkZXI6Y1tcImRlZmF1bHRcIl0sU3dhdGNoZXM6ZFtcImRlZmF1bHRcIl0sUGhvdG9zaG9wOmZbXCJkZWZhdWx0XCJdLFNrZXRjaDpwW1wiZGVmYXVsdFwiXSxDaHJvbWU6Z1tcImRlZmF1bHRcIl0sQWxwaGE6bVtcImRlZmF1bHRcIl0sQ2hlY2tib2FyZDp3W1wiZGVmYXVsdFwiXSxFZGl0YWJsZUlucHV0OnlbXCJkZWZhdWx0XCJdLEh1ZTpGW1wiZGVmYXVsdFwiXSxTYXR1cmF0aW9uOlJbXCJkZWZhdWx0XCJdLENvbG9yTWl4aW46TVtcImRlZmF1bHRcIl19O2UuZXhwb3J0cz1OfSxmdW5jdGlvbihlLG8pe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLG89MDtvPHRoaXMubGVuZ3RoO28rKyl7dmFyIHQ9dGhpc1tvXTt0WzJdP2UucHVzaChcIkBtZWRpYSBcIit0WzJdK1wie1wiK3RbMV0rXCJ9XCIpOmUucHVzaCh0WzFdKX1yZXR1cm4gZS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24obyx0KXtcInN0cmluZ1wiPT10eXBlb2YgbyYmKG89W1tudWxsLG8sXCJcIl1dKTtmb3IodmFyIHI9e30sYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgaT10aGlzW2FdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiYocltpXT0hMCl9Zm9yKGE9MDthPG8ubGVuZ3RoO2ErKyl7dmFyIG49b1thXTtcIm51bWJlclwiPT10eXBlb2YgblswXSYmcltuWzBdXXx8KHQmJiFuWzJdP25bMl09dDp0JiYoblsyXT1cIihcIituWzJdK1wiKSBhbmQgKFwiK3QrXCIpXCIpLGUucHVzaChuKSl9fSxlfX0sZnVuY3Rpb24oZSxvLHQpe2Z1bmN0aW9uIHIoZSxvKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyl7dmFyIHI9ZVt0XSxhPWRbci5pZF07aWYoYSl7YS5yZWZzKys7Zm9yKHZhciBpPTA7aTxhLnBhcnRzLmxlbmd0aDtpKyspYS5wYXJ0c1tpXShyLnBhcnRzW2ldKTtmb3IoO2k8ci5wYXJ0cy5sZW5ndGg7aSsrKWEucGFydHMucHVzaChsKHIucGFydHNbaV0sbykpfWVsc2V7Zm9yKHZhciBuPVtdLGk9MDtpPHIucGFydHMubGVuZ3RoO2krKyluLnB1c2gobChyLnBhcnRzW2ldLG8pKTtkW3IuaWRdPXtpZDpyLmlkLHJlZnM6MSxwYXJ0czpufX19fWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciBvPVtdLHQ9e30scj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgYT1lW3JdLGk9YVswXSxuPWFbMV0scz1hWzJdLGw9YVszXSxjPXtjc3M6bixtZWRpYTpzLHNvdXJjZU1hcDpsfTt0W2ldP3RbaV0ucGFydHMucHVzaChjKTpvLnB1c2godFtpXT17aWQ6aSxwYXJ0czpbY119KX1yZXR1cm4gb31mdW5jdGlvbiBpKGUsbyl7dmFyIHQ9XygpLHI9Z1tnLmxlbmd0aC0xXTtpZihcInRvcFwiPT09ZS5pbnNlcnRBdClyP3IubmV4dFNpYmxpbmc/dC5pbnNlcnRCZWZvcmUobyxyLm5leHRTaWJsaW5nKTp0LmFwcGVuZENoaWxkKG8pOnQuaW5zZXJ0QmVmb3JlKG8sdC5maXJzdENoaWxkKSxnLnB1c2gobyk7ZWxzZXtpZihcImJvdHRvbVwiIT09ZS5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7dC5hcHBlbmRDaGlsZChvKX19ZnVuY3Rpb24gbihlKXtlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk7dmFyIG89Zy5pbmRleE9mKGUpO28+PTAmJmcuc3BsaWNlKG8sMSl9ZnVuY3Rpb24gcyhlKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIG8udHlwZT1cInRleHQvY3NzXCIsaShlLG8pLG99ZnVuY3Rpb24gbChlLG8pe3ZhciB0LHIsYTtpZihvLnNpbmdsZXRvbil7dmFyIGk9disrO3Q9cHx8KHA9cyhvKSkscj1jLmJpbmQobnVsbCx0LGksITEpLGE9Yy5iaW5kKG51bGwsdCxpLCEwKX1lbHNlIHQ9cyhvKSxyPXUuYmluZChudWxsLHQpLGE9ZnVuY3Rpb24oKXtuKHQpfTtyZXR1cm4gcihlKSxmdW5jdGlvbihvKXtpZihvKXtpZihvLmNzcz09PWUuY3NzJiZvLm1lZGlhPT09ZS5tZWRpYSYmby5zb3VyY2VNYXA9PT1lLnNvdXJjZU1hcClyZXR1cm47cihlPW8pfWVsc2UgYSgpfX1mdW5jdGlvbiBjKGUsbyx0LHIpe3ZhciBhPXQ/XCJcIjpyLmNzcztpZihlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9YihvLGEpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSksbj1lLmNoaWxkTm9kZXM7bltvXSYmZS5yZW1vdmVDaGlsZChuW29dKSxuLmxlbmd0aD9lLmluc2VydEJlZm9yZShpLG5bb10pOmUuYXBwZW5kQ2hpbGQoaSl9fWZ1bmN0aW9uIHUoZSxvKXt2YXIgdD1vLmNzcyxyPW8ubWVkaWEsYT1vLnNvdXJjZU1hcDtpZihyJiZlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsciksYSYmKHQrPVwiXFxuLyojIHNvdXJjZVVSTD1cIithLnNvdXJjZXNbMF0rXCIgKi9cIix0Kz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoYSkpKSkrXCIgKi9cIiksZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PXQ7ZWxzZXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpfX12YXIgZD17fSxoPWZ1bmN0aW9uKGUpe3ZhciBvO3JldHVybiBmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBvJiYobz1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksb319LGY9aChmdW5jdGlvbigpe3JldHVybi9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpfSksXz1oKGZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXX0pLHA9bnVsbCx2PTAsZz1bXTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxvKXtvPW98fHt9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBvLnNpbmdsZXRvbiYmKG8uc2luZ2xldG9uPWYoKSksXCJ1bmRlZmluZWRcIj09dHlwZW9mIG8uaW5zZXJ0QXQmJihvLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciB0PWEoZSk7cmV0dXJuIHIodCxvKSxmdW5jdGlvbihlKXtmb3IodmFyIGk9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcz10W25dLGw9ZFtzLmlkXTtsLnJlZnMtLSxpLnB1c2gobCl9aWYoZSl7dmFyIGM9YShlKTtyKGMsbyl9Zm9yKHZhciBuPTA7bjxpLmxlbmd0aDtuKyspe3ZhciBsPWlbbl07aWYoMD09PWwucmVmcyl7Zm9yKHZhciB1PTA7dTxsLnBhcnRzLmxlbmd0aDt1KyspbC5wYXJ0c1t1XSgpO2RlbGV0ZSBkW2wuaWRdfX19fTt2YXIgYj1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBmdW5jdGlvbihvLHQpe3JldHVybiBlW29dPXQsZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ZnVuY3Rpb24gYShlLG8pe2UuYSYmZS5hPjEmJihlLmE9MSk7dmFyIHQ9ZS5oZXg/KDAsbltcImRlZmF1bHRcIl0pKGUuaGV4KTooMCxuW1wiZGVmYXVsdFwiXSkoZSkscj10LnRvSHNsKCksYT10LnRvSHN2KCk7cmV0dXJuIDA9PT1yLnMmJihyLmg9ZS5ofHxvfHwwLGEuaD1lLmh8fG98fDApLHtoc2w6cixoZXg6dC50b0hleFN0cmluZygpLnRvVXBwZXJDYXNlKCkscmdiYTp0LnRvUmdiKCksaHN2OmEsb2xkSHVlOmUuaHx8b3x8ci5oLHNvdXJjZTplLnNvdXJjZSxhOmUuYX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9dCgzNSksbj1yKGkpO29bXCJkZWZhdWx0XCJdPXtwcm9wczpbXCJ2YWx1ZVwiXSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3ZhbDphKHRoaXMudmFsdWUpfX0sY29tcHV0ZWQ6e2NvbG9yczp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsfSxzZXQ6ZnVuY3Rpb24oZSl7dGhpcy52YWw9ZSx0aGlzLiRlbWl0KFwiY2hhbmdlLWNvbG9yXCIsZSl9fX0sd2F0Y2g6e3ZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMudmFsPWEoZSl9fSxjcmVhdGVkOmZ1bmN0aW9uKCl7fSxtZXRob2RzOntjb2xvckNoYW5nZTpmdW5jdGlvbihlLG8pe3RoaXMuY29sb3JzPWEoZSxvfHx0aGlzLm9sZEh1ZSksdGhpcy5vbGRIdWU9dGhpcy5jb2xvcnMuaHNsLmh9LGlzVmFsaWRIZXg6ZnVuY3Rpb24oZSl7cmV0dXJuKDAsbltcImRlZmF1bHRcIl0pKGUpLmlzVmFsaWQoKX0sc2ltcGxlQ2hlY2tGb3JWYWxpZENvbG9yOmZ1bmN0aW9uKGUpe2Zvcih2YXIgbz1bXCJyXCIsXCJnXCIsXCJiXCIsXCJhXCIsXCJoXCIsXCJzXCIsXCJhXCIsXCJ2XCJdLHQ9MCxyPTAsYT0wO2E8by5sZW5ndGg7YSsrKXt2YXIgaT1vW2FdO2VbaV0mJih0KyssaXNOYU4oZVtpXSl8fHIrKyl9aWYodD09PXIpcmV0dXJuIGV9fX19LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNTYpLHI9dCgxOCk7dmFyIGk9dCg0NCk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNTcpLHI9dCgxOSk7dmFyIGk9dCg0NSk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjUpLHI9dCgxNik7dmFyIGk9dCg1Myk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNTgpLHI9dCgyMCk7dmFyIGk9dCg0Nik7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjYpLHI9dCgxNyk7dmFyIGk9dCg1NCk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzKSxpPXIoYSksbj10KDQpLHM9cihuKSxsPXQoNyksYz1yKGwpLHU9dCg1KSxkPXIodSksaD10KDYpLGY9cihoKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkNocm9tZVwiLG1peGluczpbaVtcImRlZmF1bHRcIl1dLHByb3BzOnt9LGNvbXBvbmVudHM6e3NhdHVyYXRpb246Y1tcImRlZmF1bHRcIl0saHVlOmRbXCJkZWZhdWx0XCJdLGFscGhhOmZbXCJkZWZhdWx0XCJdLFwiZWQtaW5cIjpzW1wiZGVmYXVsdFwiXX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntmaWVsZHM6W1wiaGV4XCIsXCJyZ2JhXCIsXCJoc2xhXCJdLGZpZWxkc0luZGV4OjAsaGlnaGxpZ2h0OiExfX0sY29tcHV0ZWQ6e2FjdGl2ZUNvbG9yOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb2xvcnMucmdiYTtyZXR1cm5cInJnYmEoXCIrW2UucixlLmcsZS5iLGUuYV0uam9pbihcIixcIikrXCIpXCJ9fSxtZXRob2RzOntoYW5kbGVQcmVzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX0sY2hpbGRDaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZShlKX0saW5wdXRDaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5ifHxlLmEpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX0sdG9nZ2xlVmlld3M6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWVsZHNJbmRleD49Mj92b2lkKHRoaXMuZmllbGRzSW5kZXg9MCk6dm9pZCB0aGlzLmZpZWxkc0luZGV4Kyt9LHNob3dIaWdobGlnaHQ6ZnVuY3Rpb24oKXt0aGlzLmhpZ2hsaWdodD0hMH0saGlkZUhpZ2hsaWdodDpmdW5jdGlvbigpe3RoaXMuaGlnaGxpZ2h0PSExfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMyksaT1yKGEpLG49dCg0KSxzPXIobiksbD1bXCIjNEQ0RDREXCIsXCIjOTk5OTk5XCIsXCIjRkZGRkZGXCIsXCIjRjQ0RTNCXCIsXCIjRkU5MjAwXCIsXCIjRkNEQzAwXCIsXCIjREJERjAwXCIsXCIjQTRERDAwXCIsXCIjNjhDQ0NBXCIsXCIjNzNEOEZGXCIsXCIjQUVBMUZGXCIsXCIjRkRBMUZGXCIsXCIjMzMzMzMzXCIsXCIjODA4MDgwXCIsXCIjQ0NDQ0NDXCIsXCIjRDMzMTE1XCIsXCIjRTI3MzAwXCIsXCIjRkNDNDAwXCIsXCIjQjBCQzAwXCIsXCIjNjhCQzAwXCIsXCIjMTZBNUE1XCIsXCIjMDA5Q0UwXCIsXCIjN0I2NEZGXCIsXCIjRkEyOEZGXCIsXCIjMDAwMDAwXCIsXCIjNjY2NjY2XCIsXCIjQjNCM0IzXCIsXCIjOUYwNTAwXCIsXCIjQzQ1MTAwXCIsXCIjRkI5RTAwXCIsXCIjODA4OTAwXCIsXCIjMTk0RDMzXCIsXCIjMEM3OTdEXCIsXCIjMDA2MkIxXCIsXCIjNjUzMjk0XCIsXCIjQUIxNDlFXCJdO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiQ29tcGFjdFwiLG1peGluczpbaVtcImRlZmF1bHRcIl1dLHByb3BzOnt9LGNvbXBvbmVudHM6e1wiZWQtaW5cIjpzW1wiZGVmYXVsdFwiXX0sY29tcHV0ZWQ6e3BpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2xvcnMuaGV4fX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntkZWZhdWx0Q29sb3JzOmx9fSxtZXRob2RzOntoYW5kbGVyQ2xpY2s6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX0sb25DaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5iKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCg0KSxpPXIoYSksbj10KDMpLHM9cihuKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIk1hdGVyaWFsXCIsbWl4aW5zOltzW1wiZGVmYXVsdFwiXV0sY29tcG9uZW50czp7XCJlZC1pblwiOmlbXCJkZWZhdWx0XCJdfSxtZXRob2RzOntvbkNoYW5nZTpmdW5jdGlvbihlKXtlJiYoZS5oZXg/dGhpcy5pc1ZhbGlkSGV4KGUuaGV4KSYmdGhpcy5jb2xvckNoYW5nZSh7aGV4OmUuaGV4LHNvdXJjZTpcImhleFwifSk6KGUucnx8ZS5nfHxlLmIpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDMpLGk9cihhKSxuPXQoNCkscz1yKG4pLGw9dCg3KSxjPXIobCksdT10KDUpLGQ9cih1KSxoPXQoNiksZj1yKGgpO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiUGhvdG9zaG9wXCIsbWl4aW5zOltpW1wiZGVmYXVsdFwiXV0scHJvcHM6e2hlYWQ6e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiQ29sb3IgUGlja2VyXCJ9fSxjb21wb25lbnRzOntzYXR1cmF0aW9uOmNbXCJkZWZhdWx0XCJdLGh1ZTpkW1wiZGVmYXVsdFwiXSxhbHBoYTpmW1wiZGVmYXVsdFwiXSxcImVkLWluXCI6c1tcImRlZmF1bHRcIl19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudENvbG9yOlwiI0ZGRlwifX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMuY3VycmVudENvbG9yPXRoaXMuY29sb3JzLmhleH0sbWV0aG9kczp7Y2hpbGRDaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZShlKX0saW5wdXRDaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGVbXCIjXCJdP3RoaXMuaXNWYWxpZEhleChlW1wiI1wiXSkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplW1wiI1wiXSxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5ifHxlLmEpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX0saGFuZGxlQWNjZXB0OmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcIm9rXCIpfSxoYW5kbGVDYW5jZWw6ZnVuY3Rpb24oKXt0aGlzLiRlbWl0KFwiY2FuY2VsXCIpfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMyksaT1yKGEpLG49dCg0KSxzPXIobiksbD10KDcpLGM9cihsKSx1PXQoNSksZD1yKHUpLGg9dCg2KSxmPXIoaCksXz1bXCIjRDAwMjFCXCIsXCIjRjVBNjIzXCIsXCIjRjhFNzFDXCIsXCIjOEI1NzJBXCIsXCIjN0VEMzIxXCIsXCIjNDE3NTA1XCIsXCIjQkQxMEUwXCIsXCIjOTAxM0ZFXCIsXCIjNEE5MEUyXCIsXCIjNTBFM0MyXCIsXCIjQjhFOTg2XCIsXCIjMDAwMDAwXCIsXCIjNEE0QTRBXCIsXCIjOUI5QjlCXCIsXCIjRkZGRkZGXCJdO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiU2tldGNoXCIsbWl4aW5zOltpW1wiZGVmYXVsdFwiXV0sY29tcG9uZW50czp7c2F0dXJhdGlvbjpjW1wiZGVmYXVsdFwiXSxodWU6ZFtcImRlZmF1bHRcIl0sYWxwaGE6ZltcImRlZmF1bHRcIl0sXCJlZC1pblwiOnNbXCJkZWZhdWx0XCJdfSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3ByZXNldENvbG9yczpffX0sY29tcHV0ZWQ6e2FjdGl2ZUNvbG9yOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb2xvcnMucmdiYTtyZXR1cm5cInJnYmEoXCIrW2UucixlLmcsZS5iLGUuYV0uam9pbihcIixcIikrXCIpXCJ9fSxtZXRob2RzOntoYW5kbGVQcmVzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX0sY2hpbGRDaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZShlKX0saW5wdXRDaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5ifHxlLmEpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtyOmUucnx8dGhpcy5jb2xvcnMucmdiYS5yLGc6ZS5nfHx0aGlzLmNvbG9ycy5yZ2JhLmcsYjplLmJ8fHRoaXMuY29sb3JzLnJnYmEuYixhOmUuYXx8dGhpcy5jb2xvcnMucmdiYS5hLHNvdXJjZTpcInJnYmFcIn0pKX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDMpLGk9cihhKSxuPXQoNSkscz1yKG4pO29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiU2xpZGVyXCIsbWl4aW5zOltpW1wiZGVmYXVsdFwiXV0scHJvcHM6e2RpcmVjdGlvbjpTdHJpbmd9LGNvbXBvbmVudHM6e2h1ZTpzW1wiZGVmYXVsdFwiXX0sY29tcHV0ZWQ6e2FjdGl2ZU9mZnNldDpmdW5jdGlvbigpe3JldHVybiBNYXRoLnJvdW5kKDEwMCp0aGlzLmNvbG9ycy5oc2wucykvMTAwPT09LjU/TWF0aC5yb3VuZCgxMDAqdGhpcy5jb2xvcnMuaHNsLmwpLzEwMDowfX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntzd2F0Y2hlczpbXCIuODBcIixcIi42NVwiLFwiLjUwXCIsXCIuMzVcIixcIi4yMFwiXX19LG1ldGhvZHM6e2h1ZUNoYW5nZTpmdW5jdGlvbihlKXt0aGlzLmNvbG9yQ2hhbmdlKGUpfSxoYW5kbGVTd0NsaWNrOmZ1bmN0aW9uKGUsbyl7dGhpcy5jb2xvckNoYW5nZSh7aDp0aGlzLmNvbG9ycy5oc2wuaCxzOi41LGw6byxzb3VyY2U6XCJoc2xcIn0pfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMzQpLGk9cihhKSxuPXQoMykscz1yKG4pLGw9W1wicmVkXCIsXCJwaW5rXCIsXCJwdXJwbGVcIixcImRlZXBQdXJwbGVcIixcImluZGlnb1wiLFwiYmx1ZVwiLFwibGlnaHRCbHVlXCIsXCJjeWFuXCIsXCJ0ZWFsXCIsXCJncmVlblwiLFwibGlnaHRHcmVlblwiLFwibGltZVwiLFwieWVsbG93XCIsXCJhbWJlclwiLFwib3JhbmdlXCIsXCJkZWVwT3JhbmdlXCIsXCJicm93blwiLFwiYmx1ZUdyZXlcIl0sYz1bXCI5MDBcIixcIjcwMFwiLFwiNTAwXCIsXCIzMDBcIixcIjEwMFwiXSx1PWZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIGwuZm9yRWFjaChmdW5jdGlvbihvKXt2YXIgdD1bXTtjLmZvckVhY2goZnVuY3Rpb24oZSl7dC5wdXNoKGlbXCJkZWZhdWx0XCJdW29dW2VdLnRvVXBwZXJDYXNlKCkpfSksZS5wdXNoKHQpfSksZX0oKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlN3YXRjaGVzXCIsbWl4aW5zOltzW1wiZGVmYXVsdFwiXV0sY29tcHV0ZWQ6e3BpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2xvcnMuaGV4fX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntkZWZhdWx0Q29sb3JzOnV9fSxtZXRob2RzOntoYW5kbGVyQ2xpY2s6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZSh7aGV4OmUsc291cmNlOlwiaGV4XCJ9KX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDgpLGk9cihhKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkFscGhhXCIscHJvcHM6e3ZhbHVlOk9iamVjdCxvbkNoYW5nZTpGdW5jdGlvbn0sY29tcG9uZW50czp7Y2hlY2tib2FyZDppW1wiZGVmYXVsdFwiXX0sY29tcHV0ZWQ6e2NvbG9yczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxncmFkaWVudENvbG9yOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb2xvcnMucmdiYSxvPVtlLnIsZS5nLGUuYl0uam9pbihcIixcIik7cmV0dXJuXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoXCIrbytcIiwgMCkgMCUsIHJnYmEoXCIrbytcIiwgMSkgMTAwJSlcIn19LG1ldGhvZHM6e2hhbmRsZUNoYW5nZTpmdW5jdGlvbihlLG8peyFvJiZlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQscj10aGlzLiRyZWZzLmNvbnRhaW5lcixhPXIuY2xpZW50V2lkdGgsaT0oZS5wYWdlWHx8ZS50b3VjaGVzWzBdLnBhZ2VYKS0oci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldCk7dD1pPDA/MDppPmE/MTpNYXRoLnJvdW5kKDEwMCppL2EpLzEwMCx0aGlzLmNvbG9ycy5hIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnRoaXMuY29sb3JzLmhzbC5oLHM6dGhpcy5jb2xvcnMuaHNsLnMsbDp0aGlzLmNvbG9ycy5oc2wubCxhOnQsc291cmNlOlwicmdiYVwifSl9LGhhbmRsZU1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUNoYW5nZShlLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfSxoYW5kbGVNb3VzZVVwOmZ1bmN0aW9uKCl7dGhpcy51bmJpbmRFdmVudExpc3RlbmVycygpfSx1bmJpbmRFdmVudExpc3RlbmVyczpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5oYW5kbGVDaGFuZ2UpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuaGFuZGxlTW91c2VVcCl9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlLG8sdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50KXJldHVybiBudWxsO3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7ci53aWR0aD1yLmhlaWdodD0yKnQ7dmFyIGE9ci5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGE/KGEuZmlsbFN0eWxlPWUsYS5maWxsUmVjdCgwLDAsci53aWR0aCxyLmhlaWdodCksYS5maWxsU3R5bGU9byxhLmZpbGxSZWN0KDAsMCx0LHQpLGEudHJhbnNsYXRlKHQsdCksYS5maWxsUmVjdCgwLDAsdCx0KSxyLnRvRGF0YVVSTCgpKTpudWxsfWZ1bmN0aW9uIHIoZSxvLHIpe3ZhciBpPWUrXCIsXCIrbytcIixcIityO2lmKGFbaV0pcmV0dXJuIGFbaV07dmFyIG49dChlLG8scik7cmV0dXJuIGFbaV09bixufU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXt9O29bXCJkZWZhdWx0XCJdPXtuYW1lOlwiQ2hlY2tib2FyZFwiLHByb3BzOntzaXplOnt0eXBlOltOdW1iZXIsU3RyaW5nXSxcImRlZmF1bHRcIjo4fSx3aGl0ZTp7dHlwZTpTdHJpbmcsXCJkZWZhdWx0XCI6XCIjZmZmXCJ9LGdyZXk6e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiI2U2ZTZlNlwifX0sY29tcHV0ZWQ6e2JnU3R5bGU6ZnVuY3Rpb24oKXtyZXR1cm5cInVybChcIityKHRoaXMud2hpdGUsdGhpcy5ncmV5LHRoaXMuc2l6ZSkrXCIpIGNlbnRlciBsZWZ0XCJ9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksb1tcImRlZmF1bHRcIl09e25hbWU6XCJlZGl0YWJsZUlucHV0XCIscHJvcHM6e2xhYmVsOlN0cmluZyx2YWx1ZTpbU3RyaW5nLE51bWJlcl0sbWF4Ok51bWJlcixhcnJvd09mZnNldDp7dHlwZTpOdW1iZXIsXCJkZWZhdWx0XCI6MX19LGNvbXB1dGVkOnt2YWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX19LGZpbHRlcnM6e21heEZpbHRlcjp7cmVhZDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5tYXgmJmU+dGhpcy5tYXg/dGhpcy5tYXg6ZX0sd3JpdGU6ZnVuY3Rpb24oZSxvKXtyZXR1cm4gZX19fSxtZXRob2RzOnt1cGRhdGU6ZnVuY3Rpb24oZSl7dGhpcy5oYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfSxoYW5kbGVDaGFuZ2U6ZnVuY3Rpb24oZSl7dmFyIG89e307b1t0aGlzLmxhYmVsXT1lLHRoaXMuJGVtaXQoXCJvbi1jaGFuZ2VcIixvKX0saGFuZGxlQmx1cjpmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0saGFuZGxlS2V5RG93bjpmdW5jdGlvbihlKXt2YXIgbz10aGlzLnZhbCx0PU51bWJlcihvKTtpZih0KXt2YXIgcj10aGlzLmFycm93T2Zmc2V0fHwxOzM4PT09ZS5rZXlDb2RlJiYobz10K3IsdGhpcy5oYW5kbGVDaGFuZ2UobyksZS5wcmV2ZW50RGVmYXVsdCgpKSw0MD09PWUua2V5Q29kZSYmKG89dC1yLHRoaXMuaGFuZGxlQ2hhbmdlKG8pLGUucHJldmVudERlZmF1bHQoKSl9fSxoYW5kbGVEcmFnOmZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfSxoYW5kbGVNb3VzZURvd246ZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9fX19LGZ1bmN0aW9uKGUsbyl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksb1tcImRlZmF1bHRcIl09e25hbWU6XCJIdWVcIixwcm9wczp7dmFsdWU6T2JqZWN0LGRpcmVjdGlvbjp7dHlwZTpTdHJpbmcsXCJkZWZhdWx0XCI6XCJob3Jpem9udGFsXCJ9fSxjb21wdXRlZDp7Y29sb3JzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LGRpcmVjdGlvbkNsYXNzOmZ1bmN0aW9uKCl7cmV0dXJue1widnVlLWNvbG9yX19jLWh1ZS0taG9yaXpvbnRhbFwiOlwiaG9yaXpvbnRhbFwiPT09dGhpcy5kaXJlY3Rpb24sXCJ2dWUtY29sb3JfX2MtaHVlLS12ZXJ0aWNhbFwiOlwidmVydGljYWxcIj09PXRoaXMuZGlyZWN0aW9ufX0scG9pbnRlclRvcDpmdW5jdGlvbigpe3JldHVyblwidmVydGljYWxcIj09PXRoaXMuZGlyZWN0aW9uPy0oMTAwKnRoaXMuY29sb3JzLmhzbC5oLzM2MCkrMTAwK1wiJVwiOjB9LHBvaW50ZXJMZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuXCJ2ZXJ0aWNhbFwiPT09dGhpcy5kaXJlY3Rpb24/MDoxMDAqdGhpcy5jb2xvcnMuaHNsLmgvMzYwK1wiJVwifX0sbWV0aG9kczp7aGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUsbyl7IW8mJmUucHJldmVudERlZmF1bHQoKTt2YXIgdCxyLGE9dGhpcy4kcmVmcy5jb250YWluZXIsaT1hLmNsaWVudFdpZHRoLG49YS5jbGllbnRIZWlnaHQscz0oZS5wYWdlWHx8ZS50b3VjaGVzWzBdLnBhZ2VYKS0oYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldCksbD0oZS5wYWdlWXx8ZS50b3VjaGVzWzBdLnBhZ2VZKS0oYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Ard2luZG93LnBhZ2VZT2Zmc2V0KTtcInZlcnRpY2FsXCI9PT10aGlzLmRpcmVjdGlvbj8obDwwP3Q9MzU5Omw+bj90PTA6KHI9LSgxMDAqbC9uKSsxMDAsdD0zNjAqci8xMDApLHRoaXMuY29sb3JzLmhzbC5oIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnQsczp0aGlzLmNvbG9ycy5oc2wucyxsOnRoaXMuY29sb3JzLmhzbC5sLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwiaHNsXCJ9KSk6KHM8MD90PTA6cz5pP3Q9MzU5OihyPTEwMCpzL2ksdD0zNjAqci8xMDApLHRoaXMuY29sb3JzLmhzbC5oIT09dCYmdGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLHtoOnQsczp0aGlzLmNvbG9ycy5oc2wucyxsOnRoaXMuY29sb3JzLmhzbC5sLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwiaHNsXCJ9KSl9LGhhbmRsZU1vdXNlRG93bjpmdW5jdGlvbihlKXt0aGlzLmhhbmRsZUNoYW5nZShlLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfSxoYW5kbGVNb3VzZVVwOmZ1bmN0aW9uKGUpe3RoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMoKX0sdW5iaW5kRXZlbnRMaXN0ZW5lcnM6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMzMpLGk9cihhKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlNhdHVyYXRpb25cIixwcm9wczp7dmFsdWU6T2JqZWN0fSxjb21wdXRlZDp7Y29sb3JzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LGJnQ29sb3I6ZnVuY3Rpb24oKXtyZXR1cm5cImhzbChcIit0aGlzLmNvbG9ycy5oc2wuaCtcIiwxMDAlLCA1MCUpXCJ9LHBvaW50ZXJUb3A6ZnVuY3Rpb24oKXtyZXR1cm4tKDEwMCp0aGlzLmNvbG9ycy5oc3YudikrMTAwK1wiJVwifSxwb2ludGVyTGVmdDpmdW5jdGlvbigpe3JldHVybiAxMDAqdGhpcy5jb2xvcnMuaHN2LnMrXCIlXCJ9fSxtZXRob2RzOnt0aHJvdHRsZTooMCxpW1wiZGVmYXVsdFwiXSkoZnVuY3Rpb24oZSxvKXtlKG8pfSw1MCksaGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUsbyl7IW8mJmUucHJldmVudERlZmF1bHQoKTt2YXIgdD10aGlzLiRyZWZzLmNvbnRhaW5lcixyPXQuY2xpZW50V2lkdGgsYT10LmNsaWVudEhlaWdodCxpPShlLnBhZ2VYfHxlLnRvdWNoZXNbMF0ucGFnZVgpLSh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQrd2luZG93LnBhZ2VYT2Zmc2V0KSxuPShlLnBhZ2VZfHxlLnRvdWNoZXNbMF0ucGFnZVkpLSh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQpO2k8MD9pPTA6aT5yP2k9cjpuPDA/bj0wOm4+YSYmKG49YSk7dmFyIHM9MTAwKmkvcixsPS0oMTAwKm4vYSkrMTAwO3RoaXMudGhyb3R0bGUodGhpcy5vbkNoYW5nZSx7aDp0aGlzLmNvbG9ycy5oc2wuaCxzOnMsdjpsLGE6dGhpcy5jb2xvcnMuaHNsLmEsc291cmNlOlwicmdiXCJ9KX0sb25DaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy4kZW1pdChcIm9uLWNoYW5nZVwiLGUpfSxoYW5kbGVNb3VzZURvd246ZnVuY3Rpb24oZSl7dGhpcy5oYW5kbGVDaGFuZ2UoZSwhMCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX0saGFuZGxlTW91c2VVcDpmdW5jdGlvbihlKXt0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzKCl9LHVuYmluZEV2ZW50TGlzdGVuZXJzOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX19fX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19jb21wYWN0e3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWxlZnQ6NXB4O3dpZHRoOjI0MHB4O2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAycHggMTBweCByZ2JhKDAsMCwwLC4xMiksMCAycHggNXB4IHJnYmEoMCwwLDAsLjE2KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3Jze292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7bWFyZ2luOjB9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3ItaXRlbXtsaXN0LXN0eWxlOm5vbmU7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDo1cHg7bWFyZ2luLWJvdHRvbTo1cHg7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXJ9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3ItaXRlbS0td2hpdGV7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2RkZH0udnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVtLS13aGl0ZSAudnVlLWNvbG9yX19jb21wYWN0X19kb3R7YmFja2dyb3VuZDojMDAwfS52dWUtY29sb3JfX2NvbXBhY3RfX2RvdHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NXB4O3JpZ2h0OjVweDtib3R0b206NXB4O2xlZnQ6NXB4O2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MTtiYWNrZ3JvdW5kOiNmZmZ9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fZmllbGRze2Rpc3BsYXk6ZmxleDtwYWRkaW5nLWJvdHRvbTo2cHg7cGFkZGluZy1yaWdodDo1cHg7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHt3aWR0aDo3MCU7cGFkZGluZy1sZWZ0OjMwJTtiYWNrZ3JvdW5kOm5vbmU7Zm9udC1zaXplOjEycHg7Y29sb3I6IzMzMztoZWlnaHQ6MTZweH0udnVlLWNvbG9yX19jb21wYWN0X19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDozcHg7bGVmdDowO2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM5OTl9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fcGljay1jb2xvcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NnB4O2xlZnQ6NXB4O2hlaWdodDo5cHg7d2lkdGg6OXB4fS52dWUtY29sb3JfX2NvbXBhY3RfX2NvbC0ze2ZsZXg6MX0udnVlX2NvbG9yX19jb21wYWN0X19jb2wtaGV4e2ZsZXg6Mn0udnVlX2NvbG9yX19jb21wYWN0X19jb2wtaGV4IC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHt3aWR0aDo4MCU7cGFkZGluZy1sZWZ0OjIwJX0udnVlX2NvbG9yX19jb21wYWN0X19jb2wtaGV4IC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtkaXNwbGF5Om5vbmV9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0e3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHtwYWRkaW5nOjA7Ym9yZGVyOjA7b3V0bGluZTpub25lfS52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19jLWh1ZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtib3JkZXItcmFkaXVzOjJweH0udnVlLWNvbG9yX19jLWh1ZS0taG9yaXpvbnRhbHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZyxyZWQgMCwjZmYwIDE3JSwjMGYwIDMzJSwjMGZmIDUwJSwjMDBmIDY3JSwjZjBmIDgzJSxyZWQpfS52dWUtY29sb3JfX2MtaHVlLS12ZXJ0aWNhbHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgwZGVnLHJlZCAwLCNmZjAgMTclLCMwZjAgMzMlLCMwZmYgNTAlLCMwMGYgNjclLCNmMGYgODMlLHJlZCl9LnZ1ZS1jb2xvcl9fYy1odWVfX2NvbnRhaW5lcntjdXJzb3I6cG9pbnRlcjttYXJnaW46MCAycHg7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCV9LnZ1ZS1jb2xvcl9fYy1odWVfX3BvaW50ZXJ7ei1pbmRleDoyO3Bvc2l0aW9uOmFic29sdXRlfS52dWUtY29sb3JfX2MtaHVlX19waWNrZXJ7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLXRvcDoxcHg7d2lkdGg6NHB4O2JvcmRlci1yYWRpdXM6MXB4O2hlaWdodDo4cHg7Ym94LXNoYWRvdzowIDAgMnB4IHJnYmEoMCwwLDAsLjYpO2JhY2tncm91bmQ6I2ZmZjt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMnB4KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbiwudnVlLWNvbG9yX19zYXR1cmF0aW9uLS1ibGFjaywudnVlLWNvbG9yX19zYXR1cmF0aW9uLS13aGl0ZXtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MH0udnVlLWNvbG9yX19zYXR1cmF0aW9uLS13aGl0ZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywjZmZmLGhzbGEoMCwwJSwxMDAlLDApKX0udnVlLWNvbG9yX19zYXR1cmF0aW9uLS1ibGFja3tiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgwZGVnLCMwMDAsdHJhbnNwYXJlbnQpfS52dWUtY29sb3JfX3NhdHVyYXRpb24tLXBvaW50ZXJ7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246YWJzb2x1dGV9LnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tY2lyY2xle2N1cnNvcjpoZWFkO3dpZHRoOjRweDtoZWlnaHQ6NHB4O2JveC1zaGFkb3c6MCAwIDAgMS41cHggI2ZmZixpbnNldCAwIDAgMXB4IDFweCByZ2JhKDAsMCwwLC4zKSwwIDAgMXB4IDJweCByZ2JhKDAsMCwwLC40KTtib3JkZXItcmFkaXVzOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC0ycHgsLTJweCl9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX21hdGVyaWFse3dpZHRoOjk4cHg7aGVpZ2h0Ojk4cHg7cGFkZGluZzoxNnB4O2ZvbnQtZmFtaWx5OlJvYm90bztwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMTIpLDAgMnB4IDVweCByZ2JhKDAsMCwwLC4xNik7YmFja2dyb3VuZC1jb2xvcjojZmZmfS52dWUtY29sb3JfX21hdGVyaWFsIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHt3aWR0aDoxMDAlO21hcmdpbi10b3A6MTJweDtmb250LXNpemU6MTVweDtjb2xvcjojMzMzO2hlaWdodDozMHB4fS52dWUtY29sb3JfX21hdGVyaWFsIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Zm9udC1zaXplOjExcHg7Y29sb3I6Izk5OTt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfS52dWUtY29sb3JfX21hdGVyaWFsX19oZXh7Ym9yZGVyLWJvdHRvbS13aWR0aDoycHg7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZH0udnVlLWNvbG9yX19tYXRlcmlhbF9fc3BsaXR7ZGlzcGxheTpmbGV4O21hcmdpbi1yaWdodDotMTBweDtwYWRkaW5nLXRvcDoxMXB4fS52dWUtY29sb3JfX21hdGVyaWFsX190aGlyZHtmbGV4OjE7cGFkZGluZy1yaWdodDoxMHB4fVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NDEwcHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19odWUtd2FycHtoZWlnaHQ6MTJweDtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yX19zbGlkZXJfX2h1ZS13YXJwIC52dWUtY29sb3JfX2MtaHVlX19waWNrZXJ7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDtib3JkZXItcmFkaXVzOjZweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsLTJweCk7YmFja2dyb3VuZC1jb2xvcjojZjhmOGY4O2JveC1zaGFkb3c6MCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMzcpfS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoZXN7ZGlzcGxheTpmbGV4O21hcmdpbi10b3A6MjBweH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaHttYXJnaW4tcmlnaHQ6MXB4O2ZsZXg6MTt3aWR0aDoyMCV9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2g6Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjFweH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaDpmaXJzdC1jaGlsZCAudnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaC1waWNrZXJ7Ym9yZGVyLXJhZGl1czoycHggMCAwIDJweH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaDpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoOmxhc3QtY2hpbGQgLnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2Vye2JvcmRlci1yYWRpdXM6MCAycHggMnB4IDB9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2Vye2N1cnNvcjpwb2ludGVyO2hlaWdodDoxMnB4fS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlci0tYWN0aXZle3RyYW5zZm9ybTpzY2FsZVkoMS44KTtib3JkZXItcmFkaXVzOjMuNnB4LzJweH1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fc3dhdGNoZXN7d2lkdGg6MzIwcHg7aGVpZ2h0OjI0MHB4O292ZXJmbG93LXk6c2Nyb2xsO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMTIpLDAgMnB4IDVweCByZ2JhKDAsMCwwLC4xNil9LnZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2JveHtwYWRkaW5nOjE2cHggMCA2cHggMTZweDtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2NvbG9yLWdyb3Vwe3BhZGRpbmctYm90dG9tOjEwcHg7d2lkdGg6NDBweDtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDoxMHB4fS52dWUtY29sb3JfX3N3YXRjaGVzX19jb2xvci1pdHt3aWR0aDo0MHB4O2hlaWdodDoyNHB4O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6Izg4MGU0ZjttYXJnaW4tYm90dG9tOjFweDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMH0udnVlLWNvbG9yX19zd2F0Y2hlc19fcGlja3tmaWxsOiNmZmY7bWFyZ2luLWxlZnQ6OHB4O2Rpc3BsYXk6YmxvY2t9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCwnLnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcHtiYWNrZ3JvdW5kOiNkY2RjZGM7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgwLDAsMCwuMjUpLDAgOHB4IDE2cHggcmdiYSgwLDAsMCwuMTUpO2JveC1zaXppbmc6aW5pdGlhbDt3aWR0aDo1MTNweDtmb250LWZhbWlseTpSb2JvdG99LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faGVhZHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYwZjAsI2Q0ZDRkNCk7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2IxYjFiMTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDAgMCBoc2xhKDAsMCUsMTAwJSwuMiksaW5zZXQgMCAtMXB4IDAgMCByZ2JhKDAsMCwwLC4wMik7aGVpZ2h0OjIzcHg7bGluZS1oZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjRweCA0cHggMCAwO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM0ZDRkNGQ7dGV4dC1hbGlnbjpjZW50ZXJ9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYm9keXtwYWRkaW5nOjE1cHg7ZGlzcGxheTpmbGV4fS52dWUtY29sb3JzX19waG90b3Nob3BfX3NhdHVyYXRpb24td3JhcHt3aWR0aDoyNTZweDtoZWlnaHQ6MjU2cHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyOjJweCBzb2xpZCAjYjNiM2IzO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNmMGYwZjA7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JzX19waG90b3Nob3BfX3NhdHVyYXRpb24td3JhcCAudnVlLWNvbG9yX19zYXR1cmF0aW9uLS1jaXJjbGV7d2lkdGg6MTJweDtoZWlnaHQ6MTJweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MjU2cHg7d2lkdGg6MTlweDttYXJnaW4tbGVmdDoxMHB4O2JvcmRlcjoycHggc29saWQgI2IzYjNiMztib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZjBmMGYwfS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVye3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1sZWZ0LC52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowO2hlaWdodDowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDAgNXB4IDhweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzU1NX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tbGVmdDphZnRlciwudnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tcmlnaHQ6YWZ0ZXJ7Y29udGVudDpcIlwiO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo0cHggMCA0cHggNnB4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxcHg7bGVmdDoxcHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtOHB4LC01cHgpfS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1sZWZ0e3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEzcHgsLTRweCl9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLXJpZ2h0e3RyYW5zZm9ybTp0cmFuc2xhdGUoMjBweCwtNHB4KSByb3RhdGUoMTgwZGVnKX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19jb250cm9sc3t3aWR0aDoxODBweDttYXJnaW4tbGVmdDoxMHB4O2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19hY3Rpb25ze21hcmdpbi1sZWZ0OjIwcHg7ZmxleDoxfS52dWUtY29sb3JzX19waG90b3Nob3BfX2FjLWJ0bntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmZmYsI2U2ZTZlNik7Ym9yZGVyOjFweCBzb2xpZCAjODc4Nzg3O2JvcmRlci1yYWRpdXM6MnB4O2hlaWdodDoyMHB4O2JveC1zaGFkb3c6MCAxcHggMCAwICNlYWVhZWE7Zm9udC1zaXplOjE0cHg7Y29sb3I6IzAwMDtsaW5lLWhlaWdodDoyMHB4O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MTBweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c3t3aWR0aDo2MHB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19zd2F0Y2hlc3tib3JkZXI6MXB4IHNvbGlkICNiM2IzYjM7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2YwZjBmMDttYXJnaW4tYm90dG9tOjJweDttYXJnaW4tdG9wOjFweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fcHItY29sb3J7aGVpZ2h0OjM0cHg7Ym94LXNoYWRvdzppbnNldCAxcHggMCAwICMwMDAsaW5zZXQgLTFweCAwIDAgIzAwMCxpbnNldCAwIDFweCAwICMwMDB9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX2xhYmVse2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiMwMDA7dGV4dC1hbGlnbjpjZW50ZXJ9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRze3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWJvdHRvbTo5cHg7d2lkdGg6ODBweDtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e21hcmdpbi1sZWZ0OjQwJTt3aWR0aDo0MCU7aGVpZ2h0OjE4cHg7Ym9yZGVyOjFweCBzb2xpZCAjODg4O2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjEpLDAgMXB4IDAgMCAjZWNlY2VjO21hcmdpbi1ib3R0b206NXB4O2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmctbGVmdDozcHg7bWFyZ2luLXJpZ2h0OjEwcHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHt0b3A6MDtsZWZ0OjA7d2lkdGg6MzRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Zm9udC1zaXplOjEzcHg7aGVpZ2h0OjE4cHg7bGluZS1oZWlnaHQ6MjJweDtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2RpdmlkZXJ7aGVpZ2h0OjVweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2hleCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7bWFyZ2luLWxlZnQ6MjAlO3dpZHRoOjgwJTtoZWlnaHQ6MThweDtib3JkZXI6MXB4IHNvbGlkICM4ODg7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMSksMCAxcHggMCAwICNlY2VjZWM7bWFyZ2luLWJvdHRvbTo2cHg7Zm9udC1zaXplOjEzcHg7cGFkZGluZy1sZWZ0OjNweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2hleCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjE0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxM3B4O2hlaWdodDoxOHB4O2xpbmUtaGVpZ2h0OjIycHh9JyxcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fc2tldGNoe3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjIwMHB4O3BhZGRpbmc6MTBweCAxMHB4IDA7Ym94LXNpemluZzppbml0aWFsO2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSksMCA4cHggMTZweCByZ2JhKDAsMCwwLC4xNSl9LnZ1ZS1jb2xvcl9fc2tldGNoX19zYXR1cmF0aW9uLXdyYXB7d2lkdGg6MTAwJTtwYWRkaW5nLWJvdHRvbTo3NSU7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JfX3NrZXRjaF9fY29udHJvbHN7ZGlzcGxheTpmbGV4fS52dWUtY29sb3JfX3NrZXRjaF9fc2xpZGVyc3twYWRkaW5nOjRweCAwO2ZsZXg6MX0udnVlLWNvbG9yX19za2V0Y2hfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1hbHBoYV9fZ3JhZGllbnQsLnZ1ZS1jb2xvcl9fc2tldGNoX19zbGlkZXJzIC52dWUtY29sb3JfX2MtaHVle2JvcmRlci1yYWRpdXM6MnB4fS52dWUtY29sb3JfX3NrZXRjaF9faHVlLXdyYXB7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwcHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19hbHBoYS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4O21hcmdpbi10b3A6NHB4O292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19za2V0Y2hfX2NvbG9yLXdyYXB7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tdG9wOjRweDttYXJnaW4tbGVmdDo0cHg7Ym9yZGVyLXJhZGl1czozcHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19hY3RpdmUtY29sb3J7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpLGluc2V0IDAgMCA0cHggcmdiYSgwLDAsMCwuMjUpO3otaW5kZXg6Mn0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxke2Rpc3BsYXk6ZmxleDtwYWRkaW5nLXRvcDo0cHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7d2lkdGg6ODAlO3BhZGRpbmc6NHB4IDEwJSAzcHg7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2NjYztmb250LXNpemU6MTFweH0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiMyMjI7cGFkZGluZy10b3A6M3B4O3BhZGRpbmctYm90dG9tOjRweDt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfS52dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLXNpbmdsZXtmbGV4OjE7cGFkZGluZy1sZWZ0OjZweH0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1kb3VibGV7ZmxleDoyfS52dWUtY29sb3JfX3NrZXRjaF9fcHJlc2V0c3ttYXJnaW4tcmlnaHQ6LTEwcHg7bWFyZ2luLWxlZnQ6LTEwcHg7cGFkZGluZy1sZWZ0OjEwcHg7cGFkZGluZy10b3A6MTBweDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlfS52dWUtY29sb3JfX3NrZXRjaF9fcHJlc2V0cy1jb2xvcntib3JkZXItcmFkaXVzOjNweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgMTBweCAxMHB4IDA7dmVydGljYWwtYWxpZ246dG9wO2N1cnNvcjpwb2ludGVyO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19jaHJvbWV7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAwIDJweCByZ2JhKDAsMCwwLC4zKSwwIDRweCA4cHggcmdiYSgwLDAsMCwuMyk7Ym94LXNpemluZzppbml0aWFsO3dpZHRoOjIyNXB4O2ZvbnQtZmFtaWx5Ok1lbmxvO2JhY2tncm91bmQtY29sb3I6I2ZmZn0udnVlLWNvbG9yX19jaHJvbWVfX2NvbnRyb2xze2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yX19jaHJvbWVfX2NvbG9yLXdyYXB7d2lkdGg6MzJweH0udnVlLWNvbG9yX19jaHJvbWVfX2FjdGl2ZS1jb2xvcnttYXJnaW4tdG9wOjZweDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci1yYWRpdXM6OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnN7ZmxleDoxfS52dWUtY29sb3JfX2Nocm9tZV9fc2xpZGVycyAudnVlLWNvbG9yX19jLWFscGhhX19ncmFkaWVudCwudnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1odWV7Ym9yZGVyLXJhZGl1czoycHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzIC52dWUtY29sb3JfX2MtYWxwaGFfX3BpY2tlciwudnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1odWVfX3BpY2tlcnt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2JvcmRlci1yYWRpdXM6NnB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTZweCwtMnB4KTtiYWNrZ3JvdW5kLWNvbG9yOiNmOGY4Zjg7Ym94LXNoYWRvdzowIDFweCA0cHggMCByZ2JhKDAsMCwwLC4zNyl9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHMtd3JhcHtwYWRkaW5nLXRvcDoxNnB4O2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkc3tkaXNwbGF5OmZsZXg7bWFyZ2luLWxlZnQ6LTZweDtmbGV4OjF9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHtwYWRkaW5nLWxlZnQ6NnB4O3dpZHRoOjEwMCV9LnZ1ZS1jb2xvcl9fY2hyb21lX190b2dnbGUtYnRue3dpZHRoOjMycHg7dGV4dC1hbGlnbjpyaWdodDtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yX19jaHJvbWVfX2ljb257bWFyZ2luLXJpZ2h0Oi00cHg7bWFyZ2luLXRvcDoxMnB4O2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0udnVlLWNvbG9yX19jaHJvbWVfX2ljb24taGlnaGxpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjI0cHg7aGVpZ2h0OjI4cHg7YmFja2dyb3VuZDojZWVlO2JvcmRlci1yYWRpdXM6NHB4O3RvcDoxMHB4O2xlZnQ6MTJweH0udnVlLWNvbG9yX19jaHJvbWVfX2h1ZS13cmFwe21hcmdpbi1ib3R0b206OHB4fS52dWUtY29sb3JfX2Nocm9tZV9fYWxwaGEtd3JhcCwudnVlLWNvbG9yX19jaHJvbWVfX2h1ZS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4fS52dWUtY29sb3JfX2Nocm9tZV9fY2hyb21lLWJvZHl7cGFkZGluZzoxNnB4IDE2cHggMTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnZ1ZS1jb2xvcl9fY2hyb21lX19zYXR1cmF0aW9uLXdyYXB7d2lkdGg6MTAwJTtwYWRkaW5nLWJvdHRvbTo1NSU7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMDtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fY2hyb21lX19zYXR1cmF0aW9uLXdyYXAgLnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tY2lyY2xle3dpZHRoOjEycHg7aGVpZ2h0OjEycHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiMzMzM7d2lkdGg6MTAwJTtib3JkZXItcnJhZGl1czoycHg7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2RhZGFkYTtoZWlnaHQ6MjFweDt0ZXh0LWFsaWduOmNlbnRlcn0udnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxMXB4O2xpbmUtaGVpZ2h0OjExcHg7Y29sb3I6Izk2OTY5Njt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6MTJweH1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fYy1hbHBoYSwudnVlLWNvbG9yX19jLWFscGhhX19jaGVja2JvYXJkLXdyYXB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9LnZ1ZS1jb2xvcl9fYy1hbHBoYV9fY2hlY2tib2FyZC13cmFwe292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19jLWFscGhhX19ncmFkaWVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH0udnVlLWNvbG9yX19jLWFscGhhX19jb250YWluZXJ7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyO2hlaWdodDoxMDAlO21hcmdpbjowIDNweH0udnVlLWNvbG9yX19jLWFscGhhX19wb2ludGVye3otaW5kZXg6Mjtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLWNvbG9yX19jLWFscGhhX19waWNrZXJ7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6NHB4O2JvcmRlci1yYWRpdXM6MXB4O2hlaWdodDo4cHg7Ym94LXNoYWRvdzowIDAgMnB4IHJnYmEoMCwwLDAsLjYpO2JhY2tncm91bmQ6I2ZmZjttYXJnaW4tdG9wOjFweDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMnB4KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fYy1jaGVja2VyYm9hcmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8peyhmdW5jdGlvbihvKXtmdW5jdGlvbiB0KGUsbyx0KXtmdW5jdGlvbiByKG8pe3ZhciB0PXAscj12O3JldHVybiBwPXY9dm9pZCAwLGs9byxiPWUuYXBwbHkocix0KX1mdW5jdGlvbiBpKGUpe3JldHVybiBrPWUsbT1zZXRUaW1lb3V0KHUsbyksRj9yKGUpOmJ9ZnVuY3Rpb24gbihlKXt2YXIgdD1lLXgscj1lLWssYT1vLXQ7cmV0dXJuIEE/QyhhLGctcik6YX1mdW5jdGlvbiBjKGUpe3ZhciB0PWUteCxyPWUtaztyZXR1cm4gdm9pZCAwPT09eHx8dD49b3x8dDwwfHxBJiZyPj1nfWZ1bmN0aW9uIHUoKXt2YXIgZT15KCk7cmV0dXJuIGMoZSk/ZChlKTp2b2lkKG09c2V0VGltZW91dCh1LG4oZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBtPXZvaWQgMCxSJiZwP3IoZSk6KHA9dj12b2lkIDAsYil9ZnVuY3Rpb24gaCgpe3ZvaWQgMCE9PW0mJmNsZWFyVGltZW91dChtKSxrPTAscD14PXY9bT12b2lkIDB9ZnVuY3Rpb24gZigpe3JldHVybiB2b2lkIDA9PT1tP2I6ZCh5KCkpfWZ1bmN0aW9uIF8oKXt2YXIgZT15KCksdD1jKGUpO2lmKHA9YXJndW1lbnRzLHY9dGhpcyx4PWUsdCl7aWYodm9pZCAwPT09bSlyZXR1cm4gaSh4KTtpZihBKXJldHVybiBtPXNldFRpbWVvdXQodSxvKSxcbnIoeCl9cmV0dXJuIHZvaWQgMD09PW0mJihtPXNldFRpbWVvdXQodSxvKSksYn12YXIgcCx2LGcsYixtLHgsaz0wLEY9ITEsQT0hMSxSPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihsKTtyZXR1cm4gbz1zKG8pfHwwLGEodCkmJihGPSEhdC5sZWFkaW5nLEE9XCJtYXhXYWl0XCJpbiB0LGc9QT93KHModC5tYXhXYWl0KXx8MCxvKTpnLFI9XCJ0cmFpbGluZ1wiaW4gdD8hIXQudHJhaWxpbmc6UiksXy5jYW5jZWw9aCxfLmZsdXNoPWYsX31mdW5jdGlvbiByKGUsbyxyKXt2YXIgaT0hMCxuPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihsKTtyZXR1cm4gYShyKSYmKGk9XCJsZWFkaW5nXCJpbiByPyEhci5sZWFkaW5nOmksbj1cInRyYWlsaW5nXCJpbiByPyEhci50cmFpbGluZzpuKSx0KGUsbyx7bGVhZGluZzppLG1heFdhaXQ6byx0cmFpbGluZzpufSl9ZnVuY3Rpb24gYShlKXt2YXIgbz10eXBlb2YgZTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT1vfHxcImZ1bmN0aW9uXCI9PW8pfWZ1bmN0aW9uIGkoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiBuKGUpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlfHxpKGUpJiZ4LmNhbGwoZSk9PXV9ZnVuY3Rpb24gcyhlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihuKGUpKXJldHVybiBjO2lmKGEoZSkpe3ZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9YShvKT9vK1wiXCI6b31pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShkLFwiXCIpO3ZhciB0PWYudGVzdChlKTtyZXR1cm4gdHx8Xy50ZXN0KGUpP3AoZS5zbGljZSgyKSx0PzI6OCk6aC50ZXN0KGUpP2M6K2V9dmFyIGw9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsYz1OYU4sdT1cIltvYmplY3QgU3ltYm9sXVwiLGQ9L15cXHMrfFxccyskL2csaD0vXlstK10weFswLTlhLWZdKyQvaSxmPS9eMGJbMDFdKyQvaSxfPS9eMG9bMC03XSskL2kscD1wYXJzZUludCx2PVwib2JqZWN0XCI9PXR5cGVvZiBvJiZvJiZvLk9iamVjdD09PU9iamVjdCYmbyxnPVwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixiPXZ8fGd8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxtPU9iamVjdC5wcm90b3R5cGUseD1tLnRvU3RyaW5nLHc9TWF0aC5tYXgsQz1NYXRoLm1pbix5PWZ1bmN0aW9uKCl7cmV0dXJuIGIuRGF0ZS5ub3coKX07ZS5leHBvcnRzPXJ9KS5jYWxsKG8sZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhLGk7IWZ1bmN0aW9uKHQsbil7YT1bXSxyPW4saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByP3IuYXBwbHkobyxhKTpyLCEodm9pZCAwIT09aSYmKGUuZXhwb3J0cz1pKSl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm57cmVkOns1MDpcIiNmZmViZWVcIiwxMDA6XCIjZmZjZGQyXCIsMjAwOlwiI2VmOWE5YVwiLDMwMDpcIiNlNTczNzNcIiw0MDA6XCIjZWY1MzUwXCIsNTAwOlwiI2Y0NDMzNlwiLDYwMDpcIiNlNTM5MzVcIiw3MDA6XCIjZDMyZjJmXCIsODAwOlwiI2M2MjgyOFwiLDkwMDpcIiNiNzFjMWNcIixhMTAwOlwiI2ZmOGE4MFwiLGEyMDA6XCIjZmY1MjUyXCIsYTQwMDpcIiNmZjE3NDRcIixhNzAwOlwiI2Q1MDAwMFwifSxwaW5rOns1MDpcIiNmY2U0ZWNcIiwxMDA6XCIjZjhiYmQwXCIsMjAwOlwiI2Y0OGZiMVwiLDMwMDpcIiNmMDYyOTJcIiw0MDA6XCIjZWM0MDdhXCIsNTAwOlwiI2U5MWU2M1wiLDYwMDpcIiNkODFiNjBcIiw3MDA6XCIjYzIxODViXCIsODAwOlwiI2FkMTQ1N1wiLDkwMDpcIiM4ODBlNGZcIixhMTAwOlwiI2ZmODBhYlwiLGEyMDA6XCIjZmY0MDgxXCIsYTQwMDpcIiNmNTAwNTdcIixhNzAwOlwiI2M1MTE2MlwifSxwdXJwbGU6ezUwOlwiI2YzZTVmNVwiLDEwMDpcIiNlMWJlZTdcIiwyMDA6XCIjY2U5M2Q4XCIsMzAwOlwiI2JhNjhjOFwiLDQwMDpcIiNhYjQ3YmNcIiw1MDA6XCIjOWMyN2IwXCIsNjAwOlwiIzhlMjRhYVwiLDcwMDpcIiM3YjFmYTJcIiw4MDA6XCIjNmExYjlhXCIsOTAwOlwiIzRhMTQ4Y1wiLGExMDA6XCIjZWE4MGZjXCIsYTIwMDpcIiNlMDQwZmJcIixhNDAwOlwiI2Q1MDBmOVwiLGE3MDA6XCIjYWEwMGZmXCJ9LGRlZXBQdXJwbGU6ezUwOlwiI2VkZTdmNlwiLDEwMDpcIiNkMWM0ZTlcIiwyMDA6XCIjYjM5ZGRiXCIsMzAwOlwiIzk1NzVjZFwiLDQwMDpcIiM3ZTU3YzJcIiw1MDA6XCIjNjczYWI3XCIsNjAwOlwiIzVlMzViMVwiLDcwMDpcIiM1MTJkYThcIiw4MDA6XCIjNDUyN2EwXCIsOTAwOlwiIzMxMWI5MlwiLGExMDA6XCIjYjM4OGZmXCIsYTIwMDpcIiM3YzRkZmZcIixhNDAwOlwiIzY1MWZmZlwiLGE3MDA6XCIjNjIwMGVhXCJ9LGluZGlnbzp7NTA6XCIjZThlYWY2XCIsMTAwOlwiI2M1Y2FlOVwiLDIwMDpcIiM5ZmE4ZGFcIiwzMDA6XCIjNzk4NmNiXCIsNDAwOlwiIzVjNmJjMFwiLDUwMDpcIiMzZjUxYjVcIiw2MDA6XCIjMzk0OWFiXCIsNzAwOlwiIzMwM2Y5ZlwiLDgwMDpcIiMyODM1OTNcIiw5MDA6XCIjMWEyMzdlXCIsYTEwMDpcIiM4YzllZmZcIixhMjAwOlwiIzUzNmRmZVwiLGE0MDA6XCIjM2Q1YWZlXCIsYTcwMDpcIiMzMDRmZmVcIn0sYmx1ZTp7NTA6XCIjZTNmMmZkXCIsMTAwOlwiI2JiZGVmYlwiLDIwMDpcIiM5MGNhZjlcIiwzMDA6XCIjNjRiNWY2XCIsNDAwOlwiIzQyYTVmNVwiLDUwMDpcIiMyMTk2ZjNcIiw2MDA6XCIjMWU4OGU1XCIsNzAwOlwiIzE5NzZkMlwiLDgwMDpcIiMxNTY1YzBcIiw5MDA6XCIjMGQ0N2ExXCIsYTEwMDpcIiM4MmIxZmZcIixhMjAwOlwiIzQ0OGFmZlwiLGE0MDA6XCIjMjk3OWZmXCIsYTcwMDpcIiMyOTYyZmZcIn0sbGlnaHRCbHVlOns1MDpcIiNlMWY1ZmVcIiwxMDA6XCIjYjNlNWZjXCIsMjAwOlwiIzgxZDRmYVwiLDMwMDpcIiM0ZmMzZjdcIiw0MDA6XCIjMjliNmY2XCIsNTAwOlwiIzAzYTlmNFwiLDYwMDpcIiMwMzliZTVcIiw3MDA6XCIjMDI4OGQxXCIsODAwOlwiIzAyNzdiZFwiLDkwMDpcIiMwMTU3OWJcIixhMTAwOlwiIzgwZDhmZlwiLGEyMDA6XCIjNDBjNGZmXCIsYTQwMDpcIiMwMGIwZmZcIixhNzAwOlwiIzAwOTFlYVwifSxjeWFuOns1MDpcIiNlMGY3ZmFcIiwxMDA6XCIjYjJlYmYyXCIsMjAwOlwiIzgwZGVlYVwiLDMwMDpcIiM0ZGQwZTFcIiw0MDA6XCIjMjZjNmRhXCIsNTAwOlwiIzAwYmNkNFwiLDYwMDpcIiMwMGFjYzFcIiw3MDA6XCIjMDA5N2E3XCIsODAwOlwiIzAwODM4ZlwiLDkwMDpcIiMwMDYwNjRcIixhMTAwOlwiIzg0ZmZmZlwiLGEyMDA6XCIjMThmZmZmXCIsYTQwMDpcIiMwMGU1ZmZcIixhNzAwOlwiIzAwYjhkNFwifSx0ZWFsOns1MDpcIiNlMGYyZjFcIiwxMDA6XCIjYjJkZmRiXCIsMjAwOlwiIzgwY2JjNFwiLDMwMDpcIiM0ZGI2YWNcIiw0MDA6XCIjMjZhNjlhXCIsNTAwOlwiIzAwOTY4OFwiLDYwMDpcIiMwMDg5N2JcIiw3MDA6XCIjMDA3OTZiXCIsODAwOlwiIzAwNjk1Y1wiLDkwMDpcIiMwMDRkNDBcIixhMTAwOlwiI2E3ZmZlYlwiLGEyMDA6XCIjNjRmZmRhXCIsYTQwMDpcIiMxZGU5YjZcIixhNzAwOlwiIzAwYmZhNVwifSxncmVlbjp7NTA6XCIjZThmNWU5XCIsMTAwOlwiI2M4ZTZjOVwiLDIwMDpcIiNhNWQ2YTdcIiwzMDA6XCIjODFjNzg0XCIsNDAwOlwiIzY2YmI2YVwiLDUwMDpcIiM0Y2FmNTBcIiw2MDA6XCIjNDNhMDQ3XCIsNzAwOlwiIzM4OGUzY1wiLDgwMDpcIiMyZTdkMzJcIiw5MDA6XCIjMWI1ZTIwXCIsYTEwMDpcIiNiOWY2Y2FcIixhMjAwOlwiIzY5ZjBhZVwiLGE0MDA6XCIjMDBlNjc2XCIsYTcwMDpcIiMwMGM4NTNcIn0sbGlnaHRHcmVlbjp7NTA6XCIjZjFmOGU5XCIsMTAwOlwiI2RjZWRjOFwiLDIwMDpcIiNjNWUxYTVcIiwzMDA6XCIjYWVkNTgxXCIsNDAwOlwiIzljY2M2NVwiLDUwMDpcIiM4YmMzNGFcIiw2MDA6XCIjN2NiMzQyXCIsNzAwOlwiIzY4OWYzOFwiLDgwMDpcIiM1NThiMmZcIiw5MDA6XCIjMzM2OTFlXCIsYTEwMDpcIiNjY2ZmOTBcIixhMjAwOlwiI2IyZmY1OVwiLGE0MDA6XCIjNzZmZjAzXCIsYTcwMDpcIiM2NGRkMTdcIn0sbGltZTp7NTA6XCIjZjlmYmU3XCIsMTAwOlwiI2YwZjRjM1wiLDIwMDpcIiNlNmVlOWNcIiwzMDA6XCIjZGNlNzc1XCIsNDAwOlwiI2Q0ZTE1N1wiLDUwMDpcIiNjZGRjMzlcIiw2MDA6XCIjYzBjYTMzXCIsNzAwOlwiI2FmYjQyYlwiLDgwMDpcIiM5ZTlkMjRcIiw5MDA6XCIjODI3NzE3XCIsYTEwMDpcIiNmNGZmODFcIixhMjAwOlwiI2VlZmY0MVwiLGE0MDA6XCIjYzZmZjAwXCIsYTcwMDpcIiNhZWVhMDBcIn0seWVsbG93Ons1MDpcIiNmZmZkZTdcIiwxMDA6XCIjZmZmOWM0XCIsMjAwOlwiI2ZmZjU5ZFwiLDMwMDpcIiNmZmYxNzZcIiw0MDA6XCIjZmZlZTU4XCIsNTAwOlwiI2ZmZWIzYlwiLDYwMDpcIiNmZGQ4MzVcIiw3MDA6XCIjZmJjMDJkXCIsODAwOlwiI2Y5YTgyNVwiLDkwMDpcIiNmNTdmMTdcIixhMTAwOlwiI2ZmZmY4ZFwiLGEyMDA6XCIjZmZmZjAwXCIsYTQwMDpcIiNmZmVhMDBcIixhNzAwOlwiI2ZmZDYwMFwifSxhbWJlcjp7NTA6XCIjZmZmOGUxXCIsMTAwOlwiI2ZmZWNiM1wiLDIwMDpcIiNmZmUwODJcIiwzMDA6XCIjZmZkNTRmXCIsNDAwOlwiI2ZmY2EyOFwiLDUwMDpcIiNmZmMxMDdcIiw2MDA6XCIjZmZiMzAwXCIsNzAwOlwiI2ZmYTAwMFwiLDgwMDpcIiNmZjhmMDBcIiw5MDA6XCIjZmY2ZjAwXCIsYTEwMDpcIiNmZmU1N2ZcIixhMjAwOlwiI2ZmZDc0MFwiLGE0MDA6XCIjZmZjNDAwXCIsYTcwMDpcIiNmZmFiMDBcIn0sb3JhbmdlOns1MDpcIiNmZmYzZTBcIiwxMDA6XCIjZmZlMGIyXCIsMjAwOlwiI2ZmY2M4MFwiLDMwMDpcIiNmZmI3NGRcIiw0MDA6XCIjZmZhNzI2XCIsNTAwOlwiI2ZmOTgwMFwiLDYwMDpcIiNmYjhjMDBcIiw3MDA6XCIjZjU3YzAwXCIsODAwOlwiI2VmNmMwMFwiLDkwMDpcIiNlNjUxMDBcIixhMTAwOlwiI2ZmZDE4MFwiLGEyMDA6XCIjZmZhYjQwXCIsYTQwMDpcIiNmZjkxMDBcIixhNzAwOlwiI2ZmNmQwMFwifSxkZWVwT3JhbmdlOns1MDpcIiNmYmU5ZTdcIiwxMDA6XCIjZmZjY2JjXCIsMjAwOlwiI2ZmYWI5MVwiLDMwMDpcIiNmZjhhNjVcIiw0MDA6XCIjZmY3MDQzXCIsNTAwOlwiI2ZmNTcyMlwiLDYwMDpcIiNmNDUxMWVcIiw3MDA6XCIjZTY0YTE5XCIsODAwOlwiI2Q4NDMxNVwiLDkwMDpcIiNiZjM2MGNcIixhMTAwOlwiI2ZmOWU4MFwiLGEyMDA6XCIjZmY2ZTQwXCIsYTQwMDpcIiNmZjNkMDBcIixhNzAwOlwiI2RkMmMwMFwifSxicm93bjp7NTA6XCIjZWZlYmU5XCIsMTAwOlwiI2Q3Y2NjOFwiLDIwMDpcIiNiY2FhYTRcIiwzMDA6XCIjYTE4ODdmXCIsNDAwOlwiIzhkNmU2M1wiLDUwMDpcIiM3OTU1NDhcIiw2MDA6XCIjNmQ0YzQxXCIsNzAwOlwiIzVkNDAzN1wiLDgwMDpcIiM0ZTM0MmVcIiw5MDA6XCIjM2UyNzIzXCJ9LGdyZXk6ezUwOlwiI2ZhZmFmYVwiLDEwMDpcIiNmNWY1ZjVcIiwyMDA6XCIjZWVlZWVlXCIsMzAwOlwiI2UwZTBlMFwiLDQwMDpcIiNiZGJkYmRcIiw1MDA6XCIjOWU5ZTllXCIsNjAwOlwiIzc1NzU3NVwiLDcwMDpcIiM2MTYxNjFcIiw4MDA6XCIjNDI0MjQyXCIsOTAwOlwiIzIxMjEyMVwifSxibHVlR3JleTp7NTA6XCIjZWNlZmYxXCIsMTAwOlwiI2NmZDhkY1wiLDIwMDpcIiNiMGJlYzVcIiwzMDA6XCIjOTBhNGFlXCIsNDAwOlwiIzc4OTA5Y1wiLDUwMDpcIiM2MDdkOGJcIiw2MDA6XCIjNTQ2ZTdhXCIsNzAwOlwiIzQ1NWE2NFwiLDgwMDpcIiMzNzQ3NGZcIiw5MDA6XCIjMjYzMjM4XCJ9LGRhcmtUZXh0OntwcmltYXJ5OlwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLHNlY29uZGFyeTpcInJnYmEoMCwgMCwgMCwgMC41NClcIixkaXNhYmxlZDpcInJnYmEoMCwgMCwgMCwgMC4zOClcIixkaXZpZGVyczpcInJnYmEoMCwgMCwgMCwgMC4xMilcIn0sbGlnaHRUZXh0OntwcmltYXJ5OlwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiLHNlY29uZGFyeTpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiLGRpc2FibGVkOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCIsZGl2aWRlcnM6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpXCJ9LGRhcmtJY29uczp7YWN0aXZlOlwicmdiYSgwLCAwLCAwLCAwLjU0KVwiLGluYWN0aXZlOlwicmdiYSgwLCAwLCAwLCAwLjM4KVwifSxsaWdodEljb25zOnthY3RpdmU6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCIsaW5hY3RpdmU6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIn0sd2hpdGU6XCIjZmZmZmZmXCIsYmxhY2s6XCIjMDAwMDAwXCJ9fSl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcjshZnVuY3Rpb24oYSl7ZnVuY3Rpb24gaShlLG8pe2lmKGU9ZT9lOlwiXCIsbz1vfHx7fSxlIGluc3RhbmNlb2YgaSlyZXR1cm4gZTtpZighKHRoaXMgaW5zdGFuY2VvZiBpKSlyZXR1cm4gbmV3IGkoZSxvKTt2YXIgdD1uKGUpO3RoaXMuX29yaWdpbmFsSW5wdXQ9ZSx0aGlzLl9yPXQucix0aGlzLl9nPXQuZyx0aGlzLl9iPXQuYix0aGlzLl9hPXQuYSx0aGlzLl9yb3VuZEE9WCgxMDAqdGhpcy5fYSkvMTAwLHRoaXMuX2Zvcm1hdD1vLmZvcm1hdHx8dC5mb3JtYXQsdGhpcy5fZ3JhZGllbnRUeXBlPW8uZ3JhZGllbnRUeXBlLHRoaXMuX3I8MSYmKHRoaXMuX3I9WCh0aGlzLl9yKSksdGhpcy5fZzwxJiYodGhpcy5fZz1YKHRoaXMuX2cpKSx0aGlzLl9iPDEmJih0aGlzLl9iPVgodGhpcy5fYikpLHRoaXMuX29rPXQub2ssdGhpcy5fdGNfaWQ9VisrfWZ1bmN0aW9uIG4oZSl7dmFyIG89e3I6MCxnOjAsYjowfSx0PTEscj1udWxsLGE9bnVsbCxpPW51bGwsbj0hMSxsPSExO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1JKGUpKSxcIm9iamVjdFwiPT10eXBlb2YgZSYmKEQoZS5yKSYmRChlLmcpJiZEKGUuYik/KG89cyhlLnIsZS5nLGUuYiksbj0hMCxsPVwiJVwiPT09U3RyaW5nKGUucikuc3Vic3RyKC0xKT9cInByZ2JcIjpcInJnYlwiKTpEKGUuaCkmJkQoZS5zKSYmRChlLnYpPyhyPU8oZS5zKSxhPU8oZS52KSxvPWQoZS5oLHIsYSksbj0hMCxsPVwiaHN2XCIpOkQoZS5oKSYmRChlLnMpJiZEKGUubCkmJihyPU8oZS5zKSxpPU8oZS5sKSxvPWMoZS5oLHIsaSksbj0hMCxsPVwiaHNsXCIpLGUuaGFzT3duUHJvcGVydHkoXCJhXCIpJiYodD1lLmEpKSx0PU0odCkse29rOm4sZm9ybWF0OmUuZm9ybWF0fHxsLHI6cSgyNTUsWShvLnIsMCkpLGc6cSgyNTUsWShvLmcsMCkpLGI6cSgyNTUsWShvLmIsMCkpLGE6dH19ZnVuY3Rpb24gcyhlLG8sdCl7cmV0dXJue3I6MjU1Kk4oZSwyNTUpLGc6MjU1Kk4obywyNTUpLGI6MjU1Kk4odCwyNTUpfX1mdW5jdGlvbiBsKGUsbyx0KXtlPU4oZSwyNTUpLG89TihvLDI1NSksdD1OKHQsMjU1KTt2YXIgcixhLGk9WShlLG8sdCksbj1xKGUsbyx0KSxzPShpK24pLzI7aWYoaT09bilyPWE9MDtlbHNle3ZhciBsPWktbjtzd2l0Y2goYT1zPi41P2wvKDItaS1uKTpsLyhpK24pLGkpe2Nhc2UgZTpyPShvLXQpL2wrKG88dD82OjApO2JyZWFrO2Nhc2UgbzpyPSh0LWUpL2wrMjticmVhaztjYXNlIHQ6cj0oZS1vKS9sKzR9ci89Nn1yZXR1cm57aDpyLHM6YSxsOnN9fWZ1bmN0aW9uIGMoZSxvLHQpe2Z1bmN0aW9uIHIoZSxvLHQpe3JldHVybiB0PDAmJih0Kz0xKSx0PjEmJih0LT0xKSx0PDEvNj9lKzYqKG8tZSkqdDp0PC41P286dDwyLzM/ZSsoby1lKSooMi8zLXQpKjY6ZX12YXIgYSxpLG47aWYoZT1OKGUsMzYwKSxvPU4obywxMDApLHQ9Tih0LDEwMCksMD09PW8pYT1pPW49dDtlbHNle3ZhciBzPXQ8LjU/dCooMStvKTp0K28tdCpvLGw9Mip0LXM7YT1yKGwscyxlKzEvMyksaT1yKGwscyxlKSxuPXIobCxzLGUtMS8zKX1yZXR1cm57cjoyNTUqYSxnOjI1NSppLGI6MjU1Km59fWZ1bmN0aW9uIHUoZSxvLHQpe2U9TihlLDI1NSksbz1OKG8sMjU1KSx0PU4odCwyNTUpO3ZhciByLGEsaT1ZKGUsbyx0KSxuPXEoZSxvLHQpLHM9aSxsPWktbjtpZihhPTA9PT1pPzA6bC9pLGk9PW4pcj0wO2Vsc2V7c3dpdGNoKGkpe2Nhc2UgZTpyPShvLXQpL2wrKG88dD82OjApO2JyZWFrO2Nhc2UgbzpyPSh0LWUpL2wrMjticmVhaztjYXNlIHQ6cj0oZS1vKS9sKzR9ci89Nn1yZXR1cm57aDpyLHM6YSx2OnN9fWZ1bmN0aW9uIGQoZSxvLHQpe2U9NipOKGUsMzYwKSxvPU4obywxMDApLHQ9Tih0LDEwMCk7dmFyIHI9YS5mbG9vcihlKSxpPWUtcixuPXQqKDEtbykscz10KigxLWkqbyksbD10KigxLSgxLWkpKm8pLGM9ciU2LHU9W3QscyxuLG4sbCx0XVtjXSxkPVtsLHQsdCxzLG4sbl1bY10saD1bbixuLGwsdCx0LHNdW2NdO3JldHVybntyOjI1NSp1LGc6MjU1KmQsYjoyNTUqaH19ZnVuY3Rpb24gaChlLG8sdCxyKXt2YXIgYT1bSChYKGUpLnRvU3RyaW5nKDE2KSksSChYKG8pLnRvU3RyaW5nKDE2KSksSChYKHQpLnRvU3RyaW5nKDE2KSldO3JldHVybiByJiZhWzBdLmNoYXJBdCgwKT09YVswXS5jaGFyQXQoMSkmJmFbMV0uY2hhckF0KDApPT1hWzFdLmNoYXJBdCgxKSYmYVsyXS5jaGFyQXQoMCk9PWFbMl0uY2hhckF0KDEpP2FbMF0uY2hhckF0KDApK2FbMV0uY2hhckF0KDApK2FbMl0uY2hhckF0KDApOmEuam9pbihcIlwiKX1mdW5jdGlvbiBmKGUsbyx0LHIsYSl7dmFyIGk9W0goWChlKS50b1N0cmluZygxNikpLEgoWChvKS50b1N0cmluZygxNikpLEgoWCh0KS50b1N0cmluZygxNikpLEgoeihyKSldO3JldHVybiBhJiZpWzBdLmNoYXJBdCgwKT09aVswXS5jaGFyQXQoMSkmJmlbMV0uY2hhckF0KDApPT1pWzFdLmNoYXJBdCgxKSYmaVsyXS5jaGFyQXQoMCk9PWlbMl0uY2hhckF0KDEpJiZpWzNdLmNoYXJBdCgwKT09aVszXS5jaGFyQXQoMSk/aVswXS5jaGFyQXQoMCkraVsxXS5jaGFyQXQoMCkraVsyXS5jaGFyQXQoMCkraVszXS5jaGFyQXQoMCk6aS5qb2luKFwiXCIpfWZ1bmN0aW9uIF8oZSxvLHQscil7dmFyIGE9W0goeihyKSksSChYKGUpLnRvU3RyaW5nKDE2KSksSChYKG8pLnRvU3RyaW5nKDE2KSksSChYKHQpLnRvU3RyaW5nKDE2KSldO3JldHVybiBhLmpvaW4oXCJcIil9ZnVuY3Rpb24gcChlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvSHNsKCk7cmV0dXJuIHQucy09by8xMDAsdC5zPVAodC5zKSxpKHQpfWZ1bmN0aW9uIHYoZSxvKXtvPTA9PT1vPzA6b3x8MTA7dmFyIHQ9aShlKS50b0hzbCgpO3JldHVybiB0LnMrPW8vMTAwLHQucz1QKHQucyksaSh0KX1mdW5jdGlvbiBnKGUpe3JldHVybiBpKGUpLmRlc2F0dXJhdGUoMTAwKX1mdW5jdGlvbiBiKGUsbyl7bz0wPT09bz8wOm98fDEwO3ZhciB0PWkoZSkudG9Ic2woKTtyZXR1cm4gdC5sKz1vLzEwMCx0Lmw9UCh0LmwpLGkodCl9ZnVuY3Rpb24gbShlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvUmdiKCk7cmV0dXJuIHQucj1ZKDAscSgyNTUsdC5yLVgoMjU1Ki0oby8xMDApKSkpLHQuZz1ZKDAscSgyNTUsdC5nLVgoMjU1Ki0oby8xMDApKSkpLHQuYj1ZKDAscSgyNTUsdC5iLVgoMjU1Ki0oby8xMDApKSkpLGkodCl9ZnVuY3Rpb24geChlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvSHNsKCk7cmV0dXJuIHQubC09by8xMDAsdC5sPVAodC5sKSxpKHQpfWZ1bmN0aW9uIHcoZSxvKXt2YXIgdD1pKGUpLnRvSHNsKCkscj0odC5oK28pJTM2MDtyZXR1cm4gdC5oPXI8MD8zNjArcjpyLGkodCl9ZnVuY3Rpb24gQyhlKXt2YXIgbz1pKGUpLnRvSHNsKCk7cmV0dXJuIG8uaD0oby5oKzE4MCklMzYwLGkobyl9ZnVuY3Rpb24geShlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCsxMjApJTM2MCxzOm8ucyxsOm8ubH0pLGkoe2g6KHQrMjQwKSUzNjAsczpvLnMsbDpvLmx9KV19ZnVuY3Rpb24gayhlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCs5MCklMzYwLHM6by5zLGw6by5sfSksaSh7aDoodCsxODApJTM2MCxzOm8ucyxsOm8ubH0pLGkoe2g6KHQrMjcwKSUzNjAsczpvLnMsbDpvLmx9KV19ZnVuY3Rpb24gRihlKXt2YXIgbz1pKGUpLnRvSHNsKCksdD1vLmg7cmV0dXJuW2koZSksaSh7aDoodCs3MiklMzYwLHM6by5zLGw6by5sfSksaSh7aDoodCsyMTYpJTM2MCxzOm8ucyxsOm8ubH0pXX1mdW5jdGlvbiBBKGUsbyx0KXtvPW98fDYsdD10fHwzMDt2YXIgcj1pKGUpLnRvSHNsKCksYT0zNjAvdCxuPVtpKGUpXTtmb3Ioci5oPShyLmgtKGEqbz4+MSkrNzIwKSUzNjA7LS1vOylyLmg9KHIuaCthKSUzNjAsbi5wdXNoKGkocikpO3JldHVybiBufWZ1bmN0aW9uIFIoZSxvKXtvPW98fDY7Zm9yKHZhciB0PWkoZSkudG9Ic3YoKSxyPXQuaCxhPXQucyxuPXQudixzPVtdLGw9MS9vO28tLTspcy5wdXNoKGkoe2g6cixzOmEsdjpufSkpLG49KG4rbCklMTtyZXR1cm4gc31mdW5jdGlvbiBTKGUpe3ZhciBvPXt9O2Zvcih2YXIgdCBpbiBlKWUuaGFzT3duUHJvcGVydHkodCkmJihvW2VbdF1dPXQpO3JldHVybiBvfWZ1bmN0aW9uIE0oZSl7cmV0dXJuIGU9cGFyc2VGbG9hdChlKSwoaXNOYU4oZSl8fGU8MHx8ZT4xKSYmKGU9MSksZX1mdW5jdGlvbiBOKGUsbyl7TChlKSYmKGU9XCIxMDAlXCIpO3ZhciB0PUUoZSk7cmV0dXJuIGU9cShvLFkoMCxwYXJzZUZsb2F0KGUpKSksdCYmKGU9cGFyc2VJbnQoZSpvLDEwKS8xMDApLGEuYWJzKGUtbyk8MWUtNj8xOmUlby9wYXJzZUZsb2F0KG8pfWZ1bmN0aW9uIFAoZSl7cmV0dXJuIHEoMSxZKDAsZSkpfWZ1bmN0aW9uIGooZSl7cmV0dXJuIHBhcnNlSW50KGUsMTYpfWZ1bmN0aW9uIEwoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJmUuaW5kZXhPZihcIi5cIikhPS0xJiYxPT09cGFyc2VGbG9hdChlKX1mdW5jdGlvbiBFKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLmluZGV4T2YoXCIlXCIpIT0tMX1mdW5jdGlvbiBIKGUpe3JldHVybiAxPT1lLmxlbmd0aD9cIjBcIitlOlwiXCIrZX1mdW5jdGlvbiBPKGUpe3JldHVybiBlPD0xJiYoZT0xMDAqZStcIiVcIiksZX1mdW5jdGlvbiB6KGUpe3JldHVybiBhLnJvdW5kKDI1NSpwYXJzZUZsb2F0KGUpKS50b1N0cmluZygxNil9ZnVuY3Rpb24gQihlKXtyZXR1cm4gaihlKS8yNTV9ZnVuY3Rpb24gRChlKXtyZXR1cm4hIVouQ1NTX1VOSVQuZXhlYyhlKX1mdW5jdGlvbiBJKGUpe2U9ZS5yZXBsYWNlKCQsXCJcIikucmVwbGFjZShVLFwiXCIpLnRvTG93ZXJDYXNlKCk7dmFyIG89ITE7aWYoR1tlXSllPUdbZV0sbz0hMDtlbHNlIGlmKFwidHJhbnNwYXJlbnRcIj09ZSlyZXR1cm57cjowLGc6MCxiOjAsYTowLGZvcm1hdDpcIm5hbWVcIn07dmFyIHQ7cmV0dXJuKHQ9Wi5yZ2IuZXhlYyhlKSk/e3I6dFsxXSxnOnRbMl0sYjp0WzNdfToodD1aLnJnYmEuZXhlYyhlKSk/e3I6dFsxXSxnOnRbMl0sYjp0WzNdLGE6dFs0XX06KHQ9Wi5oc2wuZXhlYyhlKSk/e2g6dFsxXSxzOnRbMl0sbDp0WzNdfToodD1aLmhzbGEuZXhlYyhlKSk/e2g6dFsxXSxzOnRbMl0sbDp0WzNdLGE6dFs0XX06KHQ9Wi5oc3YuZXhlYyhlKSk/e2g6dFsxXSxzOnRbMl0sdjp0WzNdfToodD1aLmhzdmEuZXhlYyhlKSk/e2g6dFsxXSxzOnRbMl0sdjp0WzNdLGE6dFs0XX06KHQ9Wi5oZXg4LmV4ZWMoZSkpP3tyOmoodFsxXSksZzpqKHRbMl0pLGI6aih0WzNdKSxhOkIodFs0XSksZm9ybWF0Om8/XCJuYW1lXCI6XCJoZXg4XCJ9Oih0PVouaGV4Ni5leGVjKGUpKT97cjpqKHRbMV0pLGc6aih0WzJdKSxiOmoodFszXSksZm9ybWF0Om8/XCJuYW1lXCI6XCJoZXhcIn06KHQ9Wi5oZXg0LmV4ZWMoZSkpP3tyOmoodFsxXStcIlwiK3RbMV0pLGc6aih0WzJdK1wiXCIrdFsyXSksYjpqKHRbM10rXCJcIit0WzNdKSxhOkIodFs0XStcIlwiK3RbNF0pLGZvcm1hdDpvP1wibmFtZVwiOlwiaGV4OFwifTohISh0PVouaGV4My5leGVjKGUpKSYme3I6aih0WzFdK1wiXCIrdFsxXSksZzpqKHRbMl0rXCJcIit0WzJdKSxiOmoodFszXStcIlwiK3RbM10pLGZvcm1hdDpvP1wibmFtZVwiOlwiaGV4XCJ9fWZ1bmN0aW9uIFQoZSl7dmFyIG8sdDtyZXR1cm4gZT1lfHx7bGV2ZWw6XCJBQVwiLHNpemU6XCJzbWFsbFwifSxvPShlLmxldmVsfHxcIkFBXCIpLnRvVXBwZXJDYXNlKCksdD0oZS5zaXplfHxcInNtYWxsXCIpLnRvTG93ZXJDYXNlKCksXCJBQVwiIT09byYmXCJBQUFcIiE9PW8mJihvPVwiQUFcIiksXCJzbWFsbFwiIT09dCYmXCJsYXJnZVwiIT09dCYmKHQ9XCJzbWFsbFwiKSx7bGV2ZWw6byxzaXplOnR9fXZhciAkPS9eXFxzKy8sVT0vXFxzKyQvLFY9MCxYPWEucm91bmQscT1hLm1pbixZPWEubWF4LFc9YS5yYW5kb207aS5wcm90b3R5cGU9e2lzRGFyazpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEJyaWdodG5lc3MoKTwxMjh9LGlzTGlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0RhcmsoKX0saXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9va30sZ2V0T3JpZ2luYWxJbnB1dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9vcmlnaW5hbElucHV0fSxnZXRGb3JtYXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZm9ybWF0fSxnZXRBbHBoYTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hfSxnZXRCcmlnaHRuZXNzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50b1JnYigpO3JldHVybigyOTkqZS5yKzU4NyplLmcrMTE0KmUuYikvMWUzfSxnZXRMdW1pbmFuY2U6ZnVuY3Rpb24oKXt2YXIgZSxvLHQscixpLG4scz10aGlzLnRvUmdiKCk7cmV0dXJuIGU9cy5yLzI1NSxvPXMuZy8yNTUsdD1zLmIvMjU1LHI9ZTw9LjAzOTI4P2UvMTIuOTI6YS5wb3coKGUrLjA1NSkvMS4wNTUsMi40KSxpPW88PS4wMzkyOD9vLzEyLjkyOmEucG93KChvKy4wNTUpLzEuMDU1LDIuNCksbj10PD0uMDM5Mjg/dC8xMi45MjphLnBvdygodCsuMDU1KS8xLjA1NSwyLjQpLC4yMTI2KnIrLjcxNTIqaSsuMDcyMipufSxzZXRBbHBoYTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fYT1NKGUpLHRoaXMuX3JvdW5kQT1YKDEwMCp0aGlzLl9hKS8xMDAsdGhpc30sdG9Ic3Y6ZnVuY3Rpb24oKXt2YXIgZT11KHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKTtyZXR1cm57aDozNjAqZS5oLHM6ZS5zLHY6ZS52LGE6dGhpcy5fYX19LHRvSHN2U3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9dSh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiksbz1YKDM2MCplLmgpLHQ9WCgxMDAqZS5zKSxyPVgoMTAwKmUudik7cmV0dXJuIDE9PXRoaXMuX2E/XCJoc3YoXCIrbytcIiwgXCIrdCtcIiUsIFwiK3IrXCIlKVwiOlwiaHN2YShcIitvK1wiLCBcIit0K1wiJSwgXCIrcitcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9Ic2w6ZnVuY3Rpb24oKXt2YXIgZT1sKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iKTtyZXR1cm57aDozNjAqZS5oLHM6ZS5zLGw6ZS5sLGE6dGhpcy5fYX19LHRvSHNsU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9bCh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiksbz1YKDM2MCplLmgpLHQ9WCgxMDAqZS5zKSxyPVgoMTAwKmUubCk7cmV0dXJuIDE9PXRoaXMuX2E/XCJoc2woXCIrbytcIiwgXCIrdCtcIiUsIFwiK3IrXCIlKVwiOlwiaHNsYShcIitvK1wiLCBcIit0K1wiJSwgXCIrcitcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9IZXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGgodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsZSl9LHRvSGV4U3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVyblwiI1wiK3RoaXMudG9IZXgoZSl9LHRvSGV4ODpmdW5jdGlvbihlKXtyZXR1cm4gZih0aGlzLl9yLHRoaXMuX2csdGhpcy5fYix0aGlzLl9hLGUpfSx0b0hleDhTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuXCIjXCIrdGhpcy50b0hleDgoZSl9LHRvUmdiOmZ1bmN0aW9uKCl7cmV0dXJue3I6WCh0aGlzLl9yKSxnOlgodGhpcy5fZyksYjpYKHRoaXMuX2IpLGE6dGhpcy5fYX19LHRvUmdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PXRoaXMuX2E/XCJyZ2IoXCIrWCh0aGlzLl9yKStcIiwgXCIrWCh0aGlzLl9nKStcIiwgXCIrWCh0aGlzLl9iKStcIilcIjpcInJnYmEoXCIrWCh0aGlzLl9yKStcIiwgXCIrWCh0aGlzLl9nKStcIiwgXCIrWCh0aGlzLl9iKStcIiwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b1BlcmNlbnRhZ2VSZ2I6ZnVuY3Rpb24oKXtyZXR1cm57cjpYKDEwMCpOKHRoaXMuX3IsMjU1KSkrXCIlXCIsZzpYKDEwMCpOKHRoaXMuX2csMjU1KSkrXCIlXCIsYjpYKDEwMCpOKHRoaXMuX2IsMjU1KSkrXCIlXCIsYTp0aGlzLl9hfX0sdG9QZXJjZW50YWdlUmdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PXRoaXMuX2E/XCJyZ2IoXCIrWCgxMDAqTih0aGlzLl9yLDI1NSkpK1wiJSwgXCIrWCgxMDAqTih0aGlzLl9nLDI1NSkpK1wiJSwgXCIrWCgxMDAqTih0aGlzLl9iLDI1NSkpK1wiJSlcIjpcInJnYmEoXCIrWCgxMDAqTih0aGlzLl9yLDI1NSkpK1wiJSwgXCIrWCgxMDAqTih0aGlzLl9nLDI1NSkpK1wiJSwgXCIrWCgxMDAqTih0aGlzLl9iLDI1NSkpK1wiJSwgXCIrdGhpcy5fcm91bmRBK1wiKVwifSx0b05hbWU6ZnVuY3Rpb24oKXtyZXR1cm4gMD09PXRoaXMuX2E/XCJ0cmFuc3BhcmVudFwiOiEodGhpcy5fYTwxKSYmKEtbaCh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYiwhMCldfHwhMSl9LHRvRmlsdGVyOmZ1bmN0aW9uKGUpe3ZhciBvPVwiI1wiK18odGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsdGhpcy5fYSksdD1vLHI9dGhpcy5fZ3JhZGllbnRUeXBlP1wiR3JhZGllbnRUeXBlID0gMSwgXCI6XCJcIjtpZihlKXt2YXIgYT1pKGUpO3Q9XCIjXCIrXyhhLl9yLGEuX2csYS5fYixhLl9hKX1yZXR1cm5cInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChcIityK1wic3RhcnRDb2xvcnN0cj1cIitvK1wiLGVuZENvbG9yc3RyPVwiK3QrXCIpXCJ9LHRvU3RyaW5nOmZ1bmN0aW9uKGUpe3ZhciBvPSEhZTtlPWV8fHRoaXMuX2Zvcm1hdDt2YXIgdD0hMSxyPXRoaXMuX2E8MSYmdGhpcy5fYT49MCxhPSFvJiZyJiYoXCJoZXhcIj09PWV8fFwiaGV4NlwiPT09ZXx8XCJoZXgzXCI9PT1lfHxcImhleDRcIj09PWV8fFwiaGV4OFwiPT09ZXx8XCJuYW1lXCI9PT1lKTtyZXR1cm4gYT9cIm5hbWVcIj09PWUmJjA9PT10aGlzLl9hP3RoaXMudG9OYW1lKCk6dGhpcy50b1JnYlN0cmluZygpOihcInJnYlwiPT09ZSYmKHQ9dGhpcy50b1JnYlN0cmluZygpKSxcInByZ2JcIj09PWUmJih0PXRoaXMudG9QZXJjZW50YWdlUmdiU3RyaW5nKCkpLFwiaGV4XCIhPT1lJiZcImhleDZcIiE9PWV8fCh0PXRoaXMudG9IZXhTdHJpbmcoKSksXCJoZXgzXCI9PT1lJiYodD10aGlzLnRvSGV4U3RyaW5nKCEwKSksXCJoZXg0XCI9PT1lJiYodD10aGlzLnRvSGV4OFN0cmluZyghMCkpLFwiaGV4OFwiPT09ZSYmKHQ9dGhpcy50b0hleDhTdHJpbmcoKSksXCJuYW1lXCI9PT1lJiYodD10aGlzLnRvTmFtZSgpKSxcImhzbFwiPT09ZSYmKHQ9dGhpcy50b0hzbFN0cmluZygpKSxcImhzdlwiPT09ZSYmKHQ9dGhpcy50b0hzdlN0cmluZygpKSx0fHx0aGlzLnRvSGV4U3RyaW5nKCkpfSxjbG9uZTpmdW5jdGlvbigpe3JldHVybiBpKHRoaXMudG9TdHJpbmcoKSl9LF9hcHBseU1vZGlmaWNhdGlvbjpmdW5jdGlvbihlLG8pe3ZhciB0PWUuYXBwbHkobnVsbCxbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwobykpKTtyZXR1cm4gdGhpcy5fcj10Ll9yLHRoaXMuX2c9dC5fZyx0aGlzLl9iPXQuX2IsdGhpcy5zZXRBbHBoYSh0Ll9hKSx0aGlzfSxsaWdodGVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGIsYXJndW1lbnRzKX0sYnJpZ2h0ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24obSxhcmd1bWVudHMpfSxkYXJrZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oeCxhcmd1bWVudHMpfSxkZXNhdHVyYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHAsYXJndW1lbnRzKX0sc2F0dXJhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24odixhcmd1bWVudHMpfSxncmV5c2NhbGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlNb2RpZmljYXRpb24oZyxhcmd1bWVudHMpfSxzcGluOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHcsYXJndW1lbnRzKX0sX2FwcGx5Q29tYmluYXRpb246ZnVuY3Rpb24oZSxvKXtyZXR1cm4gZS5hcHBseShudWxsLFt0aGlzXS5jb25jYXQoW10uc2xpY2UuY2FsbChvKSkpfSxhbmFsb2dvdXM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihBLGFyZ3VtZW50cyl9LGNvbXBsZW1lbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihDLGFyZ3VtZW50cyl9LG1vbm9jaHJvbWF0aWM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihSLGFyZ3VtZW50cyl9LHNwbGl0Y29tcGxlbWVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKEYsYXJndW1lbnRzKX0sdHJpYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbih5LGFyZ3VtZW50cyl9LHRldHJhZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseUNvbWJpbmF0aW9uKGssYXJndW1lbnRzKX19LGkuZnJvbVJhdGlvPWZ1bmN0aW9uKGUsbyl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe3ZhciB0PXt9O2Zvcih2YXIgciBpbiBlKWUuaGFzT3duUHJvcGVydHkocikmJihcImFcIj09PXI/dFtyXT1lW3JdOnRbcl09TyhlW3JdKSk7ZT10fXJldHVybiBpKGUsbyl9LGkuZXF1YWxzPWZ1bmN0aW9uKGUsbyl7cmV0dXJuISghZXx8IW8pJiZpKGUpLnRvUmdiU3RyaW5nKCk9PWkobykudG9SZ2JTdHJpbmcoKX0saS5yYW5kb209ZnVuY3Rpb24oKXtyZXR1cm4gaS5mcm9tUmF0aW8oe3I6VygpLGc6VygpLGI6VygpfSl9LGkubWl4PWZ1bmN0aW9uKGUsbyx0KXt0PTA9PT10PzA6dHx8NTA7dmFyIHI9aShlKS50b1JnYigpLGE9aShvKS50b1JnYigpLG49dC8xMDAscz17cjooYS5yLXIucikqbityLnIsZzooYS5nLXIuZykqbityLmcsYjooYS5iLXIuYikqbityLmIsYTooYS5hLXIuYSkqbityLmF9O3JldHVybiBpKHMpfSxpLnJlYWRhYmlsaXR5PWZ1bmN0aW9uKGUsbyl7dmFyIHQ9aShlKSxyPWkobyk7cmV0dXJuKGEubWF4KHQuZ2V0THVtaW5hbmNlKCksci5nZXRMdW1pbmFuY2UoKSkrLjA1KS8oYS5taW4odC5nZXRMdW1pbmFuY2UoKSxyLmdldEx1bWluYW5jZSgpKSsuMDUpfSxpLmlzUmVhZGFibGU9ZnVuY3Rpb24oZSxvLHQpe3ZhciByLGEsbj1pLnJlYWRhYmlsaXR5KGUsbyk7c3dpdGNoKGE9ITEscj1UKHQpLHIubGV2ZWwrci5zaXplKXtjYXNlXCJBQXNtYWxsXCI6Y2FzZVwiQUFBbGFyZ2VcIjphPW4+PTQuNTticmVhaztjYXNlXCJBQWxhcmdlXCI6YT1uPj0zO2JyZWFrO2Nhc2VcIkFBQXNtYWxsXCI6YT1uPj03fXJldHVybiBhfSxpLm1vc3RSZWFkYWJsZT1mdW5jdGlvbihlLG8sdCl7dmFyIHIsYSxuLHMsbD1udWxsLGM9MDt0PXR8fHt9LGE9dC5pbmNsdWRlRmFsbGJhY2tDb2xvcnMsbj10LmxldmVsLHM9dC5zaXplO2Zvcih2YXIgdT0wO3U8by5sZW5ndGg7dSsrKXI9aS5yZWFkYWJpbGl0eShlLG9bdV0pLHI+YyYmKGM9cixsPWkob1t1XSkpO3JldHVybiBpLmlzUmVhZGFibGUoZSxsLHtsZXZlbDpuLHNpemU6c30pfHwhYT9sOih0LmluY2x1ZGVGYWxsYmFja0NvbG9ycz0hMSxpLm1vc3RSZWFkYWJsZShlLFtcIiNmZmZcIixcIiMwMDBcIl0sdCkpfTt2YXIgRz1pLm5hbWVzPXthbGljZWJsdWU6XCJmMGY4ZmZcIixhbnRpcXVld2hpdGU6XCJmYWViZDdcIixhcXVhOlwiMGZmXCIsYXF1YW1hcmluZTpcIjdmZmZkNFwiLGF6dXJlOlwiZjBmZmZmXCIsYmVpZ2U6XCJmNWY1ZGNcIixiaXNxdWU6XCJmZmU0YzRcIixibGFjazpcIjAwMFwiLGJsYW5jaGVkYWxtb25kOlwiZmZlYmNkXCIsYmx1ZTpcIjAwZlwiLGJsdWV2aW9sZXQ6XCI4YTJiZTJcIixicm93bjpcImE1MmEyYVwiLGJ1cmx5d29vZDpcImRlYjg4N1wiLGJ1cm50c2llbm5hOlwiZWE3ZTVkXCIsY2FkZXRibHVlOlwiNWY5ZWEwXCIsY2hhcnRyZXVzZTpcIjdmZmYwMFwiLGNob2NvbGF0ZTpcImQyNjkxZVwiLGNvcmFsOlwiZmY3ZjUwXCIsY29ybmZsb3dlcmJsdWU6XCI2NDk1ZWRcIixjb3Juc2lsazpcImZmZjhkY1wiLGNyaW1zb246XCJkYzE0M2NcIixjeWFuOlwiMGZmXCIsZGFya2JsdWU6XCIwMDAwOGJcIixkYXJrY3lhbjpcIjAwOGI4YlwiLGRhcmtnb2xkZW5yb2Q6XCJiODg2MGJcIixkYXJrZ3JheTpcImE5YTlhOVwiLGRhcmtncmVlbjpcIjAwNjQwMFwiLGRhcmtncmV5OlwiYTlhOWE5XCIsZGFya2toYWtpOlwiYmRiNzZiXCIsZGFya21hZ2VudGE6XCI4YjAwOGJcIixkYXJrb2xpdmVncmVlbjpcIjU1NmIyZlwiLGRhcmtvcmFuZ2U6XCJmZjhjMDBcIixkYXJrb3JjaGlkOlwiOTkzMmNjXCIsZGFya3JlZDpcIjhiMDAwMFwiLGRhcmtzYWxtb246XCJlOTk2N2FcIixkYXJrc2VhZ3JlZW46XCI4ZmJjOGZcIixkYXJrc2xhdGVibHVlOlwiNDgzZDhiXCIsZGFya3NsYXRlZ3JheTpcIjJmNGY0ZlwiLGRhcmtzbGF0ZWdyZXk6XCIyZjRmNGZcIixkYXJrdHVycXVvaXNlOlwiMDBjZWQxXCIsZGFya3Zpb2xldDpcIjk0MDBkM1wiLGRlZXBwaW5rOlwiZmYxNDkzXCIsZGVlcHNreWJsdWU6XCIwMGJmZmZcIixkaW1ncmF5OlwiNjk2OTY5XCIsZGltZ3JleTpcIjY5Njk2OVwiLGRvZGdlcmJsdWU6XCIxZTkwZmZcIixmaXJlYnJpY2s6XCJiMjIyMjJcIixmbG9yYWx3aGl0ZTpcImZmZmFmMFwiLGZvcmVzdGdyZWVuOlwiMjI4YjIyXCIsZnVjaHNpYTpcImYwZlwiLGdhaW5zYm9ybzpcImRjZGNkY1wiLGdob3N0d2hpdGU6XCJmOGY4ZmZcIixnb2xkOlwiZmZkNzAwXCIsZ29sZGVucm9kOlwiZGFhNTIwXCIsZ3JheTpcIjgwODA4MFwiLGdyZWVuOlwiMDA4MDAwXCIsZ3JlZW55ZWxsb3c6XCJhZGZmMmZcIixncmV5OlwiODA4MDgwXCIsaG9uZXlkZXc6XCJmMGZmZjBcIixob3RwaW5rOlwiZmY2OWI0XCIsaW5kaWFucmVkOlwiY2Q1YzVjXCIsaW5kaWdvOlwiNGIwMDgyXCIsaXZvcnk6XCJmZmZmZjBcIixraGFraTpcImYwZTY4Y1wiLGxhdmVuZGVyOlwiZTZlNmZhXCIsbGF2ZW5kZXJibHVzaDpcImZmZjBmNVwiLGxhd25ncmVlbjpcIjdjZmMwMFwiLGxlbW9uY2hpZmZvbjpcImZmZmFjZFwiLGxpZ2h0Ymx1ZTpcImFkZDhlNlwiLGxpZ2h0Y29yYWw6XCJmMDgwODBcIixsaWdodGN5YW46XCJlMGZmZmZcIixsaWdodGdvbGRlbnJvZHllbGxvdzpcImZhZmFkMlwiLGxpZ2h0Z3JheTpcImQzZDNkM1wiLGxpZ2h0Z3JlZW46XCI5MGVlOTBcIixsaWdodGdyZXk6XCJkM2QzZDNcIixsaWdodHBpbms6XCJmZmI2YzFcIixsaWdodHNhbG1vbjpcImZmYTA3YVwiLGxpZ2h0c2VhZ3JlZW46XCIyMGIyYWFcIixsaWdodHNreWJsdWU6XCI4N2NlZmFcIixsaWdodHNsYXRlZ3JheTpcIjc4OVwiLGxpZ2h0c2xhdGVncmV5OlwiNzg5XCIsbGlnaHRzdGVlbGJsdWU6XCJiMGM0ZGVcIixsaWdodHllbGxvdzpcImZmZmZlMFwiLGxpbWU6XCIwZjBcIixsaW1lZ3JlZW46XCIzMmNkMzJcIixsaW5lbjpcImZhZjBlNlwiLG1hZ2VudGE6XCJmMGZcIixtYXJvb246XCI4MDAwMDBcIixtZWRpdW1hcXVhbWFyaW5lOlwiNjZjZGFhXCIsbWVkaXVtYmx1ZTpcIjAwMDBjZFwiLG1lZGl1bW9yY2hpZDpcImJhNTVkM1wiLG1lZGl1bXB1cnBsZTpcIjkzNzBkYlwiLG1lZGl1bXNlYWdyZWVuOlwiM2NiMzcxXCIsbWVkaXVtc2xhdGVibHVlOlwiN2I2OGVlXCIsbWVkaXVtc3ByaW5nZ3JlZW46XCIwMGZhOWFcIixtZWRpdW10dXJxdW9pc2U6XCI0OGQxY2NcIixtZWRpdW12aW9sZXRyZWQ6XCJjNzE1ODVcIixtaWRuaWdodGJsdWU6XCIxOTE5NzBcIixtaW50Y3JlYW06XCJmNWZmZmFcIixtaXN0eXJvc2U6XCJmZmU0ZTFcIixtb2NjYXNpbjpcImZmZTRiNVwiLG5hdmFqb3doaXRlOlwiZmZkZWFkXCIsbmF2eTpcIjAwMDA4MFwiLG9sZGxhY2U6XCJmZGY1ZTZcIixvbGl2ZTpcIjgwODAwMFwiLG9saXZlZHJhYjpcIjZiOGUyM1wiLG9yYW5nZTpcImZmYTUwMFwiLG9yYW5nZXJlZDpcImZmNDUwMFwiLG9yY2hpZDpcImRhNzBkNlwiLHBhbGVnb2xkZW5yb2Q6XCJlZWU4YWFcIixwYWxlZ3JlZW46XCI5OGZiOThcIixwYWxldHVycXVvaXNlOlwiYWZlZWVlXCIscGFsZXZpb2xldHJlZDpcImRiNzA5M1wiLHBhcGF5YXdoaXA6XCJmZmVmZDVcIixwZWFjaHB1ZmY6XCJmZmRhYjlcIixwZXJ1OlwiY2Q4NTNmXCIscGluazpcImZmYzBjYlwiLHBsdW06XCJkZGEwZGRcIixwb3dkZXJibHVlOlwiYjBlMGU2XCIscHVycGxlOlwiODAwMDgwXCIscmViZWNjYXB1cnBsZTpcIjY2MzM5OVwiLHJlZDpcImYwMFwiLHJvc3licm93bjpcImJjOGY4ZlwiLHJveWFsYmx1ZTpcIjQxNjllMVwiLHNhZGRsZWJyb3duOlwiOGI0NTEzXCIsc2FsbW9uOlwiZmE4MDcyXCIsc2FuZHlicm93bjpcImY0YTQ2MFwiLHNlYWdyZWVuOlwiMmU4YjU3XCIsc2Vhc2hlbGw6XCJmZmY1ZWVcIixzaWVubmE6XCJhMDUyMmRcIixzaWx2ZXI6XCJjMGMwYzBcIixza3libHVlOlwiODdjZWViXCIsc2xhdGVibHVlOlwiNmE1YWNkXCIsc2xhdGVncmF5OlwiNzA4MDkwXCIsc2xhdGVncmV5OlwiNzA4MDkwXCIsc25vdzpcImZmZmFmYVwiLHNwcmluZ2dyZWVuOlwiMDBmZjdmXCIsc3RlZWxibHVlOlwiNDY4MmI0XCIsdGFuOlwiZDJiNDhjXCIsdGVhbDpcIjAwODA4MFwiLHRoaXN0bGU6XCJkOGJmZDhcIix0b21hdG86XCJmZjYzNDdcIix0dXJxdW9pc2U6XCI0MGUwZDBcIix2aW9sZXQ6XCJlZTgyZWVcIix3aGVhdDpcImY1ZGViM1wiLHdoaXRlOlwiZmZmXCIsd2hpdGVzbW9rZTpcImY1ZjVmNVwiLHllbGxvdzpcImZmMFwiLHllbGxvd2dyZWVuOlwiOWFjZDMyXCJ9LEs9aS5oZXhOYW1lcz1TKEcpLFo9ZnVuY3Rpb24oKXt2YXIgZT1cIlstXFxcXCtdP1xcXFxkKyU/XCIsbz1cIlstXFxcXCtdP1xcXFxkKlxcXFwuXFxcXGQrJT9cIix0PVwiKD86XCIrbytcIil8KD86XCIrZStcIilcIixyPVwiW1xcXFxzfFxcXFwoXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVxcXFxzKlxcXFwpP1wiLGE9XCJbXFxcXHN8XFxcXChdKyhcIit0K1wiKVssfFxcXFxzXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVxcXFxzKlxcXFwpP1wiO3JldHVybntDU1NfVU5JVDpuZXcgUmVnRXhwKHQpLHJnYjpuZXcgUmVnRXhwKFwicmdiXCIrcikscmdiYTpuZXcgUmVnRXhwKFwicmdiYVwiK2EpLGhzbDpuZXcgUmVnRXhwKFwiaHNsXCIrciksaHNsYTpuZXcgUmVnRXhwKFwiaHNsYVwiK2EpLGhzdjpuZXcgUmVnRXhwKFwiaHN2XCIrciksaHN2YTpuZXcgUmVnRXhwKFwiaHN2YVwiK2EpLGhleDM6L14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLGhleDY6L14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLGhleDQ6L14jPyhbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxoZXg4Oi9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC99fSgpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBlJiZlLmV4cG9ydHM/ZS5leHBvcnRzPWk6KHI9ZnVuY3Rpb24oKXtyZXR1cm4gaX0uY2FsbChvLHQsbyxlKSwhKHZvaWQgMCE9PXImJihlLmV4cG9ydHM9cikpKX0oTWF0aCl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjQpLHI9dCg5KTt2YXIgaT10KDUyKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg1NSkscj10KDEwKTt2YXIgaT10KDQzKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg1OSkscj10KDExKTt2YXIgaT10KDQ3KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2Mikscj10KDEyKTt2YXIgaT10KDUwKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2Mykscj10KDEzKTt2YXIgaT10KDUxKTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2MCkscj10KDE0KTt2YXIgaT10KDQ4KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSxvLHQpe3ZhciByLGE7dCg2MSkscj10KDE1KTt2YXIgaT10KDQ5KTthPXI9cnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXXx8KGE9cj1yW1wiZGVmYXVsdFwiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YS5vcHRpb25zKSxhLnJlbmRlcj1pLnJlbmRlcixhLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyxlLmV4cG9ydHM9cn0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0XCJ9LFtfYyhcInVsXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0X19jb2xvcnNcIn0sX2woZGVmYXVsdENvbG9ycyxmdW5jdGlvbihlKXtyZXR1cm4gX2MoXCJsaVwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3ItaXRlbVwiLFwiY2xhc3NcIjp7XCJ2dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yLWl0ZW0tLXdoaXRlXCI6XCIjRkZGRkZGXCI9PT1lfSxzdHlsZTp7YmFja2dyb3VuZDplfSxvbjp7Y2xpY2s6ZnVuY3Rpb24obyl7aGFuZGxlckNsaWNrKGUpfX19LFtfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZT09PXBpY2ssZXhwcmVzc2lvbjpcImMgPT09IHBpY2tcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jb21wYWN0X19kb3RcIn0pXSl9KSksX3YoXCIgXCIpXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRcIn0sW19jKFwiaW5wdXRcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6dmFsLGV4cHJlc3Npb246XCJ2YWxcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXRcIixkb21Qcm9wczp7dmFsdWU6X3ModmFsKX0sb246e2tleWRvd246aGFuZGxlS2V5RG93bixpbnB1dDpbZnVuY3Rpb24oZSl7ZS50YXJnZXQuY29tcG9zaW5nfHwodmFsPWUudGFyZ2V0LnZhbHVlKX0sdXBkYXRlXX19KSxfdihcIiBcIiksX2MoXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWxcIn0sW192KF9zKGxhYmVsKSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7XCJjbGFzc1wiOltcInZ1ZS1jb2xvcl9fYy1odWVcIixkaXJlY3Rpb25DbGFzc119LFtfYyhcImRpdlwiLHtyZWY6XCJjb250YWluZXJcIixzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1odWVfX2NvbnRhaW5lclwiLG9uOnttb3VzZWRvd246aGFuZGxlTW91c2VEb3duLHRvdWNobW92ZTpoYW5kbGVDaGFuZ2UsdG91Y2hzdGFydDpoYW5kbGVDaGFuZ2V9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtaHVlX19wb2ludGVyXCIsc3R5bGU6e3RvcDpwb2ludGVyVG9wLGxlZnQ6cG9pbnRlckxlZnR9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtaHVlX19waWNrZXJcIn0pXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7cmVmOlwiY29udGFpbmVyXCIsc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NhdHVyYXRpb25cIixzdHlsZTp7YmFja2dyb3VuZDpiZ0NvbG9yfSxvbjp7bW91c2Vkb3duOmhhbmRsZU1vdXNlRG93bn19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0td2hpdGVcIn0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tYmxhY2tcIn0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tcG9pbnRlclwiLHN0eWxlOnt0b3A6cG9pbnRlclRvcCxsZWZ0OnBvaW50ZXJMZWZ0fX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zYXR1cmF0aW9uLS1jaXJjbGVcIn0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaGV4LGV4cHJlc3Npb246XCJjb2xvcnMuaGV4XCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX2hleFwiLHN0eWxlOntib3JkZXJDb2xvcjpjb2xvcnMuaGV4fSxhdHRyczp7bGFiZWw6XCJoZXhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oZXh9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oZXg9ZX19fSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbF9fc3BsaXRcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbF9fdGhpcmRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEucixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuclwifV0sYXR0cnM6e2xhYmVsOlwiclwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEucn0sb246e1wib24tY2hhbmdlXCI6b25DaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3RoaXJkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX21hdGVyaWFsX190aGlyZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5iLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5iXCJ9XSxhdHRyczp7bGFiZWw6XCJiXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5ifSxvbjp7XCJvbi1jaGFuZ2VcIjpvbkNoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5iPWV9fX0pXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlclwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlcl9faHVlLXdhcnBcIn0sW19jKFwiaHVlXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpodWVDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaGVzXCJ9LF9sKHN3YXRjaGVzLGZ1bmN0aW9uKGUsbyl7cmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaFwiLGF0dHJzOntcImRhdGEtaW5kZXhcIjpvfSxvbjp7Y2xpY2s6ZnVuY3Rpb24odCl7aGFuZGxlU3dDbGljayhvLGUpfX19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2VyXCIsXCJjbGFzc1wiOntcInZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2VyLS1hY3RpdmVcIjplPT1hY3RpdmVPZmZzZXR9LHN0eWxlOntiYWNrZ3JvdW5kOlwiaHNsKFwiK2NvbG9ycy5oc2wuaCtcIiwgNTAlLCBcIisxMDAqZStcIiUpXCJ9fSldKX0pKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzXCIsYXR0cnM6e1wiZGF0YS1waWNrXCI6cGlja319LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2JveFwifSxfbChkZWZhdWx0Q29sb3JzLGZ1bmN0aW9uKGUpe3JldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2NvbG9yLWdyb3VwXCJ9LF9sKGUsZnVuY3Rpb24oZSl7cmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc19fY29sb3ItaXRcIixzdHlsZTp7YmFja2dyb3VuZDplfSxhdHRyczp7XCJkYXRhLWNvbG9yXCI6ZX0sb246e2NsaWNrOmZ1bmN0aW9uKG8pe2hhbmRsZXJDbGljayhlKX19fSxbX2MoXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmU9PXBpY2ssZXhwcmVzc2lvbjpcImMgPT0gcGlja1wifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzX19waWNrXCJ9LFtfYyhcInN2Z1wiLHtzdGF0aWNTdHlsZTp7d2lkdGg6XCIyNHB4XCIsaGVpZ2h0OlwiMjRweFwifSxhdHRyczp7dmlld0JveDpcIjAgMCAyNCAyNFwifX0sW19jKFwicGF0aFwiLHthdHRyczp7ZDpcIk0yMSw3TDksMTlMMy41LDEzLjVMNC45MSwxMi4wOUw5LDE2LjE3TDE5LjU5LDUuNTlMMjEsN1pcIn19KV0pXSldKX0pKX0pKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19oZWFkXCJ9LFtfdihfcyhoZWFkKSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2JvZHlcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19zYXR1cmF0aW9uLXdyYXBcIn0sW19jKFwic2F0dXJhdGlvblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtd3JhcFwifSxbX2MoXCJodWVcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGF0dHJzOntkaXJlY3Rpb246XCJ2ZXJ0aWNhbFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyXCJ9LFtfYyhcImlcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1sZWZ0XCJ9KSxfYyhcImlcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1yaWdodFwifSldKV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19jb250cm9sc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX2xhYmVsXCJ9LFtfdihcIm5ld1wiKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3N3YXRjaGVzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3ByLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6Y29sb3JzLmhleH19KSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19wci1jb2xvclwiLHN0eWxlOntiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcn19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX2xhYmVsXCJ9LFtfdihcImN1cnJlbnRcIildKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWN0aW9uc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2FjLWJ0blwiLG9uOntjbGljazpoYW5kbGVBY2NlcHR9fSxbX3YoXCJPS1wiKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWMtYnRuXCIsb246e2NsaWNrOmhhbmRsZUNhbmNlbH19LFtfdihcIkNhbmNlbFwiKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wuaCxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5oXCJ9XSxhdHRyczp7bGFiZWw6XCJoXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLmh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wuaD1lfX19KSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaHNsLnMsZXhwcmVzc2lvbjpcImNvbG9ycy5oc2wuc1wifV0sYXR0cnM6e2xhYmVsOlwic1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhzbC5zfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaHNsLnM9ZX19fSksX3YoXCIgXCIpLF9jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5sLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLmxcIn1dLGF0dHJzOntsYWJlbDpcInZcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wubH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5sPWV9fX0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19kaXZpZGVyXCJ9KSxfdihcIiBcIiksX3YoXCIgXCIpLF9jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEucixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuclwifV0sYXR0cnM6e2xhYmVsOlwiclwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEucn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5nLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5nXCJ9XSxhdHRyczp7bGFiZWw6XCJnXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5nfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5nPWV9fX0pLF92KFwiIFwiKSxfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmJcIn1dLGF0dHJzOntsYWJlbDpcImJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmJ9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmI9ZX19fSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19maWVsZHNfX2RpdmlkZXJcIn0pLF92KFwiIFwiKSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaGV4LGV4cHJlc3Npb246XCJjb2xvcnMuaGV4XCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19oZXhcIixhdHRyczp7bGFiZWw6XCIjXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaGV4fSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaGV4PWV9fX0pXSldKV0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX3NhdHVyYXRpb24td3JhcFwifSxbX2MoXCJzYXR1cmF0aW9uXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fY29udHJvbHNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX3NsaWRlcnNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2h1ZS13cmFwXCJ9LFtfYyhcImh1ZVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2FscGhhLXdyYXBcIn0sW19jKFwiYWxwaGFcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2NvbG9yLXdyYXBcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2FjdGl2ZS1jb2xvclwiLHN0eWxlOntiYWNrZ3JvdW5kOmFjdGl2ZUNvbG9yfX0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGRcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1kb3VibGVcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhleCxleHByZXNzaW9uOlwiY29sb3JzLmhleFwifV0sYXR0cnM6e2xhYmVsOlwiaGV4XCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaGV4XG59LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oZXg9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLXNpbmdsZVwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5yLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5yXCJ9XSxhdHRyczp7bGFiZWw6XCJyXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5yfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5yPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuZyxleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuZ1wifV0sYXR0cnM6e2xhYmVsOlwiZ1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuZ30sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuZz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tc2luZ2xlXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmJcIn1dLGF0dHJzOntsYWJlbDpcImJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmJ9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmI9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLXNpbmdsZVwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuYSxleHByZXNzaW9uOlwiY29sb3JzLmFcIn1dLGF0dHJzOntsYWJlbDpcImFcIixcImFycm93LW9mZnNldFwiOi4wMSxtYXg6MX0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5hfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuYT1lfX19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX3ByZXNldHNcIn0sX2wocHJlc2V0Q29sb3JzLGZ1bmN0aW9uKGUpe3JldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19wcmVzZXRzLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6ZX0sb246e2NsaWNrOmZ1bmN0aW9uKG8pe2hhbmRsZVByZXNldChlKX19fSl9KSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX3NhdHVyYXRpb24td3JhcFwifSxbX2MoXCJzYXR1cmF0aW9uXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fY2hyb21lLWJvZHlcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2NvbnRyb2xzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19jb2xvci13cmFwXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19hY3RpdmUtY29sb3JcIixzdHlsZTp7YmFja2dyb3VuZDphY3RpdmVDb2xvcn19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19odWUtd3JhcFwifSxbX2MoXCJodWVcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19hbHBoYS13cmFwXCJ9LFtfYyhcImFscGhhXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkcy13cmFwXCJ9LFtfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6MD09PWZpZWxkc0luZGV4LGV4cHJlc3Npb246XCJmaWVsZHNJbmRleCA9PT0gMFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaGV4LGV4cHJlc3Npb246XCJjb2xvcnMuaGV4XCJ9XSxhdHRyczp7bGFiZWw6XCJoZXhcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oZXh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oZXg9ZX19fSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6MT09PWZpZWxkc0luZGV4LGV4cHJlc3Npb246XCJmaWVsZHNJbmRleCA9PT0gMVwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5yLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5yXCJ9XSxhdHRyczp7bGFiZWw6XCJyXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5yfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5yPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuYixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuYlwifV0sYXR0cnM6e2xhYmVsOlwiYlwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuYn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuYj1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuYSxleHByZXNzaW9uOlwiY29sb3JzLmFcIn1dLGF0dHJzOntsYWJlbDpcImFcIixcImFycm93LW9mZnNldFwiOi4wMSxtYXg6MX0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5hfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuYT1lfX19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZToyPT09ZmllbGRzSW5kZXgsZXhwcmVzc2lvbjpcImZpZWxkc0luZGV4ID09PSAyXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wuaCxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5oXCJ9XSxhdHRyczp7bGFiZWw6XCJoXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLmh9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wuaD1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaHNsLnMsZXhwcmVzc2lvbjpcImNvbG9ycy5oc2wuc1wifV0sYXR0cnM6e2xhYmVsOlwic1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhzbC5zfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaHNsLnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5sLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLmxcIn1dLGF0dHJzOntsYWJlbDpcImxcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wubH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5sPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5hLGV4cHJlc3Npb246XCJjb2xvcnMuYVwifV0sYXR0cnM6e2xhYmVsOlwiYVwiLFwiYXJyb3ctb2Zmc2V0XCI6LjAxLG1heDoxfSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmF9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5hPWV9fX0pXSldKSxfdihcIiBcIiksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX3RvZ2dsZS1idG5cIixvbjp7Y2xpY2s6dG9nZ2xlVmlld3N9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9faWNvblwifSxbX2MoXCJzdmdcIix7c3RhdGljU3R5bGU6e3dpZHRoOlwiMjRweFwiLGhlaWdodDpcIjI0cHhcIn0sYXR0cnM6e3ZpZXdCb3g6XCIwIDAgMjQgMjRcIn0sb246e21vdXNlb3ZlcjpzaG93SGlnaGxpZ2h0LG1vdXNlZW50ZXI6c2hvd0hpZ2hsaWdodCxtb3VzZW91dDpoaWRlSGlnaGxpZ2h0fX0sW19jKFwicGF0aFwiLHthdHRyczp7ZmlsbDpcIiMzMzNcIixkOlwiTTEyLDE4LjE3TDguODMsMTVMNy40MiwxNi40MUwxMiwyMUwxNi41OSwxNi40MUwxNS4xNywxNU0xMiw1LjgzTDE1LjE3LDlMMTYuNTgsNy41OUwxMiwzTDcuNDEsNy41OUw4LjgzLDlMMTIsNS44M1pcIn19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTpoaWdobGlnaHQsZXhwcmVzc2lvbjpcImhpZ2hsaWdodFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9faWNvbi1oaWdobGlnaHRcIn0pXSksX3YoXCIgXCIpXSldKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhX19jaGVja2JvYXJkLXdyYXBcIn0sW19jKFwiY2hlY2tib2FyZFwiKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fZ3JhZGllbnRcIixzdHlsZTp7YmFja2dyb3VuZDpncmFkaWVudENvbG9yfX0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtyZWY6XCJjb250YWluZXJcIixzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fY29udGFpbmVyXCIsb246e21vdXNlZG93bjpoYW5kbGVNb3VzZURvd24sdG91Y2htb3ZlOmhhbmRsZUNoYW5nZSx0b3VjaHN0YXJ0OmhhbmRsZUNoYW5nZX19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fcG9pbnRlclwiLHN0eWxlOntsZWZ0OjEwMCpjb2xvcnMuYStcIiVcIn19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fcGlja2VyXCJ9KV0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWNoZWNrZXJib2FyZFwiLHN0eWxlOntiYWNrZ3JvdW5kOmJnU3R5bGV9fSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDIxKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjIpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyMyk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI0KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjUpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyNik7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI3KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjgpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyOSk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDMwKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMzEpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgzMik7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWNvbG9yL2Rpc3QvdnVlLWNvbG9yLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8dmlkZW8gcmVmPVwicGxheWVyXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwidmlkZW8tanMgdmpzLWRlZmF1bHQtc2tpblwiXG4gICAgICAgICAgICAgICBjb250cm9scyBwcmVsb2FkPVwiYXV0b1wiXG4gICAgICAgICAgICAgICA6cG9zdGVyPVwicG9zdGVyXCJcbiAgICAgICAgICAgICAgIDpkYXRhLXNldHVwPVwic3RyU291cmNlXCJcbiAgICAgICAgPjwvdmlkZW8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAgICN2aWRlby1jYW52YXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBsYXllcjoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3Rlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RyU291cmNlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc291cmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB0aGlzLmluaXRQbGF5ZXIodGhpcy5zb3VyY2UpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBhcGkoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0UGxheWVyKHNvdXJjZSl7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuc291cmNlKTtcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2Uuc291cmNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgdGVjaE9yZGVyOiBbJ3lvdXR1YmUnXSxcbiAgICAgICAgICAgICAgICAgICAgcGxheWJhY2tSYXRlczogWzAuMjUsIDAuNSwgMSwgMS41LCAyXSxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVByb2dyZXNzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiTG9vcFBsdWdpbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BJZkJlZm9yZVN0YXJ0OiBmYWxzZSwgLy9hbGxvdyB2aWRlbyB0byBwbGF5IG5vcm1hbGx5IGJlZm9yZSB0aGUgbG9vcCBzZWN0aW9uPyBkZWZhdWx0cyB0byB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vb3BJZkFmdGVyRW5kOiB0cnVlLCAvLyBkZWZhdWx0cyB0byB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VBZnRlckxvb3Bpbmc6IGZhbHNlLCAgICAgICAvL2lmIHRydWUsIGFmdGVyIGxvb3BpbmcgdmlkZW8gd2lsbCBwYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZUJlZm9yZUxvb3Bpbmc6IGZhbHNlLCAgICAgIC8vaWYgdHJ1ZSwgYmVmb3JlIGxvb3BpbmcgdmlkZW8gd2lsbCBwYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25zOiBmYWxzZSwgIC8vZGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnBsdWdpbnMuZG5jb2Zmc2V0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IHRoaXMub2Zmc2V0LnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0OiB0aGlzLm9mZnNldC5lbmRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy4kcmVmcy5wbGF5ZXIsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFBsYXllcicsIHRoaXMucGxheWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiBkdXJhdGlvblNldHRlcihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLnBsYXllci5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldER1cmF0aW9uJywgc3RhdGUucGxheWVyLmluc3RhbmNlLmR1cmF0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5wbGF5ZXIuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wbGF5ZXIuaW5zdGFuY2Uub2ZmKCd0aW1ldXBkYXRlJywgZHVyYXRpb25TZXR0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnBsYXllci5pbnN0YW5jZS5vZmYoJ3RpbWV1cGRhdGUnLCBkdXJhdGlvblNldHRlcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXliYWNrUmF0ZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Q3VycmVudFRpbWUnLCB0aGlzLnBsYXllci5jdXJyZW50VGltZSgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBsYXllci52dWU/MzkyNjU3YTAiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBpZD1cImluc3BlY3RvckJveFwiIGNsYXNzPVwiYm94IGJveC1zb2xpZCBjb2xsYXBzZWQtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICA8IS0tIHRvb2xzIGJveCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0IGJveC10b29sc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIGlkPVwiaW5zcGVjdG9yVG9vZ2xlclwiIHYtb246Y2xpY2s9XCJ0b29nbGVPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAvLiB0b29scyAtLT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5pbnNwZWN0b3InKX19XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGluc3BlY3Rvci1pbmZvXCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtbGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCInYmFja2dyb3VuZDonK2JhY2tncm91bmQrJzsgaGVpZ2h0OjIwcHg7IHdpZHRoOjIwcHg7bWFyZ2luLXRvcDogMXB4OyBtYXJnaW4tcmlnaHQ6NXB4J1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm8tLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1zdWNjZXNzXCI+e3tzdGFydH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtZGFuZ2VyXCI+e3tlbmR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbGJveC1jb250cm9scyBjb250cm9sLWluc3BlY3Rvci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiB2LW9uOmNsaWNrPVwiY3JlYXRlQWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJyZWNvcmRpbmdUb3VjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX2FjdGlvbicpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFcIiA6Y2xhc3M9XCJ7J2ZhLXBsYXknOiFwbGF5aW5nLCdmYS1wYXVzZSB0ZXh0LWRhbmdlcic6cGxheWluZ31cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGxheWluZz8kdCgnc2NvdXRpbmdzLnBhdXNlJyk6JHQoJ3Njb3V0aW5ncy5wbGF5Jyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cImJhY2t3YXJkKDEwKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtZmFzdC1iYWNrd2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJiYWNrd2FyZCg1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtYmFja3dhcmRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJmb3J3YXJkKDUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1mb3J3YXJkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwiZm9yd2FyZCgxMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWZhc3QtZm9yd2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInBsYXliYWNrUmF0ZSgwLjI1KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjI1IHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheWJhY2tSYXRlKDAuNSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41IHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheWJhY2tSYXRlKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMS41KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdGhsZXRlLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBuby1wYWRkaW5nLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRobGV0ZS1tZW51LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmxlZnRfYWN0aW9ucycpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5yaWdodF9hY3Rpb25zJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJ0b3VjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgbm8tcGFkZGluZy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhZ3MgOnRhZ3M9XCJ0YWdzTGVmdFwiIDpzZWxlY3RlZD1cImFjdGlvbi5sZWZ0VGFnc1wiIHR5cGU9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOnRhZy1kZWxldGVkPVwidGFnRGVsZXRlZExlZnRcIiB2LW9uOnRhZy1zZWxlY3RlZD1cInRhZ1NlbGVjdGVkTGVmdFwiPjwvdGFncz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhZ3MgOnRhZ3M9XCJ0YWdzUmlnaHRcIiA6c2VsZWN0ZWQ9XCJhY3Rpb24ucmlnaHRUYWdzXCIgdHlwZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOnRhZy1kZWxldGVkPVwidGFnRGVsZXRlZFJpZ2h0XCIgdi1vbjp0YWctc2VsZWN0ZWQ9XCJ0YWdTZWxlY3RlZFJpZ2h0XCI+PC90YWdzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBpZD0naW5zcGVjdG9yJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XG4gICAgLmluc3BlY3Rvci1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIC5pbnNwZWN0b3ItaW5mby0tdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYXRobGV0ZS1tZW51IHtcblxuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmF0aGxldGUtbWVudS10aXRsZSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXRobGV0ZS1tZW51LWxlZnQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNlMGU5O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXRobGV0ZS1tZW51LXJpZ2h0IHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtkaXNwYXRjaCwgZ2V0U3RhdGUsIHN1YnNjcmliZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQgaW5zcGVjdG9yU2tldGNoIGZyb20gJy4uL3NrZXRjaC9pbnNwZWN0b3JTa2V0Y2gnXG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuICAgIGltcG9ydCBBY3Rpb24gZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24nXG4gICAgaW1wb3J0IHRhZ3MgZnJvbSAnLi4vdGFncy90YWdzLnZ1ZSc7XG4gICAgaW1wb3J0IGNvbW1vblNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvY29tbW9uL2NvbW1vblNlcnZpY2UnXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IG51bGwsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW10sXG4gICAgICAgICAgICAgICAgcmVjb3JkaW5nVG91Y2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0VGFnczogW10sXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0VGFnczogW10sXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzbFwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcImxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHN2XCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwidlwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFnc0xlZnQ6IFtdLFxuICAgICAgICAgICAgICAgIHRhZ3NSaWdodDogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwbGF5aW5nOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluLCB1dWlkTWl4aW5dLFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgJ29wZW4nOiBmdW5jdGlvbiAob3Blbiwgb2xkT3Blbikge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICB0YWdzXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIHN1YnNjcmliZSh0aGlzLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnc2V0U2VsZWN0ZWRUb3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2g7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLnRvdWNoLmFjdGlvbnMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnc2V0U2VsZWN0ZWRBY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09ICdyZWNvcmRpbmdUb3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRpbmdUb3VjaCA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnJlY29yZGluZ1RvdWNoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb21tb25TZXJ2aWNlLmdldFRhZ3MoKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3NMZWZ0ID0gXy5jbG9uZURlZXAocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWdzUmlnaHQgPSBfLmNsb25lRGVlcChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0sIChlcnJvcik9PiB7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBidXMuJG9uKCd0b29nbGUtaW5zcGVjdG9yJywgKGlzT3Blbik9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzT3BlbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgICAgICAgICAgICAgICAgJC5BZG1pbkxURS5ib3hXaWRnZXQuY29sbGFwc2UoJCgnI2luc3BlY3RvclRvb2dsZXInKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3BlbiAhPSBpc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuQWRtaW5MVEUuYm94V2lkZ2V0LmNvbGxhcHNlKCQoJyNpbnNwZWN0b3JUb29nbGVyJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGlzT3BlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdGl0bGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3VjaCA/IHRoaXMudG91Y2gudGV4dCA6ICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG91Y2ggPyBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guc3RhcnQpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b3VjaCA/IFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5lbmQpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG91Y2ggPyB0aGlzLnRvdWNoLmNvbG9yLmhleCA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIG5ldyBwNShpbnNwZWN0b3JTa2V0Y2gpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0b29nbGVPcGVuKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5KCl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0QWN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZUFjdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSArIDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaWRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kaXNhYmxlUHJvZ3Jlc3MuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3VjaC5hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnRvdWNoLmFjdGlvbnNbdGhpcy50b3VjaC5hY3Rpb25zLmxlbmd0aCAtIDFdLmVuZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnRvdWNoLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgQWN0aW9uKE1hdGguZmxvb3Ioc3RhcnQpLCBNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksIF8uY2xvbmVEZWVwKHRoaXMudG91Y2guY29sb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZEFjdGlvbicsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRBY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnU2VsZWN0ZWRMZWZ0KHRhZyl7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnLnV1aWQgPSB0aGlzLmdlbmVyYXRlVVVJRCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5sZWZ0VGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ1NlbGVjdGVkUmlnaHQodGFnKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0YWcudXVpZCA9IHRoaXMuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLnJpZ2h0VGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ0RlbGV0ZWRSaWdodCh0YWcpe1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWdJbmRleCA9IF8uZmluZEluZGV4KHRoaXMuYWN0aW9uLnJpZ2h0VGFncywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnV1aWQgPT0gdGFnLnV1aWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5yaWdodFRhZ3Muc3BsaWNlKHRhZ0luZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnRGVsZXRlZExlZnQodGFnKXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnSW5kZXggPSBfLmZpbmRJbmRleCh0aGlzLmFjdGlvbi5sZWZ0VGFncywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnV1aWQgPT0gdGFnLnV1aWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5sZWZ0VGFncy5zcGxpY2UodGFnSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0YXJ0QWN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24uZW5kID0gTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGVBY3Rpb25zKHRoaXMuYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nQWN0aW9uJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIGVsc2UgaWYgKE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSA+IHRoaXMudG91Y2guZW5kKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XG4gICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy50b3VjaC5lbmQpO1xuICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRBY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5vZmYoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRBY3Rpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKVxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVBY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QWN0aW9uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheWJhY2tSYXRlKHJhdGUpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGxheWJhY2tSYXRlKHJhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcndhcmQocyl7XG4gICAgICAgICAgICAgICAgdmFyIGZvcndhcmQgPSB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkgKyBzO1xuICAgICAgICAgICAgICAgIGlmIChmb3J3YXJkIDw9IHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKGZvcndhcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kdXJhdGlvbigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFja3dhcmQocyl7XG4gICAgICAgICAgICAgICAgdmFyIGJhY2t3YXJkID0gdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpIC0gcztcbiAgICAgICAgICAgICAgICBpZiAoYmFja3dhcmQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKGJhY2t3YXJkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbnNwZWN0b3IudnVlPzIyZDQxZTg0IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgaWQ9XCJ0aW1lbGluZUJveFwiIGNsYXNzPVwiYm94IGJveC1zb2xpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgPCEtLSB0b29scyBib3ggLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodCBib3gtdG9vbHNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtb246Y2xpY2sucHJldmVudD1cInpvb21JblwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWm9vbSBJblwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaC1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljay5wcmV2ZW50PVwiem9vbU91dFwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJab29tIE91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaC1taW51c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBpZD1cInRpbWVsaW5lVG9vZ2xlclwiIHYtb246Y2xpY2s9XCJ0b29nbGVPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy4gdG9vbHMgLS0+XG5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50aW1lbGluZScpfX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3RpbWVsaW5lJz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQgdGltZWxpbmVTa2V0Y2ggZnJvbSAnLi4vc2tldGNoL3RpbWVsaW5lU2tldGNoJ1xuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBsb2NhbGVzOiBzY291dGluZ3NMb2NhbGVzLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICdvcGVuJzogZnVuY3Rpb24gKG9wZW4sIG9sZE9wZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgICAgICAgICBwLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCl7XG4gICAgICAgICAgICBidXMuJG9uKCd0b29nbGUtdGltZWxpbmUnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICAgICAgICAgICQuQWRtaW5MVEUuYm94V2lkZ2V0LmNvbGxhcHNlKCQoJyN0aW1lbGluZVRvb2dsZXInKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICB3aW5kb3cucCA9IG5ldyBwNSh0aW1lbGluZVNrZXRjaCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvb2dsZU9wZW4oKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvb21JbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgKyAxKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbU91dCgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciA+IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRpbWVsaW5lLnZ1ZT80NjcyYjBiOSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8YWRtaW4taGVhZGVyIDp0aXRsZT1cInRpdGxlXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L2FkbWluLWhlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50IG92ZXJsYXktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpcy1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiBwbGF5ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkbmMtcGxheWVyIHYtaWY9XCJpbml0aWFsaXplZFwiIDpzb3VyY2U9XCJzb3VyY2VcIiByZWY9XCJwbGF5ZXJcIj48L2RuYy1wbGF5ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNiB0b3VjaGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8dG91Y2hlcy1saXN0PjwvdG91Y2hlcy1saXN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1zaG93PVwicGxheWVyUmVhZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJzdGFydFRvdWNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInN0YXJ0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhXCIgOmNsYXNzPVwieydmYS1wbGF5Jzohc3RhcnRlZCwnZmEtY2lyY2xlIHRleHQtZGFuZ2VyJzpzdGFydGVkfVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdGFydGVkPyR0KCdzY291dGluZ3MucmVjb3JkaW5nJyk6JHQoJ3Njb3V0aW5ncy5zdGFydF90b3VjaCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIDpkaXNhYmxlZD1cIiFzdGFydGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246Y2xpY2s9XCJlbmRUb3VjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtc3RvcFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmVuZF90b3VjaCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInRvb2dsZVRpbWVsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvb2dsZV90aW1lbGluZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJ0b29nbGVJbnNwZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtZXllXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvb2dsZV9pbnNwZWN0b3InKX19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmJ0bi1ncm91cCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGVkaXQtdG91Y2gtZm9ybSB2LWlmPVwiZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb246Y2FuY2VsLW5ldy10b3VjaD1cImNhbmNlbEVkaXRUb3VjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbml0LXRvdWNoPVwidG91Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmFkZC1uZXctdG91Y2g9XCJzYXZlRWRpdFRvdWNoXCIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIj48L2VkaXQtdG91Y2gtZm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnNwZWN0b3Igdi1pZj1cInBsYXllclJlYWR5XCIgcmVmPVwiaW5zcGVjdG9yXCIgOnBsYXlpbmc9XCJwbGF5aW5nXCI+PC9pbnNwZWN0b3I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWVsaW5lIHYtaWY9XCJwbGF5ZXJSZWFkeVwiPjwvdGltZWxpbmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtc2hvdz1cInBsYXllclJlYWR5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cInNhdmVcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj4ge3skdCgnZm9ybXMuc2F2ZScpfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwiY2FuY2VsXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIj57eyR0KCdmb3Jtcy5iYWNrJyl9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIHYtaWY9XCIhcGxheWVyUmVhZHlcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2ggZmEtc3BpblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBkbmNQbGF5ZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlJztcbiAgICBpbXBvcnQgVG91Y2ggZnJvbSAnLi9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoJztcbiAgICBpbXBvcnQge3NldFN0YXRlLCBzZXRBY3Rpb25zLCBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZX0gZnJvbSAnbW9ja3N0YXRlJztcbiAgICBpbXBvcnQge2FjdGlvbnN9IGZyb20gJy4vc3RvcmVzL2FjdGlvbnMnXG4gICAgaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdG9yZXMvc3RvcmUnXG4gICAgaW1wb3J0IFZlZVZhbGlkYXRlLCB7VmFsaWRhdG9yfSBmcm9tICd2ZWUtdmFsaWRhdGUnO1xuICAgIGltcG9ydCBuZXdUb3VjaEZvcm0gZnJvbSAnLi9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlJztcbiAgICBpbXBvcnQgZWRpdFRvdWNoRm9ybSBmcm9tICcuL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlJztcbiAgICBpbXBvcnQgdG91Y2hlc0xpc3QgZnJvbSAnLi9saXN0cy90b3VjaGVzTGlzdC52dWUnO1xuICAgIGltcG9ydCB0aW1lbGluZSBmcm9tICcuL2NhbnZhcy90aW1lbGluZS52dWUnO1xuICAgIGltcG9ydCBpbnNwZWN0b3IgZnJvbSAnLi9jYW52YXMvaW5zcGVjdG9yLnZ1ZSc7XG4gICAgaW1wb3J0IGNvbGxpZGVNaXhpbiBmcm9tICdiYXNlL21peGlucy9jb2xsaWRlJztcbiAgICBpbXBvcnQgYWRtaW5IZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcbiAgICBpbXBvcnQgc2NvdXRpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UnXG4gICAgaW1wb3J0IHNjb3V0aW5nVG91Y2hTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1RvdWNoU2VydmljZSdcbiAgICBpbXBvcnQgQWN0aW9uIGZyb20gJy4vc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24nXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuICAgIGltcG9ydCBlcnJvclByZXNlbnRlciBmcm9tICdiYXNlL21peGlucy9hamF4L2Vycm9yUHJlc2VudGVyJ1xuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBkbmNQbGF5ZXIsXG4gICAgICAgICAgICBuZXdUb3VjaEZvcm0sXG4gICAgICAgICAgICBlZGl0VG91Y2hGb3JtLFxuICAgICAgICAgICAgdG91Y2hlc0xpc3QsXG4gICAgICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgICAgIGluc3BlY3RvcixcbiAgICAgICAgICAgIGFkbWluSGVhZGVyXG4gICAgICAgIH0sXG4gICAgICAgIG1peGluczogW2NvbGxpZGVNaXhpbiwgdXVpZE1peGluLCBlcnJvclByZXNlbnRlcl0sXG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjb3V0aW5nOiB7fSxcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHt9LFxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdGFydGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJSZWFkeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnLycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2FkbWluLmhvbWUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvc2NvdXRpbmdzL2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi5zY291dGluZ3MnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvc2NvdXRpbmdzLycgKyB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQgKyAnL3RvdWNoZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi50b3VjaGVzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHQoJ2FkbWluLnNjb3V0aW5ncycpICsgJyAnICsgdGhpcy5zY291dGluZy5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKVxuICAgICAgICB7XG4gICAgICAgICAgICB3aW5kb3cudm0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSB3aW5kb3dbJ3NvdXJjZSddO1xuICAgICAgICAgICAgc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgc2V0QWN0aW9ucyhhY3Rpb25zKTtcbiAgICAgICAgICAgIHdpbmRvdy5nZXRTdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzdWJzY3JpYmUodGhpcywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gJ3BsYXllclJlYWR5Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyUmVhZHkgc3Vic2NyaXB0JywgdGhpcy5wbGF5ZXJSZWFkeSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRTdGF0ZSgnKicpLnBsYXllclJlYWR5ICYmICF0aGlzLnBsYXllclJlYWR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJlYWR5ID0gZ2V0U3RhdGUoJyonKS5wbGF5ZXJSZWFkeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTY291dGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NvdXRpbmdTZXJ2aWNlLnNob3codGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY291dGluZyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVjaE9yZGVyJzogWyd5b3V0dWJlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NvdXJjZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogXCJ2aWRlby95b3V0dWJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3JjJzogcmVzcG9uc2UuZGF0YS52aWRlb1NyY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidXMuJG9uKCdlZGl0LXRvdWNoJywgKHRvdWNoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRUb3VjaChudWxsLCB0b3VjaClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnVzLiRvbigncmVtb3ZlLXRvdWNoJywgKHRvdWNoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRvdWNoKHRvdWNoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpe1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZURlc3Ryb3koKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IGhvb2snKTtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9mZigpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsb2FkU2NvdXRpbmcoKXtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMuc2NvdXRpbmcudG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgVG91Y2godG91Y2guc3RhcnQsIHRvdWNoLmVuZCwgdG91Y2gudGl0bGUsIHRvdWNoLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2godG91Y2guYWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdCA9IG5ldyBBY3Rpb24oYWN0aW9uLnN0YXJ0LCBhY3Rpb24uZW5kLCBhY3Rpb24uY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZEFjdGlvbicsIGFjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFjdGlvbi5sZWZ0VGFncywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZy51dWlkID0gc2VsZi5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkTGVmdFRhZycsIHRhZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYWN0aW9uLnJpZ2h0VGFncywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZy51dWlkID0gc2VsZi5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkUmlnaHRUYWcnLCB0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgbnVsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5pdCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9uKCdwbGF5JywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigncGF1c2UnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9uKCd0aW1ldXBkYXRlJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSkgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlc1swXS5wcmV2aW91cyBpbnN0YW5jZW9mIFRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaCA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0ucHJldmlvdXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgdG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlc1swXS5jdXJyZW50IGluc3RhbmNlb2YgVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvdWNoID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlc1swXS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZUFjdGlvblJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlQWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlkZUFjdGlvblJlc3VsdC5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZUFjdGlvbnNbMF0ucHJldmlvdXMgaW5zdGFuY2VvZiBBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZUFjdGlvbnNbMF0ucHJldmlvdXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLmN1cnJlbnQgaW5zdGFuY2VvZiBBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZUFjdGlvbnNbMF0uY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sb3IodmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmNvbG9yID0gdmFsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnRUb3VjaCgpe1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGUoe1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpICsgMVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KHRoaXMuJHQoJ3Njb3V0aW5ncy50b3VjaGVzX2NhbnRfb3ZlcmxhcCcpKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdCA9IG5ldyBUb3VjaChNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLCBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLCB0aGlzLnRvdWNoLnRleHQsIHRoaXMudG91Y2guY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkVG91Y2gnLCBhY3QpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nVG91Y2gnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29nbGVJbnNwZWN0b3IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgYWN0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnNwZWN0b3Iuc3RhcnRBY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0gYWN0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigndGltZXVwZGF0ZScsIHNlbGYub25TdGFydFRvdWNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnRUb3VjaCgpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guZW5kID0gTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdUb3VjaCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkub2ZmKCd0aW1ldXBkYXRlJywgdGhpcy5vblN0YXJ0VG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuZXJyb3JUb2FzdCh0aGlzLiR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRUb3VjaCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ1RvdWNoJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydFRvdWNoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnNwZWN0b3IuZW5kQWN0aW9uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZWRpdFRvdWNoKGV2ZW50LCB0b3VjaCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IHRvdWNoO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZU5ld1RvdWNoKHRvdWNoKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0ID0gbmV3IFRvdWNoKHRvdWNoLnN0YXJ0LCB0b3VjaC5lbmQsIHRvdWNoLnRleHQsIHRvdWNoLmNvbG9yKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkVG91Y2gnLCBhY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUb3VjaCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbmNlbE5ld1RvdWNoKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2F2ZUVkaXRUb3VjaCh0b3VjaCl7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2VkaXRUb3VjaCcsIHRvdWNoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2goKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW5jZWxFZGl0VG91Y2godG91Y2gpe1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc2V0VG91Y2goKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoID0ge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZXhcIjogXCIjREJERjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2dsZVRpbWVsaW5lKCl7XG4gICAgICAgICAgICAgICAgYnVzLiRlbWl0KCd0b29nbGUtdGltZWxpbmUnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29nbGVJbnNwZWN0b3IoaXNPcGVuKXtcbiAgICAgICAgICAgICAgICBidXMuJGVtaXQoJ3Rvb2dsZS1pbnNwZWN0b3InLCBpc09wZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZVRvdWNoKHRvdWNoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVtb3ZlVG91Y2gnLCB0b3VjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2F2ZSgpe1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIudG91Y2hlcztcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IHRoaXMuZm9ybWF0U29jdXRpbmcodG91Y2hlcyk7XG4gICAgICAgICAgICAgICAgc2NvdXRpbmdUb3VjaFNlcnZpY2UudXBkYXRlKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCwge3RvdWNoZXM6IHRvdWNoZXN9LCAocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb290LnN1Y2Nlc3NUb2FzdChyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy5saXN0J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuY2VsKCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXRTb2N1dGluZyh0b3VjaGVzKXtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIF8uZWFjaCh0b3VjaGVzLCAodG91Y2gpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVRvdWNoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHsnZXMnOiB0b3VjaC50ZXh0LCAnZW4nOiB0b3VjaC50ZXh0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0b3VjaC5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogdG91Y2guZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRvdWNoLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRvdWNoLmVuZCAtIHRvdWNoLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaCh0b3VjaC5hY3Rpb25zLCAoYWN0aW9uKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhQWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBhY3Rpb24uc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBhY3Rpb24uZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3Rpb24uY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGFjdGlvbi5lbmQgLSBhY3Rpb24uc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VGFnczogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChhY3Rpb24ubGVmdFRhZ3MsICh0YWcpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVGFnID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5pZCA9IHRhZy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLmRyb3Bkb3duID0gdGFnLmRyb3Bkb3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcuZHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5vcHRpb24gPSB7aWQ6IHRhZy5vcHRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFBY3Rpb24ubGVmdFRhZ3MucHVzaChkYXRhVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYWN0aW9uLnJpZ2h0VGFncywgKHRhZyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFUYWcgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLmlkID0gdGFnLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWcuZHJvcGRvd24gPSB0YWcuZHJvcGRvd247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZy5kcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLm9wdGlvbiA9IHtpZDogdGFnLm9wdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUFjdGlvbi5yaWdodFRhZ3MucHVzaChkYXRhVGFnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRvdWNoLmFjdGlvbnMucHVzaChkYXRhQWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChkYXRhVG91Y2gpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVkaXQudnVlPzBjMjY3ZGUxIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIHYtb246c3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdFwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRpdGxlJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2gudGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwidG91Y2gudGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC50ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmNvbG9yJyl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcGFjdC1waWNrZXIgdi1tb2RlbD1cInRvdWNoLmNvbG9yXCIgQGNoYW5nZS1jb2xvcj1cIm9uQ2hhbmdlQ29sb3JcIj48L2NvbXBhY3QtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctc3RhcnRcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3Muc3RhcnQnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaC5zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cInRvdWNoLnN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLnN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1zdGFydC1mbXRcIiBuYW1lPVwibmV3LXN0YXJ0LWZtdFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic3RhcnRGbXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guc3RhcnQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctZW5kXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmVuZCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1lbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaC5lbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJ0b3VjaC5lbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XCJyZXF1aXJlZHxudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiRW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC5lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LWVuZC1mbXRcIiBuYW1lPVwibmV3LWVuZC1mbXRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImVuZEZtdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd0b3VjaC5lbmQnKVwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guZW5kJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiY29sbGlkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gZmEgZmEtYmFuXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaGVzX2NhbnRfb3ZlcmxhcCcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJyl9fTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJjb2xsaWRlVG91Y2ggaW4gY29sbGlkZVRvdWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwiY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IHRvdWNoLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLHsgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2gucHJldmlvdXMudGV4dCxzdGFydDp0b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuc3RhcnQpLGVuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvSEhNTVNTKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5lbmQpfSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwiY29sbGlkZVRvdWNoLmN1cnJlbnQuaWQgIT0gdG91Y2guaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycseyB0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVUb3VjaC5jdXJyZW50LnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLmN1cnJlbnQuc3RhcnQpLGVuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LmVuZCl9KX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJlbmRJbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj7DlzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbiBmYSBmYS1iYW5cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZXJyb3InKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZW5kX2dyZWF0ZXInKX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+e3skdCgnc2NvdXRpbmdzLnNhdmUnKX19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHYtb246Y2xpY2sucHJldmVudD1cImNsb3NlXCI+e3skdCgnc2NvdXRpbmdzLmNhbmNlbCcpfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2dldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCB7Q29tcGFjdH0gZnJvbSAndnVlLWNvbG9yJztcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xuICAgIGltcG9ydCBjb2xsaWRlTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvY29sbGlkZSdcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGluaXRUb3VjaDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluXSxcbiAgICAgICAgY3JlYXRlZCgpe1xuICAgICAgICAgICAgdGhpcy50b3VjaCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5pdFRvdWNoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndG91Y2guZW5kJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGUodGhpcy50b3VjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZVRvdWNoZXMgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogW10sXG4gICAgICAgICAgICAgICAgZW5kSW52YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RhcnRGbXQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZEZtdCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FbmQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnY29tcGFjdC1waWNrZXInOiBDb21wYWN0LFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0hITU1TUyhzZWNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XG4gICAgICAgICAgICAgICAgdGhpcy4kdmFsaWRhdG9yLnZhbGlkYXRlQWxsKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmFueSgpKSB7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3VjaC5zdGFydCA+PSB0aGlzLnRvdWNoLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbGxpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGQtbmV3LXRvdWNoJywgdGhpcy50b3VjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgICAudnVlLWNvbG9yX19jb21wYWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBlZGl0VG91Y2hGb3JtLnZ1ZT81NzdiNzE4MiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXCIgdi1pZj1cIm9wZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctdGl0bGVcIiBuYW1lPVwibmV3LXRpdGxlXCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJ0b3VjaC50ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLnRleHQnKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctdGl0bGVcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcGFjdC1waWNrZXIgdi1tb2RlbD1cInRvdWNoLmNvbG9yXCIgQGNoYW5nZS1jb2xvcj1cIm9uQ2hhbmdlQ29sb3JcIj48L2NvbXBhY3QtcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctc3RhcnRcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCAoc2VjKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0XCIgbmFtZT1cIm5ldy1zdGFydFwiIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJ0b3VjaC5zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cInJlcXVpcmVkfG51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXM9XCJTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC5zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctc3RhcnQtZm10XCIgbmFtZT1cIm5ldy1zdGFydC1mbXRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInN0YXJ0Rm10XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLnN0YXJ0JykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LWVuZFwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZChzZWMpXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctZW5kXCIgbmFtZT1cIm5ldy1lbmRcIiB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVwidG91Y2guZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cIkVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2guZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1lbmQtZm10XCIgbmFtZT1cIm5ldy1lbmQtZm10XCIgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlbmRGbXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImNvbGxpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJpY29uIGZhIGZhLWJhblwiPjwvaT4gVG91Y2hlcyBjYW50IG92ZXJsYXAhPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0b3VjaCB0aGF0IHlvdSB3YW50IHRvIGFkZCBvdmVybGFwIHdpdGg6XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidG91Y2ggaW4gY29sbGlkZVRvdWNoZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwidG91Y2gucHJldmlvdXMuaGFzT3duUHJvcGVydHkoJ2lkJylcIj57e3RvdWNoLnByZXZpb3VzLnRleHR9fTogdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB7e3RvSEhNTVNTKHRvdWNoLnByZXZpb3VzLnN0YXJ0KX19IGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLnByZXZpb3VzLmVuZCl9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XCJ0b3VjaC5jdXJyZW50Lmhhc093blByb3BlcnR5KCdpZCcpXCI+e3t0b3VjaC5jdXJyZW50LnRleHR9fTogdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLmN1cnJlbnQuc3RhcnQpfX0gYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dG9ISE1NU1ModG91Y2guY3VycmVudC5lbmQpfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiZW5kSW52YWxpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cImljb24gZmEgZmEtYmFuXCI+PC9pPiBWYWxpZGF0aW9uIEVycm9yITwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5BZGQgVG91Y2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiY2xvc2VcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2dldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xuICAgIGltcG9ydCB7Q29tcGFjdH0gZnJvbSAndnVlLWNvbG9yJztcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgb3Blbjoge30sXG4gICAgICAgICAgICBpbml0VG91Y2g6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVyYXRpb246IHt9LFxuICAgICAgICAgICAgc3RhcnQ6IHt9LFxuICAgICAgICAgICAgZW5kOiB7fVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgb3Blbih2YWwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnQodmFsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLnN0YXJ0ID0gdmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZCh2YWwpe1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guZW5kID0gdmFsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvdWNoLnN0YXJ0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndG91Y2guZW5kJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gISEocGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpIHx8IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSA+IHBhcnNlSW50KHRoaXMuZHVyYXRpb24pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogW10sXG4gICAgICAgICAgICAgICAgZW5kSW52YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc3RhcnRGbXQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZEZtdCgpe1xuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FbmQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnY29tcGFjdC1waWNrZXInOiBDb21wYWN0LFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjbG9zZSgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbC1uZXctdG91Y2gnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0hITU1TUyhzZWNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrQ29sbGlkZSgpe1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaHMgPSBnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykudG91Y2hlcy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICB0b3VjaHMucHVzaCh0aGlzLnRvdWNoKTtcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcCh0b3VjaHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IG92ZXJsYXAub3ZlcmxhcDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gb3ZlcmxhcC5yYW5nZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3ZlcmxhcCh0b3VjaHMpe1xuICAgICAgICAgICAgICAgIHZhciBzb3J0ZWRSYW5nZXMgPSB0b3VjaHMuc29ydCgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNUaW1lID0gcGFyc2VJbnQocHJldmlvdXMuc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwYXJzZUludChjdXJyZW50LnN0YXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgaXMgZWFybGllciB0aGFuIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1RpbWUgPCBjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lID09PSBjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgdGltZSBpcyBsYXRlciB0aGFuIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIGZpbmFsIHJlc3VsdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydGVkUmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHByZXZpb3VzIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gYXJyW2lkeCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBhbnkgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNFbmQgPSBwYXJzZUludChwcmV2aW91cy5lbmQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXJ0ID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gKHByZXZpb3VzRW5kID49IGN1cnJlbnRTdGFydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8geWVzLCB0aGVyZSBpcyBvdmVybGFwXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQub3ZlcmxhcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgc3BlY2lmaWMgcmFuZ2VzIHRoYXQgb3ZlcmxhcFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudDogY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2VlZCB0aGUgcmVkdWNlXG4gICAgICAgICAgICAgICAgfSwge292ZXJsYXA6IGZhbHNlLCByYW5nZXM6IFtdfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TdWJtaXQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMuYW55KCkpIHtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludChNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVuZEludmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkLW5ldy10b3VjaCcsIHRoaXMudG91Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbmV3VG91Y2hGb3JtLnZ1ZT8zY2YwNGRkOSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1zb2xpZCBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWFwLW1hcmtlclwiPjwvaT5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaGVzJyl9fVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidG9kby1saXN0IHVpLXNvcnRhYmxlXCIgdi1pZj1cInRvdWNoZXMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidG91Y2ggaW4gdG91Y2hlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCInYmFja2dyb3VuZDonK3RvdWNoLmNvbG9yLmhleCsnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7J1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj57e3RvdWNoLnRleHR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFbXBoYXNpcyBsYWJlbCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnN0YXJ0X2F0Jyx7c3RhcnQ6dG9ISE1NU1ModG91Y2guc3RhcnQpfSl9fVxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJsYWJlbCBsYWJlbC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmRfYXQnLHtlbmQ6dG9ISE1NU1ModG91Y2guZW5kKX0pfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBHZW5lcmFsIHRvb2xzIHN1Y2ggYXMgZWRpdCBvciBkZWxldGUtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVkaXRcIiB2LW9uOmNsaWNrPVwiZWRpdFRvdWNoKHRvdWNoKVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiIHYtb246Y2xpY2s9XCJyZW1vdmVUb3VjaCh0b3VjaClcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGgzIHYtaWY9XCIhdG91Y2hlcy5sZW5ndGhcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+e3skdCgnc2NvdXRpbmdzLm5vX3RvdWNoZXMnKX19PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQge2dldFN0YXRlLCBzdWJzY3JpYmV9IGZyb20gJ21vY2tzdGF0ZSc7XG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b3VjaGVzOiBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci50b3VjaGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKXtcbiAgICAgICAgICAgIHN1YnNjcmliZSh0aGlzLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnYWRkVG91Y2gnIHx8IGRhdGEuYWN0aW9uID09ICdyZW1vdmVUb3VjaCcgfHwgZGF0YS5hY3Rpb24gPT0gJ2VkaXRUb3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaGVzID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIudG91Y2hlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGVkaXRUb3VjaCh0b3VjaCl7XG4gICAgICAgICAgICAgICAgYnVzLiRlbWl0KCdlZGl0LXRvdWNoJywgdG91Y2gpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlVG91Y2godG91Y2gpe1xuICAgICAgICAgICAgICAgIGJ1cy4kZW1pdCgncmVtb3ZlLXRvdWNoJywgdG91Y2gpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRvdWNoZXNMaXN0LnZ1ZT84YTdjNDZiYSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGFnLWRyb3Bkb3duIHYtaWY9XCJ0YWcuZHJvcGRvd25cIiB2LW9uOm9wdGlvbi1jbGlja2VkPVwiZHJvcGRvd25PcHRpb25DbGlja2VkXCIgOnRhZz1cInRhZ1wiPjwvdGFnLWRyb3Bkb3duPlxuICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidGFnLWRyb3Bkb3duXCI+XG4gICAgICAgIDxhIGNsYXNzPVwiIGJ0biB0YWdcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJ0YWdDbGlja2VkXCIgOmNsYXNzPVwiJ2JnLScrdGFnLmNvbG9yXCI+e3t0YWcubmFtZX19PC9hPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZT5cbiAgICAudGFnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogIzcxNzE3MTtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMTgwLCAxODAsIDE4MCwgMC4xKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIG1hcmdpbjogMCAzcHggNnB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudGFncyAudGFnOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDhDO1xuICAgIH1cblxuICAgIC50YWdzIC50YWcucHJpbWFyeSB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xuICAgICAgICBib3JkZXItY29sb3I6ICMzNTdFQkRcbiAgICB9XG5cbiAgICAudGFncyAudGFnLnN1Y2Nlc3Mge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNENBRTRDXG4gICAgfVxuXG4gICAgLnRhZ3MgLnRhZy5pbmZvIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQ2QjhEQVxuICAgIH1cblxuICAgIC50YWdzIC50YWcud2FybmluZyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xuICAgICAgICBib3JkZXItY29sb3I6ICNFRUEyMzZcbiAgICB9XG5cbiAgICAudGFncyAudGFnLmRhbmdlciB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xuICAgICAgICBib3JkZXItY29sb3I6ICNENDNGM0FcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdGFnRHJvcGRvd24gZnJvbSAnLi90YWdEcm9wZG93bi52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRhZzoge31cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgdGFnRHJvcGRvd25cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25DbGlja2VkKHRhZyl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGFnLWNsaWNrZWQnLCB0YWcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnQ2xpY2tlZCgpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1jbGlja2VkJywgdGhpcy50YWcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWcudnVlPzBiNzE0OTU4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biB0YWctZHJvcGRvd25cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgYnRuIHRhZ1wiIDpjbGFzcz1cIidiZy0nK3RhZy5jb2xvclwiXG4gICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiA6aWQ9XCJpZFwiPnt7dGFnLm5hbWV9fVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiA6YXJpYS1sYWJlbGxlZGJ5PVwiaWRcIj5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIm9wdCBpbiB0YWcub3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiY2xpY2tPcHQob3B0KVwiPnt7b3B0Lm5hbWV9fTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAgIC50YWctZHJvcGRvd24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgdXVpZCBmcm9tICdiYXNlL21peGlucy91dWlkJ1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGFnOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWl4aW5zOiBbdXVpZF0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlVVVJRCgpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjbGlja09wdChvcHQpe1xuICAgICAgICAgICAgICAgIHRoaXMudGFnLm9wdGlvbiA9IG9wdDtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvcHRpb24tY2xpY2tlZCcsIHRoaXMudGFnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFnRHJvcGRvd24udnVlP2Y0NGM4NjJjIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIi4uLlwiPlxuICAgICAgICAgICAgICAgIDx0YWcgOnRhZz1cInRhZ1wiIHYtZm9yPVwidGFnIGluIHRhZ3NcIiB2LW9uOnRhZy1jbGlja2VkPVwidGFnU2VsZWN0ZWRcIj48L3RhZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3Mtc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzLWxpc3RcIiB2LWRyYWd1bGE9XCJzZWxlY3RlZFwiIGJhZz1cImZpcnN0LWJhZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJ0YWcgaW4gc2VsZWN0ZWRcIiA6a2V5PVwidGFnLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiIDpjbGFzcz1cIidiZy0nK3RhZy5jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0YWcubmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRhZy5vcHRpb25cIj4ge3t0YWcub3B0aW9uLm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImRlbGV0ZVRhZyh0YWcpXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cbiAgICAudGFncyB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFncy1zZWxlY3RlZCB7XG4gICAgfVxuXG4gICAgLmNsb3NlIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgb3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAudGFncy1saXN0IHtcbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50YWdzLWxpc3QgZGl2LFxuICAgIC5ndS1taXJyb3Ige1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAudGFncy1saXN0IGRpdiB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAudGFncy1saXN0IGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuZ3UtbWlycm9yIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcIjtcbiAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcbiAgICAgICAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICAgICAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZ3UtaGlkZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZ3UtdW5zZWxlY3RhYmxlIHtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5ndS10cmFuc2l0IHtcbiAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTIwKVwiO1xuICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50YWdzLWxpc3QgLmV4LW1vdmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgICB9XG5cbiAgICAudGFncy1saXN0LmV4LW92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgfVxuXG4gICAgLmhhbmRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG5cbiAgICBpbXBvcnQgdGFnIGZyb20gJy4vdGFnLnZ1ZSdcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZ3M6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIHRhZ1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB0YWdTZWxlY3RlZCh0YWcpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1zZWxlY3RlZCcsIHRhZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlVGFnKHRhZyl7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGFnLWRlbGV0ZWQnLCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFncy52dWU/YmU3YzNlZTgiLCJpbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2hNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b3VjaGVzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VG91Y2hlcycsIHRvdWNoZXMgPyB0b3VjaGVzIDogW10pO1xuICAgIH1cblxuICAgIGFkZCh0b3VjaCkge1xuICAgICAgICBkaXNwYXRjaCgnYWRkVG91Y2gnLCB0b3VjaCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKHRvdWNoKSB7XG4gICAgICAgIGRpc3BhdGNoKCdyZW1vdmVUb3VjaCcsIHRvdWNoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbal0uZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VPdmVyVG91Y2goeCwgeSkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbal0uaXNNb3VzZU92ZXIoeCwgeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZU92ZXJBY3Rpb24oeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaCkge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9uc1tqXS5pc01vdXNlT3Zlcih4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdXNlUHJlc3NlZFRvdWNoKHgsIHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coeCwgeSk7XG4gICAgICAgIHZhciBhVG91Y2hJc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tqXS5pc01vdXNlUHJlc3NzZWRPdmVyKHgsIHkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbal0uaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGFUb3VjaElzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhVG91Y2hJc1NlbGVjdGVkICYmICF2bS5zdGFydGVkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIG51bGwpXG4gICAgICAgICAgICBpZiAodm0uJHJlZnMucGxheWVyKVxuICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5hYkxvb3BQbHVnaW4uZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW91c2VQcmVzc2VkQWN0aW9uKHgsIHkpIHtcbiAgICAgICAgdmFyIGFuQWN0aW9uSXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbal0uaXNNb3VzZVByZXNzc2VkT3Zlcih4LCB5KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2pdLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5BY3Rpb25Jc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYW5BY3Rpb25Jc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgbnVsbClcbiAgICAgICAgICAgICAgICBpZiAodm0uJHJlZnMucGxheWVyKVxuICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaE1hbmFnZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFnZSB7XG4gICAgc2V0dXAoKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBwLmJhY2tncm91bmQoMjU1KTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoNCk7XG4gICAgICAgIHAuc3Ryb2tlKCcjZDNlMGU5Jyk7XG4gICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgcC5yZWN0KDAsIDAsIHAud2lkdGggLSAxLCBwLmhlaWdodCAtIDEpXG4gICAgICAgIHAubm9TdHJva2UoKVxuICAgICAgICBwLm5vRmlsbCgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvU3RhZ2UuanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi91dGlscy9UaW1lQ29udmVydGVyJ1xuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydFksIGhlaWdodCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRZJywgc3RhcnRZKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRYJywgMzApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVIZWlnaHQnLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLnN0YXJ0RGVsdGEgPSAwO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50aW1lbGluZS5oaWRlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0Q29sV2lkdGgnLCB0aGlzLmNhbGN1bGF0ZUNvbFdpZHRoKCkpO1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWCcsIDApO1xuICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgICAgICBwLnN0cm9rZSgxKTtcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwKTtcbiAgICAgICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGF0ZS5wbGF5ZXIuZHVyYXRpb24pLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyAzMCwgNDAsIDIwKTtcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcblxuICAgICAgICAgICAgcC5zdHJva2UoMCk7XG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgIHAubGluZSh0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSwgdGhpcy5zdGF0ZS50aW1lbGluZS53aWR0aCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLnN0YXRlLnRpbWVsaW5lLndpZHRoICsgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoIC0gMzA7IGkgKz0gdGhpcy5zdGF0ZS50aW1lbGluZS5jb2xXaWR0aCkge1xuICAgICAgICAgICAgICAgIHZhciB4ID0gaSArIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRYO1xuICAgICAgICAgICAgICAgIHZhciBuZXdYID0geCAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lICogdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aDtcblxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3RhcnRNaW51dGVMYWJlbCh0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSwgeCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxpbmUoeCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpICUgKHRoaXMuc3RhdGUudGltZWxpbmUuY29sV2lkdGggKiA2KSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdYID49IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMYWJlbChpLCBuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxpbmUobmV3WCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3WCA+PSAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGltZWxpbmUuc2hvd1NlY29uZHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExhYmVsKGksIG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGluZShuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGltZWxpbmUuc2hvd1NlY29uZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgbmV3WCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlY29uZExpbmUoeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcC5zdHJva2UoJ3JlZCcpO1xuICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgICAgIHAubGluZSh0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgNDUsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSk7XG4gICAgICAgICAgICBwLmxpbmUodGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZU92ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50aW1lbGluZS5oaWRlKSB7XG4gICAgICAgICAgICBpZiAocC5tb3VzZVggPj0gMzAgJiYgcC5tb3VzZVggPD0gdGhpcy5zdGF0ZS5jYW52YXMud2lkdGggLSAzMCAmJiBwLm1vdXNlWSA+PSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSAmJiBwLm1vdXNlWSA8PSB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpIHtcbiAgICAgICAgICAgICAgICBwLmN1cnNvcihwLkhBTkQpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZU1vdXNlT3ZlcicsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwLmN1cnNvcihwLkFSUk9XKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVNb3VzZU92ZXInLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmFnKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudGltZWxpbmUuaGlkZSkge1xuXG4gICAgICAgICAgICB2YXIgc3RhcnREZWx0YSA9IChwLnBtb3VzZVggLSBwLm1vdXNlWCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGFydERlbHRhICE9IHN0YXJ0RGVsdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSArIChzdGFydERlbHRhKSAvIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFRpbWUnLCAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0VGltZScsIE1hdGguZmxvb3Ioc3RhcnQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGVsdGEgPSBzdGFydERlbHRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd1NlY29uZExpbmUoeCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudGltZWxpbmUuY29sV2lkdGg7IGogKz0gdGhpcy5zdGF0ZS50aW1lbGluZS5jb2xXaWR0aCAvIDEwKSB7XG4gICAgICAgICAgICBpZiAoKHggKyBqKSA8IHRoaXMuc3RhdGUudGltZWxpbmUud2lkdGggJiYgaikge1xuICAgICAgICAgICAgICAgIHAuc3Ryb2tlKDApO1xuICAgICAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICAgICAgICAgIHAubGluZSh4ICsgaiwgdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRzWSArIDUsIHggKyBqLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgICAgICAgICBwLnN0cm9rZSgyMzApO1xuICAgICAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICAgICAgICAgIHAubGluZSh4ICsgaiwgdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRzWSwgeCArIGosIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGo7XG4gICAgfVxuXG4gICAgZHJhd01pZGRsZVNlY29uZExpbmUoeCkge1xuICAgICAgICBwLnN0cm9rZSgwKTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMSlcbiAgICAgICAgcC5saW5lKHgsIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kc1ksIHgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICBwLnN0cm9rZSgyMzApO1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgxKVxuICAgICAgICBwLmxpbmUoeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSwgeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcbiAgICB9XG5cbiAgICBkcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgeCkge1xuICAgICAgICBwLnN0cm9rZSgyMzApO1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgcC50ZXh0U2l6ZSgxMCk7XG4gICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9TUyhpIC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCkgKyAnIHMnLCB4IC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kc1kgLSAxMCwgNDAsIDIwKTtcbiAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xuICAgIH1cblxuICAgIGRyYXdNaW51dGVMaW5lKHgpIHtcbiAgICAgICAgcC5zdHJva2UoMCk7XG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgIHAubGluZSh4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDIwLCB4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgcC5zdHJva2UoMjMwKTtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgcC5saW5lKHgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1ksIHgsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XG4gICAgfVxuXG4gICAgZHJhd01pbnV0ZUxhYmVsKGksIHgpIHtcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XG4gICAgICAgIHAudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKE1hdGgucm91bmQoaSAvIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGgpKSwgeCAtIDIwLCB0aGlzLnN0YXRlLnRpbWVsaW5lLm1pbnV0ZXNZLCA0MCwgMjApO1xuICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XG4gICAgfVxuXG4gICAgZHJhd1N0YXJ0TWludXRlTGFiZWwoaSwgeCkge1xuICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgcC50ZXh0U2l6ZSgxMik7XG4gICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcbiAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoaSksIHggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5taW51dGVzWSwgNDAsIDIwKTtcbiAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUNvbFdpZHRoKCkge1xuICAgICAgICB2YXIgbWludXRlcyA9ICggdGhpcy5zdGF0ZS5wbGF5ZXIuZHVyYXRpb24gKyAzMCkgLyA2MDtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHRoaXMuc3RhdGUuY2FudmFzLndpZHRoIC8gbWludXRlcykgLyA2KSAqIHRoaXMuc3RhdGUudGltZWxpbmUuem9vbUZhY3RvcjtcbiAgICB9XG5cbiAgICBnZXRTdGFydFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZTtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9UaW1lbGluZS5qcyIsImltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb1RpbWVNYXJrZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgY3VycmVudFggPSAodGhpcy5zdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoICsgMzA7XG4gICAgICAgIGN1cnJlbnRYID0gY3VycmVudFggPj0gMzAgPyBjdXJyZW50WCA6IDMwO1xuICAgICAgICBpZiAoKHRoaXMuc3RhdGUucGxheWVyLmN1cnJlbnRUaW1lIC0gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUpID4gMCkge1xuICAgICAgICAgICAgcC5zdHJva2UoJ2JsdWUnKTtcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICAgICAgICBwLmxpbmUoY3VycmVudFgsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgMzAsIGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDYwKTtcbiAgICAgICAgICAgIHAubGluZShjdXJyZW50WCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyA2MCwgY3VycmVudFgsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgICAgIHAudGV4dFNpemUoMTIpO1xuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1MoTWF0aC5mbG9vcih0aGlzLnN0YXRlLnBsYXllci5jdXJyZW50VGltZSkpLCBjdXJyZW50WCAtIDIwLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDE1LCA0MCwgMjApO1xuICAgICAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhZyh4LCB5KSB7XG5cbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9WaWRlb1RpbWVNYXJrZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnNwZWN0b3JTdGFnZSB7XG4gICAgc2V0dXAoKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBpbnNwZWN0b3IuYmFja2dyb3VuZCgyNTUpO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDQpO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCcjZDNlMGU5Jyk7XG4gICAgICAgIGluc3BlY3Rvci5maWxsKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBpbnNwZWN0b3IucmVjdCgwLCAwLCBpbnNwZWN0b3Iud2lkdGggLSAxLCBpbnNwZWN0b3IuaGVpZ2h0IC0gMSlcbiAgICAgICAgaW5zcGVjdG9yLm5vU3Ryb2tlKClcbiAgICAgICAgaW5zcGVjdG9yLm5vRmlsbCgpO1xuXG4gICAgICAgIGluc3BlY3Rvci5wdXNoKClcbiAgICAgICAgaW5zcGVjdG9yLnRyYW5zbGF0ZSgwLCA2MCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoJyNkM2UwZTknKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgaW5zcGVjdG9yLnJlY3QoMCwgMCwgMTIwLCA2MClcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoMCwgMCwgaW5zcGVjdG9yLndpZHRoLCAwKTtcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoMCwgNjAsIGluc3BlY3Rvci53aWR0aCwgNjApO1xuICAgICAgICBpbnNwZWN0b3IuZmlsbCgnYmxhY2snKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihpbnNwZWN0b3IuQ0VOVEVSKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoJ0xlZnQgQXRobGV0ZScsIDUsIDI0LCAxMTAsIDEyKTtcbiAgICAgICAgaW5zcGVjdG9yLnBvcCgpXG5cbiAgICAgICAgaW5zcGVjdG9yLnB1c2goKVxuICAgICAgICBpbnNwZWN0b3IudHJhbnNsYXRlKDAsIDEyMCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoJyNkM2UwZTknKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgaW5zcGVjdG9yLnJlY3QoMCwgMCwgMTIwLCA2MCk7XG4gICAgICAgIGluc3BlY3Rvci5saW5lKDAsIDYwLCBpbnNwZWN0b3Iud2lkdGgsIDYwKTtcbiAgICAgICAgaW5zcGVjdG9yLmZpbGwoJ2JsYWNrJyk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KCdSaWdodCBBdGhsZXRlJywgNSwgMjQsIDExMCwgMTIpO1xuICAgICAgICBpbnNwZWN0b3IucG9wKClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JTdGFnZS5qcyIsImltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uLy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yVGltZWxpbmUge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0WSwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yU3RhcnRZJywgc3RhcnRZKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclN0YXJ0WCcsIDEyMCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JIZWlnaHQnLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLnN0YXJ0RGVsdGEgPSAwO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBjb2xXaWR0aCA9IHRoaXMuY2FsY3VsYXRlQ29sV2lkdGgoKTtcbiAgICAgICAgaWYgKGNvbFdpZHRoID4gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckNvbFdpZHRoJywgY29sV2lkdGgpO1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckVuZFgnLCAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0KSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFgpO1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclN0YXJ0VGltZScsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQpXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDApO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgxKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDAsIDAsIDApO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUocC5OT1JNQUwpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmVuZCksIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYIC0gMjAsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAzMCwgNDAsIDIwKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24ocC5DRU5URVIpO1xuXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDApO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKTtcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLndpZHRoLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLndpZHRoICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCAtIDMwOyBpICs9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aCkge1xuICAgICAgICAgICAgICAgIHZhciB4ID0gaSArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFg7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ggPSB4IC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcblxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3RhcnRMYWJlbCh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lLCB4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGluZSh4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgJSAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmNvbFdpZHRoICogNikgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3WCA+PSAxMjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxhYmVsKGksIG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGluZShuZXdYKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdYID49IDEyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zaG93U2Vjb25kc0ludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgbmV3WCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMaW5lKG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExhYmVsKGksIG5ld1gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWNvbmRMaW5lKHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoJ3JlZCcpO1xuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICAgICAgaW5zcGVjdG9yLmxpbmUodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyA0NSwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSk7XG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3VzZU92ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmhpZGUpIHtcbiAgICAgICAgICAgIGlmIChpbnNwZWN0b3IubW91c2VYID49IDMwICYmIGluc3BlY3Rvci5tb3VzZVggPD0gdGhpcy5zdGF0ZS5jYW52YXMud2lkdGggLSAzMCAmJiBpbnNwZWN0b3IubW91c2VZID49IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgJiYgaW5zcGVjdG9yLm1vdXNlWSA8PSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSkge1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5jdXJzb3IoaW5zcGVjdG9yLkhBTkQpO1xuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKCdzZXRUaW1lbGluZU1vdXNlT3ZlcicsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3IuY3Vyc29yKGluc3BlY3Rvci5BUlJPVyk7XG4gICAgICAgICAgICAgICAgLy8gIGRpc3BhdGNoKCdzZXRUaW1lbGluZU1vdXNlT3ZlcicsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWcoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmhpZGUpIHtcblxuICAgICAgICAgICAgdmFyIHN0YXJ0RGVsdGEgPSAoaW5zcGVjdG9yLnBtb3VzZVggLSBpbnNwZWN0b3IubW91c2VYKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0RGVsdGEgIT0gc3RhcnREZWx0YSkge1xuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQgKyAoc3RhcnREZWx0YSkgLyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0VGltZScsIDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFRpbWUnLCBNYXRoLmZsb29yKHN0YXJ0KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERlbHRhID0gc3RhcnREZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdTZWNvbmRMaW5lKHgpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuY29sV2lkdGg7IGogKz0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmNvbFdpZHRoIC8gMTApIHtcbiAgICAgICAgICAgIGlmICgoeCArIGopIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLndpZHRoICYmIGopIHtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDApO1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLmxpbmUoeCArIGosIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRzWSArIDUsIHggKyBqLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoMjMwKTtcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHggKyBqLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1ksIHggKyBqLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGo7XG4gICAgfVxuXG4gICAgZHJhd01pZGRsZVNlY29uZExpbmUoeCkge1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpXG4gICAgICAgIGluc3BlY3Rvci5saW5lKHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRzWSwgeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgyMzApO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpXG4gICAgICAgIGluc3BlY3Rvci5saW5lKHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSwgeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xuICAgIH1cblxuICAgIGRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCB4KSB7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoMjMwKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b1NTKGkgLyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGgpICsgJyBzJywgeCAtIDIwLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1kgLSAxMCwgNDAsIDIwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihpbnNwZWN0b3IuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBkcmF3TWludXRlTGluZSh4KSB7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoMCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIDIwLCB4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kpO1xuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDIzMCk7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMilcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZLCB4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XG4gICAgfVxuXG4gICAgZHJhd01pbnV0ZUxhYmVsKGksIHgpIHtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhNYXRoLnJvdW5kKGkgLyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGgpKSwgeCAtIDIwLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUubWludXRlc1ksIDQwLCAyMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgfVxuXG4gICAgZHJhd1N0YXJ0TGFiZWwoc3RhcnRUaW1lLCB4KSB7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc3RhcnRUaW1lKSwgeCAtIDIwLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUubWludXRlc1ksIDQwLCAyMCk7XG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ29sV2lkdGgoKSB7XG4gICAgICAgIHZhciBtaW51dGVzID0gKCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmVuZCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQpIC8gNjA7XG4gICAgICAgIGlmIChtaW51dGVzID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKCh0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFggLSAzMCkgLyBtaW51dGVzKSAvIDYpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgZ2V0U3RhcnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JUaW1lbGluZS5qcyIsImltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uLy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXG5pbXBvcnQge2dldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUucGxheWVyLmN1cnJlbnRUaW1lKVxuICAgICAgICB2YXIgY3VycmVudFggPSAoY3VycmVudFRpbWUgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0KSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFg7XG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoJ2JsdWUnKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgyKVxuICAgICAgICBpbnNwZWN0b3IubGluZShjdXJyZW50WCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIDMwLCBjdXJyZW50WCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIDYwKTtcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoY3VycmVudFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyA2MCwgY3VycmVudFgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhjdXJyZW50VGltZSksIGN1cnJlbnRYIC0gMjAsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAxNSwgNDAsIDIwKTtcbiAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihpbnNwZWN0b3IuQ0VOVEVSKTtcbiAgICB9XG5cbiAgICBkcmFnKHgsIHkpIHtcblxuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIuanMiLCJpbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcbmltcG9ydCBJbnNwZWN0b3JTdGFnZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclN0YWdlJ1xuaW1wb3J0IEluc3BlY3RvclRpbWVsaW5lIGZyb20gJy4vY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVGltZWxpbmUnXG5pbXBvcnQgSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyIGZyb20gJy4vY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBza2V0Y2goaW5zcGVjdG9yKSB7XG4gICAgbGV0IHN0YXRlID0gbnVsbDtcbiAgICB3aW5kb3cuaW5zcGVjdG9yID0gaW5zcGVjdG9yO1xuICAgIGluc3BlY3Rvci5zZXR1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3BlY3RvckJveCcpLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgY2FudmFzID0gaW5zcGVjdG9yLmNyZWF0ZUNhbnZhcyh3aWR0aCAtIDIwLCAxOTApO1xuICAgICAgICBjYW52YXMubW91c2VNb3ZlZChtb3VzZU1vdmVkKTtcbiAgICAgICAgY2FudmFzLm1vdXNlUHJlc3NlZChtb3VzZVByZXNzZWQpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQ2FudmFzJywgY2FudmFzKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckNhbnZhc0hlaWdodCcsIGluc3BlY3Rvci5oZWlnaHQpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQ2FudmFzV2lkdGgnLCBpbnNwZWN0b3Iud2lkdGgpO1xuICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IuY2FudmFzLmluc3RhbmNlLnBhcmVudCgnaW5zcGVjdG9yJyk7XG4gICAgICAgIHZhciBzdGFnZSA9IG5ldyBJbnNwZWN0b3JTdGFnZSgpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yU3RhZ2UnLCBzdGFnZSk7XG4gICAgICAgIHZhciB0aW1lbGluZSA9IG5ldyBJbnNwZWN0b3JUaW1lbGluZSgwLCAxODApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yVGltZWxpbmUnLCB0aW1lbGluZSk7XG4gICAgICAgIHZhciB2aWRlb1RpbWVNYXJrZXIgPSBuZXcgSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyKCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JWaWRlb01hcmtlcicsIHZpZGVvVGltZU1hcmtlcik7XG5cbiAgICAgICAgaW5zcGVjdG9yLmNvbG9yTW9kZShpbnNwZWN0b3IuUkdCLCAyNTUsIDI1NSwgMjU1LCAxMDApO1xuXG4gICAgICAgIGluc3BlY3Rvci5mcmFtZVJhdGUoMTApO1xuICAgICAgICBpbnNwZWN0b3Iubm9Mb29wKCk7XG4gICAgfTtcblxuICAgIGluc3BlY3Rvci5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnN0YWdlLmluc3RhbmNlLmRyYXcoKTtcbiAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoKSB7XG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmluc3RhbmNlLmRyYXcoKTtcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmRyYXdBY3Rpb25zKCk7XG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnZpZGVvTWFya2VyLmluc3RhbmNlLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVkKCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UubW91c2VPdmVyQWN0aW9uKGluc3BlY3Rvci5tb3VzZVgsIGluc3BlY3Rvci5tb3VzZVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VQcmVzc2VkKCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UubW91c2VQcmVzc2VkQWN0aW9uKGluc3BlY3Rvci5tb3VzZVgsIGluc3BlY3Rvci5tb3VzZVkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnNwZWN0b3Iuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5zcGVjdG9yLm5vTG9vcCgpO1xuICAgIH1cblxuICAgIGluc3BlY3Rvci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5zcGVjdG9yLmxvb3AoKTtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvaW5zcGVjdG9yU2tldGNoLmpzIiwiaW1wb3J0IFRvdWNoIGZyb20gJy4uL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaCdcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbidcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzZXR1cCgpe1xuXG4gICAgICAgIHZhciBhY3Rpb24gPSBuZXcgQWN0aW9uKDAsIDYwLCB7XG4gICAgICAgICAgICBcImhzbFwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcImxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcImFcIjogMX0sXG4gICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcbiAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcbiAgICAgICAgICAgIFwiaHN2XCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwidlwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFwiYVwiOiAxfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBUb3VjaCgwLCAxMjAsICdUb3VjaCBFeGFtcGxlJywge1xuICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxuICAgICAgICAgICAgXCJoZXhcIjogXCIjREJERjAwXCIsXG4gICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXG4gICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXG4gICAgICAgIH0sIFthY3Rpb25dKTtcblxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL3NwZWNzL3RvdWNoZXNTcGVjLmpzIiwiaW1wb3J0IFN0YWdlIGZyb20gJy4vY29tcG9uZW50cy91aS9TdGFnZSdcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvVGltZWxpbmUnXG5pbXBvcnQgVG91Y2hNYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50cy90b3VjaGVzL1RvdWNoTWFuYWdlcidcbmltcG9ydCBWaWRlb1RpbWVNYXJrZXIgZnJvbSAnLi9jb21wb25lbnRzL3VpL1ZpZGVvVGltZU1hcmtlcidcbmltcG9ydCBUb3VjaFNwZWMgZnJvbSAnLi9zcGVjcy90b3VjaGVzU3BlYydcbmltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBza2V0Y2gocCkge1xuICAgIGxldCBzdGF0ZSA9IG51bGw7XG4gICAgd2luZG93LnAgPSBwO1xuICAgIHAuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZUJveCcpLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgY2FudmFzID0gcC5jcmVhdGVDYW52YXMod2lkdGggLSAyMCwgMTMwKTtcbiAgICAgICAgY2FudmFzLm1vdXNlTW92ZWQobW91c2VNb3ZlZCk7XG4gICAgICAgIGNhbnZhcy5tb3VzZVByZXNzZWQobW91c2VQcmVzc2VkKTtcbiAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0Q2FudmFzJywgY2FudmFzKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEhlaWdodCcsIHAuaGVpZ2h0KTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFdpZHRoJywgcC53aWR0aCk7XG4gICAgICAgIHN0YXRlLmNhbnZhcy5pbnN0YW5jZS5wYXJlbnQoJ3RpbWVsaW5lJyk7XG4gICAgICAgIHZhciBzdGFnZSA9IG5ldyBTdGFnZSgpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0U3RhZ2UnLCBzdGFnZSk7XG4gICAgICAgIHZhciB0aW1lbGluZSA9IG5ldyBUaW1lbGluZSgwLCAxMjApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmUnLCB0aW1lbGluZSk7XG4gICAgICAgIHZhciB0b3VjaE1hbmFnZXIgPSBuZXcgVG91Y2hNYW5hZ2VyKFsvKlRvdWNoU3BlYy5zZXR1cCgpKi9dKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRvdWNoTWFuYWdlcicsIHRvdWNoTWFuYWdlcik7XG4gICAgICAgIHZhciB2aWRlb1RpbWVNYXJrZXIgPSBuZXcgVmlkZW9UaW1lTWFya2VyKCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRWaWRlb01hcmtlcicsIHZpZGVvVGltZU1hcmtlcik7XG5cbiAgICAgICAgc3RhdGUuc3RhZ2UuaW5zdGFuY2Uuc2V0dXAoKTtcbiAgICAgICAgcC5jb2xvck1vZGUocC5SR0IsIDI1NSwgMjU1LCAyNTUsIDEwMClcblxuICAgICAgICBjb25maWdCdXR0b25zKCk7XG4gICAgICAgIHAuZnJhbWVSYXRlKDEwKTtcbiAgICB9O1xuXG4gICAgcC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGF0ZS5zdGFnZS5pbnN0YW5jZS5kcmF3KCk7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmluc3RhbmNlLmRyYXcoKTtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLmRyYXcoKTtcbiAgICAgICAgc3RhdGUudmlkZW9NYXJrZXIuaW5zdGFuY2UuZHJhdygpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb25maWdCdXR0b25zKCkge1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbUluKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciArIDEpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbU91dChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciA+IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgLSAxKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbml0aWFsaXplZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZWQoKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5tb3VzZU92ZXJUb3VjaChwLm1vdXNlWCwgcC5tb3VzZVkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUudGltZWxpbmUuaW5zdGFuY2UubW91c2VPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcC5tb3VzZURyYWdnZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZS5kcmFnKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbW91c2VQcmVzc2VkKCkge1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UubW91c2VQcmVzc2VkVG91Y2gocC5tb3VzZVgsIHAubW91c2VZKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm9sb29wJyk7XG4gICAgICAgIHAubm9Mb29wKCk7XG4gICAgfVxuXG4gICAgcC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvb3AnKTtcbiAgICAgICAgcC5sb29wKCk7XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL3RpbWVsaW5lU2tldGNoLmpzIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgcGxheWVyUmVhZHkoc3RhdGUsIHJlYWR5KXtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllclJlYWR5Jyk7XG4gICAgICAgIHN0YXRlLnBsYXllclJlYWR5ID0gcmVhZHk7XG4gICAgICAgIHJldHVybiByZWFkeTtcbiAgICB9LFxuICAgIHNldENhbnZhcyhzdGF0ZSwgaW5zdGFuY2Upe1xuICAgICAgICBzdGF0ZS5jYW52YXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmUoc3RhdGUsIGluc3RhbmNlKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0VG91Y2hNYW5hZ2VyKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRTdGFnZShzdGF0ZSwgaW5zdGFuY2Upe1xuICAgICAgICBzdGF0ZS5zdGFnZS5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRQbGF5ZXIoc3RhdGUsIGluc3RhbmNlKXtcbiAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFZpZGVvTWFya2VyKHN0YXRlLCBpbnN0YW5jZSl7XG4gICAgICAgIHN0YXRlLnZpZGVvTWFya2VyLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFdpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVXaWR0aCcsIHdpZHRoKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvcldpZHRoJywgd2lkdGgpO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfSxcbiAgICBzZXRIZWlnaHQoc3RhdGUsIGhlaWdodCl7XG4gICAgICAgIHN0YXRlLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZVdpZHRoKHN0YXRlLCB3aWR0aCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lSGlkZShzdGF0ZSwgaGlkZSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmhpZGUgPSBoaWRlO1xuICAgICAgICByZXR1cm4gaGlkZTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lSGVpZ2h0KHN0YXRlLCBoZWlnaHQpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUVuZFknLCBzdGF0ZS50aW1lbGluZS5zdGFydFkgKyBoZWlnaHQpO1xuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVNb3VzZU92ZXIoc3RhdGUsIG1vdXNlT3Zlcil7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmlzTW91c2VPdmVyID0gbW91c2VPdmVyO1xuICAgICAgICByZXR1cm4gbW91c2VPdmVyO1xuICAgIH0sXG4gICAgc2V0VGltZWxpbmVTdGFydFRpbWUoc3RhdGUsIHN0YXJ0VGltZSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0VGltZTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lU3RhcnRZKHN0YXRlLCBzdGFydFkpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5zdGFydFkgPSBzdGFydFk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZU1pbnV0ZXNZJywgc3RhcnRZICsgNSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVNlY29uZHNZJywgc3RhcnRZICsgNTUpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVBeGlzWScsIHN0YXJ0WSArIDYwKTtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWScsIHN0YXJ0WSArIHN0YXRlLnRpbWVsaW5lLmhlaWdodCk7XG4gICAgICAgIHJldHVybiBzdGFydFk7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZUF4aXNZKHN0YXRlLCBheGlzWSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmF4aXNZID0gYXhpc1k7XG4gICAgICAgIHJldHVybiBheGlzWTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lRW5kWShzdGF0ZSwgZW5kWSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmVuZFkgPSBlbmRZO1xuICAgICAgICByZXR1cm4gZW5kWTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lU3RhcnRYKHN0YXRlLCBzdGFydFgpe1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5zdGFydFggPSBzdGFydFg7XG4gICAgICAgIHJldHVybiBzdGFydFg7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZUVuZFgoc3RhdGUsIGVuZFgpe1xuICAgICAgICBlbmRYID0gKHN0YXRlLnBsYXllci5kdXJhdGlvbiAtIHN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiBzdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCArIDMwO1xuICAgICAgICBzdGF0ZS50aW1lbGluZS5lbmRYID0gZW5kWDtcbiAgICAgICAgcmV0dXJuIGVuZFg7XG4gICAgfSxcbiAgICBzZXRUaW1lbGluZU1pbnV0ZXNZKHN0YXRlLCBtaW51dGVzWSl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLm1pbnV0ZXNZID0gbWludXRlc1k7XG4gICAgICAgIHJldHVybiBtaW51dGVzWTtcbiAgICB9LFxuICAgIHNldFRpbWVsaW5lU2Vjb25kc1koc3RhdGUsIHNlY29uZHNZKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2Vjb25kc1kgPSBzZWNvbmRzWTtcbiAgICAgICAgcmV0dXJuIHNlY29uZHNZO1xuICAgIH0sXG4gICAgc2V0U2hvd1NlY29uZHMoc3RhdGUsIHNob3dTZWNvbmRzKXtcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2hvd1NlY29uZHMgPSBzaG93U2Vjb25kcztcbiAgICAgICAgcmV0dXJuIHNob3dTZWNvbmRzO1xuICAgIH0sXG4gICAgc2V0U2hvd1NlY29uZHNJbnRlcnZhbChzdGF0ZSwgc2hvd1NlY29uZHNJbnRlcnZhbCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnNob3dTZWNvbmRzSW50ZXJ2YWwgPSBzaG93U2Vjb25kc0ludGVydmFsO1xuICAgICAgICByZXR1cm4gc2hvd1NlY29uZHNJbnRlcnZhbDtcbiAgICB9LFxuICAgIHNldFpvb20oc3RhdGUsIHpvb20pe1xuICAgICAgICBpZiAoc3RhdGUucGxheWVyLmR1cmF0aW9uID4gNDIwKSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5pbml0aWFsWm9vbUZhY3RvciA9IE1hdGguZmxvb3Ioc3RhdGUucGxheWVyLmR1cmF0aW9uIC8gNDIwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAhPSB6b29tKSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoem9vbSA8IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID0gc3RhdGUudGltZWxpbmUuaW5pdGlhbFpvb21GYWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID0gem9vbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gem9vbTtcbiAgICB9LFxuICAgIHNldFNlY29uZFdpZHRoKHN0YXRlLCBzZWNvbmRXaWR0aCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoID0gc2Vjb25kV2lkdGg7XG4gICAgICAgIHJldHVybiBzZWNvbmRXaWR0aDtcbiAgICB9LFxuICAgIHNldENvbFdpZHRoKHN0YXRlLCBjb2xXaWR0aCl7XG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoID0gY29sV2lkdGg7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTaG93U2Vjb25kc0ludGVydmFsJywgY29sV2lkdGggPiA2MCk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRTaG93U2Vjb25kcycsIGNvbFdpZHRoID4gOTApO1xuICAgICAgICBkaXNwYXRjaCgnc2V0U2Vjb25kV2lkdGgnLCBjb2xXaWR0aCAvIDEwKVxuICAgICAgICByZXR1cm4gY29sV2lkdGg7XG4gICAgfSxcbiAgICBzZXREdXJhdGlvbihzdGF0ZSwgZHVyYXRpb24pe1xuICAgICAgICBzdGF0ZS5wbGF5ZXIuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWCcsIDApO1xuICAgICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgfSxcbiAgICBzZXRDdXJyZW50VGltZShzdGF0ZSwgY3VycmVudFRpbWUpe1xuICAgICAgICBzdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUaW1lO1xuICAgIH0sXG5cbiAgICBzZXRJbml0aWFsaXplZChzdGF0ZSwgaW5pdGlhbGl6ZWQpe1xuICAgICAgICBzdGF0ZS5pbml0aWFsaXplZCA9IGluaXRpYWxpemVkO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZWQ7XG4gICAgfSxcbiAgICBzZXRUb3VjaGVzKHN0YXRlLCB0b3VjaGVzKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMgPSB0b3VjaGVzO1xuICAgICAgICByZXR1cm4gdG91Y2hlcztcbiAgICB9LFxuICAgIHNldFNlbGVjdGVkVG91Y2goc3RhdGUsIHRvdWNoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2ggPSB0b3VjaDtcbiAgICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0sXG4gICAgYWRkVG91Y2goc3RhdGUsIHRvdWNoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMucHVzaCh0b3VjaCk7XG4gICAgICAgIHJldHVybiB0b3VjaDtcbiAgICB9LFxuICAgIGVkaXRUb3VjaChzdGF0ZSwgdG91Y2gpe1xuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09IHRvdWNoLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uc3RhcnQgPSB0b3VjaC5zdGFydDtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLmVuZCA9IHRvdWNoLmVuZDtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLmNvbG9yID0gdG91Y2guY29sb3I7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2luZGV4XS50ZXh0ID0gdG91Y2gudGV4dDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLmFjdGlvbnNbaV0uY29sb3IgPSBfLmNsb25lRGVlcCh0b3VjaC5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0sXG4gICAgcmVtb3ZlVG91Y2goc3RhdGUsIHRvdWNoKXtcbiAgICAgICAgdmFyIGluZGV4ID0gXy5maW5kSW5kZXgoc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICByZXR1cm4gby5pZCA9PSB0b3VjaC5pZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdWNoO1xuICAgIH0sXG5cblxuICAgIC8vaW5zcGVjdG9yXG4gICAgc2V0SW5zcGVjdG9yKHN0YXRlLCBpbnNwZWN0b3Ipe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLmluc3RhbmNlID0gaW5zcGVjdG9yO1xuICAgICAgICByZXR1cm4gaW5zcGVjdG9yO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yV2lkdGgoc3RhdGUsIHdpZHRoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JIZWlnaHQoc3RhdGUsIGhlaWdodCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yRW5kWScsIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgaGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yQ2FudmFzKHN0YXRlLCBjYW52YXMpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLmNhbnZhcy5pbnN0YW5jZSA9IGNhbnZhcztcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclZpZGVvTWFya2VyKHN0YXRlLCB2aWRlb01hcmtlcil7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudmlkZW9NYXJrZXIuaW5zdGFuY2UgPSB2aWRlb01hcmtlcjtcbiAgICAgICAgcmV0dXJuIHZpZGVvTWFya2VyO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yQ2FudmFzV2lkdGgoc3RhdGUsIHdpZHRoKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yQ2FudmFzSGVpZ2h0KHN0YXRlLCBoZWlnaHQpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JTdGFnZShzdGF0ZSwgc3RhZ2Upe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnN0YWdlLmluc3RhbmNlID0gc3RhZ2U7XG4gICAgICAgIHJldHVybiBzdGFnZTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclRpbWVsaW5lKHN0YXRlLCB0aW1lbGluZSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuaW5zdGFuY2UgPSB0aW1lbGluZTtcbiAgICAgICAgcmV0dXJuIHRpbWVsaW5lO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yU3RhcnRUaW1lKHN0YXRlLCBzdGFydFRpbWUpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0VGltZTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvclN0YXJ0WShzdGF0ZSwgc3RhcnRZKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgPSBzdGFydFk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JNaW51dGVzWScsIHN0YXJ0WSArIDUpO1xuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yU2Vjb25kc1knLCBzdGFydFkgKyA1NSk7XG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JBeGlzWScsIHN0YXJ0WSArIDYwKTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0WTtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckF4aXNZKHN0YXRlLCBheGlzWSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kgPSBheGlzWTtcbiAgICAgICAgcmV0dXJuIGF4aXNZO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yRW5kWShzdGF0ZSwgZW5kWSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSA9IGVuZFk7XG4gICAgICAgIHJldHVybiBlbmRZO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yU3RhcnRYKHN0YXRlLCBzdGFydFgpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgICAgICAgcmV0dXJuIHN0YXJ0WDtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckVuZFgoc3RhdGUsIGVuZFgpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFggPSBlbmRYO1xuICAgICAgICByZXR1cm4gZW5kWDtcbiAgICB9LFxuICAgIHNldEluc3BlY3Rvck1pbnV0ZXNZKHN0YXRlLCBtaW51dGVzWSl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUubWludXRlc1kgPSBtaW51dGVzWTtcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXNZO1xuICAgIH0sXG4gICAgc2V0SW5zcGVjdG9yU2Vjb25kc1koc3RhdGUsIHNlY29uZHNZKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRzWSA9IHNlY29uZHNZO1xuICAgICAgICByZXR1cm4gc2Vjb25kc1k7XG4gICAgfSxcbiAgICBzZXRJbnNwZWN0b3JTZWNvbmRXaWR0aChzdGF0ZSwgc2Vjb25kV2lkdGgpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoID0gc2Vjb25kV2lkdGg7XG4gICAgICAgIHJldHVybiBzZWNvbmRXaWR0aDtcbiAgICB9LFxuICAgIHNldEluc3BlY3RvckNvbFdpZHRoKHN0YXRlLCBjb2xXaWR0aCl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuY29sV2lkdGggPSBjb2xXaWR0aDtcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclNlY29uZFdpZHRoJywgY29sV2lkdGggLyAxMCk7XG4gICAgICAgIHJldHVybiBjb2xXaWR0aDtcbiAgICB9LFxuICAgIHNldFNlbGVjdGVkQWN0aW9uKHN0YXRlLCBhY3Rpb24pe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbiAgICByZWNvcmRpbmdUb3VjaChzdGF0ZSwgcmVjb3JkaW5nKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ1RvdWNoID0gcmVjb3JkaW5nO1xuICAgICAgICByZXR1cm4gcmVjb3JkaW5nO1xuICAgIH0sXG4gICAgcmVjb3JkaW5nQWN0aW9uKHN0YXRlLCByZWNvcmRpbmcpe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nQWN0aW9uID0gcmVjb3JkaW5nO1xuICAgICAgICByZXR1cm4gcmVjb3JkaW5nO1xuICAgIH0sXG4gICAgYWRkQWN0aW9uKHN0YXRlLCBhY3Rpb24pe1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuICAgIGFkZExlZnRUYWcoc3RhdGUsIHRhZyl7XG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbi5sZWZ0VGFncy5wdXNoKHRhZyk7XG4gICAgICAgIHJldHVybiB0YWc7XG4gICAgfSxcbiAgICBhZGRSaWdodFRhZyhzdGF0ZSwgdGFnKXtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uLnJpZ2h0VGFncy5wdXNoKHRhZyk7XG4gICAgICAgIHJldHVybiB0YWc7XG4gICAgfSxcbiAgICBlZGl0QWN0aW9uKHN0YXRlLCBhY3Rpb24pe1xuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgcmV0dXJuIG8uaWQgPT0gYWN0aW9uLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2luZGV4XS5zdGFydCA9IGFjdGlvbi5zdGFydDtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9uc1tpbmRleF0uZW5kID0gYWN0aW9uLmVuZDtcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9uc1tpbmRleF0uY29sb3IgPSBhY3Rpb24uY29sb3I7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbiAgICByZW1vdmVBY3Rpb24oc3RhdGUsIGFjdGlvbil7XG4gICAgICAgIHZhciBpbmRleCA9IF8uZmluZEluZGV4KHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICByZXR1cm4gby5pZCA9PSBhY3Rpb24uaWRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9hY3Rpb25zLmpzIiwiZXhwb3J0IGNvbnN0IHN0YXRlID0ge1xuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBwbGF5ZXJSZWFkeTogZmFsc2UsXG4gICAgdG91Y2hNYW5hZ2VyOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICB0b3VjaGVzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRUb3VjaDogbnVsbCxcbiAgICAgICAgcmVjb3JkaW5nQWN0aW9uOiBmYWxzZSxcbiAgICAgICAgcmVjb3JkaW5nVG91Y2g6IGZhbHNlLFxuICAgICAgICBpbnNwZWN0b3I6IHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZGVvTWFya2VyOiB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFnZToge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZWxpbmU6IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICAgICAgICAgIHNlY29uZFdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGNvbFdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGVuZFk6IDAsXG4gICAgICAgICAgICAgICAgbWludXRlc1k6IDAsXG4gICAgICAgICAgICAgICAgc2Vjb25kc1k6IDAsXG4gICAgICAgICAgICAgICAgYXhpc1k6IDAsXG4gICAgICAgICAgICAgICAgZW5kWDogMCxcbiAgICAgICAgICAgICAgICBzdGFydFg6IDMwLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGltZWxpbmU6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBzdGFydFRpbWU6IDAsXG4gICAgICAgIHNob3dTZWNvbmRzOiBmYWxzZSxcbiAgICAgICAgc2hvd1NlY29uZHNJbnRlcnZhbDogZmFsc2UsXG4gICAgICAgIHpvb21GYWN0b3I6IDEsXG4gICAgICAgIGluaXRpYWxab29tRmFjdG9yOiAxLFxuICAgICAgICBzZWNvbmRXaWR0aDogMCxcbiAgICAgICAgY29sV2lkdGg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgZW5kWTogMCxcbiAgICAgICAgbWludXRlc1k6IDAsXG4gICAgICAgIHNlY29uZHNZOiAwLFxuICAgICAgICBheGlzWTogMCxcbiAgICAgICAgZW5kWDogMCxcbiAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICBpc01vdXNlT3ZlcjogZmFsc2UsXG4gICAgICAgIHpvb21GYWN0b3JDaGFuZ2U6IGZhbHNlXG4gICAgfSxcbiAgICBzdGFnZToge1xuICAgICAgICBpbnN0YW5jZTogbnVsbFxuICAgIH0sXG4gICAgcGxheWVyOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgY3VycmVudFRpbWU6IDBcbiAgICB9LFxuICAgIHZpZGVvTWFya2VyOiB7XG4gICAgICAgIGluc3RhbmNlOiBudWxsXG4gICAgfSxcbiAgICBjYW52YXM6IHtcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL3N0b3JlLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB1cGRhdGUoaWQsIHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wdXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICcvdG91Y2hlcy8nLCBzY291dGluZylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcbiAgICB9LFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1RvdWNoU2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0e1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2hvd0Vycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGVycm9yIGluIHJlc3BvbnNlLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzLmhhc093blByb3BlcnR5KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JzW2Vycm9yXS5mb3JFYWNoKCh2YWxpZGF0aW9uRXJyb3IpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdCh2YWxpZGF0aW9uRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRyb290LmVycm9yVG9hc3QocmVzcG9uc2UuZXJyb3JzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZXJyb3JQcmVzZW50ZXIuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pbnNwZWN0b3ItaW5mbyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmluc3BlY3Rvci1pbmZvIC5pbnNwZWN0b3ItaW5mby0tdGl0bGUge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmF0aGxldGUtbWVudSAuZHJvcGRvd24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbi5hdGhsZXRlLW1lbnUgLmF0aGxldGUtbWVudS10aXRsZSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5hdGhsZXRlLW1lbnUgLmF0aGxldGUtbWVudS1sZWZ0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4uYXRobGV0ZS1tZW51IC5hdGhsZXRlLW1lbnUtcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNTc5MmY1NmMhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAzMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFncyBhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcXG4gIG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xcbn1cXG4udGFncy1saXN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50YWdzLWxpc3QgLmxhYmVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4udGFncy1saXN0IC5sYWJlbCAuY2xvc2Uge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi50YWdzLWxpc3QgZGl2LFxcbi5ndS1taXJyb3Ige1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcbi50YWdzLWxpc3QgZGl2IC5sYWJlbCxcXG4gIC5ndS1taXJyb3IgLmxhYmVsIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi50YWdzLWxpc3QgZGl2IHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIGN1cnNvcjogZ3JhYjtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4udGFncy1saXN0IGRpdjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5ndS1taXJyb3Ige1xcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcXFwiO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTgwKTtcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XFxufVxcbi5ndS1taXJyb3IgLmxhYmVsIC5jbG9zZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ndS1oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmd1LXVuc2VsZWN0YWJsZSB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5ndS10cmFuc2l0IHtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcXFwiO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcXG59XFxuLmd1LXRyYW5zaXQgLmNsb3NlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRhZ3MtbGlzdCAuZXgtbW92ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcXG59XFxuLnRhZ3MtbGlzdC5leC1vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuLmhhbmRsZSB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNDIyM2Y1IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAzMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jdmlkZW8tY2FudmFzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlPzM5MjY1N2EwXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFXQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxPQUFBO0lBQ0Esb0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwicGxheWVyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8dmlkZW8gcmVmPVxcXCJwbGF5ZXJcXFwiXFxuICAgICAgICAgICAgICAgY2xhc3M9XFxcInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW5cXFwiXFxuICAgICAgICAgICAgICAgY29udHJvbHMgcHJlbG9hZD1cXFwiYXV0b1xcXCJcXG4gICAgICAgICAgICAgICA6cG9zdGVyPVxcXCJwb3N0ZXJcXFwiXFxuICAgICAgICAgICAgICAgOmRhdGEtc2V0dXA9XFxcInN0clNvdXJjZVxcXCJcXG4gICAgICAgID48L3ZpZGVvPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcbjxzdHlsZT5cXG4gICAgI3ZpZGVvLWNhbnZhcyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB7ZGlzcGF0Y2gsIGdldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xcblxcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIGRhdGEoKXtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IHt9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgc291cmNlOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgcG9zdGVyOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb2Zmc2V0OiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBmYWxzZVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBzdHJTb3VyY2UoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc291cmNlKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBtb3VudGVkKCl7XFxuICAgICAgICAgICAgdGhpcy5pbml0UGxheWVyKHRoaXMuc291cmNlKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgYXBpKCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllclxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgaW5pdFBsYXllcihzb3VyY2Upe1xcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuc291cmNlKTtcXG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IHtcXG4gICAgICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2Uuc291cmNlc1swXSxcXG4gICAgICAgICAgICAgICAgICAgIHRlY2hPcmRlcjogWyd5b3V0dWJlJ10sXFxuICAgICAgICAgICAgICAgICAgICBwbGF5YmFja1JhdGVzOiBbMC4yNSwgMC41LCAxLCAxLjUsIDJdLFxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQcm9ncmVzczoge30sXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWJMb29wUGx1Z2luOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wSWZCZWZvcmVTdGFydDogZmFsc2UsIC8vYWxsb3cgdmlkZW8gdG8gcGxheSBub3JtYWxseSBiZWZvcmUgdGhlIGxvb3Agc2VjdGlvbj8gZGVmYXVsdHMgdG8gdHJ1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29vcElmQWZ0ZXJFbmQ6IHRydWUsIC8vIGRlZmF1bHRzIHRvIHRydWVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VBZnRlckxvb3Bpbmc6IGZhbHNlLCAgICAgICAvL2lmIHRydWUsIGFmdGVyIGxvb3BpbmcgdmlkZW8gd2lsbCBwYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VCZWZvcmVMb29waW5nOiBmYWxzZSwgICAgICAvL2lmIHRydWUsIGJlZm9yZSBsb29waW5nIHZpZGVvIHdpbGwgcGF1c2UuIERlZmF1bHRzIHRvIGZhbHNlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnM6IGZhbHNlLCAgLy9kZWZhdWx0cyB0byB0cnVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9O1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQuc3RhcnQpIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wbHVnaW5zLmRuY29mZnNldCA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldDogdGhpcy5vZmZzZXQuc3RhcnQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0OiB0aGlzLm9mZnNldC5lbmRcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy4kcmVmcy5wbGF5ZXIsIGNvbmZpZyk7XFxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRQbGF5ZXInLCB0aGlzLnBsYXllcik7XFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiBkdXJhdGlvblNldHRlcihldmVudCkge1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUucGxheWVyLmR1cmF0aW9uKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldER1cmF0aW9uJywgc3RhdGUucGxheWVyLmluc3RhbmNlLmR1cmF0aW9uKCkpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgMSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnBsYXllci5kdXJhdGlvbikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3BsYXllclJlYWR5JywgdHJ1ZSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlKDEpO1xcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsICgpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEN1cnJlbnRUaW1lJywgdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk0NTc1OTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDMxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWcge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiAjNzE3MTcxO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtYXJnaW46IDAgM3B4IDZweCAwO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YWdzIC50YWc6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICMwOEM7XFxufVxcbi50YWdzIC50YWcucHJpbWFyeSB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xcbiAgICBib3JkZXItY29sb3I6ICMzNTdFQkRcXG59XFxuLnRhZ3MgLnRhZy5zdWNjZXNzIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0I4NUM7XFxuICAgIGJvcmRlci1jb2xvcjogIzRDQUU0Q1xcbn1cXG4udGFncyAudGFnLmluZm8ge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNDZCOERBXFxufVxcbi50YWdzIC50YWcud2FybmluZyB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xcbiAgICBib3JkZXItY29sb3I6ICNFRUEyMzZcXG59XFxuLnRhZ3MgLnRhZy5kYW5nZXIge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjRDQzRjNBXFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZT8wYjcxNDk1OFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBT0E7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUVBLGlEQUFBO0lBQ0Esd0NBQUE7SUFJQSxnQ0FBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0lBQ0EscUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidGFnLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDx0YWctZHJvcGRvd24gdi1pZj1cXFwidGFnLmRyb3Bkb3duXFxcIiB2LW9uOm9wdGlvbi1jbGlja2VkPVxcXCJkcm9wZG93bk9wdGlvbkNsaWNrZWRcXFwiIDp0YWc9XFxcInRhZ1xcXCI+PC90YWctZHJvcGRvd24+XFxuICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJ0YWctZHJvcGRvd25cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIiBidG4gdGFnXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcInRhZ0NsaWNrZWRcXFwiIDpjbGFzcz1cXFwiJ2JnLScrdGFnLmNvbG9yXFxcIj57e3RhZy5uYW1lfX08L2E+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAudGFnIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIGNvbG9yOiAjNzE3MTcxO1xcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgxODAsIDE4MCwgMTgwLCAwLjEpO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIG1hcmdpbjogMCAzcHggNnB4IDA7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA4QztcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnLnByaW1hcnkge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzU3RUJEXFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZy5zdWNjZXNzIHtcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRDQUU0Q1xcbiAgICB9XFxuXFxuICAgIC50YWdzIC50YWcuaW5mbyB7XFxuICAgICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XFxuICAgICAgICBib3JkZXItY29sb3I6ICM0NkI4REFcXG4gICAgfVxcblxcbiAgICAudGFncyAudGFnLndhcm5pbmcge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRUVBMjM2XFxuICAgIH1cXG5cXG4gICAgLnRhZ3MgLnRhZy5kYW5nZXIge1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRDQzRjNBXFxuICAgIH1cXG48L3N0eWxlPlxcbjxzY3JpcHQ+XFxuICAgIGltcG9ydCB0YWdEcm9wZG93biBmcm9tICcuL3RhZ0Ryb3Bkb3duLnZ1ZSdcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHRhZzoge31cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAgICAgdGFnRHJvcGRvd25cXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25DbGlja2VkKHRhZyl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1jbGlja2VkJywgdGFnKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdGFnQ2xpY2tlZCgpe1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctY2xpY2tlZCcsIHRoaXMudGFnKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXG4vLyBtb2R1bGUgaWQgPSAzMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwidG91Y2hlc0xpc3QudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIm5ld1RvdWNoRm9ybS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnZ1ZS1jb2xvcl9fY29tcGFjdCB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/M2NmMDRkZDlcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZTQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcIm5ld1RvdWNoRm9ybS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIHYtb246c3VibWl0LnByZXZlbnQ9XFxcIm9uU3VibWl0XFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcXFwiIHYtaWY9XFxcIm9wZW5cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LXRpdGxlXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy10aXRsZVxcXCIgbmFtZT1cXFwibmV3LXRpdGxlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC50ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cXFwicmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJUaXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC50ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XFxcInRvdWNoLmNvbG9yXFxcIiBAY2hhbmdlLWNvbG9yPVxcXCJvbkNoYW5nZUNvbG9yXFxcIj48L2NvbXBhY3QtcGlja2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1zdGFydFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCAoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1zdGFydFxcXCIgbmFtZT1cXFwibmV3LXN0YXJ0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XFxcInRvdWNoLnN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVxcXCJyZXF1aXJlZHxudW1lcmljXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5zdGFydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1zdGFydC1mbXRcXFwiIG5hbWU9XFxcIm5ldy1zdGFydC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic3RhcnRGbXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC5zdGFydCcpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guZW5kJykgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LWVuZFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1lbmRcXFwiIG5hbWU9XFxcIm5ldy1lbmRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cXFwidG91Y2guZW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVxcXCJyZXF1aXJlZHxudW1lcmljXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVxcXCJFbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInRvdWNoLmVuZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1lbmQtZm10XFxcIiBuYW1lPVxcXCJuZXctZW5kLWZtdFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJlbmRGbXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guZW5kJykgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiB2LWlmPVxcXCJjb2xsaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPsOXPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWJhblxcXCI+PC9pPiBUb3VjaGVzIGNhbnQgb3ZlcmxhcCE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB0b3VjaCB0aGF0IHlvdSB3YW50IHRvIGFkZCBvdmVybGFwIHdpdGg6XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcInRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwidG91Y2gucHJldmlvdXMuaGFzT3duUHJvcGVydHkoJ2lkJylcXFwiPnt7dG91Y2gucHJldmlvdXMudGV4dH19OiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24ge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5zdGFydCl9fSBhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLnByZXZpb3VzLmVuZCl9fTwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVxcXCJ0b3VjaC5jdXJyZW50Lmhhc093blByb3BlcnR5KCdpZCcpXFxcIj57e3RvdWNoLmN1cnJlbnQudGV4dH19OiB0aGF0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzIG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5jdXJyZW50LnN0YXJ0KX19IGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dG9ISE1NU1ModG91Y2guY3VycmVudC5lbmQpfX08L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwiZW5kSW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj7DlzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT4gVmFsaWRhdGlvbiBFcnJvciE8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBlbmQgb2YgdGhlIHRvdWNoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBzdGFydFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiB0ZXh0LXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5BZGQgVG91Y2g8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcImNsb3NlXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcblxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcXG4gICAgaW1wb3J0IHtDb21wYWN0fSBmcm9tICd2dWUtY29sb3InO1xcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgb3Blbjoge30sXFxuICAgICAgICAgICAgaW5pdFRvdWNoOiB7XFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImhzbFxcXCI6IHtcXFwiaFxcXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFxcXCJzXFxcIjogMSwgXFxcImxcXFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFxcXCJhXFxcIjogMX0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJoZXhcXFwiOiBcXFwiI0RCREYwMFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJyZ2JhXFxcIjoge1xcXCJyXFxcIjogMjE5LCBcXFwiZ1xcXCI6IDIyMywgXFxcImJcXFwiOiAwLCBcXFwiYVxcXCI6IDEsIFxcXCJhbHBoYVxcXCI6IDUwfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcImhzdlxcXCI6IHtcXFwiaFxcXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFxcXCJzXFxcIjogMSwgXFxcInZcXFwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFxcXCJhXFxcIjogMX0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkdXJhdGlvbjoge30sXFxuICAgICAgICAgICAgc3RhcnQ6IHt9LFxcbiAgICAgICAgICAgIGVuZDoge31cXG4gICAgICAgIH0sXFxuICAgICAgICB3YXRjaDoge1xcbiAgICAgICAgICAgIG9wZW4odmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5pdFRvdWNoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHN0YXJ0KHZhbCl7XFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guc3RhcnQgPSB2YWw7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlbmQodmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5lbmQgPSB2YWxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpZGUoKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpZGUoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gISEocGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpIHx8IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSA+IHBhcnNlSW50KHRoaXMuZHVyYXRpb24pKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGF0YSgpe1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNvbGxpZGU6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogW10sXFxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB0b3VjaDoge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiA3NyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAgICAgc3RhcnRGbXQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGVuZEZtdCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHZhbGlkYXRpb25FbmQoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgICAgICdjb21wYWN0LXBpY2tlcic6IENvbXBhY3QsXFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGNsb3NlKCl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbC1uZXctdG91Y2gnKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIHRvSEhNTVNTKHNlY3MpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sb3IodmFsKXtcXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgY2hlY2tDb2xsaWRlKCl7XFxuICAgICAgICAgICAgICAgIHZhciB0b3VjaHMgPSBnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykudG91Y2hlcy5zbGljZSgwKTtcXG4gICAgICAgICAgICAgICAgdG91Y2hzLnB1c2godGhpcy50b3VjaCk7XFxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gdGhpcy5vdmVybGFwKHRvdWNocyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IG92ZXJsYXAub3ZlcmxhcDtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IG92ZXJsYXAucmFuZ2VzO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb3ZlcmxhcCh0b3VjaHMpe1xcbiAgICAgICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hzLnNvcnQoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XFxuXFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNUaW1lID0gcGFyc2VJbnQocHJldmlvdXMuc3RhcnQpO1xcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgaXMgZWFybGllciB0aGFuIHRoZSBjdXJyZW50XFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJldmlvdXMgdGltZSBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCB0aW1lXFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lID09PSBjdXJyZW50VGltZSkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgZmluYWwgcmVzdWx0c1xcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydGVkUmFuZ2VzLnJlZHVjZSgocmVzdWx0LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcmV2aW91cyByYW5nZVxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gMCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSBhcnJbaWR4IC0gMV07XFxuXFxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYW55IG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0VuZCA9IHBhcnNlSW50KHByZXZpb3VzLmVuZCk7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXJ0ID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XFxuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IChwcmV2aW91c0VuZCA+PSBjdXJyZW50U3RhcnQpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHJlc3VsdFxcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXApIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB5ZXMsIHRoZXJlIGlzIG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQub3ZlcmxhcCA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNwZWNpZmljIHJhbmdlcyB0aGF0IG92ZXJsYXBcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucmFuZ2VzLnB1c2goe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcXG5cXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZWQgdGhlIHJlZHVjZVxcbiAgICAgICAgICAgICAgICB9LCB7b3ZlcmxhcDogZmFsc2UsIHJhbmdlczogW119KTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpO1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJvcnMuYW55KCkpIHtcXG5cXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludChNYXRoLmZsb29yKHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZHVyYXRpb24oKSkpKTtcXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmRJbnZhbGlkKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbGxpZGUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFnLWRyb3Bkb3duIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlP2Y0NGM4NjJjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFjQTtJQUNBLGlDQUFBO0NBQ0FcIixcImZpbGVcIjpcInRhZ0Ryb3Bkb3duLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIHRhZy1kcm9wZG93blxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24tdG9nZ2xlIGJ0biB0YWdcXFwiIDpjbGFzcz1cXFwiJ2JnLScrdGFnLmNvbG9yXFxcIlxcbiAgICAgICAgICAgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgOmlkPVxcXCJpZFxcXCI+e3t0YWcubmFtZX19XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNhcmV0LWRvd25cXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgOmFyaWEtbGFiZWxsZWRieT1cXFwiaWRcXFwiPlxcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwib3B0IGluIHRhZy5vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJjbGlja09wdChvcHQpXFxcIj57e29wdC5uYW1lfX08L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAudGFnLWRyb3Bkb3duIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgdXVpZCBmcm9tICdiYXNlL21peGlucy91dWlkJ1xcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIHByb3BzOiB7XFxuICAgICAgICAgICAgdGFnOiB7fSxcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgaWQ6ICcnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1peGluczogW3V1aWRdLFxcbiAgICAgICAgbW91bnRlZCgpe1xcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlVVVJRCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1ldGhvZHM6IHtcXG4gICAgICAgICAgICBjbGlja09wdChvcHQpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnRhZy5vcHRpb24gPSBvcHQ7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbi1jbGlja2VkJywgdGhpcy50YWcpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02ZjEyNGM5ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImVkaXRUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udnVlLWNvbG9yX19jb21wYWN0IHtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/NTc3YjcxODJcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNRQTtJQUNBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcImVkaXRUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJvblN1Ym1pdFxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2gudGV4dCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudGl0bGUnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy10aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRvdWNoLnRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC50ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJUaXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVGl0bGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC50ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVxcXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctdGl0bGVcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmNvbG9yJyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XFxcInRvdWNoLmNvbG9yXFxcIiBAY2hhbmdlLWNvbG9yPVxcXCJvbkNoYW5nZUNvbG9yXFxcIj48L2NvbXBhY3QtcGlja2VyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1zdGFydFxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3Muc3RhcnQnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LXN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0b3VjaC5zdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC5zdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2guc3RhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctc3RhcnQtZm10XFxcIiBuYW1lPVxcXCJuZXctc3RhcnQtZm10XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInN0YXJ0Rm10XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guc3RhcnQnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctZW5kXFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmQnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LWVuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwidG91Y2guZW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XFxcInRvdWNoLmVuZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12di1hcz1cXFwiRW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW5kXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5lbmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctZW5kLWZtdFxcXCIgbmFtZT1cXFwibmV3LWVuZC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZW5kRm10XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHYtaWY9XFxcImNvbGxpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcImFsZXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+w5c8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWJhblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJyl9fTpcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiY29sbGlkZVRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwiY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IHRvdWNoLmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLHsgdGl0bGU6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLnN0YXJ0KSxlbmQ6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLmVuZCl9KX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwiY29sbGlkZVRvdWNoLmN1cnJlbnQuaWQgIT0gdG91Y2guaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycseyB0aXRsZTpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2guY3VycmVudC50ZXh0LHN0YXJ0OnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LnN0YXJ0KSxlbmQ6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9ISE1NU1MoY29sbGlkZVRvdWNoLmN1cnJlbnQuZW5kKX0pfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIiB2LWlmPVxcXCJlbmRJbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJhbGVydFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPsOXPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZXJyb3InKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudmFsaWRhdGlvbl9lbmRfZ3JlYXRlcicpfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+e3skdCgnc2NvdXRpbmdzLnNhdmUnKX19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJjbG9zZVxcXCI+e3skdCgnc2NvdXRpbmdzLmNhbmNlbCcpfX08L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcblxcbjwvc3R5bGU+XFxuPHNjcmlwdD5cXG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcXG4gICAgaW1wb3J0IHtDb21wYWN0fSBmcm9tICd2dWUtY29sb3InO1xcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnXFxuICAgIGltcG9ydCBzY291dGluZ3NMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzJztcXG5cXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxuICAgICAgICBsb2NhbGVzOiBzY291dGluZ3NMb2NhbGVzLFxcbiAgICAgICAgcHJvcHM6IHtcXG4gICAgICAgICAgICBpbml0VG91Y2g6IHtcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IDc3LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkdXJhdGlvbjoge30sXFxuICAgICAgICB9LFxcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluXSxcXG4gICAgICAgIGNyZWF0ZWQoKXtcXG4gICAgICAgICAgICB0aGlzLnRvdWNoID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbml0VG91Y2gpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHdhdGNoOiB7XFxuICAgICAgICAgICAgJ3RvdWNoLnN0YXJ0JzogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGU7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZVRvdWNoZXMgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICAgICAgdmFyIGNvbGxpZGVSZXN1bHQgPSB0aGlzLmNoZWNrQ29sbGlkZSh0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVUb3VjaGVzID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlVG91Y2hlcztcXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhKCl7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgY29sbGlkZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGNvbGxpZGVUb3VjaGVzOiBbXSxcXG4gICAgICAgICAgICAgICAgZW5kSW52YWxpZDogZmFsc2UsXFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IDc3LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICBzdGFydEZtdCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZW5kRm10KCl7XFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmFsaWRhdGlvbkVuZCgpe1xcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgKyAxO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICAgICAgJ2NvbXBhY3QtcGlja2VyJzogQ29tcGFjdCxcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgY2xvc2UoKXtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsLW5ldy10b3VjaCcsIHRoaXMudG91Y2gpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdG9ISE1NU1Moc2Vjcykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyhzZWNzKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgb25DaGFuZ2VDb2xvcih2YWwpe1xcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmNvbG9yID0gdmFsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvblN1Ym1pdCgpe1xcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKTtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmFueSgpKSB7XFxuXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3VjaC5zdGFydCA+PSB0aGlzLnRvdWNoLmVuZCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IHRydWU7XFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cXG48c3R5bGU+XFxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInRpbWVsaW5lLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lNTZjODA4NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjk0NTc1OTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGxheWVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGxheWVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yOTQ1NzU5MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI5NDU3NTkwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTU3OTJmNTZjIXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNTc5MmY1NmMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW5zcGVjdG9yLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NzkyZjU2Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU3OTJmNTZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1lNTZjODA4NCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGltZWxpbmUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90aW1lbGluZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lNTZjODA4NCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90aW1lbGluZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGltZWxpbmUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWU1NmM4MDg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTU2YzgwODRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGVkaXRUb3VjaEZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWE3NDlkNjAyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTc0OWQ2MDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIpXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbmV3VG91Y2hGb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Y2I4M2QwZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjYjgzZDBkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRvdWNoZXNMaXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NTM5MDM5N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU1MzkwMzk3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDM0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDUwNGRhZWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhZy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi00NTA0ZGFlZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWcudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFnLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NTA0ZGFlZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1MDRkYWVlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcbi8vIG1vZHVsZSBpZCA9IDM0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWdEcm9wZG93bi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmYxMjRjOWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZjEyNGM5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDM0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01ZjQyMjNmNSFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhZ3MudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWY0MjIzZjUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdGFncy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9wZWRyb2dvcnJpbi9Eb2N1bWVudHMvVHJhYmFqby9zcG9ydGVjaDM3L3Nwb3J0ZWNoLXNjb3V0aW5nL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdGFncy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWY0MjIzZjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZjQyMjNmNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdhZG1pbi1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogX3ZtLnRpdGxlLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50IG92ZXJsYXktd3JhcHBlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvdyBpcy1mbGV4XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC02IHBsYXllci1jb250YWluZXJcIlxuICB9LCBbKF92bS5pbml0aWFsaXplZCkgPyBfYygnZG5jLXBsYXllcicsIHtcbiAgICByZWY6IFwicGxheWVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic291cmNlXCI6IF92bS5zb3VyY2VcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTYgdG91Y2hlcy1jb250YWluZXJcIlxuICB9LCBbX2MoJ3RvdWNoZXMtbGlzdCcpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0ucGxheWVyUmVhZHkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJwbGF5ZXJSZWFkeVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWFpbGJveC1jb250cm9scyBjb250cm9sLW1lbnVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uc3RhcnRlZFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnN0YXJ0VG91Y2hcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnZmEtcGxheSc6ICFfdm0uc3RhcnRlZCwgJ2ZhLWNpcmNsZSB0ZXh0LWRhbmdlcic6IF92bS5zdGFydGVkXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5zdGFydGVkID8gX3ZtLiR0KCdzY291dGluZ3MucmVjb3JkaW5nJykgOiBfdm0uJHQoJ3Njb3V0aW5ncy5zdGFydF90b3VjaCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiAhX3ZtLnN0YXJ0ZWRcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5lbmRUb3VjaFxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXN0b3BcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZF90b3VjaCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuLWdyb3VwXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvb2dsZVRpbWVsaW5lXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FsZW5kYXJcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b29nbGVfdGltZWxpbmUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9vZ2xlSW5zcGVjdG9yXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXllXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG9vZ2xlX2luc3BlY3RvcicpKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5lZGl0KSA/IF9jKCdlZGl0LXRvdWNoLWZvcm0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5pdC10b3VjaFwiOiBfdm0udG91Y2gsXG4gICAgICBcImR1cmF0aW9uXCI6IF92bS5kdXJhdGlvblxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2FuY2VsLW5ldy10b3VjaFwiOiBfdm0uY2FuY2VsRWRpdFRvdWNoLFxuICAgICAgXCJhZGQtbmV3LXRvdWNoXCI6IF92bS5zYXZlRWRpdFRvdWNoXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFsoX3ZtLnBsYXllclJlYWR5KSA/IF9jKCdpbnNwZWN0b3InLCB7XG4gICAgcmVmOiBcImluc3BlY3RvclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYXlpbmdcIjogX3ZtLnBsYXlpbmdcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFsoX3ZtLnBsYXllclJlYWR5KSA/IF9jKCd0aW1lbGluZScpIDogX3ZtLl9lKCldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5wbGF5ZXJSZWFkeSksXG4gICAgICBleHByZXNzaW9uOiBcInBsYXllclJlYWR5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc2F2ZVxuICAgIH1cbiAgfSwgW192bS5fdihcIiBcIiArIF92bS5fcyhfdm0uJHQoJ2Zvcm1zLnNhdmUnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1wiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jYW5jZWxcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZm9ybXMuYmFjaycpKSldKV0pXSksIF92bS5fdihcIiBcIiksICghX3ZtLnBsYXllclJlYWR5KSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwib3ZlcmxheVwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIlxuICB9KV0pIDogX3ZtLl9lKCldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTI0Nzc5YjU4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yNDc3OWI1OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2VkaXQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3ZpZGVvJywge1xuICAgIHJlZjogXCJwbGF5ZXJcIixcbiAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29udHJvbHNcIjogXCJcIixcbiAgICAgIFwicHJlbG9hZFwiOiBcImF1dG9cIixcbiAgICAgIFwicG9zdGVyXCI6IF92bS5wb3N0ZXIsXG4gICAgICBcImRhdGEtc2V0dXBcIjogX3ZtLnN0clNvdXJjZVxuICAgIH1cbiAgfSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yOTQ1NzU5MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjk0NTc1OTAhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiAoX3ZtLnRhZy5kcm9wZG93bikgPyBfYygndGFnLWRyb3Bkb3duJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ1wiOiBfdm0udGFnXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJvcHRpb24tY2xpY2tlZFwiOiBfdm0uZHJvcGRvd25PcHRpb25DbGlja2VkXG4gICAgfVxuICB9KSA6IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFnLWRyb3Bkb3duXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIiBidG4gdGFnXCIsXG4gICAgY2xhc3M6ICdiZy0nICsgX3ZtLnRhZy5jb2xvcixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50YWdDbGlja2VkKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50YWcubmFtZSkpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NTA0ZGFlZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcbi8vIG1vZHVsZSBpZCA9IDM1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXNvbGlkIFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbWFwLW1hcmtlclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoZXMnKSkgKyBcIlxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFsoX3ZtLnRvdWNoZXMubGVuZ3RoKSA/IF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b2RvLWxpc3QgdWktc29ydGFibGVcIlxuICB9LCBfdm0uX2woKF92bS50b3VjaGVzKSwgZnVuY3Rpb24odG91Y2gpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIixcbiAgICAgIHN0eWxlOiAoJ2JhY2tncm91bmQ6JyArIHRvdWNoLmNvbG9yLmhleCArICc7IGhlaWdodDoyMHB4OyB3aWR0aDoyMHB4O21hcmdpbi10b3A6IDFweDsnKVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRleHRcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHRvdWNoLnRleHQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc21hbGwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1zdWNjZXNzXCJcbiAgICB9LCBbX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jbG9jay1vXCJcbiAgICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5zdGFydF9hdCcsIHtcbiAgICAgIHN0YXJ0OiBfdm0udG9ISE1NU1ModG91Y2guc3RhcnQpXG4gICAgfSkpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzbWFsbCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRhbmdlclwiXG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvY2stb1wiXG4gICAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZW5kX2F0Jywge1xuICAgICAgZW5kOiBfdm0udG9ISE1NU1ModG91Y2guZW5kKVxuICAgIH0pKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidG9vbHNcIlxuICAgIH0sIFtfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWVkaXRcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmVkaXRUb3VjaCh0b3VjaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoLW9cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnJlbW92ZVRvdWNoKHRvdWNoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSldKV0pXG4gIH0pKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoIV92bS50b3VjaGVzLmxlbmd0aCkgPyBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5ub190b3VjaGVzJykpKV0pIDogX3ZtLl9lKCldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU1MzkwMzk3XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01NTM5MDM5NyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtc29saWQgY29sbGFwc2VkLWJveFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiaW5zcGVjdG9yQm94XCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLXJpZ2h0IGJveC10b29sc1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImlkXCI6IFwiaW5zcGVjdG9yVG9vZ2xlclwiLFxuICAgICAgXCJkYXRhLXdpZGdldFwiOiBcImNvbGxhcHNlXCIsXG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlwiLFxuICAgICAgXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCI6IFwiQ29sbGFwc2VcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvb2dsZU9wZW5cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5pbnNwZWN0b3InKSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0udG91Y2gpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm9cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIixcbiAgICBzdHlsZTogKCdiYWNrZ3JvdW5kOicgKyBfdm0uYmFja2dyb3VuZCArICc7IGhlaWdodDoyMHB4OyB3aWR0aDoyMHB4O21hcmdpbi10b3A6IDFweDsgbWFyZ2luLXJpZ2h0OjVweCcpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdCBpbnNwZWN0b3ItaW5mby0tdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1zdWNjZXNzXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnN0YXJ0KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVuZCkpXSldKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbKF92bS50b3VjaCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1haWxib3gtY29udHJvbHMgY29udHJvbC1pbnNwZWN0b3ItbWVudVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiXG4gIH0sIFsoX3ZtLnJlY29yZGluZ1RvdWNoKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY3JlYXRlQWN0aW9uXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZF9hY3Rpb24nKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnBsYXlcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnZmEtcGxheSc6ICFfdm0ucGxheWluZywgJ2ZhLXBhdXNlIHRleHQtZGFuZ2VyJzogX3ZtLnBsYXlpbmdcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnBsYXlpbmcgPyBfdm0uJHQoJ3Njb3V0aW5ncy5wYXVzZScpIDogX3ZtLiR0KCdzY291dGluZ3MucGxheScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmJhY2t3YXJkKDEwKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZhc3QtYmFja3dhcmRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwIHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmJhY2t3YXJkKDUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYmFja3dhcmRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9yd2FyZCg1KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZvcndhcmRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZm9yd2FyZCgxMClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1mYXN0LWZvcndhcmRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwIHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucGxheWJhY2tSYXRlKDAuMjUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMjUgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucGxheWJhY2tSYXRlKDAuNSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41IHhcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgxKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxIHhcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgxLjUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuNSB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wbGF5YmFja1JhdGUoMilcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMiB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF0aGxldGUtbWVudVwiXG4gIH0sIFsoX3ZtLnRvdWNoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgbm8tcGFkZGluZy1yaWdodFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF0aGxldGUtbWVudS10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5sZWZ0X2FjdGlvbnMnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiBuby1wYWRkaW5nLWxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MucmlnaHRfYWN0aW9ucycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS50b3VjaCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IG5vLXBhZGRpbmctcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtbGVmdFwiXG4gIH0sIFtfYygndGFncycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdzXCI6IF92bS50YWdzTGVmdCxcbiAgICAgIFwic2VsZWN0ZWRcIjogX3ZtLmFjdGlvbi5sZWZ0VGFncyxcbiAgICAgIFwidHlwZVwiOiBcImxlZnRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidGFnLWRlbGV0ZWRcIjogX3ZtLnRhZ0RlbGV0ZWRMZWZ0LFxuICAgICAgXCJ0YWctc2VsZWN0ZWRcIjogX3ZtLnRhZ1NlbGVjdGVkTGVmdFxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF0aGxldGUtbWVudS1sZWZ0XCJcbiAgfSwgW19jKCd0YWdzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhZ3NcIjogX3ZtLnRhZ3NSaWdodCxcbiAgICAgIFwic2VsZWN0ZWRcIjogX3ZtLmFjdGlvbi5yaWdodFRhZ3MsXG4gICAgICBcInR5cGVcIjogXCJyaWdodFwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJ0YWctZGVsZXRlZFwiOiBfdm0udGFnRGVsZXRlZFJpZ2h0LFxuICAgICAgXCJ0YWctc2VsZWN0ZWRcIjogX3ZtLnRhZ1NlbGVjdGVkUmlnaHRcbiAgICB9XG4gIH0pXSwgMSldKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImluc3BlY3RvclwiXG4gICAgfVxuICB9KV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTc5MmY1NmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTU3OTJmNTZjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDM2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFsoX3ZtLm9wZW4pID8gX2MoJ2Zvcm0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJhY3Rpb25cIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLm9uU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnRleHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC50ZXh0XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnRleHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC50ZXh0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy10aXRsZVwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LXRpdGxlXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtcnVsZXNcIjogXCJyZXF1aXJlZFwiLFxuICAgICAgXCJkYXRhLWFzXCI6IFwiVGl0bGVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJUaXRsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnRvdWNoLnRleHQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2gudGV4dCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygndG91Y2gudGV4dCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLnRleHQnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdjb21wYWN0LXBpY2tlcicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5jb2xvciksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmNvbG9yXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnRvdWNoLmNvbG9yKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlLWNvbG9yXCI6IF92bS5vbkNoYW5nZUNvbG9yLFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRvdWNoLmNvbG9yID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy1zdGFydFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgKHNlYylcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnN0YXJ0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guc3RhcnRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guc3RhcnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5zdGFydFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctc3RhcnRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5ldy1zdGFydFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXJ1bGVzXCI6IFwicmVxdWlyZWR8bnVtZXJpY1wiLFxuICAgICAgXCJkYXRhLWFzXCI6IFwiU3RhcnRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnRvdWNoLnN0YXJ0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLnN0YXJ0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3RhcnRGbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzdGFydEZtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctc3RhcnQtZm10XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctc3RhcnQtZm10XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zdGFydEZtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zdGFydEZtdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLnN0YXJ0JykpKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiLFxuICAgIGNsYXNzOiB7XG4gICAgICAnaGFzLWVycm9yJzogX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctZW5kXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBFbmQoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guZW5kKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guZW5kXCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmVuZCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmVuZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctZW5kXCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctZW5kXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtcnVsZXNcIjogXCJyZXF1aXJlZHxudW1lcmljXCIsXG4gICAgICBcImRhdGEtYXNcIjogXCJFbmRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5lbmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2guZW5kID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZW5kRm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kRm10XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmQtZm10XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZW5kRm10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmVuZEZtdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndG91Y2guZW5kJykpKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIChfdm0uY29sbGlkZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJhbGVydFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBUaGUgdG91Y2ggdGhhdCB5b3Ugd2FudCB0byBhZGQgb3ZlcmxhcCB3aXRoOlxcbiAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygndWwnLCBfdm0uX2woKF92bS5jb2xsaWRlVG91Y2hlcyksIGZ1bmN0aW9uKHRvdWNoKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFsodG91Y2gucHJldmlvdXMuaGFzT3duUHJvcGVydHkoJ2lkJykpID8gX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKHRvdWNoLnByZXZpb3VzLnRleHQpICsgXCI6IHRoYXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb24gXCIgKyBfdm0uX3MoX3ZtLnRvSEhNTVNTKHRvdWNoLnByZXZpb3VzLnN0YXJ0KSkgKyBcIiBhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRvSEhNTVNTKHRvdWNoLnByZXZpb3VzLmVuZCkpKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICh0b3VjaC5jdXJyZW50Lmhhc093blByb3BlcnR5KCdpZCcpKSA/IF9jKCdzdHJvbmcnLCBbX3ZtLl92KF92bS5fcyh0b3VjaC5jdXJyZW50LnRleHQpICsgXCI6IHRoYXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cyBvblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRvSEhNTVNTKHRvdWNoLmN1cnJlbnQuc3RhcnQpKSArIFwiIGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udG9ISE1NU1ModG91Y2guY3VycmVudC5lbmQpKSldKSA6IF92bS5fZSgpXSlcbiAgfSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZW5kSW52YWxpZCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfdm0uX20oMSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiB0ZXh0LXJpZ2h0XCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQWRkIFRvdWNoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ2FuY2VsXCIpXSldKV0pXSkgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2g0JywgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gZmEgZmEtYmFuXCJcbiAgfSksIF92bS5fdihcIiBUb3VjaGVzIGNhbnQgb3ZlcmxhcCFcIildKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcImFsZXJ0XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gZmEgZmEtYmFuXCJcbiAgfSksIF92bS5fdihcIiBWYWxpZGF0aW9uIEVycm9yIVwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFRoZSBlbmQgb2YgdGhlIHRvdWNoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBzdGFydFxcbiAgICAgICAgICAgICAgICBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWNiODNkMGRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFnc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJvbGVcIjogXCJncm91cFwiLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiLi4uXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnRhZ3MpLCBmdW5jdGlvbih0YWcpIHtcbiAgICByZXR1cm4gX2MoJ3RhZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidGFnXCI6IHRhZ1xuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIFwidGFnLWNsaWNrZWRcIjogX3ZtLnRhZ1NlbGVjdGVkXG4gICAgICB9XG4gICAgfSlcbiAgfSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGFncy1zZWxlY3RlZFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImRyYWd1bGFcIixcbiAgICAgIHJhd05hbWU6IFwidi1kcmFndWxhXCIsXG4gICAgICB2YWx1ZTogKF92bS5zZWxlY3RlZCksXG4gICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0YWdzLWxpc3RcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJiYWdcIjogXCJmaXJzdC1iYWdcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uc2VsZWN0ZWQpLCBmdW5jdGlvbih0YWcpIHtcbiAgICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICAgIGtleTogdGFnLmlkXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiLFxuICAgICAgY2xhc3M6ICdiZy0nICsgdGFnLmNvbG9yXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihfdm0uX3ModGFnLm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCAodGFnLm9wdGlvbikgPyBfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3ModGFnLm9wdGlvbi5uYW1lKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5kZWxldGVUYWcodGFnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCLDl1wiKV0pXSldKV0pXG4gIH0pKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWY0MjIzZjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVmNDIyM2Y1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duIHRhZy1kcm9wZG93blwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10b2dnbGUgYnRuIHRhZ1wiLFxuICAgIGNsYXNzOiAnYmctJyArIF92bS50YWcuY29sb3IsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiLFxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIixcbiAgICAgIFwiaWRcIjogX3ZtLmlkXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGFnLm5hbWUpICsgXCJcXG4gICAgICAgIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FyZXQtZG93blwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IF92bS5pZFxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0udGFnLm9wdGlvbnMpLCBmdW5jdGlvbihvcHQpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uY2xpY2tPcHQob3B0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3Mob3B0Lm5hbWUpKV0pXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmYxMjRjOWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTZmMTI0YzlmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDM2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWwgZm9ybS10b3VjaFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ub25TdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctdGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRpdGxlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC50ZXh0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2gudGV4dFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC50ZXh0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2gudGV4dFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctdGl0bGVcIixcbiAgICAgIFwibmFtZVwiOiBcInRvdWNoLnRleHRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogXCJUaXRsZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlRpdGxlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2gudGV4dClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC50ZXh0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaC50ZXh0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndG91Y2gudGV4dCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5jb2xvcicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2NvbXBhY3QtcGlja2VyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmNvbG9yKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guY29sb3JcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udG91Y2guY29sb3IpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2UtY29sb3JcIjogX3ZtLm9uQ2hhbmdlQ29sb3IsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG91Y2guY29sb3IgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXN0YXJ0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5zdGFydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5zdGFydCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnN0YXJ0XCIsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgXCJpbml0aWFsXCI6IHRydWVcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLnN0YXJ0KSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guc3RhcnRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0XCIsXG4gICAgICBcIm5hbWVcIjogXCJ0b3VjaC5zdGFydFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJkYXRhLXZ2LXJ1bGVzXCI6IFwicmVxdWlyZWR8bnVtZXJpY1wiLFxuICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwiU3RhcnRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnRvdWNoLnN0YXJ0KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnRvdWNoLnN0YXJ0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uc3RhcnRGbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzdGFydEZtdFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctc3RhcnQtZm10XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctc3RhcnQtZm10XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5zdGFydEZtdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5zdGFydEZtdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaC5zdGFydCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoLnN0YXJ0JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2hhcy1lcnJvcic6IF92bS5lcnJvcnMuaGFzKCd0b3VjaC5lbmQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LWVuZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZW5kJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmVuZCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLmVuZFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5lbmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5lbmRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LWVuZFwiLFxuICAgICAgXCJuYW1lXCI6IFwidG91Y2guZW5kXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZHxudW1lcmljXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogXCJFbmRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5lbmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2guZW5kID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZW5kRm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kRm10XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmQtZm10XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZW5kRm10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmVuZEZtdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndG91Y2guZW5kJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbGxpZGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBmYSBmYS1iYW5cIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJykpICsgXCI6XFxuICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCd1bCcsIF92bS5fbCgoX3ZtLmNvbGxpZGVUb3VjaGVzKSwgZnVuY3Rpb24oY29sbGlkZVRvdWNoKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFsoY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IF92bS50b3VjaC5pZCkgPyBfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLCB7XG4gICAgICB0aXRsZTogY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsXG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5zdGFydCksXG4gICAgICBlbmQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuZW5kKVxuICAgIH0pKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChjb2xsaWRlVG91Y2guY3VycmVudC5pZCAhPSBfdm0udG91Y2guaWQpID8gX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJywge1xuICAgICAgdGl0bGU6IGNvbGxpZGVUb3VjaC5jdXJyZW50LnRleHQsXG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LnN0YXJ0KSxcbiAgICAgIGVuZDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LmVuZClcbiAgICB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpXSlcbiAgfSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZW5kSW52YWxpZCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJhbGVydFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGZhIGZhLWJhblwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2Vycm9yJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZW5kX2dyZWF0ZXInKSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Muc2F2ZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmNhbmNlbCcpKSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWE3NDlkNjAyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1zb2xpZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidGltZWxpbmVCb3hcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHQgYm94LXRvb2xzXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICBcInRpdGxlXCI6IFwiWm9vbSBJblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS56b29tSW4oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNlYXJjaC1wbHVzXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlpvb20gT3V0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnpvb21PdXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNlYXJjaC1taW51c1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiaWRcIjogXCJ0aW1lbGluZVRvb2dsZXJcIixcbiAgICAgIFwiZGF0YS13aWRnZXRcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgIFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiOiBcIkNvbGxhcHNlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVPcGVuXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbWludXNcIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNhbGVuZGFyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudGltZWxpbmUnKSkgKyBcIlxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0aW1lbGluZVwiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZTU2YzgwODRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWU1NmM4MDg0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2N2RjNzNmOVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5zcGVjdG9yLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01NzkyZjU2YyEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDM4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY0MjIzZjUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ3MudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc0NzE3MjFhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVmNDIyM2Y1IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZjQyMjNmNSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWY0MjIzZjUhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcbi8vIG1vZHVsZSBpZCA9IDM4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjA2YTJkNTQyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTQ1NzU5MCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGxheWVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk0NTc1OTAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BsYXllci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5NDU3NTkwIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTA0ZGFlZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2NWNiNzFmMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDUwNGRhZWUhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ1MDRkYWVlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWcudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NTA0ZGFlZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcbi8vIG1vZHVsZSBpZCA9IDM4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMTZhYWZlOWNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90b3VjaGVzTGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU1MzkwMzk3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMzhiMTlhOGNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL25ld1RvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDU0YTkwMGRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYjgzZDBkIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9uZXdUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2I4M2QwZCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNiODNkMGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzMDNjMWNkNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ0Ryb3Bkb3duLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmYxMjRjOWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDM5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJjN2Y5ZGUzNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAzOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjI4OGNiODVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWE3NDlkNjAyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTc0OWQ2MDIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL2VkaXRUb3VjaEZvcm0udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hNzQ5ZDYwMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzNTE5MDE1NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZTU2YzgwODQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=