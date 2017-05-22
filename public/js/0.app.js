webpackJsonp([0,30],{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(316),
  /* template */
  __webpack_require__(431),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1cf8668", Component.options)
  } else {
    hotAPI.reload("data-v-f1cf8668", Component.options)
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

/***/ 226:
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

/***/ 233:
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

/***/ 242:
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

/***/ 243:
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

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(279);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(278);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(137);

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

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

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

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UuidUtil = __webpack_require__(279);

var _UuidUtil2 = _interopRequireDefault(_UuidUtil);

var _SecondsUtil = __webpack_require__(278);

var _SecondsUtil2 = _interopRequireDefault(_SecondsUtil);

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _Action = __webpack_require__(247);

var _Action2 = _interopRequireDefault(_Action);

var _mockstate = __webpack_require__(137);

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

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(137);

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

/***/ 279:
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

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {!function(e,o){ true?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.VueColor=o():e.VueColor=o()}(this,function(){return function(e){function o(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=t(37),i=r(a),n=t(38),s=r(n),l=t(41),c=r(l),u=t(42),d=r(u),h=t(39),f=r(h),_=t(40),p=r(_),v=t(36),g=r(v),b=t(6),m=r(b),x=t(8),w=r(x),C=t(4),y=r(C),k=t(5),F=r(k),A=t(7),R=r(A),S=t(3),M=r(S),N={version:"1.0.26",Compact:i["default"],Material:s["default"],Slider:c["default"],Swatches:d["default"],Photoshop:f["default"],Sketch:p["default"],Chrome:g["default"],Alpha:m["default"],Checkboard:w["default"],EditableInput:y["default"],Hue:F["default"],Saturation:R["default"],ColorMixin:M["default"]};e.exports=N},function(e,o){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],o=0;o<this.length;o++){var t=this[o];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<o.length;a++){var n=o[a];"number"==typeof n[0]&&r[n[0]]||(t&&!n[2]?n[2]=t:t&&(n[2]="("+n[2]+") and ("+t+")"),e.push(n))}},e}},function(e,o,t){function r(e,o){for(var t=0;t<e.length;t++){var r=e[t],a=d[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(l(r.parts[i],o))}else{for(var n=[],i=0;i<r.parts.length;i++)n.push(l(r.parts[i],o));d[r.id]={id:r.id,refs:1,parts:n}}}}function a(e){for(var o=[],t={},r=0;r<e.length;r++){var a=e[r],i=a[0],n=a[1],s=a[2],l=a[3],c={css:n,media:s,sourceMap:l};t[i]?t[i].parts.push(c):o.push(t[i]={id:i,parts:[c]})}return o}function i(e,o){var t=_(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(o,r.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),g.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function n(e){e.parentNode.removeChild(e);var o=g.indexOf(e);o>=0&&g.splice(o,1)}function s(e){var o=document.createElement("style");return o.type="text/css",i(e,o),o}function l(e,o){var t,r,a;if(o.singleton){var i=v++;t=p||(p=s(o)),r=c.bind(null,t,i,!1),a=c.bind(null,t,i,!0)}else t=s(o),r=u.bind(null,t),a=function(){n(t)};return r(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;r(e=o)}else a()}}function c(e,o,t,r){var a=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(o,a);else{var i=document.createTextNode(a),n=e.childNodes;n[o]&&e.removeChild(n[o]),n.length?e.insertBefore(i,n[o]):e.appendChild(i)}}function u(e,o){var t=o.css,r=o.media,a=o.sourceMap;if(r&&e.setAttribute("media",r),a&&(t+="\n/*# sourceURL="+a.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var d={},h=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},f=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),_=h(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,v=0,g=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=f()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=a(e);return r(t,o),function(e){for(var i=[],n=0;n<t.length;n++){var s=t[n],l=d[s.id];l.refs--,i.push(l)}if(e){var c=a(e);r(c,o)}for(var n=0;n<i.length;n++){var l=i[n];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var b=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,o){e.a&&e.a>1&&(e.a=1);var t=e.hex?(0,n["default"])(e.hex):(0,n["default"])(e),r=t.toHsl(),a=t.toHsv();return 0===r.s&&(r.h=e.h||o||0,a.h=e.h||o||0),{hsl:r,hex:t.toHexString().toUpperCase(),rgba:t.toRgb(),hsv:a,oldHue:e.h||o||r.h,source:e.source,a:e.a}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(35),n=r(i);o["default"]={props:["value"],data:function(){return{val:a(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("change-color",e)}}},watch:{value:function(e){this.val=a(e)}},created:function(){},methods:{colorChange:function(e,o){this.colors=a(e,o||this.oldHue),this.oldHue=this.colors.hsl.h},isValidHex:function(e){return(0,n["default"])(e).isValid()},simpleCheckForValidColor:function(e){for(var o=["r","g","b","a","h","s","a","v"],t=0,r=0,a=0;a<o.length;a++){var i=o[a];e[i]&&(t++,isNaN(e[i])||r++)}if(t===r)return e}}}},function(e,o,t){var r,a;t(56),r=t(18);var i=t(44);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(57),r=t(19);var i=t(45);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(65),r=t(16);var i=t(53);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(58),r=t(20);var i=t(46);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(66),r=t(17);var i=t(54);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h);o["default"]={name:"Chrome",mixins:[i["default"]],props:{},components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},toggleViews:function(){return this.fieldsIndex>=2?void(this.fieldsIndex=0):void this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];o["default"]={name:"Compact",mixins:[i["default"]],props:{},components:{"ed-in":s["default"]},computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:l}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(4),i=r(a),n=t(3),s=r(n);o["default"]={name:"Material",mixins:[s["default"]],components:{"ed-in":i["default"]},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h);o["default"]={name:"Photoshop",mixins:[i["default"]],props:{head:{type:String,"default":"Color Picker"}},components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{currentColor:"#FFF"}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(4),s=r(n),l=t(7),c=r(l),u=t(5),d=r(u),h=t(6),f=r(h),_=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];o["default"]={name:"Sketch",mixins:[i["default"]],components:{saturation:c["default"],hue:d["default"],alpha:f["default"],"ed-in":s["default"]},data:function(){return{presetColors:_}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(3),i=r(a),n=t(5),s=r(n);o["default"]={name:"Slider",mixins:[i["default"]],props:{direction:String},components:{hue:s["default"]},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100===.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,o){this.colorChange({h:this.colors.hsl.h,s:.5,l:o,source:"hsl"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(34),i=r(a),n=t(3),s=r(n),l=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey"],c=["900","700","500","300","100"],u=function(){var e=[];return l.forEach(function(o){var t=[];c.forEach(function(e){t.push(i["default"][o][e].toUpperCase())}),e.push(t)}),e}();o["default"]={name:"Swatches",mixins:[s["default"]],computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:u}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(8),i=r(a);o["default"]={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:i["default"]},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,o=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+o+", 0) 0%, rgba("+o+", 1) 100%)"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r=this.$refs.container,a=r.clientWidth,i=(e.pageX||e.touches[0].pageX)-(r.getBoundingClientRect().left+window.pageXOffset);t=i<0?0:i>a?1:Math.round(100*i/a)/100,this.colors.a!==t&&this.$emit("on-change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:t,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o){"use strict";function t(e,o,t){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*t;var a=r.getContext("2d");return a?(a.fillStyle=e,a.fillRect(0,0,r.width,r.height),a.fillStyle=o,a.fillRect(0,0,t,t),a.translate(t,t),a.fillRect(0,0,t,t),r.toDataURL()):null}function r(e,o,r){var i=e+","+o+","+r;if(a[i])return a[i];var n=t(e,o,r);return a[i]=n,n}Object.defineProperty(o,"__esModule",{value:!0});var a={};o["default"]={name:"Checkboard",props:{size:{type:[Number,String],"default":8},white:{type:String,"default":"#fff"},grey:{type:String,"default":"#e6e6e6"}},computed:{bgStyle:function(){return"url("+r(this.white,this.grey,this.size)+") center left"}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"editableInput",props:{label:String,value:[String,Number],max:Number,arrowOffset:{type:Number,"default":1}},computed:{val:function(){return this.value}},filters:{maxFilter:{read:function(e){return this.max&&e>this.max?this.max:e},write:function(e,o){return e}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var o={};o[this.label]=e,this.$emit("on-change",o)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var o=this.val,t=Number(o);if(t){var r=this.arrowOffset||1;38===e.keyCode&&(o=t+r,this.handleChange(o),e.preventDefault()),40===e.keyCode&&(o=t-r,this.handleChange(o),e.preventDefault())}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={name:"Hue",props:{value:Object,direction:{type:String,"default":"horizontal"}},computed:{colors:function(){return this.value},directionClass:function(){return{"vue-color__c-hue--horizontal":"horizontal"===this.direction,"vue-color__c-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?-(100*this.colors.hsl.h/360)+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,r,a=this.$refs.container,i=a.clientWidth,n=a.clientHeight,s=(e.pageX||e.touches[0].pageX)-(a.getBoundingClientRect().left+window.pageXOffset),l=(e.pageY||e.touches[0].pageY)-(a.getBoundingClientRect().top+window.pageYOffset);"vertical"===this.direction?(l<0?t=359:l>n?t=0:(r=-(100*l/n)+100,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(s<0?t=0:s>i?t=359:(r=100*s/i,t=360*r/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(33),i=r(a);o["default"]={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsl.h+",100%, 50%)"},pointerTop:function(){return-(100*this.colors.hsv.v)+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,i["default"])(function(e,o){e(o)},50),handleChange:function(e,o){!o&&e.preventDefault();var t=this.$refs.container,r=t.clientWidth,a=t.clientHeight,i=(e.pageX||e.touches[0].pageX)-(t.getBoundingClientRect().left+window.pageXOffset),n=(e.pageY||e.touches[0].pageY)-(t.getBoundingClientRect().top+window.pageYOffset);i<0?i=0:i>r?i=r:n<0?n=0:n>a&&(n=a);var s=100*i/r,l=-(100*n/a)+100;this.throttle(this.onChange,{h:this.colors.hsl.h,s:s,v:l,a:this.colors.hsl.a,source:"rgb"})},onChange:function(e){this.$emit("on-change",e)},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__compact{padding-top:5px;padding-left:5px;width:240px;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__compact__colors{overflow:hidden;padding:0;margin:0}.vue-color__compact__color-item{list-style:none;width:15px;height:15px;float:left;margin-right:5px;margin-bottom:5px;position:relative;cursor:pointer}.vue-color__compact__color-item--white{box-shadow:inset 0 0 0 1px #ddd}.vue-color__compact__color-item--white .vue-color__compact__dot{background:#000}.vue-color__compact__dot{position:absolute;top:5px;right:5px;bottom:5px;left:5px;border-radius:50%;opacity:1;background:#fff}.vue-color__compact__fields{display:flex;padding-bottom:6px;padding-right:5px;position:relative}.vue-color__compact__fields .vue-color__editable-input__input{width:70%;padding-left:30%;background:none;font-size:12px;color:#333;height:16px}.vue-color__compact__fields .vue-color__editable-input__label{position:absolute;top:3px;left:0;line-height:16px;text-transform:uppercase;font-size:12px;color:#999}.vue-color__compact__pick-color{position:absolute;top:6px;left:5px;height:9px;width:9px}.vue-color__compact__col-3{flex:1}.vue_color__compact__col-hex{flex:2}.vue_color__compact__col-hex .vue-color__editable-input__input{width:80%;padding-left:20%}.vue_color__compact__col-hex .vue-color__editable-input__label{display:none}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__editable-input{position:relative}.vue-color__editable-input__input{padding:0;border:0;outline:none}.vue-color__editable-input__label{text-transform:capitalize}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-hue{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:2px}.vue-color__c-hue--horizontal{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue--vertical{background:linear-gradient(0deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.vue-color__c-hue__container{cursor:pointer;margin:0 2px;position:relative;height:100%}.vue-color__c-hue__pointer{z-index:2;position:absolute}.vue-color__c-hue__picker{cursor:pointer;margin-top:1px;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__saturation,.vue-color__saturation--black,.vue-color__saturation--white{cursor:pointer;position:absolute;top:0;left:0;right:0;bottom:0}.vue-color__saturation--white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.vue-color__saturation--black{background:linear-gradient(0deg,#000,transparent)}.vue-color__saturation--pointer{cursor:pointer;position:absolute}.vue-color__saturation--circle{cursor:head;width:4px;height:4px;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);border-radius:50%;transform:translate(-2px,-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__material{width:98px;height:98px;padding:16px;font-family:Roboto;position:relative;border-radius:2px;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16);background-color:#fff}.vue-color__material .vue-color__editable-input__input{width:100%;margin-top:12px;font-size:15px;color:#333;height:30px}.vue-color__material .vue-color__editable-input__label{position:absolute;top:0;left:0;font-size:11px;color:#999;text-transform:capitalize}.vue-color__material__hex{border-bottom-width:2px;border-bottom-style:solid}.vue-color__material__split{display:flex;margin-right:-10px;padding-top:11px}.vue-color__material__third{flex:1;padding-right:10px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__slider{position:relative;width:410px}.vue-color__slider__hue-warp{height:12px;position:relative}.vue-color__slider__hue-warp .vue-color__c-hue__picker{width:14px;height:14px;border-radius:6px;transform:translate(-7px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__slider__swatches{display:flex;margin-top:20px}.vue-color__slider__swatch{margin-right:1px;flex:1;width:20%}.vue-color__slider__swatch:first-child{margin-right:1px}.vue-color__slider__swatch:first-child .vue-color__slider__swatch-picker{border-radius:2px 0 0 2px}.vue-color__slider__swatch:last-child{margin-right:0}.vue-color__slider__swatch:last-child .vue-color__slider__swatch-picker{border-radius:0 2px 2px 0}.vue-color__slider__swatch-picker{cursor:pointer;height:12px}.vue-color__slider__swatch-picker--active{transform:scaleY(1.8);border-radius:3.6px/2px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__swatches{width:320px;height:240px;overflow-y:scroll;background-color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.12),0 2px 5px rgba(0,0,0,.16)}.vue-color__swatches__box{padding:16px 0 6px 16px;overflow:hidden}.vue-color__swatches__color-group{padding-bottom:10px;width:40px;float:left;margin-right:10px}.vue-color__swatches__color-it{width:40px;height:24px;cursor:pointer;background:#880e4f;margin-bottom:1px;overflow:hidden;border-radius:2px 2px 0 0}.vue-color__swatches__pick{fill:#fff;margin-left:8px;display:block}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,'.vue-colors__photoshop{background:#dcdcdc;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.25),0 8px 16px rgba(0,0,0,.15);box-sizing:initial;width:513px;font-family:Roboto}.vue-colors__photoshop__head{background-image:linear-gradient(-180deg,#f0f0f0,#d4d4d4);border-bottom:1px solid #b1b1b1;box-shadow:inset 0 1px 0 0 hsla(0,0%,100%,.2),inset 0 -1px 0 0 rgba(0,0,0,.02);height:23px;line-height:24px;border-radius:4px 4px 0 0;font-size:13px;color:#4d4d4d;text-align:center}.vue-colors__photoshop__body{padding:15px;display:flex}.vue-colors__photoshop__saturation-wrap{width:256px;height:256px;position:relative;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0;overflow:hidden}.vue-colors__photoshop__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-colors__photoshop__hue-wrap{position:relative;height:256px;width:19px;margin-left:10px;border:2px solid #b3b3b3;border-bottom:2px solid #f0f0f0}.vue-colors__photoshop__hue-pointer{position:relative}.vue-colors__photoshop__hue-pointer--left,.vue-colors__photoshop__hue-pointer--right{position:absolute;width:0;height:0;border-style:solid;border-width:5px 0 5px 8px;border-color:transparent transparent transparent #555}.vue-colors__photoshop__hue-pointer--left:after,.vue-colors__photoshop__hue-pointer--right:after{content:"";width:0;height:0;border-style:solid;border-width:4px 0 4px 6px;border-color:transparent transparent transparent #fff;position:absolute;top:1px;left:1px;transform:translate(-8px,-5px)}.vue-colors__photoshop__hue-pointer--left{transform:translate(-13px,-4px)}.vue-colors__photoshop__hue-pointer--right{transform:translate(20px,-4px) rotate(180deg)}.vue-colors__photoshop__controls{width:180px;margin-left:10px;display:flex}.vue-colors__photoshop__actions{margin-left:20px;flex:1}.vue-colors__photoshop__ac-btn{cursor:pointer;background-image:linear-gradient(-180deg,#fff,#e6e6e6);border:1px solid #878787;border-radius:2px;height:20px;box-shadow:0 1px 0 0 #eaeaea;font-size:14px;color:#000;line-height:20px;text-align:center;margin-bottom:10px}.vue-colors__photoshop__previews{width:60px}.vue-colors__photoshop__previews__swatches{border:1px solid #b3b3b3;border-bottom:1px solid #f0f0f0;margin-bottom:2px;margin-top:1px}.vue-colors__photoshop__previews__pr-color{height:34px;box-shadow:inset 1px 0 0 #000,inset -1px 0 0 #000,inset 0 1px 0 #000}.vue-colors__photoshop__previews__label{font-size:14px;color:#000;text-align:center}.vue-colors__photoshop__fields{padding-top:5px;padding-bottom:9px;width:80px;position:relative}.vue-colors__photoshop__fields .vue-color__editable-input__input{margin-left:40%;width:40%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:5px;font-size:13px;padding-left:3px;margin-right:10px}.vue-colors__photoshop__fields .vue-color__editable-input__label{top:0;left:0;width:34px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px;position:absolute}.vue-colors__photoshop__fields__divider{height:5px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__input{margin-left:20%;width:80%;height:18px;border:1px solid #888;box-shadow:inset 0 1px 1px rgba(0,0,0,.1),0 1px 0 0 #ececec;margin-bottom:6px;font-size:13px;padding-left:3px}.vue-colors__photoshop__fields__hex .vue-color__editable-input__label{position:absolute;top:0;left:0;width:14px;text-transform:uppercase;font-size:13px;height:18px;line-height:22px}',""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__sketch{position:relative;width:200px;padding:10px 10px 0;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px rgba(0,0,0,.15),0 8px 16px rgba(0,0,0,.15)}.vue-color__sketch__saturation-wrap{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.vue-color__sketch__controls{display:flex}.vue-color__sketch__sliders{padding:4px 0;flex:1}.vue-color__sketch__sliders .vue-color__c-alpha__gradient,.vue-color__sketch__sliders .vue-color__c-hue{border-radius:2px}.vue-color__sketch__hue-wrap{position:relative;height:10px}.vue-color__sketch__alpha-wrap{position:relative;height:10px;margin-top:4px;overflow:hidden}.vue-color__sketch__color-wrap{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.vue-color__sketch__active-color{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15),inset 0 0 4px rgba(0,0,0,.25);z-index:2}.vue-color__sketch__field{display:flex;padding-top:4px}.vue-color__sketch__field .vue-color__editable-input__input{width:80%;padding:4px 10% 3px;border:none;box-shadow:inset 0 0 0 1px #ccc;font-size:11px}.vue-color__sketch__field .vue-color__editable-input__label{display:block;text-align:center;font-size:11px;color:#222;padding-top:3px;padding-bottom:4px;text-transform:capitalize}.vue-color__sketch__field--single{flex:1;padding-left:6px}.vue-color__sketch__field--double{flex:2}.vue-color__sketch__presets{margin-right:-10px;margin-left:-10px;padding-left:10px;padding-top:10px;border-top:1px solid #eee}.vue-color__sketch__presets-color{border-radius:3px;overflow:hidden;position:relative;display:inline-block;margin:0 10px 10px 0;vertical-align:top;cursor:pointer;width:16px;height:16px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__chrome{background:#fff;border-radius:2px;box-shadow:0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);box-sizing:initial;width:225px;font-family:Menlo;background-color:#fff}.vue-color__chrome__controls{display:flex}.vue-color__chrome__color-wrap{width:32px}.vue-color__chrome__active-color{margin-top:6px;width:16px;height:16px;border-radius:8px;position:relative;overflow:hidden}.vue-color__chrome__sliders{flex:1}.vue-color__chrome__sliders .vue-color__c-alpha__gradient,.vue-color__chrome__sliders .vue-color__c-hue{border-radius:2px}.vue-color__chrome__sliders .vue-color__c-alpha__picker,.vue-color__chrome__sliders .vue-color__c-hue__picker{width:12px;height:12px;border-radius:6px;transform:translate(-6px,-2px);background-color:#f8f8f8;box-shadow:0 1px 4px 0 rgba(0,0,0,.37)}.vue-color__chrome__fields-wrap{padding-top:16px;display:flex}.vue-color__chrome__fields{display:flex;margin-left:-6px;flex:1}.vue-color__chrome__field{padding-left:6px;width:100%}.vue-color__chrome__toggle-btn{width:32px;text-align:right;position:relative}.vue-color__chrome__icon{margin-right:-4px;margin-top:12px;cursor:pointer;position:relative;z-index:2}.vue-color__chrome__icon-highlight{position:absolute;width:24px;height:28px;background:#eee;border-radius:4px;top:10px;left:12px}.vue-color__chrome__hue-wrap{margin-bottom:8px}.vue-color__chrome__alpha-wrap,.vue-color__chrome__hue-wrap{position:relative;height:10px}.vue-color__chrome__chrome-body{padding:16px 16px 12px;background-color:#fff}.vue-color__chrome__saturation-wrap{width:100%;padding-bottom:55%;position:relative;border-radius:2px 2px 0 0;overflow:hidden}.vue-color__chrome__saturation-wrap .vue-color__saturation--circle{width:12px;height:12px}.vue-color__chrome__fields .vue-color__editable-input__input{font-size:11px;color:#333;width:100%;border-rradius:2px;border:none;box-shadow:inset 0 0 0 1px #dadada;height:21px;text-align:center}.vue-color__chrome__fields .vue-color__editable-input__label{text-transform:uppercase;font-size:11px;line-height:11px;color:#969696;text-align:center;display:block;margin-top:12px}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-alpha,.vue-color__c-alpha__checkboard-wrap{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__checkboard-wrap{overflow:hidden}.vue-color__c-alpha__gradient{position:absolute;top:0;right:0;bottom:0;left:0}.vue-color__c-alpha__container{cursor:pointer;position:relative;z-index:2;height:100%;margin:0 3px}.vue-color__c-alpha__pointer{z-index:2;position:absolute}.vue-color__c-alpha__picker{cursor:pointer;width:4px;border-radius:1px;height:8px;box-shadow:0 0 2px rgba(0,0,0,.6);background:#fff;margin-top:1px;transform:translateX(-2px)}",""])},function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".vue-color__c-checkerboard{position:absolute;top:0;right:0;bottom:0;left:0}",""])},function(e,o){(function(o){function t(e,o,t){function r(o){var t=p,r=v;return p=v=void 0,k=o,b=e.apply(r,t)}function i(e){return k=e,m=setTimeout(u,o),F?r(e):b}function n(e){var t=e-x,r=e-k,a=o-t;return A?C(a,g-r):a}function c(e){var t=e-x,r=e-k;return void 0===x||t>=o||t<0||A&&r>=g}function u(){var e=y();return c(e)?d(e):void(m=setTimeout(u,n(e)))}function d(e){return m=void 0,R&&p?r(e):(p=v=void 0,b)}function h(){void 0!==m&&clearTimeout(m),k=0,p=x=v=m=void 0}function f(){return void 0===m?b:d(y())}function _(){var e=y(),t=c(e);if(p=arguments,v=this,x=e,t){if(void 0===m)return i(x);if(A)return m=setTimeout(u,o),
r(x)}return void 0===m&&(m=setTimeout(u,o)),b}var p,v,g,b,m,x,k=0,F=!1,A=!1,R=!0;if("function"!=typeof e)throw new TypeError(l);return o=s(o)||0,a(t)&&(F=!!t.leading,A="maxWait"in t,g=A?w(s(t.maxWait)||0,o):g,R="trailing"in t?!!t.trailing:R),_.cancel=h,_.flush=f,_}function r(e,o,r){var i=!0,n=!0;if("function"!=typeof e)throw new TypeError(l);return a(r)&&(i="leading"in r?!!r.leading:i,n="trailing"in r?!!r.trailing:n),t(e,o,{leading:i,maxWait:o,trailing:n})}function a(e){var o=typeof e;return!!e&&("object"==o||"function"==o)}function i(e){return!!e&&"object"==typeof e}function n(e){return"symbol"==typeof e||i(e)&&x.call(e)==u}function s(e){if("number"==typeof e)return e;if(n(e))return c;if(a(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=a(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var t=f.test(e);return t||_.test(e)?p(e.slice(2),t?2:8):h.test(e)?c:+e}var l="Expected a function",c=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,_=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof o&&o&&o.Object===Object&&o,g="object"==typeof self&&self&&self.Object===Object&&self,b=v||g||Function("return this")(),m=Object.prototype,x=m.toString,w=Math.max,C=Math.min,y=function(){return b.Date.now()};e.exports=r}).call(o,function(){return this}())},function(e,o,t){var r,a,i;!function(t,n){a=[],r=n,i="function"==typeof r?r.apply(o,a):r,!(void 0!==i&&(e.exports=i))}(this,function(){return{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},lightBlue:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},lightGreen:{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},blueGrey:{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},darkText:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},lightText:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},darkIcons:{active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},lightIcons:{active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},white:"#ffffff",black:"#000000"}})},function(e,o,t){var r;!function(a){function i(e,o){if(e=e?e:"",o=o||{},e instanceof i)return e;if(!(this instanceof i))return new i(e,o);var t=n(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=X(100*this._a)/100,this._format=o.format||t.format,this._gradientType=o.gradientType,this._r<1&&(this._r=X(this._r)),this._g<1&&(this._g=X(this._g)),this._b<1&&(this._b=X(this._b)),this._ok=t.ok,this._tc_id=V++}function n(e){var o={r:0,g:0,b:0},t=1,r=null,a=null,i=null,n=!1,l=!1;return"string"==typeof e&&(e=I(e)),"object"==typeof e&&(D(e.r)&&D(e.g)&&D(e.b)?(o=s(e.r,e.g,e.b),n=!0,l="%"===String(e.r).substr(-1)?"prgb":"rgb"):D(e.h)&&D(e.s)&&D(e.v)?(r=O(e.s),a=O(e.v),o=d(e.h,r,a),n=!0,l="hsv"):D(e.h)&&D(e.s)&&D(e.l)&&(r=O(e.s),i=O(e.l),o=c(e.h,r,i),n=!0,l="hsl"),e.hasOwnProperty("a")&&(t=e.a)),t=M(t),{ok:n,format:e.format||l,r:q(255,Y(o.r,0)),g:q(255,Y(o.g,0)),b:q(255,Y(o.b,0)),a:t}}function s(e,o,t){return{r:255*N(e,255),g:255*N(o,255),b:255*N(t,255)}}function l(e,o,t){e=N(e,255),o=N(o,255),t=N(t,255);var r,a,i=Y(e,o,t),n=q(e,o,t),s=(i+n)/2;if(i==n)r=a=0;else{var l=i-n;switch(a=s>.5?l/(2-i-n):l/(i+n),i){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:a,l:s}}function c(e,o,t){function r(e,o,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(o-e)*t:t<.5?o:t<2/3?e+(o-e)*(2/3-t)*6:e}var a,i,n;if(e=N(e,360),o=N(o,100),t=N(t,100),0===o)a=i=n=t;else{var s=t<.5?t*(1+o):t+o-t*o,l=2*t-s;a=r(l,s,e+1/3),i=r(l,s,e),n=r(l,s,e-1/3)}return{r:255*a,g:255*i,b:255*n}}function u(e,o,t){e=N(e,255),o=N(o,255),t=N(t,255);var r,a,i=Y(e,o,t),n=q(e,o,t),s=i,l=i-n;if(a=0===i?0:l/i,i==n)r=0;else{switch(i){case e:r=(o-t)/l+(o<t?6:0);break;case o:r=(t-e)/l+2;break;case t:r=(e-o)/l+4}r/=6}return{h:r,s:a,v:s}}function d(e,o,t){e=6*N(e,360),o=N(o,100),t=N(t,100);var r=a.floor(e),i=e-r,n=t*(1-o),s=t*(1-i*o),l=t*(1-(1-i)*o),c=r%6,u=[t,s,n,n,l,t][c],d=[l,t,t,s,n,n][c],h=[n,n,l,t,t,s][c];return{r:255*u,g:255*d,b:255*h}}function h(e,o,t,r){var a=[H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(e,o,t,r,a){var i=[H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16)),H(z(r))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function _(e,o,t,r){var a=[H(z(r)),H(X(e).toString(16)),H(X(o).toString(16)),H(X(t).toString(16))];return a.join("")}function p(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s-=o/100,t.s=P(t.s),i(t)}function v(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.s+=o/100,t.s=P(t.s),i(t)}function g(e){return i(e).desaturate(100)}function b(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l+=o/100,t.l=P(t.l),i(t)}function m(e,o){o=0===o?0:o||10;var t=i(e).toRgb();return t.r=Y(0,q(255,t.r-X(255*-(o/100)))),t.g=Y(0,q(255,t.g-X(255*-(o/100)))),t.b=Y(0,q(255,t.b-X(255*-(o/100)))),i(t)}function x(e,o){o=0===o?0:o||10;var t=i(e).toHsl();return t.l-=o/100,t.l=P(t.l),i(t)}function w(e,o){var t=i(e).toHsl(),r=(t.h+o)%360;return t.h=r<0?360+r:r,i(t)}function C(e){var o=i(e).toHsl();return o.h=(o.h+180)%360,i(o)}function y(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+120)%360,s:o.s,l:o.l}),i({h:(t+240)%360,s:o.s,l:o.l})]}function k(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+90)%360,s:o.s,l:o.l}),i({h:(t+180)%360,s:o.s,l:o.l}),i({h:(t+270)%360,s:o.s,l:o.l})]}function F(e){var o=i(e).toHsl(),t=o.h;return[i(e),i({h:(t+72)%360,s:o.s,l:o.l}),i({h:(t+216)%360,s:o.s,l:o.l})]}function A(e,o,t){o=o||6,t=t||30;var r=i(e).toHsl(),a=360/t,n=[i(e)];for(r.h=(r.h-(a*o>>1)+720)%360;--o;)r.h=(r.h+a)%360,n.push(i(r));return n}function R(e,o){o=o||6;for(var t=i(e).toHsv(),r=t.h,a=t.s,n=t.v,s=[],l=1/o;o--;)s.push(i({h:r,s:a,v:n})),n=(n+l)%1;return s}function S(e){var o={};for(var t in e)e.hasOwnProperty(t)&&(o[e[t]]=t);return o}function M(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function N(e,o){L(e)&&(e="100%");var t=E(e);return e=q(o,Y(0,parseFloat(e))),t&&(e=parseInt(e*o,10)/100),a.abs(e-o)<1e-6?1:e%o/parseFloat(o)}function P(e){return q(1,Y(0,e))}function j(e){return parseInt(e,16)}function L(e){return"string"==typeof e&&e.indexOf(".")!=-1&&1===parseFloat(e)}function E(e){return"string"==typeof e&&e.indexOf("%")!=-1}function H(e){return 1==e.length?"0"+e:""+e}function O(e){return e<=1&&(e=100*e+"%"),e}function z(e){return a.round(255*parseFloat(e)).toString(16)}function B(e){return j(e)/255}function D(e){return!!Z.CSS_UNIT.exec(e)}function I(e){e=e.replace($,"").replace(U,"").toLowerCase();var o=!1;if(G[e])e=G[e],o=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Z.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=Z.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Z.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=Z.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Z.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=Z.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Z.hex8.exec(e))?{r:j(t[1]),g:j(t[2]),b:j(t[3]),a:B(t[4]),format:o?"name":"hex8"}:(t=Z.hex6.exec(e))?{r:j(t[1]),g:j(t[2]),b:j(t[3]),format:o?"name":"hex"}:(t=Z.hex4.exec(e))?{r:j(t[1]+""+t[1]),g:j(t[2]+""+t[2]),b:j(t[3]+""+t[3]),a:B(t[4]+""+t[4]),format:o?"name":"hex8"}:!!(t=Z.hex3.exec(e))&&{r:j(t[1]+""+t[1]),g:j(t[2]+""+t[2]),b:j(t[3]+""+t[3]),format:o?"name":"hex"}}function T(e){var o,t;return e=e||{level:"AA",size:"small"},o=(e.level||"AA").toUpperCase(),t=(e.size||"small").toLowerCase(),"AA"!==o&&"AAA"!==o&&(o="AA"),"small"!==t&&"large"!==t&&(t="small"),{level:o,size:t}}var $=/^\s+/,U=/\s+$/,V=0,X=a.round,q=a.min,Y=a.max,W=a.random;i.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,o,t,r,i,n,s=this.toRgb();return e=s.r/255,o=s.g/255,t=s.b/255,r=e<=.03928?e/12.92:a.pow((e+.055)/1.055,2.4),i=o<=.03928?o/12.92:a.pow((o+.055)/1.055,2.4),n=t<=.03928?t/12.92:a.pow((t+.055)/1.055,2.4),.2126*r+.7152*i+.0722*n},setAlpha:function(e){return this._a=M(e),this._roundA=X(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),o=X(360*e.h),t=X(100*e.s),r=X(100*e.v);return 1==this._a?"hsv("+o+", "+t+"%, "+r+"%)":"hsva("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=l(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=l(this._r,this._g,this._b),o=X(360*e.h),t=X(100*e.s),r=X(100*e.l);return 1==this._a?"hsl("+o+", "+t+"%, "+r+"%)":"hsla("+o+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return h(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return f(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:X(this._r),g:X(this._g),b:X(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+X(this._r)+", "+X(this._g)+", "+X(this._b)+")":"rgba("+X(this._r)+", "+X(this._g)+", "+X(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:X(100*N(this._r,255))+"%",g:X(100*N(this._g,255))+"%",b:X(100*N(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+X(100*N(this._r,255))+"%, "+X(100*N(this._g,255))+"%, "+X(100*N(this._b,255))+"%)":"rgba("+X(100*N(this._r,255))+"%, "+X(100*N(this._g,255))+"%, "+X(100*N(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(K[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var o="#"+_(this._r,this._g,this._b,this._a),t=o,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=i(e);t="#"+_(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+o+",endColorstr="+t+")"},toString:function(e){var o=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0,a=!o&&r&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e);return a?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(t=this.toRgbString()),"prgb"===e&&(t=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(t=this.toHexString()),"hex3"===e&&(t=this.toHexString(!0)),"hex4"===e&&(t=this.toHex8String(!0)),"hex8"===e&&(t=this.toHex8String()),"name"===e&&(t=this.toName()),"hsl"===e&&(t=this.toHslString()),"hsv"===e&&(t=this.toHsvString()),t||this.toHexString())},clone:function(){return i(this.toString())},_applyModification:function(e,o){var t=e.apply(null,[this].concat([].slice.call(o)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,o){return e.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(A,arguments)},complement:function(){return this._applyCombination(C,arguments)},monochromatic:function(){return this._applyCombination(R,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(y,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},i.fromRatio=function(e,o){if("object"==typeof e){var t={};for(var r in e)e.hasOwnProperty(r)&&("a"===r?t[r]=e[r]:t[r]=O(e[r]));e=t}return i(e,o)},i.equals=function(e,o){return!(!e||!o)&&i(e).toRgbString()==i(o).toRgbString()},i.random=function(){return i.fromRatio({r:W(),g:W(),b:W()})},i.mix=function(e,o,t){t=0===t?0:t||50;var r=i(e).toRgb(),a=i(o).toRgb(),n=t/100,s={r:(a.r-r.r)*n+r.r,g:(a.g-r.g)*n+r.g,b:(a.b-r.b)*n+r.b,a:(a.a-r.a)*n+r.a};return i(s)},i.readability=function(e,o){var t=i(e),r=i(o);return(a.max(t.getLuminance(),r.getLuminance())+.05)/(a.min(t.getLuminance(),r.getLuminance())+.05)},i.isReadable=function(e,o,t){var r,a,n=i.readability(e,o);switch(a=!1,r=T(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=n>=4.5;break;case"AAlarge":a=n>=3;break;case"AAAsmall":a=n>=7}return a},i.mostReadable=function(e,o,t){var r,a,n,s,l=null,c=0;t=t||{},a=t.includeFallbackColors,n=t.level,s=t.size;for(var u=0;u<o.length;u++)r=i.readability(e,o[u]),r>c&&(c=r,l=i(o[u]));return i.isReadable(e,l,{level:n,size:s})||!a?l:(t.includeFallbackColors=!1,i.mostReadable(e,["#fff","#000"],t))};var G=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=i.hexNames=S(G),Z=function(){var e="[-\\+]?\\d+%?",o="[-\\+]?\\d*\\.\\d+%?",t="(?:"+o+")|(?:"+e+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",a="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof e&&e.exports?e.exports=i:(r=function(){return i}.call(o,t,o,e),!(void 0!==r&&(e.exports=r)))}(Math)},function(e,o,t){var r,a;t(64),r=t(9);var i=t(52);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(55),r=t(10);var i=t(43);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(59),r=t(11);var i=t(47);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(62),r=t(12);var i=t(50);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(63),r=t(13);var i=t(51);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(60),r=t(14);var i=t(48);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(e,o,t){var r,a;t(61),r=t(15);var i=t(49);a=r=r||{},"object"!=typeof r["default"]&&"function"!=typeof r["default"]||(a=r=r["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,e.exports=r},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__compact"},[_c("ul",{staticClass:"vue-color__compact__colors"},_l(defaultColors,function(e){return _c("li",{staticClass:"vue-color__compact__color-item","class":{"vue-color__compact__color-item--white":"#FFFFFF"===e},style:{background:e},on:{click:function(o){handlerClick(e)}}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:e===pick,expression:"c === pick"}],staticClass:"vue-color__compact__dot"})])})),_v(" ")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__editable-input"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:val,expression:"val"}],staticClass:"vue-color__editable-input__input",domProps:{value:_s(val)},on:{keydown:handleKeyDown,input:[function(e){e.target.composing||(val=e.target.value)},update]}}),_v(" "),_c("span",{staticClass:"vue-color__editable-input__label"},[_v(_s(label))])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{"class":["vue-color__c-hue",directionClass]},[_c("div",{ref:"container",staticClass:"vue-color__c-hue__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_c("div",{staticClass:"vue-color__c-hue__pointer",style:{top:pointerTop,left:pointerLeft}},[_c("div",{staticClass:"vue-color__c-hue__picker"})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{ref:"container",staticClass:"vue-color__saturation",style:{background:bgColor},on:{mousedown:handleMouseDown}},[_c("div",{staticClass:"vue-color__saturation--white"}),_v(" "),_c("div",{staticClass:"vue-color__saturation--black"}),_v(" "),_c("div",{staticClass:"vue-color__saturation--pointer",style:{top:pointerTop,left:pointerLeft}},[_c("div",{staticClass:"vue-color__saturation--circle"})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__material"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-color__material__hex",style:{borderColor:colors.hex},attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":onChange,input:function(e){colors.hex=e}}}),_v(" "),_c("div",{staticClass:"vue-color__material__split"},[_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":onChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":onChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__material__third"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":onChange,input:function(e){colors.rgba.b=e}}})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__slider"},[_c("div",{staticClass:"vue-color__slider__hue-warp"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":hueChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__slider__swatches"},_l(swatches,function(e,o){return _c("div",{staticClass:"vue-color__slider__swatch",attrs:{"data-index":o},on:{click:function(t){handleSwClick(o,e)}}},[_c("div",{staticClass:"vue-color__slider__swatch-picker","class":{"vue-color__slider__swatch-picker--active":e==activeOffset},style:{background:"hsl("+colors.hsl.h+", 50%, "+100*e+"%)"}})])}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__swatches",attrs:{"data-pick":pick}},[_c("div",{staticClass:"vue-color__swatches__box"},_l(defaultColors,function(e){return _c("div",{staticClass:"vue-color__swatches__color-group"},_l(e,function(e){return _c("div",{staticClass:"vue-color__swatches__color-it",style:{background:e},attrs:{"data-color":e},on:{click:function(o){handlerClick(e)}}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:e==pick,expression:"c == pick"}],staticClass:"vue-color__swatches__pick"},[_c("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[_c("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-colors__photoshop"},[_c("div",{staticClass:"vue-colors__photoshop__head"},[_v(_s(head))]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__body"},[_c("div",{staticClass:"vue-colors__photoshop__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],attrs:{direction:"vertical"},domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}},[_c("div",{staticClass:"vue-colors__photoshop__hue-pointer"},[_c("i",{staticClass:"vue-colors__photoshop__hue-pointer--left"}),_c("i",{staticClass:"vue-colors__photoshop__hue-pointer--right"})])])]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__controls"},[_c("div",{staticClass:"vue-colors__photoshop__previews"},[_c("div",{staticClass:"vue-colors__photoshop__previews__label"},[_v("new")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__swatches"},[_c("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:colors.hex}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__pr-color",style:{background:currentColor}})]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__previews__label"},[_v("current")])]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__actions"},[_c("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleAccept}},[_v("OK")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__ac-btn",on:{click:handleCancel}},[_v("Cancel")]),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"v"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields__divider"}),_v(" "),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}}),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}}),_v(" "),_c("div",{staticClass:"vue-colors__photoshop__fields__divider"}),_v(" "),_v(" "),_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],staticClass:"vue-colors__photoshop__fields__hex",attrs:{label:"#"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__sketch"},[_c("div",{staticClass:"vue-color__sketch__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__controls"},[_c("div",{staticClass:"vue-color__sketch__sliders"},[_c("div",{staticClass:"vue-color__sketch__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__alpha-wrap"},[_c("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__color-wrap"},[_c("div",{staticClass:"vue-color__sketch__active-color",style:{background:activeColor}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field"},[_c("div",{staticClass:"vue-color__sketch__field--double"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex
},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__sketch__field--single"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_c("div",{staticClass:"vue-color__sketch__presets"},_l(presetColors,function(e){return _c("div",{staticClass:"vue-color__sketch__presets-color",style:{background:e},on:{click:function(o){handlePreset(e)}}})}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__chrome"},[_c("div",{staticClass:"vue-color__chrome__saturation-wrap"},[_c("saturation",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__chrome-body"},[_c("div",{staticClass:"vue-color__chrome__controls"},[_c("div",{staticClass:"vue-color__chrome__color-wrap"},[_c("div",{staticClass:"vue-color__chrome__active-color",style:{background:activeColor}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__sliders"},[_c("div",{staticClass:"vue-color__chrome__hue-wrap"},[_c("hue",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__alpha-wrap"},[_c("alpha",{directives:[{name:"model",rawName:"v-model",value:colors,expression:"colors"}],domProps:{value:colors},on:{"on-change":childChange,input:function(e){colors=e}}})])])]),_v(" "),_c("div",{staticClass:"vue-color__chrome__fields-wrap"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:0===fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hex,expression:"colors.hex"}],attrs:{label:"hex"},domProps:{value:colors.hex},on:{"on-change":inputChange,input:function(e){colors.hex=e}}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:1===fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.r,expression:"colors.rgba.r"}],attrs:{label:"r"},domProps:{value:colors.rgba.r},on:{"on-change":inputChange,input:function(e){colors.rgba.r=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.g,expression:"colors.rgba.g"}],attrs:{label:"g"},domProps:{value:colors.rgba.g},on:{"on-change":inputChange,input:function(e){colors.rgba.g=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.rgba.b,expression:"colors.rgba.b"}],attrs:{label:"b"},domProps:{value:colors.rgba.b},on:{"on-change":inputChange,input:function(e){colors.rgba.b=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:2===fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vue-color__chrome__fields"},[_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.h,expression:"colors.hsl.h"}],attrs:{label:"h"},domProps:{value:colors.hsl.h},on:{"on-change":inputChange,input:function(e){colors.hsl.h=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.s,expression:"colors.hsl.s"}],attrs:{label:"s"},domProps:{value:colors.hsl.s},on:{"on-change":inputChange,input:function(e){colors.hsl.s=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.hsl.l,expression:"colors.hsl.l"}],attrs:{label:"l"},domProps:{value:colors.hsl.l},on:{"on-change":inputChange,input:function(e){colors.hsl.l=e}}})]),_v(" "),_c("div",{staticClass:"vue-color__chrome__field"},[_c("ed-in",{directives:[{name:"model",rawName:"v-model",value:colors.a,expression:"colors.a"}],attrs:{label:"a","arrow-offset":.01,max:1},domProps:{value:colors.a},on:{"on-change":inputChange,input:function(e){colors.a=e}}})])]),_v(" "),_v(" "),_c("div",{staticClass:"vue-color__chrome__toggle-btn",on:{click:toggleViews}},[_c("div",{staticClass:"vue-color__chrome__icon"},[_c("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:showHighlight,mouseenter:showHighlight,mouseout:hideHighlight}},[_c("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),_v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:highlight,expression:"highlight"}],staticClass:"vue-color__chrome__icon-highlight"})]),_v(" ")])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__c-alpha"},[_c("div",{staticClass:"vue-color__c-alpha__checkboard-wrap"},[_c("checkboard")]),_v(" "),_c("div",{staticClass:"vue-color__c-alpha__gradient",style:{background:gradientColor}}),_v(" "),_c("div",{ref:"container",staticClass:"vue-color__c-alpha__container",on:{mousedown:handleMouseDown,touchmove:handleChange,touchstart:handleChange}},[_c("div",{staticClass:"vue-color__c-alpha__pointer",style:{left:100*colors.a+"%"}},[_c("div",{staticClass:"vue-color__c-alpha__picker"})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _c("div",{staticClass:"vue-color__c-checkerboard",style:{background:bgStyle}})},staticRenderFns:[]}},function(e,o,t){var r=t(21);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(22);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(23);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(24);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(25);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(26);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(27);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(28);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(29);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(30);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(31);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,o,t){var r=t(32);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

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

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _inspectorSketch = __webpack_require__(335);

var _inspectorSketch2 = _interopRequireDefault(_inspectorSketch);

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(256);

var _collide2 = _interopRequireDefault(_collide);

var _uuid = __webpack_require__(243);

var _uuid2 = _interopRequireDefault(_uuid);

var _Action = __webpack_require__(247);

var _Action2 = _interopRequireDefault(_Action);

var _tags = __webpack_require__(392);

var _tags2 = _interopRequireDefault(_tags);

var _commonService = __webpack_require__(138);

var _commonService2 = _interopRequireDefault(_commonService);

var _scoutings = __webpack_require__(226);

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

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _timelineSketch = __webpack_require__(337);

var _timelineSketch2 = _interopRequireDefault(_timelineSketch);

var _scoutings = __webpack_require__(226);

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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _player = __webpack_require__(380);

var _player2 = _interopRequireDefault(_player);

var _Touch = __webpack_require__(277);

var _Touch2 = _interopRequireDefault(_Touch);

var _mockstate = __webpack_require__(137);

var _actions = __webpack_require__(338);

var _store = __webpack_require__(339);

var _veeValidate = __webpack_require__(7);

var _veeValidate2 = _interopRequireDefault(_veeValidate);

var _newTouchForm = __webpack_require__(388);

var _newTouchForm2 = _interopRequireDefault(_newTouchForm);

var _editTouchForm = __webpack_require__(387);

var _editTouchForm2 = _interopRequireDefault(_editTouchForm);

var _touchesList = __webpack_require__(389);

var _touchesList2 = _interopRequireDefault(_touchesList);

var _timeline = __webpack_require__(386);

var _timeline2 = _interopRequireDefault(_timeline);

var _inspector = __webpack_require__(385);

var _inspector2 = _interopRequireDefault(_inspector);

var _collide = __webpack_require__(256);

var _collide2 = _interopRequireDefault(_collide);

var _pageHeader = __webpack_require__(195);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _scoutingService = __webpack_require__(242);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _scoutingTouchService = __webpack_require__(342);

var _scoutingTouchService2 = _interopRequireDefault(_scoutingTouchService);

var _Action = __webpack_require__(247);

var _Action2 = _interopRequireDefault(_Action);

var _uuid = __webpack_require__(243);

var _uuid2 = _interopRequireDefault(_uuid);

var _errorPresenter = __webpack_require__(346);

var _errorPresenter2 = _interopRequireDefault(_errorPresenter);

var _scoutings = __webpack_require__(226);

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
                href: '/dashboard',
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

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _vueColor = __webpack_require__(280);

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _collide = __webpack_require__(256);

var _collide2 = _interopRequireDefault(_collide);

var _scoutings = __webpack_require__(226);

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
            var _this = this;

            this.$validator.validateAll().then(function () {
                if (_this.touch.start >= _this.touch.end) {
                    _this.endInvalid = true;
                } else {
                    _this.endInvalid = false;
                    if (!_this.collide) {
                        _this.$emit('add-new-touch', _this.touch);
                    }
                }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _vueColor = __webpack_require__(280);

var _TimeConverter = __webpack_require__(233);

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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mockstate = __webpack_require__(137);

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _scoutings = __webpack_require__(226);

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

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tagDropdown = __webpack_require__(391);

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
            var tagDropdown = _.cloneDeep(tag);
            this.$emit('tag-clicked', tagDropdown);
        },
        tagClicked: function tagClicked() {
            var tag = _.cloneDeep(this.tag);
            this.$emit('tag-clicked', tag);
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

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(243);

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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tag = __webpack_require__(390);

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

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mockstate = __webpack_require__(137);

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

/***/ 329:
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

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(137);

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

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(137);

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

/***/ 332:
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

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(137);

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

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeConverter = __webpack_require__(233);

var _TimeConverter2 = _interopRequireDefault(_TimeConverter);

var _mockstate = __webpack_require__(137);

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

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _mockstate = __webpack_require__(137);

var _InspectorStage = __webpack_require__(332);

var _InspectorStage2 = _interopRequireDefault(_InspectorStage);

var _InspectorTimeline = __webpack_require__(333);

var _InspectorTimeline2 = _interopRequireDefault(_InspectorTimeline);

var _InspectorVideoTimeMarker = __webpack_require__(334);

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

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Touch = __webpack_require__(277);

var _Touch2 = _interopRequireDefault(_Touch);

var _Action = __webpack_require__(247);

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

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sketch;

var _Stage = __webpack_require__(329);

var _Stage2 = _interopRequireDefault(_Stage);

var _Timeline = __webpack_require__(330);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _TouchManager = __webpack_require__(328);

var _TouchManager2 = _interopRequireDefault(_TouchManager);

var _VideoTimeMarker = __webpack_require__(331);

var _VideoTimeMarker2 = _interopRequireDefault(_VideoTimeMarker);

var _touchesSpec = __webpack_require__(336);

var _touchesSpec2 = _interopRequireDefault(_touchesSpec);

var _mockstate = __webpack_require__(137);

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

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actions = undefined;

var _mockstate = __webpack_require__(137);

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

/***/ 339:
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

/***/ 342:
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

/***/ 346:
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

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tags a {\n  border-radius: 0 !important;\n  margin: 0 !important;\n}\n.close {\n  color: #ffffff !important;\n  opacity: 0.8 !important;\n}\n.tags-list {\n  display: block;\n  width: 100%;\n}\n.tags-list .label {\n  padding: 10px;\n  font-size: 12px;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.tags-list .label .close {\n    font-size: 16px;\n    margin-left: 5px;\n}\n.tags-list div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n}\n.tags-list div .label,\n  .gu-mirror .label {\n    padding: 10px;\n    line-height: 1.4;\n    font-size: 12px;\n    margin-left: 5px;\n    margin-top: 5px;\n}\n.tags-list div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n  display: inline-block;\n}\n.tags-list div:last-child {\n  margin-bottom: 0;\n}\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n.gu-mirror .label .close {\n    display: none;\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n.gu-transit .close {\n    display: none;\n}\n.tags-list .ex-moved {\n  background-color: #e74c3c;\n}\n.tags-list.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n", ""]);

// exports


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.inspector-info {\n  margin-left: 10px;\n}\n.inspector-info .inspector-info--title {\n    margin: 0 10px;\n}\n.athlete-menu .dropdown {\n  display: inline-block !important;\n}\n.athlete-menu .athlete-menu-title {\n  border-top: 1px solid #d3e0e9;\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding: 0 10px;\n}\n.athlete-menu .athlete-menu-left {\n  border-left: 1px solid #d3e0e9;\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n.athlete-menu .athlete-menu-right {\n  border-right: 1px solid #d3e0e9;\n  padding-bottom: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"timeline.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"newTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/newTouchForm.vue?bb999bae"],"names":[],"mappings":";AA6SA;IACA,uBAAA;CACA","file":"newTouchForm.vue","sourcesContent":["<template>\r\n    <div>\r\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\" v-if=\"open\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.text') }\">\r\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\r\n                            Title\r\n                        </label>\r\n                        <div class=\"col-xs-10\">\r\n\r\n                            <input id=\"new-title\" name=\"new-title\" type=\"text\"\r\n                                   v-validate.initial=\"touch.text\"\r\n                                   data-rules=\"required\"\r\n                                   data-as=\"Title\"\r\n                                   class=\"form-control\"\r\n                                   placeholder=\"Title\"\r\n                                   v-model=\"touch.text\">\r\n                            <span class=\"text-danger\"\r\n                                  v-show=\"errors.has('touch.text')\">{{ errors.first('touch.text') }}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\r\n                            Color\r\n                        </label>\r\n                        <div class=\"col-xs-10\">\r\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.start') }\">\r\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\r\n                            Start (sec)\r\n                        </label>\r\n                        <div class=\"col-xs-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-6\">\r\n                                    <input id=\"new-start\" name=\"new-start\" type=\"text\"\r\n                                           v-validate.initial=\"touch.start\"\r\n                                           data-rules=\"required|numeric\"\r\n                                           data-as=\"Start\"\r\n                                           class=\"form-control\"\r\n                                           placeholder=\"Start\"\r\n                                           v-model=\"touch.start\">\r\n                                </div>\r\n                                <div class=\"col-xs-6\">\r\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\r\n                                           class=\"form-control\"\r\n                                           placeholder=\"Start\"\r\n                                           disabled\r\n                                           v-model=\"startFmt\">\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"text-danger\"\r\n                                  v-show=\"errors.has('touch.start')\">{{ errors.first('touch.start') }}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touch.end') }\">\r\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\r\n                            End(sec)\r\n                        </label>\r\n                        <div class=\"col-xs-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-6\">\r\n                                    <input id=\"new-end\" name=\"new-end\" type=\"text\"\r\n                                           v-validate.initial=\"touch.end\"\r\n                                           data-rules=\"required|numeric\"\r\n                                           data-as=\"End\"\r\n                                           class=\"form-control\"\r\n                                           placeholder=\"End\"\r\n                                           v-model=\"touch.end\">\r\n                                </div>\r\n                                <div class=\"col-xs-6\">\r\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\r\n                                           class=\"form-control\"\r\n                                           placeholder=\"Start\"\r\n                                           disabled\r\n                                           v-model=\"endFmt\">\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"text-danger\"\r\n                                  v-show=\"errors.has('touch.end')\">{{ errors.first('touch.end') }}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" v-if=\"collide\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"alert alert-danger\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n                        <h4><i class=\"icon fa fa-ban\"></i> Touches cant overlap!</h4>\r\n                        The touch that you want to add overlap with:\r\n                        <ul>\r\n                            <li v-for=\"touch in collideTouches\">\r\n                                <strong v-if=\"touch.previous.hasOwnProperty('id')\">{{touch.previous.text}}: that\r\n                                    starts\r\n                                    on {{toHHMMSS(touch.previous.start)}} an\r\n                                    ends on\r\n                                    {{toHHMMSS(touch.previous.end)}}</strong>\r\n                                <strong v-if=\"touch.current.hasOwnProperty('id')\">{{touch.current.text}}: that\r\n                                    starts on\r\n                                    {{toHHMMSS(touch.current.start)}} an\r\n                                    ends on\r\n                                    {{toHHMMSS(touch.current.end)}}</strong>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" v-if=\"endInvalid\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"alert alert-danger\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n                        <h4><i class=\"icon fa fa-ban\"></i> Validation Error!</h4>\r\n                        The end of the touch must be greater than the start\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 text-right\">\r\n                    <button type=\"submit\" class=\"btn btn-success\">Add Touch</button>\r\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</template>\r\n<style>\r\n\r\n</style>\r\n<script>\r\n    import {getState} from 'mockstate';\r\n    import {Compact} from 'vue-color';\r\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\r\n    export default{\r\n        props: {\r\n            open: {},\r\n            initTouch: {\r\n                default: function () {\r\n                    return {\r\n                        initialized: false,\r\n                        text: null,\r\n                        start: 0,\r\n                        end: 100,\r\n                        color: {\r\n                            \"hsl\": {\"h\": 61.0762331838565, \"s\": 1, \"l\": 0.4372549019607843, \"a\": 1},\r\n                            \"hex\": \"#DBDF00\",\r\n                            \"rgba\": {\"r\": 219, \"g\": 223, \"b\": 0, \"a\": 1, \"alpha\": 50},\r\n                            \"hsv\": {\"h\": 61.0762331838565, \"s\": 1, \"v\": 0.8745098039215686, \"a\": 1},\r\n                        }\r\n                    }\r\n                }\r\n            },\r\n            duration: {},\r\n            start: {},\r\n            end: {}\r\n        },\r\n        watch: {\r\n            open(val){\r\n                this.touch = Object.assign({}, this.initTouch);\r\n            },\r\n            start(val){\r\n                this.touch.start = val;\r\n            },\r\n            end(val){\r\n                this.touch.end = val\r\n            },\r\n            'touch.start': function () {\r\n                this.checkCollide()\r\n            },\r\n            'touch.end': function () {\r\n                this.checkCollide();\r\n                this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(this.duration));\r\n            }\r\n        },\r\n        data(){\r\n            return {\r\n                collide: false,\r\n                collideTouches: [],\r\n                endInvalid: false,\r\n                touch: {\r\n                    text: null,\r\n                    start: 0,\r\n                    end: 0,\r\n                    color: {\r\n                        rgba: {\r\n                            r: 25,\r\n                            g: 77,\r\n                            b: 51,\r\n                            a: 1\r\n                        },\r\n                    }\r\n                }\r\n            }\r\n        },\r\n        computed: {\r\n            startFmt(){\r\n                return TimeConverter.toHHMMSS(this.touch.start)\r\n            },\r\n            endFmt(){\r\n                return TimeConverter.toHHMMSS(this.touch.end)\r\n            },\r\n            validationEnd(){\r\n                return parseInt(this.touch.start) + 1;\r\n            }\r\n        },\r\n        components: {\r\n            'compact-picker': Compact,\r\n        },\r\n        methods: {\r\n            close(){\r\n                this.$emit('cancel-new-touch');\r\n            },\r\n            toHHMMSS(secs) {\r\n                return TimeConverter.toHHMMSS(secs)\r\n            },\r\n            onChangeColor(val){\r\n                this.touch.color = val\r\n            },\r\n            checkCollide(){\r\n                var touchs = getState('touchManager').touches.slice(0);\r\n                touchs.push(this.touch);\r\n                var overlap = this.overlap(touchs);\r\n                this.collide = overlap.overlap;\r\n                this.collideTouches = overlap.ranges;\r\n            },\r\n            overlap(touchs){\r\n                var sortedRanges = touchs.sort((previous, current) => {\r\n\r\n                    var previousTime = parseInt(previous.start);\r\n                    var currentTime = parseInt(current.start);\r\n\r\n                    // if the previous is earlier than the current\r\n                    if (previousTime < currentTime) {\r\n                        return -1;\r\n                    }\r\n\r\n                    // if the previous time is the same as the current time\r\n                    if (previousTime === currentTime) {\r\n                        return 0;\r\n                    }\r\n\r\n                    // if the previous time is later than the current time\r\n                    return 1;\r\n                });\r\n\r\n                // return the final results\r\n                return sortedRanges.reduce((result, current, idx, arr) => {\r\n                    // get the previous range\r\n                    if (idx === 0) {\r\n                        return result;\r\n                    }\r\n                    var previous = arr[idx - 1];\r\n\r\n                    // check for any overlap\r\n                    var previousEnd = parseInt(previous.end);\r\n                    var currentStart = parseInt(current.start);\r\n                    var overlap = (previousEnd >= currentStart);\r\n\r\n                    // store the result\r\n                    if (overlap) {\r\n                        // yes, there is overlap\r\n                        result.overlap = true;\r\n                        // store the specific ranges that overlap\r\n                        result.ranges.push({\r\n                            previous: previous,\r\n                            current: current\r\n                        })\r\n                    }\r\n\r\n                    return result;\r\n\r\n                    // seed the reduce\r\n                }, {overlap: false, ranges: []});\r\n            },\r\n            onSubmit(){\r\n                this.$validator.validateAll();\r\n                if (this.errors.any()) {\r\n\r\n                } else {\r\n                    this.endInvalid = !!(parseInt(this.touch.start) >= parseInt(this.touch.end) || parseInt(this.touch.end) > parseInt(Math.floor(this.$parent.$refs.player.api().duration())));\r\n                    if (!this.endInvalid) {\r\n                        if (!this.collide) {\r\n                            this.endInvalid = false;\r\n                            this.$emit('add-new-touch', this.touch);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n</script>\r\n<style>\r\n    .vue-color__compact {\r\n        width: 100% !important;\r\n    }\r\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tag {\n    display: inline-block;\n    color: #717171;\n    background: #FFF;\n    box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\n    -webkit-transition: all .1s ease-in-out;\n    transition: all .1s ease-in-out;\n    border-radius: 2px;\n    margin: 0 3px 6px 0;\n    padding: 5px 10px;\n    text-decoration: none;\n    cursor: pointer;\n}\n.tags .tag:hover {\n    border-color: #08C;\n}\n.tags .tag.primary {\n    color: #FFF;\n    background-color: #428BCA;\n    border-color: #357EBD\n}\n.tags .tag.success {\n    color: #FFF;\n    background-color: #5CB85C;\n    border-color: #4CAE4C\n}\n.tags .tag.info {\n    color: #FFF;\n    background-color: #5BC0DE;\n    border-color: #46B8DA\n}\n.tags .tag.warning {\n    color: #FFF;\n    background-color: #F0AD4E;\n    border-color: #EEA236\n}\n.tags .tag.danger {\n    color: #FFF;\n    background-color: #D9534F;\n    border-color: #D43F3A\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tag.vue?1a20bac2"],"names":[],"mappings":";AAOA;IACA,sBAAA;IACA,eAAA;IACA,iBAAA;IAEA,iDAAA;IACA,wCAAA;IAIA,gCAAA;IACA,mBAAA;IACA,oBAAA;IACA,kBAAA;IACA,sBAAA;IACA,gBAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA;AAEA;IACA,YAAA;IACA,0BAAA;IACA,qBAAA;CACA","file":"tag.vue","sourcesContent":["<template>\r\n    <tag-dropdown v-if=\"tag.dropdown\" v-on:option-clicked=\"dropdownOptionClicked\" :tag=\"tag\"></tag-dropdown>\r\n    <div v-else class=\"tag-dropdown\">\r\n        <a class=\" btn tag\" v-on:click.prevent=\"tagClicked\" :class=\"'bg-'+tag.color\">{{tag.name}}</a>\r\n    </div>\r\n</template>\r\n<style>\r\n    .tag {\r\n        display: inline-block;\r\n        color: #717171;\r\n        background: #FFF;\r\n        -webkit-box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\r\n        box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);\r\n        -webkit-transition: all .1s ease-in-out;\r\n        -moz-transition: all .1s ease-in-out;\r\n        -o-transition: all .1s ease-in-out;\r\n        -ms-transition: all .1s ease-in-out;\r\n        transition: all .1s ease-in-out;\r\n        border-radius: 2px;\r\n        margin: 0 3px 6px 0;\r\n        padding: 5px 10px;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .tags .tag:hover {\r\n        border-color: #08C;\r\n    }\r\n\r\n    .tags .tag.primary {\r\n        color: #FFF;\r\n        background-color: #428BCA;\r\n        border-color: #357EBD\r\n    }\r\n\r\n    .tags .tag.success {\r\n        color: #FFF;\r\n        background-color: #5CB85C;\r\n        border-color: #4CAE4C\r\n    }\r\n\r\n    .tags .tag.info {\r\n        color: #FFF;\r\n        background-color: #5BC0DE;\r\n        border-color: #46B8DA\r\n    }\r\n\r\n    .tags .tag.warning {\r\n        color: #FFF;\r\n        background-color: #F0AD4E;\r\n        border-color: #EEA236\r\n    }\r\n\r\n    .tags .tag.danger {\r\n        color: #FFF;\r\n        background-color: #D9534F;\r\n        border-color: #D43F3A\r\n    }\r\n</style>\r\n<script>\r\n    import tagDropdown from './tagDropdown.vue'\r\n\r\n    export default{\r\n        props: {\r\n            tag: {}\r\n        },\r\n        components: {\r\n            tagDropdown\r\n        },\r\n        methods: {\r\n            dropdownOptionClicked(tag){\r\n                let tagDropdown = _.cloneDeep(tag);\r\n                this.$emit('tag-clicked', tagDropdown)\r\n            },\r\n            tagClicked(){\r\n                let tag = _.cloneDeep(this.tag);\r\n                this.$emit('tag-clicked', tag)\r\n            }\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.tag-dropdown {\n    display: inline-block !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/tags/tagDropdown.vue?6c3b9a65"],"names":[],"mappings":";AAcA;IACA,iCAAA;CACA","file":"tagDropdown.vue","sourcesContent":["<template>\r\n    <div class=\"dropdown tag-dropdown\">\r\n        <a class=\"dropdown-toggle btn tag\" :class=\"'bg-'+tag.color\"\r\n           data-toggle=\"dropdown\" aria-expanded=\"false\" :id=\"id\">{{tag.name}}\r\n            <span class=\"fa fa-caret-down\"></span>\r\n        </a>\r\n        <ul class=\"dropdown-menu\" :aria-labelledby=\"id\">\r\n            <li v-for=\"opt in tag.options\">\r\n                <a href=\"#\" v-on:click.prevent=\"clickOpt(opt)\">{{opt.name}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</template>\r\n<style>\r\n    .tag-dropdown {\r\n        display: inline-block !important;\r\n    }\r\n</style>\r\n<script>\r\n    import uuid from 'base/mixins/uuid'\r\n    export default{\r\n        props: {\r\n            tag: {},\r\n        },\r\n        data(){\r\n            return {\r\n                id: ''\r\n            }\r\n        },\r\n        mixins: [uuid],\r\n        mounted(){\r\n            this.id = this.generateUUID();\r\n        },\r\n        methods: {\r\n            clickOpt(opt){\r\n                this.tag.option = opt;\r\n                this.$emit('option-clicked', this.tag)\r\n            }\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"editTouchForm.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.vue-color__compact {\n    width: 100% !important;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/scouting/touches/forms/editTouchForm.vue?39ef9ce0"],"names":[],"mappings":";AAqQA;IACA,uBAAA;CACA","file":"editTouchForm.vue","sourcesContent":["<template>\r\n    <div>\r\n        <form action=\"\" v-on:submit.prevent=\"onSubmit\" class=\"form-horizontal form-touch\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchtext') }\">\r\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\r\n                            {{$t('scoutings.title')}}\r\n                        </label>\r\n                        <div class=\"col-xs-10\">\r\n                            <input id=\"new-title\"\r\n                                   name=\"touchtext\"\r\n                                   type=\"text\"\r\n                                   v-validate.initial\r\n                                   data-vv-rules=\"required\"\r\n                                   data-vv-as=\"Title\"\r\n                                   class=\"form-control\"\r\n                                   placeholder=\"Title\"\r\n                                   v-model=\"touch.text\">\r\n                            <span class=\"text-danger\"\r\n                                  v-show=\"errors.has('touchtext')\">{{ errors.first('touchtext') }}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"new-title\" class=\"control-label col-xs-2\">\r\n                            {{$t('scoutings.color')}}\r\n                        </label>\r\n                        <div class=\"col-xs-10\">\r\n                            <compact-picker v-model=\"touch.color\" @change-color=\"onChangeColor\"></compact-picker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchstart') }\">\r\n                        <label for=\"new-start\" class=\"control-label col-xs-2\">\r\n                            {{$t('scoutings.start')}}\r\n                        </label>\r\n                        <div class=\"col-xs-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-6\">\r\n                                    <input id=\"new-start\"\r\n                                           name=\"touchstart\"\r\n                                           type=\"text\"\r\n                                           v-validate.initial\r\n                                           data-vv-rules=\"required|numeric\"\r\n                                           data-vv-as=\"Start\"\r\n                                           class=\"form-control\"\r\n                                           placeholder=\"Start\"\r\n                                           v-model=\"touch.start\">\r\n                                </div>\r\n                                <div class=\"col-xs-6\">\r\n                                    <input id=\"new-start-fmt\" name=\"new-start-fmt\" type=\"text\"\r\n                                           class=\"form-control\"\r\n                                           placeholder=\"Start\"\r\n                                           disabled\r\n                                           v-model=\"startFmt\">\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"text-danger\"\r\n                                  v-show=\"errors.has('touchstart')\">{{ errors.first('touchstart') }}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\" :class=\"{'has-error': errors.has('touchend') }\">\r\n                        <label for=\"new-end\" class=\"control-label col-xs-2\">\r\n                            {{$t('scoutings.end')}}\r\n                        </label>\r\n                        <div class=\"col-xs-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-6\">\r\n                                    <input id=\"new-end\"\r\n                                           name=\"touchend\"\r\n                                           type=\"text\"\r\n                                           v-validate.initial\r\n                                           data-vv-rules=\"required|numeric\"\r\n                                           data-vv-as=\"End\"\r\n                                           class=\"form-control\"\r\n                                           placeholder=\"End\"\r\n                                           v-model=\"touch.end\">\r\n                                </div>\r\n                                <div class=\"col-xs-6\">\r\n                                    <input id=\"new-end-fmt\" name=\"new-end-fmt\" type=\"text\"\r\n                                           class=\"form-control\"\r\n                                           placeholder=\"Start\"\r\n                                           disabled\r\n                                           v-model=\"endFmt\">\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"text-danger\"\r\n                                  v-show=\"errors.has('touchend')\">{{ errors.first('touchend') }}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" v-if=\"collide\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"alert alert-danger\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n                        <h4>\r\n                            <i class=\"icon fa fa-ban\"></i>\r\n                            {{$t('scoutings.touches_cant_overlap')}}\r\n                        </h4>\r\n                        {{$t('scoutings.touch_overlap_with')}}:\r\n                        <ul>\r\n                            <li v-for=\"collideTouch in collideTouches\">\r\n                                <strong v-if=\"collideTouch.previous.id != touch.id\">\r\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\r\n                                    collideTouch.previous.text,start:toHHMMSS(collideTouch.previous.start),end:\r\n                                    toHHMMSS(collideTouch.previous.end)})}}\r\n                                </strong>\r\n                                <strong v-if=\"collideTouch.current.id != touch.id\">\r\n                                    {{$t('scoutings.touch_overlap_msg',{ title:\r\n                                    collideTouch.current.text,start:toHHMMSS(collideTouch.current.start),end:\r\n                                    toHHMMSS(collideTouch.current.end)})}}\r\n                                </strong>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" v-if=\"endInvalid\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"alert alert-danger\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n                        <h4>\r\n                            <i class=\"icon fa fa-ban\"></i>\r\n                            {{$t('scoutings.validation_error')}}\r\n                        </h4>\r\n                        {{$t('scoutings.validation_end_greater')}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 text-right\">\r\n                    <button type=\"submit\" class=\"btn btn-success\">{{$t('scoutings.save')}}</button>\r\n                    <button class=\"btn btn-danger\" v-on:click.prevent=\"close\">{{$t('scoutings.cancel')}}</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</template>\r\n<style>\r\n\r\n</style>\r\n<script>\r\n    import {getState} from 'mockstate';\r\n    import {Compact} from 'vue-color';\r\n    import TimeConverter from '../sketch/components/utils/TimeConverter'\r\n    import collideMixin from 'base/mixins/collide'\r\n    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';\r\n\r\n    export default{\r\n        locales: scoutingsLocales,\r\n        props: {\r\n            initTouch: {\r\n                default: function () {\r\n                    return {\r\n                        initialized: false,\r\n                        text: null,\r\n                        start: 0,\r\n                        end: 100,\r\n                        color: {\r\n                            rgba: {\r\n                                r: 25,\r\n                                g: 77,\r\n                                b: 51,\r\n                                a: 1\r\n                            },\r\n                        }\r\n                    }\r\n                }\r\n            },\r\n            duration: {},\r\n        },\r\n        mixins: [collideMixin],\r\n        created(){\r\n            this.touch = Object.assign({}, this.initTouch);\r\n        },\r\n        watch: {\r\n            'touch.start': function () {\r\n                var collideResult = this.checkCollide(this.touch);\r\n                this.collide = collideResult.collide;\r\n                this.collideTouches = collideResult.collideTouches;\r\n            },\r\n            'touch.end': function () {\r\n                var collideResult = this.checkCollide(this.touch);\r\n                this.collide = collideResult.collide;\r\n                this.collideTouches = collideResult.collideTouches;\r\n                this.endInvalid = parseInt(this.touch.start) >= parseInt(this.touch.end);\r\n            }\r\n        },\r\n        data(){\r\n            return {\r\n                collide: false,\r\n                collideTouches: [],\r\n                endInvalid: false,\r\n                touch: {\r\n                    text: null,\r\n                    start: 0,\r\n                    end: 0,\r\n                    color: {\r\n                        rgba: {\r\n                            r: 25,\r\n                            g: 77,\r\n                            b: 51,\r\n                            a: 1\r\n                        },\r\n                    }\r\n                }\r\n            }\r\n        },\r\n        computed: {\r\n            startFmt(){\r\n                return TimeConverter.toHHMMSS(this.touch.start)\r\n            },\r\n            endFmt(){\r\n                return TimeConverter.toHHMMSS(this.touch.end)\r\n            },\r\n            validationEnd(){\r\n                return parseInt(this.touch.start) + 1;\r\n            }\r\n        },\r\n        components: {\r\n            'compact-picker': Compact,\r\n        },\r\n        methods: {\r\n            close(){\r\n                this.$emit('cancel-new-touch', this.touch);\r\n            },\r\n            toHHMMSS(secs) {\r\n                return TimeConverter.toHHMMSS(secs)\r\n            },\r\n            onChangeColor(val){\r\n                this.touch.color = val\r\n            },\r\n            onSubmit(){\r\n                this.$validator.validateAll().then(()=> {\r\n                    if (this.touch.start >= this.touch.end) {\r\n                        this.endInvalid = true;\r\n                    } else {\r\n                        this.endInvalid = false;\r\n                        if (!this.collide) {\r\n                            this.$emit('add-new-touch', this.touch);\r\n                        }\r\n                    }\r\n                }).catch(bag => {\r\n                    this.$root.errorToast(this.$t('admin.validation_error'));\r\n                });\r\n            }\r\n        }\r\n    }\r\n</script>\r\n<style>\r\n    .vue-color__compact {\r\n        width: 100% !important;\r\n    }\r\n</style>"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"touchesList.vue","sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n#video-canvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    padding-right: 15px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/components/global/video/player.vue?5612b672"],"names":[],"mappings":";AAWA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,OAAA;IACA,oBAAA;CACA","file":"player.vue","sourcesContent":["<template>\r\n    <div>\r\n        <video ref=\"player\"\r\n               class=\"video-js vjs-default-skin\"\r\n               controls preload=\"auto\"\r\n               :poster=\"poster\"\r\n               :data-setup=\"strSource\"\r\n        ></video>\r\n    </div>\r\n</template>\r\n<style>\r\n    #video-canvas {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        padding-right: 15px;\r\n    }\r\n</style>\r\n<script>\r\n    import {dispatch, getState} from 'mockstate';\r\n\r\n    export default{\r\n        data(){\r\n            return {\r\n                player: {}\r\n            }\r\n        },\r\n        props: {\r\n            source: {\r\n                type: Object\r\n            },\r\n            poster: {\r\n                type: String\r\n            },\r\n            offset: {\r\n                type: Object,\r\n                default: function () {\r\n                    return {\r\n                        start: false,\r\n                        end: false\r\n                    }\r\n                }\r\n            }\r\n        },\r\n        components: {},\r\n        computed: {\r\n            strSource(){\r\n                return JSON.stringify(this.source)\r\n            }\r\n        },\r\n        mounted(){\r\n            this.initPlayer(this.source);\r\n        },\r\n        methods: {\r\n            api(){\r\n                return this.player\r\n            },\r\n            initPlayer(source){\r\n                var self = this;\r\n                console.log(self.source);\r\n                let config = {\r\n                    fluid: true,\r\n                    source: source.sources[0],\r\n                    techOrder: ['youtube'],\r\n                    playbackRates: [0.25, 0.5, 1, 1.5, 2],\r\n                    plugins: {\r\n                        disableProgress: {},\r\n                        abLoopPlugin: {\r\n                            enabled: false,\r\n                            loopIfBeforeStart: false, //allow video to play normally before the loop section? defaults to true\r\n                            looopIfAfterEnd: true, // defaults to true\r\n                            pauseAfterLooping: false,       //if true, after looping video will pause. Defaults to false\r\n                            pauseBeforeLooping: false,      //if true, before looping video will pause. Defaults to false\r\n                            createButtons: false,  //defaults to true\r\n                        }\r\n                    }\r\n                };\r\n                if (this.offset.start) {\r\n                    config.plugins.dncoffset = {\r\n                        startOffset: this.offset.start,\r\n                        endOffset: this.offset.end\r\n                    }\r\n                }\r\n                this.player = videojs(this.$refs.player, config);\r\n                dispatch('setPlayer', this.player);\r\n                this.player.play();\r\n                this.player.on('timeupdate', function durationSetter(event) {\r\n                    var state = getState('*');\r\n                    if (!state.player.duration) {\r\n                        dispatch('setDuration', state.player.instance.duration());\r\n                        dispatch('setZoom', 1);\r\n                        if (state.player.duration) {\r\n                            dispatch('playerReady', true);\r\n                            state.player.instance.off('timeupdate', durationSetter)\r\n                        }\r\n                    } else {\r\n                        dispatch('playerReady', true);\r\n                        state.player.instance.off('timeupdate', durationSetter)\r\n                    }\r\n                });\r\n                this.player.playbackRate(1);\r\n                this.player.on('timeupdate', ()=> {\r\n                    dispatch('setCurrentTime', this.player.currentTime());\r\n                });\r\n            }\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(464)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(432),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\components\\global\\video\\player.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] player.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb792b66", Component.options)
  } else {
    hotAPI.reload("data-v-fb792b66", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(438)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(314),
  /* template */
  __webpack_require__(421),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\canvas\\inspector.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] inspector.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a199e696", Component.options)
  } else {
    hotAPI.reload("data-v-a199e696", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(442)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(315),
  /* template */
  __webpack_require__(395),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\canvas\\timeline.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timeline.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10391ef3", Component.options)
  } else {
    hotAPI.reload("data-v-10391ef3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(455)
__webpack_require__(456)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(317),
  /* template */
  __webpack_require__(418),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\forms\\editTouchForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] editTouchForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8592ea0c", Component.options)
  } else {
    hotAPI.reload("data-v-8592ea0c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(445)
__webpack_require__(446)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(318),
  /* template */
  __webpack_require__(400),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\forms\\newTouchForm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newTouchForm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c2ec89c", Component.options)
  } else {
    hotAPI.reload("data-v-1c2ec89c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(457)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(319),
  /* template */
  __webpack_require__(420),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\lists\\touchesList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] touchesList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9640875c", Component.options)
  } else {
    hotAPI.reload("data-v-9640875c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(447)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(402),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\tags\\tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b1866ce", Component.options)
  } else {
    hotAPI.reload("data-v-2b1866ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(449)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(321),
  /* template */
  __webpack_require__(406),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\tags\\tagDropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tagDropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cb6634a", Component.options)
  } else {
    hotAPI.reload("data-v-3cb6634a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(437)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(322),
  /* template */
  __webpack_require__(413),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\scouting\\touches\\tags\\tags.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tags.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67b167aa", Component.options)
  } else {
    hotAPI.reload("data-v-67b167aa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 395:
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
     require("vue-hot-reload-api").rerender("data-v-10391ef3", module.exports)
  }
}

/***/ }),

/***/ 400:
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
     require("vue-hot-reload-api").rerender("data-v-1c2ec89c", module.exports)
  }
}

/***/ }),

/***/ 402:
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
     require("vue-hot-reload-api").rerender("data-v-2b1866ce", module.exports)
  }
}

/***/ }),

/***/ 406:
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
     require("vue-hot-reload-api").rerender("data-v-3cb6634a", module.exports)
  }
}

/***/ }),

/***/ 413:
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
     require("vue-hot-reload-api").rerender("data-v-67b167aa", module.exports)
  }
}

/***/ }),

/***/ 418:
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
      'has-error': _vm.errors.has('touchtext')
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
      "name": "touchtext",
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
      value: (_vm.errors.has('touchtext')),
      expression: "errors.has('touchtext')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touchtext')) + "\n                        ")])])])]), _vm._v(" "), _c('div', {
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
      'has-error': _vm.errors.has('touchstart')
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
      "name": "touchstart",
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
      value: (_vm.errors.has('touchstart')),
      expression: "errors.has('touchstart')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touchstart')) + "\n                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('touchend')
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
      "name": "touchend",
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
      value: (_vm.errors.has('touchend')),
      expression: "errors.has('touchend')"
    }],
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.first('touchend')) + "\n                        ")])])])])]), _vm._v(" "), (_vm.collide) ? _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-8592ea0c", module.exports)
  }
}

/***/ }),

/***/ 420:
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
     require("vue-hot-reload-api").rerender("data-v-9640875c", module.exports)
  }
}

/***/ }),

/***/ 421:
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
     require("vue-hot-reload-api").rerender("data-v-a199e696", module.exports)
  }
}

/***/ }),

/***/ 431:
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
     require("vue-hot-reload-api").rerender("data-v-f1cf8668", module.exports)
  }
}

/***/ }),

/***/ 432:
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
     require("vue-hot-reload-api").rerender("data-v-fb792b66", module.exports)
  }
}

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(349);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("495d06f6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-67b167aa!./../../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tags.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-67b167aa!./../../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tags.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("6575089c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a199e696!./../../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inspector.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a199e696!./../../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./inspector.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(354);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("7ae322eb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-10391ef3!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./timeline.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-10391ef3!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./timeline.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(357);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("1e0c6ee7", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1c2ec89c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./newTouchForm.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1c2ec89c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./newTouchForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(358);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("2aa56468", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1c2ec89c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./newTouchForm.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1c2ec89c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./newTouchForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(359);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("64a9c78a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b1866ce!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b1866ce!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(361);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("b74e4296", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3cb6634a!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tagDropdown.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3cb6634a!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tagDropdown.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(367);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("1e2f3e60", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8592ea0c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./editTouchForm.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8592ea0c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./editTouchForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(368);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("776e1b6f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8592ea0c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./editTouchForm.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8592ea0c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./editTouchForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(369);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("685dcbfd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9640875c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./touchesList.vue", function() {
     var newContent = require("!!./../../../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-9640875c!./../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./touchesList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("70884ed3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fb792b66!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./player.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fb792b66!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./player.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlIiwid2VicGFjazovLy9wYWdlSGVhZGVyLnZ1ZT8zZDA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/Y2FlMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzVkOTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNjI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9zY291dGluZ3Mvc2NvdXRpbmdzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvdXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvY29sbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvU2Vjb25kc1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1V1aWRVdGlsLmpzIiwid2VicGFjazovLy8uL34vdnVlLWNvbG9yL2Rpc3QvdnVlLWNvbG9yLm1pbi5qcyIsIndlYnBhY2s6Ly8vcGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vaW5zcGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vdGltZWxpbmUudnVlIiwid2VicGFjazovLy9lZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vZWRpdFRvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL25ld1RvdWNoRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3RvdWNoZXNMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vdGFnLnZ1ZSIsIndlYnBhY2s6Ly8vdGFnRHJvcGRvd24udnVlIiwid2VicGFjazovLy90YWdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9Ub3VjaE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL1N0YWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9UaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvVmlkZW9UaW1lTWFya2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JUaW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclZpZGVvVGltZU1hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2luc3BlY3RvclNrZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL3NwZWNzL3RvdWNoZXNTcGVjLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvdGltZWxpbmVTa2V0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3N0b3Jlcy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9zdG9yZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nVG91Y2hTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZXJyb3JQcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWU/OTYxOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWU/ZGNkMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZT84NWYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlPzUxYjgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/ZmJhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlP2U0MzQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlPzg5YzQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlPzgwYzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlPzA4YmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZT82NGE3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZT8wZjRhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWU/M2JiMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT9lNzZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWU/ODkyMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWU/ZjJkZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZT9mNmE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT8zMWQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWU/OWZkYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL2luc3BlY3Rvci52dWU/NDQ5ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWU/ZmViMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWU/NDExZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdzLnZ1ZT8xMGUyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZT9jMjE3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvdGltZWxpbmUudnVlPzhkMDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWU/MWM1NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZT9mZjAxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWU/NzM4ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWU/M2Q1NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/M2YyOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWU/YjBiNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvbGlzdHMvdG91Y2hlc0xpc3QudnVlP2JmYWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlP2NmZTciXSwibmFtZXMiOlsiVGltZUNvbnZlcnRlciIsInNlY3MiLCJzZWNfbnVtIiwicGFyc2VJbnQiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwiY3JlYXRlIiwic2NvdXRpbmciLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJyZW1vdmUiLCJkZWxldGUiLCJyZXBvcnQiLCJsYXRlc3QiLCJtZXRob2RzIiwiZ2VuZXJhdGVVVUlEIiwiZCIsIkRhdGUiLCJnZXRUaW1lIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJub3ciLCJ1dWlkIiwicmVwbGFjZSIsImMiLCJyIiwicmFuZG9tIiwidG9TdHJpbmciLCJBY3Rpb24iLCJzdGFydCIsImVuZCIsImNvbG9yIiwic3RhdGUiLCJtb3VzZUlzT3ZlciIsImlzU2VsZWN0ZWQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwibGltaXRUZXh0WSIsInRvdWNoTWFuYWdlciIsImluc3BlY3RvciIsInRpbWVsaW5lIiwic3RhcnRZIiwic2Vjb25kc1V0aWwiLCJjYW52YUNvbnRhaW5lciIsImxlZnRUYWdzIiwicmlnaHRUYWdzIiwiY2FsY3VsYXRlWCIsImNhbGN1bGF0ZVkiLCJjYWxjdWxhdGVXaWR0aCIsImNhbGN1bGF0ZUhlaWdodCIsInNlbGVjdGVkQWN0aW9uIiwicmdiYSIsImFscGhhIiwibm9TdHJva2UiLCJ0ZXh0U2l6ZSIsInRleHRTdHlsZSIsIk5PUk1BTCIsImZpbGwiLCJnIiwiYiIsInJlY3QiLCJCT0xEIiwidGV4dCIsInRvSEhNTVNTIiwidGV4dEFsaWduIiwiQ0VOVEVSIiwic3Ryb2tlIiwic3Ryb2tlV2VpZ2h0IiwibGluZSIsImVuZFkiLCJzdGFydFRpbWUiLCJhY3Rpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwidm0iLCJlZGl0VG91Y2giLCJyZWNvcmRpbmdBY3Rpb24iLCJyZWNvcmRpbmdUb3VjaCIsIiRyZWZzIiwicGxheWVyIiwiYXBpIiwiYWJMb29wUGx1Z2luIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJlbmFibGUiLCJnb1RvU3RhcnQiLCJzZWNvbmRXaWR0aCIsInN0YXJ0WCIsImNoZWNrQ29sbGlkZSIsInRvdWNoIiwidG91Y2hlcyIsIl8iLCJyZWplY3QiLCJvIiwicHVzaCIsIm92ZXJsYXAiLCJjb2xsaWRlIiwiY29sbGlkZVRvdWNoZXMiLCJyYW5nZXMiLCJjaGVja0NvbGxpZGVBY3Rpb25zIiwic2VsZWN0ZWRUb3VjaCIsImFjdGlvbnMiLCJjb2xsaWRlQWN0aW9ucyIsInNvcnRlZFJhbmdlcyIsInNvcnQiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJwcmV2aW91c1RpbWUiLCJjdXJyZW50VGltZSIsInJlZHVjZSIsInJlc3VsdCIsImlkeCIsImFyciIsInByZXZpb3VzRW5kIiwiY3VycmVudFN0YXJ0IiwiVG91Y2giLCJwIiwiaiIsImxlbmd0aCIsImRyYXciLCJzdGFydGVkIiwicGxheSIsIlNlY29uZHNVdGlsIiwiVXVpZFV0aWwiLCJUb3VjaE1hbmFnZXIiLCJpc01vdXNlT3ZlciIsImNvbnNvbGUiLCJsb2ciLCJhVG91Y2hJc1NlbGVjdGVkIiwiaXNNb3VzZVByZXNzc2VkT3ZlciIsImRpc2FibGUiLCJhbkFjdGlvbklzU2VsZWN0ZWQiLCJTdGFnZSIsImJhY2tncm91bmQiLCJub0ZpbGwiLCJUaW1lbGluZSIsInN0YXJ0RGVsdGEiLCJoaWRlIiwiY2FsY3VsYXRlQ29sV2lkdGgiLCJkdXJhdGlvbiIsImVuZFgiLCJheGlzWSIsImkiLCJjb2xXaWR0aCIsIm5ld1giLCJkcmF3U3RhcnRNaW51dGVMYWJlbCIsImRyYXdNaW51dGVMaW5lIiwiZHJhd01pbnV0ZUxhYmVsIiwic2hvd1NlY29uZHNJbnRlcnZhbCIsImRyYXdNaWRkbGVTZWNvbmRMYWJlbCIsImRyYXdNaWRkbGVTZWNvbmRMaW5lIiwic2hvd1NlY29uZHMiLCJkcmF3U2Vjb25kTGluZSIsIm1vdXNlWCIsImNhbnZhcyIsIm1vdXNlWSIsImN1cnNvciIsIkhBTkQiLCJBUlJPVyIsInBtb3VzZVgiLCJzZWNvbmRzWSIsInRvU1MiLCJyb3VuZCIsIm1pbnV0ZXNZIiwiem9vbUZhY3RvciIsIlZpZGVvVGltZU1hcmtlciIsImN1cnJlbnRYIiwiSW5zcGVjdG9yU3RhZ2UiLCJ0cmFuc2xhdGUiLCJwb3AiLCJJbnNwZWN0b3JUaW1lbGluZSIsImRyYXdTdGFydExhYmVsIiwiSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyIiwic2tldGNoIiwic2V0dXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0V2lkdGgiLCJjcmVhdGVDYW52YXMiLCJtb3VzZU1vdmVkIiwibW91c2VQcmVzc2VkIiwiaW5zdGFuY2UiLCJwYXJlbnQiLCJzdGFnZSIsInZpZGVvVGltZU1hcmtlciIsImNvbG9yTW9kZSIsIlJHQiIsImZyYW1lUmF0ZSIsIm5vTG9vcCIsImRyYXdBY3Rpb25zIiwidmlkZW9NYXJrZXIiLCJtb3VzZU92ZXJBY3Rpb24iLCJtb3VzZVByZXNzZWRBY3Rpb24iLCJzdG9wIiwibG9vcCIsImNvbmZpZ0J1dHRvbnMiLCJ6b29tSW4iLCJ6b29tT3V0IiwiaW5pdGlhbFpvb21GYWN0b3IiLCJtb3VzZU92ZXJUb3VjaCIsIm1vdXNlT3ZlciIsIm1vdXNlRHJhZ2dlZCIsImRyYWciLCJtb3VzZVByZXNzZWRUb3VjaCIsInBsYXllclJlYWR5IiwicmVhZHkiLCJzZXRDYW52YXMiLCJzZXRUaW1lbGluZSIsInNldFRvdWNoTWFuYWdlciIsInNldFN0YWdlIiwic2V0UGxheWVyIiwic2V0VmlkZW9NYXJrZXIiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldFRpbWVsaW5lV2lkdGgiLCJzZXRUaW1lbGluZUhpZGUiLCJzZXRUaW1lbGluZUhlaWdodCIsInNldFRpbWVsaW5lTW91c2VPdmVyIiwic2V0VGltZWxpbmVTdGFydFRpbWUiLCJzZXRUaW1lbGluZVN0YXJ0WSIsInNldFRpbWVsaW5lQXhpc1kiLCJzZXRUaW1lbGluZUVuZFkiLCJzZXRUaW1lbGluZVN0YXJ0WCIsInNldFRpbWVsaW5lRW5kWCIsInNldFRpbWVsaW5lTWludXRlc1kiLCJzZXRUaW1lbGluZVNlY29uZHNZIiwic2V0U2hvd1NlY29uZHMiLCJzZXRTaG93U2Vjb25kc0ludGVydmFsIiwic2V0Wm9vbSIsInpvb20iLCJ6b29tRmFjdG9yQ2hhbmdlIiwic2V0U2Vjb25kV2lkdGgiLCJzZXRDb2xXaWR0aCIsInNldER1cmF0aW9uIiwic2V0Q3VycmVudFRpbWUiLCJzZXRJbml0aWFsaXplZCIsImluaXRpYWxpemVkIiwic2V0VG91Y2hlcyIsInNldFNlbGVjdGVkVG91Y2giLCJhZGRUb3VjaCIsImluZGV4IiwiZmluZEluZGV4IiwiY2xvbmVEZWVwIiwicmVtb3ZlVG91Y2giLCJzcGxpY2UiLCJzZXRJbnNwZWN0b3IiLCJzZXRJbnNwZWN0b3JXaWR0aCIsInNldEluc3BlY3RvckhlaWdodCIsInNldEluc3BlY3RvckNhbnZhcyIsInNldEluc3BlY3RvclZpZGVvTWFya2VyIiwic2V0SW5zcGVjdG9yQ2FudmFzV2lkdGgiLCJzZXRJbnNwZWN0b3JDYW52YXNIZWlnaHQiLCJzZXRJbnNwZWN0b3JTdGFnZSIsInNldEluc3BlY3RvclRpbWVsaW5lIiwic2V0SW5zcGVjdG9yU3RhcnRUaW1lIiwic2V0SW5zcGVjdG9yU3RhcnRZIiwic2V0SW5zcGVjdG9yQXhpc1kiLCJzZXRJbnNwZWN0b3JFbmRZIiwic2V0SW5zcGVjdG9yU3RhcnRYIiwic2V0SW5zcGVjdG9yRW5kWCIsInNldEluc3BlY3Rvck1pbnV0ZXNZIiwic2V0SW5zcGVjdG9yU2Vjb25kc1kiLCJzZXRJbnNwZWN0b3JTZWNvbmRXaWR0aCIsInNldEluc3BlY3RvckNvbFdpZHRoIiwic2V0U2VsZWN0ZWRBY3Rpb24iLCJyZWNvcmRpbmciLCJhZGRBY3Rpb24iLCJhZGRMZWZ0VGFnIiwidGFnIiwiYWRkUmlnaHRUYWciLCJlZGl0QWN0aW9uIiwicmVtb3ZlQWN0aW9uIiwic2hvd0Vycm9yIiwidmFsaWRhdGlvbiIsImVycm9ycyIsImhhc093blByb3BlcnR5IiwiZm9yRWFjaCIsInZhbGlkYXRpb25FcnJvciIsInNlbGYiLCIkcm9vdCIsImVycm9yVG9hc3QiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUMxQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BO0FBTEE7QUFEQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLGlCQUFpQix3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLEdBQUc7O0FBRXZJOzs7Ozs7OztBQ1BBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7OztrQkNwQmU7QUFDWCxVQUFNO0FBQ0YscUJBQWE7QUFDVCxvQ0FBd0IsdUNBRGY7QUFFVCxvQ0FBd0IsdUNBRmY7QUFHVCxtQ0FBdUIsdUNBSGQ7QUFJVCx5QkFBYSw0QkFKSjtBQUtULG9CQUFRLE1BTEM7QUFNVCwyQkFBZSxhQU5OO0FBT1QsNEJBQWdCLGNBUFA7QUFRVCxxQkFBUyxPQVJBO0FBU1QsNEJBQWdCLGNBVFA7QUFVVCw2QkFBaUIsZUFWUjtBQVdULHlCQUFhLGNBWEo7QUFZVCx1QkFBVyxTQVpGO0FBYVQsNkJBQWlCLGtCQWJSO0FBY1Qsc0JBQVUsUUFkRDtBQWVULG1CQUFPLGNBZkU7QUFnQlQsOEJBQWtCLDRDQWhCVDtBQWlCVCwrQkFBbUIsaUJBakJWO0FBa0JULDZCQUFpQixzQkFsQlI7QUFtQlQsK0JBQW1CLGlCQW5CVjtBQW9CVCxvQkFBUSxlQXBCQztBQXFCVCwyQkFBZSxhQXJCTjtBQXNCVCx5QkFBYSxXQXRCSjtBQXVCVCwrQkFBbUIsaUJBdkJWO0FBd0JULGdDQUFvQixrQkF4Qlg7QUF5QlQseUJBQWEsV0F6Qko7QUEwQlQsd0JBQVksVUExQkg7QUEyQlQsMEJBQWMsWUEzQkw7QUE0QlQscUJBQVMsT0E1QkE7QUE2QlQsb0JBQVEsTUE3QkM7QUE4QlQsNEJBQWdCLHNCQTlCUDtBQStCVCw2QkFBaUIsdUJBL0JSO0FBZ0NULHFCQUFTLE9BaENBO0FBaUNULHFCQUFTLE9BakNBO0FBa0NULHFCQUFTLGFBbENBO0FBbUNULG1CQUFPLFdBbkNFO0FBb0NULG9CQUFRLGNBcENDO0FBcUNULHNCQUFVLGdCQXJDRDtBQXNDVCxvQ0FBd0Isc0JBdENmO0FBdUNULGtDQUFzQixtREF2Q2I7QUF3Q1QsZ0NBQW9CLG1CQXhDWDtBQXlDVCxzQ0FBMEIscURBekNqQjtBQTBDVCxpQ0FBcUIsa0RBMUNaO0FBMkNULHVCQUFXLFNBM0NGO0FBNENULHdCQUFZLGtCQTVDSDtBQTZDVCxzQkFBVSxjQTdDRDtBQThDVCwwQkFBYyxpQ0E5Q0w7QUErQ1Qsc0JBQVUsa0JBL0NEO0FBZ0RULHNCQUFVLGlCQWhERDtBQWlEVCx5QkFBYSxXQWpESjtBQWtEVCw2QkFBaUIsK0JBbERSO0FBbURULHNCQUFVLFlBbkREO0FBb0RULDRCQUFnQiw0Q0FwRFA7QUFxRFQsb0JBQVEsV0FyREM7QUFzRFQsdUJBQVcsU0F0REY7QUF1RFQsMEJBQWMsWUF2REw7QUF3RFQsNkJBQWlCO0FBeERSO0FBRFgsS0FESztBQTZEWCxVQUFNO0FBQ0YscUJBQWE7QUFDVCxvQ0FBd0IsMkNBRGY7QUFFVCxvQ0FBd0IsZ0RBRmY7QUFHVCxtQ0FBdUIsOENBSGQ7QUFJVCx5QkFBYSx1QkFKSjtBQUtULG9CQUFRLFFBTEM7QUFNVCwyQkFBZSxhQU5OO0FBT1QsNEJBQWdCLFlBUFA7QUFRVCxxQkFBUyxRQVJBO0FBU1QsNEJBQWdCLHdCQVRQO0FBVVQsNkJBQWlCLHNCQVZSO0FBV1QseUJBQWEsa0JBWEo7QUFZVCx1QkFBVyxVQVpGO0FBYVQsNkJBQWlCLHVCQWJSO0FBY1Qsc0JBQVUsWUFkRDtBQWVULG1CQUFPLGdCQWZFO0FBZ0JULDhCQUFrQixpREFoQlQ7QUFpQlQsK0JBQW1CLG1CQWpCVjtBQWtCVCw2QkFBaUIsMEJBbEJSO0FBbUJULCtCQUFtQixxQkFuQlY7QUFvQlQsb0JBQVEsZ0JBcEJDO0FBcUJULDJCQUFlLGVBckJOO0FBc0JULHlCQUFhLGlCQXRCSjtBQXVCVCwrQkFBbUIsaUJBdkJWO0FBd0JULGdDQUFvQixrQkF4Qlg7QUF5QlQseUJBQWEsV0F6Qko7QUEwQlQsd0JBQVksVUExQkg7QUEyQlQsMEJBQWMsa0JBM0JMO0FBNEJULHFCQUFTLFFBNUJBO0FBNkJULG9CQUFRLFlBN0JDO0FBOEJULDRCQUFnQixxQ0E5QlA7QUErQlQsNkJBQWlCLG1DQS9CUjtBQWdDVCxxQkFBUyxRQWhDQTtBQWlDVCxxQkFBUyxPQWpDQTtBQWtDVCxxQkFBUyxjQWxDQTtBQW1DVCxtQkFBTyxXQW5DRTtBQW9DVCxvQkFBUSxpQkFwQ0M7QUFxQ1Qsc0JBQVUsa0JBckNEO0FBc0NULG9DQUF3QixtQ0F0Q2Y7QUF1Q1Qsa0NBQXNCLGdEQXZDYjtBQXdDVCxnQ0FBb0IscUJBeENYO0FBeUNULHNDQUEwQiw2Q0F6Q2pCO0FBMENULGlDQUFxQixtREExQ1o7QUEyQ1QsdUJBQVcsUUEzQ0Y7QUE0Q1Qsd0JBQVksbUJBNUNIO0FBNkNULHNCQUFVLG1CQTdDRDtBQThDVCwwQkFBYywyQkE5Q0w7QUErQ1Qsc0JBQVUsdUJBL0NEO0FBZ0RULHNCQUFVLGdCQWhERDtBQWlEVCx5QkFBYSxXQWpESjtBQWtEVCw2QkFBaUIscUNBbERSO0FBbURULHNCQUFVLGFBbkREO0FBb0RULDRCQUFnQixvREFwRFA7QUFxRFQsb0JBQVEsZ0JBckRDO0FBc0RULHVCQUFXLFlBdERGO0FBdURULDBCQUFjLFdBdkRMO0FBd0RULDZCQUFpQjtBQXhEUjtBQURYO0FBN0RLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FNQSxhOzs7Ozs7O2lDQUNEQyxJLEVBQU07QUFDbEIsZ0JBQUlDLFVBQVVDLFNBQVNGLElBQVQsRUFBZSxFQUFmLENBQWQsQ0FEa0IsQ0FDZ0I7QUFDbEMsZ0JBQUlHLFFBQVFDLEtBQUtDLEtBQUwsQ0FBV0osVUFBVSxJQUFyQixDQUFaO0FBQ0EsZ0JBQUlLLFVBQVVGLEtBQUtDLEtBQUwsQ0FBVyxDQUFDSixVQUFXRSxRQUFRLElBQXBCLElBQTZCLEVBQXhDLENBQWQ7QUFDQSxnQkFBSUksVUFBVU4sVUFBV0UsUUFBUSxJQUFuQixHQUE0QkcsVUFBVSxFQUFwRDs7QUFFQSxnQkFBSUgsUUFBUSxFQUFaLEVBQWdCO0FBQ1pBLHdCQUFRLE1BQU1BLEtBQWQ7QUFDSDtBQUNELGdCQUFJRyxVQUFVLEVBQWQsRUFBa0I7QUFDZEEsMEJBQVUsTUFBTUEsT0FBaEI7QUFDSDtBQUNELGdCQUFJQyxVQUFVLEVBQWQsRUFBa0I7QUFDZEEsMEJBQVUsTUFBTUEsT0FBaEI7QUFDSDtBQUNELG1CQUFPSixRQUFRLEdBQVIsR0FBY0csT0FBZCxHQUF3QixHQUF4QixHQUE4QkMsT0FBckM7QUFDSDs7OzZCQUVXUCxJLEVBQU07QUFDZCxnQkFBSUMsVUFBVUMsU0FBU0YsSUFBVCxFQUFlLEVBQWYsQ0FBZCxDQURjLENBQ29CO0FBQ2xDLGdCQUFJRyxRQUFRQyxLQUFLQyxLQUFMLENBQVdKLFVBQVUsSUFBckIsQ0FBWjtBQUNBLGdCQUFJSyxVQUFVRixLQUFLQyxLQUFMLENBQVcsQ0FBQ0osVUFBV0UsUUFBUSxJQUFwQixJQUE2QixFQUF4QyxDQUFkO0FBQ0EsZ0JBQUlJLFVBQVVOLFVBQVdFLFFBQVEsSUFBbkIsR0FBNEJHLFVBQVUsRUFBcEQ7O0FBRUEsZ0JBQUlDLFVBQVUsRUFBZCxFQUFrQjtBQUNkQSwwQkFBVSxNQUFNQSxPQUFoQjtBQUNIO0FBQ0QsbUJBQU9BLE9BQVA7QUFDSDs7Ozs7O2tCQTdCZ0JSLGE7Ozs7Ozs7Ozs7Ozs7O0FDQXJCOzs7Ozs7a0JBRWU7QUFDWFMsUUFEVyxnQkFDTkMsRUFETSxFQUNGQyxjQURFLEVBQ2NDLGFBRGQsRUFDNEI7QUFDbkMsZUFBTyxjQUFJQyxJQUFKLENBQVNDLEdBQVQsQ0FBYSxvQkFBb0JKLEVBQXBCLEdBQXlCLCtHQUF0QyxFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQUxVO0FBTVhDLFVBTlcsa0JBTUpDLFFBTkksRUFNTVYsY0FOTixFQU1zQkMsYUFOdEIsRUFNb0M7QUFDM0MsZUFBTyxjQUFJQyxJQUFKLENBQVNTLElBQVQsQ0FBYyxnQkFBZCxFQUFnQ0QsUUFBaEMsRUFDRk4sSUFERSxDQUNHLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0wsZUFBZUssU0FBU0MsSUFBeEIsQ0FBZDtBQUFBLFNBREgsRUFFRkMsS0FGRSxDQUVJLFVBQUNDLEtBQUQ7QUFBQSxtQkFBV1AsY0FBY08sS0FBZCxDQUFYO0FBQUEsU0FGSixDQUFQO0FBR0gsS0FWVTtBQVdYSSxVQVhXLGtCQVdKYixFQVhJLEVBV0FXLFFBWEEsRUFXVVYsY0FYVixFQVcwQkMsYUFYMUIsRUFXd0M7QUFDL0MsZUFBTyxjQUFJQyxJQUFKLENBQVNXLEdBQVQsQ0FBYSxvQkFBb0JkLEVBQWpDLEVBQXFDVyxRQUFyQyxFQUErQyxFQUFDSSxhQUFhLElBQWQsRUFBL0MsRUFDRlYsSUFERSxDQUNHLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0wsZUFBZUssU0FBU0MsSUFBeEIsQ0FBZDtBQUFBLFNBREgsRUFFRkMsS0FGRSxDQUVJLFVBQUNDLEtBQUQ7QUFBQSxtQkFBV1AsY0FBY08sTUFBTUYsSUFBcEIsQ0FBWDtBQUFBLFNBRkosQ0FBUDtBQUdILEtBZlU7QUFnQlhTLFVBaEJXLGtCQWdCSmhCLEVBaEJJLEVBZ0JBQyxjQWhCQSxFQWdCZ0JDLGFBaEJoQixFQWdCOEI7QUFDckMsZUFBTyxjQUFJQyxJQUFKLENBQVNjLE1BQVQsQ0FBZ0Isb0JBQW9CakIsRUFBcEMsRUFDRkssSUFERSxDQUNHLFVBQUNDLFFBQUQ7QUFBQSxtQkFBY0wsZUFBZUssU0FBU0MsSUFBeEIsQ0FBZDtBQUFBLFNBREgsRUFFRkMsS0FGRSxDQUVJLFVBQUNDLEtBQUQ7QUFBQSxtQkFBV1AsY0FBY08sTUFBTUYsSUFBcEIsQ0FBWDtBQUFBLFNBRkosQ0FBUDtBQUdILEtBcEJVO0FBcUJYVyxVQXJCVyxrQkFxQkpsQixFQXJCSSxFQXFCQUMsY0FyQkEsRUFxQmdCQyxhQXJCaEIsRUFxQjhCO0FBQ3JDLGVBQU8sY0FBSUMsSUFBSixDQUFTQyxHQUFULENBQWEsb0JBQW9CSixFQUFwQixHQUF5QixTQUF0QyxFQUNGSyxJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxLQUFkLENBQVg7QUFBQSxTQUZKLENBQVA7QUFHSCxLQXpCVTtBQTBCWFUsVUExQlcsa0JBMEJKbEIsY0ExQkksRUEwQllDLGFBMUJaLEVBMEIwQjtBQUNqQyxlQUFPLGNBQUlDLElBQUosQ0FBU0MsR0FBVCxDQUFhLHVCQUFiLEVBQ0ZDLElBREUsQ0FDRyxVQUFDQyxRQUFEO0FBQUEsbUJBQWNMLGVBQWVLLFNBQVNDLElBQXhCLENBQWQ7QUFBQSxTQURILEVBRUZDLEtBRkUsQ0FFSSxVQUFDQyxLQUFEO0FBQUEsbUJBQVdQLGNBQWNPLEtBQWQsQ0FBWDtBQUFBLFNBRkosQ0FBUDtBQUdIO0FBOUJVLEM7Ozs7Ozs7Ozs7Ozs7a0JDRkE7QUFDWFcsYUFBUztBQUNMQyxvQkFESywwQkFDVTtBQUNYLGdCQUFJQyxJQUFJLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFSO0FBQ0EsZ0JBQUlDLE9BQU9DLFdBQVAsSUFBc0IsT0FBT0QsT0FBT0MsV0FBUCxDQUFtQkMsR0FBMUIsS0FBa0MsVUFBNUQsRUFBd0U7QUFDcEVMLHFCQUFLSSxZQUFZQyxHQUFaLEVBQUwsQ0FEb0UsQ0FDNUM7QUFDM0I7QUFDRCxnQkFBSUMsT0FBTyx1Q0FBdUNDLE9BQXZDLENBQStDLE9BQS9DLEVBQXdELFVBQVVDLENBQVYsRUFBYTtBQUM1RSxvQkFBSUMsSUFBSSxDQUFDVCxJQUFJM0IsS0FBS3FDLE1BQUwsS0FBZ0IsRUFBckIsSUFBMkIsRUFBM0IsR0FBZ0MsQ0FBeEM7QUFDQVYsb0JBQUkzQixLQUFLQyxLQUFMLENBQVcwQixJQUFJLEVBQWYsQ0FBSjtBQUNBLHVCQUFPLENBQUNRLEtBQUssR0FBTCxHQUFXQyxDQUFYLEdBQWdCQSxJQUFJLEdBQUosR0FBVSxHQUEzQixFQUFpQ0UsUUFBakMsQ0FBMEMsRUFBMUMsQ0FBUDtBQUNILGFBSlUsQ0FBWDtBQUtBLG1CQUFPTCxJQUFQO0FBQ0g7QUFaSTtBQURFLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCTSxNO0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CQyxHQUFuQixFQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFDM0IsYUFBS0MsS0FBTCxHQUFhLHlCQUFTLEdBQVQsQ0FBYjtBQUNBLFlBQUlWLE9BQU8sd0JBQVg7QUFDQSxhQUFLNUIsRUFBTCxHQUFVNEIsS0FBS1AsWUFBTCxFQUFWO0FBQ0EsYUFBS2MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsYUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsYUFBS0UsV0FBTCxHQUFtQixLQUFuQjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxhQUFLQyxDQUFMLEdBQVMsSUFBVDtBQUNBLGFBQUtDLENBQUwsR0FBUyxJQUFUO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxhQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsS0FBSyxLQUFLUCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ0MsTUFBbEU7QUFDQSxhQUFLQyxXQUFMLEdBQW1CLDJCQUFuQjtBQUNBLGFBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7OytCQUVNO0FBQ0gsaUJBQUtaLENBQUwsR0FBUyxLQUFLYSxVQUFMLEVBQVQ7QUFDQSxpQkFBS1osQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxLQUFLQSxDQUFkLEdBQWtCLEtBQUthLFVBQUwsRUFBM0I7QUFDQSxpQkFBS1osS0FBTCxHQUFhLEtBQUthLGNBQUwsRUFBYjtBQUNBLGlCQUFLWixNQUFMLEdBQWMsS0FBS2EsZUFBTCxFQUFkO0FBQ0EsaUJBQUtqQixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsZ0JBQUksS0FBS0YsS0FBTCxDQUFXUSxZQUFYLENBQXdCWSxjQUE1QixFQUE0QztBQUN4QyxvQkFBSSxLQUFLcEIsS0FBTCxDQUFXUSxZQUFYLENBQXdCWSxjQUF4QixDQUF1QzFELEVBQXZDLElBQTZDLEtBQUtBLEVBQXRELEVBQTBEO0FBQ3RELHlCQUFLd0MsVUFBTCxHQUFrQixJQUFsQjtBQUNIO0FBQ0o7O0FBRUQsZ0JBQUksS0FBS0EsVUFBVCxFQUFxQjtBQUNqQixxQkFBS0gsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQkMsS0FBaEIsR0FBd0IsR0FBeEI7QUFDQWIsMEJBQVVjLFFBQVY7QUFDQWQsMEJBQVVlLFFBQVYsQ0FBbUIsRUFBbkI7QUFDQWYsMEJBQVVnQixTQUFWLENBQW9CaEIsVUFBVWlCLE1BQTlCO0FBQ0FqQiwwQkFBVWtCLElBQVYsQ0FBZSxLQUFLNUIsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQjVCLENBQS9CLEVBQWtDLEtBQUtNLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JPLENBQWxELEVBQXFELEtBQUs3QixLQUFMLENBQVdzQixJQUFYLENBQWdCUSxDQUFyRSxFQUF3RSxHQUF4RTtBQUNBcEIsMEJBQVVxQixJQUFWLENBQWUsS0FBSzNCLENBQUwsR0FBUyxLQUFLRSxLQUFkLEdBQXNCLEVBQXJDLEVBQXlDLEtBQUtFLFVBQTlDLEVBQTBELEVBQTFELEVBQThELEVBQTlEO0FBQ0FFLDBCQUFVcUIsSUFBVixDQUFlLEtBQUszQixDQUFMLEdBQVMsRUFBeEIsRUFBNEIsS0FBS0ksVUFBakMsRUFBNkMsRUFBN0MsRUFBaUQsRUFBakQ7QUFDQUUsMEJBQVVrQixJQUFWLENBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QixHQUE5QjtBQUNBbEIsMEJBQVVnQixTQUFWLENBQW9CaEIsVUFBVXNCLElBQTlCO0FBQ0F0QiwwQkFBVXVCLElBQVYsQ0FBZSx3QkFBY0MsUUFBZCxDQUF1QixLQUFLcEMsS0FBNUIsQ0FBZixFQUFtRCxLQUFLTSxDQUFMLEdBQVMsRUFBNUQsRUFBZ0UsS0FBS0ksVUFBckUsRUFBaUYsRUFBakYsRUFBcUYsRUFBckY7QUFDQUUsMEJBQVV1QixJQUFWLENBQWUsd0JBQWNDLFFBQWQsQ0FBdUIsS0FBS25DLEdBQTVCLENBQWYsRUFBaUQsS0FBS0ssQ0FBTCxHQUFTLEVBQVQsR0FBYyxLQUFLRSxLQUFwRSxFQUEyRSxLQUFLRSxVQUFoRixFQUE0RixFQUE1RixFQUFnRyxFQUFoRztBQUNBRSwwQkFBVXlCLFNBQVYsQ0FBb0J6QixVQUFVMEIsTUFBOUI7QUFDQTFCLDBCQUFVMkIsTUFBVixDQUFpQjNCLFVBQVVWLEtBQVYsQ0FBZ0IsS0FBS0EsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQjVCLENBQWhDLEVBQW1DLEtBQUtNLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JPLENBQW5ELEVBQXNELEtBQUs3QixLQUFMLENBQVdzQixJQUFYLENBQWdCUSxDQUF0RSxDQUFqQjtBQUNBcEIsMEJBQVU0QixZQUFWLENBQXVCLENBQXZCO0FBQ0E1QiwwQkFBVTZCLElBQVYsQ0FBZSxLQUFLbkMsQ0FBcEIsRUFBdUIsS0FBS0ksVUFBTCxHQUFrQixFQUF6QyxFQUE2QyxLQUFLSixDQUFsRCxFQUFxRCxLQUFLSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQzZCLElBQWhHO0FBQ0E5QiwwQkFBVTZCLElBQVYsQ0FBZSxLQUFLbkMsQ0FBTCxHQUFTLEtBQUtFLEtBQTdCLEVBQW9DLEtBQUtFLFVBQUwsR0FBa0IsRUFBdEQsRUFBMEQsS0FBS0osQ0FBTCxHQUFTLEtBQUtFLEtBQXhFLEVBQStFLEtBQUtMLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDNkIsSUFBMUg7QUFDSDs7QUFFRCxnQkFBSSxLQUFLekMsR0FBTCxHQUFXLEtBQUtFLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEIsU0FBdEQsR0FBa0UsQ0FBdEUsRUFBeUU7QUFDckUvQiwwQkFBVWtCLElBQVYsQ0FBZSxHQUFmO0FBQ0FsQiwwQkFBVWtCLElBQVYsQ0FBZSxLQUFLNUIsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQjVCLENBQS9CLEVBQWtDLEtBQUtNLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JPLENBQWxELEVBQXFELEtBQUs3QixLQUFMLENBQVdzQixJQUFYLENBQWdCUSxDQUFyRSxFQUF3RSxLQUFLOUIsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQkMsS0FBeEYsRUFGcUUsQ0FFNEI7QUFDakdiLDBCQUFVNEIsWUFBVixDQUF1QixDQUF2QjtBQUNBNUIsMEJBQVUyQixNQUFWLENBQWlCLEVBQWpCO0FBQ0EzQiwwQkFBVTJCLE1BQVYsQ0FBaUIsS0FBS3JDLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0I1QixDQUFoQixHQUFvQixJQUFyQyxFQUEyQyxLQUFLTSxLQUFMLENBQVdzQixJQUFYLENBQWdCTyxDQUFoQixHQUFvQixJQUEvRCxFQUFxRSxLQUFLN0IsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQlEsQ0FBaEIsR0FBb0IsSUFBekY7QUFDQXBCLDBCQUFVcUIsSUFBVixDQUFlLEtBQUszQixDQUFwQixFQUF1QixLQUFLQyxDQUE1QixFQUErQixLQUFLQyxLQUFwQyxFQUEyQyxLQUFLQyxNQUFoRCxFQU5xRSxDQU1YO0FBQzFERywwQkFBVXFCLElBQVYsQ0FBZSxLQUFLM0IsQ0FBcEIsRUFBdUIsS0FBS0MsQ0FBTCxHQUFTLEVBQWhDLEVBQW9DLEtBQUtDLEtBQXpDLEVBQWdELEtBQUtDLE1BQXJELEVBUHFFLENBT047O0FBRS9ERywwQkFBVWtCLElBQVYsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEdBQXhCO0FBQ0g7QUFDSjs7O29DQUVXYyxNLEVBQVFDLEssRUFBTztBQUN2QkEsa0JBQU1DLGNBQU47QUFDQSxxQ0FBUyxtQkFBVCxFQUE4QkYsTUFBOUI7QUFDQUcsZUFBR0MsU0FBSCxDQUFhSCxLQUFiLEVBQW9CRCxNQUFwQjtBQUNIOzs7b0NBRVd0QyxDLEVBQUdDLEMsRUFBRztBQUNkLGdCQUFJRCxLQUFLLEtBQUtBLENBQVYsSUFBZUEsS0FBTSxLQUFLQSxDQUFMLEdBQVMsS0FBS0UsS0FBbkMsSUFBNkNELEtBQUssS0FBS0EsQ0FBdkQsSUFBNERBLEtBQU0sS0FBS0EsQ0FBTCxHQUFTLEtBQUtFLE1BQUwsR0FBYyxDQUE3RixFQUFpRztBQUM3RixxQkFBS1AsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQkMsS0FBaEIsR0FBd0IsR0FBeEI7QUFDQSxxQkFBS3JCLFdBQUwsR0FBbUIsSUFBbkI7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBS0YsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQkMsS0FBaEIsR0FBd0IsRUFBeEI7QUFDQSxxQkFBS3JCLFdBQUwsR0FBbUIsS0FBbkI7QUFDSDtBQUNELG1CQUFPLEtBQUtBLFdBQVo7QUFDSDs7OzRDQUVtQkUsQyxFQUFHQyxDLEVBQUc7QUFDdEIsZ0JBQUksQ0FBQyxLQUFLSixLQUFMLENBQVdRLFlBQVgsQ0FBd0JzQyxlQUF6QixJQUE0QyxDQUFDLEtBQUs5QyxLQUFMLENBQVdRLFlBQVgsQ0FBd0J1QyxjQUF6RSxFQUF5RjtBQUNyRixvQkFBSTNDLEtBQUssS0FBS0osS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNDLE1BQXBELEVBQTREO0FBQ3hELHdCQUFJUixLQUFLLEtBQUtBLENBQVYsSUFBZUEsS0FBTSxLQUFLQSxDQUFMLEdBQVMsS0FBS0UsS0FBbkMsSUFBNkNELEtBQUssS0FBS0EsQ0FBdkQsSUFBNERBLEtBQU0sS0FBS0EsQ0FBTCxHQUFTLEtBQUtFLE1BQUwsR0FBYyxDQUE3RixFQUFpRztBQUM3Riw2QkFBS0osVUFBTCxHQUFrQixJQUFsQjtBQUNBMEMsMkJBQUdJLEtBQUgsQ0FBU0MsTUFBVCxDQUFnQkMsR0FBaEIsR0FBc0JDLFlBQXRCLENBQW1DQyxRQUFuQyxDQUE0QyxLQUFLdkQsS0FBakQsRUFBd0R3RCxNQUF4RCxDQUErRCxLQUFLdkQsR0FBcEUsRUFBeUV3RCxNQUF6RTtBQUNBViwyQkFBR0ksS0FBSCxDQUFTQyxNQUFULENBQWdCQyxHQUFoQixHQUFzQkMsWUFBdEIsQ0FBbUNJLFNBQW5DO0FBQ0EsaURBQVMsbUJBQVQsRUFBOEIsSUFBOUI7QUFDSCxxQkFMRCxNQUtPO0FBQ0gsNkJBQUtyRCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7OztxQ0FHWTtBQUNULGdCQUFJTCxRQUFRLENBQUMsS0FBS0EsS0FBTCxHQUFhLEtBQUtHLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEIsU0FBekQsSUFBc0UsS0FBS3hDLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEMsV0FBN0g7QUFDQSxtQkFBTzNELFFBQVEsS0FBS0csS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkMrQyxNQUExRDtBQUNIOzs7cUNBRVk7QUFDVCxtQkFBTyxLQUFLLEtBQUt6RCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ0MsTUFBdkQ7QUFDSDs7O3lDQUVnQjtBQUNiLGdCQUFJZCxRQUFRLENBQUMsS0FBS0EsS0FBTCxHQUFhLEtBQUtHLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEIsU0FBekQsSUFBc0UsS0FBS3hDLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEMsV0FBN0g7QUFDQSxnQkFBSTNELFFBQVEsQ0FBWixFQUFlO0FBQ1gsdUJBQU8sQ0FBQyxLQUFLQyxHQUFMLEdBQVcsS0FBS0UsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkM4QixTQUF2RCxJQUFvRSxLQUFLeEMsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkM4QyxXQUF0SDtBQUNIO0FBQ0QsbUJBQU8sQ0FBQyxLQUFLMUQsR0FBTCxHQUFXLEtBQUtELEtBQWpCLElBQTBCLEtBQUtHLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEMsV0FBNUU7QUFDSDs7OzBDQUVpQjtBQUNkLG1CQUFPLEVBQVA7QUFDSDs7Ozs7O2tCQXJIZ0I1RCxNOzs7Ozs7Ozs7Ozs7OztBQ0pyQjs7a0JBRWdCO0FBQ1pkLGFBQVM7QUFDTDRFLG9CQURLLHdCQUNRQyxLQURSLEVBQ2M7QUFDZixnQkFBSUMsVUFBVUMsRUFBRUMsTUFBRixDQUFTLHlCQUFTLGNBQVQsRUFBeUJGLE9BQWxDLEVBQTJDLFVBQVVHLENBQVYsRUFBYTtBQUNsRSx1QkFBT0osTUFBTWpHLEVBQU4sSUFBWXFHLEVBQUVyRyxFQUFyQjtBQUNILGFBRmEsQ0FBZDtBQUdBa0csb0JBQVFJLElBQVIsQ0FBYUwsS0FBYjtBQUNBLGdCQUFJTSxVQUFVLEtBQUtBLE9BQUwsQ0FBYUwsT0FBYixDQUFkO0FBQ0EsbUJBQU87QUFDSE0seUJBQVNELFFBQVFBLE9BRGQ7QUFFSEUsZ0NBQWdCRixRQUFRRztBQUZyQixhQUFQO0FBSUgsU0FYSTtBQVlMQywyQkFaSywrQkFZZTVCLE1BWmYsRUFZc0I7QUFDdkIsZ0JBQUkseUJBQVMsY0FBVCxFQUF5QjZCLGFBQTdCLEVBQTRDO0FBQ3hDLG9CQUFJQSxnQkFBZ0IseUJBQVMsY0FBVCxFQUF5QkEsYUFBN0M7QUFDQSxvQkFBSUwsVUFBVSxJQUFkO0FBQ0Esb0JBQUlLLGFBQUosRUFBbUI7QUFDZix3QkFBSUMsVUFBVVYsRUFBRUMsTUFBRixDQUFTUSxjQUFjQyxPQUF2QixFQUFnQyxVQUFVUixDQUFWLEVBQWE7QUFDdkQsK0JBQU90QixPQUFPL0UsRUFBUCxJQUFhcUcsRUFBRXJHLEVBQXRCO0FBQ0gscUJBRmEsQ0FBZDtBQUdBNkcsNEJBQVFQLElBQVIsQ0FBYXZCLE1BQWI7QUFDQXdCLDhCQUFVLEtBQUtBLE9BQUwsQ0FBYU0sT0FBYixDQUFWO0FBQ0gsaUJBTkQsTUFNTztBQUNITiw4QkFBVSxFQUFDQSxTQUFTLEtBQVYsRUFBaUJHLFFBQVEsRUFBekIsRUFBVjtBQUNIO0FBQ0osYUFaRCxNQVlPO0FBQ0hILDBCQUFVLEVBQUNBLFNBQVMsS0FBVixFQUFpQkcsUUFBUSxFQUF6QixFQUFWO0FBQ0g7O0FBRUQsbUJBQU87QUFDSEYseUJBQVNELFFBQVFBLE9BRGQ7QUFFSE8sZ0NBQWdCUCxRQUFRRztBQUZyQixhQUFQO0FBSUgsU0FqQ0k7QUFrQ0xILGVBbENLLG1CQWtDR0wsT0FsQ0gsRUFrQ1c7QUFDWixnQkFBSWEsZUFBZWIsUUFBUWMsSUFBUixDQUFhLFVBQUNDLFFBQUQsRUFBV0MsT0FBWCxFQUF1Qjs7QUFFbkQsb0JBQUlDLGVBQWUxSCxTQUFTd0gsU0FBUzlFLEtBQWxCLENBQW5CO0FBQ0Esb0JBQUlpRixjQUFjM0gsU0FBU3lILFFBQVEvRSxLQUFqQixDQUFsQjs7QUFFQTtBQUNBLG9CQUFJZ0YsZUFBZUMsV0FBbkIsRUFBZ0M7QUFDNUIsMkJBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBRUQ7Ozs7O0FBS0E7QUFDQSx1QkFBTyxDQUFQO0FBQ0gsYUFqQmtCLENBQW5COztBQW1CQTtBQUNBLG1CQUFPTCxhQUFhTSxNQUFiLENBQW9CLFVBQUNDLE1BQUQsRUFBU0osT0FBVCxFQUFrQkssR0FBbEIsRUFBdUJDLEdBQXZCLEVBQStCO0FBQ3REO0FBQ0Esb0JBQUlELFFBQVEsQ0FBWixFQUFlO0FBQ1gsMkJBQU9ELE1BQVA7QUFDSDtBQUNELG9CQUFJTCxXQUFXTyxJQUFJRCxNQUFNLENBQVYsQ0FBZjs7QUFFQTtBQUNBLG9CQUFJRSxjQUFjaEksU0FBU3dILFNBQVM3RSxHQUFsQixDQUFsQjtBQUNBLG9CQUFJc0YsZUFBZWpJLFNBQVN5SCxRQUFRL0UsS0FBakIsQ0FBbkI7QUFDQSxvQkFBSW9FLFVBQVdrQixjQUFjQyxZQUE3Qjs7QUFFQTtBQUNBLG9CQUFJbkIsT0FBSixFQUFhO0FBQ1Q7QUFDQWUsMkJBQU9mLE9BQVAsR0FBaUIsSUFBakI7QUFDQTtBQUNBZSwyQkFBT1osTUFBUCxDQUFjSixJQUFkLENBQW1CO0FBQ2ZXLGtDQUFVQSxRQURLO0FBRWZDLGlDQUFTQTtBQUZNLHFCQUFuQjtBQUlIOztBQUVELHVCQUFPSSxNQUFQOztBQUVBO0FBQ0gsYUExQk0sRUEwQkosRUFBQ2YsU0FBUyxLQUFWLEVBQWlCRyxRQUFRLEVBQXpCLEVBMUJJLENBQVA7QUEyQkg7QUFsRkk7QUFERyxDLEVBSGhCLHdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCaUIsSztBQUNqQixtQkFBWXhGLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCa0MsSUFBeEIsRUFBOEJqQyxLQUE5QixFQUFxQ3dFLE9BQXJDLEVBQThDO0FBQUE7O0FBQzFDLGFBQUt2RSxLQUFMLEdBQWEseUJBQVMsR0FBVCxDQUFiO0FBQ0EsWUFBSVYsT0FBTyx3QkFBWDtBQUNBLGFBQUs1QixFQUFMLEdBQVU0QixLQUFLUCxZQUFMLEVBQVY7QUFDQSxhQUFLYyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxhQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLaUMsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBSy9CLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsYUFBS0MsQ0FBTCxHQUFTLElBQVQ7QUFDQSxhQUFLQyxDQUFMLEdBQVMsSUFBVDtBQUNBLGFBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLEtBQUssS0FBS1AsS0FBTCxDQUFXVSxRQUFYLENBQW9CQyxNQUEzQztBQUNBLGFBQUs0RCxPQUFMLEdBQWVBLFVBQVVBLE9BQVYsR0FBb0IsRUFBbkM7QUFDSDs7OzsrQkFFTTtBQUNILGlCQUFLcEUsQ0FBTCxHQUFTLEtBQUthLFVBQUwsRUFBVDtBQUNBLGlCQUFLWixDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtBLENBQWQsR0FBa0IsS0FBS2EsVUFBTCxFQUEzQjtBQUNBLGlCQUFLWixLQUFMLEdBQWEsS0FBS2EsY0FBTCxFQUFiO0FBQ0EsaUJBQUtaLE1BQUwsR0FBYyxLQUFLYSxlQUFMLEVBQWQ7QUFDQSxpQkFBS2pCLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxnQkFBSSxLQUFLRixLQUFMLENBQVdRLFlBQVgsQ0FBd0I4RCxhQUE1QixFQUEyQztBQUN2QyxvQkFBSSxLQUFLdEUsS0FBTCxDQUFXUSxZQUFYLENBQXdCOEQsYUFBeEIsQ0FBc0M1RyxFQUF0QyxJQUE0QyxLQUFLQSxFQUFyRCxFQUF5RDtBQUNyRCx5QkFBS3dDLFVBQUwsR0FBa0IsSUFBbEI7QUFDSDtBQUNKO0FBQ0QsZ0JBQUksS0FBS0EsVUFBVCxFQUFxQjtBQUNqQixxQkFBS0gsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQkMsS0FBaEIsR0FBd0IsR0FBeEI7QUFDQWdFLGtCQUFFL0QsUUFBRjtBQUNBK0Qsa0JBQUU5RCxRQUFGLENBQVcsRUFBWDtBQUNBOEQsa0JBQUU3RCxTQUFGLENBQVk2RCxFQUFFNUQsTUFBZDtBQUNBNEQsa0JBQUUzRCxJQUFGLENBQU8sS0FBSzVCLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0I1QixDQUF2QixFQUEwQixLQUFLTSxLQUFMLENBQVdzQixJQUFYLENBQWdCTyxDQUExQyxFQUE2QyxLQUFLN0IsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQlEsQ0FBN0QsRUFBZ0UsR0FBaEU7QUFDQXlELGtCQUFFeEQsSUFBRixDQUFPLEtBQUszQixDQUFMLEdBQVMsS0FBS0UsS0FBZCxHQUFzQixFQUE3QixFQUFpQyxLQUFLRSxVQUF0QyxFQUFrRCxFQUFsRCxFQUFzRCxFQUF0RDtBQUNBK0Usa0JBQUV4RCxJQUFGLENBQU8sS0FBSzNCLENBQUwsR0FBUyxFQUFoQixFQUFvQixLQUFLSSxVQUF6QixFQUFxQyxFQUFyQyxFQUF5QyxFQUF6QztBQUNBK0Usa0JBQUUzRCxJQUFGLENBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEI7QUFDQTJELGtCQUFFN0QsU0FBRixDQUFZNkQsRUFBRXZELElBQWQ7QUFDQXVELGtCQUFFdEQsSUFBRixDQUFPLHdCQUFjQyxRQUFkLENBQXVCLEtBQUtwQyxLQUE1QixDQUFQLEVBQTJDLEtBQUtNLENBQUwsR0FBUyxFQUFwRCxFQUF3RCxLQUFLSSxVQUE3RCxFQUF5RSxFQUF6RSxFQUE2RSxFQUE3RTtBQUNBK0Usa0JBQUV0RCxJQUFGLENBQU8sd0JBQWNDLFFBQWQsQ0FBdUIsS0FBS25DLEdBQTVCLENBQVAsRUFBeUMsS0FBS0ssQ0FBTCxHQUFTLEVBQVQsR0FBYyxLQUFLRSxLQUE1RCxFQUFtRSxLQUFLRSxVQUF4RSxFQUFvRixFQUFwRixFQUF3RixFQUF4RjtBQUNBK0Usa0JBQUVwRCxTQUFGLENBQVlvRCxFQUFFbkQsTUFBZDtBQUNBbUQsa0JBQUVsRCxNQUFGLENBQVNrRCxFQUFFdkYsS0FBRixDQUFRLEtBQUtBLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0I1QixDQUF4QixFQUEyQixLQUFLTSxLQUFMLENBQVdzQixJQUFYLENBQWdCTyxDQUEzQyxFQUE4QyxLQUFLN0IsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQlEsQ0FBOUQsQ0FBVDtBQUNBeUQsa0JBQUVqRCxZQUFGLENBQWUsQ0FBZjtBQUNBaUQsa0JBQUVoRCxJQUFGLENBQU8sS0FBS25DLENBQVosRUFBZSxLQUFLSSxVQUFMLEdBQWtCLEVBQWpDLEVBQXFDLEtBQUtKLENBQTFDLEVBQTZDLEtBQUtILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjZCLElBQWpFO0FBQ0ErQyxrQkFBRWhELElBQUYsQ0FBTyxLQUFLbkMsQ0FBTCxHQUFTLEtBQUtFLEtBQXJCLEVBQTRCLEtBQUtFLFVBQUwsR0FBa0IsRUFBOUMsRUFBa0QsS0FBS0osQ0FBTCxHQUFTLEtBQUtFLEtBQWhFLEVBQXVFLEtBQUtMLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjZCLElBQTNGO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS3pDLEdBQUwsR0FBVyxLQUFLRSxLQUFMLENBQVdVLFFBQVgsQ0FBb0I4QixTQUEvQixHQUEyQyxDQUEvQyxFQUFrRDtBQUM5QzhDLGtCQUFFM0QsSUFBRixDQUFPLEdBQVA7QUFDQTJELGtCQUFFM0QsSUFBRixDQUFPLEtBQUs1QixLQUFMLENBQVdzQixJQUFYLENBQWdCNUIsQ0FBdkIsRUFBMEIsS0FBS00sS0FBTCxDQUFXc0IsSUFBWCxDQUFnQk8sQ0FBMUMsRUFBNkMsS0FBSzdCLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JRLENBQTdELEVBQWdFLEtBQUs5QixLQUFMLENBQVdzQixJQUFYLENBQWdCQyxLQUFoRixFQUY4QyxDQUUyQztBQUN6RmdFLGtCQUFFL0QsUUFBRixHQUg4QyxDQUcvQjtBQUNmK0Qsa0JBQUV4RCxJQUFGLENBQU8sS0FBSzNCLENBQVosRUFBZSxLQUFLQyxDQUFwQixFQUF1QixLQUFLQyxLQUE1QixFQUFtQyxLQUFLQyxNQUF4QyxFQUo4QyxDQUlJO0FBQ2xEZ0Ysa0JBQUVqRCxZQUFGLENBQWUsQ0FBZjtBQUNBaUQsa0JBQUU5RCxRQUFGLENBQVcsRUFBWDtBQUNBOEQsa0JBQUU3RCxTQUFGLENBQVk2RCxFQUFFNUQsTUFBZDtBQUNBNEQsa0JBQUUzRCxJQUFGLENBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsS0FBSzVCLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JDLEtBQXRDLEVBUjhDLENBUUM7QUFDL0NnRSxrQkFBRXhELElBQUYsQ0FBTyxLQUFLM0IsQ0FBTCxHQUFTLENBQWhCLEVBQW1CLEtBQUtDLENBQUwsR0FBUyxDQUE1QixFQUErQixLQUFLQyxLQUFMLEdBQWEsQ0FBNUMsRUFBK0MsRUFBL0MsRUFUOEMsQ0FTTztBQUNyRGlGLGtCQUFFM0QsSUFBRixDQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixLQUFLNUIsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQkMsS0FBaEM7QUFDQWdFLGtCQUFFdEQsSUFBRixDQUFPLEtBQUtBLElBQVosRUFBa0IsS0FBSzdCLENBQUwsR0FBUyxDQUEzQixFQUE4QixLQUFLQyxDQUFMLEdBQVMsQ0FBdkMsRUFBMEMsS0FBS0MsS0FBTCxHQUFhLENBQXZELEVBQTBELEVBQTFEO0FBQ0FpRixrQkFBRXBELFNBQUYsQ0FBWW9ELEVBQUVuRCxNQUFkO0FBQ0FtRCxrQkFBRTNELElBQUYsQ0FBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsR0FBaEI7QUFDSDtBQUNKOzs7c0NBRWE7QUFDVixpQkFBSyxJQUFJNEQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtoQixPQUFMLENBQWFpQixNQUFqQyxFQUF5Q0QsR0FBekMsRUFBOEM7QUFDMUMscUJBQUtoQixPQUFMLENBQWFnQixDQUFiLEVBQWdCRSxJQUFoQjtBQUNIO0FBQ0o7OztvQ0FFVzlCLEssRUFBT2pCLEssRUFBTztBQUN0QkEsa0JBQU1DLGNBQU47QUFDQSxxQ0FBUyxrQkFBVCxFQUE2QmdCLEtBQTdCO0FBQ0FmLGVBQUdDLFNBQUgsQ0FBYUgsS0FBYixFQUFvQmlCLEtBQXBCO0FBQ0g7OztvQ0FFV3hELEMsRUFBR0MsQyxFQUFHO0FBQ2QsZ0JBQUlELEtBQUssS0FBS0EsQ0FBVixJQUFlQSxLQUFNLEtBQUtBLENBQUwsR0FBUyxLQUFLRSxLQUFuQyxJQUE2Q0QsS0FBSyxLQUFLQSxDQUF2RCxJQUE0REEsS0FBTSxLQUFLQSxDQUFMLEdBQVMsS0FBS0UsTUFBcEYsRUFBNkY7QUFDekYscUJBQUtQLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JDLEtBQWhCLEdBQXdCLEdBQXhCO0FBQ0EscUJBQUtyQixXQUFMLEdBQW1CLElBQW5CO0FBQ0gsYUFIRCxNQUdPO0FBQ0gscUJBQUtGLEtBQUwsQ0FBV3NCLElBQVgsQ0FBZ0JDLEtBQWhCLEdBQXdCLEVBQXhCO0FBQ0EscUJBQUtyQixXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7QUFDRCxtQkFBTyxLQUFLQSxXQUFaO0FBQ0g7Ozs0Q0FFbUJFLEMsRUFBR0MsQyxFQUFHO0FBQ3RCLGdCQUFJLENBQUMsS0FBS0osS0FBTCxDQUFXUSxZQUFYLENBQXdCc0MsZUFBekIsSUFBNEMsQ0FBQyxLQUFLOUMsS0FBTCxDQUFXUSxZQUFYLENBQXdCdUMsY0FBekUsRUFBeUY7QUFDckYsb0JBQUkzQyxLQUFLLEtBQUtKLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQkMsTUFBN0IsRUFBcUM7QUFDakMsd0JBQUlSLEtBQUssS0FBS0EsQ0FBVixJQUFlQSxLQUFNLEtBQUtBLENBQUwsR0FBUyxLQUFLRSxLQUFuQyxJQUE2Q0QsS0FBSyxLQUFLQSxDQUF2RCxJQUE0REEsS0FBTSxLQUFLQSxDQUFMLEdBQVMsS0FBS0UsTUFBcEYsRUFBNkY7QUFDekYsNkJBQUtKLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSw0QkFBSSxDQUFDMEMsR0FBRzhDLE9BQVIsRUFBaUI7QUFDYjlDLCtCQUFHSSxLQUFILENBQVNDLE1BQVQsQ0FBZ0JDLEdBQWhCLEdBQXNCQyxZQUF0QixDQUFtQ0MsUUFBbkMsQ0FBNEMsS0FBS3ZELEtBQWpELEVBQXdEd0QsTUFBeEQsQ0FBK0QsS0FBS3ZELEdBQXBFLEVBQXlFd0QsTUFBekU7QUFDQVYsK0JBQUdJLEtBQUgsQ0FBU0MsTUFBVCxDQUFnQkMsR0FBaEIsR0FBc0JDLFlBQXRCLENBQW1DSSxTQUFuQztBQUNBWCwrQkFBR0ksS0FBSCxDQUFTQyxNQUFULENBQWdCQyxHQUFoQixHQUFzQnlDLElBQXRCO0FBQ0EscURBQVMsa0JBQVQsRUFBNkIsSUFBN0I7QUFDSDtBQUNKLHFCQVJELE1BUU87QUFDSCw2QkFBS3pGLFVBQUwsR0FBa0IsS0FBbEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7O3FDQUdZO0FBQ1QsZ0JBQUlMLFFBQVEsQ0FBQyxLQUFLQSxLQUFMLEdBQWEsS0FBS0csS0FBTCxDQUFXVSxRQUFYLENBQW9COEIsU0FBbEMsSUFBK0MsS0FBS3hDLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjhDLFdBQS9FO0FBQ0EsZ0JBQUkzRCxRQUFRLENBQVosRUFBZTtBQUNYLHVCQUFPLEVBQVA7QUFDSDs7QUFFRCxtQkFBT0EsUUFBUSxFQUFmO0FBQ0g7OztxQ0FFWTtBQUNULG1CQUFPLEtBQUssS0FBS0csS0FBTCxDQUFXVSxRQUFYLENBQW9CQyxNQUFoQztBQUNIOzs7eUNBRWdCO0FBQ2IsZ0JBQUlkLFFBQVEsQ0FBQyxLQUFLQSxLQUFMLEdBQWEsS0FBS0csS0FBTCxDQUFXVSxRQUFYLENBQW9COEIsU0FBbEMsSUFBK0MsS0FBS3hDLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjhDLFdBQS9FO0FBQ0EsZ0JBQUkzRCxRQUFRLENBQVosRUFBZTtBQUNYLHVCQUFPLENBQUMsS0FBS0MsR0FBTCxHQUFXLEtBQUtFLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjhCLFNBQWhDLElBQTZDLEtBQUt4QyxLQUFMLENBQVdVLFFBQVgsQ0FBb0I4QyxXQUF4RTtBQUNIO0FBQ0QsbUJBQU8sQ0FBQyxLQUFLMUQsR0FBTCxHQUFXLEtBQUtELEtBQWpCLElBQTBCLEtBQUtHLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjhDLFdBQXJEO0FBQ0g7OzswQ0FFaUI7QUFDZCxtQkFBTyxFQUFQO0FBQ0g7OzsyQ0FFa0I7QUFDZixvQ0FBY3ZCLFFBQWQsQ0FBdUIsS0FBS3BDLEtBQTVCO0FBQ0g7Ozs7OztrQkF2SWdCd0YsSzs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7SUFFcUJPLFc7QUFDakIsMkJBQWM7QUFBQTs7QUFDVixhQUFLNUYsS0FBTCxHQUFhLHlCQUFTLEdBQVQsQ0FBYjtBQUNIOzs7O3lDQUVnQkcsQyxFQUFHO0FBQ2hCLG1CQUFPLHdCQUFjOEIsUUFBZCxDQUF1QjVFLEtBQUtDLEtBQUwsQ0FBVzZDLElBQUksS0FBS0gsS0FBTCxDQUFXVSxRQUFYLENBQW9COEMsV0FBbkMsQ0FBdkIsQ0FBUDtBQUNIOzs7bUNBRVVyRCxDLEVBQUc7QUFDVixtQkFBTzlDLEtBQUtDLEtBQUwsQ0FBVzZDLElBQUksS0FBS0gsS0FBTCxDQUFXVSxRQUFYLENBQW9COEMsV0FBbkMsQ0FBUDtBQUNIOzs7Ozs7a0JBWGdCb0MsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSEFDLFE7QUFDakIsd0JBQWM7QUFBQTtBQUNiOzs7O3VDQUVjO0FBQ1gsZ0JBQUk3RyxJQUFJLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFSO0FBQ0EsZ0JBQUlDLE9BQU9DLFdBQVAsSUFBc0IsT0FBT0QsT0FBT0MsV0FBUCxDQUFtQkMsR0FBMUIsS0FBa0MsVUFBNUQsRUFBd0U7QUFDcEVMLHFCQUFLSSxZQUFZQyxHQUFaLEVBQUwsQ0FEb0UsQ0FDNUM7QUFDM0I7QUFDRCxnQkFBSUMsT0FBTyx1Q0FBdUNDLE9BQXZDLENBQStDLE9BQS9DLEVBQXdELFVBQVVDLENBQVYsRUFBYTtBQUM1RSxvQkFBSUMsSUFBSSxDQUFDVCxJQUFJM0IsS0FBS3FDLE1BQUwsS0FBZ0IsRUFBckIsSUFBMkIsRUFBM0IsR0FBZ0MsQ0FBeEM7QUFDQVYsb0JBQUkzQixLQUFLQyxLQUFMLENBQVcwQixJQUFJLEVBQWYsQ0FBSjtBQUNBLHVCQUFPLENBQUNRLEtBQUssR0FBTCxHQUFXQyxDQUFYLEdBQWdCQSxJQUFJLEdBQUosR0FBVSxHQUEzQixFQUFpQ0UsUUFBakMsQ0FBMEMsRUFBMUMsQ0FBUDtBQUNILGFBSlUsQ0FBWDtBQUtBLG1CQUFPTCxJQUFQO0FBQ0g7Ozs7OztrQkFmZ0J1RyxROzs7Ozs7O0FDQXJCLHdEQUFlLHlJQUFxTCxpQkFBaUIsbUJBQW1CLGNBQWMsNEJBQTRCLFlBQVksVUFBVSxpQkFBaUIsZ0VBQWdFLFNBQVMsK0JBQStCLGtCQUFrQixhQUFhLGNBQWMsMEJBQTBCLGFBQWEsb01BQW9NLDZTQUE2UyxZQUFZLGVBQWUscUJBQXFCLFNBQVMsNkJBQTZCLGlCQUFpQixjQUFjLEtBQUssY0FBYyw2QkFBNkIsU0FBUyxnQkFBZ0Isa0JBQWtCLG1CQUFtQixzQ0FBc0MsWUFBWSxLQUFLLGNBQWMsS0FBSyxpQkFBaUIsOEJBQThCLFFBQVEsV0FBVyxLQUFLLFdBQVcsZ0dBQWdHLElBQUksaUJBQWlCLGdCQUFnQixZQUFZLFdBQVcsS0FBSyxxQkFBcUIsTUFBTSxTQUFTLFlBQVksaUJBQWlCLDJCQUEyQixLQUFLLGlCQUFpQixrQ0FBa0MsS0FBSyxpQkFBaUIsaUJBQWlCLDRCQUE0QixTQUFTLDBCQUEwQixjQUFjLGlCQUFpQixLQUFLLFdBQVcsS0FBSywwQ0FBMEMsMkJBQTJCLHFDQUFxQyxlQUFlLEVBQUUsU0FBUyxnQkFBZ0IsMEJBQTBCLGdJQUFnSSxLQUFLLCtHQUErRyxrQkFBa0IsY0FBYyw0QkFBNEIsbUJBQW1CLG9CQUFvQixjQUFjLHNDQUFzQyxrQ0FBa0MsZ0JBQWdCLFVBQVUsZ0JBQWdCLFVBQVUsMERBQTBELDBDQUEwQyxNQUFNLHdCQUF3QixNQUFNLHNFQUFzRSxPQUFPLFVBQVUsb0JBQW9CLGlCQUFpQiw0Q0FBNEMsS0FBSyxnREFBZ0QsNEVBQTRFLGdCQUFnQixvQ0FBb0MsOEhBQThILDBHQUEwRyxLQUFLLEtBQUssYUFBYSw2QkFBNkIsMkNBQTJDLFFBQVEsZUFBZSxNQUFNLGtCQUFrQiw0REFBNEQsZ0JBQWdCLG9FQUFvRSxpQkFBaUIsK0RBQStELGtCQUFrQix3QkFBd0IsT0FBTywwR0FBMEcsV0FBVywwQkFBMEIsaUJBQWlCLFdBQVcsS0FBSyxxQkFBcUIsbUJBQW1CLE1BQU0sV0FBVyxPQUFPLFlBQVksV0FBVyxLQUFLLFdBQVcsZUFBZSxZQUFZLGlCQUFpQixpQkFBaUIsbUJBQW1CLGlCQUFpQixTQUFTLHFCQUFxQiw0Q0FBNEMsR0FBRyxpQkFBaUIsYUFBYSxjQUFjLDBCQUEwQixhQUFhLGdCQUFnQixvQkFBb0IsZ0ZBQWdGLCtDQUErQyx1R0FBdUcsc0NBQXNDLFNBQVMsRUFBRSxtQkFBbUIsY0FBYyxnQ0FBZ0MsT0FBTyxtQkFBbUIsV0FBVyxRQUFRLGVBQWUsZ0JBQWdCLGlCQUFpQiwwQ0FBMEMsUUFBUSxrQkFBa0IsZUFBZSxxQkFBcUIsVUFBVSwwQkFBMEIsOERBQThELHdCQUF3QixvQ0FBb0Msc0NBQXNDLHdEQUF3RCxXQUFXLEtBQUssV0FBVyw2QkFBNkIscUJBQXFCLGlCQUFpQixRQUFRLGNBQWMsWUFBWSxTQUFTLDBMQUEwTCxpQkFBaUIsUUFBUSxjQUFjLFlBQVksU0FBUywwTEFBMEwsaUJBQWlCLFFBQVEsY0FBYyxZQUFZLFNBQVMsMExBQTBMLGlCQUFpQixRQUFRLGNBQWMsWUFBWSxTQUFTLDBMQUEwTCxpQkFBaUIsUUFBUSxjQUFjLFlBQVksU0FBUywwTEFBMEwsaUJBQWlCLGFBQWEsY0FBYywwQkFBMEIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLDBFQUEwRSxjQUFjLDRDQUE0QyxhQUFhLGlGQUFpRixpQkFBaUIsT0FBTyx5REFBeUQsV0FBVyx1QkFBdUIsdUJBQXVCLCtDQUErQyxVQUFVLHlCQUF5QixrQkFBa0IsbUJBQW1CLEVBQUUseUJBQXlCLG9CQUFvQix5QkFBeUIsb0RBQW9ELHVCQUF1QiwwQ0FBMEMsc0hBQXNILEdBQUcsd0JBQXdCLDRFQUE0RSwwQkFBMEIsa0JBQWtCLDBCQUEwQixxQkFBcUIsaUJBQWlCLGFBQWEsY0FBYywwQkFBMEIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLDRZQUE0WSxjQUFjLDZDQUE2QyxhQUFhLHFCQUFxQixXQUFXLGdCQUFnQix3QkFBd0IsaUJBQWlCLE9BQU8saUJBQWlCLFVBQVUseUJBQXlCLGtCQUFrQixtQkFBbUIsRUFBRSxzQkFBc0Isb0RBQW9ELHVCQUF1QixxQ0FBcUMsc0hBQXNILE1BQU0saUJBQWlCLGFBQWEsY0FBYywwQkFBMEIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGdDQUFnQyxjQUFjLGtEQUFrRCxxQkFBcUIsVUFBVSxxQkFBcUIsb0RBQW9ELHVCQUF1QixxQ0FBcUMsc0hBQXNILE1BQU0saUJBQWlCLGFBQWEsY0FBYywwQkFBMEIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLDBFQUEwRSxjQUFjLDhDQUE4QyxNQUFNLHNDQUFzQyxhQUFhLGlGQUFpRixpQkFBaUIsT0FBTyxxQkFBcUIsb0JBQW9CLGtDQUFrQyxVQUFVLHdCQUF3QixvQkFBb0IseUJBQXlCLHNEQUFzRCx3QkFBd0IsMENBQTBDLHNIQUFzSCxHQUFHLHlCQUF5QixpQkFBaUIseUJBQXlCLHdCQUF3QixpQkFBaUIsYUFBYSxjQUFjLDBCQUEwQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsb09BQW9PLGNBQWMsZ0RBQWdELGlGQUFpRixpQkFBaUIsT0FBTyxnQkFBZ0IsV0FBVyx1QkFBdUIsdUJBQXVCLCtDQUErQyxVQUFVLHlCQUF5QixrQkFBa0IsbUJBQW1CLEVBQUUseUJBQXlCLG9CQUFvQix5QkFBeUIsb0RBQW9ELHVCQUF1QiwwQ0FBMEMsc0hBQXNILE1BQU0saUJBQWlCLGFBQWEsY0FBYywwQkFBMEIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGdDQUFnQyxjQUFjLDJDQUEyQyxpQkFBaUIsYUFBYSxpQkFBaUIsV0FBVyx3QkFBd0IsMkZBQTJGLGlCQUFpQixPQUFPLDBDQUEwQyxVQUFVLHNCQUFzQixvQkFBb0IsNkJBQTZCLGtCQUFrQiwwQ0FBMEMsS0FBSyxpQkFBaUIsYUFBYSxjQUFjLDBCQUEwQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsdVBBQXVQLFNBQVMsNkJBQTZCLFNBQVMsc0JBQXNCLHlDQUF5QyxZQUFZLElBQUksR0FBRyxjQUFjLGdEQUFnRCxnQkFBZ0Isd0JBQXdCLGlCQUFpQixPQUFPLGlCQUFpQixVQUFVLHlCQUF5QixrQkFBa0IsbUJBQW1CLEtBQUssaUJBQWlCLGFBQWEsY0FBYywwQkFBMEIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGtCQUFrQixjQUFjLG9CQUFvQiwrQkFBK0IsYUFBYSx3QkFBd0IsV0FBVyxrQkFBa0Isa0JBQWtCLDBCQUEwQixpREFBaUQsMkVBQTJFLFVBQVUsMkJBQTJCLHVCQUF1QixpSUFBaUksaUZBQWlGLDhFQUE4RSxFQUFFLDZCQUE2QixxSUFBcUksMEJBQTBCLDRCQUE0QixpQ0FBaUMsc0hBQXNILGVBQWUsYUFBYSxrQkFBa0IsNENBQTRDLHVDQUF1QyxxQkFBcUIseUJBQXlCLG9KQUFvSixrQkFBa0Isb0JBQW9CLG9CQUFvQixlQUFlLGdCQUFnQixzQ0FBc0MsU0FBUyxFQUFFLFNBQVMsY0FBYyx5QkFBeUIsTUFBTSxpQ0FBaUMsUUFBUSw2QkFBNkIsT0FBTyxpQ0FBaUMsV0FBVyxtQkFBbUIsa0VBQWtFLGVBQWUsYUFBYSxzQ0FBc0MsU0FBUyxnQkFBZ0IsNEJBQTRCLDJEQUEyRCx5QkFBeUIsV0FBVyxlQUFlLG1CQUFtQixVQUFVLFdBQVcsaUJBQWlCLHVDQUF1QyxxQkFBcUIsV0FBVyxVQUFVLG1CQUFtQixrQ0FBa0MsMEJBQTBCLFNBQVMsMENBQTBDLHdCQUF3QixlQUFlLDJCQUEyQiwyQkFBMkIsTUFBTSwwQkFBMEIsaUlBQWlJLHdCQUF3QixlQUFlLDZCQUE2QixrQkFBa0IsZUFBZSxhQUFhLHNDQUFzQyxTQUFTLGdCQUFnQixrQkFBa0Isd0JBQXdCLG9DQUFvQyxXQUFXLGtCQUFrQixrQkFBa0IsMkJBQTJCLE9BQU8sdUhBQXVILHVCQUF1Qix5RUFBeUUsd0JBQXdCLG1FQUFtRSxVQUFVLDJCQUEyQix1QkFBdUIsdU9BQXVPLDZIQUE2SCw2RUFBNkUsNkZBQTZGLDZFQUE2RSxHQUFHLDZCQUE2QixxSUFBcUksMkJBQTJCLDRCQUE0QixpQ0FBaUMsc0hBQXNILGlCQUFpQixhQUFhLGNBQWMsMEJBQTBCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxtQkFBbUIsY0FBYyx5QkFBeUIsYUFBYSxXQUFXLGtCQUFrQixrQkFBa0Isb0JBQW9CLDZDQUE2Qyx1QkFBdUIsdUNBQXVDLHdCQUF3QixrQ0FBa0MsVUFBVSx3Q0FBd0MsS0FBSyxnQ0FBZ0MsdUJBQXVCLG1PQUFtTyxtQ0FBbUMsK0JBQStCLDZCQUE2Qiw2REFBNkQsRUFBRSxzQkFBc0IsMEJBQTBCLDZCQUE2QixxSUFBcUksMkJBQTJCLDRCQUE0QixpQ0FBaUMsc0hBQXNILGlCQUFpQixxREFBcUQsZ0JBQWdCLGlCQUFpQixZQUFZLGtCQUFrQixnRUFBZ0Usc0JBQXNCLDRCQUE0QixnQkFBZ0IsVUFBVSxTQUFTLGdDQUFnQyxnQkFBZ0IsV0FBVyxZQUFZLFdBQVcsaUJBQWlCLGtCQUFrQixrQkFBa0IsZUFBZSx1Q0FBdUMsZ0NBQWdDLGdFQUFnRSxnQkFBZ0IseUJBQXlCLGtCQUFrQixRQUFRLFVBQVUsV0FBVyxTQUFTLGtCQUFrQixVQUFVLGdCQUFnQiw0QkFBNEIsYUFBYSxtQkFBbUIsa0JBQWtCLGtCQUFrQiw4REFBOEQsVUFBVSxpQkFBaUIsZ0JBQWdCLGVBQWUsV0FBVyxZQUFZLDhEQUE4RCxrQkFBa0IsUUFBUSxPQUFPLGlCQUFpQix5QkFBeUIsZUFBZSxXQUFXLGdDQUFnQyxrQkFBa0IsUUFBUSxTQUFTLFdBQVcsVUFBVSwyQkFBMkIsT0FBTyw2QkFBNkIsT0FBTywrREFBK0QsVUFBVSxpQkFBaUIsK0RBQStELGFBQWEsT0FBTyxpQkFBaUIsNERBQTRELGtCQUFrQixrQ0FBa0MsVUFBVSxTQUFTLGFBQWEsa0NBQWtDLDBCQUEwQixPQUFPLGlCQUFpQixtREFBbUQsa0JBQWtCLE1BQU0sUUFBUSxTQUFTLE9BQU8sa0JBQWtCLDhCQUE4Qix5RkFBeUYsNEJBQTRCLHdGQUF3Riw2QkFBNkIsZUFBZSxhQUFhLGtCQUFrQixZQUFZLDJCQUEyQixVQUFVLGtCQUFrQiwwQkFBMEIsZUFBZSxlQUFlLFVBQVUsa0JBQWtCLFdBQVcsa0NBQWtDLGdCQUFnQiwyQkFBMkIsT0FBTyxpQkFBaUIsb0hBQW9ILGVBQWUsa0JBQWtCLE1BQU0sT0FBTyxRQUFRLFNBQVMsOEJBQThCLHlEQUF5RCw4QkFBOEIsa0RBQWtELGdDQUFnQyxlQUFlLGtCQUFrQiwrQkFBK0IsWUFBWSxVQUFVLFdBQVcsd0ZBQXdGLGtCQUFrQiwrQkFBK0IsT0FBTyxpQkFBaUIsc0RBQXNELFdBQVcsWUFBWSxhQUFhLG1CQUFtQixrQkFBa0Isa0JBQWtCLGdFQUFnRSxzQkFBc0IsdURBQXVELFdBQVcsZ0JBQWdCLGVBQWUsV0FBVyxZQUFZLHVEQUF1RCxrQkFBa0IsTUFBTSxPQUFPLGVBQWUsV0FBVywwQkFBMEIsMEJBQTBCLHdCQUF3QiwwQkFBMEIsNEJBQTRCLGFBQWEsbUJBQW1CLGlCQUFpQiw0QkFBNEIsT0FBTyxtQkFBbUIsT0FBTyxpQkFBaUIsb0RBQW9ELGtCQUFrQixZQUFZLDZCQUE2QixZQUFZLGtCQUFrQix1REFBdUQsV0FBVyxZQUFZLGtCQUFrQiwrQkFBK0IseUJBQXlCLHVDQUF1Qyw2QkFBNkIsYUFBYSxnQkFBZ0IsMkJBQTJCLGlCQUFpQixPQUFPLFVBQVUsdUNBQXVDLGlCQUFpQix5RUFBeUUsMEJBQTBCLHNDQUFzQyxlQUFlLHdFQUF3RSwwQkFBMEIsa0NBQWtDLGVBQWUsWUFBWSwwQ0FBMEMsc0JBQXNCLHdCQUF3QixPQUFPLGlCQUFpQixzREFBc0QsWUFBWSxhQUFhLGtCQUFrQixzQkFBc0IsZ0VBQWdFLDBCQUEwQix3QkFBd0IsZ0JBQWdCLGtDQUFrQyxvQkFBb0IsV0FBVyxXQUFXLGtCQUFrQiwrQkFBK0IsV0FBVyxZQUFZLGVBQWUsbUJBQW1CLGtCQUFrQixnQkFBZ0IsMEJBQTBCLDJCQUEyQixVQUFVLGdCQUFnQixjQUFjLE9BQU8saUJBQWlCLHdEQUF3RCxtQkFBbUIsa0JBQWtCLGdFQUFnRSxtQkFBbUIsWUFBWSxtQkFBbUIsNkJBQTZCLDBEQUEwRCxnQ0FBZ0MsK0VBQStFLFlBQVksaUJBQWlCLDBCQUEwQixlQUFlLGNBQWMsa0JBQWtCLDZCQUE2QixhQUFhLGFBQWEsd0NBQXdDLFlBQVksYUFBYSxrQkFBa0IseUJBQXlCLGdDQUFnQyxnQkFBZ0IsdUVBQXVFLFdBQVcsWUFBWSxpQ0FBaUMsa0JBQWtCLGFBQWEsV0FBVyxpQkFBaUIseUJBQXlCLGdDQUFnQyxvQ0FBb0Msa0JBQWtCLHFGQUFxRixrQkFBa0IsUUFBUSxTQUFTLG1CQUFtQiwyQkFBMkIsc0RBQXNELGlHQUFpRyxXQUFXLFFBQVEsU0FBUyxtQkFBbUIsMkJBQTJCLHNEQUFzRCxrQkFBa0IsUUFBUSxTQUFTLCtCQUErQiwwQ0FBMEMsZ0NBQWdDLDJDQUEyQyw4Q0FBOEMsaUNBQWlDLFlBQVksaUJBQWlCLGFBQWEsZ0NBQWdDLGlCQUFpQixPQUFPLCtCQUErQixlQUFlLHVEQUF1RCx5QkFBeUIsa0JBQWtCLFlBQVksNkJBQTZCLGVBQWUsV0FBVyxpQkFBaUIsa0JBQWtCLG1CQUFtQixpQ0FBaUMsV0FBVywyQ0FBMkMseUJBQXlCLGdDQUFnQyxrQkFBa0IsZUFBZSwyQ0FBMkMsWUFBWSxxRUFBcUUsd0NBQXdDLGVBQWUsV0FBVyxrQkFBa0IsK0JBQStCLGdCQUFnQixtQkFBbUIsV0FBVyxrQkFBa0IsaUVBQWlFLGdCQUFnQixVQUFVLFlBQVksc0JBQXNCLDREQUE0RCxrQkFBa0IsZUFBZSxpQkFBaUIsa0JBQWtCLGlFQUFpRSxNQUFNLE9BQU8sV0FBVyx5QkFBeUIsZUFBZSxZQUFZLGlCQUFpQixrQkFBa0Isd0NBQXdDLFdBQVcsc0VBQXNFLGdCQUFnQixVQUFVLFlBQVksc0JBQXNCLDREQUE0RCxrQkFBa0IsZUFBZSxpQkFBaUIsc0VBQXNFLGtCQUFrQixNQUFNLE9BQU8sV0FBVyx5QkFBeUIsZUFBZSxZQUFZLGlCQUFpQixPQUFPLGlCQUFpQixvREFBb0Qsa0JBQWtCLFlBQVksb0JBQW9CLG1CQUFtQixnQkFBZ0Isa0JBQWtCLGdFQUFnRSxvQ0FBb0MsV0FBVyxtQkFBbUIsa0JBQWtCLGdCQUFnQiw2QkFBNkIsYUFBYSw0QkFBNEIsY0FBYyxPQUFPLHdHQUF3RyxrQkFBa0IsNkJBQTZCLGtCQUFrQixZQUFZLCtCQUErQixrQkFBa0IsWUFBWSxlQUFlLGdCQUFnQiwrQkFBK0IsV0FBVyxZQUFZLGtCQUFrQixlQUFlLGdCQUFnQixrQkFBa0IsaUNBQWlDLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxTQUFTLGtCQUFrQix5RUFBeUUsVUFBVSwwQkFBMEIsYUFBYSxnQkFBZ0IsNERBQTRELFVBQVUsb0JBQW9CLFlBQVksZ0NBQWdDLGVBQWUsNERBQTRELGNBQWMsa0JBQWtCLGVBQWUsV0FBVyxnQkFBZ0IsbUJBQW1CLDBCQUEwQixrQ0FBa0MsT0FBTyxpQkFBaUIsa0NBQWtDLE9BQU8sNEJBQTRCLG1CQUFtQixrQkFBa0Isa0JBQWtCLGlCQUFpQiwwQkFBMEIsa0NBQWtDLGtCQUFrQixnQkFBZ0Isa0JBQWtCLHFCQUFxQixxQkFBcUIsbUJBQW1CLGVBQWUsV0FBVyxZQUFZLDJDQUEyQyxPQUFPLGlCQUFpQixvREFBb0QsZ0JBQWdCLGtCQUFrQiwyREFBMkQsbUJBQW1CLFlBQVksa0JBQWtCLHNCQUFzQiw2QkFBNkIsYUFBYSwrQkFBK0IsV0FBVyxpQ0FBaUMsZUFBZSxXQUFXLFlBQVksa0JBQWtCLGtCQUFrQixnQkFBZ0IsNEJBQTRCLE9BQU8sd0dBQXdHLGtCQUFrQiw4R0FBOEcsV0FBVyxZQUFZLGtCQUFrQiwrQkFBK0IseUJBQXlCLHVDQUF1QyxnQ0FBZ0MsaUJBQWlCLGFBQWEsMkJBQTJCLGFBQWEsaUJBQWlCLE9BQU8sMEJBQTBCLGlCQUFpQixXQUFXLCtCQUErQixXQUFXLGlCQUFpQixrQkFBa0IseUJBQXlCLGtCQUFrQixnQkFBZ0IsZUFBZSxrQkFBa0IsVUFBVSxtQ0FBbUMsa0JBQWtCLFdBQVcsWUFBWSxnQkFBZ0Isa0JBQWtCLFNBQVMsVUFBVSw2QkFBNkIsa0JBQWtCLDREQUE0RCxrQkFBa0IsWUFBWSxnQ0FBZ0MsdUJBQXVCLHNCQUFzQixvQ0FBb0MsV0FBVyxtQkFBbUIsa0JBQWtCLDBCQUEwQixnQkFBZ0IsbUVBQW1FLFdBQVcsWUFBWSw2REFBNkQsZUFBZSxXQUFXLFdBQVcsbUJBQW1CLFlBQVksbUNBQW1DLFlBQVksa0JBQWtCLDZEQUE2RCx5QkFBeUIsZUFBZSxpQkFBaUIsY0FBYyxrQkFBa0IsY0FBYyxnQkFBZ0IsT0FBTyxpQkFBaUIsMEZBQTBGLGtCQUFrQixNQUFNLFFBQVEsU0FBUyxPQUFPLHFDQUFxQyxnQkFBZ0IsOEJBQThCLGtCQUFrQixNQUFNLFFBQVEsU0FBUyxPQUFPLCtCQUErQixlQUFlLGtCQUFrQixVQUFVLFlBQVksYUFBYSw2QkFBNkIsVUFBVSxrQkFBa0IsNEJBQTRCLGVBQWUsVUFBVSxrQkFBa0IsV0FBVyxrQ0FBa0MsZ0JBQWdCLGVBQWUsMkJBQTJCLE9BQU8saUJBQWlCLDREQUE0RCxrQkFBa0IsTUFBTSxRQUFRLFNBQVMsT0FBTyxPQUFPLGVBQWUsYUFBYSxrQkFBa0IsY0FBYyxZQUFZLHFDQUFxQyxjQUFjLHNDQUFzQyxjQUFjLHNCQUFzQixvQkFBb0IsY0FBYyxnQkFBZ0Isc0NBQXNDLGFBQWEsVUFBVSw0Q0FBNEMsY0FBYyx5Q0FBeUMsYUFBYSwrQ0FBK0MsYUFBYSwyQkFBMkIsYUFBYSxpQkFBaUIsNkJBQTZCLDBCQUEwQjtBQUNwdStCLEtBQUsseUNBQXlDLG1DQUFtQywrQ0FBK0MseUlBQXlJLGtCQUFrQixjQUFjLCtDQUErQyxvRkFBb0YsK0JBQStCLEVBQUUsY0FBYyxlQUFlLHdDQUF3QyxjQUFjLDhCQUE4QixjQUFjLDZDQUE2QyxjQUFjLCtCQUErQixpQkFBaUIsU0FBUyxpREFBaUQsY0FBYyx3Q0FBd0Msa0JBQWtCLGdCQUFnQix1REFBdUQsbVZBQW1WLHFCQUFxQixZQUFZLG9CQUFvQixZQUFZLElBQUksaUJBQWlCLFVBQVUsZUFBZSw0RUFBNEUsaUJBQWlCLE9BQU8sS0FBSyx1TUFBdU0sT0FBTyx1TUFBdU0sU0FBUyx1TUFBdU0sYUFBYSx1TUFBdU0sU0FBUyx1TUFBdU0sT0FBTyx1TUFBdU0sWUFBWSx1TUFBdU0sT0FBTyx1TUFBdU0sT0FBTyx1TUFBdU0sUUFBUSx1TUFBdU0sYUFBYSx1TUFBdU0sT0FBTyx1TUFBdU0sU0FBUyx1TUFBdU0sUUFBUSx1TUFBdU0sU0FBUyx1TUFBdU0sYUFBYSx1TUFBdU0sUUFBUSwySUFBMkksT0FBTywySUFBMkksV0FBVywySUFBMkksV0FBVyw0SEFBNEgsWUFBWSwrSUFBK0ksWUFBWSw0REFBNEQsYUFBYSxvRUFBb0Usa0NBQWtDLEVBQUUsaUJBQWlCLE1BQU0sYUFBYSxnQkFBZ0IsbUJBQW1CLHlCQUF5QiwwQ0FBMEMsV0FBVyxzU0FBc1MsY0FBYyxPQUFPLFlBQVksb0NBQW9DLHNVQUFzVSxtRkFBbUYsa0JBQWtCLE9BQU8sOENBQThDLGtCQUFrQixpQ0FBaUMsd0NBQXdDLGNBQWMsS0FBSyxVQUFVLG1DQUFtQywyQkFBMkIsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUIsS0FBSyxPQUFPLGFBQWEsa0JBQWtCLGtCQUFrQixrRkFBa0YsVUFBVSxrREFBa0QsS0FBSyxtQ0FBbUMseUNBQXlDLE9BQU8seUJBQXlCLGtCQUFrQixpQ0FBaUMsd0NBQXdDLDBCQUEwQixLQUFLLFVBQVUsMkJBQTJCLE1BQU0sbUJBQW1CLE1BQU0sbUJBQW1CLEtBQUssT0FBTyxhQUFhLGtCQUFrQixtQ0FBbUMsNEhBQTRILE9BQU8seUJBQXlCLG9CQUFvQix1RUFBdUUsaUtBQWlLLHNCQUFzQiwrRUFBK0UsZ05BQWdOLG9CQUFvQiwrRUFBK0Usa0JBQWtCLGdCQUFnQixnQkFBZ0IsbUJBQW1CLGtDQUFrQyxnQkFBZ0IsZ0JBQWdCLG1CQUFtQixrQ0FBa0MsY0FBYyw0QkFBNEIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsa0NBQWtDLGdCQUFnQixnQkFBZ0IsbUJBQW1CLHdIQUF3SCxnQkFBZ0IsZ0JBQWdCLG1CQUFtQixrQ0FBa0MsZ0JBQWdCLGlDQUFpQyw0QkFBNEIsY0FBYyxtQkFBbUIsOEJBQThCLGNBQWMseUJBQXlCLGVBQWUsMEJBQTBCLEtBQUssMEJBQTBCLEdBQUcsY0FBYyx5QkFBeUIsZUFBZSx5QkFBeUIsS0FBSywwQkFBMEIsS0FBSywwQkFBMEIsR0FBRyxjQUFjLHlCQUF5QixlQUFlLHlCQUF5QixLQUFLLDBCQUEwQixHQUFHLGtCQUFrQixlQUFlLG9DQUFvQywrQkFBK0IsSUFBSSw4QkFBOEIsU0FBUyxnQkFBZ0IsT0FBTyxvREFBb0QsSUFBSSxXQUFXLFlBQVksYUFBYSxTQUFTLGNBQWMsU0FBUyxnREFBZ0QsU0FBUyxjQUFjLHFEQUFxRCxnQkFBZ0IsaUJBQWlCLFdBQVcsaUdBQWlHLGNBQWMsbUJBQW1CLGNBQWMsc0JBQXNCLGNBQWMsZ0VBQWdFLGNBQWMsNkNBQTZDLGNBQWMsOEJBQThCLGNBQWMsNkJBQTZCLGNBQWMsK0NBQStDLGNBQWMsZ0JBQWdCLGNBQWMsMkJBQTJCLGNBQWMsOENBQThDLFNBQVMsb0JBQW9CLGdDQUFnQywrQkFBK0IsTUFBTSx5QkFBeUIscUJBQXFCLHFCQUFxQiw0QkFBNEIsb0JBQW9CLHFCQUFxQixxQkFBcUIsNEJBQTRCLG9CQUFvQixxQkFBcUIscUJBQXFCLDRCQUE0QixxQkFBcUIsK0RBQStELHFCQUFxQixvREFBb0QscUJBQXFCLCtGQUErRix3QkFBd0IsNkVBQTZFLGNBQWMsUUFBUSxhQUFhLHdCQUF3Qix3SUFBd0ksZ0JBQWdCLCtEQUErRCxhQUFhLGtCQUFrQixnQ0FBZ0Msb0JBQW9CLHFCQUFxQixvQkFBb0IsZ0JBQWdCLDZCQUE2QiwyQkFBMkIsc0JBQXNCLG9CQUFvQixxQkFBcUIsZUFBZSwwQkFBMEIsbUJBQW1CLG9DQUFvQyx5QkFBeUIsK0JBQStCLHVNQUF1TSxzQkFBc0IseURBQXlELGtCQUFrQixpQ0FBaUMsT0FBTyxpQ0FBaUMsd0JBQXdCLHdFQUF3RSwrRkFBK0Ysa0JBQWtCLGlDQUFpQyxPQUFPLGlDQUFpQyx3QkFBd0Isd0VBQXdFLCtGQUErRixtQkFBbUIsb0NBQW9DLHlCQUF5Qix3QkFBd0Isb0JBQW9CLDRDQUE0QywwQkFBMEIseUJBQXlCLGtCQUFrQixPQUFPLGtEQUFrRCx3QkFBd0IsaUpBQWlKLDRCQUE0QixPQUFPLCtGQUErRixrQ0FBa0MseU5BQXlOLG1CQUFtQixzRkFBc0Ysc0JBQXNCLDhGQUE4RixNQUFNLFdBQVcsNkJBQTZCLCtGQUErRixzQkFBc0IsVUFBVSxrQkFBa0Isa0hBQWtILHdhQUF3YSxrQkFBa0IsMEJBQTBCLGtDQUFrQyxvREFBb0QsdUVBQXVFLG9CQUFvQiw0Q0FBNEMscUJBQXFCLDRDQUE0QyxtQkFBbUIsNENBQTRDLHVCQUF1Qiw0Q0FBNEMscUJBQXFCLDRDQUE0QyxzQkFBc0IsNENBQTRDLGlCQUFpQiw0Q0FBNEMsaUNBQWlDLHFEQUFxRCxzQkFBc0IsMkNBQTJDLHVCQUF1QiwyQ0FBMkMsMEJBQTBCLDJDQUEyQyw0QkFBNEIsMkNBQTJDLGtCQUFrQiwyQ0FBMkMsbUJBQW1CLDRDQUE0QywyQkFBMkIsdUJBQXVCLFNBQVMscUVBQXFFLElBQUksY0FBYyx3QkFBd0Isd0RBQXdELHFCQUFxQixvQkFBb0Isa0JBQWtCLEVBQUUsdUJBQXVCLGdCQUFnQiw2Q0FBNkMseUVBQXlFLFlBQVksNkJBQTZCLGtCQUFrQixvR0FBb0csOEJBQThCLDZCQUE2QixtQ0FBbUMsc0NBQXNDLE1BQU0scUJBQXFCLE1BQU0sc0JBQXNCLFNBQVMsZ0NBQWdDLHVCQUF1QixPQUFPLDhDQUE4QyxZQUFZLFdBQVcsaURBQWlELHlCQUF5QixlQUFlLDBFQUEwRSxlQUFlLG11RkFBbXVGLGdDQUFnQyw4TUFBOE0sT0FBTyxtTUFBbU0sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLDBCQUEwQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsMEJBQTBCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsMEJBQTBCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsS0FBSyxHQUFHLDJEQUEyRCxTQUFTLDZDQUE2QyxPQUFPLGlCQUFpQixRQUFRLGFBQWEsWUFBWSxTQUFTLDBMQUEwTCxpQkFBaUIsUUFBUSxjQUFjLFlBQVksU0FBUywwTEFBMEwsaUJBQWlCLFFBQVEsY0FBYyxZQUFZLFNBQVMsMExBQTBMLGlCQUFpQixRQUFRLGNBQWMsWUFBWSxTQUFTLDBMQUEwTCxpQkFBaUIsUUFBUSxjQUFjLFlBQVksU0FBUywwTEFBMEwsaUJBQWlCLFFBQVEsY0FBYyxZQUFZLFNBQVMsMExBQTBMLGlCQUFpQixRQUFRLGNBQWMsWUFBWSxTQUFTLDBMQUEwTCwwQkFBMEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsaUNBQWlDLFdBQVcseUNBQXlDLDhCQUE4QixnQkFBZ0Isc0RBQXNELHNEQUFzRCxRQUFRLGFBQWEsS0FBSyxrQkFBa0Isa0JBQWtCLFlBQVksYUFBYSxvRUFBb0Usd0NBQXdDLElBQUksYUFBYSxxQkFBcUIsMEJBQTBCLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdDQUF3QyxjQUFjLGFBQWEsMERBQTBELDJEQUEyRCxjQUFjLEtBQUsseUNBQXlDLHlDQUF5QyxVQUFVLHFCQUFxQiwrQ0FBK0Msb0JBQW9CLHFCQUFxQiwwQkFBMEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNENBQTRDLFlBQVksOERBQThELDBFQUEwRSxZQUFZLCtDQUErQyxpQ0FBaUMsWUFBWSx1Q0FBdUMsUUFBUSxxQkFBcUIsMEJBQTBCLGdCQUFnQixrQkFBa0IsMkJBQTJCLDJEQUEyRCxtQkFBbUIsS0FBSywyQkFBMkIsWUFBWSwyQ0FBMkMsb0JBQW9CLDJDQUEyQyxvQkFBb0Isb0RBQW9ELGlDQUFpQyxZQUFZLDRDQUE0QyxNQUFNLHFCQUFxQiwwQkFBMEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLGNBQWMsYUFBYSx3RUFBd0UsZ0RBQWdELHVCQUF1QixRQUFRLFlBQVksV0FBVyxpQkFBaUIsS0FBSyx1Q0FBdUMsZUFBZSxvQkFBb0IseUNBQXlDLFlBQVkseUNBQXlDLGNBQWMsYUFBYSw4RUFBOEUsU0FBUyxVQUFVLFdBQVcsb0JBQW9CLEtBQUssdUNBQXVDLGtCQUFrQixzQkFBc0IseUNBQXlDLGNBQWMsYUFBYSw4RUFBOEUsU0FBUyxVQUFVLFdBQVcsb0JBQW9CLEtBQUssdUNBQXVDLGtCQUFrQixzQkFBc0IseUNBQXlDLGNBQWMsYUFBYSw4RUFBOEUsU0FBUyxVQUFVLFdBQVcsb0JBQW9CLEtBQUssdUNBQXVDLGtCQUFrQixRQUFRLHFCQUFxQiwwQkFBMEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLFlBQVksMENBQTBDLFlBQVksYUFBYSxnRUFBZ0UsWUFBWSxhQUFhLEtBQUssd0NBQXdDLFdBQVcsc0JBQXNCLDBDQUEwQywyQkFBMkIsaUJBQWlCLCtDQUErQyxlQUFlLEtBQUssa0JBQWtCLHFCQUFxQixZQUFZLHdEQUF3RCwyREFBMkQsUUFBUSxxREFBcUQsSUFBSSxLQUFLLHFCQUFxQiwwQkFBMEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIseUNBQXlDLGtCQUFrQixZQUFZLHVDQUF1Qyw4QkFBOEIsaUJBQWlCLCtDQUErQyxrQkFBa0IsaUJBQWlCLG1EQUFtRCxhQUFhLFFBQVEsZUFBZSxLQUFLLGtCQUFrQixrQkFBa0IsWUFBWSxhQUFhLGtFQUFrRSwwQ0FBMEMsWUFBWSxhQUFhLDJCQUEyQixRQUFRLHFCQUFxQixhQUFhLE9BQU8sNkRBQTZELFFBQVEsR0FBRyxLQUFLLHFCQUFxQiwwQkFBMEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsb0NBQW9DLFlBQVksMENBQTBDLG1DQUFtQywwQ0FBMEMsWUFBWSxxREFBcUQsbUJBQW1CLGFBQWEsZ0VBQWdFLFlBQVksYUFBYSxLQUFLLDBDQUEwQyxXQUFXLHNCQUFzQiw4Q0FBOEMsWUFBWSxhQUFhLGdFQUFnRSxTQUFTLHFCQUFxQixXQUFXLGFBQWEsS0FBSywwQ0FBMEMsV0FBVyxZQUFZLGlEQUFpRCxVQUFVLHVEQUF1RCxVQUFVLHdEQUF3RCwwQkFBMEIsOENBQThDLFlBQVksOENBQThDLFlBQVkscURBQXFELGdDQUFnQyx3REFBd0QsWUFBWSwrREFBK0QsdUJBQXVCLG9CQUFvQiwrREFBK0QseUJBQXlCLHNCQUFzQixxREFBcUQsc0NBQXNDLDZDQUE2QyxZQUFZLGdEQUFnRCxvQkFBb0IsK0JBQStCLGdEQUFnRCxvQkFBb0IsbUNBQW1DLDRDQUE0QyxjQUFjLGFBQWEsNEVBQTRFLFNBQVMsVUFBVSxXQUFXLG1CQUFtQixLQUFLLDBDQUEwQyxpQkFBaUIsc0JBQXNCLGFBQWEsNEVBQTRFLFNBQVMsVUFBVSxXQUFXLG1CQUFtQixLQUFLLDBDQUEwQyxpQkFBaUIsc0JBQXNCLGFBQWEsNEVBQTRFLFNBQVMsVUFBVSxXQUFXLG1CQUFtQixLQUFLLDBDQUEwQyxpQkFBaUIsb0JBQW9CLHFEQUFxRCw4QkFBOEIsYUFBYSw4RUFBOEUsU0FBUyxVQUFVLFdBQVcsb0JBQW9CLEtBQUssMENBQTBDLGtCQUFrQixzQkFBc0IsYUFBYSw4RUFBOEUsU0FBUyxVQUFVLFdBQVcsb0JBQW9CLEtBQUssMENBQTBDLGtCQUFrQixzQkFBc0IsYUFBYSw4RUFBOEUsU0FBUyxVQUFVLFdBQVcsb0JBQW9CLEtBQUssMENBQTBDLGtCQUFrQixvQkFBb0IscURBQXFELDhCQUE4QixhQUFhLHdFQUF3RSwwREFBMEQsVUFBVSxXQUFXLGlCQUFpQixLQUFLLDBDQUEwQyxlQUFlLFlBQVkscUJBQXFCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJCQUEyQixnQ0FBZ0MsWUFBWSxpREFBaUQsbUJBQW1CLGFBQWEsZ0VBQWdFLFlBQVksYUFBYSxLQUFLLDBDQUEwQyxXQUFXLHNCQUFzQiwwQ0FBMEMsWUFBWSx5Q0FBeUMsWUFBWSwwQ0FBMEMsWUFBWSxhQUFhLGdFQUFnRSxZQUFZLGFBQWEsS0FBSywwQ0FBMEMsV0FBVyxzQkFBc0IsNENBQTRDLGNBQWMsYUFBYSxnRUFBZ0UsWUFBWSxhQUFhLEtBQUssMENBQTBDLFdBQVcsd0JBQXdCLDRDQUE0QyxZQUFZLHFEQUFxRCx3QkFBd0Isd0JBQXdCLHVDQUF1QyxZQUFZLCtDQUErQyxjQUFjLGFBQWEsd0VBQXdFLFNBQVMsWUFBWSxXQUFXO0FBQzl2K0IsQ0FBQyxLQUFLLDBDQUEwQyxlQUFlLHNCQUFzQiwrQ0FBK0MsY0FBYyxhQUFhLDhFQUE4RSxTQUFTLFVBQVUsV0FBVyxvQkFBb0IsS0FBSywwQ0FBMEMsa0JBQWtCLHNCQUFzQiwrQ0FBK0MsY0FBYyxhQUFhLDhFQUE4RSxTQUFTLFVBQVUsV0FBVyxvQkFBb0IsS0FBSywwQ0FBMEMsa0JBQWtCLHNCQUFzQiwrQ0FBK0MsY0FBYyxhQUFhLDhFQUE4RSxTQUFTLFVBQVUsV0FBVyxvQkFBb0IsS0FBSywwQ0FBMEMsa0JBQWtCLHNCQUFzQiwrQ0FBK0MsY0FBYyxhQUFhLG9FQUFvRSxTQUFTLG1DQUFtQyxXQUFXLGVBQWUsS0FBSywwQ0FBMEMsYUFBYSx3QkFBd0IseUNBQXlDLDZCQUE2QixpQkFBaUIsc0RBQXNELGFBQWEsS0FBSyxrQkFBa0Isa0JBQWtCLEVBQUUsS0FBSyxxQkFBcUIsMEJBQTBCLGdCQUFnQixrQkFBa0IsMkJBQTJCLGdDQUFnQyxZQUFZLGlEQUFpRCxtQkFBbUIsYUFBYSxnRUFBZ0UsWUFBWSxhQUFhLEtBQUssMENBQTBDLFdBQVcsc0JBQXNCLDZDQUE2QyxZQUFZLDBDQUEwQyxZQUFZLDRDQUE0QyxZQUFZLHFEQUFxRCx3QkFBd0Isc0JBQXNCLHlDQUF5QyxZQUFZLDBDQUEwQyxZQUFZLGFBQWEsZ0VBQWdFLFlBQVksYUFBYSxLQUFLLDBDQUEwQyxXQUFXLHNCQUFzQiw0Q0FBNEMsY0FBYyxhQUFhLGdFQUFnRSxZQUFZLGFBQWEsS0FBSywwQ0FBMEMsV0FBVywwQkFBMEIsNkNBQTZDLFlBQVksYUFBYSxrRkFBa0YsMENBQTBDLFlBQVksdUNBQXVDLGNBQWMsYUFBYSx3RUFBd0UsU0FBUyxZQUFZLFdBQVcsaUJBQWlCLEtBQUssMENBQTBDLGVBQWUsd0JBQXdCLGFBQWEsa0ZBQWtGLDBDQUEwQyxZQUFZLHVDQUF1QyxjQUFjLGFBQWEsOEVBQThFLFNBQVMsVUFBVSxXQUFXLG9CQUFvQixLQUFLLDBDQUEwQyxrQkFBa0Isc0JBQXNCLHVDQUF1QyxjQUFjLGFBQWEsOEVBQThFLFNBQVMsVUFBVSxXQUFXLG9CQUFvQixLQUFLLDBDQUEwQyxrQkFBa0Isc0JBQXNCLHVDQUF1QyxjQUFjLGFBQWEsOEVBQThFLFNBQVMsVUFBVSxXQUFXLG9CQUFvQixLQUFLLDBDQUEwQyxrQkFBa0Isc0JBQXNCLHVDQUF1QyxjQUFjLGFBQWEsb0VBQW9FLFNBQVMsbUNBQW1DLFdBQVcsZUFBZSxLQUFLLDBDQUEwQyxhQUFhLHdCQUF3QixhQUFhLGtGQUFrRiwwQ0FBMEMsWUFBWSx1Q0FBdUMsY0FBYyxhQUFhLDRFQUE0RSxTQUFTLFVBQVUsV0FBVyxtQkFBbUIsS0FBSywwQ0FBMEMsaUJBQWlCLHNCQUFzQix1Q0FBdUMsY0FBYyxhQUFhLDRFQUE0RSxTQUFTLFVBQVUsV0FBVyxtQkFBbUIsS0FBSywwQ0FBMEMsaUJBQWlCLHNCQUFzQix1Q0FBdUMsY0FBYyxhQUFhLDRFQUE0RSxTQUFTLFVBQVUsV0FBVyxtQkFBbUIsS0FBSywwQ0FBMEMsaUJBQWlCLHNCQUFzQix1Q0FBdUMsY0FBYyxhQUFhLG9FQUFvRSxTQUFTLG1DQUFtQyxXQUFXLGVBQWUsS0FBSywwQ0FBMEMsYUFBYSxnQ0FBZ0MsZ0RBQWdELG1CQUFtQixZQUFZLHNDQUFzQyxZQUFZLGFBQWEsMkJBQTJCLFFBQVEsb0JBQW9CLEtBQUsseUVBQXlFLGFBQWEsT0FBTyxtSUFBbUksd0JBQXdCLGFBQWEsb0VBQW9FLGtEQUFrRCxrQkFBa0IscUJBQXFCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJCQUEyQixpQ0FBaUMsWUFBWSxrREFBa0QsdUNBQXVDLGtEQUFrRCwwQkFBMEIsb0JBQW9CLGdFQUFnRSwwRUFBMEUsWUFBWSxpREFBaUQsdUJBQXVCLFlBQVkseUNBQXlDLFFBQVEscUJBQXFCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDJCQUEyQiwrQ0FBK0Msb0JBQW9CLEVBQUUscUJBQXFCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLGlCQUFpQixZQUFZLHNDQUFzQyxTQUFTLEVBQUUsK0JBQStCLEdBQUcsRTs7Ozs7Ozs7Ozs7Ozs7O0FDb0IvdFE7OzswQkFFQTs7b0JBR0E7QUFGQTtBQUdBOzs7O2tCQUlBO0FBRkE7O2tCQUtBO0FBRkE7O2tCQUlBO3lDQUNBOzsyQkFFQTt5QkFFQTtBQUhBO0FBTUE7QUFUQTtBQVBBO2dCQWlCQTs7d0NBRUE7dUNBQ0E7QUFFQTtBQUpBO2dDQUtBOzZCQUNBO0FBQ0E7Ozs0QkFFQTt3QkFDQTtBQUNBOztBQUNBOzt1QkFDQTs2QkFDQTs7dUJBRUE7dUNBQ0E7NEJBQ0E7bURBQ0E7O3FDQUVBO2tDQUNBO2lDQUNBO2tEQUNBOytDQUNBO2tEQUNBO21EQUNBO3VDQUlBO0FBWEE7QUFMQTttQ0FpQkE7OzZDQUVBOzJDQUVBO0FBSEE7QUFJQTtxREFDQTt1REFDQTt3QkFDQTt3RUFDQTtxREFDQTs0Q0FDQTtrRkFDQTt3REFDQTsrQ0FDQTtnRUFDQTtnRUFDQTtBQUNBO3VCQUNBOzREQUNBOzREQUNBO0FBQ0E7QUFDQTtxQ0FDQTtxREFDQTt3RUFDQTtBQUNBO0FBRUE7QUFwREE7QUFoQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUlBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7QUFFQTswQkFDQTs7a0JBRUE7bUJBQ0E7cUJBQ0E7NEJBQ0E7cUJBQ0E7a0JBQ0E7OzZCQUVBO3NCQUNBO3NCQUNBO3VCQUNBO3FCQUNBOzBCQUNBOzJCQUNBOzswRkFFQTsyQkFDQTsyRUFDQTswRkFHQTtBQU5BO0FBUkE7c0JBZUE7dUJBRUE7QUF4QkE7QUF5QkE7OztpQkFHQTtBQUZBO1lBR0E7OzhDQUVBO3VCQUNBOzBCQUNBO21CQUNBOzBCQUNBO0FBQ0E7QUFFQTtBQVJBOztBQVdBO0FBRkE7O0FBR0E7O3dEQUNBO21EQUNBO3lFQUNBO2lDQUNBOzhEQUNBO3VCQUNBO29DQUNBO0FBQ0E7QUFDQTtvREFDQTt3RUFDQTs0QkFDQTttQ0FDQTtBQUNBO0FBQ0E7aURBQ0E7a0ZBQ0E7QUFDQTtBQUVBOzs0REFDQTtrREFDQTttREFDQTs0QkFFQSxDQUVBOztzREFDQTtxQ0FDQTtvQ0FDQTtnREFDQTttQkFDQTswQ0FDQTtvREFDQTtBQUNBOzZCQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Z0NBRUE7a0RBQ0E7QUFDQTtnQ0FDQTtxRkFDQTtBQUNBOzRCQUNBO21GQUNBO0FBQ0E7MENBQ0E7dURBQ0E7QUFFQTtBQWJBO2dDQWNBO1lBQ0E7QUFDQTs7OzBDQUVBOzhCQUNBO0FBQ0E7OEJBQ0E7OEJBQ0E7Z0RBQ0E7bUJBQ0E7Z0RBQ0E7QUFDQTtBQUNBOzRDQUNBOztrRUFFQTtpRkFFQTtBQUhBO3VDQUlBOzRCQUNBO21CQUNBO2lDQUNBOzRFQUNBO0FBQ0E7Z0RBQ0E7Z0VBQ0E7NEJBQ0E7K0NBQ0E7OEVBQ0E7dUJBQ0E7dUNBQ0E7QUFDQTtvSkFDQTtzREFDQTs0REFDQTs4REFDQTs4QkFDQTtzRUFDQTs0QkFDQTsrQkFDQTtBQUNBO0FBQ0E7dURBQ0E7OEJBQ0E7eUVBQ0E7QUFDQTs2QkFDQTtnQ0FDQTswQ0FDQTtBQUNBO0FBQ0E7eURBQ0E7OEJBQ0E7eUVBQ0E7QUFDQTs2QkFDQTtnQ0FDQTsyQ0FDQTtBQUNBO0FBQ0E7dURBQ0E7OEJBQ0E7eUVBQ0E7QUFDQTs2QkFDQTsrRUFDQTt5Q0FDQTtBQUNBO3VEQUNBO0FBQ0E7QUFDQTtxREFDQTs4QkFDQTt5RUFDQTtBQUNBOzZCQUNBOzhFQUNBO3lDQUNBO0FBQ0E7c0RBQ0E7QUFDQTtBQUNBO2dEQUNBO3lFQUNBOzhEQUNBO3VDQUNBOzRCQUNBOytCQUNBOzREQUNBO3VFQUNBOzZGQUNBO2dFQUNBO2dEQUNBO0FBQ0E7QUFTQTs7Ozs7Ozs7O0FBQ0E7d0NBQ0E7d0JBQ0E7MkJBQ0E7d0RBQ0E7bUVBQ0E7NENBQ0E7NERBQ0E7NENBQ0E7QUFDQTs4Q0FDQTtpQkFDQTtBQUNBO2tEQUNBO3lEQUNBO0FBQ0E7cUNBQ0E7MEVBQ0E7dUVBQ0E7NERBQ0E7bUJBQ0E7NEZBQ0E7QUFDQTtBQUNBO3VDQUNBOzJFQUNBOytCQUNBOzREQUNBO21CQUNBOzREQUNBO0FBQ0E7QUFFQTtBQXJJQTtBQXRHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SEE7O0FBQ0E7Ozs7QUFHQTs7Ozs7OztBQUVBOzBCQUNBOztrQkFHQTtBQUZBO0FBR0E7Ozs4Q0FFQTt1QkFDQTtrQkFDQTttQkFDQTtrQkFDQTtBQUNBO0FBRUE7QUFSQTs7QUFTQTs7K0NBQ0E7Z0NBQ0E7NENBQ0E7QUFDQTtBQUNBO2dDQUNBO3VCQUNBO0FBQ0E7OzswQ0FFQTs4QkFDQTtBQUNBO0FBQ0Esa0NBQ0E7aURBQ0E7NEVBQ0E7dURBQ0E7QUFDQTtBQUNBLG9DQUNBO2lEQUNBOzhFQUNBO2dGQUNBOzJEQUNBO0FBQ0E7QUFFQTtBQWxCQTtBQXpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO1lBU0E7QUFDQTswQkFDQTs7c0JBRUE7b0JBQ0E7eUJBQ0E7c0JBQ0E7a0JBQ0E7cUJBQ0E7cUJBQ0E7eUJBQ0E7OzZCQUVBO3NCQUNBO3NCQUNBO3VCQUNBO3FCQUNBOzswRkFFQTsyQkFDQTsyRUFDQTswRkFJQTtBQVBBO0FBTkE7QUFUQTtBQXVCQTs7OzRDQUVBOztzQkFHQTt1QkFFQTtBQUhBLGFBREE7c0JBTUE7dUJBRUE7QUFIQTs4REFLQTt1QkFHQTtBQUpBO0FBS0E7Z0NBQ0E7b0VBQ0E7QUFFQTtBQXBCQTtBQXFCQTtBQUNBOztvQkFDQTs2QkFDQTtBQUNBO0FBQ0E7bUNBQ0E7NENBQ0E7QUFDQTt3REFDQTs4Q0FDQTsyREFDQTtxRkFDQTtzRUFDQTtnREFDQTs2QkFDQTs2QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzBEQUNBLHdCQUNBO3NDQUNBOzs4QkFFQTs7NEJBR0E7eUNBSUE7QUFMQSxpQkFEQTtBQUZBO2dDQVNBO0FBQ0EsNEJBQ0E7d0JBQ0E7QUFDQTsrQ0FDQTtrQkFDQTtrQ0FDQTtBQUNBO2lEQUNBOzhCQUNBO0FBQ0E7QUFDQTtnQ0FFQSxDQUNBOzRDQUNBO29CQUNBO2dDQUNBO0FBQ0E7Ozs4Q0FFQTt1QkFDQTsyREFDQTt5RkFDQTtxREFDQTs2REFDQTt3REFDQTtvRkFDQTswREFDQTtrRUFDQTsyREFDQTt3Q0FDQTsrREFDQTtBQUVBOzs0REFDQTt3Q0FDQTtnRUFDQTtBQUNBO2tFQUNBO0FBQ0E7QUFDQTt5REFDQTtBQUNBOztBQUNBOzsyREFDQTtpQ0FDQTtBQUVBOzs0REFDQTtpQ0FDQTtBQUNBO29DQUNBO2lFQUNBO3FDQUNBOztvRUFFQTttRkFDQTs0QkFFQTtBQUpBOytDQUtBO2lHQUNBO3dFQUNBO3lFQUNBO3VHQUNBO3dFQUNBO3lFQUNBO0FBQ0E7Z0RBQ0E7cUVBQ0E7QUFFQTs7O29FQUVBO21GQUNBOzRCQUVBO0FBSkE7cURBS0E7d0dBQ0E7K0VBQ0E7MEVBQ0E7OEdBQ0E7K0VBQ0E7MEVBQ0E7QUFDQTtnREFDQTtzRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO21EQUNBOytCQUNBO0FBQ0E7MENBQ0E7OzBEQUVBO3lFQUVBO0FBSEE7dUNBSUE7OENBQ0E7bUJBQ0E7d0NBQ0E7d0RBQ0E7Z0xBQ0E7cURBQ0E7MkRBQ0E7cUNBQ0E7NkRBQ0E7cUNBQ0E7bUVBQ0E7MkJBQ0E7NkJBQ0E7OERBQ0E7NEJBQ0E7K0JBQ0E7QUFDQTtBQUNBOzhDQUNBO2dFQUNBO3VEQUNBO3VDQUNBOzRCQUNBOytCQUNBOzJEQUNBOytEQUNBO29GQUNBO3dDQUNBOzhDQUNBO3dEQUNBO3dDQUNBO0FBQ0E7QUFDQTtzQ0FDQTt3QkFDQTsyQkFDQTt1REFDQTsyREFDQTtvQ0FDQTtvREFDQTtvQ0FDQTtpQ0FDQTtBQUNBO29EQUNBO3lCQUNBO3dCQUNBO0FBQ0E7bURBQ0E7b0ZBQ0E7aURBQ0E7aUJBQ0E7QUFDQTtrREFDQTtpQkFDQTtBQUNBO3FEQUNBO2tEQUNBO3dCQUNBO2lCQUNBO0FBQ0E7eURBQ0E7d0JBQ0E7QUFDQTswQ0FDQTs7NkJBRUE7c0JBQ0E7c0JBQ0E7dUJBQ0E7cUJBQ0E7OzBGQUVBOzJCQUNBOzJFQUNBOzBGQUdBO0FBTkE7QUFOQTtBQWFBO2tEQUNBO3NCQUNBO0FBQ0E7MERBQ0E7MENBQ0E7QUFDQTswQ0FDQSxPQUNBO3VCQUNBO3dEQUNBO0FBQ0E7QUFFQTs7QUFDQTs7cUVBQ0E7dUJBQ0E7MENBQ0E7bUhBQ0E7aURBQ0E7OzBCQUdBO0FBRkE7bUNBR0E7aUNBQ0E7QUFDQTtBQUNBO2tDQUNBOztzQkFHQTtBQUZBO0FBR0E7eURBQ0E7dUJBQ0E7NkNBQ0E7OzJEQUVBO2lDQUNBOytCQUNBO2lDQUNBO2dEQUNBOzZCQUdBO0FBUkE7O3dEQVNBOztzQ0FFQTtvQ0FDQTtzQ0FDQTtzREFDQTtrQ0FDQTttQ0FFQTtBQVBBOzJEQVFBO3NDQUNBO3lDQUNBOytDQUNBOzBDQUNBOzhEQUNBO0FBQ0E7aURBQ0E7QUFFQTs7NERBQ0E7c0NBQ0E7eUNBQ0E7K0NBQ0E7MENBQ0E7OERBQ0E7QUFDQTtrREFDQTtBQUNBOzJDQUNBO0FBQ0E7MEJBQ0E7QUFFQTs7bUJBRUE7QUFJQTtBQWhQQTtBQS9HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbURBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7OztBQUVBOzs7eUNBR0E7O2lDQUVBOzBCQUNBOzJCQUNBO3lCQUNBOzs7K0JBR0E7K0JBQ0E7K0JBQ0E7K0JBSUE7QUFQQTtBQURBO0FBTEE7QUFlQTtBQWpCQTtrQkFtQkE7QUFwQkE7WUFxQkE7Z0NBQ0E7NENBQ0E7QUFDQTs7OzZDQUVBO3VEQUNBO3lDQUNBO2dEQUNBO0FBQ0E7eUNBQ0E7dURBQ0E7eUNBQ0E7Z0RBQ0E7Z0ZBQ0E7QUFFQTtBQVpBOzBCQWFBOztxQkFFQTs0QkFDQTt3QkFDQTs7c0JBRUE7dUJBQ0E7cUJBQ0E7OzsyQkFHQTsyQkFDQTsyQkFDQTsyQkFLQTtBQVJBO0FBREE7QUFKQTtBQUpBO0FBa0JBOzs7c0NBRUE7K0RBQ0E7QUFDQTtrQ0FDQTsrREFDQTtBQUNBO2dEQUNBO2dEQUNBO0FBRUE7QUFWQTs7QUFhQTtBQUZBOztnQ0FJQTtnREFDQTtBQUNBOzBDQUNBO29EQUNBO0FBQ0E7bURBQ0E7K0JBQ0E7QUFDQTs7QUFDQTs7MkRBQ0E7MERBQ0E7dUNBQ0E7dUJBQ0E7dUNBQ0E7d0NBQ0E7MkRBQ0E7QUFDQTtBQUNBO29DQUNBO2dEQUNBO0FBQ0E7QUFFQTtBQXhCQTtBQTFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBOztBQUNBOztBQUVBOzs7Ozs7OztjQUdBOzt5Q0FFQTs7aUNBRUE7MEJBQ0E7MkJBQ0E7eUJBQ0E7OzhGQUVBOytCQUNBOytFQUNBOzhGQUdBO0FBTkE7QUFMQTtBQWFBO0FBZkE7a0JBZ0JBO2VBQ0E7YUFFQTtBQXJCQTs7aUNBdUJBO2dEQUNBO0FBQ0E7bUNBQ0E7K0JBQ0E7QUFDQTsrQkFDQTs2QkFDQTtBQUNBOzs2Q0FDQTtpQkFDQTtBQUNBO3lDQUNBO2lCQUNBO29JQUNBO0FBRUE7QUFqQkE7MEJBa0JBOztxQkFFQTs0QkFDQTt3QkFDQTs7c0JBRUE7dUJBQ0E7cUJBQ0E7OzsyQkFHQTsyQkFDQTsyQkFDQTsyQkFLQTtBQVJBO0FBREE7QUFKQTtBQUpBO0FBa0JBOzs7c0NBRUE7K0RBQ0E7QUFDQTtrQ0FDQTsrREFDQTtBQUNBO2dEQUNBO2dEQUNBO0FBRUE7QUFWQTs7QUFhQTtBQUZBOztnQ0FJQTt1QkFDQTtBQUNBOzBDQUNBO29EQUNBO0FBQ0E7bURBQ0E7K0JBQ0E7QUFDQTs4Q0FDQTtnRkFDQTs2QkFDQTt1Q0FDQTttQ0FDQTswQ0FDQTtBQUNBOzBDQUNBO3dFQUVBOztxREFDQTttREFFQTs7QUFDQTtnREFDQTs0QkFDQTtBQUVBOztBQUNBO2tEQUNBOzJCQUNBO0FBRUE7O0FBQ0E7dUJBQ0E7QUFFQTs7QUFDQTs0RUFDQTtBQUNBOytCQUNBOzJCQUNBO0FBQ0E7eUNBRUE7O0FBQ0E7b0RBQ0E7b0RBQ0E7NkNBRUE7O0FBQ0E7NkJBQ0E7QUFDQTtxQ0FDQTtBQUNBOztrQ0FFQTtpQ0FFQTtBQUhBO0FBS0E7O3VCQUVBOztBQUNBO3lDQUNBO0FBQ0E7c0NBQ0E7NEJBQ0E7bUNBRUEsUUFDQTs4S0FDQTtzQ0FDQTt1Q0FDQTswQ0FDQTt5REFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBaEZBO0FBM0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBOztBQUNBOzs7O0FBR0E7Ozs7Ozs7QUFFQTswQkFDQTs7Z0VBR0E7QUFGQTtBQUdBOztBQUNBOzt3REFDQTt5R0FDQTsyRUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzZDQUVBO29DQUNBO0FBQ0E7aURBQ0E7c0NBQ0E7QUFDQTswQ0FDQTtvREFDQTtBQUVBO0FBVkE7QUFkQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtQkE7Ozs7Ozs7O2FBSUE7QUFGQTs7QUFLQTtBQUZBOzttRUFJQTswQ0FDQTtzQ0FDQTtBQUNBOzBDQUNBO3VDQUNBO3NDQUNBO0FBRUE7QUFUQTtBQVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7Ozs7Ozs7O2FBSUE7QUFGQTswQkFHQTs7Z0JBR0E7QUFGQTtBQUdBOztZQUNBO2dDQUNBO3VCQUNBO0FBQ0E7Ozt5Q0FFQTs4QkFDQTs4Q0FDQTtBQUVBO0FBTEE7QUFiQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BOzs7Ozs7Ozs7a0JBSUE7eUNBQ0E7dUJBQ0E7QUFFQTtBQUxBOztrQkFPQTt5Q0FDQTt1QkFDQTtBQUdBO0FBTkE7QUFQQTs7QUFnQkE7QUFGQTs7K0NBSUE7dUNBQ0E7QUFDQTsyQ0FDQTtzQ0FDQTtBQUVBO0FBUEE7QUFsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTs7OztJQUVxQkMsWTtBQUNqQiwwQkFBWWxDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsYUFBSzVELEtBQUwsR0FBYSx5QkFBUyxHQUFULENBQWI7QUFDQSxpQ0FBUyxZQUFULEVBQXVCNEQsVUFBVUEsT0FBVixHQUFvQixFQUEzQztBQUNIOzs7OzRCQUVHRCxLLEVBQU87QUFDUCxxQ0FBUyxVQUFULEVBQXFCQSxLQUFyQjtBQUNIOzs7K0JBRU1BLEssRUFBTztBQUNWLHFDQUFTLGFBQVQsRUFBd0JBLEtBQXhCO0FBQ0g7OzsrQkFFTTtBQUNILGlCQUFLLElBQUk0QixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3ZGLEtBQUwsQ0FBV1EsWUFBWCxDQUF3Qm9ELE9BQXhCLENBQWdDNEIsTUFBcEQsRUFBNERELEdBQTVELEVBQWlFO0FBQzdELHFCQUFLdkYsS0FBTCxDQUFXUSxZQUFYLENBQXdCb0QsT0FBeEIsQ0FBZ0MyQixDQUFoQyxFQUFtQ0UsSUFBbkM7QUFDSDtBQUNKOzs7dUNBRWN0RixDLEVBQUdDLEMsRUFBRztBQUNqQixpQkFBSyxJQUFJbUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUt2RixLQUFMLENBQVdRLFlBQVgsQ0FBd0JvRCxPQUF4QixDQUFnQzRCLE1BQXBELEVBQTRERCxHQUE1RCxFQUFpRTtBQUM3RCxxQkFBS3ZGLEtBQUwsQ0FBV1EsWUFBWCxDQUF3Qm9ELE9BQXhCLENBQWdDMkIsQ0FBaEMsRUFBbUNRLFdBQW5DLENBQStDNUYsQ0FBL0MsRUFBa0RDLENBQWxEO0FBQ0g7QUFDSjs7O3dDQUVlRCxDLEVBQUdDLEMsRUFBRztBQUNsQixnQkFBSSxLQUFLSixLQUFMLENBQVdRLFlBQVgsQ0FBd0I4RCxhQUE1QixFQUEyQzs7QUFFdkMscUJBQUssSUFBSWlCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLdkYsS0FBTCxDQUFXUSxZQUFYLENBQXdCOEQsYUFBeEIsQ0FBc0NDLE9BQXRDLENBQThDaUIsTUFBbEUsRUFBMEVELEdBQTFFLEVBQStFO0FBQzNFLHlCQUFLdkYsS0FBTCxDQUFXUSxZQUFYLENBQXdCOEQsYUFBeEIsQ0FBc0NDLE9BQXRDLENBQThDZ0IsQ0FBOUMsRUFBaURRLFdBQWpELENBQTZENUYsQ0FBN0QsRUFBZ0VDLENBQWhFO0FBQ0g7QUFDSjtBQUNKOzs7MENBRWlCRCxDLEVBQUdDLEMsRUFBRztBQUNwQjRGLG9CQUFRQyxHQUFSLENBQVk5RixDQUFaLEVBQWVDLENBQWY7QUFDQSxnQkFBSThGLG1CQUFtQixLQUF2QjtBQUNBLGlCQUFLLElBQUlYLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLdkYsS0FBTCxDQUFXUSxZQUFYLENBQXdCb0QsT0FBeEIsQ0FBZ0M0QixNQUFwRCxFQUE0REQsR0FBNUQsRUFBaUU7QUFDN0QscUJBQUt2RixLQUFMLENBQVdRLFlBQVgsQ0FBd0JvRCxPQUF4QixDQUFnQzJCLENBQWhDLEVBQW1DWSxtQkFBbkMsQ0FBdURoRyxDQUF2RCxFQUEwREMsQ0FBMUQ7QUFDQSxvQkFBSSxLQUFLSixLQUFMLENBQVdRLFlBQVgsQ0FBd0JvRCxPQUF4QixDQUFnQzJCLENBQWhDLEVBQW1DckYsVUFBdkMsRUFBbUQ7QUFDL0NnRyx1Q0FBbUIsSUFBbkI7QUFDSDtBQUNKOztBQUVELGdCQUFJLENBQUNBLGdCQUFELElBQXFCLENBQUN0RCxHQUFHOEMsT0FBN0IsRUFBc0M7QUFDbEMseUNBQVMsa0JBQVQsRUFBNkIsSUFBN0I7QUFDQSxvQkFBSTlDLEdBQUdJLEtBQUgsQ0FBU0MsTUFBYixFQUNJTCxHQUFHSSxLQUFILENBQVNDLE1BQVQsQ0FBZ0JDLEdBQWhCLEdBQXNCQyxZQUF0QixDQUFtQ2lELE9BQW5DO0FBQ1A7QUFDSjs7OzJDQUVrQmpHLEMsRUFBR0MsQyxFQUFHO0FBQ3JCLGdCQUFJaUcscUJBQXFCLEtBQXpCO0FBQ0EsZ0JBQUksS0FBS3JHLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QjhELGFBQTVCLEVBQTJDO0FBQ3ZDLHFCQUFLLElBQUlpQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3ZGLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QjhELGFBQXhCLENBQXNDQyxPQUF0QyxDQUE4Q2lCLE1BQWxFLEVBQTBFRCxHQUExRSxFQUErRTtBQUMzRSx5QkFBS3ZGLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QjhELGFBQXhCLENBQXNDQyxPQUF0QyxDQUE4Q2dCLENBQTlDLEVBQWlEWSxtQkFBakQsQ0FBcUVoRyxDQUFyRSxFQUF3RUMsQ0FBeEU7QUFDQSx3QkFBSSxLQUFLSixLQUFMLENBQVdRLFlBQVgsQ0FBd0I4RCxhQUF4QixDQUFzQ0MsT0FBdEMsQ0FBOENnQixDQUE5QyxFQUFpRHJGLFVBQXJELEVBQWlFO0FBQzdEbUcsNkNBQXFCLElBQXJCO0FBQ0g7QUFDSjs7QUFFRCxvQkFBSSxDQUFDQSxrQkFBTCxFQUF5QjtBQUNyQiw2Q0FBUyxtQkFBVCxFQUE4QixJQUE5QjtBQUNBLHdCQUFJekQsR0FBR0ksS0FBSCxDQUFTQyxNQUFiLEVBQ0lMLEdBQUdJLEtBQUgsQ0FBU0MsTUFBVCxDQUFnQkMsR0FBaEIsR0FBc0JDLFlBQXRCLENBQW1DaUQsT0FBbkM7QUFDUDtBQUNKO0FBQ0o7Ozs7OztrQkFwRWdCTixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGQVEsSzs7Ozs7OztnQ0FDVCxDQUVQOzs7K0JBRU07QUFDSGhCLGNBQUVpQixVQUFGLENBQWEsR0FBYjtBQUNBakIsY0FBRWpELFlBQUYsQ0FBZSxDQUFmO0FBQ0FpRCxjQUFFbEQsTUFBRixDQUFTLFNBQVQ7QUFDQWtELGNBQUUzRCxJQUFGLENBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsR0FBakI7QUFDQTJELGNBQUV4RCxJQUFGLENBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYXdELEVBQUVqRixLQUFGLEdBQVUsQ0FBdkIsRUFBMEJpRixFQUFFaEYsTUFBRixHQUFXLENBQXJDO0FBQ0FnRixjQUFFL0QsUUFBRjtBQUNBK0QsY0FBRWtCLE1BQUY7QUFDSDs7Ozs7O2tCQWJnQkYsSzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQjs7OztBQUNBOzs7Ozs7SUFFcUJHLFE7QUFDakIsc0JBQVk5RixNQUFaLEVBQW9CTCxNQUFwQixFQUE0QjtBQUFBOztBQUN4QixhQUFLTixLQUFMLEdBQWEseUJBQVMsR0FBVCxDQUFiO0FBQ0EsaUNBQVMsbUJBQVQsRUFBOEJXLE1BQTlCO0FBQ0EsaUNBQVMsbUJBQVQsRUFBOEIsRUFBOUI7QUFDQSxpQ0FBUyxtQkFBVCxFQUE4QkwsTUFBOUI7QUFDQSxhQUFLb0csVUFBTCxHQUFrQixDQUFsQjtBQUNIOzs7OytCQUVNO0FBQ0gsZ0JBQUksQ0FBQyxLQUFLMUcsS0FBTCxDQUFXVSxRQUFYLENBQW9CaUcsSUFBekIsRUFBK0I7QUFDM0IseUNBQVMsYUFBVCxFQUF3QixLQUFLQyxpQkFBTCxFQUF4QjtBQUNBLHlDQUFTLGlCQUFULEVBQTRCLENBQTVCO0FBQ0F0QixrQkFBRWpELFlBQUYsQ0FBZSxDQUFmO0FBQ0FpRCxrQkFBRWxELE1BQUYsQ0FBUyxDQUFUO0FBQ0FrRCxrQkFBRTNELElBQUYsQ0FBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWI7QUFDQTJELGtCQUFFOUQsUUFBRixDQUFXLEVBQVg7QUFDQThELGtCQUFFN0QsU0FBRixDQUFZNkQsRUFBRTVELE1BQWQ7QUFDQTRELGtCQUFFdEQsSUFBRixDQUFPLHdCQUFjQyxRQUFkLENBQXVCLEtBQUtqQyxLQUFMLENBQVdpRCxNQUFYLENBQWtCNEQsUUFBekMsQ0FBUCxFQUEyRCxLQUFLN0csS0FBTCxDQUFXVSxRQUFYLENBQW9Cb0csSUFBcEIsR0FBMkIsRUFBdEYsRUFBMEYsS0FBSzlHLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQkMsTUFBcEIsR0FBNkIsRUFBdkgsRUFBMkgsRUFBM0gsRUFBK0gsRUFBL0g7QUFDQTJFLGtCQUFFcEQsU0FBRixDQUFZb0QsRUFBRW5ELE1BQWQ7O0FBRUFtRCxrQkFBRWxELE1BQUYsQ0FBUyxDQUFUO0FBQ0FrRCxrQkFBRWpELFlBQUYsQ0FBZSxDQUFmO0FBQ0FpRCxrQkFBRWhELElBQUYsQ0FBTyxLQUFLdEMsS0FBTCxDQUFXVSxRQUFYLENBQW9CK0MsTUFBM0IsRUFBbUMsS0FBS3pELEtBQUwsQ0FBV1UsUUFBWCxDQUFvQnFHLEtBQXZELEVBQThELEtBQUsvRyxLQUFMLENBQVdVLFFBQVgsQ0FBb0JMLEtBQWxGLEVBQXlGLEtBQUtMLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQnFHLEtBQTdHO0FBQ0EscUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxLQUFLLEtBQUtoSCxLQUFMLENBQVdVLFFBQVgsQ0FBb0JMLEtBQXBCLEdBQTRCLEtBQUtMLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjhCLFNBQXBCLEdBQWdDLEtBQUt4QyxLQUFMLENBQVdVLFFBQVgsQ0FBb0I4QyxXQUFoRixHQUE4RixFQUFuSCxFQUF1SHdELEtBQUssS0FBS2hILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQnVHLFFBQWhKLEVBQTBKO0FBQ3RKLHdCQUFJOUcsSUFBSTZHLElBQUksS0FBS2hILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQitDLE1BQWhDO0FBQ0Esd0JBQUl5RCxPQUFPL0csSUFBSSxLQUFLSCxLQUFMLENBQVdVLFFBQVgsQ0FBb0I4QixTQUFwQixHQUFnQyxLQUFLeEMsS0FBTCxDQUFXVSxRQUFYLENBQW9COEMsV0FBbkU7O0FBRUEsd0JBQUl3RCxLQUFLLENBQVQsRUFBWTtBQUNSLDZCQUFLRyxvQkFBTCxDQUEwQixLQUFLbkgsS0FBTCxDQUFXVSxRQUFYLENBQW9COEIsU0FBOUMsRUFBeURyQyxDQUF6RDtBQUNBLDZCQUFLaUgsY0FBTCxDQUFvQmpILENBQXBCO0FBQ0gscUJBSEQsTUFHTyxJQUFJNkcsS0FBSyxLQUFLaEgsS0FBTCxDQUFXVSxRQUFYLENBQW9CdUcsUUFBcEIsR0FBK0IsQ0FBcEMsS0FBMEMsQ0FBOUMsRUFBaUQ7QUFDcEQsNEJBQUlDLFFBQVEsRUFBWixFQUFnQjtBQUNaLGlDQUFLRyxlQUFMLENBQXFCTCxDQUFyQixFQUF3QkUsSUFBeEI7QUFDQSxpQ0FBS0UsY0FBTCxDQUFvQkYsSUFBcEI7QUFDSDtBQUNKLHFCQUxNLE1BS0E7QUFDSCw0QkFBSUEsUUFBUSxFQUFaLEVBQWdCO0FBQ1osZ0NBQUksS0FBS2xILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjRHLG1CQUF4QixFQUE2QztBQUN6QyxxQ0FBS0MscUJBQUwsQ0FBMkJQLENBQTNCLEVBQThCRSxJQUE5QjtBQUNIO0FBQ0QsaUNBQUtNLG9CQUFMLENBQTBCTixJQUExQjtBQUNIO0FBQ0o7O0FBR0Qsd0JBQUksS0FBS2xILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQitHLFdBQXhCLEVBQXFDO0FBQ2pDLDZCQUFLRixxQkFBTCxDQUEyQlAsQ0FBM0IsRUFBOEJFLElBQTlCO0FBQ0EsNkJBQUtRLGNBQUwsQ0FBb0J2SCxDQUFwQjtBQUNIO0FBQ0o7QUFDRG1GLGtCQUFFbEQsTUFBRixDQUFTLEtBQVQ7QUFDQWtELGtCQUFFakQsWUFBRixDQUFlLENBQWY7QUFDQWlELGtCQUFFaEQsSUFBRixDQUFPLEtBQUt0QyxLQUFMLENBQVdVLFFBQVgsQ0FBb0JvRyxJQUEzQixFQUFpQyxLQUFLOUcsS0FBTCxDQUFXVSxRQUFYLENBQW9CQyxNQUFwQixHQUE2QixFQUE5RCxFQUFrRSxLQUFLWCxLQUFMLENBQVdVLFFBQVgsQ0FBb0JvRyxJQUF0RixFQUE0RixLQUFLOUcsS0FBTCxDQUFXVSxRQUFYLENBQW9CcUcsS0FBaEg7QUFDQXpCLGtCQUFFaEQsSUFBRixDQUFPLEtBQUt0QyxLQUFMLENBQVdVLFFBQVgsQ0FBb0JvRyxJQUEzQixFQUFpQyxLQUFLOUcsS0FBTCxDQUFXVSxRQUFYLENBQW9CcUcsS0FBckQsRUFBNEQsS0FBSy9HLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQm9HLElBQWhGLEVBQXNGLEtBQUs5RyxLQUFMLENBQVdVLFFBQVgsQ0FBb0I2QixJQUExRztBQUNIO0FBQ0o7OztvQ0FFVztBQUNSLGdCQUFJLENBQUMsS0FBS3ZDLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQmlHLElBQXpCLEVBQStCO0FBQzNCLG9CQUFJckIsRUFBRXFDLE1BQUYsSUFBWSxFQUFaLElBQWtCckMsRUFBRXFDLE1BQUYsSUFBWSxLQUFLM0gsS0FBTCxDQUFXNEgsTUFBWCxDQUFrQnZILEtBQWxCLEdBQTBCLEVBQXhELElBQThEaUYsRUFBRXVDLE1BQUYsSUFBWSxLQUFLN0gsS0FBTCxDQUFXVSxRQUFYLENBQW9CQyxNQUE5RixJQUF3RzJFLEVBQUV1QyxNQUFGLElBQVksS0FBSzdILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjZCLElBQTVJLEVBQWtKO0FBQzlJK0Msc0JBQUV3QyxNQUFGLENBQVN4QyxFQUFFeUMsSUFBWDtBQUNBLDZDQUFTLHNCQUFULEVBQWlDLElBQWpDO0FBQ0gsaUJBSEQsTUFHTztBQUNIekMsc0JBQUV3QyxNQUFGLENBQVN4QyxFQUFFMEMsS0FBWDtBQUNBLDZDQUFTLHNCQUFULEVBQWlDLEtBQWpDO0FBQ0g7QUFDSjtBQUNKOzs7K0JBRU07QUFDSCxnQkFBSSxDQUFDLEtBQUtoSSxLQUFMLENBQVdVLFFBQVgsQ0FBb0JpRyxJQUF6QixFQUErQjs7QUFFM0Isb0JBQUlELGFBQWNwQixFQUFFMkMsT0FBRixHQUFZM0MsRUFBRXFDLE1BQWhDO0FBQ0Esb0JBQUksS0FBS2pCLFVBQUwsSUFBbUJBLFVBQXZCLEVBQW1DO0FBQy9CLHdCQUFJN0csUUFBUSxLQUFLRyxLQUFMLENBQVdVLFFBQVgsQ0FBb0I4QixTQUFwQixHQUFpQ2tFLFVBQUQsR0FBZSxLQUFLMUcsS0FBTCxDQUFXVSxRQUFYLENBQW9COEMsV0FBL0U7QUFDQSx3QkFBSTNELFFBQVEsQ0FBWixFQUFlO0FBQ1gsaURBQVMsc0JBQVQsRUFBaUMsQ0FBakM7QUFDSCxxQkFGRCxNQUVPO0FBQ0gsaURBQVMsc0JBQVQsRUFBaUN4QyxLQUFLQyxLQUFMLENBQVd1QyxLQUFYLENBQWpDO0FBQ0g7QUFDRCx5QkFBSzZHLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7QUFDSjtBQUNKOzs7dUNBRWN2RyxDLEVBQUc7QUFDZCxpQkFBSyxJQUFJb0YsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUt2RixLQUFMLENBQVdVLFFBQVgsQ0FBb0J1RyxRQUF4QyxFQUFrRDFCLEtBQUssS0FBS3ZGLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQnVHLFFBQXBCLEdBQStCLEVBQXRGLEVBQTBGO0FBQ3RGLG9CQUFLOUcsSUFBSW9GLENBQUwsR0FBVSxLQUFLdkYsS0FBTCxDQUFXVSxRQUFYLENBQW9CTCxLQUE5QixJQUF1Q2tGLENBQTNDLEVBQThDO0FBQzFDRCxzQkFBRWxELE1BQUYsQ0FBUyxDQUFUO0FBQ0FrRCxzQkFBRWpELFlBQUYsQ0FBZSxDQUFmO0FBQ0FpRCxzQkFBRWhELElBQUYsQ0FBT25DLElBQUlvRixDQUFYLEVBQWMsS0FBS3ZGLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQndILFFBQXBCLEdBQStCLENBQTdDLEVBQWdEL0gsSUFBSW9GLENBQXBELEVBQXVELEtBQUt2RixLQUFMLENBQVdVLFFBQVgsQ0FBb0JxRyxLQUEzRTtBQUNBekIsc0JBQUVsRCxNQUFGLENBQVMsR0FBVDtBQUNBa0Qsc0JBQUVqRCxZQUFGLENBQWUsQ0FBZjtBQUNBaUQsc0JBQUVoRCxJQUFGLENBQU9uQyxJQUFJb0YsQ0FBWCxFQUFjLEtBQUt2RixLQUFMLENBQVdVLFFBQVgsQ0FBb0J3SCxRQUFsQyxFQUE0Qy9ILElBQUlvRixDQUFoRCxFQUFtRCxLQUFLdkYsS0FBTCxDQUFXVSxRQUFYLENBQW9CNkIsSUFBdkU7QUFDSDtBQUNKO0FBQ0QsbUJBQU9nRCxDQUFQO0FBQ0g7Ozs2Q0FFb0JwRixDLEVBQUc7QUFDcEJtRixjQUFFbEQsTUFBRixDQUFTLENBQVQ7QUFDQWtELGNBQUVqRCxZQUFGLENBQWUsQ0FBZjtBQUNBaUQsY0FBRWhELElBQUYsQ0FBT25DLENBQVAsRUFBVSxLQUFLSCxLQUFMLENBQVdVLFFBQVgsQ0FBb0J3SCxRQUE5QixFQUF3Qy9ILENBQXhDLEVBQTJDLEtBQUtILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQnFHLEtBQS9EO0FBQ0F6QixjQUFFbEQsTUFBRixDQUFTLEdBQVQ7QUFDQWtELGNBQUVqRCxZQUFGLENBQWUsQ0FBZjtBQUNBaUQsY0FBRWhELElBQUYsQ0FBT25DLENBQVAsRUFBVSxLQUFLSCxLQUFMLENBQVdVLFFBQVgsQ0FBb0JxRyxLQUE5QixFQUFxQzVHLENBQXJDLEVBQXdDLEtBQUtILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjZCLElBQTVEO0FBQ0g7Ozs4Q0FFcUJ5RSxDLEVBQUc3RyxDLEVBQUc7QUFDeEJtRixjQUFFbEQsTUFBRixDQUFTLEdBQVQ7QUFDQWtELGNBQUVqRCxZQUFGLENBQWUsQ0FBZjtBQUNBaUQsY0FBRTlELFFBQUYsQ0FBVyxFQUFYO0FBQ0E4RCxjQUFFN0QsU0FBRixDQUFZNkQsRUFBRTVELE1BQWQ7QUFDQTRELGNBQUV0RCxJQUFGLENBQU8sd0JBQWNtRyxJQUFkLENBQW1CbkIsSUFBSSxLQUFLaEgsS0FBTCxDQUFXVSxRQUFYLENBQW9COEMsV0FBM0MsSUFBMEQsSUFBakUsRUFBdUVyRCxJQUFJLEVBQTNFLEVBQStFLEtBQUtILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQndILFFBQXBCLEdBQStCLEVBQTlHLEVBQWtILEVBQWxILEVBQXNILEVBQXRIO0FBQ0E1QyxjQUFFcEQsU0FBRixDQUFZb0QsRUFBRW5ELE1BQWQ7QUFDSDs7O3VDQUVjaEMsQyxFQUFHO0FBQ2RtRixjQUFFbEQsTUFBRixDQUFTLENBQVQ7QUFDQWtELGNBQUVqRCxZQUFGLENBQWUsQ0FBZjtBQUNBaUQsY0FBRWhELElBQUYsQ0FBT25DLENBQVAsRUFBVSxLQUFLSCxLQUFMLENBQVdVLFFBQVgsQ0FBb0JDLE1BQXBCLEdBQTZCLEVBQXZDLEVBQTJDUixDQUEzQyxFQUE4QyxLQUFLSCxLQUFMLENBQVdVLFFBQVgsQ0FBb0JxRyxLQUFsRTtBQUNBekIsY0FBRWxELE1BQUYsQ0FBUyxHQUFUO0FBQ0FrRCxjQUFFakQsWUFBRixDQUFlLENBQWY7QUFDQWlELGNBQUVoRCxJQUFGLENBQU9uQyxDQUFQLEVBQVUsS0FBS0gsS0FBTCxDQUFXVSxRQUFYLENBQW9CcUcsS0FBOUIsRUFBcUM1RyxDQUFyQyxFQUF3QyxLQUFLSCxLQUFMLENBQVdVLFFBQVgsQ0FBb0I2QixJQUE1RDtBQUNIOzs7d0NBRWV5RSxDLEVBQUc3RyxDLEVBQUc7QUFDbEJtRixjQUFFakQsWUFBRixDQUFlLENBQWY7QUFDQWlELGNBQUU5RCxRQUFGLENBQVcsRUFBWDtBQUNBOEQsY0FBRTdELFNBQUYsQ0FBWTZELEVBQUU1RCxNQUFkO0FBQ0E0RCxjQUFFdEQsSUFBRixDQUFPLHdCQUFjQyxRQUFkLENBQXVCNUUsS0FBSytLLEtBQUwsQ0FBV3BCLElBQUksS0FBS2hILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjhDLFdBQW5DLENBQXZCLENBQVAsRUFBZ0ZyRCxJQUFJLEVBQXBGLEVBQXdGLEtBQUtILEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjJILFFBQTVHLEVBQXNILEVBQXRILEVBQTBILEVBQTFIO0FBQ0EvQyxjQUFFcEQsU0FBRixDQUFZb0QsRUFBRW5ELE1BQWQ7QUFDSDs7OzZDQUVvQjZFLEMsRUFBRzdHLEMsRUFBRztBQUN2Qm1GLGNBQUVqRCxZQUFGLENBQWUsQ0FBZjtBQUNBaUQsY0FBRTlELFFBQUYsQ0FBVyxFQUFYO0FBQ0E4RCxjQUFFN0QsU0FBRixDQUFZNkQsRUFBRTVELE1BQWQ7QUFDQTRELGNBQUV0RCxJQUFGLENBQU8sd0JBQWNDLFFBQWQsQ0FBdUIrRSxDQUF2QixDQUFQLEVBQWtDN0csSUFBSSxFQUF0QyxFQUEwQyxLQUFLSCxLQUFMLENBQVdVLFFBQVgsQ0FBb0IySCxRQUE5RCxFQUF3RSxFQUF4RSxFQUE0RSxFQUE1RTtBQUNBL0MsY0FBRXBELFNBQUYsQ0FBWW9ELEVBQUVuRCxNQUFkO0FBQ0g7Ozs0Q0FFbUI7QUFDaEIsZ0JBQUk1RSxVQUFVLENBQUUsS0FBS3lDLEtBQUwsQ0FBV2lELE1BQVgsQ0FBa0I0RCxRQUFsQixHQUE2QixFQUEvQixJQUFxQyxFQUFuRDtBQUNBLG1CQUFPeEosS0FBS0MsS0FBTCxDQUFZLEtBQUswQyxLQUFMLENBQVc0SCxNQUFYLENBQWtCdkgsS0FBbEIsR0FBMEI5QyxPQUEzQixHQUFzQyxDQUFqRCxJQUFzRCxLQUFLeUMsS0FBTCxDQUFXVSxRQUFYLENBQW9CNEgsVUFBakY7QUFDSDs7O3VDQUVjO0FBQ1gsbUJBQU8sS0FBS3RJLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjhCLFNBQTNCO0FBQ0g7Ozs7OztrQkF0SmdCaUUsUTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7SUFFcUI4QixlO0FBQ2pCLCtCQUFjO0FBQUE7O0FBQ1YsYUFBS3ZJLEtBQUwsR0FBYSx5QkFBUyxHQUFULENBQWI7QUFDSDs7OzsrQkFFTTtBQUNILGdCQUFJd0ksV0FBVyxDQUFDLEtBQUt4SSxLQUFMLENBQVdpRCxNQUFYLENBQWtCNkIsV0FBbEIsR0FBZ0MsS0FBSzlFLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQjhCLFNBQXJELElBQWtFLEtBQUt4QyxLQUFMLENBQVdVLFFBQVgsQ0FBb0I4QyxXQUF0RixHQUFvRyxFQUFuSDtBQUNBZ0YsdUJBQVdBLFlBQVksRUFBWixHQUFpQkEsUUFBakIsR0FBNEIsRUFBdkM7QUFDQSxnQkFBSyxLQUFLeEksS0FBTCxDQUFXaUQsTUFBWCxDQUFrQjZCLFdBQWxCLEdBQWdDLEtBQUs5RSxLQUFMLENBQVdVLFFBQVgsQ0FBb0I4QixTQUFyRCxHQUFrRSxDQUF0RSxFQUF5RTtBQUNyRThDLGtCQUFFbEQsTUFBRixDQUFTLE1BQVQ7QUFDQWtELGtCQUFFakQsWUFBRixDQUFlLENBQWY7QUFDQWlELGtCQUFFaEQsSUFBRixDQUFPa0csUUFBUCxFQUFpQixLQUFLeEksS0FBTCxDQUFXVSxRQUFYLENBQW9CQyxNQUFwQixHQUE2QixFQUE5QyxFQUFrRDZILFFBQWxELEVBQTRELEtBQUt4SSxLQUFMLENBQVdVLFFBQVgsQ0FBb0JDLE1BQXBCLEdBQTZCLEVBQXpGO0FBQ0EyRSxrQkFBRWhELElBQUYsQ0FBT2tHLFFBQVAsRUFBaUIsS0FBS3hJLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQkMsTUFBcEIsR0FBNkIsRUFBOUMsRUFBa0Q2SCxRQUFsRCxFQUE0RCxLQUFLeEksS0FBTCxDQUFXVSxRQUFYLENBQW9CNkIsSUFBaEY7QUFDQStDLGtCQUFFakQsWUFBRixDQUFlLENBQWY7QUFDQWlELGtCQUFFOUQsUUFBRixDQUFXLEVBQVg7QUFDQThELGtCQUFFN0QsU0FBRixDQUFZNkQsRUFBRTVELE1BQWQ7QUFDQTRELGtCQUFFdEQsSUFBRixDQUFPLHdCQUFjQyxRQUFkLENBQXVCNUUsS0FBS0MsS0FBTCxDQUFXLEtBQUswQyxLQUFMLENBQVdpRCxNQUFYLENBQWtCNkIsV0FBN0IsQ0FBdkIsQ0FBUCxFQUEwRTBELFdBQVcsRUFBckYsRUFBeUYsS0FBS3hJLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQkMsTUFBcEIsR0FBNkIsRUFBdEgsRUFBMEgsRUFBMUgsRUFBOEgsRUFBOUg7QUFDQTJFLGtCQUFFcEQsU0FBRixDQUFZb0QsRUFBRW5ELE1BQWQ7QUFDSDtBQUNKOzs7NkJBRUloQyxDLEVBQUdDLEMsRUFBRyxDQUVWOzs7Ozs7a0JBdkJnQm1JLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0hBRSxjOzs7Ozs7O2dDQUNULENBRVA7OzsrQkFFTTtBQUNIaEksc0JBQVU4RixVQUFWLENBQXFCLEdBQXJCO0FBQ0E5RixzQkFBVTRCLFlBQVYsQ0FBdUIsQ0FBdkI7QUFDQTVCLHNCQUFVMkIsTUFBVixDQUFpQixTQUFqQjtBQUNBM0Isc0JBQVVrQixJQUFWLENBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixHQUF6QjtBQUNBbEIsc0JBQVVxQixJQUFWLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQnJCLFVBQVVKLEtBQVYsR0FBa0IsQ0FBdkMsRUFBMENJLFVBQVVILE1BQVYsR0FBbUIsQ0FBN0Q7QUFDQUcsc0JBQVVjLFFBQVY7QUFDQWQsc0JBQVUrRixNQUFWOztBQUVBL0Ysc0JBQVV1RCxJQUFWO0FBQ0F2RCxzQkFBVWlJLFNBQVYsQ0FBb0IsQ0FBcEIsRUFBdUIsRUFBdkI7QUFDQWpJLHNCQUFVMkIsTUFBVixDQUFpQixTQUFqQjtBQUNBM0Isc0JBQVU0QixZQUFWLENBQXVCLENBQXZCO0FBQ0E1QixzQkFBVXFCLElBQVYsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLEdBQXJCLEVBQTBCLEVBQTFCO0FBQ0FyQixzQkFBVTZCLElBQVYsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCN0IsVUFBVUosS0FBL0IsRUFBc0MsQ0FBdEM7QUFDQUksc0JBQVU2QixJQUFWLENBQWUsQ0FBZixFQUFrQixFQUFsQixFQUFzQjdCLFVBQVVKLEtBQWhDLEVBQXVDLEVBQXZDO0FBQ0FJLHNCQUFVa0IsSUFBVixDQUFlLE9BQWY7QUFDQWxCLHNCQUFVZSxRQUFWLENBQW1CLEVBQW5CO0FBQ0FmLHNCQUFVZ0IsU0FBVixDQUFvQmhCLFVBQVVpQixNQUE5QjtBQUNBakIsc0JBQVV5QixTQUFWLENBQW9CekIsVUFBVTBCLE1BQTlCO0FBQ0ExQixzQkFBVXVCLElBQVYsQ0FBZSxjQUFmLEVBQStCLENBQS9CLEVBQWtDLEVBQWxDLEVBQXNDLEdBQXRDLEVBQTJDLEVBQTNDO0FBQ0F2QixzQkFBVWtJLEdBQVY7O0FBRUFsSSxzQkFBVXVELElBQVY7QUFDQXZELHNCQUFVaUksU0FBVixDQUFvQixDQUFwQixFQUF1QixHQUF2QjtBQUNBakksc0JBQVUyQixNQUFWLENBQWlCLFNBQWpCO0FBQ0EzQixzQkFBVTRCLFlBQVYsQ0FBdUIsQ0FBdkI7QUFDQTVCLHNCQUFVcUIsSUFBVixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsR0FBckIsRUFBMEIsRUFBMUI7QUFDQXJCLHNCQUFVNkIsSUFBVixDQUFlLENBQWYsRUFBa0IsRUFBbEIsRUFBc0I3QixVQUFVSixLQUFoQyxFQUF1QyxFQUF2QztBQUNBSSxzQkFBVWtCLElBQVYsQ0FBZSxPQUFmO0FBQ0FsQixzQkFBVWUsUUFBVixDQUFtQixFQUFuQjtBQUNBZixzQkFBVWdCLFNBQVYsQ0FBb0JoQixVQUFVaUIsTUFBOUI7QUFDQWpCLHNCQUFVeUIsU0FBVixDQUFvQnpCLFVBQVUwQixNQUE5QjtBQUNBMUIsc0JBQVV1QixJQUFWLENBQWUsZUFBZixFQUFnQyxDQUFoQyxFQUFtQyxFQUFuQyxFQUF1QyxHQUF2QyxFQUE0QyxFQUE1QztBQUNBdkIsc0JBQVVrSSxHQUFWO0FBQ0g7Ozs7OztrQkF4Q2dCRixjOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCOzs7O0FBQ0E7Ozs7OztJQUVxQkcsaUI7QUFDakIsK0JBQVlqSSxNQUFaLEVBQW9CTCxNQUFwQixFQUE0QjtBQUFBOztBQUN4QixhQUFLTixLQUFMLEdBQWEseUJBQVMsR0FBVCxDQUFiO0FBQ0EsaUNBQVMsb0JBQVQsRUFBK0JXLE1BQS9CO0FBQ0EsaUNBQVMsb0JBQVQsRUFBK0IsR0FBL0I7QUFDQSxpQ0FBUyxvQkFBVCxFQUErQkwsTUFBL0I7QUFDQSxhQUFLb0csVUFBTCxHQUFrQixDQUFsQjtBQUNIOzs7OytCQUVNO0FBQ0gsZ0JBQUlPLFdBQVcsS0FBS0wsaUJBQUwsRUFBZjtBQUNBLGdCQUFJSyxXQUFXLENBQWYsRUFBa0I7QUFDZCx5Q0FBUyxzQkFBVCxFQUFpQ0EsUUFBakM7QUFDQSx5Q0FBUyxrQkFBVCxFQUE2QixDQUFDLEtBQUtqSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0I4RCxhQUF4QixDQUFzQ3hFLEdBQXRDLEdBQTRDLEtBQUtFLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QjhELGFBQXhCLENBQXNDekUsS0FBbkYsSUFBNEYsS0FBS0csS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkM4QyxXQUF2SSxHQUFxSixLQUFLeEQsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkMrQyxNQUE3TjtBQUNBLHlDQUFTLHVCQUFULEVBQWtDLEtBQUt6RCxLQUFMLENBQVdRLFlBQVgsQ0FBd0I4RCxhQUF4QixDQUFzQ3pFLEtBQXhFO0FBQ0FZLDBCQUFVNEIsWUFBVixDQUF1QixDQUF2QjtBQUNBNUIsMEJBQVUyQixNQUFWLENBQWlCLENBQWpCO0FBQ0EzQiwwQkFBVWtCLElBQVYsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCO0FBQ0FsQiwwQkFBVWUsUUFBVixDQUFtQixFQUFuQjtBQUNBZiwwQkFBVWdCLFNBQVYsQ0FBb0I2RCxFQUFFNUQsTUFBdEI7QUFDQWpCLDBCQUFVdUIsSUFBVixDQUFlLHdCQUFjQyxRQUFkLENBQXVCLEtBQUtqQyxLQUFMLENBQVdRLFlBQVgsQ0FBd0I4RCxhQUF4QixDQUFzQ3hFLEdBQTdELENBQWYsRUFBa0YsS0FBS0UsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNvRyxJQUEzQyxHQUFrRCxFQUFwSSxFQUF3SSxLQUFLOUcsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNDLE1BQTNDLEdBQW9ELEVBQTVMLEVBQWdNLEVBQWhNLEVBQW9NLEVBQXBNO0FBQ0FGLDBCQUFVeUIsU0FBVixDQUFvQm9ELEVBQUVuRCxNQUF0Qjs7QUFFQTFCLDBCQUFVMkIsTUFBVixDQUFpQixDQUFqQjtBQUNBM0IsMEJBQVU0QixZQUFWLENBQXVCLENBQXZCO0FBQ0E1QiwwQkFBVTZCLElBQVYsQ0FBZSxLQUFLdEMsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkMrQyxNQUExRCxFQUFrRSxLQUFLekQsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNxRyxLQUE3RyxFQUFvSCxLQUFLL0csS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNMLEtBQS9KLEVBQXNLLEtBQUtMLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDcUcsS0FBak47QUFDQSxxQkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLEtBQUssS0FBS2hILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDTCxLQUEzQyxHQUFtRCxLQUFLTCxLQUFMLENBQVdRLFlBQVgsQ0FBd0I4RCxhQUF4QixDQUFzQ3pFLEtBQXRDLEdBQThDLEtBQUtHLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEMsV0FBNUksR0FBMEosRUFBL0ssRUFBbUx3RCxLQUFLLEtBQUtoSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ3VHLFFBQW5PLEVBQTZPO0FBQ3pPLHdCQUFJOUcsSUFBSTZHLElBQUksS0FBS2hILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDK0MsTUFBdkQ7QUFDQSx3QkFBSXlELE9BQU8vRyxJQUFJLEtBQUtILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEIsU0FBM0MsR0FBdUQsS0FBS3hDLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEMsV0FBakg7O0FBRUEsd0JBQUl3RCxLQUFLLENBQVQsRUFBWTtBQUNSLDZCQUFLNkIsY0FBTCxDQUFvQixLQUFLN0ksS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkM4QixTQUEvRCxFQUEwRXJDLENBQTFFO0FBQ0EsNkJBQUtpSCxjQUFMLENBQW9CakgsQ0FBcEI7QUFDSCxxQkFIRCxNQUdPLElBQUk2RyxLQUFLLEtBQUtoSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ3VHLFFBQTNDLEdBQXNELENBQTNELEtBQWlFLENBQXJFLEVBQXdFO0FBQzNFLDRCQUFJQyxRQUFRLEdBQVosRUFBaUI7QUFDYixpQ0FBS0csZUFBTCxDQUFxQkwsQ0FBckIsRUFBd0JFLElBQXhCO0FBQ0EsaUNBQUtFLGNBQUwsQ0FBb0JGLElBQXBCO0FBQ0g7QUFDSixxQkFMTSxNQUtBO0FBQ0gsNEJBQUlBLFFBQVEsR0FBWixFQUFpQjtBQUNiLGdDQUFJLEtBQUtsSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQzRHLG1CQUEvQyxFQUFvRTtBQUNoRSxxQ0FBS0MscUJBQUwsQ0FBMkJQLENBQTNCLEVBQThCRSxJQUE5QjtBQUNIO0FBQ0QsaUNBQUtNLG9CQUFMLENBQTBCTixJQUExQjtBQUNIO0FBQ0o7O0FBR0Qsd0JBQUksS0FBS2xILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDK0csV0FBL0MsRUFBNEQ7QUFDeEQsNkJBQUtGLHFCQUFMLENBQTJCUCxDQUEzQixFQUE4QkUsSUFBOUI7QUFDQSw2QkFBS1EsY0FBTCxDQUFvQnZILENBQXBCO0FBQ0g7QUFDSjtBQUNETSwwQkFBVTJCLE1BQVYsQ0FBaUIsS0FBakI7QUFDQTNCLDBCQUFVNEIsWUFBVixDQUF1QixDQUF2QjtBQUNBNUIsMEJBQVU2QixJQUFWLENBQWUsS0FBS3RDLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDb0csSUFBMUQsRUFBZ0UsS0FBSzlHLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDQyxNQUEzQyxHQUFvRCxFQUFwSCxFQUF3SCxLQUFLWCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ29HLElBQW5LLEVBQXlLLEtBQUs5RyxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ3FHLEtBQXBOO0FBQ0F0RywwQkFBVTZCLElBQVYsQ0FBZSxLQUFLdEMsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNvRyxJQUExRCxFQUFnRSxLQUFLOUcsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNxRyxLQUEzRyxFQUFrSCxLQUFLL0csS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNvRyxJQUE3SixFQUFtSyxLQUFLOUcsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkM2QixJQUE5TTtBQUVIO0FBQ0o7OztvQ0FFVztBQUNSLGdCQUFJLENBQUMsS0FBS3ZDLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDaUcsSUFBaEQsRUFBc0Q7QUFDbEQsb0JBQUlsRyxVQUFVa0gsTUFBVixJQUFvQixFQUFwQixJQUEwQmxILFVBQVVrSCxNQUFWLElBQW9CLEtBQUszSCxLQUFMLENBQVc0SCxNQUFYLENBQWtCdkgsS0FBbEIsR0FBMEIsRUFBeEUsSUFBOEVJLFVBQVVvSCxNQUFWLElBQW9CLEtBQUs3SCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ0MsTUFBN0ksSUFBdUpGLFVBQVVvSCxNQUFWLElBQW9CLEtBQUs3SCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQzZCLElBQTFOLEVBQWdPO0FBQzVOOUIsOEJBQVVxSCxNQUFWLENBQWlCckgsVUFBVXNILElBQTNCO0FBQ0E7QUFDSCxpQkFIRCxNQUdPO0FBQ0h0SCw4QkFBVXFILE1BQVYsQ0FBaUJySCxVQUFVdUgsS0FBM0I7QUFDQTtBQUNIO0FBQ0o7QUFDSjs7OytCQUVNO0FBQ0gsZ0JBQUksQ0FBQyxLQUFLaEksS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNpRyxJQUFoRCxFQUFzRDs7QUFFbEQsb0JBQUlELGFBQWNqRyxVQUFVd0gsT0FBVixHQUFvQnhILFVBQVVrSCxNQUFoRDtBQUNBLG9CQUFJLEtBQUtqQixVQUFMLElBQW1CQSxVQUF2QixFQUFtQztBQUMvQix3QkFBSTdHLFFBQVEsS0FBS0csS0FBTCxDQUFXUSxZQUFYLENBQXdCOEQsYUFBeEIsQ0FBc0N6RSxLQUF0QyxHQUErQzZHLFVBQUQsR0FBZSxLQUFLMUcsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkM4QyxXQUFwSDtBQUNBLHdCQUFJM0QsUUFBUSxDQUFaLEVBQWU7QUFDWDtBQUNILHFCQUZELE1BRU87QUFDSDtBQUNIO0FBQ0QseUJBQUs2RyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNIO0FBQ0o7QUFDSjs7O3VDQUVjdkcsQyxFQUFHO0FBQ2QsaUJBQUssSUFBSW9GLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLdkYsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkN1RyxRQUEvRCxFQUF5RTFCLEtBQUssS0FBS3ZGLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDdUcsUUFBM0MsR0FBc0QsRUFBcEksRUFBd0k7QUFDcEksb0JBQUs5RyxJQUFJb0YsQ0FBTCxHQUFVLEtBQUt2RixLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ0wsS0FBckQsSUFBOERrRixDQUFsRSxFQUFxRTtBQUNqRTlFLDhCQUFVMkIsTUFBVixDQUFpQixDQUFqQjtBQUNBM0IsOEJBQVU0QixZQUFWLENBQXVCLENBQXZCO0FBQ0E1Qiw4QkFBVTZCLElBQVYsQ0FBZW5DLElBQUlvRixDQUFuQixFQUFzQixLQUFLdkYsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkN3SCxRQUEzQyxHQUFzRCxDQUE1RSxFQUErRS9ILElBQUlvRixDQUFuRixFQUFzRixLQUFLdkYsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNxRyxLQUFqSTtBQUNBdEcsOEJBQVUyQixNQUFWLENBQWlCLEdBQWpCO0FBQ0EzQiw4QkFBVTRCLFlBQVYsQ0FBdUIsQ0FBdkI7QUFDQTVCLDhCQUFVNkIsSUFBVixDQUFlbkMsSUFBSW9GLENBQW5CLEVBQXNCLEtBQUt2RixLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ3dILFFBQWpFLEVBQTJFL0gsSUFBSW9GLENBQS9FLEVBQWtGLEtBQUt2RixLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQzZCLElBQTdIO0FBQ0g7QUFDSjtBQUNELG1CQUFPZ0QsQ0FBUDtBQUNIOzs7NkNBRW9CcEYsQyxFQUFHO0FBQ3BCTSxzQkFBVTJCLE1BQVYsQ0FBaUIsQ0FBakI7QUFDQTNCLHNCQUFVNEIsWUFBVixDQUF1QixDQUF2QjtBQUNBNUIsc0JBQVU2QixJQUFWLENBQWVuQyxDQUFmLEVBQWtCLEtBQUtILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDd0gsUUFBN0QsRUFBdUUvSCxDQUF2RSxFQUEwRSxLQUFLSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ3FHLEtBQXJIO0FBQ0F0RyxzQkFBVTJCLE1BQVYsQ0FBaUIsR0FBakI7QUFDQTNCLHNCQUFVNEIsWUFBVixDQUF1QixDQUF2QjtBQUNBNUIsc0JBQVU2QixJQUFWLENBQWVuQyxDQUFmLEVBQWtCLEtBQUtILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDcUcsS0FBN0QsRUFBb0U1RyxDQUFwRSxFQUF1RSxLQUFLSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQzZCLElBQWxIO0FBQ0g7Ozs4Q0FFcUJ5RSxDLEVBQUc3RyxDLEVBQUc7QUFDeEJNLHNCQUFVMkIsTUFBVixDQUFpQixHQUFqQjtBQUNBM0Isc0JBQVU0QixZQUFWLENBQXVCLENBQXZCO0FBQ0E1QixzQkFBVWUsUUFBVixDQUFtQixFQUFuQjtBQUNBZixzQkFBVWdCLFNBQVYsQ0FBb0JoQixVQUFVaUIsTUFBOUI7QUFDQWpCLHNCQUFVdUIsSUFBVixDQUFlLHdCQUFjbUcsSUFBZCxDQUFtQm5CLElBQUksS0FBS2hILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDOEMsV0FBbEUsSUFBaUYsSUFBaEcsRUFBc0dyRCxJQUFJLEVBQTFHLEVBQThHLEtBQUtILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDd0gsUUFBM0MsR0FBc0QsRUFBcEssRUFBd0ssRUFBeEssRUFBNEssRUFBNUs7QUFDQXpILHNCQUFVeUIsU0FBVixDQUFvQnpCLFVBQVUwQixNQUE5QjtBQUNIOzs7dUNBRWNoQyxDLEVBQUc7QUFDZE0sc0JBQVUyQixNQUFWLENBQWlCLENBQWpCO0FBQ0EzQixzQkFBVTRCLFlBQVYsQ0FBdUIsQ0FBdkI7QUFDQTVCLHNCQUFVNkIsSUFBVixDQUFlbkMsQ0FBZixFQUFrQixLQUFLSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ0MsTUFBM0MsR0FBb0QsRUFBdEUsRUFBMEVSLENBQTFFLEVBQTZFLEtBQUtILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDcUcsS0FBeEg7QUFDQXRHLHNCQUFVMkIsTUFBVixDQUFpQixHQUFqQjtBQUNBM0Isc0JBQVU0QixZQUFWLENBQXVCLENBQXZCO0FBQ0E1QixzQkFBVTZCLElBQVYsQ0FBZW5DLENBQWYsRUFBa0IsS0FBS0gsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNxRyxLQUE3RCxFQUFvRTVHLENBQXBFLEVBQXVFLEtBQUtILEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDNkIsSUFBbEg7QUFDSDs7O3dDQUVleUUsQyxFQUFHN0csQyxFQUFHO0FBQ2xCTSxzQkFBVTRCLFlBQVYsQ0FBdUIsQ0FBdkI7QUFDQTVCLHNCQUFVZSxRQUFWLENBQW1CLEVBQW5CO0FBQ0FmLHNCQUFVZ0IsU0FBVixDQUFvQmhCLFVBQVVpQixNQUE5QjtBQUNBakIsc0JBQVV1QixJQUFWLENBQWUsd0JBQWNDLFFBQWQsQ0FBdUI1RSxLQUFLK0ssS0FBTCxDQUFXcEIsSUFBSSxLQUFLaEgsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkM4QyxXQUExRCxDQUF2QixDQUFmLEVBQStHckQsSUFBSSxFQUFuSCxFQUF1SCxLQUFLSCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQzJILFFBQWxLLEVBQTRLLEVBQTVLLEVBQWdMLEVBQWhMO0FBQ0E1SCxzQkFBVXlCLFNBQVYsQ0FBb0J6QixVQUFVMEIsTUFBOUI7QUFDSDs7O3VDQUVjSyxTLEVBQVdyQyxDLEVBQUc7QUFDekJNLHNCQUFVNEIsWUFBVixDQUF1QixDQUF2QjtBQUNBNUIsc0JBQVVlLFFBQVYsQ0FBbUIsRUFBbkI7QUFDQWYsc0JBQVVnQixTQUFWLENBQW9CaEIsVUFBVWlCLE1BQTlCO0FBQ0FqQixzQkFBVXVCLElBQVYsQ0FBZSx3QkFBY0MsUUFBZCxDQUF1Qk8sU0FBdkIsQ0FBZixFQUFrRHJDLElBQUksRUFBdEQsRUFBMEQsS0FBS0gsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkMySCxRQUFyRyxFQUErRyxFQUEvRyxFQUFtSCxFQUFuSDtBQUNBNUgsc0JBQVV5QixTQUFWLENBQW9CekIsVUFBVTBCLE1BQTlCO0FBQ0g7Ozs0Q0FFbUI7QUFDaEIsZ0JBQUk1RSxVQUFVLENBQUUsS0FBS3lDLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QjhELGFBQXhCLENBQXNDeEUsR0FBdEMsR0FBNEMsS0FBS0UsS0FBTCxDQUFXUSxZQUFYLENBQXdCOEQsYUFBeEIsQ0FBc0N6RSxLQUFwRixJQUE2RixFQUEzRztBQUNBLGdCQUFJdEMsVUFBVSxDQUFkLEVBQWlCO0FBQ2IsdUJBQU9GLEtBQUtDLEtBQUwsQ0FBWSxDQUFDLEtBQUswQyxLQUFMLENBQVc0SCxNQUFYLENBQWtCdkgsS0FBbEIsR0FBMEIsS0FBS0wsS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkMrQyxNQUFyRSxHQUE4RSxFQUEvRSxJQUFxRmxHLE9BQXRGLEdBQWlHLENBQTVHLENBQVA7QUFDSDs7QUFFRCxtQkFBTyxDQUFQO0FBQ0g7Ozt1Q0FFYztBQUNYLG1CQUFPLEtBQUt5QyxLQUFMLENBQVdRLFlBQVgsQ0FBd0I4RCxhQUF4QixDQUFzQ3pFLEtBQTdDO0FBQ0g7Ozs7OztrQkE3SmdCK0ksaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7Ozs7O0lBRXFCRSx3QjtBQUNqQix3Q0FBYztBQUFBOztBQUNWLGFBQUs5SSxLQUFMLEdBQWEseUJBQVMsR0FBVCxDQUFiO0FBQ0g7Ozs7K0JBRU07QUFDSCxnQkFBSThFLGNBQWN6SCxLQUFLQyxLQUFMLENBQVcsS0FBSzBDLEtBQUwsQ0FBV2lELE1BQVgsQ0FBa0I2QixXQUE3QixDQUFsQjtBQUNBLGdCQUFJMEQsV0FBVyxDQUFDMUQsY0FBYyxLQUFLOUUsS0FBTCxDQUFXUSxZQUFYLENBQXdCOEQsYUFBeEIsQ0FBc0N6RSxLQUFyRCxJQUE4RCxLQUFLRyxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQzhDLFdBQXpHLEdBQXVILEtBQUt4RCxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQytDLE1BQWpMO0FBQ0FoRCxzQkFBVTJCLE1BQVYsQ0FBaUIsTUFBakI7QUFDQTNCLHNCQUFVNEIsWUFBVixDQUF1QixDQUF2QjtBQUNBNUIsc0JBQVU2QixJQUFWLENBQWVrRyxRQUFmLEVBQXlCLEtBQUt4SSxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ0MsTUFBM0MsR0FBb0QsRUFBN0UsRUFBaUY2SCxRQUFqRixFQUEyRixLQUFLeEksS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNDLE1BQTNDLEdBQW9ELEVBQS9JO0FBQ0FGLHNCQUFVNkIsSUFBVixDQUFla0csUUFBZixFQUF5QixLQUFLeEksS0FBTCxDQUFXUSxZQUFYLENBQXdCQyxTQUF4QixDQUFrQ0MsUUFBbEMsQ0FBMkNDLE1BQTNDLEdBQW9ELEVBQTdFLEVBQWlGNkgsUUFBakYsRUFBMkYsS0FBS3hJLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QkMsU0FBeEIsQ0FBa0NDLFFBQWxDLENBQTJDNkIsSUFBdEk7QUFDQTlCLHNCQUFVNEIsWUFBVixDQUF1QixDQUF2QjtBQUNBNUIsc0JBQVVlLFFBQVYsQ0FBbUIsRUFBbkI7QUFDQWYsc0JBQVVnQixTQUFWLENBQW9CaEIsVUFBVWlCLE1BQTlCO0FBQ0FqQixzQkFBVXVCLElBQVYsQ0FBZSx3QkFBY0MsUUFBZCxDQUF1QjZDLFdBQXZCLENBQWYsRUFBb0QwRCxXQUFXLEVBQS9ELEVBQW1FLEtBQUt4SSxLQUFMLENBQVdRLFlBQVgsQ0FBd0JDLFNBQXhCLENBQWtDQyxRQUFsQyxDQUEyQ0MsTUFBM0MsR0FBb0QsRUFBdkgsRUFBMkgsRUFBM0gsRUFBK0gsRUFBL0g7QUFDQUYsc0JBQVV5QixTQUFWLENBQW9CekIsVUFBVTBCLE1BQTlCO0FBQ0g7Ozs2QkFFSWhDLEMsRUFBR0MsQyxFQUFHLENBRVY7Ozs7OztrQkFyQmdCMEksd0I7Ozs7Ozs7Ozs7Ozs7a0JDRUdDLE07O0FBTHhCOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsTUFBVCxDQUFnQnRJLFNBQWhCLEVBQTJCO0FBQ3RDLFFBQUlULFFBQVEsSUFBWjtBQUNBYixXQUFPc0IsU0FBUCxHQUFtQkEsU0FBbkI7QUFDQUEsY0FBVXVJLEtBQVYsR0FBa0IsWUFBWTtBQUMxQixZQUFJM0ksUUFBUTRJLFNBQVNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NDLFdBQXBEO0FBQ0EsWUFBSXZCLFNBQVNuSCxVQUFVMkksWUFBVixDQUF1Qi9JLFFBQVEsRUFBL0IsRUFBbUMsR0FBbkMsQ0FBYjtBQUNBdUgsZUFBT3lCLFVBQVAsQ0FBa0JBLFVBQWxCO0FBQ0F6QixlQUFPMEIsWUFBUCxDQUFvQkEsWUFBcEI7QUFDQSxpQ0FBUyxvQkFBVCxFQUErQjFCLE1BQS9CO0FBQ0EsaUNBQVMsMEJBQVQsRUFBcUNuSCxVQUFVSCxNQUEvQztBQUNBLGlDQUFTLHlCQUFULEVBQW9DRyxVQUFVSixLQUE5QztBQUNBTCxnQkFBUSx5QkFBUyxHQUFULENBQVI7QUFDQUEsY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJtSCxNQUE3QixDQUFvQzJCLFFBQXBDLENBQTZDQyxNQUE3QyxDQUFvRCxXQUFwRDtBQUNBLFlBQUlDLFFBQVEsOEJBQVo7QUFDQSxpQ0FBUyxtQkFBVCxFQUE4QkEsS0FBOUI7QUFDQSxZQUFJL0ksV0FBVyxnQ0FBc0IsQ0FBdEIsRUFBeUIsR0FBekIsQ0FBZjtBQUNBLGlDQUFTLHNCQUFULEVBQWlDQSxRQUFqQztBQUNBLFlBQUlnSixrQkFBa0Isd0NBQXRCO0FBQ0EsaUNBQVMseUJBQVQsRUFBb0NBLGVBQXBDOztBQUVBakosa0JBQVVrSixTQUFWLENBQW9CbEosVUFBVW1KLEdBQTlCLEVBQW1DLEdBQW5DLEVBQXdDLEdBQXhDLEVBQTZDLEdBQTdDLEVBQWtELEdBQWxEOztBQUVBbkosa0JBQVVvSixTQUFWLENBQW9CLEVBQXBCO0FBQ0FwSixrQkFBVXFKLE1BQVY7QUFDSCxLQXJCRDs7QUF1QkFySixjQUFVZ0YsSUFBVixHQUFpQixZQUFZO0FBQ3pCekYsY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJnSixLQUE3QixDQUFtQ0YsUUFBbkMsQ0FBNEM5RCxJQUE1QztBQUNBLFlBQUl6RixNQUFNUSxZQUFOLENBQW1COEQsYUFBdkIsRUFBc0M7QUFDbEN0RSxrQkFBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJDLFFBQTdCLENBQXNDNkksUUFBdEMsQ0FBK0M5RCxJQUEvQztBQUNBekYsa0JBQU1RLFlBQU4sQ0FBbUI4RCxhQUFuQixDQUFpQ3lGLFdBQWpDO0FBQ0EvSixrQkFBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJ1SixXQUE3QixDQUF5Q1QsUUFBekMsQ0FBa0Q5RCxJQUFsRDtBQUNIO0FBQ0osS0FQRDs7QUFTQSxhQUFTNEQsVUFBVCxHQUFzQjtBQUNsQixZQUFJckosS0FBSixFQUFXO0FBQ1AsZ0JBQUlBLE1BQU1RLFlBQU4sQ0FBbUIrSSxRQUF2QixFQUFpQztBQUM3QnZKLHNCQUFNUSxZQUFOLENBQW1CK0ksUUFBbkIsQ0FBNEJVLGVBQTVCLENBQTRDeEosVUFBVWtILE1BQXRELEVBQThEbEgsVUFBVW9ILE1BQXhFO0FBQ0g7QUFDSjtBQUNKOztBQUVELGFBQVN5QixZQUFULEdBQXdCO0FBQ3BCLFlBQUl0SixLQUFKLEVBQVc7QUFDUCxnQkFBSUEsTUFBTVEsWUFBTixDQUFtQitJLFFBQXZCLEVBQWlDO0FBQzdCdkosc0JBQU1RLFlBQU4sQ0FBbUIrSSxRQUFuQixDQUE0Qlcsa0JBQTVCLENBQStDekosVUFBVWtILE1BQXpELEVBQWlFbEgsVUFBVW9ILE1BQTNFO0FBQ0g7QUFDSjtBQUNKOztBQUVEcEgsY0FBVTBKLElBQVYsR0FBaUIsWUFBWTtBQUN6QjFKLGtCQUFVcUosTUFBVjtBQUNILEtBRkQ7O0FBSUFySixjQUFVWixLQUFWLEdBQWtCLFlBQVk7QUFDMUJZLGtCQUFVMkosSUFBVjtBQUNILEtBRkQ7QUFHSCxDOzs7Ozs7Ozs7Ozs7OztBQy9ERDs7OztBQUNBOzs7Ozs7a0JBQ2U7QUFDWHBCLFNBRFcsbUJBQ0o7O0FBRUgsWUFBSXZHLFNBQVMscUJBQVcsQ0FBWCxFQUFjLEVBQWQsRUFBa0I7QUFDM0IsbUJBQU8sRUFBQyxLQUFLLGdCQUFOLEVBQXdCLEtBQUssQ0FBN0IsRUFBZ0MsS0FBSyxrQkFBckMsRUFBeUQsS0FBSyxDQUE5RCxFQURvQjtBQUUzQixtQkFBTyxTQUZvQjtBQUczQixvQkFBUSxFQUFDLEtBQUssR0FBTixFQUFXLEtBQUssR0FBaEIsRUFBcUIsS0FBSyxDQUExQixFQUE2QixLQUFLLENBQWxDLEVBQXFDLFNBQVMsRUFBOUMsRUFIbUI7QUFJM0IsbUJBQU8sRUFBQyxLQUFLLGdCQUFOLEVBQXdCLEtBQUssQ0FBN0IsRUFBZ0MsS0FBSyxrQkFBckMsRUFBeUQsS0FBSyxDQUE5RDtBQUpvQixTQUFsQixDQUFiOztBQU9BLGVBQU8sb0JBQVUsQ0FBVixFQUFhLEdBQWIsRUFBa0IsZUFBbEIsRUFBbUM7QUFDdEMsbUJBQU8sRUFBQyxLQUFLLGdCQUFOLEVBQXdCLEtBQUssQ0FBN0IsRUFBZ0MsS0FBSyxrQkFBckMsRUFBeUQsS0FBSyxDQUE5RCxFQUQrQjtBQUV0QyxtQkFBTyxTQUYrQjtBQUd0QyxvQkFBUSxFQUFDLEtBQUssR0FBTixFQUFXLEtBQUssR0FBaEIsRUFBcUIsS0FBSyxDQUExQixFQUE2QixLQUFLLENBQWxDLEVBQXFDLFNBQVMsRUFBOUMsRUFIOEI7QUFJdEMsbUJBQU8sRUFBQyxLQUFLLGdCQUFOLEVBQXdCLEtBQUssQ0FBN0IsRUFBZ0MsS0FBSyxrQkFBckMsRUFBeUQsS0FBSyxDQUE5RDtBQUorQixTQUFuQyxFQUtKLENBQUNBLE1BQUQsQ0FMSSxDQUFQO0FBT0g7QUFqQlUsQzs7Ozs7Ozs7Ozs7OztrQkNLU3NHLE07O0FBUHhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBZ0J6RCxDQUFoQixFQUFtQjtBQUM5QixRQUFJdEYsUUFBUSxJQUFaO0FBQ0FiLFdBQU9tRyxDQUFQLEdBQVdBLENBQVg7QUFDQUEsTUFBRTBELEtBQUYsR0FBVSxZQUFZO0FBQ2xCLFlBQUkzSSxRQUFRNEksU0FBU0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q0MsV0FBbkQ7QUFDQSxZQUFJdkIsU0FBU3RDLEVBQUU4RCxZQUFGLENBQWUvSSxRQUFRLEVBQXZCLEVBQTJCLEdBQTNCLENBQWI7QUFDQXVILGVBQU95QixVQUFQLENBQWtCQSxVQUFsQjtBQUNBekIsZUFBTzBCLFlBQVAsQ0FBb0JBLFlBQXBCO0FBQ0F0SixnQkFBUSx5QkFBUyxHQUFULENBQVI7QUFDQSxpQ0FBUyxXQUFULEVBQXNCNEgsTUFBdEI7QUFDQSxpQ0FBUyxXQUFULEVBQXNCdEMsRUFBRWhGLE1BQXhCO0FBQ0EsaUNBQVMsVUFBVCxFQUFxQmdGLEVBQUVqRixLQUF2QjtBQUNBTCxjQUFNNEgsTUFBTixDQUFhMkIsUUFBYixDQUFzQkMsTUFBdEIsQ0FBNkIsVUFBN0I7QUFDQSxZQUFJQyxRQUFRLHFCQUFaO0FBQ0EsaUNBQVMsVUFBVCxFQUFxQkEsS0FBckI7QUFDQSxZQUFJL0ksV0FBVyx1QkFBYSxDQUFiLEVBQWdCLEdBQWhCLENBQWY7QUFDQSxpQ0FBUyxhQUFULEVBQXdCQSxRQUF4QjtBQUNBLFlBQUlGLGVBQWUsMkJBQWlCLENBQUMscUJBQUQsQ0FBakIsQ0FBbkI7QUFDQSxpQ0FBUyxpQkFBVCxFQUE0QkEsWUFBNUI7QUFDQSxZQUFJa0osa0JBQWtCLCtCQUF0QjtBQUNBLGlDQUFTLGdCQUFULEVBQTJCQSxlQUEzQjs7QUFFQTFKLGNBQU15SixLQUFOLENBQVlGLFFBQVosQ0FBcUJQLEtBQXJCO0FBQ0ExRCxVQUFFcUUsU0FBRixDQUFZckUsRUFBRXNFLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEM7O0FBRUFTO0FBQ0EvRSxVQUFFdUUsU0FBRixDQUFZLEVBQVo7QUFDSCxLQXhCRDs7QUEwQkF2RSxNQUFFRyxJQUFGLEdBQVMsWUFBWTtBQUNqQnpGLGNBQU15SixLQUFOLENBQVlGLFFBQVosQ0FBcUI5RCxJQUFyQjtBQUNBekYsY0FBTVUsUUFBTixDQUFlNkksUUFBZixDQUF3QjlELElBQXhCO0FBQ0F6RixjQUFNUSxZQUFOLENBQW1CK0ksUUFBbkIsQ0FBNEI5RCxJQUE1QjtBQUNBekYsY0FBTWdLLFdBQU4sQ0FBa0JULFFBQWxCLENBQTJCOUQsSUFBM0I7QUFDSCxLQUxEOztBQU9BLGFBQVM0RSxhQUFULEdBQXlCLENBRXhCOztBQUVELGFBQVNDLE1BQVQsQ0FBZ0I1SCxLQUFoQixFQUF1QjtBQUNuQkEsY0FBTUMsY0FBTjtBQUNBLGlDQUFTLFNBQVQsRUFBb0IzQyxNQUFNVSxRQUFOLENBQWU0SCxVQUFmLEdBQTRCLENBQWhEO0FBQ0EsaUNBQVMsZ0JBQVQsRUFBMkIsS0FBM0I7QUFDSDs7QUFFRCxhQUFTaUMsT0FBVCxDQUFpQjdILEtBQWpCLEVBQXdCO0FBQ3BCQSxjQUFNQyxjQUFOO0FBQ0EsWUFBSTNDLE1BQU1VLFFBQU4sQ0FBZTRILFVBQWYsR0FBNEJ0SSxNQUFNVSxRQUFOLENBQWU4SixpQkFBL0MsRUFBa0U7QUFDOUQscUNBQVMsU0FBVCxFQUFvQnhLLE1BQU1VLFFBQU4sQ0FBZTRILFVBQWYsR0FBNEIsQ0FBaEQ7QUFDQSxxQ0FBUyxnQkFBVCxFQUEyQixLQUEzQjtBQUNIO0FBQ0o7O0FBRUQsYUFBU2UsVUFBVCxHQUFzQjtBQUNsQixZQUFJckosS0FBSixFQUFXO0FBQ1AsZ0JBQUlBLE1BQU1RLFlBQU4sQ0FBbUIrSSxRQUF2QixFQUFpQztBQUM3QnZKLHNCQUFNUSxZQUFOLENBQW1CK0ksUUFBbkIsQ0FBNEJrQixjQUE1QixDQUEyQ25GLEVBQUVxQyxNQUE3QyxFQUFxRHJDLEVBQUV1QyxNQUF2RDtBQUNIO0FBQ0Q3SCxrQkFBTVUsUUFBTixDQUFlNkksUUFBZixDQUF3Qm1CLFNBQXhCO0FBQ0g7QUFDSjs7QUFFRHBGLE1BQUVxRixZQUFGLEdBQWlCLFVBQVVqSSxLQUFWLEVBQWlCO0FBQzlCLFlBQUkxQyxLQUFKLEVBQVc7QUFDUEEsa0JBQU1VLFFBQU4sQ0FBZTZJLFFBQWYsQ0FBd0JxQixJQUF4QjtBQUNIO0FBQ0osS0FKRDs7QUFNQSxhQUFTdEIsWUFBVCxHQUF3QjtBQUNwQixZQUFJdEosS0FBSixFQUFXO0FBQ1AsZ0JBQUlBLE1BQU1RLFlBQU4sQ0FBbUIrSSxRQUF2QixFQUFpQztBQUM3QnZKLHNCQUFNUSxZQUFOLENBQW1CK0ksUUFBbkIsQ0FBNEJzQixpQkFBNUIsQ0FBOEN2RixFQUFFcUMsTUFBaEQsRUFBd0RyQyxFQUFFdUMsTUFBMUQ7QUFDSDtBQUNKO0FBQ0o7O0FBRUR2QyxNQUFFNkUsSUFBRixHQUFTLFlBQVk7QUFDakJuRSxnQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQVgsVUFBRXdFLE1BQUY7QUFDSCxLQUhEOztBQUtBeEUsTUFBRXpGLEtBQUYsR0FBVSxZQUFZO0FBQ2xCbUcsZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FYLFVBQUU4RSxJQUFGO0FBQ0gsS0FIRDtBQUlILEM7Ozs7Ozs7Ozs7Ozs7OztBQzdGRDs7QUFFTyxJQUFNN0YsNEJBQVU7QUFDbkJ1RyxlQURtQix1QkFDUDlLLEtBRE8sRUFDQStLLEtBREEsRUFDTTtBQUNyQi9FLGdCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBakcsY0FBTThLLFdBQU4sR0FBb0JDLEtBQXBCO0FBQ0EsZUFBT0EsS0FBUDtBQUNILEtBTGtCO0FBTW5CQyxhQU5tQixxQkFNVGhMLEtBTlMsRUFNRnVKLFFBTkUsRUFNTztBQUN0QnZKLGNBQU00SCxNQUFOLENBQWEyQixRQUFiLEdBQXdCQSxRQUF4QjtBQUNBLGVBQU9BLFFBQVA7QUFDSCxLQVRrQjtBQVVuQjBCLGVBVm1CLHVCQVVQakwsS0FWTyxFQVVBdUosUUFWQSxFQVVTO0FBQ3hCdkosY0FBTVUsUUFBTixDQUFlNkksUUFBZixHQUEwQkEsUUFBMUI7QUFDQSxlQUFPQSxRQUFQO0FBQ0gsS0Fia0I7QUFjbkIyQixtQkFkbUIsMkJBY0hsTCxLQWRHLEVBY0l1SixRQWRKLEVBY2E7QUFDNUJ2SixjQUFNUSxZQUFOLENBQW1CK0ksUUFBbkIsR0FBOEJBLFFBQTlCO0FBQ0EsZUFBT0EsUUFBUDtBQUNILEtBakJrQjtBQWtCbkI0QixZQWxCbUIsb0JBa0JWbkwsS0FsQlUsRUFrQkh1SixRQWxCRyxFQWtCTTtBQUNyQnZKLGNBQU15SixLQUFOLENBQVlGLFFBQVosR0FBdUJBLFFBQXZCO0FBQ0EsZUFBT0EsUUFBUDtBQUNILEtBckJrQjtBQXNCbkI2QixhQXRCbUIscUJBc0JUcEwsS0F0QlMsRUFzQkZ1SixRQXRCRSxFQXNCTztBQUN0QnZKLGNBQU1pRCxNQUFOLENBQWFzRyxRQUFiLEdBQXdCQSxRQUF4QjtBQUNBLGVBQU9BLFFBQVA7QUFDSCxLQXpCa0I7QUEwQm5COEIsa0JBMUJtQiwwQkEwQkpyTCxLQTFCSSxFQTBCR3VKLFFBMUJILEVBMEJZO0FBQzNCdkosY0FBTWdLLFdBQU4sQ0FBa0JULFFBQWxCLEdBQTZCQSxRQUE3QjtBQUNBLGVBQU9BLFFBQVA7QUFDSCxLQTdCa0I7QUE4Qm5CK0IsWUE5Qm1CLG9CQThCVnRMLEtBOUJVLEVBOEJISyxLQTlCRyxFQThCRztBQUNsQkwsY0FBTTRILE1BQU4sQ0FBYXZILEtBQWIsR0FBcUJBLEtBQXJCO0FBQ0EsaUNBQVMsa0JBQVQsRUFBNkJBLEtBQTdCO0FBQ0EsaUNBQVMsbUJBQVQsRUFBOEJBLEtBQTlCO0FBQ0EsZUFBT0EsS0FBUDtBQUNILEtBbkNrQjtBQW9DbkJrTCxhQXBDbUIscUJBb0NUdkwsS0FwQ1MsRUFvQ0ZNLE1BcENFLEVBb0NLO0FBQ3BCTixjQUFNNEgsTUFBTixDQUFhdEgsTUFBYixHQUFzQkEsTUFBdEI7QUFDQSxlQUFPQSxNQUFQO0FBQ0gsS0F2Q2tCO0FBd0NuQmtMLG9CQXhDbUIsNEJBd0NGeEwsS0F4Q0UsRUF3Q0tLLEtBeENMLEVBd0NXO0FBQzFCTCxjQUFNVSxRQUFOLENBQWVMLEtBQWYsR0FBdUJBLEtBQXZCO0FBQ0EsZUFBT0EsS0FBUDtBQUNILEtBM0NrQjtBQTRDbkJvTCxtQkE1Q21CLDJCQTRDSHpMLEtBNUNHLEVBNENJMkcsSUE1Q0osRUE0Q1M7QUFDeEIzRyxjQUFNVSxRQUFOLENBQWVpRyxJQUFmLEdBQXNCQSxJQUF0QjtBQUNBLGVBQU9BLElBQVA7QUFDSCxLQS9Da0I7QUFnRG5CK0UscUJBaERtQiw2QkFnREQxTCxLQWhEQyxFQWdETU0sTUFoRE4sRUFnRGE7QUFDNUJOLGNBQU1VLFFBQU4sQ0FBZUosTUFBZixHQUF3QkEsTUFBeEI7QUFDQSxpQ0FBUyxpQkFBVCxFQUE0Qk4sTUFBTVUsUUFBTixDQUFlQyxNQUFmLEdBQXdCTCxNQUFwRDtBQUNBLGVBQU9BLE1BQVA7QUFDSCxLQXBEa0I7QUFxRG5CcUwsd0JBckRtQixnQ0FxREUzTCxLQXJERixFQXFEUzBLLFNBckRULEVBcURtQjtBQUNsQzFLLGNBQU1VLFFBQU4sQ0FBZXFGLFdBQWYsR0FBNkIyRSxTQUE3QjtBQUNBLGVBQU9BLFNBQVA7QUFDSCxLQXhEa0I7QUF5RG5Ca0Isd0JBekRtQixnQ0F5REU1TCxLQXpERixFQXlEU3dDLFNBekRULEVBeURtQjtBQUNsQ3hDLGNBQU1VLFFBQU4sQ0FBZThCLFNBQWYsR0FBMkJBLFNBQTNCO0FBQ0EsZUFBT0EsU0FBUDtBQUNILEtBNURrQjtBQTZEbkJxSixxQkE3RG1CLDZCQTZERDdMLEtBN0RDLEVBNkRNVyxNQTdETixFQTZEYTtBQUM1QlgsY0FBTVUsUUFBTixDQUFlQyxNQUFmLEdBQXdCQSxNQUF4QjtBQUNBLGlDQUFTLHFCQUFULEVBQWdDQSxTQUFTLENBQXpDO0FBQ0EsaUNBQVMscUJBQVQsRUFBZ0NBLFNBQVMsRUFBekM7QUFDQSxpQ0FBUyxrQkFBVCxFQUE2QkEsU0FBUyxFQUF0QztBQUNBLGlDQUFTLGlCQUFULEVBQTRCQSxTQUFTWCxNQUFNVSxRQUFOLENBQWVKLE1BQXBEO0FBQ0EsZUFBT0ssTUFBUDtBQUNILEtBcEVrQjtBQXFFbkJtTCxvQkFyRW1CLDRCQXFFRjlMLEtBckVFLEVBcUVLK0csS0FyRUwsRUFxRVc7QUFDMUIvRyxjQUFNVSxRQUFOLENBQWVxRyxLQUFmLEdBQXVCQSxLQUF2QjtBQUNBLGVBQU9BLEtBQVA7QUFDSCxLQXhFa0I7QUF5RW5CZ0YsbUJBekVtQiwyQkF5RUgvTCxLQXpFRyxFQXlFSXVDLElBekVKLEVBeUVTO0FBQ3hCdkMsY0FBTVUsUUFBTixDQUFlNkIsSUFBZixHQUFzQkEsSUFBdEI7QUFDQSxlQUFPQSxJQUFQO0FBQ0gsS0E1RWtCO0FBNkVuQnlKLHFCQTdFbUIsNkJBNkVEaE0sS0E3RUMsRUE2RU15RCxNQTdFTixFQTZFYTtBQUM1QnpELGNBQU1VLFFBQU4sQ0FBZStDLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0EsZUFBT0EsTUFBUDtBQUNILEtBaEZrQjtBQWlGbkJ3SSxtQkFqRm1CLDJCQWlGSGpNLEtBakZHLEVBaUZJOEcsSUFqRkosRUFpRlM7QUFDeEJBLGVBQU8sQ0FBQzlHLE1BQU1pRCxNQUFOLENBQWE0RCxRQUFiLEdBQXdCN0csTUFBTVUsUUFBTixDQUFlOEIsU0FBeEMsSUFBcUR4QyxNQUFNVSxRQUFOLENBQWU4QyxXQUFwRSxHQUFrRixFQUF6RjtBQUNBeEQsY0FBTVUsUUFBTixDQUFlb0csSUFBZixHQUFzQkEsSUFBdEI7QUFDQSxlQUFPQSxJQUFQO0FBQ0gsS0FyRmtCO0FBc0ZuQm9GLHVCQXRGbUIsK0JBc0ZDbE0sS0F0RkQsRUFzRlFxSSxRQXRGUixFQXNGaUI7QUFDaENySSxjQUFNVSxRQUFOLENBQWUySCxRQUFmLEdBQTBCQSxRQUExQjtBQUNBLGVBQU9BLFFBQVA7QUFDSCxLQXpGa0I7QUEwRm5COEQsdUJBMUZtQiwrQkEwRkNuTSxLQTFGRCxFQTBGUWtJLFFBMUZSLEVBMEZpQjtBQUNoQ2xJLGNBQU1VLFFBQU4sQ0FBZXdILFFBQWYsR0FBMEJBLFFBQTFCO0FBQ0EsZUFBT0EsUUFBUDtBQUNILEtBN0ZrQjtBQThGbkJrRSxrQkE5Rm1CLDBCQThGSnBNLEtBOUZJLEVBOEZHeUgsV0E5RkgsRUE4RmU7QUFDOUJ6SCxjQUFNVSxRQUFOLENBQWUrRyxXQUFmLEdBQTZCQSxXQUE3QjtBQUNBLGVBQU9BLFdBQVA7QUFDSCxLQWpHa0I7QUFrR25CNEUsMEJBbEdtQixrQ0FrR0lyTSxLQWxHSixFQWtHV3NILG1CQWxHWCxFQWtHK0I7QUFDOUN0SCxjQUFNVSxRQUFOLENBQWU0RyxtQkFBZixHQUFxQ0EsbUJBQXJDO0FBQ0EsZUFBT0EsbUJBQVA7QUFDSCxLQXJHa0I7QUFzR25CZ0YsV0F0R21CLG1CQXNHWHRNLEtBdEdXLEVBc0dKdU0sSUF0R0ksRUFzR0M7QUFDaEIsWUFBSXZNLE1BQU1pRCxNQUFOLENBQWE0RCxRQUFiLEdBQXdCLEdBQTVCLEVBQWlDO0FBQzdCN0csa0JBQU1VLFFBQU4sQ0FBZThKLGlCQUFmLEdBQW1Dbk4sS0FBS0MsS0FBTCxDQUFXMEMsTUFBTWlELE1BQU4sQ0FBYTRELFFBQWIsR0FBd0IsR0FBbkMsQ0FBbkM7QUFDSDtBQUNELFlBQUk3RyxNQUFNVSxRQUFOLENBQWU0SCxVQUFmLElBQTZCaUUsSUFBakMsRUFBdUM7QUFDbkN2TSxrQkFBTVUsUUFBTixDQUFlOEwsZ0JBQWYsR0FBa0MsSUFBbEM7QUFDSDtBQUNELFlBQUlELE9BQU92TSxNQUFNVSxRQUFOLENBQWU4SixpQkFBMUIsRUFBNkM7QUFDekN4SyxrQkFBTVUsUUFBTixDQUFlNEgsVUFBZixHQUE0QnRJLE1BQU1VLFFBQU4sQ0FBZThKLGlCQUEzQztBQUNILFNBRkQsTUFFTztBQUNIeEssa0JBQU1VLFFBQU4sQ0FBZTRILFVBQWYsR0FBNEJpRSxJQUE1QjtBQUNIO0FBQ0QsZUFBT0EsSUFBUDtBQUNILEtBbkhrQjtBQW9IbkJFLGtCQXBIbUIsMEJBb0hKek0sS0FwSEksRUFvSEd3RCxXQXBISCxFQW9IZTtBQUM5QnhELGNBQU1VLFFBQU4sQ0FBZThDLFdBQWYsR0FBNkJBLFdBQTdCO0FBQ0EsZUFBT0EsV0FBUDtBQUNILEtBdkhrQjtBQXdIbkJrSixlQXhIbUIsdUJBd0hQMU0sS0F4SE8sRUF3SEFpSCxRQXhIQSxFQXdIUztBQUN4QmpILGNBQU1VLFFBQU4sQ0FBZXVHLFFBQWYsR0FBMEJBLFFBQTFCO0FBQ0EsaUNBQVMsd0JBQVQsRUFBbUNBLFdBQVcsRUFBOUM7QUFDQSxpQ0FBUyxnQkFBVCxFQUEyQkEsV0FBVyxFQUF0QztBQUNBLGlDQUFTLGdCQUFULEVBQTJCQSxXQUFXLEVBQXRDO0FBQ0EsZUFBT0EsUUFBUDtBQUNILEtBOUhrQjtBQStIbkIwRixlQS9IbUIsdUJBK0hQM00sS0EvSE8sRUErSEE2RyxRQS9IQSxFQStIUztBQUN4QjdHLGNBQU1pRCxNQUFOLENBQWE0RCxRQUFiLEdBQXdCQSxRQUF4QjtBQUNBLGlDQUFTLGlCQUFULEVBQTRCLENBQTVCO0FBQ0EsZUFBT0EsUUFBUDtBQUNILEtBbklrQjtBQW9JbkIrRixrQkFwSW1CLDBCQW9JSjVNLEtBcElJLEVBb0lHOEUsV0FwSUgsRUFvSWU7QUFDOUI5RSxjQUFNaUQsTUFBTixDQUFhNkIsV0FBYixHQUEyQkEsV0FBM0I7QUFDQSxlQUFPQSxXQUFQO0FBQ0gsS0F2SWtCO0FBeUluQitILGtCQXpJbUIsMEJBeUlKN00sS0F6SUksRUF5SUc4TSxXQXpJSCxFQXlJZTtBQUM5QjlNLGNBQU04TSxXQUFOLEdBQW9CQSxXQUFwQjtBQUNBLGVBQU9BLFdBQVA7QUFDSCxLQTVJa0I7QUE2SW5CQyxjQTdJbUIsc0JBNklSL00sS0E3SVEsRUE2SUQ0RCxPQTdJQyxFQTZJTztBQUN0QjVELGNBQU1RLFlBQU4sQ0FBbUJvRCxPQUFuQixHQUE2QkEsT0FBN0I7QUFDQSxlQUFPQSxPQUFQO0FBQ0gsS0FoSmtCO0FBaUpuQm9KLG9CQWpKbUIsNEJBaUpGaE4sS0FqSkUsRUFpSksyRCxLQWpKTCxFQWlKVztBQUMxQjNELGNBQU1RLFlBQU4sQ0FBbUI4RCxhQUFuQixHQUFtQ1gsS0FBbkM7QUFDQSxlQUFPQSxLQUFQO0FBQ0gsS0FwSmtCO0FBcUpuQnNKLFlBckptQixvQkFxSlZqTixLQXJKVSxFQXFKSDJELEtBckpHLEVBcUpHO0FBQ2xCM0QsY0FBTVEsWUFBTixDQUFtQm9ELE9BQW5CLENBQTJCSSxJQUEzQixDQUFnQ0wsS0FBaEM7QUFDQSxlQUFPQSxLQUFQO0FBQ0gsS0F4SmtCO0FBeUpuQmQsYUF6Sm1CLHFCQXlKVDdDLEtBekpTLEVBeUpGMkQsS0F6SkUsRUF5Skk7QUFDbkIsWUFBSXVKLFFBQVFySixFQUFFc0osU0FBRixDQUFZbk4sTUFBTVEsWUFBTixDQUFtQm9ELE9BQS9CLEVBQXdDLFVBQVVHLENBQVYsRUFBYTtBQUM3RCxtQkFBT0EsRUFBRXJHLEVBQUYsSUFBUWlHLE1BQU1qRyxFQUFyQjtBQUNILFNBRlcsQ0FBWjtBQUdBc0MsY0FBTVEsWUFBTixDQUFtQm9ELE9BQW5CLENBQTJCc0osS0FBM0IsRUFBa0NyTixLQUFsQyxHQUEwQzhELE1BQU05RCxLQUFoRDtBQUNBRyxjQUFNUSxZQUFOLENBQW1Cb0QsT0FBbkIsQ0FBMkJzSixLQUEzQixFQUFrQ3BOLEdBQWxDLEdBQXdDNkQsTUFBTTdELEdBQTlDO0FBQ0FFLGNBQU1RLFlBQU4sQ0FBbUJvRCxPQUFuQixDQUEyQnNKLEtBQTNCLEVBQWtDbk4sS0FBbEMsR0FBMEM0RCxNQUFNNUQsS0FBaEQ7QUFDQUMsY0FBTVEsWUFBTixDQUFtQm9ELE9BQW5CLENBQTJCc0osS0FBM0IsRUFBa0NsTCxJQUFsQyxHQUF5QzJCLE1BQU0zQixJQUEvQztBQUNBLFlBQUlnRixDQUFKO0FBQ0EsYUFBS0EsSUFBSSxDQUFULEVBQVlBLElBQUloSCxNQUFNUSxZQUFOLENBQW1Cb0QsT0FBbkIsQ0FBMkJzSixLQUEzQixFQUFrQzNJLE9BQWxDLENBQTBDaUIsTUFBMUQsRUFBa0V3QixHQUFsRSxFQUF1RTtBQUNuRWhILGtCQUFNUSxZQUFOLENBQW1Cb0QsT0FBbkIsQ0FBMkJzSixLQUEzQixFQUFrQzNJLE9BQWxDLENBQTBDeUMsQ0FBMUMsRUFBNkNqSCxLQUE3QyxHQUFxRDhELEVBQUV1SixTQUFGLENBQVl6SixNQUFNNUQsS0FBbEIsQ0FBckQ7QUFDSDtBQUNELGVBQU80RCxLQUFQO0FBQ0gsS0F0S2tCO0FBdUtuQjBKLGVBdkttQix1QkF1S1ByTixLQXZLTyxFQXVLQTJELEtBdktBLEVBdUtNO0FBQ3JCLFlBQUl1SixRQUFRckosRUFBRXNKLFNBQUYsQ0FBWW5OLE1BQU1RLFlBQU4sQ0FBbUJvRCxPQUEvQixFQUF3QyxVQUFVRyxDQUFWLEVBQWE7QUFDN0QsbUJBQU9BLEVBQUVyRyxFQUFGLElBQVFpRyxNQUFNakcsRUFBckI7QUFDSCxTQUZXLENBQVo7QUFHQSxZQUFJd1AsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDWmxOLGtCQUFNUSxZQUFOLENBQW1Cb0QsT0FBbkIsQ0FBMkIwSixNQUEzQixDQUFrQ0osS0FBbEMsRUFBeUMsQ0FBekM7QUFDSDtBQUNELGVBQU92SixLQUFQO0FBQ0gsS0EvS2tCOzs7QUFrTG5CO0FBQ0E0SixnQkFuTG1CLHdCQW1MTnZOLEtBbkxNLEVBbUxDUyxTQW5MRCxFQW1MVztBQUMxQlQsY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkI4SSxRQUE3QixHQUF3QzlJLFNBQXhDO0FBQ0EsZUFBT0EsU0FBUDtBQUNILEtBdExrQjtBQXVMbkIrTSxxQkF2TG1CLDZCQXVMRHhOLEtBdkxDLEVBdUxNSyxLQXZMTixFQXVMWTtBQUMzQkwsY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJDLFFBQTdCLENBQXNDTCxLQUF0QyxHQUE4Q0EsS0FBOUM7QUFDQSxlQUFPQSxLQUFQO0FBQ0gsS0ExTGtCO0FBMkxuQm9OLHNCQTNMbUIsOEJBMkxBek4sS0EzTEEsRUEyTE9NLE1BM0xQLEVBMkxjO0FBQzdCTixjQUFNUSxZQUFOLENBQW1CQyxTQUFuQixDQUE2QkMsUUFBN0IsQ0FBc0NKLE1BQXRDLEdBQStDQSxNQUEvQztBQUNBLGlDQUFTLGtCQUFULEVBQTZCTixNQUFNUSxZQUFOLENBQW1CQyxTQUFuQixDQUE2QkMsUUFBN0IsQ0FBc0NDLE1BQXRDLEdBQStDTCxNQUE1RTs7QUFFQSxlQUFPQSxNQUFQO0FBQ0gsS0FoTWtCO0FBaU1uQm9OLHNCQWpNbUIsOEJBaU1BMU4sS0FqTUEsRUFpTU80SCxNQWpNUCxFQWlNYztBQUM3QjVILGNBQU1RLFlBQU4sQ0FBbUJDLFNBQW5CLENBQTZCbUgsTUFBN0IsQ0FBb0MyQixRQUFwQyxHQUErQzNCLE1BQS9DO0FBQ0EsZUFBT0EsTUFBUDtBQUNILEtBcE1rQjtBQXFNbkIrRiwyQkFyTW1CLG1DQXFNSzNOLEtBck1MLEVBcU1ZZ0ssV0FyTVosRUFxTXdCO0FBQ3ZDaEssY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJ1SixXQUE3QixDQUF5Q1QsUUFBekMsR0FBb0RTLFdBQXBEO0FBQ0EsZUFBT0EsV0FBUDtBQUNILEtBeE1rQjtBQXlNbkI0RCwyQkF6TW1CLG1DQXlNSzVOLEtBek1MLEVBeU1ZSyxLQXpNWixFQXlNa0I7QUFDakNMLGNBQU1RLFlBQU4sQ0FBbUJDLFNBQW5CLENBQTZCbUgsTUFBN0IsQ0FBb0N2SCxLQUFwQyxHQUE0Q0EsS0FBNUM7QUFDQSxlQUFPQSxLQUFQO0FBQ0gsS0E1TWtCO0FBNk1uQndOLDRCQTdNbUIsb0NBNk1NN04sS0E3TU4sRUE2TWFNLE1BN01iLEVBNk1vQjtBQUNuQ04sY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJtSCxNQUE3QixDQUFvQ3RILE1BQXBDLEdBQTZDQSxNQUE3QztBQUNBLGVBQU9BLE1BQVA7QUFDSCxLQWhOa0I7QUFpTm5Cd04scUJBak5tQiw2QkFpTkQ5TixLQWpOQyxFQWlOTXlKLEtBak5OLEVBaU5ZO0FBQzNCekosY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJnSixLQUE3QixDQUFtQ0YsUUFBbkMsR0FBOENFLEtBQTlDO0FBQ0EsZUFBT0EsS0FBUDtBQUNILEtBcE5rQjtBQXFObkJzRSx3QkFyTm1CLGdDQXFORS9OLEtBck5GLEVBcU5TVSxRQXJOVCxFQXFOa0I7QUFDakNWLGNBQU1RLFlBQU4sQ0FBbUJDLFNBQW5CLENBQTZCQyxRQUE3QixDQUFzQzZJLFFBQXRDLEdBQWlEN0ksUUFBakQ7QUFDQSxlQUFPQSxRQUFQO0FBQ0gsS0F4TmtCO0FBeU5uQnNOLHlCQXpObUIsaUNBeU5HaE8sS0F6TkgsRUF5TlV3QyxTQXpOVixFQXlOb0I7QUFDbkN4QyxjQUFNUSxZQUFOLENBQW1CQyxTQUFuQixDQUE2QkMsUUFBN0IsQ0FBc0M4QixTQUF0QyxHQUFrREEsU0FBbEQ7QUFDQSxlQUFPQSxTQUFQO0FBQ0gsS0E1TmtCO0FBNk5uQnlMLHNCQTdObUIsOEJBNk5Bak8sS0E3TkEsRUE2Tk9XLE1BN05QLEVBNk5jO0FBQzdCWCxjQUFNUSxZQUFOLENBQW1CQyxTQUFuQixDQUE2QkMsUUFBN0IsQ0FBc0NDLE1BQXRDLEdBQStDQSxNQUEvQztBQUNBLGlDQUFTLHNCQUFULEVBQWlDQSxTQUFTLENBQTFDO0FBQ0EsaUNBQVMsc0JBQVQsRUFBaUNBLFNBQVMsRUFBMUM7QUFDQSxpQ0FBUyxtQkFBVCxFQUE4QkEsU0FBUyxFQUF2QztBQUNBLGVBQU9BLE1BQVA7QUFDSCxLQW5Pa0I7QUFvT25CdU4scUJBcE9tQiw2QkFvT0RsTyxLQXBPQyxFQW9PTStHLEtBcE9OLEVBb09ZO0FBQzNCL0csY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJDLFFBQTdCLENBQXNDcUcsS0FBdEMsR0FBOENBLEtBQTlDO0FBQ0EsZUFBT0EsS0FBUDtBQUNILEtBdk9rQjtBQXdPbkJvSCxvQkF4T21CLDRCQXdPRm5PLEtBeE9FLEVBd09LdUMsSUF4T0wsRUF3T1U7QUFDekJ2QyxjQUFNUSxZQUFOLENBQW1CQyxTQUFuQixDQUE2QkMsUUFBN0IsQ0FBc0M2QixJQUF0QyxHQUE2Q0EsSUFBN0M7QUFDQSxlQUFPQSxJQUFQO0FBQ0gsS0EzT2tCO0FBNE9uQjZMLHNCQTVPbUIsOEJBNE9BcE8sS0E1T0EsRUE0T095RCxNQTVPUCxFQTRPYztBQUM3QnpELGNBQU1RLFlBQU4sQ0FBbUJDLFNBQW5CLENBQTZCQyxRQUE3QixDQUFzQytDLE1BQXRDLEdBQStDQSxNQUEvQztBQUNBLGVBQU9BLE1BQVA7QUFDSCxLQS9Pa0I7QUFnUG5CNEssb0JBaFBtQiw0QkFnUEZyTyxLQWhQRSxFQWdQSzhHLElBaFBMLEVBZ1BVO0FBQ3pCOUcsY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJDLFFBQTdCLENBQXNDb0csSUFBdEMsR0FBNkNBLElBQTdDO0FBQ0EsZUFBT0EsSUFBUDtBQUNILEtBblBrQjtBQW9QbkJ3SCx3QkFwUG1CLGdDQW9QRXRPLEtBcFBGLEVBb1BTcUksUUFwUFQsRUFvUGtCO0FBQ2pDckksY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJDLFFBQTdCLENBQXNDMkgsUUFBdEMsR0FBaURBLFFBQWpEO0FBQ0EsZUFBT0EsUUFBUDtBQUNILEtBdlBrQjtBQXdQbkJrRyx3QkF4UG1CLGdDQXdQRXZPLEtBeFBGLEVBd1BTa0ksUUF4UFQsRUF3UGtCO0FBQ2pDbEksY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJDLFFBQTdCLENBQXNDd0gsUUFBdEMsR0FBaURBLFFBQWpEO0FBQ0EsZUFBT0EsUUFBUDtBQUNILEtBM1BrQjtBQTRQbkJzRywyQkE1UG1CLG1DQTRQS3hPLEtBNVBMLEVBNFBZd0QsV0E1UFosRUE0UHdCO0FBQ3ZDeEQsY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJDLFFBQTdCLENBQXNDOEMsV0FBdEMsR0FBb0RBLFdBQXBEO0FBQ0EsZUFBT0EsV0FBUDtBQUNILEtBL1BrQjtBQWdRbkJpTCx3QkFoUW1CLGdDQWdRRXpPLEtBaFFGLEVBZ1FTaUgsUUFoUVQsRUFnUWtCO0FBQ2pDakgsY0FBTVEsWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkJDLFFBQTdCLENBQXNDdUcsUUFBdEMsR0FBaURBLFFBQWpEO0FBQ0EsaUNBQVMseUJBQVQsRUFBb0NBLFdBQVcsRUFBL0M7QUFDQSxlQUFPQSxRQUFQO0FBQ0gsS0FwUWtCO0FBcVFuQnlILHFCQXJRbUIsNkJBcVFEMU8sS0FyUUMsRUFxUU15QyxNQXJRTixFQXFRYTtBQUM1QnpDLGNBQU1RLFlBQU4sQ0FBbUJZLGNBQW5CLEdBQW9DcUIsTUFBcEM7QUFDQSxlQUFPQSxNQUFQO0FBQ0gsS0F4UWtCO0FBeVFuQk0sa0JBelFtQiwwQkF5UUovQyxLQXpRSSxFQXlRRzJPLFNBelFILEVBeVFhO0FBQzVCM08sY0FBTVEsWUFBTixDQUFtQnVDLGNBQW5CLEdBQW9DNEwsU0FBcEM7QUFDQSxlQUFPQSxTQUFQO0FBQ0gsS0E1UWtCO0FBNlFuQjdMLG1CQTdRbUIsMkJBNlFIOUMsS0E3UUcsRUE2UUkyTyxTQTdRSixFQTZRYztBQUM3QjNPLGNBQU1RLFlBQU4sQ0FBbUJzQyxlQUFuQixHQUFxQzZMLFNBQXJDO0FBQ0EsZUFBT0EsU0FBUDtBQUNILEtBaFJrQjtBQWlSbkJDLGFBalJtQixxQkFpUlQ1TyxLQWpSUyxFQWlSRnlDLE1BalJFLEVBaVJLO0FBQ3BCekMsY0FBTVEsWUFBTixDQUFtQjhELGFBQW5CLENBQWlDQyxPQUFqQyxDQUF5Q1AsSUFBekMsQ0FBOEN2QixNQUE5QztBQUNBLGVBQU9BLE1BQVA7QUFDSCxLQXBSa0I7QUFxUm5Cb00sY0FyUm1CLHNCQXFSUjdPLEtBclJRLEVBcVJEOE8sR0FyUkMsRUFxUkc7QUFDbEI5TyxjQUFNUSxZQUFOLENBQW1CWSxjQUFuQixDQUFrQ04sUUFBbEMsQ0FBMkNrRCxJQUEzQyxDQUFnRDhLLEdBQWhEO0FBQ0EsZUFBT0EsR0FBUDtBQUNILEtBeFJrQjtBQXlSbkJDLGVBelJtQix1QkF5UlAvTyxLQXpSTyxFQXlSQThPLEdBelJBLEVBeVJJO0FBQ25COU8sY0FBTVEsWUFBTixDQUFtQlksY0FBbkIsQ0FBa0NMLFNBQWxDLENBQTRDaUQsSUFBNUMsQ0FBaUQ4SyxHQUFqRDtBQUNBLGVBQU9BLEdBQVA7QUFDSCxLQTVSa0I7QUE2Um5CRSxjQTdSbUIsc0JBNlJSaFAsS0E3UlEsRUE2UkR5QyxNQTdSQyxFQTZSTTtBQUNyQixZQUFJeUssUUFBUXJKLEVBQUVzSixTQUFGLENBQVluTixNQUFNUSxZQUFOLENBQW1COEQsYUFBbkIsQ0FBaUNDLE9BQTdDLEVBQXNELFVBQVVSLENBQVYsRUFBYTtBQUMzRSxtQkFBT0EsRUFBRXJHLEVBQUYsSUFBUStFLE9BQU8vRSxFQUF0QjtBQUNILFNBRlcsQ0FBWjtBQUdBc0MsY0FBTVEsWUFBTixDQUFtQjhELGFBQW5CLENBQWlDQyxPQUFqQyxDQUF5QzJJLEtBQXpDLEVBQWdEck4sS0FBaEQsR0FBd0Q0QyxPQUFPNUMsS0FBL0Q7QUFDQUcsY0FBTVEsWUFBTixDQUFtQjhELGFBQW5CLENBQWlDQyxPQUFqQyxDQUF5QzJJLEtBQXpDLEVBQWdEcE4sR0FBaEQsR0FBc0QyQyxPQUFPM0MsR0FBN0Q7QUFDQUUsY0FBTVEsWUFBTixDQUFtQjhELGFBQW5CLENBQWlDQyxPQUFqQyxDQUF5QzJJLEtBQXpDLEVBQWdEbk4sS0FBaEQsR0FBd0QwQyxPQUFPMUMsS0FBL0Q7QUFDQSxlQUFPMEMsTUFBUDtBQUNILEtBclNrQjtBQXNTbkJ3TSxnQkF0U21CLHdCQXNTTmpQLEtBdFNNLEVBc1NDeUMsTUF0U0QsRUFzU1E7QUFDdkIsWUFBSXlLLFFBQVFySixFQUFFc0osU0FBRixDQUFZbk4sTUFBTVEsWUFBTixDQUFtQjhELGFBQW5CLENBQWlDQyxPQUE3QyxFQUFzRCxVQUFVUixDQUFWLEVBQWE7QUFDM0UsbUJBQU9BLEVBQUVyRyxFQUFGLElBQVErRSxPQUFPL0UsRUFBdEI7QUFDSCxTQUZXLENBQVo7QUFHQSxZQUFJd1AsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDWmxOLGtCQUFNUSxZQUFOLENBQW1COEQsYUFBbkIsQ0FBaUNDLE9BQWpDLENBQXlDK0ksTUFBekMsQ0FBZ0RKLEtBQWhELEVBQXVELENBQXZEO0FBQ0g7QUFDRCxlQUFPekssTUFBUDtBQUNIO0FBOVNrQixDQUFoQixDOzs7Ozs7Ozs7Ozs7O0FDRkEsSUFBTXpDLHdCQUFRO0FBQ2pCOE0saUJBQWEsS0FESTtBQUVqQmhDLGlCQUFhLEtBRkk7QUFHakJ0SyxrQkFBYztBQUNWK0ksa0JBQVUsSUFEQTtBQUVWM0YsaUJBQVMsRUFGQztBQUdWVSx1QkFBZSxJQUhMO0FBSVZ4Qix5QkFBaUIsS0FKUDtBQUtWQyx3QkFBZ0IsS0FMTjtBQU1WdEMsbUJBQVc7QUFDUDhJLHNCQUFVLElBREg7QUFFUDNCLG9CQUFRO0FBQ0oyQiwwQkFBVSxJQUROO0FBRUpsSix1QkFBTyxDQUZIO0FBR0pDLHdCQUFRO0FBSEosYUFGRDtBQU9QMEoseUJBQWE7QUFDVFQsMEJBQVU7QUFERCxhQVBOO0FBVVBFLG1CQUFPO0FBQ0hGLDBCQUFVO0FBRFAsYUFWQTtBQWFQN0ksc0JBQVU7QUFDTjZJLDBCQUFVLElBREo7QUFFTmpKLHdCQUFRLENBRkY7QUFHTkQsdUJBQU8sQ0FIRDtBQUlOTSx3QkFBUSxDQUpGO0FBS042Qyw2QkFBYSxDQUxQO0FBTU55RCwwQkFBVSxDQU5KO0FBT04xRSxzQkFBTSxDQVBBO0FBUU44RiwwQkFBVSxDQVJKO0FBU05ILDBCQUFVLENBVEo7QUFVTm5CLHVCQUFPLENBVkQ7QUFXTkQsc0JBQU0sQ0FYQTtBQVlOckQsd0JBQVEsRUFaRjtBQWFOakIsMkJBQVc7QUFiTDtBQWJIO0FBTkQsS0FIRztBQXVDakI5QixjQUFVO0FBQ042SSxrQkFBVSxJQURKO0FBRU5sSixlQUFPLENBRkQ7QUFHTkMsZ0JBQVEsQ0FIRjtBQUlOcUcsY0FBTSxLQUpBO0FBS05uRSxtQkFBVyxDQUxMO0FBTU5pRixxQkFBYSxLQU5QO0FBT05ILDZCQUFxQixLQVBmO0FBUU5nQixvQkFBWSxDQVJOO0FBU05rQywyQkFBbUIsQ0FUYjtBQVVOaEgscUJBQWEsQ0FWUDtBQVdOeUQsa0JBQVUsQ0FYSjtBQVlOdEcsZ0JBQVEsQ0FaRjtBQWFONEIsY0FBTSxDQWJBO0FBY044RixrQkFBVSxDQWRKO0FBZU5ILGtCQUFVLENBZko7QUFnQk5uQixlQUFPLENBaEJEO0FBaUJORCxjQUFNLENBakJBO0FBa0JOckQsZ0JBQVEsQ0FsQkY7QUFtQk5zQyxxQkFBYSxLQW5CUDtBQW9CTnlHLDBCQUFrQjtBQXBCWixLQXZDTztBQTZEakIvQyxXQUFPO0FBQ0hGLGtCQUFVO0FBRFAsS0E3RFU7QUFnRWpCdEcsWUFBUTtBQUNKc0csa0JBQVUsSUFETjtBQUVKMUMsa0JBQVUsQ0FGTjtBQUdKL0IscUJBQWE7QUFIVCxLQWhFUztBQXFFakJrRixpQkFBYTtBQUNUVCxrQkFBVTtBQURELEtBckVJO0FBd0VqQjNCLFlBQVE7QUFDSjJCLGtCQUFVLElBRE47QUFFSmxKLGVBQU8sQ0FGSDtBQUdKQyxnQkFBUTtBQUhKO0FBeEVTLENBQWQsQzs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7O2tCQUVlO0FBQ1gvQixVQURXLGtCQUNKYixFQURJLEVBQ0FXLFFBREEsRUFDVVYsY0FEVixFQUMwQkMsYUFEMUIsRUFDd0M7QUFDL0MsZUFBTyxjQUFJQyxJQUFKLENBQVNXLEdBQVQsQ0FBYSxvQkFBb0JkLEVBQXBCLEdBQXlCLFdBQXRDLEVBQW1EVyxRQUFuRCxFQUNGTixJQURFLENBQ0csVUFBQ0MsUUFBRDtBQUFBLG1CQUFjTCxlQUFlSyxTQUFTQyxJQUF4QixDQUFkO0FBQUEsU0FESCxFQUVGQyxLQUZFLENBRUksVUFBQ0MsS0FBRDtBQUFBLG1CQUFXUCxjQUFjTyxNQUFNRixJQUFwQixDQUFYO0FBQUEsU0FGSixDQUFQO0FBR0g7QUFMVSxDOzs7Ozs7Ozs7Ozs7O2tCQ0ZEO0FBQ1ZhLGFBQVM7QUFDTG9RLGlCQURLLHFCQUNLbFIsUUFETCxFQUNlO0FBQ2hCLGdCQUFJQSxTQUFTbVIsVUFBYixFQUF5QjtBQUNyQixxQkFBSyxJQUFJaFIsS0FBVCxJQUFrQkgsU0FBU29SLE1BQTNCLEVBQW1DO0FBQy9CLHdCQUFJcFIsU0FBU29SLE1BQVQsQ0FBZ0JDLGNBQWhCLENBQStCbFIsS0FBL0IsQ0FBSixFQUEyQztBQUN2Q0gsaUNBQVNvUixNQUFULENBQWdCalIsS0FBaEIsRUFBdUJtUixPQUF2QixDQUErQixVQUFDQyxlQUFELEVBQW9CO0FBQy9DQyxpQ0FBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCSCxlQUF0QjtBQUNILHlCQUZEO0FBR0g7QUFDSjtBQUNKLGFBUkQsTUFRTztBQUNIQyxxQkFBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCMVIsU0FBU29SLE1BQS9CO0FBQ0g7QUFDSjtBQWJJO0FBREMsQzs7Ozs7OztBQ0FkO0FBQ0E7OztBQUdBO0FBQ0Esb0NBQXFDLGdDQUFnQyx5QkFBeUIsR0FBRyxVQUFVLDhCQUE4Qiw0QkFBNEIsR0FBRyxjQUFjLG1CQUFtQixnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLG9CQUFvQixxQkFBcUIsb0JBQW9CLEdBQUcsNEJBQTRCLHNCQUFzQix1QkFBdUIsR0FBRywrQkFBK0IsaURBQWlELHlDQUF5QyxHQUFHLCtDQUErQyxvQkFBb0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsc0JBQXNCLEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIseUJBQXlCLDBCQUEwQixHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxjQUFjLCtCQUErQix5QkFBeUIsNkJBQTZCLGlCQUFpQix3RUFBd0UsOEJBQThCLHFCQUFxQiw2QkFBNkIsR0FBRyw0QkFBNEIsb0JBQW9CLEdBQUcsWUFBWSw2QkFBNkIsR0FBRyxvQkFBb0IseUNBQXlDLHNDQUFzQyxxQ0FBcUMsaUNBQWlDLEdBQUcsZUFBZSxpQkFBaUIsd0VBQXdFLDhCQUE4QixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyx3QkFBd0IsOEJBQThCLEdBQUcsc0JBQXNCLCtDQUErQyxHQUFHLFdBQVcsbUJBQW1CLHNCQUFzQix5Q0FBeUMsaUJBQWlCLEdBQUc7O0FBRTV3RDs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDRDQUE2QyxzQkFBc0IsR0FBRywwQ0FBMEMscUJBQXFCLEdBQUcsMkJBQTJCLHFDQUFxQyxHQUFHLHFDQUFxQyxrQ0FBa0MsbUNBQW1DLG9DQUFvQyxvQkFBb0IsR0FBRyxvQ0FBb0MsbUNBQW1DLG9DQUFvQyx3QkFBd0IsR0FBRyxxQ0FBcUMsb0NBQW9DLHdCQUF3QixHQUFHOztBQUUxbEI7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSwyR0FBNEcsa0dBQWtHOztBQUU5TTs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLG1UQUFvVCxzR0FBc0c7O0FBRTFaOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsZ0RBQWlELDZCQUE2QixHQUFHLFVBQVUsbUpBQW1KLE1BQU0sV0FBVyx1VUFBdVUsdUNBQXVDLCt5QkFBK3lCLDhCQUE4Qix1d0JBQXV3Qix3Q0FBd0MscWdEQUFxZ0QsK0JBQStCLHlNQUF5TSxzQ0FBc0MsNCtDQUE0K0MsNkJBQTZCLGd2QkFBZ3ZCLHFCQUFxQixpR0FBaUcsZ0NBQWdDLDRGQUE0Riw4QkFBOEIsbUdBQW1HLG9CQUFvQixpR0FBaUcsK0JBQStCLDRGQUE0Riw2QkFBNkIsNGxDQUE0bEMsU0FBUyxrQkFBa0IsZ0JBQWdCLFFBQVEsa0JBQWtCLG1HQUFtRyxvQkFBb0Isd0JBQXdCLDZCQUE2QiwwQ0FBMEMsZ0NBQWdDLG9NQUFvTSwwQ0FBMEMsdUVBQXVFLGlHQUFpRywwREFBMEQsMkNBQTJDLHVFQUF1RSw4QkFBOEIseUJBQXlCLHFCQUFxQixpQkFBaUIsNkJBQTZCLDBCQUEwQix3QkFBd0IsYUFBYSxxQkFBcUIsMEJBQTBCLGlEQUFpRCxrQkFBa0IsaUJBQWlCLDRCQUE0QiwyQ0FBMkMsaUJBQWlCLDBCQUEwQix5REFBeUQsNkNBQTZDLHdEQUF3RCwyQ0FBMkMsd0NBQXdDLHVKQUF1SixpQkFBaUIsYUFBYSxvQkFBb0Isd0JBQXdCLDRJQUE0SSxtSUFBbUksbUNBQW1DLG1MQUFtTCwwQkFBMEIscUJBQXFCLGlCQUFpQixhQUFhLHdCQUF3QiwyQkFBMkIsb0ZBQW9GLDBCQUEwQixrRkFBa0YsaUNBQWlDLDBEQUEwRCxpQkFBaUIsYUFBYSwwQkFBMEIsdURBQXVELHVCQUF1Qix3QkFBd0IsbURBQW1ELGlCQUFpQixpQ0FBaUMsd0VBQXdFLG9DQUFvQywyREFBMkQsZ0NBQWdDLDJFQUEyRSw0Q0FBNEMsdURBQXVELG1EQUFtRCx5REFBeUQsaUJBQWlCLGlDQUFpQywyRUFBMkUsd0VBQXdFLGtFQUFrRSxtSUFBbUksc0NBQXNDLHlCQUF5Qiw4SUFBOEkscUNBQXFDLHlCQUF5QixtSEFBbUgscUJBQXFCLEVBQUUsa0lBQWtJLHlGQUF5RiwwQ0FBMEMseUJBQXlCLG9EQUFvRCxxSEFBcUgsbUVBQW1FLG9FQUFvRSxxRkFBcUYsc0dBQXNHLHFIQUFxSCxnSUFBZ0ksMEJBQTBCLDBDQUEwQyxtRUFBbUUsR0FBRywyQkFBMkIsRUFBRSxpQkFBaUIsNEJBQTRCLGtEQUFrRCw0Q0FBNEMseUJBQXlCLE9BQU8sb01BQW9NLCtDQUErQyxnREFBZ0Qsd0RBQXdELHdFQUF3RSw2QkFBNkIseUJBQXlCLHFCQUFxQixpQkFBaUIsYUFBYSxTQUFTLHFEQUFxRCxtQ0FBbUMsU0FBUyx5Q0FBeUM7O0FBRWhrYzs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFrQyw0QkFBNEIscUJBQXFCLHVCQUF1Qix1REFBdUQsOENBQThDLHNDQUFzQyx5QkFBeUIsMEJBQTBCLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLEdBQUcsb0JBQW9CLHlCQUF5QixHQUFHLHNCQUFzQixrQkFBa0IsZ0NBQWdDLDhCQUE4QixzQkFBc0Isa0JBQWtCLGdDQUFnQyw4QkFBOEIsbUJBQW1CLGtCQUFrQixnQ0FBZ0MsOEJBQThCLHNCQUFzQixrQkFBa0IsZ0NBQWdDLDhCQUE4QixxQkFBcUIsa0JBQWtCLGdDQUFnQyw4QkFBOEIsVUFBVSx5SUFBeUksS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxzVEFBc1QsVUFBVSwwREFBMEQsa0NBQWtDLDJCQUEyQiw2QkFBNkIscUVBQXFFLDZEQUE2RCxvREFBb0QsaURBQWlELCtDQUErQyxnREFBZ0QsNENBQTRDLCtCQUErQixnQ0FBZ0MsOEJBQThCLGtDQUFrQyw0QkFBNEIsU0FBUyw4QkFBOEIsK0JBQStCLFNBQVMsZ0NBQWdDLHdCQUF3QixzQ0FBc0MsMENBQTBDLGdDQUFnQyx3QkFBd0Isc0NBQXNDLDBDQUEwQyw2QkFBNkIsd0JBQXdCLHNDQUFzQywwQ0FBMEMsZ0NBQWdDLHdCQUF3QixzQ0FBc0MsMENBQTBDLCtCQUErQix3QkFBd0Isc0NBQXNDLDBDQUEwQyxzR0FBc0csb0JBQW9CLHVCQUF1QixhQUFhLDBCQUEwQix3Q0FBd0MsdUJBQXVCLDJDQUEyQyx1REFBdUQsMkVBQTJFLDhCQUE4QixvREFBb0QsbUVBQW1FLGFBQWEsU0FBUyw4Q0FBOEM7O0FBRXZ1SDs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDBDQUEyQyx1Q0FBdUMsR0FBRyxVQUFVLGlKQUFpSixLQUFLLFdBQVcsaVFBQWlRLFVBQVUsa1FBQWtRLFVBQVUseUdBQXlHLDZDQUE2QyxTQUFTLDBGQUEwRixvQkFBb0IsdUJBQXVCLGNBQWMsb0JBQW9CLHdCQUF3QiwyQ0FBMkMsYUFBYSxrREFBa0QsOENBQThDLGFBQWEsdUJBQXVCLDhCQUE4QiwwQ0FBMEMsMkVBQTJFLGFBQWEsU0FBUyw4Q0FBOEM7O0FBRXhnRDs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLCtVQUFnVix1R0FBdUc7O0FBRXZiOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsZ0RBQWlELDZCQUE2QixHQUFHLFVBQVUsb0pBQW9KLE1BQU0sV0FBVywwVEFBMFQsc0NBQXNDLDJIQUEySCx1QkFBdUIsK3VCQUErdUIsNkJBQTZCLHVWQUF1Vix1QkFBdUIsNmNBQTZjLHVDQUF1QywySEFBMkgsdUJBQXVCLG05Q0FBbTlDLDhCQUE4Qix5T0FBeU8scUNBQXFDLHlIQUF5SCxxQkFBcUIsaThDQUFpOEMsNEJBQTRCLDhpQkFBOGlCLHNDQUFzQywrREFBK0Qsb0NBQW9DLGtQQUFrUCxrQ0FBa0Msc01BQXNNLEdBQUcsZ0xBQWdMLGtDQUFrQyxtTUFBbU0sR0FBRywybEJBQTJsQixrQ0FBa0MsK0RBQStELHdDQUF3QyxxUEFBcVAsc0JBQXNCLGlHQUFpRyx3QkFBd0IsZ0tBQWdLLFNBQVMsa0JBQWtCLGdCQUFnQixRQUFRLGtCQUFrQixnTkFBZ04sMkJBQTJCLDBEQUEwRCw0QkFBNEIsMENBQTBDLGdDQUFnQyxvTUFBb00sdUNBQXVDLHVNQUF1TSw4QkFBOEIseUJBQXlCLHFCQUFxQixpQkFBaUIsNkJBQTZCLGNBQWMsMERBQTBELDZDQUE2QyxrQkFBa0IsYUFBYSxxQkFBcUIsNENBQTRDLHNFQUFzRSx5REFBeUQsdUVBQXVFLGlCQUFpQiwyQ0FBMkMsc0VBQXNFLHlEQUF5RCx1RUFBdUUsNkZBQTZGLGlCQUFpQixhQUFhLG9CQUFvQix3QkFBd0IsNElBQTRJLG1JQUFtSSxtQ0FBbUMsbUxBQW1MLDBCQUEwQixxQkFBcUIsaUJBQWlCLGFBQWEsd0JBQXdCLDJCQUEyQixvRkFBb0YsMEJBQTBCLGtGQUFrRixpQ0FBaUMsMERBQTBELGlCQUFpQixhQUFhLDBCQUEwQix1REFBdUQsdUJBQXVCLHdCQUF3QiwrREFBK0QsaUJBQWlCLGlDQUFpQyx3RUFBd0Usb0NBQW9DLDJEQUEyRCw0QkFBNEIsNkRBQTZELGlFQUFpRSxtREFBbUQseUJBQXlCLE9BQU8sb0RBQW9ELGdEQUFnRCx3RUFBd0UsNkJBQTZCLHlCQUF5QixxQkFBcUIsZ0JBQWdCLGlGQUFpRixxQkFBcUIsRUFBRSxpQkFBaUIsYUFBYSxTQUFTLHFEQUFxRCxtQ0FBbUMsU0FBUyx5Q0FBeUM7O0FBRW5oWjs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHlHQUEwRyxxR0FBcUc7O0FBRS9NOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLGtCQUFrQixtQkFBbUIseUJBQXlCLGFBQWEsMEJBQTBCLEdBQUcsVUFBVSw0SEFBNEgsS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsNFdBQTRXLHdCQUF3Qix5QkFBeUIsK0JBQStCLG1CQUFtQixnQ0FBZ0MsU0FBUyx3Q0FBd0MsbUJBQW1CLGtCQUFrQiwyQkFBMkIsbUJBQW1CLHdCQUF3Qiw4QkFBOEIsaUJBQWlCLGFBQWEscUJBQXFCLHlCQUF5QixpREFBaUQsMEJBQTBCLGlEQUFpRCwwQkFBMEIsMkVBQTJFLGdDQUFnQyx3R0FBd0cscUJBQXFCLGlCQUFpQixhQUFhLDJCQUEyQix3QkFBd0IsNEJBQTRCLHVFQUF1RSxhQUFhLHVCQUF1Qiw2Q0FBNkMsYUFBYSx1QkFBdUIsc0JBQXNCLHVEQUF1RCxvQ0FBb0Msb0NBQW9DLDZDQUE2QyxrQ0FBa0MscU9BQXFPLCtDQUErQyw0Q0FBNEMsMGxCQUEwbEIseUJBQXlCLHNCQUFzQiw0Q0FBNEMsb0RBQW9ELDBJQUEwSSxxQkFBcUIscUVBQXFFLHVEQUF1RCx1Q0FBdUMsaUZBQWlGLGtEQUFrRCxxREFBcUQsc0ZBQXNGLG1EQUFtRCx3REFBd0QsOERBQThELG9IQUFvSCx5QkFBeUIsT0FBTywwREFBMEQsNEdBQTRHLHFCQUFxQixFQUFFLGdEQUFnRCx1REFBdUQsOEVBQThFLHFCQUFxQixFQUFFLGlCQUFpQixhQUFhLFNBQVMsOENBQThDOztBQUV0Mkk7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7OztBQzlCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUMvQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7OztBQzlCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzNFQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pVQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzNCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN0Q0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5REEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN2VUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxrREFBa0QsYUFBYSxZQUFZLGdCQUFnQjtBQUMzRixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMxREEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsK0NBQStDLGFBQWEsWUFBWSxnQkFBZ0I7QUFDeEYsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyT0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMxSUEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8wLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lZGl0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWYxY2Y4NjY4IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2VkaXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGRhc2hib2FyZFxcXFxtb2R1bGVzXFxcXHNjb3V0aW5nXFxcXHRvdWNoZXNcXFxcZWRpdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBlZGl0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mMWNmODY2OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWYxY2Y4NjY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9lZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTY2Zjg1ZTdkIXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGhlYWRlclxcXFxwYWdlSGVhZGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhZ2VIZWFkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjZmODVlN2RcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIHt7dGl0bGV9fVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cclxuICAgICAgICAgICAgICAgIHt7JHQoYnJlYWRjcnVtYi50aXRsZSl9fVxyXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxyXG4gICAgLmFkbWluLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA5N3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYWdlSGVhZGVyLnZ1ZT80Yjg5MTkyMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFkbWluLWhlYWRlciB7XFxuICBoZWlnaHQ6IDk3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYWRtaW4taGVhZGVyIC5yb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjZmODVlN2RcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyMDQ2MTQxOFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcImVuXCI6IHtcclxuICAgICAgICBcInNjb3V0aW5nc1wiOiB7XHJcbiAgICAgICAgICAgIFwiY3JlYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgU2NvdXRpbmcgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJUaGUgU2NvdXRpbmcgd2FzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIlRoZSBTY291dGluZyB3YXMgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcclxuICAgICAgICAgICAgXCJub3RfZm91bmRcIjogXCJUaGUgU2NvdXRpbmcgZG9lc24ndCBleGlzdFwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOYW1lXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBcImNoYW1waW9uc2hpcFwiOiBcIkNoYW1waW9uc2hpcFwiLFxyXG4gICAgICAgICAgICBcImV2ZW50XCI6IFwiRXZlbnRcIixcclxuICAgICAgICAgICAgXCJsZWZ0X2F0aGxldGVcIjogXCJMZWZ0IEF0aGxldGVcIixcclxuICAgICAgICAgICAgXCJyaWdodF9hdGhsZXRlXCI6IFwiUmlnaHQgQXRobGV0ZVwiLFxyXG4gICAgICAgICAgICBcInZpZGVvX3NyY1wiOiBcIlZpZGVvIFNvdXJjZVwiLFxyXG4gICAgICAgICAgICBcImFjdGlvbnNcIjogXCJBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0X29wdGlvblwiOiBcIlNlbGVjdCBhbiBvcHRpb25cIixcclxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogXCJVcGRhdGVcIixcclxuICAgICAgICAgICAgXCJuZXdcIjogXCJOZXcgU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJkZWxldGVfbWVzc2FnZVwiOiBcIkFyZSB5b3Ugc3VyZT8gdGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZVwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9zY291dGluZ1wiOiBcIkRlbGV0ZSBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcInNjb3V0aW5nX2luZm9cIjogXCJTY291dGluZyBJbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBcInVwZGF0ZV9zY291dGluZ1wiOiBcIlVwZGF0ZSBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcIm1ha2VcIjogXCJNYWtlIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwic3RhcnRfdG91Y2hcIjogXCJTdGFydCBUb3VjaFwiLFxyXG4gICAgICAgICAgICBcImVuZF90b3VjaFwiOiBcIkVuZCBUb3VjaFwiLFxyXG4gICAgICAgICAgICBcInRvb2dsZV90aW1lbGluZVwiOiBcIlRvb2dsZSBUaW1lbGluZVwiLFxyXG4gICAgICAgICAgICBcInRvb2dsZV9pbnNwZWN0b3JcIjogXCJUb29nbGUgSW5zcGVjdG9yXCIsXHJcbiAgICAgICAgICAgIFwiaW5zcGVjdG9yXCI6IFwiSW5zcGVjdG9yXCIsXHJcbiAgICAgICAgICAgIFwidGltZWxpbmVcIjogXCJUaW1lbGluZVwiLFxyXG4gICAgICAgICAgICBcImVuZF9hY3Rpb25cIjogXCJFbmQgQWNjacOzblwiLFxyXG4gICAgICAgICAgICBcInBhdXNlXCI6IFwiUGF1c2VcIixcclxuICAgICAgICAgICAgXCJwbGF5XCI6IFwiUGxheVwiLFxyXG4gICAgICAgICAgICBcImxlZnRfYWN0aW9uc1wiOiBcIkxlZnQgQXRobGV0ZSBBY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRfYWN0aW9uc1wiOiBcIlJpZ2h0IEF0aGxldGUgQWN0aW9uc1wiLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGl0bGVcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIkNvbG9yXCIsXHJcbiAgICAgICAgICAgIFwic3RhcnRcIjogXCJTdGFydCAoc2VnKVwiLFxyXG4gICAgICAgICAgICBcImVuZFwiOiBcIkVuZCAoc2VnKVwiLFxyXG4gICAgICAgICAgICBcInNhdmVcIjogXCJTYXZlIENoYW5nZXNcIixcclxuICAgICAgICAgICAgXCJjYW5jZWxcIjogXCJDYW5jZWwgQ2hhbmdlc1wiLFxyXG4gICAgICAgICAgICBcInRvdWNoZXNfY2FudF9vdmVybGFwXCI6IFwiVG91Y2hlcyBjYW50IG92ZXJsYXBcIixcclxuICAgICAgICAgICAgXCJ0b3VjaF9vdmVybGFwX3dpdGhcIjogXCJUaGUgdG91Y2ggdGhhdCB5b3UgYXJlIHRyeWluZyB0byBhZGQgb3ZlcmxhcCB3aXRoXCIsXHJcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lcnJvclwiOiBcIkVWYWxpZGF0aW9uIEVycm9yXCIsXHJcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lbmRfZ3JlYXRlclwiOiBcIlRoZSBlbmQgb2YgdGhlIHRvdWNoIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBzdGFydFwiLFxyXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfbXNnXCI6IFwie3RpdGxlfSB0aGF0IHN0YXJ0cyBvbiB7c3RhcnR9IGFuZCBlbmRzIG9uIHtlbmR9XCIsXHJcbiAgICAgICAgICAgIFwidG91Y2hlc1wiOiBcIlRvdWNoZXNcIixcclxuICAgICAgICAgICAgXCJzdGFydF9hdFwiOiBcIlN0YXJ0IGF0IHtzdGFydH1cIixcclxuICAgICAgICAgICAgXCJlbmRfYXRcIjogXCJFbmQgYXQge2VuZH1cIixcclxuICAgICAgICAgICAgXCJub190b3VjaGVzXCI6IFwiVGhlcmUgYXJlIG5vIHJlZ2lzdGVyZWQgdG9jdWhlc1wiLFxyXG4gICAgICAgICAgICBcInNlbGVjdFwiOiBcIlNlbGVjdCBTY291dGluZ3NcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJDcmVhdGUgU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJzY291dGluZ3NcIjogXCJTY291dGluZ3NcIixcclxuICAgICAgICAgICAgXCJtYWtpbmdfcmVwb3J0XCI6IFwiUHJvY2Vzc2luZyBSZXBvcnQgcGxlYXNlIHdhaXRcIixcclxuICAgICAgICAgICAgXCJyZXBvcnRcIjogXCJTZWUgUmVwb3J0XCIsXHJcbiAgICAgICAgICAgIFwiZXJyb3JfcmVwb3J0XCI6IFwiQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSBjcmVhdGluZyB0aGUgcmVwb3J0XCIsXHJcbiAgICAgICAgICAgIFwibGlzdFwiOiBcIkRhdGEgTGlzdFwiLFxyXG4gICAgICAgICAgICBcInJlc3VsdHNcIjogXCJSZXN1bHRzXCIsXHJcbiAgICAgICAgICAgIFwiYXBwX21vYmlsZVwiOiBcIk1vYmlsZSBBcHBcIixcclxuICAgICAgICAgICAgXCJvdGhlcl9zb3VyY2VzXCI6IFwiT3RoZXIgU291cmNlc1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiZXNcIjoge1xyXG4gICAgICAgIFwic2NvdXRpbmdzXCI6IHtcclxuICAgICAgICAgICAgXCJjcmVhdGVkX3N1Y2Nlc3NmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBjcmVhZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwidXBkYXRlZF9zdWNjZXNzZnVsbHlcIjogXCJFbCBzY291dGluZyBmdWUgYWN0dWFsaXphZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwiZGVsZXRlZF9zdWNjZXNmdWxseVwiOiBcIkVsIHNjb3V0aW5nIGZ1ZSBlbGltaW5hZG8gc2F0aXNmYWN0b3JpYW1lbnRlXCIsXHJcbiAgICAgICAgICAgIFwibm90X2ZvdW5kXCI6IFwiRWwgc2NvdXRpbmcgbm8gZXhpc3RlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vbWJyZVwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcGNpw7NuXCIsXHJcbiAgICAgICAgICAgIFwiY2hhbXBpb25zaGlwXCI6IFwiQ2FtcGVvbmF0b1wiLFxyXG4gICAgICAgICAgICBcImV2ZW50XCI6IFwiRXZlbnRvXCIsXHJcbiAgICAgICAgICAgIFwibGVmdF9hdGhsZXRlXCI6IFwiQXRsZXRhIGRlIGxhIGl6cXVpZXJkYVwiLFxyXG4gICAgICAgICAgICBcInJpZ2h0X2F0aGxldGVcIjogXCJBdGxldGEgZGUgbGEgZGVyZWNoYVwiLFxyXG4gICAgICAgICAgICBcInZpZGVvX3NyY1wiOiBcIkZ1ZW50ZSBkZWwgdmlkZW9cIixcclxuICAgICAgICAgICAgXCJhY3Rpb25zXCI6IFwiQWNjaW9uZXNcIixcclxuICAgICAgICAgICAgXCJzZWxlY3Rfb3B0aW9uXCI6IFwiU2VsZWNjaW9uYSB1bmEgb3BjacOzblwiLFxyXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBcIkFjdHVhbGl6YXJcIixcclxuICAgICAgICAgICAgXCJuZXdcIjogXCJOdWV2byBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9tZXNzYWdlXCI6IFwiwr9Fc3RhcyBTZWd1cm8/IGVzdGEgYWNjacOzbiBubyBzZSBwdWVkZSBkZXNoYWNlclwiLFxyXG4gICAgICAgICAgICBcImRlbGV0ZV9zY291dGluZ1wiOiBcIkVsaW1pbmFyIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwic2NvdXRpbmdfaW5mb1wiOiBcIkluZm9ybWFjacOzbiBkZWwgU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJ1cGRhdGVfc2NvdXRpbmdcIjogXCJBY3R1YWxpemFyIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwibWFrZVwiOiBcIkhhY2VyIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwic3RhcnRfdG91Y2hcIjogXCJJbmljaWFyIFRvcXVlXCIsXHJcbiAgICAgICAgICAgIFwiZW5kX3RvdWNoXCI6IFwiRmluYWxpemFyIFRvcXVlXCIsXHJcbiAgICAgICAgICAgIFwidG9vZ2xlX3RpbWVsaW5lXCI6IFwiVG9vZ2xlIFRpbWVsaW5lXCIsXHJcbiAgICAgICAgICAgIFwidG9vZ2xlX2luc3BlY3RvclwiOiBcIlRvb2dsZSBJbnNwZWN0b3JcIixcclxuICAgICAgICAgICAgXCJpbnNwZWN0b3JcIjogXCJJbnNwZWN0b3JcIixcclxuICAgICAgICAgICAgXCJ0aW1lbGluZVwiOiBcIlRpbWVsaW5lXCIsXHJcbiAgICAgICAgICAgIFwiZW5kX2FjdGlvblwiOiBcIkZpbmFsaXphciBBY2Npw7NuXCIsXHJcbiAgICAgICAgICAgIFwicGF1c2VcIjogXCJQYXVzYXJcIixcclxuICAgICAgICAgICAgXCJwbGF5XCI6IFwiUmVwcm9kdWNpclwiLFxyXG4gICAgICAgICAgICBcImxlZnRfYWN0aW9uc1wiOiBcIkFjY2lvbmVzIGRlbCBBdGxldGEgZGUgbGEgaXpxdWllcmRhXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRfYWN0aW9uc1wiOiBcIkFjY2lvbmVzIGRlbCBBdGxldGEgZGUgbGEgZGVyZWNoYVwiLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGl0dWxvXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCJDb2xvclwiLFxyXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwiSW5pY2lvIChzZWcpXCIsXHJcbiAgICAgICAgICAgIFwiZW5kXCI6IFwiRmluIChzZWcpXCIsXHJcbiAgICAgICAgICAgIFwic2F2ZVwiOiBcIkd1YXJkYXIgQ2FtYmlvc1wiLFxyXG4gICAgICAgICAgICBcImNhbmNlbFwiOiBcIkNhbmNlbGFyIENhbWJpb3NcIixcclxuICAgICAgICAgICAgXCJ0b3VjaGVzX2NhbnRfb3ZlcmxhcFwiOiBcIkxvcyB0b3F1ZXMgbm8gcHVlZGVuIHNvYnJlcG9uZXJzZVwiLFxyXG4gICAgICAgICAgICBcInRvdWNoX292ZXJsYXBfd2l0aFwiOiBcIkVsIHRvcXVlIHF1ZSB0cmF0YXMgZGUgYcOxYWRpciBzZSBzdXBlcnBvbmUgY29uXCIsXHJcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lcnJvclwiOiBcIkVycm9yIGRlIFZhbGlkYWNpw7NuXCIsXHJcbiAgICAgICAgICAgIFwidmFsaWRhdGlvbl9lbmRfZ3JlYXRlclwiOiBcIkVsIGZpbmFsIGRlbCB0b3F1ZSBkZWJlIHNlciBtYXlvciBhbCBpbmljaW9cIixcclxuICAgICAgICAgICAgXCJ0b3VjaF9vdmVybGFwX21zZ1wiOiBcInt0aXRsZX0gcXVlIGVtcGllemEgZW4ge3N0YXJ0fSB5IHRlcm1pbmEgZW4ge2VuZH1cIixcclxuICAgICAgICAgICAgXCJ0b3VjaGVzXCI6IFwiVG9xdWVzXCIsXHJcbiAgICAgICAgICAgIFwic3RhcnRfYXRcIjogXCJJbmljaWEgZW4ge3N0YXJ0fVwiLFxyXG4gICAgICAgICAgICBcImVuZF9hdFwiOiBcIkZpbmFsaXphIGVuIHtlbmR9XCIsXHJcbiAgICAgICAgICAgIFwibm9fdG91Y2hlc1wiOiBcIk5vIGhheSB0b3F1ZXMgcmVnaXN0cmFkb3NcIixcclxuICAgICAgICAgICAgXCJzZWxlY3RcIjogXCJTZWxlY2Npb25hciBTY291dGluZ3NcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVcIjogXCJDcmVhciBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcInNjb3V0aW5nc1wiOiBcIlNjb3V0aW5nc1wiLFxyXG4gICAgICAgICAgICBcIm1ha2luZ19yZXBvcnRcIjogXCJQcm9jZXNhbmRvIFJlcG9ydGUgcG9yIGZhdm9yIGVzcGVyYVwiLFxyXG4gICAgICAgICAgICBcInJlcG9ydFwiOiBcIlZlciBSZXBvcnRlXCIsXHJcbiAgICAgICAgICAgIFwiZXJyb3JfcmVwb3J0XCI6IFwiT2N1cnJpbyB1biBlcnJvciBpbmVzcGVyYWRvIGFsIHByb2Nlc2FyIGVsIHJlcG9ydGVcIixcclxuICAgICAgICAgICAgXCJsaXN0XCI6IFwiTGlzdGEgZGUgRGF0b3NcIixcclxuICAgICAgICAgICAgXCJyZXN1bHRzXCI6IFwiUmVzdWx0YWRvc1wiLFxyXG4gICAgICAgICAgICBcImFwcF9tb2JpbGVcIjogXCJBcHAgTcOzdmlsXCIsXHJcbiAgICAgICAgICAgIFwib3RoZXJfc291cmNlc1wiOiBcIk90cmFzIEZ1ZW50ZXNcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVDb252ZXJ0ZXIge1xyXG4gICAgc3RhdGljIHRvSEhNTVNTKHNlY3MpIHtcclxuICAgICAgICB2YXIgc2VjX251bSA9IHBhcnNlSW50KHNlY3MsIDEwKTsgLy8gZG9uJ3QgZm9yZ2V0IHRoZSBzZWNvbmQgcGFyYW1cclxuICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKHNlY19udW0gLyAzNjAwKTtcclxuICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSkgLyA2MCk7XHJcbiAgICAgICAgdmFyIHNlY29uZHMgPSBzZWNfbnVtIC0gKGhvdXJzICogMzYwMCkgLSAobWludXRlcyAqIDYwKTtcclxuXHJcbiAgICAgICAgaWYgKGhvdXJzIDwgMTApIHtcclxuICAgICAgICAgICAgaG91cnMgPSBcIjBcIiArIGhvdXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWludXRlcyA8IDEwKSB7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNvbmRzIDwgMTApIHtcclxuICAgICAgICAgICAgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcyArICc6JyArIHNlY29uZHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRvU1Moc2Vjcykge1xyXG4gICAgICAgIHZhciBzZWNfbnVtID0gcGFyc2VJbnQoc2VjcywgMTApOyAvLyBkb24ndCBmb3JnZXQgdGhlIHNlY29uZCBwYXJhbVxyXG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3Ioc2VjX251bSAvIDM2MDApO1xyXG4gICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoc2VjX251bSAtIChob3VycyAqIDM2MDApKSAvIDYwKTtcclxuICAgICAgICB2YXIgc2Vjb25kcyA9IHNlY19udW0gLSAoaG91cnMgKiAzNjAwKSAtIChtaW51dGVzICogNjApO1xyXG5cclxuICAgICAgICBpZiAoc2Vjb25kcyA8IDEwKSB7XHJcbiAgICAgICAgICAgIHNlY29uZHMgPSBcIjBcIiArIHNlY29uZHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWNvbmRzO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvJyArIGlkICsgJz9pbmNsdWRlPWNoYW1waW9uc2hpcC5zcG9ydCxldmVudCxsZWZ0QXRobGV0ZSxyaWdodEF0aGxldGUsdG91Y2hlcy5hY3Rpb25zLmxlZnRUYWdzLHRvdWNoZXMuYWN0aW9ucy5yaWdodFRhZ3MnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvc2NvdXRpbmdzJywgc2NvdXRpbmcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoaWQsIHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnB1dCgnL2FwaS9zY291dGluZ3MvJyArIGlkLCBzY291dGluZywge2VtdWxhdGVIVFRQOiB0cnVlfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmRlbGV0ZSgnL2FwaS9zY291dGluZ3MvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcclxuICAgIH0sXHJcbiAgICByZXBvcnQoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQgKyAnL3JlcG9ydCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBsYXRlc3Qoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzL2xhdGVzdCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdlbmVyYXRlVVVJRCgpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xyXG4gICAgICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdXVpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL3V1aWQuanMiLCJpbXBvcnQgVXVpZFV0aWwgZnJvbSAnLi4vdXRpbHMvVXVpZFV0aWwnXHJcbmltcG9ydCBTZWNvbmRzVXRpbCBmcm9tICcuLi91dGlscy9TZWNvbmRzVXRpbCdcclxuaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vdXRpbHMvVGltZUNvbnZlcnRlcidcclxuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhcnQsIGVuZCwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcclxuICAgICAgICB2YXIgdXVpZCA9IG5ldyBVdWlkVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuaWQgPSB1dWlkLmdlbmVyYXRlVVVJRCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcclxuICAgICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5saW1pdFRleHRZID0gMzAgKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kc1V0aWwgPSBuZXcgU2Vjb25kc1V0aWwoKTtcclxuICAgICAgICB0aGlzLmNhbnZhQ29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxlZnRUYWdzID0gW11cclxuICAgICAgICB0aGlzLnJpZ2h0VGFncyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLmNhbGN1bGF0ZVgoKTtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgPyB0aGlzLnkgOiB0aGlzLmNhbGN1bGF0ZVkoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5jYWxjdWxhdGVXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGVIZWlnaHQoKTtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uLmlkID09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gMTAwO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3Iubm9TdHJva2UoKTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgMTAwKTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLnJlY3QodGhpcy54ICsgdGhpcy53aWR0aCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAxNSk7XHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAxNSk7XHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDI1NSwgMjU1LCAyNTUsIDEwMCk7XHJcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLkJPTEQpO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuc3RhcnQpLCB0aGlzLnggLSAzMCwgdGhpcy5saW1pdFRleHRZLCA2MCwgMjApO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMuZW5kKSwgdGhpcy54IC0gMzAgKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAyMCk7XHJcbiAgICAgICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoaW5zcGVjdG9yLmNvbG9yKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIpKVxyXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMueCwgdGhpcy5saW1pdFRleHRZICsgMjAsIHRoaXMueCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLmxpbWl0VGV4dFkgKyAyMCwgdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5kIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSA+IDApIHtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwoMjU1KTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLmZpbGwodGhpcy5jb2xvci5yZ2JhLnIsIHRoaXMuY29sb3IucmdiYS5nLCB0aGlzLmNvbG9yLnJnYmEuYiwgdGhpcy5jb2xvci5yZ2JhLmFscGhhKTsgIC8vIFVzZSBjb2xvciB2YXJpYWJsZSAnYycgYXMgZmlsbCBjb2xvclxyXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDUxKTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSh0aGlzLmNvbG9yLnJnYmEuciAqIDAuNzUsIHRoaXMuY29sb3IucmdiYS5nICogMC43NSwgdGhpcy5jb2xvci5yZ2JhLmIgKiAwLjc1KTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5yZWN0KHRoaXMueCwgdGhpcy55ICsgNjAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXHJcblxyXG4gICAgICAgICAgICBpbnNwZWN0b3IuZmlsbCgwLCAwLCAwLCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlZGl0UHJlc3NlZChhY3Rpb24sIGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBhY3Rpb24pO1xyXG4gICAgICAgIHZtLmVkaXRUb3VjaChldmVudCwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpc01vdXNlT3Zlcih4LCB5KSB7XHJcbiAgICAgICAgaWYgKHggPj0gdGhpcy54ICYmIHggPD0gKHRoaXMueCArIHRoaXMud2lkdGgpICYmIHkgPj0gdGhpcy55ICYmIHkgPD0gKHRoaXMueSArIHRoaXMuaGVpZ2h0ICogMikpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSA1MDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tb3VzZUlzT3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICBpc01vdXNlUHJlc3NzZWRPdmVyKHgsIHkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ0FjdGlvbiAmJiAhdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nVG91Y2gpIHtcclxuICAgICAgICAgICAgaWYgKHkgPj0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHggPj0gdGhpcy54ICYmIHggPD0gKHRoaXMueCArIHRoaXMud2lkdGgpICYmIHkgPj0gdGhpcy55ICYmIHkgPD0gKHRoaXMueSArIHRoaXMuaGVpZ2h0ICogMikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLnBsYXllci5hcGkoKS5hYkxvb3BQbHVnaW4uc2V0U3RhcnQodGhpcy5zdGFydCkuc2V0RW5kKHRoaXMuZW5kKS5lbmFibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLmdvVG9TdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjYWxjdWxhdGVYKCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9ICh0aGlzLnN0YXJ0IC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WDtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVZKCkge1xyXG4gICAgICAgIHJldHVybiA2MSArIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gKHRoaXMuc3RhcnQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcclxuICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmVuZCAtIHRoaXMuc3RhcnQpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gNjA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24uanMiLCIvLyBkZWZpbmUgYSBtaXhpbiBvYmplY3RcclxuaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICB7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2tDb2xsaWRlKHRvdWNoKXtcclxuICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBfLnJlamVjdChnZXRTdGF0ZSgndG91Y2hNYW5hZ2VyJykudG91Y2hlcywgZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3VjaC5pZCA9PSBvLmlkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdG91Y2hlcy5wdXNoKHRvdWNoKTtcclxuICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSB0aGlzLm92ZXJsYXAodG91Y2hlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBvdmVybGFwLm92ZXJsYXAsXHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2hlczogb3ZlcmxhcC5yYW5nZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tDb2xsaWRlQWN0aW9ucyhhY3Rpb24pe1xyXG4gICAgICAgICAgICBpZiAoZ2V0U3RhdGUoJ3RvdWNoTWFuYWdlcicpLnNlbGVjdGVkVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFRvdWNoID0gZ2V0U3RhdGUoJ3RvdWNoTWFuYWdlcicpLnNlbGVjdGVkVG91Y2g7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUb3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gXy5yZWplY3Qoc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLCBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmlkID09IG8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcChhY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG92ZXJsYXAgPSB7b3ZlcmxhcDogZmFsc2UsIHJhbmdlczogW119XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBvdmVybGFwLm92ZXJsYXAsXHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlQWN0aW9uczogb3ZlcmxhcC5yYW5nZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxhcCh0b3VjaGVzKXtcclxuICAgICAgICAgICAgdmFyIHNvcnRlZFJhbmdlcyA9IHRvdWNoZXMuc29ydCgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNUaW1lID0gcGFyc2VJbnQocHJldmlvdXMuc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIGlzIGVhcmxpZXIgdGhhbiB0aGUgY3VycmVudFxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA8IGN1cnJlbnRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHRpbWVcclxuICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lID09PSBjdXJyZW50VGltZSkge1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIGxhdGVyIHRoYW4gdGhlIGN1cnJlbnQgdGltZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBmaW5hbCByZXN1bHRzXHJcbiAgICAgICAgICAgIHJldHVybiBzb3J0ZWRSYW5nZXMucmVkdWNlKChyZXN1bHQsIGN1cnJlbnQsIGlkeCwgYXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHByZXZpb3VzIHJhbmdlXHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91cyA9IGFycltpZHggLSAxXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYW55IG92ZXJsYXBcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c0VuZCA9IHBhcnNlSW50KHByZXZpb3VzLmVuZCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXJ0ID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IChwcmV2aW91c0VuZCA+IGN1cnJlbnRTdGFydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB5ZXMsIHRoZXJlIGlzIG92ZXJsYXBcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQub3ZlcmxhcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNwZWNpZmljIHJhbmdlcyB0aGF0IG92ZXJsYXBcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmFuZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2VlZCB0aGUgcmVkdWNlXHJcbiAgICAgICAgICAgIH0sIHtvdmVybGFwOiBmYWxzZSwgcmFuZ2VzOiBbXX0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9jb2xsaWRlLmpzIiwiaW1wb3J0IFV1aWRVdGlsIGZyb20gJy4uL3V0aWxzL1V1aWRVdGlsJ1xyXG5pbXBvcnQgU2Vjb25kc1V0aWwgZnJvbSAnLi4vdXRpbHMvU2Vjb25kc1V0aWwnXHJcbmltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXHJcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nXHJcbmltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2gge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhcnQsIGVuZCwgdGV4dCwgY29sb3IsIGFjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0U3RhdGUoJyonKTtcclxuICAgICAgICB2YXIgdXVpZCA9IG5ldyBVdWlkVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuaWQgPSB1dWlkLmdlbmVyYXRlVVVJRCgpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLm1vdXNlSXNPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy54ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLmxpbWl0VGV4dFkgPSAzMCArIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZO1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnMgPyBhY3Rpb25zIDogW11cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2FsY3VsYXRlWCgpO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueSA/IHRoaXMueSA6IHRoaXMuY2FsY3VsYXRlWSgpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbGN1bGF0ZVdpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZUhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmlkID09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLnJnYmEuYWxwaGEgPSAxMDA7XHJcbiAgICAgICAgICAgIHAubm9TdHJva2UoKTtcclxuICAgICAgICAgICAgcC50ZXh0U2l6ZSgxMik7XHJcbiAgICAgICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcclxuICAgICAgICAgICAgcC5maWxsKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIsIDEwMCk7XHJcbiAgICAgICAgICAgIHAucmVjdCh0aGlzLnggKyB0aGlzLndpZHRoIC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDE1KTtcclxuICAgICAgICAgICAgcC5yZWN0KHRoaXMueCAtIDMwLCB0aGlzLmxpbWl0VGV4dFksIDYwLCAxNSk7XHJcbiAgICAgICAgICAgIHAuZmlsbCgyNTUsIDI1NSwgMjU1LCAxMDApO1xyXG4gICAgICAgICAgICBwLnRleHRTdHlsZShwLkJPTEQpO1xyXG4gICAgICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnN0YXJ0KSwgdGhpcy54IC0gMzAsIHRoaXMubGltaXRUZXh0WSwgNjAsIDIwKTtcclxuICAgICAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5lbmQpLCB0aGlzLnggLSAzMCArIHRoaXMud2lkdGgsIHRoaXMubGltaXRUZXh0WSwgNjAsIDIwKTtcclxuICAgICAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xyXG4gICAgICAgICAgICBwLnN0cm9rZShwLmNvbG9yKHRoaXMuY29sb3IucmdiYS5yLCB0aGlzLmNvbG9yLnJnYmEuZywgdGhpcy5jb2xvci5yZ2JhLmIpKVxyXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxyXG4gICAgICAgICAgICBwLmxpbmUodGhpcy54LCB0aGlzLmxpbWl0VGV4dFkgKyAyMCwgdGhpcy54LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xyXG4gICAgICAgICAgICBwLmxpbmUodGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy5saW1pdFRleHRZICsgMjAsIHRoaXMueCArIHRoaXMud2lkdGgsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmQgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSA+IDApIHtcclxuICAgICAgICAgICAgcC5maWxsKDI1NSk7XHJcbiAgICAgICAgICAgIHAuZmlsbCh0aGlzLmNvbG9yLnJnYmEuciwgdGhpcy5jb2xvci5yZ2JhLmcsIHRoaXMuY29sb3IucmdiYS5iLCB0aGlzLmNvbG9yLnJnYmEuYWxwaGEpOyAgLy8gVXNlIGNvbG9yIHZhcmlhYmxlICdjJyBhcyBmaWxsIGNvbG9yXHJcbiAgICAgICAgICAgIHAubm9TdHJva2UoKTsgIC8vIERvbid0IGRyYXcgYSBzdHJva2UgYXJvdW5kIHNoYXBlc1xyXG4gICAgICAgICAgICBwLnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgIC8vIERyYXcgcmVjdGFuZ2xlXHJcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xyXG4gICAgICAgICAgICBwLnRleHRTaXplKDEyKTtcclxuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xyXG4gICAgICAgICAgICBwLmZpbGwoMjU1LCAyNTUsIDI1NSwgdGhpcy5jb2xvci5yZ2JhLmFscGhhKTsgIC8vIFVzZSBjb2xvciB2YXJpYWJsZSAnYycgYXMgZmlsbCBjb2xvclxyXG4gICAgICAgICAgICBwLnJlY3QodGhpcy54ICsgMiwgdGhpcy55ICsgMSwgdGhpcy53aWR0aCAtIDQsIDIwKTsgIC8vIERyYXcgcmVjdGFuZ2xlXHJcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwLCB0aGlzLmNvbG9yLnJnYmEuYWxwaGEpO1xyXG4gICAgICAgICAgICBwLnRleHQodGhpcy50ZXh0LCB0aGlzLnggKyAyLCB0aGlzLnkgKyAxLCB0aGlzLndpZHRoIC0gNCwgMjApO1xyXG4gICAgICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XHJcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwLCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3QWN0aW9ucygpIHtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuYWN0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNbal0uZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlZGl0UHJlc3NlZCh0b3VjaCwgZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgdG91Y2gpO1xyXG4gICAgICAgIHZtLmVkaXRUb3VjaChldmVudCwgdG91Y2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTW91c2VPdmVyKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IucmdiYS5hbHBoYSA9IDEwMDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZUlzT3ZlciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvci5yZ2JhLmFscGhhID0gNTA7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VJc092ZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW91c2VJc092ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNb3VzZVByZXNzc2VkT3Zlcih4LCB5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5yZWNvcmRpbmdBY3Rpb24gJiYgIXRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ1RvdWNoKSB7XHJcbiAgICAgICAgICAgIGlmICh5ID49IHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSB0aGlzLnggJiYgeCA8PSAodGhpcy54ICsgdGhpcy53aWR0aCkgJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSAodGhpcy55ICsgdGhpcy5oZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZtLnN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5zZXRTdGFydCh0aGlzLnN0YXJ0KS5zZXRFbmQodGhpcy5lbmQpLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLmdvVG9TdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2FsY3VsYXRlWCgpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSAodGhpcy5zdGFydCAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XHJcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMzA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhcnQgKyAzMFxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVkoKSB7XHJcbiAgICAgICAgcmV0dXJuIDYxICsgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlV2lkdGgoKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gKHRoaXMuc3RhcnQgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoO1xyXG4gICAgICAgIGlmIChzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmVuZCAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhpcy5lbmQgLSB0aGlzLnN0YXJ0KSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlSGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiA2MDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtYXRlZFN0YXJ0KCkge1xyXG4gICAgICAgIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGFydClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoLmpzIiwiaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi9UaW1lQ29udmVydGVyJ1xyXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY29uZHNVdGlsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZvcm1hdHRlZFRpbWUoeCkge1xyXG4gICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKE1hdGguZmxvb3IoeCAvIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWNvbmRzKHgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4IC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvU2Vjb25kc1V0aWwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdWlkVXRpbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVVVSUQoKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcclxuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgICAgICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXVpZDtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1V1aWRVdGlsLmpzIiwiIWZ1bmN0aW9uKGUsbyl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bygpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbyk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5WdWVDb2xvcj1vKCk6ZS5WdWVDb2xvcj1vKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbyhyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIGE9dFtyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIGVbcl0uY2FsbChhLmV4cG9ydHMsYSxhLmV4cG9ydHMsbyksYS5sb2FkZWQ9ITAsYS5leHBvcnRzfXZhciB0PXt9O3JldHVybiBvLm09ZSxvLmM9dCxvLnA9XCJcIixvKDApfShbZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX12YXIgYT10KDM3KSxpPXIoYSksbj10KDM4KSxzPXIobiksbD10KDQxKSxjPXIobCksdT10KDQyKSxkPXIodSksaD10KDM5KSxmPXIoaCksXz10KDQwKSxwPXIoXyksdj10KDM2KSxnPXIodiksYj10KDYpLG09cihiKSx4PXQoOCksdz1yKHgpLEM9dCg0KSx5PXIoQyksaz10KDUpLEY9cihrKSxBPXQoNyksUj1yKEEpLFM9dCgzKSxNPXIoUyksTj17dmVyc2lvbjpcIjEuMC4yNlwiLENvbXBhY3Q6aVtcImRlZmF1bHRcIl0sTWF0ZXJpYWw6c1tcImRlZmF1bHRcIl0sU2xpZGVyOmNbXCJkZWZhdWx0XCJdLFN3YXRjaGVzOmRbXCJkZWZhdWx0XCJdLFBob3Rvc2hvcDpmW1wiZGVmYXVsdFwiXSxTa2V0Y2g6cFtcImRlZmF1bHRcIl0sQ2hyb21lOmdbXCJkZWZhdWx0XCJdLEFscGhhOm1bXCJkZWZhdWx0XCJdLENoZWNrYm9hcmQ6d1tcImRlZmF1bHRcIl0sRWRpdGFibGVJbnB1dDp5W1wiZGVmYXVsdFwiXSxIdWU6RltcImRlZmF1bHRcIl0sU2F0dXJhdGlvbjpSW1wiZGVmYXVsdFwiXSxDb2xvck1peGluOk1bXCJkZWZhdWx0XCJdfTtlLmV4cG9ydHM9Tn0sZnVuY3Rpb24oZSxvKXtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXSxvPTA7bzx0aGlzLmxlbmd0aDtvKyspe3ZhciB0PXRoaXNbb107dFsyXT9lLnB1c2goXCJAbWVkaWEgXCIrdFsyXStcIntcIit0WzFdK1wifVwiKTplLnB1c2godFsxXSl9cmV0dXJuIGUuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKG8sdCl7XCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPVtbbnVsbCxvLFwiXCJdXSk7Zm9yKHZhciByPXt9LGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGk9dGhpc1thXVswXTtcIm51bWJlclwiPT10eXBlb2YgaSYmKHJbaV09ITApfWZvcihhPTA7YTxvLmxlbmd0aDthKyspe3ZhciBuPW9bYV07XCJudW1iZXJcIj09dHlwZW9mIG5bMF0mJnJbblswXV18fCh0JiYhblsyXT9uWzJdPXQ6dCYmKG5bMl09XCIoXCIrblsyXStcIikgYW5kIChcIit0K1wiKVwiKSxlLnB1c2gobikpfX0sZX19LGZ1bmN0aW9uKGUsbyx0KXtmdW5jdGlvbiByKGUsbyl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciByPWVbdF0sYT1kW3IuaWRdO2lmKGEpe2EucmVmcysrO2Zvcih2YXIgaT0wO2k8YS5wYXJ0cy5sZW5ndGg7aSsrKWEucGFydHNbaV0oci5wYXJ0c1tpXSk7Zm9yKDtpPHIucGFydHMubGVuZ3RoO2krKylhLnBhcnRzLnB1c2gobChyLnBhcnRzW2ldLG8pKX1lbHNle2Zvcih2YXIgbj1bXSxpPTA7aTxyLnBhcnRzLmxlbmd0aDtpKyspbi5wdXNoKGwoci5wYXJ0c1tpXSxvKSk7ZFtyLmlkXT17aWQ6ci5pZCxyZWZzOjEscGFydHM6bn19fX1mdW5jdGlvbiBhKGUpe2Zvcih2YXIgbz1bXSx0PXt9LHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIGE9ZVtyXSxpPWFbMF0sbj1hWzFdLHM9YVsyXSxsPWFbM10sYz17Y3NzOm4sbWVkaWE6cyxzb3VyY2VNYXA6bH07dFtpXT90W2ldLnBhcnRzLnB1c2goYyk6by5wdXNoKHRbaV09e2lkOmkscGFydHM6W2NdfSl9cmV0dXJuIG99ZnVuY3Rpb24gaShlLG8pe3ZhciB0PV8oKSxyPWdbZy5sZW5ndGgtMV07aWYoXCJ0b3BcIj09PWUuaW5zZXJ0QXQpcj9yLm5leHRTaWJsaW5nP3QuaW5zZXJ0QmVmb3JlKG8sci5uZXh0U2libGluZyk6dC5hcHBlbmRDaGlsZChvKTp0Lmluc2VydEJlZm9yZShvLHQuZmlyc3RDaGlsZCksZy5wdXNoKG8pO2Vsc2V7aWYoXCJib3R0b21cIiE9PWUuaW5zZXJ0QXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO3QuYXBwZW5kQ2hpbGQobyl9fWZ1bmN0aW9uIG4oZSl7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpO3ZhciBvPWcuaW5kZXhPZihlKTtvPj0wJiZnLnNwbGljZShvLDEpfWZ1bmN0aW9uIHMoZSl7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiBvLnR5cGU9XCJ0ZXh0L2Nzc1wiLGkoZSxvKSxvfWZ1bmN0aW9uIGwoZSxvKXt2YXIgdCxyLGE7aWYoby5zaW5nbGV0b24pe3ZhciBpPXYrKzt0PXB8fChwPXMobykpLHI9Yy5iaW5kKG51bGwsdCxpLCExKSxhPWMuYmluZChudWxsLHQsaSwhMCl9ZWxzZSB0PXMobykscj11LmJpbmQobnVsbCx0KSxhPWZ1bmN0aW9uKCl7bih0KX07cmV0dXJuIHIoZSksZnVuY3Rpb24obyl7aWYobyl7aWYoby5jc3M9PT1lLmNzcyYmby5tZWRpYT09PWUubWVkaWEmJm8uc291cmNlTWFwPT09ZS5zb3VyY2VNYXApcmV0dXJuO3IoZT1vKX1lbHNlIGEoKX19ZnVuY3Rpb24gYyhlLG8sdCxyKXt2YXIgYT10P1wiXCI6ci5jc3M7aWYoZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PWIobyxhKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpLG49ZS5jaGlsZE5vZGVzO25bb10mJmUucmVtb3ZlQ2hpbGQobltvXSksbi5sZW5ndGg/ZS5pbnNlcnRCZWZvcmUoaSxuW29dKTplLmFwcGVuZENoaWxkKGkpfX1mdW5jdGlvbiB1KGUsbyl7dmFyIHQ9by5jc3Mscj1vLm1lZGlhLGE9by5zb3VyY2VNYXA7aWYociYmZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLHIpLGEmJih0Kz1cIlxcbi8qIyBzb3VyY2VVUkw9XCIrYS5zb3VyY2VzWzBdK1wiICovXCIsdCs9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGEpKSkpK1wiICovXCIpLGUuc3R5bGVTaGVldCllLnN0eWxlU2hlZXQuY3NzVGV4dD10O2Vsc2V7Zm9yKDtlLmZpcnN0Q2hpbGQ7KWUucmVtb3ZlQ2hpbGQoZS5maXJzdENoaWxkKTtlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKX19dmFyIGQ9e30saD1mdW5jdGlvbihlKXt2YXIgbztyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgbyYmKG89ZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpLG99fSxmPWgoZnVuY3Rpb24oKXtyZXR1cm4vbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKX0pLF89aChmdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF19KSxwPW51bGwsdj0wLGc9W107ZS5leHBvcnRzPWZ1bmN0aW9uKGUsbyl7bz1vfHx7fSxcInVuZGVmaW5lZFwiPT10eXBlb2Ygby5zaW5nbGV0b24mJihvLnNpbmdsZXRvbj1mKCkpLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBvLmluc2VydEF0JiYoby5pbnNlcnRBdD1cImJvdHRvbVwiKTt2YXIgdD1hKGUpO3JldHVybiByKHQsbyksZnVuY3Rpb24oZSl7Zm9yKHZhciBpPVtdLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHM9dFtuXSxsPWRbcy5pZF07bC5yZWZzLS0saS5wdXNoKGwpfWlmKGUpe3ZhciBjPWEoZSk7cihjLG8pfWZvcih2YXIgbj0wO248aS5sZW5ndGg7bisrKXt2YXIgbD1pW25dO2lmKDA9PT1sLnJlZnMpe2Zvcih2YXIgdT0wO3U8bC5wYXJ0cy5sZW5ndGg7dSsrKWwucGFydHNbdV0oKTtkZWxldGUgZFtsLmlkXX19fX07dmFyIGI9ZnVuY3Rpb24oKXt2YXIgZT1bXTtyZXR1cm4gZnVuY3Rpb24obyx0KXtyZXR1cm4gZVtvXT10LGUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcXG5cIil9fSgpfSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fWZ1bmN0aW9uIGEoZSxvKXtlLmEmJmUuYT4xJiYoZS5hPTEpO3ZhciB0PWUuaGV4PygwLG5bXCJkZWZhdWx0XCJdKShlLmhleCk6KDAsbltcImRlZmF1bHRcIl0pKGUpLHI9dC50b0hzbCgpLGE9dC50b0hzdigpO3JldHVybiAwPT09ci5zJiYoci5oPWUuaHx8b3x8MCxhLmg9ZS5ofHxvfHwwKSx7aHNsOnIsaGV4OnQudG9IZXhTdHJpbmcoKS50b1VwcGVyQ2FzZSgpLHJnYmE6dC50b1JnYigpLGhzdjphLG9sZEh1ZTplLmh8fG98fHIuaCxzb3VyY2U6ZS5zb3VyY2UsYTplLmF9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXQoMzUpLG49cihpKTtvW1wiZGVmYXVsdFwiXT17cHJvcHM6W1widmFsdWVcIl0sZGF0YTpmdW5jdGlvbigpe3JldHVybnt2YWw6YSh0aGlzLnZhbHVlKX19LGNvbXB1dGVkOntjb2xvcnM6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbH0sc2V0OmZ1bmN0aW9uKGUpe3RoaXMudmFsPWUsdGhpcy4kZW1pdChcImNoYW5nZS1jb2xvclwiLGUpfX19LHdhdGNoOnt2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnZhbD1hKGUpfX0sY3JlYXRlZDpmdW5jdGlvbigpe30sbWV0aG9kczp7Y29sb3JDaGFuZ2U6ZnVuY3Rpb24oZSxvKXt0aGlzLmNvbG9ycz1hKGUsb3x8dGhpcy5vbGRIdWUpLHRoaXMub2xkSHVlPXRoaXMuY29sb3JzLmhzbC5ofSxpc1ZhbGlkSGV4OmZ1bmN0aW9uKGUpe3JldHVybigwLG5bXCJkZWZhdWx0XCJdKShlKS5pc1ZhbGlkKCl9LHNpbXBsZUNoZWNrRm9yVmFsaWRDb2xvcjpmdW5jdGlvbihlKXtmb3IodmFyIG89W1wiclwiLFwiZ1wiLFwiYlwiLFwiYVwiLFwiaFwiLFwic1wiLFwiYVwiLFwidlwiXSx0PTAscj0wLGE9MDthPG8ubGVuZ3RoO2ErKyl7dmFyIGk9b1thXTtlW2ldJiYodCsrLGlzTmFOKGVbaV0pfHxyKyspfWlmKHQ9PT1yKXJldHVybiBlfX19fSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDU2KSxyPXQoMTgpO3ZhciBpPXQoNDQpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDU3KSxyPXQoMTkpO3ZhciBpPXQoNDUpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDY1KSxyPXQoMTYpO3ZhciBpPXQoNTMpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDU4KSxyPXQoMjApO3ZhciBpPXQoNDYpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDY2KSxyPXQoMTcpO3ZhciBpPXQoNTQpO2E9cj1yfHx7fSxcIm9iamVjdFwiIT10eXBlb2YgcltcImRlZmF1bHRcIl0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJbXCJkZWZhdWx0XCJdfHwoYT1yPXJbXCJkZWZhdWx0XCJdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hLm9wdGlvbnMpLGEucmVuZGVyPWkucmVuZGVyLGEuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zLGUuZXhwb3J0cz1yfSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoMyksaT1yKGEpLG49dCg0KSxzPXIobiksbD10KDcpLGM9cihsKSx1PXQoNSksZD1yKHUpLGg9dCg2KSxmPXIoaCk7b1tcImRlZmF1bHRcIl09e25hbWU6XCJDaHJvbWVcIixtaXhpbnM6W2lbXCJkZWZhdWx0XCJdXSxwcm9wczp7fSxjb21wb25lbnRzOntzYXR1cmF0aW9uOmNbXCJkZWZhdWx0XCJdLGh1ZTpkW1wiZGVmYXVsdFwiXSxhbHBoYTpmW1wiZGVmYXVsdFwiXSxcImVkLWluXCI6c1tcImRlZmF1bHRcIl19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57ZmllbGRzOltcImhleFwiLFwicmdiYVwiLFwiaHNsYVwiXSxmaWVsZHNJbmRleDowLGhpZ2hsaWdodDohMX19LGNvbXB1dGVkOnthY3RpdmVDb2xvcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMuY29sb3JzLnJnYmE7cmV0dXJuXCJyZ2JhKFwiK1tlLnIsZS5nLGUuYixlLmFdLmpvaW4oXCIsXCIpK1wiKVwifX0sbWV0aG9kczp7aGFuZGxlUHJlc2V0OmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2Uoe2hleDplLHNvdXJjZTpcImhleFwifSl9LGNoaWxkQ2hhbmdlOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2UoZSl9LGlucHV0Q2hhbmdlOmZ1bmN0aW9uKGUpe2UmJihlLmhleD90aGlzLmlzVmFsaWRIZXgoZS5oZXgpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZS5oZXgsc291cmNlOlwiaGV4XCJ9KTooZS5yfHxlLmd8fGUuYnx8ZS5hKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9LHRvZ2dsZVZpZXdzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmllbGRzSW5kZXg+PTI/dm9pZCh0aGlzLmZpZWxkc0luZGV4PTApOnZvaWQgdGhpcy5maWVsZHNJbmRleCsrfSxzaG93SGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dGhpcy5oaWdobGlnaHQ9ITB9LGhpZGVIaWdobGlnaHQ6ZnVuY3Rpb24oKXt0aGlzLmhpZ2hsaWdodD0hMX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDMpLGk9cihhKSxuPXQoNCkscz1yKG4pLGw9W1wiIzRENEQ0RFwiLFwiIzk5OTk5OVwiLFwiI0ZGRkZGRlwiLFwiI0Y0NEUzQlwiLFwiI0ZFOTIwMFwiLFwiI0ZDREMwMFwiLFwiI0RCREYwMFwiLFwiI0E0REQwMFwiLFwiIzY4Q0NDQVwiLFwiIzczRDhGRlwiLFwiI0FFQTFGRlwiLFwiI0ZEQTFGRlwiLFwiIzMzMzMzM1wiLFwiIzgwODA4MFwiLFwiI0NDQ0NDQ1wiLFwiI0QzMzExNVwiLFwiI0UyNzMwMFwiLFwiI0ZDQzQwMFwiLFwiI0IwQkMwMFwiLFwiIzY4QkMwMFwiLFwiIzE2QTVBNVwiLFwiIzAwOUNFMFwiLFwiIzdCNjRGRlwiLFwiI0ZBMjhGRlwiLFwiIzAwMDAwMFwiLFwiIzY2NjY2NlwiLFwiI0IzQjNCM1wiLFwiIzlGMDUwMFwiLFwiI0M0NTEwMFwiLFwiI0ZCOUUwMFwiLFwiIzgwODkwMFwiLFwiIzE5NEQzM1wiLFwiIzBDNzk3RFwiLFwiIzAwNjJCMVwiLFwiIzY1MzI5NFwiLFwiI0FCMTQ5RVwiXTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkNvbXBhY3RcIixtaXhpbnM6W2lbXCJkZWZhdWx0XCJdXSxwcm9wczp7fSxjb21wb25lbnRzOntcImVkLWluXCI6c1tcImRlZmF1bHRcIl19LGNvbXB1dGVkOntwaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29sb3JzLmhleH19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57ZGVmYXVsdENvbG9yczpsfX0sbWV0aG9kczp7aGFuZGxlckNsaWNrOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2Uoe2hleDplLHNvdXJjZTpcImhleFwifSl9LG9uQ2hhbmdlOmZ1bmN0aW9uKGUpe2UmJihlLmhleD90aGlzLmlzVmFsaWRIZXgoZS5oZXgpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZS5oZXgsc291cmNlOlwiaGV4XCJ9KTooZS5yfHxlLmd8fGUuYikmJnRoaXMuY29sb3JDaGFuZ2Uoe3I6ZS5yfHx0aGlzLmNvbG9ycy5yZ2JhLnIsZzplLmd8fHRoaXMuY29sb3JzLnJnYmEuZyxiOmUuYnx8dGhpcy5jb2xvcnMucmdiYS5iLGE6ZS5hfHx0aGlzLmNvbG9ycy5yZ2JhLmEsc291cmNlOlwicmdiYVwifSkpfX19fSxmdW5jdGlvbihlLG8sdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoNCksaT1yKGEpLG49dCgzKSxzPXIobik7b1tcImRlZmF1bHRcIl09e25hbWU6XCJNYXRlcmlhbFwiLG1peGluczpbc1tcImRlZmF1bHRcIl1dLGNvbXBvbmVudHM6e1wiZWQtaW5cIjppW1wiZGVmYXVsdFwiXX0sbWV0aG9kczp7b25DaGFuZ2U6ZnVuY3Rpb24oZSl7ZSYmKGUuaGV4P3RoaXMuaXNWYWxpZEhleChlLmhleCkmJnRoaXMuY29sb3JDaGFuZ2Uoe2hleDplLmhleCxzb3VyY2U6XCJoZXhcIn0pOihlLnJ8fGUuZ3x8ZS5iKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzKSxpPXIoYSksbj10KDQpLHM9cihuKSxsPXQoNyksYz1yKGwpLHU9dCg1KSxkPXIodSksaD10KDYpLGY9cihoKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlBob3Rvc2hvcFwiLG1peGluczpbaVtcImRlZmF1bHRcIl1dLHByb3BzOntoZWFkOnt0eXBlOlN0cmluZyxcImRlZmF1bHRcIjpcIkNvbG9yIFBpY2tlclwifX0sY29tcG9uZW50czp7c2F0dXJhdGlvbjpjW1wiZGVmYXVsdFwiXSxodWU6ZFtcImRlZmF1bHRcIl0sYWxwaGE6ZltcImRlZmF1bHRcIl0sXCJlZC1pblwiOnNbXCJkZWZhdWx0XCJdfSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnRDb2xvcjpcIiNGRkZcIn19LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmN1cnJlbnRDb2xvcj10aGlzLmNvbG9ycy5oZXh9LG1ldGhvZHM6e2NoaWxkQ2hhbmdlOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2UoZSl9LGlucHV0Q2hhbmdlOmZ1bmN0aW9uKGUpe2UmJihlW1wiI1wiXT90aGlzLmlzVmFsaWRIZXgoZVtcIiNcIl0pJiZ0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZVtcIiNcIl0sc291cmNlOlwiaGV4XCJ9KTooZS5yfHxlLmd8fGUuYnx8ZS5hKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9LGhhbmRsZUFjY2VwdDpmdW5jdGlvbigpe3RoaXMuJGVtaXQoXCJva1wiKX0saGFuZGxlQ2FuY2VsOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcImNhbmNlbFwiKX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDMpLGk9cihhKSxuPXQoNCkscz1yKG4pLGw9dCg3KSxjPXIobCksdT10KDUpLGQ9cih1KSxoPXQoNiksZj1yKGgpLF89W1wiI0QwMDIxQlwiLFwiI0Y1QTYyM1wiLFwiI0Y4RTcxQ1wiLFwiIzhCNTcyQVwiLFwiIzdFRDMyMVwiLFwiIzQxNzUwNVwiLFwiI0JEMTBFMFwiLFwiIzkwMTNGRVwiLFwiIzRBOTBFMlwiLFwiIzUwRTNDMlwiLFwiI0I4RTk4NlwiLFwiIzAwMDAwMFwiLFwiIzRBNEE0QVwiLFwiIzlCOUI5QlwiLFwiI0ZGRkZGRlwiXTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlNrZXRjaFwiLG1peGluczpbaVtcImRlZmF1bHRcIl1dLGNvbXBvbmVudHM6e3NhdHVyYXRpb246Y1tcImRlZmF1bHRcIl0saHVlOmRbXCJkZWZhdWx0XCJdLGFscGhhOmZbXCJkZWZhdWx0XCJdLFwiZWQtaW5cIjpzW1wiZGVmYXVsdFwiXX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntwcmVzZXRDb2xvcnM6X319LGNvbXB1dGVkOnthY3RpdmVDb2xvcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMuY29sb3JzLnJnYmE7cmV0dXJuXCJyZ2JhKFwiK1tlLnIsZS5nLGUuYixlLmFdLmpvaW4oXCIsXCIpK1wiKVwifX0sbWV0aG9kczp7aGFuZGxlUHJlc2V0OmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2Uoe2hleDplLHNvdXJjZTpcImhleFwifSl9LGNoaWxkQ2hhbmdlOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2UoZSl9LGlucHV0Q2hhbmdlOmZ1bmN0aW9uKGUpe2UmJihlLmhleD90aGlzLmlzVmFsaWRIZXgoZS5oZXgpJiZ0aGlzLmNvbG9yQ2hhbmdlKHtoZXg6ZS5oZXgsc291cmNlOlwiaGV4XCJ9KTooZS5yfHxlLmd8fGUuYnx8ZS5hKSYmdGhpcy5jb2xvckNoYW5nZSh7cjplLnJ8fHRoaXMuY29sb3JzLnJnYmEucixnOmUuZ3x8dGhpcy5jb2xvcnMucmdiYS5nLGI6ZS5ifHx0aGlzLmNvbG9ycy5yZ2JhLmIsYTplLmF8fHRoaXMuY29sb3JzLnJnYmEuYSxzb3VyY2U6XCJyZ2JhXCJ9KSl9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCgzKSxpPXIoYSksbj10KDUpLHM9cihuKTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIlNsaWRlclwiLG1peGluczpbaVtcImRlZmF1bHRcIl1dLHByb3BzOntkaXJlY3Rpb246U3RyaW5nfSxjb21wb25lbnRzOntodWU6c1tcImRlZmF1bHRcIl19LGNvbXB1dGVkOnthY3RpdmVPZmZzZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yb3VuZCgxMDAqdGhpcy5jb2xvcnMuaHNsLnMpLzEwMD09PS41P01hdGgucm91bmQoMTAwKnRoaXMuY29sb3JzLmhzbC5sKS8xMDA6MH19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57c3dhdGNoZXM6W1wiLjgwXCIsXCIuNjVcIixcIi41MFwiLFwiLjM1XCIsXCIuMjBcIl19fSxtZXRob2RzOntodWVDaGFuZ2U6ZnVuY3Rpb24oZSl7dGhpcy5jb2xvckNoYW5nZShlKX0saGFuZGxlU3dDbGljazpmdW5jdGlvbihlLG8pe3RoaXMuY29sb3JDaGFuZ2Uoe2g6dGhpcy5jb2xvcnMuaHNsLmgsczouNSxsOm8sc291cmNlOlwiaHNsXCJ9KX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDM0KSxpPXIoYSksbj10KDMpLHM9cihuKSxsPVtcInJlZFwiLFwicGlua1wiLFwicHVycGxlXCIsXCJkZWVwUHVycGxlXCIsXCJpbmRpZ29cIixcImJsdWVcIixcImxpZ2h0Qmx1ZVwiLFwiY3lhblwiLFwidGVhbFwiLFwiZ3JlZW5cIixcImxpZ2h0R3JlZW5cIixcImxpbWVcIixcInllbGxvd1wiLFwiYW1iZXJcIixcIm9yYW5nZVwiLFwiZGVlcE9yYW5nZVwiLFwiYnJvd25cIixcImJsdWVHcmV5XCJdLGM9W1wiOTAwXCIsXCI3MDBcIixcIjUwMFwiLFwiMzAwXCIsXCIxMDBcIl0sdT1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBsLmZvckVhY2goZnVuY3Rpb24obyl7dmFyIHQ9W107Yy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3QucHVzaChpW1wiZGVmYXVsdFwiXVtvXVtlXS50b1VwcGVyQ2FzZSgpKX0pLGUucHVzaCh0KX0pLGV9KCk7b1tcImRlZmF1bHRcIl09e25hbWU6XCJTd2F0Y2hlc1wiLG1peGluczpbc1tcImRlZmF1bHRcIl1dLGNvbXB1dGVkOntwaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29sb3JzLmhleH19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57ZGVmYXVsdENvbG9yczp1fX0sbWV0aG9kczp7aGFuZGxlckNsaWNrOmZ1bmN0aW9uKGUpe3RoaXMuY29sb3JDaGFuZ2Uoe2hleDplLHNvdXJjZTpcImhleFwifSl9fX19LGZ1bmN0aW9uKGUsbyx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dCg4KSxpPXIoYSk7b1tcImRlZmF1bHRcIl09e25hbWU6XCJBbHBoYVwiLHByb3BzOnt2YWx1ZTpPYmplY3Qsb25DaGFuZ2U6RnVuY3Rpb259LGNvbXBvbmVudHM6e2NoZWNrYm9hcmQ6aVtcImRlZmF1bHRcIl19LGNvbXB1dGVkOntjb2xvcnM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX0sZ3JhZGllbnRDb2xvcjpmdW5jdGlvbigpe3ZhciBlPXRoaXMuY29sb3JzLnJnYmEsbz1bZS5yLGUuZyxlLmJdLmpvaW4oXCIsXCIpO3JldHVyblwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKFwiK28rXCIsIDApIDAlLCByZ2JhKFwiK28rXCIsIDEpIDEwMCUpXCJ9fSxtZXRob2RzOntoYW5kbGVDaGFuZ2U6ZnVuY3Rpb24oZSxvKXshbyYmZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0LHI9dGhpcy4kcmVmcy5jb250YWluZXIsYT1yLmNsaWVudFdpZHRoLGk9KGUucGFnZVh8fGUudG91Y2hlc1swXS5wYWdlWCktKHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCt3aW5kb3cucGFnZVhPZmZzZXQpO3Q9aTwwPzA6aT5hPzE6TWF0aC5yb3VuZCgxMDAqaS9hKS8xMDAsdGhpcy5jb2xvcnMuYSE9PXQmJnRoaXMuJGVtaXQoXCJvbi1jaGFuZ2VcIix7aDp0aGlzLmNvbG9ycy5oc2wuaCxzOnRoaXMuY29sb3JzLmhzbC5zLGw6dGhpcy5jb2xvcnMuaHNsLmwsYTp0LHNvdXJjZTpcInJnYmFcIn0pfSxoYW5kbGVNb3VzZURvd246ZnVuY3Rpb24oZSl7dGhpcy5oYW5kbGVDaGFuZ2UoZSwhMCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX0saGFuZGxlTW91c2VVcDpmdW5jdGlvbigpe3RoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMoKX0sdW5iaW5kRXZlbnRMaXN0ZW5lcnM6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuaGFuZGxlQ2hhbmdlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLmhhbmRsZU1vdXNlVXApfX19fSxmdW5jdGlvbihlLG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQoZSxvLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudClyZXR1cm4gbnVsbDt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3Iud2lkdGg9ci5oZWlnaHQ9Mip0O3ZhciBhPXIuZ2V0Q29udGV4dChcIjJkXCIpO3JldHVybiBhPyhhLmZpbGxTdHlsZT1lLGEuZmlsbFJlY3QoMCwwLHIud2lkdGgsci5oZWlnaHQpLGEuZmlsbFN0eWxlPW8sYS5maWxsUmVjdCgwLDAsdCx0KSxhLnRyYW5zbGF0ZSh0LHQpLGEuZmlsbFJlY3QoMCwwLHQsdCksci50b0RhdGFVUkwoKSk6bnVsbH1mdW5jdGlvbiByKGUsbyxyKXt2YXIgaT1lK1wiLFwiK28rXCIsXCIrcjtpZihhW2ldKXJldHVybiBhW2ldO3ZhciBuPXQoZSxvLHIpO3JldHVybiBhW2ldPW4sbn1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT17fTtvW1wiZGVmYXVsdFwiXT17bmFtZTpcIkNoZWNrYm9hcmRcIixwcm9wczp7c2l6ZTp7dHlwZTpbTnVtYmVyLFN0cmluZ10sXCJkZWZhdWx0XCI6OH0sd2hpdGU6e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiI2ZmZlwifSxncmV5Ont0eXBlOlN0cmluZyxcImRlZmF1bHRcIjpcIiNlNmU2ZTZcIn19LGNvbXB1dGVkOntiZ1N0eWxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJ1cmwoXCIrcih0aGlzLndoaXRlLHRoaXMuZ3JleSx0aGlzLnNpemUpK1wiKSBjZW50ZXIgbGVmdFwifX19fSxmdW5jdGlvbihlLG8pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG9bXCJkZWZhdWx0XCJdPXtuYW1lOlwiZWRpdGFibGVJbnB1dFwiLHByb3BzOntsYWJlbDpTdHJpbmcsdmFsdWU6W1N0cmluZyxOdW1iZXJdLG1heDpOdW1iZXIsYXJyb3dPZmZzZXQ6e3R5cGU6TnVtYmVyLFwiZGVmYXVsdFwiOjF9fSxjb21wdXRlZDp7dmFsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9fSxmaWx0ZXJzOnttYXhGaWx0ZXI6e3JlYWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubWF4JiZlPnRoaXMubWF4P3RoaXMubWF4OmV9LHdyaXRlOmZ1bmN0aW9uKGUsbyl7cmV0dXJuIGV9fX0sbWV0aG9kczp7dXBkYXRlOmZ1bmN0aW9uKGUpe3RoaXMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0saGFuZGxlQ2hhbmdlOmZ1bmN0aW9uKGUpe3ZhciBvPXt9O29bdGhpcy5sYWJlbF09ZSx0aGlzLiRlbWl0KFwib24tY2hhbmdlXCIsbyl9LGhhbmRsZUJsdXI6ZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coZSl9LGhhbmRsZUtleURvd246ZnVuY3Rpb24oZSl7dmFyIG89dGhpcy52YWwsdD1OdW1iZXIobyk7aWYodCl7dmFyIHI9dGhpcy5hcnJvd09mZnNldHx8MTszOD09PWUua2V5Q29kZSYmKG89dCtyLHRoaXMuaGFuZGxlQ2hhbmdlKG8pLGUucHJldmVudERlZmF1bHQoKSksNDA9PT1lLmtleUNvZGUmJihvPXQtcix0aGlzLmhhbmRsZUNoYW5nZShvKSxlLnByZXZlbnREZWZhdWx0KCkpfX0saGFuZGxlRHJhZzpmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhlKX0saGFuZGxlTW91c2VEb3duOmZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKGUpfX19fSxmdW5jdGlvbihlLG8pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG9bXCJkZWZhdWx0XCJdPXtuYW1lOlwiSHVlXCIscHJvcHM6e3ZhbHVlOk9iamVjdCxkaXJlY3Rpb246e3R5cGU6U3RyaW5nLFwiZGVmYXVsdFwiOlwiaG9yaXpvbnRhbFwifX0sY29tcHV0ZWQ6e2NvbG9yczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxkaXJlY3Rpb25DbGFzczpmdW5jdGlvbigpe3JldHVybntcInZ1ZS1jb2xvcl9fYy1odWUtLWhvcml6b250YWxcIjpcImhvcml6b250YWxcIj09PXRoaXMuZGlyZWN0aW9uLFwidnVlLWNvbG9yX19jLWh1ZS0tdmVydGljYWxcIjpcInZlcnRpY2FsXCI9PT10aGlzLmRpcmVjdGlvbn19LHBvaW50ZXJUb3A6ZnVuY3Rpb24oKXtyZXR1cm5cInZlcnRpY2FsXCI9PT10aGlzLmRpcmVjdGlvbj8tKDEwMCp0aGlzLmNvbG9ycy5oc2wuaC8zNjApKzEwMCtcIiVcIjowfSxwb2ludGVyTGVmdDpmdW5jdGlvbigpe3JldHVyblwidmVydGljYWxcIj09PXRoaXMuZGlyZWN0aW9uPzA6MTAwKnRoaXMuY29sb3JzLmhzbC5oLzM2MCtcIiVcIn19LG1ldGhvZHM6e2hhbmRsZUNoYW5nZTpmdW5jdGlvbihlLG8peyFvJiZlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQscixhPXRoaXMuJHJlZnMuY29udGFpbmVyLGk9YS5jbGllbnRXaWR0aCxuPWEuY2xpZW50SGVpZ2h0LHM9KGUucGFnZVh8fGUudG91Y2hlc1swXS5wYWdlWCktKGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCt3aW5kb3cucGFnZVhPZmZzZXQpLGw9KGUucGFnZVl8fGUudG91Y2hlc1swXS5wYWdlWSktKGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wK3dpbmRvdy5wYWdlWU9mZnNldCk7XCJ2ZXJ0aWNhbFwiPT09dGhpcy5kaXJlY3Rpb24/KGw8MD90PTM1OTpsPm4/dD0wOihyPS0oMTAwKmwvbikrMTAwLHQ9MzYwKnIvMTAwKSx0aGlzLmNvbG9ycy5oc2wuaCE9PXQmJnRoaXMuJGVtaXQoXCJvbi1jaGFuZ2VcIix7aDp0LHM6dGhpcy5jb2xvcnMuaHNsLnMsbDp0aGlzLmNvbG9ycy5oc2wubCxhOnRoaXMuY29sb3JzLmhzbC5hLHNvdXJjZTpcImhzbFwifSkpOihzPDA/dD0wOnM+aT90PTM1OToocj0xMDAqcy9pLHQ9MzYwKnIvMTAwKSx0aGlzLmNvbG9ycy5oc2wuaCE9PXQmJnRoaXMuJGVtaXQoXCJvbi1jaGFuZ2VcIix7aDp0LHM6dGhpcy5jb2xvcnMuaHNsLnMsbDp0aGlzLmNvbG9ycy5oc2wubCxhOnRoaXMuY29sb3JzLmhzbC5hLHNvdXJjZTpcImhzbFwifSkpfSxoYW5kbGVNb3VzZURvd246ZnVuY3Rpb24oZSl7dGhpcy5oYW5kbGVDaGFuZ2UoZSwhMCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX0saGFuZGxlTW91c2VVcDpmdW5jdGlvbihlKXt0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzKCl9LHVuYmluZEV2ZW50TGlzdGVuZXJzOmZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLmhhbmRsZUNoYW5nZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5oYW5kbGVNb3VzZVVwKX19fX0sZnVuY3Rpb24oZSxvLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkobyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KDMzKSxpPXIoYSk7b1tcImRlZmF1bHRcIl09e25hbWU6XCJTYXR1cmF0aW9uXCIscHJvcHM6e3ZhbHVlOk9iamVjdH0sY29tcHV0ZWQ6e2NvbG9yczpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxiZ0NvbG9yOmZ1bmN0aW9uKCl7cmV0dXJuXCJoc2woXCIrdGhpcy5jb2xvcnMuaHNsLmgrXCIsMTAwJSwgNTAlKVwifSxwb2ludGVyVG9wOmZ1bmN0aW9uKCl7cmV0dXJuLSgxMDAqdGhpcy5jb2xvcnMuaHN2LnYpKzEwMCtcIiVcIn0scG9pbnRlckxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gMTAwKnRoaXMuY29sb3JzLmhzdi5zK1wiJVwifX0sbWV0aG9kczp7dGhyb3R0bGU6KDAsaVtcImRlZmF1bHRcIl0pKGZ1bmN0aW9uKGUsbyl7ZShvKX0sNTApLGhhbmRsZUNoYW5nZTpmdW5jdGlvbihlLG8peyFvJiZlLnByZXZlbnREZWZhdWx0KCk7dmFyIHQ9dGhpcy4kcmVmcy5jb250YWluZXIscj10LmNsaWVudFdpZHRoLGE9dC5jbGllbnRIZWlnaHQsaT0oZS5wYWdlWHx8ZS50b3VjaGVzWzBdLnBhZ2VYKS0odC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0K3dpbmRvdy5wYWdlWE9mZnNldCksbj0oZS5wYWdlWXx8ZS50b3VjaGVzWzBdLnBhZ2VZKS0odC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3Ard2luZG93LnBhZ2VZT2Zmc2V0KTtpPDA/aT0wOmk+cj9pPXI6bjwwP249MDpuPmEmJihuPWEpO3ZhciBzPTEwMCppL3IsbD0tKDEwMCpuL2EpKzEwMDt0aGlzLnRocm90dGxlKHRoaXMub25DaGFuZ2Use2g6dGhpcy5jb2xvcnMuaHNsLmgsczpzLHY6bCxhOnRoaXMuY29sb3JzLmhzbC5hLHNvdXJjZTpcInJnYlwifSl9LG9uQ2hhbmdlOmZ1bmN0aW9uKGUpe3RoaXMuJGVtaXQoXCJvbi1jaGFuZ2VcIixlKX0saGFuZGxlTW91c2VEb3duOmZ1bmN0aW9uKGUpe3RoaXMuaGFuZGxlQ2hhbmdlKGUsITApLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5oYW5kbGVDaGFuZ2UpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuaGFuZGxlTW91c2VVcCl9LGhhbmRsZU1vdXNlVXA6ZnVuY3Rpb24oZSl7dGhpcy51bmJpbmRFdmVudExpc3RlbmVycygpfSx1bmJpbmRFdmVudExpc3RlbmVyczpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5oYW5kbGVDaGFuZ2UpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuaGFuZGxlTW91c2VVcCl9fX19LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fY29tcGFjdHtwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1sZWZ0OjVweDt3aWR0aDoyNDBweDtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMTIpLDAgMnB4IDVweCByZ2JhKDAsMCwwLC4xNik7YmFja2dyb3VuZC1jb2xvcjojZmZmfS52dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yc3tvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO21hcmdpbjowfS52dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yLWl0ZW17bGlzdC1zdHlsZTpub25lO3dpZHRoOjE1cHg7aGVpZ2h0OjE1cHg7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6NXB4O21hcmdpbi1ib3R0b206NXB4O3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyfS52dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yLWl0ZW0tLXdoaXRle2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNkZGR9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3ItaXRlbS0td2hpdGUgLnZ1ZS1jb2xvcl9fY29tcGFjdF9fZG90e2JhY2tncm91bmQ6IzAwMH0udnVlLWNvbG9yX19jb21wYWN0X19kb3R7cG9zaXRpb246YWJzb2x1dGU7dG9wOjVweDtyaWdodDo1cHg7Ym90dG9tOjVweDtsZWZ0OjVweDtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjE7YmFja2dyb3VuZDojZmZmfS52dWUtY29sb3JfX2NvbXBhY3RfX2ZpZWxkc3tkaXNwbGF5OmZsZXg7cGFkZGluZy1ib3R0b206NnB4O3BhZGRpbmctcmlnaHQ6NXB4O3Bvc2l0aW9uOnJlbGF0aXZlfS52dWUtY29sb3JfX2NvbXBhY3RfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7d2lkdGg6NzAlO3BhZGRpbmctbGVmdDozMCU7YmFja2dyb3VuZDpub25lO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiMzMzM7aGVpZ2h0OjE2cHh9LnZ1ZS1jb2xvcl9fY29tcGFjdF9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6M3B4O2xlZnQ6MDtsaW5lLWhlaWdodDoxNnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTJweDtjb2xvcjojOTk5fS52dWUtY29sb3JfX2NvbXBhY3RfX3BpY2stY29sb3J7cG9zaXRpb246YWJzb2x1dGU7dG9wOjZweDtsZWZ0OjVweDtoZWlnaHQ6OXB4O3dpZHRoOjlweH0udnVlLWNvbG9yX19jb21wYWN0X19jb2wtM3tmbGV4OjF9LnZ1ZV9jb2xvcl9fY29tcGFjdF9fY29sLWhleHtmbGV4OjJ9LnZ1ZV9jb2xvcl9fY29tcGFjdF9fY29sLWhleCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7d2lkdGg6ODAlO3BhZGRpbmctbGVmdDoyMCV9LnZ1ZV9jb2xvcl9fY29tcGFjdF9fY29sLWhleCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7ZGlzcGxheTpub25lfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dHtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7cGFkZGluZzowO2JvcmRlcjowO291dGxpbmU6bm9uZX0udnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fYy1odWV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7Ym9yZGVyLXJhZGl1czoycHh9LnZ1ZS1jb2xvcl9fYy1odWUtLWhvcml6b250YWx7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcscmVkIDAsI2ZmMCAxNyUsIzBmMCAzMyUsIzBmZiA1MCUsIzAwZiA2NyUsI2YwZiA4MyUscmVkKX0udnVlLWNvbG9yX19jLWh1ZS0tdmVydGljYWx7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMGRlZyxyZWQgMCwjZmYwIDE3JSwjMGYwIDMzJSwjMGZmIDUwJSwjMDBmIDY3JSwjZjBmIDgzJSxyZWQpfS52dWUtY29sb3JfX2MtaHVlX19jb250YWluZXJ7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjAgMnB4O3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlfS52dWUtY29sb3JfX2MtaHVlX19wb2ludGVye3otaW5kZXg6Mjtwb3NpdGlvbjphYnNvbHV0ZX0udnVlLWNvbG9yX19jLWh1ZV9fcGlja2Vye2N1cnNvcjpwb2ludGVyO21hcmdpbi10b3A6MXB4O3dpZHRoOjRweDtib3JkZXItcmFkaXVzOjFweDtoZWlnaHQ6OHB4O2JveC1zaGFkb3c6MCAwIDJweCByZ2JhKDAsMCwwLC42KTtiYWNrZ3JvdW5kOiNmZmY7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTJweCl9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX3NhdHVyYXRpb24sLnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tYmxhY2ssLnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0td2hpdGV7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjB9LnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0td2hpdGV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2ZmZixoc2xhKDAsMCUsMTAwJSwwKSl9LnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tYmxhY2t7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMGRlZywjMDAwLHRyYW5zcGFyZW50KX0udnVlLWNvbG9yX19zYXR1cmF0aW9uLS1wb2ludGVye2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOmFic29sdXRlfS52dWUtY29sb3JfX3NhdHVyYXRpb24tLWNpcmNsZXtjdXJzb3I6aGVhZDt3aWR0aDo0cHg7aGVpZ2h0OjRweDtib3gtc2hhZG93OjAgMCAwIDEuNXB4ICNmZmYsaW5zZXQgMCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMyksMCAwIDFweCAycHggcmdiYSgwLDAsMCwuNCk7Ym9yZGVyLXJhZGl1czo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMnB4LC0ycHgpfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsXCIudnVlLWNvbG9yX19tYXRlcmlhbHt3aWR0aDo5OHB4O2hlaWdodDo5OHB4O3BhZGRpbmc6MTZweDtmb250LWZhbWlseTpSb2JvdG87cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEyKSwwIDJweCA1cHggcmdiYSgwLDAsMCwuMTYpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0udnVlLWNvbG9yX19tYXRlcmlhbCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9faW5wdXR7d2lkdGg6MTAwJTttYXJnaW4tdG9wOjEycHg7Zm9udC1zaXplOjE1cHg7Y29sb3I6IzMzMztoZWlnaHQ6MzBweH0udnVlLWNvbG9yX19tYXRlcmlhbCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiM5OTk7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX0udnVlLWNvbG9yX19tYXRlcmlhbF9faGV4e2JvcmRlci1ib3R0b20td2lkdGg6MnB4O2JvcmRlci1ib3R0b20tc3R5bGU6c29saWR9LnZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3NwbGl0e2Rpc3BsYXk6ZmxleDttYXJnaW4tcmlnaHQ6LTEwcHg7cGFkZGluZy10b3A6MTFweH0udnVlLWNvbG9yX19tYXRlcmlhbF9fdGhpcmR7ZmxleDoxO3BhZGRpbmctcmlnaHQ6MTBweH1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjQxMHB4fS52dWUtY29sb3JfX3NsaWRlcl9faHVlLXdhcnB7aGVpZ2h0OjEycHg7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcl9fc2xpZGVyX19odWUtd2FycCAudnVlLWNvbG9yX19jLWh1ZV9fcGlja2Vye3dpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7Ym9yZGVyLXJhZGl1czo2cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtN3B4LC0ycHgpO2JhY2tncm91bmQtY29sb3I6I2Y4ZjhmODtib3gtc2hhZG93OjAgMXB4IDRweCAwIHJnYmEoMCwwLDAsLjM3KX0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaGVze2Rpc3BsYXk6ZmxleDttYXJnaW4tdG9wOjIwcHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2h7bWFyZ2luLXJpZ2h0OjFweDtmbGV4OjE7d2lkdGg6MjAlfS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoxcHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2g6Zmlyc3QtY2hpbGQgLnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2gtcGlja2Vye2JvcmRlci1yYWRpdXM6MnB4IDAgMCAycHh9LnZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2g6bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaDpsYXN0LWNoaWxkIC52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlcntib3JkZXItcmFkaXVzOjAgMnB4IDJweCAwfS52dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlcntjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6MTJweH0udnVlLWNvbG9yX19zbGlkZXJfX3N3YXRjaC1waWNrZXItLWFjdGl2ZXt0cmFuc2Zvcm06c2NhbGVZKDEuOCk7Ym9yZGVyLXJhZGl1czozLjZweC8ycHh9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX3N3YXRjaGVze3dpZHRoOjMyMHB4O2hlaWdodDoyNDBweDtvdmVyZmxvdy15OnNjcm9sbDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEyKSwwIDJweCA1cHggcmdiYSgwLDAsMCwuMTYpfS52dWUtY29sb3JfX3N3YXRjaGVzX19ib3h7cGFkZGluZzoxNnB4IDAgNnB4IDE2cHg7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JfX3N3YXRjaGVzX19jb2xvci1ncm91cHtwYWRkaW5nLWJvdHRvbToxMHB4O3dpZHRoOjQwcHg7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6MTBweH0udnVlLWNvbG9yX19zd2F0Y2hlc19fY29sb3ItaXR7d2lkdGg6NDBweDtoZWlnaHQ6MjRweDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOiM4ODBlNGY7bWFyZ2luLWJvdHRvbToxcHg7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6MnB4IDJweCAwIDB9LnZ1ZS1jb2xvcl9fc3dhdGNoZXNfX3BpY2t7ZmlsbDojZmZmO21hcmdpbi1sZWZ0OjhweDtkaXNwbGF5OmJsb2NrfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvLHQpe289ZS5leHBvcnRzPXQoMSkoKSxvLnB1c2goW2UuaWQsJy52dWUtY29sb3JzX19waG90b3Nob3B7YmFja2dyb3VuZDojZGNkY2RjO2JvcmRlci1yYWRpdXM6NHB4O2JveC1zaGFkb3c6MCAwIDAgMXB4IHJnYmEoMCwwLDAsLjI1KSwwIDhweCAxNnB4IHJnYmEoMCwwLDAsLjE1KTtib3gtc2l6aW5nOmluaXRpYWw7d2lkdGg6NTEzcHg7Zm9udC1mYW1pbHk6Um9ib3RvfS52dWUtY29sb3JzX19waG90b3Nob3BfX2hlYWR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmMGYwLCNkNGQ0ZDQpO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNiMWIxYjE7Ym94LXNoYWRvdzppbnNldCAwIDFweCAwIDAgaHNsYSgwLDAlLDEwMCUsLjIpLGluc2V0IDAgLTFweCAwIDAgcmdiYSgwLDAsMCwuMDIpO2hlaWdodDoyM3B4O2xpbmUtaGVpZ2h0OjI0cHg7Ym9yZGVyLXJhZGl1czo0cHggNHB4IDAgMDtmb250LXNpemU6MTNweDtjb2xvcjojNGQ0ZDRkO3RleHQtYWxpZ246Y2VudGVyfS52dWUtY29sb3JzX19waG90b3Nob3BfX2JvZHl7cGFkZGluZzoxNXB4O2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19zYXR1cmF0aW9uLXdyYXB7d2lkdGg6MjU2cHg7aGVpZ2h0OjI1NnB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlcjoycHggc29saWQgI2IzYjNiMztib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZjBmMGYwO292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19zYXR1cmF0aW9uLXdyYXAgLnZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tY2lyY2xle3dpZHRoOjEycHg7aGVpZ2h0OjEycHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXdyYXB7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjI1NnB4O3dpZHRoOjE5cHg7bWFyZ2luLWxlZnQ6MTBweDtib3JkZXI6MnB4IHNvbGlkICNiM2IzYjM7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2YwZjBmMH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlcntwb3NpdGlvbjpyZWxhdGl2ZX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tbGVmdCwudnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tcmlnaHR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjVweCAwIDVweCA4cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM1NTV9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLWxlZnQ6YWZ0ZXIsLnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXBvaW50ZXItLXJpZ2h0OmFmdGVye2NvbnRlbnQ6XCJcIjt3aWR0aDowO2hlaWdodDowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NHB4IDAgNHB4IDZweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MXB4O2xlZnQ6MXB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLThweCwtNXB4KX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tbGVmdHt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xM3B4LC00cHgpfS52dWUtY29sb3JzX19waG90b3Nob3BfX2h1ZS1wb2ludGVyLS1yaWdodHt0cmFuc2Zvcm06dHJhbnNsYXRlKDIwcHgsLTRweCkgcm90YXRlKDE4MGRlZyl9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fY29udHJvbHN7d2lkdGg6MTgwcHg7bWFyZ2luLWxlZnQ6MTBweDtkaXNwbGF5OmZsZXh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fYWN0aW9uc3ttYXJnaW4tbGVmdDoyMHB4O2ZsZXg6MX0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19hYy1idG57Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmZmLCNlNmU2ZTYpO2JvcmRlcjoxcHggc29saWQgIzg3ODc4Nztib3JkZXItcmFkaXVzOjJweDtoZWlnaHQ6MjBweDtib3gtc2hhZG93OjAgMXB4IDAgMCAjZWFlYWVhO2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiMwMDA7bGluZS1oZWlnaHQ6MjBweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjEwcHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3N7d2lkdGg6NjBweH0udnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fc3dhdGNoZXN7Ym9yZGVyOjFweCBzb2xpZCAjYjNiM2IzO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNmMGYwZjA7bWFyZ2luLWJvdHRvbToycHg7bWFyZ2luLXRvcDoxcHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fcHJldmlld3NfX3ByLWNvbG9ye2hlaWdodDozNHB4O2JveC1zaGFkb3c6aW5zZXQgMXB4IDAgMCAjMDAwLGluc2V0IC0xcHggMCAwICMwMDAsaW5zZXQgMCAxcHggMCAjMDAwfS52dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19sYWJlbHtmb250LXNpemU6MTRweDtjb2xvcjojMDAwO3RleHQtYWxpZ246Y2VudGVyfS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc3twYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1ib3R0b206OXB4O3dpZHRoOjgwcHg7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHttYXJnaW4tbGVmdDo0MCU7d2lkdGg6NDAlO2hlaWdodDoxOHB4O2JvcmRlcjoxcHggc29saWQgIzg4ODtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xKSwwIDFweCAwIDAgI2VjZWNlYzttYXJnaW4tYm90dG9tOjVweDtmb250LXNpemU6MTNweDtwYWRkaW5nLWxlZnQ6M3B4O21hcmdpbi1yaWdodDoxMHB4fS52dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkcyAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7dG9wOjA7bGVmdDowO3dpZHRoOjM0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2ZvbnQtc2l6ZToxM3B4O2hlaWdodDoxOHB4O2xpbmUtaGVpZ2h0OjIycHg7cG9zaXRpb246YWJzb2x1dGV9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19kaXZpZGVye2hlaWdodDo1cHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19oZXggLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e21hcmdpbi1sZWZ0OjIwJTt3aWR0aDo4MCU7aGVpZ2h0OjE4cHg7Ym9yZGVyOjFweCBzb2xpZCAjODg4O2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjEpLDAgMXB4IDAgMCAjZWNlY2VjO21hcmdpbi1ib3R0b206NnB4O2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmctbGVmdDozcHh9LnZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19oZXggLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxNHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTNweDtoZWlnaHQ6MThweDtsaW5lLWhlaWdodDoyMnB4fScsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX3NrZXRjaHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyMDBweDtwYWRkaW5nOjEwcHggMTBweCAwO2JveC1zaXppbmc6aW5pdGlhbDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czo0cHg7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpLDAgOHB4IDE2cHggcmdiYSgwLDAsMCwuMTUpfS52dWUtY29sb3JfX3NrZXRjaF9fc2F0dXJhdGlvbi13cmFwe3dpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206NzUlO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0udnVlLWNvbG9yX19za2V0Y2hfX2NvbnRyb2xze2Rpc3BsYXk6ZmxleH0udnVlLWNvbG9yX19za2V0Y2hfX3NsaWRlcnN7cGFkZGluZzo0cHggMDtmbGV4OjF9LnZ1ZS1jb2xvcl9fc2tldGNoX19zbGlkZXJzIC52dWUtY29sb3JfX2MtYWxwaGFfX2dyYWRpZW50LC52dWUtY29sb3JfX3NrZXRjaF9fc2xpZGVycyAudnVlLWNvbG9yX19jLWh1ZXtib3JkZXItcmFkaXVzOjJweH0udnVlLWNvbG9yX19za2V0Y2hfX2h1ZS13cmFwe3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMHB4fS52dWUtY29sb3JfX3NrZXRjaF9fYWxwaGEtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTBweDttYXJnaW4tdG9wOjRweDtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fc2tldGNoX19jb2xvci13cmFwe3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLXRvcDo0cHg7bWFyZ2luLWxlZnQ6NHB4O2JvcmRlci1yYWRpdXM6M3B4fS52dWUtY29sb3JfX3NrZXRjaF9fYWN0aXZlLWNvbG9ye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwwLDAsLjE1KSxpbnNldCAwIDAgNHB4IHJnYmEoMCwwLDAsLjI1KTt6LWluZGV4OjJ9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZHtkaXNwbGF5OmZsZXg7cGFkZGluZy10b3A6NHB4fS52dWUtY29sb3JfX3NrZXRjaF9fZmllbGQgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0e3dpZHRoOjgwJTtwYWRkaW5nOjRweCAxMCUgM3B4O2JvcmRlcjpub25lO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNjY2M7Zm9udC1zaXplOjExcHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZCAudnVlLWNvbG9yX19lZGl0YWJsZS1pbnB1dF9fbGFiZWx7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTFweDtjb2xvcjojMjIyO3BhZGRpbmctdG9wOjNweDtwYWRkaW5nLWJvdHRvbTo0cHg7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX0udnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGV7ZmxleDoxO3BhZGRpbmctbGVmdDo2cHh9LnZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tZG91Ymxle2ZsZXg6Mn0udnVlLWNvbG9yX19za2V0Y2hfX3ByZXNldHN7bWFyZ2luLXJpZ2h0Oi0xMHB4O21hcmdpbi1sZWZ0Oi0xMHB4O3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctdG9wOjEwcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZX0udnVlLWNvbG9yX19za2V0Y2hfX3ByZXNldHMtY29sb3J7Ym9yZGVyLXJhZGl1czozcHg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDEwcHggMTBweCAwO3ZlcnRpY2FsLWFsaWduOnRvcDtjdXJzb3I6cG9pbnRlcjt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwwLDAsLjE1KX1cIixcIlwiXSl9LGZ1bmN0aW9uKGUsbyx0KXtvPWUuZXhwb3J0cz10KDEpKCksby5wdXNoKFtlLmlkLFwiLnZ1ZS1jb2xvcl9fY2hyb21le2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMCAycHggcmdiYSgwLDAsMCwuMyksMCA0cHggOHB4IHJnYmEoMCwwLDAsLjMpO2JveC1zaXppbmc6aW5pdGlhbDt3aWR0aDoyMjVweDtmb250LWZhbWlseTpNZW5sbztiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnZ1ZS1jb2xvcl9fY2hyb21lX19jb250cm9sc3tkaXNwbGF5OmZsZXh9LnZ1ZS1jb2xvcl9fY2hyb21lX19jb2xvci13cmFwe3dpZHRoOjMycHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19hY3RpdmUtY29sb3J7bWFyZ2luLXRvcDo2cHg7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXItcmFkaXVzOjhweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJze2ZsZXg6MX0udnVlLWNvbG9yX19jaHJvbWVfX3NsaWRlcnMgLnZ1ZS1jb2xvcl9fYy1hbHBoYV9fZ3JhZGllbnQsLnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzIC52dWUtY29sb3JfX2MtaHVle2JvcmRlci1yYWRpdXM6MnB4fS52dWUtY29sb3JfX2Nocm9tZV9fc2xpZGVycyAudnVlLWNvbG9yX19jLWFscGhhX19waWNrZXIsLnZ1ZS1jb2xvcl9fY2hyb21lX19zbGlkZXJzIC52dWUtY29sb3JfX2MtaHVlX19waWNrZXJ7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDtib3JkZXItcmFkaXVzOjZweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC02cHgsLTJweCk7YmFja2dyb3VuZC1jb2xvcjojZjhmOGY4O2JveC1zaGFkb3c6MCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMzcpfS52dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzLXdyYXB7cGFkZGluZy10b3A6MTZweDtkaXNwbGF5OmZsZXh9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHN7ZGlzcGxheTpmbGV4O21hcmdpbi1sZWZ0Oi02cHg7ZmxleDoxfS52dWUtY29sb3JfX2Nocm9tZV9fZmllbGR7cGFkZGluZy1sZWZ0OjZweDt3aWR0aDoxMDAlfS52dWUtY29sb3JfX2Nocm9tZV9fdG9nZ2xlLWJ0bnt3aWR0aDozMnB4O3RleHQtYWxpZ246cmlnaHQ7cG9zaXRpb246cmVsYXRpdmV9LnZ1ZS1jb2xvcl9fY2hyb21lX19pY29ue21hcmdpbi1yaWdodDotNHB4O21hcmdpbi10b3A6MTJweDtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9LnZ1ZS1jb2xvcl9fY2hyb21lX19pY29uLWhpZ2hsaWdodHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyOHB4O2JhY2tncm91bmQ6I2VlZTtib3JkZXItcmFkaXVzOjRweDt0b3A6MTBweDtsZWZ0OjEycHh9LnZ1ZS1jb2xvcl9fY2hyb21lX19odWUtd3JhcHttYXJnaW4tYm90dG9tOjhweH0udnVlLWNvbG9yX19jaHJvbWVfX2FscGhhLXdyYXAsLnZ1ZS1jb2xvcl9fY2hyb21lX19odWUtd3JhcHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTBweH0udnVlLWNvbG9yX19jaHJvbWVfX2Nocm9tZS1ib2R5e3BhZGRpbmc6MTZweCAxNnB4IDEycHg7YmFja2dyb3VuZC1jb2xvcjojZmZmfS52dWUtY29sb3JfX2Nocm9tZV9fc2F0dXJhdGlvbi13cmFwe3dpZHRoOjEwMCU7cGFkZGluZy1ib3R0b206NTUlO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MnB4IDJweCAwIDA7b3ZlcmZsb3c6aGlkZGVufS52dWUtY29sb3JfX2Nocm9tZV9fc2F0dXJhdGlvbi13cmFwIC52dWUtY29sb3JfX3NhdHVyYXRpb24tLWNpcmNsZXt3aWR0aDoxMnB4O2hlaWdodDoxMnB4fS52dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzIC52dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0X19pbnB1dHtmb250LXNpemU6MTFweDtjb2xvcjojMzMzO3dpZHRoOjEwMCU7Ym9yZGVyLXJyYWRpdXM6MnB4O2JvcmRlcjpub25lO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNkYWRhZGE7aGVpZ2h0OjIxcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LnZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHMgLnZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVse3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250LXNpemU6MTFweDtsaW5lLWhlaWdodDoxMXB4O2NvbG9yOiM5Njk2OTY7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjEycHh9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2MtYWxwaGEsLnZ1ZS1jb2xvcl9fYy1hbHBoYV9fY2hlY2tib2FyZC13cmFwe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfS52dWUtY29sb3JfX2MtYWxwaGFfX2NoZWNrYm9hcmQtd3JhcHtvdmVyZmxvdzpoaWRkZW59LnZ1ZS1jb2xvcl9fYy1hbHBoYV9fZ3JhZGllbnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjB9LnZ1ZS1jb2xvcl9fYy1hbHBoYV9fY29udGFpbmVye2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MjtoZWlnaHQ6MTAwJTttYXJnaW46MCAzcHh9LnZ1ZS1jb2xvcl9fYy1hbHBoYV9fcG9pbnRlcnt6LWluZGV4OjI7cG9zaXRpb246YWJzb2x1dGV9LnZ1ZS1jb2xvcl9fYy1hbHBoYV9fcGlja2Vye2N1cnNvcjpwb2ludGVyO3dpZHRoOjRweDtib3JkZXItcmFkaXVzOjFweDtoZWlnaHQ6OHB4O2JveC1zaGFkb3c6MCAwIDJweCByZ2JhKDAsMCwwLC42KTtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luLXRvcDoxcHg7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTJweCl9XCIsXCJcIl0pfSxmdW5jdGlvbihlLG8sdCl7bz1lLmV4cG9ydHM9dCgxKSgpLG8ucHVzaChbZS5pZCxcIi52dWUtY29sb3JfX2MtY2hlY2tlcmJvYXJke3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfVwiLFwiXCJdKX0sZnVuY3Rpb24oZSxvKXsoZnVuY3Rpb24obyl7ZnVuY3Rpb24gdChlLG8sdCl7ZnVuY3Rpb24gcihvKXt2YXIgdD1wLHI9djtyZXR1cm4gcD12PXZvaWQgMCxrPW8sYj1lLmFwcGx5KHIsdCl9ZnVuY3Rpb24gaShlKXtyZXR1cm4gaz1lLG09c2V0VGltZW91dCh1LG8pLEY/cihlKTpifWZ1bmN0aW9uIG4oZSl7dmFyIHQ9ZS14LHI9ZS1rLGE9by10O3JldHVybiBBP0MoYSxnLXIpOmF9ZnVuY3Rpb24gYyhlKXt2YXIgdD1lLXgscj1lLWs7cmV0dXJuIHZvaWQgMD09PXh8fHQ+PW98fHQ8MHx8QSYmcj49Z31mdW5jdGlvbiB1KCl7dmFyIGU9eSgpO3JldHVybiBjKGUpP2QoZSk6dm9pZChtPXNldFRpbWVvdXQodSxuKGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gbT12b2lkIDAsUiYmcD9yKGUpOihwPXY9dm9pZCAwLGIpfWZ1bmN0aW9uIGgoKXt2b2lkIDAhPT1tJiZjbGVhclRpbWVvdXQobSksaz0wLHA9eD12PW09dm9pZCAwfWZ1bmN0aW9uIGYoKXtyZXR1cm4gdm9pZCAwPT09bT9iOmQoeSgpKX1mdW5jdGlvbiBfKCl7dmFyIGU9eSgpLHQ9YyhlKTtpZihwPWFyZ3VtZW50cyx2PXRoaXMseD1lLHQpe2lmKHZvaWQgMD09PW0pcmV0dXJuIGkoeCk7aWYoQSlyZXR1cm4gbT1zZXRUaW1lb3V0KHUsbyksXG5yKHgpfXJldHVybiB2b2lkIDA9PT1tJiYobT1zZXRUaW1lb3V0KHUsbykpLGJ9dmFyIHAsdixnLGIsbSx4LGs9MCxGPSExLEE9ITEsUj0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IobCk7cmV0dXJuIG89cyhvKXx8MCxhKHQpJiYoRj0hIXQubGVhZGluZyxBPVwibWF4V2FpdFwiaW4gdCxnPUE/dyhzKHQubWF4V2FpdCl8fDAsbyk6ZyxSPVwidHJhaWxpbmdcImluIHQ/ISF0LnRyYWlsaW5nOlIpLF8uY2FuY2VsPWgsXy5mbHVzaD1mLF99ZnVuY3Rpb24gcihlLG8scil7dmFyIGk9ITAsbj0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IobCk7cmV0dXJuIGEocikmJihpPVwibGVhZGluZ1wiaW4gcj8hIXIubGVhZGluZzppLG49XCJ0cmFpbGluZ1wiaW4gcj8hIXIudHJhaWxpbmc6biksdChlLG8se2xlYWRpbmc6aSxtYXhXYWl0Om8sdHJhaWxpbmc6bn0pfWZ1bmN0aW9uIGEoZSl7dmFyIG89dHlwZW9mIGU7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09b3x8XCJmdW5jdGlvblwiPT1vKX1mdW5jdGlvbiBpKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09dHlwZW9mIGV9ZnVuY3Rpb24gbihlKXtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZXx8aShlKSYmeC5jYWxsKGUpPT11fWZ1bmN0aW9uIHMoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYobihlKSlyZXR1cm4gYztpZihhKGUpKXt2YXIgbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPWEobyk/bytcIlwiOm99aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UoZCxcIlwiKTt2YXIgdD1mLnRlc3QoZSk7cmV0dXJuIHR8fF8udGVzdChlKT9wKGUuc2xpY2UoMiksdD8yOjgpOmgudGVzdChlKT9jOitlfXZhciBsPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLGM9TmFOLHU9XCJbb2JqZWN0IFN5bWJvbF1cIixkPS9eXFxzK3xcXHMrJC9nLGg9L15bLStdMHhbMC05YS1mXSskL2ksZj0vXjBiWzAxXSskL2ksXz0vXjBvWzAtN10rJC9pLHA9cGFyc2VJbnQsdj1cIm9iamVjdFwiPT10eXBlb2YgbyYmbyYmby5PYmplY3Q9PT1PYmplY3QmJm8sZz1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsYj12fHxnfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksbT1PYmplY3QucHJvdG90eXBlLHg9bS50b1N0cmluZyx3PU1hdGgubWF4LEM9TWF0aC5taW4seT1mdW5jdGlvbigpe3JldHVybiBiLkRhdGUubm93KCl9O2UuZXhwb3J0cz1yfSkuY2FsbChvLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYSxpOyFmdW5jdGlvbih0LG4pe2E9W10scj1uLGk9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yLmFwcGx5KG8sYSk6ciwhKHZvaWQgMCE9PWkmJihlLmV4cG9ydHM9aSkpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJue3JlZDp7NTA6XCIjZmZlYmVlXCIsMTAwOlwiI2ZmY2RkMlwiLDIwMDpcIiNlZjlhOWFcIiwzMDA6XCIjZTU3MzczXCIsNDAwOlwiI2VmNTM1MFwiLDUwMDpcIiNmNDQzMzZcIiw2MDA6XCIjZTUzOTM1XCIsNzAwOlwiI2QzMmYyZlwiLDgwMDpcIiNjNjI4MjhcIiw5MDA6XCIjYjcxYzFjXCIsYTEwMDpcIiNmZjhhODBcIixhMjAwOlwiI2ZmNTI1MlwiLGE0MDA6XCIjZmYxNzQ0XCIsYTcwMDpcIiNkNTAwMDBcIn0scGluazp7NTA6XCIjZmNlNGVjXCIsMTAwOlwiI2Y4YmJkMFwiLDIwMDpcIiNmNDhmYjFcIiwzMDA6XCIjZjA2MjkyXCIsNDAwOlwiI2VjNDA3YVwiLDUwMDpcIiNlOTFlNjNcIiw2MDA6XCIjZDgxYjYwXCIsNzAwOlwiI2MyMTg1YlwiLDgwMDpcIiNhZDE0NTdcIiw5MDA6XCIjODgwZTRmXCIsYTEwMDpcIiNmZjgwYWJcIixhMjAwOlwiI2ZmNDA4MVwiLGE0MDA6XCIjZjUwMDU3XCIsYTcwMDpcIiNjNTExNjJcIn0scHVycGxlOns1MDpcIiNmM2U1ZjVcIiwxMDA6XCIjZTFiZWU3XCIsMjAwOlwiI2NlOTNkOFwiLDMwMDpcIiNiYTY4YzhcIiw0MDA6XCIjYWI0N2JjXCIsNTAwOlwiIzljMjdiMFwiLDYwMDpcIiM4ZTI0YWFcIiw3MDA6XCIjN2IxZmEyXCIsODAwOlwiIzZhMWI5YVwiLDkwMDpcIiM0YTE0OGNcIixhMTAwOlwiI2VhODBmY1wiLGEyMDA6XCIjZTA0MGZiXCIsYTQwMDpcIiNkNTAwZjlcIixhNzAwOlwiI2FhMDBmZlwifSxkZWVwUHVycGxlOns1MDpcIiNlZGU3ZjZcIiwxMDA6XCIjZDFjNGU5XCIsMjAwOlwiI2IzOWRkYlwiLDMwMDpcIiM5NTc1Y2RcIiw0MDA6XCIjN2U1N2MyXCIsNTAwOlwiIzY3M2FiN1wiLDYwMDpcIiM1ZTM1YjFcIiw3MDA6XCIjNTEyZGE4XCIsODAwOlwiIzQ1MjdhMFwiLDkwMDpcIiMzMTFiOTJcIixhMTAwOlwiI2IzODhmZlwiLGEyMDA6XCIjN2M0ZGZmXCIsYTQwMDpcIiM2NTFmZmZcIixhNzAwOlwiIzYyMDBlYVwifSxpbmRpZ286ezUwOlwiI2U4ZWFmNlwiLDEwMDpcIiNjNWNhZTlcIiwyMDA6XCIjOWZhOGRhXCIsMzAwOlwiIzc5ODZjYlwiLDQwMDpcIiM1YzZiYzBcIiw1MDA6XCIjM2Y1MWI1XCIsNjAwOlwiIzM5NDlhYlwiLDcwMDpcIiMzMDNmOWZcIiw4MDA6XCIjMjgzNTkzXCIsOTAwOlwiIzFhMjM3ZVwiLGExMDA6XCIjOGM5ZWZmXCIsYTIwMDpcIiM1MzZkZmVcIixhNDAwOlwiIzNkNWFmZVwiLGE3MDA6XCIjMzA0ZmZlXCJ9LGJsdWU6ezUwOlwiI2UzZjJmZFwiLDEwMDpcIiNiYmRlZmJcIiwyMDA6XCIjOTBjYWY5XCIsMzAwOlwiIzY0YjVmNlwiLDQwMDpcIiM0MmE1ZjVcIiw1MDA6XCIjMjE5NmYzXCIsNjAwOlwiIzFlODhlNVwiLDcwMDpcIiMxOTc2ZDJcIiw4MDA6XCIjMTU2NWMwXCIsOTAwOlwiIzBkNDdhMVwiLGExMDA6XCIjODJiMWZmXCIsYTIwMDpcIiM0NDhhZmZcIixhNDAwOlwiIzI5NzlmZlwiLGE3MDA6XCIjMjk2MmZmXCJ9LGxpZ2h0Qmx1ZTp7NTA6XCIjZTFmNWZlXCIsMTAwOlwiI2IzZTVmY1wiLDIwMDpcIiM4MWQ0ZmFcIiwzMDA6XCIjNGZjM2Y3XCIsNDAwOlwiIzI5YjZmNlwiLDUwMDpcIiMwM2E5ZjRcIiw2MDA6XCIjMDM5YmU1XCIsNzAwOlwiIzAyODhkMVwiLDgwMDpcIiMwMjc3YmRcIiw5MDA6XCIjMDE1NzliXCIsYTEwMDpcIiM4MGQ4ZmZcIixhMjAwOlwiIzQwYzRmZlwiLGE0MDA6XCIjMDBiMGZmXCIsYTcwMDpcIiMwMDkxZWFcIn0sY3lhbjp7NTA6XCIjZTBmN2ZhXCIsMTAwOlwiI2IyZWJmMlwiLDIwMDpcIiM4MGRlZWFcIiwzMDA6XCIjNGRkMGUxXCIsNDAwOlwiIzI2YzZkYVwiLDUwMDpcIiMwMGJjZDRcIiw2MDA6XCIjMDBhY2MxXCIsNzAwOlwiIzAwOTdhN1wiLDgwMDpcIiMwMDgzOGZcIiw5MDA6XCIjMDA2MDY0XCIsYTEwMDpcIiM4NGZmZmZcIixhMjAwOlwiIzE4ZmZmZlwiLGE0MDA6XCIjMDBlNWZmXCIsYTcwMDpcIiMwMGI4ZDRcIn0sdGVhbDp7NTA6XCIjZTBmMmYxXCIsMTAwOlwiI2IyZGZkYlwiLDIwMDpcIiM4MGNiYzRcIiwzMDA6XCIjNGRiNmFjXCIsNDAwOlwiIzI2YTY5YVwiLDUwMDpcIiMwMDk2ODhcIiw2MDA6XCIjMDA4OTdiXCIsNzAwOlwiIzAwNzk2YlwiLDgwMDpcIiMwMDY5NWNcIiw5MDA6XCIjMDA0ZDQwXCIsYTEwMDpcIiNhN2ZmZWJcIixhMjAwOlwiIzY0ZmZkYVwiLGE0MDA6XCIjMWRlOWI2XCIsYTcwMDpcIiMwMGJmYTVcIn0sZ3JlZW46ezUwOlwiI2U4ZjVlOVwiLDEwMDpcIiNjOGU2YzlcIiwyMDA6XCIjYTVkNmE3XCIsMzAwOlwiIzgxYzc4NFwiLDQwMDpcIiM2NmJiNmFcIiw1MDA6XCIjNGNhZjUwXCIsNjAwOlwiIzQzYTA0N1wiLDcwMDpcIiMzODhlM2NcIiw4MDA6XCIjMmU3ZDMyXCIsOTAwOlwiIzFiNWUyMFwiLGExMDA6XCIjYjlmNmNhXCIsYTIwMDpcIiM2OWYwYWVcIixhNDAwOlwiIzAwZTY3NlwiLGE3MDA6XCIjMDBjODUzXCJ9LGxpZ2h0R3JlZW46ezUwOlwiI2YxZjhlOVwiLDEwMDpcIiNkY2VkYzhcIiwyMDA6XCIjYzVlMWE1XCIsMzAwOlwiI2FlZDU4MVwiLDQwMDpcIiM5Y2NjNjVcIiw1MDA6XCIjOGJjMzRhXCIsNjAwOlwiIzdjYjM0MlwiLDcwMDpcIiM2ODlmMzhcIiw4MDA6XCIjNTU4YjJmXCIsOTAwOlwiIzMzNjkxZVwiLGExMDA6XCIjY2NmZjkwXCIsYTIwMDpcIiNiMmZmNTlcIixhNDAwOlwiIzc2ZmYwM1wiLGE3MDA6XCIjNjRkZDE3XCJ9LGxpbWU6ezUwOlwiI2Y5ZmJlN1wiLDEwMDpcIiNmMGY0YzNcIiwyMDA6XCIjZTZlZTljXCIsMzAwOlwiI2RjZTc3NVwiLDQwMDpcIiNkNGUxNTdcIiw1MDA6XCIjY2RkYzM5XCIsNjAwOlwiI2MwY2EzM1wiLDcwMDpcIiNhZmI0MmJcIiw4MDA6XCIjOWU5ZDI0XCIsOTAwOlwiIzgyNzcxN1wiLGExMDA6XCIjZjRmZjgxXCIsYTIwMDpcIiNlZWZmNDFcIixhNDAwOlwiI2M2ZmYwMFwiLGE3MDA6XCIjYWVlYTAwXCJ9LHllbGxvdzp7NTA6XCIjZmZmZGU3XCIsMTAwOlwiI2ZmZjljNFwiLDIwMDpcIiNmZmY1OWRcIiwzMDA6XCIjZmZmMTc2XCIsNDAwOlwiI2ZmZWU1OFwiLDUwMDpcIiNmZmViM2JcIiw2MDA6XCIjZmRkODM1XCIsNzAwOlwiI2ZiYzAyZFwiLDgwMDpcIiNmOWE4MjVcIiw5MDA6XCIjZjU3ZjE3XCIsYTEwMDpcIiNmZmZmOGRcIixhMjAwOlwiI2ZmZmYwMFwiLGE0MDA6XCIjZmZlYTAwXCIsYTcwMDpcIiNmZmQ2MDBcIn0sYW1iZXI6ezUwOlwiI2ZmZjhlMVwiLDEwMDpcIiNmZmVjYjNcIiwyMDA6XCIjZmZlMDgyXCIsMzAwOlwiI2ZmZDU0ZlwiLDQwMDpcIiNmZmNhMjhcIiw1MDA6XCIjZmZjMTA3XCIsNjAwOlwiI2ZmYjMwMFwiLDcwMDpcIiNmZmEwMDBcIiw4MDA6XCIjZmY4ZjAwXCIsOTAwOlwiI2ZmNmYwMFwiLGExMDA6XCIjZmZlNTdmXCIsYTIwMDpcIiNmZmQ3NDBcIixhNDAwOlwiI2ZmYzQwMFwiLGE3MDA6XCIjZmZhYjAwXCJ9LG9yYW5nZTp7NTA6XCIjZmZmM2UwXCIsMTAwOlwiI2ZmZTBiMlwiLDIwMDpcIiNmZmNjODBcIiwzMDA6XCIjZmZiNzRkXCIsNDAwOlwiI2ZmYTcyNlwiLDUwMDpcIiNmZjk4MDBcIiw2MDA6XCIjZmI4YzAwXCIsNzAwOlwiI2Y1N2MwMFwiLDgwMDpcIiNlZjZjMDBcIiw5MDA6XCIjZTY1MTAwXCIsYTEwMDpcIiNmZmQxODBcIixhMjAwOlwiI2ZmYWI0MFwiLGE0MDA6XCIjZmY5MTAwXCIsYTcwMDpcIiNmZjZkMDBcIn0sZGVlcE9yYW5nZTp7NTA6XCIjZmJlOWU3XCIsMTAwOlwiI2ZmY2NiY1wiLDIwMDpcIiNmZmFiOTFcIiwzMDA6XCIjZmY4YTY1XCIsNDAwOlwiI2ZmNzA0M1wiLDUwMDpcIiNmZjU3MjJcIiw2MDA6XCIjZjQ1MTFlXCIsNzAwOlwiI2U2NGExOVwiLDgwMDpcIiNkODQzMTVcIiw5MDA6XCIjYmYzNjBjXCIsYTEwMDpcIiNmZjllODBcIixhMjAwOlwiI2ZmNmU0MFwiLGE0MDA6XCIjZmYzZDAwXCIsYTcwMDpcIiNkZDJjMDBcIn0sYnJvd246ezUwOlwiI2VmZWJlOVwiLDEwMDpcIiNkN2NjYzhcIiwyMDA6XCIjYmNhYWE0XCIsMzAwOlwiI2ExODg3ZlwiLDQwMDpcIiM4ZDZlNjNcIiw1MDA6XCIjNzk1NTQ4XCIsNjAwOlwiIzZkNGM0MVwiLDcwMDpcIiM1ZDQwMzdcIiw4MDA6XCIjNGUzNDJlXCIsOTAwOlwiIzNlMjcyM1wifSxncmV5Ons1MDpcIiNmYWZhZmFcIiwxMDA6XCIjZjVmNWY1XCIsMjAwOlwiI2VlZWVlZVwiLDMwMDpcIiNlMGUwZTBcIiw0MDA6XCIjYmRiZGJkXCIsNTAwOlwiIzllOWU5ZVwiLDYwMDpcIiM3NTc1NzVcIiw3MDA6XCIjNjE2MTYxXCIsODAwOlwiIzQyNDI0MlwiLDkwMDpcIiMyMTIxMjFcIn0sYmx1ZUdyZXk6ezUwOlwiI2VjZWZmMVwiLDEwMDpcIiNjZmQ4ZGNcIiwyMDA6XCIjYjBiZWM1XCIsMzAwOlwiIzkwYTRhZVwiLDQwMDpcIiM3ODkwOWNcIiw1MDA6XCIjNjA3ZDhiXCIsNjAwOlwiIzU0NmU3YVwiLDcwMDpcIiM0NTVhNjRcIiw4MDA6XCIjMzc0NzRmXCIsOTAwOlwiIzI2MzIzOFwifSxkYXJrVGV4dDp7cHJpbWFyeTpcInJnYmEoMCwgMCwgMCwgMC44NylcIixzZWNvbmRhcnk6XCJyZ2JhKDAsIDAsIDAsIDAuNTQpXCIsZGlzYWJsZWQ6XCJyZ2JhKDAsIDAsIDAsIDAuMzgpXCIsZGl2aWRlcnM6XCJyZ2JhKDAsIDAsIDAsIDAuMTIpXCJ9LGxpZ2h0VGV4dDp7cHJpbWFyeTpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIixzZWNvbmRhcnk6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNylcIixkaXNhYmxlZDpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwiLGRpdmlkZXJzOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKVwifSxkYXJrSWNvbnM6e2FjdGl2ZTpcInJnYmEoMCwgMCwgMCwgMC41NClcIixpbmFjdGl2ZTpcInJnYmEoMCwgMCwgMCwgMC4zOClcIn0sbGlnaHRJY29uczp7YWN0aXZlOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiLGluYWN0aXZlOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCJ9LHdoaXRlOlwiI2ZmZmZmZlwiLGJsYWNrOlwiIzAwMDAwMFwifX0pfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI7IWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGkoZSxvKXtpZihlPWU/ZTpcIlwiLG89b3x8e30sZSBpbnN0YW5jZW9mIGkpcmV0dXJuIGU7aWYoISh0aGlzIGluc3RhbmNlb2YgaSkpcmV0dXJuIG5ldyBpKGUsbyk7dmFyIHQ9bihlKTt0aGlzLl9vcmlnaW5hbElucHV0PWUsdGhpcy5fcj10LnIsdGhpcy5fZz10LmcsdGhpcy5fYj10LmIsdGhpcy5fYT10LmEsdGhpcy5fcm91bmRBPVgoMTAwKnRoaXMuX2EpLzEwMCx0aGlzLl9mb3JtYXQ9by5mb3JtYXR8fHQuZm9ybWF0LHRoaXMuX2dyYWRpZW50VHlwZT1vLmdyYWRpZW50VHlwZSx0aGlzLl9yPDEmJih0aGlzLl9yPVgodGhpcy5fcikpLHRoaXMuX2c8MSYmKHRoaXMuX2c9WCh0aGlzLl9nKSksdGhpcy5fYjwxJiYodGhpcy5fYj1YKHRoaXMuX2IpKSx0aGlzLl9vaz10Lm9rLHRoaXMuX3RjX2lkPVYrK31mdW5jdGlvbiBuKGUpe3ZhciBvPXtyOjAsZzowLGI6MH0sdD0xLHI9bnVsbCxhPW51bGwsaT1udWxsLG49ITEsbD0hMTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SShlKSksXCJvYmplY3RcIj09dHlwZW9mIGUmJihEKGUucikmJkQoZS5nKSYmRChlLmIpPyhvPXMoZS5yLGUuZyxlLmIpLG49ITAsbD1cIiVcIj09PVN0cmluZyhlLnIpLnN1YnN0cigtMSk/XCJwcmdiXCI6XCJyZ2JcIik6RChlLmgpJiZEKGUucykmJkQoZS52KT8ocj1PKGUucyksYT1PKGUudiksbz1kKGUuaCxyLGEpLG49ITAsbD1cImhzdlwiKTpEKGUuaCkmJkQoZS5zKSYmRChlLmwpJiYocj1PKGUucyksaT1PKGUubCksbz1jKGUuaCxyLGkpLG49ITAsbD1cImhzbFwiKSxlLmhhc093blByb3BlcnR5KFwiYVwiKSYmKHQ9ZS5hKSksdD1NKHQpLHtvazpuLGZvcm1hdDplLmZvcm1hdHx8bCxyOnEoMjU1LFkoby5yLDApKSxnOnEoMjU1LFkoby5nLDApKSxiOnEoMjU1LFkoby5iLDApKSxhOnR9fWZ1bmN0aW9uIHMoZSxvLHQpe3JldHVybntyOjI1NSpOKGUsMjU1KSxnOjI1NSpOKG8sMjU1KSxiOjI1NSpOKHQsMjU1KX19ZnVuY3Rpb24gbChlLG8sdCl7ZT1OKGUsMjU1KSxvPU4obywyNTUpLHQ9Tih0LDI1NSk7dmFyIHIsYSxpPVkoZSxvLHQpLG49cShlLG8sdCkscz0oaStuKS8yO2lmKGk9PW4pcj1hPTA7ZWxzZXt2YXIgbD1pLW47c3dpdGNoKGE9cz4uNT9sLygyLWktbik6bC8oaStuKSxpKXtjYXNlIGU6cj0oby10KS9sKyhvPHQ/NjowKTticmVhaztjYXNlIG86cj0odC1lKS9sKzI7YnJlYWs7Y2FzZSB0OnI9KGUtbykvbCs0fXIvPTZ9cmV0dXJue2g6cixzOmEsbDpzfX1mdW5jdGlvbiBjKGUsbyx0KXtmdW5jdGlvbiByKGUsbyx0KXtyZXR1cm4gdDwwJiYodCs9MSksdD4xJiYodC09MSksdDwxLzY/ZSs2KihvLWUpKnQ6dDwuNT9vOnQ8Mi8zP2UrKG8tZSkqKDIvMy10KSo2OmV9dmFyIGEsaSxuO2lmKGU9TihlLDM2MCksbz1OKG8sMTAwKSx0PU4odCwxMDApLDA9PT1vKWE9aT1uPXQ7ZWxzZXt2YXIgcz10PC41P3QqKDErbyk6dCtvLXQqbyxsPTIqdC1zO2E9cihsLHMsZSsxLzMpLGk9cihsLHMsZSksbj1yKGwscyxlLTEvMyl9cmV0dXJue3I6MjU1KmEsZzoyNTUqaSxiOjI1NSpufX1mdW5jdGlvbiB1KGUsbyx0KXtlPU4oZSwyNTUpLG89TihvLDI1NSksdD1OKHQsMjU1KTt2YXIgcixhLGk9WShlLG8sdCksbj1xKGUsbyx0KSxzPWksbD1pLW47aWYoYT0wPT09aT8wOmwvaSxpPT1uKXI9MDtlbHNle3N3aXRjaChpKXtjYXNlIGU6cj0oby10KS9sKyhvPHQ/NjowKTticmVhaztjYXNlIG86cj0odC1lKS9sKzI7YnJlYWs7Y2FzZSB0OnI9KGUtbykvbCs0fXIvPTZ9cmV0dXJue2g6cixzOmEsdjpzfX1mdW5jdGlvbiBkKGUsbyx0KXtlPTYqTihlLDM2MCksbz1OKG8sMTAwKSx0PU4odCwxMDApO3ZhciByPWEuZmxvb3IoZSksaT1lLXIsbj10KigxLW8pLHM9dCooMS1pKm8pLGw9dCooMS0oMS1pKSpvKSxjPXIlNix1PVt0LHMsbixuLGwsdF1bY10sZD1bbCx0LHQscyxuLG5dW2NdLGg9W24sbixsLHQsdCxzXVtjXTtyZXR1cm57cjoyNTUqdSxnOjI1NSpkLGI6MjU1Kmh9fWZ1bmN0aW9uIGgoZSxvLHQscil7dmFyIGE9W0goWChlKS50b1N0cmluZygxNikpLEgoWChvKS50b1N0cmluZygxNikpLEgoWCh0KS50b1N0cmluZygxNikpXTtyZXR1cm4gciYmYVswXS5jaGFyQXQoMCk9PWFbMF0uY2hhckF0KDEpJiZhWzFdLmNoYXJBdCgwKT09YVsxXS5jaGFyQXQoMSkmJmFbMl0uY2hhckF0KDApPT1hWzJdLmNoYXJBdCgxKT9hWzBdLmNoYXJBdCgwKSthWzFdLmNoYXJBdCgwKSthWzJdLmNoYXJBdCgwKTphLmpvaW4oXCJcIil9ZnVuY3Rpb24gZihlLG8sdCxyLGEpe3ZhciBpPVtIKFgoZSkudG9TdHJpbmcoMTYpKSxIKFgobykudG9TdHJpbmcoMTYpKSxIKFgodCkudG9TdHJpbmcoMTYpKSxIKHoocikpXTtyZXR1cm4gYSYmaVswXS5jaGFyQXQoMCk9PWlbMF0uY2hhckF0KDEpJiZpWzFdLmNoYXJBdCgwKT09aVsxXS5jaGFyQXQoMSkmJmlbMl0uY2hhckF0KDApPT1pWzJdLmNoYXJBdCgxKSYmaVszXS5jaGFyQXQoMCk9PWlbM10uY2hhckF0KDEpP2lbMF0uY2hhckF0KDApK2lbMV0uY2hhckF0KDApK2lbMl0uY2hhckF0KDApK2lbM10uY2hhckF0KDApOmkuam9pbihcIlwiKX1mdW5jdGlvbiBfKGUsbyx0LHIpe3ZhciBhPVtIKHoocikpLEgoWChlKS50b1N0cmluZygxNikpLEgoWChvKS50b1N0cmluZygxNikpLEgoWCh0KS50b1N0cmluZygxNikpXTtyZXR1cm4gYS5qb2luKFwiXCIpfWZ1bmN0aW9uIHAoZSxvKXtvPTA9PT1vPzA6b3x8MTA7dmFyIHQ9aShlKS50b0hzbCgpO3JldHVybiB0LnMtPW8vMTAwLHQucz1QKHQucyksaSh0KX1mdW5jdGlvbiB2KGUsbyl7bz0wPT09bz8wOm98fDEwO3ZhciB0PWkoZSkudG9Ic2woKTtyZXR1cm4gdC5zKz1vLzEwMCx0LnM9UCh0LnMpLGkodCl9ZnVuY3Rpb24gZyhlKXtyZXR1cm4gaShlKS5kZXNhdHVyYXRlKDEwMCl9ZnVuY3Rpb24gYihlLG8pe289MD09PW8/MDpvfHwxMDt2YXIgdD1pKGUpLnRvSHNsKCk7cmV0dXJuIHQubCs9by8xMDAsdC5sPVAodC5sKSxpKHQpfWZ1bmN0aW9uIG0oZSxvKXtvPTA9PT1vPzA6b3x8MTA7dmFyIHQ9aShlKS50b1JnYigpO3JldHVybiB0LnI9WSgwLHEoMjU1LHQuci1YKDI1NSotKG8vMTAwKSkpKSx0Lmc9WSgwLHEoMjU1LHQuZy1YKDI1NSotKG8vMTAwKSkpKSx0LmI9WSgwLHEoMjU1LHQuYi1YKDI1NSotKG8vMTAwKSkpKSxpKHQpfWZ1bmN0aW9uIHgoZSxvKXtvPTA9PT1vPzA6b3x8MTA7dmFyIHQ9aShlKS50b0hzbCgpO3JldHVybiB0LmwtPW8vMTAwLHQubD1QKHQubCksaSh0KX1mdW5jdGlvbiB3KGUsbyl7dmFyIHQ9aShlKS50b0hzbCgpLHI9KHQuaCtvKSUzNjA7cmV0dXJuIHQuaD1yPDA/MzYwK3I6cixpKHQpfWZ1bmN0aW9uIEMoZSl7dmFyIG89aShlKS50b0hzbCgpO3JldHVybiBvLmg9KG8uaCsxODApJTM2MCxpKG8pfWZ1bmN0aW9uIHkoZSl7dmFyIG89aShlKS50b0hzbCgpLHQ9by5oO3JldHVybltpKGUpLGkoe2g6KHQrMTIwKSUzNjAsczpvLnMsbDpvLmx9KSxpKHtoOih0KzI0MCklMzYwLHM6by5zLGw6by5sfSldfWZ1bmN0aW9uIGsoZSl7dmFyIG89aShlKS50b0hzbCgpLHQ9by5oO3JldHVybltpKGUpLGkoe2g6KHQrOTApJTM2MCxzOm8ucyxsOm8ubH0pLGkoe2g6KHQrMTgwKSUzNjAsczpvLnMsbDpvLmx9KSxpKHtoOih0KzI3MCklMzYwLHM6by5zLGw6by5sfSldfWZ1bmN0aW9uIEYoZSl7dmFyIG89aShlKS50b0hzbCgpLHQ9by5oO3JldHVybltpKGUpLGkoe2g6KHQrNzIpJTM2MCxzOm8ucyxsOm8ubH0pLGkoe2g6KHQrMjE2KSUzNjAsczpvLnMsbDpvLmx9KV19ZnVuY3Rpb24gQShlLG8sdCl7bz1vfHw2LHQ9dHx8MzA7dmFyIHI9aShlKS50b0hzbCgpLGE9MzYwL3Qsbj1baShlKV07Zm9yKHIuaD0oci5oLShhKm8+PjEpKzcyMCklMzYwOy0tbzspci5oPShyLmgrYSklMzYwLG4ucHVzaChpKHIpKTtyZXR1cm4gbn1mdW5jdGlvbiBSKGUsbyl7bz1vfHw2O2Zvcih2YXIgdD1pKGUpLnRvSHN2KCkscj10LmgsYT10LnMsbj10LnYscz1bXSxsPTEvbztvLS07KXMucHVzaChpKHtoOnIsczphLHY6bn0pKSxuPShuK2wpJTE7cmV0dXJuIHN9ZnVuY3Rpb24gUyhlKXt2YXIgbz17fTtmb3IodmFyIHQgaW4gZSllLmhhc093blByb3BlcnR5KHQpJiYob1tlW3RdXT10KTtyZXR1cm4gb31mdW5jdGlvbiBNKGUpe3JldHVybiBlPXBhcnNlRmxvYXQoZSksKGlzTmFOKGUpfHxlPDB8fGU+MSkmJihlPTEpLGV9ZnVuY3Rpb24gTihlLG8pe0woZSkmJihlPVwiMTAwJVwiKTt2YXIgdD1FKGUpO3JldHVybiBlPXEobyxZKDAscGFyc2VGbG9hdChlKSkpLHQmJihlPXBhcnNlSW50KGUqbywxMCkvMTAwKSxhLmFicyhlLW8pPDFlLTY/MTplJW8vcGFyc2VGbG9hdChvKX1mdW5jdGlvbiBQKGUpe3JldHVybiBxKDEsWSgwLGUpKX1mdW5jdGlvbiBqKGUpe3JldHVybiBwYXJzZUludChlLDE2KX1mdW5jdGlvbiBMKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLmluZGV4T2YoXCIuXCIpIT0tMSYmMT09PXBhcnNlRmxvYXQoZSl9ZnVuY3Rpb24gRShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmZS5pbmRleE9mKFwiJVwiKSE9LTF9ZnVuY3Rpb24gSChlKXtyZXR1cm4gMT09ZS5sZW5ndGg/XCIwXCIrZTpcIlwiK2V9ZnVuY3Rpb24gTyhlKXtyZXR1cm4gZTw9MSYmKGU9MTAwKmUrXCIlXCIpLGV9ZnVuY3Rpb24geihlKXtyZXR1cm4gYS5yb3VuZCgyNTUqcGFyc2VGbG9hdChlKSkudG9TdHJpbmcoMTYpfWZ1bmN0aW9uIEIoZSl7cmV0dXJuIGooZSkvMjU1fWZ1bmN0aW9uIEQoZSl7cmV0dXJuISFaLkNTU19VTklULmV4ZWMoZSl9ZnVuY3Rpb24gSShlKXtlPWUucmVwbGFjZSgkLFwiXCIpLnJlcGxhY2UoVSxcIlwiKS50b0xvd2VyQ2FzZSgpO3ZhciBvPSExO2lmKEdbZV0pZT1HW2VdLG89ITA7ZWxzZSBpZihcInRyYW5zcGFyZW50XCI9PWUpcmV0dXJue3I6MCxnOjAsYjowLGE6MCxmb3JtYXQ6XCJuYW1lXCJ9O3ZhciB0O3JldHVybih0PVoucmdiLmV4ZWMoZSkpP3tyOnRbMV0sZzp0WzJdLGI6dFszXX06KHQ9Wi5yZ2JhLmV4ZWMoZSkpP3tyOnRbMV0sZzp0WzJdLGI6dFszXSxhOnRbNF19Oih0PVouaHNsLmV4ZWMoZSkpP3toOnRbMV0sczp0WzJdLGw6dFszXX06KHQ9Wi5oc2xhLmV4ZWMoZSkpP3toOnRbMV0sczp0WzJdLGw6dFszXSxhOnRbNF19Oih0PVouaHN2LmV4ZWMoZSkpP3toOnRbMV0sczp0WzJdLHY6dFszXX06KHQ9Wi5oc3ZhLmV4ZWMoZSkpP3toOnRbMV0sczp0WzJdLHY6dFszXSxhOnRbNF19Oih0PVouaGV4OC5leGVjKGUpKT97cjpqKHRbMV0pLGc6aih0WzJdKSxiOmoodFszXSksYTpCKHRbNF0pLGZvcm1hdDpvP1wibmFtZVwiOlwiaGV4OFwifToodD1aLmhleDYuZXhlYyhlKSk/e3I6aih0WzFdKSxnOmoodFsyXSksYjpqKHRbM10pLGZvcm1hdDpvP1wibmFtZVwiOlwiaGV4XCJ9Oih0PVouaGV4NC5leGVjKGUpKT97cjpqKHRbMV0rXCJcIit0WzFdKSxnOmoodFsyXStcIlwiK3RbMl0pLGI6aih0WzNdK1wiXCIrdFszXSksYTpCKHRbNF0rXCJcIit0WzRdKSxmb3JtYXQ6bz9cIm5hbWVcIjpcImhleDhcIn06ISEodD1aLmhleDMuZXhlYyhlKSkmJntyOmoodFsxXStcIlwiK3RbMV0pLGc6aih0WzJdK1wiXCIrdFsyXSksYjpqKHRbM10rXCJcIit0WzNdKSxmb3JtYXQ6bz9cIm5hbWVcIjpcImhleFwifX1mdW5jdGlvbiBUKGUpe3ZhciBvLHQ7cmV0dXJuIGU9ZXx8e2xldmVsOlwiQUFcIixzaXplOlwic21hbGxcIn0sbz0oZS5sZXZlbHx8XCJBQVwiKS50b1VwcGVyQ2FzZSgpLHQ9KGUuc2l6ZXx8XCJzbWFsbFwiKS50b0xvd2VyQ2FzZSgpLFwiQUFcIiE9PW8mJlwiQUFBXCIhPT1vJiYobz1cIkFBXCIpLFwic21hbGxcIiE9PXQmJlwibGFyZ2VcIiE9PXQmJih0PVwic21hbGxcIikse2xldmVsOm8sc2l6ZTp0fX12YXIgJD0vXlxccysvLFU9L1xccyskLyxWPTAsWD1hLnJvdW5kLHE9YS5taW4sWT1hLm1heCxXPWEucmFuZG9tO2kucHJvdG90eXBlPXtpc0Rhcms6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRCcmlnaHRuZXNzKCk8MTI4fSxpc0xpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNEYXJrKCl9LGlzVmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb2t9LGdldE9yaWdpbmFsSW5wdXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb3JpZ2luYWxJbnB1dH0sZ2V0Rm9ybWF0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Zvcm1hdH0sZ2V0QWxwaGE6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYX0sZ2V0QnJpZ2h0bmVzczpmdW5jdGlvbigpe3ZhciBlPXRoaXMudG9SZ2IoKTtyZXR1cm4oMjk5KmUucis1ODcqZS5nKzExNCplLmIpLzFlM30sZ2V0THVtaW5hbmNlOmZ1bmN0aW9uKCl7dmFyIGUsbyx0LHIsaSxuLHM9dGhpcy50b1JnYigpO3JldHVybiBlPXMuci8yNTUsbz1zLmcvMjU1LHQ9cy5iLzI1NSxyPWU8PS4wMzkyOD9lLzEyLjkyOmEucG93KChlKy4wNTUpLzEuMDU1LDIuNCksaT1vPD0uMDM5Mjg/by8xMi45MjphLnBvdygobysuMDU1KS8xLjA1NSwyLjQpLG49dDw9LjAzOTI4P3QvMTIuOTI6YS5wb3coKHQrLjA1NSkvMS4wNTUsMi40KSwuMjEyNipyKy43MTUyKmkrLjA3MjIqbn0sc2V0QWxwaGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2E9TShlKSx0aGlzLl9yb3VuZEE9WCgxMDAqdGhpcy5fYSkvMTAwLHRoaXN9LHRvSHN2OmZ1bmN0aW9uKCl7dmFyIGU9dSh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYik7cmV0dXJue2g6MzYwKmUuaCxzOmUucyx2OmUudixhOnRoaXMuX2F9fSx0b0hzdlN0cmluZzpmdW5jdGlvbigpe3ZhciBlPXUodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IpLG89WCgzNjAqZS5oKSx0PVgoMTAwKmUucykscj1YKDEwMCplLnYpO3JldHVybiAxPT10aGlzLl9hP1wiaHN2KFwiK28rXCIsIFwiK3QrXCIlLCBcIityK1wiJSlcIjpcImhzdmEoXCIrbytcIiwgXCIrdCtcIiUsIFwiK3IrXCIlLCBcIit0aGlzLl9yb3VuZEErXCIpXCJ9LHRvSHNsOmZ1bmN0aW9uKCl7dmFyIGU9bCh0aGlzLl9yLHRoaXMuX2csdGhpcy5fYik7cmV0dXJue2g6MzYwKmUuaCxzOmUucyxsOmUubCxhOnRoaXMuX2F9fSx0b0hzbFN0cmluZzpmdW5jdGlvbigpe3ZhciBlPWwodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IpLG89WCgzNjAqZS5oKSx0PVgoMTAwKmUucykscj1YKDEwMCplLmwpO3JldHVybiAxPT10aGlzLl9hP1wiaHNsKFwiK28rXCIsIFwiK3QrXCIlLCBcIityK1wiJSlcIjpcImhzbGEoXCIrbytcIiwgXCIrdCtcIiUsIFwiK3IrXCIlLCBcIit0aGlzLl9yb3VuZEErXCIpXCJ9LHRvSGV4OmZ1bmN0aW9uKGUpe3JldHVybiBoKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLGUpfSx0b0hleFN0cmluZzpmdW5jdGlvbihlKXtyZXR1cm5cIiNcIit0aGlzLnRvSGV4KGUpfSx0b0hleDg6ZnVuY3Rpb24oZSl7cmV0dXJuIGYodGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsdGhpcy5fYSxlKX0sdG9IZXg4U3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVyblwiI1wiK3RoaXMudG9IZXg4KGUpfSx0b1JnYjpmdW5jdGlvbigpe3JldHVybntyOlgodGhpcy5fciksZzpYKHRoaXMuX2cpLGI6WCh0aGlzLl9iKSxhOnRoaXMuX2F9fSx0b1JnYlN0cmluZzpmdW5jdGlvbigpe3JldHVybiAxPT10aGlzLl9hP1wicmdiKFwiK1godGhpcy5fcikrXCIsIFwiK1godGhpcy5fZykrXCIsIFwiK1godGhpcy5fYikrXCIpXCI6XCJyZ2JhKFwiK1godGhpcy5fcikrXCIsIFwiK1godGhpcy5fZykrXCIsIFwiK1godGhpcy5fYikrXCIsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9QZXJjZW50YWdlUmdiOmZ1bmN0aW9uKCl7cmV0dXJue3I6WCgxMDAqTih0aGlzLl9yLDI1NSkpK1wiJVwiLGc6WCgxMDAqTih0aGlzLl9nLDI1NSkpK1wiJVwiLGI6WCgxMDAqTih0aGlzLl9iLDI1NSkpK1wiJVwiLGE6dGhpcy5fYX19LHRvUGVyY2VudGFnZVJnYlN0cmluZzpmdW5jdGlvbigpe3JldHVybiAxPT10aGlzLl9hP1wicmdiKFwiK1goMTAwKk4odGhpcy5fciwyNTUpKStcIiUsIFwiK1goMTAwKk4odGhpcy5fZywyNTUpKStcIiUsIFwiK1goMTAwKk4odGhpcy5fYiwyNTUpKStcIiUpXCI6XCJyZ2JhKFwiK1goMTAwKk4odGhpcy5fciwyNTUpKStcIiUsIFwiK1goMTAwKk4odGhpcy5fZywyNTUpKStcIiUsIFwiK1goMTAwKk4odGhpcy5fYiwyNTUpKStcIiUsIFwiK3RoaXMuX3JvdW5kQStcIilcIn0sdG9OYW1lOmZ1bmN0aW9uKCl7cmV0dXJuIDA9PT10aGlzLl9hP1widHJhbnNwYXJlbnRcIjohKHRoaXMuX2E8MSkmJihLW2godGhpcy5fcix0aGlzLl9nLHRoaXMuX2IsITApXXx8ITEpfSx0b0ZpbHRlcjpmdW5jdGlvbihlKXt2YXIgbz1cIiNcIitfKHRoaXMuX3IsdGhpcy5fZyx0aGlzLl9iLHRoaXMuX2EpLHQ9byxyPXRoaXMuX2dyYWRpZW50VHlwZT9cIkdyYWRpZW50VHlwZSA9IDEsIFwiOlwiXCI7aWYoZSl7dmFyIGE9aShlKTt0PVwiI1wiK18oYS5fcixhLl9nLGEuX2IsYS5fYSl9cmV0dXJuXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoXCIrcitcInN0YXJ0Q29sb3JzdHI9XCIrbytcIixlbmRDb2xvcnN0cj1cIit0K1wiKVwifSx0b1N0cmluZzpmdW5jdGlvbihlKXt2YXIgbz0hIWU7ZT1lfHx0aGlzLl9mb3JtYXQ7dmFyIHQ9ITEscj10aGlzLl9hPDEmJnRoaXMuX2E+PTAsYT0hbyYmciYmKFwiaGV4XCI9PT1lfHxcImhleDZcIj09PWV8fFwiaGV4M1wiPT09ZXx8XCJoZXg0XCI9PT1lfHxcImhleDhcIj09PWV8fFwibmFtZVwiPT09ZSk7cmV0dXJuIGE/XCJuYW1lXCI9PT1lJiYwPT09dGhpcy5fYT90aGlzLnRvTmFtZSgpOnRoaXMudG9SZ2JTdHJpbmcoKTooXCJyZ2JcIj09PWUmJih0PXRoaXMudG9SZ2JTdHJpbmcoKSksXCJwcmdiXCI9PT1lJiYodD10aGlzLnRvUGVyY2VudGFnZVJnYlN0cmluZygpKSxcImhleFwiIT09ZSYmXCJoZXg2XCIhPT1lfHwodD10aGlzLnRvSGV4U3RyaW5nKCkpLFwiaGV4M1wiPT09ZSYmKHQ9dGhpcy50b0hleFN0cmluZyghMCkpLFwiaGV4NFwiPT09ZSYmKHQ9dGhpcy50b0hleDhTdHJpbmcoITApKSxcImhleDhcIj09PWUmJih0PXRoaXMudG9IZXg4U3RyaW5nKCkpLFwibmFtZVwiPT09ZSYmKHQ9dGhpcy50b05hbWUoKSksXCJoc2xcIj09PWUmJih0PXRoaXMudG9Ic2xTdHJpbmcoKSksXCJoc3ZcIj09PWUmJih0PXRoaXMudG9Ic3ZTdHJpbmcoKSksdHx8dGhpcy50b0hleFN0cmluZygpKX0sY2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gaSh0aGlzLnRvU3RyaW5nKCkpfSxfYXBwbHlNb2RpZmljYXRpb246ZnVuY3Rpb24oZSxvKXt2YXIgdD1lLmFwcGx5KG51bGwsW3RoaXNdLmNvbmNhdChbXS5zbGljZS5jYWxsKG8pKSk7cmV0dXJuIHRoaXMuX3I9dC5fcix0aGlzLl9nPXQuX2csdGhpcy5fYj10Ll9iLHRoaXMuc2V0QWxwaGEodC5fYSksdGhpc30sbGlnaHRlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihiLGFyZ3VtZW50cyl9LGJyaWdodGVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKG0sYXJndW1lbnRzKX0sZGFya2VuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHgsYXJndW1lbnRzKX0sZGVzYXR1cmF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbihwLGFyZ3VtZW50cyl9LHNhdHVyYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKHYsYXJndW1lbnRzKX0sZ3JleXNjYWxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5TW9kaWZpY2F0aW9uKGcsYXJndW1lbnRzKX0sc3BpbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hcHBseU1vZGlmaWNhdGlvbih3LGFyZ3VtZW50cyl9LF9hcHBseUNvbWJpbmF0aW9uOmZ1bmN0aW9uKGUsbyl7cmV0dXJuIGUuYXBwbHkobnVsbCxbdGhpc10uY29uY2F0KFtdLnNsaWNlLmNhbGwobykpKX0sYW5hbG9nb3VzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oQSxhcmd1bWVudHMpfSxjb21wbGVtZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oQyxhcmd1bWVudHMpfSxtb25vY2hyb21hdGljOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oUixhcmd1bWVudHMpfSxzcGxpdGNvbXBsZW1lbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihGLGFyZ3VtZW50cyl9LHRyaWFkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2FwcGx5Q29tYmluYXRpb24oeSxhcmd1bWVudHMpfSx0ZXRyYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXBwbHlDb21iaW5hdGlvbihrLGFyZ3VtZW50cyl9fSxpLmZyb21SYXRpbz1mdW5jdGlvbihlLG8pe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXt2YXIgdD17fTtmb3IodmFyIHIgaW4gZSllLmhhc093blByb3BlcnR5KHIpJiYoXCJhXCI9PT1yP3Rbcl09ZVtyXTp0W3JdPU8oZVtyXSkpO2U9dH1yZXR1cm4gaShlLG8pfSxpLmVxdWFscz1mdW5jdGlvbihlLG8pe3JldHVybiEoIWV8fCFvKSYmaShlKS50b1JnYlN0cmluZygpPT1pKG8pLnRvUmdiU3RyaW5nKCl9LGkucmFuZG9tPWZ1bmN0aW9uKCl7cmV0dXJuIGkuZnJvbVJhdGlvKHtyOlcoKSxnOlcoKSxiOlcoKX0pfSxpLm1peD1mdW5jdGlvbihlLG8sdCl7dD0wPT09dD8wOnR8fDUwO3ZhciByPWkoZSkudG9SZ2IoKSxhPWkobykudG9SZ2IoKSxuPXQvMTAwLHM9e3I6KGEuci1yLnIpKm4rci5yLGc6KGEuZy1yLmcpKm4rci5nLGI6KGEuYi1yLmIpKm4rci5iLGE6KGEuYS1yLmEpKm4rci5hfTtyZXR1cm4gaShzKX0saS5yZWFkYWJpbGl0eT1mdW5jdGlvbihlLG8pe3ZhciB0PWkoZSkscj1pKG8pO3JldHVybihhLm1heCh0LmdldEx1bWluYW5jZSgpLHIuZ2V0THVtaW5hbmNlKCkpKy4wNSkvKGEubWluKHQuZ2V0THVtaW5hbmNlKCksci5nZXRMdW1pbmFuY2UoKSkrLjA1KX0saS5pc1JlYWRhYmxlPWZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhLG49aS5yZWFkYWJpbGl0eShlLG8pO3N3aXRjaChhPSExLHI9VCh0KSxyLmxldmVsK3Iuc2l6ZSl7Y2FzZVwiQUFzbWFsbFwiOmNhc2VcIkFBQWxhcmdlXCI6YT1uPj00LjU7YnJlYWs7Y2FzZVwiQUFsYXJnZVwiOmE9bj49MzticmVhaztjYXNlXCJBQUFzbWFsbFwiOmE9bj49N31yZXR1cm4gYX0saS5tb3N0UmVhZGFibGU9ZnVuY3Rpb24oZSxvLHQpe3ZhciByLGEsbixzLGw9bnVsbCxjPTA7dD10fHx7fSxhPXQuaW5jbHVkZUZhbGxiYWNrQ29sb3JzLG49dC5sZXZlbCxzPXQuc2l6ZTtmb3IodmFyIHU9MDt1PG8ubGVuZ3RoO3UrKylyPWkucmVhZGFiaWxpdHkoZSxvW3VdKSxyPmMmJihjPXIsbD1pKG9bdV0pKTtyZXR1cm4gaS5pc1JlYWRhYmxlKGUsbCx7bGV2ZWw6bixzaXplOnN9KXx8IWE/bDoodC5pbmNsdWRlRmFsbGJhY2tDb2xvcnM9ITEsaS5tb3N0UmVhZGFibGUoZSxbXCIjZmZmXCIsXCIjMDAwXCJdLHQpKX07dmFyIEc9aS5uYW1lcz17YWxpY2VibHVlOlwiZjBmOGZmXCIsYW50aXF1ZXdoaXRlOlwiZmFlYmQ3XCIsYXF1YTpcIjBmZlwiLGFxdWFtYXJpbmU6XCI3ZmZmZDRcIixhenVyZTpcImYwZmZmZlwiLGJlaWdlOlwiZjVmNWRjXCIsYmlzcXVlOlwiZmZlNGM0XCIsYmxhY2s6XCIwMDBcIixibGFuY2hlZGFsbW9uZDpcImZmZWJjZFwiLGJsdWU6XCIwMGZcIixibHVldmlvbGV0OlwiOGEyYmUyXCIsYnJvd246XCJhNTJhMmFcIixidXJseXdvb2Q6XCJkZWI4ODdcIixidXJudHNpZW5uYTpcImVhN2U1ZFwiLGNhZGV0Ymx1ZTpcIjVmOWVhMFwiLGNoYXJ0cmV1c2U6XCI3ZmZmMDBcIixjaG9jb2xhdGU6XCJkMjY5MWVcIixjb3JhbDpcImZmN2Y1MFwiLGNvcm5mbG93ZXJibHVlOlwiNjQ5NWVkXCIsY29ybnNpbGs6XCJmZmY4ZGNcIixjcmltc29uOlwiZGMxNDNjXCIsY3lhbjpcIjBmZlwiLGRhcmtibHVlOlwiMDAwMDhiXCIsZGFya2N5YW46XCIwMDhiOGJcIixkYXJrZ29sZGVucm9kOlwiYjg4NjBiXCIsZGFya2dyYXk6XCJhOWE5YTlcIixkYXJrZ3JlZW46XCIwMDY0MDBcIixkYXJrZ3JleTpcImE5YTlhOVwiLGRhcmtraGFraTpcImJkYjc2YlwiLGRhcmttYWdlbnRhOlwiOGIwMDhiXCIsZGFya29saXZlZ3JlZW46XCI1NTZiMmZcIixkYXJrb3JhbmdlOlwiZmY4YzAwXCIsZGFya29yY2hpZDpcIjk5MzJjY1wiLGRhcmtyZWQ6XCI4YjAwMDBcIixkYXJrc2FsbW9uOlwiZTk5NjdhXCIsZGFya3NlYWdyZWVuOlwiOGZiYzhmXCIsZGFya3NsYXRlYmx1ZTpcIjQ4M2Q4YlwiLGRhcmtzbGF0ZWdyYXk6XCIyZjRmNGZcIixkYXJrc2xhdGVncmV5OlwiMmY0ZjRmXCIsZGFya3R1cnF1b2lzZTpcIjAwY2VkMVwiLGRhcmt2aW9sZXQ6XCI5NDAwZDNcIixkZWVwcGluazpcImZmMTQ5M1wiLGRlZXBza3libHVlOlwiMDBiZmZmXCIsZGltZ3JheTpcIjY5Njk2OVwiLGRpbWdyZXk6XCI2OTY5NjlcIixkb2RnZXJibHVlOlwiMWU5MGZmXCIsZmlyZWJyaWNrOlwiYjIyMjIyXCIsZmxvcmFsd2hpdGU6XCJmZmZhZjBcIixmb3Jlc3RncmVlbjpcIjIyOGIyMlwiLGZ1Y2hzaWE6XCJmMGZcIixnYWluc2Jvcm86XCJkY2RjZGNcIixnaG9zdHdoaXRlOlwiZjhmOGZmXCIsZ29sZDpcImZmZDcwMFwiLGdvbGRlbnJvZDpcImRhYTUyMFwiLGdyYXk6XCI4MDgwODBcIixncmVlbjpcIjAwODAwMFwiLGdyZWVueWVsbG93OlwiYWRmZjJmXCIsZ3JleTpcIjgwODA4MFwiLGhvbmV5ZGV3OlwiZjBmZmYwXCIsaG90cGluazpcImZmNjliNFwiLGluZGlhbnJlZDpcImNkNWM1Y1wiLGluZGlnbzpcIjRiMDA4MlwiLGl2b3J5OlwiZmZmZmYwXCIsa2hha2k6XCJmMGU2OGNcIixsYXZlbmRlcjpcImU2ZTZmYVwiLGxhdmVuZGVyYmx1c2g6XCJmZmYwZjVcIixsYXduZ3JlZW46XCI3Y2ZjMDBcIixsZW1vbmNoaWZmb246XCJmZmZhY2RcIixsaWdodGJsdWU6XCJhZGQ4ZTZcIixsaWdodGNvcmFsOlwiZjA4MDgwXCIsbGlnaHRjeWFuOlwiZTBmZmZmXCIsbGlnaHRnb2xkZW5yb2R5ZWxsb3c6XCJmYWZhZDJcIixsaWdodGdyYXk6XCJkM2QzZDNcIixsaWdodGdyZWVuOlwiOTBlZTkwXCIsbGlnaHRncmV5OlwiZDNkM2QzXCIsbGlnaHRwaW5rOlwiZmZiNmMxXCIsbGlnaHRzYWxtb246XCJmZmEwN2FcIixsaWdodHNlYWdyZWVuOlwiMjBiMmFhXCIsbGlnaHRza3libHVlOlwiODdjZWZhXCIsbGlnaHRzbGF0ZWdyYXk6XCI3ODlcIixsaWdodHNsYXRlZ3JleTpcIjc4OVwiLGxpZ2h0c3RlZWxibHVlOlwiYjBjNGRlXCIsbGlnaHR5ZWxsb3c6XCJmZmZmZTBcIixsaW1lOlwiMGYwXCIsbGltZWdyZWVuOlwiMzJjZDMyXCIsbGluZW46XCJmYWYwZTZcIixtYWdlbnRhOlwiZjBmXCIsbWFyb29uOlwiODAwMDAwXCIsbWVkaXVtYXF1YW1hcmluZTpcIjY2Y2RhYVwiLG1lZGl1bWJsdWU6XCIwMDAwY2RcIixtZWRpdW1vcmNoaWQ6XCJiYTU1ZDNcIixtZWRpdW1wdXJwbGU6XCI5MzcwZGJcIixtZWRpdW1zZWFncmVlbjpcIjNjYjM3MVwiLG1lZGl1bXNsYXRlYmx1ZTpcIjdiNjhlZVwiLG1lZGl1bXNwcmluZ2dyZWVuOlwiMDBmYTlhXCIsbWVkaXVtdHVycXVvaXNlOlwiNDhkMWNjXCIsbWVkaXVtdmlvbGV0cmVkOlwiYzcxNTg1XCIsbWlkbmlnaHRibHVlOlwiMTkxOTcwXCIsbWludGNyZWFtOlwiZjVmZmZhXCIsbWlzdHlyb3NlOlwiZmZlNGUxXCIsbW9jY2FzaW46XCJmZmU0YjVcIixuYXZham93aGl0ZTpcImZmZGVhZFwiLG5hdnk6XCIwMDAwODBcIixvbGRsYWNlOlwiZmRmNWU2XCIsb2xpdmU6XCI4MDgwMDBcIixvbGl2ZWRyYWI6XCI2YjhlMjNcIixvcmFuZ2U6XCJmZmE1MDBcIixvcmFuZ2VyZWQ6XCJmZjQ1MDBcIixvcmNoaWQ6XCJkYTcwZDZcIixwYWxlZ29sZGVucm9kOlwiZWVlOGFhXCIscGFsZWdyZWVuOlwiOThmYjk4XCIscGFsZXR1cnF1b2lzZTpcImFmZWVlZVwiLHBhbGV2aW9sZXRyZWQ6XCJkYjcwOTNcIixwYXBheWF3aGlwOlwiZmZlZmQ1XCIscGVhY2hwdWZmOlwiZmZkYWI5XCIscGVydTpcImNkODUzZlwiLHBpbms6XCJmZmMwY2JcIixwbHVtOlwiZGRhMGRkXCIscG93ZGVyYmx1ZTpcImIwZTBlNlwiLHB1cnBsZTpcIjgwMDA4MFwiLHJlYmVjY2FwdXJwbGU6XCI2NjMzOTlcIixyZWQ6XCJmMDBcIixyb3N5YnJvd246XCJiYzhmOGZcIixyb3lhbGJsdWU6XCI0MTY5ZTFcIixzYWRkbGVicm93bjpcIjhiNDUxM1wiLHNhbG1vbjpcImZhODA3MlwiLHNhbmR5YnJvd246XCJmNGE0NjBcIixzZWFncmVlbjpcIjJlOGI1N1wiLHNlYXNoZWxsOlwiZmZmNWVlXCIsc2llbm5hOlwiYTA1MjJkXCIsc2lsdmVyOlwiYzBjMGMwXCIsc2t5Ymx1ZTpcIjg3Y2VlYlwiLHNsYXRlYmx1ZTpcIjZhNWFjZFwiLHNsYXRlZ3JheTpcIjcwODA5MFwiLHNsYXRlZ3JleTpcIjcwODA5MFwiLHNub3c6XCJmZmZhZmFcIixzcHJpbmdncmVlbjpcIjAwZmY3ZlwiLHN0ZWVsYmx1ZTpcIjQ2ODJiNFwiLHRhbjpcImQyYjQ4Y1wiLHRlYWw6XCIwMDgwODBcIix0aGlzdGxlOlwiZDhiZmQ4XCIsdG9tYXRvOlwiZmY2MzQ3XCIsdHVycXVvaXNlOlwiNDBlMGQwXCIsdmlvbGV0OlwiZWU4MmVlXCIsd2hlYXQ6XCJmNWRlYjNcIix3aGl0ZTpcImZmZlwiLHdoaXRlc21va2U6XCJmNWY1ZjVcIix5ZWxsb3c6XCJmZjBcIix5ZWxsb3dncmVlbjpcIjlhY2QzMlwifSxLPWkuaGV4TmFtZXM9UyhHKSxaPWZ1bmN0aW9uKCl7dmFyIGU9XCJbLVxcXFwrXT9cXFxcZCslP1wiLG89XCJbLVxcXFwrXT9cXFxcZCpcXFxcLlxcXFxkKyU/XCIsdD1cIig/OlwiK28rXCIpfCg/OlwiK2UrXCIpXCIscj1cIltcXFxcc3xcXFxcKF0rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVssfFxcXFxzXSsoXCIrdCtcIilcXFxccypcXFxcKT9cIixhPVwiW1xcXFxzfFxcXFwoXSsoXCIrdCtcIilbLHxcXFxcc10rKFwiK3QrXCIpWyx8XFxcXHNdKyhcIit0K1wiKVssfFxcXFxzXSsoXCIrdCtcIilcXFxccypcXFxcKT9cIjtyZXR1cm57Q1NTX1VOSVQ6bmV3IFJlZ0V4cCh0KSxyZ2I6bmV3IFJlZ0V4cChcInJnYlwiK3IpLHJnYmE6bmV3IFJlZ0V4cChcInJnYmFcIithKSxoc2w6bmV3IFJlZ0V4cChcImhzbFwiK3IpLGhzbGE6bmV3IFJlZ0V4cChcImhzbGFcIithKSxoc3Y6bmV3IFJlZ0V4cChcImhzdlwiK3IpLGhzdmE6bmV3IFJlZ0V4cChcImhzdmFcIithKSxoZXgzOi9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxoZXg2Oi9eIz8oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyxoZXg0Oi9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8saGV4ODovXiM/KFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvfX0oKTtcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmZS5leHBvcnRzP2UuZXhwb3J0cz1pOihyPWZ1bmN0aW9uKCl7cmV0dXJuIGl9LmNhbGwobyx0LG8sZSksISh2b2lkIDAhPT1yJiYoZS5leHBvcnRzPXIpKSl9KE1hdGgpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHIsYTt0KDY0KSxyPXQoOSk7dmFyIGk9dCg1Mik7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNTUpLHI9dCgxMCk7dmFyIGk9dCg0Myk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNTkpLHI9dCgxMSk7dmFyIGk9dCg0Nyk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjIpLHI9dCgxMik7dmFyIGk9dCg1MCk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjMpLHI9dCgxMyk7dmFyIGk9dCg1MSk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjApLHI9dCgxNCk7dmFyIGk9dCg0OCk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcixhO3QoNjEpLHI9dCgxNSk7dmFyIGk9dCg0OSk7YT1yPXJ8fHt9LFwib2JqZWN0XCIhPXR5cGVvZiByW1wiZGVmYXVsdFwiXSYmXCJmdW5jdGlvblwiIT10eXBlb2YgcltcImRlZmF1bHRcIl18fChhPXI9cltcImRlZmF1bHRcIl0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEub3B0aW9ucyksYS5yZW5kZXI9aS5yZW5kZXIsYS5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMsZS5leHBvcnRzPXJ9LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY29tcGFjdFwifSxbX2MoXCJ1bFwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY29tcGFjdF9fY29sb3JzXCJ9LF9sKGRlZmF1bHRDb2xvcnMsZnVuY3Rpb24oZSl7cmV0dXJuIF9jKFwibGlcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2NvbXBhY3RfX2NvbG9yLWl0ZW1cIixcImNsYXNzXCI6e1widnVlLWNvbG9yX19jb21wYWN0X19jb2xvci1pdGVtLS13aGl0ZVwiOlwiI0ZGRkZGRlwiPT09ZX0sc3R5bGU6e2JhY2tncm91bmQ6ZX0sb246e2NsaWNrOmZ1bmN0aW9uKG8pe2hhbmRsZXJDbGljayhlKX19fSxbX2MoXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmU9PT1waWNrLGV4cHJlc3Npb246XCJjID09PSBwaWNrXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY29tcGFjdF9fZG90XCJ9KV0pfSkpLF92KFwiIFwiKV0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbigpe3dpdGgodGhpcylyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2VkaXRhYmxlLWlucHV0XCJ9LFtfYyhcImlucHV0XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOnZhbCxleHByZXNzaW9uOlwidmFsXCJ9XSxzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2lucHV0XCIsZG9tUHJvcHM6e3ZhbHVlOl9zKHZhbCl9LG9uOntrZXlkb3duOmhhbmRsZUtleURvd24saW5wdXQ6W2Z1bmN0aW9uKGUpe2UudGFyZ2V0LmNvbXBvc2luZ3x8KHZhbD1lLnRhcmdldC52YWx1ZSl9LHVwZGF0ZV19fSksX3YoXCIgXCIpLF9jKFwic3BhblwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fZWRpdGFibGUtaW5wdXRfX2xhYmVsXCJ9LFtfdihfcyhsYWJlbCkpXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse1wiY2xhc3NcIjpbXCJ2dWUtY29sb3JfX2MtaHVlXCIsZGlyZWN0aW9uQ2xhc3NdfSxbX2MoXCJkaXZcIix7cmVmOlwiY29udGFpbmVyXCIsc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtaHVlX19jb250YWluZXJcIixvbjp7bW91c2Vkb3duOmhhbmRsZU1vdXNlRG93bix0b3VjaG1vdmU6aGFuZGxlQ2hhbmdlLHRvdWNoc3RhcnQ6aGFuZGxlQ2hhbmdlfX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWh1ZV9fcG9pbnRlclwiLHN0eWxlOnt0b3A6cG9pbnRlclRvcCxsZWZ0OnBvaW50ZXJMZWZ0fX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWh1ZV9fcGlja2VyXCJ9KV0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3JlZjpcImNvbnRhaW5lclwiLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zYXR1cmF0aW9uXCIsc3R5bGU6e2JhY2tncm91bmQ6YmdDb2xvcn0sb246e21vdXNlZG93bjpoYW5kbGVNb3VzZURvd259fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NhdHVyYXRpb24tLXdoaXRlXCJ9KSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NhdHVyYXRpb24tLWJsYWNrXCJ9KSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NhdHVyYXRpb24tLXBvaW50ZXJcIixzdHlsZTp7dG9wOnBvaW50ZXJUb3AsbGVmdDpwb2ludGVyTGVmdH19LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2F0dXJhdGlvbi0tY2lyY2xlXCJ9KV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhleCxleHByZXNzaW9uOlwiY29sb3JzLmhleFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX21hdGVyaWFsX19oZXhcIixzdHlsZTp7Ym9yZGVyQ29sb3I6Y29sb3JzLmhleH0sYXR0cnM6e2xhYmVsOlwiaGV4XCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaGV4fSxvbjp7XCJvbi1jaGFuZ2VcIjpvbkNoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaGV4PWV9fX0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3NwbGl0XCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fbWF0ZXJpYWxfX3RoaXJkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLnIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLnJcIn1dLGF0dHJzOntsYWJlbDpcInJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLnJ9LG9uOntcIm9uLWNoYW5nZVwiOm9uQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLnI9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX21hdGVyaWFsX190aGlyZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5nLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5nXCJ9XSxhdHRyczp7bGFiZWw6XCJnXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5nfSxvbjp7XCJvbi1jaGFuZ2VcIjpvbkNoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5nPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19tYXRlcmlhbF9fdGhpcmRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuYixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuYlwifV0sYXR0cnM6e2xhYmVsOlwiYlwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuYn0sb246e1wib24tY2hhbmdlXCI6b25DaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuYj1lfX19KV0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zbGlkZXJcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zbGlkZXJfX2h1ZS13YXJwXCJ9LFtfYyhcImh1ZVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6aHVlQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2hlc1wifSxfbChzd2F0Y2hlcyxmdW5jdGlvbihlLG8pe3JldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2xpZGVyX19zd2F0Y2hcIixhdHRyczp7XCJkYXRhLWluZGV4XCI6b30sb246e2NsaWNrOmZ1bmN0aW9uKHQpe2hhbmRsZVN3Q2xpY2sobyxlKX19fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlclwiLFwiY2xhc3NcIjp7XCJ2dWUtY29sb3JfX3NsaWRlcl9fc3dhdGNoLXBpY2tlci0tYWN0aXZlXCI6ZT09YWN0aXZlT2Zmc2V0fSxzdHlsZTp7YmFja2dyb3VuZDpcImhzbChcIitjb2xvcnMuaHNsLmgrXCIsIDUwJSwgXCIrMTAwKmUrXCIlKVwifX0pXSl9KSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc1wiLGF0dHJzOntcImRhdGEtcGlja1wiOnBpY2t9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzX19ib3hcIn0sX2woZGVmYXVsdENvbG9ycyxmdW5jdGlvbihlKXtyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3N3YXRjaGVzX19jb2xvci1ncm91cFwifSxfbChlLGZ1bmN0aW9uKGUpe3JldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc3dhdGNoZXNfX2NvbG9yLWl0XCIsc3R5bGU6e2JhY2tncm91bmQ6ZX0sYXR0cnM6e1wiZGF0YS1jb2xvclwiOmV9LG9uOntjbGljazpmdW5jdGlvbihvKXtoYW5kbGVyQ2xpY2soZSl9fX0sW19jKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplPT1waWNrLGV4cHJlc3Npb246XCJjID09IHBpY2tcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19zd2F0Y2hlc19fcGlja1wifSxbX2MoXCJzdmdcIix7c3RhdGljU3R5bGU6e3dpZHRoOlwiMjRweFwiLGhlaWdodDpcIjI0cHhcIn0sYXR0cnM6e3ZpZXdCb3g6XCIwIDAgMjQgMjRcIn19LFtfYyhcInBhdGhcIix7YXR0cnM6e2Q6XCJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaXCJ9fSldKV0pXSl9KSl9KSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faGVhZFwifSxbX3YoX3MoaGVhZCkpXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19ib2R5XCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fc2F0dXJhdGlvbi13cmFwXCJ9LFtfYyhcInNhdHVyYXRpb25cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9faHVlLXdyYXBcIn0sW19jKFwiaHVlXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxhdHRyczp7ZGlyZWN0aW9uOlwidmVydGljYWxcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlclwifSxbX2MoXCJpXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tbGVmdFwifSksX2MoXCJpXCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19odWUtcG9pbnRlci0tcmlnaHRcIn0pXSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fY29udHJvbHNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19sYWJlbFwifSxbX3YoXCJuZXdcIildKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19zd2F0Y2hlc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19wci1jb2xvclwiLHN0eWxlOntiYWNrZ3JvdW5kOmNvbG9ycy5oZXh9fSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19wcmV2aWV3c19fcHItY29sb3JcIixzdHlsZTp7YmFja2dyb3VuZDpjdXJyZW50Q29sb3J9fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX3ByZXZpZXdzX19sYWJlbFwifSxbX3YoXCJjdXJyZW50XCIpXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2FjdGlvbnNcIn0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yc19fcGhvdG9zaG9wX19hYy1idG5cIixvbjp7Y2xpY2s6aGFuZGxlQWNjZXB0fX0sW192KFwiT0tcIildKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2FjLWJ0blwiLG9uOntjbGljazpoYW5kbGVDYW5jZWx9fSxbX3YoXCJDYW5jZWxcIildKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc1wifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaHNsLmgsZXhwcmVzc2lvbjpcImNvbG9ycy5oc2wuaFwifV0sYXR0cnM6e2xhYmVsOlwiaFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhzbC5ofSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaHNsLmg9ZX19fSksX3YoXCIgXCIpLF9jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5zLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLnNcIn1dLGF0dHJzOntsYWJlbDpcInNcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wuc30sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5zPWV9fX0pLF92KFwiIFwiKSxfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wubCxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5sXCJ9XSxhdHRyczp7bGFiZWw6XCJ2XCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLmx9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wubD1lfX19KSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19fZGl2aWRlclwifSksX3YoXCIgXCIpLF92KFwiIFwiKSxfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLnIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLnJcIn1dLGF0dHJzOntsYWJlbDpcInJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLnJ9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLnI9ZX19fSksX3YoXCIgXCIpLF9jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEuZyxleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuZ1wifV0sYXR0cnM6e2xhYmVsOlwiZ1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEuZ30sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEuZz1lfX19KSxfdihcIiBcIiksX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5iLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5iXCJ9XSxhdHRyczp7bGFiZWw6XCJiXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5ifSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5iPWV9fX0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcnNfX3Bob3Rvc2hvcF9fZmllbGRzX19kaXZpZGVyXCJ9KSxfdihcIiBcIiksX3YoXCIgXCIpLF9jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhleCxleHByZXNzaW9uOlwiY29sb3JzLmhleFwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JzX19waG90b3Nob3BfX2ZpZWxkc19faGV4XCIsYXR0cnM6e2xhYmVsOlwiI1wifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhleH0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhleD1lfX19KV0pXSldKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19zYXR1cmF0aW9uLXdyYXBcIn0sW19jKFwic2F0dXJhdGlvblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2NvbnRyb2xzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19zbGlkZXJzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19odWUtd3JhcFwifSxbX2MoXCJodWVcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLGV4cHJlc3Npb246XCJjb2xvcnNcIn1dLGRvbVByb3BzOnt2YWx1ZTpjb2xvcnN9LG9uOntcIm9uLWNoYW5nZVwiOmNoaWxkQ2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycz1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19hbHBoYS13cmFwXCJ9LFtfYyhcImFscGhhXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19jb2xvci13cmFwXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19hY3RpdmUtY29sb3JcIixzdHlsZTp7YmFja2dyb3VuZDphY3RpdmVDb2xvcn19KV0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tZG91YmxlXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oZXgsZXhwcmVzc2lvbjpcImNvbG9ycy5oZXhcIn1dLGF0dHJzOntsYWJlbDpcImhleFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhleFxufSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaGV4PWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEucixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuclwifV0sYXR0cnM6e2xhYmVsOlwiclwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEucn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19maWVsZC0tc2luZ2xlXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmcsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmdcIn1dLGF0dHJzOntsYWJlbDpcImdcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmd9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmc9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fZmllbGQtLXNpbmdsZVwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5iLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5iXCJ9XSxhdHRyczp7bGFiZWw6XCJiXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5ifSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5iPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19za2V0Y2hfX2ZpZWxkLS1zaW5nbGVcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmEsZXhwcmVzc2lvbjpcImNvbG9ycy5hXCJ9XSxhdHRyczp7bGFiZWw6XCJhXCIsXCJhcnJvdy1vZmZzZXRcIjouMDEsbWF4OjF9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuYX0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmE9ZX19fSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fc2tldGNoX19wcmVzZXRzXCJ9LF9sKHByZXNldENvbG9ycyxmdW5jdGlvbihlKXtyZXR1cm4gX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX3NrZXRjaF9fcHJlc2V0cy1jb2xvclwiLHN0eWxlOntiYWNrZ3JvdW5kOmV9LG9uOntjbGljazpmdW5jdGlvbihvKXtoYW5kbGVQcmVzZXQoZSl9fX0pfSkpXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19zYXR1cmF0aW9uLXdyYXBcIn0sW19jKFwic2F0dXJhdGlvblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2Nocm9tZS1ib2R5XCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19jb250cm9sc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fY29sb3Itd3JhcFwifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fYWN0aXZlLWNvbG9yXCIsc3R5bGU6e2JhY2tncm91bmQ6YWN0aXZlQ29sb3J9fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fc2xpZGVyc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9faHVlLXdyYXBcIn0sW19jKFwiaHVlXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycyxleHByZXNzaW9uOlwiY29sb3JzXCJ9XSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzfSxvbjp7XCJvbi1jaGFuZ2VcIjpjaGlsZENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnM9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fYWxwaGEtd3JhcFwifSxbX2MoXCJhbHBoYVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMsZXhwcmVzc2lvbjpcImNvbG9yc1wifV0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9yc30sb246e1wib24tY2hhbmdlXCI6Y2hpbGRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzPWV9fX0pXSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZHMtd3JhcFwifSxbX2MoXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOjA9PT1maWVsZHNJbmRleCxleHByZXNzaW9uOlwiZmllbGRzSW5kZXggPT09IDBcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhleCxleHByZXNzaW9uOlwiY29sb3JzLmhleFwifV0sYXR0cnM6e2xhYmVsOlwiaGV4XCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaGV4fSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaGV4PWV9fX0pXSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOjE9PT1maWVsZHNJbmRleCxleHByZXNzaW9uOlwiZmllbGRzSW5kZXggPT09IDFcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkc1wifSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLnJnYmEucixleHByZXNzaW9uOlwiY29sb3JzLnJnYmEuclwifV0sYXR0cnM6e2xhYmVsOlwiclwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLnJnYmEucn0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLnJnYmEucj1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMucmdiYS5nLGV4cHJlc3Npb246XCJjb2xvcnMucmdiYS5nXCJ9XSxhdHRyczp7bGFiZWw6XCJnXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMucmdiYS5nfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMucmdiYS5nPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5yZ2JhLmIsZXhwcmVzc2lvbjpcImNvbG9ycy5yZ2JhLmJcIn1dLGF0dHJzOntsYWJlbDpcImJcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5yZ2JhLmJ9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5yZ2JhLmI9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmEsZXhwcmVzc2lvbjpcImNvbG9ycy5hXCJ9XSxhdHRyczp7bGFiZWw6XCJhXCIsXCJhcnJvdy1vZmZzZXRcIjouMDEsbWF4OjF9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuYX0sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmE9ZX19fSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6Mj09PWZpZWxkc0luZGV4LGV4cHJlc3Npb246XCJmaWVsZHNJbmRleCA9PT0gMlwifV0sc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRzXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuaHNsLmgsZXhwcmVzc2lvbjpcImNvbG9ycy5oc2wuaFwifV0sYXR0cnM6e2xhYmVsOlwiaFwifSxkb21Qcm9wczp7dmFsdWU6Y29sb3JzLmhzbC5ofSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuaHNsLmg9ZX19fSldKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2Nocm9tZV9fZmllbGRcIn0sW19jKFwiZWQtaW5cIix7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6Y29sb3JzLmhzbC5zLGV4cHJlc3Npb246XCJjb2xvcnMuaHNsLnNcIn1dLGF0dHJzOntsYWJlbDpcInNcIn0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5oc2wuc30sb246e1wib24tY2hhbmdlXCI6aW5wdXRDaGFuZ2UsaW5wdXQ6ZnVuY3Rpb24oZSl7Y29sb3JzLmhzbC5zPWV9fX0pXSksX3YoXCIgXCIpLF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ZpZWxkXCJ9LFtfYyhcImVkLWluXCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbFwiLHZhbHVlOmNvbG9ycy5oc2wubCxleHByZXNzaW9uOlwiY29sb3JzLmhzbC5sXCJ9XSxhdHRyczp7bGFiZWw6XCJsXCJ9LGRvbVByb3BzOnt2YWx1ZTpjb2xvcnMuaHNsLmx9LG9uOntcIm9uLWNoYW5nZVwiOmlucHV0Q2hhbmdlLGlucHV0OmZ1bmN0aW9uKGUpe2NvbG9ycy5oc2wubD1lfX19KV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX19maWVsZFwifSxbX2MoXCJlZC1pblwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTpjb2xvcnMuYSxleHByZXNzaW9uOlwiY29sb3JzLmFcIn1dLGF0dHJzOntsYWJlbDpcImFcIixcImFycm93LW9mZnNldFwiOi4wMSxtYXg6MX0sZG9tUHJvcHM6e3ZhbHVlOmNvbG9ycy5hfSxvbjp7XCJvbi1jaGFuZ2VcIjppbnB1dENoYW5nZSxpbnB1dDpmdW5jdGlvbihlKXtjb2xvcnMuYT1lfX19KV0pXSksX3YoXCIgXCIpLF92KFwiIFwiKSxfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fY2hyb21lX190b2dnbGUtYnRuXCIsb246e2NsaWNrOnRvZ2dsZVZpZXdzfX0sW19jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ljb25cIn0sW19jKFwic3ZnXCIse3N0YXRpY1N0eWxlOnt3aWR0aDpcIjI0cHhcIixoZWlnaHQ6XCIyNHB4XCJ9LGF0dHJzOnt2aWV3Qm94OlwiMCAwIDI0IDI0XCJ9LG9uOnttb3VzZW92ZXI6c2hvd0hpZ2hsaWdodCxtb3VzZWVudGVyOnNob3dIaWdobGlnaHQsbW91c2VvdXQ6aGlkZUhpZ2hsaWdodH19LFtfYyhcInBhdGhcIix7YXR0cnM6e2ZpbGw6XCIjMzMzXCIsZDpcIk0xMiwxOC4xN0w4LjgzLDE1TDcuNDIsMTYuNDFMMTIsMjFMMTYuNTksMTYuNDFMMTUuMTcsMTVNMTIsNS44M0wxNS4xNyw5TDE2LjU4LDcuNTlMMTIsM0w3LjQxLDcuNTlMOC44Myw5TDEyLDUuODNaXCJ9fSldKV0pLF92KFwiIFwiKSxfYyhcImRpdlwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6aGlnaGxpZ2h0LGV4cHJlc3Npb246XCJoaWdobGlnaHRcIn1dLHN0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jaHJvbWVfX2ljb24taGlnaGxpZ2h0XCJ9KV0pLF92KFwiIFwiKV0pXSldKX0sc3RhdGljUmVuZGVyRm5zOltdfX0sZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt3aXRoKHRoaXMpcmV0dXJuIF9jKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwidnVlLWNvbG9yX19jLWFscGhhXCJ9LFtfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1hbHBoYV9fY2hlY2tib2FyZC13cmFwXCJ9LFtfYyhcImNoZWNrYm9hcmRcIildKSxfdihcIiBcIiksX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFfX2dyYWRpZW50XCIsc3R5bGU6e2JhY2tncm91bmQ6Z3JhZGllbnRDb2xvcn19KSxfdihcIiBcIiksX2MoXCJkaXZcIix7cmVmOlwiY29udGFpbmVyXCIsc3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFfX2NvbnRhaW5lclwiLG9uOnttb3VzZWRvd246aGFuZGxlTW91c2VEb3duLHRvdWNobW92ZTpoYW5kbGVDaGFuZ2UsdG91Y2hzdGFydDpoYW5kbGVDaGFuZ2V9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFfX3BvaW50ZXJcIixzdHlsZTp7bGVmdDoxMDAqY29sb3JzLmErXCIlXCJ9fSxbX2MoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJ2dWUtY29sb3JfX2MtYWxwaGFfX3BpY2tlclwifSldKV0pXSl9LHN0YXRpY1JlbmRlckZuczpbXX19LGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uKCl7d2l0aCh0aGlzKXJldHVybiBfYyhcImRpdlwiLHtzdGF0aWNDbGFzczpcInZ1ZS1jb2xvcl9fYy1jaGVja2VyYm9hcmRcIixzdHlsZTp7YmFja2dyb3VuZDpiZ1N0eWxlfX0pfSxzdGF0aWNSZW5kZXJGbnM6W119fSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyMSk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDIyKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjMpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyNCk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI1KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjYpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgyNyk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDI4KTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMjkpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLG8sdCl7dmFyIHI9dCgzMCk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbZS5pZCxyLFwiXCJdXSk7dCgyKShyLHt9KTtyLmxvY2FscyYmKGUuZXhwb3J0cz1yLmxvY2Fscyl9LGZ1bmN0aW9uKGUsbyx0KXt2YXIgcj10KDMxKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1tlLmlkLHIsXCJcIl1dKTt0KDIpKHIse30pO3IubG9jYWxzJiYoZS5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24oZSxvLHQpe3ZhciByPXQoMzIpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaWQscixcIlwiXV0pO3QoMikocix7fSk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfV0pfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1jb2xvci9kaXN0L3Z1ZS1jb2xvci5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDI4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx2aWRlbyByZWY9XCJwbGF5ZXJcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW5cIlxyXG4gICAgICAgICAgICAgICBjb250cm9scyBwcmVsb2FkPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgIDpwb3N0ZXI9XCJwb3N0ZXJcIlxyXG4gICAgICAgICAgICAgICA6ZGF0YS1zZXR1cD1cInN0clNvdXJjZVwiXHJcbiAgICAgICAgPjwvdmlkZW8+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4gICAgI3ZpZGVvLWNhbnZhcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7ZGlzcGF0Y2gsIGdldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBsYXllcjoge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9zdGVyOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7fSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBzdHJTb3VyY2UoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnNvdXJjZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLmluaXRQbGF5ZXIodGhpcy5zb3VyY2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBhcGkoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllclxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbml0UGxheWVyKHNvdXJjZSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLnNvdXJjZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGVjaE9yZGVyOiBbJ3lvdXR1YmUnXSxcclxuICAgICAgICAgICAgICAgICAgICBwbGF5YmFja1JhdGVzOiBbMC4yNSwgMC41LCAxLCAxLjUsIDJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVByb2dyZXNzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWJMb29wUGx1Z2luOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BJZkJlZm9yZVN0YXJ0OiBmYWxzZSwgLy9hbGxvdyB2aWRlbyB0byBwbGF5IG5vcm1hbGx5IGJlZm9yZSB0aGUgbG9vcCBzZWN0aW9uPyBkZWZhdWx0cyB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29vcElmQWZ0ZXJFbmQ6IHRydWUsIC8vIGRlZmF1bHRzIHRvIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlQWZ0ZXJMb29waW5nOiBmYWxzZSwgICAgICAgLy9pZiB0cnVlLCBhZnRlciBsb29waW5nIHZpZGVvIHdpbGwgcGF1c2UuIERlZmF1bHRzIHRvIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZUJlZm9yZUxvb3Bpbmc6IGZhbHNlLCAgICAgIC8vaWYgdHJ1ZSwgYmVmb3JlIGxvb3BpbmcgdmlkZW8gd2lsbCBwYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnM6IGZhbHNlLCAgLy9kZWZhdWx0cyB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0LnN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnBsdWdpbnMuZG5jb2Zmc2V0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldDogdGhpcy5vZmZzZXQuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9mZnNldDogdGhpcy5vZmZzZXQuZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKHRoaXMuJHJlZnMucGxheWVyLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFBsYXllcicsIHRoaXMucGxheWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24gZHVyYXRpb25TZXR0ZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUucGxheWVyLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXREdXJhdGlvbicsIHN0YXRlLnBsYXllci5pbnN0YW5jZS5kdXJhdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnBsYXllci5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3BsYXllclJlYWR5JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5wbGF5ZXIuaW5zdGFuY2Uub2ZmKCd0aW1ldXBkYXRlJywgZHVyYXRpb25TZXR0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlKDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Q3VycmVudFRpbWUnLCB0aGlzLnBsYXllci5jdXJyZW50VGltZSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBsYXllci52dWU/NTYxMmI2NzIiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwiaW5zcGVjdG9yQm94XCIgY2xhc3M9XCJib3ggYm94LXNvbGlkIGNvbGxhcHNlZC1ib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8IS0tIHRvb2xzIGJveCAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHQgYm94LXRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBpZD1cImluc3BlY3RvclRvb2dsZXJcIiB2LW9uOmNsaWNrPVwidG9vZ2xlT3BlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCJDb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSAvLiB0b29scyAtLT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuaW5zcGVjdG9yJyl9fVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0IGluc3BlY3Rvci1pbmZvXCIgdi1pZj1cInRvdWNoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiJ2JhY2tncm91bmQ6JytiYWNrZ3JvdW5kKyc7IGhlaWdodDoyMHB4OyB3aWR0aDoyMHB4O21hcmdpbi10b3A6IDFweDsgbWFyZ2luLXJpZ2h0OjVweCdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm8tLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj57e3N0YXJ0fX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWRhbmdlclwiPnt7ZW5kfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haWxib3gtY29udHJvbHMgY29udHJvbC1pbnNwZWN0b3ItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJjcmVhdGVBY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicmVjb3JkaW5nVG91Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX2FjdGlvbicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgdi1vbjpjbGljaz1cInBsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYVwiIDpjbGFzcz1cInsnZmEtcGxheSc6IXBsYXlpbmcsJ2ZhLXBhdXNlIHRleHQtZGFuZ2VyJzpwbGF5aW5nfVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3BsYXlpbmc/JHQoJ3Njb3V0aW5ncy5wYXVzZScpOiR0KCdzY291dGluZ3MucGxheScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cImJhY2t3YXJkKDEwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWZhc3QtYmFja3dhcmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwiYmFja3dhcmQoNSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1iYWNrd2FyZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cImZvcndhcmQoNSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1mb3J3YXJkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwiZm9yd2FyZCgxMClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1mYXN0LWZvcndhcmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwicGxheWJhY2tSYXRlKDAuMjUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4yNSB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMC41KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNSB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJwbGF5YmFja1JhdGUoMSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInBsYXliYWNrUmF0ZSgxLjUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS41IHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIgdi1vbjpjbGljaz1cInBsYXliYWNrUmF0ZSgyKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRobGV0ZS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmxlZnRfYWN0aW9ucycpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXRobGV0ZS1tZW51LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MucmlnaHRfYWN0aW9ucycpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cInRvdWNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IG5vLXBhZGRpbmctcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFncyA6dGFncz1cInRhZ3NMZWZ0XCIgOnNlbGVjdGVkPVwiYWN0aW9uLmxlZnRUYWdzXCIgdHlwZT1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjp0YWctZGVsZXRlZD1cInRhZ0RlbGV0ZWRMZWZ0XCIgdi1vbjp0YWctc2VsZWN0ZWQ9XCJ0YWdTZWxlY3RlZExlZnRcIj48L3RhZ3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNiBuby1wYWRkaW5nLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0aGxldGUtbWVudS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFncyA6dGFncz1cInRhZ3NSaWdodFwiIDpzZWxlY3RlZD1cImFjdGlvbi5yaWdodFRhZ3NcIiB0eXBlPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjp0YWctZGVsZXRlZD1cInRhZ0RlbGV0ZWRSaWdodFwiIHYtb246dGFnLXNlbGVjdGVkPVwidGFnU2VsZWN0ZWRSaWdodFwiPjwvdGFncz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD0naW5zcGVjdG9yJz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cclxuICAgIC5pbnNwZWN0b3ItaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgLmluc3BlY3Rvci1pbmZvLS10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXRobGV0ZS1tZW51IHtcclxuXHJcbiAgICAgICAgLmRyb3Bkb3duIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdGhsZXRlLW1lbnUtdGl0bGUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZTBlOTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDNlMGU5O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNlMGU5O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXRobGV0ZS1tZW51LWxlZnQge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkM2UwZTk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXRobGV0ZS1tZW51LXJpZ2h0IHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZSwgc3Vic2NyaWJlfSBmcm9tICdtb2Nrc3RhdGUnO1xyXG4gICAgaW1wb3J0IGluc3BlY3RvclNrZXRjaCBmcm9tICcuLi9za2V0Y2gvaW5zcGVjdG9yU2tldGNoJ1xyXG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcclxuICAgIGltcG9ydCBjb2xsaWRlTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvY29sbGlkZSdcclxuICAgIGltcG9ydCB1dWlkTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcclxuICAgIGltcG9ydCBBY3Rpb24gZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdG91Y2hlcy9BY3Rpb24nXHJcbiAgICBpbXBvcnQgdGFncyBmcm9tICcuLi90YWdzL3RhZ3MudnVlJztcclxuICAgIGltcG9ydCBjb21tb25TZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL2NvbW1vbi9jb21tb25TZXJ2aWNlJ1xyXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3VjaDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkaW5nVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0VGFnczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRUYWdzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzbFwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcImxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcImFcIjogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGV4XCI6IFwiI0RCREYwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJnYmFcIjoge1wiclwiOiAyMTksIFwiZ1wiOiAyMjMsIFwiYlwiOiAwLCBcImFcIjogMSwgXCJhbHBoYVwiOiA1MH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHN2XCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwidlwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFwiYVwiOiAxfSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFnc0xlZnQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGFnc1JpZ2h0OiBbXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcGxheWluZzoge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaXhpbnM6IFtjb2xsaWRlTWl4aW4sIHV1aWRNaXhpbl0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgJ29wZW4nOiBmdW5jdGlvbiAob3Blbiwgb2xkT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNwZWN0b3Iuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCl7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZSh0aGlzLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09ICdzZXRTZWxlY3RlZFRvdWNoJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IHRoaXMudG91Y2guYWN0aW9ucy5zbGljZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSAnc2V0U2VsZWN0ZWRBY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09ICdyZWNvcmRpbmdUb3VjaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZGluZ1RvdWNoID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIucmVjb3JkaW5nVG91Y2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29tbW9uU2VydmljZS5nZXRUYWdzKChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3NMZWZ0ID0gXy5jbG9uZURlZXAocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3NSaWdodCA9IF8uY2xvbmVEZWVwKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpPT4ge1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBidXMuJG9uKCd0b29nbGUtaW5zcGVjdG9yJywgKGlzT3Blbik9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNPcGVuID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XHJcbiAgICAgICAgICAgICAgICAgICAgJC5BZG1pbkxURS5ib3hXaWRnZXQuY29sbGFwc2UoJCgnI2luc3BlY3RvclRvb2dsZXInKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wZW4gIT0gaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuQWRtaW5MVEUuYm94V2lkZ2V0LmNvbGxhcHNlKCQoJyNpbnNwZWN0b3JUb29nbGVyJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSBpc09wZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICB0aXRsZSgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG91Y2ggPyB0aGlzLnRvdWNoLnRleHQgOiAnJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhcnQoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdWNoID8gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KSA6IG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVuZCgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG91Y2ggPyBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKSA6IG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdWNoID8gdGhpcy50b3VjaC5jb2xvci5oZXggOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgICAgIG5ldyBwNShpbnNwZWN0b3JTa2V0Y2gpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICB0b29nbGVPcGVuKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbGF5KCl7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhcnRBY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGVBY3Rpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpICsgMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlkZVJlc3VsdC5jb2xsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpZGUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5kaXNhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3VjaC5hY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMudG91Y2guYWN0aW9uc1t0aGlzLnRvdWNoLmFjdGlvbnMubGVuZ3RoIC0gMV0uZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSB0aGlzLnRvdWNoLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0ID0gbmV3IEFjdGlvbihNYXRoLmZsb29yKHN0YXJ0KSwgTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpLCBfLmNsb25lRGVlcCh0aGlzLnRvdWNoLmNvbG9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZEFjdGlvbicsIGFjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ0FjdGlvbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5vbigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydEFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGFnU2VsZWN0ZWRMZWZ0KHRhZyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZy51dWlkID0gdGhpcy5nZW5lcmF0ZVVVSUQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5sZWZ0VGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRhZ1NlbGVjdGVkUmlnaHQodGFnKXtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGdldFN0YXRlKCcqJykudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnLnV1aWQgPSB0aGlzLmdlbmVyYXRlVVVJRCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLnJpZ2h0VGFncy5wdXNoKHRhZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRhZ0RlbGV0ZWRSaWdodCh0YWcpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFnSW5kZXggPSBfLmZpbmRJbmRleCh0aGlzLmFjdGlvbi5yaWdodFRhZ3MsIGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnV1aWQgPT0gdGFnLnV1aWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24ucmlnaHRUYWdzLnNwbGljZSh0YWdJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRhZ0RlbGV0ZWRMZWZ0KHRhZyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWdJbmRleCA9IF8uZmluZEluZGV4KHRoaXMuYWN0aW9uLmxlZnRUYWdzLCBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby51dWlkID09IHRhZy51dWlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmxlZnRUYWdzLnNwbGljZSh0YWdJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU3RhcnRBY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGVBY3Rpb25zKHRoaXMuYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdBY3Rpb24nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5vZmYoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRBY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kaXNhYmxlUHJvZ3Jlc3MuZW5hYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyogZWxzZSBpZiAoTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkpID4gdGhpcy50b3VjaC5lbmQpIHtcclxuICAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkub2ZmKCd0aW1ldXBkYXRlJywgdGhpcy5vblN0YXJ0QWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nQWN0aW9uJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLmVuZCA9IE1hdGguZmxvb3IodGhpcy50b3VjaC5lbmQpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5kQWN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nQWN0aW9uJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5vZmYoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRBY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmRpc2FibGVQcm9ncmVzcy5lbmFibGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGF1c2UoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlQWN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsYXliYWNrUmF0ZShyYXRlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkucGxheWJhY2tSYXRlKHJhdGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3J3YXJkKHMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcndhcmQgPSB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKCkgKyBzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcndhcmQgPD0gdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kdXJhdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZShmb3J3YXJkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSh0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYWNrd2FyZChzKXtcclxuICAgICAgICAgICAgICAgIHZhciBiYWNrd2FyZCA9IHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSAtIHM7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFja3dhcmQgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoYmFja3dhcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmN1cnJlbnRUaW1lKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbnNwZWN0b3IudnVlPzA1MDBkZGMwIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBpZD1cInRpbWVsaW5lQm94XCIgY2xhc3M9XCJib3ggYm94LXNvbGlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPCEtLSB0b29scyBib3ggLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0IGJveC10b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJ6b29tSW5cIiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJab29tIEluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJ6b29tT3V0XCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCJab29tIE91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBpZD1cInRpbWVsaW5lVG9vZ2xlclwiIHYtb246Y2xpY2s9XCJ0b29nbGVPcGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1taW51c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSAvLiB0b29scyAtLT5cclxuXHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XHJcblxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50aW1lbGluZScpfX1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD0ndGltZWxpbmUnPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge2Rpc3BhdGNoLCBnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcclxuICAgIGltcG9ydCB0aW1lbGluZVNrZXRjaCBmcm9tICcuLi9za2V0Y2gvdGltZWxpbmVTa2V0Y2gnXHJcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICdvcGVuJzogZnVuY3Rpb24gKG9wZW4sIG9sZE9wZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZCgpe1xyXG4gICAgICAgICAgICBidXMuJG9uKCd0b29nbGUtdGltZWxpbmUnLCAoKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XHJcbiAgICAgICAgICAgICAgICAkLkFkbWluTFRFLmJveFdpZGdldC5jb2xsYXBzZSgkKCcjdGltZWxpbmVUb29nbGVyJykpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB3aW5kb3cucCA9IG5ldyBwNSh0aW1lbGluZVNrZXRjaCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHRvb2dsZU9wZW4oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHpvb21JbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgKyAxKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbml0aWFsaXplZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgem9vbU91dCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciA+IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFpvb20nLCBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluaXRpYWxpemVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0aW1lbGluZS52dWU/Yjc0YmU5MGMiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxhZG1pbi1oZWFkZXIgOnRpdGxlPVwidGl0bGVcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvYWRtaW4taGVhZGVyPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCBvdmVybGF5LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBpcy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02IHBsYXllci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZG5jLXBsYXllciB2LWlmPVwiaW5pdGlhbGl6ZWRcIiA6c291cmNlPVwic291cmNlXCIgcmVmPVwicGxheWVyXCI+PC9kbmMtcGxheWVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC02IHRvdWNoZXMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRvdWNoZXMtbGlzdD48L3RvdWNoZXMtbGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtc2hvdz1cInBsYXllclJlYWR5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haWxib3gtY29udHJvbHMgY29udHJvbC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJzdGFydFRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwic3RhcnRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhXCIgOmNsYXNzPVwieydmYS1wbGF5Jzohc3RhcnRlZCwnZmEtY2lyY2xlIHRleHQtZGFuZ2VyJzpzdGFydGVkfVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3N0YXJ0ZWQ/JHQoJ3Njb3V0aW5ncy5yZWNvcmRpbmcnKTokdCgnc2NvdXRpbmdzLnN0YXJ0X3RvdWNoJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIDpkaXNhYmxlZD1cIiFzdGFydGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjpjbGljaz1cImVuZFRvdWNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtc3RvcFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX3RvdWNoJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIiB2LW9uOmNsaWNrPVwidG9vZ2xlVGltZWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG9vZ2xlX3RpbWVsaW5lJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiIHYtb246Y2xpY2s9XCJ0b29nbGVJbnNwZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvb2dsZV9pbnNwZWN0b3InKX19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8uYnRuLWdyb3VwIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGVkaXQtdG91Y2gtZm9ybSB2LWlmPVwiZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbjpjYW5jZWwtbmV3LXRvdWNoPVwiY2FuY2VsRWRpdFRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aW5pdC10b3VjaD1cInRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uOmFkZC1uZXctdG91Y2g9XCJzYXZlRWRpdFRvdWNoXCIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIj48L2VkaXQtdG91Y2gtZm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnNwZWN0b3Igdi1pZj1cInBsYXllclJlYWR5XCIgcmVmPVwiaW5zcGVjdG9yXCIgOnBsYXlpbmc9XCJwbGF5aW5nXCI+PC9pbnNwZWN0b3I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpbWVsaW5lIHYtaWY9XCJwbGF5ZXJSZWFkeVwiPjwvdGltZWxpbmU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1zaG93PVwicGxheWVyUmVhZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1vbjpjbGljaz1cInNhdmVcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj4ge3skdCgnZm9ybXMuc2F2ZScpfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwiY2FuY2VsXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIj57eyR0KCdmb3Jtcy5iYWNrJyl9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIHYtaWY9XCIhcGxheWVyUmVhZHlcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaCBmYS1zcGluXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgZG5jUGxheWVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9nbG9iYWwvdmlkZW8vcGxheWVyLnZ1ZSc7XHJcbiAgICBpbXBvcnQgVG91Y2ggZnJvbSAnLi9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoJztcclxuICAgIGltcG9ydCB7c2V0U3RhdGUsIHNldEFjdGlvbnMsIGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlfSBmcm9tICdtb2Nrc3RhdGUnO1xyXG4gICAgaW1wb3J0IHthY3Rpb25zfSBmcm9tICcuL3N0b3Jlcy9hY3Rpb25zJ1xyXG4gICAgaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdG9yZXMvc3RvcmUnXHJcbiAgICBpbXBvcnQgVmVlVmFsaWRhdGUsIHtWYWxpZGF0b3J9IGZyb20gJ3ZlZS12YWxpZGF0ZSc7XHJcbiAgICBpbXBvcnQgbmV3VG91Y2hGb3JtIGZyb20gJy4vZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZSc7XHJcbiAgICBpbXBvcnQgZWRpdFRvdWNoRm9ybSBmcm9tICcuL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlJztcclxuICAgIGltcG9ydCB0b3VjaGVzTGlzdCBmcm9tICcuL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZSc7XHJcbiAgICBpbXBvcnQgdGltZWxpbmUgZnJvbSAnLi9jYW52YXMvdGltZWxpbmUudnVlJztcclxuICAgIGltcG9ydCBpbnNwZWN0b3IgZnJvbSAnLi9jYW52YXMvaW5zcGVjdG9yLnZ1ZSc7XHJcbiAgICBpbXBvcnQgY29sbGlkZU1peGluIGZyb20gJ2Jhc2UvbWl4aW5zL2NvbGxpZGUnO1xyXG4gICAgaW1wb3J0IGFkbWluSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXHJcbiAgICBpbXBvcnQgc2NvdXRpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UnXHJcbiAgICBpbXBvcnQgc2NvdXRpbmdUb3VjaFNlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nVG91Y2hTZXJ2aWNlJ1xyXG4gICAgaW1wb3J0IEFjdGlvbiBmcm9tICcuL3NrZXRjaC9jb21wb25lbnRzL3RvdWNoZXMvQWN0aW9uJ1xyXG4gICAgaW1wb3J0IHV1aWRNaXhpbiBmcm9tICdiYXNlL21peGlucy91dWlkJ1xyXG4gICAgaW1wb3J0IGVycm9yUHJlc2VudGVyIGZyb20gJ2Jhc2UvbWl4aW5zL2FqYXgvZXJyb3JQcmVzZW50ZXInXHJcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBkbmNQbGF5ZXIsXHJcbiAgICAgICAgICAgIG5ld1RvdWNoRm9ybSxcclxuICAgICAgICAgICAgZWRpdFRvdWNoRm9ybSxcclxuICAgICAgICAgICAgdG91Y2hlc0xpc3QsXHJcbiAgICAgICAgICAgIHRpbWVsaW5lLFxyXG4gICAgICAgICAgICBpbnNwZWN0b3IsXHJcbiAgICAgICAgICAgIGFkbWluSGVhZGVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaXhpbnM6IFtjb2xsaWRlTWl4aW4sIHV1aWRNaXhpbiwgZXJyb3JQcmVzZW50ZXJdLFxyXG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNjb3V0aW5nOiB7fSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZToge30sXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGxheWluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdGFydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBsYXllclJlYWR5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHNsXCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwibFwiOiAwLjQzNzI1NDkwMTk2MDc4NDMsIFwiYVwiOiAxfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZXhcIjogXCIjREJERjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc3ZcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJ2XCI6IDAuODc0NTA5ODAzOTIxNTY4NiwgXCJhXCI6IDF9LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uaG9tZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy9zY291dGluZ3MvbGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYWRtaW4uc2NvdXRpbmdzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL3Njb3V0aW5ncy8nICsgdGhpcy4kcm91dGUucGFyYW1zLmlkICsgJy90b3VjaGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhZG1pbi50b3VjaGVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGUoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiR0KCdhZG1pbi5zY291dGluZ3MnKSArICcgJyArIHRoaXMuc2NvdXRpbmcubmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpbmRvdy52bSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlID0gd2luZG93Wydzb3VyY2UnXTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICBzZXRBY3Rpb25zKGFjdGlvbnMpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2V0U3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGUoJyonKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3Vic2NyaWJlKHRoaXMsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gJ3BsYXllclJlYWR5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJSZWFkeSBzdWJzY3JpcHQnLCB0aGlzLnBsYXllclJlYWR5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0U3RhdGUoJyonKS5wbGF5ZXJSZWFkeSAmJiAhdGhpcy5wbGF5ZXJSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclJlYWR5ID0gZ2V0U3RhdGUoJyonKS5wbGF5ZXJSZWFkeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRTY291dGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNjb3V0aW5nU2VydmljZS5zaG93KHRoaXMuJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3V0aW5nID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVjaE9yZGVyJzogWyd5b3V0dWJlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc291cmNlcyc6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogXCJ2aWRlby95b3V0dWJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiByZXNwb25zZS5kYXRhLnZpZGVvU3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJ1cy4kb24oJ2VkaXQtdG91Y2gnLCAodG91Y2gpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRUb3VjaChudWxsLCB0b3VjaClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJ1cy4kb24oJ3JlbW92ZS10b3VjaCcsICh0b3VjaCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVRvdWNoKHRvdWNoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJlZm9yZURlc3Ryb3koKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rlc3Ryb3kgaG9vaycpO1xyXG4gICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vZmYoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgbG9hZFNjb3V0aW5nKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5zY291dGluZy50b3VjaGVzLCBmdW5jdGlvbiAodG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0ID0gbmV3IFRvdWNoKHRvdWNoLnN0YXJ0LCB0b3VjaC5lbmQsIHRvdWNoLnRpdGxlLCB0b3VjaC5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgYWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIGFjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdCA9IG5ldyBBY3Rpb24oYWN0aW9uLnN0YXJ0LCBhY3Rpb24uZW5kLCBhY3Rpb24uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkQWN0aW9uJywgYWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgYWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFjdGlvbi5sZWZ0VGFncywgZnVuY3Rpb24gKHRhZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnLnV1aWQgPSBzZWxmLmdlbmVyYXRlVVVJRCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZExlZnRUYWcnLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFjdGlvbi5yaWdodFRhZ3MsIGZ1bmN0aW9uICh0YWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZy51dWlkID0gc2VsZi5nZW5lcmF0ZVVVSUQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdhZGRSaWdodFRhZycsIHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgbnVsbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9uKCdwbGF5JywgKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9uKCdwYXVzZScsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vbigndGltZXVwZGF0ZScsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzWzBdLnByZXZpb3VzIGluc3RhbmNlb2YgVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG91Y2ggPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzWzBdLnByZXZpb3VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgdG91Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzWzBdLmN1cnJlbnQgaW5zdGFuY2VvZiBUb3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3VjaCA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXNbMF0uY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIHRvdWNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRUb3VjaCcsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGlkZUFjdGlvblJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlQWN0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVBY3Rpb25SZXN1bHQuY29sbGlkZUFjdGlvbnNbMF0ucHJldmlvdXMgaW5zdGFuY2VvZiBBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gY29sbGlkZUFjdGlvblJlc3VsdC5jb2xsaWRlQWN0aW9uc1swXS5wcmV2aW91cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xsaWRlQWN0aW9uUmVzdWx0LmNvbGxpZGVBY3Rpb25zWzBdLmN1cnJlbnQgaW5zdGFuY2VvZiBBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gY29sbGlkZUFjdGlvblJlc3VsdC5jb2xsaWRlQWN0aW9uc1swXS5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZEFjdGlvbicsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkQWN0aW9uJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DaGFuZ2VDb2xvcih2YWwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaC5jb2xvciA9IHZhbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGFydFRvdWNoKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSkgKyAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlUmVzdWx0LmNvbGxpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnc2NvdXRpbmdzLnRvdWNoZXNfY2FudF9vdmVybGFwJykpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5kaXNhYmxlUHJvZ3Jlc3MuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgVG91Y2goTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSwgTWF0aC5mbG9vcih0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5jdXJyZW50VGltZSgpKSwgdGhpcy50b3VjaC50ZXh0LCB0aGlzLnRvdWNoLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgnYWRkVG91Y2gnLCBhY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZWNvcmRpbmdUb3VjaCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9vZ2xlSW5zcGVjdG9yKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRTZWxlY3RlZFRvdWNoJywgYWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmluc3BlY3Rvci5zdGFydEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLmZsb29yKHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBhY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkub24oJ3RpbWV1cGRhdGUnLCBzZWxmLm9uU3RhcnRUb3VjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TdGFydFRvdWNoKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpZGVSZXN1bHQuY29sbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3JlY29yZGluZ1RvdWNoJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLm9mZigndGltZXVwZGF0ZScsIHRoaXMub25TdGFydFRvdWNoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmVuZCA9IE1hdGguZmxvb3IodGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuY3VycmVudFRpbWUoKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnc2NvdXRpbmdzLnRvdWNoZXNfY2FudF9vdmVybGFwJykpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wbGF5ZXIuYXBpKCkuZGlzYWJsZVByb2dyZXNzLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGxheWVyLmFwaSgpLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVuZFRvdWNoKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgncmVjb3JkaW5nVG91Y2gnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5vZmYoJ3RpbWV1cGRhdGUnLCB0aGlzLm9uU3RhcnRUb3VjaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5kaXNhYmxlUHJvZ3Jlc3MuZW5hYmxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBsYXllci5hcGkoKS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnNwZWN0b3IuZW5kQWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkaXRUb3VjaChldmVudCwgdG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IHRvdWNoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2F2ZU5ld1RvdWNoKHRvdWNoKXtcclxuICAgICAgICAgICAgICAgIHZhciBhY3QgPSBuZXcgVG91Y2godG91Y2guc3RhcnQsIHRvdWNoLmVuZCwgdG91Y2gudGV4dCwgdG91Y2guY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgYWN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUb3VjaCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWxOZXdUb3VjaCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNhdmVFZGl0VG91Y2godG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ2VkaXRUb3VjaCcsIHRvdWNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFRvdWNoKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbmNlbEVkaXRUb3VjaCh0b3VjaCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzZXRUb3VjaCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vZ2xlVGltZWxpbmUoKXtcclxuICAgICAgICAgICAgICAgIGJ1cy4kZW1pdCgndG9vZ2xlLXRpbWVsaW5lJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2dsZUluc3BlY3Rvcihpc09wZW4pe1xyXG4gICAgICAgICAgICAgICAgYnVzLiRlbWl0KCd0b29nbGUtaW5zcGVjdG9yJywgaXNPcGVuKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlVG91Y2godG91Y2gpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b3VjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdyZW1vdmVUb3VjaCcsIHRvdWNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNhdmUoKXtcclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIudG91Y2hlcztcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSB0aGlzLmZvcm1hdFNvY3V0aW5nKHRvdWNoZXMpO1xyXG4gICAgICAgICAgICAgICAgc2NvdXRpbmdUb3VjaFNlcnZpY2UudXBkYXRlKHRoaXMuJHJvdXRlLnBhcmFtcy5pZCwge3RvdWNoZXM6IHRvdWNoZXN9LCAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3Quc3VjY2Vzc1RvYXN0KHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy5saXN0J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy5saXN0J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9ybWF0U29jdXRpbmcodG91Y2hlcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgXy5lYWNoKHRvdWNoZXMsICh0b3VjaCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFUb3VjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHsnZXMnOiB0b3VjaC50ZXh0LCAnZW4nOiB0b3VjaC50ZXh0fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRvdWNoLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHRvdWNoLmVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRvdWNoLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogdG91Y2guZW5kIC0gdG91Y2guc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmVhY2godG91Y2guYWN0aW9ucywgKGFjdGlvbik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhQWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGFjdGlvbi5zdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogYWN0aW9uLmVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3Rpb24uY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogYWN0aW9uLmVuZCAtIGFjdGlvbi5zdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRUYWdzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0VGFnczogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYWN0aW9uLmxlZnRUYWdzLCAodGFnKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhVGFnID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLmlkID0gdGFnLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5kcm9wZG93biA9IHRhZy5kcm9wZG93bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcuZHJvcGRvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGFnLm9wdGlvbiA9IHtpZDogdGFnLm9wdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFBY3Rpb24ubGVmdFRhZ3MucHVzaChkYXRhVGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goYWN0aW9uLnJpZ2h0VGFncywgKHRhZyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVRhZyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5pZCA9IHRhZy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUYWcuZHJvcGRvd24gPSB0YWcuZHJvcGRvd247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnLmRyb3Bkb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRhZy5vcHRpb24gPSB7aWQ6IHRhZy5vcHRpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQWN0aW9uLnJpZ2h0VGFncy5wdXNoKGRhdGFUYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVRvdWNoLmFjdGlvbnMucHVzaChkYXRhQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goZGF0YVRvdWNoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZWRpdC52dWU/M2ZmNjk2NzgiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIHYtb246c3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdFwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNodGV4dCcpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy10aXRsZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRpdGxlJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC50ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImVycm9ycy5oYXMoJ3RvdWNodGV4dCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaHRleHQnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy10aXRsZVwiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmNvbG9yJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcGFjdC1waWNrZXIgdi1tb2RlbD1cInRvdWNoLmNvbG9yXCIgQGNoYW5nZS1jb2xvcj1cIm9uQ2hhbmdlQ29sb3JcIj48L2NvbXBhY3QtcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoc3RhcnQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctc3RhcnRcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5zdGFydCcpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiU3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2guc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0LWZtdFwiIG5hbWU9XCJuZXctc3RhcnQtZm10XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInN0YXJ0Rm10XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2hzdGFydCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaHN0YXJ0JykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaGVuZCcpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ldy1lbmRcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5lbmQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2hlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwiRW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC5lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LWVuZC1mbXRcIiBuYW1lPVwibmV3LWVuZC1mbXRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW5kRm10XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2hlbmQnKVwiPnt7IGVycm9ycy5maXJzdCgndG91Y2hlbmQnKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJjb2xsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj7DlzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gZmEgZmEtYmFuXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoZXNfY2FudF9vdmVybGFwJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJyl9fTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiY29sbGlkZVRvdWNoIGluIGNvbGxpZGVUb3VjaGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVwiY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IHRvdWNoLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycseyB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLnByZXZpb3VzLnN0YXJ0KSxlbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvSEhNTVNTKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5lbmQpfSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cImNvbGxpZGVUb3VjaC5jdXJyZW50LmlkICE9IHRvdWNoLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycseyB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoLmN1cnJlbnQudGV4dCxzdGFydDp0b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5zdGFydCksZW5kOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5lbmQpfSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJlbmRJbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj7DlzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gZmEgZmEtYmFuXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZXJyb3InKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2VuZF9ncmVhdGVyJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPnt7JHQoJ3Njb3V0aW5ncy5zYXZlJyl9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHYtb246Y2xpY2sucHJldmVudD1cImNsb3NlXCI+e3skdCgnc2NvdXRpbmdzLmNhbmNlbCcpfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XHJcbiAgICBpbXBvcnQge0NvbXBhY3R9IGZyb20gJ3Z1ZS1jb2xvcic7XHJcbiAgICBpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi9za2V0Y2gvY29tcG9uZW50cy91dGlscy9UaW1lQ29udmVydGVyJ1xyXG4gICAgaW1wb3J0IGNvbGxpZGVNaXhpbiBmcm9tICdiYXNlL21peGlucy9jb2xsaWRlJ1xyXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgaW5pdFRvdWNoOiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHt9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWl4aW5zOiBbY29sbGlkZU1peGluXSxcclxuICAgICAgICBjcmVhdGVkKCl7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICAndG91Y2guc3RhcnQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0b3VjaC5lbmQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gY29sbGlkZVJlc3VsdC5jb2xsaWRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZW5kSW52YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3VjaDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0Rm10KCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLnN0YXJ0KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbmRGbXQoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guZW5kKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRW5kKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdjb21wYWN0LXBpY2tlcic6IENvbXBhY3QsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGNsb3NlKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwtbmV3LXRvdWNoJywgdGhpcy50b3VjaCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvSEhNTVNTKHNlY3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sb3IodmFsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guY29sb3IgPSB2YWxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TdWJtaXQoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG91Y2guc3RhcnQgPj0gdGhpcy50b3VjaC5lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbGxpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGJhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC5lcnJvclRvYXN0KHRoaXMuJHQoJ2FkbWluLnZhbGlkYXRpb25fZXJyb3InKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGVkaXRUb3VjaEZvcm0udnVlPzM5ZWY5Y2UwIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXCIgdi1pZj1cIm9wZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoLnRleHQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctdGl0bGVcIiBjbGFzcz1cImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXctdGl0bGVcIiBuYW1lPVwibmV3LXRpdGxlXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cInRvdWNoLnRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcnVsZXM9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInRvdWNoLnRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXCI+e3sgZXJyb3JzLmZpcnN0KCd0b3VjaC50ZXh0JykgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXRpdGxlXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcGFjdC1waWNrZXIgdi1tb2RlbD1cInRvdWNoLmNvbG9yXCIgQGNoYW5nZS1jb2xvcj1cIm9uQ2hhbmdlQ29sb3JcIj48L2NvbXBhY3QtcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3LXN0YXJ0XCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCAoc2VjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1zdGFydFwiIG5hbWU9XCJuZXctc3RhcnRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XCJ0b3VjaC5zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVwiU3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidG91Y2guc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LXN0YXJ0LWZtdFwiIG5hbWU9XCJuZXctc3RhcnQtZm10XCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInN0YXJ0Rm10XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guc3RhcnQnKSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgOmNsYXNzPVwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaC5lbmQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXctZW5kXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQoc2VjKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ldy1lbmRcIiBuYW1lPVwibmV3LWVuZFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cInRvdWNoLmVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJ1bGVzPVwicmVxdWlyZWR8bnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFzPVwiRW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0b3VjaC5lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3LWVuZC1mbXRcIiBuYW1lPVwibmV3LWVuZC1mbXRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW5kRm10XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiZXJyb3JzLmhhcygndG91Y2guZW5kJylcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJjb2xsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj7DlzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJpY29uIGZhIGZhLWJhblwiPjwvaT4gVG91Y2hlcyBjYW50IG92ZXJsYXAhPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHRvdWNoIHRoYXQgeW91IHdhbnQgdG8gYWRkIG92ZXJsYXAgd2l0aDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidG91Y2ggaW4gY29sbGlkZVRvdWNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XCJ0b3VjaC5wcmV2aW91cy5oYXNPd25Qcm9wZXJ0eSgnaWQnKVwiPnt7dG91Y2gucHJldmlvdXMudGV4dH19OiB0aGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB7e3RvSEhNTVNTKHRvdWNoLnByZXZpb3VzLnN0YXJ0KX19IGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5lbmQpfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XCJ0b3VjaC5jdXJyZW50Lmhhc093blByb3BlcnR5KCdpZCcpXCI+e3t0b3VjaC5jdXJyZW50LnRleHR9fTogdGhhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydHMgb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5jdXJyZW50LnN0YXJ0KX19IGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5jdXJyZW50LmVuZCl9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJlbmRJbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj7DlzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJpY29uIGZhIGZhLWJhblwiPjwvaT4gVmFsaWRhdGlvbiBFcnJvciE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5BZGQgVG91Y2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XCJjbG9zZVwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtnZXRTdGF0ZX0gZnJvbSAnbW9ja3N0YXRlJztcclxuICAgIGltcG9ydCB7Q29tcGFjdH0gZnJvbSAndnVlLWNvbG9yJztcclxuICAgIGltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1RpbWVDb252ZXJ0ZXInXHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBvcGVuOiB7fSxcclxuICAgICAgICAgICAgaW5pdFRvdWNoOiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhzbFwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcImxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcImFcIjogMX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmdiYVwiOiB7XCJyXCI6IDIxOSwgXCJnXCI6IDIyMywgXCJiXCI6IDAsIFwiYVwiOiAxLCBcImFscGhhXCI6IDUwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHN2XCI6IHtcImhcIjogNjEuMDc2MjMzMTgzODU2NSwgXCJzXCI6IDEsIFwidlwiOiAwLjg3NDUwOTgwMzkyMTU2ODYsIFwiYVwiOiAxfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHt9LFxyXG4gICAgICAgICAgICBzdGFydDoge30sXHJcbiAgICAgICAgICAgIGVuZDoge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIG9wZW4odmFsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXJ0KHZhbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLnN0YXJ0ID0gdmFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbmQodmFsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guZW5kID0gdmFsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0b3VjaC5zdGFydCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RvdWNoLmVuZCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSAhIShwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgfHwgcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpID4gcGFyc2VJbnQodGhpcy5kdXJhdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVUb3VjaGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIGVuZEludmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IDc3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogNTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBzdGFydEZtdCgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5zdGFydClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5kRm10KCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnRvdWNoLmVuZClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVuZCgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnY29tcGFjdC1waWNrZXInOiBDb21wYWN0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBjbG9zZSgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsLW5ldy10b3VjaCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b0hITU1TUyhzZWNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGltZUNvbnZlcnRlci50b0hITU1TUyhzZWNzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLmNvbG9yID0gdmFsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrQ29sbGlkZSgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvdWNocyA9IGdldFN0YXRlKCd0b3VjaE1hbmFnZXInKS50b3VjaGVzLnNsaWNlKDApO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hzLnB1c2godGhpcy50b3VjaCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcCh0b3VjaHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlID0gb3ZlcmxhcC5vdmVybGFwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IG92ZXJsYXAucmFuZ2VzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvdmVybGFwKHRvdWNocyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc29ydGVkUmFuZ2VzID0gdG91Y2hzLnNvcnQoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1RpbWUgPSBwYXJzZUludChwcmV2aW91cy5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGFyc2VJbnQoY3VycmVudC5zdGFydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyBpcyBlYXJsaWVyIHRoYW4gdGhlIGN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNUaW1lIDwgY3VycmVudFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1RpbWUgPT09IGN1cnJlbnRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgbGF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIGZpbmFsIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ZWRSYW5nZXMucmVkdWNlKChyZXN1bHQsIGN1cnJlbnQsIGlkeCwgYXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcmV2aW91cyByYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gYXJyW2lkeCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYW55IG92ZXJsYXBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNFbmQgPSBwYXJzZUludChwcmV2aW91cy5lbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U3RhcnQgPSBwYXJzZUludChjdXJyZW50LnN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IChwcmV2aW91c0VuZCA+PSBjdXJyZW50U3RhcnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJsYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8geWVzLCB0aGVyZSBpcyBvdmVybGFwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5vdmVybGFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHNwZWNpZmljIHJhbmdlcyB0aGF0IG92ZXJsYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJhbmdlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzOiBwcmV2aW91cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZWQgdGhlIHJlZHVjZVxyXG4gICAgICAgICAgICAgICAgfSwge292ZXJsYXA6IGZhbHNlLCByYW5nZXM6IFtdfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5hbnkoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRJbnZhbGlkID0gISEocGFyc2VJbnQodGhpcy50b3VjaC5zdGFydCkgPj0gcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpIHx8IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSA+IHBhcnNlSW50KE1hdGguZmxvb3IodGhpcy4kcGFyZW50LiRyZWZzLnBsYXllci5hcGkoKS5kdXJhdGlvbigpKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbmRJbnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuICAgIC52dWUtY29sb3JfX2NvbXBhY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5ld1RvdWNoRm9ybS52dWU/YmI5OTliYWUiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1zb2xpZCBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoZXMnKX19XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdCB1aS1zb3J0YWJsZVwiIHYtaWY9XCJ0b3VjaGVzLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidG91Y2ggaW4gdG91Y2hlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiJ2JhY2tncm91bmQ6Jyt0b3VjaC5jb2xvci5oZXgrJzsgaGVpZ2h0OjIwcHg7IHdpZHRoOjIwcHg7bWFyZ2luLXRvcDogMXB4OydcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj57e3RvdWNoLnRleHR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEVtcGhhc2lzIGxhYmVsIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImxhYmVsIGxhYmVsLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3Muc3RhcnRfYXQnLHtzdGFydDp0b0hITU1TUyh0b3VjaC5zdGFydCl9KX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJsYWJlbCBsYWJlbC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MuZW5kX2F0Jyx7ZW5kOnRvSEhNTVNTKHRvdWNoLmVuZCl9KX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEdlbmVyYWwgdG9vbHMgc3VjaCBhcyBlZGl0IG9yIGRlbGV0ZS0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVkaXRcIiB2LW9uOmNsaWNrPVwiZWRpdFRvdWNoKHRvdWNoKVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgdi1vbjpjbGljaz1cInJlbW92ZVRvdWNoKHRvdWNoKVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxoMyB2LWlmPVwiIXRvdWNoZXMubGVuZ3RoXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7JHQoJ3Njb3V0aW5ncy5ub190b3VjaGVzJyl9fTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7Z2V0U3RhdGUsIHN1YnNjcmliZX0gZnJvbSAnbW9ja3N0YXRlJztcclxuICAgIGltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1RpbWVDb252ZXJ0ZXInXHJcbiAgICBpbXBvcnQgc2NvdXRpbmdzTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vc2NvdXRpbmdzL3Njb3V0aW5ncy5qcyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgbG9jYWxlczogc2NvdXRpbmdzTG9jYWxlcyxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0b3VjaGVzOiBnZXRTdGF0ZSgnKicpLnRvdWNoTWFuYWdlci50b3VjaGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKXtcclxuICAgICAgICAgICAgc3Vic2NyaWJlKHRoaXMsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gJ2FkZFRvdWNoJyB8fCBkYXRhLmFjdGlvbiA9PSAncmVtb3ZlVG91Y2gnIHx8IGRhdGEuYWN0aW9uID09ICdlZGl0VG91Y2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaGVzID0gZ2V0U3RhdGUoJyonKS50b3VjaE1hbmFnZXIudG91Y2hlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBlZGl0VG91Y2godG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgYnVzLiRlbWl0KCdlZGl0LXRvdWNoJywgdG91Y2gpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbW92ZVRvdWNoKHRvdWNoKXtcclxuICAgICAgICAgICAgICAgIGJ1cy4kZW1pdCgncmVtb3ZlLXRvdWNoJywgdG91Y2gpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvSEhNTVNTKHNlY3Mpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1Moc2VjcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b3VjaGVzTGlzdC52dWU/MTNlNjNhMGMiLCI8dGVtcGxhdGU+XHJcbiAgICA8dGFnLWRyb3Bkb3duIHYtaWY9XCJ0YWcuZHJvcGRvd25cIiB2LW9uOm9wdGlvbi1jbGlja2VkPVwiZHJvcGRvd25PcHRpb25DbGlja2VkXCIgOnRhZz1cInRhZ1wiPjwvdGFnLWRyb3Bkb3duPlxyXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ0YWctZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzcz1cIiBidG4gdGFnXCIgdi1vbjpjbGljay5wcmV2ZW50PVwidGFnQ2xpY2tlZFwiIDpjbGFzcz1cIidiZy0nK3RhZy5jb2xvclwiPnt7dGFnLm5hbWV9fTwvYT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbiAgICAudGFnIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMTgwLCAxODAsIDE4MCwgMC4xKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAzcHggNnB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGFncyAudGFnOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwOEM7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhZ3MgLnRhZy5wcmltYXJ5IHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4QkNBO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM1N0VCRFxyXG4gICAgfVxyXG5cclxuICAgIC50YWdzIC50YWcuc3VjY2VzcyB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0Q0FFNENcclxuICAgIH1cclxuXHJcbiAgICAudGFncyAudGFnLmluZm8ge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDZCOERBXHJcbiAgICB9XHJcblxyXG4gICAgLnRhZ3MgLnRhZy53YXJuaW5nIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0VFQTIzNlxyXG4gICAgfVxyXG5cclxuICAgIC50YWdzIC50YWcuZGFuZ2VyIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Q0M0YzQVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHRhZ0Ryb3Bkb3duIGZyb20gJy4vdGFnRHJvcGRvd24udnVlJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRhZzoge31cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgdGFnRHJvcGRvd25cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25DbGlja2VkKHRhZyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFnRHJvcGRvd24gPSBfLmNsb25lRGVlcCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGFnLWNsaWNrZWQnLCB0YWdEcm9wZG93bilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGFnQ2xpY2tlZCgpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhZyA9IF8uY2xvbmVEZWVwKHRoaXMudGFnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1jbGlja2VkJywgdGFnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhZy52dWU/MWEyMGJhYzIiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gdGFnLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi10b2dnbGUgYnRuIHRhZ1wiIDpjbGFzcz1cIidiZy0nK3RhZy5jb2xvclwiXHJcbiAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIDppZD1cImlkXCI+e3t0YWcubmFtZX19XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIDphcmlhLWxhYmVsbGVkYnk9XCJpZFwiPlxyXG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJvcHQgaW4gdGFnLm9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiY2xpY2tPcHQob3B0KVwiPnt7b3B0Lm5hbWV9fTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAgIC50YWctZHJvcGRvd24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHV1aWQgZnJvbSAnYmFzZS9taXhpbnMvdXVpZCdcclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRhZzoge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWl4aW5zOiBbdXVpZF0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZVVVSUQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgY2xpY2tPcHQob3B0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFnLm9wdGlvbiA9IG9wdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbi1jbGlja2VkJywgdGhpcy50YWcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGFnRHJvcGRvd24udnVlPzZjM2I5YTY1IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIi4uLlwiPlxyXG4gICAgICAgICAgICAgICAgPHRhZyA6dGFnPVwidGFnXCIgdi1mb3I9XCJ0YWcgaW4gdGFnc1wiIHYtb246dGFnLWNsaWNrZWQ9XCJ0YWdTZWxlY3RlZFwiPjwvdGFnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFncy1zZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFncy1saXN0XCIgdi1kcmFndWxhPVwic2VsZWN0ZWRcIiBiYWc9XCJmaXJzdC1iYWdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJ0YWcgaW4gc2VsZWN0ZWRcIiA6a2V5PVwidGFnLmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCIgOmNsYXNzPVwiJ2JnLScrdGFnLmNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGFnLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRhZy5vcHRpb25cIj4ge3t0YWcub3B0aW9uLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiZGVsZXRlVGFnKHRhZylcIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gICAgaW1wb3J0IHRhZyBmcm9tICcuL3RhZy52dWUnXHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0YWdzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgdGFnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHRhZ1NlbGVjdGVkKHRhZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0YWctc2VsZWN0ZWQnLCB0YWcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGVUYWcodGFnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RhZy1kZWxldGVkJywgdGFnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxyXG4gICAgLnRhZ3Mge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFncy1zZWxlY3RlZCB7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC50YWdzLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWdzLWxpc3Qge1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFncy1saXN0IGRpdixcclxuICAgIC5ndS1taXJyb3Ige1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhZ3MtbGlzdCBkaXYge1xyXG4gICAgICAgIGN1cnNvcjogbW92ZTtcclxuICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgY3Vyc29yOiAtbW96LWdyYWI7XHJcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWdzLWxpc3QgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmd1LW1pcnJvciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTgwKVwiO1xyXG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT04MCk7XHJcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgICAgICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XHJcbiAgICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG4gICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ndS1oaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmd1LXVuc2VsZWN0YWJsZSB7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5ndS10cmFuc2l0IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0yMClcIjtcclxuICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xyXG4gICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWdzLWxpc3QgLmV4LW1vdmVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWdzLWxpc3QuZXgtb3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW5kbGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRhZ3MudnVlP2U5NjJhMGM4IiwiaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaE1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IodG91Y2hlcykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRUb3VjaGVzJywgdG91Y2hlcyA/IHRvdWNoZXMgOiBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHRvdWNoKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goJ2FkZFRvdWNoJywgdG91Y2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSh0b3VjaCkge1xyXG4gICAgICAgIGRpc3BhdGNoKCdyZW1vdmVUb3VjaCcsIHRvdWNoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VPdmVyVG91Y2goeCwgeSkge1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmlzTW91c2VPdmVyKHgsIHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU92ZXJBY3Rpb24oeCwgeSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guYWN0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2pdLmlzTW91c2VPdmVyKHgsIHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZFRvdWNoKHgsIHkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh4LCB5KTtcclxuICAgICAgICB2YXIgYVRvdWNoSXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmlzTW91c2VQcmVzc3NlZE92ZXIoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2pdLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFUb3VjaElzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWFUb3VjaElzU2VsZWN0ZWQgJiYgIXZtLnN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFNlbGVjdGVkVG91Y2gnLCBudWxsKVxyXG4gICAgICAgICAgICBpZiAodm0uJHJlZnMucGxheWVyKVxyXG4gICAgICAgICAgICAgICAgdm0uJHJlZnMucGxheWVyLmFwaSgpLmFiTG9vcFBsdWdpbi5kaXNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlUHJlc3NlZEFjdGlvbih4LCB5KSB7XHJcbiAgICAgICAgdmFyIGFuQWN0aW9uSXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbal0uaXNNb3VzZVByZXNzc2VkT3Zlcih4LCB5KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbal0uaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuQWN0aW9uSXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghYW5BY3Rpb25Jc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0U2VsZWN0ZWRBY3Rpb24nLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgaWYgKHZtLiRyZWZzLnBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5wbGF5ZXIuYXBpKCkuYWJMb29wUGx1Z2luLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy90b3VjaGVzL1RvdWNoTWFuYWdlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlIHtcclxuICAgIHNldHVwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHAuYmFja2dyb3VuZCgyNTUpO1xyXG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDQpO1xyXG4gICAgICAgIHAuc3Ryb2tlKCcjZDNlMGU5Jyk7XHJcbiAgICAgICAgcC5maWxsKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHAucmVjdCgwLCAwLCBwLndpZHRoIC0gMSwgcC5oZWlnaHQgLSAxKVxyXG4gICAgICAgIHAubm9TdHJva2UoKVxyXG4gICAgICAgIHAubm9GaWxsKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvU3RhZ2UuanMiLCJpbXBvcnQgVGltZUNvbnZlcnRlciBmcm9tICcuLi91dGlscy9UaW1lQ29udmVydGVyJ1xyXG5pbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0WSwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRZJywgc3RhcnRZKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVTdGFydFgnLCAzMCk7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lSGVpZ2h0JywgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnN0YXJ0RGVsdGEgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRpbWVsaW5lLmhpZGUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldENvbFdpZHRoJywgdGhpcy5jYWxjdWxhdGVDb2xXaWR0aCgpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWCcsIDApO1xyXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcclxuICAgICAgICAgICAgcC5zdHJva2UoMSk7XHJcbiAgICAgICAgICAgIHAuZmlsbCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgcC50ZXh0U2l6ZSgxMik7XHJcbiAgICAgICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcclxuICAgICAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy5zdGF0ZS5wbGF5ZXIuZHVyYXRpb24pLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyAzMCwgNDAsIDIwKTtcclxuICAgICAgICAgICAgcC50ZXh0QWxpZ24ocC5DRU5URVIpO1xyXG5cclxuICAgICAgICAgICAgcC5zdHJva2UoMCk7XHJcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpO1xyXG4gICAgICAgICAgICBwLmxpbmUodGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1ksIHRoaXMuc3RhdGUudGltZWxpbmUud2lkdGgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aGlzLnN0YXRlLnRpbWVsaW5lLndpZHRoICsgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoIC0gMzA7IGkgKz0gdGhpcy5zdGF0ZS50aW1lbGluZS5jb2xXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBpICsgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3WCA9IHggLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSAqIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXJ0TWludXRlTGFiZWwodGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWUsIHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxpbmUoeCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgJSAodGhpcy5zdGF0ZS50aW1lbGluZS5jb2xXaWR0aCAqIDYpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3WCA+PSAzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMYWJlbChpLCBuZXdYKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGluZShuZXdYKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdYID49IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRpbWVsaW5lLnNob3dTZWNvbmRzSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExhYmVsKGksIG5ld1gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExpbmUobmV3WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50aW1lbGluZS5zaG93U2Vjb25kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pZGRsZVNlY29uZExhYmVsKGksIG5ld1gpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1NlY29uZExpbmUoeCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcC5zdHJva2UoJ3JlZCcpO1xyXG4gICAgICAgICAgICBwLnN0cm9rZVdlaWdodCgyKVxyXG4gICAgICAgICAgICBwLmxpbmUodGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDQ1LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xyXG4gICAgICAgICAgICBwLmxpbmUodGhpcy5zdGF0ZS50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZLCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFgsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlT3ZlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUudGltZWxpbmUuaGlkZSkge1xyXG4gICAgICAgICAgICBpZiAocC5tb3VzZVggPj0gMzAgJiYgcC5tb3VzZVggPD0gdGhpcy5zdGF0ZS5jYW52YXMud2lkdGggLSAzMCAmJiBwLm1vdXNlWSA+PSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSAmJiBwLm1vdXNlWSA8PSB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpIHtcclxuICAgICAgICAgICAgICAgIHAuY3Vyc29yKHAuSEFORCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVNb3VzZU92ZXInLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHAuY3Vyc29yKHAuQVJST1cpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lTW91c2VPdmVyJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYWcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnRpbWVsaW5lLmhpZGUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydERlbHRhID0gKHAucG1vdXNlWCAtIHAubW91c2VYKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnREZWx0YSAhPSBzdGFydERlbHRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSArIChzdGFydERlbHRhKSAvIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgMClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgTWF0aC5mbG9vcihzdGFydCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGVsdGEgPSBzdGFydERlbHRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTZWNvbmRMaW5lKHgpIHtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudGltZWxpbmUuY29sV2lkdGg7IGogKz0gdGhpcy5zdGF0ZS50aW1lbGluZS5jb2xXaWR0aCAvIDEwKSB7XHJcbiAgICAgICAgICAgIGlmICgoeCArIGopIDwgdGhpcy5zdGF0ZS50aW1lbGluZS53aWR0aCAmJiBqKSB7XHJcbiAgICAgICAgICAgICAgICBwLnN0cm9rZSgwKTtcclxuICAgICAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpO1xyXG4gICAgICAgICAgICAgICAgcC5saW5lKHggKyBqLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZHNZICsgNSwgeCArIGosIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xyXG4gICAgICAgICAgICAgICAgcC5zdHJva2UoMjMwKTtcclxuICAgICAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDEpO1xyXG4gICAgICAgICAgICAgICAgcC5saW5lKHggKyBqLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZHNZLCB4ICsgaiwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gajtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TWlkZGxlU2Vjb25kTGluZSh4KSB7XHJcbiAgICAgICAgcC5zdHJva2UoMCk7XHJcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMSlcclxuICAgICAgICBwLmxpbmUoeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRzWSwgeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSk7XHJcbiAgICAgICAgcC5zdHJva2UoMjMwKTtcclxuICAgICAgICBwLnN0cm9rZVdlaWdodCgxKVxyXG4gICAgICAgIHAubGluZSh4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmF4aXNZLCB4LCB0aGlzLnN0YXRlLnRpbWVsaW5lLmVuZFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCB4KSB7XHJcbiAgICAgICAgcC5zdHJva2UoMjMwKTtcclxuICAgICAgICBwLnN0cm9rZVdlaWdodCgwKTtcclxuICAgICAgICBwLnRleHRTaXplKDEwKTtcclxuICAgICAgICBwLnRleHRTdHlsZShwLk5PUk1BTCk7XHJcbiAgICAgICAgcC50ZXh0KFRpbWVDb252ZXJ0ZXIudG9TUyhpIC8gdGhpcy5zdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCkgKyAnIHMnLCB4IC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUuc2Vjb25kc1kgLSAxMCwgNDAsIDIwKTtcclxuICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd01pbnV0ZUxpbmUoeCkge1xyXG4gICAgICAgIHAuc3Ryb2tlKDApO1xyXG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDIpXHJcbiAgICAgICAgcC5saW5lKHgsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgMjAsIHgsIHRoaXMuc3RhdGUudGltZWxpbmUuYXhpc1kpO1xyXG4gICAgICAgIHAuc3Ryb2tlKDIzMCk7XHJcbiAgICAgICAgcC5zdHJva2VXZWlnaHQoMilcclxuICAgICAgICBwLmxpbmUoeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5heGlzWSwgeCwgdGhpcy5zdGF0ZS50aW1lbGluZS5lbmRZKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TWludXRlTGFiZWwoaSwgeCkge1xyXG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xyXG4gICAgICAgIHAudGV4dFNpemUoMTIpO1xyXG4gICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcclxuICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhNYXRoLnJvdW5kKGkgLyB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoKSksIHggLSAyMCwgdGhpcy5zdGF0ZS50aW1lbGluZS5taW51dGVzWSwgNDAsIDIwKTtcclxuICAgICAgICBwLnRleHRBbGlnbihwLkNFTlRFUik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1N0YXJ0TWludXRlTGFiZWwoaSwgeCkge1xyXG4gICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xyXG4gICAgICAgIHAudGV4dFNpemUoMTIpO1xyXG4gICAgICAgIHAudGV4dFN0eWxlKHAuTk9STUFMKTtcclxuICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhpKSwgeCAtIDIwLCB0aGlzLnN0YXRlLnRpbWVsaW5lLm1pbnV0ZXNZLCA0MCwgMjApO1xyXG4gICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDb2xXaWR0aCgpIHtcclxuICAgICAgICB2YXIgbWludXRlcyA9ICggdGhpcy5zdGF0ZS5wbGF5ZXIuZHVyYXRpb24gKyAzMCkgLyA2MDtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigodGhpcy5zdGF0ZS5jYW52YXMud2lkdGggLyBtaW51dGVzKSAvIDYpICogdGhpcy5zdGF0ZS50aW1lbGluZS56b29tRmFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXJ0VGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFRpbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvY29tcG9uZW50cy91aS9UaW1lbGluZS5qcyIsImltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXHJcbmltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb1RpbWVNYXJrZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgY3VycmVudFggPSAodGhpcy5zdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUgLSB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiB0aGlzLnN0YXRlLnRpbWVsaW5lLnNlY29uZFdpZHRoICsgMzA7XHJcbiAgICAgICAgY3VycmVudFggPSBjdXJyZW50WCA+PSAzMCA/IGN1cnJlbnRYIDogMzA7XHJcbiAgICAgICAgaWYgKCh0aGlzLnN0YXRlLnBsYXllci5jdXJyZW50VGltZSAtIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRUaW1lKSA+IDApIHtcclxuICAgICAgICAgICAgcC5zdHJva2UoJ2JsdWUnKTtcclxuICAgICAgICAgICAgcC5zdHJva2VXZWlnaHQoMilcclxuICAgICAgICAgICAgcC5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIDMwLCBjdXJyZW50WCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyA2MCk7XHJcbiAgICAgICAgICAgIHAubGluZShjdXJyZW50WCwgdGhpcy5zdGF0ZS50aW1lbGluZS5zdGFydFkgKyA2MCwgY3VycmVudFgsIHRoaXMuc3RhdGUudGltZWxpbmUuZW5kWSk7XHJcbiAgICAgICAgICAgIHAuc3Ryb2tlV2VpZ2h0KDApO1xyXG4gICAgICAgICAgICBwLnRleHRTaXplKDEyKTtcclxuICAgICAgICAgICAgcC50ZXh0U3R5bGUocC5OT1JNQUwpO1xyXG4gICAgICAgICAgICBwLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhNYXRoLmZsb29yKHRoaXMuc3RhdGUucGxheWVyLmN1cnJlbnRUaW1lKSksIGN1cnJlbnRYIC0gMjAsIHRoaXMuc3RhdGUudGltZWxpbmUuc3RhcnRZICsgMTUsIDQwLCAyMCk7XHJcbiAgICAgICAgICAgIHAudGV4dEFsaWduKHAuQ0VOVEVSKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZyh4LCB5KSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvVmlkZW9UaW1lTWFya2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yU3RhZ2Uge1xyXG4gICAgc2V0dXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgaW5zcGVjdG9yLmJhY2tncm91bmQoMjU1KTtcclxuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDQpO1xyXG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoJyNkM2UwZTknKTtcclxuICAgICAgICBpbnNwZWN0b3IuZmlsbCgyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBpbnNwZWN0b3IucmVjdCgwLCAwLCBpbnNwZWN0b3Iud2lkdGggLSAxLCBpbnNwZWN0b3IuaGVpZ2h0IC0gMSlcclxuICAgICAgICBpbnNwZWN0b3Iubm9TdHJva2UoKVxyXG4gICAgICAgIGluc3BlY3Rvci5ub0ZpbGwoKTtcclxuXHJcbiAgICAgICAgaW5zcGVjdG9yLnB1c2goKVxyXG4gICAgICAgIGluc3BlY3Rvci50cmFuc2xhdGUoMCwgNjApO1xyXG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoJyNkM2UwZTknKTtcclxuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xyXG4gICAgICAgIGluc3BlY3Rvci5yZWN0KDAsIDAsIDEyMCwgNjApXHJcbiAgICAgICAgaW5zcGVjdG9yLmxpbmUoMCwgMCwgaW5zcGVjdG9yLndpZHRoLCAwKTtcclxuICAgICAgICBpbnNwZWN0b3IubGluZSgwLCA2MCwgaW5zcGVjdG9yLndpZHRoLCA2MCk7XHJcbiAgICAgICAgaW5zcGVjdG9yLmZpbGwoJ2JsYWNrJyk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcclxuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xyXG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoJ0xlZnQgQXRobGV0ZScsIDUsIDI0LCAxMTAsIDEyKTtcclxuICAgICAgICBpbnNwZWN0b3IucG9wKClcclxuXHJcbiAgICAgICAgaW5zcGVjdG9yLnB1c2goKVxyXG4gICAgICAgIGluc3BlY3Rvci50cmFuc2xhdGUoMCwgMTIwKTtcclxuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCcjZDNlMGU5Jyk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKTtcclxuICAgICAgICBpbnNwZWN0b3IucmVjdCgwLCAwLCAxMjAsIDYwKTtcclxuICAgICAgICBpbnNwZWN0b3IubGluZSgwLCA2MCwgaW5zcGVjdG9yLndpZHRoLCA2MCk7XHJcbiAgICAgICAgaW5zcGVjdG9yLmZpbGwoJ2JsYWNrJyk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTaXplKDEyKTtcclxuICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKGluc3BlY3Rvci5OT1JNQUwpO1xyXG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoJ1JpZ2h0IEF0aGxldGUnLCA1LCAyNCwgMTEwLCAxMik7XHJcbiAgICAgICAgaW5zcGVjdG9yLnBvcCgpXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclN0YWdlLmpzIiwiaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vLi4vdXRpbHMvVGltZUNvbnZlcnRlcidcclxuaW1wb3J0IHtnZXRTdGF0ZSwgZGlzcGF0Y2h9IGZyb20gJ21vY2tzdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnNwZWN0b3JUaW1lbGluZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGFydFksIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRTdGF0ZSgnKicpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFydFknLCBzdGFydFkpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFydFgnLCAxMjApO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JIZWlnaHQnLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREZWx0YSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgY29sV2lkdGggPSB0aGlzLmNhbGN1bGF0ZUNvbFdpZHRoKCk7XHJcbiAgICAgICAgaWYgKGNvbFdpZHRoID4gMCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQ29sV2lkdGgnLCBjb2xXaWR0aCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JFbmRYJywgKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guZW5kIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCkgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGggKyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvclN0YXJ0VGltZScsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQpXHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMCk7XHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoMSk7XHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5maWxsKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3IudGV4dFN0eWxlKHAuTk9STUFMKTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmVuZCksIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYIC0gMjAsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAzMCwgNDAsIDIwKTtcclxuICAgICAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihwLkNFTlRFUik7XHJcblxyXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDApO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDEpO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1ksIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLndpZHRoICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCAqIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCAtIDMwOyBpICs9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBpICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WDtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdYID0geCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFRpbWUgKiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1N0YXJ0TGFiZWwodGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0VGltZSwgeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWludXRlTGluZSh4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSAlICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuY29sV2lkdGggKiA2KSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0gMTIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd01pbnV0ZUxhYmVsKGksIG5ld1gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaW51dGVMaW5lKG5ld1gpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0gMTIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2hvd1NlY29uZHNJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgbmV3WCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3TWlkZGxlU2Vjb25kTGluZShuZXdYKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2hvd1NlY29uZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdNaWRkbGVTZWNvbmRMYWJlbChpLCBuZXdYKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWNvbmRMaW5lKHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoJ3JlZCcpO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDIpXHJcbiAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgNDUsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kpO1xyXG4gICAgICAgICAgICBpbnNwZWN0b3IubGluZSh0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VPdmVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmhpZGUpIHtcclxuICAgICAgICAgICAgaWYgKGluc3BlY3Rvci5tb3VzZVggPj0gMzAgJiYgaW5zcGVjdG9yLm1vdXNlWCA8PSB0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCAtIDMwICYmIGluc3BlY3Rvci5tb3VzZVkgPj0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSAmJiBpbnNwZWN0b3IubW91c2VZIDw9IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3IuY3Vyc29yKGluc3BlY3Rvci5IQU5EKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKCdzZXRUaW1lbGluZU1vdXNlT3ZlcicsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLmN1cnNvcihpbnNwZWN0b3IuQVJST1cpO1xyXG4gICAgICAgICAgICAgICAgLy8gIGRpc3BhdGNoKCdzZXRUaW1lbGluZU1vdXNlT3ZlcicsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmFnKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmhpZGUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydERlbHRhID0gKGluc3BlY3Rvci5wbW91c2VYIC0gaW5zcGVjdG9yLm1vdXNlWCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0RGVsdGEgIT0gc3RhcnREZWx0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCArIChzdGFydERlbHRhKSAvIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aDtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVN0YXJ0VGltZScsIDApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lU3RhcnRUaW1lJywgTWF0aC5mbG9vcihzdGFydCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGVsdGEgPSBzdGFydERlbHRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTZWNvbmRMaW5lKHgpIHtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aDsgaiArPSB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuY29sV2lkdGggLyAxMCkge1xyXG4gICAgICAgICAgICBpZiAoKHggKyBqKSA8IHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCAmJiBqKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDApO1xyXG4gICAgICAgICAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgxKTtcclxuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5saW5lKHggKyBqLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1kgKyA1LCB4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcclxuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2UoMjMwKTtcclxuICAgICAgICAgICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSk7XHJcbiAgICAgICAgICAgICAgICBpbnNwZWN0b3IubGluZSh4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZHNZLCB4ICsgaiwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBqO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdNaWRkbGVTZWNvbmRMaW5lKHgpIHtcclxuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDApO1xyXG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSlcclxuICAgICAgICBpbnNwZWN0b3IubGluZSh4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1ksIHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZSgyMzApO1xyXG4gICAgICAgIGluc3BlY3Rvci5zdHJva2VXZWlnaHQoMSlcclxuICAgICAgICBpbnNwZWN0b3IubGluZSh4LCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1ksIHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3TWlkZGxlU2Vjb25kTGFiZWwoaSwgeCkge1xyXG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoMjMwKTtcclxuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDApO1xyXG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMCk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcclxuICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvU1MoaSAvIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRXaWR0aCkgKyAnIHMnLCB4IC0gMjAsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zZWNvbmRzWSAtIDEwLCA0MCwgMjApO1xyXG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd01pbnV0ZUxpbmUoeCkge1xyXG4gICAgICAgIGluc3BlY3Rvci5zdHJva2UoMCk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgyKVxyXG4gICAgICAgIGluc3BlY3Rvci5saW5lKHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAyMCwgeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmF4aXNZKTtcclxuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKDIzMCk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgyKVxyXG4gICAgICAgIGluc3BlY3Rvci5saW5lKHgsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5heGlzWSwgeCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdNaW51dGVMYWJlbChpLCB4KSB7XHJcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgwKTtcclxuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xyXG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhNYXRoLnJvdW5kKGkgLyB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kV2lkdGgpKSwgeCAtIDIwLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUubWludXRlc1ksIDQwLCAyMCk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHRBbGlnbihpbnNwZWN0b3IuQ0VOVEVSKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3RhcnRMYWJlbChzdGFydFRpbWUsIHgpIHtcclxuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlV2VpZ2h0KDApO1xyXG4gICAgICAgIGluc3BlY3Rvci50ZXh0U2l6ZSgxMik7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHRTdHlsZShpbnNwZWN0b3IuTk9STUFMKTtcclxuICAgICAgICBpbnNwZWN0b3IudGV4dChUaW1lQ29udmVydGVyLnRvSEhNTVNTKHN0YXJ0VGltZSksIHggLSAyMCwgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLm1pbnV0ZXNZLCA0MCwgMjApO1xyXG4gICAgICAgIGluc3BlY3Rvci50ZXh0QWxpZ24oaW5zcGVjdG9yLkNFTlRFUik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ29sV2lkdGgoKSB7XHJcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSAoIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guZW5kIC0gdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5zdGFydCkgLyA2MDtcclxuICAgICAgICBpZiAobWludXRlcyA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKCh0aGlzLnN0YXRlLmNhbnZhcy53aWR0aCAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFggLSAzMCkgLyBtaW51dGVzKSAvIDYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhcnRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLnN0YXJ0O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JUaW1lbGluZS5qcyIsImltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uLy4uL3V0aWxzL1RpbWVDb252ZXJ0ZXInXHJcbmltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldFN0YXRlKCcqJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUucGxheWVyLmN1cnJlbnRUaW1lKVxyXG4gICAgICAgIHZhciBjdXJyZW50WCA9IChjdXJyZW50VGltZSAtIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkVG91Y2guc3RhcnQpICogdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoICsgdGhpcy5zdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WDtcclxuICAgICAgICBpbnNwZWN0b3Iuc3Ryb2tlKCdibHVlJyk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgyKVxyXG4gICAgICAgIGluc3BlY3Rvci5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgMzAsIGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgNjApO1xyXG4gICAgICAgIGluc3BlY3Rvci5saW5lKGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZICsgNjAsIGN1cnJlbnRYLCB0aGlzLnN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuZW5kWSk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnN0cm9rZVdlaWdodCgwKTtcclxuICAgICAgICBpbnNwZWN0b3IudGV4dFNpemUoMTIpO1xyXG4gICAgICAgIGluc3BlY3Rvci50ZXh0U3R5bGUoaW5zcGVjdG9yLk5PUk1BTCk7XHJcbiAgICAgICAgaW5zcGVjdG9yLnRleHQoVGltZUNvbnZlcnRlci50b0hITU1TUyhjdXJyZW50VGltZSksIGN1cnJlbnRYIC0gMjAsIHRoaXMuc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFkgKyAxNSwgNDAsIDIwKTtcclxuICAgICAgICBpbnNwZWN0b3IudGV4dEFsaWduKGluc3BlY3Rvci5DRU5URVIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWcoeCwgeSkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3NrZXRjaC9jb21wb25lbnRzL3VpL2luc3BlY3Rvci9JbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIuanMiLCJpbXBvcnQge2dldFN0YXRlLCBkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcclxuaW1wb3J0IEluc3BlY3RvclN0YWdlIGZyb20gJy4vY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yU3RhZ2UnXHJcbmltcG9ydCBJbnNwZWN0b3JUaW1lbGluZSBmcm9tICcuL2NvbXBvbmVudHMvdWkvaW5zcGVjdG9yL0luc3BlY3RvclRpbWVsaW5lJ1xyXG5pbXBvcnQgSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyIGZyb20gJy4vY29tcG9uZW50cy91aS9pbnNwZWN0b3IvSW5zcGVjdG9yVmlkZW9UaW1lTWFya2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tldGNoKGluc3BlY3Rvcikge1xyXG4gICAgbGV0IHN0YXRlID0gbnVsbDtcclxuICAgIHdpbmRvdy5pbnNwZWN0b3IgPSBpbnNwZWN0b3I7XHJcbiAgICBpbnNwZWN0b3Iuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3BlY3RvckJveCcpLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBpbnNwZWN0b3IuY3JlYXRlQ2FudmFzKHdpZHRoIC0gMjAsIDE5MCk7XHJcbiAgICAgICAgY2FudmFzLm1vdXNlTW92ZWQobW91c2VNb3ZlZCk7XHJcbiAgICAgICAgY2FudmFzLm1vdXNlUHJlc3NlZChtb3VzZVByZXNzZWQpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JDYW52YXMnLCBjYW52YXMpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JDYW52YXNIZWlnaHQnLCBpbnNwZWN0b3IuaGVpZ2h0KTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQ2FudmFzV2lkdGgnLCBpbnNwZWN0b3Iud2lkdGgpO1xyXG4gICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLmNhbnZhcy5pbnN0YW5jZS5wYXJlbnQoJ2luc3BlY3RvcicpO1xyXG4gICAgICAgIHZhciBzdGFnZSA9IG5ldyBJbnNwZWN0b3JTdGFnZSgpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTdGFnZScsIHN0YWdlKTtcclxuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgSW5zcGVjdG9yVGltZWxpbmUoMCwgMTgwKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yVGltZWxpbmUnLCB0aW1lbGluZSk7XHJcbiAgICAgICAgdmFyIHZpZGVvVGltZU1hcmtlciA9IG5ldyBJbnNwZWN0b3JWaWRlb1RpbWVNYXJrZXIoKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yVmlkZW9NYXJrZXInLCB2aWRlb1RpbWVNYXJrZXIpO1xyXG5cclxuICAgICAgICBpbnNwZWN0b3IuY29sb3JNb2RlKGluc3BlY3Rvci5SR0IsIDI1NSwgMjU1LCAyNTUsIDEwMCk7XHJcblxyXG4gICAgICAgIGluc3BlY3Rvci5mcmFtZVJhdGUoMTApO1xyXG4gICAgICAgIGluc3BlY3Rvci5ub0xvb3AoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zcGVjdG9yLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5zdGFnZS5pbnN0YW5jZS5kcmF3KCk7XHJcbiAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuaW5zdGFuY2UuZHJhdygpO1xyXG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5kcmF3QWN0aW9ucygpO1xyXG4gICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnZpZGVvTWFya2VyLmluc3RhbmNlLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlTW92ZWQoKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZS5tb3VzZU92ZXJBY3Rpb24oaW5zcGVjdG9yLm1vdXNlWCwgaW5zcGVjdG9yLm1vdXNlWSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW91c2VQcmVzc2VkKCkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UubW91c2VQcmVzc2VkQWN0aW9uKGluc3BlY3Rvci5tb3VzZVgsIGluc3BlY3Rvci5tb3VzZVkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5zcGVjdG9yLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5zcGVjdG9yLm5vTG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluc3BlY3Rvci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbnNwZWN0b3IubG9vcCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL2luc3BlY3RvclNrZXRjaC5qcyIsImltcG9ydCBUb3VjaCBmcm9tICcuLi9jb21wb25lbnRzL3RvdWNoZXMvVG91Y2gnXHJcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy90b3VjaGVzL0FjdGlvbidcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2V0dXAoKXtcclxuXHJcbiAgICAgICAgdmFyIGFjdGlvbiA9IG5ldyBBY3Rpb24oMCwgNjAsIHtcclxuICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxyXG4gICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcclxuICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxyXG4gICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVG91Y2goMCwgMTIwLCAnVG91Y2ggRXhhbXBsZScsIHtcclxuICAgICAgICAgICAgXCJoc2xcIjoge1wiaFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcInNcIjogMSwgXCJsXCI6IDAuNDM3MjU0OTAxOTYwNzg0MywgXCJhXCI6IDF9LFxyXG4gICAgICAgICAgICBcImhleFwiOiBcIiNEQkRGMDBcIixcclxuICAgICAgICAgICAgXCJyZ2JhXCI6IHtcInJcIjogMjE5LCBcImdcIjogMjIzLCBcImJcIjogMCwgXCJhXCI6IDEsIFwiYWxwaGFcIjogNTB9LFxyXG4gICAgICAgICAgICBcImhzdlwiOiB7XCJoXCI6IDYxLjA3NjIzMzE4Mzg1NjUsIFwic1wiOiAxLCBcInZcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcImFcIjogMX0sXHJcbiAgICAgICAgfSwgW2FjdGlvbl0pO1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9za2V0Y2gvc3BlY3MvdG91Y2hlc1NwZWMuanMiLCJpbXBvcnQgU3RhZ2UgZnJvbSAnLi9jb21wb25lbnRzL3VpL1N0YWdlJ1xyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi9jb21wb25lbnRzL3VpL1RpbWVsaW5lJ1xyXG5pbXBvcnQgVG91Y2hNYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50cy90b3VjaGVzL1RvdWNoTWFuYWdlcidcclxuaW1wb3J0IFZpZGVvVGltZU1hcmtlciBmcm9tICcuL2NvbXBvbmVudHMvdWkvVmlkZW9UaW1lTWFya2VyJ1xyXG5pbXBvcnQgVG91Y2hTcGVjIGZyb20gJy4vc3BlY3MvdG91Y2hlc1NwZWMnXHJcbmltcG9ydCB7Z2V0U3RhdGUsIGRpc3BhdGNofSBmcm9tICdtb2Nrc3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tldGNoKHApIHtcclxuICAgIGxldCBzdGF0ZSA9IG51bGw7XHJcbiAgICB3aW5kb3cucCA9IHA7XHJcbiAgICBwLnNldHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lbGluZUJveCcpLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBwLmNyZWF0ZUNhbnZhcyh3aWR0aCAtIDIwLCAxMzApO1xyXG4gICAgICAgIGNhbnZhcy5tb3VzZU1vdmVkKG1vdXNlTW92ZWQpO1xyXG4gICAgICAgIGNhbnZhcy5tb3VzZVByZXNzZWQobW91c2VQcmVzc2VkKTtcclxuICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCcqJyk7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldENhbnZhcycsIGNhbnZhcyk7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldEhlaWdodCcsIHAuaGVpZ2h0KTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0V2lkdGgnLCBwLndpZHRoKTtcclxuICAgICAgICBzdGF0ZS5jYW52YXMuaW5zdGFuY2UucGFyZW50KCd0aW1lbGluZScpO1xyXG4gICAgICAgIHZhciBzdGFnZSA9IG5ldyBTdGFnZSgpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRTdGFnZScsIHN0YWdlKTtcclxuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgVGltZWxpbmUoMCwgMTIwKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmUnLCB0aW1lbGluZSk7XHJcbiAgICAgICAgdmFyIHRvdWNoTWFuYWdlciA9IG5ldyBUb3VjaE1hbmFnZXIoWy8qVG91Y2hTcGVjLnNldHVwKCkqL10pO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRUb3VjaE1hbmFnZXInLCB0b3VjaE1hbmFnZXIpO1xyXG4gICAgICAgIHZhciB2aWRlb1RpbWVNYXJrZXIgPSBuZXcgVmlkZW9UaW1lTWFya2VyKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldFZpZGVvTWFya2VyJywgdmlkZW9UaW1lTWFya2VyKTtcclxuXHJcbiAgICAgICAgc3RhdGUuc3RhZ2UuaW5zdGFuY2Uuc2V0dXAoKTtcclxuICAgICAgICBwLmNvbG9yTW9kZShwLlJHQiwgMjU1LCAyNTUsIDI1NSwgMTAwKVxyXG5cclxuICAgICAgICBjb25maWdCdXR0b25zKCk7XHJcbiAgICAgICAgcC5mcmFtZVJhdGUoMTApO1xyXG4gICAgfTtcclxuXHJcbiAgICBwLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3RhdGUuc3RhZ2UuaW5zdGFuY2UuZHJhdygpO1xyXG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmluc3RhbmNlLmRyYXcoKTtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UuZHJhdygpO1xyXG4gICAgICAgIHN0YXRlLnZpZGVvTWFya2VyLmluc3RhbmNlLmRyYXcoKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlnQnV0dG9ucygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbUluKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgKyAxKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gem9vbU91dChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgPiBzdGF0ZS50aW1lbGluZS5pbml0aWFsWm9vbUZhY3Rvcikge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCgnc2V0Wm9vbScsIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgLSAxKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEluaXRpYWxpemVkJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb3VzZU1vdmVkKCkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UubW91c2VPdmVyVG91Y2gocC5tb3VzZVgsIHAubW91c2VZKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZS5tb3VzZU92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHAubW91c2VEcmFnZ2VkID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLmluc3RhbmNlLmRyYWcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdXNlUHJlc3NlZCgpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnRvdWNoTWFuYWdlci5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3RhbmNlLm1vdXNlUHJlc3NlZFRvdWNoKHAubW91c2VYLCBwLm1vdXNlWSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25vbG9vcCcpO1xyXG4gICAgICAgIHAubm9Mb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9vcCcpO1xyXG4gICAgICAgIHAubG9vcCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc2tldGNoL3RpbWVsaW5lU2tldGNoLmpzIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSAnbW9ja3N0YXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgcGxheWVyUmVhZHkoc3RhdGUsIHJlYWR5KXtcclxuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyUmVhZHknKTtcclxuICAgICAgICBzdGF0ZS5wbGF5ZXJSZWFkeSA9IHJlYWR5O1xyXG4gICAgICAgIHJldHVybiByZWFkeTtcclxuICAgIH0sXHJcbiAgICBzZXRDYW52YXMoc3RhdGUsIGluc3RhbmNlKXtcclxuICAgICAgICBzdGF0ZS5jYW52YXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZWxpbmUoc3RhdGUsIGluc3RhbmNlKXtcclxuICAgICAgICBzdGF0ZS50aW1lbGluZS5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH0sXHJcbiAgICBzZXRUb3VjaE1hbmFnZXIoc3RhdGUsIGluc3RhbmNlKXtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9LFxyXG4gICAgc2V0U3RhZ2Uoc3RhdGUsIGluc3RhbmNlKXtcclxuICAgICAgICBzdGF0ZS5zdGFnZS5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH0sXHJcbiAgICBzZXRQbGF5ZXIoc3RhdGUsIGluc3RhbmNlKXtcclxuICAgICAgICBzdGF0ZS5wbGF5ZXIuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9LFxyXG4gICAgc2V0VmlkZW9NYXJrZXIoc3RhdGUsIGluc3RhbmNlKXtcclxuICAgICAgICBzdGF0ZS52aWRlb01hcmtlci5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH0sXHJcbiAgICBzZXRXaWR0aChzdGF0ZSwgd2lkdGgpe1xyXG4gICAgICAgIHN0YXRlLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVdpZHRoJywgd2lkdGgpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JXaWR0aCcsIHdpZHRoKTtcclxuICAgICAgICByZXR1cm4gd2lkdGg7XHJcbiAgICB9LFxyXG4gICAgc2V0SGVpZ2h0KHN0YXRlLCBoZWlnaHQpe1xyXG4gICAgICAgIHN0YXRlLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgIH0sXHJcbiAgICBzZXRUaW1lbGluZVdpZHRoKHN0YXRlLCB3aWR0aCl7XHJcbiAgICAgICAgc3RhdGUudGltZWxpbmUud2lkdGggPSB3aWR0aDtcclxuICAgICAgICByZXR1cm4gd2lkdGg7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZWxpbmVIaWRlKHN0YXRlLCBoaWRlKXtcclxuICAgICAgICBzdGF0ZS50aW1lbGluZS5oaWRlID0gaGlkZTtcclxuICAgICAgICByZXR1cm4gaGlkZTtcclxuICAgIH0sXHJcbiAgICBzZXRUaW1lbGluZUhlaWdodChzdGF0ZSwgaGVpZ2h0KXtcclxuICAgICAgICBzdGF0ZS50aW1lbGluZS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldFRpbWVsaW5lRW5kWScsIHN0YXRlLnRpbWVsaW5lLnN0YXJ0WSArIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgIH0sXHJcbiAgICBzZXRUaW1lbGluZU1vdXNlT3ZlcihzdGF0ZSwgbW91c2VPdmVyKXtcclxuICAgICAgICBzdGF0ZS50aW1lbGluZS5pc01vdXNlT3ZlciA9IG1vdXNlT3ZlcjtcclxuICAgICAgICByZXR1cm4gbW91c2VPdmVyO1xyXG4gICAgfSxcclxuICAgIHNldFRpbWVsaW5lU3RhcnRUaW1lKHN0YXRlLCBzdGFydFRpbWUpe1xyXG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcclxuICAgICAgICByZXR1cm4gc3RhcnRUaW1lO1xyXG4gICAgfSxcclxuICAgIHNldFRpbWVsaW5lU3RhcnRZKHN0YXRlLCBzdGFydFkpe1xyXG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLnN0YXJ0WSA9IHN0YXJ0WTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0VGltZWxpbmVNaW51dGVzWScsIHN0YXJ0WSArIDUpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZVNlY29uZHNZJywgc3RhcnRZICsgNTUpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUF4aXNZJywgc3RhcnRZICsgNjApO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUVuZFknLCBzdGFydFkgKyBzdGF0ZS50aW1lbGluZS5oZWlnaHQpO1xyXG4gICAgICAgIHJldHVybiBzdGFydFk7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZWxpbmVBeGlzWShzdGF0ZSwgYXhpc1kpe1xyXG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmF4aXNZID0gYXhpc1k7XHJcbiAgICAgICAgcmV0dXJuIGF4aXNZO1xyXG4gICAgfSxcclxuICAgIHNldFRpbWVsaW5lRW5kWShzdGF0ZSwgZW5kWSl7XHJcbiAgICAgICAgc3RhdGUudGltZWxpbmUuZW5kWSA9IGVuZFk7XHJcbiAgICAgICAgcmV0dXJuIGVuZFk7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZWxpbmVTdGFydFgoc3RhdGUsIHN0YXJ0WCl7XHJcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc3RhcnRYID0gc3RhcnRYO1xyXG4gICAgICAgIHJldHVybiBzdGFydFg7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZWxpbmVFbmRYKHN0YXRlLCBlbmRYKXtcclxuICAgICAgICBlbmRYID0gKHN0YXRlLnBsYXllci5kdXJhdGlvbiAtIHN0YXRlLnRpbWVsaW5lLnN0YXJ0VGltZSkgKiBzdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCArIDMwO1xyXG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmVuZFggPSBlbmRYO1xyXG4gICAgICAgIHJldHVybiBlbmRYO1xyXG4gICAgfSxcclxuICAgIHNldFRpbWVsaW5lTWludXRlc1koc3RhdGUsIG1pbnV0ZXNZKXtcclxuICAgICAgICBzdGF0ZS50aW1lbGluZS5taW51dGVzWSA9IG1pbnV0ZXNZO1xyXG4gICAgICAgIHJldHVybiBtaW51dGVzWTtcclxuICAgIH0sXHJcbiAgICBzZXRUaW1lbGluZVNlY29uZHNZKHN0YXRlLCBzZWNvbmRzWSl7XHJcbiAgICAgICAgc3RhdGUudGltZWxpbmUuc2Vjb25kc1kgPSBzZWNvbmRzWTtcclxuICAgICAgICByZXR1cm4gc2Vjb25kc1k7XHJcbiAgICB9LFxyXG4gICAgc2V0U2hvd1NlY29uZHMoc3RhdGUsIHNob3dTZWNvbmRzKXtcclxuICAgICAgICBzdGF0ZS50aW1lbGluZS5zaG93U2Vjb25kcyA9IHNob3dTZWNvbmRzO1xyXG4gICAgICAgIHJldHVybiBzaG93U2Vjb25kcztcclxuICAgIH0sXHJcbiAgICBzZXRTaG93U2Vjb25kc0ludGVydmFsKHN0YXRlLCBzaG93U2Vjb25kc0ludGVydmFsKXtcclxuICAgICAgICBzdGF0ZS50aW1lbGluZS5zaG93U2Vjb25kc0ludGVydmFsID0gc2hvd1NlY29uZHNJbnRlcnZhbDtcclxuICAgICAgICByZXR1cm4gc2hvd1NlY29uZHNJbnRlcnZhbDtcclxuICAgIH0sXHJcbiAgICBzZXRab29tKHN0YXRlLCB6b29tKXtcclxuICAgICAgICBpZiAoc3RhdGUucGxheWVyLmR1cmF0aW9uID4gNDIwKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yID0gTWF0aC5mbG9vcihzdGF0ZS5wbGF5ZXIuZHVyYXRpb24gLyA0MjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUuem9vbUZhY3RvciAhPSB6b29tKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3JDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoem9vbSA8IHN0YXRlLnRpbWVsaW5lLmluaXRpYWxab29tRmFjdG9yKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRpbWVsaW5lLnpvb21GYWN0b3IgPSBzdGF0ZS50aW1lbGluZS5pbml0aWFsWm9vbUZhY3RvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0ZS50aW1lbGluZS56b29tRmFjdG9yID0gem9vbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHpvb207XHJcbiAgICB9LFxyXG4gICAgc2V0U2Vjb25kV2lkdGgoc3RhdGUsIHNlY29uZFdpZHRoKXtcclxuICAgICAgICBzdGF0ZS50aW1lbGluZS5zZWNvbmRXaWR0aCA9IHNlY29uZFdpZHRoO1xyXG4gICAgICAgIHJldHVybiBzZWNvbmRXaWR0aDtcclxuICAgIH0sXHJcbiAgICBzZXRDb2xXaWR0aChzdGF0ZSwgY29sV2lkdGgpe1xyXG4gICAgICAgIHN0YXRlLnRpbWVsaW5lLmNvbFdpZHRoID0gY29sV2lkdGg7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldFNob3dTZWNvbmRzSW50ZXJ2YWwnLCBjb2xXaWR0aCA+IDYwKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0U2hvd1NlY29uZHMnLCBjb2xXaWR0aCA+IDkwKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0U2Vjb25kV2lkdGgnLCBjb2xXaWR0aCAvIDEwKVxyXG4gICAgICAgIHJldHVybiBjb2xXaWR0aDtcclxuICAgIH0sXHJcbiAgICBzZXREdXJhdGlvbihzdGF0ZSwgZHVyYXRpb24pe1xyXG4gICAgICAgIHN0YXRlLnBsYXllci5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRUaW1lbGluZUVuZFgnLCAwKTtcclxuICAgICAgICByZXR1cm4gZHVyYXRpb247XHJcbiAgICB9LFxyXG4gICAgc2V0Q3VycmVudFRpbWUoc3RhdGUsIGN1cnJlbnRUaW1lKXtcclxuICAgICAgICBzdGF0ZS5wbGF5ZXIuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFRpbWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEluaXRpYWxpemVkKHN0YXRlLCBpbml0aWFsaXplZCl7XHJcbiAgICAgICAgc3RhdGUuaW5pdGlhbGl6ZWQgPSBpbml0aWFsaXplZDtcclxuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0VG91Y2hlcyhzdGF0ZSwgdG91Y2hlcyl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXMgPSB0b3VjaGVzO1xyXG4gICAgICAgIHJldHVybiB0b3VjaGVzO1xyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkVG91Y2goc3RhdGUsIHRvdWNoKXtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaCA9IHRvdWNoO1xyXG4gICAgICAgIHJldHVybiB0b3VjaDtcclxuICAgIH0sXHJcbiAgICBhZGRUb3VjaChzdGF0ZSwgdG91Y2gpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLnB1c2godG91Y2gpO1xyXG4gICAgICAgIHJldHVybiB0b3VjaDtcclxuICAgIH0sXHJcbiAgICBlZGl0VG91Y2goc3RhdGUsIHRvdWNoKXtcclxuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlcywgZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG8uaWQgPT0gdG91Y2guaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uc3RhcnQgPSB0b3VjaC5zdGFydDtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIudG91Y2hlc1tpbmRleF0uZW5kID0gdG91Y2guZW5kO1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2luZGV4XS5jb2xvciA9IHRvdWNoLmNvbG9yO1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzW2luZGV4XS50ZXh0ID0gdG91Y2gudGV4dDtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLmFjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnRvdWNoZXNbaW5kZXhdLmFjdGlvbnNbaV0uY29sb3IgPSBfLmNsb25lRGVlcCh0b3VjaC5jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3VjaDtcclxuICAgIH0sXHJcbiAgICByZW1vdmVUb3VjaChzdGF0ZSwgdG91Y2gpe1xyXG4gICAgICAgIHZhciBpbmRleCA9IF8uZmluZEluZGV4KHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLCBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICByZXR1cm4gby5pZCA9PSB0b3VjaC5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci50b3VjaGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3VjaDtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vaW5zcGVjdG9yXHJcbiAgICBzZXRJbnNwZWN0b3Ioc3RhdGUsIGluc3BlY3Rvcil7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5pbnN0YW5jZSA9IGluc3BlY3RvcjtcclxuICAgICAgICByZXR1cm4gaW5zcGVjdG9yO1xyXG4gICAgfSxcclxuICAgIHNldEluc3BlY3RvcldpZHRoKHN0YXRlLCB3aWR0aCl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHJldHVybiB3aWR0aDtcclxuICAgIH0sXHJcbiAgICBzZXRJbnNwZWN0b3JIZWlnaHQoc3RhdGUsIGhlaWdodCl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NldEluc3BlY3RvckVuZFknLCBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnN0YXJ0WSArIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgc2V0SW5zcGVjdG9yQ2FudmFzKHN0YXRlLCBjYW52YXMpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IuY2FudmFzLmluc3RhbmNlID0gY2FudmFzO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9LFxyXG4gICAgc2V0SW5zcGVjdG9yVmlkZW9NYXJrZXIoc3RhdGUsIHZpZGVvTWFya2VyKXtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnZpZGVvTWFya2VyLmluc3RhbmNlID0gdmlkZW9NYXJrZXI7XHJcbiAgICAgICAgcmV0dXJuIHZpZGVvTWFya2VyO1xyXG4gICAgfSxcclxuICAgIHNldEluc3BlY3RvckNhbnZhc1dpZHRoKHN0YXRlLCB3aWR0aCl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICByZXR1cm4gd2lkdGg7XHJcbiAgICB9LFxyXG4gICAgc2V0SW5zcGVjdG9yQ2FudmFzSGVpZ2h0KHN0YXRlLCBoZWlnaHQpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIHNldEluc3BlY3RvclN0YWdlKHN0YXRlLCBzdGFnZSl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci5zdGFnZS5pbnN0YW5jZSA9IHN0YWdlO1xyXG4gICAgICAgIHJldHVybiBzdGFnZTtcclxuICAgIH0sXHJcbiAgICBzZXRJbnNwZWN0b3JUaW1lbGluZShzdGF0ZSwgdGltZWxpbmUpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuaW5zdGFuY2UgPSB0aW1lbGluZTtcclxuICAgICAgICByZXR1cm4gdGltZWxpbmU7XHJcbiAgICB9LFxyXG4gICAgc2V0SW5zcGVjdG9yU3RhcnRUaW1lKHN0YXRlLCBzdGFydFRpbWUpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xyXG4gICAgICAgIHJldHVybiBzdGFydFRpbWU7XHJcbiAgICB9LFxyXG4gICAgc2V0SW5zcGVjdG9yU3RhcnRZKHN0YXRlLCBzdGFydFkpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc3RhcnRZID0gc3RhcnRZO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JNaW51dGVzWScsIHN0YXJ0WSArIDUpO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTZWNvbmRzWScsIHN0YXJ0WSArIDU1KTtcclxuICAgICAgICBkaXNwYXRjaCgnc2V0SW5zcGVjdG9yQXhpc1knLCBzdGFydFkgKyA2MCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0WTtcclxuICAgIH0sXHJcbiAgICBzZXRJbnNwZWN0b3JBeGlzWShzdGF0ZSwgYXhpc1kpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuYXhpc1kgPSBheGlzWTtcclxuICAgICAgICByZXR1cm4gYXhpc1k7XHJcbiAgICB9LFxyXG4gICAgc2V0SW5zcGVjdG9yRW5kWShzdGF0ZSwgZW5kWSl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5lbmRZID0gZW5kWTtcclxuICAgICAgICByZXR1cm4gZW5kWTtcclxuICAgIH0sXHJcbiAgICBzZXRJbnNwZWN0b3JTdGFydFgoc3RhdGUsIHN0YXJ0WCl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5zdGFydFggPSBzdGFydFg7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0WDtcclxuICAgIH0sXHJcbiAgICBzZXRJbnNwZWN0b3JFbmRYKHN0YXRlLCBlbmRYKXtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLmVuZFggPSBlbmRYO1xyXG4gICAgICAgIHJldHVybiBlbmRYO1xyXG4gICAgfSxcclxuICAgIHNldEluc3BlY3Rvck1pbnV0ZXNZKHN0YXRlLCBtaW51dGVzWSl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5taW51dGVzWSA9IG1pbnV0ZXNZO1xyXG4gICAgICAgIHJldHVybiBtaW51dGVzWTtcclxuICAgIH0sXHJcbiAgICBzZXRJbnNwZWN0b3JTZWNvbmRzWShzdGF0ZSwgc2Vjb25kc1kpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5pbnNwZWN0b3IudGltZWxpbmUuc2Vjb25kc1kgPSBzZWNvbmRzWTtcclxuICAgICAgICByZXR1cm4gc2Vjb25kc1k7XHJcbiAgICB9LFxyXG4gICAgc2V0SW5zcGVjdG9yU2Vjb25kV2lkdGgoc3RhdGUsIHNlY29uZFdpZHRoKXtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuaW5zcGVjdG9yLnRpbWVsaW5lLnNlY29uZFdpZHRoID0gc2Vjb25kV2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIHNlY29uZFdpZHRoO1xyXG4gICAgfSxcclxuICAgIHNldEluc3BlY3RvckNvbFdpZHRoKHN0YXRlLCBjb2xXaWR0aCl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLmluc3BlY3Rvci50aW1lbGluZS5jb2xXaWR0aCA9IGNvbFdpZHRoO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZXRJbnNwZWN0b3JTZWNvbmRXaWR0aCcsIGNvbFdpZHRoIC8gMTApO1xyXG4gICAgICAgIHJldHVybiBjb2xXaWR0aDtcclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRBY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgIH0sXHJcbiAgICByZWNvcmRpbmdUb3VjaChzdGF0ZSwgcmVjb3JkaW5nKXtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIucmVjb3JkaW5nVG91Y2ggPSByZWNvcmRpbmc7XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZGluZztcclxuICAgIH0sXHJcbiAgICByZWNvcmRpbmdBY3Rpb24oc3RhdGUsIHJlY29yZGluZyl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnJlY29yZGluZ0FjdGlvbiA9IHJlY29yZGluZztcclxuICAgICAgICByZXR1cm4gcmVjb3JkaW5nO1xyXG4gICAgfSxcclxuICAgIGFkZEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgfSxcclxuICAgIGFkZExlZnRUYWcoc3RhdGUsIHRhZyl7XHJcbiAgICAgICAgc3RhdGUudG91Y2hNYW5hZ2VyLnNlbGVjdGVkQWN0aW9uLmxlZnRUYWdzLnB1c2godGFnKTtcclxuICAgICAgICByZXR1cm4gdGFnO1xyXG4gICAgfSxcclxuICAgIGFkZFJpZ2h0VGFnKHN0YXRlLCB0YWcpe1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZEFjdGlvbi5yaWdodFRhZ3MucHVzaCh0YWcpO1xyXG4gICAgICAgIHJldHVybiB0YWc7XHJcbiAgICB9LFxyXG4gICAgZWRpdEFjdGlvbihzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICB2YXIgaW5kZXggPSBfLmZpbmRJbmRleChzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zLCBmdW5jdGlvbiAobykge1xyXG4gICAgICAgICAgICByZXR1cm4gby5pZCA9PSBhY3Rpb24uaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2luZGV4XS5zdGFydCA9IGFjdGlvbi5zdGFydDtcclxuICAgICAgICBzdGF0ZS50b3VjaE1hbmFnZXIuc2VsZWN0ZWRUb3VjaC5hY3Rpb25zW2luZGV4XS5lbmQgPSBhY3Rpb24uZW5kO1xyXG4gICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnNbaW5kZXhdLmNvbG9yID0gYWN0aW9uLmNvbG9yO1xyXG4gICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWN0aW9uKHN0YXRlLCBhY3Rpb24pe1xyXG4gICAgICAgIHZhciBpbmRleCA9IF8uZmluZEluZGV4KHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMsIGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvLmlkID09IGFjdGlvbi5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRvdWNoTWFuYWdlci5zZWxlY3RlZFRvdWNoLmFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgIH0sXHJcbn07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL2FjdGlvbnMuanMiLCJleHBvcnQgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICBwbGF5ZXJSZWFkeTogZmFsc2UsXHJcbiAgICB0b3VjaE1hbmFnZXI6IHtcclxuICAgICAgICBpbnN0YW5jZTogbnVsbCxcclxuICAgICAgICB0b3VjaGVzOiBbXSxcclxuICAgICAgICBzZWxlY3RlZFRvdWNoOiBudWxsLFxyXG4gICAgICAgIHJlY29yZGluZ0FjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgcmVjb3JkaW5nVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgIGluc3BlY3Rvcjoge1xyXG4gICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcclxuICAgICAgICAgICAgY2FudmFzOiB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2aWRlb01hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhZ2U6IHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpbWVsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRZOiAwLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBjb2xXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGVuZFk6IDAsXHJcbiAgICAgICAgICAgICAgICBtaW51dGVzWTogMCxcclxuICAgICAgICAgICAgICAgIHNlY29uZHNZOiAwLFxyXG4gICAgICAgICAgICAgICAgYXhpc1k6IDAsXHJcbiAgICAgICAgICAgICAgICBlbmRYOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRYOiAzMCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aW1lbGluZToge1xyXG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBzdGFydFRpbWU6IDAsXHJcbiAgICAgICAgc2hvd1NlY29uZHM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dTZWNvbmRzSW50ZXJ2YWw6IGZhbHNlLFxyXG4gICAgICAgIHpvb21GYWN0b3I6IDEsXHJcbiAgICAgICAgaW5pdGlhbFpvb21GYWN0b3I6IDEsXHJcbiAgICAgICAgc2Vjb25kV2lkdGg6IDAsXHJcbiAgICAgICAgY29sV2lkdGg6IDAsXHJcbiAgICAgICAgc3RhcnRZOiAwLFxyXG4gICAgICAgIGVuZFk6IDAsXHJcbiAgICAgICAgbWludXRlc1k6IDAsXHJcbiAgICAgICAgc2Vjb25kc1k6IDAsXHJcbiAgICAgICAgYXhpc1k6IDAsXHJcbiAgICAgICAgZW5kWDogMCxcclxuICAgICAgICBzdGFydFg6IDAsXHJcbiAgICAgICAgaXNNb3VzZU92ZXI6IGZhbHNlLFxyXG4gICAgICAgIHpvb21GYWN0b3JDaGFuZ2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RhZ2U6IHtcclxuICAgICAgICBpbnN0YW5jZTogbnVsbFxyXG4gICAgfSxcclxuICAgIHBsYXllcjoge1xyXG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxyXG4gICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgIGN1cnJlbnRUaW1lOiAwXHJcbiAgICB9LFxyXG4gICAgdmlkZW9NYXJrZXI6IHtcclxuICAgICAgICBpbnN0YW5jZTogbnVsbFxyXG4gICAgfSxcclxuICAgIGNhbnZhczoge1xyXG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvc3RvcmVzL3N0b3JlLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICB1cGRhdGUoaWQsIHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnB1dCgnL2FwaS9zY291dGluZ3MvJyArIGlkICsgJy90b3VjaGVzLycsIHNjb3V0aW5nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcclxuICAgIH0sXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdUb3VjaFNlcnZpY2UuanMiLCJleHBvcnQgZGVmYXVsdHtcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzaG93RXJyb3IocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGVycm9yIGluIHJlc3BvbnNlLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yc1tlcnJvcl0uZm9yRWFjaCgodmFsaWRhdGlvbkVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvb3QuZXJyb3JUb2FzdCh2YWxpZGF0aW9uRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi4kcm9vdC5lcnJvclRvYXN0KHJlc3BvbnNlLmVycm9ycylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2FqYXgvZXJyb3JQcmVzZW50ZXIuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWdzIGEge1xcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcbi5jbG9zZSB7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbiAgb3BhY2l0eTogMC44ICFpbXBvcnRhbnQ7XFxufVxcbi50YWdzLWxpc3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRhZ3MtbGlzdCAubGFiZWwge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi50YWdzLWxpc3QgLmxhYmVsIC5jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLnRhZ3MtbGlzdCBkaXYsXFxuLmd1LW1pcnJvciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcXG59XFxuLnRhZ3MtbGlzdCBkaXYgLmxhYmVsLFxcbiAgLmd1LW1pcnJvciAubGFiZWwge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS40O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuLnRhZ3MtbGlzdCBkaXYge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi50YWdzLWxpc3QgZGl2Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmd1LW1pcnJvciB7XFxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgei1pbmRleDogOTk5OSAhaW1wb3J0YW50O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTgwKVxcXCI7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG59XFxuLmd1LW1pcnJvciAubGFiZWwgLmNsb3NlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmd1LWhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uZ3UtdW5zZWxlY3RhYmxlIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmd1LXRyYW5zaXQge1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTIwKVxcXCI7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xcbn1cXG4uZ3UtdHJhbnNpdCAuY2xvc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udGFncy1saXN0IC5leC1tb3ZlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xcbn1cXG4udGFncy1saXN0LmV4LW92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG4uaGFuZGxlIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjdiMTY3YWEhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcbi8vIG1vZHVsZSBpZCA9IDM0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pbnNwZWN0b3ItaW5mbyB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLmluc3BlY3Rvci1pbmZvIC5pbnNwZWN0b3ItaW5mby0tdGl0bGUge1xcbiAgICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmF0aGxldGUtbWVudSAuZHJvcGRvd24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbi5hdGhsZXRlLW1lbnUgLmF0aGxldGUtbWVudS10aXRsZSB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5hdGhsZXRlLW1lbnUgLmF0aGxldGUtbWVudS1sZWZ0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UwZTk7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4uYXRobGV0ZS1tZW51IC5hdGhsZXRlLW1lbnUtcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZTBlOTtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTE5OWU2OTYhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAzNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwidGltZWxpbmUudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTEwMzkxZWYzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy90aW1lbGluZS52dWVcbi8vIG1vZHVsZSBpZCA9IDM1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJuZXdUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFjMmVjODljIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlP2JiOTk5YmFlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2U0E7SUFDQSx1QkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJuZXdUb3VjaEZvcm0udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiB2LW9uOnN1Ym1pdC5wcmV2ZW50PVxcXCJvblN1Ym1pdFxcXCIgY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbCBmb3JtLXRvdWNoXFxcIiB2LWlmPVxcXCJvcGVuXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2gudGV4dCcpIH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy10aXRsZVxcXCIgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctdGl0bGVcXFwiIG5hbWU9XFxcIm5ldy10aXRsZVxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbD1cXFwidG91Y2gudGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcnVsZXM9XFxcInJlcXVpcmVkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cXFwiVGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2gudGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVxcXCJlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2gudGV4dCcpIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctdGl0bGVcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sb3JcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wYWN0LXBpY2tlciB2LW1vZGVsPVxcXCJ0b3VjaC5jb2xvclxcXCIgQGNoYW5nZS1jb2xvcj1cXFwib25DaGFuZ2VDb2xvclxcXCI+PC9jb21wYWN0LXBpY2tlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA6Y2xhc3M9XFxcInsnaGFzLWVycm9yJzogZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKSB9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctc3RhcnRcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgKHNlYylcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctc3RhcnRcXFwiIG5hbWU9XFxcIm5ldy1zdGFydFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsPVxcXCJ0b3VjaC5zdGFydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cXFwiU3RhcnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2guc3RhcnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctc3RhcnQtZm10XFxcIiBuYW1lPVxcXCJuZXctc3RhcnQtZm10XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3RhcnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInN0YXJ0Rm10XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2guc3RhcnQnKSB9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgOmNsYXNzPVxcXCJ7J2hhcy1lcnJvcic6IGVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpIH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1lbmRcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kKHNlYylcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctZW5kXFxcIiBuYW1lPVxcXCJuZXctZW5kXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXZhbGlkYXRlLmluaXRpYWw9XFxcInRvdWNoLmVuZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ydWxlcz1cXFwicmVxdWlyZWR8bnVtZXJpY1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hcz1cXFwiRW5kXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW5kXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5lbmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctZW5kLWZtdFxcXCIgbmFtZT1cXFwibmV3LWVuZC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZW5kRm10XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcImVycm9ycy5oYXMoJ3RvdWNoLmVuZCcpXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoLmVuZCcpIH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwiY29sbGlkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj7DlzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND48aSBjbGFzcz1cXFwiaWNvbiBmYSBmYS1iYW5cXFwiPjwvaT4gVG91Y2hlcyBjYW50IG92ZXJsYXAhPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgdG91Y2ggdGhhdCB5b3Ugd2FudCB0byBhZGQgb3ZlcmxhcCB3aXRoOlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJ0b3VjaCBpbiBjb2xsaWRlVG91Y2hlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XFxcInRvdWNoLnByZXZpb3VzLmhhc093blByb3BlcnR5KCdpZCcpXFxcIj57e3RvdWNoLnByZXZpb3VzLnRleHR9fTogdGhhdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0c1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uIHt7dG9ISE1NU1ModG91Y2gucHJldmlvdXMuc3RhcnQpfX0gYW5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0b0hITU1TUyh0b3VjaC5wcmV2aW91cy5lbmQpfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi1pZj1cXFwidG91Y2guY3VycmVudC5oYXNPd25Qcm9wZXJ0eSgnaWQnKVxcXCI+e3t0b3VjaC5jdXJyZW50LnRleHR9fTogdGhhdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0cyBvblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dG9ISE1NU1ModG91Y2guY3VycmVudC5zdGFydCl9fSBhblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3RvSEhNTVNTKHRvdWNoLmN1cnJlbnQuZW5kKX19PC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHYtaWY9XFxcImVuZEludmFsaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcImFsZXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+w5c8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XFxcImljb24gZmEgZmEtYmFuXFxcIj48L2k+IFZhbGlkYXRpb24gRXJyb3IhPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZW5kIG9mIHRoZSB0b3VjaCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgc3RhcnRcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgdGV4dC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+QWRkIFRvdWNoPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgdi1vbjpjbGljay5wcmV2ZW50PVxcXCJjbG9zZVxcXCI+Q2FuY2VsPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzdHlsZT5cXHJcXG5cXHJcXG48L3N0eWxlPlxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7Z2V0U3RhdGV9IGZyb20gJ21vY2tzdGF0ZSc7XFxyXFxuICAgIGltcG9ydCB7Q29tcGFjdH0gZnJvbSAndnVlLWNvbG9yJztcXHJcXG4gICAgaW1wb3J0IFRpbWVDb252ZXJ0ZXIgZnJvbSAnLi4vc2tldGNoL2NvbXBvbmVudHMvdXRpbHMvVGltZUNvbnZlcnRlcidcXHJcXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIG9wZW46IHt9LFxcclxcbiAgICAgICAgICAgIGluaXRUb3VjaDoge1xcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJoc2xcXFwiOiB7XFxcImhcXFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcXFwic1xcXCI6IDEsIFxcXCJsXFxcIjogMC40MzcyNTQ5MDE5NjA3ODQzLCBcXFwiYVxcXCI6IDF9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiaGV4XFxcIjogXFxcIiNEQkRGMDBcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwicmdiYVxcXCI6IHtcXFwiclxcXCI6IDIxOSwgXFxcImdcXFwiOiAyMjMsIFxcXCJiXFxcIjogMCwgXFxcImFcXFwiOiAxLCBcXFwiYWxwaGFcXFwiOiA1MH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJoc3ZcXFwiOiB7XFxcImhcXFwiOiA2MS4wNzYyMzMxODM4NTY1LCBcXFwic1xcXCI6IDEsIFxcXCJ2XFxcIjogMC44NzQ1MDk4MDM5MjE1Njg2LCBcXFwiYVxcXCI6IDF9LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZHVyYXRpb246IHt9LFxcclxcbiAgICAgICAgICAgIHN0YXJ0OiB7fSxcXHJcXG4gICAgICAgICAgICBlbmQ6IHt9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICBvcGVuKHZhbCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBzdGFydCh2YWwpe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoLnN0YXJ0ID0gdmFsO1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgZW5kKHZhbCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guZW5kID0gdmFsXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAndG91Y2guc3RhcnQnOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKClcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICd0b3VjaC5lbmQnOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaWRlKCk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9ICEhKHBhcnNlSW50KHRoaXMudG91Y2guc3RhcnQpID49IHBhcnNlSW50KHRoaXMudG91Y2guZW5kKSB8fCBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgPiBwYXJzZUludCh0aGlzLmR1cmF0aW9uKSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGEoKXtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IFtdLFxcclxcbiAgICAgICAgICAgICAgICBlbmRJbnZhbGlkOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IDUxLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIHN0YXJ0Rm10KCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guc3RhcnQpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBlbmRGbXQoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5lbmQpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB2YWxpZGF0aW9uRW5kKCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSArIDE7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgICAgICAnY29tcGFjdC1waWNrZXInOiBDb21wYWN0LFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBjbG9zZSgpe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwtbmV3LXRvdWNoJyk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB0b0hITU1TUyhzZWNzKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guY29sb3IgPSB2YWxcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGNoZWNrQ29sbGlkZSgpe1xcclxcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hzID0gZ2V0U3RhdGUoJ3RvdWNoTWFuYWdlcicpLnRvdWNoZXMuc2xpY2UoMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRvdWNocy5wdXNoKHRoaXMudG91Y2gpO1xcclxcbiAgICAgICAgICAgICAgICB2YXIgb3ZlcmxhcCA9IHRoaXMub3ZlcmxhcCh0b3VjaHMpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBvdmVybGFwLm92ZXJsYXA7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZVRvdWNoZXMgPSBvdmVybGFwLnJhbmdlcztcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG92ZXJsYXAodG91Y2hzKXtcXHJcXG4gICAgICAgICAgICAgICAgdmFyIHNvcnRlZFJhbmdlcyA9IHRvdWNocy5zb3J0KChwcmV2aW91cywgY3VycmVudCkgPT4ge1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVGltZSA9IHBhcnNlSW50KHByZXZpb3VzLnN0YXJ0KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIGlzIGVhcmxpZXIgdGhhbiB0aGUgY3VycmVudFxcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA8IGN1cnJlbnRUaW1lKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByZXZpb3VzIHRpbWUgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdGltZVxcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVGltZSA9PT0gY3VycmVudFRpbWUpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcmV2aW91cyB0aW1lIGlzIGxhdGVyIHRoYW4gdGhlIGN1cnJlbnQgdGltZVxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIGZpbmFsIHJlc3VsdHNcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRlZFJhbmdlcy5yZWR1Y2UoKHJlc3VsdCwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgcHJldmlvdXMgcmFuZ2VcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IDApIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzID0gYXJyW2lkeCAtIDFdO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGFueSBvdmVybGFwXFxyXFxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNFbmQgPSBwYXJzZUludChwcmV2aW91cy5lbmQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGFydCA9IHBhcnNlSW50KGN1cnJlbnQuc3RhcnQpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSAocHJldmlvdXNFbmQgPj0gY3VycmVudFN0YXJ0KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSByZXN1bHRcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGFwKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8geWVzLCB0aGVyZSBpcyBvdmVybGFwXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSB0cnVlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBzcGVjaWZpYyByYW5nZXMgdGhhdCBvdmVybGFwXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJhbmdlcy5wdXNoKHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyBzZWVkIHRoZSByZWR1Y2VcXHJcXG4gICAgICAgICAgICAgICAgfSwge292ZXJsYXA6IGZhbHNlLCByYW5nZXM6IFtdfSk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBvblN1Ym1pdCgpe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiR2YWxpZGF0b3IudmFsaWRhdGVBbGwoKTtcXHJcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmFueSgpKSB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSAhIShwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCkgfHwgcGFyc2VJbnQodGhpcy50b3VjaC5lbmQpID4gcGFyc2VJbnQoTWF0aC5mbG9vcih0aGlzLiRwYXJlbnQuJHJlZnMucGxheWVyLmFwaSgpLmR1cmF0aW9uKCkpKSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW5kSW52YWxpZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGQtbmV3LXRvdWNoJywgdGhpcy50b3VjaCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAudnVlLWNvbG9yX19jb21wYWN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWMyZWM4OWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY29sb3I6ICM3MTcxNzE7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMTgwLCAxODAsIDE4MCwgMC4xKTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1hcmdpbjogMCAzcHggNnB4IDA7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhZ3MgLnRhZzpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzA4QztcXG59XFxuLnRhZ3MgLnRhZy5wcmltYXJ5IHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjhCQ0E7XFxuICAgIGJvcmRlci1jb2xvcjogIzM1N0VCRFxcbn1cXG4udGFncyAudGFnLnN1Y2Nlc3Mge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcXG4gICAgYm9yZGVyLWNvbG9yOiAjNENBRTRDXFxufVxcbi50YWdzIC50YWcuaW5mbyB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFO1xcbiAgICBib3JkZXItY29sb3I6ICM0NkI4REFcXG59XFxuLnRhZ3MgLnRhZy53YXJuaW5nIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEFENEU7XFxuICAgIGJvcmRlci1jb2xvcjogI0VFQTIzNlxcbn1cXG4udGFncyAudGFnLmRhbmdlciB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xcbiAgICBib3JkZXItY29sb3I6ICNENDNGM0FcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlPzFhMjBiYWMyXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFPQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBRUEsaURBQUE7SUFDQSx3Q0FBQTtJQUlBLGdDQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtDQUNBO0FBRUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSxxQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJ0YWcudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHRhZy1kcm9wZG93biB2LWlmPVxcXCJ0YWcuZHJvcGRvd25cXFwiIHYtb246b3B0aW9uLWNsaWNrZWQ9XFxcImRyb3Bkb3duT3B0aW9uQ2xpY2tlZFxcXCIgOnRhZz1cXFwidGFnXFxcIj48L3RhZy1kcm9wZG93bj5cXHJcXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XFxcInRhZy1kcm9wZG93blxcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiIGJ0biB0YWdcXFwiIHYtb246Y2xpY2sucHJldmVudD1cXFwidGFnQ2xpY2tlZFxcXCIgOmNsYXNzPVxcXCInYmctJyt0YWcuY29sb3JcXFwiPnt7dGFnLm5hbWV9fTwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC50YWcge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgY29sb3I6ICM3MTcxNzE7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcclxcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMSk7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDNweCA2cHggMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YWdzIC50YWc6aG92ZXIge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDhDO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YWdzIC50YWcucHJpbWFyeSB7XFxyXFxuICAgICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjhCQ0E7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6ICMzNTdFQkRcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFncyAudGFnLnN1Y2Nlc3Mge1xcclxcbiAgICAgICAgY29sb3I6ICNGRkY7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCODVDO1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNENBRTRDXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhZ3MgLnRhZy5pbmZvIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERTtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQ2QjhEQVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YWdzIC50YWcud2FybmluZyB7XFxyXFxuICAgICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEFENEU7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6ICNFRUEyMzZcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFncyAudGFnLmRhbmdlciB7XFxyXFxuICAgICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOTUzNEY7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6ICNENDNGM0FcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IHRhZ0Ryb3Bkb3duIGZyb20gJy4vdGFnRHJvcGRvd24udnVlJ1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgdGFnOiB7fVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgICAgICB0YWdEcm9wZG93blxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbkNsaWNrZWQodGFnKXtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IHRhZ0Ryb3Bkb3duID0gXy5jbG9uZURlZXAodGFnKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGFnLWNsaWNrZWQnLCB0YWdEcm9wZG93bilcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIHRhZ0NsaWNrZWQoKXtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IHRhZyA9IF8uY2xvbmVEZWVwKHRoaXMudGFnKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGFnLWNsaWNrZWQnLCB0YWcpXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYjE4NjZjZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZy52dWVcbi8vIG1vZHVsZSBpZCA9IDM1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWctZHJvcGRvd24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWU/NmMzYjlhNjVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWNBO0lBQ0EsaUNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidGFnRHJvcGRvd24udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24gdGFnLWRyb3Bkb3duXFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi10b2dnbGUgYnRuIHRhZ1xcXCIgOmNsYXNzPVxcXCInYmctJyt0YWcuY29sb3JcXFwiXFxyXFxuICAgICAgICAgICBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiA6aWQ9XFxcImlkXFxcIj57e3RhZy5uYW1lfX1cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2FyZXQtZG93blxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiA6YXJpYS1sYWJlbGxlZGJ5PVxcXCJpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJvcHQgaW4gdGFnLm9wdGlvbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcImNsaWNrT3B0KG9wdClcXFwiPnt7b3B0Lm5hbWV9fTwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC50YWctZHJvcGRvd24ge1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB1dWlkIGZyb20gJ2Jhc2UvbWl4aW5zL3V1aWQnXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcclxcbiAgICAgICAgcHJvcHM6IHtcXHJcXG4gICAgICAgICAgICB0YWc6IHt9LFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGEoKXtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBpZDogJydcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWl4aW5zOiBbdXVpZF0sXFxyXFxuICAgICAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuZ2VuZXJhdGVVVUlEKCk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGNsaWNrT3B0KG9wdCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudGFnLm9wdGlvbiA9IG9wdDtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3B0aW9uLWNsaWNrZWQnLCB0aGlzLnRhZylcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNjYjY2MzRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAzNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiZWRpdFRvdWNoRm9ybS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODU5MmVhMGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52dWUtY29sb3JfX2NvbXBhY3Qge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9lZGl0VG91Y2hGb3JtLnZ1ZT8zOWVmOWNlMFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcVFBO0lBQ0EsdUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZWRpdFRvdWNoRm9ybS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIHYtb246c3VibWl0LnByZXZlbnQ9XFxcIm9uU3VibWl0XFxcIiBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsIGZvcm0tdG91Y2hcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaHRleHQnKSB9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctdGl0bGVcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRpdGxlJyl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctdGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0b3VjaHRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVxcXCJyZXF1aXJlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XFxcIlRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJUaXRsZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInRvdWNoLnRleHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2h0ZXh0JylcXFwiPnt7IGVycm9ycy5maXJzdCgndG91Y2h0ZXh0JykgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJuZXctdGl0bGVcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmNvbG9yJyl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBhY3QtcGlja2VyIHYtbW9kZWw9XFxcInRvdWNoLmNvbG9yXFxcIiBAY2hhbmdlLWNvbG9yPVxcXCJvbkNoYW5nZUNvbG9yXFxcIj48L2NvbXBhY3QtcGlja2VyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaHN0YXJ0JykgfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwibmV3LXN0YXJ0XFxcIiBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy5zdGFydCcpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctc3RhcnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcInRvdWNoc3RhcnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdmFsaWRhdGUuaW5pdGlhbFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LXJ1bGVzPVxcXCJyZXF1aXJlZHxudW1lcmljXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVxcXCJTdGFydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN0YXJ0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJ0b3VjaC5zdGFydFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5ldy1zdGFydC1mbXRcXFwiIG5hbWU9XFxcIm5ldy1zdGFydC1mbXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJTdGFydFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwic3RhcnRGbXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwiZXJyb3JzLmhhcygndG91Y2hzdGFydCcpXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoc3RhcnQnKSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIDpjbGFzcz1cXFwieydoYXMtZXJyb3InOiBlcnJvcnMuaGFzKCd0b3VjaGVuZCcpIH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5ldy1lbmRcXFwiIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLmVuZCcpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJuZXctZW5kXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0b3VjaGVuZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi12YWxpZGF0ZS5pbml0aWFsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtcnVsZXM9XFxcInJlcXVpcmVkfG51bWVyaWNcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdnYtYXM9XFxcIkVuZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVuZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwidG91Y2guZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwibmV3LWVuZC1mbXRcXFwiIG5hbWU9XFxcIm5ldy1lbmQtZm10XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3RhcnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImVuZEZtdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVxcXCJlcnJvcnMuaGFzKCd0b3VjaGVuZCcpXFxcIj57eyBlcnJvcnMuZmlyc3QoJ3RvdWNoZW5kJykgfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgdi1pZj1cXFwiY29sbGlkZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwiYWxlcnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj7DlzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImljb24gZmEgZmEtYmFuXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaGVzX2NhbnRfb3ZlcmxhcCcpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX3dpdGgnKX19OlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJjb2xsaWRlVG91Y2ggaW4gY29sbGlkZVRvdWNoZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVxcXCJjb2xsaWRlVG91Y2gucHJldmlvdXMuaWQgIT0gdG91Y2guaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy50b3VjaF9vdmVybGFwX21zZycseyB0aXRsZTpcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaWRlVG91Y2gucHJldmlvdXMudGV4dCxzdGFydDp0b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuc3RhcnQpLGVuZDpcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuZW5kKX0pfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LWlmPVxcXCJjb2xsaWRlVG91Y2guY3VycmVudC5pZCAhPSB0b3VjaC5pZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJyx7IHRpdGxlOlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpZGVUb3VjaC5jdXJyZW50LnRleHQsc3RhcnQ6dG9ISE1NU1MoY29sbGlkZVRvdWNoLmN1cnJlbnQuc3RhcnQpLGVuZDpcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0hITU1TUyhjb2xsaWRlVG91Y2guY3VycmVudC5lbmQpfSl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHYtaWY9XFxcImVuZEludmFsaWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcImFsZXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+w5c8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpY29uIGZhIGZhLWJhblxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdzY291dGluZ3MudmFsaWRhdGlvbl9lcnJvcicpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2VuZF9ncmVhdGVyJyl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiB0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj57eyR0KCdzY291dGluZ3Muc2F2ZScpfX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiB2LW9uOmNsaWNrLnByZXZlbnQ9XFxcImNsb3NlXFxcIj57eyR0KCdzY291dGluZ3MuY2FuY2VsJyl9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c3R5bGU+XFxyXFxuXFxyXFxuPC9zdHlsZT5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQge2dldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xcclxcbiAgICBpbXBvcnQge0NvbXBhY3R9IGZyb20gJ3Z1ZS1jb2xvcic7XFxyXFxuICAgIGltcG9ydCBUaW1lQ29udmVydGVyIGZyb20gJy4uL3NrZXRjaC9jb21wb25lbnRzL3V0aWxzL1RpbWVDb252ZXJ0ZXInXFxyXFxuICAgIGltcG9ydCBjb2xsaWRlTWl4aW4gZnJvbSAnYmFzZS9taXhpbnMvY29sbGlkZSdcXHJcXG4gICAgaW1wb3J0IHNjb3V0aW5nc0xvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL3Njb3V0aW5ncy9zY291dGluZ3MuanMnO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIGxvY2FsZXM6IHNjb3V0aW5nc0xvY2FsZXMsXFxyXFxuICAgICAgICBwcm9wczoge1xcclxcbiAgICAgICAgICAgIGluaXRUb3VjaDoge1xcclxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogMTAwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IDI1LFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiA1MSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGE6IDFcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7fSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtaXhpbnM6IFtjb2xsaWRlTWl4aW5dLFxcclxcbiAgICAgICAgY3JlYXRlZCgpe1xcclxcbiAgICAgICAgICAgIHRoaXMudG91Y2ggPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaXRUb3VjaCk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgd2F0Y2g6IHtcXHJcXG4gICAgICAgICAgICAndG91Y2guc3RhcnQnOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHZhciBjb2xsaWRlUmVzdWx0ID0gdGhpcy5jaGVja0NvbGxpZGUodGhpcy50b3VjaCk7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZSA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlVG91Y2hlcyA9IGNvbGxpZGVSZXN1bHQuY29sbGlkZVRvdWNoZXM7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAndG91Y2guZW5kJzogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlkZVJlc3VsdCA9IHRoaXMuY2hlY2tDb2xsaWRlKHRoaXMudG91Y2gpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGUgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGU7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZVRvdWNoZXMgPSBjb2xsaWRlUmVzdWx0LmNvbGxpZGVUb3VjaGVzO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEludmFsaWQgPSBwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSA+PSBwYXJzZUludCh0aGlzLnRvdWNoLmVuZCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGEoKXtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBjb2xsaWRlOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAgICAgY29sbGlkZVRvdWNoZXM6IFtdLFxcclxcbiAgICAgICAgICAgICAgICBlbmRJbnZhbGlkOiBmYWxzZSxcXHJcXG4gICAgICAgICAgICAgICAgdG91Y2g6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiAyNSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogNzcsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IDUxLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhOiAxXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIHN0YXJ0Rm10KCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHRoaXMudG91Y2guc3RhcnQpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBlbmRGbXQoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRpbWVDb252ZXJ0ZXIudG9ISE1NU1ModGhpcy50b3VjaC5lbmQpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB2YWxpZGF0aW9uRW5kKCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvdWNoLnN0YXJ0KSArIDE7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgICAgICAnY29tcGFjdC1waWNrZXInOiBDb21wYWN0LFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBjbG9zZSgpe1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjYW5jZWwtbmV3LXRvdWNoJywgdGhpcy50b3VjaCk7XFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICB0b0hITU1TUyhzZWNzKSB7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiBUaW1lQ29udmVydGVyLnRvSEhNTVNTKHNlY3MpXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBvbkNoYW5nZUNvbG9yKHZhbCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMudG91Y2guY29sb3IgPSB2YWxcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG9uU3VibWl0KCl7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMuJHZhbGlkYXRvci52YWxpZGF0ZUFsbCgpLnRoZW4oKCk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3VjaC5zdGFydCA+PSB0aGlzLnRvdWNoLmVuZCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW52YWxpZCA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb2xsaWRlKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZC1uZXctdG91Y2gnLCB0aGlzLnRvdWNoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGJhZyA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LmVycm9yVG9hc3QodGhpcy4kdCgnYWRtaW4udmFsaWRhdGlvbl9lcnJvcicpKTtcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAudnVlLWNvbG9yX19jb21wYWN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODU5MmVhMGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJ0b3VjaGVzTGlzdC52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtOTY0MDg3NWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvbGlzdHMvdG91Y2hlc0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAzNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jdmlkZW8tY2FudmFzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlPzU2MTJiNjcyXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFXQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxPQUFBO0lBQ0Esb0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwicGxheWVyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8dmlkZW8gcmVmPVxcXCJwbGF5ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgY2xhc3M9XFxcInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW5cXFwiXFxyXFxuICAgICAgICAgICAgICAgY29udHJvbHMgcHJlbG9hZD1cXFwiYXV0b1xcXCJcXHJcXG4gICAgICAgICAgICAgICA6cG9zdGVyPVxcXCJwb3N0ZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgOmRhdGEtc2V0dXA9XFxcInN0clNvdXJjZVxcXCJcXHJcXG4gICAgICAgID48L3ZpZGVvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzdHlsZT5cXHJcXG4gICAgI3ZpZGVvLWNhbnZhcyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCB7ZGlzcGF0Y2gsIGdldFN0YXRlfSBmcm9tICdtb2Nrc3RhdGUnO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIGRhdGEoKXtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IHt9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHByb3BzOiB7XFxyXFxuICAgICAgICAgICAgc291cmNlOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgcG9zdGVyOiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgb2Zmc2V0OiB7XFxyXFxuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXHJcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogZmFsc2UsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBmYWxzZVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgICAgICBzdHJTb3VyY2UoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuc291cmNlKVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICAgICAgdGhpcy5pbml0UGxheWVyKHRoaXMuc291cmNlKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgYXBpKCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllclxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgaW5pdFBsYXllcihzb3VyY2Upe1xcclxcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYuc291cmNlKTtcXHJcXG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpZyA9IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2Uuc291cmNlc1swXSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRlY2hPcmRlcjogWyd5b3V0dWJlJ10sXFxyXFxuICAgICAgICAgICAgICAgICAgICBwbGF5YmFja1JhdGVzOiBbMC4yNSwgMC41LCAxLCAxLjUsIDJdLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVQcm9ncmVzczoge30sXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYWJMb29wUGx1Z2luOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29wSWZCZWZvcmVTdGFydDogZmFsc2UsIC8vYWxsb3cgdmlkZW8gdG8gcGxheSBub3JtYWxseSBiZWZvcmUgdGhlIGxvb3Agc2VjdGlvbj8gZGVmYXVsdHMgdG8gdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29vcElmQWZ0ZXJFbmQ6IHRydWUsIC8vIGRlZmF1bHRzIHRvIHRydWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VBZnRlckxvb3Bpbmc6IGZhbHNlLCAgICAgICAvL2lmIHRydWUsIGFmdGVyIGxvb3BpbmcgdmlkZW8gd2lsbCBwYXVzZS4gRGVmYXVsdHMgdG8gZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VCZWZvcmVMb29waW5nOiBmYWxzZSwgICAgICAvL2lmIHRydWUsIGJlZm9yZSBsb29waW5nIHZpZGVvIHdpbGwgcGF1c2UuIERlZmF1bHRzIHRvIGZhbHNlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnM6IGZhbHNlLCAgLy9kZWZhdWx0cyB0byB0cnVlXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9O1xcclxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQuc3RhcnQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5wbHVnaW5zLmRuY29mZnNldCA9IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydE9mZnNldDogdGhpcy5vZmZzZXQuc3RhcnQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT2Zmc2V0OiB0aGlzLm9mZnNldC5lbmRcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllciA9IHZpZGVvanModGhpcy4kcmVmcy5wbGF5ZXIsIGNvbmZpZyk7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRQbGF5ZXInLCB0aGlzLnBsYXllcik7XFxyXFxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiBkdXJhdGlvblNldHRlcihldmVudCkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoJyonKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RhdGUucGxheWVyLmR1cmF0aW9uKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldER1cmF0aW9uJywgc3RhdGUucGxheWVyLmluc3RhbmNlLmR1cmF0aW9uKCkpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdzZXRab29tJywgMSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnBsYXllci5kdXJhdGlvbikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCgncGxheWVyUmVhZHknLCB0cnVlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3BsYXllclJlYWR5JywgdHJ1ZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxheWVyLmluc3RhbmNlLm9mZigndGltZXVwZGF0ZScsIGR1cmF0aW9uU2V0dGVyKVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlKDEpO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZScsICgpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goJ3NldEN1cnJlbnRUaW1lJywgdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSk7XFxyXFxuICAgICAgICAgICAgICAgIH0pO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZmI3OTJiNjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZ2xvYmFsL3ZpZGVvL3BsYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IDM3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtZmI3OTJiNjYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BsYXllci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BsYXllci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1mYjc5MmI2NiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcZ2xvYmFsXFxcXHZpZGVvXFxcXHBsYXllci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwbGF5ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWZiNzkyYjY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZmI3OTJiNjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtYTE5OWU2OTYhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luc3BlY3Rvci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hMTk5ZTY5NiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGRhc2hib2FyZFxcXFxtb2R1bGVzXFxcXHNjb3V0aW5nXFxcXHRvdWNoZXNcXFxcY2FudmFzXFxcXGluc3BlY3Rvci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpbnNwZWN0b3IudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWExOTllNjk2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTE5OWU2OTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAzODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTEwMzkxZWYzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90aW1lbGluZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTEwMzkxZWYzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxkYXNoYm9hcmRcXFxcbW9kdWxlc1xcXFxzY291dGluZ1xcXFx0b3VjaGVzXFxcXGNhbnZhc1xcXFx0aW1lbGluZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0aW1lbGluZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTAzOTFlZjNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xMDM5MWVmM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi04NTkyZWEwYyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIilcbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTg1OTJlYTBjIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi04NTkyZWEwYyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxkYXNoYm9hcmRcXFxcbW9kdWxlc1xcXFxzY291dGluZ1xcXFx0b3VjaGVzXFxcXGZvcm1zXFxcXGVkaXRUb3VjaEZvcm0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZWRpdFRvdWNoRm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtODU5MmVhMGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04NTkyZWEwY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMWMyZWM4OWMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIilcbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFjMmVjODljIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9uZXdUb3VjaEZvcm0udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWMyZWM4OWMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxkYXNoYm9hcmRcXFxcbW9kdWxlc1xcXFxzY291dGluZ1xcXFx0b3VjaGVzXFxcXGZvcm1zXFxcXG5ld1RvdWNoRm9ybS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBuZXdUb3VjaEZvcm0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFjMmVjODljXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWMyZWM4OWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL25ld1RvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDM4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtOTY0MDg3NWMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RvdWNoZXNMaXN0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtOTY0MDg3NWMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGRhc2hib2FyZFxcXFxtb2R1bGVzXFxcXHNjb3V0aW5nXFxcXHRvdWNoZXNcXFxcbGlzdHNcXFxcdG91Y2hlc0xpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdG91Y2hlc0xpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTk2NDA4NzVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOTY0MDg3NWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2xpc3RzL3RvdWNoZXNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yYjE4NjZjZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFnLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJiMTg2NmNlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RhZy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcZGFzaGJvYXJkXFxcXG1vZHVsZXNcXFxcc2NvdXRpbmdcXFxcdG91Y2hlc1xcXFx0YWdzXFxcXHRhZy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJiMTg2NmNlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmIxODY2Y2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zY2I2NjM0YSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90YWdEcm9wZG93bi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zY2I2NjM0YSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWdEcm9wZG93bi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcZGFzaGJvYXJkXFxcXG1vZHVsZXNcXFxcc2NvdXRpbmdcXFxcdG91Y2hlc1xcXFx0YWdzXFxcXHRhZ0Ryb3Bkb3duLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHRhZ0Ryb3Bkb3duLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zY2I2NjM0YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNjYjY2MzRhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTY3YjE2N2FhIXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdzLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGFncy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02N2IxNjdhYSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWdzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxkYXNoYm9hcmRcXFxcbW9kdWxlc1xcXFxzY291dGluZ1xcXFx0b3VjaGVzXFxcXHRhZ3NcXFxcdGFncy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0YWdzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02N2IxNjdhYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY3YjE2N2FhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAzOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1zb2xpZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidGltZWxpbmVCb3hcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHQgYm94LXRvb2xzXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICBcInRpdGxlXCI6IFwiWm9vbSBJblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS56b29tSW4oJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNlYXJjaC1wbHVzXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlpvb20gT3V0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnpvb21PdXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNlYXJjaC1taW51c1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiaWRcIjogXCJ0aW1lbGluZVRvb2dsZXJcIixcbiAgICAgIFwiZGF0YS13aWRnZXRcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgIFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiOiBcIkNvbGxhcHNlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVPcGVuXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbWludXNcIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNhbGVuZGFyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudGltZWxpbmUnKSkgKyBcIlxcbiAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ0aW1lbGluZVwiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTAzOTFlZjNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTEwMzkxZWYzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgWyhfdm0ub3BlbikgPyBfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWwgZm9ybS10b3VjaFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ub25TdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2gudGV4dCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctdGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2gudGV4dCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnRleHRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2gudGV4dCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnRleHRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXRpdGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctdGl0bGVcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtYXNcIjogXCJUaXRsZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlRpdGxlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2gudGV4dClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC50ZXh0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaC50ZXh0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaC50ZXh0JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndG91Y2gudGV4dCcpKSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctdGl0bGVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbG9yXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2NvbXBhY3QtcGlja2VyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmNvbG9yKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guY29sb3JcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udG91Y2guY29sb3IpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2UtY29sb3JcIjogX3ZtLm9uQ2hhbmdlQ29sb3IsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG91Y2guY29sb3IgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXN0YXJ0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFydCAoc2VjKVxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGUuaW5pdGlhbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guc3RhcnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5zdGFydFwiLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIFwiaW5pdGlhbFwiOiB0cnVlXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5zdGFydCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnN0YXJ0XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1zdGFydFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LXN0YXJ0XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtcnVsZXNcIjogXCJyZXF1aXJlZHxudW1lcmljXCIsXG4gICAgICBcImRhdGEtYXNcIjogXCJTdGFydFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2guc3RhcnQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2guc3RhcnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5zdGFydEZtdCksXG4gICAgICBleHByZXNzaW9uOiBcInN0YXJ0Rm10XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1zdGFydC1mbXRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5ldy1zdGFydC1mbXRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTdGFydFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnN0YXJ0Rm10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnN0YXJ0Rm10ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygndG91Y2guc3RhcnQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RvdWNoLnN0YXJ0JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndG91Y2guc3RhcnQnKSkpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2guZW5kJylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy1lbmRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuZChzZWMpXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZS5pbml0aWFsXCIsXG4gICAgICB2YWx1ZTogKF92bS50b3VjaC5lbmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5lbmRcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guZW5kKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guZW5kXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5ldy1lbmRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS1ydWxlc1wiOiBcInJlcXVpcmVkfG51bWVyaWNcIixcbiAgICAgIFwiZGF0YS1hc1wiOiBcIkVuZFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkVuZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfdm0uX3MoX3ZtLnRvdWNoLmVuZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC5lbmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5lbmRGbXQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlbmRGbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LWVuZC1mbXRcIixcbiAgICAgIFwibmFtZVwiOiBcIm5ldy1lbmQtZm10XCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS5lbmRGbXQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZW5kRm10ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uZXJyb3JzLmhhcygndG91Y2guZW5kJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaC5lbmQnKVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmZpcnN0KCd0b3VjaC5lbmQnKSkpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jb2xsaWRlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRhdGEtZGlzbWlzc1wiOiBcImFsZXJ0XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiw5dcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFRoZSB0b3VjaCB0aGF0IHlvdSB3YW50IHRvIGFkZCBvdmVybGFwIHdpdGg6XFxuICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCd1bCcsIF92bS5fbCgoX3ZtLmNvbGxpZGVUb3VjaGVzKSwgZnVuY3Rpb24odG91Y2gpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgWyh0b3VjaC5wcmV2aW91cy5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkgPyBfYygnc3Ryb25nJywgW192bS5fdihfdm0uX3ModG91Y2gucHJldmlvdXMudGV4dCkgKyBcIjogdGhhdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiBcIiArIF92bS5fcyhfdm0udG9ISE1NU1ModG91Y2gucHJldmlvdXMuc3RhcnQpKSArIFwiIGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRzIG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udG9ISE1NU1ModG91Y2gucHJldmlvdXMuZW5kKSkpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKHRvdWNoLmN1cnJlbnQuaGFzT3duUHJvcGVydHkoJ2lkJykpID8gX2MoJ3N0cm9uZycsIFtfdm0uX3YoX3ZtLl9zKHRvdWNoLmN1cnJlbnQudGV4dCkgKyBcIjogdGhhdFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRzIG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udG9ISE1NU1ModG91Y2guY3VycmVudC5zdGFydCkpICsgXCIgYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHMgb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50b0hITU1TUyh0b3VjaC5jdXJyZW50LmVuZCkpKV0pIDogX3ZtLl9lKCldKVxuICB9KSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5lbmRJbnZhbGlkKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW192bS5fbSgxKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIHRleHQtcmlnaHRcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBZGQgVG91Y2hcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDYW5jZWxcIildKV0pXSldKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnaDQnLCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBmYSBmYS1iYW5cIlxuICB9KSwgX3ZtLl92KFwiIFRvdWNoZXMgY2FudCBvdmVybGFwIVwiKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBmYSBmYS1iYW5cIlxuICB9KSwgX3ZtLl92KFwiIFZhbGlkYXRpb24gRXJyb3IhXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgVGhlIGVuZCBvZiB0aGUgdG91Y2ggbXVzdCBiZSBncmVhdGVyIHRoYW4gdGhlIHN0YXJ0XFxuICAgICAgICAgICAgICAgIFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xYzJlYzg5Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMWMyZWM4OWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9mb3Jtcy9uZXdUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA0MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIChfdm0udGFnLmRyb3Bkb3duKSA/IF9jKCd0YWctZHJvcGRvd24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnXCI6IF92bS50YWdcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm9wdGlvbi1jbGlja2VkXCI6IF92bS5kcm9wZG93bk9wdGlvbkNsaWNrZWRcbiAgICB9XG4gIH0pIDogX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWctZHJvcGRvd25cIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiIGJ0biB0YWdcIixcbiAgICBjbGFzczogJ2JnLScgKyBfdm0udGFnLmNvbG9yLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRhZ0NsaWNrZWQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRhZy5uYW1lKSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJiMTg2NmNlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yYjE4NjZjZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFnLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duIHRhZy1kcm9wZG93blwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10b2dnbGUgYnRuIHRhZ1wiLFxuICAgIGNsYXNzOiAnYmctJyArIF92bS50YWcuY29sb3IsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJkcm9wZG93blwiLFxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwiZmFsc2VcIixcbiAgICAgIFwiaWRcIjogX3ZtLmlkXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGFnLm5hbWUpICsgXCJcXG4gICAgICAgIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FyZXQtZG93blwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IF92bS5pZFxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0udGFnLm9wdGlvbnMpLCBmdW5jdGlvbihvcHQpIHtcbiAgICByZXR1cm4gX2MoJ2xpJywgW19jKCdhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJocmVmXCI6IFwiI1wiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdm0uY2xpY2tPcHQob3B0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3Mob3B0Lm5hbWUpKV0pXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2NiNjYzNGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTNjYjY2MzRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWdEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDQwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZ3NcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwiZ3JvdXBcIixcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIi4uLlwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS50YWdzKSwgZnVuY3Rpb24odGFnKSB7XG4gICAgcmV0dXJuIF9jKCd0YWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRhZ1wiOiB0YWdcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcInRhZy1jbGlja2VkXCI6IF92bS50YWdTZWxlY3RlZFxuICAgICAgfVxuICAgIH0pXG4gIH0pKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhZ3Mtc2VsZWN0ZWRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJkcmFndWxhXCIsXG4gICAgICByYXdOYW1lOiBcInYtZHJhZ3VsYVwiLFxuICAgICAgdmFsdWU6IChfdm0uc2VsZWN0ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwidGFncy1saXN0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYmFnXCI6IFwiZmlyc3QtYmFnXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnNlbGVjdGVkKSwgZnVuY3Rpb24odGFnKSB7XG4gICAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgICBrZXk6IHRhZy5pZFxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWxcIixcbiAgICAgIGNsYXNzOiAnYmctJyArIHRhZy5jb2xvclxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKHRhZy5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgKHRhZy5vcHRpb24pID8gX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHRhZy5vcHRpb24ubmFtZSkpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZGVsZXRlVGFnKHRhZylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfYygnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiw5dcIildKV0pXSldKVxuICB9KSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY3YjE2N2FhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02N2IxNjdhYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL3RhZ3MvdGFncy52dWVcbi8vIG1vZHVsZSBpZCA9IDQxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZm9ybScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWhvcml6b250YWwgZm9ybS10b3VjaFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0ub25TdWJtaXQoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2h0ZXh0JylcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbC1sYWJlbCBjb2wteHMtMlwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5ldy10aXRsZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudGl0bGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEwXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2gudGV4dCksXG4gICAgICBleHByZXNzaW9uOiBcInRvdWNoLnRleHRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXRpdGxlXCIsXG4gICAgICBcIm5hbWVcIjogXCJ0b3VjaHRleHRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogXCJUaXRsZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlRpdGxlXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0udG91Y2gudGV4dClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC50ZXh0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaHRleHQnKSksXG4gICAgICBleHByZXNzaW9uOiBcImVycm9ycy5oYXMoJ3RvdWNodGV4dCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNodGV4dCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LXRpdGxlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5jb2xvcicpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTBcIlxuICB9LCBbX2MoJ2NvbXBhY3QtcGlja2VyJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnRvdWNoLmNvbG9yKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guY29sb3JcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udG91Y2guY29sb3IpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2UtY29sb3JcIjogX3ZtLm9uQ2hhbmdlQ29sb3IsXG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG91Y2guY29sb3IgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2hzdGFydCcpXG4gICAgfVxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWwgY29sLXhzLTJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJuZXctc3RhcnRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnN0YXJ0JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guc3RhcnQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0b3VjaC5zdGFydFwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJuZXctc3RhcnRcIixcbiAgICAgIFwibmFtZVwiOiBcInRvdWNoc3RhcnRcIixcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiZGF0YS12di1ydWxlc1wiOiBcInJlcXVpcmVkfG51bWVyaWNcIixcbiAgICAgIFwiZGF0YS12di1hc1wiOiBcIlN0YXJ0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiU3RhcnRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5zdGFydClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS50b3VjaC5zdGFydCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTZcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnN0YXJ0Rm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwic3RhcnRGbXRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmV3LXN0YXJ0LWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uc3RhcnRGbXQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uc3RhcnRGbXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5lcnJvcnMuaGFzKCd0b3VjaHN0YXJ0JykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaHN0YXJ0JylcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5maXJzdCgndG91Y2hzdGFydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdoYXMtZXJyb3InOiBfdm0uZXJyb3JzLmhhcygndG91Y2hlbmQnKVxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsIGNvbC14cy0yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZm9yXCI6IFwibmV3LWVuZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZW5kJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlLmluaXRpYWxcIixcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBcImluaXRpYWxcIjogdHJ1ZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udG91Y2guZW5kKSxcbiAgICAgIGV4cHJlc3Npb246IFwidG91Y2guZW5kXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmRcIixcbiAgICAgIFwibmFtZVwiOiBcInRvdWNoZW5kXCIsXG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImRhdGEtdnYtcnVsZXNcIjogXCJyZXF1aXJlZHxudW1lcmljXCIsXG4gICAgICBcImRhdGEtdnYtYXNcIjogXCJFbmRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLl9zKF92bS50b3VjaC5lbmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0udG91Y2guZW5kID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNlwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZW5kRm10KSxcbiAgICAgIGV4cHJlc3Npb246IFwiZW5kRm10XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcIm5ldy1lbmQtZm10XCIsXG4gICAgICBcIm5hbWVcIjogXCJuZXctZW5kLWZtdFwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0XCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF92bS5fcyhfdm0uZW5kRm10KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmVuZEZtdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmVycm9ycy5oYXMoJ3RvdWNoZW5kJykpLFxuICAgICAgZXhwcmVzc2lvbjogXCJlcnJvcnMuaGFzKCd0b3VjaGVuZCcpXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZmlyc3QoJ3RvdWNoZW5kJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbGxpZGUpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCLDl1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDQnLCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBmYSBmYS1iYW5cIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hlc19jYW50X292ZXJsYXAnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF93aXRoJykpICsgXCI6XFxuICAgICAgICAgICAgICAgICAgICBcIiksIF9jKCd1bCcsIF92bS5fbCgoX3ZtLmNvbGxpZGVUb3VjaGVzKSwgZnVuY3Rpb24oY29sbGlkZVRvdWNoKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFsoY29sbGlkZVRvdWNoLnByZXZpb3VzLmlkICE9IF92bS50b3VjaC5pZCkgPyBfYygnc3Ryb25nJywgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MudG91Y2hfb3ZlcmxhcF9tc2cnLCB7XG4gICAgICB0aXRsZTogY29sbGlkZVRvdWNoLnByZXZpb3VzLnRleHQsXG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5wcmV2aW91cy5zdGFydCksXG4gICAgICBlbmQ6IF92bS50b0hITU1TUyhjb2xsaWRlVG91Y2gucHJldmlvdXMuZW5kKVxuICAgIH0pKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChjb2xsaWRlVG91Y2guY3VycmVudC5pZCAhPSBfdm0udG91Y2guaWQpID8gX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvdWNoX292ZXJsYXBfbXNnJywge1xuICAgICAgdGl0bGU6IGNvbGxpZGVUb3VjaC5jdXJyZW50LnRleHQsXG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LnN0YXJ0KSxcbiAgICAgIGVuZDogX3ZtLnRvSEhNTVNTKGNvbGxpZGVUb3VjaC5jdXJyZW50LmVuZClcbiAgICB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpXSlcbiAgfSkpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0uZW5kSW52YWxpZCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJhbGVydFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIsOXXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGZhIGZhLWJhblwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy52YWxpZGF0aW9uX2Vycm9yJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnZhbGlkYXRpb25fZW5kX2dyZWF0ZXInKSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgdGV4dC1yaWdodFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Muc2F2ZScpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmNsb3NlKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmNhbmNlbCcpKSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTg1OTJlYTBjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04NTkyZWEwYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA0MThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1zb2xpZCBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLW1hcC1tYXJrZXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b3VjaGVzJykpICsgXCJcXG4gICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbKF92bS50b3VjaGVzLmxlbmd0aCkgPyBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9kby1saXN0IHVpLXNvcnRhYmxlXCJcbiAgfSwgX3ZtLl9sKChfdm0udG91Y2hlcyksIGZ1bmN0aW9uKHRvdWNoKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIsXG4gICAgICBzdHlsZTogKCdiYWNrZ3JvdW5kOicgKyB0b3VjaC5jb2xvci5oZXggKyAnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7JylcbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyh0b3VjaC50ZXh0KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NtYWxsJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvY2stb1wiXG4gICAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Muc3RhcnRfYXQnLCB7XG4gICAgICBzdGFydDogX3ZtLnRvSEhNTVNTKHRvdWNoLnN0YXJ0KVxuICAgIH0pKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc21hbGwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCBsYWJlbC1kYW5nZXJcIlxuICAgIH0sIFtfYygnaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNsb2NrLW9cIlxuICAgIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLmVuZF9hdCcsIHtcbiAgICAgIGVuZDogX3ZtLnRvSEhNTVNTKHRvdWNoLmVuZClcbiAgICB9KSkgKyBcIlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRvb2xzXCJcbiAgICB9LCBbX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1lZGl0XCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5lZGl0VG91Y2godG91Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2knLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaC1vXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5yZW1vdmVUb3VjaCh0b3VjaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXSldKVxuICB9KSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0udG91Y2hlcy5sZW5ndGgpID8gX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3Mubm9fdG91Y2hlcycpKSldKSA6IF92bS5fZSgpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05NjQwODc1Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOTY0MDg3NWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXNvbGlkIGNvbGxhcHNlZC1ib3hcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImluc3BlY3RvckJveFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1yaWdodCBib3gtdG9vbHNcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJpZFwiOiBcImluc3BlY3RvclRvb2dsZXJcIixcbiAgICAgIFwiZGF0YS13aWRnZXRcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcInRvb2x0aXBcIixcbiAgICAgIFwidGl0bGVcIjogXCJcIixcbiAgICAgIFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiOiBcIkNvbGxhcHNlXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVPcGVuXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiXG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FsZW5kYXJcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuaW5zcGVjdG9yJykpICsgXCJcXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnRvdWNoKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0IGluc3BlY3Rvci1pbmZvXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCIsXG4gICAgc3R5bGU6ICgnYmFja2dyb3VuZDonICsgX3ZtLmJhY2tncm91bmQgKyAnOyBoZWlnaHQ6MjBweDsgd2lkdGg6MjBweDttYXJnaW4tdG9wOiAxcHg7IG1hcmdpbi1yaWdodDo1cHgnKVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnQgaW5zcGVjdG9yLWluZm8tLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgbGFiZWwtc3VjY2Vzc1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5zdGFydCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIGxhYmVsLWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5lbmQpKV0pXSkgOiBfdm0uX2UoKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgWyhfdm0udG91Y2gpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtaW5zcGVjdG9yLW1lbnVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbKF92bS5yZWNvcmRpbmdUb3VjaCkgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNyZWF0ZUFjdGlvblxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy5lbmRfYWN0aW9uJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5wbGF5XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmFcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2ZhLXBsYXknOiAhX3ZtLnBsYXlpbmcsICdmYS1wYXVzZSB0ZXh0LWRhbmdlcic6IF92bS5wbGF5aW5nXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wbGF5aW5nID8gX3ZtLiR0KCdzY291dGluZ3MucGF1c2UnKSA6IF92bS4kdCgnc2NvdXRpbmdzLnBsYXknKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuLWdyb3VwXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5iYWNrd2FyZCgxMClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1mYXN0LWJhY2t3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5iYWNrd2FyZCg1KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWJhY2t3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcndhcmQoNSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1mb3J3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmZvcndhcmQoMTApXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZmFzdC1mb3J3YXJkXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCBzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgwLjI1KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjI1IHhcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnBsYXliYWNrUmF0ZSgwLjUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNSB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wbGF5YmFja1JhdGUoMSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5wbGF5YmFja1JhdGUoMS41KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucGxheWJhY2tSYXRlKDIpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgeFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKV0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnVcIlxuICB9LCBbKF92bS50b3VjaCkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02IG5vLXBhZGRpbmctcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MubGVmdF9hY3Rpb25zJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTYgbm8tcGFkZGluZy1sZWZ0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXRobGV0ZS1tZW51LXRpdGxlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnJpZ2h0X2FjdGlvbnMnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0udG91Y2gpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiBuby1wYWRkaW5nLXJpZ2h0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXRobGV0ZS1tZW51LWxlZnRcIlxuICB9LCBbX2MoJ3RhZ3MnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFnc1wiOiBfdm0udGFnc0xlZnQsXG4gICAgICBcInNlbGVjdGVkXCI6IF92bS5hY3Rpb24ubGVmdFRhZ3MsXG4gICAgICBcInR5cGVcIjogXCJsZWZ0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcInRhZy1kZWxldGVkXCI6IF92bS50YWdEZWxldGVkTGVmdCxcbiAgICAgIFwidGFnLXNlbGVjdGVkXCI6IF92bS50YWdTZWxlY3RlZExlZnRcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtNiBuby1wYWRkaW5nLWxlZnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdGhsZXRlLW1lbnUtbGVmdFwiXG4gIH0sIFtfYygndGFncycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0YWdzXCI6IF92bS50YWdzUmlnaHQsXG4gICAgICBcInNlbGVjdGVkXCI6IF92bS5hY3Rpb24ucmlnaHRUYWdzLFxuICAgICAgXCJ0eXBlXCI6IFwicmlnaHRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwidGFnLWRlbGV0ZWRcIjogX3ZtLnRhZ0RlbGV0ZWRSaWdodCxcbiAgICAgIFwidGFnLXNlbGVjdGVkXCI6IF92bS50YWdTZWxlY3RlZFJpZ2h0XG4gICAgfVxuICB9KV0sIDEpXSldKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbnNwZWN0b3JcIlxuICAgIH1cbiAgfSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWExOTllNjk2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hMTk5ZTY5NiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2NhbnZhcy9pbnNwZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSA0MjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2FkbWluLWhlYWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBfdm0udGl0bGUsXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgb3ZlcmxheS13cmFwcGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGlzLWZsZXhcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTYgcGxheWVyLWNvbnRhaW5lclwiXG4gIH0sIFsoX3ZtLmluaXRpYWxpemVkKSA/IF9jKCdkbmMtcGxheWVyJywge1xuICAgIHJlZjogXCJwbGF5ZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzb3VyY2VcIjogX3ZtLnNvdXJjZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNiB0b3VjaGVzLWNvbnRhaW5lclwiXG4gIH0sIFtfYygndG91Y2hlcy1saXN0JyldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5wbGF5ZXJSZWFkeSksXG4gICAgICBleHByZXNzaW9uOiBcInBsYXllclJlYWR5XCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtYWlsYm94LWNvbnRyb2xzIGNvbnRyb2wtbWVudVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ncm91cFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5zdGFydGVkXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uc3RhcnRUb3VjaFxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgY2xhc3M6IHtcbiAgICAgICdmYS1wbGF5JzogIV92bS5zdGFydGVkLCAnZmEtY2lyY2xlIHRleHQtZGFuZ2VyJzogX3ZtLnN0YXJ0ZWRcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnN0YXJ0ZWQgPyBfdm0uJHQoJ3Njb3V0aW5ncy5yZWNvcmRpbmcnKSA6IF92bS4kdCgnc2NvdXRpbmdzLnN0YXJ0X3RvdWNoJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0uc3RhcnRlZFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmVuZFRvdWNoXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3RvcFwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdzY291dGluZ3MuZW5kX3RvdWNoJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtcmlnaHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tZ3JvdXBcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udG9vZ2xlVGltZWxpbmVcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnc2NvdXRpbmdzLnRvb2dsZV90aW1lbGluZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGVmYXVsdCBidG4tc21cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b29nbGVJbnNwZWN0b3JcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1leWVcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ3Njb3V0aW5ncy50b29nbGVfaW5zcGVjdG9yJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmVkaXQpID8gX2MoJ2VkaXQtdG91Y2gtZm9ybScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpbml0LXRvdWNoXCI6IF92bS50b3VjaCxcbiAgICAgIFwiZHVyYXRpb25cIjogX3ZtLmR1cmF0aW9uXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjYW5jZWwtbmV3LXRvdWNoXCI6IF92bS5jYW5jZWxFZGl0VG91Y2gsXG4gICAgICBcImFkZC1uZXctdG91Y2hcIjogX3ZtLnNhdmVFZGl0VG91Y2hcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgWyhfdm0ucGxheWVyUmVhZHkpID8gX2MoJ2luc3BlY3RvcicsIHtcbiAgICByZWY6IFwiaW5zcGVjdG9yXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxheWluZ1wiOiBfdm0ucGxheWluZ1xuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyXCJcbiAgfSwgWyhfdm0ucGxheWVyUmVhZHkpID8gX2MoJ3RpbWVsaW5lJykgOiBfdm0uX2UoKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnBsYXllclJlYWR5KSxcbiAgICAgIGV4cHJlc3Npb246IFwicGxheWVyUmVhZHlcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zYXZlXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS4kdCgnZm9ybXMuc2F2ZScpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy02XCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNhbmNlbFxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdmb3Jtcy5iYWNrJykpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgKCFfdm0ucGxheWVyUmVhZHkpID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvdmVybGF5XCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXJlZnJlc2ggZmEtc3BpblwiXG4gIH0pXSkgOiBfdm0uX2UoKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZjFjZjg2NjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWYxY2Y4NjY4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygndmlkZW8nLCB7XG4gICAgcmVmOiBcInBsYXllclwiLFxuICAgIHN0YXRpY0NsYXNzOiBcInZpZGVvLWpzIHZqcy1kZWZhdWx0LXNraW5cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJjb250cm9sc1wiOiBcIlwiLFxuICAgICAgXCJwcmVsb2FkXCI6IFwiYXV0b1wiLFxuICAgICAgXCJwb3N0ZXJcIjogX3ZtLnBvc3RlcixcbiAgICAgIFwiZGF0YS1zZXR1cFwiOiBfdm0uc3RyU291cmNlXG4gICAgfVxuICB9KV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWZiNzkyYjY2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1mYjc5MmI2NiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0MzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY3YjE2N2FhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWdzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0OTVkMDZmNlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02N2IxNjdhYSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFncy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjdiMTY3YWEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZ3MudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY3YjE2N2FhIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSA0Mzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWExOTllNjk2IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjY1NzUwODljXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWExOTllNjk2IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWExOTllNjk2IS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbnNwZWN0b3IudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWExOTllNjk2IS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9jYW52YXMvaW5zcGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTAzOTFlZjMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3YWUzMjJlYlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTAzOTFlZjMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTAzOTFlZjMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RpbWVsaW5lLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTAzOTFlZjMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvY2FudmFzL3RpbWVsaW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWMyZWM4OWMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25ld1RvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMWUwYzZlZTdcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFjMmVjODljIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9uZXdUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xYzJlYzg5YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWMyZWM4OWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWMyZWM4OWMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL25ld1RvdWNoRm9ybS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMmFhNTY0NjhcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFjMmVjODljIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9uZXdUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xYzJlYzg5YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vbmV3VG91Y2hGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWMyZWM4OWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvbmV3VG91Y2hGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmIxODY2Y2UhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3RhZy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNjRhOWM3OGFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTJiMTg2NmNlIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi90YWcudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYjE4NjZjZSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmIxODY2Y2UhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvdGFncy90YWcudnVlXG4vLyBtb2R1bGUgaWQgPSA0NDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zY2I2NjM0YSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImI3NGU0Mjk2XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zY2I2NjM0YSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zY2I2NjM0YSEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdGFnRHJvcGRvd24udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zY2I2NjM0YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy90YWdzL3RhZ0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODU5MmVhMGMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2VkaXRUb3VjaEZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjFlMmYzZTYwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04NTkyZWEwYyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZWRpdFRvdWNoRm9ybS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTg1OTJlYTBjIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODU5MmVhMGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL3Njb3V0aW5nL3RvdWNoZXMvZm9ybXMvZWRpdFRvdWNoRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTg1OTJlYTBjIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9lZGl0VG91Y2hGb3JtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3NzZlMWI2ZlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtODU5MmVhMGMhLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL2VkaXRUb3VjaEZvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi04NTkyZWEwYyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vZWRpdFRvdWNoRm9ybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTg1OTJlYTBjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9zY291dGluZy90b3VjaGVzL2Zvcm1zL2VkaXRUb3VjaEZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA0NTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05NjQwODc1YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjY4NWRjYmZkXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05NjQwODc1YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05NjQwODc1YyEuLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdG91Y2hlc0xpc3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi05NjQwODc1YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvc2NvdXRpbmcvdG91Y2hlcy9saXN0cy90b3VjaGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWZiNzkyYjY2IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wbGF5ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjcwODg0ZWQzXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1mYjc5MmI2NiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGxheWVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZmI3OTJiNjYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BsYXllci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWZiNzkyYjY2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2dsb2JhbC92aWRlby9wbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0NjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==